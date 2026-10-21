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
    ["Do you need to book a DOC hut?", "Only some. Great Walk huts, every serviced hut since 1 October 2026 and some popular huts are booked on bookings.doc.govt.nz. Most standard huts are first come, paid with hut tickets or a Backcountry Hut Pass, and basic huts are free."],
    ["How much does a DOC hut cost per night?", "For 2026/27 a standard hut is $15 for an adult and $7.50 for a child all year. A serviced hut is $25 from May to September and $28 to $34 from October to April, and a basic hut or bivvy is free. Great Walk and individually priced huts set their own fees."],
  ],
  "winter-camping-new-zealand": [
    ["Can you camp in New Zealand in winter?", "Yes, and it is the quietest time of year on the road. The limits are practical rather than legal: some DOC campsites and alpine roads close or become chain-only, daylight is short, and a van without insulation or a heater gets unpleasant fast."],
    ["Which parts of New Zealand are mildest in winter?", "The upper North Island stays the warmest, and Northland and the Coromandel stay campable all year. Central Otago and the Mackenzie country get the hardest frosts, and the West Coast stays mild but very wet."],
  ],
  "where-to-camp-in-new-zealand": [
    ["What are the different types of camping in New Zealand?", "Broadly five: DOC campsites, backcountry huts, commercial holiday parks, freedom camping areas set by local councils, and private or farm stays. They differ in price, facilities and what vehicle they will accept, and the rules attached to each are set by different bodies."],
    ["Can you just pull over and camp anywhere?", "No. Not by default: freedom camping is allowed on council and conservation land unless a bylaw or DOC notice prohibits or restricts it, but popular areas usually are restricted, and breaches are enforced with infringement fees. What is allowed depends on the local council bylaw and on whether your vehicle is certified self-contained."],
  ],
  "freedom-camping-new-zealand-guide": [
    ["Is free camping legal in New Zealand?", "In designated areas, yes. Freedom camping is legal on council and conservation land unless a bylaw or DOC notice prohibits or restricts it, and on council land a vehicle must be certified self-contained unless the site is designated otherwise, which is why the same layby can be fine in one district and a fine in the next. The site signage is the authority, not a map."],
    ["Do you need a self-contained vehicle to camp for free?", "For a large share of free sites, yes. Many councils restrict free camping to certified self-contained vehicles, and since the 2023 changes that certification requires a fixed toilet. Without certification you are limited to council sites designated for non-self-contained vehicles, conservation land that no DOC notice restricts to certified vehicles, and campgrounds, holiday parks and most DOC campsites."],
  ],
  "doc-campsites-new-zealand-guide": [
    ["How do you book a DOC hut or campsite?", "Online at bookings.doc.govt.nz with a free DOC account, or through a DOC visitor centre. You pay in full when you book and the confirmation email is your proof. Basic huts are free, and non-bookable standard huts are paid with hut tickets or a Backcountry Hut Pass."],
    ["When did 2026/27 Great Walk bookings open?", "On seven opening days between 12 and 21 May 2026, at 9:30 am, for stays from 1 July 2026 to 30 June 2027. Peak Milford, Abel Tasman and Kepler dates go first, but cancellations come back on sale through the season."],
  ],
  "holiday-parks-new-zealand-guide": [
    ["What is the difference between a holiday park and a campsite?", "A holiday park is a commercial site with powered sites, showers, kitchens, laundry and usually cabins, priced per site or per person. A DOC campsite is public conservation land with far fewer facilities and a much lower fee."],
    ["Is a holiday park membership worth it in New Zealand?", "The TOP 10 Club costs $55 for two years and takes 10 percent off each TOP 10 stay, up to $40 a stay, so it pays for itself once you spend about $550 at TOP 10 parks. That suits a long trip; for a weekend it rarely does."],
  ],
  "scenic-campsites-new-zealand": [
    ["Which New Zealand campsites have the best views?", "Among DOC campsites, standouts include Tapotupotu near Cape Reinga, Waikawau Bay on the Coromandel, Tōtaranui in Abel Tasman, Lake Māhinapua on the West Coast, Kinloch on Lake Wakatipu and Cascade Creek on the Milford Road. Those six charge $18 to $23 per adult per night."],
    ["Do scenic campsites need booking?", "Most popular DOC sites take online bookings and fill for summer weekends and January. Maitai Bay, Tapotupotu, Kapowairua (Spirits Bay), Ahuriri Bridge and Twelve Mile Delta were not taking bookings in October 2026, so arrive early in the day."],
  ],

  // --- Rules & safety -------------------------------------------------------
  "doc-campsite-rules": [
    ["What are the rules at a DOC campsite?", "Keep noise down from 10 pm to 7 am, check out by 10 am, take all rubbish away and bring no pets or drones unless DOC has authorised them. Smoking and vaping are banned in huts and toilet blocks, and each site's own page adds rules on fires, dogs, generators and vehicles."],
    ["How long can you stay at a DOC campsite?", "Some campsites set a maximum stay on their DOC page, and a Campsite Pass covers no more than 7 nights in any 30 days at one campsite. Every night needs a booking or registration except at free basic campsites, and using a bookable site unbooked costs each person their normal fee plus a full adult fee, or a $10 fee for a Campsite Pass holder."],
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
    ["How much warning do New Zealand storms give?", "Often less than a day. Weather here can turn from settled to severe in hours, particularly on the West Coast and in the exposed alpine passes, so a forecast checked yesterday is not a plan."],
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
    ["Can you drive in New Zealand on a foreign licence?", "Yes. If you arrived between 1 November 2024 and 31 October 2026, a current overseas car licence lasts 18 months from that arrival; if you arrive on or after 1 November 2026, it lasts 12 months. After that you need a New Zealand licence."],
    ["Do you need an International Driving Permit for New Zealand?", "Only if your licence is not in English. Where it is not, you must carry either an accurate English translation from an NZTA-approved translator or an International Driving Permit alongside the original licence."],
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
    ["What is the speed limit when towing in New Zealand?", "90 km/h on the open road with a towbar or other rigid connection, below the 100 km/h general limit, and any lower posted limit still applies. Towing on a rope or any other non-rigid link drops the limit to 50 km/h everywhere."],
    ["Do you need a special licence to tow a caravan in New Zealand?", "Not usually. A full car licence lets you tow when the vehicle, trailer and load together weigh no more than 6,000 kg; on a learner or restricted licence the limit is 4,500 kg. Rental agreements can set their own lower limits."],
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
    ["What are the freedom camping rules in New Zealand?", "On council and conservation land, freedom camping is allowed unless a bylaw, a DOC notice or another law prohibits or restricts it, and on council land the vehicle must be certified self-contained unless a site is designated otherwise. Councils write their own bylaws, so stay limits and banned areas change between districts."],
    ["How much is the fine for illegal freedom camping?", "Most breaches carry a $400 infringement fee, including camping where it is prohibited and using an uncertified vehicle where self-containment is required. Depositing waste is $800, and a rental company can pass the fee to the hirer."],
  ],
  "self-contained-campervan-green-warrant": [
    ["Are blue self-containment warrants still valid in NZ?", "Not for freedom camping. Since 7 June 2026 only a green warrant makes a vehicle self-contained on public land restricted to certified vehicles, whatever expiry date a blue card shows. Campgrounds, holiday parks and private land with permission need neither."],
    ["What is the fine for freedom camping without a green warrant?", "Camping in an uncertified vehicle where self-containment is required carries a $400 infringement fee, and failing to display the warrant card is $200. With a rental, the hire agreement can make you pay and let the company charge your card."],
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
    ["What do you actually need to pack for camping in New Zealand?", "Layers for four seasons in a day, proper rain gear, insect repellent, a headtorch, and more warm clothing than the average forecast suggests. Then reweight it by region: the West Coast needs rain and sandfly gear, Central Otago colder nights and stronger sun."],
    ["What do visitors most often forget?", "Repellent, a warm layer for summer evenings, and a way to charge things away from power. The other is a paper map, because reception disappears exactly where the driving gets interesting."],
  ],
  "best-time-camping-new-zealand": [
    ["When is the best time to camp in New Zealand?", "For most trips, March and April: settled spells, campgrounds open but no longer full, and prices down once school holidays end. December and January bring the longest days but the fullest campsites and the highest prices."],
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
    ["What works in KiwiCamping without reception?", "The place directory is bundled with the app, so names, categories, descriptions, fees, facilities, opening hours and conditions all open with no signal. Search, filters and saved places work offline too, for the places your access covers: BookIt stays and tours are free, DOC places and dump stations need the Premium pass."],
    ["What needs a connection?", "The live services: weather, routing and directions, Look Around imagery, place photos and provider booking pages. Those are fetched when asked for, so the place screen still opens without them."],
  ],
  "kiwicamping-weather-look-around": [
    ["Can you see the weather for a specific campsite?", "Yes. Current conditions and the forecast sit on each place screen and beside each stop in a trip, so a choice between two camps can be made with the sky in mind rather than a regional forecast."],
    ["What is Look Around useful for when choosing a campsite?", "Seeing the entrance and the road surface before you commit a van to a turnoff. Where Apple's Look Around imagery covers a road, it opens straight from the place screen, which answers the access question a listing cannot."],
  ],
  "kiwicamping-currency-place-costs": [
    ["Can KiwiCamping show prices in my own currency?", "Yes. Choose your currency in settings and set the conversion rate, and reported costs appear in that currency alongside the New Zealand dollar figure."],
    ["Are the converted prices exact?", "No, and they are not meant to be. They are a mechanical conversion of a reported New Zealand dollar figure at the rate you set, for judging one site against another. Your bank or card provider will apply its own rate and fees."],
  ],
  "rankers-alternatives": [
    ["Is Rankers Camping NZ free?", "Yes. The app is free to download and use, and Rankers earns from bookings, activity deals and campervan-hire referrals made through it. It runs on iPhone, iPad, Android and the web."],
    ["What is the best alternative to Rankers?", "For planning a dated route with DOC huts and tracks we recommend KiwiCamping, which we make, used alongside Rankers for reviews. CamperMate suits trips that continue to Australia, and WikiCamps New Zealand publishes the biggest count of New Zealand sites for a one-off NZ$7.99."],
  ],
  "campermate-alternatives": [
    ["Is there a CamperMate alternative without ads?", "KiwiCamping has no ads, and Rankers' Google Play listing shows no ads label; CamperMate carries ads. KiwiCamping's DOC places, collections and trips need its paid Pass, while Rankers is free."],
    ["What can I use instead of CamperMate for New Zealand and Australia?", "thl Roadtrip covers campsites, holiday parks, petrol and dump stations in both countries for free. WikiCamps sells separate New Zealand and Australia apps, each paid once."],
  ],
  "road-trip-planner-apps-new-zealand": [
    ["What is the best road trip planner app for New Zealand?", "For a camping or campervan trip we recommend KiwiCamping, which we make, because it plans by the night with DOC campsites and huts built in; use Google Maps or Apple Maps for the driving. For group trips or trips mixing hotels and flights, Wanderlog is the stronger planner."],
    ["Can Google Maps plan a multi-stop road trip in New Zealand?", "Yes, up to 9 stops including the destination in one route, which suits a day or two rather than a whole trip. Download offline areas along the full route, because offline directions only work inside them."],
  ],
  "free-camping-apps-new-zealand": [
    ["Which app shows free campsites in New Zealand?", "Rankers is the best free app for it: the camping spots it shows are only ones the local community has approved for overnight stays, with traveller reviews. CamperMate filters free and paid sites, WikiCamps New Zealand has a free campgrounds filter, and KiwiCamping shows the DOC campsites DOC lists with no fee, behind its paid Pass."],
    ["Can I freedom camp in New Zealand without a self-contained vehicle?", "Since 7 June 2026 only a green warrant counts as self-contained. Without one, a vehicle can stay on council land only where a bylaw allows it, and on DOC land outside scenic and recreation reserves and the areas DOC prohibits or restricts. Free DOC campsites are the simplest option."],
  ],
  "best-travel-apps-new-zealand": [
    ["Is the NZeTA cheaper in the app?", "Yes. Immigration New Zealand charges NZ$17 in the official NZeTA app and NZ$23 on its website, and most visitors pay the NZ$100 International Visitor Conservation and Tourism Levy on top. Use only the official app or immigration.govt.nz."],
    ["Which apps should I download before a New Zealand road trip?", "The NZeTA and Traveller Declaration apps for entry, Google Maps with offline areas downloaded, MetService for warnings and Plan My Walk for walks. For a camping trip add KiwiCamping, which we make, for DOC campsites and the route plan, and Rankers for traveller reviews."],
  ],
  "wikicamps-alternatives": [
    ["Is WikiCamps New Zealand free?", "No. On the New Zealand App Store it costs NZ$7.99 once, with no subscription in its listing. Its website quotes A$9.99 per platform, so check the price in your own store before you buy."],
    ["What is a free alternative to WikiCamps in New Zealand?", "Rankers Camping NZ is free and lists only overnight spots the local community has approved, with traveller reviews read by its team. CamperMate is also free and covers Australia as well. KiwiCamping is free to download, but its DOC campsites, huts and trips need the paid Pass."],
    ["Do I need separate WikiCamps apps for New Zealand and Australia?", "Yes. WikiCamps New Zealand and WikiCamps Australia are separate apps, each bought on its own; WikiCamps Australia costs NZ$11.99 on the New Zealand App Store. CamperMate covers both countries in one free app."],
  ],
  "best-campervan-apps-new-zealand": [
    ["What is the best app for a campervan trip in New Zealand?", "It depends on the stage. For planning nights at DOC campsites we recommend KiwiCamping, which we make; thl Roadtrip suits Maui, Britz, Mighty and Apollo hirers, CamperMate is a free all-rounder, and Rankers adds traveller reviews of where to stay."],
    ["How do campervan relocations work in New Zealand?", "A hire company needs a van moved, so it offers it for as little as $1 a day on fixed dates. Imoova says fuel, tolls and parking are not covered, though some suppliers add fuel or a ferry ticket, and companies such as Travellers Autobarn ask for a bond."],
    ["Do I need a green warrant to freedom camp in a campervan?", "Yes, on public land where freedom camping is limited to self-contained vehicles. Since 7 June 2026 blue warrants are no longer recognised, and camping without a green warrant can bring a $400 infringement notice. Campgrounds, holiday parks and private property are not covered by the rule."],
  ],
  "best-weather-apps-new-zealand": [
    ["What is the best weather app for New Zealand?", "For official severe weather warnings use MetService, the only authorised provider of them in New Zealand. Add Windy or Yr as a second forecast, Plan My Walk on tramping days, and KiwiCamping, which we make, to compare the forecast at each campsite on your trip."],
    ["Which weather app is most accurate in New Zealand?", "We found no independent test that answers this. Compare two sources, such as MetService and Windy, and treat agreement between them as more reliable than either alone. For mountains, use MetService's mountain forecasts on its website."],
    ["Where can I get a mountain weather forecast in New Zealand?", "MetService publishes mountain forecasts for national parks and regions such as Aoraki/Mount Cook, Arthur's Pass, Fiordland and Tongariro on metservice.com, with the freezing level. Check the New Zealand Avalanche Advisory too before going into avalanche terrain."],
  ],
  "fuel-price-apps-new-zealand": [
    ["Which app shows the cheapest petrol prices in New Zealand?", "Gaspy. Its users report the price on the pump and other users confirm it, so you can compare stations near you before filling up. It is free, with an optional Gold subscription at NZ$1.69 a month that lets you add more of your own discounts."],
    ["Which fuel discount is biggest in New Zealand?", "It changes. On 20 October 2026 Z's app gave at least 6 cents a litre every day and 15 cents on Wednesdays, bp and g.a.s. gave 6 cents with Everyday Rewards, and Foodstuffs' Club+ gave 8 cents at Z and participating Caltex sites. Each scheme caps the litres per fill and can change its amounts."],
    ["Do diesel campervans cost more to run in New Zealand?", "Diesel is cheaper at the pump, but light diesel vehicles also pay road user charges of $76 per 1,000 km, about 7.6 cents a kilometre. Add that to the fuel cost when you compare a diesel campervan with a petrol vehicle."],
  ],
  "working-holiday-apps-new-zealand": [
    ["What apps do I need for a working holiday in New Zealand?", "SEEK and Trade Me for jobs, Wise for moving money, a New Zealand bank app and a prepaid phone plan. If you travel between seasonal jobs, KiwiCamping, which we make, shows DOC campsites and other places to stay on the way."],
    ["How do I get an IRD number on a working holiday visa?", "Apply through myIR on Inland Revenue's website. It is free, and new arrivals usually receive the number by text or email within two days. Inland Revenue may ask for a New Zealand bank account or an IR997 form, so open the account early."],
    ["What is the minimum wage in New Zealand in 2026?", "The adult minimum wage is $23.95 an hour from 1 April 2026, and Employment New Zealand says temporary migrants have the same minimum employment rights. Without a tax code from you, your employer must tax you at the 45% non-declaration rate."],
  ],
  "money-saving-travel-apps-new-zealand": [
    ["What is the best way to save money travelling New Zealand?", "Cut the two biggest costs first: sleep at DOC campsites, where fees ran from $5 to $25 per adult a night at sites with a published rate, and use Gaspy to find cheaper fuel. KiwiCamping, which we make, shows DOC campsite fees and lets you filter by cost."],
    ["Which apps give discounts in New Zealand?", "Supermarket apps such as Club+ and Everyday Rewards give points and fuel discounts, First Table gives 50% off food at early sittings, Too Good To Go sells unsold food cheaply, and Rankers offers 10% off Bluebridge ferries and 10% to 15% off some activities."],
    ["Is there a cheap way to cross Cook Strait?", "Compare Interislander and Bluebridge for your date. Interislander's BoostSail code gives 15% off adult foot-passenger fares for bookings made until 14 December 2026 and travel by 15 December 2026, and it does not cover vehicles; Rankers' code gives 10% off Bluebridge. Check what each discount covers before you book a vehicle."],
  ],
  "best-nz-camping-apps": [
    ["What is the best camping app for New Zealand in 2026?", "It depends on the trip. For DOC campsites, huts and planning a route we recommend KiwiCamping, which we make; Rankers has the most New Zealand App Store ratings, CamperMate combines booking, deals and downloadable maps, and WikiCamps New Zealand publishes the biggest count of New Zealand sites. Many travellers carry two."],
    ["Is there a free camping app for New Zealand?", "Rankers and CamperMate are free to download. KiwiCamping is free to download, but DOC campsites, huts, tracks and dump stations, collections and trips need its paid Pass. WikiCamps New Zealand costs NZ$7.99 once on iPhone."],
    ["Which camping apps work without reception in New Zealand?", "Rankers builds its campsite information into the app and downloads detailed maps over Wi-Fi, CamperMate lets you download maps and place information, and WikiCamps has an Offline Mode. KiwiCamping keeps place details on the phone, but its map tiles, routing and weather need signal."],
    ["Which app is best for freedom camping in New Zealand?", "Use an app to shortlist spots, then let the council bylaw and the sign on site decide, because no app is the authority. Rankers, CamperMate and WikiCamps all carry traveller reports on free sites, and the rules themselves are set by each council and, on conservation land, by DOC."],
  ],

  // --- Costs & budget -------------------------------------------------------
  "new-zealand-travel-cost-2026": [
    ["How much does a trip to New Zealand cost in 2026?", "Planning bands for 2026: about NZ$75 to $120 per person a day for a lean camper or backpacker, $150 to $260 for a comfortable independent trip and $280 to $450 with private rooms and paid activities. The choice of vehicle moves the total more than anything else."],
    ["Is New Zealand expensive to travel in?", "By international standards, yes, particularly for food, accommodation and domestic transport. Camping is the one category where it stays cheap, which is why the gap between a camping trip and a hotel trip here is unusually wide."],
  ],
  "new-zealand-grocery-prices-2026": [
    ["How much does a week of groceries cost in New Zealand?", "At Stats NZ's September 2026 average prices, a basic week of supermarket food for one person cooking most meals costs about NZ$116. Premium meat, convenience food and small remote stores push that up quickly."],
    ["Where is the cheapest place to buy food in New Zealand?", "The large supermarket chains in the main centres, and the difference against a small-town store is significant enough to plan around. Weekend produce markets beat both on seasonal fruit and vegetables."],
  ],
  "eating-out-new-zealand-prices-2026": [
    ["How much is a meal out in New Zealand?", "Planning ranges for 2026: an inexpensive restaurant meal NZ$18 to $50, a fast-food combo $15 to $20, dinner for two at a mid-range restaurant $100 to $200 and a cappuccino $5 to $7.50. The step between a café and a restaurant is larger here than in most countries."],
    ["Do you tip in New Zealand?", "No. Tipping is not expected and service is not priced assuming it, and there is no service charge on a normal bill."],
  ],
  "beer-wine-coffee-prices-new-zealand": [
    ["How much is a beer in New Zealand?", "In a pub a 500 ml domestic draught beer costs about NZ$7 to $15 and an imported bottle $9 to $15; a 500 ml domestic beer from the supermarket is $2.59 to $10. Buying from a supermarket rather than a bar is the single biggest saving on a long trip."],
    ["How much does coffee cost in New Zealand?", "A flat white sits in a fairly narrow band nationwide, with city cafés at the top of it. New Zealand coffee is genuinely good, which is the reason this line item creeps up on people."],
  ],
  "accommodation-costs-new-zealand-2026": [
    ["How much is accommodation in New Zealand per night?", "It runs from a hostel dorm through a holiday park cabin and a motel to a hotel room, and the guide prices each with dated figures. Peak summer in Queenstown and the Bay of Islands sits well above the national picture."],
    ["What is the cheapest way to sleep in New Zealand?", "Camping, by a wide margin, and a DOC campsite costs a fraction of a hostel dorm. The saving only holds if the vehicle and fuel to reach those sites are already part of the plan."],
  ],
  "new-zealand-road-trip-fuel-cost-2026": [
    ["How much does fuel cost in New Zealand?", "Regular 91 averaged $3.54 a litre in the week dated 9 October 2026 (MBIE), so 1,000 km at 11 L/100 km costs about $390 in fuel. Prices climb noticeably in remote areas, and diesel vehicles also pay road user charges, which people forget to budget."],
    ["How do you estimate fuel for a New Zealand road trip?", "Take the route distance, add a third for detours and terrain, then divide by your vehicle's real consumption rather than its brochure figure. A campervan into a headwind on a hilly highway will not meet its rated economy."],
  ],
  "public-transport-costs-new-zealand-2026": [
    ["Is public transport in New Zealand good enough to travel without a car?", "Between the main cities, yes, and within them it varies a lot. It is the rural and coastal places, which is most of what people come to see, where the network effectively stops."],
    ["How much does public transport cost in New Zealand cities?", "The table gives dated Auckland fares; check Metlink for Wellington and Metro for Christchurch. All three use tag-on cards: Auckland caps fares at $50 over seven days, Christchurch caps bus fares at $6 a day and Wellington sells day passes, so buying the card early is worth it for a stay of more than a couple of days."],
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
    ["How much does camping cost per night in New Zealand?", "From free at basic DOC campsites, through $10 to $20 an adult at standard sites and $25 at serviced sites, to holiday parks that often charge per site. Because DOC charges per adult, two similar-looking prices can mean very different totals for a family."],
    ["Is camping in New Zealand cheaper than staying in hostels?", "Per night, clearly. Across a whole trip the answer depends on the vehicle, because the rental and fuel that make cheap sites reachable usually cost more than the accommodation they replace."],
  ],
  "christmas-summer-camping-new-zealand-2026-27": [
    ["Do I need to book DOC campsites over Christmas?", "For the busy ones, yes. DOC says bookings are required for all serviced campsites and for some scenic and standard campsites in peak season, usually 1 October to 30 April. Bookings are open for stays up to 30 June 2027 on a first come, first served basis with no waiting lists, and Tōtaranui in Abel Tasman has a $40 per night minimum from 26 December to 8 February."],
    ["Can I use a blue warrant for freedom camping this summer?", "No. DOC says that from 7 June 2026 all vehicles must have a green warrant to be certified self-contained, and a warrant card must be displayed in areas restricted to self-contained vehicles. Vehicles with a portable toilet can no longer be certified, because the toilet must be fixed to the floor."],
    ["Can I light a campfire at a DOC campsite in summer?", "Only in a designated fireplace and only when there is no fire ban, and some campsites ban open fires outright, including Papatowai and the northern Coromandel campgrounds. DOC says you can usually use gas burners and enclosed liquid fuel stoves, but portable stoves that burn wood, pellets, charcoal or coal are not permitted. Check checkitsalright.nz for fire season status."],
    ["Are Great Walks booked out over Christmas?", "DOC does not publish which dates are booked out; availability shows only in its booking system. Last summer the Milford Track and Abel Tasman Coast Track huts reached about 95 per cent occupancy and the Kepler Track 91 per cent, while DOC says the Heaphy, Lake Waikaremoana and Whanganui Journey often have space."],
  ],
  "new-years-eve-summer-event-camping-new-zealand": [
    ["Is there a liquor ban at New Year in the Coromandel?", "Yes. Thames-Coromandel District Council's Alcohol Control Bylaw runs a holiday ban from 4pm on 23 December to 4pm on 6 January in the areas shown on its maps for Coromandel, Mercury Bay, Tairua-Pauanui, Thames and Whangamata. The bylaw exempts drinking inside a certified self-contained vehicle at a designated freedom camping area. Check the council's maps for the exact areas."],
    ["Can I freedom camp at Mount Maunganui over New Year?", "Only in a certified self-contained vehicle, and only within Tauranga City Council's limits: two nights per calendar month in any one location. The council lists 25 reserves for overnight parking, all with limits on spaces and days, plus some roads and car parks. The Mount Maunganui Beachside Holiday Park is closed after the January 2026 Mauao landslide, and Police said last summer that drinking in the alcohol-free zones, including inside vehicles, brings confiscation and on-the-spot fines."],
    ["Can I camp in a campervan at Rhythm and Alps or Northern Bass?", "Both have a campervan option with a pass. Rhythm and Alps' Roadie Camp is for self-contained vehicles and rooftop tents only, and Northern Bass has a campervan area for vehicles no longer than 6 m and no wider than 3 m with a valid pass. Northern Bass does not allow camping in any other vehicle on site, and Rhythm and Alps does not allow camping in cars or station wagons."],
    ["What is the drink-driving limit in New Zealand?", "Police say the limit is 250 micrograms of alcohol per litre of breath for drivers aged 20 and over, or 50 mg per 100 ml of blood, and zero for drivers under 20. A liquor ban is a separate rule about drinking in public places."],
  ],
  "best-campsite-booking-apps-new-zealand": [
    ["How do I book a DOC campsite or hut?", "Through DOC's online booking system, which covers Great Walks, huts, campsites and lodges, cabins and cottages. Not every facility can be booked, and unbookable ones are first come, first served."],
    ["Is there an app for booking campsites in New Zealand?", "No single app books every campsite. DOC books through its website, holiday park chains book through their own sites, and CamperMate, Rankers and WikiCamps book some sites in the app."],
    ["Do I need to book a DOC campsite in summer?", "DOC requires bookings for all serviced campsites and some scenic and standard campsites in peak season, usually 1 October to 30 April. Other campsites are first come, first served and paid at the self-registration stand."],
    ["Can I book private land camping in New Zealand?", "Yes. Campable lists hosts on farms, vineyards and other private land, with each host setting the vehicle rules, and says it charges guests no booking fee."],
  ],
  "campable-alternatives": [
    ["What is an alternative to Campable in New Zealand?", "It depends on the job. CamperMate and WikiCamps list a wide range of sites, Rankers lists spots the local community welcomes, DOC's website books conservation-land campsites and huts, and KiwiCamping maps DOC places and plans a trip."],
    ["Is Campable free to use?", "The app is free, and Campable says it charges guests no booking fees. You pay the host's nightly price, and Instant Book stays made more than 14 days ahead are charged 14 days before the stay."],
    ["Do I need a self-contained vehicle to use Campable?", "It depends on the host. Campable says each host chooses the vehicle rules, from certified self-contained vehicles only to portable toilets or tents, so check the listing."],
    ["Can I book private land camping without Campable?", "Hipcamp lists private land in New Zealand on its website. Campable is the app built around hosted private land."],
  ],
  "best-tramping-great-walks-apps-new-zealand": [
    ["What is the best app for tramping in New Zealand?", "Many trampers combine apps: Plan My Walk for alerts and trip plans, an offline topo map such as NZ Topo50 or NZ Topo Maps, and DOC's website for hut and Great Walk information. KiwiCamping shows DOC hut, track and campsite details but is not a topo map."],
    ["Is there an app to book New Zealand Great Walks?", "No. DOC books Great Walks, huts and campsites through its online booking system, and we found no DOC app for bookings. Bookings are open for stays to 30 June 2027."],
    ["Do tramping apps work without phone signal?", "The topo map apps store maps on the phone for use with no signal, such as NZ Topo50, NZ Topo Maps and TrailTreks. Plan My Walk works offline with an eligible satellite plan, and without one you download a PDF of your trip plan."],
    ["Should I carry a personal locator beacon?", "The Mountain Safety Council advises always taking a second way to communicate, particularly into remote areas, and says a 406 MHz personal locator beacon must be registered with the Rescue Coordination Centre New Zealand."],
  ],
  "best-dump-station-apps-new-zealand": [
    ["What is the best app for dump stations in New Zealand?", "We found no app built only for New Zealand dump stations. Camping apps such as Rankers, CamperMate, WikiCamps and KiwiCamping list them, and NZMCA members get a directory with dump stations in the NZMCA app."],
    ["Are dump stations free in New Zealand?", "Many are, but it varies by council. Waitaki District Council lists several free ones and asks $5 by donation box at its lakes camping grounds when you have no camping ground ticket."],
    ["What is the fine for dumping waste while freedom camping?", "Depositing waste in or on the area while freedom camping carries an $800 infringement fee, with a court maximum of $2,400."],
    ["What rules apply to freedom campers emptying waste?", "Since 7 June 2026 only a green warrant counts as self-contained for freedom camping on public land, and the requirement does not apply at campgrounds, holiday parks or private property. Depositing waste while freedom camping carries an $800 infringement fee."],
  ],
  "best-south-island-road-trip-apps-new-zealand": [
    ["What apps do I need for a South Island road trip?", "A trip planner such as KiwiCamping, NZTA's Journey Planner for road closures, MetService for weather warnings, Gaspy for fuel and a camping app such as CamperMate or Rankers for places to stay."],
    ["Is there fuel on the Milford Road?", "DOC says there are no shops or fuel stations between Te Anau and Milford Sound, and to have a full tank before leaving Te Anau. A return trip from Te Anau is 240 km."],
    ["How do I check if a South Island road is closed?", "Use NZTA's Journey Planner, which shows road closures, roadworks and traffic cameras. NZTA notes its route suggestions come from Google and may not reflect unplanned events on state highways."],
    ["Do I need snow chains on the Milford Road?", "DOC says snow chains may be required and can be rented in Te Anau. Check the current status of State Highway 94 before you leave."],
  ],
};
