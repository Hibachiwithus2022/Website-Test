// ─── Illinois Data ─────────────────────────────────────────────────────────────
// 18 cities · 6 themes · indices 558-581
// Generic: 558-563 | City-specific: 564-581
// Batch 1: Chicago, Evanston, Lake Forest, Highland Park, Winnetka (564-568)
// Batch 2: Naperville, Hinsdale, Oak Brook, Wheaton, Downers Grove (569-573)
// Batch 3: Schaumburg, Barrington, Northbrook, Orland Park (574-577)
// Batch 4: Champaign, Bloomington, Peoria, Rockford (578-581)

// ─── Theme Heroes ──────────────────────────────────────────────────────────────
const IL_THEME_HEROES = [
  '/pics/hibachi-event.jpg',         // T0 — Chicago Executive
  '/pics/hibachi-private-chef-1.jpg', // T1 — North Shore Premier
  '/pics/hibachi-at-home.jpg',        // T2 — North Shore Family
  '/pics/backyard-hibachi-3.jpg',     // T3 — DuPage & Western Family
  '/pics/hibachi-catering-2.jpg',     // T4 — Corporate Corridor
  '/pics/hibachi-photo-1.jpg',        // T5 — Downstate University & Regional
]

// ─── Theme H1 Prefixes (generic fallback) ─────────────────────────────────────
const IL_THEME_H1_PREFIXES = [
  'Private Hibachi Chef in',  // T0
  'Private Hibachi Chef in',  // T1
  'Hibachi at Home in',       // T2
  'Hibachi at Home in',       // T3
  'Hibachi Catering in',      // T4
  'Mobile Hibachi in',        // T5
]

// ─── Profile H1 Prefixes (city-specific, 18 entries) ──────────────────────────
const IL_PROFILE_H1_PREFIXES = [
  'Private Hibachi Chef in',  // 0  — Chicago
  'Hibachi Catering in',      // 1  — Evanston
  'Private Hibachi Chef in',  // 2  — Lake Forest
  'Hibachi at Home in',       // 3  — Highland Park
  'Hibachi at Home in',       // 4  — Winnetka
  'Hibachi at Home in',       // 5  — Naperville
  'Private Hibachi Chef in',  // 6  — Hinsdale
  'Hibachi Catering in',      // 7  — Oak Brook
  'Hibachi at Home in',       // 8  — Wheaton
  'Hibachi at Home in',       // 9  — Downers Grove
  'Hibachi Catering in',      // 10 — Schaumburg
  'Backyard Hibachi in',      // 11 — Barrington
  'Hibachi at Home in',       // 12 — Northbrook
  'Backyard Hibachi in',      // 13 — Orland Park
  'Hibachi at Home in',       // 14 — Champaign
  'Mobile Hibachi in',        // 15 — Bloomington
  'Mobile Hibachi in',        // 16 — Peoria
  'Hibachi at Home in',       // 17 — Rockford
]

// ─── Custom Meta (all 18 cities) ───────────────────────────────────────────────
const IL_CUSTOM_META = {
  // Batch 1
  'chicago':       { title: 'Private Hibachi Chef in Chicago, IL | Gold Coast Estate Dinners, River North Corporate Events & Lincoln Park Backyard Celebrations', desc: 'A certified teppanyaki chef travels to your Chicago property — Gold Coast estate birthday dinners, River North corporate team events, Lincoln Park graduation parties, Fulton Market client appreciation dinners. From $60/adult.' },
  'evanston':      { title: 'Hibachi Catering in Evanston, IL | Northwestern Graduation Weekend Parties, Central Street Estate Events & Lake Michigan Milestone Celebrations', desc: 'Private hibachi catering for Northwestern graduation weekend family dinners, Central Street estate celebrations, and Lake Michigan lakefront events — a certified teppanyaki chef arrives fully self-contained. From $60/adult.' },
  'lake-forest':   { title: 'Private Hibachi Chef in Lake Forest, IL | Onwentsia Club Estate Dinners, Lake Forest Academy Graduation Events & North Shore Milestone Celebrations', desc: 'A certified teppanyaki chef travels to your Lake Forest estate — Onwentsia Club-adjacent anniversary dinners, Lake Forest Academy graduation celebrations, and North Shore executive home events. From $60/adult.' },
  'highland-park': { title: 'Hibachi at Home in Highland Park, IL | Ravinia Season Garden Parties, Lake Michigan Estate Graduation Celebrations & North Shore Backyard Events', desc: 'A private hibachi chef arrives at your Highland Park home — Ravinia-season outdoor estate parties, Lake Michigan graduation backyard celebrations, and North Shore family milestone events. From $60/adult.' },
  'winnetka':      { title: 'Hibachi at Home in Winnetka, IL | Hubbard Woods Estate Dinners, Tower Road Lakefront Events & North Shore Milestone Celebrations', desc: 'A private hibachi chef arrives at your Winnetka estate — Hubbard Woods lakefront milestone dinners, Tower Road anniversary events, and North Shore backyard celebrations. From $60/adult.' },
  // Batch 2
  'naperville':    { title: 'Hibachi at Home in Naperville, IL | Naperville North & Central Graduation Parties, White Eagle Estate Dinners & Riverwalk Backyard Celebrations', desc: 'A private hibachi chef arrives at your Naperville home — Naperville North and Central graduation parties, White Eagle estate dinners, Ashwood Park backyard milestones. From $60/adult.' },
  'hinsdale':      { title: 'Private Hibachi Chef in Hinsdale, IL | Katherine Avenue Estate Dinners, Hinsdale Central Graduation Events & Western Suburbs Luxury Celebrations', desc: 'A certified teppanyaki chef travels to your Hinsdale estate — luxury Katherine Avenue milestone dinners, Hinsdale Central graduation events, and western suburb executive home private dining. From $60/adult.' },
  'oak-brook':     { title: 'Hibachi Catering in Oak Brook, IL | McDonald\'s HQ Corporate Events, Oakbrook Center Executive Dinners & Fortune 500 Team Celebrations', desc: 'Private hibachi catering for McDonald\'s campus corporate events, Oakbrook Center-area executive team dinners, and Fortune 500 client appreciation events in Oak Brook. From $60/adult.' },
  'wheaton':       { title: 'Hibachi at Home in Wheaton, IL | Wheaton College Graduation Parties, Cantigny Park-Area Estate Events & DuPage County Milestone Celebrations', desc: 'A private hibachi chef arrives at your Wheaton home — Wheaton College graduation weekend family dinners, Cantigny Park-adjacent backyard events, and DuPage family milestone celebrations. From $60/adult.' },
  'downers-grove': { title: 'Hibachi at Home in Downers Grove, IL | Downers Grove North & South Graduation Parties, Downtown Backyard Milestones & DuPage Family Celebrations', desc: 'Downers Grove North and South graduation backyard parties, milestone birthday events, and family celebrations — a private hibachi chef arrives at your Downers Grove property with everything included. From $60/adult.' },
  // Batch 3
  'schaumburg':    { title: 'Hibachi Catering in Schaumburg, IL | Motorola Solutions Team Events, Zurich North America Corporate Dinners & Woodfield Corridor Celebrations', desc: 'Private hibachi catering for Motorola Solutions and Zurich North America corporate team dinners, Woodfield Mall-area company anniversary events, and Schaumburg executive gatherings. From $60/adult.' },
  'barrington':    { title: 'Backyard Hibachi in Barrington, IL | Barrington Hills Equestrian Estate Events, Countryside Milestone Celebrations & Northwest Suburbs Backyard Parties', desc: 'Private hibachi at your Barrington Hills equestrian estate or countryside property — milestone anniversary dinners, backyard birthday celebrations, and large-lot outdoor events. From $60/adult.' },
  'northbrook':    { title: 'Hibachi at Home in Northbrook, IL | Glenbrook North Graduation Parties, Northbrook Court-Area Estate Events & North Shore Family Milestones', desc: 'Glenbrook North graduation backyard parties, family milestone birthday celebrations, and North Shore-adjacent estate events — a private hibachi chef arrives at your Northbrook property. From $60/adult.' },
  'orland-park':   { title: 'Backyard Hibachi in Orland Park, IL | Carl Sandburg Graduation Parties, Orland Park Crossing-Area Backyard Events & Southwest Suburbs Family Milestones', desc: 'Carl Sandburg High School graduation backyard parties, milestone birthday events, and large-lot SW suburb family celebrations — private hibachi arrives at your Orland Park property. From $60/adult.' },
  // Batch 4
  'champaign':     { title: 'Hibachi at Home in Champaign, IL | UIUC Graduation Weekend Family Dinners, Research Park Corporate Events & Campustown Milestone Celebrations', desc: 'University of Illinois graduation weekend family dinners, Research Park corporate team events, and Champaign-area home celebrations — a private hibachi chef arrives fully self-contained. From $60/adult.' },
  'bloomington':   { title: 'Mobile Hibachi in Bloomington, IL | ISU Graduation Parties, State Farm Corporate Events & Rivian Campus Team Dinners', desc: 'A certified teppanyaki chef travels to Bloomington — Illinois State University graduation weekend family dinners, State Farm corporate team events, and Rivian employee milestone celebrations. From $60/adult.' },
  'peoria':        { title: 'Mobile Hibachi in Peoria, IL | Caterpillar Corporate Events, Bradley University Graduation Parties & Grandview Drive Estate Celebrations', desc: 'A certified teppanyaki chef travels to Peoria — Caterpillar corporate team appreciation dinners, Bradley University graduation family events, and Grandview Drive estate milestone celebrations. From $60/adult.' },
  'rockford':      { title: 'Hibachi at Home in Rockford, IL | Rock River Community Celebrations, Anderson Japanese Gardens Estate Events & Regional Family Milestone Parties', desc: 'Rock River community family celebrations, milestone birthday backyard parties, and Rockford regional gatherings — a private hibachi chef arrives at your property with everything included. From $60/adult.' },
}

