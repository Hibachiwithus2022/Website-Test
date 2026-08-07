// ─── Arizona Data ─────────────────────────────────────────────────────────────
// 18 cities · 6 themes · indices 534-557
// Generic: 534-539 | City-specific: 540-557 (Batch 1: 540-544)

// ─── Theme Heroes ──────────────────────────────────────────────────────────────
const AZ_THEME_HEROES = [
  '/pics/hibachi-private-chef-1.jpg', // T0 — Scottsdale & Paradise Valley Luxury
  '/pics/hibachi-event.jpg',           // T1 — Phoenix Core
  '/pics/hibachi-at-home.jpg',         // T2 — East Valley Tech & Family
  '/pics/backyard-hibachi-3.jpg',      // T3 — West Valley Growth
  '/pics/traveling-hibachi.jpg',       // T4 — Northern AZ Mountain
  '/pics/hibachi-pool-party.jpg',      // T5 — Southern AZ (Tucson)
]

// ─── Theme H1 Prefixes (generic fallback) ──────────────────────────────────────
const AZ_THEME_H1_PREFIXES = [
  'Hibachi at Home in',          // T0
  'Private Hibachi Chef in',     // T1
  'Hibachi at Home in',          // T2
  'Hibachi at Home in',          // T3
  'Mobile Hibachi Chef in',      // T4
  'Private Hibachi Chef in',     // T5
]

// ─── Profile H1 Prefixes (city-specific, 18 entries) ──────────────────────────
const AZ_PROFILE_H1_PREFIXES = [
  'Private Hibachi Chef in',  // 0  — Scottsdale
  'Hibachi at Home in',       // 1  — Paradise Valley
  'Private Hibachi Chef in',  // 2  — Phoenix
  'Hibachi at Home in',       // 3  — Tempe
  'Hibachi Catering in',      // 4  — Fountain Hills
  'Hibachi Catering in',      // 5  — Chandler
  'Hibachi at Home in',       // 6  — Gilbert
  'Hibachi at Home in',       // 7  — Mesa
  'Backyard Hibachi in',      // 8  — Queen Creek
  'Hibachi at Home in',       // 9  — Peoria
  'Hibachi Catering in',      // 10 — Glendale
  'Hibachi at Home in',       // 11 — Surprise
  'Mobile Hibachi in',        // 12 — Goodyear
  'Private Hibachi Chef in',  // 13 — Tucson
  'Hibachi at Home in',       // 14 — Oro Valley
  'Mobile Hibachi in',        // 15 — Sedona
  'Mobile Hibachi in',        // 16 — Flagstaff
  'Backyard Hibachi in',      // 17 — Prescott
]

// ─── Custom Meta (Batch 1 — 5 cities) ──────────────────────────────────────────
const AZ_CUSTOM_META = {
  'scottsdale':      { title: 'Private Hibachi Chef in Scottsdale, AZ | Old Town Bachelorette Weekends, DC Ranch Estate Dinners & Troon North Golf Retreats', desc: 'A certified teppanyaki chef travels to your Scottsdale vacation rental, DC Ranch estate, or Kierland Commons-area property — Old Town bachelorette parties, bachelor weekends, golf community dinners. From $60/adult.' },
  'paradise-valley': { title: 'Hibachi at Home in Paradise Valley, AZ | Camelback Mountain Estate Dinners, Mountain Shadows Events & Milestone Celebrations', desc: 'Private hibachi at your Paradise Valley estate — Camelback Mountain, Mountain Shadows, Sanctuary Camelback, Mummy Mountain. Anniversary dinners, milestone birthdays, executive gatherings. From $60/adult.' },
  'phoenix':         { title: 'Private Hibachi Chef in Phoenix, AZ | Arcadia, Biltmore, Desert Ridge & Downtown Corporate Events', desc: 'A certified teppanyaki chef travels to your Phoenix property — Arcadia backyard dinners, Biltmore estate events, Desert Ridge graduation parties, downtown Phoenix corporate team dinners. From $60/adult.' },
  'tempe':           { title: 'Hibachi at Home in Tempe, AZ | ASU Graduation Parties, Tempe Town Lake Celebrations & Backyard Milestones', desc: 'ASU graduation backyard parties, Tempe Town Lake-adjacent events, and home celebrations — a private hibachi chef arrives at your Tempe property with everything included. From $60/adult.' },
  'fountain-hills':  { title: 'Hibachi Catering in Fountain Hills, AZ | Firerock, Eagle Mountain & Fountain Park Estate Events', desc: 'Private hibachi at your Fountain Hills home — Firerock Country Club, Eagle Mountain Golf Club, and Fountain Park-area estate events. Milestone birthdays, anniversaries, retirement celebrations. From $60/adult.' },
}

// ─── City Image Map (experience image — overrides section variant for Batch 1) ─
const AZ_CITY_IMAGE_MAP = {
  'scottsdale':      { src: '/pics/hibachi-chef-2.jpg',       alt: (city) => `Private hibachi chef event in ${city}, Arizona` },
  'paradise-valley': { src: '/pics/hibachi-austin-home.jpg',  alt: (city) => `Estate hibachi dinner in ${city}, AZ` },
  'phoenix':         { src: '/pics/hibachi-photo-1.jpg',       alt: (city) => `Private hibachi chef in ${city}, Arizona` },
  'tempe':           { src: '/pics/hibachi-photo-2.jpg',       alt: (city) => `Hibachi at home in ${city}, AZ` },
  'fountain-hills':  { src: '/pics/hibachi-dallas-home.jpg',  alt: (city) => `Hibachi catering in ${city}, Arizona` },
}

// ─── Support Images (testimonial + CTA per city — Batch 1) ────────────────────
const AZ_SUPPORT_IMAGES = {
  'scottsdale':      { testimonial: { src: '/pics/hibachi-shot-2.jpg',       alt: (c) => `Private hibachi event in ${c}`,      caption: 'Scottsdale Estate & Bachelorette Events',    trustBadge: '5.0★ · Old Town & DC Ranch Trusted'      }, cta: { src: '/pics/hibachi-pic-2.jpg',        alt: (c) => `Book your ${c} hibachi event`,     caption: 'Same-day quotes · From $60/adult'       } },
  'paradise-valley': { testimonial: { src: '/pics/hibachi-catering-3.jpg',   alt: (c) => `Estate hibachi dinner in ${c}`,      caption: 'Paradise Valley Estate Events',              trustBadge: '5.0★ · Camelback Mountain Trusted'       }, cta: { src: '/pics/private-party-chef-6.jpg', alt: (c) => `Reserve your ${c} hibachi event`,  caption: 'Premium proteins · Full setup included' } },
  'phoenix':         { testimonial: { src: '/pics/hibachi-shot-1.jpg',        alt: (c) => `Private hibachi chef in ${c}`,       caption: 'Phoenix Corporate & Home Events',            trustBadge: '4.9★ · 200+ Phoenix Events'               }, cta: { src: '/pics/hibachi-colorado.jpg',     alt: (c) => `Book your ${c} hibachi event`,     caption: 'Corporate packages · From $60/adult'    } },
  'tempe':           { testimonial: { src: '/pics/hibachi-catering.jpg',      alt: (c) => `Hibachi graduation party in ${c}`,  caption: 'Tempe ASU Graduation & Home Events',         trustBadge: '4.9★ · ASU Graduation Season'             }, cta: { src: '/pics/mobile-hibachi-2.jpg',     alt: (c) => `Book your ${c} graduation party`,  caption: 'ASU graduation season · From $60/adult'} },
  'fountain-hills':  { testimonial: { src: '/pics/hibachi-pic-3.jpg',         alt: (c) => `Hibachi estate event in ${c}`,      caption: 'Fountain Hills Estate & Golf Community',     trustBadge: '5.0★ · Firerock & Eagle Mountain'        }, cta: { src: '/pics/backyard-hibachi.jpg',     alt: (c) => `Reserve your ${c} hibachi event`,  caption: 'From $60/adult · Same-day quotes'       } },
}

