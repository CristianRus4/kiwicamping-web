import { makeArticle as a, type Article, type ArticleSection, type ArticleTable } from "@/lib/article-model";

const s = (heading: string, body: string[], tips?: string[], table?: ArticleTable, cta?: boolean): ArticleSection => ({ heading, body, tips, ...(table && { table }), ...(cta && { cta }) });

/**
 * Freedom camping by island and by destination: the South Island, the North Island, Taupō, the West
 * Coast and Wānaka. They summarise the council guides in lib/content/freedom-councils.ts (facts in
 * docs/growth/freedom-council/, read 21 October 2026) and link to them, and add the councils those
 * guides do not cover from the councils' own pages, read on 9 November 2026. DOC counts are from
 * KiwiCamping's DOC data in lib/data/hubs.json.
 */
export const freedomRegionArticles: Article[] = [
  a({
    slug: "freedom-camping-south-island",
    title: "Freedom Camping in the South Island 2026: The Rules Council by Council",
    description: "Where freedom camping is legal on the South Island in 2026: each council's rules from Marlborough to Southland, what a tent or an uncertified van can still do, DOC land, fines and the summer pinch points.",
    category: "Rules & safety",
    region: "South Island",
    places: ["Picton", "Nelson", "Westport", "Hokitika", "Christchurch", "Tekapo", "Wānaka", "Queenstown", "Dunedin", "Te Anau"],
    imageAlt: "Mount Cook Road climbing above Lake Pukaki with Aoraki Mount Cook and the Southern Alps ahead",
    related: ["freedom-camping-rules-new-zealand", "freedom-camping-north-island", "self-contained-campervan-green-warrant", "south-island-two-week-road-trip", "freedom-camping-west-coast", "freedom-camping-wanaka"],
    hubs: ["freedom-camping"],
    intro:
      "Yes, you can still freedom camp on the South Island, but almost everywhere it now takes a certified self-contained vehicle with a green warrant, and each district council sets its own sites, nights and hours. Queenstown Lakes allows it at 15 car parks, Christchurch at two signposted areas, while Buller and Waitaki allow it on most council land outside their listed bans. A tent or a van without a toilet has a short list of council sites and a much longer list of DOC campsites and holiday parks.",
    sections: [
      s("Three landlords, three sets of rules", [
        "Whether a free night is legal depends on who owns the ground under your wheels. Council land runs under the district council's bylaw, conservation land runs under DOC's notices, and land held by NZTA or Land Information New Zealand has its own restrictions. The Freedom Camping Act 2011 sits over all of it, and private land needs the owner's yes.",
        "The national change that matters most happened on 7 June 2026, when blue warrants stopped counting. Only a green warrant, which needs a toilet fixed inside the vehicle, now makes a vehicle self-contained for freedom camping. A station wagon with a portable loo is treated as uncertified, and on council land it can only stay where a bylaw names a site for vehicles without certification.",
      ], ["Council, DOC and other agencies each set rules", "Only green warrants count since 7 June 2026", "The sign on the site wins"]),
      s("Top of the South: Marlborough, Nelson and Tasman", [
        "Marlborough lists 11 council places for certified self-contained vehicles, with stays of one or two nights and nothing in Picton itself, so plan the night before or after the Cook Strait ferry around Renwick, Blenheim or a holiday park. The one exception to certification is for cyclists on the Awatere Valley Road, who may pitch a tent at Blairich Reserve.",
        "Tasman's Responsible Camping Bylaw 2025 bans tents on public land and allows freedom camping only in designated spaces. Three sites at Motueka, Ngātīmoti and Richmond take vehicles without a certificate, and the rest are for certified vehicles. Around the Abel Tasman and Golden Bay, DOC's campgrounds and the Great Walk sites are booked through DOC, not the council.",
      ], ["Marlborough: 11 places, no Picton site", "Tasman: no tents on public land", "Book Abel Tasman sites through DOC"]),
      s("The West Coast", [
        "The coast is three councils with three approaches. Buller lets certified vehicles camp on council land outside a list of no-camping zones that covers stretches around Karamea, Westport, Charleston and Punakaiki. Grey approved an updated bylaw on 28 September 2026 that raises the limit to three nights in any four weeks, and Westland directs certified vehicles to three community-run sites at Kumara, Rimu and Paringa, with a donation asked.",
        "Glacier country is the tight spot: the Westland draft bylaw prohibits camping in Fox Glacier township and Franz Josef has only a heliport car park area, so a holiday park or a DOC campsite is the safer plan in January. Our West Coast freedom camping guide goes town by town from Karamea to Haast.",
      ], ["Buller: council land outside listed zones", "Grey: three nights in four weeks", "Book Franz Josef and Fox in summer"]),
      s("Canterbury, the Mackenzie and Waitaki", [
        "Christchurch City Council allows certified vehicles at two signposted areas, Naval Point in Lyttelton and the northern end of Akaroa, for two nights in any 30 days; most other council land in the city and on Banks Peninsula is prohibited or restricted. North of the city, Kaikōura and Hurunui set their own rules, so check those councils' pages before a night at Hanmer Springs or on the coast road.",
        "In the Mackenzie, Tekapo township, the centre of Twizel and the Lake Ruataniwha lagoon shore are off limits, and four sites close from 23 December to 11 January 2027. DOC's Twizel area adds four restricted camping areas such as Quailburn. Waitaki, by contrast, gives certified vehicles a general permission on council land for three nights in four weeks, outside dozens of prohibited spots in Oamaru, Moeraki and the lakes villages.",
      ], ["Christchurch: Naval Point and Akaroa only", "Mackenzie closes four sites over the holidays", "Waitaki: three nights in four weeks"]),
      s("Otago, Wānaka and Queenstown", [
        "Queenstown Lakes is the strictest district on the island. Its Freedom Camping Bylaw 2025 allows certified vehicles at 15 designated car parks, between 6pm and 8am, for two nights in any 30 days, and bans freedom camping in urban areas. Kingston Road has 50 spaces, while most other car parks hold a handful, and a decision on changes to the bylaw is due on 17 December 2026. The Wānaka guide covers the lake end of the district.",
        "Dunedin is looser: certified vehicles may stay on most gravelled or sealed council parking areas for up to two consecutive nights, and three council sites take vehicles without certification, with tents only at Warrington Domain. Central Otago and Clutha set their own lists, and the Catlins coast is mostly DOC and holiday park country.",
      ], ["Queenstown Lakes: 15 car parks", "Dunedin: two nights on most council parking", "Tents in Dunedin only at Warrington"]),
      s("Southland and Fiordland", [
        "Southland District Council gives certified vehicles designated sites in small towns such as Winton, Riversdale and Dipton, and a few sites such as Dunsdale and Thornbury accept vehicles without certification. Te Anau, Manapouri, Riverton and Tuatapere have no council site, and urban zones are prohibited across the district.",
        "On the Milford Road the land is national park, and DOC has prohibited camping along it outside its campsites. The Te Anau district carries 24 DOC prohibition notices in KiwiCamping's data. The way through is DOC's Milford Road campsites such as Cascade Creek, which holds 120 sites, or a holiday park in Te Anau, with sandflies the price of either.",
      ], ["No council site in Te Anau", "Milford Road: DOC campsites only", "Cascade Creek is the largest"]),
      s("Without a certified vehicle", [
        "A tent, a car or an uncertified van is not shut out of the South Island, it just needs a booked or paid pitch most nights. KiwiCamping's DOC data lists 165 DOC campsites across the South Island regions, from free basic sites with a long-drop to serviced grounds with showers, and many of them welcome tents and cars. Holiday parks cover the towns.",
        "Council sites for vehicles without certification exist but are scattered: three in Tasman, three in Dunedin, a handful in Southland. Note them as a bonus rather than the plan. The table below sums up each council's position as its own page or bylaw gives it.",
      ], ["DOC campsites take tents and cars", "Holiday parks in every town", "Council sites for uncertified vehicles are few"], {
        caption: "Council land only, from each council's page or bylaw as read for our council guides in October 2026 and Grey's bylaw page in November 2026. DOC land follows DOC's notices.",
        head: ["Council", "Certified self-contained", "Without certification"],
        rows: [
          ["Marlborough", "11 listed places, one or two nights", "Cyclists' tents at Blairich Reserve only"],
          ["Tasman", "Designated spaces", "Motueka, Ngātīmoti and Richmond; no tents"],
          ["Buller", "Council land outside no-camping zones", "Campgrounds"],
          ["Grey", "Council land outside prohibited areas, three nights in four weeks", "Under review by the council"],
          ["Westland", "Three community-run sites", "Commercial campgrounds"],
          ["Christchurch", "Naval Point and northern Akaroa, two nights in 30 days", "Camping grounds"],
          ["Mackenzie", "Restricted sites, three consecutive nights", "Campgrounds"],
          ["Waitaki", "Council land outside prohibited places, three nights in four weeks", "Fee-paying campgrounds"],
          ["Dunedin", "Most council parking, two consecutive nights", "Three sites; tents at Warrington only"],
          ["Queenstown Lakes", "15 car parks, two nights in 30 days", "Campgrounds"],
          ["Southland", "Designated small-town sites", "A few sites such as Dunsdale and Thornbury"],
        ],
      }),
      s("Fines and enforcement", [
        "Every council on the island charges the national infringement fees. Camping where a bylaw prohibits or restricts it, or in an uncertified vehicle where certification is required, is $400. A warrant card not on show is $200, refusing to leave when an officer asks is $600, and dumping waste or damaging the site is $800.",
        "Rentals get the notice first and pass it on with an admin fee, and officers check the plate against the national register of certified vehicles. Queenstown, Wānaka, Tekapo and the glacier towns are patrolled hardest in summer.",
      ], ["$400 for most breaches", "$800 for waste or damage", "Rental companies pass fines on"]),
      s("Planning South Island nights with KiwiCamping", [
        "KiwiCamping maps freedom camping areas next to DOC campsites, huts, holiday parks and dump stations across the South Island, and its filters cut the map to what your vehicle and budget allow. Council rules move faster than any dataset, so read the sign on the night and the council's page before a long drive.",
        "Save the free spots you like into collections, then build the trip with a date on each stop and a paid fallback beside the nights that depend on a small car park. The planner shows the distance and drive for each leg and the forecast for each place. Free to download, with in-app purchases.",
      ], ["Filter the map to your vehicle", "Save a paid fallback per night", "Check the council page before you go"], undefined, true),
    ],
    sources: [
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
      { label: "Freedom Camping Act 2011", url: "https://www.legislation.govt.nz/act/public/2011/0061/latest/whole.html" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "Marlborough District Council: freedom camping", url: "https://www.marlborough.govt.nz/recreation/responsible-camping/camping-in-marlborough" },
      { label: "Buller District Council: freedom camping", url: "https://bullerdc.govt.nz/recreation/freedom-camping/" },
      { label: "Grey District Council: bylaw consultation", url: "https://haveyoursay.greydc.govt.nz/regulation" },
      { label: "Westland District Council: campgrounds and responsible camping", url: "https://www.westlanddc.govt.nz/recreation/campgrounds-and-responsible-camping/" },
      { label: "Queenstown Lakes District Council: responsible camping", url: "https://www.qldc.govt.nz/responsible-camping" },
    ],
  }),
];
