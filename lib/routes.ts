import { builtLocales, isLive, type SiteLocale } from "@/lib/locales";
import { isTranslated } from "@/lib/localized";
import { corePages } from "@/lib/routes/core";
import { guidePages } from "@/lib/routes/guides";
import type { PageEntry, RouteEntry } from "@/lib/routes/types";

export type { PageEntry, RouteEntry };

/**
 * The route manifest: every page the site exports, in one place.
 *
 * It replaces three hand-kept lists (the static params, the sitemap and the exporter's regex over
 * the content files), any of which could silently skip a new page type. Each feature describes its
 * pages in lib/routes/<feature>.ts; add new features to this list, one line each.
 */
const features: (() => PageEntry[])[] = [
  corePages,
  guidePages,
];

let pages: PageEntry[] | undefined;
let byKey: Map<string, PageEntry> | undefined;
let routes: RouteEntry[] | undefined;
let byPath: Map<string, RouteEntry> | undefined;

export function allPages(): PageEntry[] {
  pages ??= features.flatMap((feature) => feature());
  return pages;
}

export function pageEntry(key: string): PageEntry | undefined {
  byKey ??= new Map(allPages().map((page) => [page.key, page]));
  return byKey.get(key);
}

/** The served path of a page in a locale, or null when it has no edition there. */
export function pagePath(key: string, locale: SiteLocale): string | null {
  const page = pageEntry(key);
  if (!page) return null;
  return locale === "en" ? page.english : page.localized(locale);
}

/**
 * Whether search engines may index a page in a locale. English: always. A locale: only when it is
 * live, its interface is completely translated, and this page's own translation is complete.
 * Everything else is still exported for visitors, as noindex, outside the sitemap and hreflang.
 */
export function isIndexable(key: string, locale: SiteLocale): boolean {
  const page = pageEntry(key);
  if (!page) return false;
  if (locale === "en") return page.english !== null;
  return isLive(locale) && isTranslated(locale) && page.localized(locale) !== null && page.complete(locale);
}

/** Every exported HTML page: English plus every built locale. Drafts appear only with LOCALES_PREVIEW=1. */
export function exportRoutes(): RouteEntry[] {
  routes ??= allPages().flatMap((page) => [
    ...(page.english ? [{ path: page.english, locale: "en" as const, kind: page.kind, key: page.key, indexable: true, lastmod: page.lastmod?.("en") }] : []),
    ...builtLocales.flatMap((locale) => {
      const path = page.localized(locale);
      return path ? [{ path, locale, kind: page.kind, key: page.key, indexable: isIndexable(page.key, locale), lastmod: page.lastmod?.(locale) }] : [];
    }),
  ]);
  return routes;
}

/** The manifest entry for a served path ("/de/guides/x/", "/best-nz-camping-apps.html"). */
export function findRoute(path: string): RouteEntry | undefined {
  byPath ??= new Map(exportRoutes().map((route) => [route.path, route]));
  return byPath.get(path);
}
