import { makeArticle as a, type Article, type ArticleSection, type ArticleTable } from "@/lib/article-model";

const s = (heading: string, body: string[], tips?: string[], table?: ArticleTable, cta?: boolean): ArticleSection => ({ heading, body, tips, ...(table && { table }), ...(cta && { cta }) });

/**
 * City-to-city drive guides. Distances, road rules, closures and opening hours are read from the road
 * authority, DOC, council or operator page named in each guide's `sources` on 21 October 2026
 * (facts files in docs/growth/walks-drives/).
 */
export const driveGuideArticles: Article[] = [
  a({
    slug: "auckland-to-wellington-drive-guide",
    publishAt: "2026-12-15",
    title: "Auckland to Wellington Drive 2026: Route, Time, Stops and Camping",
    description: "Auckland to Wellington by road: about 640 km and 8 to 8.5 hours on State Highway 1 through Hamilton, Taupō and the Desert Road, with fuel stops, winter notes and where to camp.",
    category: "Road trips",
    region: "North Island",
    places: ["Auckland", "Hamilton", "Taupō", "Tūrangi", "Waiouru", "Taihape", "Wellington"],
    imageAlt: "Snow-covered Mount Ruapehu rising above a snowy plain of tussock and shrubs beside the Desert Road, with the cone of Ngāuruhoe in the distance on the right",
    related: ["north-island-two-week-road-trip", "wellington-wairarapa-camping-loop", "cook-strait-ferry-campervan-guide", "left-side-driving-new-zealand", "campervan-road-rules-new-zealand", "winter-driving-new-zealand-campervan", "new-zealand-driving-day-planner"],
    hubs: ["camping/central-north-island", "camping/wellington-kapiti"],
    intro:
      "Driving from Auckland to Wellington on State Highway 1 is about 640 km and takes 8 to 8.5 hours without stops, through Hamilton, Taupō, the Desert Road and Waiouru. Both totals are sums of official segment figures, because no official page read for this guide gives one end-to-end number: the National Army Museum at Waiouru lists 382 km and 4.5 hours from Auckland and 261 km and 3.5 hours from Wellington. Below are the route and the scenic alternative, a table of official leg figures, fuel and charging, the rules that matter, and where to sleep on the way.",
    sections: [
      s("Route, distance and time in one place", [
        "State Highway 1 is the through route. The National Army Museum Te Mata Toa sits on it at Waiouru, which its page calls the main road between Auckland and Wellington, and the museum lists approximate drive times to Waiouru of 382 km and 4.5 hours from Auckland and 261 km and 3.5 hours from Wellington. Added together that is 643 km and 8 hours. Love Taupō gives 3.5 hours from Auckland to Taupō and 4.5 hours from Wellington to Taupō, and the museum puts Taupō 1.5 hours from Waiouru, so going by Love Taupō's Auckland leg and the museum's two southern legs the total is 8.5 hours.",
        "None of these times include fuel stops, meals, roadworks or weather. DOC describes Tongariro National Park, which lies close to the middle of the route, as a 4 to 5 hour drive from either city, so a night near Taupō, Tūrangi or Ruapehu splits the drive into two similar days. The driving day planner works out how many hours a day suits your vehicle, and the Cook Strait ferry guide covers the next leg if you are crossing to the South Island.",
      ], ["About 640 km and 8 to 8.5 hours, by this page's sums", "Roughly 4 to 5 hours either side of Tongariro, per DOC", "Add fuel, meal and weather time"]),
      s("The fastest route and the scenic alternative", [
        "North of Taupō the main road runs through the Waikato. Waipā District Council's 2021 news item describes the Waikato Expressway as a four-lane State Highway 1 from south of the Bombay Hills to south of Cambridge, and says Waka Kotahi had proposed 110 km/h for the 64 km between Hampton Downs and Tamahere once that stretch met the safety standard. The item was written before the Hamilton section opened and does not give today's limit, so follow the signs. Love Taupō puts Hamilton about 2 hours from Taupō.",
        "South of Taupō the highway crosses the Central Plateau on the Desert Road, then runs through Waiouru and Taihape. Visit Rangitīkei calls Taihape the northern gateway to the Rangitīkei District and says it is well worth getting off the highway for. The Kāpiti Coast that follows is, in WellingtonNZ's words, 40 km of coastline from Paekākāriki to Ōtaki. The museum also recommends a more scenic alternative through Ohakune and the National Park around Mt Ruapehu, which connects back to State Highway 1. DOC gives Auckland to Whakapapa as 340 km and Wellington to Whakapapa as 330 km, each 4 hours 30 minutes to 5 hours, and the Tongariro Northern Circuit page covers the walking base there.",
      ], ["Waikato Expressway: check the posted limit", "Desert Road is 60 km between Tūrangi and Waiouru", "The Ohakune route rejoins State Highway 1"]),
      s("Stops and distances from official figures", [
        "The table lists the leg figures that official pages state. It has no figure for Auckland to Hamilton or for the run from Taihape to Wellington, because no official page read for this guide gave one. Subtracting the museum's Hamilton to Waiouru figure from its Auckland to Waiouru figure leaves about 120 km for Auckland to Hamilton, which is this page's own arithmetic and assumes both figures follow the same road.",
        "Read every time as driving only. Love Taupō's Auckland leg of 3.5 hours plus the museum's Taupō leg of 1.5 hours is 5 hours to Waiouru, against the museum's own 4.5 hours from Auckland, which is why the page gives a range for the total. The North Island two-week road trip guide shows how to turn the drive into a loop with proper stops.",
      ], ["Taupō is the natural halfway stop", "Two sources, half an hour apart", "No official figure for Auckland to Hamilton"], {
        caption: "Figures as each source states them, read 21 October 2026. Waiouru and Taupō are the sources' own reference points.",
        head: ["Leg", "Official figure", "Source"],
        rows: [
          ["Auckland to Taupō", "3.5 hours", "Love Taupō"],
          ["Hamilton to Taupō", "2 hours", "Love Taupō"],
          ["Hamilton to Waiouru", "262 km, 3.2 hours", "National Army Museum"],
          ["Taupō to Waiouru", "112 km, 1.5 hours", "National Army Museum"],
          ["Tūrangi to Waiouru (Desert Road)", "About 60 km", "Love Taupō"],
          ["Taihape to Mt Ruapehu", "About 50 minutes", "Visit Rangitīkei"],
          ["Waiouru to Wellington", "261 km, 3.5 hours", "National Army Museum"],
          ["Wellington to Taupō", "4.5 hours", "Love Taupō"],
          ["Auckland to Waiouru", "382 km, 4.5 hours", "National Army Museum"],
        ],
      }),
      s("Fuel, charging and toilets", [
        "Love Taupō names the last petrol stations before the Desert Road as the Z in Tūrangi on the north side and the Z in Waiouru on the south side, both with EV charging stations nearby. It says there are no public toilets along the route, so stops in Tūrangi or Waiouru are the plan, and that cell coverage is patchy in places but improving, so download maps ahead.",
        "For chargers elsewhere, NZTA's Journey Planner site has an EV charging stations map, and says its charging station details come from the operators. No official page read for this guide describes fuel in Hamilton, Taihape or on the Kāpiti Coast, so choose those stops from a live map on the day. The fuel cost guide and the fuel price apps guide help with budgeting, and the food and fuel resupply guide covers where to restock.",
      ], ["Last fuel before the Desert Road is in Tūrangi or Waiouru", "No public toilets on the Desert Road", "Download maps before the plateau"]),
      s("Road rules and hazards that matter", [
        "Traffic keeps left, and the left-side driving guide covers roundabouts and give-way rules while the campervan road rules guide covers vehicle rules. Love Taupō calls the Desert Road well maintained and part of the main state highway, but says the isolation deserves respect and that conditions can change quickly. Its pointer for real-time closures or icy conditions is NZTA's Journey Planner and social media pages.",
        "The museum describes Waiouru as sitting at the foot of Mt Ruapehu and the Desert Road, and offers the Ohakune route as the other way through. NZTA's own pages on closures, detours, speed limits and the newer motorways blocked scripts when this guide was researched, so this page gives no NZTA closure rules, detour routes or Transmission Gully and Kāpiti speed limits. Check the Journey Planner on the day, and read the winter driving guide before an early or late season trip.",
      ], ["Conditions on the plateau can change quickly", "NZTA Journey Planner for closures and ice", "Check posted limits on the new roads"]),
      s("Where to sleep between Auckland and Wellington", [
        "Love Taupō says certified self-contained vehicles can park overnight on any council-owned or council-managed land except its reserves and Ferry Road, where camping is prohibited, and that you must show a current self-containment warrant. For vehicles that are not self-contained it names three council areas: Hipapatua Recreational Reserve (Reid's Farm) in Taupō, Mangakino Recreation Reserve and Whakamaru Recreation Reserve, with a maximum stay of three nights and four days. The freedom camping rules guide and the green warrant guide cover the national picture, and every other council on the route sets its own rules.",
        "DOC runs two campsites within reach of the highway. Kaimanawa Road Campsite is 15 km south of Tūrangi on State Highway 1, then 3.5 km along Kaimanawa Road and up a gravel road: 10 non-powered or tent sites, no water, free, first come first served, and dogs only with a DOC permit. Ōtaki Forks Campsite is 19 km east of Ōtaki at the end of Ōtaki Gorge Road, open 24 October to 30 April, with 150 non-powered sites at $10 per adult per night and bookings required, and DOC says there is no phone or internet reception there. KiwiCamping's snapshot of DOC data from 11 August 2026 counts 14 campsites in the Central North Island, 7 in Waikato, 20 in Manawatū/Whanganui, 3 in Wellington/Kāpiti and 9 in Auckland, and the holiday parks guide covers powered sites in towns.",
      ], ["Taupō rules differ for self-contained and other vehicles", "Kaimanawa Road is free but has no water", "Book Ōtaki Forks before you arrive"]),
      s("Planning Auckland to Wellington in KiwiCamping", [
        "KiwiCamping is an iPhone app that maps DOC campsites, huts and holiday parks along this highway. Save the ones that suit you, put them in order as the stops of a trip, and the app shows the distance between each pair of stops and a forecast at every place on the list, which is useful on the plateau where Love Taupō says conditions can change quickly. It does not give turn-by-turn directions or live traffic, so keep NZTA's Journey Planner open for closures.",
        "In the patchy stretches, saved places, place details and guides remain readable, and map tiles, routing, weather and photos come back once you have signal again. Bookings for DOC sites such as Ōtaki Forks stay on DOC's own booking pages.",
      ], ["Save stops in driving order", "Forecast at each stop", "Book DOC sites on DOC's site"], undefined, true),
    ],
    sources: [
      { label: "National Army Museum Te Mata Toa: getting here (drive times to Waiouru)", url: "https://www.armymuseum.co.nz/visit/visit-us/getting-here/" },
      { label: "Love Taupō: getting to Taupō and around", url: "https://www.lovetaupo.com/en/plan/getting-here-around/" },
      { label: "Love Taupō: the Desert Road", url: "https://www.lovetaupo.com/en/discover/our-stories/the-desert-road-the-road-between-worlds/" },
      { label: "Love Taupō: where can I camp?", url: "https://www.lovetaupo.com/en/stay/where-can-i-camp/" },
      { label: "DOC: Tongariro National Park, getting there", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/central-north-island/places/tongariro-national-park/getting-there/" },
      { label: "Waipā District Council: councillors support 110 km/h on the Waikato Expressway (2021)", url: "https://www.waipadc.govt.nz/our-council/news?item=id:2g3c2t0cx17q9s7orafs" },
      { label: "Visit Rangitīkei: Taihape", url: "https://www.visitrangitikei.nz/our-district/taihape" },
      { label: "WellingtonNZ: Kāpiti Coast", url: "https://www.wellingtonnz.com/visit/kapiti-coast" },
      { label: "DOC: Kaimanawa Road Campsite", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/central-north-island/places/kaimanawa-forest-park/things-to-do/campsites/kaimanawa-road-campsite/" },
      { label: "DOC: Ōtaki Forks Campsite (School House Flat)", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/wellington-kapiti/places/tararua-forest-park/things-to-do/campsites/otaki-forks-campsite/" },
      { label: "NZTA Journey Planner (highway conditions and EV chargers)", url: "https://www.journeys.nzta.govt.nz/" },
    ],
  }),
  a({
    slug: "christchurch-to-queenstown-drive-guide",
    publishAt: "2026-12-16",
    title: "Christchurch to Queenstown Drive 2026: Route, Time, Stops and Camping",
    description: "Christchurch to Queenstown by road: about 6 hours via Lake Tekapo, Ōmārama and the Lindis Pass, with the Ōamaru and Crown Range alternatives, official leg times, fuel and camping.",
    category: "Road trips",
    region: "Canterbury and Otago",
    places: ["Christchurch", "Geraldine", "Lake Tekapo", "Twizel", "Ōmārama", "Lindis Pass", "Cromwell", "Queenstown"],
    imageAlt: "A wide tussock valley in the Lindis Pass with a road running along the far hillside under a clear blue sky",
    related: ["christchurch-tekapo-aoraki-road-trip", "south-island-two-week-road-trip", "queenstown-glenorchy-camping", "freedom-camping-waitaki-2026", "freedom-camping-queenstown-lakes-2026", "left-side-driving-new-zealand", "campervan-road-rules-new-zealand", "winter-driving-new-zealand-campervan"],
    hubs: ["camping/canterbury", "camping/otago"],
    intro:
      "The usual drive from Christchurch to Queenstown goes inland on State Highway 8 through Lake Tekapo, Twizel, Ōmārama and the Lindis Pass. Tourism Waitaki gives Christchurch to Ōmārama as 345 km and 4 hours, and its Queenstown Airport figure implies about 2 hours more, so allow roughly 6 hours of driving before stops, or about 6.5 hours if you go through Wānaka. No official page read for this guide gives one distance for the whole drive, so none is quoted. Below are the route options, a table of official leg times, fuel, the winter record on State Highway 8 and where to stay.",
    sections: [
      s("Christchurch to Queenstown: route, distance and time", [
        "NZTA's traffic bulletins name the highways on the inland route: State Highway 79 between Geraldine and Fairlie, State Highway 8 from Fairlie through Burkes Pass to Lake Tekapo and on to Lake Pūkaki and Twizel, and State Highway 8 again from Ōmārama over the Lindis Pass to Tarras. Visit Mackenzie says driving south from Christchurch takes approximately three hours to Lake Tekapo, with Aoraki/Mount Cook one hour further, and asks you to allow more time for Fairlie and Geraldine. Tourism Waitaki puts Christchurch to Ōmārama at 345 km and 4 hours.",
        "The last leg is this page's arithmetic. Tourism Waitaki gives Queenstown Airport to Ōamaru as 3.5 hours via State Highway 8 and then State Highway 83 at Ōmārama, and Ōmārama to Ōamaru as 1 hour 30 minutes, which leaves about 2 hours from Ōmārama to Queenstown and about 6 hours in all. Lake Wānaka Tourism gives Christchurch to Wānaka as 5.5 hours and Wānaka to Queenstown over the Crown Range as 1 hour, which makes 6.5 hours that way. The Christchurch to Tekapo and Aoraki guide covers the first half in detail, and the South Island two-week road trip guide puts the drive inside a longer loop.",
      ], ["About 6 hours via Ōmārama, by this page's sums", "About 6.5 hours via Wānaka and the Crown Range", "No official single distance found"]),
      s("The fastest route and the alternatives", [
        "The direct route is the inland one through Geraldine, Fairlie and Burkes Pass, and Visit Mackenzie lists Fairlie to Lake Tekapo as 30 minutes and Lake Tekapo to Twizel as 45 minutes. Ōmārama is, in Tourism Waitaki's words, a crossroads between Queenstown, Twizel and Waitaki. The coastal alternative runs down State Highway 1 to Ōamaru, which Tourism Waitaki gives as 3 hours 30 minutes and 248 km from Christchurch, then inland up the Waitaki Valley on State Highway 83 to Ōmārama, 1 hour 30 minutes and 118 km. That totals 366 km and 5 hours to Ōmārama, against 345 km and 4 hours direct.",
        "From the Lindis Pass you can reach Queenstown through Cromwell or through Wānaka. Lake Wānaka Tourism gives Wānaka to Queenstown as 1 hour over the Crown Range or 1 hour 15 minutes via Cromwell on State Highway 6, and calls the Cromwell route more gradual and recommended in poor weather or for those towing trailers or campervans. Its Crown Range page says chains must be carried from May to October, cites Queenstown Lakes District Council for that, and does not advise towing vehicles or vehicles longer than about 12 metres. The council's own page was bot-blocked when this guide was researched, so check it before a winter crossing.",
      ], ["Burkes Pass and Lindis Pass are both on State Highway 8", "Via Ōamaru adds about an hour to reach Ōmārama", "Cromwell route suits caravans and campervans in poor weather"]),
      s("Leg times and distances at a glance", [
        "The table gathers the leg figures from the official pages read for this guide. Aoraki/Mount Cook is a side trip rather than a stop on the way: DOC says it is accessed off State Highway 8 at the end of State Highway 80, and is a 3.5 hour drive from Queenstown and a 4.5 hour drive from Christchurch. Tekapo, Twizel and the village are covered by the Tekapo and Aoraki guide.",
        "Mixing sources needs care. Visit Mackenzie measures from Fairlie, Lake Tekapo and Twizel, Tourism Waitaki from Christchurch and Ōmārama, and Lake Wānaka Tourism from Wānaka, so the figures do not chain together exactly. Use them to see which stage is longest rather than to schedule to the minute.",
      ], ["Tekapo is about 3 hours from Christchurch", "Aoraki is a one-hour side trip from Tekapo", "Figures come from four different tourism and DOC pages"], {
        caption: "Times and distances exactly as each source gives them, read 21 October 2026.",
        head: ["Leg", "Official figure", "Source"],
        rows: [
          ["Christchurch to Lake Tekapo", "About 3 hours", "Visit Mackenzie"],
          ["Fairlie to Lake Tekapo", "30 minutes", "Visit Mackenzie"],
          ["Lake Tekapo to Twizel", "45 minutes", "Visit Mackenzie"],
          ["Lake Tekapo to Aoraki/Mount Cook Village (side trip)", "1 hour 15 minutes", "Visit Mackenzie"],
          ["Christchurch to Ōmārama via State Highway 8", "345 km, 4 hours", "Tourism Waitaki"],
          ["Christchurch to Ōamaru via State Highway 1", "248 km, 3 hours 30 minutes", "Tourism Waitaki"],
          ["Ōmārama to Ōamaru via State Highway 83", "118 km, 1 hour 30 minutes", "Tourism Waitaki"],
          ["Christchurch to Wānaka", "5.5 hours", "Lake Wānaka Tourism"],
          ["Wānaka to Queenstown, Crown Range", "1 hour", "Lake Wānaka Tourism"],
          ["Wānaka to Queenstown, via Cromwell", "1 hour 15 minutes", "Lake Wānaka Tourism"],
        ],
      }),
      s("Fuel, charging and food stops", [
        "Visit Mackenzie lists where to fill up: a BP in Fairlie on Main Street heading towards Lake Tekapo, a Challenge station at the north end of Lake Tekapo, a Mobil in Twizel on Mackenzie Drive in the centre of town, and a self-service pump at Aoraki/Mount Cook that takes credit cards only. No official page read for this guide lists fuel in Ōmārama, Tarras or Cromwell, so check opening hours on a live map before you cross the Lindis Pass.",
        "The EV charging map on NZTA's Journey Planner site shows chargers along the route, with a note that the operators supply the details. Tourism Waitaki points to the Paritea Clay Cliffs as a stop near Ōmārama: from State Highway 8 you take Henburn Road, park, and walk 15 minutes. Stock up with the help of the food and fuel resupply guide before the high country.",
      ], ["Fill up in Tekapo or Twizel before Ōmārama", "Aoraki pump is credit card only", "Clay Cliffs are a 15-minute walk from Henburn Road"]),
      s("Road rules and winter closures on State Highway 8", [
        "Destination Queenstown reminds visitors that New Zealand drives on the left, that roads can be narrow and winding, and that ice or snow on winter roads is possible. Visit Mackenzie adds that high-country roads have up-and-down slopes and winding sections. The left-side driving guide and the campervan road rules guide cover the rules, and the winter driving guide covers chains, ice and tyres.",
        "NZTA's own bulletins show how the closures work. On 28 October 2025 it closed State Highway 8 from Fairlie to Twizel, including Lake Tekapo and Burkes Pass, and State Highway 80 for heavy snow, and listed State Highway 8 from Tarras to Omarama including the Lindis Pass among the closures for snow and ice. In its early-July 2026 updates, State Highway 8 between Fairlie and Lake Pūkaki closed more than once for snow. A third bulletin, from 19 August 2025, closed the Omārama to Tarras section for snow and advised extra care after it reopened. Snow in late October has closed the road before, and NZTA's Journey Planner is where to check on the day.",
      ], ["Snow closed State Highway 8 in late October 2025", "Check the Journey Planner before the Lindis Pass", "Chains: carry them on the Crown Range from May to October"]),
      s("Where to sleep between Christchurch and Queenstown", [
        "DOC's Lake Poaka Campsite sits north of the Pūkaki Canal off State Highway 8 on the Tekapo to Twizel road: turn onto the private road and follow it 2.5 km. It has 30 non-powered or tent sites and a long drop toilet, is free, first come first served, with a maximum stay of four nights and no dogs, and DOC warns of loose gravel and corrugated surfaces on the access road. The Tekapo and Aoraki guide covers the other Mackenzie options.",
        "Freedom camping rules change at each district boundary. The Waitaki council guide covers the Ōmārama end and the Queenstown Lakes guide covers the last stretch, with the Queenstown and Glenorchy guide for the lakeside camps. KiwiCamping's DOC snapshot of 11 August 2026 counts 22 DOC campsites in Canterbury and 30 in Otago, which is where most of the route lies.",
      ], ["Lake Poaka is free with a four-night limit", "Check each council's rules on freedom camping", "Check Queenstown-area sites and rules before you arrive"]),
      s("Building the Christchurch to Queenstown drive in KiwiCamping", [
        "In KiwiCamping you can pin campsites, huts and holiday parks along the Mackenzie and Waitaki roads, drop them into a trip as ordered stops, and read the distance between each pair of stops with a forecast for every place on the list. The app is not a navigator, with no turn-by-turn directions and no live traffic, so NZTA's Journey Planner stays open on the side.",
        "A night at Tekapo, a night at Ōmārama or Cromwell and a night in Queenstown become three stops you can reorder, and the saved places and place details stay readable when the signal drops, whereas map tiles, routing, weather and photos need coverage.",
      ], ["Three stops are enough for most itineraries", "Forecast at every stop on the list", "Reorder stops when the weather changes"], undefined, true),
    ],
    sources: [
      { label: "Visit Mackenzie: getting here and around", url: "https://www.mackenzienz.com/getting-here-and-around/" },
      { label: "Tourism Waitaki: getting here", url: "https://www.waitakinz.com/about/getting-here" },
      { label: "Tourism Waitaki: Ōmārama", url: "https://www.waitakinz.com/destinations/omarama" },
      { label: "Lake Wānaka Tourism: driving to Wānaka", url: "https://www.wanaka.co.nz/plan-your-trip/getting-to-wanaka/driving-to-wanaka/" },
      { label: "DOC: Aoraki/Mount Cook National Park, getting there", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/canterbury/places/aoraki-mount-cook-national-park/getting-there/" },
      { label: "Destination Queenstown: getting here and getting around", url: "https://www.queenstownnz.co.nz/plan/getting-here-and-getting-around/" },
      { label: "NZTA traffic bulletin (28 October 2025): final closed highway in south reopens", url: "https://www.journeys.nzta.govt.nz/traffic-bulletins/update-final-closed-highway-in-south-reopens" },
      { label: "NZTA traffic bulletin (19 August 2025): SH8 reopens between Omarama and Tarras", url: "https://www.journeys.nzta.govt.nz/traffic-bulletins/lindis-passsh8-closed-due-to-snow" },
      { label: "NZTA traffic bulletin (July 2026): caution urged with rain, snow and ice ahead", url: "https://www.journeys.nzta.govt.nz/traffic-bulletins/update-caution-urged-with-rain-snow-and-ice-ahead" },
      { label: "NZTA Journey Planner (highway conditions and EV chargers)", url: "https://www.journeys.nzta.govt.nz/" },
      { label: "DOC: Lake Poaka Campsite", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/canterbury/places/twizel-area/things-to-do/lake-poaka-campsite/" },
    ],
  }),
];
