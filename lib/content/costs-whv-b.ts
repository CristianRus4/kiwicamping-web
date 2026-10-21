import { makeArticle as a, type Article, type ArticleSection, type ArticleTable } from "@/lib/article-model";

const s = (heading: string, body: string[], tips?: string[], table?: ArticleTable, cta?: boolean): ArticleSection => ({ heading, body, tips, ...(table && { table }), ...(cta && { cta }) });

/**
 * Working holiday road trip budget and two comparisons. Facts files: docs/growth/costs/nz-hire-budget-facts.md
 * and nz-buy-sell-compare-facts.md (read 21 October 2026). Drip-published through publishAt.
 */
export const costsWhvArticlesB: Article[] = [
  a({
    slug: "working-holiday-road-trip-budget-new-zealand-2026",
    publishAt: "2026-12-04",
    title: "Working Holiday Road Trip Budget in NZ 2026: Per Week",
    description: "A week of camping and fuel in a van costs about $318 to $878 depending on where you sleep. See visa funds, minimum wage, DOC fees and the arithmetic behind each figure.",
    category: "Costs & budget",
    region: "New Zealand",
    places: ["DOC campsites","Holiday parks","Freedom camping","Cook Strait ferry"],
    imageAlt: "Neat rows of grapevines in the Wairau Valley, Marlborough, with dry hills in the distance",
    related: ["campervan-hire-cost-new-zealand-2026","camping-fees-new-zealand-2026","new-zealand-road-trip-fuel-cost-2026","new-zealand-travel-cost-2026","working-holiday-apps-new-zealand"],
    intro:
      "Camping and fuel for a week on a New Zealand road trip cost about $318 if you use free DOC campsites and freedom camp, and up to about $878 a week if every night is a powered holiday park site, at 800 km a week in a petrol van. That excludes food, the van itself and the visa. Immigration New Zealand asks working holiday applicants for NZ$4,200 in funds from most countries and lists a visa cost from NZ$770, and the adult minimum wage is $23.95 an hour from 1 April 2026. All figures are in New Zealand dollars, were read on 21 October 2026 and show their arithmetic so you can change the assumptions.",
    sections: [
      s("Before you fly: visa and funds", [
        "Immigration New Zealand publishes a working holiday page for each eligible country. The Germany, Canada, USA, France, Ireland and Japan pages ask for at least $4,200 in funds, and the United Kingdom page asks for at least $350 a month. You also need an onward ticket or the money to buy one, on top of those funds, and the evidence is bank or credit card statements. Every country page shows the visa cost as \"from $770\", and the exact fee for your passport shows only after you enter your country details.",
        "The International Visitor Levy is $100 for many working holiday travellers, and Immigration New Zealand's levy page explains who pays. This guide could not confirm from the page text whether it is charged in addition to the $770, so check your application summary. The visa lets you work in temporary jobs for the length of the visa, study for up to 6 months in total and needs no job offer, but not a permanent job, and you cannot operate a business. Age limits are 18 to 30 on most country pages and 18 to 35 for the United Kingdom and Canada.",
      ], ["Funds differ by country","The $770 is a starting figure","Check the levy on your application"]),
      s("What a week costs by camping style", [
        "The table uses two stated assumptions. Fuel is 800 km a week at 11 litres per 100 km, which is 88 litres, at MBIE's national board price for regular petrol of $3.617 a litre on 16 October 2026 (provisional): 88 times $3.617 is about $318. Camping uses the DOC fees page and, for holiday parks, the planning range of $25 to $80 a site per night used in the camping fees guide, since holiday park chains publish nightly prices only in their booking engines.",
        "A diesel van changes the fuel line. At $3.245 a litre, 88 litres cost about $286, and road user charges on a hire van at thl's $8.04 per 100 km add about $64 for 800 km, so about $350 for the week. A van you own pays RUC by the 1,000 km, and the rate is on the NZTA page.",
      ], ["Change the kilometres to match your route","Holiday park prices are site prices, not per person","Diesel adds RUC"], {
        caption: "Camping plus fuel for one week, 7 nights, 800 km at 11 L/100 km in a petrol van at $3.617 a litre. Food and the van are not included.",
        head: ["Camping style","Camping, 7 nights","With fuel, solo traveller","With fuel, two adults in one van"],
        rows: [
          ["Free: basic DOC campsites and freedom camping","$0","$318","$318"],
          ["DOC standard campsites, $10 to $20 per adult a night","$70 to $140 per adult","$388 to $458","$458 to $598"],
          ["DOC serviced unpowered, $25 per adult a night","$175 per adult","$493","$668"],
          ["Holiday park site, $25 to $80 a night (planning range)","$175 to $560 per site","$493 to $878","$493 to $878"],
        ],
      }),
      s("Camping costs: DOC fees and the Campsite Pass", [
        "DOC's fee page lists serviced unpowered or tent sites at $25 per adult (18 and over) and $12.50 per child (5 to 17), serviced powered at $20 to $28 per adult and $10 to $14 per child, and standard campsites at $10 to $20 per adult and $5 to $10 per child. Basic campsites are free, and infants are free. Backcountry and Great Walk campsites vary. A vacant tent or vehicle left on a site is charged as two adults.",
        "The DOC Campsite Pass costs $295 for an adult and $147.50 for a child or youth, valid one year from your chosen start date, and covers most DOC campsites except an excluded list. It allows a maximum of 7 nights in a 30-day period at a single campsite and adds $3 per pass user per night at powered campsites. At $25 a night, $295 is about 12 nights, so the pass pays only if you stay in many paid DOC sites. Holiday park clubs differ: TOP 10's own page lists its club at $55 for 2 years, and laundry at Wellington TOP 10 is $6 a wash and $6 a dryer.",
      ], ["Compare $295 with your likely nights","Pass limits you to 7 nights in 30 days per site","DOC fees can change between seasons"]),
      s("Fuel, ferry and the van", [
        "Fuel is the largest running cost on a long route, so use the fuel guide to convert your distance. Crossing Cook Strait with a vehicle costs more than a foot passenger fare: Interislander says vehicle fares start from $258 and vary by sailing, fare type and how far ahead you book, and prices are set by vehicle length. Bluebridge shows no fare in its page text.",
        "If you hire, the campervan hire cost guide covers the daily rate, cover, one-way fees and the extras. If you buy, the buying guide covers WoF, rego and change of ownership, and the selling guide covers getting out at the end. Jucy's Crib at its $95 peak rate costs $665 for 7 days before cover and extras.",
      ], ["Book the ferry early in summer","Price the van separately from running costs","Compare hire with buy and sell"]),
      s("What you can earn", [
        "From 1 April 2026 the adult minimum wage is $23.95 an hour before tax, which is $191.60 for an 8-hour day and $958 for a 40-hour week. The starting-out and training rates are $19.16 an hour. Employment New Zealand says temporary migrant workers have the same minimum rights, and the rates are reviewed each year.",
        "Compare that with a week's camping and fuel of $318 to $878: at the minimum wage, one 40-hour week before tax covers every row in the table, but food, the van and tax are still to come. Harvest and hospitality hours vary, so treat the figure as a ceiling, not a promise.",
      ], ["Rates are before tax","Starting-out rate is $19.16","Hours vary by job and season"]),
      s("Plan the route and the nights in KiwiCamping", [
        `KiwiCamping lists 287 DOC campsites and 927 DOC huts in its bundled data (as of 24 August 2026), with each place's category and fee from DOC. Filter by cost to find free places, save the ones you want and build a trip with ordered stops, dates, and the distance and drive time between them, so your kilometres, and with them your fuel line, come from a real route. Place pages keep working with no bars on the phone; maps, routes, the forecast and photos come back once you have signal. KiwiCamping is free to download, with in-app purchases.`,
        "The app does not set prices for holiday parks or hire. Use it to count nights and kilometres, then fill the table above.",
      ], ["Use the cost filter for free places","Count nights and kilometres first","Save a backup site for each night"], undefined, true),
    ],
    faq: [
      ["How much money do I need for a working holiday in New Zealand?", "Immigration New Zealand asks for at least $4,200 in funds on the Germany, Canada, USA, France, Ireland and Japan pages, and at least $350 a month for the United Kingdom, plus an onward ticket or the money to buy one. The visa cost shows as from $770, with the exact fee shown when you apply."],
      ["How much does a week on a road trip in New Zealand cost?", "Camping and fuel come to about $318 to $878 a week in a petrol van at 800 km a week: $318 with free campsites, up to $878 on powered holiday park sites at a $25 to $80 planning range. Food, the van and the visa are extra."],
      ["Is the DOC Campsite Pass worth it for a working holiday?", "At $295 for an adult it pays only if you stay many nights at paid DOC campsites. At $25 a night it covers about 12 nights, and it allows 7 nights in 30 days at a single campsite and adds $3 per user per night at powered sites."],
      ["What is the minimum wage in New Zealand in 2026?", "$23.95 an hour for adults from 1 April 2026, before tax, which is $958 for a 40-hour week. The starting-out and training rates are $19.16, and temporary migrant workers have the same minimum rights."],
    ],
    sources: [
      { label: "Immigration New Zealand: Germany working holiday visa", url: "https://www.immigration.govt.nz/visas/germany-working-holiday-visa/" },
      { label: "Immigration New Zealand: United Kingdom working holiday visa", url: "https://www.immigration.govt.nz/visas/united-kingdom-working-holiday-visa/" },
      { label: "Immigration New Zealand: Canada working holiday visa", url: "https://www.immigration.govt.nz/visas/canada-working-holiday-visa/" },
      { label: "Immigration New Zealand: paying the International Visitor Levy", url: "https://www.immigration.govt.nz/process-to-apply/applying-for-a-visa/fees-processing-times-and-refunds/paying-the-international-visitor-levy/" },
      { label: "Employment New Zealand: minimum wage rates and types", url: "https://www.employment.govt.nz/pay-and-hours/pay-and-wages/minimum-wage/minimum-wage-rates-and-types" },
      { label: "MBIE: weekly fuel price monitoring data", url: "https://www.mbie.govt.nz/assets/Data-Files/Energy/Weekly-fuel-price-monitoring/weekly-table.csv" },
      { label: "DOC: campsite facilities and fees", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/facilities-and-fees/" },
      { label: "DOC: Campsite Pass", url: "https://www.doc.govt.nz/campsite-pass" },
      { label: "TOP 10 Holiday Parks: Wellington", url: "https://www.top10.co.nz/park/lower-north-island/wellington-top-10-holiday-park/" },
      { label: "Interislander: Cook Strait ferry fares and payment options", url: "https://www.interislander.co.nz/book/cook-strait-ferry-fares-and-payment-options" },
      { label: "thl: Summary of Rental Conditions, New Zealand, version 16", url: "https://thl.widen.net/content/i0uybterg6/original/NZ_2627_Direct-Summary-of-Rental-Conditions.pdf" },
      { label: "Jucy: how much does it cost to hire a campervan in New Zealand", url: "https://www.jucy.com/nz/en/tips-tricks-and-road-trips/how-much-does-it-cost-to-hire-a-campervan-in-new-zealand-2026-guide" },
    ],
  }),

  a({
    slug: "north-island-vs-south-island-campervan",
    publishAt: "2026-12-05",
    title: "North Island vs South Island by Campervan: Which? (2026)",
    description: "Compare the islands by campervan: Cook Strait ferry rules, one-way hire fees, DOC campsites and huts, Great Walks and winter roads. Official facts, no hype.",
    category: "Trip planning",
    region: "New Zealand",
    places: ["North Island","South Island","Cook Strait","Great Walks"],
    imageAlt: "The Interislander Cook Strait ferry berthed at Picton with forested Marlborough Sounds hills behind",
    related: ["cook-strait-ferry-campervan-guide","north-island-two-week-road-trip","new-zealand-three-week-campervan-route","campervan-hire-cost-new-zealand-2026","winter-driving-new-zealand-campervan"],
    intro:
      "The South Island has more DOC campsites, huts and Great Walks than the North Island, but both islands fall under the same freedom camping law, and the real difference for a campervan is the Cook Strait ferry. Hire companies say you must use the ferry to take a van between islands, it takes about 3.5 hours and is booked separately, and one-way hires between Auckland and the south carry a fee. Rules and fees below were read on 21 October 2026, and the counts come from KiwiCamping's bundled data as of 24 August 2026.",
    sections: [
      s("The Cook Strait ferry is the dividing line", [
        "Interislander's crossing between Wellington and Picton takes about 3.5 hours, and its vehicle fares start from $258, with the price set by the sailing, the fare type, how far ahead you book and the vehicle's length. You add the vehicle at booking with its type, height and total length including bike racks, roof boxes and tow bars. Vehicle space fills quickly, especially on weekends, school holidays and in summer, and arriving without a booking does not guarantee a place. Changes cost $20 per person and $30 per vehicle on its fare conditions page. Bluebridge has separate campervan and motorhome categories and charges a $20 change fee per person and per vehicle.",
        "The thl rental group says ferry travel is required between the islands, that you book it yourself and that you should book a 7.7 m motorhome space whatever size of van you hired. Wicked Campers also states the ferry is not included. The Cook Strait guide covers the booking step by step.",
      ], ["Book the vehicle space early","Enter the true length","Ferry is separate from hire"]),
      s("One-way hire fees favour a single island", [
        "A trip that starts in Auckland and ends in Christchurch or Queenstown uses a one-way hire. The thl group's fee is $200 from 1 April to 30 September 2026 and $300 from 1 October 2026 to 31 March 2027 for Auckland to Christchurch or Queenstown, and $200 from 1 October to 31 March the other way. Christchurch to Queenstown is $200 all year and Queenstown to Christchurch is $100 from 1 October to 31 March. Spaceships says its one-way travel carries no extra fee. thl charges a $270 Queenstown location fee as well.",
        "The cheaper plan for a shorter trip is one island, a return hire and no ferry. For a longer trip, hiring in one city and returning in another saves backtracking, and the ferry becomes one line of the budget rather than the headline.",
      ], ["Compare return and one-way totals","Check the Queenstown fee","Spaceships lists no one-way fee"]),
      s("Camping and tramping supply by island", [
        "KiwiCamping's bundled data counts places by island. DOC campsites, huts and tracks are all more numerous in the South Island, which also has far more hut bunks. DOC says it manages more than 320 campsites across the country and publishes no per-island count on its freedom camping page, so the app counts below are the app's own count of the places it holds, not a statement of everything in New Zealand.",
        "DOC's Great Walks comparison lists eleven walks: three in the North Island (Lake Waikaremoana, Tongariro Northern Circuit and the Whanganui Journey) and seven on the South Island mainland (Abel Tasman, Heaphy, Paparoa, Routeburn, Kepler, Milford and Hump Ridge), with the Rakiura Track on Stewart Island/Rakiura.",
      ], ["App counts are of the app's bundled data","Great Walks need DOC bookings","Check DOC's page for each walk"], {
        caption: "Places in KiwiCamping's bundled data by island, as of 24 August 2026. Great Walks from DOC's compare page, read 21 October 2026.",
        head: ["Island","DOC campsites","DOC huts","DOC tracks","Great Walks"],
        rows: [
          ["North Island","122","245","635","3"],
          ["South Island","165","682","814","7 on the mainland"],
        ],
      }),
      s("Rules do not change between islands", [
        "The Freedom Camping Act, the national green warrant rule and the infringement fines apply nationwide. A certified self-contained vehicle with a green warrant is needed to freedom camp on public land except where a site is designated for other vehicles, and blue stickers stopped counting on 7 June 2026. What differs is each council's bylaw and each DOC district's notices, so check the local rule for the town or district you are in.",
        "The hire company's road list applies on both islands. thl and Travellers Autobarn bar the Crown Range and Cardrona Valley road, Skippers Road and Ninety Mile Beach, and thl also bars the Coromandel north of Colville and Waikawau and ski field access roads from 1 June to 31 October.",
      ], ["Same law, different bylaws","Check the DOC district notices","Read the hire road list"]),
      s("Winter and mountain passes", [
        "NZTA's Journey Planner has posted warnings for snow on the Crown Range, Haast Pass, Lindis Pass, Arthur's Pass and Lewis Pass in a September 2025 bulletin. That is one event, not a standing rule, but it shows these South Island passes can close or need care in cold weather. The winter driving guide covers chains and checks, and the NZTA journey planner shows live conditions.",
        "North Island routes face other limits, such as the Tongariro region's alpine weather in KiwiCamping's own 14-day guide, which plans around shuttles and the alpine forecast. The passes named in the NZTA bulletin are all in the South Island, so check forecasts and NZTA's live conditions before you commit to a mountain leg in winter.",
      ], ["Check NZTA before each pass","Carry chains if you hire them","Plan flexible days in winter"]),
      s("Which island suits you", [
        "Pick the South Island if huts, tracks and Great Walks are the point: it has more of each in KiwiCamping's data and on DOC's list, with the pass roads and the ferry or one-way fee that come with a trip there. Pick the North Island for a loop that needs no ferry, such as the 14-day route in KiwiCamping's guide.",
        "A trip that has time for both islands pays for the ferry and a one-way hire, but needs about three weeks to avoid rushing. The three-week route and the two-week North Island guide show how each plays out.",
      ], ["Short trip: one island","Three weeks: both","Price the ferry and one-way fee first"]),
      s("Plan across both islands in KiwiCamping", [
        `KiwiCamping's North Island 14-day guide covers 1,306 km with 21 places, and you can save all its places in one tap, then add stops on the South Island if you cross. You can build a trip with ordered stops, dates, and the distance and drive time between them, and the data covers 287 DOC campsites and 927 DOC huts as of 24 August 2026. With no reception the campsite and hut details stay readable, and the map tiles, routing, weather and photos return when you reconnect. KiwiCamping is free to download, with in-app purchases.`,
        "The app does not book the ferry or the van. Use it to see how far apart the stops are, then price the crossing.",
      ], ["Save a whole guide at once","Check the route's total kilometres","Add the ferry day as a stop"], undefined, true),
    ],
    faq: [
      ["Do I need to take a campervan on the Cook Strait ferry to visit both islands?", "Yes. thl, which owns Maui, Britz, Apollo and Mighty, says ferry travel is required between the islands and that you book it yourself with the operator. The crossing takes about 3.5 hours and Interislander vehicle fares start from $258."],
      ["Is it cheaper to stay on one island by campervan?", "Usually, because you avoid the ferry. A return hire from the same city also avoids the one-way fee, which the thl group sets at $200 or $300 for Auckland to Christchurch or Queenstown depending on the date."],
      ["Which island has more DOC campsites?", "In KiwiCamping's bundled data as of 24 August 2026, the South Island has 165 DOC campsites and the North Island 122, and the South Island has 682 DOC huts to the North Island's 245."],
      ["Are the freedom camping rules different in the North and South Islands?", "The law and fines are national. Councils set their own bylaws and DOC publishes notices by district, so what changes is the local rule for the town or district."],
    ],
    sources: [
      { label: "Interislander: ferry FAQs", url: "https://www.interislander.co.nz/about/interislander-ferry-faqs" },
      { label: "Interislander: Cook Strait ferry fares and payment options", url: "https://www.interislander.co.nz/book/cook-strait-ferry-fares-and-payment-options" },
      { label: "Bluebridge: payment", url: "https://www.bluebridge.co.nz/payment" },
      { label: "thl: Summary of Rental Conditions, New Zealand, version 16", url: "https://thl.widen.net/content/i0uybterg6/original/NZ_2627_Direct-Summary-of-Rental-Conditions.pdf" },
      { label: "Maui: frequently asked questions", url: "https://www.maui-rentals.com/faqs" },
      { label: "Spaceships: New Zealand", url: "https://www.spaceshipsrentals.co.nz/" },
      { label: "Travellers Autobarn: Terms and Conditions New Zealand, 19 June 2026", url: "https://www.travellers-autobarn.co.nz/wp-content/uploads/2026/06/Terms-and-Conditions-New-Zealand-19th-June-2026.pdf" },
      { label: "DOC: Great Walks compared", url: "https://www.doc.govt.nz/parks-and-recreation/things-to-do/walking-and-tramping/great-walks/compare-great-walks/" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
      { label: "PGDB: self-contained vehicles, private vehicle owners", url: "https://www.pgdb.co.nz/self_contained_vehicles/private_vehicle_owners/" },
      { label: "NZTA Journey Planner: let it snow, take it slow", url: "https://www.journeys.nzta.govt.nz/traffic-bulletins/let-it-snow-take-it-slow" },
    ],
  }),

  a({
    slug: "campervan-vs-car-and-tent-new-zealand",
    publishAt: "2026-12-06",
    title: "Campervan vs Car and Tent in NZ: Costs and Rules (2026)",
    description: "A campervan needs a green warrant to freedom camp on council land; a tent follows each council's bylaw. Compare fines, DOC fees, hire prices and what each costs.",
    category: "Trip planning",
    region: "New Zealand",
    places: ["Council land","DOC campsites","Holiday parks","Hire companies"],
    imageAlt: "A small orange tent pitched on a grassy DOC campsite on Stewart Island, with campsite signs in front",
    related: ["self-contained-campervan-green-warrant","freedom-camping-rules-new-zealand","can-i-sleep-in-my-car-in-new-zealand","campervan-hire-cost-new-zealand-2026","camping-fees-new-zealand-2026"],
    intro:
      "A campervan can freedom camp on most public land only with a green self-containment warrant, including a toilet fixed in the vehicle, while a tent is governed by each council's bylaw and DOC's notices, and DOC charges the same per-person fee for a tent or a vehicle. The fines for getting it wrong are set by national regulations: $400 for freedom camping in a non-self-contained vehicle on council land and $200 for not displaying a warrant card. Facts below were read on 21 October 2026, and hire figures are the companies' own published prices.",
    sections: [
      s("What the law asks of a van and of a tent", [
        "DOC, citing section 5 of the Freedom Camping Act 2011, defines freedom camping as camping outside a designated campground within 200 m of a road or area accessible by motor vehicle, within 200 m of the sea or a harbour, or on or within 200 m of a formed road or Great Walks track. It covers motor vehicles including campervans, and tents, bivouacs and temporary structures. You can freedom camp on public conservation land except where prohibited or restricted, you cannot freedom camp in DOC scenic or recreation reserves unless a site is provided or approved, and fires are not allowed.",
        "For vehicles, the default is that you can freedom camp on public land only if the vehicle is certified self-contained with a green warrant, unless the site is designated for non-self-contained vehicles. A vehicle without it can use campgrounds, holiday parks and private property. For a tent, the law's definition applies equally, so check the council's bylaw, the council's map and DOC's notice for the area before you pitch.",
      ], ["A green warrant is needed for vans on public land","Tents follow bylaws and notices","Campgrounds are always an option"]),
      s("Fines in the 2023 regulations", [
        "The Freedom Camping (Penalties for Infringement Offences) Regulations 2023 set the infringement fee and the maximum court fine for each offence. This guide read the regulations as made, in force from 13 July 2023, and amendments since then were not checked, so confirm on legislation.govt.nz.",
      ], ["Fees are per offence","Court fines are higher","Warrant card must be displayed"], {
        caption: "Infringement fees and maximum court fines from the Freedom Camping (Penalties for Infringement Offences) Regulations 2023, as made.",
        head: ["Offence","Infringement fee","Maximum court fine"],
        rows: [
          ["Freedom camping on council land in a non-self-contained vehicle, other than where permitted","$400","$1,200"],
          ["Freedom camping in breach of a bylaw","$400","$1,200"],
          ["Not displaying a warrant card (council, conservation and LINZ land)","$200","$600"],
          ["More people than the vehicle is certified for","$400","$1,200"],
          ["Damaging, or leaving waste","$800","$2,400"],
          ["Failing to leave when told to","$600","$1,800"],
          ["Altered or fraudulent warrant card or certificate","$600","$1,800"],
          ["Freedom camping on conservation land in breach of a notice","$400","$1,200"],
        ],
      }),
      s("What each costs to set up", [
        "A green warrant needs a fixed toilet usable inside the vehicle, since portable toilets no longer qualify, plus water supply, wastewater, ventilation, sink and rubbish storage. The cost is the certifier's own inspection fee, which is not published centrally, plus a $120 levy including GST, and the warrant lasts 4 years. The blue sticker stopped counting on 7 June 2026.",
        "Hire shows the gap. Jucy's Crib is not self-contained and starts at $35 to $95 a day depending on season. Wicked Campers shows its Mystery Machine 2 and the economy car at \"from $35\" a day, and lists the Mystery Machine 2 and the Freedom Camping Aventus as certified self-contained. Travellers Autobarn's station wagon is not certified, and its Chubby, Hitop, Kuga and Hi5 are listed as certified, with a $50 fee at pick-up to use the certificate. Prices are the companies' own on 21 October 2026, and \"from\" prices have no stated season. The hire cost guide has the extras.",
      ], ["Fixed toilet is the cost driver","Hire prices are from-prices","Ask the hirer for the warrant"]),
      s("Campsite fees: the same for a tent and a van", [
        "DOC charges per person, not per vehicle or tent. Serviced unpowered or tent sites are $25 per adult and $12.50 per child, serviced powered sites $20 to $28 per adult, standard campsites $10 to $20 per adult and basic campsites are free. An unoccupied tent or vehicle left on a site is charged as two adults. The Campsite Pass is $295 for an adult for a year.",
        "A tent or a car without a green warrant therefore pays the same DOC fee as a van, and the difference is where you may sleep outside a campground. Holiday parks charge by site and booking engine, so compare their prices for your dates.",
      ], ["Fees are per person","Do not leave an empty tent on a site","Holiday park prices vary by date"]),
      s("Comfort, weather and the real trade-off", [
        "This is a judgement, not a rule: a van keeps rain off your bed and gear in a way a tent cannot, and a tent gives you a car for day trips without moving camp. At Wicked's from-prices an economy car and a certified Mystery Machine 2 both start at $35 a day, so price both for your dates. A car and tent cannot use the council land that a certified van can, and needs more nights in campgrounds, each with a fee.",
        "Choose by season and route. In summer in a sheltered region, a tent is workable. On the West Coast or in Fiordland, rain is frequent, and a van may be worth the cost. The sleeping-in-your-car guide explains why an ordinary car is not a tent or a certified van.",
      ], ["Wet routes favour a van","Short trips suit a tent","Count campground fees for either"]),
      s("Plan the nights in KiwiCamping", [
        `KiwiCamping lists 287 DOC campsites and 927 DOC huts in its bundled data (as of 24 August 2026), and you can filter by facilities such as toilets and a water supply, which matters for a van without a warrant and for a tent alike. Save the places you want, and build a trip with ordered stops, dates, and the distance and drive time between them. Details for each place are kept on the device for dead zones, while maps, routing, weather and pictures need a data connection. KiwiCamping is free to download, with in-app purchases.`,
        "The app shows DOC's notices for conservation land, not council bylaws, so check the council's map for a town.",
      ], ["Filter for toilets and water","Save a campground as a backup","Check the council map for towns"], undefined, true),
    ],
    faq: [
      ["Can I freedom camp in a tent in New Zealand?", "The Act's definition covers tents as well as vehicles, so the same 200 m rules apply. Whether you may pitch depends on the council's bylaw, DOC's notice for the area and whether the land is conservation land, so check before you pitch."],
      ["Do I need a self-contained vehicle to camp on council land?", "For a vehicle, yes: you can freedom camp on public land only if the vehicle is certified self-contained with a green warrant, unless the site is designated for non-self-contained vehicles. The fine is $400 on council land otherwise."],
      ["Is a tent cheaper than a campervan to camp?", "At DOC campsites the fee is per person, so the same for a tent or a van. A tent avoids the cost of a van or its green warrant, but cannot use council land reserved for self-contained vehicles."],
      ["How much does a green warrant cost?", "A $120 levy including GST plus the certifier's own inspection fee, which is not published centrally. The vehicle needs a toilet fixed in it, and the warrant lasts 4 years."],
    ],
    sources: [
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
      { label: "DOC: campsite facilities and fees", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/facilities-and-fees/" },
      { label: "DOC: Campsite Pass", url: "https://www.doc.govt.nz/campsite-pass" },
      { label: "Freedom Camping Act 2011 (legislation.govt.nz)", url: "https://www.legislation.govt.nz/act/public/2011/0061/latest/whole.html" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/secondary-legislation/pco-drafted/2023/136/en/2023-06-12.pdf" },
      { label: "PGDB: self-contained vehicles, private vehicle owners", url: "https://www.pgdb.co.nz/self_contained_vehicles/private_vehicle_owners/" },
      { label: "Jucy: Crib campervan", url: "https://www.jucy.com/nz/en/campervans/jucy-crib" },
      { label: "Wicked Campers New Zealand", url: "https://www.wickedcampers.co.nz/" },
      { label: "Travellers Autobarn: New Zealand campervan hire FAQs", url: "https://www.travellers-autobarn.co.nz/campervan-hire-new-zealand/faqs" },
    ],
  }),
];
