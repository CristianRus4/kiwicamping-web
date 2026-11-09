import { makeArticle as a, type Article, type ArticleSection } from "@/lib/article-model";

const s = (heading: string, body: string[], tips?: string[], cta?: boolean): ArticleSection => ({ heading, body, tips, ...(cta && { cta }) });

/**
 * Island, West Coast, stay and budget guides written on 10 November 2026. Facts are general and
 * generalised from the official pages named in each guide's `sources`.
 */
export const k9Articles: Article[] = [
  a({
    slug: "great-barrier-island-camping",
    title: "Camping on Great Barrier Island (Aotea): Getting There, DOC Campsites and Dark Skies",
    description: "How to camp on Great Barrier Island: the ferry and flights from Auckland, the DOC campsites at the beaches, the Aotea Track huts, hot springs, dark skies and what to bring to an island with no mains power.",
    category: "Camping guides",
    region: "Auckland",
    places: ["Great Barrier Island", "Tryphena", "Medlands Beach", "Harataonga", "Port Fitzroy", "Aotea Track"],
    imageAlt: "Pa Beach on Great Barrier Island with clear water and bush behind the sand",
    related: ["camping-in-auckland", "auckland-3-days-campervan", "rakiura-stewart-island-camping-guide", "new-zealand-biosecurity-camping-gear", "responsible-camping-new-zealand", "new-zealand-camping-packing-list"],
    hubs: ["camping/auckland", "huts/auckland"],
    intro:
      "Great Barrier Island, or Aotea, sits about 90 kilometres north-east of Auckland and feels a world further away. There is no mains power, the roads are partly gravel, the beaches are mostly empty and the night sky is among the darkest in the country. Camping is the way most people stay, at DOC campsites behind the beaches or at the small private camps around Tryphena and Port Fitzroy. It takes planning, because you arrive by ferry or plane and bring most of what you need.",
    sections: [
      s("Getting to the island", [
        "There are two ways across. A car ferry runs from Auckland's downtown wharf to the island in roughly four to five hours, and it carries cars and campervans as well as foot passengers. Small planes fly from Auckland in about half an hour, with a baggage limit that suits a tent but not a full camping kitchen.",
        "A campervan on the ferry is a real cost, and the sailings are limited and book out in summer, so reserve as soon as your dates are set. Many visitors leave the van in Auckland and hire a vehicle on the island instead, or stay at one beach and walk. Either way, check the operators' own timetables and rules for gas bottles, since carrying them on board is restricted.",
      ], ["Ferry: roughly four to five hours", "Flights: about half an hour, with a baggage limit", "Book early for summer"]),
      s("Where to camp", [
        "DOC runs campsites at several of the island's beaches, among them Medlands, Harataonga, Awana and Akapoua. They are simple, with toilets and water of varying quality, and you carry in whatever else you need. Medlands and Awana sit behind surf beaches, Harataonga has a long white beach and a walk along the coast, and Akapoua is a sheltered bay on the quieter west side. Check DOC for the current list, the fees and whether a site needs a booking, as the popular ones fill in January.",
        "Around Tryphena and Port Fitzroy there are small private camps and holiday-park style stays, with showers and sometimes a shop nearby. They are the easier choice if you want a hot shower and a base for a few nights. Freedom camping is tightly limited on the island, so plan on a campground and check the council's current rules before you pitch anywhere else.",
      ], ["DOC campsites at Medlands, Harataonga, Awana and Akapoua", "Private camps near Tryphena and Port Fitzroy", "Plan on a campground, not roadside"]),
      s("Walks, hot springs and the Aotea Track", [
        "The island is mostly conservation land, and it is walking country. The Aotea Track is a multi-day loop through the high forest, with DOC huts at Kaiarara and Mt Heale that you book through DOC, and plenty of shorter walks that start from the road. The Kaitoke Hot Springs are an easy walk across a wetland to a natural hot stream, and the Harataonga coastal track and the Kauri Dam walks give a gentler day.",
        "Surf, snorkelling and fishing are the beach activities, and many of the bays are very clear. Take what you need for the weather, because the island catches the same wet fronts as the mainland. The guide to wet weather camping covers keeping a tent dry.",
      ], ["Aotea Track huts: book on DOC", "Kaitoke Hot Springs: an easy walk", "Beaches for surf and snorkelling"]),
      s("Dark skies and island rules", [
        "Aotea was named an International Dark Sky Sanctuary in 2017, which means it has almost no light pollution, and on a clear night the Milky Way is easy to see from any beach. The island has no street lights in most places, so bring a torch, and use a red light if you stop to look at the stars.",
        "The island is also a refuge for rare birds and plants, and pests are kept out. Clean your boots and gear before you go, check bags for rats and insects, and follow the biosecurity advice at the ferry terminal. The biosecurity guide has a short checklist, and the responsible camping guide covers the rest.",
      ], ["Almost no light pollution", "Clean boots and gear before you go", "Check bags for rats and insects"]),
      s("What to bring", [
        "There is no mains power, so the island runs on solar, wind and generators, and shops are small with limited stock and higher prices. Bring most of your food, a gas stove and spare gas if the operator allows it, a good torch, a power bank, insect repellent for the sandflies near water and warm layers for the evenings. Fuel is available at a couple of places but not everywhere, so fill up in Tryphena or Claris if you have a vehicle.",
        "Mobile coverage is patchy and drops out across much of the island, so save your booking details and directions before the ferry. Tell someone your plan for any long walk. The packing list guide has the full checklist for a camping trip.",
      ], ["Bring most of your food", "A torch and a power bank", "Patchy phone coverage"]),
      s("Planning your trip in KiwiCamping", [
        "KiwiCamping is an iPhone app that maps DOC campsites, huts and holiday parks, with filters for facilities and access, so you can see which island campsites have toilets and water before you book the ferry. Save the places you like, add them to a trip with dates, and the app shows the forecast at each stop. Great Barrier is one stop on a longer Auckland trip, so it helps to keep the island nights and the mainland nights in one plan.",
        "DOC bookings stay on DOC's own booking pages, and the ferry is booked with the operator. Free to download, with in-app purchases.",
      ], ["Save the island campsites", "Add them to a trip with dates", "Forecast at each stop"], true),
    ],
    faq: [
      ["Can you camp on Great Barrier Island?", "Yes. DOC has campsites at several beaches, including Medlands, Harataonga, Awana and Akapoua, and there are small private camps near Tryphena and Port Fitzroy. Freedom camping is tightly limited."],
      ["How do you get to Great Barrier Island?", "By car ferry from Auckland, which takes roughly four to five hours, or by a small plane in about half an hour. Book early for summer."],
    ],
    sources: [
      { label: "DOC: Aotea Great Barrier Island", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/auckland/places/aotea-great-barrier-island/" },
      { label: "DOC: Aotea Track", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/auckland/places/aotea-great-barrier-island/things-to-do/aotea-track/" },
      { label: "SeaLink: Great Barrier Island ferry", url: "https://www.sealink.co.nz/" },
      { label: "Biosecurity New Zealand: protecting our islands", url: "https://www.mpi.govt.nz/biosecurity/" },
    ],
  }),
];
