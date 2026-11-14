import placesFile from "./data/places.json";
import { builtHubs } from "@/lib/hubs";
import { sitePath } from "@/lib/site";

/**
 * The place pages: one page per DOC campsite, DOC hut and BookIt holiday park with a photo and a real
 * description, built from the app's own data by scripts/export-places.mjs. The data arrives encrypted
 * (this repository is public) and is decrypted before the build by scripts/decrypt-places.mjs; without
 * the key the site builds with no place pages. Server components only: nothing here may reach a client
 * bundle. A place's `state` fields hold its DOC region, the grouping the site's hubs use.
 */
export type PlaceType = "doc_campsite" | "doc_hut" | "holiday_park";
export type Place = {
  id: string; slug: string; type: PlaceType; name: string;
  state: string; stateSlug: string; stateName: string; island: "North Island" | "South Island";
  park: string | null; locality: string | null; category: string | null; lat: number; lng: number;
  description: string; descriptionMore: boolean;
  amenities: string[]; amenityCount: number;
  activities: string[]; activityCount: number;
  fee: string | null; dogs: "yes" | "no" | "leash" | "permit" | null; access: string[];
  sites: number | null; walk: string | null; bookingRequired: boolean | null;
  photos: string[]; heroWidth: number; photoCount: number; credit: string;
  booking: string | null; checkIn: string | null; checkOut: string | null; stars: number | null;
  /** Set on the places without a full listing (lib/data/place-stubs.json): every other place the app lists,
   * rendered by the same template but noindex. `typeName` is the app's name for a type with no label here. */
  indexable?: boolean; typeName?: string; closed?: boolean;
};

const file = placesFile as unknown as { exportedAt: string | null; places: Place[] };
export const places: Place[] = file.places;
export const placesAsOf = file.exportedAt;

export const typeLabels: Record<PlaceType, { one: string; many: string }> = {
  doc_campsite: { one: "DOC campsite", many: "DOC campsites" },
  doc_hut: { one: "DOC hut", many: "DOC huts" },
  holiday_park: { one: "Holiday park", many: "Holiday parks" },
};
/** A place's type label; the types without a full listing (tracks, stays, dump stations…) use the app's own name. */
export const typeLabel = (place: Pick<Place, "type" | "typeName">) => typeLabels[place.type] ?? { one: place.typeName ?? "Place", many: place.typeName ?? "Places" };
/** A place's name, page and type for the map's hover label and tap card (components/places/place-map.tsx). */
export const mapLabel = (place: Place): [string, string, string] => [place.name, placePath(place), typeLabel(place).one];
/** The types a full listing can have: DOC campsites and huts, and holiday parks. */
export const isListingType = (type: string): type is PlaceType => type in typeLabels;
export const placeTypes = (Object.keys(typeLabels) as PlaceType[]).filter((type) => places.some((place) => place.type === type));

export type PlaceState = { slug: string; name: string; code: string; island: string; places: Place[] };
export const placeStates: PlaceState[] = [...new Map(places.map((place) => [place.stateSlug, place])).values()]
  .map((place) => ({ slug: place.stateSlug, name: place.stateName, code: place.stateName, island: place.island, places: places.filter((other) => other.stateSlug === place.stateSlug) }))
  .sort((a, b) => a.island.localeCompare(b.island) || a.name.localeCompare(b.name));
export const islands = ["North Island", "South Island"] as const;

export const placesPath = () => sitePath("/places");
export const placeStatePath = (state: { slug: string }) => sitePath(`/places/${state.slug}`);
export const placePath = (place: Place) => sitePath(`/places/${place.stateSlug}/${place.slug}`);
export const placeById = new Map(places.map((place) => [`${place.stateSlug}/${place.slug}`, place]));

/** Great-circle distance between two places, in kilometres. */
export const distanceKm = (a: Pick<Place, "lat" | "lng">, b: Pick<Place, "lat" | "lng">) => {
  const rad = Math.PI / 180, dLat = (b.lat - a.lat) * rad, dLng = (b.lng - a.lng) * rad;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin(dLng / 2) ** 2;
  return 12742 * Math.asin(Math.sqrt(h));
};
/** The closest other pages, within 150 km, nearest first. */
export function nearbyPlaces(place: Place, count = 6) {
  return places.filter((other) => other !== place).map((other) => ({ place: other, km: distanceKm(place, other) }))
    .filter((entry) => entry.km <= 150).sort((a, b) => a.km - b.km).slice(0, count);
}

/** The region's DOC hub: its huts hub for a hut, its camping hub otherwise. */
export function parkHubPath(place: Place) {
  return builtHubs.find((candidate) => candidate.id === `${place.type === "doc_hut" ? "huts" : "camping"}/${place.stateSlug}`)?.path;
}
export function stateHubPath(state: { slug: string }) {
  return builtHubs.find((candidate) => candidate.id === `camping/${state.slug}`)?.path;
}

export const feeLabel = (fee: string | null) => /^free$/i.test(fee ?? "") ? "Free" : /^paid$/i.test(fee ?? "") ? "Fees apply" : undefined;
/** A place's photo, loaded straight from where the app loads it (checked by scripts/export-places.mjs). */
export const photoUrl = (url: string) => url;
