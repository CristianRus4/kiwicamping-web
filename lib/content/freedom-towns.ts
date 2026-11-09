import { makeArticle as a, type Article, type ArticleSection, type ArticleTable } from "@/lib/article-model";

const s = (heading: string, body: string[], tips?: string[], table?: ArticleTable, cta?: boolean): ArticleSection => ({ heading, body, tips, ...(table && { table }), ...(cta && { cta }) });

/**
 * Freedom camping by town: where a visitor to a popular town actually parks for the night, with the
 * council rules in general terms and the council page named as the authority. Rules and sites change,
 * so each guide sends the reader to the council page and the sign on the day. The whole-council guides
 * are in freedom-councils.ts; DOC land is covered by the /freedom-camping/ hubs.
 */
export const freedomTownArticles: Article[] = [
  a({
    slug: "freedom-camping-napier-hastings",
    title: "Freedom Camping in Napier and Hastings: Where You Can Stay",
    description: "Where certified self-contained campervans can park overnight in Napier and Hastings: Napier's Ahuriri and Marine Parade sites, Hastings district reserves, what is banned and the holiday parks to use instead.",
    category: "Rules & safety",
    region: "Hawke's Bay",
    places: ["Napier", "Ahuriri", "Hastings", "Clive", "Haumoana", "Te Awanga"],
    imageAlt: "Marine Parade in Napier, with the footpath, Norfolk pines and the Pacific Ocean beside it",
    related: ["freedom-camping-rules-new-zealand", "self-contained-campervan-green-warrant", "camping-rules-local-councils-new-zealand", "wellington-to-napier-drive-guide", "holiday-parks-new-zealand-guide"],
    hubs: ["freedom-camping/hawkes-bay", "camping/hawkes-bay"],
    intro:
      "Napier and Hastings both let certified self-contained campervans stay overnight, but only in a short list of signed places, and the two councils run their rules separately. Napier keeps its sites around the Ahuriri waterfront and Marine Parade, with short stays and no camping in the city centre or on its grassed reserves. Hastings keeps a handful of car parks and reserves in the district, from Hastings itself out to Clive and the beach settlements. Tents and vehicles without a self-containment certificate belong in a holiday park.",
    sections: [
      s("What you need to freedom camp in Hawke's Bay", [
        "Both councils want a certified self-contained vehicle: a fixed toilet, a water supply, wastewater storage and the rest of the certification, with the certificate card displayed in the windscreen. A tent, a car with a mattress or a van with a portable toilet does not meet it. Since 7 June 2026 only the green warrant counts, which the guide to the self-contained campervan warrant explains.",
        "Beyond the vehicle, the rules come down to where you park. Each council publishes a list of places where overnight parking is allowed, and anywhere else on its land is either prohibited or at best tolerated for a single night. The national rules are in the freedom camping rules guide, and the council page is the one to trust when the two differ.",
      ], ["Green warrant, displayed", "Signed places only", "Council page beats this guide"]),
      s("Napier: Ahuriri and Marine Parade", [
        "Napier's freedom camping spots sit mostly along the waterfront north of the city centre. The council's page names the Pump Track car park off Marine Parade, Perfume Point at Ahuriri, Marine Parade North and the National Aquarium car park, which is open for camping only in the evening and early morning. They are small, usually room for a handful of vehicles, and they are first come, first served, so a late arrival in summer may find them full.",
        "The council has been tightening its bylaw in recent years, moving towards certified self-contained vehicles only and shorter stays, so the number of nights allowed has changed more than once. Read the sign on the night: it states the limit, and a site that was open last season can be closed this one. The council also caps total freedom camping on its land across a rolling 30 days.",
      ], ["Sites are small and fill by evening", "Night limits have changed, read the sign", "Rolling monthly cap on council land"]),
      s("Napier: where it is banned", [
        "Freedom camping is prohibited across most of the rest of the city. The council lists the city centre, the Marewa, Taradale and Tamatea shopping areas, McLean Park, Westshore Beach Reserve, the Foreshore Reserve car park, all grassed reserves and any road with a speed limit above 50 km/h. In practice that covers the Marine Parade promenade and beach car parks outside the designated places, which are the spots a visitor is most tempted by.",
        "The council patrols its sites and can issue an infringement notice on the spot. For a night in Napier without a designated space free, the nearest dependable beds are the holiday parks in town, which the council itself lists as alternatives.",
      ], ["Marine Parade outside the signed spots: no", "Grassed reserves: no", "Fines are issued on site"]),
      s("Hastings and the district", [
        "Hastings District Council keeps a list of designated overnight sites for certified self-contained vehicles. Eastbourne Street West car park in Hastings is the closest to the town, with a two nights a month limit, free parking from 6pm to 8am, a 12 metre length limit and no awnings. Further out, the list includes Evers-Swindell Reserve at Clive, the Clifton Road beachfront between Haumoana and Te Awanga, Haumoana Domain, Puketapu Domain and Dartmoor Bridge Reserve.",
        "The sites are basic: toilets at most, no showers and no power. Evers-Swindell is limited to the playground end of the sealed car park, and the reserve beyond the boat ramp belongs to the regional council, which does not allow overnight camping. Puketapu Domain closes its gate when the ground is sodden, usually in mid-winter, and the Clive site can flood in heavy rain or very high tides. Pākōwhai Country Park, which sounds like an option, is closed to overnight camping.",
      ], ["Eastbourne Street West: 2 nights a month", "Check for flooding and closed gates", "Regional council reserves are separate"], {
        caption: "Overnight sites listed for the Hastings district on the Hawke's Bay Tourism page, read on 9 November 2026. Check Hastings District Council for the current list and limits.",
        head: ["Site", "Area", "Notes"],
        rows: [
          ["Eastbourne Street West car park", "Hastings", "Certified self-contained only, 2 nights a month, 6pm to 8am, 12 m limit, no awnings"],
          ["Evers-Swindell Reserve", "Clive", "Playground end of the sealed car park only; toilets; can flood"],
          ["Clifton Road beachfront", "Haumoana to Te Awanga", "The largest of the district's sites; toilets"],
          ["Haumoana Domain", "Haumoana", "Toilets; shop and cafe nearby"],
          ["Puketapu Domain", "Puketapu", "Gate closed when the ground is sodden; toilets and playground"],
          ["Dartmoor Bridge Reserve", "Dartmoor Valley", "No facilities"],
        ],
      }),
      s("Fines and what to do instead", [
        "A breach of a council bylaw is an infringement under the Freedom Camping Act. The fees come from the Freedom Camping (Penalties for Infringement Offences) Regulations 2023: $400 for camping where it is prohibited or restricted, $400 for staying in a vehicle that is not self-contained where that is not allowed, $200 for not displaying the warrant card, and $800 for damaging the area or leaving waste. Hire companies receive the ticket as registered owners and then charge it to the renter's card.",
        "The sensible fallback in Hawke's Bay is a holiday park. Napier has several, and the guide to holiday parks in New Zealand explains how to book and what to expect. Department of Conservation land in the region is mostly in the Kaweka and Ruahine ranges inland, and KiwiCamping's DOC data (11 August 2026) lists 7 DOC campsites in the region, 6 of them free, with campervan access at only 2. DOC's freedom camping notices for Hawke's Bay cover 16 places.",
      ], ["$400 for most breaches", "Holiday parks for tents and uncertified vans", "DOC land is inland and basic"]),
      s("Using KiwiCamping in Hawke's Bay", [
        "KiwiCamping shows the DOC campsites and huts in the region, holiday parks with their facilities, and dump stations, with filters to narrow them to what your vehicle needs. It does not hold the councils' freedom camping sites, so use the council pages above for those and save a holiday park as your fallback for each night.",
        "Put the Napier night into a trip with its date and a note, and read the distance to the next stop, which for most people is the drive to or from Wellington or Taupō. Your saved Hawke's Bay spots and their details stay readable without coverage; the map, directions, forecast and photos load once you have signal again. The app is free to download, with in-app purchases.",
      ], ["Council sites: use the council's page", "Save a holiday park as the fallback", "Saved places stay on the phone"], undefined, true),
    ],
    faq: [
      ["Can I freedom camp in Napier?", "Yes, in a certified self-contained vehicle at a signed site such as the Ahuriri and Marine Parade car parks. It is banned in the city centre, on grassed reserves and at Westshore Beach Reserve, and sites are small and fill early."],
      ["Can I freedom camp in a tent or an uncertified van in Hastings?", "No. The district's overnight sites are for certified self-contained vehicles, so tents and uncertified vans need a holiday park or a campground."],
    ],
    sources: [
      { label: "Napier City Council: Freedom camping", url: "https://www.napier.govt.nz/napier/freedom-camping/information/" },
      { label: "Hawke's Bay Tourism: Freedom camping in Hastings District", url: "https://www.hawkesbaynz.com/visit/us/freedom-camping-in-hastings-district" },
      { label: "Hawke's Bay Tourism: Freedom camping in Napier", url: "https://www.hawkesbaynz.com/visit/us/freedom-camping-in-napier" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
    ],
  }),

  a({
    slug: "freedom-camping-nelson",
    title: "Freedom Camping in Nelson: Where You Can Stay",
    description: "Where campervans can park overnight in Nelson: the council's Responsible Camping Bylaw, the central car parks, night limits, what is banned, DOC land nearby and the holiday parks to use instead.",
    category: "Rules & safety",
    region: "Nelson Tasman",
    places: ["Nelson", "Richmond", "Atawhai", "Maitai Valley", "Tāhunanui"],
    imageAlt: "Nelson city and its harbour seen from the hills, with Tasman Bay beyond",
    related: ["freedom-camping-rules-new-zealand", "self-contained-campervan-green-warrant", "freedom-camping-tasman-2026", "nelson-abel-tasman-golden-bay", "holiday-parks-new-zealand-guide"],
    hubs: ["camping/nelson-tasman", "freedom-camping/nelson-lakes", "freedom-camping/motueka"],
    intro:
      "Nelson City Council allows overnight camping in a campervan only in signed car parks near the centre, and has done so under a new Responsible Camping Bylaw since 1 October 2025. The city is strict outside those places: no camping in tents, no camping in the parks and reserves, and short stays wherever it is allowed. The reliable options are a signed central car park for a certified self-contained vehicle or one of the holiday parks around the bay.",
    sections: [
      s("What the council's bylaw does", [
        "The Responsible Camping Bylaw replaced the older 2017 Freedom Camping Bylaw, and the council adopted it in July 2025 and brought it into force on 1 October 2025. It keeps the same basic idea as before: overnight stays are allowed only in a small set of listed places, each with its own vehicle limit, and everywhere else on council land is closed to camping.",
        "A night under the bylaw runs from 10pm to 7am, and stays at the listed places are short, usually a couple of nights at a time. The council's page and the signs at each car park carry the exact limit, which has changed with the bylaw, so treat the numbers on the sign as the rule.",
      ], ["Listed places only", "Night means 10pm to 7am", "The sign states the limit"]),
      s("Where you can park", [
        "The council's central-city car parks carry the freedom camping spaces: Buxton Car Park, Montgomery Car Park and Wakatu Car Park are the ones that have appeared on its lists, close to toilets and the centre of town. The council has added spaces in the central car parks while closing others, including Kinzett Terrace, Isel Park and the Maitai cricket ground, which are among the places that earlier lists used to include.",
        "Spaces are limited, and the vehicle numbers differ from one car park to the next. Buxton has also had a small number of spaces for vehicles that are not certified self-contained, which the council introduced with the new bylaw; the number has been quoted differently by different council documents, so check the current figure on the council's page before relying on it. Arrive early in summer, when the central car parks fill before dark.",
      ], ["Central car parks only", "A few non-certified spaces at Buxton, check the number", "Arrive early in summer"]),
      s("Where you cannot", [
        "Camping in tents is not allowed on council land, and neither is camping in the parks and reserves around the city, the Maitai Valley, the foreshore at Tāhunanui or the beach car parks, which is the kind of place visitors expect to find a spot. Anywhere not on the council's list should be treated as closed.",
        "The council patrols and enforces the bylaw, and a breach can bring a $400 fine for camping where it is not allowed, with $800 for damage or waste under the national fees from the Freedom Camping (Penalties for Infringement Offences) Regulations 2023. In a rental, the notice reaches the hire company first, and they bill you.",
      ], ["No tents on council land", "Parks, reserves and beaches: closed", "$400 for most breaches"]),
      s("Dump stations and the next town", [
        "The council lists free public dump stations for campervans on its camping page, and Nelson sits on the route between the ferry at Picton and the west coast, so it is a natural place to empty tanks and refill water. The guide to wastewater and rubbish explains the etiquette.",
        "If the central car parks are full, the next tier is Richmond and Tasman District, whose rules are different, so read Tasman District Council's page before you drive on. The holiday parks around Tāhunanui and Richmond are the dependable alternative in January.",
      ], ["Free public dump stations", "Richmond is a different council", "Holiday parks fill in January"]),
      s("DOC land near Nelson", [
        "Conservation land around Nelson is in Nelson Lakes National Park, the Abel Tasman and Kahurangi parks and the Richmond Range. KiwiCamping's DOC data (11 August 2026) lists 37 DOC campsites in Nelson Tasman, 35 of them with a fee and 31 bookable online through DOC, with adult nightly rates from $10 to $31, but only 8 have campervan access and 26 are reached on foot or by boat.",
        "DOC's freedom camping notices cover 8 places around Nelson Lakes and 7 around Motueka, and they are DOC's rules, separate from the council's. The Nelson, Abel Tasman and Golden Bay guide covers the wider route.",
      ], ["37 DOC campsites in Nelson Tasman", "Only 8 with campervan access", "DOC notices are separate from the council's"]),
      s("Using KiwiCamping around Nelson", [
        "KiwiCamping shows the DOC campsites and huts in Nelson Tasman, holiday parks with their facilities and dump stations, with filters for campervan access. It does not hold the council's central car parks, so the council page is the source for those.",
        "Add the Nelson night to a trip with its date and a holiday park as the fallback, and read the distance to the next stop, whether that is Abel Tasman, Golden Bay or the drive south. Saved Nelson places and guides open offline, which helps on the Takaka Hill, though the map, routes, weather and photos wait for a connection. It is free to download, with in-app purchases.",
      ], ["Council car parks: use the council's page", "Save a holiday park as the fallback", "Saved places stay on the phone"], undefined, true),
    ],
    faq: [
      ["Can I freedom camp in Nelson?", "Only in the signed central car parks the council lists, such as Buxton and Montgomery, with short stays and limited spaces. Parks, reserves, beaches and tent camping are not allowed."],
      ["When did Nelson's camping rules change?", "The Responsible Camping Bylaw came into force on 1 October 2025 and replaced the 2017 bylaw. Check the sign at each car park for the current limit."],
    ],
    sources: [
      { label: "Nelson City Council: Responsible camping", url: "https://www.nelson.govt.nz/5community/2recreation/responsible-camping" },
      { label: "Nelson City Council: Responsible Camping Bylaw", url: "https://shape.nelson.govt.nz/responsible-camping-bylaw" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
    ],
  }),

  a({
    slug: "freedom-camping-kaikoura",
    title: "Freedom Camping in Kaikōura: Where You Can Stay",
    description: "Where certified self-contained campervans can freedom camp in Kaikōura: the council's signed sites, the one-night limit, the toilet rule, what is banned and the holiday parks and campgrounds to use instead.",
    category: "Rules & safety",
    region: "Canterbury",
    places: ["Kaikōura", "South Bay", "Kaikōura Peninsula", "Mangamaunu", "Oaro"],
    imageAlt: "Kaikōura Peninsula jutting into the sea with the Kaikōura Ranges rising behind it",
    related: ["freedom-camping-rules-new-zealand", "self-contained-campervan-green-warrant", "picton-kaikoura-christchurch-route", "camping-rules-local-councils-new-zealand", "holiday-parks-new-zealand-guide"],
    hubs: ["freedom-camping/north-canterbury", "camping/canterbury"],
    intro:
      "Kaikōura lets certified self-contained campervans freedom camp in a short list of signed sites, for one night at a time, and it enforces the rule hard. Tents are not allowed, the township and most of the coast are closed to camping, and the council checks that your toilet is usable inside the van with the bed made up. If you want more than a night, or you are in a tent or an uncertified van, the town's holiday parks and campgrounds are the answer.",
    sections: [
      s("What the council requires", [
        "Kaikōura District Council's Responsible Freedom Camping Bylaw allows freedom camping only in certified self-contained vehicles, and only at the sites it lists. The vehicle needs a current self-containment certificate, shown on request, and from 7 June 2026 that means the green warrant, which the guide to the self-contained campervan warrant explains.",
        "The council is specific about toilets. In its definition a self-contained vehicle has a toilet that you can use easily inside the van at all times, including with the bed made up. A portable toilet buried under bedding or stored where you cannot reach it is treated as not meeting the rule, and officers have fined vehicles for it, so keep the toilet accessible before you go to sleep.",
      ], ["Green warrant, shown on request", "Toilet usable with the bed made up", "No tents"]),
      s("Where you can park", [
        "The council lists a handful of designated sites, including the West End car park, Jimmy Armer's Beach, Scarborough Street, the South End railway station car park and Pōhowera at South Bay. The usual limit is one night in the same spot, or within 500 metres of it, in any four-week period, which is much stricter than the two or three nights allowed in many towns.",
        "Pōhowera at South Bay is closed from mid-August to the end of February to protect nesting banded dotterel, which takes it out of the summer season entirely. The old spot opposite the fire station is no longer allowed. Sites are small and are used by the first campervans in each evening, so a late arrival in January should plan for a holiday park.",
      ], ["One night per four weeks at the same spot", "Pōhowera closed mid-August to February", "Sites fill by evening"]),
      s("Where it is banned", [
        "Most of the district is closed. The council's list includes the Kaikōura urban area outside its signed sites, the Kiwa Road area at Mangamaunu and the coastal strip south of the town, with the coast along State Highway 1 being the stretch travellers are most tempted by. The seal colony car parks and the shoreline north and south of town are not places to stay overnight even if there is room.",
        "The bylaw covers council land only. Land managed by DOC, KiwiRail or NZTA has its own rules, so a lay-by on the highway is not covered by the council's list, and nor does it make the spot safe. Fines are $400 for freedom camping where it is not allowed, $400 for a vehicle that is not self-contained, $200 for no warrant card on display and $800 for damage or waste, under the Freedom Camping (Penalties for Infringement Offences) Regulations 2023.",
      ], ["Town and coast outside signed sites: banned", "DOC, KiwiRail and NZTA land has its own rules", "$400 for most breaches"]),
      s("Holiday parks and campgrounds", [
        "The sure option in Kaikōura is a holiday park or campground. Several sit in and around the town, and the council points visitors to them alongside its freedom camping rules. Summer is the time to book ahead, because the whale watching crowd and the school holidays fill the town, and the one-night freedom camping spots go early.",
        "Kaikōura sits between Picton and Christchurch, so many travellers arrive off a long drive. The Picton to Kaikōura to Christchurch route guide shows the stops along the way, and the guide to holiday parks explains how to book them.",
      ], ["Book ahead in summer", "Whale watching fills the town", "Midway between Picton and Christchurch"]),
      s("DOC land nearby", [
        "Conservation land is inland in the Kaikōura Ranges and along the Clarence and Waiau valleys. DOC's freedom camping notices for North Canterbury list 6 current places, with camping prohibited at 5 of them. KiwiCamping's DOC data (11 August 2026) lists 22 DOC campsites across Canterbury, 6 of them free, though most are well inland.",
        "Those notices are DOC's own and are separate from the council's, so the council page decides the town and the DOC page decides the conservation land.",
      ], ["DOC notices cover 6 places in North Canterbury", "Canterbury has 22 DOC campsites", "Council and DOC rules are separate"]),
      s("Using KiwiCamping around Kaikōura", [
        "Around Kaikōura, KiwiCamping lists the holiday parks, DOC sites and the nearest dump station, and you can filter for places a campervan can reach. It does not hold the council's freedom camping sites, so use the council page for those and save a holiday park as your fallback for the night.",
        "Add Kaikōura to a trip between Picton and Christchurch with its date and a note, and read the distance on each leg. Coverage thins out along the Kaikōura coast road, but the places and guides you saved still open; maps, routing, weather and photos come back with signal. Free to download, with in-app purchases.",
      ], ["Council sites: use the council's page", "Save a holiday park as the fallback", "Saved places stay on the phone"], undefined, true),
    ],
    faq: [
      ["Can I freedom camp in Kaikōura?", "Yes, in a certified self-contained vehicle at one of the council's signed sites, for one night at a time. Tents are not allowed and most of the town and coast is closed to camping."],
      ["Why do Kaikōura officers check my toilet?", "The council's definition of self-contained requires a toilet that is easy to use inside the van at all times, including with the bed made up, and it fines vehicles that fail that test."],
    ],
    sources: [
      { label: "Kaikōura District Council: Responsible camping", url: "https://www.kaikoura.govt.nz/rules-regs-licenses/responsible-camping" },
      { label: "Kaikōura Responsible Freedom Camping Bylaw 2019 (2023 review)", url: "https://www.kaikoura.govt.nz/our-council/plans-reports-bylaws-and-policies/" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
    ],
  }),

  a({
    slug: "freedom-camping-raglan",
    title: "Freedom Camping in Raglan: Where You Can Stay",
    description: "How freedom camping works in Raglan: Waikato District Council's rules for certified self-contained vehicles, the three-night limit, the site maps, what is banned, Te Toto Gorge and the holiday parks to use instead.",
    category: "Rules & safety",
    region: "Waikato",
    places: ["Raglan", "Manu Bay", "Ngarunui Beach", "Whale Bay", "Te Toto Gorge"],
    imageAlt: "Raglan on the shore of its harbour, with the township, the water and green hills behind",
    related: ["freedom-camping-rules-new-zealand", "self-contained-campervan-green-warrant", "camping-wastewater-rubbish-new-zealand", "camping-rules-local-councils-new-zealand", "holiday-parks-new-zealand-guide"],
    hubs: ["freedom-camping/waikato", "camping/waikato"],
    intro:
      "Raglan sits in Waikato District, and the council lets certified self-contained vehicles stay on much of its land, except in the prohibited areas, for up to three nights in one place. That sounds generous, but Raglan is small and popular, the council publishes a map for each area, and the surf beaches and the town centre are the places with the most signs. Tents and vehicles without a toilet and wastewater tank are not allowed anywhere in the district and should use a holiday park.",
    sections: [
      s("What the council says", [
        "Waikato District Council's freedom camping rules apply across the whole district, which includes Raglan. A vehicle must be fully self-contained, with a toilet, a wastewater tank and rubbish facilities on board, and the green warrant is the proof since 7 June 2026, as the guide to the self-contained campervan warrant explains. A certified vehicle can freedom camp on council land anywhere except the prohibited areas, with a limit of three nights in any one area.",
        "The council's page also bans fires, asks you to empty wastewater at an approved dump station every two or three nights, and says rubbish goes in a bin or a council transfer station, not left behind. Raglan has a dump station on Marine Parade, and the guide to wastewater and rubbish covers the etiquette.",
      ], ["Certified self-contained only", "Three nights in one area", "No fires; dump station on Marine Parade"]),
      s("Where you can park", [
        "The council lists the Raglan locations on its camping page, each with its own map, and the surf coast west of the town is the area most visitors want. Check the map for the spot before you drive out, because a car park that looks like a camping place can be a prohibited one, and the rule is that a sign beats a rumour.",
        "Raglan's best-known beaches, Manu Bay, Ngarunui and Whale Bay, are busy with surfers and day trippers, and the car parks near them are the ones most likely to carry no-camping signs. If a spot is allowed, arrive late in the day and leave early, keep the site clean and use the toilets provided rather than your own on the beach.",
      ], ["Check the council's map for each spot", "Surf beach car parks are busy", "Arrive late, leave early"]),
      s("Where it is banned", [
        "The council's bylaw prohibits freedom camping in listed areas, including town centres and residential streets, and says to observe all no-camping signs. In Raglan, assume the main street and the streets around it are closed, and follow any sign over a guess. Land managed by DOC has its own rules and is not covered by the council's page.",
        "Te Toto Gorge, a short drive from Raglan, is one of them: DOC's freedom camping notice there prohibits camping. A breach of the bylaw can bring a $400 fine, and a vehicle that is not self-contained also risks $400, with $200 for not displaying the warrant card and $800 for damage or waste, under the Freedom Camping (Penalties for Infringement Offences) Regulations 2023.",
      ], ["Town centre and streets: no", "Te Toto Gorge: DOC notice, no camping", "$400 for most breaches"]),
      s("Without a certified vehicle", [
        "A tent, a car with a mattress or a van with a portable toilet cannot freedom camp anywhere in Waikato District. The council points those travellers to holiday parks, campgrounds and DOC camping areas, and in Raglan the harbourside holiday parks are the dependable choice, with the Kopua Holiday Park on the water the best known. They fill quickly in summer and at New Year, so book ahead.",
        "For how booking a Raglan holiday park works in summer, see the guide to holiday parks in New Zealand. KiwiCamping's DOC data (11 August 2026) lists 7 DOC campsites in the Waikato region, 4 of them bookable online and all in forest parks inland, none on the Raglan coast.",
      ], ["Tents need a holiday park", "Book ahead in summer", "DOC campsites are inland"]),
      s("Using KiwiCamping around Raglan", [
        "KiwiCamping shows DOC campsites, holiday parks with their facilities and bookable stays, and dump stations, with filters for campervan access. It does not hold the council's freedom camping areas, so the council's maps are the source for those.",
        "Add Raglan to a trip, perhaps between Hamilton and the Coromandel or the Waitomo caves, with the date and a holiday park as the fallback, and read the distance to the next stop. Around the Raglan bays the saved places and their notes work without reception, while maps, routes, the forecast and photos need a signal. The download is free, with in-app purchases.",
      ], ["Council maps decide the spot", "Save a holiday park as the fallback", "Saved places stay on the phone"], undefined, true),
    ],
    faq: [
      ["Can I freedom camp in Raglan?", "In a certified self-contained vehicle, yes, on council land outside the prohibited areas, for up to three nights in one area. Tents and uncertified vehicles must use a holiday park."],
      ["Is there a dump station in Raglan?", "Yes. The council lists one on Marine Parade, and it asks self-contained vehicles to empty their tanks every two or three nights."],
    ],
    sources: [
      { label: "Waikato District Council: Camping", url: "https://www.waikatodistrict.govt.nz/camping" },
      { label: "Raglan Naturally: Freedom camping", url: "https://raglan.net.nz/freedom-camping/" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
    ],
  }),

  a({
    slug: "freedom-camping-timaru",
    title: "Freedom Camping in Timaru: Where You Can Stay",
    description: "Freedom camping in Timaru: why the district has no bylaw, how Caroline Bay's overnight parking works, what the national rules mean, the nearby DOC sites and the holiday parks to use instead.",
    category: "Rules & safety",
    region: "Canterbury",
    places: ["Timaru", "Caroline Bay", "Pleasant Point", "Temuka", "Geraldine"],
    imageAlt: "Stafford Street in central Timaru, lined with historic buildings",
    related: ["freedom-camping-rules-new-zealand", "self-contained-campervan-green-warrant", "camping-rules-local-councils-new-zealand", "christchurch-tekapo-aoraki-road-trip", "holiday-parks-new-zealand-guide"],
    hubs: ["camping/canterbury", "freedom-camping/geraldine"],
    intro:
      "Timaru District has no freedom camping bylaw of its own, which means the national rules in the Freedom Camping Act apply, and the council has chosen to warrant its officers to enforce them rather than write local rules. Caroline Bay, the beachfront the town used to encourage campers on, now has paid overnight parking at its two car parks. For a bed in Timaru you want either a certified self-contained vehicle parked where the council allows it, or the Caroline Bay holiday park.",
    sections: [
      s("No local bylaw: what that means", [
        "In June 2025 Timaru District Council decided not to develop a freedom camping bylaw and instead to warrant staff under the Freedom Camping Act 2011. Without a bylaw there is no list of banned or restricted places, so the Act's own limits apply: you can freedom camp on council land that is not protected by a rule or a sign, and an officer can act against camping that harms a place or breaks another rule.",
        "That does not make everywhere fair game. Reserves, parks and beaches still carry their own rules, signs still count, and the council can prosecute for damage or waste. The sensible reading is to freedom camp only where a sign or the council says you can, and to treat any no-camping sign as binding.",
      ], ["National rules apply", "Signs still count", "Officers can enforce the Act"]),
      s("Caroline Bay", [
        "Caroline Bay is the beachfront next to the town centre and was the district's best-known freedom camping place. The council introduced paid overnight parking at the two car parks where it used to encourage campers, so a night there now means paying, and the council has been asking the public what kind of camping it wants around the bay. Its Caroline Bay policy has long limited self-contained overnight parking to the car park beside the roller skating rink, and said tents and caravans need the council's approval.",
        "Because that policy and the signs can change, read the sign at the car park and the council's Caroline Bay page before you settle in. The holiday park on the bay is the secure way to stay beside the beach in summer, and it books out around Christmas and for the Caroline Bay Carnival.",
      ], ["Overnight parking is paid", "Tents and caravans need approval", "Holiday park books out at Christmas"]),
      s("Other places around Timaru", [
        "Rankers and similar apps list overnight campervan spots around the district, such as O'Neills Reserve, but these are community listings and not council ones, with limits like three nights and an arrival after 4pm that only the sign confirms. Treat them as leads and check the sign.",
        "A different rule applies to the Mackenzie Country inland, where councils such as Waitaki and Mackenzie District have their own bylaws, so read the page of the council you are driving into.",
      ], ["Community listings are leads, not rules", "Check the sign on arrival", "Mackenzie and Waitaki have their own bylaws"]),
      s("Fines", [
        "Officers who are warranted under the Act can issue the national infringement fees: $400 for freedom camping in a place where it is prohibited, $400 for using a vehicle that is not self-contained where it must be, $200 for not displaying the warrant card and $800 for damaging the area or leaving waste, under the Freedom Camping (Penalties for Infringement Offences) Regulations 2023.",
        "A certified self-contained vehicle needs the green warrant since 7 June 2026, which the guide to the self-contained campervan warrant explains. If you are in a hire van, the infringement notice is sent to the rental firm, which recovers it from you.",
      ], ["$400 for most breaches", "$800 for waste or damage", "Green warrant since 7 June 2026"]),
      s("DOC land and the holiday park", [
        "Conservation land is inland, in the foothills around Geraldine and Peel Forest. KiwiCamping's DOC data (11 August 2026) lists 22 DOC campsites in Canterbury, 6 of them free and 14 bookable through DOC, with Peel Forest Campground the largest with room for 81. DOC's freedom camping notices around Geraldine are DOC's own rules, separate from the council's.",
        "The guide to holiday parks in New Zealand explains how to book them, and the Christchurch to Tekapo and Aoraki road trip shows where Timaru fits on the inland route.",
      ], ["22 DOC campsites in Canterbury", "Peel Forest is the largest", "Holiday park for the bay"]),
      s("Using KiwiCamping around Timaru", [
        "In South Canterbury the KiwiCamping map holds Timaru's holiday parks and dump points along with the DOC sites in the foothills, filterable by vehicle access. It does not hold the council's overnight parking, so use the council page and the sign for the bay.",
        "Add Timaru to a trip between Christchurch and Dunedin, or on the way to Tekapo, with its date and a holiday park as the fallback, and read the distance on each leg. Saved Timaru spots and guides are on the phone, so they open without coverage; map tiles, directions, weather and photos load when you are back in range. Free to download, with in-app purchases.",
      ], ["Council page and sign decide", "Save a holiday park as the fallback", "Saved places stay on the phone"], undefined, true),
    ],
    faq: [
      ["Can I freedom camp in Timaru?", "Timaru District has no bylaw, so the national rules apply and the council enforces them. Caroline Bay now charges for overnight parking, so treat signs as binding and keep a holiday park as the fallback."],
      ["Is overnight parking at Caroline Bay free?", "No. The council introduced paid overnight parking at the two car parks where camping was once encouraged, so check the sign and the council's page for the current charge."],
    ],
    sources: [
      { label: "Timaru District Council: Freedom camping public survey 2025", url: "https://www.timaru.govt.nz/tell-us/past-consultations/freedom-camping-bylaw-public-survey" },
      { label: "Timaru District Council: Caroline Bay Policy", url: "https://timaru.govt.nz/council/publications/policies/caroline-bay-policy" },
      { label: "Freedom Camping Act 2011", url: "https://www.legislation.govt.nz/act/public/2011/0061/latest/whole.html" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
    ],
  }),

  a({
    slug: "freedom-camping-whitianga",
    title: "Freedom Camping in Whitianga: Where You Can Stay",
    description: "Where certified self-contained campervans can stay overnight in Whitianga and Mercury Bay: the Lee Street and Monk Street car parks, the two-night limit, Hahei and Hot Water Beach bans, Cathedral Cove and the holiday parks.",
    category: "Rules & safety",
    region: "Coromandel",
    places: ["Whitianga", "Mercury Bay", "Hahei", "Hot Water Beach", "Cathedral Cove", "Coroglen"],
    imageAlt: "Whitianga Harbour on the Coromandel Peninsula, with boats on the water and the town along the shore",
    related: ["freedom-camping-rules-new-zealand", "self-contained-campervan-green-warrant", "camping-rules-local-councils-new-zealand", "coromandel-rotorua-road-trip", "holiday-parks-new-zealand-guide"],
    hubs: ["freedom-camping/whitianga", "camping/coromandel"],
    intro:
      "Whitianga has two small council car parks where certified self-contained campervans can stay overnight, and almost everywhere else in Mercury Bay is closed. Lee Street car park has eight marked spaces and the Mercury Bay area office car park in Monk Street has four. Hāhei and Hot Water Beach are banned outright, and so is the Cathedral Cove car park. In summer the spaces fill early, which makes a holiday park the dependable option.",
    sections: [
      s("What Thames-Coromandel's bylaw requires", [
        "Whitianga is in the Thames-Coromandel District, whose Freedom Camping Bylaw allows camping on council land only in certified self-contained vehicles. Tents are not allowed, a vehicle may stay no more than two consecutive nights, and camping is allowed only between 5pm and 9am, with some sites using 5pm to 8am. The vehicle must carry the green warrant, which has been the only accepted certificate since 7 June 2026 and which the guide to the self-contained campervan warrant explains.",
        "The bylaw is council-wide, so Whitianga's two sites sit in the same list as places in Thames, Whangamatā, Tairua and Coromandel Town. The council publishes maps, but the written bylaw wins if they disagree, and the sign at the car park is the final word on the night.",
      ], ["Certified self-contained only, no tents", "Two nights, 5pm to 9am", "The bylaw's schedule beats the map"]),
      s("The two Whitianga car parks", [
        "Lee Street car park at 2 Lee Street has eight marked spaces at its west end, next to number 14, shown by signs. It is close to the town centre and the harbour, which makes it the busiest of the district's sites in January. The Mercury Bay area office car park in Monk Street has four spaces, with the 5pm to 8am window, so you need to be gone earlier.",
        "A full site means you cannot stay: the bylaw sets a maximum number of vehicles, and arriving after the spaces are taken means moving on. Outside the peak, an early evening arrival is usually enough, and the council can close either car park for events or maintenance, which it publicises by signs and its own channels.",
      ], ["Lee Street: 8 spaces", "Monk Street: 4 spaces, 5pm to 8am", "Sites can close for events"]),
      s("Where it is banned", [
        "The bylaw prohibits freedom camping in 84 listed areas across the district, and several are the places Mercury Bay visitors want most. The Esplanade and the Dundas Street boat ramp area in Whitianga are on the list, and the whole of the Hāhei and Hot Water Beach settlements are closed, including every road and council reserve.",
        "Cathedral Cove has a separate rule. DOC's freedom camping notice for the Cathedral Cove car park prohibits camping, and DOC's notices around Whitianga cover 4 places, all of them prohibitions. The rest of the peninsula follows the same council-wide bylaw.",
      ], ["The Esplanade: no", "Hāhei and Hot Water Beach: no", "Cathedral Cove car park: DOC notice, no camping"]),
      s("Fines", [
        "A breach of the bylaw is an infringement offence under the Freedom Camping Act. The fees under the Freedom Camping (Penalties for Infringement Offences) Regulations 2023 are $400 for freedom camping where it is prohibited or restricted, $400 for a vehicle that is not self-contained where it must be, $200 for no warrant card on display and $800 for damage or waste. Fines are issued to the vehicle's registered owner, so renters usually see it charged later by the hire company.",
      ], ["$400 for most breaches", "$800 for waste or damage", "Rental companies pass fines on"]),
      s("Holiday parks and DOC campsites", [
        "The sure option in Mercury Bay is a holiday park, and the guide to holiday parks in New Zealand explains how to book. They fill quickly in the Christmas and New Year weeks, so book ahead for Whitianga, Hāhei and Hot Water Beach.",
        "Conservation land on the peninsula is mostly in the Coromandel Forest Park and the northern coast. KiwiCamping's DOC data (11 August 2026) lists 20 DOC campsites in the Coromandel, 19 of them bookable online through DOC, with adult nightly rates from $10 to $23, and the guide to DOC campsites explains how booking works. The Coromandel to Rotorua road trip shows how the peninsula fits into a longer route.",
      ], ["Book ahead for New Year", "20 DOC campsites on the Coromandel", "19 bookable through DOC"]),
      s("Using KiwiCamping around Whitianga", [
        "KiwiCamping shows the DOC campsites and huts on the peninsula, holiday parks with their facilities and dump stations, with filters for campervan access. It does not hold the council's two car parks, so use the council's page for those and keep a holiday park as the fallback.",
        "Add Whitianga to a trip with its date and a note, and read the distance to Coromandel Town or Tairua. On the Coromandel's gaps in coverage you can still open the places and guides you saved, but the map, routing, forecast and photos need a signal. It costs nothing to download, with in-app purchases.",
      ], ["Council car parks: use the council's page", "Save a holiday park as the fallback", "Saved places stay on the phone"], undefined, true),
    ],
    faq: [
      ["Where can I freedom camp in Whitianga?", "Only in a certified self-contained vehicle at the council's two signed car parks: Lee Street with eight spaces and Monk Street with four. Everything else, including The Esplanade, Hāhei and Hot Water Beach, is closed."],
      ["Can I camp at Cathedral Cove?", "No. DOC's notice for the Cathedral Cove car park prohibits camping, so use a holiday park or a DOC campsite nearby."],
    ],
    sources: [
      { label: "Thames-Coromandel District Council: Freedom camping", url: "https://www.tcdc.govt.nz/camping" },
      { label: "Thames-Coromandel District Council: Freedom Camping Bylaw 2022", url: "https://www.tcdc.govt.nz/Our-Council/Bylaws-Codes-and-Policies/Bylaws/Freedom-Camping-Bylaw-2022" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
    ],
  }),

  a({
    slug: "freedom-camping-picton",
    title: "Freedom Camping in Picton: Where You Can Stay After the Ferry",
    description: "Freedom camping in Picton: overnight stays are banned in every public car park, so where to go instead after the Interislander or Bluebridge, from Renwick and Blenheim sites to holiday parks and DOC campsites in the Sounds.",
    category: "Rules & safety",
    region: "Marlborough",
    places: ["Picton", "Blenheim", "Renwick", "Queen Charlotte Sound", "Marlborough Sounds"],
    imageAlt: "Picton and its harbour in the Marlborough Sounds, with boats moored below green hills",
    related: ["freedom-camping-rules-new-zealand", "cook-strait-ferry-campervan-guide", "picton-kaikoura-christchurch-route", "self-contained-campervan-green-warrant", "holiday-parks-new-zealand-guide"],
    hubs: ["freedom-camping/sounds", "camping/marlborough"],
    intro:
      "You cannot freedom camp in Picton. Marlborough District Council prohibits overnight stays in every public car park in the town, including the signposted spaces for campervans and oversized vehicles, which are for daytime parking only. The nearest council sites for certified self-contained vehicles are out at Renwick and in Blenheim, and for a first night off the ferry the dependable answer is a holiday park in Picton or a DOC campsite in the Sounds.",
    sections: [
      s("The Picton rule", [
        "Picton is where most campervans arrive in the South Island, off the Interislander or Bluebridge ferry, and many arrive tired and expecting a place to park for the night. The council's parking page says freedom camping and overnight stays are prohibited in all public car parking areas in Picton, and the ferry operators repeat the message to passengers. The signed campervan bays around the waterfront are for short daytime stops.",
        "The council enforces the rule, and the national infringement fees apply: $400 for freedom camping where it is prohibited or restricted, $400 for a vehicle that is not self-contained where it must be, $200 for no warrant card on display and $800 for damage or waste, under the Freedom Camping (Penalties for Infringement Offences) Regulations 2023.",
      ], ["No overnight stays in Picton car parks", "Campervan bays are for daytime", "$400 for most breaches"]),
      s("Where the council allows camping nearby", [
        "Marlborough's Responsible Camping Control Bylaw allows camping on council land only for certified self-contained vehicles, with a single exception at Blairich Reserve in the Awatere Valley for cyclists. The sites the council lists are outside Picton: Renwick Domain car park, which has room for 20 vehicles and a 6pm to 9am window with a two night limit, and Wynen Street car park in Blenheim, also 6pm to 9am. Both are about 25 to 30 minutes from the ferry terminal by road.",
        "The council has also used a temporary site at the Wairau Diversion near Blenheim, which may or may not still be open, and the whole list changes. The council's responsible camping page has the full list and the current map.",
      ], ["Renwick Domain: 20 vehicles", "Wynen Street in Blenheim", "Self-contained only"]),
      s("Holiday parks in Picton", [
        "The sure choice for the first night is a holiday park in Picton itself. The council's list includes Parklands Marina Holiday Park, Blue Anchor Holiday Park, Picton Caravan Park and Alexander's Holiday Park, all within a few minutes of the ferry terminal, and they are the right answer for tents and for vehicles without a self-containment certificate. They fill on the days around the school holidays and Christmas, so book before you board the ferry.",
        "The guide to the Cook Strait ferry covers booking the crossing and what happens on arrival, and the guide to holiday parks in New Zealand explains how to book the parks themselves.",
      ], ["Book before the ferry", "A few minutes from the terminal", "Tents and uncertified vans: holiday park"]),
      s("DOC campsites in the Sounds", [
        "The Marlborough Sounds have the densest DOC camping in the north of the South Island. KiwiCamping's DOC data (11 August 2026) lists 44 DOC campsites in Marlborough, 10 of them free, with adult nightly rates from $10 to $27 and 20 bookable online through DOC. But 25 of the 44 are reached only on foot or by boat, and only 15 have campervan access, so check access before you drive. Whites Bay near Blenheim is the largest with room for 67.",
        "DOC's freedom camping notices in the Sounds cover 11 places, 10 of them prohibitions, so a roadside bay is not automatically a camping place. The notices are DOC's own and are separate from the council's.",
      ], ["44 DOC campsites in Marlborough", "25 are boat or foot access only", "DOC notices ban camping at 10 places"]),
      s("Using KiwiCamping from Picton", [
        "The campervan-access filter in KiwiCamping earns its keep in the Sounds, where many DOC campsites are boat- or track-only; the app also lists Picton's parks and dump stations. It does not hold the council's Renwick and Blenheim sites, so use the council's page for those.",
        "Add the first night off the ferry to a trip with its date, and read the distance to Blenheim, Nelson or Kaikōura. Saved Marlborough places and guides stay on the phone for the patchy Sounds roads, while maps, routes, weather and photos load only with signal. Free to download, with in-app purchases.",
      ], ["Filter for campervan access", "Plan the first night before boarding", "Saved places stay on the phone"], undefined, true),
    ],
    faq: [
      ["Can I sleep in my campervan in Picton?", "Not in any public car park: Marlborough District Council prohibits overnight stays in all of them. Use a holiday park in Picton, or a council site for certified self-contained vehicles at Renwick or in Blenheim."],
      ["Where do I stay the first night off the Picton ferry?", "A holiday park in Picton is the simplest, and booking before you board avoids a full night. DOC campsites in the Sounds suit vehicles that can reach them."],
    ],
    sources: [
      { label: "Marlborough District Council: Parking fees and locations, Picton", url: "https://www.marlborough.govt.nz/services/parking/parking-fees-and-locations-picton" },
      { label: "Marlborough District Council: Camping in Marlborough", url: "https://www.marlborough.govt.nz/recreation/responsible-camping/camping-in-marlborough" },
      { label: "Interislander: Where to park", url: "https://www.interislander.co.nz/plan/where-to-park" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
    ],
  }),

  a({
    slug: "freedom-camping-te-anau",
    title: "Freedom Camping in Te Anau: What the Rules Are and Where to Stay",
    description: "Freedom camping in Te Anau and on the Milford Road: why the township and nearby DOC land are closed to camping, the Southland District rules, Fiordland's DOC campsites and the holiday parks to book instead.",
    category: "Rules & safety",
    region: "Southland",
    places: ["Te Anau", "Manapouri", "Milford Sound", "Fiordland", "Lake Te Anau"],
    imageAlt: "Lake Te Anau with the Murchison Mountains rising across the water",
    related: ["freedom-camping-rules-new-zealand", "fiordland-camping-road-trip", "queenstown-to-milford-sound-drive-guide", "kepler-track-camping-2026-27", "holiday-parks-new-zealand-guide"],
    hubs: ["freedom-camping/te-anau", "camping/fiordland"],
    intro:
      "You cannot freedom camp in Te Anau. Southland District Council's bylaw maps show the whole township, and the neighbouring towns of Manapouri, Riverton and Tuatapere, as closed to camping, and DOC's freedom camping notices for the Te Anau district ban it on conservation land too, including along the Milford Road. The way to sleep near Fiordland is a Te Anau holiday park or one of DOC's Fiordland campsites, booked ahead in summer.",
    sections: [
      s("Why Te Anau is closed", [
        "Te Anau is the gateway to Milford Sound and the Kepler, Routeburn and Milford tracks, and it has had years of trouble with overnight camping near the lakefront, so the council's Freedom Camping Bylaw 2015 treats the township as a prohibited area. Camping is also banned in urban zones, council car parks and boating areas across the district. The council's own list of freedom camping sites has no entry for Te Anau or Manapouri.",
        "The council is reviewing the bylaw, with public consultation planned for late 2026, so the rules could change in future, but nothing on the council's pages today gives a visitor a legal freedom camping place in Te Anau. A lakeside car park or street that looks empty is not an exception.",
      ], ["Township closed to camping", "Council list has no Te Anau site", "Bylaw under review, consultation late 2026"]),
      s("DOC land and the Milford Road", [
        "Conservation land around Te Anau is not covered by the council's bylaw, but DOC has its own notices, and in this district they are all bans. KiwiCamping's DOC data (11 August 2026) holds 24 current freedom camping notices for the Te Anau district, every one prohibiting camping, and they include the Te Anau area office and visitor centre car parks, Te Anau Downs, Lake Mistletoe and Patience Bay on the Milford Road.",
        "The Milford Road itself runs through Fiordland National Park and has no roadside camping. Overnight parking in the lay-bys and viewpoints is prohibited, so plan the drive as a day trip from a campsite or holiday park, and allow for the fact that the road can close for snow or avalanche risk.",
      ], ["24 DOC notices, all prohibitions", "No roadside camping on the Milford Road", "Plan Milford as a day trip"]),
      s("Where to stay instead", [
        "Te Anau has holiday parks and a motor camp on or near the lakefront, and Manapouri has its own. They are the straightforward choice for tents and for campervans without a self-containment certificate, and they fill from December to February and in the school holidays, so book ahead. Book Te Anau parks early in summer; the holiday parks guide shows how.",
        "Of the 13 Fiordland DOC campsites in KiwiCamping's data from 11 August 2026, 10 take online bookings, and an adult night costs between $10 and $42. Cascade Creek on the Milford Road is the largest, with room for 120, 8 of the 13 have campervan access, and 3 are free. 4 are reached only on foot or by boat, so check access before you drive.",
      ], ["Book Te Anau holiday parks ahead", "13 DOC campsites in Fiordland", "Cascade Creek is the biggest"]),
      s("Fines", [
        "Officers enforce the bylaw and the national fees apply, under the Freedom Camping (Penalties for Infringement Offences) Regulations 2023: $400 for camping where it is prohibited, $400 for a vehicle that is not self-contained where it must be, $200 for no warrant card on display and $800 for damage or waste. A rental's fine lands with the hire company, which passes the cost on with an admin fee.",
      ], ["$400 for most breaches", "$800 for waste or damage", "Rental companies pass fines on"]),
      s("Great Walks and the wider region", [
        "Te Anau is the start of the Kepler Track and the Milford Track transport, and the Great Walks guides explain how to book their huts and campsites through DOC, which sell out months ahead. The Fiordland road trip guide covers the wider drive, and the Queenstown to Milford Sound drive guide covers the day trip from the other side.",
      ], ["Great Walks book months ahead", "Fiordland road trip covers the loop", "Queenstown to Milford is a long day"]),
      s("Using KiwiCamping around Te Anau", [
        "KiwiCamping shows Fiordland's DOC campsites and huts with their fees and facilities, holiday parks with their facilities and bookable stays, and dump stations, with filters for campervan access. It does not hold the council's bylaw, so use the council's page for the rules.",
        "Save a holiday park or a DOC campsite for each night near the mountains, add them to a trip with dates, and check the forecast on each leg, which matters on the Milford Road. There is little coverage past Te Anau, so save places and guides before you leave town: they open offline, but the map, routing, weather and photos do not. The app is free, with in-app purchases.",
      ], ["Save a campsite for each night", "Check the forecast for Milford", "Saved places stay on the phone"], undefined, true),
    ],
    faq: [
      ["Can I freedom camp in Te Anau?", "No. Southland District Council's bylaw closes the township to camping and DOC's notices ban it at the Te Anau area car parks and along the Milford Road. Use a holiday park or a DOC campsite."],
      ["Where can I camp near Milford Sound?", "DOC's Fiordland campsites, such as Cascade Creek on the Milford Road, and the holiday parks in Te Anau. There is no roadside camping on the road itself."],
    ],
    sources: [
      { label: "Southland District Council: Freedom camping", url: "https://southlanddc.govt.nz/services/freedom-camping/" },
      { label: "Southland District Council: Freedom Camping Bylaw 2015", url: "https://southlanddc.govt.nz/assets/Bylaws-policies-and-strategies/bylaws/Freedom-Camping-Bylaw-2015.pdf" },
      { label: "Southland District Council: Freedom Camping Bylaw review", url: "https://southlanddc.govt.nz/make-it-stick/under-review/freedom-camping-bylaw-review/" },
      { label: "DOC: Conservation areas where freedom camping is prohibited or restricted", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/prohibited-conservation-areas/" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
    ],
  }),

  a({
    slug: "freedom-camping-twizel",
    title: "Freedom Camping in Twizel: Where You Can Stay",
    description: "Freedom camping in Twizel and around Lake Pukaki: Mackenzie District's bylaw, the closed town centre and lagoon, Lake Wardell for self-contained vehicles, the holiday closure and DOC's restricted camping areas.",
    category: "Rules & safety",
    region: "Canterbury",
    places: ["Twizel", "Lake Ruataniwha", "Lake Pukaki", "Lake Wardell", "Aoraki Mount Cook"],
    imageAlt: "Tasman Road in Twizel with a view down the street towards the mountains",
    related: ["freedom-camping-rules-new-zealand", "self-contained-campervan-green-warrant", "christchurch-tekapo-aoraki-road-trip", "christchurch-to-queenstown-drive-guide", "holiday-parks-new-zealand-guide"],
    hubs: ["freedom-camping/twizel", "camping/canterbury"],
    intro:
      "Twizel is the usual stop between Lake Tekapo and Aoraki Mount Cook, and Mackenzie District Council keeps freedom camping out of its commercial centre and off the Lake Ruataniwha lagoon shore. The places people use are signed sites outside the town, such as Lake Wardell on State Highway 8, which the council describes as a site for certified self-contained vehicles, first come first served. Some sites close between Christmas and mid-January, so the busiest fortnight is when they are least available.",
    sections: [
      s("What Mackenzie District's bylaw says", [
        "Twizel is in the Mackenzie District, whose Responsible Freedom Camping Bylaw 2023 covers council land only. Land that DOC, NZTA or LINZ manages follows other rules, and so do reserves under the Reserves Act, which generally ban camping. The council defines a self-contained camper as one with a fixed toilet that can meet its occupants' needs for at least three days without discharging waste, and from 7 June 2026 the green warrant is the only certificate accepted nationally.",
        "The council's page says the bylaw prohibits camping in the commercial centre of Twizel and along the western shore of Lake Ruataniwha, the lagoon area. A restricted site allows a maximum of three consecutive nights. Anything not on a list should be treated as closed, because a lay-by or lake edge without a sign is not a designated spot.",
      ], ["Council land only", "Three days of waste capacity", "Commercial centre and lagoon: banned"]),
      s("Lake Wardell and the other sites", [
        "Lake Wardell on State Highway 8 near Twizel is the council's best-known site for certified self-contained vehicles, with spaces on a first come, first served basis. It is a short drive from town, so arrive in the afternoon in summer if you want a space, and be ready to move on if it is full.",
        "The council has other restricted sites around the district, and the adopted list differs in places from the 2023 draft, so use its current map and the sign on the day rather than an older blog or app listing. Tents and vehicles without certification are not for these sites.",
      ], ["Lake Wardell: self-contained, first come first served", "Arrive early in summer", "Use the council's current map"]),
      s("The holiday closure", [
        "Four of the council's responsible camping sites are closed from 23 December to the second Monday in January inclusive, which in 2026-27 runs from 23 December 2026 to 11 January 2027. That is the fortnight when Twizel is fullest, so a Christmas or New Year trip needs a booked holiday park or DOC campsite, not a hope of a free space.",
        "A fine for camping in a closed place is $400 under the Freedom Camping (Penalties for Infringement Offences) Regulations 2023, with $400 for a vehicle that is not self-contained where it must be, $200 for no warrant card on display and $800 for damage or waste. The registered owner gets the notice, so in a hire van expect the rental company to forward the charge.",
      ], ["Closed 23 December to 11 January at four sites", "Book ahead for the holidays", "$400 for most breaches"]),
      s("DOC land near Twizel", [
        "DOC runs its own rules on conservation land around Twizel, and its freedom camping notices for the district list four restricted camping and amenity areas, including Quailburn and Round Bush, each with a limit of no more than four nights in a calendar month. Canterbury has 22 DOC campsites in KiwiCamping's 11 August 2026 data; 14 can be booked online, at $10 to $23 per adult per night.",
        "The guide to DOC campsites explains how booking works, and the guide to holiday parks covers the paid sites in Twizel, Tekapo and Aoraki Mount Cook.",
      ], ["4 DOC restricted areas, 4 nights a month", "22 DOC campsites in Canterbury", "14 bookable online"]),
      s("Using KiwiCamping around Twizel", [
        "KiwiCamping maps the Twizel holiday parks, the Mackenzie's DOC campsites and the dump stations in between, and its access filter hides the ones a van cannot reach. It does not hold the council's sites, so use the council's page for Lake Wardell and the rest.",
        "Add Twizel to a trip between Christchurch, Tekapo and Queenstown with its date and a note, keep a holiday park saved as the fallback, and read the distance on each leg. In the Mackenzie the places and guides you saved open without reception; map tiles, directions, the forecast and photos need coverage. Free to download, with in-app purchases.",
      ], ["Council page decides Lake Wardell", "Save a holiday park as the fallback", "Saved places stay on the phone"], undefined, true),
    ],
    faq: [
      ["Can I freedom camp in Twizel?", "Not in the town centre or along the Lake Ruataniwha lagoon. Certified self-contained vehicles can use the council's signed sites such as Lake Wardell, for a limited number of nights, and some sites close from 23 December to 11 January."],
      ["Is Lake Wardell free?", "The council describes it as a site for certified self-contained vehicles on a first come, first served basis, with no booking. Check the sign and the council's page for the current limits."],
    ],
    sources: [
      { label: "Mackenzie District Council: Camping", url: "https://mackenzie.govt.nz/home/icon-redirects/row-1/camping" },
      { label: "Mackenzie District Council: Responsible Freedom Camping Bylaw 2023", url: "https://www.mackenzie.govt.nz/__data/assets/pdf_file/0004/828193/Responsible-Freedom-Camping-Bylaw-2023.pdf" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
    ],
  }),

  a({
    slug: "freedom-camping-akaroa",
    title: "Freedom Camping in Akaroa: Where You Can Stay",
    description: "Where certified self-contained campervans can stay in Akaroa: the one signed freedom camping area at the Boat Park, the two-night limit, the township ban, tents on Banks Peninsula and the holiday parks to use instead.",
    category: "Rules & safety",
    region: "Canterbury",
    places: ["Akaroa", "Banks Peninsula", "Duvauchelle", "Lyttelton", "Little River"],
    imageAlt: "Akaroa Harbour on Banks Peninsula, with the township on the shore and green hills rising behind it",
    related: ["freedom-camping-rules-new-zealand", "self-contained-campervan-green-warrant", "banks-peninsula-camping-weekend", "camping-rules-local-councils-new-zealand", "holiday-parks-new-zealand-guide"],
    hubs: ["freedom-camping/mahaanui", "camping/canterbury"],
    intro:
      "Akaroa has one signed freedom camping area, at the north end of the town in the Boat Park, and it is for certified self-contained vehicles for a maximum of two nights in any 30 days. The rest of the council land in Akaroa township is prohibited, and tents and vehicles without certified facilities are not allowed anywhere in Akaroa or on Banks Peninsula. In summer the spaces go early, so a holiday park is the dependable bed.",
    sections: [
      s("What Christchurch City Council requires", [
        "Akaroa is in Christchurch City Council's area, so its Freedom Camping Bylaw 2021 applies, amended in November 2023 for the national self-containment changes. The council tightened Akaroa's rules after surveys found most locals thought freedom camping was a problem, and it now confines the activity to one marked area. Camping in a tent, or in a vehicle without certified toilet and wastewater facilities, is not allowed anywhere on Banks Peninsula.",
        "The vehicle needs a current self-containment certificate, which since 7 June 2026 means the green warrant that the guide to the self-contained campervan warrant explains. The bylaw covers council land only, so DOC and private land follow other rules.",
      ], ["Certified self-contained only", "No tents on Banks Peninsula", "Green warrant since 7 June 2026"]),
      s("The Akaroa Freedom Camping Area", [
        "The area is at the northern end of Akaroa, south of Woodills Road, in the north-eastern part of the Akaroa Boat Park. The council marks 18 spaces on site: two rows west of the croquet club, with seven larger spaces and eight medium ones, and a third row of three medium spaces beside Grehan Stream. The limit is two nights in any 30 days.",
        "Because the spaces are few and Akaroa is a day trip for Christchurch and a cruise ship stop, they fill early on summer evenings. The council's camping page carries a note that the area can be temporarily unavailable, so check the page and ring the council before you rely on it, and keep a holiday park in mind for the night.",
      ], ["18 marked spaces", "Two nights in any 30 days", "Check availability before relying on it"]),
      s("Where it is banned", [
        "Everything else the council owns or manages in the township is prohibited, which includes the waterfront, the wharf and the streets around the harbour. For daytime parking of large vehicles the council suggests the area near the boat ramp, but that is not an overnight spot.",
        "A fine for camping where it is prohibited is $400, with $400 for a vehicle that is not self-contained where it must be, $200 for no warrant card on display and $800 for damage or waste, under the Freedom Camping (Penalties for Infringement Offences) Regulations 2023. On a hired campervan the fine is posted to the hire company, who will add it to your bill.",
      ], ["Waterfront and streets: banned", "Boat ramp area is for day parking", "$400 for most breaches"]),
      s("Holiday parks and the wider peninsula", [
        "Akaroa has holiday parks in and just outside the town, and they are the right answer for tents, uncertified vans and anyone staying more than two nights. They book out over Christmas, the school holidays and the long weekends, so reserve ahead. The guide to holiday parks in New Zealand explains how booking works, and the Banks Peninsula camping weekend guide covers the wider loop.",
        "DOC's freedom camping notices around Christchurch and Banks Peninsula, for places such as Godley Head and Ripapa Island, prohibit camping. KiwiCamping's DOC data (11 August 2026) lists 22 DOC campsites in Canterbury, but the closest are well inland of the peninsula.",
      ], ["Book ahead for summer weekends", "DOC notices near Christchurch ban camping", "Closest DOC campsites are inland"]),
      s("Using KiwiCamping around Akaroa", [
        "On Banks Peninsula, KiwiCamping shows which holiday parks have power and showers, where the dump station is and which DOC sites a campervan can drive to. It does not hold the council's Boat Park area, so use the council's page for that and save a holiday park as the fallback.",
        "Add Akaroa to a trip from Christchurch with its date and a note, and read the distance on the winding road over the hills. Saved Banks Peninsula places and their notes open even where the hill road loses signal, while maps, routes, weather and photos wait for coverage. Free to download, with in-app purchases.",
      ], ["Council page decides the Boat Park", "Save a holiday park as the fallback", "Saved places stay on the phone"], undefined, true),
    ],
    faq: [
      ["Can I freedom camp in Akaroa?", "Only in the council's one marked area at the Boat Park, in a certified self-contained vehicle, for up to two nights in any 30 days. The rest of the township is prohibited and tents are not allowed on Banks Peninsula."],
      ["How many spaces are there at the Akaroa freedom camping area?", "The council marks 18 spaces: seven larger and eight medium ones in two rows by the croquet club, and three medium spaces beside Grehan Stream."],
    ],
    sources: [
      { label: "Christchurch City Council: Camping and campervans", url: "https://ccc.govt.nz/rec-and-sport/camping" },
      { label: "Christchurch City Council: Freedom Camping Bylaw 2021", url: "https://ccc.govt.nz/the-council/plans-strategies-policies-and-bylaws/bylaws/freedom-camping-bylaw" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
    ],
  }),

  a({
    slug: "freedom-camping-paihia",
    title: "Freedom Camping in Paihia and the Bay of Islands: Where You Can Stay",
    description: "Freedom camping in Paihia and the Bay of Islands: Far North District Council's no-camping rule for parks, reserves and beaches, the nearest approved site at Kawakawa, DOC's bans and the holiday parks to book.",
    category: "Rules & safety",
    region: "Northland",
    places: ["Paihia", "Waitangi", "Russell", "Kawakawa", "Haruru Falls"],
    imageAlt: "The pier at Paihia stretching out into the Bay of Islands, with boats moored beside it",
    related: ["freedom-camping-rules-new-zealand", "bay-of-islands-camping-week", "auckland-to-bay-of-islands-drive-guide", "self-contained-campervan-green-warrant", "holiday-parks-new-zealand-guide"],
    hubs: ["freedom-camping/bay-of-islands", "camping/northland"],
    intro:
      "You cannot freedom camp in Paihia. Far North District Council does not allow camping or overnight parking in its parks, reserves and beaches, and none of its approved free sites is in the Bay of Islands towns: the nearest is at Kawakawa, a short drive inland. DOC's notices ban camping at five places around the bay as well. The Bay of Islands is a holiday park region, and in summer they fill early, so book before you arrive.",
    sections: [
      s("What the council says", [
        "Far North District Council's responsible camping page says camping or parking overnight in council-controlled parks, reserves and beaches is not permitted. Free campers are asked to use a short list of approved sites chosen for their toilets and water supplies, and Paihia, Waitangi and Russell are not among them.",
        "The rule covers council land only, so DOC land, private land and campgrounds follow their own rules. The practical effect for a visitor is that a waterfront car park or a beach reserve is not a place to sleep, however empty it looks at 9pm, and the council can issue the national infringement fees.",
      ], ["Parks, reserves and beaches: no", "No approved site in Paihia", "Council land only"]),
      s("The nearest approved site", [
        "The council's approved sites include Te Hononga in Gillies Street, Kawakawa, which is about 20 minutes' drive from Paihia and on the way in from State Highway 1. It is a late-arrival option for a self-contained vehicle, not a base for the Bay of Islands. The list has moved before, so check the council's page before a night depends on it.",
        "Since 7 June 2026 a self-contained vehicle needs the green warrant, which the guide to the self-contained campervan warrant explains, and tents are not part of the approved-site message. The fees are $400 for camping where it is prohibited, $400 for a vehicle that is not self-contained where it must be, $200 for no warrant card on display and $800 for damage or waste, under the Freedom Camping (Penalties for Infringement Offences) Regulations 2023.",
      ], ["Kawakawa is about 20 minutes away", "Late arrivals only", "$400 for most breaches"]),
      s("DOC land around the bay", [
        "DOC's freedom camping notices around the Bay of Islands list five current places, and camping is prohibited at all five, including Hongi Hika and Pitt Street. KiwiCamping's DOC data (11 August 2026) lists 14 DOC campsites across Northland, 11 of them bookable online through DOC, with adult nightly rates from $10 to $23, and Uretiti Beach Campsite is the biggest with room for 300.",
        "On Urupukapuka Island in the bay, DOC runs campsites reached by boat or ferry, which suit a night away from the road. The kauri dieback guide matters on the walks from these campsites.",
      ], ["5 DOC notices, all bans", "14 DOC campsites in Northland", "Island campsites by boat"]),
      s("Holiday parks in Paihia", [
        "The Bay of Islands has holiday parks and motor camps in Paihia, at Waitangi and at Haruru Falls, with tent sites, powered sites, cabins and campervan bays, and they are the straightforward answer for any night here. They fill from December to February and over Easter, so reserve ahead. Paihia's parks fill in January, and the guide to holiday parks in New Zealand covers booking ahead.",
        "For a week-long plan, the Bay of Islands camping week guide covers the nights and the days around the bay, and the Auckland to Bay of Islands drive guide covers the road from the city.",
      ], ["Book ahead from December to Easter", "Powered sites and cabins", "Week-long plan in the Bay of Islands guide"]),
      s("Using KiwiCamping around Paihia", [
        "For the Bay of Islands, KiwiCamping lists the holiday parks with bookable sites, the DOC campsites and the dump stations, and filters them by what your vehicle can reach. It does not hold the council's approved sites, so use the council's page for Kawakawa.",
        "Add the Bay of Islands to a trip with each night dated and a holiday park noted, and read the distance between legs, whether you are heading on to Cape Reinga or back to Auckland. Northland's back roads drop signal often; the places and guides you saved still open, while the map, routing, weather and photos need a connection. The download is free, with in-app purchases.",
      ], ["Council page decides Kawakawa", "Date each night and add a fallback", "Saved places stay on the phone"], undefined, true),
    ],
    faq: [
      ["Can I freedom camp in Paihia?", "No. Far North District Council does not allow camping or overnight parking in its parks, reserves and beaches, and DOC bans camping at five places around the Bay of Islands. Use a holiday park."],
      ["Where is the nearest free camping to Paihia?", "The council's approved site at Kawakawa, about 20 minutes' drive away, is the nearest it lists. The Far North District Council page has the current list, and it has changed more than once."],
    ],
    sources: [
      { label: "Far North District Council: Responsible camping", url: "https://www.fndc.govt.nz/District/Visiting-the-Far-North/responsible-camping" },
      { label: "RNZ via 7me: Northland councils gearing up as peak freedom camping season begins", url: "https://7me.one/northland-councils-gearing-up-as-peak-freedom-camping-season-begins/" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
    ],
  }),

  a({
    slug: "freedom-camping-whanganui",
    title: "Freedom Camping in Whanganui: Where You Can Stay",
    description: "Where campervans can stay overnight in Whanganui: Castlecliff Beach and the other council sites, the ban along the river road, night limits, DOC land up the river and the holiday parks to use instead.",
    category: "Rules & safety",
    region: "Manawatū-Whanganui",
    places: ["Whanganui", "Castlecliff", "Aramoho", "Kai Iwi", "Pipiriki"],
    imageAlt: "A red kayak on the Whanganui River beneath a forested clay cliff, with a shingle bank in the foreground",
    related: ["freedom-camping-rules-new-zealand", "self-contained-campervan-green-warrant", "whanganui-journey-camping-2026-27", "freedom-camping-north-island", "holiday-parks-new-zealand-guide"],
    hubs: ["freedom-camping/whanganui", "camping/manawatu-whanganui"],
    intro:
      "Whanganui lets certified self-contained campervans stay overnight at a small number of council sites, led by the beachfront at Castlecliff, and bans camping along the rest of the city's waterfront and on the river road. The council has rewritten its freedom camping bylaw more than once since 2021 and closed some central sites, so the list that was right last summer may be wrong now. Tents and vehicles without a self-containment certificate belong in a holiday park, and the Whanganui River itself is a DOC campsite story, not a freedom camping one.",
    sections: [
      s("What the council asks of you", [
        "Whanganui District Council's freedom camping page is the place to start, because the bylaw has been reviewed in 2025 and its site list has moved. The council's own consultation papers describe the core idea plainly: stay only at the designated sites, keep to the number of nights shown, and use a certified self-contained vehicle, which is the national default. A 2025 draft proposed tightening Castlecliff Beach to match that default, because it had been the one place that tolerated vehicles without a certificate.",
        "Self-contained here means the same thing as everywhere else: a fixed toilet, a water supply, wastewater storage and the certification card in the windscreen. Since 7 June 2026 only the green warrant counts, and the guide to the self-contained campervan warrant explains how to read yours. Staying two nights is the usual limit at a site, and the council's page names any site that allows only one.",
      ], ["Council page over this guide", "Green warrant in the windscreen", "Two nights is the usual limit"]),
      s("Castlecliff Beach and the city sites", [
        "Castlecliff is the beach suburb a short drive from the city centre, with black sand, a surf club and a car park above the beach that the council has used for campervans. Over the 2024-25 summer the number of vans there regularly passed the old limit of ten and sometimes reached thirty-five, which is why the council moved to marked bays and a new layout beside the Duncan Pavilion. Arrive by late afternoon in January, because the bays are first come, first served.",
        "Closer to the centre the council has closed sites it used to allow, including the Anzac Parade and Taupō Quay areas by the river, after complaints about crowding and rubbish. Kōwhai Park is the other place often named in the papers, and the council has restricted the area between the boat ramp and the Anzac Parade toilets. Check the sign on the night, since a closed site can still look like an obvious place to park.",
      ], ["Castlecliff bays fill in summer", "Anzac Parade and Taupō Quay are closed", "Read the sign at Kōwhai Park"]),
      s("Where it is banned", [
        "The council has prohibited freedom camping along the Whanganui River Road, the narrow sealed road that follows the river north from the city towards Pipiriki, after safety and behaviour concerns. The road has little room to pull over, no rubbish collection and a lot of private land behind its verges, so it is the last place to improvise.",
        "Anywhere else on council land that is not on the site list should be treated as closed, including the riverside car parks and the reserves in town. A breach is an infringement offence under the national rules: $400 for camping where it is prohibited, $400 for a vehicle that is not self-contained where it must be, $200 for no warrant card on display and $800 for damage or waste. A rental company passes the ticket to you.",
      ], ["River Road: no camping", "Riverside car parks: closed", "$400 for most breaches"]),
      s("The river, DOC and the holiday parks", [
        "The Whanganui River is where the camping in this region really happens. The Whanganui Journey Great Walk, a canoe trip of three to five days, books its huts and campsites through DOC, and the guide to camping on the Whanganui Journey covers the dates and fees. KiwiCamping's DOC data (11 August 2026) lists 20 campsites in Manawatū-Whanganui, only 2 of them free and only 3 with campervan access, with adult nightly rates from $10 to $19, and Ohinepane is the largest with room for 36.",
        "In town, the holiday parks and motor camps are the dependable answer for a tent, an uncertified van or a late arrival, with powered sites, kitchens and cabins. They are rarely full outside the summer holidays, but Whanganui sits on the road between Taranaki and the capital, so the Friday of a long weekend is another matter. The guide to holiday parks in New Zealand explains how booking works.",
      ], ["20 DOC campsites in the region", "Only 3 take campervans", "Holiday parks for tents and uncertified vans"]),
      s("Using KiwiCamping around Whanganui", [
        "KiwiCamping shows DOC campsites and huts, holiday parks with their facilities and dump stations, with filters for campervan access. It does not carry the council's freedom camping sites, so use the council page for Castlecliff and keep a holiday park saved for each night in case the bays are full.",
        "Add Whanganui to a trip with its date and read the distance to the next stop, whether that is the drive south to Wellington or north towards Taupō. Saved places and their details stay on the phone, while map tiles, routing, weather and photos need signal, which matters up the river road. The app is free to download, with in-app purchases.",
      ], ["Council page decides Castlecliff", "Save a holiday park as the backup", "Saved places stay on the phone"], undefined, true),
    ],
    faq: [
      ["Can I freedom camp in Whanganui?", "Yes, in a certified self-contained vehicle at the sites the council lists, mainly Castlecliff Beach. It is banned along the river road and at the central sites the council has closed."],
      ["Can I freedom camp in a tent in Whanganui?", "No. Tents and vehicles that are not self-contained need a holiday park or a DOC campsite."],
    ],
    sources: [
      { label: "Whanganui District Council: Freedom camping", url: "https://www.whanganui.govt.nz/Services/Freedom-Camping" },
      { label: "Whanganui District Council: Freedom Camping Bylaw 2025", url: "https://www.whanganui.govt.nz/Your-Council/Have-Your-Say/Consultations/Freedom-Camping-Bylaw-2025" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
    ],
  }),

  a({
    slug: "freedom-camping-waihi-beach",
    title: "Freedom Camping at Waihi Beach: Rules, Sites and Alternatives",
    description: "Freedom camping at Waihi Beach and Bowentown: Western Bay of Plenty District Council's self-contained-only rule, the restricted bays and summer bans, enforcement, and the holiday parks and DOC campsites nearby.",
    category: "Rules & safety",
    region: "Bay of Plenty",
    places: ["Waihi Beach", "Bowentown", "Athenree", "Katikati", "Waihi"],
    imageAlt: "A long sandy beach with Norfolk pines and a building on the foreshore beneath a forested hill",
    related: ["freedom-camping-rules-new-zealand", "self-contained-campervan-green-warrant", "freedom-camping-tauranga-2026", "freedom-camping-thames-coromandel-2026", "auckland-to-tauranga-drive-guide", "holiday-parks-new-zealand-guide"],
    hubs: ["camping/bay-of-plenty", "camping/coromandel"],
    intro:
      "Waihi Beach is one of the pressure points of the Bay of Plenty summer. Western Bay of Plenty District Council allows freedom camping on its land only in certified self-contained vehicles, keeps some of the best-known bays closed to it over summer, and patrols the beach and Bowentown through the peak weeks. The ten kilometres of surf beach make it a natural stop between the Coromandel and Tauranga, but a van with no certificate, or a tent, has to use a holiday park, and there are good ones within a few minutes.",
    sections: [
      s("What Western Bay of Plenty requires", [
        "The district council's bylaw covers the whole Western Bay, from Waihi Beach through Katikati to Te Puke and Maketū, and it is built on one idea: the vehicle must carry its own toilet and waste storage and display its certification. A car with a bed in the back, a van with a portable toilet and anything involving a tent falls outside it, wherever on council land you park. The council counts dozens of places across the district where certified vehicles may stay, with a three-night limit in any four weeks at the busier ones.",
        "Since 7 June 2026 the warrant has to be the green one, which the guide to the self-contained campervan warrant explains. The council's page and the sign at each site decide the limits, because the numbers have been revised over the years as the beach towns pushed back on the summer crowds.",
      ], ["Certified self-contained only", "Three nights in four weeks at busy sites", "Sign and council page decide"]),
      s("Waihi Beach and Bowentown", [
        "Waihi Beach is a long strip of houses behind a dune, and the council has been wary of camping on it since locals objected to the bays looking like campgrounds. A 2015 decision banned self-contained campers from Anzac Bay at Bowentown through the peak summer weeks and closed several other reserves, including the area beside the surf club. That seasonal shape, with sites open outside the holidays and shut through them, is the part most likely to catch a visitor out in January.",
        "The council has also used a controlled car park at Bowentown Domain on Seaforth Road, with a gate and pass system, as the managed alternative to scattered roadside camping. Whether it runs in a given summer is the council's decision, so look at its page before you plan a night on it. For a first night here, a holiday park is the lower-risk plan.",
      ], ["Anzac Bay has had summer bans", "Managed car park at Bowentown Domain", "Peak weeks are the risk"]),
      s("Patrols and fines", [
        "In recent summers the council has paid for security patrols at Waihi Beach and Bowentown with government money set aside for freedom camping management, and it describes the Waihi Beach area as the place where compliance problems peak over the holidays. An officer who finds a vehicle where it should not be can issue an infringement notice on the spot, and a night in the wrong car park is not worth the risk.",
        "The fees come from the Freedom Camping (Penalties for Infringement Offences) Regulations 2023: $400 for camping where it is prohibited, $400 for a vehicle that is not self-contained where it must be, $200 for no warrant card on display and $800 for damage or waste. A hire company receives the notice first and charges your card.",
      ], ["Summer patrols are routine", "$400 for most breaches", "Hire companies pass the fine on"]),
      s("Holiday parks and DOC land", [
        "The holiday parks at Waihi Beach and nearby Athenree take tents, caravans and campervans, with powered sites, kitchens and, at Athenree, hot pools, and they are the straightforward answer for a family in January. They book out over Christmas and the first weeks of January, so reserve before you leave Auckland. The guide to holiday parks in New Zealand explains how booking works.",
        "DOC land is further inland. KiwiCamping's DOC data (11 August 2026) lists 8 campsites in the Bay of Plenty, only 1 of them free and 4 with campervan access, with adult nightly rates from $10 to $18, and Matatā Campsite on the Rangitāiki coast is the largest with room for 80. The Karangahake Gorge side of Waihi, over the Hauraki boundary, belongs to the Coromandel hub.",
      ], ["Book holiday parks before Christmas", "8 DOC campsites in Bay of Plenty", "Matatā is the biggest DOC site"]),
      s("Using KiwiCamping around Waihi Beach", [
        "KiwiCamping shows DOC campsites and huts, holiday parks and dump stations on the Bay of Plenty coast, with campervan filters to narrow them. It does not hold the district council's freedom camping sites, so read the council page for those and save a holiday park as the night's fallback.",
        "Put Waihi Beach into a trip between the Coromandel and Tauranga, and read the distance and drive time to the next stop, which is under an hour to Tauranga. Saved places and their details stay on your phone, and the map, routes, forecast and photos load when you have signal. The app is free to download, with in-app purchases.",
      ], ["Council sites: use the council page", "Under an hour on to Tauranga", "Saved places stay on the phone"], undefined, true),
    ],
    faq: [
      ["Can I freedom camp at Waihi Beach?", "Only in a certified self-contained vehicle at a site the council allows, and several well-known bays are closed to it over summer. Tents and uncertified vans need a holiday park."],
      ["Is there a limit on nights at Waihi Beach?", "At the busier council sites the limit has been three nights in any four weeks. Check the sign and the council's page, because limits and seasonal closures change."],
    ],
    sources: [
      { label: "Western Bay of Plenty District Council", url: "https://www.westernbay.govt.nz/" },
      { label: "SunLive: Waihi Beach readies for freedom campers", url: "https://www.sunlive.co.nz/news/227956-waihi-beach-readies-freedom-campers.html" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
    ],
  }),

  a({
    slug: "freedom-camping-whangamata",
    title: "Freedom Camping in Whangamatā: Where You Can Stay",
    description: "Where certified self-contained campervans can stay overnight in Whangamatā: the small car parks and reserves on Thames-Coromandel District Council's list, two-night limits, the banned esplanade and the holiday parks to book.",
    category: "Rules & safety",
    region: "Coromandel",
    places: ["Whangamatā", "Whiritoa", "Onemana", "Tairua", "Pauanui"],
    imageAlt: "A sandy Coromandel beach with a rock arch, a lone walker and offshore islets under a blue sky",
    related: ["freedom-camping-rules-new-zealand", "self-contained-campervan-green-warrant", "freedom-camping-thames-coromandel-2026", "freedom-camping-whitianga", "coromandel-rotorua-road-trip", "holiday-parks-new-zealand-guide"],
    hubs: ["camping/coromandel", "freedom-camping/hauraki"],
    intro:
      "Whangamatā has some of the Coromandel's best surf and a council that treats freedom camping as a small, tightly counted privilege. Thames-Coromandel District Council allows certified self-contained campervans at a handful of named reserves and car parks around the town, each with a limit of two to four vehicles, and bans camping along the rest of the beachfront. In the first weeks of January the places fill by mid-afternoon, and everyone else uses the holiday parks.",
    sections: [
      s("The Thames-Coromandel rules in short", [
        "The district's Freedom Camping Bylaw, made in 2022, allows overnight stays only in a self-contained vehicle with a valid certificate, and only between 5pm and 9am, with a limit of two consecutive nights in one area. A vehicle has to be gone by 9am, and at some sites the council's schedule is stricter than the general rule. A site that already holds its quota when you arrive is full, and you must go elsewhere.",
        "Reserves are closed to camping under the Reserves Act, and the council lists around eighty prohibited areas across the peninsula, from road reserves to whole beaches. The council's camping page carries the schedule, and it is the one document that overrides this guide.",
      ], ["Self-contained certificate required", "5pm to 9am, two nights", "Full means full"]),
      s("The Whangamatā sites", [
        "The council's schedule names four places in and around Whangamatā: Aickin Road Sports Reserve with room for four vehicles, Beach Road with two, the information centre car park with four and Island View Reserve with four, which was moved to a new designated place in December 2024. Some carry their own hours, for example 5pm to 8am at the information centre, and Aickin Road asks campers to leave on a Saturday.",
        "That makes around a dozen vehicles in the town on a peak night, which is why arriving at 5pm matters more than choosing the prettiest spot. A van parked at the beach end of Beach Road gets the sunset, while the sports reserve is the quieter option with the ground under you and a short walk to the surf.",
      ], ["Aickin Road: 4 vehicles, leave on Saturday", "Beach Road: 2 vehicles", "Island View moved in December 2024"], {
        caption: "Whangamatā sites on Thames-Coromandel District Council's freedom camping schedule, read on 21 October 2026. Check the council's page for the current list and limits.",
        head: ["Site", "Vehicles", "Notes"],
        rows: [
          ["Aickin Road Sports Reserve", "4", "Day to leave: Saturday"],
          ["Beach Road", "2", "Beachfront"],
          ["Information centre car park", "4", "5pm to 8am"],
          ["Island View Reserve", "4", "Designated place moved in December 2024"],
        ],
      }),
      s("What is banned", [
        "Esplanade Drive and most of the foreshore are on the prohibited list, along with the camping reserves behind the beach, which are the first places a visitor tries when the four sites are full. The council also bans camping on road verges and in the surf-club car parks, and its wardens patrol through the summer.",
        "A breach under the national fee schedule costs $400 for camping where it is prohibited or in breach of the bylaw, $400 for a vehicle that is not self-contained where it must be, $200 for no warrant card on display and $800 for damage or waste. The hire company receives the notice and bills the renter.",
      ], ["Esplanade Drive: banned", "Surf-club car parks: banned", "$400 for most breaches"]),
      s("Where to book instead", [
        "Whangamatā has beachfront motor camps and holiday parks that take tents and any vehicle, with powered sites, kitchens and cabins, and they are the sensible base for a week of surfing. They book up for the Christmas and New Year fortnight months ahead, so ring before you drive down. The guide to holiday parks in New Zealand covers how booking works.",
        "Further down the coast, Whiritoa and Onemana have smaller camps, and Tairua and Pauanui to the north have council sites of their own. KiwiCamping's DOC data (11 August 2026) lists 20 DOC campsites on the Coromandel, only 1 of them free and 14 with campervan access, and Waikawau Bay is the largest with room for 132.",
      ], ["Book Christmas months ahead", "Whiritoa and Onemana are smaller", "20 DOC campsites on the Coromandel"]),
      s("Using KiwiCamping around Whangamatā", [
        "KiwiCamping shows DOC campsites and huts, holiday parks and dump stations on the Coromandel, with filters for campervan access. The council's freedom camping sites are not in it, so use the council page for those and keep a holiday park saved as the backup night.",
        "Add Whangamatā to a trip between Auckland and the Bay of Plenty and read the legs: about two hours from Auckland, an hour on to Tauranga. Saved places and their details stay on the phone, and the map, routing, weather and photos load once you have signal. The app is free to download, with in-app purchases.",
      ], ["Council schedule: use the council page", "About 2 hours from Auckland", "Saved places stay on the phone"], undefined, true),
    ],
    faq: [
      ["Can I freedom camp in Whangamatā?", "Yes, in a certified self-contained vehicle at one of the council's named sites, each with a small vehicle limit and a two-night stay. Most of the foreshore and every reserve is banned."],
      ["What time do I have to leave a Whangamatā freedom camping site?", "By 9am. The general rule allows camping between 5pm and 9am, and some sites have shorter hours, so read the sign."],
    ],
    sources: [
      { label: "Thames-Coromandel District Council: Freedom camping", url: "https://www.tcdc.govt.nz/camping" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
    ],
  }),

  a({
    slug: "freedom-camping-matakana",
    title: "Freedom Camping Around Matakana and Warkworth: Where to Stay",
    description: "Where to sleep in a campervan around Matakana and Warkworth: Auckland Council's few small freedom camping sites, the booked regional park campgrounds at Tawharanui and Mahurangi, and the holiday parks to use instead.",
    category: "Rules & safety",
    region: "Auckland",
    places: ["Matakana", "Warkworth", "Snells Beach", "Omaha", "Leigh", "Tawharanui"],
    imageAlt: "Surf washing over dark sand on a west coast beach, with a headland and a sea stack in the distance",
    related: ["freedom-camping-rules-new-zealand", "self-contained-campervan-green-warrant", "freedom-camping-auckland-2026", "auckland-to-bay-of-islands-drive-guide", "freedom-camping-whangarei-2026", "holiday-parks-new-zealand-guide"],
    hubs: ["camping/auckland", "freedom-camping/tamaki-makaurau-auckland-mainland"],
    intro:
      "Matakana and Warkworth sit an hour north of Auckland, and they fall under the same Auckland Council bylaw as the city: certified self-contained vehicles only, in a few signed places, for a couple of nights. The sites here are small, often only a handful of vehicles, and the regional parks around them are closed to freedom camping. The better plan for a weekend at the Matakana markets or the beaches of the Mahurangi coast is a booked campground or a holiday park, with the council sites as a late-arrival backup.",
    sections: [
      s("The Auckland rules that apply here", [
        "Auckland's Freedom Camping in Vehicles Bylaw applies across the whole region, including Rodney and the Hibiscus Coast. Camping on council roads and car parks is allowed only in a certified self-contained vehicle, for up to two nights in the same spot, and you leave by 9am on the day you go. The guide to freedom camping in Auckland reads the bylaw in full, with its prohibited and restricted areas, so this page keeps to the Matakana end.",
        "A tent or a vehicle without a certificate has no place on council land. Since 7 June 2026 the warrant has to be the green one, which the guide to the self-contained campervan warrant explains. Enforcement runs through the summer, and a notice goes to the registered owner, which for a rental is the hire company.",
      ], ["Region-wide bylaw", "Two nights, away by 9am", "Green warrant needed"]),
      s("Council sites near Warkworth and the coast", [
        "The council's signed places in the area are small and spread out: a wharf reserve at Port Albert on the Kaipara side, a few spaces at Parry Kauri Park in Warkworth, and a handful of spots on the Mahurangi and Whangaparāoa coasts such as Snells Beach, each taking between three and ten vehicles. The council's map and page carry the list, and it changes, so confirm a place before a night depends on it.",
        "Because the numbers are so low, the sites fill before dark in summer and on Friday nights. A booked campground gets you a guaranteed bed and a toilet block, and the spaces left for the unplanned arrival are better treated as a bonus than a plan.",
      ], ["3 to 10 vehicles a site", "Port Albert is on the Kaipara side", "Treat free sites as a backup"]),
      s("Regional parks and booked campgrounds", [
        "Auckland Council's regional parks are closed to freedom camping, but two of them run booked campgrounds that suit a weekend in the area: Tawharanui at the end of a long peninsula road, with beaches on both sides, and Mahurangi, where the campgrounds sit above sheltered coves. Both take bookings through the council, and the best weekends in January go early.",
        "They are for tents and campervans alike, with toilets and water, and some bays are a short walk from the water. Dogs, fires and quiet hours follow the park's own rules, which the booking page lists, and they are stricter than most holiday parks.",
      ], ["Tawharanui and Mahurangi: book ahead", "Regional parks ban freedom camping", "Dog and fire rules differ"]),
      s("Holiday parks and DOC land", [
        "Warkworth, Snells Beach, Omaha and Leigh each have holiday parks or motor camps within reach, with powered sites and cabins. They are the dependable choice over Christmas, and Easter weekend brings the same crowds as the beaches do. The guide to holiday parks in New Zealand explains how booking works.",
        "DOC land in the Auckland region is mostly on islands. KiwiCamping's DOC data (11 August 2026) lists 9 campsites in Auckland, 1 of them free and 5 with campervan access, with adult nightly rates from $10 to $18, and Home Bay on Motutapu Island is the largest with room for 131. None are near Matakana by road.",
      ], ["Holiday parks near each beach", "DOC sites in Auckland are on islands", "Easter fills like Christmas"]),
      s("Using KiwiCamping around Matakana", [
        "KiwiCamping lists DOC campsites and huts, holiday parks with their facilities and dump stations around Auckland, with filters for campervan access. It does not carry the council's freedom camping sites or regional park bookings, so use the council pages for those.",
        "Add the Matakana night to an Auckland to Bay of Islands trip and read the distance and drive time to the next stop, which is Whangārei, a bit over an hour on. Saved places stay on the phone, and the map, routes, forecast and photos need a connection, which is patchy on the peninsula roads. The app is free to download, with in-app purchases.",
      ], ["Council and park bookings: use their pages", "Whangārei is about an hour on", "Saved places stay on the phone"], undefined, true),
    ],
    faq: [
      ["Can I freedom camp near Matakana?", "Only in a certified self-contained vehicle at one of the council's small signed sites, for two nights at most. Regional parks and most reserves are closed to it, so a booked campground or holiday park is the safer plan."],
      ["Can I camp at Tawharanui Regional Park?", "Yes, at its booked campground, not as freedom camping. Reserve through Auckland Council before you drive out."],
    ],
    sources: [
      { label: "Auckland Council: Freedom camping", url: "https://www.aucklandcouncil.govt.nz/en/parks-recreation/freedom-camping-auckland/general-rules-information-freedom-campers-auckland.html" },
      { label: "Auckland Council: Freedom Camping in Vehicles Bylaw", url: "https://www.aucklandcouncil.govt.nz/en/plans-policies-bylaws-reports-projects/bylaws/freedom-camping-bylaw.html" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
    ],
  }),

  a({
    slug: "freedom-camping-arrowtown",
    title: "Freedom Camping in Arrowtown: Where You Can Stay",
    description: "Freedom camping in Arrowtown: the one three-space council car park, Queenstown Lakes' two-night rule, the ban in the village, and nearby sites at Queenstown, Lake Hayes and Glenorchy plus the holiday parks.",
    category: "Rules & safety",
    region: "Queenstown Lakes",
    places: ["Arrowtown", "Lake Hayes", "Queenstown", "Gibbston", "Glenorchy"],
    imageAlt: "The Remarkables ridge in warm light behind a silhouette of trees in the Queenstown Lakes",
    related: ["freedom-camping-rules-new-zealand", "self-contained-campervan-green-warrant", "freedom-camping-queenstown-lakes-2026", "camping-in-queenstown", "queenstown-glenorchy-camping", "freedom-camping-wanaka"],
    hubs: ["freedom-camping/wakatipu", "camping/otago"],
    intro:
      "Arrowtown is the autumn-colour village at the end of the Wakatipu valley, and its freedom camping amounts to one car park with three spaces. Queenstown Lakes District Council's 2025 bylaw bans camping in urban areas, allows certified self-contained vehicles only in 15 designated car parks across the district, and caps a stay at two nights in any 30 days. A van that misses the three Arrowtown spaces has to drive to Queenstown, Lake Hayes or Glenorchy, or book a holiday park.",
    sections: [
      s("What the 2025 bylaw says", [
        "Queenstown Lakes District Council's Freedom Camping Bylaw 2025 took effect on 1 December 2025, after the High Court quashed the 2021 bylaw following a challenge by the Motor Caravan Association. It prohibits freedom camping in urban areas, including on-road parking, and allows it only in a certified self-contained vehicle in the designated car parks, plus some rural roads with conditions. Most council reserves are closed to camping under the Reserves Act.",
        "At the designated sites you arrive after 6pm and leave before 8am, stay no more than two nights in any 30-day period, and keep your vehicle and belongings inside the marked space. Since 7 June 2026 the warrant has to be the green one, which the guide to the self-contained campervan warrant explains. The council's page and the QR check-in at each site are the final word, and the council planned a further decision in December 2026.",
      ], ["Urban areas prohibited", "After 6pm, away by 8am", "Two nights in 30 days"]),
      s("The Arrowtown space", [
        "The council's list gives Arrowtown a single site: Hansen Place car park, with three marked spaces. It is a working car park on the edge of the village, so there are no views to speak of, and with only three spaces for every van that wants an Arrowtown night, it is full most evenings between December and April.",
        "Street parking in the village, the car parks by the river and the Chinese Settlement and the reserves along the Arrow are not options. The town is an urban area under the bylaw, and the council patrols it, since the heritage streets are the district's most photographed.",
      ], ["Hansen Place: 3 spaces", "Village streets: banned", "Full on summer evenings"]),
      s("Other sites within reach", [
        "The nearest alternatives sit down the valley. Howards Drive car park at Lake Hayes takes three vehicles, and Queenstown has several: Boundary Street with 15 spaces, Lakeview with 10, Industrial Place with 6 and Gorge Road with 2, with Queenstown Events Centre at Frankton taking 9. Further out, Gibbston Highway at SH6 has 2 and Glenorchy Domain has 3.",
        "Kingston, 45 minutes south of Queenstown, has the largest site with 50 spaces. All the sites are car parks with no booking, so they work for a late arrival and not for a plan, and the council's list has changed between summers. The guide to freedom camping in Queenstown Lakes reads the whole bylaw.",
      ], ["Lake Hayes: 3 spaces", "Boundary Street: 15 spaces", "Kingston: 50 spaces"]),
      s("Holiday parks and DOC land", [
        "Arrowtown has its own holiday park by the river, and Queenstown, Frankton and Lake Hayes have several more, with powered sites, cabins and tent areas. They fill from Christmas to Easter, and autumn colours in April bring a second rush, so book before you arrive. The guide to holiday parks in New Zealand covers how booking works.",
        "DOC land around the lakes is the other free-to-cheap choice. KiwiCamping's DOC data (11 August 2026) lists 30 DOC campsites in Otago, 8 of them free and 17 with campervan access, with adult nightly rates from $5 to $42, and Twelve Mile Delta near Queenstown is the largest with room for 100. The Queenstown to Glenorchy guide covers the road north.",
      ], ["Book for Christmas and April", "30 DOC campsites in Otago", "Twelve Mile Delta takes 100"]),
      s("Using KiwiCamping around Arrowtown", [
        "KiwiCamping shows DOC campsites and huts, holiday parks and dump stations around Queenstown and Arrowtown, with campervan filters. It does not hold the council's car parks, so use the council page for those and save a holiday park as the backup night.",
        "Add Arrowtown to a trip with Queenstown and Glenorchy, and read the short legs: about 20 minutes to Queenstown and an hour to Glenorchy. Saved places and details stay on the phone, and map tiles, routing, weather and photos load when you have signal. The app is free to download, with in-app purchases.",
      ], ["Council car parks: use the council page", "20 minutes to Queenstown", "Saved places stay on the phone"], undefined, true),
    ],
    faq: [
      ["Can I freedom camp in Arrowtown?", "Only at Hansen Place car park, which has three spaces, in a certified self-contained vehicle. The village and its reserves are banned, and the nearest larger sites are in Queenstown."],
      ["How many nights can I stay at Queenstown Lakes freedom camping sites?", "Two nights in any 30 days, arriving after 6pm and leaving before 8am. Check the sign at each site, because the council reviews its list."],
    ],
    sources: [
      { label: "Queenstown Lakes District Council: Responsible camping", url: "https://www.qldc.govt.nz/responsible-camping" },
      { label: "Queenstown Lakes District Council: Bylaws", url: "https://www.qldc.govt.nz/bylaws" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
    ],
  }),

  a({
    slug: "freedom-camping-lumsden",
    title: "Freedom Camping in Lumsden: The Southland Crossroads Stop",
    description: "Freedom camping in Lumsden: Southland District Council's green area open to all vehicles for seven nights in 30 days, why it suits the Te Anau and Queenstown run, the other council sites nearby and the holiday parks to use instead.",
    category: "Rules & safety",
    region: "Southland",
    places: ["Lumsden", "Mossburn", "Athol", "Garston", "Te Anau"],
    imageAlt: "Forested hills and a mountain ridge above a southern lake under a cloudy sky",
    related: ["freedom-camping-rules-new-zealand", "self-contained-campervan-green-warrant", "freedom-camping-southland-2026", "freedom-camping-te-anau", "southern-scenic-route-camping", "christchurch-to-te-anau-drive-guide"],
    hubs: ["camping/southland", "freedom-camping/te-anau"],
    intro:
      "Lumsden is where State Highways 6 and 94 meet, an hour from Te Anau, an hour and a half from Queenstown and about 45 minutes from Gore, and it is one of the few places in the south where Southland District Council lets people camp for free in almost any kind of vehicle. The council classes its Lumsden site as a green area, with no vehicle restriction stated and a limit of seven nights in any 30 days. For anyone who cannot get a bed in Te Anau in January, it is the practical answer, and it is a town with a pub, fuel and a bakery.",
    sections: [
      s("Green sites and blue sites", [
        "Southland District Council sorts its campsites by colour. A blue site is for certified self-contained vehicles only, and tents, cars and uncertified vans are not allowed. A green site allows all types of camping, and the council lists Lumsden, Haldane, Dunsdale, Thornbury, Orepuki and the Otautau arboretum among them, though per-site rules on tents are on the council's map and not repeated in its list.",
        "The Freedom Camping Bylaw 2015 is under review, with formal consultation planned for late 2026, so the colour of a site and its night count could change next season. Where a site says self-contained, you need a warrant on display, and since 7 June 2026 only the green warrant counts, which the guide to the self-contained campervan warrant explains.",
      ], ["Green site: all vehicle types", "Blue site: self-contained only", "Bylaw under review"]),
      s("Staying at Lumsden", [
        "The council's list gives Lumsden a green area with seven nights in any 30 days, the same as the bylaw's default, and not more than one month in any three. There are no vehicle numbers published, so on a busy evening you may be parking among tents, caravans and campervans. The general rules apply: generators only between 8am and 9pm, fires only in a council fire facility, dogs on a lead, and all rubbish taken with you.",
        "Facilities are modest. The council's map marks toilets and dump stations in the district, so check it for what Lumsden has this season, and fill water and buy groceries in town. The main road is busy with trucks, so a spot away from the highway makes for a quieter night.",
      ], ["7 nights in any 30 days", "Generators 8am to 9pm", "Check the council map for toilets"]),
      s("Why Lumsden works as a base", [
        "Lumsden sits on the Around the Mountains Cycle Trail and the old Kingston Flyer line, and the town's centre is a short walk from the camping area. Te Anau and the Milford Road are about an hour north, Queenstown 90 minutes east, and the Catlins and Invercargill a short run south, so a few nights here make a tidy base for the whole Fiordland and Southland circuit.",
        "That position is why it fills when Te Anau does. Te Anau itself has no council freedom camping site at all, and its holiday parks sell out through summer, so the nights you cannot get there are the nights Lumsden is for. The Te Anau guide covers the lakeside end.",
      ], ["An hour to Te Anau", "90 minutes to Queenstown", "Te Anau has no council site"]),
      s("Other sites and the holiday parks", [
        "Nearby council sites on the list include Dipton and Balfour, both certified self-contained only, and Mossburn and Athol are in the same district. Each is a small-town stop with a short stay and few services, useful for a single night on the road and nothing more.",
        "Holiday parks at Te Anau, Gore and Queenstown take everyone, and they are the answer when the free sites are full. The guide to holiday parks in New Zealand explains how booking works. KiwiCamping's DOC data (11 August 2026) lists 5 DOC campsites in Southland, with adult nightly rates from $6 to $28 and only 2 with campervan access, and Mavora Lakes is the largest with room for 60.",
      ], ["Dipton and Balfour: self-contained only", "5 DOC campsites in Southland", "Mavora Lakes takes 60"]),
      s("Using KiwiCamping around Lumsden", [
        "In KiwiCamping you can see DOC campsites and huts, holiday parks and dump stations across Southland, with filters for the campervan access you need. The council's freedom camping areas are not in the app, so use the council's map for Lumsden itself.",
        "Add Lumsden to a trip as the night before Te Anau or Queenstown, and read the distance and drive time between the stops. Saved places stay on the phone, and the map, directions, weather and photos wait for signal, which drops out on the roads around Mavora. The app is free to download, with in-app purchases.",
      ], ["Council map decides Lumsden", "Use it as the night before Te Anau", "Saved places stay on the phone"], undefined, true),
    ],
    faq: [
      ["Can I freedom camp in Lumsden?", "Yes. Southland District Council lists Lumsden as a green area open to all types of camping, for up to seven nights in any 30 days. Check the council's map for its current rules."],
      ["Is there freedom camping in Te Anau?", "No. The council lists no site for Te Anau, so the nearest free camping is a short drive away, and holiday parks cover the rest."],
    ],
    sources: [
      { label: "Southland District Council: freedom camping", url: "https://southlanddc.govt.nz/services/freedom-camping/" },
      { label: "Southland District Council: freedom camping locations", url: "https://southlanddc.govt.nz/services/freedom-camping/freedom-camping-locations/" },
      { label: "Southland District Council: Freedom Camping Bylaw review", url: "https://southlanddc.govt.nz/make-it-stick/under-review/freedom-camping-bylaw-review/" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
    ],
  }),

  a({
    slug: "freedom-camping-colac-bay",
    title: "Freedom Camping at Colac Bay and the Southland Coast",
    description: "Freedom camping at Colac Bay: Southland District Council's certified self-contained site with a two-day limit, Monkey Island at Orepuki, why Riverton has no site, and the campgrounds along the Southern Scenic Route.",
    category: "Rules & safety",
    region: "Southland",
    places: ["Colac Bay", "Riverton", "Orepuki", "Tuatapere", "Curio Bay"],
    imageAlt: "Rocky stacks and green headlands rising from clear blue water on the southern coast",
    related: ["freedom-camping-rules-new-zealand", "self-contained-campervan-green-warrant", "freedom-camping-southland-2026", "southern-scenic-route-camping", "freedom-camping-lumsden", "holiday-parks-new-zealand-guide"],
    hubs: ["camping/southland", "freedom-camping/murihiku"],
    intro:
      "Colac Bay is the surf village on the Southern Scenic Route between Invercargill and Tuatapere, and Southland District Council gives it a freedom camping site for certified self-contained vehicles with a limit of two days in any 30. It is one of the more generous spots on the south coast, because the larger towns do not offer one: Riverton, the next town along, has no council site at all. Orepuki's Monkey Island, a little further west, is the easier option for a tent or a van without a certificate.",
    sections: [
      s("The Colac Bay site", [
        "The council's location list shows Colac Bay, also written Oraka, as a site for certified self-contained vehicles only, with a limit of two days in any 30. Camping in tents, cars and vehicles without a certificate is not allowed there. With a green warrant on display, you park on the council reserve by the bay, and the beach and the surf break are a short walk away.",
        "Because the stay is short, it works as an overnight on the road and not a base. The council's general rules apply: fires only in a council fire facility, dogs on a lead, generators between 8am and 9pm, and all rubbish taken with you. The guide to the self-contained campervan warrant explains what the vehicle needs.",
      ], ["Self-contained only", "Two days in any 30", "Green warrant on display"]),
      s("Why Riverton has no site", [
        "Riverton, the oldest town in Southland and the last proper stop before Colac Bay, has no council freedom camping site. The bylaw maps show the whole township as camping prohibited, and the council's list does not mention it, so a van that turns up in the harbour car park risks a ticket. The nearest options are Colac Bay to the west and the council camping grounds and holiday parks in the area.",
        "The fines are national: $400 for camping where it is prohibited, $400 for a vehicle that is not self-contained where it must be, $200 for no warrant card on display and $800 for damage or waste. A hire company passes the notice on to the renter.",
      ], ["Riverton: all prohibited", "$400 for most breaches", "Nearest site is Colac Bay"]),
      s("Monkey Island and the west", [
        "Monkey Island at Orepuki is the council's other coastal site, and it is the friendly one: non-self-contained camping is allowed, with a limit of 28 days a year, and no drinking water, so bring your own. It suits a tent or a van without a certificate and a night under the Foveaux Strait sky.",
        "Beyond it, Tuatapere has no site, and Curio Bay's campground, further east in the Catlins, takes bookings, and the council's page said it was temporarily closed for maintenance when read in October 2026. Check each before you drive, because the south coast is remote and the next bed can be an hour away.",
      ], ["Monkey Island: 28 days a year", "No drinking water", "Tuatapere: no site"]),
      s("Campgrounds and DOC land", [
        "For a booked bed, the holiday parks and motor camps at Invercargill, Riverton and Tuatapere take tents and campervans, with powered sites and kitchens. The Southern Scenic Route guide covers the stops between Dunedin and Queenstown, and the guide to holiday parks in New Zealand explains how booking works.",
        "KiwiCamping's DOC data (11 August 2026) lists 5 DOC campsites in Southland, with adult nightly rates from $6 to $28 and only 2 with campervan access, and Mavora Lakes is the largest with room for 60. The Hump Ridge Track starts near Tuatapere and books separately through its own trust.",
      ], ["5 DOC campsites in Southland", "Book holiday parks ahead in summer", "Hump Ridge books separately"]),
      s("Using KiwiCamping on the south coast", [
        "KiwiCamping shows DOC campsites and huts, holiday parks and dump stations along the Southland coast, with filters for campervan access, though not the council's freedom camping reserves. Use the council's map for Colac Bay and Monkey Island, and keep a campground saved for each night.",
        "Put Colac Bay into a trip with the legs either side, Invercargill about 45 minutes east and Tuatapere half an hour west, and plan fuel at Invercargill or Riverton. Saved places stay on the phone, and the map, routing, forecast and photos wait for signal, which is patchy past Orepuki. The app is free to download, with in-app purchases.",
      ], ["Council map decides the reserves", "Fuel up in Invercargill or Riverton", "Saved places stay on the phone"], undefined, true),
    ],
    faq: [
      ["Can I freedom camp at Colac Bay?", "Yes, in a certified self-contained vehicle, for up to two days in any 30. Tents and uncertified vehicles are not allowed there."],
      ["Where can I camp in a tent on the Southland coast?", "Monkey Island at Orepuki allows non-self-contained camping for up to 28 days a year, with no drinking water. Otherwise use a holiday park or a campground."],
    ],
    sources: [
      { label: "Southland District Council: freedom camping", url: "https://southlanddc.govt.nz/services/freedom-camping/" },
      { label: "Southland District Council: freedom camping locations", url: "https://southlanddc.govt.nz/services/freedom-camping/freedom-camping-locations/" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
    ],
  }),

  a({
    slug: "freedom-camping-westport",
    title: "Freedom Camping in Westport and Buller: Rules and Where to Stay",
    description: "Freedom camping around Westport and the Buller District: a bylaw that allows self-contained vehicles outside named no-camping zones, the banned tipheads, Marrs Beach and Carters Beach, night limits, fines and campgrounds.",
    category: "Rules & safety",
    region: "West Coast",
    places: ["Westport", "Carters Beach", "Cape Foulwind", "Charleston", "Punakaiki", "Karamea"],
    imageAlt: "Driftwood and boulders strewn along a West Coast beach with the sea behind",
    related: ["freedom-camping-rules-new-zealand", "self-contained-campervan-green-warrant", "freedom-camping-west-coast", "west-coast-south-island-road-trip", "freedom-camping-westland-2026", "arthurs-pass-camping-route"],
    hubs: ["freedom-camping/buller", "camping/west-coast"],
    intro:
      "Buller District Council works differently from most councils: instead of listing the places where you can camp, its bylaw lets a certified self-contained vehicle stay anywhere on council land outside a list of named no-camping zones. Those zones take in most of what a visitor would try around Westport, including the Buller River tipheads, Marrs Beach and the Carters Beach domain, and the council publishes no designated freedom camping sites for Westport, Charleston, Karamea or Reefton. The rules also date from 2012, so the council's own page and its bylaw do not quite agree.",
    sections: [
      s("How Buller's bylaw works", [
        "The Freedom Camping Bylaw 2012, amended in 2018, says a person may freedom camp in a self-contained vehicle in any local authority area outside the no-camping zones in its schedule. Tents and vehicles that are not self-contained are not provided for, and the council's page tells them to use a campground. The self-contained test in the bylaw is the old NZS 5465:2001 standard, and since 7 June 2026 the warrant has to be the green one, which the guide to the self-contained campervan warrant explains.",
        "The bylaw limits a stay to three consecutive days and ten days a calendar month at any one place or within 500 metres, with no fires. The council's web page asks for no more than two consecutive nights and nine a month, so follow the stricter figure. Replacement of the bylaw has been planned, so read the council's page before you arrive.",
      ], ["Anywhere outside named no-camping zones", "Bylaw says 3 days, page says 2 nights", "Follow the stricter figure"]),
      s("Where you cannot camp around Westport", [
        "The no-camping zones name the places visitors reach for first: both Buller River tipheads, all of Marrs Beach east of Tiphead Road, the parking areas at the eastern end of the Buller Bridge, Carters Beach Domain from Golf Links Road to the holiday park, Tui Dellaca Reserve and the grass south of Tauranga Bay Road, and Okari Road out to the lagoon. The council's page adds Omau Domain at Cape Foulwind and Kohaihai Road at Karamea.",
        "Further up the coast the list continues: the Oparara River mouth and Flagstaff at Karamea, the Dolphin Reserve beach tracks at Hector, and the first layby north of the Nile River mouth at Charleston. If a place looks like a beach car park, assume it is on the list.",
      ], ["Tipheads and Marrs Beach: banned", "Carters Beach Domain: banned", "Karamea and Charleston have named bans"]),
      s("Fines and what to expect", [
        "The council's web page mentions a $200 fine, but that figure is out of date: the national fee schedule has set $400 for camping where it is prohibited and $400 for a vehicle that is not self-contained where it must be since 2023, with $200 for no warrant card on display and $800 for damage or waste. A hire company receives the notice first and charges it to the renter.",
        "The council can give written consent to camp where it is otherwise banned, though it is not a route for a casual visitor. The practical result is that Westport has no obvious free place to stay, and the honest advice is to plan a campground and treat any roadside night as a bonus.",
      ], ["$400, not $200", "Written consent is rare", "Plan a campground first"]),
      s("Campgrounds, DOC and the coast road", [
        "Westport and the Buller coast have holiday parks and campgrounds, at Carters Beach, Westport, Cape Foulwind, Charleston, Punakaiki and Karamea, with powered sites, tent areas and cabins, and they are the way to sleep near the sea. The council's own page links to its list of campgrounds. The guide to holiday parks in New Zealand explains how booking works.",
        "KiwiCamping's DOC data (11 August 2026) lists 14 DOC campsites on the West Coast, only 1 of them free and 10 with campervan access, with adult nightly rates from $10 to $20, and Lake Māhinapua is the largest with room for 100. The Paparoa Track starts near Punakaiki and Blackball, and its huts book through DOC.",
      ], ["Holiday parks along the coast", "14 DOC campsites on the West Coast", "Paparoa Track books through DOC"]),
      s("Using KiwiCamping around Westport", [
        "KiwiCamping lists DOC campsites and huts, holiday parks and dump stations along the West Coast, with filters for campervan access. It does not hold Buller's no-camping zones, so use the council's page to avoid them.",
        "Place a Westport night in a trip between Nelson and Greymouth, and read the legs, which are about 3.5 hours from Nelson and 2 hours on to Greymouth, with fuel at Westport. Saved places stay on the phone, and the map, routing, forecast and photos load when there is signal, which is thin along the Buller Gorge. The app is free to download, with in-app purchases.",
      ], ["Council page shows the no-camping zones", "Fuel at Westport", "Saved places stay on the phone"], undefined, true),
    ],
    faq: [
      ["Can I freedom camp in Westport?", "Only in a certified self-contained vehicle, and not in the named no-camping zones, which include the tipheads, Marrs Beach and Carters Beach Domain. The council publishes no designated sites, so a campground is the reliable choice."],
      ["How many nights can I stay in Buller?", "The bylaw says three consecutive days and ten a month, while the council's page asks for two nights and nine a month. Follow the stricter one."],
    ],
    sources: [
      { label: "Buller District Council: Freedom camping", url: "https://bullerdc.govt.nz/recreation/freedom-camping/" },
      { label: "Buller District Council: Freedom Camping Bylaw 2012", url: "https://bullerdc.govt.nz/media/vrifsbba/181119-bdc-freedom-camping-bylaw-2012.pdf" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
    ],
  }),

  a({
    slug: "freedom-camping-haast",
    title: "Freedom Camping at Haast: Rules, Sites and Where to Sleep",
    description: "Where to sleep in a campervan at Haast: Westland District Council's thin list of sites, the dump station on Marks Road, DOC freedom camping zones along the Haast Highway, and the campgrounds and motels to book in summer.",
    category: "Rules & safety",
    region: "South Westland",
    places: ["Haast", "Haast Beach", "Lake Moeraki", "Jackson Bay", "Paringa"],
    imageAlt: "A road sign at Haast Pass pointing to Haast Junction and Wānaka, with a woman standing beside it in bush",
    related: ["freedom-camping-rules-new-zealand", "self-contained-campervan-green-warrant", "freedom-camping-westland-2026", "wanaka-haast-pass-route", "west-coast-south-island-road-trip", "franz-josef-fox-glacier-camping"],
    hubs: ["freedom-camping/south-westland", "camping/west-coast"],
    intro:
      "Haast is the long, empty stretch where State Highway 6 meets the Tasman Sea, with 120 km to Fox Glacier on one side and over the Haast Pass to Wānaka on the other, and it has very little formal camping. Westland District Council's current page lists only a few sites in the whole district, and Haast's own spaces have appeared in a draft bylaw that the council has not confirmed. Much of the land around the township is DOC's, with its own freedom camping zones and rules, so the answer to where you can park depends on whose land the lay-by is on.",
    sections: [
      s("Council land and the bylaw", [
        "Westland District Council's responsible camping page lists a short set of sites for certified self-contained vehicles, including Kumara, Woodstock and Paringa, and a 2024 draft bylaw added a site beside the playground on Marks Road in Haast with room for around ten vehicles. The council has not confirmed that draft in the material read for this guide, so treat Haast Playground as unconfirmed and check the council's page and the sign before a night depends on it.",
        "Whichever list applies, the vehicle must be certified self-contained, with a green warrant on display since 7 June 2026, which the guide to the self-contained campervan warrant explains. Stays at the council's sites are short, such as two nights in 30 days at Paringa, and tents and uncertified vans have no standing.",
      ], ["Haast Playground: draft, check first", "Paringa: 2 nights in 30 days", "Green warrant on display"]),
      s("Dump station and services", [
        "The council lists a dump station at Haast by the toilets on Marks Road, along with others at Hokitika and Franz Josef, and it is the one reliable emptying point on this part of the highway. The guide to wastewater and rubbish explains the etiquette, and the rule is simple: use the dump station, not a stream or a lay-by.",
        "Haast has a few shops, a fuel stop and a handful of motels, and the next full-service towns are Wānaka, 140 km east, and Fox Glacier, about 120 km north. Fill the tank and buy groceries here, since neither is cheap or plentiful elsewhere along the road.",
      ], ["Dump station on Marks Road", "Fuel at Haast", "Groceries are thin on both sides"]),
      s("DOC land along the highway", [
        "Much of South Westland is conservation land, and DOC's freedom camping zones follow its own list of places, with Roaring Billy Walk car park the largest recorded, and each zone carrying rules on vehicles and stay length. DOC's hub for South Westland in this site maps them, and the DOC notice at the entrance to each area is the rule that counts, since some places that look like camping spots are closed to it.",
        "For a paid bed with a toilet, DOC campsites along the highway are the cheaper answer than a motel. KiwiCamping's DOC data (11 August 2026) lists 14 campsites on the West Coast, only 1 of them free and 10 with campervan access, with adult nightly rates from $10 to $20. Sandflies are fierce on this coast, and the guide to sandflies explains what works.",
      ], ["DOC notices decide the zones", "14 DOC campsites on the West Coast", "Sandflies are a real factor"]),
      s("Motels, holiday parks and booking ahead", [
        "Haast has a small number of holiday parks and motels, and summer demand easily outstrips them, because the Haast Pass is the only road link between the West Coast and Otago. Book before you set off from Wānaka or Fox, since a late arrival with no booking can mean a 120 km drive to the next bed.",
        "Jackson Bay, 50 km down the coast road, has its own campground and a fish and chip shop at the road's end, and Lake Moeraki to the north has a lodge and a DOC campsite. The guide to holiday parks in New Zealand explains how booking works.",
      ], ["Book before leaving Wānaka or Fox", "Jackson Bay is 50 km each way", "Lake Moeraki has a DOC campsite"]),
      s("Using KiwiCamping around Haast", [
        "KiwiCamping shows DOC campsites and huts, holiday parks and dump stations through South Westland, with filters for campervan access. It does not hold the council's freedom camping spaces, so use the council page for those.",
        "Put Haast in a trip between Wānaka and the glaciers, and read the leg lengths, since each side is over two hours. Saved places and their details stay on the phone, and the map, routes, forecast and photos need signal, which is rare for long stretches here. The app is free to download, with in-app purchases.",
      ], ["Council page decides the sites", "Each side is over 2 hours", "Saved places stay on the phone"], undefined, true),
    ],
    faq: [
      ["Can I freedom camp at Haast?", "Council and DOC land each have their own rules. Westland District Council lists few sites, and a draft bylaw named a space on Marks Road that is not confirmed, so check the council and DOC notices before you stay."],
      ["Is there a dump station at Haast?", "Yes. The council lists one by the toilets on Marks Road."],
    ],
    sources: [
      { label: "Westland District Council: campgrounds and responsible camping", url: "https://www.westlanddc.govt.nz/recreation/campgrounds-and-responsible-camping" },
      { label: "Westland District Council: seeking submissions on the freedom camping bylaw", url: "https://westlanddc.govt.nz/notices-news-and-events/posts/seeking-submissions-freedom-camping-bylaw" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
    ],
  }),

  a({
    slug: "freedom-camping-motueka",
    title: "Freedom Camping in Motueka: Sites, Limits and Alternatives",
    description: "Freedom camping in Motueka: Tasman District Council's Responsible Camping Bylaw 2025, the beach, quay and Decks Reserve sites, the Ngatimoti reserve that takes any vehicle, two-night limits and the Abel Tasman holiday parks.",
    category: "Rules & safety",
    region: "Nelson Tasman",
    places: ["Motueka", "Ngatimoti", "Kaiteriteri", "Marahau", "Mapua"],
    imageAlt: "Waves washing onto a golden sand beach beside a forested shore in Tasman Bay",
    related: ["freedom-camping-rules-new-zealand", "self-contained-campervan-green-warrant", "freedom-camping-tasman-2026", "freedom-camping-nelson", "nelson-abel-tasman-golden-bay", "abel-tasman-coast-track-campsites-2026-27"],
    hubs: ["freedom-camping/motueka", "camping/nelson-tasman"],
    intro:
      "Motueka is the gateway to the Abel Tasman, and the one Nelson Tasman town where the council gives a visitor several places to park a campervan for the night. Tasman District Council's Responsible Camping Bylaw, in force since 1 November 2025, allows certified self-contained vehicles at three signed sites in town, a larger reserve up the Motueka Valley that also takes uncertified vehicles, and no tents on public land at all. Kaiteriteri, Marahau and Mapua have no freedom camping sites, so the summer crush goes to the holiday parks.",
    sections: [
      s("What the 2025 bylaw says", [
        "Tasman District Council adopted its Responsible Camping Bylaw on 11 September 2025, and it came into effect on 1 November. It allows freedom camping only at signposted sites, with space on a first come, first served basis, and it says tents may not be used on public land. The council counts 147 freedom camping spaces across the district.",
        "At each site the draft schedule set two consecutive nights, on no more than two occasions in a calendar month, with a departure time of 8am and your belongings inside the marked space. Since 7 June 2026 a certified vehicle needs the green warrant, which the guide to the self-contained campervan warrant explains. The council's pages were not readable for this guide, so confirm the figures there.",
      ], ["Signed sites only", "Two nights, twice a month", "No tents on public land"]),
      s("The Motueka sites", [
        "Three places in town carry the spaces: Decks Reserve by the sea, with room for around 40 certified vehicles but on weeknights only between 6pm and 8am, George Quay with about 12, and Motueka Beach Reserve with about 19 for certified vehicles plus 3 for vehicles that are not self-contained. They are near the town centre, with the shops and the sea within walking distance.",
        "The numbers come from the council's draft schedule and a total of 147 spaces matches the council's own figure, so the list is probably the final one, but it is unconfirmed. Arrive by late afternoon in summer, because the beach reserve fills with day visitors and vans together.",
      ], ["Decks Reserve: about 40, weeknights", "George Quay: about 12", "Motueka Beach Reserve: 19 plus 3"], {
        caption: "Motueka sites in Tasman District Council's draft schedule 2 for the Responsible Camping Bylaw 2025, read on 21 October 2026. Check the council's page for the adopted list.",
        head: ["Site", "Spaces", "Notes"],
        rows: [
          ["Decks Reserve", "About 40", "Certified self-contained, weeknights 6pm to 8am"],
          ["George Quay", "About 12", "Certified self-contained"],
          ["Motueka Beach Reserve", "About 19 plus 3", "3 spaces for vehicles that are not self-contained"],
          ["Alexander Bluff Road Reserve", "Up to 40", "Ngatimoti, any vehicle, up the Motueka Valley"],
        ],
      }),
      s("The Ngatimoti reserve", [
        "Alexander Bluff Road Reserve at Ngatimoti, about 350 metres south of Alexander Bluff Bridge on the Motueka Valley Highway, takes up to 40 vehicles of any type, including those that are not self-contained. It is the council's most open site, about 25 minutes from Motueka, and a good pick for a tent-less van or a car camper who cannot use the beach sites.",
        "It is a riverside reserve with basic facilities, so bring water and take your rubbish. Tents are still not allowed at it under the bylaw, so a tent has to be pitched in a holiday park or a DOC campsite.",
      ], ["Takes any vehicle, up to 40", "About 25 minutes from Motueka", "Still no tents"]),
      s("Abel Tasman, Kaiteriteri and the holiday parks", [
        "Kaiteriteri, Marahau and Mapua have no freedom camping, and the Abel Tasman National Park's campsites are DOC's, booked through its system all year, as the Abel Tasman Coast Track campsites guide explains. In summer the Kaiteriteri and Marahau holiday parks and the motor camps in Motueka are the practical choice, and they book out over Christmas.",
        "KiwiCamping's DOC data (11 August 2026) lists 37 DOC campsites in Nelson Tasman, only 2 of them free and 8 with campervan access, with adult nightly rates from $10 to $31, and Tōtaranui is the largest with room for 269. The guide to holiday parks in New Zealand explains how booking works.",
      ], ["Abel Tasman campsites book all year", "37 DOC campsites in Nelson Tasman", "Holiday parks fill at Christmas"]),
      s("Using KiwiCamping around Motueka", [
        "In KiwiCamping you will find DOC campsites and huts, holiday parks and dump stations around Motueka and the Abel Tasman, with filters for campervan access. The council's sites are not in the app, so use the council's page for those and keep a holiday park saved as the backup.",
        "Add Motueka to a trip from Nelson, 45 minutes east, and read the leg to Golden Bay over Takaka Hill. Saved places stay on the phone, and the map, routing, weather and photos need signal, which drops on the hill. The app is free to download, with in-app purchases.",
      ], ["Council page decides the sites", "Nelson is 45 minutes away", "Saved places stay on the phone"], undefined, true),
    ],
    faq: [
      ["Can I freedom camp in Motueka?", "Yes, in a certified self-contained vehicle at the council's signed sites, such as Motueka Beach Reserve, George Quay and Decks Reserve. Tents are not allowed on public land."],
      ["Can I freedom camp at Kaiteriteri or Marahau?", "No. Neither has a council site, so use a holiday park or a booked DOC campsite."],
    ],
    sources: [
      { label: "Tasman District Council: Responsible camping", url: "https://www.tasman.govt.nz/my-region/recreation/responsible-camping" },
      { label: "Tasman District Council: Camping bylaw", url: "https://www.tasman.govt.nz/my-council/key-documents/more/bylaws-and-regulations/camping-bylaw" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
    ],
  }),

  a({
    slug: "freedom-camping-gisborne",
    title: "Freedom Camping in Gisborne and Along State Highway 35",
    description: "Freedom camping in Gisborne and on the East Cape: Kaiti Beach's painted bays and three-night limit, the banned Waikanae Beach, DOC campsites such as Anaura Bay, and the holiday parks along State Highway 35.",
    category: "Rules & safety",
    region: "East Coast",
    places: ["Gisborne", "Kaiti Beach", "Tolaga Bay", "Anaura Bay", "Te Araroa"],
    imageAlt: "Breakers rolling onto a dark sand beach with white cliffs on the headland beyond",
    related: ["freedom-camping-rules-new-zealand", "self-contained-campervan-green-warrant", "east-cape-road-trip", "freedom-camping-whakatane-2026", "freedom-camping-napier-hastings", "holiday-parks-new-zealand-guide"],
    hubs: ["freedom-camping/east-coast", "camping/east-coast"],
    intro:
      "Gisborne has one headline freedom camping place, Kaiti Beach, where certified self-contained vehicles park inside painted blue lines for up to three nights, and the council bans camping at Waikanae Beach and across most of the town. Beyond the city, State Highway 35 around the East Cape runs through country where the camping is DOC's and the holiday parks', not the council's. Plan Gisborne as the last full-service stop, and keep the East Cape for its campsites.",
    sections: [
      s("What Gisborne District Council allows", [
        "The council lets people camp in restricted camping areas only, and its page says the vehicle must be certified self-contained to stay at them. Camping in a vehicle that is not certified is one of the listed breaches, along with overstaying and damaging the environment. Since 7 June 2026 the warrant has to be the green one, which the guide to the self-contained campervan warrant explains.",
        "The bylaw has been reviewed several times since 2021 after complaints from residents about the beach sites, so read the council's page for the current list of areas, the season and the limits. Third-party listings quote different seasons, and the council's page is the only one to trust.",
      ], ["Restricted areas only", "Certified self-contained required", "Council page is the authority"]),
      s("Kaiti Beach and the town", [
        "Kaiti Beach is the council's named site: certified self-contained vehicles only, parked within the painted blue lines, with a three-night maximum. It is a short drive from the city centre and the harbour, looking out at Young Nick's Head, and it fills on summer evenings. Park inside the lines, since a van that overhangs one is the easiest ticket there is.",
        "Waikanae Beach Holiday Park on Grey Street is listed as a prohibited area under the bylaw's first schedule, and so are most of the beachfront and the city's other car parks. Treat any place not on the council's list as closed.",
      ], ["Kaiti Beach: inside the blue lines", "Three nights at most", "Waikanae Beach: prohibited"]),
      s("Fines", [
        "A breach costs $400 for camping where it is prohibited or restricted, $400 for staying in a vehicle that is not self-contained where it must be, $200 for no warrant card on display and $800 for damage or waste, under the Freedom Camping (Penalties for Infringement Offences) Regulations 2023. The council employs compliance staff over summer, and a hire company charges the ticket to the renter.",
        "The fallback is a holiday park, and Gisborne has several in town and along Wainui Beach, with powered sites and cabins. The guide to holiday parks in New Zealand explains how booking works, and January fills early because Gisborne is where the sun rises first on New Year's Day.",
      ], ["$400 for most breaches", "Holiday parks in town and at Wainui", "New Year fills early"]),
      s("State Highway 35 and the East Cape", [
        "The 330 km loop of State Highway 35 north of Gisborne is the East Cape, and the East Cape road trip guide covers the route in days. Camping on the way is mostly in DOC and community campgrounds at the bays, with Anaura Bay the best known and the largest DOC site in the region with room for 81.",
        "KiwiCamping's DOC data (11 August 2026) lists 14 DOC campsites on the East Coast, 8 of them free and 12 with campervan access, with adult nightly rates from $8 to $15, which makes it one of the cheapest regions in the country. Fuel and groceries thin out north of Tolaga Bay, so fill up in Gisborne and carry water.",
      ], ["Anaura Bay holds 81", "8 of 14 DOC campsites are free", "Fuel up in Gisborne"]),
      s("Using KiwiCamping around Gisborne", [
        "KiwiCamping lists DOC campsites and huts, holiday parks and dump stations on the East Coast, with campervan filters, though not the council's freedom camping areas. Check the council's page for Kaiti Beach and save a campground as the night's backup.",
        "Add Gisborne to a trip as the start of the East Cape loop, and read the legs, since the drive from Napier is about 3.5 hours and from Whakatāne about 2.5. Saved places and details stay on the phone, while the map, routing, weather and photos need signal, which is sparse on the cape. The app is free to download, with in-app purchases.",
      ], ["Council page decides Kaiti Beach", "Napier about 3.5 hours away", "Saved places stay on the phone"], undefined, true),
    ],
    faq: [
      ["Can I freedom camp in Gisborne?", "Yes, in a certified self-contained vehicle at Kaiti Beach, parked inside the painted blue lines for up to three nights. Waikanae Beach and most of the town are prohibited."],
      ["Is freedom camping allowed on the East Cape?", "Mostly at DOC and community campgrounds, not on council roadsides. Check the signs, because many beach car parks are closed to camping."],
    ],
    sources: [
      { label: "Gisborne District Council: Freedom camping", url: "https://gdc.govt.nz/recreation/freedom-camping" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
    ],
  }),
];
