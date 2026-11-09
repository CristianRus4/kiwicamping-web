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
];
