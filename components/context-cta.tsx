import type { CtaPlacement } from "@/lib/app-store";
import type { Article } from "@/lib/article-model";
import { StoreWithQr } from "./guide-cta";
import { ScreenshotImage } from "./site-image";

/**
 * The end-of-article call to action on English guides, matched to what the reader came for
 * (docs/growth/PLAN.md, "Conversion"): a real screenshot and the store button, with the QR code on hover.
 * Guides carry no download box inside the text; the intro sentence (components/intro-cta.tsx) and the
 * side card (components/guide-cta.tsx) do that job. English only: translated guides end with GuideEndCta.
 */
export type ContextCtaVariant = "map" | "rules" | "doc" | "costs" | "roadtrip" | "holidayParks" | "comparison";

type Copy = { eyebrow: string; endTitle: string; shot: { src: string; alt: string } };

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
    endTitle: "Find tonight's camp on the map.",
    shot: shots.map,
  },
  rules: {
    eyebrow: "Find a legal night",
    endTitle: "Know where you can stay tonight.",
    shot: shots.place,
  },
  doc: {
    eyebrow: "DOC places in your pocket",
    endTitle: "Every DOC hut and campsite, before you book.",
    shot: shots.doc,
  },
  costs: {
    eyebrow: "Cheaper nights",
    endTitle: "Plan the cheap nights first.",
    shot: shots.place,
  },
  roadtrip: {
    eyebrow: "Plan the drive",
    endTitle: "Save the stops. Plan the whole trip.",
    shot: shots.trip,
  },
  holidayParks: {
    eyebrow: "Book it in the app",
    endTitle: "Book the holiday park nights in the app.",
    shot: shots.lists,
  },
  comparison: {
    eyebrow: "Try it yourself",
    endTitle: "See how it fits your trip.",
    shot: shots.map,
  },
};


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
    </div>
    <StoreWithQr locale="en" placement={placement} label="Download app" reuse />
  </div>;
}
