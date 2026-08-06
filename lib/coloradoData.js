// ─── Colorado Data ─────────────────────────────────────────────────────────
// 20 cities · 6 themes · indices 508-533
// Generic: 508-513 | City-specific: 514-533

// ─── Theme Heroes ──────────────────────────────────────────────────────────
const CO_THEME_HEROES = [
  '/pics/hibachi-private-chef-1.jpg', // T0 — Denver Luxury Core
  '/pics/hibachi-event.jpg',           // T1 — Denver Corporate & Urban
  '/pics/hibachi-at-home.jpg',         // T2 — Denver Suburban Family
  '/pics/backyard-hibachi-3.jpg',      // T3 — Boulder & Northern Front Range
  '/pics/hibachi-pool-party.jpg',      // T4 — Colorado Springs & South Front Range
  '/pics/traveling-hibachi.jpg',       // T5 — Mountain Resort & Ski Country
]

// ─── Theme H1 Prefixes (generic fallback) ──────────────────────────────────
const CO_THEME_H1_PREFIXES = [
  'Hibachi at Home in',       // T0
  'Private Hibachi Chef in',  // T1
  'Hibachi at Home in',       // T2
  'Private Hibachi Chef in',  // T3
  'Hibachi Catering in',      // T4
  'Mobile Hibachi Chef in',   // T5
]

// ─── Profile H1 Prefixes (city-specific, 20 entries) ───────────────────────
const CO_PROFILE_H1_PREFIXES = [
  'Private Hibachi Chef in',  // 0  — Denver
  'Hibachi at Home in',       // 1  — Cherry Hills Village
  'Hibachi Catering in',      // 2  — Greenwood Village
  'Hibachi at Home in',       // 3  — Centennial
  'Hibachi at Home in',       // 4  — Highlands Ranch
  'Private Hibachi Chef in',  // 5  — Boulder
  'Hibachi Catering in',      // 6  — Broomfield
  'Hibachi at Home in',       // 7  — Louisville
  'Hibachi at Home in',       // 8  — Fort Collins
  'Hibachi at Home in',       // 9  — Arvada
  'Hibachi Catering in',      // 10 — Colorado Springs
  'Hibachi at Home in',       // 11 — Parker
  'Hibachi at Home in',       // 12 — Castle Rock
  'Backyard Hibachi in',      // 13 — Lone Tree
  'Backyard Hibachi in',      // 14 — Lakewood
  'Private Hibachi Chef in',  // 15 — Aspen
  'Private Hibachi Chef in',  // 16 — Vail
  'Mobile Hibachi Chef in',   // 17 — Breckenridge
  'Mobile Hibachi Chef in',   // 18 — Steamboat Springs
  'Mobile Hibachi Chef in',   // 19 — Telluride
]

// ─── Custom Meta (all 20 cities) ───────────────────────────────────────────
const CO_CUSTOM_META = {
  'denver':               { title: 'Private Hibachi Chef in Denver, CO | Cherry Creek Estate Dinners, Washington Park Graduation Parties & LoDo Corporate Events', desc: 'A certified teppanyaki chef travels to your Denver property — Cherry Creek anniversary dinners, Washington Park graduation parties, Highlands backyard events, and LoDo corporate team dinners. From $60/adult.' },
  'cherry-hills-village': { title: 'Hibachi at Home in Cherry Hills Village, CO | Estate Dinners & Milestone Celebrations', desc: 'Private hibachi at your Cherry Hills Village estate — anniversary dinners, milestone birthdays, and intimate celebrations at the properties built for hosting. Premium proteins standard. From $60/adult.' },
  'greenwood-village':    { title: 'Hibachi Catering in Greenwood Village, CO | Denver Tech Center Corporate Events & Estate Dinners', desc: 'Corporate team dinners in the DTC corridor and estate celebrations in Greenwood Village — a certified teppanyaki chef travels to your venue with the full self-contained setup. From $60/adult.' },
  'centennial':           { title: 'Hibachi at Home in Centennial, CO | Graduation Parties, Backyard Dinners & Arapahoe Family Celebrations', desc: 'Centennial graduation parties, Cherry Creek School District family milestones, and backyard celebrations — your private hibachi chef arrives at your property with everything included. From $60/adult.' },
  'highlands-ranch':      { title: 'Hibachi at Home in Highlands Ranch, CO | Graduation Parties & Douglas County Backyard Celebrations', desc: 'Highlands Ranch graduation parties, Douglas County family milestones, and backyard celebrations — private hibachi so you\'re actually at your own event. Graduation season books 4–6 weeks ahead. From $60/adult.' },
  'boulder':              { title: 'Private Hibachi Chef in Boulder, CO | CU Graduation Parties, Tech Exec Dinners & Flatirons Estate Events', desc: 'CU Boulder graduation weekend, tech exec home dinners, Chautauqua estate events — a certified teppanyaki chef travels to your Boulder property with the full live-fire setup. From $60/adult.' },
  'broomfield':           { title: 'Hibachi Catering in Broomfield, CO | Interlocken Corporate Events & Home Celebrations', desc: 'Broomfield corporate team dinners for DISH, Oracle, and Vail Resorts campus communities, plus home celebrations across the tech corridor — a certified teppanyaki chef travels to your venue. From $60/adult.' },
  'louisville':           { title: 'Hibachi at Home in Louisville, CO | Old Town Celebrations & Boulder County Estate Dinners', desc: 'Old Town Louisville anniversary dinners, Coal Creek estate celebrations, and milestone events in Boulder County\'s most established residential community. Private hibachi from $60/adult.' },
  'fort-collins':         { title: 'Hibachi at Home in Fort Collins, CO | CSU Graduation Parties, Old Town Events & Horsetooth Rentals', desc: 'CSU graduation weekend, Old Town Fort Collins bachelorette rentals, and Horsetooth Reservoir-adjacent home celebrations — private hibachi arrives at your property. From $60/adult.' },
  'arvada':               { title: 'Hibachi at Home in Arvada, CO | Graduation Parties, Olde Town Celebrations & Northwest Denver Events', desc: 'Arvada graduation parties, Olde Town celebrations, and Ralston Creek neighborhood backyard events — a private hibachi chef travels to your Arvada property with everything included. From $60/adult.' },
  'colorado-springs':     { title: 'Hibachi Catering in Colorado Springs, CO | Military Homecomings, USAFA Graduation Parties & Broadmoor Estate Events', desc: 'Military homecoming celebrations, USAFA graduation week family dinners, and Broadmoor estate events — a certified teppanyaki chef arrives at your Colorado Springs property fully self-contained. From $60/adult.' },
  'parker':               { title: 'Hibachi at Home in Parker, CO | Graduation Parties & Douglas County Backyard Celebrations', desc: 'Parker graduation parties for Chaparral, Legend, and Ponderosa High School families — a private hibachi chef arrives at your backyard so you\'re actually at your own event. From $60/adult.' },
  'castle-rock':          { title: 'Hibachi at Home in Castle Rock, CO | Estate Dinners, Graduation Parties & I-25 Corridor Celebrations', desc: 'Castle Rock milestone dinners, Terrain and Castle Oaks neighborhood celebrations, and graduation parties in Douglas County\'s fastest-growing city. Private hibachi from $60/adult.' },
  'lone-tree':            { title: 'Backyard Hibachi in Lone Tree, CO | RidgeGate Estate Dinners & South Denver Celebrations', desc: 'RidgeGate estate celebrations, Park Meadows-area anniversary dinners, and Lone Tree milestone events — a private hibachi chef arrives at your luxury suburban property. From $60/adult.' },
  'lakewood':             { title: 'Backyard Hibachi in Lakewood, CO | Graduation Parties, Green Mountain Celebrations & West Denver Events', desc: 'Green Mountain neighborhood parties, Bear Creek graduation celebrations, and Belmar-adjacent backyard milestones — a private hibachi chef arrives at your Lakewood property. From $60/adult.' },
  'aspen':                { title: 'Private Hibachi Chef in Aspen, CO | Snowmass Chalet Dinners, Bachelorette Weekends & Red Mountain Estate Events', desc: 'Your Aspen Mountain rental, Snowmass Village chalet, or Red Mountain estate — a certified teppanyaki chef arrives with a self-contained propane setup. No hookup required. Peak dates book 6–10 weeks ahead.' },
  'vail':                 { title: 'Private Hibachi Chef in Vail, CO | Ski Chalet Dinners, Beaver Creek Estate Events & Bachelorette Weekends', desc: 'Vail Village chalet dinners, Lionshead vacation rental events, and Beaver Creek estate celebrations — a certified teppanyaki chef arrives fully self-contained. No hookup needed. From $60/adult.' },
  'breckenridge':         { title: 'Mobile Hibachi Chef in Breckenridge, CO | Ski Chalet Dinners, Bachelorette Weekends & Summit County Vacation Rentals', desc: 'Your Peak 8 rental, Blue River chalet, or Main Street vacation condo — a certified teppanyaki chef arrives with everything included. No gas hookup. Self-contained propane. Summit County\'s top ski destination.' },
  'steamboat-springs':    { title: 'Mobile Hibachi Chef in Steamboat Springs, CO | Ski Town Cabin Dinners, Family Reunion Ranches & Yampa Valley Events', desc: 'Your Steamboat Springs cabin rental, Yampa Valley ranch property, or Fish Creek Falls vacation home — a certified teppanyaki chef arrives fully self-contained. Ski Town USA events from $60/adult.' },
  'telluride':            { title: 'Mobile Hibachi Chef in Telluride, CO | Mountain Village Chalet Dinners, Film Festival Weekends & Destination Events', desc: 'Your Mountain Village chalet, Box Canyon vacation rental, or Telluride festival property — a certified teppanyaki chef arrives fully self-contained. No hookup required. Peak dates book months ahead.' },
}

// ─── City Image Map (experience image, 20 entries) ─────────────────────────
const CO_CITY_IMAGE_MAP = {
  'denver':               { src: '/pics/hibachi-photo-1.jpg',       alt: (city) => `Private hibachi chef event in ${city}, Colorado` },
  'cherry-hills-village': { src: '/pics/hibachi-colorado.jpg',      alt: (city) => `Estate hibachi dinner in ${city}, CO` },
  'greenwood-village':    { src: '/pics/hibachi-chef-2.jpg',        alt: (city) => `Corporate hibachi catering in ${city}, CO` },
  'centennial':           { src: '/pics/hibachi-photo-2.jpg',       alt: (city) => `Hibachi at home in ${city}, Colorado` },
  'highlands-ranch':      { src: '/pics/hibachi-shot-2.jpg',        alt: (city) => `Backyard hibachi party in ${city}, CO` },
  'boulder':              { src: '/pics/hibachi-catering-3.jpg',    alt: (city) => `Private hibachi chef in ${city}, CO` },
  'broomfield':           { src: '/pics/private-party-chef-6.jpg',  alt: (city) => `Hibachi catering event in ${city}, Colorado` },
  'louisville':           { src: '/pics/hibachi-dallas-2.jpg',      alt: (city) => `Hibachi at home in ${city}, CO` },
  'fort-collins':         { src: '/pics/hibachi-hart.jpg',          alt: (city) => `Private hibachi party in ${city}, Colorado` },
  'arvada':               { src: '/pics/hibachi-shot-1.jpg',        alt: (city) => `Hibachi at home in ${city}, CO` },
  'colorado-springs':     { src: '/pics/mobile-hibachi-2.jpg',      alt: (city) => `Hibachi catering in ${city}, CO` },
  'parker':               { src: '/pics/hibachi-catering.jpg',      alt: (city) => `Backyard hibachi in ${city}, Colorado` },
  'castle-rock':          { src: '/pics/hibachi-catering-2.jpg',    alt: (city) => `Hibachi at home in ${city}, CO` },
  'lone-tree':            { src: '/pics/hibachi-pic-3.jpg',         alt: (city) => `Backyard hibachi event in ${city}, CO` },
  'lakewood':             { src: '/pics/backyard-hibachi.jpg',      alt: (city) => `Backyard hibachi party in ${city}, Colorado` },
  'aspen':                { src: '/pics/hibachi-dallas-home.jpg',   alt: (city) => `Private hibachi chef at ${city} chalet` },
  'vail':                 { src: '/pics/private-hibachi.jpg',       alt: (city) => `Private hibachi chef in ${city}, Colorado` },
  'breckenridge':         { src: '/pics/hibachi-photo-1.jpg',       alt: (city) => `Mobile hibachi chef in ${city}, CO` },
  'steamboat-springs':    { src: '/pics/hibachi-catering.jpg',      alt: (city) => `Mobile hibachi chef in ${city}, Colorado` },
  'telluride':            { src: '/pics/backyard-hibachi-2.jpg',    alt: (city) => `Mobile hibachi chef in ${city}, CO` },
}