// ─── City Image Map (Batch 1 — experience image overrides section variant) ─────
const IL_CITY_IMAGE_MAP = {
  'chicago':       { src: '/pics/hibachi-chef-2.jpg',       alt: (city) => `Private hibachi chef event in ${city}, Illinois` },
  'evanston':      { src: '/pics/hibachi-austin-home.jpg',  alt: (city) => `Hibachi catering event in ${city}, IL` },
  'lake-forest':   { src: '/pics/hibachi-photo-2.jpg',      alt: (city) => `Private hibachi chef at ${city} estate, Illinois` },
  'highland-park': { src: '/pics/hibachi-dallas-home.jpg',  alt: (city) => `Hibachi at home in ${city}, Illinois` },
  'winnetka':      { src: '/pics/hibachi-chef-home.jpg',    alt: (city) => `Estate hibachi dinner in ${city}, IL` },
}

// ─── Support Images (testimonial + CTA, Batch 1) ──────────────────────────────
const IL_SUPPORT_IMAGES = {
  'chicago':       { testimonial: { src: '/pics/hibachi-shot-1.jpg',      alt: (c) => `Private hibachi event in ${c}`,       caption: 'Chicago Corporate & Estate Events',               trustBadge: '4.9★ · Gold Coast & River North'          }, cta: { src: '/pics/hibachi-colorado.jpg',     alt: (c) => `Book your ${c} private hibachi event`,    caption: 'Corporate packages · From $60/adult'    } },
  'evanston':      { testimonial: { src: '/pics/hibachi-catering-3.jpg',  alt: (c) => `Hibachi catering event in ${c}`,     caption: 'Evanston Northwestern Graduation Events',         trustBadge: '5.0★ · Northwestern Graduation Trusted'   }, cta: { src: '/pics/private-party-chef-6.jpg', alt: (c) => `Book your ${c} hibachi event`,             caption: 'Graduation season · From $60/adult'     } },
  'lake-forest':   { testimonial: { src: '/pics/hibachi-catering-2.jpg',  alt: (c) => `Estate hibachi dinner in ${c}`,      caption: 'Lake Forest Estate & North Shore Events',         trustBadge: '5.0★ · Onwentsia & Academy Trusted'       }, cta: { src: '/pics/hibachi-pic-3.jpg',        alt: (c) => `Reserve your ${c} estate hibachi event`,  caption: 'Premium proteins · Full setup included' } },
  'highland-park': { testimonial: { src: '/pics/hibachi-photo-1.jpg',     alt: (c) => `Hibachi at home in ${c}`,            caption: 'Highland Park Ravinia Season Events',             trustBadge: '4.9★ · Ravinia Corridor Trusted'          }, cta: { src: '/pics/backyard-hibachi.jpg',     alt: (c) => `Book your ${c} hibachi event`,             caption: 'From $60/adult · Ravinia season books fast'} },
  'winnetka':      { testimonial: { src: '/pics/hibachi-shot-2.jpg',      alt: (c) => `Estate hibachi event in ${c}`,       caption: 'Winnetka North Shore Estate Events',              trustBadge: '5.0★ · Hubbard Woods & Tower Road'        }, cta: { src: '/pics/hibachi-pic-2.jpg',        alt: (c) => `Reserve your ${c} estate hibachi event`,  caption: 'Full setup included · From $60/adult'   } },
}

// ─── Major Cities Map (all 18) ─────────────────────────────────────────────────
const IL_MAJOR_CITIES = {
  // ── Batch 1 ────────────────────────────────────────────────────────────────
  'chicago':       { v: 0, profileIdx: 0,  nearby: ['Evanston', 'Highland Park', 'Winnetka', 'Lake Forest'] },
  'evanston':      { v: 1, profileIdx: 1,  nearby: ['Chicago', 'Highland Park', 'Winnetka'] },
  'lake-forest':   { v: 1, profileIdx: 2,  nearby: ['Highland Park', 'Evanston', 'Winnetka'] },
  'highland-park': { v: 2, profileIdx: 3,  nearby: ['Lake Forest', 'Evanston', 'Winnetka', 'Chicago'] },
  'winnetka':      { v: 1, profileIdx: 4,  nearby: ['Evanston', 'Highland Park', 'Lake Forest'] },
  // ── Batch 2 ────────────────────────────────────────────────────────────────
  'naperville':    { v: 3, profileIdx: 5,  nearby: ['Wheaton', 'Downers Grove', 'Hinsdale', 'Oak Brook'] },
  'hinsdale':      { v: 3, profileIdx: 6,  nearby: ['Oak Brook', 'Downers Grove', 'Naperville'] },
  'oak-brook':     { v: 4, profileIdx: 7,  nearby: ['Hinsdale', 'Downers Grove', 'Schaumburg'] },
  'wheaton':       { v: 3, profileIdx: 8,  nearby: ['Naperville', 'Downers Grove', 'Hinsdale'] },
  'downers-grove': { v: 3, profileIdx: 9,  nearby: ['Naperville', 'Hinsdale', 'Oak Brook', 'Wheaton'] },
  // ── Batch 3 ────────────────────────────────────────────────────────────────
  'schaumburg':    { v: 4, profileIdx: 10, nearby: ['Barrington', 'Northbrook', 'Oak Brook'] },
  'barrington':    { v: 2, profileIdx: 11, nearby: ['Schaumburg', 'Lake Forest', 'Northbrook'] },
  'northbrook':    { v: 2, profileIdx: 12, nearby: ['Highland Park', 'Evanston', 'Schaumburg'] },
  'orland-park':   { v: 3, profileIdx: 13, nearby: ['Northbrook', 'Schaumburg'] },
  // ── Batch 4 ────────────────────────────────────────────────────────────────
  'champaign':     { v: 5, profileIdx: 14, nearby: ['Bloomington', 'Peoria'] },
  'bloomington':   { v: 5, profileIdx: 15, nearby: ['Champaign', 'Peoria'] },
  'peoria':        { v: 5, profileIdx: 16, nearby: ['Bloomington', 'Champaign'] },
  'rockford':      { v: 5, profileIdx: 17, nearby: ['Schaumburg', 'Chicago'] },
}

