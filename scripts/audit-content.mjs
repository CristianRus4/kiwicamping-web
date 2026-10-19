import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const contentFiles = (await readdir(resolve(root, "lib/content"))).filter((name) => name.endsWith(".ts")).map((name) => `lib/content/${name}`);
const publicFiles = [...contentFiles, "lib/article-model.ts", "lib/site.ts", "app/page.tsx", "app/guides/page.tsx", "app/tools/page.tsx", "app/support/page.tsx", "app/privacy/page.tsx", "app/terms/page.tsx", "components/footer.tsx", "components/guide-article.tsx"];
const content = (await Promise.all(publicFiles.map((file) => readFile(resolve(root, file), "utf8")))).join("\n");

const entries = [...content.matchAll(/slug:\s*"([^"]+)"(?:,\s*legacyPath:\s*"([^"]+)")?/g)].map((match) => ({ slug: match[1], legacyPath: match[2] }));
const slugs = entries.map((entry) => entry.slug);
assert.ok(slugs.length >= 78, `Expected at least 78 articles, found ${slugs.length}`);
assert.equal(new Set(slugs).size, slugs.length, "Article slugs must be unique");

/**
 * These URLs are published and ranking on campingapp.nz today. Losing one is an SEO regression, not
 * a refactor, so the set is asserted explicitly rather than derived from whatever the content
 * currently happens to declare.
 */
const rankingUrls = [
  "/best-nz-camping-apps.html", "/campfire-rules-nz.html", "/camping-costs-nz.html", "/camping-packing-list-nz.html",
  "/doc-campsites-huts-guide.html", "/dump-stations-nz.html", "/free-camping-nz-legal.html", "/freedom-camping-rules-nz.html",
  "/holiday-parks-nz-booking-guide.html", "/nz-camping-seasons-weather-sandflies.html", "/responsible-camping-nz.html",
  "/self-contained-vehicles-nz.html", "/top-scenic-campsites-nz.html", "/two-week-camper-itinerary-nz.html",
  "/where-to-camp-in-new-zealand.html",
];
const declared = new Set(entries.filter((entry) => entry.legacyPath).map((entry) => entry.legacyPath));
for (const url of rankingUrls) assert.ok(declared.has(url), `Ranking URL ${url} is no longer published by any article`);
assert.equal(declared.size, rankingUrls.length, `Unexpected legacy path declared: ${[...declared].filter((url) => !rankingUrls.includes(url)).join(", ")}`);

