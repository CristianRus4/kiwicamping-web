import { localeEntry, type LocaleCode } from "@/lib/locales";
import { isStaticPageTranslated } from "@/lib/localized";
import { staticPages, type StaticPageKind } from "@/lib/source-strings";
import type { PageEntry } from "./types";

/** The date the site itself was last rebuilt, for pages that are not a single guide. */
const siteChanged = "2026-08-27";
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
/** A legal page last changed on its effective date ("Effective 19 October 2026"). */
function effectiveDate(kind: StaticPageKind) {
  const match = /(\d{1,2}) ([A-Z][a-z]+) (\d{4})/.exec(staticPages[kind].effective ?? "");
  if (!match) return siteChanged;
  return `${match[3]}-${String(months.indexOf(match[2]) + 1).padStart(2, "0")}-${match[1].padStart(2, "0")}`;
}

const at = (locale: LocaleCode, path = "") => `/${localeEntry(locale).segment}${path}/`;

/** Home, the guide index, tools, support, credits and the legal pages. */
export function corePages(): PageEntry[] {
  const always = (_locale: LocaleCode) => true;
  const page = (key: string, kind: PageEntry["kind"], path: string, complete: PageEntry["complete"] = always, lastmod = siteChanged): PageEntry => ({
    key, kind, english: path ? `${path}/` : "/", localized: (locale) => at(locale, path), complete, lastmod: () => lastmod,
  });
  const translatedPage = (kind: StaticPageKind) => (locale: LocaleCode) => isStaticPageTranslated(locale, kind);
  return [
    page("home", "home", ""),
    page("guides", "guides", "/guides"),
    page("tools", "tools", "/tools"),
    page("support", "support", "/support", translatedPage("support")),
    // English only: a list of names, licence codes and source links.
    { key: "credits", kind: "legal", english: "/credits/", localized: () => null, complete: () => false, lastmod: () => siteChanged },
    page("privacy", "legal", "/privacy", translatedPage("privacy"), effectiveDate("privacy")),
    page("terms", "legal", "/terms", translatedPage("terms"), effectiveDate("terms")),
  ];
}
