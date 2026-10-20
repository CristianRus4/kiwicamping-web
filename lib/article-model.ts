export type ArticleCategory = "Road trips" | "Camping guides" | "Rules & safety" | "Trip planning" | "Costs & budget" | "App guides";
/** A small data table inside a section. Plain-text cells; every row has exactly `head.length` cells,
 * and the first cell of each row is its label. Translated like the prose around it. */
export type ArticleTable = { caption: string; head: string[]; rows: string[][] };
/** `cta` puts a store button under the section: comparison guides set it on the entry for KiwiCamping. */
export type ArticleSection = { heading: string; body: string[]; tips?: string[]; table?: ArticleTable; cta?: boolean };
/** `asOf` is an ISO date (YYYY-MM-DD), formatted per locale when rendered. */
export type ArticlePriceTable = { asOf: string; note: string; rows: { label: string; nzdLow: number; nzdHigh?: number; unit?: string }[] };
export type Article = {
  slug: string; title: string; description: string; category: ArticleCategory; region: string; readTime: number;
  places: string[]; image: string; imageAlt: string; intro: string; sections: ArticleSection[];
  /**
   * Path this article is published at on campingapp.nz today, e.g. "/freedom-camping-rules-nz.html".
   * These URLs already rank, so they stay canonical. Articles carrying one are served at that exact
   * path and are deliberately excluded from /guides/<slug> so a single page never has two live URLs.
   */
  legacyPath?: string;
  /**
   * Two questions this guide answers, in the words someone would search them.
   *
   * Deliberately not a duplicate of the homepage FAQ: two FAQPage blocks answering the same
   * question on one site compete with each other. Road trip guides carry none, because an itinerary
   * is not a question-shaped search and Google's own guidance points FAQ markup at pages that
   * answer questions.
   */
  faq?: readonly (readonly [string, string])[];
  sources?: { label: string; url: string }[]; priceTable?: ArticlePriceTable;
  /** Hand-picked related guides, by slug, shown before the scored ones (see lib/related.ts). */
  related?: string[];
  /**
   * New guides only: the New Zealand day (YYYY-MM-DD) the guide goes live. Until then it is absent from
   * the whole build (lib/publish.ts). Never set it on a guide that is already live, or on a legacy one.
   */
  publishAt?: string;
  /** A "best apps" or "alternatives" comparison guide: its store links carry the `listicle` placement. */
  listicle?: boolean;
};
export type ArticleInput = Omit<Article, "image" | "readTime"> & { readTime?: number };

/**
 * Reading time measured from the article's own words rather than declared by hand, so a short guide
 * never advertises the same "10 minute read" as a long one. 220 words per minute is a common adult
 * prose rate; tips and table rows are counted because readers do read them.
 */
export function readingMinutes(input: Pick<Article, "intro" | "sections"> & { priceTable?: Article["priceTable"] }) {
  const parts = [
    input.intro,
    ...input.sections.flatMap((part) => [part.heading, ...part.body, ...(part.tips ?? []), ...(part.table ? [part.table.caption, ...part.table.head, ...part.table.rows.flat()] : [])]),
    ...(input.priceTable ? [input.priceTable.note, ...input.priceTable.rows.map((row) => `${row.label} ${row.unit ?? ""}`)] : []),
  ];
  const words = parts.join(" ").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export function makeArticle(input: ArticleInput): Article {
  return { ...input, readTime: readingMinutes(input), image: `/images/articles/${input.slug}.webp` };
}

export function section(heading: string, first: string, second: string, tips?: string[]): ArticleSection {
  return { heading, body: [first, second], tips };
}

/** Canonical site path for an article: its existing published URL when it has one, otherwise /guides/<slug>. */
export const articleHref = (item: Pick<Article, "slug" | "legacyPath">) => item.legacyPath ?? `/guides/${item.slug}/`;