// ─── Major Cities Map (all 18) ─────────────────────────────────────────────────
const AZ_MAJOR_CITIES = {
  // ── Batch 1: Scottsdale/PV Luxury + Phoenix Core + East Valley ─────────────
  'scottsdale':      { v: 0, profileIdx: 0,  nearby: ['Paradise Valley', 'Phoenix', 'Tempe', 'Fountain Hills'] },
  'paradise-valley': { v: 0, profileIdx: 1,  nearby: ['Scottsdale', 'Phoenix', 'Tempe', 'Fountain Hills'] },
  'phoenix':         { v: 1, profileIdx: 2,  nearby: ['Scottsdale', 'Paradise Valley', 'Tempe', 'Fountain Hills'] },
  'tempe':           { v: 2, profileIdx: 3,  nearby: ['Phoenix', 'Scottsdale', 'Paradise Valley', 'Fountain Hills'] },
  'fountain-hills':  { v: 2, profileIdx: 4,  nearby: ['Scottsdale', 'Paradise Valley', 'Phoenix', 'Tempe'] },
  // ── Batch 2: East Valley Tech & Family ────────────────────────────────────
  'chandler':        { v: 2, profileIdx: 5,  nearby: ['Tempe', 'Gilbert', 'Mesa', 'Queen Creek'] },
  'gilbert':         { v: 2, profileIdx: 6,  nearby: ['Chandler', 'Tempe', 'Mesa', 'Queen Creek'] },
  'mesa':            { v: 2, profileIdx: 7,  nearby: ['Tempe', 'Chandler', 'Gilbert', 'Fountain Hills'] },
  'queen-creek':     { v: 2, profileIdx: 8,  nearby: ['Gilbert', 'Chandler', 'Mesa'] },
  // ── Batch 3: West Valley Growth ───────────────────────────────────────────
  'peoria':          { v: 3, profileIdx: 9,  nearby: ['Glendale', 'Surprise', 'Phoenix', 'Goodyear'] },
  'glendale':        { v: 3, profileIdx: 10, nearby: ['Peoria', 'Surprise', 'Phoenix', 'Goodyear'] },
  'surprise':        { v: 3, profileIdx: 11, nearby: ['Peoria', 'Glendale', 'Goodyear', 'Phoenix'] },
  'goodyear':        { v: 3, profileIdx: 12, nearby: ['Surprise', 'Glendale', 'Peoria', 'Phoenix'] },
  // ── Batch 4: Tucson + Northern AZ Mountain ────────────────────────────────
  'tucson':          { v: 5, profileIdx: 13, nearby: ['Oro Valley'] },
  'oro-valley':      { v: 5, profileIdx: 14, nearby: ['Tucson'] },
  'sedona':          { v: 4, profileIdx: 15, nearby: ['Flagstaff', 'Prescott'] },
  'flagstaff':       { v: 4, profileIdx: 16, nearby: ['Sedona', 'Prescott'] },
  'prescott':        { v: 4, profileIdx: 17, nearby: ['Sedona', 'Flagstaff'] },
}

// ─── Hero Subtitles (per theme) ────────────────────────────────────────────────
const AZ_HERO_SUBTITLES = [
  (city) => `Estate Private Dining · Premium Proteins · Full Setup & Cleanup · Serving ${city}`,
  (city) => `Corporate Events · Home Celebrations · Live Teppanyaki · Serving All of ${city}`,
  (city) => `Graduation Parties · Backyard Milestones · Private Chef · Serving ${city} & Surrounding Areas`,
  (city) => `Home Celebrations · Family Events · Live Fire Teppanyaki · Serving ${city}`,
  (city) => `Mountain Cabin & Destination Events · No Hookup Required · Serving ${city}`,
  (city) => `University Graduation Season · Estate Celebrations · Live Teppanyaki · Serving ${city}`,
]

// ─── Generic Intro Variants (T0–T5, indices 534–539) ──────────────────────────
export const AZ_INTRO_VARIANTS = [
  // 534 — T0 Scottsdale & Paradise Valley Luxury
  {
    headline: (city) => `Hibachi at Home in ${city}: Arizona's Premier Estate Private Dining Experience`,
    opening:  (city, state) => `${city} is where private dining belongs — at the property, not at the restaurant. A certified teppanyaki chef arrives at your estate with a fully self-contained propane teppan grill, hand-selected proteins, and a live cooking performance that transforms your terrace or courtyard into the finest private dining room in the Valley. Old Town bachelorette weekends, golf community anniversary dinners, estate birthday milestones — the format works for every occasion that matters most in ${city}.`,
    middle:   (city, state) => `Your chef brings everything: the grill, propane, premium proteins including filet mignon and lobster tail, hibachi fried rice, vegetables, house-made sauces, plates, and chopsticks. The live teppanyaki performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, precision knife work, every dish cooked to order. Full cleanup when dinner ends. Your property is exactly as it was.`,
    closing:  (city, state) => `${city} estate dates and bachelorette weekends book 3–5 weeks ahead in peak season — submit your date now for a same-day quote.`,
  },
  // 535 — T1 Phoenix Core
  {
    headline: (city) => `Private Hibachi Chef in ${city}: Corporate Events and Home Celebrations Across the Valley`,
    opening:  (city, state) => `From Arcadia backyard anniversary dinners to Desert Ridge corporate team events, from Biltmore estate milestone celebrations to downtown graduation parties — a certified teppanyaki chef who travels to your ${city} property with a fully self-contained setup and delivers the live-fire performance your group has been anticipating. ${city} is the Valley's largest market, and private hibachi is the format that makes every occasion feel like it was designed for exactly that property.`,
    middle:   (city, state) => `The chef arrives with the propane teppan grill, all proteins, fresh ingredients, house-made sauces, and every piece of equipment needed. For groups over 25, dual chef stations ensure everyone eats at the same time. Complete setup in 20–30 minutes, live performance for 90–120 minutes, full cleanup when dinner ends.`,
    closing:  (city, state) => `Same-day quotes for any ${city} neighborhood or venue — submit your date and address now.`,
  },
  // 536 — T2 East Valley Tech & Family
  {
    headline: (city) => `Hibachi at Home in ${city}: Graduation Parties and East Valley Backyard Celebrations`,
    opening:  (city, state) => `${city} graduation parties, birthday milestones, and family celebrations — a private hibachi chef who arrives at your backyard with everything needed so you're actually present at the event you planned. No restaurant logistics, no driving after the ceremony, no splitting the group across tables. Your patio or backyard becomes the venue, the chef becomes the entertainment, and the evening becomes the memory.`,
    middle:   (city, state) => `Your chef brings the self-contained propane grill, all proteins, fried rice, vegetables, miso soup, salad, house-made sauces, plates, and chopsticks. Every dish cooked to order in front of your guests. For graduation parties of 30–50, dual stations keep everyone eating at the same time. Complete setup and full cleanup included.`,
    closing:  (city, state) => `East Valley graduation Saturdays in May and June book 4–6 weeks ahead — submit your date now for a same-day quote.`,
  },
  // 537 — T3 West Valley Growth
  {
    headline: (city) => `Private Hibachi Chef in ${city}: Backyard Celebrations and West Valley Family Events`,
    opening:  (city, state) => `${city} backyard birthday parties, family milestone dinners, and neighborhood celebrations — a certified teppanyaki chef travels to your West Valley property with the full live-fire setup and puts on the performance your guests will be talking about long after the last plate. The West Valley's residential lots and outdoor entertaining culture are exactly what private hibachi was built for.`,
    middle:   (city, state) => `The chef arrives fully self-contained with a propane teppan grill, all proteins, complete ingredients, and every piece of equipment. No gas hookup required at any West Valley property. Single station for up to 25 guests, dual stations for larger events. Complete setup, 90–120 minute live performance, full cleanup.`,
    closing:  (city, state) => `Most ${city} quotes are returned same day — submit your date and address and we respond immediately.`,
  },
  // 538 — T4 Northern AZ Mountain
  {
    headline: (city) => `Private Hibachi at Your ${city} Rental: Mountain Destination Events with No Hookup Required`,
    opening:  (city, state) => `Your Sedona red-rock rental, your Flagstaff mountain cabin, your Prescott ponderosa property — a certified teppanyaki chef arrives at your ${city} vacation home with a fully self-contained propane teppan grill, all proteins, and the complete live-fire setup. No gas hookup. No outdoor kitchen. The performance happens on your deck, in the setting that brought your group here. Bachelorette weekends, family destination trips, and anniversary getaways all on the same fully self-contained chef.`,
    middle:   (city, state) => `The chef arrives 20–30 minutes before the performance, sets up on any flat outdoor surface, and performs for 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, precision knife work, and every dish cooked to order. Premium proteins including filet mignon, lobster tail, and wagyu available for every mountain event.`,
    closing:  (city, state) => `Peak season ${city} dates book 4–8 weeks ahead — reserve the chef when you confirm the rental.`,
  },
  // 539 — T5 Southern AZ (Tucson)
  {
    headline: (city) => `Private Hibachi Chef in ${city}: UA Graduation Parties, Catalina Foothills Estate Dinners & Home Events`,
    opening:  (city, state) => `University of Arizona graduation weekend, Catalina Foothills estate anniversary dinners, Oro Valley milestone birthday celebrations, and Tucson home events — a certified teppanyaki chef arrives at your ${city} property with the full live-fire setup. ${city} is Arizona's second city and the state's premier university market: a genuine community of residential properties and entertaining culture that private hibachi was built for.`,
    middle:   (city, state) => `The chef brings a fully self-contained propane teppan grill, all proteins including premium upgrades, all ingredients, and complete equipment. No gas hookup required at any ${city} property. Live performance for 90–120 minutes, complete cleanup when dinner ends.`,
    closing:  (city, state) => `UA graduation weekends in May book 4–6 weeks ahead — if you have a commencement date, reserve now.`,
  },
]

