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
    imageAlt: "DOC sign at the entrance to Waiohine Gorge in Tararua Forest Park",
    related: ["best-nz-camping-apps", "rankers-alternatives", "freedom-camping-rules-new-zealand"],
    intro:
      "CamperMate has been a default download for campervan travellers in New Zealand and Australia for years, and it is still free, translated into 27 languages and able to download its maps for use without signal. The searches for an alternative have a recent cause: a redesign that several reviewers on the New Zealand App Store have disliked since late 2025, and ads in the Android version. We checked the apps worth switching to on 20 October 2026. KiwiCamping is ours, so read its place at the top with that in mind: we set out the reasons, and the trips where one of the others is the better swap.",
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
        "thl Roadtrip, from Tourism Holdings, shows campsites, holiday parks, petrol stations and dump stations near you in New Zealand and Australia, free. Its New Zealand App Store average was 4.7 across 122 ratings.",
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
    imageAlt: "Camp fees sign asking for a donation at Lake Tūtira campsite, Hawke's Bay",
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
          ["CamperMate", "Free or paid filter; freedom spots beside campsites", "Free; ads on Android", "4.4 (606)"],
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
        "It is free, with ads in the Android version, and rated 4.4 from 606 New Zealand App Store ratings. Its maps and place information download for use without signal.",
      ], ["Best for: comparing free and paid nearby", "Free; ads on Android", "Read each place for self-contained rules"]),
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
];
