import type { MetadataRoute } from "next";
import { SITE_URL, guideArticles, legacyArticles } from "@/lib/site";

const roots = ["", "/guides", "/tools", "/support", "/privacy", "/terms"];
const localeCodes = ["de", "es", "fr", "it", "nl", "pt"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-08-18");
  const paths = [
    ...roots,
    // Articles already published on campingapp.nz keep their existing URL.
    ...legacyArticles.map((article) => article.legacyPath!),
    ...guideArticles.map((article) => `/guides/${article.slug}`),
    // Localised sites carry the /guides/ structure only; legacy URLs are English-only, as they are today.
    ...localeCodes.flatMap((locale) => [...roots, ...guideArticles.map((article) => `/guides/${article.slug}`)].map((path) => `/${locale}${path}`)),
  ];

  return paths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.endsWith(".html") ? 0.8 : path.includes("/guides/") ? 0.75 : 0.7,
  }));
}
