// ─── Arizona Data ─────────────────────────────────────────────────────────────
// 18 cities · 6 themes · indices 534-557
// Generic: 534-539 | City-specific: 540-557

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

// ─── Custom Meta (all 18 cities) ───────────────────────────────────────────────
const AZ_CUSTOM_META = {
  // Batch 1
  'scottsdale':      { title: 'Private Hibachi Chef in Scottsdale, AZ | Old Town Bachelorette Weekends, DC Ranch Estate Dinners & Troon North Golf Retreats', desc: 'A certified teppanyaki chef travels to your Scottsdale vacation rental, DC Ranch estate, or Kierland Commons-area property — Old Town bachelorette parties, bachelor weekends, golf community dinners. From $60/adult.' },
  'paradise-valley': { title: 'Hibachi at Home in Paradise Valley, AZ | Camelback Mountain Estate Dinners, Mountain Shadows Events & Milestone Celebrations', desc: 'Private hibachi at your Paradise Valley estate — Camelback Mountain, Mountain Shadows, Sanctuary Camelback, Mummy Mountain. Anniversary dinners, milestone birthdays, executive gatherings. From $60/adult.' },
  'phoenix':         { title: 'Private Hibachi Chef in Phoenix, AZ | Arcadia, Biltmore, Desert Ridge & Downtown Corporate Events', desc: 'A certified teppanyaki chef travels to your Phoenix property — Arcadia backyard dinners, Biltmore estate events, Desert Ridge graduation parties, downtown Phoenix corporate team dinners. From $60/adult.' },
  'tempe':           { title: 'Hibachi at Home in Tempe, AZ | ASU Graduation Parties, Tempe Town Lake Celebrations & Backyard Milestones', desc: 'ASU graduation backyard parties, Tempe Town Lake-adjacent events, and home celebrations — a private hibachi chef arrives at your Tempe property with everything included. From $60/adult.' },
  'fountain-hills':  { title: 'Hibachi Catering in Fountain Hills, AZ | Firerock, Eagle Mountain & Fountain Park Estate Events', desc: 'Private hibachi at your Fountain Hills home — Firerock Country Club, Eagle Mountain Golf Club, and Fountain Park-area estate events. Milestone birthdays, anniversaries, retirement celebrations. From $60/adult.' },
  // Batch 2
  'chandler':        { title: 'Hibachi Catering in Chandler, AZ | Ocotillo, Agritopia, Fulton Ranch & Southeast Valley Corporate Events', desc: 'A certified teppanyaki chef travels to your Chandler property — Ocotillo executive home dinners, Agritopia community events, Fulton Ranch milestone celebrations, Intel and PayPal corridor corporate team dinners. From $60/adult.' },
  'gilbert':         { title: 'Hibachi at Home in Gilbert, AZ | Power Ranch, Val Vista Lakes, Eastmark & SE Valley Backyard Celebrations', desc: 'Power Ranch birthday parties, Val Vista Lakes graduation dinners, Eastmark community events — a private hibachi chef arrives at your Gilbert backyard with everything included. From $60/adult.' },
  'mesa':            { title: 'Hibachi at Home in Mesa, AZ | Las Sendas, Red Mountain, East Mesa & Superstition Corridor Events', desc: 'Las Sendas golf community estate dinners, Red Mountain graduation parties, and East Mesa family celebrations — a private hibachi chef arrives at your Mesa property with everything included. From $60/adult.' },
  'queen-creek':     { title: 'Backyard Hibachi in Queen Creek, AZ | Ranch Estate Dinners, Vineyard Properties & Southeast Valley Celebrations', desc: 'Private hibachi at your Queen Creek ranch estate or vineyard-adjacent property — milestone birthday dinners, family reunions, and graduation celebrations in the Southeast Valley\'s fastest-growing community. From $60/adult.' },
  // Batch 3
  'peoria':          { title: 'Hibachi at Home in Peoria, AZ | Vistancia, Westwing Mountain, Sun City Grand & West Valley Celebrations', desc: 'Vistancia backyard events, Westwing Mountain milestone dinners, and Sun City Grand retirement celebrations — a private hibachi chef travels to your Peoria property with everything included. From $60/adult.' },
  'glendale':        { title: 'Hibachi Catering in Glendale, AZ | Arrowhead Ranch, Westgate & State Farm Stadium Area Events', desc: 'Arrowhead Ranch estate celebrations, Westgate-area corporate team dinners, and West Valley family events — a certified teppanyaki chef arrives at your Glendale property fully self-contained. From $60/adult.' },
  'surprise':        { title: 'Hibachi at Home in Surprise, AZ | Marley Park, Rancho Gabriela & West Valley Backyard Events', desc: 'Marley Park neighborhood celebrations, Rancho Gabriela backyard birthday parties, and Sun City Grand milestone dinners — a private hibachi chef arrives at your Surprise property. From $60/adult.' },
  'goodyear':        { title: 'Mobile Hibachi in Goodyear, AZ | PebbleCreek, Estrella Mountain Ranch & West Valley Home Celebrations', desc: 'PebbleCreek resort community events, Estrella Mountain Ranch estate dinners, and Canyon Trails backyard celebrations — a private hibachi chef arrives fully self-contained. From $60/adult.' },
  // Batch 4
  'tucson':          { title: 'Private Hibachi Chef in Tucson, AZ | UA Graduation Parties, Catalina Foothills Estate Dinners & Sabino Canyon Events', desc: 'A certified teppanyaki chef arrives at your Tucson property — UA graduation weekend family dinners, Catalina Foothills anniversary estates, Sabino Canyon-adjacent backyard events, Dove Mountain resort celebrations. From $60/adult.' },
  'oro-valley':      { title: 'Hibachi at Home in Oro Valley, AZ | Dove Mountain, Rancho Vistoso & Catalina Foothills Celebrations', desc: 'Dove Mountain resort community estate dinners, Rancho Vistoso milestone backyard events, Ventana Canyon-adjacent anniversary celebrations — private hibachi at your Oro Valley property. From $60/adult.' },
  'sedona':          { title: 'Mobile Hibachi in Sedona, AZ | Red Rock Vacation Rentals, Oak Creek Canyon Cabins & Bachelorette Weekend Events', desc: 'A certified teppanyaki chef arrives at your Sedona vacation rental — Red Rock, Chapel of the Holy Cross corridor, Oak Creek Canyon cabins. Bachelorette weekends, anniversary getaways. No hookup required. From $60/adult.' },
  'flagstaff':       { title: 'Mobile Hibachi in Flagstaff, AZ | Snowbowl Cabin Events, Mountain Vacation Rentals & NAU Graduation Parties', desc: 'Your Flagstaff mountain cabin, Arizona Snowbowl-adjacent rental, or NAU graduation weekend property — a certified teppanyaki chef arrives fully self-contained. No hookup required. From $60/adult.' },
  'prescott':        { title: 'Backyard Hibachi in Prescott, AZ | Whiskey Row Cabin Weekends, Watson Lake Properties & Prescott Valley Events', desc: 'Watson Lake cabin celebrations, Whiskey Row bachelorette weekend dinners, Granite Dells-area property events, and Prescott Valley backyard milestone parties — private hibachi chef arrives fully self-contained. From $60/adult.' },
}

// ─── City Image Map (experience image — overrides section variant) ──────────────
const AZ_CITY_IMAGE_MAP = {
  // Batch 1
  'scottsdale':      { src: '/pics/hibachi-chef-2.jpg',       alt: (city) => `Private hibachi chef event in ${city}, Arizona` },
  'paradise-valley': { src: '/pics/hibachi-austin-home.jpg',  alt: (city) => `Estate hibachi dinner in ${city}, AZ` },
  'phoenix':         { src: '/pics/hibachi-photo-1.jpg',       alt: (city) => `Private hibachi chef in ${city}, Arizona` },
  'tempe':           { src: '/pics/hibachi-photo-2.jpg',       alt: (city) => `Hibachi at home in ${city}, AZ` },
  'fountain-hills':  { src: '/pics/hibachi-dallas-home.jpg',  alt: (city) => `Hibachi catering in ${city}, Arizona` },
  // Batch 2
  'chandler':        { src: '/pics/hibachi-catering-2.jpg',   alt: (city) => `Hibachi catering event in ${city}, Arizona` },
  'gilbert':         { src: '/pics/hibachi-chef-home.jpg',    alt: (city) => `Hibachi at home in ${city}, AZ` },
  'mesa':            { src: '/pics/hibachi-hart.jpg',          alt: (city) => `Backyard hibachi party in ${city}, Arizona` },
  'queen-creek':     { src: '/pics/hibachi-dallas-2.jpg',     alt: (city) => `Backyard hibachi in ${city}, AZ` },
  // Batch 3
  'peoria':          { src: '/pics/hibachi-photo-1.jpg',       alt: (city) => `Private hibachi chef in ${city}, Arizona` },
  'glendale':        { src: '/pics/hibachi-austin-home.jpg',  alt: (city) => `Hibachi catering in ${city}, AZ` },
  'surprise':        { src: '/pics/hibachi-catering.jpg',     alt: (city) => `Hibachi at home in ${city}, Arizona` },
  'goodyear':        { src: '/pics/hibachi-to-you.jpg',        alt: (city) => `Mobile hibachi chef in ${city}, AZ` },
  // Batch 4
  'tucson':          { src: '/pics/hibachi-raleigh.jpg',       alt: (city) => `Private hibachi chef in ${city}, Arizona` },
  'oro-valley':      { src: '/pics/hibachi-virginia-beach.jpg', alt: (city) => `Hibachi at home in ${city}, AZ` },
  'sedona':          { src: '/pics/hibachi-dallas-home.jpg',  alt: (city) => `Mobile hibachi chef at ${city} vacation rental` },
  'flagstaff':       { src: '/pics/hibachi-colorado.jpg',     alt: (city) => `Mobile hibachi chef in ${city}, Arizona` },
  'prescott':        { src: '/pics/hibachi-photo-2.jpg',       alt: (city) => `Backyard hibachi in ${city}, AZ` },
}