// ─── Generic Closing Variants (T0–T5, indices 534–539) ────────────────────────
export const AZ_CLOSING_VARIANTS = [
  // 534 — T0
  { headline: (city) => `Book Your ${city} Estate Event`, sub: (city) => `Most ${city} quotes are returned the same day. Confirm with a deposit — your date is locked immediately.`, urgency: 'Scottsdale and Paradise Valley estate dates fill 3–5 weeks ahead in peak season. Reserve yours now.', cta: { label: 'Reserve Your Date', caption: 'Full setup included · From $60/adult' } },
  // 535 — T1
  { headline: (city) => `Book Your ${city} Hibachi Event`, sub: (city) => `Corporate team dinners, home celebrations, and graduation parties in ${city} — submit your date and address for a same-day quote.`, urgency: 'Phoenix holiday corporate season and peak graduation dates fill fast. Lock your date with a deposit.', cta: { label: 'Request a Quote', caption: 'Same-day quotes · Events from $60/adult' } },
  // 536 — T2
  { headline: (city) => `Book Your ${city} Backyard Event`, sub: (city) => `Graduation Saturdays, birthday parties, and family milestones in ${city} — get a same-day quote for your backyard date.`, urgency: 'East Valley graduation dates in May and June fill 4–6 weeks ahead. Submit your date now.', cta: { label: 'Book Your Date', caption: 'From $60/adult · Graduation season books fast' } },
  // 537 — T3
  { headline: (city) => `Book Your ${city} Hibachi Event`, sub: (city) => `Backyard celebrations, family milestones, and graduation parties in ${city} — same-day quotes, deposit locks your date immediately.`, urgency: 'West Valley spring and summer dates fill fast. Reserve your date now with a deposit.', cta: { label: 'Request Your Quote', caption: 'From $60/adult · No surprises at booking' } },
  // 538 — T4
  { headline: (city) => `Book Your ${city} Mountain Hibachi Event`, sub: (city) => `Sedona red-rock rentals, Flagstaff cabin weekends, Prescott ponderosa events — a fully self-contained chef arrives at your ${city} property with everything needed.`, urgency: 'Peak Sedona and Flagstaff vacation rental dates book 4–8 weeks ahead. Reserve your rental date now.', cta: { label: 'Reserve Your Mountain Date', caption: 'From $60/adult · No hookup required' } },
  // 539 — T5
  { headline: (city) => `Book Your ${city} Hibachi Event`, sub: (city) => `UA graduation weekend, Catalina Foothills estate dinner, or Tucson home celebration — a same-day quote for any ${city} date.`, urgency: 'UA graduation weekends in May book 4–6 weeks ahead. If you have a commencement date, reserve it now.', cta: { label: 'Get a Same-Day Quote', caption: 'From $60/adult · Graduation season fills fast' } },
]

