import type { ExportRoute } from "@/lib/routes";
import { localeRoot, routedLocales } from "@/lib/locales";
import { isArticleTranslated, isTranslated, localeArticles } from "@/lib/localized";
import { articleDates, translationDate } from "@/lib/article-dates";
import { articleHref, articles, sitePath } from "@/lib/site";

/** The page key every language edition of a guide shares. */
export const guidePageKey = (slug: string) => `guide:${slug}`;

/**
 * Every guide in English, and in each routed locale the guides whose translation is complete. A
 * locale does not publish an untranslated guide at all; its links to one go to the English page
 * (`hrefFor` in lib/routes.ts).
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
  const localized = routedLocales.flatMap((locale) => localeArticles.filter(({ slug }) => isArticleTranslated(locale, slug)).map(({ slug }) => ({
    path: sitePath(`${localeRoot(locale)}/guides/${slug}`), locale, kind: "guide" as const, indexable: isTranslated(locale),
    pageKey: guidePageKey(slug), lastmod: translationDate(slug, locale) ?? articleDates(slug)?.modified,
  })));
  return [...english, ...localized];
}
