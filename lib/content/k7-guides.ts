import { makeArticle as a, type Article, type ArticleSection } from "@/lib/article-model";

const s = (heading: string, body: string[], tips?: string[], cta?: boolean): ArticleSection => ({ heading, body, tips, ...(cta && { cta }) });

/**
 * Safety, regional loops and road trips written on 10 November 2026. Facts are general and
 * generalised from the official pages named in each guide's `sources`.
 */
export const k7Articles: Article[] = [
  a({
    slug: "is-camping-in-new-zealand-safe",
    title: "Is It Safe to Camp and Campervan in New Zealand?",
    description: "How safe camping and campervan travel in New Zealand really is: theft from vehicles, driving, weather, rivers, earthquakes, wildlife and solo travel, with simple habits that cover most of the risk.",
    category: "Rules & safety",
    region: "New Zealand",
    places: ["New Zealand", "Auckland", "Rotorua", "Queenstown", "West Coast"],
    imageAlt: "A cyclist crossing a wide, shallow New Zealand river with mountains behind",
    related: ["river-crossing-safety-new-zealand", "wildlife-livestock-road-safety-new-zealand", "new-zealand-severe-weather-camping", "earthquake-tsunami-camping-new-zealand", "winter-driving-new-zealand-campervan", "left-side-driving-new-zealand"],
    intro:
      "Yes. New Zealand is one of the safer places in the world to camp and travel by campervan, with no dangerous large animals, no venomous snakes and low levels of violent crime. The risks that do catch visitors are ordinary ones: theft from parked vehicles, tired driving on narrow roads, fast-changing weather, rivers and the cold. A handful of habits covers nearly all of it, and this guide lists them.",
    sections: [
      s("Crime and theft from vehicles", [
        "Violent crime against travellers is rare, and campgrounds, holiday parks and freedom camping sites are quiet places on the whole. The problem that does recur is opportunistic theft from parked vehicles, mostly at carparks and trailheads in busy tourist areas, where a rental car or campervan with luggage on show is an easy target.",
        "Take your passport, wallet, laptop and phone with you or lock them out of sight, and never leave bags on the seats. Do not leave a vehicle's contents visible while you walk for the day, and do not assume that a rental logo on the door makes a van a lower-risk target. If your vehicle is broken into, report it to the police on 105 for a non-emergency report, which your insurer will want.",
      ], ["Take valuables with you on day walks", "Nothing visible on the seats", "Report theft on 105, emergencies on 111"]),
      s("Driving is the biggest risk", [
        "For most visitors the road is the real danger. New Zealand roads are narrow and winding, many are single lane over bridges, and a large share of tourists are driving on the left for the first time in a vehicle they do not know. Fatigue after a long flight makes it worse, and a campervan is taller, heavier and slower to stop than a car.",
        "Keep days short, stop often, and do not drive straight after landing. Stay on the left, give way as the signs say and let faster traffic pass at the pull-outs provided. The left-side driving guide covers the rules, and the driving day planner helps you set a distance that suits your vehicle and your energy.",
      ], ["Plan short driving days", "Do not drive when tired", "Use pull-outs to let traffic pass"]),
      s("Weather, rivers and the cold", [
        "The weather changes quickly, and the alpine and coastal areas get heavy rain, strong wind and cold nights even in summer. Rain brings slips and flooded roads, and rivers that are a trickle in the morning can be impassable by afternoon. Check the MetService forecast and any warnings each day, and move if the forecast says a river, slip or high wind will catch you in a bad spot.",
        "Never drive through a flooded ford or a swollen river, and do not camp on a river flat when heavy rain is forecast. The river crossing safety guide explains why, and the severe weather guide covers warnings and what to do when one is issued. Pack a warm layer and a waterproof jacket for any trip, because the temperature can fall several degrees in an hour.",
      ], ["Check MetService each day", "Never drive through a flooded ford", "Keep a warm layer and a waterproof jacket"]),
      s("Earthquakes, tsunami and volcanoes", [
        "New Zealand sits on a plate boundary, so earthquakes are normal and most are too small to feel. If a strong earthquake shakes you for a long time, or you cannot stand, move to high ground straight away without waiting for an official warning: long or strong, get gone. The earthquake and tsunami guide explains the signs and the evacuation routes.",
        "Active volcanoes and geothermal areas need the same respect. Tongariro, Ruapehu and Whakaari have alert levels published by GeoNet, and DOC closes tracks and campsites when the risk rises. Stay on marked paths in thermal areas, because ground that looks solid can be scalding. The volcanic safety guide covers alert levels and closures.",
      ], ["Long or strong, get gone", "Follow GeoNet alert levels", "Stay on the paths in thermal areas"]),
      s("Wildlife, sandflies and water", [
        "There are no snakes and no large predators. The animals that cause trouble are small: sandflies, which bite on the West Coast and in Fiordland and are a nuisance more than a danger, wasps in late summer, and kea, which can tear gear in the mountains. The sandflies guide has repellent and clothing advice. Stock and wildlife on rural roads are a bigger concern for a driver than any animal at the campsite.",
        "Tap water is safe almost everywhere in towns and at most campgrounds, but water from streams and untreated tanks can carry giardia, so treat it by boiling or filtering. Keep food stored properly, because it protects you and the wildlife.",
      ], ["Treat any wild water", "Use repellent for sandflies", "Watch for stock on rural roads"]),
      s("Camping safely: campsites, fires and heaters", [
        "Choose a campsite you can read in daylight, ideally one with other vehicles around, and park facing out so you can leave quickly. Lock doors at night, trust your instincts about a spot, and move if it feels wrong. Solo travellers, including women travelling alone, camp across the country without trouble, and the main precaution is the same as anywhere: do not publish where you will be sleeping in real time.",
        "Never run a gas heater or a barbecue inside a closed vehicle or tent, because carbon monoxide can build up while you sleep, and keep a window open for ventilation. Check the fire danger and the campfire rules for the area before lighting anything, as fire bans are common in summer.",
      ], ["Park facing out", "Never run a heater in a sealed vehicle", "Check fire rules before lighting a fire"]),
      s("Tramping, emergencies and insurance", [
        "For walks and tramps, follow the Outdoor Safety Code: choose a trip that suits the whole group, learn about the weather, tell someone your plans, take enough food and clothing, and know your limits. Mobile coverage is patchy in the hills, so a locator beacon, which you can hire, is worth it for anything remote. In an emergency call 111 for police, fire and ambulance.",
        "New Zealand's ACC scheme covers accidental injury for visitors but not illness or repatriation, so buy travel insurance before you fly. Read what it says about campervans, adventure activities and driving, and keep the policy number somewhere you can reach without signal.",
      ], ["Tell someone your plan", "Call 111 in an emergency", "Buy travel insurance"]),
      s("Planning safer stops in KiwiCamping", [
        "In KiwiCamping you can keep the safety basics beside your plan. The app maps DOC campsites, huts and holiday parks with filters for campervan access and facilities, and a trip shows the distance between each stop and the forecast at each place, so a bad forecast at one stop is visible before you drive there. It does not replace official weather warnings, emergency alerts or road closures, so check MetService and NZTA as well.",
        "DOC campsites and huts are booked on DOC's own pages, and the app itself is free to download, with in-app purchases.",
      ], ["Save stops in driving order", "Forecast at each stop", "Check official warnings too"], true),
    ],
    faq: [
      ["Is New Zealand safe for solo female campers?", "Yes. Solo travellers, including women, camp and campervan across the country regularly. Pick well-lit campgrounds with other vehicles around, lock doors at night, park facing out and trust your instincts about a spot."],
      ["What is the biggest danger when campervanning in New Zealand?", "Driving. Narrow winding roads, driving on the left, tiredness after a flight and weather make road crashes the main risk for visitors, ahead of crime or wildlife."],
    ],
    sources: [
      { label: "New Zealand Police: emergency and non-emergency contacts", url: "https://www.police.govt.nz/" },
      { label: "Mountain Safety Council: Outdoor Safety Code", url: "https://www.mountainsafety.org.nz/" },
      { label: "MetService: weather and warnings", url: "https://www.metservice.com/" },
      { label: "NEMA: Get Ready", url: "https://getready.govt.nz/" },
      { label: "GeoNet: volcanic alert levels", url: "https://www.geonet.org.nz/volcano" },
      { label: "ACC: cover for visitors", url: "https://www.acc.co.nz/" },
    ],
  }),
  a({
    slug: "volcanic-loop-road-trip-new-zealand",
    title: "Volcanic Loop Road Trip: Rotorua, Taupō and Tongariro by Campervan",
    description: "A four-day campervan loop through New Zealand's volcanic heartland: Rotorua's geothermal parks, Taupō, Tongariro National Park and Ohakune, with distances, safety and where to camp.",
    category: "Road trips",
    region: "North Island",
    places: ["Rotorua", "Taupō", "Tūrangi", "Whakapapa", "Ohakune"],
    imageAlt: "Tongariro Northern Circuit crossing a volcanic landscape of rock and tussock",
    related: ["volcanic-safety-new-zealand-travel", "tongariro-northern-circuit-camping-2026-27", "freedom-camping-rotorua-2026", "coromandel-rotorua-road-trip", "north-island-two-week-road-trip", "winter-driving-new-zealand-campervan"],
    hubs: ["camping/central-north-island", "camping/bay-of-plenty"],
    intro:
      "The middle of the North Island sits on a volcanic zone, and a loop from Rotorua through Taupō and Tongariro National Park shows it better than any other drive in the country. Steaming parks, a lake that fills an ancient eruption crater and three active volcanoes fit into about four days and 400 to 450 kilometres, with short legs and plenty of places to camp. This guide gives the route, the stops and the safety rules that go with living ground.",
    sections: [
      s("The route and how long it takes", [
        "The loop starts in Rotorua, runs south to Taupō, continues to Tūrangi and Tongariro National Park, drops to Ohakune and returns to Taupō and Rotorua over the Desert Road and State Highway 1. The legs are short: Rotorua to Taupō is about an hour, Taupō to Tūrangi 40 minutes, and Tūrangi to Whakapapa about 45 minutes. Ohakune to Taupō, the longest leg, takes around two hours.",
        "Four days is comfortable, with one night each in Rotorua, Taupō, Tongariro and Ohakune. Rotorua is about three hours from Auckland, so the loop also works as the heart of a longer North Island trip. The driving day planner helps you set how many hours suit your vehicle.",
      ], ["About 400 to 450 km in four days", "Legs of an hour or two", "Rotorua is about 3 hours from Auckland"]),
      s("Rotorua: steam, mud and lakes", [
        "Rotorua is the start and the most intense day. Wai-O-Tapu, Waimangu Volcanic Valley and Whakarewarewa show geysers, silica terraces and boiling mud pools, and Kuirau Park in the middle of town has free steaming ponds. Allow a full day for one big park plus the redwoods, and use Lake Rotorua or Blue Lake for a swim.",
        "Freedom camping is tightly controlled in Rotorua, with fines for sleeping in non-designated places, so book a holiday park or a campground. The Rotorua freedom camping guide lists the rules, and the sulphur smell, which is strong at first, fades from your awareness within a couple of hours.",
      ], ["Wai-O-Tapu, Waimangu and Whakarewarewa", "Kuirau Park is free", "Book a campground in summer"]),
      s("Rotorua to Taupō", [
        "State Highway 5 runs south between the two towns past Waiotapu and Waikite Valley, with Orakei Korako, a geothermal valley reached by a short boat ride, a worthwhile side trip. Arriving in Taupō, look at the lake, which fills the crater of a supervolcano that erupted about 1,800 years ago.",
        "Huka Falls, Craters of the Moon and the Wairakei area are all a few minutes from town, and the Aratiatia Rapids release water on a posted schedule. Check the times and arrive a little before, because the show takes only minutes. Swimming in the lake is cold, but the hot streams that run into it at Otumuheke are free and beloved.",
      ], ["Orakei Korako is a boat-and-walk detour", "Huka Falls is a few minutes from town", "Check the Aratiatia release times"]),
      s("Tongariro National Park", [
        "South of Taupō the road reaches Tūrangi, the trout-fishing town, and then Tongariro National Park, a dual World Heritage Area whose three volcanoes, Ruapehu, Ngāuruhoe and Tongariro, make up the skyline. The Whakapapa side has a village, visitor centre and short walks, while the Tongariro Alpine Crossing is a serious day walk on the other side that needs good weather and early starts.",
        "All three volcanoes are active, and GeoNet publishes an alert level for each. The volcanic safety guide explains what the levels mean, and DOC closes tracks, huts and areas when the risk rises. Check the current status before you commit to a walk. Do not walk the Crossing in cloud, wind or after snow without alpine experience and the right gear.",
      ], ["Three active volcanoes with GeoNet alert levels", "Check DOC track status before walking", "Start the Crossing early in good weather"]),
      s("Ohakune and the Desert Road", [
        "Ohakune, on the southern side of Ruapehu, is a ski town in winter and a vegetable-growing town the rest of the year, with the giant carrot and a good bakery. From here the loop heads east on State Highway 49 to Waiouru and then north up the Desert Road, State Highway 1, across the high plateau with the volcanoes on your left.",
        "The Desert Road is exposed and can close for snow, ice or high wind at any time of year, and in winter chains or a delay may be needed. Check the NZTA Journey Planner before you set off, and keep fuel above half. Fuel at Waiouru and Tūrangi is the last you will find in many hours.",
      ], ["Desert Road can close in snow or wind", "Check NZTA before driving", "Fuel at Waiouru or Tūrangi"]),
      s("Where to camp on the loop", [
        "Holiday parks in Rotorua and Taupō suit the first two nights, with powered sites, showers and a hot pool or two. Around Tongariro, DOC runs campsites near Ohakune and Whakapapa Holiday Park in the village, which is the closest base to the mountain walks. Book in summer and over school holidays, because the park is popular.",
        "The nights are cold on the plateau even in summer, so a warm sleeping layer and a heater suit a campervan. Do not leave a vehicle on a river flat or a lahar path when heavy rain is forecast, and read the signs at campsites near Ruapehu, which explain what to do if a warning is issued.",
      ], ["Holiday parks in Rotorua and Taupō", "DOC campsites near Ohakune", "Cold nights on the plateau"]),
      s("Planning the loop in KiwiCamping", [
        "Along the loop, KiwiCamping maps the DOC campsites, huts and holiday parks in Rotorua, Taupō and around Tongariro, with filters for campervan access and facilities. Put the stops on a trip in order and you get the distance between each pair and a forecast for every place, which helps pick the day for the Crossing. Road closures are on the NZTA site, because the app has no directions or live traffic.",
        "Bookings for the Tongariro campsites go through DOC, not the app. The app is free to download, with in-app purchases.",
      ], ["Save stops in driving order", "Forecast at each stop", "Check NZTA for closures"], true),
    ],
    sources: [
      { label: "DOC: Tongariro National Park", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/central-north-island/places/tongariro-national-park/" },
      { label: "GeoNet: volcanic alert levels", url: "https://www.geonet.org.nz/volcano" },
      { label: "NZTA Journey Planner (highway conditions)", url: "https://www.journeys.nzta.govt.nz/" },
      { label: "Rotorua NZ: visit Rotorua", url: "https://www.rotoruanz.com/" },
      { label: "Love Taupō: visit Taupō", url: "https://www.lovetaupo.com/" },
    ],
  }),
  a({
    slug: "hawkes-bay-wairarapa-wine-trail-campervan",
    title: "Hawke's Bay and Wairarapa Wine Trail by Campervan",
    description: "A campervan wine trail from Wellington through Martinborough and the Wairarapa to Hawke's Bay: pinot noir, syrah, cycling between cellar doors, drink-driving rules and where to camp.",
    category: "Road trips",
    region: "North Island",
    places: ["Wellington", "Martinborough", "Greytown", "Masterton", "Hastings", "Napier"],
    imageAlt: "State Highway 2 climbing over the Remutaka Hill Road between Wellington and the Wairarapa",
    related: ["wellington-wairarapa-camping-loop", "wellington-to-napier-drive-guide", "beer-wine-coffee-prices-new-zealand", "alcohol-fatigue-driving-new-zealand", "campervan-road-rules-new-zealand", "new-zealand-driving-day-planner"],
    hubs: ["camping/hawkes-bay", "camping/wairarapa"],
    intro:
      "The Wairarapa and Hawke's Bay are two of the North Island's best wine regions, and State Highway 2 links them in about 330 kilometres from Wellington to Napier. Martinborough is known for pinot noir, Hawke's Bay for syrah and Bordeaux-style reds, and both are flat, sunny, easy to cycle and full of small towns with good food. A campervan gives you a base on the doorstep, as long as the driver stays sober and the days stay short.",
    sections: [
      s("The route and how long it takes", [
        "From Wellington, State Highway 2 climbs over the Remutaka Hill Road into the Wairarapa, then runs north through Featherston, Greytown, Carterton and Masterton and on through Eketāhuna, Dannevirke and Waipukurau to Hastings and Napier. Wellington to Napier is about 330 kilometres and 4.5 to 5 hours without stops, so the trail wants three to five days.",
        "The Remutaka Hill Road is winding and can be affected by wind, ice and slips, with a strict speed limit on the descent, and the south of the Wairarapa is exposed to the wind. Check the NZTA Journey Planner before you set out and use the driving day planner to set days that suit a campervan.",
      ], ["About 330 km, 4.5 to 5 hours without stops", "Plan three to five days", "Check the Remutaka Hill Road conditions"]),
      s("Martinborough and the Wairarapa", [
        "Martinborough sits about an hour and a half from Wellington, a village on a square with more than 20 wineries within a few minutes of it, most known for pinot noir. The country is flat, so cycling between cellar doors is easy and hire is available in the village. Greytown, further north, has heritage buildings, boutiques and cafes and is the other natural stop.",
        "Many Wairarapa cellar doors open at lunchtime and close by late afternoon, some only at weekends or by appointment, so check hours before you drive out. The Wellington and Wairarapa camping loop guide has the region's campgrounds and the Cape Palliser coast.",
      ], ["More than 20 wineries near Martinborough", "Hire a bike for the flat roads", "Check cellar door hours"]),
      s("Masterton to Hawke's Bay", [
        "North of Masterton the highway runs through farming country and small towns, with Eketāhuna, Pahiatua and Dannevirke each a coffee stop. Masterton to Hastings is about 200 kilometres and three hours, and a night in Masterton or Dannevirke splits it comfortably.",
        "Rural roads carry stock trucks and tractors, and passing places are limited. Slow down for blind corners and let traffic pass at the pull-outs. The Wellington to Napier drive guide covers the same highway in more detail.",
      ], ["Masterton to Hastings is about three hours", "Watch for stock trucks", "Let traffic pass at the pull-outs"]),
      s("Hawke's Bay: Napier, Hastings and Havelock North", [
        "Hawke's Bay is New Zealand's oldest wine region and is known for syrah and Bordeaux-style blends from the Gimblett Gravels, with chardonnay and sparkling wines too. Napier is the Art Deco city on the coast, Hastings the working centre, and Havelock North the village at the foot of Te Mata Peak, with cellar doors and restaurants all within a short drive.",
        "The Hawke's Bay Trails are flat cycleways that link the towns and many of the wineries and give a car-free day, with bike hire around Napier and Havelock North. Allow a day for Napier's Art Deco streets and the seafront, and another for Te Mata Peak and Cape Kidnappers.",
      ], ["Syrah and Bordeaux-style reds", "Hawke's Bay Trails for cycling", "Art Deco in Napier"]),
      s("Wine tasting and drink-driving", [
        "The drink-driving limit is 50 mg of alcohol per 100 ml of blood for drivers aged 20 and over, and zero for drivers under 20, and a few tastings can put a driver over it. Appoint a driver who does not drink, take a winery tour or shuttle, or cycle between cellar doors on the flat trails. The alcohol and fatigue guide has the rules in full.",
        "Most cellar doors let you spit and will pour small samples, so tasting does not have to mean drinking, and they will arrange a taxi. A campervan is no place for the driver to sleep off a tasting before driving in the morning, because alcohol can still be in the blood.",
      ], ["Limit is 50 mg per 100 ml, zero under 20", "Nominate a sober driver", "Spit, or take a tour or a bike"]),
      s("Where to camp", [
        "Holiday parks in Martinborough, Greytown, Masterton, Hastings and Napier suit a campervan, with powered sites, showers and kitchens, and many sit close to the cellar doors. Book ahead in summer and over school holidays, and for events such as the harvest in March and April.",
        "Freedom camping in both regions is controlled by council rules, and several towns restrict it to certified self-contained vehicles at set sites. Do not park overnight at a cellar door unless the owner has invited you. DOC campsites are limited on this route, so check the Wairarapa and Hawke's Bay hubs for what is open.",
      ], ["Holiday parks near the cellar doors", "Book ahead for harvest and holidays", "Ask first at cellar doors"]),
      s("Planning the trail in KiwiCamping", [
        "KiwiCamping lists the holiday parks and the few DOC campsites between the Wairarapa and Hawke's Bay, with filters for campervan access and facilities. Save the towns you want to base yourself in, add them to a trip in order, and the app shows how far apart they are and what the forecast says at each one. It has no directions or live traffic, so NZTA is the place to check for closures on the Remutaka Hill Road.",
        "Booking stays on the provider's own pages. Free to download, with in-app purchases.",
      ], ["Save stops in driving order", "Forecast at each stop", "Check NZTA for closures"], true),
    ],
    sources: [
      { label: "Wairarapa NZ: wine and visit the Wairarapa", url: "https://wairarapanz.com/" },
      { label: "Hawke's Bay Tourism: visit Hawke's Bay", url: "https://www.hawkesbaynz.com/" },
      { label: "NZTA: drink-driving limits", url: "https://www.nzta.govt.nz/safety/driving-safely/alcohol-and-drugs/" },
      { label: "NZTA Journey Planner (highway conditions)", url: "https://www.journeys.nzta.govt.nz/" },
    ],
  }),
  a({
    slug: "manawatu-road-trip-camping",
    title: "Manawatū Road Trip and Camping: Palmerston North, Feilding and the Ranges",
    description: "A three-day Manawatū road trip by campervan from Wellington: the Horowhenua coast, Palmerston North, Feilding, the Pohangina Valley and Ruahine foothills, the new Manawatū highway and where to camp.",
    category: "Road trips",
    region: "North Island",
    places: ["Levin", "Foxton", "Palmerston North", "Feilding", "Pohangina Valley", "Woodville"],
    imageAlt: "Rapids on the Whanganui River in the Manawatū-Whanganui region",
    related: ["wellington-wairarapa-camping-loop", "auckland-to-wellington-drive-guide", "whanganui-journey-camping-2026-27", "freedom-camping-wellington-2026", "north-island-two-week-road-trip", "campervan-road-rules-new-zealand"],
    hubs: ["camping/manawatu-whanganui", "camping/wellington-kapiti"],
    intro:
      "Manawatū is the part of the North Island most people drive straight through on State Highway 1 between Wellington and Taupō. That is a mistake, because it has a lively university city, flat farmland framed by the Tararua and Ruahine ranges, long driftwood beaches, river gorges and a new highway that has transformed the link to the Wairarapa. Three days from Wellington covers it at an easy pace, with short drives and good camping.",
    sections: [
      s("The route and how long it takes", [
        "Leave Wellington on State Highway 1 north through Kāpiti, then Ōtaki, Levin and Foxton to Palmerston North, which is about 145 kilometres and two hours without stops. From Palmerston North loop out through Feilding and the Pohangina Valley, then east over the Tararua Range on the new highway to Woodville and the Wairarapa, or return south the way you came.",
        "Three days is a comfortable trip, with a night on the coast, one in or near Palmerston North, and one in the Pohangina Valley or on the way east. The driving day planner helps you set days to suit your vehicle, and the Wellington and Wairarapa camping loop guide picks up the road south from Woodville.",
      ], ["About 145 km from Wellington to Palmerston North", "Three days is comfortable", "Loop back over the new highway"]),
      s("Kāpiti and Horowhenua", [
        "The Kāpiti Coast and Horowhenua are an easy first leg. Ōtaki has a good bakery, craft shops and the Ōtaki River mouth, Levin is the service town for the region, and Foxton, on the coast, has the De Molen windmill, the Foxton Beach holiday park and a long, windy shoreline of driftwood and dunes.",
        "Several beaches here, including Himatangi and Foxton, are exposed and the sea is rough, with rips on the west coast. Swim only where it is patrolled in summer and check conditions before you go in. Camping on the dunes is controlled, so use a campground.",
      ], ["De Molen windmill in Foxton", "Rips on the west coast beaches", "Use campgrounds, not the dunes"]),
      s("Palmerston North", [
        "Palmerston North is a university city with a pleasant centre, the Esplanade gardens, Te Manawa museum and a lively cafe scene. The Manawatū River has a walking and cycling path along it that is flat and easy, and a day here suits a wet forecast because most of what is worth doing is indoors.",
        "Holiday parks on the city's edge suit a campervan, with powered sites, kitchens and showers, and the town has supermarkets and fuel, which is useful before the hills. Book in the university's graduation weeks, when rooms and sites fill.",
      ], ["Esplanade and the river path", "Te Manawa museum for a wet day", "Fuel and supplies before the hills"]),
      s("Feilding, the Pohangina Valley and the Ruahine foothills", [
        "Feilding, 20 minutes north, is a farming town with a large Friday saleyard market and tidy streets. The Pohangina Valley beyond it is the quiet part of the trip, a long valley road up to the Ruahine foothills, with a regional park at Totara Reserve that has bush walks and a campground by the river.",
        "The valley roads are narrow and partly unsealed in places, with stock and one-lane bridges, so take it slowly and give way as the signs say. The one-lane bridges and gravel roads guide has the rules. Rivers here rise fast in rain, so camp above them and move if the forecast is heavy.",
      ], ["Totara Reserve for a riverside camp", "Narrow valley roads with stock", "Camp above rivers when rain is forecast"]),
      s("The new highway to the Wairarapa", [
        "The old Manawatū Gorge road closed after slips in 2017, and a new highway, Te Ahu a Turanga, now crosses the Tararua Range between Ashhurst and Woodville, so the link between Palmerston North and the Wairarapa is open again. It is a modern road with long climbs, and a good way to return to Wellington by a different route.",
        "From Woodville you can continue to Pahiatua and the Wairarapa wine towns, or turn north to Hawke's Bay. The route is exposed to wind and can be affected by snow and ice in winter, so check the NZTA Journey Planner before driving.",
      ], ["Te Ahu a Turanga links Ashhurst and Woodville", "Exposed to wind and winter ice", "Check NZTA before driving"]),
      s("Where to camp", [
        "Holiday parks in Foxton Beach, Palmerston North and Feilding are the simple choice, with powered sites and facilities. Regional parks and council campgrounds, such as Totara Reserve in the Pohangina Valley, give a quieter night by a river, and book out around summer weekends.",
        "Freedom camping is controlled by council rules in Horowhenua and Manawatū, and some sites are limited to certified self-contained vehicles. The freedom camping guide explains the rules, and the Manawatū-Whanganui hub on this site lists the campsites with their details.",
      ], ["Holiday parks in the towns", "Regional parks for quiet nights", "Check council rules for freedom camping"]),
      s("Planning the trip in KiwiCamping", [
        "For the Manawatū, KiwiCamping maps DOC campsites, huts and holiday parks, with campervan access and facilities filters. Save the places you like, put them in order on a trip, and the app works out the distance from one stop to the next and gives a forecast for each place. Road closures are on the NZTA site, because the app has no live traffic.",
        "Any booking is made with the park or campground itself, and the app is free to download with in-app purchases.",
      ], ["Save stops in driving order", "Forecast at each stop", "Check NZTA for closures"], true),
    ],
    sources: [
      { label: "Manawatū NZ: visit Manawatū", url: "https://www.manawatunz.co.nz/" },
      { label: "Horizons Regional Council: regional parks", url: "https://www.horizons.govt.nz/" },
      { label: "NZTA: Te Ahu a Turanga Manawatū Tararua Highway", url: "https://www.nzta.govt.nz/" },
      { label: "NZTA Journey Planner (highway conditions)", url: "https://www.journeys.nzta.govt.nz/" },
    ],
  }),
  a({
    slug: "top-of-the-south-itinerary-nelson-golden-bay-marlborough",
    title: "Top of the South Itinerary: Nelson, Golden Bay and Marlborough by Campervan",
    description: "A seven-day campervan itinerary around the top of the South Island: Picton, the Marlborough Sounds, Nelson, Abel Tasman, Golden Bay, Nelson Lakes and Marlborough wine, with distances and where to camp.",
    category: "Road trips",
    region: "South Island",
    places: ["Picton", "Havelock", "Nelson", "Motueka", "Tākaka", "Golden Bay", "Blenheim"],
    imageAlt: "Golden sand and a native plant on a beach in Abel Tasman National Park",
    related: ["nelson-abel-tasman-golden-bay", "abel-tasman-coast-track-campsites-2026-27", "freedom-camping-marlborough-2026", "freedom-camping-tasman-2026", "heaphy-track-camping-2026-27", "cook-strait-ferry-campervan-guide", "sandflies-new-zealand-camping"],
    hubs: ["camping/nelson-tasman", "camping/marlborough"],
    intro:
      "The top of the South Island has more sunshine than almost anywhere in the country and packs three very different regions into a short loop: the drowned valleys of the Marlborough Sounds, the beaches and orchards of Nelson and Tasman, and the empty far end of Golden Bay. A week from the Picton ferry is enough to see the best of it, with drives of one to two hours and plenty of campgrounds. This itinerary sets out the days.",
    sections: [
      s("The route at a glance", [
        "Arrive in Picton on the ferry, take the scenic Queen Charlotte Drive to Havelock and Nelson, continue to Motueka and over Takaka Hill to Golden Bay, return to Nelson, then go south to Nelson Lakes and east through the Wairau Valley to Blenheim and back to Picton. The loop is roughly 600 kilometres, but no single day is more than about three hours of driving.",
        "Seven days gives each region its due: one in the Sounds, two around Nelson and Abel Tasman, two in Golden Bay, one at Nelson Lakes and one in Marlborough. If you are short on time, skip the lakes and cut the loop to five. The Cook Strait ferry guide covers the crossing and booking a campervan on it.",
      ], ["About 600 km over seven days", "No day over about three hours of driving", "Cut Nelson Lakes if short on time"]),
      s("Day 1: Picton to Nelson through the Sounds", [
        "The Queen Charlotte Drive from Picton to Havelock is a winding coastal road with views over the Sounds, and it is narrow with tight bends, so take it slowly in a large campervan. Havelock is the home of the green-lipped mussel, with fresh mussels sold on the main street. The more direct alternative is State Highway 6 through Rai Valley.",
        "From Havelock the road climbs over the Rai Saddle to Nelson, a city of about 50,000 with good markets, a harbour and beaches. Picton to Nelson is about 110 kilometres and takes two to three hours, depending on the route and the stops. Book a holiday park in Nelson in summer.",
      ], ["Queen Charlotte Drive is narrow and winding", "Fresh mussels in Havelock", "Book Nelson ahead in summer"]),
      s("Days 2 and 3: Nelson, Motueka and Abel Tasman", [
        "Nelson has the Saturday market, craft studios and the Centre of New Zealand walk. Motueka, 50 kilometres west, is the base for Abel Tasman National Park. Kaiteriteri has the golden beach, and water taxis run from there to the bays on the coast. A day on the water, with a walk between two bays, is the way to do it.",
        "The Abel Tasman Coast Track campsites and huts must be booked with DOC all year, and the water taxi times need planning around the tide. The Abel Tasman campsites guide explains the booking and the tide windows. Sandflies bite at dawn and dusk, so carry repellent.",
      ], ["Water taxi and walk between bays", "Book Abel Tasman campsites on DOC", "Carry sandfly repellent"]),
      s("Days 4 and 5: Golden Bay", [
        "The road to Golden Bay climbs Takaka Hill with a series of hairpin bends and a drop on one side, which is steep and slow in a long campervan, so take it in low gear and use the pull-outs. Tākaka is a relaxed town with cafes and arts, and nearby are Te Waikoropupū Springs, one of the clearest springs in the world, and the Pupu Walk, a boardwalk through the springs where swimming is not allowed.",
        "Beyond Tākaka the road runs to Collingwood, the Pūponga area and the end of the road at Wharariki Beach, with sea arches, seals and giant dunes, reached by a 20 minute walk. Farewell Spit, the long sandbar to the north, can be visited beyond the base only with a licensed tour. Golden Bay is remote, so fill up with fuel and supplies in Tākaka.",
      ], ["Takaka Hill has steep hairpins", "Te Waikoropupū Springs: no swimming", "Wharariki Beach is a short walk from the road end"]),
      s("Day 6: Nelson Lakes", [
        "From Nelson, State Highway 6 and then 63 lead to St Arnaud and Nelson Lakes National Park, around 100 kilometres and about two hours away. Lake Rotoiti and Lake Rotoroa are clear alpine lakes with short walks, and the area is quieter than the coast. Nelson Lakes has sandflies, cold nights and rapidly changing mountain weather, so bring warm layers.",
        "The DOC campsites around Lake Rotoiti have simple facilities and fill in summer, so book if the site allows. Do not swim or boat in cold water without a lifejacket and look at the weather before heading up the valley, as mountain storms arrive quickly.",
      ], ["St Arnaud is the lakes base", "Cold nights even in summer", "Mountain weather changes quickly"]),
      s("Day 7: Marlborough wine and Picton", [
        "State Highway 63 runs down the Wairau Valley to Blenheim, the centre of Marlborough's wine country and the home of sauvignon blanc, with cellar doors and a cycle path through the vineyards. St Arnaud to Blenheim is about 120 kilometres and two hours, and Picton is another 30 minutes beyond.",
        "If you are catching the ferry, book the vehicle ahead and arrive at the terminal in good time. Do not drive after tasting, because the drink-driving limit applies to campervan drivers as it does to anyone else. The alcohol and fatigue guide covers the limits.",
      ], ["Blenheim is sauvignon blanc country", "Book the ferry ahead", "Do not drive after tasting"]),
      s("Where to camp and planning in KiwiCamping", [
        "Holiday parks in Picton, Nelson, Motueka, Tākaka and Blenheim are the easy option, with DOC campsites in Abel Tasman, Golden Bay and Nelson Lakes for a quieter night. Freedom camping rules differ by council, and in Marlborough and Tasman they usually need a certified self-contained vehicle at set sites, so check the freedom camping guides for each.",
        "Across the top of the island, KiwiCamping maps DOC campsites, huts and holiday parks with filters for campervan access and facilities. Save the places you like, order them as a trip, and the app shows the distance between each pair and a forecast for every place on your list. Turn-by-turn directions and live traffic are a job for a navigation app. Free to download, with in-app purchases.",
      ], ["Holiday parks in each main town", "Freedom camping rules vary by council", "Save stops in driving order"], true),
    ],
    sources: [
      { label: "DOC: Abel Tasman National Park", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/nelson-tasman/places/abel-tasman-national-park/" },
      { label: "DOC: Nelson Lakes National Park", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/nelson-tasman/places/nelson-lakes-national-park/" },
      { label: "Nelson Tasman Tourism: plan your trip", url: "https://www.nelsontasman.nz/" },
      { label: "Destination Marlborough: visit Marlborough", url: "https://www.marlboroughnz.com/" },
      { label: "NZTA Journey Planner (highway conditions)", url: "https://www.journeys.nzta.govt.nz/" },
    ],
  }),
  a({
    slug: "christchurch-to-wanaka-drive-guide",
    title: "Christchurch to Wānaka Road Trip: Tekapo, Omarama and the Lindis Pass",
    description: "Christchurch to Wānaka by campervan: about 420 km and 5.5 to 6 hours via Lake Tekapo, Twizel, Omarama and the Lindis Pass, with stops, winter notes and where to camp.",
    category: "Road trips",
    region: "South Island",
    places: ["Christchurch", "Geraldine", "Lake Tekapo", "Twizel", "Omarama", "Lindis Pass", "Wānaka"],
    imageAlt: "Lake Tekapo's turquoise water with mountains behind",
    related: ["christchurch-tekapo-aoraki-road-trip", "christchurch-to-queenstown-drive-guide", "wanaka-haast-pass-route", "freedom-camping-mackenzie-2026", "winter-driving-new-zealand-campervan", "new-zealand-driving-day-planner"],
    hubs: ["camping/canterbury", "camping/otago"],
    intro:
      "Christchurch to Wānaka is about 420 kilometres and 5.5 to 6 hours of driving, through the Mackenzie Country, past Lake Tekapo and the blue of Lake Pukaki and over the Lindis Pass into Central Otago. It is one of the best drives in the South Island, and two days turns it from a transfer into a trip. This guide gives the route, the stops and where to camp.",
    sections: [
      s("Route, distance and time", [
        "State Highway 1 runs south from Christchurch across the Canterbury Plains to Timaru, with the cross-country alternative through Geraldine and Fairlie on State Highway 79 to join the Mackenzie Country at Burkes Pass. Then State Highway 8 continues through Tekapo and Twizel to Omarama, over the Lindis Pass and down to Tarras, where you turn for Wānaka.",
        "The whole drive is about 420 kilometres, with Lake Tekapo roughly 225 kilometres and three hours from Christchurch. Add stops and the day becomes eight or nine hours, so a night in Tekapo or Twizel makes it comfortable. The driving day planner helps you set days to suit your vehicle.",
      ], ["About 420 km, 5.5 to 6 hours of driving", "Tekapo is about 3 hours from Christchurch", "Stay a night in Tekapo or Twizel"]),
      s("Geraldine, Fairlie and Burkes Pass", [
        "Geraldine, about two hours from Christchurch, is the first sensible stop, with craft shops, cafes and a good bakery. Fairlie is known for its pies and is the gateway to the Mackenzie Basin, and beyond it the road climbs to Burkes Pass, where the landscape opens into high tussock country.",
        "The roads here carry heavy summer traffic and logging trucks, and overtaking places are limited. Keep to the speed limit, pull over when faster traffic builds up behind you, and check the NZTA Journey Planner for roadworks.",
      ], ["Geraldine for a first stop", "Fairlie is known for pies", "Pull over for faster traffic"]),
      s("Lake Tekapo and Lake Pukaki", [
        "Lake Tekapo is the best-known stop, with the milky turquoise lake, the Church of the Good Shepherd and a dark sky reserve that makes it one of the best places for stargazing in the country. The hot pools above the town are a good way to end a long day, and the Mt John walk gives wide views.",
        "Lake Pukaki, 45 minutes south, is a deeper blue still, with Aoraki Mount Cook framed at the far end of the lake. The lookout and the roadside stops are free, and the village of Aoraki Mount Cook is a side trip of about an hour each way. The Christchurch, Tekapo and Aoraki road trip guide covers the mountain in detail.",
      ], ["Stargazing at Tekapo", "Pukaki is a deeper blue", "Aoraki Mount Cook is an hour off the road"]),
      s("Twizel, Omarama and the Lindis Pass", [
        "Twizel is the service town of the Mackenzie, with fuel, supermarkets and holiday parks, and is a good place to stock up. Omarama, 45 minutes on, has the clay cliffs, a short walk from the road, and is a centre for gliding. Fuel up in Twizel or Omarama, because the next stretch has few options.",
        "State Highway 8 then climbs the Lindis Pass at 971 metres, with golden tussock slopes and open views, and drops into the Lindis Valley. The pass can close for snow and ice in winter, and it is exposed to wind, so check conditions before you leave Omarama and carry chains in the cold months. The winter driving guide explains the rules.",
      ], ["Fuel up in Twizel or Omarama", "Lindis Pass is 971 m", "Carry chains in winter"]),
      s("Tarras and arriving in Wānaka", [
        "At Tarras, a tiny township with a cafe and a gallery, the road splits. The way to Wānaka continues on the Tarras-Wānaka road past orchards and vineyards, with Lake Hāwea and the long Hāwea lookout an optional detour. Wānaka is a lakeside town with a relaxed feel, good food and a lake that is cold even in summer.",
        "Roys Peak and Rob Roy are the best-known walks, and Wānaka is also the gateway to the Haast Pass and the West Coast. The Wānaka to Haast Pass guide takes the trip on from here. Freedom camping around Wānaka is tightly controlled, so book a campground or holiday park in summer.",
      ], ["Tarras road leads to Wānaka", "Roys Peak and Rob Roy walks", "Book Wānaka ahead in summer"]),
      s("Where to camp", [
        "Holiday parks at Geraldine, Fairlie, Tekapo, Twizel and Omarama are the easy choice, with powered sites and showers, and many have views of the lakes and the mountains. Book ahead for Tekapo and Twizel in summer and over school holidays, since they fill early.",
        "Freedom camping in the Mackenzie is restricted to a few sites, and some need a certified self-contained vehicle. The Mackenzie freedom camping guide explains the rules. Nights are cold on the plateau even in summer, and winter nights can be well below freezing, so bring a warm sleeping layer.",
      ], ["Holiday parks in each town", "Book Tekapo and Twizel ahead", "Cold nights on the plateau"]),
      s("Planning the drive in KiwiCamping", [
        "From Geraldine to Omarama, KiwiCamping maps DOC campsites, huts and holiday parks, with campervan access and facilities filters. Save the stops you like, add them to a trip in order, and the app shows the distance between each pair and a forecast for every stop. Directions and live traffic are outside what it does, so check NZTA for closures on the way.",
        "Campsites are booked with DOC or the holiday park directly, never through the app, which is free to download with in-app purchases.",
      ], ["Save stops in driving order", "Forecast at each stop", "Check NZTA for closures"], true),
    ],
    sources: [
      { label: "NZTA Journey Planner (highway conditions)", url: "https://www.journeys.nzta.govt.nz/" },
      { label: "Mackenzie Tourism: visit the Mackenzie", url: "https://www.mackenzienz.com/" },
      { label: "Lake Wānaka Tourism: visit Wānaka", url: "https://www.lakewanaka.co.nz/" },
      { label: "DOC: Canterbury and Otago", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/" },
    ],
  }),
  a({
    slug: "christchurch-to-hokitika-greymouth-road-trip",
    title: "Christchurch to Hokitika and Greymouth Road Trip via Arthur's Pass",
    description: "Christchurch to Greymouth and Hokitika by campervan: about 250 km and 3.5 to 4 hours over Arthur's Pass, with Castle Hill, the Otira viaduct, kea, Lake Brunner, Hokitika Gorge and where to camp.",
    category: "Road trips",
    region: "South Island",
    places: ["Christchurch", "Springfield", "Arthur's Pass", "Greymouth", "Lake Brunner", "Hokitika"],
    imageAlt: "The Waimakariri River near Arthur's Pass with mountains on both sides",
    related: ["arthurs-pass-camping-route", "west-coast-south-island-road-trip", "freedom-camping-westland-2026", "winter-driving-new-zealand-campervan", "wildlife-livestock-road-safety-new-zealand", "sandflies-new-zealand-camping"],
    hubs: ["camping/canterbury", "camping/west-coast"],
    intro:
      "Christchurch to Greymouth is about 250 kilometres and 3.5 to 4 hours on State Highway 73, the most dramatic crossing of the Southern Alps by road. The route runs from the Canterbury Plains up the Waimakariri Valley, over Arthur's Pass and down to the wet, green West Coast, and Hokitika is another 40 minutes south. Two days turns it from a transfer into a proper road trip, and the stops below make it easy.",
    sections: [
      s("Route, distance and time", [
        "From Christchurch, State Highway 73 runs west through Darfield and Springfield, up the Waimakariri River and over Arthur's Pass at 920 metres, then down the Otira Gorge to Kumara Junction and Greymouth. The distance is about 250 kilometres and takes 3.5 to 4 hours without stops. Hokitika is a further 40 kilometres south.",
        "The road is winding and steep in places, with one-lane bridges and sections where trucks and campervans meet on tight bends. Plan for slower speeds than the map suggests, and check the NZTA Journey Planner, because the pass can close for snow, ice, slips or a crash. Use the driving day planner to split the road into days that suit the length and weight of your vehicle.",
      ], ["About 250 km, 3.5 to 4 hours to Greymouth", "Hokitika is 40 km further", "Check NZTA for pass closures"]),
      s("Springfield, Castle Hill and Porters Pass", [
        "The plains are flat farmland until the road reaches Springfield, the gateway to the mountains with a giant doughnut and a cafe, and then climbs to Porters Pass, a high tussock pass with views of the Torlesse Range. A short detour leads to Castle Hill, a field of limestone boulders that is popular for climbing and photography.",
        "The Waimakariri Gorge and Cass are worth a pause for the river views, and fuel is available in Springfield and again only at Arthur's Pass village, so fill up early. The Arthur's Pass camping route guide covers the area in more detail.",
      ], ["Springfield doughnut and cafe", "Castle Hill boulders are a short detour", "Fill up early"]),
      s("Arthur's Pass village and the Otira Gorge", [
        "Arthur's Pass is a small village in a national park, with short walks to Devils Punchbowl Falls and Bealey Valley, a visitor centre and a few cafes. Kea, the cheeky alpine parrots, gather at the carparks and can damage vehicles and gear, so do not feed them and keep food and loose items inside.",
        "Beyond the village the road descends the Otira Gorge via the Otira Viaduct, a long steel structure that replaced the old route down the valley, with a winding road below and steep drops. Drive slowly, use a low gear on the descent and give way to oncoming trucks. The winter driving guide covers chains and ice.",
      ], ["Do not feed the kea", "Devils Punchbowl Falls walk", "Use a low gear on the descent"]),
      s("Greymouth and Lake Brunner", [
        "Greymouth is the largest town on the West Coast, with a working harbour, fuel, supermarkets and a brewery. A side trip leads to Lake Brunner, a quiet lake 40 minutes inland, where a short drive reaches Moana, a small township with a lakefront and good fishing.",
        "The Coast gets heavy rain and a day or two of it is normal, with rivers that rise quickly. Do not drive through floodwater, and check the forecast. Sandflies bite from dawn to dusk, and repellent is worth carrying. The sandflies guide has advice on clothing.",
      ], ["Greymouth has fuel and supermarkets", "Lake Brunner is quiet", "Heavy rain is normal"]),
      s("Hokitika", [
        "Hokitika is the greenstone and craft town of the West Coast, with pounamu carving studios, a glow-worm dell in the middle of town and Hokitika Beach, where the driftwood and the sunset draw a crowd. Hokitika Gorge, a 30 minute drive inland, is a pale turquoise gorge reached by a short walk and a swing bridge.",
        "Freedom camping in Westland is restricted and needs a certified self-contained vehicle at set sites, so check the Westland freedom camping guide before parking. Holiday parks in Hokitika and Greymouth are the easier choice, with powered sites and kitchens.",
      ], ["Pounamu studios and a glow-worm dell", "Hokitika Gorge is 30 minutes inland", "Check Westland camping rules"]),
      s("Where to camp", [
        "DOC campsites around Arthur's Pass, Cass and Lake Brunner give quiet nights close to the mountains and the lake, and a holiday park in Greymouth or Hokitika suits a wet evening. Book in summer, because West Coast campsites fill between Christmas and the end of January.",
        "Nights in the pass are cold at any time of year, and winter nights are below freezing, so carry a warm sleeping layer and a heater. The wildlife and livestock guide covers the animals you might meet on the road, and the West Coast road trip guide continues south to Franz Josef and Haast.",
      ], ["DOC campsites near the pass", "Book in summer", "Nights are cold in the pass"]),
      s("Planning the drive in KiwiCamping", [
        "Across Arthur's Pass and the West Coast, KiwiCamping maps DOC campsites, huts and holiday parks, with campervan access and facilities filters. Order your stops as a trip and the app gives the distance between each pair and a forecast for every place, which helps in a pass where the weather changes fast. It is not a navigation app, so check NZTA for closures on the pass.",
        "West Coast DOC campsites are booked on DOC's website. Download the app free, with in-app purchases.",
      ], ["Save stops in driving order", "Forecast at each stop", "Check NZTA for closures"], true),
    ],
    sources: [
      { label: "NZTA Journey Planner (highway conditions)", url: "https://www.journeys.nzta.govt.nz/" },
      { label: "DOC: Arthur's Pass National Park", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/canterbury/places/arthurs-pass-national-park/" },
      { label: "DOC: West Coast", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/west-coast/" },
      { label: "Development West Coast: visit the West Coast", url: "https://www.west-coast.co.nz/" },
    ],
  }),
];