// ─── City-Specific Intros (Batch 1 — 5 entries, indices 540–544) ──────────────
export const AZ_CITY_INTROS = [
  // 540 — Scottsdale
  {
    headline: (city, state) => `Private Hibachi Chef in Scottsdale: Old Town, DC Ranch, Kierland Commons, and the North Scottsdale Corridor`,
    opening:  (city, state) => `Old Town Scottsdale bachelorette weekends, DC Ranch estate anniversary dinners, Silverleaf milestone birthday celebrations, and Kierland Commons-area golf retreat team dinners — a certified teppanyaki chef travels to your Scottsdale property with a fully self-contained propane teppan grill and puts on the live-fire performance your group has been anticipating. Scottsdale is Arizona's premier private dining market, and private hibachi is the format that its vacation rentals, luxury estates, and golf communities were built for.`,
    middle:   (city, state) => `Your chef brings the propane grill, all proteins including filet mignon and lobster tail, fried rice, vegetables, house-made sauces, and complete equipment. No gas hookup required at any Scottsdale vacation rental or residential property. Single station for up to 25 guests, dual stations for larger bachelorette and bachelor groups. Complete setup, 90–120 minute live performance, full cleanup.`,
    closing:  (city, state) => `Scottsdale Old Town bachelorette weekends and DC Ranch estate dates book 4–6 weeks ahead in peak season — submit your date now for a same-day quote.`,
  },
  // 541 — Paradise Valley
  {
    headline: (city, state) => `Hibachi at Home in Paradise Valley: Camelback Mountain Estate Dinners, Mountain Shadows Events & Milestone Celebrations`,
    opening:  (city, state) => `Your Paradise Valley estate — Camelback Mountain corridor, Mummy Mountain, Mountain Shadows, Sanctuary Camelback, Paradise Valley Country Club — was built for evenings like this. A certified teppanyaki chef arrives at your property with the full live-fire setup, premium proteins as standard, and a performance that transforms your outdoor terrace or courtyard into the finest private dining room in the Valley. No restaurant reservation can replicate what your Paradise Valley property already is.`,
    middle:   (city, state) => `The chef brings a fully self-contained propane teppan grill, filet mignon and lobster tail across the whole table if you want it, fried rice, vegetables, house-made sauces, and complete equipment. Setup in 20–30 minutes. Live performance for 90–120 minutes. Full cleanup when dinner ends — your estate is exactly as it was.`,
    closing:  (city, state) => `Paradise Valley estate dates fill 3–5 weeks ahead in summer and holiday season — submit your date for a same-day quote.`,
  },
  // 542 — Phoenix
  {
    headline: (city, state) => `Private Hibachi Chef in Phoenix: Arcadia, Biltmore, Desert Ridge, Ahwatukee, and Downtown Corporate Events`,
    opening:  (city, state) => `From Arcadia backyard anniversary dinners to Biltmore estate milestone events, from Desert Ridge graduation parties to downtown Phoenix corporate team dinners near Chase Field and Footprint Center — a certified teppanyaki chef travels to your Phoenix property with a fully self-contained propane teppan grill and performs for any size group. Phoenix is the Valley's core, and Roosevelt Row creatives, Ahwatukee families, and Biltmore executives have all found the same format: private hibachi at home beats any restaurant for the occasions that matter most.`,
    middle:   (city, state) => `The chef brings the propane teppan grill, all proteins, complete ingredients, and equipment. No gas hookup required. For corporate groups and graduation parties over 25, dual stations ensure everyone eats at the same time. Complete setup, 90–120 minute live performance, full cleanup.`,
    closing:  (city, state) => `Same-day quotes for any Phoenix neighborhood — submit your date and address and we respond immediately.`,
  },
  // 543 — Tempe
  {
    headline: (city, state) => `Hibachi at Home in Tempe: ASU Graduation Parties, Tempe Town Lake Celebrations & Mill Avenue Events`,
    opening:  (city, state) => `ASU graduation backyard parties, Tempe Town Lake-area home celebrations, and milestone events in the city that anchors the East Valley — a private hibachi chef arrives at your Tempe property with everything needed so you're actually present at the event your family planned. Mill Avenue, University Drive, the Intel Ocotillo-adjacent communities — Tempe is a city where the occasions that matter happen at home, and private hibachi is the format that makes those evenings unforgettable.`,
    middle:   (city, state) => `Your chef brings the propane teppan grill, all proteins including premium upgrades, fried rice, vegetables, miso soup, salad, house-made sauces, and complete equipment. For ASU graduation parties of 30–50 guests, dual stations keep everyone eating at the same time. Setup in 20–30 minutes, full performance, complete cleanup.`,
    closing:  (city, state) => `ASU graduation Saturdays in May book 4–6 weeks ahead — submit your commencement date now to reserve.`,
  },
  // 544 — Fountain Hills
  {
    headline: (city, state) => `Hibachi Catering in Fountain Hills: Firerock, Eagle Mountain, Four Peaks & Fountain Park Estate Events`,
    opening:  (city, state) => `Firerock Country Club-area estate dinners, Eagle Mountain Golf Club milestone celebrations, Four Peaks Golf Club retirement parties, and Fountain Park-adjacent milestone events — a private hibachi chef arrives at your Fountain Hills property with a fully self-contained propane setup and delivers the live-fire performance that makes an already-beautiful setting extraordinary. Fountain Hills is a community built around milestone entertaining, and private hibachi is the format that its large-lot residential properties were designed for.`,
    middle:   (city, state) => `The chef brings the propane teppan grill, all proteins, fried rice, vegetables, house-made sauces, and complete equipment. No gas hookup required at any Fountain Hills property. Premium upgrades — filet mignon, lobster tail, Chilean sea bass — available per guest. Setup in 20–30 minutes, live performance for 90–120 minutes, full cleanup.`,
    closing:  (city, state) => `Fountain Hills estate dates book 3–4 weeks ahead — submit your date and address for a same-day quote.`,
  },
]

// ─── City-Specific Closings (Batch 1 — 5 entries, indices 540–544) ────────────
export const AZ_CITY_CLOSINGS = [
  // 540 — Scottsdale
  { headline: (city) => `Book Your Scottsdale Private Hibachi Event`, sub: (city) => `Old Town bachelorette weekends, DC Ranch estate dinners, Troon North golf retreats — submit your date and address for a same-day Scottsdale quote.`, urgency: 'Scottsdale Old Town peak weekends and DC Ranch estate dates fill 4–6 weeks ahead. Reserve now.', cta: { label: 'Reserve Your Scottsdale Date', caption: 'Full setup included · From $60/adult' } },
  // 541 — Paradise Valley
  { headline: (city) => `Book Your Paradise Valley Estate Event`, sub: (city) => `Camelback Mountain, Mountain Shadows, Sanctuary Camelback — most Paradise Valley quotes are returned same day. Deposit locks your date immediately.`, urgency: 'Paradise Valley estate dates fill 3–5 weeks ahead in summer and holiday season. Reserve yours now.', cta: { label: 'Reserve Your Estate Date', caption: 'Premium proteins · Full setup included' } },
  // 542 — Phoenix
  { headline: (city) => `Book Your Phoenix Hibachi Event`, sub: (city) => `Arcadia, Biltmore, Desert Ridge, Ahwatukee, downtown Phoenix — submit your address and date for a same-day quote on any Phoenix neighborhood event.`, urgency: 'Phoenix holiday corporate season and May/June graduation dates fill fast. Lock your date with a deposit.', cta: { label: 'Request a Phoenix Quote', caption: 'Same-day quotes · Events from $60/adult' } },
  // 543 — Tempe
  { headline: (city) => `Book Your Tempe Hibachi Event`, sub: (city) => `ASU graduation parties, Tempe Town Lake-area celebrations, and home milestones — same-day quotes for any Tempe date.`, urgency: 'ASU graduation Saturdays in May fill 4–6 weeks ahead. If you have a commencement date, reserve the chef now.', cta: { label: 'Book Your Tempe Date', caption: 'From $60/adult · ASU season books fast' } },
  // 544 — Fountain Hills
  { headline: (city) => `Book Your Fountain Hills Estate Event`, sub: (city) => `Firerock, Eagle Mountain, Four Peaks — submit your address and event date for a same-day Fountain Hills quote.`, urgency: 'Fountain Hills estate and golf community dates fill 3–4 weeks ahead. Reserve yours now.', cta: { label: 'Reserve Your Fountain Hills Date', caption: 'From $60/adult · Same-day quotes' } },
]

