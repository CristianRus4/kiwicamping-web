import { makeArticle as a, type Article, type ArticlePriceTable, type ArticleSection } from "@/lib/article-model";

const s = (heading: string, body: string[], tips?: string[]): ArticleSection => ({ heading, body, tips });
const table = (note: string, rows: ArticlePriceTable["rows"]): ArticlePriceTable => ({ asOf: "2026-08-18", note, rows });
const rbnz = { label: "Reserve Bank of New Zealand exchange rates", url: "https://www.rbnz.govt.nz/statistics/series/exchange-and-interest-rates" };

/**
 * Articles that already rank on campingapp.nz, carried forward at their existing URLs.
 *
 * These are deliberately fuller than the /guides/ articles: each one replaces a live page that
 * already holds a position, so the rebuild has to add depth rather than remove it. Regional detail,
 * statutory references and figures from the published versions are preserved here.
 */
export const migratedArticles: Article[] = [
  a({
    slug: "freedom-camping-rules-new-zealand",
    legacyPath: "/freedom-camping-rules-nz.html", hubs: ["freedom-camping"],
    title: "Freedom camping rules in New Zealand, region by region",
    description: "The Freedom Camping Act, council bylaws, self-containment certification and what enforcement actually looks like on the ground.",
    category: "Rules & safety",
    region: "New Zealand",
    readTime: 15,
    places: ["Council land", "DOC land", "NZTA land", "Northland", "Queenstown-Lakes", "Fiordland"],
    imageAlt: "Authorised freedom camping sign beside a campervan",
    intro:
      "Freedom camping in New Zealand is legal where it is permitted and an infringement everywhere else, and the line between the two is drawn by whichever body manages the land under your wheels. The Freedom Camping Act 2011 sets a national frame, but councils write their own bylaws, so a rule you learned in one district tells you very little about the next one.",
    sections: [
      s("What freedom camping actually means here", [
        "Freedom camping is staying overnight on public land outside a formal campground, where the Freedom Camping Act 2011, a council bylaw or the landowner permits it. In practice it covers council reserves, designated car parks, lay-bys and some conservation land. It does not cover private farmland, forestry roads or national park huts, and it is a description of the location rather than a promise that the night is free.",
        "The Act covers camping outside a camping ground within 200 metres of an area accessible by motor vehicle, within 200 metres of the sea or a harbour, or on or within 200 metres of a formed road or a Great Walks track. Beyond that you are generally in backcountry camping territory, which follows DOC's rules instead. Either way, the sign at the entrance is the final authority and overrides any app, PDF or map layer, including this page.",
      ], ["Freedom means location, not price", "Signage overrides every app", "200 m of a formed road is the usual test"]),
      s("Self-containment: the transition is now complete", [
        "The rules changed in stages. The national green warrant system opened on 7 December 2023 and requires a toilet fixed inside the vehicle. Rental vehicles needed green warrants from 7 December 2024, and the transition for privately owned vehicles ended on 6 June 2026. Since 7 June 2026 a blue warrant no longer makes a vehicle self-contained for freedom camping, whatever expiry date it shows, so a van carrying only a blue sticker is treated as uncertified.",
        "Certification is regulated by the Plumbers, Gasfitters and Drainlayers Board, and key details of every certified vehicle go onto a national register that enforcement officers check on the spot. If you are hiring or buying, use the register's public vehicle search to confirm the certificate is current and matches the plate rather than trusting the card on the glass, and read the card for how many people it covers. On council land, camping with more people than the vehicle is certified for is a separate $400 infringement.",
      ], ["Blue warrants stopped counting on 7 June 2026", "Look the vehicle up on the national register", "Certified occupancy must match your party"]),
      s("Enforcement and what it costs", [
        "Most freedom camping breaches carry a $400 infringement fee: camping where a bylaw or DOC notice prohibits or restricts it, using an uncertified vehicle where self-containment is required, or carrying more people than the certificate allows. Not displaying a warrant card is $200, refusing to leave when an officer tells you to is $600, and depositing waste or damaging the area is $800. On council and conservation land, officers can also seize and impound a vehicle where that is reasonable and necessary, for example to protect public health or safety, significant wildlife or access, or to stop an ongoing offence; if you are with the vehicle, they must first tell you to stop and warn you it can be taken.",
        "Enforcement officers check the warrant card, the plate and the posted stay limit. When the vehicle is a rental, the notice usually goes to the company, and under the Freedom Camping Act a hire agreement can make you liable for the fee; if it authorises a card debit, the company must send you the notice within 5 working days before charging the card you left at pick-up, and you can still ask for a court hearing.",
      ]),
      s("Council land versus conservation land", [
        "Council bylaws set stay limits, define self-contained-only zones and prohibit camping outright in many urban areas. They vary enormously: some districts publish a handful of permitted sites, others operate a general permission with named exclusions. Because each bylaw is a local instrument, the only reliable source is the council whose boundary you are inside.",
        "On conservation land, freedom camping is generally allowed except where it is prohibited or restricted, but national parks and many reserves require you to use designated DOC campsites or recognised backcountry areas instead. DOC publishes alerts for closures, and those change faster than third-party data refreshes.",
      ]),
      s("North Island, in outline", [
        "Northland councils use designated zones with short stay limits, so check the Far North, Whangārei or Kaipara bylaw for the site. Auckland allows certified self-contained vehicles on most council roadsides and car parks for up to two nights, leaving by 9am, but reserves, regional parks and 58 listed areas are prohibited and 20 more are restricted. Waikato and Bay of Plenty mix limited council reserves with a strong holiday park network, and Rotorua's lakeside sites are signed tightly.",
        "Gisborne and Hawke's Bay permit specific beaches, sometimes with an overnight permit that has to be arranged in advance. Through Taranaki, Manawatū-Whanganui and Wellington, coastal parking is frequently restricted to certified vehicles with short stay limits, and Wellington City enforces no-camping zones around the central city, so plan for a harbour-side or Hutt Valley alternative rather than improvising near the terminal.",
      ], ["Auckland and Wellington CBDs are largely prohibited", "Some east coast sites need a permit in advance", "Two nights is a common maximum"]),
      s("South Island, in outline", [
        "Tasman's 2025 bylaw limits freedom camping to designated sites for certified self-contained vehicles, and tent freedom camping is not allowed on council land. The Marlborough Sounds are largely served by DOC campsites, so book ahead, and Kaikōura's designated sites fill early in summer. Christchurch allows certified self-contained vehicles outside its listed prohibited and restricted areas and bans freedom camping in the central city, while the Mackenzie and Waitaki districts are more permissive but firm about certification.",
        "Otago is strict where demand is highest: Queenstown-Lakes and Central Otago enforce defined zones, and Dunedin offers coastal reserves with two-night limits that fill before dusk. In Southland and Fiordland, freedom camping near Milford Sound is prohibited and DOC campsites are the answer; Southland District's bylaw sets out where you can stay, which is worth checking before you are tired and looking.",
      ]),
      s("A workable routine on arrival", [
        "Research narrows the options, but the decision happens at the entrance. Pull in, find the freedom camping board, read the stay limit and the vehicle requirement, and photograph the sign. It takes a minute and it is the evidence that settles any later dispute. If the sign and your app disagree, the sign wins, every time.",
        "Councils install temporary restrictions after floods, slips and events, and those appear on the ground long before they reach any dataset. If a site is full, do not create an overflow row along the access lane; move to a paid campground instead. Holding one legal paid option in reserve is what stops a tired driver making an expensive decision at 9pm.",
      ], ["Photograph the sign", "Hold a paid fallback", "Never form an overflow row"]),
    ],
    sources: [
      { label: "MBIE responsible freedom camping", url: "https://www.mbie.govt.nz/immigration-and-tourism/tourism/tourism-projects/freedom-camping" },
      { label: "DOC freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
      { label: "Self-contained vehicle register", url: "https://www.nzscv.co.nz/" },
      { label: "Plumbers, Gasfitters and Drainlayers Board", url: "https://www.pgdb.co.nz/" },
    ],
  }),

  a({
    slug: "freedom-camping-new-zealand-guide",
    legacyPath: "/free-camping-nz-legal.html", hubs: ["freedom-camping"],
    title: "Can you camp for free in New Zealand? Where it is legal and safe",
    description: "Which land types allow a free night, what certification you need, and the etiquette that keeps these places open.",
    category: "Camping guides",
    region: "New Zealand",
    readTime: 14,
    places: ["Council freedom camping areas", "NZTA rest areas", "DOC basic campsites", "Showgrounds", "Private land"],
    imageAlt: "Certified campervan at an authorised freedom camping area",
    intro:
      "Yes, free camping is still genuinely possible across Aotearoa, and it is also the part of a trip most likely to earn a $400 infringement. The difference comes down to understanding which kinds of land allow it, whether your vehicle meets the certification standard, and following an etiquette that most travellers never think about until a council closes a site.",
    sections: [
      s("Free and freedom are different words", [
        "Freedom camping describes where you are, outside a formal campground, not what you pay. Most authorised freedom camping areas cost nothing, and a few require a permit arranged in advance; a site that charges a camping fee is legally a camping ground. Conversely, some of the cheapest legal nights in the country are DOC basic campsites, which are designated DOC campsites that happen to be free.",
        "Getting this distinction right saves money and trouble. Travellers looking only for the word 'free' miss the $0 DOC sites entirely, and travellers assuming every freedom camping area is free occasionally discover a permit requirement after they have settled in.",
      ]),
      s("Where a free night is actually legal", [
        "Public reserves specifically signed for freedom camping are the most reliable option, and councils publish the lists. DOC operates a substantial number of basic campsites at no charge, typically with a long-drop toilet and an untreated water source, which are ideal if you are equipped to be self-sufficient. Some communities also provide designated car parks, gravel lay-bys or showgrounds where certified vehicles can stay a night or two.",
        "NZTA rest areas exist for driver fatigue rather than as campgrounds; a sleep break is a different thing from setting up camp, and local restrictions may still apply. Private land, a friend's paddock, a farm, a marae, counts as free camping when you have the owner's permission, which should be explicit rather than assumed. Never treat farmland or forestry roads as open by default.",
      ], ["DOC basic sites are often free", "Rest areas are for fatigue breaks", "Private permission must be explicit"]),
      s("The certification requirement", [
        "On most public land the default is that a vehicle used for freedom camping must be certified self-contained, unless the site is designated for vehicles that are not. Only a green warrant counts: the transition ended on 6 June 2026, and since 7 June a blue warrant has not made a vehicle self-contained for freedom camping, whatever expiry date it carries. Certification requires a toilet fixed inside the vehicle, so a car or van conversion with a portable toilet does not qualify.",
        "Camping without certification is possible: on council land, only at sites a bylaw designates for non-self-contained vehicles; on conservation land, anywhere a DOC notice does not prohibit camping or restrict it to certified vehicles. Campgrounds, holiday parks and most DOC campsites take uncertified vans too. If you are in a car, a tent or an uncertified van, plan around sites that specifically allow your setup rather than hoping a general area will do.",
      ]),
      s("The restrictions you should expect", [
        "Stay limits are short, commonly two to four nights, often with arrival and departure windows, commonly park after early evening, leave by mid-morning. Noise curfews apply at most urban sites. Councils in high-demand districts such as Queenstown-Lakes patrol freedom camping sites, and officers can check a vehicle's certification on the national register by its plate.",
        "Read the specific bylaw wording rather than a summary. Where a listing says permit required, the permit has to be arranged before you arrive, sometimes for a fee, and turning up without it is still an offence. Where it says no overnight camping, that applies regardless of how quiet or discreet you intend to be.",
      ], ["Expect 1–2 night limits", "Permits must be pre-arranged", "Patrols run at dusk and dawn"]),
      s("Etiquette is what keeps sites open", [
        "Free camping runs on public tolerance, and sites close when that tolerance runs out. Keep the footprint small: park within the marked bay, keep awnings and chairs in unless the signage allows otherwise, arrive without ceremony and leave early. Two vehicles is a sensible maximum at an urban freedom spot, and a convoy of six will end that site for everyone.",
        "Empty tanks at a dump station before you arrive rather than after you leave, because grey water odour is the single most common trigger for a complaint. Rotate destinations instead of settling into one spot for a week. If residents or kaumātua ask you to move on, move on courteously, the conversation that follows a refusal ends up in a council submission.",
      ]),
      s("Safety, not just legality", [
        "A legal site is not automatically a good one. Prefer places with other travellers present, avoid isolated lay-bys with a single blind entrance, and think about whether you could drive out quickly if you needed to. Park facing out where the site allows it.",
        "Check the forecast against the ground itself. River flats flood faster than people expect, exposed coastal car parks get uncomfortable in a southerly, and a site that is pleasant in February can be genuinely unsafe in a winter storm. Keep enough fuel to leave, and do not rely on reception being available to make that decision.",
      ], ["Prefer sites with others present", "Park facing out", "River flats flood quickly"]),
      s("A ninety-second check before you switch off", [
        "Read the sign and confirm the stay limit, the hours and whether certification is required. Confirm your warrant is current and covers the number of people staying. Check whether waste facilities exist here or whether you need to arrive already empty.",
        "Then look at the practical questions: is the ground firm, is anything overhead, can other vehicles get past you, and where is the nearest paid alternative if this turns out to be full or wrong. If any of those answers is unclear, the campground twenty minutes away is cheap insurance.",
      ]),
    ],
    sources: [
      { label: "MBIE freedom camping guidance", url: "https://www.mbie.govt.nz/immigration-and-tourism/tourism/tourism-projects/freedom-camping" },
      { label: "DOC freedom camping on conservation land", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
      { label: "Self-contained vehicle register", url: "https://www.nzscv.co.nz/" },
    ],
  }),

  a({
    slug: "self-contained-campervan-green-warrant",
    legacyPath: "/self-contained-vehicles-nz.html",
    title: "New Self-Containment Rules NZ 2026: Green Warrant Only",
    description: "Blue warrants stopped counting on 7 June 2026. What a green warrant needs, the $400 fine, rental vans and where uncertified vans can stay.",
    category: "Rules & safety",
    region: "New Zealand",
    readTime: 13,
    places: ["Green warrant card", "SCV register", "Certification authorities", "Council freedom camping areas", "DOC conservation land", "Holiday parks"],
    imageAlt: "Green self-contained vehicle warrant on a campervan",
    intro:
      "Since 7 June 2026, only a vehicle with a green warrant counts as self-contained for freedom camping in New Zealand. The blue warrant transition is over: a blue card or sticker no longer qualifies on any public land restricted to self-contained vehicles, whatever expiry date is printed on it. To earn a green warrant, a vehicle needs a toilet permanently fixed inside it, a sink and wastewater tank, fresh water, ventilation and secure rubbish storage for three days. Without one you can still stay at campgrounds, holiday parks, on private land with permission, at council sites set aside for non-self-contained vehicles, and on conservation land that no DOC notice restricts to certified vehicles.",
    sections: [
      s("Blue warrants ended on 7 June 2026", [
        "The Self-contained Motor Vehicles Legislation Act 2023 amended the Freedom Camping Act 2011 and moved certification to a national system run by the Plumbers, Gasfitters and Drainlayers Board. The green warrant system opened on 7 December 2023, rental vehicles had to switch by 7 December 2024, and privately owned vehicles had a transition period that ran until 6 June 2026. From 7 June 2026 the Board is explicit: vehicles with the old blue warrant cannot be used for freedom camping.",
        "That makes the expiry date on a blue card irrelevant. A blue warrant issued in 2023 with years left to run stopped counting on the same day as one that was about to lapse. Many older conversions relied on a portable toilet that could be lifted out, and those never qualified for green certification. If your vehicle still carries only a blue sticker, treat it as not self-contained until a certification authority has inspected it and issued a green card.",
      ], ["Blue warrants stopped counting on 7 June 2026", "The printed expiry on a blue card no longer matters", "Rental vehicles needed green warrants from 7 December 2024"]),
      s("What a green warrant requires", [
        "The Plumbers, Gasfitters, and Drainlayers (Self-Contained Vehicles) Regulations 2023 set eight requirements: a water supply system that keeps water from contamination, a fixed toilet, a wastewater system that holds both grey and black water, a sink that drains to the wastewater tank, a clean way to load water, a way to empty wastewater at a proper outfall, secure rubbish storage and ventilation. Each has to work for at least three days for the maximum number of people the vehicle is certified for.",
        "The toilet is the part that ruled out most older vans. It must be permanently fixed to the vehicle and usable inside it, so a portable unit stored in a cupboard does not count. Size alone does not decide the outcome: the Board says some smaller vehicles can meet every requirement and others will not, so each vehicle is assessed on its own fittings. A certificate of self-containment lasts for up to four years and expires on the date printed on it, or sooner if the vehicle's self-containment fittings are materially changed or the certificate is revoked.",
      ], ["Toilet must be fixed and usable inside the vehicle", "Systems must last three days for the certified occupancy", "Certificates run for up to four years"]),
      s("Rental campervans and the green warrant", [
        "Rental fleets moved first. During the final stage of the transition the law stopped recognising old-standard certification on vehicles owned by a rental company, so from 7 December 2024 any hired campervan sold as self-contained has needed a green warrant. A hired van without one is legal to drive and to sleep in at a campground, but it is not self-contained and cannot use self-contained-only freedom camping areas.",
        "Before you drive away, find the green warrant card displayed in the vehicle, check the expiry date covers the whole hire, and confirm how many people the certificate covers. Ask whether the toilet is fixed or portable if the listing is vague. Read the infringement clause in the hire agreement too: under the Freedom Camping Act, a hirer who agrees to it can be made to pay any freedom camping infringement fee, and the company can charge the card on file if the agreement authorises it, after sending you the notice within 5 working days.",
      ], ["Check the green card, expiry and certified occupancy", "No green card means not self-contained", "Fines can be charged to the hirer's card"]),
      s("Fines for camping without certification", [
        "Councils, the Department of Conservation and Land Information New Zealand enforce freedom camping on the land each of them manages. Under the Freedom Camping (Penalties for Infringement Offences) Regulations 2023, freedom camping in a vehicle that is not self-contained where certification is required carries a $400 infringement fee. Breaching a prohibition or restriction in a bylaw or DOC notice is also $400, and on council land so is camping with more people than the vehicle is certified for.",
        "Failing to display a warrant card is $200. Depositing waste or damaging the area while freedom camping is $800, and refusing to leave when an enforcement officer tells you to is $600. If an offence is prosecuted in court instead, the maximum fine is three times the infringement fee. Since 7 June 2026 a blue card is no defence: it does not make the vehicle self-contained, and it does not count as the warrant card you must display.",
      ]),
      s("Where a non-self-contained van can stay", [
        "The certification rule applies only to freedom camping on public land. The Board is clear that it does not apply at a campground, a holiday park or on private property where you have the owner's permission. Holiday parks are the most reliable option, with toilets and showers, and many have a dump station. Paid DOC campsites are camping grounds rather than freedom camping, and most take tents and uncertified vans, and a few DOC sites, such as the free Whakaipo campsite near Taupō, are for certified self-contained vehicles only, so check the campsite's DOC page.",
        "Some councils also designate sites for vehicles that are not self-contained, usually with a toilet nearby, a short stay limit and sometimes a permit or fee. On conservation land, DOC notices prohibit camping at some places and restrict others to certified vehicles, and DOC-administered scenic and recreation reserves need a designated campsite. KiwiCamping shows DOC's conservation-land notices as prohibited, restricted or permitted on the map, but the council bylaw or DOC notice is what decides the night, and not every restricted area is signposted.",
      ], ["Campgrounds and holiday parks need no certification", "Most DOC campsites take uncertified vans", "Some councils set aside non-self-contained sites"]),
      s("What the green warrant does not cover", [
        "A green warrant is not permission to camp. It does not override a bylaw that prohibits overnight stays, does not reserve a bay, and does not extend a stay limit. Where a council or DOC prohibits freedom camping, a certified vehicle is as prohibited as any other.",
        "It also says nothing about roadworthiness. Warrant of Fitness or Certificate of Fitness, registration, gas certification and the rental company's own conditions are separate obligations. The Board notes that modifications made to fit a fixed toilet or tanks may also need low volume vehicle certification, which is a different process from self-containment.",
      ], ["Certification is not permission", "WoF, registration and gas are separate", "Structural changes may need LVV certification"]),
      s("Getting a vehicle certified, and what it costs", [
        "Only a certification authority appointed by the Plumbers, Gasfitters and Drainlayers Board can issue a green warrant. The register site at certification.nzscv.co.nz lists the authorities operating in each region, and they are the people to ask whether your layout is likely to pass and what needs changing first. The Board expects inspections to be done in person, with remote inspection only in exceptional cases such as a vehicle in a remote area with no nearby authority.",
        "There are two charges. The certification authority sets its own inspection fee, and every certification also carries a $120 self-containment levy, including GST, which the authority passes to the Board. If you are converting a van, involve a certifier before you build: tank sizes, toilet mounting, sink drainage and ventilation are far cheaper to get right during the build than to retrofit.",
      ], ["Use a Board-appointed certification authority", "Budget the inspection fee plus the $120 levy", "Talk to a certifier before converting"]),
      s("Checking a warrant before you buy, hire or camp", [
        "Key details from every certificate go onto the national self-contained vehicle register, which enforcement officers can check on the spot, and the register has a public vehicle search. Look the vehicle up to confirm the certificate is current and belongs to that plate rather than trusting a card in the window, then read the card or certificate for how many people it covers.",
        "When buying a used campervan, ask for the certificate itself, check the vehicle details on it match the van in front of you, and price in recertification if the warrant expires soon. A van advertised as self-contained with only a blue sticker has not been self-contained for freedom camping since 7 June 2026, and the asking price should reflect the cost of a fixed toilet and a green inspection.",
      ]),
    ],
    sources: [
      { label: "Plumbers, Gasfitters and Drainlayers Board: self-contained vehicles for private owners", url: "https://www.pgdb.co.nz/self_contained_vehicles/private_vehicle_owners/" },
      { label: "Plumbers, Gasfitters and Drainlayers Board: rental vehicle companies", url: "https://www.pgdb.co.nz/self_contained_vehicles/rental_vehicle_companies/" },
      { label: "Plumbers, Gasfitters and Drainlayers Board media release, 3 June 2026: blue warrants expire", url: "https://www.pgdb.co.nz/media/xwqlsg2u/media-release-on-june-7-deadline.docx" },
      { label: "Self-contained vehicle register and certification authority search", url: "https://certification.nzscv.co.nz/" },
      { label: "DOC: freedom camping on conservation land", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
      { label: "Freedom Camping Act 2011: transitional provisions, rental hire agreements and offences", url: "https://www.legislation.govt.nz/act/public/2011/61/en/latest/" },
      { label: "Regulations extending the self-containment transition to June 2026 (SL 2025/67)", url: "https://www.legislation.govt.nz/secondary-legislation/pco-drafted/2025/67/en/latest/" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/secondary-legislation/pco-drafted/2023/136/en/latest/" },
      { label: "Plumbers, Gasfitters, and Drainlayers (Self-Contained Vehicles) Regulations 2023", url: "https://www.legislation.govt.nz/secondary-legislation/pco-drafted/2023/217/en/latest/" },
      { label: "Plumbers, Gasfitters, and Drainlayers Act 2006: certificates of self-containment", url: "https://www.legislation.govt.nz/act/public/2006/74/en/latest/" },
    ],
  }),

  a({
    slug: "doc-campsites-new-zealand-guide",
    legacyPath: "/doc-campsites-huts-guide.html", hubs: ["camping","huts"],
    title: "DOC Hut & Campsite Bookings 2026: How to Book, Fees, Dates",
    description: "Book DOC huts, campsites and Great Walks at bookings.doc.govt.nz. 2026/27 fees, Hut Pass vs Campsite Pass, first-come huts and what to do when full.",
    category: "Camping guides",
    region: "New Zealand conservation land",
    readTime: 14,
    places: ["bookings.doc.govt.nz", "Great Walk huts", "Serviced huts", "Standard huts", "Serviced campsites", "Standard campsites", "DOC visitor centres"],
    imageAlt: "Tent at a Department of Conservation campsite",
    intro:
      "DOC huts, campsites and Great Walks are booked on the Department of Conservation's own booking system at bookings.doc.govt.nz, or through a DOC visitor centre. You need a free account, you pay in full when you book, and the confirmation email is your proof on site. Bookings for the 2026/27 season, covering stays from 1 July 2026 to 30 June 2027, opened in May 2026. Most backcountry huts and many basic campsites cannot be booked at all and run first come, first served. Below: the fees, the two passes, which places need a booking and what to do when the one you want is full.",
    priceTable: {
      asOf: "19 October 2026",
      note: "DOC fees for the 2026/27 season, per person per night unless stated, including GST. Great Walk rates are for each track's peak season, which ends on 30 April and starts on 1 October on most tracks, 23 October on the Tongariro Northern Circuit, 27 October on the Kepler and 1 November on the Milford and Routeburn. Serviced huts are $25 from May to September, $28 on weeknights and $32 on Friday and Saturday nights from October to April, and $29 and $34 from December to February. Child rates (5 to 17) are about half and infants under 5 are free, except on Great Walks, where international children pay from birth on every track but Lake Waikaremoana. The price on the place's own DOC page is the one that applies.",
      rows: [
        { label: "Standard campsite, adult", nzdLow: 10, nzdHigh: 20, unit: "per night" },
        { label: "Serviced campsite, adult, unpowered", nzdLow: 25, unit: "per night" },
        { label: "Standard hut, adult", nzdLow: 15, unit: "per night" },
        { label: "Serviced hut, adult", nzdLow: 25, nzdHigh: 34, unit: "per night, by season" },
        { label: "Great Walk hut, NZ resident adult, peak season", nzdLow: 35, nzdHigh: 106, unit: "per night" },
        { label: "Great Walk hut, international adult, peak season", nzdLow: 35, nzdHigh: 152, unit: "per night" },
        { label: "Great Walk campsite, NZ resident adult, summer", nzdLow: 19, nzdHigh: 28, unit: "per night" },
        { label: "Great Walk campsite, international adult, summer", nzdLow: 19, nzdHigh: 42, unit: "per night" },
        { label: "Backcountry Hut Pass, adult", nzdLow: 160, unit: "12 months" },
        { label: "Campsite Pass, adult", nzdLow: 295, unit: "1 year" },
      ],
    },
    sections: [
      s("Where and how to book", [
        "Go to bookings.doc.govt.nz, create an account and log in before you search. Find the hut, campsite or Great Walk, choose dates and party size, add the vehicle registration for a campsite, and pay by Visa or Mastercard. Full payment is taken at the time of booking and every price includes GST. DOC visitor centres can book many of the same places in person or by phone, for a $10 service fee.",
        "The confirmation email is the booking. Download or print it before you leave reception, along with any pass, because rangers and hut wardens can ask for it and most DOC huts and many campsites have no signal. Bunks in bookable huts are not allocated, so a booking buys a bed rather than a particular one, and campsite bookings without numbered sites let you pick from whatever pitches are free when you arrive.",
      ], ["Create and test your account before opening day", "Pay in full at booking, Visa or Mastercard", "Save the confirmation for use without signal"]),
      s("Great Walks 2026/27: when bookings opened and what is left", [
        "DOC opened 2026/27 Great Walk bookings in a staggered run: Paparoa Track on 12 May, Milford on 13 May, Abel Tasman Coast on 14 May, Routeburn on 15 May, Kepler on 19 May, Heaphy, Whanganui Journey and Lake Waikaremoana on 20 May, and Tongariro Northern Circuit and Rakiura on 21 May, each at 9:30 am. Other huts and lodges opened on 12 May, North Island campsites on 14 May, South Island campsites on 15 May and Tōtaranui on 22 May. The Hump Ridge Track is booked separately through its own trust.",
        "DOC's figures from the 2025/26 summer suggest the Milford, Abel Tasman and Kepler peak dates are the hardest to find: huts ran at around 95 per cent occupancy on Milford and Abel Tasman and 91 per cent on the Kepler. DOC points walkers with flexible plans towards the Heaphy, Lake Waikaremoana and the Whanganui Journey, which often have space, and says many campsites still had good availability when huts were full. On opening days a virtual queue gives everyone in the lobby at 9:30 am a random place, so arriving early does not help, but anyone logging in after 9:30 joins the back.",
      ], ["Bookings cover stays from 1 July 2026 to 30 June 2027", "Milford, Abel Tasman and Kepler fill first", "Hump Ridge is booked through its own trust"]),
      s("Fees by category, and how they are charged", [
        "DOC charges per person per night, not per site, so four adults at a $15 standard campsite pay $60. Basic campsites and basic huts are free. Standard campsites cost $10 to $20 an adult and serviced campsites $25 unpowered. Standard huts are $15 all year, and serviced huts $25 from May to September but $28 to $34 from October to April, highest on Friday and Saturday nights over December to February. Camping beside a serviced hut costs half the hut fee: $12.50 from May to September and $14 to $17 from October to April. Great Walk prices depend on the track, the season and whether you are a New Zealand resident: between 1 November and 30 April a night in a Milford Track hut is $106 for a resident adult and $152 for an international adult.",
        "Residency has to be provable. The resident rate applies to New Zealand citizens and people ordinarily resident here, and DOC can ask for a passport, driver licence or similar on the track; a party that cannot show it pays the difference plus $50 a person. Turning up without a valid booking at a bookable place costs more again: DOC's penalty rate is the normal fee plus a full adult fee. Booking a campsite you do not intend to use, or holding a pitch with an empty tent, is charged at two adults.",
      ], ["Fees are per person, not per site", "Carry proof if you book the resident rate", "Unbooked use attracts DOC's penalty rate"]),
      s("Hut Pass, Campsite Pass or pay per night", [
        "The Backcountry Hut Pass costs $160 for an adult for 12 months and covers most serviced and standard huts, plus most campsites outside serviced huts. At $15 a night in a standard hut it pays for itself after 11 nights, or after 5 to 7 serviced-hut nights depending on the season. Some bookable huts accept it, entered when you book, and in non-bookable huts you write your name and pass number in the hut book. Great Walk huts are priced separately, and DOC publishes a list of huts where the pass is not accepted.",
        "The Campsite Pass costs $295 for an adult for one year and covers most DOC campsites, bookable and not, for up to 7 nights in any 30 days at a single campsite, plus $3 per pass holder per night at a powered site. At bookable campsites you must still book through the system before you arrive, or pay a $10 fee and risk being turned away if the ground is full. Neither pass is a reservation, and neither gives you priority at a first-come hut or campsite, so for a single short trip, paying per night is usually cheaper.",
      ], ["Hut Pass: about 11 standard-hut nights to break even", "Campsite Pass: still book bookable sites first", "Neither pass holds a bed or a pitch"]),
      s("Which huts and campsites are first come, first served", [
        "Most of DOC's network still cannot be booked: DOC says the majority of its roughly 950 huts are non-bookable. In KiwiCamping's DOC data, checked on 24 August 2026, that included 350 basic huts and bivvies and 401 standard huts. Basic huts are free. For a non-bookable standard hut you pay with a Backcountry Hut Ticket or a Hut Pass, and paper tickets go in the honesty box at the hut. Huts stay unlocked as emergency shelter in bad weather, but shelter is not a bunk, so carrying a tent on busy tracks is sensible.",
        "Two changes land this season. Since 1 October 2026 every DOC serviced hut is on the booking system, and Serviced Hut Tickets are being retired; tickets already bought can be applied to a booking until they expire. From 1 November 2026 Backcountry Hut Tickets for non-bookable huts can be bought on DOC's online booking system, still $15 an adult a night for a standard hut; they are payment, not a booking, and paper tickets stay valid until 1 November 2027. On the campsite side, 110 of the 287 DOC campsites in KiwiCamping are self-registration: mostly basic and backcountry sites, plus some standard ones where you fill in an envelope and pay on arrival.",
      ], ["Basic huts are free; standard huts take tickets or the pass", "Hut tickets move online from 1 November 2026", "Every serviced hut is bookable since 1 October 2026"]),
      s("Changing or cancelling a booking", [
        "Cancel on the day you book or the following day, provided arrival is more than two days away, and DOC charges nothing. From 48 hours after booking to 15 days before arrival the fee is 10 per cent. Inside 14 days it climbs by type: huts 20 per cent, then 30 per cent from three days out; campgrounds 20 then 75 per cent; Great Walks 50 then 75 per cent; lodges, cabins and sole-occupancy huts 100 per cent. Cancelling the day before, on the day or after it forfeits the whole amount, and so does a no-show.",
        "If you miss the first night of a multi-night booking and do not contact the site office within 24 hours, DOC cancels the rest without a refund. Weather refunds are not automatic. If DOC closes the place or cancels your stay, for example for a storm, flooding or an orange or red MetService warning for the area the day before, email DOC's booking team within 7 days, before changing the booking yourself, for a full refund of the unused nights or, if your stay has not started, a transfer to available dates in the same season. If the weather is merely bad and the place stays open, normal cancellation fees apply, which is why DOC recommends travel insurance.",
      ]),
      s("When the hut or campsite you want is fully booked", [
        "Check the same place again on other dates, especially shoulder-season weeks either side of the school holidays, and look at campsites: DOC says many still had good availability when huts were full, although the Milford and Paparoa tracks have none. Swap a booked-out Great Walk for one with more room, or walk a non-bookable hut track nearby. DOC's own advice is to keep checking over the following months, because people cancel and even the Milford Track has cancellations across the year.",
        "For a vehicle-based night, a holiday park or a self-registration DOC campsite is the realistic fallback. KiwiCamping shows every DOC hut and campsite in its data with its category, fee and whether it takes bookings, alongside holiday parks you can book through BookIt in the app, so you can find the nearest alternative without signal. DOC places in the app need the Pass; BookIt stays are free to browse and book.",
      ], ["Try shoulder dates and nearby campsites", "Heaphy, Waikaremoana and Whanganui often have space", "Hold a holiday park or first-come site as plan B"]),
      s("Before you go", [
        "Read the place's own DOC page as well as the booking: it lists the facilities, whether water is treated, fire and dog rules, road access and current alerts. Track and road closures after storms are common, and the alert on the DOC page outranks anything you booked months ago. Check-out is 10 am, check-in runs from 2 pm to 8.30 pm, and quiet hours are 10 pm to 7 am unless the site sets different ones.",
        "Pack for the place rather than the booking. A bed in a serviced hut still needs a sleeping bag, food, a stove for most huts and warm layers, and a booked campsite does not include the hut beside it. Take all rubbish out, fill in the hut book, and leave the bunk or pitch ready for the next party.",
      ]),
    ],
    sources: [
      { label: "DOC online booking system", url: "https://bookings.doc.govt.nz/" },
      { label: "DOC: booking and paying for a campsite", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/booking-and-paying/" },
      { label: "DOC: booking and paying for huts", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-in-a-hut/booking-and-paying/" },
      { label: "DOC: hut categories, facilities and fees", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-in-a-hut/hut-categories/" },
      { label: "DOC: accommodation price changes 2026/27", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/online-bookings/doc-accommodation-price-changes--20262027/" },
      { label: "DOC: Backcountry Hut Tickets", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-in-a-hut/booking-and-paying/backcountry-hut-tickets/" },
      { label: "DOC: Backcountry Hut Pass", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-in-a-hut/booking-and-paying/backcountry-hut-pass/" },
      { label: "DOC: Campsite Pass", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/booking-and-paying/campsite-pass/" },
      { label: "DOC: campsite categories, facilities and fees", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/facilities-and-fees/" },
      { label: "DOC: Great Walks pricing", url: "https://www.doc.govt.nz/about-us/our-role/managing-conservation/recreation-management/great-walks-management/pricing/" },
      { label: "DOC media release: 2026/27 booking opening dates", url: "https://www.doc.govt.nz/news/media-releases/2026-media-releases/ready-set-naturing-doc-great-walk-hut-and-campsite-bookings-open-from-12-may/" },
      { label: "DOC media release, 1 October 2026: all serviced huts bookable, hut tickets online", url: "https://www.doc.govt.nz/news/media-releases/2026-media-releases/more-doc-huts-go-online-as-booking-and-payment-gets-easier/" },
      { label: "DOC blog: your guide to booking a Great Walk, 2026/27", url: "https://blog.doc.govt.nz/2026/05/10/your-guide-to-booking-a-great-walk/" },
      { label: "DOC: Milford Track season and bookings", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/tracks/milford-track/" },
      { label: "DOC: modify or cancel an online booking", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/online-bookings/modify-or-cancel-your-online-booking/" },
      { label: "DOC: huts, campsites, cabins and lodges terms and conditions", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/bookings-terms-and-conditions/huts-campsites-cabins-and-lodges-terms-and-conditions/" },
      { label: "DOC blog: Great Walks booking myths and tips", url: "https://blog.doc.govt.nz/2025/02/18/great-walks-mythbusting/" },
      { label: "DOC alerts and closures", url: "https://www.doc.govt.nz/parks-and-recreation/know-before-you-go/alerts/" },
    ],
  }),

  a({
    slug: "holiday-parks-new-zealand-guide",
    legacyPath: "/holiday-parks-nz-booking-guide.html",
    title: "Holiday Parks NZ 2026: Memberships, Costs and How to Book",
    description: "TOP 10 Club costs $55 for two years and saves 10% a stay. How holiday park rates are built, when to book, late arrival, and the cost against DOC sites.",
    category: "Camping guides",
    region: "New Zealand towns and coast",
    readTime: 13,
    places: ["TOP 10 Holiday Parks", "Holiday Parks New Zealand", "Powered sites", "Cabins", "Communal kitchens", "Dump stations"],
    imageAlt: "New Zealand holiday park beside the coast",
    intro:
      "A holiday park is a commercial campground with powered and tent sites, hot showers, a shared kitchen, laundry and usually cabins, and it is the night that resets a camping trip: after a wet week, before an early ferry, or whenever power and a dependable shower matter more than solitude. Most charge per site or per person, so the price only means something for your own party. The industry association, Holiday Parks New Zealand, lists 230 member parks, and the biggest chain, TOP 10, sells a $55 two-year club card that takes 10 percent off each stay. Below: how rates work, what a membership is worth, when to book and how to arrive late without trouble.",
    sections: [
      s("Understand how the rate is built", [
        "Holiday parks price in three different ways and the comparison collapses if you mix them up. Some charge per person, some per site with a stated occupancy, and some quote a base rate with additional guests charged separately. As an example, a $45 site for two and a $28-per-person rate are almost the same for a couple and very different for a family of five.",
        "Then check what is bundled. Power, linen, kitchen equipment, showers, Wi-Fi and booking fees vary between parks, and a cabin quoted without linen is not comparable to one that includes it. Work out the total for your actual party and nights before deciding anything.",
      ], ["Compare per-person against per-site", "Check whether linen is included", "Include booking and card fees"]),
      s("Holiday park or DOC campsite: cost it for your party", [
        "DOC charges per person, so the cheaper option depends on who is travelling. At a serviced DOC campsite an adult pays $25 a night unpowered and a child $12.50, so two adults and two children pay $75. At a standard DOC campsite the same family pays $30 to $60, and at a basic site nothing. Hold that against the park's quoted total for the same night, power and party, not against its headline site price.",
        "For a couple, DOC usually wins on price and a park on facilities. For a family, a park charging per site often closes the gap or beats a serviced DOC ground, and adds laundry, a kitchen, hot showers and somewhere for children to burn off energy. Many trips work best mixing the two: DOC sites for the scenery, a holiday park every few nights for the reset.",
      ], ["DOC charges per person, parks often per site", "Two adults and two children: $75 at a serviced DOC site", "Mix DOC nights with a park every few nights"]),
      s("Chains, networks and memberships", [
        "TOP 10 Holiday Parks is the largest chain. Its club card costs $55 for two years and takes 10 percent off accommodation at TOP 10 parks, capped at $40 a stay, plus 10 percent at more than 130 BIG4 parks across the Tasman, Interislander ferry savings and regional deals. The card pays for itself once your discounts pass $55, which at 10 percent means about $550 of TOP 10 stays over the two years: good value on a long trip, rarely on a weekend.",
        "Holiday Parks New Zealand is the industry association rather than a chain. It lists 230 member parks, many of them independent, and arranges an Interislander discount for its member parks' guests. Motorhome owners who join the New Zealand Motor Caravan Association get its members-only parks and travel directory instead. Independent parks run their own discounts, so ask at booking rather than assuming a card applies.",
      ], ["TOP 10 Club: $55 for two years, 10% off up to $40 a stay", "It pays off after about $550 of TOP 10 nights", "Independent parks set their own discounts"]),
      s("Book the vehicle you are actually bringing", [
        "Site dimensions matter more than travellers expect. A long motorhome, a caravan with an awning or a vehicle towing a trailer needs a site that physically fits, and parks allocate by the length you declared. Under-declaring produces an awkward conversation at check-in and sometimes no site at all.",
        "Say whether you need drive-through access, power, and proximity to amenities if anyone in the party has mobility needs. These are easy to arrange in advance and nearly impossible to fix on a full Saturday in January.",
      ]),
      s("Peak season changes the rules", [
        "Between Christmas and late January, and over Easter and school holidays, popular coastal parks can set minimum stays, higher rates and stricter cancellation terms, and the best sites go early. If your route passes through a beach town in that window, book it as early as you book the ferry.",
        "Local events compress availability just as hard and with less warning: a regional sports tournament or a concert can fill every park in a district. Where dates are uncertain, pay for refundable terms and note the cancellation deadline against the trip stop rather than trusting memory.",
      ], ["Book beach towns very early", "Watch for local events", "Note cancellation deadlines"]),
      s("Arriving after hours", [
        "Most parks close reception in the evening, and a long driving day frequently ends after that. Ask for the late-arrival procedure when you book: many leave an envelope with a site number and a gate code, but you need to know that before you are standing at a locked barrier at 10pm with no reception.",
        "Confirm the gate arrangement for vehicles too. Some parks close a boom gate overnight, which matters if you have an early ferry or a dawn start planned.",
      ]),
      s("Use the facilities deliberately", [
        "A holiday park night is worth most when you use what you paid for. A communal kitchen saves gas and keeps cooking smells out of a small van, the laundry resets a week of damp clothing, and the dump station and potable water taps let you leave with full tanks and empty ones in the right order.",
        "Learn the layout before connecting anything: never fill drinking water from a tap near the dump point, and ask which taps are potable, because not all of them are. Rinse and stow hoses separately, and wash your hands after handling waste equipment.",
      ], ["Never fill water near the dump point", "Ask which taps are potable", "Keep hoses separate"]),
      s("Shared space, shared rules", [
        "Quiet hours are enforced, and holiday parks are dense environments where sound carries between sites. Keep site boundaries, supervise children around internal roads and pools, and check the pet policy before arriving with a dog, because many parks restrict animals, especially in peak season.",
        "Secure valuables as you would anywhere with public access. A holiday park is convenient and generally safe, but it remains a busy site with vehicles moving through it all day.",
      ]),
      s("Finding and booking parks in KiwiCamping", [
        "KiwiCamping shows holiday parks and tours from BookIt on the same map as DOC campsites and dump stations. The BookIt places are free in the app: open one to see its facilities and photos, then use Book now to check live availability and price. That makes it quick to find a powered site within an hour of where you are, even when you are choosing on the road.",
        "DOC campsites, huts, dump stations and DOC's freedom camping notices are part of the Premium pass. Place details are stored on the phone, so you can compare a park against the nearest DOC site without signal, while live availability, maps and booking pages need a connection.",
      ]),
    ],
    sources: [
      { label: "TOP 10 Holiday Parks: club membership and member benefits", url: "https://top10.co.nz/membership/" },
      { label: "Holiday Parks New Zealand: find a member park", url: "https://holidayparks.co.nz/" },
      { label: "DOC campsite categories, facilities and fees", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/facilities-and-fees/" },
      { label: "New Zealand Motor Caravan Association", url: "https://www.nzmca.org.nz/" },
      { label: "NZTA journey planner", url: "https://www.journeys.nzta.govt.nz/" },
    ],
  }),

  a({
    slug: "camping-wastewater-rubbish-new-zealand",
    legacyPath: "/dump-stations-nz.html",
    title: "Dump Stations NZ: Locations by Region, Costs and Rules",
    description: "Where to empty a campervan toilet in NZ: KiwiCamping's 262 dump stations by region, most of them free, how to use one and the $800 fine for dumping waste.",
    category: "Rules & safety",
    region: "New Zealand camps",
    readTime: 12,
    places: ["Dump stations", "Grey water", "Black water", "Potable water", "Transfer stations"],
    imageAlt: "Campervan using a marked dump station",
    intro:
      "Waste is where responsible camping becomes concrete, and where the penalties get serious. Discharging toilet or grey water in the wrong place carries substantially higher fines than an ordinary freedom camping infringement, and it is the behaviour most likely to get a popular site closed permanently.",
    sections: [
      s("Know your three waste streams", [
        "Black water is toilet waste and goes only into a dump station inlet designed for it. Grey water is everything from the sink and shower, it contains food particles, soap, fats and bacteria, and despite looking harmless it is not something to tip on the ground. Solid rubbish is the third stream and generally has to leave with you.",
        "Treat all three as containment problems rather than disposal problems. The question on the road is not where you can get rid of something, but whether you have capacity to hold it until you reach the right facility.",
      ], ["Grey water is not clean water", "Plan capacity, not disposal", "Rubbish usually leaves with you"]),
      s("Finding a dump station", [
        "Dump stations are widely distributed across New Zealand, at holiday parks, council facilities, some service stations and town reserves, and most are free or charge a small fee. They are mapped, and the sensible habit is to identify the next one on your route before you need it rather than searching when a tank is already full.",
        "Facilities at holiday parks are often available to non-guests for a small charge, which is worth knowing on a long remote leg. Some are locked overnight, so arriving at 11pm with a full cassette is a planning failure rather than bad luck.",
      ]),
      s("Dump stations by region", [
        "KiwiCamping maps 262 public dump stations. By the DOC region of the nearest DOC campsite or hut, Canterbury has 38, Otago 28, Bay of Plenty 23, Northland 19, Auckland 17, Hawke's Bay and Wellington/Kāpiti 15 each, the Central North Island and the West Coast 14 each, Marlborough 11, Nelson/Tasman and Waikato 10 each, the Coromandel 9, Southland and Taranaki 8 each, the East Coast 7, Manawatū/Whanganui 6, and Fiordland and the Wairarapa 5 each.",
        "Of the 262, the listings show 240 as free, 8 as asking for a donation and 6 as charging a fee, and 8 give no fee. The gaps matter more than the totals: Fiordland, the Wairarapa and the East Coast have few, so empty before you head into them rather than counting on one along the way. In the app, dump stations are part of the Premium pass, with the fee note and location stored on the phone.",
      ], ["Canterbury and Otago have the most", "Most dump stations are free", "Empty before Fiordland and the East Coast"]),
      s("Using one correctly", [
        "Park so other vehicles can still pass, dump stations are frequently on a single access lane and a badly parked van blocks everyone. Use only the inlet marked for the waste you are emptying, empty black water first, then rinse, then grey water. Rinse without spraying the surrounding ground, and leave the area cleaner than you found it.",
        "Keep the drinking-water hose entirely separate from anything used at the dump point, and never fill fresh water from a tap at the dump station unless it is explicitly marked potable. Wash your hands afterwards, before touching anything in the vehicle.",
      ], ["Black water first, then rinse, then grey", "Keep hoses strictly separate", "Never fill drinking water at the dump point"]),
      s("What not to do, and why it costs", [
        "Stormwater drains discharge directly to waterways with no treatment, so emptying a tank into one is a discharge to the environment rather than to a sewer. Public toilets are not designed for cassette volumes and block. Emptying into a hedge, a bush or a stream is the offence that draws the largest penalties and the most attention: depositing waste while freedom camping is an $800 infringement fee.",
        "Use only treatment chemicals compatible with the receiving system. Many rural dump stations feed septic tanks, and harsh formaldehyde-based products damage the biological process that makes them work. Where you are unsure, choose a product marked as septic-safe.",
      ]),
      s("Rubbish and food waste", [
        "DOC accommodation terms generally require all rubbish to leave with you, and many council sites operate pack-in, pack-out even where a toilet is provided. Assume there is no bin unless you can see one, and carry a sealed container so food waste does not attract birds, rodents or possums overnight.",
        "Food scraps are not a free pass because they are organic. Left in the bush they spread seeds, alter animal behaviour and take far longer to break down than people assume. Do not burn plastic, foil or treated timber in a campfire, it produces toxic smoke and leaves residue that the next camper inherits.",
      ], ["Assume no bins", "Seal food waste overnight", "Never burn plastic or treated wood"]),
      s("Building it into the routine", [
        "The travellers who never have a waste problem are the ones who empty on a schedule rather than on demand, typically whenever they pass a facility with tanks more than half full, regardless of whether it feels necessary. That single habit removes almost every awkward situation.",
        "Know your capacity in days: how long the fresh water lasts, how long before grey water needs attention, how many days the toilet supports at your party size. Those three numbers determine how far off-grid you can genuinely go, and they are more useful than any tank specification in litres.",
      ]),
    ],
    sources: [
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/secondary-legislation/pco-drafted/2023/136/en/latest/" },
      { label: "DOC camping responsibly", url: "https://www.doc.govt.nz/parks-and-recreation/know-before-you-go/camping-responsibly/" },
      { label: "MBIE freedom camping guidance", url: "https://www.mbie.govt.nz/immigration-and-tourism/tourism/tourism-projects/freedom-camping" },
    ],
  }),

  a({
    slug: "campfire-rules-new-zealand",
    legacyPath: "/campfire-rules-nz.html",
    title: "NZ Fire Season & Campfire Rules 2026: Check Fire Bans First",
    description: "Open, restricted or prohibited: how NZ fire seasons work, where to check today's fire ban, when you need a permit and how to cook when fires are banned.",
    category: "Rules & safety",
    region: "New Zealand",
    readTime: 12,
    places: ["DOC campsites", "Conservation land", "Fire seasons", "Gas cookers"],
    imageAlt: "Small controlled campfire in a legal fire site",
    intro:
      "An existing fire ring and a pile of old ash prove that someone had a fire here once, not that you may have one today. New Zealand runs a three-tier fire season system that changes with conditions, and the land manager can prohibit fires regardless of what that system says.",
    sections: [
      s("The three fire seasons", [
        "In an open fire season you may light a fire in the open air without a permit, subject to the land manager's own rules. In a restricted fire season you need a permit from Fire and Emergency New Zealand before lighting anything in the open. In a prohibited fire season, open-air fires are banned outright and no permit will be issued.",
        "The season is set by district and changes with conditions, sometimes at short notice during a dry spell. Check the current status for the exact district you are in on the day, not the district you drove through this morning.",
      ], ["Check the district on the day", "Restricted means permit required", "Prohibited means no fire at all"]),
      s("The land manager can be stricter", [
        "The fire season is a floor, not a permission. DOC campsites, regional parks, council reserves and private campgrounds all set their own rules, and many prohibit open fires permanently regardless of the season. Where two rules apply, the stricter one controls.",
        "Read the specific campsite page and the sign at the site. Some DOC campsites permit a small fire only in a provided fireplace, some prohibit solid fuel entirely, and backcountry fires carry separate conditions about location, clearance and size.",
      ]),
      s("If a fire is genuinely permitted", [
        "Use the existing authorised fireplace where one is provided rather than building a new ring. Clear combustible material well back, keep the fire small, and have water immediately to hand, not in the vehicle, but beside you. Never light beneath overhanging trees, on peat, in strong wind, or near dry grass, gorse or mānuka, all of which carry fire far faster than people expect.",
        "Burn only fuel you are permitted to use. Collecting living vegetation is prohibited on conservation land, and many sites require you to bring your own wood. Do not burn rubbish, plastic, foil or treated timber.",
      ], ["Water beside you, not in the van", "Never light in wind or under trees", "Bring fuel; do not collect living wood"]),
      s("Putting it out properly", [
        "A fire is out when it is cold to the touch, and getting there takes longer than most people allow. Douse it, stir the ashes, douse again, and keep going until you can put your hand in the remains. Embers survive under ash for many hours and wind can restart them long after you have gone to bed.",
        "Never leave a fire unattended, including while it burns down. Most escaped campfires start after the people who lit them decided it was nearly out.",
      ]),
      s("Cooking when fires are banned", [
        "Gas cookers are the practical answer and are generally permitted when open fires are not, but check, because a prohibited fire season can restrict some appliances too. Use them on a stable, level surface, well clear of tent fabric and vegetation.",
        "Never cook inside a closed tent, an awning or an unventilated vehicle. The risk is carbon monoxide, which is odourless and has killed campers in New Zealand. Let a cooker cool completely before it goes back into a vehicle or tent, and store gas cylinders upright and ventilated.",
      ], ["Never cook in a closed tent or van", "Carbon monoxide has no smell", "Let cookers cool before stowing"]),
      s("If it gets away from you", [
        "If a fire spreads beyond your control, do not try to fight it beyond the first few seconds. Move away, downhill and across the slope where safe, because fire travels fastest uphill, and call 111 immediately.",
        "Give the clearest location you can: the road, the nearest identifiable landmark, and coordinates if you have them saved offline. Being able to state where you are, quickly, is worth more than any equipment you are carrying.",
      ]),
    ],
    sources: [
      { label: "Fire and Emergency: Check It's Alright", url: "https://www.checkitsalright.nz/" },
      { label: "DOC fires in the outdoors", url: "https://www.doc.govt.nz/parks-and-recreation/know-before-you-go/fire-safety/" },
    ],
  }),

  a({
    slug: "new-zealand-camping-packing-list",
    legacyPath: "/camping-packing-list-nz.html",
    title: "New Zealand camping packing list, with regional variants",
    description: "What to pack for wind, rain, sandflies, cold nights and remote roads, adjusted for where you are actually going.",
    category: "Trip planning",
    region: "New Zealand",
    readTime: 13,
    places: ["Tent setup", "Campervan kitchen", "Wet-weather kit", "Sandfly country", "Alpine routes"],
    imageAlt: "Camping equipment packed beside a New Zealand campervan",
    intro:
      "New Zealand punishes packing lists written for a single climate. The country delivers four seasons in a day with real conviction, and the gap between a comfortable trip and a miserable one is usually three or four specific items rather than a bigger pile of gear.",
    sections: [
      s("Sleep and shelter", [
        "Take a sleep system rated below the coldest night you expect, then add a margin, inland and alpine sites drop close to freezing well outside winter, even after a warm day. An insulated mat matters as much as the bag, because most heat is lost downwards into the ground.",
        "Test the whole setup at home before you leave: pitch the tent, inflate the mat, check the pump and valves. Keep one complete dry sleep layer sealed in a waterproof bag and never wear it during the day. A wet West Coast afternoon should not be able to reach the only warm clothing you have.",
      ], ["Rate the bag below expected lows", "Insulated mat, not just a bag", "Seal one dry sleep layer away"]),
      s("Wind and rain, not just cold", [
        "The wind is the part visitors underestimate. Bring a genuinely windproof shell rather than a light rain jacket, and carry enough strong pegs and guylines to hold a tent in an exposed coastal site, the pegs supplied with most tents are not adequate here. A groundsheet and a spare tarp earn their space repeatedly.",
        "Pack quick-drying layers and avoid cotton for anything you rely on. Merino works well for the same reason it is everywhere in this country: it stays warm damp and does not develop a smell over a fortnight.",
      ]),
      s("Sandflies and sun", [
        "Sandflies are not a minor irritation on the West Coast, in Fiordland or around the Catlins. Bring strong repellent, cover ankles and wrists at dusk, and check the tent's insect mesh for holes before you leave home. Antihistamine cream is worth carrying, because the bites keep people awake for days after the fact.",
        "The UV here is severe, the sun burns faster than most visitors expect, including on overcast days and at altitude. High-factor sunscreen, a brimmed hat and sunglasses belong in the day bag, not the boot.",
      ], ["Repellent for the West Coast and Fiordland", "Check tent mesh before leaving", "UV is stronger than it looks"]),
      s("Kitchen and water", [
        "Carry a stable gas cooker rated for outdoor use, a reliable lighter plus a backup, simple nesting cookware and enough food to absorb a delayed day. Cook outside or in a properly ventilated space, never inside a closed tent or van.",
        "Use separate, clearly labelled containers for drinking water and waste, and carry a reserve of drinking water that is not touched during ordinary camp use. Water at DOC sites is frequently untreated, so bring a filter or the means to boil, and do not assume a tap is potable because it exists.",
      ]),
      s("Vehicle and emergency kit", [
        "Know where the jack points are on your vehicle and confirm the spare, jack and wheel brace are actually present before you leave the depot, this is a common gap in rentals. Carry a torch or headlamp, a power bank, a basic first aid kit and a paper map or offline maps for the stretches with no reception.",
        "Alpine routes may require chains in winter, and some rental agreements mandate carrying them regardless of conditions. For remote walks or back-country roads, a personal locator beacon is cheap to hire and is the one item that genuinely changes outcomes.",
      ], ["Check the spare and jack at pickup", "Offline maps for no-reception legs", "Hire a PLB for remote legs"]),
      s("Adjust for where you are going", [
        "For the West Coast and Fiordland, weight the packing towards rain, sandflies and drying, more repellent, more dry bags, more spare socks. For Central Otago and the Mackenzie, weight it towards cold nights and sun, with a warmer bag and better eye protection than the coast requires.",
        "For Northland and the upper North Island, the balance shifts to heat, humidity and shade. For anything alpine, or for winter anywhere in the south, add chains, extra insulation and a genuinely shorter driving day. The list does not get longer with each region so much as it gets reweighted.",
      ]),
    ],
    sources: [
      { label: "DOC know before you go", url: "https://www.doc.govt.nz/parks-and-recreation/know-before-you-go/" },
      { label: "MetService", url: "https://www.metservice.com/" },
      { label: "NZTA road conditions", url: "https://www.journeys.nzta.govt.nz/" },
    ],
  }),

  a({
    slug: "best-time-camping-new-zealand",
    legacyPath: "/nz-camping-seasons-weather-sandflies.html",
    title: "Sandfly Season NZ: When They're Worst and Best Months to Camp",
    description: "When and where sandflies bite in New Zealand, worst on the West Coast and in Fiordland, plus how each season suits camping, region by region.",
    category: "Trip planning",
    region: "New Zealand seasons",
    readTime: 13,
    places: ["Northland", "Central North Island", "Mackenzie Country", "West Coast", "Fiordland", "Central Otago"],
    imageAlt: "Four seasons across a New Zealand camping landscape",
    intro:
      "There is no single best month for the whole country, because New Zealand spans a long way north to south and most of its weather is decided by altitude and which coast you are on. Choosing when to go is mostly about deciding what you are willing to trade: warmth against crowds, quiet against daylight, or scenery against certainty.",
    sections: [
      s("Summer: daylight, and everyone else", [
        "December to February brings long evenings, warm coastal swimming and the broadest availability of open campgrounds and services. It is also when the country goes on holiday itself. Between Christmas and late January, popular coastal sites fill by early afternoon, ferries and rentals sell out, and prices climb sharply.",
        "Book the nights that are genuinely hard to replace (the ferry, Great Walks, beach-town holiday parks) and leave ordinary stops flexible. Note that summer does not mean warm everywhere: alpine nights stay cold, and fire restrictions and water shortages are most likely in exactly this window.",
      ], ["Book ferries and beach towns early", "Alpine nights stay cold in summer", "Fire restrictions peak in summer"]),
      s("Autumn: the quiet favourite", [
        "March and April are, for many people who travel here regularly, the best compromise. Settled spells are common, the light is excellent, campgrounds are open but no longer full, and prices drop once school holidays end. Central Otago in particular is at its best as the poplars turn.",
        "The trade-off is shortening daylight and cooler nights, so driving days need to be a little shorter and the sleeping bag a little warmer. Some seasonal services begin closing from April onwards.",
      ]),
      s("Spring and winter", [
        "Spring brings full waterfalls, snow still on the peaks and green everywhere, but it is the least predictable season, wind and rapidly changing alpine conditions demand more caution and more flexibility. October and November can deliver a perfect week or a genuinely difficult one.",
        "Winter is a different trip rather than a worse one. It suits ski areas, clear southern night skies and travellers properly equipped for cold. Northern lowland camping stays mild, while Central Otago, Tongariro and the alpine passes require winter driving preparation, chains and a realistic view of daylight hours. It is a poor season to improvise.",
      ], ["Autumn is the best all-round compromise", "Spring is beautiful and unpredictable", "Winter needs equipment, not optimism"]),
      s("Sandflies: where and when", [
        "Sandflies, namu in te reo Māori, live wherever there is flowing water and bush, and two of New Zealand's 13 species bite. The West Coast and Fiordland are infamous for them, which is why the end of the Milford Track is called Sandfly Point, and beaches, lake edges and the Catlins are reliable spots too. They breed in fast-flowing streams, bite most as the light rises in the morning and fades at dusk, rarely bite in the dark, and in dull, overcast, humid weather keep biting all day.",
        "There is no official sandfly season: in the wettest regions they are part of camping in any month, and most visitors meet them between spring and autumn, when campsites by rivers and lakes are full. An exposed, breezy pitch away from still water is usually more comfortable than a sheltered one. Bring strong repellent, cover ankles and wrists in the evening, keep the tent or van closed at dusk, and check the insect mesh before you travel. Bites can itch for days, so antihistamine cream is worth having with you rather than hunting for in a small town.",
      ]),
      s("Regional timing in short", [
        "Northland and the upper North Island are pleasant from October through April and humid at the height of summer. The central plateau and Tongariro are a summer and autumn proposition unless you are equipped for alpine winter. The East Coast is driest in summer and reliably sunny in autumn.",
        "The West Coast is wet in every season, plan for rain rather than hoping to avoid it, but rewards it with near-empty sites. The Mackenzie and Central Otago are excellent in autumn and cold and clear in winter. Fiordland is wet year-round and best approached with flexible days and no fixed expectations about seeing Milford in sunshine.",
      ], ["West Coast: plan for rain in any season", "Autumn suits Central Otago best", "Fiordland needs flexible days"]),
      s("Reading the forecast properly", [
        "New Zealand's weather changes faster than the length of most driving days, and a forecast for a town tells you relatively little about a pass or an exposed coast twenty minutes away. Check MetService for the specific location, and check the road conditions separately, the two answer different questions.",
        "Build the plan so that a bad forecast changes the day rather than cancelling the trip. Holding an indoor option, a shorter alternative and a serviced campground in reserve is what turns a wet week into an ordinary one.",
      ]),
    ],
    sources: [
      { label: "Te Ara: sandflies, New Zealand's blackflies", url: "https://teara.govt.nz/en/sandflies-and-mosquitoes/page-1" },
      { label: "MetService", url: "https://www.metservice.com/" },
      { label: "NZTA road conditions", url: "https://www.journeys.nzta.govt.nz/" },
      { label: "DOC alerts and closures", url: "https://www.doc.govt.nz/parks-and-recreation/know-before-you-go/alerts/" },
    ],
  }),

  a({
    slug: "scenic-campsites-new-zealand",
    legacyPath: "/top-scenic-campsites-nz.html",
    title: "Scenic campsites in New Zealand, region by region",
    description: "Where the best-known views are, and how to judge whether a spectacular site is actually a good place to spend the night.",
    category: "Camping guides",
    region: "New Zealand",
    readTime: 13,
    places: ["Northland", "Coromandel", "Abel Tasman", "West Coast", "Mackenzie Basin", "Fiordland", "Catlins"],
    imageAlt: "Scenic lakeside campsite beneath New Zealand mountains",
    intro:
      "The most photographed campsite in the country is not automatically the best place to be tonight. A view is worth having, but it competes with wind exposure, drainage, access, facilities and whether you can get a large vehicle onto the pitch in the dark. The good news is that New Zealand has enough spectacular sites that you rarely have to choose only one.",
    sections: [
      s("Northland and the upper North Island", [
        "The Far North delivers long empty beaches and campsites close to the water, with the trade-off that many are exposed and some close during significant local events. Sites around the Bay of Islands and the Karikari Peninsula combine swimming with reasonable shelter.",
        "The Coromandel is the classic summer choice, with DOC sites tucked behind pōhutukawa on the east coast beaches. It is also the most competitive area in the country between Christmas and late January, when arriving without a booking is close to hopeless.",
      ]),
      s("Central and lower North Island", [
        "The central plateau offers something different: open tussock, volcanic horizons and genuinely dark skies around Tongariro, with the caveat that it is high, cold at night and windy far more often than photographs suggest. Lake Taupō's eastern shore has accessible sites with the mountains across the water.",
        "Further south, the Wairarapa coast and the wild beaches near Castlepoint reward the detour, and Whanganui's river country is quiet in a way the coast never is. These are places where the scenery is in the landscape rather than a single viewpoint.",
      ], ["Central plateau is cold and exposed", "Coromandel needs booking in summer", "East coast beaches suit sheltered nights"]),
      s("Top of the South and the West Coast", [
        "Abel Tasman's coastal campsites are among the best-known in the country and are booked rather than turn-up, often months ahead. Golden Bay and the Marlborough Sounds offer water-edge sites with easier access and less competition.",
        "The West Coast is where the drama is: Lake Mahinapua, the beaches near Hokitika, and the sites around the glaciers. Accept the rain and the sandflies and you get scenery that is genuinely world-class with very few people in it. Bring repellent and expect to dry gear later.",
      ]),
      s("Canterbury, Mackenzie and Otago", [
        "The Mackenzie Basin is the one most people come for, turquoise lakes, the Southern Alps behind them, and some of the clearest night skies anywhere, protected as a dark sky reserve. Sites around Lake Pukaki and Lake Tekapo deliver the view directly from the door, and they are cold, exposed and busy in proportion.",
        "Central Otago trades lakes for gold-country landscapes and enormous autumn colour, while the Otago coast around the peninsula adds wildlife to the scenery. Wānaka and Glenorchy sit at the point where accessible and spectacular overlap most comfortably.",
      ], ["Mackenzie skies are the draw", "Lakeside means wind", "Autumn is Central Otago's season"]),
      s("Fiordland, Southland and the Catlins", [
        "Fiordland is largely booked DOC accommodation and freedom camping near the fiords is not permitted, but the sites along the Milford road and around Te Anau are extraordinary. Weather here is its own planning constraint rather than a detail.",
        "The Catlins coast is quieter than almost anywhere else with comparable scenery, sea lions, penguins, waterfalls and a coastline that feels genuinely remote. Stewart Island, if you have the days, is a different experience again.",
      ]),
      s("Judging a site when you arrive", [
        "Read the landscape rather than the photograph. Lakeshores amplify wind and it usually rises in the evening. River flats and braided riverbeds flood far faster than they look capable of. Forest sites carry falling-branch risk in wind, particularly under older trees.",
        "Arrive in daylight and walk the pitch before committing a large vehicle: check the slope, the firmness of the ground and the soft edges, look up for overhead branches, and confirm another vehicle can still get past you. A remote site also costs fuel and time to reach, so the nominally free night is sometimes the more expensive one.",
      ], ["Walk the pitch before driving onto it", "Wind rises on lakeshores at evening", "Look up before parking under trees"]),
      s("Leaving it as you found it", [
        "Stay on formed surfaces, use the toilets provided, and keep every waste stream contained. Do not move rocks, cut vegetation or improve a pitch to make a better photograph, these are exactly the marks that get a site closed.",
        "Leave early if you like, but leave clean and quietly. Dawn light is not a reason to run a generator, fly a drone where it is prohibited, or wake a campground packing up. The best scenic sites stay open because the people who use them are unremarkable neighbours.",
      ]),
    ],
    sources: [
      { label: "DOC places to stay", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/" },
      { label: "DOC alerts and closures", url: "https://www.doc.govt.nz/parks-and-recreation/know-before-you-go/alerts/" },
      { label: "MetService", url: "https://www.metservice.com/" },
    ],
  }),

  a({
    slug: "camping-fees-new-zealand-2026",
    legacyPath: "/camping-costs-nz.html",
    title: "NZ Camping Costs 2026: DOC Fees, Holiday Parks, Daily Budget",
    description: "DOC campsite fees per adult for 2026/27, holiday park rates, fuel and food, built into daily camping budgets in NZD and converted into 10 currencies.",
    category: "Costs & budget",
    region: "New Zealand camps",
    readTime: 14,
    places: ["DOC basic camps", "DOC standard camps", "DOC serviced camps", "Holiday parks", "Freedom camping areas"],
    imageAlt: "Tent and campervan at a New Zealand campsite",
    intro:
      "Camping is the cheapest way to travel New Zealand, but 'cheap' covers a range from about nothing to more than a motel room. The word campsite spans a free long-drop beside an untreated stream and a powered beachfront pitch with a kitchen and laundry, so a nightly figure only means something once you attach it to a category and a party size.",
    priceTable: {
      asOf: "20 October 2026",
      note: "DOC category prices for the 2026/27 season, checked against DOC's fees page on 20 October 2026; the holiday park and daily figures are planning ranges, not quotes. Peak beachfront and event-period rates can sit well above these.",
      rows:
      [
        { label: "DOC basic campsite", nzdLow: 0, unit: "per adult per night" },
        { label: "DOC standard campsite", nzdLow: 10, nzdHigh: 20, unit: "per adult per night" },
        { label: "DOC serviced unpowered", nzdLow: 25, unit: "per adult per night" },
        { label: "DOC serviced powered", nzdLow: 20, nzdHigh: 28, unit: "per adult per night" },
        { label: "Holiday park site", nzdLow: 25, nzdHigh: 80, unit: "typical site or base range" },
        { label: "Low-cost camping day, per person", nzdLow: 45, nzdHigh: 80, unit: "all-in, self-catering" },
        { label: "Mixed camping and holiday parks", nzdLow: 90, nzdHigh: 150, unit: "per person/day" },
      ],
    },
    sections: [
      s("DOC charges per person, not per site", [
        "This is the arithmetic that surprises families. DOC campsite fees are generally charged per adult per night: basic sites are free, standard sites usually fall between $10 and $20 per adult, and serviced unpowered sites are commonly around $25. Children are reduced or free depending on age and site.",
        "Because the charge scales with people, a party of four at a serviced DOC site can cost more than a holiday park charging a flat site rate. Always run the comparison for your actual party rather than assuming DOC is the cheaper option.",
      ], ["DOC charges per adult", "Holiday parks may be cheaper for families", "The site page overrides the category"]),
      s("Commercial parks use a different model", [
        "Holiday parks may quote per person, per site with a stated occupancy, or a base rate with extra guests added. Power, showers, kitchen access, linen and booking fees all change the comparison, and a prime summer beachfront pitch sits well above an ordinary inland one.",
        "Peak season, school holidays and local events raise rates and can impose minimum stays. Search the exact dates, vehicle length and party size, an off-season example tells you very little about a January weekend at the beach.",
      ]),
      s("The costs that are not the campsite", [
        "Fuel is usually the largest line after accommodation, and it is driven by distance and consumption rather than by nights. Work it out properly: kilometres multiplied by litres per 100 km, divided by 100, times the price per litre. A campervan at 12 L/100 km doing 3,000 km uses 360 litres, and that arithmetic matters more than the difference between a $15 and a $25 campsite.",
        "Then add food, ferry crossings if you cross Cook Strait, activities, and the vehicle itself if you are hiring. One-way hire fees and the insurance excess reduction are both easy to overlook and both substantial.",
      ], ["Fuel usually beats campsite cost", "Cook Strait is a fixed large cost", "Price one-way hire fees separately"]),
      s("Three realistic daily budgets", [
        "A frugal self-catering camper mixing free and standard DOC sites, cooking almost everything and driving moderate distances can plan around $45 to $80 per person per day before long-distance transport. This requires being genuinely self-sufficient and accepting basic facilities most nights.",
        "A mixed approach (DOC sites with a holiday park every third or fourth night, some meals out, a few paid activities) lands around $90 to $150 per person per day. A comfort-oriented trip with mostly powered sites or cabins, regular restaurant meals and booked experiences moves well beyond that.",
      ]),
      s("Where free camping genuinely saves, and where it does not", [
        "Free camping saves real money when the vehicle is set up for it and the route already passes suitable areas. It stops saving when you drive an extra 60 km to reach a free site, when the lack of facilities forces a paid night anyway, or when a $400 infringement arrives because the certification was not current.",
        "Budget for a paid night more often than you plan to use one. Showers, laundry, charging, water and a proper reset have a real value, and forcing an unsuitable free night after a wet week is a false economy.",
      ], ["Do not drive far to save a site fee", "Budget for paid nights you may not use", "An infringement erases a week of savings"]),
      s("Keeping the budget honest", [
        "Track actual spending for the first three or four days and compare it with the plan. Correcting a small drift early is straightforward; discovering in week four that you are 40% over means cutting the part of the trip you most wanted. The lines that drift are almost always food and small paid activities rather than accommodation.",
        "Hold a genuine reserve for the unexpected: a tyre, a weather day that forces a cabin, a ferry change. A trip with no financial slack turns every minor problem into a decision about whether to continue.",
      ]),
    ],
    sources: [
      { label: "DOC campsite facilities and fees", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/facilities-and-fees/" },
      { label: "MBIE freedom camping guidance", url: "https://www.mbie.govt.nz/immigration-and-tourism/tourism/tourism-projects/freedom-camping" },
      rbnz,
    ],
  }),
];
