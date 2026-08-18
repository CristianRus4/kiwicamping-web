import { makeArticle as a, type Article, type ArticleSection } from "@/lib/article-model";

const s = (heading: string, body: string[], tips?: string[]): ArticleSection => ({ heading, body, tips });

export const campingArticles: Article[] = [
  a({
    slug: "doc-huts-new-zealand-guide",
    title: "DOC huts in New Zealand: how the hut system works",
    description: "Serviced, standard, basic and Great Walk huts have different facilities, fees and booking rules.",
    category: "Camping guides", region: "New Zealand backcountry", readTime: 4,
    places: ["Serviced huts", "Standard huts", "Basic huts", "Great Walk huts", "Hut tickets"],
    imageAlt: "Backcountry hut in New Zealand mountains",
    intro: "A hut is shared shelter in the backcountry, not accommodation hidden in the bush. Around 950 of them sit across public conservation land, and they range from a serviced building with heating and mattresses to a two-bunk shell with a dirt floor. Knowing which category you are walking towards decides what you carry.",
    sections: [
      s("The four hut categories", [
        "Serviced huts are the most equipped: mattresses on bunks, a water supply, toilets, and usually heating with fuel provided. Standard huts drop the heating fuel and sometimes the mattresses, but keep bunks, water and a toilet. Basic huts are shelter and little else, and may have no water source at all.",
        "Great Walk huts sit outside this ladder. They are serviced to a high standard during the walking season, cost considerably more, and operate on their own booking system tied to the specific track. Outside the season they typically revert to a lower standard at a lower price, with facilities reduced or removed.",
      ], ["Category predicts facilities and fee", "Great Walk huts book separately", "Basic huts may have no water"]),
      s("Facilities never replace what you carry", [
        "A roof does not remove the need for a sleeping bag, a mat, a stove, fuel, food, a head torch and warm layers. Huts are not staffed, they do not hold supplies, and a serviced hut with a fire is still cold if the previous party used the last of the wood.",
        "Pack for the walk and the weather rather than for the hut description. New Zealand alpine conditions turn fast, and the party that arrives wet with no spare warm layer is in trouble regardless of what the building offers.",
      ]),
      s("Hut tickets, passes and bookings", [
        "Non-bookable huts generally use hut tickets bought in advance, or a Backcountry Hut Pass covering a period rather than a night. Bookable huts need a named reservation for the correct date, and Great Walk huts book out months ahead for the summer season.",
        "The common mistake is treating a pass as a booking. A Backcountry Hut Pass pays your way into huts that accept tickets; it reserves nothing and does not apply to Great Walk or other bookable huts. Read which system the specific hut uses before you leave.",
      ], ["A pass is not a reservation", "Buy tickets before the track", "Great Walk huts sell out months ahead"]),
      s("Nobody is turned away", [
        "Bunks in non-bookable huts are first come, and the long-standing convention is that a full hut means floor space rather than a closed door. Do not walk on into darkness because the bunks are taken, and do not expect a bunk to be held for you because you booked a different hut.",
        "Carry a mat and the means to sleep on the floor, and where the weather allows it and the site permits camping, a tent gives you a genuine alternative. On popular tracks in January, assume the hut will be full and plan accordingly.",
      ]),
      s("Water, cooking and fire", [
        "Treat hut water unless current DOC information for that hut says it is safe to drink. Roof-collected supply can be contaminated, and giardia is present in New Zealand backcountry water. Boiling, filtering or chemical treatment all work; assuming is what causes problems.",
        "Cook on your own stove, outside or in the designated area, and never inside a tent. Where a fire is provided, use it sparingly and restock the kindling for whoever arrives next in worse weather than you had.",
      ], ["Treat the water unless told otherwise", "Carry a stove regardless", "Restock kindling before you leave"]),
      s("Hut etiquette", [
        "Boots off inside. Keep your gear consolidated on your bunk rather than spread across the table and benches. Be quiet early and move quietly in the morning, because trampers start before dawn and the whole party sleeps in one room after a hard day.",
        "Fill in the hut book, every time, including the date and your intentions. It is a courtesy, but more importantly it is the first thing search and rescue reads when someone is overdue, and an accurate entry has shortened many searches.",
      ]),
      s("Leaving the hut", [
        "Sweep the floor, close the shutters and doors properly, and carry out everything you carried in, including food scraps. Rubbish left in a hut attracts rodents, and there is no collection service; whatever you leave stays until another walker removes it.",
        "Report damage, a broken stove, a failed water supply or a hazard to DOC after your trip. Huts are maintained on the basis of what gets reported, and a five-minute message can prevent the next party arriving to a building that does not work.",
      ], ["Carry out all rubbish and scraps", "Close shutters and doors", "Report damage to DOC afterwards"]),
    ],
    sources: [
      { label: "DOC hut categories", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-in-a-hut/hut-categories/" },
      { label: "DOC alerts and closures", url: "https://www.doc.govt.nz/parks-and-recreation/know-before-you-go/alerts/" },
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
