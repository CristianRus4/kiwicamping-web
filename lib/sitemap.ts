import { SITE_URL } from "@/lib/site";
import { liveLocales, localeEntry, type SiteLocale } from "@/lib/locales";
import { exportRoutes, type RouteEntry } from "@/lib/routes";

/**
 * /sitemap.xml is a sitemap index of one file per edition: /sitemaps/en.xml, /sitemaps/de.xml, ...
 * Each lists that edition's indexable pages from the route manifest, so a page is in a sitemap
 * exactly when it is exported as index, follow. A guide's lastmod is its own last change: the
 * English text's for English, the translation's own for a locale (see build-article-dates.mjs).
 */
const fileName = (locale: SiteLocale) => (locale === "en" ? "en" : localeEntry(locale).segment);

function entries(locale: SiteLocale): RouteEntry[] {
  return exportRoutes().filter((route) => route.locale === locale && route.indexable);
}

/** The editions that have a sitemap file: English and every live locale with an indexable page. */
export function sitemapFiles(): { locale: SiteLocale; name: string }[] {
  return (["en", ...liveLocales] as SiteLocale[]).filter((locale) => entries(locale).length).map((locale) => ({ locale, name: fileName(locale) }));
}

const escapeXml = (value: string) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const latest = (dates: (string | undefined)[]) => dates.filter(Boolean).sort().at(-1);

export function sitemapIndexXml(): string {
  const files = sitemapFiles();
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${files.map(({ locale, name }) => {
    const lastmod = latest(entries(locale).map((route) => route.lastmod));
    return `<sitemap>\n<loc>${SITE_URL}/sitemaps/${name}.xml</loc>${lastmod ? `\n<lastmod>${lastmod}</lastmod>` : ""}\n</sitemap>`;
  }).join("\n")}
</sitemapindex>
`;
}

/** One edition's urlset, or undefined for an unknown file name. */
export function sitemapXml(name: string): string | undefined {
  const file = sitemapFiles().find((item) => item.name === name);
  if (!file) return undefined;
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries(file.locale).map((route) => {
    const home = route.kind === "home";
    const priority = home ? (route.locale === "en" ? "1" : "0.8") : route.path.endsWith(".html") ? "0.8" : route.kind === "guide" ? "0.75" : "0.7";
    return `<url>\n<loc>${escapeXml(`${SITE_URL}${route.path}`)}</loc>${route.lastmod ? `\n<lastmod>${route.lastmod}</lastmod>` : ""}\n<changefreq>${home ? "weekly" : "monthly"}</changefreq>\n<priority>${priority}</priority>\n</url>`;
  }).join("\n")}
</urlset>
`;
}
