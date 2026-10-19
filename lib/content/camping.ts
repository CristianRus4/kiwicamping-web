import { makeArticle as a, type Article, type ArticleSection } from "@/lib/article-model";

const s = (heading: string, body: string[], tips?: string[]): ArticleSection => ({ heading, body, tips });

export const campingArticles: Article[] = [
  a({
    slug: "doc-huts-new-zealand-guide",
    title: "DOC Huts in New Zealand by Region: Types, Fees, Tickets",
    description: "Where DOC's huts are, region by region, what serviced, standard and basic huts cost in 2026/27, and how hut tickets, the Hut Pass and bookings work.",
    category: "Camping guides", region: "New Zealand backcountry", readTime: 4,
    places: ["Serviced huts", "Standard huts", "Basic huts", "Great Walk huts", "Hut tickets"],
    imageAlt: "Backcountry hut in New Zealand mountains",
    intro: "DOC looks after more than 950 huts, and KiwiCamping's DOC data lists 927 of them, from serviced huts with heating and mattresses to two-bunk bivvies. Most sit in the South Island: Canterbury alone has 180 and the West Coast 140, while the North Island's biggest clusters are in the Ruahine, Kaweka and Tararua ranges. In that data, checked on 24 August 2026, only 127 of the 927 could be booked, and although DOC has since moved every serviced hut online, most huts remain first come, first served: free if basic, paid with hut tickets or a Backcountry Hut Pass if standard.",
    sections: [
      s("Hut categories and 2026/27 fees", [
        "Serviced huts have mattresses, a water supply, toilets, handwashing and heating with fuel. For 2026/27 an adult pays $25 a night from May to September, $28 on weeknights and $32 on Friday and Saturday nights from October to April, and $29 and $34 from December to February; children pay half, and camping beside one is usually $12.50. Standard huts have mattresses, water and toilets, with wood heaters below the bush line, for $15 an adult and $7.50 a child. Basic huts and bivvies are free and offer shelter and little else. In KiwiCamping's data that splits into 96 serviced, 408 standard and 372 basic huts.",
        "Three categories sit outside that ladder. Great Walk huts, 33 of them in KiwiCamping's data, have their own prices by track, season and residency and must be booked in the Great Walks season. Individually priced huts, including serviced alpine huts such as Mueller Hut, set their own fee, and club huts are run by clubs such as the New Zealand Alpine Club, so check the hut's DOC page. Whatever the category, the roof never replaces a sleeping bag, stove, food, head torch and warm layers.",
      ], ["Serviced $25 to $34 by season, standard $15, basic free", "Great Walk and alpine huts price individually", "Carry full gear whatever the category"]),
      s("Where the huts are, region by region", [
        "The South Island holds most of the network. Canterbury has 180 huts, led by Lake Sumner Forest Park and Arthur's Pass National Park; the West Coast 140, many up the Whitcombe and Styx valleys; Nelson/Tasman 99, with 45 in Kahurangi National Park and 24 in Nelson Lakes; Otago 78, including 12 in Mount Aspiring National Park and 12 in Hāwea Conservation Park; Southland 70, including 30 on Rakiura; Marlborough 60; and Fiordland 55, almost all inside Fiordland National Park.",
        "In the North Island, Hawke's Bay has 55 huts split between the Kaweka and Ruahine forest parks, Manawatū/Whanganui 43, the East Coast 38 across Te Urewera and Whirinaki, Wairarapa 36 and Wellington/Kāpiti 24, most of them in the Tararua Range. The Central North Island has 16, ten in Tongariro National Park, and Bay of Plenty, Taranaki, Northland, Waikato, Coromandel and Auckland have eight or fewer each.",
      ]),
      s("Hut tickets, passes and bookings", [
        "Non-bookable huts take Backcountry Hut Tickets, bought before the trip and posted in the honesty box, or a Backcountry Hut Pass that covers most serviced and standard huts for 12 months. From 1 November 2026 hut tickets can also be bought on DOC's online booking system, and paper tickets stay valid until 1 November 2027. Bookable huts are reserved and paid on bookings.doc.govt.nz, and since 1 October 2026 that includes every serviced hut, so Serviced Hut Tickets are being retired.",
        "The common mistake is treating a pass or a ticket as a booking. Neither reserves a bunk or gives priority in a first-come hut. The Hut Pass can pay for some bookable huts if you enter it when booking, but not Great Walk huts in their booking season or the huts on DOC's exclusion list. Read which system the specific hut uses before you leave.",
      ], ["A pass is not a reservation", "Hut tickets go online from 1 November 2026", "Great Walk huts sell out months ahead"]),
      s("A full hut is still shelter in an emergency", [
        "At a bookable hut, DOC keeps no space for people without a booking, and you can be turned away when it is full. At non-bookable huts bunks are first come, and the convention is that a full hut means floor space rather than a closed door. Every hut stays open as emergency shelter in bad weather, so do not walk on into darkness because the bunks are taken.",
        "Carry a mat and the means to sleep on the floor, and where the weather allows it and the site permits camping, a tent gives you a genuine alternative. On popular tracks in January, assume the hut will be full and plan accordingly.",
      ]),
      s("Water, cooking and fire", [
        "Treat hut water unless current DOC information for that hut says it is safe to drink. Roof-collected supply can be contaminated, and giardia is present in New Zealand backcountry water. Boiling is the surest method, and DOC says three minutes; a filter rated for protozoa also works. Assuming is what causes problems.",
        "Cook on your own stove, outside or in the designated area, and never inside a tent. Where a fire is provided, use it sparingly and restock the kindling for whoever arrives next in worse weather than you had.",
      ], ["Treat the water unless told otherwise", "Carry a stove regardless", "Restock kindling before you leave"]),
      s("Hut etiquette", [
        "Boots off inside. Keep your gear consolidated on your bunk rather than spread across the table and benches. Be quiet early and move quietly in the morning, because trampers start before dawn and the whole party sleeps in one room after a hard day.",
        "Fill in the hut book, every time, including the date and your intentions. It is a courtesy, and more importantly it can help search and rescue if someone in your party is overdue.",
      ]),
      s("Leaving the hut", [
        "Sweep the floor, close the shutters and doors properly, and carry out everything you carried in, including food scraps. Rubbish left in a hut attracts rodents, and there is no collection service; whatever you leave stays until another walker removes it.",
        "Report damage, a broken stove, a failed water supply or a hazard to DOC after your trip. Reports help DOC prioritise repairs, and a five-minute message can prevent the next party arriving to a building that does not work.",
      ], ["Carry out all rubbish and scraps", "Close shutters and doors", "Report damage to DOC afterwards"]),
    ],
    sources: [
      { label: "DOC hut categories, facilities and fees", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-in-a-hut/hut-categories/" },
      { label: "DOC media release, 1 October 2026: serviced huts bookable, hut tickets online", url: "https://www.doc.govt.nz/news/media-releases/2026-media-releases/more-doc-huts-go-online-as-booking-and-payment-gets-easier/" },
    ],
  }),

  a({
    slug: "winter-camping-new-zealand",
    title: "Winter camping in New Zealand: warmth, roads and realistic plans",
    description: "Cold nights, short daylight and alpine road controls change how a campervan or tent trip works.",
    category: "Camping guides", region: "New Zealand in winter", readTime: 4,
    places: ["Central Otago", "Mackenzie Country", "Tongariro", "Arthur's Pass", "Fiordland", "Lindis Pass"],
    imageAlt: "Campervan in a snowy New Zealand landscape",
    intro: "Winter delivers the clearest skies, the emptiest campgrounds and the best value of the year, and it removes most of your margin for error. Cold nights, nine hours of usable daylight, chain controls and seasonal closures are not obstacles to work around afterwards; they are the things the route should be built from.",
    sections: [
      s("Rate the sleep system to the night, not the day", [
        "A bright Central Otago afternoon at fifteen degrees can be followed by a night below zero. Choose a sleeping bag and an insulated mat rated for the overnight minimum in the coldest place you will stop, then add a margin, because comfort ratings are optimistic and a cold night is genuinely miserable.",
        "The mat matters as much as the bag. Most heat is lost downwards into the ground or the vehicle floor, and a summer-weight mat under a good bag will still leave you cold. In a van, insulate the floor and the windows before adding another blanket.",
      ], ["Rate for the overnight low, not the forecast high", "Insulated mat beats a warmer bag", "Van floors and windows leak heat"]),
      s("Manage condensation", [
        "Four people breathing in a closed van produce a surprising amount of water, and it ends up in the bedding, the walls and eventually the mattress. Ventilation feels wrong when it is freezing outside, but a permanently sealed vehicle produces wet bedding by the second morning.",
        "Crack a vent or a window on the sheltered side overnight, and air the bedding whenever the sun appears. Wipe condensation off windows in the morning rather than letting it run into the seals and soft furnishings.",
      ]),
      s("Heat the vehicle safely", [
        "Use installed, manufacturer-approved heating only. Portable gas heaters, camping stoves and barbecues used indoors produce carbon monoxide, which is odourless and has killed people sleeping in vehicles in New Zealand. There is no safe way to improvise cabin heating in a closed space.",
        "If you have a diesel or gas heater fitted, check it works before the trip and know how it vents. A carbon monoxide alarm costs very little and is worth having in any vehicle with a fuel-burning appliance.",
      ], ["Never use a camping stove to heat a van", "Carbon monoxide has no smell", "Fit a CO alarm if you burn fuel"]),
      s("Chains, tyres and alpine road controls", [
        "The Lindis Pass, the Crown Range, Arthur's Pass, the Desert Road and the Milford Road can all require chains at short notice, and some rental agreements require you to carry them for the whole trip regardless of forecast. Fitting chains for the first time in sleet on a shoulder is genuinely difficult.",
        "Practise fitting them in a dry driveway in daylight before you leave. Check tyre tread and pressures, confirm the battery is healthy, because cold weather finds a weak one, and read the rental company's winter restrictions before you plan a route over a pass.",
      ]),
      s("Black ice and shaded corners", [
        "Black ice forms where the road merely looks wet, typically in shade, on bridges, and in the first and last hours of daylight. It gives no warning and no grip, and the standard mistake is braking or steering sharply once you feel it.",
        "Slow down before shaded sections rather than in them, increase following distance well beyond the summer habit, and delay an alpine crossing until the sun has been on the road. Arriving two hours later is not a cost worth arguing about.",
      ], ["Shade and bridges freeze first", "Slow before the corner, not in it", "Wait for sun on the road"]),
      s("Build the day around the daylight", [
        "Midwinter gives roughly nine hours of usable light in the south, and less in a valley. That is not much once you have packed camp, driven, stopped and found a site, so plan shorter legs than you would in February and set a firm turnaround time for any walk.",
        "Aim to arrive with light to spare. Choosing a pitch, levelling a vehicle and checking access are all harder in the dark and colder, and a site that would be obviously wrong in daylight is easy to accept at night.",
      ]),
      s("Expect closures and reduced facilities", [
        "Many DOC campsites close for winter or turn off water, some access roads shut after snow, and holiday parks in small towns can reduce hours or close entirely. A listing written for summer will not tell you this, so check the specific site and the current DOC alerts before committing to it.",
        "Carry more water, food and charge than the plan requires, and treat a cabin or motel night as a normal weather decision rather than a failure. Winter is the season where paying for a room occasionally is what makes the rest of the trip work.",
      ], ["Check the site is open, not just listed", "Carry more water than the plan needs", "A cabin night is a valid decision"]),
    ],
    sources: [
      { label: "NZTA road conditions and closures", url: "https://www.journeys.nzta.govt.nz/" },
      { label: "MetService", url: "https://www.metservice.com/" },
      { label: "DOC alerts and closures", url: "https://www.doc.govt.nz/parks-and-recreation/know-before-you-go/alerts/" },
    ],
  }),
];
