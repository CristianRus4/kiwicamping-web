import { makeArticle as a, type Article, type ArticleSection } from "@/lib/article-model";

const s = (heading: string, body: string[], tips?: string[]): ArticleSection => ({ heading, body, tips });

/**
 * "Can I...?" answer pages: one question people actually search, answered in the first two
 * sentences, then the rule that decides it, the detail by council or DOC district, and what to do
 * instead. Rules come from the official owner (DOC, councils, NZTA, legislation.govt.nz, FENZ).
 * Each page is drip-published through publishAt (docs/growth/publish-schedule.md).
 */
export const canIArticles: Article[] = [
  a({
    slug: "can-i-sleep-in-my-car-in-new-zealand",
    publishAt: "2026-11-09",
    title: "Can I Sleep in My Car in New Zealand? (2026 Rules)",
    description: "Resting to beat driver fatigue is exempt, but a planned night in a car on council land is a $400 fine unless a bylaw names the spot. 2026 rules, by land type.",
    category: "Rules & safety",
    region: "New Zealand",
    places: ["Council streets and car parks","Roadside lay-bys","Conservation land","Campgrounds and private land"],
    imageAlt: "Lakeside rest area at Lake Taupō with a picnic table and a single car parked beneath the trees",
    related: ["freedom-camping-rules-new-zealand","self-contained-campervan-green-warrant","camping-rules-local-councils-new-zealand"],
    intro:
      "Sometimes: it depends on whether you are resting or camping, and on who manages the land you are parked on. The Freedom Camping Act 2011 excludes resting or sleeping at the roadside in a vehicle to avoid driver fatigue, but a planned night in a car on public land counts as freedom camping, and on council land that needs a certified self-contained vehicle unless a bylaw names a spot for other vehicles. An ordinary car lacks the fixed toilet and tanks a green warrant requires, and since 7 June 2026 an old blue warrant no longer counts either. In practice a car can sleep legally at a campground, on private land with permission, at the rare council site opened to non-certified vehicles, or on conservation land DOC has not restricted.",
    sections: [
      s("Resting to stay safe is not the same as camping", [
        "Section 5 of the Freedom Camping Act 2011 defines freedom camping as camping outside a camping ground, using a tent or a motor vehicle, within 200 metres of a formed road, of anywhere vehicles can reach, or of the sea or a harbour. It then carves out three things: temporary and short-term parking, day-trip excursions, and resting or sleeping at the roadside in a motor vehicle to avoid driver fatigue.",
        "The Act gives no clock time for when a rest becomes a night, so an officer judges what they see. Pulling over because you are too tired to drive safely is the situation the exclusion protects. Picking a pretty spot at dusk and setting up to sleep until morning is the situation it does not, and stopping early rather than pushing on tired is the right call either way.",
      ], ["Tired is a reason to stop, not a loophole","The Act sets no minimum or maximum rest time","Leave in the morning, not the next evening"]),
      s("Why a car runs into trouble on council land", [
        "On land a council manages, section 10 allows freedom camping in a tent or a self-contained vehicle unless a bylaw restricts or prohibits it. A vehicle that is not self-contained can camp only where a bylaw made under section 11A names the area, or under other legislation. Camping in a non-certified vehicle anywhere else is an infringement offence, and so is parking up to do it.",
        "Self-contained now means a green warrant, which needs a toilet fixed inside the vehicle plus water, wastewater and rubbish systems. A saloon, a hatchback or a van carrying a portable toilet does not qualify. Christchurch City Council says it plainly: if you are sleeping in a vehicle without facilities, you need to stay in a camping ground that has facilities you can use.",
        "Tents are no easier in the biggest city. Auckland Council states that freedom camping in tents in public places is not allowed in Auckland, and its roadside permission applies only to certified self-contained vehicles.",
      ], ["No fixed toilet means no green warrant","A blue sticker has not counted since 7 June 2026","Check the council before the night, not at midnight"]),
      s("The few places that open a spot to cars", [
        "A council can say yes to non-certified vehicles, but it has to name the area in a bylaw, and few do. Central Hawke's Bay's 2024 bylaw lets any vehicle or tent camp at Pourerere Beach Road and at Te Paerahi Beach in Pōrangahau, and Pourerere needs a ballot permit from mid-December to the end of February. Whakatāne's 2024 bylaw permits vehicles that are not self-contained at Aniwhenua Reserve near Murupara, for a maximum of seven nights in any four-week period.",
        "Even where a spot is open to cars, it comes with conditions a council car park would never carry. Central Hawke's Bay limits any one area to three vehicles and three tents, requires you to leave by noon and sets a one-week stand-down before you return to the same place. The council's web page can lag its bylaw, and its page still mentions blue stickers, which stopped counting on 7 June 2026, so read the schedule rather than the summary.",
      ], ["Only the bylaw's named sites count","Expect stand-down periods and vehicle caps","Permits can be ballot-based in peak season"]),
      s("Conservation land, where cars have more room", [
        "On public conservation land the default runs the other way. Section 15 of the Act permits freedom camping on land DOC manages unless a notice or another law restricts it, and DOC's page says you can freedom camp on public conservation land except where it is specifically prohibited or restricted. Many of DOC's notices cover car parks beside tracks, road ends and visitor centres, so the notice list matters more than the type of vehicle.",
        "Two limits catch people sleeping in cars. DOC-administered scenic and recreation reserves are closed to freedom camping unless DOC provides or approves a campsite, under the Reserves Act 1977, and DOC will not allow dogs to camp with you in a national park. DOC campsites are the straightforward alternative: basic ones cost nothing, and standard ones charge $10 to $20 per adult per night and list vehicle access.",
      ], ["DOC reserves are closed unless a campsite is provided","Self-contained-only notices still apply to cars","Dogs cannot camp with you in national parks"]),
      s("What a mistake costs", [
        "Camping in a vehicle that is not self-contained on council land, or parking up to do it, is a $400 infringement. So is breaking a bylaw prohibition or restriction, and so is sleeping in a certified vehicle with more people than its certificate allows. Failing to display a warrant card where one is required is $200, refusing to leave when an enforcement officer tells you to is $600, and damaging the area or leaving waste outside a bin is $800. The amounts are set by the Freedom Camping (Penalties for Infringement Offences) Regulations 2023.",
        "A notice sets a payment deadline, 28 days from delivery on the Act's default form, and explains how to challenge it. A court can fine more than the notice amount, up to $1,200 for a $400 offence. Officers can also seize and impound a vehicle where that is reasonable and necessary, for example to protect public health, wildlife or access or to stop an ongoing offence, and if you are with the vehicle they must first tell you to stop and warn you.",
        "If the car is a rental, the notice usually goes to the company. A hire agreement can make you liable for the fee and an administration charge, and the company must send you the notice within five working days before charging the card you left at pick-up.",
      ], ["$400 for a non-certified vehicle on council land","$600 for refusing to leave when told","Rental companies can pass the fee to your card"]),
      s("Emergencies, housing and bad weather", [
        "The Act includes defences where breaking the rule was necessary to save or protect life or health, prevent injury or serious damage to property, or avoid damage to the environment, and your conduct was reasonable (section 22). A medical problem or a storm that closes the road can fit. Ordinary tiredness is handled by the fatigue exclusion in section 5, not by a defence.",
        "The Act also says a person is not freedom camping if they cannot live in appropriate residential accommodation and are living in a tent or vehicle as a result, unless they are in New Zealand on a visitor visa. Councils treat this as a welfare issue: Auckland Council points anyone worried about a person living in a vehicle to its community safety and support page.",
      ], ["Genuine emergencies have a statutory defence","Fatigue is excluded, not defended","Welfare concerns go to the council's support page"]),
      s("Where to sleep legally instead", [
        "A camping ground is the simplest answer, and the Act defines it broadly: a ground registered under the Camping-Grounds Regulations 1985 or any site where a fee is payable for camping. That covers holiday parks, council-run grounds and DOC campsites that charge. Christchurch points people in cars and tents to its four council-operated camping grounds at Duvauchelle, Okains Bay, Pigeon Bay and Spencer Beach.",
        "Private land with the owner's permission falls outside the Act, because it applies only to land managed by councils, DOC, LINZ and, by bylaw, NZTA. A friend's driveway or a farm that has said yes is lawful in a way a street never is. Agree the details first, so the arrangement is an invitation rather than an assumption.",
      ], ["Registered grounds and paid sites count as camping grounds","Basic DOC campsites cost nothing","Written permission is the safest kind"]),
      s("Checking before you shut the door", [
        "Photograph the sign at the entrance, read the vehicle requirement and stay limit, and look at the council's freedom camping page or bylaw map the evening before. Auckland lists 58 prohibited areas and 20 restricted ones, so even a city that allows roadside nights can ban a particular street. If an officer asks you to leave, go: refusing is its own $600 offence.",
        "KiwiCamping, an iPhone app, carries DOC's freedom-camping notices by district alongside its campsite and hut data, with dump stations, filters, saved places and trips. Place details, saved places and guides work without signal, while map tiles, routing, weather and photos need it, so look up a campsite before you lose reception. The notices are DOC's conservation-land ones rather than council bylaws, so the council's own page still decides a street or car park.",
      ], ["Photograph the sign on arrival","Check the council map the evening before","Leave when an officer says so"]),
      s("The short version", [
        "Resting because you are too tired to drive is fine. Camping is a different act, and a car without a green warrant has no right to a council street or car park overnight, with a few named exceptions.",
        "Use a campground or a DOC campsite, ask a landowner, or find the rare council site that welcomes ordinary vehicles. Pack a fallback so a full site never turns into a fine.",
      ]),
    ],
    faq: [
      ["Can I sleep in my caravan on the road in NZ?", "Councils apply the freedom camping rules to caravans as well as vans, and Auckland's rules cover a vehicle or caravan on its land. On a council road you need a certified self-contained set-up unless the council has named the spot for others, and the street itself may be prohibited or time-limited. Auckland allows certified vehicles on most roadsides for two nights, while Christchurch bans freedom camping in its central city, so check the bylaw for the exact street."],
      ["Can you camp in NZ without a self-contained vehicle?", "Yes, but not on most public land. In a council area the Act permits tents and certified self-contained vehicles, so a car or van without a green warrant needs a campground, private land with permission, a conservation area DOC has not restricted, or a site a council has named for it, such as Pourerere Beach Road in Central Hawke's Bay."],
      ["Can I sleep in my car at a rest area or lay-by?", "A short rest to avoid driver fatigue is excluded from freedom camping, so pulling over to sleep because you are too tired to drive is not an offence under the Act. A planned night is different, and the owner matters: a rest area that NZTA manages is NZTA land, which falls under the Act only if a council has declared it by bylaw with NZTA's written consent. Read the sign for the owner's rules."],
    ],
    sources: [
      { label: "Freedom Camping Act 2011 (legislation.govt.nz)", url: "https://www.legislation.govt.nz/act/public/2011/0061/latest/whole.html" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "Camping-Grounds Regulations 1985", url: "https://www.legislation.govt.nz/regulation/public/1985/0261/latest/whole.html" },
      { label: "DOC: Freedom camping on public conservation land", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
      { label: "DOC: Campsite categories, facilities and fees", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/facilities-and-fees/" },
      { label: "Christchurch City Council: Camping and campervans", url: "https://ccc.govt.nz/rec-and-sport/camping" },
      { label: "Auckland Council: General rules for freedom campers", url: "https://www.aucklandcouncil.govt.nz/en/parks-recreation/freedom-camping-auckland/general-rules-information-freedom-campers-auckland.html" },
      { label: "Central Hawke's Bay District Council: Freedom Camping Bylaw 2024", url: "https://chbdc.govt.nz/assets/Document-Library/Bylaws/20240627-Central-Hawkes-Bay-District-Council-Freedom-Camping-Bylaw.pdf" },
      { label: "Whakatāne District Council: Freedom Camping Bylaw 2024", url: "https://www.whakatane.govt.nz/files/documents/freedom_camping_bylaw_2024.pdf" },
    ],
  }),

  a({
    slug: "can-i-camp-anywhere-on-doc-land",
    publishAt: "2026-11-10",
    title: "Can I Camp Anywhere on DOC Land in NZ? (2026 Rules)",
    description: "No: DOC reserves ban camping outside campsites, other conservation land allows it unless a notice says no, and Great Walks need booked sites. 2026 rules.",
    category: "Rules & safety",
    region: "New Zealand",
    places: ["Conservation areas","DOC reserves","National parks","Great Walks"],
    imageAlt: "Open grassy DOC campsite flat with a picnic table among native trees at Siberia Flat, Kahurangi National Park",
    related: ["doc-campsite-rules","doc-campsites-new-zealand-guide","freedom-camping-rules-new-zealand"],
    intro:
      "No. Camping on land managed by the Department of Conservation is allowed in some places and banned in others, and the rule that decides it is the kind of land you are on and whether DOC has restricted camping there. Under the Freedom Camping Act 2011, public conservation land is open to freedom camping unless DOC has prohibited or restricted it by notice, but DOC-administered scenic and recreation reserves are closed to camping outside designated campsites, and national parks and Great Walks carry their own limits. DOC publishes its banned and restricted places district by district, so the list is the thing to check.",
    sections: [
      s("Three kinds of DOC land, three different answers", [
        "The Act defines conservation land as land DOC controls or manages under the Conservation Act 1987, the National Parks Act 1980, the Reserves Act 1977 or the Wildlife Act 1953. On that land, section 15 says freedom camping is permitted unless a DOC notice under section 17, or another enactment, restricts or prohibits it. That makes conservation parks and ordinary conservation areas the most open category, with notices carving out the exceptions.",
        "Reserves work the other way round. Under section 44 of the Reserves Act, nobody may use a reserve or a vehicle or tent on it for personal accommodation without the Minister's consent, except in set-apart camping grounds and a few other defined cases. DOC says freedom camping is prohibited in every DOC-administered reserve that is not listed as allowing self-contained vehicles, and national parks add their own track-by-track rules.",
      ], ["Conservation areas: open unless a notice says no","Reserves: closed unless a campsite is provided","National parks: read the park or track page"]),
      s("DOC's notice list, district by district", [
        "DOC keeps a page of conservation areas where freedom camping is prohibited or restricted, grouped by district from Northland to Southland and Fiordland, with an interactive map and a PDF notice for each site. The notices are the legal instrument, so a site can be banned outright, limited to certified self-contained vehicles, capped at a number of nights in a calendar month, or restricted to certain hours or seasons. The page adds that not every restricted area has a sign.",
        "The examples show the range. In Northland, Cape Reinga and Tapotupotu in the Te Paki reserve are prohibited, while Bland Bay is open to self-contained vehicles only. In the Central North Island, Whakapapa Village and most Tongariro National Park car parks are prohibited, but Pillars of Hercules and Umukarikari in Kaimanawa Forest Park allow certified vehicles for four nights in a calendar month. Franz Josef Glacier road car parks on the West Coast and the Kepler Track and The Divide car parks in Fiordland are prohibited.",
        "Some entries add hours and seasons. Tukino Mountain Road in Tongariro National Park allows certified vehicles only from 5 pm to 9 am from 1 November to 30 April, and Owaka Heads in the Catlins applies a similar overnight window from 2 October to 31 March. In Canterbury, Quailburn and Round Bush are restricted to four nights a month but allow vehicles that are not self-contained, and in Otago, Rum Curries in the Gibbston Conservation Area is limited to tents for two nights a month.",
      ], ["Look up the exact site, not the district","Four nights a month is a common cap","Some notices allow non-certified vehicles"]),
      s("Away from the road: national parks and backcountry", [
        "The Act's definition of freedom camping reaches only as far as 200 metres from a road, a vehicle-accessible area, a Great Walks Track or the sea. Further in, the rules come from the park or the track. They differ. On the Round the Mountain Track in Tongariro National Park, DOC says camping outside designated campsites is allowed except within 500 m of the Tongariro Northern Circuit and within 200 m of the Round the Mountain Track itself.",
        "On the Rees and Dart tracks in Mount Aspiring National Park, DOC's brochure says camping is allowed everywhere except the fragile alpine and subalpine areas between Shelter Rock Hut and Dart Hut and on the privately owned Rees Valley Station, and that the Cascade Saddle Route is limited to the toilet area at Cascade Creek. In Abel Tasman National Park, the trip sheet says camping is permitted only in designated campsites and hammocks are not allowed.",
        "A few rules apply nearly everywhere. DOC's freedom camping page lists the basics: obey camping restriction signs, manage your waste including human waste, light no fires, do not damage plants or animals, and be considerate. Its low-impact guide asks you to use the toilet provided, and to follow its poo-in-a-loo guidance when there is none.",
      ], ["Beyond 200 m, the park's own rules apply","Hammocks are banned at Abel Tasman campsites","Never assume a quiet flat is allowed"]),
      s("Great Walks: the place you sleep is part of the booking", [
        "DOC says freedom camping is generally not permitted near Great Walks tracks, and the Great Walks themselves are built around booked huts and campsites. Camping is not permitted on the Milford Track at all. Except for Milford and Paparoa, every Great Walk offers camping near huts or in designated areas, and DOC describes nearly 60 Great Walk campsites with toilets, handwashing sinks and a water supply.",
        "At Lake Waikaremoana the DOC page says camping on the track is permitted only at the designated campsites, and on the Abel Tasman Coast Track every hut and campsite must be booked all year, with a penalty fee or a request to leave for people without a valid booking or at the wrong site. DOC's booking terms set the penalty rate for unbooked use at the normal fee plus a full adult fee, and promise no guaranteed access without a booking except as emergency shelter in adverse conditions.",
      ], ["Camping is not allowed on the Milford Track","Book the exact campsite named on your ticket","Unbooked use is charged at the penalty rate"]),
      s("Campsite categories and what they cost", [
        "DOC campsites fall into serviced, standard, basic, backcountry and Great Walk categories. Basic campsites are free and have very limited facilities, standard ones charge adults $10 to $20 a night, and serviced unpowered sites are $25. Child fees are roughly half, infants are free, and backcountry and Great Walk prices vary, so each campsite's own page is the reference.",
        "DOC charges two adults if you book or occupy a campsite you do not intend to use, for example by leaving a vacant tent or vehicle on it. Each campsite page tells you whether the site can be booked or is first-come, and DOC's terms apply the penalty rate to unbooked use of a bookable site. Campsites are the straightforward answer where a district's notices rule out camping by the roadside.",
      ], ["Basic campsites cost nothing","Standard campsites charge per adult","A vacant tent is charged as two adults"]),
      s("Fines, notices and the rules that bite", [
        "Camping where a DOC notice prohibits or restricts it is a $400 infringement, and so is making preparations to camp there by pitching a tent or parking up to do it. Failing to display a warrant card on land restricted to self-contained vehicles is $200, refusing to leave when an enforcement officer requires it is $600, and damaging land, plants or structures or leaving waste outside a bin is $800. These amounts are in the Freedom Camping (Penalties for Infringement Offences) Regulations 2023, and DOC officers can also seize and impound a vehicle in the circumstances the Act sets out.",
        "Other DOC rules sit alongside the fines. You cannot camp or visit a hut on conservation land with a pet unless DOC has approved it in writing, even if the pet stays in your vehicle, and dogs must never camp with you in a national park. A permit from DOC is required to fly a drone on public conservation land, and fire rules at campsites are strict, so check the campfire and fire season advice before you light anything.",
      ], ["$400 for camping against a notice","$200 for no warrant card where required","Pets need DOC's written approval"]),
      s("Cars, vans and tents on DOC land", [
        "The vehicle you are in matters less under DOC's freedom camping rules than on council land. Section 15 lets any freedom camper stay on open conservation land, certified self-contained or not, unless the notice says self-contained only. Where a notice does say that, a warrant card must be displayed, and since 7 June 2026 only a green warrant counts.",
        "A tent or a car without a green warrant is therefore workable in an open conservation area, at a DOC campsite, or on the few restricted sites that allow non-certified vehicles. It is not workable in a scenic or recreation reserve, at a listed prohibited car park, or on the Great Walks. If you are unsure whether a patch of land is a reserve, a conservation area or a national park, the DOC page for the place states it.",
      ], ["Green warrants only on self-contained-only land","Tents and cars work on open conservation land","Reserves and listed car parks do not"]),
      s("Checking on the day", [
        "Look for the camping restriction signs at the entrance: one means overnight camping is prohibited within 200 m, the other means only certified self-contained vehicles may camp. Then check DOC's prohibited and restricted list and the place's own page for alerts, because closures after storms change faster than printed information.",
        "KiwiCamping is an iPhone app with DOC campsite and hut data, DOC's freedom-camping notices by district, filters, saved places and trips, so you can look up the notice for the area before you drive in. Place details, saved places and guides work without signal; map tiles, routing, weather and photos need it. DOC's page and the sign on site decide, so treat the app as a prompt to check.",
      ], ["Check DOC's list and the place's alerts","Read the sign at the entrance","Save the notice before you lose signal"]),
      s("The short version", [
        "You cannot camp anywhere on DOC land. Open conservation areas allow it until a notice says otherwise, reserves allow it only at designated campsites, and Great Walks require booked huts or campsites.",
        "Check the district notice, the park or track page and the sign at the entrance, and keep a DOC campsite in mind as the fallback if the first option turns out to be restricted.",
      ]),
    ],
    faq: [
      ["Can you freedom camp on DOC land?", "Yes, on much public conservation land, unless DOC has prohibited or restricted it. DOC publishes a list of prohibited and restricted conservation areas by district, and its scenic and recreation reserves are closed to freedom camping outside campsites. Obey the signs, manage your waste, light no fires and do not damage plants or animals."],
      ["Is wild camping legal in New Zealand?", "Camping away from campsites is lawful in some places and not others. Within 200 m of a road or the sea on public land it is freedom camping, governed by the Act and bylaws and notices, and on private land you need the owner's permission. Further into the backcountry the park's rules apply, such as Tongariro's 500 m buffer around the Northern Circuit or Abel Tasman's designated campsites only."],
      ["Can I camp on DOC land in a car or van that is not self-contained?", "Often yes, on open conservation land, because DOC's notices restrict some sites to self-contained vehicles but the Act does not require certification everywhere on DOC land. You cannot camp in scenic or recreation reserves outside designated campsites, at listed prohibited car parks or on Great Walk tracks. Some DOC sites, such as Quailburn and Round Bush in Canterbury, specifically allow non-certified vehicles for four nights a month."],
    ],
    sources: [
      { label: "DOC: Freedom camping on public conservation land", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
      { label: "DOC: Conservation areas where freedom camping is prohibited or restricted", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/prohibited-conservation-areas/" },
      { label: "DOC: Campsite categories, facilities and fees", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/facilities-and-fees/" },
      { label: "DOC: How to be a low impact camper", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/low-impact-camping/" },
      { label: "DOC: Pets on conservation land", url: "https://www.doc.govt.nz/parks-and-recreation/know-before-you-go/pets-on-conservation-land/" },
      { label: "DOC: Round the Mountain Track, Tongariro National Park", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/central-north-island/places/tongariro-national-park/things-to-do/tracks/round-the-mountain-track/" },
      { label: "DOC: Rees and Dart tracks brochure", url: "https://www.doc.govt.nz/documents/parks-and-recreation/tracks-and-walks/otago/rees-dart-track-brochure.pdf" },
      { label: "DOC: Abel Tasman Coast Track trip sheet", url: "https://www.doc.govt.nz/globalassets/documents/parks-and-recreation/tracks-and-walks/nelson-marlborough/abel-tasman-coast-track-trip-sheet.pdf" },
      { label: "DOC: Milford Track", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/tracks/milford-track/" },
      { label: "DOC: Lake Waikaremoana Great Walk", url: "https://www.doc.govt.nz/waikaremoana" },
      { label: "DOC: Huts, campsites and Great Walks terms and conditions", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/bookings-terms-and-conditions/huts-campsites-cabins-and-lodges-terms-and-conditions/" },
      { label: "Freedom Camping Act 2011", url: "https://www.legislation.govt.nz/act/public/2011/0061/latest/whole.html" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "Reserves Act 1977, section 44", url: "https://www.legislation.govt.nz/act/public/1977/0066/latest/DLM444690.html" },
    ],
  }),

  a({
    slug: "can-i-park-overnight-at-a-beach-in-new-zealand",
    publishAt: "2026-11-11",
    title: "Can I Park Overnight at a Beach in NZ? (2026 Rules)",
    description: "Usually not: most council and DOC beach car parks ban overnight stays or allow only certified self-contained vehicles for a few nights. 2026 rules.",
    category: "Rules & safety",
    region: "New Zealand coast",
    places: ["Council beach car parks","DOC coastal car parks","Beachside reserves","Permit and ballot sites"],
    imageAlt: "Orange sand and gentle surf at Langs Beach in Northland on a bright day",
    related: ["freedom-camping-rules-new-zealand","earthquake-tsunami-camping-new-zealand","camping-rules-local-councils-new-zealand"],
    intro:
      "Usually not, and it depends on who manages the car park, reserve or road beside the sand. Freedom camping is lawful only where the Freedom Camping Act 2011, a council bylaw or a DOC notice allows it, so many beach car parks and reserves ban overnight stays, some allow certified self-contained vehicles for a few nights, and a few use permits or ballots. A beach is not a special category with a rule of its own, and a blue warrant has not counted since 7 June 2026.",
    sections: [
      s("A beach has no rule of its own", [
        "The Freedom Camping Act 2011 treats camping within 200 metres of the mean low-water springs line of the sea or a harbour as freedom camping, the same as within 200 metres of a formed road. Which rule applies then depends on who controls the land you are standing on: a council, DOC, LINZ or, if it is private, an owner whose permission you need.",
        "That is why neighbouring beaches can have opposite answers. Council reserves are caught by section 44 of the Reserves Act, which bars personal accommodation on a reserve without the Minister's consent. DOC lists its own banned and restricted car parks, and LINZ land is closed to freedom camping unless a LINZ notice permits it. Coastal roads and car parks outside reserves are the places a council bylaw usually decides.",
      ], ["Find the manager first, then the rule","Reserves are closed unless a campsite is provided","The sign beats any listing"]),
      s("Three councils on the coast", [
        "Christchurch has a City Coastal Restricted Zone running from Waimairi Beach to South New Brighton, including North Beach, North New Brighton and New Brighton. Inside it, only certified self-contained vehicles may camp, for no more than four nights in any 30 days and no more than two in one place, with the second spot at least 500 m from the first. Some coastal sites are fully prohibited: the New Brighton north and south ramp car parks, the Southshore Spit, and the North Beach car park from 7 pm Friday to 7 pm Sunday between 1 October and 1 May.",
        "Wellington City bans camping on all land managed under the Reserves Act 1977 and the Wellington Town Belt Act 2016, which the council says includes a number of coastal car parks. Its designated sites for certified self-contained vehicles include the Evans Bay Marina car park on the harbour and the Te Kopahou Visitors Centre car park on the south coast, which is not suitable for vehicles over 7 m or caravans.",
        "Auckland allows certified self-contained vehicles on most council roadsides and car parks but prohibits freedom camping at 58 named areas, at council reserves and in regional parks. Paid camping is available in designated areas of regional parks instead. In Ōhope, Whakatāne District Council's bylaw prohibits freedom camping at Mahy Reserve and Wharekura East Reserve, and along Muriwai Drive in Whakatāne.",
      ], ["Christchurch coastal zone: four nights in 30 days","Reserves and many coastal car parks are banned","Check the schedule, not just the headline"]),
      s("Coastal car parks DOC has closed", [
        "DOC lists coastal sites where freedom camping is prohibited, and the list reads like a tour of well-known beaches. In Coromandel, the Cathedral Cove car park and the Waikawau Beach car parks are prohibited. At Cape Kidnappers in Hawke's Bay the track amenity area is closed, and in the Catlins the Papatowai picnic point is too. On the Marlborough Sounds foreshore, Broughton Bay, Anakoha Bay and Tom Canes Bay are prohibited, and so are Momorangi Bay and Ngakuta Bay on Queen Charlotte Drive.",
        "Some sites sit in the middle. DOC allows certified self-contained vehicles at Kawatiri Beach Reserve at the Buller River mouth for four nights in a calendar month, and at Castlepoint for four nights a month between 5 pm and 9 am from 1 November to 30 April. At Owaka Heads in the Catlins a similar 5 pm to 9 am window runs from 2 October to 31 March. DOC also notes that not every restricted area has a sign.",
      ], ["Prohibited and restricted look the same from the road","Hours and seasons can cut the allowed window","DOC's list names each car park"]),
      s("Seasons, ballots and night caps", [
        "A few beaches manage demand with permits. Central Hawke's Bay District Council requires a permit to camp at Pourerere Beach from mid-December to the end of February, allocated by ballot, with applications due each year by the end of October. Its bylaw allows vehicles that are not self-contained and tents at Pourerere Beach Road and Te Paerahi Beach in Pōrangahau, which makes them unusual, but they carry bylaw conditions such as a leave-by-noon rule and a one-week stand-down.",
        "The council's web page still mentions blue stickers, which stopped counting for freedom camping on 7 June 2026, and it gives a permit year that looks out of date. Treat the bylaw and the council's current permit page as the sources, and apply early rather than turning up in January hoping for a space.",
      ], ["Ballot permits close around the end of October","Leave by noon and respect the stand-down","Use the bylaw, not an old listing"]),
      s("Tides, tsunami and the edge of the sand", [
        "Check tide times before you park on or near sand, because a car left below the high-tide line can be reached by water in the night. Driving on beaches has its own rules and is not covered here. Park on firm ground above the debris line, leave room to drive out without crossing soft sand, and keep access clear for other users.",
        "Much of the coast sits in a tsunami zone. Christchurch changed its evacuation zones in October 2026 and now has one blue zone for Christchurch and Banks Peninsula, and it tells people to leave the zone immediately if an earthquake is long or strong, if the sea level changes suddenly or unusual noises come from the sea, or if an official warning arrives. The official rule is long or strong, get gone: move to high ground or inland straight away instead of waiting for a warning.",
      ], ["Check the tide table before parking","Know your way to high ground on arrival","Long or strong, get gone"]),
      s("Fines, tents and what an officer sees", [
        "On council land, camping where a bylaw prohibits or restricts it is a $400 infringement, as is camping in a vehicle that is not self-contained. Failing to display a warrant card is $200, refusing to leave when an enforcement officer tells you to is $600, and damaging the area or leaving waste outside a bin is $800. A court can fine more, and officers can impound a vehicle where the Act allows.",
        "Waste is a common beach offence. Christchurch says it is not permitted to go to the toilet beside the road, in the bush, on the ground, on the beach or in a river, creek or lake, and the coastal zone gets regular monitoring and enforcement. Christchurch also says its parking spaces are for vehicles only, so awnings, tables, chairs and washing lines belong in a campground.",
        "Tents are no easier at the coast. Auckland does not allow tent freedom camping in public places, and Christchurch tells tent campers and people sleeping in vehicles without facilities to use a camping ground. Fires are a risk on dry beaches, and Christchurch advises a gas cooker instead of a campfire.",
      ], ["$400 for camping against a bylaw","$800 for waste outside a bin","Keep gear inside the parking bay"]),
      s("Where to stay instead", [
        "Beach camping that is allowed usually means a campground. Christchurch names Spencer Beach Top 10 Holiday Park and South Brighton Holiday Park as the closest grounds to its coastal zone, and Auckland offers paid camping in designated areas of its regional parks. In Wellington, certified self-contained vehicles can pay for overnight parking at the Barnett Street car park on the waterfront.",
        "DOC campsites on the coast are the other reliable option. They carry categories and booking rules on each campsite page, and a booked place removes the guesswork of notices and signs. Holiday parks and council-operated grounds also take vehicles that are not certified, which is the main reason to choose one over a car park.",
      ], ["Spencer Beach and South Brighton near Christchurch","Barnett Street in Wellington is paid and certified-only","Book DOC beach campsites ahead in summer"]),
      s("Checking on the day", [
        "Read the sign at the entrance, photograph it, and look at the council's bylaw map or DOC's list before you set up. If a car park is full, do not park along the access road, because overflow lines are what get beach sites closed.",
        "Beach car parks run into DOC notices all the time, so KiwiCamping's DOC campsite and hut data, its freedom-camping notices by district, filters and saved places are the first things to open. Place details, saved places and guides work without signal, while map tiles, routing, weather and photos need it. Council bylaws are not in the app, so the council page decides when the beach is council land.",
      ], ["Photograph the sign when you arrive","Do not create an overflow line","Council bylaws sit with the council"]),
      s("The short version", [
        "A beach car park is not a free campsite. It is council land, DOC land or a reserve, and each answers differently: usually no, sometimes yes for certified self-contained vehicles for a few nights, and occasionally yes by permit.",
        "Decide before dark, keep a campground as the fallback, and treat the tide table and the route to high ground as part of the plan rather than an afterthought.",
      ]),
    ],
    faq: [
      ["Can you camp on the beach in NZ?", "Not freely. Beaches are managed by councils, DOC or private owners, and freedom camping is allowed only where the Act, a bylaw or a DOC notice permits it. Many beachside reserves and car parks prohibit it, some allow certified self-contained vehicles for a few nights, and a few, like Pourerere Beach in Central Hawke's Bay, use a permit ballot over summer."],
      ["Can I park overnight at a beach without a self-contained vehicle?", "Usually not on council or DOC land, because the Act allows freedom camping on council land only in tents or certified self-contained vehicles unless a bylaw names the site. The exceptions are rare and carry conditions, such as the two Central Hawke's Bay beaches. A campground or a DOC campsite is the safer option."],
      ["Is it legal to sleep on a beach in New Zealand?", "Sleeping in a tent or a vehicle within 200 m of the sea on public land is freedom camping, so those rules apply. Bedding down with no tent or vehicle is outside the Act's definition, but reserves still bar personal accommodation without the Minister's consent, councils and DOC set their own limits, and Auckland allows no tent freedom camping in public places. Ask the owner if the beach is private."],
    ],
    sources: [
      { label: "Freedom Camping Act 2011", url: "https://www.legislation.govt.nz/act/public/2011/0061/latest/whole.html" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "Reserves Act 1977, section 44", url: "https://www.legislation.govt.nz/act/public/1977/0066/latest/DLM444690.html" },
      { label: "Christchurch City Council: Camping and campervans", url: "https://ccc.govt.nz/rec-and-sport/camping" },
      { label: "Christchurch City Council: Freedom Camping Bylaw 2021", url: "https://ccc.govt.nz/the-council/plans-strategies-policies-and-bylaws/bylaws/freedom-camping-bylaw" },
      { label: "Christchurch City Council: Tsunami evacuation zones and routes", url: "https://ccc.govt.nz/services/civil-defence/tsunami-evacuation-zones-and-routes" },
      { label: "Wellington City Council: Freedom camping in Wellington", url: "https://wellington.govt.nz/recreation/outdoors/camping-in-wellington" },
      { label: "Auckland Council: General rules for freedom campers", url: "https://www.aucklandcouncil.govt.nz/en/parks-recreation/freedom-camping-auckland/general-rules-information-freedom-campers-auckland.html" },
      { label: "Whakatāne District Council: Freedom Camping Bylaw 2024", url: "https://www.whakatane.govt.nz/files/documents/freedom_camping_bylaw_2024.pdf" },
      { label: "Central Hawke's Bay District Council: Freedom camping", url: "https://www.chbdc.govt.nz/our-district/exploring-central-hawkes-bay/freedom-camping/" },
      { label: "Central Hawke's Bay District Council: Freedom Camping Bylaw 2024", url: "https://chbdc.govt.nz/assets/Document-Library/Bylaws/20240627-Central-Hawkes-Bay-District-Council-Freedom-Camping-Bylaw.pdf" },
      { label: "DOC: Conservation areas where freedom camping is prohibited or restricted", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/prohibited-conservation-areas/" },
      { label: "DOC: Freedom camping on public conservation land", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
    ],
  }),

];