// ─── Support Images (testimonial + CTA, per city) ──────────────────────────
const CO_SUPPORT_IMAGES = {
  'denver':               { testimonial: { src: '/pics/hibachi-catering-2.jpg',   alt: (c) => `Private hibachi event in ${c}`,       caption: 'Denver Corporate & Home Events',        trustBadge: '4.9★ · 200+ Denver Events' }, cta: { src: '/pics/hibachi-hart.jpg',         alt: (c) => `Book your Denver hibachi event`,   caption: 'Same-day quotes · From $60/adult'      } },
  'cherry-hills-village': { testimonial: { src: '/pics/hibachi-shot-2.jpg',       alt: (c) => `Estate hibachi dinner in ${c}`,       caption: 'Cherry Hills Village Estate Events',    trustBadge: '5.0★ · Premium Estate Dining'    }, cta: { src: '/pics/hibachi-catering-3.jpg',   alt: (c) => `Estate hibachi in ${c}`,          caption: 'Premium proteins · Full setup included' } },
  'greenwood-village':    { testimonial: { src: '/pics/hibachi-shot-1.jpg',       alt: (c) => `Corporate hibachi event in ${c}`,     caption: 'DTC Corporate Events',                  trustBadge: '4.9★ · Trusted by DTC Teams'     }, cta: { src: '/pics/hibachi-pic-2.jpg',        alt: (c) => `Book your ${c} hibachi event`,    caption: 'Corporate packages · From $60/adult'   } },
  'centennial':           { testimonial: { src: '/pics/backyard-hibachi-2.jpg',   alt: (c) => `Hibachi graduation party in ${c}`,   caption: 'Centennial Graduation Parties',         trustBadge: '4.9★ · Douglas & Arapahoe County' }, cta: { src: '/pics/hibachi-chef-at-home.jpg', alt: (c) => `Book your ${c} graduation party`, caption: 'Graduation season · From $60/adult'    } },
  'highlands-ranch':      { testimonial: { src: '/pics/hibachi-chef-home.jpg',    alt: (c) => `Backyard hibachi in ${c}`,           caption: 'Highlands Ranch Family Events',         trustBadge: '4.9★ · 100+ Douglas County Events'}, cta: { src: '/pics/hibachi-dallas-home.jpg',  alt: (c) => `Book your ${c} hibachi event`,    caption: 'May/June graduation season fills fast' } },
  'boulder':              { testimonial: { src: '/pics/hibachi-chef-2.jpg',       alt: (c) => `Private hibachi event in ${c}`,      caption: 'Boulder Private Dining Events',         trustBadge: '5.0★ · CU Graduation Season'     }, cta: { src: '/pics/hibachi-colorado.jpg',     alt: (c) => `Book your Boulder hibachi event`, caption: 'CU graduation · From $60/adult'         } },
  'broomfield':           { testimonial: { src: '/pics/hibachi-austin-home.jpg',  alt: (c) => `Corporate hibachi in ${c}`,          caption: 'Broomfield Corporate Events',           trustBadge: '4.9★ · Tech Corridor Trusted'    }, cta: { src: '/pics/mobile-hibachi-2.jpg',     alt: (c) => `Book your ${c} hibachi event`,    caption: 'Corporate rates · Same-day quotes'     } },
  'louisville':           { testimonial: { src: '/pics/hibachi-photo-1.jpg',      alt: (c) => `Hibachi dinner in ${c}`,             caption: 'Louisville Home Events',                trustBadge: '5.0★ · Boulder County Trusted'   }, cta: { src: '/pics/hibachi-catering-2.jpg',   alt: (c) => `Book your Louisville event`,      caption: 'From $60/adult · Same-day quotes'      } },
  'fort-collins':         { testimonial: { src: '/pics/private-party-chef-6.jpg', alt: (c) => `Private hibachi chef in ${c}`,      caption: 'Fort Collins CSU Graduation Events',    trustBadge: '4.9★ · CSU Graduation Season'   }, cta: { src: '/pics/hibachi-shot-1.jpg',       alt: (c) => `Book your Fort Collins event`,    caption: 'CSU graduation season · From $60/adult'} },
  'arvada':               { testimonial: { src: '/pics/hibachi-pic-2.jpg',        alt: (c) => `Backyard hibachi party in ${c}`,     caption: 'Arvada Backyard Events',                trustBadge: '4.9★ · Northwest Denver Trusted' }, cta: { src: '/pics/private-hibachi.jpg',      alt: (c) => `Book your ${c} hibachi event`,    caption: 'From $60/adult · Graduation season'    } },
  'colorado-springs':     { testimonial: { src: '/pics/hibachi-austin-home.jpg',  alt: (c) => `Hibachi catering in ${c}`,           caption: 'Colorado Springs Military & Family',    trustBadge: '4.9★ · Military Community Trusted'}, cta: { src: '/pics/hibachi-chef-at-home.jpg', alt: (c) => `Book your ${c} hibachi event`,    caption: 'Military homecomings · USAFA season'   } },
  'parker':               { testimonial: { src: '/pics/hibachi-pic-3.jpg',        alt: (c) => `Backyard hibachi in ${c}`,           caption: 'Parker Family Celebrations',            trustBadge: '4.9★ · Douglas County Events'    }, cta: { src: '/pics/hibachi-dallas-2.jpg',     alt: (c) => `Book your ${c} graduation party`, caption: 'May/June graduation · From $60/adult'  } },
  'castle-rock':          { testimonial: { src: '/pics/backyard-hibachi.jpg',     alt: (c) => `Hibachi at home in ${c}`,            caption: 'Castle Rock Home Entertaining',         trustBadge: '4.9★ · I-25 Corridor Trusted'   }, cta: { src: '/pics/hibachi-photo-2.jpg',      alt: (c) => `Book your ${c} hibachi event`,    caption: 'From $60/adult · Same-day quotes'      } },
  'lone-tree':            { testimonial: { src: '/pics/hibachi-chef-home.jpg',    alt: (c) => `Backyard hibachi in ${c}`,           caption: 'Lone Tree Estate Events',               trustBadge: '5.0★ · RidgeGate Community'      }, cta: { src: '/pics/mobile-hibachi.jpg',       alt: (c) => `Book your ${c} hibachi event`,    caption: 'Premium proteins · From $60/adult'     } },
  'lakewood':             { testimonial: { src: '/pics/mobile-hibachi.jpg',       alt: (c) => `Backyard hibachi party in ${c}`,     caption: 'Lakewood Backyard Celebrations',        trustBadge: '4.9★ · Jefferson County Trusted' }, cta: { src: '/pics/hibachi-photo-1.jpg',      alt: (c) => `Book your Lakewood hibachi event`, caption: 'From $60/adult · Graduation season'    } },
  'aspen':                { testimonial: { src: '/pics/hibachi-pic-2.jpg',        alt: (c) => `Private hibachi chef in ${c}`,      caption: 'Aspen Estate & Chalet Events',          trustBadge: '5.0★ · Aspen Mountain Season'   }, cta: { src: '/pics/hibachi-shot-2.jpg',       alt: (c) => `Reserve your Aspen hibachi date`, caption: 'Peak season books 6–10 weeks ahead'    } },
  'vail':                 { testimonial: { src: '/pics/mobile-hibachi-2.jpg',     alt: (c) => `Private hibachi chef in ${c}`,      caption: 'Vail Village & Beaver Creek Events',   trustBadge: '5.0★ · Vail Valley Trusted'     }, cta: { src: '/pics/hibachi-chef-2.jpg',       alt: (c) => `Reserve your Vail hibachi date`,  caption: 'Peak season books 4–8 weeks ahead'     } },
  'breckenridge':         { testimonial: { src: '/pics/hibachi-colorado.jpg',     alt: (c) => `Mobile hibachi chef in ${c}`,       caption: 'Summit County Ski Town Events',         trustBadge: '4.9★ · Summit County Trusted'   }, cta: { src: '/pics/backyard-hibachi-2.jpg',   alt: (c) => `Reserve your ${c} hibachi date`,  caption: 'No hookup required · From $60/adult'   } },
  'steamboat-springs':    { testimonial: { src: '/pics/hibachi-hart.jpg',         alt: (c) => `Mobile hibachi in ${c}`,            caption: 'Ski Town USA Events',                   trustBadge: '4.9★ · Yampa Valley Trusted'    }, cta: { src: '/pics/hibachi-chef-at-home.jpg', alt: (c) => `Reserve your ${c} hibachi date`,  caption: 'Self-contained propane · From $60/adult'} },
  'telluride':            { testimonial: { src: '/pics/hibachi-shot-1.jpg',       alt: (c) => `Mobile hibachi chef in ${c}`,       caption: 'Telluride Mountain Events',             trustBadge: '5.0★ · Mountain Village Trusted' }, cta: { src: '/pics/hibachi-dallas-2.jpg',     alt: (c) => `Reserve your ${c} hibachi date`,  caption: 'Peak dates book months ahead'          } },
}

// ─── Major Cities Map (all 20) ─────────────────────────────────────────────
const CO_MAJOR_CITIES = {
  'denver':               { v: 1, profileIdx: 0,  nearby: ['Cherry Hills Village', 'Greenwood Village', 'Centennial', 'Highlands Ranch', 'Broomfield'] },
  'cherry-hills-village': { v: 0, profileIdx: 1,  nearby: ['Denver', 'Greenwood Village', 'Centennial', 'Lone Tree'] },
  'greenwood-village':    { v: 1, profileIdx: 2,  nearby: ['Denver', 'Cherry Hills Village', 'Centennial', 'Lone Tree'] },
  'centennial':           { v: 2, profileIdx: 3,  nearby: ['Highlands Ranch', 'Greenwood Village', 'Parker', 'Lone Tree'] },
  'highlands-ranch':      { v: 2, profileIdx: 4,  nearby: ['Centennial', 'Parker', 'Castle Rock', 'Lone Tree'] },
  'boulder':              { v: 3, profileIdx: 5,  nearby: ['Louisville', 'Broomfield', 'Arvada', 'Fort Collins'] },
  'broomfield':           { v: 1, profileIdx: 6,  nearby: ['Boulder', 'Louisville', 'Arvada', 'Denver'] },
  'louisville':           { v: 3, profileIdx: 7,  nearby: ['Boulder', 'Broomfield', 'Arvada'] },
  'fort-collins':         { v: 3, profileIdx: 8,  nearby: ['Boulder', 'Broomfield', 'Arvada'] },
  'arvada':               { v: 2, profileIdx: 9,  nearby: ['Denver', 'Lakewood', 'Broomfield', 'Boulder'] },
  'colorado-springs':     { v: 4, profileIdx: 10, nearby: ['Castle Rock', 'Lone Tree', 'Parker'] },
  'parker':               { v: 2, profileIdx: 11, nearby: ['Highlands Ranch', 'Centennial', 'Castle Rock', 'Lone Tree'] },
  'castle-rock':          { v: 4, profileIdx: 12, nearby: ['Parker', 'Lone Tree', 'Highlands Ranch', 'Colorado Springs'] },
  'lone-tree':            { v: 4, profileIdx: 13, nearby: ['Greenwood Village', 'Centennial', 'Parker', 'Highlands Ranch'] },
  'lakewood':             { v: 2, profileIdx: 14, nearby: ['Denver', 'Arvada', 'Broomfield'] },
  'aspen':                { v: 5, profileIdx: 15, nearby: ['Vail', 'Breckenridge', 'Steamboat Springs'] },
  'vail':                 { v: 5, profileIdx: 16, nearby: ['Aspen', 'Breckenridge', 'Steamboat Springs'] },
  'breckenridge':         { v: 5, profileIdx: 17, nearby: ['Vail', 'Aspen', 'Denver'] },
  'steamboat-springs':    { v: 5, profileIdx: 18, nearby: ['Vail', 'Aspen', 'Breckenridge'] },
  'telluride':            { v: 5, profileIdx: 19, nearby: ['Aspen', 'Steamboat Springs', 'Vail'] },
}

// ─── Hero Subtitles (per theme) ────────────────────────────────────────────
const CO_HERO_SUBTITLES = [
  (city) => `Estate Private Dining · Premium Proteins · Full Setup & Cleanup · Serving ${city}`,
  (city) => `Corporate Events · Home Celebrations · Live Teppanyaki · Serving All of ${city}`,
  (city) => `Graduation Parties · Backyard Milestones · Private Chef · Serving ${city} & Surrounding Areas`,
  (city) => `CU & CSU Graduation Season · Home Celebrations · Live Fire · Serving ${city}`,
  (city) => `Military Homecomings · Graduation Parties · Corporate Events · Serving ${city}`,
  (city) => `Ski Chalet Dinners · Bachelorette Weekends · No Hookup Required · Serving ${city}`,
]

