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
      "New Year's Eve is when New Zealand's beach towns fill, councils switch on their summer liquor bans, and festival campsites open for a few nights only. The rules differ by town, and a sealed bottle in the wrong car park can cost you a fine and your drink. This guide sets out what councils, Police and the festivals themselves publish for 2026-27: the alcohol bans, the freedom camping limits, how booking works and what each event allows in its campsite. We read each official page on 21 October 2026, and where a council publishes nothing we say so.",
    sections: [
      s("What a liquor ban means for a camper", [
        "Under the Local Government Act 2002, a council can make a bylaw banning the consumption, bringing in or possession of alcohol in public places, for specified periods. A constable can search a container or a vehicle in or entering a ban area without a warrant, seize the alcohol and arrest a person committing an offence. Tauranga City Council says a breach is an offence that may bring a $250 infringement fine, and that drinking in its New Year zones, including inside vehicles, brings confiscation and on-the-spot fines.",
        "Each bylaw has its own map, dates and exceptions, so read the council's map for the town you are in. Some bylaws exempt people drinking inside a certified self-contained vehicle, and some do not. The drink-driving limit is a separate rule: Police say it is 250 micrograms of alcohol per litre of breath for drivers aged 20 and over, and zero for drivers under 20.",
      ], ["Check the town's map, not just the dates", "A parked vehicle can be inside the ban area", "Drivers under 20 have a zero limit"]),
      s("Summer alcohol bans in the popular camping towns", [
        "These are the arrangements the councils publish, checked on 21 October 2026. The council's own maps decide which streets, beaches and reserves are covered, and councils can add temporary bans with notice. Thames-Coromandel says it gives at least 7 days' notice of any temporary ban, and had announced none for New Year 2026-27 when we checked.",
        "Thames-Coromandel's bylaw lets people in a certified self-contained vehicle drink inside it at a designated freedom camping area, within the number of occupants on the vehicle's certificate. Taupō allows drinking in lawfully parked certified self-contained vehicles in most of its ban areas, but not at Hipapatua Reserve (Reid's Farm), where all vehicles are covered by the ban. Tauranga states no camper exemption.",
      ], ["Thames-Coromandel: 4pm 23 December to 4pm 6 January", "Tauranga: New Year extension to 6am 6 January", "Raglan: 23 December to 10 February"], {
        caption: "Summer and New Year alcohol bans from each council's published bylaw or page, checked 21 October 2026.",
        head: ["Town and council", "Ban dates and areas", "Campers"],
        rows: [
          ["Whangamata, Whitianga, Pauanui, Tairua, Hahei (Thames-Coromandel)", "4pm on 23 December to 4pm on 6 January in the mapped areas, plus permanent bans in mapped areas at all times", "Drinking inside a certified self-contained vehicle at a designated freedom camping area is exempt within the certificate's occupant number"],
          ["Mount Maunganui and Papamoa (Tauranga)", "Permanent bans include Mount Maunganui's main beach, excluding Pilot Bay; the New Year period, 26 December to 6am on 6 January, extends the Mount Maunganui and Papamoa areas", "The council says drinking in zones counts inside vehicles too; $250 infringement fine"],
          ["Wānaka (Queenstown Lakes)", "Alcohol-free areas from 6pm to 6am every day, and from 6am on 25 December to 6am on 6 January, per the council's map dated September 2023", "Check the council's current map"],
          ["Raglan (Waikato District)", "Seasonal ban from 23 December to 10 February, extended from 3 September 2025", "A new exception lets people in self-contained vehicles drink with restrictions, except on James Street"],
          ["Taupō, Tūrangi and the lakefront (Taupō District)", "From 12 noon on 27 December to 7am on 4 January in the town centres, lakefront reserves and Hipapatua Reserve", "Alcohol cannot be drunk in vehicles in the areas, except in lawfully parked certified self-contained vehicles outside Hipapatua Reserve"],
          ["Kaikōura (Kaikōura District)", "Permanent bans at all times in mapped central areas, including camp areas inside them; no New Year-specific ban in the bylaw", "Consuming alcohol in a vehicle in a public place in the ban areas is banned"],
        ],
      }),
      s("Freedom camping over New Year", [
        "Freedom camping on council land needs a certified self-contained vehicle almost everywhere here, and since 7 June 2026 that means a green warrant, as our guide to the green warrant explains. Thames-Coromandel's freedom camping bylaw requires a self-contained vehicle, allows only two consecutive nights in an area, and allows freedom camping only between 5pm and 9am; tents are not allowed. Tauranga allows two nights per calendar month in any one location, and its 25 reserves all have limits on spaces and days.",
        "Raglan banned freedom camping along James Street from 22 December 2025 after 165 submissions, citing alcohol, noise and overcrowding. Taupō allows certified self-contained vehicles on council land other than its reserves and Ferry Road, for a maximum of three nights and/or four days, and says you could receive a $400 fine. Kaikōura allows one night in the same spot, or within 500 metres of it, in any four-week period at designated sites only. In Akaroa, all council land in the township is prohibited except the marked spaces in the Akaroa Freedom Camping Area, where certified self-contained vehicles can stay up to two nights in any 30-day period.",
      ], ["Green warrant needed in self-contained-only areas", "Raglan: no freedom camping on James Street", "Thames-Coromandel: 5pm to 9am only"]),
      s("Mount Maunganui and the Mauao landslide", [
        "Tauranga City Council says the Mount Maunganui Beachside Holiday Park has been closed until further notice since the Mauao landslide of 22 January 2026, with no forward bookings, no waitlist and no timeframe for reopening. The council says the site remains within a high-risk zone and is unsafe, and that Mauao and the track around its base are closed.",
        "The council also says Mount Maunganui is largely open, with restrictions applying to Mauao and the surrounding affected areas. We found no 2026-27 New Year arrangements published for the town yet, so check the council's notices before you plan around fireworks, fencing or event closures.",
      ], ["The Beachside Holiday Park is closed", "Mauao is closed", "Check the council's New Year notices"]),
      s("Booking a bed for New Year", [
        "We found no official page describing a Christmas or New Year ballot for the holiday parks and domain camps we checked, and no official holiday park demand figure for summer 2026-27. What operators publish is their terms: Tasman Holiday Parks' summer 2026/27 terms say cancellations are permitted until 1 December 2026 with a full refund and that from 1 December 2026 bookings become strictly non-refundable and non-amendable, and that peak stays may have minimum nights and set arrival days. The same page carries other rebooking terms, so read the terms that apply to your booking.",
        "Kaiteriteri Recreation Reserve says December to February are its busiest months by far and that no pets are allowed. At DOC's Tōtaranui campground, DOC's camp rules say that on New Year's Eve campers can celebrate within reason, that fireworks are not allowed and that excessive noise will not be tolerated, especially after 10 pm. Our Christmas and summer guide covers DOC's booking rules and peak fees.",
      ], ["Read the cancellation terms before paying", "Ask the park about minimum nights", "No fireworks at Tōtaranui"]),
      s("Festival campsites: Rhythm and Alps, Northern Bass and Rhythm and Vines", [
        "Festival camping is a different product from a campsite: you need the event's ticket and camping pass, you follow its rules, and the events say they do not refund for weather. All three events below are strictly R18 and say they do not allow glass. Their official pages show the 2026 editions, and tickets and camping passes can sell out, so check each event's site rather than a price here.",
        "Rhythm and Vines says this year's festival, on 28 to 31 December 2026, is the final edition at Waiohika Estate in Gisborne, and that it moves to an undisclosed location in 2027. Rhythm and Alps runs on 30 and 31 December at Robrosa Station in the Cardrona Valley near Wānaka, and Northern Bass runs on 30 and 31 December at Kaiwaka, just over an hour north of Auckland.",
      ], ["R18 only, with ID", "No refunds for weather", "Check each event's site for availability"], {
        caption: "Camping rules from each event's official ticket pages and terms, checked 21 October 2026.",
        head: ["Event", "Dates and place", "Camping rules"],
        rows: [
          ["Rhythm and Alps", "30 and 31 December 2026, Robrosa Station, Cardrona Valley near Wānaka", "General admission plus a camping pass per person; Roadie Camp is for self-contained vehicles and rooftop tents only; tents limited to 10 m2; no gas cooking on site; no camping in cars or station wagons; strictly no BYO alcohol"],
          ["Northern Bass", "30 and 31 December 2026, Kaiwaka", "No camping if you attend on 30 December only; tents under 3 m by 3 m; campervan area for vehicles no longer than 6 m and no wider than 3 m with a valid pass; no camping in any other vehicle on site, including the car park; no parking on the road outside"],
          ["Rhythm and Vines", "28 to 31 December 2026, Waiohika Estate, Gisborne", "Camping is bundled into a four-night camping and festival pass; day ticket holders cannot camp; no fire, naked flame or BBQs; no refunds, including for adverse weather"],
        ],
      }),
      s("Beaches, fire and the road", [
        "Surf Life Saving New Zealand says the patrol season runs from late October to April, that you should swim between the red and yellow flags, and that you can check patrol hours at Safeswim.org.nz and call 111 in an emergency. It also says most serious incidents happen outside patrol hours and flagged areas.",
        "Fires and fireworks are banned at many summer campsites: DOC bans open fires and fireworks at the northern Coromandel and Kauaeranga campgrounds and at Tōtaranui. Check the fire season for your area on checkitsalright.nz, and read our fire rules guide before you cook.",
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
      { label: "Safeswim", url: "https://safeswim.org.nz/" },
      { label: "DOC: northern Coromandel campground rules", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/coromandel/places/northern-coromandel/northern-coromandel-campground-rules/" },
    ],
  }),
];
