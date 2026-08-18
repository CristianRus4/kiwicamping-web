import { roadTripArticles } from "@/lib/content/road-trips";
import { campingArticles } from "@/lib/content/camping";
import { rulesArticles } from "@/lib/content/rules";
import { planningArticles } from "@/lib/content/planning";
import { appArticles } from "@/lib/content/app-guides";
import { costArticles } from "@/lib/content/costs";
import { legacyOnlyArticles } from "@/lib/content/legacy";
import { migratedArticles } from "@/lib/content/legacy-migrated";
import type { Article, ArticleCategory } from "@/lib/article-model";
export type { Article, ArticleCategory, ArticleInput, ArticlePriceTable, ArticleSection } from "@/lib/article-model";
export { makeArticle, section, articleHref } from "@/lib/article-model";

export const SITE_URL = "https://campingapp.nz";
export const APP_STORE_URL = "https://apps.apple.com/us/app/nz-camping-map-kiwicamping/id6746952595";
export const SUPPORT_EMAIL = "cristianrus4@gmail.com";

export const articles: Article[] = [
  ...roadTripArticles,
  ...campingArticles,
  ...rulesArticles,
  ...planningArticles,
  ...appArticles,
  ...costArticles,
  ...legacyOnlyArticles,
  ...migratedArticles,
];

export const categories: ArticleCategory[] = ["Road trips", "Camping guides", "Rules & safety", "Trip planning", "Costs & budget", "App guides"];
export const getArticle = (slug: string) => articles.find((item) => item.slug === slug);

/** Articles published at an existing campingapp.nz URL. These keep that URL and stay out of /guides/. */
export const legacyArticles = articles.filter((item) => item.legacyPath);
export const guideArticles = articles.filter((item) => !item.legacyPath);
export const getArticleByLegacyPath = (path: string) => articles.find((item) => item.legacyPath === path);
