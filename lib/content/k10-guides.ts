import { makeArticle as a, type Article, type ArticleSection } from "@/lib/article-model";

const s = (heading: string, body: string[], tips?: string[], cta?: boolean): ArticleSection => ({ heading, body, tips, ...(cta && { cta }) });

/**
 * Wildlife, wine, season and budget guides written on 10 November 2026 to close the last gaps in
 * the November search research. Facts are general and generalised from the official pages named in
 * each guide's `sources`.
 */
export const k10Articles: Article[] = [
  a({
    slug: "banks-peninsula-campsites",
    title: "Banks Peninsula Campsites: 10 of the Best Bays to Camp Around Akaroa",
    description: "Ten of the best places to camp on Banks Peninsula, from Akaroa and the harbour bays to Okains Bay, Le Bons Bay and Little River, with the roads, the rules and when to book.",
    category: "Camping guides",
    region: "Canterbury",
    places: ["Akaroa", "Duvauchelle", "Wainui", "Okains Bay", "Le Bons Bay", "Little Akaloa", "Pigeon Bay", "Purau Bay", "Little River", "Magnet Bay"],
    imageAlt: "Akaroa Harbour on Banks Peninsula with green hills around the water",
    related: ["banks-peninsula-camping-weekend", "freedom-camping-akaroa", "freedom-camping-christchurch-2026", "camping-in-christchurch", "christchurch-campervan-starting-point", "scenic-campsites-new-zealand"],
    hubs: ["camping/canterbury"],
    intro:
      "Banks Peninsula is a pair of old volcanoes worn down into a ring of harbours and deep green bays, an hour or so from Christchurch. It is one of the best short camping trips in Canterbury, and each bay feels different: Akaroa has the town and the harbour, the outer bays have long beaches at the end of steep roads, and the Lyttelton side is quiet and close to the city. These are ten of the places most worth a night, from the easy ones to the ones you have to work for.",
    sections: [
      s("Akaroa and the head of the harbour", [
        "1. Akaroa is the obvious base, with a holiday park above the town, cafes along the water and the harbour cruises that go looking for Hector's dolphins. It is busy on summer weekends and when cruise ships are in, so book the holiday park ahead and walk into town rather than hunting for a park.",
        "2. Duvauchelle, at the head of the harbour, is quieter and a few minutes before Akaroa on the main road. The camp sits right on the flat water, which suits families and kayaks, and it makes a good first night if you arrive late from Christchurch.",
      ], ["Akaroa: the town base", "Duvauchelle: flat water, quieter", "Book ahead for summer weekends"]),
      s("The western side of Akaroa Harbour", [
        "3. Wainui sits on the far side of the harbour from Akaroa, on a narrower road with views back across the water to the town. It is calm, sheltered and a good choice for a slower stay, with swimming and boating from the beach in fine weather.",
        "The road around this side continues to the harbour heads and a few small bays, and it is slow going. Allow plenty of time, and turn back where the seal ends if your van is not happy on gravel.",
      ], ["Wainui: calm and sheltered", "Views back to Akaroa", "Slow, narrow roads beyond"]),
      s("The outer bays", [
        "4. Okains Bay is the classic outer bay, with a long sandy beach, an estuary for paddling and a large camping ground behind the dunes that fills with Canterbury families in January. The road down from the Summit Road is steep and winding but sealed, and the bay has a small museum and a store that keeps summer hours.",
        "5. Le Bons Bay is the next bay along, smaller and quieter, with a sheltered beach and a simple camp in the valley. 6. Little Akaloa has a rocky bay, a little church and room for a few vans, and the drive in is one of the prettiest on the peninsula. All three are at the bottom of long descents, so check your brakes and use a low gear on the way down.",
      ], ["Okains Bay: long beach and estuary", "Le Bons Bay: smaller and quieter", "Little Akaloa: rocky and pretty"]),
      s("The northern bays and the Lyttelton side", [
        "7. Pigeon Bay is a long, deep inlet on the northern side, with farmland to the water and very little traffic. It suits people who want quiet and a short walk around the point more than a swimming beach.",
        "8. Purau Bay, on Lyttelton Harbour past Diamond Harbour, is the closest of the ten to Christchurch, with a grassy camp by the water and good swimming at high tide. It works for a Friday night escape from the city, and Port Levy, over the next hill, is a gravel road to a quieter bay if you want more space.",
      ], ["Pigeon Bay: deep and quiet", "Purau Bay: closest to the city", "Port Levy: gravel road, more space"]),
      s("Little River, Magnet Bay and the south", [
        "9. Little River sits at the base of the peninsula on the main road, beside Lake Forsyth, with a campground, a cafe stop and the Little River Rail Trail for an easy ride. It is flat, easy to reach and a sensible choice if the hill roads put you off or the weather is closing in.",
        "10. Magnet Bay and nearby Tumbledown Bay are on the exposed southern side, down a gravel road, with surf, cliffs and a wild feel. Camping there is limited, so treat them as a day trip from Little River or Akaroa, and leave the van at the top if the road is wet.",
      ], ["Little River: flat and easy", "Magnet Bay: surf and cliffs", "Day trip on the south side"]),
      s("Roads, rules and when to go", [
        "The peninsula roads are the main thing to plan around. The Summit Road along the crater rim is narrow with steep drops, the descents to the outer bays are long, and some bays are only reached by gravel. A small campervan handles them well with care, a large motorhome less so. Fill up with fuel before you leave Christchurch or at Little River.",
        "Freedom camping on Banks Peninsula is limited to a few signed areas and mostly needs a certified self-contained vehicle, so check Christchurch City Council's current rules before you plan a free night. January is the peak, and the holiday parks and domain camps book out, while February to April has warm water and far fewer people. The Banks Peninsula weekend guide has a two-night plan if you want one.",
      ], ["Narrow roads with steep descents", "Freedom camping is tightly limited", "February to April is quieter"]),
      s("Planning your trip in KiwiCamping", [
        "KiwiCamping maps the holiday parks, domain camps and DOC sites around the peninsula, and the campervan access filter helps you rule out the bays that are hard work in a bigger van. Save the bays you like to a dated trip, and check the forecast for each one before you commit to a long descent.",
        "Book holiday parks and domain camps with the operator. Free to download, with in-app purchases.",
      ], ["Save the bays you like", "Campervan access filter", "Forecast at each stop"], true),
    ],
    faq: [
      ["Where is the best place to camp on Banks Peninsula?", "Akaroa is the easiest base, Okains Bay has the best beach camping, and Purau Bay is the closest to Christchurch. Le Bons Bay and Pigeon Bay are quieter."],
      ["Can you freedom camp on Banks Peninsula?", "Only in a few signed areas, mostly for certified self-contained vehicles. Check Christchurch City Council's current rules before you go."],
    ],
    sources: [
      { label: "Christchurch City Council: freedom camping", url: "https://ccc.govt.nz/parks-and-gardens/freedom-camping" },
      { label: "ChristchurchNZ: Akaroa and Banks Peninsula", url: "https://www.christchurchnz.com/" },
      { label: "DOC: Canterbury places to go", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/canterbury/" },
    ],
  }),
  a({
    slug: "kaikoura-wildlife-and-diving",
    title: "Kaikōura Wildlife and Diving: Whales, Dolphins, Seals and Snorkelling for Campers",
    description: "How to see Kaikōura's wildlife from a camping trip: whale watching, dolphins, the seal colonies, albatross tours, snorkelling and diving in the kelp, the marine reserve, the rules around seals and the best time of year.",
    category: "Camping guides",
    region: "Canterbury",
    places: ["Kaikōura", "Kaikōura Peninsula", "Point Kean", "Ohau Point", "Hikurangi Marine Reserve", "Seaward Kaikōura Range"],
    imageAlt: "The Kaikōura coast with the sea in front of snow-capped mountains",
    related: ["camping-in-kaikoura", "freedom-camping-kaikoura", "christchurch-to-kaikoura-drive-guide", "picton-kaikoura-christchurch-route", "banks-peninsula-campsites", "responsible-camping-new-zealand"],
    hubs: ["camping/canterbury"],
    intro:
      "Kaikōura is one of the few places in the world where a deep ocean canyon runs almost to the shore. Cold, rich water wells up close to the coast, and with it comes an unusual amount of sea life: sperm whales most of the year, big pods of dusky dolphins, fur seals on the rocks a short walk from the campgrounds, and albatrosses off the coast. For a camper it is ideal, because you can see a lot of it from the land, and the boat trips leave from town in the morning.",
    sections: [
      s("Whales", [
        "Sperm whales feed in the Kaikōura Canyon most of the year, which is why whale watching here is so reliable. The boat trips run from town and last a few hours, and they are the main way to see them, with whale-spotting flights as a calmer alternative if you get seasick. Humpback whales pass along the coast in winter, roughly June and July, and orca turn up now and then.",
        "Trips are cancelled when the sea is rough, which happens often, so book for early in your stay and leave a spare morning in case it is called off. The morning trips usually have the calmest water. Take seasickness tablets before you board, not once you are out there.",
      ], ["Sperm whales most of the year", "Humpbacks pass in winter", "Book early and leave a spare day"]),
      s("Dolphins and albatrosses", [
        "Dusky dolphins move along the coast in large, acrobatic pods, and the boat trips that go looking for them are among the most memorable things to do in Kaikōura. Swimming with them is offered in summer by licensed operators, with wetsuits supplied. Hector's dolphins, small and rare, are sometimes seen close to shore.",
        "The same upwelling brings seabirds. Albatross tours go a short way offshore, and on a good day you will see several kinds of albatross and petrel close to the boat. The Seaward Kaikōura Range behind the town is the only breeding place in the world for Hutton's shearwater, which you may see in rafts on the sea in spring and summer.",
      ], ["Dusky dolphins in big pods", "Albatross tours close offshore", "Hutton's shearwater breed here"]),
      s("Seals you can see from the land", [
        "New Zealand fur seals haul out on the rocks around the Kaikōura Peninsula, and the car park at Point Kean, at the end of the peninsula road, is the easy place to see them. The Kaikōura Peninsula Walkway runs from there along the clifftops and the shore, with seals below and views of the mountains behind, and it takes a few hours for the full loop.",
        "North of town, the lookout at Ohau Point on State Highway 1 sits above a seal colony, and in winter the pups play in the rock pools below. It is a roadside stop, so pull fully off the highway and watch for traffic.",
      ], ["Point Kean: seals on the rocks", "The Peninsula Walkway loop", "Ohau Point: a roadside colony"]),
      s("Keeping your distance", [
        "Seals look sleepy but they bite, and they move fast on land. DOC asks you to stay at least 20 metres away, never get between a seal and the sea, keep dogs on a lead and well back, and never feed them. Seals often rest in the car parks and on the road at Point Kean, so drive slowly and look before you open the door.",
        "Boats and swimmers follow the marine mammal rules, which is part of why the licensed tours exist. If you are kayaking or on a paddleboard, keep your distance from whales and dolphins and let them come to you.",
      ], ["Stay at least 20 metres from seals", "Never between a seal and the sea", "Drive slowly at Point Kean"]),
      s("Snorkelling and diving", [
        "Under the water, Kaikōura has kelp forests, reef fish, crayfish and, on a lucky day, curious seals. Snorkelling with seals is offered in summer by local operators, with wetsuits and a guide, and it is the easiest way to see the underwater side. Scuba divers can join guided dives from town. The water is cold all year, so a thick wetsuit is the norm.",
        "The Hikurangi Marine Reserve lies off the coast south of the peninsula, and nothing may be taken there. Elsewhere, take only what the rules allow: check Fisheries New Zealand's current limits for crayfish and pāua before you gather anything, as the local rules have changed since the 2016 earthquake lifted the seabed along this coast.",
      ], ["Guided snorkelling with seals", "Cold water all year", "Check the gathering rules first"]),
      s("When to go and where to stay", [
        "Summer has the warmest weather and the dolphin swims, and it is busy, so book the boat trips and holiday parks ahead. Winter brings the humpbacks and the seal pups, clear days with snow on the range and far fewer people. Spring and autumn are a good balance, with sea conditions the main thing to watch.",
        "Kaikōura has holiday parks in town and along the beachfront, and the camping in Kaikōura guide covers them. Freedom camping is tightly limited, and the freedom camping guide has the current picture. It is roughly two and a half hours from Christchurch and two from Picton, so most people stay at least two nights to leave room for a cancelled trip.",
      ], ["Summer: dolphin swims, busy", "Winter: humpbacks and seal pups", "Stay two nights for a spare morning"]),
      s("Planning your trip in KiwiCamping", [
        "Around Kaikōura, KiwiCamping maps the holiday parks and DOC sites along the coast, and the facilities filter shows which have hot showers, which matter after a cold morning on the water. Add your nights to a dated trip and keep an eye on the forecast for each stop, since the wind decides whether the boats go out.",
        "Book wildlife tours with the operators. Free to download, with in-app purchases.",
      ], ["Save the coast camps", "Hot showers filter", "Watch the forecast for the boats"], true),
    ],
    faq: [
      ["When is the best time to see whales in Kaikōura?", "Sperm whales are seen most of the year. Humpbacks pass in winter, roughly June and July. Trips depend on the sea, so leave a spare morning."],
      ["Where can you see seals in Kaikōura?", "At Point Kean at the end of the peninsula road and along the Peninsula Walkway, and at Ohau Point north of town. Stay at least 20 metres away."],
    ],
    sources: [
      { label: "DOC: Kaikōura Peninsula Walkway", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/canterbury/places/kaikoura-area/" },
      { label: "DOC: New Zealand fur seal", url: "https://www.doc.govt.nz/nature/native-animals/marine-mammals/seals/new-zealand-fur-seal/" },
      { label: "DOC: Hikurangi Marine Reserve", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/canterbury/places/hikurangi-marine-reserve/" },
      { label: "Fisheries New Zealand: recreational fishing rules", url: "https://www.mpi.govt.nz/fishing-aquaculture/recreational-fishing/" },
      { label: "Kaikōura: visitor information", url: "https://www.kaikoura.co.nz/" },
    ],
  }),
  a({
    slug: "kea-and-wildlife-encounters-new-zealand",
    title: "Kea and Wildlife Encounters in New Zealand: Where to See Them From a Campervan",
    description: "Where campers meet New Zealand's wildlife: kea in the Southern Alps, kiwi at night, weka at the campsite, penguins, sea lions and island sanctuaries, plus how to keep the animals and your van safe.",
    category: "Trip planning",
    region: "New Zealand",
    places: ["Arthur's Pass", "Homer Tunnel", "Aoraki Mount Cook", "Rakiura Stewart Island", "Otago Peninsula", "Oamaru", "Tiritiri Matangi", "Zealandia"],
    imageAlt: "A kea, an olive-green alpine parrot, perched on a rock in Fiordland",
    related: ["wildlife-livestock-road-safety-new-zealand", "kaikoura-wildlife-and-diving", "arthurs-pass-camping-route", "queenstown-to-milford-sound-drive-guide", "rakiura-stewart-island-camping-guide", "dogs-camping-new-zealand"],
    hubs: ["camping"],
    intro:
      "New Zealand's wildlife is mostly birds, and many of them live nowhere else. A campervan trip brings you closer to them than most holidays do: a kea inspecting your roof at a mountain car park, a weka walking off with a teaspoon, a penguin coming ashore at dusk. These encounters are part of the trip, and a few simple habits keep them good for you and for the animals, several of which are threatened.",
    sections: [
      s("Kea: the mountain parrot", [
        "The kea is a large olive-green parrot with orange under its wings, found only in the mountains of the South Island. It is famously curious and clever, and it lives where campers stop: Arthur's Pass village and the pass itself, the Homer Tunnel on the road to Milford Sound, Aoraki Mount Cook and the high car parks on the West Coast glaciers. You will often hear the loud 'keee-aa' call before you see the bird.",
        "Kea are nationally endangered, and the worst thing you can do is feed them. Human food makes them sick, and birds that learn to beg hang around roads and car parks, where they are hit by vehicles. Enjoy watching, take photos from a distance, and keep your food packed away.",
      ], ["South Island mountains only", "Arthur's Pass, Homer Tunnel, Aoraki", "Never feed them"]),
      s("Keeping your van kea-proof", [
        "Kea love rubber and soft plastic, and a parked campervan is a playground. They pull at window seals, wiper blades, roof vents, aerials and anything strapped to the roof, and they will open an unzipped bag in seconds. At the mountain car parks, close the windows and the roof vents, bring boots, food and bags inside, and do not leave the van for long in the places where they gather.",
        "If one lands on your van, do not try to grab it or chase it. Move the van or wait, and it will usually lose interest. A tent at a mountain campsite needs the same care: food and shoes inside, and nothing left out overnight.",
      ], ["Close windows and roof vents", "Nothing on the roof or outside", "Do not handle the birds"]),
      s("Weka, kiwi and the night", [
        "Weka are brown, flightless and bold, and they are common at campsites in the Abel Tasman, Golden Bay, the West Coast and the Marlborough Sounds. They look like kiwi to many visitors but walk about in daylight and will take shiny things and food straight from a table. Keep food in the van and zip the tent.",
        "Wild kiwi are hard to see, since they are nocturnal and shy. Rakiura Stewart Island is the best place to have a real chance, often on a guided night walk, and Northland's kauri forests also have night tours. Use a red torch, stay quiet and keep to the track. Where you see kiwi crossing signs, drive slowly after dark, and keep dogs on a lead or in the van, as a single dog can kill a kiwi.",
      ], ["Weka steal food at campsites", "Rakiura for wild kiwi", "Dogs and kiwi do not mix"]),
      s("Penguins, sea lions and seals", [
        "Little penguins come ashore at dusk at several places, and Oamaru has a viewing area beside the harbour. The yellow-eyed penguin, or hoiho, is one of the rarest penguins in the world, and the Otago Peninsula and the Catlins are the places to see it, from hides and signed viewing points rather than the beach. Arrive early, stay behind the barriers and keep your torch off.",
        "New Zealand sea lions rest on beaches in the Catlins and around Dunedin, and fur seals are common on rocky coasts from Kaikōura to Cape Foulwind. Both can move quickly. Stay at least 20 metres away, do not block their path to the sea and keep dogs well clear. The Otago Peninsula also has the only mainland albatross breeding colony, at Taiaroa Head.",
      ], ["Little penguins at dusk", "Hoiho from hides only", "20 metres from seals and sea lions"]),
      s("Island sanctuaries and city sanctuaries", [
        "Predator-free islands are the easiest places to see rare birds close up. Tiritiri Matangi, a ferry ride from Auckland, has takahē, kōkako and saddleback on open tracks. Ulva Island, a short water taxi from Stewart Island, has birds that are rare on the mainland. Before you board, check your bags, shoes and gear for seeds, soil and stowaway pests, as the islands depend on it.",
        "In Wellington, Zealandia is a fenced valley with kākā, takahē and tuatara a short drive from the city, and Orokonui near Dunedin is similar. They work well on a wet day or a city stop, and many campers say they saw more native birds there than anywhere else on their trip.",
      ], ["Tiritiri Matangi and Ulva Island", "Check gear for pests before boarding", "Zealandia and Orokonui"]),
      s("Good habits around wildlife", [
        "The basics are simple: do not feed any wild animal, keep your distance, keep dogs out of national parks and on a lead elsewhere, and slow down on roads at dawn and dusk. Take all your food scraps and rubbish with you, since they attract rats and stoats that eat eggs and chicks.",
        "If you find an injured bird or a seal in trouble, note where it is and call the DOC hotline rather than handling it. The wildlife and livestock road safety guide covers animals on the road, from sheep to pūkeko.",
      ], ["Never feed wildlife", "Slow down at dawn and dusk", "Call DOC about injured animals"]),
      s("Planning your trip in KiwiCamping", [
        "KiwiCamping maps DOC campsites, huts and holiday parks near the places these animals live, from Arthur's Pass to the Otago Peninsula. Add the stops to a dated trip and the forecast shows for each one, which helps you pick a clear evening for a penguin or kiwi walk.",
        "Tours and sanctuary visits are booked with the operators. Free to download, with in-app purchases.",
      ], ["Save the camps near wildlife spots", "Dated trip with forecasts", "Pick a clear evening for night walks"], true),
    ],
    faq: [
      ["Where can you see kea in New Zealand?", "In the South Island mountains, especially Arthur's Pass, the Homer Tunnel on the Milford Road and Aoraki Mount Cook. Watch from a distance and never feed them."],
      ["Do kea damage campervans?", "They can. Kea pull at rubber seals, wipers, vents and anything on the roof. Close the van up, bring things inside and do not leave it long where they gather."],
    ],
    sources: [
      { label: "DOC: kea", url: "https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kea/" },
      { label: "DOC: kiwi", url: "https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kiwi/" },
      { label: "DOC: yellow-eyed penguin", url: "https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/penguins/yellow-eyed-penguin-hoiho/" },
      { label: "DOC: marine mammal viewing", url: "https://www.doc.govt.nz/nature/native-animals/marine-mammals/" },
      { label: "Kea Conservation Trust", url: "https://www.keaconservation.co.nz/" },
    ],
  }),
  a({
    slug: "new-zealand-wine-regions-campervan",
    title: "New Zealand Wine Regions by Campervan: Marlborough, Hawke's Bay, Central Otago and More",
    description: "A campervan guide to New Zealand's wine regions, from Waiheke and Hawke's Bay to Marlborough, Waipara and Central Otago: what each is known for, how to visit cellar doors without driving, where to camp and the best time to go.",
    category: "Trip planning",
    region: "New Zealand",
    places: ["Marlborough", "Hawke's Bay", "Martinborough", "Central Otago", "Waipara", "Nelson", "Waiheke Island", "Gisborne"],
    imageAlt: "Rows of vines in the Wairau Valley in Marlborough with hills behind",
    related: ["hawkes-bay-wairarapa-wine-trail-campervan", "christchurch-to-marlborough-drive-guide", "top-of-the-south-itinerary-nelson-golden-bay-marlborough", "great-taste-trail-by-bike", "alcohol-fatigue-driving-new-zealand", "beer-wine-coffee-prices-new-zealand"],
    hubs: ["camping/marlborough", "camping/hawkes-bay", "camping/otago"],
    intro:
      "New Zealand's wine regions run from the subtropical north to the southernmost vineyards in the world, and most of them sit right on the classic campervan routes. A campervan suits wine country well, as long as you plan the one thing that matters: who drives. Park the van for the day, walk, cycle or take a tour between cellar doors, and sleep close by. These are the main regions, what they are known for and how to fit them into a road trip.",
    sections: [
      s("Marlborough", [
        "Marlborough, around Blenheim at the top of the South Island, is the country's largest wine region and the home of its famous Sauvignon Blanc. The vineyards fill the flat Wairau Valley, so the cellar doors are close together and the land is easy to cycle. Bike hire with a vineyard map is the most popular way to spend a day, and small tours run from town.",
        "It is a short drive from the Picton ferry, so it slots in at the start or end of a South Island trip. Blenheim and Renwick have holiday parks, and the Marlborough Sounds are close for a quieter night by the water. The freedom camping in Marlborough guide covers the council's rules.",
      ], ["The largest region, flat and easy to cycle", "Close to the Picton ferry", "Bike hire between cellar doors"]),
      s("Hawke's Bay and Wairarapa", [
        "Hawke's Bay, around Napier and Hastings, is the second largest region and the warmest of the big ones, known for Chardonnay and red blends. The Hawke's Bay Trails, a network of mostly flat cycle paths, link many of the wineries, and the art deco town of Napier is a good base. Martinborough in the Wairarapa, about an hour and a half from Wellington, is a compact village where many cellar doors are within walking or cycling distance of the square, and it is known for Pinot Noir.",
        "Both work well from a campervan, with holiday parks close to the vineyards. The Hawke's Bay and Wairarapa wine trail guide has a full route through both regions.",
      ], ["Hawke's Bay: flat cycle trails", "Martinborough: walkable village", "Pinot Noir in the Wairarapa"]),
      s("Central Otago and Waitaki", [
        "Central Otago is the most dramatic wine country in New Zealand, with vines on dry schist slopes under bare mountains, and it is known above all for Pinot Noir. The cellar doors are spread across Gibbston near Queenstown, Bannockburn and Cromwell, Bendigo, and around Wānaka and Alexandra, so a tour or a bike makes more sense than walking. The Otago Central Rail Trail and the Lake Dunstan Trail run near several of them.",
        "Waitaki, in the valley inland from Oamaru, is a small cool-climate region on the way between the coast and the Mackenzie Basin. Central Otago has lakeside and riverside camps and plenty of holiday parks, and it is very hot in summer and cold at night in autumn, so plan for both.",
      ], ["Pinot Noir on schist slopes", "Gibbston, Bannockburn, Bendigo", "Hot days, cold nights"]),
      s("North Canterbury, Nelson and Gisborne", [
        "Waipara, about an hour north of Christchurch on the way to Kaikōura and Hanmer Springs, is a small valley known for Riesling and Pinot Noir, with cellar doors close to State Highway 7. Nelson has two areas, the Waimea Plains near Richmond and the Moutere Hills, and the Great Taste Trail by bike passes through wine and craft beer country on its way to the coast.",
        "Gisborne, on the East Coast, calls itself the Chardonnay capital and is the first city in the world to see the sun each day. It is far from the main routes, which keeps it quiet, and it combines well with the beaches and the drive around the East Cape.",
      ], ["Waipara: Riesling near Christchurch", "Nelson: plains and hills by bike", "Gisborne: Chardonnay and the East Cape"]),
      s("Auckland: Waiheke, Matakana and the west", [
        "Waiheke Island, a ferry ride from downtown Auckland, has vineyards with sea views and is a popular day out, best done on foot, by bus or on a tour rather than taking the van across. Matakana, an hour north of Auckland, has a cluster of wineries, a Saturday market and good beaches, and the west of Auckland around Kumeū has some of the country's oldest wine families.",
        "These are useful at the start or end of a trip, when you are near Auckland anyway. Book Waiheke ferry tickets ahead on summer weekends.",
      ], ["Waiheke: go without the van", "Matakana: wineries and beaches", "Kumeū for older wine families"]),
      s("Driving, tasting and when to go", [
        "New Zealand's drink driving limit is low, and it is zero for drivers under 20. A tasting adds up quickly across several cellar doors, so the simplest plan is to park the van at a holiday park for the day and walk, cycle or join a tour, or have one person stay off the wine. Many cellar doors charge a small tasting fee that is waived if you buy, and some close one or two days a week, so check before you go.",
        "Summer has the long evenings, the wine and food festivals and the busiest cellar doors. Harvest, in March and April, is a lovely time with golden vines and quieter roads. Winter is quiet and some cellar doors keep shorter hours. Stay on the tracks and roads, as vineyards are working farms and many ask visitors not to walk among the vines.",
      ], ["Park the van, walk or cycle", "Zero alcohol limit under 20", "Harvest in March and April"]),
      s("Planning your trip in KiwiCamping", [
        "For a wine trip, KiwiCamping shows the holiday parks and campsites closest to the cellar doors, so you can park for the day and walk or cycle. Save them to a dated trip, and check the forecast at each stop before you plan a day on the bike.",
        "Tours, bikes and tastings are booked with the operators. Free to download, with in-app purchases.",
      ], ["Camps close to the cellar doors", "Save them to a dated trip", "Forecast before a cycling day"], true),
    ],
    faq: [
      ["What is the best wine region to visit by campervan in New Zealand?", "Marlborough is the easiest, with flat land, close cellar doors and the Picton ferry nearby. Martinborough is compact and walkable, and Central Otago is the most scenic."],
      ["Can I drive between wineries in New Zealand?", "The limit is low and zero for drivers under 20. Park the van for the day and walk, cycle or take a tour, or have one person stay off the wine."],
    ],
    sources: [
      { label: "New Zealand Winegrowers: wine regions", url: "https://www.nzwine.com/en/regions/" },
      { label: "NZ Transport Agency: alcohol and drugs", url: "https://www.nzta.govt.nz/safety/driving-safely/alcohol-and-drugs/" },
      { label: "Tourism New Zealand: wine regions", url: "https://www.newzealand.com/" },
    ],
  }),
];