// ─── Testimonials (3 per Batch 1 city) ────────────────────────────────────────
const AZ_TESTIMONIALS = {
  'scottsdale': [
    { name: 'Kayla M.', text: 'Bachelorette weekend at our Old Town Scottsdale vacation rental — 16 women, Saturday evening on the rooftop terrace. The chef arrived fully self-contained, performed for two hours, and it became the event the entire trip was centered around. Fire tricks, flying shrimp, lobster tail upgrade for the whole group. Book way ahead for Old Town peak weekends.', location: 'Scottsdale, AZ', rating: 5, event: 'Bachelorette Weekend' },
    { name: 'Ryan T.', text: 'Corporate golf retreat team dinner at our Troon North-area property — 22 guests. We wanted something that felt like a genuine event rather than another catered box. The chef delivered exactly that: professional, engaging, and the food quality was genuinely impressive. Dual stations for the larger group, everyone ate at the same time.', location: 'Scottsdale, AZ', rating: 5, event: 'Corporate Golf Retreat Dinner' },
    { name: 'Lauren A.', text: 'Anniversary dinner at our DC Ranch property — 14 guests. We\'d been to restaurants in North Scottsdale and nothing matched what we were looking for. Private hibachi at home was the answer. The chef set up on our backyard terrace, performed for the group, and left everything spotless. Premium proteins across the board.', location: 'Scottsdale, AZ', rating: 5, event: 'Anniversary Estate Dinner' },
  ],
  'paradise-valley': [
    { name: 'Victoria H.', text: 'Anniversary dinner at our Camelback Mountain-area estate — 12 guests. We specifically wanted something that matched the caliber of the property, not a restaurant that happened to be nearby. The chef arrived at our home, set up on the outdoor terrace with mountain views as the backdrop, and gave us an evening that the setting deserved. Wagyu and lobster tail across the table. Exceptional.', location: 'Paradise Valley, AZ', rating: 5, event: 'Anniversary Estate Dinner' },
    { name: 'Michael B.', text: 'Milestone birthday at our Mountain Shadows-area property — 20 guests. Executive guests who\'ve attended events all over the country and the feedback was unanimous: this was the best dinner format any of them had experienced at a private home. The chef was flawless, the performance was full, and the cleanup was complete.', location: 'Paradise Valley, AZ', rating: 5, event: 'Milestone Birthday Celebration' },
    { name: 'Susan W.', text: 'Family holiday gathering at our Sanctuary Camelback-adjacent home — 18 guests. We wanted something that kept the family together at the table rather than scattered at a restaurant. Private hibachi solved everything: one setting, one performance, every generation engaged simultaneously. The fire tricks had the grandchildren going wild.', location: 'Paradise Valley, AZ', rating: 5, event: 'Family Holiday Gathering' },
  ],
  'phoenix': [
    { name: 'David R.', text: 'Corporate team dinner at our Biltmore-area property — 28 guests. Tech company team based in the Valley, and we wanted something genuinely memorable rather than another restaurant group reservation. The chef turned our backyard into a performance venue. Dual stations for the larger group, everyone ate at the same time, and we got more engagement and conversation out of the team than any conference-room event we\'ve done.', location: 'Phoenix, AZ', rating: 5, event: 'Corporate Team Dinner' },
    { name: 'Jessica L.', text: 'Arcadia graduation party for 36 family members. Our neighborhood backyard was perfect for the setup. The chef handled the full group with ease, ran dual stations, and the performance had kids and parents equally amazed. The filet mignon upgrade for our graduate was absolutely worth it. We\'re already planning the same format for next graduation.', location: 'Phoenix, AZ', rating: 5, event: 'Graduation Party' },
    { name: 'Carlos M.', text: 'Birthday celebration in our Desert Ridge-area home — 24 guests. Phoenix summers are intense but the evening setup after 6 PM was perfect. Chef arrived on time, fully self-contained, performed for two hours, left everything clean. The hibachi format keeps everyone together at one table — that\'s what made it special.', location: 'Phoenix, AZ', rating: 5, event: 'Birthday Celebration' },
  ],
  'tempe': [
    { name: 'Megan P.', text: 'ASU graduation party in our Tempe backyard — 42 family members. We\'d been looking for something that wasn\'t a restaurant group reservation and this was the answer. Chef arrived, set up dual stations in our backyard, and performed for two and a half hours. Multiple dietary restrictions handled without any issues. Every age from 4 to 78 was engaged the entire time.', location: 'Tempe, AZ', rating: 5, event: 'ASU Graduation Party' },
    { name: 'Trevor A.', text: 'Birthday dinner for 20 guests near Tempe Town Lake. Our outdoor patio had exactly the space needed and the chef used it perfectly. Fire tricks, the volcano, flying shrimp — it was genuinely impressive entertainment on top of great food. The group talked about it for weeks after.', location: 'Tempe, AZ', rating: 5, event: 'Birthday Celebration' },
    { name: 'Amanda N.', text: 'Department team dinner for Intel at our Chandler-adjacent Tempe property — 18 people. The tech corridor near Tempe is exactly the kind of corporate community that appreciates a genuine experience over a restaurant group menu. The chef was professional and personable, and the performance was the best team-building event our department has done.', location: 'Tempe, AZ', rating: 5, event: 'Corporate Team Dinner' },
  ],
  'fountain-hills': [
    { name: 'Richard G.', text: 'Retirement celebration at our Firerock Country Club-area home — 30 guests. My wife planned this for my retirement and it was exactly right: a genuine milestone evening at the property we\'ve entertained at for twenty years, with a format that kept every guest at the same table for the entire evening. Filet mignon and lobster tail upgrade across the board. It was the finest private dinner we\'ve hosted.', location: 'Fountain Hills, AZ', rating: 5, event: 'Retirement Celebration Dinner' },
    { name: 'Linda S.', text: 'Anniversary dinner at our Eagle Mountain Golf Club home — 16 guests. We chose Fountain Hills specifically because we wanted the event at home, not at a restaurant. The chef set up on our patio with the golf course as the backdrop, performed for 90 minutes, and left everything spotless. Premium proteins, impeccable service. We\'re already planning the same format for the next milestone.', location: 'Fountain Hills, AZ', rating: 5, event: 'Anniversary Estate Dinner' },
    { name: 'Tom H.', text: 'Milestone birthday at our Fountain Park-area property — 22 guests. Fountain Hills is a community where people know how to host, and this chef matched that standard. Professional from arrival to cleanup, genuinely talented at the performance, and the filet mignon upgrade made it feel like a special occasion rather than just a backyard dinner. Outstanding.', location: 'Fountain Hills, AZ', rating: 5, event: 'Milestone Birthday Celebration' },
  ],
}

