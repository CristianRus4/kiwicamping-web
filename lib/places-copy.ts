import { feeLabel, isListingType, nearbyPlaces, type Place, typeLabel } from "@/lib/places";

/**
 * The words a place page writes from the app's facts: the summary under the photos, the questions and
 * answers, and the meta description. Every sentence comes from a known fact, so a page says nothing it
 * cannot back up and each page reads differently from the next. Nothing is invented when a fact is missing.
 */
const lower = (value: string) => value.charAt(0).toLowerCase() + value.slice(1);
const list = (items: string[]) => items.length <= 1 ? items.join("") : `${items.slice(0, -1).join(", ")} and ${items.at(-1)}`;
const article = (word: string) => (/^[aeiou]/i.test(word) ? "an" : "a");
const keepCase = (value: string) => (/^(DOC|BBQ|WiFi)/.test(value) ? value : lower(value));

const modes: Record<string, string> = { car: "car", campervan: "campervan", caravan: "caravan", foot: "on foot", boat: "boat", mountain_bike: "mountain bike" };
const dogText = { yes: "Dogs are allowed.", no: "Dogs are not allowed.", leash: "Dogs are allowed on a leash.", permit: "Dogs need a DOC permit." } as const;

/** Where a place is, in one phrase: "in Abel Tasman National Park, Nelson Tasman". */
export function wherePhrase(place: Place) {
  return [place.park && !place.name.includes(place.park) ? place.park : undefined, place.stateName].filter(Boolean).join(", ");
}

function accessSentence(place: Place) {
  const vehicles = place.access.filter((mode) => ["car", "campervan", "caravan"].includes(mode));
  if (vehicles.length) return `You can get there by ${list(vehicles.map((mode) => modes[mode]))}.`;
  if (place.access.includes("boat") && !place.access.includes("foot")) return "It can only be reached by boat.";
  if (place.access.includes("foot")) return `It is reached on foot${place.access.includes("boat") ? " or by boat" : ""}.`;
  return undefined;
}

export function placeSummary(place: Place): string[] {
  const kind = place.type === "holiday_park" ? "holiday park" : `${place.category && place.category !== "Standard" ? `${place.category} ` : ""}${isListingType(place.type) ? typeLabel(place).one : typeLabel(place).one.toLowerCase()}`;
  const sentences = [`${place.name} is ${article(kind)} ${kind} in ${wherePhrase(place)}, on the ${place.island}.`];
  if (place.stars) sentences.push(`It is rated ${place.stars} stars.`);
  if (place.sites) sentences.push(place.type === "doc_hut" ? `It has ${place.sites} bunks.` : `It has ${place.sites} sites.`);
  if (place.walk) sentences.push(`It is ${place.walk} on foot from the road end.`);
  if (place.amenities.length) sentences.push(`Its facilities include ${list(place.amenities.slice(0, 3).map(keepCase))}${place.amenityCount > 3 ? `, ${place.amenityCount} in all` : ""}.`);
  if (place.activities.length) sentences.push(`Things to do here include ${list(place.activities.slice(0, 3).map(lower))}.`);
  const access = accessSentence(place);
  if (access) sentences.push(access);
  if (place.dogs) sentences.push(dogText[place.dogs]);
  if (place.bookingRequired) sentences.push(place.type === "doc_hut" ? "Bunks must be booked ahead." : "Sites must be booked ahead.");
  const nearest = nearbyPlaces(place, 1)[0];
  if (nearest) sentences.push(`The nearest other place in KiwiCamping is ${nearest.place.name}, ${nearest.km < 1 ? "under 1" : Math.round(nearest.km)} km away.`);
  return sentences;
}

export type PlaceQuestion = { question: string; answer: string };

/** Questions people search for, answered only where the data has the answer. */
export function placeQuestions(place: Place): PlaceQuestion[] {
  const questions: PlaceQuestion[] = [];
  const fee = feeLabel(place.fee);
  if (place.type === "holiday_park" && place.booking) questions.push({ question: `How do I book ${place.name}?`, answer: "Use the Book now button on this page to see live prices and availability for your dates and book with the park." });
  else if (fee === "Free") questions.push({ question: `Is ${place.name} free?`, answer: `Yes. ${place.name} is listed as free. Conditions can change, so check the latest details in KiwiCamping before you go.` });
  else if (fee) questions.push({ question: `How much does it cost to stay at ${place.name}?`, answer: "Fees apply and change with the season. KiwiCamping shows the current DOC fee and how to book." });
  if (place.bookingRequired) questions.push({ question: `Do you need to book ${place.name}?`, answer: `Yes. ${place.type === "doc_hut" ? "Bunks" : "Sites"} at ${place.name} must be booked ahead with DOC.` });
  if (place.dogs) questions.push({ question: `Are dogs allowed at ${place.name}?`, answer: dogText[place.dogs] });
  if (place.access.length) {
    const campervan = place.access.includes("campervan") || place.access.includes("caravan");
    questions.push({ question: `Can you take a campervan to ${place.name}?`, answer: campervan ? `Yes. ${accessSentence(place)}` : `No. ${accessSentence(place) ?? "It cannot be reached by vehicle."}` });
  }
  if (place.type === "doc_hut" && place.sites) questions.push({ question: `How many bunks does ${place.name} have?`, answer: `${place.name} has ${place.sites} bunks.` });
  if (place.amenities.length) questions.push({ question: `What facilities does ${place.name} have?`, answer: `${list(place.amenities.slice(0, 5))}${place.amenityCount > 5 ? `, and ${place.amenityCount - 5} more listed in KiwiCamping` : ""}.` });
  return questions;
}

/** The meta description: the summary's opening facts, under 155 characters. */
export function placeDescription(place: Place) {
  const text = placeSummary(place).slice(0, 3).join(" ");
  return text.length <= 155 ? text : `${text.slice(0, text.lastIndexOf(" ", 154))}…`;
}
