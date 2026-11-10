import { makeArticle as a, type Article, type ArticleSection, type ArticleTable } from "@/lib/article-model";

const s = (heading: string, body: string[], tips?: string[], table?: ArticleTable, cta?: boolean): ArticleSection => ({ heading, body, tips, ...(table && { table }), ...(cta && { cta }) });

/**
 * Campervan starting points, long weekends, walks with a camping base, lakes and lookouts: the
 * themed guides that sit across the town and region guides. Facts are kept general on purpose, with
 * each official page named in `sources`, and the towns and rules are linked rather than repeated.
 */
export const lakesWalksViewsArticles: Article[] = [
  a({
    slug: "christchurch-campervan-starting-point",
    title: "Starting a Campervan Trip in Christchurch: Pick-Up Day, First Night and Which Way to Go",
    description: "How to start a New Zealand campervan trip from Christchurch: pick-up day, what to buy before you leave, a sensible first night, and which road to take north, west or south.",
    category: "Trip planning",
    region: "Canterbury",
    places: ["Christchurch", "Banks Peninsula", "Akaroa", "Arthur's Pass", "Kaikōura", "Lake Tekapo"],
    imageAlt: "A punt on the Avon River through the Christchurch Botanic Gardens",
    related: ["camping-in-christchurch", "freedom-camping-christchurch-2026", "christchurch-tekapo-aoraki-road-trip", "campervan-hire-cost-new-zealand-2026", "10-day-campervan-itinerary-new-zealand"],
    hubs: ["camping"],
    intro:
      "Christchurch is where most South Island campervan trips begin: a flat city, an airport close to the rental depots, and roads out in every direction. The first day matters more than it looks, because you arrive tired, collect a vehicle you have never driven, and need a bed that night. This guide walks through pick-up day, the shopping to do before you leave, a first night that keeps things simple, and how to choose between the roads north, west and south.",
    sections: [
      s("Why Christchurch works as a starting point", [
        "Christchurch has the South Island's main airport, most of the rental depots are in the north and west of the city near it, and the surrounding roads are wide and flat. That makes it a gentle place to get used to a larger vehicle and to driving on the left, before the narrower roads of the high country and the West Coast. The city also sits at the middle of the island's main loops: north to Kaikōura and Picton, west over Arthur's Pass, and south to Tekapo, Aoraki and Queenstown.",
        "Hire companies often charge less for a round trip that returns the vehicle to the same depot, and more for a one-way hire to Queenstown or Picton, so decide early whether the trip is a loop or a line. The campervan hire cost guide covers rates and fees, and the 10-day South Island itinerary shows a loop that starts and ends here.",
      ], ["Flat roads suit a first day in a new vehicle", "Most depots are near the airport", "A loop is usually cheaper than a one-way hire"]),
      s("Pick-up day", [
        "Depots set their own opening hours and handover times, so check them before booking a flight that lands late, and allow an hour or two for paperwork and the walk-through. Bring your driver licence, and if it is not in English, an accredited translation or an international driving permit as well, as the guide to overseas licences explains. The guide to driving a campervan on a car licence covers who needs more than a standard licence.",
        "At the walk-through, ask how the gas, water and toilet work, where the dump hose is kept, and whether the vehicle has a current self-contained certificate, which is the green warrant sticker that freedom camping depends on. Photograph any marks on the body before you drive away, check the spare wheel and the height of the vehicle, and ask what to do if you break down.",
      ], ["Allow an hour or two for the handover", "Ask about the green warrant sticker", "Photograph the vehicle before you leave"]),
      s("Shopping before you leave the city", [
        "Buy food, water containers, a gas lighter, and anything the hire company does not supply in Christchurch, where supermarkets and camping stores are large and prices are lower than in the small towns ahead. Stock the van for the first two or three days, since Tekapo, Aoraki Mount Cook and the West Coast have few shops and pay for the distance. The grocery prices guide gives an idea of what a basket costs.",
        "Fill the fresh water tank, check the gas bottle, and find a dump station or a fuel stop you can reuse on the way back. The guide to wastewater and rubbish explains where to empty a toilet cassette and grey water, which is also the first job on the last day of the trip.",
      ], ["Stock up for two or three days", "Small towns have fewer shops", "Find the dump station before you need it"]),
      s("The first night", [
        "After a long flight the best first night is a short drive to a holiday park, with a hot shower and a flat site. Christchurch's holiday parks are mostly north and west of the centre, the council runs campgrounds on the coast and on Banks Peninsula, and the guide to camping in Christchurch lists them. Freedom camping in the city is limited to a couple of signposted areas and certified self-contained vehicles, as the Christchurch freedom camping guide explains, so book a park rather than hoping for a car park.",
        "If you collect the vehicle in the morning and feel fresh, a two hour drive reaches Akaroa on Banks Peninsula, Hanmer Springs or Arthur's Pass, and the Banks Peninsula camping weekend guide covers the first of those. If you land late, stay near the airport and start in the morning, because driving a new vehicle in the dark on unfamiliar roads is the part of the trip most worth skipping.",
      ], ["Book a holiday park for night one", "A two hour drive is plenty on day one", "Skip night driving in an unfamiliar van"]),
      s("Which way to go", [
        "The table lists the main ways out of Christchurch with an approximate driving time to the first stop and the guide that covers the route. Times are for a car on a clear day, so add time for a heavier vehicle, photo stops and roadworks, and check NZTA's road information for snow, flooding and closures before each leg.",
        "A common pattern is to go south and west first, over Lindis Pass to Queenstown and Fiordland, then north up the West Coast and back over Arthur's Pass, but any direction works. The shoulder seasons suit the high country best, and in winter the mountain roads can need chains, as the winter driving guide describes.",
      ], ["Add time for a heavier vehicle", "Check NZTA before each leg", "Choose the direction by the season"], {
        caption: "Roads out of Christchurch, with approximate driving times to the first stop.",
        head: ["Direction", "First stop and time", "Guide"],
        rows: [
          ["North", "Kaikōura, about 2.5 hours", "Christchurch to Kaikōura drive guide"],
          ["North, then ferry", "Picton or Nelson, a full day", "Christchurch to Marlborough drive guide"],
          ["West", "Arthur's Pass, about 2 hours", "Arthur's Pass camping route"],
          ["South and west", "Lake Tekapo, about 3 hours", "Christchurch to Lake Tekapo and Aoraki road trip"],
          ["South and west", "Queenstown, a long day or two", "Christchurch to Queenstown drive guide"],
          ["South coast", "Dunedin, about 4.5 hours", "Christchurch to Dunedin drive guide"],
        ],
      }),
      s("The end of the trip", [
        "On the last day, empty the toilet and grey water, refill the fuel tank to the level your contract asks for, and clean the inside, because depots charge for a dirty vehicle and a short tank. Book a holiday park near the airport for the last night if your flight leaves early, since many depots want the vehicle back well before a flight.",
        "If you collect a one-way hire here and drop it in Queenstown or Picton, or the other way around, keep the same checks and photos at both ends. Relocation deals can also start in Christchurch, and the campervan relocations guide explains how they work.",
      ], ["Empty the toilet and grey water", "Refuel to the contract level", "Book the last night near the airport"]),
      s("Using KiwiCamping from Christchurch", [
        "KiwiCamping shows the holiday parks near the airport, the DOC campsites in Canterbury and the dump stations, with filters for campervan access. Save the first and last night, add the stops on your chosen road to a trip with dates, and use the forecast for each stop to decide whether to head for the mountains or the coast first.",
        "Once you drive out of Christchurch, your saved places, their details and the guides are still on the phone, but the map tiles, routing, weather and photos need a signal. Download is free, with in-app purchases.",
      ], ["Save the first and last night", "Check the forecast before choosing a road", "Saved places stay on the phone"], undefined, true),
    ],
    faq: [
      ["What should I do on my first day with a campervan in Christchurch?", "Allow an hour or two for the handover, ask how the gas, water and toilet work, buy food and water in the city, and book a holiday park for the first night rather than driving far."],
      ["Which direction should I take from Christchurch in a campervan?", "North reaches Kaikōura and Picton, west goes over Arthur's Pass to the West Coast, and south and west reaches Lake Tekapo, Aoraki and Queenstown. Choose by season and by whether the trip is a loop or a one-way hire."],
    ],
    sources: [
      { label: "Christchurch City Council: Camping and campervans", url: "https://ccc.govt.nz/rec-and-sport/camping" },
      { label: "NZTA: Overseas licences and permits", url: "https://www.nzta.govt.nz/driver-licences/getting-a-licence/overseas-licences-and-permits/" },
      { label: "NZTA: Traffic and travel information", url: "https://www.nzta.govt.nz/traffic-and-travel-information/" },
    ],
  }),

  a({
    slug: "long-weekend-camping-new-zealand",
    title: "Long-Weekend Camping in New Zealand: Labour Weekend, Anniversary Days and the Rest",
    description: "How long-weekend camping works in New Zealand: Labour Weekend, the regional anniversary days, Waitangi, Easter, Anzac, King's Birthday and Matariki in 2027, with booking advice and where to go.",
    category: "Trip planning",
    region: "New Zealand",
    places: ["Coromandel", "Wairarapa", "Banks Peninsula", "Nelson Tasman", "Taupō"],
    imageAlt: "Waves rolling onto a surf beach near Raglan, seen through flax and coastal scrub",
    related: ["school-public-holidays-new-zealand-2027", "doc-campsites-sell-out-summer-new-zealand", "holiday-parks-new-zealand-guide", "matariki-camping-new-zealand-2027", "family-holiday-parks-new-zealand"],
    hubs: ["camping"],
    intro:
      "New Zealand has a long-weekend calendar that campers learn quickly: Labour Weekend opens the season in October, each region has its own anniversary day, and Easter, Matariki and the rest fill the parks in between. A three-day weekend changes everything about camping, because holiday parks book out, the signposted freedom camping spots fill on Friday afternoon, and the roads out of the big cities clog. This guide sets out the 2027 dates, what each weekend is like, and how to get a site.",
    sections: [
      s("Why a long weekend is different", [
        "On an ordinary weekend a campground near a city is busy on Saturday and easy on Sunday. On a long weekend everyone has an extra day, so people leave on Friday morning or the afternoon before, stay three nights, and fill holiday parks, council campgrounds and the DOC campsites that take bookings. Popular places book weeks ahead, and the first come, first served ones fill by Friday lunchtime.",
        "The result is that the best long-weekend trips are planned like summer ones: a booked site, an early start, and a plan B within an hour of the first choice. The guide to DOC campsites that sell out over summer covers the sites to book first, and the holiday parks guide explains how to book a powered site.",
      ], ["Book weeks ahead, not days", "Leave on Thursday night or Friday morning", "Have a second choice within an hour"]),
      s("The 2027 long weekends", [
        "The table lists the national public holidays in 2027 and the long weekends they make. Waitangi Day and Anzac Day fall on a weekend in 2027, so employees who would not normally work that day get the Monday off, which is how Employment New Zealand describes the rule. The regional anniversary days are separate: Wellington's is on Monday 25 January and Auckland's and Nelson's on Monday 1 February, and Employment New Zealand lists every region's date.",
        "Other regions follow through the year, with Otago on Monday 22 March, Hawke's Bay on the Friday before Labour Day and Canterbury's Show Day on a Friday in November. Dates can change and each employer applies them, so check Employment New Zealand and your local council before you book.",
      ], ["Two holidays move to a Monday in 2027", "Each region has its own anniversary day", "Check Employment New Zealand for exact dates"], {
        caption: "National public holidays in 2027 and the long weekends they make.",
        head: ["Holiday", "Date in 2027", "What to expect"],
        rows: [
          ["Waitangi Day", "Saturday 6 February, observed Monday 8 February", "Summer peak, parks full"],
          ["Easter", "Friday 26 to Monday 29 March", "Coastal parks and DOC sites book early"],
          ["Anzac Day", "Sunday 25 April, observed Monday 26 April", "Cooler nights, and it falls in the school holidays"],
          ["King's Birthday", "Monday 7 June", "Winter, quieter, frost and early dark"],
          ["Matariki", "Friday 25 June", "Midwinter, clear cold skies"],
          ["Labour Day", "Monday 25 October", "Season opener, mixed weather"],
        ],
      }),
      s("Labour Weekend: the season opener", [
        "Labour Day is the fourth Monday in October, and Labour Weekend is when many New Zealanders pull the caravan out for the first time. The weather is mixed, with warm days and cold nights, and the high country can still have snow, but the daylight is long and the holiday parks are not yet at their Christmas prices. In 2027 it falls on 23 to 25 October.",
        "It is also the weekend some seasonal campsites reopen, such as DOC's Catchpool Valley near Wellington, which is closed from May until Labour weekend. Two things catch visitors out: some farm-crossing walks are closed for lambing until about November, as the walks closed for lambing guide explains, and sandflies and wasps wake up with the warmth.",
      ], ["Fourth Monday in October", "Some campsites reopen for the season", "Lambing closures still apply"]),
      s("Anniversary days: the regional weekends", [
        "Each region's anniversary day is a long weekend for that region alone, which is why Monday can be a holiday in Auckland while Christchurch is at work. Aucklanders and Wellingtonians leave for the Coromandel, Northland, Taupō and the Wairarapa, and people in the neighbouring regions find their usual spots full of strangers for a weekend.",
        "The practical rule is to book the region you are going to, not the one you live in. If a friend's anniversary day is next weekend, their favourite campground is full too. Wellington's January long weekend and Auckland's early February one both land in the summer school holidays, so they are the busiest of the lot.",
      ], ["Book for the region you are visiting", "Neighbouring regions fill up too", "Summer anniversary days are the busiest"]),
      s("Easter, Anzac, King's Birthday and Matariki", [
        "Easter is the autumn peak, with the April school holidays from 10 April in 2027 close behind it, and the coastal parks and bookable DOC campsites fill early. Anzac Day brings commemorations in every town, with dawn services that close roads, and King's Birthday and Matariki are winter weekends when the parks are quiet and the nights are cold.",
        "Winter long weekends suit a heated cabin or a well-prepared van. The winter camping guide covers warmth, frost and roads, the Matariki guide covers the midwinter weekend and stargazing, and the school and public holidays guide has the dates for every term.",
      ], ["Easter fills first", "Dawn services can close roads on Anzac Day", "Winter weekends need cold-weather kit"]),
      s("Where to go", [
        "Most people head for a coastal town or a lake within two or three hours of home. Around Auckland that means the Coromandel and Taupō, from Wellington the Wairarapa, and from Christchurch Banks Peninsula and the lakes of the Mackenzie. The Wellington Wairarapa camping loop, the Banks Peninsula camping weekend and the Nelson, Abel Tasman and Golden Bay guide each cover a weekend that fits a long one.",
        "If you cannot find a site, go the other way from the crowd. A town an hour past the famous one usually has space, and a weekday or a Sunday night after the holiday will be much easier than the Friday.",
      ], ["Coastal and lake towns fill first", "Try the town beyond the famous one", "Sunday nights are easy to book"]),
      s("Using KiwiCamping on a long weekend", [
        "KiwiCamping shows holiday parks, DOC campsites and dump stations, with filters for campervan access. Save a first choice and a backup for each night, set them out as a trip with the weekend's dates, and use the forecast to choose between the coast and the mountains.",
        "A weekend away may take you past the edge of the signal, so note that saved places and guides open from the phone while the map tiles, routing, weather and photos need coverage. The app costs nothing to download, with in-app purchases on top.",
      ], ["Save a first choice and a backup", "Check the forecast before leaving", "Saved places stay on the phone"], undefined, true),
    ],
    faq: [
      ["When is Labour Weekend in New Zealand in 2027?", "Labour Day is the fourth Monday in October, so Labour Weekend in 2027 runs from Saturday 23 to Monday 25 October. It is the traditional start of the camping season."],
      ["How far ahead should I book a campsite for a long weekend?", "Weeks ahead for holiday parks and bookable DOC campsites at the popular places, and arrive early for first come, first served sites, which can fill by Friday lunchtime."],
    ],
    sources: [
      { label: "Employment New Zealand: Public holidays and anniversary dates", url: "https://www.employment.govt.nz/leave-and-holidays/public-holidays/public-holidays-and-anniversary-dates/" },
      { label: "DOC: Camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/" },
    ],
  }),

  a({
    slug: "queenstown-walks-camping-base",
    title: "Queenstown Walks With a Camping Base: Where to Sleep for the Best Day Walks",
    description: "The best day walks around Queenstown, Moke Lake, Arrowtown and Glenorchy, paired with where to camp for each, from Queenstown Hill and Ben Lomond to the Routeburn Flats.",
    category: "Camping guides",
    region: "Otago",
    places: ["Queenstown", "Glenorchy", "Arrowtown", "Moke Lake", "Lake Wakatipu"],
    imageAlt: "Lake Wakatipu at Queenstown with a jet boat at the wharf and mountains behind",
    related: ["camping-in-queenstown", "queenstown-glenorchy-camping", "freedom-camping-queenstown-lakes-2026", "camping-bases-best-day-walks-new-zealand", "camping-base-roys-peak-wanaka"],
    hubs: ["camping"],
    intro:
      "Queenstown is a base for walkers as much as for people who jump off things: from a camp in or near the town you can reach a lakeside loop, a summit with a view of the Remarkables, a gold-rush river and the start of the Routeburn, all within about an hour's drive. The difficulty is where to sleep, because the council limits freedom camping and the town is busy for most of the year. This guide pairs the day walks with a base for each.",
    sections: [
      s("How to choose a base", [
        "The walks cluster at four places, and each has a different kind of camp. In town the holiday parks put you within reach of the hill tracks, around Moke Lake there is a basic DOC campsite, Arrowtown has holiday parks and a river trail on its doorstep, and Glenorchy at the head of the lake is the gateway to the Routeburn and the Dart. The guide to camping in Queenstown covers the parks and DOC sites in more detail.",
        "Book well ahead from December to March, because every base fills, and use the freedom camping guide for Queenstown Lakes if you travel in a certified self-contained vehicle, since the council allows it only at a few signed car parks. The table pairs each walk with its base and an approximate time.",
      ], ["Four bases: town, Moke Lake, Arrowtown, Glenorchy", "Book ahead from December to March", "Check the freedom camping rules first"], {
        caption: "Day walks around Queenstown and where to camp for each, with approximate times.",
        head: ["Walk", "Base", "Time"],
        rows: [
          ["Queenstown Hill", "Holiday park in town", "2 to 3 hours return"],
          ["Ben Lomond", "Holiday park in town", "A full day, shorter from the gondola"],
          ["Moke Lake loop", "DOC campsite at the lake", "About 2 hours"],
          ["Arrow River Trail", "Arrowtown holiday park", "1 to 3 hours"],
          ["Routeburn Flats", "Glenorchy holiday park or DOC campsite", "A half day"],
          ["Lake Sylvan and Glenorchy Lagoon", "Glenorchy", "1 to 2 hours"],
        ],
      }),
      s("Walks from Queenstown itself", [
        "Queenstown Hill is the easy one: a steady climb on a well-made track above the town to a summit with views over the lake and the Remarkables, usually two to three hours return. Ben Lomond is the serious one, a long climb to a high summit over Queenstown that is a full day from the town, shorter if you ride the gondola up the first part, and that carries snow and ice into early summer. The guide to camping bases for the best day walks covers how to plan a big day.",
        "Both start close to the holiday parks on the hill above the town, so a night in Queenstown can fit a sunrise start, and a short walk such as Bob's Cove on the lake road suits an afternoon. DOC's page for the Ben Lomond Track describes the route, conditions and safety advice.",
      ], ["Queenstown Hill: 2 to 3 hours", "Ben Lomond: a full day, snow into summer", "Bob's Cove for an easy afternoon"]),
      s("Moke Lake and the quiet side", [
        "Moke Lake sits in a high valley about half an hour from Queenstown on a gravel road, with a basic DOC campsite beside the water and a track that circles the lake in about two hours. It is far quieter than the town and one of the best sunset spots near it, but it has toilets only and no power, and the road can be rough after rain.",
        "Because it is a popular site in summer and there is no shop nearby, bring your own water and food and check DOC's page for the current fees and whether you need to book. Twelve Mile Delta, closer to town on the Glenorchy road, is the larger lakeside alternative.",
      ], ["Half an hour on a gravel road", "Basic campsite, no power", "Bring water and food"]),
      s("Arrowtown and the Arrow River", [
        "Arrowtown is a gold-rush village 20 minutes from Queenstown, with holiday parks of its own and tracks along the Arrow River that pass the remains of Chinese miners' huts. The river trail is flat and easy, and the hill tracks above the village give wider views, with the best colour in April and early May when the autumn leaves turn.",
        "It is the quietest of the bases for a family or a first night, with shops and cafes within walking distance. In autumn it fills for the colours, so book early, and in winter the nights are frosty.",
      ], ["20 minutes from Queenstown", "Autumn colour in April", "Frost in winter"]),
      s("Glenorchy and the Routeburn Flats", [
        "Glenorchy at the head of the lake is the base for the best of the valley walks. The Routeburn Flats walk follows the first section of the Routeburn Track to the Flats, a half-day return, and is a good test of whether you want to do more. Lake Sylvan is a shorter walk through beech forest nearby, and the Glenorchy Lagoon walkway is easy and flat.",
        "Glenorchy Holiday Park and the DOC campsites near the head of the lake are the bases, and the Queenstown to Glenorchy camping guide describes the road and the stops on the way. The last stretch of road is gravel, so allow extra time in a campervan.",
      ], ["Routeburn Flats is a half-day return", "Lake Sylvan and the lagoon are short", "The last stretch is gravel"]),
      s("Weather, seasons and safety", [
        "Mountain weather changes fast and the hill and valley tracks are not the same as a city park. Check the forecast the night before, carry water, warm layers and a rain jacket, tell someone your plan, and follow DOC's outdoor safety advice. Snow and ice stay on the high tracks into early summer, and the wet-weather camping guide covers what to do when a big day goes wrong.",
        "In winter, the walks nearest town are lower and easier, while the high tracks need the right kit and knowledge. The winter driving guide covers the roads, which can need chains.",
      ], ["Check the forecast the night before", "Carry water and warm layers", "Snow lingers on the high tracks"]),
      s("Using KiwiCamping around Queenstown", [
        "KiwiCamping sorts the holiday parks, the DOC campsites at Moke Lake and along Lake Wakatipu and the dump stations, with a filter for campervan access. Save a base for each walk, set them out as a trip with dates, and use the forecast for each day to decide which walk to do when.",
        "Where the signal drops on the roads to the walks, your saved places, place details and guides are still on the phone, and the map tiles, routing, weather and photos come back once you have coverage. Free to download, with in-app purchases.",
      ], ["Save a base for each walk", "Order the walks by the forecast", "Saved places stay on the phone"], undefined, true),
    ],
    faq: [
      ["Where should I camp for walks around Queenstown?", "A holiday park in town for Queenstown Hill and Ben Lomond, the DOC campsite at Moke Lake, a holiday park in Arrowtown for the river trails, and Glenorchy for the Routeburn Flats. Book ahead from December to March."],
      ["Can I freedom camp near the Queenstown walks?", "Only in a few signed car parks and only in certified self-contained vehicles, with short stays and tight limits, so most visitors use a holiday park or a DOC campsite."],
    ],
    sources: [
      { label: "DOC: Queenstown area", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/otago/places/queenstown-area/" },
      { label: "DOC: Ben Lomond Track", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/otago/places/queenstown-area/things-to-do/ben-lomond-track/" },
      { label: "DOC: Know before you go", url: "https://www.doc.govt.nz/parks-and-recreation/know-before-you-go/" },
      { label: "Queenstown Lakes District Council: Responsible camping", url: "https://www.qldc.govt.nz/responsible-camping" },
    ],
  }),

  a({
    slug: "wellington-hikes-camping-base",
    title: "Wellington Hikes With a Camping Base: Hills, Remutaka, Kāpiti and the Tararua Foothills",
    description: "The best hikes around Wellington and where to camp for each: the city hills and coast, the Remutaka and Hutt Valley tracks, the Paekākāriki Escarpment Track and the Tararua foothills.",
    category: "Camping guides",
    region: "Wellington",
    places: ["Wellington", "Lower Hutt", "Upper Hutt", "Paekākāriki", "Remutaka Forest Park", "Tararua Forest Park"],
    imageAlt: "Cattle grazing on a hillside above Wellington Harbour and the city at dusk",
    related: ["camping-in-wellington", "wellington-3-days-campervan", "wellington-wairarapa-camping-loop", "freedom-camping-wellington-2026", "camping-bases-best-day-walks-new-zealand"],
    hubs: ["camping"],
    intro:
      "Wellington is a walking city with a mountain range on its back doorstep, and a campervan makes a good base for it as long as you sleep outside the city, because there is no campground in the centre. The Hutt Valley holiday parks, a regional park at Kaitoke, a DOC campsite in the Remutaka Forest Park and a holiday park on the Kāpiti Coast each put a different set of hikes within reach, from a city-hill loop that finishes with a coffee to a day in the Tararua foothills. This guide pairs the hikes with where to sleep.",
    sections: [
      s("Where the hikes are", [
        "The region's walks fall into four groups. The city hills and south coast tracks are minutes from the centre, the Hutt Valley and Remutaka Forest Park have river and forest tracks, the Kāpiti Coast has the Paekākāriki Escarpment Track and the beaches, and the Tararua Forest Park starts at the edge of the Wairarapa. A base in the Hutt Valley is within an hour of the first two, while Kāpiti and the Tararua need a night closer to them.",
        "The table pairs each hike with a base and an approximate time. Times are for a reasonably fit walker in fair weather, and the guide to camping in Wellington covers the parks in more detail.",
      ], ["Four groups: hills, Hutt, Kāpiti, Tararua", "Sleep outside the city", "Times are approximate"], {
        caption: "Hikes around Wellington and where to camp for each, with approximate times.",
        head: ["Hike", "Base", "Time"],
        rows: [
          ["Mount Victoria, Te Ahumairangi and the Southern Walkway", "Lower Hutt holiday park, then train or bus", "1 to 4 hours"],
          ["Red Rocks coastal walk", "Lower Hutt holiday park", "2 to 3 hours return"],
          ["Ōrongorongo Valley", "DOC campsite at Catchpool Valley", "Half a day or more"],
          ["Kaitoke Regional Park tracks", "Kaitoke campground or Upper Hutt", "1 to 3 hours"],
          ["Paekākāriki Escarpment Track", "Paekākāriki holiday park", "About 3 hours one way"],
          ["Mount Holdsworth and the Tararua foothills", "DOC campsite near Masterton", "Half a day to a full day"],
        ],
      }),
      s("The city hills and the south coast", [
        "Mount Victoria, Te Ahumairangi Hill and Mount Kaukau give the classic views over the harbour, and the Southern Walkway links the town belt hills to the south coast. Red Rocks is a coastal walk where fur seals haul out in the cooler months, so keep your distance. None of this needs a camp in the city: sleep at a holiday park in Lower Hutt or Upper Hutt and use the train or the bus.",
        "Wellington City Council maintains the city tracks, and the guide to Wellington in three days covers what to see between them. The harbour-side parking is limited and not for sleeping, as the Wellington freedom camping guide explains.",
      ], ["Sleep in the Hutt, walk the hills", "Seals at Red Rocks: keep your distance", "Do not sleep in city car parks"]),
      s("The Hutt Valley and Remutaka", [
        "Catchpool Valley, in the Remutaka Forest Park, is the best base for the Ōrongorongo Valley walks, a river valley track that is mostly flat but crosses water, and the campsite has a kitchen and showers. It is closed from May until Labour weekend, so it suits summer and autumn. Check DOC's page for the current fee and opening dates.",
        "Kaitoke Regional Park near Upper Hutt, run by Greater Wellington, has a campground and tracks along the Pakuratahi River, and the area was a filming location for Rivendell in The Lord of the Rings. Kiwi Holiday Park in Upper Hutt is an alternative with campervan sites. River levels matter, so read the guide to river crossing safety before a valley walk after rain.",
      ], ["Catchpool: closed May to Labour weekend", "Kaitoke: regional park campground", "Check river levels after rain"]),
      s("The Kāpiti Coast and the Escarpment Track", [
        "The Paekākāriki Escarpment Track climbs along the cliffs above the coast between Paekākāriki and Pukerua Bay, with steps, a swing bridge over a stream and views to Kāpiti Island. It takes about three hours one way, and the train from Paekākāriki to Pukerua Bay makes a one-way walk easy to finish. Paekākāriki Holiday Park is the base, close to the village and the train station.",
        "Kāpiti Island is a DOC nature reserve reached by boat from Paraparaumu, and visits need a permit, so plan it ahead and check DOC's page. The beaches along the coast are good for a sunset walk, though the wind can be strong.",
      ], ["About 3 hours one way", "Train back from Pukerua Bay", "Kāpiti Island needs a permit"]),
      s("The Tararua foothills", [
        "The Tararua Forest Park runs along the eastern edge of the region, and its easier tracks start from Wairarapa roads near Masterton. DOC has a campsite and huts at the Mount Holdsworth road end, which is the usual base for a day walk into the beech forest and for longer alpine trips. The Wellington and Wairarapa camping loop covers the Wairarapa towns on the way.",
        "The Tararua Range is famous for wild weather, so for anything above the bush line, check the forecast, tell someone your plan and be ready to turn around. For a day walk, stay in the lower valley.",
      ], ["Base at the Mount Holdsworth road end", "Stay below the bush line on a day walk", "Weather can turn quickly"]),
      s("Wind, weather and ferry days", [
        "Wellington is known for its wind, and it matters on exposed ridges, on the coast and for a high-sided van. Check MetService the day before, carry layers and a rain jacket, and leave a buffer if you have a Cook Strait ferry sailing, since a southerly can delay a crossing. The guide to the Cook Strait ferry covers booking and check-in.",
        "On long weekends and in the summer holidays the parks fill, so book ahead. The Wellington anniversary weekend in late January is one of the busiest.",
      ], ["Check the wind before a ridge walk", "Leave a buffer before a ferry", "Book ahead for long weekends"]),
      s("Using KiwiCamping around Wellington", [
        "KiwiCamping shows the Hutt Valley and Kāpiti holiday parks, the DOC campsites in the Remutaka and Tararua areas and the dump stations, with a filter for campervan access. Save a base for each hike, set them out as a trip with dates, and use the forecast to choose the day for the exposed walks.",
        "In the Remutaka and Tararua areas your saved places, details and guides stay on the phone, but the map tiles, routing, weather and photos need a signal, so look at the forecast before you leave the Hutt Valley. Download is free, with in-app purchases.",
      ], ["Save a base for each hike", "Pick the windy day for a valley walk", "Saved places stay on the phone"], undefined, true),
    ],
    faq: [
      ["Where can I camp for Wellington hikes?", "There is no campground in the city, so use a holiday park in Lower Hutt, Upper Hutt or Paekākāriki, Kaitoke Regional Park, or the DOC campsites at Catchpool Valley and near Masterton for the Tararua foothills."],
      ["Is Catchpool Valley campsite open all year?", "No. DOC closes it from May until Labour weekend, so plan it for summer or autumn and look at DOC's site for the fee and dates."],
    ],
    sources: [
      { label: "DOC: Remutaka Forest Park", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/wellington-kapiti/places/remutaka-forest-park/" },
      { label: "DOC: Tararua Forest Park", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/wellington-kapiti/places/tararua-forest-park/" },
      { label: "DOC: Kāpiti Island Nature Reserve", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/wellington-kapiti/places/kapiti-island-nature-reserve/" },
      { label: "DOC: Know before you go", url: "https://www.doc.govt.nz/parks-and-recreation/know-before-you-go/" },
    ],
  }),

  a({
    slug: "lakeside-camping-south-island",
    title: "Lakeside Camping in the South Island: Lake-by-Lake Guide to Where to Stay",
    description: "Where to camp beside the South Island's lakes: Tekapo and Pukaki, Wānaka, Hāwea and Wakatipu, Te Anau, Manapouri and the Eglinton Valley, and Mavora, with notes on wind, sandflies and water quality.",
    category: "Camping guides",
    region: "South Island",
    places: ["Lake Tekapo", "Lake Pukaki", "Lake Wānaka", "Lake Wakatipu", "Lake Te Anau", "Mavora Lakes"],
    imageAlt: "Two ducks on the clear water of Lake Rotoiti in Nelson Lakes National Park",
    related: ["waterfalls-lakes-campgrounds-new-zealand", "scenic-campsites-new-zealand", "camping-in-tekapo", "freedom-camping-mackenzie-2026", "queenstown-glenorchy-camping"],
    hubs: ["camping"],
    intro:
      "The South Island's lakes are the reason many people hire a campervan: glacial blue water, a mountain wall behind it, and a campsite close enough to hear the lake. The best of them are strung along a few roads, the Mackenzie Country, the Southern Lakes around Wānaka and Queenstown, and Fiordland, so a trip can take in four or five in a week. This guide goes lake by lake, with the sort of base each has and what to expect from the water, the wind and the sandflies.",
    sections: [
      s("What lakeside camping is like", [
        "A lakeside night means views, early light and a swim or a paddle in summer, and it also means wind, which funnels down the long lakes, and cold nights, because the lakes sit in high valleys. Most of the best camps are holiday parks or DOC campsites rather than freedom camping spots, since councils around the busiest lakes restrict camping to protect the shore.",
        "The table lists the main lakes, the usual kind of base and a note for each. The guide to campgrounds at lakes and waterfalls covers Nelson Lakes, the West Coast and some North Island lakes, and the scenic campsites guide picks sites for their views.",
      ], ["Wind funnels down the long lakes", "Most good lake camps are parks or DOC sites", "Nights are cold in the high valleys"], {
        caption: "South Island lakes and the usual camping base at each.",
        head: ["Lake", "Usual base", "Note"],
        rows: [
          ["Tekapo", "Holiday parks in the village", "Dark sky stargazing; freedom camping is limited"],
          ["Pukaki", "Glentanner and Twizel", "The view of Aoraki Mount Cook"],
          ["Wānaka", "Holiday parks and Glendhu Bay", "Calm mornings, popular in summer"],
          ["Hāwea", "Holiday park at the lake", "Quieter than Wānaka"],
          ["Wakatipu", "Twelve Mile Delta, Kinloch, Glenorchy", "DOC campsites beside the water"],
          ["Te Anau and Manapouri", "Town parks and DOC campsites", "Gateway to Fiordland"],
          ["Mavora Lakes", "DOC campsites", "Gravel access, remote and quiet"],
        ],
      }),
      s("The Mackenzie lakes: Tekapo and Pukaki", [
        "Lake Tekapo is the best known, with a village on the shore, holiday parks within walking distance and some of the clearest night skies in the world, which the Tekapo camping guide and the guide to lupins and Southern Lights cover. Council rules for freedom camping in the Mackenzie are tight, so book a holiday park or read the Mackenzie guide first.",
        "Lake Pukaki, 45 minutes south, is the colour people photograph: glacial flour turns the water an unreal turquoise, with Aoraki Mount Cook at the far end. Glentanner Holiday Park at the foot of the lake is the closest camp, Twizel the nearest town, and the Christchurch to Tekapo and Aoraki road trip links the two.",
      ], ["Tekapo: stargazing and a village", "Pukaki: the Aoraki view", "Read the Mackenzie freedom camping rules"]),
      s("Wānaka, Hāwea and Wakatipu", [
        "Lake Wānaka has holiday parks in the town and lakeside campgrounds at Glendhu Bay on the road to the Matukituki valley, and its calm mornings reward an early start. Lake Hāwea, over the saddle, is quieter, with a holiday park and the council rules for freedom camping described in the Wānaka guide. Both are popular from December to February, so book.",
        "Lake Wakatipu has holiday parks at Queenstown, Frankton and Glenorchy and DOC lakeside campsites such as Twelve Mile Delta and Kinloch. The lake level rises and falls by about 20 centimetres a day in Queenstown Bay, a seiche that DOC describes on its Queenstown page, which Southern Māori describe as the heartbeat of a giant. The Queenstown to Glenorchy camping guide covers the road along the water.",
      ], ["Wānaka and Hāwea: book for summer", "Wakatipu: DOC sites beside the lake", "The lake level moves a little each day"]),
      s("Fiordland: Te Anau, Manapouri, Eglinton and Mavora", [
        "Lake Te Anau and Lake Manapouri are the gateway lakes to Fiordland, with holiday parks in the towns and DOC campsites nearby. On the Milford Road, the Eglinton Valley has DOC campsites in beech forest and beside the water, including Lake Gunn and Cascade Creek, which are basic and popular, so check DOC's page for fees, bookings and the road status before you drive.",
        "The Mavora Lakes, reached by a gravel road from near Mossburn, have DOC campsites in a wide valley used as a film location for the Lord of the Rings. They are remote and quiet, with no shops, so bring everything. Freedom camping rules for Te Anau are in the Te Anau guide, and the Fiordland road trip covers the loop.",
      ], ["Eglinton Valley campsites on the Milford Road", "Mavora: gravel road, bring everything", "Check the Milford Road status"]),
      s("North of the Alps: Nelson Lakes and the West Coast", [
        "Lake Rotoiti and Lake Rotoroa in Nelson Lakes National Park have the best-known DOC lake campsites in the north, at Kerr Bay and on the Rotoroa shore, and the West Coast has Lake Māhinapua and Lake Brunner, both with sites near the water. The guide to campgrounds at lakes and waterfalls covers Rotoroa, Kerr Bay and Māhinapua with fees and access notes, so this guide does not repeat them.",
        "These lakes get more rain than the Southern Lakes and have more sandflies, so pack accordingly. The Nelson Lakes and West Coast pages on DOC's site list the campsites each region has.",
      ], ["Nelson Lakes: Kerr Bay and Rotoroa", "West Coast: Māhinapua and Brunner", "More rain, more sandflies"]),
      s("Sandflies, wind, cold and water quality", [
        "Sandflies are worst at dawn and dusk beside the lakes, especially in Fiordland and on the West Coast, as the sandflies guide explains, so carry repellent and cover up. Wind can make a lake too rough for a paddle, and high-sided vans get pushed around on lakeside roads, so check the forecast and park out of the gusts.",
        "Lake water is cold even in summer. Check the councils' and LAWA's swimming advice before a swim, since algae blooms can make a lake unsafe, and never wash with soap or dump wastewater into a lake. Fire seasons can ban fires near the lakes, and the campfire rules guide covers how to check.",
      ], ["Repellent for dawn and dusk", "Check swimming advice before a swim", "Never dump wastewater in a lake"]),
      s("Using KiwiCamping around the lakes", [
        "KiwiCamping shows the holiday parks, DOC campsites and dump stations beside the lakes, with filters for campervan access. Save a lake for each night, set them out as a trip with dates, and use the forecast to decide where the wind and rain will be least trouble.",
        "Your saved lakes and guides are kept on the phone, so they still open at a camp with no signal, while the map tiles, routing, weather and photos need coverage. You pay nothing to download it, with in-app purchases available.",
      ], ["Save a lake for each night", "Check the wind in the forecast", "Saved places stay on the phone"], undefined, true),
    ],
    faq: [
      ["Which South Island lakes are best for camping?", "Tekapo and Pukaki in the Mackenzie, Wānaka, Hāwea and Wakatipu in the Southern Lakes, and Te Anau, Manapouri and the Eglinton Valley in Fiordland, with Mavora for a quieter night."],
      ["Can I freedom camp beside the South Island lakes?", "Only where the council allows it, which is limited around Tekapo, Wānaka and Queenstown. Most lakeside camps are holiday parks or DOC campsites, so check the council rules before you stop."],
    ],
    sources: [
      { label: "DOC: Canterbury", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/canterbury/" },
      { label: "DOC: Southland", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/southland/" },
      { label: "DOC: Nelson Lakes National Park", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/nelson-tasman/places/nelson-lakes-national-park/" },
      { label: "LAWA: Can I swim here?", url: "https://www.lawa.org.nz/" },
    ],
  }),

  a({
    slug: "scenic-lookouts-new-zealand-drive-up",
    title: "Scenic Lookouts You Can Drive To in New Zealand: Viewpoints Without the Hike",
    description: "The best New Zealand lookouts reached by road or a short walk from the car park, from Te Mata Peak and Mount Victoria to Lindis Pass, the Crown Range and Knights Point, with tips for campervans.",
    category: "Trip planning",
    region: "New Zealand",
    places: ["Te Mata Peak", "Wellington", "Lindis Pass", "Crown Range", "Akaroa", "Knights Point"],
    imageAlt: "Lindis Pass in the South Island with golden tussock hills under a wide sky",
    related: ["scenic-campsites-new-zealand", "christchurch-to-queenstown-drive-guide", "wanaka-haast-pass-route", "southern-scenic-route-camping", "pacific-coast-highway-auckland-to-napier-camping"],
    hubs: ["camping"],
    intro:
      "Some of the best views in New Zealand need no boots: a lookout at the end of a road, a pull-out at the top of a pass, or a short flat walk from a car park. They suit the days a hike is too long, the weather is too poor for a summit, or the whole family wants a view without a climb. This guide lists lookouts you can reach by road or a short walk, by region, with what to know about driving a campervan up to them and when the light is best.",
    sections: [
      s("What counts as a drive-up lookout", [
        "The lookouts here are reached by a public road, with parking at or near the top, and at most a short, easy walk of 15 minutes or so. Some are sealed all the way, a few have steep, narrow or winding roads that need care in a large vehicle, and one or two are toll roads. They are free to visit unless noted, and none of them are places to sleep, so plan a camp for the night nearby.",
        "The list is a selection rather than a full inventory, and it follows the main touring roads so that a lookout fits into a day of driving. The table gives the highlights by region, and the sections that follow add the detail.",
      ], ["Road access, short walk at most", "Most are not places to sleep", "A selection along the touring roads"], {
        caption: "Drive-up lookouts by region, with the road and what to know.",
        head: ["Region", "Lookout", "Note"],
        rows: [
          ["Northland", "Flagstaff Hill, Russell", "Steep road above the Bay of Islands"],
          ["Hawke's Bay", "Te Mata Peak and Bluff Hill, Napier", "Sealed roads to the summits"],
          ["Wellington", "Mount Victoria Lookout", "Steep, winding road to the top"],
          ["Taupō", "Aratiatia Rapids and Huka Falls", "Short walks from the car park"],
          ["Top of the South", "Takaka Hill and Queen Charlotte Drive", "Roadside lookouts over the bays and Sounds"],
          ["Canterbury", "Hilltop above Akaroa, Otira Viaduct, Lake Pukaki", "On the main touring roads"],
          ["Central Otago", "Lindis Pass and the Crown Range summit", "High passes, snow in winter"],
          ["Dunedin and the Catlins", "Signal Hill and Nugget Point", "Short walk to Nugget Point lighthouse"],
          ["West Coast", "Knights Point", "On the road between Haast and Fox Glacier"],
        ],
      }),
      s("North Island lookouts", [
        "In Northland, Flagstaff Hill above Russell looks over the Bay of Islands, on a steep road that is better done in a car than in a long campervan. In Hawke's Bay, Te Mata Peak has a sealed road to the summit and views of the plains and the coast, and Bluff Hill Lookout in Napier gives a view over the port and the Art Deco city. The Pacific Coast Highway guide covers the route between Auckland and Napier.",
        "In Wellington, Mount Victoria Lookout has a road to the top with a view of the harbour and the city, and the Thermal Explorer Highway guide covers the road through Taupō and Rotorua. Near Taupō, the Aratiatia Rapids are best seen when the dam gates release, so check the times before you go.",
      ], ["Te Mata Peak: a sealed road to the summit", "Mount Victoria: steep, winding road", "Aratiatia: check the release times"]),
      s("South Island lookouts", [
        "On the road between Christchurch and Queenstown, the Lake Pukaki lookout gives the turquoise lake and Aoraki Mount Cook, and Lindis Pass has a lookout over golden tussock hills, covered in the Christchurch to Queenstown drive guide. The Crown Range Road between Queenstown and Wānaka reaches a summit lookout at New Zealand's highest main road, with views down to the Wakatipu basin. It is steep and winding, and snow and ice can close it or require chains.",
        "On the West Coast, Knights Point Lookout on the road between Haast and Fox Glacier looks along a wild coastline, and the Wānaka to Haast Pass guide covers the road in from the east. In the Catlins, Nugget Point's lighthouse is a short walk from the car park, as the Southern Scenic Route guide covers, and above Akaroa the Hilltop lookout gives the harbour from the Banks Peninsula road. On the Takaka Hill road and the Queen Charlotte Drive there are roadside lookouts over Tasman Bay and the Marlborough Sounds.",
      ], ["Lindis Pass and Pukaki on the Queenstown road", "Crown Range: steep, can close in snow", "Knights Point and Nugget Point on the coasts"]),
      s("Driving up in a campervan", [
        "Check the road before you go. Narrow, winding or steep roads are tiring and can be unsuitable for a long or high vehicle, and some hire companies restrict certain roads. Gravel roads and one-lane bridges are covered in the guide to gravel roads and one-lane bridges, and the driving day planner helps fit a lookout into a travel day.",
        "Park only in the signed car park and do not sleep there unless the council or DOC says you may, since many lookouts are in reserves with their own rules. Keep to the fenced paths and mind the edge, because winds can be strong at the top of a pass or a peak.",
      ], ["Check the road suits your vehicle", "Park in the signed car park only", "Mind the edge and the wind"]),
      s("Light, weather and timing", [
        "Early morning and the hour before sunset give the best light and the fewest people, and clear air after a front is the best day for a long view. Cloud, rain and snow can close the views at a pass or a peak, so check the forecast and the NZTA road status before you drive up, and plan a second lookout lower down for a poor day.",
        "In winter, the high passes and the Crown Range can need chains, and the winter driving guide covers what to carry. In summer, the best views are early, before the haze and the crowds build.",
      ], ["Sunrise and sunset are best", "Check the forecast and NZTA first", "Have a lower plan B"]),
      s("Using KiwiCamping around the lookouts", [
        "KiwiCamping shows the holiday parks, DOC campsites and dump stations along each road, with filters for campervan access. Save a camp near each lookout you want, set them out as a trip with dates, and use the forecast for each stop to decide which day is best for the view.",
        "Some lookout roads have patchy signal, so remember that saved places and guides open from the phone while map tiles, routing, weather and photos need coverage. You can download the app free, with in-app purchases.",
      ], ["Save a camp near each lookout", "Check the forecast for the view", "Saved places stay on the phone"], undefined, true),
    ],
    faq: [
      ["What are the best lookouts you can drive to in New Zealand?", "Te Mata Peak and Bluff Hill in the North Island, and Lake Pukaki, Lindis Pass, the Crown Range summit, Hilltop above Akaroa and Knights Point in the South Island are all reached by road with little or no walking."],
      ["Can I sleep at a scenic lookout in a campervan?", "Usually not. Many lookouts are in reserves with their own rules, so check the signs and the council or DOC rules, and book a camp nearby."],
    ],
    sources: [
      { label: "NZTA: Traffic and travel information", url: "https://www.nzta.govt.nz/traffic-and-travel-information/" },
      { label: "DOC: Otago", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/otago/" },
      { label: "DOC: West Coast", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/west-coast/" },
      { label: "DOC: Hawke's Bay", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/hawkes-bay/" },
    ],
  }),
];