// ─── Support Images (testimonial + CTA per city) ───────────────────────────────
const AZ_SUPPORT_IMAGES = {
  // Batch 1
  'scottsdale':      { testimonial: { src: '/pics/hibachi-shot-2.jpg',       alt: (c) => `Private hibachi event in ${c}`,      caption: 'Scottsdale Estate & Bachelorette Events',    trustBadge: '5.0★ · Old Town & DC Ranch Trusted'      }, cta: { src: '/pics/hibachi-pic-2.jpg',        alt: (c) => `Book your ${c} hibachi event`,     caption: 'Same-day quotes · From $60/adult'       } },
  'paradise-valley': { testimonial: { src: '/pics/hibachi-catering-3.jpg',   alt: (c) => `Estate hibachi dinner in ${c}`,      caption: 'Paradise Valley Estate Events',              trustBadge: '5.0★ · Camelback Mountain Trusted'       }, cta: { src: '/pics/private-party-chef-6.jpg', alt: (c) => `Reserve your ${c} hibachi event`,  caption: 'Premium proteins · Full setup included' } },
  'phoenix':         { testimonial: { src: '/pics/hibachi-shot-1.jpg',        alt: (c) => `Private hibachi chef in ${c}`,       caption: 'Phoenix Corporate & Home Events',            trustBadge: '4.9★ · 200+ Phoenix Events'               }, cta: { src: '/pics/hibachi-colorado.jpg',     alt: (c) => `Book your ${c} hibachi event`,     caption: 'Corporate packages · From $60/adult'    } },
  'tempe':           { testimonial: { src: '/pics/hibachi-catering.jpg',      alt: (c) => `Hibachi graduation party in ${c}`,  caption: 'Tempe ASU Graduation & Home Events',         trustBadge: '4.9★ · ASU Graduation Season'             }, cta: { src: '/pics/mobile-hibachi-2.jpg',     alt: (c) => `Book your ${c} graduation party`,  caption: 'ASU graduation season · From $60/adult'} },
  'fountain-hills':  { testimonial: { src: '/pics/hibachi-pic-3.jpg',         alt: (c) => `Hibachi estate event in ${c}`,      caption: 'Fountain Hills Estate & Golf Community',     trustBadge: '5.0★ · Firerock & Eagle Mountain'        }, cta: { src: '/pics/backyard-hibachi.jpg',     alt: (c) => `Reserve your ${c} hibachi event`,  caption: 'From $60/adult · Same-day quotes'       } },
  // Batch 2
  'chandler':        { testimonial: { src: '/pics/hibachi-shot-2.jpg',        alt: (c) => `Hibachi catering in ${c}`,           caption: 'Chandler Tech Corridor Events',              trustBadge: '4.9★ · Ocotillo & Fulton Ranch'           }, cta: { src: '/pics/hibachi-pic-3.jpg',        alt: (c) => `Book your ${c} hibachi event`,     caption: 'Corporate packages · From $60/adult'    } },
  'gilbert':         { testimonial: { src: '/pics/hibachi-catering-3.jpg',   alt: (c) => `Backyard hibachi party in ${c}`,    caption: 'Gilbert Family Celebrations',                trustBadge: '4.9★ · Power Ranch & Val Vista'          }, cta: { src: '/pics/backyard-hibachi-2.jpg',   alt: (c) => `Book your ${c} graduation party`,  caption: 'May/June graduation books fast'         } },
  'mesa':            { testimonial: { src: '/pics/hibachi-chef-at-home.jpg', alt: (c) => `Hibachi at home in ${c}`,            caption: 'Mesa East Valley Events',                    trustBadge: '4.9★ · Las Sendas & Red Mountain'        }, cta: { src: '/pics/hibachi-shot-1.jpg',       alt: (c) => `Book your ${c} hibachi event`,     caption: 'From $60/adult · Same-day quotes'       } },
  'queen-creek':     { testimonial: { src: '/pics/backyard-hibachi.jpg',     alt: (c) => `Backyard hibachi in ${c}`,           caption: 'Queen Creek Ranch Estate Events',            trustBadge: '5.0★ · SE Valley Trusted'                }, cta: { src: '/pics/hibachi-catering.jpg',     alt: (c) => `Reserve your ${c} hibachi event`,  caption: 'Large lots · From $60/adult'            } },
  // Batch 3
  'peoria':          { testimonial: { src: '/pics/hibachi-chef-2.jpg',        alt: (c) => `Private hibachi event in ${c}`,     caption: 'Peoria Vistancia & West Valley Events',      trustBadge: '4.9★ · West Valley Trusted'               }, cta: { src: '/pics/hibachi-pic-2.jpg',        alt: (c) => `Book your ${c} hibachi event`,     caption: 'From $60/adult · Same-day quotes'       } },
  'glendale':        { testimonial: { src: '/pics/mobile-hibachi.jpg',        alt: (c) => `Hibachi catering in ${c}`,           caption: 'Glendale Arrowhead & West Valley Events',   trustBadge: '4.9★ · Arrowhead Ranch Trusted'          }, cta: { src: '/pics/hibachi-colorado.jpg',     alt: (c) => `Book your ${c} hibachi event`,     caption: 'Corporate & home events · $60/adult'    } },
  'surprise':        { testimonial: { src: '/pics/hibachi-dallas-home.jpg',  alt: (c) => `Hibachi at home in ${c}`,            caption: 'Surprise Marley Park & West Valley',         trustBadge: '4.9★ · West Valley Trusted'               }, cta: { src: '/pics/hibachi-photo-2.jpg',      alt: (c) => `Book your ${c} hibachi event`,     caption: 'From $60/adult · Same-day quotes'       } },
  'goodyear':        { testimonial: { src: '/pics/private-chef-2.jpg',       alt: (c) => `Private hibachi chef in ${c}`,      caption: 'Goodyear PebbleCreek & Estrella Events',    trustBadge: '5.0★ · PebbleCreek Trusted'               }, cta: { src: '/pics/hibachi-texas-home.jpg',   alt: (c) => `Reserve your ${c} hibachi event`,  caption: 'From $60/adult · Same-day quotes'       } },
  // Batch 4
  'tucson':          { testimonial: { src: '/pics/hibachi-photo-1.jpg',       alt: (c) => `Private hibachi in ${c}`,           caption: 'Tucson UA Graduation & Foothills Events',   trustBadge: '4.9★ · UA Graduation Season'              }, cta: { src: '/pics/hibachi-catering-3.jpg',   alt: (c) => `Book your ${c} hibachi event`,     caption: 'UA graduation season · From $60/adult'  } },
  'oro-valley':      { testimonial: { src: '/pics/hibachi-shot-2.jpg',        alt: (c) => `Hibachi at home in ${c}`,           caption: 'Oro Valley Dove Mountain & Vistoso',        trustBadge: '5.0★ · Dove Mountain Trusted'             }, cta: { src: '/pics/hibachi-catering-2.jpg',   alt: (c) => `Reserve your ${c} hibachi event`,  caption: 'From $60/adult · Same-day quotes'       } },
  'sedona':          { testimonial: { src: '/pics/hibachi-austin-home.jpg',  alt: (c) => `Private hibachi at ${c} rental`,   caption: 'Sedona Red Rock & Bachelorette Events',     trustBadge: '5.0★ · Red Rock Country Trusted'         }, cta: { src: '/pics/mobile-hibachi-2.jpg',     alt: (c) => `Reserve your ${c} hibachi date`,   caption: 'Peak season books 6–8 weeks ahead'      } },
  'flagstaff':       { testimonial: { src: '/pics/hibachi-hart.jpg',          alt: (c) => `Mobile hibachi chef in ${c}`,       caption: 'Flagstaff Mountain Cabin Events',            trustBadge: '4.9★ · NAU Graduation Season'             }, cta: { src: '/pics/backyard-hibachi-2.jpg',   alt: (c) => `Reserve your ${c} hibachi date`,   caption: 'No hookup required · From $60/adult'    } },
  'prescott':        { testimonial: { src: '/pics/private-party-chef-6.jpg', alt: (c) => `Backyard hibachi in ${c}`,          caption: 'Prescott Watson Lake & Cabin Events',       trustBadge: '5.0★ · Whiskey Row Corridor Trusted'     }, cta: { src: '/pics/hibachi-pic-3.jpg',        alt: (c) => `Reserve your ${c} hibachi date`,   caption: 'From $60/adult · No hookup required'    } },
}

