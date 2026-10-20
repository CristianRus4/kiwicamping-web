import facts from "@/lib/data/product-facts.json";
import { appStoreUrl, type CtaPlacement } from "@/lib/app-store";
import type { Article } from "@/lib/article-model";
import { DownloadCard } from "./download-card";
import { ScreenshotImage } from "./site-image";

/**
 * In-article App Store calls to action, matched to what the reader came for (docs/growth/PLAN.md,
 * "Conversion"): one inline after the second section, one at the end with a real screenshot and the
 * desktop QR code.
 *
 * Every count is read from lib/data/product-facts.json (the app's bundled data), never typed in, and
 * every variant states the Pass boundary: only BookIt stays and tours are free. English only: the
 * strings are not in a translation namespace, so localized guides keep their own download card.
 *
 * The inline block is site furniture, not article prose, so its text sits in <div>s rather than <p>s
 * (the similarity audit compares <p> paragraphs across guides), it is never an <aside> (the
 * article body ends at the first `</div><aside>`), and its button carries no inline SVG icon (the
 * audit's `<p[^>]*>` also matches an SVG `<path>`, which would turn the CTA text into a paragraph).
 */
export type ContextCtaVariant = "map" | "rules" | "doc" | "costs" | "roadtrip" | "holidayParks" | "comparison";

const n = (value: number) => value.toLocaleString("en-NZ");
const { docCampsites, docHuts, dumpStations } = facts.categories;
const count = {
  campsites: n(docCampsites.total),
  huts: n(docHuts.total),
  dumps: n(dumpStations.total),
  freeCampsites: n(docCampsites.fee.free),
  freeDumps: n(dumpStations.fee.free),
};

type Copy = { eyebrow: string; title: string; body: string; endTitle: string; shot: { src: string; alt: string } };

const shots = {
  map: { src: "/images/kiwicamping-hero.webp", alt: "The KiwiCamping map for New Zealand, with campsite and holiday park pins across Golden Bay and the Explore list of nearby places below" },
  place: { src: "/images/kiwicamping-feature-1.webp", alt: "A KiwiCamping place screen for Robin Hood Bay Campsite in Marlborough, showing the free fee, opening status, amenities and a booking link" },
  trip: { src: "/images/kiwicamping-feature-3.webp", alt: "A KiwiCamping road trip itinerary for the Bay of Islands, listing seven stops with driving distance, dates and the weather at each campsite" },
  lists: { src: "/images/kiwicamping-feature-4.webp", alt: "A KiwiCamping list for a trip to Queenstown with a holiday park, a campground and free day-use parking, each with its distance" },
  doc: { src: "/images/kiwicamping-feature-6.webp", alt: "The KiwiCamping Explore list showing DOC huts and campsites in Southland, Auckland and Wellington with their distance from the map view" },
};

const copy: Record<ContextCtaVariant, Copy> = {
  map: {
    eyebrow: "On the map",
    title: `${count.campsites} DOC campsites, ${count.huts} huts and ${count.dumps} dump stations in one app`,
    body: "KiwiCamping puts DOC's campsites and huts on one map with the dump stations between them. Each place opens with its fee, facilities and access notes, and the details stay readable without signal.",
    endTitle: "Find tonight's camp on the map.",
    shot: shots.map,
  },
  rules: {
    eyebrow: "Find a legal night",
    title: "Check the campsite before you park",
    body: `KiwiCamping lists ${count.campsites} DOC campsites with the fee, dog rules, vehicle access and whether each one takes bookings, so a legal paid fallback is already on your phone when a freedom camping spot is full or closed.`,
    endTitle: "Know where you can stay tonight.",
    shot: shots.place,
  },
  doc: {
    eyebrow: "DOC places in your pocket",
    title: `${count.huts} DOC huts and ${count.campsites} campsites, with fees and booking status`,
    body: "Every hut and campsite in KiwiCamping shows its category, nightly fee and whether it takes bookings, and the details stay readable on the track without signal. The booking itself stays on DOC's own system.",
    endTitle: "Every DOC hut and campsite, before you book.",
    shot: shots.doc,
  },
  costs: {
    eyebrow: "Cheaper nights",
    title: `${count.freeCampsites} free DOC campsites, and the listed fee for the others`,
    body: `KiwiCamping shows the fee DOC lists for its ${count.campsites} campsites, and ${count.freeDumps} of its ${count.dumps} dump stations cost nothing to use, so the cheap nights are easy to plan around.`,
    endTitle: "Plan the cheap nights first.",
    shot: shots.place,
  },
  roadtrip: {
    eyebrow: "Plan the drive",
    title: "Turn the stops into a trip",
    body: `Save campsites and huts as you read, put them in order, and KiwiCamping keeps the total distance, dates, notes and to-dos for each stop, with ${count.campsites} DOC campsites and ${count.dumps} dump stations to plan the nights around.`,
    endTitle: "Save the stops. Plan the whole trip.",
    shot: shots.trip,
  },
  holidayParks: {
    eyebrow: "Book it in the app",
    title: "Holiday parks you can book in the app, no pass needed",
    body: `BookIt holiday parks and tours are free to browse and book in KiwiCamping without the Premium pass, and they sit on the same map as ${count.campsites} DOC campsites for the nights you want power and a hot shower.`,
    endTitle: "Book the holiday park nights in the app.",
    shot: shots.lists,
  },
  comparison: {
    eyebrow: "Try it yourself",
    title: "KiwiCamping is free to download",
    body: `Open the map and see how it fits your trip. BookIt stays and tours are free, and the Premium pass adds ${count.campsites} DOC campsites, ${count.huts} huts and ${count.dumps} dump stations with their fees and booking status.`,
    endTitle: "See how it fits your trip.",
    shot: shots.map,
  },
};

