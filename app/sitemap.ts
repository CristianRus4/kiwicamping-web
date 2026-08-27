import type { MetadataRoute } from "next";
import { SITE_URL, guideArticles, legacyArticles , sitePath} from "@/lib/site";
import { publishedLocales, localeArticles } from "@/lib/localized";

const roots = ["", "/guides", "/tools", "/support", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-08-18");
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
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.endsWith(".html") ? 0.8 : path.includes("/guides/") ? 0.75 : 0.7,
  }));
}
