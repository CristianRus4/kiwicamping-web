import { makeArticle as a, type Article, type ArticleSection, type ArticleTable } from "@/lib/article-model";

const s = (heading: string, body: string[], tips?: string[], table?: ArticleTable, cta?: boolean): ArticleSection => ({ heading, body, tips, ...(table && { table }), ...(cta && { cta }) });

/**
 * WikiCamps switcher guides, lane wiki-k1, written on 14 November 2026 from the wiki-switch research
 * (store listings, WikiCamps' own pages and dated App Store and Google Play reviews). Claims about
 * WikiCamps are dated November 2026 and never link to WikiCamps or another camping app. KiwiCamping
 * features follow the app's own copy; place counts come from lib/data/product-facts.json.
 */
export const wikiK1Articles: Article[] = [
  a({
    slug: "is-wikicamps-nz-worth-it",
    listicle: true,
    title: "Is WikiCamps NZ Worth It for a New Zealand Trip in 2026?",
    description: "WikiCamps NZ costs NZ$7.99 once and now needs an account. What changed with the new version, who it suits, and when KiwiCamping fits a NZ trip better.",
    category: "App guides",
    region: "New Zealand",
    places: ["DOC campsites", "DOC huts", "Freedom camping", "Campervan trips", "West Coast"],
    imageAlt: "A white motorhome parked on open grass in front of dense bush on the West Coast",
    related: ["wikicamps-alternatives", "best-nz-camping-apps", "best-campervan-apps-new-zealand", "freedom-camping-rules-new-zealand", "two-week-new-zealand-trip-cost"],
    hubs: ["huts", "freedom-camping"],
    intro:
      "Is WikiCamps NZ worth it? For many trips, yes: it costs NZ$7.99 once, runs on iPhone and Android, and lists more than 12,000 New Zealand sites that its users have added. Whether it is worth it for your trip depends on what you need from an app, because since August 2025 it is a rebuilt app that asks you to sign in, and its strength is community listings rather than the Department of Conservation's own records. We make KiwiCamping, a New Zealand camping app for iPhone with no account to sign into, so read our view with that in mind. Below is what changed in WikiCamps NZ, what travellers say about it as of November 2026, and which kind of New Zealand trip suits which app.",
    sections: [
      s("The short answer", [
        "Buy WikiCamps NZ if you use an Android phone, if you want the biggest list of places in one paid app, or if traveller comments on each site matter more to you than official details. It is a one-off purchase with no subscription, and a two-week trip will cost you less than a takeaway coffee a week.",
        "Try KiwiCamping first if you travel with an iPhone, plan to stay at DOC campsites or walk to DOC huts, and would rather not create an account on holiday. It is built on DOC's data for campsites, huts and tracks, it opens straight to the map with no sign-in, and it is free to download, with in-app purchases.",
      ], ["Android: WikiCamps NZ", "iPhone and DOC places: KiwiCamping", "No subscription in either"], {
        caption: "WikiCamps NZ and KiwiCamping as of November 2026, from each app's store listing and the developers' own statements.",
        head: ["", "WikiCamps NZ", "KiwiCamping"],
        rows: [
          ["Price", "NZ$7.99 once on the NZ App Store", "Free to download, with in-app purchases"],
          ["Phones", "iPhone and Android", "iPhone only"],
          ["Account", "Required, with an emailed code", "None"],
          ["Where places come from", "Mostly added by users (12,000+ NZ sites, its claim)", "DOC data for campsites, huts and tracks, plus other sources"],
          ["Ads", "Contains ads, per its Google Play listing", "None"],
          ["Traveller comments", "Yes", "No"],
          ["NZ App Store rating", "4.5 from 137 ratings", "Few ratings so far"],
        ],
      }),
      s("What changed in WikiCamps NZ", [
        "WikiCamps rebuilt its apps as version 6. WikiCamps Australia got it in September 2024, and the New Zealand edition moved to it on 4 August 2025, after almost a year on version 5.9.3. Version 6 needs a WikiCamps account, and signing in uses a verification code sent to your email.",
        "The rebuild also ended the computer version. WikiCamps' support team said in June 2025 that version 6 runs only on iOS and Android, and that with version 5 discontinued the Windows app would stop working; Windows buyers were offered free access on a phone instead. If you used to plan the whole route on a laptop before flying in, that option has gone.",
        "Other things stayed the same. The New Zealand app is still a separate purchase from WikiCamps Australia, its Offline Mode keeps maps and up to three planned trips available without signal by WikiCamps' own description, and its Google Play listing shows the labels Contains ads and In-app purchases. WikiCamps has been owned by G'day Group, the company behind Discovery Parks and G'day Parks, since 2022, and recent updates added park bookings and G'day prices.",
      ], ["Version 6 in NZ since 4 August 2025", "Account and email code required", "No Windows app since June 2025"]),
      s("What travellers say about WikiCamps NZ", [
        "Public complaints about the New Zealand app are few. It still averages 4.5 stars from 137 ratings on the New Zealand App Store and 4.4 on Google Play, as of November 2026. Only three App Store reviews have been written there since version 6 arrived: a five-star review on 28 September 2026 that praised the changes, a two-star review on 2 January 2026 that called the app complex and out of date, and a three-star review on 31 July 2025 about filters that no longer worked. One recent Google Play review says choosing several filters now shows places that match any of them rather than all of them.",
        "WikiCamps Australia, which has had version 6 for longer, shows where the rebuild drew criticism. Of the 150 most recent App Store reviews of WikiCamps Australia, written between 19 May 2025 and 1 November 2026, 119 gave one or two stars. The most common themes were the harder-to-use redesign, being signed out and needing signal to sign back in, and ads in an app people had paid for. Those are reviews of WikiCamps Australia, not of the New Zealand app, but it is the same rebuilt software.",
      ], ["NZ ratings are still high", "Few NZ reviews since version 6", "WikiCamps Australia reviews are harsher"]),
      s("No login, and straight to the map", [
        "Sign-in is where the rebuild has stung most. About 39 of those 150 reviews of WikiCamps Australia mention signing in or being signed out, often somewhere with no reception, where getting back in needs signal. KiwiCamping has no account at all: nothing to sign into, no code to wait for in your inbox, and no chance of being logged out at a campsite halfway down the West Coast.",
        "The other big theme, in about 68 of the 150, is that the new app is harder to use. KiwiCamping keeps the steps few. Open it and you are on the map of New Zealand. Pick a filter such as Campervans or Toilets, tap a place to read its fees, facilities and DOC's notes, and add it to a trip from that same page.",
      ], ["No account, no code, no sign-out", "Opens on the map", "Filter, tap, add to a trip"]),
      s("What KiwiCamping does differently", [
        "KiwiCamping starts from DOC rather than from user listings. In its August 2026 data the app holds 287 DOC campsites, 927 DOC huts with 7,661 bunks and 1,453 DOC tracks, and each DOC place shows the fee, dog rules and booking requirement DOC publishes, with a link to DOC's own page. It also carries 354 DOC freedom camping notices across 35 districts, which show where camping on conservation land is prohibited or restricted. Those notices are DOC's, not council bylaws, so towns and beaches still need the council's rules.",
        "Your saved places, collections and trips sync through your own iCloud between your own Apple devices, and nobody else sees them. Place names, fees, facilities and written guides are bundled in the app, so they stay readable in a valley with no reception. Map tiles, routing, weather and photos still need signal, so KiwiCamping is not an offline map.",
        "Filters use plain names: Dogs allowed, No dogs, 4WD access, Walk-in only, Campervans, Caravans, Powered sites, Toilets, Hot showers, Water supply, Treated tap water, Campfires allowed and Wheelchair accessible, plus cost. Choose several and a place has to have all of them, so Campervans, Toilets and Water supply together leave only sites with all three. Set the cost to free and you see DOC's free campsites, 63 of them in the August 2026 data, next to the paid ones.",
        "The trip planner puts your stops in driving order with an arrival date, a note, the weather and the distance and drive time for each leg, and it suggests places worth a stop nearby. There are no ads anywhere in the app, and KiwiCamping is independent: no holiday-park group owns it. What you give up: KiwiCamping is iPhone only, it has no traveller reviews or photos, and it lists fewer places than WikiCamps.",
      ], ["DOC campsites, huts and tracks from DOC", "No account, no ads", "Filters that must all match"], undefined, true),
      s("Which app for a two or three week trip", [
        "Tramping and DOC huts. If the trip is built around the Great Walks or nights in backcountry huts, DOC's fees, bunk numbers and booking rules matter more than comments, and KiwiCamping shows them for every hut in its data. Book the huts with DOC, and carry a proper topographic map for the track itself.",
        "Campervan and freedom camping. Both apps will find you somewhere to park for the night. WikiCamps NZ lists more spots, and its users' comments can tell you how busy a site was last week. KiwiCamping shows DOC's notices for conservation land, but you still check the council's rules for town reserves and car parks, and the sign at the site has the final word.",
        "Holiday parks most nights. Either app works, and so does no app at all, since holiday parks are easy to find. Pick by phone and by whether you mind signing in.",
      ], ["Huts and Great Walks: KiwiCamping", "Lots of freedom camping: either", "Holiday parks: either"]),
      s("Is it worth paying for WikiCamps NZ?", [
        "If you are on Android, WikiCamps NZ is one of the strongest paid choices for New Zealand, and NZ$7.99 is a small part of a trip budget. If you are on iPhone, the question is whether an account, an emailed code and ads in a paid app bother you. If they do not, it will serve you well.",
        "If your days are on the West Coast, in Fiordland or on a tramping track, and you would rather open the app and see DOC's details than sign in first, KiwiCamping is the one we would start with. Some travellers keep both: one for user comments, the other for DOC places and the route.",
      ], ["Android users: worth it", "iPhone and DOC-heavy trips: try KiwiCamping", "Some keep both"]),
      s("How we checked", [
        "We read the App Store listings for WikiCamps NZ and WikiCamps Australia, both Google Play listings and WikiCamps' own website on 14 November 2026, along with WikiCamps' June 2025 reply to Windows users. Review themes come from the most recent public reviews and are counted, not judged.",
        "KiwiCamping's figures come from the app's own data as of August 2026. We describe WikiCamps only as its developer and its reviewers describe it, so a feature we leave out is not a claim that it lacks it.",
      ]),
    ],
    faq: [
      ["Is WikiCamps NZ worth it?", "For Android users and anyone who wants the most user-added sites, yes: it is NZ$7.99 once. iPhone users who want DOC's own campsite and hut details with no account may prefer KiwiCamping."],
      ["Is WikiCamps NZ good for a campervan trip?", "Yes, it lists a large number of user-added sites with comments. Since August 2025 it has needed a WikiCamps account, and signing in uses a code sent to your email."],
      ["Do I need WikiCamps for New Zealand?", "No. It is one good option, not a requirement. DOC's website, council pages and other camping apps such as KiwiCamping cover the same trip."],
      ["What is the best camping app for New Zealand?", "It depends on the trip. For DOC campsites, huts and a dated route on iPhone we recommend KiwiCamping, which we make; on Android, WikiCamps NZ is a strong paid choice."],
      ["Is KiwiCamping a good alternative to WikiCamps?", "For iPhone users, yes, especially for DOC places. It needs no account, shows no ads and keeps place details without signal, but it has no traveller reviews and lists fewer places."],
    ],
    sources: [
      { label: "DOC: places to stay", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
    ],
  }),
  a({
    slug: "wikicamps-nz-vs-kiwicamping",
    listicle: true,
    title: "WikiCamps NZ vs KiwiCamping: Which Camping App for NZ? (2026)",
    description: "WikiCamps NZ vs KiwiCamping compared on price, sign-in, ads, DOC campsites and huts, filters, trip planning and what works without signal. Checked November 2026.",
    category: "App guides",
    region: "New Zealand",
    places: ["DOC campsites", "DOC huts", "DOC tracks", "Freedom camping", "Fiordland"],
    imageAlt: "The Rangitīkei River curving past a riverside campsite at Vinegar Hill, seen through bush from the terrace above",
    related: ["is-wikicamps-nz-worth-it", "kiwicamping-offline-data-guide", "kiwicamping-filters-guide", "plan-trip-kiwicamping", "freedom-camping-rules-new-zealand", "wikicamps-alternatives"],
    hubs: ["huts", "freedom-camping"],
    intro:
      "WikiCamps NZ vs KiwiCamping comes down to where the places come from and what it takes to reach them. WikiCamps NZ is a paid app for iPhone and Android built on sites its users add, and since August 2025 it asks you to sign in with an account and an emailed code. KiwiCamping is a free-to-download iPhone app built on the Department of Conservation's own records for campsites, huts and tracks, with no account, no login and no ads. We make KiwiCamping, so we have kept the comparison to facts each developer states, as of November 2026, and we say where WikiCamps is the better pick.",
    sections: [
      s("WikiCamps NZ vs KiwiCamping at a glance", [
        "Pick KiwiCamping if you are on an iPhone and your nights are at DOC campsites, DOC huts or near DOC tracks, or if you simply want an app you can open without signing in. Pick WikiCamps NZ if you are on Android, want traveller comments on each site, or want the largest number of places in one app.",
        "The table sets the two side by side. Where a cell quotes WikiCamps, the wording comes from its own website or store listing; where it describes KiwiCamping, it comes from the app itself.",
      ], undefined, {
        caption: "Checked 14 November 2026. WikiCamps facts come from its NZ App Store and Google Play listings and its website; KiwiCamping facts from the app and its August 2026 data.",
        head: ["", "WikiCamps NZ", "KiwiCamping"],
        rows: [
          ["Price", "NZ$7.99 once on iPhone; priced per platform", "Free to download, with in-app purchases"],
          ["Phones", "iPhone and Android", "iPhone only"],
          ["Account", "Required, signed in with an emailed code", "None: nothing to sign into"],
          ["Ads", "Contains ads (Google Play label)", "None"],
          ["Data source", "Mostly user-added, 12,000+ NZ sites (its claim)", "DOC records for campsites, huts and tracks, plus other sources"],
          ["DOC places", "Listed among user-added sites", "287 campsites, 927 huts, 1,453 tracks"],
          ["Freedom camping", "User-added spots with comments", "354 DOC notices for conservation land"],
          ["Several filters at once", "A reviewer says they match any", "A place must match all"],
          ["Reviews and photos from users", "Yes", "No"],
          ["Without signal", "Offline Mode: maps and up to three trips", "Place details, no download; map needs signal"],
          ["Sync", "Through the WikiCamps account", "Through your own iCloud"],
          ["Owner", "G'day Group since 2022", "Independent"],
        ],
      }),
      s("Sign-in: an account and a code, or nothing at all", [
        "Since version 6 reached New Zealand on 4 August 2025, WikiCamps NZ needs a WikiCamps account, and you sign in with a verification code sent by email. In the 150 most recent App Store reviews of WikiCamps Australia, which runs the same rebuilt app, about 39 complain about signing in or being signed out, and several describe it happening where there was no reception to get back in.",
        "KiwiCamping skips all of that. There is no account to create, no password, no code and no sign-out, so it opens the same way in Haast as it does in Auckland. What you save syncs through the iCloud already on your iPhone, between your own Apple devices, and stays private to you.",
      ], ["WikiCamps NZ: account and email code", "KiwiCamping: no account", "Private iCloud sync"]),
      s("How many taps to a campsite", [
        "The most common theme in those same WikiCamps Australia reviews, about 68 of 150, is that the rebuilt app is harder to use than the old one. Some reviewers say the new icons look alike and ask for the old version back.",
        "KiwiCamping is deliberately short on steps. You open it and the map of New Zealand is already there. Choose a filter, for example Campervans plus Hot showers, tap a pin to read the fees, facilities and DOC's notes for that place, and add it to a trip from the same page. Nothing sits between you and the map.",
      ], ["Opens on the map", "Filter, tap, read, add", "Details one tap from the map"]),
      s("DOC places: who keeps them current", [
        "This is the biggest difference between the two. In KiwiCamping, DOC campsites, huts and tracks come from DOC's own records: in the August 2026 data, 287 campsites, 927 huts with 7,661 bunks and 1,453 tracks. Each place shows what DOC publishes, such as the fee, whether it is open, whether dogs are allowed, whether you must book, and current alerts, with a link to the place on DOC's website.",
        "WikiCamps NZ lists DOC sites alongside everything else its community adds, and its users' photos and comments can be more recent than any official page. The catch is that a fee or a closure only changes when someone updates it. For a Great Walk hut or a bookable DOC campsite in summer, DOC's own figures are the safer starting point, and both apps send you to DOC to book.",
      ], ["DOC's own fees, dog rules and alerts", "Link to each place on DOC's site", "Bookings are made with DOC"]),
      s("Freedom camping on conservation land", [
        "KiwiCamping carries DOC's freedom camping notices for conservation land: 354 of them across 35 districts, 287 current in the August 2026 data, each marking an area where DOC prohibits or restricts camping. That answers a question user listings cannot settle on their own: is this particular reserve off limits?",
        "These are DOC notices, not council bylaws. A beach car park or a town reserve falls under the local council, so check its rules too, and treat the sign at the entrance as the final word. WikiCamps NZ's freedom camping spots come with traveller comments, which help you judge how busy or quiet a spot was, but they are not rules.",
      ], ["354 DOC notices, 35 districts", "Councils set their own bylaws", "The sign at the site wins"]),
      s("Filters that must all match", [
        "KiwiCamping's filters use plain names: Dogs allowed, No dogs, 4WD access, Walk-in only, Campervans, Caravans, Cars, Powered sites, Unpowered sites, Toilets, Flush toilets, Hot showers, Water supply, Treated tap water, Campfires allowed and Wheelchair accessible, plus cost. When you choose several, a place has to have every one of them, so Dogs allowed with Toilets shows only sites with both.",
        "A Google Play review of WikiCamps NZ says choosing several filters now shows places with any of them instead of all of them. With the cost filter on free, KiwiCamping shows DOC's free campsites from its official list, without any ads in between.",
      ], ["Several filters: all must match", "Dogs allowed, 4WD access, Walk-in only", "Free DOC campsites by cost"]),
      s("Without signal", [
        "WikiCamps says its Offline Mode lets you see maps and up to three of your planned trips without phone signal. In 2025, reviewers of WikiCamps Australia often reported the app needing internet to start in Offline Mode; updates from November 2025 to February 2026 addressed that, and a March 2026 review praised it opening offline straight away.",
        "KiwiCamping takes a different approach. The whole place directory ships inside the app, so names, fees, facilities and written guides are on your phone without a download step. The map itself, routing, weather, photos and Look Around need a connection, so KiwiCamping is not an offline map. Before a remote stretch, check the forecast while you still have signal, and carry a proper map for navigation.",
      ], ["WikiCamps: maps and up to three trips", "KiwiCamping: place details, no download", "KiwiCamping's map needs signal"]),
      s("Trip planning, sharing and sync", [
        "KiwiCamping's planner builds a trip from saved places: stops in the order you will drive, an arrival date and note on each, the distance and drive time of every leg, weather for the stops ahead and suggestions worth a stop nearby. You can share the trip as a text itinerary through any messaging app, send single places with a link that opens in Maps, and copy the trip into your calendar.",
        "Sharing is one way: a partner on another Apple Account receives a copy, not a trip you both edit. WikiCamps' release notes from October 2026 say shared trip links now open in its app. Neither app imports the other's trips, so moving across means rebuilding the stops, which takes minutes for a typical two-week route.",
      ], ["Distance and drive time per leg", "Share as text or to Calendar", "No import between apps"]),
      s("Who should pick which", [
        "Choose KiwiCamping if you are on an iPhone, want to open the app and be on the map with no sign-in, and plan around DOC campsites, huts, tracks and DOC's freedom camping notices. It is free to download, with in-app purchases, it has no ads, and it is independent of any holiday-park group.",
        "Choose WikiCamps NZ if you use Android, want comments and photos from other travellers, or want the biggest list of places for NZ$7.99. If you already own it, KiwiCamping can sit beside it for the DOC side of the trip, and our verdict on whether WikiCamps NZ is worth it covers the price question in more detail.",
      ], ["iPhone, DOC places, no login: KiwiCamping", "Android or user comments: WikiCamps NZ", "Some travellers use both"], undefined, true),
      s("How we compared", [
        "We read WikiCamps' website, the WikiCamps NZ App Store and Google Play listings and the version history on 14 November 2026. Review counts come from the 150 most recent App Store reviews of WikiCamps Australia and the handful of recent New Zealand reviews, and are labelled by country.",
        "KiwiCamping's numbers are from its August 2026 data. Where we do not mention a WikiCamps feature, that is not a claim that it lacks it.",
      ]),
    ],
    faq: [
      ["Is KiwiCamping better than WikiCamps NZ?", "For iPhone users who camp at DOC campsites or huts and want no login, yes. On Android, or if you want traveller comments, WikiCamps NZ is the better fit."],
      ["Does KiwiCamping need an account?", "No. There is no account, password or code. Your saved places and trips sync privately through your own iCloud."],
      ["Does KiwiCamping show DOC campsites and huts?", "Yes. Its August 2026 data has 287 DOC campsites, 927 DOC huts and 1,453 DOC tracks, with DOC's fees, dog rules and booking needs."],
      ["Is KiwiCamping on Android?", "No. KiwiCamping is an iPhone app. Android users can look at WikiCamps NZ and the other apps in our alternatives guide."],
      ["Does KiwiCamping work without signal?", "Place details, fees, facilities and guides stay readable without signal. The map, routing, weather and photos need a connection."],
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
    title: "Is WikiCamps NZ Free? Price, Account and Ads in 2026",
    description: "WikiCamps NZ is a one-off NZ$7.99 on iPhone, with no subscription, but it needs an account and its Android listing says it contains ads. What you pay, and a NZ camping app with no login and no ads.",
    category: "App guides",
    region: "New Zealand",
    places: ["App prices", "DOC campsites", "Free campsites", "Campervan trips", "Australia"],
    imageAlt: "A small hire campervan painted with purple flowers, parked beside the water at Akaroa",
    related: ["free-camping-apps-new-zealand", "best-nz-camping-apps", "wikicamps-alternatives", "money-saving-travel-apps-new-zealand", "is-wikicamps-nz-worth-it", "wikicamps-nz-vs-kiwicamping"],
    intro:
      "Is WikiCamps NZ free? No. WikiCamps NZ costs NZ$7.99 as a one-off purchase on the New Zealand App Store, with no subscription, as of November 2026. You pay once per platform, WikiCamps Australia is a separate app, you need a WikiCamps account to use it, and its Google Play listing carries the label Contains ads. We make KiwiCamping, a New Zealand camping app for iPhone that is free to download, with in-app purchases, has no ads and needs no login at all. Here is exactly what WikiCamps NZ costs and what comes with the price.",
    sections: [
      s("The short answer", [
        "On an iPhone, WikiCamps NZ is NZ$7.99, paid once, and you keep it. WikiCamps' own website says there are no subscriptions or hidden fees, and that the app is a one-off purchase per platform.",
        "The price is not what most unhappy users write about. What comes with it is: an account you must sign into, ads inside an app you paid for, and a second purchase if your trip also crosses the Tasman.",
      ], ["NZ$7.99 once on iPhone", "No subscription", "Account and ads come with it"], {
        caption: "What each app asks of you, as of 14 November 2026, from the store listings and each developer's own statements.",
        head: ["", "WikiCamps NZ", "KiwiCamping"],
        rows: [
          ["Upfront price", "NZ$7.99 on the NZ App Store", "Free to download"],
          ["Ongoing cost", "None stated; no subscription", "In-app purchases"],
          ["Each platform", "Bought separately for iPhone and Android", "iPhone only"],
          ["Australia", "A separate app, bought separately", "New Zealand only"],
          ["Account", "Required, with an emailed code", "None"],
          ["Ads", "Contains ads, per its Google Play listing", "None"],
        ],
      }),
      s("One price per platform, not per person", [
        "WikiCamps describes its app as a one-off purchase per platform, iOS or Android. If you switch from an Android phone to an iPhone, or want it on both, you buy it again. Within one platform, the account lets you sign in on several devices.",
        "One reviewer of WikiCamps Australia wrote in August 2025 that Family Sharing had stopped working and their partner was asked to pay again. It is a single report rather than a pattern, but worth knowing if two of you travel with separate phones.",
      ], ["Paid once per platform", "iPhone and Android are separate", "One report of Family Sharing failing"]),
      s("Separate apps for New Zealand and Australia", [
        "WikiCamps sells a separate app for each country it covers: Australia, New Zealand, the UK, Canada and the USA. WikiCamps NZ only covers New Zealand, so a trip that starts in Sydney and finishes in Christchurch needs both apps. When we checked in October 2026, WikiCamps Australia cost NZ$11.99 on the New Zealand App Store, on top of the NZ$7.99 for WikiCamps NZ.",
        "For a visitor, that is around NZ$20 for the two countries, still cheap next to a campervan rental. It does mean two apps to sign into and two sets of saved places, which matters more than the money when you are packing for a two-country holiday.",
      ], ["One app per country", "WikiCamps Australia NZ$11.99 (Oct 2026)", "Two apps, two sets of saves"]),
      s("Ads in an app you paid for", [
        "Both WikiCamps Google Play listings, for New Zealand and for Australia, show the label Contains ads as of November 2026. Reviewers of WikiCamps Australia have objected, one writing in October 2026 that they paid $10 and now see ads, and another in August 2025 that there was no option to pay to remove them. WikiCamps has told reviewers it is considering an option to remove ads for a small fee.",
        "KiwiCamping has no ads anywhere: not on the map, not on place pages, not in the trip planner. The app is independent of any holiday-park group, and free DOC campsites appear on the same map as paid holiday parks.",
      ], ["WikiCamps Play listings: Contains ads", "KiwiCamping: no ads", "Independent of park groups"]),
      s("An account comes with the purchase", [
        "Since the rebuilt version reached New Zealand on 4 August 2025, WikiCamps NZ needs a WikiCamps account, and you sign in with a code sent to your email. Among the 150 most recent App Store reviews of WikiCamps Australia, about 39 mention signing in or being signed out, which is hardest when you are parked somewhere without reception.",
        "KiwiCamping has no account to buy into or sign into. You download it, open it and you are looking at the map, with no email, password or code at any point. Your saved places and trips sync privately through your own iCloud, and an in-app purchase is restored through your Apple Account, so a new iPhone picks up where the old one left off.",
      ], ["WikiCamps NZ: account and email code", "KiwiCamping: open it and you are on the map", "Purchases restore through Apple"]),
      s("KiwiCamping: free to download, no login", [
        "KiwiCamping is free to download, with in-app purchases. It is built on DOC's own data: in August 2026, 287 DOC campsites, 927 DOC huts and 1,453 DOC tracks, each with the fees, dog rules and booking needs DOC publishes, plus 354 DOC freedom camping notices for conservation land. Place details are bundled in the app, so they stay readable without signal; the map, weather and photos need a connection.",
        "Using it is short work. Open the app, set a filter such as Campervans or Hot showers, tap a pin for the place's details, and add it to a trip that shows the distance and drive time between stops. The limits are real too: it is iPhone only, it has no traveller reviews and it lists fewer places than WikiCamps NZ. Our WikiCamps NZ vs KiwiCamping comparison sets out the rest side by side.",
      ], ["Free to download, in-app purchases", "No account, no ads", "iPhone only"], undefined, true),
      s("Finding free campsites, whichever app you use", [
        "Many travellers search for a free app because they want free nights. In KiwiCamping, set the cost filter to free and you see DOC's free campsites, 63 of them in the August 2026 data, from DOC's own fee list. Combine it with Toilets, Water supply or Campervans and a site has to meet every condition you pick.",
        "Free DOC campsites are usually basic, with a long-drop toilet and stream or tank water, and some are a walk from the road. Freedom camping on council land is a separate question with its own rules, which our freedom camping rules guide covers in full.",
      ], ["Cost filter: free DOC campsites", "Every chosen filter must match", "Free sites are usually basic"]),
      s("Doing Australia too?", [
        "KiwiCamping covers New Zealand only. If your trip carries on across the Tasman, our team also makes a sister camping app for Australia, also for iPhone and also with no login, so you can keep the same way of planning on both sides.",
        "Whatever you use, check each country's rules for where you may sleep in a vehicle. They differ more than the landscapes suggest.",
      ], ["KiwiCamping is NZ only", "A sister app covers Australia", "Each country has its own rules"]),
      s("How we checked", [
        "Prices come from the New Zealand App Store and WikiCamps' own website on 14 November 2026, and from our October 2026 check for the New Zealand price of WikiCamps Australia. The ad labels come from both Google Play listings on the same day, and review counts from the 150 most recent App Store reviews of WikiCamps Australia.",
        "Store prices change, so check the listing in your own store before you buy. KiwiCamping's place counts are from its August 2026 data.",
      ]),
    ],
    faq: [
      ["Is WikiCamps NZ free?", "No. It costs NZ$7.99 once on the New Zealand App Store, with no subscription, as of November 2026."],
      ["How much does WikiCamps cost in New Zealand?", "WikiCamps NZ is NZ$7.99 on the App Store. WikiCamps Australia was NZ$11.99 on the New Zealand App Store in October 2026, bought separately."],
      ["Is WikiCamps a subscription?", "No. WikiCamps says it is a one-off purchase per platform with no subscriptions or hidden fees. Its Google Play listings also show in-app purchases and ads."],
      ["Does one WikiCamps purchase cover Australia and New Zealand?", "No. WikiCamps NZ and WikiCamps Australia are separate apps, each bought on its own, on each platform."],
      ["Is there a free camping app for New Zealand?", "KiwiCamping is free to download, with in-app purchases, and has no ads or login. Its cost filter shows DOC's free campsites."],
    ],
    sources: [
      { label: "DOC: campsite categories and fees", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/facilities-and-fees/" },
      { label: "DOC: freedom camping on conservation land", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
    ],
  }),
  a({
    slug: "campermate-vs-wikicamps-nz",
    listicle: true,
    title: "CamperMate vs WikiCamps NZ: Which to Download, and a Third Option",
    description: "CamperMate or WikiCamps for New Zealand? How the two compare on price, ads, data and offline use in 2026, and when KiwiCamping, with no login and no ads, is the better third choice.",
    category: "App guides",
    region: "New Zealand",
    places: ["Campervan trips", "Freedom camping", "DOC campsites", "Holiday parks", "Australia"],
    imageAlt: "Four motorhomes parked in a row on a gravel area above the sea at Tautuku Bay in the Catlins",
    related: ["campermate-alternatives", "wikicamps-alternatives", "rankers-alternatives", "best-nz-camping-apps", "free-camping-apps-new-zealand", "wikicamps-nz-vs-kiwicamping"],
    hubs: ["freedom-camping"],
    intro:
      "CamperMate vs WikiCamps is the question most campervan travellers ask before landing in New Zealand. The quick answer: CamperMate is free, covers New Zealand and Australia in one app and is the easier pick for a visitor, while WikiCamps NZ costs NZ$7.99 once and lists more places, added by its users. Both carry ads, and WikiCamps NZ now needs an account. We make KiwiCamping, a third option for iPhone with no login and no ads, built on DOC's data for campsites, huts and tracks. Below, the three side by side, with CamperMate facts from our October 2026 check and WikiCamps facts as of November 2026.",
    sections: [
      s("The quick pick", [
        "Download CamperMate if your trip includes Australia, if you want an app in your own language, or if you want to book holiday parks and pick up deals along the way. Download WikiCamps NZ if you want the longest list of places with traveller comments, and do not mind paying once and signing in.",
        "Try KiwiCamping if you are on an iPhone and your trip leans on DOC campsites, huts and tracks, or if you are tired of signing in and scrolling past ads. It is free to download, with in-app purchases.",
      ], ["Two countries: CamperMate", "Most listings: WikiCamps NZ", "DOC places, no login: KiwiCamping"], {
        caption: "CamperMate checked 20 October 2026; WikiCamps NZ and KiwiCamping checked 14 November 2026. NZ App Store ratings show the average and how many ratings it is based on.",
        head: ["", "CamperMate", "WikiCamps NZ", "KiwiCamping"],
        rows: [
          ["Price", "Free", "NZ$7.99 once (iPhone)", "Free to download, with in-app purchases"],
          ["Countries", "New Zealand and Australia", "New Zealand only", "New Zealand only"],
          ["Phones", "iPhone, iPad, Android, web", "iPhone, iPad, Android", "iPhone"],
          ["Account", "Not covered in our check", "Required, with an emailed code", "None"],
          ["Ads", "Yes", "Contains ads (Google Play)", "None"],
          ["Where places come from", "Listings with traveller reviews and photos", "Mostly added by users, 12,000+ (its claim)", "DOC records, plus other sources"],
          ["Without signal", "Downloadable maps and place information", "Offline Mode: maps and up to three trips", "Place details built in; map needs signal"],
          ["NZ App Store rating", "4.4 (606)", "4.5 (137)", "Few ratings so far"],
        ],
      }),
      s("CamperMate in 2026", [
        "When we checked on 20 October 2026, CamperMate was free, available in 27 languages and covered New Zealand and Australia in one app. It shows campsites with a filter for free and paid places, plus toilets, dump stations and Wi-Fi spots, with traveller reviews and photos, campground booking with availability, local deals and links to vehicle hire. Its listing says you can download maps and place information to use without signal.",
        "It rated 4.4 from 606 ratings on the New Zealand App Store and 4.0 from 12,568 on Google Play, and it carries ads. Of the 16 CamperMate reviews from 2025 or 2026 among the 50 most recent in New Zealand, 12 gave one or two stars, and seven of those blamed a redesign for slow loading, wrong directions or sites that had gone missing. Version 5.8, with a satellite view, arrived on 16 October 2026.",
      ], ["Free, NZ and Australia, 27 languages", "Downloadable maps", "Ads; recent reviews mixed"]),
      s("WikiCamps NZ in 2026", [
        "WikiCamps NZ costs NZ$7.99 once on the New Zealand App Store, with no subscription, and says it lists more than 12,000 New Zealand sites added by its users. Since the rebuilt version 6 reached New Zealand on 4 August 2025, it needs a WikiCamps account with an emailed code. Its Offline Mode keeps maps and up to three planned trips available without signal, by WikiCamps' own description, and its Google Play listing shows the labels Contains ads and In-app purchases.",
        "Its New Zealand ratings are still high, 4.5 from 137 on the App Store and 4.4 on Google Play, with only a few recent reviews. WikiCamps Australia, on the same rebuilt app for longer, has drawn heavier criticism: of its 150 most recent App Store reviews, 119 gave one or two stars, most often over the harder-to-use redesign, sign-in problems and ads in a paid app. Australia is a separate purchase, so a two-country trip means two apps.",
      ], ["NZ$7.99 once, no subscription", "Account and email code since August 2025", "Separate app for Australia"]),
      s("CamperMate vs WikiCamps, head to head", [
        "On price, CamperMate wins outright for a visitor: it is free and covers both countries, where WikiCamps charges for each country and each platform. On the number of places, WikiCamps NZ leads, because its community keeps adding them, and its comments are often the freshest word on a quiet spot.",
        "Without signal, both say they work: CamperMate downloads maps and place information, and WikiCamps NZ keeps maps and up to three trips. Neither is ad-free. The real split is the account: by WikiCamps' own design you must sign in, and in the reviews of WikiCamps Australia about 39 of 150 mention signing in or being signed out. If you just want to open an app and look at the map, that tips things.",
      ], ["Price: CamperMate", "Number of places: WikiCamps NZ", "Both show ads"]),
      s("Where KiwiCamping fits", [
        "KiwiCamping is the third option for a different kind of trip. It is built on DOC's own records: in its August 2026 data, 287 DOC campsites, 927 DOC huts with 7,661 bunks and 1,453 DOC tracks, each with the fee, dog rules and booking requirement DOC lists and a link to DOC's page. It also shows 354 DOC freedom camping notices across 35 districts, marking where camping on conservation land is prohibited or restricted.",
        "There is no account and there are no ads. You open the app and you are on the map; pick filters such as Campervans, Toilets and Water supply, and a place must have all three to show; tap it for the details; add it to a trip that lists the distance and drive time of each leg. Set cost to free for DOC's free campsites. Place details stay on the phone without signal, while the map, routing and weather need a connection.",
        "It is not the right pick for everyone. KiwiCamping is iPhone only and New Zealand only, it has no traveller reviews or photos, and it lists fewer places than either of the other two.",
      ], ["DOC campsites, huts and tracks", "No account, no ads", "iPhone and NZ only"], undefined, true),
      s("Which to download for your trip", [
        "A campervan holiday in both countries: CamperMate, because one free app covers both. If your hire company hands you an app, start with that one; Travellers Autobarn gives its hirers CamperMate, for example.",
        "A long New Zealand trip on Android, or one built on freedom camping where other travellers' notes matter: WikiCamps NZ, if the account and ads do not bother you. Our breakdown of what WikiCamps NZ costs covers the price in more detail.",
        "Tramping, DOC huts and Great Walks, or a DOC-campsite road trip on an iPhone: KiwiCamping. Book the huts and campsites with DOC, and add CamperMate if you also want reviews.",
      ], ["Both countries: CamperMate", "Android or freedom camping: WikiCamps NZ", "DOC places on iPhone: KiwiCamping"]),
      s("How we compared", [
        "CamperMate facts come from our check of its New Zealand App Store and Google Play listings and its own site on 20 October 2026, with review counts from its 50 most recent New Zealand App Store reviews. WikiCamps facts come from its listings, version history and website on 14 November 2026, with review counts labelled by country.",
        "KiwiCamping's counts are from its August 2026 data. We describe each app only as its developer or its reviewers describe it, so a feature we leave out is not a claim that an app lacks it.",
      ]),
    ],
    faq: [
      ["Is CamperMate or WikiCamps better for New Zealand?", "CamperMate is better for a free app that also covers Australia. WikiCamps NZ lists more places for NZ$7.99 but needs an account."],
      ["Is CamperMate free?", "Yes. CamperMate was free when we checked in October 2026, and it carries ads."],
      ["Does WikiCamps NZ work offline?", "WikiCamps says its Offline Mode keeps maps and up to three planned trips available without signal."],
      ["What app do most campervan travellers use in NZ?", "CamperMate, Rankers and WikiCamps NZ are all widely used. Some hire companies give hirers an app, such as CamperMate for Travellers Autobarn."],
      ["Which app shows DOC campsites?", "KiwiCamping shows 287 DOC campsites from DOC's own data, with fees, dog rules and booking needs. The other apps list DOC sites among their own places."],
    ],
    sources: [
      { label: "DOC: places to stay", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/" },
      { label: "DOC: online bookings", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/online-bookings/" },
    ],
  }),
];