// ─── Hero Subtitles (per theme) ────────────────────────────────────────────────
const IL_HERO_SUBTITLES = [
  (city) => `Corporate Events · Estate Private Dining · Full Setup & Cleanup · Serving All of ${city}`,
  (city) => `Lake Michigan Estate Dining · Premium Proteins · Full Setup & Cleanup · Serving ${city}`,
  (city) => `North Shore Graduation Parties · Family Milestones · Private Chef · Serving ${city}`,
  (city) => `Graduation Parties · Backyard Milestones · Live Teppanyaki · Serving ${city} & Surrounding Areas`,
  (city) => `Corporate Team Events · Client Appreciation Dinners · Live Teppanyaki · Serving ${city}`,
  (city) => `University Graduation Season · Regional Family Events · Mobile Chef · Serving ${city}`,
]

// ─── Generic Intro Variants (T0–T5, indices 558–563) ──────────────────────────
export const IL_INTRO_VARIANTS = [
  // 558 — T0 Chicago Executive
  {
    headline: (city) => `Private Hibachi Chef in ${city}: Corporate Events and Estate Private Dining Across the City`,
    opening:  (city, state) => `Gold Coast estate birthday dinners, River North corporate client appreciation events, Lincoln Park graduation backyard parties, Fulton Market team dinners, and Wicker Park neighborhood milestone celebrations — a certified teppanyaki chef travels to your ${city} property with a fully self-contained propane teppan grill and delivers the live-fire performance your group has been anticipating. ${city} is the Midwest's primary executive and luxury market, and private hibachi is the format that its residential neighborhoods, corporate campuses, and entertainment corridors were built for.`,
    middle:   (city, state) => `The chef arrives with the propane teppan grill, all proteins, fresh ingredients, house-made sauces, and every piece of equipment needed. For corporate groups and graduation parties over 25, dual chef stations ensure everyone eats at the same time. Complete setup in 20–30 minutes, live performance for 90–120 minutes, full cleanup when dinner ends.`,
    closing:  (city, state) => `Same-day quotes for any ${city} neighborhood or venue — submit your date and address now.`,
  },
  // 559 — T1 North Shore Premier
  {
    headline: (city) => `Private Hibachi Chef in ${city}: Lake Michigan Estate Dining and North Shore Private Events`,
    opening:  (city, state) => `North Shore Lake Michigan estate anniversary dinners, graduation weekend private events, lakefront milestone celebrations, and executive home private dining — a certified teppanyaki chef arrives at your ${city} property with the full self-contained setup and premium proteins as the standard expectation. The North Shore's Lake Michigan estate corridor, its lakefront residential culture, and its tradition of private entertaining make this the ideal format for the occasions that matter most at this address.`,
    middle:   (city, state) => `Your chef brings a fully self-contained propane teppan grill, filet mignon and lobster tail available per guest, fried rice, vegetables, house-made sauces, and complete equipment. Setup in 20–30 minutes. Live performance for 90–120 minutes. Full cleanup when dinner ends — your property is exactly as it was.`,
    closing:  (city, state) => `North Shore estate events book 3–5 weeks ahead in summer and graduation season — submit your date for a same-day quote.`,
  },
  // 560 — T2 North Shore Family
  {
    headline: (city) => `Hibachi at Home in ${city}: North Shore Graduation Parties and Family Backyard Milestones`,
    opening:  (city, state) => `${city} graduation backyard parties, milestone birthday celebrations, Ravinia-season outdoor estate events, and North Shore family gatherings — a private hibachi chef arrives at your property with everything needed so you're actually present at the occasion you planned. North Shore communities have the outdoor spaces, the backyard culture, and the family milestone tradition that private hibachi was designed to complement.`,
    middle:   (city, state) => `Your chef brings the propane grill, all proteins, fried rice, vegetables, miso soup, salad, house-made sauces, and complete equipment. For graduation parties of 30–50, dual stations keep everyone eating at the same time. Complete setup, full performance, complete cleanup.`,
    closing:  (city, state) => `North Shore graduation Saturdays in May and June book 4–6 weeks ahead — submit your date now for a same-day quote.`,
  },
  // 561 — T3 DuPage & Western Family
  {
    headline: (city) => `Hibachi at Home in ${city}: Graduation Parties and DuPage Backyard Celebrations`,
    opening:  (city, state) => `${city} graduation parties, birthday milestones, and family celebrations in the western suburbs — a private hibachi chef who arrives at your backyard with everything needed so you're actually present at the event you planned. DuPage County's large residential lots, its strong family culture, and its established outdoor entertaining tradition make it one of Illinois's most natural markets for private hibachi.`,
    middle:   (city, state) => `Your chef brings the self-contained propane grill, all proteins, fried rice, vegetables, miso soup, salad, house-made sauces, and complete equipment. For graduation parties of 30–50, dual stations keep everyone eating at the same time. Complete setup and full cleanup included.`,
    closing:  (city, state) => `DuPage County graduation Saturdays in May and June book 4–6 weeks ahead — submit your date now for a same-day quote.`,
  },
  // 562 — T4 Corporate Corridor
  {
    headline: (city) => `Hibachi Catering in ${city}: Fortune 500 Corporate Events and Executive Team Dinners`,
    opening:  (city, state) => `${city}'s Fortune 500 corporate campus corridor, executive home client dinners, and company milestone celebration events — a certified teppanyaki chef travels to your ${city} venue or residential property with a fully self-contained propane teppan grill and delivers the live performance that transforms a team event into a genuine occasion. The Illinois corporate corridor's concentration of professional talent demands an event format that matches the quality of its companies.`,
    middle:   (city, state) => `The chef arrives fully self-contained — propane teppan grill, all proteins, complete ingredients, and every piece of equipment. For corporate groups over 25, dual stations keep everyone eating at the same time. Complete setup, 90–120 minute live performance, full cleanup.`,
    closing:  (city, state) => `Most ${city} corporate and executive event quotes are returned same day — submit your date and venue address and we respond immediately.`,
  },
  // 563 — T5 Downstate University & Regional
  {
    headline: (city) => `Mobile Hibachi in ${city}: University Graduation Season and Regional Family Events`,
    opening:  (city, state) => `University graduation weekend family dinners, corporate team appreciation events for major ${city} employers, and regional family celebrations — a certified teppanyaki chef travels to your ${city} property with a fully self-contained propane teppan grill, all proteins, and everything needed. No gas hookup required at any ${city} property. The format that keeps graduation weekend families at the table instead of managing restaurant logistics in a city where hibachi options are limited.`,
    middle:   (city, state) => `The chef arrives with the self-contained propane grill, all ingredients, and complete equipment. Single station for up to 25 guests, dual stations for graduation-weekend events of 30–50. Live performance 90–120 minutes, complete cleanup when dinner ends.`,
    closing:  (city, state) => `${city} graduation season dates book 5–7 weeks ahead — if you have a commencement date, reserve now.`,
  },
]

// ─── Generic Closing Variants (T0–T5, indices 558–563) ────────────────────────
export const IL_CLOSING_VARIANTS = [
  // 558 — T0
  { headline: (city) => `Book Your ${city} Private Hibachi Event`, sub: (city) => `Corporate team dinners, Gold Coast estate events, and Lincoln Park graduation parties — submit your ${city} date and address for a same-day quote.`, urgency: 'Chicago holiday corporate season and North Shore peak graduation dates fill 4–6 weeks ahead. Lock your date with a deposit.', cta: { label: 'Request a Quote', caption: 'Same-day quotes · Events from $60/adult' } },
  // 559 — T1
  { headline: (city) => `Book Your ${city} Estate Event`, sub: (city) => `North Shore Lake Michigan estate dinners, graduation weekend events, and lakefront celebrations — most ${city} quotes returned same day.`, urgency: 'North Shore estate and graduation season dates fill 3–5 weeks ahead in summer. Reserve yours now.', cta: { label: 'Reserve Your Estate Date', caption: 'Premium proteins · Full setup included' } },
  // 560 — T2
  { headline: (city) => `Book Your ${city} Hibachi Event`, sub: (city) => `Graduation parties, Ravinia-season outdoor events, and North Shore family milestones — same-day quotes for any ${city} date.`, urgency: 'North Shore graduation Saturdays in May and June fill 4–6 weeks ahead. Submit your date now.', cta: { label: 'Book Your Date', caption: 'From $60/adult · Graduation season books fast' } },
  // 561 — T3
  { headline: (city) => `Book Your ${city} Backyard Event`, sub: (city) => `Graduation parties, birthday milestones, and family celebrations in ${city} — same-day quotes, deposit locks your date immediately.`, urgency: 'DuPage County graduation Saturdays in May and June fill 4–6 weeks ahead. Reserve now.', cta: { label: 'Book Your Date', caption: 'From $60/adult · Graduation season books fast' } },
  // 562 — T4
  { headline: (city) => `Book Your ${city} Corporate Event`, sub: (city) => `Fortune 500 team dinners, client appreciation events, and company milestones in ${city} — same-day quotes for any corporate date.`, urgency: 'Illinois corporate season and holiday event dates fill 3–4 weeks ahead. Reserve now with a deposit.', cta: { label: 'Request a Corporate Quote', caption: 'Groups 8–60+ · From $60/adult' } },
  // 563 — T5
  { headline: (city) => `Book Your ${city} Hibachi Event`, sub: (city) => `University graduation weekend, corporate team dinner, or ${city} home celebration — a same-day quote for any event.`, urgency: 'University graduation weekends in May book 5–7 weeks ahead. If you have a commencement date, reserve the chef now.', cta: { label: 'Get a Same-Day Quote', caption: 'From $60/adult · Graduation season fills fast' } },
]

