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
  // ── Batch 2 ──────────────────────────────────────────────────────────────────
  'naperville':    { src: '/pics/hibachi-at-home.jpg',          alt: (city) => `Hibachi at home in ${city}, Illinois` },
  'hinsdale':      { src: '/pics/backyard-hibachi-2.jpg',       alt: (city) => `Private hibachi chef in ${city}, IL` },
  'oak-brook':     { src: '/pics/private-event-4.jpg',          alt: (city) => `Corporate hibachi event in ${city}, Illinois` },
  'wheaton':       { src: '/pics/hibachi-to-you.jpg',           alt: (city) => `Hibachi at home in ${city}, IL` },
  'downers-grove': { src: '/pics/hibachi-home-austin.jpg',      alt: (city) => `Backyard hibachi party in ${city}, Illinois` },
  // ── Batch 3 ──────────────────────────────────────────────────────────────────
  'schaumburg':    { src: '/pics/hibachi-catering-austin.jpg',  alt: (city) => `Hibachi catering in ${city}, Illinois` },
  'barrington':    { src: '/pics/hibachi-at-home-austin.jpg',   alt: (city) => `Backyard hibachi in ${city}, IL` },
  'northbrook':    { src: '/pics/hibachi-austin-home-2.jpg',    alt: (city) => `Hibachi at home in ${city}, Illinois` },
  'orland-park':   { src: '/pics/hibachi-to-you-2.jpg',         alt: (city) => `Backyard hibachi in ${city}, IL` },
  // ── Batch 4 ──────────────────────────────────────────────────────────────────
  'champaign':     { src: '/pics/hibachi-raleigh.jpg',          alt: (city) => `Private hibachi chef in ${city}, Illinois` },
  'bloomington':   { src: '/pics/hibachi-miami.jpg',            alt: (city) => `Mobile hibachi event in ${city}, IL` },
  'peoria':        { src: '/pics/hibachi-dallas-tyler.jpg',     alt: (city) => `Mobile hibachi chef in ${city}, Illinois` },
  'rockford':      { src: '/pics/hibachi-austin-3.jpg',         alt: (city) => `Hibachi at home in ${city}, IL` },
}

