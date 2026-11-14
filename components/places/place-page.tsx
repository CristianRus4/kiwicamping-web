import Link from "next/link";
import { mapScript, PlaceMap } from "@/components/places/place-map";
import { Images, MapPin, Star, StarHalf } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GuideEndCta, GuideSideCard, StoreWithQr } from "@/components/guide-cta";
import { mainData } from "@/lib/analytics";
import { SITE_URL } from "@/lib/site";
import { uiStrings } from "@/lib/source-strings";
import { mapLabel, feeLabel, isListingType, nearbyPlaces, parkHubPath, photoUrl, placePath, placesPath, placeStatePath, stateHubPath, typeLabel, type Place } from "@/lib/places";
import { placeQuestions, placeSummary } from "@/lib/places-copy";
import { appStoreUrl } from "@/lib/app-store";
import { appLink, openAppScript } from "@/lib/open-app";
import { articleHref, articles, getArticle } from "@/lib/site";
import { placeGuides, rulesGuides } from "@/lib/place-guides";
import { LinkList } from "@/components/places/listing";

/**
 * One place page. Every part that has more in the app (description, facilities, fees) shows a little
 * and fades out; the description ends on the page's one store button, so the rest is one tap away in
 * KiwiCamping. Holiday parks lead with the booking banner on our BookIt agent link.
 */
function Faded({ children, openApp }: { children: React.ReactNode; openApp?: string }) {
  return <div className="pl-fade">
    <div className="pl-fade-body">{children}</div>
    {openApp && <div className="pl-fade-cta"><StoreWithQr locale="en" placement="place" label={uiStrings.download} openApp={openApp} qrFile={PLACE_QR} reuse /></div>}
  </div>;
}

function Stars({ value }: { value: number }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return <span className="pl-stars" role="img" aria-label={`${value} out of 5 stars`}>
    {[0, 1, 2, 3, 4].map((index) => index < full ? <Star key={index} className="on" aria-hidden="true" /> : index === full && half ? <StarHalf key={index} className="on" aria-hidden="true" /> : <Star key={index} aria-hidden="true" />)}
  </span>;
}

/** Google Maps by default; the page script swaps in Apple Maps on an iPhone or iPad. */
function MapsButton({ place }: { place: Place }) {
  const google = `https://www.google.com/maps/search/?api=1&query=${place.lat},${place.lng}`;
  const apple = `https://maps.apple.com/?ll=${place.lat},${place.lng}&q=${encodeURIComponent(place.name)}`;
  return <a className="store-button pl-maps" href={google} data-apple-maps={apple} rel="nofollow noopener" target="_blank"><MapPin aria-hidden="true" /><span>Open in Maps</span></a>;
}
/** The place page's scripts, loaded from one cached file (/places/place.js, written by the export) rather
 * than inline on each of the thousands of place pages: the map loader, the Apple Maps link and Open in app. */
export const PLACE_SCRIPT = "/places/place.js";
/** The QR code of the store buttons, likewise one cached file. */
export const PLACE_QR = "/places/qr-en.svg";
const mapsScript = `(function(){if(/iPhone|iPad|iPod/.test(navigator.userAgent)||(navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)){document.querySelectorAll("[data-apple-maps]").forEach(function(a){a.href=a.getAttribute("data-apple-maps");});}})();`;

