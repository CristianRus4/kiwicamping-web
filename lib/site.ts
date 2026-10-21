import { roadTripArticles } from "@/lib/content/road-trips";
import { campingArticles } from "@/lib/content/camping";
import { rulesArticles } from "@/lib/content/rules";
import { planningArticles } from "@/lib/content/planning";
import { appArticles } from "@/lib/content/app-guides";
import { costArticles } from "@/lib/content/costs";
import { legacyOnlyArticles } from "@/lib/content/legacy";
import { listicleArticles } from "@/lib/content/listicles";
import { seasonalArticles } from "@/lib/content/seasonal";
import { canIArticles } from "@/lib/content/can-i";
import { articleFaqs } from "@/lib/content/faqs";
import { migratedArticles } from "@/lib/content/legacy-migrated";
import type { Article, ArticleCategory } from "@/lib/article-model";
import { assertPublishAt, isPublished, scheduleFixture } from "@/lib/publish";
import { applyScreenFigures } from "@/lib/screen-figures";
export type { Article, ArticleCategory, ArticleFigure, ArticleInput, ArticlePriceTable, ArticleSection, ArticleTable } from "@/lib/article-model";
export { makeArticle, section, articleHref } from "@/lib/article-model";

export const SITE_URL = "https://campingapp.nz";
/** The App Store identifier KiwiCamping is published under. Every store link, the smart app banner,
 * the QR card and the schema install URLs derive from this one constant. */
export const APP_ID = "6746952595";
/** The canonical listing URL, so store links never take a redirect hop. Kept free of campaign
 * parameters: the schema install and download URLs use it as is. Visible links go through
 * `appStoreUrl()` in lib/app-store.ts, which adds the App Store Connect campaign token. */
export const APP_STORE_URL = `https://apps.apple.com/app/camping-map-nz-kiwicamping/id${APP_ID}`;
/**
 * The App Store Connect provider token (`pt`) for campaign links. Empty means store links stay the
 * plain listing URL with no campaign query string.
 */
export const APPLE_PROVIDER_TOKEN: string = "127436485";
/** The GA4 measurement ID (G-XXXXXXX). Empty means no analytics script and no consent bar. */
export const GA_MEASUREMENT_ID: string = "G-4SC3HZDXGS";
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

/**
 * Every guide written, published or scheduled, each with its own two-question FAQ attached by slug
 * (see lib/content/faqs.ts) and its screenshot figure, if any (lib/screen-figures.ts). Only the
 * translation source, the content audits and link selection read this; everything a reader or
 * crawler sees reads `articles`.
 */
export const allArticles: Article[] = applyScreenFigures([
  ...roadTripArticles,
  ...campingArticles,
  ...rulesArticles,
  ...planningArticles,
  ...appArticles,
  ...costArticles,
  ...legacyOnlyArticles,
  ...listicleArticles,
  ...seasonalArticles,
  ...canIArticles,
  ...migratedArticles,
].map((article) => (articleFaqs[article.slug] ? { ...article, faq: articleFaqs[article.slug] } : article))
  .concat(scheduleFixture<Article>() ?? []));
for (const item of allArticles) {
  assertPublishAt(item.slug, item.publishAt);
  // The legacy .html guides were live before the site had guides of its own: always published.
  if (item.legacyPath && item.publishAt) throw new Error(`${item.slug}: a legacy guide cannot carry publishAt`);
}

/** The guides this build publishes: every guide whose publishAt, if it has one, has come (lib/publish.ts). */
export const articles: Article[] = allArticles.filter((item) => isPublished(item));
const scheduledSlugs = new Set(allArticles.filter((item) => !isPublished(item)).map((item) => item.slug));
/** A guide that is written but not yet published, which nothing may link to or name. */
export const isScheduled = (slug: string) => scheduledSlugs.has(slug);

export const categories: ArticleCategory[] = ["Road trips", "Camping guides", "Rules & safety", "Trip planning", "Costs & budget", "App guides"];
export const getArticle = (slug: string) => articles.find((item) => item.slug === slug);

/** Articles published at an existing campingapp.nz URL. These keep that URL and stay out of /guides/. */
export const legacyArticles = articles.filter((item) => item.legacyPath);
export const guideArticles = articles.filter((item) => !item.legacyPath);
export const getArticleByLegacyPath = (path: string) => articles.find((item) => item.legacyPath === path);
