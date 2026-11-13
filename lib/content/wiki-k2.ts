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
];
