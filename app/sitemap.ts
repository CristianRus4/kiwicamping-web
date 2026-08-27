import type { MetadataRoute } from "next";
import { SITE_URL, articles, guideArticles, legacyArticles, sitePath } from "@/lib/site";
import { publishedLocales, localeArticles } from "@/lib/localized";
import { articleDates } from "@/lib/article-dates";

const roots = ["", "/guides", "/tools", "/support", "/privacy", "/terms"];

/** The date the site itself was last rebuilt, used for pages that are not a single guide. */
const siteChanged = new Date("2026-08-27");

/** Slug lookup that also covers the articles served at their original .html URL. */
const slugForPath = new Map<string, string>([
  ...articles.map((article) => [`/guides/${article.slug}`, article.slug] as const),
  ...legacyArticles.map((article) => [article.legacyPath!, article.slug] as const),
]);

/**
 * A guide's own last-changed date, so the sitemap stops telling Google that all 498 URLs were
 * touched on the same day. Dates come from git history (see scripts/build-article-dates.mjs).
 */
function lastChanged(path: string): Date {
  const slug = slugForPath.get(path.replace(/^\/(de|es|fr|it|nl|pt)/, ""));
  const dates = slug ? articleDates(slug) : undefined;
  return dates ? new Date(`${dates.modified}T00:00:00Z`) : siteChanged;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...roots,
    // Articles already published on campingapp.nz keep their existing URL.
    ...legacyArticles.map((article) => article.legacyPath!),
    ...guideArticles.map((article) => `/guides/${article.slug}`),
    // Localised sites carry every guide; untranslated ones are served in English. A locale
    // appears here only once its UI is fully translated.
    ...publishedLocales.flatMap((locale) => [...roots, ...localeArticles.map((article) => `/guides/${article.slug}`)].map((path) => `/${locale}${path}`)),
  ];

  return paths.map((path) => ({
    url: `${SITE_URL}${sitePath(path)}`,
    lastModified: lastChanged(path),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.endsWith(".html") ? 0.8 : path.includes("/guides/") ? 0.75 : 0.7,
  }));
}
