import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { homeOgImage } from "@/lib/seo";
import { photoUrl, placePath, places, placesPath, placeStatePath, type Place, type PlaceState } from "@/lib/places";
import { placeDescription } from "@/lib/places-copy";

/** English only, so no hreflang; every place page in the export is indexable (lib/routes/places.ts). */
const robots = { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" as const, "max-snippet": -1 } };
const og = (title: string, description: string, path: string, image?: string) => ({
  type: "website" as const, siteName: "KiwiCamping", locale: "en_NZ", title, description, url: `${SITE_URL}${path}`,
  images: [image ? { url: image.startsWith("http") ? image : `${SITE_URL}${image}`, alt: title } : { ...homeOgImage, alt: "KiwiCamping" }],
});

export function placeMetadata(place: Place): Metadata {
  // The words people search with: "<campsite> camping", "<hut>" with bunks and booking, "<park>" with booking.
  const title = place.type === "holiday_park" ? `${place.name}: photos, facilities and booking`
    : place.type === "doc_hut" ? `${place.name}: DOC hut photos, bunks and facilities`
    : `${place.name} camping: DOC campsite photos, facilities and fees`;
  const description = placeDescription(place);
  return { title, description, alternates: { canonical: placePath(place) }, openGraph: og(title, description, placePath(place), place.photos[0] && photoUrl(place.photos[0])), robots };
}

export function placeStateMetadata(state: PlaceState): Metadata {
  const title = `DOC campsites, huts and holiday parks in ${state.name}`;
  const description = `${state.places.length} places to camp and stay in ${state.name}, with photos, facilities, fees and holiday parks you can book.`;
  return { title, description, alternates: { canonical: placeStatePath(state) }, openGraph: og(title, description, placeStatePath(state)), robots };
}

export function placesMetadata(): Metadata {
  const title = "DOC campsites, huts and holiday parks across New Zealand";
  const description = `Search ${places.length.toLocaleString("en-NZ")} DOC campsites, huts and holiday parks by region, island or type, with photos, facilities, fees and holiday parks you can book.`;
  return { title, description, alternates: { canonical: placesPath() }, openGraph: og(title, description, placesPath()), robots };
}
