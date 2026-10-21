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
];
