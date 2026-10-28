import { makeArticle as a, type Article, type ArticleSection, type ArticleTable } from "@/lib/article-model";

const s = (heading: string, body: string[], tips?: string[], table?: ArticleTable, cta?: boolean): ArticleSection => ({ heading, body, tips, ...(table && { table }), ...(cta && { cta }) });

/**
 * Freedom camping on council land, one guide per district. Every rule, count and fee is read from the
 * council's own bylaw or page named in `sources` on 21 October 2026, with the national fees from the
 * Freedom Camping (Penalties for Infringement Offences) Regulations 2023. The facts files are in
 * docs/growth/freedom-council/. DOC land is covered by the /freedom-camping/ hubs, not here.
 */
export const freedomCouncilArticles: Article[] = [
  a({
    slug: "freedom-camping-thames-coromandel-2026",
    publishAt: "2026-11-20",
    title: "Freedom Camping in Thames-Coromandel 2026: Where You Can Stay",
    description: "Thames-Coromandel's Freedom Camping Bylaw: certified self-contained vehicles only, two nights, 25 signed sites with vehicle limits, 84 prohibited areas, fines and the DOC campsites nearby.",
    category: "Rules & safety",
    region: "Coromandel",
    places: ["Whitianga", "Whangamatā", "Thames", "Tairua", "Pāuanui", "Coromandel Town"],
    imageAlt: "Cathedral Cove on the Coromandel Peninsula, with its rock archway, white sand and a person walking along the beach",
    related: ["freedom-camping-rules-new-zealand", "self-contained-campervan-green-warrant", "camping-rules-local-councils-new-zealand", "holiday-parks-new-zealand-guide"],
    hubs: ["camping/coromandel"],
    intro:
      "Only certified self-contained vehicles may freedom camp on council land in the Thames-Coromandel District. The council's Freedom Camping Bylaw prohibits it in 84 listed areas and restricts it at 25 more, where a signed designated place and a vehicle limit apply. The general limits are two consecutive nights, only between 5pm and 9am, with the vehicle gone by 9am. The bylaw covers council land only; conservation land on the peninsula is DOC's, and the rules differ.",
    sections: [
      s("What the bylaw says", [
        "The Freedom Camping Bylaw was made on 7 October 2022 and came into force on 5 December 2022. The council amended it on 8 August 2023 and again on 10 December 2024, when it moved the designated place at Island View Reserve in Whangamatā. The bylaw page says it is due for review by 7 October 2027, and it applies to all local authority areas in the district, meaning land the council controls or manages. It does not cover DOC land, private land or most state highway verges.",
        "Under the bylaw, freedom camping is restricted in every council area, and the rule for all of them is the same: a self-contained motor vehicle must be used, a vehicle must not stay in an area more than two consecutive nights, and freedom camping is only allowed between 5pm and 9am. Where an area has been used overnight, the vehicle must be removed by 9am each day. The council's summary says to look for its signs showing where freedom camping can take place.",
      ], ["Council land only, not DOC", "Two consecutive nights, 5pm to 9am", "Vehicle gone by 9am"]),
      s("The 25 designated sites and their vehicle limits", [
        "Schedule 2 of the bylaw lists 25 areas where freedom camping is further restricted. Where the schedule names a designated place, you may not camp in any other part of that reserve or road, and where it sets a maximum number of vehicles, you may not stay if that many are already there when you arrive. Twenty of the 25 state a vehicle limit; for Egans Reserve, Waikawau South Reserve and Waitoko Stream Esplanades the schedule points to explanatory notes, and Rhodes Park car park and Waiomu Domain state no limit.",
        "Some sites add their own times or nights. Four have a 5pm to 8am window instead of the general 5pm to 9am, Woollams Avenue car park in Coromandel allows one consecutive night, and at Aickin Road Sports Reserve the schedule sets Saturday as the day to leave. A site can be closed at short notice: the bylaw lets the council close or restrict any Schedule 2 area to prevent damage, allow maintenance, protect safety or provide for events, and says it will publicise this by a sign, on its digital channels or radio, or in a public notice.",
      ], ["Stay in the signed designated place", "A full site means you cannot stay", "Sites can close for events or maintenance"], {
        caption: "Schedule 2 of the Thames-Coromandel Freedom Camping Bylaw, read on the council's bylaw page on 21 October 2026. Limits are the maximum vehicles the schedule states.",
        head: ["Site", "Town", "Vehicles", "Other limits in the schedule"],
        rows: [
          ["Aickin Road Sports Reserve, area opposite 212A Aickin Road", "Whangamatā", "4", "Day to leave: Saturday"],
          ["Beach Road, grass area opposite 305 Beach Road", "Whangamatā", "2", "None stated"],
          ["Information Centre car park, 616 Port Road", "Whangamatā", "4", "5pm to 8am"],
          ["Island View Reserve, top car park", "Whangamatā", "4", "None stated"],
          ["Brown Street car park", "Thames", "4", "None stated"],
          ["Danby Field (Shopper's) car park, 301 Queen Street", "Thames", "20", "None stated"],
          ["520 Mackay Street, bowling club car park", "Thames", "3", "5pm to 8am"],
          ["Rhodes Park car park", "Thames", "Not stated", "Gravel area north of the netball courts"],
          ["Tararū Beachfront North Reserve", "Tararū", "4", "None stated"],
          ["Lee Street car park, 2 Lee Street", "Whitianga", "8", "None stated"],
          ["TCDC Mercury Bay Area office car park, Monk Street", "Whitianga", "4", "5pm to 8am"],
          ["Whangapoua car park, Tangiora Avenue", "Whangapoua", "2", "None stated"],
          ["Omara Reserve", "Matarangi", "5", "None stated"],
          ["Coroglen Reserve", "Coroglen", "5", "None stated"],
          ["Egans Reserve, The 309 Road", "Kaimarama", "Not stated", "See the schedule's explanatory notes"],
          ["Kapanga Road car park", "Coromandel Town", "6", "None stated"],
          ["Woollams Avenue car park", "Coromandel Town", "4", "5pm to 8am; one consecutive night"],
          ["Whittle Reserve", "Colville", "4", "None stated"],
          ["Ocean Beach (South End)", "Pāuanui", "4", "None stated"],
          ["Royal Billy Point and Te Karaka Reserve", "Pāuanui", "3", "None stated"],
          ["Tangimoana Esplanade Reserves, Paku Drive", "Tairua", "5", "None stated"],
          ["Tui Terrace and Wharf Road", "Tairua", "2", "None stated"],
          ["Waitoko Stream (Grahams Creek) Esplanades", "Tairua", "Not stated", "See the schedule's explanatory notes"],
          ["Waikawau South Reserve, State Highway 25", "Waikawau", "Not stated", "See the schedule's explanatory notes"],
          ["Waiomu Domain and Reserves", "Waiomu", "Not stated", "North western corner car parking area"],
        ],
      }),
      s("Where freedom camping is prohibited", [
        "Schedule 1 lists 84 prohibited areas across Thames, Mercury Bay, Coromandel and Colville, Tairua and Pāuanui, and Whangamatā. They include the whole of Hāhei and Hot Water Beach settlements (all road reserves and council reserves), The Esplanade and the Dundas Street boat ramp area in Whitianga, Esplanade Drive and the library and area office car park in Whangamatā, Waterways Parade and Kennedy Park in Pāuanui, and Long Bay Road, Pottery Lane and Woollams Avenue's road reserve in Coromandel Town. In Thames the list includes the library car park at 505 Mackay Street and the council office car park next to it.",
        "Reserves need a second rule. The bylaw's explanatory notes say freedom camping on reserves is prohibited under section 44 of the Reserves Act 1977 and so under section 10 of the Freedom Camping Act, except in the designated places on reserves named in Schedule 2. The schedule lists some reserves but not all, so a reserve that is not on either list is still not a place to camp. The council publishes five area maps (Coromandel-Colville, Mercury Bay, Tairua-Pāuanui, Thames and Whangamatā), but the bylaw says the maps are for reference only and that the written schedules prevail if they differ.",
      ], ["84 prohibited areas in Schedule 1", "A reserve not on the list is still prohibited", "The written schedule beats the map"]),
      s("Tents and vehicles without certification", [
        "The bylaw has no place for a tent. Its definition of freedom camping covers camping with a tent or other temporary structure or with a motor vehicle, but the restriction on every council area requires a self-contained motor vehicle, and the council's summary says to freedom camp only in a certified self-contained vehicle. A motor vehicle under the bylaw also includes a unit used for camping that is not itself a vehicle but can be carried on one.",
        "Self-contained means the vehicle has a valid certificate of self-containment under the Plumbers, Gasfitters, and Drainlayers Act 2006. The bylaw text still refers to the transitional periods for older certification, but under the national rules blue self-containment warrants stopped counting on 7 June 2026, so carry a green warrant and display the card. If you have a tent, a non-certified van or a vehicle with a portable toilet, you need a campground, a holiday park or a DOC campsite.",
      ], ["No tents on council land", "Green warrant only since 7 June 2026", "Otherwise use a campground or DOC campsite"]),
      s("Fines and the council's approval process", [
        "A breach of the bylaw is an infringement offence under the Freedom Camping Act, including making preparations to freedom camp. The fees come from the Freedom Camping (Penalties for Infringement Offences) Regulations 2023: $400 for freedom camping in breach of a bylaw prohibition or restriction, $400 for using a vehicle that is not self-contained other than where permitted, $400 for a self-contained vehicle with more people than it is certified for, $200 for failing to display a warrant card, $600 for failing or refusing to leave when an enforcement officer requires it, and $800 for damaging the area or depositing waste in or on it. The notice can go to the registered owner of the vehicle or the person lawfully in possession of it, which for a rental is usually the hire company.",
        "The council can approve freedom camping in a prohibited or restricted place, but only for a special event or occasion, where there is a good reason that cannot reasonably be met in a permitted area, or where a restriction cannot reasonably be met. The application must be made at least 30 days ahead, with the fee in the council's schedule of fees and charges, and the council can grant or decline it at its discretion. A visitor camping for a night or two will not meet those tests, so treat the approval route as meant for events.",
      ], ["$400 for most breaches", "$800 for waste or damage", "Approvals need 30 days' notice"]),
      s("Council land and DOC land on the Coromandel", [
        "These rules cover council land. DOC runs the campgrounds on the northern and eastern coast of the peninsula and the Coromandel Forest Park, and KiwiCamping's DOC data (11 August 2026) lists 20 DOC campsites in the Coromandel region, 19 of them bookable online through DOC, with adult nightly rates from $10 to $23 and Waikawau Bay Campsite the largest. DOC lists current prohibited freedom camping notices in the district, including at Cathedral Cove Carpark in Whitianga and Kauaeranga Roadend Carpark in Hauraki, which are DOC notices rather than council bylaws.",
        "For a bed with power and showers, the peninsula's holiday parks fill in summer. The guide to holiday parks in New Zealand explains how to book them, and the guide to DOC campsites explains DOC's booking rules. At New Year the council's alcohol ban also applies, which the New Year's Eve guide covers; the bylaw above is about where you can park the vehicle, not about drinking.",
      ], ["DOC campsites: book through DOC", "Cathedral Cove carpark is a DOC notice", "Alcohol bans are a separate rule"]),
      s("Using KiwiCamping on the Coromandel", [
        "KiwiCamping shows the DOC campsites and huts on the peninsula with their category, fee notes and facilities, and the satellite and map views show the coast between Thames and Whangamatā. It does not hold the council's freedom camping sites or the bylaw maps, so check the council's page and the sign on the day. Offline, the app keeps place details, saved places and guides; map tiles, routing, weather and photos want signal.",
        "Save the places you might use, add a campground as the fallback for each night, and order them in a trip with dates and notes. The trip adds up the distance between legs and shows a forecast at each stop. Free to download, with in-app purchases.",
      ], ["Save a campground as the fallback", "Check the council page for the night", "Core place details work offline"], undefined, true),
    ],
    sources: [
      { label: "Thames-Coromandel District Council: Freedom Camping Bylaw", url: "https://www.tcdc.govt.nz/camping" },
      { label: "Thames-Coromandel District Council: Freedom Camping Bylaw 2022", url: "https://www.tcdc.govt.nz/Our-Council/Bylaws-Codes-and-Policies/Bylaws/Freedom-Camping-Bylaw-2022" },
      { label: "Freedom Camping Act 2011", url: "https://www.legislation.govt.nz/act/public/2011/0061/latest/whole.html" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
      { label: "DOC: Coromandel campsites", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/" },
    ],
  }),

  a({
    slug: "freedom-camping-queenstown-lakes-2026",
    publishAt: "2026-11-19",
    title: "Freedom Camping in Queenstown Lakes 2026: Where You Can Stay",
    description: "Queenstown Lakes' Freedom Camping Bylaw 2025: 15 designated car parks for certified self-contained vehicles, two nights in 30 days, 6pm to 8am, no urban camping, fines and the changes due in December.",
    category: "Rules & safety",
    region: "Queenstown Lakes",
    places: ["Queenstown", "Wānaka", "Glenorchy", "Kingston", "Hāwea", "Arrowtown"],
    imageAlt: "The Remarkables ridge above Queenstown, seen past dark silhouetted trees",
    related: ["freedom-camping-rules-new-zealand", "self-contained-campervan-green-warrant", "camping-rules-local-councils-new-zealand", "doc-campsites-new-zealand-guide"],
    hubs: ["freedom-camping/wakatipu", "camping/otago"],
    intro:
      "In the Queenstown Lakes District, council land is open to freedom camping only at 15 designated car parks, and only for certified self-contained vehicles. Freedom camping is prohibited in urban areas, the council's Freedom Camping Bylaw 2025 allows two nights in any 30-day period, and you arrive after 6pm and leave before 8am. The council is consulting on changes to the bylaw, with a decision due on 17 December 2026, so check its page before you travel. That is council land; DOC's Wakatipu notices cover conservation land.",
    sections: [
      s("The Freedom Camping Bylaw 2025", [
        "The council's bylaw took effect on 1 December 2025 and replaced the 2021 bylaw that the High Court quashed after a judicial review. The council's release of 28 November 2025 names 15 designated car parks with 141 marked spaces. Most council reserves are prohibited for camping under the Reserves Act, apart from Luggate Red Bridge Reserve, where the council allows camping subject to its signs.",
        "The council's own conditions begin with using a certified self-contained motor vehicle, so a tent or a van without a green warrant belongs in a campground. Under the national rules blue warrants stopped counting on 7 June 2026. The conditions also say you may stay no more than two nights in any 30-day period and must not return to the marked spaces within that period, and that you arrive after 6pm and leave before 8am. Spaces are first come, first served.",
      ], ["15 designated car parks", "Two nights in any 30 days", "Arrive after 6pm, leave before 8am"]),
      s("The 15 car parks and their spaces", [
        "The numbers below are the council's, from its November 2025 release. Kingston Road has by far the most spaces, 50, and Boundary Street in Queenstown has 15; most of the others take three to ten vehicles, so the small sites fill early in summer. The council describes the sites as marked spaces inside car parks, and you keep your vehicle, equipment and belongings inside the marked space.",
        "Allenby Place car park in Wānaka has been taken out of use. The council banned freedom camping there from 23 January 2026 because of access and health and safety problems caused by extra traffic unique to the layout of the area, and put three temporary spaces at the Wānaka Recreation Centre instead. The council's consultation proposes raising the Recreation Centre from 18 to 21 spaces.",
      ], ["Kingston Road has the most spaces", "Small car parks fill early", "Allenby Place is out of use"], {
        caption: "The council's list of designated freedom camping car parks from its media release of 28 November 2025; Allenby Place was removed in January 2026. Facilities are not stated in the release.",
        head: ["Car park", "Town", "Spaces"],
        rows: [
          ["Boundary Street", "Queenstown", "15"],
          ["Gorge Road", "Queenstown", "2"],
          ["Industrial Place", "Queenstown", "6"],
          ["Lakeview", "Queenstown", "10"],
          ["Gray Street", "Frankton", "4"],
          ["Queenstown Events Centre", "Frankton", "9"],
          ["Howards Drive", "Lake Hayes", "3"],
          ["Hansen Place", "Arrowtown", "3"],
          ["Gibbston Highway and State Highway 6", "Gibbston", "2"],
          ["Glenorchy Domain", "Glenorchy", "3"],
          ["Kingston Road and State Highway 6", "Kingston", "50"],
          ["Wānaka Recreation Centre", "Wānaka", "18 (21 proposed)"],
          ["Beacon Point Road", "Wānaka", "3"],
          ["Allenby Place", "Wānaka", "3 (removed from use in January 2026)"],
          ["Camp Hill Road", "Hāwea", "10"],
        ],
      }),
      s("What is prohibited", [
        "Freedom camping is prohibited in urban areas, which the council says includes on-road parking spaces. That leaves the 15 car parks as the council's places for it. Land that is not the council's is a separate question, because DOC and other agencies set their own rules for the land they manage.",
        "The council's proposed amendments cover Allenby Place and Beacon Point Road in Wānaka as well as the Recreation Centre. The consultation closed on 31 August 2026, oral submissions are on 27 and 28 October, and deliberations and adoption are on 17 December 2026. Until the council decides, the 2025 bylaw's list stands, but a summer change could be in force during the busiest weeks.",
      ], ["Urban areas are prohibited", "Beacon Point Road is in the consultation", "Decision due 17 December 2026"]),
      s("Fines in Queenstown Lakes", [
        "The council says breaching the bylaw or the Freedom Camping Act starts at $400. That matches the national schedule, in which camping in breach of a bylaw restriction or in a non-certified vehicle where it is required is $400, a missing warrant card is $200, and damaging the area or depositing waste is $800. Check the council's page for the current patrol arrangements.",
        "There is no booking, permit or nightly fee for the marked spaces; they are free and first come, first served. The council's contacts for a freedom camping problem are 03 441 0499 in Queenstown and 03 443 0024 in Wānaka for urgent issues at any hour, and services@qldc.govt.nz or the Snap Send Solve app for less urgent ones. The council also publishes a Responsible Camping Map on its site, which is the place to confirm where each car park is.",
      ], ["$400 is the usual fee", "Marked spaces are free", "Use the council's Responsible Camping Map"]),
      s("DOC land and campsites around the lakes", [
        "DOC runs the conservation land around Queenstown, Glenorchy and Wānaka, and its notices are not council bylaws. KiwiCamping's DOC data (11 August 2026) holds 29 current DOC freedom camping notices in the Wakatipu district, 21 of them prohibiting camping and 8 restricting it, and those notices are on the freedom camping hub for Wakatipu. Seven require self-contained vehicles only. The data also lists 30 DOC campsites in Otago, 16 of them bookable online through DOC, with adult nightly rates listed from $5 to $42.",
        "Where the council car parks are full, DOC's Otago campsites and the district's holiday parks are the next step. The guide to DOC campsites explains how to book them, and the holiday parks guide covers the rest. Glenorchy is the usual base for the Routeburn and Greenstone tracks, whose Great Walk campsites and huts are booked through DOC, as the Routeburn guide explains.",
      ], ["29 DOC notices in Wakatipu", "Book DOC campsites through DOC", "Routeburn and Greenstone start near Glenorchy"]),
      s("Using KiwiCamping around Queenstown", [
        "KiwiCamping lists DOC campsites and huts near Queenstown, Glenorchy and Wānaka with the facilities and fee notes DOC publishes, and its filters narrow them to places with toilets or water. The council's 15 car parks are not in the app, so use the council's map and the sign on the night. Place details, saved places and guides are held on the phone and open without signal; map tiles, routing, weather and photos need a connection.",
        "Council car parks fill, so a trip around the lakes works best with a fallback saved against each night. Put the DOC campsite or holiday park beside each stop, add dates, and the trip lays out the drive between legs with a forecast per place. Free to download, with in-app purchases.",
      ], ["Save a fallback for each night", "Council car parks are not in the app", "Core place details work offline"], undefined, true),
    ],
    sources: [
      { label: "Queenstown Lakes District Council: responsible camping", url: "https://www.qldc.govt.nz/responsible-camping" },
      { label: "Queenstown Lakes District Council: bylaws", url: "https://www.qldc.govt.nz/bylaws" },
      { label: "Queenstown Lakes District Council media release, 28 November 2025 (republished by Scoop)", url: "https://www.scoop.co.nz/stories/AK2511/S00773.htm" },
      { label: "Queenstown Lakes District Council media release, 16 January 2026: Allenby Place (republished by Scoop)", url: "https://www.scoop.co.nz/stories/AK2601/S00314.htm" },
      { label: "Queenstown Lakes District Council: proposed amendments to the Freedom Camping Bylaw 2025", url: "https://letstalk.qldc.govt.nz/proposed-amendments-fc-bylaw-2025?tool=qanda" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
    ],
  }),

  a({
    slug: "freedom-camping-tauranga-2026",
    publishAt: "2026-11-22",
    title: "Freedom Camping in Tauranga 2026: Where You Can Stay",
    description: "Tauranga's Freedom Camping Bylaw: certified self-contained vehicles only, 25 reserves with space and day limits, two nights per location per month, prohibited areas at Mount Maunganui and Papamoa, and fines.",
    category: "Rules & safety",
    region: "Bay of Plenty",
    places: ["Tauranga", "Mount Maunganui", "Papamoa", "Greerton", "Matua", "Waikareao"],
    imageAlt: "The long white beach at Mount Maunganui with the forested mountain behind and a building on the foreshore",
    related: ["freedom-camping-rules-new-zealand", "self-contained-campervan-green-warrant", "new-years-eve-summer-event-camping-new-zealand", "holiday-parks-new-zealand-guide"],
    hubs: ["camping/bay-of-plenty"],
    intro:
      "Tauranga lets you freedom camp only in a certified self-contained vehicle, and only in the reserves, roads and car parks its bylaw lists. You can stay two nights per location per calendar month, and the council says all 25 of its reserves have limits on spaces and days. The bylaw covers council land in Tauranga city, Mount Maunganui and Papamoa. DOC, NZTA and LINZ land fall outside the bylaw.",
    sections: [
      s("The bylaw and the vehicle rule", [
        "Tauranga's rules sit in its Freedom Camping Bylaw 2019, which came into force on 1 July 2019, was amended in 2023 and carries a review date of 2028. It applies only to land the council owns and controls. Freedom camping is permitted only in the places in Schedule 1, which means the default is no, and the council's page puts it plainly: if you do not have a self-contained vehicle with the necessary certification, you will need to find a campground.",
        "The bylaw defines a self-contained vehicle by its certificate of self-containment under the Plumbers, Gasfitters, and Drainlayers Act 2006, and the council's page refers to the Self-contained Motor Vehicles Legislation Act 2023. Since 7 June 2026 a blue warrant no longer qualifies a vehicle under the national rules, so the warrant on the windscreen needs to be a green one. Roads with a speed limit of 50 km/h or less are allowed under conditions that include parking inside a marked parking space and not directly outside a home or business on the same side of the road.",
      ], ["Council land only", "Green warrant needed", "Stay inside a marked parking space on roads"]),
      s("The 25 reserves and how many vehicles each takes", [
        "The council's table gives a vehicle limit for each of the 25 reserves, adding up to 99 vehicles across the whole city, so the smaller sites hold only two or three. Five reserves allow camping only from 7pm on Sunday to 10am on Friday: Fergusson Park, Gordon Spratt Reserve, Greerton Park, Pemberton Park and Waipuna Park. Mount Greens car park in Mount Maunganui is the largest at 10 vehicles, and it asks vehicles to fit within a marked parking space from 7am to 8pm.",
        "The council also says that if the designated area is inaccessible for any reason, you may not park nearby to freedom camp. Gate-lock hours vary by season at several reserves, so the council's page table is the place to check the closing time for the one you want. The council's interactive map shows the sites and dump stations; zoom in on it before you arrive.",
      ], ["99 vehicles across the 25 reserves", "Five reserves are Sunday evening to Friday morning only", "A closed site is not a reason to park nearby"], {
        caption: "The vehicle limits in Schedule 1 of the Tauranga Freedom Camping Bylaw, which the council's page table matched on 21 October 2026. Facilities are not listed in the bylaw text.",
        head: ["Reserve", "Vehicles", "Restriction"],
        rows: [
          ["Beach Road Reserve", "2", "None stated"],
          ["Cambridge Park", "6", "None stated"],
          ["Carlton Street Reserve", "8", "None stated"],
          ["Fergusson Park", "3", "7pm Sunday to 10am Friday only"],
          ["Gordon Spratt Reserve", "8", "7pm Sunday to 10am Friday only"],
          ["Graham Park", "3", "None stated"],
          ["Greerton Park", "6", "7pm Sunday to 10am Friday only"],
          ["Harrison's Cut", "2", "None stated"],
          ["Kulim Park", "2", "None stated"],
          ["Marine Park 1", "8", "None stated"],
          ["Marine Park 2", "3", "None stated"],
          ["Matua Saltmarsh", "3", "None stated"],
          ["Maxwells Road Esplanade", "2", "Sealed car park at the Ngatai Road end only"],
          ["Memorial Park", "6", "None stated"],
          ["Mitchell Park", "2", "None stated"],
          ["Motiti Reserve", "2", "None stated"],
          ["Mount Greens car park, Kawaka Street", "10", "Within a marked space from 7am to 8pm"],
          ["Pemberton Park", "2", "7pm Sunday to 10am Friday only"],
          ["Rotary Park", "3", "None stated"],
          ["Stella Place", "3", "None stated"],
          ["Taylor Reserve", "2", "None stated"],
          ["Tye Park", "2", "None stated"],
          ["Waikareao Foreshore", "3", "None stated"],
          ["Waipuna Park", "4", "7pm Sunday to 10am Friday only"],
          ["Whareroa Reserve", "4", "None stated"],
        ],
      }),
      s("Nights and the monthly limit", [
        "The limit is two nights in any one location per calendar month, and the council's page adds that you can visit other permitted locations. That is different from a rolling window: a two-night stay at Marine Park in the last days of a month does not stop you returning there when the new month starts. The bylaw's wording is a maximum period of stay of two nights per calendar month in any one park, reserve or council car park, or in any one street.",
        "Two nights at one reserve followed by two at another listed one is within that wording, provided each site has room when you arrive. With vehicle limits as low as two, it is worth choosing a second reserve, or a holiday park, before you leave the first.",
      ], ["Two nights per location per calendar month", "Other listed locations are separate", "Plan a second reserve"]),
      s("Where freedom camping is prohibited", [
        "Schedule 2 prohibits freedom camping in a long list of parks and reserves, including Anzac Park, Arataki Park, Blake Park, Dive Crescent Reserve, Omanu Beach Reserve, Papamoa Domain, Sulphur Point and Tauranga Domain. It also prohibits it on all roads over 50 km/h and on The Mall, Pilot Bay and Marine Parade at Mount Maunganui, on Turret Road, on service lanes and in several named car parks. The council's own page adds Maunganui Road car park, Shadelands Lane, the foreshore side of Harbour Drive and Omanu Surf Club car park to the places you cannot park overnight.",
        "The council-owned Mount Maunganui Beachside Holiday Park is closed after the January 2026 Mauao landslide. The council's notices are the place to check whether any freedom camping reserve near the mountain is affected. Alcohol bans also apply in Mount Maunganui and Papamoa over summer; the New Year's Eve guide covers them.",
      ], ["Marine Parade and Pilot Bay are prohibited", "Beachside Holiday Park is closed", "Alcohol bans are a separate rule"]),
      s("Fines and what Tauranga says about them", [
        "The council states that infringement fees are set by the New Zealand Government and that it may also prosecute. The national schedule puts most freedom camping breaches at $400, including camping in a restricted or prohibited place and using a vehicle that is not self-contained where it is required. A missing warrant card costs $200, and $800 applies where you damage the area or leave waste in or on it.",
        "The details that matter are the marked space at the car parks and the council's rule that a closed designated area does not allow you to camp nearby instead. Photograph the sign when you arrive, because it is the evidence if a notice is disputed.",
      ], ["$400 for most breaches", "$800 for damage or waste", "Photograph the sign on arrival"]),
      s("DOC land near Tauranga", [
        "The bylaw does not apply to DOC land, which the council says it does not control. KiwiCamping's DOC data (11 August 2026) lists 8 DOC campsites in the Bay of Plenty, 5 of them bookable online through DOC, with adult nightly rates listed from $10 to $18 and Matatā Campsite the largest. The hubs for the region list them, and the DOC campsites guide covers how to book.",
        "If you want a powered site with showers, the region's holiday parks and motor camps are the practical option, and the holiday parks guide explains how to book them. The choice is then between a limited reserve space and a paid site with facilities.",
      ], ["8 DOC campsites in the Bay of Plenty", "Book DOC sites through DOC", "Holiday parks need booking in summer"]),
      s("Using KiwiCamping around Tauranga", [
        "KiwiCamping shows the Bay of Plenty's DOC campsites and huts with their fees and facilities, alongside places to stay and tours that can be booked in the app. The council's 25 reserves and its prohibited-area maps are not in it, so use the council's interactive map for the reserve you want and read the sign. With no signal, the app still opens place details, saved places and guides, but map tiles, routing, weather and photos stop loading.",
        "A trip lets you connect the Bay of Plenty to the Coromandel or Rotorua. Order each night with its date and a note, put a paid fallback beside any reserve you are hoping for, and read the distance and forecast for every leg. Free to download, with in-app purchases.",
      ], ["Use the council map for reserves", "Add a paid fallback", "Core place details work offline"], undefined, true),
    ],
    sources: [
      { label: "Tauranga City Council: freedom camping", url: "https://www.tauranga.govt.nz/parks-and-recreation/travel-and-tourism/freedom-camping" },
      { label: "Tauranga City Council: Freedom Camping Bylaw 2019 (amended)", url: "https://www.tauranga.govt.nz/Portals/0/data/council/bylaws/files/freedom_camping_bylaw.pdf" },
      { label: "Tauranga City Council: Mauao landslide questions", url: "https://www.tauranga.govt.nz/council/mauao-landslide/mauao-landslide-frequently-asked-questions" },
      { label: "Tauranga City Council: alcohol-free areas", url: "https://www.tauranga.govt.nz/Permits-and-licences/Alcohol/Other-alcohol-information/Alcohol-free-areas" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
    ],
  }),

  a({
    slug: "freedom-camping-whangarei-2026",
    publishAt: "2026-11-23",
    title: "Freedom Camping in Whangārei 2026: Where You Can Stay",
    description: "Whangārei's Camping in Public Places Bylaw: 23 council sites for self-contained vehicles, 17 for vehicles without certification, five areas for tents, night limits, no-camping areas, fines and DOC campsites.",
    category: "Rules & safety",
    region: "Northland",
    places: ["Whangārei", "Whangārei Heads", "Ruakākā", "Waipū", "Tutukaka", "Ngunguru"],
    imageAlt: "Mount Manaia's rocky peaks rising above houses at Whangārei Heads",
    related: ["freedom-camping-rules-new-zealand", "self-contained-campervan-green-warrant", "northland-cape-reinga-camping-route", "kauri-dieback-camping-travel"],
    hubs: ["camping/northland"],
    intro:
      "The council lists sites for certified self-contained vehicles, for vehicles without certification and for tents. Its Camping in Public Places Bylaw covers all three, with 23 listed sites for self-contained vehicles, 17 where a vehicle without certification may stay, and five areas for tents. Most sites allow one night, a couple allow three, and the council's page lists dozens of places where nobody may camp. The bylaw covers council land; DOC, commercial campgrounds and private land are outside it.",
    sections: [
      s("The bylaw in plain terms", [
        "The Camping in Public Places Bylaw 2017 came into force on 21 October 2017, was reviewed in October 2020 and amended on 26 February 2021, and has further amendments that took effect on 7 June 2025 to line it up with the national self-contained vehicle law. The council's page says it does not apply to DOC land, commercial campgrounds or privately owned public spaces such as supermarket car parks. The bylaw's general rule lets you camp with a tent or a self-contained vehicle in any council area that is not prohibited or restricted, while the council's page is more specific about where each type of camper can actually stay.",
        "A motor vehicle that is not self-contained can camp only at the sites the schedules list, and in the 23 listed sites a self-contained vehicle must use the designated site or marked spaces. Only one motor vehicle is allowed per marked space, and no effluent tank may be emptied in a public toilet. The bylaw requires the warrant card to be displayed. Under the national rules a blue warrant stopped counting on 7 June 2026.",
      ], ["Council land only", "One vehicle per marked space", "Never empty tanks in public toilets"]),
      s("The council's sites and nights", [
        "The council's table gives each site's area, spaces and nights, and the spaces are mostly approximate: around four at a typical bay, six to ten at Ruakākā and Marsden Bay, about 15 at Parua Bay. The bylaw's default for a designated site is one night in any four-week period unless the schedule says otherwise, and the table shows three nights only at Bascule car park in Whangārei and at Parua Bay. Outside the listed sites, the council's page says you can stay a maximum of three nights in any other public place that is not prohibited, then must move at least one kilometre and not return for four weeks.",
        "Two sports parks work on a season instead: Onerahi sportspark and Tikipunga sportspark allow camping from 18 December to Northland or Auckland Anniversary Day each year, and the page gives neither a space count nor a night limit. A.H. Reed Memorial Park is on the list but is temporarily prohibited, because kauri dieback disease was found there, and Ocean Beach's grass overflow car park is permanently closed to camping.",
      ], ["One night is the usual limit", "Three nights at Bascule and Parua Bay only", "A.H. Reed Park is closed to camping for kauri dieback"], {
        caption: "The council's table of sites for self-contained vehicles, read on its freedom camping page on 21 October 2026. Spaces are as the council states them, and many are approximate.",
        head: ["Site", "Area", "Spaces", "Nights"],
        rows: [
          ["Bascule car park, Port Road", "Whangārei", "8 marked", "3"],
          ["Tarewa i-Site, Tarewa Road", "Whangārei", "6 marked, small vehicles", "1"],
          ["Hatea East car park, Riverside", "Whangārei", "Not stated", "Not stated"],
          ["Otuihau / Whangārei Falls scenic reserve", "Tikipunga", "4 marked", "1"],
          ["Tikipunga sportspark", "Tikipunga", "Not stated", "18 December to Anniversary Day"],
          ["Beach Road reserve", "Onerahi", "Around 4", "1"],
          ["Onerahi sportspark", "Onerahi", "Not stated", "18 December to Anniversary Day"],
          ["Kowharewa Bay", "Whangārei Heads", "Around 4", "1"],
          ["Manaia Walkway car park", "Whangārei Heads", "2 to 3", "1"],
          ["Ocean Beach car park", "Whangārei Heads", "Around 4", "1"],
          ["Reotahi", "Whangārei Heads", "Up to 3", "1"],
          ["Sandy Bay, toilet block car park", "Sandy Bay", "Around 4", "1"],
          ["Parua Bay", "Parua Bay", "Around 15", "3"],
          ["Tamaterau", "Tamaterau", "2 to 3", "1"],
          ["Marsden Bay Reserve", "Marsden Point", "Around 8 to 10", "1"],
          ["One Tree Point boat ramp car park", "One Tree Point", "4 sites", "1"],
          ["Ruakākā Beach reserve", "Ruakākā", "Around 6", "1"],
          ["Waipū Caves", "Waipū", "Many", "1"],
          ["Matapouri, Wehiwehi Road", "Matapouri", "Around 4", "1"],
          ["Ngunguru Library, Ngunguru Road", "Ngunguru", "As many as can fit safely", "1"],
          ["Wellingtons Bay, Whangaumu Reserve", "Near Tutukaka", "Around 4", "1"],
          ["Woolleys Bay, western car park", "Near Tutukaka", "Around 6", "1"],
          ["A.H. Reed Memorial Park, Whareora Road", "Whangārei", "2 marked, but temporarily prohibited", "1"],
        ],
      }),
      s("Tents and vehicles without certification", [
        "The council's page says a vehicle or caravan that is not certified as self-contained may camp at the locations it lists: A.H. Reed Memorial Park, Bascule car park, Kowharewa Bay, Manaia Walkway car park, Marsden Bay Reserve, Matapouri Wehiwehi Road, Ngunguru Library, Ocean Beach car park, One Tree Point boat ramp car park, Parua Bay, Reotahi, Sandy Bay, Tamaterau, Tarewa i-Site, Waipū Caves, Wellingtons Bay and Woolleys Bay's western car park, though A.H. Reed is currently closed to camping.",
        "For tents the page says there are five areas on public land: Parua Bay for about 15 tents and up to three nights, Reotahi for up to three tents and one night, Sandy Bay for about four tents and one night, Tamaterau for four to five tents and one night, and Waipū Caves for many tents and one night. Where one night is allowed, plan to be packed up and gone the next morning.",
      ], ["17 sites for vehicles without certification", "Five areas for tents", "One night means moving on the next day"]),
      s("Where nobody may camp", [
        "The council's \"no camping\" list covers coastal places such as Bland Bay Reserve, Helena Bay, Langs Beach, Marsden Point Wharf, Moureeses Bay, Ruakākā Recreation Grounds, Tutukaka Marina Reserve, Whananaki Mangaiti Reserve and Woolleys Bay's eastern car park, plus urban and rural sites including Drummond Park at Parihaka, Whau Valley Dam, Mander Park and Onerahi Beach Reserve. The page gives no total for them.",
        "Woolleys Bay shows how close the two lists sit: the western car park is a council site and the eastern car park is on the no-camping list. Check the sign and the council's online map before you commit to a stretch of coast. The council can also close any site temporarily, for up to 14 days under the bylaw, and the page says a freedom camping ambassador can confirm whether a spot is allowed.",
      ], ["Woolleys Bay: west yes, east no", "The council can close a site for 14 days", "Ask the freedom camping ambassador"]),
      s("Fines and the council's contact", [
        "The bylaw says the penalties in section 20E of the Freedom Camping Act apply to camping in breach of it, with an explanatory note that the penalty is $400 or any other amount in the regulations. Under the national schedule most breaches cost $400, a missing warrant card costs $200 and damage or waste costs $800. The council's page also says you can be fined under the Reserves Act, and that you can apply in writing for a waiver at least 20 working days ahead.",
        "To ask about a site or report a problem, the council's number is 09 430 4200, with a freephone line on 0800 932 463, and its page has an online form for reporting a freedom camping issue. The page lists no freedom camping fees, permits or bookings for the sites.",
      ], ["$400 is the standard fee", "Waivers need 20 working days", "The sites have no listed fee"]),
      s("DOC campsites and holiday parks in Northland", [
        "DOC and the council are different landlords, and the bylaw covers only the council's. KiwiCamping's DOC data (11 August 2026) lists 14 DOC campsites in Northland, 11 bookable online through DOC, with adult nightly rates from $10 to $23 and Uretiti Beach Campsite the largest. The council's page points travellers to DOC campgrounds, the DOC Campsite Pass for savings at many of them, and the holiday parks listed on the Northland tourism site.",
        "For a powered site or a night with showers, the holiday parks guide covers how to book one, and the DOC campsites guide explains DOC's fees and booking rules. The Northland road trip guide ties the Whangārei sites to the rest of the route north.",
      ], ["14 DOC campsites in Northland", "Book DOC sites through DOC", "Holiday parks cover powered sites"]),
      s("Using KiwiCamping around Whangārei", [
        "KiwiCamping covers Northland's DOC campsites and huts with fees and facilities, plus holiday parks and tours that can be booked in the app. The council's sites and its no-camping list are not in the app, so use the council's online map and the signs for those. Place details, saved places and guides load from the phone without signal, whereas map tiles, routing, weather and photos need a connection.",
        "On a Northland route, save a council site and a paid campground for the same night, line the nights up with dates and notes, and check the forecast for each leg in the trip. Free to download, with in-app purchases.",
      ], ["Save a council site and a paid campground", "Use the council's map for sites", "Core place details work offline"], undefined, true),
    ],
    sources: [
      { label: "Whangārei District Council: freedom camping", url: "https://www.wdc.govt.nz/Community/Parks-and-recreation/Freedom-camping" },
      { label: "Whangārei District Council: Camping in Public Places Bylaw 2017 (amended)", url: "https://www.wdc.govt.nz/files/assets/public/documents/council/bylaws/amended-camping-in-public-places-bylaw-2017.pdf" },
      { label: "Freedom Camping Act 2011", url: "https://www.legislation.govt.nz/act/public/2011/0061/latest/whole.html" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
    ],
  }),

  a({
    slug: "freedom-camping-southland-2026",
    publishAt: "2026-11-25",
    title: "Freedom Camping in Southland 2026: Where You Can Stay",
    description: "Southland District Council's Freedom Camping Bylaw: designated sites in small towns, seven nights in 30 days by default, no council site listed at Te Anau, Manapouri, Riverton or Tuatapere, fines and DOC alternatives.",
    category: "Rules & safety",
    region: "Southland",
    places: ["Te Anau", "Manapouri", "Riverton", "Tuatapere", "Curio Bay", "Winton"],
    imageAlt: "Lake Te Anau with a forested shore and Fiordland mountains under broken cloud",
    related: ["freedom-camping-rules-new-zealand", "self-contained-campervan-green-warrant", "fiordland-camping-road-trip", "doc-campsites-new-zealand-guide"],
    hubs: ["freedom-camping/te-anau", "camping/fiordland", "camping/southland"],
    intro:
      "Southland District Council lets certified self-contained vehicles stay at designated sites in small towns such as Winton, Dipton and Riversdale, but its list of freedom camping locations has no entry for Te Anau, Manapouri, Riverton or Tuatapere. The 2015 bylaw maps for those four towns mark them camping prohibited, and urban zones are prohibited district-wide. The default stay at a designated site is seven nights in any 30 days. The council is reviewing the bylaw, with formal consultation planned for late 2026, so the sites and limits below may change.",
    sections: [
      s("What the 2015 bylaw says", [
        "The Freedom Camping Bylaw 2015 came into force on 12 December 2015. It says any person may freedom camp in any local authority area unless it is restricted or prohibited, and its first schedule prohibits camping in urban zones, council-controlled car parks and boating areas, playgrounds, sports grounds, cemeteries, walking tracks and signposted lookouts. The council's page says most towns have designated sites for self-contained camping, and that some towns have sites that permit all types of camping.",
        "The bylaw's general limit is a maximum of seven nights in any 30-day period unless the schedule sets another period, and it says you must not freedom camp in any local authority area for more than one month in any three months. The 2015 text defines a self-contained vehicle by the older NZS 5465:2001 warrant, and the council's page says a current self-contained warrant must be displayed in the window. The national rule has changed since: a blue warrant stopped counting on 7 June 2026, so a green warrant is the one to carry.",
      ], ["Seven nights in 30 days by default", "Urban zones are prohibited", "A green warrant is the current standard"]),
      s("Te Anau, Manapouri, Riverton and Tuatapere", [
        "The council's camping locations list has no page for any of the four towns that visitors most often ask about, and the bylaw's township maps for Te Anau, Manapouri, Riverton and Tuatapere show them shaded as camping prohibited. The council's map does list toilets and dump stations in those towns, but those are facilities rather than camping sites. If you are heading for Milford Sound, the practical options near Te Anau are the town's campgrounds and holiday parks and DOC's Fiordland campsites.",
        "These maps are image files in the bylaw, so the council's interactive map is the place to confirm a boundary. DOC's freedom camping notices cover conservation land in the same area: KiwiCamping's DOC data (11 August 2026) holds 24 current notices in the Te Anau district, all of them prohibiting camping, including Patience Bay on the Milford Road, and the hub for the district lists them.",
      ], ["No council site is listed for these four towns", "Use the interactive map to confirm a boundary", "DOC notices cover the Milford Road"]),
      s("The designated sites and their rules", [
        "The council's location pages give a rule and a stay for each site, summarised in the table. Most sites accept certified self-contained vehicles only, and the council says camping in tents, cars, and vehicles or caravans that are not certified self-contained is not allowed at those sites. Dunsdale, Monkey Island at Orepuki and Thornbury allow non-self-contained camping, and Haldane, Lumsden and the Otautau Arboretum are shown as green areas.",
        "The stays vary widely: seven days in any 30 at Winton, Dipton and Riversdale, two days in any 30 at Colac Bay and one night at Waikawa and Mandeville. Dunsdale closes for winter from late April until late September or October depending on ground conditions, and the Fortrose blue site is open to self-contained vehicles only from 1 August to 30 November. Curio Bay is a camping ground rather than a freedom camping site, and the council's page says it was temporarily closed for maintenance when read.",
      ], ["Stays range from one night to 28 days a year", "Dunsdale closes in winter", "Curio Bay is a camping ground"], {
        caption: "The council's freedom camping location pages, read on 21 October 2026. Per-site vehicle counts are published only on the council's map.",
        head: ["Site", "Vehicle rule", "Stay"],
        rows: [
          ["Balfour", "Certified self-contained only", "Not stated"],
          ["Browns", "Certified self-contained only", "7 days in any 30"],
          ["Colac Bay / Oraka", "Certified self-contained only", "2 days in any 30"],
          ["Dipton", "Certified self-contained only", "7 days in any 30"],
          ["Dunsdale", "Non-self-contained allowed", "3 days in any 30; closed in winter"],
          ["Edendale", "Certified self-contained only", "7 days in any 30; dump station"],
          ["Fortrose", "Blue site self-contained only, 1 August to 30 November; green site", "2 days in any 30 at the green site"],
          ["Haldane", "Green area", "28 days per calendar year"],
          ["Limehills / Centre Bush", "Certified self-contained only", "7 days in any 30"],
          ["Lumsden", "Green area", "7 days in any 30"],
          ["Mandeville, Taylor Park", "Certified self-contained only", "1 night in any 30"],
          ["Nightcaps", "Certified self-contained only", "28 days per year"],
          ["Orepuki, Monkey Island", "Non-self-contained allowed", "28 days per year; no drinking water"],
          ["Otautau", "Blue site self-contained only; green site at the Arboretum", "4 days in any 30; dump station"],
          ["Riversdale", "Certified self-contained only", "7 days in any 30"],
          ["Thornbury", "Non-self-contained allowed", "28 days per year"],
          ["Waikaia", "Certified self-contained only", "7 days in any 30"],
          ["Waikawa", "Certified self-contained only", "1 night in any 30"],
          ["Winton", "Certified self-contained only", "7 days in any 30"],
          ["Wyndham", "Certified self-contained only", "7 days in any 30; council camping ground nearby"],
        ],
      }),
      s("Generators, fires, dogs and consent", [
        "The council's page asks you to limit generator use to between 8am and 9pm, says open fires are prohibited except in a safe fire facility the council provides, and says dogs must be on a leash. The council's location list names dump stations at Edendale, Otautau and Manapouri. The council's bylaw lets you apply for prior consent to camp where it is otherwise restricted, at least 10 days in advance.",
        "Penalties are those in the national regulations: $400 for most breaches, such as camping in a prohibited area or in a vehicle that is not self-contained where it is required, $200 for failing to display a warrant card, and $800 for damaging the area or depositing waste. The page lists no fee to stay at the sites and no freedom camping phone number, so the council's email address, sdc@southlanddc.govt.nz, is the contact it publishes.",
      ], ["Generators 8am to 9pm", "Fires only in council facilities", "Prior consent needs 10 days"]),
      s("DOC campsites and the Fiordland side", [
        "Most of what travellers come to Southland for is on DOC land, which the bylaw does not cover. KiwiCamping's DOC data (11 August 2026) lists 13 DOC campsites in Fiordland, 10 of them bookable online through DOC, with adult nightly rates listed from $10 to $42 and Cascade Creek Campsite the largest, and 5 in Southland, all bookable online, with rates from $6 to $28 and Mavora Lakes Campsite the largest.",
        "The Kepler and Milford Great Walks are in Fiordland National Park, the Routeburn runs into it, and the Rakiura Track is on Stewart Island, so the Great Walks guide has the huts, campsites and booking rules. The Fiordland road trip guide covers the drive between Te Anau and Milford, and the holiday parks guide covers the paid options in town.",
      ], ["13 DOC campsites in Fiordland", "5 in Southland, all bookable", "Great Walks are booked through DOC"]),
      s("Using KiwiCamping in Southland", [
        "KiwiCamping shows Fiordland and Southland's DOC campsites and huts with their fees and facilities, plus holiday parks and tours you can book in the app. The council's site list is not in it, so use the council's map and the sign at Winton, Dipton or any other council site. The phone keeps place details, saved places and guides for use offline, while map tiles, routing, weather and photos depend on reception.",
        "Save a DOC campsite or a Te Anau holiday park for each night you hope to spend near the mountains, order them in a trip with dates, and check the forecast on each leg. Free to download, with in-app purchases.",
      ], ["Save a Te Anau fallback", "Use the council map for council sites", "Core place details work offline"], undefined, true),
    ],
    sources: [
      { label: "Southland District Council: freedom camping", url: "https://southlanddc.govt.nz/services/freedom-camping/" },
      { label: "Southland District Council: freedom camping locations", url: "https://southlanddc.govt.nz/services/freedom-camping/freedom-camping-locations/" },
      { label: "Southland District Council: Freedom Camping Bylaw 2015", url: "https://southlanddc.govt.nz/assets/Bylaws-policies-and-strategies/bylaws/Freedom-Camping-Bylaw-2015.pdf" },
      { label: "Southland District Council: Freedom Camping Bylaw review", url: "https://southlanddc.govt.nz/make-it-stick/under-review/freedom-camping-bylaw-review/" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
    ],
  }),

  a({
    slug: "freedom-camping-new-plymouth-2026",
    publishAt: "2026-11-26",
    title: "Freedom Camping in New Plymouth 2026: Where You Can Stay",
    description: "New Plymouth's Freedom Camping Bylaw 2024: tents banned, certified self-contained vehicles three nights in 30 days, two six-space sites for vehicles without certification, banned areas, fines and nearby campgrounds.",
    category: "Rules & safety",
    region: "Taranaki",
    places: ["New Plymouth", "Waitara", "Oakura", "Urenui", "Lake Rotomanu", "Fitzroy"],
    imageAlt: "Mount Taranaki rising behind plumes of tall grass under a blue sky",
    related: ["freedom-camping-rules-new-zealand", "self-contained-campervan-green-warrant", "camping-wastewater-rubbish-new-zealand", "holiday-parks-new-zealand-guide"],
    hubs: ["freedom-camping/new-plymouth"],
    intro:
      "New Plymouth bans tents on public land, and only certified self-contained vehicles may freedom camp across the district, for up to three nights in any 30-day period. Vehicles without certification have just two council sites, Lake Rotomanu in New Plymouth and Battiscombe Terrace in Waitara, each with six marked spaces and a one-night limit in 30 days. The council's Freedom Camping Bylaw 2024 came into force on 6 December 2024. The bylaw covers council land; DOC land is separate.",
    sections: [
      s("The Freedom Camping Bylaw 2024", [
        "The council adopted its bylaw on 5 November 2024 and it came into force on 6 December 2024, with the next review due by 5 November 2034. Its general rule is that a person may freedom camp in a self-contained motor vehicle in any local authority area, excluding the two restricted areas for vehicles without certification and the prohibited areas. The definition is a valid certificate of self-containment under the Plumbers, Gasfitters, and Drainlayers Act 2006, and the bylaw cites the transitional periods for older certification.",
        "A blue warrant stopped counting under the national rules on 7 June 2026, so a green warrant is needed. The Reserves Act generally prohibits camping in reserves, which the bylaw notes. The limits are also tied to the vehicle's certified occupancy, so a party larger than the vehicle's certificate allows is outside the rule even where camping is permitted.",
      ], ["Tents are banned", "Green warrant needed", "Certified occupancy limits the party"]),
      s("Three nights for self-contained vehicles", [
        "The council's page and the bylaw both say a certified self-contained vehicle may stay a maximum of three nights in any 30-day period at any single location. The bylaw words it as three periods of up to 24 hours in a 30-day period, and it treats the same location as anywhere within 500 metres. The conditions are to park legally, light no fires, follow the District Plan's noise rules and avoid preventing legitimate activities in the area.",
        "The council's page and bylaw give no arrival or departure times, and no per-site vehicle counts for general freedom camping. It lets you apply in writing for a dispensation at least 20 working days before you want to camp, with a decision five working days before the date. The permit fee is not published.",
      ], ["Three nights in 30 days per location", "Same location means within 500 m", "No fires"]),
      s("Tents and vehicles that are not self-contained", [
        "The bylaw says a person must not freedom camp in any local authority area in tents or other temporary structures, and the council's page says camping in tents on public land is banned in the district. Tent campers need a campground. Vehicles that are not self-contained are allowed only at the restricted areas in Schedule 2, which are Lake Rotomanu in New Plymouth and Battiscombe Terrace in Waitara.",
        "Each of the two has six marked spaces, first come, first served, and a maximum of one night in any 30-day period, within 500 metres counting as the same area. The bylaw's guidance lists a public toilet at Battiscombe Terrace, but the council does not say what Lake Rotomanu has. Battiscombe Terrace also appears on the prohibited list and the restricted list in the bylaw's maps, so confirm the marked spaces on the council's map before you rely on them.",
      ], ["Two sites for vehicles without certification", "Six marked spaces at each", "Check the maps for Battiscombe Terrace"], {
        caption: "The two restricted areas in Schedule 2 of the New Plymouth Freedom Camping Bylaw 2024, and the council's page, read on 21 October 2026.",
        head: ["Site", "Town", "Spaces", "Who may stay", "Nights"],
        rows: [
          ["Lake Rotomanu", "New Plymouth", "6 marked", "Vehicles that are not self-contained", "1 in any 30 days"],
          ["Battiscombe Terrace", "Waitara", "6 marked", "Vehicles that are not self-contained", "1 in any 30 days"],
        ],
      }),
      s("Where freedom camping is banned", [
        "The council's banned areas list covers Fitzroy Beach car park, Back Beach's bottom car park, Oakura beach front, Waiwhakaiho River mouth, East End Beach, Kawaroa Park, Corbett Park in Oakura, Fort St George, parts of Tongaporutu and Greenwood Road, Weld Road, Ahu Ahu Road and Motukari Reserve car park. DOC has also prohibited freedom camping at the North Taranaki Visitor Centre car park from 19 December 2025, which is a DOC decision rather than a council one.",
        "The council's lists have no freedom camping site at Oakura or Urenui, and it names a holiday park or beach camp in each. Dump stations are free: the council lists BP Powderham on Powderham Street for grey water only, Mobil at Leach and Eliot streets for grey water only, and the AA Vehicle Testing Station on Swans Road in Bell Block and the Rifle Range Road site opposite Downer for black and grey.",
      ], ["Fitzroy and Back Beach are banned", "DOC closed its visitor centre car park", "Dump stations are free"]),
      s("Fines and the council's contact", [
        "The council says campers who do not comply with the bylaw are liable to a $400 fine, which matches the national fee for camping in breach of a bylaw or in a vehicle that is not self-contained where it is required. A missing warrant card is $200, and $800 applies to damage or waste. The council lists no camping fee, booking or paid freedom site.",
        "The council's number is 06 759 6060 and its email is enquiries@npdc.govt.nz, and its page says enforcement officers may move campers on. The council gives no patrol schedule.",
      ], ["$400 is the standard fee", "No freedom camping fee", "Officers may move you on"]),
      s("Campgrounds the council names, and DOC land", [
        "The council's guidance names Urenui Beach Camp, Onaero Beach Holiday Park, Marine Park Motor Camp in Waitara, New Plymouth Top 10 Holiday Park, Fitzroy Beach Holiday Park, Belt Road Seaside Holiday Park and Oakura Beach Holiday Park, and points tent campers to the Venture Taranaki site and CamperMate. The holiday parks guide explains how to book.",
        "KiwiCamping's DOC data (11 August 2026) lists no DOC campsites in the Taranaki region, and 8 DOC huts. DOC's freedom camping notices for the district are on the hub, which shows 22 current notices, 13 prohibiting camping and 9 restricting it. Those are DOC notices on conservation land rather than council bylaws.",
      ], ["Seven campgrounds named by the council", "DOC lists no Taranaki campsites in the app", "22 DOC notices in the district"]),
      s("Using KiwiCamping around New Plymouth", [
        "KiwiCamping lists Taranaki's DOC huts and tracks with the facilities and fee notes DOC publishes, and holiday parks and tours you can book in the app. It does not show the council's two restricted sites, the banned areas or the dump stations the council lists, so use the council's page for those. Reading place details, saved places and guides does not need signal; loading map tiles, routing, weather and photos does.",
        "A trip can place New Plymouth between the Forgotten World Highway and the Waikato or Manawatū, with a paid campground saved beside each stop and a forecast shown for every place. Free to download, with in-app purchases.",
      ], ["Use the council page for sites and dump stations", "Save a paid campground beside each stop", "Core place details work offline"], undefined, true),
    ],
    sources: [
      { label: "New Plymouth District Council: freedom camping", url: "https://www.npdc.govt.nz/leisure-and-culture/freedom-camping/" },
      { label: "New Plymouth District Council: Freedom Camping Bylaw 2024", url: "https://www.npdc.govt.nz/media/loklku2f/ecm_9391100_v1_freedom-camping-bylaw-2024.pdf" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
    ],
  }),

  a({
    slug: "freedom-camping-waitaki-2026",
    publishAt: "2026-11-28",
    title: "Freedom Camping in Waitaki 2026: Where You Can Stay",
    description: "Waitaki's Responsible Freedom Camping Bylaw: certified self-contained vehicles only, three nights in four weeks, no designated sites, prohibited areas in Oamaru and the lakes villages, fee-paying campgrounds, fines.",
    category: "Rules & safety",
    region: "Waitaki",
    places: ["Oamaru", "Kurow", "Omarama", "Otematata", "Moeraki", "Lake Waitaki"],
    imageAlt: "Yellow poplars on a dry hillside near Lake Benmore in the Waitaki Valley",
    related: ["freedom-camping-rules-new-zealand", "self-contained-campervan-green-warrant", "christchurch-tekapo-aoraki-road-trip", "holiday-parks-new-zealand-guide"],
    intro:
      "Waitaki gives certified self-contained vehicles a general permission on council land and names no designated sites, but the Responsible Freedom Camping Bylaw prohibits camping at dozens of places in Oamaru, the lakes villages, Moeraki and the coast. You may stay three nights in any four-week period in any one area, and tents and vehicles without certification are not allowed outside the fee-paying campgrounds. The bylaw came into force on 8 December 2021. It covers council land only, so the lakes and river margins that other agencies manage are a separate question.",
    sections: [
      s("What the Waitaki bylaw allows", [
        "The Waitaki District Responsible Freedom Camping Bylaw 2021 has been in force since 8 December 2021. It permits freedom camping in any local authority area in the district unless it is prohibited or restricted, and it says no person may freedom camp except in a certified self-contained vehicle. The council's page adds that the vehicle must have a toilet, wastewater tank and rubbish facilities on board and display its certification, and that without that you need to find a campground.",
        "The council's pages still cite the older NZS 5465:2001 standard, which predates the 2023 change to self-containment certification. Under the national rules blue warrants stopped counting on 7 June 2026, so a green warrant is the one to display inside the front window. The bylaw says effluent and solid waste must go to council-approved facilities, that the vehicle must be legally parked, and that you must not restrict public access or wash dishes or clothes in public facilities.",
      ], ["Certified self-contained vehicles only", "Waste to approved facilities", "Display the green warrant"]),
      s("Three nights in four weeks", [
        "The limit is three nights in any four-week consecutive period in any one area, and the four weeks start from your first overnight stay. The bylaw and the council's pages give no arrival or departure times, no group size and no vehicle counts. There are no designated freedom camping sites, so the answer to where you can park is anywhere that is not on the prohibited or restricted lists and not private, DOC or other agency land.",
        "In residential and township zones inside a 50 km/h area, freedom camping is a restricted activity: it can happen only if the vehicle is not within a direct line of sight from a home outside which it is parked, it meets the bylaw's conditions, and the owner or occupant has given consent. The council can also grant consent to camp somewhere restricted if you apply in writing to its chief executive at least 20 working days ahead.",
      ], ["Four weeks start at your first night", "No designated sites", "Township streets need the neighbour's consent"]),
      s("Prohibited areas by town", [
        "The bylaw's second schedule prohibits camping at all times, unless the council consents in writing, at a long list of named places. In Oamaru it includes the extended harbour area, Humber Street car parks, Lookout Point, Cape Wanbrow, Bushy Beach car park, the Public Gardens, Centennial Park and Queens Reserve. At Moeraki it covers the Boulder access road, Katiki Lighthouse car park, the beach reserve and Millars Bay Reserve, and on the coast it covers Kakanui River mouth, All Day Bay and Hampden beach foreshore.",
        "The lakes villages are covered too: Ohau A Reserve, McKinnon Reserve and both sides of Lake Ohau Village, the community centre and golf course at Omarama, the Lakes Centre car park and domain at Otematata, and the walkway bridge reserve, hydro place car park and domain at Kurow. The council's page shows the prohibited areas as blue-shaded areas on an online map and says many are along the coast between Oamaru and Kakanui. The maps in the bylaw are images, so use the council's online map to check a boundary.",
      ], ["Oamaru harbour and Bushy Beach are prohibited", "Lake Ohau Village is prohibited", "The online map shows the blue areas"]),
      s("Fee-paying council campgrounds", [
        "Where the bylaw does not allow a tent or an uncertified vehicle, the council names campgrounds that are exempt because you pay to stay: the Waitaki Lakes campgrounds at Parsons Rock, Boat Harbour, Wildlife Reserve, Loch Laird, Sailors Cutting and Falstone Creek, plus Hampden Camping Ground, Omarama Campground, Kurow Camping Ground, Oamaru Top 10 Motor Camp, Harbour Tourist Park Oamaru, Dunback Domain camping area and Duntroon Domain camping area.",
        "The bylaw applies only to council land, so DOC, LINZ, NZTA and private land follow other rules. The council's FAQ says some areas of public land and dry river beds are controlled by other organisations and that you can phone or email it to ask whether a place is council-managed. Its number is 03 433 0300 and its email is service@waitaki.govt.nz.",
      ], ["13 named campgrounds are exempt", "Ask the council who manages a spot", "The lake campgrounds are fee-paying"]),
      s("Fines, and a mismatch on the council's pages", [
        "The bylaw says an offence under section 20(1) of the Act carries an infringement fine of $400, but two of the council's web pages still mention a $200 instant fine. Under the Act the fee is the one in the national regulations, which for camping in breach of a bylaw restriction or in a non-certified vehicle where it is required is $400. A missing warrant card is $200, and $800 applies to damage or waste, with serious offences going to prosecution.",
        "The council lists camping in a non-certified vehicle or a tent among the reasons for an infringement. No consent fee, camping fee or booking is published for general freedom camping. Fines can be paid online, by bank transfer or in person.",
      ], ["$400 is the fee for most breaches", "The council's web pages say $200", "Serious offences can be prosecuted"]),
      s("Using the rest of the valley", [
        "The Waitaki Valley sits between the Mackenzie Basin and the coast, and the Christchurch, Tekapo and Aoraki road trip guide shows how it fits into a route. The holiday parks guide covers the paid options at Oamaru, and the DOC campsites guide covers DOC's own sites, whose rules are DOC's rather than the council's.",
        "If you want to see the valley without worrying about the bylaw, a night at one of the council's named campgrounds or at a holiday park is the straightforward answer. Freedom camping here works only for a certified vehicle and only outside the prohibited list.",
      ], ["Stay at a named campground if unsure", "DOC sites follow DOC rules", "The valley links Tekapo and Oamaru"]),
      s("Using KiwiCamping in the Waitaki", [
        "KiwiCamping holds DOC campsites, huts and tracks across Canterbury and Otago with their fees and facilities, and holiday parks and tours you can book in the app. The bylaw's prohibited areas and the council's campground list are not in it, so use the council's online map and the sign at the place. Saved places, place details and guides stay on the phone for offline use; map tiles, routing, weather and photos need a signal.",
        "A trip from Tekapo to Oamaru can hold a campground for each night and a forecast for each leg. Save an alternative for every night and the plan survives a full campground. Free to download, with in-app purchases.",
      ], ["Save an alternative for each night", "Use the council's map for prohibited areas", "Core place details work offline"], undefined, true),
    ],
    sources: [
      { label: "Waitaki District Council: freedom camping in Waitaki", url: "https://www.waitaki.govt.nz/Facilities/Parks-and-Recreation/Freedom-camping/Freedom-camping-in-Waitaki" },
      { label: "Waitaki District Council: Responsible Freedom Camping Bylaw 2021", url: "https://www.waitaki.govt.nz/files/assets/public/v/5/files/our-council/policies-and-bylaws/bylaws/waitaki-district-responsible-freedom-camping-bylaw-amended.pdf" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
    ],
  }),

  a({
    slug: "freedom-camping-whakatane-2026",
    publishAt: "2026-11-29",
    title: "Freedom Camping in Whakatāne 2026: Where You Can Stay",
    description: "Whakatāne's Freedom Camping Bylaw 2024: four Whakatāne and Ōhope sites for certified self-contained vehicles, tents allowed in the general permission, Aniwhenua Reserve, banned areas, nights, fines.",
    category: "Rules & safety",
    region: "Bay of Plenty",
    places: ["Whakatāne", "Ōhope", "Matatā", "Thornton", "Galatea", "Edgecumbe"],
    imageAlt: "Ōhope Beach in the Bay of Plenty at dawn, with people and dogs walking beside the surf",
    related: ["freedom-camping-rules-new-zealand", "self-contained-campervan-green-warrant", "freedom-camping-tauranga-2026", "holiday-parks-new-zealand-guide"],
    intro:
      "Whakatāne District Council's Freedom Camping Bylaw 2024 gives certified self-contained vehicles four designated sites in Whakatāne and Ōhope, for three consecutive nights in any four weeks. A single site, Aniwhenua Reserve near Murupara, accepts vehicles that are not self-contained for up to seven nights in four weeks. The bylaw came into force on 17 October 2024 and is due for review on 17 October 2029. It covers council land only.",
    sections: [
      s("The Freedom Camping Bylaw 2024", [
        "The bylaw was made and commenced on 17 October 2024 as a standalone bylaw, with its next review due on 17 October 2029. Clause 4.1 says freedom camping using a tent or other temporary structure or a self-contained vehicle is permitted in a council area unless a clause makes it restricted or prohibited. That general permission is limited in practice by the Reserves Act, whose section 44 the bylaw notes generally prohibits camping in reserves, and the council's page says freedom camping is prohibited in all reserves.",
        "The council's page also says vehicles must display a current self-containment certificate, and the bylaw takes its definition of self-contained from the Freedom Camping Act. Under the national rules a blue warrant stopped counting on 7 June 2026, so display a green one. The council says all prohibited and restricted areas are signposted.",
      ], ["Council land only", "Reserves are generally prohibited", "Display a green warrant"]),
      s("The four restricted sites for certified vehicles", [
        "Schedule 3 lists four restricted areas, all for certified self-contained vehicles only, in a designated area, for a maximum of three consecutive nights in any four-week period: McAlister Street car park in Whakatāne, West End Road car park and reserve in Ōhope, Maraetotara Reserve on Pohutukawa Avenue in Ōhope, and the eastern end of Harbour Road with Port Ōhope Reserve. All four list public toilets, and Maraetotara Reserve also has a playground and barbecues.",
        "The West End Road car park is closed to freedom camping from the beginning of the third week of December to 31 March, which is the summer holiday peak. The bylaw does not publish per-site vehicle counts, so the designated area marked on the council's map and signs is the limit that matters. Because tents and uncertified vehicles are not allowed at these four, a tent camper needs a campground.",
      ], ["Three nights in four weeks", "West End Road closes for summer", "Tents are not allowed at the four sites"], {
        caption: "Schedule 3 of the Whakatāne Freedom Camping Bylaw 2024 and the council's page, read on 21 October 2026. Vehicle counts are not published.",
        head: ["Site", "Town", "Designated area", "Nights", "Facilities stated"],
        rows: [
          ["McAlister Street car park", "Whakatāne", "Identified car parks in the northern end", "3 in any 4 weeks", "Toilets"],
          ["West End Road car park and reserve", "Ōhope", "Car park behind the toilets at the western end; closed from the third week of December to 31 March", "3 in any 4 weeks", "Toilets"],
          ["Maraetotara Reserve, 243 Pohutukawa Avenue", "Ōhope", "Identified car parks north-west of the roundabout by the beach", "3 in any 4 weeks", "Playground, barbecue, toilets"],
          ["Eastern end of Harbour Road and Port Ōhope Reserve, 541 Harbour Road", "Ōhope", "South-west end of the reserve by the harbour edge", "3 in any 4 weeks", "Toilets"],
          ["Aniwhenua Reserve (Schedule 1)", "Galatea, near Murupara", "Not stated", "7 in any 4 weeks, any vehicle", "Not stated"],
        ],
      }),
      s("Tents, and vehicles that are not self-contained", [
        "Under clause 4.2, a motor vehicle that is not self-contained is allowed only in the areas in Schedule 1, which lists one site: Aniwhenua Reserve at Galatea, near the Murupara township, with a maximum stay of seven nights in any four-week period. Tents are covered by the general permission in clause 4.1, but with reserves generally prohibited and the four restricted sites limited to certified vehicles, the council's page and bylaw leave a tent camper very few places on council land.",
        "Ask the council before pitching a tent anywhere. Its number is 07 306 0500 and its email is info@whakatane.govt.nz, and the Whakatāne Visitor Centre is on 07 306 2030. A written permission to camp somewhere prohibited or restricted can be sought at least 20 days ahead from the chief executive, and the council states that people experiencing homelessness are not subject to freedom camping infringements and penalties.",
      ], ["One site for vehicles without certification", "Ask before pitching a tent", "Permission needs 20 days"]),
      s("Prohibited areas", [
        "Schedule 2 lists 14 prohibited areas. In Whakatāne they include Muriwai Drive for its full length, Kohi Point Scenic Reserve and Rex Morpeth Park. In Ōhope they include Mahy Reserve, Wharekura East Reserve, Ocean Road and the reserves along it, Goodwins Landing, Uretara East and West, Otao South Reserve and the Ohiwa Harbour wharf car park.",
        "Further east, the Western Coastal Recreation Reserve from Ōtamarakau to Golf Links Road, about 30 kilometres, is prohibited, apart from the number 2 car park, and so is the Awatarariki Debris Flow Area at Matatā. Braemar Springs at Ōtakiri is on the list too. The council's page also lists Edgecumbe Domain as prohibited, which is not in the bylaw's schedule, so check the page.",
      ], ["14 prohibited areas in Schedule 2", "Muriwai Drive is prohibited in full", "Matatā debris flow area is prohibited"]),
      s("Fines", [
        "The bylaw says the fee for an infringement offence is the amount in the national regulations, or $400 if none is prescribed, and the council's page says it can issue instant fines of $400 to $800 to anyone breaching the bylaw. In the national schedule most breaches are $400, and $800 is for damaging the area or leaving waste in or on it. The council says you may also be liable for prosecution.",
        "There is no listed fee, booking or permit for the designated sites. A fee applies only to written-permission applications, as set in the council's fees and charges.",
      ], ["$400 for most breaches", "$800 for damage or waste", "No fee to stay at the sites"]),
      s("Holiday parks and DOC land nearby", [
        "The council's page names no holiday parks, so the district's holiday parks and motor camps are the practical option for tents and uncertified vehicles; the holiday parks guide covers how to book them. Beyond the district, the Tauranga page covers the next council's rules, and the DOC campsites guide covers DOC's sites.",
        "KiwiCamping's DOC data (11 August 2026) lists 8 DOC campsites in the Bay of Plenty, 5 bookable online through DOC, with adult nightly rates listed from $10 to $18 and Matatā Campsite the largest. DOC land is outside the council's bylaw.",
      ], ["Holiday parks suit tents", "8 DOC campsites in the Bay of Plenty", "DOC land follows DOC rules"]),
      s("Using KiwiCamping around Whakatāne", [
        "KiwiCamping shows the Bay of Plenty's DOC campsites and huts with their fees and facilities, and holiday parks and tours you can book in the app. The council's four sites, Aniwhenua Reserve and its prohibited areas are not in it, so use the council's maps and the signs. Offline, the app keeps place details, saved places and guides; map tiles, routing, weather and photos do not load without signal.",
        "On an East Cape or Bay of Plenty trip, save a holiday park for each night that depends on a council site, add dates, and the trip shows each leg's distance and each place's forecast. Free to download, with in-app purchases.",
      ], ["Use the council maps for sites", "Save a holiday park as the fallback", "Core place details work offline"], undefined, true),
    ],
    sources: [
      { label: "Whakatāne District Council: freedom camping", url: "https://whakatane.govt.nz/node/122" },
      { label: "Whakatāne District Council: Freedom Camping Bylaw 2024", url: "https://www.whakatane.govt.nz/files/documents/freedom_camping_bylaw_2024.pdf" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
    ],
  }),

  a({
    slug: "freedom-camping-dunedin-2026",
    publishAt: "2026-12-28",
    title: "Freedom Camping in Dunedin 2026: Where You Can Stay",
    description: "Dunedin's freedom camping rules: certified self-contained vehicles on most council parking land, two nights per location, three sites for tents and vehicles without certification, fines and DOC campsites.",
    category: "Rules & safety",
    region: "Otago",
    places: ["Dunedin", "Warrington", "Ocean View", "Otago Peninsula", "Port Chalmers", "St Clair"],
    imageAlt: "People walking along the wide sand of St Clair Beach in Dunedin, with a green headland beyond the surf",
    related: ["freedom-camping-rules-new-zealand", "self-contained-campervan-green-warrant", "christchurch-to-dunedin-drive-guide", "southern-scenic-route-camping"],
    hubs: ["camping/otago"],
    intro:
      "A certified self-contained vehicle may stay overnight on most gravelled or sealed Dunedin City Council land set aside for parking, for no more than two consecutive nights in one location. Vehicles without certification and tents are limited to three council sites, and only Warrington Domain takes tents. The council's page lists exceptions, scenic reserves are out, and DOC land is a separate landlord.",
    sections: [
      s("What the council's page says", [
        "Dunedin City Council's freedom camping page starts from the vehicle: certified self-contained vehicles can stay overnight on most gravelled or sealed council land set aside for parking, with some exceptions the page outlines. It asks for the vehicle's certification to be clearly displayed, and it names the self-containment standard, NZS 5465.",
        "The stay limit is two consecutive nights at any one location, with departure by 8.30am. Warrington is the one exception, where the departure time is 12 noon. The council's server refused scripted reads when this guide was prepared, so the wording above comes from the page's text as search tools returned it, and the council's own page is the version to trust on the day.",
      ], ["Council parking land, with exceptions", "Two consecutive nights per location", "Out by 8.30am, or noon at Warrington"]),
      s("Tents and vehicles without certification", [
        "A council may designate places for vehicles that are not certified, and Dunedin's page names three: Warrington Domain, Ocean View Recreation Reserve and the Thomas Burns Street car park. Tent campers have a single option, the designated area inside Warrington Domain.",
        "The Thomas Burns Street site works on a season for non-self-contained vehicles: it is available from 1 November to 30 April. MBIE's fact sheet for councils says existing bylaws that designate places for non-self-contained vehicles continue to apply, which is why these three survive the 2023 law. If the vehicle is neither certified nor welcome at one of the three, a holiday park is the answer.",
      ], ["Three sites for non-certified vehicles", "Tents at Warrington only", "Thomas Burns Street: 1 Nov to 30 Apr"], {
        caption: "Sites for vehicles without certification and tents on Dunedin City Council's freedom camping page, as its text read in search results on 28 October 2026. Check the page before you travel.",
        head: ["Site", "Who may stay", "Stay and departure"],
        rows: [
          ["Warrington Domain, designated area", "Tents and non-self-contained vehicles", "Two consecutive nights; leave by 12 noon"],
          ["Ocean View Recreation Reserve", "Non-self-contained vehicles", "Two consecutive nights; leave by 8.30am"],
          ["Thomas Burns Street car park", "Non-self-contained vehicles, 1 November to 30 April", "Two consecutive nights; leave by 8.30am"],
        ],
      }),
      s("Where the council says no", [
        "The council's list of prohibited places includes scenic reserves, and it names Warrington Domain, the Thomas Burns Street car park and Ocean View Recreation Reserve for anyone camping outside their designated areas. Reading the signs matters at these sites, because the permission covers a marked area, not the whole domain or car park.",
        "The council patrols these places at night, and its page lists further exceptions to the parking-land rule that this guide does not copy out. A gravel car park beside a beach is not automatically open: look for a sign, and if there is none, ask the council before settling in.",
      ], ["Scenic reserves are prohibited", "Stay inside the marked area", "Ask if there is no sign"]),
      s("Fines", [
        "Dunedin enforces its rules with infringement notices. Under the national regulations a breach of a bylaw restriction or prohibition costs $400, using a vehicle that is not self-contained where it is required costs $400, and a missing warrant card costs $200. Damage to the area or leaving waste in or on it costs $800.",
        "If a case goes to court, the Freedom Camping Act lets a fine reach $3,000. For a rental, the notice normally lands with the hire company, which usually charges the cost on to the hirer.",
      ], ["$400 for most breaches", "$800 for damage or waste", "Rental firms pass fines on"]),
      s("DOC land and holiday parks around Dunedin", [
        "The council's rules stop at its boundary. KiwiCamping's DOC data (11 August 2026) shows 30 DOC campsites in Otago, 16 of them bookable online through DOC, with adult nightly rates from $5 to $42 and 8 campsites listed as free. The region also holds 78 DOC huts, and the guide to DOC campsites explains how to book.",
        "For power, showers and a certain bed, the holiday parks guide covers how to book a park in summer, when the council sites near the city fill early. A park is also the clean answer for a tent outside Warrington's designated area.",
      ], ["30 DOC campsites in Otago", "Book DOC sites through DOC", "Holiday parks for tents and power"]),
      s("Reaching Dunedin and going on from it", [
        "From Christchurch the drive south on State Highway 1 passes Ōamaru and Moeraki, and the Christchurch to Dunedin guide covers the route, timings and the camping choices on the way. Going on from Dunedin, the Southern Scenic Route guide follows the Catlins towards Invercargill and Fiordland.",
        "A two-night limit suits a base for the city and the peninsula, but it means moving every second day on a longer trip. Line up the next stop before the first one runs out.",
      ], ["Christchurch to Dunedin guide", "Catlins on the Southern Scenic Route", "Two nights suits a city base"]),
      s("Using KiwiCamping around Dunedin", [
        "The app maps Otago's DOC campsites and huts with their fees and facilities, together with holiday parks and bookable stays and tours. Its freedom camping information comes from DOC's notices on conservation land, which are not council bylaws, so Warrington, Ocean View and Thomas Burns Street need the council's page and the signs on the day.",
        "In a trip, a council site and a holiday park can sit beside each other for the same night, each stop with its date, a note and a forecast for the leg. Place details, saved places and guides open without signal on the phone, while map tiles, routing, weather and photos wait for reception. Free to download, with in-app purchases.",
      ], ["Council sites need the council's page", "Pair a council site with a holiday park", "Place details open without signal"], undefined, true),
    ],
    sources: [
      { label: "Dunedin City Council: freedom camping", url: "https://www.dunedin.govt.nz/community-facilities/freedom-camping" },
      { label: "MBIE: freedom camping changes, fact sheet for councils", url: "https://www.mbie.govt.nz/dmsdocument/18069-freedom-camping-fact-sheet-councils" },
      { label: "Freedom Camping Act 2011", url: "https://www.legislation.govt.nz/act/public/2011/0061/latest/whole.html" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
    ],
  }),

  a({
    slug: "freedom-camping-wellington-2026",
    publishAt: "2026-12-29",
    title: "Freedom Camping in Wellington 2026: Where You Can Stay",
    description: "Wellington City's freedom camping rules: certified self-contained vehicles only, 52 spaces at Evans Bay Marina and 16 at Te Kopahou, four nights a month, the $30 Barnett Street option, fines and dump stations.",
    category: "Rules & safety",
    region: "Wellington",
    places: ["Wellington", "Evans Bay", "Te Kopahou", "Owhiro Bay", "Hataitai", "Te Aro"],
    imageAlt: "Evans Bay in Wellington, with sunlit water between two headlands under a cloudy sky",
    related: ["freedom-camping-rules-new-zealand", "self-contained-campervan-green-warrant", "cook-strait-ferry-campervan-guide", "wellington-wairarapa-camping-loop"],
    hubs: ["camping/wellington-kapiti"],
    intro:
      "Wellington City allows freedom camping only in a certified self-contained vehicle, and its free sites are two car parks: Evans Bay Marina with 52 designated spaces and Te Kopahou Visitors Centre with 16. Each area has a limit of four consecutive nights in a calendar month. Camping is prohibited on all land managed under the Reserves Act 1977 and the Wellington Town Belt Act 2016, which takes in many of its reserves.",
    sections: [
      s("The rules that apply across the city", [
        "The council's freedom camping page sets out three restrictions for every area: the motor vehicle must be certified self-contained, no vehicle or tent may stay in any one area for more than four consecutive nights in a calendar month, and a camper may not freedom camp within 500 metres of an area where they already stayed four consecutive nights that month. The rules come from the Public Places Bylaw 2022, and Schedule One lists the restricted and prohibited areas.",
        "The four-night limit and the 500 metre rule name tents and other temporary structures as well as vehicles. The self-contained requirement applies to motor vehicles, and the council's places to camp are car parks for vehicles, so a tent camper is better placed at a campground. If the vehicle is not certified, the council points to a campground or an on-street park. Since 7 June 2026 a green warrant is the only certification that counts.",
      ], ["Certified self-contained vehicles", "Four consecutive nights per calendar month", "500 metres before you may camp again"]),
      s("The two free sites", [
        "Evans Bay Marina car park has 52 designated parks and Te Kopahou Visitors Centre car park has 16. The council says Te Kopahou is not suitable for vehicles over 7 metres or for caravans, and at both sites only the designated freedom camping parks may be used: the map at the entrance shows which they are.",
        "On-street parking is the council's third free option, provided the vehicle keeps within any time limits that apply. Evans Bay Marina also has one of the city's two public dump stations; the other is at Ngauranga Gorge.",
      ], ["52 spaces at Evans Bay Marina", "16 at Te Kopahou, not over 7 metres", "Dump stations at Evans Bay and Ngauranga Gorge"], {
        caption: "Sites on Wellington City Council's freedom camping page, read on 28 October 2026.",
        head: ["Site", "Spaces", "Cost", "Notes"],
        rows: [
          ["Evans Bay Marina car park, Hataitai", "52 designated", "Free", "Dump station on site"],
          ["Te Kopahou Visitors Centre car park", "16 designated", "Free", "Not for vehicles over 7 m or caravans"],
          ["Barnett Street car park, waterfront", "Not stated", "$30 per 24 hours", "No overnight parking on Saturday, because of the Sunday market"],
          ["Cuba Street Motorhome Park, 25 Garrett Street", "Not stated", "Paid", "Electricity only"],
        ],
      }),
      s("Paid overnight options in the city", [
        "Barnett Street car park on the waterfront is open to self-contained freedom campers for $30 per 24 hours. The Harbourside Market uses the car park on Sunday mornings, so the council says nobody can park there overnight on a Saturday.",
        "The Cuba Street Motorhome Park at 25 Garrett Street in Te Aro offers electricity only, and Capital Lodge Motor Inn in Newlands is also on the council's list. Further out, the page lists campgrounds and holiday parks at Porirua, Lower Hutt, Upper Hutt and Kāpiti, for tents and for vehicles without certification.",
      ], ["Barnett Street: $30 per 24 hours", "Not on Saturday nights", "Holiday parks around the harbour"]),
      s("Where camping is not allowed", [
        "Camping is prohibited on all land managed under the Reserves Act and the Town Belt Act, which includes many reserves, coastal car parks, sports field car parks and play area car parks. Section 13 of the Public Places Bylaw explains the detail, and Schedule One, a 4.41 MB PDF on the council's page, maps the restricted and prohibited areas.",
        "The result is a short list of permitted places in a big city, and a bylaw that does not turn a pretty coastal car park into a campsite. If a sign names a reserve or coastal car park, treat the sign as the final word.",
      ], ["Reserves and Town Belt are prohibited", "Coastal and sports car parks too", "Schedule One has the map"]),
      s("Fines and disputes", [
        "The council's page puts the infringement fee at $400, issued under section 27(6) of the Freedom Camping Act. Other national fees apply to specific offences, including $200 for a missing warrant card and $800 for damage or waste.",
        "A fine can be paid online with a credit card, using the Camping payment type, or at a council service desk. To dispute one, email parkranger@wcc.govt.nz or visit a service desk with your name, the issuing officer's name, the infringement number and when and where it was issued. The council says it will only issue a waiver in special circumstances, and it takes questions on 04 499 4444 at any hour.",
      ], ["$400 is the council's stated fee", "Pay online or at a service desk", "Waivers only in special circumstances"]),
      s("DOC campsites and the ferry", [
        "The region has far less DOC camping than the South Island: KiwiCamping's DOC data (11 August 2026) lists 3 DOC campsites in Wellington and Kāpiti, 2 bookable online through DOC, at $10 an adult, and 24 DOC huts. Catchpool Valley Campsite in the Remutaka Forest Park is the largest, with 76 sites.",
        "Many travellers arrive off the Cook Strait ferry, and the ferry guide covers booking a campervan crossing. A late sailing and a full Evans Bay car park is the combination to plan around, so keep a holiday park as the second choice for the first night.",
      ], ["3 DOC campsites in the region", "24 DOC huts", "Plan the first night after the ferry"]),
      s("Using KiwiCamping around Wellington", [
        "KiwiCamping adds the Wellington and Kāpiti DOC campsites and huts, holiday parks and bookable stays to a map you can filter for toilets, water and vehicle access. The council's two car parks are not drawn as their own layer, so check the council's page before relying on a space, then save the fallback in the same trip.",
        "A trip keeps the Wellington night beside the ferry or the Wairarapa leg, each stop dated with a note, a distance and a forecast. Saved places, place details and guides stay readable with no reception; the map tiles, routing, weather and photos are the parts that need signal. Free to download, with in-app purchases.",
      ], ["Council car parks: check the council's page", "Save a holiday park as the fallback", "Saved places work offline"], undefined, true),
    ],
    sources: [
      { label: "Wellington City Council: freedom camping in Wellington", url: "https://wellington.govt.nz/recreation/outdoors/camping-in-wellington" },
      { label: "Wellington City Council: Public Places Bylaw 2022", url: "https://wellington.govt.nz/your-council/plans-policies-and-bylaws/bylaws/public-places-bylaw-2022" },
      { label: "Freedom Camping Act 2011", url: "https://www.legislation.govt.nz/act/public/2011/0061/latest/whole.html" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
    ],
  }),

  a({
    slug: "freedom-camping-far-north-2026",
    publishAt: "2026-12-30",
    title: "Freedom Camping in the Far North 2026: Where You Can Stay",
    description: "Far North District Council allows no camping or overnight parking in its parks, reserves and beaches, and points to seven approved sites near toilets and water. What the council says, the reported site list and the DOC alternatives.",
    category: "Rules & safety",
    region: "Northland",
    places: ["Kawakawa", "Kaikohe", "Mangonui", "Awanui", "Okaihau", "Totara North"],
    imageAlt: "Yachts and other boats moored in Mangonui Harbour below a forested hill",
    related: ["freedom-camping-rules-new-zealand", "northland-cape-reinga-camping-route", "bay-of-islands-camping-week", "kauri-dieback-camping-travel"],
    hubs: ["camping/northland"],
    intro:
      "Far North District Council does not allow camping or overnight parking in its parks, reserves and beaches. It sends free campers to seven approved sites near public toilets and water supplies, some with a dump station nearby for self-contained campervans. The council's website refused scripted reads for this guide, so the page's wording comes from search results and the site names from RNZ's reporting, and the council's current list is the one to check before a night depends on it.",
    sections: [
      s("What the council says", [
        "The council's responsible camping page, last updated in July 2024, says camping or parking overnight at council-controlled parks, reserves and beaches is not permitted. Free campers are asked to use seven approved sites across the district, chosen for their public toilets and water supplies.",
        "That makes the district the opposite of an open-slather coast. The default is no, and the approved sites are the exception, so a beach car park with a view is not covered because it looks like one that is. Council land only is covered here: DOC's conservation land, private land and campgrounds follow their own rules.",
      ], ["Parks, reserves and beaches: not permitted", "Seven approved sites", "Council land only"]),
      s("The seven approved sites", [
        "RNZ's December 2022 report lists the seven as Kawakawa (Te Hononga, Gillies Street), Kaikohe (Lindvart Park), Ohaeawai (Te Corner), Okaihau (Two Ponga Park), Totara North (200 metres off State Highway 1), Mangonui (Lions Park, Waterfront Drive) and Awanui (the village toilets and playground). A 2015 council decision, reported by the Northern Advocate, had named Centre Park in Kaitaia and Awanui Reserve among its earlier eight sites, so the list has moved before and can move again.",
        "The 2022 report also describes a dump station at the Te Paki Stream Road intersection with State Highway 1, called New Zealand's northernmost freedom camping dump station. Night limits and vehicle counts are not on the pages this guide could read, so each site's sign sets them.",
      ], ["Kawakawa, Kaikohe, Ohaeawai, Okaihau", "Totara North, Mangonui, Awanui", "Signs set the night limits"], {
        caption: "Far North approved sites as RNZ reported them in December 2022, with the council's page of July 2024 saying seven remain. Confirm the current list with the council.",
        head: ["Town", "Site", "Notes"],
        rows: [
          ["Kawakawa", "Te Hononga, Gillies Street", "Not stated"],
          ["Kaikohe", "Lindvart Park", "Earlier council policy marked it self-contained only"],
          ["Ohaeawai", "Te Corner", "Not stated"],
          ["Okaihau", "Two Ponga Park", "Not stated"],
          ["Totara North", "200 metres off State Highway 1", "Old dump site in 2015"],
          ["Mangonui", "Lions Park, Waterfront Drive", "Not stated"],
          ["Awanui", "Village toilets and playground", "Not stated"],
        ],
      }),
      s("Which vehicles", [
        "The sites are for camping in a vehicle, and the 2015 decision described them as for self-contained campervans only. The national law has since made certification the general rule on council land: since 7 June 2026 that means a green warrant on the windscreen, and portable toilets no longer qualify a vehicle.",
        "Tents are not part of the council's approved-site message. A tent camper is better served by a DOC campsite or a commercial campground, and the Northland hub lists DOC's choices.",
      ], ["Plan on a green warrant", "Tents: use DOC or a campground", "Confirm each site's vehicle rule"]),
      s("Enforcement and fines", [
        "Newstalk ZB's summer 2025-26 report said the council issued no freedom camping fines that season and relies on education, so a lenient summer is no promise about the next. Under the national regulations the usual infringement fee is $400, a missing warrant card costs $200, and damage or waste costs $800.",
        "The Freedom Camping Act also allows a court fine of up to $3,000 for the offence. Camping where the council says it is not permitted is the case the $400 fee targets.",
      ], ["$400 for most breaches", "No fines issued in summer 2025-26", "Education first, notices when needed"]),
      s("DOC campsites in Northland", [
        "DOC's land is the better answer for a longer stay. KiwiCamping's DOC data (11 August 2026) counts 14 campsites in Northland, 11 of them bookable online, with adult nightly rates from $10 to $23. Uretiti Beach Campsite is the biggest with 300 sites, and the region also has 7 DOC huts.",
        "The kauri dieback guide matters on the walks from these campsites, and the DOC campsite guide explains how to book. For a certain bed with power, a holiday park is the alternative that does not depend on a council sign.",
      ], ["14 DOC campsites in Northland", "Uretiti Beach is the largest", "Kauri dieback cleaning at tracks"]),
      s("Routes through the Far North", [
        "State Highway 1 north from Auckland reaches Kawakawa and Paihia before the Bay of Islands, and the Auckland to Bay of Islands guide covers the drive, ferry and camping on it. North of Kaitaia, the Cape Reinga route guide plans the nights on the way to the tip.",
        "The approved sites sit along that axis: Kawakawa on the way in, Mangonui and Awanui on the way north. They are a late-arrival option, not the plan for the best nights of the trip.",
      ], ["Auckland to Bay of Islands guide", "Cape Reinga route guide", "Approved sites are a late-arrival option"]),
      s("Using KiwiCamping in the Far North", [
        "The app shows Northland's DOC campsites, holiday parks and bookable stays with their facilities, plus DOC's freedom camping notices on conservation land, which are not council rules. The council's seven sites need the council's page and the signs on the day.",
        "A trip can hold the Bay of Islands and Cape Reinga legs together, with each night dated, a note on its fallback and the forecast beside it. Place details, saved places and guides open on the phone without signal, and the map tiles, routing, weather and photos come back with reception. Free to download, with in-app purchases.",
      ], ["Council sites: check the council's page", "Date each night and add a fallback", "Place details open offline"], undefined, true),
    ],
    sources: [
      { label: "Far North District Council: responsible camping", url: "https://www.fndc.govt.nz/District/Visiting-the-Far-North/responsible-camping" },
      { label: "RNZ via 7me: Northland councils gearing up as peak freedom camping season begins", url: "https://7me.one/northland-councils-gearing-up-as-peak-freedom-camping-season-begins/" },
      { label: "Northern Advocate: Freedom camp spots opened up in Far North", url: "https://www.nzherald.co.nz/northern-advocate/news/freedom-camp-spots-opened-up-in-far-north/5ZL3WCKD2LCTNEM5ZRSEBUSJHM/" },
      { label: "Far North District Council: Camping in Public Places policy 2016", url: "https://fndc-web.matrix.squiz.cloud/__data/assets/pdf_file/0023/18095/camping-in-public-places-2016.pdf" },
      { label: "Newstalk ZB: freedom camping hotspots see spike in fines this summer", url: "https://www.newstalkzb.co.nz/news/national/freedom-camping-hotspots-see-spike-in-fines-this-summer/" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
    ],
  }),


];
