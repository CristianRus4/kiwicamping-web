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
    imageAlt: "The Avon River winding through the Christchurch Botanic Gardens",
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
        "Saved places, place details and guides are kept on the phone, while map tiles, routing, weather and photos need signal. Free to download, with in-app purchases.",
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
    imageAlt: "Kaiteriteri Beach in the Nelson Tasman region with boats on golden sand",
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
        "Saved places, place details and guides are kept on the phone, while map tiles, routing, weather and photos need signal. Free to download, with in-app purchases.",
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
];
