import { makeArticle as a, type Article, type ArticlePriceTable, type ArticleSection } from "@/lib/article-model";

const s = (heading: string, body: string[], tips?: string[]): ArticleSection => ({ heading, body, tips });
const table = (note: string, rows: ArticlePriceTable["rows"]): ArticlePriceTable => ({ asOf: "18 August 2026", note, rows });
const rbnz = { label: "Reserve Bank of New Zealand exchange rates", url: "https://www.rbnz.govt.nz/statistics/series/exchange-and-interest-rates" };

/**
 * Articles that already rank on campingapp.nz, carried forward at their existing URLs.
 *
 * These are deliberately fuller than the /guides/ articles: each one replaces a live page that
 * already holds a position, so the rebuild has to add depth rather than remove it. Regional detail,
 * statutory references and figures from the published versions are preserved here.
 */
export const migratedArticles: Article[] = [
  a({
    slug: "freedom-camping-rules-new-zealand",
    legacyPath: "/freedom-camping-rules-nz.html",
    title: "Freedom camping rules in New Zealand, region by region",
    description: "The Freedom Camping Act, council bylaws, self-containment certification and what enforcement actually looks like on the ground.",
    category: "Rules & safety",
    region: "New Zealand",
    readTime: 15,
    places: ["Council land", "DOC land", "NZTA land", "Northland", "Queenstown-Lakes", "Fiordland"],
    imageAlt: "Authorised freedom camping sign beside a campervan",
    intro:
      "Freedom camping in New Zealand is legal where it is permitted and an infringement everywhere else, and the line between the two is drawn by whichever body manages the land under your wheels. The Freedom Camping Act 2011 sets a national frame, but councils write their own bylaws, so a rule you learned in one district tells you very little about the next one.",
    sections: [
      s("What freedom camping actually means here", [
        "Freedom camping is staying overnight on public land outside a formal campground, where the Freedom Camping Act 2011, a council bylaw or the landowner permits it. In practice it covers council reserves, designated car parks, lay-bys and some conservation land. It does not cover private farmland, forestry roads or national park huts, and it is a description of the location rather than a promise that the night is free.",
        "The Act applies to places within 200 metres of a formed road or a vehicle-accessible waterway, and to areas reachable by vehicle. Beyond that you are generally in backcountry camping territory, which follows DOC's rules instead. Either way, the sign at the entrance is the final authority and overrides any app, PDF or map layer, including this page.",
      ], ["Freedom means location, not price", "Signage overrides every app", "200 m of a formed road is the usual test"]),
      s("Self-containment: the transition is now complete", [
        "The rules changed in stages. From 7 June 2025, new certifications required a fixed toilet plumbed into the vehicle and issued a green Certified Self-Contained warrant. Older blue warrants, which allowed portable toilets, stay valid until they expire, and no later than 31 December 2027. After that a blue sticker will not demonstrate compliance anywhere, so check the expiry printed on yours rather than assuming it still counts.",
        "Certification is regulated through the Plumbers, Gasfitters and Drainlayers Board, and each certified vehicle appears on a public register searchable by registration plate. If you are hiring or buying, check the register rather than trusting the sticker on the glass: a warrant can be expired, transferred or simply wrong. Match the certified occupancy to the number of people actually sleeping in the vehicle, because the certification covers a specific capacity.",
      ], ["Blue warrants lapse by 31 December 2027", "Check the plate on the public register", "Certified occupancy must match your party"]),
      s("Enforcement and what it costs", [
        "Most unlawful freedom camping offences carry a $400 infringement fee. Camping in a restricted area without a certified vehicle is the common one. Waste offences, particularly discharging toilet or grey water, sit substantially higher and can be escalated to court, where penalties are larger again. Repeat offenders risk having the vehicle towed.",
        "Enforcement is real rather than theoretical. Councils in high-demand districts patrol at dusk and again around dawn through summer, and officers check the warrant, the plate and the posted stay limit. The infringement attaches to the vehicle, which means a rental company will pass it to you with an administration fee on top.",
      ]),
      s("Council land versus conservation land", [
        "Council bylaws set stay limits, define self-contained-only zones and prohibit camping outright in many urban areas. They vary enormously: some districts publish a handful of permitted sites, others operate a general permission with named exclusions. Because each bylaw is a local instrument, the only reliable source is the council whose boundary you are inside.",
        "On conservation land, freedom camping is generally allowed except where it is prohibited or restricted, but national parks and many reserves require you to use designated DOC campsites or recognised backcountry areas instead. DOC publishes alerts for closures, and those change faster than third-party data refreshes.",
      ]),
      s("North Island, in outline", [
        "Northland works on designated zones with stay limits, commonly two nights, and rangers patrol actively over summer. Auckland is heavily restricted: most permitted sites require certification, many carry evening-to-morning time windows, and popular bays and the central waterfront are prohibited entirely. Waikato and Bay of Plenty mix limited council reserves with a strong holiday park network, and Rotorua's lakeside sites are signed tightly.",
        "Gisborne and Hawke's Bay permit specific beaches, sometimes with an overnight permit that has to be arranged in advance. Through Taranaki, Manawatū-Whanganui and Wellington, coastal parking is frequently certified-vehicles-only with 48-hour maximums, and Wellington City enforces no-camping zones around the central city, so plan for a harbour-side or Hutt Valley alternative rather than improvising near the terminal.",
      ], ["Auckland and Wellington CBDs are largely prohibited", "Some east coast sites need a permit in advance", "Two nights is a common maximum"]),
      s("South Island, in outline", [
        "Tasman and Nelson lean heavily on permit-only zones, and warrants are checked daily around Kaiteriteri and Golden Bay in summer. The Marlborough Sounds are served by DOC campsites rather than open freedom sites, so book ahead, and Kaikōura's council car parks have fixed capacity that fills early. Canterbury restricts Christchurch to a small number of car parks, while the Mackenzie and Waitaki districts are more permissive but firm about certification.",
        "Otago is strict where demand is highest: Queenstown-Lakes and Central Otago enforce defined zones with early-morning checks, and Dunedin offers coastal reserves with two-night limits that fill before dusk. In Southland and Fiordland, freedom camping near Milford Sound is prohibited and DOC campsites are the answer; Southland District permits particular gravel lay-bys, which are worth identifying before you are tired and looking.",
      ]),
      s("A workable routine on arrival", [
        "Research narrows the options, but the decision happens at the entrance. Pull in, find the freedom camping board, read the stay limit and the vehicle requirement, and photograph the sign. It takes a minute and it is the evidence that settles any later dispute. If the sign and your app disagree, the sign wins, every time.",
        "Councils install temporary restrictions after floods, slips and events, and those appear on the ground long before they reach any dataset. If a site is full, do not create an overflow row along the access lane; move to a paid campground instead. Holding one legal paid option in reserve is what stops a tired driver making an expensive decision at 9pm.",
      ], ["Photograph the sign", "Hold a paid fallback", "Never form an overflow row"]),
    ],
    sources: [
      { label: "MBIE responsible freedom camping", url: "https://www.mbie.govt.nz/immigration-and-tourism/tourism/tourism-projects/freedom-camping" },
      { label: "DOC freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
      { label: "Self-contained vehicle register", url: "https://www.nzscv.co.nz/" },
      { label: "Plumbers, Gasfitters and Drainlayers Board", url: "https://www.pgdb.co.nz/" },
    ],
  }),

  a({
    slug: "freedom-camping-new-zealand-guide",
    legacyPath: "/free-camping-nz-legal.html",
    title: "Can you camp for free in New Zealand? Where it is legal and safe",
    description: "Which land types allow a free night, what certification you need, and the etiquette that keeps these places open.",
    category: "Camping guides",
    region: "New Zealand",
    readTime: 14,
    places: ["Council freedom camping areas", "NZTA rest areas", "DOC basic campsites", "Showgrounds", "Private land"],
    imageAlt: "Certified campervan at an authorised freedom camping area",
    intro:
      "Yes, free camping is still genuinely possible across Aotearoa, and it is also the part of a trip most likely to earn a $400 infringement. The difference comes down to understanding which kinds of land allow it, whether your vehicle meets the certification standard, and following an etiquette that most travellers never think about until a council closes a site.",
    sections: [
      s("Free and freedom are different words", [
        "Freedom camping describes where you are, outside a formal campground, not what you pay. Some authorised freedom camping areas cost nothing, others charge a modest fee or require a permit obtained in advance. Conversely, some of the cheapest legal nights in the country are DOC basic campsites, which are formal campgrounds that happen to be free.",
        "Getting this distinction right saves money and trouble. Travellers looking only for the word 'free' miss the $0 DOC sites entirely, and travellers assuming every freedom camping area is free occasionally discover a permit requirement after they have settled in.",
      ]),
      s("Where a free night is actually legal", [
        "Public reserves specifically signed for freedom camping are the most reliable option, and councils publish the lists. DOC operates a substantial number of basic campsites at no charge, typically with a long-drop toilet and an untreated water source, which are ideal if you are equipped to be self-sufficient. Some communities also provide designated car parks, gravel lay-bys or showgrounds where certified vehicles can stay a night or two.",
        "NZTA rest areas exist for driver fatigue rather than as campgrounds; a sleep break is a different thing from setting up camp, and local restrictions may still apply. Private land, a friend's paddock, a farm, a marae, counts as free camping when you have the owner's permission, which should be explicit rather than assumed. Never treat farmland or forestry roads as open by default.",
      ], ["DOC basic sites are often free", "Rest areas are for fatigue breaks", "Private permission must be explicit"]),
      s("The certification requirement", [
        "Most councils require a certified self-contained vehicle with a fixed toilet for freedom camping in their district. The system is still in transition: older blue warrants remain valid until they expire, and no later than 31 December 2027, after which restricted areas require the green Certified Self-Contained warrant issued under the regulated system.",
        "Camping without certification is possible, but only in the limited zones that expressly permit it, or in genuine backcountry contexts well away from roads where DOC's rules apply instead. If you are in a car, a tent or an uncertified van, plan around sites that specifically allow your setup rather than hoping a general area will do.",
      ]),
      s("The restrictions you should expect", [
        "Stay limits of one or two nights are the norm, often with arrival and departure windows, commonly park after early evening, leave by mid-morning. Noise curfews apply at most urban sites. Districts with the heaviest demand, including Queenstown-Lakes, Tauranga and Kaikōura, run both evening and dawn patrols and check certification against the plate.",
        "Read the specific bylaw wording rather than a summary. Where a listing says permit required, the permit is usually free but has to be arranged ahead of arrival, and turning up without it is still an offence. Where it says no overnight camping, that applies regardless of how quiet or discreet you intend to be.",
      ], ["Expect 1–2 night limits", "Permits are often free but must be pre-arranged", "Patrols run at dusk and dawn"]),
      s("Etiquette is what keeps sites open", [
        "Free camping runs on public tolerance, and sites close when that tolerance runs out. Keep the footprint small: park within the marked bay, keep awnings and chairs in unless the signage allows otherwise, arrive without ceremony and leave early. Two vehicles is a sensible maximum at an urban freedom spot, and a convoy of six will end that site for everyone.",
        "Empty tanks at a dump station before you arrive rather than after you leave, because grey water odour is the single most common trigger for a complaint. Rotate destinations instead of settling into one spot for a week. If residents or kaumātua ask you to move on, move on courteously, the conversation that follows a refusal ends up in a council submission.",
      ]),
      s("Safety, not just legality", [
        "A legal site is not automatically a good one. Prefer places with other travellers present, avoid isolated lay-bys with a single blind entrance, and think about whether you could drive out quickly if you needed to. Park facing out where the site allows it.",
        "Check the forecast against the ground itself. River flats flood faster than people expect, exposed coastal car parks get uncomfortable in a southerly, and a site that is pleasant in February can be genuinely unsafe in a winter storm. Keep enough fuel to leave, and do not rely on reception being available to make that decision.",
      ], ["Prefer sites with others present", "Park facing out", "River flats flood quickly"]),
      s("A ninety-second check before you switch off", [
        "Read the sign and confirm the stay limit, the hours and whether certification is required. Confirm your warrant is current and covers the number of people staying. Check whether waste facilities exist here or whether you need to arrive already empty.",
        "Then look at the practical questions: is the ground firm, is anything overhead, can other vehicles get past you, and where is the nearest paid alternative if this turns out to be full or wrong. If any of those answers is unclear, the campground twenty minutes away is cheap insurance.",
      ]),
    ],
    sources: [
      { label: "MBIE freedom camping guidance", url: "https://www.mbie.govt.nz/immigration-and-tourism/tourism/tourism-projects/freedom-camping" },
      { label: "DOC freedom camping on conservation land", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
      { label: "Self-contained vehicle register", url: "https://www.nzscv.co.nz/" },
    ],
  }),

  a({
    slug: "self-contained-campervan-green-warrant",
    legacyPath: "/self-contained-vehicles-nz.html",
    title: "Certified self-contained vehicles and the green warrant",
    description: "What the certification tests, what it does not permit, and how to verify a warrant before you hire or buy.",
    category: "Rules & safety",
    region: "New Zealand",
    readTime: 13,
    places: ["Green warrant", "Vehicle register", "Fixed toilet", "Wastewater tank", "Rental depots"],
    imageAlt: "Green self-contained vehicle warrant on a campervan",
    intro:
      "Self-containment certification is the single document that decides whether most freedom camping areas in New Zealand are open to you. It is also widely misunderstood: it certifies what the vehicle can do, not where you may go, and the standard it tests against changed recently enough that plenty of vehicles on the road are no longer compliant.",
    sections: [
      s("Where the rules now stand", [
        "The regulated system came in under the self-containment legislation and took effect in stages. From 7 June 2025, new certifications required a toilet fixed into the vehicle and issued a green warrant. Blue warrants issued under the older standard, which permitted portable toilets, remain valid until they expire, and no later than 31 December 2027.",
        "Once that period closes, a blue warrant will no longer establish compliance, and any vehicle relying on self-containment for freedom camping will need a current green Certified Self-Contained warrant. If you own a converted van certified under the old standard with a portable toilet, plan for a fixed toilet and recertification before the deadline rather than after it.",
      ], ["Blue warrants lapse by 31 December 2027", "A fixed toilet is required for new certification", "Recertification needs an approved authority"]),
      s("What the certification actually tests", [
        "The standard checks that the vehicle can support its occupants for three days without external services. That means a toilet fixed in place and usable inside with the bed made up, fresh water capacity, wastewater storage sized to match, a sink, and a sealed rubbish container, all scaled to the number of people the vehicle is certified for.",
        "The certified occupancy matters and is frequently overlooked. A van certified for two people does not become compliant for four because four can fit on the bed. Enforcement checks the warrant against the people present.",
      ]),
      s("What it does not give you", [
        "A green warrant is not permission to camp. It does not override a bylaw prohibiting overnight stays, does not create a right to a marked bay, and does not extend a stay limit. Where a council prohibits freedom camping, a certified vehicle is as prohibited as any other.",
        "It also says nothing about roadworthiness. Warrant of Fitness, registration, gas certification and the rental company's own conditions are separate obligations, and a self-containment certificate does not imply any of them have been met.",
      ], ["Certification is not permission", "WoF and gas are separate", "Occupancy is part of the certificate"]),
      s("Verifying a warrant before you commit", [
        "Every certified vehicle is listed on a public register searchable by registration plate. Check the plate rather than the sticker: warrants expire, vehicles get sold, and a card in the window proves very little on its own. Confirm the expiry date covers your entire trip, not just the pick-up date.",
        "For a rental, ask the depot to confirm the certification and occupancy in writing before you drive away, and photograph the warrant and the plate together. If a rental turns out to be uncertified mid-trip, the infringements are yours to argue about later.",
      ]),
      s("Buying or converting a vehicle", [
        "If you are buying a conversion, use an approved certification authority for the inspection rather than accepting the seller's assurance. Ask specifically what would need to change to satisfy the current standard, because a van marketed as self-contained may have been certified under rules that no longer apply.",
        "If you are converting, involve the certifier early. Plumbing routes, tank sizes, toilet mounting and ventilation are much cheaper to get right during the build than to retrofit afterwards, and some alterations can affect gas or electrical compliance at the same time.",
      ], ["Check the plate on the register", "Confirm expiry covers the whole trip", "Involve a certifier before converting"]),
      s("Living up to the certificate", [
        "Certification assumes the systems are actually used. Carry the toilet chemicals, empty tanks at proper dump stations, and keep the rubbish container sealed. A certified vehicle whose occupants use public toilets and tip grey water into a hedge is precisely the behaviour the standard exists to prevent.",
        "Know your tank capacities in days rather than litres, how long before the fresh water runs out, how long before grey water needs emptying. That converts a specification into a planning tool, which is what makes the difference between a comfortable week and an unplanned detour.",
      ]),
    ],
    sources: [
      { label: "Self-contained vehicle register", url: "https://www.nzscv.co.nz/" },
      { label: "Plumbers, Gasfitters and Drainlayers Board", url: "https://www.pgdb.co.nz/" },
      { label: "MBIE freedom camping transition", url: "https://www.mbie.govt.nz/immigration-and-tourism/tourism/tourism-projects/freedom-camping" },
    ],
  }),

  a({
    slug: "doc-campsites-new-zealand-guide",
    legacyPath: "/doc-campsites-huts-guide.html",
    title: "DOC campsites and huts: categories, fees, bookings and etiquette",
    description: "How the Department of Conservation grades its campsites and huts, what each tier includes, and how the booking system really works.",
    category: "Camping guides",
    region: "New Zealand conservation land",
    readTime: 14,
    places: ["Basic campsites", "Standard campsites", "Serviced campsites", "Great Walk sites", "Backcountry huts"],
    imageAlt: "Tent at a Department of Conservation campsite",
    intro:
      "DOC runs the largest accommodation network in the country, several hundred campsites and roughly 950 huts, and it is graded in tiers that predict almost everything about the experience. Learning the four campsite categories and the hut ticket system removes most of the uncertainty from planning a trip on conservation land.",
    sections: [
      s("The four campsite categories", [
        "Basic campsites are usually free and provide very little: a long-drop toilet, perhaps a water source that is not treated, and vehicle access that may be rough. Standard campsites typically add a reliable water supply and better toilets, and generally charge a modest per-adult fee. Serviced campsites are the top tier, with flush toilets, hot showers, kitchens or cooking shelters, rubbish collection and often powered options.",
        "Great Walk campsites sit outside this ladder and operate on their own booking system and pricing, tied to the specific track. They are the most likely to sell out and the least forgiving of a vague plan, because the alternative is often many hours' walk away.",
      ], ["Category predicts facilities and price", "Water may be untreated at any tier", "Great Walk sites book separately"]),
      s("Fees and how they are charged", [
        "DOC campsite fees are generally charged per adult per night rather than per site, which inverts the arithmetic most travellers are used to. A group of four at a standard site pays four times the adult rate, so a commercial holiday park charging per site can be cheaper for a family than a DOC site that looks cheaper per head.",
        "Children are charged at reduced rates or free depending on age and site. Seasonal pricing applies at some high-demand campgrounds, and the individual campsite page always overrides any general category guide.",
      ]),
      s("Bookings, passes and the difference between them", [
        "Each campsite page states whether the site is bookable, first-come-first-served, or covered by a Campsite Pass. This is the point people most often get wrong: a Campsite Pass is a payment mechanism, not a reservation. Holding a pass does not guarantee you a place at a site that requires booking, and it does not reserve anything at a first-come site.",
        "Where booking is required, book for the vehicle type and party size you are actually bringing, and carry the confirmation offline. Reception at the campsite itself is often absent, and a booking you cannot produce is difficult to defend when a warden is allocating a full ground.",
      ], ["A pass is not a booking", "Carry confirmations offline", "Book the real vehicle and party size"]),
      s("Huts and the ticket system", [
        "Huts are graded too, from basic shelters through standard huts with bunks and a water supply to serviced huts with mattresses, heating and sometimes gas. Most operate on hut tickets or a Backcountry Hut Pass, while Great Walk huts and a number of popular alpine huts require advance booking in the season.",
        "Bunks in non-bookable huts are not reserved, and the convention is that nobody is turned away, a full hut means floor space, not a closed door. Carry a sleeping mat and the ability to camp beside the hut if the weather allows it, particularly on popular tracks in summer.",
      ]),
      s("Hut and campsite etiquette", [
        "The unwritten rules matter more here than at a commercial park. Take boots off inside huts, leave bunks free for people still walking in, keep gear consolidated rather than spread across a bench, and be quiet early, trampers start before dawn. Fill in the hut book, both because it is courteous and because it is what search and rescue reads first.",
        "Leave the hut better than you found it: sweep, restock kindling where a fire is provided, and carry out everything you carried in, including food scraps. Do not burn rubbish in the hut stove.",
      ], ["Fill in the hut book", "Nobody is turned away from a hut", "Carry out all rubbish, including scraps"]),
      s("Matching the site to the trip", [
        "A basic site is excellent in settled weather with the right equipment, and miserable when everything is already wet. A serviced night solves wet gear, flat batteries, laundry and morale in one stop, and is often worth more than its price after a hard few days on the coast.",
        "Check the specifics for the exact site before you commit: fire rules, whether dogs are permitted, generator restrictions, maximum stay and seasonal road access. Alpine and back-road access in particular can close without much warning, and the campsite page carries the alerts.",
      ]),
    ],
    sources: [
      { label: "DOC campsite facilities and fees", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/facilities-and-fees/" },
      { label: "DOC huts", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-in-a-hut/" },
      { label: "DOC alerts and closures", url: "https://www.doc.govt.nz/parks-and-recreation/know-before-you-go/alerts/" },
    ],
  }),

  a({
    slug: "holiday-parks-new-zealand-guide",
    legacyPath: "/holiday-parks-nz-booking-guide.html",
    title: "Holiday parks in New Zealand: how to choose and book",
    description: "Powered sites, cabins, peak-season pricing and after-hours arrival, explained so the booking holds up on the day.",
    category: "Camping guides",
    region: "New Zealand towns and coast",
    readTime: 13,
    places: ["Powered sites", "Tent sites", "Cabins", "Communal kitchens", "Dump stations"],
    imageAlt: "New Zealand holiday park beside the coast",
    intro:
      "Holiday parks fill the gap between a basic campsite and a hotel, and they earn their place on a trip at very specific moments: after several wet nights, before an early ferry, or whenever laundry, power and a dependable hot shower matter more than solitude. Booking one well is mostly a matter of comparing the right things.",
    sections: [
      s("Understand how the rate is built", [
        "Holiday parks price in three different ways and the comparison collapses if you mix them up. Some charge per person, some per site with a stated occupancy, and some quote a base rate with additional guests charged separately. A $45 site for two and a $28-per-person rate are the same price for a couple and very different for a family of five.",
        "Then check what is bundled. Power, linen, kitchen equipment, showers, Wi-Fi and booking fees vary between parks, and a cabin quoted without linen is not comparable to one that includes it. Work out the total for your actual party and nights before deciding anything.",
      ], ["Compare per-person against per-site", "Check whether linen is included", "Include booking and card fees"]),
      s("Book the vehicle you are actually bringing", [
        "Site dimensions matter more than travellers expect. A long motorhome, a caravan with an awning or a vehicle towing a trailer needs a site that physically fits, and parks allocate by the length you declared. Under-declaring produces an awkward conversation at check-in and sometimes no site at all.",
        "Say whether you need drive-through access, power, and proximity to amenities if anyone in the party has mobility needs. These are easy to arrange in advance and nearly impossible to fix on a full Saturday in January.",
      ]),
      s("Peak season changes the rules", [
        "Between Christmas and late January, plus Easter and school holidays, popular coastal parks operate on minimum stays, higher rates and non-refundable terms. Some take bookings a year ahead for the best sites. If your route passes through a beach town in that window, book it as early as you book the ferry.",
        "Local events compress availability just as hard and with less warning, a regional sports tournament or a concert can fill every park in a district. Where dates are uncertain, pay for refundable terms and note the cancellation deadline against the trip stop rather than trusting memory.",
      ], ["Book beach towns very early", "Watch for local events", "Note cancellation deadlines"]),
      s("Arriving after hours", [
        "Most parks close reception in the evening, and a long driving day frequently ends after that. Ask for the late-arrival procedure when you book: many leave an envelope with a site number and a gate code, but you need to know that before you are standing at a locked barrier at 10pm with no reception.",
        "Confirm the gate arrangement for vehicles too. Some parks close a boom gate overnight, which matters if you have an early ferry or a dawn start planned.",
      ]),
      s("Use the facilities deliberately", [
        "A holiday park night is worth most when you use what you paid for. A communal kitchen saves gas and keeps cooking smells out of a small van, the laundry resets a week of damp clothing, and the dump station and potable water taps let you leave with full tanks and empty ones in the right order.",
        "Learn the layout before connecting anything: never fill drinking water from a tap near the dump point, and ask which taps are potable, because not all of them are. Rinse and stow hoses separately, and wash your hands after handling waste equipment.",
      ], ["Never fill water near the dump point", "Ask which taps are potable", "Keep hoses separate"]),
      s("Shared space, shared rules", [
        "Quiet hours are enforced, and holiday parks are dense environments where sound carries between sites. Keep site boundaries, supervise children around internal roads and pools, and check the pet policy before arriving with a dog, many parks restrict animals entirely in peak season.",
        "Secure valuables as you would anywhere with public access. A holiday park is convenient and generally safe, but it remains a busy site with vehicles moving through it all day.",
      ]),
    ],
    sources: [
      { label: "DOC alerts and closures", url: "https://www.doc.govt.nz/parks-and-recreation/know-before-you-go/alerts/" },
      { label: "NZTA journey planner", url: "https://www.journeys.nzta.govt.nz/" },
    ],
  }),

  a({
    slug: "camping-wastewater-rubbish-new-zealand",
    legacyPath: "/dump-stations-nz.html",
    title: "Dump stations, wastewater and rubbish: doing it properly",
    description: "How to find and use New Zealand dump stations, handle grey and black water, and avoid the fines that come with getting it wrong.",
    category: "Rules & safety",
    region: "New Zealand camps",
    readTime: 12,
    places: ["Dump stations", "Grey water", "Black water", "Potable water", "Transfer stations"],
    imageAlt: "Campervan using a marked dump station",
    intro:
      "Waste is where responsible camping becomes concrete, and where the penalties get serious. Discharging toilet or grey water in the wrong place carries substantially higher fines than an ordinary freedom camping infringement, and it is the behaviour most likely to get a popular site closed permanently.",
    sections: [
      s("Know your three waste streams", [
        "Black water is toilet waste and goes only into a dump station inlet designed for it. Grey water is everything from the sink and shower, it contains food particles, soap, fats and bacteria, and despite looking harmless it is not something to tip on the ground. Solid rubbish is the third stream and generally has to leave with you.",
        "Treat all three as containment problems rather than disposal problems. The question on the road is not where you can get rid of something, but whether you have capacity to hold it until you reach the right facility.",
      ], ["Grey water is not clean water", "Plan capacity, not disposal", "Rubbish usually leaves with you"]),
      s("Finding a dump station", [
        "Dump stations are widely distributed across New Zealand, at holiday parks, council facilities, some service stations and many i-SITEs, and most are free or charge a small fee. They are mapped, and the sensible habit is to identify the next one on your route before you need it rather than searching when a tank is already full.",
        "Facilities at holiday parks are often available to non-guests for a small charge, which is worth knowing on a long remote leg. Some are locked overnight, so arriving at 11pm with a full cassette is a planning failure rather than bad luck.",
      ]),
      s("Using one correctly", [
        "Park so other vehicles can still pass, dump stations are frequently on a single access lane and a badly parked van blocks everyone. Use only the inlet marked for the waste you are emptying, empty black water first, then rinse, then grey water. Rinse without spraying the surrounding ground, and leave the area cleaner than you found it.",
        "Keep the drinking-water hose entirely separate from anything used at the dump point, and never fill fresh water from a tap at the dump station unless it is explicitly marked potable. Wash your hands afterwards, before touching anything in the vehicle.",
      ], ["Black water first, then rinse, then grey", "Keep hoses strictly separate", "Never fill drinking water at the dump point"]),
      s("What not to do, and why it costs", [
        "Stormwater drains discharge directly to waterways with no treatment, so emptying a tank into one is a discharge to the environment rather than to a sewer. Public toilets are not designed for cassette volumes and block. Emptying into a hedge, a bush or a stream is the offence that draws the largest penalties and the most attention.",
        "Use only treatment chemicals compatible with the receiving system. Many rural dump stations feed septic tanks, and harsh formaldehyde-based products damage the biological process that makes them work. Where you are unsure, choose a product marked as septic-safe.",
      ]),
      s("Rubbish and food waste", [
        "DOC accommodation terms generally require all rubbish to leave with you, and many council sites operate pack-in, pack-out even where a toilet is provided. Assume there is no bin unless you can see one, and carry a sealed container so food waste does not attract birds, rodents or possums overnight.",
        "Food scraps are not a free pass because they are organic. Left in the bush they spread seeds, alter animal behaviour and take far longer to break down than people assume. Do not burn plastic, foil or treated timber in a campfire, it produces toxic smoke and leaves residue that the next camper inherits.",
      ], ["Assume no bins", "Seal food waste overnight", "Never burn plastic or treated wood"]),
      s("Building it into the routine", [
        "The travellers who never have a waste problem are the ones who empty on a schedule rather than on demand, typically whenever they pass a facility with tanks more than half full, regardless of whether it feels necessary. That single habit removes almost every awkward situation.",
        "Know your capacity in days: how long the fresh water lasts, how long before grey water needs attention, how many days the toilet supports at your party size. Those three numbers determine how far off-grid you can genuinely go, and they are more useful than any tank specification in litres.",
      ]),
    ],
    sources: [
      { label: "DOC camping responsibly", url: "https://www.doc.govt.nz/parks-and-recreation/know-before-you-go/camping-responsibly/" },
      { label: "MBIE freedom camping guidance", url: "https://www.mbie.govt.nz/immigration-and-tourism/tourism/tourism-projects/freedom-camping" },
    ],
  }),

  a({
    slug: "campfire-rules-new-zealand",
    legacyPath: "/campfire-rules-nz.html",
    title: "Campfire rules, fire seasons and safe cooking outdoors",
    description: "How New Zealand's fire season system works, when you need a permit, and how to cook safely when open fires are banned.",
    category: "Rules & safety",
    region: "New Zealand",
    readTime: 12,
    places: ["DOC campsites", "Conservation land", "Fire seasons", "Gas cookers"],
    imageAlt: "Small controlled campfire in a legal fire site",
    intro:
      "An existing fire ring and a pile of old ash prove that someone had a fire here once, not that you may have one today. New Zealand runs a three-tier fire season system that changes with conditions, and the land manager can prohibit fires regardless of what that system says.",
    sections: [
      s("The three fire seasons", [
        "In an open fire season you may light a fire in the open air without a permit, subject to the land manager's own rules. In a restricted fire season you need a permit from Fire and Emergency New Zealand before lighting anything in the open. In a prohibited fire season, open-air fires are banned outright and no permit will be issued.",
        "The season is set by district and changes with conditions, sometimes at short notice during a dry spell. Check the current status for the exact district you are in on the day, not the district you drove through this morning.",
      ], ["Check the district on the day", "Restricted means permit required", "Prohibited means no fire at all"]),
      s("The land manager can be stricter", [
        "The fire season is a floor, not a permission. DOC campsites, regional parks, council reserves and private campgrounds all set their own rules, and many prohibit open fires permanently regardless of the season. Where two rules apply, the stricter one controls.",
        "Read the specific campsite page and the sign at the site. Some DOC campsites permit a small fire only in a provided fireplace, some prohibit solid fuel entirely, and backcountry fires carry separate conditions about location, clearance and size.",
      ]),
      s("If a fire is genuinely permitted", [
        "Use the existing authorised fireplace where one is provided rather than building a new ring. Clear combustible material well back, keep the fire small, and have water immediately to hand, not in the vehicle, but beside you. Never light beneath overhanging trees, on peat, in strong wind, or near dry grass, gorse or mānuka, all of which carry fire far faster than people expect.",
        "Burn only fuel you are permitted to use. Collecting living vegetation is prohibited on conservation land, and many sites require you to bring your own wood. Do not burn rubbish, plastic, foil or treated timber.",
      ], ["Water beside you, not in the van", "Never light in wind or under trees", "Bring fuel; do not collect living wood"]),
      s("Putting it out properly", [
        "A fire is out when it is cold to the touch, and getting there takes longer than most people allow. Douse it, stir the ashes, douse again, and keep going until you can put your hand in the remains. Embers survive under ash for many hours and wind can restart them long after you have gone to bed.",
        "Never leave a fire unattended, including while it burns down. Most escaped campfires start after the people who lit them decided it was nearly out.",
      ]),
      s("Cooking when fires are banned", [
        "Gas cookers are the practical answer and are generally permitted when open fires are not, but check, because a prohibited fire season can restrict some appliances too. Use them on a stable, level surface, well clear of tent fabric and vegetation.",
        "Never cook inside a closed tent, an awning or an unventilated vehicle. The risk is carbon monoxide, which is odourless and has killed campers in New Zealand. Let a cooker cool completely before it goes back into a vehicle or tent, and store gas cylinders upright and ventilated.",
      ], ["Never cook in a closed tent or van", "Carbon monoxide has no smell", "Let cookers cool before stowing"]),
      s("If it gets away from you", [
        "If a fire spreads beyond your control, do not try to fight it beyond the first few seconds. Move away, downhill and across the slope where safe, because fire travels fastest uphill, and call 111 immediately.",
        "Give the clearest location you can: the road, the nearest identifiable landmark, and coordinates if you have them saved offline. Being able to state where you are, quickly, is worth more than any equipment you are carrying.",
      ]),
    ],
    sources: [
      { label: "Fire and Emergency: Check It's Alright", url: "https://www.checkitsalright.nz/" },
      { label: "DOC fires in the outdoors", url: "https://www.doc.govt.nz/parks-and-recreation/know-before-you-go/fire-safety/" },
    ],
  }),

  a({
    slug: "new-zealand-camping-packing-list",
    legacyPath: "/camping-packing-list-nz.html",
    title: "New Zealand camping packing list, with regional variants",
    description: "What to pack for wind, rain, sandflies, cold nights and remote roads, adjusted for where you are actually going.",
    category: "Trip planning",
    region: "New Zealand",
    readTime: 13,
    places: ["Tent setup", "Campervan kitchen", "Wet-weather kit", "Sandfly country", "Alpine routes"],
    imageAlt: "Camping equipment packed beside a New Zealand campervan",
    intro:
      "New Zealand punishes packing lists written for a single climate. The country delivers four seasons in a day with real conviction, and the gap between a comfortable trip and a miserable one is usually three or four specific items rather than a bigger pile of gear.",
    sections: [
      s("Sleep and shelter", [
        "Take a sleep system rated below the coldest night you expect, then add a margin, inland and alpine sites drop close to freezing well outside winter, even after a warm day. An insulated mat matters as much as the bag, because most heat is lost downwards into the ground.",
        "Test the whole setup at home before you leave: pitch the tent, inflate the mat, check the pump and valves. Keep one complete dry sleep layer sealed in a waterproof bag and never wear it during the day. A wet West Coast afternoon should not be able to reach the only warm clothing you have.",
      ], ["Rate the bag below expected lows", "Insulated mat, not just a bag", "Seal one dry sleep layer away"]),
      s("Wind and rain, not just cold", [
        "The wind is the part visitors underestimate. Bring a genuinely windproof shell rather than a light rain jacket, and carry enough strong pegs and guylines to hold a tent in an exposed coastal site, the pegs supplied with most tents are not adequate here. A groundsheet and a spare tarp earn their space repeatedly.",
        "Pack quick-drying layers and avoid cotton for anything you rely on. Merino works well for the same reason it is everywhere in this country: it stays warm damp and does not develop a smell over a fortnight.",
      ]),
      s("Sandflies and sun", [
        "Sandflies are not a minor irritation on the West Coast, in Fiordland or around the Catlins. Bring strong repellent, cover ankles and wrists at dusk, and check the tent's insect mesh for holes before you leave home. Antihistamine cream is worth carrying, because the bites keep people awake for days after the fact.",
        "The UV here is severe, the sun burns faster than most visitors expect, including on overcast days and at altitude. High-factor sunscreen, a brimmed hat and sunglasses belong in the day bag, not the boot.",
      ], ["Repellent for the West Coast and Fiordland", "Check tent mesh before leaving", "UV is stronger than it looks"]),
      s("Kitchen and water", [
        "Carry a stable gas cooker rated for outdoor use, a reliable lighter plus a backup, simple nesting cookware and enough food to absorb a delayed day. Cook outside or in a properly ventilated space, never inside a closed tent or van.",
        "Use separate, clearly labelled containers for drinking water and waste, and carry a reserve of drinking water that is not touched during ordinary camp use. Water at DOC sites is frequently untreated, so bring a filter or the means to boil, and do not assume a tap is potable because it exists.",
      ]),
      s("Vehicle and emergency kit", [
        "Know where the jack points are on your vehicle and confirm the spare, jack and wheel brace are actually present before you leave the depot, this is a common gap in rentals. Carry a torch or headlamp, a power bank, a basic first aid kit and a paper map or offline maps for the stretches with no reception.",
        "Alpine routes may require chains in winter, and some rental agreements mandate carrying them regardless of conditions. For remote walks or back-country roads, a personal locator beacon is cheap to hire and is the one item that genuinely changes outcomes.",
      ], ["Check the spare and jack at pickup", "Offline maps for no-reception legs", "Hire a PLB for remote legs"]),
      s("Adjust for where you are going", [
        "For the West Coast and Fiordland, weight the packing towards rain, sandflies and drying, more repellent, more dry bags, more spare socks. For Central Otago and the Mackenzie, weight it towards cold nights and sun, with a warmer bag and better eye protection than the coast requires.",
        "For Northland and the upper North Island, the balance shifts to heat, humidity and shade. For anything alpine, or for winter anywhere in the south, add chains, extra insulation and a genuinely shorter driving day. The list does not get longer with each region so much as it gets reweighted.",
      ]),
    ],
    sources: [
      { label: "DOC know before you go", url: "https://www.doc.govt.nz/parks-and-recreation/know-before-you-go/" },
      { label: "MetService", url: "https://www.metservice.com/" },
      { label: "NZTA road conditions", url: "https://www.journeys.nzta.govt.nz/" },
    ],
  }),

  a({
    slug: "best-time-camping-new-zealand",
    legacyPath: "/nz-camping-seasons-weather-sandflies.html",
    title: "Seasons, weather and sandflies: when to camp in New Zealand",
    description: "How the seasons behave region by region, where the sandflies are worst, and which months suit which kind of trip.",
    category: "Trip planning",
    region: "New Zealand seasons",
    readTime: 13,
    places: ["Northland", "Central North Island", "Mackenzie Country", "West Coast", "Fiordland", "Central Otago"],
    imageAlt: "Four seasons across a New Zealand camping landscape",
    intro:
      "There is no single best month for the whole country, because New Zealand spans a long way north to south and most of its weather is decided by altitude and which coast you are on. Choosing when to go is mostly about deciding what you are willing to trade: warmth against crowds, quiet against daylight, or scenery against certainty.",
    sections: [
      s("Summer: daylight, and everyone else", [
        "December to February brings long evenings, warm coastal swimming and the broadest availability of open campgrounds and services. It is also when the country goes on holiday itself. Between Christmas and late January, popular coastal sites fill by early afternoon, ferries and rentals sell out, and prices climb sharply.",
        "Book the nights that are genuinely hard to replace (the ferry, Great Walks, beach-town holiday parks) and leave ordinary stops flexible. Note that summer does not mean warm everywhere: alpine nights stay cold, and fire restrictions and water shortages are most likely in exactly this window.",
      ], ["Book ferries and beach towns early", "Alpine nights stay cold in summer", "Fire restrictions peak in summer"]),
      s("Autumn: the quiet favourite", [
        "March and April are, for many people who travel here regularly, the best compromise. Settled spells are common, the light is excellent, campgrounds are open but no longer full, and prices drop once school holidays end. Central Otago in particular is at its best as the poplars turn.",
        "The trade-off is shortening daylight and cooler nights, so driving days need to be a little shorter and the sleeping bag a little warmer. Some seasonal services begin closing from April onwards.",
      ]),
      s("Spring and winter", [
        "Spring brings full waterfalls, snow still on the peaks and green everywhere, but it is the least predictable season, wind and rapidly changing alpine conditions demand more caution and more flexibility. October and November can deliver a perfect week or a genuinely difficult one.",
        "Winter is a different trip rather than a worse one. It suits ski areas, clear southern night skies and travellers properly equipped for cold. Northern lowland camping stays mild, while Central Otago, Tongariro and the alpine passes require winter driving preparation, chains and a realistic view of daylight hours. It is a poor season to improvise.",
      ], ["Autumn is the best all-round compromise", "Spring is beautiful and unpredictable", "Winter needs equipment, not optimism"]),
      s("Sandflies: where and when", [
        "Sandflies are concentrated on the West Coast, throughout Fiordland, around the Catlins and in damp bush near water anywhere in the country. They are worst at dawn and dusk, in still conditions, and near the coast and rivers. Wind and cold suppress them, which is why an exposed site is sometimes more comfortable than a sheltered one.",
        "They are active through the warmer months and persist well into autumn. Bring strong repellent, cover ankles and wrists in the evening, keep the tent or van closed at dusk, and check the insect mesh before you travel. Bites can itch for days, so antihistamine cream is worth having with you rather than hunting for in a small town.",
      ]),
      s("Regional timing in short", [
        "Northland and the upper North Island are pleasant from October through April and humid at the height of summer. The central plateau and Tongariro are a summer and autumn proposition unless you are equipped for alpine winter. The East Coast is driest in summer and reliably sunny in autumn.",
        "The West Coast is wet in every season, plan for rain rather than hoping to avoid it, but rewards it with near-empty sites. The Mackenzie and Central Otago are excellent in autumn and cold and clear in winter. Fiordland is wet year-round and best approached with flexible days and no fixed expectations about seeing Milford in sunshine.",
      ], ["West Coast: plan for rain in any season", "Autumn suits Central Otago best", "Fiordland needs flexible days"]),
      s("Reading the forecast properly", [
        "New Zealand's weather changes faster than the length of most driving days, and a forecast for a town tells you relatively little about a pass or an exposed coast twenty minutes away. Check MetService for the specific location, and check the road conditions separately, the two answer different questions.",
        "Build the plan so that a bad forecast changes the day rather than cancelling the trip. Holding an indoor option, a shorter alternative and a serviced campground in reserve is what turns a wet week into an ordinary one.",
      ]),
    ],
    sources: [
      { label: "MetService", url: "https://www.metservice.com/" },
      { label: "NZTA road conditions", url: "https://www.journeys.nzta.govt.nz/" },
      { label: "DOC alerts and closures", url: "https://www.doc.govt.nz/parks-and-recreation/know-before-you-go/alerts/" },
    ],
  }),

  a({
    slug: "scenic-campsites-new-zealand",
    legacyPath: "/top-scenic-campsites-nz.html",
    title: "Scenic campsites in New Zealand, region by region",
    description: "Where the best-known views are, and how to judge whether a spectacular site is actually a good place to spend the night.",
    category: "Camping guides",
    region: "New Zealand",
    readTime: 13,
    places: ["Northland", "Coromandel", "Abel Tasman", "West Coast", "Mackenzie Basin", "Fiordland", "Catlins"],
    imageAlt: "Scenic lakeside campsite beneath New Zealand mountains",
    intro:
      "The most photographed campsite in the country is not automatically the best place to be tonight. A view is worth having, but it competes with wind exposure, drainage, access, facilities and whether you can get a large vehicle onto the pitch in the dark. The good news is that New Zealand has enough spectacular sites that you rarely have to choose only one.",
    sections: [
      s("Northland and the upper North Island", [
        "The Far North delivers long empty beaches and campsites close to the water, with the trade-off that many are exposed and some close during significant local events. Sites around the Bay of Islands and the Karikari Peninsula combine swimming with reasonable shelter.",
        "The Coromandel is the classic summer choice, with DOC sites tucked behind pōhutukawa on the east coast beaches. It is also the most competitive area in the country between Christmas and late January, when arriving without a booking is close to hopeless.",
      ]),
      s("Central and lower North Island", [
        "The central plateau offers something different: open tussock, volcanic horizons and genuinely dark skies around Tongariro, with the caveat that it is high, cold at night and windy far more often than photographs suggest. Lake Taupō's eastern shore has accessible sites with the mountains across the water.",
        "Further south, the Wairarapa coast and the wild beaches near Castlepoint reward the detour, and Whanganui's river country is quiet in a way the coast never is. These are places where the scenery is in the landscape rather than a single viewpoint.",
      ], ["Central plateau is cold and exposed", "Coromandel needs booking in summer", "East coast beaches suit sheltered nights"]),
      s("Top of the South and the West Coast", [
        "Abel Tasman's coastal campsites are among the best-known in the country and are booked rather than turn-up, often months ahead. Golden Bay and the Marlborough Sounds offer water-edge sites with easier access and less competition.",
        "The West Coast is where the drama is: Lake Mahinapua, the beaches near Hokitika, and the sites around the glaciers. Accept the rain and the sandflies and you get scenery that is genuinely world-class with very few people in it. Bring repellent and expect to dry gear later.",
      ]),
      s("Canterbury, Mackenzie and Otago", [
        "The Mackenzie Basin is the one most people come for, turquoise lakes, the Southern Alps behind them, and some of the clearest night skies anywhere, protected as a dark sky reserve. Sites around Lake Pukaki and Lake Tekapo deliver the view directly from the door, and they are cold, exposed and busy in proportion.",
        "Central Otago trades lakes for gold-country landscapes and enormous autumn colour, while the Otago coast around the peninsula adds wildlife to the scenery. Wānaka and Glenorchy sit at the point where accessible and spectacular overlap most comfortably.",
      ], ["Mackenzie skies are the draw", "Lakeside means wind", "Autumn is Central Otago's season"]),
      s("Fiordland, Southland and the Catlins", [
        "Fiordland is largely booked DOC accommodation and freedom camping near the fiords is not permitted, but the sites along the Milford road and around Te Anau are extraordinary. Weather here is its own planning constraint rather than a detail.",
        "The Catlins coast is quieter than almost anywhere else with comparable scenery, sea lions, penguins, waterfalls and a coastline that feels genuinely remote. Stewart Island, if you have the days, is a different experience again.",
      ]),
      s("Judging a site when you arrive", [
        "Read the landscape rather than the photograph. Lakeshores amplify wind and it usually rises in the evening. River flats and braided riverbeds flood far faster than they look capable of. Forest sites carry falling-branch risk in wind, particularly under older trees.",
        "Arrive in daylight and walk the pitch before committing a large vehicle: check the slope, the firmness of the ground and the soft edges, look up for overhead branches, and confirm another vehicle can still get past you. A remote site also costs fuel and time to reach, so the nominally free night is sometimes the more expensive one.",
      ], ["Walk the pitch before driving onto it", "Wind rises on lakeshores at evening", "Look up before parking under trees"]),
      s("Leaving it as you found it", [
        "Stay on formed surfaces, use the toilets provided, and keep every waste stream contained. Do not move rocks, cut vegetation or improve a pitch to make a better photograph, these are exactly the marks that get a site closed.",
        "Leave early if you like, but leave clean and quietly. Dawn light is not a reason to run a generator, fly a drone where it is prohibited, or wake a campground packing up. The best scenic sites stay open because the people who use them are unremarkable neighbours.",
      ]),
    ],
    sources: [
      { label: "DOC places to stay", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/" },
      { label: "DOC alerts and closures", url: "https://www.doc.govt.nz/parks-and-recreation/know-before-you-go/alerts/" },
      { label: "MetService", url: "https://www.metservice.com/" },
    ],
  }),

  a({
    slug: "camping-fees-new-zealand-2026",
    legacyPath: "/camping-costs-nz.html",
    title: "The real cost of camping in New Zealand: a budget breakdown",
    description: "DOC fees, holiday park rates, fuel, food and the extras, assembled into daily budgets you can actually plan against.",
    category: "Costs & budget",
    region: "New Zealand camps",
    readTime: 14,
    places: ["DOC basic camps", "DOC standard camps", "DOC serviced camps", "Holiday parks", "Freedom camping areas"],
    imageAlt: "Tent and campervan at a New Zealand campsite",
    intro:
      "Camping is the cheapest way to travel New Zealand, but 'cheap' covers a range from about nothing to more than a motel room. The word campsite spans a free long-drop beside an untreated stream and a powered beachfront pitch with a kitchen and laundry, so a nightly figure only means something once you attach it to a category and a party size.",
    priceTable: table(
      "DOC category prices current in August 2026; commercial bands are planning ranges. Peak beachfront and event-period rates can sit well above these.",
      [
        { label: "DOC basic campsite", nzdLow: 0, unit: "per adult per night" },
        { label: "DOC standard campsite", nzdLow: 10, nzdHigh: 20, unit: "per adult per night" },
        { label: "DOC serviced unpowered", nzdLow: 25, unit: "per adult per night" },
        { label: "DOC serviced powered", nzdLow: 20, nzdHigh: 28, unit: "per adult per night" },
        { label: "Holiday park site", nzdLow: 25, nzdHigh: 80, unit: "typical site or base range" },
        { label: "Low-cost camping day, per person", nzdLow: 45, nzdHigh: 80, unit: "all-in, self-catering" },
        { label: "Mixed camping and holiday parks", nzdLow: 90, nzdHigh: 150, unit: "per person/day" },
      ],
    ),
    sections: [
      s("DOC charges per person, not per site", [
        "This is the arithmetic that surprises families. DOC campsite fees are generally charged per adult per night: basic sites are free, standard sites usually fall between $10 and $20 per adult, and serviced unpowered sites are commonly around $25. Children are reduced or free depending on age and site.",
        "Because the charge scales with people, a party of four at a serviced DOC site can cost more than a holiday park charging a flat site rate. Always run the comparison for your actual party rather than assuming DOC is the cheaper option.",
      ], ["DOC charges per adult", "Holiday parks may be cheaper for families", "The site page overrides the category"]),
      s("Commercial parks use a different model", [
        "Holiday parks may quote per person, per site with a stated occupancy, or a base rate with extra guests added. Power, showers, kitchen access, linen and booking fees all change the comparison, and a prime summer beachfront pitch sits well above an ordinary inland one.",
        "Peak season, school holidays and local events raise rates and can impose minimum stays. Search the exact dates, vehicle length and party size, an off-season example tells you very little about a January weekend at the beach.",
      ]),
      s("The costs that are not the campsite", [
        "Fuel is usually the largest line after accommodation, and it is driven by distance and consumption rather than by nights. Work it out properly: kilometres multiplied by litres per 100 km, divided by 100, times the price per litre. A campervan at 12 L/100 km doing 3,000 km uses 360 litres, and that arithmetic matters more than the difference between a $15 and a $25 campsite.",
        "Then add food, ferry crossings if you cross Cook Strait, activities, and the vehicle itself if you are hiring. One-way hire fees and the insurance excess reduction are both easy to overlook and both substantial.",
      ], ["Fuel usually beats campsite cost", "Cook Strait is a fixed large cost", "Price one-way hire fees separately"]),
      s("Three realistic daily budgets", [
        "A frugal self-catering camper mixing free and standard DOC sites, cooking almost everything and driving moderate distances can plan around $45 to $80 per person per day before long-distance transport. This requires being genuinely self-sufficient and accepting basic facilities most nights.",
        "A mixed approach (DOC sites with a holiday park every third or fourth night, some meals out, a few paid activities) lands around $90 to $150 per person per day. A comfort-oriented trip with mostly powered sites or cabins, regular restaurant meals and booked experiences moves well beyond that.",
      ]),
      s("Where free camping genuinely saves, and where it does not", [
        "Free camping saves real money when the vehicle is set up for it and the route already passes suitable areas. It stops saving when you drive an extra 60 km to reach a free site, when the lack of facilities forces a paid night anyway, or when a $400 infringement arrives because the certification was not current.",
        "Budget for a paid night more often than you plan to use one. Showers, laundry, charging, water and a proper reset have a real value, and forcing an unsuitable free night after a wet week is a false economy.",
      ], ["Do not drive far to save a site fee", "Budget for paid nights you may not use", "An infringement erases a week of savings"]),
      s("Keeping the budget honest", [
        "Track actual spending for the first three or four days and compare it with the plan. Correcting a small drift early is straightforward; discovering in week four that you are 40% over means cutting the part of the trip you most wanted. The lines that drift are almost always food and small paid activities rather than accommodation.",
        "Hold a genuine reserve for the unexpected: a tyre, a weather day that forces a cabin, a ferry change. A trip with no financial slack turns every minor problem into a decision about whether to continue.",
      ]),
    ],
    sources: [
      { label: "DOC campsite facilities and fees", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/facilities-and-fees/" },
      { label: "MBIE freedom camping guidance", url: "https://www.mbie.govt.nz/immigration-and-tourism/tourism/tourism-projects/freedom-camping" },
      rbnz,
    ],
  }),
];
