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
    related: ["best-nz-camping-apps", "rankers-alternatives", "campermate-alternatives"],
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
          ["Windy.com", "Wind, gusts and comparing models", "Free; Premium in-app purchase", "4.8 (9,058)"],
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
        "Windy shows more than 15 weather models side by side, including the European ECMWF model, on animated maps of wind, gusts, rain and cloud. That is useful when forecasts disagree: if the models agree on a southerly change, plan around it; if they do not, keep the plan flexible. It rated 4.8 from 9,058 New Zealand ratings.",
        "It is free, with a Premium in-app purchase that adds hourly forecasts, a longer outlook and longer radar loops. It does not issue New Zealand warnings, so pair it with MetService.",
      ], ["Choose it for: wind, gusts and model comparisons", "Free; Premium optional", "No official NZ warnings"]),
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
      "Fuel has become one of the biggest costs of a New Zealand road trip in 2026. MBIE's weekly monitoring put regular 91 at 354.4 cents a litre on the price boards in the week dated 9 October 2026, against 260.6 cents a year earlier, and diesel at 323.8 cents before road user charges. At those prices it pays to know both where fuel is cheapest and which discounts you hold, so the best setup is one app that shows prices and one or two that cut them. We make KiwiCamping, a camping app that does not track fuel prices, so it is not ranked here; it appears at the end only for the planning job it can help with.",
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
        "KiwiCamping does not show fuel prices, so it is not on the list above. What it does show is distance: a trip in KiwiCamping gives the distance and drive time between stops, and a collection of saved places shows the furthest gap between them, which tells you where the long, empty legs are and where to fill up before them.",
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
];