// ─── Major Cities Map (all 18) ─────────────────────────────────────────────────
const AZ_MAJOR_CITIES = {
  // ── Batch 1 ────────────────────────────────────────────────────────────────
  'scottsdale':      { v: 0, profileIdx: 0,  nearby: ['Paradise Valley', 'Phoenix', 'Tempe', 'Fountain Hills', 'Chandler', 'Mesa'] },
  'paradise-valley': { v: 0, profileIdx: 1,  nearby: ['Scottsdale', 'Phoenix', 'Tempe', 'Chandler'] },
  'phoenix':         { v: 1, profileIdx: 2,  nearby: ['Scottsdale', 'Tempe', 'Chandler', 'Mesa', 'Glendale', 'Paradise Valley'] },
  'tempe':           { v: 2, profileIdx: 3,  nearby: ['Phoenix', 'Chandler', 'Mesa', 'Scottsdale', 'Gilbert'] },
  'fountain-hills':  { v: 2, profileIdx: 4,  nearby: ['Scottsdale', 'Mesa', 'Paradise Valley', 'Phoenix'] },
  // ── Batch 2 ────────────────────────────────────────────────────────────────
  'chandler':        { v: 2, profileIdx: 5,  nearby: ['Tempe', 'Gilbert', 'Mesa', 'Phoenix', 'Queen Creek'] },
  'gilbert':         { v: 2, profileIdx: 6,  nearby: ['Chandler', 'Mesa', 'Queen Creek', 'Tempe', 'Phoenix'] },
  'mesa':            { v: 2, profileIdx: 7,  nearby: ['Tempe', 'Chandler', 'Gilbert', 'Fountain Hills', 'Phoenix'] },
  'queen-creek':     { v: 2, profileIdx: 8,  nearby: ['Gilbert', 'Chandler', 'Mesa'] },
  // ── Batch 3 ────────────────────────────────────────────────────────────────
  'peoria':          { v: 3, profileIdx: 9,  nearby: ['Glendale', 'Surprise', 'Phoenix', 'Goodyear'] },
  'glendale':        { v: 3, profileIdx: 10, nearby: ['Peoria', 'Surprise', 'Phoenix', 'Goodyear'] },
  'surprise':        { v: 3, profileIdx: 11, nearby: ['Peoria', 'Glendale', 'Goodyear', 'Phoenix'] },
  'goodyear':        { v: 3, profileIdx: 12, nearby: ['Surprise', 'Glendale', 'Peoria', 'Phoenix'] },
  // ── Batch 4 ────────────────────────────────────────────────────────────────
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

// ─── City-Specific Intros (all 18, indices 540–557) ───────────────────────────
export const AZ_CITY_INTROS = [
  // 540 — Scottsdale (Batch 1)
  {
    headline: (city, state) => `Private Hibachi Chef in Scottsdale: Old Town, DC Ranch, Kierland Commons, and the North Scottsdale Corridor`,
    opening:  (city, state) => `Old Town Scottsdale bachelorette weekends, DC Ranch estate anniversary dinners, Silverleaf milestone birthday celebrations, and Kierland Commons-area golf retreat team dinners — a certified teppanyaki chef travels to your Scottsdale property with a fully self-contained propane teppan grill and puts on the live-fire performance your group has been anticipating. Scottsdale is Arizona's premier private dining market, and private hibachi is the format that its vacation rentals, luxury estates, and golf communities were built for.`,
    middle:   (city, state) => `Your chef brings the propane grill, all proteins including filet mignon and lobster tail, fried rice, vegetables, house-made sauces, and complete equipment. No gas hookup required at any Scottsdale vacation rental or residential property. Single station for up to 25 guests, dual stations for larger bachelorette and bachelor groups. Complete setup, 90–120 minute live performance, full cleanup.`,
    closing:  (city, state) => `Scottsdale Old Town bachelorette weekends and DC Ranch estate dates book 4–6 weeks ahead in peak season — submit your date now for a same-day quote.`,
  },
  // 541 — Paradise Valley (Batch 1)
  {
    headline: (city, state) => `Hibachi at Home in Paradise Valley: Camelback Mountain Estate Dinners, Mountain Shadows Events & Milestone Celebrations`,
    opening:  (city, state) => `Your Paradise Valley estate — Camelback Mountain corridor, Mummy Mountain, Mountain Shadows, Sanctuary Camelback, Paradise Valley Country Club — was built for evenings like this. A certified teppanyaki chef arrives at your property with the full live-fire setup, premium proteins as standard, and a performance that transforms your outdoor terrace or courtyard into the finest private dining room in the Valley. No restaurant reservation can replicate what your Paradise Valley property already is.`,
    middle:   (city, state) => `The chef brings a fully self-contained propane teppan grill, filet mignon and lobster tail across the whole table if you want it, fried rice, vegetables, house-made sauces, and complete equipment. Setup in 20–30 minutes. Live performance for 90–120 minutes. Full cleanup when dinner ends — your estate is exactly as it was.`,
    closing:  (city, state) => `Paradise Valley estate dates fill 3–5 weeks ahead in summer and holiday season — submit your date for a same-day quote.`,
  },
  // 542 — Phoenix (Batch 1)
  {
    headline: (city, state) => `Private Hibachi Chef in Phoenix: Arcadia, Biltmore, Desert Ridge, Ahwatukee, and Downtown Corporate Events`,
    opening:  (city, state) => `From Arcadia backyard anniversary dinners to Biltmore estate milestone events, from Desert Ridge graduation parties to downtown Phoenix corporate team dinners near Chase Field and Footprint Center — a certified teppanyaki chef travels to your Phoenix property with a fully self-contained propane teppan grill and performs for any size group. Phoenix is the Valley's core, and Roosevelt Row creatives, Ahwatukee families, and Biltmore executives have all found the same format: private hibachi at home beats any restaurant for the occasions that matter most.`,
    middle:   (city, state) => `The chef brings the propane teppan grill, all proteins, complete ingredients, and equipment. No gas hookup required. For corporate groups and graduation parties over 25, dual stations ensure everyone eats at the same time. Complete setup, 90–120 minute live performance, full cleanup.`,
    closing:  (city, state) => `Same-day quotes for any Phoenix neighborhood — submit your date and address and we respond immediately.`,
  },
  // 543 — Tempe (Batch 1)
  {
    headline: (city, state) => `Hibachi at Home in Tempe: ASU Graduation Parties, Tempe Town Lake Celebrations & Mill Avenue Events`,
    opening:  (city, state) => `ASU graduation backyard parties, Tempe Town Lake-area home celebrations, and milestone events in the city that anchors the East Valley — a private hibachi chef arrives at your Tempe property with everything needed so you're actually present at the event your family planned. Mill Avenue, University Drive, the Intel Ocotillo-adjacent communities — Tempe is a city where the occasions that matter happen at home, and private hibachi is the format that makes those evenings unforgettable.`,
    middle:   (city, state) => `Your chef brings the propane teppan grill, all proteins including premium upgrades, fried rice, vegetables, miso soup, salad, house-made sauces, and complete equipment. For ASU graduation parties of 30–50 guests, dual stations keep everyone eating at the same time. Setup in 20–30 minutes, full performance, complete cleanup.`,
    closing:  (city, state) => `ASU graduation Saturdays in May book 4–6 weeks ahead — submit your commencement date now to reserve.`,
  },
  // 544 — Fountain Hills (Batch 1)
  {
    headline: (city, state) => `Hibachi Catering in Fountain Hills: Firerock, Eagle Mountain, Four Peaks & Fountain Park Estate Events`,
    opening:  (city, state) => `Firerock Country Club-area estate dinners, Eagle Mountain Golf Club milestone celebrations, Four Peaks Golf Club retirement parties, and Fountain Park-adjacent milestone events — a private hibachi chef arrives at your Fountain Hills property with a fully self-contained propane setup and delivers the live-fire performance that makes an already-beautiful setting extraordinary. Fountain Hills is a community built around milestone entertaining, and private hibachi is the format that its large-lot residential properties were designed for.`,
    middle:   (city, state) => `The chef brings the propane teppan grill, all proteins, fried rice, vegetables, house-made sauces, and complete equipment. No gas hookup required at any Fountain Hills property. Premium upgrades — filet mignon, lobster tail, Chilean sea bass — available per guest. Setup in 20–30 minutes, live performance for 90–120 minutes, full cleanup.`,
    closing:  (city, state) => `Fountain Hills estate dates book 3–4 weeks ahead — submit your date and address for a same-day quote.`,
  },
  // 545 — Chandler (Batch 2)
  {
    headline: (city, state) => `Hibachi Catering in Chandler: Ocotillo, Agritopia, Fulton Ranch and Southeast Valley Corporate Events`,
    opening:  (city, state) => `Ocotillo executive home dinners, Agritopia community backyard celebrations, Fulton Ranch milestone parties, and Chandler tech corridor team events for Intel, PayPal, Wells Fargo, and Northrop Grumman campus communities — a certified teppanyaki chef travels to your Chandler property with a fully self-contained propane teppan grill and delivers the live performance that transforms a team event into a genuine occasion. Chandler is the technology capital of the East Valley, and private hibachi is the format that its professional community and large-lot residential neighborhoods were designed for.`,
    middle:   (city, state) => `Your chef brings the propane grill, all proteins, complete ingredients, and equipment. No gas hookup required at any Chandler property. For corporate events over 25, dual stations keep everyone eating and watching at the same time. Complete setup, 90–120 minute live performance, full cleanup.`,
    closing:  (city, state) => `Chandler corporate and graduation dates in May and June fill 4–6 weeks ahead — submit your date now for a same-day quote.`,
  },
  // 546 — Gilbert (Batch 2)
  {
    headline: (city, state) => `Hibachi at Home in Gilbert: Power Ranch, Val Vista Lakes, Eastmark and Southeast Valley Family Events`,
    opening:  (city, state) => `Power Ranch backyard birthday parties, Val Vista Lakes milestone celebration dinners, Eastmark community events, and Gilbert family gatherings across the Southeast Valley's most family-centric community — a private hibachi chef arrives at your Gilbert property so you're actually at the occasion you planned, not managing the kitchen. Gilbert's large-lot residential stock, strong family culture, and outdoor entertaining infrastructure make it one of the best-suited markets in Arizona for private hibachi.`,
    middle:   (city, state) => `Your chef brings the propane teppan grill, all proteins, fried rice, vegetables, miso soup, salad, house-made sauces, and complete equipment. For Gilbert graduation parties over 30, dual stations keep everyone eating at the same time. Complete setup, full performance, full cleanup.`,
    closing:  (city, state) => `Gilbert graduation Saturdays in May and June fill 4–6 weeks ahead — submit your date now to reserve.`,
  },
  // 547 — Mesa (Batch 2)
  {
    headline: (city, state) => `Hibachi at Home in Mesa: Las Sendas, Red Mountain, East Mesa and the Superstition Corridor`,
    opening:  (city, state) => `Las Sendas golf community estate dinners, Red Mountain neighborhood graduation parties, East Mesa family celebrations, and Superstition Corridor backyard events — a private hibachi chef arrives at your Mesa property with everything needed for a full teppanyaki performance. Mesa is the East Valley's largest city, and its residential communities — from Las Sendas foothills estates to the Red Mountain corridor to the Eastmark master-planned neighborhoods near the Superstition Mountains — have the outdoor entertaining infrastructure that private hibachi was designed for.`,
    middle:   (city, state) => `The chef brings the propane teppan grill, all proteins including premium upgrades, fried rice, vegetables, house-made sauces, and complete equipment. No gas hookup required at any Mesa property. For graduation parties over 25, dual stations are available. Complete setup, live performance, full cleanup.`,
    closing:  (city, state) => `Mesa graduation and birthday dates in May and June fill 4–6 weeks ahead — submit your date for a same-day quote.`,
  },
  // 548 — Queen Creek (Batch 2)
  {
    headline: (city, state) => `Backyard Hibachi in Queen Creek: Ranch Estates, Vineyard Properties and Southeast Valley Milestone Events`,
    opening:  (city, state) => `Queen Creek's large-lot ranch estates, vineyard-adjacent properties along Rittenhouse Road and Schnepf Road, and the southeast corridor's master-planned communities — a private hibachi chef arrives at your Queen Creek property with a fully self-contained propane setup and delivers the live-fire teppanyaki performance that turns a backyard into the finest private dining room in the Southeast Valley. Queen Creek's agricultural heritage and premium new development have created a community where the property itself is the venue, and private hibachi honors that tradition.`,
    middle:   (city, state) => `The chef brings the propane teppan grill, all proteins, fried rice, vegetables, house-made sauces, and complete equipment. Queen Creek's large residential lots easily accommodate any group size. For larger events over 30, dual stations are available. Complete setup, full performance, full cleanup.`,
    closing:  (city, state) => `Queen Creek estate and graduation dates fill 3–4 weeks ahead — submit your date and address for a same-day quote.`,
  },
  // 549 — Peoria (Batch 3)
  {
    headline: (city, state) => `Hibachi at Home in Peoria: Vistancia, Westwing Mountain, Sun City Grand and West Valley Home Celebrations`,
    opening:  (city, state) => `Vistancia community backyard celebrations, Westwing Mountain neighborhood milestone events, Sun City Grand retirement anniversary dinners, and Lake Pleasant-adjacent home gatherings — a private hibachi chef arrives at your Peoria property with a fully self-contained propane grill and delivers the performance your guests have been anticipating. Peoria's master-planned communities, large residential lots, and outdoor entertaining culture make it one of the West Valley's most natural markets for private hibachi.`,
    middle:   (city, state) => `Your chef brings the propane teppan grill, all proteins, fried rice, vegetables, house-made sauces, and complete equipment. No gas hookup required. For events over 25, dual stations are available. Complete setup, 90–120 minute live performance, full cleanup.`,
    closing:  (city, state) => `Peoria spring and summer dates fill 3–5 weeks ahead — submit your date and address for a same-day quote.`,
  },
  // 550 — Glendale (Batch 3)
  {
    headline: (city, state) => `Hibachi Catering in Glendale: Arrowhead Ranch, Westgate Entertainment District and West Valley Events`,
    opening:  (city, state) => `Arrowhead Ranch estate celebration dinners, Westgate Entertainment District-adjacent corporate team events, State Farm Stadium-area gatherings, and Glendale family backyard celebrations in the West Valley's entertainment hub — a certified teppanyaki chef arrives at your Glendale property fully self-contained and delivers the live-fire performance that makes any occasion feel like a genuine event. Glendale's combination of mature residential communities and corporate entertainment infrastructure creates consistent demand for the format that keeps everyone at the same table.`,
    middle:   (city, state) => `The chef brings the propane teppan grill, all proteins, complete ingredients, and equipment. No gas hookup required at any Glendale property. Single station for up to 25, dual stations for larger events. Complete setup, 90–120 minute performance, full cleanup.`,
    closing:  (city, state) => `Glendale corporate and birthday dates fill 3–4 weeks ahead — submit your date and address now.`,
  },
  // 551 — Surprise (Batch 3)
  {
    headline: (city, state) => `Hibachi at Home in Surprise: Marley Park, Rancho Gabriela and West Valley Backyard Celebrations`,
    opening:  (city, state) => `Marley Park neighborhood birthday celebrations, Rancho Gabriela backyard milestone dinners, Sun City Grand-area retirement events, and Surprise family gatherings across the West Valley's fastest-growing community — a private hibachi chef arrives at your Surprise property with everything needed. Surprise has grown into one of the West Valley's most active residential markets, and its large-lot communities and outdoor entertaining culture make the format feel built for this city.`,
    middle:   (city, state) => `Your chef brings the propane teppan grill, all proteins, fried rice, vegetables, miso soup, house-made sauces, and complete equipment. No gas hookup required at any Surprise property. For larger graduation parties and birthday events, dual stations are available. Complete setup, full performance, full cleanup.`,
    closing:  (city, state) => `Surprise spring and summer dates fill 3–4 weeks ahead — submit your date for a same-day quote.`,
  },
  // 552 — Goodyear (Batch 3)
  {
    headline: (city, state) => `Mobile Hibachi in Goodyear: PebbleCreek, Estrella Mountain Ranch and West Valley Home Events`,
    opening:  (city, state) => `PebbleCreek resort community retirement celebrations, Estrella Mountain Ranch estate dinners, Canyon Trails neighborhood milestone events, and Goodyear home gatherings in the West Valley's most resort-style residential market — a private hibachi chef arrives at your Goodyear property with a fully self-contained propane teppan grill. PebbleCreek's active adult community and Estrella's master-planned mountain communities have created a market where milestone celebrations are taken seriously, and private hibachi delivers exactly the format that matches that expectation.`,
    middle:   (city, state) => `The chef brings the propane teppan grill, all proteins including premium upgrades, fried rice, vegetables, house-made sauces, and complete equipment. No gas hookup required at any Goodyear property. Complete setup, 90–120 minute live performance, full cleanup.`,
    closing:  (city, state) => `Goodyear estate and retirement celebration dates fill 3–4 weeks ahead — submit your date and address for a same-day quote.`,
  },
  // 553 — Tucson (Batch 4)
  {
    headline: (city, state) => `Private Hibachi Chef in Tucson: UA Graduation Parties, Catalina Foothills Estate Dinners and Sabino Canyon Events`,
    opening:  (city, state) => `University of Arizona graduation weekend family dinners, Catalina Foothills estate anniversary celebrations, Sabino Canyon-adjacent backyard milestone events, Dove Mountain resort community gatherings, and Ventana Canyon estate dinners — a certified teppanyaki chef arrives at your Tucson property with the full live-fire setup. Tucson is Arizona's second city and the state's premier university market: a genuine community of foothills estates, canyon-adjacent homes, and residential neighborhoods where private hibachi delivers what no Tucson restaurant can replicate.`,
    middle:   (city, state) => `The chef brings a fully self-contained propane teppan grill, all proteins including premium upgrades, all ingredients, and complete equipment. No gas hookup required at any Tucson property. Live performance for 90–120 minutes, complete cleanup when dinner ends.`,
    closing:  (city, state) => `UA graduation weekends in May book 4–6 weeks ahead — if you have a commencement date, reserve now.`,
  },
  // 554 — Oro Valley (Batch 4)
  {
    headline: (city, state) => `Hibachi at Home in Oro Valley: Dove Mountain, Rancho Vistoso and Catalina State Park Home Celebrations`,
    opening:  (city, state) => `Dove Mountain resort community estate dinners, Rancho Vistoso milestone backyard celebrations, Ventana Canyon-adjacent anniversary events, La Paloma-area milestone gatherings, and Oro Valley home events in the Santa Catalina Mountain foothills — a private hibachi chef arrives at your Oro Valley property with everything needed for a full teppanyaki performance. Oro Valley is Tucson's most affluent community, and its large-lot homes, resort-adjacent properties, and mountain-view outdoor spaces are exactly what private hibachi was designed to complement.`,
    middle:   (city, state) => `Your chef brings the propane teppan grill, all proteins, fried rice, vegetables, house-made sauces, and complete equipment. No gas hookup required. Premium upgrades including filet mignon and lobster tail available per guest. Complete setup, live performance, full cleanup.`,
    closing:  (city, state) => `Oro Valley estate and milestone dates fill 3–4 weeks ahead — submit your date for a same-day quote.`,
  },
  // 555 — Sedona (Batch 4)
  {
    headline: (city, state) => `Mobile Hibachi in Sedona: Red Rock Vacation Rentals, Oak Creek Canyon Cabins and Bachelorette Weekend Events`,
    opening:  (city, state) => `Your Sedona vacation rental — Red Rock Crossing, Chapel of the Holy Cross corridor, Tlaquepaque-adjacent properties, Oak Creek Canyon cabins, Red Rock State Park-area homes — a certified teppanyaki chef arrives with a fully self-contained propane teppan grill, all proteins, and the complete live-fire setup. No gas hookup. No outdoor kitchen. The performance happens on your deck with Sedona's iconic red rocks as the backdrop. Bachelorette weekends, anniversary destination getaways, and family reunion trips — the chef is self-contained, the setting is Sedona, and the evening becomes the memory the trip was built around.`,
    middle:   (city, state) => `The chef arrives 20–30 minutes before the performance, sets up on any flat outdoor surface at your Sedona property, and performs for 90–120 minutes from first flame to final plate. Premium proteins — filet mignon, lobster tail, wagyu — are standard requests for Sedona bachelorette weekends. Complete cleanup when dinner ends.`,
    closing:  (city, state) => `Peak Sedona season (February–May, September–November) books 6–8 weeks ahead — reserve the chef when you confirm the rental.`,
  },
  // 556 — Flagstaff (Batch 4)
  {
    headline: (city, state) => `Mobile Hibachi in Flagstaff: Arizona Snowbowl Cabin Events, Mountain Vacation Rentals and NAU Graduation Parties`,
    opening:  (city, state) => `Your Flagstaff mountain cabin near Arizona Snowbowl, your NAU-area vacation rental, your Ponderosa Park property with pine forest views, your Lowell Observatory-adjacent weekend home — a certified teppanyaki chef arrives with a fully self-contained propane teppan grill, all proteins, and everything needed for the full teppanyaki performance. NAU graduation weekend family dinners, corporate mountain retreat team events, and destination bachelorette weekends all happen on the same self-contained chef setup. Flagstaff is Arizona's mountain city, and private hibachi is the format that keeps your group at the cabin instead of driving into town.`,
    middle:   (city, state) => `The chef brings a self-contained propane teppan grill — no hookup required at any Flagstaff cabin or rental property. Setup in 20 minutes on any flat deck or outdoor surface. Live performance for 90–120 minutes, complete cleanup included. Premium proteins available for NAU graduation and corporate retreat events.`,
    closing:  (city, state) => `NAU graduation weekends in May book 5–7 weeks ahead. Peak Flagstaff summer cabin weekends fill 4–6 weeks ahead — book when you confirm the rental.`,
  },
  // 557 — Prescott (Batch 4)
  {
    headline: (city, state) => `Backyard Hibachi in Prescott: Whiskey Row Cabin Weekends, Watson Lake Properties and Prescott Valley Events`,
    opening:  (city, state) => `Watson Lake-adjacent cabin celebrations, Whiskey Row bachelorette weekend vacation rental dinners, Granite Dells-area property events, and Prescott Valley milestone backyard parties — a private hibachi chef arrives at your Prescott property with a fully self-contained propane teppan grill and delivers the performance that turns a Dells country evening into something genuinely memorable. Prescott is Arizona's mountain-historic destination: Victorian homes, ponderosa pines, and a vacation rental market built around weekenders who want to stay at the property, not drive to a restaurant.`,
    middle:   (city, state) => `The chef brings the propane teppan grill, all proteins, fried rice, vegetables, house-made sauces, and complete equipment. No gas hookup required at any Prescott property or vacation rental. Premium upgrades including filet mignon and lobster tail available. Complete setup, full performance, full cleanup.`,
    closing:  (city, state) => `Peak Prescott season (spring and fall) and Watson Lake-adjacent vacation rental dates book 4–6 weeks ahead — reserve the chef when you confirm the property.`,
  },
]

// ─── City-Specific Closings (all 18, indices 540–557) ─────────────────────────
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
  // 545 — Chandler
  { headline: (city) => `Book Your Chandler Hibachi Event`, sub: (city) => `Ocotillo, Agritopia, Fulton Ranch, and the Chandler tech corridor — submit your date and address for a same-day quote.`, urgency: 'Chandler corporate and graduation season dates fill 4–6 weeks ahead. Reserve now with a deposit.', cta: { label: 'Request a Chandler Quote', caption: 'Corporate packages · From $60/adult' } },
  // 546 — Gilbert
  { headline: (city) => `Book Your Gilbert Backyard Event`, sub: (city) => `Power Ranch, Val Vista Lakes, Eastmark — graduation parties, birthday celebrations, and family milestones in Gilbert. Same-day quotes.`, urgency: 'Gilbert graduation Saturdays in May and June fill 4–6 weeks ahead. Submit your date now.', cta: { label: 'Book Your Gilbert Date', caption: 'From $60/adult · Graduation season books fast' } },
  // 547 — Mesa
  { headline: (city) => `Book Your Mesa Hibachi Event`, sub: (city) => `Las Sendas, Red Mountain, East Mesa — submit your date and address for a same-day Mesa quote.`, urgency: 'Mesa graduation and birthday peak season dates fill 4–6 weeks ahead. Reserve now.', cta: { label: 'Request a Mesa Quote', caption: 'From $60/adult · Same-day quotes' } },
  // 548 — Queen Creek
  { headline: (city) => `Book Your Queen Creek Backyard Event`, sub: (city) => `Ranch estates, vineyard properties, and master-planned community homes — same-day quotes for any Queen Creek date.`, urgency: 'Queen Creek spring and summer dates fill 3–4 weeks ahead. Reserve yours now with a deposit.', cta: { label: 'Book Your Queen Creek Date', caption: 'From $60/adult · Large lots welcome' } },
  // 549 — Peoria
  { headline: (city) => `Book Your Peoria Hibachi Event`, sub: (city) => `Vistancia, Westwing Mountain, Sun City Grand — submit your date and address for a same-day Peoria quote.`, urgency: 'Peoria spring and summer dates fill 3–5 weeks ahead. Reserve yours now.', cta: { label: 'Request a Peoria Quote', caption: 'From $60/adult · Same-day quotes' } },
  // 550 — Glendale
  { headline: (city) => `Book Your Glendale Hibachi Event`, sub: (city) => `Arrowhead Ranch, Westgate, and Glendale backyard events — submit your date and address for a same-day quote.`, urgency: 'Glendale spring and summer dates fill 3–4 weeks ahead. Lock your date with a deposit.', cta: { label: 'Request a Glendale Quote', caption: 'From $60/adult · Same-day quotes' } },
  // 551 — Surprise
  { headline: (city) => `Book Your Surprise Backyard Event`, sub: (city) => `Marley Park, Rancho Gabriela, and West Valley celebrations — same-day quotes for any Surprise date.`, urgency: 'Surprise spring and summer dates fill 3–4 weeks ahead. Reserve now with a deposit.', cta: { label: 'Book Your Surprise Date', caption: 'From $60/adult · West Valley events' } },
  // 552 — Goodyear
  { headline: (city) => `Book Your Goodyear Hibachi Event`, sub: (city) => `PebbleCreek, Estrella Mountain Ranch, Canyon Trails — submit your date and address for a same-day Goodyear quote.`, urgency: 'Goodyear spring and retirement celebration season fills 3–4 weeks ahead. Reserve yours now.', cta: { label: 'Reserve Your Goodyear Date', caption: 'From $60/adult · Same-day quotes' } },
  // 553 — Tucson
  { headline: (city) => `Book Your Tucson Hibachi Event`, sub: (city) => `UA graduation weekend, Catalina Foothills estate, or Tucson backyard celebration — same-day quotes for any Tucson date.`, urgency: 'UA graduation weekends in May book 4–6 weeks ahead. If you have a commencement date, reserve the chef now.', cta: { label: 'Get a Same-Day Quote', caption: 'From $60/adult · UA season fills fast' } },
  // 554 — Oro Valley
  { headline: (city) => `Book Your Oro Valley Estate Event`, sub: (city) => `Dove Mountain, Rancho Vistoso, Ventana Canyon — most Oro Valley quotes returned same day. Deposit locks your date immediately.`, urgency: 'Oro Valley estate and milestone dates fill 3–4 weeks ahead. Reserve yours now.', cta: { label: 'Reserve Your Oro Valley Date', caption: 'From $60/adult · Same-day quotes' } },
  // 555 — Sedona
  { headline: (city) => `Book Your Sedona Mountain Hibachi Event`, sub: (city) => `Red Rock vacation rentals, Oak Creek Canyon cabins, and bachelorette weekends — a fully self-contained chef arrives at your Sedona property with everything needed.`, urgency: 'Peak Sedona season books 6–8 weeks ahead. Reserve the chef when you confirm the rental.', cta: { label: 'Reserve Your Sedona Date', caption: 'From $60/adult · No hookup required' } },
  // 556 — Flagstaff
  { headline: (city) => `Book Your Flagstaff Mountain Hibachi Event`, sub: (city) => `Snowbowl cabin weekends, mountain vacation rentals, and NAU graduation parties — a self-contained chef arrives at your Flagstaff property ready.`, urgency: 'NAU graduation weekends in May and peak summer Flagstaff dates fill 5–7 weeks ahead. Book now.', cta: { label: 'Reserve Your Flagstaff Date', caption: 'From $60/adult · No hookup required' } },
  // 557 — Prescott
  { headline: (city) => `Book Your Prescott Hibachi Event`, sub: (city) => `Watson Lake cabins, Whiskey Row bachelorette weekends, Granite Dells properties — same-day quotes for any Prescott date.`, urgency: 'Peak Prescott season (spring and fall) and bachelorette weekends fill 4–6 weeks ahead. Reserve yours now.', cta: { label: 'Reserve Your Prescott Date', caption: 'From $60/adult · No hookup required' } },
]

