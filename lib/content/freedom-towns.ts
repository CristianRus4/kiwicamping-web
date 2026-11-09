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
        "A breach of a council bylaw is an infringement under the Freedom Camping Act. The fees come from the Freedom Camping (Penalties for Infringement Offences) Regulations 2023: $400 for camping where it is prohibited or restricted, $400 for staying in a vehicle that is not self-contained where that is not allowed, $200 for not displaying the warrant card, and $800 for damaging the area or leaving waste. A fine goes to the registered owner of the vehicle, which for a rental is usually the hire company, which then passes it on.",
        "The sensible fallback in Hawke's Bay is a holiday park. Napier has several, and the guide to holiday parks in New Zealand explains how to book and what to expect. Department of Conservation land in the region is mostly in the Kaweka and Ruahine ranges inland, and KiwiCamping's DOC data (11 August 2026) lists 7 DOC campsites in the region, 6 of them free, with campervan access at only 2. DOC's freedom camping notices for Hawke's Bay cover 16 places.",
      ], ["$400 for most breaches", "Holiday parks for tents and uncertified vans", "DOC land is inland and basic"]),
      s("Using KiwiCamping in Hawke's Bay", [
        "KiwiCamping shows the DOC campsites and huts in the region, holiday parks with their facilities, and dump stations, with filters to narrow them to what your vehicle needs. It does not hold the councils' freedom camping sites, so use the council pages above for those and save a holiday park as your fallback for each night.",
        "Put the Napier night into a trip with its date and a note, and read the distance to the next stop, which for most people is the drive to or from Wellington or Taupō. Saved places, place details and guides are kept on the phone, while map tiles, routing, weather and photos need signal. Free to download, with in-app purchases.",
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
        "The council patrols and enforces the bylaw, and a breach can bring a $400 fine for camping where it is not allowed, with $800 for damage or waste under the national fees from the Freedom Camping (Penalties for Infringement Offences) Regulations 2023. A fine goes to the registered owner of the vehicle, which for a rental is the hire company.",
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
        "Add the Nelson night to a trip with its date and a holiday park as the fallback, and read the distance to the next stop, whether that is Abel Tasman, Golden Bay or the drive south. Saved places, place details and guides are kept on the phone, while map tiles, routing, weather and photos need signal. Free to download, with in-app purchases.",
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
        "KiwiCamping shows DOC campsites and huts, holiday parks with their facilities and dump stations, with filters for campervan access. It does not hold the council's freedom camping sites, so use the council page for those and save a holiday park as your fallback for the night.",
        "Add Kaikōura to a trip between Picton and Christchurch with its date and a note, and read the distance on each leg. Saved places, place details and guides are kept on the phone, while map tiles, routing, weather and photos need signal. Free to download, with in-app purchases.",
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
        "The guide to holiday parks in New Zealand explains how to book them. KiwiCamping's DOC data (11 August 2026) lists 7 DOC campsites in the Waikato region, 4 of them bookable online and all in forest parks inland, none on the Raglan coast.",
      ], ["Tents need a holiday park", "Book ahead in summer", "DOC campsites are inland"]),
      s("Using KiwiCamping around Raglan", [
        "KiwiCamping shows DOC campsites, holiday parks with their facilities and bookable stays, and dump stations, with filters for campervan access. It does not hold the council's freedom camping areas, so the council's maps are the source for those.",
        "Add Raglan to a trip, perhaps between Hamilton and the Coromandel or the Waitomo caves, with the date and a holiday park as the fallback, and read the distance to the next stop. Saved places, place details and guides are kept on the phone, while map tiles, routing, weather and photos need signal. Free to download, with in-app purchases.",
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
        "A certified self-contained vehicle needs the green warrant since 7 June 2026, which the guide to the self-contained campervan warrant explains. A fine goes to the registered owner of the vehicle, which for a rental is usually the hire company.",
      ], ["$400 for most breaches", "$800 for waste or damage", "Green warrant since 7 June 2026"]),
      s("DOC land and the holiday park", [
        "Conservation land is inland, in the foothills around Geraldine and Peel Forest. KiwiCamping's DOC data (11 August 2026) lists 22 DOC campsites in Canterbury, 6 of them free and 14 bookable through DOC, with Peel Forest Campground the largest with room for 81. DOC's freedom camping notices around Geraldine are DOC's own rules, separate from the council's.",
        "The guide to holiday parks in New Zealand explains how to book them, and the Christchurch to Tekapo and Aoraki road trip shows where Timaru fits on the inland route.",
      ], ["22 DOC campsites in Canterbury", "Peel Forest is the largest", "Holiday park for the bay"]),
      s("Using KiwiCamping around Timaru", [
        "KiwiCamping shows DOC campsites and huts, holiday parks with their facilities and dump stations, with filters for campervan access. It does not hold the council's overnight parking, so use the council page and the sign for the bay.",
        "Add Timaru to a trip between Christchurch and Dunedin, or on the way to Tekapo, with its date and a holiday park as the fallback, and read the distance on each leg. Saved places, place details and guides are kept on the phone, while map tiles, routing, weather and photos need signal. Free to download, with in-app purchases.",
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
        "A breach of the bylaw is an infringement offence under the Freedom Camping Act. The fees under the Freedom Camping (Penalties for Infringement Offences) Regulations 2023 are $400 for freedom camping where it is prohibited or restricted, $400 for a vehicle that is not self-contained where it must be, $200 for no warrant card on display and $800 for damage or waste. A fine goes to the registered owner of the vehicle, which for a rental is usually the hire company.",
      ], ["$400 for most breaches", "$800 for waste or damage", "Rental companies pass fines on"]),
      s("Holiday parks and DOC campsites", [
        "The sure option in Mercury Bay is a holiday park, and the guide to holiday parks in New Zealand explains how to book. They fill quickly in the Christmas and New Year weeks, so book ahead for Whitianga, Hāhei and Hot Water Beach.",
        "Conservation land on the peninsula is mostly in the Coromandel Forest Park and the northern coast. KiwiCamping's DOC data (11 August 2026) lists 20 DOC campsites in the Coromandel, 19 of them bookable online through DOC, with adult nightly rates from $10 to $23, and the guide to DOC campsites explains how booking works. The Coromandel to Rotorua road trip shows how the peninsula fits into a longer route.",
      ], ["Book ahead for New Year", "20 DOC campsites on the Coromandel", "19 bookable through DOC"]),
      s("Using KiwiCamping around Whitianga", [
        "KiwiCamping shows the DOC campsites and huts on the peninsula, holiday parks with their facilities and dump stations, with filters for campervan access. It does not hold the council's two car parks, so use the council's page for those and keep a holiday park as the fallback.",
        "Add Whitianga to a trip with its date and a note, and read the distance to Coromandel Town or Tairua. Saved places, place details and guides are kept on the phone, while map tiles, routing, weather and photos need signal. Free to download, with in-app purchases.",
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
        "KiwiCamping shows DOC campsites and huts, holiday parks with their facilities and dump stations, with filters for campervan access, which matters in the Sounds. It does not hold the council's Renwick and Blenheim sites, so use the council's page for those.",
        "Add the first night off the ferry to a trip with its date, and read the distance to Blenheim, Nelson or Kaikōura. Saved places, place details and guides are kept on the phone, while map tiles, routing, weather and photos need signal. Free to download, with in-app purchases.",
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
        "Te Anau has holiday parks and a motor camp on or near the lakefront, and Manapouri has its own. They are the straightforward choice for tents and for campervans without a self-containment certificate, and they fill from December to February and in the school holidays, so book ahead. The guide to holiday parks in New Zealand explains how booking works.",
        "KiwiCamping's DOC data (11 August 2026) lists 13 DOC campsites in Fiordland, 10 of them bookable online through DOC, with adult nightly rates from $10 to $42. Cascade Creek on the Milford Road is the largest, with room for 120, 8 of the 13 have campervan access, and 3 are free. 4 are reached only on foot or by boat, so check access before you drive.",
      ], ["Book Te Anau holiday parks ahead", "13 DOC campsites in Fiordland", "Cascade Creek is the biggest"]),
      s("Fines", [
        "Officers enforce the bylaw and the national fees apply, under the Freedom Camping (Penalties for Infringement Offences) Regulations 2023: $400 for camping where it is prohibited, $400 for a vehicle that is not self-contained where it must be, $200 for no warrant card on display and $800 for damage or waste. A fine goes to the registered owner of the vehicle, which for a rental is usually the hire company.",
      ], ["$400 for most breaches", "$800 for waste or damage", "Rental companies pass fines on"]),
      s("Great Walks and the wider region", [
        "Te Anau is the start of the Kepler Track and the Milford Track transport, and the Great Walks guides explain how to book their huts and campsites through DOC, which sell out months ahead. The Fiordland road trip guide covers the wider drive, and the Queenstown to Milford Sound drive guide covers the day trip from the other side.",
      ], ["Great Walks book months ahead", "Fiordland road trip covers the loop", "Queenstown to Milford is a long day"]),
      s("Using KiwiCamping around Te Anau", [
        "KiwiCamping shows Fiordland's DOC campsites and huts with their fees and facilities, holiday parks with their facilities and bookable stays, and dump stations, with filters for campervan access. It does not hold the council's bylaw, so use the council's page for the rules.",
        "Save a holiday park or a DOC campsite for each night near the mountains, add them to a trip with dates, and check the forecast on each leg, which matters on the Milford Road. Saved places, place details and guides are kept on the phone, while map tiles, routing, weather and photos need signal. Free to download, with in-app purchases.",
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
        "A fine for camping in a closed place is $400 under the Freedom Camping (Penalties for Infringement Offences) Regulations 2023, with $400 for a vehicle that is not self-contained where it must be, $200 for no warrant card on display and $800 for damage or waste. A fine goes to the registered owner, which for a rental is usually the hire company.",
      ], ["Closed 23 December to 11 January at four sites", "Book ahead for the holidays", "$400 for most breaches"]),
      s("DOC land near Twizel", [
        "DOC runs its own rules on conservation land around Twizel, and its freedom camping notices for the district list four restricted camping and amenity areas, including Quailburn and Round Bush, each with a limit of no more than four nights in a calendar month. KiwiCamping's DOC data (11 August 2026) lists 22 DOC campsites in Canterbury, 14 of them bookable online through DOC, with adult nightly rates from $10 to $23.",
        "The guide to DOC campsites explains how booking works, and the guide to holiday parks covers the paid sites in Twizel, Tekapo and Aoraki Mount Cook.",
      ], ["4 DOC restricted areas, 4 nights a month", "22 DOC campsites in Canterbury", "14 bookable online"]),
      s("Using KiwiCamping around Twizel", [
        "KiwiCamping shows DOC campsites and huts, holiday parks with their facilities and dump stations, with filters for campervan access. It does not hold the council's sites, so use the council's page for Lake Wardell and the rest.",
        "Add Twizel to a trip between Christchurch, Tekapo and Queenstown with its date and a note, keep a holiday park saved as the fallback, and read the distance on each leg. Saved places, place details and guides are kept on the phone, while map tiles, routing, weather and photos need signal. Free to download, with in-app purchases.",
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
        "A fine for camping where it is prohibited is $400, with $400 for a vehicle that is not self-contained where it must be, $200 for no warrant card on display and $800 for damage or waste, under the Freedom Camping (Penalties for Infringement Offences) Regulations 2023. A fine goes to the registered owner of the vehicle, which for a rental is usually the hire company.",
      ], ["Waterfront and streets: banned", "Boat ramp area is for day parking", "$400 for most breaches"]),
      s("Holiday parks and the wider peninsula", [
        "Akaroa has holiday parks in and just outside the town, and they are the right answer for tents, uncertified vans and anyone staying more than two nights. They book out over Christmas, the school holidays and the long weekends, so reserve ahead. The guide to holiday parks in New Zealand explains how booking works, and the Banks Peninsula camping weekend guide covers the wider loop.",
        "DOC's freedom camping notices around Christchurch and Banks Peninsula, for places such as Godley Head and Ripapa Island, prohibit camping. KiwiCamping's DOC data (11 August 2026) lists 22 DOC campsites in Canterbury, but the closest are well inland of the peninsula.",
      ], ["Book ahead for summer weekends", "DOC notices near Christchurch ban camping", "Closest DOC campsites are inland"]),
      s("Using KiwiCamping around Akaroa", [
        "KiwiCamping shows DOC campsites and huts, holiday parks with their facilities and dump stations, with filters for campervan access. It does not hold the council's Boat Park area, so use the council's page for that and save a holiday park as the fallback.",
        "Add Akaroa to a trip from Christchurch with its date and a note, and read the distance on the winding road over the hills. Saved places, place details and guides are kept on the phone, while map tiles, routing, weather and photos need signal. Free to download, with in-app purchases.",
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
        "The Bay of Islands has holiday parks and motor camps in Paihia, at Waitangi and at Haruru Falls, with tent sites, powered sites, cabins and campervan bays, and they are the straightforward answer for any night here. They fill from December to February and over Easter, so reserve ahead. The guide to holiday parks in New Zealand explains how booking works.",
        "For a week-long plan, the Bay of Islands camping week guide covers the nights and the days around the bay, and the Auckland to Bay of Islands drive guide covers the road from the city.",
      ], ["Book ahead from December to Easter", "Powered sites and cabins", "Week-long plan in the Bay of Islands guide"]),
      s("Using KiwiCamping around Paihia", [
        "KiwiCamping shows DOC campsites and huts, holiday parks with their facilities and bookable stays, and dump stations, with filters for campervan access. It does not hold the council's approved sites, so use the council's page for Kawakawa.",
        "Add the Bay of Islands to a trip with each night dated and a holiday park noted, and read the distance between legs, whether you are heading on to Cape Reinga or back to Auckland. Saved places, place details and guides are kept on the phone, while map tiles, routing, weather and photos need signal. Free to download, with in-app purchases.",
      ], ["Council page decides Kawakawa", "Date each night and add a fallback", "Saved places stay on the phone"], undefined, true),
    ],
    faq: [
      ["Can I freedom camp in Paihia?", "No. Far North District Council does not allow camping or overnight parking in its parks, reserves and beaches, and DOC bans camping at five places around the Bay of Islands. Use a holiday park."],
      ["Where is the nearest free camping to Paihia?", "The council's approved site at Kawakawa, about 20 minutes' drive away, is the nearest it lists. Check the council's page, because the list has changed before."],
    ],
    sources: [
      { label: "Far North District Council: Responsible camping", url: "https://www.fndc.govt.nz/District/Visiting-the-Far-North/responsible-camping" },
      { label: "RNZ via 7me: Northland councils gearing up as peak freedom camping season begins", url: "https://7me.one/northland-councils-gearing-up-as-peak-freedom-camping-season-begins/" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
    ],
  }),
];
