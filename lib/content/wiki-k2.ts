import { makeArticle as a, type Article, type ArticleSection, type ArticleTable } from "@/lib/article-model";

const s = (heading: string, body: string[], tips?: string[], extra?: { table?: ArticleTable; cta?: boolean }): ArticleSection => ({
  heading, body, tips, ...(extra?.table && { table: extra.table }), ...(extra?.cta && { cta: true }),
});

/**
 * Guides for New Zealand travellers weighing up a move from WikiCamps NZ, written on 14 November 2026
 * (plan: .growth-lanes/wiki-switch/PLAN-k.md, articles 6 to 10). Claims about WikiCamps come from the
 * sourced research of the same date and are dated "as of November 2026"; review evidence from the WikiCamps
 * Australia app is labelled as such. KiwiCamping features are only those the app has (no offline maps, no account,
 * no shared trips, no import or export). Never link to WikiCamps or another camping app's site.
 */
export const wikiK2Articles: Article[] = [
  a({
    slug: "wikicamps-nz-account-login",
    title: "WikiCamps Login: Does WikiCamps NZ Need an Account?",
    description: "Since August 2025, WikiCamps NZ needs an account and an emailed code. What that means on a NZ road trip, and how KiwiCamping works with no login at all.",
    category: "App guides",
    region: "New Zealand",
    places: ["DOC campsites", "DOC huts", "West Coast", "Fiordland", "iCloud sync"],
    imageAlt: "A white campervan parked alone in a grassy clearing below native bush on the West Coast",
    related: ["wikicamps-not-working-new-zealand", "share-nz-trip-plan-kiwicamping", "kiwicamping-offline-data-guide", "does-wikicamps-nz-work-offline", "switch-from-wikicamps-nz", "wikicamps-alternatives"],
    hubs: ["camping"],
    intro:
      "Yes. As of November 2026, the WikiCamps login is part of every WikiCamps NZ install: version 6 of the app, which reached New Zealand on 4 August 2025, needs a WikiCamps account, confirmed with a code sent to your email. If you would rather not sign in to anything while you travel, KiwiCamping opens straight to the map with no account, no password and no code. We make KiwiCamping, so this page makes our case, with WikiCamps' side taken from its own listing and help pages.",
    sections: [
      s("What changed with the WikiCamps NZ login", [
        "Until August 2025, WikiCamps New Zealand was still on version 5 (5.9.3, from September 2024). Version 6.0.9 arrived on the New Zealand App Store on 4 August 2025, almost a year after the same rebuild reached Australia, and it brought the account with it. Signing in now uses an email address and a verification code rather than a password you remember.",
        "WikiCamps presents the account as a benefit: its website says you can log in with the same account on several devices. Its help centre has a whole section on login and syncing issues, and as of November 2026 its articles say the codes come from a Microsoft authentication service, can take 10 to 15 minutes to arrive, and cannot be sent manually by its team.",
      ], ["Account needed since 4 August 2025", "Sign-in by emailed code", "Codes can take 10 to 15 minutes"]),
      s("Why a sign-in matters more on a New Zealand road trip", [
        "Most people using a camping app in New Zealand are on the move, and many are visitors. A new eSIM or travel SIM, a phone that only gets email on Wi-Fi, or a roaming plan you are rationing all make an emailed code slower to deal with than it would be at home.",
        "Then there is the road itself. Long stretches of road on the West Coast, in Fiordland and in the Catlins have little or no mobile coverage, and that is where people tend to open a camping app, looking for tonight's spot. Any app that wants to talk to a server before it shows you a campsite is a gamble out there. An app with nothing to sign in to removes one thing that can go wrong.",
      ], ["Travel SIMs and roaming slow things down", "Coverage gaps on the main tourist routes", "Fewer moving parts is safer"]),
      s("What WikiCamps Australia users report", [
        "New Zealand reviews say little about signing in. Only three reviews have appeared on the New Zealand App Store since version 6 arrived, and none is about the account. The picture comes from WikiCamps Australia, which has run version 6 since September 2024 and has far more reviewers. Of the 150 most recent reviews of WikiCamps Australia on Apple's store there (19 May 2025 to 1 November 2026), about 39 mention signing in or being logged out.",
        "Sign-in is one of the most common reasons people give for finding WikiCamps not working the way it used to. In the words of WikiCamps Australia reviewers: \"Constantly having to log back into app… when you have no reception impossible\" (7 December 2025). \"Every week you have to login again which requires internet\" (22 January 2026). \"Please please let us save our user ID and password or at least stop logging us out\" (1 October 2026, from a four-star review).",
        "WikiCamps has worked on it: version 6.1.1, released on 19 November 2025, listed a sign-out fix, yet reviews about being signed out kept coming through 2026. Treat these as one country's experience of the same app, not a forecast for your trip.",
      ], ["About 39 of 150 WikiCamps Australia reviews", "Few New Zealand reviews so far", "A sign-out fix shipped in November 2025"]),
      s("KiwiCamping: open the app and see the map", [
        "KiwiCamping has no account of any kind. There is no sign-up screen, no email address to hand over and no code to wait for, and nothing can log you out at a campsite with no signal. The first thing you see is the map of New Zealand. Everything you save, from Liked and Starred places to notes, collections, dropped pins and trips, stays in your private iCloud and syncs through the Apple Account already on your iPhone.",
        "From the map it is a few taps. Move to where you are heading, open the filters and pick what matters, say Campervans, Toilets and Dogs allowed (a place has to match all of them), tap a pin for its fees, facilities and rules, and add it to a trip. That simplicity matters to switchers: about 68 of the 150 most recent WikiCamps Australia reviews mention the rebuilt app or wanting the old version back.",
        "The place directory ships inside the app, so the details that decide a night stay readable without signal: fees, facilities, dog rules and booking needs for 287 DOC campsites, 927 DOC huts with 7,661 bunks between them, and 1,453 DOC tracks, plus 354 DOC freedom-camping notices across 35 districts. Map tiles, directions, weather, photos and Look Around need a connection.",
        "There are no ads in KiwiCamping either, while WikiCamps NZ, a paid app, lists \"Contains ads\" on its Google Play page as of November 2026. KiwiCamping is independent, not owned by a holiday-park group, and it shows DOC's free and low-cost campsites alongside paid holiday parks.",
        "KiwiCamping runs on iPhone only. It is free to download, with in-app purchases, and anything you buy is restored through your Apple Account rather than a separate login.",
      ], ["No account, email or code", "No ads, independent", "DOC details readable without signal"], {
        cta: true,
        table: {
          caption: "Sign-in and ads, as of November 2026, from each app's own listing and features.",
          head: ["", "WikiCamps NZ", "KiwiCamping"],
          rows: [
            ["Account", "Required since version 6 (4 August 2025)", "None"],
            ["How you sign in", "Email address and an emailed code", "You don't; the app opens to the map"],
            ["Where your saved places live", "Your WikiCamps account", "Your private iCloud"],
            ["Another device", "Sign in with the same account", "Same Apple Account, synced by iCloud"],
            ["Ads", "Contains ads (Google Play listing)", "None"],
            ["Devices", "iPhone, iPad and Android", "iPhone"],
          ],
        },
      }),
      s("If you travel with a second phone", [
        "Two iPhones on one Apple Account, say a phone and a spare, stay in sync on their own: a place saved on one appears on the other once both have a connection. A new iPhone set up with the same Apple Account brings your saved places and trips across the same way.",
        "A travel partner on their own Apple Account is different. KiwiCamping has no shared or jointly edited trip, so your partner can't edit your plan. What works is sending the trip as a text itinerary, with every stop, date, drive time and the weather, or sending a single place with a link that opens in Maps. Re-send it when the plan changes.",
      ], ["One Apple Account syncs itself", "A partner gets a text itinerary", "No jointly edited trip"]),
      s("Set it up before you land", [
        "Install the app at home or on airport Wi-Fi rather than on a roaming plan, check that iCloud is switched on for it, and save your first few nights while you still have a fast connection. If the first stretch includes a booked DOC campsite or a Great Walk hut, add it to a trip with its date so the plan is waiting when you pick up the van.",
        "Whichever app you use, the sign at the site, the council bylaw and DOC's own notices come first. An app is a guide to the rules, never a permit.",
      ], ["Install on Wi-Fi", "Save the first nights early", "Signs and DOC notices come first"]),
    ],
    faq: [
      ["Does WikiCamps need an account?", "Yes. As of November 2026, WikiCamps NZ needs a WikiCamps account, confirmed with an emailed code. It has done so since version 6 reached New Zealand on 4 August 2025."],
      ["Why does WikiCamps keep asking me to sign in?", "Since version 6 the app is tied to an account. Many WikiCamps Australia reviewers in 2025 and 2026 reported being signed out and asked for a new emailed code. KiwiCamping has no account, so there is nothing to sign back in to."],
      ["Is there a NZ camping app without a login?", "Yes. KiwiCamping, which we make, has no account, no login screen and no ads. It opens to the map, and your saved places and trips sync through your own iCloud."],
      ["Does KiwiCamping need an account?", "No. There is no KiwiCamping account, email sign-up or verification code. Purchases are restored through your Apple Account."],
      ["Will my KiwiCamping trips sync to a new iPhone?", "Yes, if the new iPhone uses the same Apple Account with iCloud turned on. Saved places, collections, pins and trips sync across."],
    ],
    sources: [
      { label: "Apple: iCloud", url: "https://www.apple.com/nz/icloud/" },
      { label: "DOC: places to stay", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/freedom-camping/" },
    ],
  }),
  a({
    slug: "does-wikicamps-nz-work-offline",
    title: "Does WikiCamps NZ Work Offline? What Works With No Signal",
    description: "WikiCamps' Offline Mode keeps maps and up to three trips. KiwiCamping keeps every DOC campsite and hut detail on the phone with no download. What works where.",
    category: "App guides",
    region: "New Zealand",
    places: ["DOC campsites", "DOC huts", "Freedom camping", "Haast Pass", "Milford Road", "The Catlins"],
    imageAlt: "Mitre Peak rising above the still water of Milford Sound at the end of the Milford Road",
    related: ["kiwicamping-offline-data-guide", "wikicamps-nz-account-login", "freedom-camping-rules-new-zealand", "new-zealand-driving-day-planner", "best-campervan-apps-new-zealand", "wikicamps-not-working-new-zealand"],
    hubs: ["freedom-camping"],
    intro:
      "Partly. As of November 2026, WikiCamps says its Offline Mode lets you use maps and up to three of your planned trips without phone signal, once they are downloaded, and that mode has improved a lot since a rough 2025. KiwiCamping works the other way round: it has no offline map, but every DOC campsite, hut, track and freedom-camping notice is inside the app from the moment you install it, with nothing to download, no account to sign into and nothing to log you out when the bars disappear. We make KiwiCamping, so weigh this as our view; it gives WikiCamps credit where it is due.",
    sections: [
      s("Does WikiCamps work offline? Offline Mode in its own words", [
        "WikiCamps' website describes it in one line: \"Offline Mode lets you access maps and up to three of your planned trips even without phone signal.\" That is a real strength. Offline maps mean the map itself keeps drawing when you drop out of coverage, which a directory-first app can't match.",
        "The feature has grown in steps. Releases in the first half of 2025 added trip downloads for offline use, and version 6.1.5, released on 23 February 2026, made offline data the default and added offline access to bookings. The limit to know is the three-trip cap, which is WikiCamps' own figure: plan four separate trips and one of them stays online only.",
      ], ["Offline maps after a download", "Up to three planned trips", "Offline data by default since February 2026"]),
      s("What went wrong in 2025, and what changed", [
        "The evidence here comes from WikiCamps Australia, which got version 6 a year before New Zealand and has far more reviews. Of its 150 most recent reviews on Apple's store there, about 21 describe offline problems, most of them from mid to late 2025. One reviewer wrote on 20 November 2025: \"Despite setting the app to offline mode and downloading everything… the app needed Internet connection during start-up.\" Another, on 14 July 2025: \"If you open up the app where the internet is sketchy the app opens up to the sign-in page.\"",
        "Fixes followed. Version 6.1.2 (25 November 2025) listed an Offline Mode fix, and by March 2026 a five-star reviewer called \"the app loading into offline mode immediately\" a \"10/10 addition\". The fair reading as of November 2026 is that offline start-up was a big complaint and has since improved. The account is still there, though, and the WikiCamps login is one more step that needs a connection now and then.",
      ], ["Offline start-up was the 2025 complaint", "Fixed in late 2025 and early 2026", "The account still needs signal sometimes"]),
      s("KiwiCamping: no sign-in, no download, details on your phone", [
        "KiwiCamping ships its New Zealand directory inside the app, so there is no offline download to remember before you leave town. With no signal at all you can still open 287 DOC campsites and 927 DOC huts (7,661 bunks) with their fees, facilities, dog rules and booking needs, read the details of 1,453 DOC tracks, and check 354 DOC freedom-camping notices across 35 districts.",
        "Your own things stay readable too: Liked, Starred and Want to visit places, your collections and private notes, and every trip with its stops, dates and notes. None of it waits on a download, and because the app has no account, there is no sign-in screen waiting for you at a campsite with no bars. Open it and you are on the map; tap a place and its details are there.",
      ], ["Directory built in, no download", "All your trips stay readable", "No sign-in to get stuck behind"], {
        cta: true,
        table: {
          caption: "Without signal, as of November 2026, from WikiCamps' own description and KiwiCamping's features.",
          head: ["", "WikiCamps NZ", "KiwiCamping"],
          rows: [
            ["Map", "Offline maps once downloaded", "Needs signal"],
            ["Place details", "In the downloaded offline data", "Built into the app; no download"],
            ["Planned trips", "Up to three offline", "Every trip you have made, with stops, dates and notes"],
            ["Account", "Required", "None"],
          ],
        },
      }),
      s("What needs signal in KiwiCamping", [
        "Be clear about the gap: KiwiCamping does not have offline maps. Map tiles, routing and directions, the weather forecast, place photos and Look Around all load over the network, and so do linked DOC articles. Without reception you can read a place in full, but the map behind it goes blank.",
        "The simple fix is to pair it with a navigation app that keeps maps offline. Download the region in Apple Maps or Google Maps before you go, and choose either one as KiwiCamping's directions app in its settings. KiwiCamping tells you where to stay and what the rules are; the navigation app gets you there.",
      ], ["No offline map in KiwiCamping", "Weather, photos and routing need signal", "Pair it with offline navigation"]),
      s("Before you drop out of coverage", [
        "Some of the best driving in the country has the least signal. The Haast Pass, the Milford Road and much of the Catlins are long stretches where you should assume you will lose it. Do the connected jobs in the last town: look at the forecast for tonight's stop, start the directions to it so the route is loaded, and check NZTA's road and closure updates.",
        "Then save tonight's place and a fallback into the trip with their dates. With KiwiCamping filters such as Water supply, Hot showers or Dogs allowed you can shortlist both before you go, and a place has to match every filter you pick, so the shortlist is short. The details of both stay on the phone when the bars disappear.",
      ], ["Forecast and directions in the last town", "Save a fallback with its date", "Combined filters keep the shortlist short"]),
      s("Freedom camping rules without signal", [
        "The rules for where you can sleep are the thing you most need offline. DOC's freedom-camping notices for conservation land are built into KiwiCamping, so you can see whether an area is prohibited or restricted after the signal has gone.",
        "Council land is different. Each district sets its own freedom camping rules in a bylaw, published on the council's website, and those are not in the app. Read the bylaw for the next district while you are still in coverage, and on arrival follow the sign at the site, which beats any app.",
      ], ["DOC notices built into the app", "Council bylaws: check before you go", "The sign at the site wins"]),
    ],
    faq: [
      ["Does WikiCamps NZ work offline?", "Partly. As of November 2026, WikiCamps says its Offline Mode keeps maps and up to three planned trips available without signal once downloaded. Offline start-up problems in 2025 were fixed in late 2025 and early 2026."],
      ["Which NZ camping app works without signal?", "KiwiCamping keeps all its DOC campsite, hut, track and freedom-camping details on the phone with no download. WikiCamps keeps downloaded maps and up to three trips. Neither replaces an offline navigation app."],
      ["Does KiwiCamping have offline maps?", "No. Place details, saved places and trips work without signal, but map tiles, directions, weather, photos and Look Around need a connection. Pair it with Apple Maps or Google Maps offline areas."],
      ["Can I check freedom camping rules without signal?", "On conservation land, yes: KiwiCamping includes DOC's 354 freedom-camping notices. Council bylaws are on council websites, so check the next district before you leave coverage."],
      ["How many WikiCamps trips can I keep offline?", "Up to three, according to WikiCamps. In KiwiCamping every trip you have made stays readable without signal, with its stops, dates and notes."],
    ],
    sources: [
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/freedom-camping/" },
      { label: "DOC: alerts and closures", url: "https://www.doc.govt.nz/parks-and-recreation/know-before-you-go/alerts/" },
      { label: "NZTA Journeys: road conditions and closures", url: "https://www.journeys.nzta.govt.nz/" },
      { label: "Google Maps: download areas for offline use", url: "https://support.google.com/maps/answer/6291838" },
    ],
  }),
];