// ─── City-Specific Intros (Batch 1, indices 564–568) ──────────────────────────
export const IL_CITY_INTROS = [
  // 564 — Chicago (Batch 1)
  {
    headline: (city, state) => `Private Hibachi Chef in Chicago: Gold Coast Estate Dinners, River North Corporate Events and Lincoln Park Graduation Parties`,
    opening:  (city, state) => `Gold Coast estate birthday dinners for 12 guests on a private rooftop terrace, River North corporate client appreciation team dinners for 30 in a Fulton Market loft, Lincoln Park graduation backyard parties for 45 family members, West Loop anniversary dinner celebrations, Logan Square neighborhood milestone events, and Wicker Park birthday gatherings — a certified teppanyaki chef travels to your Chicago property with a fully self-contained propane teppan grill and delivers the live-fire performance that makes any occasion genuinely memorable. Chicago is the Midwest's premier executive and residential market, and private hibachi is the format its Gold Coast estates, its River North corporate culture, and its neighborhood backyard celebrating tradition were built for.`,
    middle:   (city, state) => `The chef arrives with the propane teppan grill, all proteins including filet mignon, lobster tail, and wagyu on request, fried rice, vegetables, house-made sauces, and complete equipment. No gas hookup required at any Chicago property, rooftop terrace, or event venue. For corporate groups and graduation parties over 25, dual chef stations ensure everyone eats at the same time. Complete setup in 20–30 minutes, live teppanyaki performance for 90–120 minutes, full cleanup when dinner ends.`,
    closing:  (city, state) => `Same-day quotes for any Chicago neighborhood — Gold Coast, River North, Lincoln Park, Fulton Market, West Loop, Wicker Park, Logan Square. Submit your date and address and we respond immediately.`,
  },
  // 565 — Evanston (Batch 1)
  {
    headline: (city, state) => `Hibachi Catering in Evanston: Northwestern Graduation Weekend Parties, Central Street Estate Events and Lake Michigan Lakefront Celebrations`,
    opening:  (city, state) => `Northwestern University Law School graduation weekend family dinners, Kellogg School of Management commencement weekend events, Northwestern's June graduation lakefront property gatherings, Central Street-area estate celebration dinners, and Lighthouse Landing Lake Michigan corridor anniversary events — a certified teppanyaki chef arrives at your Evanston property with everything needed. Evanston's dual identity — university community and North Shore lakefront residential market — creates consistent demand for the format that keeps graduation weekend families at the table instead of competing for restaurant reservations on the busiest dining weekend in Chicagoland.`,
    middle:   (city, state) => `The chef brings the propane teppan grill, all proteins including premium upgrades, fried rice, vegetables, miso soup, salad, house-made sauces, and complete equipment. For Northwestern graduation groups of 20–45, dual stations are available. Complete setup in 20–30 minutes, full performance for 90–120 minutes, complete cleanup when dinner ends. No gas hookup required at any Evanston property, vacation rental, or lakefront home.`,
    closing:  (city, state) => `Northwestern graduation weekend dates in June book 5–7 weeks ahead — if you have a commencement date, submit it now to reserve the chef.`,
  },
  // 566 — Lake Forest (Batch 1)
  {
    headline: (city, state) => `Private Hibachi Chef in Lake Forest: Onwentsia Club Estate Dinners, Lake Forest Academy Graduation Events and North Shore Lakefront Celebrations`,
    opening:  (city, state) => `Your Lake Forest estate — Onwentsia Club corridor, Washington Road mansion belt, Lake Michigan lakefront properties, Market Square-area homes, Lake Forest Academy graduation family dinners, Deer Path Inn-adjacent executive celebration events — a certified teppanyaki chef arrives with the full live-fire setup, premium proteins as standard, and a performance that transforms your outdoor terrace or courtyard into the finest private dining room on the North Shore. Lake Forest is Illinois's most prestigious residential address, and private hibachi is the format that matches what the property already is. No restaurant reservation in the Chicago metro replicates what your Lake Forest estate can do.`,
    middle:   (city, state) => `The chef brings a fully self-contained propane teppan grill, filet mignon and lobster tail as default upgrade options, Chilean sea bass, wagyu available on request, fried rice, vegetables, house-made sauces, and complete equipment. Setup in 20–30 minutes. Live performance for 90–120 minutes. Full cleanup — your estate is exactly as it was when the chef arrives.`,
    closing:  (city, state) => `Lake Forest estate dates fill 3–5 weeks ahead in summer and graduation season — submit your date for a same-day quote.`,
  },
  // 567 — Highland Park (Batch 1)
  {
    headline: (city, state) => `Hibachi at Home in Highland Park: Ravinia Festival Season Estate Events, Lake Michigan Graduation Parties and North Shore Family Backyard Milestones`,
    opening:  (city, state) => `Highland Park's Ravinia Festival season is when the city's outdoor entertaining culture peaks — June through August, when lakefront estates and Ravinia-adjacent garden properties become the venue, and a private hibachi chef is the format that keeps your group at the property instead of joining the post-concert restaurant scramble. Ravinia neighborhood graduation parties, Lake Michigan lakefront estate anniversary dinners, Central Avenue-area milestone birthday celebrations, Loch Lomond community backyard events, and Highland Park High School graduation family gatherings — a private hibachi chef arrives at your Highland Park property with everything needed for the full performance.`,
    middle:   (city, state) => `Your chef brings the propane teppan grill, all proteins, fried rice, vegetables, miso soup, salad, house-made sauces, and complete equipment. For Highland Park graduation parties of 30–50, dual stations keep everyone eating at the same time. Complete setup, full performance, full cleanup. No gas hookup required at any Highland Park property or lakefront home.`,
    closing:  (city, state) => `Ravinia season and Highland Park graduation Saturdays in May and June book 4–6 weeks ahead — submit your date now for a same-day quote.`,
  },
  // 568 — Winnetka (Batch 1)
  {
    headline: (city, state) => `Hibachi at Home in Winnetka: Hubbard Woods Estate Dinners, Tower Road Lakefront Events and North Shore Milestone Celebrations`,
    opening:  (city, state) => `Hubbard Woods estate milestone birthday celebrations, Tower Road lakefront anniversary dinners, Crow Island community backyard events, Green Bay Road corridor executive home gatherings, and North Shore milestone family celebrations — a private hibachi chef arrives at your Winnetka property with the full live-fire setup and premium proteins as the expectation. Winnetka is the North Shore's most prestigious residential address at median household incomes that reflect the community's commitment to quality. No restaurant in Chicagoland matches what your Winnetka estate property already is. The chef arrives at your home, and the occasion happens exactly where it belongs.`,
    middle:   (city, state) => `The chef brings a fully self-contained propane teppan grill, filet mignon and lobster tail available across the full table, fried rice, vegetables, house-made sauces, and complete equipment. Setup in 20–30 minutes. Live performance for 90–120 minutes. Full cleanup — your estate or lakefront property is exactly as it was when the chef leaves.`,
    closing:  (city, state) => `Winnetka estate dates fill 3–5 weeks ahead in summer and graduation season — submit your date for a same-day quote.`,
  },
]

