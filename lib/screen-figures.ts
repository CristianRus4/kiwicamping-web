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
  { slug: "fuel-price-apps-new-zealand", section: 7, src: "/images/screens/fuel-price-apps-new-zealand.webp", alt: "KiwiCamping on iPhone: a Picton to Christchurch collection showing 19 saved places and 277 km as the furthest distance between them" },
  { slug: "working-holiday-apps-new-zealand", section: 1, src: "/images/screens/working-holiday-apps-new-zealand.webp", alt: "KiwiCamping on iPhone: places grouped on a satellite map of the whole of New Zealand" },
  { slug: "money-saving-travel-apps-new-zealand", section: 1, src: "/images/screens/money-saving-travel-apps-new-zealand.webp", alt: "KiwiCamping on iPhone: a DOC campsite's reported adult, child and infant prices above its seven-day weather forecast" },
  { slug: "best-nz-camping-apps", section: 1, src: "/images/screens/best-nz-camping-apps.webp", alt: "KiwiCamping on iPhone: a place page with the local weather forecast and useful places nearby" },
  { slug: "christmas-summer-camping-new-zealand-2026-27", section: 7, src: "/images/screens/christmas-summer-camping-new-zealand-2026-27.webp", alt: "KiwiCamping on iPhone: the Paihia TOP 10 Holiday Park page in Northland with its Book now button" },
  { slug: "new-years-eve-summer-event-camping-new-zealand", section: 7, src: "/images/screens/new-years-eve-summer-event-camping-new-zealand.webp", alt: "KiwiCamping on iPhone: the Hampshire Holiday Parks Glendhu Bay page near Wānaka with its address, hours and Book now button" },
  { slug: "best-campsite-booking-apps-new-zealand", section: 1, src: "/images/screens/best-campsite-booking-apps-new-zealand.webp", alt: "KiwiCamping on iPhone: the Paihia TOP 10 Holiday Park page with its rating and a Book now button" },
  { slug: "campable-alternatives", section: 1, src: "/images/screens/campable-alternatives.webp", alt: "KiwiCamping on iPhone: the Kumutoto Bay Campsite page in Marlborough with its Open and Paid status and DOC's fee details" },
  { slug: "best-tramping-great-walks-apps-new-zealand", section: 1, src: "/images/screens/best-tramping-great-walks-apps-new-zealand.webp", alt: "KiwiCamping on iPhone: the Inland Track page in Abel Tasman National Park with its distance, duration and grade and a link to the official DOC website" },
  { slug: "best-dump-station-apps-new-zealand", section: 1, src: "/images/screens/best-dump-station-apps-new-zealand.webp", alt: "KiwiCamping on iPhone: a map near Queenstown with pins for a public dump station with drinking water and another dump station, above a list of nearby huts and campsites" },
  { slug: "best-south-island-road-trip-apps-new-zealand", section: 1, src: "/images/screens/best-south-island-road-trip-apps-new-zealand.webp", alt: "KiwiCamping on iPhone: the Christchurch, Tekapo and Aoraki road trip guide with its route on the map, a seven-day forecast and notes on what to book ahead" },
  { slug: "nz-great-walks-2026-27-huts-campsites-booking-fees", section: 7, src: "/images/screens/nz-great-walks-2026-27-huts-campsites-booking-fees.webp", alt: "KiwiCamping on iPhone: a list of tracks with their walking times above a satellite map of forest" },
  { slug: "freedom-camping-queenstown-lakes-2026", section: 5, src: "/images/screens/freedom-camping-queenstown-lakes-2026.webp", alt: "KiwiCamping on iPhone: a satellite map of Wānaka and Roys Bay with holiday park, activity and track pins" },
  { slug: "freedom-camping-thames-coromandel-2026", section: 6, src: "/images/screens/freedom-camping-thames-coromandel-2026.webp", alt: "KiwiCamping on iPhone: a satellite map of the northern Coromandel Peninsula with campsite pins above a search list of nearby huts and campsites" },
  { slug: "freedom-camping-tauranga-2026", section: 6, src: "/images/screens/freedom-camping-tauranga-2026.webp", alt: "KiwiCamping on iPhone: a 14-day North Island road trip on a map with campsite and dump station pins above a seven-day forecast" },
  { slug: "freedom-camping-whangarei-2026", section: 6, src: "/images/screens/freedom-camping-whangarei-2026.webp", alt: "KiwiCamping on iPhone: a Northland road trip route on a map with holiday park, campsite and dump station pins above a seven-day forecast" },
  { slug: "freedom-camping-southland-2026", section: 5, src: "/images/screens/freedom-camping-southland-2026.webp", alt: "KiwiCamping on iPhone: a satellite map of mountain terrain in the south of the South Island with numbered clusters of places and tracks" },
  { slug: "freedom-camping-new-plymouth-2026", section: 6, src: "/images/screens/freedom-camping-new-plymouth-2026.webp", alt: "KiwiCamping on iPhone: the Taranaki and Forgotten World Highway camping loop guide with its trip length, what to plan around and a button to save every place it mentions" },
  { slug: "freedom-camping-waitaki-2026", section: 6, src: "/images/screens/freedom-camping-waitaki-2026.webp", alt: "KiwiCamping on iPhone: the Christchurch, Tekapo and Aoraki road trip guide with its trip length, what to plan around and a button to save every place it mentions" },
  { slug: "freedom-camping-whakatane-2026", section: 6, src: "/images/screens/freedom-camping-whakatane-2026.webp", alt: "KiwiCamping on iPhone: an East Cape road trip route on a map with campsite and dump station pins above a seven-day forecast" },
  { slug: "abel-tasman-coast-track-campsites-2026-27", section: 6, src: "/images/screens/abel-tasman-coast-track-campsites-2026-27.webp", alt: "KiwiCamping on iPhone: a DOC campsite's amenities, including toilets and a water supply, above its reported adult, child and infant prices" },
  { slug: "routeburn-track-camping-2026-27", section: 5, src: "/images/screens/routeburn-track-camping-2026-27.webp", alt: "KiwiCamping on iPhone: the Queenstown and Glenorchy guide with a map of Lake Wakatipu showing campsite pins above a seven-day forecast" },
  { slug: "tongariro-northern-circuit-camping-2026-27", section: 5, src: "/images/screens/tongariro-northern-circuit-camping-2026-27.webp", alt: "KiwiCamping on iPhone: a hut's page in Tongariro National Park with a seven-day forecast and useful places nearby" },
  { slug: "campervan-hire-cost-new-zealand-2026", section: 6, src: "/images/screens/campervan-hire-cost-new-zealand-2026.webp", alt: "KiwiCamping on iPhone: a South Island trip itinerary with the distance and drive time between stops" },
  { slug: "buying-a-campervan-new-zealand-working-holiday", section: 7, src: "/images/screens/buying-a-campervan-new-zealand-working-holiday.webp", alt: "KiwiCamping on iPhone: a Coromandel search showing campsites and huts on the map and in a list with paid or free labels" },
  { slug: "selling-a-campervan-new-zealand-before-you-leave", section: 5, src: "/images/screens/selling-a-campervan-new-zealand-before-you-leave.webp", alt: "KiwiCamping on iPhone: a Picton to Christchurch collection showing 19 saved places and 277 km as the furthest distance between them" },
  { slug: "working-holiday-road-trip-budget-new-zealand-2026", section: 5, src: "/images/screens/working-holiday-road-trip-budget-new-zealand-2026.webp", alt: "KiwiCamping on iPhone: the cost filter set to show free places" },
  { slug: "north-island-vs-south-island-campervan", section: 6, src: "/images/screens/north-island-vs-south-island-campervan.webp", alt: "KiwiCamping on iPhone: the North Island 14-day road trip guide with its trip length, 21 places and 1,306 km" },
  { slug: "campervan-vs-car-and-tent-new-zealand", section: 5, src: "/images/screens/campervan-vs-car-and-tent-new-zealand.webp", alt: "KiwiCamping on iPhone: combining filters for toilets and a water supply" },
  { slug: "rakiura-track-camping-2026-27", section: 6, src: "/images/screens/rakiura-track-camping-2026-27.webp", alt: "KiwiCamping on iPhone: a DOC hut's page with its toilets and water supply listed above a seven-day weather forecast" },
  { slug: "whanganui-journey-camping-2026-27", section: 7, src: "/images/screens/whanganui-journey-camping-2026-27.webp", alt: "KiwiCamping on iPhone: a track page in Abel Tasman National Park with its distance, duration and grade and a link to the official DOC website" },
  { slug: "milford-track-2026-27-huts-booking-fees", section: 7, src: "/images/screens/milford-track-2026-27-huts-booking-fees.webp", alt: "KiwiCamping on iPhone: a search for milford road showing Henry Creek Campsite as a paid campsite in Southland, below an Apple Maps Look Around panel" },
  { slug: "kepler-track-camping-2026-27", section: 7, src: "/images/screens/kepler-track-camping-2026-27.webp", alt: "KiwiCamping on iPhone: a DOC hut's page with its Open status, a link to the official DOC website and an amenities list starting with heating and mattresses" },
  { slug: "heaphy-track-camping-2026-27", section: 7, src: "/images/screens/heaphy-track-camping-2026-27.webp", alt: "KiwiCamping on iPhone: a DOC campsite's amenities (untreated tap water, a water supply, no dogs), its reported adult, child and infant prices, an Add a note field and a seven-day weather forecast" },
  { slug: "lake-waikaremoana-great-walk-camping-2026-27", section: 7, src: "/images/screens/lake-waikaremoana-great-walk-camping-2026-27.webp", alt: "KiwiCamping on iPhone: a campsite's page with its adult, child and infant prices per night and an amenities list showing unpowered sites, non-flush toilets and untreated tap water" },
  { slug: "paparoa-track-huts-booking-2026-27", section: 7, src: "/images/screens/paparoa-track-huts-booking-2026-27.webp", alt: "KiwiCamping on iPhone: a satellite map of the West Coast with numbered clusters and pins for campsites, huts and walks such as the Harihari Coastal Walkway and Scone Hut" },
  { slug: "hump-ridge-track-huts-booking-2026-27", section: 7, src: "/images/screens/hump-ridge-track-huts-booking-2026-27.webp", alt: "KiwiCamping on iPhone: a trip itinerary of ordered stops, including tours, holiday parks and a campsite, with the distance and drive time shown between each leg" },
  { slug: "auckland-to-wellington-drive-guide", section: 6, src: "/images/screens/auckland-to-wellington-drive-guide.webp", alt: "KiwiCamping on iPhone: a North Island road trip guide with its length in kilometres, a Save all mentioned places button and the top of a map with place markers near Hamilton" },
  { slug: "christchurch-to-queenstown-drive-guide", section: 6, src: "/images/screens/christchurch-to-queenstown-drive-guide.webp", alt: "KiwiCamping on iPhone: a route drawn across the Canterbury plains on a map with place markers, above a seven-day weather forecast" },
  { slug: "queenstown-to-milford-sound-drive-guide", section: 6, src: "/images/screens/queenstown-to-milford-sound-drive-guide.webp", alt: "KiwiCamping on iPhone: a trip itinerary of numbered stops with the distance and driving time shown between each pair of stops" },
  { slug: "auckland-to-bay-of-islands-drive-guide", section: 7, src: "/images/screens/auckland-to-bay-of-islands-drive-guide.webp", alt: "KiwiCamping on iPhone: a Bay of Islands road trip guide with its trip length, a Save all mentioned places button and a map of the bay with place markers around Paihia and Kerikeri" },
  { slug: "wellington-to-napier-drive-guide", section: 6, src: "/images/screens/wellington-to-napier-drive-guide.webp", alt: "KiwiCamping on iPhone: a road trip guide with a Save all mentioned places button, a map with an orange route line between campsite and dump station markers, and a seven-day weather forecast below it" },
  { slug: "christchurch-to-dunedin-drive-guide", section: 7, src: "/images/screens/christchurch-to-dunedin-drive-guide.webp", alt: "KiwiCamping on iPhone: a satellite map of the South Island covered in green numbered markers that group nearby places, with labels such as 27 places and 33 places" },
  { slug: "freedom-camping-dunedin-2026", section: 6, src: "/images/screens/freedom-camping-dunedin-2026.webp", alt: "KiwiCamping on iPhone: a satellite map of South Otago with numbered clusters of tracks and places" },
  { slug: "freedom-camping-wellington-2026", section: 6, src: "/images/screens/freedom-camping-wellington-2026.webp", alt: "KiwiCamping on iPhone: the North Island 14-day road trip guide with its trip length, 21 places and 1,306 km" },
  { slug: "freedom-camping-far-north-2026", section: 6, src: "/images/screens/freedom-camping-far-north-2026.webp", alt: "KiwiCamping on iPhone: the Bay of Islands week guide with a map of campsite and holiday park pins above a seven-day forecast" },
  { slug: "freedom-camping-marlborough-2026", section: 6, src: "/images/screens/freedom-camping-marlborough-2026.webp", alt: "KiwiCamping on iPhone: a Picton to Christchurch route on a map above a seven-day forecast for Picton and Marlborough" },
  { slug: "freedom-camping-rotorua-2026", section: 7, src: "/images/screens/freedom-camping-rotorua-2026.webp", alt: "KiwiCamping on iPhone: a holiday park's page in Northland with its Paid label, rating and a Book now button" },
  { slug: "hipcamp-alternatives", section: 1, src: "/images/screens/hipcamp-alternatives.webp", alt: "KiwiCamping on iPhone: a Collections list of saved road trips with their nights to stay and other stops" },
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
