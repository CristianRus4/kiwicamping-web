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
        "For chargers elsewhere, NZTA's Journey Planner site has an EV charging stations map, and says its charging station details come from the operators. The official pages read for the route say nothing about fuel in Hamilton, Taihape or on the Kāpiti Coast, so choose those stops from a live map on the day. The fuel cost guide and the fuel price apps guide help with budgeting, and the food and fuel resupply guide covers where to restock.",
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
  a({
    slug: "queenstown-to-milford-sound-drive-guide",
    publishAt: "2026-12-17",
    title: "Queenstown to Milford Sound Drive 2026: Route, Time, Winter Rules and Stops",
    description: "Queenstown to Milford Sound by road: 170 km to Te Anau and 120 km up the Milford Road, about 4 hours each way, with the Homer Tunnel, fuel, DOC's winter chain advice and campsites.",
    category: "Road trips",
    region: "Fiordland",
    places: ["Queenstown", "Te Anau", "Mirror Lakes", "The Divide", "Homer Tunnel", "The Chasm", "Milford Sound"],
    imageAlt: "A wide grassy valley in Fiordland with forested slopes and snow-capped peaks at its far end, seen from the Milford Sound road",
    related: ["fiordland-camping-road-trip", "freedom-camping-southland-2026", "freedom-camping-queenstown-lakes-2026", "milford-track-2026-27-huts-booking-fees", "routeburn-track-camping-2026-27", "queenstown-glenorchy-camping", "left-side-driving-new-zealand", "winter-driving-new-zealand-campervan"],
    hubs: ["camping/fiordland"],
    intro:
      "Queenstown to Milford Sound is about 4 hours of driving each way without stops: Visit Fiordland gives 170 km and 2 hours from Queenstown to Te Anau on State Highways 6 and 94, then 120 km and 2 hours up the Milford Road. DOC rates Queenstown to Milford and back at 600 km and 12 to 14 hours, and recommends starting the Milford trip from Te Anau instead. Below are the route, a table of Milford Road distances from DOC, fuel and toilets, winter chains and avalanche closures as DOC and NZTA state them, and where you can camp.",
    sections: [
      s("Queenstown to Milford Sound: distance and time", [
        "Visit Fiordland gives Queenstown to Te Anau as 170 km and Te Anau to Milford Sound as 120 km, each with 2 hours of driving allowed. Added together that is 290 km and about 4 hours one way, which is this page's own arithmetic; DOC's figure for the return trip from Queenstown is 600 km and 12 to 14 hours, a little over the 580 km the same sums give. DOC says Te Anau to Milford and back is 240 km and needs an eight hour day if you want the scenic stops, short walks and a boat cruise.",
        "The times are for driving only. Visit Fiordland says the Milford Road drive can be done in 2 hours but suggests leaving at least 3 to 4 hours, and that you should allow 30 minutes to park and reach the cruise terminal, with check-in 20 minutes before departure. It adds that if you think you will miss your cruise you can usually be accommodated on a later one, so there is no need to take risks on the road.",
      ], ["170 km to Te Anau, then 120 km to Milford", "About 4 hours each way, by this page's sums", "DOC advises starting from Te Anau"]),
      s("The route: Queenstown, Te Anau and the Milford Road", [
        "DOC and Visit Fiordland both give State Highway 6 and State Highway 94 as the way from Queenstown to Te Anau. Visit Fiordland describes it as a scenic journey along Lake Wakatipu and through rural Southland, and calls the Milford Road (State Highway 94) the only road access to Milford Sound. DOC calls Te Anau the nearest town with facilities and says Milford Sound has limited facilities.",
        "DOC suggests planning the return trip from Te Anau, and a night in town turns the 120 km into an early start rather than the end of a long day. The Fiordland camping road trip guide covers Te Anau and the lakes. Two Great Walks meet the road: DOC points to a half day walk on the Routeburn Track from The Divide to Key Summit, and the Routeburn and Milford Track guides cover those walks' bookings and huts. Visit Fiordland suggests a coach tour if you are at all concerned about the drive, and DOC says to take a bus if you are not confident in winter conditions.",
      ], ["State Highways 6 and 94 from Queenstown", "Te Anau is the last town with facilities", "A coach is an option, per DOC and Visit Fiordland"]),
      s("The Milford Road: stops and distances from Te Anau", [
        "The table lists the distances DOC gives north of Te Anau for the campsites and walks on the road. The Homer Tunnel is between the Cascade Creek and Chasm entries: DOC says it is 1.2 km long, 945 m above sea level, about 3.81 m tall and steeply downhill towards Milford, and that traffic lights over summer peak periods can cause delays of up to 20 minutes. DOC gives no distance from Te Anau for the tunnel.",
        "DOC describes the Mirror Lakes Walk as a 400 m return, 10 minute walk that is wheelchair accessible. The Chasm Walk is also 400 m return and 20 minutes, but DOC's page still describes storm damage from February 2020 and repair work planned for 2023 and 2024, so confirm what is open before you rely on it. DOC says there are endangered kea along the road and asks you not to feed them.",
      ], ["Mirror Lakes is about 56 km from Te Anau", "Homer Tunnel: up to 20 minutes' delay in summer peaks", "Do not feed the kea"], {
        caption: "DOC's Milford Road, walk and campsite pages, read 21 October 2026.",
        head: ["Place", "Distance north of Te Anau", "What DOC says"],
        rows: [
          ["Henry Creek Campsite", "23 km", "30 non-powered or tent sites, gravel road"],
          ["Walker Creek Campsite", "47 km", "5 non-powered or tent sites"],
          ["Totara Campsite", "50 km", "20 sites, south of Mirror Lakes; mobile reception"],
          ["Mirror Lakes Walk", "About 56 km", "400 m return, 10 minutes, wheelchair accessible"],
          ["Deer Flat Campsite", "62 km", "15 sites, wheelchair accessible toilets"],
          ["Kiosk Creek Campsite (Knobs Flat)", "63 km", "10 sites; public toilets at Knob's Flat"],
          ["Upper Eglinton Campsite", "68 km", "3 sites, gravel road not suitable for larger vehicles"],
          ["Cascade Creek Campsite", "71 km", "140 sites"],
          ["The Chasm car park", "About 109 km", "400 m return, 20 minutes"],
          ["Milford Sound/Piopiotahi", "120 km", "End of the road"],
        ],
      }),
      s("Fuel, toilets, phones and food", [
        "DOC says there are no shops or fuel stations between Te Anau and Milford Sound, and to have a full tank before leaving Te Anau and take food and drink with you. DOC does not say whether fuel is sold at Milford Sound itself, and Visit Fiordland says there are no shops or services along the way or in Milford Sound, so the safe plan is to fill up in Te Anau. Public toilets are at Te Anau, Knob's Flat and Milford.",
        "DOC says mobile coverage is limited, with reception at Te Anau Downs, Totara Campsite, The Divide and Milford Sound. There is a card-phone at Knobs Flat and at Milford Sound, and a satellite phone at the Homer Tunnel for emergency use only. DOC lists dump stations at Te Anau and Manapōuri and none at any Milford Road campsite, and Visit Fiordland asks drivers to pull over and let traffic past because there are no passing lanes.",
      ], ["Fill the tank in Te Anau", "Toilets at Te Anau, Knob's Flat and Milford only", "Reception at four named spots"]),
      s("Winter, chains and avalanche closures", [
        "DOC defines winter on this road as May to September, when conditions can be extremely challenging and the road is often covered in snow and ice. Its advice is to check the current road conditions because snow chains may be required, to rent chains in Te Anau if you need them, to know how to fit them before you start, and to leave from 9 am onwards because traffic is low, taking extra care where the road lies in shade. Roadside signs at Te Anau, Knobs Flat and Milford show current conditions, and DOC links to NZTA's Milford Road status page, which was bot-blocked to the tools used for this guide.",
        "DOC says the section between the Hollyford Road junction and The Chasm is a Restricted No Stopping Zone because it is an avalanche area, and says to expect closures and delays from weather, rock falls and snow or avalanche in winter. Visit Fiordland says the road is closed in winter if there is avalanche danger until snow is displaced by explosives and debris is cleared. An NZTA bulletin of 28 October 2025 shows how that looks: it lists the Milford Sounds Highway between East Gate (Hollyford) and Donne River (Westgate) as reopening by 10 am, and later says the highway had reopened but would close again at 5 pm for evening snow.",
      ], ["May to September is DOC's winter", "No stopping between the Hollyford Road junction and The Chasm", "Check NZTA's status page before you leave"]),
      s("Where to sleep on the Milford Road", [
        "DOC lists seven campsites on the road in the table above, all with adult fees of $18 and child fees of $9 per night, infants free, bookings required and no dogs, and asks you to book Milford Road campsites online before your visit. It says freedom camping within 200 m of the Milford Road is not allowed. The Southland council guide covers the freedom camping rules around Te Anau and the Queenstown Lakes guide covers the Queenstown end, and the holiday parks guide covers powered sites in Te Anau and Queenstown.",
        "Check each site's page before booking: DOC says Upper Eglinton's gravel road is not suited to larger vehicles, and Cascade Creek books a site that is allocated or chosen on arrival. KiwiCamping's August 2026 snapshot of DOC data counts 13 campsites for Fiordland, against 5 for Southland and 30 for Otago.",
      ], ["All seven Milford Road campsites are $18 per adult", "No freedom camping within 200 m of the road", "Upper Eglinton suits smaller vehicles"]),
      s("Planning Queenstown to Milford Sound in KiwiCamping", [
        "KiwiCamping is an iPhone app that shows DOC campsites, huts and holiday parks around Queenstown, Te Anau and the Milford Road. Add the ones you choose to a trip as ordered stops, and it shows the distance and drive time between each pair, plus a forecast for each place, which matters when DOC calls winter conditions on this road extremely challenging. It has no turn-by-turn navigation and no live traffic, so the NZTA status page remains the check for closures.",
        "Save your campsite and Te Anau night beforehand. Place details, saved places and guides open without coverage, and map tiles, routing, weather and photos only load where there is signal, which on much of this road means Te Anau Downs, Totara, The Divide and Milford Sound, as DOC lists them. Bookings stay on DOC's own site.",
      ], ["Order the Te Anau night and the campsite as stops", "Forecast for each place on the list", "Book on DOC's site"], undefined, true),
    ],
    sources: [
      { label: "DOC: Milford Road/Milford Sound area", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/places-to-go/milford-road-milford-sound-area/" },
      { label: "DOC: Milford Road tips for drivers", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/places-to-go/milford-road-milford-sound-area/milford-road-tips-for-drivers/" },
      { label: "DOC: Fiordland National Park, getting there", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/getting-there/" },
      { label: "Visit Fiordland: getting to Fiordland", url: "https://www.fiordland.org.nz/plan/getting-to-fiordland/" },
      { label: "Visit Fiordland: the Milford Road", url: "https://www.fiordland.org.nz/visit/milford-road/" },
      { label: "Visit Fiordland: driving in Fiordland", url: "https://www.fiordland.org.nz/plan/driving-in-fiordland/" },
      { label: "DOC: Mirror Lakes Walk", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/tracks/mirror-lakes-walk/" },
      { label: "DOC: The Chasm Walk", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/tracks/the-chasm-walk/" },
      { label: "DOC: Henry Creek Campsite", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/campsites/henry-creek-campsite/" },
      { label: "DOC: Walker Creek Campsite", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/campsites/walker-creek-campsite/" },
      { label: "DOC: Totara Campsite", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/campsites/totara-campsite/" },
      { label: "DOC: Deer Flat Campsite", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/campsites/deer-flat-campsite/" },
      { label: "DOC: Kiosk Creek Campsite", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/campsites/kiosk-creek-campsite/" },
      { label: "DOC: Upper Eglinton Campsite", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/campsites/upper-eglinton-campsite/" },
      { label: "DOC: Cascade Creek Campsite", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/campsites/cascade-creek-campsite/" },
      { label: "NZTA traffic bulletin (28 October 2025): final closed highway in south reopens", url: "https://www.journeys.nzta.govt.nz/traffic-bulletins/update-final-closed-highway-in-south-reopens" },
    ],
  }),
  a({
    slug: "auckland-to-bay-of-islands-drive-guide",
    publishAt: "2026-12-18",
    title: "Auckland to Bay of Islands Drive 2026: Route, Time, Ferry and Camping",
    description: "Auckland to the Bay of Islands by road: about 240 km and 3 to 3.5 hours on State Highway 1 through Whangārei and Kawakawa, the Opua car ferry to Russell, fuel notes and where to camp.",
    category: "Road trips",
    region: "Northland",
    places: ["Auckland", "Waipū", "Whangārei", "Kawakawa", "Paihia", "Opua", "Russell"],
    imageAlt: "A car ferry at the Okiato landing with a white wheelhouse, three cars waiting on the deck and a green hillside of houses and boats across the water of the Bay of Islands",
    related: ["northland-cape-reinga-camping-route", "bay-of-islands-camping-week", "freedom-camping-whangarei-2026", "left-side-driving-new-zealand", "campervan-road-rules-new-zealand", "one-lane-bridges-gravel-roads-new-zealand", "kauri-dieback-camping-travel", "food-fuel-resupply-new-zealand-road-trip"],
    hubs: ["camping/northland", "camping/auckland"],
    intro:
      "Driving from Auckland to the Bay of Islands is about 240 km on State Highway 1 through Whangārei and Kawakawa, and takes roughly 3 to 3.5 hours without stops. The distance adds up the three legs in the Waitangi Treaty Grounds' directions, and the time comes from two official pages that say about three hours and from segment times that run a little longer. The route, its quieter alternatives, a table of official leg figures, fuel and food, the road notes, the Opua car ferry to Russell and the camping options follow in that order.",
    sections: [
      s("The drive in one answer", [
        "The Waitangi Treaty Grounds give their directions from Auckland in three legs: State Highway 1 north to Whangārei, 165 km, then the signs north to Kawakawa, a further 60 km, then the signs to Paihia, 15 km more. Together that is 240 km, which is this page's own sum, because no page read for this guide states one end-to-end figure. The Treaty Grounds call it an approximately 3-hour drive, and Visit Bay of Islands describes a pleasant three-hour drive north of Auckland via the East Coast highway.",
        "Segment times run longer. WhangareiNZ puts Whangārei city approximately two and a half hours north of Auckland, and Russell Info says Kawakawa is about 45 minutes beyond Whangārei, so the road to Paihia is closer to 3.5 hours before any stop. None of these times allow for fuel, meals, roadworks or holiday traffic. A pause at Waipū, Whangārei or Kawakawa breaks the day into shorter legs, and the Treaty Grounds sit just 2 km from Paihia, so the first afternoon can go to them.",
      ], ["About 240 km, from the Treaty Grounds' three legs", "3 hours on two official pages, about 3.5 by segment times", "Fuel, meals and holiday traffic are extra"]),
      s("The fastest route and the quieter alternatives", [
        "State Highway 1 is the through road, and Visit Bay of Islands says it runs through the Bay of Islands itself, with towns and sights well signposted. WhangareiNZ calls it a scenic route with many attractions, and suggests following the Twin Coast Discovery Highway from Te Hana to drive the East Coast. Northland NZ describes the Brynderwyn ranges as the inland route on State Highway 1 and sets out a coastal loop from Kaiwaka through Mangawhai, Waipū and Ruakākā, so the two can be combined into a loop from Kaiwaka. NZTA's pages on the motorway extension north of Warkworth and on the Brynderwyn Hills blocked scripts, so this page cannot say which sections are open today.",
        "Two other roads reach the bay. Russell Info says that about 20 minutes north of Whangārei you turn right towards Whakapara and follow the signs for Ōakura, and that a long winding but fully sealed coastal road leads all the way to Russell. DOC's Puriri Bay page gives the same turn as Russell Road, 22 km north of Whangārei. Visit Bay of Islands also names the Kauri Coast route via the Hokianga as a less-travelled way there or back, which the Cape Reinga route guide takes further. WhangareiNZ warns that leaving the main routes can mean unsealed roads.",
      ], ["Brynderwyn ranges: the inland route on State Highway 1", "Whakapara and Ōakura: the coastal road to Russell", "Side roads may be unsealed"]),
      s("Stops and distances from official figures", [
        "The table lists each figure as its source states it. Where two pages disagree the cell says so, and the Auckland to Paihia total above is the only sum. WhangareiNZ says the Whangārei district begins 106 km north of Auckland, and Northland NZ puts Mangawhai Heads, the closest holiday destination to Auckland, 90 minutes from the city centre.",
        "Read every time as driving only. Russell Info puts Okiato about 15 minutes from Russell in one paragraph and 10 minutes in another, while Northland Ferries says about 10 minutes, so allow the longer figure. For the stays themselves, the Bay of Islands week guide covers the bay's bases and the Whangārei freedom camping guide covers the district's rules.",
      ], ["Whangārei to Kawakawa is the longest middle leg at 60 km", "Waitangi is 2 km from Paihia", "Allow the longer Okiato to Russell time"], {
        caption: "Figures as each source states them, read 21 October 2026.",
        head: ["Leg", "Official figure", "Source"],
        rows: [
          ["Auckland to Whangārei", "165 km", "Waitangi Treaty Grounds"],
          ["Auckland to Whangārei city", "Approximately 2.5 hours", "WhangareiNZ"],
          ["Start of Whangārei district", "106 km north of Auckland", "WhangareiNZ"],
          ["Auckland city centre to Mangawhai Heads", "About 90 minutes", "Northland NZ"],
          ["Uretiti Beach turn-off", "5 km north of Waipū, 34 km south of Whangārei", "DOC"],
          ["Whangārei to Kawakawa", "60 km; about 45 minutes", "Waitangi Treaty Grounds; Russell Info"],
          ["Kawakawa to Paihia", "15 km", "Waitangi Treaty Grounds"],
          ["Paihia to Waitangi Treaty Grounds", "2 km, a 2-minute drive", "Waitangi Treaty Grounds"],
          ["Paihia to Opua", "About 7 minutes' drive", "Northland Ferries"],
          ["Opua to Okiato by car ferry", "10 minutes", "Northland Ferries"],
          ["Okiato to Russell", "About 10 minutes' drive (Russell Info also says 15)", "Northland Ferries; Russell Info"],
          ["Paihia to Kerikeri airport", "23 km", "Visit Bay of Islands"],
        ],
      }),
      s("Fuel, charging and food stops", [
        "No official page read for this guide lists petrol stations on State Highway 1, so this page names none. For electric vehicles, WhangareiNZ says its district has one of the highest EV ownership rates in the country and a network of charging stations, and points to ChargeNet and PlugShare for maps. NZTA's Journey Planner site has its own EV chargers map and says the details come from the operators. The fuel price apps guide and the food and fuel resupply guide help with the rest.",
        "Northland NZ names a few stops worth leaving the highway for. Waipū has the Waipū Museum, McLeod's Pizza Barn and Brewery, and a quick dip at Waipū Cove. Kawakawa has the Hundertwasser public toilets and Te Hononga Hundertwasser Memorial Park, and the Bay of Islands Vintage Railway leaves from the main street on a 120 minute journey towards Opua. The Waiomio Kawiti Glow-worm Caves are just south of the town. The page lists no opening hours for any of them.",
      ], ["No official fuel list read for this route", "EV maps from ChargeNet, PlugShare and NZTA", "Kawakawa and Waipū are the natural breaks"]),
      s("Road rules and hazards worth knowing", [
        "Traffic keeps left, and the left-side driving guide covers roundabouts and give-way rules, while the campervan road rules guide covers vehicle rules and the one-lane bridges guide covers the single-lane crossings. The Treaty Grounds' own directions mention a one-lane bridge on the last stretch into Waitangi. NZTA's pages on the Brynderwyn Hills closures, detours and speed limits blocked scripts, so this page quotes none and gives no toll information either.",
        "NZTA's Journey Planner site lists road closures, incidents, roadworks and traffic cameras, and warns that its route suggestions come from Google and may show a route that a closure has made unsuitable. It also says every holiday period and long weekend sends large numbers of people out of the main centres to popular destinations, causing queues and delays, and it recommends planning ahead and travelling outside the busiest times. Its holiday journey map predicts the heavy periods, which matters for a Northland run in late December and January.",
      ], ["Check the Journey Planner on the day", "Plan around holiday weekends", "The last bridge into Waitangi is one lane"]),
      s("Crossing to Russell on the Opua car ferry", [
        "Northland NZ says the vehicle ferry crosses from Opua to Okiato, connecting Russell to State Highway 1. Northland Ferries says the crossing takes 10 minutes, with departures about every 10 minutes during the day and about every 20 minutes early morning and late evening. The first ferry leaves Opua at 6:10am and Okiato at 6:00am, and the last leaves Opua at 10:00pm and Okiato at 9:50pm. Tickets are bought on board, and passengers in the vehicle cost nothing extra.",
        "The operator says the ferries take all vehicles including campervans, and that campervans, being long and low at the rear, can scrape the ramp at low tide, so it asks for travel in the two hours either side of high tide. Trailer boats and caravans have the same advice across a four-hour window. The speed limit on the ferry is 5 km/h. The fares are estimates charged by length, and staff confirm the price at boarding. Visit Bay of Islands names the Paihia Russell passenger ferry as the foot-passenger option.",
      ], ["10-minute crossing, about every 10 minutes", "Campervans: aim for two hours either side of high tide", "Fare is charged by vehicle length"], {
        caption: "One-way fares per vehicle from Northland Ferries' vehicle ferry page, read 21 October 2026. Passengers in the vehicle cost nothing extra.",
        head: ["Vehicle", "One-way fare"],
        rows: [
          ["Car or ute under 6 m", "$19.80"],
          ["2-berth campervan under 6 m", "$19.80"],
          ["2-berth campervan with toilet and shower, 6 to 8 m", "$33.80"],
          ["Vehicle or motorhome 8 to 10 m", "$41.10"],
          ["Vehicle or motorhome 10 m and over", "$81.70"],
          ["Motorcycle", "$9.70"],
        ],
      }),
      s("Where to sleep between Auckland and the Bay of Islands", [
        "Whangārei is an accredited Motorhome Friendly Town according to WhangareiNZ, which says tents, vehicles and certified self-contained vehicles each have their own rules and sites, and sends you to the council's freedom camping page. The Whangārei freedom camping guide sets out the bylaw, so it is linked here rather than repeated. Far North District Council, which covers Kawakawa, Paihia and Russell, blocked scripts, so this page states none of its rules. The local council rules guide explains how to check a district's page.",
        "DOC runs two campsites that suit the drive. Uretiti Beach Campsite is 5 km north of Waipū and 34 km south of Whangārei off State Highway 1, with 300 non-powered sites, bookings required, $18 per adult, no fires and no dogs, and a minimum three-night stay from 28 December to 1 January. Its gates are locked from 9:00 pm to 7:00 am. Puriri Bay at Whangaruru North Head is reached from Russell Road, has 90 sites at $20 per adult with bookings required, and DOC says to book well ahead from 1 December to 28 February. Puketī Recreation Area, off State Highway 10 near Waipapa, has 20 sites at $10 and 7 km of gravel access.",
        "The Northland hub in KiwiCamping, built from DOC's data of 11 August 2026, holds 14 DOC campsites, 11 of them bookable online through DOC, and Uretiti Beach is the largest at 300 sites. The Auckland hub holds 9. The holiday parks guide covers powered sites in the towns, and the kauri dieback guide covers the cleaning stations at forest campsites such as Puketī.",
      ], ["Uretiti: three-night minimum 28 December to 1 January", "Puriri Bay: book ahead from 1 December", "Far North freedom camping rules are not stated here"]),
      s("Planning Auckland to the Bay of Islands in KiwiCamping", [
        "KiwiCamping is an iPhone app that puts the campsites, huts and holiday parks along State Highway 1 on one map. Build a trip from the ones you pick, in driving order, and it shows the distance between each pair of stops with a forecast at every place, so a night at Uretiti Beach followed by one near Paihia is easy to compare. The app does not navigate turn by turn and has no traffic layer, so use NZTA's Journey Planner for roadworks and closures.",
        "Where reception drops, the details of each place, the places you have saved and the guides all load from the phone, and map tiles, routing, weather and photos return with the signal. DOC's booking site holds the reservations for Uretiti and Puriri Bay, and the ferry fare is paid on board. Free to download, with in-app purchases.",
      ], ["Order the stops as you will drive them", "Forecast at each place", "Reserve DOC nights on DOC's site"], undefined, true),
    ],
    sources: [
      { label: "Waitangi Treaty Grounds: how to get here (directions from Auckland)", url: "https://www.waitangi.org.nz/visit/how-to-get-here" },
      { label: "Visit Bay of Islands: getting there and around", url: "https://www.visitboi.co.nz/travel-information/getting-there-around" },
      { label: "WhangareiNZ: getting to Whangārei", url: "https://www.whangareinz.com/Discover/Getting-there-and-around/Getting-to-Whangarei" },
      { label: "WhangareiNZ: electric vehicles in Whangārei", url: "https://www.whangareinz.com/Discover/Getting-there-and-around/Electric-vehicle-friendly-town" },
      { label: "WhangareiNZ: camping", url: "https://www.whangareinz.com/Discover/Visitor-information/Camping" },
      { label: "Russell Info: transport and getting to Russell", url: "https://www.russellinfo.co.nz/transport" },
      { label: "Northland Ferries: Bay of Islands vehicle ferry (timetable and fares)", url: "https://northlandferries.co.nz/bay-of-islands-ferry/" },
      { label: "Northland NZ: Bay of Islands", url: "https://www.northlandnz.com/visit/destinations/bay-of-islands/" },
      { label: "Northland NZ: Whangārei and the Tūtūkākā Coast", url: "https://www.northlandnz.com/visit/destinations/whangarei-and-tutukaka-coast/" },
      { label: "Northland NZ: the Welcoming Coast journey", url: "https://www.northlandnz.com/visit/northland-journeys/the-welcoming-coast/" },
      { label: "Northland NZ: Twin Coast Discovery Highway", url: "https://www.northlandnz.com/visit/northland-journeys/the-twin-coast-discovery-highway/" },
      { label: "DOC: Uretiti Beach Campsite", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/northland/places/waipu-area/things-to-do/uretiti-beach-campsite/" },
      { label: "DOC: Puriri Bay (Whangaruru North Head) Campsite", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/northland/places/whangaruru-north-head-scenic-reserve/things-to-do/puriri-bay-whangaruru-north-head-campsite/" },
      { label: "DOC: Puketī Recreation Area Campsite", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/northland/places/puketi-and-omahuta-forests/things-to-do/puketi-recreation-area-campsite/" },
      { label: "NZTA Journey Planner (conditions, holiday traffic and EV chargers)", url: "https://www.journeys.nzta.govt.nz/" },
    ],
  }),
];
