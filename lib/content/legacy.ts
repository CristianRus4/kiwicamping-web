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
    title: "The best camping apps for New Zealand, compared",
    description: "How KiwiCamping, Rankers, CamperMate, WikiCamps and AllTrails differ on offline data, freedom camping rules and trip planning.",
    category: "App guides",
    region: "New Zealand",
    readTime: 13,
    places: ["DOC campsites", "Council reserves", "Holiday parks", "Dump stations"],
    imageAlt: "Camping app open on a phone beside a New Zealand campsite",
    intro:
      "No single app covers every part of a New Zealand camping trip equally well. The useful question is not which app is best overall, but which one answers the question you are actually asking: where can I legally park tonight, which hut has a bunk free, or where is the nearest dump station. This comparison sets out what each of the main options is built around, so you can pick the combination that fits your trip.",
    sections: [
      s("What actually matters in a New Zealand camping app", [
        "Four things separate a useful app from a directory. The first is whether core place data works without reception, because large parts of the West Coast, Fiordland, the East Cape and inland Otago have no usable signal at exactly the moment you need to choose a site. The second is whether the app distinguishes general freedom camping from certified-self-contained-only areas, since that distinction is what infringement notices are written against.",
        "The third is trip planning that survives contact with a changed plan: ordered stops, saved alternatives and notes attached to the right place. The fourth is how the app makes its money, because a tool funded by bookings has a reason to show you bookable places first. Weigh these against your own trip rather than against a feature count.",
      ], ["Test offline before you leave reception", "Check how self-contained areas are flagged", "Know how the app is funded"]),
      s("KiwiCamping", [
        "KiwiCamping is built around offline-first place data and rule clarity. The bundled directory keeps campsite, hut, holiday park, dump station and potable water details available beyond reliable signal, and freedom camping areas are separated from certified-self-contained-only areas rather than lumped together under one label. Trips are built from saved places into an ordered route with distance, dates, notes and to-dos attached to individual stops.",
        "The trade-offs are worth stating plainly. It is iPhone only, so Android travellers need something else. Live weather, road routing and provider booking pages still require a connection. The free tier lets you find places on the map, while saving to lists, full place details, trip planning and advanced filters sit behind a paid pass. Current pricing is shown in the App Store, since it varies by region.",
      ]),
      s("Rankers", [
        "Rankers has the deepest community review base in New Zealand and a long-running relationship with published camping data. If you want to read what other travellers thought of a site before committing to a two-hour detour, this is the strongest source, and its coverage of legal camping locations is genuinely broad.",
        "It leans on connectivity more than an offline-first tool does, and reviews describe experience rather than current legal status. Treat the review wall as colour and the council bylaw as the authority. Many travellers run it alongside an offline app rather than instead of one.",
      ]),
      s("CamperMate", [
        "CamperMate operates on both sides of the Tasman and is oriented towards holiday parks, bookings and local offers. For a powered-site-heavy trip where you want to reserve ahead and pick up deals, that orientation is an advantage rather than a compromise.",
        "The breadth of categories can make the map busy when you are hunting for one specific thing, and offline packs are more limited than in tools built offline-first. If your route is mostly commercial parks with reliable coverage, that matters less.",
      ]),
      s("WikiCamps NZ", [
        "WikiCamps is the most configurable of the group, with a flexible filter engine, user-contributed points of interest, discussion boards and checklists. Experienced travellers who know exactly what they are filtering for often prefer it, and it uses a one-off licence rather than a subscription after a short trial.",
        "Because much of the data is user-contributed, verification varies between entries, and there is no official bylaw feed behind the freedom camping flags. Confirm anything legally significant against the council or DOC page before you rely on it.",
      ], ["Cross-check user-added sites", "Good for very specific filters", "One-off licence, not a subscription"]),
      s("AllTrails", [
        "AllTrails is a tramping tool rather than a camping one. For topographic overlays, track conditions and GPX export it is excellent, and it is the right app for the walking half of a mixed trip.",
        "It does not cover dump stations, freedom camping bylaws, holiday parks or vehicle access notes, so it cannot be the only app on a vehicle-based trip. Pair it with a camping app rather than choosing between them.",
      ]),
      s("Other New Zealand options worth knowing", [
        "NZMCA's app is members-only and built on shared camping data, with the significant addition of member parks and dump stations that do not appear elsewhere. If you are a member, or considering joining for a long trip, that network changes the arithmetic considerably.",
        "DOC's own Campsite Finder covers DOC campgrounds and nothing else. It is authoritative for exactly that, since the fees, categories and alerts come from the source, but it will not help you with council bylaws, holiday parks or dump stations, so it works as a reference rather than as a trip planner.",
      ]),
      s("Offline coverage is where apps differ most", [
        "Offline means different things in different apps, and the distinction matters on the West Coast, in Fiordland and across the East Cape. Some tools cache map tiles only, so you get a map with no place details. Others bundle the place directory itself, so categories, facilities, fees and access notes stay readable with no signal at all.",
        "Whatever you use, sync over Wi-Fi before you leave a main centre, and screenshot anything legally significant: a bylaw summary, a booking confirmation, an access note. A screenshot works in every app, on every phone, with no reception and a nearly flat battery.",
      ], ["Cached tiles are not cached details", "Sync before leaving a main centre", "Screenshot anything legally important"]),
      s("How the pricing models compare", [
        "The apps are funded in four different ways, and each shapes what you see. Subscription tools charge directly and have no reason to prefer one place over another. Booking-funded apps earn from reservations, which tends to surface bookable commercial sites ahead of free ones. One-off licence apps charge once and are then indifferent. Free apps with no visible revenue are worth a moment's thought about where the value goes.",
        "KiwiCamping is free to download, with map and place discovery available at no cost, and a paid pass covering saved lists, full place details, trip planning, advanced filters and offline access. Current prices are shown in the App Store because they differ by region and change; we would rather send you to the live figure than publish one that goes stale here.",
      ]),
      s("Which combination suits your trip", [
        "For a self-contained van moving through remote areas, prioritise offline data and rule clarity, then add a review-led app for the busier stretches where you have signal anyway. For a family trip built around powered sites and school holidays, a booking-oriented app earns its place and offline depth matters less.",
        "For a mixed trip with serious walking, run a camping app for the vehicle nights and a tramping app for the tracks. Most people who travel New Zealand for more than a fortnight end up carrying two apps, and that is a reasonable outcome rather than a failure to choose.",
      ]),
      s("Check the rule, not the pin", [
        "Every app in this comparison, including ours, is a planning aid. On-site signage, the current council bylaw, DOC alerts and land-manager directions override anything cached on a phone, and they change more often than app data refreshes. Fire restrictions and rāhui in particular can be imposed quickly.",
        "Before you settle in for the night, read the sign at the entrance. If it disagrees with the app, the sign wins. That habit costs nothing and is what keeps freedom camping available.",
      ], ["Signs override app data", "Recheck DOC alerts before remote legs", "Fire restrictions can change overnight"]),
    ],
    sources: [
      { label: "DOC camping and accommodation", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/" },
      { label: "DOC alerts and closures", url: "https://www.doc.govt.nz/parks-and-recreation/know-before-you-go/alerts/" },
      { label: "Plan a responsible camping trip (DOC)", url: "https://www.doc.govt.nz/parks-and-recreation/know-before-you-go/camping-responsibly/" },
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
        "The Department of Conservation manages the largest public network, several hundred campsites and roughly 950 huts across national parks, forest parks and scenic reserves. Sites are graded from basic through standard and serviced to Great Walk, and the grade predicts both the fee and the facilities. Basic sites can be free or a few dollars per person; serviced campgrounds have flush toilets, powered options and often a warden.",
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
        "Council freedom camping areas are usually free but may require a permit, and holiday parks range from roughly $25 to $80 for a site depending on season, location and power. Iwi and community-managed places frequently operate on koha rather than a fixed rate, which is not an invitation to underpay.",
      ], ["DOC charges per adult", "Holiday parks may suit families better", "Koha is not a discount"]),
      s("Booking, or turning up", [
        "The four land types behave differently on arrival. Great Walk and Abel Tasman campsites are booked well ahead and turning up is not an option. Most DOC sites are first-come, which works outside peak season and fails badly between Christmas and late January. Holiday parks take bookings and fill early in beach towns.",
        "Council freedom camping areas cannot be reserved at all, which is exactly why they need a fallback. The workable pattern is to book the nights that are hard to replace, stay flexible on the rest, and always know where the nearest paid site is.",
      ]),
      s("The legal guardrails", [
        "Freedom camping is legal only where it is permitted, and in many districts only for certified self-contained vehicles with a fixed toilet. Older blue certifications remain valid only until they expire, and no later than 31 December 2027, after which a current green warrant is required. The certification is about the vehicle's capability, not your intentions, and enforcement is generally against the vehicle.",
        "On-site signage overrides every app, PDF and blog post, including this one. Where a sign and a cached listing disagree, follow the sign. DOC visitor centres and i-SITEs hold current closure and alert information that has not reached third-party data yet.",
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