const passLine = "Free to download. BookIt holiday parks and tours are free to browse and book; DOC campsites, huts, dump stations, the in-app guides and trip planning need the Premium pass.";
const iphoneLine = "KiwiCamping is an iPhone app. There is no Android version.";

/** Guides whose reader intent differs from their category's default. */
const slugVariants: Record<string, ContextCtaVariant> = {
  "doc-campsites-new-zealand-guide": "doc",
  "doc-huts-new-zealand-guide": "doc",
  "doc-campsite-rules": "doc",
  "doc-hut-rules-etiquette": "doc",
  "holiday-parks-new-zealand-guide": "holidayParks",
  "accommodation-costs-new-zealand-2026": "holidayParks",
  "where-to-camp-in-new-zealand": "map",
  "camping-wastewater-rubbish-new-zealand": "map",
  "two-week-camper-itinerary-new-zealand": "roadtrip",
};

const categoryVariants: Record<Article["category"], ContextCtaVariant> = {
  "Road trips": "roadtrip",
  "Camping guides": "map",
  "Rules & safety": "rules",
  "Trip planning": "roadtrip",
  "Costs & budget": "costs",
  "App guides": "map",
};

/** App comparisons (listicles) already carry a store button on the KiwiCamping entry, so they only get the end block. */
export function ctaVariantFor(item: Pick<Article, "slug" | "category" | "listicle">): ContextCtaVariant {
  if (item.listicle) return "comparison";
  return slugVariants[item.slug] ?? categoryVariants[item.category];
}

/** The inline call to action, placed after the second section of a guide. */
export function ContextCta({ variant }: { variant: ContextCtaVariant }) {
  const text = copy[variant];
  return <div className="context-cta" role="complementary" aria-label="KiwiCamping app" data-cta-variant={variant}>
    <div className="eyebrow">{text.eyebrow}</div>
    <h3>{text.title}</h3>
    <div className="context-cta-body">{text.body}</div>
    <div className="context-cta-pass">{passLine}</div>
    <div className="context-cta-actions">
      <a className="store-button" href={appStoreUrl({ placement: "inl" })} data-cta="inl" aria-label="Download KiwiCamping on the App Store">
        <span>Download on the App Store</span>
      </a>
      <span className="context-cta-iphone">{iphoneLine}</span>
    </div>
  </div>;
}

/**
 * The end-of-article call to action: the same promise, a real screenshot and the desktop QR code.
 * The outer element stays exactly `<div class="article-end-cta">`, which the similarity audit strips.
 */
export function ContextEndCta({ variant, placement }: { variant: ContextCtaVariant; placement: CtaPlacement }) {
  const text = copy[variant];
  return <div className="article-end-cta">
    <ScreenshotImage className="context-end-shot" src={text.shot.src} alt={text.shot.alt} sizes="140px" />
    <div className="context-end-copy" data-cta-variant={variant}>
      <p className="eyebrow">{text.eyebrow}</p>
      <h2>{text.endTitle}</h2>
      <p className="context-cta-pass">{passLine}</p>
      <p className="context-cta-iphone">{iphoneLine}</p>
    </div>
    <DownloadCard placement={placement} />
  </div>;
}
