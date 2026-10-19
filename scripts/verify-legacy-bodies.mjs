#!/usr/bin/env node
/**
 * One-off check for foundation (platform) changes: the 15 legacy .html pages carry most of
 * campingapp.nz's search traffic, so a platform change must not alter their English <body>.
 *
 * It compares two exports page by page: a baseline export of origin/main and this branch's export.
 * It is deliberately not a test and not part of `npm run check`: content work rewrites some legacy
 * pages on purpose, so the baseline moves. The permanent guards are in tests/rendered-html.test.mjs
 * (the 15 URLs export with 200, are self-canonical .html, and no English /guides/<legacy-slug>/
 * exists).
 *
 *   git worktree add --detach /tmp/main-export origin/main
 *   (cd /tmp/main-export && cp -cR <repo>/node_modules . && npm run build:pages)
 *   npm run build:pages
 *   node scripts/verify-legacy-bodies.mjs /tmp/main-export/pages-dist [pages-dist]
 *
 * "Byte-identical" is measured after normalising both sides, and this is the complete list of what
 * the normalisation removes or masks, with the reason for each:
 *
 *  1. Everything outside <body>: canonical stays covered by its own test; the head may gain
 *     hreflang alternates, Smart App Banner campaign data and a new stylesheet hash.
 *  2. The analytics bootstrap <script data-static-keep>, the consent bar <aside class="consent-bar">
 *     and the footer's "Privacy choices" link <a data-consent-open> (GA4 and Consent Mode).
 *  3. JSON-LD <script type="application/ld+json">: structured data, not visible text. It gains
 *     inLanguage and localised breadcrumbs.
 *  4. The query string of App Store links (the App Store Connect campaign) and their data-cta
 *     attributes. The listing URL itself must not change.
 *  5. The data-page-kind, data-locale, data-slug and data-category attributes on <main>.
 *  6. The footer language switcher <nav class="language-nav">: it links to each live locale's
 *     equivalent page, so it changes whenever a translation or a new locale goes live.
 *  7. The related guides strip <section class="related-section">: relevance-scored now, and it
 *     changes whenever a guide is added anywhere on the site.
 *  8. The value of the route wrapper's lang attribute, which used to be the route segment itself
 *     (lang="best-nz-camping-apps.html") rather than a language.
 *  9. React's empty text separators <!-- -->, which are not text and move with JSX structure.
 *
 * Everything else, including every word of the article, its headings, prose links, tips, FAQ,
 * sources, dates, images and the header and footer text, must match byte for byte.
 */
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const legacyPaths = [
  "/best-nz-camping-apps.html", "/campfire-rules-nz.html", "/camping-costs-nz.html", "/camping-packing-list-nz.html",
  "/doc-campsites-huts-guide.html", "/dump-stations-nz.html", "/free-camping-nz-legal.html", "/freedom-camping-rules-nz.html",
  "/holiday-parks-nz-booking-guide.html", "/nz-camping-seasons-weather-sandflies.html", "/responsible-camping-nz.html",
  "/self-contained-vehicles-nz.html", "/top-scenic-campsites-nz.html", "/two-week-camper-itinerary-nz.html",
  "/where-to-camp-in-new-zealand.html",
];

/** The page's <body>, with exactly the exclusions documented above. */
function legacyBody(html) {
  const start = html.indexOf("<body");
  const end = html.lastIndexOf("</body>");
  if (start < 0 || end < 0) throw new Error("No <body> found");
  return html.slice(start, end + "</body>".length)
    .replace(/<script\b[^>]*data-static-keep[^>]*>[\s\S]*?<\/script>/g, "")
    .replace(/<aside class="consent-bar"[\s\S]*?<\/aside>/g, "")
    .replace(/<a\b[^>]*data-consent-open[^>]*>[\s\S]*?<\/a>/g, "")
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, "")
    .replace(/href="(https:\/\/apps\.apple\.com\/[^"?]*)\?[^"]*"/g, 'href="$1"')
    .replace(/\s+data-cta="[^"]*"/g, "")
    .replace(/<main\b[^>]*>/g, (tag) => tag.replace(/\s+data-(?:page-kind|locale|slug|category)="[^"]*"/g, ""))
    .replace(/<nav class="language-nav"[\s\S]*?<\/nav>/g, "")
    .replace(/<section class="related-section">[\s\S]*?<\/section>/g, "")
    .replace(/^(<body[^>]*><div) lang="[^"]*"/, "$1 lang")
    // next/font class hashes change between builds and dependency installs; they are not content.
    .replace(/__variable_[a-z0-9_]+/g, "__variable_FONT")
    .replace(/<!-- -->/g, "");
}

const [baselineArg, distArg = "pages-dist"] = process.argv.slice(2);
if (!baselineArg) {
  console.error("Usage: node scripts/verify-legacy-bodies.mjs <origin/main pages-dist> [this branch's pages-dist]");
  process.exit(1);
}
const baseline = resolve(baselineArg);
const dist = resolve(distArg);
let changed = 0;
for (const path of legacyPaths) {
  const expected = legacyBody(await readFile(resolve(baseline, path.slice(1)), "utf8"));
  const actual = legacyBody(await readFile(resolve(dist, path.slice(1)), "utf8"));
  if (actual === expected) { console.log(`  same     ${path}`); continue; }
  changed += 1;
  let index = 0;
  while (index < actual.length && actual[index] === expected[index]) index += 1;
  console.log(`  CHANGED  ${path} at character ${index}:\n    main: …${expected.slice(Math.max(0, index - 120), index + 160)}…\n    now:  …${actual.slice(Math.max(0, index - 120), index + 160)}…`);
}
console.log(changed ? `${changed} of ${legacyPaths.length} legacy bodies differ from main's.` : `All ${legacyPaths.length} legacy bodies match main's byte for byte.`);
process.exitCode = changed ? 1 : 0;
