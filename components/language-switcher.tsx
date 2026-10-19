import Link from "next/link";
import { builtLocales, localeEntry, type SiteLocale } from "@/lib/locales";
import { localeLabels, publishedLocales } from "@/lib/localized";
import { isIndexable, pagePath } from "@/lib/routes";

const preview = typeof process !== "undefined" && process.env?.LOCALES_PREVIEW === "1";

/**
 * The footer language switcher. Each language links to this same page in that language when its
 * translation is complete, and to that language's home page otherwise, so a reader never lands on
 * an English fallback by choosing their language. Lists published editions only (drafts too in a
 * LOCALES_PREVIEW=1 development build).
 */
export function LanguageSwitcher({ current, pageKey }: { current: SiteLocale; pageKey: string }) {
  const editions = preview ? builtLocales : publishedLocales;
  if (!editions.length) return null;
  return <nav className="language-nav" aria-label="Languages">
    <Link href={pagePath(pageKey, "en") ?? "/"} aria-current={current === "en" ? "page" : undefined}>English</Link>
    {editions.map((code) => {
      const here = code === current;
      const href = (here || isIndexable(pageKey, code) ? pagePath(pageKey, code) : null) ?? `/${localeEntry(code).segment}/`;
      return <Link href={href} aria-current={here ? "page" : undefined} hrefLang={localeEntry(code).htmlLang} key={code}>{localeLabels[code]}</Link>;
    })}
  </nav>;
}
