import { makeArticle as a, type Article, type ArticleSection } from "@/lib/article-model";

const s = (heading: string, body: string[], tips?: string[]): ArticleSection => ({ heading, body, tips });

/**
 * Articles already published on campingapp.nz. Each carries the exact path it ranks on today, so the
 * rebuild keeps that URL rather than moving the page to /guides/<slug>. Content here is the existing
 * page carried forward and extended, not a replacement.
 */
export const legacyOnlyArticles: Article[] = [
  a({
    slug: "best-nz-camping-apps",
    legacyPath: "/best-nz-camping-apps.html",
    title: "Best Camping Apps NZ 2026: Rankers, CamperMate, WikiCamps",
    description: "Five New Zealand camping apps compared on price, data source, offline use and strengths, checked October 2026: KiwiCamping, Rankers, CamperMate and more.",
    category: "App guides",
    region: "New Zealand",
    readTime: 13,
    places: ["DOC campsites", "Council freedom camping areas", "Holiday parks", "Private land stays", "Dump stations"],
    imageAlt: "Camping app open on a phone beside a New Zealand campsite",
    intro:
      "Five apps come up most often for New Zealand camping trips: Rankers Camping NZ, CamperMate, WikiCamps New Zealand, Campable and KiwiCamping, which is ours. They differ more than their store pages suggest. Rankers and CamperMate are free and earn from bookings and deals, WikiCamps charges once on the App Store and also takes bookings, Campable books private land, and KiwiCamping sells a pass for its DOC and planning features. The table compares what each one costs, where its data comes from and what still works without signal, as checked on 19 October 2026, and the sections below say who each one suits.",
    comparison: {
      asOf: "19 October 2026",
      caption: "Five NZ camping apps side by side",
      note: "Prices are from each app's New Zealand App Store listing in NZD, checked on the date below. Data sources and offline features are as each developer describes them on its listing or website; check the listing for changes before you rely on one.",
      columns: ["Price", "Platforms", "Where the data comes from", "Without signal", "Best at"],
      rows: [
        { label: "KiwiCamping", cells: ["Free download; DOC places, dump stations and guides need the in-app Premium pass. BookIt stays and tours are free.", "iPhone", "DOC data for campsites, huts, tracks and freedom camping notices, plus BookIt holiday parks and tours", "Place details are stored on the phone; map tiles, routing and weather need signal", "DOC campsites and huts with fees and booking status, and an ordered trip planner"] },
        { label: "Rankers Camping NZ", cells: ["Free, no in-app purchases; funded by campground bookings and activity deals", "iPhone, iPad, Android and web", "Rankers' own list of 1,500+ places to stay, with 108,000+ traveller reviews checked by staff", "Campsite information works offline", "Reviews and local notes on legal places to stay"] },
        { label: "CamperMate", cells: ["Free, no in-app purchases on iPhone; funded by bookings, deals, advertising and paid business listings", "iPhone, iPad and Android", "Campsites, holiday parks, freedom camping spots and services in NZ and Australia, with community reviews and photos", "Download maps and information for offline use", "Services such as toilets, Wi-Fi and dump stations, in 27 languages"] },
        { label: "WikiCamps New Zealand", cells: ["NZ$7.99 one-off on the App Store; on Android a free download with a one-time in-app unlock; also takes bookings", "iPhone, iPad and Android", "Community-contributed listings, 12,000+ sites", "Offline mode downloads the data you need", "Detailed filters and a trip planner with a fuel estimate"] },
        { label: "Campable", cells: ["Free app; pay per night in the app with no guest booking fees, and Campable takes a commission from hosts", "iPhone and Android", "Hosts' own listings of private land such as vineyards, farms and orchards", "Arrival details work offline once booked", "Booking private sites, with a self-contained or non-self-contained filter"] },
      ],
    },
    sections: [
      s("What matters in a New Zealand camping app", [
        "Four things separate a useful app from a directory. The first is whether place details open without reception, because large parts of the West Coast, Fiordland, the East Cape and inland Otago have no usable signal at exactly the moment you need to choose a site. The second is whether the app tells you who says you may stay: a council bylaw, a DOC notice, a campground or a private host. That is what an infringement notice is written against.",
        "The third is trip planning that survives a changed plan: ordered stops, saved alternatives and notes attached to the right place. The fourth is how the app makes its money, because a tool funded by bookings has a reason to show you bookable places first. Weigh these against your own trip rather than against a feature count.",
      ], ["Open a place in flight mode before you leave", "Ask who authorises each site", "Know how the app is funded"]),
      s("KiwiCamping", [
        "KiwiCamping is built on DOC's own data: campsites with their category, fee and whether they take bookings, huts with bunks and fees, tracks, and DOC's freedom camping notices showing where camping on conservation land is prohibited or restricted. Dump stations sit on the same map, and holiday parks and tours come from BookIt and can be booked in the app. Saved places become an ordered trip with distance, dates, notes and to-dos on each stop.",
        "The limits are worth stating plainly. It is iPhone only. Place details are stored on the phone, but map tiles, routing, weather and photos need a connection. DOC's notices cover conservation land, not council bylaws, so check the council for town and roadside sites. Only BookIt stays and tours are free; DOC campsites, huts, dump stations, the notices and the guides need the Premium pass, sold as a one-off purchase or week by week in the App Store.",
      ]),
      s("Rankers Camping NZ", [
        "Rankers is a New Zealand-owned app that has collected camping information since 2007. It lists \"over 1500 places you can stay, including those where the local community has said you're welcome\", and more than 108,000 traveller reviews that its own staff read and check. If you want to know which end of a campground is quietest before a two-hour detour, its co-owner's on-the-ground notes cover exactly that.",
        "It is free with no in-app purchases, and its listing says the campsite information works offline from the first launch. Rankers pays its way through around 500 bookable campgrounds and more than 150 activity deals, which it is open about. Treat a review as colour rather than as the current rule: a bylaw or DOC notice can change after the review was written.",
      ]),
      s("CamperMate", [
        "CamperMate covers New Zealand and Australia, and it is the official travel partner of the Apollo, Maui, Britz and Mighty rental brands, so many hire campervans come with it suggested. Beyond campsites and holiday parks it maps dump stations, public toilets, Wi-Fi and supermarkets, and it runs in 27 languages, which helps visitors who would rather not plan in English.",
        "It is free, funded by bookings, deals, advertising and paid business listings, and you can download maps and information for offline use. With this many categories, its filters are the way to cut the map down to one thing, and much of the detail comes from community reviews, photos and updates, so confirm anything legally significant with the council or DOC.",
      ]),
      s("WikiCamps New Zealand", [
        "WikiCamps New Zealand costs NZ$7.99 once on the App Store, with no subscription; on Android it is a free download with a one-time in-app unlock. It lists more than 12,000 sites contributed and kept up to date by its users, with detailed filters, collections, a trip planner that estimates fuel spend, and bookings for many sites inside the app. An offline mode downloads what you need before you lose signal.",
        "Because the listings are user-contributed, accuracy varies from one entry to the next, and a freedom camping pin is only as good as the last person who checked it. Use it for breadth and filters, and confirm anything that could earn you a fine against the council bylaw or the DOC page.",
      ], ["Cross-check user-added sites", "Good for very specific filters", "One payment, no subscription"]),
      s("Campable", [
        "Campable is a different kind of app: it books nights on private land, such as vineyards, working farms, orchards and sports clubs, where the host has agreed to take motorhomes and campervans. You see the nightly price, facilities and house rules, book and pay in the app, and get the host's phone number with the booking.",
        "The app is free, Campable says it charges guests no booking fees, and it earns a commission from hosts. Your arrival details work offline once booked. It has a filter for self-contained and non-self-contained vans, which matters since only green-warrant vehicles count as self-contained for freedom camping. It does not try to cover DOC campsites or council freedom camping areas, so pair it with one of the others.",
      ]),
      s("Other options worth knowing", [
        "The NZMCA app is for members of the New Zealand Motor Caravan Association and needs a membership login. It opens the association's travel directory, including its own member parks and other points of interest. If you are a member, or considering joining for a long trip, that network changes the arithmetic.",
        "DOC's own website is the authority for its campsites, huts and alerts, and bookings.doc.govt.nz is where you book them; any app, ours included, is a step removed from that source. For the walking half of a trip, a dedicated tramping app usually handles tracks better than a camping app.",
      ]),
      s("Offline coverage is where apps differ most", [
        "Offline means different things in different apps, and the difference shows on the West Coast, in Fiordland and across the East Cape. Some tools let you download map areas; others store the place directory itself, so categories, facilities, fees and access notes stay readable with no signal at all. Few do everything without a connection: routing, weather and photos usually still need one.",
        "Whatever you use, update it over Wi-Fi before you leave a main centre, and screenshot anything legally significant: a bylaw summary, a booking confirmation, an access note. A screenshot works in every app, on every phone, with no reception and a nearly flat battery.",
      ], ["Downloaded maps are not the same as stored details", "Update before leaving a main centre", "Screenshot anything legally important"]),
      s("How the apps make their money", [
        "Rankers, CamperMate and WikiCamps all earn from in-app bookings and partner deals, and CamperMate also from advertising and paid listings; WikiCamps also charges up front on the App Store, and Campable takes a commission from hosts. Any app that sells bookings has a reason to put bookable places in front of you, and that includes the BookIt holiday parks and tours in KiwiCamping.",
        "KiwiCamping sells a Premium pass for its DOC places, dump stations, guides and planning, while BookIt stays and tours are free to browse and book in the app. The App Store shows the current pass prices in your own currency, and those change more often than this page, so check the listing rather than relying on a figure copied here.",
      ]),
      s("Which combination suits your trip", [
        "For a self-contained van moving through remote areas, prioritise stored place details and clear rules, then add a review-led app for the busier stretches where you have signal anyway. For a family trip built around powered sites and school holidays, a booking-led app earns its place, and Campable adds quieter nights on private land.",
        "For a mixed trip with serious walking, run a camping app for the vehicle nights and a tramping app for the tracks. Many travellers on a trip longer than a fortnight end up carrying two apps, and that is a reasonable outcome rather than a failure to choose.",
      ]),
      s("Check the rule, not the pin", [
        "Every app in this comparison, including ours, is a planning aid. The council bylaw, the DOC notice, DOC alerts and land-manager directions override anything stored on a phone, and they change more often than app data refreshes. Fire restrictions and rāhui in particular can be imposed quickly.",
        "Before you settle in for the night, read the sign at the entrance. If it disagrees with the app, the sign wins. That habit costs nothing and is what keeps freedom camping available.",
      ], ["Signs override app data", "Recheck DOC alerts before remote legs", "Fire restrictions can change overnight"]),
    ],
    sources: [
      { label: "Rankers Camping NZ", url: "https://www.rankers.co.nz/" },
      { label: "CamperMate", url: "https://campermate.com/en" },
      { label: "Campable: private land stays and guest fees", url: "https://campable.com/" },
      { label: "Campable: how hosting and commission work", url: "https://campable.com/why-host" },
      { label: "WikiCamps New Zealand", url: "https://wikicamps.co.nz/" },
      { label: "CamperMate on Google Play", url: "https://play.google.com/store/apps/details?id=nz.co.campermate" },
      { label: "Plumbers, Gasfitters and Drainlayers Board: green warrant rules", url: "https://www.pgdb.co.nz/self_contained_vehicles/private_vehicle_owners/" },
      { label: "New Zealand Motor Caravan Association", url: "https://www.nzmca.org.nz/" },
      { label: "DOC camping and accommodation", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/" },
      { label: "DOC alerts and closures", url: "https://www.doc.govt.nz/parks-and-recreation/know-before-you-go/alerts/" },
    ],
  }),

  a({
    slug: "where-to-camp-in-new-zealand",
    legacyPath: "/where-to-camp-in-new-zealand.html",
    title: "Where you can camp in New Zealand: a complete location guide",
    description: "DOC campsites, conservation land, council reserves, iwi-managed places and private holiday parks each carry different rules and costs.",
    category: "Camping guides",
    region: "New Zealand",
    readTime: 13,
    places: ["Northland", "Coromandel", "Marlborough", "West Coast", "Otago", "Southland"],
    imageAlt: "Campervan parked at a coastal New Zealand campsite",
    intro:
      "New Zealand's camping network runs across four quite different kinds of land, and the rules, price and booking system change with each one. Knowing which type you are looking at tells you most of what you need: whether you can turn up, whether you need certification, who to ask when something is unclear, and what you should expect to pay.",
    sections: [
      s("The four land types", [
        "The Department of Conservation manages the largest public network, several hundred campsites and roughly 950 huts across national parks, forest parks and scenic reserves. Sites are graded from basic through standard and serviced to Great Walk, and the grade predicts both the fee and the facilities. Basic sites are free; serviced campgrounds have flush toilets, powered options and often a warden.",
        "Council reserves are the backbone of freedom camping. They are governed by local bylaws rather than national rules, usually allow one or two nights, and are frequently restricted to certified self-contained vehicles. Because each council writes its own bylaw, a rule that applies in one district tells you nothing about the next one.",
      ]),
      s("Holiday parks and iwi-managed places", [
        "Private holiday parks provide powered sites, hot showers, laundries, kitchens and cabins. They work best as reset points between remote nights, when tanks, batteries, washing and people all need attention at once. In peak season and around events they book out well ahead.",
        "Iwi, hapū and community-managed places, marae campgrounds, showgrounds, domain reserves, offer something the commercial network does not, and they operate on their own terms. Respect tikanga, pay koha where it is requested, and confirm availability in advance rather than arriving unannounced.",
      ], ["Match the land type to the night you need", "Book holiday parks early in summer", "Contact community-managed places ahead"]),
      s("North Island in outline", [
        "Northland pairs a long coastline of DOC and council sites with strong seasonal demand and some closures during significant cultural events. The Coromandel has beachfront DOC sites that fill immediately over summer, while Waikato, Taupō and Rotorua mix geothermal holiday parks with lakeside options.",
        "The central plateau serves Tongariro walking from parks near Whakapapa and Tūrangi. Gisborne and Hawke's Bay blend surf-side DOC camps with council-managed areas, and Wellington's options are shaped by ferry timing more than by scenery, an early sailing is worth a duller last night.",
      ]),
      s("South Island in outline", [
        "Marlborough's Queen Charlotte Drive has DOC and concession sites along the Sounds. Nelson Tasman combines Golden Bay council sites with the Abel Tasman campgrounds, most of which are booked rather than turn-up.",
        "The West Coast rewards travellers who accept rain and sandflies for near-empty campsites. Canterbury runs from braided river country to alpine holiday parks, and Otago and Southland hold some of the best-known sites in the country. Fiordland is largely booked DOC accommodation, and freedom camping close to the fiords is not permitted.",
      ], ["Book Abel Tasman and Great Walk sites early", "Fiordland needs DOC bookings", "West Coast trades weather for space"]),
      s("What each land type costs", [
        "DOC basic sites are free and DOC standard sites generally run $10–$20 per adult per night, charged per person rather than per site. Serviced DOC campgrounds sit around $25 per adult. Because the charge scales with people, a family is often better off at a holiday park quoting a flat site rate.",
        "Council freedom camping areas are usually free but may require a permit, and holiday park prices vary widely with season, location and power. Iwi and community-managed places frequently operate on koha rather than a fixed rate, which is not an invitation to underpay.",
      ], ["DOC charges per adult", "Holiday parks may suit families better", "Koha is not a discount"]),
      s("Booking, or turning up", [
        "The four land types behave differently on arrival. Great Walk and Abel Tasman campsites are booked well ahead and turning up is not an option. Most DOC sites are first-come, which works outside peak season and fails badly between Christmas and late January. Holiday parks take bookings and fill early in beach towns.",
        "Council freedom camping areas cannot be reserved at all, which is exactly why they need a fallback. The workable pattern is to book the nights that are hard to replace, stay flexible on the rest, and always know where the nearest paid site is.",
      ]),
      s("The legal guardrails", [
        "Freedom camping is allowed on council and conservation land unless a bylaw or DOC notice prohibits or restricts it, and on council land a vehicle must be certified self-contained unless a bylaw designates the site for non-self-contained vehicles. Since 7 June 2026 certification means a green warrant: blue warrants no longer count for freedom camping, whatever their printed expiry. The certification is about the vehicle's capability, not your intentions, and campgrounds, holiday parks and private land with permission do not require it.",
        "The bylaw or DOC notice is the rule, and the sign at the site is the quickest way to read it, though not every restricted area is signposted. Where a sign and a cached listing disagree, follow the sign. DOC visitor centres and i-SITEs hold current closure and alert information that has not reached third-party data yet.",
      ]),
      s("Season and access", [
        "Winter closes or restricts alpine access, Arthur's Pass, the Lindis and the Desert Road can all be affected by snow, and some DOC roads shut temporarily after heavy weather. Chains may be required, and a two-wheel-drive van is not always the right vehicle for a winter route.",
        "Summer inverts the problem: access is easy and availability is not. Popular coastal sites fill by early afternoon between Christmas and late January. Book what you can, hold a paid alternative for what you cannot, and avoid arriving anywhere after dark with no fallback.",
      ]),
    ],
    sources: [
      { label: "DOC places to stay", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/" },
      { label: "DOC alerts and closures", url: "https://www.doc.govt.nz/parks-and-recreation/know-before-you-go/alerts/" },
      { label: "NZTA road conditions", url: "https://www.journeys.nzta.govt.nz/" },
    ],
  }),

  a({
    slug: "responsible-camping-new-zealand",
    legacyPath: "/responsible-camping-nz.html",
    title: "Responsible camping in New Zealand",
    description: "Leave No Trace applied to Aotearoa: waste, biosecurity, rāhui, wildlife and the community expectations that keep sites open.",
    category: "Rules & safety",
    region: "New Zealand",
    readTime: 12,
    places: ["DOC land", "Council reserves", "Beaches", "Alpine areas"],
    imageAlt: "Camper packing rubbish away at a New Zealand campsite",
    intro:
      "Freedom camping in New Zealand exists at the discretion of councils and land managers, and sites close when behaviour makes them expensive to maintain. Camping responsibly is not only an environmental position, it is the practical reason the next traveller will still be allowed to park there.",
    sections: [
      s("Leave No Trace, applied locally", [
        "The familiar principles translate directly: plan ahead, camp on durable surfaces, dispose of waste properly, leave what you find, minimise fire impact, respect wildlife and be considerate of others. What changes in New Zealand is the specifics behind each one.",
        "Pack out everything, including food scraps. Many councils and DOC sites operate pack-in, pack-out even where there is a toilet, and organic waste left in the bush can carry seeds and pests as well as attracting animals.",
      ], ["Pack out food scraps too", "Camp on formed surfaces", "Assume no bins unless you see them"]),
      s("Waste and water", [
        "Grey water and toilet waste belong in a dump station, not a hedge, a stormwater drain or a river. Dump stations are mapped and generally free or low cost, and using one takes minutes. Emptying a cassette anywhere else is both the single most damaging thing a camper does and the behaviour most likely to close a site.",
        "Do not wash dishes in rivers or lakes. Carry wastewater out, or at minimum work at least 50 metres from any waterway and use biodegradable soap sparingly. Biodegradable does not mean harmless in water.",
      ]),
      s("Biosecurity", [
        "Kauri dieback is spread by soil on footwear and gear. Use every cleaning station you pass, scrub soil off properly rather than rinsing, and stay on the boardwalks in kauri forest. Myrtle rust and freshwater pests such as didymo travel the same way, on gear that was not cleaned between catchments.",
        "Check, clean and dry anything that has been in fresh water before using it in another waterway. This applies to boots, tents, fishing gear and paddleboards, not only boats.",
      ], ["Use every cleaning station", "Check, clean, dry between catchments", "Stay on kauri boardwalks"]),
      s("Wildlife and rāhui", [
        "Do not feed kea, weka, dolphins or anything else. Human food changes behaviour, and for kea in particular it leads directly to birds being killed on roads and at car parks. Store food and rubbish where birds cannot reach it, and expect kea to open anything you thought was secure.",
        "Dog restrictions apply widely on beaches and reserves, especially during nesting seasons for shorebirds. Rāhui and customary closures are placed for good reason, often after a death or to allow a resource to recover; treat them as absolute rather than advisory.",
      ]),
      s("Staying on formed ground", [
        "Park on established pads and marked sites. Tussock, dunes and wetland margins take years to recover from a single vehicle, and the damage is what councils photograph when they propose closing an area.",
        "The same applies on foot. Cutting corners on a track accelerates erosion badly in alpine zones, where the growing season is short and the soil is thin.",
      ]),
      s("Being a good neighbour near towns", [
        "Urban and semi-urban freedom camping survives on informal agreements. Keep noise down in the evening, avoid running generators, leave reasonably early, and use the town, buy fuel, coffee and groceries locally. The economic argument is what councillors hear when a site is debated.",
        "If you see a site being misused, report it to the council or DOC rather than leaving it. Sites are usually closed because problems went unreported until the cost of cleaning them up outweighed the benefit of keeping them open.",
      ], ["Quiet by evening, gone early", "Spend locally", "Report misuse rather than ignoring it"]),
    ],
    sources: [
      { label: "DOC camping responsibly", url: "https://www.doc.govt.nz/parks-and-recreation/know-before-you-go/camping-responsibly/" },
      { label: "Kauri protection", url: "https://www.kauriprotection.co.nz/" },
      { label: "Check, Clean, Dry", url: "https://www.mpi.govt.nz/outdoor-activities/check-clean-dry/" },
      { label: "Tiaki Promise", url: "https://www.tiakinewzealand.com/" },
    ],
  }),

  a({
    slug: "two-week-camper-itinerary-new-zealand",
    legacyPath: "/two-week-camper-itinerary-nz.html",
    title: "Two-week New Zealand camper itinerary: North and South Islands",
    description: "A 14-day Auckland to Queenstown route with one Cook Strait crossing, realistic driving days and room for weather.",
    category: "Road trips",
    region: "New Zealand",
    readTime: 14,
    places: ["Auckland", "Coromandel", "Rotorua", "Wellington", "Picton", "Wānaka", "Queenstown"],
    imageAlt: "Campervan on a New Zealand highway between mountains and lake",
    intro:
      "Fourteen days is enough to see both islands properly only if you accept that it is a route, not a survey. This itinerary crosses Cook Strait once, keeps most driving legs to three or four hours, and leaves the last day soft so a delayed ferry or a closed pass does not put your flight at risk.",
    sections: [
      s("Logistics before the days", [
        "Book the ferry first and build the rest around it. Interislander and Bluebridge both cross Cook Strait, sailings fill in summer, and a crossing consumes most of a day once you include check-in and the drive at either end. Everything else on this route is easier to move than the ferry.",
        "Pick up the vehicle in Auckland and drop it in Queenstown if the one-way fee is reasonable; the alternative is a long return leg that adds nothing. In winter, add time for alpine passes, carry chains where required and check road conditions each morning rather than the night before.",
      ], ["Book the ferry before anything else", "Price the one-way vehicle fee", "Check passes daily in winter"]),
      s("Days 1 to 6, North Island", [
        "Start north of Auckland rather than in it, stock up on the way out and take the first night near Ōrewa or the Hibiscus Coast. Day two runs into the Coromandel for Cathedral Cove and Hahei, which is worth an unhurried afternoon. Day three is Rotorua and its geothermal parks, where the holiday parks are genuinely convenient.",
        "Day four takes you to Taupō for the lake and the Huka Falls, with freedom camping options on the eastern shore for certified vehicles. Day five crosses to Napier for art deco and the wine trail, and day six runs down through the Wairarapa into Wellington. Position the last North Island night close to the ferry terminal.",
      ]),
      s("Days 7 to 10, into the South", [
        "Day seven is the crossing and Queen Charlotte Drive, which is slower and more beautiful than the map suggests. Stop early on the Sounds rather than pushing towards Nelson in the dark.",
        "Days eight to ten run down the West Coast to the glaciers and across to Wānaka. This is the wettest and least populated stretch of the route, the sandflies are serious, and it is also where most people's photographs come from. Fuel up more often than feels necessary.",
      ], ["Sandfly repellent on the West Coast", "Fuel early, not at the last town", "Queen Charlotte Drive takes longer than it looks"]),
      s("Days 11 to 14, the south", [
        "Queenstown on day eleven, then Milford Sound as a long day out of Te Anau on day twelve. The Milford road is spectacular and unforgiving, leave early, expect no reception, and check for avalanche closures in winter.",
        "Day thirteen takes the Catlins coast towards Curio Bay for penguins and sea lions, and day fourteen returns north to Queenstown. If your flight is early, spend the final night near the airport rather than driving the Lindis at dawn.",
      ]),
      s("Where to lose a day if you need to", [
        "This route has three natural compression points. The Napier leg can be cut by running Taupō to Wellington directly, the Catlins can be dropped entirely, and Milford can become a scenic flight or a shorter Te Anau day if the weather closes in.",
        "What should not be compressed is the ferry day or the West Coast. Both punish a tight schedule, one with rebooking fees, the other with long stretches between fuel, food and reception.",
      ]),
      s("Season changes the route more than the plan", [
        "Between Christmas and late January, book every night you can and treat the popular coastal sites as unavailable on arrival. In shoulder season the same route is quieter, cheaper and easier to change day to day.",
        "In winter, the South Island half is a different trip. Alpine passes can close, some DOC sites and roads shut, daylight is short, and driving legs that work in February become uncomfortable in July. Shorten the days rather than starting earlier in the dark.",
      ], ["Book everything in peak summer", "Shoulder season suits this route best", "Shorten winter driving days"]),
    ],
    sources: [
      { label: "NZTA journey planner and road conditions", url: "https://www.journeys.nzta.govt.nz/" },
      { label: "DOC alerts and closures", url: "https://www.doc.govt.nz/parks-and-recreation/know-before-you-go/alerts/" },
      { label: "MetService", url: "https://www.metservice.com/" },
    ],
  }),
];
