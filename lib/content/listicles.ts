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
        "The trade-off against Rankers is curation. Rankers lists only community-approved overnight spots; WikiCamps lists far more, added and kept up to date by its users, so you check more of them yourself. It rated 4.5 from 137 on the New Zealand App Store and 3.0 from 1,042 on Google Play.",
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

  a({
    slug: "campermate-alternatives",
    listicle: true,
    title: "5 Best CamperMate Alternatives for New Zealand in 2026",
    description: "Unhappy with CamperMate's redesign or ads? KiwiCamping, Rankers, WikiCamps, thl Roadtrip and the NZMCA App compared for New Zealand trips. Checked October 2026.",
    category: "App guides",
    region: "New Zealand",
    places: ["DOC campsites", "Freedom camping", "Holiday parks", "NZMCA Parks", "Australia"],
    imageAlt: "DOC sign at the entrance to Waiohine Gorge in Tararua Forest Park",
    related: ["best-nz-camping-apps", "rankers-alternatives", "plan-trip-kiwicamping"],
    intro:
      "CamperMate has been a default download for campervan travellers in New Zealand and Australia for years, and it is still free, translated into 27 languages and able to download its maps for use without signal. The searches for an alternative have a recent cause: a redesign that several reviewers on the New Zealand App Store have disliked since late 2025, and ads in the Android version. We checked the apps worth switching to on 20 October 2026. We make KiwiCamping, so we have put it first. Here is why, and when another app suits you better.",
    sections: [
      s("CamperMate alternatives at a glance", [
        "For a New Zealand-only trip, the strongest pairing is Rankers for reviews and KiwiCamping for DOC campsites, huts and planning the route. If you need Australia too, thl Roadtrip and WikiCamps (which sells separate New Zealand and Australia apps) are the closest like-for-like swaps. Members of the New Zealand Motor Caravan Association should add the NZMCA App whatever else they use.",
        "Before switching, check whether the thing you dislike is the redesign or the job itself. CamperMate's booking, deals and two-country coverage are still genuinely useful, and no single alternative replaces all of them.",
      ], undefined, {
        caption: "Checked 20 October 2026 on the New Zealand App Store and each developer's site. Ratings are New Zealand App Store averages with the number of ratings.",
        head: ["App", "Switch to it for", "Price", "Ads", "NZ rating"],
        rows: [
          ["CamperMate", "Booking and deals, NZ and Australia (the baseline)", "Free", "On Android", "4.4 (606)"],
          ["KiwiCamping", "DOC campsites, huts and a dated route plan", "Free; Pass NZ$3.99 to NZ$12.99", "None", "3.8 (4)"],
          ["Rankers Camping NZ", "The most NZ App Store ratings here", "Free", "Not shown on Google Play", "4.7 (3,322)"],
          ["WikiCamps New Zealand", "The most NZ sites published, paid once", "NZ$7.99 upfront (iPhone)", "On Android", "4.5 (137)"],
          ["thl Roadtrip", "A simple nearby finder, NZ and Australia", "Free", "Not stated", "4.7 (122)"],
          ["NZMCA App", "NZMCA members and member parks", "Membership NZ$150 to join plus NZ$102 a year", "Not stated", "No ratings yet"],
        ],
      }),
      s("Why people are looking beyond CamperMate", [
        "Of the CamperMate reviews dated 2025 or 2026 among the 50 most recent on the New Zealand App Store, 12 of 16 gave one or two stars. Seven blamed the redesign, describing slow loading, wrong directions and sites that had disappeared, and two of those missed the LPG and self-contained filters. Four were about bookings and refunds. These are reviewers' accounts, not something we have tested.",
        "The other side is real too. CamperMate has more than a million downloads on Google Play, 4.0 stars from 12,568 ratings there, and a reviewer who says it shows campsites they could not find elsewhere. Its listing also describes maps and information you can download and keep without an expiry date.",
      ]),
      s("1. KiwiCamping: best for DOC campsites and planning the whole route", [
        "Where CamperMate leans towards bookable parks and deals, KiwiCamping is built on DOC's own records: 287 DOC campsites, 927 DOC huts and 1,453 DOC tracks in the app's August 2026 data, with DOC's fees, dog rules and booking requirements where DOC publishes them. There are no ads in the app.",
        "Filters can be combined, including fee, facilities and access features, which matters if you were one of the reviewers who lost filters in the CamperMate redesign. Places go into collections such as Want to Visit, then into a trip with ordered stops, dates, notes, to-dos and the route distance. Place details stay on the phone when signal drops, while map tiles, routing, weather and photos need a connection.",
        "The limits: only BookIt stays and tours are free; DOC campsites, huts, tracks and dump stations, collections, trips and guides need the KiwiCamping Pass, from NZ$3.99 to NZ$12.99 on the New Zealand App Store. It is New Zealand only, iPhone only with iOS 26 or later, and it had 4 New Zealand ratings (3.8) with no traveller reviews, so pair it with Rankers if reviews matter to you.",
      ], ["Switch for: DOC data and route planning", "No ads", "New Zealand and iPhone only"], undefined, true),
      s("2. Rankers Camping NZ: best for traveller reviews", [
        "Rankers has the most New Zealand App Store ratings of the apps compared here, 4.7 stars from 3,322, and says each of its more than 108,000 reviews is read and checked by a person on its team. It is free, and its listing says it only shows overnight spots the local community has approved.",
        "Campsite information is built in from the first install and detailed maps download over Wi-Fi. It covers New Zealand only, so it cannot replace CamperMate for the other half of a two-country trip.",
      ], ["Switch for: reviews and curated sites", "Free", "New Zealand only"]),
      s("3. WikiCamps New Zealand: best for coverage, paid once", [
        "WikiCamps sells WikiCamps New Zealand as its own app for NZ$7.99 on the App Store, separate from WikiCamps Australia. Its users have added more than 12,000 New Zealand sites, and it includes a trip planner that estimates fuel spend, plus an Offline Mode covering sites and trips.",
        "Coverage comes from users, so check anything legally important against the council or DOC. It rated 4.5 from 137 on the New Zealand App Store and 3.0 from 1,042 on Google Play.",
      ], ["Switch for: the most sites listed", "NZ$7.99 once on iPhone", "Separate NZ and Australia apps"]),
      s("4. thl Roadtrip: best like-for-like free swap for two countries", [
        "thl Roadtrip, from Tourism Holdings, shows campsites, holiday parks, petrol stations and dump stations near you in New Zealand and Australia, free. It rated 4.7 from 122 ratings on the New Zealand App Store.",
        "It is simpler than CamperMate, with a much smaller review base and no deals marketplace described in its listing. That simplicity is the point for travellers who found the redesign cluttered.",
      ], ["Switch for: a simple two-country finder", "Free", "Smaller review base"]),
      s("5. NZMCA App: best for members of the motor caravan association", [
        "The New Zealand Motor Caravan Association's app gives members its Travel Directory and the association's NZMCA Parks, which charge $5 per adult per night. The app is free, while membership costs $150 to join and $102 a year.",
        "It requires NZMCA membership, and it had no ratings yet on the New Zealand App Store (3.2 from 156 on Google Play). For a long trip in a certified self-contained motorhome, the member parks can pay for the membership.",
      ], ["Switch for: NZMCA member parks", "Membership NZ$150 plus NZ$102 a year", "Members only"]),
      s("When CamperMate is still the better choice", [
        "If the trip covers both countries, you book most nights in holiday parks and you like picking up deals as you go, CamperMate still does all three in one free app. Its downloadable maps and 27 languages are also a real help for visitors who are not reading in English.",
        "If the redesign is the problem rather than the app's purpose, it may be worth updating and trying the newest version before switching. Version 5.8 arrived on 16 October 2026.",
      ]),
      s("How we compared", [
        "On 20 October 2026 we read each app's New Zealand App Store listing, its developer's own site and its Google Play listing where there is one. Ratings and prices are as shown that day. Review themes come from the 50 most recent CamperMate reviews on the New Zealand App Store, of which 16 were dated 2025 or 2026, and are reported as counts.",
        "Features are described only as each developer describes them. Leaving a feature out is not a claim that an app lacks it.",
      ]),
    ],
    sources: [
      { label: "CamperMate on the App Store (NZ)", url: "https://apps.apple.com/nz/app/campermate-australia-nz/id465040067" },
      { label: "CamperMate on Google Play", url: "https://play.google.com/store/apps/details?id=nz.co.campermate" },
      { label: "KiwiCamping on the App Store (NZ)", url: "https://apps.apple.com/nz/app/camping-map-nz-kiwicamping/id6746952595" },
      { label: "Rankers Camping NZ on the App Store (NZ)", url: "https://apps.apple.com/nz/app/rankers-camping-nz/id582914766" },
      { label: "WikiCamps New Zealand on the App Store (NZ)", url: "https://apps.apple.com/nz/app/wikicamps-new-zealand/id582527125" },
      { label: "thl Roadtrip on the App Store (NZ)", url: "https://apps.apple.com/nz/app/id906468182" },
      { label: "NZMCA membership fees", url: "https://www.nzmca.org.nz/join-us" },
      { label: "DOC places to stay", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/" },
    ],
  }),

  a({
    slug: "road-trip-planner-apps-new-zealand",
    listicle: true,
    title: "Best Road Trip Planner Apps for New Zealand 2026: 6 Compared",
    description: "KiwiCamping, Wanderlog, Google Maps, WikiCamps, Apple Maps and Polarsteps compared for planning a New Zealand road trip: stops, days, offline use and price. Checked October 2026.",
    category: "App guides",
    region: "New Zealand",
    places: ["State highways", "Cook Strait", "DOC campsites", "Holiday parks", "Alpine passes"],
    imageAlt: "Tussock valley and State Highway 8 at Lindis Pass, Otago",
    related: ["plan-trip-kiwicamping", "new-zealand-driving-day-planner", "best-nz-camping-apps"],
    intro:
      "A New Zealand road trip is planned around three things a general map app handles badly: where you will sleep each night, how long the next leg really takes on winding two-lane roads, and what you can still read when the signal drops on the West Coast. We compared six planner apps on those questions using their current New Zealand App Store listings and their developers' own help pages, checked on 20 October 2026. We make KiwiCamping, so we have put it first. Here is why, and when another app suits you better.",
    sections: [
      s("The verdict in two sentences", [
        "For a camping or campervan trip, plan in KiwiCamping, because the places to sleep come from DOC's own data and the plan keeps dates, notes and to-dos on each stop; then let Google Maps or Apple Maps do the turn-by-turn driving. If you are planning with a group, mixing hotels and flights, or want a free planner with no stop limit, Wanderlog is the stronger choice.",
        "Whatever you plan in, check the NZ Transport Agency's Journeys site for closures on the morning you drive. Slips, snow and roadworks can close passes such as Arthur's Pass and the Haast, and NZTA is the official source on whether a state highway is open.",
      ], undefined, {
        caption: "Checked 20 October 2026 on the New Zealand App Store and each developer's help pages. Ratings are New Zealand App Store averages with the number of ratings.",
        head: ["App", "Best for", "Price", "Multi-stop routes", "Without signal", "NZ rating"],
        rows: [
          ["KiwiCamping", "Camping road trips by the night", "Free; Pass NZ$3.99 to NZ$12.99 for trips", "Ordered stops with dates and distance", "Place details yes, map tiles no", "3.8 (4)"],
          ["Wanderlog", "Group trips, budgets, hotels and flights", "Free; Pro from NZ$27.99 a month", "Unlimited stops, route optimisation", "Plans saved offline", "4.9 (707)"],
          ["Google Maps", "Turn-by-turn driving", "Free", "Up to 9 stops per route", "Downloaded areas", "4.7 (73,470)"],
          ["WikiCamps New Zealand", "Campsites plus fuel estimates", "NZ$7.99 upfront (iPhone)", "Trip planner with stops and notes", "Up to three planned trips", "4.5 (137)"],
          ["Apple Maps", "Driving on iPhone", "Free, built in", "Multi-stop driving", "Downloaded maps", "Built into iPhone"],
          ["Polarsteps", "Recording the trip as you go", "Free; Plus NZ$14.99 a month or NZ$49.99 a year", "Itinerary and route tracking", "Not stated", "4.9 (2,985)"],
        ],
      }),
      s("1. KiwiCamping: best for planning a camping trip night by night", [
        "KiwiCamping treats a trip as a list of nights, not just a line on a map. You save places into collections as you research, then order them into a trip with dates, a note on each stop for gate codes or arrival windows, a to-do list for fuel, water and groceries, the total route distance and how much of the trip you have visited. Trip dates can be added to your Calendar, and the itinerary can be shared as text.",
        "The places to sleep are the reason it comes first for this kind of trip. In its August 2026 data the app carried 287 DOC campsites, 927 DOC huts and 1,453 DOC tracks, with the fees, dog rules and booking requirements DOC publishes, where it publishes them. Those details stay on the phone, so you can still compare tonight's options with no reception; map tiles, routing, weather and photos need signal.",
        "The limits: collections, trips and the DOC places all need the KiwiCamping Pass, listed from NZ$3.99 to NZ$12.99 on the New Zealand App Store; only BookIt stays and tours are free. It is iPhone only with iOS 26 or later, it is for New Zealand alone, it does not optimise the order of stops for you, and it had 4 New Zealand ratings (3.8).",
      ], ["Best for: nights, not just driving", "Pass needed for collections and trips", "Hand turn-by-turn to a maps app"], undefined, true),
      s("2. Wanderlog: best for planning with other people", [
        "Wanderlog is a general travel planner with a 4.9 rating from 707 New Zealand ratings. Its listing describes an itinerary on a map in visiting order, drag-to-reorder, times, notes and links, unlimited road-trip stops for free, route optimisation with travel time and distance per day, real-time collaboration, budgeting and bill splitting, and plans saved for use offline.",
        "Pro costs NZ$27.99 a month on the New Zealand App Store, with annual options listed too, and adds export to Google Maps among other features. It has no dedicated New Zealand camping layer, so check DOC campsite fees, dog rules and booking details on DOC's site.",
      ], ["Best for: groups, budgets, mixed trips", "Unlimited stops free", "Check DOC details on DOC's site"]),
      s("3. Google Maps: best for the drive itself", [
        "Google Maps is the default for turn-by-turn navigation, rated 4.7 from 73,470 New Zealand ratings. Its directions take up to 9 stops including the destination, which covers a day or two of driving rather than a fortnight, and it has no days, notes or budget in the route itself.",
        "Download offline areas before you leave a main centre. Google's help pages say offline driving directions only work when the whole route is inside a downloaded area, and offline mode has no traffic or alternative routes, so download generously along the corridor you are driving.",
      ], ["Best for: navigation", "9 stops per route", "Download areas along the whole route"]),
      s("4. WikiCamps New Zealand: best for campsites with a fuel estimate", [
        "WikiCamps New Zealand costs NZ$7.99 once on the App Store and combines its user-built database of more than 12,000 New Zealand sites with a trip planner. Its site describes adding stops, notes, custom pins and routes, an estimate of fuel spend, and offline access to up to three planned trips.",
        "It is the closest like-for-like alternative to KiwiCamping for a camping trip. The difference is the data: WikiCamps' listings are added and kept up to date by its community of users, while KiwiCamping's DOC places come from DOC's published data. It rated 4.5 from 137 on the New Zealand App Store.",
      ], ["Best for: campsite planning, paid once", "Fuel spend estimate", "Offline for up to three trips"]),
      s("5. Apple Maps: best if you want nothing extra on an iPhone", [
        "Apple Maps comes with every iPhone, supports multi-stop driving routes and can download maps for use without signal. For a traveller who only needs the drive from one stop to the next, it does the job without another download.",
        "Like Google Maps, it is a navigator rather than a trip planner: a multi-stop drive has no nights, dates or to-dos, notes go on saved places rather than on the drive, and it is not available on Android.",
      ], ["Best for: simple iPhone navigation", "Download maps before remote legs", "No trip dates or to-dos"]),
      s("6. Polarsteps: best for recording the trip", [
        "Polarsteps is mainly a travel journal that tracks your route automatically and builds a map of where you have been, with an itinerary planner in its listing. It rated 4.9 from 2,985 New Zealand ratings and offers Plus at NZ$14.99 a month or NZ$49.99 a year.",
        "It is a good companion for sharing the trip with family at home. It is not built around campsites or driving times, so pair it with a planner and a navigator.",
      ], ["Best for: a shareable record of the trip", "Plus is optional", "Pair it with a planner"]),
      s("Check NZTA Journeys before every long drive", [
        "The NZ Transport Agency's Journeys site shows state highway closures, roadworks, traffic cameras and holiday traffic predictions, and a free My Journeys account emails you about the routes you save. It is a website, not an app, and it is the authority on whether the road is open.",
        "If your route crosses Cook Strait, book the ferry with Interislander or Bluebridge first and build the days around the sailing, because the ferry is the one leg you cannot move by an hour.",
      ], ["NZTA Journeys for closures", "Book the Cook Strait ferry first", "Recheck on the morning you drive"]),
      s("How we chose and checked", [
        "We compared apps New Zealand travellers use to plan a driving trip, on 20 October 2026, from each New Zealand App Store listing and the developers' own help pages. Roadtrippers is left out because its New Zealand listing says it is designed for the United States and Canada, and TripIt because it organises bookings rather than routes.",
        "Ratings, prices and stop limits are as listed that day. We describe features only as their developers do, so a feature not mentioned here is not a claim that an app lacks it.",
      ]),
    ],
    sources: [
      { label: "KiwiCamping on the App Store (NZ)", url: "https://apps.apple.com/nz/app/camping-map-nz-kiwicamping/id6746952595" },
      { label: "Wanderlog on the App Store (NZ)", url: "https://apps.apple.com/nz/app/wanderlog-travel-planner/id1476732439" },
      { label: "Google Maps: add multiple destinations", url: "https://support.google.com/maps/answer/144339" },
      { label: "Google Maps: download areas for offline use", url: "https://support.google.com/maps/answer/6291838" },
      { label: "WikiCamps New Zealand", url: "https://wikicamps.co.nz/" },
      { label: "Polarsteps on the App Store (NZ)", url: "https://apps.apple.com/nz/app/polarsteps/id947925763" },
      { label: "NZTA Journeys: road conditions and closures", url: "https://www.journeys.nzta.govt.nz/" },
      { label: "Interislander", url: "https://www.interislander.co.nz/" },
      { label: "Bluebridge", url: "https://www.bluebridge.co.nz/" },
    ],
  }),
];