// ─── Testimonials (3 per city, all 18) ────────────────────────────────────────
const AZ_TESTIMONIALS = {
  // Batch 1
  'scottsdale': [
    { name: 'Kayla M.', text: 'Bachelorette weekend at our Old Town Scottsdale vacation rental — 16 women, Saturday evening on the rooftop terrace. The chef arrived fully self-contained, performed for two hours, and it became the event the entire trip was centered around. Fire tricks, flying shrimp, lobster tail upgrade for the whole group. Book way ahead for Old Town peak weekends.', location: 'Scottsdale, AZ', rating: 5, event: 'Bachelorette Weekend' },
    { name: 'Ryan T.', text: 'Corporate golf retreat team dinner at our Troon North-area property — 22 guests. We wanted something that felt like a genuine event rather than another catered box. The chef delivered exactly that: professional, engaging, and the food quality was genuinely impressive. Dual stations for the larger group, everyone ate at the same time.', location: 'Scottsdale, AZ', rating: 5, event: 'Corporate Golf Retreat Dinner' },
    { name: 'Lauren A.', text: 'Anniversary dinner at our DC Ranch property — 14 guests. We\'d been to restaurants in North Scottsdale and nothing matched what we were looking for. Private hibachi at home was the answer. The chef set up on our backyard terrace, performed for the group, and left everything spotless. Premium proteins across the board.', location: 'Scottsdale, AZ', rating: 5, event: 'Anniversary Estate Dinner' },
  ],
  'paradise-valley': [
    { name: 'Victoria H.', text: 'Anniversary dinner at our Camelback Mountain-area estate — 12 guests. We specifically wanted something that matched the caliber of the property, not a restaurant that happened to be nearby. The chef arrived at our home, set up on the outdoor terrace with mountain views as the backdrop, and gave us an evening that the setting deserved. Wagyu and lobster tail across the table.', location: 'Paradise Valley, AZ', rating: 5, event: 'Anniversary Estate Dinner' },
    { name: 'Michael B.', text: 'Milestone birthday at our Mountain Shadows-area property — 20 guests. Executive guests who\'ve attended events all over the country, and the feedback was unanimous: this was the best dinner format any of them had experienced at a private home. The chef was flawless, the performance was full, and the cleanup was complete.', location: 'Paradise Valley, AZ', rating: 5, event: 'Milestone Birthday Celebration' },
    { name: 'Susan W.', text: 'Family holiday gathering at our Sanctuary Camelback-adjacent home — 18 guests. We wanted something that kept the family together at the table rather than scattered at a restaurant. Private hibachi solved everything: one setting, one performance, every generation engaged simultaneously.', location: 'Paradise Valley, AZ', rating: 5, event: 'Family Holiday Gathering' },
  ],
  'phoenix': [
    { name: 'David R.', text: 'Corporate team dinner at our Biltmore-area property — 28 guests. We wanted something genuinely memorable rather than another restaurant group reservation. The chef turned our backyard into a performance venue. Dual stations for the larger group, everyone ate at the same time, and we got more engagement than any conference-room event we\'ve done.', location: 'Phoenix, AZ', rating: 5, event: 'Corporate Team Dinner' },
    { name: 'Jessica L.', text: 'Arcadia graduation party for 36 family members. Our neighborhood backyard was perfect for the setup. The chef handled the full group with ease, ran dual stations, and the performance had kids and parents equally amazed. The filet mignon upgrade for our graduate was absolutely worth it.', location: 'Phoenix, AZ', rating: 5, event: 'Graduation Party' },
    { name: 'Carlos M.', text: 'Birthday celebration in our Desert Ridge-area home — 24 guests. Phoenix evenings after 6 PM are perfect for this format. Chef arrived on time, fully self-contained, performed for two hours, left everything clean. The hibachi format keeps everyone together at one table — that\'s what made it special.', location: 'Phoenix, AZ', rating: 5, event: 'Birthday Celebration' },
  ],
  'tempe': [
    { name: 'Megan P.', text: 'ASU graduation party in our Tempe backyard — 42 family members. We\'d been looking for something that wasn\'t a restaurant group reservation and this was the answer. Chef arrived, set up dual stations in our backyard, and performed for two and a half hours. Every age from 4 to 78 was engaged the entire time.', location: 'Tempe, AZ', rating: 5, event: 'ASU Graduation Party' },
    { name: 'Trevor A.', text: 'Birthday dinner for 20 guests near Tempe Town Lake. Our outdoor patio had exactly the space needed and the chef used it perfectly. Fire tricks, the volcano, flying shrimp — genuinely impressive entertainment on top of great food. The group talked about it for weeks after.', location: 'Tempe, AZ', rating: 5, event: 'Birthday Celebration' },
    { name: 'Amanda N.', text: 'Department team dinner at our Tempe property — 18 people. The tech corridor near Tempe is exactly the kind of professional community that appreciates a genuine experience. The chef was professional and personable, and the performance was the best team event our department has done.', location: 'Tempe, AZ', rating: 5, event: 'Corporate Team Dinner' },
  ],
  'fountain-hills': [
    { name: 'Richard G.', text: 'Retirement celebration at our Firerock Country Club-area home — 30 guests. It was exactly right: a genuine milestone evening at the property we\'ve entertained at for twenty years, with a format that kept every guest at the same table for the entire evening. Filet mignon and lobster tail upgrade across the board.', location: 'Fountain Hills, AZ', rating: 5, event: 'Retirement Celebration Dinner' },
    { name: 'Linda S.', text: 'Anniversary dinner at our Eagle Mountain Golf Club home — 16 guests. The chef set up on our patio with the golf course as the backdrop, performed for 90 minutes, and left everything spotless. Premium proteins, impeccable service. We\'re already planning the same format for the next milestone.', location: 'Fountain Hills, AZ', rating: 5, event: 'Anniversary Estate Dinner' },
    { name: 'Tom H.', text: 'Milestone birthday at our Fountain Park-area property — 22 guests. Professional from arrival to cleanup, genuinely talented at the performance, and the filet mignon upgrade made it feel like a special occasion. Outstanding.', location: 'Fountain Hills, AZ', rating: 5, event: 'Milestone Birthday Celebration' },
  ],
  // Batch 2
  'chandler': [
    { name: 'Brian K.', text: 'Team dinner for our Intel Chandler campus group — 26 employees at my Ocotillo-area home. We wanted something better than a restaurant group block, and private hibachi was exactly that. The chef arrived fully self-contained, ran dual stations for the larger group, and gave us the best team event we\'ve hosted. Everyone is already asking about the next one.', location: 'Chandler, AZ', rating: 5, event: 'Corporate Team Dinner' },
    { name: 'Nicole A.', text: 'Graduation party in our Fulton Ranch backyard — 38 family members. The lot had exactly the space needed and the chef used every inch of it perfectly. Dual stations kept everyone eating at the same time. My daughter\'s graduation was everything we wanted it to be, and I didn\'t spend the evening managing the kitchen.', location: 'Chandler, AZ', rating: 5, event: 'Graduation Party' },
    { name: 'Derek F.', text: 'Birthday celebration at our Agritopia-adjacent home — 22 guests. The neighborhood has a community feel that private hibachi matched perfectly — everyone around the grill together, engaging with the chef, sharing the same experience. Filet mignon upgrade was excellent. Highly recommend.', location: 'Chandler, AZ', rating: 5, event: 'Birthday Celebration' },
  ],
  'gilbert': [
    { name: 'Stephanie C.', text: 'Power Ranch birthday party for 34 family members. Our backyard is built for this size — the chef set up with room to spare and ran the full performance without a single issue. The kids were absolutely transfixed by the fire tricks and the adults were raving about the food quality. Already planning next year\'s graduation the same way.', location: 'Gilbert, AZ', rating: 5, event: 'Birthday Party' },
    { name: 'Jason T.', text: 'High school graduation party in our Val Vista Lakes neighborhood — 44 guests. Chef arrived on time, set up dual stations, and handled the full group seamlessly. It\'s the kind of event that keeps everyone at the same table — no splitting the group, no restaurant logistics. The best graduation format we\'ve done.', location: 'Gilbert, AZ', rating: 5, event: 'Graduation Party' },
    { name: 'Maria S.', text: 'Anniversary dinner at our Eastmark home — 16 guests. We\'re newer to the community and wanted to host something genuinely impressive. Private hibachi delivered: the chef was professional, the performance was full, and every guest complimented the evening for weeks. We\'re already the hibachi hosts of the neighborhood.', location: 'Gilbert, AZ', rating: 5, event: 'Anniversary Dinner' },
  ],
  'mesa': [
    { name: 'Paul D.', text: 'Graduation party at our Las Sendas home — 40 guests in our foothills backyard. The setting with the mountain backdrop made an already-impressive performance extraordinary. Chef ran dual stations perfectly, everyone ate at the same time, and not a single guest was looking at their phone. Book early for May — this market fills fast.', location: 'Mesa, AZ', rating: 5, event: 'Graduation Party' },
    { name: 'Karen B.', text: 'Family reunion at our Red Mountain-area property — 28 guests. Three generations, cousins from out of state. The chef had every age completely engaged from the first flame. Grandkids talked about the fire volcano for weeks. The food quality was genuinely excellent and the cleanup was complete.', location: 'Mesa, AZ', rating: 5, event: 'Family Reunion' },
    { name: 'Chris M.', text: 'Birthday celebration in our East Mesa backyard — 24 guests. Superstition Mountain views as the backdrop made the setting already special — the chef made it unforgettable. Professional, personable, genuinely talented. Filet mignon and shrimp upgrade across the table.', location: 'Mesa, AZ', rating: 5, event: 'Birthday Celebration' },
  ],
  'queen-creek': [
    { name: 'Emily R.', text: 'Milestone anniversary dinner at our Queen Creek ranch property — 18 guests. We have the kind of lot that was built for this: large outdoor space, quiet setting, mountain views to the east. The chef set up on our patio, performed for two hours, and left everything spotless. Lobster tail and wagyu across the board. The finest evening we\'ve hosted at this property.', location: 'Queen Creek, AZ', rating: 5, event: 'Anniversary Ranch Dinner' },
    { name: 'Gary P.', text: 'Graduation party in our SE Valley backyard — 36 family members. Queen Creek lots have the space for this format in a way our friends in smaller suburban neighborhoods can\'t do. The chef handled the full group, dual stations, full performance. Our graduate said it was the best party she\'d ever attended.', location: 'Queen Creek, AZ', rating: 5, event: 'Graduation Party' },
    { name: 'Sandra N.', text: 'Birthday celebration at our Queen Creek property — 22 guests. We specifically moved to Queen Creek for the outdoor space, and this event used that space exactly right. Chef arrived ready, set up on the back patio, performed for 90 minutes, cleaned up perfectly. Already planning the retirement party the same way.', location: 'Queen Creek, AZ', rating: 5, event: 'Birthday Celebration' },
  ],
  // Batch 3
  'peoria': [
    { name: 'Sharon L.', text: 'Retirement celebration at our Vistancia home — 32 guests. My husband and I specifically wanted this format for the milestone: everyone at the same table, a genuine performance, premium food, and we\'re actually present for the whole evening instead of managing catering. The chef was exceptional and left everything spotless.', location: 'Peoria, AZ', rating: 5, event: 'Retirement Celebration' },
    { name: 'Todd W.', text: 'Westwing Mountain birthday party — 26 guests in our backyard with the White Tank Mountain backdrop. The chef used the setting perfectly. Fire tricks, the full performance, filet mignon upgrade for the birthday table. Our neighborhood group has been talking about it for months.', location: 'Peoria, AZ', rating: 5, event: 'Birthday Party' },
    { name: 'Rose M.', text: 'Family gathering for 20 guests at our Sun City Grand-area home. Mixed ages from 8 to 81. The chef engaged every generation simultaneously — the grandchildren were completely transfixed and the adults were raving about the food. This is the format for any occasion where you need everyone actually together.', location: 'Peoria, AZ', rating: 5, event: 'Family Celebration' },
  ],
  'glendale': [
    { name: 'Mark H.', text: 'Corporate client appreciation dinner at our Arrowhead Ranch home — 24 guests. We entertain clients regularly and this format was the one that generated the most positive feedback we\'ve ever received. The chef was professional, the performance was full and impressive, and the food quality matched any restaurant in Glendale or Scottsdale.', location: 'Glendale, AZ', rating: 5, event: 'Corporate Client Dinner' },
    { name: 'Trish F.', text: 'Birthday party at our Glendale backyard — 30 guests. The kids were going absolutely wild over the fire tricks and flying shrimp, and the adults couldn\'t stop complimenting the food. The chef kept everyone engaged for two hours. We\'re doing graduation the exact same way next spring.', location: 'Glendale, AZ', rating: 5, event: 'Birthday Party' },
    { name: 'Anthony G.', text: 'Anniversary dinner at our home near Westgate — 16 guests. We\'ve gone to restaurants for anniversaries for years and none of them matched what this format delivered at our own home. The chef performed for 90 minutes, premium proteins across the table, cleanup was complete. Outstanding.', location: 'Glendale, AZ', rating: 5, event: 'Anniversary Dinner' },
  ],
  'surprise': [
    { name: 'Jennifer P.', text: 'Birthday party in our Marley Park backyard — 28 guests. The neighborhood is exactly the kind of community that gathers outdoors, and the hibachi format was built for this setting. Chef arrived on time, performed for two hours, left everything spotless. The fire volcano had every kid and adult completely amazed.', location: 'Surprise, AZ', rating: 5, event: 'Birthday Party' },
    { name: 'Bill R.', text: 'Retirement dinner at our Sun City Grand home — 22 guests. We wanted a celebration that matched the milestone and this was exactly right. Premium proteins, impeccable performance, and my wife and I were actually present for the entire evening instead of hosting from the kitchen. Lobster tail and filet mignon. Excellent.', location: 'Surprise, AZ', rating: 5, event: 'Retirement Celebration' },
    { name: 'Diana N.', text: 'Graduation party in our Rancho Gabriela backyard — 34 family members. Large lot, perfect for this size. Chef ran dual stations, everyone ate simultaneously, and the performance kept every age at the table for the full evening. Our daughter said it was the best graduation party she\'d ever been to.', location: 'Surprise, AZ', rating: 5, event: 'Graduation Party' },
  ],
  'goodyear': [
    { name: 'Robert A.', text: 'Anniversary dinner at our PebbleCreek home — 14 guests. PebbleCreek is a community that takes entertaining seriously, and this chef matched that standard completely. Premium proteins, full performance, impeccable cleanup. It was the finest private dinner we\'ve hosted in this community. Already planning the same format for our next milestone.', location: 'Goodyear, AZ', rating: 5, event: 'Anniversary Estate Dinner' },
    { name: 'Linda T.', text: 'Birthday celebration at our Estrella Mountain Ranch property — 20 guests. The mountain backdrop made the setting extraordinary and the chef made the event match it. Wagyu and lobster tail upgrade, full teppanyaki performance, the fire tricks had everyone completely engaged. Outstanding evening.', location: 'Goodyear, AZ', rating: 5, event: 'Birthday Celebration' },
    { name: 'Frank S.', text: 'Family gathering at our Canyon Trails backyard — 24 guests from three generations. The chef handled every dietary preference across the table and still delivered a full performance that had everyone watching from the first flame. The youngest guests were convinced the flying shrimp was magic.', location: 'Goodyear, AZ', rating: 5, event: 'Family Celebration' },
  ],
  // Batch 4
  'tucson': [
    { name: 'Rachel K.', text: 'UA graduation party in our Catalina Foothills backyard — 38 family members. We flew family in from five states for our daughter\'s graduation and wanted the dinner to match the occasion. Chef arrived fully self-contained, ran dual stations for the full group, and gave us an evening nobody will forget. The Catalina Mountains as a backdrop made it extraordinary.', location: 'Tucson, AZ', rating: 5, event: 'UA Graduation Party' },
    { name: 'James N.', text: 'Anniversary dinner at our Sabino Canyon-adjacent estate — 16 guests. We\'ve lived in Tucson for twenty years and entertained at this property many times. Private hibachi was the format that matched what the property is. The chef was exceptional, the food was genuinely excellent, and we were actually present at our own anniversary dinner for once.', location: 'Tucson, AZ', rating: 5, event: 'Anniversary Estate Dinner' },
    { name: 'Patricia H.', text: 'Corporate team dinner at our Dove Mountain property — 22 guests. Tucson is a professional community that appreciates a genuine experience, and private hibachi delivered exactly that. The performance kept the team engaged for two full hours and the feedback afterward was unanimous: best company event in memory.', location: 'Tucson, AZ', rating: 5, event: 'Corporate Team Dinner' },
  ],
  'oro-valley': [
    { name: 'Carol S.', text: 'Milestone birthday at our Dove Mountain property — 18 guests. Oro Valley homes have the outdoor space and the setting that private hibachi was built for. The chef arrived fully self-contained, set up on our back terrace with the Catalinas as the backdrop, and performed for 90 minutes. Filet mignon and lobster tail upgrade. A genuinely outstanding evening.', location: 'Oro Valley, AZ', rating: 5, event: 'Milestone Birthday' },
    { name: 'Tom B.', text: 'Anniversary dinner at our Rancho Vistoso home — 14 guests. We chose Oro Valley specifically for the setting, and the chef used that setting exactly right. Premium proteins, impeccable performance, complete cleanup. Our guests have been asking about booking their own events ever since.', location: 'Oro Valley, AZ', rating: 5, event: 'Anniversary Dinner' },
    { name: 'Nancy G.', text: 'Family celebration at our Ventana Canyon-adjacent property — 20 guests. Three generations, guests from out of state. The chef engaged everyone from the grandchildren to the grandparents simultaneously. The food was excellent and the performance was full and impressive. This is now our family\'s go-to format for every milestone.', location: 'Oro Valley, AZ', rating: 5, event: 'Family Milestone Event' },
  ],
  'sedona': [
    { name: 'Ashley D.', text: 'Bachelorette weekend at our Red Rock vacation rental — 14 women, Saturday evening on the deck. The chef arrived fully self-contained — no hookup needed at our Sedona rental — and performed for two hours with Cathedral Rock as the backdrop. Wagyu and lobster tail for the bride. It was the event the entire weekend was centered around. Book 6+ weeks ahead for peak Sedona season.', location: 'Sedona, AZ', rating: 5, event: 'Bachelorette Weekend' },
    { name: 'Mark E.', text: 'Anniversary destination dinner at our Oak Creek Canyon property — 12 guests. We come to Sedona every year and have done every restaurant in town. The private hibachi at our rental was the first dinner that felt truly special in the way the setting deserves. Chilean sea bass and filet mignon. The red rocks at sunset as the backdrop — nothing a restaurant can replicate.', location: 'Sedona, AZ', rating: 5, event: 'Anniversary Destination Dinner' },
    { name: 'Claire W.', text: 'Family reunion at our Sedona vacation property — 20 guests. Self-contained propane — we were genuinely surprised no hookup was needed at our remote rental. The chef set up on the deck in 20 minutes, performed for two hours, and gave us the anchor event of the whole trip. Everyone is already asking about the same format next year.', location: 'Sedona, AZ', rating: 5, event: 'Family Reunion Rental Weekend' },
  ],
  'flagstaff': [
    { name: 'Brittany H.', text: 'Bachelorette cabin weekend near Arizona Snowbowl — 12 women. We specifically chose Flagstaff for the pines and the mountain setting, and the hibachi dinner on the cabin deck matched that setting perfectly. Chef arrived fully self-contained, no gas hookup needed, performed for two hours in the cool mountain air. Lobster tail for the bride. It was the standout night of the entire trip.', location: 'Flagstaff, AZ', rating: 5, event: 'Bachelorette Cabin Weekend' },
    { name: 'Dr. Kevin M.', text: 'NAU graduation family dinner at our Flagstaff vacation rental — 28 guests. Flew family in from four states. The chef handled the full group with dual stations, performed for two and a half hours, and gave us an evening that matched the milestone. Complete cleanup — the rental was exactly as we found it.', location: 'Flagstaff, AZ', rating: 5, event: 'NAU Graduation Dinner' },
    { name: 'Ellen P.', text: 'Corporate mountain retreat team dinner at our Ponderosa Park-area property — 16 guests. We needed something that kept the team at the property instead of driving into town for dinner. The chef was the right answer: self-contained, professional, and genuinely impressive. The team called it the best company event we\'ve done.', location: 'Flagstaff, AZ', rating: 5, event: 'Corporate Mountain Retreat' },
  ],
  'prescott': [
    { name: 'Diane C.', text: 'Bachelorette weekend at our Watson Lake-area cabin — 10 women. We specifically chose Prescott for the pines and the historic town feel, and the hibachi dinner on our cabin deck was exactly the right format for staying at the property instead of going out. Chef arrived self-contained, performed for two hours, full cleanup. The fire tricks against the Granite Dells backdrop was something none of us will forget.', location: 'Prescott, AZ', rating: 5, event: 'Bachelorette Cabin Weekend' },
    { name: 'George P.', text: 'Anniversary dinner at our Whiskey Row-area vacation property — 14 guests. We\'ve done Prescott restaurants for years and nothing matched what private hibachi delivered at our own rental. The chef was professional, the food was excellent, and we were actually at the table for the full evening. Filet mignon and lobster tail. Outstanding.', location: 'Prescott, AZ', rating: 5, event: 'Anniversary Cabin Dinner' },
    { name: 'Karen B.', text: 'Milestone birthday at our Prescott Valley home — 22 guests. Large backyard, mountain views, and a chef who delivered a full two-hour performance that every age at the table genuinely enjoyed. The fire volcano was a moment nobody expected. We\'re already planning the retirement celebration the same way.', location: 'Prescott, AZ', rating: 5, event: 'Milestone Birthday' },
  ],
}