// ─── Generic Intro Variants (T0–T5, indices 508–513) ───────────────────────
export const CO_INTRO_VARIANTS = [
  // 508 — T0 Denver Luxury Core
  {
    headline: (city) => `Hibachi at Home in ${city}: Colorado's Estate Private Dining Experience`,
    opening:  (city, state) => `${city} sets the standard for how a Colorado occasion should be hosted — and private hibachi at home is the format the property was built for. A certified teppanyaki chef arrives at your estate with a fully self-contained propane teppan grill, hand-selected proteins, and a live cooking performance that transforms your terrace or courtyard into the finest private dining room in south Denver.`,
    middle:   (city, state) => `Your chef brings everything: the grill, propane, filet mignon and lobster tail, fried rice, vegetables, house-made sauces, plates, and chopsticks. The live teppanyaki performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order for your guests. Full cleanup when dinner ends. Your property is exactly as it was.`,
    closing:  (city, state) => `Estate events across Cherry Hills Village and south Denver book 3–5 weeks ahead in summer and holiday season — submit your date now for a same-day quote.`,
  },
  // 509 — T1 Denver Corporate & Urban
  {
    headline: (city) => `Private Hibachi Chef in ${city}: Corporate Events and Home Celebrations`,
    opening:  (city, state) => `From LoDo rooftop team dinners to Cherry Creek home anniversary events, from Greenwood Village client appreciation gatherings to Highlands backyard celebrations — a private hibachi chef who travels to your Denver-area property with a fully self-contained setup and puts on the performance your group has been waiting for.`,
    middle:   (city, state) => `The chef arrives with the propane teppan grill, all proteins, fresh ingredients, house-made sauces, and every piece of equipment needed. For groups over 25, dual chef stations ensure everyone eats at the same time. Complete setup in 20–30 minutes, live performance for 90–120 minutes, full cleanup when dinner ends.`,
    closing:  (city, state) => `Same-day quotes for any Denver metro date. Corporate holiday season books 4–6 weeks ahead — reserve now with a deposit to lock your date.`,
  },
  // 510 — T2 Denver Suburban Family
  {
    headline: (city) => `Hibachi at Home in ${city}: Graduation Parties and Backyard Celebrations`,
    opening:  (city, state) => `${city} graduation parties, birthday milestones, and family celebrations — a private hibachi chef who arrives at your backyard with everything needed so you're actually present at the event you spent months planning. No restaurant, no logistics, no driving. Your patio becomes the venue.`,
    middle:   (city, state) => `Your chef brings the self-contained propane grill, all proteins, fried rice, vegetables, miso soup, salad, house-made sauces, plates, and chopsticks. Every dish cooked to order in front of your guests. For the graduation party that seats 40, dual stations keep everyone eating at the same time. Complete setup and full cleanup included.`,
    closing:  (city, state) => `Graduation Saturdays in May and June book 4–6 weeks ahead — submit your date now for a same-day quote.`,
  },
  // 511 — T3 Boulder & Northern Front Range
  {
    headline: (city) => `Private Hibachi Chef in ${city}: CU Graduation, Home Dinners, and Estate Events`,
    opening:  (city, state) => `CU Boulder graduation weekend, CSU commencement, tech exec home dinners in South ${city}, Chautauqua estate celebrations, and vacation rental bachelorette events on the Front Range — a certified teppanyaki chef who travels to your ${city} property with the full live-fire setup and puts on the performance that anchors the evening.`,
    middle:   (city, state) => `The chef arrives fully self-contained with a propane teppan grill, all proteins including premium upgrades, fresh ingredients, and every piece of equipment. No gas hookup, no outdoor kitchen required at any Front Range property. Live performance for 90–120 minutes from first flame to last plate, complete cleanup when dinner ends.`,
    closing:  (city, state) => `CU and CSU graduation weekends book 5–7 weeks ahead — if you have a graduation date, reserve it now.`,
  },
  // 512 — T4 Colorado Springs & South Front Range
  {
    headline: (city) => `Hibachi Events in ${city}: Military Homecomings, Graduation Parties, and Estate Dinners`,
    opening:  (city, state) => `Military homecoming celebrations at Fort Carson, USAFA graduation week family dinners, Broadmoor estate milestone events, and Douglas County backyard graduation parties — ${city} is a market that runs on celebrations, and private hibachi is the format that works for every one of them. A certified teppanyaki chef arrives at your property fully self-contained, performs for your group, and leaves everything spotless.`,
    middle:   (city, state) => `Your chef brings the propane teppan grill, all proteins, fried rice, vegetables, house-made sauces, and complete equipment. No gas hookup required at any Front Range property. Single station for up to 25 guests, dual stations for larger events. Complete setup, 90–120 minute live performance, full cleanup.`,
    closing:  (city, state) => `USAFA graduation week and summer Colorado Springs dates book 5–7 weeks ahead — reserve your date now with a deposit.`,
  },
  // 513 — T5 Mountain Resort & Ski Country
  {
    headline: (city) => `Private Hibachi at Your ${city} Rental: Mountain Estate Events with No Hookup Required`,
    opening:  (city, state) => `Your Aspen Mountain chalet, your Vail Village ski-in rental, your Breckenridge Peak 8 vacation home, your Telluride festival property — a certified teppanyaki chef arrives at your ${city} rental with a fully self-contained propane teppan grill, all proteins, and the complete live-fire setup. No gas hookup. No outdoor kitchen. The performance happens on your deck, in the setting that brought your group here.`,
    middle:   (city, state) => `The chef arrives 20–30 minutes before the performance, sets up on any flat outdoor surface, and performs for 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, precision knife work, and every dish cooked to order. Bachelorette weekends, family ski reunions, corporate mountain retreats, and destination anniversary events all on the same fully self-contained setup.`,
    closing:  (city, state) => `Peak season mountain dates book 6–10 weeks ahead — if you have a ${city} weekend, reserve the chef at the same time you confirm the rental.`,
  },
]

// ─── Generic Closing Variants (T0–T5, indices 508–513) ─────────────────────
export const CO_CLOSING_VARIANTS = [
  // 508 — T0
  { headline: (city) => `Book Your ${city} Estate Event`, sub: (city) => `Most ${city} quotes are returned the same day. Confirm with a deposit — your date is locked immediately.`, urgency: 'Cherry Hills Village and south Denver estate dates fill 3–5 weeks ahead. Reserve yours now.', cta: { label: 'Reserve Your Date', caption: 'Full setup included · From $60/adult' } },
  // 509 — T1
  { headline: (city) => `Book Your ${city} Hibachi Event`, sub: (city) => `Corporate team dinners, home celebrations, and client events in ${city} — submit your date and address for a same-day quote.`, urgency: 'Holiday party season and summer corporate dates fill fast. Lock your date with a deposit.', cta: { label: 'Request a Quote', caption: 'Same-day quotes · Events from $60/adult' } },
  // 510 — T2
  { headline: (city) => `Book Your ${city} Backyard Event`, sub: (city) => `Graduation Saturdays, birthday parties, and family milestones in ${city} — get a same-day quote for your backyard date.`, urgency: 'Graduation season dates in May and June fill 4–6 weeks ahead. Submit your date now.', cta: { label: 'Book Your Date', caption: 'From $60/adult · Graduation dates book fast' } },
  // 511 — T3
  { headline: (city) => `Book Your ${city} Private Hibachi Event`, sub: (city) => `Graduation weekend, home dinner, outdoor estate celebration — a same-day quote for any ${city} date.`, urgency: 'CU and CSU graduation weekends book 5–7 weeks ahead. If you have a date, reserve it now.', cta: { label: 'Get a Same-Day Quote', caption: 'From $60/adult · Graduation season fills fast' } },
  // 512 — T4
  { headline: (city) => `Book Your ${city} Hibachi Event`, sub: (city) => `Military homecomings, graduation parties, and estate dinners in ${city} — same-day quotes, deposit locks your date immediately.`, urgency: 'USAFA graduation week and summer dates fill 5–7 weeks ahead. Reserve your date now.', cta: { label: 'Request Your Quote', caption: 'From $60/adult · No surprises at booking' } },
  // 513 — T5
  { headline: (city) => `Book Your ${city} Mountain Hibachi Event`, sub: (city) => `Ski season, summer mountain events, and bachelorette weekends — a fully self-contained chef arrives at your ${city} rental with everything needed.`, urgency: 'Peak ski season and summer mountain weekends book 6–10 weeks ahead. Reserve your rental date now.', cta: { label: 'Reserve Your Mountain Date', caption: 'From $60/adult · No hookup required' } },
]

