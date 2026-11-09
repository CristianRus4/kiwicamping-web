import type { ExportRoute, RouteKind } from "@/lib/routes";
import { localeRoot, routedLocales, type LocaleCode } from "@/lib/locales";
import { isStaticPageTranslated, isTranslated } from "@/lib/localized";
import { staticPages, type StaticPageKind } from "@/lib/source-strings";
import { articles, sitePath } from "@/lib/site";
import { articleDates } from "@/lib/article-dates";
import { laterDate } from "@/lib/publish";
import pageDates from "@/lib/page-dates.json";

/** The last time support and credits changed in substance; guides carry their own dates. */
const SITE_CHANGED = "2026-08-27";
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
/** A legal page last changed on its effective date ("Effective 19 October 2026" in staticPages). */
function effectiveDate(kind: StaticPageKind): string {
  const match = /(\d{1,2}) ([A-Z][a-z]+) (\d{4})/.exec(staticPages[kind].effective ?? "");
  if (!match || !MONTHS.includes(match[2])) return SITE_CHANGED;
  return `${match[3]}-${String(MONTHS.indexOf(match[2]) + 1).padStart(2, "0")}-${match[1].padStart(2, "0")}`;
}

const englishOnly: RouteKind[] = ["credits"];
const staticKinds: StaticPageKind[] = ["support", "privacy", "terms"];
const pages: { suffix: string; kind: RouteKind }[] = [
  { suffix: "", kind: "home" },
  { suffix: "/guides", kind: "guides" },
  { suffix: "/tools", kind: "tools" },
  { suffix: "/support", kind: "support" },
  { suffix: "/privacy", kind: "privacy" },
  { suffix: "/terms", kind: "terms" },
  // A list of names, licence codes and source links: published in English only.
  { suffix: "/credits", kind: "credits" },
];

/** Home, the guide and tool indexes, support, the legal pages and credits, in every routed language. */
export function pageRoutes(): ExportRoute[] {
  // The guide index changes whenever a guide is published or rewritten; home and /tools/ when the
  // files that render them do (scripts/build-article-dates.mjs).
  const newestGuide = articles.map(({ slug }) => articleDates(slug)?.modified).filter(Boolean).sort().at(-1);
  const dates: Partial<Record<RouteKind, string | undefined>> = {
    privacy: effectiveDate("privacy"),
    terms: effectiveDate("terms"),
    guides: laterDate(SITE_CHANGED, newestGuide),
    home: laterDate(SITE_CHANGED, pageDates.home),
    tools: laterDate(SITE_CHANGED, pageDates.tools),
  };
  const lastmod = (kind: RouteKind) => dates[kind] ?? SITE_CHANGED;
  const english = pages.map(({ suffix, kind }) => ({ path: sitePath(suffix || "/"), locale: "en" as const, kind, indexable: true, pageKey: kind, lastmod: lastmod(kind) }));
  // Support and the legal pages exist in a locale only once they are translated; until then the
  // locale links to the English page. Everything is indexed once the locale's interface is complete.
  const published = (locale: LocaleCode, kind: RouteKind) => !englishOnly.includes(kind)
    && (!staticKinds.includes(kind as StaticPageKind) || isStaticPageTranslated(locale, kind as StaticPageKind));
  const localized = routedLocales.flatMap((locale) => pages.filter(({ kind }) => published(locale, kind)).map(({ suffix, kind }) => (
    { path: sitePath(`${localeRoot(locale)}${suffix}`), locale, kind, indexable: isTranslated(locale), pageKey: kind, lastmod: lastmod(kind) }
  )));
  return [...english, ...localized];
}
