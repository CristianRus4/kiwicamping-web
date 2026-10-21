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
        "The Act includes defences where breaking the rule was necessary to save or protect life or health, prevent injury or serious damage to property, or avoid damage to the environment, your conduct was reasonable, and the effects were adequately remedied or mitigated (section 22). A medical problem or a storm that closes the road can fit. Ordinary tiredness is handled by the fatigue exclusion in section 5, not by a defence.",
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
        "Reserves work the other way round. Under section 44 of the Reserves Act, nobody may use a reserve or a vehicle or tent on it for personal accommodation without the Minister's consent, except in set-apart camping grounds and a few other defined cases. You cannot freedom camp in DOC-administered scenic or recreation reserves unless a designated campsite is provided or approved by DOC, and national parks add their own track-by-track rules.",
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
      ["Can you camp in the DOC backcountry away from huts and campsites?", "In some places, and the park's own rules decide. Within 200 m of a road or the sea it counts as freedom camping, which the Act, DOC's notices and bylaws govern. Further into the backcountry the park's rules apply, such as Tongariro's 500 m buffer around the Northern Circuit or Abel Tasman's designated campsites only."],
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

  a({
    slug: "can-i-camp-on-a-farm-or-private-land-in-nz",
    publishAt: "2026-11-12",
    title: "Can I Camp on a Farm or Private Land in NZ? (2026)",
    description: "Yes, with the landowner's permission. The Freedom Camping Act does not cover private land, but the Trespass Act 1980 does. 2026 guide to gates, stock and fire.",
    category: "Rules & safety",
    region: "New Zealand",
    places: ["Farms and farm stays","Private paddocks","Marae and Māori land","Crown-leased land"],
    imageAlt: "Wooden farm gate across a grassy farm track with paddocks and fencing beyond, near Matamata in the Waikato",
    related: ["freedom-camping-rules-new-zealand","where-to-camp-in-new-zealand","responsible-camping-new-zealand"],
    intro:
      "Yes, but only with the landowner's permission, and the Freedom Camping Act 2011 does not apply. That Act covers land managed by councils, DOC, LINZ and, by bylaw, NZTA, so on a farm the owner's say decides, backed by the Trespass Act 1980, which makes it an offence to stay after being warned to leave. No green warrant or council bylaw governs a paddock, but the owner can set any conditions they like.",
    sections: [
      s("Permission is the whole rule", [
        "Being on private land without the occupier's permission is trespass. Under the Trespass Act 1980 it becomes an offence in two ways: refusing or neglecting to leave after an occupier warns you to go, and returning within two years of a warning to stay off. The warning can be spoken or in writing, and the occupier includes anyone acting under the owner's authority, such as a farm worker or manager.",
        "The penalty for either offence is a fine of up to $1,000 or up to three months in prison, and only the occupier or a constable can bring the charge. You must give your name and address if the occupier or a constable asks, and refusing or giving false details carries a fine of up to $500. 'Private land' in the Act includes land held under a lease or occupied by someone, so a leaseholder can say no even where the Crown owns the title.",
      ], ["A yes from the occupier is the only permission that counts","Get it before you arrive, not at the gate","You can be warned to stay off for two years"]),
      s("Why the freedom camping rules mostly fall away", [
        "The Act applies to a council's own land, conservation land, LINZ land and NZTA land that a council has declared by bylaw. A farm is none of these. Southland District Council says its freedom camping bylaw applies to public places, not conservation land or private property, and that camping on private property needs the owner's consent. Christchurch says the same of its bylaw, and Auckland defines freedom camping as staying on council-controlled public land.",
        "So the infringement fees do not apply, and the green warrant requirement does not either: nothing in the Act obliges a vehicle on a farm to be certified self-contained. An owner may still ask for it, because they may want a toilet in the vehicle. Clutha District Council notes that tent camping is allowed on private land with the landowner's permission, in contrast to its public land, where tents are limited to campgrounds and DOC campsites.",
      ], ["No fixed toilet needed by law on private land","Owners can still require a certified vehicle","Councils' freedom camping bylaws stop at the boundary"]),
      s("Asking, and being asked to pay", [
        "Ask the person who occupies the land, not a neighbour or a passer-by, and say how many people, how many vehicles, how many nights and where you would park. Many farmers say yes to one or two people for a night if asked politely, and some will name a paddock or a river flat. Treat the answer as the rules for the night, and leave before you are asked.",
        "Farm stays and online host listings turn that permission into a booking. A listing is the owner's invitation, so keep the confirmation and the directions, because gates and tracks on a farm are not signposted like a campground. If the owner charges, the arrangement is a business matter: the Camping-Grounds Regulations 1985 define a camping ground as land used, for rent or other reward, to house two or more independent parties in temporary living places, and a ground like that needs a registration from the local authority. Ask the host whether theirs is registered if you want reassurance.",
      ], ["Say how many, how long and where","Keep the host's confirmation","Registration applies to paid grounds with two or more parties"]),
      s("Stock, gates and dogs", [
        "The Trespass Act treats disturbing farm animals as an offence in its own right. Disturbing horses, cattle, sheep, pigs or poultry on private land by means of a dog, a weapon or a vehicle carries a fine of up to $300 or a month in prison, and wilfully or recklessly disturbing them carries up to $500 or a month in prison. Park where the owner points, away from stock, and do not drive across paddocks with animals in them.",
        "Leave gates as you find them. The Act separately makes it an offence for a trespasser to wilfully leave a shut gate open, or an open gate shut, on private land, with a fine of up to $200. The practical rule is the same for invited visitors: open gates stay open and shut gates stay shut unless the owner has said otherwise. Dogs belong on a lead or in the vehicle, and a farmer is entitled to refuse them.",
      ], ["Park away from stock","Leave gates as you found them","Dogs on a lead or left at home"]),
      s("Fire, spray and poison on rural land", [
        "A farm is working land. WorkSafe says farmers are not responsible for the safety of people crossing non-work areas away from farm buildings, but they must manage risks from work carried out in the area, such as spraying, and visitors must take reasonable care and follow reasonable instructions. Ask about recent spraying, effluent ponds, bulls, electric fences and tracks before you set up, and accept the answer.",
        "Fire is the owner's decision as well as the law's. Check the current fire season for the district and ask the owner before any campfire, and rely on a gas cooker when in doubt. DOC's pest control on conservation land uses 1080 with warning signs at track entrances, and DOC says dogs are highly susceptible to it, so a farm that borders conservation land is worth asking about before you bring a dog. On private land, laying poison or setting traps without the occupier's authority is an offence.",
      ], ["Ask about spraying, ponds and electric fences","Use a gas cooker unless the owner says otherwise","Check for 1080 warnings near conservation boundaries"]),
      s("Water, waste and weeds", [
        "Farm water is usually untreated. DOC's own guidance for campsites says untreated water should be boiled before use, and the same sensible rule applies to a farm tank or stream. Carry your own drinking water and ask which source, if any, is meant for people.",
        "Take rubbish with you, empty tanks at a public dump station before you arrive rather than after you leave, and use a toilet on board or ask the owner where to go. Clean gear matters on rural land: DOC asks campers to clean tents and gear between locations to stop weeds, mud and pests being carried from place to place.",
      ], ["Boil or treat untreated water","Take every item of rubbish out","Clean tents and footwear between locations"]),
      s("Māori land, marae and land that only looks public", [
        "Māori freehold land is privately owned land. The Māori Land Court can hear claims for damages for trespass to it and can grant injunctions against actual or threatened trespass on Māori land or a Māori reservation, and marae and iwi campgrounds set their own terms. Ask the people who look after the place, pay any koha they request, and follow the tikanga they describe. The Freedom Camping Act also preserves rights of occupation such as nohoanga entitlements, which belong to the people who hold them.",
        "Some land looks public but is not. LINZ land is closed to freedom camping unless a LINZ notice permits it, and a notice may not permit it on LINZ land held under a Crown lease or licence. High-country stations and similar leased land are therefore the leaseholder's to allow or refuse, with no right to camp for the public. A gate with no sign is not an invitation.",
      ], ["Ask the marae or iwi organisation first","Koha is a gift, not a discount","Leased Crown land needs the leaseholder's yes"]),
      s("If you are told to leave, and what to do instead", [
        "If the owner says no, or asks you to go, leave calmly and promptly, and do not argue at the gate. Staying after a warning is an offence under section 3, and a written or spoken warning to stay off lasts two years. A trespass warning is the owner's tool and is usually avoided by a polite exit.",
        "Have a fallback before you ask: a holiday park, a DOC campsite or a council site your vehicle qualifies for. In the KiwiCamping iPhone app, saved places can hold a host's address and gate notes beside the nearest DOC campsite or dump station, and filters help find that alternative. Saved places, place details and guides work without signal, but map tiles, routing, weather and photos need it, so write the access instructions down before the track turns to gravel.",
      ], ["Leave when asked","Have a backup within an hour of arriving","Save the host's directions before signal drops"]),
      s("The short version", [
        "Private land is the one place the freedom camping rules do not reach, and the owner's permission is the rule. Ask first, follow the conditions the owner sets, look after gates and stock, and treat any refusal as final.",
        "Treat a farm as a workplace and a favour rather than a campground, keep a backup site in mind, and the night usually goes well for everyone involved.",
      ]),
    ],
    faq: [
      ["Can I camp on private land in NZ?", "Yes, if the occupier gives you permission. The Freedom Camping Act applies to public land managed by councils, DOC, LINZ and, by bylaw, NZTA, not to private farms. Without permission you can be warned to leave under the Trespass Act 1980, and refusing or returning within two years is an offence with a fine of up to $1,000 or three months in prison."],
      ["Do I need a self-contained vehicle to camp on a farm?", "Not by law. The green warrant requirement belongs to the Freedom Camping Act, which does not apply to private land. The owner may still ask for a certified vehicle, a toilet or a particular spot, so ask what they require before you arrive and follow it."],
      ["Can I camp on a farm if I pay?", "Yes, if the owner agrees. A farm that charges rent or other reward to two or more independent parties for camping falls within the Camping-Grounds Regulations 1985 definition of a camping ground, which usually means registering with the local council. A paid booking through a host listing is still a permission, so keep the confirmation."],
    ],
    sources: [
      { label: "Trespass Act 1980", url: "https://www.legislation.govt.nz/act/public/1980/0065/latest/whole.html" },
      { label: "Freedom Camping Act 2011", url: "https://www.legislation.govt.nz/act/public/2011/0061/latest/whole.html" },
      { label: "Camping-Grounds Regulations 1985", url: "https://www.legislation.govt.nz/regulation/public/1985/0261/latest/whole.html" },
      { label: "Te Ture Whenua Maori Act 1993, sections 18 and 19", url: "https://www.legislation.govt.nz/act/public/1993/0004/latest/whole.html" },
      { label: "WorkSafe: Visitors and events on farms", url: "https://www.worksafe.govt.nz/topic-and-industry/agriculture/keeping-safe-on-farms/visitors-and-events-on-farms/" },
      { label: "Southland District Council: Freedom camping need to know", url: "https://www.southlanddc.govt.nz/services/freedom-camping/freedom-camping-need-to-know/" },
      { label: "Clutha District Council: Camping in Clutha", url: "https://www.cluthadc.govt.nz/recreation/camping-in-clutha" },
      { label: "Christchurch City Council: Camping and campervans", url: "https://ccc.govt.nz/rec-and-sport/camping" },
      { label: "Auckland Council: General rules for freedom campers", url: "https://www.aucklandcouncil.govt.nz/en/parks-recreation/freedom-camping-auckland/general-rules-information-freedom-campers-auckland.html" },
      { label: "DOC: 1080 and dogs", url: "https://www.doc.govt.nz/nature/pests-and-threats/methods-of-control/1080/humans-recreation-and-commercial-activity/1080-and-dogs/" },
      { label: "DOC: How to be a low impact camper", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/low-impact-camping/" },
      { label: "DOC: Campsite categories, facilities and fees", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/facilities-and-fees/" },
    ],
  }),

  a({
    slug: "can-i-park-a-campervan-on-the-street-overnight-nz",
    publishAt: "2026-11-13",
    title: "Can I Park a Campervan on the Street Overnight in NZ?",
    description: "Certified self-contained campervans may stay a few nights on some council streets, but many urban areas ban it and vans without a green warrant cannot (2026).",
    category: "Rules & safety",
    region: "New Zealand cities and towns",
    places: ["Council streets","Council car parks","Supermarket car parks","State highway lay-bys"],
    imageAlt: "A vintage bus converted into a turquoise and cream motorhome parked at the edge of a gravel road",
    related: ["camping-rules-local-councils-new-zealand","campervan-road-rules-new-zealand","camping-wastewater-rubbish-new-zealand"],
    intro:
      "It depends on the council and the street, and the answer is yes only for a certified self-contained campervan. Under the Freedom Camping Act 2011 each council decides by bylaw which of its streets allow overnight stays, which restrict them and which ban them, and a van without a green warrant cannot stay on a council street unless the bylaw names the spot. Ordinary parking rules such as time limits and clearways still apply on top, and since 7 June 2026 only a green warrant counts as self-contained.",
    sections: [
      s("A street belongs to someone, and that decides it", [
        "A council road counts as a local authority area under the Act, so the council's bylaw applies. Under section 10, a certified self-contained vehicle may freedom camp in a local authority area unless the bylaw restricts or prohibits it, and a vehicle that is not self-contained may only do so where a section 11A bylaw says so. That default is why some cities permit roadside nights almost everywhere while others ban them street by street.",
        "State highways are different. NZTA land is covered by the Act only if a council has declared it a local authority area by bylaw, which needs NZTA's written consent. Elsewhere the NZTA's own powers over its land stand, so a highway shoulder or lay-by is not a safe assumption. A council can also make rules for its roads that sit outside the Act, such as time-limited parking, which is why a street can be legal for camping yet still carry a parking ticket.",
      ], ["Council roads follow the council's bylaw","State highway land is rarely open","Parking rules sit on top of camping rules"]),
      s("Auckland, Wellington, Christchurch and Queenstown", [
        "Auckland starts from permission. Certified self-contained vehicles can stay on most council-controlled public land, including most roadsides, for a maximum of two nights in the same road or off-road parking area, must vacate by 9 am on the day they leave, and cannot return to the same area for two weeks from 9 am on the day of departure. The bylaw prohibits freedom camping at 58 named areas, restricts 20 more with extra rules, and does not allow tents in public places. Waiheke has no public dump station, so the limit there is two nights and you must leave the island on the third day.",
        "Wellington City allows certified self-contained vehicles but not in a single place for long: no more than four consecutive nights in a calendar month in any one area, and not within 500 m of an area where you have already stayed four nights. On-street parking is listed as a free option if you keep within any time limits, and the council's designated sites include 52 spaces at Evans Bay Marina and 16 at the Te Kopahou Visitors Centre car park. The Barnett Street car park next to Te Papa offers paid overnight parking to self-contained vehicles, except on Saturday nights.",
        "Christchurch prohibits freedom camping on all council land in its central city, bounded by Bealey, Fitzgerald, Moorhouse, Deans and Harper avenues and Little Hagley Park, and in much of Akaroa. Elsewhere it allows certified vehicles in the areas its map marks for two nights, and within the City Coastal Restricted Zone any roadside works if you follow the limits of four nights in 30 days and no more than two in one place. Queenstown Lakes' Freedom Camping Bylaw 2025 prohibits it in urban areas, including on-road parking, and allows certified vehicles at designated car parks and on some rural roads.",
      ], ["Auckland: two nights, out by 9 am","Wellington: four nights a month per area","Queenstown: urban streets are prohibited"]),
      s("Car parks: council, paid and supermarket", [
        "A council car park is council land, so the same bylaw applies, and many are excluded. Auckland says you cannot freedom camp in car parks where parking is reserved or where a fee is charged, such as council parking buildings, and Auckland Transport's car park terms state that overnight camping is prohibited. Wellington bans camping on land managed under the Reserves Act, which the council says includes a number of coastal and sports-field car parks.",
        "A supermarket, shopping centre or pub car park is private land, so the Act does not apply and the owner's terms do. The owner or manager can ask you to leave, and under the Trespass Act 1980 a person who neglects or refuses to leave after being warned commits an offence. A sign saying no overnight parking is the owner's rule, and a manager's yes is not something to assume.",
      ], ["Paid or reserved council car parks are usually out","Private car parks follow the owner's signs","Ask the manager, and take no for an answer"]),
      s("Time limits, clearways and the road rules underneath", [
        "Camping permission does not suspend the road rules. Under the Land Transport (Road User) Rule 2004, a driver must not stop or park on a road without due care and reasonable consideration for other road users, or contrary to a sign or marking that prohibits, limits or restricts parking. Parking on a footpath is also prohibited, and so is obstructing a driveway, with a vehicle parked within 1 m of the prolongation of a driveway's side treated as obstructing it.",
        "Parking within an intersection or within 6 m of one is prohibited unless signs or markings allow it, so a corner is a poor place to park a long van. Auckland points out that freedom campers must follow parking and road rules such as time limits and clearways, and the council's rules on noise, litter and fires. Park as the markings direct, keep awnings, chairs and tables inside the vehicle, and leave space for other drivers.",
      ], ["Time limits and clearways still apply","Keep 6 m clear of intersections","Do not block a driveway"]),
      s("What it costs, and who gets the ticket", [
        "Camping where a bylaw prohibits or restricts it, or camping in a vehicle that is not self-contained, is a $400 infringement on council land, and so is staying with more people than the vehicle is certified for. Failing to display a warrant card is $200, refusing to leave when an officer requires it is $600, and damaging the area or leaving waste outside a bin is $800. Christchurch says it checks the warrant card in the front windscreen, the certificate or the Self-Contained Motor Vehicles Register.",
        "A freedom camping infringement is separate from a parking ticket, and both can arrive for the same night. Wellington lets you pay or dispute a freedom camping fine through a service desk or email, and says it will only issue a waiver in special circumstances.",
        "A rental company can pass a notice on to the hirer. A hire agreement may make you liable for the fee and an administration charge, and if it authorises a card debit the company must send you a copy of the notice within five working days of receiving it before charging the card.",
      ], ["$400 for a non-certified van on council land","Parking tickets are separate","Rentals pass notices to the hirer"]),
      s("Dump stations, toilets and leaving a street clean", [
        "Councils judge a street stay by what it leaves behind. Auckland says the law requires you to dispose of human waste and grey water properly and to look for the blue dump station symbol, and Wellington lists public dump stations at Evans Bay Marina and Ngauranga Gorge. Christchurch says to empty a toilet only at a dump station and not to go to the toilet beside the road, on the ground, in the bush or on a beach.",
        "Empty your tanks before you park rather than after, take rubbish with you or use a council bin, and do not spread out across several bays. Christchurch's bylaw prohibits taking more than one parking space with a camping vehicle, equipment or activities.",
      ], ["Empty tanks before parking","One vehicle, one space","Use a dump station, not the roadside"]),
      s("When the street says no", [
        "If the street is banned, restricted or full, move on rather than squeezing in. Holiday parks and camping grounds are the usual answer for a van that is not certified, and Auckland tells people without a self-contained vehicle to use campgrounds that provide suitable facilities. DOC campsites near towns are another option, and each page states its own rules.",
        "Paid overnight parking is an option for certified vehicles in some cities, such as Wellington's Barnett Street car park, whose price differs between two council pages at $30 and $35 per 24 hours, so check the current rate. Pick the next site before dark so a full lay-by never turns into a ticket.",
      ], ["Holiday parks take non-certified vans","Paid city sites can be a good fallback","Choose your next stop before dark"]),
      s("Checking a street before you stay", [
        "Look for the signs, photograph them, and compare them with the council's page or bylaw map for that district, written the evening before. A street that was legal last year may now be in a prohibited area, and temporary restrictions can appear on the ground before any listing changes.",
        "KiwiCamping, an iPhone app, keeps DOC campsite and hut data, dump stations, saved places, filters and trips in one place, and shows DOC's freedom-camping notices by district, which cover conservation land, not council streets. Place details, saved places and guides work without signal, but map tiles, routing, weather and photos need it, so save the alternatives you might want. The council's bylaw map is the source for a street.",
      ], ["Photograph the sign on arrival","Council page first, then your app","Pre-select a second option"]),
      s("The short version", [
        "A certified self-contained campervan can stay overnight on some council streets for a night or a few, and not at all in many urban centres. A van without a green warrant needs a campground, a named non-certified site or private land with permission.",
        "Read the sign, check the council's rules the evening before, empty your tanks, and keep the next site in mind in case the street is full.",
      ]),
    ],
    faq: [
      ["Can I park my campervan on the street in New Zealand?", "Only where the council's bylaw allows it and your van is certified self-contained with a green warrant. Auckland allows it on most council roads for up to two nights, Wellington allows it with limits, and Queenstown Lakes prohibits it on urban streets. A van without a green warrant needs a campground or a site the council has named for it."],
      ["Can I park a campervan overnight in a supermarket car park in NZ?", "A supermarket car park is private land, so the Freedom Camping Act does not apply and the owner sets the rules. If the signs prohibit overnight parking or a manager asks you to leave, you must go, because refusing after a warning is an offence under the Trespass Act 1980. Ask the manager first."],
      ["How long can a campervan stay in the same street in NZ?", "It varies by council. Auckland allows two nights in the same road or off-road parking area and bars a return for two weeks from 9 am on departure day. Wellington allows no more than four consecutive nights a calendar month in any one area, and Christchurch's coastal zone allows four nights in 30 days with no more than two in one place."],
    ],
    sources: [
      { label: "Freedom Camping Act 2011", url: "https://www.legislation.govt.nz/act/public/2011/0061/latest/whole.html" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "Land Transport (Road User) Rule 2004", url: "https://www.legislation.govt.nz/regulation/public/2004/0427/latest/whole.html" },
      { label: "Trespass Act 1980", url: "https://www.legislation.govt.nz/act/public/1980/0065/latest/whole.html" },
      { label: "Auckland Council: General rules for freedom campers", url: "https://www.aucklandcouncil.govt.nz/en/parks-recreation/freedom-camping-auckland/general-rules-information-freedom-campers-auckland.html" },
      { label: "Auckland Transport: Car park terms and conditions", url: "https://at.govt.nz/driving-and-parking/find-parking/car-park-terms-and-conditions" },
      { label: "Wellington City Council: Freedom camping in Wellington", url: "https://wellington.govt.nz/recreation/outdoors/camping-in-wellington" },
      { label: "Wellington City Council: Waterfront car park areas", url: "https://wellington.govt.nz/parking-roads-and-transport/parking/car-park-buildings-and-areas/waterfront-car-park-areas" },
      { label: "Christchurch City Council: Camping and campervans", url: "https://ccc.govt.nz/rec-and-sport/camping" },
      { label: "Christchurch City Council: Freedom Camping Bylaw 2021", url: "https://ccc.govt.nz/the-council/plans-strategies-policies-and-bylaws/bylaws/freedom-camping-bylaw" },
      { label: "Queenstown Lakes District Council: Responsible camping", url: "https://www.qldc.govt.nz/recreation/responsible-camping" },
    ],
  }),

  a({
    slug: "can-i-drive-a-campervan-on-a-car-licence-nz",
    publishAt: "2026-11-14",
    title: "Can I Drive a Campervan on a Car Licence in NZ? (2026)",
    description: "Yes, a full NZ car licence (Class 1) covers a campervan or motorhome up to 6,000 kg gross laden weight. Weights, towing, Class 2 and rentals explained for 2026.",
    category: "Rules & safety",
    region: "New Zealand",
    places: ["Rental campervans","Motorhomes over 3,500 kg","Towing a trailer or car","Overseas drivers"],
    imageAlt: "State Highway 94 winding through a snow-dusted valley in Fiordland National Park",
    related: ["campervan-road-rules-new-zealand","overseas-driver-licence-new-zealand","towing-caravan-new-zealand"],
    intro:
      "Yes, in most cases: a full New Zealand car licence (Class 1) lets you drive a campervan or motorhome as long as its gross laden weight (GLW) is 6,000 kg or less. Go above that, or tow enough to push the whole combination past 6,000 kg, and you need a Class 2 licence. That covers nearly every rental campervan and most privately owned motorhomes, so the useful question is not whether you hold the right licence but how heavy your particular van is once it is loaded.",
    sections: [
      s("The 6,000 kg line, and who applies it", [
        "The Land Transport (Driver Licensing) Rule 1999 sets out which vehicles each licence class may drive. A full Class 1 licence covers any rigid vehicle with a gross laden weight of not more than 6,000 kg, and a motorhome is a rigid vehicle. NZTA administers the licensing system, and Police are the ones who check it at the roadside.",
        "Class 1 is the ordinary car licence, so there is no separate campervan or motorhome licence in New Zealand. If you can legally drive a car and your van sits at or under the line, you are covered. Class 2 is the next step up, for rigid vehicles above 6,000 kg and up to 18,000 kg.",
      ], ["No separate campervan licence exists","Full Class 1 covers up to 6,000 kg GLW","Above that you need Class 2"]),
      s("What gross laden weight actually means for your van", [
        "GLW is not the weight of the empty van. The rule defines it as the greatest of three figures: the manufacturer's stated gross laden weight, any weight set under the land transport rules, and the weight of the vehicle with whatever it is carrying at that moment. NZTA's guidance adds that you should not use the unladen or tare weight, or the weight on a road user charges (RUC) licence, when checking a licence class.",
        "In practice, look for the manufacturer's maximum weight (often called the gross vehicle mass, or GVM) on the vehicle's plate or paperwork. For vehicles over 3,500 kg, NZTA says a certificate of loading, normally displayed on the windscreen, lists the tare weight and the GVM. Payload is simply GLW minus the empty weight, and it disappears faster than people expect: 100 litres of fresh water is about 100 kg before you add gas, bikes, food and passengers.",
        "A van whose plate says 4,500 kg is nowhere near the line. A van whose plate says 6,000 kg has no spare margin, and loading it beyond its plated weight is both unsafe and a separate problem from the licence question. Check the plated figure, not the brochure.",
      ], ["Use the plated maximum, not the empty weight","Water adds a kilogram per litre","Do not load beyond the plated weight"]),
      s("Learner and restricted licences have a lower limit", [
        "The 6,000 kg figure is for a full Class 1 licence. If you hold a learner (Class 1L) or restricted (Class 1R) licence, the rule limits you to vehicles with a GLW of 4,500 kg or less. There is one allowance for motorhomes: a motorised mobile home or self-propelled caravan with a GLW up to 6,000 kg, provided its on-road weight does not exceed 4,500 kg.",
        "On-road weight is the vehicle as it is driven, with fuel, water, gear and passengers. That makes the restricted allowance easy to break without noticing, because a 6,000 kg-rated van that is half full of water and luggage can sit well above 4,500 kg on the road. If you are still on a restricted licence, pick a smaller van and weigh the loaded result, or wait until you hold a full licence.",
      ]),
      s("Towing changes the sum", [
        "When you tow, the licence test moves from the van to the whole combination. A full Class 1 licence covers a combination with a gross combined weight of not more than 6,000 kg, and that figure is the total of the gross laden weights of every vehicle in the line. The rule counts a car on a tow bar the same way as a trailer.",
        "So a motorhome plated at 4,500 kg can pull a trailer or small car up to a combined plated weight of 6,000 kg, and a 5,500 kg motorhome has almost no towing allowance at all. The same combination also carries lower speed limits: 90 km/h on the open road with a rigid connection, and 50 km/h on a non-rigid one. For loading, sway and caravan-specific limits, the guide to towing a caravan in New Zealand has the detail.",
      ], ["Gross combined weight is the plated total","A towed car counts like a trailer","Check the towing page for speed and loading"]),
      s("When you do need a Class 2 licence", [
        "You need Class 2 for a rigid vehicle with a GLW of more than 6,000 kg and up to 18,000 kg, and for a combination with a gross combined weight of more than 6,000 kg and up to 12,000 kg. Large coach-built motorhomes and converted buses fall into this range. To apply for a Class 2 learner licence you must have held a full Class 1 licence for at least six months, pass the theory test and provide a medical certificate. The full Class 2 then follows after at least six months on the learner licence and a practical test, or an approved course.",
        "A motorhome with a gross vehicle mass over 3,500 kg counts as a heavy motor vehicle under the road user rule, and it may not be driven above 90 km/h even where the open-road limit is 100. NZTA also treats heavy motorhomes differently for inspections and charges. They are inspected for a certificate of fitness rather than a Warrant of Fitness, and all heavy motorhomes pay road user charges whether petrol or diesel, while light vehicles pay unless they run on petrol, LPG or CNG, so diesel, electric and plug-in hybrid vans pay. None of that stops you driving one on a car licence if it is at or below 6,000 kg, but it changes the running costs and the paperwork. If you are buying rather than hiring, the guide to registration and WoF for campervans covers the inspection side.",
        "One recent change helps owners of electric vehicles. Since 6 August 2026 the rule lists zero-emission vehicles, meaning battery-electric or hydrogen fuel cell, up to 7,500 kg GLW under Class 1. That matters mainly for heavier electric vans, and it is worth asking a rental company or dealer how it applies to a specific model before you rely on it.",
      ], ["Class 2 starts above 6,000 kg GLW","Six months on Class 1 before applying","Electric vehicles have a higher Class 1 limit"]),
      s("Overseas licences and rental campervans", [
        "A visitor on an overseas licence is treated as holding the New Zealand class that matches what that licence lets them drive at home. For an ordinary car licence, that is Class 1, so the 6,000 kg line applies the same way. An overseas licence is valid for 18 months for arrivals from 1 November 2024 to 31 October 2026, and for 12 months from 1 November 2026. The overseas licence guide covers translations, International Driving Permits and what happens when the period ends.",
        "Rental companies will not hand over the keys unless your licence suits the vehicle, and most also apply their own minimum age and licence-held period. Some ask for an International Driving Permit, so confirm those conditions when you book rather than at the depot.",
      ], ["Overseas car licences are treated as Class 1","Rental firms add their own age and licence rules","Confirm at booking, not at pick-up"]),
      s("Fines and what a roadside check looks like", [
        "Driving a vehicle your licence does not cover is an offence, with an infringement fee of $400 for driving without the appropriate current driver licence. Driving contrary to the conditions on your licence, such as needing glasses or being limited to automatics, carries the same fee. Failing to produce your licence on request is $55. These figures are from the Land Transport (Offences and Penalties) Regulations 1999, version as at 1 October 2026.",
        "The bigger cost is usually insurance. A policy or rental agreement that assumes a properly licensed driver can be voided if you were not one, which turns a small fine into a very large bill after a crash. Carry your licence every time you drive, with a translation or International Driving Permit if it is not in English.",
      ], ["$400 for driving without the right class","$55 for not producing your licence","Insurance can fail if you were unlicensed"]),
      s("Check before you book", [
        "Ask for the GLW or GVM of the exact vehicle in writing, not the berth count or the model name. Compare it with 6,000 kg, and if you plan to tow or carry a heavy load, ask for the plated weights of the trailer or towed car as well. Remember that being under the licence limit does not mean the van is comfortable to drive: height, width and length still matter on narrow roads, which the campervan driving rules guide covers.",
        "KiwiCamping is an iPhone app with DOC campsite and hut details, DOC freedom-camping notices by district, dump stations, filters, saved places and trips. Place details, saved places and guides work offline, while map tiles, routing, weather and photos need signal. It helps with planning where the van goes once you have the licence question settled.",
      ]),
      s("The short version", [
        "A full Class 1 licence covers a campervan or motorhome up to 6,000 kg GLW, and a combination up to 6,000 kg gross combined weight. Learners and restricted drivers are held to 4,500 kg on the road. Above 6,000 kg you need Class 2, and heavy motorhomes over 3,500 kg bring a 90 km/h limit and different inspection and road user charge rules.",
        "Before you pay a deposit, find the plated weight of the exact van, add up anything you plan to tow, and confirm the rental company's own age and licence conditions in writing. Those three checks settle almost every version of this question.",
      ], ["Plated weight first","Add up anything you tow","Confirm rental conditions before paying"]),
    ],
    faq: [
      ["What size motorhome can I drive on a car licence?", "On a full New Zealand car licence (Class 1) you can drive a motorhome with a gross laden weight of 6,000 kg or less. Learner and restricted licence holders are limited to 4,500 kg on the road, with a motorhome allowance only where the on-road weight stays at or under that figure."],
      ["Can you drive a motorhome on a car licence in NZ?", "Yes, as long as it is within 6,000 kg gross laden weight and you are not towing so much that the whole combination exceeds 6,000 kg. There is no separate campervan licence, but a heavier motorhome needs a Class 2 licence."],
      ["Do I need a special driving licence for a campervan in New Zealand?", "Not for the vast majority of rental campervans, which fall well under 6,000 kg. An overseas car licence is treated as Class 1 and is valid for 18 months for arrivals from 1 November 2024 to 31 October 2026, and 12 months from 1 November 2026."],
    ],
    sources: [
      { label: "Legislation: Land Transport (Driver Licensing) Rule 1999 (Schedule 3, classes of licence)", url: "https://www.legislation.govt.nz/regulation/public/1999/0100/latest/whole.html" },
      { label: "Legislation: Land Transport (Road User) Rule 2004 (heavy motor vehicles, towing speed limits)", url: "https://www.legislation.govt.nz/regulation/public/2004/0427/latest/whole.html" },
      { label: "Legislation: Land Transport (Offences and Penalties) Regulations 1999", url: "https://www.legislation.govt.nz/regulation/public/1999/0099/latest/whole.html" },
      { label: "Legislation: Land Transport (Driver Licensing) Amendment Rule 2024 (overseas licence time limit)", url: "https://www.legislation.govt.nz/regulation/public/2024/0222/latest/whole.html" },
      { label: "NZTA: Driver licence classes and what you can drive", url: "https://www.nzta.govt.nz/driver-licences/getting-a-licence/licences-by-vehicle-type/what-you-can-drive" },
      { label: "NZTA: Motorhomes, caravans and light trailers", url: "https://www.nzta.govt.nz/vehicles/vehicle-types/motorhomes-caravans-light-trailers" },
      { label: "NZTA: About road user charges", url: "https://nzta.govt.nz/vehicles/road-user-charges/about-ruc/" },
      { label: "NZTA: Driving on New Zealand roads (visitors)", url: "https://www.nzta.govt.nz/travelling-on-our-roads/visitors-and-new-residents/driving-on-nz-roads" },
    ],
  }),

  a({
    slug: "can-i-fly-a-drone-at-a-doc-campsite-nz",
    publishAt: "2026-11-15",
    title: "Can I Fly a Drone at a DOC Campsite in NZ? (2026 Rules)",
    description: "Not without a DOC permit, and even with one you must keep away from campsites and huts. The 2026 permit zones, fees, CAA Part 101 rules and council land.",
    category: "Rules & safety",
    region: "New Zealand",
    places: ["DOC campsites and huts","National parks","Council reserves","Near airports"],
    imageAlt: "Aerial view of Whāngapoua Beach and the Coromandel coastline at sunset",
    related: ["doc-campsite-rules","doc-campsites-new-zealand-guide","camping-rules-local-councils-new-zealand"],
    intro:
      "Not without a permit. Under the Conservation Act 1987, a drone counts as an aircraft, and DOC requires a concession (permit) for any aircraft that takes off, lands or hovers on public conservation land. Even with a permit, DOC's conditions tell you to stay away from busy places such as campsites, huts and car parks, so a campsite is the one place on DOC land where flying is least likely to be acceptable.",
    sections: [
      s("Why a campsite is the wrong place to fly", [
        "Section 17ZF of the Conservation Act says no aircraft may land or take off from a conservation area unless a concession has been granted, and the same section says landing includes hovering. DOC reads that to cover drones for every purpose: recreation, commercial work and research. A drone launched from your campsite pitch, or held steady over the river behind it, is inside that rule.",
        "DOC's own operating conditions for permit holders go further. They ask pilots to operate away from high-use recreation areas, naming campsites, campgrounds, huts, bivvies, lodges, car parks and picnic areas. They also ban flying or hovering over any person without that person's consent. A campground is full of people who came for quiet, which is why DOC's campsite and hut terms say no drones unless DOC permits them.",
      ], ["A drone is an aircraft under the Conservation Act","Hovering counts the same as landing","Permit conditions steer you away from campsites"]),
      s("Getting a DOC drone permit", [
        "For recreational flying, DOC sorts conservation land into green, orange and red zones on its Discover the Outdoors map. In a green zone the permit is approved automatically and issued online straight away: $180 plus GST, which the DOC permits site shows as $207, valid for one year and for drones up to 25 kg. An orange zone is assessed case by case with a minimum fee of $2,450 plus GST, and a red zone is rarely approved, with a $180 minimum fee and a five working day turnaround.",
        "Check the map by choosing the recreation drone permit layer and clicking the area. Zones can differ for recreational, research and commercial use, and DOC's page says to email permissions@doc.govt.nz when an area has no colour. Applications are no longer taken at local DOC offices or visitor centres. Orange and red applications go in by email on DOC's form, and DOC replies with a cost estimate before it processes anything.",
      ], ["Green zone: $180 plus GST, issued immediately","Check the zone before you apply","Orange and red go by email, not at a visitor centre"]),
      s("Places where the answer is simply no", [
        "Some parks say so on their own pages. Aoraki/Mount Cook National Park bans recreational drone use throughout the park, and its White Horse Hill campsite page lists drones among the things not allowed. Tongariro Northern Circuit pages say flying a drone without a permit is strictly prohibited, and the Hump Ridge Track page says unauthorised drone use in Fiordland National Park is prohibited.",
        "DOC's terms and conditions for huts, campsites, Great Walks, cabins and lodges include a clause that reads: no use of drones unless permitted by DOC. If you are staying at a bookable DOC site, you have agreed to that when you booked, so a drone in the car is a risk to your booking as well as to the neighbours.",
      ]),
      s("The Civil Aviation rules apply on top", [
        "A DOC permit only deals with the land. Part 101 of the Civil Aviation Rules, administered by the Civil Aviation Authority (CAA), still applies to every flight: stay under 120 metres above ground, keep the drone in sight with your own eyes, fly in daylight, and get consent before flying over people and property. The rules also restrict flying within 4 km of an aerodrome boundary unless extra conditions are met.",
        "DOC requires permit holders to log each flight with AirShare, the airspace app and website that also maps restricted areas. If you want to fly near an airport or aerodrome, check the map before you travel and keep inside the rules for that zone.",
      ], ["120 metres maximum height","Daylight and line of sight only","Consent before flying over people or property"]),
      s("Wildlife, wāhi tapu and noise", [
        "Permit holders must take off and land at least 100 m from wildlife, stay at least 50 m away from it, and avoid roosting or nesting birds. Marine mammals such as dolphins, seals and whales need 150 m horizontally. If a bird repeatedly circles or dive-bombs the drone, land immediately.",
        "DOC also asks pilots not to fly or film over wāhi tapu, and its application process includes input from hapū and iwi. Noise matters as much as distance: a drone hum carries a long way over a quiet river flat, and the people next to you chose a DOC site for that quiet.",
      ]),
      s("Council land and freedom camping spots", [
        "Council reserves and roadside freedom camping areas are not conservation land, so they are not covered by DOC's permit. They have their own rules, and CAA Part 101 still applies. Auckland Council lets you fly in most local parks without a permit but bans drones in places such as cemeteries, Tūpuna Maunga sites, Cornwall Park and the Botanic Gardens, and requires a permit at regional parks.",
        "Christchurch City Council allows a lightweight drone of 1.5 kg or less over most council property without permission, but wants permission for any weight near heritage parks, within 10 metres of a playground or park boundary, and at listed wetlands and coastal sites. Always read the council's own page for the place you are camping, and read the sign at the freedom camping area.",
      ], ["Each council sets its own park rules","Weight limits differ between councils","A freedom camping area is not an invitation to fly"]),
      s("Privacy, consent and what happens if you ignore the rules", [
        "The Privacy Commissioner says footage you collect for your own purposes generally falls outside the Privacy Act, but filming that is highly offensive, such as into tents or bathrooms, can still raise legal issues. Separate from privacy, CAA rules require consent before you fly over people, and a strangers' campsite is exactly where nobody has given it.",
        "Knowingly flying without a DOC concession is an offence under sections 39 and 43C of the Conservation Act, with a maximum penalty of two years in prison or a fine of up to $100,000 for an individual. The conservation infringement regulations list no drone-specific ticket, so a case goes through the courts. DOC can also end a permit by written notice if the conditions are breached, and CAA can take disciplinary action including prosecution. To report a drone, call the DOC hotline on 0800 DOC HOT (0800 362 468).",
      ], ["Offence under the Conservation Act","CAA can prosecute separately","Report to 0800 362 468"]),
      s("What to do instead", [
        "If the shot matters, buy the green-zone permit before you travel, choose a trailhead or lakeshore that is mapped green and not next to a campsite, and keep well clear of other people. If you only want a view from the pitch, a phone on a tripod or a small camera on a pole gets close, and DOC's own advice is to use a camera or selfie stick from solid ground or leave the technology behind.",
        "KiwiCamping is an iPhone app with DOC campsite and hut details, DOC freedom-camping notices by district, dump stations, filters, saved places and trips. Place details, saved places and guides work offline, while map tiles, routing, weather and photos need signal, so you can note which sites you plan to visit and check each against DOC's drone map before you go.",
      ]),
      s("The short version", [
        "No drone on a DOC campsite without a permit, and no flying close to campsites, huts or car parks even with one. Aoraki/Mount Cook bans recreational drones outright, and other parks list their own prohibitions.",
        "Check the zone map, carry your permit, log the flight in AirShare, keep under 120 metres, and leave the drone in the bag at the campground.",
      ]),
    ],
    faq: [
      ["Can I fly a drone at a DOC campsite in New Zealand?", "Not without a DOC permit, and DOC's conditions tell permit holders to keep away from campsites, huts and car parks even then. Some places, such as Aoraki/Mount Cook National Park, ban recreational drone use completely."],
      ["Do I need a permit to fly a drone on DOC land?", "Yes. Any drone that takes off, lands or hovers on public conservation land needs a DOC concession. A recreational permit for a green zone costs $180 plus GST, is issued online immediately and lasts one year."],
      ["Can I fly a drone in a national park in New Zealand?", "Only with DOC permission, and several national parks restrict it further. Aoraki/Mount Cook bans recreational use, and DOC says unauthorised drone use is prohibited in places such as the Tongariro Northern Circuit and Fiordland's Hump Ridge Track."],
    ],
    sources: [
      { label: "DOC: Drone use on conservation land", url: "https://www.doc.govt.nz/get-involved/apply-for-permits/all-permissions/drone-use-on-conservation-land" },
      { label: "DOC: Drone operating conditions", url: "https://www.doc.govt.nz/get-involved/apply-for-permits/all-permissions/drone-use-on-conservation-land/drone-operating-conditions/" },
      { label: "DOC: Apply for a recreational drone permit", url: "https://www.doc.govt.nz/get-involved/apply-for-permits/all-permissions/drone-use-on-conservation-land/recreational-drone-use/" },
      { label: "DOC permits site: Apply to fly a drone in green zones", url: "https://permits-licences.doc.govt.nz/apply-to-fly-green-zones/" },
      { label: "DOC: Huts, campsites, Great Walks, cabins and lodges terms and conditions", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/bookings-terms-and-conditions/huts-campsites-cabins-and-lodges-terms-and-conditions/" },
      { label: "DOC: White Horse Hill Campsite, Aoraki/Mount Cook National Park", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/canterbury/places/aoraki-mount-cook-national-park/things-to-do/white-horse-hill-campground/" },
      { label: "Legislation: Conservation Act 1987 (sections 17ZF, 39, 43C)", url: "https://www.legislation.govt.nz/act/public/1987/0065/latest/whole.html" },
      { label: "CAA: Part 101 rules for drones", url: "https://www.aviation.govt.nz/drones/regulations/part-101-rules-for-drones/" },
      { label: "Auckland Council: Flying drones and UAVs", url: "https://www.aucklandcouncil.govt.nz/en/parks-recreation/get-outdoors/drones-unmanned-aerial-vehicles.html" },
      { label: "Christchurch City Council: Drones and remotely piloted aircraft systems", url: "https://ccc.govt.nz/parks-and-gardens/make-a-booking/drones-and-remotely-piloted-aircraft-systems" },
    ],
  }),

  a({
    slug: "can-i-drive-on-the-beach-in-new-zealand",
    publishAt: "2026-11-16",
    title: "Can I Drive on the Beach in New Zealand? (2026 Rules)",
    description: "It depends on the beach. A beach is legally a road, but councils and regional plans ban or permit vehicles. 2026 rules for Ninety Mile Beach, Muriwai and more.",
    category: "Rules & safety",
    region: "New Zealand",
    places: ["Ninety Mile Beach","Muriwai and Karioitahi","Ruakākā and Waipū","Pāpāmoa"],
    imageAlt: "A gravel track crossing grassy dunes towards the surf at Ninety Mile Beach, Northland",
    related: ["campervan-road-rules-new-zealand","responsible-camping-new-zealand","camping-rules-local-councils-new-zealand"],
    intro:
      "It depends on the beach. Under the Land Transport Act a beach counts as a road, so every road rule applies, but a council bylaw, a regional plan or DOC land status can ban or restrict vehicles on a given stretch, and several popular beaches now do. Ninety Mile Beach is open to vehicles with 30 and 60 km/h limits, Muriwai and Karioitahi need an Auckland Council permit, Ruakākā and Pāpāmoa are largely closed or restricted, and a rental campervan is usually the wrong vehicle for any of them.",
    sections: [
      s("A beach is a road, and that cuts both ways", [
        "The Land Transport Act 1998 defines a road to include a beach. That means the driver needs the right licence, the vehicle needs current registration and a warrant of fitness, and the rules on speed, alcohol, seatbelts and helmets apply as they do on any street. Auckland Council puts it plainly: beaches are policed, so carry photo ID.",
        "The same Act also lets a road controlling authority make bylaws that prohibit or restrict vehicles on beaches, with fines of up to $1,000 for a breach. So a beach is open to traffic by default and closed wherever a bylaw, a regional rule or a land manager says so. Nothing on the sand tells you which applies unless there is a sign, which is why the answer has to be checked beach by beach.",
      ], ["A beach is a road in law","Councils can close it to vehicles","Licence, registration and WoF all still apply"]),
      s("Ninety Mile Beach (Te Oneroa-a-Tōhē)", [
        "Vehicles can use Ninety Mile Beach, but the limits changed. The Te Oneroa-a-Tōhē Board, set up under Treaty settlement law, advises 30 km/h for 200 metres either side of each beach on and off ramp and 60 km/h on the rest, where the old default was 100 km/h. Far North District Council set the limits under its Speed Limits Bylaw 2019, and the Board says they are signposted and enforceable.",
        "The Board's guidance is to use only approved access ramps, check the tide before you drive, avoid driving at night or after drinking, keep off the dunes and stay away from nesting shorebirds. It also states that camping, campervans, hitchhiking, fires and littering are prohibited along the length of the beach, so it is a place to drive through, not to park a campervan overnight. The Board describes the beach as not a highway, and mobile coverage is intermittent in places.",
      ], ["30 km/h near ramps, 60 km/h elsewhere","No camping or campervans on the beach","Check the tide before you go"]),
      s("Northland: new no-vehicle zones", [
        "Northland Regional Council now enforces mapped vehicle exclusion zones below mean high water springs, effectively the wet sand below the high tide line. The mapped areas include Waipū Cove and its estuary, Ruakākā Beach and estuary, Ocean Beach to Kauri Mountain at Whangārei Heads, Ngunguru, Matapōuri, Whananaki, Helena Bay, Bland Bay, Takou Bay, Matai Bay, Puheke Beach and several harbours. Everywhere else in the region, vehicles must avoid pipi and cockle beds, salt marsh, seagrass and nesting or roosting sites.",
        "Whangārei District Council adds a bylaw on top. Under its Control of Vehicles on Beaches Bylaw, vehicles are prohibited at all times on parts of Ruakākā Beach, both south and north of the river mouth, and on part of Langs Beach, and prohibited on all dunes. A breach carries a fine of up to $500, and an officer can order you off the beach for 24 hours. The council has proposed adding Bland Bay, Ōakura, Woolleys Bay, Matapōuri, Whangaumu and Uretiti Beach south of Tip Road, and consulted on the change until 7 September 2026, so check the council page before relying on an older map.",
      ], ["Check the regional exclusion map before driving","Dunes are off limits in Whangārei District","Pending changes are due November 2026"]),
      s("Auckland and Bay of Plenty", [
        "In the Auckland region you can drive on Muriwai and Karioitahi beaches only with a beach driving permit, which Auckland Council says is free, lasts a year and must be renewed per vehicle. You must carry the permit (a phone copy is fine) and photo ID. The limits include 30 km/h near the main access points at Muriwai, 60 km/h elsewhere at Muriwai, 20 km/h within 1,000 metres either side of Karioitahi Road and 60 km/h beyond that. Auckland's guidance also says to take a spade and a rope, drive with headlights on and limit access to three hours either side of low tide.",
        "Driving on all other Auckland beaches is prohibited except to launch or retrieve a boat or in an emergency, or with a separate beach access permit. Tauranga City Council takes a similar line at Pāpāmoa and Mount Maunganui: vehicles are generally not permitted on the beach, with exceptions to launch or retrieve a vessel at Taylor Reserve, Harrison's Cut and Pāpāmoa Domain, and permitted ATVs for fishing east of the Karewa Parade access point at 20 km/h.",
      ], ["Free Auckland permit, renewed each year","Carry the permit and photo ID","Papamoa is mostly closed to vehicles"]),
      s("Dunes, shorebirds and DOC land", [
        "Dunes are the part drivers damage most, and the rules are strict. Northland Regional Council says one pass can kill dune plants and that vehicles are prohibited from most dunes. Use only signposted access tracks, and stay on the harder sand between the waterline and the high tide mark. Shorebirds nest in the soft sand and on the lower dunes, where nests are well camouflaged and easily run over.",
        "DOC reports vehicles driving through cordoned-off nesting areas, which breaches local bylaws. DOC's Rarawa Beach page notes that vehicle access rules have changed in several places in Northland and that you can no longer drive on the beach in some of them. To report a vehicle in a protected area, DOC takes calls on 0800 DOC HOT (0800 362 468), and the Regional Council takes reports of damage to dunes.",
      ], ["Stay below the high tide line","Keep clear of nesting birds","Report to 0800 362 468 or the Regional Council"]),
      s("Rental campervans and insurance", [
        "The beach is where a rental contract and the law part company. A beach can be a legal road and still be an excluded road in your rental agreement, and many hire agreements exclude beaches and unsealed roads, with damage cover that can fall away if you go there. Terms differ between companies, so read the exclusions in your own agreement and the insurance excess terms before you drive onto sand.",
        "A heavy, two-wheel-drive motorhome is the vehicle most likely to bog down, and a rising tide will not wait for a recovery truck. NRC's guidance is that soft sands are dangerous, to identify your exit route before you go on, and to take extreme care crossing streams. If you do get stuck near the tide, the Board's advice is to leave the vehicle and move to higher ground.",
      ], ["Read the exclusions in your rental agreement","Heavy 2WD vehicles bog down","Leave a stuck vehicle and get to high ground"]),
      s("Fines and who enforces them", [
        "Several agencies share the job. Police deal with speeding, drink driving and licence offences on a beach as on any road; the Offences and Penalties Regulations list a $150 infringement fee for breaching a road bylaw made under section 22AB of the Land Transport Act, and councils can set their own penalties up to $1,000. Whangārei's bylaw fine is up to $500. Northland Regional Council says compliance tools under the Resource Management Act include abatement notices and infringement fines of up to $4,000, though its stated first approach is education.",
        "Auckland Council, the Regional Council and DOC all take reports, so a vehicle in a protected area can be photographed and reported with the date, location and registration. The practical risks are usually bigger than the fine: recovery costs if you bog down, and a rental agreement that no longer covers the damage.",
      ], ["Police enforce road rules on beaches","Councils set bylaw fines up to $1,000","Regional rules can reach $4,000"]),
      s("What to do instead, and how to check on the day", [
        "Park at the formed access point and walk. Most of the beaches above are better seen on foot, and a campervan is safe and legal in a car park, a holiday park or a DOC campsite, where a vehicle on the beach is not. If you want to drive Ninety Mile Beach itself, look at a tour operator or a high-clearance vehicle you are allowed to take onto sand, rather than a rental motorhome.",
        "On the day, read the sign at the access, check the tide table, and open the council or Regional Council page for that beach. KiwiCamping is an iPhone app with DOC campsite and hut details, DOC freedom-camping notices by district, dump stations, filters, saved places and trips. Place details, saved places and guides work offline, while map tiles, routing, weather and photos need signal, so note the beach and the council page you need before you lose coverage.",
      ]),
      s("The short version", [
        "Assume you cannot drive on a beach until a council or regional page says you can. Ninety Mile Beach is open at 30 and 60 km/h, Muriwai and Karioitahi need a permit, and Ruakākā, Waipū Cove and Pāpāmoa are largely closed or restricted.",
        "Stay off the dunes, keep clear of nesting birds and check the tide. Treat a rental campervan as the wrong vehicle for sand, and confirm the rules for the exact beach on the council or Regional Council page before you drive.",
      ]),
    ],
    faq: [
      ["Can you drive on Ninety Mile Beach in New Zealand?", "Yes, vehicles can use it, but the speed limit is 30 km/h within 200 metres of a ramp and 60 km/h elsewhere, and camping, campervans and fires are prohibited along the beach. Use approved ramps and check the tide before you drive."],
      ["Is it legal to drive on beaches in New Zealand?", "It depends on the beach. The Land Transport Act treats a beach as a road, so road rules apply, but councils and regional plans can ban or restrict vehicles, as they do at Ruakākā, Waipū Cove and Pāpāmoa, and Auckland requires a permit at Muriwai and Karioitahi."],
      ["Can you drive a rental campervan on the beach in New Zealand?", "Check your rental agreement first, because beaches are often excluded and damage cover can fall away if you go there. Even where driving is legal, a heavy two-wheel-drive motorhome is easily bogged by soft sand and a rising tide."],
    ],
    sources: [
      { label: "Legislation: Land Transport Act 1998 (road includes a beach; section 22AB bylaws)", url: "https://www.legislation.govt.nz/act/public/1998/0110/latest/whole.html" },
      { label: "Legislation: Land Transport (Offences and Penalties) Regulations 1999", url: "https://www.legislation.govt.nz/regulation/public/1999/0099/latest/whole.html" },
      { label: "Auckland Council: Rules for driving on Muriwai and Karioitahi beaches", url: "https://www.aucklandcouncil.govt.nz/en/licences-regulations/driving-on-beaches/rules-driving-beaches.html" },
      { label: "Auckland Council: Renew a beach driving permit", url: "https://www.aucklandcouncil.govt.nz/en/licences-regulations/driving-on-beaches/renew-beach-driving-permit.html" },
      { label: "Northland Regional Council: Driving on beaches", url: "https://www.nrc.govt.nz/environment/coast/driving-on-the-beach/" },
      { label: "Northland Regional Council: Vehicle restricted areas on beaches", url: "https://www.nrc.govt.nz/environment/coast/driving-on-the-beach/vehicle-restricted-areas-on-beaches/" },
      { label: "Whangarei District Council: Control of Vehicles on Beaches Bylaw 2009 (amended 2019)", url: "https://www.wdc.govt.nz/files/assets/public/v/1/documents/council/bylaws/control-of-vehicles-on-beaches-bylaw.pdf" },
      { label: "Whangarei District Council: Control of Vehicles on Beaches Bylaw consultation", url: "https://www.wdc.govt.nz/Whats-new/Have-your-say/Current-Consultations/Control-Vehicles-Beaches-Bylaw" },
      { label: "Northland Regional Council: Te Oneroa-a-Tōhē Beach Board summer safety programme", url: "https://www.nrc.govt.nz/news/2023/december/te-oneroa-a-tohe-beach-board-rolls-out-summer-safety-programme/" },
      { label: "Te Oneroa-a-Tōhē Board: summer beachgoer advice (Scoop)", url: "https://www.scoop.co.nz/stories/AK2512/S00719.htm" },
      { label: "Tauranga City Council: Vehicles, horses and longlines on beaches", url: "https://www.tauranga.govt.nz/permits-and-licences/using-public-places/vehicles-horses-and-longlines-on-beaches" },
      { label: "DOC: Beach birds and vehicles don't mix", url: "https://blog.doc.govt.nz/2025/02/15/beach-birds-and-vehicles-dont-mix/" },
      { label: "DOC: Rarawa Beach campsite", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/northland/places/wharekapu-paxton-point-conservation-area/things-to-do/rarawa-beach-campsite/" },
    ],
  }),

  a({
    slug: "can-i-drink-the-water-at-nz-campsites",
    publishAt: "2026-11-17",
    title: "Can I Drink the Water at NZ Campsites? (2026 Guide)",
    description: "Only if the site says it is treated. Most DOC campsite and hut water is rain or stream water that must be boiled or filtered. 2026 guidance, notices and tanks.",
    category: "Rules & safety",
    region: "New Zealand",
    places: ["DOC campsites","DOC huts","Holiday parks","Council campgrounds"],
    imageAlt: "A black rainwater tank on a timber stand beside a backcountry hut, with bush and hills behind",
    related: ["doc-campsite-rules","doc-campsites-new-zealand-guide","holiday-parks-new-zealand-guide"],
    intro:
      "Only where the campsite says the water is treated; everywhere else, assume you need to boil, filter or treat it first. DOC says untreated campsite and hut water should be boiled before use, and many backcountry sites run on rainwater from the roof or a nearby stream, which a clear look and a tap do not make safe. A treated supply exists at some sites, such as White Horse Hill at Aoraki/Mount Cook, and the campsite's own DOC page is where it says which kind you have.",
    sections: [
      s("Treated, untreated, and why a tap does not settle it", [
        "DOC's campsite categories describe the supply rather than promise it. Serviced and Standard campsites may have tap water that is treated or untreated, or a supply drawn from a stream or lake. Basic campsites may offer an untreated tank, a stream or a lake. Great Walk campsites have a water supply with some treated and some untreated. For every category DOC adds the same instruction: untreated water should be boiled before use to ensure it is safe.",
        "Individual DOC pages say it more bluntly. The page for Black Rock campsite in the Queen Charlotte Sound says the water is collected from the shelter roof, so it is untreated and can be limited or unavailable in summer and droughts. The Queen Charlotte Track page warns that the taps at its campsites supply water that is not safe to drink. White Horse Hill, by contrast, lists treated drinking water on site, except in winter when the running water is off.",
      ], ["A tap can still carry untreated water","Read the supply line on the campsite's DOC page","Treated water is the exception, not the default"]),
      s("Why DOC water is usually untreated", [
        "Taumata Arowai, the drinking water regulator, granted a general exemption covering 686 DOC backcountry huts and campsites, announced in June 2024. Those sites have no power supply and no permanent staff, and their water is usually rainwater from roofs stored in tanks, or taken from nearby waterways. The regulator accepted that running a treatment plant at each one is not practical. In return, the exemption requires clear signage telling visitors to boil the water, and DOC's website shows for each hut and campsite whether the water is treated or untreated.",
        "That makes the DOC page and the sign at the tap the two things to trust. A campsite that DOC marks as untreated is a known and accepted arrangement, with the responsibility for making the water safe passed to you.",
      ], ["Look for the boil-water sign at the tap","The DOC page states treated or untreated","Responsibility for treating it is yours"]),
      s("How to make it safe", [
        "DOC's hut guidance says to boil water for three minutes before use if you are unsure of its quality, and its campsite pages say all water should be treated, filtered or boiled for three minutes. Taumata Arowai's boiling advice is a rolling boil held for one minute, with bubbles breaking through the centre that do not stop when you stir. Use the longer DOC figure on conservation land and you will meet both. Store cooled boiled water in a clean, lidded container and use it within 24 hours.",
        "Health NZ's guidance for people camping or tramping lists three options for untreated water from natural sources: bring it to the boil, disinfect it, or put it through an appropriate treatment unit. It also says it may be safest to carry your own bottled water. Carry enough for the day regardless, because taps run dry, tanks empty in a dry spell, and winter can turn off the supply.",
      ], ["DOC: three minutes at a boil","Taumata Arowai: one minute rolling boil","Cool and store it in a lidded container"]),
      s("What is in the water, and what it does", [
        "Giardia is a waterborne parasite that DOC says may be present in hut water, and Health NZ's guidance notes that people, cats, dogs and cattle can carry it. Symptoms usually appear three to 25 days after infection, with a median of seven to 10 days, which is why a sick traveller often blames the wrong campsite. Campylobacter spreads in faeces from people and animals, and Health NZ's consumer sheet gives an incubation of one to 10 days, usually two to five, with diarrhoea that may contain blood and severe stomach cramps.",
        "Neither is visible, and a clear mountain stream says nothing about what upstream animals did. Avoiding untreated water is the safest policy, and if you do get ongoing diarrhoea after camping, tell a doctor where you were and what you drank.",
      ]),
      s("Council supplies, holiday parks and boil-water notices", [
        "Holiday parks and council campgrounds are a different case. Under campground rules, an operator who runs its own supply has a legal duty to provide water that is safe to drink, and Taumata Arowai tells operators to post a Boil Water or Do Not Drink notice above the taps when the water might be unsafe. A tap with untreated water for handwashing should carry a sign saying it is not safe to drink.",
        "Notices come in different strengths. A Boil Water notice means the supply could contain bugs: boil or otherwise treat water for drinking, food, brushing teeth and infant formula. A Do Not Drink notice covers chemicals and toxins, and boiling does not fix that, so you need bottled water. In September 2025 the regulator responded to contamination at the Hanmer Springs Forest Camp, where 10 cases were confirmed and 37 probable, six people needed hospital treatment and every tap was marked as boil-only. When you arrive anywhere, read the tap signs and check the council or park noticeboard before filling a bottle.",
      ], ["Boil Water means boil or treat it","Do Not Drink means boiling will not help","Read the sign at every tap"]),
      s("Campervan tanks and hoses", [
        "Taumata Arowai's campground guidance is written for operators, not for the hose or tank on a visitor's own campervan, so treat these points as habits rather than rules. Fill the fresh-water tank only from a tap marked as drinking water, such as a treated holiday park supply, and not from a stream or a DOC tank that is marked untreated. If you do fill from an untreated source for washing, keep that water out of the drinking supply or boil what you drink.",
        "Keep the fresh-water hose separate from anything used at a dump point, which the guide to dump stations covers, and wash your hands after handling waste. If a tank has sat in the sun for days or been filled from a questionable tap, treat the water before drinking, and sanitise the tank at the start of a long trip.",
      ], ["Fill only from taps marked for drinking","Keep fresh and waste hoses separate","Treat water from an unknown tap"]),
      s("On the day, and what to carry", [
        "Check the campsite's DOC page for the water line before you leave signal range, and look at the tap sign when you arrive. Carry a day's worth of drinking water as a baseline, plus a way to treat more: a stove that boils, a filter, or both. Share boiled water with others at the site to save fuel, as DOC's hut users code suggests.",
        "KiwiCamping is an iPhone app with DOC campsite and hut details, DOC freedom-camping notices by district, dump stations, filters, saved places and trips. Place details, saved places and guides work offline, while map tiles, routing, weather and photos need signal. Saving a campsite before you lose coverage means its details are still on your phone when you reach the tap.",
      ]),
      s("The short version", [
        "Treat DOC campsite and hut water as untreated unless the page says otherwise, and boil it for three minutes, filter it or treat it. A holiday park's own supply is the operator's legal duty to keep safe, but read the tap signs and any notice.",
        "Do not trust a clear stream, and carry spare water for a dry spell or a switched-off supply. Keep drinking-water hoses and tanks well away from anything used for waste.",
      ]),
    ],
    faq: [
      ["Can you drink the water at DOC campsites in NZ?", "Only if the campsite's DOC page says it is treated. DOC says untreated water at serviced, standard, basic and Great Walk campsites should be boiled before use, and its campsite and hut guidance gives three minutes."],
      ["Is it safe to drink stream water in New Zealand?", "Not without treating it. Giardia and Campylobacter can be in stream water however clear it looks, and DOC and Health NZ advise boiling, filtering or an appropriate treatment unit first."],
      ["How long do you boil water for camping in NZ?", "DOC gives three minutes for hut and campsite water, and Taumata Arowai's boil-water advice is a rolling boil for one minute. Use three minutes on conservation land, then cool the water in a lidded container and use it within 24 hours."],
    ],
    sources: [
      { label: "DOC: Campsite categories, facilities and fees", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/facilities-and-fees/" },
      { label: "DOC: About DOC huts (water supply, Giardia, boiling)", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-in-a-hut/about-doc-huts/" },
      { label: "DOC: Black Rock campsite, Queen Charlotte Sound", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/marlborough/places/queen-charlotte-sound-totaranui-area/things-to-do/campsites/black-rock-campsite/" },
      { label: "DOC: Queen Charlotte Track", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/marlborough/places/queen-charlotte-sound-totaranui-area/things-to-do/tracks/queen-charlotte-track/" },
      { label: "DOC: White Horse Hill Campsite, Aoraki/Mount Cook National Park", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/canterbury/places/aoraki-mount-cook-national-park/things-to-do/white-horse-hill-campground/" },
      { label: "Taumata Arowai: DOC backcountry huts and campsites exemption", url: "https://www.taumataarowai.govt.nz/home/articles/taumata-arowai-grants-686-doc-sites-an-exemption-from-drinking-water-rules" },
      { label: "Taumata Arowai: Types of drinking water notices", url: "https://www.taumataarowai.govt.nz/for-the-public/drinking-water-in-an-emergency/drinking-water-notices" },
      { label: "Taumata Arowai: Providing safe water for campers", url: "https://www.taumataarowai.govt.nz/drinking-water-suppliers-and-operators/for-drinking-water-suppliers/camping" },
      { label: "Taumata Arowai: Response to campground drinking water contamination", url: "https://www.taumataarowai.govt.nz/home/articles/water-safety-authority-responds-to-campground-drinking-water-contamination" },
      { label: "Health NZ: Cryptosporidium and Giardia (HealthEd HE1212)", url: "https://healthed.govt.nz/products/cryptosporidium-and-giardia" },
      { label: "Health NZ: Campylobacter, E. coli and Salmonella (HealthEd HE1211)", url: "https://healthed.govt.nz/products/campylobacter-e-coli-and-salmonella" },
      { label: "Health NZ: Giardiasis, Communicable Disease Control Manual", url: "https://www.healthnz.govt.nz/health-professionals/guidance-standards/topic/conditions/communicable-disease-control-manual/giardiasis" },
    ],
  }),

  a({
    slug: "can-i-go-to-the-toilet-outdoors-camping-nz",
    publishAt: "2026-11-18",
    title: "Can I Go to the Toilet Outdoors Camping in NZ? (2026)",
    description: "Only as a last resort: DOC says dig 15-20 cm deep, 50 m from water, tracks and campsites, or carry it out. Freedom campers face $800 fines for leaving waste.",
    category: "Rules & safety",
    region: "New Zealand",
    places: ["Backcountry tracks","DOC huts and campsites","Alpine areas","Freedom camping sites"],
    imageAlt: "A lone toilet hut in a tussock valley near Double Hut in Canterbury, with mountains and cloud beyond",
    related: ["responsible-camping-new-zealand","camping-wastewater-rubbish-new-zealand","freedom-camping-rules-new-zealand"],
    intro:
      "Only as a last resort, and only by the method DOC sets out: go at least 50 metres from water, tracks and campsites, dig a hole 15 to 20 cm deep, and bury everything. Where DOC or a track page says to carry waste out, as it does for Mueller Hut in winter, burying it is not enough. If you are freedom camping, leaving waste anywhere except in a proper receptacle is an $800 infringement fee under the Freedom Camping Act.",
    sections: [
      s("Use a toilet if there is one in reach", [
        "DOC's advice starts with a toilet, not a spade. Every DOC hut and campsite has one, as do some busy car parks, but most tracks have none. DOC tells walkers to go before they set out, and if there is no toilet and they can wait for the next one, to wait. A poo left near water can carry giardia into streams that huts and campsites downstream drink from.",
        "The picture changes with distance. Outside popular places, toilets can be hours apart, and DOC's page on the subject sets out two options for when you cannot wait: dig a hole, or carry it out. The first suits most forest and farmland tracks, and the second suits places where waste does not break down or where many people pass.",
      ], ["Use the toilet at every hut, campsite and car park","Hold on if the next toilet is close","Poo near water spreads giardia"]),
      s("The hole method, step by step", [
        "DOC's method is specific. Walk at least 50 metres, about 70 steps, from water, tracks and campsites. Dig a hole 15 to 20 cm deep, roughly the length of your hand, and DOC suggests a sunny spot because it speeds decomposition. Bury the poo and all your toilet paper and fill the hole right to the top.",
        "Use as little toilet paper as you can, or soft leaves or bark. DOC's line on wipes is blunt: don't use bleached toilet paper or wet wipes. Its page covers poo rather than urine, so going at least the same 50 metres from water, tracks and campsites is a sensible default. Wash your hands away from any water source, not in it.",
      ], ["50 metres, about 70 steps, from water","15 to 20 cm deep, filled in to the top","No wet wipes, no bleached paper"]),
      s("When you must carry it out", [
        "DOC's second option is to carry it out. Put the poo and all toilet paper in a compostable bag and tie it closed, then place that bag in a poo pot or tube with a lid. At the next toilet, check that it is a composting or long-drop toilet before you put the bag in.",
        "DOC is firm about where the bag must not go: flush toilets, containment-vault toilets, motor-home dump stations, gardens, rubbish bins and landfill. In alpine country the choice is made for you. DOC's page for the Mueller Hut Route says winter visitors, from May to late October, need a disposable travel toilet from the visitor centre to carry out all faecal waste, because faeces do not break down in the alpine environment and buried waste can reappear when the snow melts.",
      ], ["Compostable bag, then a poo pot or tube","Only into composting or long-drop toilets","Never into dump stations or bins"]),
      s("Huts, campsites and Great Walks", [
        "At a DOC hut or campsite you should rarely need a hole. All DOC huts have toilets, and Great Walk campsites have basic facilities including toilets and handwashing sinks. DOC's Tongariro Northern Circuit page advises using a toilet when you see one and being prepared with a backup option, and notes that some Great Walk huts have sanitary bins while others do not.",
        "Know what the toilets cannot take. DOC's page for White Horse Hill campsite at Aoraki/Mount Cook says chemical toilet and wastewater cannot be emptied into the campsite toilets, and that in winter the flush toilets give way to pit toilets. A campervan's cassette belongs at a dump station, which the guide to dump stations covers.",
      ]),
      s("Freedom camping: the law and the fines", [
        "When you are freedom camping, the Freedom Camping Act 2011 turns this into an infringement offence. Depositing waste in or on a local authority area, conservation land or LINZ land, other than into an appropriate waste receptacle, is an infringement offence with an $800 fee and a maximum court fine of $2,400, and the prosecution does not have to prove you meant to do it. The Act defines waste to include human waste and a receptacle to include a public toilet or rubbish bin, so a hedge, a roadside or a stream bank does not count.",
        "A tougher offence sits behind it. Discharging a substance in a way that is likely to have a significant adverse effect on the environment, or to cause significant concern to residents or other users, carries a fine of up to $10,000 on conviction. When the vehicle is a rental, the Act lets the hire company pass an infringement fee on to the hirer.",
      ], ["$800 infringement fee for leaving waste","Up to $10,000 for harmful discharge","A public toilet is the appropriate receptacle"]),
      s("Self-contained toilets and dump stations", [
        "A self-contained vehicle exists so that you never face this question. Its toilet and waste tanks are emptied at a dump station or other facility provided for it, not at a public toilet that was built for small flushes and blocks under cassette volumes. If you are in a tent or a vehicle that is not self-contained, the toilets at the site are your only option, so choose a site that has them.",
        "Do not tip a cassette into bushes, drains, rivers or the toilet at a DOC campsite. If you cannot reach the next dump point, a full tank is a planning problem to solve before the legal one starts, and the guide to dump stations covers how far apart they are.",
      ]),
      s("Toilet paper, wipes and sanitary products", [
        "Paper goes in the hole with the poo, or in the bag if you are carrying out. Wet wipes are on DOC's list of things not to use at all. Plan to carry sanitary products out in a sealed bag, because DOC's Tongariro page notes that some huts have no sanitary bin and recommends coming prepared with your own disposal option.",
        "Pack a small kit: a trowel, a few compostable bags, a lidded pot or tube, hand sanitiser and spare toilet paper in a zip bag. It weighs little, and it means the choice on a long day is yours rather than the track's.",
      ], ["Carry a trowel and compostable bags","Seal sanitary products in a bag","Hand sanitiser, not stream water"]),
      s("What to do instead, and the app", [
        "The simplest alternative is planning. Use toilets in towns, at DOC campsites and at car parks before you set off, stay in places that have them, and treat a hole as an emergency tool. In busy places such as the Tongariro Alpine Crossing, DOC's own advice is to use the toilets when they are available.",
        "KiwiCamping is an iPhone app with DOC campsite and hut details, DOC freedom-camping notices by district, dump stations, filters, saved places and trips. Place details, saved places and guides work offline, while map tiles, routing, weather and photos need signal, so you can save a campsite or dump station near your route and still have it when the signal drops.",
      ]),
      s("The short version", [
        "Use a toilet if you can reach one. If you cannot, go 50 metres from water, tracks and campsites, bury it 15 to 20 cm deep with the paper, or carry it out in a bag where DOC asks you to.",
        "Never leave waste outside a proper receptacle while freedom camping, because it costs $800 on the spot and more in court, and never empty a cassette anywhere except a dump station.",
      ]),
    ],
    faq: [
      ["Is it legal to poo outside while camping in NZ?", "Not while freedom camping, where leaving waste outside an appropriate receptacle is an $800 infringement offence. On DOC land without a toilet, DOC's method is to go 50 metres from water, tracks and campsites and bury it 15 to 20 cm deep, or carry it out."],
      ["How deep do you bury poo when camping in New Zealand?", "DOC says 15 to 20 cm, about the length of your hand, at least 50 metres (about 70 steps) from water, tracks and campsites. Bury the toilet paper too, and avoid bleached paper and wet wipes."],
      ["Do you have to carry out your poo in New Zealand?", "In some places, yes. DOC says winter visitors to the Mueller Hut Route need a disposable travel toilet to carry out all faecal waste, and its carry-out option uses a compostable bag in a poo pot, emptied only into a composting or long-drop toilet."],
    ],
    sources: [
      { label: "DOC: Poo in a loo (disposing of human waste)", url: "https://www.doc.govt.nz/parks-and-recreation/know-before-you-go/disposing-of-human-waste/" },
      { label: "DOC: Mueller Hut Route, Aoraki/Mount Cook National Park", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/canterbury/places/aoraki-mount-cook-national-park/things-to-do/tracks/mueller-hut-route/" },
      { label: "DOC: Tongariro Northern Circuit", url: "https://www.doc.govt.nz/tongarironortherncircuit" },
      { label: "DOC: White Horse Hill Campsite", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/canterbury/places/aoraki-mount-cook-national-park/things-to-do/white-horse-hill-campground/" },
      { label: "DOC: How to be a low impact hut user", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-in-a-hut/how-to-be-a-low-impact-hut-user/" },
      { label: "DOC blog: Tongariro Alpine Crossing how-to", url: "https://blog.doc.govt.nz/2026/04/01/tongariro-alpine-crossing-how-to/" },
      { label: "DOC: Campsite categories, facilities and fees", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/facilities-and-fees/" },
      { label: "Legislation: Freedom Camping Act 2011 (sections 20, 20A, 20B, 20D, 20E, 20F)", url: "https://www.legislation.govt.nz/act/public/2011/0061/latest/whole.html" },
      { label: "Legislation: Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "Health NZ: Cryptosporidium and Giardia (HealthEd HE1212)", url: "https://healthed.govt.nz/products/cryptosporidium-and-giardia" },
    ],
  }),

];
