import type { HubProse } from "../hub-prose";

const QLDC = { label: "Queenstown Lakes District Council freedom camping rules", url: "https://www.qldc.govt.nz/recreation/responsible-camping" };
const TAUPO = { label: "Taupō District Council freedom camping rules", url: "https://www.taupodc.govt.nz/recreation/freedom-camping" };
const RUAPEHU = { label: "Ruapehu District Council freedom camping rules", url: "https://www.ruapehudc.govt.nz/our-facilities/parks-reserves-and-camping/camping" };

/** Prose for the freedom-camping hubs. See lib/hub-prose.ts for the rules every paragraph must follow. */
export const freedomCampingProse: Record<string, HubProse> = {
  "freedom-camping/central-otago": {
    paragraphs: [
      "DOC's Central Otago district has 13 current freedom camping notices on public conservation land, and 11 of them prohibit freedom camping outright. Only 2 areas are restricted rather than closed. These notices were made by DOC for land it manages. They are not council bylaws, and they do not cover reserves, roadsides or car parks run by a council. All the listed areas lie in Queenstown Lakes District, around Wanaka, Albert Town, Luggate, Makarora and the Crown Range, so wherever you are on council land rather than conservation land, the Queenstown Lakes District Council freedom camping rules apply instead.",
      "Most of the prohibited land sits in just two notices. Newcastle Track is the largest notice area at 81.8 ha, and Deans Bank, Dublin Bay tracks covers 51.4 ha, which together account for most of the 143.4 ha where camping is prohibited. The rest are small: Roys Peak Track carpark (0.3 ha), Diamond Lake, Wanaka (0.3 ha), Cameron Flat River Access (0.6 ha), Albert Town Outlet carpark (1.2 ha) and the Mt Aspiring National Park Visitor Centre, Wanaka (0.4 ha) among them. Prohibited means no freedom camping in that area at all, whether or not your vehicle is certified self-contained.",
      "The 2 restricted areas, 1.2 ha between them, carry quite different conditions, so read each one on its own. At Crown Range Summit you may freedom camp only in a certified self-contained vehicle, and for no more than 4 nights in a calendar month. At Raspberry Creek carpark the notice sets a time window instead: camping is allowed only between 5 pm and 9 am, so arrive in the evening and be gone by morning.",
      "The current notices come from two dates. Of them, 7 were made on 1 December 2012 and 6 on 1 December 2017, with notice numbers running from 119 to 290, and together they sit on 10 distinct conservation land parcels. A further 2 notices for this district are historic and no longer current, so if an older list names a spot that is missing here, check it against the current notices before relying on it.",
    ],
    councils: [QLDC],
  },

  "freedom-camping/hawkes-bay": {
    paragraphs: [
      "Restricted areas in the Hawkes Bay district all follow one pattern. Of 16 current DOC notices, 6 restrict freedom camping and every one of those 6 carries the same pair of conditions: self-contained vehicles only, and no more than 4 nights in a calendar month. The other 10 prohibit it.",
      "The restricted areas are Balls Clearing Roadend Carpark, Elsthorpe Carpark, Mohi Bush Picnic Area, Shine Falls Roadend Amenity Area, Tangoio Falls and White Pine Bush Picnic Area. In practice you need a certified self-contained vehicle to stay at any of them, and a tent or an uncertified van is not allowed. Mohi Bush Picnic Area is the biggest at 4 ha of the 5.9 ha that is restricted.",
      "Prohibited areas cover 21.2 ha. Cape Kidnappers Track Amenity Area is the largest single notice area at 11.4 ha. The list also takes in Kuripapango Amenity Area (3 ha), Lake Tutira Amenity Area, Lake Tutira Boat Ramp Amenity Area, Opouahi Scenic Reserve, Pohokura Roadend Carpark, Lotkow Amenity Area and two urban sites: Humber Street, Ahuriri Estuary, Napier and Otatara Pa, Taradale. No freedom camping is allowed at any of these.",
      "Nearly the whole set dates from 1 December 2012, when 15 of the current notices were made. The exception is Monckton Carpark, prohibited by notice 297 on 13 November 2021. Notice numbers run from 23 to 297, the notices cover 27.1 ha on 14 distinct conservation land parcels, and 3 older notices for the district are historic and no longer current.",
      "Keep in mind that these are DOC notices for conservation land, not council bylaws. Council reserves, roadsides and car parks are covered by the council's own freedom camping rules instead: the Napier City Council freedom camping rules around Napier and Taradale, the Hastings District Council freedom camping rules in Hastings District, where most of the listed areas lie, and the Central Hawke's Bay District Council freedom camping rules further south around Elsthorpe.",
    ],
    councils: [
      { label: "Napier City Council freedom camping rules", url: "https://www.napier.govt.nz/napier/freedom-camping/information/" },
      { label: "Hastings District Council freedom camping rules", url: "https://www.hastingsdc.govt.nz/services/parking/overnight-parking-for-self-contained-vehicles" },
      { label: "Central Hawke's Bay District Council freedom camping rules", url: "https://www.chbdc.govt.nz/our-district/exploring-central-hawkes-bay/freedom-camping/" },
    ],
  },

  "freedom-camping/new-plymouth": {
    paragraphs: [
      "The New Plymouth district has 22 current DOC freedom camping notices: 13 prohibit camping and 9 restrict it. All 9 restricted areas share the core conditions of self-contained vehicles only and no more than 4 nights in a calendar month, so a certified self-contained vehicle is the minimum for staying overnight at any of them.",
      "At Everett Park Carparks and Mangaoraka Carpark the notices go further. Camping there is allowed only between 5 pm and 9 am, and the notices record that the restrictions apply 1 November to 30 April. The other restricted areas are Dawson Falls Carparks, North Egmont Carparks, Potaema Carpark, Puniho Carpark, Stratford Mountain House Carparks, Stratford Plateau Carparks and Upper Lucys Gully Carpark.",
      "Look closely at the names, because several sites have a prohibited notice area and a restricted one under almost the same name. Dawson Falls view carpark is prohibited while Dawson Falls Carparks is restricted, and the same split applies to Potaema Amenity Area and Potaema Carpark, to Upper Lucys Gully Amenity Area and Upper Lucys Gully Carpark, and to Stratford Mtn House Amenity Area and Stratford Mountain House Carparks. Lower North Egmont Amenity Area is prohibited, North Egmont Carparks restricted.",
      "Prohibited areas total 30.7 ha and restricted areas 15.5 ha, 46.2 ha in all across 6 distinct conservation land parcels. The largest notice area is Pukerangiora Pa Carpark at 14.8 ha, followed by Gordon Block at 7.4 ha, and both are prohibited. Nearly every notice dates from 1 December 2012 (20 of them); Gordon Block and Dawson Falls view carpark were added on 1 December 2017. Notice numbers run from 165 to 289, and 1 earlier notice is now historic.",
      "None of this is a council bylaw. DOC's notices cover only public conservation land. On land the council controls, the New Plymouth District Council freedom camping rules apply, and Ohura Peak Amenity Area lies in Ruapehu District, where the Ruapehu District Council freedom camping rules cover council land. Several listed areas fall in neighbouring districts, so check whose land you are on before you stop for the night.",
    ],
    councils: [
      { label: "New Plymouth District Council freedom camping rules", url: "https://www.npdc.govt.nz/leisure-and-culture/freedom-camping/" },
      RUAPEHU,
    ],
  },

  "freedom-camping/south-westland": {
    paragraphs: [
      "DOC's South Westland district has 18 current freedom camping notices on public conservation land. Of these, 17 prohibit camping outright and just 1 is restricted. These are DOC notices for land it manages, not council bylaws: on roadsides, reserves and car parks the council controls, the Westland District Council freedom camping rules apply instead.",
      "The one restricted area is Whakapohai Road, South Westland, covering 3.1 ha. You may freedom camp there only in a certified self-contained vehicle, and for no more than 4 nights in a calendar month. Every other area on the list is closed to freedom camping, whatever you are driving and however self-contained it is.",
      "The prohibited areas are mostly small car parks at the places visitors stop: Fox Glacier Visitor Centre Carpark, Franz Josef Glacier Road and Carparks, Lake Matheson Carpark, Haast Visitor Centre Carpark, Knights Point Viewpoint Carparks, Ship Creek Amenity Area and Carpark, Monro Beach Walk Carpark and Westland National Park Visitor Centre. Many cover less than 1 ha, and Wharekai -Te Kou Walk Carparks is the smallest at 0.1 ha. Roaring Billy Walk carpark is the largest notice area at 18.4 ha, ahead of Okarito Recreation Reserve at 9.9 ha, and prohibited land totals 41.9 ha of the 45 ha covered.",
      "Three notices are recent. MacDonalds Creek and Peak Viewpoint were prohibited on 13 November 2021, and Southside Road, Fox Glacier Carparks on 13 December 2021; the other 15 date from 1 December 2012. Notice numbers run from 84 to 304, the notices sit on 12 distinct conservation land parcels, and 1 older notice for the district is historic and no longer current, so check an older list against these before relying on it.",
    ],
    councils: [{ label: "Westland District Council freedom camping rules", url: "https://westlanddc.govt.nz/responsible-camping-bylaw" }],
  },

  "freedom-camping/te-anau": {
    paragraphs: [
      "DOC's Te Anau district has 24 current freedom camping notices on public conservation land, and every one of them prohibits camping. There are no restricted areas here, so no notice lets even a certified self-contained vehicle stay: if a place is on this list, you cannot freedom camp there at all. The notices cover 4,046.5 ha in total. They were made by DOC for land it manages and are not council bylaws; on council land around Te Anau, the Southland District Council freedom camping rules apply instead.",
      "One notice dwarfs the rest. Patience Bay, Milford Road is the largest notice area at 2,107.6 ha, more than half of the total. Eweburn covers 609.3 ha, Queens and Rainbow Reaches carparks 370.2 ha and Margin Forest 181.7 ha. At the other end, Pearl Harbour, Waiau River is the smallest at 1.1 ha, and Te Anau AO and Visitor Centre Carparks covers 1.6 ha, so the list runs from large blocks of land down to single car parks in town.",
      "Many of the notices sit along the road to Milford: The Divide Carpark, Lake Gunn Walk Carpark, Lake Marian Falls Track Carpark, Mistake Creek Track Carpark, Monkey Creek, The Chasm Carpark, Hollyford Roadend and Moraine Creek Carpark, Homer Nature Walk & Gertrude Valley Track and Tutuko Valley Track. Of the 24 notices, 12 share one conservation land parcel. Kepler Track and Control Gate Carparks and Te Anau Downs and Lake Mistletoe Carparks are on the list too, so trailhead parking is not a place to sleep.",
      "All 24 current notices were made on the same day in December 2012, with notice numbers running from 230 to 256, and none for this district is historic, so this list is the whole current picture for DOC land here. For somewhere to stay, look at the DOC campsites in the area or the council's rules for its own land, and read the freedom camping rules guide before you set off.",
    ],
    councils: [{ label: "Southland District Council freedom camping rules", url: "https://southlanddc.govt.nz/services/freedom-camping/freedom-camping-need-to-know/" }],
  },

  "freedom-camping/tongariro": {
    paragraphs: [
      "Prohibited areas dominate the Tongariro district. Of 22 current DOC notices, 17 prohibit freedom camping, and the largest notice area, Whakapapa Village at 43.5 ha, is one of them. Ohakune Lakes adds another 16.8 ha, and most of the rest are car parks at track ends, falls and viewpoints: Mangatepopo Roadend Carpark, Ketetahi Road Carpark, Tawhai Falls Carpark, Mounds Walk Carpark, Waitonga Falls Carpark, Raurimu Spiral Viewpoint and the Ohakune Visitor Centre among them. In a prohibited area you cannot freedom camp at all.",
      "Restricted areas number 5, and each one requires a self-contained vehicle and allows no more than 4 nights in a calendar month: Dominion Rd Carpark, Okupata Caves Carpark, Rangataua Road End Carpark, Taurewa Loop Track Carpark and Tukino Mountain Road Carpark. Rangataua Road End Carpark is the biggest at 19.6 ha. Tukino Mountain Road Carpark carries extra conditions as well, with camping allowed only between 5 pm and 9 am and restrictions that apply 1 November to 30 April.",
      "In all, the notices cover 103 ha, 78.4 ha prohibited and 24.6 ha restricted, spread over just 4 distinct conservation land parcels. Notice numbers run from 163 to 227. Most date from 1 December 2012 (20 notices); Scoria Flat Carpark followed in 2015 and Raurimu Spiral Viewpoint in 2017. A single older notice is historic and no longer current.",
      "These notices apply to public conservation land only. They are not council bylaws, and they say nothing about council reserves, roadsides or town car parks. Most of the listed areas are in Ruapehu District and the remainder in Taupō District, and on council land there the Ruapehu District Council freedom camping rules or the Taupō District Council freedom camping rules apply. Being outside a DOC notice area does not by itself mean a spot is open for camping, so check the council's rules for the land you are on.",
    ],
    councils: [RUAPEHU, TAUPO],
  },

  "freedom-camping/turangi": {
    paragraphs: [
      "In the Turangi district the restricted land far outweighs the prohibited land, even though prohibited notices are more numerous. Of 28 current DOC notices, 21 prohibit freedom camping and 7 restrict it, yet the restricted areas cover 289.7 ha against 52.3 ha prohibited. Nearly all of that restricted land is one place: Whakaipo Amenity Area, the largest notice area at 281.2 ha.",
      "Whakaipo needs care, because two notices share nearly the same name. Whakaipo Amenity Area (Lakeshore) is a separate 15.7 ha notice where camping is prohibited outright, while the wider Whakaipo Amenity Area is restricted. All 7 restricted areas carry the same conditions, self-contained vehicles only and no more than 4 nights in a calendar month, so you need a certified self-contained vehicle at Whakaipo Amenity Area, Hinemaiaia Reserve Carparks, Huka-Aratiatia Amenity Area, Pillars of Hercules Carpark, Southern Access Corridor, Umukarikari Carpark and Urchin Carpark.",
      "The 21 prohibited areas are mostly small car parks, picnic areas and amenity areas, including Tokaanu Hot Pools Carparks, Major Jones Amenity Area, Stag Pool Carpark, Cliff Pool Carpark, Hatepe Picnic Area, Mission Bay Amenity Area and Taupo Landing and Yacht Club carpark. The bigger ones are Parikarangaranga Picnic Site at 14.4 ha and Awaroa Amenity Area at 10.1 ha. No freedom camping is allowed in any of them.",
      "These notices built up over several years rather than in one round. Of the current notices, 19 date from 2012, 2 from 2014, 3 from 2016, 3 from 2017 and 1 from 2021, when Five Mile Bay Amenity Area was prohibited on 13 November 2021. Notice numbers run from 161 to 296, and the areas sit on 19 distinct conservation land parcels. A further 10 notices are historic and no longer current, so check any older list against the current notices.",
      "All of this applies to public conservation land only. These are DOC notices, not council bylaws, and the reserves, roadsides and car parks run by the council are governed by the Taupō District Council freedom camping rules, so the rules can change as you move from DOC land to council land.",
    ],
    councils: [TAUPO],
  },

  "freedom-camping/wakatipu": {
    paragraphs: [
      "The road from Queenstown to Glenorchy shapes much of the Wakatipu list. DOC has 29 current freedom camping notices in this district and 21 of them prohibit camping. Most of those prohibited areas are named stops along Queenstown-Glenorchy Road, from Bobs Cove, Twelve Mile Delta and Wilson Bay to Bennetts Bluff, White Point, Rat Point and Lake Face Creek. If you are driving that road, treat each of these as closed to freedom camping.",
      "Away from the lakeside road, prohibited areas include Routeburn Roadend (6.7 ha), Routeburn - Weka Flat, Morning Star Beach, Mt Alfred Carpark, Lake Kirkpatrick, Moke Road (4 ha) and Roaring Meg carpark and picnic area. Oxenbridge Reserve is the largest notice area in the district at 8.6 ha, and it too is prohibited. Prohibited land totals 34.1 ha.",
      "The 8 restricted areas, covering 10.5 ha, are where the conditions matter. Of those 8, 7 are for self-contained vehicles only, 7 allow no more than 4 nights in a calendar month and 6 allow camping only between 5 pm and 9 am. Chinamans Bluff carpark, Diamond Lake, Glenorchy, Glacier Burn Carpark and Greenstone River carpark carry every one of those conditions, so arrive after 5 pm in a certified self-contained vehicle and leave by 9 am. Diamond Lake needs particular care: Diamond Lake, Glenorchy is restricted, but the separate Diamond Lake, Glenorchy - Bloomfields Hill notice is prohibited.",
      "Notice dates are 1 December 2012 for 20 of the current notices and 1 December 2017 for 9, with notice numbers from 121 to 288 across 21 distinct conservation land parcels. This district also has 13 historic notices that are no longer current, so an older list may include notices that no longer apply.",
      "These notices cover public conservation land only and are not council bylaws. On the roadsides, reserves and car parks that the council manages, the Queenstown Lakes District Council freedom camping rules apply regardless of the DOC notices.",
    ],
    councils: [QLDC],
  },
};
