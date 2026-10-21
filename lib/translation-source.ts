import { consentStrings, staticPages, summerStrings, toolStrings, uiStrings } from "@/lib/source-strings";
import { translatableArticles } from "@/lib/localized";
import { markGuideLinks } from "@/lib/internal-links";
import type { Article } from "@/lib/site";

/**
 * The complete English source a translator works from, in the exact shape of a locale file. Written
 * to lib/translations/en.json by `npm run translations:source`; `npm run content:check` fails when the
 * committed en.json no longer matches it.
 */
const forTranslation = (article: Article) => ({
  title: article.title,
  description: article.description,
  region: article.region,
  imageAlt: article.imageAlt,
  intro: article.intro,
  // One section at a time, exactly as the English page selects its links.
  sections: article.sections.map((part) => ({ heading: part.heading, body: markGuideLinks(part.body, article.slug), tips: part.tips ?? [], ...(part.table && { table: { caption: part.table.caption, head: part.table.head, rows: part.table.rows } }) })),
  faq: (article.faq ?? []).map(([question, answer]) => [question, answer]),
  sources: (article.sources ?? []).map((source) => ({ label: source.label })),
  priceTable: article.priceTable ? { note: article.priceTable.note, rows: article.priceTable.rows.map((row) => ({ label: row.label, unit: row.unit ?? "" })) } : null,
});

export function translationSource() {
  return {
    locale: "en",
    ui: uiStrings,
    // Its own namespace: these never gate publishing (see consentStrings in lib/source-strings.ts).
    consent: consentStrings,
    summer: summerStrings,
    pages: staticPages,
    // The calculator pages. Gated per tool (lib/tools.ts), so a partial `tools` block never
    // unpublishes a locale; keep every {placeholder} exactly.
    tools: toolStrings,
    articles: Object.fromEntries(translatableArticles.map((article) => [article.slug, forTranslation(article)])),
  };
}

export const translationSourceText = () => `${JSON.stringify(translationSource(), null, 2)}\n`;