assert.doesNotMatch(content, /—/, "Em dashes are prohibited in public English content");
// An escaped \u2014 renders as an em dash just the same, so the literal escape is banned too.
assert.doesNotMatch(content, /\\u2014/, "Escaped em dashes are prohibited");
// Guards against AussieCamps copy leaking into the New Zealand site. A bare country name is fine
// (travellers do come from Australia); Australian-specific phrasing and branding is not.
assert.doesNotMatch(content, /AussieCamps|Australian|Traditional Owners|(?:across|around|throughout|in) Australia\b|Australia's|not available yet|these names are intentionally|the website does not|editorial landscape image|realistic itinerary/i, "Foreign, internal or generic copy found");
assert.doesNotMatch(content, /https:\/\/images\.unsplash\.com/i, "Remote article images are prohibited");
// Copy must address travellers, not the developer building the page.
assert.doesNotMatch(content, /this (section|page|guide|article) (explains|describes|shows|covers|will)|here goes|lorem ipsum|placeholder text|TODO|FIXME|coming soon|sample text/i, "Developer-facing or placeholder copy found");

/**
 * Translation contract.
 *
 * Every guide is published in every locale, road trips and the legacy .html articles included; ones
 * a locale has not translated are served whole in English, noindex.
 *
 * What this enforces is that a locale file never contains a translation the site cannot use: if an
 * article is in the file, it must be complete and structurally identical to the English it
 * translates, or the site quietly falls back to English and the work looks done when it is not.
 * That is the check that would have caught the guides being rewritten from three sections to seven
 * underneath their translations.
 */
const { localeCodes, locales, liveLocales } = await import("../lib/locales.ts");
const { fullyTranslatedSlugs, isArticleTranslated, isStaticPageTranslated, isTranslated, requiredUiKeys, translationProgress } = await import("../lib/localized.ts");
const { staleFiles } = await import("./sync-locales.mjs");
const { leaves, staleSummary } = await import("./translations-stamp.mjs");
const { translationSourceText } = await import("../lib/translation-source.ts");

// Translators work from en.json, so it must say exactly what the English site says.
assert.equal(await readFile(resolve(root, "lib/translations/en.json"), "utf8"), translationSourceText(), "lib/translations/en.json is stale: run `npm run translations:source`");

// The registry is the only hand-kept list of languages; the barrel and engine config follow it.
const stale = staleFiles();
assert.equal(stale.length, 0, `Stale locale files, run npm run locales:sync: ${stale.join(", ")}`);
assert.deepEqual([...localeCodes], locales.map((entry) => entry.code), "lib/translations/index.ts is out of step with lib/locales.json");

/**
 * Numbers and brands survive translation. Checked on what the site actually renders: every UI and
 * consent string, and each article or page whose translation is complete.
 *
 * - Every amount after $, NZ$, A$, US$, NZD or AUD in English must appear as a number in the
 *   translation, and every amount next to a currency in the translation must exist in the English.
 *   Either may sit before or after the symbol and use the locale's separators ("NZ$1,250" can be
 *   "1.250 NZ$"), a range may be written once ("NZ$110 to NZ$180" as "110 bis 180 NZ$"), and CJK
 *   may count in 万/만. $0 may be written as "free". Error.
 * - A brand the English names (KiwiCamping, App Store, Apple, ...) must be named in the translation,
 *   and the translation must not name one the English does not: error. A different count (a
 *   repeated or pronoun-replaced mention) is printed as a warning for the translator.
 */
const NUMBER = String.raw`\d{1,3}(?:[,.\u00a0\u202f ']\d{3})+(?:[.,]\d+)?|\d+(?:[.,]\d+)?`;
const CURRENCY = String.raw`NZ\$|A\$|AU\$|US\$|\$|NZD|AUD`;
const MULTIPLIERS = { "万": 1e4, "萬": 1e4, "만": 1e4, "千": 1e3, "천": 1e3, "億": 1e8, "亿": 1e8, "억": 1e8 };
const plain = (text) => text.replace(/<[^>]+>/g, "");
/** Both readings of a written number: 1,250 / 1.250 / 1 250 as thousands, 12,50 as a decimal. */
const readings = (raw) => {
  const digits = raw.replace(/[\u00a0\u202f ']/g, "");
  return [Number(digits.replace(/,/g, "")), Number(digits.replace(/\./g, "").replace(",", "."))].filter(Number.isFinite);
};
function numbersIn(text) {
  const out = new Set();
  for (const match of plain(text).matchAll(new RegExp(`(${NUMBER})\\s?([万萬만千천億亿억])?`, "gu"))) {
    for (const value of readings(match[1])) { out.add(value); if (match[2]) out.add(value * MULTIPLIERS[match[2]]); }
  }
  return out;
}
const englishAmounts = (text) => [...plain(text).matchAll(new RegExp(String.raw`(?:${CURRENCY})\s?(${NUMBER})`, "gu"))].map((match) => Number(match[1].replace(/,/g, "")));
const translatedAmounts = (text) => [
  ...plain(text).matchAll(new RegExp(String.raw`(?:${CURRENCY})\s?(${NUMBER})`, "gu")),
  ...plain(text).matchAll(new RegExp(String.raw`(${NUMBER})\s?(?:${CURRENCY})`, "gu")),
].map((match) => readings(match[1]));

const brands = ["KiwiCamping", "App Store", "Apple", "iPhone", "iCloud", "Google", "CamperMate", "Rankers", "WikiCamps", "MetService"];
// As the translation engine counts protected terms: Latin, Cyrillic and Greek letters and digits
// end a word (CJK attaches straight to a Latin name), and German and Dutch add a genitive -s.
const WORD = "\\p{Script=Latin}\\p{Script=Cyrillic}\\p{Script=Greek}\\p{N}";
const genitive = new Set(["de", "nl"]);
const brandCount = (text, brand, locale) => plain(text).match(new RegExp(`(?<![${WORD}])${brand.replace(/[.$]/g, "\\$&")}${locale && genitive.has(locale) ? "s?" : ""}(?![${WORD}])`, "gu"))?.length ?? 0;

const source = leaves(JSON.parse(await readFile(resolve(root, "lib/translations/en.json"), "utf8")));
const summary = [];
const warnings = [];
const errors = [];
for (const locale of localeCodes) {
  const translated = JSON.parse(await readFile(resolve(root, `lib/translations/${locale}.json`), "utf8"));
  assert.equal(translated.locale ?? locale, locale, `lib/translations/${locale}.json declares locale ${translated.locale}`);
  assert.doesNotMatch(JSON.stringify(translated), /—/, `${locale} contains an em dash`);

  const complete = new Set(fullyTranslatedSlugs(locale));
  for (const slug of Object.keys(translated.articles ?? {})) {
    assert.ok(complete.has(slug), `${locale}/${slug} is in the translation file but is incomplete or structurally stale, so the site falls back to English for it. Finish it or remove it.`);
  }

  // Only the orchestrator flips a locale to live, and only once its interface is complete.
  if (liveLocales.includes(locale)) {
    const missing = requiredUiKeys(locale).filter((key) => !(typeof translated.ui?.[key] === "string" && translated.ui[key].trim()));
    assert.ok(isTranslated(locale), `${locale} is live in lib/locales.json but its interface is incomplete: ${missing.slice(0, 12).join(", ")}${missing.length > 12 ? ` and ${missing.length - 12} more` : ""}`);
  }

  const rendered = leaves({
    ui: translated.ui ?? {},
    consent: translated.consent ?? {},
    pages: Object.fromEntries(["support", "privacy", "terms"].filter((kind) => isStaticPageTranslated(locale, kind)).map((kind) => [kind, translated.pages[kind]])),
    articles: Object.fromEntries(Object.keys(translated.articles ?? {}).filter((slug) => isArticleTranslated(locale, slug)).map((slug) => [slug, translated.articles[slug]])),
  });
  for (const [key, { value }] of rendered) {
    const english = source.get(key)?.value;
    if (!english || !value) continue;
    const ours = numbersIn(value);
    const theirs = numbersIn(english);
    for (const amount of englishAmounts(english)) if (amount !== 0 && !ours.has(amount)) errors.push(`${locale} ${key}: English amount ${amount} is missing`);
    for (const amount of translatedAmounts(value)) if (!amount.some((reading) => reading === 0 || theirs.has(reading))) errors.push(`${locale} ${key}: amount ${amount[0]} is not in the English`);
    for (const brand of brands) {
      const want = brandCount(english, brand);
      const have = brandCount(value, brand, locale);
      if ((want > 0) !== (have > 0)) errors.push(`${locale} ${key}: ${brand} named ${want} time(s) in English, ${have} in the translation`);
      else if (want !== have) warnings.push(`${locale} ${key}: ${brand} ${want} in English, ${have} translated`);
    }
  }

  const progress = translationProgress(locale);
  const stamps = staleSummary(locale);
  const status = locales.find((entry) => entry.code === locale).status;
  summary.push(`${locale} (${status}) ${progress.ui}/${progress.uiTotal} ui, ${progress.articles}/${progress.articlesTotal} guides, ${progress.pages}/3 pages, ${stamps.stamped ? `${stamps.stale.length} stale, ${stamps.unstamped} unstamped` : "not stamped"}`);
}
assert.equal(errors.length, 0, `Translations changed a number or a brand:\n  ${errors.join("\n  ")}`);

console.log(`Content audit passed: ${slugs.length} unique articles, all ${rankingUrls.length} ranking URLs preserved.`);
console.log(`Translations:\n  ${summary.join("\n  ")}`);
if (warnings.length) console.log(`Brand mention counts that differ from English (check, not an error):\n  ${warnings.join("\n  ")}`);
