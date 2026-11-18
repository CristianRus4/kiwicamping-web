/**
 * The places directory's listings by type: which app types each listing holds, and which listings and
 * place pages search engines may index. The one place to change either (docs/places-cloudflare.md).
 *
 * Every place has a page (lib/places.ts). A visitor reaches each listed one from /places/: the region page
 * links a listing per type, `/places/<region>/<listing>/`, and the listing links every place of its types in
 * that region, the full listings and the extra places alike. The listings are rendered with the extra place
 * pages by scripts/export-place-pages.tsx and served from R2 by the Worker, not by GitHub Pages.
 *
 * `indexed` is the per-type switch for search engines: a listing that is on is indexable and in the
 * sitemap, and so is each of its extra place pages that passes `hasEnoughFacts`. Everything else is
 * noindex. Every type the app has must be in one listing or in `unlisted` here: the build fails on a new
 * type, so nobody lists data before its source and licence are checked (lib/data/hubs.meta.json, the
 * records' `credit`).
 *
 * No imports: scripts/build-place-directory.ts and scripts/export-place-pages.tsx read this with tsx.
 */
export type Listing = { slug: string; title: string; types: string[]; indexed: boolean };

export const listings: Listing[] = [
  { slug: "doc-campsites", title: "DOC campsites", types: ["doc_campsite"], indexed: false },
  { slug: "doc-huts", title: "DOC huts", types: ["doc_hut"], indexed: false },
  { slug: "holiday-parks", title: "Holiday parks", types: ["holiday_park"], indexed: false },
  { slug: "campgrounds", title: "Campgrounds", types: ["campground"], indexed: false },
  { slug: "tracks", title: "Walking tracks", types: ["track"], indexed: false },
  { slug: "stays", title: "Stays", indexed: false, types: ["motel", "roofed_accommodation", "bed_breakfast", "hotel_resort", "lodge", "self_contained",
    "studio_apartment", "house", "chalet_villa_cottage", "backpacker_hostel", "retreat", "farm_station_stay"] },
  { slug: "tours", title: "Tours", types: ["tour"], indexed: false },
];

/**
 * Types that get no listing, no link and no indexing, whatever their page: the app's dump stations and
 * day-use areas come from WikiCamps-derived files (lib/data/hubs.meta.json, licence `exclude`). Cristian,
 * 18 Nov 2026: "stays out, I don't want WikiCamps to complain."
 */
export const unlisted: Record<string, string> = {
  dump_station: "WikiCamps-derived (dumps.json)",
  day_use_area: "WikiCamps-derived (dayusenorth.json, dayusesouth.json)",
};

const byType = new Map(listings.flatMap((listing) => listing.types.map((type) => [type, listing] as const)));

/** The listing a place's type belongs to; undefined for an unlisted type. Throws on a type nobody has checked. */
export function listingOf(type: string): Listing | undefined {
  if (type in unlisted) return undefined;
  const listing = byType.get(type);
  if (!listing) throw new Error(`Place type "${type}" is in no listing: check its source and licence, then add it to a listing or to \`unlisted\` in lib/place-directory.ts`);
  return listing;
}

/**
 * Whether a place is listed: its type has a listing and the record names its source (`credit`). A record with
 * no credit has no clear source and stays out: the council campgrounds and holiday parks from the app's New
 * Zealand database, until their sources are in lib/data/hubs.meta.json.
 */
export const isListed = (place: { type: string; credit?: string | null }) => Boolean(listingOf(place.type)) && Boolean(place.credit?.trim());

export const listingPath = (stateSlug: string, listing: Pick<Listing, "slug">) => `/places/${stateSlug}/${listing.slug}/`;

type Facts = {
  type: string; typeName?: string; credit?: string | null; name: string; locality: string | null; lat: number; lng: number; closed?: boolean;
  amenities: string[]; activities: string[]; fee: string | null; sites: number | null; bookingRequired: boolean | null; dogs?: string | null;
};

/**
 * Enough for a search engine: a name, a locality, coordinates and at least one facility or fact. A facility
 * that only repeats the type is not one. A closed place never is.
 */
export function hasEnoughFacts(place: Facts) {
  const facilities = place.amenities.filter((amenity) => amenity.toLowerCase() !== (place.typeName ?? "").toLowerCase());
  const facts = facilities.length > 0 || place.activities.length > 0 || Boolean(place.fee) || place.sites != null || place.bookingRequired != null || place.dogs != null;
  return Boolean(place.name.trim() && place.locality?.trim() && Number.isFinite(place.lat) && Number.isFinite(place.lng) && !place.closed && facts);
}

/** Whether an extra place page (lib/data/place-stubs.json) is indexable: listed, its listing on, enough facts. */
export const isIndexedExtra = (place: Facts) => isListed(place) && Boolean(listingOf(place.type)?.indexed) && hasEnoughFacts(place);
