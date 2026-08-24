import { makeArticle as a, type Article, type ArticleSection } from "@/lib/article-model";

const s = (heading: string, body: string[], tips?: string[]): ArticleSection => ({ heading, body, tips });

export const appArticles: Article[] = [
  a({
    slug: "plan-trip-kiwicamping",
    title: "How to plan a complete trip in KiwiCamping",
    description: "Order stops, see route distance and keep dates, notes and to-dos beside the itinerary.",
    category: "App guides", region: "KiwiCamping", readTime: 4,
    places: ["Trip planner", "Route distance", "Trip notes", "To-do list", "Calendar sync"],
    imageAlt: "KiwiCamping trip planner on an iPhone",
    intro: "A useful trip is more than a line between saved pins. The planner keeps the route, distance, dates, notes and small jobs in one place, so the plan survives the moment it has to change, which on a New Zealand road trip is usually somewhere around day three.",
    sections: [
      s("Build the skeleton from fixed nights", [
        "Start with the dates you cannot move. A Cook Strait sailing, a booked Great Walk hut, a campground reserved months ago in a beach town, a flight out of Queenstown: these are the pins the rest of the trip has to fit around. Create the trip, add those first, and treat everything between them as adjustable.",
        "This ordering matters more than it sounds. Travellers who build a trip chronologically from day one tend to discover on day nine that the ferry does not line up, and by then half the bookings are non-refundable. Anchoring the hard dates first means every later change is cheap.",
      ], ["Ferry and Great Walk dates first", "Everything between them stays flexible", "Cheap changes beat rebooked ferries"]),
      s("Put the stops in driving order", [
        "Add the places you have saved, then arrange them in the sequence you will actually drive. The planner calculates route distance across the ordered stops, which is where an optimistic itinerary usually falls apart: a day that looked reasonable on a map turns out to be six hours before a single stop, walk or meal.",
        "Split any leg that leaves no room for the place itself. As a rough working figure, three to four hours of driving is a comfortable day on New Zealand roads, and considerably less on the Coromandel, the Catlins, Queen Charlotte Drive or anything with gravel. Distance underestimates these roads badly.",
      ]),
      s("Attach the details to the stop, not a document", [
        "Confirmation numbers, arrival windows, gate codes, the warden's phone number, which side of the river the entrance is on: these belong on the individual stop rather than in one long note at the top of the trip. On the road you are looking for one fact at a time, usually while tired.",
        "Short notes beat long ones. \"Gate locked after 9pm, code 4417\" is useful at 8:45pm. A paragraph describing the whole campground is not. Add the note when you book, while the detail is in front of you, rather than trying to reconstruct it later.",
      ], ["One fact per note", "Add notes at booking time", "Gate codes and arrival windows matter most"]),
      s("Use the to-do list for the jobs that strand you", [
        "Fuel before a remote leg, groceries before the last supermarket, water before a dry stretch, a dump station before a run of freedom sites, chains before an alpine pass in winter. These are the tasks whose absence ends a day badly, and they are easy to forget precisely because they are routine.",
        "Keep the list beside the itinerary rather than in a separate app. Mark items complete only when they are actually done, because a half-filled water tank ticked off optimistically is worse than an unticked one.",
      ]),
      s("Change the route without rebuilding it", [
        "Weather closes a pass, a campground is full, someone is too tired to drive, or a place turns out to deserve another night. Reorder or replace the affected stop and the rest of the itinerary stays intact, along with every note and booking reference attached to the stops you did not touch.",
        "This is the practical advantage over a browser-tab plan. Rearranging a trip that lives across fifteen tabs and a text thread means reconstructing it; rearranging an ordered list means dragging one stop. The distance recalculates and you can see immediately whether the new shape is still drivable.",
      ], ["Move one stop, keep the rest", "Distance recalculates automatically", "Check the new day is still drivable"]),
      s("Prepare the trip for no reception", [
        "Open the critical stops before you leave coverage. Core place details are bundled and stay readable offline, but live routing, current weather, provider booking pages and some map imagery all need a connection, and the West Coast, Fiordland, the East Cape and inland Otago will take that away without warning.",
        "Screenshot anything that would be expensive to lose: the booking confirmation, the access note, the phone number for the campground. A screenshot survives a flat battery restart, a lost session and an app you have not opened in three days.",
      ]),
      s("Send the itinerary to Calendar", [
        "Trip dates can be pushed to Calendar so the plan appears alongside flights, ferry bookings and anything else already in your schedule. This is most useful for travellers coordinating with people who are not using the app, since a shared calendar answers the where-are-you-tonight question without a conversation.",
        "Keep the calendar copy as a summary rather than the source of truth. The trip itself holds the notes, order and alternatives; the calendar just needs enough for someone else to follow along.",
      ], ["Calendar is a summary, not the plan", "Useful for people not using the app", "Keep the trip as the source of truth"]),
    ],
  }),

  a({
    slug: "save-places-kiwicamping",
    title: "How to save and organise places in KiwiCamping",
    description: "Keep confirmed stays, strong alternatives and future ideas separate without losing them on the map.",
    category: "App guides", region: "KiwiCamping", readTime: 4,
    places: ["Saved places", "Custom lists", "Smart collections", "Trip options", "iCloud sync"],
    imageAlt: "Saved place lists in KiwiCamping",
    intro: "Saving every interesting pin into one pile just moves the search problem somewhere else. A small amount of structure, decided early, keeps thousands of campsites, huts and holiday parks usable across several trips instead of becoming a list you stop opening.",
    sections: [
      s("Separate saved places by intent", [
        "The useful division is not by region but by what you intend to do with the place. One list for the trip you are actually taking, one for realistic backups within reach of that route, and one for ideas you may never use. Mixing those three is what makes a saved list unusable at 7pm when a campground is full.",
        "The backup list earns its place repeatedly. Knowing you have two legal alternatives within forty minutes changes how you handle a full site, and it is the difference between a calm decision and an hour of driving while the light goes.",
      ], ["Trip, backups, ideas: three lists", "Backups within reach of the route", "Decide the structure before you save"]),
      s("Use smart collections for state", [
        "Liked, Visited, Want to Visit and Starred update themselves as you mark places, so they track status rather than plans. Visited is more useful than it first appears on a long trip: it stops you researching somewhere twice and gives you a real record of where you have been.",
        "Pins and All Saved give you the wide view when you cannot remember which list something went into. Treat these as the safety net rather than the filing system.",
      ]),
      s("Name lists so they still make sense later", [
        "\"South Island\" tells you nothing in four months. \"South Island Feb, powered sites only\" tells you what you were solving for and whether it is reusable. Naming by region, season, vehicle or trip means the list still has meaning when you return to it.",
        "Add a short description where the app allows it. The reason you saved a place is the part that fades fastest, and it is usually the part that mattered: sheltered from the southerly, good for a big rig, quiet midweek.",
      ], ["Name by region, season and vehicle", "Record why you saved it", "Vague names age badly"]),
      s("Save from the place details, not the map", [
        "Open the place first. Access notes, facilities, fee structure and the source of the information are what determine whether it suits your setup, and none of that is visible from a pin. Saving from the map produces a list of names; saving from the details produces a list of options.",
        "Add a note about the specific thing that made it worth keeping. \"Only site here with a dump point\" or \"gravel access, not for a low car\" is worth more than the listing itself when you are choosing between five saved places.",
      ]),
      s("Check prices as planning figures", [
        "Where a reported cost is shown, you can read it in your own currency to compare a basic DOC site against a holiday park without doing arithmetic at every stop. Treat converted figures as planning aids: they are mechanical conversions of a reported amount, not a quote from the provider or your bank.",
        "Confirm the actual rate with the provider before a price decides your route, and check what the number covers. DOC fees are commonly per adult per night, while commercial parks may quote per site, so two similar-looking numbers can mean very different totals for a family.",
      ], ["Converted prices are planning figures", "DOC charges per adult, parks often per site", "Confirm before a price decides the route"]),
      s("Let saved places sync across devices", [
        "With iCloud available and enabled, saved states, collections and trip data sync privately across your devices. The practical benefit is planning on a larger screen at home and having the same lists on the phone in the van, without exporting anything.",
        "It also means a replaced or reset phone does not take the trip with it, which matters more on a long trip than it does on a weekend away.",
      ]),
      s("Prune the list after each trip", [
        "Mark what you visited, delete the options that turned out not to suit you, and keep the access or timing notes that will be true next time. Ten minutes at the end of a trip is what stops the list becoming three hundred pins you no longer trust.",
        "Move the stops you have actually committed to into a trip. Lists are for possibilities; the planner is for the journey, and keeping the two separate is what makes either of them useful.",
      ], ["Prune while the trip is fresh", "Keep notes that stay true", "Lists hold options, trips hold plans"]),
    ],
  }),

  a({
    slug: "kiwicamping-filters-guide",
    title: "Find the right campsite faster with KiwiCamping filters",
    description: "Narrow by place type, facilities, price and access without hiding every workable alternative.",
    category: "App guides", region: "KiwiCamping", readTime: 4,
    places: ["Campsites", "Huts", "Freedom camping", "Holiday parks", "Dump stations"],
    imageAlt: "KiwiCamping place filters on an iPhone",
    intro: "Filters are most useful when each one represents a genuine deal-breaker rather than a preference. Over-filtering is the common mistake: it produces three results, hides the sensible alternative twenty minutes away, and gives a false impression that an area has nothing in it.",
    sections: [
      s("Start with place type and area", [
        "Decide what kind of night you are looking for before you narrow anything else. A DOC campsite, a backcountry hut, a designated freedom camping area, a holiday park and a cabin are different products with different rules, prices and booking systems, and mixing them produces a list you have to re-sort mentally.",
        "Then position the map along the route you are actually driving. Searching the visible area keeps the results relevant to the day, and it stops a well-known place ninety minutes off the route from dominating a shortlist it does not belong on.",
      ], ["Choose the type of night first", "Search along the route, not the region", "Famous places are often the wrong detour"]),
      s("Add only the conditions that would rule a place out", [
        "Toilets, drinking water, power, dog access, vehicle size, price band: apply these when their absence genuinely ends the option. If you have a full water tank, filtering for potable water removes places that would have been fine and may be quieter for it.",
        "Work down from the hardest constraint. Vehicle access and certification requirements eliminate the most options and are the least negotiable, so applying them first leaves a shorter, more honest list to work through.",
      ]),
      s("Understand what a blank field means", [
        "Missing data means unknown, not absent. A place with no recorded shower may have one that was never logged, and filtering strictly on facilities will silently discard it. This is the single most common way travellers convince themselves a region has nothing available.",
        "When a filtered search comes back nearly empty, loosen the least important condition rather than concluding the area is unsuitable. The results usually change substantially with one filter removed.",
      ], ["Blank means unknown, not missing", "Loosen one filter before giving up", "Strict filters hide good options"]),
      s("Filter differently for a freedom camping night", [
        "A freedom camping search is a legal question rather than a comfort one. What matters is whether the site is designated, whether it requires a certified self-contained vehicle, and what the stay limit is. Facilities are secondary because there frequently are none.",
        "Check the certification requirement against your own warrant before you rely on a site. The requirement attaches to the vehicle, and enforcement is against the vehicle, so a mismatch is expensive regardless of how careful you were about everything else.",
      ]),
      s("Search for services, not just places to sleep", [
        "Dump stations, potable water, rubbish disposal and fuel are trip-critical in their own right, and they are worth filtering for as a separate task rather than hoping they appear near tonight's camp. Planning a dump stop on the way somewhere is much easier than making a special trip once a tank is full.",
        "The same applies to a laundry and a hot shower after a wet stretch. Choosing a stop because it solves three jobs at once is usually better value than choosing the cheapest pin and driving back for each of them.",
      ], ["Plan dump stops on the way", "Water and fuel deserve their own search", "One stop that solves three jobs wins"]),
      s("Always keep a backup visible", [
        "Save the preferred place and at least one legal alternative before you leave reception. A filter set tight enough to return exactly one result has removed your fallback, and full campgrounds on a summer evening are normal rather than unlucky.",
        "The backup does not need to be as good. It needs to be legal, reachable in daylight and open. That is a much easier standard to meet, and it is what stops a tired driver making a poor decision after dark.",
      ]),
      s("Reset filters between regions and trip types", [
        "The requirements for a hut walk, a powered laundry night in town and a certified freedom camping stop share almost nothing. Filters left on from yesterday are a common reason a search looks unexpectedly empty today.",
        "Clear the set whenever the trip changes character, particularly when you cross from the North Island to the South, from coast to alpine country, or from a touring stretch into a few days based in one town.",
      ], ["Clear filters when the trip changes", "Yesterday's filters cause today's empty search", "Hut, town and freedom nights differ completely"]),
    ],
  }),

  a({
    slug: "kiwicamping-offline-data-guide",
    title: "What works offline in KiwiCamping",
    description: "Keep the bundled place directory and core details available when reception disappears.",
    category: "App guides", region: "KiwiCamping", readTime: 4,
    places: ["Offline places", "Place details", "Saved lists", "Trip plans", "West Coast", "Fiordland"],
    imageAlt: "KiwiCamping place details available without signal",
    intro: "Offline means the place data stays useful outside coverage. It does not mean every service works without a network, and knowing exactly which half is which is the difference between a well-prepared remote leg and finding out at the wrong moment.",
    sections: [
      s("What stays available without reception", [
        "The app bundles more than 6,500 New Zealand place records, covering campsites, backcountry huts, holiday parks and other bookable stays, designated freedom camping areas, dump stations and day-use places. Core details travel with the app rather than being fetched, so they remain readable when the signal does not.",
        "Saved lists and trip information stay usable too. You can review the plan, read the notes attached to each stop and check what you decided about a place, which is normally exactly what you need when you are deciding whether to push on or stop.",
      ], ["6,500+ place records bundled", "Saved lists and trips stay readable", "Details travel with the app"]),
      s("What genuinely needs a connection", [
        "Weather forecasts, live routing and directions, external booking pages, provider websites and some map imagery all require connectivity. None of this removes the stored place record, but it does mean the answer to \"is it going to rain\" and \"is there a bed free\" is not available out there.",
        "Street View imagery also needs a connection, which is worth knowing because it is most useful precisely when you are approaching an unfamiliar entrance, and that is often where coverage ends.",
      ]),
      s("Where in New Zealand this actually bites", [
        "The West Coast between Westport and Haast, most of Fiordland, the East Cape, the Catlins, inland Otago and large parts of the central North Island have long stretches with no usable mobile coverage. These are not remote outposts; they are on the main tourist routes, and they are exactly where you will be choosing a campsite.",
        "Coverage maps also flatter reality. A carrier may show service in a valley where the signal disappears behind the first ridge, and roaming SIMs frequently perform worse than local ones. Plan for less coverage than the map promises.",
      ], ["Main tourist routes lose coverage", "Coverage maps are optimistic", "Roaming SIMs perform worse"]),
      s("Do the live checks before you lose signal", [
        "Build a habit around the last town with reception: check the forecast for the next two days, confirm any booking, look at road conditions and alerts, and open the place records for tonight and tomorrow so they are loaded and familiar.",
        "Screenshot the things that would cost you if they vanished. Booking confirmations, gate codes, the campground's phone number and any access instruction are worth a screenshot each, because a screenshot needs no app, no session and no signal.",
      ]),
      s("Battery is part of offline planning", [
        "An offline app is no use on a dead phone, and the phone is doing more work than usual on a road trip: navigation, photographs, weather checks and searching for signal, which drains a battery faster than almost anything else. Enable low power mode before it becomes urgent.",
        "Carry a charged power bank and a cable that actually works in the vehicle. Cold nights reduce battery capacity noticeably, so a phone that seemed fine at dinner can be flat by morning at an alpine site.",
      ], ["Searching for signal drains fast", "Carry a charged power bank", "Cold nights cut battery capacity"]),
      s("The listing does not outrank the sign", [
        "Offline data tells you what was true when the record was made. Rangers close sites, councils change bylaws, floods take out access roads and fire restrictions arrive quickly. On arrival, the sign, the barrier and the land manager decide, and they always outrank a cached record.",
        "If what you find contradicts what you saved, follow what is in front of you and move to your backup. That is the whole reason for having identified one before you left coverage.",
      ]),
      s("Offline apps are not a safety system", [
        "For anything safety-critical, carry a downloaded or paper topographic map and know how to use it. A camping directory is not a navigation tool, and phone GPS with no map context has walked people into genuine trouble in New Zealand backcountry.",
        "For remote walking or back-road driving, hire a personal locator beacon. They cost very little for a trip, work where phones do not, and are the single item most likely to change the outcome of a serious problem.",
      ], ["Carry a real topo map", "Hire a PLB for remote legs", "A directory is not a navigation tool"]),
    ],
  }),

  a({
    slug: "kiwicamping-weather-look-around",
    title: "Use weather and Street View before choosing a stay",
    description: "Compare the forecast and road environment with the actual campsite decision.",
    category: "App guides", region: "KiwiCamping", readTime: 4,
    places: ["Weather at the stay", "Street View", "Access road", "Nearby services", "MetService"],
    imageAlt: "Weather and place preview in KiwiCamping",
    intro: "A pin tells you where a place is. It does not tell you that the site is a shingle bank fully exposed to a southerly, that the access is a steep single-lane gravel climb, or that the entrance is easy to miss in the dark. Weather and Street View fill in the parts that decide whether a night is comfortable.",
    sections: [
      s("Check the forecast for the site, not the region", [
        "New Zealand weather varies dramatically over short distances. A forecast for the nearest town can be genuinely wrong for a campsite twenty minutes away on the other side of a range, and the difference between a sheltered valley and an exposed lake edge is not a detail.",
        "Read the parts that affect a night outdoors rather than the headline icon. Wind speed and direction, overnight minimum temperature and rainfall totals matter far more to how you sleep than whether the daytime symbol is a cloud or a sun.",
      ], ["Wind and overnight lows decide comfort", "Town forecasts mislead for nearby sites", "Read totals, not the icon"]),
      s("Wind is usually the deciding factor", [
        "Lakeshores and exposed coasts amplify wind, and it commonly rises through the evening rather than dropping. A tent that is fine when you pitch it at five can be a serious problem at midnight, and awnings left out in a rising wind are one of the most common ways campers damage a vehicle.",
        "Where the forecast is strong, choose shelter over the view. A pitch behind a bank or a hedge with no outlook produces a much better night than a photogenic site broadside to a southerly.",
      ]),
      s("Use official sources for safety decisions", [
        "An in-app forecast is context for a comfort decision. For safety, use MetService warnings, Civil Defence advice, NZTA road conditions and DOC alerts, which is where severe weather, road closures, flooding and track warnings actually appear.",
        "Check these while you still have signal, and check them again close to departure on any day involving an alpine pass, a river crossing, an exposed coast or a forecast that has been shifting.",
      ], ["MetService for warnings", "NZTA for road conditions", "Recheck before alpine passes"]),
      s("Preview the arrival with Street View", [
        "Where Street View imagery exists, it shows you the entrance, the road width, the surface and the surroundings before you commit a large vehicle to it. This is genuinely valuable for holiday parks in unfamiliar towns, where the turn is often unmarked and the street is narrower than expected.",
        "It is equally useful for spotting what a listing will not tell you: that a site backs onto a main road, sits beside a rail line, or that the only access is a steep gravel descent you would rather not reverse out of.",
      ]),
      s("Treat imagery as old, because it is", [
        "Street View imagery can be several years out of date. Roadworks, slips, new gates, changed signage and closed entrances will not appear, and in a country where a single storm can rearrange a West Coast road, that gap matters.",
        "Use it to build an expectation, not a guarantee. Signs, barriers and conditions on arrival decide, and if the ground contradicts the imagery, the ground is right.",
      ], ["Imagery can be years old", "Slips and gates will not show", "The ground always wins"]),
      s("Look at what is around the site", [
        "The better camp is often the one that solves tomorrow's jobs. Check what sits nearby: fuel, a supermarket, a dump station, potable water, a laundry. A slightly less scenic site next to the services you need can save an hour of doubling back in the morning.",
        "Look at the exit as well as the entrance. If tomorrow starts with a long drive or an early ferry, a site that puts you on the right side of town is worth more than one with a better outlook.",
      ]),
      s("Save the preview into the plan", [
        "When the weather and the imagery have told you something useful, put it on the stop as a note. \"Exposed to southerly, take the back row\" or \"entrance is 200 m past the bridge, easy to miss\" is exactly the kind of detail that is obvious now and gone in a week.",
        "Save the nearby service you identified as its own stop with a note about opening hours. A dump station you cannot use because it closed at five is the same as no dump station at all.",
      ], ["Write what you learned onto the stop", "Note the entrance if it is hard to find", "Check service opening hours"]),
    ],
  }),

  a({
    slug: "kiwicamping-currency-place-costs",
    title: "See reported place costs in your own currency",
    description: "Use consistent conversions to compare stays, then confirm the amount charged by the provider.",
    category: "App guides", region: "KiwiCamping", readTime: 4,
    places: ["New Zealand dollars", "Selected currency", "Reported fees", "Provider prices", "DOC fees"],
    imageAlt: "KiwiCamping price shown in a selected currency",
    intro: "Travellers budget in the currency they think in, while every New Zealand campground charges New Zealand dollars. Showing reported costs in a familiar currency removes the mental arithmetic from every comparison, as long as nobody mistakes a conversion for a quote.",
    sections: [
      s("Pick the currency your budget is in", [
        "Choose the currency you are actually planning with, not the one your card is issued in if those differ. The point is to compare a basic DOC site, a holiday park pitch and a cabin on the same scale, quickly, at the moment you are choosing between them.",
        "Consistency is what makes it useful. Converting every reported amount the same way means the relative differences are reliable, even where the absolute figure is approximate.",
      ], ["Use the currency you plan in", "Relative comparison is the point", "Same method for every place"]),
      s("Understand what a converted figure is", [
        "It is a mechanical conversion of a reported price using a dated reference rate. It is not a live foreign exchange quote, and it is not what your bank will charge. Cards apply their own rates and frequently add a foreign transaction fee, so the amount that leaves your account will differ.",
        "Treat converted amounts as planning figures accurate enough to choose between options, and never as the number to budget to the cent. For the actual cost, look at the New Zealand dollar figure and what your card charges.",
      ]),
      s("Check what the price actually covers", [
        "This is where most budgeting errors happen. DOC campsite fees are commonly charged per adult per night, while commercial holiday parks may charge per site with a stated occupancy, or a base rate with extra guests added. Two similar numbers can mean very different totals for a family of four.",
        "Also check whether power, showers, linen and booking fees are included or added. A cabin quoted without linen and a cabin quoted with it are not the same product, and the gap is usually larger than the difference in headline rate.",
      ], ["DOC charges per adult", "Parks often charge per site", "Check power, linen and booking fees"]),
      s("Confirm before a price changes your route", [
        "Reported fees move with season, guest numbers, vehicle type, age category and demand. Before a price decides where you drive, open the official source or contact the provider and confirm the current rate for your exact dates and party.",
        "For DOC places specifically, check whether the site is bookable or first-come, and whether a Campsite Pass applies. A pass is a payment mechanism rather than a reservation, and confusing the two produces an unpleasant arrival at a full campground.",
      ]),
      s("Compare the total night, not the nightly rate", [
        "Add everything the stop involves: the site fee, power, showers, laundry if you need it, booking charges and the fuel to get there. A campsite twenty minutes off the route is not cheaper than a slightly dearer one you drive past.",
        "A central holiday park can also remove costs that never appear on the campsite line, like town parking or an extra trip in for groceries. Comparing the total makes those visible.",
      ], ["Include the fuel to reach it", "Add power, showers and fees", "Central sites can remove other costs"]),
      s("Keep a reserve in New Zealand dollars", [
        "Hold enough local currency for the things that do not respect a plan: a deposit, a closed road that forces a paid night, a tyre, a ferry change. Budgets that assume every night will be a free or low-cost site have no room for the day that goes wrong.",
        "A practical approach is to plan for a paid night more often than you expect to take one. If you do not need it, the money stays; if you do, the decision is easy rather than painful.",
      ]),
      s("Track spending for the first few days", [
        "Compare what you actually spend against what you planned over the first three or four days, then adjust. The lines that drift are almost always food, coffee and small paid activities rather than accommodation, and they are also the easiest to correct early.",
        "Catching a twenty percent overrun in week one means trimming a few meals out. Discovering it in week four means cancelling the part of the trip you most wanted to do.",
      ], ["Check spending in the first few days", "Food and coffee drift, not campsites", "Early correction is cheap"]),
    ],
  }),
];
