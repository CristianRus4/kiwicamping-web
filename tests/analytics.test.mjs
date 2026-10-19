import assert from "node:assert/strict";
import test from "node:test";
import vm from "node:vm";
// Run with `node --import tsx --test` (npm test).
import { analyticsScript, CONSENT_REGIONS, COOKIE_EXPIRES_SECONDS, CONSENT_STORAGE_KEY } from "../lib/analytics.ts";
import { appStoreUrl, campaignToken, smartBannerContent } from "../lib/app-store.ts";
import { APP_STORE_URL } from "../lib/site.ts";

/**
 * The GA4 bootstrap runs in every visitor's browser and nowhere in the build, so it is executed here
 * against a small stub DOM. The stub covers exactly what the script touches: localStorage, the time
 * zone, <main> data attributes, the consent bar, delegated clicks and cookies.
 */
function run({ timeZone = "Pacific/Auckland", stored = null, storageThrows = false, main = { "data-page-kind": "guide", "data-locale": "de", "data-slug": "doc-hut-rules-etiquette", "data-category": "Rules & safety" }, bar = true, readyState = "loading" } = {}) {
  const listeners = {};
  const storage = new Map(stored ? [[CONSENT_STORAGE_KEY, stored]] : []);
  const classes = new Set();
  const cookies = new Map([["_ga", "GA1.1.1"], ["_ga_TEST", "GS1.1"], ["other", "1"]]);
  const button = (name) => ({ name, handlers: [], addEventListener(type, handler) { this.handlers.push(handler); }, focus() { this.focused = true; } });
  const accept = button("accept"), decline = button("decline");
  const barElement = bar ? { hidden: true, querySelector: (selector) => (selector === "[data-consent-accept]" ? accept : selector === "[data-consent-decline]" ? decline : decline) } : null;
  const mainElement = main ? { getAttribute: (name) => main[name] ?? null } : null;
  const appended = [];
  const document = {
    readyState,
    head: { appendChild: (node) => appended.push(node) },
    documentElement: { classList: { add: (name) => classes.add(name), remove: (name) => classes.delete(name) } },
    createElement: () => ({}),
    querySelector: (selector) => (selector === "main[data-page-kind]" ? mainElement : selector === "[data-consent-bar]" ? barElement : null),
    addEventListener: (type, handler) => { (listeners[type] ??= []).push(handler); },
    get cookie() { return [...cookies].map(([name, value]) => `${name}=${value}`).join("; "); },
    set cookie(value) { const [pair, ...attributes] = value.split(";"); const [name] = pair.split("="); if (attributes.some((attribute) => attribute.trim() === "Max-Age=0")) cookies.delete(name.trim()); },
  };
  const window = {
    localStorage: {
      getItem: (name) => { if (storageThrows) throw new Error("blocked"); return storage.get(name) ?? null; },
      setItem: (name, value) => { if (storageThrows) throw new Error("blocked"); storage.set(name, value); },
    },
  };
  const Intl = { DateTimeFormat: () => ({ resolvedOptions: () => ({ timeZone }) }) };
  vm.runInNewContext(analyticsScript("G-TEST12345"), { window, document, Intl, URL, location: { hostname: "campingapp.nz" }, Object, Date });
  const fire = (type, event = {}) => (listeners[type] ?? []).forEach((handler) => handler({ type, preventDefault() {}, ...event }));
  // Through JSON, so objects built inside the sandbox compare equal to plain ones here.
  const calls = () => JSON.parse(JSON.stringify(window.dataLayer.map((entry) => Array.from(entry))));
  return { window, document, calls, fire, accept, decline, barElement, classes, storage, cookies, appended };
}

const commands = (calls) => calls.map((call) => call.slice(0, 2).join(" "));

