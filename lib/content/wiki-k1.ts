import { makeArticle as a, type Article, type ArticleSection, type ArticleTable } from "@/lib/article-model";

const s = (heading: string, body: string[], tips?: string[], table?: ArticleTable, cta?: boolean): ArticleSection => ({ heading, body, tips, ...(table && { table }), ...(cta && { cta }) });

/**
 * WikiCamps switcher guides, lane wiki-k1. Written for campers, not for app reviewers: what WikiCamps
 * users say in a sentence or two, then what KiwiCamping gives them. Never link to WikiCamps or another
 * camping app, never date anything WikiCamps did, and only describe KiwiCamping features that ship.
 */
export const wikiK1Articles: Article[] = [
  a({
    slug: "is-wikicamps-nz-worth-it",
    listicle: true,
    title: "Is WikiCamps NZ Worth It for a New Zealand Trip in 2027?",
    description: "Is WikiCamps NZ worth it in 2027? It costs NZ$7.99, needs an account and shows ads. Why campers are switching to KiwiCamping: no login, no ads and every DOC campsite on one map.",
    category: "App guides",
    region: "New Zealand",
    places: ["DOC campsites", "DOC huts", "Freedom camping", "Campervan trips", "West Coast"],
    imageAlt: "A white motorhome parked on open grass in front of dense bush on the West Coast",
    related: ["wikicamps-alternatives", "best-nz-camping-apps", "best-campervan-apps-new-zealand", "freedom-camping-rules-new-zealand", "two-week-new-zealand-trip-cost"],
    hubs: ["huts", "freedom-camping"],
    intro:
      "Is WikiCamps NZ worth it in 2027? It only costs NZ$7.99, but since WikiCamps' big update you need an account to use it, and the app shows ads even though you paid for it. Lots of users also say the new version is harder to use and keeps logging them out. We make KiwiCamping, a New Zealand camping app with no account, no ads and every DOC campsite, hut and track on one map, and here is why it is worth the switch.",
    sections: [
      s("Is WikiCamps NZ worth it? The short answer", [
        "WikiCamps NZ is cheap, and plenty of people still use it. The catch is what came with the new version: an account to sign into, a code sent to your email, and ads in an app you have already bought.",
        "Many WikiCamps users say it keeps logging them out, which is no fun when you are parked somewhere with no signal. If you would rather open an app and simply see where to camp tonight, KiwiCamping is built for that.",
      ], ["Cheap, but needs an account", "Ads in a paid app", "KiwiCamping: no login, no ads"], {
        caption: "WikiCamps NZ and KiwiCamping side by side.",
        head: ["", "WikiCamps NZ", "KiwiCamping"],
        rows: [
          ["Price", "NZ$7.99", "Free to download, with in-app purchases"],
          ["Account", "Needed, with a code by email", "None"],
          ["Ads", "Yes", "None"],
          ["DOC campsites, huts and tracks", "Added by users", "Every one, from DOC"],
          ["Choosing several filters", "Users say places match any of them", "Places must match all of them"],
        ],
      }),
      s("No login, no ads, straight to the map", [
        "Open KiwiCamping and you are already looking at the map of New Zealand. There is no account to create, no password to remember and no code to wait for, so there is nothing to get stuck behind at a West Coast campsite.",
        "Pick a filter, tap a place to see its fees and facilities, and add it to your trip. That is the whole routine. There are no ads anywhere, and your saved places and trips sync privately through the iCloud already on your iPhone.",
      ], ["Opens on the map", "Nothing to sign into", "No ads anywhere"]),
      s("Every DOC campsite, hut and track", [
        "KiwiCamping is built on the Department of Conservation's own information. Every DOC campsite, hut and track is on the map with its fee, its dog rules and whether you need to book, plus a link to DOC's page when you are ready.",
        "DOC's freedom camping notices are in there too, so you can see where camping on conservation land is off limits before you pull in. Around towns and beaches, the council's rules and the sign at the site still decide.",
      ], ["DOC fees, dog rules and bookings", "DOC freedom camping notices", "A link to DOC on every place"]),
      s("Filters that find the right spot", [
        "Dogs allowed, 4WD access and Caravan access sit at the top of the filters. Below them are everyday features such as Campervans, Powered sites, Hot showers, Toilets and Water supply.",
        "Choose several and a place has to have every one of them, so Campervans, Hot showers and Dogs allowed together only show spots that tick all three boxes. Many WikiCamps users say its filters show places that match any choice instead. Set the cost to Free and DOC's free campsites appear.",
      ], ["Dogs allowed, 4WD and Caravan access", "Every filter must match", "Free DOC campsites by cost"]),
      s("Plan the trip your way, and together", [
        "Set your home address once in the You tab, then tap Start at Home or Finish at Home on any trip. Add stop searches your saved pins, places in the app, your current location or any address, so your own favourite spots go in too. Every stop shows on the route with its distance and drive time.",
        "Travelling as a pair? Tap Share on the trip and choose Collaborate. You both add, reorder and tick off stops, and the changes show up for each other within seconds, with no account or login. For family back home, Send copy gives them a link they can open in any web browser.",
      ], ["Start and finish at Home", "Add any address or pin", "Plan live with Collaborate"]),
      s("Why campers switch to KiwiCamping", [
        "Tramping or Great Walks: DOC's hut fees and booking needs are right there, with a link to book. Campervan or caravan: the Campervans and Caravan access filters do the sorting for you. Travelling as a couple: Collaborate keeps one trip on both phones.",
        "Along the way, the You tab fills in a map of where you have been, shows how much of New Zealand you have seen, and counts your kilometres, nights camped and places stayed. KiwiCamping is free to download, with in-app purchases, and has no account and no ads.",
      ], ["Huts and Great Walks", "Campervans and caravans", "A map of where you've been"], undefined, true),
    ],
    faq: [
      ["Is WikiCamps NZ worth it in 2027?", "It is cheap at NZ$7.99, but it needs an account and shows ads. For no login and no ads, KiwiCamping is free to download, with in-app purchases."],
      ["Is WikiCamps NZ good for a campervan trip?", "It works, but you have to stay signed in, and many users say it logs them out. KiwiCamping needs no account and has Campervans and Caravan access filters."],
      ["Do I need WikiCamps for New Zealand?", "No. KiwiCamping shows every DOC campsite, hut and track and DOC's freedom camping notices, with no account."],
      ["What is the best camping app for New Zealand?", "We think KiwiCamping, which we make: every DOC campsite, hut and track, filters that must all match, live trip sharing, and no ads or login."],
      ["Is KiwiCamping a good alternative to WikiCamps?", "Yes. It opens straight to the map with no account, shows no ads, and lets you plan a trip with your partner live."],
    ],
    sources: [
      { label: "DOC: places to stay", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
    ],
  }),
  a({
    slug: "wikicamps-nz-vs-kiwicamping",
    listicle: true,
    title: "WikiCamps NZ vs KiwiCamping: Which Camping App for NZ? (2027)",
    description: "WikiCamps NZ vs KiwiCamping in 2027: price, sign-in, ads, DOC campsites and huts, filters and planning a trip together. Why KiwiCamping is the easier app for a New Zealand trip.",
    category: "App guides",
    region: "New Zealand",
    places: ["DOC campsites", "DOC huts", "DOC tracks", "Freedom camping", "Fiordland"],
    imageAlt: "The Rangitīkei River curving past a riverside campsite at Vinegar Hill, seen through bush from the terrace above",
    related: ["is-wikicamps-nz-worth-it", "kiwicamping-offline-data-guide", "kiwicamping-filters-guide", "plan-trip-kiwicamping", "freedom-camping-rules-new-zealand", "wikicamps-alternatives"],
    hubs: ["huts", "freedom-camping"],
    intro:
      "WikiCamps NZ vs KiwiCamping: which camping app should you take around New Zealand? KiwiCamping is free to download, needs no account and shows no ads, while WikiCamps NZ costs NZ$7.99, asks you to sign in and shows ads. We make KiwiCamping, so here is how the two compare on the things that matter once you are on the road.",
    sections: [
      s("WikiCamps NZ vs KiwiCamping at a glance", [
        "If you want the short version: KiwiCamping is the one you can open and use straight away. No sign-in, no ads, DOC's own details for every campsite, hut and track, and a trip you can plan live with your partner.",
        "WikiCamps is owned by G'day Group, the company behind Discovery Parks and G'day Parks. KiwiCamping is independent, and it shows free DOC campsites on the same map as paid holiday parks.",
      ], undefined, {
        caption: "How the two apps compare where it counts.",
        head: ["", "WikiCamps NZ", "KiwiCamping"],
        rows: [
          ["Price", "NZ$7.99", "Free to download, with in-app purchases"],
          ["Account", "Needed, signed in with an email code", "None, nothing to sign into"],
          ["Ads", "Yes", "None"],
          ["DOC campsites, huts and tracks", "Listed by users", "Every one, from DOC's own information"],
          ["Several filters at once", "Users say places match any", "Places must match all"],
          ["Planning with your partner", "Share a trip link", "Live, with Collaborate"],
        ],
      }),
      s("Sign-in: an account, or nothing at all", [
        "Since WikiCamps' big update, you need a WikiCamps account and a code sent to your email to get in. Lots of users say the app then logs them out, and signing back in needs signal you may not have at a campsite.",
        "KiwiCamping simply has no account. Nothing to sign into, no code and no being logged out, so it opens the same way in Haast as it does in Auckland. Your saved places and trips sync privately through your own iCloud.",
      ], ["WikiCamps NZ: account and email code", "KiwiCamping: no account", "Private iCloud sync"]),
      s("Easy to use: open it and you are on the map", [
        "The complaint WikiCamps users make most is that the new version is harder to use than the old one. KiwiCamping keeps the steps few on purpose, so the app gets out of the way of the trip.",
        "You open it and the map of New Zealand is there. Choose a filter, for example Campervans with Hot showers, tap a pin to read the fees, facilities and DOC's notes, and add it to a trip from that same page.",
      ], ["Opens on the map", "Filter, tap, add", "Details one tap away"]),
      s("DOC campsites, huts and tracks, straight from DOC", [
        "In KiwiCamping, every DOC campsite, hut and track comes from the Department of Conservation's own information. Each one shows the fee, whether it is open, whether dogs are allowed, whether you must book and any current alert, with a link to its page on DOC's website.",
        "DOC's freedom camping notices sit on the same map, showing where camping on conservation land is prohibited or restricted. In WikiCamps NZ, DOC places are listed by users, so a fee or a closure changes only when someone updates it.",
      ], ["DOC's fees, dog rules and alerts", "DOC freedom camping notices", "A link to DOC on every place"]),
      s("Filters: Dogs allowed, 4WD access and Caravan access", [
        "The three filters campers ask for most sit at the top of KiwiCamping's filters. Underneath are Walk-in only, Cars, Flush toilets, Treated tap water, Campfires allowed and Wheelchair accessible, plus Cost.",
        "Pick several and a place must have all of them. WikiCamps NZ users say choosing several filters there shows places with any of them, which makes for a longer list to sift through.",
      ], ["Top three filters first", "All choices must match", "Cost filter for free DOC sites"]),
      s("Trip planning with Home, any address and your own pins", [
        "Set your home once in the You tab, then start or finish any trip there in one tap. Add stop finds places in the app, your saved pins, your current location or any street address, so the friend's place in Nelson and the beach you found last summer both fit in. Every stop shows its distance and drive time.",
        "Drop a pin on the map, tap Add to trip, and it joins the route like any other stop. Each stop also has its own dates, notes and weather.",
      ], ["Start and finish at Home", "Any address or dropped pin", "Distance and drive time per stop"]),
      s("Sharing: plan together live, or send a copy", [
        "Tap Share on a trip or a collection and choose Collaborate to invite your partner through iCloud. You both add stops, reorder them, tick them off and edit notes, and the changes appear within seconds, with no account and no login.",
        "Send copy makes a link anyone can open in a web browser to see the stops, dates and notes, which is ideal for family back home. Share as image turns the trip into a picture with the route, stops and nights, and a shared place opens straight in the app for friends who have it.",
      ], ["Collaborate: one trip, both phones", "Send copy opens in any browser", "Share as image"]),
      s("Why switchers pick KiwiCamping", [
        "It is the calmer way to camp in New Zealand: open it, find a spot, go. No ads, no account, DOC's own details, and a trip that two of you can plan at the same time.",
        "The You tab adds a little fun too, with a map that fills in the regions you have visited and a countdown to your next trip. KiwiCamping is free to download, with in-app purchases, and our verdict on whether WikiCamps NZ is worth it covers the price question in more detail.",
      ], ["No ads, no account", "DOC's own details", "Plan together live"], undefined, true),
    ],
    faq: [
      ["Is KiwiCamping better than WikiCamps NZ?", "For most New Zealand trips, we think so: no account, no ads, DOC's own campsite and hut details, and live trip sharing with your partner."],
      ["Does KiwiCamping need an account?", "No. There is no account, password or code, and your own iCloud does the syncing."],
      ["Does KiwiCamping show DOC campsites and huts?", "Yes. Every DOC campsite, hut and track is on the map, with DOC's fees, dog rules and booking needs."],
      ["Can my partner and I plan a trip together in KiwiCamping?", "Yes. Share the trip and choose Collaborate. You both edit the same trip and see each other's changes within seconds."],
      ["Does KiwiCamping work without signal?", "Place details, fees and facilities, plus your saved places and trips, stay on your phone, so you can read them without signal."],
    ],
    sources: [
      { label: "DOC: places to stay", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/" },
      { label: "DOC: freedom camping on conservation land", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
      { label: "DOC: online bookings", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/online-bookings/" },
    ],
  }),
  a({
    slug: "is-wikicamps-nz-free",
    listicle: true,
    title: "Is WikiCamps NZ Free? Price, Account and Ads in 2027",
    description: "Is WikiCamps NZ free in 2027? No: it costs NZ$7.99 once, needs an account and shows ads. What you pay, and a New Zealand camping app that is free to download with no login and no ads.",
    category: "App guides",
    region: "New Zealand",
    places: ["App prices", "DOC campsites", "Free campsites", "Campervan trips"],
    imageAlt: "A small hire campervan painted with purple flowers, parked beside the water at Akaroa",
    related: ["free-camping-apps-new-zealand", "best-nz-camping-apps", "wikicamps-alternatives", "money-saving-travel-apps-new-zealand", "is-wikicamps-nz-worth-it", "wikicamps-nz-vs-kiwicamping"],
    intro:
      "Is WikiCamps NZ free? No. WikiCamps NZ costs NZ$7.99 as a one-off purchase, with no subscription. On top of the price you need a WikiCamps account, the app shows ads, and WikiCamps sells Australia as a separate app. We make KiwiCamping, a New Zealand camping app that is free to download, with in-app purchases, and has no ads and no login. Here is what WikiCamps NZ costs and what comes with it.",
    sections: [
      s("How much WikiCamps NZ costs", [
        "WikiCamps NZ is NZ$7.99, paid once, and WikiCamps says there are no subscriptions or hidden fees. It is priced per platform, so moving to a different kind of phone means buying it again.",
        "Each country is its own app. Planning a trip that starts in Sydney and ends in Christchurch means buying WikiCamps Australia as well, and keeping two apps with two sets of saved places.",
      ], ["NZ$7.99 once", "No subscription", "Each country is a separate app"], {
        caption: "What each app asks of you.",
        head: ["", "WikiCamps NZ", "KiwiCamping"],
        rows: [
          ["To get the app", "NZ$7.99", "Free to download, with in-app purchases"],
          ["Account", "Needed, with an email code", "None"],
          ["Ads", "Yes", "None"],
        ],
      }),
      s("Ads in an app you paid for", [
        "Lots of WikiCamps users say they are unhappy to see ads in an app they paid for. It is one of the most common complaints since WikiCamps' big update.",
        "KiwiCamping has no ads at all: not on the map, not on a place page, not in your trips. It is also independent of any holiday-park group, and free DOC campsites appear on the same map as paid holiday parks.",
      ], ["WikiCamps NZ shows ads", "KiwiCamping: none", "Independent"]),
      s("An account comes with the purchase", [
        "WikiCamps NZ needs a WikiCamps account, and you sign in with a code sent to your email. Many users say it logs them out, and signing back in needs signal.",
        "KiwiCamping has nothing to sign into. You download it, open it and you are looking at the map, with no email, password or code at any point. A new iPhone picks up your saved places and trips through iCloud.",
      ], ["WikiCamps NZ: account and email code", "KiwiCamping: open it and go", "Your trips follow you via iCloud"]),
      s("KiwiCamping: free to download, no login", [
        "KiwiCamping puts every DOC campsite, hut and track on one map, with the fee, dog rules and booking needs DOC lists, plus DOC's freedom camping notices for conservation land. Place details stay on your phone, so you can read them without signal.",
        "Using it is quick. Open the app, choose a filter such as Dogs allowed or Caravan access, tap a pin for the details, and add it to a trip that shows the distance and drive time between stops.",
      ], ["Every DOC campsite, hut and track", "No account, no ads", "Details readable without signal"], undefined, true),
      s("Finding free campsites in New Zealand", [
        "Many people looking for a free app are really after free nights. In KiwiCamping, set the Cost filter to Free and DOC's free campsites show up. Add Toilets, Water supply or Campervans and a site has to meet every condition you pick.",
        "Free DOC campsites are usually simple, often with a long-drop toilet and stream or tank water, and some are a short walk from the road. Freedom camping in towns is a separate question, and our freedom camping rules guide explains it.",
      ], ["Cost filter: free DOC campsites", "Every filter must match", "Free sites are usually simple"]),
      s("More than a list of campsites", [
        "Add your home address once in the You tab and every trip can start and finish there. Add stop takes any address or a pin you have dropped, and Collaborate lets you and your partner plan the same trip live, with no account.",
        "The You tab also keeps a map of where you have been, the share of New Zealand you have seen, and your kilometres and nights camped, which makes a nice record of the trip.",
      ], ["Home in one tap", "Any address or pin", "A map of where you've been"]),
    ],
    faq: [
      ["Is WikiCamps NZ free?", "No. It costs NZ$7.99 once, with no subscription. It also needs an account and shows ads."],
      ["How much does WikiCamps cost in New Zealand?", "WikiCamps NZ is NZ$7.99. WikiCamps Australia is a separate app that you buy separately."],
      ["Is WikiCamps a subscription?", "No. WikiCamps says it is a one-off purchase with no subscriptions or hidden fees."],
      ["Does one WikiCamps purchase cover Australia and New Zealand?", "No. WikiCamps NZ and WikiCamps Australia are separate apps, each bought on its own."],
      ["Is there a free camping app for New Zealand?", "KiwiCamping is free to download, with in-app purchases, and has no ads or login. Its cost filter finds DOC's free campsites."],
    ],
    sources: [
      { label: "DOC: campsite categories and fees", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/facilities-and-fees/" },
      { label: "DOC: freedom camping on conservation land", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
    ],
  }),
  a({
    slug: "campermate-vs-wikicamps-nz",
    listicle: true,
    title: "CamperMate vs WikiCamps NZ in 2027, and a Third Option",
    description: "CamperMate or WikiCamps for New Zealand in 2027? How the two compare on price, ads and sign-in, and why KiwiCamping, with no login and no ads, is the third option campers pick.",
    category: "App guides",
    region: "New Zealand",
    places: ["Campervan trips", "Freedom camping", "DOC campsites", "Holiday parks"],
    imageAlt: "Four motorhomes parked in a row on a gravel area above the sea at Tautuku Bay in the Catlins",
    related: ["campermate-alternatives", "wikicamps-alternatives", "rankers-alternatives", "best-nz-camping-apps", "free-camping-apps-new-zealand", "wikicamps-nz-vs-kiwicamping"],
    hubs: ["freedom-camping"],
    intro:
      "CamperMate vs WikiCamps NZ comes down to price and sign-in: CamperMate is free, while WikiCamps NZ costs NZ$7.99 once and needs an account, and both show ads. We make KiwiCamping, the third option with no ads and no login, built around DOC's campsites, huts and tracks, and the one we think makes a New Zealand trip easiest.",
    sections: [
      s("CamperMate vs WikiCamps at a glance", [
        "Plenty of campervan travellers weigh these two up before landing. CamperMate costs nothing, while WikiCamps NZ is a paid app that asks for an account and a code by email.",
        "What they share is ads. If you would like a camping app with neither ads nor a login, that is where KiwiCamping comes in.",
      ], ["CamperMate: free", "WikiCamps NZ: NZ$7.99 and an account", "Both show ads"], {
        caption: "CamperMate, WikiCamps NZ and KiwiCamping compared.",
        head: ["", "CamperMate", "WikiCamps NZ", "KiwiCamping"],
        rows: [
          ["Price", "Free", "NZ$7.99", "Free to download, with in-app purchases"],
          ["Ads", "Yes", "Yes", "None"],
        ],
      }),
      s("CamperMate in a nutshell", [
        "CamperMate is a free app that lists campsites and services across the country, with holiday park bookings and local deals, and it carries ads.",
        "Some CamperMate users say its redesign made it slower and that sites they relied on went missing. If that has happened to you, a cleaner app is worth a try.",
      ], ["Free, with ads", "Bookings and deals", "Some users dislike the redesign"]),
      s("WikiCamps NZ in a nutshell", [
        "WikiCamps NZ costs NZ$7.99 once, with no subscription. Since WikiCamps' big update you need an account and an email code to use it, and the app shows ads.",
        "Lots of its users say the new version is fiddlier than the old one and signs them out, which is hardest to live with at a campsite with no signal. Our breakdown of what WikiCamps NZ costs goes into the price.",
      ], ["NZ$7.99 once", "Account and email code", "Ads in a paid app"]),
      s("The third option: KiwiCamping", [
        "KiwiCamping opens straight to the map, with no account to make and no ads to scroll past. Every DOC campsite, hut and track is there with DOC's fee, dog rules and booking needs, and DOC's freedom camping notices show where conservation land is off limits.",
        "Filters do the hard work. Dogs allowed, 4WD access and Caravan access sit at the top, and when you pick several, a place has to match all of them. Tap a pin for the details, then add it to your trip.",
      ], ["No account, no ads", "Every DOC campsite, hut and track", "Filters that must all match"], undefined, true),
      s("Planning a campervan trip in KiwiCamping", [
        "Set your home address once and start or finish any trip there in one tap. Add stop takes places in the app, any address or a pin you have dropped, and each stop shows its distance and drive time on the route.",
        "Two of you in the van? Share the trip and choose Collaborate, and you can both add and reorder stops, with changes landing within seconds and no login. Send copy gives family a link to follow your route in any web browser.",
      ], ["Home, addresses and pins", "Distance and drive time", "Plan together with Collaborate"]),
      s("Why campers add KiwiCamping to the trip", [
        "For DOC campsites and Great Walk huts, KiwiCamping shows DOC's own details and links to DOC to book. For freedom camping, DOC's notices sit on the map beside the campsites, so you can see what is off limits before you drive in.",
        "And it keeps a record for you. The You tab fills in a map of the regions you have visited and counts your kilometres and nights camped. KiwiCamping is free to download, with in-app purchases.",
      ], ["DOC campsites and huts", "DOC freedom camping notices", "A record of your trip"]),
    ],
    faq: [
      ["Is CamperMate or WikiCamps better for New Zealand?", "CamperMate is free; WikiCamps NZ costs NZ$7.99 and needs an account. Both show ads. For no ads and no login, try KiwiCamping."],
      ["Is CamperMate free?", "Yes. CamperMate is free to use, and it shows ads."],
      ["Which camping app has no ads in New Zealand?", "KiwiCamping has no ads and no login. It is free to download, with in-app purchases."],
      ["What app do most campervan travellers use in NZ?", "Many use CamperMate or WikiCamps NZ. KiwiCamping is the one with DOC's own campsite details, no ads and no account."],
      ["Which app shows DOC campsites?", "KiwiCamping shows every DOC campsite, hut and track from DOC's own information, with fees, dog rules and booking needs."],
    ],
    sources: [
      { label: "DOC: places to stay", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/" },
      { label: "DOC: online bookings", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/online-bookings/" },
    ],
  }),
  a({
    slug: "doc-huts-campsites-app-wikicamps-kiwicamping",
    listicle: true,
    title: "DOC App NZ: Huts and Campsites, WikiCamps vs KiwiCamping (2027)",
    description: "Looking for a DOC app in NZ for huts, tracks and campsites in 2027? How KiwiCamping shows every DOC hut and campsite with fees, bookings and dog rules, with no login, compared with WikiCamps NZ.",
    category: "App guides",
    region: "New Zealand",
    places: ["DOC huts", "DOC campsites", "DOC tracks", "Great Walks", "Rakiura Stewart Island"],
    imageAlt: "A timber DOC hut with a wide covered verandah on the Rakiura Track, Stewart Island",
    related: ["best-tramping-great-walks-apps-new-zealand", "doc-huts-new-zealand-guide", "kiwicamping-offline-data-guide", "save-places-kiwicamping", "easy-doc-huts-families-first-timers", "wikicamps-nz-vs-kiwicamping"],
    hubs: ["huts", "camping"],
    intro:
      "Looking for a DOC app in NZ for huts and campsites? KiwiCamping puts every DOC hut, campsite and track on one map, with DOC's fees, dog rules and booking needs, and a link straight to DOC when you want to book. There is no account and there are no ads. We make KiwiCamping, and here is how it helps you plan huts, tracks and campsites, and how it compares with WikiCamps NZ.",
    sections: [
      s("What a good DOC app shows you", [
        "DOC sorts huts and campsites into categories, and the category tells you most of what to expect when you arrive. A good app shows it clearly, along with the fee per night, whether you must book or can just turn up, whether dogs are allowed and any current alert.",
        "That is exactly what you see on each DOC place in KiwiCamping, taken from DOC's own information, so you can choose a hut before you leave home and check it again at the road end.",
      ], ["Category, fee and booking", "Dog rules and alerts", "Straight from DOC"], {
        caption: "DOC hut categories at a glance.",
        head: ["Hut category", "What to expect"],
        rows: [
          ["Great Walk hut", "Book ahead in the Great Walks season"],
          ["Serviced hut", "Usually mattresses, water, toilets and heating"],
          ["Standard hut", "Usually mattresses, water and a toilet"],
          ["Basic hut or bivvy", "A simple shelter for experienced trampers"],
        ],
      }),
      s("DOC huts, campsites and tracks in KiwiCamping", [
        "Every DOC hut shows whether it is open, its bunks, its fee and its facilities, with a link to the hut on DOC's website. Every DOC track shows its distance, walking time, grade and an elevation profile, so you can judge the climb before you commit.",
        "DOC campsites show the fee, dog rules and whether you need to book. Bookable huts and campsites link through to DOC, where you make the booking.",
      ], ["Hut status, bunks and fees", "Track distance, time and grade", "Book through DOC's link"], undefined, true),
      s("How WikiCamps NZ handles DOC places", [
        "In WikiCamps NZ, DOC huts and campsites are listed by its users alongside everything else, so a fee or a closure changes only when someone updates it.",
        "The app also needs an account with an email code since WikiCamps' big update, and it shows ads. Many users say it keeps logging them out, which is the last thing you want at a road end with no signal. Our WikiCamps NZ vs KiwiCamping comparison covers the rest.",
      ], ["Listed by users", "Account and email code", "Ads"]),
      s("From the map to a hut in a few taps", [
        "Open KiwiCamping and the map is right there, with nothing to sign into. Add filters such as Walk-in only, Water supply or Dogs allowed, and only the places that meet all of them stay on the map.",
        "Tap a hut for its bunks, fee and DOC link, then save it to a collection for the track or add it to your trip.",
      ], ["No sign-in", "Walk-in only and Water supply filters", "Save or add in one tap"]),
      s("Planning a hut or Great Walk trip", [
        "Save the huts you are weighing up to a collection for each track. When the plan firms up, add the road-end campsites to a trip that starts at Home, and every leg shows its distance and drive time.",
        "Tramping with a friend? Share the trip and choose Collaborate so you both see the same plan, live. Send copy gives someone at home a link to your route in any web browser, which pairs well with leaving your intentions before you head out. Then book the huts with DOC early, since popular ones fill fast in summer.",
      ], ["A collection per track", "Start the trip at Home", "Collaborate with your tramping partner"]),
      s("On the track without signal", [
        "Hut and campsite details stay on your phone, along with your saved places and your trip, so the bunk count, the fee and DOC's notes are there deep in a valley with no reception.",
        "On any remote tramp, carry a paper topographic map and a personal locator beacon, check the weather and DOC's alerts at the last spot with signal, and tell someone where you are going.",
      ], ["Hut details without signal", "Paper map and a beacon", "Leave your intentions"]),
    ],
    faq: [
      ["Is there a DOC app for huts?", "DOC takes bookings on its website. KiwiCamping shows every DOC hut with its fee, bunks and booking needs, and links to DOC to book."],
      ["Which app shows DOC campsites in NZ?", "KiwiCamping shows every DOC campsite from DOC's own information, with fees, dog rules and booking needs, and no login."],
      ["Does KiwiCamping show DOC track details?", "Yes. Each DOC track shows its distance, walking time, grade and an elevation profile, with a link to DOC."],
      ["Can I see hut details without signal?", "Yes. Hut and campsite details, your saved places and your trips stay on your phone."],
      ["How many DOC huts are there in New Zealand?", "KiwiCamping shows over 900 DOC huts. DOC's own website gives the official total."],
    ],
    sources: [
      { label: "DOC: online bookings", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/online-bookings/" },
      { label: "DOC: booking and paying for huts", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-in-a-hut/booking-and-paying/" },
      { label: "DOC: booking and paying for campsites", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/booking-and-paying/" },
      { label: "DOC: compare the Great Walks", url: "https://www.doc.govt.nz/parks-and-recreation/things-to-do/walking-and-tramping/great-walks/compare-great-walks/" },
    ],
  }),
];