// ─── City-Specific Intros (20 entries, indices 514–533) ────────────────────
export const CO_CITY_INTROS = [
  // 514 — Denver
  {
    headline: (city, state) => `Private Hibachi Chef in Denver: Cherry Creek, Washington Park, Highlands, and LoDo`,
    opening:  (city, state) => `From Cherry Creek estate anniversary dinners to Washington Park backyard graduation parties, from LoDo corporate client events to Highlands neighborhood celebrations — a certified teppanyaki chef travels to your Denver property with a fully self-contained propane teppan grill and puts on the live-fire performance your group has been anticipating. Denver's residential neighborhoods and outdoor entertaining culture make private hibachi the natural format for every occasion that matters.`,
    middle:   (city, state) => `Your chef brings the propane grill, all proteins including premium upgrades, fried rice, vegetables, miso soup, house-made sauces, and complete equipment. No gas hookup, no outdoor kitchen required at any Denver property. Single station for up to 25 guests, dual stations for larger events. Complete setup, 90–120 minute live performance, full cleanup.`,
    closing:  (city, state) => `Same-day quotes for any Denver neighborhood — submit your date and address and we respond immediately.`,
  },
  // 515 — Cherry Hills Village
  {
    headline: (city, state) => `Hibachi at Home in Cherry Hills Village: Estate Private Dining for the Properties Built for It`,
    opening:  (city, state) => `Your Cherry Hills Village estate — Country Club Road, Cherryridge, the Quincy corridor — was built for evenings like this. A certified teppanyaki chef arrives at your property with the full live-fire setup, premium proteins as the standard, and a performance that transforms your outdoor terrace or garden into the finest private dining room in south Denver. No restaurant reservation can replicate what your own estate already is.`,
    middle:   (city, state) => `The chef brings a fully self-contained propane teppan grill, filet mignon and lobster tail across the whole table if you want it, fried rice, vegetables, house-made sauces, and complete equipment. Setup in 20–30 minutes. Live performance for 90–120 minutes. Full cleanup when dinner ends — your property is exactly as it was.`,
    closing:  (city, state) => `Cherry Hills Village estate dates in summer and holiday season fill 3–5 weeks ahead — submit your date for a same-day quote.`,
  },
  // 516 — Greenwood Village
  {
    headline: (city, state) => `Hibachi Catering in Greenwood Village: DTC Corporate Events and Estate Celebrations`,
    opening:  (city, state) => `Denver Tech Center corporate team dinners, Greenwood Village estate celebrations, and DTC corridor client appreciation events — a certified teppanyaki chef arrives at your Greenwood Village property or venue with a fully self-contained setup and performs for any size group. The format that makes a corporate dinner feel like a genuine event instead of an obligation.`,
    middle:   (city, state) => `The chef brings the propane teppan grill, all proteins, complete ingredients, and equipment. No gas hookup required. For corporate groups over 25, dual stations ensure everyone eats at the same time. Complete setup, live performance, full cleanup — your venue is exactly as it was when the chef leaves.`,
    closing:  (city, state) => `DTC holiday corporate season books November–December dates 5–7 weeks ahead — request a quote now to lock your date.`,
  },
  // 517 — Centennial
  {
    headline: (city, state) => `Hibachi at Home in Centennial: Graduation Parties and Arapahoe County Backyard Celebrations`,
    opening:  (city, state) => `Centennial graduation parties for Cherry Creek School District families, Arapahoe County milestone birthdays, and backyard celebrations from the Smoky Hill corridor to Willow Creek — a private hibachi chef arrives at your property with everything needed so you're actually present at the event you spent months planning. No restaurant, no logistics, no driving after the ceremony.`,
    middle:   (city, state) => `Your chef brings the propane teppan grill, all proteins, fried rice, vegetables, miso soup, salad, house-made sauces, and complete equipment. For graduation parties of 30–50 guests, dual stations keep everyone eating at the same time. Setup in 20–30 minutes, full performance, complete cleanup.`,
    closing:  (city, state) => `Centennial graduation Saturdays in May and June book 4–6 weeks ahead — submit your date now to reserve.`,
  },
  // 518 — Highlands Ranch
  {
    headline: (city, state) => `Hibachi at Home in Highlands Ranch: Graduation Parties for Thunderridge, Rock Canyon, and Mountain Vista Families`,
    opening:  (city, state) => `Highlands Ranch graduation parties for Thunderridge, Rock Canyon, and Mountain Vista families — a private hibachi chef who arrives at your backyard with everything needed so you're actually at your own event instead of managing the kitchen. Douglas County backyards are built for this. The chef uses your outdoor space the way it was designed to be used.`,
    middle:   (city, state) => `The chef brings the propane teppan grill, all proteins including filet mignon upgrades, fried rice, vegetables, miso soup, house-made sauces, and complete equipment. For graduation parties of 30–50 guests, dual stations ensure everyone eats at the same time. Complete setup, live performance, full cleanup.`,
    closing:  (city, state) => `Highlands Ranch May and June graduation Saturdays fill 4–6 weeks ahead — if you have a ceremony date, reserve the chef now.`,
  },
  // 519 — Boulder
  {
    headline: (city, state) => `Private Hibachi Chef in Boulder: CU Graduation, Tech Exec Dinners, and Flatirons Estate Events`,
    opening:  (city, state) => `CU Boulder graduation weekend, tech exec home dinners on South Boulder Road, Chautauqua estate celebrations, and Pearl Street-adjacent backyard events — a certified teppanyaki chef travels to your Boulder property with the full live-fire setup. Boulder's residential culture and outdoor entertaining infrastructure make private hibachi the natural format for the occasions that matter most in a university town with a strong home entertaining tradition.`,
    middle:   (city, state) => `The chef brings a fully self-contained propane teppan grill, premium proteins on request, all ingredients, and complete equipment. No gas hookup, no outdoor kitchen required at any Boulder property. Live performance for 90–120 minutes, complete cleanup when dinner ends.`,
    closing:  (city, state) => `CU Boulder graduation weekends book 5–7 weeks ahead — if you have a commencement date, reserve now.`,
  },
  // 520 — Broomfield
  {
    headline: (city, state) => `Hibachi Catering in Broomfield: Interlocken Corporate Events and Tech Corridor Celebrations`,
    opening:  (city, state) => `Interlocken Business Park corporate team dinners, Broomfield tech corridor events for the DISH, Oracle, and Vail Resorts campus communities, and home celebrations in one of Colorado's most tech-dense residential corridors — a certified teppanyaki chef arrives at your Broomfield property with everything included. The format that makes a team event feel like a genuine experience instead of a catered box lunch.`,
    middle:   (city, state) => `The chef brings the propane teppan grill, all proteins, complete ingredients, and equipment. For groups over 25, dual stations keep everyone at the same performance at the same time. No hookup required at any Broomfield property. Complete setup, 90–120 minute live performance, full cleanup.`,
    closing:  (city, state) => `Broomfield corporate and home event quotes are returned same day — submit your date and address now.`,
  },
  // 521 — Louisville
  {
    headline: (city, state) => `Hibachi at Home in Louisville: Old Town Celebrations and Boulder County Estate Dinners`,
    opening:  (city, state) => `Old Town Louisville home celebrations, Coal Creek-area estate dinners, and milestone events in Boulder County's most established residential community — a private hibachi chef arrives at your Louisville property for the occasion your guests have been anticipating. Old Town Louisville has the character that private dining was made for: historic homes, outdoor spaces, and the expectation of a genuine experience.`,
    middle:   (city, state) => `The chef brings the propane teppan grill, all proteins including premium upgrades, complete ingredients, and equipment. No hookup required at any Louisville property. Setup in 20–30 minutes, live performance for 90–120 minutes, full cleanup when dinner ends.`,
    closing:  (city, state) => `Louisville summer and graduation season dates book 3–5 weeks ahead — submit your date for a same-day quote.`,
  },
  // 522 — Fort Collins
  {
    headline: (city, state) => `Hibachi at Home in Fort Collins: CSU Graduation, Old Town Rentals, and Horsetooth Celebrations`,
    opening:  (city, state) => `CSU graduation weekend, Old Town vacation rental bachelorette dinners, Horsetooth Reservoir-adjacent home celebrations, and Front Range family milestone events — a private hibachi chef arrives at your Fort Collins property with everything needed for the full teppanyaki performance. Fort Collins is a university city and outdoor recreation hub where the best evenings happen at the property, not in a restaurant.`,
    middle:   (city, state) => `The chef brings the propane teppan grill, all proteins, fried rice, vegetables, house-made sauces, and complete equipment. No gas hookup required at any Fort Collins property or vacation rental. Live performance for 90–120 minutes, complete cleanup included.`,
    closing:  (city, state) => `CSU graduation Saturdays in May book 4–6 weeks ahead — submit your commencement date now to reserve.`,
  },
  // 523 — Arvada
  {
    headline: (city, state) => `Hibachi at Home in Arvada: Olde Town Celebrations and Northwest Denver Graduation Parties`,
    opening:  (city, state) => `Olde Town Arvada celebrations, Ralston Creek neighborhood backyard parties, and northwest Denver graduation events for Ralston Valley, Arvada West, and Pomona High School families — a private hibachi chef who arrives at your Arvada property so the evening is exactly what the occasion deserves. Arvada's combination of historic neighborhoods and large suburban lots makes it one of the better-suited markets on the Front Range for private hibachi.`,
    middle:   (city, state) => `The chef brings the propane grill, all proteins, fried rice, vegetables, miso soup, house-made sauces, and complete equipment. For graduation parties over 25, dual stations keep everyone eating at the same time. Complete setup, full performance, full cleanup.`,
    closing:  (city, state) => `Arvada graduation dates in May and June fill 4–6 weeks ahead — reserve now with a deposit.`,
  },
  // 524 — Colorado Springs
  {
    headline: (city, state) => `Hibachi Events in Colorado Springs: Military Homecomings, USAFA Graduation, and Broadmoor Estate Dinners`,
    opening:  (city, state) => `Military homecoming celebrations at Fort Carson and Peterson Space Force Base, USAFA graduation week family dinners, Broadmoor neighborhood estate events, and Garden of the Gods-adjacent corporate retreats — Colorado Springs is a market built on celebration, and private hibachi is the format that works for every occasion it generates. A certified teppanyaki chef arrives at your property fully self-contained with everything needed.`,
    middle:   (city, state) => `The chef brings the propane teppan grill, all proteins including military-homecoming-worthy premium upgrades, fried rice, vegetables, house-made sauces, and complete equipment. No hookup required. Single station for up to 25 guests, dual stations for larger homecoming and graduation groups. Complete setup, live performance, full cleanup.`,
    closing:  (city, state) => `USAFA graduation week dates book 6–8 weeks ahead — submit your date now if you have a commencement weekend.`,
  },
  // 525 — Parker
  {
    headline: (city, state) => `Hibachi at Home in Parker: Graduation Parties for Chaparral, Legend, and Ponderosa Families`,
    opening:  (city, state) => `Parker graduation parties for Chaparral, Legend, and Ponderosa High School families, Douglas County backyard celebrations, and milestone dinners on the large residential lots that Parker was designed for — a private hibachi chef who arrives fully prepared so you're actually present at your graduate's party instead of managing the kitchen. Parker's outdoor entertaining infrastructure is among the best in the Denver metro.`,
    middle:   (city, state) => `The chef brings the propane grill, all proteins, fried rice, vegetables, miso soup, house-made sauces, and equipment. For graduation parties over 30, dual stations keep everyone at the same performance at the same time. Complete setup and full cleanup included.`,
    closing:  (city, state) => `Parker graduation Saturdays in May and June fill 4–6 weeks ahead — submit your graduation date now.`,
  },
  // 526 — Castle Rock
  {
    headline: (city, state) => `Hibachi at Home in Castle Rock: Estate Dinners and I-25 Corridor Celebrations`,
    opening:  (city, state) => `Terrain neighborhood anniversary dinners, Castle Oaks milestone celebrations, and backyard events in Colorado's fastest-growing city — a private hibachi chef arrives at your Castle Rock property for the occasion that deserves the right format. Castle Rock's combination of large residential lots and a growing luxury home market makes it one of the better-suited suburbs on the south Front Range.`,
    middle:   (city, state) => `The chef brings the propane teppan grill, all proteins including premium upgrades, complete ingredients, and equipment. No hookup required. Setup in 20–30 minutes on any flat outdoor surface. Live performance for 90–120 minutes, complete cleanup when dinner ends.`,
    closing:  (city, state) => `Castle Rock summer dates fill 3–4 weeks ahead — submit your date for a same-day quote.`,
  },
  // 527 — Lone Tree
  {
    headline: (city, state) => `Backyard Hibachi in Lone Tree: RidgeGate Estate Events and South Denver Celebrations`,
    opening:  (city, state) => `RidgeGate estate dinners, Park Meadows-area backyard celebrations, and Lone Tree milestone events — a private hibachi chef arrives at your property with the full live-fire setup for the occasion your guests have been looking forward to. Lone Tree's luxury residential development was designed for the kind of entertaining that private hibachi was built for.`,
    middle:   (city, state) => `The chef brings a self-contained propane teppan grill, premium proteins on request, fried rice, vegetables, house-made sauces, and complete equipment. No hookup required. Complete setup, live performance for 90–120 minutes, full cleanup when dinner ends.`,
    closing:  (city, state) => `Lone Tree summer and holiday dates book 3–5 weeks ahead — submit your date for a same-day quote.`,
  },
  // 528 — Lakewood
  {
    headline: (city, state) => `Backyard Hibachi in Lakewood: Green Mountain Celebrations and Bear Creek Graduation Parties`,
    opening:  (city, state) => `Green Mountain neighborhood celebrations, Bear Creek-area graduation parties, and Belmar-adjacent backyard milestone events — a private hibachi chef arrives at your Lakewood property with everything needed for the full teppanyaki performance. Lakewood's combination of older established neighborhoods and large outdoor spaces makes private hibachi a natural fit for the west Denver community.`,
    middle:   (city, state) => `The chef brings the propane grill, all proteins, fried rice, vegetables, house-made sauces, and complete equipment. For graduation parties over 25, dual stations keep everyone eating at the same time. Complete setup and full cleanup included.`,
    closing:  (city, state) => `Lakewood graduation dates in May and June fill 4–6 weeks ahead — submit your date now.`,
  },
  // 529 — Aspen
  {
    headline: (city, state) => `Private Hibachi Chef in Aspen: Snowmass Chalet Dinners, Bachelorette Weekends, and Red Mountain Estate Events`,
    opening:  (city, state) => `Your Aspen Mountain slopeside rental, your Snowmass Village chalet, your Red Mountain estate — a certified teppanyaki chef arrives at your Aspen property with a fully self-contained propane teppan grill, hand-selected proteins, and the complete live-fire performance. No gas hookup. No outdoor kitchen. The full teppanyaki experience wherever you're staying in Aspen, because the rental you chose is already the venue.`,
    middle:   (city, state) => `The chef sets up in 20 minutes on your mountain deck, performs for 90–120 minutes from first flame to last plate — fire tricks, flying shrimp, precision knife work, and every dish cooked to order. Bachelorette weekends, corporate mountain retreats, anniversary chalet dinners, and destination milestone events all on the same self-contained setup.`,
    closing:  (city, state) => `Aspen peak season (June–September, December–March) books 6–10 weeks ahead — reserve your date at the same time you confirm the rental.`,
  },
  // 530 — Vail
  {
    headline: (city, state) => `Private Hibachi Chef in Vail: Ski Chalet Dinners, Beaver Creek Estate Events, and Bachelorette Weekends`,
    opening:  (city, state) => `Vail Village chalet dinners, Lionshead ski-in rental events, and Beaver Creek estate celebrations — a certified teppanyaki chef arrives at your Vail rental with a fully self-contained propane setup for the live-fire performance your group has been anticipating. Vail is a destination. The dinner that anchors the trip should stay on the mountain.`,
    middle:   (city, state) => `The chef brings everything: the propane teppan grill, all proteins including filet mignon and lobster tail, complete ingredients, and equipment. Setup in 20 minutes on your deck. Live performance for 90–120 minutes. Complete cleanup when dinner ends — your Vail rental is exactly as it was.`,
    closing:  (city, state) => `Vail peak ski season and summer festival dates book 4–8 weeks ahead — if you have a Vail rental weekend, reserve the chef now.`,
  },
  // 531 — Breckenridge
  {
    headline: (city, state) => `Mobile Hibachi Chef in Breckenridge: Peak 8 Chalet Dinners, Bachelorette Weekends, and Summit County Rentals`,
    opening:  (city, state) => `Your Peak 8 rental, your Blue River chalet, your Main Street vacation condo — a certified teppanyaki chef arrives at your Breckenridge property with everything needed for the full performance. No gas hookup. Self-contained propane. Setup in 20 minutes on your deck. Summit County's most-visited ski town is also one of Colorado's most active private hibachi markets, because the groups that rent here want the dinner to stay at the property.`,
    middle:   (city, state) => `The chef brings the propane teppan grill, all proteins, complete ingredients, and equipment. Bachelorette weekends, family ski reunions, birthday group rentals, and corporate mountain retreats all on the same self-contained setup. Live performance for 90–120 minutes, complete cleanup when dinner ends.`,
    closing:  (city, state) => `Breckenridge ski weekends and summer dates book 5–8 weeks ahead — reserve your rental date now.`,
  },
  // 532 — Steamboat Springs
  {
    headline: (city, state) => `Mobile Hibachi Chef in Steamboat Springs: Yampa Valley Cabin Dinners and Ski Town USA Events`,
    opening:  (city, state) => `Your Yampa Valley cabin rental, your Steamboat ski-area vacation home, your Fish Creek Falls-adjacent property — a certified teppanyaki chef arrives fully self-contained with everything needed for the dinner that anchors the trip. Steamboat Springs is Ski Town USA for a reason, and the cabin culture here means every group wants to stay on the property for the best meal of the weekend.`,
    middle:   (city, state) => `The chef brings a propane teppan grill, all proteins including premium upgrades, complete ingredients, and equipment. No gas hookup required. Self-contained propane works on any mountain deck in any season. Live performance for 90–120 minutes, complete cleanup when dinner ends.`,
    closing:  (city, state) => `Steamboat ski season and summer cabin weekends book 4–6 weeks ahead — submit your rental date now.`,
  },
  // 533 — Telluride
  {
    headline: (city, state) => `Mobile Hibachi Chef in Telluride: Mountain Village Chalet Dinners and Destination Events`,
    opening:  (city, state) => `Your Mountain Village chalet, your Box Canyon vacation rental, your Telluride festival property — a certified teppanyaki chef arrives fully self-contained with everything needed for the live-fire performance your group traveled here for. Telluride is a destination in the fullest sense: the groups that come here expect every experience to match the setting, and private hibachi on a mountain deck is the one that does.`,
    middle:   (city, state) => `The chef brings the propane teppan grill, all proteins including wagyu and lobster tail on request, complete ingredients, and equipment. No hookup required. Self-contained propane. Setup in 20 minutes. Live performance for 90–120 minutes. Complete cleanup. Your chalet is exactly as it was.`,
    closing:  (city, state) => `Telluride festival weekends and peak ski season book months ahead — reserve as soon as you have a rental date confirmed.`,
  },
]

