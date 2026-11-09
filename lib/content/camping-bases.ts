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

  a({
    slug: "camping-in-auckland",
    title: "Camping in Auckland: Holiday Parks, Regional Park Campgrounds and Island Campsites",
    description: "Where to camp in and around Auckland: the North Shore and Hibiscus Coast holiday parks, Auckland Council's regional park campgrounds, DOC's island campsites on Great Barrier and Motutapu, and when to book.",
    category: "Camping guides",
    region: "Auckland",
    places: ["Auckland", "Takapuna", "Orewa", "Whangaparaoa", "Great Barrier Island", "Motutapu Island"],
    imageAlt: "Auckland's skyline seen across the water from Devonport",
    related: ["freedom-camping-north-island", "auckland-to-bay-of-islands-drive-guide", "auckland-to-wellington-drive-guide", "holiday-parks-new-zealand-guide", "campervan-hire-cost-new-zealand-2026"],
    hubs: ["camping/auckland", "freedom-camping/tamaki-makaurau-auckland-mainland"],
    intro:
      "Auckland is where most visitors start and finish a New Zealand trip, and camping in the city means holiday parks on the North Shore and the northern coast, Auckland Council's regional park campgrounds, and DOC's campsites on the islands of the Hauraki Gulf. Freedom camping in the city is tightly limited, so a first or last night is best booked in advance, especially around a flight.",
    sections: [
      s("What the city allows", [
        "Auckland Council limits freedom camping to certified self-contained vehicles at signed sites, with short stays and a long list of prohibited areas, and DOC's mainland notices around Auckland ban camping at all four places they cover, including Woodhill Forest's Papakanui Spit. For a visitor with a tent or a vehicle without certification, the answer is a holiday park or a council campground.",
        "The practical pattern for a visiting camper is to sleep outside the centre. Most parks are on the North Shore, the Hibiscus Coast north of the harbour bridge, or to the south and west, each 15 to 40 minutes from the airport or city, depending on traffic. The guide to freedom camping in the North Island covers how the council's rules compare with the rest of the island.",
      ], ["Freedom camping is tightly limited", "DOC bans camping at all four mainland notices", "Sleep outside the centre"]),
      s("Holiday parks near the city", [
        "Takapuna Beach Holiday Park is on the beachfront facing Rangitoto Island, about 10 km from the centre, with powered and unpowered sites and cabins, and is the closest to the city of the usual choices. Auckland North Shore Motels and Holiday Park in Northcote is a plainer park handy for campervans. Further north, Orewa Beach Holiday Park sits on the Hibiscus Coast, on the way to Northland.",
        "The parks fill from December to February, at Easter and on long weekends, and rental campervan pick-up days can make the nights around a flight busy. The guide to holiday parks in New Zealand explains site types and booking.",
      ], ["Takapuna: beachfront, near the city", "Orewa: on the way north", "Book for the night before a flight"]),
      s("Regional park campgrounds", [
        "Auckland Council runs campgrounds in its regional parks, which are cheaper and quieter than holiday parks and have fewer facilities. Te Haruhi Bay Campground is in Shakespear Regional Park at the end of the Whangaparaoa Peninsula behind a white sand beach, Tawharanui Regional Park has a campground behind the dunes in a protected sanctuary, and Ambury Regional Park on the Manukau Harbour is a popular family campground close to the airport.",
        "These are booked through Auckland Council, usually well ahead for summer weekends, and some have rules about dogs and fires because of the wildlife. Check the park's page for the current rules, and plan to bring water and take out your rubbish.",
      ], ["Shakespear: Te Haruhi Bay", "Tawharanui: wildlife sanctuary rules", "Ambury: near the airport"]),
      s("DOC campsites in the Hauraki Gulf", [
        "DOC's Auckland campsites are on the islands. KiwiCamping's DOC data (11 August 2026) lists 9 DOC campsites in the Auckland region, 6 of them on Great Barrier Island (Aotea), with Home Bay on Motutapu Island the largest at 131 sites. 8 of the 9 charge a fee with adult nightly rates listed from $10 to $18, 8 are bookable online through DOC, and 4 are reached only on foot or by boat.",
        "Getting there takes a ferry or a flight, so an island campsite is a trip in its own right, not a night before a flight home. Pack in water and food, take out all rubbish, and check the ferry times and the forecast before you commit.",
      ], ["9 DOC campsites, 6 on Great Barrier", "Home Bay: 131 sites", "Ferry or flight to reach them"]),
      s("Using KiwiCamping around Auckland", [
        "KiwiCamping shows DOC campsites and huts, holiday parks with their facilities and bookable stays, and dump stations, with filters for campervan access. Save a first-night park and a last-night park near the airport, add them to a trip with dates, and read the distance to the first leg north or south.",
        "The trip shows a forecast at each stop. Saved places, place details and guides are kept on the phone, while map tiles, routing, weather and photos need signal. Free to download, with in-app purchases.",
      ], ["Save the first and last night", "Check the forecast for the ferry", "Saved places stay on the phone"], undefined, true),
    ],
    faq: [
      ["Where can I camp near Auckland?", "At holiday parks on the North Shore and the Hibiscus Coast, at Auckland Council's regional park campgrounds such as Te Haruhi Bay, Tawharanui and Ambury, or at DOC's island campsites in the Hauraki Gulf."],
      ["Can I freedom camp in Auckland?", "Only at signed sites in a certified self-contained vehicle, for short stays, with most of the city prohibited. A holiday park is the simple answer for a first or last night."],
    ],
    sources: [
      { label: "Auckland Council: Camping", url: "https://www.aucklandcouncil.govt.nz/parks-recreation/Pages/camping.aspx" },
      { label: "Auckland Council: Freedom camping", url: "https://www.aucklandcouncil.govt.nz/en/parks-recreation/freedom-camping-auckland.html" },
      { label: "DOC: campsites", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/" },
    ],
  }),

  a({
    slug: "camping-in-wellington",
    title: "Camping in Wellington: Holiday Parks, Regional Park Campgrounds and the Ferry Nights",
    description: "Where to camp around Wellington: the Hutt Valley, Porirua and Kāpiti holiday parks, Kaitoke Regional Park, DOC's Catchpool Valley campsite and how to plan the night before or after the Cook Strait ferry.",
    category: "Camping guides",
    region: "Wellington",
    places: ["Wellington", "Lower Hutt", "Upper Hutt", "Porirua", "Paekākāriki", "Catchpool Valley"],
    imageAlt: "Wellington Harbour with the city and its hills around the water",
    related: ["cook-strait-ferry-campervan-guide", "auckland-to-wellington-drive-guide", "wellington-to-napier-drive-guide", "holiday-parks-new-zealand-guide", "freedom-camping-north-island"],
    hubs: ["camping/wellington-kapiti", "freedom-camping/wellington"],
    intro:
      "Wellington has no campground in the city itself, so camping here means holiday parks in the Hutt Valley, Porirua and Kāpiti, a regional park campground at Kaitoke, and one DOC campsite at Catchpool Valley in the Remutaka Forest Park. Most visitors sleep one night here, either before or after the Cook Strait ferry, so the plan is to book a park within an hour of the terminal and to leave early for the crossing.",
    sections: [
      s("The ferry nights", [
        "Wellington is the North Island end of the Cook Strait ferry, and the nights before and after a crossing are where most campers need a bed. Ferry check-in times and sailing schedules shape the night, so pick a park that lets you leave in time, and read the guide to the Cook Strait ferry for what to expect at the terminal. Early and late sailings often mean a night within 30 minutes of the port.",
        "Freedom camping in Lower Hutt and the city is not allowed or tightly restricted, and DOC's three notices in the district all ban camping, so do not plan on parking by the waterfront. A holiday park is the simple answer, and the guide to freedom camping in the North Island explains how the other councils compare.",
      ], ["Pick a park near the terminal", "Check-in times shape the night", "No camping on the waterfront"]),
      s("Holiday parks around the city", [
        "Wellington TOP 10 Holiday Park is at Hutt Park Road in Lower Hutt, about 15 km from the centre, with powered and unpowered sites and cabins. Kiwi Holiday Park in Upper Hutt sits on bush and farmland, Aotea Lodge is in Porirua, and Paekākāriki Holiday Park is on the Kāpiti Coast, each with sites for campervans. They are between 20 minutes and an hour from the ferry, so choose by direction of travel.",
        "They book out in summer, on long weekends and over the school holidays, which in 2027 run from 10 to 26 April, 3 to 18 July and 25 September to 10 October. The guide to holiday parks in New Zealand explains site types and booking.",
      ], ["Lower Hutt: 15 km from the centre", "Upper Hutt, Porirua and Paekākāriki", "Book for long weekends"]),
      s("Regional parks and DOC", [
        "Kaitoke Regional Park near Upper Hutt, about 45 minutes from the city, has a campground in a forested valley, run by Greater Wellington. DOC's Catchpool Valley Campsite in the Remutaka Forest Park, entered from Coast Road south of Wainuiomata, has a kitchen and showers and is a good base for the Ōrongorongo Valley walks, but it is closed in winter, from May to Labour weekend.",
        "KiwiCamping's DOC data (11 August 2026) lists 3 DOC campsites in Wellington and Kāpiti, with Catchpool Valley the largest at 76 sites and an adult nightly rate listed at $10. The region also has 24 DOC huts, so it suits a walking weekend as much as a ferry night.",
      ], ["Kaitoke: regional park campground", "Catchpool Valley: closed May to Labour weekend", "24 DOC huts in the region"]),
      s("When to book", [
        "Wellington's camping is busiest in summer, on the long weekends of Waitangi Day, Easter and Labour Day, and around the ferry's peak days, when the parks fill with campervans heading to and from the South Island. Matariki on Friday 25 June 2027 also makes a long weekend. The Auckland to Wellington drive guide covers the road in from the north, and the Wellington to Napier drive guide covers the road up the east coast.",
        "Wind is the thing Wellington is known for, so check the forecast and secure awnings and loose gear, and allow for delayed crossings in a southerly or a northerly gale.",
      ], ["Long weekends fill the parks", "Matariki: Friday 25 June 2027", "Check the wind and the ferry status"]),
      s("Using KiwiCamping around Wellington", [
        "KiwiCamping shows DOC campsites and huts, holiday parks with their facilities and bookable stays, and dump stations, with filters for campervan access. Save a park near the terminal for the night before the ferry and another on the far side, add them to a trip with dates, and read the distance either side.",
        "The trip shows a forecast at each stop. Saved places, place details and guides are kept on the phone, while map tiles, routing, weather and photos need signal. Free to download, with in-app purchases.",
      ], ["Save a park on each side of the strait", "Check the forecast for wind", "Saved places stay on the phone"], undefined, true),
    ],
    faq: [
      ["Where can I camp near Wellington?", "At holiday parks in Lower Hutt, Upper Hutt, Porirua and Paekākāriki, at Kaitoke Regional Park, or at DOC's Catchpool Valley campsite, which closes from May to Labour weekend."],
      ["Where should I stay the night before the Wellington ferry?", "A holiday park within 30 to 60 minutes of the terminal, booked ahead. Freedom camping on the waterfront is not allowed."],
    ],
    sources: [
      { label: "Wellington TOP 10 Holiday Park", url: "https://top10.co.nz/park/wellington-top-10-holiday-park" },
      { label: "Hutt City Council: Camping rules", url: "https://huttcity.govt.nz/environment-and-sustainability/rivers-and-beaches/camping-rules" },
      { label: "DOC: Catchpool Valley campsite", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/wellington-kapiti/places/remutaka-forest-park/things-to-do/campsites/catchpool-valley-campsite" },
      { label: "DOC: campsites", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/" },
    ],
  }),

  a({
    slug: "camping-in-christchurch",
    title: "Camping in Christchurch: Holiday Parks, Council Campgrounds and Where to Base Yourself",
    description: "Where to camp in and around Christchurch: the city holiday parks, Christchurch City Council's campgrounds on the coast and Banks Peninsula, the freedom camping areas, DOC campsites inland and when to book.",
    category: "Camping guides",
    region: "Canterbury",
    places: ["Christchurch", "Papanui", "Riccarton", "Lyttelton", "Akaroa", "Spencer Park"],
    imageAlt: "The Avon River flowing through the Christchurch Botanic Gardens",
    related: ["freedom-camping-akaroa", "banks-peninsula-camping-weekend", "christchurch-to-queenstown-drive-guide", "arthurs-pass-camping-route", "holiday-parks-new-zealand-guide"],
    hubs: ["camping/canterbury", "freedom-camping/mahaanui"],
    intro:
      "Christchurch is the South Island's main arrival point, and it has holiday parks inside the city, council-run campgrounds on the coast and Banks Peninsula, and DOC campsites inland in the Southern Alps. A first night after a flight is easy to book, while the signposted freedom camping areas are small and limited to certified self-contained vehicles. Book early for summer and for the days around rental pick-ups.",
    sections: [
      s("Start of the trip, end of the trip", [
        "Most visitors fly into Christchurch, collect a campervan and leave the next morning, or return it at the end of a trip, so the nights either side of a hire matter more than a long stay. Christchurch City Council allows freedom camping only in a couple of signposted areas, for certified self-contained vehicles, and bans it in most of the city and Banks Peninsula, as the guide to freedom camping in Akaroa describes for the peninsula. That makes the holiday park the sensible first and last night.",
        "Holiday parks cluster in the north and west of the city, close to the airport and the rental depots, and the council's own campgrounds sit on the coast and on the peninsula. Pick by what comes next: the road to Kaikōura and Picton leaves north, the road to Tekapo and Queenstown leaves south and west.",
      ], ["First and last nights: book a park", "Freedom camping is limited", "Pick by the road you take next"]),
      s("Holiday parks in the city", [
        "Christchurch TOP 10 Holiday Park, formerly Meadow Park, is on Meadow Street in Papanui in the north of the city, with powered and unpowered sites and cabins and an easy run to the airport and the northern highway. Amber Kiwi Holiday Park is a small inner-city park on Blenheim Road in Riccarton, with campervan, caravan and tent sites and motel units, close to shops and the university.",
        "Both fill around the school holidays and in summer, and the nights before and after a hire fill first. The guide to holiday parks in New Zealand explains site types, power and booking.",
      ], ["Papanui: north, near the airport", "Riccarton: inner city, near shops", "Book the nights around a hire"]),
      s("Council campgrounds and the peninsula", [
        "Christchurch City Council runs a small network of campgrounds, including Spencer Beach TOP 10 Holiday Park on the northern coast, which suit a quieter night near the sea. On Banks Peninsula, Akaroa TOP 10 Holiday Park sits about a 15 minute walk from the village, with cabins and a heated pool, and is the answer to the township's strict camping rules. The Banks Peninsula camping weekend guide covers the loop.",
        "These campgrounds book out on summer weekends, so reserve early, and check the park's page for the current rules on dogs, fires and quiet hours.",
      ], ["Spencer Beach: northern coast", "Akaroa: a walk from the village", "Reserve for summer weekends"]),
      s("DOC campsites inland", [
        "DOC's campsites are in the mountains and high country, not in the city. KiwiCamping's DOC data (11 August 2026) lists 22 DOC campsites in Canterbury, 6 of them free and 14 bookable online through DOC, with adult nightly rates from $10 to $23. Peel Forest Campground is the largest at 81, and the biggest clusters are in Arthur's Pass, Lake Sumner and the Craigieburn ranges, which the Arthur's Pass camping route covers.",
        "DOC's freedom camping notices for the Christchurch and Banks Peninsula area ban camping at Godley Head and Ripapa Island, so look inland for a DOC night. The guide to DOC campsites explains how booking works, and 18 of the 22 have campervan access.",
      ], ["22 DOC campsites in Canterbury", "Arthur's Pass is the nearest cluster", "18 have campervan access"]),
      s("Using KiwiCamping around Christchurch", [
        "KiwiCamping shows DOC campsites and huts, holiday parks with their facilities and bookable stays, and dump stations, with filters for campervan access. Save the first and last night's parks, add them to a trip with dates, and read the distance to the first leg, whether that is Kaikōura, Tekapo or Arthur's Pass.",
        "The trip shows a forecast at each stop. Saved places, place details and guides are kept on the phone, while map tiles, routing, weather and photos need signal. Free to download, with in-app purchases.",
      ], ["Save the first and last night", "Check the forecast for Arthur's Pass", "Saved places stay on the phone"], undefined, true),
    ],
    faq: [
      ["Where can I camp in Christchurch?", "At holiday parks such as Christchurch TOP 10 in Papanui and Amber Kiwi in Riccarton, at the council's coastal campgrounds, or at DOC campsites inland. Freedom camping is limited to a couple of signposted areas for certified self-contained vehicles."],
      ["Where should I stay the night I pick up a campervan in Christchurch?", "A holiday park in the north or west of the city, booked ahead, so you can load up and leave early for the road north or south."],
    ],
    sources: [
      { label: "Christchurch TOP 10 Holiday Park", url: "https://top10.co.nz/park/christchurch/" },
      { label: "Christchurch City Council: Camping and campervans", url: "https://ccc.govt.nz/rec-and-sport/camping" },
      { label: "DOC: campsites", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/" },
    ],
  }),

  a({
    slug: "family-holiday-parks-new-zealand",
    title: "Family Holiday Parks in New Zealand: What to Look For and Where to Go",
    description: "How to choose a family holiday park in New Zealand: playgrounds, pools, jumping pillows, kitchens and cabins, examples from Taupō to Christchurch, when to book and how DOC campsites work with children.",
    category: "Camping guides",
    region: "New Zealand",
    places: ["Taupō", "Napier", "Auckland", "Christchurch", "Kaikōura", "Kaiteriteri"],
    imageAlt: "Kaiteriteri Beach in the Tasman region, with golden sand and calm water",
    related: ["holiday-parks-new-zealand-guide", "easy-doc-huts-families-first-timers", "christmas-summer-camping-new-zealand-2026-27", "school-public-holidays-new-zealand-2027", "camping-in-taupo"],
    hubs: ["camping"],
    intro:
      "A good family holiday park in New Zealand has a playground, a pool or a beach nearby, a kitchen you can cook in, and cabins for the night it rains. Most of the larger parks, from Taupō to Christchurch, have some mix of those, and the better ones add jumping pillows, games rooms and hot pools. The hard part is not finding one but booking it, because the best ones fill months ahead in the school holidays.",
    sections: [
      s("What a family park needs", [
        "Start with the things you cannot do without. A playground and a space for children to run are the baseline, and a pool or a safe beach takes the strain out of a hot afternoon. A kitchen, a laundry and hot showers matter more with children than with adults, because sleeping bags get wet and meals get messy. If you are travelling with a baby or a toddler, ask about a bath or a kitchen with a high chair.",
        "Then think about sleeping. Cabins let you swap a tent for a bed on a wet or cold night, and they are the best insurance for a trip with children in autumn or winter. A powered site gives a campervan a heater and a kettle. A park's own rules matter too, so check quiet hours, whether dogs are allowed and whether the pool has fences and supervision rules.",
      ], ["Playground, pool, kitchen, laundry", "Cabins for wet nights", "Check quiet hours and pool rules"]),
      s("Parks known for family facilities", [
        "Several parks are known for what they offer children. DeBretts Spa Resort and the TOP 10 park in Taupō have playgrounds, a jumping pillow and hot pools, Kennedy Park Resort in Napier has a heated pool, pedal cars and an adventure playground, and Takapuna Beach Holiday Park in Auckland has playgrounds, a jumping pillow and a games room. Kaikōura TOP 10 has a pool and hot tub, and Akaroa TOP 10 has a heated pool.",
        "Paekākāriki Holiday Park on the Kāpiti Coast has a playground, trampolines and a stream, and Fitzroy Beach Holiday Park in New Plymouth has a jumping pillow and playground with a children's pool nearby in summer. Facilities change, so check the park's own page before you book, and use the town guides for Taupō, Kaikōura, Auckland and Christchurch for the surroundings.",
      ], ["Taupō: jumping pillow and hot pools", "Napier: heated pool and adventure playground", "Check facilities before you book"]),
      s("Beach parks and lake parks", [
        "Beside the water is where families want to be in summer. The beach parks of the Coromandel, the Bay of Plenty and the Abel Tasman coast, such as Kaiteriteri, fill with families from Christmas, and the lake parks at Taupō and in the Mackenzie and Central Otago have swimming and boats. Rivers and surf need adult supervision, and a sunny beach can still have a rip, so check where the patrolled area is.",
        "For wet weather, a park with a games room, indoor pool or kitchen lounge is worth the extra cost. A wet afternoon is the usual reason a trip with children goes wrong, so plan for one, and read the guide to holiday parks in New Zealand for site types, power and booking.",
      ], ["Swim only where there is supervision", "Check for patrolled beaches", "Games room for wet days"]),
      s("When to book", [
        "The 2027 school holidays run from 10 to 26 April, 3 to 18 July and 25 September to 10 October, and the summer break runs through December and January. The best family parks fill for Christmas and New Year months ahead, and for Easter and the July holidays weeks ahead. Midweek outside the school holidays is far easier.",
        "If you cannot get a family park, look at the next town along, since many families stay in one park and drive to the attractions. The guide to Christmas and summer camping and the school and public holidays guide show how the calendar shapes demand.",
      ], ["Christmas and New Year: book months ahead", "School holidays: 10 to 26 April, 3 to 18 July, 25 September to 10 October 2027", "Midweek is easier"]),
      s("DOC campsites with children", [
        "DOC campsites are basic, with toilets and sometimes a water tap, and they suit families who like space and quiet. DOC's fees for children are lower than adult rates, with children under 5 free at the sites that charge. KiwiCamping's DOC data (11 August 2026) lists 287 DOC campsites nationally with adult nightly rates listed from $5 to $25 and 177 bookable online through DOC.",
        "For a first night with children, a holiday park is easier. For a second or third, a DOC campsite by a river or beach is a good change, as long as you bring water, a toilet plan and a way to keep the children away from the water's edge. The easy DOC huts guide covers a gentler step into huts.",
      ], ["Under 5s are free at DOC sites that charge", "Bring water and a toilet plan", "Start with a park, then try DOC"]),
      s("Using KiwiCamping with a family", [
        "KiwiCamping shows DOC campsites and huts, holiday parks with their facilities and bookable stays, and dump stations, with filters for campervan access. Save a holiday park for each night, add a backup for the night you are not sure of, and order them in a trip with dates and notes.",
        "The trip adds up the distance between legs, so you can see how many hours the children will be in the back, and shows a forecast at each stop. Saved places, place details and guides are kept on the phone, while map tiles, routing, weather and photos need signal. Free to download, with in-app purchases.",
      ], ["Keep legs short with children", "Add a backup for each night", "Saved places stay on the phone"], undefined, true),
    ],
    faq: [
      ["What makes a holiday park good for families?", "A playground, a pool or safe beach, a kitchen and laundry, hot showers and cabins for wet nights. Jumping pillows, hot pools and games rooms are bonuses."],
      ["When should I book a family holiday park in New Zealand?", "Months ahead for Christmas and New Year, weeks ahead for Easter and the other school holidays, and a few days ahead midweek outside them."],
    ],
    sources: [
      { label: "Top 10 Holiday Parks", url: "https://top10.co.nz/" },
      { label: "Ministry of Education: Term dates", url: "https://www.education.govt.nz/school/running-a-school/school-terms-and-holidays/term-dates" },
      { label: "DOC: campsites", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/" },
    ],
  }),
];
