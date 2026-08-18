import { makeArticle as a, type Article, type ArticleSection } from "@/lib/article-model";

const s = (heading: string, body: string[], tips?: string[]): ArticleSection => ({ heading, body, tips });

export const planningArticles: Article[] = [
  a({
    slug: "campervan-budget-new-zealand",
    title: "How to build a New Zealand campervan budget",
    description: "Rental, fuel, camps, ferry costs and food behave differently, so price each line separately.",
    category: "Trip planning", region: "New Zealand", readTime: 4,
    places: ["Vehicle rental", "Fuel", "Campsites", "Cook Strait ferry", "Food", "Insurance excess"],
    imageAlt: "Traveller planning a New Zealand campervan budget",
    intro: "The advertised daily rate is the smallest interesting number in a campervan budget. Insurance excess, kilometre policy, the ferry, the shape of the route and how often you pay for a powered site will move the total far more than the difference between two rental companies.",
    sections: [
      s("Price the vehicle as a complete package", [
        "Compare quotes on identical dates, vehicle class, insurance excess, kilometre allowance and included equipment. A cheap headline rate with a $5,000 excess and a capped daily kilometre allowance is a different product from a slightly dearer one with a low excess and unlimited kilometres.",
        "Then add the things quoted separately: airport transfers, one-way fees, additional drivers, bedding and kitchen packs, and the cost of reducing the excess. These routinely add several hundred dollars to a fortnight and are invisible in the comparison you started with.",
      ], ["Compare excess, not just daily rate", "Check the kilometre allowance", "Add one-way and extra-driver fees"]),
      s("Understand the bond and the hold", [
        "Most operators place a hold on a credit card at pickup, and where the excess is high that hold can be substantial. It is released rather than charged, but it reduces the credit available to you during the trip, which matters if the same card is funding fuel and campsites.",
        "Check whether the operator requires a credit card in the main driver's name, because debit cards are frequently refused. Discovering this at an airport depot at 11pm is a genuinely bad start to a trip.",
      ]),
      s("Turn the route into a fuel number", [
        "Estimate the actual kilometres of your route rather than using a national average, then add ten to fifteen percent for detours, wrong turns and the drives you have not thought of yet. Multiply distance by the vehicle's litres per 100 kilometres, divide by 100, and multiply by the current price per litre.",
        "A campervan at 12 L/100 km covering 3,000 kilometres uses 360 litres, and that arithmetic dominates the difference between a $15 and a $25 campsite. Fuel is usually the second largest line in the budget and the one people underestimate most.",
      ], ["Add 10 to 15 percent for detours", "Use the vehicle's real consumption", "Fuel usually beats campsite cost"]),
      s("Correct the estimate early", [
        "Record the litres and kilometres for your first two fills and recalculate. Loaded weight, headwind, mountain roads, roof boxes and running the engine for heating all push consumption above the brochure figure, sometimes by a quarter.",
        "Remote fuel costs more, and the price varies substantially between a city and a small West Coast or East Cape town. Fill in larger centres where you can, but never pass the last station before a long gap to save a few cents.",
      ]),
      s("Budget the ferry as a fixed block", [
        "Cook Strait is a large, non-negotiable cost for any trip covering both islands, and it is priced on vehicle length and height rather than passenger count. A campervan crossing costs several times a car, and a towed trailer or bike rack changes the category again.",
        "Book it early for summer sailings, and read the change and cancellation terms before choosing the cheapest fare. A non-refundable saving disappears the first time weather or a road closure forces a different sailing.",
      ], ["Priced by vehicle size, not people", "Book summer sailings early", "Cheap fares cost more to change"]),
      s("Mix the overnight styles deliberately", [
        "A trip built entirely on free sites needs a fully self-sufficient vehicle and still ends up paying for showers, laundry and water somewhere. A trip built entirely on holiday parks costs two or three times as much and gains little on the nights when you arrive late and leave early.",
        "The practical pattern is two or three low-cost DOC or freedom nights followed by one serviced night that resets everything at once: laundry, hot showers, charging, potable water and waste. Costed that way, the serviced night usually earns its rate.",
      ]),
      s("Keep a real contingency", [
        "Hold money for the things that are not in anyone's plan: a tyre, a windscreen chip, a ferry change, a closed pass that forces a paid night, a day when the weather makes a cabin the sensible choice. A budget with no slack turns every small problem into a decision about whether to continue.",
        "Review your actual spending after three or four days and adjust while the correction is still small. The lines that drift are almost always food, coffee and paid activities rather than accommodation, and they are the easiest to bring back.",
      ], ["Hold a genuine reserve", "Review spending in week one", "Food and activities drift, not camps"]),
    ],
    sources: [
      { label: "MBIE freedom camping guidance", url: "https://www.mbie.govt.nz/immigration-and-tourism/tourism/tourism-projects/freedom-camping" },
      { label: "DOC campsite facilities and fees", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/facilities-and-fees/" },
    ],
  }),

  a({
    slug: "cook-strait-ferry-campervan-guide",
    title: "Cook Strait ferry with a campervan: booking and boarding",
    description: "Vehicle dimensions, check-in time and rough-weather flexibility matter more than the sailing time.",
    category: "Trip planning", region: "Wellington and Picton", readTime: 4,
    places: ["Wellington ferry terminal", "Cook Strait", "Picton ferry terminal", "Marlborough Sounds"],
    imageAlt: "Cook Strait ferry entering Picton Harbour",
    intro: "The ferry is what turns two island trips into one journey, and it is the least flexible thing in the itinerary. It behaves like a booked transport day rather than a scenic stop, and the two details that cause the most trouble are the vehicle dimensions you declared and what you scheduled immediately afterwards.",
    sections: [
      s("Declare the vehicle accurately", [
        "Fares are set by total length and height, and total means including everything attached: bike racks, roof boxes, kayaks, an awning that projects, a towed trailer. Under-declaring produces a fare adjustment at check-in and, on a full sailing, occasionally no space at all.",
        "Measure rather than estimate, and if you are collecting a rental, get the dimensions from the operator before booking the crossing. The gap between a car booking and a campervan booking is large enough that guessing is expensive in both directions.",
      ], ["Include racks, boxes and trailers", "Get rental dimensions before booking", "Under-declaring can cost you the sailing"]),
      s("Choose the operator and sailing sensibly", [
        "Interislander and Bluebridge both cross Cook Strait, with different terminals in Wellington, slightly different crossing times and different vessels. Neither is universally better; check which terminal suits your route and which sailing times leave you a usable day on the far side.",
        "A crossing consumes most of a day once you include the check-in window, the passage itself and the drive at either end. Treat it as a travel day rather than something you slot between two other drives.",
      ]),
      s("Read the change conditions before you save money", [
        "The cheapest fares are usually the least flexible, and Cook Strait sailings are cancelled or delayed by weather with some regularity. A saving of forty dollars is poor value if changing the booking costs more than that, which it frequently does.",
        "Where your dates have any uncertainty, particularly in winter or if a long alpine drive precedes the crossing, pay for the flexible fare and record the change deadline against the trip stop rather than trusting your memory of it.",
      ], ["Weather cancellations are routine", "Flexible fares are cheap insurance", "Note the change deadline on the stop"]),
      s("Do the jobs before the queue", [
        "Fuel, shop and empty waste tanks before you join the terminal queue. Once you are in line you are committed, the facilities are limited, and the queue can move earlier than expected. Emptying a cassette in Picton because you did not do it in Wellington wastes an hour of your first South Island morning.",
        "Arrive within the operator's stated check-in window, which is earlier than most people assume for vehicles. Have identification and the booking reference ready rather than searching for them at the booth.",
      ]),
      s("Pack what you need for the crossing itself", [
        "Vehicle deck access is restricted once underway, so anything you want during the passage has to come up with you: medication, warm layers, water, food, a charged phone, and entertainment for children. You cannot go back down for a forgotten jacket.",
        "If anyone in the party is prone to seasickness, take something before boarding rather than after the ship starts moving. Cook Strait can be genuinely rough, and the strait is at its worst in a southerly.",
      ], ["No deck access once underway", "Take medication before boarding", "Warm layers, water and chargers up top"]),
      s("Protect the day after arrival", [
        "The single most common ferry mistake is booking something expensive and unmissable immediately after the scheduled arrival. A delayed sailing then costs you a tour, a booking or a long drive done in the dark. Leave the following block soft.",
        "Avoid scheduling a long alpine drive or a difficult road straight off the ship, particularly on an evening sailing. Queen Charlotte Drive is beautiful and slow, and it is not a road to meet for the first time while tired at dusk.",
      ]),
      s("Use Picton or Wellington as a recovery night", [
        "Book a night close to the terminal on the arrival side when the sailing lands late. A short drive to a known campground beats pushing on towards a site hours away, and it means the next morning starts properly rather than as damage control.",
        "The same applies before an early sailing. A night near the terminal is worth more than a slightly better site an hour away, because a missed check-in window is a missed crossing.",
      ], ["Stay near the terminal for late arrivals", "Do not drive far after an evening sailing", "Miss the window, miss the sailing"]),
    ],
    sources: [
      { label: "NZTA journey planner", url: "https://www.journeys.nzta.govt.nz/" },
      { label: "MetService marine forecasts", url: "https://www.metservice.com/marine" },
    ],
  }),

  a({
    slug: "new-zealand-driving-day-planner",
    title: "How long should a New Zealand driving day be?",
    description: "Mountain roads, one-lane bridges and scenic stops make kilometres a poor measure of effort.",
    category: "Trip planning", region: "New Zealand roads", readTime: 4,
    places: ["West Coast", "Coromandel", "Tākaka Hill", "Milford Road", "Catlins", "Queen Charlotte Drive"],
    imageAlt: "Winding New Zealand road through hills",
    intro: "New Zealand roads punish itineraries built from distance. Two hundred and fifty kilometres is an easy morning on a straight road and a full, tiring day through coastal bends and one-lane bridges. Plan from the character of the road and the daylight available, and use kilometres only as a first sanity check.",
    sections: [
      s("Moving time is not day length", [
        "Take the routing estimate as a floor, then add everything else the day contains: fuel, groceries, coffee, roadworks, viewpoints, a short walk, photographs and the time spent finding and setting up tonight's site. Packing camp in the morning is another half hour nobody budgets for.",
        "A realistic multiplier is around one and a half times the navigation estimate for a touring day with stops. If that produces something uncomfortable, the answer is a shorter leg rather than a faster one.",
      ], ["Add 50 percent to routing estimates", "Packing camp costs real time", "Finding a site takes longer than you think"]),
      s("Three to four hours is a comfortable day", [
        "Most people who travel New Zealand for more than a week settle on three to four hours of driving as the point where the trip stays enjoyable. Beyond that, the stops get skipped, the walks get dropped, and the day becomes about arriving rather than travelling.",
        "Occasional longer days are fine, especially on the straighter stretches of Canterbury or the central North Island. Consecutive long days are what produce fatigue, and fatigue is the underlying cause of a large share of visitor crashes here.",
      ]),
      s("Some roads take far longer than they look", [
        "The Coromandel coast, Tākaka Hill, Queen Charlotte Drive, the Catlins, the Milford Road and much of the West Coast are all slower than their distances suggest, even fully sealed. Tight corners, camber, single-lane bridges and scenery that makes everyone want to stop combine to stretch a two-hour estimate well past three.",
        "Add an unfamiliar campervan and it stretches again. Width, height, braking distance and cornering all need practice, and the first two days in a large vehicle are noticeably slower than the rest of the trip.",
      ], ["Coastal roads run well over estimate", "Campervans are slower for two days", "One-lane bridges break your rhythm"]),
      s("One-lane bridges and gravel", [
        "One-lane bridges are common, particularly on the West Coast and in Northland, and the priority is signed rather than assumed: the larger arrow is your direction of priority. Some are shared with rail. Slow, look through, and be prepared to wait rather than racing to claim the bridge.",
        "Do not take an unsealed shortcut just because it is shorter. Rental agreements frequently prohibit specific gravel roads, insurance may not cover damage on them, and a road that is fine in a dry February is a different proposition after rain.",
      ]),
      s("Plan around daylight, not the clock", [
        "In midwinter the usable light in the south is roughly nine hours, and even in summer a valley loses the sun long before the official sunset. Work backwards from the time you want to be parked, not forwards from when you hope to leave.",
        "Set a turnaround time for any walk and honour it. Most of the trouble people get into on New Zealand tracks comes from continuing past the point where the return trip fits in the light remaining.",
      ], ["Work backwards from arrival time", "Valleys lose light early", "Set a turnaround time for walks"]),
      s("Dawn and dusk are the difficult hours", [
        "Low sun on a wet road removes visibility almost completely, and it arrives at exactly the times you are most likely to be driving if the day has slipped. Possums, hares and stock are also most active around dawn and dusk, and swerving for an animal causes more serious crashes than hitting one.",
        "Aim to be off the road, or at least on an easy stretch of it, during those hours. Arriving in daylight also means you can inspect the pitch, check access and level the vehicle without a head torch.",
      ]),
      s("Recover a slipping day by cutting, not accelerating", [
        "When a day runs late, remove an activity or move to your saved backup site. Driving faster to recover an itinerary is the single worst response available, and it is how tired drivers on unfamiliar roads end up in trouble.",
        "Build the plan so that dropping one thing is always possible. An itinerary where every element is essential has no way to absorb a slip, and slips are normal rather than exceptional.",
      ], ["Cut an activity, never speed up", "Keep a backup site saved", "Every day needs something droppable"]),
    ],
    sources: [
      { label: "NZTA road conditions", url: "https://www.journeys.nzta.govt.nz/" },
      { label: "NZTA driving in New Zealand", url: "https://www.nzta.govt.nz/safety/driving-safely/visiting-drivers/" },
    ],
  }),

  a({
    slug: "food-fuel-resupply-new-zealand-road-trip",
    title: "Food, fuel and resupply on a New Zealand road trip",
    description: "Major towns set the rhythm for groceries, LPG, potable water and vehicle jobs.",
    category: "Trip planning", region: "New Zealand", readTime: 4,
    places: ["Auckland", "Rotorua", "Wellington", "Christchurch", "Queenstown", "West Coast", "East Cape"],
    imageAlt: "Campervan restocking food and fuel in a New Zealand town",
    intro: "Resupply works best as a rhythm rather than a reaction. Deciding in advance which towns are your restock points keeps costs down, stops errands eating into every afternoon, and prevents the situation where the last shop before a remote night is closed and forty kilometres behind you.",
    sections: [
      s("Restock in the main centres", [
        "Do the broad shop where there is choice and dependable opening hours: Auckland, Hamilton, Tauranga, Rotorua, Napier, Wellington, Nelson, Christchurch, Dunedin, Queenstown and Invercargill all have full-size supermarkets. Specialist dietary items, pharmacy needs and replacement equipment are much easier to find there.",
        "Smaller towns are worth supporting and often have excellent local produce, but they may not stock a particular gas fitting, a specific medication or a spare part. Buy the things that would derail the trip in the larger centre, and buy the good bread and the local cheese in the small one.",
      ], ["Buy trip-critical items in big towns", "Small shops for produce, not spares", "Check Sunday and holiday hours"]),
      s("Plan meals that share ingredients", [
        "A campervan fridge is small and the storage is smaller. Two or three days of meals built around a shared set of ingredients wastes far less than a different recipe every night, and it means one shop covers the block rather than a daily search for something specific.",
        "Buy smaller quantities where refrigeration is limited or you are heading somewhere hot. A discounted bulk pack is not a saving if half of it is unsafe by day three.",
      ]),
      s("Fill up before the gaps, not after", [
        "The East Cape, the West Coast between Westport and Haast, Fiordland, the far north and inland Otago all have long stretches with limited or intermittently open fuel. Treat the last reliable station before those legs as compulsory, regardless of how much is in the tank.",
        "Opening hours matter as much as distance. A station marked on a map may be closed on a Sunday evening or unstaffed after six, and card-only pumps occasionally reject foreign cards. Do not plan to arrive on fumes anywhere.",
      ], ["Fill before remote legs, not during", "Check hours, not just distance", "Foreign cards can be rejected at pumps"]),
      s("Track your real consumption", [
        "Record litres and kilometres for the first couple of fills and work out what the vehicle actually uses. Load, headwind, mountain roads, a roof box and running the engine for heating all push a campervan well above the figure in the brochure.",
        "Once you have a real number, you can convert any leg into litres and money in your head, which turns fuel from a source of anxiety into a planning input.",
      ]),
      s("Water: know which tap is which", [
        "Fill drinking water only from taps marked potable. Not every tap at a campground or reserve is safe, and some are explicitly non-potable wash water. Where a supply is untreated or uncertain, boil or filter it rather than assuming it is fine because it looks clean.",
        "Keep the drinking hose physically separate from anything used near a dump station, store it so the ends do not touch the ground, and wash your hands after handling waste equipment. This single habit prevents the most common cause of illness on a self-contained trip.",
      ], ["Only fill from marked potable taps", "Keep the drinking hose separate", "Boil or filter untreated supply"]),
      s("LPG, gas bottles and vehicle jobs", [
        "Check the fitting and refill or swap arrangements for your bottle before it runs out, because not every service station handles every type and swap schemes vary. A rental will usually come with a specific arrangement, so ask at pickup rather than discovering it mid-trip.",
        "Group vehicle jobs into the same town stop: fuel, LPG, a tyre pressure check, water, dump station and the supermarket. One well-chosen stop can clear the whole list in under an hour, where the same tasks spread across three towns eat a day.",
      ]),
      s("Save the service stops into the plan", [
        "Dump stations, potable water, LPG and laundries are worth saving alongside your overnight stops, with a note about opening hours. A dump station that closes at five is the same as no dump station when you arrive at six.",
        "Where a remote leg is coming, identify the specific stop you will use rather than assuming one will appear. Planning a dump or a fill on the way to somewhere is easy; making a special trip back for it is not.",
      ], ["Save services as stops with hours", "Name the specific stop before remote legs", "One town stop, whole list cleared"]),
    ],
    sources: [
      { label: "NZTA journey planner", url: "https://www.journeys.nzta.govt.nz/" },
      { label: "DOC camping responsibly", url: "https://www.doc.govt.nz/parks-and-recreation/know-before-you-go/camping-responsibly/" },
    ],
  }),
];
