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
];
