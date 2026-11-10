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
  a({
    slug: "two-week-new-zealand-trip-cost",
    title: "How Much Money Do You Need for Two Weeks in New Zealand?",
    description: "What a two-week trip in New Zealand costs for campers: a lean, comfortable and treat-yourself fortnight per person, plus the campervan, fuel, ferry and activities, and how to build your own number.",
    category: "Costs & budget",
    region: "New Zealand",
    places: ["Auckland", "Christchurch", "Queenstown", "Rotorua", "Cook Strait", "Fiordland"],
    imageAlt: "Lake Hāwea in Otago with mountains around the water",
    related: ["new-zealand-travel-cost-2026", "campervan-budget-new-zealand", "campervan-hire-cost-new-zealand-2026", "two-week-camper-itinerary-new-zealand", "new-zealand-road-trip-fuel-cost-2026", "cook-strait-ferry-campervan-guide"],
    hubs: ["camping"],
    intro:
      "Two weeks is the most common length for a New Zealand road trip, and the question everyone asks before booking is how much money to bring. Using the daily ranges in our travel cost guide, a fortnight costs roughly NZ$1,050 to $1,700 per person for a lean camper, $2,100 to $3,600 for a comfortable trip and $3,900 to $6,300 with private rooms and paid activities, before the vehicle and flights. The vehicle, the season and two or three big activities move the total more than anything else, so build your own number from those first.",
    sections: [
      s("Three ways to spend a fortnight", [
        "A lean fortnight means cooking nearly every meal, staying at DOC campsites and the occasional holiday park, and choosing free walks over paid tours. A comfortable fortnight adds powered sites most nights, a few meals out, coffee most days and a couple of paid activities. The top tier swaps some van nights for motels or lodges and books an activity most days.",
        "These figures are per person and exclude the vehicle and flights. Use them as a starting point, then adjust for your own habits: people who eat out every evening or book a scenic flight in every region spend well above the comfortable range.",
      ], ["Lean: cook, DOC sites, free walks", "Comfortable: powered sites, a few meals out", "Figures exclude vehicle and flights"]),
      s("The vehicle is the biggest single line", [
        "A campervan for two weeks can cost very little or a great deal, depending on the season, the size of the van and how early you book. A small van in the off-season can be cheaper than a fortnight of hostel beds for two, while a large motorhome in January can cost more than everything else combined. Add the insurance option, the bond held on your card and any one-way fee before you compare.",
        "Split the vehicle cost across everyone sharing it, and remember that it covers both transport and a bed. The campervan hire cost guide breaks down the extras, and the campervan budget guide shows how to price the whole package.",
      ], ["Season and van size decide the price", "Add insurance, bond and one-way fees", "Split it across the group"]),
      s("Fuel, ferry and road costs", [
        "Fuel depends on distance more than anything. A relaxed two-week route covers perhaps 2,000 to 3,000 kilometres, and a rushed one that tries to see both islands covers far more. Diesel vans pay road user charges on top of the pump price, and some rental companies collect them at the end of the hire, so ask before you leave.",
        "If you cross between the islands, the Cook Strait ferry with a campervan is a fixed cost that is easy to forget, and it rises in summer. The fuel cost guide and the Cook Strait ferry guide have more on both.",
      ], ["Distance drives fuel", "Road user charges on diesel", "Price the ferry separately"]),
      s("Campsites, food and the small things", [
        "Campsites are usually a smaller line than people expect. Mixing free and low-cost DOC sites with a holiday park every few nights keeps the total low while still giving you showers and laundry. Food is the line you control most: a supermarket shop every few days and one meal out a day costs far less than eating out twice.",
        "Then there are the small things that add up over a fortnight: showers at pay stations, laundry, dump station fees, a local SIM or roaming plan, coffee and car parks in the cities. Leave room for them rather than discovering them in week two.",
      ], ["Mix DOC sites and holiday parks", "Groceries every few days", "Budget for showers, laundry, SIM"]),
      s("Activities and the season", [
        "A single scenic flight, jet boat, glacier walk or Milford Sound cruise can cost as much as several ordinary days. Pick the two or three you care about most before you go, book them, and treat everything else as a bonus. Many of the best things to do in New Zealand, from the walks to the hot pools by the river, are free or cheap.",
        "December to February is the most expensive time, with higher vehicle rates and busier campsites. March, April and November are cheaper and still warm enough for most people, and winter is cheapest of all outside the ski towns.",
      ], ["Choose two or three big activities", "Many highlights are free", "Shoulder season is cheaper"]),
      s("Building your own number", [
        "Start with the fixed costs: flights, the vehicle and its extras, the ferry and the activities you have booked. Add fuel for your route, then multiply your daily range for food, campsites and small things by 14. Finally, add a reserve of ten to fifteen percent for a changed plan, a flat tyre or an extra night in a holiday park when the weather turns.",
        "Check your spending every few days on the road. Fuel, takeaway food and activities are the lines that drift, and catching them early is much easier than cutting back in the last week. The two-week campervan itinerary guide has a route to build the plan around.",
      ], ["Fixed costs first", "Daily range times 14", "Keep a 10 to 15 percent reserve"]),
      s("Planning your trip in KiwiCamping", [
        "KiwiCamping's fee and facilities filters help you find the free and low-cost campsites that keep a fortnight's accommodation down, along with holiday parks for the nights you want a shower. Add each night to a dated trip, and the forecast for each stop helps you move a paid activity to a clear day.",
        "DOC and holiday park bookings stay with them. Free to download, with in-app purchases.",
      ], ["Free and low-cost campsite filters", "All 14 nights on one dated trip", "Move activities to clear days"], true),
    ],
    faq: [
      ["How much money do I need for two weeks in New Zealand?", "Roughly NZ$1,050 to $1,700 per person for a lean camping trip, $2,100 to $3,600 for a comfortable one and more with private rooms, before the vehicle and flights."],
      ["What is the biggest cost of a two-week campervan trip?", "Usually the vehicle, especially in summer. Fuel, the Cook Strait ferry and two or three big activities come next."],
    ],
    sources: [
      { label: "Tourism New Zealand: plan your trip", url: "https://www.newzealand.com/" },
      { label: "NZ Transport Agency: road user charges", url: "https://www.nzta.govt.nz/vehicles/road-user-charges/" },
      { label: "DOC: campsite categories and fees", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/" },
    ],
  }),
  a({
    slug: "halloween-guy-fawkes-camping-new-zealand",
    title: "Halloween and Guy Fawkes Weekend Camping in New Zealand: Fireworks Rules and Where to Go",
    description: "Camping around Halloween and Guy Fawkes in New Zealand: the fireworks rules at campsites, DOC land and beaches, fire danger in late spring, holiday parks with Halloween fun for kids, and keeping pets calm.",
    category: "Trip planning",
    region: "New Zealand",
    places: ["Holiday parks", "DOC campsites", "Beaches", "Auckland", "Christchurch", "Wellington"],
    imageAlt: "A long sandy beach at Whangamatā with low hills behind",
    related: ["campfire-rules-new-zealand", "long-weekend-camping-new-zealand", "family-holiday-parks-new-zealand", "campervan-holiday-with-kids-new-zealand", "dogs-camping-new-zealand", "school-public-holidays-new-zealand-2027"],
    hubs: ["camping"],
    intro:
      "Late October and early November is the start of the camping season in New Zealand. Labour Weekend opens it, Halloween on 31 October has become a fun night at many family holiday parks, and Guy Fawkes on 5 November brings fireworks. It is a lovely time to be out, with long evenings and fewer people than summer, but fireworks and spring winds do not mix well with dry grass and campsites. This is what to know before you plan a weekend away.",
    sections: [
      s("Fireworks rules in short", [
        "Fireworks can only be sold to the public for a few days before Guy Fawkes, and only to people aged 18 and over. Rockets and other aerial fireworks are not sold to the public, so what you can buy is limited to sparklers, fountains and other ground-based fireworks. The big displays are run by councils and professional operators.",
        "Buying them is the easy part. Where you can set them off is much more limited, and most campsites are on the wrong side of that line.",
      ], ["Sold for a few days before 5 November", "Buyers must be 18 or over", "No rockets for the public"]),
      s("Where you cannot set them off", [
        "Fireworks are not allowed on DOC land, which covers every DOC campsite, national park and conservation area. Most councils ban them in parks, reserves and on many beaches, and some ban them in all public places. Holiday parks almost always ban them too, because of the risk to tents, vans and the people asleep in them.",
        "If you are freedom camping, the answer is simple: do not use fireworks at the site. Apart from the rules, a stray spark in dry grass at a roadside camp can start a fire that spreads before anyone can stop it. Check the council's rules for the place you are staying if you are unsure.",
      ], ["No fireworks on DOC land", "Most holiday parks ban them", "Not at freedom camping sites"]),
      s("Fire danger in late spring", [
        "Spring growth dries out quickly in a warm nor'wester, and by early November some parts of the country are already in a restricted fire season, especially in Canterbury, Marlborough, Central Otago and Hawke's Bay. In a restricted or prohibited season, fireworks and open fires may be banned outright, even on private land.",
        "Check Fire and Emergency's fire season page for the area you are in before Guy Fawkes, and before you light any campfire. The campfire rules guide covers the seasons and how to check them.",
      ], ["Dry, windy east-coast regions first", "Fire seasons can ban fireworks", "Check the fire season before you go"]),
      s("Watching the displays instead", [
        "The best way to see fireworks on a camping trip is a public display. Councils and community groups put them on in many cities and towns around 5 November, often on the nearest weekend, and some places have moved their main display to Matariki or New Year instead. Look at the council or local events page for the town you will be near.",
        "Park the van well before the start, as streets close and parking fills, and plan to stay put for the night rather than driving after a late display. A holiday park within walking distance is the easiest option.",
      ], ["Public displays near 5 November", "Some towns moved to Matariki", "Arrive early and stay the night"]),
      s("Halloween at the holiday park", [
        "Halloween is not a big tradition in New Zealand, but it has grown, and many family holiday parks now run something for children on 31 October or the nearest weekend: a trick-or-treat round the cabins and vans, costume parades, decorated sites and a movie night. It is a good reason to book a holiday park rather than a quiet DOC site if you are travelling with kids.",
        "Ask when you book, as plans vary from park to park and year to year. If you are taking part, bring a bag of treats to hand out and keep the decorations battery-powered rather than candles near tents and awnings.",
      ], ["Many family parks run Halloween fun", "Ask when you book", "Battery lights, not candles"]),
      s("Pets, livestock and a quiet night", [
        "Fireworks frighten dogs, horses and stock, and a dog that bolts from a campsite on Guy Fawkes night is easy to lose. Keep dogs inside the van in the evenings around 5 November, with the windows closed and something familiar to settle them. Farmers may move animals away from the roads, so take care on rural drives.",
        "If you want a quiet night, a DOC campsite or a remote holiday park away from town is the place to be. Fireworks are often let off for several nights either side of the 5th, so plan a few nights rather than one.",
      ], ["Keep dogs inside in the evenings", "Stock can be unsettled", "Remote sites for a quiet night"]),
      s("Planning your trip in KiwiCamping", [
        "KiwiCamping shows DOC campsites and holiday parks across the country, so you can choose between a family park with Halloween fun and a quiet DOC site away from the fireworks. Add the weekend to a dated trip and check the forecast for wind before you plan an evening outdoors.",
        "Holiday park bookings and event details are with the parks themselves. Free to download, with in-app purchases.",
      ], ["Family parks or quiet DOC sites", "Weekend on a dated trip", "Check the wind forecast"], true),
    ],
    faq: [
      ["Can you let off fireworks at a campsite in New Zealand?", "Almost never. Fireworks are banned on DOC land, most holiday parks ban them, and many councils ban them in parks, reserves and on beaches. Watch a public display instead."],
      ["When can you buy fireworks in New Zealand?", "Only for a few days before Guy Fawkes on 5 November, and only if you are 18 or over. Rockets are not sold to the public."],
    ],
    sources: [
      { label: "Fire and Emergency New Zealand: fireworks", url: "https://www.fireandemergency.nz/at-home/fireworks/" },
      { label: "Fire and Emergency New Zealand: check fire season", url: "https://www.checkitsalright.nz/" },
      { label: "DOC: fires and fireworks", url: "https://www.doc.govt.nz/parks-and-recreation/know-before-you-go/fire-safety/" },
    ],
  }),
  a({
    slug: "sunrise-spots-new-zealand-campervan",
    title: "Sunrise Spots in New Zealand You Can Reach From a Campsite",
    description: "The best places to watch the sunrise in New Zealand on a campervan trip, from the East Cape and Mount Maunganui to Lake Matheson, Tekapo, Moeraki and Nugget Point, with where to sleep nearby and how to time it.",
    category: "Trip planning",
    region: "New Zealand",
    places: ["East Cape", "Mount Maunganui", "Hahei", "Castlepoint", "Kaikōura", "Lake Tekapo", "Lake Matheson", "Moeraki", "Nugget Point", "Wānaka"],
    imageAlt: "The Ahuriri River in Canterbury in the soft light before sunrise",
    related: ["scenic-lookouts-new-zealand-drive-up", "scenic-campsites-new-zealand", "east-cape-road-trip", "camping-in-tekapo", "southern-scenic-route-camping", "lupins-and-southern-lights-camping-new-zealand"],
    hubs: ["camping"],
    intro:
      "Waking up in a campervan is the easiest way to catch a New Zealand sunrise. You can sleep a few minutes from the beach, the lake or the lookout, put the kettle on in the dark and be in place before the light comes up. These are some of the best spots around the country, with a campsite or holiday park close enough to make an early start feel easy.",
    sections: [
      s("The East Cape and the Bay of Plenty", [
        "Gisborne and the East Cape are among the first places in the world to see the sun each day, and the East Cape lighthouse, up a long flight of steps at the end of a gravel road, is the classic spot. Camp at one of the bays along State Highway 35 the night before and drive out in the dark. The East Cape road trip guide has the route.",
        "Mount Maunganui's summit track is a short, steep climb from the beach and gives a sunrise over the ocean with the harbour behind you. The holiday park at the foot of the mountain means you can walk from your van. Expect company: it is a popular morning ritual.",
      ], ["East Cape lighthouse at first light", "Camp along SH35 the night before", "Mount Maunganui summit from the beach"]),
      s("The Coromandel and the Wairarapa", [
        "On the Coromandel, the beaches face east, so almost any of them works. Hahei and the walk towards Cathedral Cove are beautiful at dawn and much quieter than later in the day, and Hot Water Beach and Whangamatā are easy from a nearby holiday park.",
        "Castlepoint, on the Wairarapa coast, has a lighthouse on a limestone reef and a long beach facing the sunrise. There is a campground right by the beach, so you can walk out to the lighthouse in a few minutes.",
      ], ["Hahei at dawn, before the crowds", "Most Coromandel beaches face east", "Castlepoint lighthouse from the campground"]),
      s("Kaikōura and the Mackenzie", [
        "Kaikōura's sunrise comes up over the Pacific with the snowy Seaward Kaikōura Range lit pink behind the town, so face the sea first and then turn around. The beachfront and the peninsula road are both good, and there are holiday parks along the shore.",
        "In the Mackenzie Basin, Lake Tekapo and Lake Pukaki are better known for stars, but the early light on the mountains is just as good. From the shore of Lake Pukaki, Aoraki Mount Cook often turns pink before the sun reaches the water. The camping in Tekapo guide covers the places to stay.",
      ], ["Kaikōura: sea first, then the mountains", "Pukaki: pink light on Aoraki", "Dark-sky nights, then an early start"]),
      s("The West Coast and Wānaka", [
        "Lake Matheson, near Fox Glacier, is famous for its mirror reflections of Aoraki Mount Cook and Mount Tasman, and the water is stillest in the early morning. The walk round to the viewpoint takes a while, so start in the half-light. Camp at Fox Glacier the night before.",
        "In Wānaka, the lone willow standing in the lake by the waterfront is one of the most photographed trees in the country, and it is best at sunrise, when the light comes from behind the mountains across the lake. Walk down from town, and leave the van in a legal park rather than on the lakefront.",
      ], ["Lake Matheson: still water at dawn", "Camp at Fox Glacier the night before", "The Wānaka tree at sunrise"]),
      s("Otago and the Catlins", [
        "The Moeraki Boulders, on the beach between Oamaru and Dunedin, are at their best at sunrise and low tide, when the sun comes up behind the boulders over the sea. There is a holiday park in Moeraki village, a short drive away. Check the tide times before you set the alarm.",
        "Nugget Point, in the Catlins, has a lighthouse on a narrow ridge above a scatter of rocky islets, with seals and seabirds below. The track from the car park is short, and the sunrise lights up the islets one by one. The Southern Scenic Route guide covers the camps in the Catlins.",
      ], ["Moeraki: sunrise and low tide", "Nugget Point lighthouse", "Camp in the Catlins the night before"]),
      s("Timing, light and safety", [
        "In summer the sun rises around 6am in the north and close to 6am in the south, and in winter closer to 7.30 or 8am. The best colour is often in the twenty minutes before the sun appears, so aim to arrive in the half-light. Check the forecast for cloud the evening before, since a thin high cloud often makes the best sunrise and a thick low one hides it completely.",
        "Take a head torch, warm clothes and a hot drink, as the early mornings are cold even in summer. Watch for wildlife and stock on the road in the dark, keep to the tracks on clifftops, and do not climb fences or barriers for a better view. Many of these spots are popular, so be quiet in car parks and campsites while others are still asleep.",
      ], ["Best colour before the sun appears", "Check the cloud forecast", "Head torch and warm clothes"]),
      s("Planning your trip in KiwiCamping", [
        "To catch a sunrise, KiwiCamping helps you find the DOC campsites and holiday parks closest to each lookout, beach or lake, so the alarm can be set as late as possible. Add them to a dated trip, and the forecast for each stop helps you choose the morning most likely to be clear.",
        "Campsite bookings stay with DOC and the holiday parks. Free to download, with in-app purchases.",
      ], ["Sleep close to the sunrise spot", "Save it to a dated trip", "Pick the clearest morning"], true),
    ],
    faq: [
      ["Where is the best place to watch the sunrise in New Zealand?", "The East Cape lighthouse is among the first places in the world to see the sun. Mount Maunganui, Lake Matheson, the Moeraki Boulders and Nugget Point are also favourites."],
      ["Can you camp near the Moeraki Boulders for sunrise?", "Yes. There is a holiday park in Moeraki village a short drive away. Go at low tide and check the tide times the night before."],
    ],
    sources: [
      { label: "DOC: Lake Matheson walk", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/west-coast/places/westland-tai-poutini-national-park/things-to-do/tracks/lake-matheson-walk/" },
      { label: "DOC: Nugget Point Tokatā", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/otago/places/catlins-conservation-park/things-to-do/nugget-point-tokata-walk/" },
      { label: "MetService: sunrise and sunset times", url: "https://www.metservice.com/" },
      { label: "Tourism New Zealand: plan your trip", url: "https://www.newzealand.com/" },
    ],
  }),
];
