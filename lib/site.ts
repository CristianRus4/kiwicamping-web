import { roadTripArticles } from "@/lib/content/road-trips";
import { campingArticles } from "@/lib/content/camping";
import { rulesArticles } from "@/lib/content/rules";
import { planningArticles } from "@/lib/content/planning";
import { appArticles } from "@/lib/content/app-guides";
import { costArticles } from "@/lib/content/costs";
import { legacyOnlyArticles } from "@/lib/content/legacy";
import { articleFaqs } from "@/lib/content/faqs";
import { migratedArticles } from "@/lib/content/legacy-migrated";
import type { Article, ArticleCategory } from "@/lib/article-model";
export type { Article, ArticleCategory, ArticleInput, ArticlePriceTable, ArticleSection } from "@/lib/article-model";
export { makeArticle, section, articleHref } from "@/lib/article-model";

export const SITE_URL = "https://campingapp.nz";
/** The App Store identifier KiwiCamping is published under. Every store link, the smart app banner,
 * the QR card and the schema install URLs derive from this one constant. */
export const APP_ID = "6746952595";
/** The canonical listing URL, so store links never take a redirect hop. */
export const APP_STORE_URL = `https://apps.apple.com/app/camping-map-nz-kiwicamping/id${APP_ID}`;
/**
 * The final URL for a site path.
 *
 * The host serves every directory route with a trailing slash and 301s the slash-less form, so
 * `/guides` costs a redirect on every visit. Worse, it makes every canonical, hreflang tag and
 * sitemap entry name a URL that redirects rather than the one that answers. Canonicals, alternates,
 * sitemap entries and internal links all go through here so they name the served URL directly.
 *
 * Articles published at an existing `.html` URL are real files, not directories, and keep their
 * exact published path.
 */
export function sitePath(path: string): string {
  if (!path || path === "/") return "/";
  const [base, hash] = path.split("#");
  if (base.endsWith("/") || /\.[a-z0-9]+$/i.test(base)) return path;
  return `${base}/${hash ? `#${hash}` : ""}`;
}

export const SUPPORT_EMAIL = "support@cntxtlabs.co";
export const SUPPORT_MAILTO = `mailto:${SUPPORT_EMAIL}?subject=KiwiCamping%20web%20contact`;

/** The guides, each with its own two-question FAQ attached by slug (see lib/content/faqs.ts). */
export const articles: Article[] = [
  ...roadTripArticles,
  ...campingArticles,
  ...rulesArticles,
  ...planningArticles,
  ...appArticles,
  ...costArticles,
  ...legacyOnlyArticles,
  ...migratedArticles,
].map((article) => (articleFaqs[article.slug] ? { ...article, faq: articleFaqs[article.slug] } : article));

export const categories: ArticleCategory[] = ["Road trips", "Camping guides", "Rules & safety", "Trip planning", "Costs & budget", "App guides"];
export const getArticle = (slug: string) => articles.find((item) => item.slug === slug);

/** Articles published at an existing campingapp.nz URL. These keep that URL and stay out of /guides/. */
export const legacyArticles = articles.filter((item) => item.legacyPath);
export const guideArticles = articles.filter((item) => !item.legacyPath);
export const getArticleByLegacyPath = (path: string) => articles.find((item) => item.legacyPath === path);
