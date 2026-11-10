import { makeArticle as a, type Article, type ArticleSection } from "@/lib/article-model";

const s = (heading: string, body: string[], tips?: string[], cta?: boolean): ArticleSection => ({ heading, body, tips, ...(cta && { cta }) });

/**
 * Island, West Coast, stay and budget guides written on 10 November 2026. Facts are general and
 * generalised from the official pages named in each guide's `sources`.
 */
export const k9Articles: Article[] = [
  a({
    slug: "great-barrier-island-camping",
    title: "Camping on Great Barrier Island (Aotea): Getting There, DOC Campsites and Dark Skies",
    description: "How to camp on Great Barrier Island: the ferry and flights from Auckland, the DOC campsites at the beaches, the Aotea Track huts, hot springs, dark skies and what to bring to an island with no mains power.",
    category: "Camping guides",
    region: "Auckland",
    places: ["Great Barrier Island", "Tryphena", "Medlands Beach", "Harataonga", "Port Fitzroy", "Aotea Track"],
    imageAlt: "Pa Beach on Great Barrier Island with clear water and bush behind the sand",
    related: ["camping-in-auckland", "auckland-3-days-campervan", "rakiura-stewart-island-camping-guide", "new-zealand-biosecurity-camping-gear", "responsible-camping-new-zealand", "new-zealand-camping-packing-list"],
    hubs: ["camping/auckland", "huts/auckland"],
    intro:
      "Great Barrier Island, or Aotea, sits about 90 kilometres north-east of Auckland and feels a world further away. There is no mains power, the roads are partly gravel, the beaches are mostly empty and the night sky is among the darkest in the country. Camping is the way most people stay, at DOC campsites behind the beaches or at the small private camps around Tryphena and Port Fitzroy. It takes planning, because you arrive by ferry or plane and bring most of what you need.",
    sections: [
      s("Getting to the island", [
        "There are two ways across. A car ferry runs from Auckland's downtown wharf to the island in roughly four to five hours, and it carries cars and campervans as well as foot passengers. Small planes fly from Auckland in about half an hour, with a baggage limit that suits a tent but not a full camping kitchen.",
        "A campervan on the ferry is a real cost, and the sailings are limited and book out in summer, so reserve as soon as your dates are set. Many visitors leave the van in Auckland and hire a vehicle on the island instead, or stay at one beach and walk. Either way, check the operators' own timetables and rules for gas bottles, since carrying them on board is restricted.",
      ], ["Ferry: roughly four to five hours", "Flights: about half an hour, with a baggage limit", "Book early for summer"]),
      s("Where to camp", [
        "DOC runs campsites at several of the island's beaches, among them Medlands, Harataonga, Awana and Akapoua. They are simple, with toilets and water of varying quality, and you carry in whatever else you need. Medlands and Awana sit behind surf beaches, Harataonga has a long white beach and a walk along the coast, and Akapoua is a sheltered bay on the quieter west side. Check DOC for the current list, the fees and whether a site needs a booking, as the popular ones fill in January.",
        "Around Tryphena and Port Fitzroy there are small private camps and holiday-park style stays, with showers and sometimes a shop nearby. They are the easier choice if you want a hot shower and a base for a few nights. Freedom camping is tightly limited on the island, so plan on a campground and check the council's current rules before you pitch anywhere else.",
      ], ["DOC campsites at Medlands, Harataonga, Awana and Akapoua", "Private camps near Tryphena and Port Fitzroy", "Plan on a campground, not roadside"]),
      s("Walks, hot springs and the Aotea Track", [
        "The island is mostly conservation land, and it is walking country. The Aotea Track is a multi-day loop through the high forest, with DOC huts at Kaiarara and Mt Heale that you book through DOC, and plenty of shorter walks that start from the road. The Kaitoke Hot Springs are an easy walk across a wetland to a natural hot stream, and the Harataonga coastal track and the Kauri Dam walks give a gentler day.",
        "Surf, snorkelling and fishing are the beach activities, and many of the bays are very clear. Take what you need for the weather, because the island catches the same wet fronts as the mainland. The guide to wet weather camping covers keeping a tent dry.",
      ], ["Aotea Track huts: book on DOC", "Kaitoke Hot Springs: an easy walk", "Beaches for surf and snorkelling"]),
      s("Dark skies and island rules", [
        "Aotea was named an International Dark Sky Sanctuary in 2017, which means it has almost no light pollution, and on a clear night the Milky Way is easy to see from any beach. The island has no street lights in most places, so bring a torch, and use a red light if you stop to look at the stars.",
        "The island is also a refuge for rare birds and plants, and pests are kept out. Clean your boots and gear before you go, check bags for rats and insects, and follow the biosecurity advice at the ferry terminal. The biosecurity guide has a short checklist, and the responsible camping guide covers the rest.",
      ], ["Almost no light pollution", "Clean boots and gear before you go", "Check bags for rats and insects"]),
      s("What to bring", [
        "There is no mains power, so the island runs on solar, wind and generators, and shops are small with limited stock and higher prices. Bring most of your food, a gas stove and spare gas if the operator allows it, a good torch, a power bank, insect repellent for the sandflies near water and warm layers for the evenings. Fuel is available at a couple of places but not everywhere, so fill up in Tryphena or Claris if you have a vehicle.",
        "Mobile coverage is patchy and drops out across much of the island, so save your booking details and directions before the ferry. Tell someone your plan for any long walk. The packing list guide has the full checklist for a camping trip.",
      ], ["Bring most of your food", "A torch and a power bank", "Patchy phone coverage"]),
      s("Planning your trip in KiwiCamping", [
        "On Great Barrier, KiwiCamping maps DOC campsites, huts and holiday parks, and its facilities filters show which island campsites have toilets and water before you book the ferry. Put the island nights and the mainland nights on one dated trip, with the forecast for each stop beside them, so the whole Auckland plan sits in one place.",
        "DOC bookings stay on DOC's own booking pages, and the ferry is booked with the operator. Free to download, with in-app purchases.",
      ], ["Save the island campsites", "Add them to a trip with dates", "Forecast at each stop"], true),
    ],
    faq: [
      ["Can you camp on Great Barrier Island?", "Yes. DOC has campsites at several beaches, including Medlands, Harataonga, Awana and Akapoua, and there are small private camps near Tryphena and Port Fitzroy. Freedom camping is tightly limited."],
      ["How do you get to Great Barrier Island?", "By car ferry from Auckland, which takes roughly four to five hours, or by a small plane in about half an hour. Book early for summer."],
    ],
    sources: [
      { label: "DOC: Aotea Great Barrier Island", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/auckland/places/aotea-great-barrier-island/" },
      { label: "DOC: Aotea Track", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/auckland/places/aotea-great-barrier-island/things-to-do/aotea-track/" },
      { label: "SeaLink: Great Barrier Island ferry", url: "https://www.sealink.co.nz/" },
      { label: "Biosecurity New Zealand: protecting our islands", url: "https://www.mpi.govt.nz/biosecurity/" },
    ],
  }),
  a({
    slug: "punakaiki-oparara-basin-camping",
    title: "Punakaiki and the Oparara Basin: Camping on the Wild West Coast",
    description: "Camping at Punakaiki and the Oparara Basin: the Pancake Rocks and blowholes, Paparoa National Park, the Oparara Arches near Karamea, where to stay and sleep, sandflies and rain, and how to fit them into a West Coast trip.",
    category: "Camping guides",
    region: "West Coast",
    places: ["Punakaiki", "Paparoa National Park", "Westport", "Karamea", "Oparara Basin", "Kohaihai"],
    imageAlt: "The layered limestone Pancake Rocks at Punakaiki on the West Coast",
    related: ["west-coast-south-island-road-trip", "freedom-camping-westport", "freedom-camping-west-coast", "scenic-campsites-new-zealand", "sandflies-new-zealand-camping", "wet-weather-camping-new-zealand"],
    hubs: ["camping/west-coast", "huts/west-coast"],
    intro:
      "Punakaiki and the Oparara Basin are two of the best stops on the West Coast, and they sit at opposite ends of the same road. Punakaiki has the Pancake Rocks, rainforest running down to the sea and a good run of places to camp. The Oparara Basin, up the coast beyond Karamea, has giant limestone arches in quiet forest and is far less visited. Both reward an unhurried night or two, and a wet forecast does not ruin either of them.",
    sections: [
      s("Punakaiki and the Pancake Rocks", [
        "Punakaiki sits on State Highway 6 about 45 kilometres north of Greymouth, in Paparoa National Park. The Pancake Rocks and Blowholes are a short, flat loop walk from the car park across the road from the village, and entry is free. The limestone is stacked in layers like pancakes, and the blowholes put on the best show at high tide with a westerly swell, so check the tide times before you stop and not after.",
        "The village has a small shop, cafes and a few places to stay, but not much else, so top up fuel and food in Greymouth or Westport. Nikau palms grow thickly along this stretch, and the coast road north to Westport is one of the prettiest drives in the country.",
      ], ["Free loop walk, best at high tide", "45 km north of Greymouth", "Fuel and food in Greymouth or Westport"]),
      s("Where to camp at Punakaiki", [
        "There are holiday parks and private camps in and around the village, some right by the beach, with powered and unpowered sites and a kitchen. They are the easy choice for a van, and the popular ones fill in summer and over the school holidays, so book ahead. DOC has campsites in the wider Paparoa area and beside the Pororari and Fox river valleys, so check DOC for what is open and what each site charges.",
        "Freedom camping is limited near the village, and roadside stopping on the highway is not safe, so decide where you are sleeping before the light goes. The West Coast freedom camping guide has the rules for the wider region, and the Westport guide covers the town to the north.",
      ], ["Holiday parks and beach camps in the village", "DOC campsites in the Paparoa area", "Book ahead in summer"]),
      s("The Oparara Basin and Karamea", [
        "The Oparara Basin is about 15 kilometres inland from Karamea, which is itself roughly 100 kilometres up the Karamea Highway from Westport, so allow the best part of two hours each way from Punakaiki. The last stretch is a narrow gravel road with tight bends, and it is not suited to large motorhomes or towing, so check DOC for current road and vehicle advice before you go.",
        "The basin holds the Oparara Arch, the Moria Gate Arch and a series of short walks through beech forest and over tannin-stained, tea-coloured water. The Crazy Paving and Box Canyon caves can be explored with a torch, and Honeycomb Hill Cave is by guided tour only. Karamea has a holiday park, a shop and cafes, and DOC has a basic campsite at the basin and another at Kohaihai at the start of the Heaphy Track.",
      ], ["About 15 km of gravel, not for large vehicles", "Oparara Arch and Moria Gate Arch", "Karamea has a holiday park and shops"]),
      s("Rain, sandflies and the tide", [
        "This is a wet and sandfly-rich part of the country. The coast gets a lot of rain, the forest stays damp, and the sandflies are fierce at dawn and dusk and near water. Bring waterproofs, a plan for drying gear and strong repellent, and treat a wet day as part of the trip, since the forest is at its best soaked. The guides to sandflies and wet weather camping cover both.",
        "Tide and swell also shape the days. The blowholes at Punakaiki are best at high tide, and a few beaches along the coast are not safe to walk at the top of it. Rivers can rise quickly after heavy rain, so check the forecast and the road status before you head north, and do not drive through flood water.",
      ], ["Waterproofs and strong repellent", "Check the tide for the blowholes", "Never drive through a flooded road"]),
      s("Fitting them into a West Coast trip", [
        "Punakaiki fits easily on the way between Westport and Greymouth, with a night in the village and time to walk the Pancake Rocks at the right tide. The Oparara Basin is a detour, and it works best as a night or two based at Karamea or in a campsite in the basin, before heading back south. The Heaphy Track starts and ends near Karamea, and the Heaphy by bike guide covers the trail for riders.",
        "If you are doing the full coast, the West Coast road trip guide and the Christchurch to Hokitika and Greymouth guide cover the rest of the route. The Paparoa Track, a walk and ride that starts near Punakaiki, has its huts booked through DOC.",
      ], ["A night at Punakaiki, one or two at Karamea", "Heaphy Track starts near Karamea", "Paparoa Track huts: book on DOC"]),
      s("Planning your trip in KiwiCamping", [
        "Around Punakaiki and Karamea, KiwiCamping maps DOC campsites, huts and holiday parks, with facilities and campervan access filters, so you can see which camps have toilets and water. Add the camps to a dated trip and read the forecast for each stop, which counts for a lot on this coast.",
        "Booking for the DOC campsites here is through DOC. Download is free, with in-app purchases.",
      ], ["Save the camps you like", "Add them to a trip with dates", "Forecast at each stop"], true),
    ],
    faq: [
      ["Where can you camp at Punakaiki?", "At the holiday parks and private camps in and around the village, and at DOC campsites in the wider Paparoa area. Book ahead in summer, as the popular ones fill."],
      ["Can a campervan drive to the Oparara Arches?", "The last 15 km or so is narrow gravel with tight bends, and it is not suited to large motorhomes. Check DOC for current road and vehicle advice before you go."],
    ],
    sources: [
      { label: "DOC: Paparoa National Park", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/west-coast/places/paparoa-national-park/" },
      { label: "DOC: Oparara Basin", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/west-coast/places/kahurangi-national-park/things-to-do/oparara-basin/" },
      { label: "DOC: places to stay on the West Coast", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/" },
      { label: "MetService: West Coast weather and warnings", url: "https://www.metservice.com/" },
    ],
  }),
  a({
    slug: "eco-stays-near-new-zealand-cities",
    title: "Eco, Sustainable and Treehouse Stays Near New Zealand's Cities",
    description: "Eco lodges, off-grid cabins, treehouses and farm stays within a short drive of Auckland, Wellington, Christchurch, Dunedin and Queenstown: what sustainable really means, how to spot greenwashing and how to fit a night into a campervan trip.",
    category: "Trip planning",
    region: "New Zealand",
    places: ["Auckland", "Waitākere Ranges", "Waiheke Island", "Wellington", "Banks Peninsula", "Otago Peninsula"],
    imageAlt: "Native bush in the Waitākere Ranges west of Auckland",
    related: ["glamping-new-zealand", "camping-in-auckland", "camping-in-wellington", "camping-in-christchurch", "responsible-camping-new-zealand", "self-contained-campervan-green-warrant"],
    hubs: ["camping"],
    intro:
      "You do not have to go deep into the mountains for a night among the trees. Every main centre has native bush, a harbour or a peninsula within an hour or so, and with it a small collection of eco lodges, off-grid cabins, treehouses and farm stays. They suit a treat night between campervan nights, a short break from the city or a first taste of camping, and they are usually quieter and more private than a holiday park.",
    sections: [
      s("What counts as an eco stay", [
        "There is no single definition. At one end is a treehouse or tiny house on a farm, built from reclaimed timber, with solar panels and a composting toilet. At the other is a lodge with a hot tub and a restaurant that happens to use rainwater. Most sit somewhere between, with a few shared habits: low-impact buildings, solar or hydro power, rainwater collection, composting and recycling, and hosts who care about the land around them.",
        "A treehouse is usually a cabin raised on stilts or built around a tree, reached by steps or a short walk, with a deck and a view into the canopy. Some have a private bathroom and a kitchen, and others share facilities, so read the listing before you book. Many are on private land and not part of DOC's network.",
      ], ["Solar, rainwater and composting are common", "Treehouses: raised cabins on private land", "Read what is included"]),
      s("Where to look near the cities", [
        "Near Auckland, the Waitākere Ranges and the west coast have bush cabins, Waiheke Island has vineyard and coastal stays, and the Matakana and Kawau area to the north has farm and bay stays. Near Wellington, Kāpiti, the Wairarapa and the Hutt valleys have forest cabins, and the capital's Zealandia sanctuary is a short drive from the city.",
        "Near Christchurch, Banks Peninsula and Akaroa have farm and bay stays with sea views, and Hanmer Springs and the Canterbury foothills are a short drive inland. Near Dunedin, the Otago Peninsula has wildlife and coastal stays, and near Queenstown, Glenorchy and the Wakatipu basin have lodges and cabins under the mountains.",
      ], ["Auckland: Waitākere, Waiheke, Matakana", "Wellington: Kāpiti and the Wairarapa", "Christchurch and Dunedin: the peninsulas"]),
      s("How to spot the real thing", [
        "Eco is a loose word, and some stays use it as decoration. Look for specifics: how the power is made, where the water comes from, what happens to waste, and whether the host mentions a certification. Qualmark, New Zealand's official tourism quality mark, includes a sustainability award with levels, and some operators measure and offset their carbon through a certified programme. A listing that says nothing concrete is a hint to ask.",
        "Ask what the stay actually asks of you, too. Composting toilets, limited hot water, no power points in the cabin, a steep path from the car and no mobile coverage are all normal, and they are part of the point. If a stay suits your group, a short question to the host before booking saves a disappointment.",
      ], ["Look for specifics, not just the word eco", "Qualmark has a sustainability award", "Ask what the stay asks of you"]),
      s("Cost and when to book", [
        "Prices run from roughly the cost of a holiday park cabin for a simple treehouse or cabin to several hundred dollars a night for a lodge with a view. They rise in summer, over school holidays and at weekends, and popular treehouses book months ahead, since there are only one or two at most sites. Check the operator's own page for the current price, the minimum stay and the cancellation terms.",
        "Midweek and shoulder-season nights are cheaper and quieter, and some stays close for winter. The school and public holiday dates guide shows when the peak weeks fall, and the glamping guide covers the wider range of tents, domes and cabins.",
      ], ["Weekends and school holidays are the peak", "Book treehouses months ahead", "Midweek is cheaper"]),
      s("Fitting a night into a campervan trip", [
        "An eco stay between campervan nights gives you a proper bed, a hot shower and time without driving, and the city is close for the handover or the next leg. If you are in a rental, check the access first, since many of these places are down narrow gravel roads or up steep driveways where a large van is a problem. Ask the host about parking, or park at the bottom and walk.",
        "If you want the benefits without the cost, a holiday park near the city with a cabin is cheaper, and the camping guides for Auckland, Wellington and Christchurch cover the options. The responsible camping guide covers how to leave a place the way you found it, wherever you sleep.",
      ], ["Check road access for a van", "Ask about parking", "Holiday park cabins are cheaper"]),
      s("Planning your trip in KiwiCamping", [
        "KiwiCamping maps DOC campsites, huts and holiday parks, with facilities and campervan access filters, so you can see the options around each city and plan the van nights either side of an eco stay. A dated trip shows the forecast for each stop. It does not list private treehouses and eco lodges, so book those with the operator.",
        "Free to download, with in-app purchases.",
      ], ["Save the van nights around your stay", "Add them to a trip with dates", "Private stays are booked with the operator"], true),
    ],
    faq: [
      ["What is an eco stay in New Zealand?", "A stay that tries to keep its impact low, often with solar power, rainwater, composting toilets and local materials. There is no single definition, so look for specifics and ask the host."],
      ["Are there treehouse stays near the main cities?", "Yes. Auckland, Wellington, Christchurch, Dunedin and Queenstown all have treehouses, cabins and lodges within a short drive. Most are on private land and book months ahead for summer."],
    ],
    sources: [
      { label: "Qualmark: New Zealand's official tourism quality mark", url: "https://www.qualmark.co.nz/" },
      { label: "Tiaki Promise: care for New Zealand", url: "https://www.tiakinewzealand.com/" },
      { label: "Tourism New Zealand: places to stay", url: "https://www.newzealand.com/" },
      { label: "DOC: places to stay", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/" },
    ],
  }),
  a({
    slug: "easy-campervan-meals-new-zealand",
    title: "Easy Campervan Meals in New Zealand: One-Pot Dinners, Quick Breakfasts and a Pantry That Lasts",
    description: "Easy campervan meals for New Zealand: a simple kitchen and pantry, one-pot dinners, breakfasts and lunches, where to shop and what to buy local, gas and ventilation basics and how to keep food costs down on the road.",
    category: "Trip planning",
    region: "New Zealand",
    places: ["Supermarkets", "Roadside stalls", "Farmers markets", "DOC campsites", "Holiday parks"],
    imageAlt: "A simple camp meal cooked outdoors on a small stove",
    related: ["new-zealand-grocery-prices-2026", "food-fuel-resupply-new-zealand-road-trip", "campervan-budget-new-zealand", "camping-wastewater-rubbish-new-zealand", "campfire-rules-new-zealand", "new-zealand-camping-packing-list"],
    hubs: ["camping"],
    intro:
      "Cooking in a campervan is easier than it looks, and it is the biggest single saving on a New Zealand road trip. The trick is a small kitchen, a pantry of things that keep and a handful of meals you can make with one pot and one burner, after a day of driving or walking. Add the good local ingredients you will find along the way, such as lamb, kūmara, fish and fresh fruit, and the van becomes the best restaurant on the trip.",
    sections: [
      s("A small kitchen that does the job", [
        "Most rental vans come with a basic kit, but it is worth checking before you leave the depot. You need one good pot with a lid, a frying pan, a sharp knife, a chopping board, a tin opener, a spatula, a couple of plates and bowls and a kettle or a pot for the morning. A stove and a gas cartridge or bottle is the heart of it, so check how much gas you have and where to refill.",
        "Add a few extras that earn their place: a washing-up bowl, a tea towel, a couple of reusable containers for leftovers, a small cool bag and a head torch for cooking after dark. A roll of foil, zip bags and a few sachets of oil and salt save a shop on day one.",
      ], ["One pot, one pan, one sharp knife", "Check the gas and where to refill", "A head torch for dinner after dark"]),
      s("A pantry that lasts", [
        "Stock the things that keep for weeks and build meals around them: rice, pasta, noodles, tinned tomatoes, tinned beans and chickpeas, coconut cream, stock cubes, oil, salt, pepper, a couple of spices, wraps, oats, peanut butter, tea and coffee. Buy the fresh things in smaller amounts, every few days, and eat the most perishable first.",
        "A jar of pesto, a bag of frozen peas and a block of cheese turn pasta into dinner, and an onion, garlic and a tin of tomatoes are the start of almost anything. Pack a couple of sauces, such as soy, sweet chilli and curry paste, and a few jars last the trip.",
      ], ["Rice, pasta, noodles and tins", "Fresh food in small amounts", "A few sauces and curry paste"]),
      s("Dinners in one pot", [
        "Pasta with sausage or bacon, tinned tomatoes and whatever vegetables you have is the standard, and it makes enough for lunch. A one-pan fried rice with eggs and frozen peas takes ten minutes, a curry of chicken thighs or chickpeas with coconut cream and kūmara is a New Zealand favourite, and a chilli of mince, beans and tinned tomatoes feeds a crowd and tastes better the next day.",
        "On a gas barbecue, which many holiday parks and some DOC campsites and parks provide for free, sausages, steak, lamb chops and foil-wrapped fish or vegetables are quick, and there is little to wash up. If the fire rules allow a campfire, the campfire guide has the details, and a total fire ban means no open flames, so check before you light anything.",
      ], ["Pasta, fried rice, curry and chilli", "Use the free barbecue at parks", "Check the fire rules first"]),
      s("Breakfast, lunch and the road", [
        "Porridge or muesli with fruit, eggs on toast and a pan of bacon and tomato are the easy mornings, and a flask of coffee for the road makes them better. For lunch, wraps with cheese, ham, salad and hummus, or a sandwich and fruit, are the usual, and they keep well in a cool bag. A hot pie from a bakery or a fish and chip stop is a good treat when the cooking is a chore.",
        "Snacks matter more than people expect on long drives: nuts, fruit, crackers, muesli bars and a bag of lollies for the hills. Fill a water bottle at every stop, and keep a few meals that need no cooking for the wet or tired night.",
      ], ["Porridge, eggs and wraps", "A bakery pie as a treat", "Keep a no-cook meal in reserve"]),
      s("Where to shop and what to buy local", [
        "The main supermarket chains are in every large town, and smaller towns have a Four Square or a local store at higher prices, so buy staples before you head for the West Coast, Fiordland or East Cape. The grocery prices and the food and fuel resupply guides cover the costs and the long gaps between shops.",
        "Look for the local things: roadside stalls with fruit and vegetables and an honesty box, so carry some coins, farmers markets on weekends in many towns, and fish and seafood from a wharf or fish shop. If you plan to catch your own, check the fishing rules for size and bag limits, as they vary by species and area.",
      ], ["Restock before long remote legs", "Carry coins for honesty boxes", "Check the fishing rules"]),
      s("Gas, ventilation and washing up", [
        "Cook with the doors or windows open, and never run a gas stove or heater in a sealed van, because carbon monoxide builds up quietly. Keep the stove clear of curtains, switch the gas off at the bottle after cooking and check the connections if you smell gas. A cartridge stove is simple, and a bottle needs a refill at a depot or a petrol station.",
        "Do the washing up with a little water and biodegradable soap, and take dirty water to a dump station or a drain, never a stream or a roadside. The wastewater and rubbish guide has the rules, and the dump station guide helps you find a place to empty. Pack out every scrap of rubbish.",
      ], ["Never cook in a sealed van", "Gas off at the bottle", "Dirty water goes to a dump station"]),
      s("Planning your trip in KiwiCamping", [
        "For a cooking trip, KiwiCamping's facilities and campervan access filters include the public dump stations and water points you need. Add each night to a dated trip, and the forecast for the stop helps you choose between a barbecue night and a wet-weather pasta.",
        "Free to download, with in-app purchases.",
      ], ["Find dump stations and water", "Add stops to a trip with dates", "Forecast at each stop"], true),
    ],
    faq: [
      ["What are easy meals to cook in a campervan?", "One-pot meals such as pasta with sausage and tinned tomatoes, fried rice with eggs and peas, a chicken or chickpea curry with coconut cream, and a mince and bean chilli."],
      ["Is it cheaper to cook in a campervan in New Zealand?", "Yes. Cooking your own food is the biggest single saving on a road trip. Buy staples at a supermarket before remote stretches, where small shops cost more."],
    ],
    sources: [
      { label: "Stats NZ: food price index", url: "https://www.stats.govt.nz/indicators/food-price-index/" },
      { label: "DOC: campsites", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/" },
      { label: "Fire and Emergency New Zealand: Check it's alright", url: "https://checkitsalright.nz/" },
      { label: "Fisheries New Zealand: recreational fishing rules", url: "https://www.mpi.govt.nz/fishing-aquaculture/recreational-fishing/" },
    ],
  }),
  a({
    slug: "new-zealand-experiences-under-100-dollars",
    title: "New Zealand Experiences Under NZ$100 for Campers: Free Walks, Hot Pools and Cheap Days Out",
    description: "Free and cheap things to do in New Zealand on a camping budget: free walks and beaches, natural hot spots, hot pools, caves, cycling and day trips under NZ$100, and what to skip or save for when money allows.",
    category: "Costs & budget",
    region: "New Zealand",
    places: ["Hot Water Beach", "Rotorua", "Auckland", "Hokitika", "Punakaiki", "Hanmer Springs"],
    imageAlt: "People digging their own hot pools in the sand at Hot Water Beach on the Coromandel",
    related: ["campervan-budget-new-zealand", "camping-fees-new-zealand-2026", "new-zealand-travel-cost-2026", "new-zealand-grocery-prices-2026", "scenic-campsites-new-zealand", "easy-campervan-meals-new-zealand"],
    hubs: ["camping"],
    intro:
      "The best things in New Zealand cost very little. Most of the beaches, forest walks, lookouts, waterfalls and wildlife stops are free, and many of the famous ones are too. Add a hot pool, a cave or a cycle hire and a day out still comes in under NZ$100, which makes the country work well for a camper. The costs that bite are the big-ticket activities, and it helps to know which ones are worth the money and which can wait.",
    sections: [
      s("Free, and some of the best", [
        "DOC maintains thousands of kilometres of walking tracks, and most day walks are free: forest loops, lakeside walks, coastal tracks and lookouts. Famous free stops include the Pancake Rocks at Punakaiki, the Moeraki Boulders, Cape Reinga, Hokitika Gorge, the Mount Maunganui and Maungawhau Mount Eden summits and a long list of beaches. Seal colonies at places like Kaikōura are free to watch from a safe distance, as long as you keep well back.",
        "Hot Water Beach on the Coromandel is a good example: dig your own hot pool in the sand around low tide, and it costs nothing but a spade you can hire or borrow. In Rotorua, Kuirau Park has free steaming pools and mud, and the Redwoods forest has free walking and mountain biking tracks. Check the DOC page for each track before you go, since closures happen after storms.",
      ], ["Most DOC day walks are free", "Dig your own hot pool at Hot Water Beach", "Rotorua's Kuirau Park is free"]),
      s("Natural hot water and glowworms", [
        "A few hot streams and pools are free, such as Kerosene Creek near Rotorua, and others cost only a small entry. Natural hot water carries a health risk: the water can be very hot or contain organisms, so follow DOC's warnings and keep your head out of the water at thermal pools. In many towns, you can find a glowworm spot after dark for nothing, with the Hokitika Glowworm Dell a well-known example.",
        "Bring a torch for the walk in and switch it off when you reach the glowworms, as they react to light. A trip to a free glowworm dell is often as good as a cave tour at a fraction of the price.",
      ], ["Kerosene Creek is free, but follow the warnings", "Hokitika Glowworm Dell is free at night", "Switch the torch off for glowworms"]),
      s("Under about NZ$50", [
        "The commercial hot pools at places like Hanmer Springs, Tekapo and Rotorua cost roughly NZ$30 to NZ$50 for an adult, and many have a cheaper family or twilight rate. A ride on the Skyline gondola and luge in Rotorua or Queenstown, a ferry to Waiheke or Stewart Island for the day, a wildlife sanctuary such as Zealandia in Wellington and many of the small museums are in the same bracket.",
        "Hire a bike for a day on one of the Great Rides, such as the Great Taste Trail near Nelson, or hire a kayak for a few hours in the Abel Tasman or the Marlborough Sounds. Prices change each season, so look at the operator's page for the current rate and any off-peak discount.",
      ], ["Commercial hot pools: roughly NZ$30 to NZ$50", "Gondolas, luges and sanctuaries", "Bike and kayak hire by the day"]),
      s("Up to NZ$100", [
        "A guided cave tour at Waitomo or the West Coast, a half-day kayak tour, a wine tasting with a lunch and a day on a ferry or boat cruise with a guide usually land under NZ$100 a person, though some run over in peak season. This is where the best value is, because one good guided experience on a trip adds more than a string of average ones.",
        "Some of the headline experiences cost more: Milford Sound cruises, Hobbiton, skydives, bungy jumps, heli-hikes and many Queenstown activities often exceed NZ$100 each. If one of these is a must for you, book it, and balance the budget with free days around it.",
      ], ["Guided cave and kayak tours", "One good guided trip beats many average ones", "Big-ticket activities often cost more"]),
      s("Saving money around the activities", [
        "The camping itself keeps costs down, with free and low-cost DOC sites, and your own meals do more for the budget than skipping an activity. The easy campervan meals guide has simple recipes, and the camping fees guide shows what sites cost. Fuel is the other big cost, so slow down and plan a loop rather than backtracking.",
        "Look for free days and discounts: some museums and galleries have free entry, many operators have off-peak and twilight rates, and a combined pass or a booking made online can be cheaper than walk-up. Ask at holiday parks and visitor centres, which often have local discounts and good advice.",
      ], ["Cooking your own meals saves the most", "Off-peak and online prices are lower", "Ask at the visitor centre"]),
      s("Planning your trip in KiwiCamping", [
        "KiwiCamping's filters for fees, facilities and campervan access help you find free and low-cost places to stay near the things you want to do. Add each stop to a trip with dates and the forecast appears for it, which matters for the outdoor days on this list.",
        "Free to download, with in-app purchases.",
      ], ["Filter for free and low-cost camps", "Add stops to a trip with dates", "Forecast at each stop"], true),
    ],
    faq: [
      ["What are the best free things to do in New Zealand?", "Most DOC day walks, beaches and lookouts, the Pancake Rocks at Punakaiki, Hot Water Beach at low tide, the Moeraki Boulders and Kuirau Park in Rotorua are all free."],
      ["How much does a day out cost in New Zealand?", "Many days cost nothing, a hot pool or gondola is roughly NZ$30 to NZ$50, and guided tours often come in under NZ$100. Big-ticket activities such as skydives and Milford cruises usually cost more."],
    ],
    sources: [
      { label: "DOC: places to go", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/" },
      { label: "DOC: walking and tramping", url: "https://www.doc.govt.nz/parks-and-recreation/things-to-do/walking-and-tramping/" },
      { label: "Tourism New Zealand: things to do", url: "https://www.newzealand.com/" },
      { label: "NZ Cycle Trail: Great Rides", url: "https://www.nzcycletrail.com/" },
    ],
  }),
];
