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
  a({
    slug: "freedom-camping-north-island",
    title: "Freedom Camping in the North Island 2026: Where It Is Legal, Region by Region",
    description: "The North Island's freedom camping rules in 2026, from Northland to Wellington: each council's sites and night limits, the few places a tent or an uncertified van can stay, DOC land, fines and summer hot spots.",
    category: "Rules & safety",
    region: "North Island",
    places: ["Kaitāia", "Whangārei", "Auckland", "Coromandel", "Tauranga", "Rotorua", "Taupō", "New Plymouth", "Napier", "Wellington"],
    imageAlt: "Mount Ruapehu under snow behind the Waiouru town sign on State Highway 1",
    related: ["freedom-camping-rules-new-zealand", "freedom-camping-south-island", "freedom-camping-taupo", "self-contained-campervan-green-warrant", "north-island-two-week-road-trip"],
    hubs: ["freedom-camping"],
    intro:
      "Freedom camping is legal across much of the North Island in a certified self-contained vehicle, but each council draws its own map, and the busy coasts are tightly limited. Auckland, Thames-Coromandel and Tauranga take only certified vehicles, for two nights at most, while Whangārei, Waikato District and Taupō still name sites for vans without a toilet. Expect short stays, set hours and a $400 fine for getting it wrong.",
    sections: [
      s("What decides whether a spot is legal", [
        "The landowner decides. On council land the district or city council's bylaw sets the sites, nights and hours; on conservation land DOC's notices do the same; and NZTA rest areas are for a break from driving, not for setting up camp. The Freedom Camping Act 2011 frames all of it, and the sign at the site has the final word.",
        "Since 7 June 2026 only a green warrant makes a vehicle self-contained for freedom camping, so an older van with a blue sticker counts as uncertified. On council land an uncertified vehicle or a tent can stay only where the bylaw sets aside a site for it, and those sites are the exception on the North Island, not the rule.",
      ], ["The landowner's rules apply", "Green warrants only since 7 June 2026", "Rest areas are not campsites"]),
      s("Northland", [
        "Far North District Council keeps camping and overnight parking out of its parks, reserves and beaches and sends free campers to seven approved sites near toilets and water. Whangārei is more generous than most councils in the country: its bylaw lists 23 sites for certified vehicles, 17 where a vehicle without certification may stay and five areas for tents, mostly for one night.",
        "Cape Reinga and Tapotupotu are DOC land where freedom camping is prohibited, so the far north end of State Highway 1 means DOC's campsites at Tapotupotu or Spirits Bay, or a holiday park. DOC's Uretiti Beach Campsite south of Whangārei is the biggest DOC ground in the country, with 300 sites.",
      ], ["Far North: seven approved sites", "Whangārei: sites for tents and uncertified vans", "No freedom camping at Cape Reinga"]),
      s("Auckland and the Coromandel", [
        "Auckland lets certified vehicles stay on council roads and car parks for two nights in the same place, gone by 9am on the morning you leave, but 58 areas are prohibited, 20 are restricted, and council reserves and regional parks are closed to freedom camping. A tent or an uncertified van needs a campground or one of the regional park campsites, which are booked and paid.",
        "Thames-Coromandel prohibits freedom camping in 84 listed areas and restricts it in 25 more, and only certified vehicles may use the restricted ones, for two consecutive nights between 5pm and 9am. The peninsula's DOC campsites, such as Waikawau Bay with 132 sites, are booked through DOC and fill through January.",
      ], ["Auckland: two nights, gone by 9am", "Coromandel: 84 prohibited areas", "Book DOC's Coromandel sites early"]),
      s("Waikato, Bay of Plenty and Rotorua", [
        "Waikato District gives certified vehicles a general permission outside its prohibited areas, for three nights in each area in a month, and lets uncertified vehicles stay two nights at Onewhero Domain and Te Kauwhata Domain. James Street in Raglan has been off limits since December 2025, and Raglan's other rules sit with the same council.",
        "Tauranga allows certified vehicles only, in the reserves, roads and car parks its bylaw lists, for two nights per location per calendar month. Whakatāne has four sites for certified vehicles in Whakatāne and Ōhope, and Aniwhenua Reserve near Murupara takes vehicles that are not self-contained. Rotorua runs three free sites for certified vehicles and three paid lake reserves, two of which take tents.",
      ], ["Waikato: three nights per area", "Tauranga: certified vehicles only", "Rotorua: tents at two paid reserves"]),
      s("Taupō and the central plateau", [
        "Taupō District lets certified vehicles camp on council land outside its prohibited areas, and names three areas for everyone else: Hipapatua Reid's Farm on the Waikato River, Mangakino and Whakamaru. Most of the lake edge is reserve land where camping is not allowed, and Five Mile Bay has been closed to campers by Ngāti Tūwharetoa since 2020. Our Taupō guide has the detail.",
        "Around Tongariro National Park the land is DOC's, and KiwiCamping's data holds 22 DOC freedom camping notices in the Tongariro district, 17 of them prohibiting camping, including Whakapapa Village. Use DOC's Mangahuia Campsite, or a holiday park at Whakapapa Village, National Park village or Ohakune.",
      ], ["Taupō: three sites for uncertified vans", "Most of the lake edge is reserve", "Tongariro: use DOC campsites"]),
      s("Taranaki, Hawke's Bay and the East Coast", [
        "New Plymouth bans tents on public land and lets certified vehicles freedom camp across the district for three nights in any 30 days. Vehicles without certification have two council sites, Lake Rotomanu and Battiscombe Terrace in Waitara, with six spaces each and one night in 30 days.",
        "Hawke's Bay and Gisborne councils allow freedom camping at specific coastal spots, some with a permit arranged before you arrive, so read the council's page for Napier, Hastings or the Tairāwhiti beaches. On the East Cape, DOC's campsites such as Anaura Bay are the dependable nights, and many are basic and cheap.",
      ], ["New Plymouth: no tents on public land", "Some East Coast spots need a permit", "Anaura Bay is DOC's largest on the cape"]),
      s("Wellington and the lower North Island", [
        "Wellington City allows certified vehicles only, and its free sites are two car parks: Evans Bay Marina with 52 spaces and Te Kopahou Visitors Centre with 16. Each allows four consecutive nights in a calendar month, and land under the Reserves Act and the Town Belt Act is closed to camping. That makes the night before an early Cook Strait ferry easy to plan.",
        "Kāpiti, Horowhenua, Manawatū and the Wairarapa councils each set their own short lists, so check the council before a night on the coast. DOC's Holdsworth Campsite in the Tararua foothills has 150 sites and the Catchpool Valley in Remutaka Forest Park is the nearest DOC ground to the city.",
      ], ["Wellington: Evans Bay and Te Kopahou", "Four nights a month in Wellington", "Holdsworth and Catchpool for DOC nights"]),
      s("Fines and the busiest weeks", [
        "The national fees apply everywhere: $400 for camping in breach of a bylaw or in an uncertified vehicle where certification is required, $200 for a warrant card not on show, $600 for refusing to leave when an officer asks and $800 for leaving waste or damaging the site. A rental company passes the notice on to the hirer.",
        "Enforcement and demand peak between Christmas and the end of January on the Coromandel, in Northland and around Taupō, when many council sites fill before dark. On those nights a booked DOC campsite or holiday park beats driving between full car parks.",
      ], ["$400 for most breaches", "Rentals pass fines on", "Book ahead from Christmas to January"]),
      s("Without a certified vehicle", [
        "A tent or a car can still sleep cheaply on the North Island, mostly on DOC land and in paid grounds. KiwiCamping's DOC data lists 122 DOC campsites across the island's regions, from free basic sites to booked grounds with showers, and DOC's freedom camping rules on conservation land do not always require certification. Holiday parks cover every town.",
        "Whangārei, Waikato District, Taupō, Whakatāne, Rotorua and New Plymouth all name council sites for people without a toilet on board, which makes the top and middle of the island easier than the coasts around Auckland and Tauranga. The table below sums up each council's position as its own page or bylaw gives it.",
      ], ["122 DOC campsites on the island", "Six councils name uncertified sites", "Holiday parks in every town"], {
        caption: "Council land only, from each council's page or bylaw as read for our council guides in October 2026, and Taupō's Freedom Camping Bylaw 2023. DOC land follows DOC's notices.",
        head: ["Council", "Certified self-contained", "Without certification"],
        rows: [
          ["Far North", "Seven approved sites", "Not stated; check the council's list"],
          ["Whangārei", "23 listed sites", "17 sites for vehicles, five tent areas"],
          ["Auckland", "Council roads and car parks outside 78 listed areas, two nights", "Campgrounds"],
          ["Thames-Coromandel", "25 restricted areas, two nights, 5pm to 9am", "Campgrounds"],
          ["Waikato District", "Outside prohibited areas, three nights per area", "Onewhero and Te Kauwhata Domains, two nights"],
          ["Tauranga", "Listed reserves and car parks, two nights a month", "Campgrounds"],
          ["Whakatāne", "Four sites, three nights in four weeks", "Aniwhenua Reserve"],
          ["Rotorua", "Three free and three paid sites", "Tents at Lake Ōkaro and Guy Roe Reserve"],
          ["Taupō", "Council land outside prohibited areas", "Reid's Farm, Mangakino and Whakamaru"],
          ["New Plymouth", "Across the district, three nights in 30 days", "Two sites, one night; no tents"],
          ["Wellington City", "Evans Bay and Te Kopahou, four nights a month", "Campgrounds"],
        ],
      }),
      s("Planning North Island nights with KiwiCamping", [
        "KiwiCamping puts freedom camping areas, DOC campsites, huts, holiday parks and dump stations on one map of the North Island, and its filters narrow it to what suits your vehicle. Council sites change with each bylaw, so treat the map as the shortlist and the council page and the sign as the answer.",
        "Save the spots you like into collections, then plan the trip with a date on each stop, a note on the rules and a paid fallback for the nights around Christmas. Each leg shows its distance and drive, and each place its forecast. Free to download, with in-app purchases.",
      ], ["Shortlist on the map", "Confirm with the council and the sign", "Keep a fallback for summer nights"], undefined, true),
    ],
    sources: [
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
      { label: "Freedom Camping Act 2011", url: "https://www.legislation.govt.nz/act/public/2011/0061/latest/whole.html" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "Auckland Council: freedom camping", url: "https://aucklandcouncil.govt.nz/en/plans-policies-bylaws-reports-projects/bylaws/freedom-camping-bylaw.html" },
      { label: "Thames-Coromandel District Council: freedom camping", url: "https://www.tcdc.govt.nz/camping" },
      { label: "Waikato District Council: freedom camping", url: "https://www.waikatodistrict.govt.nz/camping" },
      { label: "Taupō District Council: freedom camping", url: "https://www.taupodc.govt.nz/recreation/freedom-camping" },
      { label: "Wellington City Council: freedom camping", url: "https://wellington.govt.nz/recreation/outdoors/camping-in-wellington" },
    ],
  }),
  a({
    slug: "freedom-camping-taupo",
    title: "Freedom Camping in Taupō 2026: Reid's Farm, the Lake and the Rules",
    description: "Freedom camping around Taupō in 2026: who may stay where under the council's 2023 bylaw, Hipapatua Reid's Farm, Mangakino and Whakamaru, why most of the lake edge is closed, DOC land near Tūrangi, and fines.",
    category: "Rules & safety",
    region: "Taupō",
    places: ["Taupō", "Reid's Farm", "Mangakino", "Whakamaru", "Tūrangi", "Kinloch", "Five Mile Bay"],
    imageAlt: "Lake Taupō seen from a grassy lakeside park, with Taupō town on the far shore",
    related: ["freedom-camping-north-island", "self-contained-campervan-green-warrant", "freedom-camping-rotorua-2026", "north-island-two-week-road-trip"],
    hubs: ["freedom-camping/turangi", "freedom-camping/tongariro", "camping/central-north-island"],
    intro:
      "In the Taupō District a certified self-contained vehicle may freedom camp on council land outside the areas the council's Freedom Camping Bylaw 2023 prohibits, which take in most of the lakefront. Everyone else, tents and vans without a toilet included, is limited to three council areas: Hipapatua Reid's Farm on the Waikato River north of town, Mangakino and Whakamaru. Stays are short, generally three nights, and the sign at each site sets the detail.",
    sections: [
      s("The 2023 bylaw in short", [
        "Taupō District Council adopted its Freedom Camping Bylaw 2023 on 26 September 2023, and it came into force on 16 October 2023, replacing the 2017 bylaw. Its model is simple: a certified self-contained vehicle may camp anywhere on council land except the prohibited areas, and all other freedom camping is confined to the areas in its schedule.",
        "Since 7 June 2026 only a green warrant makes a vehicle self-contained, so a van on an old blue certificate now sits in the second group with the tents. The bylaw covers council land only; the lake bed belongs to Ngāti Tūwharetoa, and much of the land south and east of the lake is DOC's.",
      ], ["In force since 16 October 2023", "Certified vehicles: council land outside bans", "Everyone else: three named areas"]),
      s("Hipapatua Reid's Farm", [
        "Reid's Farm is the Taupō freedom camping spot most travellers know: a riverside recreation reserve on Huka Falls Road, a few minutes north of town, with toilets, picnic tables and the Waikato River for a swim. Because it has toilets, it is one of the three areas where vehicles without certification may stay, and it is free.",
        "There is no power and no drinking water, so arrive with full tanks or bottles, and take every scrap of rubbish with you. The site is busy from December to March, it has been closed for periods in the past, and the stay limit is short, so check the council's page before you plan a night around it and keep a holiday park in town as the backup.",
      ], ["Free, with toilets", "No drinking water", "Busy all summer"]),
      s("Mangakino and Whakamaru", [
        "The other two areas for tents and uncertified vehicles are on the hydro lakes of the Waikato River, west of Taupō. Mangakino Recreation Reserve sits on the shore of Lake Maraetai, and Whakamaru Recreation Reserve is on Lake Whakamaru, both under an hour's drive from Taupō.",
        "They suit a slower route between Taupō and Waitomo or Hamilton on State Highway 30 rather than a base for the lake itself. Both are lakeside reserves with public toilets nearby, and in summer they draw water-skiers and boat campers as well as vans.",
      ], ["Lake Maraetai at Mangakino", "Lake Whakamaru on SH30", "Good stops toward Waitomo"]),
      s("Why the lakefront is mostly closed", [
        "Most of the lake edge and the Waikato River banks around Taupō are public reserves, and the Reserves Act already stops freedom camping on them unless a plan allows it. That covers the long stretch of lakefront parks in town where vans used to park up, so a sea of campers along Lake Terrace is not legal.",
        "Five Mile Bay, south of town, was once the busiest freedom camping area on the lake, with up to 100 vehicles a night. Much of it returned to Ngāti Tūwharetoa in their 2018 Treaty settlement, and the iwi closed it to vehicles and camping with a rāhui in June 2020. Walkers and cyclists can still use the shore.",
      ], ["Reserves are closed to camping", "No camping along Lake Terrace", "Five Mile Bay closed since 2020"]),
      s("DOC land around Tūrangi and Tongariro", [
        "South of the lake, the Tongariro River, Kaimanawa Forest Park and Tongariro National Park are conservation land. KiwiCamping's DOC data holds 28 DOC freedom camping notices in the Tūrangi district, 21 of them prohibiting camping and 7 restricting it to self-contained vehicles, including the large Whakaipo amenity area on the lake's north-western shore.",
        "For a tent or an uncertified van, the dependable choice is a DOC campsite. The central North Island has 14 of them in KiwiCamping's data, nine of them free, many in Kaimanawa Forest Park, with adult rates from $10 where a fee applies. Our North Island guide covers the volcanic plateau beyond them.",
      ], ["28 DOC notices near Tūrangi", "Whakaipo: self-contained only", "Nine free DOC campsites in the region"]),
      s("Waste, water and fires", [
        "Certified vehicles should arrive with empty tanks and leave the same way: the town has public dump stations, and KiwiCamping pins them so you can find the nearest before you settle in. Never empty grey water onto the ground at a reserve, which is an $800 offence and the fastest way to get a site closed.",
        "The Taupō region dries out in summer and fire restrictions are common. Check the fire season for the area before lighting a gas cooker outside the van, and do not light open fires at council or DOC freedom camping areas.",
      ], ["Arrive with empty tanks", "Grey water on the ground is $800", "Check the fire season in summer"]),
      s("Fines", [
        "The council uses the national fees. Camping where the bylaw prohibits it, or at a site for certified vehicles in a van without a green warrant, costs $400; a warrant card not on show is $200; refusing to leave when an officer asks is $600; and leaving waste or damaging the area is $800.",
        "Notices for rental vehicles go to the hire company, which passes them on to the hirer. Expect patrols around town and at Reid's Farm through the summer.",
      ], ["$400 for most breaches", "$800 for waste or damage", "Rentals pass fines on"]),
      s("Using KiwiCamping around Taupō", [
        "KiwiCamping maps the freedom camping areas, DOC campsites, holiday parks and dump stations around the lake, and its filters show only the places that take your vehicle or a tent. A council area can close at short notice, so treat the map as the plan and the sign as the rule.",
        "Save Reid's Farm and a holiday park side by side in a collection, then build the stop into a trip with dates, the drive from Rotorua or Tongariro and the forecast for each night. Free to download, with in-app purchases.",
      ], ["Filter for tents or uncertified vans", "Save a holiday park as backup", "Check the sign on arrival"], undefined, true),
    ],
    sources: [
      { label: "Taupō District Council: freedom camping", url: "https://www.taupodc.govt.nz/recreation/freedom-camping" },
      { label: "Taupō District Council: Freedom Camping Bylaw 2023", url: "https://www.taupodc.govt.nz/repository/libraries/id:25026fn3317q9slqygym/hierarchy/Rules-regulations-and-licences/Bylaws/2023%20Freedom%20Camping%20Bylaw%20%28215KB%29.pdf" },
      { label: "Rotorua Daily Post: Five Mile Bay closed to freedom campers (June 2020)", url: "https://www.nzherald.co.nz/rotorua-daily-post/news/taupo-iwi-banish-freedom-campers-from-five-mile-bay/BM7MMRVACXQ72HUHCYGPSFQUS4" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
    ],
  }),
  a({
    slug: "freedom-camping-west-coast",
    title: "Freedom Camping on the West Coast 2026: Karamea to Haast, Town by Town",
    description: "Where you can freedom camp on the South Island's West Coast in 2026: Buller, Grey and Westland's rules, Punakaiki and the glacier towns, the community sites, DOC campsites, dump stations and fines.",
    category: "Rules & safety",
    region: "West Coast",
    places: ["Karamea", "Westport", "Punakaiki", "Greymouth", "Lake Brunner", "Hokitika", "Franz Josef", "Fox Glacier", "Haast"],
    imageAlt: "Driftwood and grey stones on Hokitika beach under a clear sky, with the Tasman Sea behind",
    related: ["west-coast-south-island-road-trip", "freedom-camping-westland-2026", "freedom-camping-south-island", "sandflies-new-zealand-camping"],
    hubs: ["camping/west-coast", "freedom-camping/buller", "freedom-camping/greymouth", "freedom-camping/south-westland"],
    intro:
      "The West Coast is one of the easier places in the South Island to freedom camp in a certified self-contained vehicle, but each of its three councils works differently. Buller and Grey let certified vehicles stay on most council land outside a list of banned spots, and Westland points them to three community-run sites. Punakaiki, Fox Glacier and the stretch south to Haast are the tight spots, and a tent or a van without a toilet needs a DOC campsite or a holiday park.",
    sections: [
      s("Three councils along one highway", [
        "The coast road runs more than 500 kilometres from Karamea in the north to Haast in the south, through the Buller, Grey and Westland districts. Each council has its own freedom camping bylaw, and the line between them is easy to cross without noticing, so the rule that applied at lunch may not apply at dinner.",
        "Two national rules apply everywhere. Since 7 June 2026 only a green warrant counts as self-contained, and on council land a vehicle without one can stay only where a bylaw names a site for it. On the coast, no council currently names such a site, so for tents and uncertified vans the answer is DOC or a campground.",
      ], ["Three councils, three bylaws", "Green warrants only", "No council sites for uncertified vans"]),
      s("Buller: Karamea, Westport and Charleston", [
        "Buller's bylaw lets a certified self-contained vehicle camp on council land anywhere outside its no-camping zones. The bylaw allows up to three consecutive days and ten a month at one spot, and the council's own page asks for no more than two nights in one place. The zones include the Oparara River mouth and Flagstaff at Karamea, the Buller River tipheads and Carters Beach Domain near Westport, Tauranga Bay, Constant Bay and Joyce Bay at Charleston, and parts of Reefton's main streets.",
        "The bylaw dates from 2012 and the council has said it will consult on a new one in 2026, so read its page before relying on the old list. DOC's Buller district adds seven notices of its own, two of them restricting camping to self-contained vehicles.",
      ], ["Certified vehicles: council land outside the zones", "Two nights in one place, the council asks", "A new bylaw is coming"]),
      s("Punakaiki and the Paparoa coast", [
        "Buller bans freedom camping on council land from the Fox River south to the Punakaiki River, apart from the highway corridor, and the rest of the coast there is Paparoa National Park. In practice that means no free night at the Pancake Rocks: stay at the campground in Punakaiki, or plan the night at Charleston or north of Greymouth.",
        "The Paparoa Track starts and ends near here, and its three huts are DOC's, booked through DOC rather than the council.",
      ], ["No freedom camping at Punakaiki", "Book the campground there", "Paparoa Track huts are booked"]),
      s("Grey: Greymouth and Lake Brunner", [
        "Grey District lets certified vehicles camp on council land outside its prohibited areas, which take in parts of Jacks Road, the Cobden Bridge site, Iveagh Bay, the Moana foreshore at Lake Brunner and the Blaketown tiphead, with some of those mapped as areas certified vehicles may use. The council approved an updated bylaw on 28 September 2026 that allows three nights in any four weeks and sets the overnight window at 7pm to 8am.",
        "The council is still looking at whether to open any area to vehicles without certification. Until it does, Greymouth's holiday parks and the DOC campsites along the coast are the options for a tent.",
      ], ["Three nights in four weeks", "Overnight 7pm to 8am", "Moana foreshore is mapped"]),
      s("Westland: Hokitika to Haast", [
        "Westland District sends certified vehicles to three community-run sites, Kumara Domain, Woodstock Domain at Rimu and Paringa Salmon Farm, with a donation asked. Council reserves are closed under the Reserves Act, and the council tells tent campers and uncertified vehicles to use commercial campgrounds.",
        "A draft bylaw from 2024 proposed more sites, including Sunset Point in Hokitika, the Franz Josef heliport car park and the Haast playground, but its adoption has not been confirmed. Until the council confirms it, the sign on the night is what counts.",
      ], ["Kumara, Rimu and Paringa sites", "A donation is asked", "The draft bylaw is not confirmed"]),
      s("Franz Josef, Fox Glacier and the far south", [
        "Glacier country is where a free night is hardest. The Westland draft lists Fox Glacier township as prohibited with no site of its own, and DOC's South Westland district carries 18 freedom camping notices, 17 of them prohibiting camping at walk car parks such as Roaring Billy. In January the holiday parks at Franz Josef and Fox fill early.",
        "DOC's Gillespies Beach Campsite near Fox and Lake Paringa further south are the nearest DOC nights, and Haast has a holiday park and a council dump station. Beyond Haast the road climbs into Mount Aspiring National Park toward Wānaka, and the Wānaka guide takes over from there.",
      ], ["Fox Glacier: no free site", "Gillespies Beach is DOC", "Book glacier nights in summer"]),
      s("DOC campsites on the coast", [
        "KiwiCamping's DOC data lists 14 DOC campsites in the West Coast region, 12 of them bookable online, with adult rates from $10 to $20 a night. Lake Māhinapua near Hokitika is the largest, with 100 sites, and the Lewis Pass reserve has two.",
        "These are the dependable nights for a tent or an uncertified van. They have toilets and most take vehicles, and they are cheaper than a holiday park. Bring repellent: the coast's sandflies are famous, and the lakes and rivers are where they are worst.",
      ], ["14 DOC campsites", "Lake Māhinapua has 100 sites", "Sandflies at every lake"]),
      s("Dump stations, rain and fines", [
        "Dump stations are spread thin. Westland lists them at the Hokitika oxidation ponds, at Franz Josef and by the Marks Road toilets at Haast, and Westport and Greymouth have their own, so empty your tanks at each town rather than gambling on the next. The coast gets heavy rain in every season, and river flats and beach car parks can flood, so check the forecast before choosing a riverside spot.",
        "Fines are the national ones: $400 for camping in breach of a bylaw or in an uncertified vehicle where certification is required, $200 for a missing warrant card and $800 for waste or damage. Buller's page still mentions a $200 fine, but the national $400 is what applies under the current law.",
      ], ["Empty tanks at every town", "Watch for flooding", "$400 for most breaches"]),
      s("Planning the coast with KiwiCamping", [
        "KiwiCamping maps freedom camping areas, DOC campsites, holiday parks and dump stations from Karamea to Haast, so the long gaps between them are easy to see before you set off. Filter by what your vehicle needs, and check each council's page for its latest list.",
        "Build the coast as one trip, with a dated stop for each night, a holiday park saved as a fallback for Punakaiki and the glacier towns, and the distance and forecast for each leg. Free to download, with in-app purchases.",
      ], ["See the gaps before you drive", "Fallbacks for Punakaiki and Fox", "Forecast for each night"], undefined, true),
    ],
    sources: [
      { label: "Buller District Council: freedom camping", url: "https://bullerdc.govt.nz/recreation/freedom-camping/" },
      { label: "Buller District Council: Freedom Camping Bylaw 2012 (amended 2018)", url: "https://bullerdc.govt.nz/media/vrifsbba/181119-bdc-freedom-camping-bylaw-2012.pdf" },
      { label: "Grey District Council: freedom camping FAQs", url: "https://www.greydc.govt.nz/05our-district/freedom-camping/faqs" },
      { label: "Grey District Council: Responsible Freedom Camping Bylaw consultation", url: "https://haveyoursay.greydc.govt.nz/regulation" },
      { label: "Westland District Council: campgrounds and responsible camping", url: "https://www.westlanddc.govt.nz/recreation/campgrounds-and-responsible-camping/" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
    ],
  }),
  a({
    slug: "freedom-camping-wanaka",
    title: "Freedom Camping in Wānaka 2026: The Car Parks, Hāwea and Luggate",
    description: "Where you can freedom camp around Wānaka in 2026: the council's designated car parks at the Recreation Centre, Beacon Point Road and Hāwea, Luggate Red Bridge, the Allenby Place closure, December's bylaw decision, DOC campsites and fines.",
    category: "Rules & safety",
    region: "Wānaka",
    places: ["Wānaka", "Lake Hāwea", "Luggate", "Albert Town", "Glendhu Bay", "Makarora"],
    imageAlt: "The northern arm of Lake Wānaka, deep blue between dry hills and distant mountains",
    related: ["freedom-camping-queenstown-lakes-2026", "freedom-camping-south-island", "wanaka-haast-pass-route", "self-contained-campervan-green-warrant"],
    hubs: ["freedom-camping/wakatipu", "freedom-camping/central-otago", "camping/otago"],
    intro:
      "Around Wānaka, freedom camping on council land is allowed only in a certified self-contained vehicle and only in designated car parks: the Wānaka Recreation Centre, Beacon Point Road and Camp Hill Road at Lake Hāwea, plus Luggate Red Bridge Reserve under its signs. You arrive after 6pm, leave before 8am and stay no more than two nights in any 30 days. Everything else in town, lakefront included, is off limits, and the council decides on changes to these sites on 17 December 2026.",
    sections: [
      s("The rules in one paragraph", [
        "Wānaka sits in the Queenstown Lakes District, so the council's Freedom Camping Bylaw 2025 applies, the one that took effect on 1 December 2025 after the High Court quashed the 2021 bylaw. It bans freedom camping in urban areas, on-road parking included, keeps most council reserves closed under the Reserves Act, and opens marked spaces in designated car parks to certified self-contained vehicles.",
        "Since 7 June 2026 only a green warrant counts, so a van without one, a car or a tent cannot use the car parks at all. The spaces are free, cannot be booked, and work on first come, first served. Our Queenstown Lakes guide covers the rest of the district, from Kingston to Glenorchy.",
      ], ["Certified vehicles only", "Arrive after 6pm, leave before 8am", "Two nights in any 30 days"]),
      s("The designated car parks", [
        "The Wānaka Recreation Centre car park is the main site, with 18 marked spaces in the council's list, three temporary spaces added when Allenby Place closed, and a proposal to make it 21. Beacon Point Road has three spaces, and Camp Hill Road at Lake Hāwea has ten. These numbers are the council's, and the sites fill early from Christmas to the end of February.",
        "Allenby Place, once the town's three-space site, has been closed to freedom camping since 23 January 2026. The council cited access and safety problems from the extra traffic, and moved its spaces to the Recreation Centre.",
      ], ["Recreation Centre: 18 spaces", "Beacon Point Road: 3", "Camp Hill Road, Hāwea: 10"], {
        caption: "Queenstown Lakes District Council's designated car parks around Wānaka, from its November 2025 and January 2026 releases. Certified self-contained vehicles only.",
        head: ["Car park", "Place", "Spaces"],
        rows: [
          ["Wānaka Recreation Centre", "Wānaka", "18 (21 proposed)"],
          ["Beacon Point Road", "Wānaka", "3"],
          ["Camp Hill Road", "Lake Hāwea", "10"],
          ["Allenby Place", "Wānaka", "Closed since 23 January 2026"],
          ["Luggate Red Bridge Reserve", "Luggate", "Allowed under the reserve's signs"],
        ],
      }),
      s("Luggate Red Bridge", [
        "Luggate Red Bridge Reserve, beside the Clutha River about 15 minutes east of Wānaka, is the one council reserve where the council allows camping, subject to the conditions on its signs. It is popular with travellers heading for Cromwell or the Lindis Pass, and its river edge is a good place for a swim on a hot afternoon.",
        "Read the board on arrival, because the conditions set there are what officers enforce, and the council's release lists breaching them at the top of its fine scale.",
      ], ["The one reserve open to camping", "Read the board on arrival", "Close to SH6 and SH8A"]),
      s("The December 2026 decision", [
        "The council consulted until 31 August 2026 on amendments that cover the three Wānaka sites: Allenby Place, Beacon Point Road and the Recreation Centre. Hearings ran in late October, and deliberations and adoption are set for 17 December 2026, so the map could change just as the summer rush starts.",
        "Until then, the 2025 list stands. Check the council's responsible camping page and its Responsible Camping Map before you rely on a Wānaka space over Christmas and New Year.",
      ], ["Decision due 17 December 2026", "The 2025 list stands until then", "Check the council's map"]),
      s("Where tents and uncertified vans can go", [
        "A tent or an uncertified van needs a campground around Wānaka. There are campgrounds and holiday parks in town, at Albert Town, at Glendhu Bay and at Lake Hāwea, and they are the dependable bed from December to March.",
        "DOC runs campsites further out, at Kidds Bush on Lake Hāwea and along the Haast Pass road beyond Makarora, where the drive to the West Coast begins. KiwiCamping's data lists 30 DOC campsites across Otago, eight of them free, with adult rates from $5 where a fee applies. Our Wānaka to Haast Pass route guide strings them together.",
      ], ["Holiday parks in town and at Hāwea", "DOC campsites toward Makarora", "Eight free DOC sites in Otago"]),
      s("DOC land, the lakes and the valleys", [
        "Much of the land around the lakes and up the Matukituki valley toward Mount Aspiring is conservation land, where DOC's notices rather than the council's bylaw set the rules. KiwiCamping's data holds 29 DOC freedom camping notices in the Wakatipu district and 13 in Central Otago, most of them prohibiting camping at car parks and walk entrances.",
        "On DOC land a notice at the site prohibits or restricts camping, and with no notice the general DOC rules apply. Lake shores and river flats near Wānaka are often reserve, private or DOC land under a notice, so a quiet gravel pull-off is rarely the free spot it looks like.",
      ], ["29 DOC notices in Wakatipu", "13 in Central Otago", "Lakeside pull-offs are rarely legal"]),
      s("Fines and patrols", [
        "The council's starting fine for breaching the bylaw or the Freedom Camping Act is $400, matching the national schedule, which also sets $200 for a missing warrant card and $800 for waste or damage. Its release lists camping on council reserves, or breaching the conditions at Luggate Red Bridge, at $800.",
        "Council officers patrol the Wānaka sites through the summer. For an urgent freedom camping problem the council's Wānaka line is 03 443 0024 at any hour, and Snap Send Solve or services@qldc.govt.nz take the rest.",
      ], ["$400 to start", "$800 on council reserves", "Council line: 03 443 0024"]),
      s("Using KiwiCamping around Wānaka", [
        "KiwiCamping maps the freedom camping areas, DOC campsites, holiday parks and dump stations around Wānaka and Hāwea, and its filters cut the list to what your vehicle can use. The car parks are small and the bylaw is under review, so pair each night with a backup.",
        "Save the Recreation Centre, a holiday park and a DOC site in one collection, then add Wānaka to a trip with dates, the drive over the Crown Range or the Haast Pass and the forecast for each night. Free to download, with in-app purchases.",
      ], ["Pair each night with a backup", "Filter by vehicle", "Forecast for the passes"], undefined, true),
    ],
    sources: [
      { label: "Queenstown Lakes District Council: responsible camping", url: "https://www.qldc.govt.nz/responsible-camping" },
      { label: "Queenstown Lakes District Council: bylaws", url: "https://www.qldc.govt.nz/bylaws" },
      { label: "Queenstown Lakes District Council media release, 28 November 2025 (republished by Scoop)", url: "https://www.scoop.co.nz/stories/AK2511/S00773.htm" },
      { label: "Queenstown Lakes District Council media release, 16 January 2026: Allenby Place (republished by Scoop)", url: "https://www.scoop.co.nz/stories/AK2601/S00314.htm" },
      { label: "Queenstown Lakes District Council: proposed amendments to the Freedom Camping Bylaw 2025", url: "https://letstalk.qldc.govt.nz/proposed-amendments-fc-bylaw-2025?tool=qanda" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
    ],
  }),
];