// ─── City-Specific Closings (Batch 1, indices 564–568) ────────────────────────
export const IL_CITY_CLOSINGS = [
  // 564 — Chicago
  { headline: (city) => `Book Your Chicago Private Hibachi Event`, sub: (city) => `Gold Coast estate dinners, River North corporate events, Lincoln Park graduation parties, Fulton Market team dinners — submit your date and address for a same-day Chicago quote.`, urgency: 'Chicago holiday corporate season and May/June graduation dates fill 4–6 weeks ahead. Lock your date with a deposit.', cta: { label: 'Request a Chicago Quote', caption: 'Same-day quotes · Events from $60/adult' } },
  // 565 — Evanston
  { headline: (city) => `Book Your Evanston Hibachi Event`, sub: (city) => `Northwestern graduation weekends, Central Street estate events, and Evanston lakefront celebrations — submit your date for a same-day quote.`, urgency: 'Northwestern graduation weekends in June book 5–7 weeks ahead. If you have a commencement date, reserve the chef now.', cta: { label: 'Reserve Your Evanston Date', caption: 'From $60/adult · NU graduation season' } },
  // 566 — Lake Forest
  { headline: (city) => `Book Your Lake Forest Estate Event`, sub: (city) => `Onwentsia Club estate dinners, Lake Forest Academy graduation events, and North Shore lakefront celebrations — most Lake Forest quotes returned same day.`, urgency: 'Lake Forest estate and graduation season dates fill 3–5 weeks ahead. Reserve yours now with a deposit.', cta: { label: 'Reserve Your Estate Date', caption: 'Premium proteins · Full setup included' } },
  // 567 — Highland Park
  { headline: (city) => `Book Your Highland Park Hibachi Event`, sub: (city) => `Ravinia-season garden parties, Lake Michigan graduation celebrations, and Highland Park backyard events — same-day quotes for any date.`, urgency: 'Ravinia season and Highland Park graduation Saturdays fill 4–6 weeks ahead. Submit your date now.', cta: { label: 'Book Your Highland Park Date', caption: 'From $60/adult · Ravinia season books fast' } },
  // 568 — Winnetka
  { headline: (city) => `Book Your Winnetka Estate Event`, sub: (city) => `Hubbard Woods lakefront milestone dinners, Tower Road anniversary events, and Winnetka North Shore celebrations — most Winnetka quotes returned same day.`, urgency: 'Winnetka estate dates fill 3–5 weeks ahead in summer and graduation season. Reserve yours now.', cta: { label: 'Reserve Your Winnetka Date', caption: 'Premium proteins · Full estate setup' } },
]

// ─── Testimonials (3 per city, Batch 1) ───────────────────────────────────────
const IL_TESTIMONIALS = {
  'chicago': [
    { name: 'Michael S.', text: 'Corporate client appreciation dinner at our River North loft space — 24 guests. We\'d done restaurant group blocks for years and this format was categorically better. The chef arrived fully self-contained, performed for two hours, and our clients were still talking about it at the next quarterly meeting. Dual stations handled the full group seamlessly. Our go-to format for client entertainment now.', location: 'Chicago, IL', rating: 5, event: 'Corporate Client Dinner' },
    { name: 'Jennifer R.', text: 'Gold Coast estate anniversary dinner for 16 guests on our rooftop terrace — we\'ve lived in this building for twelve years and this was the finest evening we\'ve hosted here. The chef set up in 20 minutes, performed for two hours, wagyu and lobster tail across the table, and left the terrace spotless. No restaurant in Chicago matches what the setting already was.', location: 'Chicago, IL', rating: 5, event: 'Anniversary Estate Event' },
    { name: 'David P.', text: 'Lincoln Park graduation party for 42 family members in our backyard. Our daughter graduated from DePaul and we had family in from six states — the hibachi format kept everyone at the same table for the entire evening. Dual stations, fire tricks, the volcano, and the filet mignon upgrade for our graduate. The single best event we\'ve hosted at this property.', location: 'Chicago, IL', rating: 5, event: 'Graduation Party' },
  ],
  'evanston': [
    { name: 'Laura K.', text: 'Northwestern Law School graduation weekend dinner for 28 family members — we rented a Central Street-area vacation home for the weekend and the hibachi chef was the anchor event of the trip. Every family member came in from a different city and we needed something that worked without restaurant logistics. Chef arrived fully self-contained, performed for two and a half hours, and the evening was unanimous: best graduation dinner we\'ve done.', location: 'Evanston, IL', rating: 5, event: 'Northwestern Graduation Dinner' },
    { name: 'Robert T.', text: 'Anniversary dinner at our Lake Michigan lakefront home in south Evanston — 14 guests. The setting was already beautiful; the chef matched it completely. Premium proteins across the full table, 90 minutes of performance, and a cleanup so complete we couldn\'t tell the chef had been there. Exactly what the lakefront property deserved.', location: 'Evanston, IL', rating: 5, event: 'Anniversary Lakefront Dinner' },
    { name: 'Amy N.', text: 'Research Park team dinner for 20 employees at our Evanston home — we needed something genuinely memorable for the team\'s quarterly milestone, not another restaurant block. The chef was professional, personable, and delivered a full live performance that had every engineer at the table engaged for two hours. Best team event we\'ve done in five years at this company.', location: 'Evanston, IL', rating: 5, event: 'Corporate Team Dinner' },
  ],
  'lake-forest': [
    { name: 'Catherine H.', text: 'Anniversary estate dinner at our Washington Road property — 12 guests. We\'ve entertained at this home for twenty years and this was the finest format we\'ve used. The chef set up on our south terrace, premium proteins across the full table, performed for 90 minutes with complete professionalism, and left the terrace exactly as it was. We\'re already planning the same format for next summer\'s milestone.', location: 'Lake Forest, IL', rating: 5, event: 'Anniversary Estate Dinner' },
    { name: 'James B.', text: 'Lake Forest Academy graduation family dinner — 26 guests from four states. Our son graduated from LFA and we wanted a dinner that matched the occasion. The chef arrived at our property, set up by the pool, and gave us a two-hour performance that had grandparents and teenagers equally engaged. The wagyu upgrade was exactly right for the milestone.', location: 'Lake Forest, IL', rating: 5, event: 'Lake Forest Academy Graduation' },
    { name: 'Margaret W.', text: 'Executive client appreciation dinner at our Lake Forest estate — 18 guests. C-suite guests who have attended events across the country, and the unanimous feedback was that this was the most impressive private dinner format they\'d experienced. The chef was exceptional, the proteins were excellent, and the performance kept every guest at the table for the full evening.', location: 'Lake Forest, IL', rating: 5, event: 'Executive Client Dinner' },
  ],
  'highland-park': [
    { name: 'Susan M.', text: 'Ravinia-season garden party at our Highland Park estate — 26 guests on a July Saturday evening. We host a summer garden party every year and this was the first one where we were actually at the table instead of managing catering. Chef arrived with everything, performed for two hours in our backyard with the garden in full bloom, and left everything spotless. Our guests are still talking about it.', location: 'Highland Park, IL', rating: 5, event: 'Ravinia Season Garden Party' },
    { name: 'Tom A.', text: 'Highland Park High School graduation party — 44 family members in our backyard. We live three minutes from the venue, have the outdoor space, and needed a format that kept everyone together. Dual chef stations handled the full group, the fire tricks had every age completely transfixed, and the filet mignon upgrade for our graduate made the evening feel genuinely special. Our best graduation event.', location: 'Highland Park, IL', rating: 5, event: 'HPHS Graduation Party' },
    { name: 'Karen P.', text: 'Milestone birthday celebration at our Lake Michigan lakefront home in Highland Park — 20 guests. The lakefront setting made the evening extraordinary before the chef even set up. Then the performance matched the setting: two hours of professional teppanyaki, premium proteins, fire tricks over the lake. We\'ve been hosting events at this property for fifteen years and this format was new territory entirely.', location: 'Highland Park, IL', rating: 5, event: 'Milestone Birthday Celebration' },
  ],
  'winnetka': [
    { name: 'Anne C.', text: 'Milestone birthday at our Hubbard Woods estate — 16 guests on our west terrace. We had a specific vision for the evening: premium private dining at the property, not a restaurant. The chef matched that vision exactly. Wagyu and lobster tail across the full table, 90 minutes of flawless performance, and the property was spotless when he left. Our guests are asking for the same format at their own properties now.', location: 'Winnetka, IL', rating: 5, event: 'Estate Milestone Birthday' },
    { name: 'Richard N.', text: 'Anniversary dinner at our Tower Road lakefront property — 12 guests. We\'ve hosted dinners on this property for sixteen years. Private hibachi was the first format that felt genuinely commensurate with the setting. Premium proteins, an 80-minute performance as the sun set over the lake, and impeccable cleanup. Reserving the same chef for next year\'s anniversary immediately.', location: 'Winnetka, IL', rating: 5, event: 'Tower Road Anniversary Dinner' },
    { name: 'Sarah L.', text: 'North Shore family celebration at our Green Bay Road-area home — 22 guests for a milestone gathering with family from four states. The chef engaged every generation at the table simultaneously — grandchildren were convinced the fire volcano was magic, and the grandparents were raving about the food quality. The format kept every generation together for the full evening. Perfect for this occasion.', location: 'Winnetka, IL', rating: 5, event: 'Family Milestone Celebration' },
  ],
}

