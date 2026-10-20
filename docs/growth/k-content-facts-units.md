# K-content facts fixes: changed English units

Branch `growth/k-content-facts` (from origin/main). Fact fixes inside the existing structure: no sections, paragraphs, tips or FAQ items were added or removed, so each language lane only needs to re-translate the units below.

Sources:

- Plumbers, Gasfitters and Drainlayers Board (the SCV regulator), Private vehicle owners, read 2026-10-20: https://www.pgdb.co.nz/self_contained_vehicles/private_vehicle_owners/ . "The national SCV certification system began on 7 December 2023, with a transition period running until 6 June 2026." "From 7 June 2026, only vehicles certified with a green warrant are recognised as self-contained."
- govt.nz, Freedom camping (last updated 17 June 2026), read 2026-10-20: https://www.govt.nz/browse/recreation-and-the-environment/freedom-camping/ . The transition period ended on Sunday 7 June 2026; after it, blue stickers are no longer valid.

What was wrong: blue warrants were said to stay valid until expiry and no later than 31 December 2027, and green certification was said to start on 7 June 2025. Holiday parks: a $45 site for two was called the same price for a couple as $28 per person (2 x $28 = $56).

Note: release/k-content-b1 rewrites the same warrant units and the holiday-parks unit; when it merges, its English supersedes these (take b1's side in any conflict, but keep $56 or change its "almost the same" wording, which is still wrong there).

Not changed here: the speed-limits repeat (`speed-limits-new-zealand-visitors` sections[4].body[1], "assume any road may be monitored" twice) exists only in release/k-content-b1; main's English has it once. Fix it in that branch.

All keys are under `articles.<slug>` in lib/translations/en.json.

## freedom-camping-rules-new-zealand: `articles.freedom-camping-rules-new-zealand.sections[1].body[0]`

Old: The rules changed in stages. From 7 June 2025, new certifications required a fixed toilet plumbed into the vehicle and issued a green <a data-guide="self-contained-campervan-green-warrant">Certified Self-Contained</a> warrant. Older blue warrants, which allowed portable toilets, stay valid until they expire, and no later than 31 December 2027. After that a blue sticker will not demonstrate compliance anywhere, so check the expiry printed on yours rather than assuming it still counts.

New: The rules changed in stages. The national certification system began on 7 December 2023, and it issues a green <a data-guide="self-contained-campervan-green-warrant">Certified Self-Contained</a> warrant only to a vehicle with a toilet permanently fixed inside. The transition for the old blue warrants, which allowed portable toilets, has now ended: the Plumbers, Gasfitters and Drainlayers Board says that from 7 June 2026 only green warrants are recognised. A blue sticker no longer demonstrates compliance anywhere, whatever expiry date is printed on it.

## freedom-camping-rules-new-zealand: `articles.freedom-camping-rules-new-zealand.sections[1].tips[0]`

Old: Blue warrants lapse by 31 December 2027

New: Only green warrants count from 7 June 2026

## freedom-camping-new-zealand-guide: `articles.freedom-camping-new-zealand-guide.sections[2].body[0]`

Old: Most councils require a <a data-guide="self-contained-campervan-green-warrant">certified self-contained</a> vehicle with a fixed toilet for freedom camping in their district. The system is still in transition: older blue warrants remain valid until they expire, and no later than 31 December 2027, after which restricted areas require the green Certified Self-Contained warrant issued under the regulated system.

New: Most councils require a <a data-guide="self-contained-campervan-green-warrant">certified self-contained</a> vehicle with a fixed toilet for freedom camping in their district. The transition is over: since 7 June 2026, the regulator, the Plumbers, Gasfitters and Drainlayers Board, recognises only the green Certified Self-Contained warrant, so an older blue warrant no longer gets a vehicle into restricted areas.

## self-contained-campervan-green-warrant: `articles.self-contained-campervan-green-warrant.sections[0].body[0]`

Old: The regulated system came in under the self-containment legislation and took effect in stages. From 7 June 2025, new certifications required a toilet fixed into the vehicle and issued a green warrant. Blue warrants issued under the older standard, which permitted portable toilets, remain valid until they expire, and no later than 31 December 2027.

New: The regulated system came in under the self-containment legislation and took effect in stages. National certification began on 7 December 2023, and since then a vehicle needs a toilet fixed into it to receive a green warrant. Blue warrants issued under the older standard, which permitted portable toilets, were allowed during a transition that ran until 6 June 2026.

## self-contained-campervan-green-warrant: `articles.self-contained-campervan-green-warrant.sections[0].body[1]`

Old: Once that period closes, a blue warrant will no longer establish compliance, and any vehicle relying on self-containment for <a data-guide="freedom-camping-new-zealand-guide">freedom camping</a> will need a current green Certified Self-Contained warrant. If you own a converted van certified under the old standard with a portable toilet, plan for a fixed toilet and recertification before the deadline rather than after it.

New: That period has closed. The Plumbers, Gasfitters and Drainlayers Board states that from 7 June 2026 only green-warrant vehicles are recognised as self-contained, so a blue warrant no longer establishes compliance and any vehicle relying on self-containment for <a data-guide="freedom-camping-new-zealand-guide">freedom camping</a> needs a current green warrant. If you own a converted van certified under the old standard with a portable toilet, it needs a fixed toilet and recertification before you freedom camp in it again.

## self-contained-campervan-green-warrant: `articles.self-contained-campervan-green-warrant.sections[0].tips[0]`

Old: Blue warrants lapse by 31 December 2027

New: Blue warrants stopped counting on 7 June 2026

## where-to-camp-in-new-zealand: `articles.where-to-camp-in-new-zealand.sections[6].body[0]`

Old: <a data-guide="freedom-camping-new-zealand-guide">Freedom camping</a> is legal only where it is permitted, and in many districts only for certified self-contained vehicles with a fixed toilet. Older blue certifications remain valid only until they expire, and no later than 31 December 2027, after which a current green warrant is required. The certification is about the vehicle's capability, not your intentions, and enforcement is generally against the vehicle.

New: <a data-guide="freedom-camping-new-zealand-guide">Freedom camping</a> is legal only where it is permitted, and in many districts only for certified self-contained vehicles with a fixed toilet. Older blue certifications stopped counting when the transition ended on 7 June 2026, according to govt.nz, so a current green warrant is now required. The certification is about the vehicle's capability, not your intentions, and enforcement is generally against the vehicle.

## holiday-parks-new-zealand-guide: `articles.holiday-parks-new-zealand-guide.sections[0].body[0]`

Old: Holiday parks price in three different ways and the comparison collapses if you mix them up. Some charge per person, some per site with a stated occupancy, and some quote a base rate with additional guests charged separately. A $45 site for two and a $28-per-person rate are the same price for a couple and very different for a family of five.

New: Holiday parks price in three different ways and the comparison collapses if you mix them up. Some charge per person, some per site with a stated occupancy, and some quote a base rate with additional guests charged separately. A $56 site for two and a $28-per-person rate are the same price for a couple and very different for a family of five.
