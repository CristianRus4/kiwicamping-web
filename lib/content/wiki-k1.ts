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
];
