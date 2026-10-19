import type { PageKind } from "@/lib/analytics";
import type { LocaleCode, SiteLocale } from "@/lib/locales";

/**
 * One page of the site, in every language it exists in. Feature modules (lib/routes/<feature>.ts)
 * describe their pages this way, and lib/routes.ts derives everything else from them: the static
 * params, the exported files, the sitemaps, hreflang and the language switcher.
 */
export type PageEntry = {
  /** Stable identifier: "home", "privacy", "guide:<slug>". Used by hreflang and the switcher. */
  key: string;
  kind: PageKind;
  /** The served English path ("/guides/x/", "/best-nz-camping-apps.html"), or null if none. */
  english: string | null;
  /** The served path in a locale ("/de/guides/x/"), or null if the page has no edition there. */
  localized: (locale: LocaleCode) => string | null;
  /** Whether that locale's edition is fully translated. Incomplete editions render English, noindex. */
  complete: (locale: LocaleCode) => boolean;
  /** Last significant change, YYYY-MM-DD, for the sitemap. */
  lastmod?: (locale: SiteLocale) => string | undefined;
};

/** One exported HTML page. */
export type RouteEntry = { path: string; locale: SiteLocale; kind: PageKind; key: string; indexable: boolean; lastmod?: string };
