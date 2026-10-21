import { makeArticle as a, type Article, type ArticleSection, type ArticleTable } from "@/lib/article-model";

const s = (heading: string, body: string[], tips?: string[], table?: ArticleTable, cta?: boolean): ArticleSection => ({ heading, body, tips, ...(table && { table }), ...(cta && { cta }) });

/**
 * Great Walks guides. Every date, count and fee is read from the DOC page named in `sources` on 21
 * October 2026 (docs/growth/freedom-council/great-walks-facts.md), and each guide says plainly where
 * DOC publishes nothing. Booking mechanics live in the DOC guides; these pages link to them.
 */
export const greatWalksArticles: Article[] = [
  a({
    slug: "nz-great-walks-2026-27-huts-campsites-booking-fees",
    publishAt: "2026-11-21",
    title: "NZ Great Walks 2026/27: Huts, Campsites, Booking Dates and Fees",
    description: "All 11 Great Walks side by side: which have campsites, which are booked all year, when 2026/27 bookings opened, the hut and campsite fees for New Zealanders and visitors, and what changed this season.",
    category: "Camping guides",
    region: "New Zealand",
    places: ["Abel Tasman", "Routeburn", "Kepler", "Milford", "Tongariro Northern Circuit", "Heaphy"],
    imageAlt: "A forested valley on the Milford Track with steep rock walls and snow-dusted peaks at its head",
    related: ["doc-campsites-new-zealand-guide", "doc-huts-new-zealand-guide", "christmas-summer-camping-new-zealand-2026-27", "best-tramping-great-walks-apps-new-zealand"],
    intro:
      "DOC lists 11 Great Walks. Ten are booked in DOC's own booking system, and the Hump Ridge Track is booked through its own trust. For 2026/27, bookings opened between 12 and 21 May 2026 for stays from 1 July 2026 to 30 June 2027, and DOC had not published the 2027/28 opening dates when this page was checked on 21 October 2026. This page puts the walks side by side so you can see which ones have campsites, what they cost and what is different this season; the booking steps themselves are in the DOC bookings guide.",
    sections: [
      s("The 11 Great Walks at a glance", [
        "DOC's comparison page gives each walk's length and usual time, and the track pages give the huts and campsites. Counts are DOC's own wording on its track pages, and two of them do not agree with the names listed beside them: the Heaphy page says nine campsites but names ten places, and the Lake Waikaremoana page says five campsites but names four. Where DOC's count and its list differ, check the live page before you plan around the number.",
        "Two walks have no camping at all. DOC says camping is not permitted on the Milford Track, and that there are no campsites on the Paparoa Track. Every other DOC-booked walk below has at least two campsites, and DOC says campers cannot use hut facilities on the walks where its page states a rule.",
      ], ["Milford and Paparoa have no camping", "Check DOC's list when its count and names differ", "Campers cannot use the huts' facilities"], {
        caption: "Length and time from DOC's Great Walks comparison page; huts, campsites and booking rules from each DOC track page, read 21 October 2026.",
        head: ["Walk", "Length and time", "Huts and campsites", "When you must book", "2026/27 bookings opened"],
        rows: [
          ["Abel Tasman Coast Track", "60 km, 3 to 5 days", "4 huts, 18 campsites", "All year", "Thursday 14 May"],
          ["Heaphy Track", "78.4 km, 2 to 6 days", "6 huts, 9 campsites (DOC's count)", "All year", "Wednesday 20 May"],
          ["Kepler Track", "60 km, 3 to 4 days", "3 huts, 2 campsites", "Great Walks season, 27 October 2026 to 30 April 2027", "Tuesday 19 May"],
          ["Lake Waikaremoana", "46 km, 3 to 4 days", "4 huts, 5 campsites (DOC's count); Whanganui Hut is closed", "All year", "Wednesday 20 May"],
          ["Milford Track", "53.5 km, 4 days, one direction only", "3 huts, no camping", "Great Walks season, 1 November 2026 to 30 April 2027", "Wednesday 13 May"],
          ["Paparoa Track", "55 km, 2 to 3 days", "3 huts, no campsites", "Huts must be booked; DOC states no season dates", "Tuesday 12 May"],
          ["Rakiura Track", "32 km, 3 days", "2 huts, 3 campsites", "All year", "Thursday 21 May"],
          ["Routeburn Track", "32 km, 2 to 4 days", "3 huts, 2 campsites", "Great Walks season, 1 November 2026 to 30 April 2027", "Friday 15 May"],
          ["Tongariro Northern Circuit", "43 km, 3 to 4 days on DOC's comparison page; 35.5 km on the 2026/27 track page", "3 huts, each with a campsite", "All year for huts and campsites", "Thursday 21 May"],
          ["Whanganui Journey", "145 km by canoe or kayak, 3 to 5 days", "Huts, a bunkroom and campsites along the river", "Great Walks season, from 1 October", "Wednesday 20 May"],
          ["Hump Ridge Track", "60 km, 3 days", "Booked through the Hump Ridge Track Trust, not DOC", "Through the trust", "Not in DOC's system"],
        ],
      }),
      s("When 2026/27 bookings opened and what DOC has said about next year", [
        "DOC opened Great Walk bookings at 9:30 am on set days in May 2026, for stays between 1 July 2026 and 30 June 2027: the Paparoa Track on Tuesday 12 May, Milford on Wednesday 13 May, Abel Tasman on Thursday 14 May, Routeburn on Friday 15 May, Kepler on Tuesday 19 May, the Heaphy, Whanganui Journey and Lake Waikaremoana on Wednesday 20 May, and the Tongariro Northern Circuit and Rakiura Track on Thursday 21 May. DOC's release says its upgraded booking system includes a virtual queue to manage peak demand, and that the Hump Ridge Track is booked separately and can be reserved up to two years ahead.",
        "DOC's 2026/27 release says nothing about the 2027/28 season. It has not published opening dates for it, so any date you see for next May is a guess until DOC announces it. DOC also says all bookings are first come, first served, and that it keeps no waiting lists for facilities that are already booked out. The practical step is to have your DOC booking account set up and tested before the next opening day; the DOC bookings guide covers that and the cancellation rules.",
      ], ["Bookings open at 9:30 am on the day", "2027/28 dates are not published", "No waiting lists for booked-out nights"]),
      s("Fees per night for 2026/27", [
        "DOC charges per person per night, and most Great Walks have one price for New Zealanders and a higher one for international visitors. DOC says staff carry out random checks at visitor centres and huts to make sure people have paid the correct fee. DOC's pricing page sets child fees at half the adult fee, for New Zealand children aged 5 to 17 and international children aged 0 to 17.",
        "The table shows the summer rate from DOC's Great Walks pricing page. The summer season runs from October to April on that page, but the season start differs by walk (Routeburn and Milford from 1 November, Tongariro from 23 October), and outside summer the rates are lower on most walks. DOC states there are no price changes to Great Walk huts for 2026/27. The Paparoa Track prices each hut separately.",
      ], ["International visitors pay about 50% more on most walks", "Lake Waikaremoana and Whanganui charge everyone the same", "Summer rates are the peak ones"], {
        caption: "Adult fee per person per night, summer rate, NZ dollars including GST, from DOC's Great Walks pricing page read 21 October 2026. Campsites: Milford and Paparoa have none.",
        head: ["Walk", "Hut, New Zealand adult", "Hut, international adult", "Campsite, New Zealand adult", "Campsite, international adult"],
        rows: [
          ["Abel Tasman Coast Track", "$55", "$84", "$21", "$31"],
          ["Heaphy Track", "$44", "$66", "$19", "$28"],
          ["Kepler Track", "$88", "$132", "$28", "$42"],
          ["Lake Waikaremoana", "$35", "$35", "$19", "$19"],
          ["Milford Track", "$106", "$152", "No camping", "No camping"],
          ["Paparoa Track", "$50 Ces Clark, $78 Moonlight Tops, $61 Pororari", "$76, $117, $92", "No campsites", "No campsites"],
          ["Rakiura Track", "$44", "$66", "$19", "$28"],
          ["Routeburn Track", "$88", "$132", "$28", "$42"],
          ["Tongariro Northern Circuit", "$44", "$66", "$19", "$28"],
          ["Whanganui Journey", "$35", "$35", "$19", "$19"],
        ],
      }),
      s("Proof of residency, changes and cancellations", [
        "To pay the New Zealand rate you have to be able to show you are eligible. DOC's Great Walks terms say New Zealand citizens and people ordinarily resident in New Zealand are eligible, and that accepted proof includes a scan or photocopy of a passport or birth certificate, your New Zealand driver licence or a utility invoice with your name and address. If anyone in the party claims the rate and cannot show eligibility, the booking is invalid, and DOC says you pay the difference plus a $50 administration fee per person to validate it.",
        "The cancellation fee depends on how close to arrival you cancel, counted from your first night. DOC charges nothing on the day you book, and nothing on the next day if arrival is more than two days away. It then charges 10% from 48 hours after booking up to 15 days before arrival, 50% from 14 to 4 days before, 75% from 3 days to the day before, and 100% on the day before, the day of or after arrival. Transfers are allowed within the same booking season but not to a different hut or campsite, and service and modification fees are not refundable.",
      ], ["Carry your proof of residency", "Cancellation fees count from your first night", "Transfers stay within the season"]),
      s("Camping on a Great Walk", [
        "A Great Walk campsite is a booked pitch at a named site, and DOC says to camp only at the site you booked. The Abel Tasman page adds that there is strictly no freedom camping, that hammocks are not permitted at its campsites and that you can stay a maximum of two nights at one hut or campsite from 1 October to 30 April, or five nights from 1 May to 30 September. The Great Walk campsite at Tōtaranui can be booked for one night all year. Rakiura is capped at two nights at each hut or campsite.",
        "The Freedom Camping Act defines freedom camping as camping within 200 metres of a formed road or a Great Walks track, among other places, and DOC says freedom camping is generally not permitted near Great Walks tracks. A DOC Campsite Pass cannot be used at Great Walk campsites. The guides to DOC campsites and DOC huts cover the rest of the DOC network, and Great Walk campsites are booked in DOC's booking system.",
      ], ["Camp only at the site you booked", "No freedom camping near the track", "A Campsite Pass does not cover Great Walk campsites"]),
      s("When the walks fill, and which ones have space", [
        "DOC does not publish which dates are booked out; availability only shows in the booking system. What DOC has published is how last summer went: many Great Walks huts reached or were close to capacity in the peak season, with Milford Track and Abel Tasman Coast Track huts both reaching around 95 per cent occupancy and the Kepler Track at 91 per cent. DOC also says about 60% of last season's Great Walk hut bookings were made by New Zealanders.",
        "DOC's advice for a booked-out first choice is not to give up: it says tracks such as the Heaphy, Lake Waikaremoana and the Whanganui Journey often have space, and that while huts were often full, many campsites still had good availability for people willing to look at alternatives. If you are camping rather than staying in a hut, the campsite availability in the booking system can show space on a walk whose huts are full, though Milford and Paparoa have no campsites to fall back on.",
      ], ["Milford, Abel Tasman and Kepler fill first", "Heaphy, Waikaremoana and Whanganui often have space", "Look at campsites when huts are full"]),
      s("What is different this season", [
        "The Tongariro Northern Circuit has the biggest change. DOC's 4 September 2026 release says the full circuit will run as a loop this summer once the Mangatepopo Track reopens in mid-December, and that the new Oturere Hut and its campsite open for bookings from 18 December 2026 after construction fell behind. DOC said it would email affected bookers offering a booking change or a full refund. The track page still describes a shorter 2026/27 route of 35.5 km that starts at Mangatepopo Carpark and ends in Whakapapa Village, so read both and check the live page before you go.",
        "At Lake Waikaremoana, DOC says Whanganui Hut is closed and that the Hopuruahine road is not currently suitable for two-wheel-drive vehicles. DOC's Heaphy page says the track has reopened as a through route with a new bridge across the Heaphy River. The Great Walks season starts on 1 November on the Routeburn and Milford and on 27 October on the Kepler. DOC says avalanche risk on all three can extend into December, and that it may close the alpine sections of the Routeburn and Kepler during the season if there is avalanche hazard.",
      ], ["Tongariro: Oturere Hut bookings open 18 December", "Waikaremoana: Whanganui Hut is closed", "Fiordland avalanche risk can run into December"]),
      s("Using KiwiCamping to plan around the bookings", [
        "KiwiCamping's DOC data lists 33 Great Walk huts and 46 Great Walk campsites, each with its category, fee notes, facilities and a link to DOC's own page, and the filters can narrow the map to campsites or huts. DOC's booking system stays the only place to reserve them. Saved places, place details and guides are kept on the phone for use without signal, while map tiles, routing, weather and photos need a connection.",
        "Save the booked huts and campsites to a trip, put them in walking order with the dates, and add a note with the booking reference and the shuttle or water taxi you have arranged. Each leg shows its distance and each place its forecast, which helps when you line up the drive to the trailhead with the walk. Free to download, with in-app purchases.",
      ], ["Save each booked night with its reference", "Check the forecast for every leg", "Book on DOC's site, not in the app"], undefined, true),
    ],
    sources: [
      { label: "DOC: Great Walks, compare the walks", url: "https://www.doc.govt.nz/parks-and-recreation/things-to-do/walking-and-tramping/great-walks/compare-great-walks/" },
      { label: "DOC: Great Walks pricing", url: "https://www.doc.govt.nz/about-us/our-role/managing-conservation/recreation-management/great-walks-management/pricing/" },
      { label: "DOC: Great Walks terms and conditions", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/bookings-terms-and-conditions/great-walks-terms-and-conditions/" },
      { label: "DOC media release (26 March 2026): Great Walk hut and campsite bookings open from 12 May, and last summer's occupancy", url: "https://www.doc.govt.nz/news/media-releases/2026-media-releases/ready-set-naturing-doc-great-walk-hut-and-campsite-bookings-open-from-12-may/" },
      { label: "DOC media release: loop linked again as work continues on the Tongariro Northern Circuit", url: "https://www.doc.govt.nz/news/media-releases/2026-media-releases/loop-linked-again-as-work-continues-on-tongariro-northern-circuit/" },
      { label: "DOC: Abel Tasman Coast Track", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/nelson-tasman/places/abel-tasman-national-park/things-to-do/tracks/abel-tasman-coast-track/" },
      { label: "DOC: Heaphy Track", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/nelson-tasman/places/kahurangi-national-park/things-to-do/tracks/heaphy-track/" },
      { label: "DOC: Kepler Track", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/tracks/kepler-track/" },
      { label: "DOC: Lake Waikaremoana Great Walk", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/east-coast/places/te-urewera/things-to-do/tracks/lake-waikaremoana-great-walk/" },
      { label: "DOC: Milford Track", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/tracks/milford-track/" },
      { label: "DOC: Paparoa Track", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/west-coast/places/paparoa-national-park/things-to-do/tracks/paparoa-track/" },
      { label: "DOC: Rakiura Track", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/southland/places/stewart-island-rakiura/rakiura-national-park/things-to-do/rakiura-track/" },
      { label: "DOC: Routeburn Track", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/tracks/routeburn-track/" },
      { label: "DOC: Tongariro Northern Circuit", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/central-north-island/places/tongariro-national-park/things-to-do/tracks/tongariro-northern-circuit/" },
      { label: "DOC: Whanganui Journey", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/manawatu-whanganui/places/whanganui-national-park/things-to-do/tracks/whanganui-journey/" },
      { label: "DOC: freedom camping on conservation land", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
      { label: "DOC: online bookings", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/online-bookings/" },
    ],
  }),

  a({
    slug: "abel-tasman-coast-track-campsites-2026-27",
    publishAt: "2026-11-24",
    title: "Abel Tasman Coast Track Campsites 2026/27: Booking, Fees and Where to Camp",
    description: "All 18 Abel Tasman Coast Track campsites in track order, the two-night and five-night limits, fees for New Zealanders and visitors, tidal crossings, water taxis and what to do when the campsites are full.",
    category: "Camping guides",
    region: "Nelson/Tasman",
    places: ["Marahau", "Anchorage", "Bark Bay", "Awaroa", "Tōtaranui", "Whariwharangi"],
    imageAlt: "A white sand beach in Anchorage Bay in Abel Tasman National Park, with weathered rock arches and native bush above",
    related: ["nz-great-walks-2026-27-huts-campsites-booking-fees", "doc-campsites-new-zealand-guide", "christmas-summer-camping-new-zealand-2026-27", "nelson-abel-tasman-golden-bay"],
    hubs: ["camping/nelson-tasman"],
    intro:
      "The Abel Tasman Coast Track has 18 campsites and 4 huts, and DOC says all of them must be booked in advance all year round. From 1 October to 30 April you can stay at most two nights at one hut or campsite, and an adult campsite costs $21 for New Zealanders and $31 for international visitors. Bookings for 2026/27 opened on 14 May 2026, and DOC's page says there is strictly no freedom camping on the track. This page lists the campsites in walking order, with the tides, transport and rules that decide where you sleep.",
    sections: [
      s("The 18 campsites, south to north", [
        "DOC lists the campsites in the order you meet them. Between Marahau and Anchorage there are eight: Tinline, Coquille Bay, Apple Tree Bay, Akersten Bay, Watering Cove, Observation Beach, Te Pukatea Bay and Anchorage. Torrent Bay Village and Bark Bay follow, then Mosquito Bay, Onetahuti Bay and Awaroa between Bark Bay and Awaroa, and Waiharakeke Bay, Tōtaranui Great Walk Campsite, Anapai Bay, Mutton Cove and Whariwharangi Bay on the way to the northern end.",
        "Mosquito Bay is the exception: DOC says it can only be accessed by private boat, such as a kayak, so it is not a walking stop. The four huts are Anchorage, Bark Bay, Awaroa and Whariwharangi Bay, and DOC says campers may not use hut facilities. School groups may book only nine of the campsites, which DOC names as Tinline, Apple Tree, Anchorage, Bark Bay, Onetahuti, Awaroa, Tōtaranui, Mutton Cove and Whariwharangi, with a limit of 40 young people per site per night.",
      ], ["Mosquito Bay is reached by boat only", "Campers cannot use the huts", "Eight campsites sit between Marahau and Anchorage"], {
        caption: "Campsites in DOC's track order from its Abel Tasman Coast Track page, read 21 October 2026. DOC gives section distances and times on the page: Marahau to Anchorage 12.4 km, Anchorage to Bark Bay 11.5 km, Bark Bay to Awaroa 13.5 km, Awaroa to Tōtaranui 7.1 km, Tōtaranui to Whariwharangi 9.8 km.",
        head: ["Section", "Campsites", "Notes from DOC"],
        rows: [
          ["Marahau to Anchorage", "Tinline, Coquille Bay, Apple Tree Bay, Akersten Bay, Watering Cove, Observation Beach, Te Pukatea Bay, Anchorage", "Eight campsites; Anchorage also has a hut"],
          ["Anchorage to Bark Bay", "Torrent Bay Village, Bark Bay", "Torrent Bay estuary has an all-tide track; Bark Bay Hut"],
          ["Bark Bay to Awaroa", "Mosquito Bay, Onetahuti Bay, Awaroa", "Mosquito Bay by private boat only; Awaroa Hut; Awaroa Inlet crossing"],
          ["Awaroa to Tōtaranui", "Waiharakeke Bay, Tōtaranui Great Walk Campsite", "Tōtaranui can be booked for one night only, all year"],
          ["Tōtaranui to Whariwharangi", "Anapai Bay, Mutton Cove, Whariwharangi Bay", "Whariwharangi Hut; no water taxis go beyond Tōtaranui"],
        ],
      }),
      s("Booking and how long you can stay", [
        "Huts and campsites must be booked in advance all year round, through DOC's booking system. DOC set the 2026/27 opening for this track at 9:30 am on Thursday 14 May 2026 for stays up to 30 June 2027, and it has not published the 2027/28 date. Without a valid booking you may be charged a penalty, or turned away if the hut or campsite is full, so turning up and hoping is not an option.",
        "The stay limit is two nights at any hut or campsite from 1 October to 30 April and five nights from 1 May to 30 September, and the Tōtaranui Great Walk Campsite can be booked for one night all year. That one-night rule matters at the northern end, where many walkers want a second night. DOC's Tōtaranui Campground, the drive-in site reached by road, is a different booking and is covered in the Christmas and summer guide.",
      ], ["Booking is needed all year", "Two nights in summer, five in winter", "Tōtaranui Great Walk Campsite is one night only"]),
      s("What it costs", [
        "DOC's fee for a campsite is per person, per night. The adult rate is $21 for New Zealanders and $31 for international visitors from 1 October to 30 April, and $21 for everyone from 1 May to 30 September. Huts are $55 for New Zealand adults and $84 for international adults in summer, dropping to $42 in May, June and September and $33 in July and August. DOC lists children aged 5 to 17 and infants aged 0 to 4 at reduced rates, with infants free, and day walks and park entry are free.",
        "To claim the New Zealand rate you need proof of eligibility, and the Great Walks terms explain what DOC accepts. Water taxis are booked with the operators, not through DOC. DOC's page says they must be booked in advance, and that they run between Marahau or Kaiteriteri and Tōtaranui.",
      ], ["Campsite: $21 NZ, $31 international in summer", "Hut: $55 NZ, $84 international in summer", "Water taxis are booked separately"], {
        caption: "DOC's adult fees per person per night on the Abel Tasman Coast Track page, read 21 October 2026. A dash means DOC lists no campsite rate for that period.",
        head: ["Period", "Hut, New Zealand adult", "Hut, international adult", "Campsite, New Zealand adult", "Campsite, international adult"],
        rows: [
          ["1 October to 30 April", "$55", "$84", "$21", "$31"],
          ["1 May to 30 June", "$42", "$42", "$21", "$21"],
          ["1 July to 31 August", "$33", "$33", "-", "-"],
          ["1 to 30 September", "$42", "$42", "$21", "$21"],
        ],
      }),
      s("Tides, crossings and getting there", [
        "The Awaroa Inlet is the one crossing DOC calls compulsory, and there is no alternative track. DOC says to cross within 1 hour 30 minutes before and 2 hours after low tide, only in daylight, and to allow about 25 minutes. The Torrent Bay estuary can be crossed 2 hours either side of low tide, or you can use the all-tide track around it, and the Bark Bay estuary has the same 2-hour window with an all-tide track that takes about 10 minutes. Goat Bay's beach access is cut at large tides, so you wait for the tide to drop.",
        "The track can be started from Marahau in the south or Wainui or Tōtaranui in the north, and DOC gives road distances from Nelson of 67 km to Marahau, 128 km to Wainui and 160 km to Tōtaranui. The last 12 km to Tōtaranui are unsealed but suitable for campervans, and DOC says parking at the road ends is at your own risk. Check the tide timetable before you choose your nights, because it decides which way round the Awaroa day works.",
      ], ["Awaroa: 1h30 before to 2h after low tide", "Torrent Bay and Bark Bay have all-tide tracks", "Parking at the road ends is at your own risk"]),
      s("Rules at the campsites", [
        "DOC says to camp only at the site you booked, or you may be penalised, and that kayakers may camp elsewhere only for safety reasons. The campsites are for tents and are not suitable for hammocks, and DOC does not allow hammocks, including tree-hugger hammocks, at them. Water at huts and campsites is untreated and DOC says to boil it before use, there is no food on sale on the track and no emergency food, and huts have no gas cooking or lighting.",
        "A drone needs a permit and DOC says flying one without a permit is strictly prohibited. Sandflies and wasps are present, so carry repellent and any wasp-sting medication, and after a long or strong earthquake or a sudden change in sea level DOC says to go to higher ground at once. The page does not state a rule on campfires or dogs, so check the individual campsite page before you pack either.",
      ], ["Tents only, no hammocks", "Boil the water", "Check campsite pages for fires and dogs"]),
      s("When the campsites are full", [
        "DOC does not publish which nights are booked out, but it says Abel Tasman Coast Track huts reached around 95 per cent occupancy last summer and that many campsites still had good availability on busy walks, so the campsites are the better bet. Try different start points, a different direction or midweek nights, and remember that the stay limit forces you to move on each night or two.",
        "If the Great Walk campsites are full, the Nelson/Tasman DOC campsites are the next step. KiwiCamping's DOC data (11 August 2026) lists 37 DOC campsites in the region, 25 of them Great Walk campsites, 31 bookable online through DOC, and the Tōtaranui Campground the largest. The Nelson, Abel Tasman and Golden Bay road trip guide covers the roads, and the holiday parks guide covers the beds around Kaiteriteri and Motueka.",
      ], ["Campsites often have space when huts are full", "Try midweek nights", "37 DOC campsites in Nelson/Tasman"]),
      s("Using KiwiCamping on the Abel Tasman", [
        "KiwiCamping lists the Abel Tasman campsites and huts with their category, fee notes and facilities, so you can see every bay on the map and compare campsites before booking on DOC's site. It does not show tide times or water taxi timetables, which come from the operators. Place details, saved places and guides can be read offline; map tiles, routing, weather and photos cannot.",
        "Save each booked campsite to a trip in walking order, with the date and booking reference in a note and the water taxi time beside it. Every leg shows its distance and every place a forecast. Free to download, with in-app purchases.",
      ], ["Save each booked night in order", "Tide times come from the operators", "Core place details work offline"], undefined, true),
    ],
    sources: [
      { label: "DOC: Abel Tasman Coast Track", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/nelson-tasman/places/abel-tasman-national-park/things-to-do/tracks/abel-tasman-coast-track/" },
      { label: "DOC: Great Walks pricing", url: "https://www.doc.govt.nz/about-us/our-role/managing-conservation/recreation-management/great-walks-management/pricing/" },
      { label: "DOC: Great Walks terms and conditions", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/bookings-terms-and-conditions/great-walks-terms-and-conditions/" },
      { label: "DOC media release (26 March 2026): Great Walk bookings open from 12 May, and last summer's occupancy", url: "https://www.doc.govt.nz/news/media-releases/2026-media-releases/ready-set-naturing-doc-great-walk-hut-and-campsite-bookings-open-from-12-may/" },
      { label: "DOC: Tōtaranui camp rules", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/nelson-tasman/places/abel-tasman-national-park/things-to-do/campsites/totaranui-campground/camp-rules/" },
    ],
  }),
  a({
    slug: "routeburn-track-camping-2026-27",
    publishAt: "2026-11-27",
    title: "Routeburn Track Camping 2026/27: Campsites, Huts, Booking and Fees",
    description: "Routeburn Track campsites and huts for the 2026/27 Great Walks season: Routeburn Flats and Lake Mackenzie campsites, fees from 1 November, avalanche risk into December, transport and how to book.",
    category: "Camping guides",
    region: "Fiordland and Otago",
    places: ["Routeburn Shelter", "Routeburn Flats", "Routeburn Falls", "Lake Mackenzie", "Harris Saddle", "The Divide"],
    imageAlt: "Snow-covered peaks above Harris Saddle on the Routeburn Track, with small tarns among the tussock in the foreground",
    related: ["nz-great-walks-2026-27-huts-campsites-booking-fees", "doc-campsites-new-zealand-guide", "freedom-camping-queenstown-lakes-2026", "fiordland-camping-road-trip"],
    hubs: ["camping/fiordland", "huts/otago"],
    intro:
      "The Routeburn Track has three huts and two campsites, and DOC says they must be booked well in advance during the Great Walks season, which runs from 1 November 2026 to 30 April 2027. A campsite night costs $28 for New Zealand adults and $42 for international adults in the season, against $10 outside it. DOC opened 2026/27 bookings for the Routeburn on Friday 15 May 2026. Below are the campsites, the sections between them and the avalanche, transport and water rules that shape a camping trip.",
    sections: [
      s("Campsites and huts along the track", [
        "DOC says the track has three huts and two campsites. The page names Routeburn Flats Hut and Campsite, and the huts most walkers use are Routeburn Falls and Lake Mackenzie, with the second campsite at Lake Mackenzie. DOC says Lake Howden Hut was destroyed by storm damage in February 2020, so it is no longer a stop. Huts have bunks, mattresses, heating, toilets, basic cooking, solar lighting and cold running water, and a DOC ranger is in residence in the season.",
        "The campsites have toilets, sinks and water, and the Routeburn campsites have picnic tables and cooking shelters. DOC says campers cannot use the huts' facilities, so carry a gas cooker and use the shelter. DOC advises storing food in rodent-proof containers, especially when camping, and says food cannot be bought on the track.",
      ], ["Routeburn Flats and Lake Mackenzie have campsites", "Lake Howden Hut no longer exists", "Camp with your own cooker"]),
      s("The sections between the stops", [
        "From Routeburn Shelter to Routeburn Flats Hut is 7.5 km, taking 1 hour 30 minutes to 2 hours 30 minutes, and Routeburn Flats to Routeburn Falls Hut is 2.3 km, taking 1 to 1 hour 30 minutes. The long day is Routeburn Falls to Lake Mackenzie: 11.3 km, 4 hours 30 minutes to 6 hours, crossing Harris Saddle at 1,255 metres and the exposed Hollyford Face. Lake Mackenzie to The Divide is 12 km, 4 to 5 hours 30 minutes, past Earland Falls.",
        "The track can be walked in either direction and most walkers take three days and two nights, staying at Routeburn Falls and Lake Mackenzie. Side trips include Conical Hill from Harris Saddle and Key Summit near the Divide end, and DOC warns that snow and ice make Conical Hill hazardous early and late in the season. Link-ups with the Greenstone and Caples tracks make a circuit from Routeburn Shelter.",
      ], ["Day two is the long one", "Harris Saddle is 1,255 m", "Either direction works"], {
        caption: "Section distances and times from DOC's Routeburn Track page, read 21 October 2026.",
        head: ["Section", "Distance", "Time", "Note"],
        rows: [
          ["Routeburn Shelter to Routeburn Flats Hut", "7.5 km", "1 h 30 to 2 h 30", "Routeburn Flats has a hut and a campsite"],
          ["Routeburn Flats Hut to Routeburn Falls Hut", "2.3 km", "1 h to 1 h 30", "Routeburn Falls is one of the main huts"],
          ["Routeburn Falls Hut to Lake Mackenzie Hut", "11.3 km", "4 h 30 to 6 h", "Harris Saddle (1,255 m) and the Hollyford Face; Lake Mackenzie has a campsite"],
          ["Lake Mackenzie Hut to The Divide", "12 km", "4 h to 5 h 30", "Earland Falls; The Divide is at 532 m"],
        ],
      }),
      s("Fees and booking", [
        "In the Great Walks season, from 1 November to 30 April, a hut night is $88 for New Zealand adults and $132 for international adults, and a campsite night is $28 and $42. Outside the season the huts drop to $35 in May and June and $30 from July to October, and campsites to $10, with children and infants charged less. DOC's cancellation and residency rules for Great Walks are in the Great Walks overview.",
        "Huts and campsites are booked through DOC in the season, and without a valid booking you may be charged a penalty or turned away if the site is full. DOC's page is not consistent about the May to October period: one section says bookings are not required and bunks are first come, first served, paid by hut ticket or pass, while the fees section says huts are still booked at the lower rate. Confirm with DOC before you rely on either.",
      ], ["Season: $28 NZ, $42 international per campsite night", "Outside the season: $10", "Confirm winter booking rules with DOC"]),
      s("Avalanche, flooding and water", [
        "DOC says the track has more than 32 avalanche paths, that the risk can extend into December, and that in the season it manages the risk and may close sections if there is an avalanche hazard. Outside the season DOC says it does not manage hazards such as flooding and avalanches. Flooding is common on some sections after heavy rain but levels drop quickly once it stops, and DOC says if you are caught between flooded streams you should not attempt to cross.",
        "Didymo has been found at Potters Creek, Deadman's Creek and No Name Creek between Harris Saddle and Lake Mackenzie, so follow the Check, Clean, Dry guidance and do not take water from or fill bottles at those creeks. Fiordland receives up to 9000 mm of rain a year and has no cellphone coverage on the track, so DOC recommends a distress beacon in the gear list.",
      ], ["32 avalanche paths", "Do not take water from three named creeks", "No cellphone coverage"]),
      s("Getting to each end", [
        "Routeburn Shelter is 25 km from Glenorchy along a partly unsealed road, and The Divide is 85 km from Te Anau. DOC gives 325 km as the road distance between the two ends, so you need transport at each one, and DOC says to arrange it before you start. The council rules for Glenorchy and the Queenstown area, including what you can do with a campervan the night before, are in the Queenstown Lakes freedom camping guide.",
        "Plan an accommodation night before the start, because freedom camping near Great Walks tracks is generally not permitted and the two Great Walk campsites are for walkers on the track. DOC's Otago and Fiordland campsites around Glenorchy are the usual alternatives; KiwiCamping's DOC data (11 August 2026) lists 13 DOC campsites in Fiordland, 10 of them bookable online through DOC.",
      ], ["Arrange transport at both ends", "325 km separates the two roads", "Book a bed for the night before"]),
      s("Using KiwiCamping for the Routeburn", [
        "KiwiCamping shows the Routeburn's huts and campsites with their category, fee notes and facilities, along with Glenorchy and Queenstown campsites and holiday parks, and the forecast for each place helps on the alpine days. Bookings stay on DOC's site. Without signal you can still open place details, saved places and guides; map tiles, routing, weather and photos need a connection.",
        "Save the Routeburn nights and the night before the start to a trip, keep the booking reference and shuttle times in notes, and the trip lists the distance between legs and a forecast at each place. Free to download, with in-app purchases.",
      ], ["Check the forecast for the saddle days", "Keep shuttle times in a note", "Core place details work offline"], undefined, true),
    ],
    sources: [
      { label: "DOC: Routeburn Track", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/tracks/routeburn-track/" },
      { label: "DOC: Lake Mackenzie campsite", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/campsites/lake-mackenzie-campsite/" },
      { label: "DOC: Great Walks pricing", url: "https://www.doc.govt.nz/about-us/our-role/managing-conservation/recreation-management/great-walks-management/pricing/" },
      { label: "DOC media release (26 March 2026): Great Walk bookings open from 12 May", url: "https://www.doc.govt.nz/news/media-releases/2026-media-releases/ready-set-naturing-doc-great-walk-hut-and-campsite-bookings-open-from-12-may/" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
    ],
  }),
  a({
    slug: "tongariro-northern-circuit-camping-2026-27",
    publishAt: "2026-11-30",
    title: "Tongariro Northern Circuit Camping 2026/27: Huts, Campsites, Booking and Oturere Hut",
    description: "Tongariro Northern Circuit huts and campsites for 2026/27: Mangatepopo, Oturere and Waihohonu, fees from 23 October, the new Oturere Hut opening for bookings on 18 December, parking and volcanic safety.",
    category: "Camping guides",
    region: "Central North Island",
    places: ["Mangatepopo", "Oturere", "Waihohonu", "Emerald Lakes", "Whakapapa Village", "Tongariro National Park"],
    imageAlt: "A pale green crater lake on the Tongariro Northern Circuit beneath low cloud",
    related: ["nz-great-walks-2026-27-huts-campsites-booking-fees", "volcanic-safety-new-zealand-travel", "doc-campsites-new-zealand-guide", "christmas-summer-camping-new-zealand-2026-27"],
    hubs: ["camping/central-north-island"],
    intro:
      "The Tongariro Northern Circuit has three huts, each with a campsite nearby: Mangatepopo, Oturere and Waihohonu. DOC says bookings are required all year, and in the 2026/27 season, which runs from 23 October 2026 to 30 April 2027, a campsite night is $19 for New Zealand adults and $28 for international adults. The new Oturere Hut and its campsite open for bookings from 18 December 2026, after construction fell behind, so a full circuit depends on that date and on the Mangatepopo Track reopening in mid-December.",
    sections: [
      s("What changed this season", [
        "DOC's 4 September 2026 release says the full circuit will run as a loop this summer, but that setbacks in building the new Oturere Hut delayed its opening until mid-December, and that the hut and campsite will open for bookings from 18 December 2026. Affected bookers were to receive an email from DOC offering a change or a full refund. The Mangatepopo Track, the link between Whakapapa Village and Mangatepopo Hut that was damaged in the 2025 Tongariro fire, is on course for a summer reopening, and DOC says without it the Northern Circuit has not been a circuit.",
        "DOC's track page is older and describes a shorter 2026/27 route of 35.5 km that starts at Mangatepopo Carpark and ends in Whakapapa Village, with the Whakapapa Village to Mangatepopo Hut section closed because of the fire. DOC's comparison page lists the circuit at 43 km. Read the live track page and DOC's alerts the week you go, because the two descriptions may describe different stages of the same recovery.",
      ], ["Oturere Hut and campsite: bookings from 18 December", "Mangatepopo Track due to reopen mid-December", "Read DOC's live alerts the week you go"]),
      s("Huts, campsites and the sections between them", [
        "The three huts have nearby campsites, and DOC says camping is not allowed within 500 m of the track. From Mangatepopo Carpark to Mangatepopo Hut is 1.7 km, about 25 minutes, then Mangatepopo Hut to Emerald Lakes is 8 km and 3 hours 30 minutes with a steep climb to the saddle. Emerald Lakes to Oturere Hut is 4 km and 1 hour 30 minutes down a steep, slippery 400 m descent, Oturere to Waihohonu Hut is 8.1 km and 3 hours, and Waihohonu to Whakapapa Village is 15.4 km and 5 hours.",
        "Most walkers take four days and three nights or three days and two nights, and very fit walkers can do two days and one night with each day at least eight hours. Huts have bunks, mattresses, heating, toilets, basic gas cooking, solar lighting and cold running water, and a ranger in the season, and campers cannot use hut facilities. DOC says the track is not recommended for children under 10.",
      ], ["Three huts, each with a campsite", "Camping is not allowed within 500 m of the track", "Longest day is Waihohonu to Whakapapa"], {
        caption: "Sections as listed on DOC's Tongariro Northern Circuit page, read 21 October 2026.",
        head: ["Section", "Distance", "Time", "Note"],
        rows: [
          ["Mangatepopo Carpark to Mangatepopo Hut", "1.7 km", "25 min", "Well-formed track; hut and campsite"],
          ["Mangatepopo Hut to Emerald Lakes", "8 km", "3 h 30", "Steep climb to the saddle; Red Crater slopes are loose"],
          ["Emerald Lakes to Oturere Hut", "4 km", "1 h 30", "Steep, slippery 400 m descent; new hut opens for bookings 18 December"],
          ["Oturere Hut to Waihohonu Hut", "8.1 km", "3 h", "Hut and campsite at Waihohonu"],
          ["Waihohonu Hut to Whakapapa Village", "15.4 km", "5 h", "Tama Saddle can be windy"],
        ],
      }),
      s("Fees and booking", [
        "From 23 October to 30 April a hut night is $44 for New Zealand adults and $66 for international adults, and a campsite night is $19 and $28. From 1 May to 22 October a hut is $25 and a campsite $10 for everyone, with children and infants charged less. DOC's page says bookings are required for huts and campsites all year, and that without a valid booking you may be charged a penalty or turned away if the site is full.",
        "DOC opened 2026/27 bookings for the circuit on Thursday 21 May 2026. If you hold a circuit hut or campsite booking you do not need a separate Tongariro Alpine Crossing booking, according to DOC, and runners who plan to finish the circuit in one day should book the Alpine Crossing. The cancellation rules and residency proof are the same as for every Great Walk and are set out in the Great Walks overview.",
      ], ["Season: $19 NZ, $28 international per campsite night", "Bookings are needed all year", "Circuit bookings cover the Alpine Crossing"]),
      s("Parking, shuttles and volcanic safety", [
        "Parking at Mangatepopo Carpark is limited to 4 hours during the Great Walk season, and DOC recommends parking in Whakapapa Village and taking a shuttle to the start. Overnight parking in Whakapapa Village needs a free permit from the Tongariro National Park Visitor Centre, and buses and trains stop at Waimarino (National Park Village), 15 km from the village.",
        "The circuit crosses an active volcanic area. DOC says eruptions are unlikely but can occur at any time, that monitoring cannot guarantee your safety, and that mobile reception is generally reasonable but very limited at Waihohonu Hut. DOC also says that climbing Mounts Ngauruhoe and Tongariro is considered disrespectful and unacceptable to Ngāti Tūwharetoa. The volcanic safety guide covers volcanic risk on trips around New Zealand.",
      ], ["4-hour limit at Mangatepopo Carpark", "Free overnight permit in Whakapapa Village", "Climbing Ngauruhoe is not acceptable to Ngāti Tūwharetoa"]),
      s("Camping outside the Great Walks season", [
        "From 1 May to 22 October DOC says the circuit is not a Great Walk and has reduced facilities. Walkers need alpine skills, equipment and experience, food for at least two extra days, a stove and gas, an ice axe and crampons, an avalanche beacon, shovel and probe, and a personal locator beacon. Avalanches are most common from July to October, and Red Crater between South Crater and Emerald Lakes is named as challenging avalanche terrain.",
        "Huts outside the season have no gas cookers, no rangers and no emergency radio, and the water may be frozen or unavailable. Winter hut bookings are still required, at the reduced fees above. KiwiCamping's DOC data (11 August 2026) lists 14 DOC campsites in the Central North Island, 3 of them Great Walk campsites, and the winter camping guide covers the cold-weather gear.",
      ], ["Winter needs alpine skills and equipment", "Huts have reduced facilities", "Winter bookings are still required"]),
      s("Using KiwiCamping for Tongariro", [
        "KiwiCamping shows the circuit's three Great Walk campsites and the nearby huts with their category, fee notes and facilities, plus a seven-day forecast for each place, which is the part that matters on an alpine route. Bookings stay on DOC's site. Place details, saved places and guides open from the phone without signal, while map tiles, routing, weather and photos require a connection.",
        "Save the circuit nights and the Whakapapa Village night to a trip, put the booking reference and shuttle times in notes, and mark the Oturere date beside the nights it affects. Free to download, with in-app purchases.",
      ], ["Check the forecast for each hut", "Note the Oturere opening date", "Core place details work offline"], undefined, true),
    ],
    sources: [
      { label: "DOC: Tongariro Northern Circuit", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/central-north-island/places/tongariro-national-park/things-to-do/tracks/tongariro-northern-circuit/" },
      { label: "DOC media release (4 September 2026): loop linked again as work continues on the Tongariro Northern Circuit", url: "https://www.doc.govt.nz/news/media-releases/2026-media-releases/loop-linked-again-as-work-continues-on-tongariro-northern-circuit/" },
      { label: "DOC: Great Walks, compare the walks", url: "https://www.doc.govt.nz/parks-and-recreation/things-to-do/walking-and-tramping/great-walks/compare-great-walks/" },
      { label: "DOC: Great Walks pricing", url: "https://www.doc.govt.nz/about-us/our-role/managing-conservation/recreation-management/great-walks-management/pricing/" },
      { label: "DOC media release (26 March 2026): Great Walk bookings open from 12 May", url: "https://www.doc.govt.nz/news/media-releases/2026-media-releases/ready-set-naturing-doc-great-walk-hut-and-campsite-bookings-open-from-12-may/" },
    ],
  }),
  a({
    slug: "rakiura-track-camping-2026-27",
    publishAt: "2026-12-10",
    title: "Rakiura Track Camping 2026/27: Huts, Campsites, Booking, Fees and Getting There",
    description: "Rakiura Track camping for 2026/27: the 2 huts and 3 campsites, DOC's $19 and $28 campsite fees, the two-night limit, booking all year, section times, the Bluff ferry, the Invercargill flight and the mud.",
    category: "Camping guides",
    region: "Southland",
    places: ["Oban", "Lee Bay", "Maori Beach", "Port William", "North Arm", "Bluff"],
    imageAlt: "A curved white sand beach at Maori Beach on Stewart Island, with tussock in the foreground and forested hills across a calm blue bay",
    related: ["nz-great-walks-2026-27-huts-campsites-booking-fees", "rakiura-stewart-island-camping-guide", "doc-campsites-new-zealand-guide", "doc-hut-rules-etiquette"],
    hubs: ["camping/southland"],
    intro:
      "The Rakiura Track is a 32 km Great Walk loop from Oban on Stewart Island/Rakiura, with two huts (Port William and North Arm) and three campsites (Maori Beach, Port William and North Arm). DOC says every hut and campsite must be booked in advance all year round, you can stay at most two nights at each, and from 1 October to 30 April a campsite costs $19 for a New Zealand adult and $28 for an international adult. DOC opened 2026/27 bookings on Thursday 21 May 2026, and below are the track itself, the sections, where you sleep, the fees, the crossing from the mainland and the mud. The island trip, Oban and Ulva Island are in the Stewart Island camping guide.",
    sections: [
      s("The loop: sections, distances and times", [
        "DOC's comparison page gives the Rakiura Track as 32 km and 3 days, and DOC's track guide describes it as a 32 km loop. The track page lists the sections you walk, and they add up to more than 32 km because the list starts in Oban: the 5 km road and coast walk to Lee Bay is before the track proper, and a road walk of about 2 km from the Fern Gully car park takes you back to Oban at the end. The three track days in the guide are about 8 km, 13 km and 11 km.",
        "DOC's guide sets the walk out as three days: Lee Bay to Port William, Port William to North Arm, and North Arm to the Fern Gully car park. It says trampers usually stay the night at Port William Hut and then backtrack about 40 minutes to the turn-off for the North Arm track, so the second day starts with a section you have already walked. The times are DOC's and vary with fitness, direction and weather. Little River and Maori Beach have both a high-tide and a low-tide route, and at Maori Beach DOC's guide says you can wade the creek if the tide is low and conditions are safe.",
      ], ["Oban to Lee Bay is 5 km before the track starts", "Day 2 is the longest at 13 km and about 6 hours", "Use the high-tide tracks at Little River and Maori Beach when needed"], {
        caption: "Sections and times from DOC's Rakiura Track page, read 21 October 2026. The track guide gives 8.1 km, 13 km and 11 km for the three track days.",
        head: ["Section", "Distance", "DOC's time"],
        rows: [
          ["Oban to Lee Bay", "5 km", "1 hour 30 minutes"],
          ["Lee Bay to Port William Hut", "8 km", "3 to 4 hours"],
          ["Port William Hut to North Arm Hut", "13 km", "6 hours"],
          ["North Arm Hut to Fern Gully car park", "11 km", "4 to 4 hours 30 minutes"],
          ["Fern Gully car park to Oban", "About 2 km, road walk", "Not given on the track page; the guide says 20 to 30 minutes"],
        ],
      }),
      s("Huts and campsites: where you can sleep", [
        "There are two huts, Port William Hut and North Arm Hut, and three campsites, Maori Beach, Port William and North Arm. DOC says the campsites are not next to the huts and that you may camp only at the designated campsites. Campers cannot use hut facilities. DOC's page lists a cooking shelter, a water supply and a toilet at each campsite, and says the North Arm campsite sits above North Arm Hut.",
        "DOC's 2021 track guide gives 24 bunks at each hut and room for 16 campers at each campsite, so check the live DOC page before relying on those numbers. It places Maori Beach campsite in a grassy clearing close to the beach, the Port William campsite above Magnetic Beach with the hut about 5 minutes further on, and the North Arm campsite above the hut. DOC's page says the huts have no gas cooking, lighting or toilet paper and are not heated, so a stove, fuel, candles and toilet paper are part of what you carry.",
      ], ["Campsites are not beside the huts", "Campers cannot use hut facilities", "Huts have no gas cooking, lighting or heating"], {
        caption: "Capacity from DOC's Rakiura Track guide (December 2021); facilities from DOC's Rakiura Track page, read 21 October 2026.",
        head: ["Place", "Type", "Capacity in DOC's 2021 guide", "Where it sits"],
        rows: [
          ["Maori Beach", "Campsite", "16 campers", "Grassy clearing close to the beach, after Little River and Peters Point"],
          ["Port William", "Campsite and hut", "16 campers; 24 bunks", "Campsite above Magnetic Beach; hut about 5 minutes beyond"],
          ["North Arm", "Campsite and hut", "16 campers; 24 bunks", "Campsite above the hut"],
        ],
      }),
      s("Booking, the two-night limit and fees", [
        "DOC says all huts and campsites on the Rakiura Track must be booked in advance all year round, that bookings are open for the 2026/27 season and that the maximum stay is 2 nights at each hut or campsite. DOC's 26 March 2026 release set the opening at 9:30 am on Thursday 21 May 2026 for stays from 1 July 2026 to 30 June 2027, and it has not published dates for 2027/28. Without a valid booking you may be charged a penalty, or turned away if the site is full, and DOC says to carry your booking confirmation and ID.",
        "From 1 October to 30 April a campsite night is $19 for a New Zealand adult and $28 for an international adult, and from 1 May to 30 September it is $6 for any adult. DOC's page gives a New Zealand child aged 5 to 17 at $9 and an international child aged 0 to 17 at $14 in summer, and $3 outside it, with New Zealand infants aged 0 to 4 free. Hut nights are $44 and $66 in summer, $38 from May to June and $31 from July to September. The New Zealand rate needs proof of eligibility, and the Great Walks guide covers proof of residency and cancellation fees.",
      ], ["Book every night, all year", "Two nights at most at each site", "Winter campsite nights are $6 for adults"], {
        caption: "Adult fee per person per night, NZ dollars including GST, from DOC's Rakiura Track page and Great Walks pricing page, read 21 October 2026.",
        head: ["Season", "Campsite, New Zealand adult", "Campsite, international adult", "Hut, New Zealand adult", "Hut, international adult"],
        rows: [
          ["1 October to 30 April", "$19", "$28", "$44", "$66"],
          ["1 May to 30 June", "$6", "$6", "$38", "$38"],
          ["1 July to 30 September", "$6", "$6", "$31", "$31"],
        ],
      }),
      s("Getting to Oban: the Bluff ferry and the Invercargill flight", [
        "DOC says Stewart Island is a one-hour ferry ride from Bluff or 20 minutes by plane from Invercargill. RealNZ says it is the operator of the ferry, that Bluff is about 27 km south of Invercargill, that the crossing takes approximately one hour and that sailings run multiple times daily. Its page says timetables vary by season, that some sailings are subject to weather on the Strait, and that capacity tightens in winter and the shoulder season. It says the fare covers the crossing only. This page quotes no fare, because the current price is on RealNZ's booking page.",
        "Stewart Island Flights lists a summer schedule from 1 October to 30 April and a winter schedule from 1 May to 30 September, and says additional flights are scheduled to meet demand. Its baggage policy gives each fare-paying customer a 15 kg limit, checked in 30 minutes before departure, plus one small carry-on item, and treats larger items as excess baggage subject to space on the day. The policy page says nothing specific about walkers' packs or gas canisters, so ask the airline before you fly with camping gear. Southland District Council's 2026-2027 fees schedule lists a Stewart Island/Rakiura visitor levy of $7.50 inbound and $7.50 outbound for passengers of approved operators, and $15.00 for freedom travellers. The council's page lists exemptions, including people under 18 and visits entirely within Rakiura National Park, so check with the council or your operator how it applies to your trip.",
      ], ["Ferry: about 1 hour from Bluff, per DOC and RealNZ", "Flight: 20 minutes from Invercargill, per DOC", "Flight baggage limit is 15 kg per customer"]),
      s("Oban before and after the track", [
        "DOC says Oban is the only township and has accommodation, supplies, equipment hire and transport to the track start. The Rakiura National Park Visitor Centre is at 15 Main Road, Oban (phone +64 3 219 0009, from DOC's track guide), so confirm its opening hours with DOC. The Lee Bay start is 5 km from the visitor centre by Main Road, then Elgin Terrace past the supermarket, then the coastal road through Horseshoe Bay. DOC says shuttles can drop you at Lee Bay, water taxis can reach the huts and boat access to North Arm depends on the tide. It names no operators or prices, so ask at the visitor centre.",
        "KiwiCamping's DOC data (11 August 2026) lists 5 DOC campsites in Southland, 3 of them Great Walk campsites and 3 of them in Rakiura National Park, and has no DOC campsite in Oban itself, as the Stewart Island camping guide also says. A night in Oban before or after the track therefore means the island's accommodation, and that guide covers Oban, Ulva Island and the kiwi trips. Build a spare day around the crossing, because RealNZ says some sailings are subject to weather on the Strait.",
      ], ["Visitor centre: 15 Main Road, Oban", "Shuttles reach Lee Bay; water taxis reach the huts", "Allow a spare day for weather"]),
      s("Mud, weather, safety and kiwi", [
        "Between Port William Hut and North Arm Hut, DOC says long rain can make the track muddy above boot height in patches up to 500 m long. It recommends gaiters, says some walkers use tramping poles, and warns that exposed netting and wooden steps can be slippery. DOC's guide says two bridges between North Arm and Port William may become impassable in heavy rain, and that walkers should turn back or wait until it is safe. DOC says Stewart Island weather changes quickly and that strong winds, hail and heavy rain can occur at any time.",
        "You cannot buy food on the track and DOC provides no emergency food, so carry all meals plus spares in rodent-proof containers. Mobile coverage is limited to the township, and DOC recommends a distress beacon. DOC's guide says no dogs or unpermitted drones are allowed, and that hunting occurs all year in Rakiura National Park but is not permitted near the track. Rakiura tokoeka (kiwi) are mostly active at night. If you look for them after dark, DOC says to cover your torch with a red filter or use a red light, and to avoid flash photography and bright lights.",
      ], ["Gaiters for mud above boot height", "No food on the track, and no emergency food", "Red light only for kiwi"]),
      s("Using KiwiCamping on the Rakiura Track", [
        "KiwiCamping's DOC data lists the Rakiura Track's Great Walk campsites and the two Great Walk huts in Southland, with the huts' bunks, fee notes and facilities such as toilets and water supply, and each place shows a seven-day forecast, which matters on an island where DOC says the weather changes quickly. Reserving a night is done on DOC's booking site. Once the ferry leaves Bluff there is little reception on the island, so the place details and saved places you need on the track are best opened and checked before you board; map tiles, routing, weather and photos want a signal.",
        "Save the three nights to a trip, add a note with each booking reference and the ferry or flight time, and put the Invercargill or Bluff night before and after in order. Free to download, with in-app purchases.",
      ], ["Save each booked night with its reference", "Check the forecast for each hut and campsite", "Reserve on DOC's site, not in the app"], undefined, true),
    ],
    sources: [
      { label: "DOC: Rakiura Track", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/southland/places/stewart-island-rakiura/rakiura-national-park/things-to-do/rakiura-track/" },
      { label: "DOC: Rakiura Track guide (December 2021)", url: "https://www.doc.govt.nz/documents/parks-and-recreation/tracks-and-walks/southland/rakiura-track-guide.pdf" },
      { label: "DOC: Great Walks pricing", url: "https://www.doc.govt.nz/about-us/our-role/managing-conservation/recreation-management/great-walks-management/pricing/" },
      { label: "DOC: Great Walks, compare the walks", url: "https://www.doc.govt.nz/parks-and-recreation/things-to-do/walking-and-tramping/great-walks/compare-great-walks/" },
      { label: "DOC media release (26 March 2026): Great Walk bookings open from 12 May", url: "https://www.doc.govt.nz/news/media-releases/2026-media-releases/ready-set-naturing-doc-great-walk-hut-and-campsite-bookings-open-from-12-may/" },
      { label: "RealNZ: ferry to Stewart Island planning guide", url: "https://www.realnz.com/en/blog/ferry-to-stewart-island-planning-guide/" },
      { label: "Stewart Island Flights: timetable", url: "https://www.stewartislandflights.co.nz/timetable" },
      { label: "Stewart Island Flights: baggage policy", url: "https://www.stewartislandflights.co.nz/baggagepolicy" },
      { label: "Southland District Council: Stewart Island Visitor Levy", url: "https://www.southlanddc.govt.nz/community-and-facilities/working-living-or-visiting/stewart-island-visitor-levy/" },
      { label: "Southland District Council: schedule of fees and charges 2026-2027 (visitor levy)", url: "https://www.southlanddc.govt.nz/assets/Fees-and-charges/individual/Fees-and-charges-Stewart-Island_Rakiura-visitor-levy.pdf" },
    ],
  }),
  a({
    slug: "whanganui-journey-camping-2026-27",
    publishAt: "2026-12-11",
    title: "Whanganui Journey 2026/27: Canoe Trip Huts, Campsites, Booking and Fees",
    description: "Whanganui Journey for 2026/27: the 145 km and 88 km canoe trips, huts, bunkroom and nine campsites, DOC's $35 hut and $19 campsite fees for everyone, booking, river safety, hire and shuttles, and the Bridge to Nowhere.",
    category: "Camping guides",
    region: "Manawatū/Whanganui",
    places: ["Taumarunui", "Ohinepane", "Whakahoro", "John Coull Hut", "Tīeke Kāinga", "Pipiriki"],
    imageAlt: "A red canoe with two paddlers crossing a rapid on the Whanganui River below a white papa cliff and green bush, with a gravel bar in the foreground",
    related: ["nz-great-walks-2026-27-huts-campsites-booking-fees", "doc-campsites-new-zealand-guide", "doc-huts-new-zealand-guide", "new-zealand-severe-weather-camping"],
    hubs: ["camping/manawatu-whanganui"],
    intro:
      "The Whanganui Journey is a canoe or kayak trip down the Whanganui River: 145 km from Taumarunui to Pipiriki, which DOC says takes about 5 days, or 88 km from Whakahoro to Pipiriki, which takes about 3. DOC's Great Walks season runs from 1 October to 30 April, huts and campsites must be booked in advance in that season, and in the season a night costs $35 in a hut or $19 at a campsite for every adult, whether a New Zealander or an international visitor. DOC opened 2026/27 bookings on Wednesday 20 May 2026. Below are the huts, campsites, fees, river safety, hire and getting to both ends; it is not a trip for beginners.",
    sections: [
      s("The route: 145 km or 88 km, and how long it takes", [
        "DOC gives two ways to do the trip. The full 145 km from Taumarunui to Pipiriki averages 5 days, and the 88 km from Whakahoro to Pipiriki averages 3 days and is the most scenic section in DOC's words. Businesses also run 1-day and 2-day trips on sections of the river, some with jet boat legs. DOC's track page breaks the full trip into five sections that add up to 145 km, with the stops and the distance to each.",
        "DOC says the Journey is not a trip for beginners. For an unguided trip you need to be a confident swimmer with canoe experience, able to paddle 6 to 7 hours a day (8 or more in low flows), over 10, and in a group of at least two plus enough adults to supervise any children and teens. DOC strongly recommends a guided trip for less experienced paddlers and solo travellers. Its brochure adds that there are no exit points between Whakahoro and Pipiriki and you cannot turn back.",
      ], ["Full trip: 145 km, about 5 days", "Whakahoro to Pipiriki: 88 km, about 3 days", "No exit points between Whakahoro and Pipiriki"], {
        caption: "Sections, distances and times from DOC's Whanganui Journey page, read 21 October 2026. Distances in brackets are from the previous stop.",
        head: ["Section", "Distance", "DOC's time", "Stops on the way"],
        rows: [
          ["Taumarunui (Ngā Huinga, Cherry Grove) to Ohinepane Campsite", "22 km", "3 to 5 hours", "Ohinepane Campsite"],
          ["Ohinepane to Whakahoro", "35 km", "6 to 8 hours", "Poukaria (14 km), Maharanui (17 km), Whakahoro Campsite and Bunkroom (4 km)"],
          ["Whakahoro to John Coull Hut", "37.5 km", "7 to 9 hours", "Mangapapa (11 km), Ōhauora (16 km), John Coull Hut (10.5 km)"],
          ["John Coull Hut to Tīeke Kāinga", "29 km", "7 to 9 hours", "Mangawaiiti (9.5 km), Mangapurua (9 km), Tīeke Kāinga (10.5 km)"],
          ["Tīeke Kāinga to Pipiriki", "21.5 km", "4 to 6 hours", "Ngāporo Campsite (12.5 km), then 9 km to Pipiriki"],
        ],
      }),
      s("Huts, the bunkroom and campsites", [
        "DOC's track page names the Whakahoro Bunkroom, John Coull Hut and Tīeke Kāinga as the huts, and says Puketotara Hut on the Matemateaonga Range is an alternative about 1 hour 30 minutes up a track opposite Tīeke Kāinga. Its brochure gives 10 bunks at Whakahoro, 24 at John Coull and 20 at Tīeke Kāinga. The page names nine campsites: Ohinepane, Poukaria, Maharanui, Whakahoro, Mangapapa, Ōhauora, Mangawaiiti, Mangapurua and Ngāporo, and the brochure map also marks campsites at John Coull Hut and Tīeke Kāinga.",
        "In the Great Walks season, DOC's brochure says the huts have mattresses, a water supply, toilets without toilet paper, handwashing facilities and heating with fuel, and that they may have lighting and basic cooking with fuel, and a hut ranger may be present. The campsites have basic facilities including toilets without toilet paper, sinks and a water supply, and some have picnic tables and cooking shelters. DOC's page says the water is not treated, so carry a way to boil or treat it, and that there are no rubbish bins. Tīeke Kāinga is a working marae as well as a hut, and DOC asks visitors to read its tikanga first, to ask permission before taking photos or video and not to drink alcohol there.",
      ], ["Huts: Whakahoro Bunkroom, John Coull, Tīeke Kāinga", "Water is untreated and there is no toilet paper", "Tīeke Kāinga is a working marae"]),
      s("Booking, fees and how to pay", [
        "In the Great Walks season, 1 October to 30 April, DOC says you must book huts and campsites in advance and pay at booking. Outside the season bookings are not possible and sites are first come, first served. DOC says that without a valid booking you may be charged a penalty, or turned away if the hut or campsite is full, and that you will not be charged for an extra night caused by high river levels. DOC's 26 March 2026 release set the 2026/27 opening at 9:30 am on Wednesday 20 May 2026 for stays from 1 July 2026 to 30 June 2027, and it listed the Whanganui Journey among the walks that often have space available.",
        "For New Zealanders and international visitors alike, a summer hut night is $35 and a campsite night is $19 per adult. DOC's summer child fee is $18 in a hut and $9 at a campsite, and DOC's track page lists New Zealand infants aged 0 to 4 as free. There is no fee to enter Whanganui National Park. The New Zealand child rate covers ages 5 to 17 and the international child rate ages 0 to 17, and the New Zealand price needs proof of eligibility. DOC's page also says hut fees can be paid with a Backcountry Hut Pass or hut tickets, and campsite fees in cash in the fee boxes at Ohinepane or Whakahoro, where you should pay for every campsite you will use because no other campsite has a fee box. It does not say which of these applies in the Great Walks season.",
      ], ["Same fee for New Zealanders and visitors", "Fees are paid at booking in the season", "No charge for a night lost to high river levels"], {
        caption: "Per person per night, NZ dollars including GST, from DOC's Whanganui Journey page and Great Walks pricing page, read 21 October 2026. The pricing page gives the same fee for New Zealand and international adults.",
        head: ["Where you sleep", "Adult, 1 October to 30 April", "Child, 1 October to 30 April", "Adult, outside the season", "Child, outside the season"],
        rows: [
          ["Huts", "$35", "$18", "$25", "$12.50"],
          ["Whakahoro Bunkroom", "$35", "$18", "$10 (1 May to 30 September)", "$5"],
          ["Campsites", "$19", "$9", "$12", "$6"],
          ["Ohinepane and Whakahoro campsites", "$19", "$9", "$10", "$5"],
        ],
      }),
      s("River conditions, flooding and safety", [
        "DOC's safety advice starts with the life jacket: always wear one on the river. It says not to paddle if the river is flooding, rising or predicted to flood, and that very low flows make paddling harder and expose more obstacles. DOC's guide says rain elsewhere in the large catchment can lift the river several metres overnight, so pull the canoe up high and tie it to something secure, and if the river rises, stay at your campsite or hut until it drops. DOC's page gives no formal river grade and names the Tarepōkiore whirlpool rapid and the large Ngāporo and Autapu rapids on the final stretch.",
        "There is no mobile reception on the river. DOC's guide says emergency communication by DOC radio is available only at John Coull Hut and Tīeke Kāinga, and DOC advises carrying a distress beacon. Leave time to reach your stop in daylight and watch for it, because DOC says that if you go past a hut or campsite you may not be able to paddle back. If a jet boat approaches, DOC's protocol is to move to the right unless you are near the left bank, stop or back-paddle so it can pass, and turn at a right angle to the wake. DOC says not to drink alcohol on the river, and that from May to September the trip is only for people very experienced in canoeing remote New Zealand rivers in winter, with no hut rangers and huts that are not heated.",
      ], ["Always wear a life jacket", "The river can rise several metres overnight", "Carry a distress beacon; there is no reception"]),
      s("Canoe hire, guides, shuttles and jet boats", [
        "DOC's page says you can hire canoes and paddle without a guide only if you have the skills and experience, and says many businesses run guided paddling trips and jet boat trips. A hire package from local suppliers includes a life jacket, a kayak or Canadian canoe, paddles including a spare, plastic drums or the equivalent and dry bags. DOC's page and brochure name no operators and publish no list of concessionaires that could be read for this page, so this page names none either. DOC's brochure lists booking canoes, equipment and transport as a separate step from booking huts and campsites.",
        "DOC says several companies run on-demand shuttles to track starts and arrange car shuttles for people canoeing the river, and that there are regular bus services to Taumarunui and Whanganui. For more information its brochure gives the Tongariro National Park Visitor Centre in Whakapapa Village (phone 07 892 3729, email tongarirovc@doc.govt.nz). DOC's page says denim, cotton and hiking boots are not suitable for canoeing in, and its gear list for campers adds a tent, sleeping mat, ground sheet and gas cooker to a 3 to 4 season sleeping bag and a way to treat water.",
      ], ["DOC names no operators on its Journey page", "Book canoes and transport separately from huts", "Bring a tent, mat and stove if camping"]),
      s("Bridge to Nowhere and other side trips", [
        "DOC's track page says the Bridge to Nowhere is reached from Mangapurua Landing, on a 3 km walk of about 1 hour 30 minutes return that is shared with cyclists, and its brochure suggests canoeists take a break from the water there to walk to the bridge. DOC's separate walk page gives about 40 minutes from the landing, so check which page you are reading before you plan the time. That page says you reach the landing by jet boat up the Whanganui River, or you can take the Mangapurua Track from the Whakahoro or Ruatiti road end. It also says fires are not permitted in the Mangapurua Valley and that all water should be treated or boiled.",
        "DOC warns that Mangapurua Landing is very slippery when the rock is wet and can be crowded with canoes and boats. Its walk page lists no closures and says the track is part of Te Araroa. The other side trip on the track page is Ōhura Falls, a short paddle up the Ōhura River from the Ohinepane to Whakahoro section. DOC also says that you should not enter Tamatea's Cave, which is wāhi tapu (a sacred place).",
      ], ["Bridge to Nowhere: 3 km, about 1 hour 30 minutes return", "Landing is slippery when wet", "Do not enter Tamatea's Cave"]),
      s("Getting to Taumarunui and Pipiriki, and camping nearby", [
        "The full trip starts at Ngā Huinga (Cherry Grove) Domain in Taumarunui. DOC says Ohinepane is reached from the Whanganui River Road (SH43) or from the river, and Whakahoro by turning off SH4 near Ōwhango onto Oio Road and driving about 43 km on a road DOC calls rough, narrow and winding. Pipiriki is about 76 km from Whanganui via the Whanganui River Road, or about 27 km from Raetihi on SH4 via the Pipiriki Raetihi Road. DOC's guide says the only road access to the river is at Ohinepane, Whakahoro and Pipiriki, and that there is no mobile coverage at any of the three.",
        "Taumarunui Holiday Park, at 487 Totara Street, is listed on the Visit Ruapehu site with tent sites through to self-contained family units, open all year from 7:30 am to 10 pm, phone 07 895 9345. Check the details with the park, because Ruapehu District Council's own camping page was not readable for this guide. DOC's page names no camping or accommodation at Pipiriki, and the last DOC campsite before it is Ngāporo, 9 km upstream. KiwiCamping's DOC data (11 August 2026) lists 16 of the region's 20 DOC campsites in Whanganui National Park.",
      ], ["Start: Ngā Huinga (Cherry Grove) Domain, Taumarunui", "Whakahoro road: about 43 km of rough gravel, per DOC", "Only three road access points to the river"]),
      s("Using KiwiCamping on the Whanganui Journey", [
        "KiwiCamping's DOC data (11 August 2026) lists 20 DOC campsites and 43 DOC huts in Manawatū/Whanganui, with fee notes, facilities and a link to DOC's own page for each, and John Coull Hut, with 24 bunks, is the region's largest hut in that data. Each place shows a seven-day forecast, which helps when river levels depend on rain. Nights are reserved through DOC and not in the app. On the river most of the phone's usefulness is what it already holds: saved places, place details and guides stay readable, whereas map tiles, routing, weather and photos stop loading when the signal goes.",
        "Save the river nights and the nights at Taumarunui and Pipiriki to a trip, put them in order with the dates, and add a note with each booking reference, your hire and shuttle arrangements and the river section for each day. The distances between legs help with the drives at each end, and DOC's table above covers the paddling. Free to download, with in-app purchases.",
      ], ["Save each night with its booking reference", "Check the forecast for each stop", "Reserve on DOC's site, not in the app"], undefined, true),
    ],
    sources: [
      { label: "DOC: Whanganui Journey", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/manawatu-whanganui/places/whanganui-national-park/things-to-do/tracks/whanganui-journey/" },
      { label: "DOC: Whanganui Journey brochure (October 2025)", url: "https://www.doc.govt.nz/globalassets/documents/parks-and-recreation/tracks-and-walks/wanganui/whanganui-journey-brochure-2025.pdf" },
      { label: "DOC: Whanganui Journey guide", url: "https://www.doc.govt.nz/globalassets/documents/parks-and-recreation/tracks-and-walks/wanganui/whanganui-journey-guide.pdf" },
      { label: "DOC: Bridge to Nowhere walk", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/manawatu-whanganui/places/whanganui-national-park/things-to-do/tracks/bridge-to-nowhere-walk/" },
      { label: "DOC: Whanganui National Park, plan and prepare", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/manawatu-whanganui/places/whanganui-national-park/things-to-do/tracks/whanganui-journey/plan-and-prepare/" },
      { label: "DOC: Great Walks pricing", url: "https://www.doc.govt.nz/about-us/our-role/managing-conservation/recreation-management/great-walks-management/pricing/" },
      { label: "DOC media release (26 March 2026): Great Walk bookings open from 12 May", url: "https://www.doc.govt.nz/news/media-releases/2026-media-releases/ready-set-naturing-doc-great-walk-hut-and-campsite-bookings-open-from-12-may/" },
      { label: "Visit Ruapehu: Taumarunui Holiday Park", url: "https://www.visitruapehu.com/accommodation/apartments/taumarunui-holiday-park" },
    ],
  }),
  a({
    slug: "milford-track-2026-27-huts-booking-fees",
    publishAt: "2026-12-07",
    title: "Milford Track 2026/27: Huts, Booking Dates, Fees and Where to Camp Nearby",
    description: "The Milford Track has three huts and no camping, one direction only, over four days. 2026/27 season dates, hut fees from $106, booking opening, boats at both ends and where to camp near Te Anau the night before.",
    category: "Camping guides",
    region: "Fiordland",
    places: ["Te Anau", "Te Anau Downs", "Glade Wharf", "Clinton Hut", "Mintaro Hut", "Dumpling Hut", "Sandfly Point"],
    imageAlt: "The Clinton River on the Milford Track, clear green water running past fallen trees below forested slopes",
    related: ["nz-great-walks-2026-27-huts-campsites-booking-fees", "fiordland-camping-road-trip", "freedom-camping-southland-2026", "doc-huts-new-zealand-guide"],
    hubs: ["camping/fiordland", "huts/fiordland", "freedom-camping/te-anau"],
    intro:
      "The Milford Track has three huts, Clinton, Mintaro and Dumpling, and no camping: DOC says camping is not permitted, and the track can only be walked in one direction over 3 nights and 4 days. In the Great Walks season, which runs from 1 November 2026 to 30 April 2027 with a last departure on 28 April, a hut night costs $106 for New Zealand adults and $152 for international adults, and DOC opened 2026/27 bookings at 9:30 am on Wednesday 13 May 2026. Below are the huts, the four days, the boats at each end, the fees and what DOC says about booking, then where you can camp near Te Anau the night before.",
    sections: [
      s("The three huts and the four days", [
        "DOC's Milford Track page gives the length as 53.5 km, one way, from Glade Wharf at the head of Lake Te Anau to Sandfly Point on Milford Sound. There are three huts, which must be booked well in advance in the Great Walks season, and every walker sleeps in each of them in turn. Clinton, Mintaro and Dumpling huts each have 40 bunk beds, flush toilets, heating, lighting, mattresses and basic cooking, with untreated tap water that DOC says to boil before use. A DOC ranger is in residence, and DOC says the huts do not provide cooking utensils or showers.",
        "The first day is short, because you arrive by boat: DOC gives 5 km and 1 to 1 hour 30 minutes from Glade Wharf to Clinton Hut. Day two is 17.5 km and about 6 hours up the Clinton Valley to Mintaro Hut at the base of Omanui/McKinnon Pass, often spelled Mackinnon Pass. Day three climbs to the pass and then drops to Dumpling Hut, and day four is the longest walk, 18 km to Sandfly Point in time for the early afternoon boat. Two side trips are worth the daylight: the wetland walkway near Clinton Hut is 15 minutes return, and DOC calls the 1 hour 30 minutes return walk to Sutherland Falls a definite highlight, where the water drops 580 m in three leaps.",
      ], ["Camping is not permitted on the track", "One direction only, over 3 nights", "Huts have no showers or cooking utensils"], {
        caption: "Sections, distances and times from DOC's Milford Track page, read 21 October 2026. DOC says the third day climbs over 500 m to the pass and then descends 1000 m to Dumpling Hut.",
        head: ["Day", "Section", "Distance", "Time"],
        rows: [
          ["1", "Glade Wharf to Clinton Hut, after a 1 hour 15 minute boat from Te Anau Downs", "5 km", "1 h to 1 h 30"],
          ["2", "Clinton Hut to Mintaro Hut", "17.5 km", "6 h"],
          ["3", "Mintaro Hut to Dumpling Hut over Omanui/McKinnon Pass Shelter (1154 m)", "13 km", "6 h to 7 h"],
          ["4", "Dumpling Hut to Sandfly Point, then a boat to Milford Sound/Piopiotahi", "18 km", "5 h 30 to 6 h"],
        ],
      }),
      s("Booking dates for 2026/27", [
        "DOC's media release says Milford Track bookings opened at 9:30 am on Wednesday 13 May 2026, for stays from 1 July 2026 to 30 June 2027, the day after the Paparoa Track and the day before Abel Tasman. The release also says DOC's upgraded online booking system returns with a queue to manage peak demand. The Milford page says bookings are open for the 2026/27 season, that you need to book the huts online in the Great Walks season, and that a stay without a valid booking can bring a penalty, or you can be turned away if the hut is full. Check-in at Great Walk huts is from 2 pm to 8.30 pm and check-out is by 10 am, according to DOC's Great Walks terms.",
        "DOC does not publish which dates are booked out, so availability only shows in the booking system. What it has published is last summer's occupancy: the release says Milford Track huts reached around 95 per cent. DOC's release says nothing about the 2027/28 opening dates, and none had been published when this page was checked on 21 October 2026, so treat any date you see for next May as a guess. Transport is a separate booking: DOC's page says bookings are required for huts and for transport. The Great Walks overview covers proof of residency, transfers and the cancellation scale.",
      ], ["Bookings opened 13 May 2026 at 9:30 am", "Last departure is 28 April 2027", "2027/28 dates are not published"]),
      s("What the huts cost in 2026/27", [
        "DOC charges per person per night, and the Milford rate is the highest of the Great Walks. From 1 November to 30 April a hut night is $106 for a New Zealand adult and $152 for an international adult, a New Zealand child aged 5 to 17 pays $53, an international child aged 0 to 17 pays $76, and New Zealand infants aged 0 to 4 are free. Because the track is walked in three nights, the huts alone come to $318 for a New Zealand adult and $456 for an international adult, before boats and buses.",
        "Outside the season DOC's rate drops to $30 per adult per night for everyone, and $15 for children, from 1 May to 31 October. DOC says proof of eligibility is required for the New Zealand rate, and staff make random checks at visitor centres and huts. The Great Walks overview sets out what DOC accepts as proof and the fee it charges if someone cannot show it.",
      ], ["$106 NZ, $152 international per night in season", "Three nights: $318 or $456 for huts", "Outside the season it is $30 for everyone"], {
        caption: "Hut fees per person per night, NZ dollars including GST, from DOC's Milford Track page and Great Walks pricing page, read 21 October 2026. There are no campsites.",
        head: ["Dates", "Adult NZ", "Adult international", "Child NZ (5 to 17)", "Child international (0 to 17)"],
        rows: [
          ["1 November to 30 April", "$106", "$152", "$53", "$76"],
          ["1 May to 30 June", "$30", "$30", "$15", "$15"],
          ["1 July to 31 October", "$30", "$30", "$15", "$15"],
        ],
      }),
      s("Boats, buses and getting to each end", [
        "DOC says the track starts on Lake Te Anau. From Te Anau you take a bus or private transport to Te Anau Downs, which DOC gives as 30 minutes, then a boat to Glade Wharf at the head of the lake, 1 hour 15 minutes. The track finishes at Sandfly Point, and DOC says to take a boat trip of 20 minutes to Milford Sound/Piopiotahi, where there are bus services back to Te Anau and on to Queenstown. DOC says there is no vehicle or private access to the start or end of the track, and that transport must be booked in advance.",
        "In the Great Walks season, DOC says full and partial transport packages are available from independent operators, and it names Cheeky Kiwi, Easyhike, Fiordland Outdoors Company and Tracknet. DOC does not give their prices or timetables, so contact the operator. Outside the season DOC says operators need minimum numbers and do not always run a daily service. Because the track starts near Te Anau and finishes at Milford Sound, the Milford Road is part of the plan, and the Fiordland camping road trip guide covers that road, fuel and the weather.",
      ], ["Boat from Te Anau Downs: 1 h 15 min", "Boat from Sandfly Point: 20 min", "Contact the four operators DOC names"]),
      s("Omanui/McKinnon Pass, avalanche risk and weather", [
        "The pass shelter is the highest point on the track at 1154 m. DOC says the risk of avalanche can extend into December, that in the Great Walks season it manages this risk to a low level, and that walkers may be flown, at their own cost, over dangerous sections. It also says the Milford Track is not recommended for children under 10, because of the exposed mountainous environment and often adverse weather. DOC gives a NIWA forecast for the pass and a webcam on the pass, and both are worth checking before the long third day.",
        "DOC says Fiordland National Park gets very high rainfall, up to 9000 mm a year, and that cold temperatures, snow, strong winds and heavy rain can occur at any time of the year. Track closures are possible, and DOC recommends travel insurance. There is no cellphone coverage on the track, and the Milford Track page says to store food in a rodent-proof container, that you cannot buy food on the track, and that huts do not carry emergency food. Didymo is present in Lake Te Anau and Milford Sound but, according to DOC, not in the Clinton and Arthur rivers, so use the Check, Clean, Dry steps when moving from the lake to the rivers.",
      ], ["Avalanche risk can run into December", "No cellphone coverage", "Carry your own emergency food"]),
      s("Independent walkers, guided walks and the months outside the season", [
        "DOC's page describes the huts, fees and booking for walkers who book their own huts and transport. The only mention of guided walking is a line suggesting you consider guided walks on the Milford Track, with a link to the Visit Fiordland website, and DOC's page gives no prices or details for them. If you choose a guided option, ask the operator what is included and what DOC booking, if any, you still need to make.",
        "From 1 May to 31 October the track is outside the Great Walks season. DOC says huts then do not need booking, bunks are first come, first served, and payment is with Backcountry Hut Tickets or a Backcountry Hut Pass, but the track is an advanced or expert route, bridges over some side streams are removed, and DOC does not manage hazards such as flooding and avalanches. Facilities are greatly reduced, so it should only be attempted by fit, experienced and well-equipped people. DOC describes the Great Walks season as the best time to walk the track, with more facilities and fewer hazards.",
      ], ["Guided options: DOC links to Visit Fiordland", "1 May to 31 October is not a Great Walk", "Out-of-season huts are first come, first served"]),
      s("Camping near Te Anau the night before", [
        "You cannot camp on the track, so a campervan or tent night belongs at the start. Southland District Council's freedom camping location list shows toilets at Te Anau but no freedom camping site there, and the council's 2015 bylaw maps mark the town as camping prohibited, which the Southland freedom camping guide sets out. DOC's freedom camping notices around Te Anau prohibit camping at 24 places, including the Te Anau Downs and Lake Mistletoe carparks, according to KiwiCamping's DOC data (11 August 2026).",
        "The closest DOC campsite on that road is Henry Creek Campsite, 23 km north of Te Anau, which DOC calls the closest DOC campsite to Te Anau on the scenic drive to Milford Sound. DOC lists 30 non-powered or tent sites at $18 per adult per night, bookings required, no dogs, and fires are not allowed at any time. DOC says if no availability shows online the campsite is fully booked, and that same-day bookings are available online until 8 pm if spaces remain. Totara Campsite is 50 km north of Te Anau, with 20 sites at the same fee. Check your bus and boat times with your transport operator before you choose where to sleep.",
      ], ["DOC prohibits camping at 24 sites near Te Anau", "Henry Creek is 23 km north of Te Anau", "Book the campsite online"]),
      s("Using KiwiCamping around the Milford Track", [
        "KiwiCamping's DOC data (11 August 2026) lists 55 DOC huts in Fiordland, 7 of them Great Walk huts, and 13 DOC campsites, 10 bookable online through DOC, each with its category, fee notes, facilities and a link to DOC's own page. Searching for Milford Road in the app brings up Henry Creek Campsite, which is the easy way to compare it with the other Fiordland campsites before you book on DOC's site. Bookings for the huts and the boats stay with DOC and the operators. The hut details and saved places stay readable on the track, but the map tiles, routing, weather and photos arrive only when there is reception, and that is rare past Te Anau Downs.",
        "Save the Te Anau night before the track, then add the road legs either side so the trip shows the distance between them and a forecast at each place. Put the DOC booking reference and the boat times in a note, and use the forecast on the road leg and the Te Anau stop to decide how early to leave. Free to download, with in-app purchases.",
      ], ["Save the Te Anau night before the start", "Keep the booking reference in a note", "Check the forecast at each stop"], undefined, true),
    ],
    sources: [
      { label: "DOC: Milford Track", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/tracks/milford-track/" },
      { label: "DOC: Great Walks pricing", url: "https://www.doc.govt.nz/about-us/our-role/managing-conservation/recreation-management/great-walks-management/pricing/" },
      { label: "DOC media release (26 March 2026): Great Walk bookings open from 12 May, and last summer's occupancy", url: "https://www.doc.govt.nz/news/media-releases/2026-media-releases/ready-set-naturing-doc-great-walk-hut-and-campsite-bookings-open-from-12-may/" },
      { label: "DOC: Great Walks terms and conditions", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/bookings-terms-and-conditions/great-walks-terms-and-conditions/" },
      { label: "DOC: Henry Creek Campsite", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/campsites/henry-creek-campsite/" },
      { label: "DOC: Totara Campsite", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/campsites/totara-campsite/" },
      { label: "DOC: freedom camping on conservation land", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
      { label: "Southland District Council: freedom camping sites and locations", url: "https://southlanddc.govt.nz/services/freedom-camping/freedom-camping-locations/" },
    ],
  }),
  a({
    slug: "kepler-track-camping-2026-27",
    publishAt: "2026-12-08",
    title: "Kepler Track Camping 2026/27: Campsites, Huts, Booking and Fees",
    description: "Kepler Track camping for the 2026/27 Great Walks season from 27 October: Brod Bay and Iris Burn campsites, three huts, fees, how to reach the loop from Te Anau, avalanche risk and where to camp nearby.",
    category: "Camping guides",
    region: "Fiordland",
    places: ["Te Anau", "Brod Bay", "Luxmore Hut", "Iris Burn", "Moturau Hut", "Rainbow Reach", "Lake Manapouri"],
    imageAlt: "Walkers on a pale gravel track along a tussock ridge on the Kepler Track, with steep green slopes and mountains beyond",
    related: ["nz-great-walks-2026-27-huts-campsites-booking-fees", "fiordland-camping-road-trip", "freedom-camping-southland-2026", "doc-campsites-new-zealand-guide"],
    hubs: ["camping/fiordland", "huts/fiordland", "freedom-camping/te-anau"],
    intro:
      "The Kepler Track has two campsites, Brod Bay and Iris Burn, and three huts, Luxmore, Iris Burn and Moturau, and DOC says they must be booked well in advance during the Great Walks season, which runs from 27 October 2026 to 30 April 2027. In the season a campsite night costs $28 for New Zealand adults and $42 for international adults, against $10 outside it, and DOC opened 2026/27 bookings on Tuesday 19 May 2026. Below are the six sections of the 60 km loop, what the two campsites mean for a camper's itinerary, the fees, how to reach the track from Te Anau and where to camp nearby.",
    sections: [
      s("Huts, campsites and the six sections", [
        "DOC describes the Kepler as a 60 km loop that most walkers take in 4 days and 3 nights. Luxmore Hut has 54 bunks, Iris Burn Hut 50 and Moturau Hut 40, and the huts have bunks, mattresses, heating, toilets, basic cooking, solar lighting and cold running water, with a DOC ranger in residence. DOC says the huts do not have food, cooking utensils or showers. The two campsites each have 15 non-powered or tent sites, non-flush toilets, a cooking shelter and untreated tap water that DOC says to boil before use, and DOC says campers cannot use the hut facilities.",
        "Brod Bay is the first stop, on the shore of Lake Te Anau, and Iris Burn is in the middle of the loop. Luxmore and Moturau have huts only. DOC says camping or staying overnight in the shelters at Forest Burn and Hanging Valley is not permitted. The sections below are DOC's, listed in the order its page gives them, from the Kepler Track car park through Brod Bay and Luxmore Hut.",
      ], ["Campsites: Brod Bay and Iris Burn only", "Luxmore and Moturau have huts only", "No camping in the Forest Burn or Hanging Valley shelters"], {
        caption: "Sections, distances and times from DOC's Kepler Track page, read 21 October 2026. DOC gives the loop as 60 km.",
        head: ["Section", "Distance", "Time", "Stop"],
        rows: [
          ["Kepler Track car park to Brod Bay", "5.6 km", "1 h 30", "Brod Bay campsite (15 tent sites)"],
          ["Brod Bay to Luxmore Hut", "8.2 km", "3 h 30 to 4 h 30", "Luxmore Hut (54 bunks); Luxmore Hut is 45 minutes from the bushline"],
          ["Luxmore Hut to Iris Burn Hut", "14.6 km", "5 h to 6 h", "Iris Burn Hut (50 bunks) and campsite (15 tent sites)"],
          ["Iris Burn Hut to Moturau Hut", "16.2 km", "5 h to 6 h", "Moturau Hut (40 bunks) on Lake Manapouri"],
          ["Moturau Hut to Rainbow Reach", "6 km", "1 h 30 to 2 h", "Swing bridge; shuttle to Te Anau"],
          ["Rainbow Reach to Kepler Track car park", "9.5 km", "2 h 30 to 3 h 30", "End of the loop"],
        ],
      }),
      s("What two campsites mean for a camping itinerary", [
        "DOC does not publish a camping itinerary for the Kepler, but its section times show the shape of one. Walking from Brod Bay to Iris Burn passes Luxmore Hut and adds up to 22.8 km and 8 hours 30 minutes to 10 hours 30 minutes. From Iris Burn to the car park the three remaining sections add up to 31.7 km and 9 hours to 11 hours 30 minutes, and that is without a campsite in between, because Moturau has a hut only. Those sums are this page's arithmetic from DOC's figures, not a DOC recommendation.",
        "One way to avoid the longest days is to mix nights: a hut booking at Luxmore or Moturau breaks them up, at the hut fee below. DOC's gear list for campers is a tent, a sleeping mat, a ground sheet and a gas cooker, and it says to store food in a rodent-proof container, which matters when camping. Kea are present on the alpine section and around Iris Burn, and DOC says they are interested in camping gear, so guard your tent and gear to avoid damage or loss.",
      ], ["Brod Bay to Iris Burn is 22.8 km", "Iris Burn to the car park is 31.7 km", "Guard tents and gear from kea"]),
      s("Fees and booking for 2026/27", [
        "DOC charges per person per night. In the Great Walks season, 27 October to 30 April, a campsite night is $28 for a New Zealand adult and $42 for an international adult, with children at $14 (New Zealand, 5 to 17) or $21 (international, 0 to 17). Huts are $88 and $132 at all three huts, and children $44 and $66. From 1 May to 26 October campsites fall to $10, and huts to $30 at Iris Burn and Moturau and $35 at Luxmore. DOC says proof of eligibility is required for the New Zealand rate.",
        "DOC's media release says Kepler bookings opened at 9:30 am on Tuesday 19 May 2026, for stays from 1 July 2026 to 30 June 2027, and that Kepler Track huts reached 91 per cent occupancy last summer. The Kepler page says bookings are required for huts and campsites in the season, and that a stay without a valid booking can bring a penalty, or you can be turned away if the site is full. DOC has not published the 2027/28 opening dates, and the Great Walks overview covers residency proof, transfers and the cancellation scale.",
      ], ["Season campsite: $28 NZ, $42 international", "Season huts: $88 NZ, $132 international", "Bookings opened 19 May 2026"], {
        caption: "Fees per person per night, NZ dollars including GST, from DOC's Kepler Track page and Great Walks pricing page, read 21 October 2026.",
        head: ["Place", "Season (27 October to 30 April): NZ adult", "Season: international adult", "1 May to 26 October: adult"],
        rows: [
          ["Campsites (Brod Bay, Iris Burn)", "$28", "$42", "$10"],
          ["Luxmore Hut", "$88", "$132", "$35"],
          ["Iris Burn Hut and Moturau Hut", "$88", "$132", "$30"],
        ],
      }),
      s("The loop from Te Anau: car park, shuttles and the boat", [
        "The Kepler is a loop, so it starts and ends in the same place. DOC says it can be started from the Kepler Track car park, 5 km from Te Anau, from the Fiordland National Park Visitor Centre, which is a 50 minute walk along the lakefront to the entrance of the track, or from the Rainbow Reach car park, 12 km from Te Anau. In the Great Walks season, DOC says shuttle buses provide a daily service to the entry and exit points, and a scheduled boat service offers transport to Brod Bay. You can book transport between Te Anau and the ends of the track, otherwise DOC says it is a 50 minute walk.",
        "DOC's Kepler page gives no parking rules or advice for the car parks, and it names no shuttle operator. DOC points to the Southland NZ website for transport operators, so confirm shuttle and boat times there before you book your nights. DOC lists day walks too, from the car park to Dock Bay and Brod Bay, from the car park to Rainbow Reach, from Rainbow Reach to Shallow Bay or Moturau Hut, and from the car park to Luxmore Hut, which suit a rest day in Te Anau.",
      ], ["Car park is 5 km from Te Anau", "Rainbow Reach is 12 km from Te Anau", "Check shuttle and boat times with operators"]),
      s("The alpine section, avalanche risk and water", [
        "DOC says the risk of avalanche can extend into December, and that during the Great Walks season it manages the risk and may close the alpine section between Luxmore Hut and Iris Burn Hut if there is avalanche hazard. DOC also says the track is not recommended for children under 10, because of the exposed mountainous environment and often adverse weather, and that Fiordland has high rainfall, up to 9,000 mm a year, with cold, snow, strong winds and heavy rain possible at any time of year.",
        "There are no reliable water sources along the alpine section until Iris Burn Hut, so DOC says to fill your bottles at Luxmore Hut before you leave. Luxmore Hut to Iris Burn is the 14.6 km day, with a side trip of 30 minutes return to the Luxmore summit at 1472 m, the highest point on the track. Didymo is present in Lake Te Anau, Lake Manapouri and the Waiau River but, according to DOC, not in the Iris Burn River, so follow the Check, Clean, Dry steps and do not take water from those places.",
      ], ["Alpine section can close in the season", "Fill bottles at Luxmore Hut", "Avalanche risk can run into December"]),
      s("Outside the season, and the Kepler Challenge", [
        "From 1 May to 26 October DOC says the Kepler is outside the Great Walks season, and conditions can be cold and wet, with ice, snow and short daylight hours, the alpine section is unmarked and often under thick snow, and DOC says it does not manage hazards such as avalanches and flooding. DOC lists 9 avalanche paths, most of which can cross the track, rates the track advanced and expert, and says to carry food for two extra days, a stove, an ice axe and crampons, an avalanche beacon, shovel and probe, and a personal locator beacon.",
        "Booking is different outside the season: DOC says only Luxmore Hut needs booking, while Iris Burn Hut and campsite, Moturau Hut and Brod Bay campsite are first come, first served. Payment for the huts is with Backcountry Hut Tickets or a Backcountry Hut Pass, and for the campsites with a Campsite Pass or Backcountry Hut Tickets. DOC also says the Kepler Challenge marathon is held each year on the first Saturday in December, when the track is busy with runners and you may want to book a different date.",
      ], ["Season: 27 October 2026 to 30 April 2027", "Out of season only Luxmore Hut is booked", "Kepler Challenge: first Saturday in December"]),
      s("Camping near Te Anau before or after the track", [
        "Brod Bay and Iris Burn are track campsites for walkers, so a van or tent night at either end belongs near Te Anau. Southland District Council's freedom camping location list shows toilets in Te Anau but no freedom camping site, and its 2015 bylaw maps mark the town as camping prohibited, as the Southland freedom camping guide sets out. DOC's freedom camping notices prohibit camping at 24 places around Te Anau, including the Kepler Track and Control Gate carparks and the Queens and Rainbow Reaches carparks, according to KiwiCamping's DOC data (11 August 2026).",
        "The closest DOC campsite on the Milford Road is Henry Creek, 23 km north of Te Anau, with 30 non-powered or tent sites at $18 per adult per night, bookings required, no dogs, and no fires at any time. DOC says if no availability shows online it is fully booked, and that same-day bookings are available online until 8 pm if spaces remain. The holiday parks guide covers the paid parks in town, and the Fiordland camping road trip guide covers the roads and the rest of the region.",
      ], ["No freedom camping site at Te Anau", "Henry Creek is 23 km up the Milford Road", "Book the campsite online"]),
      s("Using KiwiCamping around the Kepler", [
        "KiwiCamping's DOC data (11 August 2026) lists Brod Bay, Iris Burn and Lake Mackenzie as the three Great Walk campsites in Fiordland, 13 DOC campsites in all with 10 bookable online through DOC, and 55 DOC huts with Luxmore Hut the largest at 54 bunks. Each has its category, fee notes, facilities and a link to DOC's own page, and the filters can narrow the map to huts or campsites. Bookings stay on DOC's site. Saved places, place details and guides remain available without reception, while the map tiles, routing, weather and photos are fetched only when you have signal.",
        "Save the Kepler nights and the Te Anau stops to a trip, put them in order with the dates, and note the booking reference and shuttle times. The trip shows the distance between legs and a forecast at each place, which helps on an alpine route with a tight weather window. Free to download, with in-app purchases.",
      ], ["Save each booked night with its reference", "Check the forecast for each stop", "Core place details work offline"], undefined, true),
    ],
    sources: [
      { label: "DOC: Kepler Track", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/tracks/kepler-track/" },
      { label: "DOC: Brod Bay Campsite", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/campsites/brod-bay-campsite/" },
      { label: "DOC: Great Walks pricing", url: "https://www.doc.govt.nz/about-us/our-role/managing-conservation/recreation-management/great-walks-management/pricing/" },
      { label: "DOC media release (26 March 2026): Great Walk bookings open from 12 May, and last summer's occupancy", url: "https://www.doc.govt.nz/news/media-releases/2026-media-releases/ready-set-naturing-doc-great-walk-hut-and-campsite-bookings-open-from-12-may/" },
      { label: "DOC: Henry Creek Campsite", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/campsites/henry-creek-campsite/" },
      { label: "DOC: freedom camping on conservation land", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
      { label: "Southland District Council: freedom camping sites and locations", url: "https://southlanddc.govt.nz/services/freedom-camping/freedom-camping-locations/" },
    ],
  }),
  a({
    slug: "heaphy-track-camping-2026-27",
    publishAt: "2026-12-09",
    title: "Heaphy Track Camping 2026/27: Huts, Campsites, Booking, Bikes and Transport",
    description: "Heaphy Track camping and huts for 2026/27: six huts, ten named campsites, booked all year, fees from $19, bikes from 1 May to 30 November, the new Heaphy River bridge and transport between Brown Hut and Kōhaihai.",
    category: "Camping guides",
    region: "Nelson/Tasman",
    places: ["Collingwood", "Brown Hut", "Perry Saddle", "Gouland Downs", "James Mackay Hut", "Heaphy Hut", "Kōhaihai", "Karamea"],
    imageAlt: "A narrow track beside a stony beach and tall nīkau palms on the Heaphy Track coast, with surf and low mist over forested hills",
    related: ["nz-great-walks-2026-27-huts-campsites-booking-fees", "nelson-abel-tasman-golden-bay", "west-coast-south-island-road-trip", "doc-campsites-new-zealand-guide"],
    hubs: ["camping/nelson-tasman", "huts/nelson-tasman", "camping/west-coast"],
    intro:
      "The Heaphy Track has 6 huts and, by DOC's count, 9 campsites, and DOC says all of them must be booked in advance all year round. DOC's page names ten campsites, not nine, so count the places rather than trust the number. Bookings for 2026/27 opened on Wednesday 20 May 2026, a campsite night is $19 for New Zealand adults and $28 for international adults from 1 October to 30 April, and mountain bikes are allowed from 1 May to 30 November. The track is 78.4 km one way between Brown Hut in Golden Bay and Kōhaihai near Karamea, and DOC says it has reopened as a through route with a new bridge across the Heaphy River.",
    sections: [
      s("Six huts and ten named campsites", [
        "DOC's Heaphy page says there are 6 huts and 9 campsites, which must be booked well in advance all year round. The huts are Brown, Perry Saddle, Gouland Downs, Saxon, James Mackay and Heaphy. The campsites DOC lists beside them are Brown, Aorere Shelter, Perry Saddle, Gouland Downs, Saxon, James Mackay, Heaphy, Katipo Creek Shelter, Scotts Beach and Kōhaihai, which is ten, so the page's own count and its own list disagree. Check the live page and the booking system before you plan around either number.",
        "DOC says huts have bunks, mattresses, heating, toilets and basic cooking facilities, and that they do not have food, cooking utensils, showers or bedding. Campsites have basic facilities including toilets, sinks and a water supply, and some have picnic tables and cooking shelters. DOC says campers cannot use hut facilities, and that Lewis Shelter, between James Mackay and Heaphy huts, is an emergency shelter with no overnight stays.",
      ], ["Page says 9 campsites, names 10", "Campers cannot use hut facilities", "No overnight stays at Lewis Shelter"]),
      s("Brown Hut to Kōhaihai, section by section", [
        "DOC gives the track as 78.4 km one way and 4 to 6 days on foot, and its brochure sets out a four day walk from Brown Hut to Kōhaihai for independent, non-guided walkers. The track can be walked in either direction. The highest point is Flanagans Corner at 915 m, about 30 minutes before Perry Saddle Hut, and the track crosses Gouland Downs, an open tussock area where DOC warns that mist can make the featureless downs confusing and it is easy to become disorientated.",
        "The big change is at the river: DOC says the track has reopened as a through route with a new bridge across the Heaphy River. DOC's brochure describes the 148.8 m Heaphy River bridge as the largest suspended deck bridge it has built. The last day follows the coast through nīkau, rātā and karaka forest to Scotts Beach, over Kōhaihai Saddle and 400 m along the Kōhaihai River bank to the car park.",
      ], ["Either direction works", "New bridge across the Heaphy River", "Gouland Downs is easy to lose in mist"], {
        caption: "Sections, distances and times on foot from DOC's Heaphy Track page, read 21 October 2026. The distances add up to the 78.4 km DOC gives for the track.",
        head: ["Section", "Distance", "Walking time", "Mountain biking"],
        rows: [
          ["Brown Hut to Perry Saddle Hut (via Aorere Shelter)", "17.5 km", "5 h", "2 h 30 to 3 h 30"],
          ["Perry Saddle Hut to Gouland Downs Hut", "7 km", "2 h", "1 h to 2 h"],
          ["Gouland Downs Hut to Saxon Hut", "5.4 km", "1 h 30", "1 h to 2 h"],
          ["Saxon Hut to James Mackay Hut", "11.8 km", "3 h", "2 h to 3 h"],
          ["James Mackay Hut to Heaphy Hut (via Lewis Shelter)", "20.5 km", "6 h", "2 h 30 to 4 h 30"],
          ["Heaphy Hut to Kōhaihai River mouth (via Katipo Creek and Scotts Beach)", "16.2 km", "5 h", "3 h to 4 h"],
        ],
      }),
      s("Booking and fees for 2026/27", [
        "DOC's media release says Heaphy bookings opened at 9:30 am on Wednesday 20 May 2026, for stays from 1 July 2026 to 30 June 2027, alongside the Whanganui Journey and Lake Waikaremoana. The release says tracks like the Heaphy often have space available, though it gives no occupancy figure for the Heaphy. The Heaphy page says a stay without a valid booking can bring a penalty, or you can be turned away if the hut or campsite is full. DOC has not published the 2027/28 opening dates, and the Great Walks overview covers proof of residency, transfers and the cancellation scale.",
        "Fees are per person per night, and DOC says there are no fees for a day walk or for entry to Kahurangi National Park. From 1 October to 30 April a hut night is $44 for a New Zealand adult and $66 for an international adult, and a campsite night is $19 and $28, with children at about half. Hut fees fall in May, June, July, August and September, and from 1 May to 30 September a campsite is $19 for everyone. DOC's separate page for Kōhaihai Campsite lists $10 per adult per night, and a maximum of two consecutive nights, so check which fee applies to your booking.",
      ], ["Season campsite: $19 NZ, $28 international", "Season hut: $44 NZ, $66 international", "Kōhaihai Campsite page lists $10"], {
        caption: "Fees per person per night, NZ dollars including GST, from DOC's Heaphy Track page, read 21 October 2026. Children: hut $22 (New Zealand, 5 to 17) or $33 (international, 0 to 17) in season; campsite $9 or $14.",
        head: ["Dates", "Hut, New Zealand adult", "Hut, international adult", "Campsite, New Zealand adult", "Campsite, international adult"],
        rows: [
          ["1 October to 30 April", "$44", "$66", "$19", "$28"],
          ["1 May to 30 June", "$38", "$38", "$19", "$19"],
          ["1 July to 31 August", "$30", "$30", "$19", "$19"],
          ["1 to 30 September", "$38", "$38", "$19", "$19"],
        ],
      }),
      s("Mountain biking from 1 May to 30 November", [
        "DOC says you can mountain bike the Heaphy Track from 1 May to 30 November, so a ride is not possible between 1 December and 30 April. You can ride in both directions, in a group of no more than 6, and during the day only, from half an hour before sunrise to half an hour after sunset, which DOC says protects two threatened nocturnal species, the Powelliphanta snail and roa, the great spotted kiwi.",
        "DOC says the Heaphy is a tough ride and not a cycle trail, suited to riders who can do advanced Grade 4 tracks. Fit, experienced riders should plan two full days with a night in a hut or designated campsite, and less experienced riders a 3 day, 2 night trip. Bikers must give way to walkers, electric bikes are not allowed, and bikes may not go into any hut or shelter or onto hut porches. DOC also says the track may be closed to bikes after storms, heavy rain, snow or high tides, and that kea at James Mackay Hut have become attracted to bike seats and brake lines, so take your seat off and cover the lines overnight.",
      ], ["Bikes: 1 May to 30 November only", "Day riding only, groups of up to 6", "No e-bikes"]),
      s("The transport problem: two ends, 463 km apart", [
        "The Heaphy is not a circuit. DOC says you start either at Brown Hut in Golden Bay, 156 km and 2 hours 25 minutes from Nelson, at the end of Aorere Valley Road, or at Kōhaihai on the West Coast, 110 km and 1 hour 45 minutes from Westport, at the end of Kōhaihai Road. DOC's track brochure says the ends are 463 km apart by road, so you need transport at each end. The drive to Brown Hut is State Highway 60 from Nelson to Collingwood, 128 km, then 28 km up the Aorere Valley, and the drive to Kōhaihai is State Highway 67 from Westport to Karamea, 95 km, then 15 km north.",
        "DOC says bus and taxi services reach either end from nearby towns, that regular bus services link Nelson and Westport, and that vehicle relocation services are available. For air access it says Air New Zealand flies into Nelson and Sounds Air into Westport, and that local operators provide air transport into Takaka and Karamea. DOC's page does not name the shuttle, taxi or relocation businesses, so look up current operators and book them before you book your nights. DOC says some transport businesses do not operate in winter, and its brochure says limited bus services operate then. There is mobile phone coverage at both ends, and DOC says the landlines at Brown Hut and Kōhaihai Campsite have been removed.",
      ], ["Ends are 463 km apart by road", "DOC names no shuttle businesses", "Winter bus services are limited"]),
      s("Floods, tides and weather on the Heaphy", [
        "DOC says weather changes quickly and annual rainfall averages over 4,000 mm, and that it rains heavily with little warning. There are sometimes large floods between Lewis Shelter and Heaphy Hut, and DOC says it is not safe to proceed when the track is flooded, so wait in Lewis Shelter or Heaphy Hut. Flooding in the Saxon and James Mackay section and the lower Heaphy valley can reach 1.5 metres deep over the track, and DOC says to be prepared to wait until it is safe.",
        "On the coast, DOC says large waves can wash over parts of the track at high tide in rough seas, so check tide charts and allow extra time. It adds that Crayfish Stream can flood quickly, and an alternative track bypasses the Kōhaihai River mouth when the river mouth is blocked. Do not swim or wade at the Heaphy River mouth or the Kōhaihai River mouth, because of strong currents. DOC says the coast, including Heaphy Hut, is at risk of tsunamis and that you should go to higher ground at once after a long or strong earthquake or a sudden change in sea level. It also says there is a small risk of giardia in the water, so treat it before you use it.",
      ], ["Wait in Lewis Shelter or Heaphy Hut if flooded", "Check tide charts for the coast", "Do not swim at either river mouth"]),
      s("Camping near Collingwood and Karamea", [
        "At the Karamea end, DOC's Kōhaihai Campsite is at the road end and the start of the track: 50 non-powered or tent sites, $10 per adult per night, bookings required, a maximum of two consecutive nights, a picnic shelter, no fires at any time and dogs on a leash in the campsite only, not in the national park or on the track. Buller District Council's page says only certified self-contained vehicles may freedom camp in Buller, encouraged to stay no more than two consecutive nights and nine nights per calendar month, and that freedom camping is not permitted on Kōhaihai Road, Flagstaff Road or at the Ōpārara River mouth west of Kōhaihai Road. The council says it is reviewing the rules and will consult later in 2026, and a blue warrant has not counted since 7 June 2026, so carry a green one.",
        "Karamea Domain Camp is a community-run campground with an on-site caretaker, 14 powered sites and numerous unpowered sites, according to the council's campgrounds page. At the Golden Bay end, the nearest night is Brown Campsite at the start of the track, if it is part of your booking, and the Aorere Valley and Collingwood are in Tasman District, whose council sets its own rules for council land and is not covered here, so check its responsible camping pages before you park. DOC's freedom camping notices in Golden Bay prohibit camping at six places, including Wainui Picnic Area and Carpark and Paines Ford picnic area, according to KiwiCamping's DOC data (11 August 2026).",
      ], ["Kōhaihai Campsite: $10, two nights maximum", "No freedom camping on Kōhaihai Road", "Check Tasman District Council's rules for Collingwood"]),
      s("Using KiwiCamping around the Heaphy", [
        "KiwiCamping's DOC data (11 August 2026) lists Brown, Heaphy and Scotts Beach among the Great Walk campsites in Kahurangi National Park, and Kōhaihai Campsite as a standard campsite at $10 with campervan access, each with its category, fee notes, facilities and a link to DOC's own page. The Nelson/Tasman data lists 37 DOC campsites and 99 DOC huts, and the West Coast 14 campsites and 140 huts. Bookings stay on DOC's site. Saved places, place details and guides are stored on the phone, and only the map tiles, routing, weather and photos depend on a connection, which matters on a track with long stretches out of reception.",
        "Save the nights before and after the track, then add the long road legs to Collingwood and Karamea so the trip shows the distance between them and a forecast at each place. Put the booking references and your shuttle or flight times in notes. Free to download, with in-app purchases.",
      ], ["Save the nights before and after the track", "Note shuttle and flight times", "Check the forecast at each stop"], undefined, true),
    ],
    sources: [
      { label: "DOC: Heaphy Track", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/nelson-tasman/places/kahurangi-national-park/things-to-do/tracks/heaphy-track/" },
      { label: "DOC: Heaphy Track brochure (PDF)", url: "https://www.doc.govt.nz/Documents/parks-and-recreation/tracks-and-walks/nelson-marlborough/heaphy-track-brochure.pdf" },
      { label: "DOC: Kōhaihai Campsite", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/nelson-tasman/places/kahurangi-national-park/things-to-do/campsites/kohaihai-campsite/" },
      { label: "DOC media release (26 March 2026): Great Walk bookings open from 12 May", url: "https://www.doc.govt.nz/news/media-releases/2026-media-releases/ready-set-naturing-doc-great-walk-hut-and-campsite-bookings-open-from-12-may/" },
      { label: "DOC: Great Walks pricing", url: "https://www.doc.govt.nz/about-us/our-role/managing-conservation/recreation-management/great-walks-management/pricing/" },
      { label: "Buller District Council: freedom camping", url: "https://bullerdc.govt.nz/recreation/freedom-camping/" },
      { label: "Buller District Council: campgrounds", url: "https://bullerdc.govt.nz/recreation/campgrounds/" },
      { label: "DOC: freedom camping on conservation land", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
    ],
  }),
  a({
    slug: "lake-waikaremoana-great-walk-camping-2026-27",
    publishAt: "2026-12-12",
    title: "Lake Waikaremoana Great Walk 2026/27: Huts, Campsites, Booking and Fees",
    description: "Lake Waikaremoana Great Walk for 2026/27: the 46 km track, four huts and the four campsites DOC names, the $35 hut and $19 campsite fees for everyone, booking all year, no dogs, the gravel road in and the Tūhoe water taxi.",
    category: "Camping guides",
    region: "East Coast",
    places: ["Onepoto", "Panekire Hut", "Waiopaoa", "Marauiti Hut", "Waiharuru", "Hopuruahine"],
    imageAlt: "Lake Waikaremoana seen from high above its shore, with forested ridges and a forested peninsula reaching into calm blue water under a partly cloudy sky",
    related: ["nz-great-walks-2026-27-huts-campsites-booking-fees", "doc-huts-new-zealand-guide", "doc-hut-rules-etiquette", "doc-campsite-rules"],
    hubs: ["huts/east-coast", "camping/east-coast"],
    intro:
      "The Lake Waikaremoana Great Walk is 46 km one way and takes 3 to 4 days, with four huts, the campsites DOC names at Waiopaoa, Korokoro, Maraunui and Waiharuru, and bookings required in advance all year. DOC charges $35 a night in a hut and $19 at a campsite per adult, the same for New Zealanders and international visitors, all year round, and no dogs are allowed on the track. DOC opened 2026/27 bookings on Wednesday 20 May 2026, lists Whanganui Hut as closed, and says the Hopuruahine road is not suitable for 2WD vehicles.",
    sections: [
      s("The track: 46 km one way, 3 to 4 days", [
        "DOC calls Lake Waikaremoana a Great Walk that is more of a backcountry, off the beaten track experience: 46 km one way, 3 to 4 days, graded as an intermediate tramping track. It is not a circuit, so you walk from Onepoto in the south to Hopuruahine in the north or the other way round, and DOC describes it from Onepoto. Its suggested 3 night, 4 day trip sleeps at Panekire Hut, Waiopaoa Hut and Marauiti Hut and finishes at Hopuruahine. DOC's section distances add up to about 44 km, while the Te Urewera website gives rounded distances that add up to 46 km, so treat the headline figure as approximate.",
        "DOC calls the first section from Onepoto, 8.8 km up to Panekire Hut in 4 to 6 hours, the most strenuous part of the trip. The track climbs through the former Armed Constabulary Redoubt to the top of Panekire Bluff, then follows the ridgeline past Puketapu Trig (1180 metres), and DOC says to expect about 600 m of climbing and descending over the Panekire Ridge. DOC says to plan on 4 to 6 hours of walking a day with a pack of up to 15 kg, and that the track is not recommended for children under 10 because of the exposed mountainous environment and often adverse weather. Guided options are available, according to DOC.",
      ], ["46 km one way, not a circuit", "Day 1 from Onepoto is the hardest", "Not recommended for children under 10"], {
        caption: "Distances and times from DOC's Lake Waikaremoana Great Walk page, read 21 October 2026. Whanganui Hut is closed and is not on this list.",
        head: ["Section", "Distance", "DOC's time", "Where you can stay"],
        rows: [
          ["Onepoto to Panekire Hut", "8.8 km", "4 to 6 hours", "Panekire Hut"],
          ["Panekire Hut to Waiopaoa Hut", "7.6 km", "3 to 4 hours", "Waiopaoa Hut and Waiopaoa Campsite"],
          ["Waiopaoa Hut to Korokoro Campsite", "3.6 km", "1 hour 30 minutes", "Korokoro Campsite (Korokoro Falls is 1 hour return)"],
          ["Korokoro Campsite to Maraunui Campsite", "6.8 km", "2 hours 30 minutes", "Maraunui Campsite"],
          ["Maraunui Campsite to Marauiti Hut", "1.7 km", "30 minutes", "Marauiti Hut"],
          ["Marauiti Hut to Waiharuru Hut", "6.2 km", "2 hours", "Waiharuru Hut and Waiharuru Campsite"],
          ["Waiharuru Hut to Hopuruahine Landing", "9.5 km", "4 hours 30 minutes", "None, this is the northern end"],
        ],
      }),
      s("Huts and the campsites DOC names", [
        "DOC says there are four huts and five campsites on Lake Waikaremoana and that these must be booked in advance. The huts are Panekire (36 bunk beds), Waiopaoa (28) and Marauiti (26), plus Waiharuru, for which DOC's page gives no bunk count. DOC lists heating, mattresses, non-flush toilets and untreated tap water to boil before use at the three huts with a count, and notes that Panekire's tank can run low in summer. DOC's page says Whanganui Hut is closed, so it is not one of the four. The campsites DOC's text names are Waiopaoa, Korokoro, Maraunui and Waiharuru. That is four, not the five its count claims, and the page names no fifth, so check the booking system's list when you book.",
        "DOC says the huts have no gas cooking facilities, lighting or toilet paper, so carry a portable stove and fuel, candles and toilet paper, and that some provisions are sold at the Lake Waikaremoana Holiday Park store. You cannot buy food on the track, and DOC does not provide emergency food in huts, so carry spare. DOC's gear list asks for a 3 to 4 season sleeping bag and warns that although the hut pages list heating, the bunkrooms do not have heating and can be cold, so pack warm clothes to sleep in. Camping on the track is only permitted at the designated campsites, which DOC says includes the lakeshore. DOC's page says Tūhoe wardens are stationed at major Great Walk huts in peak season.",
      ], ["Four huts: Panekire, Waiopaoa, Marauiti, Waiharuru", "DOC says five campsites but names four", "No stove, lights or toilet paper in the huts"]),
      s("Booking, fees and how to pay", [
        "DOC says huts and campsites on the track can be booked all year, that bookings are open for the 2026/27 season, and that you pay your fees by booking before you start. DOC's text says bookings are required for children and youth and calls staying free for them, although its fee table lists $18 and $9 for children, so check the price when you book. Campsite bookings ask for the number of people and the number of tent sites. Without a valid booking you may be charged a penalty, or turned away if the hut or campsite is full. DOC's 26 March 2026 release opened Lake Waikaremoana bookings at 9:30 am on Wednesday 20 May 2026 for stays from 1 July 2026 to 30 June 2027, and it names the walk as one that often has space available. DOC has not published 2027/28 opening dates on the pages read.",
        "The fees are the same for New Zealanders and international visitors, and DOC says they apply all year. A hut night is $35 and a campsite night is $19 per adult, with $18 and $9 for children. DOC says there is no fee to enter Te Urewera or to do a day walk on the track. The New Zealand infant rate for ages 0 to 4 is free, and a footnote on DOC's pricing page says international children aged 0 to 4 are free on this track. Transport is not part of the booking: DOC says the walk is one-way with the ends of the track around 30 km apart, and that you need to book transport to the start and from the end of the track.",
      ], ["One fee for New Zealanders and visitors", "Book huts and campsites before you start", "Book transport separately"], {
        caption: "Per person per night, NZ dollars including GST, from DOC's Lake Waikaremoana Great Walk page and Great Walks pricing page, read 21 October 2026. DOC lists the same rates all year.",
        head: ["Who", "Hut night", "Campsite night"],
        rows: [
          ["Adult, New Zealand (18+)", "$35", "$19"],
          ["Adult, international (18+)", "$35", "$19"],
          ["Child, New Zealand (5 to 17)", "$18", "$9"],
          ["Child, international (0 to 17)", "$18", "$9"],
          ["Infant, New Zealand (0 to 4)", "Free", "Free"],
        ],
      }),
      s("Te Urewera, tikanga and the rules on the track", [
        "DOC says Te Urewera is recognised in New Zealand law as a living person, is spoken for and governed by a board, and that care for Te Urewera, including the tracks and facilities, is carried out by Te Uru Taumatua, Ngāi Tūhoe's operational entity. DOC describes the walk as passing through the home and ancestor of the Tūhoe people and asks all manuhiri (visitors) to respect the tikanga of the lake and follow the Care for Nature (Manaakitanga Te Urewera) principles. If you are unsure how best to respect Te Urewera, DOC suggests calling in at the Te Urewera Visitor Centre at Te Kura Whenua and speaking to the team there.",
        "DOC's page says no dogs or other domestic animals are permitted on the track, to protect ground-dwelling birds. There are no rubbish facilities, so take everything you bring in out again. Fires can be used for cooking or warmth unless a temporary fire ban applies, and DOC says a portable stove is a better option. Hunting is by permit only. DOC says the lake lies between 600 and 1200 m, and that cold, snow, strong wind and heavy rain can occur at any time of year, including summer, so call in at the visitor centre for weather and track conditions, fill in hut books as you go and carry a distress beacon.",
      ], ["No dogs or other domestic animals", "Pack in, pack out: no rubbish facilities", "Snow and heavy rain are possible in summer"]),
      s("Getting to Onepoto and Hopuruahine", [
        "DOC says Waikaremoana is approached on State Highway 38, which runs from Waiotapu in the north to Wairoa, and passes Te Karetu, where the Te Urewera Visitor Centre (6249 Lake Road, SH38) and the Waikaremoana Holiday Park are. The highway is gravel for about 90 km between Murupara and Tuai, which DOC says may be difficult for lower vehicles, and it recommends a 4WD or SUV. Onepoto is about 20 minutes' drive from Te Karetu. Hopuruahine is about half an hour away, and DOC says the Hopuruahine road is not currently suitable for 2WD vehicles, which may affect access to the landing car park 2 km off the main road. The Holiday Park page gives 57 km and about one hour from Wairoa, and 163 km and about 3 hours from Rotorua on the Te Urewera Rainforest Route.",
        "The Ngāi Tūhoe alerts page, read on 21 October 2026, carried notices of road repair works on SH38 around Ruātahuna and Lake Waikaremoana in April 2026 and of daytime closures between the Holiday Park and Tuai, with no detours, running from 2 March to 5 June 2026. The Te Urewera safety page listed no current alerts, and NZTA's journey planner page for SH38 did not load for scripts, so check NZTA before you drive. On parking, DOC says it can be very busy in summer and is at the owner's risk. Spaces are at Onepoto, at Hopuruahine Landing and by the lakeside near the Holiday Park entrance, where parking is free for up to 10 days. The visitor centre has day-time parking only and no multi-day parking.",
      ], ["SH38 is gravel for about 90 km", "Hopuruahine road: not suitable for 2WD, per DOC", "Visitor centre: no multi-day parking"]),
      s("Water taxi, shuttles and the Whananui drop-off", [
        "DOC says Tūhoe offers a water taxi to and from each end of the Great Walk, and to individual huts and campsites around the lake, out of Te Urewera Visitor Centre at Te Kura Whenua. It is usually available from October to April and not in winter, and DOC says to book early and to check Ngāi Tūhoe's website or phone +64 6 837 3803. The Te Urewera website names Waiwai Xpres as the water taxi, calls it the only licensed service, and says it also offers pack transfers. It names Tira 38 as a shuttle connecting Rotorua, Gisborne, Wairoa and Te Urewera, with scheduled and private transfers.",
        "The Te Urewera website says the water taxi stops at Whananui, which is 5 km short of Hopuruahine. To walk the whole 46 km, it says to book a land taxi to or from Hopuruahine Landing Road, and if you are happy to skip the final 5 km, the water taxi will do. Its own distances give Waiharuru to Whananui as 6 km and 2 hours 30 minutes, and Whananui to Hopuruahine as 5 km and 1 hour 40 minutes. This page gives no water taxi or shuttle prices or timetables, because none were readable on the pages used: the Waiwai Xpres booking site blocked script access, so ask the operators or the visitor centre.",
      ], ["Water taxi usually runs October to April", "Whananui is 5 km short of Hopuruahine", "Prices and timetables: ask the operators"]),
      s("Camping near the lake: the Holiday Park, Te Taita a Makoro and Wairoa", [
        "DOC says you can stay at the nearby Waikaremoana Holiday Park before or after the walk. Its DOC page lists 26 non-powered or tent sites, 32 powered sites, chalets, lakeside cabins, tourist flats, a bunkhouse and a family whare, with a kitchen and dining room, a shop with snacks and ice, and petrol and diesel. DOC says bookings are required, the DOC Campsite Pass cannot be used there, and no pets are allowed. It is 9.3 km from Onepoto, a 25 to 40 minute drive on a gravel road, and the page says Wairoa, one hour away, has supermarkets, with fuel also at Ruatahuna. DOC says mobile coverage is poor at the park, with wifi at the shop and the visitor centre.",
        "Another option in the Wairoa i-SITE's listings is Te Taita a Makoro DOC Campsite, a basic campsite of 10 non-powered sites 4 km north of the lake beside SH38, with no booking and stays of up to 3 nights, on a gravel, narrow and winding access. Wairoa District Council's freedom camping page says self-contained camping is permitted on council land unless it is prohibited, and that a tent or a vehicle that is not certified self-contained may camp only in the restricted areas, Clyde Court in Wairoa and Oraka on the Mahia Peninsula. The pages read named no camping at Tuai, and the council page carried a boil water notice for the Tuai water scheme when read.",
      ], ["Holiday Park: 26 tent sites, 32 powered", "Te Taita a Makoro: up to 3 nights, no booking", "Wairoa is about 1 hour away"]),
      s("Using KiwiCamping at Lake Waikaremoana", [
        "In KiwiCamping's DOC data (11 August 2026) the East Coast region holds 38 huts and 14 campsites, among them the Panekire, Waiopaoa, Marauiti and Waiharuru huts and the serviced Waikaremoana Holiday Park. Every entry carries DOC's fee notes and facilities and a link back to DOC's page, and Waiharuru, at 40 bunks, is the biggest hut listed for the region. A seven-day forecast sits on each place page, handy on a lake where DOC warns of snow and heavy rain in any season. Reception around the lake is poor, per DOC, so look up the details and guides you need before you leave Wairoa: those stay readable on the phone, while map tiles, routing, weather and photos have to load over a connection.",
        "Build a trip from the nights you have booked: the huts or campsites on the track, a Holiday Park or Wairoa night either side, and the water taxi or shuttle day. Drag the stops into order, give each a date, and put every booking reference in a note, and the app shows the distance of each leg, including the gravel run in along SH38. Hut and campsite reservations are made with DOC and water taxi seats with the operator, never inside KiwiCamping. Free to download, with in-app purchases.",
      ], ["Save each night with its booking reference", "Check the forecast at each stop", "Book with DOC and the operators, not in the app"], undefined, true),
    ],
    sources: [
      { label: "DOC: Lake Waikaremoana Great Walk", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/east-coast/places/te-urewera/things-to-do/tracks/lake-waikaremoana-great-walk/" },
      { label: "DOC: Lake Waikaremoana area", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/east-coast/places/te-urewera/lake-waikaremoana-area/" },
      { label: "DOC: Waikaremoana Holiday Park", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/east-coast/places/te-urewera/things-to-do/campsites/waikaremoana-holiday-park/" },
      { label: "DOC: Te Urewera Visitor Centre at Te Kura Whenua", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/east-coast/places/te-urewera/te-urewera-visitor-centre-at-te-kura-whenua/" },
      { label: "DOC: Great Walks pricing", url: "https://www.doc.govt.nz/about-us/our-role/managing-conservation/recreation-management/great-walks-management/pricing/" },
      { label: "DOC media release (26 March 2026): Great Walk bookings open from 12 May", url: "https://www.doc.govt.nz/news/media-releases/2026-media-releases/ready-set-naturing-doc-great-walk-hut-and-campsite-bookings-open-from-12-may/" },
      { label: "Te Urewera: Waikaremoana Great Walk, water taxi and shuttles", url: "https://teurewera.iwi.nz/connection/enjoy-te-urewera/" },
      { label: "Te Urewera: be safe and current alerts", url: "https://teurewera.iwi.nz/connection/be-safe/" },
      { label: "Ngāi Tūhoe: alerts and important information", url: "http://www.ngaituhoe.iwi.nz/alerts-and-important-information" },
      { label: "Wairoa i-SITE: Te Taita a Makoro DOC Campsite", url: "https://www.visitwairoa.co.nz/freedom-camping/te-taita-a-makoro-doc-campsite/" },
      { label: "Wairoa District Council: freedom camping", url: "https://wairoadc.govt.nz/our-district/freedom-camping" },
    ],
  }),
  a({
    slug: "paparoa-track-huts-booking-2026-27",
    publishAt: "2026-12-13",
    title: "Paparoa Track 2026/27: Huts, Booking, Fees and Mountain Biking",
    description: "Paparoa Track for 2026/27: 55 km in 2 to 3 days, the three huts priced separately from $50 to $117, no campsites, how to book, riding rules and the Punakaiki exit for bikes, the Pike29 Memorial Track and shuttles from Blackball and Punakaiki.",
    category: "Camping guides",
    region: "West Coast",
    places: ["Blackball", "Smoke-ho car park", "Ces Clark Hut", "Moonlight Tops Hut", "Pororari Hut", "Punakaiki"],
    imageAlt: "Two mountain bikers in blue and red jackets riding a narrow gravel track along a ridge through tussock and alpine scrub on the Paparoa Range",
    related: ["nz-great-walks-2026-27-huts-campsites-booking-fees", "west-coast-south-island-road-trip", "doc-huts-new-zealand-guide", "doc-hut-rules-etiquette"],
    hubs: ["huts/west-coast", "camping/west-coast"],
    intro:
      "The Paparoa Track is 55 km on foot, which DOC says takes 3 days, and 56.2 km by mountain bike, which takes 2 days, with three Great Walk huts, Ces Clark, Moonlight Tops and Pororari, and no campsites. Each hut is priced separately: from 1 October to 30 April an adult night is $50, $78 and $61 for New Zealanders and $76, $117 and $92 for international visitors. DOC opened 2026/27 bookings on Tuesday 12 May 2026, before any other Great Walk. Mountain bikers must leave by a different car park from walkers, and e-bikes are not allowed.",
    sections: [
      s("The track: 55 km, 2 to 3 days, Blackball to Punakaiki", [
        "DOC says the Paparoa Track crosses the Paparoa Range through alpine tops, limestone karst landscapes and rainforest, 55 km one way on foot over 3 days and 56.2 km by bike over 2 days, and grades it intermediate for walking and Grade 4 for biking. It starts at Smoke-ho car park near Blackball and ends at Punakaiki. The first part follows the Croesus Track, built between 1881 and 1899 to reach gold mines in upper Blackball Creek, and DOC says that part is much rougher than the rest because of its historic nature. DOC's page says the track is a memorial to the 29 men who died in the Pike River Mine explosion on 19 November 2010, created with the families, DOC and Ngāti Waewae.",
        "The track runs through Paparoa National Park, where DOC says the Ngāti Waewae hapū of Ngāi Tahu are the kaitiaki, the guardians of the area's native species and ecosystems. The hardest walking day is the middle one, 19.1 km between Moonlight Tops and Pororari huts, which DOC times at 5 to 7 hours. There is no cellphone coverage on most of the track, according to DOC, and you cannot buy food on it, so carry what you need.",
      ], ["55 km on foot, 56.2 km by bike", "Three huts, no campsites", "Start at Smoke-ho, finish at Punakaiki"], {
        caption: "Distances and times from DOC's Paparoa Track page, read 21 October 2026. DOC gives different end points for walkers and bikers.",
        head: ["Section", "Distance", "Walking", "Mountain biking"],
        rows: [
          ["Smoke-ho car park to Ces Clark Hut", "10.3 km", "4 to 5 hours", "2 to 3 hours"],
          ["Ces Clark Hut to Moonlight Tops Hut", "9.7 km", "3 hours", "1 hour 30 minutes to 2 hours 30 minutes"],
          ["Moonlight Tops Hut to Pororari Hut", "19.1 km", "5 to 7 hours", "4 to 5 hours"],
          ["Pororari Hut to Pororari River car park (walkers)", "16 km", "4 to 5 hours", "Not for bikes"],
          ["Pororari Hut to Waikori Road car park (bikers)", "17.1 km", "Walkers can also use this exit", "2 hours 30 minutes to 3 hours 30 minutes"],
        ],
      }),
      s("The three huts and why there is no camping", [
        "DOC lists three Great Walk huts on the Paparoa Track: Ces Clark Hut with 16 bunk beds, Moonlight Tops Hut with 20 and Pororari Hut with 20. DOC says the huts have bunks, mattresses, heating, gas cooktops, toilets and a water supply, and that a DOC ranger may be present, but they do not provide food, cooking utensils or showers. The hut pages list non-flush toilets and untreated tap water to boil before use, and lighting at Moonlight Tops and Pororari. DOC says there are no campsites on the track, and its track guide says no camping within 500 m of the track, no fires except in fireplaces inside huts and no dogs.",
        "You also cannot camp before you start: DOC says you need accommodation the night before your walk, and camping at Smoke-ho car park is not permitted. DOC's gear list asks for a 3 to 4 season sleeping bag, an emergency shelter for flooded rivers or bad weather and a distress beacon, and warns that hut bunkrooms do not have heating and can be cold, although each hut page lists heating. Croesus Top Hut, just before Ces Clark, is kept for historic purposes and you cannot stay there, though DOC says it can be used for shelter in an emergency.",
      ], ["Huts: Ces Clark 16, Moonlight Tops 20, Pororari 20 bunks", "Camping at Smoke-ho car park is not permitted", "Croesus Top Hut is not for staying in"]),
      s("Booking, fees and Backcountry Hut Passes", [
        "DOC says bookings are open for the 2026/27 season and that all three huts must be booked in advance, with a penalty or being turned away if you have no valid booking. DOC's 26 March 2026 release listed the Paparoa Track first, opening at 9:30 am on Tuesday 12 May 2026 for stays from 1 July 2026 to 30 June 2027. Fees are charged per person per night, and DOC says there are no fees to day walk or ride the track or to enter Paparoa National Park. The New Zealand price needs proof of eligibility. Adding DOC's 1 October to 30 April adult fees for the three huts gives $189 for New Zealanders and $285 for international visitors.",
        "Child fees are set per hut: from 1 October to 30 April a child night at Ces Clark is $25 for New Zealanders and $38 for international children, and DOC lists New Zealand infants aged 0 to 4 as free. Backcountry Hut Passes can be used at Ces Clark Hut but not at Moonlight Tops or Pororari huts. DOC says to book Ces Clark online, then email paparoavc@doc.govt.nz with your booking reference and a scanned copy of the pass to claim a refund. DOC's page publishes no 2027/28 opening dates.",
      ], ["Each hut is priced separately", "Passes work at Ces Clark only", "No fee to enter the national park"], {
        caption: "Adult fee per person per night, NZ dollars including GST, from DOC's Paparoa Track page and Great Walks pricing page, read 21 October 2026. DOC lists New Zealand infants aged 0 to 4 as free.",
        head: ["Hut", "1 October to 30 April, NZ / international", "Rest of the year, NZ and international"],
        rows: [
          ["Ces Clark Hut", "$50 / $76", "$50 (1 May to 30 September)"],
          ["Moonlight Tops Hut", "$78 / $117", "$61 (1 May to 30 June), $50 (1 July to 31 August), $61 (September)"],
          ["Pororari Hut", "$61 / $92", "$50 (1 May to 30 September)"],
        ],
      }),
      s("Choosing your nights, direction and weather", [
        "DOC gives three options. For 1 or 2 nights to Pororari Hut there is a separate Pororari Hut Track page. For 2 nights, stay at Moonlight Tops and Pororari huts. A 3 night trip uses Ces Clark, Moonlight Tops and Pororari. DOC says staying at Ces Clark and Pororari only is not feasible, because it is 28.8 km and a 10 hour walk between them. On direction, DOC's track guide says it is best to hike or mountain bike the Paparoa Track from south to north, starting at Smoke-ho car park near Blackball and finishing at Punakaiki. The track pages read state no rule that makes one direction compulsory.",
        "DOC says annual rainfall averages around 6,000 mm, and that heavy rain, snow, ice, fog and strong winds are possible at all times of the year, especially on exposed sections. Some Pororari Valley sections may become impassable in very heavy rain, and DOC says not to travel between Pororari Hut and the Punakaiki car parks then, but to wait in the hut. Landslides and rock falls can occur without warning, particularly during and after heavy rain, and DOC adds that Ongaonga, the native tree nettle, grows along the Pororari Valley and stings painfully.",
      ], ["Skipping Ces Clark: 2 nights, Moonlight Tops and Pororari", "DOC's guide says south to north is best", "Wait in Pororari Hut if the valley floods"]),
      s("Mountain biking and the Pike29 Memorial Track", [
        "DOC calls the Paparoa Track an Advanced Grade 4 mountain bike ride and says to plan one night on the track. The section from Smoke-ho car park to Ces Clark Hut is a tough ride, rough and narrow in places, and DOC says most riders will find some sections easier to walk. The rules are DOC's: e-bikes are not allowed, because they are prohibited under the Paparoa National Park Management Plan; riding at night is not allowed, to protect nocturnal species; and the track is shared use, with DOC's guide saying bikers must give way to walkers. At the end of the Pororari section, DOC says walkers can exit to the Pororari River car park but mountain bikers must exit through the Punakaiki River valley to Waikori Road car park.",
        "The Pike29 Memorial Track is 11.6 km from the former Pike River Mine site to the junction with the Paparoa Track, a Grade 4 shared-use track that climbs about 800 m. DOC gives 5 to 6 hours uphill and 3 hours 30 minutes to 4 hours 30 minutes downhill on foot, and 3 hours 30 minutes to 4 hours uphill and 1 to 2 hours downhill by bike. Riding from Smoke-ho car park to the Pike29 car park is 37 km and 6 hours 30 minutes to 9 hours 30 minutes, according to DOC. Its road, off Atarau Road via Logburn Road, is narrow, windy gravel with a small car park, and DOC says buses and long campervans are not recommended.",
      ], ["No e-bikes and no night riding", "Bikers exit at Waikori Road car park", "Bikers give way to walkers"]),
      s("Getting to the ends, shuttles and parking", [
        "DOC lists three road access points: Smoke-ho car park at the end of Blackball Road, 8 km north of Blackball; Pororari River Track car park on SH6, 1.2 km north of Pancake Rocks; and Waikori Road car park on SH6, 2.4 km south of Pancake Rocks. The nearest towns are Blackball, Greymouth and Punakaiki. DOC's park page puts Westport 55 km north of Punakaiki and Greymouth 43 km south, says Intercity buses serve the area and says there is no petrol station in Punakaiki. DOC recommends leaving your car at your accommodation, because Smoke-ho car park is small and for day use only, and it warns of cars being broken into at the Smoke-ho, Waikori Road and Pororari River car parks, so leave no valuables.",
        "DOC says several operators run shuttles to and from the track and links West Coast Tourism's track services list. That list names Paparoa Shuttles, GOTRACKS West Coast Shuttles, Paparoa Track Shuttles at Punakaiki Beach Camp, Buller Adventures, Coast Outdoors in Westport and Coastwide Helicopters, which lists heli bike lifts from Greymouth. Punakaiki Beach Camp's own site says its shuttle takes you to the Blackball track start, and that it offers car relocations and free secure parking. This page gives no shuttle prices, because the figures on the listing were not clear, so check each operator.",
      ], ["Smoke-ho car park: small, day use only", "Leave no valuables in the car parks", "Shuttles run from Punakaiki and Greymouth"]),
      s("Where to stay before and after: Punakaiki, Greymouth and Blackball", [
        "Punakaiki Beach Camp's own site lists campsites, cabins and holiday houses beside the Pororari River, with a communal kitchen, and runs the Paparoa Track shuttles above. Grey District Council's list of registered camping grounds includes Greymouth Seaside Top 10 Holiday Park at 2 Chesterfield Street, Greymouth KIWI Holiday Park and Motels at 318 Main South Road, Coast Autos Central Motorhome Park at 117 Tainui Street and Rapahoe Beach Holiday Camp at 10 Hawken Street, Rapahoe. The council recommends a registered camping ground if you are not self-contained. DOC names Blackball as a nearest town, and no official accommodation page for it was read for this guide.",
        "Grey District Council's freedom camping FAQ says self-contained vehicles can camp on council-controlled land except in listed areas, which include the McEwen Park area in Blackball and the McMillan Road area and Colville Close in Punakaiki. It limits stays to two consecutive nights in a location and says uncertified self-contained vehicles face $400 fines from 7 June 2026. For the drive along the coast, see KiwiCamping's West Coast road trip guide, and check signs on the ground.",
      ], ["Council: use a registered ground if not self-contained", "Two consecutive nights on council land", "No camping at Smoke-ho car park"]),
      s("Using KiwiCamping on the Paparoa Track", [
        "The West Coast part of KiwiCamping's DOC data (11 August 2026) holds 140 huts and 14 campsites, and three of the huts are on this track: Ces Clark with 16 bunks, Moonlight Tops with 20 and Pororari with 20. Fee notes, facilities and DOC's own link come with each one, and the filters thin out what the map shows. Open a hut's seven-day forecast before a ridge day, since DOC lists rain, snow and fog as possible all year. With no signal on the range, the place details, saved places and guides you stored stay on the phone, whereas map tiles, routing, weather and photos stay blank until reception returns.",
        "Plan the Paparoa as a short trip of its own: a night at Punakaiki or Greymouth before, up to three hut nights, and a night after. Order the stops, give each a date, and keep your DOC booking references and shuttle times in the notes. The app shows the distance between legs for the drive to Blackball or Punakaiki. Huts are booked through DOC and shuttles through the operators. Free to download, with in-app purchases.",
      ], ["Save each night with its booking reference", "Check the forecast for each hut", "Reserve on DOC's site, not in the app"], undefined, true),
    ],
    sources: [
      { label: "DOC: Paparoa Track", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/west-coast/places/paparoa-national-park/things-to-do/tracks/paparoa-track/" },
      { label: "DOC: Paparoa Track guide (PDF)", url: "https://www.doc.govt.nz/globalassets/documents/parks-and-recreation/tracks-and-walks/west-coast/paparoa-track-guide.pdf" },
      { label: "DOC: Pike29 Memorial Track", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/west-coast/places/paparoa-national-park/things-to-do/tracks/pike29-memorial-track/" },
      { label: "DOC: Paparoa National Park", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/west-coast/places/paparoa-national-park/" },
      { label: "DOC: Great Walks pricing", url: "https://www.doc.govt.nz/about-us/our-role/managing-conservation/recreation-management/great-walks-management/pricing/" },
      { label: "DOC media release (26 March 2026): Great Walk bookings open from 12 May", url: "https://www.doc.govt.nz/news/media-releases/2026-media-releases/ready-set-naturing-doc-great-walk-hut-and-campsite-bookings-open-from-12-may/" },
      { label: "West Coast Tourism: track services", url: "https://westcoast.co.nz/visit/plan-your-trip/transport/track-services" },
      { label: "Punakaiki Beach Camp", url: "https://www.punakaikibeachcamp.co.nz/" },
      { label: "Grey District Council: registered camping grounds", url: "https://www.greydc.govt.nz/05our-district/freedom-camping/camping-grounds" },
      { label: "Grey District Council: freedom camping FAQs", url: "https://www.greydc.govt.nz/05our-district/freedom-camping/faqs" },
    ],
  }),
];
