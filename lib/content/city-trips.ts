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
  a({
    slug: "rotorua-3-days-campervan",
    title: "Rotorua in 3 Days by Campervan: Geothermal Parks, Lakes and Where to Camp",
    description: "A three-day Rotorua itinerary for a campervan: free and paid geothermal parks, the Redwoods and Blue Lake, Lake Tarawera and Okere Falls, with campgrounds, safety tips and driving times from Auckland.",
    category: "Road trips",
    region: "Central North Island",
    places: ["Rotorua", "Whakarewarewa", "Lake Tarawera", "Okere Falls", "Waimangu", "Taupō"],
    imageAlt: "Lake Rotorua seen from the shore on a clear day",
    related: ["freedom-camping-rotorua-2026", "coromandel-rotorua-road-trip", "volcanic-safety-new-zealand-travel", "north-island-two-week-road-trip", "holiday-parks-new-zealand-guide", "campfire-rules-new-zealand"],
    hubs: ["camping/bay-of-plenty", "camping/central-north-island"],
    intro:
      "Rotorua sits on a geothermal field, with steaming ground, boiling mud and hot pools within the city, ringed by lakes and forest. It is about three and a half hours from Auckland, and three days is enough for the geothermal parks, the Redwoods and the lakes without feeling rushed. The smell of sulphur is part of the experience, and the town is well set up for campervans.",
    sections: [
      s("Where to base yourself", [
        "Rotorua has several holiday parks around the lake and the edge of the city, many with their own thermal pools, and these are the easiest bases for a campervan. DOC and council campsites around the lakes, such as Lake Rotoiti and Lake Tarawera, are quieter and cheaper but need more planning, and some close in winter. Book ahead in summer and over school holidays.",
        "Rotorua Lakes Council limits freedom camping to a few places and requires a certified self-contained vehicle, and the rules are enforced, as the freedom camping in Rotorua guide explains. Geothermal ground can be unstable and hot, and a van parked near vents can be damaged, so camp only where the site says so.",
      ], ["Holiday parks with thermal pools", "Lake campsites need planning", "Camp only where signs allow"]),
      s("Day 1: the geothermal parks", [
        "Start with Kuirau Park, a free park near the centre with steaming ponds and mud pools, then choose one of the major parks: Te Puia and Whakarewarewa for the Pōhutu geyser and Māori cultural performances, Wai-O-Tapu for the colourful pools and the Lady Knox geyser, or Hell's Gate for the mud and a hot spa. Wai-O-Tapu and Waimangu are about 30 minutes south of the city.",
        "End the day in a hot pool, such as the Polynesian Spa on the lakefront or the pools at your holiday park. Stay on the paths and behind the fences in all geothermal areas, because the ground can be thin and the water scalding, and keep dogs out. The volcanic safety guide explains the hazards.",
      ], ["Kuirau Park is free", "Stay behind the fences", "End with a hot pool"]),
      s("Day 2: the Redwoods, Blue Lake and Okere Falls", [
        "The Redwoods, or Whakarewarewa Forest, has tall trees with walking and mountain biking trails and the Redwoods Treewalk, a series of suspension bridges high in the canopy, which is lit at night. The Blue Lake (Tikitapu) and Green Lake are a short drive away, with a walk around the Blue Lake that takes about 90 minutes.",
        "In the afternoon go to Okere Falls, where a short track leads to the Kaituna River and the falls, and rafting is popular, and then to the lakefront at Rotorua for the evening. Mountain bike hire is available at the Redwoods, and the trails suit all levels. Bring insect repellent for the sandflies near water.",
      ], ["Treewalk is lit at night", "Blue Lake loop about 90 minutes", "Repellent near the water"]),
      s("Day 3: Lake Tarawera and the south", [
        "Lake Tarawera is about 20 minutes from the city, with a quiet beach and a boat trip to the hot waterfall, and the Buried Village tells the story of the 1886 Mount Tarawera eruption. Waimangu Volcanic Valley, a walk through the crater valley formed by that eruption, is a good morning outing.",
        "From Rotorua it is an hour to Taupō, where Huka Falls and Orakei Korako are on the way, and the Waikato River and Lake Taupō are covered in the Taupō guide. The Coromandel to Rotorua loop and the North Island two-week trip show how to link the area with the rest of the island.",
      ], ["Buried Village and the 1886 eruption", "Waimangu crater valley", "Taupō an hour south"]),
      s("Driving to and from Rotorua", [
        "Auckland to Rotorua is about 230 kilometres and takes three to three and a half hours via Hamilton and Tīrau, or via Tauranga. State Highway 5 from Tīrau and State Highway 30 from Tauranga are the main roads. Fuel and food are easy to find in the city, and parking is straightforward, though busy at the lakefront at the weekend.",
        "Winter mornings can be frosty on the roads around the lakes, and the sulphur smell is strong in the city but harmless. Check the NZTA Journey Planner for road conditions before you leave.",
      ], ["About 230 km from Auckland", "Check for frost in winter", "Sulphur smell is harmless"]),
      s("Planning your three days in KiwiCamping", [
        "KiwiCamping is an iPhone app that maps DOC campsites, huts and holiday parks around Rotorua and the lakes, with filters for campervan access and facilities. Save a base and a backup, add them to a trip in order, and the app shows the distance between each pair of stops and a forecast for every place. It does not give turn-by-turn directions or live traffic, so use your maps app for the roads.",
        "Bookings for DOC sites stay on DOC's own booking pages. Free to download, with in-app purchases.",
      ], ["Save a base and a backup", "Forecast at each stop", "Book DOC sites on DOC's site"], undefined, true),
    ],
    faq: [
      ["How many days do you need in Rotorua?", "Three days covers a geothermal park, the Redwoods and the lakes without rushing. Two days is enough for the main parks if you are short of time."],
      ["Can I freedom camp in Rotorua?", "Only in a few permitted places and only in a certified self-contained vehicle, and the rules are enforced. Holiday parks and lake campsites are the easier option."],
    ],
    sources: [
      { label: "Rotorua Lakes Council: freedom camping", url: "https://www.rotorualakescouncil.nz/" },
      { label: "Rotorua NZ: things to do", url: "https://www.rotoruanz.com/" },
      { label: "DOC: Rotorua and Bay of Plenty", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/bay-of-plenty/" },
    ],
  }),
  a({
    slug: "christchurch-to-invercargill-drive-guide",
    title: "Christchurch to Invercargill Drive: Route, Time, Stops and Camping",
    description: "Christchurch to Invercargill by road: about 600 km and 7.5 to 8 hours on State Highway 1 through Timaru, Oamaru and Dunedin, with the stops worth making, the Catlins alternative and where to camp.",
    category: "Road trips",
    region: "South Island",
    places: ["Christchurch", "Timaru", "Oamaru", "Moeraki", "Dunedin", "Gore", "Invercargill"],
    imageAlt: "Nugget Point lighthouse on a headland above the sea in the Catlins",
    related: ["christchurch-to-dunedin-drive-guide", "southern-scenic-route-camping", "freedom-camping-southland-2026", "dunedin-3-days-campervan", "south-island-two-week-road-trip", "new-zealand-driving-day-planner", "winter-driving-new-zealand-campervan"],
    hubs: ["camping/canterbury", "camping/otago", "camping/southland"],
    intro:
      "Driving from Christchurch to Invercargill on State Highway 1 is about 600 kilometres and takes 7.5 to 8 hours without stops, down the east coast through Timaru, Oamaru and Dunedin, then inland through Balclutha and Gore. It is an easy road, mostly two lanes with good passing, and it splits naturally into two days at Dunedin. Most of the interest is on the coast, and the Catlins give a slower way to finish.",
    sections: [
      s("Route, distance and time", [
        "State Highway 1 is the only through route. From Christchurch it crosses the Canterbury Plains to Ashburton and Timaru, follows the coast to Oamaru and Moeraki, climbs over the Kilmog into Dunedin, then continues south to Balclutha, Gore and Invercargill. The two halves are roughly similar, about 360 kilometres from Christchurch to Dunedin and 240 from Dunedin to Invercargill.",
        "The times above do not include fuel, meals or stops, so allow nine to ten hours for a day that includes a couple of proper breaks. The driving day planner works out a day that suits your vehicle, and the Christchurch to Dunedin guide covers the first half in more detail.",
      ], ["About 600 km, 7.5 to 8 hours", "Dunedin is the natural halfway stop", "Allow nine to ten hours with breaks"]),
      s("Timaru, Oamaru and Moeraki", [
        "Timaru has Caroline Bay, a good beach and a place to stop for lunch, and the Aigantighe art gallery and the Te Ana rock art centre are worth a short visit. Oamaru, an hour and a half further on, has a Victorian precinct of white limestone buildings, a steampunk museum and a blue penguin colony where the birds come ashore at dusk.",
        "Moeraki, 30 minutes south of Oamaru, has the round Moeraki Boulders on the beach, best seen at low tide, and a small fishing village with a famous seafood cafe. Tides matter, so check the tide times before you go. Holiday parks in Timaru and Oamaru are easy to find, and Oamaru is a good place to stop for the night.",
      ], ["Caroline Bay at Timaru", "Blue penguins at Oamaru at dusk", "Moeraki Boulders at low tide"]),
      s("Dunedin and the road south", [
        "Dunedin is a good place to spend a night, with the railway station, Baldwin Street and the Otago Peninsula wildlife, and the Dunedin in three days guide plans the stay. South of the city, State Highway 1 climbs over the Chain Hills and descends to the Taieri Plain, then runs inland to Milton and Balclutha.",
        "In winter, ice and occasional snow can make the Kilmog north of Dunedin and the hill roads around the city slippery, so check the road status before you leave. The winter driving guide covers chains and the skills, and a hire company's rules on chains and unsealed roads still apply.",
      ], ["Dunedin for a night", "Check the Kilmog in winter", "Watch the hire company's rules"]),
      s("The Catlins alternative", [
        "From Balclutha, the Southern Scenic Route, State Highway 92, takes you through the Catlins, with Nugget Point lighthouse, Purakaunui Falls, Curio Bay and the petrified forest, and Waipapa Point. It is a slower, narrower road with more gravel and fewer services, so allow a full day or two, and the guide to the Southern Scenic Route camping has the stops and campsites.",
        "The inland route through Gore and Mataura is faster and the way most freight travels. Gore has the Hokonui Heritage Centre and a giant trout statue, and the Mataura Paper Mill ruins are a curiosity. Both roads meet at Invercargill.",
      ], ["Catlins: slower, more gravel", "Inland: faster, more traffic", "Both end at Invercargill"]),
      s("Invercargill and Bluff", [
        "Invercargill is the southernmost city in the country, with a flat grid of wide streets, Queens Park, the Southland Museum and a good collection of classic cars. Bluff, 30 minutes south, is where State Highway 1 ends, at the Stirling Point signpost, and the town is known for its oysters in season, roughly from March to August.",
        "From here you can go on to Rakiura Stewart Island by ferry from Bluff, or head to Te Anau and Fiordland. Holiday parks in Invercargill and Bluff are easy to book, and freedom camping is limited, as the freedom camping in Southland guide explains.",
      ], ["Stirling Point signpost at Bluff", "Oysters in season", "Ferry to Rakiura from Bluff"]),
      s("Planning the drive in KiwiCamping", [
        "KiwiCamping is an iPhone app that maps DOC campsites, huts and holiday parks along this coast, with filters for campervan access and facilities. Save the ones you like, add them to a trip as ordered stops, and the app shows the distance between each pair and a forecast for every place on your list. It does not give turn-by-turn directions or live traffic, so keep NZTA's Journey Planner open for road conditions.",
        "DOC bookings stay on DOC's own booking pages. Free to download, with in-app purchases.",
      ], ["Save stops in driving order", "Forecast at each stop", "Check NZTA for closures"], undefined, true),
    ],
    faq: [
      ["How long does it take to drive from Christchurch to Invercargill?", "About 7.5 to 8 hours and 600 kilometres without stops, on State Highway 1. Most people split it with a night in Oamaru or Dunedin."],
      ["Is the Catlins route better than State Highway 1?", "It is slower and more scenic, with gravel sections and few services, and it adds a day or two. State Highway 1 through Gore is the faster way."],
    ],
    sources: [
      { label: "NZTA Journey Planner (highway conditions)", url: "https://www.journeys.nzta.govt.nz/" },
      { label: "DOC: Catlins and Southland", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/southland/" },
      { label: "Great South: visit Invercargill and Southland", url: "https://www.southlandnz.com/" },
    ],
  }),
  a({
    slug: "christchurch-to-nelson-drive-guide",
    title: "Christchurch to Nelson Drive: Lewis Pass or the Coast, Time and Camping",
    description: "Christchurch to Nelson by road: about 450 km and 6 to 7 hours, over Lewis Pass and through Murchison or up the coast through Kaikōura and Blenheim, with stops, winter notes and where to camp.",
    category: "Road trips",
    region: "South Island",
    places: ["Christchurch", "Hanmer Springs", "Lewis Pass", "Murchison", "Kaikōura", "Blenheim", "Nelson"],
    imageAlt: "A sandy beach with green plants in Abel Tasman National Park near Nelson",
    related: ["nelson-abel-tasman-golden-bay", "picton-kaikoura-christchurch-route", "christchurch-to-marlborough-drive-guide", "freedom-camping-tasman-2026", "freedom-camping-marlborough-2026", "winter-driving-new-zealand-campervan", "new-zealand-driving-day-planner"],
    hubs: ["camping/nelson-tasman", "camping/canterbury"],
    intro:
      "There are two ways from Christchurch to Nelson: inland over Lewis Pass and through Murchison, or up the east coast through Kaikōura and Blenheim and then west. Both are about 450 kilometres and 6 to 7 hours without stops, and both are good drives. A loop, out one way and back the other, is one of the best short trips on the island.",
    sections: [
      s("Two routes, similar distance", [
        "The inland route follows State Highway 1 north to Waipara, then State Highway 7 over Lewis Pass to Springs Junction, State Highway 65 to Murchison and State Highway 6 to Nelson. The coastal route stays on State Highway 1 through Kaikōura to Blenheim, then State Highway 6 over the Rai Saddle and through Pelorus Bridge to Nelson. Each takes about six to seven hours of driving.",
        "Neither is quick, because both have winding sections and reduced speed limits, and a campervan is slower on the hills than a car. The driving day planner helps you set a day that suits your vehicle, and a night on the way makes the trip a pleasure and not a slog.",
      ], ["Inland: Lewis Pass and Murchison", "Coast: Kaikōura and Blenheim", "Both take 6 to 7 hours"]),
      s("The inland route: Lewis Pass and Murchison", [
        "Hanmer Springs is a short detour at the foot of the pass, with hot pools and forest walks, and the road climbs to Lewis Pass at 864 metres, with beech forest and walks to alpine tarns. Maruia Springs has a small hot pool complex on the way down, and Springs Junction has a fuel stop and a cafe.",
        "Murchison, in the Buller valley, is a small town with a good cafe and several campgrounds, and the Buller Gorge swing bridge is a short drive west. In winter, snow and ice on Lewis Pass can close the road, so check the NZTA status before you leave and carry chains if your hire company allows them. The Lewis Pass road also passes DOC campsites in the beech forest.",
      ], ["Hanmer Springs for hot pools", "Lewis Pass is 864 metres", "Check for snow in winter"]),
      s("The coastal route: Kaikōura and Blenheim", [
        "State Highway 1 north reaches the coast near Kaikōura, where the seal colonies and whale watching are the draws, and crayfish is the local food. The road between Kaikōura and Blenheim has some reduced speeds and the occasional slip, so allow extra time. The Christchurch to Marlborough guide covers this part in more detail.",
        "From Blenheim, State Highway 6 climbs through the Rai Saddle and runs along the Pelorus River to Pelorus Bridge, where the DOC campsite and a cafe make a pleasant stop, and then climbs again over the Whangamoa Saddle to Nelson. The road is narrow and winding, so keep to the speed limits and use the passing bays.",
      ], ["Kaikōura for seals and crayfish", "Pelorus Bridge for a stop", "Narrow and winding to Nelson"]),
      s("Nelson and where to camp", [
        "Nelson is one of the sunniest places in the country, with beaches, cafes and a lively market on Saturday. Holiday parks in Nelson and Richmond are an easy base, and the Abel Tasman National Park, Kaiteriteri and Golden Bay are a day or two further. The Nelson, Abel Tasman and Golden Bay guide plans the area.",
        "Freedom camping in the Nelson and Tasman area is limited, and the rules are enforced, as the freedom camping in Tasman guide explains. The Great Taste Trail by bike starts from Nelson and is described in its own guide.",
      ], ["Sunny and busy in summer", "Holiday parks in Nelson and Richmond", "Freedom camping is limited"]),
      s("Making it a loop", [
        "Go out one way and back the other, with a night in Murchison or Kaikōura on the way, and the trip takes three or four days with time for Nelson. The inland road suits the way out for the mountains, and the coastal road suits the way back for the sea, with a stop at Kaikōura.",
        "In summer both roads are busy at the weekends and over the holidays, and holiday parks in Nelson, Kaikōura and Blenheim book out, so reserve ahead. The two-week South Island road trip guide shows how to fit the loop into a longer trip.",
      ], ["Inland out, coast back", "Three or four days", "Book holiday parks ahead in summer"]),
      s("Planning the drive in KiwiCamping", [
        "KiwiCamping is an iPhone app that maps DOC campsites, huts and holiday parks along both routes, with filters for campervan access and facilities. Save the ones you like, add them to a trip as ordered stops, and the app shows the distance between each pair and a forecast for every place on your list, which helps you choose between the pass and the coast. It does not give turn-by-turn directions or live traffic, so check NZTA for closures.",
        "DOC bookings stay on DOC's own booking pages. Free to download, with in-app purchases.",
      ], ["Save stops in driving order", "Forecast decides the route", "Check NZTA for closures"], undefined, true),
    ],
    faq: [
      ["Which is the better way from Christchurch to Nelson?", "Lewis Pass for the mountains and the beech forest, or the coast for the seals and the wine region. They are about the same length, so many people do one each way."],
      ["Does Lewis Pass close in winter?", "It can, for snow and ice. Check the NZTA Journey Planner before you leave and carry chains if your hire company allows them."],
    ],
    sources: [
      { label: "NZTA Journey Planner (highway conditions)", url: "https://www.journeys.nzta.govt.nz/" },
      { label: "DOC: Lewis Pass and Nelson Lakes", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/nelson-tasman/" },
      { label: "Nelson Tasman Tourism: plan your trip", url: "https://www.nelsontasman.nz/" },
    ],
  }),
  a({
    slug: "christchurch-to-marlborough-drive-guide",
    title: "Christchurch to Marlborough Drive: Kaikōura, Blenheim and Camping",
    description: "Christchurch to Blenheim and Marlborough by road: about 335 km and 4 to 4.5 hours on State Highway 1 through Kaikōura, with seals, whales, wine and where to camp and stop.",
    category: "Road trips",
    region: "South Island",
    places: ["Christchurch", "Waipara", "Kaikōura", "Ward", "Blenheim", "Picton"],
    imageAlt: "Picton Harbour with boats and hills in the Marlborough Sounds",
    related: ["picton-kaikoura-christchurch-route", "freedom-camping-marlborough-2026", "christchurch-to-nelson-drive-guide", "cook-strait-ferry-campervan-guide", "wildlife-livestock-road-safety-new-zealand", "new-zealand-driving-day-planner"],
    hubs: ["camping/marlborough", "camping/canterbury"],
    intro:
      "Christchurch to Blenheim is about 335 kilometres and takes 4 to 4.5 hours on State Highway 1, with the best part of the drive along the Kaikōura coast, where the mountains meet the sea. Most people stop at Kaikōura for the seals and the whales, then continue to Blenheim and the Marlborough wine region and on to Picton for the ferry. Two days makes it a trip and not a transfer.",
    sections: [
      s("Route, distance and time", [
        "State Highway 1 leaves Christchurch north through Waipara and the Hurunui, over the Hundalee Hills to the coast near Kaikōura, then follows the coast and climbs inland over the Ward hills to Seddon and Blenheim. The distance is about 335 kilometres, with Kaikōura roughly 180 kilometres from Christchurch and 2.5 hours away.",
        "The coast road beyond Kaikōura was rebuilt after the 2016 earthquake and still has reduced speeds, bridge works and the occasional slip after rain, so check the NZTA Journey Planner before you leave. The driving day planner helps you set a day that suits your vehicle.",
      ], ["About 335 km, 4 to 4.5 hours", "Kaikōura is the halfway stop", "Check for slips after rain"]),
      s("Waipara, Hanmer Springs and the Hurunui", [
        "The Waipara Valley, 50 minutes north of Christchurch, is a wine region known for riesling and pinot noir, with cellar doors and cafes along the road. Cheviot, further on, is a small town with a pub and a campground, and Hanmer Springs is a detour to the west for hot pools.",
        "The Hurunui has sheep and cattle on the rural roads, and you should watch for stock and slow down for blind corners. The wildlife and livestock road safety guide has more on driving in the countryside.",
      ], ["Waipara wine region", "Watch for stock on the road", "Hanmer Springs is a detour"]),
      s("Kaikōura", [
        "Kaikōura sits between the sea and the Kaikōura Ranges, with a seal colony at Point Kean and a larger one at Ohau Point, where pups play in a waterfall pool in winter, and whale watching and swimming with dolphins from the harbour. Crayfish is the local specialty, with roadside caravans selling it fresh, and the Kaikōura Peninsula Walkway gives views over the town.",
        "Holiday parks and campgrounds in Kaikōura book out in summer and over school holidays, so reserve ahead. Keep a safe distance from the seals, which can be aggressive when disturbed, and never stand between a seal and the water.",
      ], ["Seals at Point Kean and Ohau Point", "Whale watching from the harbour", "Book campgrounds ahead in summer"]),
      s("Blenheim and the wine region", [
        "North of Kaikōura the road passes the Clarence River and Ward, then drops into the Awatere and Wairau valleys, which are the heart of Marlborough's wine country, known for sauvignon blanc. Blenheim is the main town, with cellar doors, restaurants and a cycle path through the vineyards, and a campervan stays outside the cellar doors if the driver is not drinking.",
        "Remember the drink-driving limits, which are strict, and use a tour or a taxi if you plan to taste. The alcohol and fatigue driving guide covers the rules. Holiday parks in and around Blenheim are an easy base.",
      ], ["Sauvignon blanc country", "Cycle path through the vineyards", "Do not drive after tasting"]),
      s("Picton and the Sounds", [
        "Picton, 30 minutes north of Blenheim, is the ferry terminal for the North Island and the gateway to the Marlborough Sounds, with boat trips, walks and the Queen Charlotte Track. If you are catching the ferry, book the vehicle ahead, and the Cook Strait ferry guide covers the sizes and costs.",
        "Freedom camping in Marlborough is limited to a few places and needs a certified self-contained vehicle, and the freedom camping in Marlborough guide lists the rules. Holiday parks in Picton and the Sounds are the easier choice for a night before the ferry.",
      ], ["Ferry vehicles need booking", "Queen Charlotte Track for walkers", "Freedom camping is limited"]),
      s("Planning the drive in KiwiCamping", [
        "KiwiCamping is an iPhone app that maps DOC campsites, huts and holiday parks along this coast, with filters for campervan access and facilities. Save the ones you like, add them to a trip as ordered stops, and the app shows the distance between each pair and a forecast for every place on your list. It does not give turn-by-turn directions or live traffic, so check NZTA for closures.",
        "DOC bookings stay on DOC's own booking pages. Free to download, with in-app purchases.",
      ], ["Save stops in driving order", "Forecast at each stop", "Check NZTA for closures"], undefined, true),
    ],
    faq: [
      ["How long is the drive from Christchurch to Blenheim?", "About 335 kilometres and 4 to 4.5 hours on State Highway 1 through Kaikōura, without stops. Most people stop for a few hours in Kaikōura."],
      ["Is the Kaikōura coast road open?", "Yes, it was rebuilt after the 2016 earthquake, though slips and works after heavy rain can cause delays. Check the NZTA Journey Planner before you drive."],
    ],
    sources: [
      { label: "NZTA Journey Planner (highway conditions)", url: "https://www.journeys.nzta.govt.nz/" },
      { label: "DOC: Kaikōura and Marlborough", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/marlborough/" },
      { label: "Destination Marlborough: visit Marlborough", url: "https://www.marlboroughnz.com/" },
    ],
  }),
];
