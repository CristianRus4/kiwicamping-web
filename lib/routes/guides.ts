import type { ExportRoute } from "@/lib/routes";
import { localeRoot, routedLocales } from "@/lib/locales";
import { isArticleTranslated, isTranslated, localeArticles } from "@/lib/localized";
import { articleDates, translationDate } from "@/lib/article-dates";
import { articleHref, articles, sitePath } from "@/lib/site";

/** The page key every language edition of a guide shares. */
export const guidePageKey = (slug: string) => `guide:${slug}`;

/**
 * Every guide in English, and every guide in every routed locale. A locale publishes all of them;
 * one it has not translated completely is served whole in English and kept out of search.
 *
 * A legacy article keeps its English .html URL (/best-nz-camping-apps.html), which already ranks;
 * English /guides/<legacy-slug>/ never exists. Its translations live at /<segment>/guides/<slug>/
 * and share its page key, so hreflang pairs the two.
 */
export function guideRoutes(): ExportRoute[] {
  const english = articles.map((article) => ({
    path: articleHref(article), locale: "en" as const, kind: "guide" as const, indexable: true,
    pageKey: guidePageKey(article.slug), lastmod: articleDates(article.slug)?.modified,
  }));
  const localized = routedLocales.flatMap((locale) => localeArticles.map(({ slug }) => {
    const indexable = isTranslated(locale) && isArticleTranslated(locale, slug);
    return {
      path: sitePath(`${localeRoot(locale)}/guides/${slug}`), locale, kind: "guide" as const, indexable,
      pageKey: guidePageKey(slug), lastmod: translationDate(slug, locale) ?? articleDates(slug)?.modified,
    };
  }));
  return [...english, ...localized];
}
