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
 * Every guide is published in every locale; ones a locale has not translated are served whole in
 * English. Road trip guides are deliberately never translated, so a locale file must not carry one.
 *
 * What this enforces is that a locale file never contains a translation the site cannot use: if an
 * article is in the file, it must be complete and structurally identical to the English it
 * translates, or the site quietly falls back to English and the work looks done when it is not.
 * That is the check that would have caught the guides being rewritten from three sections to seven
 * underneath their translations.
 */
const roadTripSlugs = new Set([...(await readFile(resolve(root, "lib/content/road-trips.ts"), "utf8")).matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]));
assert.ok(roadTripSlugs.size >= 15, `Expected the road trip guides to be found, got ${roadTripSlugs.size}`);

const { localeCodes, fullyTranslatedSlugs, translationProgress } = await import("../lib/localized.ts");
const summary = [];
for (const locale of localeCodes) {
  const translated = JSON.parse(await readFile(resolve(root, `lib/translations/${locale}.json`), "utf8"));
  for (const slug of roadTripSlugs) assert.ok(!translated.articles[slug], `${locale} carries ${slug}, but road trips stay English-only`);
  assert.doesNotMatch(JSON.stringify(translated), /—/, `${locale} contains an em dash`);

  const complete = new Set(fullyTranslatedSlugs(locale));
  for (const slug of Object.keys(translated.articles)) {
    assert.ok(complete.has(slug), `${locale}/${slug} is in the translation file but is incomplete or structurally stale, so the site falls back to English for it. Finish it or remove it.`);
  }
  const progress = translationProgress(locale);
  summary.push(`${locale} ${progress.ui}/${progress.uiTotal} ui, ${progress.articles}/${progress.articlesTotal} guides, ${progress.pages}/3 pages`);
}

console.log(`Content audit passed: ${slugs.length} unique articles, all ${rankingUrls.length} ranking URLs preserved.`);
console.log(`Translations: ${summary.join(" · ")}`);
