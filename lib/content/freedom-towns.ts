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
];
