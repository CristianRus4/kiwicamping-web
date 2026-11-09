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
];
