import { makeArticle as a, type Article, type ArticleSection, type ArticleTable } from "@/lib/article-model";

const s = (heading: string, body: string[], tips?: string[], table?: ArticleTable, cta?: boolean): ArticleSection => ({ heading, body, tips, ...(table && { table }), ...(cta && { cta }) });

/**
 * Campground and holiday park guides for the towns people base themselves in, plus family, season and
 * day-walk guides. Park names are the well-known operators' own; DOC counts come from KiwiCamping's DOC
 * data in lib/data/hubs.json (11 August 2026). The freedom camping rules for each town are in
 * lib/content/freedom-towns.ts and freedom-regions.ts, which these guides link to rather than repeat.
 */
export const campingBaseArticles: Article[] = [

  a({
    slug: "camping-in-taupo",
    title: "Camping in Taupō: Holiday Parks, DOC Campsites and Where to Base Yourself",
    description: "Where to camp around Lake Taupō: the holiday parks in town and on the lakeshore, the DOC campsite at Whakaipo Bay, the Kaimanawa and Tongariro campsites inland, and when the lake fills up.",
    category: "Camping guides",
    region: "Taupō",
    places: ["Taupō", "Motutere Bay", "Whakaipo Bay", "Tūrangi", "Acacia Bay", "Huka Falls"],
    imageAlt: "Lake Taupō seen from a park on its shore, with the water stretching out towards the mountains",
    related: ["freedom-camping-taupo", "auckland-to-taupo-drive-guide", "holiday-parks-new-zealand-guide", "tongariro-northern-circuit-camping-2026-27", "doc-campsites-new-zealand-guide"],
    hubs: ["camping/central-north-island", "freedom-camping/turangi"],
    intro:
      "Taupō is the easiest place in the central North Island to camp, because it has holiday parks in town, one on the lake shore towards Tūrangi, and DOC campsites in the forests and mountains within an hour's drive. What it does not have is much free camping by the water, since the council's bylaw closes most of the lakefront. Book a holiday park in summer and over the school holidays, and use the DOC campsites for quieter nights.",
    sections: [
      s("How camping works around the lake", [
        "Lake Taupō is New Zealand's largest lake, and the town sits at its northern end with Tongariro National Park an hour to the south. That makes it both a stop on the way between Auckland and Wellington and a base for the Tongariro Alpine Crossing, the Huka Falls and the lake's own beaches. Most visitors sleep in one of three ways: a holiday park, a DOC campsite, or a freedom camping spot for a certified self-contained vehicle.",
        "Holiday parks are the dependable choice and the only one with showers, kitchens and power in most cases. DOC campsites are basic and cheaper, and the closest to the lake is a self-contained-only site. Freedom camping is limited to a few council areas and is covered in the guide to freedom camping in Taupō, so this guide sticks to the places you pay for.",
      ], ["Holiday park, DOC campsite or freedom camp", "Most of the lakefront is closed to camping", "Freedom camping has its own guide"]),
      s("Holiday parks in and near Taupō", [
        "Taupō TOP 10 Holiday Park is on Rangatira Street, about a 20 minute walk from the town centre and the lakefront, with powered and unpowered sites, cabins, pools and hot tubs, which makes it popular with families. DeBretts Spa Resort is a well-known holiday park on the northern edge of town with hot pools. Both book out in January and over Christmas, and the parks in town are the easiest to reach on foot.",
        "Motutere Bay TOP 10 Holiday Park is about halfway between Taupō and Tūrangi, on the lake shore, with lakefront and lakeside powered and unpowered sites. It suits a longer stay beside the water, and it is a good base for the southern lake and Tongariro. The guide to holiday parks in New Zealand explains how booking, power and site types work.",
      ], ["Taupō TOP 10: walk to town", "Motutere Bay: on the lake shore", "Book ahead in January"]),
      s("DOC campsites near Taupō", [
        "Whakaipo Bay is DOC's campsite on the lake, reached from Acacia Bay, and it is for self-contained vehicles only, since its facilities are basic. KiwiCamping's DOC data (11 August 2026) lists 14 DOC campsites in the central North Island, 9 of them free, with adult nightly rates listed from $10 to $28 and 5 bookable online through DOC.",
        "Most of the rest are inland: 7 in Kaimanawa Forest Park, 5 in Tongariro National Park and 3 Great Walk campsites for the Tongariro Northern Circuit, which book out as the guide to that track explains. 10 of the 14 have campervan access, and 9 are basic campsites with few facilities, so bring water, a toilet plan and your rubbish bags.",
      ], ["14 DOC campsites in the central North Island", "Whakaipo Bay: self-contained only", "Great Walk campsites book out"]),
      s("When Taupō fills up", [
        "The lake is busiest from Christmas to the end of January, over the Easter and Labour Day weekends, and in the school holidays, which in 2027 fall from 10 to 26 April, 3 to 18 July and 25 September to 10 October. Events such as the Taupō Cycle Challenge and the Ironman fill the town for a weekend, so check the calendar before you travel and book early.",
        "In winter the town is quiet and the nights are cold, but Tongariro's ski fields bring visitors on weekends, so the holiday parks stay busy near the mountain. A night at Taupō also makes a convenient break on the road between Auckland and Wellington, as the Auckland to Taupō drive guide shows.",
      ], ["Christmas to January is the peak", "School holidays: 10 to 26 April, 3 to 18 July, 25 September to 10 October 2027", "Event weekends fill the town"]),
      s("Using KiwiCamping around Taupō", [
        "KiwiCamping shows DOC campsites and huts, holiday parks with their facilities and bookable stays, and dump stations, with filters for campervan access. Save a holiday park and a DOC campsite for each night, and order them in a trip with dates and notes.",
        "The trip adds up the distance between legs and shows a forecast at each stop, which helps when you are choosing between the lake and the mountain. Saved places, place details and guides are kept on the phone, while map tiles, routing, weather and photos need signal. Free to download, with in-app purchases.",
      ], ["Save a holiday park and a DOC campsite", "Check the forecast for Tongariro", "Saved places stay on the phone"], undefined, true),
    ],
    faq: [
      ["Where can I camp in Taupō?", "At the holiday parks in town and on the lake shore towards Tūrangi, at DOC campsites such as Whakaipo Bay, or at the council's few freedom camping areas if your vehicle is certified self-contained."],
      ["Is there a DOC campsite on Lake Taupō?", "Whakaipo Bay, reached from Acacia Bay. It is for self-contained vehicles only because its facilities are basic."],
    ],
    sources: [
      { label: "Taupō TOP 10 Holiday Park", url: "https://top10.co.nz/park/central-north-island/taupo-top-10-holiday-park/" },
      { label: "Motutere Bay TOP 10 Holiday Park", url: "https://top10.co.nz/park/central-north-island/motutere-bay-top-10-holiday-park/" },
      { label: "DOC: Whakaipo Bay campsite", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/central-north-island/places/taupo-area/things-to-do/whakaipo-campsite/" },
      { label: "Taupō District Council: Parks and reserves", url: "https://www.taupodc.govt.nz/recreation/parks-and-reserves" },
      { label: "DOC: campsites", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/" },
    ],
  }),

  a({
    slug: "camping-in-kaikoura",
    title: "Camping in Kaikōura: Holiday Parks, Beachfront Sites and Where to Base Yourself",
    description: "Where to camp in Kaikōura: the Beach Road holiday parks, the beachfront park at Peketa south of town, what the freedom camping rules leave you, and when the town fills with whale watchers.",
    category: "Camping guides",
    region: "Canterbury",
    places: ["Kaikōura", "Peketa", "South Bay", "Kaikōura Peninsula", "Mount Fyffe"],
    imageAlt: "Mount Fyffe in the Kaikōura Ranges rising above the coast",
    related: ["freedom-camping-kaikoura", "picton-kaikoura-christchurch-route", "christchurch-to-kaikoura-drive-guide", "holiday-parks-new-zealand-guide", "cook-strait-ferry-campervan-guide"],
    hubs: ["camping/canterbury", "freedom-camping/north-canterbury"],
    intro:
      "Kaikōura has a handful of holiday parks, most of them along Beach Road close to the town and the water, and one beachfront park about seven kilometres south at Peketa. They are the sensible answer, because the council limits freedom camping to one night in a few signed spots and bans tents outright. The town is small and the coast is a draw for whale watching and seals all year, so book ahead in summer.",
    sections: [
      s("What the rules leave you", [
        "Kaikōura District Council allows freedom camping only in certified self-contained vehicles at a short list of signed sites, for one night at a time, as the guide to freedom camping in Kaikōura explains. Tents are not allowed, and most of the township and the coast around it is closed. So for a tent, a van without a certified toilet, or any stay of more than a night, you are choosing between a holiday park and a campground.",
        "The town sits roughly halfway between Picton and Christchurch, and many travellers arrive after a long day on State Highway 1, so decide where you are sleeping before you reach it. The route guide from Picton to Christchurch shows the stops either side.",
      ], ["Tents: holiday park only", "One night at the signed freedom camping sites", "Decide before you arrive"]),
      s("Holiday parks in Kaikōura", [
        "Most of the town's parks are on or near Beach Road, a short walk from the beach and a short drive from the centre. Kaikōura TOP 10 Holiday Park is the largest, with powered and unpowered sites, cabins and a pool, Alpine Pacific Motels and Holiday Park and A1 Kaikōura Motel and Holiday Park also sit on Beach Road, and A1 lists itself as dog friendly. Each has powered sites for campervans and a kitchen and laundry for the day you need them.",
        "Peketa Beach Holiday Park is about 7 km south of town on State Highway 1 and describes itself as the only beachfront holiday park in Kaikōura, with tent pitches on the beach or among native trees, plus cabins. It is further from the restaurants, which suits a quiet night, and closer to the road south. The guide to holiday parks in New Zealand explains how booking and site types work.",
      ], ["Beach Road: close to town", "Peketa: beachfront, 7 km south", "Check the dog policy before you book"]),
      s("DOC and the wider coast", [
        "There is little DOC camping on the Kaikōura coast itself. KiwiCamping's DOC data (11 August 2026) lists 22 DOC campsites across Canterbury, 6 of them free, but most are inland in Arthur's Pass, Lake Sumner and the Craigieburn ranges, and DOC's freedom camping notices for North Canterbury cover 6 places, 5 of them bans. So a night on the coast is a holiday park, and DOC comes into the plan once you head inland.",
        "Along the coast the signs matter. Pōhowera at South Bay is closed from mid-August to the end of February to protect nesting banded dotterel, and seal colony car parks are not places to stay overnight.",
      ], ["22 DOC campsites in Canterbury, mostly inland", "North Canterbury notices: 5 of 6 are bans", "Seal car parks are not campsites"]),
      s("When Kaikōura fills up", [
        "Whale watching runs all year, so the town does not have a true off season, but it fills from Christmas to the end of January, on long weekends and in the school holidays, which in 2027 run from 10 to 26 April, 3 to 18 July and 25 September to 10 October. A night here is a natural stop between the ferry at Picton and the South Island's other highlights, which makes late afternoon the time everyone arrives.",
        "Book a holiday park a few weeks ahead in summer, and earlier for a beachfront tent site. In winter the parks have space and the weather on the coast can be sharp, so check the forecast for wind and swell before you plan an exposed site.",
      ], ["Book a few weeks ahead in summer", "School holidays: 10 to 26 April, 3 to 18 July, 25 September to 10 October 2027", "Check the wind in winter"]),
      s("Using KiwiCamping around Kaikōura", [
        "KiwiCamping shows DOC campsites and huts, holiday parks with their facilities and bookable stays, and dump stations, with filters for campervan access. Save a holiday park for the night, add it to a trip between Picton and Christchurch with its date and a note, and read the distance on each leg.",
        "The trip shows a forecast at each stop. Saved places, place details and guides are kept on the phone, while map tiles, routing, weather and photos need signal. Free to download, with in-app purchases.",
      ], ["Save a holiday park for the night", "Add it to a trip with its date", "Saved places stay on the phone"], undefined, true),
    ],
    faq: [
      ["Where can I camp in Kaikōura?", "At the holiday parks, mostly along Beach Road, or at Peketa Beach Holiday Park south of town. Freedom camping is limited to certified self-contained vehicles for one night at signed sites."],
      ["Do I need to book a Kaikōura holiday park?", "In summer, on long weekends and in school holidays, yes. Book a few weeks ahead, and earlier for a beachfront tent site."],
    ],
    sources: [
      { label: "Kaikōura TOP 10 Holiday Park", url: "https://top10.co.nz/park/kaikoura-top-10-holiday-park" },
      { label: "Kaikōura District Council: Responsible camping", url: "https://www.kaikoura.govt.nz/rules-regs-licenses/responsible-camping" },
      { label: "DOC: campsites", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/" },
    ],
  }),

  a({
    slug: "camping-in-paihia-bay-of-islands",
    title: "Camping in Paihia and the Bay of Islands: Holiday Parks, DOC Island Campsites and Where to Base Yourself",
    description: "Where to camp around Paihia and the Bay of Islands: the holiday parks at Paihia, Waitangi and Haruru Falls, DOC's island campsites on Urupukapuka, Northland's DOC campsites and when to book.",
    category: "Camping guides",
    region: "Northland",
    places: ["Paihia", "Waitangi", "Haruru Falls", "Russell", "Urupukapuka Island", "Kerikeri"],
    imageAlt: "Paihia Beach in the Bay of Islands, with calm water and a curve of sand",
    related: ["freedom-camping-paihia", "bay-of-islands-camping-week", "auckland-to-bay-of-islands-drive-guide", "kauri-dieback-camping-travel", "holiday-parks-new-zealand-guide"],
    hubs: ["camping/northland", "freedom-camping/bay-of-islands"],
    intro:
      "Paihia is the Bay of Islands' base, and its camping is holiday parks: several along the shore and the Waitangi River, with tent sites, powered sites for campervans and cabins. There is no freedom camping in the town, and DOC's own campsites are out on Urupukapuka Island or further afield in Northland. Book ahead from December to Easter, and plan the boat trips and the road north around where you sleep.",
    sections: [
      s("Why a holiday park is the answer here", [
        "Far North District Council does not allow camping or overnight parking in its parks, reserves and beaches, and the nearest approved free site is at Kawakawa, a short drive inland, as the guide to freedom camping in Paihia explains. DOC's notices ban camping at five places around the bay. So the practical choice for a night in Paihia is a holiday park.",
        "That is not a hardship. The bay's parks are close to the water, the Waitangi Treaty Grounds and the ferry wharves, and they have what a travelling vehicle needs: showers, a kitchen, laundry and power. They also take tents, which most council areas do not.",
      ], ["No freedom camping in Paihia", "Holiday parks take tents and campervans", "Close to the wharves and Waitangi"]),
      s("Holiday parks around Paihia", [
        "Paihia TOP 10 Holiday Park sits in its own bay just south of Paihia township, with cabins and camping and motorhome sites. Waitangi Holiday Park is on the banks of the Waitangi River near Te Tii Beach and is the one within walking distance of Paihia's centre, the Treaty Grounds and the supermarket. Bay of Islands Holiday Park is on Puketona Road near Haruru Falls, between Paihia and Kerikeri, with tent and power sites alongside its cabins, and Beachside Holiday Park is another option in its own bay.",
        "Which suits you depends on how you plan to move. If you will walk to the wharf for a boat trip, take Waitangi or the Paihia park, and if you are continuing to Kerikeri or north, the Haruru Falls side puts you on the road. The guide to holiday parks in New Zealand explains site types and booking.",
      ], ["Waitangi: walk to town", "Paihia TOP 10: its own bay", "Haruru Falls: on the road north"]),
      s("DOC campsites in the bay and Northland", [
        "DOC runs campsites on Urupukapuka Island, reached by ferry or water taxi, which suit a night away from the road and a day of walking and kayaking. KiwiCamping's DOC data (11 August 2026) lists 14 DOC campsites across Northland, 11 of them bookable online through DOC, with adult nightly rates listed from $10 to $23. Uretiti Beach Campsite, south of Whangārei, is the biggest at 300 sites, and 10 of the 14 have campervan access.",
        "The kauri dieback guide matters on the walks around these campsites, and the guide to DOC campsites explains how booking works. Island campsites need you to carry in water and take out everything, so pack as for a short backcountry trip.",
      ], ["14 DOC campsites in Northland", "Urupukapuka: by boat", "Clean your boots at kauri tracks"]),
      s("When to book", [
        "The Bay of Islands is busiest from Christmas to the end of January and at Easter, when the parks fill and the ferries are full, and it fills on long weekends and in the school holidays, which in 2027 run from 10 to 26 April, 3 to 18 July and 25 September to 10 October. Outside those, the weather is milder than in the south, and a week here fits into the Bay of Islands camping week guide.",
        "In winter the parks have space, the days are shorter and rain is common, so a cabin is a sensible fallback for a wet night. The drive from Auckland takes around three to four hours, covered in the Auckland to Bay of Islands drive guide.",
      ], ["Peak: Christmas to Easter", "School holidays: 10 to 26 April, 3 to 18 July, 25 September to 10 October 2027", "Cabin as a wet-night fallback"]),
      s("Using KiwiCamping around Paihia", [
        "KiwiCamping shows DOC campsites and huts, holiday parks with their facilities and bookable stays, and dump stations, with filters for campervan access. Save a holiday park for each night and order them in a trip with dates, then read the distance between Paihia, Kerikeri and the road north.",
        "The trip shows a forecast at each stop. Saved places, place details and guides are kept on the phone, while map tiles, routing, weather and photos need signal. Free to download, with in-app purchases.",
      ], ["Save a holiday park for each night", "Plan Cape Reinga as its own leg", "Saved places stay on the phone"], undefined, true),
    ],
    faq: [
      ["Where can I camp in Paihia?", "At the holiday parks around Paihia, Waitangi and Haruru Falls. Freedom camping is not allowed in the town, and DOC's own campsites are on Urupukapuka Island and further afield in Northland."],
      ["Can I camp in a tent in Paihia?", "Yes, at the holiday parks, which have tent sites. Tents are not allowed at the council's approved freedom camping sites."],
    ],
    sources: [
      { label: "Paihia TOP 10 Holiday Park", url: "https://top10.co.nz/park/paihia-top-10-holiday-park" },
      { label: "Far North District Council: Responsible camping", url: "https://www.fndc.govt.nz/District/Visiting-the-Far-North/responsible-camping" },
      { label: "DOC: campsites", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/" },
    ],
  }),

  a({
    slug: "camping-in-tekapo",
    title: "Camping in Lake Tekapo: Holiday Parks, Star Gazing and Where to Base Yourself",
    description: "Where to camp at Lake Tekapo: the lakefront holiday park, why the township is closed to freedom camping, the camping near Twizel and Lake Pukaki, the dark sky reserve and when the Mackenzie fills up.",
    category: "Camping guides",
    region: "Canterbury",
    places: ["Lake Tekapo", "Lake Pukaki", "Twizel", "Aoraki Mount Cook", "Mount John"],
    imageAlt: "Lake Tekapo's turquoise water below the mountains of the Mackenzie Country",
    related: ["christchurch-tekapo-aoraki-road-trip", "freedom-camping-twizel", "christchurch-to-queenstown-drive-guide", "holiday-parks-new-zealand-guide", "scenic-campsites-new-zealand"],
    hubs: ["camping/canterbury", "freedom-camping/twizel"],
    intro:
      "Lake Tekapo has few places to stay and a lot of visitors, so camping here is mostly a matter of booking the lakefront holiday park early or sleeping further along the road at Twizel or Lake Pukaki. The township is closed to freedom camping, and the Mackenzie council limits the sites around it, so a night at Tekapo is a planned night. The reward is the lake, the church and one of the darkest night skies in the country.",
    sections: [
      s("What you can and cannot do at Tekapo", [
        "Mackenzie District Council bans freedom camping in Tekapo township and restricts it at its signed sites around the basin, with some sites closed between 23 December and the second Monday in January. That leaves the holiday park for most visitors, and a certified self-contained vehicle can use the council's signed sites further out, as the guide to freedom camping in Twizel explains for the south end of the basin.",
        "Tents and vehicles without a self-containment certificate belong in a holiday park here, and so does anyone staying more than a night or two. The town is small, so the number of sites is small, and the best days to find a space are midweek outside the school holidays.",
      ], ["Township closed to freedom camping", "Some sites close from 23 December", "Tents: holiday park only"]),
      s("The holiday park at the lake", [
        "Lakes Edge Holiday Park, formerly Lake Tekapo Motels and Holiday Park, sits on Lakeside Drive on the lake shore, with powered and unpowered sites as well as motel units. It is a short walk from the lake, the village and the Tekapo Springs hot pools, and it is the camping option closest to the water. It is popular in summer and for the autumn colours, so book well ahead.",
        "The guide to holiday parks in New Zealand explains site types, power and booking. If the lakefront park is full, the nearest alternatives are the camping grounds and holiday parks at Twizel and at Lake Pukaki's end of the road to Aoraki Mount Cook, each under an hour away.",
      ], ["Lakes Edge: lakefront, Lakeside Drive", "Walk to the village and hot pools", "Twizel is the nearest alternative"]),
      s("DOC campsites in Canterbury", [
        "KiwiCamping's DOC data (11 August 2026) lists 22 DOC campsites across Canterbury, 6 of them free and 14 bookable online through DOC, with adult nightly rates from $10 to $23. Most are in the mountains and high country rather than at Tekapo itself, and Peel Forest Campground is the largest with room for 81. DOC's freedom camping notices near Twizel list four restricted areas with a limit of four nights in a calendar month.",
        "The guide to DOC campsites explains how booking works, and the scenic campsites guide covers the lake and river sites worth the detour. Check access and facilities before you drive, because several Canterbury campsites are basic and gravel-road only.",
      ], ["22 DOC campsites in Canterbury", "Peel Forest is the largest", "Check road access first"]),
      s("Stars and seasons", [
        "Tekapo sits in the Aoraki Mackenzie International Dark Sky Reserve, which is why visitors come for the night sky as well as the lake. Clear, cold nights give the best views, so a night here in winter can reward you, though it needs warm sleeping gear and a vehicle that copes with frost. Outside the school holidays the village is quiet, and from Christmas to the end of January it is full.",
        "The 2027 school holidays run from 10 to 26 April, 3 to 18 July and 25 September to 10 October, and Easter and the long weekends are busy too. If you are on the road between Christchurch and Queenstown, the Christchurch to Tekapo and Aoraki road trip and the Christchurch to Queenstown drive guide show where Tekapo fits.",
      ], ["Cold clear nights suit stargazing", "Christmas to January: book early", "School holidays: 10 to 26 April, 3 to 18 July, 25 September to 10 October 2027"]),
      s("Using KiwiCamping around Tekapo", [
        "KiwiCamping shows DOC campsites and huts, holiday parks with their facilities and bookable stays, and dump stations, with filters for campervan access. Save the Tekapo park and a Twizel fallback, add them to a trip with their dates, and read the distance between Christchurch, Tekapo and Queenstown.",
        "The trip shows a forecast at each stop, which matters here for frost and wind. Saved places, place details and guides are kept on the phone, while map tiles, routing, weather and photos need signal. Free to download, with in-app purchases.",
      ], ["Save a Twizel fallback", "Check frost and wind", "Saved places stay on the phone"], undefined, true),
    ],
    faq: [
      ["Can I camp at Lake Tekapo?", "At the lakefront holiday park, or at holiday parks and signed council sites further along the basin. Freedom camping is banned in Tekapo township."],
      ["Do I need to book camping at Tekapo?", "In summer and the school holidays, yes, and early. The village has few sites and many visitors."],
    ],
    sources: [
      { label: "Mackenzie District Council: Camping", url: "https://mackenzie.govt.nz/home/icon-redirects/row-1/camping" },
      { label: "Mackenzie Region: Holiday parks", url: "https://www.mackenzienz.com/explore/holiday-park/" },
      { label: "DOC: Lake Tekapo area", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/canterbury/places/lake-tekapo-area/" },
    ],
  }),

  a({
    slug: "camping-in-queenstown",
    title: "Camping in Queenstown: Holiday Parks, Lakeside DOC Campsites and Where to Base Yourself",
    description: "Where to camp around Queenstown: the holiday parks in town, Frankton, Arrowtown and Glenorchy, DOC's lakeside campsites at Twelve Mile Delta, Diamond Lake and Kinloch, and when to book.",
    category: "Camping guides",
    region: "Otago",
    places: ["Queenstown", "Frankton", "Arrowtown", "Glenorchy", "Kinloch", "Lake Wakatipu"],
    imageAlt: "Queenstown seen from Bob's Peak, with Lake Wakatipu and the Remarkables beyond the town",
    related: ["queenstown-glenorchy-camping", "christchurch-to-queenstown-drive-guide", "queenstown-to-milford-sound-drive-guide", "holiday-parks-new-zealand-guide", "doc-campsites-new-zealand-guide"],
    hubs: ["camping/otago", "freedom-camping/wakatipu"],
    intro:
      "Queenstown has more places to camp than most towns, but fewer free ones than people expect, because the council tightly limits freedom camping and the town is one of the most visited in the country. Holiday parks in town, at Frankton, Arrowtown and Glenorchy are the reliable answer, and DOC runs lakeside campsites along Lake Wakatipu for people who want the water and a basic night. Book early from December to March.",
    sections: [
      s("The choices in a busy town", [
        "Queenstown Lakes District Council allows freedom camping only at signed car parks for certified self-contained vehicles, with short stays and tight limits, and DOC's notices in the Wakatipu district ban camping at 21 of 29 places. Tents and vans without certification have to use a holiday park or a DOC campsite. With so many visitors, the plan for a summer night is to book rather than to look.",
        "The best base depends on what you want. In town you can walk to restaurants and the lakefront, at Frankton you are near the airport and shops, Arrowtown is quieter and has autumn colour, and Glenorchy at the head of the lake is the gateway to the Routeburn and Greenstone valleys. The Queenstown and Glenorchy camping guide covers the northern end in detail.",
      ], ["Freedom camping is tightly limited", "Book rather than look", "Choose a base by what you want to do"]),
      s("Holiday parks around Queenstown", [
        "Queenstown Lakeview Holiday Park, now part of Hampshire Holiday Parks, is the most central of the holiday parks, on the hill above the town. Driftaway Queenstown is on the lake at Frankton, a short drive from the airport and the town centre, and Arrowtown has holiday parks of its own with powered and unpowered sites in a tree-lined setting. Glenorchy Holiday Park, at the head of the lake, offers powered and unpowered sites, a kitchen, showers, laundry and a dump station.",
        "All of them fill from December to the end of February and at Easter, and Queenstown books out for events and the ski season. The guide to holiday parks in New Zealand explains how site types, power and booking work.",
      ], ["Lakeview: closest to the centre", "Driftaway: on the lake at Frankton", "Glenorchy: gateway to the tracks"]),
      s("DOC campsites by the lake", [
        "DOC runs lakeside campsites along Lake Wakatipu. Twelve Mile Delta, just outside Queenstown on the road to Glenorchy, is the largest in Otago with room for 100 and is a basic campsite with toilets and no power. Diamond Lake near Glenorchy is for campervans and caravans, and Kinloch at the head of the lake is a quieter lakeshore site that needs booking in season.",
        "KiwiCamping's DOC data (11 August 2026) lists 30 DOC campsites in Otago, 8 of them free and 16 bookable online through DOC, with adult nightly rates listed from $5 to $42 and 17 with campervan access. The guide to DOC campsites explains how booking works, and 11 of the 30 are reached only on foot or by boat, so check access before you drive.",
      ], ["Twelve Mile Delta: 100 sites", "Diamond Lake: campervans", "Kinloch: book in season"]),
      s("When to book", [
        "Queenstown is busy all year, with the peak from Christmas to the end of February and the ski season from June to September. Book a holiday park weeks ahead for summer and months ahead for Christmas and New Year. School holidays in 2027 run from 10 to 26 April, 3 to 18 July and 25 September to 10 October.",
        "A night in Queenstown often fits into the road from Christchurch, covered in the Christchurch to Queenstown drive guide, or the day trip to Milford Sound, covered in the Queenstown to Milford Sound drive guide. In winter, snow and frost matter for campervans, and the guide to winter camping explains what to carry.",
      ], ["Peak: Christmas to February, and ski season", "Book months ahead for New Year", "Winter needs frost-ready kit"]),
      s("Using KiwiCamping around Queenstown", [
        "KiwiCamping shows DOC campsites and huts, holiday parks with their facilities and bookable stays, and dump stations, with filters for campervan access. Save a holiday park and a DOC campsite for each night, and order them in a trip with dates and notes.",
        "The trip adds up the distance between legs and shows a forecast at each stop. Saved places, place details and guides are kept on the phone, while map tiles, routing, weather and photos need signal. Free to download, with in-app purchases.",
      ], ["Save a holiday park and a DOC campsite", "Check the forecast for each leg", "Saved places stay on the phone"], undefined, true),
    ],
    faq: [
      ["Where can I camp near Queenstown?", "At the holiday parks in town, Frankton, Arrowtown and Glenorchy, or at DOC's lakeside campsites such as Twelve Mile Delta, Diamond Lake and Kinloch. Freedom camping is limited to signed car parks for certified self-contained vehicles."],
      ["Do I need to book camping in Queenstown?", "From December to March, yes. Holiday parks fill weeks ahead and Christmas weeks ahead of that."],
    ],
    sources: [
      { label: "Hampshire Holiday Parks: Queenstown Lakeview", url: "https://www.hampshireholidayparks.co.nz/" },
      { label: "Queenstown Lakes District Council: Responsible camping", url: "https://www.qldc.govt.nz/responsible-camping" },
      { label: "DOC: campsites", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/" },
    ],
  }),
];
