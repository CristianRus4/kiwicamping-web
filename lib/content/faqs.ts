/**
 * Two questions per guide, in the words people search them, answered in two or three sentences.
 *
 * These are the guide's own questions, not the homepage's: a site that answers "what is
 * KiwiCamping?" in twelve FAQPage blocks is competing with itself, so nothing here repeats a
 * homepage question. Road trip guides carry none. An itinerary is not a question-shaped search, and
 * Google points FAQ markup at pages that answer questions.
 *
 * They live in one file rather than inside each article record so the whole set can be read, and
 * repetition spotted, in one screen. `lib/site.ts` attaches them by slug.
 *
 * Answers stay at the level the guide can stand behind. Where a number or a rule would date, the
 * answer says what governs it and sends the reader to the guide or the official source, which is the
 * same standard the articles themselves hold to.
 */
export const articleFaqs: Record<string, readonly (readonly [string, string])[]> = {
  // --- Camping guides -------------------------------------------------------
  "doc-huts-new-zealand-guide": [
    ["Do you need to book a DOC hut?", "It depends on the category. Great Walk and Serviced huts on popular tracks are booked and paid for in advance, often months ahead in summer. Standard and Basic huts generally work on hut tickets or a Backcountry Hut Pass with no booking, and a bunk is never guaranteed."],
    ["What is actually provided in a backcountry hut?", "Usually bunks with mattresses, a water supply of some kind and a toilet. Cooking facilities, heating and lighting vary by category and many huts have none, so carry a stove, fuel and a light regardless of what the listing says."],
  ],
  "winter-camping-new-zealand": [
    ["Can you camp in New Zealand in winter?", "Yes, and it is the quietest time of year on the road. The limits are practical rather than legal: some DOC campsites and alpine roads close or become chain-only, daylight is short, and a van without insulation or a heater gets unpleasant fast."],
    ["Which parts of New Zealand are mildest in winter?", "The upper North Island stays the warmest, and Northland and the Coromandel stay campable all year. Central Otago and the Mackenzie country get the hardest frosts, and the West Coast stays mild but very wet."],
  ],
  "where-to-camp-in-new-zealand": [
    ["What are the different types of camping in New Zealand?", "Broadly five: DOC campsites, backcountry huts, commercial holiday parks, freedom camping areas set by local councils, and private or farm stays. They differ in price, facilities and what vehicle they will accept, and the rules attached to each are set by different bodies."],
    ["Can you just pull over and camp anywhere?", "No. Camping outside a designated area is restricted almost everywhere and enforced with instant fines in many districts. What is allowed depends on the local council bylaw and on whether your vehicle is certified self-contained."],
  ],
  "freedom-camping-new-zealand-guide": [
    ["Is free camping legal in New Zealand?", "In designated areas, yes. Free camping is legal where a council permits it and illegal where it does not, which is why the same layby can be fine in one district and a fine in the next. The site signage is the authority, not a map."],
    ["Do you need a self-contained vehicle to camp for free?", "For a large share of free sites, yes. Many councils restrict free camping to certified self-contained vehicles, and since the 2023 changes that certification requires a fixed toilet. Non-self-contained camping is limited to sites with toilets nearby, where it is allowed at all."],
  ],
  "doc-campsites-new-zealand-guide": [
    ["How much does a DOC campsite cost?", "It follows the category. Basic sites are free or close to it, Standard and Scenic sites sit in the low tens of dollars, and Serviced sites with showers and powered options cost more. DOC charges per adult per night rather than per site, which changes the total for a family."],
    ["Do DOC campsites need to be booked?", "Some do and some do not. Serviced and Scenic campsites in high-demand areas take bookings and fill over summer, while many Basic and Standard sites are first-come. Check the individual site before relying on arriving late."],
  ],
  "holiday-parks-new-zealand-guide": [
    ["What is the difference between a holiday park and a campsite?", "A holiday park is a commercial site with powered sites, showers, kitchens, laundry and usually cabins, priced per site or per person. A DOC campsite is public conservation land with far fewer facilities and a much lower fee."],
    ["Is it worth joining a holiday park membership scheme?", "It depends how many nights you will spend in one. The discount schemes run by the main chains generally pay for themselves within a handful of nights, which suits a long trip and rarely suits a weekend."],
  ],
  "scenic-campsites-new-zealand": [
    ["Which New Zealand campsites have the best views?", "The strongest are concentrated where the road meets water or mountains: the Catlins and Fiordland in the south, the Coromandel and Bay of Islands in the north, and the lake country around Tekapo and Wānaka. This guide lists them region by region."],
    ["Do scenic campsites need booking?", "The well-known ones do, and in January the good ones go months ahead. Many of the quieter scenic sites are still first-come, which is where arriving early in the afternoon rather than at dusk makes the difference."],
  ],

  // --- Rules & safety -------------------------------------------------------
  "doc-campsite-rules": [
    ["What are the rules at a DOC campsite?", "Pay the fee for every adult, camp only on marked sites, take all rubbish out, use the toilets provided and keep noise down after dark. Fires, dogs and generators are restricted or banned depending on the site, and the on-site signs override anything you read beforehand."],
    ["Can you stay more than one night at a DOC campsite?", "Usually yes, though a maximum stay applies at busy sites and is posted at the entrance. Where a site is heavily booked over summer, the limit is enforced."],
  ],
  "doc-hut-rules-etiquette": [
    ["Can you be turned away from a full DOC hut?", "On a bookable hut, yes: a bunk is only yours if you booked it. On a first-come hut nobody can be turned out, which is exactly why the etiquette matters and why you should always carry a tent or bivvy on a popular track."],
    ["What are you expected to do before leaving a hut?", "Sweep the floor, replace any firewood you burned, take every piece of rubbish with you and fill in the hut book. The hut book entry matters beyond courtesy, because it is what search and rescue reads if someone is reported overdue."],
  ],
  "dogs-camping-new-zealand": [
    ["Can you take a dog camping in New Zealand?", "In some places. Dogs are banned from almost all national parks and most conservation land because of the risk to native birds, and kiwi live in places that look nothing like a sanctuary. Holiday parks and a subset of council reserves do allow them."],
    ["Where are dogs banned in New Zealand?", "As a working rule: national parks, most DOC land, all kiwi habitat and most regional bird reserves. Where a dog is allowed on conservation land it is usually under a permit and always on a lead."],
  ],
  "kauri-dieback-camping-travel": [
    ["What is kauri dieback and why does it matter to campers?", "It is a soil-borne disease that kills kauri and has no cure. It moves in a pinch of dirt on a boot or a tyre, which makes visitors the main way it spreads between forests."],
    ["How do you clean gear for kauri dieback?", "Scrub all soil off boots, poles, tyres and dog paws before and after every visit, then use the disinfectant stations at track entrances. Removing the soil is the part that works, and disinfectant on a muddy boot does nothing."],
  ],
  "new-zealand-biosecurity-camping-gear": [
    ["What camping gear has to be declared at the New Zealand border?", "Tents, boots, hiking poles, bikes and anything else that has touched soil or fresh water overseas, along with food, seeds and wooden items. Declaring costs nothing; failing to declare carries an instant fine."],
    ["How should you prepare gear before flying to New Zealand?", "Clean it before you pack. Soil removed from boots and tent pegs at home, and a bike or a pack dried and brushed, is the difference between a two-minute inspection and having your gear treated or confiscated."],
  ],
  "sandflies-new-zealand-camping": [
    ["Where are sandflies worst in New Zealand?", "The West Coast, Fiordland and the wetter parts of the south, particularly near water at dawn and dusk. They are almost absent in dry inland country and on windy open coast."],
    ["What actually works against sandflies?", "Covered skin and a repellent containing DEET or picaridin, reapplied. They cannot fly well in wind or in an enclosed tent, so choosing an exposed site and keeping the mesh shut does more than any spray."],
  ],
  "new-zealand-severe-weather-camping": [
    ["How much warning do New Zealand storms give?", "Often less than a day. Weather here can turn from settled to severe in hours, particularly on the West Coast and in the exhausted alpine passes, so a forecast checked yesterday is not a plan."],
    ["What should you do if a severe weather warning is issued while camping?", "Move off riverbanks, beaches and under trees, and get to a town or a sheltered formal campground rather than sitting it out. Road closures follow storms quickly, so leaving early is usually the only option you get."],
  ],
  "earthquake-tsunami-camping-new-zealand": [
    ["What should you do in an earthquake while camping in New Zealand?", "Drop, cover and hold on, then check where you are. If you are on the coast and the shaking was long or strong enough that standing was hard, do not wait for an official warning."],
    ["When should you evacuate a coastal campsite for a tsunami?", "Long or strong, get gone: if an earthquake lasts more than a minute or makes it hard to stand, move inland or to high ground immediately and on foot if the roads are jammed. Official warnings can arrive after the wave for a local source."],
  ],
  "volcanic-safety-new-zealand-travel": [
    ["Is it safe to camp near New Zealand's volcanoes?", "Generally yes, at the normal alert levels, and Tongariro and Ruapehu are among the most visited places in the country. GeoNet publishes the alert level for each volcano, and access restrictions follow it."],
    ["What do the volcanic alert levels mean for a trip?", "Level 0 to 2 covers everything from dormant to minor unrest, with tracks usually open and closer approaches sometimes restricted. From level 3 upward, eruption is under way and exclusion zones are enforced, which can close roads and huts at short notice."],
  ],
  "river-crossing-safety-new-zealand": [
    ["When is a New Zealand river unsafe to cross?", "If it is discoloured, you cannot see the bottom, you can hear boulders moving, or the water is above the knees and pushing. River crossings are one of the most common causes of death in the New Zealand backcountry and the decision is almost always to wait."],
    ["How long do you have to wait for a flooded river to drop?", "Often only hours. Most New Zealand rivers rise and fall quickly after rain, so an overnight wait usually solves it, which is why the huts are stocked for it and why turning back is a normal outcome rather than a failure."],
  ],
  "winter-driving-new-zealand-campervan": [
    ["Do you need snow chains in New Zealand?", "On the alpine passes and access roads in winter, yes, and on some roads they are a legal requirement to proceed. Rental campervans usually carry them, and knowing how to fit them in the dark is the part people skip."],
    ["Which New Zealand roads close in winter?", "The alpine passes and ski access roads are the ones that close or go chain-only, particularly the Crown Range, the Lindis, Arthur's Pass, the Desert Road and the Milford road. NZTA publishes live status and it changes through the day."],
  ],
  "new-zealand-road-signs-visitors": [
    ["Are New Zealand road signs different from other countries?", "The shapes and colours will feel familiar, but the ones that catch visitors out are local: one-lane bridge priority arrows, the LSZ limited speed zone, and the yellow warning signs for gravel changes and stock crossings."],
    ["What does the one-lane bridge sign mean?", "The large arrow is your direction and the small arrow is the oncoming one. If your arrow is the small one, you give way, and on a long bridge that means waiting at the entrance rather than committing and reversing."],
  ],
  "overseas-driver-licence-new-zealand": [
    ["Can you drive in New Zealand on a foreign licence?", "Yes, for up to 12 months from your arrival, provided the licence is current and for the class of vehicle you are driving. After 12 months you must convert to a New Zealand licence."],
    ["Do you need an International Driving Permit for New Zealand?", "Only if your licence is not in English. Where it is not, you must carry either an accurate certified English translation or an International Driving Permit alongside the original licence."],
  ],
  "campervan-road-rules-new-zealand": [
    ["Are the speed limits different for a campervan?", "For most rental campervans and motorhomes under 3,500 kg, no: the open road limit applies as normal. Heavier vehicles and anything towing are held to a lower limit, and the limit is a maximum rather than a target on a winding road."],
    ["What catches campervan drivers out in New Zealand?", "Height and width on narrow roads, wind on exposed passes and bridges, and the habit of forming a queue behind you. Pulling over to let traffic past is expected here and is the single thing that most reduces the risk."],
  ],
  "wof-registration-campervan-new-zealand": [
    ["What is a Warrant of Fitness and does it affect a rental?", "It is New Zealand's periodic vehicle safety inspection, and every vehicle on the road needs a current one along with current registration. A rental company is responsible for both, but it is worth checking the labels on the windscreen before you drive away."],
    ["What should you check before driving a rental campervan away?", "The WoF and registration labels, the self-containment certificate and its expiry, the tyres including the spare, and where the chains and the jack are. A self-containment certificate that expires mid-trip turns legal free camping into a fine."],
  ],
  "towing-caravan-new-zealand": [
    ["What is the speed limit when towing in New Zealand?", "90 km/h, below the 100 km/h open road limit, and it applies whatever the sign says. Anything you tow also has to be within your vehicle's rated towing capacity, which is a legal limit and not a guideline."],
    ["Do you need a special licence to tow a caravan in New Zealand?", "A full car licence covers most combinations up to 4,500 kg of combined weight. Above that you need a heavier class, and rental agreements often impose their own limits below the legal ones."],
  ],
  "speed-limits-new-zealand-visitors": [
    ["What is the open road speed limit in New Zealand?", "100 km/h unless signed otherwise, 50 km/h in urban areas, and 90 km/h if you are towing. Some highways are signed at 110 km/h and many rural roads are signed lower."],
    ["Why do New Zealand roads take longer than the distance suggests?", "Because the posted limit is rarely achievable. The roads are narrow, winding and often single lane in each direction, so a realistic average is well under the limit and a 300 km day is a full day."],
  ],
  "alcohol-fatigue-driving-new-zealand": [
    ["What is the drink-driving limit in New Zealand?", "250 micrograms of alcohol per litre of breath for drivers aged 20 and over, which is a blood alcohol limit of 0.05. For drivers under 20 the limit is zero, and enforcement is by frequent random breath testing."],
    ["Why is fatigue such a risk on New Zealand road trips?", "Because the driving demands constant attention and the distances feel shorter than they drive. Long-haul flight arrivals, an unfamiliar side of the road and a winding highway combine badly, which is why the first day is the one to keep short."],
  ],
  "left-side-driving-new-zealand": [
    ["Which side of the road does New Zealand drive on?", "The left, with the driver on the right of the vehicle. The turns that catch people out are the ones made from a standing start, particularly pulling out of a car park or a rural driveway."],
    ["What is the hardest part of switching to driving on the left?", "Not the open road, which settles within an hour, but intersections, roundabouts taken clockwise, and the moment after a stop when the habit reasserts itself. A note on the dashboard and a passenger who calls it out both help more than they sound like they would."],
  ],
  "one-lane-bridges-gravel-roads-new-zealand": [
    ["How do one-lane bridges work in New Zealand?", "The sign shows two arrows, and the larger one is the direction with priority. If the small arrow is yours you give way, and you wait at the entrance rather than starting across and meeting someone in the middle."],
    ["How should you drive on New Zealand gravel roads?", "Slower than feels necessary, with more following distance and no sudden steering or braking. Most rental agreements exclude some gravel roads entirely, so it is worth reading that before taking a shortcut."],
  ],
  "wildlife-livestock-road-safety-new-zealand": [
    ["What animals are a hazard on New Zealand roads?", "Livestock above all: sheep and cattle are moved along and across rural roads and a herd on the road is a normal event, not an emergency. Possums and birds are the common night hazard, and swerving for them causes far more harm than hitting them."],
    ["What should you do when you meet stock on the road?", "Slow right down, stop if the herd is dense, and follow the farmer or the dog's directions rather than trying to pick a way through. Do not sound the horn, which scatters the animals."],
  ],
  "camping-rules-local-councils-new-zealand": [
    ["Why do camping rules change between New Zealand regions?", "Because they are set by district and city councils under their own freedom camping bylaws, not by one national rule. Central law, conservation rules and individual site conditions sit on top of that, which is why one layby is legal and the next is not."],
    ["How do you find out the camping rules for a specific place?", "Read the signage at the site, which is the legally operative version, and check the relevant council's freedom camping bylaw before you rely on a map. An app or a listing tells you what was true when it was compiled."],
  ],
  "responsible-camping-new-zealand": [
    ["What does responsible camping mean in New Zealand?", "Camping where it is permitted, carrying out every piece of rubbish, disposing of wastewater and toilet waste at a proper facility, keeping fires within the rules and leaving the site as you found it. The freedom camping restrictions that exist now are a direct response to visitors who did not."],
    ["What is the biggest mistake campers make?", "Human waste. Toileting near a campsite or a waterway is the behaviour that closes free sites faster than anything else, and it is the reason the self-containment rules now require a fixed toilet."],
  ],
  "freedom-camping-rules-new-zealand": [
    ["What are the freedom camping rules in New Zealand?", "Freedom camping is allowed only in areas a council permits, and each district sets its own bylaw. Most permitted areas require a certified self-contained vehicle, and fines are issued on the spot and apply to the vehicle's hirer."],
    ["How much is the fine for illegal freedom camping?", "Infringement fees run to several hundred dollars for a standard breach and considerably more for offences such as dumping waste. Rental companies pass the fine on to the hirer along with an administration charge."],
  ],
  "self-contained-campervan-green-warrant": [
    ["What makes a vehicle certified self-contained in New Zealand?", "It must carry a fixed toilet, fresh and waste water capacity, a sealed rubbish container and the fittings to use them, and be certified by an authorised officer. The old blue warrant was replaced by a green warrant, and the fixed toilet is the change that made many older conversions ineligible."],
    ["Do you have to have a green self-containment card?", "You do if you want to use the many council areas restricted to certified self-contained vehicles. The card and the green warrant must be current, so check the expiry date on a rental before you plan a trip around free sites."],
  ],
  "camping-wastewater-rubbish-new-zealand": [
    ["Where can you empty a campervan toilet in New Zealand?", "At a public dump station, at most holiday parks, and at some council facilities. Emptying a cassette into a public toilet, a storm drain or the bush is illegal and carries one of the larger infringement fees."],
    ["Can you pour grey water on the ground?", "No. Sink and shower water carries detergent and food waste and must go to a dump station or a holiday park's grey water point, which is why self-containment certification requires a waste tank rather than a bucket."],
  ],
  "campfire-rules-new-zealand": [
    ["Can you light a campfire in New Zealand?", "Sometimes, and it depends on the fire season where you are. Fire and Emergency New Zealand sets each district to open, restricted or prohibited, and in a restricted season you need a permit before lighting anything."],
    ["How do you check the fire season before camping?", "Check checkitsalright.nz for the district you are actually in, on the day, then check the campsite's own rules, because many DOC sites ban fires regardless of the district season. A gas stove is unaffected by fire seasons and is the reason most campers carry one."],
  ],

  // --- Trip planning --------------------------------------------------------
  "campervan-budget-new-zealand": [
    ["How much does a campervan trip in New Zealand cost per day?", "The rental and the fuel dominate, and campsites are usually the smallest line. The guide breaks a realistic day into rental, fuel, camp fees, food and activities, and the gap between the cheapest and the comfortable version is mostly food and activities."],
    ["Is a campervan cheaper than car hire plus accommodation?", "Over a long trip in summer, usually yes; over a short trip, often not. A campervan carries a higher daily rate and worse fuel consumption, and it pays off only when it is replacing paid accommodation most nights."],
  ],
  "cook-strait-ferry-campervan-guide": [
    ["Do you need to book the Cook Strait ferry in advance for a campervan?", "Yes, and earlier than you would expect. Vehicle space is limited, campervans take a larger and separately priced slot, and summer sailings sell out weeks ahead."],
    ["How long does the Cook Strait crossing take?", "About three and a half hours between Wellington and Picton, plus check-in an hour or more beforehand for a vehicle. Sailings are cancelled in heavy weather often enough that a same-day connection on either side is a bad plan."],
  ],
  "new-zealand-driving-day-planner": [
    ["How far can you realistically drive in a day in New Zealand?", "Far less than the distance implies. Two hundred to three hundred kilometres is a comfortable day on typical New Zealand highways, and pushing past four hundred usually means arriving tired and having seen the road rather than the country."],
    ["Why do New Zealand journey times take longer than mapping apps say?", "Because the estimates assume conditions the roads rarely offer: no stops, no slow vehicle to follow, no roadworks and no photographs. Adding a third to the estimate is closer to what a day actually takes."],
  ],
  "food-fuel-resupply-new-zealand-road-trip": [
    ["Where should you stock up on a New Zealand road trip?", "In the larger towns, because the price gap between a city supermarket and a small-town store is substantial and the range is not comparable. The West Coast, the Catlins and the East Cape are the stretches to enter already stocked."],
    ["How far apart are fuel stations in New Zealand?", "Close enough on the main routes and not on the others. Haast to Wānaka, the Desert Road, the East Cape and much of Southland have long gaps, and some rural pumps are card-only and unstaffed at night."],
  ],
  "new-zealand-camping-packing-list": [
    ["What do you actually need to pack for camping in New Zealand?", "Layers for four seasons in a day, proper rain gear, insect repellent, a headtorch, and more warm clothing than the average forecast suggests. The guide splits the list by region, because the West Coast and Central Otago need different things."],
    ["What do visitors most often forget?", "Repellent, a warm layer for summer evenings, and a way to charge things away from power. The other one is a physical map or offline data, because reception disappears exactly where the driving gets interesting."],
  ],
  "best-time-camping-new-zealand": [
    ["When is the best time to camp in New Zealand?", "Late February to March is the sweet spot: settled weather, warm water, and the summer crowds gone. December and January have the most reliable weather and the fullest campsites and highest prices."],
    ["What is camping like in the New Zealand shoulder season?", "Quiet, cheap and unpredictable. October to November and April to May give you sites without booking and roads without queues, at the cost of shorter days, colder nights and a real chance of a washed-out week."],
  ],

  // --- App guides -----------------------------------------------------------
  "plan-trip-kiwicamping": [
    ["How do you plan a multi-stop road trip in KiwiCamping?", "Save the places you are considering, add them to a trip as stops, then drag them into the order you will drive. Each leg shows its distance, and each stop carries its own date, arrival notes and weather."],
    ["Can a KiwiCamping trip be added to a calendar?", "Yes. Itinerary details can sync to Calendar, which is the practical way to share the plan with the people travelling with you without them needing the app."],
  ],
  "save-places-kiwicamping": [
    ["What is the difference between smart and custom collections?", "Smart collections fill themselves: Liked, Starred, Want to visit, Visited, Pins and All saved update as you mark places. Custom collections are ones you name and build yourself, for a region, a season, a vehicle or a shortlist."],
    ["Do saved places sync between devices?", "With iCloud enabled, yes: saved states, collections and trip data follow your Apple Account. Without it, everything stays on the one device."],
  ],
  "kiwicamping-filters-guide": [
    ["Can you filter for free camping with toilets?", "Yes, and that combination is the point of the filters. Fee, facilities, access features, place type, region, rating and online booking stack together, so \"free camping areas with toilets and drinking water near Queenstown\" is a single query."],
    ["Why does a filtered search return nothing?", "Almost always because the filters are stacked tighter than the area allows. Widening the map or dropping the least important facility usually brings the list back, and it is worth clearing the rating filter first."],
  ],
  "kiwicamping-offline-data-guide": [
    ["What works in KiwiCamping without reception?", "The place directory is bundled with the app, so names, categories, descriptions, fees, facilities, opening hours and conditions all open with no signal. Search, filters and your saved places work offline too."],
    ["What needs a connection?", "The live services: weather, routing and directions, Street View, place photos and provider booking pages. Those are fetched when asked for, so the place screen still opens without them."],
  ],
  "kiwicamping-weather-look-around": [
    ["Can you see the weather for a specific campsite?", "Yes. Current conditions and the forecast sit on each place screen and beside each stop in a trip, so a choice between two camps can be made with the sky in mind rather than a regional forecast."],
    ["What is Street View useful for when choosing a campsite?", "Seeing the entrance and the road surface before you commit a van to a turnoff. Where Apple's Look Around imagery covers a road, it opens straight from the place screen, which answers the access question a listing cannot."],
  ],
  "kiwicamping-currency-place-costs": [
    ["Can KiwiCamping show prices in my own currency?", "Yes. Choose your currency in settings and set the conversion rate, and reported costs appear in that currency alongside the New Zealand dollar figure."],
    ["Are the converted prices exact?", "No, and they are not meant to be. They are a mechanical conversion of a reported New Zealand dollar figure at the rate you set, for judging one site against another. Your bank or card provider will apply its own rate and fees."],
  ],
  "best-nz-camping-apps": [
    ["What should a New Zealand camping app actually do?", "Work without reception, carry accurate fee and facility data, filter to a real question rather than a category, and tell you whether a site needs a self-contained vehicle. Coverage counts for little if the details are wrong or unreadable off-grid."],
    ["Is one camping app enough for New Zealand?", "For finding and planning, usually. Most travellers still keep a booking provider's own app for the sites they reserve, and the official DOC and NZTA sources for hut bookings and live road status."],
  ],

  // --- Costs & budget -------------------------------------------------------
  "new-zealand-travel-cost-2026": [
    ["How much does a trip to New Zealand cost in 2026?", "It splits cleanly into transport, accommodation and food, and the choice of vehicle drives the total more than anything else. This guide sets out dated New Zealand dollar benchmarks for each and converts them into ten currencies."],
    ["Is New Zealand expensive to travel in?", "By international standards, yes, particularly for food, accommodation and domestic transport. Camping is the one category where it stays cheap, which is why the gap between a camping trip and a hotel trip here is unusually wide."],
  ],
  "new-zealand-grocery-prices-2026": [
    ["How much does a week of groceries cost in New Zealand?", "The guide prices a real basket rather than an average, with dated figures per item. Fresh produce and dairy are close to what visitors expect, and packaged goods, meat and anything imported run noticeably higher."],
    ["Where is the cheapest place to buy food in New Zealand?", "The large supermarket chains in the main centres, and the difference against a small-town store is significant enough to plan around. Weekend produce markets beat both on seasonal fruit and vegetables."],
  ],
  "eating-out-new-zealand-prices-2026": [
    ["How much is a meal out in New Zealand?", "The guide gives dated prices for a café brunch, a pub meal, a mid-range dinner and a takeaway, in New Zealand dollars and ten conversions. The step between a café and a restaurant is larger here than in most countries."],
    ["Do you tip in New Zealand?", "No. Tipping is not expected and service is not priced assuming it, and there is no service charge on a normal bill."],
  ],
  "beer-wine-coffee-prices-new-zealand": [
    ["How much is a beer in New Zealand?", "The guide prices a pub pint, a craft beer, a supermarket six-pack, a glass and a bottle of wine, all with dated figures. Buying from a supermarket rather than a bar is the single biggest saving on a long trip."],
    ["How much does coffee cost in New Zealand?", "A flat white sits in a fairly narrow band nationwide, with city cafés at the top of it. New Zealand coffee is genuinely good, which is the reason this line item creeps up on people."],
  ],
  "accommodation-costs-new-zealand-2026": [
    ["How much is accommodation in New Zealand per night?", "It runs from a hostel dorm through a holiday park cabin and a motel to a hotel room, and the guide prices each with dated figures. Peak summer in Queenstown and the Bay of Islands sits well above the national picture."],
    ["What is the cheapest way to sleep in New Zealand?", "Camping, by a wide margin, and a DOC campsite costs a fraction of a hostel dorm. The saving only holds if the vehicle and fuel to reach those sites are already part of the plan."],
  ],
  "new-zealand-road-trip-fuel-cost-2026": [
    ["How much does fuel cost in New Zealand?", "The guide gives a dated price per litre for petrol and diesel and works it through real routes. Prices climb noticeably in remote areas, and diesel vehicles also pay road user charges, which people forget to budget."],
    ["How do you estimate fuel for a New Zealand road trip?", "Take the route distance, add a third for detours and terrain, then divide by your vehicle's real consumption rather than its brochure figure. A campervan into a headwind on a hilly highway will not meet its rated economy."],
  ],
  "public-transport-costs-new-zealand-2026": [
    ["Is public transport in New Zealand good enough to travel without a car?", "Between the main cities, yes, and within them it varies a lot. It is the rural and coastal places, which is most of what people come to see, where the network effectively stops."],
    ["How much does public transport cost in New Zealand cities?", "The guide gives dated fares for Auckland, Wellington and Christchurch. All three run tag-on cards with a daily cap, and buying the card early is worth it for a stay of more than a couple of days."],
  ],
  "domestic-flight-costs-new-zealand-2026": [
    ["How much are domestic flights in New Zealand?", "The guide gives realistic sale floors and typical fares on the main routes rather than headline prices. Booking ahead matters more here than in larger markets, because the routes are thin and the last seats are expensive."],
    ["Is it worth flying instead of driving in New Zealand?", "For crossing between the islands with limited time, often yes. For anything else, the drive is usually the reason for the trip, and a one-way rental drop-off fee frequently erases the saving."],
  ],
  "bus-ferry-train-costs-new-zealand": [
    ["How much does the Cook Strait ferry cost?", "The guide gives dated fares for a foot passenger, a car and a campervan, and the vehicle fare is the one that varies most by season and how far ahead it is booked."],
    ["Are New Zealand's scenic trains worth the money?", "As an experience rather than transport, yes. The TranzAlpine and the Coastal Pacific are priced as sightseeing and run on schedules that will not fit a tight itinerary, so treat them as an activity you are buying."],
  ],
  "camping-fees-new-zealand-2026": [
    ["How much does camping cost per night in New Zealand?", "It spans from free at Basic DOC sites through Standard and Scenic sites to holiday parks, and the guide prices each tier with dated figures. DOC charges per adult and holiday parks often charge per site, so two similar numbers can mean very different totals."],
    ["Is camping in New Zealand cheaper than staying in hostels?", "Per night, clearly. Across a whole trip the answer depends on the vehicle, because the rental and fuel that make cheap sites reachable usually cost more than the accommodation they replace."],
  ],
};
