import { makeArticle as a, type Article, type ArticleSection, type ArticleTable } from "@/lib/article-model";

const s = (heading: string, body: string[], tips?: string[], table?: ArticleTable, cta?: boolean): ArticleSection => ({ heading, body, tips, ...(table && { table }), ...(cta && { cta }) });

/**
 * Articles already published on campingapp.nz. Each carries the exact path it ranks on today, so the
 * rebuild keeps that URL rather than moving the page to /guides/<slug>. Content here is the existing
 * page carried forward and extended, not a replacement.
 */
export const legacyOnlyArticles: Article[] = [
  a({
    slug: "best-nz-camping-apps",
    legacyPath: "/best-nz-camping-apps.html",
    listicle: true,
    title: "Best Camping Apps for New Zealand 2026: 7 Compared",
    description: "KiwiCamping, Rankers, CamperMate, WikiCamps, Campable, NZMCA and AllTrails compared on price, offline use, ratings and what each does best. Checked October 2026.",
    category: "App guides",
    region: "New Zealand",
    places: ["DOC campsites", "DOC huts", "Holiday parks", "Private land stays", "Tramping tracks"],
    imageAlt: "Camping app open on a phone beside a New Zealand campsite",
    intro:
      "There is no single best camping app for New Zealand in 2026, but there is a best app for each question a trip throws up: which DOC campsite allows dogs, what other travellers thought of a free site, where you can book a powered site tonight, or which track to walk tomorrow. We checked the seven apps that matter for a New Zealand camping trip against their current App Store listings and their developers' own sites on 20 October 2026. We make KiwiCamping, so we have put it first. Here is why, and when another app suits you better.",
    sections: [
      s("The short verdict", [
        "Pick KiwiCamping if your trip is built around DOC campsites, huts and tracks and you want to turn saved places into a dated, ordered route. Pick Rankers if traveller reviews matter most, CamperMate if you want booking, deals and downloadable maps in one free app that also covers Australia, and WikiCamps New Zealand if you want the biggest published count of New Zealand sites for a single upfront price.",
        "Campable is the specialist for booking a night on a farm, vineyard or other private land. The NZMCA App only makes sense if you are a member of the New Zealand Motor Caravan Association, and AllTrails is the one to carry for the walking half of a mixed trip. Most people on the road for more than a fortnight end up with two of these, usually one for finding and planning places and one for reviews or bookings.",
      ], undefined, {
        caption: "Checked 20 October 2026 on the New Zealand App Store and each developer's site. Ratings are New Zealand App Store averages with the number of ratings.",
        head: ["App", "Best for", "Price", "Platforms", "NZ rating", "Without signal"],
        rows: [
          ["KiwiCamping", "DOC sites, huts and trip planning", "Free; Pass NZ$3.99 to NZ$12.99", "iPhone (iOS 26+)", "3.8 (4)", "Place details yes, map tiles no"],
          ["Rankers Camping NZ", "Traveller reviews", "Free", "iPhone, iPad, Android, web", "4.7 (3,322)", "Campsite info built in; maps by Wi-Fi download"],
          ["CamperMate", "Booking, deals, NZ and Australia", "Free; ads on Android", "iPhone, iPad, Android, web", "4.4 (606)", "Downloadable maps and info"],
          ["WikiCamps New Zealand", "Most NZ sites listed", "NZ$7.99 upfront (iPhone)", "iPhone, iPad, Android", "4.5 (137)", "Offline Mode for sites and trips"],
          ["Campable", "Private land stays", "Free app; hosts set nightly prices", "iPhone, Android", "4.5 (13)", "Not stated"],
          ["NZMCA App", "NZMCA members", "Free app; membership NZ$150 to join plus NZ$102 a year", "iPhone, iPad, Android", "No ratings yet", "Not stated"],
          ["AllTrails", "Tramping and walking", "Free; Plus or Peak paid tiers", "iPhone, Android, web", "4.8 (5,198)", "Downloaded maps with a paid tier"],
        ],
      }),
      s("1. KiwiCamping: best for DOC campsites, huts and planning the route", [
        "KiwiCamping is a New Zealand camping map and trip planner built on the Department of Conservation's own data. In its August 2026 data the app carried 287 DOC campsites, 927 DOC huts with 7,661 bunks and 1,453 DOC tracks, with the fees, dog rules and booking requirements DOC publishes, where it publishes them. The place details live on the phone, so a campsite's facilities and fees still open on the West Coast or in Fiordland with no reception. Map tiles, routing, weather and photos still need signal, so it does not replace a downloaded map.",
        "Where it pulls ahead is planning. Places go into Liked, Starred, Visited, Want to Visit or your own collections, and a trip holds the ones you choose as ordered stops with dates, notes, to-dos, the total route distance and how much of the trip you have visited. Place screens add the local weather, costs converted into your own currency and Apple Look Around where Apple has it.",
        "Price and platform: free to download, but the free version opens only BookIt stays and tours. DOC campsites, huts, tracks and dump stations, saved collections, trips and the guides all need the KiwiCamping Pass, which the New Zealand App Store lists in options from NZ$3.99 to NZ$12.99. It runs on iPhone only and needs iOS 26 or later.",
        "The honest drawbacks: it is new, with 4 ratings on the New Zealand App Store (3.8) against Rankers' 3,322, there are no traveller reviews in the app, and there is no Android version. If you want to read what the last ten campers thought of a site, Rankers or CamperMate will tell you more.",
      ], ["Best for: DOC-heavy trips and route planning", "Pass needed for DOC places, collections and trips", "iPhone only, iOS 26 or later"], undefined, true),
      s("2. Rankers Camping NZ: best for traveller reviews", [
        "Rankers has the most New Zealand App Store ratings of any app in this comparison: a 4.7 average from 3,322 when we checked. Its listing describes more than 1,500 campsites and 6,600 places, over 108,000 reviews, each read and checked by a person on its team, and only community-approved sites. It also lists around 500 bookable campgrounds and more than 150 activity deals.",
        "Campsite information is built into the app from the first install, and the detailed maps download over Wi-Fi so they work beyond reception; that works in the iPhone and Android apps but not the web version. It is free to download and use, and it runs on iPhone, iPad, Android and the web.",
        "Strengths: it publishes the largest review count of any app here, more than 108,000, and it is useful for deciding whether a free site is worth a detour. Drawbacks: the iPhone download is large at about 794 MB, its Google Play rating is lower at 3.7 from 1,771 reviews, and reviews describe someone's night rather than the current rule. Check the council bylaw or the sign on site before you settle in.",
      ], ["Best for: reading other travellers' experience", "Free to download and use", "iPhone, iPad, Android and web"]),
      s("3. CamperMate: best for booking and deals across New Zealand and Australia", [
        "CamperMate covers both sides of the Tasman in one free app from Outdoria. It has a filter for free and paid places, traveller reviews and photos, saved lists, campground booking with availability, local deals and links to vehicle hire partners. Version 5.8, released in mid-October 2026, added a satellite view, and its listing says maps and place information can be downloaded for use without signal.",
        "It held a 4.4 average from 606 ratings on the New Zealand App Store and 4.0 from 12,568 on Google Play when we checked, and it is available in 27 languages. The app is free, and the Android version carries ads.",
        "Strengths: one app for a trip that crosses to Australia, and the booking and deals side earns its place on a holiday-park-heavy route. Drawbacks: commercial listings and deals share the map with free sites, so it can be busy when you only want one thing, and the Android version shows ads.",
      ], ["Best for: bookings and deals, NZ and Australia", "Free; ads on Android", "Maps and info download for use offline"]),
      s("4. WikiCamps New Zealand: best for the largest user-built database", [
        "WikiCamps New Zealand is a separate app from WikiCamps Australia, and it costs NZ$7.99 once on the App Store rather than a subscription. Its developer describes more than 12,000 New Zealand sites, community reviews and photos, more than 1,000 bookable sites and a trip planner that estimates fuel spend. An Offline Mode keeps sites and trip plans available without signal.",
        "It rated 4.5 from 137 ratings on the New Zealand App Store and 3.0 from 1,042 on Google Play. It runs on iPhone, iPad and Android.",
        "Strengths: the largest count of New Zealand sites any developer here publishes, and no ongoing cost on iPhone. Drawbacks: almost everything is contributed and updated by its users rather than checked against an official source, and its Google Play rating is lower at 3.0. Confirm anything legally significant against the council or DOC page.",
      ], ["Best for: maximum coverage, paid once", "NZ$7.99 upfront on iPhone", "Cross-check user-added sites"]),
      s("5. Campable: best for a night on private land", [
        "Campable books campervans and motorhomes onto private land: vineyards, farms, orchards and sports clubs. Hosts set their own nightly price, you book and pay in the app, and you get the host's phone number once the booking is made. It rated 4.5 from 13 ratings on the New Zealand App Store and is also on Android.",
        "Strengths: instant booking for quiet, legal nights away from busy freedom camping areas. Drawbacks: it lists hundreds of hosts rather than a full directory, and it is a booking tool rather than a way to find DOC sites or holiday parks.",
      ], ["Best for: booked private-land stays", "Hosts set the price", "iPhone and Android"]),
      s("6. NZMCA App: best for members of the motor caravan association", [
        "The NZMCA App is the New Zealand Motor Caravan Association's members' app, with its Travel Directory and the association's own NZMCA Parks, which charge members $5 per adult per night. The app is free, but membership costs $150 to join plus $102 a year, so $252 in the first year.",
        "Strengths: for a long trip in a certified self-contained motorhome, the member parks change the arithmetic. Drawbacks: it requires NZMCA membership, it had no ratings yet on the New Zealand App Store, and it rated 3.2 from 156 on Google Play.",
      ], ["Best for: NZMCA members", "Membership NZ$150 plus NZ$102 a year", "Member parks NZ$5 per adult a night"]),
      s("7. AllTrails: best for the walking half of the trip", [
        "AllTrails is a walking and tramping app rather than a camping one, and the best rated app in this list at 4.8 from 5,198 New Zealand ratings and 4.5 from more than 388,000 on Google Play. Track maps, reviews and recordings are free, and downloaded maps for use without signal need a paid Plus or Peak subscription.",
        "It does not cover campsites, dump stations, holiday parks or freedom camping, so it cannot be the only app on a vehicle-based trip. Pair it with a camping app and check DOC's track alerts before a remote walk.",
      ], ["Best for: tracks and tramping", "Downloaded maps need a paid tier", "Check DOC track alerts too"]),
      s("Do not skip DOC's own booking system", [
        "DOC does not publish a national camping app, but its booking system at bookings.doc.govt.nz is the only place to book Great Walk huts and campsites and DOC's other bookable sites. Great Walks bookings for the 2026/27 season opened in May 2026, and most Great Walks charge international visitors more than New Zealanders in summer.",
        "Whatever app you use to choose a site, make the booking with DOC and keep the confirmation on your phone. An app listing is never proof of a booking, and DOC's alerts page is the place to check closures before you drive in.",
      ]),
      s("How we chose and checked", [
        "We started from the apps New Zealand travellers actually search for and download, then kept the ones that cover camping, staying or walking in New Zealand today. Roadtrippers is left out because its New Zealand listing says it is designed for the United States and Canada, and Hipcamp because we could not verify its current New Zealand listing. Gaspy belongs in a fuel-price comparison rather than this one.",
        "For each app we read the current New Zealand App Store listing, the developer's own website and, where it exists, the Google Play listing, all on 20 October 2026. Ratings, prices and features are as listed that day. We have not counted features we could not see described by the developer, and a feature missing from this page is not a claim that the app lacks it.",
      ]),
      s("Which combination suits your trip", [
        "For a self-contained van moving through remote areas, put DOC data that opens without signal first, then add a review-led app for the busier stretches where you have reception anyway. For a family trip built around powered sites and school holidays, a booking-oriented app earns its place and offline depth matters less.",
        "For a mixed trip with serious walking, run a camping app for the vehicle nights and AllTrails or DOC's track pages for the tramping days. Carrying two apps is a reasonable outcome, not a failure to choose.",
      ]),
      s("Check the rule, not the pin", [
        "Every app in this comparison, including ours, is a planning aid. On-site signage, the current council bylaw, DOC alerts and land-manager directions override anything cached on a phone, and they change more often than app data refreshes. Fire restrictions and rāhui in particular can be imposed quickly.",
        "Before you settle in for the night, read the sign at the entrance. If it disagrees with the app, the sign wins. That habit costs nothing and is what keeps freedom camping available.",
      ], ["Signs override app data", "Recheck DOC alerts before remote legs", "Fire restrictions can change overnight"]),
    ],
    sources: [
      { label: "Rankers Camping NZ app", url: "https://www.rankers.co.nz/apps/camping_nz" },
      { label: "CamperMate", url: "https://campermate.com/" },
      { label: "WikiCamps New Zealand", url: "https://wikicamps.co.nz/" },
      { label: "Campable", url: "https://www.campable.com/" },
      { label: "The NZMCA App", url: "https://www.nzmca.org.nz/the-nzmca-app" },
      { label: "NZMCA membership fees", url: "https://www.nzmca.org.nz/join-us" },
      { label: "AllTrails", url: "https://www.alltrails.com/" },
      { label: "DOC bookings", url: "https://bookings.doc.govt.nz/" },
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
