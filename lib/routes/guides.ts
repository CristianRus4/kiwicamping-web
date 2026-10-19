import { articleDates, localeModified } from "@/lib/article-dates";
import { localeEntry } from "@/lib/locales";
import { isArticleTranslated } from "@/lib/localized";
import { articleHref, guideArticles, legacyArticles } from "@/lib/site";
import type { PageEntry } from "./types";

/**
 * Every guide, in English and every locale.
 *
 * A legacy article keeps its English .html URL, which already ranks; its translations live at
 * /<segment>/guides/<slug>/. English /guides/<legacy-slug>/ never exists.
 */
export function guidePages(): PageEntry[] {
  return [...legacyArticles, ...guideArticles].map((article) => ({
    key: `guide:${article.slug}`,
    kind: "guide",
    english: articleHref(article),
    localized: (locale) => `/${localeEntry(locale).segment}/guides/${article.slug}/`,
    complete: (locale) => isArticleTranslated(locale, article.slug),
    lastmod: (locale) => (locale === "en" ? articleDates(article.slug)?.modified : localeModified(article.slug, locale) ?? articleDates(article.slug)?.modified),
  }));
}