// ─── City-Specific Closings (20 entries, indices 514–533) ──────────────────
// headline and sub MUST be (city) => arrow functions; urgency is plain string
export const CO_CITY_CLOSINGS = [
  // 514 — Denver
  { headline: (city) => `Book Your ${city} Hibachi Event`, sub: (city) => `Cherry Creek, Washington Park, Highlands, LoDo — same-day quotes for any ${city} neighborhood. Deposit locks your date immediately.`, urgency: 'Denver summer and holiday party dates fill fast. Reserve now with a deposit.', cta: { label: 'Book Your Denver Date', caption: 'From $60/adult · Same-day quotes' } },
  // 515 — Cherry Hills Village
  { headline: (city) => `Reserve Your ${city} Estate Event`, sub: (city) => `${city} estate events — from anniversary dinners to milestone gatherings — confirmed same day. Premium proteins and full cleanup included.`, urgency: 'Cherry Hills Village estate summer dates fill 3–5 weeks ahead. Reserve yours now.', cta: { label: 'Reserve Your Estate Date', caption: 'Premium proteins · Full cleanup included' } },
  // 516 — Greenwood Village
  { headline: (city) => `Book Your ${city} Event`, sub: (city) => `DTC corporate dinners and ${city} estate celebrations — same-day quotes, deposit confirms immediately. Corporate group rates available.`, urgency: 'Holiday party season books November–December DTC dates 5–7 weeks ahead. Lock your date now.', cta: { label: 'Request a Quote', caption: 'Corporate packages · From $60/adult' } },
  // 517 — Centennial
  { headline: (city) => `Book Your ${city} Hibachi Party`, sub: (city) => `Graduation Saturdays, birthday celebrations, and family milestones in ${city} — same-day quotes, your date is confirmed with a deposit.`, urgency: 'Centennial graduation dates in May and June fill 4–6 weeks ahead. Submit your date now.', cta: { label: 'Book Your Centennial Date', caption: 'From $60/adult · Graduation season' } },
  // 518 — Highlands Ranch
  { headline: (city) => `Book Your ${city} Graduation Party`, sub: (city) => `${city} graduation Saturdays, birthday celebrations, and family milestone dinners — same-day quotes for any Douglas County date.`, urgency: 'Highlands Ranch May and June graduation Saturdays fill 4–6 weeks ahead. Reserve your date now.', cta: { label: 'Book Your Date', caption: 'Graduation season · From $60/adult' } },
  // 519 — Boulder
  { headline: (city) => `Book Your ${city} Hibachi Event`, sub: (city) => `CU graduation weekend, South ${city} home dinner, Chautauqua estate event — same-day quotes for any ${city} date. Deposit locks it immediately.`, urgency: 'Boulder CU graduation weekends book 5–7 weeks ahead. If you have a date, reserve it now.', cta: { label: 'Book Your Boulder Date', caption: 'From $60/adult · CU graduation season' } },
  // 520 — Broomfield
  { headline: (city) => `Book Your ${city} Hibachi Event`, sub: (city) => `Interlocken corporate dinners and ${city} home celebrations — same-day quotes, deposit confirms immediately.`, urgency: 'Broomfield holiday party season books November–December 4–6 weeks ahead. Reserve now.', cta: { label: 'Request a Quote', caption: 'Corporate packages · Same-day quotes' } },
  // 521 — Louisville
  { headline: (city) => `Book Your ${city} Hibachi Event`, sub: (city) => `Old Town ${city} home celebrations, Coal Creek estate dinners, and milestone events — same-day quotes for any ${city} date.`, urgency: 'Louisville summer and graduation season dates fill 3–5 weeks ahead. Reserve yours now.', cta: { label: 'Book Your Louisville Date', caption: 'From $60/adult · Same-day quotes' } },
  // 522 — Fort Collins
  { headline: (city) => `Book Your ${city} Hibachi Event`, sub: (city) => `CSU graduation weekend, Old Town bachelorette rental dinner, or ${city} home celebration — same-day quotes for any Front Range date.`, urgency: 'Fort Collins CSU graduation Saturdays fill 4–6 weeks ahead. Submit your date now.', cta: { label: 'Book Your Fort Collins Date', caption: 'CSU graduation season · From $60/adult' } },
  // 523 — Arvada
  { headline: (city) => `Book Your ${city} Hibachi Party`, sub: (city) => `Olde Town celebrations, Ralston Creek graduation parties, and ${city} backyard milestones — same-day quotes for any northwest Denver date.`, urgency: 'Arvada graduation dates in May and June fill 4–6 weeks ahead. Reserve now.', cta: { label: 'Book Your Arvada Date', caption: 'From $60/adult · Graduation season' } },
  // 524 — Colorado Springs
  { headline: (city) => `Book Your ${city} Hibachi Event`, sub: (city) => `Military homecomings, USAFA graduation week, Broadmoor estate dinners, and corporate events in ${city} — same-day quotes, deposit locks your date.`, urgency: 'USAFA graduation week and summer Colorado Springs dates fill 5–7 weeks ahead. Reserve now.', cta: { label: 'Request a Quote', caption: 'Military & family events · From $60/adult' } },
  // 525 — Parker
  { headline: (city) => `Book Your ${city} Graduation Party`, sub: (city) => `${city} graduation parties, Douglas County backyard celebrations, and family milestone dinners — same-day quotes for any date.`, urgency: 'Parker graduation Saturdays in May and June fill 4–6 weeks ahead. Submit your date now.', cta: { label: 'Book Your Parker Date', caption: 'From $60/adult · Graduation season' } },
  // 526 — Castle Rock
  { headline: (city) => `Book Your ${city} Hibachi Event`, sub: (city) => `Terrain, Castle Oaks, and ${city} neighborhood celebrations — same-day quotes, deposit confirms your date immediately.`, urgency: 'Castle Rock summer dates fill 3–4 weeks ahead. Reserve your date now.', cta: { label: 'Book Your Castle Rock Date', caption: 'From $60/adult · Same-day quotes' } },
  // 527 — Lone Tree
  { headline: (city) => `Book Your ${city} Backyard Event`, sub: (city) => `RidgeGate estate dinners and ${city} backyard celebrations — same-day quotes for any south Denver date. Premium proteins available.`, urgency: 'Lone Tree summer and holiday dates fill 3–5 weeks ahead. Reserve your date now.', cta: { label: 'Book Your Lone Tree Date', caption: 'Premium proteins · From $60/adult' } },
  // 528 — Lakewood
  { headline: (city) => `Book Your ${city} Backyard Event`, sub: (city) => `Green Mountain, Bear Creek, and ${city} backyard celebrations — same-day quotes for any west Denver date.`, urgency: 'Lakewood graduation dates in May and June fill 4–6 weeks ahead. Reserve now.', cta: { label: 'Book Your Lakewood Date', caption: 'From $60/adult · Graduation season' } },
  // 529 — Aspen
  { headline: (city) => `Reserve Your ${city} Hibachi Event`, sub: (city) => `${city} Mountain rentals, Snowmass chalets, and Red Mountain estate events — same-day quotes. Your date is confirmed with a deposit.`, urgency: 'Aspen peak season (June–September, December–March) books 6–10 weeks ahead. Reserve now.', cta: { label: 'Reserve Your Aspen Date', caption: 'Peak season books fast · From $60/adult' } },
  // 530 — Vail
  { headline: (city) => `Reserve Your ${city} Hibachi Event`, sub: (city) => `${city} Village chalets, Lionshead rentals, and Beaver Creek estate events — same-day quotes, deposit locks your ski-season date.`, urgency: 'Vail peak ski season and summer dates book 4–8 weeks ahead. Reserve your date now.', cta: { label: 'Reserve Your Vail Date', caption: 'Peak ski season · From $60/adult' } },
  // 531 — Breckenridge
  { headline: (city) => `Reserve Your ${city} Hibachi Event`, sub: (city) => `Peak 8 chalets, Blue River rentals, and Main Street vacation condos in ${city} — same-day quotes, no hookup needed at any Summit County property.`, urgency: 'Breckenridge ski weekends and summer dates book 5–8 weeks ahead. Reserve your date now.', cta: { label: 'Reserve Your Breck Date', caption: 'No hookup required · From $60/adult' } },
  // 532 — Steamboat Springs
  { headline: (city) => `Reserve Your ${city} Hibachi Event`, sub: (city) => `Yampa Valley cabin rentals, ski-area vacation homes, and ${city} mountain properties — same-day quotes. Self-contained propane, no hookup needed.`, urgency: 'Steamboat ski season and summer cabin weekends book 4–6 weeks ahead. Reserve now.', cta: { label: 'Reserve Your Steamboat Date', caption: 'Self-contained · From $60/adult' } },
  // 533 — Telluride
  { headline: (city) => `Reserve Your ${city} Hibachi Event`, sub: (city) => `Mountain Village chalets, Box Canyon rentals, and ${city} festival properties — same-day quotes. Fully self-contained, no hookup required.`, urgency: 'Telluride festival weekends and ski season book months ahead. Reserve your date now.', cta: { label: 'Reserve Your Telluride Date', caption: 'Peak dates book fast · From $60/adult' } },
]

