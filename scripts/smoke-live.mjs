#!/usr/bin/env node
/**
 * Smoke test for the live site, run after every deploy: `npm run smoke:live`.
 *
 * The build and its tests prove what was exported; this proves what campingapp.nz actually serves
 * once GitHub Pages has picked the artifact up. For a handful of representative pages plus every
 * legacy .html URL (they carry most of this site's search traffic) it checks:
 *
 * - the URL answers 200 directly, without a redirect;
 * - the page is self-canonical and carries a robots meta tag that matches the sitemap;
 * - with a GA4 measurement ID configured, the analytics bootstrap and that ID are present
 *   (and with none configured, that no analytics script is);
 * - with an App Store provider token configured, every store link carries `pt=` and a `ct=` campaign.
 *
 * Usage: npm run smoke:live [-- --base https://campingapp.nz]
 * Runs under tsx so it reads the same constants the site was built with (lib/site.ts).
 */
import { APPLE_PROVIDER_TOKEN, GA_MEASUREMENT_ID, SITE_URL } from "../lib/site.ts";

const argBase = process.argv.indexOf("--base");
const base = (argBase > -1 ? process.argv[argBase + 1] : process.env.SMOKE_BASE_URL ?? SITE_URL).replace(/\/$/, "");
// GitHub Pages serves the same file whatever the query string, and the CDN caches by full URL, so a
// unique query string reads the freshly deployed file rather than a cached copy.
const bust = `smoke=${Date.now()}`;

const legacyUrls = [
  "/best-nz-camping-apps.html", "/campfire-rules-nz.html", "/camping-costs-nz.html", "/camping-packing-list-nz.html",
  "/doc-campsites-huts-guide.html", "/dump-stations-nz.html", "/free-camping-nz-legal.html", "/freedom-camping-rules-nz.html",
  "/holiday-parks-nz-booking-guide.html", "/nz-camping-seasons-weather-sandflies.html", "/responsible-camping-nz.html",
  "/self-contained-vehicles-nz.html", "/top-scenic-campsites-nz.html", "/two-week-camper-itinerary-nz.html",
  "/where-to-camp-in-new-zealand.html",
];
const pages = ["/", "/guides/doc-hut-rules-etiquette/", "/de/guides/doc-hut-rules-etiquette/", ...legacyUrls];

const failures = [];
const fail = (message) => { failures.push(message); console.log(`  FAIL ${message}`); };
const decode = (value) => value.replace(/&amp;/g, "&");

async function get(path) {
  const url = `${base}${path}${path.includes("?") ? "&" : "?"}${bust}`;
  const response = await fetch(url, { redirect: "manual", headers: { "user-agent": "kiwicamping-smoke/1" } });
  return { response, text: response.status === 200 ? await response.text() : "" };
}

/** Every <loc> in the sitemap, following a sitemap index one level down. */
async function sitemapUrls() {
  const { response, text } = await get("/sitemap.xml");
  if (response.status !== 200) { fail(`/sitemap.xml answered ${response.status}`); return new Set(); }
  const locs = [...text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => decode(match[1]));
  if (!/<sitemapindex/.test(text)) return new Set(locs);
  const urls = new Set();
  for (const loc of locs) {
    const child = await get(new URL(loc).pathname);
    if (child.response.status !== 200) { fail(`${loc} answered ${child.response.status}`); continue; }
    for (const match of child.text.matchAll(/<loc>([^<]+)<\/loc>/g)) urls.add(decode(match[1]));
  }
  return urls;
}

console.log(`Smoke test against ${base}`);
const indexed = await sitemapUrls();
console.log(`  sitemap lists ${indexed.size} URLs`);
for (const url of legacyUrls) if (!indexed.has(`${SITE_URL}${url}`)) fail(`sitemap is missing ${url}`);

const robots = await get("/robots.txt");
if (robots.response.status !== 200) fail(`/robots.txt answered ${robots.response.status}`);
else if (!/^Sitemap: /m.test(robots.text)) fail("/robots.txt has no Sitemap line");

for (const path of pages) {
  const { response, text } = await get(path);
  if (response.status !== 200) { fail(`${path} answered ${response.status}${response.headers.get("location") ? ` -> ${response.headers.get("location")}` : ""}`); continue; }
  const expected = `${SITE_URL}${path}`;
  const canonical = text.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (canonical !== expected) fail(`${path} canonical is ${canonical ?? "missing"}, expected ${expected}`);
  const robotsMeta = text.match(/<meta name="robots" content="([^"]+)"/)?.[1];
  if (!robotsMeta) fail(`${path} has no robots meta`);
  else if (indexed.has(expected) !== robotsMeta.startsWith("index")) fail(`${path} robots "${robotsMeta}" disagrees with the sitemap (${indexed.has(expected) ? "listed" : "not listed"})`);

  const analytics = text.match(/<script data-static-keep="analytics">/g) ?? [];
  if (GA_MEASUREMENT_ID) {
    if (analytics.length !== 1) fail(`${path} has ${analytics.length} analytics scripts, expected 1`);
    if (!text.includes(GA_MEASUREMENT_ID)) fail(`${path} does not carry ${GA_MEASUREMENT_ID}`);
  } else if (analytics.length || /googletagmanager/.test(text)) fail(`${path} loads analytics but no measurement ID is configured`);

  const storeLinks = [...text.matchAll(/<a\b[^>]*href="(https:\/\/apps\.apple\.com[^"]*)"[^>]*>/g)];
  if (!storeLinks.length) fail(`${path} has no App Store link`);
  for (const [tag, href] of storeLinks) {
    if (!/data-cta="[a-z]+"/.test(tag)) fail(`${path} store link without data-cta: ${tag.slice(0, 120)}`);
    if (APPLE_PROVIDER_TOKEN && !(decode(href).includes(`pt=${APPLE_PROVIDER_TOKEN}`) && /[?&]ct=w_[a-z]+_[a-z-]+(&|$)/.test(decode(href)))) fail(`${path} store link without pt/ct: ${href}`);
  }
  console.log(`  ok   ${path} (${robotsMeta})`);
}

if (failures.length) {
  console.error(`\nSmoke test failed: ${failures.length} problem(s).`);
  process.exit(1);
}
console.log(`\nSmoke test passed: ${pages.length} pages, sitemap and robots.txt.`);
