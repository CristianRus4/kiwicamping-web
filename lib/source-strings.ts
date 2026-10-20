/**
 * The English source of truth for every translatable string on the site that is not article prose.
 *
 * Translators work from `lib/translations/en.json`, which `scripts/build-translation-source.mjs`
 * generates from this file plus the translatable articles. A locale file only needs the keys it has
 * actually translated: `lib/localized.ts` falls back to the English value here for anything missing,
 * so a half-finished translation renders as a mix rather than as blank text.
 */
export const uiStrings = {
  languageName: "English",

  /* Search-engine copy. Kept apart from the on-page headings because a page title and a headline
     have different jobs: the title has to win a click from a results page. */
  metaTitle: "KiwiCamping: NZ Camping Map, DOC Sites & Road Trip Planner",
  metaDescription: "Find 6,500+ campsites, DOC huts, holiday parks and freedom camping areas across New Zealand. Offline place details, sharp filters and a stop-by-stop road trip planner for iPhone.",
  ogTitle: "KiwiCamping: the camping map and road trip planner for New Zealand",
  ogDescription: "6,500+ campsites, DOC huts, holiday parks and freedom camping areas, bundled offline. Filter, save and plan the whole trip.",
  metaKeywords: "camping app New Zealand, NZ camping map, freedom camping NZ, DOC campsites app, DOC huts map, holiday parks New Zealand, campervan app New Zealand, offline camping map NZ, New Zealand road trip planner",
  metaGuidesTitle: "New Zealand camping and road trip guides",
  metaGuidesDescription: "Camping rules, freedom camping and self-contained requirements, DOC sites, seasonal timing, real costs and practical planning for a New Zealand road trip.",
  metaToolsTitle: "New Zealand road trip calculators",
  metaToolsDescription: "Convert New Zealand prices, work out road trip fuel, estimate a realistic driving day, plan water and waste capacity and compare campsite pricing.",
  metaSupportTitle: "Support and FAQ",
  metaSupportDescription: "Help with KiwiCamping maps, place details, filters, collections, the trip planner, offline data, currency conversion and premium access.",

  navFeatures: "Features", navGuides: "Guides", navTools: "Tools", navSupport: "Support", download: "Download app", downloadShort: "Download",

  /* Alt text for the app screenshots. Real <img> elements need real alt text, and a German page
     describing its screenshots in English helps neither a reader nor an image search. */
  /** Prefix for the visible "Updated <date>" line in a guide header. */
  updated: "Updated",
  /** Heading above a guide's own two-question FAQ. */
  commonQuestions: "Common questions",

  altHero: "The KiwiCamping map for New Zealand, with campsite, holiday park and freedom camping pins across Golden Bay and the Explore list of nearby places below",
  altPlaceScreen: "A KiwiCamping place screen for Robin Hood Bay Campsite in Marlborough, showing the free fee, opening status, amenities and a booking link",
  altCollectionsScreen: "The KiwiCamping collections screen with Want to visit, Visited, Pins and All saved lists over a satellite map of Great Barrier Island",
  altTripScreen: "A KiwiCamping road trip itinerary for the Bay of Islands, listing seven stops with driving distance, dates and the weather at each campsite",
  altExploreScreen: "The KiwiCamping Explore list showing DOC huts and campsites in Southland, Auckland and Wellington with their distance from the map view",

  heroKicker: "The best camping app for New Zealand",
  heroTitle: "New Zealand is big, your plan can be simple",
  heroText: "6,500+ places across New Zealand, bundled offline so they still open with no signal. Filter down to exactly what you need, save it, and turn the shortlist into a road trip with routes, distance, dates, notes and to-dos.",
  seeHow: "See how it works",
  statPlaces: "6,500+", statPlacesLabel: "places across New Zealand",
  statOffline: "Offline", statOfflineLabel: "every place detail, no signal needed",
  statStays: "2,000+", statStaysLabel: "places to stay",

  trustLine: "Campsites, huts, holiday parks and useful stops across New Zealand.",
  trustCampsites: "Campsites", trustHolidayParks: "Holiday parks", trustNationalParks: "National parks",
  trustFreedomCamping: "Freedom camping", trustUsefulStops: "Useful stops", trustDayUse: "Day-use areas",

  processEyebrow: "From idea to open road",
  processTitle: "Find a camp. Build the trip.",
  processText: "Filter down to tonight’s camp, save tomorrow’s possibilities into collections and keep the route, distance, dates, notes and to-dos together in one trip.",
  findTitle: "Find the exact place",
  findText: "Search 6,500+ places, browse what is nearby, or stack filters until only the free camping areas with toilets and water in your corner of the map are left.",
  saveTitle: "Save it into a collection",
  saveText: "Like, star or mark a place as visited and the smart collections update themselves. Build your own named lists for a region, a season or a shortlist.",
  planTitle: "Turn it into a trip",
  planText: "Order the stops, see the distance between them, add dates and notes, check each stop’s weather, get directions and tick them off as you go.",

  featuresEyebrow: "The full toolkit",
  featuresTitle: "Find it. Save it. Plan the whole road ahead.",
  featuresText: "Explore places, compare the details, organise favourites and build a trip that stays useful after the planning table.",
  featureMainEyebrow: "Know the place before you get there",
  featureMainTitle: "Every place opens with the detail that decides it.",
  featureMainText: "Photos, a real description, opening hours, fees, terms and conditions, facilities grouped by type, current alerts, ratings, contact and booking details, the weather, and Apple Look Around to see the entrance from the road.",
  featureList1: "Photos, hours, fees, conditions and facilities",
  featureList2: "Look Around, weather and directions built in",
  featureList3: "Bundled offline, it opens with no signal",

  feature1Title: "Smart collections and your own lists",
  feature1Text: "Liked, Starred, Want to visit and Visited fill themselves as you mark places. Build named collections on top for an island, a season or the shortlist you are still arguing about.",
  feature2Title: "Filters that answer a real question",
  feature2Text: "Ask for free camping areas with toilets and drinking water around Queenstown, then narrow further by place type, fee, rating, online booking, region and detailed facility and access features.",
  feature3Title: "Standard, satellite and 3D maps",
  feature3Text: "Switch between the standard map and satellite imagery you can tilt and spin into real terrain. Pins group into counts when you are zoomed out and break apart as you move in.",
  feature4Title: "Look Around before the turnoff",
  feature4Text: "Apple Look Around opens straight from the place screen where coverage exists, so you can see the entrance, the road surface and the surroundings before committing the van to the turnoff.",
  feature5Title: "Weather on every place",
  feature5Text: "Current conditions and the forecast sit on the place screen and beside each trip stop, so a choice between two camps can be made with the sky in mind.",
  feature6Title: "Costs in your own currency",
  feature6Text: "Visiting and not fluent in New Zealand dollars? Choose your currency and set the rate once, and reported costs are shown alongside in money you can judge at a glance.",

  plannerEyebrow: "The main event",
  plannerTitle: "Stop by stop. Day by day.",
  plannerText: "The trip planner is what everything else feeds. Add saved places as stops and drag them into the order you will actually drive. Every leg shows its distance, directions open to the next one, each stop carries its own date, arrival notes and weather, and you tick them off as visited while you travel. Nearby alternatives stay attached for the days that change, the packing list sits beside the itinerary, and the whole thing can sync to Calendar.",
  plannerMetric1Title: "Distance & directions", plannerMetric1Text: "leg by leg, and the whole trip",
  plannerMetric2Title: "Dates & notes", plannerMetric2Text: "attached to every stop",
  plannerMetric3Title: "Visited & to-dos", plannerMetric3Text: "progress you can see",
  plannerMetric4Title: "Weather per stop", plannerMetric4Text: "beside the itinerary",

  routesEyebrow: "Guides worth reading first",
  routesTitle: "Know the rules. Know the cost.",
  routesText: "Practical guides to camping rules, safety, seasonal timing and what a New Zealand trip actually costs.",
  exploreRoutes: "Explore the guides",

  audiencesEyebrow: "However you carry home",
  audiencesTitle: "Made for tents, vans and big laps.",
  audience1Title: "Backpackers", audience1Text: "Make a tight budget and a flexible route work together.",
  audience2Title: "Campervans", audience2Text: "Find the facilities, access and overnight mix you need.",
  audience3Title: "Caravans & big rigs", audience3Text: "Filter for space, services and practical access notes.",
  audience4Title: "Weekend campers", audience4Text: "Keep nearby favourites ready when Friday arrives.",

  reviewsEyebrow: "What travellers say",
  reviewsTitle: "Made for plans that change.",

  principlesTitle: "Useful first. Honest always.",
  principle1Title: "Signs beat screens", principle1Text: "On-site notices, land managers and current emergency advice always take priority over a listing.",
  principle2Title: "Current checks matter", principle2Text: "Check the latest booking, road, fire and closure updates before departure.",
  principle3Title: "Leave places better", principle3Text: "Legal camping, thoughtful waste disposal and respect for the whenua keep these places open.",

  faqEyebrow: "A few straight answers",
  faqTitle: "Good questions. Clear answers.",
  faqIntro: "Straight answers about travelling with KiwiCamping.",
  faq1q: "What is KiwiCamping?",
  faq1a: "KiwiCamping is an iPhone app for finding places to camp and stay around New Zealand. It bundles a directory of 6,500+ places so the details stay readable without reception, and it turns the ones you save into a road trip with an ordered route, dates, notes and to-dos.",
  faq2q: "What places are included?",
  faq2a: "More than 6,500 places: DOC campsites, backcountry huts, holiday parks and other bookable stays, freedom camping areas, public dump stations and day-use places across both islands.",
  faq3q: "Does it work without reception?",
  faq3a: "The place directory is bundled with the app, so names, categories, descriptions, fees, facilities and conditions stay readable well beyond signal. Live services such as weather, routing, Look Around imagery, photos and provider pages still need a connection.",
  faq4q: "Can I plan a multi-stop road trip?",
  faq4a: "Yes, and it is the app's main feature. Add places as stops, drag them into order, attach a date and arrival notes to each one, see the driving distance leg by leg and across the whole trip, open directions to the next stop, check the weather at each one, tick stops off as visited and keep the packing list beside the itinerary. Itinerary details can sync to Calendar.",
  faq5q: "What are collections?",
  faq5a: "Two kinds. Smart collections (Liked, Starred, Want to visit, Visited, Pins and All saved) fill themselves as you mark places. On top of those you can create your own named collections with an icon and notes for a region, a season, a vehicle or a shortlist.",
  faq6q: "Can I filter for free camps or self-contained sites?",
  faq6a: "Yes, and combinations of them. Filters cover place type, fee, minimum rating, online booking, region and detailed facility and access features, so “free camping areas with toilets and drinking water near Queenstown” is a single query.",
  faq7q: "What is on a place screen?",
  faq7a: "Photos, a description, opening hours, fees, terms and conditions, facilities grouped by type, current alerts, ratings, contact and booking details, weather, Look Around where coverage exists, directions, and nearby alternatives.",
  faq8q: "What map views are there?",
  faq8a: "A standard map and a satellite view built on Apple's flyover imagery, which you can tilt and rotate for real 3D terrain. Apple Look Around gives the street-level view from the place screen.",
  faq9q: "Can I see prices in my own currency?",
  faq9a: "Yes. Choose your currency in settings and set the conversion rate, and reported costs are shown in that currency alongside the New Zealand dollar figure.",
  faq10q: "Can I book a campsite in KiwiCamping?",
  faq10a: "Open the booking details for a place to reach its provider and check live availability, prices and terms.",
  faq11q: "Are camping rules the same across New Zealand?",
  faq11a: "No. National law, council bylaws, conservation rules and individual site conditions can all apply. Always follow current signs, land-manager directions, fire restrictions and official alerts.",

  downloadEyebrow: "Your next place is out there",
  downloadTitle: "Find it. Save it. Plan the road ahead.",
  downloadText: "6,500+ New Zealand places offline, filters sharp enough to find the exact one, collections that organise themselves and a trip planner that holds the whole route. KiwiCamping for iOS.",

  guidesEyebrow: "New Zealand camping guides",
  guidesTitle: "Follow the road somewhere good.",
  guidesIntro: "Detailed guides for camps, rules, local costs and practical trip planning across New Zealand.",
  guideSingular: "guide", guidePlural: "guides", readGuide: "Read guide",
  // Count nouns for languages with a "few" plural (Czech, Polish: 2–4, 22–24 …), picked with
  // Intl.PluralRules. Every other language repeats its plural here; English never shows them.
  guidePluralFew: "guides", placesFew: "places",

  minuteRead: "minute read", places: "places", backToGuides: "Guides", photoCredits: "Photo credits",
  keepInMind: "Keep in mind", placesAlong: "Places along the way",
  checkBefore: "Check before you go",
  checkText: "Rules and conditions change. Recheck the official source and the page for your exact park or campground before departure.",
  priceTitle: "Price table in 10 currencies", pricesChecked: "Prices checked", conversionsUse: "Conversions use RBNZ rates from", item: "Item",
  currencyDisclaimer: "Currency figures are mechanical conversions of the NZD benchmark, not card or cash quotes. Banks and payment providers apply their own rates and fees.",
  related: "Related guides", takeRoad: "Take it on the road",
  savePlanTitle: "Save the stops. Plan the whole trip.",
  savePlanText: "Build an ordered route from saved places, calculate the distance and keep dates, notes and to-dos attached.",

  toolsEyebrow: "Useful numbers",
  toolsTitle: "Road trip tools. No mystery maths.",
  toolsIntro: "Quick planning calculators for New Zealand prices and driving costs. Every assumption stays visible so you can replace it with the number that fits your route.",
  currencyEyebrow: "Currency converter", currencyTitle: "Convert a New Zealand price.",
  currencyText: "Reference conversion for trip planning using Reserve Bank of New Zealand rates. Your bank or card may use another rate and add fees.",
  fuelEyebrow: "Fuel calculator", fuelTitle: "Price the driving distance.",
  fuelText: "Enter the full route distance, the vehicle\u2019s loaded fuel use and the expected price per litre. Remote prices can exceed city benchmarks.",
  driveEyebrow: "Driving day estimator", driveTitle: "How long that day really takes.",
  driveText: "Routing apps give moving time on an ideal road. This adds the road character and your actual stops, which is where a day usually runs over.",
  tankEyebrow: "Water and waste planner", tankTitle: "How many days off grid.",
  tankText: "Capacity in litres only becomes useful once it is expressed in days. Grey water usually fills before fresh water empties, so both are shown.",
  campEyebrow: "Campsite comparison", campTitle: "Per person or per site?",
  campText: "A DOC campsite usually charges per adult and a holiday park usually charges per site. The cheaper option flips with party size, which catches families out.",
  amount: "Amount", from: "From", to: "To",
  labelDistance: "Distance (km)", labelConsumption: "Consumption (L/100 km)", labelFuelPrice: "Fuel price (NZD/L)",
  labelRoadType: "Road type", roadMotorway: "Motorway or open straight", roadHighway: "Main highway", roadWinding: "Winding or coastal", roadNarrow: "Narrow, steep or gravel",
  labelStops: "Stops", labelFresh: "Fresh water (L)", labelGrey: "Grey water (L)", labelPeople: "People",
  labelAdults: "Adults", labelNights: "Nights", labelPerAdult: "Per adult (NZD)", labelPerSite: "Per site (NZD)",
  toolsReadingTitle: "Build the budget from current benchmarks.",
  toolsReadingText: "The tools calculate exactly what you enter. Our cost guides explain where the starting figures came from, when they were checked and what can change the final price.",
  toolsReadingLink: "Explore cost guides",
  calculatorNote: "These calculators are planning aids, not live booking, fuel-station or foreign-exchange quotes. Tank estimates assume roughly 11 litres of fresh water and 9 litres of grey water per person per day, which varies with showering and cooking. Confirm current prices before purchase.",
  enterValidValues: "Enter valid values", enterValidAmount: "Enter a valid amount",
  daysFresh: "days fresh", daysGrey: "days grey", theSame: "the same", perAdultCheaper: "per-adult is cheaper", perSiteCheaper: "per-site is cheaper",

  supportTitle: "How can we help?",
  supportIntro: "Answers for finding places, saving favourites, planning trips and using KiwiCamping on the road.",
  contact: "Contact support", privacy: "Privacy", terms: "Terms",
  explore: "Explore", help: "Help", getApp: "Get the app", travelGuides: "Travel guides",
  footerText: "Find 6,500+ New Zealand places offline, save the ones that matter and build complete road trips with routes, distance, dates, notes and to-dos.",
  footerLine: "Made for the long way around New Zealand.",

  rulesSafety: "Rules & safety", roadTrips: "Road trips", campingGuides: "Camping guides", tripPlanning: "Trip planning", costsBudget: "Costs & budget", appGuides: "App guides",

  review1Title: "Made our South Island route so much easier", review1Country: "Germany",
  review1Quote: "We used it for campsites and holiday parks between Christchurch and Queenstown and honestly it saved us hours. The offline stuff was the big one once we left the main roads... no signal for ages out there.",
  review2Title: "Does what I need", review2Country: "United States",
  review2Quote: "Quick to browse, easy to filter. Way better than the twelve browser tabs I had going before.",
  review3Title: "Brilliant", review3Country: "United Kingdom",
  review3Quote: "The hut info and the access notes saved us so much planning time. It genuinely feels like it was made by someone who has actually driven around New Zealand rather than someone who read about it. We used it every single day for three weeks and I'd pay double.",
  review4Title: "found a quiet spot after a long drive!", review4Country: "Italy",
  review4Quote: "after 6 hours driving we just needed somewhere quiet with a toilet and it took about 2 minutes to find one. much less stressful than guessing from a pin on google maps",
  review5Title: "Really useful", review5Country: "Netherlands",
  review5Quote: "Simple and clear. We mixed paid sites and free camping on our first trip and kept coming back to it.",
  review6Title: "Use it at home too", review6Country: "New Zealand",
  review6Quote: "Camped here my whole life and still found spots I didn't know about, which was a bit humbling to be honest. The dump station and water filters are the ones I open most.",
  review7Title: "Sorted the self-contained thing out", review7Country: "Australia",
  review7Quote: "Working out which sites actually needed certification used to take me forever, always second guessing whether we'd get a ticket. Having it separated out properly meant we just stopped worrying about it.",
  review8Title: "Worked with no signal on the west coast", review8Country: "France",
  review8Quote: "Westport down to the glaciers, basically no reception the whole way. Being able to open a site and still read everything made a real difference. That's the whole reason I keep it.",
  review9Title: "kept 6 of us organised!!", review9Country: "Ireland",
  review9Quote: "Six people, two vans, nobody had to ask where we were staying next. Reordering everything when the weather turned was easy which I did not expect.",
} as const;