test("consent defaults come first, then the config with signals and ad personalisation off", () => {
  const page = run();
  const calls = page.calls();
  assert.deepEqual(commands(calls).slice(0, 4), ["consent default", "consent default", "js " + calls[2][1], "config G-TEST12345"]);
  assert.deepEqual(calls[0][2], { ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied", analytics_storage: "denied", region: [...CONSENT_REGIONS], wait_for_update: 500 });
  assert.deepEqual(calls[1][2], { ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied", analytics_storage: "granted" });
  assert.deepEqual(calls[3][2], { send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false, cookie_expires: COOKIE_EXPIRES_SECONDS });
  assert.equal(COOKIE_EXPIRES_SECONDS, 395 * 86400, "13 months, as the privacy policy says");
  for (const code of ["AT", "DE", "FR", "IE", "IS", "LI", "NO", "GB", "CH", "AX", "RE"]) assert.ok(CONSENT_REGIONS.includes(code), code);
  assert.equal(page.appended[0].src, "https://www.googletagmanager.com/gtag/js?id=G-TEST12345");
  assert.equal(page.appended[0].async, true);
  // The page view waits for <main>, then carries its labels.
  page.fire("DOMContentLoaded");
  const labels = { page_kind: "guide", site_locale: "de", guide_slug: "doc-hut-rules-etiquette", guide_category: "Rules & safety", content_group: "Rules & safety" };
  assert.deepEqual(page.calls().at(-2), ["set", labels], "page labels are set for every later event, not only the page view");
  assert.deepEqual(page.calls().at(-1), ["event", "page_view", labels]);
});

test("a visitor in a European time zone is asked, and stays denied until they answer", () => {
  for (const timeZone of ["Europe/Berlin", "Atlantic/Canary", "Asia/Nicosia", "Indian/Reunion"]) {
    const page = run({ timeZone, readyState: "complete" });
    const calls = page.calls();
    assert.deepEqual(calls[2], ["consent", "update", { analytics_storage: "denied" }], `${timeZone}: denied before the config`);
    assert.equal(commands(calls)[4], "config G-TEST12345");
    assert.equal(page.barElement.hidden, false, `${timeZone}: the bar shows`);
    assert.ok(page.classes.has("consent-open"), "the sticky CTA hides while the bar is open");
  }
  for (const timeZone of ["Pacific/Auckland", "America/New_York", "Asia/Tokyo", "Australia/Sydney"]) {
    const page = run({ timeZone, readyState: "complete" });
    assert.equal(page.barElement.hidden, true, `${timeZone}: no bar`);
    assert.ok(!page.calls().some((call) => call[0] === "consent" && call[1] === "update"), `${timeZone}: no update`);
  }
});

test("Accept grants analytics storage only; Decline denies it and clears the GA cookies", () => {
  const accepted = run({ timeZone: "Europe/Paris", readyState: "complete" });
  accepted.accept.handlers[0]();
  assert.deepEqual(accepted.calls().at(-1), ["consent", "update", { analytics_storage: "granted" }]);
  assert.equal(accepted.storage.get(CONSENT_STORAGE_KEY), "granted");
  assert.equal(accepted.barElement.hidden, true);
  assert.ok(!accepted.classes.has("consent-open"));

  const declined = run({ timeZone: "Europe/Paris", readyState: "complete" });
  declined.decline.handlers[0]();
  assert.deepEqual(declined.calls().at(-1), ["consent", "update", { analytics_storage: "denied" }]);
  assert.equal(declined.storage.get(CONSENT_STORAGE_KEY), "denied");
  assert.deepEqual([...declined.cookies.keys()], ["other"], "_ga and _ga_<id> are removed, other cookies are not");
});

test("a stored choice is applied before the config and the bar stays closed", () => {
  for (const stored of ["granted", "denied"]) {
    const page = run({ timeZone: "Europe/Madrid", stored, readyState: "complete" });
    assert.deepEqual(page.calls()[2], ["consent", "update", { analytics_storage: stored }]);
    assert.equal(page.barElement.hidden, true);
  }
  // Anything else in storage is not a choice.
  const junk = run({ timeZone: "Europe/Madrid", stored: "yes", readyState: "complete" });
  assert.equal(junk.barElement.hidden, false);
});

test("the footer link reopens the bar for anyone", () => {
  const page = run({ timeZone: "Pacific/Auckland", stored: "granted", readyState: "complete" });
  page.fire("click", { target: { closest: (selector) => (selector === "[data-consent-open]" ? {} : null) } });
  assert.equal(page.barElement.hidden, false);
  assert.ok(page.decline.focused || page.accept.focused);
});

test("blocked storage, a missing <main> and a missing bar never break the page", () => {
  const blocked = run({ timeZone: "Europe/Rome", storageThrows: true, readyState: "complete" });
  assert.equal(blocked.barElement.hidden, false, "no readable choice means the visitor is asked");
  blocked.accept.handlers[0]();
  assert.deepEqual(blocked.calls().at(-1), ["consent", "update", { analytics_storage: "granted" }], "the choice still applies for this page");

  const bare = run({ main: null, bar: false, readyState: "complete" });
  assert.deepEqual(bare.calls().at(-2), ["set", { content_group: "other" }]);
  assert.deepEqual(bare.calls().at(-1), ["event", "page_view", { content_group: "other" }]);
  assert.equal(typeof bare.window.acTrack, "function");
});

test("App Store clicks, including middle clicks, send app_store_click with placement and campaign", () => {
  const page = run({ readyState: "complete" });
  const href = "https://apps.apple.com/app/camping-map-nz-kiwicamping/id6746952595?pt=118473920&ct=w_card_de&mt=8";
  const link = { href, getAttribute: (name) => (name === "data-cta" ? "card" : null) };
  const target = { closest: (selector) => (selector === 'a[href*="apps.apple.com"]' ? link : null) };
  page.fire("click", { target });
  const expected = { page_kind: "guide", site_locale: "de", guide_slug: "doc-hut-rules-etiquette", guide_category: "Rules & safety", placement: "card", campaign_token: "w_card_de", link_url: href, transport_type: "beacon" };
  assert.deepEqual(page.calls().at(-1), ["event", "app_store_click", expected]);
  const before = page.calls().length;
  page.fire("auxclick", { target, button: 2 });
  assert.equal(page.calls().length, before, "a right click is not a visit");
  page.fire("auxclick", { target, button: 1 });
  assert.deepEqual(page.calls().at(-1), ["event", "app_store_click", expected]);
  // Other links are not store clicks.
  page.fire("click", { target: { closest: () => null } });
  assert.equal(page.calls().length, before + 1);
  page.window.acTrack("tool_used", { tool: "fuel" });
  assert.deepEqual(page.calls().at(-1), ["event", "tool_used", { page_kind: "guide", site_locale: "de", guide_slug: "doc-hut-rules-etiquette", guide_category: "Rules & safety", tool: "fuel" }]);
});

test("campaign links: plain without a provider token, pt/ct/mt with one", () => {
  assert.equal(appStoreUrl({ placement: "hero", locale: "en" }, ""), APP_STORE_URL);
  assert.equal(appStoreUrl({ placement: "hero", locale: "zh-hans" }, "118473920"), `${APP_STORE_URL}?pt=118473920&ct=w_hero_zh-hans&mt=8`);
  assert.equal(smartBannerContent("de", ""), "app-id=6746952595");
  assert.equal(smartBannerContent("de", "118473920"), "app-id=6746952595, affiliate-data=pt=118473920&ct=w_sb_de");
  assert.throws(() => campaignToken("hero", "EN"), /Invalid/);
  assert.throws(() => campaignToken("hero", "x".repeat(40)), /Invalid/);
});
