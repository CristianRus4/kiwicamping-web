import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { smartBannerContent } from "@/lib/app-store";
import { homeOgImage } from "@/lib/seo";
import { isListingType, photoUrl, placePath, placeStatePath, placesPath, type Place, type PlaceState, typeLabel } from "@/lib/places";
import { placeDescription } from "@/lib/places-copy";
import { regionIntros } from "@/lib/region-intros";

/** English only, so no hreflang; every place page in the export is indexable (lib/routes/places.ts). */
const robots = { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" as const, "max-snippet": -1 } };
/** The places without a full listing (tracks, stays, dump stations, day-use areas, thin pages): noindex, out of the sitemaps. */
const noindex = { index: false, follow: true };
const og = (title: string, description: string, path: string, image?: string) => ({
  type: "website" as const, siteName: "KiwiCamping", locale: "en_NZ", title, description, url: `${SITE_URL}${path}`,
  images: [image ? { url: image.startsWith("http") ? image : `${SITE_URL}${image}`, alt: title } : { ...homeOgImage, alt: "KiwiCamping" }],
});

export function placeMetadata(place: Place): Metadata {
  // The words people search with: "<campsite> camping", "<hut>" with bunks and booking, "<park>" with booking.
  const title = place.type === "holiday_park" ? `${place.name}: photos, facilities and booking`
    : place.type === "doc_hut" ? `${place.name}: DOC hut photos, bunks and facilities`
    : !isListingType(place.type) ? `${place.name}: ${typeLabel(place).one.toLowerCase()} in ${[place.locality, place.stateName].filter(Boolean).join(", ")}`
    : `${place.name} camping: DOC campsite photos, facilities and fees`;
  const description = placeDescription(place);
  // The banner hands the app this page's URL, which it opens as the place (Universal Links).
  const other = { "apple-itunes-app": smartBannerContent("en", undefined, `${SITE_URL}${placePath(place)}`) };
  return { title, description, alternates: { canonical: placePath(place) }, openGraph: og(title, description, placePath(place), place.photos[0] && photoUrl(place.photos[0])), robots: place.indexable === false ? noindex : robots, other };
}

export function placeStateMetadata(state: PlaceState): Metadata {
  const title = `DOC campsites, huts and holiday parks in ${state.name}`;
  const intro = regionIntros[state.slug];
  const description = intro ? (intro.length <= 155 ? intro : `${intro.slice(0, intro.lastIndexOf(" ", 154))}…`) : `DOC campsites, huts and holiday parks in ${state.name}, with photos, facilities, fees and holiday parks you can book.`;
  return { title, description, alternates: { canonical: placeStatePath(state) }, openGraph: og(title, description, placeStatePath(state)), robots };
}

export function placesMetadata(): Metadata {
  const title = "DOC campsites, huts and holiday parks across New Zealand";
  const description = "Search DOC campsites, huts and holiday parks by region, island or type, with photos, facilities, fees and holiday parks you can book.";
  return { title, description, alternates: { canonical: placesPath() }, openGraph: og(title, description, placesPath()), robots };
}