/**
 * The analytics consent bar and its footer link.
 *
 * Deliberately not in `uiStrings`: a locale is published only when every `ui` key is translated
 * (`isTranslated` in lib/localized.ts), so one new `ui` key would unpublish every language at once.
 * Each `consent` string falls back to English on its own until a locale translates it.
 */
export const consentStrings = {
  label: "Privacy choices",
  text: "May KiwiCamping use Google Analytics cookies to learn which pages help travellers? They are never used for advertising.",
  accept: "Accept",
  decline: "Decline",
  policy: "Privacy policy",
  choices: "Privacy choices",
} as const;
export type ConsentKey = keyof typeof consentStrings;
export type ConsentStrings = Record<ConsentKey, string>;

export type UiKey = keyof typeof uiStrings;
export type UiStrings = Record<UiKey, string>;

export type StaticPage = { effective?: string; title: string; lede: string; sections: { heading: string; paragraphs: string[] }[] };
export type StaticPageKind = "support" | "privacy" | "terms";

export const staticPages: Record<StaticPageKind, StaticPage> = {
  support: {
    title: "How can we help?",
    lede: "Clear answers for maps, saved places, trip planning and the road ahead.",
    sections: [
      { heading: "Finding places", paragraphs: [
        "Search by place name, address or description. Move the map and choose the current-area option to focus results around the visible region.",
        "Filter by place type, fee, minimum rating, online booking, region and detailed facility and access features. Combine only the filters that matter so useful alternatives remain visible.",
        "Facilities, fees, access and management can change. Follow current signs and the land manager, then send a correction so the directory can improve.",
      ] },
      { heading: "Saved places", paragraphs: [
        "Liked, Visited, Want to Visit and Starred update automatically when you mark places. Pins and All Saved provide other quick views.",
        "Create named collections with an icon and notes, then add any place. Use them for a region, season, vehicle or shortlist.",
        "The app supports private iCloud sync for saved states, collections and trip data when iCloud is available and enabled.",
      ] },
      { heading: "Trip planner", paragraphs: [
        "Create a trip, add places and drag them into order. Each stop can carry its own arrival date, notes, weather and visited status, and the planner shows the driving distance leg by leg and across the whole trip.",
        "Road routing depends on available MapKit directions. The planner retains the stops if a leg fails, but you must confirm current road access yourself.",
        "Start with a camping essentials preset or make your own tasks. Trip progress keeps the list beside the itinerary, and itinerary details can sync to Calendar.",
      ] },
      { heading: "Maps, weather and live details", paragraphs: [
        "Switch between the standard map and a satellite view built on Apple's flyover imagery, which tilts and rotates into 3D terrain. Apple Look Around, the street-level view, opens from the place screen where coverage exists.",
        "Current and forecast weather requires live data. Save critical forecasts and official warnings before leaving coverage.",
        "The bundled place directory keeps core place details available beyond reliable signal. Live maps, routing, weather, photos and external provider pages may require reception.",
      ] },
      { heading: "Prices and currency", paragraphs: [
        "Choose your currency in settings and set the conversion rate. Reported costs are then shown in that currency alongside the New Zealand dollar figure, which helps when you are visiting and not fluent in NZD.",
        "Open a place's booking or contact details to check availability, price and terms with the provider. Prices in the app are reported figures, not live quotes.",
      ] },
      { heading: "Premium and purchases", paragraphs: [
        "KiwiCamping is free to download, and the map and search show every place. Without the Pass, only bookable holiday parks, stays and tours from BookIt open in full, along with a few guides.",
        "The Pass opens DOC campsites, huts and tracks, freedom camping spots, dump stations, day-use areas and every guide, and unlocks saving places, collections and the trip planner.",
        "Use Restore Purchases on the Premium screen while signed into the Apple account used for the original transaction.",
      ] },
    ],
  },
  privacy: {
    effective: "Effective 19 October 2026",
    title: "Privacy policy",
    lede: "KiwiCamping helps you plan a trip without turning your journey into an advertising profile.",
    sections: [
      { heading: "Information stored on your device", paragraphs: ["Saved places, collection membership, trips, notes, checklist items and preferences are stored for the app to work. Location can be used to show your position and nearby places after you grant permission."] },
      { heading: "iCloud", paragraphs: ["When iCloud is available and enabled, the app can use your private iCloud database to sync saved states, collections and app records across your devices. Apple provides the underlying service and applies its own terms."] },
      { heading: "Live Apple services", paragraphs: ["Map display, directions, Look Around, weather, calendar integration and widgets may use Apple frameworks. Requests and data handling for those services are governed by Apple. Calendar access occurs only after permission and is used to add trip itinerary information you request."] },
      { heading: "External links and website logs", paragraphs: [
        "Place details can open booking providers, websites, social profiles, phone numbers, email addresses and map apps. Those services receive information according to their own policies when you choose to open them.",
        "Hosting providers may process routine technical logs such as IP address, browser type and requested URL for delivery, reliability and security. KiwiCamping does not use advertising trackers on this website.",
      ] },
      { heading: "Website analytics", paragraphs: [
        "This website uses Google Analytics 4 to count visits and to see which pages lead people to the App Store. Google processes this data on our behalf as a processor. For visitors in the European Economic Area, the United Kingdom and Switzerland the service is provided by Google Ireland Limited, and elsewhere by Google LLC.",
        "Analytics records the pages you view, your device, browser and screen type, an approximate location derived from your IP address (Google does not store the address itself), the page that sent you here and your clicks on App Store links. It never receives your name, your email address or anything you save in the app.",
        "When analytics is allowed, Google Analytics sets two first-party cookies: _ga, and a second whose name starts with _ga_. Both expire after 13 months. In the European Economic Area, the United Kingdom and Switzerland these cookies are set only after you choose Accept on the consent bar. Until then, and if you choose Decline, no analytics cookies are stored and Google receives only cookieless signals that carry no identifier. You can change your choice at any time with the Privacy choices link at the foot of every page.",
        "Google signals and ad personalisation are switched off, so analytics data is not linked to Google accounts and is not used for advertising. Analytics data is kept for 14 months and then deleted. KiwiCamping still uses no advertising trackers on this website.",
      ] },
      { heading: "Retention and control", paragraphs: ["You can delete app records through the app and manage iCloud data through your Apple account. Removing the app can remove local data, while synced copies may remain in iCloud until separately deleted."] },
      { heading: "Children and contact", paragraphs: [
        "KiwiCamping is a general travel utility and is not directed to children. Do not submit personal information about a child through support.",
        "For privacy questions, contact KiwiCamping support.",
      ] },
    ],
  },
  terms: {
    effective: "Effective 12 August 2026",
    title: "Terms of use",
    lede: "KiwiCamping is a planning aid. It does not replace official signs, land-manager directions, emergency warnings, road advice or your responsibility to travel within your capability.",
    sections: [
      { heading: "Travel information changes", paragraphs: ["Places, prices, access, facilities, phone coverage, weather, fire conditions, roads and booking arrangements can change without notice. Verify critical details with the responsible authority or provider before travel and again close to departure."] },
      { heading: "No booking or access guarantee", paragraphs: ["A listing does not guarantee that a place is open, legal for your setup, reachable by your vehicle or available. External booking and contact links are provided for convenience. Contracts are between you and the third-party provider."] },
      { heading: "Safety and lawful use", paragraphs: ["You must obey signs, permits, closures, fire restrictions, road rules and directions from rangers, iwi, hapū, emergency services and land managers. Do not use the app while driving."] },
      { heading: "User data", paragraphs: ["You are responsible for notes, trip plans and other information you save. Keep separate copies of permits, bookings and safety-critical plans when loss of access could put a trip at risk."] },
      { heading: "Purchases", paragraphs: ["Any in-app purchase is processed by Apple and subject to the terms shown at purchase. Features, packaging and prices may change where allowed. Use Apple’s purchase tools for billing, cancellation and refund matters."] },
      { heading: "Intellectual property and contact", paragraphs: [
        "KiwiCamping branding, interface and original editorial content belong to their respective owner. Place names and public facts remain the property or responsibility of their original sources.",
        "Questions can be sent to KiwiCamping support.",
      ] },
    ],
  },
};

