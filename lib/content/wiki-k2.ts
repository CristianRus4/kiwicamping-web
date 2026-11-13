import { makeArticle as a, type Article, type ArticleSection, type ArticleTable } from "@/lib/article-model";

const s = (heading: string, body: string[], tips?: string[], extra?: { table?: ArticleTable; cta?: boolean }): ArticleSection => ({
  heading, body, tips, ...(extra?.table && { table: extra.table }), ...(extra?.cta && { cta: true }),
});

/**
 * Guides for New Zealand campers thinking of moving from WikiCamps NZ (plan:
 * .growth-lanes/wiki-switch/PLAN-k.md, articles 6 to 10, rewritten under OWNER-UPDATE-3). Written for
 * campers: WikiCamps' problems in a plain sentence or two, no review counts, versions or dates, and
 * only what KiwiCamping does well. Never link to WikiCamps or another camping app's site.
 */
export const wikiK2Articles: Article[] = [
  a({
    slug: "wikicamps-nz-account-login",
    title: "WikiCamps Login: Does WikiCamps NZ Need an Account in 2027?",
    description: "Does WikiCamps NZ need an account in 2027? Yes, with an emailed code to sign in. Why that's a pain on a NZ road trip, and how KiwiCamping works with no login at all.",
    category: "App guides",
    region: "New Zealand",
    places: ["DOC campsites", "DOC huts", "West Coast", "Fiordland", "iCloud sync"],
    imageAlt: "A white campervan parked alone in a grassy clearing below native bush on the West Coast",
    related: ["wikicamps-not-working-new-zealand", "share-nz-trip-plan-kiwicamping", "does-wikicamps-nz-work-offline", "switch-from-wikicamps-nz", "kiwicamping-offline-data-guide", "wikicamps-alternatives"],
    hubs: ["camping"],
    intro:
      "Yes. Since WikiCamps' big update, WikiCamps NZ needs an account, and you sign in with a code sent to your email. KiwiCamping skips all of that: there is no account, so you open the app and you're straight on the map. We make KiwiCamping, and here's what having no login means on a New Zealand road trip.",
    sections: [
      s("Why the WikiCamps login gets in the way", [
        "Lots of WikiCamps users say the new version keeps logging them out, and getting back in means waiting for an emailed code. That's no fun at a campsite with no signal.",
        "It's also one of the main reasons people find WikiCamps NZ not working the way it used to. Many say the new version is harder to use, and that it shows ads in an app they paid for.",
      ], ["Account and emailed code", "Logged out with no signal", "Ads in a paid app"]),
      s("KiwiCamping: no account, no login, no ads", [
        "KiwiCamping has nothing to sign into. No email, no password, no code, and nothing that can log you out halfway down the West Coast.",
        "Your saved places, collections, pins and trips sync quietly through the iCloud already on your iPhone. There are no ads either, and KiwiCamping is independent: it shows DOC's free and low-cost campsites right next to paid holiday parks. It's free to download, with in-app purchases.",
      ], ["Nothing to sign into", "Syncs through your iCloud", "No ads, independent"], {
        cta: true,
        table: {
          caption: "Signing in, side by side.",
          head: ["", "WikiCamps NZ", "KiwiCamping"],
          rows: [
            ["Account", "Required", "None"],
            ["Signing in", "Emailed code", "Not needed"],
            ["Logged out at camp", "Users say it happens", "Never: nothing to log out of"],
            ["Ads", "Yes, in a paid app", "None"],
            ["Your phones in sync", "Through your WikiCamps account", "Through your iCloud"],
          ],
        },
      }),
      s("Open it and you're on the map", [
        "There's no welcome screen to get past. The map of New Zealand is the first thing you see, with campsites, huts and holiday parks around you.",
        "Tap filters and the popular ones sit at the top: Dogs allowed, 4WD access and Caravan access. Pick a few and every place shown matches all of them. Tap a place for its fees, facilities and rules, then add it to your trip.",
        "Place details, your saved places and your trips all stay on the phone, so they still open without reception.",
      ], ["The map comes first", "Dogs allowed, 4WD and Caravan access", "Details open with no signal"]),
      s("Plan with your partner, still with no account", [
        "Travelling as two? Tap Share on a trip or a collection and choose Collaborate. Your partner joins through iCloud, and you can both add and reorder stops, tick them off and edit notes. Changes show up on both phones within seconds.",
        "For family back home, share the trip with Send copy instead: a link that opens in any web browser with your stops, dates and notes.",
      ], ["Collaborate live through iCloud", "Both of you can edit", "Send copy for family"]),
      s("A new phone? Nothing to sign into", [
        "Set up a new iPhone with your Apple Account and your trips, collections and saved places come across by themselves. Nothing to remember, nothing to reset.",
        "Before you fly, install KiwiCamping on Wi-Fi and save your first few nights. If one is a booked DOC campsite or a Great Walk hut, add it to a trip with its date, so the plan is ready when you pick up the van.",
      ], ["New iPhone, same trips", "Install on Wi-Fi before you fly", "Add booked nights first"]),
    ],
    faq: [
      ["Does WikiCamps need an account?", "Yes. The new version of WikiCamps NZ asks you to create an account and sign in with a code it emails you."],
      ["Why does WikiCamps keep asking me to sign in?", "The new version is tied to an account, and many users say it logs them out from time to time. KiwiCamping has no account, so there's nothing to sign back in to."],
      ["Is there a NZ camping app without a login?", "Yes. KiwiCamping, which we make, has no account, no login and no ads. It opens straight to the map."],
      ["Does KiwiCamping need an account?", "No. Your places and trips sync through the iCloud already on your iPhone."],
      ["Can my partner and I share a trip without an account?", "Yes. Tap Share on the trip and choose Collaborate. You both edit the same trip through iCloud, and changes show up within seconds."],
    ],
    sources: [
      { label: "DOC: places to stay", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/freedom-camping/" },
      { label: "Apple: iCloud", url: "https://www.apple.com/nz/icloud/" },
    ],
  }),
  a({
    slug: "does-wikicamps-nz-work-offline",
    title: "Does WikiCamps NZ Work Offline? No-Signal Camping in 2027",
    description: "Does WikiCamps NZ work offline in 2027? Partly, after a download and with an account. KiwiCamping keeps every DOC campsite, hut and all your trips on the phone, no download.",
    category: "App guides",
    region: "New Zealand",
    places: ["DOC campsites", "DOC huts", "Freedom camping", "Haast Pass", "Milford Road", "The Catlins"],
    imageAlt: "Mitre Peak rising above the still water of Milford Sound at the end of the Milford Road",
    related: ["kiwicamping-offline-data-guide", "wikicamps-nz-account-login", "freedom-camping-rules-new-zealand", "new-zealand-driving-day-planner", "wikicamps-not-working-new-zealand", "best-campervan-apps-new-zealand"],
    hubs: ["freedom-camping"],
    intro:
      "Partly. WikiCamps' Offline Mode keeps its maps and up to three planned trips on your phone once you've downloaded them, but you still need an account, and that can get in the way with no signal. KiwiCamping keeps every DOC campsite, hut and track, and all of your trips, on your phone from the moment you install it, with nothing to download and nothing to sign into. We make KiwiCamping; here's how both apps handle the long stretches with no bars.",
    sections: [
      s("Does WikiCamps work offline?", [
        "WikiCamps says its Offline Mode lets you use maps and up to three of your planned trips without signal. You download them first, while you're still connected.",
        "The catch is the account. Many WikiCamps users say the app logs them out now and then, and the WikiCamps login needs signal to get back in. Being stuck at a sign-in screen in a valley with no coverage is the last thing you want.",
      ], ["Download first", "Up to three planned trips", "Signing back in needs signal"]),
      s("KiwiCamping: nothing to download, nothing to sign into", [
        "KiwiCamping has no account, so there is never a sign-in screen between you and tonight's campsite. Open the app anywhere and you're in.",
        "All of New Zealand's DOC campsites, huts and tracks are built into the app, with fees, facilities, dog rules and booking needs. That's over 900 DOC huts alone, readable on the Milford Road or deep in the Catlins without a single bar.",
        "Your own things stay with you too, even without reception: liked and starred places, collections, private notes, and every trip with its stops, dates and notes.",
      ], ["No account, no sign-in screen", "Every DOC campsite, hut and track", "All your trips, not just three"], {
        cta: true,
        table: {
          caption: "With no signal, side by side.",
          head: ["", "WikiCamps NZ", "KiwiCamping"],
          rows: [
            ["Download before you go", "Yes, in Offline Mode", "No, place details are built in"],
            ["Your planned trips", "Up to three", "All of them"],
            ["Account to sign into", "Yes", "None"],
          ],
        },
      }),
      s("Pick tonight's spot before the bars drop", [
        "Some of the best drives in the country, like the Haast Pass, the Milford Road and the Catlins, are where you're most likely to lose signal. That's exactly where having every place's details on the phone pays off.",
        "Open the filters and choose what matters: Dogs allowed, 4WD access or Caravan access sit at the top, and a place has to match every filter you pick. Add your favourite to the trip, plus a fallback nearby, and you're set for the night.",
      ], ["Details with no bars", "Filters that match all your choices", "Save a fallback too"]),
      s("Freedom camping rules with no signal", [
        "DOC's freedom-camping notices for conservation land are in KiwiCamping, so you can see where camping is prohibited or restricted when you're miles from coverage.",
        "On council land the freedom camping rules come from each council's bylaw. Read the one for the next district while you're still in town, and always follow the sign at the site.",
      ], ["DOC notices built in", "Council bylaws: read them in town", "The sign at the site wins"]),
      s("Your whole trip in your pocket", [
        "Every trip keeps its stops in driving order with your dates and notes, and you can tick stops off as you go. The To-do list keeps the jobs for each day in the same place.",
        "The You tab fills in a map of where you've been, with the nights camped and kilometres travelled adding up as the trip goes on.",
      ], ["Stops, dates and notes", "Tick stops off as you go", "A map of where you've been"]),
    ],
    faq: [
      ["Does WikiCamps NZ work offline?", "Partly. Its Offline Mode keeps maps and up to three planned trips after you download them, but the app still needs an account, and signing back in needs signal."],
      ["Which NZ camping app works without signal?", "KiwiCamping keeps every DOC campsite, hut and track and all your trips on your phone, with no download and no login to get stuck behind."],
      ["Can I check freedom camping rules without signal?", "On conservation land, yes: KiwiCamping includes DOC's freedom-camping notices. Check council bylaws while you're still in town."],
      ["How many WikiCamps trips can I keep offline?", "Up to three, according to WikiCamps. In KiwiCamping every trip you make stays on your phone."],
      ["Do I need to download anything for KiwiCamping to work without signal?", "No. The DOC campsites, huts and tracks come with the app, and your saved places and trips are always on your phone."],
    ],
    sources: [
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/freedom-camping/" },
      { label: "DOC: alerts and closures", url: "https://www.doc.govt.nz/parks-and-recreation/know-before-you-go/alerts/" },
      { label: "NZTA Journeys: road conditions and closures", url: "https://www.journeys.nzta.govt.nz/" },
    ],
  }),
  a({
    slug: "switch-from-wikicamps-nz",
    title: "Switch From WikiCamps NZ in 2027: Move Your Places and Trip",
    description: "Move from WikiCamps NZ to KiwiCamping in an evening: add every saved place and trip stop by name, address or pin, starting with booked DOC nights and the ferry.",
    category: "App guides",
    region: "New Zealand",
    places: ["DOC campsites", "DOC huts", "Cook Strait", "Freedom camping", "Saved places", "Collections"],
    imageAlt: "An Interislander ferry crossing Cook Strait between the North and South Islands",
    related: ["wikicamps-not-working-new-zealand", "wikicamps-nz-trip-planner-alternative", "share-nz-trip-plan-kiwicamping", "save-places-kiwicamping", "plan-trip-kiwicamping", "freedom-camping-rules-new-zealand", "kiwicamping-filters-guide"],
    hubs: ["camping", "freedom-camping"],
    intro:
      "To switch from WikiCamps NZ, jot down your saved places and your trip, then add each one to KiwiCamping with a quick search. Places in the app, any address and your own dropped pins all work, so most trips move over in an evening. We make KiwiCamping, and this is the fastest order to do it in, starting with the nights you can't change.",
    sections: [
      s("Why campers are switching from WikiCamps NZ", [
        "Plenty of WikiCamps users find the new version a chore: harder to use, quick to log them out, and full of ads they never expected after paying. If WikiCamps NZ is not working for you any more, you don't have to keep wrestling with it.",
        "KiwiCamping opens straight to the map, with no account, no login and no ads. You'll have DOC's campsites, huts and tracks at your fingertips, filters that match everything you pick, and a trip you can plan together with your partner.",
      ], ["No account or login", "No ads", "Plan together with your partner"]),
      s("Step 1: jot down what you have", [
        "Open WikiCamps one last time and screenshot your favourites, your lists and your trip, or type the names into your Notes app. Keep the booking references for any nights you've already paid for.",
        "That list is all you need. Everything from here happens in KiwiCamping.",
      ], ["Screenshot lists and trips", "Keep booking references"]),
      s("Step 2: booked nights and the ferry first", [
        "Create a trip, then tap Add stop and search for each booked DOC campsite or Great Walk hut. Give each stop its arrival date and pop the booking reference in its note.",
        "Next, the Cook Strait crossing. Add the ferry terminal by its address, then the last night before it and the first night after. Once these fixed points are in, the rest of the trip falls into place around them.",
      ], ["Add stop for each booking", "Dates and booking notes", "Ferry terminal by address"]),
      s("Step 3: every other spot, even unlisted ones", [
        "The same Add stop search finds places in the app, any street address, your current location and your saved pins. Got a favourite spot of your own? Drop a pin on the map and tap Add to trip.",
        "Every stop shows on the route with its distance and drive time, so you can see straight away whether a day is too long. Tap Start at Home or Finish at Home to bookend the trip with the address you saved in the You tab.",
      ], ["Places, addresses and pins", "Drop a pin, add to trip", "Distance and drive time for every stop"]),
      s("Step 4: your favourites and lists in KiwiCamping", [
        "Like or star the places you loved, and mark the ones you still want to see as Want to visit.",
        "Your own WikiCamps lists become collections of your own, and one per island works well. Your tips for a place go in its private note.",
      ], ["Liked, Starred, Want to visit", "Lists become collections", "Tips go in private notes"], {
        table: {
          caption: "Where your WikiCamps things go in KiwiCamping.",
          head: ["From WikiCamps NZ", "In KiwiCamping"],
          rows: [
            ["Favourites", "Liked or Starred"],
            ["Places you plan to see", "Want to visit"],
            ["Your own lists", "Collections, one per island or trip"],
            ["Your trip", "A trip with dated stops, from Add stop"],
            ["A secret spot", "A dropped pin, added to the trip"],
            ["Notes on a site", "A private note on the place"],
          ],
        },
      }),
      s("Step 5: freedom camping nights", [
        "Don't just copy old freedom camping spots across: check the freedom camping rules again. DOC's notices for conservation land are in KiwiCamping, and council bylaws are on each council's website.",
        "Then let the filters find you somewhere new. Dogs allowed, 4WD access and Caravan access sit at the top, the Cost filter brings up DOC's free and low-cost campsites, and every place shown matches all the filters you choose.",
      ], ["DOC notices in the app", "Filters match all your choices", "DOC's free and low-cost campsites"]),
      s("Bring your travel partner along", [
        "Tap Share on the trip and choose Collaborate to invite your partner through iCloud. You both add stops, reorder them, tick them off and edit notes, and changes appear on both phones within seconds.",
        "Your own iPhones stay in sync through iCloud too, with nothing to sign into. KiwiCamping has no ads and is independent, and it's free to download, with in-app purchases.",
      ], ["Collaborate live", "Synced through iCloud", "No ads, independent"], { cta: true }),
    ],
    faq: [
      ["Can I export my trip from WikiCamps?", "The quickest move is a list or screenshots of your WikiCamps trip. Then add each stop in KiwiCamping with Add stop, which finds places, addresses and pins."],
      ["How do I move my saved campsites to another app?", "Search each one in KiwiCamping and save it: favourites become Liked or Starred, and your lists become collections."],
      ["Can I add my own spot to a trip?", "Yes. Drop a pin and tap Add to trip, or add any address with Add stop."],
      ["Can my partner and I plan the trip together?", "Yes. Tap Share on the trip and choose Collaborate. You both edit it live through iCloud, with no account."],
      ["How long does switching from WikiCamps take?", "Most trips take an evening. Start with booked nights and the ferry, then add the rest."],
    ],
    sources: [
      { label: "DOC: places to stay", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/freedom-camping/" },
      { label: "Apple: iCloud", url: "https://www.apple.com/nz/icloud/" },
    ],
  }),
  a({
    slug: "share-nz-trip-plan-kiwicamping",
    title: "Share Your NZ Road Trip Itinerary With Family (2027)",
    description: "Plan your New Zealand road trip live with your partner, send family a link they can open in any browser, or share the route as a picture, all from KiwiCamping.",
    category: "App guides",
    region: "KiwiCamping",
    places: ["Collaborate", "Send copy", "Share as image", "Calendar sync", "Plan My Walk"],
    imageAlt: "Cathedral Cove's white cliffs and sandy beach on the Coromandel Peninsula",
    related: ["plan-trip-kiwicamping", "wikicamps-nz-trip-planner-alternative", "new-zealand-driving-day-planner", "save-places-kiwicamping", "wikicamps-nz-account-login", "switch-from-wikicamps-nz"],
    intro:
      "To share a road trip itinerary from KiwiCamping, tap Share on your trip. Choose Collaborate to plan it live with your partner, Send copy to give family a link they can open in any web browser, or Share as image for a picture of the route. We make KiwiCamping, and here's how each one works on a New Zealand trip.",
    sections: [
      s("Three ways to share a road trip itinerary from KiwiCamping", [
        "Each option suits a different person. Your travel partner gets the real trip to edit, family at home get a link that just works, and the group chat gets a picture worth looking at.",
        "None of them needs an account or a login, and Collaborate runs through the iCloud already on your iPhone.",
      ], ["Collaborate for your partner", "Send copy for family", "Share as image for the chat"], {
        cta: true,
        table: {
          caption: "Which way to share.",
          head: ["Option", "Best for", "What they get"],
          rows: [
            ["Collaborate", "Your travel partner", "The same trip, live: both of you can edit"],
            ["Send copy", "Family and friends", "A link to the trip that opens in any browser"],
            ["Share as image", "Group chats", "A picture with the route, stops, dates and nights"],
          ],
        },
      }),
      s("Plan together with Collaborate", [
        "Tap Share on a trip, or on one of your collections, and choose Collaborate to invite your partner through iCloud. From then on it's one trip for two.",
        "You can both add stops in the trip planner, drag them into a new order, tick them off and edit the notes. Changes show up on the other phone within seconds, so whoever is in the passenger seat can plan tomorrow while the other drives.",
      ], ["Invite through iCloud", "Both add, reorder and tick off", "Changes in seconds"]),
      s("Send copy: a link family can open anywhere", [
        "Send copy makes a link anyone can open in a web browser, on a phone or a laptop. It shows the trip's stops, dates and notes, so Mum can see which night you'll be in Wānaka.",
        "If they have KiwiCamping, they can save the trip to their own trips with one tap. It's also the easy way to look at your own plan on a laptop at home.",
      ], ["Opens in any browser", "Stops, dates and notes", "Save it with the app"]),
      s("Share as image for the group chat", [
        "Share as image turns the trip into a picture: the route on the map, every stop, the dates and how many nights you're staying. Drop it in the family chat or post it before you go.",
        "It's the quickest way to answer \"so where are you going?\" without a long message.",
      ], ["Route, stops, dates and nights", "Perfect for chats"]),
      s("Send one place", [
        "Sharing a single campsite, hut or holiday park sends its page with a photo preview. Anyone who has KiwiCamping opens it straight in the app, and everyone else gets the web page.",
        "It's ideal for travelling in two vans: send tonight's spot and everyone knows where to meet.",
      ], ["Photo preview", "Opens straight in the app"]),
      s("Keep the family in the loop", [
        "Put an arrival date on every stop before you share, so family can follow along day by day and see how long your driving days are. Send a fresh copy after big changes.",
        "Tell them about the quiet stretches too. A day without reception on the West Coast or in Fiordland is normal, and dated stops show them you're simply between towns. Turn on Sync to calendar for a trip and its stops and dates land in your calendar as well.",
        "Heading into the hills? Leave your route and an overdue time with someone you trust, as the Mountain Safety Council's Plan My Walk and AdventureSmart advise.",
      ], ["Dates on every stop", "Calendar sync", "Leave intentions for tramps"]),
    ],
    faq: [
      ["How do I share my NZ itinerary with family?", "Tap Share on your trip in KiwiCamping and choose Send copy. Family get a link that opens in any web browser with your stops, dates and notes."],
      ["Can my partner and I edit the same trip?", "Yes. Choose Collaborate when you share the trip. You both add, reorder and tick off stops, and changes show up within seconds."],
      ["Does the person I share with need the app?", "Not for Send copy: the link opens in any web browser. With the app, they can save the trip to their own trips."],
      ["Do I need an account to share a trip?", "No. KiwiCamping has no account; sharing runs through iCloud."],
      ["Can I put my trip in my calendar?", "Yes. Turn on Sync to calendar for the trip, and its stops and dates appear in your calendar."],
    ],
    sources: [
      { label: "Plan My Walk (NZ Mountain Safety Council)", url: "https://www.mountainsafety.org.nz/plan-my-walk" },
      { label: "AdventureSmart: outdoor intentions", url: "https://www.adventuresmart.org.nz/" },
      { label: "Apple: iCloud", url: "https://www.apple.com/nz/icloud/" },
    ],
  }),
  a({
    slug: "wikicamps-nz-trip-planner-alternative",
    title: "WikiCamps Trip Planner Alternative for NZ Road Trips (2027)",
    description: "Used WikiCamps' trip planner for New Zealand? Plan in KiwiCamping: start at home or any address, add pins, see drive times and plan live with your partner.",
    category: "App guides",
    region: "New Zealand",
    places: ["Trip planner", "Route distance", "Cook Strait", "Great Walks", "DOC campsites", "Calendar sync"],
    imageAlt: "A sealed highway winding through tussock hills towards a mountain pass in Otago",
    related: ["plan-trip-kiwicamping", "share-nz-trip-plan-kiwicamping", "road-trip-planner-apps-new-zealand", "new-zealand-driving-day-planner", "two-week-new-zealand-trip-cost", "north-island-vs-south-island-campervan", "switch-from-wikicamps-nz"],
    hubs: ["camping"],
    intro:
      "If the WikiCamps trip planner was how you mapped out New Zealand, KiwiCamping is a simpler way to plan the same road trip. Start at home or any address, add campsites, addresses and your own pins as stops, and see the distance and drive time for every leg, with no account and no ads. We make KiwiCamping, and here's how planning works for a New Zealand trip.",
    sections: [
      s("Why WikiCamps trip planner users look elsewhere", [
        "Since WikiCamps' big update, many planners say the app has become fiddly, signs them out at the worst moments and shows ads they didn't expect in an app they paid for.",
        "If you're switching from WikiCamps, the good news is that a whole trip moves over in an evening.",
      ], ["Fiddly since the update", "Logged out at the worst moments", "Ads in a paid app"]),
      s("Start at Home, finish at Home", [
        "Set your home address once in the You tab, and the trip planner reuses it in every trip. Start at Home and Finish at Home are a single tap each.",
        "Visiting? Any address works as a stop, so start at the airport, your rental depot or the place you're staying on the first night.",
      ], ["Set Home once", "Start and Finish at Home", "Or start at the airport"]),
      s("Add any stop in KiwiCamping: places, addresses and pins", [
        "Tap Add stop and one search finds Home, your current location, your saved pins, places in the app or any address. Found a great spot of your own? Drop a pin and tap Add to trip.",
        "The route redraws with the kilometres and driving time for each leg. Drag stops into the order you'll drive, give each one an arrival date, and add a note for the booking reference or the gate code.",
      ], ["One search for every kind of stop", "Pins go straight in", "Distance and drive time per leg"], {
        cta: true,
        table: {
          caption: "Planning jobs and where they live in KiwiCamping's trip planner.",
          head: ["Job", "In KiwiCamping"],
          rows: [
            ["Start and finish", "Start at Home and Finish at Home, or any address"],
            ["Add stops", "Places, addresses, your location and pins"],
            ["Put stops in order", "Drag to reorder; the route updates"],
            ["Drive times", "Distance and drive time for every stop"],
            ["Dates and notes", "An arrival date and a note on each stop"],
            ["Plan with your partner", "Collaborate, live through iCloud"],
          ],
        },
      }),
      s("Plan around New Zealand's fixed points", [
        "Booked Great Walk huts, DOC campsites that need a booking in summer and the Cook Strait ferry fix the shape of most trips. Add those first and keep everything between them flexible.",
        "Watch the drive times more than the kilometres. Winding roads and passes make New Zealand driving days slower than they look, so split any leg that eats the whole day. The filters help fill the gaps, with Dogs allowed, 4WD access and Caravan access at the top.",
      ], ["Fixed nights first", "Watch drive times", "Filters for the gaps"]),
      s("On the road with your plan", [
        "Tick stops off as you go and check the weather at the next ones. Keep the shopping, bookings and ferry check-in on the trip's To-do list.",
        "The You tab keeps score: a map that fills in the regions you've visited, how much of New Zealand you've seen, kilometres travelled, nights camped, and a countdown to your next trip.",
      ], ["Tick stops off", "Weather and a To-do list", "Your travel map and stats"]),
      s("Plan together and check it on a laptop", [
        "Share the trip with Collaborate and your partner can add, reorder and tick off stops with you, live. Send copy gives a link that opens in any web browser, so you can look over the plan on a laptop at home.",
        "Share as image makes a picture of the route, stops, dates and nights for the family chat. Turn on Sync to calendar and the trip lands in your calendar too. KiwiCamping is free to download, with in-app purchases.",
      ], ["Collaborate live", "Open it on a laptop", "Calendar sync"]),
    ],
    faq: [
      ["What is the best trip planner app for New Zealand?", "For a camping road trip, KiwiCamping, which we make: start at home or any address, add places and pins, see drive times, and plan live with your partner, with no account and no ads."],
      ["How do I plan a campervan route in NZ?", "Add the booked nights and the ferry first, then fill in stops in driving order. Keep most days to three or four hours of driving."],
      ["Can I export my WikiCamps trip?", "Write your WikiCamps stops down and rebuild the route in KiwiCamping. One search covers campsites, street addresses and your own pins."],
      ["Does KiwiCamping show driving times between stops?", "Yes. Each leg of the route lists how far it is and how long the drive takes."],
      ["Can I start a trip from my accommodation or the airport?", "Yes. Use Start at Home with your saved home address, or add any address, such as the airport, as the first stop."],
    ],
    sources: [
      { label: "DOC: Great Walks", url: "https://www.doc.govt.nz/parks-and-recreation/things-to-do/walking-and-tramping/great-walks/" },
      { label: "DOC: places to stay", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/" },
      { label: "NZTA Journeys: road conditions and closures", url: "https://www.journeys.nzta.govt.nz/" },
    ],
  }),
];
