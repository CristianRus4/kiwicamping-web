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
    publishAt: "2026-10-22",
    title: "5 Best Rankers Alternatives for New Zealand Camping in 2026",
    description: "Looking past Rankers Camping NZ? KiwiCamping, CamperMate, WikiCamps, thl Roadtrip and Campable compared on price, offline use and the jobs each does better. Checked October 2026.",
    category: "App guides",
    region: "New Zealand",
    places: ["DOC huts", "DOC tracks", "Holiday parks", "Private land stays", "Australia"],
    imageAlt: "Grassy DOC campsite under flowering pōhutukawa at Medlands Beach, Great Barrier Island",
    related: ["best-nz-camping-apps", "campermate-alternatives", "doc-huts-new-zealand-guide"],
    intro:
      "Rankers Camping NZ is the most-rated camping app on the New Zealand App Store, free, and well liked: 4.7 stars from 3,322 ratings on the New Zealand App Store when we checked on 20 October 2026. People rarely leave it because it is bad. They look elsewhere when the trip asks for something Rankers is not built around, such as planning the route day by day, DOC huts and tracks for the walking days, a night on a farm, or a crossing to Australia. Full disclosure: KiwiCamping is our own app, and that is why it heads this list; each entry below says what it does better than Rankers and when you should choose it instead.",
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
          ["CamperMate", "Your trip continues to Australia", "Free; contains ads", "iPhone, iPad, Android, web", "4.4 (606)"],
          ["WikiCamps New Zealand", "You want the most sites listed", "NZ$7.99 upfront (iPhone)", "iPhone, iPad, Android", "4.5 (137)"],
          ["thl Roadtrip", "You want a simple free nearby view", "Free", "iPhone, Android", "4.6 (122)"],
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
        "It rated 4.4 from 606 New Zealand ratings and 4.0 from 12,568 on Google Play. Recent reviews are mixed: several from late 2025 and 2026 dislike a redesign of the app, and the app carries ads. If you only travel in New Zealand and value reviews most, Rankers remains the stronger choice of the two.",
      ], ["Choose it for: one app for NZ and Australia", "Free; contains ads", "Recent reviews are mixed"]),
      s("3. WikiCamps New Zealand: best for the most sites listed", [
        "WikiCamps New Zealand describes more than 12,000 New Zealand sites contributed by its users, with reviews, photos, a trip planner that estimates fuel spend and an Offline Mode for sites and trips. It costs NZ$7.99 once on the App Store, with no subscription.",
        "The trade-off against Rankers is curation. Rankers lists only community-approved overnight spots; WikiCamps lists far more, added and kept up to date by its users, so you check more of them yourself. It rated 4.5 from 137 on the New Zealand App Store and 3.0 from 1,042 on Google Play.",
      ], ["Choose it for: maximum coverage, paid once", "NZ$7.99 upfront on iPhone", "Check user-added sites"]),
      s("4. thl Roadtrip: best for a simple, free view of what is nearby", [
        "thl Roadtrip is a free app from Tourism Holdings that uses your location to show nearby campsites, holiday parks, petrol stations and dump stations in New Zealand and Australia. It rated 4.6 from 122 ratings on the New Zealand App Store.",
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
      { label: "Rankers Camping NZ app", url: "https://www.rankers.co.nz/apps/camping_nz" },
      { label: "CamperMate", url: "https://campermate.com/" },
      { label: "WikiCamps New Zealand", url: "https://wikicamps.co.nz/" },
      { label: "thl Roadtrip listing data (Apple, NZ storefront)", url: "https://itunes.apple.com/lookup?id=906468182&country=nz" },
      { label: "Campable", url: "https://www.campable.com/" },
      { label: "DOC places to stay", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/" },
    ],
  }),

  a({
    slug: "campermate-alternatives",
    listicle: true,
    publishAt: "2026-10-24",
    title: "5 Best CamperMate Alternatives for New Zealand in 2026",
    description: "Unhappy with CamperMate's redesign or ads? KiwiCamping, Rankers, WikiCamps, thl Roadtrip and the NZMCA App compared for New Zealand trips. Checked October 2026.",
    category: "App guides",
    region: "New Zealand",
    places: ["DOC campsites", "Freedom camping", "Holiday parks", "NZMCA Parks", "Australia"],
    imageAlt: "A small tent pitched beside Iron Lake in Kahurangi National Park",
    related: ["best-nz-camping-apps", "rankers-alternatives", "freedom-camping-rules-new-zealand"],
    intro:
      "CamperMate has been a default download for campervan travellers in New Zealand and Australia for years, and it is still free, translated into 27 languages and able to download its maps for use without signal. The searches for an alternative have a recent cause: a redesign that several reviewers on the New Zealand App Store have disliked since late 2025, and the ads in the app. We checked the apps worth switching to on 20 October 2026. KiwiCamping is ours, so read its place at the top with that in mind: we set out the reasons, and the trips where one of the others is the better swap.",
    sections: [
      s("CamperMate alternatives at a glance", [
        "For a New Zealand-only trip, the strongest pairing is Rankers for reviews and KiwiCamping for DOC campsites, huts and planning the route. If you need Australia too, thl Roadtrip and WikiCamps (which sells separate New Zealand and Australia apps) are the closest like-for-like swaps. Members of the New Zealand Motor Caravan Association should add the NZMCA App whatever else they use.",
        "Before switching, check whether the thing you dislike is the redesign or the job itself. CamperMate's booking, deals and two-country coverage are still genuinely useful, and no single alternative replaces all of them.",
      ], undefined, {
        caption: "Checked 20 October 2026 on the New Zealand App Store and each developer's site. Ratings are New Zealand App Store averages with the number of ratings.",
        head: ["App", "Switch to it for", "Price", "Ads", "NZ rating"],
        rows: [
          ["CamperMate", "Booking and deals, NZ and Australia (the baseline)", "Free", "Yes", "4.4 (606)"],
          ["KiwiCamping", "DOC campsites, huts and a dated route plan", "Free; Pass NZ$3.99 to NZ$12.99", "None", "3.8 (4)"],
          ["Rankers Camping NZ", "The most NZ App Store ratings here", "Free", "Not shown on Google Play", "4.7 (3,322)"],
          ["WikiCamps New Zealand", "The most NZ sites published, paid once", "NZ$7.99 upfront (iPhone)", "On Android", "4.5 (137)"],
          ["thl Roadtrip", "A simple nearby finder, NZ and Australia", "Free", "Not stated", "4.6 (122)"],
          ["NZMCA App", "NZMCA members and member parks", "Membership NZ$150 to join plus NZ$102 a year", "Not stated", "No ratings yet"],
        ],
      }),
      s("Why people are looking beyond CamperMate", [
        "Of the CamperMate reviews dated 2025 or 2026 among the 50 most recent on the New Zealand App Store, 12 of 16 gave one or two stars. Seven blamed the redesign, describing slow loading, wrong directions and sites that had disappeared, and two of those missed the LPG and self-contained filters. Four were about bookings and refunds. These are reviewers' accounts, not something we have tested.",
        "The other side is real too. CamperMate has more than a million downloads on Google Play, 4.0 stars from 12,568 ratings there, and a reviewer who says it shows campsites they could not find elsewhere. Its listing also describes maps and information you can download and keep without an expiry date.",
      ]),
      s("1. KiwiCamping: best for DOC campsites and planning the whole route", [
        "Where CamperMate leans towards bookable parks and deals, KiwiCamping is built on DOC's own records: 287 DOC campsites, 927 DOC huts and 1,453 DOC tracks in the app's August 2026 data, with DOC's fees, dog rules and booking requirements where DOC publishes them. There are no ads in the app.",
        "Filters can be combined, including fee, facilities and access features, which matters if you were one of the reviewers who lost filters in the CamperMate redesign. Places can be saved to collections such as Want to Visit or added straight to a trip with ordered stops, dates, notes, to-dos and the route distance. Place details stay on the phone when signal drops, while map tiles, routing, weather and photos need a connection.",
        "The limits: only BookIt stays and tours are free; DOC campsites, huts, tracks and dump stations, collections, trips and guides need the KiwiCamping Pass, from NZ$3.99 to NZ$12.99 on the New Zealand App Store. It is New Zealand only, iPhone only with iOS 26 or later, and it had 4 New Zealand ratings (3.8) with no traveller reviews, so pair it with Rankers if reviews matter to you.",
      ], ["Switch for: DOC data and route planning", "No ads", "New Zealand and iPhone only"], undefined, true),
      s("2. Rankers Camping NZ: best for traveller reviews", [
        "Rankers has the most New Zealand App Store ratings of the apps compared here, 4.7 stars from 3,322, and says each of its more than 108,000 reviews is read and checked by a person on its team. It is free, and its listing says it only shows overnight spots the local community has approved.",
        "Campsite information is built in from the first install and detailed maps download over Wi-Fi. It covers New Zealand only, so it cannot replace CamperMate for the other half of a two-country trip.",
      ], ["Switch for: reviews and curated sites", "Free", "New Zealand only"]),
      s("3. WikiCamps New Zealand: best for coverage, paid once", [
        "WikiCamps sells WikiCamps New Zealand as its own app for NZ$7.99 on the App Store, separate from WikiCamps Australia. Its users have added more than 12,000 New Zealand sites, and it includes a trip planner that estimates fuel spend, plus an Offline Mode covering sites and trips.",
        "Coverage comes from users, so check anything legally important against the council or DOC. On the New Zealand App Store it averaged 4.5 from 137 ratings, against 3.0 from 1,042 on Google Play.",
      ], ["Switch for: the most sites listed", "NZ$7.99 once on iPhone", "Separate NZ and Australia apps"]),
      s("4. thl Roadtrip: best like-for-like free swap for two countries", [
        "thl Roadtrip, from Tourism Holdings, shows campsites, holiday parks, petrol stations and dump stations near you in New Zealand and Australia, free. Its New Zealand App Store average was 4.6 across 122 ratings.",
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
      { label: "CamperMate", url: "https://campermate.com/" },
      { label: "CamperMate on Google Play", url: "https://play.google.com/store/apps/details?id=nz.co.campermate" },
      { label: "Rankers Camping NZ app", url: "https://www.rankers.co.nz/apps/camping_nz" },
      { label: "WikiCamps New Zealand", url: "https://wikicamps.co.nz/" },
      { label: "thl Roadtrip listing data (Apple, NZ storefront)", url: "https://itunes.apple.com/lookup?id=906468182&country=nz" },
      { label: "NZMCA membership fees", url: "https://www.nzmca.org.nz/join-us" },
      { label: "DOC places to stay", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/" },
    ],
  }),

  a({
    slug: "road-trip-planner-apps-new-zealand",
    listicle: true,
    publishAt: "2026-10-28",
    title: "Best Road Trip Planner Apps for New Zealand 2026: 6 Compared",
    description: "KiwiCamping, Wanderlog, Google Maps, WikiCamps, Apple Maps and Polarsteps compared for planning a New Zealand road trip: stops, days, offline use and price. Checked October 2026.",
    category: "App guides",
    region: "New Zealand",
    places: ["State highways", "Cook Strait", "DOC campsites", "Holiday parks", "Alpine passes"],
    imageAlt: "Tussock valley and State Highway 8 at Lindis Pass, Otago",
    related: ["plan-trip-kiwicamping", "new-zealand-driving-day-planner", "best-nz-camping-apps"],
    intro:
      "A New Zealand road trip is planned around three things a general map app handles badly: where you will sleep each night, how long the next leg really takes on winding two-lane roads, and what you can still read when the signal drops on the West Coast. We compared six planner apps on those questions using their current New Zealand App Store listings and their developers' own help pages, checked on 20 October 2026. Because we build KiwiCamping, it is listed first; the reasons are specific to camping trips, and for other kinds of trip we say plainly which planner to use instead.",
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
        "KiwiCamping treats a trip as a list of nights, not just a line on a map. You save places into collections as you research and add the ones you choose to a trip, ordered, with dates, a note on each stop for gate codes or arrival windows, a to-do list for fuel, water and groceries, the total route distance and how much of the trip you have visited. Trip dates can be added to your Calendar, and the itinerary can be shared as text.",
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
      { label: "Wanderlog", url: "https://wanderlog.com/" },
      { label: "Google Maps: add multiple destinations", url: "https://support.google.com/maps/answer/144339" },
      { label: "Google Maps: download areas for offline use", url: "https://support.google.com/maps/answer/6291838" },
      { label: "WikiCamps New Zealand", url: "https://wikicamps.co.nz/" },
      { label: "Polarsteps", url: "https://www.polarsteps.com/" },
      { label: "NZTA Journeys: road conditions and closures", url: "https://www.journeys.nzta.govt.nz/" },
      { label: "Interislander", url: "https://www.interislander.co.nz/" },
      { label: "Bluebridge", url: "https://www.bluebridge.co.nz/" },
    ],
  }),

  a({
    slug: "free-camping-apps-new-zealand",
    listicle: true,
    publishAt: "2026-10-26",
    title: "Best Free Camping Apps for New Zealand 2026: 5 Compared",
    description: "Rankers, CamperMate, WikiCamps, KiwiCamping and the NZMCA App compared for finding free and freedom camping in New Zealand, with the 2026 self-contained rules. Checked October 2026.",
    category: "App guides",
    region: "New Zealand",
    places: ["Freedom camping areas", "Free DOC campsites", "Council reserves", "NZMCA Parks"],
    imageAlt: "Campervans parked among trees at the lakeside Lake Poaka campsite near Twizel",
    related: ["freedom-camping-rules-new-zealand", "self-contained-campervan-green-warrant", "best-nz-camping-apps"],
    intro:
      "Free camping in New Zealand comes in two forms: freedom camping, where a council or DOC allows you to stay the night somewhere that is not a campground, and campsites that charge nothing, most of them basic DOC sites. An app can point you to both, but none of them decides whether you may stay; the council bylaw, DOC and the sign at the site do. We compared the five apps that are most useful for finding free nights, checked on 20 October 2026. We make KiwiCamping. It is not first on this list, because its free DOC campsites sit behind its paid Pass. Here is where it still helps.",
    sections: [
      s("Which app to use for free nights", [
        "Rankers is the best place to start: it is free, the camping spots it shows are only ones where the local community has officially said yes to overnight stays, and its reviews tell you whether a free site was worth it. CamperMate adds a free or paid filter and two-country coverage, and WikiCamps New Zealand has the biggest published count of New Zealand sites, with a filter for free campgrounds, for a one-off NZ$7.99.",
        "KiwiCamping is the one to add if you want DOC's own record of which DOC campsites charge nothing. NZMCA members get a different deal again: the association's own parks for $5 per adult a night, which is not free but is close.",
      ], undefined, {
        caption: "Checked 20 October 2026 on the New Zealand App Store and each developer's site. Ratings are New Zealand App Store averages with the number of ratings.",
        head: ["App", "How it shows free nights", "App price", "NZ rating"],
        rows: [
          ["Rankers Camping NZ", "Community-approved free and freedom spots, with reviews", "Free", "4.7 (3,322)"],
          ["CamperMate", "Free or paid filter; freedom spots beside campsites", "Free; contains ads", "4.4 (606)"],
          ["WikiCamps New Zealand", "Free campgrounds filter on user-added sites", "NZ$7.99 upfront (iPhone)", "4.5 (137)"],
          ["KiwiCamping", "DOC campsites DOC lists with no fee", "Free; Pass NZ$3.99 to NZ$12.99 needed for DOC places", "3.8 (4)"],
          ["NZMCA App", "Member parks at NZ$5 per adult a night", "Free app; membership NZ$150 plus NZ$102 a year", "No ratings yet"],
        ],
      }),
      s("The 2026 rule that matters most: green warrants", [
        "On council land, the law lets a vehicle freedom camp only if it is certified self-contained, unless a council bylaw allows other vehicles at a site, and the meaning of certified changed this year. The transition from the old blue sticker to the regulated green warrant ended on 7 June 2026, and blue stickers are no longer valid. A green warrant requires a toilet fixed in the vehicle, so a portable toilet no longer qualifies.",
        "On conservation land DOC sets its own rules: freedom camping is not allowed in DOC scenic and recreation reserves unless DOC provides a campsite, some areas are for self-contained vehicles only or limit the number of nights, and some ban it outright. Without a green warrant, you can stay in a vehicle on council land only where a bylaw allows it, and on DOC land outside the reserves and areas DOC prohibits or restricts. Free DOC campsites are the simplest option.",
      ], ["Blue stickers stopped counting on 7 June 2026", "Green warrants need a fixed toilet", "DOC and each council set their own limits"]),
      s("1. Rankers Camping NZ: best overall for free and freedom spots", [
        "Rankers says the camping spots it shows are only ones where the local community has officially said yes to overnight stays, which is the right starting filter for freedom camping. Its listing describes a filter for top-ranked holiday parks, DOC and free sites, and more than 108,000 reviews, each read and checked by a person on its team. The app is free, with 4.7 stars from 3,322 New Zealand App Store ratings.",
        "Whatever the app shows, check the self-contained requirement on the council's bylaw or the site sign before you stay. Campsite information is built into the app, and detailed maps download over Wi-Fi for use beyond reception.",
      ], ["Best for: free spots with reviews", "Free", "Confirm self-contained rules locally"]),
      s("2. CamperMate: best for free and paid sites side by side", [
        "CamperMate shows freedom camping spots alongside campsites and lets you filter by free or paid, across New Zealand and Australia. Its listing does not mention a self-contained filter, and one reviewer in January 2026 said the option seemed to have gone after the late-2025 redesign, so read each place's description for its self-contained requirement.",
        "It is free, with ads, and rated 4.4 from 606 New Zealand App Store ratings. Its maps and place information download for use without signal.",
      ], ["Best for: comparing free and paid nearby", "Free; contains ads", "Read each place for self-contained rules"]),
      s("3. WikiCamps New Zealand: best for the widest choice of sites", [
        "WikiCamps' site lists filters for free campgrounds, bookable sites, pet-friendly sites, water and dump points, and its users have added more than 12,000 New Zealand sites. It costs NZ$7.99 once on the App Store and rated 4.5 from 137 New Zealand ratings.",
        "Because its users add the sites, a free spot in WikiCamps is a traveller's report rather than a council decision. Treat it as a lead and confirm it against the bylaw or the sign.",
      ], ["Best for: the widest choice", "NZ$7.99 once on iPhone", "User reports, not council rules"]),
      s("4. KiwiCamping: best for free DOC campsites", [
        "In its August 2026 data, KiwiCamping held 287 DOC campsites, of which DOC lists 63 as free, with the fees, dog rules and booking requirements DOC publishes. Free DOC campsites are usually basic sites with a toilet and little else. DOC lists campervan access at 29 of the 63; many of the rest are reached on foot, by boat or by four-wheel drive, so check access before you plan a night around one.",
        "The catch is that DOC places, collections and trips all need the KiwiCamping Pass, listed from NZ$3.99 to NZ$12.99 on the New Zealand App Store; only BookIt stays and tours are free in the app. It is iPhone only with iOS 26 or later, its free-site data is DOC's rather than the councils', and it has no traveller reviews, which is why Rankers sits above it here.",
      ], ["Best for: free DOC campsites", "Pass needed for DOC places", "iPhone only, iOS 26 or later"], undefined, true),
      s("5. NZMCA App: best value for members", [
        "The New Zealand Motor Caravan Association's app gives members its Travel Directory and the association's NZMCA Parks, which are for members in certified self-contained vehicles, at $5 per adult per night. Membership costs $150 to join plus $102 a year, so the parks pay off over a long trip rather than a fortnight.",
        "It requires membership and had no ratings yet on the New Zealand App Store. For a certified self-contained motorhome on the road for months, it is often the cheapest reliable option after free sites.",
      ], ["Best for: long trips in a motorhome", "NZ$5 per adult a night at member parks", "Membership required"]),
      s("Apps we left out", [
        "An App Store search for freedom camping in New Zealand turns up a free app called Freedom camping nz, last updated in 2017, with a 1.3 average from 21 ratings and reviewers saying its map shows little of New Zealand. We would not rely on it. International apps such as park4night and iOverlander list places in many countries but do not state their New Zealand coverage, so we have not ranked them.",
        "We checked every listing, rating and price on 20 October 2026 on the New Zealand App Store and the developers' own sites. Features are described as each developer describes them, so a feature missing here is not a claim that an app lacks it.",
      ]),
      s("Before you stay the night", [
        "Read the sign at the entrance, check the council's freedom camping bylaw for the district you are in, and look up DOC's list of prohibited and restricted areas for conservation land. These can change, and they outrank every app on this page, ours included.",
        "Leave the site as you found it, use a dump station rather than a drain, and move on when the stay limit is up. Free camping in New Zealand survives on councils' goodwill, and that goodwill is easy to lose.",
      ], ["The sign and the bylaw outrank any app", "Check DOC's restricted areas list", "Respect stay limits"]),
    ],
    sources: [
      { label: "Freedom camping and self-contained vehicles (govt.nz)", url: "https://www.govt.nz/browse/recreation-and-the-environment/freedom-camping/" },
      { label: "Freedom camping on conservation land (DOC)", url: "https://www.doc.govt.nz/parks-and-recreation/things-to-do/camping/freedom-camping/" },
      { label: "Rankers Camping NZ app", url: "https://www.rankers.co.nz/apps/camping_nz" },
      { label: "CamperMate", url: "https://campermate.com/" },
      { label: "WikiCamps New Zealand", url: "https://wikicamps.co.nz/" },
      { label: "NZMCA membership fees", url: "https://www.nzmca.org.nz/join-us" },
    ],
  }),

  a({
    slug: "best-travel-apps-new-zealand",
    listicle: true,
    publishAt: "2026-10-30",
    title: "Best Apps for Travelling New Zealand in 2026: 10 to Install",
    description: "The apps worth installing for a New Zealand road trip in 2026: entry, navigation, weather, walking safety, fuel, city transport and where to stay, with prices and ratings checked October 2026.",
    category: "App guides",
    region: "New Zealand",
    places: ["Border entry", "State highways", "Auckland", "Tramping tracks", "DOC campsites"],
    imageAlt: "A motorhome on the Desert Road, State Highway 1, heading towards Mount Ruapehu",
    related: ["best-nz-camping-apps", "road-trip-planner-apps-new-zealand", "overseas-driver-licence-new-zealand"],
    intro:
      "A New Zealand trip needs fewer apps than you might think, but the right ones save real money and trouble: the official NZeTA app costs less than the website, a fuel app pays for itself on a long drive, and a walking app can send your trip plan to someone who will raise the alarm if a tramp goes wrong. These are the ten we would install for a road trip in 2026, grouped by the job they do, with ratings and prices from the New Zealand App Store checked on 20 October 2026. We are the team behind KiwiCamping, which is why it opens the list, and we say below who will not need it at all.",
    sections: [
      s("The ten apps at a glance", [
        "Before you fly, the official NZeTA and New Zealand Traveller Declaration apps handle entry. On the road, KiwiCamping plans where you sleep, Google Maps drives you there, MetService warns you about the weather and Plan My Walk covers the tramping days. Gaspy and a fuel company app keep fuel costs down, AT Mobile gets you around Auckland, and Rankers adds traveller reviews of campsites.",
        "You do not need all ten. A visitor hiring a car for a week of hotels can skip the camping apps; a campervan traveller on a month-long trip will use most of them.",
      ], undefined, {
        caption: "Checked 20 October 2026 on the New Zealand App Store and official sites. Ratings are New Zealand App Store averages with the number of ratings.",
        head: ["App", "Job", "Price", "NZ rating"],
        rows: [
          ["KiwiCamping", "Where to stay and the route plan", "Free; Pass NZ$3.99 to NZ$12.99", "3.8 (4)"],
          ["NZeTA (Immigration NZ)", "Electronic travel authority", "NZ$17 in the app plus the NZ$100 visitor levy", "4.5 (46)"],
          ["NZ Traveller Declaration", "Arrival declaration", "Free", "4.7 (3,190)"],
          ["Google Maps", "Turn-by-turn navigation", "Free", "4.7 (73,470)"],
          ["MetService", "Official forecasts and warnings", "Free with ads; ad-free NZ$1.99 a month", "2.4 (1,126)"],
          ["Plan My Walk", "Track alerts and trip plans for walks", "Free", "4.6 (612)"],
          ["Gaspy", "Crowd-sourced fuel prices", "Free; Gold NZ$1.69 a month", "4.0 (773)"],
          ["A fuel company app", "Rewards and paying at the pump", "Free", "4.7 to 4.9"],
          ["AT Mobile", "Auckland public transport", "Free", "4.5 (32,728)"],
          ["Rankers Camping NZ", "Traveller reviews of campsites", "Free", "4.7 (3,322)"],
        ],
      }),
      s("1. KiwiCamping: where to stay and how to string the trip together", [
        "KiwiCamping is a New Zealand camping map and trip planner built on DOC's own data: 287 DOC campsites, 927 DOC huts and 1,453 DOC tracks in its August 2026 data, with the fees, dog rules and booking requirements DOC publishes. Places can be saved to collections or added to a trip with ordered stops, dates, notes, to-dos and the route distance, and place details stay readable on the phone when signal drops. Map tiles, routing, weather and photos need a connection.",
        "It is free to download, but only BookIt stays and tours are open without paying; DOC places, collections, trips and the guides need the KiwiCamping Pass, listed from NZ$3.99 to NZ$12.99. It is iPhone only, needs iOS 26 or later, and had 4 New Zealand ratings (3.8). If you are not camping, you will not need it.",
      ], ["For: campervan and camping trips", "Pass needed for DOC places and trips", "iPhone only"], undefined, true),
      s("2. NZeTA: the cheaper way to get your travel authority", [
        "Most visitors from visa-waiver countries need a New Zealand Electronic Travel Authority before they travel. Immigration New Zealand charges NZ$17 when you request it in the official NZeTA app and NZ$23 on its website, and most visitors also pay the NZ$100 International Visitor Conservation and Tourism Levy with it.",
        "The app scans your passport and takes the payment. Request it well before you fly, and use only the official app or immigration.govt.nz, because look-alike sites charge extra for the same thing.",
      ], ["App fee NZ$17, website NZ$23", "Plus the NZ$100 levy for most visitors", "Use only the official app or site"]),
      s("3. New Zealand Traveller Declaration: your arrival form", [
        "The New Zealand Traveller Declaration is the free digital arrival declaration everyone entering New Zealand completes; doing it before you fly saves filling in a paper one on board. The official app, from the Ministry of Business, Innovation and Employment, lets you complete it up to 24 hours before you travel, scans your passport, and has nothing to print because the declaration is linked to your passport at the border. It rated 4.7 from 3,190 New Zealand ratings.",
        "You need a connection to start and submit it, and it must be answered in English. Do it the evening before you fly rather than at the gate.",
      ], ["Submit within 24 hours of travel", "Nothing to print", "Online to start and submit"]),
      s("4. Google Maps: navigation, downloaded before you need it", [
        "Google Maps is the navigator most visitors already know, rated 4.7 from 73,470 New Zealand ratings. Download offline areas for each region before you leave a main centre: Google's help pages say offline driving directions work only when the whole route is inside a downloaded area, and offline mode has no traffic information.",
        "Allow longer than it predicts on winding two-lane roads with a campervan, and check the NZ Transport Agency's Journeys site for closures before alpine passes.",
      ], ["Download offline areas region by region", "No traffic information offline", "Check NZTA Journeys for closures"]),
      s("5. MetService: the official forecasts and warnings", [
        "MetService is New Zealand's national weather forecaster, and its app carries severe weather warnings, location forecasts and rain radar. It is free with ads, or NZ$1.99 a month without. It rates 2.4 from 1,126 New Zealand App Store ratings; its severe weather warnings are the official ones, which matters when a front closes a pass.",
        "If you are heading onto the water, MetService's separate Marine app has coastal forecasts and tides.",
      ], ["Official severe weather warnings", "Free with ads", "Separate Marine app for the coast"]),
      s("6. Plan My Walk: for every walk longer than a stroll", [
        "Plan My Walk, from the New Zealand Mountain Safety Council, covers more than 3,500 tracks, huts and campsites on official topographic maps, shows official track alerts and closures, and sends your trip plan to an emergency contact. It is free and rated 4.6 from 612 New Zealand ratings.",
        "DOC has no national visitor app of its own, so this is the easiest way to see its track alerts on your phone. Leave your intentions with someone before any walk that goes beyond reception.",
      ], ["Sends your plan to an emergency contact", "Shows official track alerts", "Free"]),
      s("7. Gaspy and 8. a fuel company app: lower fuel bills", [
        "Gaspy shows fuel prices that its users report, so you can see which station in a town is cheapest before you pull in. It is free, with an optional Gold subscription at NZ$1.69 a month, and rated 4.0 from 773 New Zealand ratings.",
        "Then install the app for the brand you fill up with most. Z, BP, Mobil, Waitomo and Gull each have one, rated between 4.7 and 4.9 on the New Zealand App Store, with rewards, discounts or paying at the pump from your phone. Rural stations vary by brand, so do not plan a remote leg around one company's network.",
      ], ["Gaspy for the cheapest station in town", "One brand app for rewards", "Fill up before remote legs"]),
      s("9. AT Mobile: getting around Auckland", [
        "If you spend time in Auckland before or after the road trip, Auckland Transport's AT Mobile app plans journeys across buses, trains and ferries, shows live departures, tops up an AT HOP card and finds shared scooters, bikes and cars. It is free and rated 4.5 from 32,728 New Zealand ratings, but it covers Auckland only.",
        "In Wellington, Snapper cards are used on Metlink buses and trains, and contactless bank cards now work for single adult fares; the Snapper app checks a card's balance and tops it up.",
      ], ["Auckland only", "Live departures and AT HOP top-ups", "Snapper app for Snapper cards"]),
      s("10. Rankers: traveller reviews of where you might stay", [
        "Rankers Camping NZ is free and has the most New Zealand App Store ratings of any camping app we compared, 4.7 from 3,322, with more than 108,000 traveller reviews, each read and checked by a person on its team. It lists only overnight spots the local community has approved.",
        "It complements KiwiCamping well: one for reviews, the other for DOC data and planning. Our comparison of camping apps covers both in more depth, along with CamperMate and WikiCamps.",
      ], ["Free", "Reviews of campsites and freedom spots", "Pairs well with a planner"]),
      s("Do not forget the websites", [
        "Two of the most useful sources are not apps. The NZ Transport Agency's Journeys site shows state highway closures, roadworks and holiday traffic predictions, and DOC's website carries alerts for parks, tracks and campsites. Check both on the morning of any long or remote day.",
        "Cook Strait ferries are booked on the Interislander and Bluebridge websites. Book the crossing first and build the rest of the trip around it.",
      ]),
      s("How we chose and checked", [
        "We picked the apps a visitor on a New Zealand road trip is most likely to use, favouring official apps where they exist. Ratings, versions and prices come from the New Zealand App Store on 20 October 2026, and fees from Immigration New Zealand's own pages.",
        "We describe features as their developers describe them, so a feature not mentioned here is not a claim that an app lacks it. Fees and rules change; the official page always outranks this one.",
      ]),
    ],
    sources: [
      { label: "NZeTA fees (Immigration New Zealand)", url: "https://www.immigration.govt.nz/about-us/news-centre/requesting-a-new-zealand-electronic-travel-authority/" },
      { label: "Fees and levies (Immigration New Zealand)", url: "https://www.immigration.govt.nz/about-us/news-centre/fees-and-levies/" },
      { label: "New Zealand Traveller Declaration", url: "https://travellerdeclaration.govt.nz/" },
      { label: "Google Maps: download areas for offline use", url: "https://support.google.com/maps/answer/6291838" },
      { label: "MetService", url: "https://www.metservice.com/" },
      { label: "Plan My Walk (NZ Mountain Safety Council)", url: "https://www.mountainsafety.org.nz/plan-my-walk" },
      { label: "Gaspy", url: "https://www.gaspy.nz/" },
      { label: "AT Mobile (Auckland Transport)", url: "https://at.govt.nz/bus-train-ferry/at-mobile-app" },
      { label: "NZTA Journeys: road conditions and closures", url: "https://www.journeys.nzta.govt.nz/" },
      { label: "DOC alerts and closures", url: "https://www.doc.govt.nz/parks-and-recreation/know-before-you-go/alerts/" },
    ],
  }),

  a({
    slug: "wikicamps-alternatives",
    listicle: true,
    publishAt: "2026-10-23",
    title: "5 Best WikiCamps New Zealand Alternatives in 2026",
    description: "WikiCamps New Zealand costs NZ$7.99 and leans on user-added sites. KiwiCamping, Rankers, CamperMate, Campable and Overland Navigator compared on price, data and offline use. Checked October 2026.",
    category: "App guides",
    region: "New Zealand",
    places: ["DOC campsites", "DOC huts", "Private land stays", "4WD tracks", "Australia"],
    imageAlt: "A house bus, cars and a small tent at Cameron Flat campsite below the forested peaks of Mount Aspiring National Park",
    related: ["best-nz-camping-apps", "rankers-alternatives", "freedom-camping-rules-new-zealand"],
    intro:
      "WikiCamps New Zealand is a paid app with a loyal following: NZ$7.99 once on the New Zealand App Store, 4.5 stars from 137 New Zealand ratings when we checked on 20 October 2026, and more than 12,000 New Zealand sites that its own users have added. Most people who search for an alternative are not unhappy with it so much as unsure: whether to pay for an app when free ones exist, whether user-added listings are current, or whether they will need a second copy for Australia. KiwiCamping is our app, so it comes first below, but each entry says plainly what it does better than WikiCamps and when WikiCamps is still the better buy.",
    sections: [
      s("WikiCamps alternatives at a glance", [
        "Short answer: if most of your nights are at DOC campsites or huts, KiwiCamping gives you DOC's own details and a dated plan. If you want a free app, Rankers is the strongest New Zealand choice and CamperMate also covers Australia. Campable is for booked nights on farms and vineyards, and Overland Navigator is for gravel roads and 4WD tracks that a general camping app does not map.",
        "WikiCamps' strength is volume. Its listings come from the people using it, which is why it has so many, and also why a fee or a closure can lag behind reality. Whichever app you choose, the sign at the site and the council or DOC page are the final word on whether you can stay.",
      ], undefined, {
        caption: "Checked 20 October 2026 on the New Zealand App Store and each developer's site. Ratings are New Zealand App Store averages with the number of ratings.",
        head: ["App", "Pick it over WikiCamps when", "Price", "Platforms", "NZ rating"],
        rows: [
          ["WikiCamps New Zealand", "You want the most user-added sites (the baseline)", "NZ$7.99 once (iPhone)", "iPhone, iPad, Android", "4.5 (137)"],
          ["KiwiCamping", "Your nights are DOC campsites and huts", "Free; Pass NZ$3.99 to NZ$12.99", "iPhone (iOS 26+)", "3.8 (4)"],
          ["Rankers Camping NZ", "You want a free app with checked sites", "Free", "iPhone, iPad, Android, web", "4.7 (3,322)"],
          ["CamperMate", "You want free and the trip includes Australia", "Free; contains ads", "iPhone, iPad, Android, web", "4.4 (606)"],
          ["Campable", "You want a booked night on private land", "Free app; hosts set prices", "iPhone, Android", "4.5 (13)"],
          ["Overland Navigator", "You are driving gravel and 4WD routes", "Free; All Access NZ$7.99 a month", "iPhone, iPad", "4.5 (31)"],
        ],
      }),
      s("What pushes people away from WikiCamps", [
        "WikiCamps gets few New Zealand App Store reviews, so its latest 50 there stretch back to January 2020, and only 13 of them were written in 2024 or later. Forty-one gave four or five stars; the most common praise, seven reviews each, was for the trip planner and for listing more places than free apps. The complaints: six described filters or data breaking after an update, five of them in 2023 (the current version, 6.3.0, came out on 19 October 2026), five said site details, fees or locations were out of date or wrong, and two said the app froze or would not open the trip planner.",
        "Two practical points also come up. WikiCamps sells New Zealand and Australia as separate apps, so a trip across the Tasman means a second purchase: WikiCamps Australia costs NZ$11.99 on the New Zealand App Store. And on Android its Google Play listing rates 3.0 from 1,042 ratings and shows in-app purchase and ads labels, although its description calls it a one-time purchase.",
      ]),
      s("1. KiwiCamping: best for DOC campsites and huts with DOC's own details", [
        "In its August 2026 data, KiwiCamping's 287 DOC campsites, 927 DOC huts and 1,453 DOC tracks come from the Department of Conservation's data, with the adult fees, dog rules and booking requirements that DOC lists, and a link to DOC's own page for the place. For DOC places, KiwiCamping shows what DOC publishes.",
        "Saved places become a trip with ordered stops, dates, notes and the route distance, and filters for cost, facilities and dogs can be combined in one search. Place details stay on the phone when you lose signal; map tiles, routing, weather and photos do not.",
        "The limits: the free version opens only BookIt stays and tours, and DOC places, collections, trips and the guides need the KiwiCamping Pass, listed from NZ$3.99 to NZ$12.99. It runs on iPhone only (iOS 26 or later), it has 4 New Zealand ratings (3.8) and no traveller reviews, and it lists far fewer places in total than WikiCamps' 12,000-plus.",
      ], ["Choose it for: DOC campsites, huts and a dated plan", "Pass needed for DOC places and trips", "iPhone only, iOS 26 or later"], undefined, true),
      s("2. Rankers Camping NZ: best free app with checked sites", [
        "Rankers is the free answer to the question of whether WikiCamps is worth paying for. It lists more than 1,500 campsites among 6,600-plus places, including dump stations, water and LPG, and it says it only shows spots where the local community has agreed overnight stays are welcome. Its 108,000-plus traveller reviews are each read by a person before they appear.",
        "That makes it narrower than WikiCamps on paper but easier to trust per listing. Campsite information is in the app from the first install, and detailed maps download over Wi-Fi. It rated 4.7 from 3,322 New Zealand ratings, the most of any camping app here.",
      ], ["Choose it for: free, checked campsites", "108,000-plus checked reviews", "iPhone, Android and web"]),
      s("3. CamperMate: best free option when Australia is on the plan", [
        "CamperMate covers New Zealand and Australia in a single free app, so the second WikiCamps purchase disappears. It filters free and paid sites, shows toilets, dump stations and Wi-Fi spots, books campgrounds with availability, and downloads maps and place information for use without signal; version 5.8 added a satellite view in October 2026.",
        "It rated 4.4 from 606 New Zealand ratings and 4.0 from 12,568 on Google Play, and it carries ads. Of the 16 CamperMate reviews from 2025 or 2026 among the 50 most recent on the New Zealand App Store, seven blamed its latest redesign, so try it before a long trip rather than on the first night.",
      ], ["Choose it for: one free app for two countries", "Contains ads", "Download maps before you go"]),
      s("4. Campable: best for a quiet booked night on private land", [
        "Campable lists hundreds of private sites, from farms and vineyards to sports clubs, that hosts open to campervans and motorhomes. You book and pay in the app, and you can filter for sites that accept vehicles that are not self-contained. It rated 4.5 from 13 New Zealand ratings.",
        "It does a different job from WikiCamps: a few hundred guaranteed nights instead of a national directory. Use it for the nights you want settled in advance, such as a long weekend in a busy region.",
      ], ["Choose it for: booked private-land stays", "Hosts set the price", "Has a non-self-contained filter"]),
      s("5. Overland Navigator: best for gravel roads and 4WD tracks", [
        "Overland Navigator is a New Zealand app for the backcountry: hundreds of routes from scenic gravel drives to hard 4WD tracks, each with photos, reviews and tide and river information, plus remote camps and DOC sites along the way. Its makers say every route is checked and drivable rather than taken from a map.",
        "It is free to start. Navigator All Access, NZ$7.99 a month or NZ$87.99 a year, adds full offline navigation, CarPlay and more routes. It rated 4.5 from 31 New Zealand ratings and runs on iPhone and iPad; it is a specialist tool, not a replacement for a general campsite directory.",
      ], ["Choose it for: off-road and gravel routes", "All Access NZ$7.99 a month", "Offline navigation is in All Access"]),
      s("When WikiCamps is still the better buy", [
        "If you want the largest number of New Zealand sites in one app, paid for once, WikiCamps remains hard to beat. Its trip planner estimates fuel spend, its Offline Mode keeps maps and up to three planned trips available without signal, and its filters cover free campgrounds, pet-friendly sites, water refills and dump points.",
        "Many travellers keep it and add one of the apps above for the gap they feel most: DOC detail, curation, private land, Australia or the backcountry. Members of the New Zealand Motor Caravan Association should also install the NZMCA App, which shows the association's own parks and directory to members.",
      ]),
      s("How we compared", [
        "We read each app's New Zealand App Store listing and its developer's own site on 20 October 2026, plus the Google Play listing where it exists. Prices are as shown on the New Zealand App Store that day; WikiCamps' own website quotes A$9.99 per platform, so check the store before you buy. Review themes are counts from the 50 most recent WikiCamps New Zealand reviews, not our own verdict.",
        "We describe only the features each developer describes, so a feature not mentioned here is not a claim that an app lacks it.",
      ]),
    ],
    sources: [
      { label: "WikiCamps New Zealand", url: "https://www.wikicamps.co.nz/" },
      { label: "WikiCamps New Zealand listing data (Apple, NZ storefront)", url: "https://itunes.apple.com/lookup?id=582527125&country=nz" },
      { label: "Rankers Camping NZ app", url: "https://www.rankers.co.nz/apps/camping_nz" },
      { label: "CamperMate", url: "https://campermate.com/" },
      { label: "Campable", url: "https://www.campable.com/" },
      { label: "Overland Navigator listing data (Apple, NZ storefront)", url: "https://itunes.apple.com/lookup?id=1451030537&country=nz" },
      { label: "NZMCA membership", url: "https://www.nzmca.org.nz/join-us" },
      { label: "DOC places to stay", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/" },
    ],
  }),

  a({
    slug: "best-campervan-apps-new-zealand",
    listicle: true,
    publishAt: "2026-10-25",
    title: "Best Campervan Apps for New Zealand in 2026: Hire, Relocations and Life on the Road",
    description: "The apps that help on a New Zealand campervan trip in 2026, from hiring the van and $1-a-day relocations to finding the next night, compared with prices and ratings checked October 2026.",
    category: "App guides",
    region: "New Zealand",
    places: ["Campervan hire", "Relocations", "DOC campsites", "NZMCA Parks", "Green warrants"],
    imageAlt: "An older campervan parked on a lake shore with two camp chairs and a table by the water",
    related: ["best-nz-camping-apps", "self-contained-campervan-green-warrant", "campervan-budget-new-zealand"],
    intro:
      "A campervan trip in New Zealand uses apps at three stages: getting the van, living in it, and sometimes moving it for a hire company in exchange for a cheap week. No single app covers all three, and the most useful ones depend on who you hire from. These are the ones we would install for a campervan trip in 2026, with ratings and prices from the New Zealand App Store checked on 20 October 2026. We built KiwiCamping, which is why it is listed first, and each section says when another app does the job better.",
    sections: [
      s("The best campervan apps at a glance", [
        "For planning the nights, KiwiCamping puts DOC campsites, huts and a dated route in one place. If your van comes from Maui, Britz, Mighty or Apollo, install thl Roadtrip, which those brands point their hirers to; Travellers Autobarn points to CamperMate instead. Rankers adds traveller reviews of where to park up, Camplify rents privately owned vans, Imoova lists relocation deals and the NZMCA App is for members of the New Zealand Motor Caravan Association.",
        "The rule that no app settles for you is self-containment. Since 7 June 2026 only a green warrant counts for freedom camping on public land, so ask the hire company before you book whether the van has one.",
      ], undefined, {
        caption: "Checked 20 October 2026 on the New Zealand App Store and each company's site. Ratings are New Zealand App Store averages with the number of ratings.",
        head: ["App", "Stage", "Price", "NZ rating"],
        rows: [
          ["KiwiCamping", "Planning nights and the route", "Free; Pass NZ$3.99 to NZ$12.99", "3.8 (4)"],
          ["thl Roadtrip", "Hire from Maui, Britz, Mighty or Apollo", "Free", "4.6 (122)"],
          ["CamperMate", "On the road, NZ and Australia", "Free; contains ads", "4.4 (606)"],
          ["Rankers Camping NZ", "Reviews of where to stay", "Free", "4.7 (3,322)"],
          ["Camplify", "Hire a privately owned van", "Free app; owners set rates", "4.8 (23)"],
          ["Imoova", "Relocation deals", "Free app; deals from $1 a day", "5.0 (1)"],
          ["NZMCA App", "NZMCA members on long trips", "Membership NZ$252 in the first year", "No NZ ratings yet"],
        ],
      }),
      s("1. KiwiCamping: best for planning where the van sleeps each night", [
        "KiwiCamping is a camping map and trip planner built on the Department of Conservation's data: 287 DOC campsites, 927 DOC huts and 1,453 DOC tracks in its August 2026 data, with the fees, dog rules and booking requirements DOC lists. You add the nights to a trip as ordered stops with dates, notes and to-dos, see the distance and drive time between them, and check the forecast for each stop. Its road-trip guides suggest routes with the places to save along the way.",
        "For a campervan that matters because the hard part of each day is the last hour: knowing the site, its fee and whether it needs booking before you arrive. Place details stay on the phone without signal, but map tiles, routing, weather and photos need a connection.",
        "What it does not do: it has no vehicle hire or relocation features, and the free version opens only BookIt stays and tours. DOC places, collections, trips and guides need the KiwiCamping Pass, listed from NZ$3.99 to NZ$12.99. It is iPhone only (iOS 26 or later) and has 4 New Zealand ratings (3.8).",
      ], ["Choose it for: planning nights at DOC campsites", "Pass needed for DOC places, trips and guides", "iPhone only, iOS 26 or later"], undefined, true),
      s("2. thl Roadtrip: best if you hire from Maui, Britz, Mighty or Apollo", [
        "Tourism Holdings runs Maui, Britz, Mighty and Apollo, and all four send hirers to its free thl Roadtrip app. Britz says the app shows what to expect at pick-up and a show-through video of the camper you booked, which it asks you to watch before you arrive, plus how-to videos for the vehicle. On the road it finds nearby campsites, holiday parks, petrol, dump stations, toilets, LPG, laundromats and free Wi-Fi, with real-time road alerts.",
        "It rated 4.6 from 122 New Zealand ratings, but the iPhone version was last updated in June 2025, so treat it as a hire companion more than your main planner.",
      ], ["Choose it for: thl hire vans", "Vehicle how-to videos", "Free, NZ and Australia"]),
      s("3. CamperMate: best free companion if you hire from Travellers Autobarn", [
        "CamperMate is the app Travellers Autobarn gives its hirers, and Spaceships merged its own app into CamperMate in 2023. It is free, covers New Zealand and Australia, shows campsites, toilets, dump stations and Wi-Fi spots, books campgrounds, and downloads maps and place information for use without signal. CamperMate describes itself as an official travel partner of Apollo, Maui, Britz and Mighty too.",
        "Its New Zealand App Store average was 4.4 across 606 ratings; on Google Play it averaged 4.0 across 12,568, and the app carries ads. Some recent reviewers dislike its redesign.",
      ], ["Choose it for: a free all-rounder", "Downloadable maps", "Contains ads"]),
      s("4. Rankers Camping NZ: best for reviews of where to park up", [
        "Rankers is free and lists more than 1,500 campsites among 6,600-plus places, including dump stations, water and LPG, with more than 108,000 traveller reviews read by its team. It shows only overnight spots the local community has approved, which suits a van driver choosing between a free site and a holiday park at the end of the day.",
        "It rated 4.7 from 3,322 New Zealand ratings. Its campsite information is built into the app, and detailed maps download over Wi-Fi, so get them before you leave town. The limit is the other side of its checks: it lists only spots the community has approved, so it shows far fewer places than the 12,000-plus user-added sites in WikiCamps New Zealand.",
      ], ["Choose it for: traveller reviews", "Free", "Fewer places than WikiCamps"]),
      s("5. Camplify: best for hiring a privately owned campervan", [
        "Camplify is a sharing platform where owners rent out their own campervans and motorhomes. You search, book and manage the hire in the app and message the owner directly. Its New Zealand site says daily rates start from $85, with damage protection and 24/7 roadside assistance included.",
        "It rated 4.8 from 23 New Zealand ratings. Each van and its rules differ by owner, so check the self-containment warrant, insurance excess and kilometre limits on the listing before you book.",
      ], ["Choose it for: privately owned vans", "Message the owner in the app", "Check the warrant on each listing"]),
      s("6. Imoova: best for relocation deals", [
        "Hire companies need vans moved back to where demand is, and relocation sites let you drive them for very little. Imoova advertises relocations from $1 a day and showed 91 New Zealand listings on 20 October 2026. It says fuel, tolls and parking are not covered, that some suppliers add incentives such as fuel or ferry tickets for urgent moves, and that you have a limited number of days to finish the journey.",
        "Hire companies also advertise their own relocations: Travellers Autobarn listed seven free days from Christchurch to Auckland in November with 1,500 km allowed, a $3,500 bond and a $200 cancellation fee. The Imoova app is free but had only 1 New Zealand rating, so read each listing's bond, kilometre cap and dates carefully.",
      ], ["Choose it for: cheap one-way trips", "Fuel usually not included", "Fixed dates and bonds apply"]),
      s("7. NZMCA App: best for NZMCA members on long trips", [
        "The New Zealand Motor Caravan Association's app opens its Travel Directory to members only. Joining costs NZ$252 in the first year (a NZ$150 joining fee and a NZ$102 annual subscription), and members can stay at NZMCA Parks for NZ$5 per adult per night.",
        "The iPhone app had no New Zealand ratings yet and the Android version rated 3.2 from 156 on Google Play. You do not need to own a motorhome to join, but any vehicle you use must be certified self-contained, so weigh the membership fee against how many nights you expect to spend in its parks.",
      ], ["Choose it for: NZMCA members on long trips", "Members only", "NZMCA Parks at NZ$5 per adult"]),
      s("Green warrants: the check no app makes for you", [
        "From 7 June 2026, blue self-containment warrants are no longer recognised for freedom camping, and the Plumbers, Gasfitters and Drainlayers Board says freedom camping on public land without a green warrant can bring a $400 infringement notice. A certified vehicle needs a toilet permanently fixed and usable inside it, along with fresh water, a sink, wastewater and rubbish storage.",
        "The rules apply to freedom camping on public land, not to campgrounds, holiday parks or private property. An app's freedom-camping pin does not tell you whether your van qualifies, so look for the green warrant card when you collect the van.",
      ]),
      s("Other apps worth having in the van", [
        "Gaspy shows fuel prices reported by its users and is free, with an optional Gold subscription at NZ$1.69 a month. MetService carries the official severe weather warnings, which matter in a campervan on an exposed road, and Plan My Walk covers track alerts for the walking days.",
        "If your van runs on diesel, ask the hire company how it charges road user charges: Spaceships, for example, bills them after the trip by the distance you drove.",
      ]),
      s("How we chose and checked", [
        "We looked at the apps that New Zealand hire companies send their customers to, plus the apps campervan travellers use for sites, relocations and membership. Ratings and prices come from the New Zealand App Store on 20 October 2026; hire and relocation terms come from each company's own site that day and change often.",
        "We report features as the developers and companies describe them, so a feature not mentioned here is not a claim that an app lacks it.",
      ]),
    ],
    sources: [
      { label: "Britz: thl Roadtrip app", url: "https://www.britz.com/nz/en/travel-info/britz-roadtrip-app" },
      { label: "Travellers Autobarn: CamperMate app", url: "https://www.travellers-autobarn.co.nz/deals-and-specials/travellers-autobarn-app" },
      { label: "Travellers Autobarn: campervan relocations", url: "https://www.travellers-autobarn.co.nz/campervan-hire-new-zealand/campervan-relocations" },
      { label: "Spaceships: camping apps", url: "https://spaceshipsrentals.co.nz/rental-info/camping-apps/" },
      { label: "Imoova: what is a relocation", url: "https://imoova.com/what-is-a-relocation" },
      { label: "Camplify New Zealand", url: "https://www.camplify.co.nz/" },
      { label: "NZMCA membership", url: "https://www.nzmca.org.nz/join-us" },
      { label: "Rankers Camping NZ app", url: "https://www.rankers.co.nz/apps/camping_nz" },
      { label: "Self-contained vehicles (Plumbers, Gasfitters and Drainlayers Board)", url: "https://www.pgdb.co.nz/self_contained_vehicles/scv_updates/" },
      { label: "Road user charges (govt.nz)", url: "https://www.govt.nz/browse/transport/keeping-a-vehicle-on-the-road/vehicle-licensing-and-road-user-charges/" },
      { label: "Spaceships: road user charges", url: "https://faq.spaceshipsrentals.co.nz/content/what-are-road-user-charges-ruc-which-vehicle-s-does-it-apply-to" },
    ],
  }),

  a({
    slug: "best-weather-apps-new-zealand",
    listicle: true,
    publishAt: "2026-10-27",
    title: "Best Weather Apps for Camping and Tramping in New Zealand 2026",
    description: "MetService, Windy, Yr, Plan My Walk, Apple Weather and KiwiCamping compared for New Zealand camping and tramping, plus the mountain forecasts that live on websites. Checked October 2026.",
    category: "App guides",
    region: "New Zealand",
    places: ["Mountain forecasts", "Severe weather warnings", "Tramping tracks", "DOC huts", "Lake Pukaki"],
    imageAlt: "Lenticular clouds over Lake Pukaki with Aoraki Mount Cook on the horizon",
    related: ["new-zealand-severe-weather-camping", "kiwicamping-weather-look-around", "river-crossing-safety-new-zealand"],
    intro:
      "New Zealand weather turns quickly, and the right app depends on the question: whether a severe warning covers tonight's campsite, how strong the wind will be on a ridge tomorrow, or which hut on the route will be wet. No single app answers all three. These are the weather apps we would use for camping and tramping in 2026, with ratings and prices from the New Zealand App Store checked on 20 October 2026, and the official websites that still beat every app for mountain forecasts. KiwiCamping is ours, so it is listed first; it is the right pick for one job only, and the others are better for the rest.",
    sections: [
      s("The best weather apps at a glance", [
        "Use MetService for the official warnings, Windy or Yr for a second forecast and for wind, and Plan My Walk on tramping days. KiwiCamping puts a forecast on each campsite and hut in your trip, which is useful for choosing between places but is not a warning service. Before going above the bushline, read MetService's mountain forecast and the New Zealand Avalanche Advisory on the web.",
        "No independent test of weather app accuracy in New Zealand turned up in our research, so treat claims that one app is the most accurate as opinion. What can be checked is the source: MetService is the only authorised provider of severe weather warnings in New Zealand.",
      ], undefined, {
        caption: "Checked 20 October 2026 on the New Zealand App Store. Ratings are New Zealand App Store averages with the number of ratings.",
        head: ["App", "Best for", "Price", "NZ rating"],
        rows: [
          ["KiwiCamping", "A forecast for each campsite and hut on your trip", "Free to download, with in-app purchases", "3.8 (4)"],
          ["MetService", "Official warnings and watches", "Free with ads; ad-free NZ$1.99 a month", "2.4 (1,126)"],
          ["Windy.com", "Wind, gusts and many forecast models", "Free; Premium in-app purchase", "4.8 (9,058)"],
          ["Yr", "A free second forecast", "Free", "3.6 (87)"],
          ["Plan My Walk", "Tramping days and track alerts", "Free", "4.6 (612)"],
          ["Apple Weather", "Quick checks, built into the iPhone", "Free", "4.7 (18,741)"],
        ],
      }),
      s("1. KiwiCamping: best for comparing the weather at your next campsites", [
        "KiwiCamping shows Apple Weather on each place screen: current conditions, wind gusts, how warm it feels and seven days of highs and lows. In a trip, each stop shows the forecast for the day you plan to arrive, so you can see before you drive whether the lakeside campsite or the sheltered one in the bush suits the next two nights.",
        "That makes it a planning tool, not a safety tool. It does not carry MetService's warnings, and it needs signal to load a forecast. Place details such as facilities and fees stay on the phone when reception drops. It is iPhone only, iOS 26 or later, with 4 New Zealand ratings (3.8).",
      ], ["Choose it for: weather at each stop on your trip", "iPhone only, iOS 26 or later", "Not a warning service"], undefined, true),
      s("2. MetService: best for official warnings", [
        "MetService is New Zealand's national weather service and the only authorised provider of severe weather warnings. Its app shows warnings and watches for your location, rain radar, 48-hour forecast graphs, three-day rain maps and the UV index and fire danger, with notifications for severe weather. It is free with ads, or ad-free for NZ$1.99 a month or NZ$22.99 a year.",
        "It is also the lowest-rated app here: 2.4 from 1,126 New Zealand ratings, with reviews on its App Store page objecting to ads and the design. Its mountain, marine and rural forecasts are on metservice.com rather than in this app, and its separate Marine and Rural Weather apps were last updated in 2023.",
      ], ["Choose it for: official warnings and watches", "Ad-free NZ$1.99 a month", "Mountain forecasts are on the website"]),
      s("3. Windy.com: best for wind and comparing forecasts", [
        "Windy offers more than 15 weather models, including the European ECMWF model, on animated maps of wind, gusts, rain and cloud. That is useful when forecasts disagree: if the models agree on a southerly change, plan around it; if they do not, keep the plan flexible. It rated 4.8 from 9,058 New Zealand ratings.",
        "It is free, with a Premium in-app purchase that adds model comparison, forecasts at one-hour resolution, a 15-day outlook and 24-hour radar loops. It does not issue New Zealand warnings, so pair it with MetService.",
      ], ["Choose it for: wind, gusts and forecast models", "Premium adds model comparison", "No official NZ warnings"]),
      s("4. Yr: best for a simple free second opinion", [
        "Yr is the free app of Norway's public weather service, whose forecasts it uses worldwide, including New Zealand place forecasts. Its New Zealand listing shows no in-app purchases. It rated 3.6 from 87 New Zealand ratings.",
        "Some trampers recommend it on forums, but we found no independent test of how it performs here. Use it as a cross-check against MetService rather than as your only source.",
      ], ["Choose it for: a free cross-check", "Forecasts from Norway's weather service", "No NZ warnings"]),
      s("5. Plan My Walk: best for the tramping days", [
        "Plan My Walk, from the New Zealand Mountain Safety Council, combines weather forecasts and warnings with official track alerts for more than 3,500 tracks, huts and campsites, and sends your trip plan to an emergency contact. The app costs nothing, and 612 New Zealand App Store ratings average 4.6.",
        "DOC's Land Safety Code asks you to check the forecast, change your plans if needed and leave your intentions with someone, and this app covers both on one screen.",
      ], ["Choose it for: walks and tramps", "Sends your plan to a contact", "Free"]),
      s("6. Apple Weather: best for a quick look on an iPhone", [
        "Apple Weather comes with the iPhone, rated 4.7 from 18,741 New Zealand ratings. Apple lists MetService among its data sources for New Zealand severe weather, but next-hour rain forecasts are not offered here, so the minute-by-minute rain alerts some travellers expect from other countries will not appear.",
        "It is fine for a glance at the week ahead. For a mountain day or an exposed campsite, look at MetService's own forecast as well.",
      ], ["Choose it for: a quick daily check", "Built into iPhone", "No next-hour rain for NZ"]),
      s("The forecasts that are only on websites", [
        "MetService publishes mountain forecasts for national parks and regions such as Aoraki/Mount Cook, Arthur's Pass, Fiordland, Mount Aspiring, Nelson Lakes and Tongariro, with a New Zealand mountain forecast for areas above 800 metres that includes the freezing level. Its website also carries marine and rural forecasts.",
        "DOC points trampers to NIWA's park forecasts on weather.niwa.co.nz, now run by Earth Sciences New Zealand, and to the New Zealand Avalanche Advisory before any trip into avalanche terrain. Save these pages before you lose signal; none of them will update once you are out of reception.",
      ]),
      s("Warnings, watches and what they ask of you", [
        "MetService uses three levels. A yellow watch means severe weather is possible but not yet certain: stay alert. An orange warning means take action, and most warnings are orange. A red warning, kept for the most extreme events, means take action immediately.",
        "For campers, an orange warning for heavy rain or wind is the moment to move away from rivers and exposed ridges and choose a sheltered site. Our guide to severe weather when camping covers what to do at each level.",
      ]),
      s("How we chose and checked", [
        "We compared the weather apps most used by campers and trampers in New Zealand, favouring official sources. Ratings, prices and features come from each app's New Zealand App Store listing on 20 October 2026, and the warning definitions from MetService's own page.",
        "We describe features as their developers do, so a feature not mentioned is not a claim that an app lacks it. Forecasts are forecasts: on the day, what you see on the hill outranks any app.",
      ]),
    ],
    sources: [
      { label: "MetService: about severe weather warnings", url: "https://about.metservice.com/about-severe-weather-warnings" },
      { label: "MetService weather apps", url: "https://about.metservice.com/weather-apps" },
      { label: "MetService mountains and parks forecasts", url: "https://www.metservice.com/mountains-and-parks/national-parks" },
      { label: "Windy.com listing data (Apple, NZ storefront)", url: "https://itunes.apple.com/lookup?id=1161387262&country=nz" },
      { label: "Yr listing data (Apple, NZ storefront)", url: "https://itunes.apple.com/lookup?id=490989206&country=nz" },
      { label: "Plan My Walk (NZ Mountain Safety Council)", url: "https://www.mountainsafety.org.nz/plan-my-walk" },
      { label: "Apple Weather data sources", url: "https://support.apple.com/en-nz/105038" },
      { label: "DOC: weather and the Land Safety Code", url: "https://www.doc.govt.nz/parks-and-recreation/know-before-you-go/weather/" },
      { label: "NIWA Weather (Earth Sciences New Zealand)", url: "https://weather.niwa.co.nz/" },
      { label: "New Zealand Avalanche Advisory", url: "https://www.avalanche.net.nz/" },
    ],
  }),

  a({
    slug: "fuel-price-apps-new-zealand",
    listicle: true,
    publishAt: "2026-10-29",
    title: "Best Fuel Price Apps in New Zealand 2026: Gaspy, Brand Apps and Discounts Compared",
    description: "Gaspy, Z, bp, Waitomo, Gull, g.a.s., Mobil and the supermarket fuel schemes compared: what each saves per litre, what it costs and where it works. Prices and terms checked October 2026.",
    category: "App guides",
    region: "New Zealand",
    places: ["State highways", "Rural fuel stops", "Te Anau", "Supermarkets", "EV chargers"],
    imageAlt: "State Highway 6 winding along the shore of Lake Wakatipu under grey cloud",
    related: ["new-zealand-road-trip-fuel-cost-2026", "food-fuel-resupply-new-zealand-road-trip", "best-travel-apps-new-zealand"],
    intro:
      "Fuel has become one of the biggest costs of a New Zealand road trip in 2026. MBIE's weekly monitoring put regular 91 at 354.4 cents a litre on the price boards in the week dated 9 October 2026, against 260.4 cents a year earlier, and diesel at 323.8 cents before road user charges; the latest week's figures are provisional. At those prices it pays to know both where fuel is cheapest and which discounts you hold, so the best setup is one app that shows prices and one or two that cut them. We make KiwiCamping, a camping app that does not track fuel prices, so it is not ranked here; it appears at the end only for the planning job it can help with.",
    sections: [
      s("Fuel apps at a glance", [
        "Start with Gaspy to see which station near you is cheapest. Then add the app for the network you pass most: Z's app gives a daily discount and a bigger one on Wednesdays, bp's app works with Woolworths' Everyday Rewards card, and Foodstuffs' Club+ turns a supermarket shop into a discount at Z and participating Caltex sites. Waitomo and Gull reward you through in-app credit and promotion days rather than a fixed cents-per-litre discount.",
        "Discounts are capped per fill, usually at 50 or 100 litres, and the schemes can change their amounts at short notice. Check the terms in the app before a long drive rather than relying on last month's offer.",
      ], undefined, {
        caption: "Checked 20 October 2026 on the New Zealand App Store and each company's own page. Ratings are New Zealand App Store averages with the number of ratings.",
        head: ["App", "How it saves you money", "Price", "NZ rating"],
        rows: [
          ["Gaspy", "Shows user-reported pump prices", "Free; Gold NZ$1.69 a month", "4.0 (773)"],
          ["Z Energy", "At least 6c a litre daily, 15c on Wednesdays", "Free", "4.8 (13,568)"],
          ["BPme", "6c a litre with Everyday Rewards (up to 50 L)", "Free", "4.9 (34,764)"],
          ["Club+ (Foodstuffs)", "8c a litre at Z or Caltex after a supermarket shop", "Free", "1.8 (682)"],
          ["Waitomo", "Spin-to-win credit on fills of $20 or more", "Free", "4.8 (23,195)"],
          ["Gull", "Promotion days; unlocks unmanned pumps", "Free", "4.8 (17,818)"],
          ["g.a.s.", "Everyday Rewards discounts at g.a.s. sites", "Free", "4.7 (1,027)"],
          ["Mobil", "Smiles points and paying from the car", "Free", "4.7 (10,135)"],
        ],
      }),
      s("1. Gaspy: best for finding the cheapest station", [
        "Gaspy is a crowd-sourced price map run by Hello World Limited. Its users enter the price shown on the pump, other users confirm it, and both earn Spy Coins when a price is confirmed. Gaspy's help page says updates are limited to stations near you because of past misuse, which keeps prices honest but means a remote station can show an old figure.",
        "You can tell the app which discounts you hold, and it shows your discounted price above the pump price; the free version allows one custom discount and Gaspy Gold, NZ$1.69 a month, allows as many as you like. Favourites can send price alerts, and the map also lists EV chargers. It rated 4.0 from 773 New Zealand ratings.",
      ], ["Choose it for: comparing stations", "Gold NZ$1.69 a month", "Check the time of the last update"]),
      s("2. Z Energy app: best everyday discount on a major network", [
        "Z Rewards in the Z app takes at least 6 cents a litre off every fill, up to 100 litres, and 15 cents a litre from 6am Wednesday to 6am Thursday when you scan in the app. You also earn a point for every dollar spent on fuel and Airpoints on fuel, and Sharetank lets you share a virtual fuel tank with up to five people.",
        "It rated 4.8 from 13,568 New Zealand ratings. Z's Wednesday figure has changed before (it was 10 cents in mid-2025), so confirm it on the rewards page before you plan a fill around it.",
      ], ["Choose it for: a steady discount at Z", "15c a litre on Wednesdays", "Up to 100 litres a fill"]),
      s("3. BPme with Everyday Rewards: best if you shop at Woolworths", [
        "bp takes 6 cents a litre off up to 50 litres when you scan an Everyday Rewards card, and the same card earns a point per litre towards $15 vouchers. Woolworths, which runs Everyday Rewards, also issues bonus fuel discounts for qualifying grocery spends; their size changes and is not fixed in its terms. BPme links your Everyday Rewards card in the app and rated 4.9 from 34,764 New Zealand ratings.",
        "The same Everyday Rewards discount works at g.a.s. stations, and the g.a.s. app (4.7 from 1,027) links the card there.",
      ], ["Choose it for: bp and g.a.s. with one card", "6c a litre on up to 50 L", "Bonus discounts vary"]),
      s("4. Club+: best if you shop at PAK'nSAVE or New World", [
        "Foodstuffs launched Club+ in June 2026 in place of the New World Clubcard. A qualifying spend of $1 or more at a store without its own fuel site earns an 8-cent-a-litre discount, up to 100 litres, to use at Z or participating Caltex sites within 30 days. PAK'nSAVE and New World stores with fuel on site give their own discount, which Club+ states as at least 8 cents a litre in the North Island and 4 cents in the South Island.",
        "The Club+ app rated only 1.8 from 682 New Zealand ratings, and its terms let Foodstuffs change the discount at any time. Gull is not part of the scheme.",
      ], ["Choose it for: Foodstuffs shoppers", "8c a litre at Z and Caltex", "Use within 30 days"]),
      s("5. Waitomo, Gull and Mobil: best for their own networks", [
        "Waitomo's app (4.8 from 23,195) gives a spin to win credit called Moolah on fills of $20 or more, plus scratchies when your monthly spend passes set amounts; Moolah is spent in the app. Gull's app (4.8 from 17,818) unlocks pumps at unmanned Gull stations and Pay at Pump lanes and runs promotion days. Neither states a fixed cents-per-litre discount.",
        "Mobil's app (4.7 from 10,135) earns Smiles points and pays for fuel from the car. We could not load Mobil's own rewards page to confirm its current discount, so check it in the app.",
      ], ["Waitomo: chance-based credit", "Gull: unmanned pumps and promo days", "Mobil: Smiles points"]),
      s("Diesel, EVs and remote roads", [
        "MBIE's diesel figure excludes road user charges. NZTA charges $76 per 1,000 km for light diesel vehicles, so add about 7.6 cents a kilometre to the pump cost when you compare a diesel campervan with a petrol car. Hire companies bill RUC in different ways; ask before you book.",
        "For electric vehicles, PlugShare (4.6 from 4,173) maps chargers from many networks, and the Z app also handles Z's EV charging. On remote routes the cheapest fuel is the fuel you already have: DOC notes there are no fuel stations between Te Anau and Milford Sound, so fill up in Te Anau.",
      ]),
      s("Where KiwiCamping fits", [
        "KiwiCamping does not show fuel prices, so it is not on the list above. What it does show is distance: a trip in KiwiCamping gives the distance and drive time for each leg between stops, so you can see which legs are long and plan where to fill up before them. A collection of saved places also shows how far apart its two furthest places are, a rough idea of how much ground the trip covers.",
        "KiwiCamping runs on iPhone with iOS 26 or later, and its four New Zealand ratings average 3.8. To turn those distances into dollars, our fuel and distance calculator on this site does the arithmetic.",
      ], ["Use it for: spotting long legs between stops", "iPhone only, iOS 26 or later", "No fuel prices"], undefined, true),
      s("How we chose and checked", [
        "We included the price app with the most New Zealand use and the app of every fuel brand or loyalty scheme we could verify. Discounts and caps come from each company's own rewards or terms page on 20 October 2026; ratings come from the New Zealand App Store that day. Fuel prices come from MBIE's weekly monitoring table, which records board prices, not prices after discounts.",
        "We describe each scheme as the company does. A discount or feature not mentioned here is not a claim that it does not exist.",
      ]),
    ],
    sources: [
      { label: "MBIE weekly fuel price monitoring", url: "https://www.mbie.govt.nz/building-and-energy/energy-and-natural-resources/energy-statistics-and-modelling/energy-statistics/weekly-fuel-price-monitoring" },
      { label: "Gaspy help", url: "https://www.gaspy.nz/help.html" },
      { label: "Z Rewards promotions", url: "https://dynamic.z.co.nz/rewards-promotions/promotions" },
      { label: "bp and Everyday Rewards", url: "https://www.bp.com/en_nz/new-zealand/home/products-and-services/promotions-and-rewards/everydayrewards" },
      { label: "Everyday Rewards FAQs (Woolworths)", url: "https://www.woolworths.co.nz/help/everyday-rewards-faqs" },
      { label: "Club+ fuel discounts", url: "https://www.clubplus.co.nz/fuel" },
      { label: "Waitomo FAQ", url: "https://waitomogroup.co.nz/faq" },
      { label: "Gull app", url: "https://gull.nz/app" },
      { label: "NZTA road user charge rates", url: "https://www.nzta.govt.nz/vehicles/road-user-charges/ruc-rates-and-transaction-fees" },
      { label: "DOC: Milford Road tips for drivers", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/places-to-go/milford-road-milford-sound-area/milford-road-tips-for-drivers/" },
    ],
  }),

  a({
    slug: "working-holiday-apps-new-zealand",
    listicle: true,
    publishAt: "2026-10-31",
    title: "Best Apps for Working Holiday Makers in New Zealand 2026",
    description: "The apps a working holiday maker in New Zealand actually uses in 2026: SEEK, Trade Me, Wise, bank and phone apps, seasonal work and farm stays, plus the official steps no app does for you. Checked October 2026.",
    category: "App guides",
    region: "New Zealand",
    places: ["Working holiday visa", "Seasonal work", "IRD number", "DOC campsites", "Marlborough"],
    imageAlt: "Autumn vineyard rows in the Awatere Valley, Marlborough, below snow-capped ranges",
    related: ["best-travel-apps-new-zealand", "campervan-budget-new-zealand", "new-zealand-travel-cost-2026"],
    intro:
      "A working holiday in New Zealand runs on a handful of apps: one to find work, one to move money, a bank and a phone plan, and something to tell you where to sleep when the job is three hours from the last one. These are the apps we would install for a working holiday in 2026, with ratings from the New Zealand App Store checked on 20 October 2026, and the official steps that still happen on government websites rather than in any app. We make KiwiCamping and list it first for the travelling part of the year; for jobs, money and paperwork the other apps below do the work.",
    sections: [
      s("Working holiday apps at a glance", [
        "For jobs, install SEEK and Trade Me, and look at PickNZ for fruit and vegetable seasons. Wise moves money from home cheaply, a New Zealand bank app holds your wages, and a prepaid plan from Skinny, 2degrees, Spark or One NZ keeps you reachable for employers. KiwiCamping covers the nights between jobs, WWOOF and Workaway cover work in exchange for a bed, and the NZTA app helps once you own a car.",
        "Your IRD number, tax code and visa conditions are handled on Inland Revenue and Immigration New Zealand websites. Sort those out first, because an employer needs your IRD number before your first pay.",
      ], undefined, {
        caption: "Checked 20 October 2026 on the New Zealand App Store and each provider's own site. Ratings are New Zealand App Store averages with the number of ratings.",
        head: ["App", "Job it does", "Price", "NZ rating"],
        rows: [
          ["KiwiCamping", "Places to sleep between jobs", "Free to download, with in-app purchases", "3.8 (4)"],
          ["SEEK", "Job listings across New Zealand", "Free", "4.7 (68,389)"],
          ["Trade Me", "Jobs, flats and used cars", "Free", "4.6 (65,564)"],
          ["Wise", "Moving money from home", "Free app; fees from 0.22%", "4.8 (23,432)"],
          ["BNZ Mobile", "A New Zealand bank account", "Free", "4.8 (56,574)"],
          ["Skinny Mobile", "Prepaid phone and data", "Free app; prepaid plans", "4.4 (18,813)"],
          ["Workaway", "Work in exchange for a bed", "Free app; yearly membership", "4.8 (144)"],
          ["NZTA Waka Kotahi", "Rego, WoF and RUC for your car", "Free", "4.8 (581)"],
        ],
      }),
      s("1. KiwiCamping: best for finding a bed between jobs", [
        "Seasonal work moves you around: kiwifruit in the Bay of Plenty, grapes in Marlborough, apples in Hawke's Bay. KiwiCamping is a map of where you can stay on the way, built on DOC's data, with 287 DOC campsites in its August 2026 data and the adult fees DOC lists, from $5 to $25 a night at the sites with a published rate. Holiday parks, stays and tours sit on the same map, and costs can be shown in your home currency alongside the New Zealand dollar figure.",
        "Saved places go into collections, and a trip turns them into dated stops with notes and the distance between them, which helps when you are lining up a new job and a place to sleep near it. Place details stay on the phone when signal drops; map tiles, routing, weather and photos need a connection. It is iPhone only, needs iOS 26 or later and has 4 New Zealand ratings (3.8), with no traveller reviews.",
      ], ["Choose it for: DOC campsites near the next job", "Costs in your own currency", "iPhone only, iOS 26 or later"], undefined, true),
      s("2. SEEK and Trade Me: best for finding work", [
        "SEEK lists jobs across New Zealand and Australia and lets you apply with a saved profile. It rated 4.7 from 68,389 New Zealand ratings. Trade Me, New Zealand's main marketplace, carries jobs in its main app as well as rentals and cars, and rated 4.6 from 65,564; the older standalone Trade Me Jobs app has not been updated since 2024.",
        "Indeed (4.7 from 4,185) is a third source of listings. On any of them, read the listing for the hours and whether accommodation is offered, which matters more on a working holiday than the job title.",
      ], ["SEEK for most job types", "Trade Me for jobs, flats and cars", "Indeed as a third source"]),
      s("3. PickNZ: best for fruit and vegetable seasons", [
        "PickNZ is a job board for fruit and vegetable work, searchable by region and crop, so you can line up the next harvest as the current one ends. Check the start date, the expected hours and how pay is calculated in each listing before you travel to the region.",
        "We found no PickNZ app in the New Zealand App Store, so use the website. Some listings on it are for the Recognised Seasonal Employer scheme, which is a separate visa for workers from Pacific countries, not for working holiday makers.",
      ], ["Website, no app found", "Search by crop and region", "RSE listings are a different visa"]),
      s("4. WWOOF NZ and Workaway: best for work in exchange for a bed", [
        "WWOOF New Zealand connects volunteers with organic farms; online membership costs NZ$25 for one person or NZ$30 for a couple and lasts 15 months. WWOOF NZ says you need a working holiday visa to volunteer even without wages, so check the conditions on your own visa with Immigration New Zealand. The international WWOOF app had only 3 New Zealand ratings, so the website is the easier way in.",
        "Workaway covers hosts worldwide, including New Zealand, for a yearly membership from about US$59, depending on the plan; its app rated 4.8 from 144 New Zealand ratings. Both can stretch a budget a long way, but hours and conditions vary by host, so agree them before you arrive.",
      ], ["WWOOF NZ NZ$25 for 15 months", "Workaway from about US$59 a year", "Agree hours with the host"]),
      s("5. Wise and a New Zealand bank app: best for money", [
        "Wise moves money between currencies with a fee that starts at 0.22% of the amount, and its card gives 400 New Zealand dollars a month of free cash withdrawals, then 2.69% above that. It rated 4.8 from 23,432 New Zealand ratings and suits the first weeks before your bank account is running.",
        "Wages go into a New Zealand account. BNZ lets you apply from overseas, ASB does too depending on your country and visa, ANZ lets you open an account before you arrive and activate it at a branch, and Westpac's migrant team can set one up up to 180 days before you move in some circumstances. Their apps rated 4.8 (BNZ, 56,574), 4.7 (Westpac, 24,380), 4.0 (ANZ, 7,946) and 3.2 (ASB, 2,106). A New Zealand bank account also helps your IRD number application.",
      ], ["Wise for the first weeks", "Open a bank account early", "BNZ and Westpac apps rate highest"]),
      s("6. Skinny, 2degrees, Spark or One NZ: best for staying reachable", [
        "Employers ring, so a New Zealand number matters. Skinny's app rated 4.4 from 18,813 New Zealand ratings and Skinny sells 52-week prepaid plans from $296; 2degrees prepay starts from $8 a month; its main 2degrees NZ app rated 1.6 from 998, and its Data Clock prepay app 4.7 from 17,570. Spark's app rated 3.7 and One NZ's 2.0.",
        "Coverage away from towns varies by network, so check each provider's coverage map for the regions you expect to work in before choosing.",
      ], ["Skinny 52-week plans from $296", "2degrees prepay from $8 a month", "Check coverage where you will work"]),
      s("7. NZTA Waka Kotahi: best once you own a car", [
        "If you buy a car or van, for example through Trade Me, the NZ Transport Agency's app shows the vehicles registered to you, tracks registration and WoF expiry dates and your road user charges, and takes rego and RUC payments. It rated 4.8 from 581 New Zealand ratings.",
        "The AA's app (4.4 from 44) holds an AA membership card and Roadservice details if you join. Before buying, check the warrant of fitness and registration dates on the vehicle; our guide to WoF and registration explains both.",
      ], ["Rego, WoF and RUC in one app", "Check dates before you buy", "AA app for members"]),
      s("The official steps no app does for you", [
        "Apply for your IRD number on Inland Revenue's website through myIR; it is free, and new arrivals can usually expect it within two days by text or email. Inland Revenue may ask for a working New Zealand bank account or a customer due diligence form (IR997). Give your employer the number and a tax code on an IR330 form, because without one you are taxed at the 45% non-declaration rate.",
        "Know your conditions too. Since 20 April 2026 working holiday visas carry the condition that you must work for an employer, under an employment agreement or a contract for services, and you cannot employ other people. The adult minimum wage is $23.95 an hour from 1 April 2026 and applies to temporary migrants too. You cannot join KiwiSaver on a temporary or work visa, and holiday pay of 8% on each pay is only allowed for fixed-term work under 12 months or genuinely irregular work, agreed in your employment agreement.",
      ]),
      s("How we chose and checked", [
        "We picked the apps that handle the jobs every working holiday maker faces, favouring the most-used option in each category. Ratings come from the New Zealand App Store on 20 October 2026, fees from each provider's own page, and every rule from Immigration New Zealand, Inland Revenue or Employment New Zealand that day.",
        "Visa conditions, funds and lengths differ by passport, so read the page for your own country on immigration.govt.nz. We describe features as each provider does, and a feature not mentioned is not a claim that an app lacks it.",
      ]),
    ],
    sources: [
      { label: "Working holiday visas (Immigration New Zealand)", url: "https://www.immigration.govt.nz/visas/united-kingdom-working-holiday-visa/" },
      { label: "Employment conditions for open work visas from 20 April 2026", url: "https://www.immigration.govt.nz/about-us/news-centre/upcoming-changes-to-employment-conditions-for-open-work-visa-holders/" },
      { label: "IRD number for new arrivals (Inland Revenue)", url: "https://www.ird.govt.nz/managing-my-tax/ird-numbers/ird-numbers-for-individuals/new-arrival-to-new-zealand---ird-number-application" },
      { label: "Tax codes (Inland Revenue)", url: "https://www.ird.govt.nz/income-tax/income-tax-for-individuals/tax-codes-and-tax-rates-for-individuals/about-tax-codes" },
      { label: "Minimum wage rates (Employment New Zealand)", url: "https://www.employment.govt.nz/pay-and-hours/pay-and-wages/minimum-wage/minimum-wage-rates-and-types" },
      { label: "Pay-as-you-go holiday pay (Employment New Zealand)", url: "https://www.employment.govt.nz/pay-and-hours/pay-and-wages/leave-and-holiday-pay/pay-as-you-go-annual-holiday-payments" },
      { label: "Joining KiwiSaver (Inland Revenue)", url: "https://www.ird.govt.nz/kiwisaver/kiwisaver-individuals/joining-kiwisaver" },
      { label: "PickNZ", url: "https://www.picknz.co.nz/" },
      { label: "WWOOF New Zealand membership", url: "https://wwoof.nz/join" },
      { label: "Workaway membership sign-up", url: "https://www.workaway.info/en/signup/workawayer" },
      { label: "Wise New Zealand pricing", url: "https://wise.com/nz/pricing/" },
    ],
  }),

  a({
    slug: "money-saving-travel-apps-new-zealand",
    listicle: true,
    publishAt: "2026-11-01",
    title: "Best Apps to Save Money Travelling New Zealand in 2026",
    description: "The apps that cut the real costs of a New Zealand trip in 2026: cheaper nights, fuel, groceries, food deals, ferries and shared costs. Ratings, prices and deal terms checked October 2026.",
    category: "App guides",
    region: "New Zealand",
    places: ["DOC campsites", "Supermarkets", "Cook Strait ferries", "Auckland transport", "Moke Lake"],
    imageAlt: "Mountains reflected in the still water of Moke Lake near Queenstown, where DOC runs a campsite",
    related: ["new-zealand-travel-cost-2026", "fuel-price-apps-new-zealand", "camping-fees-new-zealand-2026"],
    intro:
      "Travelling New Zealand cost more in 2026 than a year before, and fuel led the rise: Stats NZ reported petrol up 24.3% and diesel up 55.8% in the year to September 2026, against 2.4% for food. MBIE's monitoring put regular petrol at 354.4 cents a litre on station price boards in the week dated 9 October 2026. The apps below go after the biggest costs of a trip in order of how much they can save, with ratings from the New Zealand App Store and deal terms from each company's own page, checked on 20 October 2026. We make KiwiCamping, which is first because accommodation is one of the largest daily costs of a trip and the bill it helps with; for everything else the other apps do the saving.",
    sections: [
      s("Money-saving apps at a glance", [
        "Cut the nightly bill with KiwiCamping's DOC campsite fees and cost filter, and the fuel bill with Gaspy. Load the loyalty app of the supermarket you use, and try Too Good To Go and First Table for cheaper meals. Rankers' deals and Interislander's promotion take a slice off ferries and activities, AT Mobile caps Auckland fares, and Splitwise or Tricount keeps a shared van fair.",
        "Most of these savings depend on terms that change. Read the current conditions in each app before a deal decides your plans.",
      ], undefined, {
        caption: "Checked 20 October 2026 on the New Zealand App Store and each company's own site. Ratings are New Zealand App Store averages with the number of ratings.",
        head: ["App", "What it saves on", "Price", "NZ rating"],
        rows: [
          ["KiwiCamping", "Nights at DOC campsites and the route", "Free to download, with in-app purchases", "3.8 (4)"],
          ["Gaspy", "Fuel, by finding the cheapest station", "Free; Gold NZ$1.69 a month", "4.0 (773)"],
          ["Club+ or Everyday Rewards", "Groceries and fuel discounts", "Free", "1.8 (682) / 2.2 (496)"],
          ["Grocer", "Comparing supermarket prices", "Free", "3.6 (128)"],
          ["Too Good To Go", "Unsold food from shops and cafes", "Free app; pay per bag", "4.9 (2,940)"],
          ["First Table", "Half-price food at early sittings", "Free app; booking fee", "4.9 (8,549)"],
          ["Rankers Camping NZ", "Ferry and activity discounts", "Free", "4.7 (3,322)"],
          ["AT Mobile", "Auckland public transport fares", "Free", "4.5 (32,728)"],
          ["Splitwise", "Sharing costs fairly", "Free; Pro in-app purchase", "4.4 (689)"],
        ],
      }),
      s("1. KiwiCamping: best for cutting the accommodation bill", [
        "DOC campsites are among the cheapest places to sleep in New Zealand, and KiwiCamping is built around DOC's data. In its August 2026 data it held 287 DOC campsites, and at the 208 with a published adult rate the fee ran from $5 to $25 a night, with a median of $12.75. A cost filter narrows the map by fee, and each place shows DOC's fee information in New Zealand dollars and, if you choose, your own currency. Where DOC lists a newer fee schedule with a start date, go by that one.",
        "Trips add up the distance between stops, which helps you spot a detour that costs more in fuel than it saves in fees. Place details stay on the phone without signal; map tiles, routing, weather and photos need a connection. It is iPhone only, needs iOS 26 or later and has 4 New Zealand ratings (3.8).",
      ], ["Choose it for: cheaper nights at DOC campsites", "Fees in your own currency", "iPhone only, iOS 26 or later"], undefined, true),
      s("2. Gaspy: best for the fuel bill", [
        "With petrol above $3.50 a litre on the boards, choosing the cheaper station in each town is the simplest saving on a road trip. Gaspy shows prices that its users report from the pump and confirm, and it can show your price after a loyalty discount you hold. Its 773 New Zealand ratings average 4.0, and the optional Gold tier costs NZ$1.69 a month.",
        "Our guide to fuel price apps compares Gaspy with the Z, bp, Waitomo and Gull apps and the supermarket fuel schemes in detail.",
      ], ["Choose it for: comparing fuel prices", "Free; Gold NZ$1.69 a month", "Pair it with one discount scheme"]),
      s("3. Supermarket apps and Grocer: best for groceries", [
        "Foodstuffs' Club+ replaced the New World Clubcard in 2026. It earns Club+ Dollars, each worth $1, at 0.75% of your spend at New World and 0.38% at Four Square; PAK'nSAVE shoppers can spend them but do not earn them. Club+ also gives fuel discounts. Woolworths' Everyday Rewards works the same way with points, vouchers and bp fuel discounts. Both apps are poorly rated on the New Zealand App Store, 1.8 from 682 for Club+ and 2.2 from 496 for Everyday Rewards, but the card works whether or not you like the app.",
        "Grocer, an independent app, compares grocery prices across the major supermarkets and keeps price history and shopping lists. It rated 3.6 from 128 New Zealand ratings and was last updated in December 2025, so treat its prices as a guide and check the shelf.",
      ], ["Club+ for New World and PAK'nSAVE", "Everyday Rewards for Woolworths", "Grocer to compare prices"]),
      s("4. Too Good To Go and Foodprint: best for cheap meals from food that would be wasted", [
        "Too Good To Go sells surprise bags of unsold snacks, meals and ingredients from shops, cafes, grocery stores and restaurants near you at a reduced price. It rated 4.9 from 2,940 New Zealand ratings; check how many stores take part where you are travelling before you count on it.",
        "Foodprint has a similar aim: partner eateries upload surplus and imperfect food each day at a discount, and you order and pay in the app. It rated 3.8 from 112 and was updated in August 2026.",
      ], ["Choose it for: cheaper food", "Bag contents vary", "Check local coverage"]),
      s("5. First Table: best for eating out for less", [
        "First Table books the first table of the night at participating restaurants with 50% off the food bill. You pay a booking fee to lock it in, which First Table says varies by restaurant and is not taken off the bill, and the discount covers food, not drinks.",
        "It rated 4.9 from 8,549 New Zealand ratings, the highest-rated app here. Early sittings suit a travel day that ends at a town before dark.",
      ], ["Choose it for: half-price food", "Booking fee per table", "Food only, not drinks"]),
      s("6. Rankers, GrabOne and the ferry deals: best for activities and the crossing", [
        "Rankers' free app offers 10% off Bluebridge Cook Strait crossings with the code RANKERS and its free digital card shown at check-in, and its activity listings carry discounts of 10% to 15%. GrabOne (4.6 from 3,717) sells discounted vouchers for activities, food and stays.",
        "Interislander's BoostSail promotion gives 15% off adult foot-passenger fares with the code BOOSTSAIL1 for bookings made between 21 September and 14 December 2026, and every leg must be travelled by 15 December 2026. It does not cover vehicles and cannot be combined with other offers. Check both ferry companies before booking a vehicle, since fares vary by sailing and season.",
      ], ["Rankers: 10% off Bluebridge", "BoostSail: foot passengers, travel by 15 December", "GrabOne for vouchers"]),
      s("Cheaper nights without an app", [
        "DOC sets the campsite fees: basic campsites are free, standard campsites cost $10 to $20 per adult a night, and serviced campsites $25 per adult unpowered. Individual campsites can differ, so check each one. Members of the New Zealand Motor Caravan Association pay $252 in the first year and can then stay at NZMCA Parks for $5 per adult a night.",
        "For hostels, Hostelworld (4.8 from 5,114) compares beds and YHA advertises a 10% saving for its members. A campervan relocation is the cheapest vehicle of all: Imoova lists them from $1 a day, though fuel is usually extra and the dates are fixed.",
      ]),
      s("Getting around and splitting costs", [
        "In Auckland, AT Mobile (4.5 from 32,728) tops up an AT HOP card, and Auckland Transport caps fares at $50 over seven days with AT HOP and at $20 a day with a contactless bank card. Plan around those caps for a city stay before or after the road trip.",
        "If you share a van, Splitwise (4.4 from 689) or Tricount (4.8 from 294) records who paid for what and settles up at the end, and TravelSpend (4.8 from 157) tracks spending against a daily budget. Wise (4.8 from 23,432) converts money from an overseas account with fees from 0.22%.",
      ]),
      s("How we chose and checked", [
        "We ranked the apps by the size of the cost they attack, starting with accommodation and fuel. Ratings come from the New Zealand App Store on 20 October 2026; deal terms, fees and caps come from each company's own page that day, and price data from MBIE and Stats NZ.",
        "Deals change often and some are seasonal. We describe each as the company does, and a feature not mentioned here is not a claim that an app lacks it.",
      ]),
    ],
    sources: [
      { label: "MBIE weekly fuel price monitoring", url: "https://www.mbie.govt.nz/building-and-energy/energy-and-natural-resources/energy-statistics-and-modelling/energy-statistics/weekly-fuel-price-monitoring" },
      { label: "Selected price indexes, September 2026 (Stats NZ)", url: "https://www.stats.govt.nz/information-releases/selected-price-indexes-september-2026/" },
      { label: "DOC campsite facilities and fees", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/facilities-and-fees/" },
      { label: "Club+ launch (Foodstuffs)", url: "https://www.foodstuffs.co.nz/news-room/2026/new-world-pak-nsave-four-square-launch-club---a-smarter-way-to-save-on-groceries" },
      { label: "First Table FAQ", url: "https://www.firsttable.co.nz/frequently-asked-questions" },
      { label: "Rankers ferry discount", url: "https://www.rankers.co.nz/member-info/offers/ferry-discount" },
      { label: "Interislander BoostSail promotion", url: "https://www.interislander.co.nz/book/promotions-and-deals/boostsail-promotion" },
      { label: "Auckland Transport bus and train fares", url: "https://at.govt.nz/bus-train-ferry/fares-and-discounts/bus-and-train-fares" },
      { label: "NZMCA membership", url: "https://www.nzmca.org.nz/join-us" },
      { label: "Imoova: what is a relocation", url: "https://imoova.com/what-is-a-relocation" },
    ],
  }),
  a({
    slug: "best-campsite-booking-apps-new-zealand",
    listicle: true,
    publishAt: "2026-11-04",
    title: "7 Best Campsite Booking Apps and Sites in New Zealand in 2026",
    description: "Where to book campsites, huts and holiday parks in New Zealand in 2026: the DOC booking system, holiday park chains, Campable, CamperMate, Rankers and WikiCamps compared. Checked October 2026.",
    category: "App guides",
    region: "New Zealand",
    places: ["DOC campsites", "DOC huts", "Great Walks", "Holiday parks", "Private land stays"],
    imageAlt: "Grassy campsite field below misty hills at Matata on the Bay of Plenty coast, seen from the DOC campsite",
    related: ["doc-campsites-new-zealand-guide", "doc-huts-new-zealand-guide", "holiday-parks-new-zealand-guide", "camping-fees-new-zealand-2026"],
    intro:
      "There is no single app that books every campsite in New Zealand. The Department of Conservation (DOC) books its own campsites, huts and Great Walks through a website, the holiday park chains book through theirs, and the camping apps add private land stays and links out to both. This list sorts out which one books what, with prices and ratings from the New Zealand App Store checked on 21 October 2026. KiwiCamping is ours, and it comes first only because choosing where to book is the step before any booking; it books nothing itself.",
    sections: [
      s("Campsite booking at a glance", [
        "Book DOC campsites, huts and Great Walks on the DOC booking site, holiday parks with the park or its chain, and private land stays through Campable. CamperMate, Rankers and WikiCamps list places and link out or book some of them, and KiwiCamping shows which DOC places can be booked and where.",
        "Most of the apps below are free to download, so the choice is about what each one can book, not about its price.",
      ], undefined, {
        caption: "Checked 21 October 2026 on the New Zealand App Store and each company's own site. Ratings are New Zealand App Store averages with the number of ratings.",
        head: ["App or site", "What it books", "Price", "NZ rating"],
        rows: [
          ["KiwiCamping", "Nothing itself: shows Book now links for BookIt stays and bookable DOC places", "Free to download, with in-app purchases", "3.8 (4)"],
          ["DOC booking system", "DOC campsites, huts and Great Walks", "Website; no booking app found", "Not applicable"],
          ["TOP 10 Holiday Parks", "Its 52 holiday parks", "App free; membership card NZ$55 for 2 years", "No NZ ratings yet"],
          ["Campable", "Private land stays set by local hosts", "App free; no guest booking fee", "4.5 (13)"],
          ["CamperMate", "Campsites, holiday parks and experiences", "Free; contains ads", "4.4 (606)"],
          ["Rankers Camping NZ", "Around 500 bookable campgrounds", "Free", "4.7 (3,322)"],
          ["WikiCamps New Zealand", "More than 1,000 sites in the app", "NZ$7.99 once", "4.5 (137)"],
        ],
      }),
      s("1. KiwiCamping: best for deciding where to book", [
        "KiwiCamping is a camping map built on DOC's own data. In its August 2026 data, 177 of 287 DOC campsites and 127 of 927 DOC huts are flagged as bookable, and each place page shows the fees, facilities and rules DOC lists, with a link out to book where booking is possible. BookIt stays and tours, including holiday parks, show a Book now button.",
        "It is not a booking marketplace: the booking happens on the partner's or DOC's own site, and the app never shows live availability. Place details stay on the phone without signal, but map tiles, routing, weather, photos and booking links need a connection.",
        "It is iPhone only (iOS 26 or later) and has 4 New Zealand ratings, averaging 3.8.",
      ], ["Choose it for: seeing what is bookable", "Links out to book", "iPhone only; no live availability"], undefined, true),
      s("2. The DOC booking system: best for huts, Great Walks and DOC campsites", [
        "DOC's booking website covers Great Walks, huts, campsites and lodges, cabins and cottages, and DOC says not all facilities can be booked. Bookings are first come, first served, with no waiting lists for full facilities, and they are open for stays up to 30 June 2027. Great Walk bookings for 2026/27 opened in stages from 12 May 2026, and DOC's upgraded system includes a virtual queue.",
        "Campsite bookings are required for all serviced campsites and some scenic and standard campsites in the peak season, usually 1 October to 30 April. Other campsites are first come, first served, paid at the self-registration stand, and you pay for a bookable campsite or hut when you book. From 1 November 2026, hut tickets for non-bookable backcountry huts will be sold through the booking system too.",
        "DOC's terms add a cancellation fee that rises as the date gets closer, up to the full amount in the last day. DOC also sells a Backcountry Hut Pass and a Campsite Pass, and a bookable campsite still needs a booking even with a pass. We found no DOC app for bookings, so this is a website.",
      ], ["Choose it for: DOC huts and Great Walks", "Pay when you book", "Website only; cancellation fees rise near the date"]),
      s("3. Holiday park chains: best for powered sites and facilities", [
        "TOP 10 Holiday Parks runs 52 parks in New Zealand and takes bookings on its website. Its membership card costs NZ$55 for 2 years and saves 10% on accommodation at all its parks, with terms. The free TOP 10 app holds the digital membership card and lets you view and manage bookings, but it has no New Zealand ratings yet, and its listing does not say you can make a new booking in it.",
        "Holiday Parks New Zealand, the industry association, lists 230 member parks with a search and a near-me tool but no booking flow or app. Each chain takes its own bookings, and our camping fees guide covers what parks charge.",
      ], ["Choose it for: powered sites in peak summer", "TOP 10 card NZ$55 for 2 years", "Each chain books separately"]),
      s("4. Campable: best for private land stays", [
        "Campable lists farms, vineyards, orchards, sports clubs and resorts whose hosts open a patch to self-contained vans, with some places confirming straight away and others asking the host first. It says it charges no guest booking fees, and for Instant Book stays made more than 14 days ahead it charges your card 14 days before the stay. It refunds in full if you cancel 6 or more days out (less the card fee), with 50% back for 1 to 5 days and none on the day, and its peak-season terms from 20 December to 15 January and on public holiday weekends are stricter.",
        "Its app is free, rated 4.5 from 13 New Zealand ratings on the App Store, while Google Play shows 2.6 from 57, so check recent reviews. Each host sets the vehicle rules, from certified self-contained vehicles only to portable toilets or tents, its coverage is host-driven, and you need a connection to book.",
      ], ["Choose it for: quiet private stays", "Hosts set vehicle rules", "Few ratings; Android lower"]),
      s("5. CamperMate: best free all-rounder with bookings", [
        "CamperMate is free, covers New Zealand and Australia, and its listing says you can check availability and make secure bookings, with campsites, holiday parks and experiences. You can download maps and place information to use without signal.",
        "It carries ads and rated 4.4 from 606 New Zealand ratings. Its booking links go to a BookIt NZ page on campermate.com, so read the booking terms before you pay.",
      ], ["Choose it for: free bookings and listings", "Downloadable maps", "Contains ads"]),
      s("6. Rankers Camping NZ: best for reviews with around 500 bookable campgrounds", [
        "Rankers is free and rated 4.7 from 3,322 New Zealand ratings. It lists around 500 bookable campground options, and DOC and some council sites link out to their own booking pages through Check Availability. Free sites have no in-app booking, and Rankers says it takes a small commission on bookings.",
        "Its campsite information works offline from day one, and detailed maps are a download, so get them over Wi-Fi before you leave town.",
      ], ["Choose it for: reviews and bookable sites", "Free", "Small commission on bookings"]),
      s("7. WikiCamps New Zealand: best for a large community list", [
        "WikiCamps New Zealand costs NZ$7.99 once on the App Store and lists more than 12,000 New Zealand sites, with an offline mode and no subscription. It says you can book from more than 1,000 sites directly in the app, and rated 4.5 from 137 New Zealand ratings; Google Play shows 3.0 from 1,042.",
        "Listings come from travellers and the booking company is not named on its pages, so confirm the details with the site before you rely on them.",
      ], ["Choose it for: a large list", "NZ$7.99 once", "Booking provider not named"]),
      s("Before you book anywhere", [
        "Check whether the place needs booking at all: basic DOC campsites are free, and most DOC huts are first come, first served. DOC campsite fees run from free at basic sites to $10 to $20 per adult at standard sites and $25 at serviced unpowered sites, with children 5 to 17 at half price and infants free.",
        "If you book a Great Walk, a hut or a peak-season campsite, keep the confirmation email, which is your proof of booking.",
      ]),
      s("How we chose and checked", [
        "We included the places a traveller can book a night through in New Zealand and judged each on what it books, what it charges and how it handles cancellations. Ratings, prices and features come from the New Zealand App Store and each company's own pages on 21 October 2026, and DOC's rules and fees from DOC's pages that day.",
        "Terms and availability change often. We describe each service as its owner does, and a feature not mentioned here is not a claim that an app lacks it.",
      ]),
    ],
    sources: [
      { label: "DOC: online bookings", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/online-bookings/" },
      { label: "DOC: booking and paying for a campsite", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/booking-and-paying/" },
      { label: "DOC: campsite facilities and fees", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/facilities-and-fees/" },
      { label: "DOC: booking and paying for a hut", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-in-a-hut/booking-and-paying/" },
      { label: "DOC: huts, campsites, cabins and lodges terms and conditions", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/bookings-terms-and-conditions/huts-campsites-cabins-and-lodges-terms-and-conditions/" },
      { label: "DOC: Great Walk bookings open from 12 May", url: "https://www.doc.govt.nz/news/media-releases/2026-media-releases/ready-set-naturing-doc-great-walk-hut-and-campsite-bookings-open-from-12-may/" },
      { label: "TOP 10 Holiday Parks", url: "https://top10.co.nz" },
      { label: "Holiday Parks New Zealand", url: "https://holidayparks.co.nz" },
      { label: "Campable: payments, cancellation and guest FAQ", url: "https://www.campable.com/faq-guest" },
      { label: "Rankers Camping NZ: about", url: "https://camping-nz.rankers.co.nz/about" },
      { label: "WikiCamps New Zealand", url: "https://wikicamps.co.nz" },
      { label: "CamperMate", url: "https://campermate.com" },
    ],
  }),
  a({
    slug: "campable-alternatives",
    listicle: true,
    publishAt: "2026-11-05",
    title: "6 Best Campable Alternatives for New Zealand Camping in 2026",
    description: "Looking past Campable? KiwiCamping, CamperMate, WikiCamps, Rankers, DOC and holiday parks compared on price, booking and offline use, with when Campable is still the right pick. Checked October 2026.",
    category: "App guides",
    region: "New Zealand",
    places: ["Private land stays", "DOC campsites", "Holiday parks", "Freedom camping", "Campervans"],
    imageAlt: "A white campervan parked in a grassy paddock below native forest on the West Coast of the South Island",
    related: ["best-nz-camping-apps", "best-campsite-booking-apps-new-zealand", "self-contained-campervan-green-warrant", "free-camping-apps-new-zealand"],
    intro:
      "Campable is a marketplace for private land: farms, orchards, vineyards and sports clubs whose hosts open a patch to campervans and motorhomes, with each host setting the vehicle rules. It does that one job well, and people look for alternatives when they want public sites, free sites or a bigger list. KiwiCamping is ours and heads this list as a planning tool, not a private-land marketplace, and each entry says what it does better than Campable and what it does not. Prices and ratings are from the New Zealand App Store and each company's own site, checked on 21 October 2026.",
    sections: [
      s("Campable alternatives at a glance", [
        "For public camping and a trip plan, start with KiwiCamping or CamperMate. For a large list of sites, WikiCamps; for local reviews, Rankers; for conservation land, DOC's own booking site.",
        "Campable is the one built around instant booking on hosted private land, so some travellers keep it for the odd night on a farm and use another app for the rest.",
      ], undefined, {
        caption: "Checked 21 October 2026 on the New Zealand App Store and each company's own site. Ratings are New Zealand App Store averages with the number of ratings.",
        head: ["App or site", "Best for", "Price", "NZ rating"],
        rows: [
          ["Campable", "Private land stays set by local hosts", "App free; no guest booking fee", "4.5 (13)"],
          ["KiwiCamping", "DOC places and a dated trip plan", "Free to download, with in-app purchases", "3.8 (4)"],
          ["CamperMate", "A free all-rounder, NZ and Australia", "Free; contains ads", "4.4 (606)"],
          ["WikiCamps New Zealand", "A large list of sites", "NZ$7.99 once", "4.5 (137)"],
          ["Rankers Camping NZ", "Reviews of welcome overnight spots", "Free", "4.7 (3,322)"],
          ["DOC booking system", "Conservation-land campsites and huts", "Website; fees per DOC", "Not applicable"],
          ["Holiday park booking", "Powered sites and facilities", "TOP 10 card NZ$55 for 2 years", "Not applicable"],
        ],
      }),
      s("1. KiwiCamping: best for public sites and a trip plan", [
        "Where Campable lists private hosts, KiwiCamping maps public ones: DOC campsites and huts, holiday parks, dump stations and DOC's freedom-camping notices, with filters for water, toilets, showers, power, dogs, vehicle access and fees. A trip lets you order stops with dates, see the drive time between them and keep a checklist.",
        "It does not book private land and has no live availability: BookIt stays and tours and bookable DOC places show a link out to book. Place details are stored on the phone, so they stay readable without signal, while map tiles, routing, weather and photos need a connection.",
        "KiwiCamping is iPhone only (iOS 26 or later) and new, with 4 New Zealand ratings averaging 3.8.",
      ], ["Choose it for: public sites and a trip plan", "No private-land booking", "iPhone only; few ratings"], undefined, true),
      s("2. CamperMate: best free all-rounder", [
        "CamperMate is free and covers New Zealand and Australia, with campsites, holiday parks, freedom-camping spots, dump stations and toilets, reviews and photos, and bookings you can check and make in the app. Its listing says you can download maps and use it without an internet connection.",
        "It rated 4.4 from 606 New Zealand ratings and carries ads. Part of its data is contributed by travellers, so check a site's details before you rely on it.",
      ], ["Choose it for: a free app that works offline", "Contains ads", "Traveller-contributed data"]),
      s("3. WikiCamps New Zealand: best for a large list", [
        "WikiCamps New Zealand costs NZ$7.99 once on the App Store, with no subscription, and lists more than 12,000 New Zealand sites with traveller reviews, photos and fee details. It includes a trip planner and an offline mode, and says you can book from more than 1,000 sites in the app.",
        "It rated 4.5 from 137 New Zealand ratings, with 3.0 from 1,042 on Google Play. Listings are written by travellers, and the bookable ones are about 1,000 of its 12,000.",
      ], ["Choose it for: a large list", "NZ$7.99 once, no subscription", "Mostly user-written listings"]),
      s("4. Rankers Camping NZ: best for local reviews", [
        "Rankers is free and the most-rated camping app on the New Zealand store, with 4.7 from 3,322 ratings. It lists places where the local community has said overnight stays are welcome, with more than 108,000 traveller reviews that its team reads, and around 500 bookable campground options.",
        "Its campsite information works offline from the day you install it, and detailed maps download over Wi-Fi. It earns commissions on bookings and activity deals and from campervan hire, at no extra cost to you, and it lists about 1,500 places against WikiCamps' 12,000.",
      ], ["Choose it for: vetted, welcome sites", "Free", "Fewer places than WikiCamps"]),
      s("5. DOC's booking site: best for conservation land", [
        "DOC books Great Walks, huts, campsites and lodges on its own website, and we found no DOC app for it. Standard campsites cost $10 to $20 per adult a night, serviced ones $20 to $28 and basic ones are free, and most of DOC's roughly 950 huts are first come, first served.",
        "It has no private land and takes bookings mainly online, but you pay DOC's published prices with no marketplace in between. Our booking guide compares it with the other options.",
      ], ["Choose it for: DOC huts and campsites", "Official prices", "No private land"]),
      s("6. Holiday parks: best for powered sites and facilities", [
        "A park offers powered sites, kitchens and showers, and a booking secures your place. TOP 10 Holiday Parks has 52 parks, books on its website, and sells a membership card for NZ$55 for 2 years that saves 10% on accommodation, and its free app holds the card.",
        "Holiday Parks New Zealand lists 230 member parks. Each chain takes its own bookings, though CamperMate also books some parks.",
      ], ["Choose it for: powered sites", "Chain by chain", "TOP 10 card saves 10%"]),
      s("When Campable is still the better choice", [
        "Choose Campable for a quiet night on a farm, orchard or vineyard with a host to meet, and instant booking on real availability for some places. Its price is shown up front with no guest booking fee, though cancellations inside six days lose at least half, and peak-season terms from 20 December to 15 January and on public holiday weekends are stricter.",
        "Campable says each host chooses the vehicle rules, so check a listing for whether it needs a green self-containment warrant, accepts a portable toilet or takes tents. Apple's rating of 4.5 from 13 sits beside Google Play's 2.6 from 57, so read recent reviews. Hipcamp lists private land in New Zealand on its website, but we found no Hipcamp app in the New Zealand App Store.",
      ], ["Private land with a host", "Hosts set vehicle rules", "Cancel 6 days out for a refund"]),
      s("How we chose and checked", [
        "We picked the options a Campable user is most likely to compare it with, and checked their price, rating, version and features on the New Zealand App Store and each company's own site on 21 October 2026. Campable's terms come from its payments and cancellation pages.",
        "Terms change often, so read a service's current conditions before you pay. Leaving a feature out of this list is not a claim that the app lacks it.",
      ]),
    ],
    sources: [
      { label: "Campable: guest FAQ", url: "https://www.campable.com/faq-guest" },
      { label: "Campable: payments", url: "https://www.campable.com/payments" },
      { label: "Campable: cancellation policy", url: "https://www.campable.com/cancellation-policy" },
      { label: "Rankers Camping NZ: about", url: "https://camping-nz.rankers.co.nz/about" },
      { label: "WikiCamps New Zealand", url: "https://wikicamps.co.nz" },
      { label: "CamperMate", url: "https://campermate.com" },
      { label: "DOC: online bookings", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/online-bookings/" },
      { label: "DOC: campsite facilities and fees", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/facilities-and-fees/" },
      { label: "TOP 10 Holiday Parks", url: "https://top10.co.nz" },
      { label: "Holiday Parks New Zealand", url: "https://holidayparks.co.nz" },
      { label: "Hipcamp: New Zealand camping", url: "https://www.hipcamp.com/en-AU/d/new-zealand/camping/all" },
    ],
  }),
  a({
    slug: "best-tramping-great-walks-apps-new-zealand",
    listicle: true,
    publishAt: "2026-11-06",
    title: "7 Best Tramping and Great Walks Apps for New Zealand in 2026",
    description: "The best apps for tramping and the Great Walks in New Zealand in 2026: DOC hut and track data, offline topo maps, trip plans and mountain weather, compared with prices and ratings checked October 2026.",
    category: "App guides",
    region: "New Zealand",
    places: ["Great Walks", "DOC huts", "DOC tracks", "Topo maps", "Mountain weather"],
    imageAlt: "A snow-dusted A-frame hut shelter at Harris Saddle on the Routeburn Track",
    related: ["doc-huts-new-zealand-guide", "doc-hut-rules-etiquette", "new-zealand-severe-weather-camping", "best-weather-apps-new-zealand"],
    intro:
      "A tramp needs three things from your phone: where the hut or track is, a topographic map that works with no signal, and a weather forecast you can trust. No one app does all three well, and the Department of Conservation (DOC) books Great Walks and huts on a website, not in an app. This list covers the apps trampers use in 2026, with prices and ratings from the New Zealand App Store checked on 21 October 2026. KiwiCamping is ours, and it comes first for hut and track information only; it is not a topo map.",
    sections: [
      s("Tramping apps at a glance", [
        "Use KiwiCamping for DOC hut, track and campsite details, Plan My Walk for alerts and sharing your trip plan, and one topo app for the map you carry. Add MetService or the mountain forecasts DOC links to for weather, and book Great Walks on DOC's site.",
        "The topo apps below store maps on the phone, which is what keeps them useful when there is no signal.",
      ], undefined, {
        caption: "Checked 21 October 2026 on the New Zealand App Store and each organisation's own site. Ratings are New Zealand App Store averages with the number of ratings.",
        head: ["App", "Best for", "Price", "NZ rating"],
        rows: [
          ["KiwiCamping", "DOC huts, tracks and campsites", "Free to download, with in-app purchases", "3.8 (4)"],
          ["Plan My Walk", "Alerts and trip plans to share", "Free", "4.6 (612)"],
          ["NZ Topo50", "Offline topo maps, one island each", "NZ$6.99 per island", "4.4 (161) and 4.5 (225)"],
          ["NZ Topo Maps", "LINZ Topo50 and Topo250 downloads", "Free; extra sheets NZ$14.99", "4.3 (1,746)"],
          ["TrailTreks", "Free offline topo maps with DOC huts", "Free; PLUS NZ$13.99 a year", "4.4 (8)"],
          ["AllTrails", "Trail reviews and recording", "Free; Plus from NZ$35.99", "4.8 (5,198)"],
          ["MetService", "Official forecasts and warnings", "Free", "2.4 (1,126)"],
        ],
      }),
      s("1. KiwiCamping: best for DOC huts, tracks and campsites on your route", [
        "KiwiCamping holds 927 DOC huts, 1,453 DOC tracks and 287 DOC campsites in its August 2026 data. A hut page shows its status, bunks, fees and facilities and links to DOC's page, and a track page shows distance, time, grade and an elevation profile. Of those places, 127 huts and 177 campsites are flagged as bookable and link out to book, and 33 of the huts are on Great Walks.",
        "You can add huts and campsites to a trip with dates and see the drive time between stops, and the weather shown on a place is from Apple Weather. Place details are kept on the phone and open without signal, while the map, routing, weather and photos need a connection.",
        "It is not a topographic map or a navigation app, so carry one of the apps below as your map. KiwiCamping is iPhone only (iOS 26 or later) and has 4 New Zealand ratings averaging 3.8.",
      ], ["Choose it for: hut and track details", "Not a topo map", "iPhone only; few ratings"], undefined, true),
      s("2. Plan My Walk: best for alerts and sharing your trip plan", [
        "Plan My Walk comes from the Mountain Safety Council and is free. It lists more than 3,000 tracks, huts and campsites, shows alerts from DOC and local councils and forecasts from MetService, and has gear lists and a trip planner that sends your plan to an emergency contact. A free account is needed for trip plans. It rated 4.6 from 612 New Zealand ratings.",
        "Its developer says the app works offline with an eligible satellite plan; without one, you download a PDF of your trip plan to read offline. It does not describe offline maps, so pair it with a topo app.",
      ], ["Choose it for: alerts and trip plans", "Free", "Offline needs a satellite plan or a PDF"]),
      s("3. NZ Topo50: best for offline topo maps with no subscription", [
        "NZ Topo50 sells complete LINZ Topo50 coverage of one island at NZ$6.99, with the North Island and South Island as separate apps. Its listing says you need no phone or wifi signal, and it includes DOC huts, campgrounds, tracks, GPS, track recording and GPX import. It rated 4.4 from 161 ratings for the North Island and 4.5 from 225 for the South Island.",
        "You pay twice if you walk on both islands, but the maps ship inside the app and there is no subscription.",
      ], ["Choose it for: maps that ship in the app", "NZ$6.99 per island", "No subscription"]),
      s("4. NZ Topo Maps: best for downloading just the sheets you need", [
        "NZ Topo Maps is free and pulls Topo250 and Topo50 maps from the LINZ data service, so you download only the areas you need. It shows DOC huts and campsites with the latest alerts and imports GPX files, and extra map sheets cost NZ$14.99 with a Routes option at NZ$6.99. It rated 4.3 from 1,746 ratings.",
        "iHikeGPS NZ is a one-off alternative at NZ$4.99 using official LINZ topo maps, with no ads or subscription, though it has only 28 ratings.",
      ], ["Choose it for: choosing your own sheets", "Free to start", "Extra sheets are paid"]),
      s("5. TrailTreks: best free option, with few ratings", [
        "TrailTreks is free with no ads, and its listing says its NZ topo maps work offline, with every DOC hut, campsite and track, DOC alert notifications, MetService severe weather warnings and location sharing. A PLUS plan costs NZ$1.49 a month or NZ$13.99 a year.",
        "It has only 8 New Zealand ratings, averaging 4.4, and its first release was in September 2025, so it has a short track record.",
      ], ["Choose it for: a free offline start", "PLUS NZ$13.99 a year", "New, 8 ratings"]),
      s("6. AllTrails: best for reviews and recording", [
        "AllTrails is a global trail app with reviews, recordings and more than 500,000 trails, free with Plus listed from NZ$35.99, and offline map downloads need Plus. It rated 4.8 from 5,198 New Zealand ratings.",
        "Its listing says reviews and photos come from its community and does not mention DOC alerts, so check DOC for closures and conditions.",
      ], ["Choose it for: reviews and recording", "Offline maps need Plus", "Check DOC for closures"]),
      s("7. MetService and mountain forecasts: best for the weather", [
        "MetService is New Zealand's official weather service, and its free app is rated 2.4 from 1,126 New Zealand ratings. DOC says MetService provides the brief and extended New Zealand mountain forecasts on its website, and that anyone going into the mountains should also check the New Zealand Avalanche Advisory. The app's listing does not mention mountain forecasts, so use the website for them.",
        "Mountain-Forecast.com covers New Zealand peaks such as Aoraki Mount Cook, but it is not an official New Zealand source.",
      ], ["Choose it for: official warnings", "Mountain forecasts are on its website", "Rated 2.4 from 1,126"]),
      s("Great Walks and huts: booking and prices", [
        "DOC lists eleven Great Walks, and bookings are open for stays to 30 June 2027 through its online system. Great Walk bookings for 2026/27 opened from 12 May 2026 with a virtual queue, and the Hump Ridge Track is booked through its own trust's website. Summer hut fees differ for New Zealand residents and international visitors on some tracks: on the Routeburn an adult hut night is $88 for residents and $132 for international visitors, and DOC says it will make random checks.",
        "Outside the Great Walks, DOC's Backcountry Hut Pass costs $160 for an adult and $80 for a child for 12 months and does not give you preference to a bunk at non-bookable huts. Backcountry Hut Tickets cost $15 for a standard hut adult night, and from 1 November 2026 they will be sold through DOC's online booking system.",
      ], ["11 Great Walks", "Resident and international rates", "Hut Pass $160 an adult"]),
      s("Plan the trip, then carry a way to call for help", [
        "DOC's Land Safety Code says to choose the right trip for you, understand the weather, pack warm clothes and extra food, share your plans and take ways to get help, and take care of yourself and each other. It says telling a trusted person your trip details and taking a distress beacon can save your life.",
        "The Mountain Safety Council recommends always taking another communication device, especially on trips into remote areas, and says a 406 MHz personal locator beacon must be registered with the Rescue Coordination Centre New Zealand. It also says the 111 number cannot accept calls from data-enabled apps, and that a phone call is not enough when you leave your trip intentions.",
      ]),
      s("How we chose and checked", [
        "We picked the apps trampers use for huts, maps, trip plans and weather, and dropped apps with no updates for years or with too few ratings to judge. Prices, ratings and versions come from the New Zealand App Store on 21 October 2026, and rules and fees from DOC, the Mountain Safety Council and LINZ.",
        "Prices and features change, and some apps here are new. A feature not mentioned is not a claim that an app lacks it.",
      ]),
    ],
    sources: [
      { label: "DOC: Great Walks", url: "https://www.doc.govt.nz/parks-and-recreation/things-to-do/walking-and-tramping/great-walks/" },
      { label: "DOC: Great Walks pricing", url: "https://www.doc.govt.nz/about-us/our-role/managing-conservation/recreation-management/great-walks-management/pricing/" },
      { label: "DOC: Backcountry Hut Pass", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-in-a-hut/booking-and-paying/backcountry-hut-pass/" },
      { label: "DOC: Backcountry Hut Tickets", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-in-a-hut/booking-and-paying/backcountry-hut-tickets/" },
      { label: "DOC: weather and mountain forecasts", url: "https://www.doc.govt.nz/parks-and-recreation/know-before-you-go/weather/" },
      { label: "DOC: Land Safety Code", url: "https://www.doc.govt.nz/safety" },
      { label: "Mountain Safety Council: Plan My Walk", url: "https://www.mountainsafety.org.nz/discover/plan-my-walk" },
      { label: "Mountain Safety Council: communications and personal locator beacons", url: "https://www.mountainsafety.org.nz/learn/skills/communications" },
      { label: "Mountain Safety Council: leaving trip intentions", url: "https://www.mountainsafety.org.nz/learn/skills/leaving-trip-intentions" },
      { label: "LINZ: where to find maps", url: "https://www.linz.govt.nz/products-services/maps/where-find-maps" },
      { label: "NZ Topo50, South Island", url: "https://nztopo50.sqrl.net/" },
      { label: "TrailTreks: NZ Topo Maps", url: "https://trailtreks.nz/app" },
    ],
  }),
  a({
    slug: "best-dump-station-apps-new-zealand",
    listicle: true,
    publishAt: "2026-11-07",
    title: "6 Best Dump Station Apps and Sites for New Zealand in 2026",
    description: "The best apps and sites for finding a campervan dump station in New Zealand in 2026: NZMCA, Rankers, CamperMate, WikiCamps, thl Roadtrip and KiwiCamping compared on price and offline use. Checked October 2026.",
    category: "App guides",
    region: "New Zealand",
    places: ["Dump stations", "Campervans", "Self-contained vehicles", "Councils"],
    imageAlt: "A roadside rest area on the shore of Lake Taupō with a picnic table and a parked car",
    related: ["camping-wastewater-rubbish-new-zealand", "self-contained-campervan-green-warrant", "freedom-camping-rules-new-zealand", "free-camping-apps-new-zealand"],
    intro:
      "Emptying a campervan toilet is a daily job on a New Zealand trip, and we found no app in the New Zealand App Store built only for New Zealand dump stations. The practical answer is a camping app, the NZMCA's directory or a council's own page. This list compares the options with prices and ratings from the New Zealand App Store checked on 21 October 2026, then gives the rules from official sources. We make KiwiCamping, which has a dump station layer, and we say what it leaves out.",
    sections: [
      s("Dump station apps at a glance", [
        "Use a camping app for the route and a council or NZMCA list to confirm a station before you rely on it. NZMCA's app needs a membership, Rankers and CamperMate are free, WikiCamps costs NZ$7.99 once, and KiwiCamping is free to download with in-app purchases.",
        "None of the lists is complete, and fees and opening times change, so treat a listing as a starting point.",
      ], undefined, {
        caption: "Checked 21 October 2026 on the New Zealand App Store and each organisation's own site. Ratings are New Zealand App Store averages with the number of ratings.",
        head: ["App or site", "Dump station data", "Price", "NZ rating"],
        rows: [
          ["KiwiCamping", "262 dump stations with fee notes and facilities", "Free to download, with in-app purchases", "3.8 (4)"],
          ["NZMCA App", "Directory with dump stations, recycling and water", "App free; membership NZ$252 first year", "No NZ ratings yet"],
          ["Rankers Camping NZ", "Public and holiday park dump stations", "Free", "4.7 (3,322)"],
          ["CamperMate", "Dump stations, toilets and Wi-Fi", "Free", "4.4 (606)"],
          ["WikiCamps New Zealand", "Dump points among 12,000 sites", "NZ$7.99 once", "4.5 (137)"],
          ["thl Roadtrip", "Dump stations near you, for hire customers", "Free", "4.6 (122)"],
        ],
      }),
      s("1. KiwiCamping: best for planning dump stations into a route", [
        "KiwiCamping maps 262 dump stations in its August 2026 data, drawn from community-sourced listings, and those listings show 240 as free, 8 as asking a donation, 6 as charging a fee and 8 with no fee noted. A record has the name, address, fee note, facilities such as toilets, a water tap and a bin, and the coordinates, and you can add one to a trip beside DOC campsites and holiday parks.",
        "Place details open without signal because they are stored on the phone, but map imagery, routing, weather and photos need a connection. Our dump station guide has the regional counts and how to use a station.",
        "The app runs on iPhone only (iOS 26 or later), and its 4 New Zealand ratings average 3.8.",
      ], ["Choose it for: stations on a planned route", "Fee note on each record", "iPhone only; few ratings"], undefined, true),
      s("2. NZMCA App: best for members with a self-contained vehicle", [
        "The New Zealand Motor Caravan Association's app is for members: joining costs NZ$252 in the first year, made up of a NZ$150 joining fee and a NZ$102 annual subscription, and the NZMCA says the membership includes the app and its Travel Directory. The directory shows dump stations, recycling spots, laundromats and water refill stations, and NZMCA Parks cost $5 per adult a night.",
        "Anything you drive or tow must be certified self-contained to use the benefits. The iPhone app had no New Zealand ratings when we checked and the Android app rated 3.2 from 156 reviews on Google Play. NZMCA says the app is only available to download on devices with their country set to New Zealand.",
      ], ["Choose it for: NZMCA members", "Membership NZ$252 first year", "Certified self-contained vehicles"]),
      s("3. Rankers Camping NZ: best free app with dump stations", [
        "Rankers is free and rated 4.7 from 3,322 New Zealand ratings, the most ratings among the camping apps we compared. Its listing says it covers more than 1,500 campsites and 6,600 places in all, including dump stations, water refills and LPG, and all public and holiday park dump stations.",
        "It works offline straight out of the box, and each review is read by a person on its team. Its camping spots are ones the community has approved, so use it with a council list for rural stations.",
      ], ["Choose it for: free and well reviewed", "Works offline", "Approved places only"]),
      s("4. CamperMate: best free app that also shows toilets and Wi-Fi", [
        "CamperMate is free and covers New Zealand and Australia. Its listing says you can find dump stations, public toilets, Wi-Fi spots and supermarkets, and download maps and place information to use without an internet connection. Its New Zealand average is 4.4 from 606 ratings, and Google Play marks it as containing ads.",
        "We could not find a published count of its dump stations.",
      ], ["Choose it for: a free offline all-rounder", "Contains ads", "No dump station count"]),
      s("5. WikiCamps New Zealand: best for a large community list", [
        "WikiCamps New Zealand costs NZ$7.99 once, has an offline mode, and lists more than 12,000 sites that include dump points among its filters. It rated 4.5 from 137 New Zealand ratings, with 3.0 on Google Play.",
        "Its listings come from travellers and it publishes no dump point count, so check a station with the council if it matters, as you would with any community list.",
      ], ["Choose it for: a large list for one price", "NZ$7.99 once", "Community-written listings"]),
      s("6. thl Roadtrip: best for thl hire customers", [
        "Tourism Holdings' free thl Roadtrip app, which Britz and Mighty Campers describe for their hirers, finds the nearest campsites, holiday parks, petrol stations, dump stations, toilets and LPG for New Zealand and Australia. It rated 4.6 from 122 New Zealand ratings.",
        "The iPhone version was last updated in June 2025, and Mighty Campers says its app is powered by CamperMate, so another camping app is a useful second check.",
      ], ["Choose it for: thl hire vans", "Free", "Last updated June 2025"]),
      s("Council and NZMCA lists", [
        "Councils publish their own stations, and fees vary. Waitaki District Council lists free dump stations at north Oamaru, east Omarama and Mill Reserve in Palmerston, and at its lakes camping grounds it is free with a camping ground ticket and otherwise $5 by donation box. Hurunui District Council lists stations at Amberley Beach, Cheviot, Culverden, Hanmer Springs and Waikari and suggests checking the CamperMate app or an AA map for private ones.",
        "NZMCA says dump stations are typically built in accordance with NZ Standard 5465:2001. Vehicle certification now runs under the Plumbers, Gasfitters and Drainlayers (Self-Contained Vehicles) Regulations 2023.",
      ], ["Waitaki: free at several sites", "Hurunui: five listed stations", "Check the council before you go"]),
      s("The rules that sit behind a dump station", [
        "Since 7 June 2026 only a green-warrant vehicle counts as self-contained, and the old blue warrant cannot be used for freedom camping. The requirements do not apply at a campground, holiday park or private property. The 2023 regulations require a wastewater system that stores greywater and blackwater and a way to dispose of wastewater hygienically to an appropriate outfall.",
        "Depositing waste while freedom camping carries an $800 infringement fee, with a court maximum of $2,400. See our freedom camping rules guide for where the fine applies.",
      ], ["Green warrant since 7 June 2026", "$800 fine for depositing waste", "Use a dump station"]),
      s("How we chose and checked", [
        "We included the apps and lists that show dump stations in New Zealand and left out US-focused dump apps, apps with no updates for years and apps with too few ratings to judge. Prices, ratings and versions come from the New Zealand App Store on 21 October 2026, and rules and fines from the legislation and each council's own page.",
        "Fees, counts and opening times change, and we describe each service as its owner does. A feature not mentioned here is not a claim that an app lacks it.",
      ]),
    ],
    sources: [
      { label: "NZMCA: join us", url: "https://www.nzmca.org.nz/join-us" },
      { label: "NZMCA: dump stations", url: "https://www.nzmca.org.nz/dump-stations" },
      { label: "NZMCA: the NZMCA app", url: "https://www.nzmca.org.nz/the-nzmca-app" },
      { label: "Waitaki District Council: caravan and campervan dump stations", url: "https://waitaki.govt.nz/our-facilities/camping/Pages/caravanandcampervandumpstations.aspx" },
      { label: "Hurunui District Council: campervan and caravan dump stations", url: "https://www.hurunui.govt.nz/recreation/campervancaravan-dump-stations" },
      { label: "Plumbers, Gasfitters and Drainlayers Board: self-contained vehicles", url: "https://www.pgdb.co.nz/self_contained_vehicles/private_vehicle_owners/" },
      { label: "Plumbers, Gasfitters, and Drainlayers (Self-Contained Vehicles) Regulations 2023", url: "https://www.legislation.govt.nz/secondary-legislation/pco-drafted/2023/217/en/latest/" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/secondary-legislation/pco-drafted/2023/136/en/latest/" },
      { label: "Britz: thl Roadtrip app", url: "https://www.britz.com/nz/en/travel-info/britz-roadtrip-app" },
      { label: "Mighty Campers: travel app", url: "https://www.mightycampers.com/nz/en/travel-info/travel-app" },
      { label: "Rankers Camping NZ: about", url: "https://camping-nz.rankers.co.nz/about" },
      { label: "WikiCamps New Zealand", url: "https://wikicamps.co.nz/" },
    ],
  }),
  a({
    slug: "best-south-island-road-trip-apps-new-zealand",
    listicle: true,
    publishAt: "2026-11-08",
    title: "7 Best Apps for a South Island Road Trip in 2026",
    description: "The best apps and official sources for a New Zealand South Island road trip in 2026: trip planning, road and weather warnings, fuel, campsites and huts, compared with prices and ratings checked October 2026.",
    category: "App guides",
    region: "New Zealand",
    places: ["Milford Road", "West Coast", "Mackenzie Country", "Queenstown", "Marlborough"],
    imageAlt: "Golden tussock slopes above Lake Pukaki with Aoraki Mount Cook and the Southern Alps beyond",
    related: ["south-island-two-week-road-trip", "best-weather-apps-new-zealand", "winter-driving-new-zealand-campervan", "one-lane-bridges-gravel-roads-new-zealand"],
    intro:
      "A South Island road trip has long gaps between towns, mountain passes that close in bad weather and campsites that fill up early in summer, so the apps that matter are the ones that tell you what is open, what the weather is doing and where you can sleep. This list covers seven, with official sources for roads and warnings, using prices and ratings from the New Zealand App Store checked on 21 October 2026. KiwiCamping is ours, and it leads as the trip planner; the road and weather information comes from the agencies that publish it.",
    sections: [
      s("South Island road trip apps at a glance", [
        "Plan the nights and the route in KiwiCamping, check roads on NZTA's Journey Planner and weather on MetService, compare fuel in Gaspy and find a place to stay with CamperMate or Rankers. DOC's alerts page covers closures on conservation land.",
        "The road and weather sources are official websites or agency apps; an app can tell you where a campsite is, but the agencies that run the roads and the weather publish the closures and warnings.",
      ], undefined, {
        caption: "Checked 21 October 2026 on the New Zealand App Store and each agency's own site. Ratings are New Zealand App Store averages with the number of ratings.",
        head: ["App or site", "Best for", "Price", "NZ rating"],
        rows: [
          ["KiwiCamping", "A dated trip plan with DOC places", "Free to download, with in-app purchases", "3.8 (4)"],
          ["NZTA Journey Planner", "Road closures, roadworks and cameras", "Free website", "Not applicable"],
          ["MetService", "Weather warnings and rain radar", "Free", "2.4 (1,126)"],
          ["Gaspy", "Crowd-sourced fuel prices", "Free; optional subscription NZ$1.69 a month", "4.0 (783)"],
          ["CamperMate", "Free offline maps and listings", "Free; contains ads", "4.4 (606)"],
          ["Rankers Camping NZ", "Reviews of welcome overnight spots", "Free", "4.7 (3,322)"],
          ["Plan My Walk", "Short walks, alerts and trip plans", "Free", "4.6 (612)"],
        ],
      }),
      s("1. KiwiCamping: best for planning the nights and the drive", [
        "KiwiCamping puts DOC campsites and huts, holiday parks and dump stations on one map, with fees, facilities and rules for each. In its August 2026 data the South Island's DOC regions hold 44 campsites in Marlborough, 37 in Nelson Tasman, 30 in Otago, 22 in Canterbury, 14 on the West Coast, 13 in Fiordland and 5 in Southland, and many more huts.",
        "Its road-trip guides include Picton to Christchurch via Kaikōura, Christchurch to Tekapo and Aoraki, Queenstown to Glenorchy and the West Coast, each with a route on the map, a forecast and notes on what to book ahead. You can add stops with dates to a trip and see the drive time between them.",
        "Place details stay on the phone without signal, but map tiles, routing, weather and photos need a connection, so check NZTA for road closures. It is iPhone only (iOS 26 or later) with 4 New Zealand ratings averaging 3.8.",
      ], ["Choose it for: a dated route with DOC places", "Check NZTA for road closures", "iPhone only; few ratings"], undefined, true),
      s("2. NZTA Journey Planner: best for road closures and roadworks", [
        "NZTA's Journey Planner is a website, not an app, and shows travel times, traffic cameras and updates on delays, roadworks and road closures. NZTA says its route suggestions come from Google, and there may be closures or unplanned events on state highways that make the route shown unsuitable, so check the map before you travel.",
        "For local roads, NZTA tells you to check with the local or regional council. Our guide to one-lane bridges and gravel roads covers the driving side. The separate NZTA Waka Kotahi app is for licences and registration, not live traffic.",
      ], ["Choose it for: closures and roadworks", "Check the map before you travel", "Website, not an app"]),
      s("3. MetService: best for weather warnings", [
        "MetService is New Zealand's official weather service. Its free app shows severe weather warnings and watches, a rain radar and live traffic cameras for urban locations. It rated 2.4 from 1,126 New Zealand ratings, and its website carries the mountain forecasts.",
        "DOC points to MetService for mountain forecasts and says anyone going into the mountains should also check the New Zealand Avalanche Advisory. Our guide to weather apps compares it with the other options.",
      ], ["Choose it for: official warnings", "Rated 2.4 from 1,126", "Mountain forecasts on its website"]),
      s("4. Gaspy: best for fuel on the long stretches", [
        "Gaspy shows crowd-sourced fuel prices and is free, with an optional subscription at NZ$1.69 a month. It rated 4.0 from 783 New Zealand ratings.",
        "On the Milford Road, DOC says there are no shops or fuel stations between Te Anau and Milford Sound, and to have a full tank before leaving Te Anau. A return trip from Te Anau is 240 km, and DOC says an eight-hour day is needed if you plan to take in the sights, short walks and a boat cruise.",
      ], ["Choose it for: comparing fuel prices", "Full tank at Te Anau", "Crowd-sourced prices"]),
      s("5. CamperMate: best free all-rounder with offline maps", [
        "CamperMate is free and covers New Zealand and Australia, with campsites, holiday parks, dump stations, toilets and Wi-Fi, and its listing says you can download maps and use it without an internet connection. It rated 4.4 from 606 New Zealand ratings and shows ads.",
        "On long stretches such as the West Coast, downloaded maps matter more than live data, so download the region before you leave town.",
      ], ["Choose it for: maps without signal", "Contains ads", "Download before the long stretches"]),
      s("6. Rankers Camping NZ: best for reviews of welcome overnight spots", [
        "Rankers is free, and its 3,322 New Zealand ratings average 4.7. It lists places where the local community has said overnight stays are welcome, with traveller reviews that its team reads, and its campsite information works offline from the start.",
        "Detailed maps are a download, so get them over Wi-Fi first, and it lists fewer places than WikiCamps.",
      ], ["Choose it for: vetted overnight spots", "Free", "Fewer places"]),
      s("7. Plan My Walk: best for short walks and sharing your plan", [
        "Plan My Walk is the Mountain Safety Council's free app, with alerts from DOC and local councils, forecasts from MetService and a trip planner that sends your plan to an emergency contact. It rated 4.6 from 612 New Zealand ratings.",
        "It works offline with an eligible satellite plan, and without one you download a PDF of your trip plan first.",
      ], ["Choose it for: walks and trip plans", "Free", "Offline needs a satellite plan or PDF"]),
      s("The Milford Road and the mountain passes", [
        "DOC says the Milford Road has public toilets only at Te Anau, Knob's Flat and Milford, that snow chains may be required and can be rented in Te Anau, and that drivers should check the status of State Highway 94. The section between the Hollyford Road junction and The Chasm is a Restricted No Stopping Zone because it is an avalanche area, and DOC says to take a bus if you are not confident driving in winter conditions.",
        "DOC adds that dogs are not allowed in the national park. Check road status before you leave and again at your last town.",
      ], ["Chains may be required", "No stopping in the avalanche zone", "Check SH94 status"]),
      s("How we chose and checked", [
        "We picked the tools a South Island driver uses for the trip plan, roads, weather, fuel and places to stay, and checked their price, rating and features on the New Zealand App Store on 21 October 2026. Road, weather and Milford Road information comes from NZTA, MetService and DOC.",
        "Warnings and conditions change by the hour, so use these tools to plan and the agencies to decide. If an app has a feature we do not mention, that is an omission, not a claim.",
      ]),
    ],
    sources: [
      { label: "NZTA Waka Kotahi: Journey Planner", url: "https://www.journeys.nzta.govt.nz/" },
      { label: "DOC: Milford Road tips for drivers", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/places-to-go/milford-road-milford-sound-area/milford-road-tips-for-drivers/" },
      { label: "DOC: alerts", url: "https://www.doc.govt.nz/parks-and-recreation/know-before-you-go/alerts/" },
      { label: "DOC: weather and mountain forecasts", url: "https://www.doc.govt.nz/parks-and-recreation/know-before-you-go/weather/" },
      { label: "MetService: severe weather warnings", url: "https://about.metservice.com/about-severe-weather-warnings" },
      { label: "MetService", url: "https://www.metservice.com/apps" },
      { label: "Gaspy", url: "https://www.gaspy.nz/" },
      { label: "Mountain Safety Council: Plan My Walk", url: "https://www.mountainsafety.org.nz/discover/plan-my-walk" },
      { label: "Rankers Camping NZ: about", url: "https://camping-nz.rankers.co.nz/about" },
      { label: "CamperMate", url: "https://campermate.com" },
    ],
  }),
  a({
    slug: "roadtrippers-alternatives",
    listicle: true,
    publishAt: "2026-12-27",
    title: "6 Best Roadtrippers Alternatives for New Zealand in 2026",
    description: "Roadtrippers plans road trips well but knows little about NZ campsites. KiwiCamping, CamperMate, Wanderlog, Furkot, Google Maps and WikiCamps compared on stops, camping data and price. Checked October 2026.",
    category: "App guides",
    region: "New Zealand",
    places: ["State highways", "DOC campsites", "Holiday parks", "Campervans", "Cook Strait"],
    imageAlt: "State Highway 6 near Haast Pass, a sealed road running through bush with mountains beyond",
    related: ["road-trip-planner-apps-new-zealand", "best-nz-camping-apps", "campermate-alternatives", "plan-trip-kiwicamping"],
    intro:
      "Roadtrippers is a trip planner built around stops, and its own site says its location database covers the United States, Canada, New Zealand and Australia. People leave it for a New Zealand camping trip for practical reasons: its free plan is capped at 3 stops, and a campervan itinerary needs DOC campsite fees, holiday parks and dump stations more than it needs a long list of roadside attractions. KiwiCamping is ours, so it comes first here, and each entry says what it does well, what it does not, and who should pick another app. Prices and features are taken from each company's own pages, checked on 28 October 2026.",
    sections: [
      s("Roadtrippers alternatives at a glance", [
        "For a camping trip with a night-by-night plan, try KiwiCamping. For a big list of sites with bookings, CamperMate or WikiCamps; for a planner that works for any kind of trip, Wanderlog or Furkot; for turn-by-turn driving alone, Google Maps.",
        "Roadtrippers stays the better pick if you are also planning a drive in the United States and want one app for both, or if you like its Autopilot itineraries and shared trips.",
      ], undefined, {
        caption: "Checked 28 October 2026 on each company's own site. Prices are those the companies list; the table gives only what a page states.",
        head: ["App", "Best for", "Price", "Stops on a trip"],
        rows: [
          ["KiwiCamping", "Camping nights and DOC places", "Free to download, with in-app purchases", "Ordered stops with dates and notes"],
          ["CamperMate", "Finding and booking campsites", "Not stated on its site", "Itineraries"],
          ["Wanderlog", "Group trips and mixed travel", "Free version, Pro tier", "Itinerary and map together"],
          ["Furkot", "Long routes with daily limits", "Not stated on its site", "Planned by daily travel time"],
          ["Google Maps", "Turn-by-turn driving", "Free", "Up to 9 stops per route"],
          ["WikiCamps NZ", "A large list of sites", "One-off purchase listed as $9.99 AUD per platform", "Trip planner with wishlists"],
          ["Roadtrippers (for comparison)", "Autopilot itineraries", "Free; paid plans $35.99 to $59.99 a year", "3 free; 20, 50 or 150 on paid plans"],
        ],
      }),
      s("1. KiwiCamping: best for camping nights and DOC places", [
        "KiwiCamping plans a trip as a sequence of nights. You save places as you research, then put the ones you choose into a trip with their order, dates, a note on each stop and a to-do list, and the trip shows the total distance and the forecast at each place. The place data covers New Zealand only, with 287 DOC campsites, 927 DOC huts and 1,453 DOC tracks in the app's data, alongside holiday parks and DOC's freedom camping notices.",
        "That focus is what Roadtrippers lacks for a campervan. Filters narrow the map by water, toilets, showers, power, dogs, vehicle access and fees, and a place page keeps the details DOC publishes. Place details, saved places and guides still open with no signal; the map tiles, routing, weather and photos need it.",
        "The limits are plain. It runs on iPhone only, it covers New Zealand and nothing else, it does not reorder your stops into the shortest route, and it hands off to a maps app for turn-by-turn directions. It is free to download, with in-app purchases.",
      ], ["Best for: nights, fees and DOC places", "iPhone only, New Zealand only", "Use a maps app to navigate"], undefined, true),
      s("2. CamperMate: best for finding and booking campsites", [
        "CamperMate describes itself as a way to find and book campsites, holiday parks and experiences in New Zealand and Australia, and its site mentions offline maps and more than 70,000 points of interest. Listings carry badges such as Same Day Booking and Instant Book, so it suits a traveller who wants to book a site from the same screen they found it on.",
        "Its site does not say whether the app is free or what a paid tier costs, so check that before you rely on it. It also links to itineraries without describing how they work, which leaves the trip-planning side less clear than its booking side.",
      ], ["Best for: booking a site in the app", "Covers New Zealand and Australia", "Check the price on its own page"]),
      s("3. Wanderlog: best for group and mixed trips", [
        "Wanderlog puts the itinerary and the map on one screen. Its site lists route optimisation based on the places you choose, offline access, an AI assistant, real-time collaboration, budgeting, reservation import from email and packing checklists. That mix makes it the closest match to Roadtrippers' shared trips, with the difference that it plans any kind of travel, not only road trips.",
        "It has no camping layer for New Zealand, so check DOC fees and booking rules on DOC's own site. The site describes a free version and a paid Pro, but the pricing page could not be read when this guide was checked, so look at it before you commit.",
      ], ["Best for: groups, budgets and bookings", "Route optimisation", "No NZ camping data"]),
      s("4. Furkot: best for long routes with daily limits", [
        "Furkot calls itself a road trip planner that plans the route in the most efficient way and lets you set daily limits on travel time, after which it suggests overnight stops along the route. You can drag stops around, reverse the itinerary and add meals, fuel and attractions. Its lodging search lists hotels, campgrounds and apartments.",
        "The site does not state a price, the platforms it runs on or whether it works offline, and it shows campground partners from North America rather than New Zealand. It is a strong planning tool for a long drive, but it needs a New Zealand camping source beside it.",
      ], ["Best for: daily travel-time limits", "Suggests overnight stops", "Price and offline use not stated"]),
      s("5. Google Maps: best for the drive itself", [
        "Google Maps handles directions for a leg and accepts up to 9 stops in a single route, according to Google's help page, which is enough for a day or two but not a three-week loop. It has no nights, dates or notes in the route, and it is not a source of DOC fees.",
        "Pair it with a planner. Download the offline area for each region before you leave town, because Google says offline directions work only when the whole route lies inside a downloaded area.",
      ], ["Best for: turn-by-turn directions", "9 stops per route", "Download areas before remote legs"]),
      s("6. WikiCamps New Zealand: best for a large list of sites", [
        "WikiCamps' own site says it has over 12,000 sites, covering campgrounds, hostels, caravan parks, dump points and showers, with wishlists, itineraries, a trip planner and an offline mode. It lists a one-off purchase of $9.99 AUD per platform, and says you can book from more than 1,000 sites in the app.",
        "Entries are mostly added by travellers, so quality varies by place. It is the closest like-for-like option to KiwiCamping when you want a camping planner, and the trade-off is a user-built list instead of DOC's published data.",
      ], ["Best for: the largest list", "One-off price listed in AUD", "Mostly traveller-added listings"]),
      s("Roadtrippers itself", [
        "Roadtrippers' homepage says it plans trips from what it has learned in over 42 million trips, with 5 million points of interest, an Autopilot itinerary tool, trip sharing, offline maps and live traffic. Stop limits are 3 on Free, 20 on Basic, 50 on Pro and 150 on Premium, and the paid plans are listed at $35.99, $49.99 and $59.99 a year.",
        "Its examples are American, so New Zealand details such as DOC campsite fees are not something its pages describe. Treat it as a good planner with thin New Zealand camping data and check the details that decide a night on DOC and council sites.",
      ], ["Free plan: 3 stops", "Paid plans from $35.99 a year", "Examples are American"]),
      s("How these apps were chosen", [
        "The list covers planners a New Zealand traveller is likely to meet when searching for a Roadtrippers replacement, with at least one that is built for camping. Each fact comes from the developer's own site or help page, read on 28 October 2026. Features are described as the companies describe them, so a feature not mentioned here is not a claim that an app lacks it.",
        "KiwiCamping is ours, and that is why it comes first. The reasons are the DOC data and the dated trip plan, and the entry above says where another app suits you better.",
      ]),
    ],
    sources: [
      { label: "Roadtrippers", url: "https://roadtrippers.com/" },
      { label: "Roadtrippers: about", url: "https://roadtrippers.com/about/" },
      { label: "CamperMate", url: "https://campermate.com" },
      { label: "Wanderlog", url: "https://wanderlog.com/" },
      { label: "Furkot", url: "https://trips.furkot.com/" },
      { label: "Google Maps: add multiple destinations", url: "https://support.google.com/maps/answer/144339" },
      { label: "Google Maps: download areas for offline use", url: "https://support.google.com/maps/answer/6291838" },
      { label: "WikiCamps", url: "https://wikicamps.co.nz/" },
    ],
  }),


  a({
    slug: "hipcamp-alternatives",
    listicle: true,
    publishAt: "2027-01-02",
    title: "7 Best Hipcamp Alternatives in New Zealand in 2026",
    description: "Hipcamp lists private land, holiday parks and campsites on the web. KiwiCamping, Campable, CamperMate, WikiCamps, Rankers, DOC and holiday parks compared on price, booking and offline use, with when Hipcamp is still the better pick.",
    category: "App guides",
    region: "New Zealand",
    places: ["Private land stays", "DOC campsites", "Holiday parks", "Freedom camping", "Tents and campervans"],
    imageAlt: "An orange tent on a grassy campsite beside a DOC sign at Māori Beach on Stewart Island",
    related: ["campable-alternatives", "best-campsite-booking-apps-new-zealand", "best-nz-camping-apps", "doc-campsites-new-zealand-guide"],
    intro:
      "Hipcamp is a booking site for private land, holiday parks and campsites, and its New Zealand page lists more than 3,300 places for tents, campervans and lodging. People look for alternatives when they want a phone app, public and free sites, or a planner that links the nights together. The publisher of this guide makes KiwiCamping, so it is listed first with reasons, and each entry says what it does better than Hipcamp and what it does worse. Prices and ratings are from the New Zealand App Store and each company's own site, checked on 21 October 2026, and Hipcamp's own page was read on 28 October 2026.",
    sections: [
      s("Hipcamp alternatives at a glance", [
        "For public camping and a dated trip plan, start with KiwiCamping. For a similar private-land booking marketplace made for campervans, Campable is the closest match, and for a free all-round app, CamperMate.",
        "WikiCamps suits a very large list of sites, Rankers local reviews of welcome places, DOC's website conservation-land campsites and huts, and a holiday park a powered bed that is certain.",
      ], undefined, {
        caption: "Checked 21 October 2026 on the New Zealand App Store and each company's own site. Ratings are New Zealand App Store averages with the number of ratings.",
        head: ["App or site", "Best for", "Price", "NZ rating"],
        rows: [
          ["Hipcamp", "Private land, holiday parks and campsites booked on the web", "Browsing is free; check fees at booking", "No NZ App Store listing"],
          ["KiwiCamping", "DOC places and a dated trip plan", "Free to download, with in-app purchases", "3.8 (4)"],
          ["Campable", "Instant-book private land for campervans", "App free; no guest booking fee", "4.5 (13)"],
          ["CamperMate", "A free all-rounder, NZ and Australia", "Free; contains ads", "4.4 (606)"],
          ["WikiCamps New Zealand", "A large list of sites", "NZ$7.99 once", "4.5 (137)"],
          ["Rankers Camping NZ", "Reviews of welcome overnight spots", "Free", "4.7 (3,322)"],
          ["DOC booking system", "Conservation-land campsites and huts", "Website; fees per DOC", "Not applicable"],
          ["Holiday park booking", "Powered sites and facilities", "TOP 10 card NZ$55 for 2 years", "Not applicable"],
        ],
      }),
      s("1. KiwiCamping: best for public sites and a dated trip plan", [
        "Hipcamp is built around hosts and bookings, while KiwiCamping is built around the route: a map of DOC campsites, huts and tracks, holiday parks, dump stations, day-use areas and DOC's freedom camping notices, with filters for water, toilets, showers, power, dogs, vehicle access and fees. A trip puts each night on a date, shows the distance between stops and carries a checklist.",
        "It is not a marketplace for private land and has no live availability. Stays and tours through BookIt and the DOC places that are open to booking send you to the partner or to DOC to book. Place details are saved on the phone, so they read without reception, while map tiles, routing, weather and photos need a connection.",
        "The app is for iPhone, needs iOS 26 or later, and is new, so its rating rests on 4 New Zealand reviews that average 3.8.",
      ], ["Choose it for: public sites and a trip plan", "No private-land booking", "iPhone only; few ratings"], undefined, true),
      s("2. Campable: best for private land booked for a campervan", [
        "Campable is the closest in spirit to Hipcamp's private-land listings. Hosts of farms, orchards and vineyards open a patch to campervans and motorhomes, some places book instantly and others ask the host first, and the price shown is the price paid, with no guest booking fee.",
        "It wants a certified self-contained vehicle, hosts choose the other rules, and cancellations inside six days lose at least half. The iPhone listing rates 4.5 from 13 New Zealand ratings, while Google Play shows a lower score from more reviews, so read recent comments.",
      ], ["Choose it for: instant-book private land", "Self-contained vehicles", "Strict late cancellation"]),
      s("3. CamperMate: best free all-rounder", [
        "CamperMate costs nothing, covers New Zealand and Australia, and lists campsites, holiday parks, freedom camping spots, dump stations and toilets with reviews and photos. Its listing says maps can be downloaded for use without an internet connection, and bookings can be checked and made in the app.",
        "It carries ads and has 4.4 from 606 New Zealand ratings. Some of its places are added or corrected by travellers, so confirm a site's rules before you drive to it.",
      ], ["Choose it for: a free app with downloadable maps", "Contains ads", "Traveller-added places"]),
      s("4. Rankers Camping NZ: best for local reviews", [
        "Rankers is free and has the biggest rating base of any New Zealand camping app, 4.7 from 3,322 reviews. It focuses on places where the local community has said overnight stays are welcome, backed by more than 108,000 traveller reviews that its team reads, and it adds about 500 campgrounds you can book.",
        "Campsite information works offline from the day you install it, and map packs download over Wi-Fi. It earns commission on bookings and activity deals at no extra cost to you, and its list of roughly 1,500 places is shorter than WikiCamps'.",
      ], ["Choose it for: places that are welcome", "Free", "Shorter list than WikiCamps"]),
      s("5. WikiCamps New Zealand: best for the longest list", [
        "WikiCamps costs NZ$7.99 once on the New Zealand App Store with no subscription. It lists over 12,000 sites with traveller reviews, photos and fee notes, includes a trip planner and an offline mode, and says more than 1,000 sites can be booked inside the app.",
        "It has 4.5 from 137 New Zealand ratings and a lower Google Play score from over a thousand. Listings are written by users, so a site's details can lag, and the bookable sites are a small part of the whole.",
      ], ["Choose it for: the longest list", "NZ$7.99 once", "User-written listings"]),
      s("6. DOC's booking website: best for conservation land", [
        "DOC books Great Walk huts and campsites, other huts, standard and serviced campsites and lodges through its own website, and offers no app for it. Standard campsites cost $10 to $20 an adult a night, serviced ones $20 to $28, and basic ones are free; most of the roughly 950 huts are first come, first served.",
        "There is no private land on it and no marketplace in between, so you pay DOC's published prices. The booking guide on this site compares it with the other routes.",
      ], ["Choose it for: DOC huts and campsites", "Official prices", "Website, not an app"]),
      s("7. Holiday parks: best for powered sites and facilities", [
        "A holiday park gives powered sites, kitchens and showers, and a booking holds the spot for a busy summer night. TOP 10 Holiday Parks runs 52 parks, takes bookings on its website and sells a membership card for NZ$55 over 2 years that takes 10% off accommodation, and Holiday Parks New Zealand represents 230 member parks.",
        "Each chain or park books for itself, and Hipcamp also lists some holiday parks, so the same bed can turn up in more than one place at different prices. Compare the total at checkout before you pay.",
      ], ["Choose it for: certainty and power", "Chain by chain", "Compare totals at checkout"]),
      s("When Hipcamp is still the better choice", [
        "Choose Hipcamp for browsing private land, holiday parks and campsites in one place on a laptop or phone browser, with photos, filters for tents, RVs, lodging, pets, toilets and showers, and guest ratings shown as a percentage. Its New Zealand page lists 3,302 places, a larger set than the private-land marketplaces and a mix of hosted land and commercial parks.",
        "Hipcamp's iPhone app is listed in the United States App Store, but no New Zealand listing turned up on 28 October 2026, so a New Zealand traveller books through the site. The page did not state guest fees or cancellation terms, so read them at checkout, and check that a listing's host and vehicle rules suit your rig.",
      ], ["Private land and parks in one place", "3,302 NZ listings on its page", "Read fees and terms at checkout"]),
      s("How the list was chosen and checked", [
        "The list covers the options a Hipcamp user is most likely to compare it with: another private-land marketplace, three directory apps, DOC's official booking and holiday parks. Price, rating, version and features came from the New Zealand App Store and each company's own pages on 21 October 2026, and Hipcamp's New Zealand page was read on 28 October 2026.",
        "Terms change often, so read a service's current conditions before paying. Leaving a feature out of an entry is not a claim that the app lacks it.",
      ]),
    ],
    sources: [
      { label: "Hipcamp: New Zealand camping", url: "https://www.hipcamp.com/en-AU/d/new-zealand/camping/all" },
      { label: "Campable: guest FAQ", url: "https://www.campable.com/faq-guest" },
      { label: "Campable: payments", url: "https://www.campable.com/payments" },
      { label: "Campable: cancellation policy", url: "https://www.campable.com/cancellation-policy" },
      { label: "Rankers Camping NZ: about", url: "https://camping-nz.rankers.co.nz/about" },
      { label: "WikiCamps New Zealand", url: "https://wikicamps.co.nz" },
      { label: "CamperMate", url: "https://campermate.com" },
      { label: "DOC: online bookings", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/online-bookings/" },
      { label: "DOC: campsite facilities and fees", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/facilities-and-fees/" },
      { label: "TOP 10 Holiday Parks", url: "https://top10.co.nz" },
      { label: "Holiday Parks New Zealand", url: "https://holidayparks.co.nz" },
    ],
  }),
];