// ─── Section Variants (6 themes) ───────────────────────────────────────────────
const AZ_SECTION_VARIANTS = [
  // T0 — Scottsdale & Paradise Valley Luxury
  {
    heroPill: 'Luxury Estate & Resort Dining',
    experiencePill: 'The Scottsdale & Paradise Valley Experience',
    experiencePoints: [
      { icon: '🏡', title: 'Chef Comes to Your Estate',          desc: 'A certified teppanyaki chef arrives at your estate or vacation rental with a self-contained propane grill — no gas hookup required.' },
      { icon: '🎭', title: 'Full Live Performance',               desc: 'Fire tricks, flying shrimp, knife work — every guest served at the table during a 90–120 minute live teppanyaki performance.' },
      { icon: '🥩', title: 'Premium Proteins by Default',         desc: 'Filet mignon, Chilean sea bass, lobster tail, and wagyu available — the luxury-market standard at every Scottsdale and Paradise Valley event.' },
      { icon: '✨', title: 'Complete Setup & Full Cleanup',       desc: 'Full setup before dinner and complete cleanup after. Your estate or rental property is exactly as it was when the chef arrived.' },
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
      { icon: '🏙️', title: 'Any Occasion, Any Phoenix Neighborhood', desc: 'Corporate team events, client appreciation dinners, graduation parties, and home celebrations — one format, any Phoenix neighborhood.' },
      { icon: '👨‍🍳', title: 'Chef Travels to Your Phoenix Property',  desc: 'A certified teppanyaki chef travels to your Arcadia, Biltmore, Desert Ridge, or downtown Phoenix property fully self-contained.' },
      { icon: '👥', title: 'Scales to Any Group Size',               desc: 'Groups of 8–60+ served: single chef station for up to 25, dual stations for larger Phoenix events.' },
      { icon: '🧹', title: 'Zero Logistics for You',                 desc: 'Complete setup and full cleanup — no venue coordination, no caterer to manage. Just show up to your own event.' },
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
      { q: 'What Phoenix neighborhoods does your private hibachi chef serve?', a: 'We serve all of Greater Phoenix: Arcadia, Biltmore, Desert Ridge, Ahwatukee, Roosevelt Row, downtown, Scottsdale, Tempe, Chandler, Gilbert, Mesa, Glendale, Peoria, Surprise, Goodyear, and every Maricopa County community.' },
      { q: 'How large of a group can you handle in Phoenix?', a: 'We serve groups of 8 to 60+ guests. For groups over 25, dual chef stations are recommended so everyone eats at the same time. Note your group size at booking and we\'ll configure accordingly.' },
      { q: 'What\'s the pricing for a Phoenix corporate or graduation event?', a: 'Starting at $60 per adult, $30 per child (ages 4–12), $600 event minimum. Premium proteins — filet mignon, lobster tail, Chilean sea bass, wagyu — available as per-guest upgrades.' },
    ],
    testimonialSubheading: 'Phoenix Metro Corporate, Graduation & Home Events',
  },

  // T2 — East Valley Tech & Family
  {
    heroPill: 'Backyard & Family Celebrations',
    experiencePill: 'The East Valley Experience',
    experiencePoints: [
      { icon: '🏠', title: 'Chef Comes to Your East Valley Backyard', desc: 'A private hibachi chef arrives at your home — you host without managing the kitchen.' },
      { icon: '🎓', title: 'ASU Graduation & Family Milestones',       desc: 'ASU graduation parties, birthday milestones, and family celebrations for 8–60+ guests.' },
      { icon: '🔥', title: 'Dual Stations for Large Groups',           desc: 'For groups over 25, dual chef stations keep everyone eating and watching at the same time.' },
      { icon: '⚡', title: 'No Hookup Required',                       desc: 'Self-contained propane setup in 20 minutes on any flat outdoor surface — no gas line needed.' },
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
      { q: 'When should I book for a graduation party in the East Valley?', a: 'Four to six weeks ahead for any May or June Saturday. East Valley graduation demand peaks in mid-May through early June — ASU commencement and high school ceremonies generate concentrated demand across Tempe, Chandler, Gilbert, Mesa, and Queen Creek simultaneously. Book in early April for a May graduation date.' },
      { q: 'How does private hibachi work for a group of 40 in an East Valley backyard?', a: 'Your chef needs approximately 10×10 feet of flat outdoor clearance — a typical East Valley backyard lawn, patio, or pool deck works. For groups of 40, dual chef stations are recommended so everyone eats at the same time. Note your count at booking and we\'ll configure accordingly.' },
      { q: 'What\'s on the menu for an East Valley graduation or birthday party?', a: 'Standard menu: chicken, steak, shrimp, salmon, vegetables, hibachi fried rice, lo mein, miso soup, garden salad, and house-made ginger, yum yum, and teriyaki sauces. Premium upgrades — filet mignon, lobster tail, Chilean sea bass, king shrimp — available per guest.' },
      { q: 'What do I need to provide at my East Valley home?', a: 'A flat outdoor area of 10×10 feet minimum, seating for your guests, and vehicle access to the property. The chef brings the propane teppan grill, all food, all equipment, all utensils, and leaves the space completely clean when dinner ends.' },
    ],
    testimonialSubheading: 'East Valley Graduation Parties and Family Celebrations',
  },

  // T3 — West Valley Growth
  {
    heroPill: 'West Valley Home Events',
    experiencePill: 'The West Valley Experience',
    experiencePoints: [
      { icon: '🏡', title: 'Chef Travels to Your West Valley Property', desc: 'A private hibachi chef travels to your Peoria, Glendale, Surprise, or Goodyear property with everything included.' },
      { icon: '🎉', title: 'Any West Valley Occasion',                   desc: 'Birthday parties, family milestones, graduation celebrations, and corporate team dinners — any occasion, any West Valley community.' },
      { icon: '🔥', title: 'No Hookup Required',                         desc: 'Self-contained propane setup — no gas hookup required at any West Valley residential property.' },
      { icon: '👥', title: 'Scales to Any Group Size',                   desc: 'Groups of 8–60+: single chef station for up to 25, dual stations for larger West Valley events.' },
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
      { q: 'How much space is needed for a West Valley backyard hibachi event?', a: 'Approximately 10×10 feet of flat outdoor clearance — a typical West Valley backyard patio, lawn, or pool deck all work. Most Peoria, Glendale, Surprise, and Goodyear residential lots have significantly more space than needed.' },
      { q: 'Do you serve Sun City Grand, Vistancia, and PebbleCreek?', a: 'Yes — Sun City Grand, Vistancia, Westwing Mountain, PebbleCreek, Estrella Mountain Ranch, Marley Park, Rancho Gabriela, and all West Valley communities are within standard service range.' },
      { q: 'How far ahead should I book a West Valley hibachi event?', a: 'Spring and summer Saturdays book 3–5 weeks ahead. Off-peak West Valley events (fall weekdays, winter) often confirm 1–2 weeks out. Same-day quotes are always available.' },
    ],
    testimonialSubheading: 'Peoria, Glendale, Surprise & Goodyear Events',
  },

  // T4 — Northern AZ Mountain
  {
    heroPill: 'Mountain Cabin & Destination Events',
    experiencePill: 'The Sedona, Flagstaff & Prescott Experience',
    experiencePoints: [
      { icon: '⛺', title: 'Fully Self-Contained at Any Mountain Rental', desc: 'Fully self-contained propane setup — no gas hookup needed at any Sedona vacation rental, Flagstaff cabin, or Prescott property.' },
      { icon: '👨‍🍳', title: 'Chef Arrives Fully Equipped',                  desc: 'The chef arrives at your mountain property with everything included — grill, ingredients, equipment. No outdoor kitchen required.' },
      { icon: '🎭', title: 'Any Destination Event Format',                  desc: 'Bachelorette weekends, anniversary destination trips, and family reunions — the same live teppanyaki performance at any mountain setting.' },
      { icon: '🏔️', title: 'The Mountain Setting Is the Venue',             desc: 'Setup in 20 minutes on any flat deck or patio — the red rocks, ponderosa pines, or mountain backdrop does the rest.' },
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
      { q: 'What do I need to tell the chef about my mountain rental property?', a: 'At booking, note any access considerations: steep driveways, unpaved roads, gated community entry codes, or limited parking. Travel to Northern AZ mountain properties is factored into the quote upfront — never a surprise addition.' },
      { q: 'Are premium proteins available at Sedona and Flagstaff destination events?', a: 'Yes — filet mignon, lobster tail, Chilean sea bass, king shrimp, and wagyu are all available. Bachelorette weekends in Sedona most commonly request premium proteins across the full table.' },
      { q: 'How far ahead should I book for a Sedona or Flagstaff vacation rental event?', a: 'Four to eight weeks ahead for peak Sedona season (February–May, September–November) and peak Flagstaff/Prescott season (summer and fall). Book when you confirm the rental — both dates fill from the same pool.' },
    ],
    testimonialSubheading: 'Sedona, Flagstaff & Prescott Destination Events',
  },

  // T5 — Southern AZ (Tucson)
  {
    heroPill: 'Tucson University & Estate Events',
    experiencePill: 'The Tucson & Southern Arizona Experience',
    experiencePoints: [
      { icon: '🎓', title: 'Book Early for UA Graduation Season', desc: "UA graduation season is Tucson's most competitive booking window — reserve your date 4–6 weeks ahead." },
      { icon: '🏜️', title: 'Chef Travels to Your Tucson Property', desc: 'A certified teppanyaki chef travels to your Tucson property — Catalina Foothills estates, Oro Valley homes, and UA-area vacation rentals.' },
      { icon: '🎭', title: 'Any Tucson Occasion',                   desc: 'Graduation parties, estate milestone dinners, and corporate team events — all the same chef, the same live teppanyaki performance.' },
      { icon: '🔥', title: 'No Hookup Required',                    desc: 'Self-contained propane setup works at any Tucson property — Catalina Foothills estate, Dove Mountain home, or UA-area rental.' },
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
      { q: 'What does a private hibachi event include in Tucson or Oro Valley?', a: 'Your chef arrives with the propane teppan grill, all proteins (standard and premium), fried rice, vegetables, miso soup, salad, house-made sauces, and all plates and utensils. Setup takes 20–30 minutes. The performance runs 90–120 minutes. Full cleanup when dinner ends.' },
      { q: 'How does private hibachi work for a University of Arizona graduation party?', a: 'Most UA graduation parties happen at Tucson residential properties — Catalina Foothills estates, Oro Valley homes, and Tucson backyard setups. The chef arrives fully self-contained and handles any group size from 10 to 50+. UA commencement weekends in May book 4–6 weeks ahead.' },
      { q: 'What Tucson neighborhoods does your private hibachi chef serve?', a: 'We serve all of Tucson: Catalina Foothills, Oro Valley, Marana, Midtown, East Side, Rita Ranch, Sahuarita, Vail, and every Pima County community.' },
      { q: 'How far ahead should I book for a Tucson graduation or Catalina Foothills estate event?', a: 'UA graduation weekends in May book 4–6 weeks ahead. Catalina Foothills estate events and Oro Valley milestone dinners: 3–4 weeks for peak season. Same-day quotes always available.' },
    ],
    testimonialSubheading: 'Tucson, Oro Valley & Southern AZ Events',
  },
]

