import de from "./translations/de.json";
import es from "./translations/es.json";
import fr from "./translations/fr.json";
import it from "./translations/it.json";
import nl from "./translations/nl.json";
import pt from "./translations/pt.json";
import { articles, categories, type Article } from "./site";

export const localeCodes = ["de", "es", "fr", "it", "nl", "pt"] as const;
export type LocaleCode = (typeof localeCodes)[number];
export const localeLabels: Record<LocaleCode, string> = { de: "Deutsch", es: "Español", fr: "Français", it: "Italiano", nl: "Nederlands", pt: "Português" };

type Translation = typeof de;
type TranslatedArticle={title:string;description:string;category:string;region:string;imageAlt:string;intro:string;sections:Array<{heading:string;body:string[];tips:string[]}>;sources:Array<{label:string}>;priceTable:null|{note:string;rows:Array<{label:string;unit:string}>}};
const translations: Record<LocaleCode, Translation> = { de, es, fr, it, nl, pt } as Record<LocaleCode, Translation>;
export const isLocale = (value: string): value is LocaleCode => localeCodes.includes(value as LocaleCode);
export const getTranslation = (locale: LocaleCode) => translations[locale];

/**
 * Localised sites carry the /guides/ articles only. Pages published at a legacy campingapp.nz URL
 * are English-only, exactly as they are on the live site today, so they are excluded here rather
 * than surfaced untranslated.
 */
export function localizedArticles(locale: LocaleCode): Article[] {
  const translated = translations[locale].articles as unknown as Record<string, TranslatedArticle>;
  return articles.flatMap((article) => {
    const item = translated[article.slug];
    if (!item || article.legacyPath) return [];
    const translatedPriceTable = item.priceTable;
    return [{
      ...article,
      title: item.title,
      description: item.description,
      category: item.category,
      region: item.region,
      imageAlt: item.imageAlt,
      intro: item.intro,
      sections: article.sections.map((section, index) => ({ ...section, ...item.sections[index], tips: item.sections[index]?.tips?.length ? item.sections[index].tips : undefined })),
      sources: article.sources?.map((source, index) => ({ ...source, label: item.sources[index]?.label ?? source.label })),
      priceTable: article.priceTable && translatedPriceTable ? {
        ...article.priceTable,
        note: translatedPriceTable.note,
        rows: article.priceTable.rows.map((row, index) => ({ ...row, label: translatedPriceTable.rows[index].label, unit: translatedPriceTable.rows[index].unit || undefined })),
      } : undefined,
    } as Article];
  });
}

export const localizedCategories = (locale: LocaleCode) => categories.map((category) => {
  const key = ({ "Road trips": "roadTrips", "Camping guides": "campingGuides", "Rules & safety": "rulesSafety", "Trip planning": "tripPlanning", "Costs & budget": "costsBudget", "App guides": "appGuides" } as const)[category];
  return { source: category, label: translations[locale].ui[key] };
});
