import { makeArticle as a, type Article, type ArticleSection, type ArticleTable } from "@/lib/article-model";

const s = (heading: string, body: string[], tips?: string[], table?: ArticleTable, cta?: boolean): ArticleSection => ({ heading, body, tips, ...(table && { table }), ...(cta && { cta }) });

/**
 * City-to-city drive guides. Distances, road rules, closures and opening hours are read from the road
 * authority, DOC, council or operator page named in each guide's `sources` on 21 October 2026
 * (facts files in docs/growth/walks-drives/).
 */
export const driveGuideArticles: Article[] = [
];