// ─── Testimonials (3 per city) ─────────────────────────────────────────────
const CO_TESTIMONIALS = {
  'denver': [
    { name: 'Marcus T.', text: 'Hosted a team dinner for 24 people on our Cherry Creek patio. The chef arrived on time, set up in under 20 minutes, and put on a genuinely impressive show. Every single person commented on it afterward. We\'re booking again for the holiday party.', location: 'Denver, CO', rating: 5, event: 'Corporate Team Dinner' },
    { name: 'Jennifer L.', text: 'Our Washington Park graduation party for 35 guests. I was dreading logistics but there were none — the chef handled everything. Best decision we made for the party.', location: 'Denver, CO', rating: 5, event: 'Graduation Party' },
    { name: 'Ryan K.', text: 'Anniversary dinner in our Highlands backyard. My wife had no idea what I had planned. The chef turned our patio into something from a restaurant we\'d never be able to book. Worth every penny.', location: 'Denver, CO', rating: 5, event: 'Anniversary Dinner' },
  ],
  'cherry-hills-village': [
    { name: 'Patricia W.', text: 'We hosted 14 guests for our 30th anniversary at our Cherry Hills Village home. The chef was professional, the filet and sea bass were exceptional, and the performance had everyone at the table. This is exactly the format our property was built for.', location: 'Cherry Hills Village, CO', rating: 5, event: 'Anniversary Estate Dinner' },
    { name: 'David H.', text: 'Milestone birthday dinner for my wife — 12 guests on the terrace. Premium proteins, impeccable service, full cleanup. Our guests are still talking about it two months later.', location: 'Cherry Hills Village, CO', rating: 5, event: 'Milestone Birthday' },
    { name: 'Susan R.', text: 'Small holiday gathering at our estate — exactly what we wanted. Intimate, impressive, no restaurant logistics. The chef executed flawlessly.', location: 'Cherry Hills Village, CO', rating: 5, event: 'Holiday Estate Dinner' },
  ],
  'greenwood-village': [
    { name: 'Andrew C.', text: 'Booked for our DTC team of 28. The chef handled the full group simultaneously with two stations, everyone ate at the same time, and the performance actually got the team talking and laughing in a way no restaurant ever has. Highly recommend for corporate events.', location: 'Greenwood Village, CO', rating: 5, event: 'Corporate Team Event' },
    { name: 'Lisa M.', text: 'Client appreciation dinner on our back patio in the DTC. The food was excellent — we did the wagyu upgrade and it was worth it. Our clients were genuinely impressed.', location: 'Greenwood Village, CO', rating: 5, event: 'Client Appreciation Dinner' },
    { name: 'Michael B.', text: 'Anniversary dinner at our Greenwood Village home. Chef arrived early, set up quietly, and delivered a full two-hour performance. Exactly what we\'d hoped for.', location: 'Greenwood Village, CO', rating: 5, event: 'Anniversary Dinner' },
  ],
  'centennial': [
    { name: 'Karen D.', text: 'Cherry Creek High School graduation party for 40 family members in our backyard. We\'d been dreading the logistics for months. The chef arrived, handled everything, and we were actually able to be with our daughter instead of managing the kitchen. Best decision.', location: 'Centennial, CO', rating: 5, event: 'Graduation Party' },
    { name: 'Tom S.', text: 'Birthday party for 30 guests. Smoky Hill area backyard. Everyone from the grandparents to the kids was completely engaged. The fire volcano stopped every conversation in the neighborhood.', location: 'Centennial, CO', rating: 5, event: 'Birthday Celebration' },
    { name: 'Brenda F.', text: 'Family reunion dinner — 25 people, mixed ages. The hibachi format worked perfectly for everyone. Kids loved the show, adults loved the food quality. We\'re doing this every year now.', location: 'Centennial, CO', rating: 5, event: 'Family Reunion' },
  ],
  'highlands-ranch': [
    { name: 'Chris V.', text: 'Mountain Vista graduation party for 45 family members. Our backyard in Highlands Ranch is large but we had no idea how to entertain at that scale. The hibachi chef solved every problem — setup, cooking, performance, cleanup. Our graduate was thrilled.', location: 'Highlands Ranch, CO', rating: 5, event: 'Graduation Party' },
    { name: 'Nicole P.', text: 'Rock Canyon graduation party — 38 guests. Booked 5 weeks ahead just like they recommended. Chef arrived perfectly on time. The shrimp-flipping moment is on video from four different phones in our family group chat.', location: 'Highlands Ranch, CO', rating: 5, event: 'High School Graduation' },
    { name: 'Jason W.', text: 'Family birthday celebration for 28 people. Douglas County backyard. The chef was professional, engaging, and made the whole evening feel special in a way a restaurant never could have.', location: 'Highlands Ranch, CO', rating: 5, event: 'Family Birthday' },
  ],
  'boulder': [
    { name: 'Emily G.', text: 'CU commencement graduation party at our South Boulder home. 32 guests, filet mignon upgrade across the board. My graduate said it was the best party of anyone in her class. The chef performed for two full hours and the Flatirons as a backdrop made it surreal.', location: 'Boulder, CO', rating: 5, event: 'CU Graduation Party' },
    { name: 'Derek H.', text: 'Tech exec home dinner on our Chautauqua-area patio — 16 guests. Premium proteins, flawless execution. Exactly the format that works when you want the focus on the people, not the restaurant.', location: 'Boulder, CO', rating: 5, event: 'Executive Home Dinner' },
    { name: 'Megan T.', text: 'Anniversary dinner in our Pearl Street neighborhood home. Chef arrived and turned our back patio into an experience our guests won\'t forget. The service level was outstanding.', location: 'Boulder, CO', rating: 5, event: 'Anniversary Dinner' },
  ],
  'broomfield': [
    { name: 'Scott L.', text: 'Booked for our Broomfield tech team of 30 — Interlocken-area home. Everyone from engineers to executives was genuinely entertained. Best team event we\'ve done in three years of planning them.', location: 'Broomfield, CO', rating: 5, event: 'Corporate Team Event' },
    { name: 'Amanda K.', text: 'Company holiday party at our home in Broomfield. Chef handled 26 guests perfectly with a single station. The performance ran exactly on time, every guest was served, full cleanup when he was done. Flawless.', location: 'Broomfield, CO', rating: 5, event: 'Holiday Party' },
    { name: 'Kevin R.', text: 'Graduation party for 32 family members. Our Broomfield backyard is good-sized but we weren\'t sure about setup. The chef assessed it immediately and made it work. No issues at all.', location: 'Broomfield, CO', rating: 5, event: 'Graduation Party' },
  ],
  'louisville': [
    { name: 'Claire B.', text: 'Anniversary dinner in our Old Town Louisville home — 10 guests. The chef was exceptional. Lobster tail and filet mignon for the whole table. Our guests felt like they were at a high-end restaurant except nobody had to drive anywhere.', location: 'Louisville, CO', rating: 5, event: 'Anniversary Estate Dinner' },
    { name: 'Brian N.', text: 'Milestone birthday in our Coal Creek neighborhood — 18 guests. The private dining format is exactly right for Louisville\'s home entertaining culture. We\'ll do this again.', location: 'Louisville, CO', rating: 5, event: 'Milestone Birthday' },
    { name: 'Rachel O.', text: 'Graduation party for 22 family members. Old Town-adjacent property with a good backyard. Everything went smoothly — setup, performance, cleanup. Exactly what we needed.', location: 'Louisville, CO', rating: 5, event: 'Graduation Party' },
  ],
  'fort-collins': [
    { name: 'Tyler S.', text: 'CSU commencement graduation party at our Fort Collins home — 38 guests. We booked six weeks out as recommended and locked in perfectly. The chef was at our front door 25 minutes before start. Performance was incredible. Our grad\'s friends are requesting it for their families now.', location: 'Fort Collins, CO', rating: 5, event: 'CSU Graduation Party' },
    { name: 'Heather M.', text: 'Bachelorette weekend at our Old Town rental. The chef came to our vacation home, performed for the group of 14 on the back deck, and it was the standout event of the whole weekend. Everyone agreed.', location: 'Fort Collins, CO', rating: 5, event: 'Bachelorette Weekend' },
    { name: 'Greg T.', text: 'Family reunion at our Fort Collins home — 28 guests. Horsetooth Reservoir area. Mixed ages, mixed food preferences. The chef handled every dietary restriction and still put on a full performance. Outstanding.', location: 'Fort Collins, CO', rating: 5, event: 'Family Reunion' },
  ],
  'arvada': [
    { name: 'Sandra L.', text: 'Arvada West graduation party — 42 family members in our Ralston Creek neighborhood backyard. The chef ran dual stations for the larger group, everyone ate at the same time, and the performance had every age from 6 to 80 completely engaged. Worth every dollar.', location: 'Arvada, CO', rating: 5, event: 'Graduation Party' },
    { name: 'Paul G.', text: 'Olde Town-area anniversary dinner for 16 guests. Private dining at home is the right format for this neighborhood. The chef was professional, the food was excellent, and we\'re already planning the next one.', location: 'Arvada, CO', rating: 5, event: 'Anniversary Dinner' },
    { name: 'Monica H.', text: 'Birthday party for my husband — 24 guests in our Arvada backyard. The hibachi performance was the highlight of the entire party. Fire tricks, flying shrimp — the kids and adults were equally amazed.', location: 'Arvada, CO', rating: 5, event: 'Birthday Celebration' },
  ],
  'colorado-springs': [
    { name: 'Sgt. First Class R. Torres', text: 'We threw a homecoming dinner for 30 family members at our Fort Carson-area home. The chef traveled to us, set up on our back patio, and gave my family the celebration they deserved after a deployment. This format is perfect for military homecomings.', location: 'Colorado Springs, CO', rating: 5, event: 'Military Homecoming Celebration' },
    { name: 'Colonel J. Peterson (ret.)', text: 'USAFA graduation week family dinner at our Broadmoor-area home. Flew family in from five states. The chef handled 28 guests, premium proteins across the board, and gave us an evening nobody will forget.', location: 'Colorado Springs, CO', rating: 5, event: 'USAFA Graduation Dinner' },
    { name: 'Christina A.', text: 'Corporate retreat team dinner at our Garden of the Gods-adjacent rental — 22 guests. The chef arrived fully self-contained, performed for two hours, complete cleanup. Our team called it the best company event in memory.', location: 'Colorado Springs, CO', rating: 5, event: 'Corporate Retreat Dinner' },
  ],
  'parker': [
    { name: 'Matt F.', text: 'Chaparral High School graduation party — 44 family members in our Parker backyard. The large lot made this possible in a way our friends with smaller yards couldn\'t do. The chef handled the full group, everyone ate at the same time, and the performance ran perfectly. Book early for May and June.', location: 'Parker, CO', rating: 5, event: 'Graduation Party' },
    { name: 'Julie K.', text: 'Ponderosa graduation party for 36 guests. We\'d been to a friend\'s hibachi event and decided immediately we wanted this for our daughter. It exceeded what we\'d seen. Filet mignon upgrade across the table.', location: 'Parker, CO', rating: 5, event: 'High School Graduation' },
    { name: 'Robert D.', text: 'Family birthday celebration — 28 guests. Our Parker backyard is built for this size group. The chef was professional, engaging, and the food quality was genuinely impressive. We\'re already planning next year\'s graduation party the same way.', location: 'Parker, CO', rating: 5, event: 'Family Birthday' },
  ],
  'castle-rock': [
    { name: 'Lauren T.', text: 'Anniversary dinner at our Terrain neighborhood home — 12 guests. Castle Rock is exactly the kind of growing community where private dining formats are taking hold. The chef was exceptional and the evening was exactly what a milestone should feel like.', location: 'Castle Rock, CO', rating: 5, event: 'Anniversary Estate Dinner' },
    { name: 'Brandon M.', text: 'Graduation party in our Castle Oaks neighborhood — 32 guests. Large backyard, perfect setup space. Chef arrived on time, performed for two hours, left everything spotless. Would absolutely recommend.', location: 'Castle Rock, CO', rating: 5, event: 'Graduation Party' },
    { name: 'Kelly W.', text: 'Birthday celebration for 20 guests. We\'re fairly new to Castle Rock and wanted to host something memorable. The hibachi event delivered — everyone had the same experience at the same table, no restaurant logistics, no splitting checks.', location: 'Castle Rock, CO', rating: 5, event: 'Birthday Celebration' },
  ],
  'lone-tree': [
    { name: 'Daniel S.', text: 'RidgeGate anniversary dinner for 14 guests. We specifically chose private hibachi because we wanted something that matched the caliber of what our property was designed for. The chef, the food, the performance — all at that level. Lobster tail and filet mignon. Exceptional evening.', location: 'Lone Tree, CO', rating: 5, event: 'Anniversary Estate Dinner' },
    { name: 'Stephanie H.', text: 'Milestone birthday at our Lone Tree home — 22 guests. The Park Meadows-area residential community has exactly the backyard format private hibachi was designed for. The chef was flawless. We\'re booking the holiday party the same way.', location: 'Lone Tree, CO', rating: 5, event: 'Milestone Birthday' },
    { name: 'Chris P.', text: 'Corporate client dinner at our Lone Tree home — 16 guests. The format was impressive: the chef performed for everyone at once, no splitting the group, full premium protein menu. Our clients were genuinely surprised by the caliber.', location: 'Lone Tree, CO', rating: 5, event: 'Corporate Client Dinner' },
  ],
  'lakewood': [
    { name: 'James O.', text: 'Green Mountain graduation party for 36 guests. Our Lakewood backyard has the space and the mountain views make the backdrop extraordinary. The chef turned an already beautiful setting into a full event. Couldn\'t have asked for more.', location: 'Lakewood, CO', rating: 5, event: 'Graduation Party' },
    { name: 'Rachel V.', text: 'Bear Creek neighborhood birthday party — 28 guests. The hibachi format worked for every age at the table. My kids still talk about the fire volcano three months later. The food quality was genuinely excellent.', location: 'Lakewood, CO', rating: 5, event: 'Family Birthday' },
    { name: 'Mark T.', text: 'Anniversary dinner in our Belmar-area home — 14 guests. The private dining format at home is what we wanted and the chef delivered exactly that. Professional, punctual, and genuinely talented.', location: 'Lakewood, CO', rating: 5, event: 'Anniversary Dinner' },
  ],
  'aspen': [
    { name: 'Victoria C.', text: 'Bachelorette weekend at our Snowmass Village chalet — 16 guests. We didn\'t want to go to a restaurant. The chef arrived at our mountain property fully self-contained, performed for two hours, wagyu and lobster tail for the whole group. The Aspen Mountain view as a backdrop is something no restaurant can replicate.', location: 'Aspen, CO', rating: 5, event: 'Bachelorette Ski Weekend' },
    { name: 'Thomas B.', text: 'Corporate executive retreat at our Red Mountain estate — 14 guests. This is the format that serious entertaining in Aspen demands. Premium proteins, impeccable performance, full cleanup. Our guests flew in from three cities for this event. Worth every detail.', location: 'Aspen, CO', rating: 5, event: 'Corporate Mountain Retreat' },
    { name: 'Alexandra S.', text: 'Anniversary dinner at our Aspen Mountain rental — 10 guests. We specifically wanted something that stayed on the mountain, on the deck, with the views. The chef delivered the full teppanyaki experience exactly as we\'d imagined it. Chilean sea bass and filet mignon across the whole table.', location: 'Aspen, CO', rating: 5, event: 'Anniversary Chalet Dinner' },
  ],
  'vail': [
    { name: 'Catherine M.', text: 'Bachelorette weekend at our Vail Village rental — 18 guests. Getting everyone into a restaurant in Vail was never going to work. The chef came to us, performed on the terrace, and it was the night that defined the entire trip. Filet and lobster tail for the whole group.', location: 'Vail, CO', rating: 5, event: 'Bachelorette Ski Weekend' },
    { name: 'William H.', text: 'Family reunion at our Beaver Creek-adjacent property — 24 guests. Self-contained propane, no hookup required, mountain deck setup. The chef arrived ready, performed for two hours, complete cleanup. The group has already asked if we\'re doing it again next ski season.', location: 'Vail, CO', rating: 5, event: 'Family Reunion Ski Trip' },
    { name: 'Sarah J.', text: 'Corporate mountain retreat team dinner — 20 guests at our Lionshead rental. The chef made a corporate dinner feel completely genuine. Nobody was checking their phones. Everyone was watching the performance. Exactly what a team event should be.', location: 'Vail, CO', rating: 5, event: 'Corporate Mountain Retreat' },
  ],
  'breckenridge': [
    { name: 'Ashley P.', text: 'Bachelorette weekend at our Peak 8 rental — 14 women. We came to Breck specifically for the ski weekend, but the Saturday hibachi dinner became the story everyone tells. Chef arrived, set up on our deck in 20 minutes, performed for two hours. Fully self-contained — I was surprised no gas hookup was needed.', location: 'Breckenridge, CO', rating: 5, event: 'Bachelorette Ski Weekend' },
    { name: 'Kevin L.', text: 'Family ski reunion at our Blue River chalet — 22 guests. This was our third annual Breckenridge family trip and the first time we did hibachi. It\'s now mandatory for every trip going forward. The kids\' reaction to the fire performance alone was worth it.', location: 'Breckenridge, CO', rating: 5, event: 'Family Ski Reunion' },
    { name: 'Danielle W.', text: 'Main Street-adjacent vacation rental birthday dinner — 16 guests. The whole group stayed on the mountain for the evening instead of going into town. Best decision. The chef was professional, the performance was full, and the food was genuinely excellent.', location: 'Breckenridge, CO', rating: 5, event: 'Birthday Weekend Rental' },
  ],
  'steamboat-springs': [
    { name: 'Frank G.', text: 'Family reunion at our Yampa Valley ranch rental — 28 guests. Steamboat is Ski Town USA for a reason, and the cabin culture here means every group wants to stay on the property. The hibachi chef arrived fully self-contained, performed for two and a half hours, and gave us the evening that anchored the whole trip.', location: 'Steamboat Springs, CO', rating: 5, event: 'Family Reunion Ranch Weekend' },
    { name: 'Lauren K.', text: 'Bachelorette cabin weekend at our Steamboat ski-area rental — 12 guests. We didn\'t want to deal with restaurants for the big dinner. Chef came to us, no hookup needed, set up on the deck in winter conditions without any issues. The performance was the highlight of the whole weekend.', location: 'Steamboat Springs, CO', rating: 5, event: 'Bachelorette Cabin Weekend' },
    { name: 'Dave S.', text: 'Corporate retreat team dinner at our Fish Creek-adjacent property — 18 guests. The self-contained setup is what makes Steamboat possible — no gas line, no permanent kitchen, just a flat deck and the chef brings everything. Flawless event.', location: 'Steamboat Springs, CO', rating: 5, event: 'Corporate Mountain Retreat' },
  ],
  'telluride': [
    { name: 'Natalie R.', text: 'Bachelorette weekend at our Mountain Village chalet — 14 guests. We travel to Telluride every year and we\'ve done every restaurant in town. The private hibachi at the chalet was the first dinner that felt truly special in the way the setting deserves. Chef arrived fully self-contained — we were genuinely surprised by the quality at a remote mountain rental.', location: 'Telluride, CO', rating: 5, event: 'Bachelorette Chalet Weekend' },
    { name: 'James F.', text: 'Anniversary dinner at our Box Canyon vacation property — 10 guests. Telluride is a destination because of the setting, and we wanted the dinner to stay in that setting. The chef delivered a full teppanyaki performance on our mountain deck. Chilean sea bass and wagyu. Remarkable evening.', location: 'Telluride, CO', rating: 5, event: 'Anniversary Mountain Dinner' },
    { name: 'Sophia L.', text: 'Film Festival weekend group dinner at our Telluride-adjacent rental — 20 guests. This is a town where the caliber of every experience is expected to be exceptional. The private hibachi chef matched that expectation completely. Self-contained, professional, genuinely impressive performance.', location: 'Telluride, CO', rating: 5, event: 'Festival Weekend Dinner' },
  ],
}