// ─── Support Images (testimonial + CTA, Batch 1) ──────────────────────────────
const IL_SUPPORT_IMAGES = {
  'chicago':       { testimonial: { src: '/pics/hibachi-shot-1.jpg',      alt: (c) => `Private hibachi event in ${c}`,       caption: 'Chicago Corporate & Estate Events',               trustBadge: '4.9★ · Gold Coast & River North'          }, cta: { src: '/pics/hibachi-colorado.jpg',     alt: (c) => `Book your ${c} private hibachi event`,    caption: 'Corporate packages · From $60/adult'    } },
  'evanston':      { testimonial: { src: '/pics/hibachi-catering-3.jpg',  alt: (c) => `Hibachi catering event in ${c}`,     caption: 'Evanston Northwestern Graduation Events',         trustBadge: '5.0★ · Northwestern Graduation Trusted'   }, cta: { src: '/pics/private-party-chef-6.jpg', alt: (c) => `Book your ${c} hibachi event`,             caption: 'Graduation season · From $60/adult'     } },
  'lake-forest':   { testimonial: { src: '/pics/hibachi-catering-2.jpg',  alt: (c) => `Estate hibachi dinner in ${c}`,      caption: 'Lake Forest Estate & North Shore Events',         trustBadge: '5.0★ · Onwentsia & Academy Trusted'       }, cta: { src: '/pics/hibachi-pic-3.jpg',        alt: (c) => `Reserve your ${c} estate hibachi event`,  caption: 'Premium proteins · Full setup included' } },
  'highland-park': { testimonial: { src: '/pics/hibachi-photo-1.jpg',     alt: (c) => `Hibachi at home in ${c}`,            caption: 'Highland Park Ravinia Season Events',             trustBadge: '4.9★ · Ravinia Corridor Trusted'          }, cta: { src: '/pics/backyard-hibachi.jpg',     alt: (c) => `Book your ${c} hibachi event`,             caption: 'From $60/adult · Ravinia season books fast'} },
  'winnetka':      { testimonial: { src: '/pics/hibachi-shot-2.jpg',      alt: (c) => `Estate hibachi event in ${c}`,         caption: 'Winnetka North Shore Estate Events',              trustBadge: '5.0★ · Hubbard Woods & Tower Road'          }, cta: { src: '/pics/hibachi-pic-2.jpg',          alt: (c) => `Reserve your ${c} estate hibachi event`,  caption: 'Full setup included · From $60/adult'       } },
  // ── Batch 2 ──────────────────────────────────────────────────────────────────
  'naperville':    { testimonial: { src: '/pics/mobile-hibachi.jpg',      alt: (c) => `Hibachi at home in ${c}`,              caption: 'Naperville Graduation & Family Events',           trustBadge: '4.9★ · Naperville North & Central Trusted'  }, cta: { src: '/pics/hibachi-pic-4.jpg',          alt: (c) => `Book your ${c} hibachi event`,             caption: 'From $60/adult · Graduation season books fast'} },
  'hinsdale':      { testimonial: { src: '/pics/hibachi-pool-party.jpg',  alt: (c) => `Private hibachi dinner in ${c}`,       caption: 'Hinsdale Estate & Family Events',                 trustBadge: '5.0★ · Katherine Ave Corridor Trusted'      }, cta: { src: '/pics/hibachi-dallas.jpg',         alt: (c) => `Reserve your ${c} hibachi event`,          caption: 'Premium proteins · Full setup included'     } },
  'oak-brook':     { testimonial: { src: '/pics/hibachi-event.jpg',       alt: (c) => `Corporate hibachi event in ${c}`,      caption: 'Oak Brook Corporate & Executive Events',          trustBadge: '4.9★ · Fortune 500 Corporate Trusted'      }, cta: { src: '/pics/private-chef-2.jpg',         alt: (c) => `Book your ${c} corporate hibachi event`,   caption: 'Corporate packages · From $60/adult'        } },
  'wheaton':       { testimonial: { src: '/pics/hibachi-pic-62.jpg',      alt: (c) => `Hibachi at home in ${c}`,              caption: 'Wheaton Graduation & DuPage Family Events',       trustBadge: '4.9★ · Wheaton College Town Trusted'        }, cta: { src: '/pics/hibachi-raleigh.jpg',        alt: (c) => `Book your ${c} hibachi party`,             caption: 'From $60/adult · DuPage graduation season'  } },
  'downers-grove': { testimonial: { src: '/pics/hibachi-austin.jpg',      alt: (c) => `Backyard hibachi party in ${c}`,       caption: 'Downers Grove Graduation & Backyard Events',      trustBadge: '4.9★ · DG North & South Trusted'            }, cta: { src: '/pics/hibachi-pic-32.jpg',         alt: (c) => `Book your ${c} graduation party`,          caption: 'From $60/adult · May/June books fast'       } },
  // ── Batch 3 ──────────────────────────────────────────────────────────────────
  'schaumburg':    { testimonial: { src: '/pics/hibachi-catering.jpg',    alt: (c) => `Corporate hibachi catering in ${c}`,   caption: 'Schaumburg Corporate & Woodfield Corridor Events', trustBadge: '4.9★ · Motorola & Zurich Corridor Trusted' }, cta: { src: '/pics/hibachi-event.jpg',          alt: (c) => `Book your ${c} corporate hibachi event`,   caption: 'Corporate packages · From $60/adult'        } },
  'barrington':    { testimonial: { src: '/pics/hibachi-hart.jpg',        alt: (c) => `Backyard hibachi in ${c}`,             caption: 'Barrington Hills Estate & Countryside Events',    trustBadge: '5.0★ · Barrington Hills Estate Trusted'     }, cta: { src: '/pics/hibachi-private-chef-1.jpg', alt: (c) => `Reserve your ${c} estate hibachi event`,  caption: 'Large-lot estates · From $60/adult'         } },
  'northbrook':    { testimonial: { src: '/pics/hibachi-in-garage.jpg',   alt: (c) => `Hibachi at home in ${c}`,              caption: 'Northbrook & Glenbrook North Graduation Events',  trustBadge: '4.9★ · Glenbrook North Trusted'             }, cta: { src: '/pics/traveling-hibachi.jpg',      alt: (c) => `Book your ${c} graduation hibachi event`,  caption: 'From $60/adult · Graduation season'         } },
  'orland-park':   { testimonial: { src: '/pics/hibachi-dallas-2.jpg',    alt: (c) => `Backyard hibachi party in ${c}`,       caption: 'Orland Park & SW Suburbs Graduation Events',      trustBadge: '4.9★ · Carl Sandburg Graduation Trusted'    }, cta: { src: '/pics/mobile-hibachi-2.jpg',       alt: (c) => `Book your ${c} graduation party`,          caption: 'From $60/adult · May/June books fast'       } },
  // ── Batch 4 ──────────────────────────────────────────────────────────────────
  'champaign':     { testimonial: { src: '/pics/hibachi-philadelphia.jpg',alt: (c) => `Private hibachi event in ${c}`,        caption: 'Champaign UIUC Graduation & Regional Events',     trustBadge: '4.9★ · UIUC Graduation Trusted'              }, cta: { src: '/pics/hibachi-virginia-beach.jpg', alt: (c) => `Book your ${c} hibachi event`,             caption: 'From $60/adult · UIUC graduation books fast'} },
  'bloomington':   { testimonial: { src: '/pics/hibachi-colorado-home.jpg',alt: (c) => `Mobile hibachi event in ${c}`,       caption: 'Bloomington ISU & State Farm Events',             trustBadge: '4.9★ · ISU & State Farm Trusted'             }, cta: { src: '/pics/hibachi-wilmington.jpg',     alt: (c) => `Book your ${c} hibachi event`,             caption: 'From $60/adult · ISU graduation season'     } },
  'peoria':        { testimonial: { src: '/pics/hibachi-austin-2.jpg',    alt: (c) => `Mobile hibachi chef in ${c}`,          caption: 'Peoria Caterpillar Corporate & Bradley Events',   trustBadge: '4.9★ · Caterpillar & Bradley Trusted'       }, cta: { src: '/pics/hibachi-dallas-home-2.jpg',  alt: (c) => `Book your ${c} hibachi event`,             caption: 'From $60/adult · Same-day quotes'           } },
  'rockford':      { testimonial: { src: '/pics/hibachi-dallas-tyler-2.jpg',alt: (c) => `Hibachi at home in ${c}`,           caption: 'Rockford Rock River Regional Events',             trustBadge: '4.9★ · Rock River Corridor Trusted'         }, cta: { src: '/pics/hibachi-texas.jpg',          alt: (c) => `Book your ${c} hibachi event`,             caption: 'From $60/adult · Same-day quotes'           } },
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
  // ── Batch 2 ────────────────────────────────────────────────────────────────
  // 569 — Naperville
  {
    headline: (city, state) => `Hibachi at Home in Naperville: Naperville North and Central Graduation Parties, White Eagle Estate Dinners and DuPage Family Backyard Celebrations`,
    opening:  (city, state) => `Naperville North graduation backyard parties for 40 family members at a White Eagle property, Naperville Central commencement weekend family dinners in an Ashwood Park backyard, downtown Naperville Riverwalk-adjacent anniversary events, Cress Creek community birthday celebrations, and Morton Arboretum-corridor family milestones — a private hibachi chef arrives at your Naperville home with everything needed so you're actually present at the occasion you planned. Naperville is DuPage County's largest city and Illinois's most active graduation market, where Naperville North and Central commencements fall within the same two-week window and every Saturday in May and early June has five competing graduation parties on the same street. Private hibachi is the format that solves the graduation dinner problem the city has created for itself.`,
    middle:   (city, state) => `Your chef brings the self-contained propane teppan grill, all proteins including filet mignon and lobster tail upgrades, fried rice, vegetables, miso soup, salad, house-made sauces, and complete equipment. For Naperville graduation parties of 30–50, dual chef stations keep every family member eating and watching at the same time. Complete setup in 20–30 minutes. Live performance for 90–120 minutes. Full cleanup when dinner ends.`,
    closing:  (city, state) => `DuPage County graduation Saturdays in May and June book 4–6 weeks ahead — submit your Naperville date now for a same-day quote.`,
  },
  // 570 — Hinsdale
  {
    headline: (city, state) => `Private Hibachi Chef in Hinsdale: Katherine Avenue Estate Dinners, Hinsdale Central Graduation Events and Western Suburbs Luxury Celebrations`,
    opening:  (city, state) => `Hinsdale's Katherine Avenue historic corridor, its Hinsdale Golf Club-adjacent estates, Robbins Park-area anniversary dinner celebrations, Hinsdale Central High School graduation family gatherings, and western suburb executive home private dining — a certified teppanyaki chef arrives at your Hinsdale property with the full self-contained setup and premium proteins as the baseline expectation. Hinsdale is one of Illinois's most prestigious residential addresses — a quiet luxury market where the estate homes on Garfield and Symonds have hosted private dinners for generations, and a private hibachi chef is the format that matches what those properties already are. No restaurant in DuPage County replicates what your Hinsdale home can deliver for the occasions that matter.`,
    middle:   (city, state) => `The chef arrives with the self-contained propane teppan grill, filet mignon and lobster tail as standard upgrade options, fried rice, vegetables, house-made sauces, and all equipment. Setup in 20–30 minutes. Live performance for 90–120 minutes. Full cleanup when dinner ends — your estate is exactly as it was when the chef leaves.`,
    closing:  (city, state) => `Hinsdale estate and graduation dates fill 3–5 weeks ahead — submit your date for a same-day quote.`,
  },
  // 571 — Oak Brook
  {
    headline: (city, state) => `Hibachi Catering in Oak Brook: McDonald's Global HQ Corporate Events, Oakbrook Center Executive Dinners and Fortune 500 Team Celebrations`,
    opening:  (city, state) => `McDonald's Global Headquarters campus team appreciation events, Oakbrook Center-area Fortune 500 client entertainment dinners, Ace Hardware HQ quarterly team milestones, Crate & Barrel headquarters corporate gatherings, Midwest Club executive private dining events, and Drury Lane Theatre-adjacent company anniversary celebrations — a certified teppanyaki chef travels to your Oak Brook venue or executive property with a fully self-contained propane teppan grill and delivers the live performance that makes a corporate event genuinely memorable. Oak Brook is the Illinois corporate corridor's most concentrated Fortune 500 address, and private hibachi is the format that corporate clients here request when they want their team event to be categorically different from another restaurant block.`,
    middle:   (city, state) => `The chef arrives fully self-contained — propane teppan grill, all proteins including premium upgrades, complete ingredients, and every piece of equipment. For corporate groups of 25–60, dual stations ensure everyone eats and engages at the same time. Professional setup in 20–30 minutes. Live performance for 90–120 minutes. Complete cleanup.`,
    closing:  (city, state) => `Most Oak Brook corporate and executive event quotes are returned same day — submit your date and venue address and we respond immediately.`,
  },
  // 572 — Wheaton
  {
    headline: (city, state) => `Hibachi at Home in Wheaton: Wheaton College Graduation Parties, Cantigny Park-Area Estate Events and DuPage Family Backyard Milestones`,
    opening:  (city, state) => `Wheaton College graduation weekend family dinners in a Wheaton Warrenville South backyard, Wheaton North commencement graduation parties in a Briarcliffe neighborhood yard, Cantigny Park-adjacent milestone celebration events at Robert R. McCormick-corridor properties, and DuPage County family backyard milestone gatherings — a private hibachi chef arrives at your Wheaton home with everything needed so the graduation weekend goes exactly as it should. Wheaton's dual identity — a nationally ranked liberal arts college town and a DuPage County residential family market — creates consistent demand for the format that keeps graduation weekend families at the table instead of fighting for Saturday reservations at the handful of restaurants within driving distance of the venue.`,
    middle:   (city, state) => `Your chef brings the self-contained propane grill, all proteins, fried rice, vegetables, miso soup, salad, house-made sauces, and complete equipment. For Wheaton graduation parties of 30–50, dual stations are available. Complete setup, full performance, complete cleanup.`,
    closing:  (city, state) => `DuPage graduation Saturdays in May and June book 4–6 weeks ahead — submit your Wheaton date now for a same-day quote.`,
  },
  // 573 — Downers Grove
  {
    headline: (city, state) => `Hibachi at Home in Downers Grove: Downers Grove North and South Graduation Parties, Downtown Backyard Milestones and DuPage Family Celebrations`,
    opening:  (city, state) => `Downers Grove North graduation backyard parties in a Belmont Road corridor neighborhood yard, Downers Grove South commencement family dinners in a Fairview Avenue-area property, downtown Downers Grove-adjacent milestone celebration events, Lyman Woods-corridor family gatherings, and DuPage family milestone birthday celebrations — a private hibachi chef arrives at your Downers Grove home with everything needed so you're not managing restaurant logistics while trying to celebrate. Downers Grove's dual high school structure mirrors Naperville's situation — both North and South graduate in the same two-week window, which concentrates demand for private graduation dinner formats on precisely the Saturdays when every restaurant in DuPage County is fully committed.`,
    middle:   (city, state) => `Your chef brings the self-contained propane grill, all proteins including filet mignon and lobster tail upgrades, fried rice, vegetables, miso soup, salad, house-made sauces, and complete equipment. For graduation parties of 30–50, dual stations keep everyone eating at the same time. Complete setup, full performance, full cleanup.`,
    closing:  (city, state) => `DuPage graduation Saturdays in May and June book 4–6 weeks ahead — submit your Downers Grove date now for a same-day quote.`,
  },
  // ── Batch 3 ────────────────────────────────────────────────────────────────
  // 574 — Schaumburg
  {
    headline: (city, state) => `Hibachi Catering in Schaumburg: Motorola Solutions Team Events, Zurich North America Corporate Dinners and Woodfield Corridor Celebrations`,
    opening:  (city, state) => `Motorola Solutions corporate team appreciation events at the Schaumburg campus, Zurich North America executive team milestone dinners, Woodfield Mall-corridor Fortune 500 client entertainment events, Schaumburg Convention Center-adjacent company anniversary gatherings, LEGOLAND Discovery Center-area family corporate events, and Alexian Brothers Medical Center leadership appreciation dinners — a certified teppanyaki chef travels to your Schaumburg venue with a fully self-contained propane teppan grill and delivers the live performance that transforms a team event into an occasion worth remembering. Schaumburg is the Illinois northwest corporate corridor's largest employment center, and private hibachi is the format that its Fortune 500 companies reach for when a restaurant dinner isn't enough.`,
    middle:   (city, state) => `The chef arrives fully self-contained — propane teppan grill, all proteins, complete ingredients, and all equipment. For corporate groups of 25–60, dual stations ensure everyone eats and engages at the same time. Professional setup, 90–120 minute live performance, complete cleanup.`,
    closing:  (city, state) => `Most Schaumburg corporate event quotes are returned same day — submit your date and venue address for a same-day quote.`,
  },
  // 575 — Barrington
  {
    headline: (city, state) => `Backyard Hibachi in Barrington: Barrington Hills Equestrian Estate Events, Countryside Milestone Celebrations and Northwest Suburbs Backyard Parties`,
    opening:  (city, state) => `Barrington Hills equestrian estate anniversary dinners on a ten-acre property, Barrington High School graduation backyard parties in a South Barrington neighborhood yard, Fox River corridor countryside milestone birthday celebrations, Jewel Golf Club-adjacent estate gatherings, Cuba Marsh-corridor family reunion events, and Northwest Suburbs large-lot residential milestone celebrations — a private hibachi chef arrives at your Barrington property with a fully self-contained propane teppan grill and delivers the live-fire performance that matches the countryside scale of the occasion. Barrington is one of Illinois's most distinctive residential markets — large-lot equestrian estates in Barrington Hills and established countryside residential parcels throughout South Barrington give this community the outdoor entertaining space that most Chicago suburbs simply do not have.`,
    middle:   (city, state) => `Your chef brings the self-contained propane grill, all proteins including premium upgrades, fried rice, vegetables, house-made sauces, and complete equipment. For countryside estate parties of 30–50, dual stations are available. Complete setup, full performance, complete cleanup — your Barrington property is exactly as it was when the chef leaves.`,
    closing:  (city, state) => `Barrington Hills estate and graduation dates fill 3–5 weeks ahead — submit your date for a same-day quote.`,
  },
  // 576 — Northbrook
  {
    headline: (city, state) => `Hibachi at Home in Northbrook: Glenbrook North Graduation Parties, Northbrook Court-Area Estate Events and North Shore Family Milestones`,
    opening:  (city, state) => `Glenbrook North High School graduation backyard parties in a Techny Prairie-area neighborhood yard, Northbrook Court-adjacent milestone birthday celebrations, Chicago Botanic Garden corridor anniversary dinner events at Northbrook properties, North Shore Country Club-adjacent estate gatherings, and North Shore-adjacent family milestone celebrations — a private hibachi chef arrives at your Northbrook home with everything needed so you're actually at the event instead of managing it. Northbrook sits at the intersection of the North Shore estate corridor and the northern Cook County family market — Glenbrook North has one of Illinois's strongest graduation traditions, and its backyard celebration culture matches everything that a private hibachi chef was built for.`,
    middle:   (city, state) => `Your chef brings the self-contained propane grill, all proteins, fried rice, vegetables, miso soup, salad, house-made sauces, and complete equipment. For Northbrook graduation parties of 30–50, dual stations are available. Complete setup, full performance, complete cleanup.`,
    closing:  (city, state) => `Northbrook graduation Saturdays in May and June book 4–6 weeks ahead — submit your date now for a same-day quote.`,
  },
  // 577 — Orland Park
  {
    headline: (city, state) => `Backyard Hibachi in Orland Park: Carl Sandburg Graduation Parties, Orland Park Crossing-Area Backyard Events and Southwest Suburbs Family Milestones`,
    opening:  (city, state) => `Carl Sandburg High School graduation backyard parties in a Lake Sedgewick-area neighborhood property, Orland Park Crossing-adjacent milestone birthday celebrations, Centennial Park-area family anniversary dinner events, Tinley Park-corridor extended family gatherings, and Southwest Suburbs large-lot residential family milestone celebrations — a private hibachi chef arrives at your Orland Park home with everything needed so you're at the graduation party instead of managing catering logistics in a southwestern suburb where the restaurant options for a group of 40 on a May Saturday are genuinely limited. Orland Park's residential lot sizes, its established outdoor entertaining culture, and its tradition of large family backyard events make it a natural market for private hibachi.`,
    middle:   (city, state) => `Your chef brings the self-contained propane grill, all proteins, fried rice, vegetables, miso soup, salad, house-made sauces, and complete equipment. For graduation parties of 30–50, dual stations keep everyone eating and watching at the same time. Complete setup, full performance, complete cleanup.`,
    closing:  (city, state) => `Orland Park graduation Saturdays in May and June book 4–6 weeks ahead — submit your date now for a same-day quote.`,
  },
  // ── Batch 4 ────────────────────────────────────────────────────────────────
  // 578 — Champaign
  {
    headline: (city, state) => `Hibachi at Home in Champaign: UIUC Graduation Weekend Family Dinners, Research Park Corporate Events and Campustown Milestone Celebrations`,
    opening:  (city, state) => `University of Illinois at Urbana-Champaign May commencement graduation weekend family dinners for 20 guests in a Campustown-area rental home, Research Park corporate team appreciation events for UIUC startup and technology company milestones, Krannert Center-adjacent anniversary dinner celebrations, Memorial Stadium-corridor graduation family gatherings, and Champaign-area residential milestone birthday events — a certified teppanyaki chef arrives at your Champaign property with a fully self-contained propane teppan grill and delivers the live performance that makes graduation weekend genuinely memorable. UIUC's May graduation is one of the largest commencements in the Midwest, and every family that flies in from out of state to celebrate a Champaign graduation understands immediately why private hibachi is the format that keeps the family together instead of splitting across three restaurants that were all booked six weeks ago.`,
    middle:   (city, state) => `The chef arrives with the self-contained propane grill, all proteins, fried rice, vegetables, miso soup, salad, house-made sauces, and all equipment. Single station for up to 25 guests; dual stations for graduation-weekend events of 30–50. Live performance for 90–120 minutes. Complete cleanup when dinner ends.`,
    closing:  (city, state) => `UIUC May commencement dates book 5–7 weeks ahead — if you have a graduation date, submit it now to reserve the chef.`,
  },
  // 579 — Bloomington
  {
    headline: (city, state) => `Mobile Hibachi in Bloomington: ISU Graduation Parties, State Farm Corporate Events and Rivian Campus Team Dinners`,
    opening:  (city, state) => `Illinois State University May graduation weekend family dinners for 24 guests in a Normal-area rental property, State Farm headquarters corporate team appreciation events for department milestones and employee anniversaries, Rivian campus technology team gatherings for Bloomington-Normal's newest major employer, Illinois Wesleyan University graduation family events, and Bloomington-area residential milestone celebrations — a certified teppanyaki chef travels to your Bloomington property with the full self-contained setup and delivers the live performance that makes the occasion worth coming to town for. Bloomington-Normal's employment base — State Farm, Rivian, ISU, Illinois Wesleyan, BroMenn Medical Center — gives this market a consistent dual demand: university graduation weekend family dinners and corporate team events for companies whose employees deserve something better than another group reservation at the same downtown restaurant.`,
    middle:   (city, state) => `The chef arrives with the self-contained propane grill, all proteins, fried rice, vegetables, house-made sauces, and complete equipment. Single station for up to 25; dual stations for graduation groups of 30–50. Live performance 90–120 minutes. Complete cleanup when dinner ends.`,
    closing:  (city, state) => `ISU May graduation weekends book 4–6 weeks ahead — if you have a commencement date, reserve the chef now.`,
  },
  // 580 — Peoria
  {
    headline: (city, state) => `Mobile Hibachi in Peoria: Caterpillar Corporate Events, Bradley University Graduation Parties and Grandview Drive Estate Celebrations`,
    opening:  (city, state) => `Caterpillar global headquarters corporate team appreciation events for division milestones, Bradley University graduation weekend family dinners for out-of-town family gatherings, Grandview Drive estate corridor anniversary dinner celebrations, Peoria Riverfront-adjacent milestone birthday events, OSF HealthCare leadership team appreciation gatherings, and Peoria-area residential family celebration events — a certified teppanyaki chef travels to your Peoria venue or home with a fully self-contained propane teppan grill and delivers the live performance that Caterpillar's talent and Bradley's graduating families both deserve. Peoria is central Illinois's largest employment and population center, and private hibachi solves two problems simultaneously: the corporate team event problem at a Fortune 100 company that has hosted every conceivable team dinner format, and the graduation dinner problem for Bradley families who need a format that works without competing for restaurant reservations on the busiest dining weekend in the Tri-County Area.`,
    middle:   (city, state) => `The chef arrives with the self-contained propane grill, all proteins including premium upgrades, fried rice, vegetables, house-made sauces, and all equipment. Single station for up to 25 guests; dual stations for corporate groups and graduation parties of 30–60. Live performance 90–120 minutes. Complete cleanup.`,
    closing:  (city, state) => `Peoria graduation weekends and Caterpillar team event dates — most quotes returned same day. Submit your date and address to get started.`,
  },
  // 581 — Rockford
  {
    headline: (city, state) => `Hibachi at Home in Rockford: Rock River Community Celebrations, Anderson Japanese Gardens Estate Events and Regional Family Milestone Parties`,
    opening:  (city, state) => `Rock River corridor milestone birthday celebrations at a North Rockford-area estate property, Anderson Japanese Gardens-adjacent anniversary dinner events, Coronado Theatre-corridor neighborhood gatherings, Rockford University graduation family dinners, NIU Rockford campus milestone celebrations, and regional Rockford family milestone events for extended families who need a format that keeps everyone at the same table — a certified teppanyaki chef travels to your Rockford property with the full self-contained setup and delivers a live performance that gives northern Illinois's largest city the private dining experience that Chicagoland's North Shore has always taken for granted. Rockford is Illinois's third-largest city and one of the state's most underserved private event markets — a city with genuine estate properties, strong family ties, and a community identity built around significant occasions.`,
    middle:   (city, state) => `The chef arrives with the self-contained propane grill, all proteins, fried rice, vegetables, house-made sauces, and complete equipment. Single station for up to 25 guests; dual stations for events of 30–50. Live performance 90–120 minutes. Complete cleanup when dinner ends.`,
    closing:  (city, state) => `Rockford event quotes are returned same day — submit your date and address and we respond immediately.`,
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
  // ── Batch 2 ────────────────────────────────────────────────────────────────
  // 569 — Naperville
  { headline: (city) => `Book Your Naperville Hibachi Event`, sub: (city) => `Naperville North and Central graduation parties, White Eagle estate dinners, and DuPage family backyard celebrations — same-day quotes for any Naperville date.`, urgency: 'DuPage County graduation Saturdays in May and June fill 4–6 weeks ahead. Submit your Naperville date now.', cta: { label: 'Book Your Naperville Date', caption: 'From $60/adult · DuPage graduation books fast' } },
  // 570 — Hinsdale
  { headline: (city) => `Book Your Hinsdale Estate Event`, sub: (city) => `Katherine Avenue estate dinners, Hinsdale Central graduation events, and western suburb celebrations — most Hinsdale quotes returned same day.`, urgency: 'Hinsdale estate and graduation season dates fill 3–5 weeks ahead. Reserve yours now with a deposit.', cta: { label: 'Reserve Your Hinsdale Date', caption: 'Premium proteins · Full setup included' } },
  // 571 — Oak Brook
  { headline: (city) => `Book Your Oak Brook Corporate Event`, sub: (city) => `McDonald's HQ corporate events, Oakbrook Center executive dinners, and Fortune 500 team celebrations — same-day quotes for any Oak Brook date.`, urgency: 'Illinois corporate and holiday event dates fill 3–4 weeks ahead. Reserve your Oak Brook date now.', cta: { label: 'Request an Oak Brook Quote', caption: 'Corporate packages · From $60/adult' } },
  // 572 — Wheaton
  { headline: (city) => `Book Your Wheaton Hibachi Event`, sub: (city) => `Wheaton College graduation parties, Cantigny Park-area estate events, and DuPage family celebrations — same-day quotes for any Wheaton date.`, urgency: 'DuPage County graduation Saturdays in May and June fill 4–6 weeks ahead. Submit your Wheaton date now.', cta: { label: 'Book Your Wheaton Date', caption: 'From $60/adult · Graduation season books fast' } },
  // 573 — Downers Grove
  { headline: (city) => `Book Your Downers Grove Hibachi Event`, sub: (city) => `Downers Grove North and South graduation parties, downtown backyard milestones, and DuPage family celebrations — same-day quotes for any date.`, urgency: 'DuPage County graduation Saturdays in May and June fill 4–6 weeks ahead. Submit your Downers Grove date now.', cta: { label: 'Book Your Downers Grove Date', caption: 'From $60/adult · Graduation season books fast' } },
  // ── Batch 3 ────────────────────────────────────────────────────────────────
  // 574 — Schaumburg
  { headline: (city) => `Book Your Schaumburg Corporate Event`, sub: (city) => `Motorola Solutions team events, Zurich North America corporate dinners, and Woodfield corridor company celebrations — same-day quotes for any Schaumburg date.`, urgency: 'Illinois corporate season and holiday event dates fill 3–4 weeks ahead. Reserve your Schaumburg date now.', cta: { label: 'Request a Schaumburg Quote', caption: 'Corporate packages · From $60/adult' } },
  // 575 — Barrington
  { headline: (city) => `Book Your Barrington Estate Event`, sub: (city) => `Barrington Hills equestrian estate events, countryside milestone celebrations, and Northwest Suburbs backyard parties — most Barrington quotes returned same day.`, urgency: 'Barrington Hills estate and graduation season dates fill 3–5 weeks ahead. Reserve your date now.', cta: { label: 'Reserve Your Barrington Date', caption: 'Large-lot estates · From $60/adult' } },
  // 576 — Northbrook
  { headline: (city) => `Book Your Northbrook Hibachi Event`, sub: (city) => `Glenbrook North graduation parties, Northbrook Court-area estate events, and North Shore family milestones — same-day quotes for any Northbrook date.`, urgency: 'Northbrook graduation Saturdays in May and June fill 4–6 weeks ahead. Submit your date now.', cta: { label: 'Book Your Northbrook Date', caption: 'From $60/adult · Graduation season books fast' } },
  // 577 — Orland Park
  { headline: (city) => `Book Your Orland Park Hibachi Event`, sub: (city) => `Carl Sandburg graduation parties, Orland Park Crossing-area backyard events, and Southwest Suburbs family milestones — same-day quotes for any date.`, urgency: 'Orland Park graduation Saturdays in May and June fill 4–6 weeks ahead. Submit your date now.', cta: { label: 'Book Your Orland Park Date', caption: 'From $60/adult · Graduation season books fast' } },
  // ── Batch 4 ────────────────────────────────────────────────────────────────
  // 578 — Champaign
  { headline: (city) => `Book Your Champaign Hibachi Event`, sub: (city) => `UIUC graduation weekend family dinners, Research Park corporate events, and Champaign-area celebrations — same-day quotes for any date.`, urgency: 'UIUC May commencement weekends book 5–7 weeks ahead. If you have a graduation date, reserve the chef now.', cta: { label: 'Get a Same-Day Quote', caption: 'From $60/adult · UIUC graduation fills fast' } },
  // 579 — Bloomington
  { headline: (city) => `Book Your Bloomington Hibachi Event`, sub: (city) => `ISU graduation parties, State Farm corporate events, and Rivian campus team dinners — same-day quotes for any Bloomington-Normal date.`, urgency: 'ISU graduation weekends book 4–6 weeks ahead. If you have a commencement date, reserve the chef now.', cta: { label: 'Get a Same-Day Quote', caption: 'From $60/adult · ISU graduation season' } },
  // 580 — Peoria
  { headline: (city) => `Book Your Peoria Hibachi Event`, sub: (city) => `Caterpillar corporate events, Bradley graduation parties, and Grandview Drive estate celebrations — most Peoria quotes returned same day.`, urgency: 'Bradley University graduation weekends and Caterpillar team events book 3–5 weeks ahead. Reserve your date now.', cta: { label: 'Get a Same-Day Quote', caption: 'From $60/adult · Same-day response' } },
  // 581 — Rockford
  { headline: (city) => `Book Your Rockford Hibachi Event`, sub: (city) => `Rock River community celebrations, Anderson Japanese Gardens estate events, and regional Rockford family milestones — same-day quotes for any date.`, urgency: 'Rockford event dates are available — submit your address and date for a same-day quote.', cta: { label: 'Get a Same-Day Quote', caption: 'From $60/adult · Northern IL events' } },
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
  // ── Batch 2 ────────────────────────────────────────────────────────────────
  'naperville': [
    { name: 'Kevin M.', text: 'Naperville Central graduation party — 46 family members in our White Eagle backyard. Our daughter graduated from Central and we had family in from eight states. We needed a format that worked without restaurant reservations on the busiest Saturday in Naperville. The dual chef stations handled everyone at once, fire tricks had the whole backyard laughing, and the filet mignon upgrade was exactly right for our graduate. We\'ve already been asked to recommend the same format for three other graduation parties next year.', location: 'Naperville, IL', rating: 5, event: 'Naperville Central Graduation Party' },
    { name: 'Christine B.', text: 'Milestone 50th birthday at our Ashwood Park property — 28 guests including the whole family. We\'d planned this event for two years and a private hibachi chef was our daughter\'s recommendation. Chef arrived fully self-contained, set up by our pool in 20 minutes, performed for two hours, and left everything spotless. Premium proteins across the full table. The single finest evening we\'ve hosted at this property. Already booked again for next fall.', location: 'Naperville, IL', rating: 5, event: 'Milestone Birthday Celebration' },
    { name: 'Jason T.', text: 'Naperville North graduation backyard party — 38 family members. We were worried about logistics since we had family arriving from different states at different times all weekend. The hibachi format was perfect: everyone arrived, sat down, and watched the same performance. No seating arrangements to manage, no food timing to coordinate. Chef did everything. Best graduation event in our family in 20 years of doing them.', location: 'Naperville, IL', rating: 5, event: 'NNHS Graduation Party' },
  ],
  'hinsdale': [
    { name: 'Elizabeth W.', text: 'Anniversary estate dinner at our Garfield property — 14 guests. We\'ve hosted dozens of private dinners at this home over the years and this was among the finest. The chef set up on our south terrace, served filet mignon and lobster tail across the full table, performed for 90 minutes with complete professionalism, and left the terrace exactly as it was. The format suited the property perfectly. We\'re already planning our next occasion.', location: 'Hinsdale, IL', rating: 5, event: 'Anniversary Estate Dinner' },
    { name: 'Patrick H.', text: 'Hinsdale Central graduation family dinner — 22 guests from four states. We live on Katherine Avenue and have the space but needed a format that matched the occasion without the restaurant reservation problem on June graduation Saturday. Chef arrived 25 minutes early, set up in the backyard, and gave us a two-hour performance that had every guest engaged from start to finish. The wagyu option for our son made the evening genuinely special.', location: 'Hinsdale, IL', rating: 5, event: 'Hinsdale Central Graduation' },
    { name: 'Diane K.', text: 'Client appreciation dinner at our Hinsdale estate — 20 guests. Executive clients who have attended every kind of private corporate dining event, and the unanimous verdict was that this was the most distinctive format they\'d experienced. The live fire performance kept everyone at the table for the full two hours. The chef was professional and personable throughout. Our go-to format for client entertainment at this property from now on.', location: 'Hinsdale, IL', rating: 5, event: 'Client Appreciation Estate Dinner' },
  ],
  'oak-brook': [
    { name: 'Mark D.', text: 'McDonald\'s Global Headquarters team appreciation event — 34 employees at our Oak Brook venue. We\'d done every conceivable format for corporate team dinners and this was categorically better. The chef arrived fully self-contained, dual stations handled the full group simultaneously, and every employee was engaged for two hours. Our VP of HR called it the best team event we\'ve done in five years. The format works at a Fortune 500 scale. Already booked for our next quarterly milestone.', location: 'Oak Brook, IL', rating: 5, event: 'Fortune 500 Team Appreciation Event' },
    { name: 'Sandra R.', text: 'Ace Hardware division anniversary dinner at our Oak Brook office campus — 28 guests including leadership and their spouses. The chef arrived self-contained, set up in our courtyard, and delivered a two-hour performance that had every guest including the CEO engaged from start to finish. The live format created genuine conversations across the table in a way that a plated dinner never does. Our new standard for company milestone events.', location: 'Oak Brook, IL', rating: 5, event: 'Corporate Anniversary Dinner' },
    { name: 'Tom C.', text: 'Client appreciation event at the Midwest Club — 22 guests. High-caliber clients who attend events nationwide, and the private hibachi format was genuinely new to every person at the table. Chef was excellent, proteins were exceptional, and the performance kept everyone engaged for the full evening. Three of my clients asked me for the contact information before they left. The format is a genuine differentiator for client entertainment in the Oak Brook corridor.', location: 'Oak Brook, IL', rating: 5, event: 'Midwest Club Client Event' },
  ],
  'wheaton': [
    { name: 'Brian L.', text: 'Wheaton College graduation party — 34 family members at our Briarcliffe Avenue property. Our son graduated from Wheaton College and we had guests arriving from across the country for the weekend. The hibachi format was the right call: everyone at the same table, same performance, same experience. Dual stations handled the group, the fire tricks had every age transfixed, and the filet mignon upgrade for our son was exactly right for the occasion. Our best graduation event.', location: 'Wheaton, IL', rating: 5, event: 'Wheaton College Graduation Party' },
    { name: 'Michelle A.', text: 'Wheaton Warrenville South graduation backyard party — 40 family members. We have the outdoor space and needed a format that didn\'t require anyone to leave the property on the busiest restaurant Saturday of the year. Chef arrived with everything, set up in our yard by the pool, and gave us two hours of performance that kept every generation from grandparents to younger siblings completely engaged. The volcano finale was the moment of the entire weekend. Highly recommend for any DuPage graduation.', location: 'Wheaton, IL', rating: 5, event: 'WWSHS Graduation Party' },
    { name: 'David H.', text: 'Milestone birthday at our Cantigny-corridor property — 20 guests. We\'ve lived in Wheaton for 18 years and this was the finest evening we\'ve hosted at this home. Chef set up on our back patio, served premium proteins across the full table, performed for 90 minutes with complete skill, and left the property spotless. Our guests are still asking how we found the format. Booking again for our anniversary next summer.', location: 'Wheaton, IL', rating: 5, event: 'Milestone Birthday Celebration' },
  ],
  'downers-grove': [
    { name: 'Rachel P.', text: 'Downers Grove North graduation party — 38 family members at our Belmont Road home. Our daughter graduated from North and we had family in from six states. We needed something that worked for every age group simultaneously and that didn\'t require restaurant reservations on the busiest Saturday in DuPage County. Dual stations handled the group, the performance ran two full hours, and the cleanup was complete when the chef left. Best graduation event we\'ve hosted.', location: 'Downers Grove, IL', rating: 5, event: 'DGN Graduation Party' },
    { name: 'Steve M.', text: 'Anniversary dinner at our Fairview Avenue property — 16 guests. We\'ve been in this home for 22 years and have hosted hundreds of dinner parties. This was among the most memorable. The chef set up on our deck, served premium proteins throughout, performed for 90 minutes with complete professionalism, and the deck was spotless when he left. The format transforms a familiar property into somewhere new. Already booked for our landmark anniversary next year.', location: 'Downers Grove, IL', rating: 5, event: 'Anniversary Dinner' },
    { name: 'Gina F.', text: 'Downers Grove South graduation party — 42 family members in our backyard. Our son graduated from South and the challenge was a guest list that ranged from 5-year-old cousins to 80-year-old grandparents. The hibachi chef found a way to keep every age completely engaged for two hours. Fire tricks for the little ones, excellent food for everyone, and the kind of effortless experience that made us feel like we actually attended our son\'s graduation instead of managing it.', location: 'Downers Grove, IL', rating: 5, event: 'DGSH Graduation Party' },
  ],
  // ── Batch 3 ────────────────────────────────────────────────────────────────
  'schaumburg': [
    { name: 'Lisa K.', text: 'Motorola Solutions Q4 team appreciation event — 38 employees at our Schaumburg location. We\'d done restaurant buyouts and catered buffets and this format was better than either. The chef arrived fully self-contained, dual stations handled the full group, and every employee was genuinely engaged for 90 minutes of live performance. Our VP called it the best team event in three years. Already scheduled for the next milestone. This is the format for Fortune 500 team dinners.', location: 'Schaumburg, IL', rating: 5, event: 'Motorola Solutions Team Event' },
    { name: 'Robert Z.', text: 'Zurich North America leadership appreciation dinner — 24 guests at a Schaumburg executive venue. High-caliber professionals who have attended corporate events at the highest level, and the unanimous feedback was that the live hibachi format was unlike anything they\'d experienced in a corporate setting. Chef was exceptional, proteins were excellent, performance ran two hours. Three attendees called me the next day specifically to ask for the contact information. The format is a genuine differentiator.', location: 'Schaumburg, IL', rating: 5, event: 'Executive Leadership Dinner' },
    { name: 'Amy T.', text: 'Company anniversary celebration at our Schaumburg property — 30 employees and spouses. We wanted something that felt like a celebration rather than a work event. The hibachi format delivered exactly that. Chef performed for two hours, every person at the table was engaged, and the fire tricks had even the most reserved guests laughing and participating. The best company event we\'ve hosted in fifteen years of doing them.', location: 'Schaumburg, IL', rating: 5, event: 'Company Anniversary Celebration' },
  ],
  'barrington': [
    { name: 'John F.', text: 'Anniversary estate event at our Barrington Hills property — 18 guests on our five-acre lot. We\'ve hosted private dinners at this property for twenty years and this was genuinely new territory. The chef set up in our courtyard, served filet mignon and lobster tail across the full table, and performed for 90 minutes with complete skill. The equestrian estate setting gave the evening a backdrop that no restaurant could replicate. We\'re already planning our next milestone event at the same property.', location: 'Barrington Hills, IL', rating: 5, event: 'Anniversary Estate Event' },
    { name: 'Susan N.', text: 'Barrington High School graduation backyard party — 36 family members at our South Barrington property. We have a large outdoor entertaining space and wanted a format that used it properly. Chef arrived, set up by our pool area, and gave us two hours of performance that had every generation from our 6-year-old nephew to our 78-year-old parents completely transfixed. The fire tricks over the pool were the highlight of the entire graduation weekend.', location: 'Barrington, IL', rating: 5, event: 'BHS Graduation Party' },
    { name: 'Thomas W.', text: 'Countryside milestone birthday at our Fox River-adjacent property — 22 guests. The rural setting made the evening unique before the chef even arrived. Then the performance matched the setting completely. Premium proteins, 90 minutes of live fire performance, and the kind of cleanup that left the property as it was when the chef found it. Our guests came from as far as Minneapolis and New York — the single request from every one of them was where to find the same format for their own properties.', location: 'Barrington, IL', rating: 5, event: 'Countryside Milestone Birthday' },
  ],
  'northbrook': [
    { name: 'Carol H.', text: 'Glenbrook North graduation backyard party — 40 family members at our Techny Prairie-area home. Our son graduated from GBN and we had family arriving from five states. We needed a format that worked for a group that size on a May Saturday without restaurant coordination. Dual stations, the full performance, fire tricks for every generation — and the cleanup was so complete we couldn\'t tell the chef had been there. Best graduation event in our family\'s history.', location: 'Northbrook, IL', rating: 5, event: 'GBN Graduation Party' },
    { name: 'Paul M.', text: 'Milestone birthday dinner at our Northbrook Court-area home — 18 guests. We\'ve lived here for 16 years and host regularly, but this was the first time the format was as impressive as the property. Chef set up on our south patio, served premium proteins including wagyu across the table, and performed for 90 minutes without a single moment of downtime. Every guest left asking for the contact information. Already booked for our next major occasion.', location: 'Northbrook, IL', rating: 5, event: 'Milestone Birthday Dinner' },
    { name: 'Linda S.', text: 'Family reunion at our Northbrook property — 28 guests ranging from 8 to 76 years old. We needed a format that worked across a multi-generational guest list and that kept everyone in one place for the full evening. The hibachi chef found the exact right tone: entertaining enough for the youngest guests and excellent food for everyone. Fire tricks, flying shrimp, the volcano — every generation was engaged for two hours straight. The best family gathering format we\'ve found.', location: 'Northbrook, IL', rating: 5, event: 'Multi-Generational Family Reunion' },
  ],
  'orland-park': [
    { name: 'Dan R.', text: 'Carl Sandburg graduation backyard party — 44 family members at our Lake Sedgewick-area home. Our daughter graduated from Sandburg and we had guests arriving from multiple states. We needed a format that worked for a large group on a May Saturday without the restaurant logistics. Dual stations handled everyone at once, the performance ran two hours, and the fire tricks had everyone from our youngest grandkid to our oldest parent completely captivated. Our best graduation event by a wide margin.', location: 'Orland Park, IL', rating: 5, event: 'Carl Sandburg Graduation Party' },
    { name: 'Patricia L.', text: 'Milestone birthday celebration at our Orland Park property — 30 guests in our backyard. We have a great outdoor space and wanted a format that used it for something genuinely memorable. Chef arrived with everything, set up by our patio, performed for two hours, and left the yard spotless. Premium proteins across the full table, fire tricks that had our youngest guests convinced they\'d witnessed something magical. Our guests are still talking about it two months later.', location: 'Orland Park, IL', rating: 5, event: 'Milestone Birthday Party' },
    { name: 'Mike C.', text: 'Southwest Suburbs family graduation party — 36 family members at our Centennial Park-area home. Our son graduated from Carl Sandburg and we wanted to host his celebration at our property rather than fight for restaurant reservations on the most competitive dining Saturday of the year in the southwestern suburbs. The chef solved every logistical problem we would have had. Setup, performance, cleanup — all flawless. Our most successful family event.', location: 'Orland Park, IL', rating: 5, event: 'Graduation Family Party' },
  ],
  // ── Batch 4 ────────────────────────────────────────────────────────────────
  'champaign': [
    { name: 'Nancy W.', text: 'UIUC Engineering graduation weekend dinner — 24 family members at our Campustown-area rental for the weekend. We had family flying in from three different time zones and needed a format that worked in a rental space and didn\'t require competing for restaurant reservations during the busiest dining weekend of the year in Champaign. Chef arrived fully self-contained, performed for two hours, and left the rental property exactly as it was. The best graduation dinner our family has done in six years of UIUC commencements.', location: 'Champaign, IL', rating: 5, event: 'UIUC Graduation Dinner' },
    { name: 'Greg T.', text: 'Research Park corporate team event — 22 employees at a Champaign-area property. We needed a team milestone event that felt genuinely different from every other team dinner format we\'d tried. The hibachi format delivered: live performance, engaged every person at the table for 90 minutes, and left the team talking about it at the following week\'s standup. Our new format for team appreciation events at this company.', location: 'Champaign, IL', rating: 5, event: 'Research Park Team Dinner' },
    { name: 'Jennifer A.', text: 'UIUC Business School graduation family dinner — 20 guests at our campus-area property. Our son graduated from the Gies College of Business and we wanted a celebration format that matched the occasion. Chef set up on our back patio, served premium proteins throughout, and gave us a 90-minute performance that had every family member at the table engaged from start to finish. The graduation weekend in Champaign is always chaotic — this was the one event of the weekend that was genuinely relaxed.', location: 'Champaign, IL', rating: 5, event: 'UIUC Business Graduation Dinner' },
  ],
  'bloomington': [
    { name: 'Tom S.', text: 'ISU graduation weekend family dinner — 26 family members at our Normal-area rental property. We had family coming in from six states for our daughter\'s ISU commencement and needed a format that worked without competing for the handful of restaurants in Bloomington-Normal that weren\'t already booked solid. Chef arrived fully self-contained, performed for two hours, cleanup was complete when he left. The format solved every logistical problem of a graduation weekend family dinner in a college town.', location: 'Bloomington, IL', rating: 5, event: 'ISU Graduation Dinner' },
    { name: 'Mark R.', text: 'State Farm divisional team appreciation event — 30 employees at a Bloomington venue. We\'d done every format for team events and this was the most memorable by far. The chef arrived self-contained, dual stations handled the full group, and the live performance kept every employee engaged for two hours. Our division head called it the best team event in four years of doing them. The format works for a State Farm team event at any level.', location: 'Bloomington, IL', rating: 5, event: 'State Farm Team Appreciation Event' },
    { name: 'Sarah B.', text: 'Rivian employee milestone celebration — 22 guests at a Bloomington-Normal area property. We wanted something that matched the energy of what Rivian is building in Bloomington — something genuinely forward-thinking for a company milestone event. The private hibachi format was exactly that. Live fire performance, excellent food, 90 minutes of genuine entertainment. Every person at the table was engaged. Already planning the same format for the next milestone.', location: 'Normal, IL', rating: 5, event: 'Rivian Team Milestone Celebration' },
  ],
  'peoria': [
    { name: 'Bob K.', text: 'Caterpillar division team appreciation dinner — 32 employees at a Peoria venue. We\'ve been hosting team events at Caterpillar for over a decade and this was the first format that genuinely surprised our team. Chef arrived fully self-contained, dual stations handled the full group simultaneously, and the live performance kept every person engaged for two hours. The fire tricks were the unexpected highlight of an evening filled with them. Our new standard for Caterpillar team events.', location: 'Peoria, IL', rating: 5, event: 'Caterpillar Team Appreciation Dinner' },
    { name: 'Carolyn M.', text: 'Bradley University graduation family dinner — 24 family members at a Peoria-area property. Our son graduated from Bradley and we had family arriving from four states for the weekend. The challenge was a guest list that included toddlers and grandparents and every age in between. The hibachi chef handled every generation simultaneously: fire tricks for the kids, excellent proteins for the adults, and a two-hour performance that kept the entire family at the table until well after sunset. Best graduation event we\'ve done.', location: 'Peoria, IL', rating: 5, event: 'Bradley University Graduation Dinner' },
    { name: 'Lisa P.', text: 'Grandview Drive estate anniversary dinner — 16 guests at our Peoria property. We\'ve lived here for 24 years and host regularly, but this was a genuinely new experience for this property. Chef set up on our west terrace, served filet mignon and lobster tail across the full table, and performed for 90 minutes with complete professionalism. The terrace was spotless when he left. Our guests asked for the contact information before they reached the driveway. Booking again for next year\'s anniversary.', location: 'Peoria, IL', rating: 5, event: 'Grandview Drive Anniversary Dinner' },
  ],
  'rockford': [
    { name: 'Frank H.', text: 'Rock River milestone birthday party — 28 guests at our North Rockford property. We wanted something genuinely different for this occasion — a format that matched the significance of the event rather than another restaurant dinner. The private hibachi chef delivered exactly that. Setup on our back patio, premium proteins across the full table, 90 minutes of live performance, and a cleanup that left the property exactly as it was. Every guest at the table said it was the finest private event they\'d attended in northern Illinois.', location: 'Rockford, IL', rating: 5, event: 'Rock River Milestone Birthday' },
    { name: 'Karen J.', text: 'Rockford University graduation family dinner — 22 guests at our Rockford-area home. Our daughter graduated from RU and we had family coming in from Wisconsin and Iowa. We needed a format that worked in our home without restaurant logistics on graduation weekend. Chef arrived with everything, performed for two hours, left the property spotless. Exactly what graduation weekend family dinners are supposed to be and rarely are.', location: 'Rockford, IL', rating: 5, event: 'Rockford University Graduation Dinner' },
    { name: 'Dennis W.', text: 'Anderson Japanese Gardens-adjacent estate dinner — 18 guests at our Rockford property. The setting was already exceptional — we set up the hibachi in our back garden. Then the chef matched the setting completely. Two hours of live fire performance, excellent proteins including the filet mignon upgrade, and the kind of cleanup that made us wonder if the chef had actually been there. Our guests drove from the Chicago metro and said it was worth every mile. Already booking for next year.', location: 'Rockford, IL', rating: 5, event: 'Estate Garden Dinner' },
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
// Slot 0: T0 (Chicago Executive) + T3 (DuPage/Western) — corporate + graduation focus
// Slot 1: T1 (North Shore Premier) + T4 (Corporate Corridor) — estate + corporate focus
// Slot 2: T2 (North Shore Family) + T5 (Downstate University) — family/state guide focus
const IL_BLOG_POSTS = [
  // Slot 0 — Chicago + DuPage (corporate + graduation)
  [
    {
      slug:     'private-hibachi-graduation-party-chicago-suburbs',
      title:    'Private Hibachi for a Chicago Suburbs Graduation Party: Naperville, Wheaton, Downers Grove, Highland Park, Northbrook, and Orland Park',
      excerpt:  'DuPage County has two of Illinois\'s busiest graduation markets, the North Shore has some of its most celebrated, and the Southwest Suburbs are growing fast. Booking windows, dual-station logistics, and what to expect.',
      category: 'Guide',
      readTime: '9 min read',
    },
    {
      slug:     'hibachi-at-home-illinois-guide',
      title:    'Private Hibachi Chef in Illinois: The Complete Guide to All Six Markets',
      excerpt:  'From Chicago Gold Coast estate dinners and River North corporate events to North Shore graduation parties, DuPage backyard milestones, Schaumburg Fortune 500 gatherings, and UIUC graduation weekends.',
      category: 'Guide',
      readTime: '10 min read',
    },
  ],
  // Slot 1 — North Shore Premier + Corporate Corridor (estate + corporate)
  [
    {
      slug:     'private-hibachi-chicago-north-shore-estate-corporate',
      title:    'Private Hibachi for Chicago Corporate Events and North Shore Estate Dinners',
      excerpt:  'From River North client appreciation dinners and Fulton Market team events to Lake Forest estate celebrations and Schaumburg Fortune 500 milestones — how Chicago\'s corporate and estate markets work.',
      category: 'Guide',
      readTime: '8 min read',
    },
    {
      slug:     'hibachi-at-home-illinois-guide',
      title:    'Private Hibachi Chef in Illinois: The Complete Guide to All Six Markets',
      excerpt:  'From Chicago Gold Coast estate dinners and River North corporate events to North Shore graduation parties, DuPage backyard milestones, Schaumburg Fortune 500 gatherings, and UIUC graduation weekends.',
      category: 'Guide',
      readTime: '10 min read',
    },
  ],
  // Slot 2 — North Shore Family + Downstate University (family events + state guide)
  [
    {
      slug:     'hibachi-at-home-illinois-guide',
      title:    'Private Hibachi Chef in Illinois: The Complete Guide to All Six Markets',
      excerpt:  'From Chicago Gold Coast estate dinners and River North corporate events to North Shore graduation parties, DuPage backyard milestones, Schaumburg Fortune 500 gatherings, and UIUC graduation weekends.',
      category: 'Guide',
      readTime: '10 min read',
    },
    {
      slug:     'private-hibachi-graduation-party-chicago-suburbs',
      title:    'Private Hibachi for a Chicago Suburbs Graduation Party: Naperville, Wheaton, Downers Grove, Highland Park, Northbrook, and Orland Park',
      excerpt:  'DuPage County has two of Illinois\'s busiest graduation markets, the North Shore has some of its most celebrated, and the Southwest Suburbs are growing fast. Booking windows, dual-station logistics, and what to expect.',
      category: 'Guide',
      readTime: '9 min read',
    },
  ],
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
