import manifest from "@/lib/image-manifest.json";
import type { Article } from "@/lib/article-model";

/**
 * Screenshot figures: one image of KiwiCamping inside the section about the app, in the listicles and
 * comparison guides. Each image is a pre-rendered 1600x900 WebP (scripts/make-screen-figure.sh): the
 * brand gradient with a centred iPhone screenshot and its own soft shadow, in public/images/screens/.
 *
 * The article literals stay untouched: `allArticles` in lib/site.ts runs `applyScreenFigures`, which
 * sets `figure` on the matching section. `section` is the zero-based index into the guide's
 * `sections`. `alt` is English only: a translated page uses that locale's section heading as the alt
 * (lib/localized.ts), so nothing here enters lib/translations/en.json. docs/growth/screen-figures.md
 * lists the figures and how to add one. The same module exists on both sites (docs/PARITY.md).
 */
export type ScreenFigure = { slug: string; section: number; src: string; alt: string };

export const screenFigures: readonly ScreenFigure[] = [
  { slug: "rankers-alternatives", section: 2, src: "/images/screens/rankers-alternatives.webp", alt: "KiwiCamping on iPhone: a Want to Visit collection of saved places" },
  { slug: "campermate-alternatives", section: 2, src: "/images/screens/campermate-alternatives.webp", alt: "KiwiCamping on iPhone: combining filters for toilets and a water supply" },
  { slug: "free-camping-apps-new-zealand", section: 5, src: "/images/screens/free-camping-apps-new-zealand.webp", alt: "KiwiCamping on iPhone: the cost filter set to show free places" },
  { slug: "road-trip-planner-apps-new-zealand", section: 1, src: "/images/screens/road-trip-planner-apps-new-zealand.webp", alt: "KiwiCamping on iPhone: a South Island trip itinerary with the distance and drive time between stops" },
  { slug: "best-travel-apps-new-zealand", section: 1, src: "/images/screens/best-travel-apps-new-zealand.webp", alt: "KiwiCamping on iPhone: places on the map with the Explore list below" },
  { slug: "wikicamps-alternatives", section: 2, src: "/images/screens/wikicamps-alternatives.webp", alt: "KiwiCamping on iPhone: a DOC campsite's fees, amenities and water supply" },
  { slug: "best-campervan-apps-new-zealand", section: 1, src: "/images/screens/best-campervan-apps-new-zealand.webp", alt: "KiwiCamping on iPhone: a South Island West Coast road trip guide with its trip length, distance and a button to save every place it mentions" },
  { slug: "best-weather-apps-new-zealand", section: 1, src: "/images/screens/best-weather-apps-new-zealand.webp", alt: "KiwiCamping on iPhone: a DOC hut's page with the wind gusts and a seven-day forecast" },
  { slug: "best-nz-camping-apps", section: 1, src: "/images/screens/best-nz-camping-apps.webp", alt: "KiwiCamping on iPhone: a place page with the local weather forecast and useful places nearby" },
];

const images = manifest as Record<string, unknown>;

/**
 * Returns `list` with each figure set on its section. Throws, so the build fails at module load like
 * assertPublishAt, when a section is used twice, a slug is listed twice (one figure per guide), a slug
 * is unknown, a section index is out of range, the image has no lib/image-manifest.json entry, or
 * the alt is empty.
 */
export function applyScreenFigures<T extends Pick<Article, "slug" | "sections">>(list: T[], figures: readonly ScreenFigure[] = screenFigures): T[] {
  const bySlug = new Map<string, ScreenFigure>();
  for (const figure of figures) {
    const listed = bySlug.get(figure.slug);
    if (listed?.section === figure.section) throw new Error(`screen-figures: section ${figure.section} of "${figure.slug}" has two figures`);
    if (listed) throw new Error(`screen-figures: "${figure.slug}" is listed twice`);
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