export function PlacePage({ place }: { place: Place }) {
  const type = typeLabel(place);
  const listing = isListingType(place.type);
  const where = place.park ?? place.locality ?? place.stateName;
  const url = `${SITE_URL}${placePath(place)}`;
  const openApp = appLink(placePath(place));
  const nearby = nearbyPlaces(place);
  const parkHub = parkHubPath(place);
  const stateHub = stateHubPath({ slug: place.stateSlug });
  const fee = feeLabel(place.fee);
  const summary = placeSummary(place);
  const questions = placeQuestions(place);
  const [rulesSlug, rulesLabel] = rulesGuides[listing ? place.type : "doc_campsite"];
  const rulesGuide = articles.find((article) => article.slug === rulesSlug);
  const guides = placeGuides(place).flatMap((slug) => getArticle(slug) ?? []);
  const shown = place.photos.length >= 5 ? 5 : place.photos.length >= 3 ? 3 : place.photos.length;
  const morePhotos = place.photoCount - shown;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": place.type === "doc_hut" ? "LodgingBusiness" : listing ? "Campground" : "Place",
        "@id": `${url}#place`, name: place.name, url, description: summary.join(" "),
        image: place.photos.map(photoUrl),
        address: { "@type": "PostalAddress", ...(place.locality ? { addressLocality: place.locality } : {}), addressRegion: place.stateName, addressCountry: "NZ" },
        geo: { "@type": "GeoCoordinates", latitude: place.lat, longitude: place.lng },
        ...(place.park ? { containedInPlace: { "@type": "Park", name: place.park } } : {}),
        ...(place.amenities.length ? { amenityFeature: place.amenities.map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })) } : {}),
        ...(place.dogs ? { petsAllowed: place.dogs === "yes" || place.dogs === "leash" } : {}),
        ...(fee === "Free" ? { isAccessibleForFree: true } : {}),
        ...(place.stars ? { starRating: { "@type": "Rating", ratingValue: place.stars, bestRating: 5 } } : {}),
      },
      ...(questions.length ? [{ "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: questions.map((entry) => ({ "@type": "Question", name: entry.question, acceptedAnswer: { "@type": "Answer", text: entry.answer } })) }] : []),
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Places", item: `${SITE_URL}${placesPath()}` },
        { "@type": "ListItem", position: 2, name: place.stateName, item: `${SITE_URL}${placeStatePath({ slug: place.stateSlug })}` },
        { "@type": "ListItem", position: 3, name: place.name, item: url },
      ] },
    ],
  };

  return <>
    <Header openApp={openApp} />
    <main {...mainData({ kind: "place", locale: "en", slug: `${place.stateSlug}/${place.slug}`, category: type.one })}>
      <article className="pl-page">
        <div className="pl-wrap">
          <nav className="pl-crumbs" aria-label="Breadcrumb"><Link href={placesPath()}>Places</Link><span aria-hidden="true">/</span><Link href={placeStatePath({ slug: place.stateSlug })}>{place.stateName}</Link></nav>
          <header className="pl-header">
            <h1>{place.name}</h1>
            <p className="pl-meta">{place.stars ? <Stars value={place.stars} /> : null}<span>{type.one} in {where}</span>{place.closed && <span>Closed</span>}</p>
          </header>
          {shown > 0 && <div className={`pl-gallery pl-gallery-${shown}`}>
            {place.photos.slice(0, shown).map((file, index) => <img key={file} src={photoUrl(file)} alt={index === 0 ? `${place.name}, ${type.one.toLowerCase()} in ${place.stateName}` : `${place.name}, photo ${index + 1}`} loading={index === 0 ? "eager" : "lazy"} fetchPriority={index === 0 ? "high" : undefined} decoding="async" referrerPolicy="no-referrer" />)}
            {morePhotos > 0 && shown > 1 && <a className="pl-more-photos" href={appStoreUrl({ placement: "place" })} data-cta="place" data-open-app={openApp}><Images aria-hidden="true" />+{morePhotos} photos in the app</a>}
          </div>}
          <div className="pl-layout">
            <div className="pl-main">
              {place.booking && <div className="pl-book-banner">
                <div><div className="eyebrow">Book your stay</div><div className="pl-book-title">Live prices and availability for your dates</div>{(place.checkIn || place.checkOut) && <div className="pl-book-times">{[place.checkIn && `Check-in from ${place.checkIn}`, place.checkOut && `check-out by ${place.checkOut}`].filter(Boolean).join(", ")}</div>}</div>
                <a className="store-button pl-book" href={place.booking} rel="sponsored nofollow noopener" target="_blank" data-book="bookit">Book now</a>
              </div>}
              <section>
                <h2>About {place.name}</h2>
                <p className="pl-summary">{summary.join(" ")}</p>
                {place.description ? <Faded openApp={openApp}><p>{place.description}</p></Faded>
                  : <div className="pl-fade-cta"><StoreWithQr locale="en" placement="place" label={uiStrings.download} openApp={openApp} qrFile={PLACE_QR} reuse /></div>}
              </section>
              {place.amenities.length > 0 && <section>
                <h2>Facilities</h2>
                <Faded><ul className="pl-amenities">{place.amenities.map((amenity) => <li key={amenity}>{amenity}</li>)}</ul></Faded>
              </section>}
              {place.activities.length > 0 && <section>
                <h2>Things to do</h2>
                <Faded><ul className="pl-amenities">{place.activities.map((activity) => <li key={activity}>{activity}</li>)}</ul></Faded>
              </section>}
              {!place.booking && (listing || fee) && <section>
                <h2>Fees</h2>
                <Faded><p>{fee ? `${fee}. ` : ""}{listing && <>DOC fees change with the season, and some {place.type === "doc_hut" ? "huts" : "sites"} must be booked ahead. KiwiCamping shows the current fee, how to book and what each {place.type === "doc_hut" ? "hut" : "site"} offers.</>}</p></Faded>
              </section>}
              <section>
                <h2>Location</h2>
                <p>{place.park && `${place.park}, `}{parkHub ? <Link href={parkHub}>{place.stateName}</Link> : stateHub ? <Link href={stateHub}>{place.stateName}</Link> : place.stateName}, {place.island}</p>
                <PlaceMap points={nearby.map(({ place: other }) => [other.lng, other.lat] as [number, number])} labels={nearby.map(({ place: other }) => mapLabel(other))} focus={[place.lng, place.lat]} label={`${place.name} on the map`} precision={3} small shared><MapsButton place={place} /></PlaceMap>
              </section>
              {nearby.length > 0 && <section>
                <h2>Nearby</h2>
                <ul className="pl-rows">{nearby.map(({ place: other, km }) => <li key={other.id}><Link href={placePath(other)}>
                  <img src={photoUrl(other.photos[1] ?? other.photos[0])} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
                  <span><strong>{other.name}</strong><small>{typeLabel(other).one} · {km < 1 ? "under 1" : Math.round(km)} km</small></span>
                </Link></li>)}</ul>
              </section>}
              <LinkList title={`Guides for ${place.stateName}`} links={guides.map((guide) => ({ href: articleHref(guide), label: guide.title }))} />
              {questions.length > 0 && <section className="pl-faq">
                <h2>Questions about {place.name}</h2>
                {questions.map((entry) => <details key={entry.question}><summary>{entry.question}<span aria-hidden="true">+</span></summary><p>{entry.answer}</p></details>)}
                {rulesGuide && <p className="pl-rules">Read <Link href={articleHref(rulesGuide)}>{rulesLabel}</Link> before you go.</p>}
              </section>}
              {/* The licence of DOC's content requires the credit; the booking feed gets none. */}
              {/CC BY/.test(place.credit) && <p className="pl-credit">© {place.credit}</p>}
              <GuideEndCta locale="en" placement="place" label={uiStrings.download} openApp={openApp} qrFile={PLACE_QR} eyebrow={uiStrings.takeRoad} title={uiStrings.savePlanTitle} text={uiStrings.savePlanText} />
            </div>
            <aside><GuideSideCard locale="en" placement="place" label={uiStrings.download} openApp={openApp} qrFile={PLACE_QR} eyebrow={uiStrings.downloadEyebrow} title={uiStrings.downloadTitle} /></aside>
          </div>
        </div>
      </article>
    </main>
    <Footer pageKey={`place:${place.stateSlug}/${place.slug}`} openApp={openApp} />
    {place.indexable !== false && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />}
    <script data-static-tools src={PLACE_SCRIPT} defer />
  </>;
}

/** The contents of /places/place.js. */
export const placePageScript = [mapScript, mapsScript, openAppScript].join("\n");
