import { makeArticle as a, type Article, type ArticleSection, type ArticleTable } from "@/lib/article-model";

const s = (heading: string, body: string[], tips?: string[], table?: ArticleTable, cta?: boolean): ArticleSection => ({ heading, body, tips, ...(table && { table }), ...(cta && { cta }) });

/**
 * Seasonal and summer-planning guides, written ahead of the Christmas and New Year peak: holidays,
 * booked-out huts, easy huts and road user charges. Every rule, fee and date is read
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
    related: ["school-public-holidays-new-zealand-2027", "doc-campsites-new-zealand-guide", "freedom-camping-rules-new-zealand", "holiday-parks-new-zealand-guide", "campfire-rules-new-zealand"],
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
  a({
    slug: "new-years-eve-summer-event-camping-new-zealand",
    publishAt: "2026-11-03",
    title: "New Year's Eve and Summer Event Camping in New Zealand 2026-27",
    description: "Where New Year's Eve camping meets liquor bans and freedom camping limits, what each council says for summer 2026-27, and the camping rules at Rhythm and Alps, Northern Bass and Rhythm and Vines.",
    category: "Trip planning",
    region: "New Zealand",
    places: ["Coromandel", "Mount Maunganui", "Wānaka", "Raglan", "Taupō"],
    imageAlt: "Whangamata Beach on the Coromandel Peninsula under a clear blue sky, with surf on the left and sand dunes in the foreground",
    related: ["freedom-camping-rules-new-zealand", "camping-rules-local-councils-new-zealand", "christmas-summer-camping-new-zealand-2026-27", "campfire-rules-new-zealand"],
    intro:
      "New Year's Eve is when New Zealand's beach towns fill, councils switch on their summer liquor bans, and festival campsites open for a few nights only. The rules differ by town, and an open drink in the wrong car park can cost you a fine and your drink. This guide sets out what councils, Police and the festivals themselves publish for 2026-27: the alcohol bans, the freedom camping limits, how booking works and what each event allows in its campsite. We read each official page on 21 October 2026, and where a council publishes nothing we say so.",
    sections: [
      s("What a liquor ban means for a camper", [
        "Under the Local Government Act 2002, a council can make a bylaw banning the consumption, bringing in or possession of alcohol in public places, at all times or for specified periods. A constable can search a container or a vehicle in or entering a ban area without a warrant, seize the alcohol and arrest a person committing an offence. Tauranga City Council says a breach is an offence that may bring a $250 infringement fine. In a council news release for last summer, on 17 December 2025, Police said anyone found drinking in the alcohol-free zones, including inside vehicles, faces confiscation of the alcohol and on-the-spot fines.",
        "Each bylaw has its own map, dates and exceptions, so read the council's map for the town you are in. Some bylaws exempt people drinking inside a certified self-contained vehicle, and some do not. The drink-driving limit is a separate rule: Police say it is 250 micrograms of alcohol per litre of breath for drivers aged 20 and over, and zero for drivers under 20.",
      ], ["Check the town's map, not just the dates", "A parked vehicle can be inside the ban area", "Drivers under 20 have a zero limit"]),
      s("Summer alcohol bans in the popular camping towns", [
        "These are the arrangements the councils publish, checked on 21 October 2026. The council's own maps decide which streets, beaches and reserves are covered, and councils can add temporary bans with notice. Thames-Coromandel says it gives at least 7 days' notice of any temporary ban, and had announced none for New Year 2026-27 when we checked.",
        "Thames-Coromandel's bylaw lets people in a certified self-contained vehicle drink inside it at a designated freedom camping area, within the number of occupants on the vehicle's certificate. Taupō allows drinking in lawfully parked certified self-contained vehicles in most of its ban areas, but not at Hipapatua Reserve (Reid's Farm), where all vehicles are covered by the ban. Tauranga states no camper exemption.",
      ], ["Thames-Coromandel: 4pm 23 December to 4pm 6 January", "Tauranga: New Year extension to 6am 6 January", "Raglan: 23 December to 10 February"], {
        caption: "Summer and New Year alcohol bans from each council's published bylaw or page, checked 21 October 2026.",
        head: ["Town and council", "Ban dates and areas", "Campers"],
        rows: [
          ["Whangamata, Whitianga, Pauanui, Tairua and other mapped areas (Thames-Coromandel)", "4pm on 23 December to 4pm on 6 January in the mapped areas, plus permanent bans in mapped areas at all times", "Drinking inside a certified self-contained vehicle at a designated freedom camping area is exempt within the certificate's occupant number"],
          ["Mount Maunganui and Papamoa (Tauranga)", "Permanent bans include Mount Maunganui's main beach, excluding Pilot Bay, and Papamoa's seaward beaches and reserves from 9pm to 7am daily; the New Year period, 26 December to 6am on 6 January, extends the Mount Maunganui and Papamoa areas", "Police said last summer that drinking in the zones counts inside vehicles too; the council says a breach may bring a $250 infringement fine"],
          ["Wānaka (Queenstown Lakes)", "Alcohol-free areas from 6pm to 6am every day, and from 6am on 25 December to 6am on 6 January, per the council's map dated September 2023", "Check the council's current map"],
          ["Raglan (Waikato District)", "Seasonal ban from 23 December to 10 February (extended from 6 January in a bylaw change in force from 3 September 2025)", "A new exception lets people in self-contained vehicles drink with restrictions, except on James Street"],
          ["Taupō, Tūrangi and the lakefront (Taupō District)", "From 12 noon on 27 December to 7am on 4 January in the town centres, lakefront reserves and Hipapatua Reserve", "Alcohol cannot be drunk in vehicles in the areas, except in lawfully parked certified self-contained vehicles outside Hipapatua Reserve"],
          ["Kaikōura (Kaikōura District)", "Permanent bans at all times in mapped central areas, including camp areas inside them; no New Year-specific ban in the bylaw", "Consuming alcohol in a vehicle in a public place in the ban areas is banned"],
        ],
      }),
      s("Freedom camping over New Year", [
        "Freedom camping on council land needs a certified self-contained vehicle almost everywhere here, and since 7 June 2026 that means a green warrant, as our guide to the green warrant explains. Thames-Coromandel's freedom camping bylaw requires a self-contained vehicle, allows only two consecutive nights in an area, and allows freedom camping only between 5pm and 9am; tents are not allowed. Tauranga allows two nights per calendar month in any one location, and the council lists 25 reserves for overnight parking, all with limits on spaces and days.",
        "Raglan banned freedom camping along James Street from 22 December 2025 after 165 submissions, citing alcohol, noise and overcrowding. Taupō allows certified self-contained vehicles on council land other than its reserves and Ferry Road, for a maximum of three nights and/or four days, and says you could receive a $400 fine. Kaikōura allows one night in the same spot, or within 500 metres of it, in any four-week period at designated sites only. In Akaroa, all council land in the township is prohibited except the marked spaces in the Akaroa Freedom Camping Area, where certified self-contained vehicles can stay up to two nights in any 30-day period.",
      ], ["Green warrant needed in self-contained-only areas", "Raglan: no freedom camping on James Street", "Thames-Coromandel: 5pm to 9am only"]),
      s("Mount Maunganui and the Mauao landslide", [
        "Tauranga City Council says the Mount Maunganui Beachside Holiday Park has been closed until further notice since the Mauao landslide of 22 January 2026, in which six people died, and it is not taking forward bookings or keeping a waitlist. The council says the site remains within a high-risk zone and is unsafe, that no decision has been made on the park's future, and that Mauao and the track around its base are closed.",
        "The council also says Mount Maunganui is largely open, with restrictions applying to Mauao and the surrounding affected areas. Tauranga City Council and Police announced last summer's arrangements on 17 December 2025, so look for this summer's notice in December before you plan around fireworks, fencing or event closures.",
      ], ["The Beachside Holiday Park is closed", "Mauao is closed", "Check the council's New Year notices"]),
      s("Booking a bed for New Year", [
        "We found no official page describing a Christmas or New Year ballot for the holiday parks and domain camps we checked, and no official holiday park demand figure for summer 2026-27. What operators publish is their terms: Tasman Holiday Parks' summer 2026/27 terms say cancellations are permitted until 1 December 2026 with a full refund and that from 1 December 2026 bookings become strictly non-refundable and non-amendable, and that peak stays may have minimum nights and set arrival days. The same page carries other rebooking terms, so read the terms that apply to your booking.",
        "Kaiteriteri Recreation Reserve says December to February are its busiest months by far and that no pets are allowed. At DOC's Tōtaranui campground, DOC's camp rules say that on New Year's Eve campers can celebrate within reason, that fireworks are not allowed and that excessive noise will not be tolerated, especially after 10 pm. Our Christmas and summer guide covers DOC's booking rules and peak fees.",
      ], ["Read the cancellation terms before paying", "Ask the park about minimum nights", "No fireworks at Tōtaranui"]),
      s("Festival campsites: Rhythm and Alps, Northern Bass and Rhythm and Vines", [
        "Festival camping is a different product from a campsite: you need the event's ticket and camping pass, you follow its rules, and the events have strict no-refund policies and say they will not be cancelled for adverse weather. All three events below are strictly R18 and say they do not allow glass. Their official pages show the 2026 editions, and tickets and camping passes can sell out, so check each event's site rather than a price here.",
        "Rhythm and Vines says its 2026 festival, on 28 to 31 December 2026, is the final edition at Waiohika Estate in Gisborne, and that it moves to an undisclosed location in 2027. Rhythm and Alps runs on 30 and 31 December at Robrosa Station in the Cardrona Valley near Wānaka, and Northern Bass runs on 30 and 31 December at Kaiwaka, just over an hour north of Auckland.",
      ], ["R18 only, with ID", "No cancellation for bad weather", "Check each event's site for availability"], {
        caption: "Camping rules from each event's official ticket pages and terms, checked 21 October 2026.",
        head: ["Event", "Dates and place", "Camping rules"],
        rows: [
          ["Rhythm and Alps", "30 and 31 December 2026, Robrosa Station, Cardrona Valley near Wānaka", "General admission plus a camping pass per person; Roadie Camp is for self-contained vehicles and rooftop tents only; tents limited to 10 m2; no gas cooking on site; no camping in cars or station wagons; strictly no BYO alcohol"],
          ["Northern Bass", "30 and 31 December 2026, Kaiwaka", "No camping if you attend on 30 December only; tents should be smaller than 3 m by 3 m; campervan area for vehicles no longer than 6 m and no wider than 3 m with a valid pass; no camping in any other vehicle on site, including the car park; no parking on the road outside"],
          ["Rhythm and Vines", "28 to 31 December 2026, Waiohika Estate, Gisborne", "Camping is bundled into a four-night camping and festival pass; day and three-day festival passes do not include campground access (upgrades subject to availability); no fire, naked flame or BBQs; strict no-refunds policy, and the event will not be cancelled for adverse weather"],
        ],
      }),
      s("Beaches, fire and the road", [
        "Surf Life Saving New Zealand says the patrol season runs from late October to April, that you should swim between the red and yellow flags, and that you can check patrol hours at Safeswim.org.nz and call 111 in an emergency. It also says most serious incidents happen outside patrol hours and flagged areas.",
        "Fires and fireworks are banned at many summer campsites: DOC bans open fires and fireworks year-round at the northern Coromandel and Kauaeranga campgrounds, and bans fireworks at Tōtaranui, where fires are allowed only in the fireplaces provided and only when there is no fire ban. Check the fire season for your area on checkitsalright.nz, and read our fire rules guide before you cook.",
      ], ["Swim between the flags", "Check Safeswim for patrol hours", "No fireworks at DOC's Coromandel campsites"]),
      s("Using KiwiCamping at New Year", [
        "KiwiCamping lists DOC campsites and huts with their category and fee, and the freedom camping notices DOC publishes by district. Those are DOC notices for conservation land, not council bylaws, so check the council's map and its liquor ban dates for the town you are in. Place details are stored on the phone, so they stay readable out of signal; the map, directions, weather and photos need a connection.",
        "For a bed when the campsites are full, the app lists holiday parks and tours from BookIt that you can book in the app, and each holiday park page shows its address, hours and a Book now button. KiwiCamping does not show liquor bans, council freedom camping maps or festival camping rules, so check the council or the event on the day.",
      ], ["Check the council's liquor ban map", "Save a bookable fallback to your trip"], undefined, true),
    ],
    sources: [
      { label: "Local Government Act 2002, section 147: alcohol bans", url: "https://www.legislation.govt.nz/act/public/2002/0084/latest/DLM172980.html" },
      { label: "Local Government Act 2002, section 169: Police powers", url: "https://www.legislation.govt.nz/act/public/2002/0084/latest/DLM173433.html" },
      { label: "Police: road rules and drink-driving limits", url: "https://www.police.govt.nz/advice-services/driving-and-road-safety/being-safe-road-rules-and-reasons" },
      { label: "Thames-Coromandel District Council: Alcohol Control Bylaw", url: "https://www.tcdc.govt.nz/alcoholcontrol" },
      { label: "Thames-Coromandel District Council: Freedom Camping Bylaw 2022", url: "https://www.tcdc.govt.nz/Our-Council/Bylaws-Codes-and-Policies/Bylaws/Freedom-Camping-Bylaw-2022" },
      { label: "Tauranga City Council: alcohol-free areas", url: "https://www.tauranga.govt.nz/Permits-and-licences/Alcohol/Other-alcohol-information/Alcohol-free-areas" },
      { label: "Tauranga City Council: New Year period alcohol-free areas", url: "https://www.tauranga.govt.nz/Permits-and-licences/Alcohol/Other-alcohol-information/Temporary-and-New-Year-period-alcohol-free-areas" },
      { label: "Tauranga City Council: freedom camping", url: "https://www.tauranga.govt.nz/parks-and-recreation/travel-and-tourism/freedom-camping" },
      { label: "Tauranga City Council: Mauao landslide questions", url: "https://www.tauranga.govt.nz/council/mauao-landslide/mauao-landslide-frequently-asked-questions" },
      { label: "Mount Maunganui Beachside Holiday Park", url: "https://www.mountbeachside.co.nz/" },
      { label: "Queenstown Lakes District Council: Wānaka alcohol-free areas map", url: "https://www.qldc.govt.nz/media/hghhfiaz/qldc_regulatory_alcohol-ban-maps_a4_sep23-wanaka.pdf" },
      { label: "Waikato District Council: changes to the Alcohol Control Bylaw", url: "https://www.waikatodistrict.govt.nz/news/article/2025/09/03/adoption-of-changes-to-the-alcohol-control-bylaw-2020" },
      { label: "Waikato District Council: freedom camping ban on James Street, Raglan", url: "https://www.waikatodistrict.govt.nz/news/article/2025/12/18/freedom-camping-ban-for-james-street-raglan" },
      { label: "Taupō District Council: alcohol ban areas", url: "https://www.taupodc.govt.nz/rules-regulations-and-licenses/alcohol-licensing/zalcohol-ban-areas" },
      { label: "Taupō District Council: freedom camping", url: "https://www.taupodc.govt.nz/recreation/freedom-camping" },
      { label: "Kaikōura District Council: responsible camping", url: "https://www.kaikoura.govt.nz/rules-regs-licenses/responsible-camping" },
      { label: "Christchurch City Council: freedom camping bylaw", url: "https://ccc.govt.nz/freedom-camping-bylaw" },
      { label: "Tasman Holiday Parks: terms and conditions", url: "https://www.tasmanholidayparks.com/terms-and-conditions" },
      { label: "Kaiteriteri Recreation Reserve: frequently asked questions", url: "https://experiencekaiteriteri.co.nz/faqs" },
      { label: "DOC: Tōtaranui camp rules", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/nelson-tasman/places/abel-tasman-national-park/things-to-do/campsites/totaranui-campground/camp-rules/" },
      { label: "Rhythm and Vines: tickets and camping", url: "https://www.rhythmandvines.co.nz/tickets" },
      { label: "Rhythm and Vines: terms and conditions", url: "https://www.rhythmandvines.co.nz/terms-and-conditions" },
      { label: "Rhythm and Vines: final festival at Waiohika Estate", url: "https://www.rhythmandvines.co.nz/behind-the-vines/rhythm-and-vines-announces-final-festival-at-waiohika-estate" },
      { label: "Rhythm and Alps: ticket guide", url: "https://rhythmandalps.co.nz/ticket-guide/" },
      { label: "Rhythm and Alps: frequently asked questions", url: "https://rhythmandalps.co.nz/faqs/" },
      { label: "Northern Bass: event information", url: "https://www.northernbass.co.nz/event-info" },
      { label: "Northern Bass: terms", url: "https://www.northernbass.co.nz/terms" },
      { label: "Surf Life Saving New Zealand: beach safety messages", url: "https://www.surflifesaving.org.nz/stay-safe/beach-safety-messages" },
      { label: "Tauranga City Council news: good times don't need fines this holiday season", url: "https://newsbeat.tauranga.govt.nz/news-article/artmid/24836/articleid/14390/good-times-don%E2%80%99t-need-fines-this-holiday-season" },
      { label: "Surf Life Saving New Zealand: summer patrol season", url: "https://www.surflifesaving.org.nz/news/2026/april/mixed-conditions-and-high-demand-define-surf-life-saving-new-zealand-s-summer-patrol-season" },
      { label: "Rhythm and Alps: terms and conditions", url: "https://rhythmandalps.co.nz/terms-conditions/" },
      { label: "DOC: Kauaeranga and Broken Hills campground rules", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/coromandel/places/coromandel-forest-park/kauaeranga-and-broken-hills-campground-rules/" },
      { label: "Safeswim", url: "https://safeswim.org.nz/" },
      { label: "DOC: northern Coromandel campground rules", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/coromandel/places/northern-coromandel/northern-coromandel-campground-rules/" },
    ],
  }),
  a({
    slug: "doc-hut-great-walk-booked-out",
    publishAt: "2026-11-13",
    title: "DOC Hut or Great Walk Booked Out? Cancellations, Alerts and Alternatives 2026-27",
    description: "DOC keeps no waitlist, but cancelled beds go back on sale. How cancellation fees release beds, what alert services cost, and the huts and walks to try instead.",
    category: "Trip planning",
    region: "New Zealand",
    places: ["Great Walks", "DOC huts", "Milford Track", "Cancellations"],
    imageAlt: "Clinton Hut on the Milford Track in Fiordland, a timber hut among beech forest",
    related: ["nz-great-walks-2026-27-huts-campsites-booking-fees", "doc-huts-new-zealand-guide", "best-campsite-booking-apps-new-zealand", "christmas-summer-camping-new-zealand-2026-27"],
    intro:
      "When a DOC hut or Great Walk shows no space, there is no waitlist to join: DOC's booking terms say it holds none. Beds come back when other walkers cancel, and they go straight back on sale in the booking system, first come, first served. Check the booking site often, especially 15 and 3 days before your date, when DOC's cancellation fees step up and people change plans. Private alert services will watch the site for you for a fee; they are not run by DOC. We read DOC's booking terms and track pages on 3 November 2026.",
    sections: [
      s("Why booked-out dates open up", [
        "DOC's terms say no waitlists are held for future availability, so a cancelled bed is released to whoever books it first. Cancellations happen all season: in its own Great Walks myth-busting post, DOC says even the Milford Track has cancellations across the year.",
        "The cancellation fees set the rhythm. On a Great Walk, a walker who cancels 15 or more days before arrival loses 10% of the booking, from 14 to 4 days out 50%, and from 3 days out 75%, so plans tend to change just before each step. A medical cancellation with a certificate carries no fee, and a booking made that day or the day before can be cancelled free.",
      ], ["DOC keeps no waitlist", "Beds return straight to sale", "Check before the 15-day and 3-day steps"], {
        caption: "DOC cancellation fees by type of booking, as a share of the whole booking, from DOC's booking terms. Read 3 November 2026.",
        head: ["Booking", "15 days or more out", "14 to 4 days out", "3 days to the day before", "Day before to day after arrival"],
        rows: [
          ["Great Walks", "10%", "50%", "75%", "100%"],
          ["Huts and backcountry campsites", "10%", "20%", "30%", "100%"],
          ["Campgrounds", "10%", "20%", "75%", "100%"],
          ["Lodges, cabins and sole-occupancy huts", "10%", "100%", "100%", "100%"],
        ],
      }),
      s("How to catch a cancellation", [
        "Make a DOC account before you search, so a booking takes seconds. DOC asks for full payment by Visa or Mastercard when you book, and a booking only counts once the payment is confirmed, so have the card ready and keep a strong connection: DOC warns that losing signal part way through often loses the booking.",
        "On opening day, DOC says duplicate bookings are often dropped in the first 25 minutes, so keep refreshing the dates you want during that window. After that, check morning and evening. Each walker needs their own booking, and bookings cannot be moved to another account holder, so do not buy from anyone reselling a place.",
      ], ["Create the account first", "Retry in the first 25 minutes", "Never buy a resold booking"]),
      s("Cancellation alert services", [
        "Some private companies check DOC's booking site for you and send a text or email when a bed you want comes free. They do not hold beds or book for you: you still book and pay on DOC's site. DOC does not run or endorse them, and its terms say speculative bookings are not allowed and void the whole booking.",
        "Reserve Nature is one, a New York company that tracks campground and permit availability and alerts by text or call. Its pricing page lists a pay-as-you-go alert at $10 and a monthly pass at $15, without naming the currency, and it does not say on that page which New Zealand tracks it covers, so check before you pay. An alert is only worth paying for when your dates are fixed and the walk is one that sells out, such as the Milford Track.",
      ], ["Alerts tell you; you still book", "DOC does not run or endorse them", "Check which tracks a service covers"]),
      s("Change the walk, not the trip", [
        "DOC's advice for a sold-out walk is to stay flexible: try quieter dates, a less popular Great Walk, or walking the track in the other direction, because the huts can have space that way. Most Great Walks have space somewhere in the season; the Milford Track is the one that sells out fast.",
        "Outside the Great Walks, about 60 of DOC's more than 900 huts take bookings, and the rest are first come, first served. A first come, first served hut means an early start and a tent in case it is full, but it can never be booked out. Our list of easy bookable huts is a good place to look for a first night.",
      ], ["Try the other direction", "Pick a quieter date or walk", "Carry a tent for first come huts"]),
      s("Changes, refunds and bad weather", [
        "Change dates online before the fees step up: a change that lowers the booking's value costs $10, and so does any change made at a visitor centre. Refunds go back to the card you paid with. Leaving early earns no refund for the nights you do not use, and a no-show gets nothing back.",
        "If DOC closes a track for weather, it does not refund automatically: request a refund of the unused nights within seven days. The same seven-day window applies to other closures, so keep your booking number handy.",
      ], ["Changes before the fee steps", "No refund for leaving early", "Claim weather refunds within 7 days"]),
      s("Using KiwiCamping when a hut is full", [
        "KiwiCamping lists DOC huts and campsites with their category, fee and whether they take bookings, so you can find the first come, first served huts and the campsites near a track's road end when the Great Walk huts are full. Save them to your trip so the plan is on your phone before you head in.",
        "KiwiCamping does not show live availability at DOC huts, so book and watch for cancellations on DOC's site. A saved hut keeps its fee and facilities on your phone for the walk in, while the map, directions, weather and photos wait for signal.",
      ], ["Find first come, first served huts", "Save road-end campsites to your trip"], undefined, true),
    ],
    sources: [
      { label: "DOC: huts, campsites, Great Walks, cabins and lodges terms and conditions", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/bookings-terms-and-conditions/huts-campsites-cabins-and-lodges-terms-and-conditions/" },
      { label: "DOC blog: Great Walks myth-busting", url: "https://blog.doc.govt.nz/2024/05/08/great-walks-mythbusting/" },
      { label: "DOC: modify or cancel your online booking", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/online-bookings/modify-or-cancel-your-online-booking/" },
      { label: "DOC: Anti Crow Hut makeover and bookable huts", url: "https://www.doc.govt.nz/news/media-releases/2025-media-releases/doc-reveals-dream-makeover-of-rat-infested-hut/" },
      { label: "Reserve Nature: pricing", url: "https://reservenature.com/pricing" },
    ],
  }),
  a({
    slug: "school-public-holidays-new-zealand-2027",
    publishAt: "2026-11-14",
    title: "School Holidays and Public Holidays in New Zealand 2027: Camping Dates",
    description: "2027 term breaks, every public holiday and regional anniversary day, and the long weekends when campsites fill: Waitangi Day, Easter, Matariki and Labour Day.",
    category: "Trip planning",
    region: "New Zealand",
    places: ["School holidays", "Waitangi Day", "Easter", "Matariki", "Anniversary days"],
    imageAlt: "Tents, a campervan and cars on the grass at the Reefton Motor Camp on the West Coast, under tall trees on a summer evening",
    related: ["christmas-summer-camping-new-zealand-2026-27", "doc-campsites-new-zealand-guide", "holiday-parks-new-zealand-guide", "camping-fees-new-zealand-2026"],
    intro:
      "In 2027, New Zealand schools break from 10 to 26 April, 3 to 18 July and 25 September to 10 October, and finish the year by Friday 17 December. The busiest long weekends for camping are Waitangi Day (observed Monday 8 February), Easter (Friday 26 to Monday 29 March, in term time), Anzac (observed Monday 26 April, at the end of the autumn break), Matariki (Friday 25 June) and Labour Day (Monday 25 October). Regional anniversary days add a long weekend in each region. We read the Ministry of Education's Gazette notice and Employment New Zealand's 2027 list on 3 November 2026.",
    sections: [
      s("2027 school terms", [
        "Terms 2 and 3 are the same for every state and state-integrated school. Term 1 starts between Thursday 28 January and Wednesday 3 February, as each school chooses, and term 4 ends no later than Friday 17 December, so a school can finish a few days earlier.",
        "The school holidays are the gaps: the autumn break runs from Saturday 10 April to Monday 26 April, the winter break from Saturday 3 July to Sunday 18 July, and the spring break from Saturday 25 September to Sunday 10 October. Private schools can set their own dates.",
      ], ["Autumn: 10 to 26 April", "Winter: 3 to 18 July", "Spring: 25 September to 10 October"], {
        caption: "2027 school terms for state and state-integrated schools, from the Ministry of Education's notice in the New Zealand Gazette, 16 October 2025.",
        head: ["Term", "Starts", "Ends"],
        rows: [
          ["Term 1", "Between Thursday 28 January and Wednesday 3 February", "Friday 9 April"],
          ["Term 2", "Tuesday 27 April", "Friday 2 July"],
          ["Term 3", "Monday 19 July", "Friday 24 September"],
          ["Term 4", "Monday 11 October", "No later than Friday 17 December"],
        ],
      }),
      s("Public holidays and long weekends", [
        "Several 2027 holidays fall on a weekend. Waitangi Day is Saturday 6 February and Anzac Day Saturday 25 April, and each is observed on the Monday for people who would not have worked the Saturday. Christmas Day and Boxing Day fall on Saturday and Sunday, so the observed days are Monday 27 and Tuesday 28 December.",
        "Matariki is Friday 25 June, the Friday before the winter school holidays, and the King's Birthday is Monday 7 June. Labour Day is Monday 25 October, two weeks after term 4 starts, and is the first long weekend of the warm season for many campers.",
      ], ["Waitangi and Anzac move to Monday", "Matariki: Friday 25 June", "Labour Day: Monday 25 October"], {
        caption: "2027 national public holidays, from Employment New Zealand. Read 3 November 2026.",
        head: ["Holiday", "Date", "Long weekend"],
        rows: [
          ["New Year", "Friday 1 January; day after observed Monday 4 January", "Friday to Monday"],
          ["Waitangi Day", "Saturday 6 February, observed Monday 8 February", "Saturday to Monday"],
          ["Easter", "Good Friday 26 March to Easter Monday 29 March", "Four days"],
          ["Anzac Day", "Saturday 25 April, observed Monday 26 April", "Last weekend of the autumn break"],
          ["King's Birthday", "Monday 7 June", "Saturday to Monday"],
          ["Matariki", "Friday 25 June", "Friday to Sunday"],
          ["Labour Day", "Monday 25 October", "Saturday to Monday"],
          ["Christmas and Boxing Day", "Saturday 25 and Sunday 26 December, observed Monday 27 and Tuesday 28 December", "Four days"],
        ],
      }),
      s("Regional anniversary days", [
        "Each region has its own anniversary day, and it brings a long weekend to the campsites within a few hours of that region's towns. Wellington's falls on Monday 25 January and Auckland's and Nelson's on Monday 1 February, a week before the Waitangi weekend, so late January to early February is one long busy stretch in the north.",
        "Otago's anniversary is Monday 22 March and Southland's Tuesday 30 March, the day after Easter Monday, so Southland gets a five-day weekend. Canterbury's anniversary is the Friday of show week, 12 November. Employment New Zealand notes that local dates can differ, so check with the council.",
      ], ["Auckland and Nelson: 1 February", "Southland: five days at Easter", "Canterbury: Friday 12 November"], {
        caption: "2027 regional anniversary days as observed, from Employment New Zealand. Read 3 November 2026.",
        head: ["Region", "Observed"],
        rows: [
          ["Wellington", "Monday 25 January"],
          ["Auckland", "Monday 1 February"],
          ["Nelson", "Monday 1 February"],
          ["Taranaki", "Monday 8 March"],
          ["Otago", "Monday 22 March"],
          ["Southland", "Tuesday 30 March"],
          ["South Canterbury", "Monday 27 September"],
          ["Hawke's Bay", "Friday 22 October"],
          ["Marlborough", "Monday 1 November"],
          ["Canterbury", "Friday 12 November"],
          ["Westland", "Monday 29 November"],
        ],
      }),
      s("What the dates mean for camping", [
        "Easter falls inside term 1 in 2027, so Easter weekend is busy but short, and the autumn school holidays follow two weeks later. The autumn break ends with the Anzac long weekend, which makes Saturday 24 to Monday 26 April one of the busiest weekends of the year at campsites near the cities.",
        "Matariki on Friday 25 June starts a long weekend a week before the winter holidays. Labour Day weekend is often the first warm-season trip, and DOC treats 1 October to 30 April as peak season at the campsites that take bookings in summer.",
      ], ["Easter and autumn break are separate peaks", "Anzac weekend closes the autumn break", "DOC peak season: 1 October to 30 April"]),
      s("When to book", [
        "DOC takes bookings for huts and campsites up to 30 June 2027, so every 2027 date before then is already open. DOC keeps no waitlist and spaces go first come, first served, so book a holiday weekend as soon as you know your dates. Bookings for the next season, from 1 July 2027, open on DOC's site on the dates it announces.",
        "Holiday parks set their own booking windows, peak rates and minimum stays, so check those for Easter and long weekends before you plan a single night.",
      ], ["DOC bookings open to 30 June 2027", "Book holiday weekends early", "Ask about minimum stays"]),
      s("Planning holiday trips in KiwiCamping", [
        "KiwiCamping lists DOC campsites and huts with their fee and whether they take bookings, and holiday parks and tours from BookIt that you can book in the app. When the campsite you want is full for a long weekend, look at the next valley or town on the map and save the alternative to your trip.",
        "Saved campsites keep their details on the phone, so a long weekend in a valley without coverage still has its fees and facilities to hand; the map, directions, weather and photos load again once you have signal.",
      ], ["Find a second campsite fast", "Book holiday parks in the app"], undefined, true),
    ],
    sources: [
      { label: "New Zealand Gazette: 2027 and 2028 school term dates", url: "https://gazette.govt.nz/notice/id/2025-sl5849" },
      { label: "Employment New Zealand: public holidays and anniversary dates", url: "https://www.employment.govt.nz/leave-and-holidays/public-holidays/public-holidays-and-anniversary-dates/" },
      { label: "DOC: Anti Crow Hut and bookings open to 30 June 2027", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/canterbury/places/arthurs-pass-national-park/things-to-do/huts/anti-crow-hut/" },
      { label: "DOC: huts, campsites, Great Walks, cabins and lodges terms and conditions", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/bookings-terms-and-conditions/huts-campsites-cabins-and-lodges-terms-and-conditions/" },
    ],
  }),
  a({
    slug: "road-user-charges-campervan-new-zealand",
    publishAt: "2027-01-05",
    title: "Road User Charges for Campervans in New Zealand 2026-27: Rates and Hire Fees",
    description: "Diesel campervans pay road user charges of $76 per 1,000 km, and hire companies bill about $8 per 100 km. What RUC costs and whether diesel beats petrol.",
    category: "Costs & budget",
    region: "New Zealand",
    places: ["Road user charges", "Diesel campervans", "Hire companies", "NZTA"],
    imageAlt: "A small G.A.S service station at Waikari in North Canterbury, with fuel pumps in front of an orange and white shop",
    related: ["new-zealand-road-trip-fuel-cost-2026", "campervan-hire-cost-new-zealand-2026", "buying-a-campervan-new-zealand-working-holiday", "fuel-price-apps-new-zealand"],
    intro:
      "In New Zealand, diesel vehicles do not pay road tax in the fuel price; they pay road user charges (RUC) by the kilometre instead. For a light diesel vehicle up to 3,500 kg, RUC is $76 per 1,000 km, about 7.6 cents a kilometre, and a hire company bills it at about $8 per 100 km when you return the van. Petrol vehicles pay their road tax at the pump and no RUC. We read the rate tables and the hire companies' terms on 3 November 2026.",
    sections: [
      s("RUC rates for campervans", [
        "RUC is bought in blocks of 1,000 km for a vehicle you own, at a rate set by the vehicle's type and weight. Most campervans are light vehicles, up to 3,500 kg, at $76 per 1,000 km. A bigger motorhome of 3,501 to 6,000 kg pays $82. An administration fee is added to each purchase: $12.44 online or in the NZTA app, and $13.71 at an agent's counter.",
        "Battery electric vehicles pay the same $76 as light diesel, and plug-in petrol hybrids $38. An ordinary petrol or petrol hybrid vehicle pays no RUC. NZTA's own rates page blocks automated reading, so these figures come from a published copy of the rate table effective from 6 August 2026; confirm them on NZTA before you buy.",
      ], ["Light diesel: $76 per 1,000 km", "3.5 to 6 tonnes: $82", "Admin fee: $12.44 online"], {
        caption: "RUC rates for light vehicles per 1,000 km, including GST, effective from 6 August 2026.",
        head: ["Vehicle", "Rate per 1,000 km"],
        rows: [
          ["Light diesel, up to 3,500 kg", "$76"],
          ["Diesel, 3,501 to 6,000 kg (two axles)", "$82"],
          ["Battery electric, up to 3,500 kg", "$76"],
          ["Plug-in petrol hybrid", "$38"],
          ["Petrol or petrol hybrid", "No RUC; tax is in the fuel price"],
        ],
      }),
      s("What hire companies charge", [
        "A hire company buys the RUC for its vans and charges you for the kilometres you drive, usually when you return the van. Maui charges $8.04 per 100 km, or $8.18 for its 4 and 6 berth vehicles with a toilet and shower, and says it is calculated and collected on return. JUCY's rental agreement for bookings from 1 May 2026 sets $8.00 per 100 km. Mighty Campers lists $7.64, or $8.04 for its 4 and 6 berth toilet and shower vehicles.",
        "A 2,000 km trip in a diesel hire van therefore adds about $160 to $165 in RUC to the final bill. Some companies let you prepay it as a daily rate instead; ask which is cheaper for your planned distance, and check the rate in your own agreement, because a company can change it.",
      ], ["Hire RUC: about $8 per 100 km", "Billed when you return the van", "2,000 km: about $160"], {
        caption: "Hire company RUC charges per 100 km, from each company's terms. Read 3 November 2026.",
        head: ["Company", "Standard vans", "4 and 6 berth with toilet and shower"],
        rows: [
          ["Maui", "$8.04", "$8.18"],
          ["JUCY", "$8.00", "$8.00 (one rate for all vans)"],
          ["Mighty Campers", "$7.64", "$8.04"],
        ],
      }),
      s("Is a diesel campervan cheaper than petrol?", [
        "Per litre, diesel is cheaper at the pump because it carries no road tax. MBIE's weekly fuel price monitoring for the week dated 23 October 2026 put regular 91 petrol at $3.61 a litre and diesel at $3.24. RUC then adds back about 7.6 cents a kilometre on your own van, or about 8 cents on a hire van.",
        "At the same consumption, petrol wins: a van using 10 litres per 100 km costs about $36 per 100 km on petrol, and about $32 in diesel plus $8 in RUC, so $40. Diesel only comes out ahead when the diesel van uses clearly less fuel than the petrol one. Compare the real consumption of the two vans, not the pump price.",
      ], ["Same consumption: petrol is cheaper", "Diesel wins only on lower consumption", "Compare litres per 100 km"]),
      s("If you own a diesel campervan", [
        "A van you own must carry a current RUC licence, shown on the windscreen, that covers the distance on its odometer, and you buy the next block before you reach the limit. The licence stays with the vehicle, so unused RUC passes to the next owner when you sell, and you can claim a refund on a vehicle you sell, scrap or export if at least $20 is unused.",
        "When you buy a used diesel van, compare the RUC label against the odometer. If the van has already driven past its licence, you will be buying that distance too.",
      ], ["Keep RUC ahead of the odometer", "Unused RUC goes with the van", "Check the label when you buy"]),
      s("What changes next", [
        "New Zealand did not cut fuel excise or RUC during the 2026 fuel crisis; the Finance Minister ruled out a RUC cut in March 2026. On 31 August 2026 the Government scrapped the fuel excise increase due on 1 January 2027 and delayed the matching RUC increase too, with increases now planned from 1 January 2028.",
        "The Government also plans to move petrol vehicles onto RUC and remove petrol excise. The Land Transport (Revenue) Amendment Bill, introduced in November 2025, starts that change, but no switch-over date for petrol cars has been set, so a petrol campervan still pays its road tax at the pump in 2026-27.",
      ], ["No RUC increase on 1 January 2027", "Petrol cars not on RUC yet", "Rises planned from 2028"]),
      s("Planning distances in KiwiCamping", [
        "KiwiCamping adds up the driving distance between the stops in your trip, so you can estimate the kilometres, and the RUC on a diesel hire van, before you book. Save the campsites and holiday parks where you will stop, and the trip keeps the total.",
        "The distance needs a connection to route, like the map, weather and photos, but each saved place keeps its details on the phone for the stretches with no coverage.",
      ], ["Total your trip distance", "Estimate RUC before you book"], undefined, true),
    ],
    sources: [
      { label: "NZTA: road user charges rates and transaction fees", url: "https://www.nzta.govt.nz/vehicles/road-user-charges/ruc-rates-and-transaction-fees" },
      { label: "Calculate.co.nz: NZ road user charges rates 2026", url: "https://www.calculate.co.nz/reference/nz-road-user-charges.php" },
      { label: "Maui: frequently asked questions", url: "https://www.maui-rentals.com/faqs" },
      { label: "JUCY New Zealand rental agreement, bookings from 1 May 2026", url: "https://cdn.jucy.com/cms/JUCY-New-Zealand-Rental-Agreement-Bookings-Confirmed-or-Amended-on-or-after-1st-May-2026-new.pdf" },
      { label: "Mighty Campers: fees and charges", url: "https://www.mightycampers.com/faqs/fees-and-charges" },
      { label: "MBIE: weekly fuel price monitoring", url: "https://www.mbie.govt.nz/building-and-energy/energy-and-natural-resources/energy-statistics-and-modelling/energy-statistics/weekly-fuel-price-monitoring" },
      { label: "RNZ: Nicola Willis rules out reduction in road user charges", url: "https://www.rnz.co.nz/news/politics/591143/nicola-willis-rules-out-reduction-in-road-user-charges-for-diesel-users" },
      { label: "1News: Government scraps 2027 fuel excise increase", url: "https://www.1news.co.nz/2026/08/31/govt-scraps-2027-fuel-excise-increase-smaller-rises-from-2028/" },
      { label: "Ministry of Transport: road user charges system", url: "https://www.transport.govt.nz/area-of-interest/revenue/road-user-charges-system" },
    ],
  }),
  a({
    slug: "easy-doc-huts-families-first-timers",
    publishAt: "2027-01-06",
    title: "Easy DOC Huts for Families and First-Timers 2026-27: Walk Times and Fees",
    description: "Seven bookable DOC huts two to three and a half hours from the road end, picked by DOC for families and new trampers, with bunks, fees and what to know.",
    category: "Camping guides",
    region: "New Zealand",
    places: ["Atiwhakatu Hut", "Bushline Hut", "Lakehead Hut", "Anti Crow Hut", "Mt Heale Hut"],
    imageAlt: "Atiwhakatu Hut in Tararua Forest Park seen through native bush, with its grey roof among the trees",
    related: ["doc-huts-new-zealand-guide", "doc-hut-rules-etiquette", "doc-hut-great-walk-booked-out", "best-tramping-great-walks-apps-new-zealand"],
    intro:
      "No DOC backcountry hut has a car park at its door, but several are an easy walk of two to three and a half hours from the road end and can be booked, so everyone has a bunk when they arrive. DOC's own list for families and first-time trampers names seven: Lane Cove, Mt Heale, Atiwhakatu, Haurangi, Lakehead, Bushline and Anti Crow. Adults pay $15 a night at the standard huts and $25 to $34 at the serviced ones, and children under five stay free. We read each hut's DOC page on 3 November 2026.",
    sections: [
      s("Seven easy bookable huts", [
        "DOC published this list as first-hut options for inexperienced trampers and family groups. Every hut on it must be booked online before you go, and bookings are open for stays up to 30 June 2027. The walk times are one way from the road end, at an easy family pace.",
        "Check the notes before you choose. Atiwhakatu has a high wire swing bridge for one person at a time and a slip to scramble across, Anti Crow needs a crossing of Jordan Stream that you must not attempt in high water, and Bushline sits on the bushline at 1,280 m, where snow and ice make winter access hard.",
      ], ["Book every one before you go", "One-way walks of 2 to 3.5 hours", "Read each hut's warnings"], {
        caption: "DOC's easy-access bookable huts for families and new trampers, with walk times from DOC's list and fees from each hut's page. Read 3 November 2026.",
        head: ["Hut and region", "Walk from road end", "Bunks", "Adult fee per night"],
        rows: [
          ["Lane Cove Hut, Whangaroa, Northland", "2 hr, or by water", "16", "$25 to $34"],
          ["Mt Heale Hut, Great Barrier Island", "3.5 hr", "20", "$25 to $34"],
          ["Atiwhakatu Hut, Tararua Forest Park", "3 hr", "26", "$15"],
          ["Haurangi Hut, Remutaka Forest Park", "3 hr", "10, whole hut", "$127 to $229 for the hut"],
          ["Lakehead Hut, Nelson Lakes", "3 hr, or water taxi", "26", "$25 to $34"],
          ["Bushline Hut, Nelson Lakes", "2.5 hr", "14", "$25 to $34"],
          ["Anti Crow Hut, Arthur's Pass", "3 hr", "8", "$15"],
        ],
      }),
      s("What the fees cover", [
        "Atiwhakatu and Anti Crow are standard huts at $15 a night for an adult, $7.50 for a youth of 5 to 17, and free for children under five. Atiwhakatu also accepts the Backcountry Hut Pass. The serviced huts, Lane Cove, Mt Heale, Lakehead and Bushline, cost $25 a night for an adult from May to September, $28 on weekdays and $32 at weekends from October to April, and $29 and $34 from December to February.",
        "Haurangi Hut is booked as a whole hut for up to 10 people: $127 a night from May to September, rising to $200 on weekdays and $229 at weekends from December to February. It is locked, and the access code comes with your booking. Backcountry Hut Passes and tickets cannot be used there.",
      ], ["Standard huts: $15 an adult", "Serviced huts: $25 to $34", "Under fives stay free"]),
      s("Which hut for which trip", [
        "For the shortest walk, Lane Cove can be reached by water as well as on foot, and Lakehead by water taxi across Lake Rotoiti, which suits young children. Bushline gives the biggest view for the effort, over Lake Rotoiti and the St Arnaud Range, and is 2 hours 30 minutes from Mount Robert Road.",
        "Atiwhakatu, three hours from the Mt Holdsworth road end near Masterton, is the easiest from Wellington, with 26 bunks and heating. DOC recommends it from October to April. Anti Crow, a 7 km walk up a flat valley from the road end in Arthur's Pass, was renovated in 2025 and is DOC's suggestion for a first family tramp from Christchurch.",
      ], ["By water: Lane Cove and Lakehead", "From Wellington: Atiwhakatu", "From Christchurch: Anti Crow"]),
      s("What to bring", [
        "Serviced huts have mattresses, water and toilets, and some have heating, but not all supply cooking gas: at Lane Cove DOC says to bring a portable stove, food, cooking utensils and a sleeping bag. Lakehead has no firewood supplied from May to September. Boil or treat the water where DOC says to.",
        "Check the weather and DOC's alerts the day before. DOC says it is easy to cancel or change a booking if conditions are not right, and a booking cancelled 15 or more days ahead costs 10% of the booking.",
      ], ["Bring a stove where gas is not supplied", "Check alerts the day before", "Cancel early if the weather turns"]),
      s("Huts you can walk to without booking", [
        "Most of DOC's more than 900 huts work on a first come, first served basis and cannot be booked. They suit a family that starts early and carries a tent in case the hut is full. From 1 November 2026, the hut tickets for these huts are sold through DOC's online booking system, so you can buy them before you go.",
        "If a bookable hut is full on your dates, our guide to booked-out huts and Great Walks covers how cancellations come back on sale.",
      ], ["First come, first served huts need a tent", "Hut tickets now sold online"]),
      s("Finding huts in KiwiCamping", [
        "KiwiCamping lists DOC huts with their category, fee and whether they take bookings, so you can find an easy bookable hut near your route, or the campsite at its road end, and save both to your trip.",
        "Book the hut itself on DOC's site, because KiwiCamping does not show live hut availability. Each hut you save keeps its details on your phone at the road end, where coverage often stops; the map, directions, weather and photos need it.",
      ], ["See which huts take bookings", "Save the road-end campsite too"], undefined, true),
    ],
    sources: [
      { label: "DOC: easy access bookable huts (Anti Crow Hut release, 30 July 2025)", url: "https://www.doc.govt.nz/news/media-releases/2025-media-releases/doc-reveals-dream-makeover-of-rat-infested-hut/" },
      { label: "DOC: Lane Cove Hut", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/northland/places/whangaroa-area/things-to-do/lane-cove-hut/" },
      { label: "DOC: Mt Heale Hut", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/auckland/places/great-barrier-island-aotea/things-to-do/mt-heale-hut/" },
      { label: "DOC: Atiwhakatu Hut", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/wellington-kapiti/places/tararua-forest-park/things-to-do/huts/atiwhakatu-hut/" },
      { label: "DOC: Haurangi Hut", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/wellington-kapiti/places/remutaka-forest-park/things-to-do/huts/haurangi-hut/" },
      { label: "DOC: Lakehead Hut", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/nelson-tasman/places/nelson-lakes-national-park/things-to-do/huts/lakehead-hut/" },
      { label: "DOC: Bushline Hut", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/nelson-tasman/places/nelson-lakes-national-park/things-to-do/huts/bushline-hut/" },
      { label: "DOC: Anti Crow Hut", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/canterbury/places/arthurs-pass-national-park/things-to-do/huts/anti-crow-hut/" },
      { label: "DOC: huts, campsites, Great Walks, cabins and lodges terms and conditions", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/bookings-terms-and-conditions/huts-campsites-cabins-and-lodges-terms-and-conditions/" },
    ],
  }),

  a({
    slug: "doc-campsite-pass-new-zealand",
    hubs: ["camping"],
    officialLink: { domain: "doc.govt.nz", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/booking-and-paying/campsite-pass/" },
    title: "DOC Campsite Pass 2026-27: Is It Worth $295, and Where It Doesn't Work",
    description: "The DOC Campsite Pass costs $295 for an adult for a year. How many nights it takes to pay off, the campsites and summer dates it excludes, and how to use it at bookable sites.",
    category: "Camping guides",
    region: "New Zealand",
    places: ["Tōtaranui", "Pelorus Bridge", "Momorangi Bay", "Kerr Bay", "Peel Forest"],
    imageAlt: "A motorhome parked on the grass at Momorangi Bay campsite beside the blue water of Queen Charlotte Sound",
    related: ["doc-campsites-new-zealand-guide", "camping-fees-new-zealand-2026", "freedom-camping-rules-new-zealand"],
    intro:
      "The Department of Conservation's Campsite Pass is a single payment that covers your nights at most DOC campsites for a year: $295 for an adult, half that for a child or youth, and free for infants. It is good value for a long trip built around DOC campsites and poor value for almost anyone else, and it has rules that catch people out, from booking still being required to a list of popular campsites it does not cover over summer. The prices, limits and exclusions below are from DOC's Campsite Pass pages, read on 9 November 2026.",
    sections: [
      s("What the Campsite Pass is", [
        "The Campsite Pass is a way of paying, not a reservation. It covers the nightly fee at DOC conservation campsites, both the ones you book online and the self-registration ones you pay for on arrival, for 365 nights from a start date you choose. It does not hold a pitch anywhere, and it does not cover huts: those have their own Backcountry Hut Pass and hut tickets.",
        "Each person needs their own pass. A couple pays $590 for two adult passes, and a family of two adults and two children aged 5 to 17 pays $885, with children under five free. Some membership organisations get a discount; DOC asks members to email a scan of the membership card to bookings@doc.govt.nz before buying, so the discount is on the account when they pay.",
      ], ["A payment, not a booking", "One pass per person", "Huts need a separate pass"], {
        caption: "DOC Campsite Pass prices, read 9 November 2026. One year (365 nights) from the start date you choose.",
        head: ["Age group", "Price"],
        rows: [
          ["Adult, 18 and over", "$295.00"],
          ["Child or youth, 5 to 17", "$147.50"],
          ["Infant, 0 to 4", "Free"],
        ],
      }),
      s("How many nights before the pass pays for itself", [
        "DOC campsite fees are per person per night, and they vary a lot. Serviced campsites with flush toilets and hot showers charge around $25 an adult, standard campsites roughly $10 to $20, and basic campsites are free. In KiwiCamping's DOC data from August 2026, 63 of the 287 DOC campsites listed no fee, and the middle adult rate among the paid ones was $12.75.",
        "So the break-even depends on where you stay. At serviced campsites the pass pays off on the twelfth night. At a typical standard campsite it takes 20 to 24 nights, and if most of your nights are at $10 sites or free basic ones it may never pay. Add up the actual campsites on your route before you buy, not the most expensive one you can think of.",
      ], ["Serviced sites: 12 nights to break even", "Standard sites: 20 nights or more", "Free basic sites need no pass at all"], {
        caption: "Adult pass at $295. Nights at one nightly adult fee before the pass costs less than paying each night.",
        head: ["Adult fee per night", "Nights to break even"],
        rows: [
          ["$25 (serviced campsite)", "12"],
          ["$20", "15"],
          ["$15", "20"],
          ["$12.75 (middle paid rate)", "24"],
          ["$10", "30"],
        ],
      }),
      s("Who should buy one, and who should not", [
        "The pass suits long, slow trips where DOC campsites are the default: a working holiday spent moving between jobs, a retired couple touring for a few months, or a summer of weekends away from one home base. It suits families especially, because children's passes are half price and infants are free while the adult fee is the expensive part of every night.",
        "Skip it if most of your nights will be at holiday parks or private campgrounds, which DOC does not run, or freedom camping in a self-contained vehicle, which costs nothing anyway. Skip it for a Great Walk too: every Great Walk campsite is excluded and booked separately. And for a two-week campervan holiday, the numbers rarely work unless almost every night is at a serviced DOC campsite.",
      ], ["Best for long trips and families", "Not for Great Walks", "Not for holiday parks"]),
      s("The campsites and dates the pass does not cover", [
        "DOC excludes all Great Walk campsites, every cabin, cottage, bach, lodge and bunkhouse at a campground, campsites closed for maintenance, and seasonal campsites outside their open season. On top of that comes a list of individual campsites, and it includes several of the country's most popular. Five are excluded from 26 December to 8 February, exactly when most people want them, and Kerr Bay at Lake Rotoiti is excluded from 19 October to 30 April.",
        "Others are excluded all year, including Kapowairua (Spirits Bay), Rarawa Beach and Tapotupotu in the Far North, Wentworth Valley on the Coromandel, Dickey Flat and Hot Water Beach (Tarawera) in the Bay of Plenty, the DOC-run campgrounds at Lake Waikaremoana and Whakapapa, several East Coast campsites, and Twelve Mile Delta near Queenstown. DOC says it can change the list without notice, so check its exclusions page before you plan a trip around the pass.",
      ], ["Peak summer is excluded at five favourites", "Check the exclusions page before you buy", "Cabins and bunkhouses are never covered"], {
        caption: "DOC Campsite Pass exclusions with dates, read 9 November 2026. DOC's page also lists campsites excluded all year.",
        head: ["Campsite", "Region", "Excluded"],
        rows: [
          ["Trounson Kauri Park", "Northland", "26 December to 8 February"],
          ["Tōtaranui", "Nelson Tasman", "26 December to 8 February"],
          ["Momorangi Bay", "Marlborough", "26 December to 8 February"],
          ["Pelorus Bridge", "Marlborough", "26 December to 8 February"],
          ["Peel Forest", "Canterbury", "26 December to 8 February"],
          ["Kerr Bay", "Nelson Lakes", "19 October to 30 April"],
        ],
      }),
      s("How to buy the pass", [
        "Buy it in DOC's online booking system: log in or create an account, choose Passes from the menu, select the Campsite Pass and pick the first night you want to use it. That night is the start of the 365. You can buy up to one month before that first night, and DOC emails a proof of purchase with the pass as a PDF. If you cannot buy online, call or email a DOC visitor centre.",
        "Pick the start date carefully, because it cannot be changed. DOC refunds a pass only within 48 hours of buying it, and only if you have not yet made a booking with it and the start date has not arrived. After that it is non-refundable, so if your arrival date is uncertain, wait until it is settled before you buy.",
      ], ["Start date cannot be changed", "Refund only within 48 hours", "Buy up to a month ahead"]),
      s("Using the pass at bookable campsites", [
        "A pass does not let you turn up unannounced at a bookable campsite. You still book online before you arrive, entering each pass holder's name and pass number; the booking then totals $0, except at powered sites, which charge $3 per pass holder per night. Turn up without a booking and DOC charges a $10 booking fee, and you can be turned away if the campsite is full.",
        "Bring the booking confirmation and a copy of the pass, printed or on your phone. At popular campsites in summer the booking is the scarce part, not the money, so book early even though the pass has already paid for the night. Anyone in your group without a pass is booked and paid for at the normal rate in the same booking.",
      ], ["Book first, even with a pass", "$3 a night per person at powered sites", "Carry the confirmation and the pass"]),
      s("Using it at self-registration campsites", [
        "Non-bookable campsites are first come, first served, and the pass gives you no priority over anyone else. On arrival, fill in the self-registration envelope or form as normal, note the pass, and pay only for anyone in your party who is not covered by one.",
        "A ranger can ask to see proof of the pass and identification, so keep both handy. Many self-registration campsites are standard or basic sites where the fee is low, which is part of why the pass takes longer to pay off for travellers who prefer the quieter, simpler campsites.",
      ]),
      s("The seven-night rule and longer stays", [
        "The pass covers no more than seven nights in any 30-day period at a single campsite. If you want to stay longer, the extra nights are charged at the campsite's standard rate as a separate transaction, up to that campsite's own maximum stay. The rule stops the pass from turning one campsite into a year-round base.",
        "For most travellers it never matters, because a week in one place is already a long stay on a road trip. It matters for seasonal workers who want to camp near an orchard or vineyard for a whole season: plan to move between two or three campsites, or budget for paying full price after the first week.",
      ], ["Seven nights in 30 days per campsite", "Extra nights at the standard rate", "Move between campsites on long stays"]),
      s("Working out your own numbers in KiwiCamping", [
        "KiwiCamping, the app we make, lists DOC's campsites with the adult fee, the booking requirement and the dog rules DOC publishes, and links to DOC's own page for each one. Filter by cost to see the free and cheap DOC campsites along your route, save the ones you want, then build them into a trip with dates and see how many nights are at paid DOC campsites.",
        "That count is the honest test of whether the Campsite Pass pays. KiwiCamping runs on iPhone only (iOS 26 or later), and it does not sell or check DOC passes or bookings: you still buy the pass and book bookable campsites with DOC. Our guide to DOC campsites covers booking, fees and what each campsite type offers.",
      ], ["DOC's fees and booking rules per campsite", "Count your paid DOC nights", "Book and buy the pass with DOC"], undefined, true),
    ],
    sources: [
      { label: "DOC: Campsite Pass", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/booking-and-paying/campsite-pass/" },
      { label: "DOC: Campsite Pass exclusions", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/booking-and-paying/campsite-pass/campsite-pass-exclusions/" },
      { label: "DOC: Campsite Pass terms and conditions", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/bookings-terms-and-conditions/campsite-pass-terms-and-conditions/" },
      { label: "DOC online bookings", url: "https://bookings.doc.govt.nz/" },
      { label: "DOC: campsite categories and fees", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/" },
    ],
  }),
];
