import { makeArticle as a, type Article, type ArticleSection, type ArticleTable } from "@/lib/article-model";

const s = (heading: string, body: string[], tips?: string[], table?: ArticleTable, cta?: boolean): ArticleSection => ({ heading, body, tips, ...(table && { table }), ...(cta && { cta }) });

/**
 * Seasonal guides, written ahead of the Christmas and New Year peak. Every rule, fee and date is read
 * from the official page named in `sources` on the date in the intro, and each guide says plainly
 * where an agency publishes nothing.
 */
export const seasonalArticles: Article[] = [
  a({
    slug: "christmas-summer-camping-new-zealand-2026-27",
    publishAt: "2026-11-02",
    title: "Camping Over Christmas and Summer 2026-27 in New Zealand",
    description: "DOC campsite bookings and peak-season rules, Great Walks 2026/27 seasons, the green warrant and freedom camping enforcement, fire seasons and what to do when everything is booked out.",
    category: "Trip planning",
    region: "New Zealand",
    places: ["Tōtaranui", "Coromandel", "The Catlins", "Great Walks", "Holiday parks"],
    imageAlt: "Totaranui Bay in Abel Tasman National Park at late afternoon, with the beach curving below forested hills",
    related: ["doc-campsites-new-zealand-guide", "freedom-camping-rules-new-zealand", "holiday-parks-new-zealand-guide", "campfire-rules-new-zealand"],
    intro:
      "Christmas to mid-February is the busiest stretch at popular campsites such as Tōtaranui, and DOC says some of its most popular places, including Tōtaranui, regularly book out over peak periods. This guide sets out what DOC and the councils publish for summer 2026-27: what needs booking, the extra rules at the busiest campsites, the Great Walks seasons, the green warrant, fire seasons and your options when a site is full. We read each official page on 21 October 2026, and where an agency publishes nothing we say so instead of guessing.",
    sections: [
      s("The 2026-27 summer calendar", [
        "Christmas Day is Friday 25 December 2026. Employment New Zealand lists Boxing Day as Saturday 26 December, observed on Monday 28 December if you would not have worked the Saturday, and New Year's Day as Friday 1 January 2027. The day after New Year's Day is Saturday 2 January, observed on Monday 4 January on the same rule. Anniversary days follow: Wellington on Monday 25 January and Auckland and Nelson on Monday 1 February. Employment New Zealand says its dates may contain unintentional errors, so check with your local council.",
        "School terms set the rush. The Ministry of Education says term 4 ends no later than Friday 18 December 2026, so the summer break starts no later than Saturday 19 December, and each school sets its own end date inside that limit. Term 1 in 2027 starts between Thursday 28 January and Wednesday 3 February, so check your own school's dates if they matter to your plans.",
      ], ["Boxing Day 2026 falls on a Saturday", "Many Monday holidays follow: 28 December and 4 January", "Schools set their own end and start dates"]),
      s("DOC campsites over summer: what needs booking", [
        "DOC says bookings are required for all serviced campsites and for some scenic and standard campsites in peak season, which it says is usually 1 October to 30 April, and each campsite's page says whether it can be booked. Bookings are open now for stays up to 30 June 2027, they are first come, first served, and DOC keeps no waiting lists. The 2026/27 opening days, from 14 May for North Island campsites to 22 May for Tōtaranui, have all passed, so what is left is what other people have not taken.",
        "Some campsites cannot be booked at all and work first come, first served; DOC's advice is to arrive early and have a back-up plan. At bookable campsites such as Tōtaranui, DOC says same-day bookings are available online until 8 pm if spaces remain, and no spaces are kept for campers arriving without a booking. Phone and in-person bookings at a visitor centre carry a $10 service fee. DOC charges two adults' fees if you book or occupy a campsite you do not intend to use, such as a vacant tent holding a pitch.",
        "DOC has also made more places bookable this summer: 62 huts and campsites joined the booking system in two stages: 30 around the country from 1 September for stays from 1 October, and 32 from 1 October for stays from 1 November, most of them on busy sections of Te Araroa in Canterbury and Nelson-Tasman, with others in Arthur's Pass National Park and on the St James Walkway. Since 1 November, Backcountry Hut Tickets can be bought online at $15 per adult per night, which DOC says is not a booking. For the full booking process and fees, see our guide to DOC campsites.",
      ], ["Bookings are open to 30 June 2027", "First come, first served: no ballot or waiting list", "A phone or visitor centre booking costs $10 more"]),
      s("Tōtaranui, Coromandel and the Catlins: summer rules", [
        "The busiest campsites add rules for the peak weeks. At Tōtaranui in Abel Tasman National Park, DOC says to book well in advance for the peak period from 1 December to 28 February and for public holiday weekends, and a minimum fee of $40 per night applies from 26 December to 8 February, with a maximum stay of 14 nights. It has 269 non-powered sites and no dogs are allowed.",
        "Waikawau Bay on the Coromandel is DOC's largest campsite and is very popular over summer and Easter. DOC says bookings are essential and should be made online. Its bushside area is open only from 15 December to 15 February, and the adult fee for a non-powered site rises from $18 to $20 a night between 26 December and 8 February. On the northern Coromandel campgrounds, open fires and fireworks are banned at all times, and only gas cookers, fridge-freezers and lanterns may be used.",
        "DOC's Campsite Pass does not cover everything at Christmas. It is excluded at Tōtaranui, Momorangi Bay, Pelorus Bridge, Peel Forest and Trounson Kauri Park from 26 December to 8 February inclusive, at Kerr Bay in Nelson Lakes from 19 October to 30 April, and at every Great Walk campsite, and some campsites, including Tapotupotu, Kapowairua (Spirits Bay) and Rarawa Beach in Northland, are excluded all year. DOC says the pass does not guarantee a place at campsites that cannot be booked.",
      ], ["Tōtaranui: $40 minimum per night from 26 December", "Northern Coromandel: gas cookers only", "Campsite Pass exclusions apply over Christmas"], {
        caption: "Peak-season rules at busy DOC campsites, from each campsite's DOC page, checked 21 October 2026.",
        head: ["Campsite", "Summer rule from DOC", "Fires and dogs"],
        rows: [
          ["Tōtaranui, Abel Tasman", "Bookings required; $40 per night minimum and a 14-night maximum from 26 December to 8 February", "No dogs"],
          ["Waikawau Bay, Coromandel", "Bookings essential; bushside area open 15 December to 15 February only; fee tier from 26 December to 8 February", "Open fires banned, gas only; no dogs"],
          ["Northern Coromandel campgrounds", "Maximum stay 14 consecutive days, or 21 from 20 December to 8 February, then a 7-day break", "Open fires and fireworks banned at all times; no dogs"],
          ["Kauaeranga Valley and Broken Hills", "Book online; maximum stay 21 consecutive days, then a 7-day break", "Total ban on open fires and fireworks year-round; dogs only at Booms Flat and Hotoritori"],
          ["Purakaunui Bay and Papatowai, The Catlins", "Bookings required; $15 per adult per night", "Papatowai: no fires at any time; dogs on a leash"],
        ],
      }),
      s("Great Walks 2026/27: seasons and booking status", [
        "Great Walks bookings for 2026/27 opened between 12 and 21 May 2026, and DOC's track pages say bookings are open for the season. DOC does not publish which dates are booked out, because availability shows only in its booking system. What it does publish is last summer's pressure: the Milford Track and Abel Tasman Coast Track huts both reached about 95 per cent occupancy and the Kepler Track 91 per cent. DOC says the Heaphy, Lake Waikaremoana and Whanganui Journey often have space, and that many campsites still had good availability when huts were full.",
        "The Tongariro Northern Circuit needs a second look. DOC's track page says the section from Whakapapa to Mangatepopo is not available in 2026/27, but a newer DOC release dated 4 September 2026 says Mangatepopo Track is on course to reopen in mid-December so the full loop can be walked this summer, and the new Oturere Hut and campsite open for bookings from 18 December 2026. Check the live DOC page before you plan around either.",
      ], ["DOC publishes no per-date booked-out list", "Milford and Abel Tasman huts were near full last summer", "Tongariro: check DOC's latest notice"], {
        caption: "Great Walks 2026/27 seasons from DOC's track pages, checked 21 October 2026.",
        head: ["Great Walk", "2026/27 season or booking note from DOC", "Note"],
        rows: [
          ["Tongariro Northern Circuit", "23 October 2026 to 30 April 2027", "Mangatepopo Track due to reopen mid-December; Oturere Hut and campsite bookings from 18 December 2026"],
          ["Kepler Track", "27 October 2026 to 30 April 2027", "DOC may close the alpine section for avalanche risk"],
          ["Routeburn Track", "1 November 2026 to 30 April 2027", "The avalanche risk can extend into December"],
          ["Milford Track", "1 November 2026 to 30 April 2027", "Camping is not permitted on the Milford Track"],
          ["Whanganui Journey", "1 October to 30 April", "Huts and campsites must be booked in advance in season"],
          ["Abel Tasman Coast Track", "Bookings needed all year", "Maximum two nights per hut or campsite from 1 October to 30 April"],
          ["Heaphy Track", "Bookings needed all year", "Reopened as a through route with a new bridge over the Heaphy River"],
          ["Lake Waikaremoana, Rakiura and Paparoa", "Bookings open for 2026/27; DOC states no season dates on the page", "Paparoa has no campsites on the track"],
        ],
      }),
      s("Freedom camping this summer: the green warrant and fines", [
        "From 7 June 2026, DOC says all vehicles must have a green warrant to be certified self-contained, and a warrant card must be displayed in your vehicle when camping in areas restricted to self-contained vehicles. Blue warrants stopped counting when the transition period in the regulations ended on 7 June 2026, and DOC says vehicles with a portable toilet can no longer be certified because the toilet must be fixed to the floor. Our guide to the green warrant explains what it covers.",
        "Councils set the sites, so check the council's map for the town you are in. Tauranga City Council says you must be in a certified self-contained vehicle, that you can stay in any one location for only two nights per calendar month, and that its 25 reserves all have limits on spaces and days. Hurunui District Council splits its sites between self-contained only and others, and points to its freedom camping map. On conservation land, DOC says freedom camping is not allowed where it has explicitly prohibited it, even in a certified self-contained vehicle, and is generally not permitted near Great Walks tracks. Light no fires.",
        "The $1,000 figure often quoted is the legal ceiling for an infringement fee, not the usual fine. Under the 2023 regulations the fees set are $400 for freedom camping in a vehicle that is not self-contained where it is not permitted, $200 for failing to display a warrant card, $600 for refusing to leave and $800 for damaging land or dumping waste. If a case goes to court instead, the regulations set maximum fines of $600 to $2,400 depending on the offence, within the Act's $3,000 cap.",
      ], ["Green warrant only: blue warrants ended 7 June 2026", "Check the council map for each town", "Never light a fire when freedom camping on conservation land"]),
      s("Fire seasons and the El Niño summer", [
        "On public conservation land DOC says there is a restricted fire season all year. At campsites, light fires only in designated fireplaces and only when there is no fire ban; during a prohibited fire season, fires are not allowed. DOC says you can usually use gas burners and enclosed liquid fuel stoves for cooking at any time, but portable fireplaces or stoves that burn wood, pellets, charcoal or coal are not permitted. Some campsites ban open fires outright, including Papatowai and the Coromandel and Kauaeranga campgrounds above.",
        "Fire and Emergency New Zealand declares prohibited and restricted fire seasons by area, and the official place to check is checkitsalright.nz. Under the Fire and Emergency New Zealand Act 2017, lighting a fire in the open air in a prohibited fire season is an offence unless you hold a permit, and a person who knowingly or recklessly does so is liable on conviction to up to 2 years in prison, a fine of up to $300,000, or both.",
        "This summer's outlook raises the stakes. Earth Sciences NZ's 1 October 2026 outlook says a very strong El Niño is present, with reduced rainfall and drying vegetation most likely in the north and east of the North Island. RNZ reported that El Niño is expected to bring an increased wildfire risk this summer, and a Fire and Emergency national manager told RNZ that about 98 per cent of fires in New Zealand are caused by human activity.",
      ], ["Check checkitsalright.nz on the day", "Gas burners are usually fine on DOC land", "A very strong El Niño raises the fire risk"]),
      s("When everything is booked out", [
        "DOC's own advice is to have a back-up plan and keep an eye on the booking system for cancellations. DOC's Basic campsites are free, and non-bookable DOC campsites work on a first come, first served basis, which is why DOC says to arrive early. On conservation land you can freedom camp except where it is prohibited or restricted, and not in DOC-administered scenic or recreation reserves unless a campsite is provided, even where there is no sign; the self-containment rules above apply.",
        "We found no official summer 2026-27 demand figure for holiday parks, so we do not quote one. The evidence we have is DOC's: in March 2026 it said booking data showed visitors spent more than 400,000 nights in DOC campsites over the previous year, up more than 10 per cent on the year before. A bookable holiday park is another option, and our holiday parks guide explains how rates and peak-season rules work. Storms in January and February 2026 damaged some DOC sites, so check DOC's alerts for the campsite you want before you set out.",
      ], ["Basic DOC campsites are free", "Arrive early at first come, first served sites", "Check DOC alerts for storm-damaged sites"]),
      s("Using KiwiCamping over summer", [
        "KiwiCamping lists DOC campsites and huts with their category, fee and whether they take bookings, and the freedom camping notices DOC publishes by district. Those are DOC notices for conservation land, not council bylaws, so check the council's map for a town. Place details are stored on the phone, so they stay readable when you are out of signal; the map, directions, weather and photos need a connection, and the weather is a 7-day forecast on each place page.",
        "For nights you cannot get at a DOC campsite, the app lists holiday parks and tours from BookIt that you can book in the app, and each holiday park page shows its address, check-in times and a Book now button. KiwiCamping does not show live availability at DOC campsites, fire season status or council freedom camping rules, so check DOC, checkitsalright.nz and the council on the day.",
      ], ["Save a bookable fallback to your trip", "Check DOC alerts and the council map before you go"], undefined, true),
    ],
    sources: [
      { label: "DOC: booking and paying for a campsite", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/booking-and-paying/" },
      { label: "DOC: online bookings and 2026/27 opening dates", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/online-bookings/" },
      { label: "DOC: Great Walk, hut and campsite bookings open from 12 May", url: "https://www.doc.govt.nz/news/media-releases/2026-media-releases/ready-set-naturing-doc-great-walk-hut-and-campsite-bookings-open-from-12-may/" },
      { label: "DOC: more huts go online as booking and payment gets easier", url: "https://www.doc.govt.nz/news/media-releases/2026-media-releases/more-doc-huts-go-online-as-booking-and-payment-gets-easier/" },
      { label: "DOC: campsite facilities and fees", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/facilities-and-fees/" },
      { label: "DOC: Campsite Pass exclusions", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/booking-and-paying/campsite-pass/campsite-pass-exclusions/" },
      { label: "DOC: Tōtaranui campground", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/nelson-tasman/places/abel-tasman-national-park/things-to-do/campsites/totaranui-campground/" },
      { label: "DOC: Waikawau Bay campsite", url: "https://www.doc.govt.nz/waikawaucampsite" },
      { label: "DOC: northern Coromandel campground rules", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/coromandel/places/northern-coromandel/northern-coromandel-campground-rules/" },
      { label: "DOC: Kauaeranga and Broken Hills campground rules", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/coromandel/places/coromandel-forest-park/kauaeranga-and-broken-hills-campground-rules/" },
      { label: "DOC: Papatowai campsite", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/otago/places/catlins-coastal-area/things-to-do/papatowai-campsite/" },
      { label: "DOC: Tongariro Northern Circuit loop linked again", url: "https://www.doc.govt.nz/news/media-releases/2026-media-releases/loop-linked-again-as-work-continues-on-tongariro-northern-circuit/" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
      { label: "DOC: fires on public conservation land", url: "https://www.doc.govt.nz/parks-and-recreation/know-before-you-go/fires/" },
      { label: "Camping NZ: self-containment certification", url: "https://www.camping.org.nz/plan-your-trip/self-containment-certification" },
      { label: "Freedom Camping (Self-contained Motor Vehicles, Extension of Period 4) Regulations 2025", url: "https://www.legislation.govt.nz/regulation/public/2025/0067/latest/whole.html" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "Tauranga City Council: freedom camping", url: "https://www.tauranga.govt.nz/parks-and-recreation/travel-and-tourism/freedom-camping" },
      { label: "Hurunui District Council: responsible freedom camping", url: "https://www.hurunui.govt.nz/rrl/freedom-camping/responsible-freedom-camping-in-the-hurunui" },
      { label: "Fire and Emergency New Zealand Act 2017", url: "https://www.legislation.govt.nz/act/public/2017/17/en/latest/" },
      { label: "Earth Sciences NZ: seasonal climate outlook, October to December 2026", url: "https://niwa.co.nz/climate-and-weather/seasonal-climate-outlook/seasonal-climate-outlook-october-december-2026" },
      { label: "RNZ: grab bag and escape plan ahead of increased summer wildfire risk", url: "https://www.rnz.co.nz/news/emergencies/1739339/have-a-grab-bag-escape-plan-ahead-of-increased-summer-wildfire-risk-fenz" },
      { label: "Employment New Zealand: public holidays and anniversary dates", url: "https://www.employment.govt.nz/leave-and-holidays/public-holidays/public-holidays-and-anniversary-dates/" },
      { label: "Ministry of Education: school terms and holiday dates", url: "https://www.education.govt.nz/school/school-terms-and-holiday-dates" },
    ],
  }),
];
