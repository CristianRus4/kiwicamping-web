import manifest from "@/lib/image-manifest.json";
import type { Article } from "@/lib/article-model";

/**
 * One screenshot figure per listicle and comparison guide, inside the section about KiwiCamping.
 *
 * Each image is a pre-rendered 1600x900 WebP (scripts/make-screen-figure.sh): the brand gradient with
 * a centred iPhone screenshot and its own soft shadow. The article literals stay untouched; this list
 * is applied where `allArticles` is built (lib/site.ts), so the matching section carries `figure`.
 *
 * `section` is the zero-based index into the guide's sections. `alt` is English only: a translated
 * page uses that locale's section heading as the alt instead (lib/localized.ts), so nothing here
 * enters lib/translations/en.json. How to add one: docs/growth/screen-figures.md.
 */
export type ScreenFigure = { slug: string; section: number; src: string; alt: string };

export const screenFigures: readonly ScreenFigure[] = [
  { slug: "rankers-alternatives", section: 2, src: "/images/screens/rankers-alternatives.webp", alt: "KiwiCamping on iPhone: a Want to Visit collection of saved places" },
  { slug: "campermate-alternatives", section: 2, src: "/images/screens/campermate-alternatives.webp", alt: "KiwiCamping on iPhone: combining filters for toilets, showers and drinking water" },
  { slug: "free-camping-apps-new-zealand", section: 5, src: "/images/screens/free-camping-apps-new-zealand.webp", alt: "KiwiCamping on iPhone: the cost filter set to show free places" },
  { slug: "road-trip-planner-apps-new-zealand", section: 1, src: "/images/screens/road-trip-planner-apps-new-zealand.webp", alt: "KiwiCamping on iPhone: a South Island trip itinerary with the distance and drive time between stops" },
  { slug: "best-travel-apps-new-zealand", section: 1, src: "/images/screens/best-travel-apps-new-zealand.webp", alt: "KiwiCamping on iPhone: places on the map with the Explore list below" },
  { slug: "best-nz-camping-apps", section: 1, src: "/images/screens/best-nz-camping-apps.webp", alt: "KiwiCamping on iPhone: a place page with the local weather forecast and useful places nearby" },
];

/**
 * Returns `list` with each figure attached to its section. Fails loudly at module load, like
 * assertPublishAt, when a slug is unknown or listed twice, a section index is out of range, or the
 * image has no lib/image-manifest.json entry (run `npm run images:manifest`).
 */
export function applyScreenFigures(list: Article[]): Article[] {
  const images = manifest as Record<string, unknown>;
  const bySlug = new Map<string, ScreenFigure>();
  for (const figure of screenFigures) {
    if (bySlug.has(figure.slug)) throw new Error(`screen-figures: "${figure.slug}" is listed twice`);
    const article = list.find((item) => item.slug === figure.slug);
    if (!article) throw new Error(`screen-figures: unknown guide slug "${figure.slug}"`);
    if (!Number.isInteger(figure.section) || figure.section < 0 || figure.section >= article.sections.length) {
      throw new Error(`screen-figures: section ${figure.section} is out of range for "${figure.slug}" (${article.sections.length} sections)`);
    }
    if (!images[figure.src]) throw new Error(`screen-figures: no image-manifest entry for "${figure.src}". Run \`npm run images:manifest\`.`);
    if (!figure.alt.trim()) throw new Error(`screen-figures: "${figure.slug}" needs alt text`);
    bySlug.set(figure.slug, figure);
  }
  return list.map((article) => {
    const figure = bySlug.get(article.slug);
    if (!figure) return article;
    return {
      ...article,
      sections: article.sections.map((part, index) => (index === figure.section ? { ...part, figure: { src: figure.src, alt: figure.alt } } : part)),
    };
  });
}