// ─── How It Works ──────────────────────────────────────────────────────────────
const AZ_HOW_IT_WORKS = {
  headline:   (city) => `How Private Hibachi Works in ${city}`,
  footerNote: (city) => `Every ${city} event is confirmed with a deposit. Your date is locked as soon as you book — no double-bookings.`,
  steps: [
    { num: '01', title: 'Submit Your Date & Address', desc: 'Give us your Arizona address, event date, and approximate guest count. We respond with a personalized quote the same day.' },
    { num: '02', title: 'Confirm Your Menu',           desc: 'Choose proteins — chicken, steak, shrimp, salmon — and add premium upgrades like filet mignon, lobster tail, Chilean sea bass, or wagyu. Everything else is included.' },
    { num: '03', title: 'Lock Your Date',              desc: 'A deposit confirms your event immediately. Your date is reserved — no double-bookings, no last-minute uncertainty.' },
    { num: '04', title: 'Chef Travels to You',         desc: 'Your chef arrives 20–30 minutes before the event with the full self-contained propane teppan grill, all ingredients, and every piece of equipment. No hookup required at any Arizona property.' },
    { num: '05', title: 'Live Fire Performance & Full Cleanup', desc: '90–120 minutes of live teppanyaki — fire tricks, the volcano, flying shrimp, every dish cooked to order. Full cleanup when dinner ends. Your backyard, patio, or pool deck is left exactly as it was.' },
  ],
}