// ─── Section Variants (6 themes) ───────────────────────────────────────────────
const AZ_SECTION_VARIANTS = [
  // T0 — Scottsdale & Paradise Valley Luxury
  {
    heroPill: 'Luxury Estate & Resort Dining',
    experiencePill: 'The Scottsdale & Paradise Valley Experience',
    experiencePoints: [
      'A certified teppanyaki chef arrives at your estate or vacation rental with a propane grill — no gas hookup required',
      'Full performance: fire tricks, flying shrimp, knife work, every guest served at the table',
      'Premium proteins by default — filet mignon, Chilean sea bass, lobster tail, and wagyu available',
      'Complete setup and full cleanup — your estate or rental property is exactly as it was when the chef leaves',
    ],
    experienceImage: '/pics/hibachi-chef-2.jpg',
    experienceImageAlt: (city) => `Estate hibachi dinner in ${city}, Arizona`,
    areasPill: 'Scottsdale & Paradise Valley Market',
    areasHeadline: (city) => `We Serve ${city} and All of Greater Scottsdale`,
    areasIntro: [
      (city, state) => `We serve ${city} and the entire North Scottsdale and Paradise Valley corridor — Old Town vacation rentals, DC Ranch estates, Silverleaf properties, Kierland Commons-area homes, McCormick Ranch, Gainey Ranch, Troon North, and every luxury community in the Valley's premier entertainment market.`,
      (city) => `Most ${city} quotes are confirmed same day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton: 'Check Availability',
    occasionPill: 'Scottsdale & PV Estate Events',
    occasionHeadline: (city) => `What Brings ${city} Hosts to Private Hibachi`,
    occasionSubtext: [
      'Bachelor and bachelorette weekend dinners',
      'Anniversary and milestone estate events',
      'Corporate golf retreat team dinners',
      'Small holiday dinner parties',
      'Executive client appreciation gatherings',
      'Intimate celebration dinners',
    ],
    faqPill: 'Luxury Event FAQ',
    faqHeadline: (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Common Questions`,
    faqSet: [
      { q: 'What does a private hibachi event at a Scottsdale vacation rental or estate include?', a: 'Your chef arrives with the self-contained propane teppan grill, all proteins (standard and premium), fried rice, vegetables, miso soup, salad, house-made sauces, and all plates and utensils. Setup takes 20–30 minutes. The performance runs 90–120 minutes. Full cleanup when dinner ends. No gas hookup required at any Scottsdale vacation rental or residential property.' },
      { q: 'Does a private hibachi chef work at an Old Town Scottsdale vacation rental?', a: 'Yes — vacation rentals in Old Town Scottsdale, DC Ranch, Kierland Commons, McCormick Ranch, Gainey Ranch, and every Scottsdale community are all standard service. The setup is fully self-contained propane — no gas line, no outdoor kitchen needed. Just a flat outdoor area of approximately 10×10 feet and vehicle access to the property.' },
      { q: 'Are premium proteins available at Scottsdale and Paradise Valley estate events?', a: 'Yes — filet mignon, lobster tail, Chilean sea bass, king shrimp, and wagyu are all available as per-guest upgrades. Most Scottsdale and Paradise Valley estate hosts select premium proteins for the full table, which is the most common luxury-market format.' },
      { q: 'How far ahead should I book for a Scottsdale bachelorette or bachelor weekend?', a: 'Four to six weeks ahead for Old Town Scottsdale peak weekends (January–May and September–November). DC Ranch and North Scottsdale estate events: 3–5 weeks. Same-day quotes are always available — submit your date and address and we respond immediately.' },
    ],
    testimonialSubheading: 'Scottsdale, Paradise Valley & North Scottsdale Estate Events',
  },

  // T1 — Phoenix Core
  {
    heroPill: 'Phoenix Corporate & Home Events',
    experiencePill: 'The Greater Phoenix Experience',
    experiencePoints: [
      'Corporate team events, client appreciation dinners, graduation parties, and home celebrations — one format, any Phoenix neighborhood',
      'A certified teppanyaki chef travels to your Arcadia, Biltmore, Desert Ridge, or downtown Phoenix property',
      'Groups of 8–60+ served: single station for up to 25, dual stations for larger events',
      'Complete setup and cleanup — no venue logistics, no coordinator required',
    ],
    experienceImage: '/pics/hibachi-photo-1.jpg',
    experienceImageAlt: (city) => `Corporate hibachi event in ${city}, Arizona`,
    areasPill: 'Phoenix Metro Market',
    areasHeadline: (city) => `We Serve ${city} and All of the Phoenix Metro`,
    areasIntro: [
      (city, state) => `We serve ${city} and every Phoenix metro neighborhood — Arcadia, Biltmore, Desert Ridge, Ahwatukee, Roosevelt Row, downtown Phoenix, Scottsdale, Tempe, and every community across Maricopa County.`,
      (city) => `Most ${city} corporate and home event quotes are returned same day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton: 'Check Availability',
    occasionPill: 'Phoenix Events',
    occasionHeadline: (city) => `What Brings ${city} Clients to Private Hibachi`,
    occasionSubtext: [
      'Corporate team dinners',
      'Graduation parties',
      'Client appreciation events',
      'Home anniversary dinners',
      'Holiday party celebrations',
      'Birthday milestone events',
    ],
    faqPill: 'Phoenix Event FAQ',
    faqHeadline: (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Common Questions`,
    faqSet: [
      { q: 'Can you do corporate team events anywhere in the Phoenix metro?', a: 'Yes — Arcadia, Biltmore, Desert Ridge, Ahwatukee, downtown Phoenix, and every Phoenix metro neighborhood or venue. The chef is fully self-contained with a propane teppan grill — no gas hookup, no permanent outdoor kitchen required at any Phoenix property.' },
      { q: 'What Phoenix neighborhoods does your private hibachi chef serve?', a: 'We serve all of Greater Phoenix: Arcadia, Biltmore, Desert Ridge, Ahwatukee, Roosevelt Row, downtown, Scottsdale, Tempe, Chandler, Gilbert, Mesa, Glendale, Peoria, Surprise, Goodyear, and every Maricopa County community. Most locations within standard range have no travel fee.' },
      { q: 'How large of a group can you handle in Phoenix?', a: 'We serve groups of 8 to 60+ guests. For groups over 25, dual chef stations are recommended so everyone eats at the same time. Note your group size at booking and we\'ll configure accordingly. Corporate holiday parties of 40–60 guests are handled with dual stations.' },
      { q: 'What\'s the pricing for a Phoenix corporate or graduation event?', a: 'Starting at $60 per adult, $30 per child (ages 4–12), $600 event minimum. Premium proteins — filet mignon, lobster tail, Chilean sea bass, wagyu — available as per-guest upgrades. Corporate group packages available at booking.' },
    ],
    testimonialSubheading: 'Phoenix Metro Corporate, Graduation & Home Events',
  },

  // T2 — East Valley Tech & Family
  {
    heroPill: 'Backyard & Family Celebrations',
    experiencePill: 'The East Valley Experience',
    experiencePoints: [
      'A private hibachi chef who arrives at your East Valley backyard — you host without managing the kitchen',
      'ASU graduation parties, birthday milestones, and family celebrations for 8–60+ guests',
      'For groups over 25, dual chef stations keep everyone eating and watching at the same time',
      'No gas hookup required — self-contained propane, setup in 20 minutes on any flat surface',
    ],
    experienceImage: '/pics/hibachi-photo-2.jpg',
    experienceImageAlt: (city) => `Backyard hibachi party in ${city}, AZ`,
    areasPill: 'East Valley Market',
    areasHeadline: (city) => `We Serve ${city} and All of the East Valley`,
    areasIntro: [
      (city, state) => `We serve ${city} and every East Valley community — Tempe, Chandler, Gilbert, Mesa, Queen Creek, Fountain Hills, and every residential neighborhood across the East Valley tech and family corridor.`,
      (city) => `Most ${city} quotes are confirmed same day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton: 'Check Availability',
    occasionPill: 'East Valley Events',
    occasionHeadline: (city) => `What ${city} Families Book Private Hibachi For`,
    occasionSubtext: [
      'ASU and high school graduation parties',
      'College graduation celebrations',
      'Family milestone birthdays',
      'Anniversary backyard dinners',
      'Summer family reunions',
      'Corporate team milestone events',
    ],
    faqPill: 'Graduation Party FAQ',
    faqHeadline: (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Common Questions`,
    faqSet: [
      { q: 'When should I book for an ASU or high school graduation party in the East Valley?', a: 'Four to six weeks ahead for any May or June Saturday. East Valley graduation demand peaks in mid-May through early June — ASU commencement and high school ceremonies generate concentrated demand across Tempe, Chandler, Gilbert, Mesa, and Queen Creek simultaneously. Book in early April for a May graduation date.' },
      { q: 'How does private hibachi work for a group of 40 in an East Valley backyard?', a: 'Your chef needs approximately 10×10 feet of flat outdoor clearance — a typical East Valley backyard lawn, patio, or pool deck works. For groups of 40, dual chef stations are recommended so everyone eats at the same time. Note your count at booking and we\'ll configure the setup accordingly.' },
      { q: 'What\'s on the menu for an East Valley graduation or birthday party?', a: 'Standard menu: chicken, steak, shrimp, salmon, vegetables, hibachi fried rice, lo mein, miso soup, garden salad, and house-made ginger, yum yum, and teriyaki sauces. Premium upgrades — filet mignon, lobster tail, Chilean sea bass, king shrimp — are available per guest. Many families upgrade the graduate and immediate family.' },
      { q: 'What do I need to provide at my East Valley home?', a: 'A flat outdoor area of 10×10 feet minimum, seating for your guests, and vehicle access to the property. The chef brings the propane teppan grill, all food, all equipment, all utensils, and leaves the space completely clean when dinner ends.' },
    ],
    testimonialSubheading: 'East Valley Graduation Parties and Family Celebrations',
  },

  // T3 — West Valley Growth
  {
    heroPill: 'West Valley Home Events',
    experiencePill: 'The West Valley Experience',
    experiencePoints: [
      'A private hibachi chef travels to your Peoria, Glendale, Surprise, or Goodyear property with everything included',
      'Birthday parties, family milestones, graduation celebrations, and corporate team dinners — any West Valley occasion',
      'Self-contained propane setup — no gas hookup required at any West Valley residential property',
      'Groups of 8–60+: single station for up to 25, dual stations for larger events',
    ],
    experienceImage: '/pics/hibachi-catering-3.jpg',
    experienceImageAlt: (city) => `Private hibachi chef in ${city}, Arizona`,
    areasPill: 'West Valley Market',
    areasHeadline: (city) => `We Serve ${city} and All of the West Valley`,
    areasIntro: [
      (city, state) => `We serve ${city} and every West Valley community — Peoria, Glendale, Surprise, Goodyear, Avondale, Litchfield Park, Buckeye, Sun City Grand, and every residential neighborhood across the growing West Valley corridor.`,
      (city) => `Most ${city} quotes are returned same day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton: 'Check Availability',
    occasionPill: 'West Valley Events',
    occasionHeadline: (city) => `What ${city} Families Book Private Hibachi For`,
    occasionSubtext: [
      'Backyard birthday celebrations',
      'Family graduation parties',
      'Anniversary milestone dinners',
      'Corporate team events',
      'Retirement celebration dinners',
      'Neighborhood and community gatherings',
    ],
    faqPill: 'West Valley Event FAQ',
    faqHeadline: (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Common Questions`,
    faqSet: [
      { q: 'What does a private hibachi event include in the West Valley?', a: 'Your chef arrives with the self-contained propane teppan grill, all proteins (standard and premium), fried rice, vegetables, miso soup, salad, house-made sauces, and all plates and utensils. Setup takes 20–30 minutes. The performance runs 90–120 minutes. Full cleanup when dinner ends.' },
      { q: 'How much space is needed for a West Valley backyard hibachi event?', a: 'Approximately 10×10 feet of flat outdoor clearance — a typical West Valley backyard patio, lawn, or pool deck all work. Most Peoria, Glendale, Surprise, and Goodyear residential lots have significantly more space than needed. Note your outdoor setup at booking if there are any access considerations.' },
      { q: 'Do you serve Sun City Grand and Vistancia in Peoria?', a: 'Yes — Sun City Grand, Vistancia, Westwing Mountain, and all Peoria communities are within standard service range. We serve all of the West Valley including Surprise, Goodyear, Avondale, Litchfield Park, and Buckeye. Most West Valley locations have no travel fee.' },
      { q: 'How far ahead should I book a West Valley hibachi event?', a: 'Spring and summer Saturdays book 3–5 weeks ahead. Off-peak West Valley events (fall weekdays, winter) often confirm 1–2 weeks out. Same-day quotes are always available — submit your date and address and we respond immediately.' },
    ],
    testimonialSubheading: 'Peoria, Glendale, Surprise & Goodyear Events',
  },

  // T4 — Northern AZ Mountain
  {
    heroPill: 'Mountain Cabin & Destination Events',
    experiencePill: 'The Sedona, Flagstaff & Prescott Experience',
    experiencePoints: [
      'Fully self-contained propane setup — no gas hookup needed at any Sedona vacation rental, Flagstaff cabin, or Prescott property',
      'The chef arrives at your mountain property with everything included — no outdoor kitchen required',
      'Bachelorette weekends, anniversary destination trips, and family reunions — all the same chef, same performance',
      'Setup in 20 minutes on any flat deck or patio — the red rocks, ponderosa, or mountain backdrop is the venue',
    ],
    experienceImage: '/pics/mobile-hibachi.jpg',
    experienceImageAlt: (city) => `Mobile hibachi chef at ${city} vacation rental`,
    areasPill: 'Northern AZ Mountain Markets',
    areasHeadline: (city) => `We Serve ${city} and Northern Arizona's Mountain Destinations`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of Northern Arizona's mountain destinations — Sedona, Oak Creek Canyon, Flagstaff, Prescott, Jerome, and every mountain community where groups gather for destination weekends and vacation rental events.`,
      (city) => `Mountain destination quotes are returned same day. Peak season ${city} dates book fast. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton: 'Check Availability',
    occasionPill: 'Mountain Destination Events',
    occasionHeadline: (city) => `What Brings Groups to Private Hibachi in ${city}`,
    occasionSubtext: [
      'Bachelorette vacation rental weekends',
      'Family reunion mountain cabin trips',
      'Anniversary destination getaways',
      'Corporate retreat team dinners',
      'Birthday group rental celebrations',
      'Destination milestone events',
    ],
    faqPill: 'Mountain Event FAQ',
    faqHeadline: (city, abbr) => `Mobile Hibachi Chef in ${city}, ${abbr} — Common Questions`,
    faqSet: [
      { q: 'Does the chef bring their own propane? Do I need a gas hookup at my Sedona or Flagstaff rental?', a: 'The chef brings a fully self-contained propane teppan grill — no gas hookup, no outdoor kitchen, no permanent infrastructure required at any mountain rental. Any flat deck, patio, or outdoor surface at your Sedona vacation rental, Flagstaff cabin, or Prescott property works.' },
      { q: 'What do I need to tell the chef about my mountain rental property?', a: 'At booking, note any access considerations: steep driveways, unpaved roads, gated community entry codes, or limited parking. For elevated or remote properties, the chef arrives prepared. Travel to Northern AZ mountain properties is factored into the quote upfront.' },
      { q: 'Are premium proteins available at Sedona and Flagstaff destination events?', a: 'Yes — filet mignon, lobster tail, Chilean sea bass, king shrimp, and wagyu are all available. Bachelorette weekends in Sedona most commonly request premium proteins across the full table. Any upgrade mix is available per guest.' },
      { q: 'How far ahead should I book for a Sedona or Flagstaff vacation rental event?', a: 'Four to eight weeks ahead for peak Sedona season (February–May, September–November) and peak Flagstaff/Prescott season (summer and fall foliage). Off-peak mountain events confirm 2–3 weeks out. Book when you confirm the rental — both dates fill from the same pool.' },
    ],
    testimonialSubheading: 'Sedona, Flagstaff & Prescott Destination Events',
  },

  // T5 — Southern AZ (Tucson)
  {
    heroPill: 'Tucson University & Estate Events',
    experiencePill: 'The Tucson & Southern Arizona Experience',
    experiencePoints: [
      'UA graduation season is Tucson\'s most competitive booking window — reserve 4–6 weeks ahead',
      'A certified teppanyaki chef travels to your Tucson property — Catalina Foothills estates, Oro Valley homes, and UA-area vacation rentals',
      'Graduation parties, estate milestone dinners, and corporate team events — all the same chef, same performance',
      'Self-contained propane setup works at any Tucson property — no hookups required',
    ],
    experienceImage: '/pics/hibachi-catering-2.jpg',
    experienceImageAlt: (city) => `Private hibachi chef in ${city}, Arizona`,
    areasPill: 'Southern AZ Market',
    areasHeadline: (city) => `We Serve ${city} and All of Southern Arizona`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of Southern Arizona — Oro Valley, Marana, Sahuarita, Vail, Green Valley, and every community across Pima County. Catalina Foothills estates, Dove Mountain properties, and UA-adjacent vacation rentals all served.`,
      (city) => `Most ${city} quotes are returned same day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton: 'Check Availability',
    occasionPill: 'Tucson Events',
    occasionHeadline: (city) => `What ${city} Clients Book Private Hibachi For`,
    occasionSubtext: [
      'UA graduation family dinners',
      'Catalina Foothills estate events',
      'Anniversary milestone celebrations',
      'Corporate team retreat dinners',
      'Retirement community celebrations',
      'Vacation rental bachelorette events',
    ],
    faqPill: 'Tucson Event FAQ',
    faqHeadline: (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Common Questions`,
    faqSet: [
      { q: 'What does a private hibachi event include in Tucson or Oro Valley?', a: 'Your chef arrives with the propane teppan grill, all proteins (standard and premium), fried rice, vegetables, miso soup, salad, house-made sauces, and all plates and utensils. Setup takes 20–30 minutes. The performance runs 90–120 minutes. Full cleanup when dinner ends. No gas hookup required at any Tucson property.' },
      { q: 'How does private hibachi work for a University of Arizona graduation party?', a: 'Most UA graduation parties happen at Tucson residential properties — Catalina Foothills estates, Oro Valley homes, and Tucson backyard setups. The chef arrives fully self-contained, performs for 90–120 minutes, and handles any group size from 10 to 50+. For groups over 25, dual stations are available. UA commencement weekends in May book 4–6 weeks ahead.' },
      { q: 'What Tucson neighborhoods does your private hibachi chef serve?', a: 'We serve all of Tucson: Catalina Foothills, Oro Valley, Marana, Midtown, East Side, Rita Ranch, Sahuarita, Vail, and every Pima County community. The University of Arizona area, downtown Tucson, and Fourth Avenue vacation rental properties are all within standard service range.' },
      { q: 'How far ahead should I book for a Tucson graduation or Catalina Foothills estate event?', a: 'UA graduation weekends in May book 4–6 weeks ahead. Catalina Foothills estate events and Oro Valley milestone dinners: 3–4 weeks for peak season (October–May). Off-peak Tucson events often confirm 1–2 weeks out. Same-day quotes always available.' },
    ],
    testimonialSubheading: 'Tucson, Oro Valley & Southern AZ Events',
  },
]

// ─── How It Works ──────────────────────────────────────────────────────────────
const AZ_HOW_IT_WORKS = {
  headline:   (city) => `How Private Hibachi Works in ${city}`,
  footerNote: (city) => `Every ${city} event is confirmed with a deposit. Your date is locked as soon as you book — no double-bookings.`,
  steps: [
    { step: '01', title: 'Submit Your Date & Address', desc: 'Give us your Arizona address, event date, and approximate guest count. We respond with a personalized quote the same day.' },
    { step: '02', title: 'Confirm Your Menu',           desc: 'Choose proteins — chicken, steak, shrimp, salmon — and add premium upgrades like filet mignon, lobster tail, Chilean sea bass, or wagyu. Everything else is included.' },
    { step: '03', title: 'Lock Your Date',              desc: 'A deposit confirms your event immediately. Your date is reserved — no double-bookings, no last-minute uncertainty.' },
    { step: '04', title: 'Chef Travels to You',         desc: 'Your chef arrives 20–30 minutes before the event with the full self-contained propane teppan grill, all ingredients, and every piece of equipment. No hookup required at any Arizona property.' },
    { step: '05', title: 'Live Fire Performance & Full Cleanup', desc: '90–120 minutes of live teppanyaki — fire tricks, the volcano, flying shrimp, every dish cooked to order. Full cleanup when dinner ends. Your backyard, patio, or pool deck is left exactly as it was.' },
  ],
}

// ─── Blog Posts (keyed by variant % 3 — slots filled as blogs are written) ────
const AZ_BLOG_POSTS = [
  [], // Slot 0: T0/T3 — Scottsdale/PV luxury + West Valley
  [], // Slot 1: T1/T4 — Phoenix core + Northern AZ mountain
  [], // Slot 2: T2/T5 — East Valley + Southern AZ
]

// ─── getAzCityData ─────────────────────────────────────────────────────────────
export function getAzCityData(citySlug, cityName) {
  const entry = AZ_MAJOR_CITIES[citySlug]
  if (!entry) return null
  const { v, profileIdx, nearby } = entry

  const customMeta = AZ_CUSTOM_META[citySlug] || null

  return {
    cityName,
    stateAbbr:   'AZ',
    stateName:   'Arizona',
    stateSlug:   'arizona',
    variant:     v % 3,

    heroImage:    AZ_THEME_HEROES[v],
    heroSubtitle: AZ_HERO_SUBTITLES[v](cityName),
    heroH1Prefix: profileIdx != null ? AZ_PROFILE_H1_PREFIXES[profileIdx] : AZ_THEME_H1_PREFIXES[v],

    uniqueIntroVariant:   profileIdx != null ? 540 + profileIdx : 534 + v,
    uniqueWhyUsVariant:   v % 3,
    uniqueClosingVariant: profileIdx != null ? 540 + profileIdx : 534 + v,

    ...(customMeta ? { metaTitle: customMeta.title, metaDescription: customMeta.desc } : {}),

    testimonials:      AZ_TESTIMONIALS[citySlug] || [],
    nearbyCities:      nearby,
    nearbyMajorCities: ['Scottsdale', 'Phoenix', 'Tempe', 'Paradise Valley', 'Fountain Hills'],
  }
}

// ─── getAzBlogPosts ────────────────────────────────────────────────────────────
export function getAzBlogPosts(variant, count = 3) {
  const slot = variant % 3
  return AZ_BLOG_POSTS[slot].slice(0, count)
}

// ─── getAzHowItWorks ──────────────────────────────────────────────────────────
export function getAzHowItWorks(citySlug) {
  return AZ_HOW_IT_WORKS
}

// ─── getAzSectionVariant ──────────────────────────────────────────────────────
export function getAzSectionVariant(citySlug) {
  const entry = AZ_MAJOR_CITIES[citySlug]
  if (!entry) return null
  return AZ_SECTION_VARIANTS[entry.v]
}

// ─── getAzCityImage ───────────────────────────────────────────────────────────
export function getAzCityImage(citySlug) {
  return AZ_CITY_IMAGE_MAP[citySlug] || null
}

// ─── getAzSupportImages ───────────────────────────────────────────────────────
export function getAzSupportImages(citySlug) {
  return AZ_SUPPORT_IMAGES[citySlug] || null
}
