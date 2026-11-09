import { makeArticle as a, type Article, type ArticleSection, type ArticleTable } from "@/lib/article-model";

const s = (heading: string, body: string[], tips?: string[], table?: ArticleTable, cta?: boolean): ArticleSection => ({ heading, body, tips, ...(table && { table }), ...(cta && { cta }) });

/** City itineraries, road trips from Christchurch, camping bases for day walks, two bike trails and glamping (wave 4, lane K6). */
export const cityTripArticles: Article[] = [
  a({
    slug: "auckland-3-days-campervan",
    title: "Auckland in 3 Days by Campervan: Itinerary, Parking and Where to Camp",
    description: "A three-day Auckland itinerary for a campervan: the city and waterfront, the west coast beaches of the Waitākere Ranges, and an island or the north, with parking, traffic and campground tips.",
    category: "Road trips",
    region: "Upper North Island",
    places: ["Auckland", "Piha", "Muriwai", "Waiheke Island", "Rangitoto", "Matakana"],
    imageAlt: "Piha Beach and Lion Rock on Auckland's west coast",
    related: ["freedom-camping-auckland-2026", "auckland-to-bay-of-islands-drive-guide", "coromandel-rotorua-road-trip", "north-island-two-week-road-trip", "holiday-parks-new-zealand-guide", "new-zealand-driving-day-planner"],
    hubs: ["camping/auckland"],
    intro:
      "Most campervan trips start or end in Auckland, and three days is enough to see the harbour, the black-sand beaches of the west coast and one of the islands without driving far. The city is the hardest place in the country to park a van, so the plan below keeps the city day short, spends the second day out on the Waitākere coast and leaves the third for an island or the Matakana coast.",
    sections: [
      s("Where to base yourself", [
        "A campervan in central Auckland is awkward: car park height limits, one-way streets and heavy traffic on the motorways at either end of the day. The easiest base is a holiday park on the edge of the city, from where you can reach the centre by bus, train or ferry and leave the van parked. Auckland Council also runs campgrounds in its regional parks, such as Tawharanui and Shakespear on the northern side and Whatipu on the west coast, which are bookable ahead and a long way from the city feel.",
        "Freedom camping in Auckland is limited to a few permitted places and only in a certified self-contained vehicle, and the rules and fines are strictly enforced, so read the freedom camping in Auckland guide before relying on it. Most visitors do better on a holiday park for the first and last night, when you also want power, a shower and somewhere safe to sort the gear.",
      ], ["Park the van, use public transport in the centre", "Council regional park campgrounds need booking", "Freedom camping is limited and enforced"]),
      s("Day 1: the city and the waterfront", [
        "Start with the Viaduct and the waterfront, walk to the Sky Tower and Wynyard Quarter, and spend the middle of the day at the Auckland Domain and the museum on the hill. In the afternoon go up one of the volcanic cones, Maungawhau (Mount Eden) or Maungakiekie (One Tree Hill), for the view over both harbours. Parking is easier at the cones than in the centre, though check the signs, as the roads are busy at weekends.",
        "Finish the day with dinner in Ponsonby or on the waterfront and return to the holiday park by public transport if you can. A campervan in the evening peak on the Southern or Northwestern motorway can take more than an hour to cover a short distance, so build the day around the traffic and not through it.",
      ], ["Volcanic cones for the view", "Leave the van at the park", "Avoid the evening peak"]),
      s("Day 2: the Waitākere Ranges and the west coast", [
        "Take the road through the Waitākere Ranges to Piha, with a stop at the Arataki Visitor Centre for the view and the walks. Lion Rock at Piha is the famous landmark, and the beach is a popular surf spot with strong currents, so swim only between the flags where lifeguards patrol. Karekare, with its waterfall walk, is a short drive to the south.",
        "Continue north to Muriwai, where the gannet colony nests on the cliffs from about August to March and a short boardwalk gives you a close view. The roads in the ranges are narrow and winding, with kauri dieback hygiene stations at many tracks, so clean your boots and stay on the track. Check the weather, because a wet day on these roads is slow.",
      ], ["Swim between the flags at Piha", "Gannets at Muriwai, August to March", "Clean boots at kauri dieback stations"]),
      s("Day 3: an island or the Matakana coast", [
        "Two good options. By ferry from the downtown terminal, Rangitoto is a volcanic island with a walk to the summit and lava caves, and Waiheke has beaches, wineries and cafes, with buses and bikes for getting around. You do not take the van, so a day trip is simple, and you can leave it at the park.",
        "Or head north, where the Matakana farmers' market runs on Saturday mornings, and the beaches at Omaha and Pākiri are a short drive on. From there Tawharanui Regional Park has a campground and a beach, a good last night if you have booked it ahead. The Northern Gateway toll road is the quick way out of Auckland and needs to be paid online afterwards, so check how your hire company handles tolls.",
      ], ["Rangitoto and Waiheke by ferry", "Matakana market on Saturday", "Tolls need paying online"]),
      s("Practical tips for driving in Auckland", [
        "Traffic is the main issue, with peaks from about 7 to 9 in the morning and 4 to 6.30 in the evening, and State Highway 1 is slow in both directions. Allow double the time the map suggests in the peak, and avoid collecting or returning a van at those times. Fuel is cheaper in the suburbs than at the motorway service stations.",
        "Take care on the left, with the narrow lanes in older suburbs and the parked cars on both sides. The left-side driving guide and the campervan road rules guide cover the basics. After Auckland, the road trip to the Bay of Islands and the Coromandel loop are the two easy ways north and south.",
      ], ["Allow double the time in the peak", "Fill up in the suburbs", "Next stop: Northland or the Coromandel"]),
      s("Planning your three days in KiwiCamping", [
        "KiwiCamping is an iPhone app that maps DOC campsites, huts and holiday parks, with filters for campervan access and facilities. Save a base and a backup near the city, add the stops you choose to a trip in order, and the app shows the distance between each pair of stops and a forecast for every place on your list. It does not give turn-by-turn directions or live traffic, so use your maps app for the motorways.",
        "Bookings for council and DOC campgrounds stay on their own booking pages. Free to download, with in-app purchases.",
      ], ["Save a base and a backup", "Forecast at each stop", "Book council campgrounds ahead"], undefined, true),
    ],
    faq: [
      ["Can I park a campervan in central Auckland overnight?", "Only in a few permitted places and only in a certified self-contained vehicle, and the rules are strictly enforced. Most visitors use a holiday park on the edge of the city and take public transport in."],
      ["How many days do you need in Auckland by campervan?", "Three days covers the city, the west coast beaches and an island or the Matakana coast without long drives. It is a good start or finish to a longer North Island trip."],
    ],
    sources: [
      { label: "Auckland Council: regional park camping", url: "https://www.aucklandcouncil.govt.nz/parks-recreation/" },
      { label: "NZTA: Auckland tolls and Journey Planner", url: "https://www.nzta.govt.nz/roads-and-rail/auckland-transport-and-roads/" },
      { label: "Tātaki Auckland Unlimited: things to do in Auckland", url: "https://www.aucklandnz.com/" },
    ],
  }),
  a({
    slug: "wellington-3-days-campervan",
    title: "Wellington in 3 Days by Campervan: Itinerary, Parking and Where to Camp",
    description: "A three-day Wellington itinerary for a campervan: the waterfront and museums, the cable car and Zealandia, the south coast and Eastbourne, with parking, ferry and campground tips.",
    category: "Road trips",
    region: "Lower North Island",
    places: ["Wellington", "Zealandia", "Eastbourne", "Petone", "Paekākāriki", "Lower Hutt"],
    imageAlt: "Evans Bay in Wellington with houses on the hills behind the water",
    related: ["freedom-camping-wellington-2026", "cook-strait-ferry-campervan-guide", "wellington-wairarapa-camping-loop", "wellington-to-napier-drive-guide", "auckland-to-wellington-drive-guide", "campervan-road-rules-new-zealand"],
    hubs: ["camping/wellington-kapiti"],
    intro:
      "Wellington is the most compact of the big cities, with a harbour, a walkable waterfront and bush two minutes from the centre, and it is also where the ferries to the South Island leave. Three days gives you the museums and the waterfront, a day in the hills and at the sanctuary, and a day around the harbour and the south coast. The trick with a campervan is the same as in any city: park it out of the centre and walk, cycle or take a bus in.",
    sections: [
      s("Where to base yourself", [
        "Central Wellington has little room for a van, and the streets are steep, narrow and often one way. The easier bases are the holiday parks in the Hutt Valley and on the Kāpiti Coast, from where a train runs into the city, or the DOC and council campsites in the Remutaka Forest Park, about 30 to 45 minutes away. If you arrive or leave on a ferry, a night near the terminal saves a rushed morning.",
        "Wellington City Council limits freedom camping to a few permitted places for self-contained vehicles, and the rules and fines are enforced, as the freedom camping in Wellington guide explains. For the first and last night a holiday park with power and a shower is the simplest choice.",
      ], ["Base in the Hutt or on the Kāpiti Coast", "Train into the city", "Freedom camping is limited"]),
      s("Day 1: the waterfront and the city", [
        "Walk the waterfront from the Wellington Cable Car terminus down Lambton Quay and along to Te Papa, the national museum, which could fill the morning on its own. Cuba Street is the place for coffee and food, and the Parliament buildings, including the Beehive, offer free tours. In the afternoon, ride the cable car up to the Botanic Garden and walk down through the garden to the city.",
        "Wellington is windy, so a jacket helps even in summer, and the harbour can be rough for the ferries. In the evening, Oriental Bay is the nearest thing the city has to a beach, with a long promenade and cafes.",
      ], ["Te Papa takes a morning", "Cable car up, walk down", "A jacket, even in summer"]),
      s("Day 2: Zealandia and the hills", [
        "Zealandia is a fenced sanctuary a few minutes from the city, where native birds such as the kākā, tūī and takahē live without the pests that threaten them elsewhere, and a morning or a night tour is the best way to see it. Nearby, the walking tracks at Makara Peak and Mount Victoria give views over the harbour, and the lookout at Mount Victoria is an easy short walk.",
        "In the afternoon take the road to the south coast, where Island Bay and Owhiro Bay lead to the Red Rocks walk and the seal colony, which is best from late autumn through winter. Keep a safe distance from the seals, which can be aggressive when disturbed. The drive along the coast is narrow, so a long van needs care.",
      ], ["Book Zealandia ahead", "Mount Victoria is an easy lookout", "Keep away from seals"]),
      s("Day 3: around the harbour", [
        "Drive or take the train to Petone, then follow the eastern bays road through Eastbourne to Days Bay, where there is a beach, a cafe and a ferry back to the city. The road is narrow with limited parking at the weekend, so go early. The Wainuiomata and Remutaka hills have bush walks if the weather is good.",
        "If you have a spare day or are heading north, the Kāpiti Coast is an hour away, with Paekākāriki and its beach and the Kāpiti Island nature reserve, which needs a permit and a boat. The Wairarapa loop goes over the Remutaka Hill and is covered in the Wellington and Wairarapa guide.",
      ], ["Go early to Days Bay", "Kāpiti Island needs a permit", "Wairarapa over the Remutaka Hill"]),
      s("The ferry and the road north", [
        "The Interislander and Bluebridge ferries cross Cook Strait to Picton in about three and a half hours, and vehicles need a booking, especially in summer and the school holidays. Check in around an hour before sailing, and read the Cook Strait ferry guide for sizes and costs. Rough weather can cancel sailings, so keep a spare day.",
        "North of the city, State Highway 1 runs past the Kāpiti Coast to Ōtaki and Levin, and the drive to Napier is covered in the Wellington to Napier guide. The Auckland to Wellington guide covers the full length of the island.",
      ], ["Book the ferry early", "Check in an hour before", "Keep a spare day for weather"]),
      s("Planning your three days in KiwiCamping", [
        "KiwiCamping is an iPhone app that maps DOC campsites, huts and holiday parks, with filters for campervan access and facilities. Save a base outside the city and a backup, add the stops to a trip in order, and the app shows the distance between each pair of stops and a forecast at every place, which helps in a windy city. It does not give turn-by-turn directions or live traffic, so use your maps app for the roads.",
        "DOC and council bookings stay on their own booking pages. Free to download, with in-app purchases.",
      ], ["Save a base outside the city", "Forecast at each stop", "Book DOC sites on DOC's site"], undefined, true),
    ],
    faq: [
      ["Where can a campervan park in Wellington?", "Camp at a holiday park or a DOC or council campsite outside the centre, and take the train or bus in. Freedom camping is limited to a few permitted places and needs a certified self-contained vehicle."],
      ["How long does the Wellington to Picton ferry take?", "About three and a half hours on the Interislander or Bluebridge. Vehicles need a booking, and sailings can be cancelled in rough weather."],
    ],
    sources: [
      { label: "Wellington City Council: freedom camping", url: "https://wellington.govt.nz/" },
      { label: "DOC: Remutaka Forest Park", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/wellington-kapiti/" },
      { label: "WellingtonNZ: things to do", url: "https://www.wellingtonnz.com/" },
    ],
  }),
  a({
    slug: "dunedin-3-days-campervan",
    title: "Dunedin in 3 Days by Campervan: Itinerary, Otago Peninsula and Where to Camp",
    description: "A three-day Dunedin itinerary for a campervan: the city and its heritage, the Otago Peninsula wildlife, Tunnel Beach and St Clair, and a day to Moeraki and Oamaru, with campgrounds and driving tips.",
    category: "Road trips",
    region: "Southern South Island",
    places: ["Dunedin", "Otago Peninsula", "Portobello", "Tunnel Beach", "Moeraki", "Oamaru"],
    imageAlt: "St Clair Beach in Dunedin with waves breaking on the sand",
    related: ["freedom-camping-dunedin-2026", "christchurch-to-dunedin-drive-guide", "southern-scenic-route-camping", "south-island-two-week-road-trip", "wildlife-livestock-road-safety-new-zealand", "holiday-parks-new-zealand-guide"],
    hubs: ["camping/otago"],
    intro:
      "Dunedin is a compact Victorian city on a harbour, with some of the best wildlife in the country on its doorstep. Three days gives you the city and its streets, a day on the Otago Peninsula with albatrosses and penguins, and a day out to the coast or the Catlins. The peninsula roads are narrow, so a campervan suits the city and the highway better than the road along the water.",
    sections: [
      s("Where to base yourself", [
        "Holiday parks around the city and on the harbour give you power and showers within a short drive of the centre, and the Octagon and the railway station are an easy walk or bus ride from most. On the Otago Peninsula there are smaller campgrounds and holiday parks, and the road to them is narrow and winding. DOC runs campsites in the surrounding Otago coast and the Catlins to the south.",
        "Dunedin City Council allows freedom camping in some places for self-contained vehicles, with limits on length of stay and fines for breaking them, so read the freedom camping in Dunedin guide for the current places before relying on it. In summer the holiday parks fill up when the cruise ships are in and over the school holidays, so book ahead.",
      ], ["Holiday parks near the centre", "Book ahead in summer", "Check the freedom camping places"]),
      s("Day 1: the city", [
        "Start at the Octagon and walk to the railway station, one of the most photographed buildings in the country, and the Otago Museum and the Toitū Otago Settlers Museum are within a few minutes. Baldwin Street, known as the steepest street in the world, is a short drive north and takes ten minutes to climb on foot. The University of Otago and the student quarter give the city its character.",
        "In the afternoon, ride the Taieri Gorge Railway, if it is running, or visit the Dunedin Botanic Garden, which is free and a pleasant walk. In the evening, the cafes and bars in the Octagon area and Moray Place are busy, and you can leave the van at the holiday park and take a bus or taxi.",
      ], ["Octagon and the railway station", "Baldwin Street is a short climb", "Leave the van at the park"]),
      s("Day 2: the Otago Peninsula", [
        "The road along the harbour to Portobello and on to the end of the peninsula takes about an hour, and a campervan should take it slowly. At the tip, the Royal Albatross Centre at Taiaroa Head is the only mainland colony of royal albatrosses in the world, with guided tours that need booking. Nearby, you can see yellow-eyed penguins, fur seals and sea lions from hides and beaches, and the penguins come ashore in the late afternoon.",
        "Larnach Castle sits on the hill above the harbour and has a good garden and a view, and Sandfly Bay has a dune walk and sea lions. Keep a safe distance from all wildlife, 10 metres from a sea lion and further from a penguin, and never block their path to the water. Take the high road back along the ridge for the views, if your van is not too tall.",
      ], ["Book the albatross tour", "Keep 10 metres from sea lions", "Allow a full day for the peninsula"]),
      s("Day 3: Tunnel Beach, St Clair and the coast", [
        "South of the city, Tunnel Beach is a sandstone cliff walk through a hand-cut tunnel to a small beach, about half an hour each way and steep on the way back. Some seasons the track closes for lambing, so check the council page before you go. St Clair Beach, with its esplanade, surf and cafes, is a good place for a late lunch.",
        "If you have the time, drive north to Moeraki for the Moeraki Boulders and then on to Oamaru, where blue penguins return to the colony at dusk. That is about 80 to 120 kilometres each way, so it is a full day. South of the city, the Southern Scenic Route and the Catlins have their own guides.",
      ], ["Check for lambing closures", "Moeraki Boulders and Oamaru", "Blue penguins at dusk"]),
      s("Driving in and around Dunedin", [
        "The city streets are steep and narrow, with one-way streets around the Octagon, and a long van is easier outside the centre. Frost and ice can make the hill roads slippery in winter, and the Southern Motorway is the quickest way in and out. The road from Christchurch is covered in the Christchurch to Dunedin guide.",
        "Watch for sheep and cattle on the rural roads of the peninsula and the coast, and slow down for blind corners. The wildlife and livestock road safety guide has the basics.",
      ], ["Steep and narrow streets", "Frost in winter", "Livestock on rural roads"]),
      s("Planning your three days in KiwiCamping", [
        "KiwiCamping is an iPhone app that maps DOC campsites, huts and holiday parks around Dunedin and the Otago coast, with filters for campervan access and facilities. Save a base and a backup, add them to a trip in order, and the app shows the distance between each pair of stops and a forecast for every place, which helps decide which day suits the peninsula. It does not give turn-by-turn directions or live traffic, so use your maps app for the roads.",
        "Bookings for DOC sites stay on DOC's own booking pages. Free to download, with in-app purchases.",
      ], ["Save a base and a backup", "Forecast decides the peninsula day", "Book DOC sites on DOC's site"], undefined, true),
    ],
    faq: [
      ["Is the Otago Peninsula road suitable for a campervan?", "Yes, but it is narrow and winding along the harbour, so take it slowly and avoid driving it at night. A very tall or long van may prefer to visit the tip on a tour."],
      ["How many days do you need in Dunedin?", "Three days covers the city, the Otago Peninsula and a day to Tunnel Beach and the coast. Add a day for Moeraki and Oamaru or the Catlins."],
    ],
    sources: [
      { label: "DOC: Otago coast and peninsula", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/otago/" },
      { label: "Dunedin City Council: camping and freedom camping", url: "https://www.dunedin.govt.nz/" },
      { label: "Dunedin NZ: things to do", url: "https://www.dunedinnz.com/" },
    ],
  }),
];