// ─── Blog Posts (keyed by variant % 3) ────────────────────────────────────────
const AZ_BLOG_POSTS = [
  // Slot 0 — T0 Scottsdale/PV Luxury + T3 West Valley (v%3=0: Scottsdale, PV, Peoria, Glendale, Surprise, Goodyear)
  [
    { slug: 'hibachi-at-home-arizona-guide',                    title: 'Private Hibachi Chef in Arizona: The Complete Guide to All Six Markets',                    excerpt: 'From Scottsdale bachelorette weekends and Paradise Valley estate dinners to ASU graduation parties, Sedona vacation rentals, and UA Tucson commencement events.', category: 'Guide', readTime: '10 min read' },
    { slug: 'private-hibachi-scottsdale-bachelorette-weekend',  title: 'Private Hibachi for Scottsdale Bachelorette Weekends: The Complete Guide',                  excerpt: 'How to book a private hibachi chef for a bachelorette weekend in Scottsdale — Old Town vacation rentals, DC Ranch estates, and North Scottsdale properties.', category: 'Guide', readTime: '7 min read' },
    { slug: 'hibachi-birthday-party-ideas',                     title: '10 Hibachi Birthday Party Ideas Your Guests Will Never Forget',                             excerpt: 'From Paradise Valley estate milestone dinners to Peoria and Goodyear backyard birthday parties — how to host a private hibachi event in Arizona.', category: 'Guide', readTime: '6 min read' },
  ],
  // Slot 1 — T1 Phoenix Core + T4 Northern AZ Mountain (v%3=1: Phoenix, Fountain Hills, Sedona, Flagstaff, Prescott)
  [
    { slug: 'hibachi-at-home-arizona-guide',                    title: 'Private Hibachi Chef in Arizona: The Complete Guide to All Six Markets',                    excerpt: 'From Scottsdale and Phoenix corporate events to Sedona red rock vacation rentals, Flagstaff mountain cabin dinners, and Prescott ponderosa bachelorette weekends.', category: 'Guide', readTime: '10 min read' },
    { slug: 'private-hibachi-scottsdale-bachelorette-weekend',  title: 'Private Hibachi for Scottsdale Bachelorette Weekends: The Complete Guide',                  excerpt: 'How to book a private hibachi chef for bachelorette weekends in Scottsdale and Sedona — Old Town vacation rentals, Red Rock properties, and peak-season booking windows.', category: 'Guide', readTime: '7 min read' },
    { slug: 'hibachi-catering-corporate-events',                title: 'Why Hibachi Catering Is the Best Choice for Corporate Events',                              excerpt: 'Team dinners, client entertainment, and Phoenix Biltmore-corridor professional events — why private hibachi beats every other corporate format in the Valley.', category: 'Guide', readTime: '5 min read' },
  ],
  // Slot 2 — T2 East Valley + T5 Southern AZ (v%3=2: Tempe, Chandler, Gilbert, Mesa, Queen Creek, Tucson, Oro Valley)
  [
    { slug: 'hibachi-at-home-arizona-guide',                    title: 'Private Hibachi Chef in Arizona: The Complete Guide to All Six Markets',                    excerpt: 'From ASU graduation parties in Tempe and UA commencement dinners in the Tucson Catalina Foothills to East Valley high school graduations and Gilbert family milestones.', category: 'Guide', readTime: '10 min read' },
    { slug: 'private-hibachi-arizona-graduation-party',         title: 'Private Hibachi for Arizona Graduation Parties: ASU, UA, NAU, and the Phoenix Metro',      excerpt: 'How to book a private hibachi chef for a graduation party in Arizona — when to book, what to expect, and how to handle any size group across all three university markets.', category: 'Guide', readTime: '7 min read' },
    { slug: 'hibachi-at-home-vs-restaurant',                    title: 'Hibachi at Home vs. Restaurant: Which Is Worth It?',                                       excerpt: 'Arizona hibachi restaurants vs. a private chef at your East Valley home or Tucson estate — the real cost, quality, and convenience comparison.', category: 'Guide', readTime: '5 min read' },
  ],
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
    nearbyMajorCities: ['Phoenix', 'Scottsdale', 'Tempe', 'Chandler', 'Tucson', 'Sedona'],
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