// ─── Section Variants (6 themes) ───────────────────────────────────────────────
const IL_SECTION_VARIANTS = [
  // T0 — Chicago Executive
  {
    heroPill: 'Chicago Executive & Estate Events',
    experiencePill: 'The Chicago Private Hibachi Experience',
    experiencePoints: [
      'A certified teppanyaki chef travels to your Chicago property — Gold Coast estate, River North loft, Lincoln Park backyard, West Loop event space',
      'Corporate team events and home celebrations for groups of 8–60+: single station for 25, dual stations for larger groups',
      'Premium proteins standard: filet mignon, lobster tail, Chilean sea bass, and wagyu available per guest',
      'Complete self-contained propane setup — no gas hookup, no outdoor kitchen required. Full cleanup when dinner ends.',
    ],
    experienceImage: '/pics/hibachi-chef-2.jpg',
    experienceImageAlt: (city) => `Private hibachi chef event in ${city}, Illinois`,
    areasPill: 'Greater Chicago Market',
    areasHeadline: (city) => `We Serve ${city} and All of Chicagoland`,
    areasIntro: [
      (city, state) => `We serve ${city} and every Chicagoland neighborhood and suburb — Gold Coast, Lincoln Park, River North, Fulton Market, West Loop, Wicker Park, Logan Square, Evanston, Oak Park, the North Shore, and every community across the Chicago metro area.`,
      (city) => `Most ${city} corporate and home event quotes are returned same day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton: 'Check Availability',
    occasionPill: 'Chicago Events',
    occasionHeadline: (city) => `What ${city} Clients Book Private Hibachi For`,
    occasionSubtext: [
      'Corporate client appreciation dinners',
      'Gold Coast estate birthday celebrations',
      'Lincoln Park graduation backyard parties',
      'River North team milestone events',
      'Holiday executive dinner parties',
      'Anniversary private dining events',
    ],
    faqPill: 'Chicago Event FAQ',
    faqHeadline: (city, abbr) => `Private Hibachi Chef in ${city}, ${abbr} — Common Questions`,
    faqSet: [
      { q: 'Can a private hibachi chef serve a Chicago rooftop, loft, or corporate venue?', a: 'Yes — rooftop terraces, loft event spaces, residential buildings with outdoor areas, and corporate venues across Chicago are all standard service. The chef is fully self-contained with a propane teppan grill — no gas hookup, no permanent kitchen infrastructure required. Note any building or HOA restrictions at booking.' },
      { q: 'What Chicago neighborhoods does your private hibachi chef serve?', a: 'We serve all of Chicago: Gold Coast, Lincoln Park, River North, Fulton Market, West Loop, Wicker Park, Logan Square, Lakeview, Wrigleyville, Lincoln Square, Hyde Park, and every Chicago neighborhood and adjacent suburb.' },
      { q: 'How large a group can you serve in Chicago?', a: 'We serve groups of 8 to 60+ guests. For groups over 25, dual chef stations are recommended so everyone eats at the same time. Note your count at booking and we\'ll configure accordingly.' },
      { q: 'What\'s the pricing for a Chicago private hibachi event?', a: 'Starting at $60 per adult, $30 per child (ages 4–12), $600 event minimum. Premium upgrades — filet mignon, lobster tail, Chilean sea bass, wagyu — available per guest. Corporate packages available for team events over 20.' },
    ],
    testimonialSubheading: 'Chicago Corporate, Estate & Graduation Events',
  },

  // T1 — North Shore Premier
  {
    heroPill: 'North Shore Estate & Lakefront Events',
    experiencePill: 'The North Shore Private Hibachi Experience',
    experiencePoints: [
      'A certified teppanyaki chef arrives at your Lake Michigan estate, North Shore property, or graduation weekend rental with everything included',
      'Premium proteins as the expectation — filet mignon, lobster tail, Chilean sea bass, and wagyu available per guest',
      'Self-contained propane setup: no gas hookup required at any North Shore lakefront property or residential estate',
      'Complete setup in 20 minutes, 90–120 minute live performance, full cleanup — your estate is exactly as it was',
    ],
    experienceImage: '/pics/hibachi-austin-home.jpg',
    experienceImageAlt: (city) => `Estate hibachi dinner in ${city}, Illinois`,
    areasPill: 'North Shore Market',
    areasHeadline: (city) => `We Serve ${city} and the Entire North Shore`,
    areasIntro: [
      (city, state) => `We serve ${city} and the entire North Shore corridor — Lake Forest, Evanston, Winnetka, Highland Park, Glencoe, Kenilworth, Wilmette, Northbrook, and every Lake County community along the Lake Michigan estate belt.`,
      (city) => `Most ${city} estate event quotes are returned same day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton: 'Check Availability',
    occasionPill: 'North Shore Estate Events',
    occasionHeadline: (city) => `What Brings ${city} Hosts to Private Hibachi`,
    occasionSubtext: [
      'Anniversary estate dining events',
      'Northwestern graduation weekend dinners',
      'Executive client appreciation gatherings',
      'Lakefront milestone birthday celebrations',
      'North Shore family milestone events',
      'Holiday intimate estate dinner parties',
    ],
    faqPill: 'North Shore Estate FAQ',
    faqHeadline: (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Common Questions`,
    faqSet: [
      { q: 'Does a private hibachi chef work at a Lake Michigan estate or North Shore lakefront property?', a: 'Yes — Lake Michigan lakefront estates, North Shore residential properties, and graduation weekend vacation rentals are all standard service. The setup is fully self-contained propane — no gas line, no outdoor kitchen needed. Just a flat outdoor area of approximately 10×10 feet and vehicle access to the property.' },
      { q: 'What\'s included in a North Shore estate private hibachi event?', a: 'Your chef arrives with the self-contained propane teppan grill, all proteins (standard and premium), fried rice, vegetables, miso soup, salad, house-made ginger, yum yum, and teriyaki sauces, and all plates and utensils. Setup takes 20–30 minutes. Performance runs 90–120 minutes. Full cleanup when dinner ends.' },
      { q: 'Are premium proteins available at North Shore and Lake Michigan estate events?', a: 'Yes — filet mignon, lobster tail, Chilean sea bass, king shrimp, and wagyu are all available as per-guest upgrades. Most North Shore estate hosts select premium proteins across the full table.' },
      { q: 'How far ahead should I book for a Lake Forest or Evanston graduation or estate event?', a: 'Three to five weeks ahead for North Shore estate events. Northwestern and Lake Forest Academy graduation weekends in June book 5–7 weeks ahead. Same-day quotes are always available — submit your date and address and we respond immediately.' },
    ],
    testimonialSubheading: 'Lake Forest, Evanston & North Shore Estate Events',
  },

  // T2 — North Shore Family
  {
    heroPill: 'North Shore Family & Graduation Events',
    experiencePill: 'The North Shore Family Experience',
    experiencePoints: [
      'A private hibachi chef arrives at your Highland Park, Northbrook, or Barrington backyard — you host without managing the kitchen',
      'Ravinia-season outdoor events, North Shore graduation parties, and family milestones for 8–60+ guests',
      'For graduation parties over 25, dual chef stations keep everyone eating and watching at the same time',
      'No gas hookup required — self-contained propane, setup in 20 minutes on any flat outdoor surface',
    ],
    experienceImage: '/pics/hibachi-dallas-home.jpg',
    experienceImageAlt: (city) => `Hibachi at home in ${city}, Illinois`,
    areasPill: 'North Shore Family Market',
    areasHeadline: (city) => `We Serve ${city} and the North Shore Family Corridor`,
    areasIntro: [
      (city, state) => `We serve ${city} and every North Shore and adjacent suburb — Highland Park, Northbrook, Barrington, Glencoe, Deerfield, Glenview, Wilmette, and every Lake and Cook County community along the North Shore corridor.`,
      (city) => `Most ${city} quotes are confirmed same day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton: 'Check Availability',
    occasionPill: 'North Shore Family Events',
    occasionHeadline: (city) => `What ${city} Families Book Private Hibachi For`,
    occasionSubtext: [
      'High school graduation backyard parties',
      'Ravinia-season outdoor estate events',
      'Milestone birthday family celebrations',
      'Anniversary backyard dinner events',
      'Family reunion summer gatherings',
      'North Shore community milestone events',
    ],
    faqPill: 'Graduation Party FAQ',
    faqHeadline: (city, abbr) => `Hibachi at Home in ${city}, ${abbr} — Common Questions`,
    faqSet: [
      { q: 'When should I book for a Highland Park or North Shore graduation party?', a: 'Four to six weeks ahead for any May or June Saturday. North Shore graduation demand concentrates in mid-May through early June — Highland Park High School, Glenbrook North, and other North Shore commencements all fall within the same 3–4 week window. Book in early April for a May date.' },
      { q: 'How does private hibachi work for a group of 40 in a North Shore backyard?', a: 'The chef needs approximately 10×10 feet of flat outdoor clearance — a typical North Shore backyard patio, lawn, or pool deck works. For 40 guests, dual chef stations are recommended so everyone eats at the same time. Note your count at booking.' },
      { q: 'What\'s on the menu for a North Shore graduation or Ravinia-season party?', a: 'Standard menu: chicken, steak, shrimp, salmon, vegetables, hibachi fried rice, lo mein, miso soup, garden salad, and house-made ginger, yum yum, and teriyaki sauces. Premium upgrades — filet mignon, lobster tail, Chilean sea bass — available per guest.' },
      { q: 'What do I need to provide at my North Shore home?', a: 'A flat outdoor area of 10×10 feet minimum, seating for your guests, and vehicle access to the property. The chef brings everything: the propane grill, all food, all equipment, all utensils, and leaves the space completely clean when dinner ends.' },
    ],
    testimonialSubheading: 'Highland Park, Northbrook & North Shore Family Events',
  },

  // T3 — DuPage & Western Family
  {
    heroPill: 'Backyard & Family Celebrations',
    experiencePill: 'The Western Suburbs Experience',
    experiencePoints: [
      'A private hibachi chef arrives at your Naperville, Wheaton, or Downers Grove backyard — you host without managing the kitchen',
      'DuPage graduation parties, birthday milestones, and family celebrations for 8–60+ guests',
      'For graduation parties of 30–50 guests, dual stations keep everyone eating and watching at the same time',
      'Self-contained propane setup — no gas hookup required at any DuPage County or western suburb property',
    ],
    experienceImage: '/pics/hibachi-photo-2.jpg',
    experienceImageAlt: (city) => `Backyard hibachi party in ${city}, Illinois`,
    areasPill: 'Western Suburbs Market',
    areasHeadline: (city) => `We Serve ${city} and All of the Western Suburbs`,
    areasIntro: [
      (city, state) => `We serve ${city} and every western suburb — Naperville, Wheaton, Downers Grove, Hinsdale, Oak Brook, Glen Ellyn, Lisle, Westmont, Woodridge, Bolingbrook, and every DuPage County and Kane County community.`,
      (city) => `Most ${city} quotes are confirmed same day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton: 'Check Availability',
    occasionPill: 'Western Suburbs Events',
    occasionHeadline: (city) => `What ${city} Families Book Private Hibachi For`,
    occasionSubtext: [
      'High school graduation backyard parties',
      'College graduation family celebrations',
      'Milestone birthday dinner events',
      'Anniversary family backyard events',
      'Summer family reunion gatherings',
      'DuPage County neighborhood milestone events',
    ],
    faqPill: 'DuPage Graduation Party FAQ',
    faqHeadline: (city, abbr) => `Hibachi at Home in ${city}, ${abbr} — Common Questions`,
    faqSet: [
      { q: 'When should I book for a graduation party in Naperville, Wheaton, or Downers Grove?', a: 'Four to six weeks ahead for any May or June Saturday. DuPage County graduation demand peaks simultaneously — Naperville North, Naperville Central, Wheaton Warrenville South, Wheaton North, Downers Grove North, and South all schedule commencements within the same 3–4 week window. Book in early April for a May date.' },
      { q: 'How does private hibachi work for a Naperville or Wheaton graduation party of 40?', a: 'Your chef needs approximately 10×10 feet of flat outdoor clearance — standard in DuPage County backyards. For 40 guests, dual chef stations are recommended. Note your count at booking and we\'ll configure accordingly.' },
      { q: 'What\'s included in a DuPage County graduation or birthday party?', a: 'Standard menu: chicken, steak, shrimp, salmon, vegetables, hibachi fried rice, lo mein, miso soup, garden salad, and house-made sauces. Premium upgrades — filet mignon, lobster tail — available per guest. Full setup and complete cleanup included.' },
      { q: 'Do you serve White Eagle, Ashwood Park, and other Naperville master-planned communities?', a: 'Yes — White Eagle, Ashwood Park, Hobson West, Cress Creek, and every Naperville and DuPage County community and subdivision are within standard service range.' },
    ],
    testimonialSubheading: 'Naperville, Wheaton & DuPage County Graduation Events',
  },

  // T4 — Corporate Corridor
  {
    heroPill: 'Corporate & Executive Events',
    experiencePill: 'The Illinois Corporate Experience',
    experiencePoints: [
      'A certified teppanyaki chef arrives at your Schaumburg or Oak Brook corporate venue or executive home fully self-contained',
      'Fortune 500 team events, client appreciation dinners, and company milestones for groups of 8–60+',
      'For corporate groups over 25, dual stations ensure everyone eats and engages at the same time',
      'Professional format: setup in 20 minutes, 90–120 minute live performance, complete cleanup',
    ],
    experienceImage: '/pics/hibachi-catering-3.jpg',
    experienceImageAlt: (city) => `Corporate hibachi catering event in ${city}, Illinois`,
    areasPill: 'Illinois Corporate Market',
    areasHeadline: (city) => `We Serve ${city} and the Illinois Corporate Corridor`,
    areasIntro: [
      (city, state) => `We serve ${city} and the entire Illinois corporate corridor — Schaumburg, Oak Brook, Rosemont, Itasca, Lisle, Downers Grove, and every business park and corporate campus community across the Chicago metro.`,
      (city) => `Most ${city} corporate event quotes are returned same day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton: 'Check Availability',
    occasionPill: 'Corporate Event Types',
    occasionHeadline: (city) => `What ${city} Companies Book Private Hibachi For`,
    occasionSubtext: [
      'Corporate team appreciation dinners',
      'Client entertainment events',
      'Company anniversary celebrations',
      'Executive team-building dinners',
      'Holiday corporate party events',
      'Department milestone gatherings',
    ],
    faqPill: 'Corporate Event FAQ',
    faqHeadline: (city, abbr) => `Hibachi Catering in ${city}, ${abbr} — Common Questions`,
    faqSet: [
      { q: 'Can you serve a Schaumburg or Oak Brook corporate event at an office or hotel venue?', a: 'Yes — corporate campuses, hotel meeting spaces, rooftop venues, and executive home properties across the Schaumburg and Oak Brook corridors are all standard service. The chef is fully self-contained with a propane grill — no gas hookup, no permanent infrastructure required.' },
      { q: 'What does a corporate hibachi catering event include?', a: 'Your chef arrives with the propane teppan grill, all proteins (standard and premium), fried rice, vegetables, miso soup, salad, house-made sauces, and all plates and utensils. Setup takes 20–30 minutes. The performance runs 90–120 minutes. Full cleanup when dinner ends.' },
      { q: 'How large a corporate group can you serve in the Illinois corridor?', a: 'We serve corporate groups of 8 to 60+. For groups over 25, dual chef stations are recommended. Note your headcount at booking and we\'ll configure accordingly.' },
      { q: 'How far ahead should I book a corporate hibachi event in Schaumburg or Oak Brook?', a: 'Two to four weeks ahead for most corporate events. Holiday season corporate events (November–December) and spring company events book 4–6 weeks ahead. Same-day quotes always available.' },
    ],
    testimonialSubheading: 'Schaumburg, Oak Brook & Illinois Corporate Events',
  },

  // T5 — Downstate University & Regional
  {
    heroPill: 'University Graduation & Regional Events',
    experiencePill: 'The Downstate Illinois Experience',
    experiencePoints: [
      'A certified teppanyaki chef travels to your Champaign, Bloomington, Peoria, or Rockford property fully self-contained',
      'University graduation weekend family dinners — UIUC, ISU, Bradley — format keeps families at the table instead of competing for restaurant reservations',
      'No gas hookup required at any Illinois property — self-contained propane setup works anywhere',
      'Corporate team events for Caterpillar, State Farm, Rivian, and downstate Illinois employers',
    ],
    experienceImage: '/pics/hibachi-raleigh.jpg',
    experienceImageAlt: (city) => `Mobile hibachi chef in ${city}, Illinois`,
    areasPill: 'Downstate Illinois Market',
    areasHeadline: (city) => `We Serve ${city} and All of Central & Downstate Illinois`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of central and downstate Illinois — Champaign-Urbana, Bloomington-Normal, Peoria, Rockford, Springfield, Decatur, and every Illinois community where university graduation weekends and regional family events bring families together.`,
      (city) => `Downstate ${city} quotes are returned same day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton: 'Check Availability',
    occasionPill: 'Downstate Illinois Events',
    occasionHeadline: (city) => `What ${city} Families and Companies Book Private Hibachi For`,
    occasionSubtext: [
      'University graduation weekend family dinners',
      'Corporate team events for major regional employers',
      'Family milestone backyard celebrations',
      'Retirement community milestone dinners',
      'Regional family reunion gatherings',
      'University homecoming and milestone events',
    ],
    faqPill: 'Downstate Event FAQ',
    faqHeadline: (city, abbr) => `Mobile Hibachi Chef in ${city}, ${abbr} — Common Questions`,
    faqSet: [
      { q: 'Does the chef bring their own propane? Do I need a gas hookup at my Champaign or Peoria property?', a: 'The chef brings a fully self-contained propane teppan grill — no gas hookup, no outdoor kitchen required at any Illinois property. Any flat deck, patio, or outdoor surface works.' },
      { q: 'What university graduation markets do you serve in Illinois?', a: 'We serve UIUC graduation weekends in Champaign, ISU and Illinois Wesleyan graduation weekends in Bloomington-Normal, Bradley University graduation weekends in Peoria, and NIU graduation weekends in DeKalb and Rockford.' },
      { q: 'What\'s the pricing for a downstate Illinois hibachi event?', a: 'Starting at $60 per adult, $30 per child (ages 4–12), $600 event minimum. Same pricing applies for all Illinois locations — no surcharge for downstate service.' },
      { q: 'How far ahead should I book for a UIUC or ISU graduation weekend event?', a: 'Five to seven weeks ahead for UIUC May commencement weekend. Four to six weeks for ISU and Bradley graduation weekends. Downstate graduation demand is concentrated and fills from a smaller availability pool than Chicago.' },
    ],
    testimonialSubheading: 'Champaign, Bloomington, Peoria & Downstate Illinois Events',
  },
]

// ─── How It Works ──────────────────────────────────────────────────────────────
const IL_HOW_IT_WORKS = {
  headline:   (city) => `How Private Hibachi Works in ${city}`,
  footerNote: (city) => `Every ${city} event is confirmed with a deposit. Your date is locked as soon as you book — no double-bookings.`,
  steps: [
    { step: '01', title: 'Submit Your Date & Address', desc: 'Give us your Illinois address, event date, and approximate guest count. We respond with a personalized quote the same day — Gold Coast estate, DuPage County backyard, or downstate graduation weekend.' },
    { step: '02', title: 'Confirm Your Menu',          desc: 'Choose proteins — chicken, steak, shrimp, salmon — and add premium upgrades like filet mignon, lobster tail, Chilean sea bass, or wagyu. Everything else is included.' },
    { step: '03', title: 'Lock Your Date',             desc: 'A deposit confirms your event immediately. Your date is reserved — no double-bookings, no last-minute uncertainty.' },
    { step: '04', title: 'Chef Travels to You',        desc: 'Your chef arrives 20–30 minutes before the event with the full self-contained propane teppan grill, all ingredients, and every piece of equipment. No hookup required at any Illinois property.' },
    { step: '05', title: 'Live Fire Performance & Full Cleanup', desc: '90–120 minutes of live teppanyaki — fire tricks, the volcano, flying shrimp, every dish cooked to order. Full cleanup when dinner ends. Your property is left exactly as it was.' },
  ],
}

// ─── Blog Posts (keyed by slot: variant % 3) ──────────────────────────────────
const IL_BLOG_POSTS = [
  [], // Slot 0: T0/T3 — Chicago + DuPage
  [], // Slot 1: T1/T4 — North Shore + Corporate
  [], // Slot 2: T2/T5 — North Shore Family + Downstate
]

// ─── getIlCityData ─────────────────────────────────────────────────────────────
export function getIlCityData(citySlug, cityName) {
  const entry = IL_MAJOR_CITIES[citySlug]
  if (!entry) return null
  const { v, profileIdx, nearby } = entry

  const customMeta = IL_CUSTOM_META[citySlug] || null

  return {
    cityName,
    stateAbbr:   'IL',
    stateName:   'Illinois',
    stateSlug:   'illinois',
    variant:     v % 3,

    heroImage:    IL_THEME_HEROES[v],
    heroSubtitle: IL_HERO_SUBTITLES[v](cityName),
    heroH1Prefix: profileIdx != null ? IL_PROFILE_H1_PREFIXES[profileIdx] : IL_THEME_H1_PREFIXES[v],

    uniqueIntroVariant:   profileIdx != null ? 564 + profileIdx : 558 + v,
    uniqueWhyUsVariant:   v % 3,
    uniqueClosingVariant: profileIdx != null ? 564 + profileIdx : 558 + v,

    ...(customMeta ? { metaTitle: customMeta.title, metaDescription: customMeta.desc } : {}),

    testimonials:      IL_TESTIMONIALS[citySlug] || [],
    nearbyCities:      nearby,
    nearbyMajorCities: ['Chicago', 'Evanston', 'Lake Forest', 'Highland Park', 'Winnetka'],
  }
}

// ─── getIlBlogPosts ────────────────────────────────────────────────────────────
export function getIlBlogPosts(variant, count = 3) {
  return IL_BLOG_POSTS[variant % 3].slice(0, count)
}

// ─── getIlHowItWorks ──────────────────────────────────────────────────────────
export function getIlHowItWorks(citySlug) {
  return IL_HOW_IT_WORKS
}

// ─── getIlSectionVariant ──────────────────────────────────────────────────────
export function getIlSectionVariant(citySlug) {
  const entry = IL_MAJOR_CITIES[citySlug]
  if (!entry) return null
  return IL_SECTION_VARIANTS[entry.v]
}

// ─── getIlCityImage ───────────────────────────────────────────────────────────
export function getIlCityImage(citySlug) {
  return IL_CITY_IMAGE_MAP[citySlug] || null
}

// ─── getIlSupportImages ───────────────────────────────────────────────────────
export function getIlSupportImages(citySlug) {
  return IL_SUPPORT_IMAGES[citySlug] || null
}
