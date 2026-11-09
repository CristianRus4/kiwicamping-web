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
        "KiwiCamping is an iPhone app that maps DOC campsites, huts and holiday parks, with filters for campervan access and facilities. Save the places you like, add them to a trip as ordered stops, and the app shows the distance between each pair and a forecast for every place on your list, so a bad forecast at one stop is visible before you drive there. It does not replace official weather warnings, emergency alerts or road closures, so check MetService and NZTA as well.",
        "DOC bookings stay on DOC's own booking pages. Free to download, with in-app purchases.",
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
];
