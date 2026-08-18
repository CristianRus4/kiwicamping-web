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
// Guards against AussieCamps copy leaking into the New Zealand site. A bare country name is fine
// (travellers do come from Australia); Australian-specific phrasing and branding is not.
assert.doesNotMatch(content, /AussieCamps|Australian|Traditional Owners|(?:across|around|throughout|in) Australia\b|Australia's|not available yet|these names are intentionally|the website does not|editorial landscape image|realistic itinerary/i, "Foreign, internal or generic copy found");
assert.doesNotMatch(content, /https:\/\/images\.unsplash\.com/i, "Remote article images are prohibited");
// Copy must address travellers, not the developer building the page.
assert.doesNotMatch(content, /this (section|page|guide|article) (explains|describes|shows|covers|will)|here goes|lorem ipsum|placeholder text|TODO|FIXME|coming soon|sample text/i, "Developer-facing or placeholder copy found");

const localisable = entries.filter((entry) => !entry.legacyPath).map((entry) => entry.slug);
for (const locale of ["de", "es", "fr", "it", "nl", "pt"]) {
  const translated = JSON.parse(await readFile(resolve(root, `lib/translations/${locale}.json`), "utf8"));
  for (const slug of localisable) assert.ok(translated.articles[slug], `${locale} is missing a translation for ${slug}`);
  assert.ok(translated.pages?.support && translated.pages?.privacy && translated.pages?.terms, `${locale} must contain translated information pages`);
  assert.doesNotMatch(JSON.stringify(translated), /—/, `${locale} contains an em dash`);
  for (const [slug, article] of Object.entries(translated.articles)) {
    if (!localisable.includes(slug)) continue;
    assert.ok(article.sections?.length, `${locale}/${slug} must contain translated sections`);
    for (const section of article.sections) assert.ok(section.body?.length, `${locale}/${slug} has a section with no translated prose`);
  }
}

console.log(`Content audit passed: ${slugs.length} unique articles, all ${rankingUrls.length} ranking URLs preserved, ${localisable.length} articles translated into six languages.`);
