import { makeArticle as a, type Article, type ArticleSection, type ArticleTable } from "@/lib/article-model";

const s = (heading: string, body: string[], tips?: string[], table?: ArticleTable, cta?: boolean): ArticleSection => ({ heading, body, tips, ...(table && { table }), ...(cta && { cta }) });

/**
 * "Best X" and "alternatives to Y" comparison guides. Every claim about another app is taken from its
 * current New Zealand App Store listing or its developer's own site on the date in the table caption,
 * and each page says plainly that we make KiwiCamping.
 */
export const listicleArticles: Article[] = [
  a({
    slug: "rankers-alternatives",
    listicle: true,
    title: "5 Best Rankers Alternatives for New Zealand Camping in 2026",
    description: "Looking past Rankers Camping NZ? KiwiCamping, CamperMate, WikiCamps, thl Roadtrip and Campable compared on price, offline use and the jobs each does better. Checked October 2026.",
    category: "App guides",
    region: "New Zealand",
    places: ["DOC huts", "DOC tracks", "Holiday parks", "Private land stays", "Australia"],
    imageAlt: "Grassy DOC campsite under flowering pōhutukawa at Medlands Beach, Great Barrier Island",
    related: ["best-nz-camping-apps", "campermate-alternatives", "kiwicamping-offline-data-guide"],
    intro:
      "Rankers Camping NZ is the most-rated camping app on the New Zealand App Store, free, and well liked: 4.7 stars from 3,322 ratings on the New Zealand App Store when we checked on 20 October 2026. People rarely leave it because it is bad. They look elsewhere when the trip asks for something Rankers is not built around, such as planning the route day by day, DOC huts and tracks for the walking days, a night on a farm, or a crossing to Australia. We make KiwiCamping, so we have put it first. Here is why, and when another app suits you better.",
    sections: [
      s("Rankers alternatives at a glance", [
        "If you want one recommendation: keep Rankers for its reviews and add KiwiCamping when the trip becomes a plan with dates, DOC huts or tracks. Choose CamperMate instead if the trip continues to Australia, WikiCamps New Zealand if raw coverage matters more than curation, thl Roadtrip for a simple free view of what is near you, and Campable for booked stays on private land.",
        "None of these replaces the council bylaw or the sign at the site entrance. Rankers says it only lists places the local community has approved for overnight stays, which is a real strength, and an alternative that lists more places is not automatically more useful if you then have to check each one yourself.",
      ], undefined, {
        caption: "Checked 20 October 2026 on the New Zealand App Store and each developer's site. Ratings are New Zealand App Store averages with the number of ratings.",
        head: ["App", "Choose it over Rankers when", "Price", "Platforms", "NZ rating"],
        rows: [
          ["Rankers Camping NZ", "You want reviews (the baseline)", "Free", "iPhone, iPad, Android, web", "4.7 (3,322)"],
          ["KiwiCamping", "You are planning a dated route with DOC huts and tracks", "Free; Pass NZ$3.99 to NZ$12.99", "iPhone (iOS 26+)", "3.8 (4)"],
          ["CamperMate", "Your trip continues to Australia", "Free; ads on Android", "iPhone, iPad, Android, web", "4.4 (606)"],
          ["WikiCamps New Zealand", "You want the most sites listed", "NZ$7.99 upfront (iPhone)", "iPhone, iPad, Android", "4.5 (137)"],
          ["thl Roadtrip", "You want a simple free nearby view", "Free", "iPhone, Android", "4.7 (122)"],
          ["Campable", "You want to book a night on private land", "Free app; hosts set prices", "iPhone, Android", "4.5 (13)"],
        ],
      }),
      s("Why travellers look past Rankers", [
        "We read the 50 most recent Rankers reviews on the New Zealand App Store. Forty-two gave four or five stars, and the praise is for accuracy, the price and the depth of traveller comments. The complaints were few and specific: three reviewers found sites missing or out of date, three said the app failed to open or load, two wanted to combine filters rather than search one category at a time, two objected to a fee on bookings made through the app, and one could not find reviews after an update.",
        "Rankers itself is free and earns from bookings, activity deals and campervan-hire referrals; it says the booking and activity commissions cost you nothing extra. So the honest reason to add or switch apps is usually a different job, not a fault: route planning, walking, private land or a second country.",
      ]),
      s("1. KiwiCamping: best for turning saved places into a dated route", [
        "KiwiCamping is built on the Department of Conservation's own data. In its August 2026 data the app held 287 DOC campsites, 927 DOC huts and 1,453 DOC tracks, with the fees, dog rules and booking requirements DOC lists, where it lists them. That makes it strongest exactly where a review-led app is thinnest: the hut you walk to on day four and the track that starts from tonight's campsite.",
        "Filters combine, so a single search can ask for a type of place, a fee, facilities and access together. Saved places then become a trip with ordered stops, dates, notes, to-dos and the total distance, and place details stay readable on the phone when reception drops. Map tiles, routing, weather and photos still need signal.",
        "What it costs and where it falls short: it is free to download, but the free version opens only BookIt stays and tours; DOC campsites, huts, tracks and dump stations, collections, trips and guides need the KiwiCamping Pass, listed from NZ$3.99 to NZ$12.99 on the New Zealand App Store. It is iPhone only and needs iOS 26 or later, it had 4 New Zealand ratings (3.8), and it has no traveller reviews. That is why we suggest it alongside Rankers rather than instead of it.",
      ], ["Choose it for: DOC huts, tracks and a dated plan", "Keep Rankers for reviews", "iPhone only, iOS 26 or later"], undefined, true),
      s("2. CamperMate: best if the trip crosses the Tasman", [
        "CamperMate covers New Zealand and Australia in one free app, in 27 languages, with a filter for free and paid places, traveller reviews and photos, campground booking with availability, local deals and links to vehicle hire. Its listing says maps and place information download for use without signal, and version 5.8 added a satellite view in mid-October 2026.",
        "It rated 4.4 from 606 New Zealand ratings and 4.0 from 12,568 on Google Play. Recent reviews are mixed: several from late 2025 and 2026 dislike a redesign of the app, and the Android version shows ads. If you only travel in New Zealand and value reviews most, Rankers remains the stronger choice of the two.",
      ], ["Choose it for: one app for NZ and Australia", "Free; ads on Android", "Recent reviews are mixed"]),
      s("3. WikiCamps New Zealand: best for the most sites listed", [
        "WikiCamps New Zealand describes more than 12,000 New Zealand sites contributed by its users, with reviews, photos, a trip planner that estimates fuel spend and an Offline Mode for sites and trips. It costs NZ$7.99 once on the App Store, with no subscription.",
        "The trade-off against Rankers is curation. Rankers lists only community-approved overnight spots; WikiCamps lists far more, and accuracy varies between entries. It rated 4.5 from 137 on the New Zealand App Store and 3.0 from 1,042 on Google Play.",
      ], ["Choose it for: maximum coverage, paid once", "NZ$7.99 upfront on iPhone", "Check user-added sites"]),
      s("4. thl Roadtrip: best for a simple, free view of what is nearby", [
        "thl Roadtrip is a free app from Tourism Holdings that uses your location to show nearby campsites, holiday parks, petrol stations and dump stations in New Zealand and Australia. It rated 4.7 from 122 ratings on the New Zealand App Store.",
        "It suits a traveller who wants to glance at what is around them at the end of a driving day rather than research sites in depth. It has a much smaller review base than Rankers, so it works best as a quick finder alongside a richer app.",
      ], ["Choose it for: quick nearby searches", "Free", "Covers NZ and Australia"]),
      s("5. Campable: best for a booked night on private land", [
        "Campable books campervans and motorhomes onto farms, vineyards, orchards and sports clubs. Hosts set the nightly price, you pay in the app and you receive the host's phone number once the booking is confirmed. It rated 4.5 from 13 New Zealand ratings and is on iPhone and Android.",
        "It is narrower than Rankers by design: hundreds of sites rather than a national directory. Use it for the nights you want guaranteed and quiet, and something broader for the rest.",
      ], ["Choose it for: guaranteed private-land nights", "Hosts set the price", "iPhone and Android"]),
      s("When Rankers is still the right app", [
        "If your trip is mostly freedom camping and holiday parks and you decide by what the last few travellers said, Rankers is hard to beat and costs nothing. Its campsite information is built into the app from the first install, and its detailed maps download over Wi-Fi for use beyond reception in the iPhone and Android apps.",
        "It is also on Android and the web, which KiwiCamping is not. If two people share planning on different phones, that alone can decide it.",
      ]),
      s("How we compared", [
        "We read each app's New Zealand App Store listing and its developer's own site on 20 October 2026, and the Google Play listing where one exists. Ratings and prices are as listed that day. The review themes come from the 50 most recent Rankers reviews on the New Zealand App Store and are reported as counts, not as our own judgement.",
        "We have only described features the developers describe. If a feature is not mentioned here, that is not a claim that the app lacks it.",
      ]),
    ],
    sources: [
      { label: "Rankers Camping NZ on the App Store (NZ)", url: "https://apps.apple.com/nz/app/rankers-camping-nz/id582914766" },
      { label: "Rankers Camping NZ app page", url: "https://www.rankers.co.nz/apps/camping_nz" },
      { label: "KiwiCamping on the App Store (NZ)", url: "https://apps.apple.com/nz/app/camping-map-nz-kiwicamping/id6746952595" },
      { label: "CamperMate on the App Store (NZ)", url: "https://apps.apple.com/nz/app/campermate-australia-nz/id465040067" },
      { label: "WikiCamps New Zealand on the App Store (NZ)", url: "https://apps.apple.com/nz/app/wikicamps-new-zealand/id582527125" },
      { label: "thl Roadtrip on the App Store (NZ)", url: "https://apps.apple.com/nz/app/id906468182" },
      { label: "Campable on the App Store (NZ)", url: "https://apps.apple.com/nz/app/campable/id1209349485" },
      { label: "DOC places to stay", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/" },
    ],
  }),
];