/**
 * The `tools` namespace: every string on the calculator pages under /tools/<tool>/.
 *
 * Deliberately separate from `uiStrings`. A locale publishes only when every `ui` key is translated,
 * so new tool copy there would unpublish every language at once. Here a missing string just leaves
 * that one tool page in English and noindex for the locale (lib/tools.ts), until `tools.shared` and
 * `tools.<tool>` are complete.
 *
 * `{name}` placeholders are filled with numbers formatted for the page's language. Keep them exactly.
 */
export const toolStrings = {
  shared: {
    breadcrumbHome: "Home",
    breadcrumbTools: "Tools",
    howTitle: "How it's calculated",
    exampleTitle: "Worked example",
    assumptionsTitle: "Assumptions",
    sourcesTitle: "Sources",
    faqTitle: "Common questions",
    guidesTitle: "Related guides",
    otherToolsTitle: "More road trip calculators",
    openTool: "Open the calculator",
    ctaEyebrow: "Plan it in KiwiCamping",
    ctaTitle: "Find the stops, then do the maths.",
    ctaText: "KiwiCamping is free to download for iPhone. Bookable holiday parks, stays and tours are free in the app. DOC campsites, huts, dump stations and the guides open with the Pass.",
    ctaButton: "Download app",
    enterValidValues: "Enter valid values",
    enterValidAmount: "Enter a valid amount",
  },
  index: {
    metaTitle: "NZ Road Trip Calculators: Fuel, Driving Time, Campsite Costs",
    metaDescription: "Free New Zealand road trip calculators: fuel cost, driving time by road type, campsite cost per person or per site, NZD currency conversion and campervan water tanks.",
    toolsTitle: "One calculator per question",
    toolsText: "Each calculator has its own page with the formula, a worked example using New Zealand figures, the assumptions behind it and answers to common questions.",
  },
  fuel: {
    metaTitle: "Fuel Cost Calculator NZ: Campervan Road Trip Fuel",
    metaDescription: "Work out litres and fuel cost for a New Zealand road trip from distance, L/100 km and the pump price, with the formula, a 1,000 km worked example and MBIE's benchmark.",
    eyebrow: "Fuel cost calculator",
    cardEyebrow: "Fuel calculator",
    h1: "Fuel cost calculator for a New Zealand road trip",
    intro: "Enter the route distance, your vehicle's loaded fuel use and the price per litre. The default price is MBIE's national board price for regular 91 petrol in the week ending 26 July 2026.",
    cardTitle: "Price the driving distance.",
    cardText: "Enter the full route distance, the vehicle's loaded fuel use and the expected price per litre. Remote prices can exceed city benchmarks.",
    labelDistance: "Distance (km)",
    labelConsumption: "Consumption (L/100 km)",
    labelPrice: "Fuel price (NZD/L)",
    formula: [
      "Litres = distance (km) × consumption (L/100 km) ÷ 100",
      "Cost = litres × price per litre (NZD)",
    ],
    formulaNote: "Consumption is quoted per 100 kilometres, so dividing by 100 turns it into litres per kilometre. The sum is linear: double the distance and both the litres and the cost double.",
    example: "A {distance} km route in a campervan using {consumption} L/100 km needs {litres} litres of fuel. At {price} a litre, that is {cost}.",
    assumptions: [
      "The default price is a national benchmark. Remote stations, including on the West Coast and in Fiordland, often charge more, so fill up before long gaps between towns.",
      "Use the loaded consumption of the vehicle you are actually driving. A full campervan on hills and into a headwind uses more than its brochure figure.",
      "Add the local driving around each stop. Supermarket runs, viewpoints and side roads add up over a long route.",
      "Diesel vehicles pay road user charges (RUC) for every 1,000 km on top of fuel. This calculator covers fuel only.",
    ],
    faq: [
      ["How much fuel does a campervan use in New Zealand?", "It depends on the vehicle, the load and the roads. Use the figure from your hire company or vehicle and allow a margin for hills. The 12 L/100 km default is a planning figure for a loaded campervan, not a measured average."],
      ["Does the fuel cost include road user charges?", "No. Diesel vehicles in New Zealand pay road user charges per 1,000 km separately from fuel. Ask your hire company whether RUC is included in the rate, and check NZTA for current charges."],
      ["Where does the default fuel price come from?", "It is MBIE's national board price for regular 91 petrol in the week ending 26 July 2026. MBIE publishes fuel prices every week, so check the latest figure before you go."],
    ],
  },
  drive: {
    metaTitle: "Driving Time Calculator NZ: Realistic Hours by Road Type",
    metaDescription: "Estimate how long a New Zealand driving day really takes from the distance, the kind of road and your stops, with the formula, a worked example and the speeds used.",
    eyebrow: "Driving time calculator",
    cardEyebrow: "Driving day estimator",
    h1: "Driving time calculator for New Zealand roads",
    intro: "Routing apps give moving time on an ideal road. This calculator takes the distance you already know, an average speed for the kind of road and 20 minutes for every stop, which is where a New Zealand driving day usually runs over.",
    cardTitle: "How long that day really takes.",
    cardText: "Routing apps give moving time on an ideal road. This adds the road character and your actual stops, which is where a day usually runs over.",
    labelDistance: "Distance (km)",
    labelRoadType: "Road type",
    roadMotorway: "Motorway or open straight",
    roadHighway: "Main highway",
    roadWinding: "Winding or coastal",
    roadNarrow: "Narrow, steep or gravel",
    labelStops: "Stops",
    hoursMinutes: "{hours} h {minutes} min",
    formula: [
      "Driving minutes = distance (km) ÷ average speed (km/h) × 60",
      "Total minutes = driving minutes + 20 × stops",
    ],
    formulaNote: "The average speed is not the speed limit. It allows for corners, hills, one-lane bridges, towns and slower traffic. The four road types use 85, 70, 60 and 45 km/h.",
    example: "A {distance} km day on winding or coastal roads at {speed} km/h is {driving} of driving. Add {stops} stops at 20 minutes each and the day takes {total}.",
    assumptions: [
      "The average speeds are planning figures for a car or campervan in good conditions, not measured averages for any one road.",
      "Each stop counts 20 minutes for fuel, food, a toilet or a viewpoint. Ferries, road works and long walks need adding on top.",
      "Weather, slips and closures change routes. Check NZTA's journey planner for current road conditions before you set off.",
    ],
    faq: [
      ["How far can you drive in a day in New Zealand?", "There is no single number. Winding roads, one-lane bridges and stops keep average speeds well below the open-road limit, so a day that looks short on a map can take most of the daylight. Enter the distance and road type to see the hours, and plan regular rest breaks."],
      ["Why is this longer than my maps app?", "Maps apps estimate moving time with no stops. This uses an average for the kind of road and adds time for each stop, which is closer to how a camping day actually goes."],
      ["Does it work for a campervan?", "Yes. Choose a slower road type if you are driving a large vehicle, towing, or new to driving on the left."],
    ],
  },
  campsite: {
    metaTitle: "Campsite Cost Calculator NZ: Per Person or Per Site?",
    metaDescription: "Compare a DOC campsite charged per adult with a holiday park charged per site for your group and nights, with the formula, a worked example and DOC fee figures from the data.",
    eyebrow: "Campsite cost calculator",
    cardEyebrow: "Campsite comparison",
    h1: "Campsite cost calculator: per person or per site",
    intro: "DOC campsites charge per adult per night, while a holiday park usually charges per site. Which one is cheaper flips with the size of your group, and this works it out for your nights.",
    cardTitle: "Per person or per site?",
    cardText: "A DOC campsite usually charges per adult and a holiday park usually charges per site. The cheaper option flips with party size, which catches families out.",
    labelAdults: "Adults",
    labelNights: "Nights",
    labelPerAdult: "Per adult (NZD)",
    labelPerSite: "Per site (NZD)",
    comparison: "{perAdult} vs {perSite} · {verdict}",
    theSame: "the same",
    perAdultCheaper: "per-adult is cheaper",
    perSiteCheaper: "per-site is cheaper",
    formula: [
      "Per-adult total = adults × nights × rate per adult",
      "Per-site total = nights × rate per site",
      "The lower total is the cheaper option for your group",
    ],
    formulaNote: "The per-adult total grows with every extra adult, while the per-site total does not. That is why the answer changes between a couple and a family.",
    example: "{adults} adults staying {nights} nights at {rateAdult} per adult pay {totalAdult}. The same stay at {rateSite} per site costs {totalSite}, so {verdict}.",
    assumptions: [
      "Children are left out. Many DOC campsites charge a reduced rate for ages 5 to 17 and nothing for infants, and holiday parks set their own child rates.",
      "The default rates are examples, not quotes. In the DOC data as of {docDate}, {docFree} DOC campsites are free, and the lowest adult rate listed at paid ones runs from {docMin} to {docMax} per night.",
      "Holiday parks set their own prices, which change with the season, power and site size. Check the park before you book.",
    ],
    faq: [
      ["How much does a campsite cost per night in New Zealand?", "DOC campsites are either free or charge per adult. In the DOC data as of {docDate}, the lowest adult rate at paid DOC campsites runs from {docMin} to {docMax} per night, with a median of {docMedian}. Holiday parks set their own site prices, so compare the total for your group."],
      ["Is per person or per site cheaper for a family?", "Per site usually wins as the group grows, because the site price stays the same while per-adult charges multiply. Enter your own rates to see where the break-even point falls."],
      ["Do children pay at DOC campsites?", "At many DOC campsites children aged 5 to 17 pay a reduced rate and infants stay free. The fee for each campsite is on its DOC page."],
    ],
  },
  currency: {
    metaTitle: "NZD Currency Converter: New Zealand Prices in 9 Currencies",
    metaDescription: "Convert New Zealand dollar prices to and from USD, EUR, GBP, AUD, JPY, CNY, KRW, INR and SGD using Reserve Bank of New Zealand reference rates.",
    eyebrow: "Currency converter",
    cardEyebrow: "Currency converter",
    h1: "NZD currency converter for New Zealand trip prices",
    intro: "Convert a New Zealand price into your own currency, or your currency into New Zealand dollars, using Reserve Bank of New Zealand reference rates from {rateDate}.",
    cardTitle: "Convert a New Zealand price.",
    cardText: "Reference conversion for trip planning using Reserve Bank of New Zealand rates from {rateDate}. Your bank or card may use another rate and add fees.",
    labelAmount: "Amount",
    labelFrom: "From",
    labelTo: "To",
    formula: [
      "Amount in NZD = amount ÷ rate of the currency you convert from",
      "Result = amount in NZD × rate of the currency you convert to",
    ],
    formulaNote: "Each rate is the number of units of that currency per 1 New Zealand dollar, so every conversion passes through NZD.",
    example: "{amount} at {rate} US dollars per New Zealand dollar is {converted}.",
    assumptions: [
      "These are reference rates from {rateDate}. Exchange rates move every day.",
      "Banks, cards and cash machines use their own rates and may add fees, so the amount you pay can differ.",
      "Japanese yen and Korean won are shown without decimals.",
    ],
    faq: [
      ["What currency is used in New Zealand?", "The New Zealand dollar (NZD). Prices in shops, campsites and holiday parks are quoted in NZD."],
      ["Is this the rate my bank will give me?", "Probably not exactly. This uses reference rates from {rateDate}. Your bank or card provider applies its own rate and fees, so treat the result as a planning figure."],
    ],
  },
  water: {
    metaTitle: "Campervan Water Tank Calculator: Fresh and Grey Water Days",
    metaDescription: "Work out how many days a campervan's fresh and grey water tanks last for your group, with the formula, a worked example and the daily figures behind it.",
    eyebrow: "Water tank calculator",
    cardEyebrow: "Water and waste planner",
    h1: "Campervan water tank calculator",
    intro: "A tank size in litres only becomes useful once it is days. Enter the fresh and grey water capacity and the number of people to see which tank sets your limit.",
    cardTitle: "How many days off grid.",
    cardText: "Capacity in litres only becomes useful once it is expressed in days. Fresh and grey water are shown separately, because whichever runs out first sets the limit.",
    labelFresh: "Fresh water (L)",
    labelGrey: "Grey water (L)",
    labelPeople: "People",
    days: "{fresh} days fresh · {grey} days grey",
    formula: [
      "Fresh water days = fresh tank (L) ÷ (people × 11 L a day)",
      "Grey water days = grey tank (L) ÷ (people × 9 L a day)",
      "The lower of the two is how long you can stay before refilling or emptying",
    ],
    formulaNote: "Grey water is the waste from sinks and showers. It is lower than fresh water use because drinking water and cooking water do not all end up in the tank.",
    example: "{people} people with a {freshTank} litre fresh tank and a {greyTank} litre grey tank have {freshDays} days of fresh water and {greyDays} days of grey water, so the fresh tank sets the limit.",
    assumptions: [
      "11 litres of fresh water and 9 litres of grey water per person per day are planning figures for careful use: drinking, cooking, washing up and a quick wash. Showers use far more.",
      "Toilet cassettes and black water are not included.",
      "Empty grey water only at a dump station. Never on the ground or into a stormwater drain.",
    ],
    faq: [
      ["How long does 100 litres of fresh water last in a campervan?", "For two careful users at 11 litres each a day, about four and a half days. Showers and washing clothes shorten that a lot."],
      ["Where can I empty grey water in New Zealand?", "At a dump station. Many holiday parks have one, and councils run public ones in many towns. Never empty grey water onto the ground or into a stormwater drain."],
      ["Which tank runs out first?", "Whichever is smaller for your use. Grey tanks are often smaller than fresh tanks, so check both rather than only the fresh water gauge."],
    ],
  },
} as const;

export type ToolStrings = typeof toolStrings;
export type ToolId = Exclude<keyof ToolStrings, "shared" | "index">;