// ─── Section Variants (6 themes) ───────────────────────────────────────────
const CO_SECTION_VARIANTS = [
  // T0 — Denver Luxury Core (Cherry Hills Village)
  {
    heroPill: 'Estate Private Dining',
    experiencePill: 'The Cherry Hills Village Experience',
    experiencePoints: [
      'A certified teppanyaki chef arrives at your estate with a propane grill — no gas hookup required',
      'Full performance: fire tricks, flying shrimp, knife work, every guest served at the table',
      'Premium proteins by default — filet mignon, Chilean sea bass, lobster tail, wagyu available',
      'Complete setup and full cleanup — your property is exactly as it was when the chef leaves',
    ],
    experienceImage: '/pics/hibachi-private-chef-1.jpg',
    experienceImageAlt: (city) => `Estate hibachi dinner in ${city}, Colorado`,
    areasPill: 'South Denver Estate Market',
    areasHeadline: (city) => `We Serve ${city} and All of South Denver`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of the south Denver estate corridor — Cherry Hills Village, Greenwood Village, Centennial, Lone Tree, and every community in the Denver metro south of I-25. Your property, your evening, your format.`,
      (city) => `Most ${city} events are confirmed same day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton: 'Check Availability',
    occasionPill: 'Estate Occasions',
    occasionHeadline: (city) => `What Brings ${city} Hosts to Private Hibachi`,
    occasionSubtext: [
      'Anniversary estate dinners',
      'Milestone birthday celebrations',
      'Small holiday dinner parties',
      'Corporate executive gatherings',
      'Family milestone events',
      'Intimate celebration dinners',
    ],
    faqPill: 'Estate Event FAQ',
    faqHeadline: (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Common Questions`,
    faqSet: [
      { q: 'What does a private hibachi event at a Cherry Hills Village estate include?', a: 'Your chef arrives with the propane teppan grill, all proteins (standard and premium), fried rice, vegetables, miso soup, salad, house-made sauces, and all plates and utensils. Setup takes 20–30 minutes. The performance runs 90–120 minutes. Full cleanup when dinner ends. No gas hookup required at any property.' },
      { q: 'What outdoor space is needed at an estate property?', a: 'Approximately 10×10 feet of flat outdoor clearance — terrace, estate patio, courtyard, or lawn. Most Cherry Hills Village and south Denver estate properties have significantly more space than needed. If your setup is elevated or gated, note access details at booking.' },
      { q: 'Are premium proteins available at Cherry Hills Village events?', a: 'Yes — filet mignon, lobster tail, Chilean sea bass, king shrimp, and wagyu are all available as per-guest upgrades. Most Cherry Hills Village hosts select premium proteins for the full table, which is the most common estate format.' },
      { q: 'How far in advance should I book for a south Denver estate event?', a: 'Three to five weeks for summer and holiday season events. Off-peak events (spring and fall weekdays) often confirm 1–2 weeks out. Same-day quotes are always available — submit your date and address and we respond immediately.' },
    ],
    testimonialSubheading: 'Cherry Hills Village and South Denver Estate Events',
  },

  // T1 — Denver Corporate & Urban (Denver, Greenwood Village, Broomfield)
  {
    heroPill: 'Corporate & Home Events',
    experiencePill: 'The Denver Metro Experience',
    experiencePoints: [
      'Corporate team events, client appreciation dinners, and home celebrations — one format, any venue',
      'A certified teppanyaki chef travels to your LoDo rooftop, DTC terrace, or suburban backyard',
      'Groups of 8–60+ served: single station for up to 25, dual stations for larger events',
      'Complete setup and cleanup — no venue logistics, no coordinator required',
    ],
    experienceImage: '/pics/hibachi-event.jpg',
    experienceImageAlt: (city) => `Corporate hibachi event in ${city}, Colorado`,
    areasPill: 'Denver Metro Market',
    areasHeadline: (city) => `We Serve ${city} and All of the Denver Metro`,
    areasIntro: [
      (city, state) => `We serve ${city} and every Denver metro neighborhood — Cherry Creek, LoDo, RiNo, Washington Park, Highlands, Capitol Hill, DTC, Greenwood Village, Broomfield, and every community from the metro's center to its tech corridors.`,
      (city) => `Most ${city} corporate and home event quotes are returned same day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton: 'Check Availability',
    occasionPill: 'Denver Events',
    occasionHeadline: (city) => `What Brings ${city} Clients to Private Hibachi`,
    occasionSubtext: [
      'Corporate team dinners',
      'Client appreciation events',
      'Holiday party celebrations',
      'Graduation parties',
      'Home anniversary dinners',
      'Birthday milestone events',
    ],
    faqPill: 'Denver Event FAQ',
    faqHeadline: (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Common Questions`,
    faqSet: [
      { q: 'Can you do corporate team events anywhere in the Denver metro?', a: 'Yes — LoDo, RiNo, Cherry Creek, DTC, Greenwood Village, Broomfield, and any Denver metro neighborhood or venue. The chef is fully self-contained with a propane teppan grill — no gas hookup, no permanent outdoor kitchen required.' },
      { q: 'How large of a group can you handle?', a: 'We serve groups of 8 to 60+ guests. For groups over 25, dual chef stations are recommended so everyone eats at the same time. Note your group size at booking and we\'ll configure accordingly.' },
      { q: 'How far in advance should I book for a corporate holiday party?', a: 'November and December corporate dates book 4–6 weeks ahead in the Denver metro. Summer corporate events typically confirm 2–3 weeks out. Same-day quotes are always available — submit your event date and we respond immediately.' },
      { q: 'What\'s the pricing for a Denver corporate event?', a: 'Starting at $60 per adult, $30 per child (ages 4–12), $600 event minimum. Premium proteins (filet mignon, lobster tail, Chilean sea bass, wagyu) are available as per-guest upgrades. Corporate group packages are available at booking.' },
    ],
    testimonialSubheading: 'Denver Metro Corporate and Home Events',
  },

  // T2 — Denver Suburban Family (Highlands Ranch, Centennial, Parker, Arvada, Lakewood)
  {
    heroPill: 'Backyard Celebrations',
    experiencePill: 'The Suburban Colorado Experience',
    experiencePoints: [
      'A private hibachi chef who arrives at your backyard — you host without managing the kitchen',
      'Graduation parties, birthday celebrations, and family milestones for 8–60+ guests',
      'For groups over 25, dual chef stations keep everyone eating at the same time',
      'No gas hookup required — self-contained propane, setup in 20 minutes on any flat surface',
    ],
    experienceImage: '/pics/hibachi-at-home.jpg',
    experienceImageAlt: (city) => `Backyard hibachi party in ${city}, CO`,
    areasPill: 'Denver Suburbs Market',
    areasHeadline: (city) => `We Serve ${city} and All of the Denver Suburbs`,
    areasIntro: [
      (city, state) => `We serve ${city} and every Denver metro suburb — Highlands Ranch, Centennial, Parker, Arvada, Lakewood, Castle Rock, Lone Tree, and every residential community across Douglas, Arapahoe, Jefferson, and Adams counties.`,
      (city) => `Most ${city} quotes are confirmed same day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton: 'Check Availability',
    occasionPill: 'Suburban Colorado Events',
    occasionHeadline: (city) => `What ${city} Families Book Private Hibachi For`,
    occasionSubtext: [
      'High school graduation parties',
      'College graduation celebrations',
      'Family milestone birthdays',
      'Anniversary backyard dinners',
      'Summer family reunions',
      'Kids\' birthday events',
    ],
    faqPill: 'Graduation Party FAQ',
    faqHeadline: (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Common Questions`,
    faqSet: [
      { q: 'When should I book for a graduation party in Highlands Ranch, Centennial, or Parker?', a: 'Four to six weeks ahead for any May or June Saturday. The Denver metro suburban graduation market is competitive — the highest-volume weekend windows (late May, first three Saturdays of June) fill by mid-April. Submit your date as soon as you have a graduation ceremony date confirmed.' },
      { q: 'How does private hibachi work for a group of 40 in a suburban backyard?', a: 'Your chef needs approximately 10×10 feet of flat outdoor clearance — a typical Douglas or Arapahoe County backyard lawn, patio, or driveway works. For groups of 40, dual chef stations are recommended so everyone eats at the same time. Note your count at booking and we\'ll configure the setup accordingly.' },
      { q: 'What\'s on the menu for a graduation party?', a: 'Standard menu: chicken, steak, shrimp, salmon, vegetables, hibachi fried rice, lo mein, miso soup, garden salad, and house-made ginger, yum yum, and teriyaki sauces. Premium upgrades — filet mignon, lobster tail, Chilean sea bass, king shrimp — are available per guest. Many families upgrade for the graduate and immediate family.' },
      { q: 'What do I need to provide at my suburban home?', a: 'A flat outdoor area of 10×10 feet minimum, seating for your guests, and vehicle access to the property. The chef brings the propane teppan grill, all food, all equipment, all utensils, and leaves the space completely clean when dinner ends.' },
    ],
    testimonialSubheading: 'Denver Suburb Graduation Parties and Family Events',
  },

  // T3 — Boulder & Northern Front Range (Boulder, Louisville, Fort Collins)
  {
    heroPill: 'Front Range Private Dining',
    experiencePill: 'The Boulder & Front Range Experience',
    experiencePoints: [
      'CU and CSU graduation season is the Front Range\'s most competitive booking window — reserve 5–7 weeks ahead',
      'A certified teppanyaki chef travels to your Boulder, Louisville, or Fort Collins property with everything included',
      'Tech exec home dinners, bachelorette vacation rentals, and estate celebrations — all the same chef, same performance',
      'Self-contained propane setup works on any patio, deck, or lawn — no hookups required',
    ],
    experienceImage: '/pics/backyard-hibachi-3.jpg',
    experienceImageAlt: (city) => `Private hibachi chef in ${city}, Colorado`,
    areasPill: 'Front Range Market',
    areasHeadline: (city) => `We Serve ${city} and the Northern Front Range`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of the northern Front Range — Boulder, Louisville, Broomfield, Fort Collins, and every community along the US-36 and I-25 corridors connecting Boulder County to Larimer County.`,
      (city) => `Most ${city} quotes are returned same day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton: 'Check Availability',
    occasionPill: 'Front Range Events',
    occasionHeadline: (city) => `What ${city} Clients Book Private Hibachi For`,
    occasionSubtext: [
      'CU and CSU graduation parties',
      'Tech exec home celebrations',
      'Bachelorette vacation rentals',
      'Anniversary estate dinners',
      'Faculty and department events',
      'Startup team celebrations',
    ],
    faqPill: 'Front Range FAQ',
    faqHeadline: (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Common Questions`,
    faqSet: [
      { q: 'When should I book for CU Boulder or CSU graduation?', a: 'Five to seven weeks ahead for graduation weekends. CU Boulder May commencement and CSU May commencement both generate concentrated demand — the Saturday evening of graduation weekend is the single most requested date in the Boulder/Fort Collins market. Book in early April for a May graduation.' },
      { q: 'Can you serve at a Boulder vacation rental or Old Town Fort Collins rental?', a: 'Yes — fully self-contained propane setup works at any vacation rental property. No gas hookup, no permanent outdoor kitchen required. Just a flat outdoor area of 10×10 feet and vehicle access. Note any access restrictions (gate codes, limited parking) at booking.' },
      { q: 'Do you serve the smaller Boulder County communities?', a: 'Yes — we serve Louisville, Superior, Lafayette, Erie, Niwot, Longmont, Lyons, and all Boulder County communities. For Fort Collins, we cover Timnath, Windsor, Severance, and Larimer County communities within standard range. Travel may factor into quotes for outlying areas — always disclosed upfront.' },
      { q: 'What\'s the booking process for a Front Range event?', a: 'Submit your date, address, and guest count via the booking page or by calling (201) 565-3878. Most Front Range quotes are returned same day. A deposit confirms your date immediately — no double-bookings.' },
    ],
    testimonialSubheading: 'Boulder, Louisville, and Fort Collins Events',
  },

  // T4 — Colorado Springs & South Front Range (Colorado Springs, Castle Rock, Lone Tree)
  {
    heroPill: 'Front Range Events',
    experiencePill: 'The South Front Range Experience',
    experiencePoints: [
      'Military homecoming celebrations, USAFA graduation events, and Broadmoor estate dinners — one chef, any Front Range occasion',
      'Corporate team events, Castle Rock milestone dinners, and Lone Tree estate celebrations',
      'Fully self-contained propane setup — no gas hookup required at any Front Range property',
      'Groups of 8–60+: single station for up to 25, dual stations for larger events',
    ],
    experienceImage: '/pics/hibachi-pool-party.jpg',
    experienceImageAlt: (city) => `Private hibachi event in ${city}, Colorado`,
    areasPill: 'South Front Range Market',
    areasHeadline: (city) => `We Serve ${city} and the South Front Range`,
    areasIntro: [
      (city, state) => `We serve ${city} and the entire south Front Range corridor — Colorado Springs, Castle Rock, Lone Tree, Parker, Monument, Larkspur, and every community along the I-25 corridor between Denver and the Pikes Peak region.`,
      (city) => `Most ${city} quotes are returned same day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton: 'Check Availability',
    occasionPill: 'South Front Range Events',
    occasionHeadline: (city) => `What ${city} Clients Book Private Hibachi For`,
    occasionSubtext: [
      'Military homecoming celebrations',
      'USAFA graduation family dinners',
      'Broadmoor estate milestone events',
      'Corporate team retreats',
      'Family graduation parties',
      'Anniversary milestone dinners',
    ],
    faqPill: 'South Front Range FAQ',
    faqHeadline: (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Common Questions`,
    faqSet: [
      { q: 'Can you do military homecoming celebrations in Colorado Springs?', a: 'Yes — Fort Carson, Peterson Space Force Base, Schriever Space Force Base, Cheyenne Mountain, and USAFA are all within standard service range. Military homecoming events are one of our most requested Colorado Springs occasions. The chef travels to your property fully self-contained.' },
      { q: 'When should I book for USAFA graduation week?', a: 'Six to eight weeks ahead for USAFA graduation week in late May. Families fly in from across the country — multiple events are requested within the same weekend. If your USAFA graduation dinner is on the same weekend as commencement, book as early as possible.' },
      { q: 'Do you serve the entire Pikes Peak region?', a: 'Yes — Colorado Springs, Manitou Springs, Monument, Falcon, Peyton, Black Forest, and all El Paso County communities are within standard service range. Garden of the Gods-adjacent properties, Broadmoor neighborhood estates, and Old Colorado City vacation rentals all served.' },
      { q: 'What\'s included in a Colorado Springs corporate event?', a: 'The chef brings the propane teppan grill (self-contained), all proteins including premium upgrades, fried rice, vegetables, miso soup, salad, house-made sauces, and all plates and utensils. Full setup and complete cleanup. Starting at $60/adult, $600 minimum.' },
    ],
    testimonialSubheading: 'Colorado Springs, Castle Rock, and South Front Range Events',
  },

  // T5 — Mountain Resort & Ski Country (Aspen, Vail, Breckenridge, Steamboat, Telluride)
  {
    heroPill: 'Mountain Destination Events',
    experiencePill: 'The Colorado Mountain Resort Experience',
    experiencePoints: [
      'Fully self-contained propane setup — no gas hookup needed at any ski chalet, cabin, or mountain rental',
      'The chef arrives at your Aspen, Vail, Breckenridge, Steamboat, or Telluride property with everything included',
      'Ski season, summer mountain events, bachelorette weekends, and family reunion trips',
      'Setup in 20 minutes on any flat deck or patio — no outdoor kitchen, no permanent infrastructure',
    ],
    experienceImage: '/pics/traveling-hibachi.jpg',
    experienceImageAlt: (city) => `Mobile hibachi chef at ${city} mountain rental`,
    areasPill: 'Colorado Mountain Markets',
    areasHeadline: (city) => `We Serve ${city} and Colorado's Mountain Destinations`,
    areasIntro: [
      (city, state) => `We serve ${city} and every major Colorado mountain destination — Aspen, Snowmass, Vail, Beaver Creek, Breckenridge, Keystone, Steamboat Springs, Telluride, and the surrounding mountain communities throughout the Rockies.`,
      (city) => `Mountain destination quotes are returned same day. Peak season dates — especially ${city} — book fast. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton: 'Check Availability',
    occasionPill: 'Mountain Destination Events',
    occasionHeadline: (city) => `What Brings Groups to Private Hibachi in ${city}`,
    occasionSubtext: [
      'Bachelorette ski chalet weekends',
      'Family reunion vacation rentals',
      'Corporate mountain retreats',
      'Destination anniversary events',
      'Film and music festival weekends',
      'Birthday group rental celebrations',
    ],
    faqPill: 'Mountain Event FAQ',
    faqHeadline: (city, abbr) => `Mobile Hibachi Chef in ${city}, ${abbr} — Common Questions`,
    faqSet: [
      { q: 'Does the chef bring their own propane? Do I need a gas hookup at my ski rental?', a: 'The chef brings a fully self-contained propane teppan grill — no gas hookup, no outdoor kitchen, no permanent infrastructure required at any mountain rental. Any flat deck, patio, or outdoor surface at your chalet, cabin, or vacation property works.' },
      { q: 'Can you set up at an elevated or remote mountain property?', a: 'Yes — the chef is experienced with mountain property access. Note any access considerations at booking: steep driveways, unpaved roads, weight-limited bridges, gated community entry. Travel to remote mountain properties is factored into the quote upfront — never a surprise addition.' },
      { q: 'When should I book for Aspen, Vail, or Breckenridge peak season?', a: 'Six to ten weeks ahead for peak ski season (December–March) in Aspen and Vail. Breckenridge and Steamboat Springs ski weekends book 5–8 weeks ahead. Summer mountain events (June–August) in all markets book 4–6 weeks ahead. Telluride festival weekends book as early as possible.' },
      { q: 'Does the chef perform in cold weather or winter conditions?', a: 'Yes — mountain hibachi events run in all seasons. The propane setup is engineered to perform in cold temperatures. Many mountain rental decks are partially covered; fully open decks work as well. The chef arrives prepared for mountain weather conditions year-round.' },
    ],
    testimonialSubheading: 'Colorado Ski Resort and Mountain Destination Events',
  },
]

// ─── How It Works ───────────────────────────────────────────────────────────
const CO_HOW_IT_WORKS = {
  headline:   (city) => `How Private Hibachi Works in ${city}`,
  footerNote: (city) => `Every ${city} event is confirmed with a deposit. Your date is locked as soon as you book — no double-bookings.`,
  steps: [
    { step: '01', title: 'Request a Quote',    desc: 'Submit your date, location, and guest count. Most Colorado quotes are returned the same day.' },
    { step: '02', title: 'Confirm Your Menu',  desc: 'Choose your proteins — standard menu or premium upgrades like filet mignon and lobster tail. All dietary restrictions handled at booking.' },
    { step: '03', title: 'Lock Your Date',     desc: 'A deposit confirms your event immediately. Your date is reserved — no double-bookings, no last-minute uncertainty.' },
    { step: '04', title: 'Chef Arrives Ready', desc: 'Your chef arrives 20–30 minutes early with the propane teppan grill, all proteins, and everything needed. No hookups required at any Colorado property.' },
    { step: '05', title: 'Performance & Cleanup', desc: '90–120 minutes of live teppanyaki — fire tricks, flying shrimp, precision knife work, every guest served. Full cleanup when dinner ends.' },
  ],
}

// ─── Blog Posts (keyed by variant % 3) ────────────────────────────────────
const CO_BLOG_POSTS = [
  // Slot 0: Cherry Hills Village (T0) + Boulder/Louisville/Fort Collins (T3)
  [
    { slug: 'hibachi-at-home-colorado-guide',         title: 'Private Hibachi Chef in Colorado: The Complete Guide to All Five Markets',                              excerpt: 'From Cherry Hills Village estate dinners to Breckenridge bachelorette ski weekends — how private hibachi works across all five Colorado markets.' },
    { slug: 'hibachi-graduation-party-denver-colorado', title: 'Private Hibachi for a Denver-Area Graduation Party: Boulder, Fort Collins, and the Front Range',       excerpt: 'When to book, how many guests fit, and what makes the CU and CSU graduation markets the Front Range\'s most competitive hibachi windows.' },
  ],
  // Slot 1: Denver/Greenwood/Broomfield (T1) + CO Springs/Castle Rock/Lone Tree (T4)
  [
    { slug: 'hibachi-at-home-colorado-guide',           title: 'Private Hibachi Chef in Colorado: The Complete Guide to All Five Markets',                            excerpt: 'From Cherry Hills Village estate dinners to Breckenridge bachelorette ski weekends — how private hibachi works across all five Colorado markets.' },
    { slug: 'hibachi-graduation-party-denver-colorado', title: 'Private Hibachi for a Denver-Area Graduation Party: Boulder, Fort Collins, and the Front Range',       excerpt: 'When to book, how many guests fit, and what makes the CU and CSU graduation markets the Front Range\'s most competitive hibachi windows.' },
    { slug: 'private-hibachi-colorado-ski-resort',      title: 'Private Hibachi at a Colorado Ski Resort: Aspen, Vail, Breckenridge, Steamboat Springs, and Telluride', excerpt: 'Self-contained propane setup, no hookup required, peak season booking windows — how private hibachi works at Colorado\'s mountain destinations.' },
  ],
  // Slot 2: Suburban Family (T2) + Mountain Resorts (T5)
  [
    { slug: 'hibachi-at-home-colorado-guide',      title: 'Private Hibachi Chef in Colorado: The Complete Guide to All Five Markets',                              excerpt: 'From Cherry Hills Village estate dinners to Breckenridge bachelorette ski weekends — how private hibachi works across all five Colorado markets.' },
    { slug: 'private-hibachi-colorado-ski-resort', title: 'Private Hibachi at a Colorado Ski Resort: Aspen, Vail, Breckenridge, Steamboat Springs, and Telluride', excerpt: 'Self-contained propane setup, no hookup required, peak season booking windows — how private hibachi works at Colorado\'s mountain destinations.' },
  ],
]

// ─── getCoCityData ──────────────────────────────────────────────────────────
export function getCoCityData(citySlug, cityName) {
  const entry = CO_MAJOR_CITIES[citySlug]
  if (!entry) return null
  const { v, profileIdx, nearby } = entry

  const customMeta = CO_CUSTOM_META[citySlug] || null

  return {
    cityName,
    stateAbbr:   'CO',
    stateName:   'Colorado',
    stateSlug:   'colorado',
    variant:     v % 3,

    heroImage:    CO_THEME_HEROES[v],
    heroSubtitle: CO_HERO_SUBTITLES[v](cityName),
    heroH1Prefix: profileIdx != null ? CO_PROFILE_H1_PREFIXES[profileIdx] : CO_THEME_H1_PREFIXES[v],

    uniqueIntroVariant:   profileIdx != null ? 514 + profileIdx : 508 + v,
    uniqueWhyUsVariant:   v % 3,
    uniqueClosingVariant: profileIdx != null ? 514 + profileIdx : 508 + v,

    ...(customMeta ? { metaTitle: customMeta.title, metaDescription: customMeta.desc } : {}),

    testimonials:      CO_TESTIMONIALS[citySlug] || [],
    nearbyCities:      nearby,
    nearbyMajorCities: ['Denver', 'Boulder', 'Colorado Springs', 'Fort Collins', 'Greenwood Village'],
  }
}

// ─── getCoBlogPosts ─────────────────────────────────────────────────────────
export function getCoBlogPosts(variant, count = 3) {
  const slot = variant % 3
  return CO_BLOG_POSTS[slot].slice(0, count)
}

// ─── getCoHowItWorks ────────────────────────────────────────────────────────
export function getCoHowItWorks(citySlug) {
  return CO_HOW_IT_WORKS
}

// ─── getCoSectionVariant ────────────────────────────────────────────────────
export function getCoSectionVariant(citySlug) {
  const entry = CO_MAJOR_CITIES[citySlug]
  if (!entry) return null
  return CO_SECTION_VARIANTS[entry.v]
}

// ─── getCoCityImage ─────────────────────────────────────────────────────────
export function getCoCityImage(citySlug) {
  return CO_CITY_IMAGE_MAP[citySlug] || null
}

// ─── getCoSupportImages ─────────────────────────────────────────────────────
export function getCoSupportImages(citySlug) {
  return CO_SUPPORT_IMAGES[citySlug] || null
}
