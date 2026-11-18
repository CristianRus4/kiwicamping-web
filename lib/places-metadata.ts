import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { smartBannerContent } from "@/lib/app-store";
import { homeOgImage } from "@/lib/seo";
import { isListingType, photoUrl, placeListingPath, placePath, placeStatePath, placesPath, type Place, type PlaceState, typeLabel } from "@/lib/places";
import type { Listing } from "@/lib/place-directory";
import { placeDescription } from "@/lib/places-copy";
import { regionIntros } from "@/lib/region-intros";

/** English only, so no hreflang; every place page in the export is indexable (lib/routes/places.ts). */
const robots = { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" as const, "max-snippet": -1 } };
/** The places without a full listing (tracks, stays, dump stations, day-use areas, thin pages): noindex, out of the sitemaps. */
const noindex = { index: false, follow: true };
type Image = { url: string; alt: string; width?: number; height?: number; type?: string };
const og = (title: string, description: string, path: string, image?: Image) => ({
  type: "website" as const, siteName: "KiwiCamping", locale: "en_NZ", title, description, url: `${SITE_URL}${path}`,
  images: [image ?? { ...homeOgImage, alt: "KiwiCamping" }],
});
/** The Twitter/X card of a page: the same title, description and image as its Open Graph, so a link looks the same everywhere. */
const social = (card: ReturnType<typeof og>) => ({ openGraph: card, twitter: { card: "summary_large_image" as const, title: card.title, description: card.description, images: card.images } });

/**
 * A place's link-preview photo: its first one when that is a JPEG or PNG. X, WhatsApp and iMessage often show
 * an empty card for a WebP (and the photos with no file extension, whose type is unknown), so those and
 * places without photos fall back to the universal image.
 */
export function previewPhoto(place: Place): Image | undefined {
  const first = place.photos[0] && photoUrl(place.photos[0]);
  if (!first) return undefined;
  let url: URL;
  try { url = new URL(first); } catch { return undefined; }
  const extension = url.pathname.match(/\.(jpe?g|png)$/i)?.[1].toLowerCase();
  if (!extension || url.protocol !== "https:") return undefined;
  return { url: url.href, alt: place.name, type: extension === "png" ? "image/png" : "image/jpeg" };
}

export function placeMetadata(place: Place): Metadata {
  // The words people search with: "<campsite> camping", "<hut>" with bunks and booking, "<park>" with booking.
  const title = place.type === "holiday_park" ? `${place.name}: photos, facilities and booking`
    : place.type === "doc_hut" ? `${place.name}: DOC hut photos, bunks and facilities`
    : !isListingType(place.type) ? `${place.name}: ${typeLabel(place).one.toLowerCase()} in ${[place.locality, place.stateName].filter(Boolean).join(", ")}`
    : `${place.name} camping: DOC campsite photos, facilities and fees`;
  const description = placeDescription(place);
  // The banner hands the app this page's URL, which it opens as the place (Universal Links).
  const other = { "apple-itunes-app": smartBannerContent("en", undefined, `${SITE_URL}${placePath(place)}`) };
  return { title, description, alternates: { canonical: placePath(place) }, ...social(og(title, description, placePath(place), previewPhoto(place))), robots: place.indexable === false ? noindex : robots, other };
}

export function placeStateMetadata(state: PlaceState): Metadata {
  const title = `DOC campsites, huts and holiday parks in ${state.name}`;
  const intro = regionIntros[state.slug];
  const description = intro ? (intro.length <= 155 ? intro : `${intro.slice(0, intro.lastIndexOf(" ", 154))}…`) : `DOC campsites, huts and holiday parks in ${state.name}, with photos, facilities, fees and holiday parks you can book.`;
  return { title, description, alternates: { canonical: placeStatePath(state) }, ...social(og(title, description, placeStatePath(state))), robots };
}

/** A listing by type (`/places/<region>/<listing>/`, lib/place-directory.ts), rendered for the Worker. */
export function placeListingMetadata(state: PlaceState, listing: Listing, indexable: boolean): Metadata {
  const path = placeListingPath(state, listing);
  const title = `${listing.title} in ${state.name}`;
  const description = `${listing.title} in ${state.name} in KiwiCamping, on the map and from A to Z.`;
  return { title, description, alternates: { canonical: path }, ...social(og(title, description, path)), robots: indexable ? robots : noindex, other: { "apple-itunes-app": smartBannerContent("en") } };
}

export function placesMetadata(): Metadata {
  const title = "DOC campsites, huts and holiday parks across New Zealand";
  const description = "Search DOC campsites, huts and holiday parks by region, island or type, with photos, facilities, fees and holiday parks you can book.";
  return { title, description, alternates: { canonical: placesPath() }, ...social(og(title, description, placesPath())), robots };
}
