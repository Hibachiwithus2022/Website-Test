// ─── Hero image pool ─────────────────────────────────────────────────────────
// 4 real brand photos — rotated by variant so every city gets a different image
export const HERO_IMAGES = [
  '/pics/hero-1.jpg',  // Backyard Hibachi
  '/pics/hero-2.jpg',  // Hibachi at Home Dallas
  '/pics/hero-3.jpg',  // Hibachi at Home Raleigh
  '/pics/hero-4.jpg',  // Hibachi at Home Texas
]

import {
  TEXAS_INTRO_VARIANTS,
  TEXAS_CLOSING_VARIANTS,
  TEXAS_CITY_INTROS,
  TEXAS_CITY_CLOSINGS,
  TX_INTRO_VARIANTS,
  TX_CLOSING_VARIANTS,
  TX_CITY_INTROS,
  TX_CITY_CLOSINGS,
} from './texasData'
import {
  FLORIDA_INTRO_VARIANTS,
  FLORIDA_CLOSING_VARIANTS,
  FLORIDA_CITY_INTROS,
  FLORIDA_CITY_CLOSINGS,
} from './floridaData'
import {
  NC_INTRO_VARIANTS,
  NC_CLOSING_VARIANTS,
  NC_CITY_INTROS,
  NC_CITY_CLOSINGS,
} from './ncData'
import {
  NJ_INTRO_VARIANTS,
  NJ_CLOSING_VARIANTS,
  NJ_CITY_INTROS,
  NJ_CITY_CLOSINGS,
} from './njData'
import {
  NY_INTRO_VARIANTS,
  NY_CLOSING_VARIANTS,
  NY_CITY_INTROS,
  NY_CITY_CLOSINGS,
} from './nyData'
import {
  DE_INTRO_VARIANTS,
  DE_CLOSING_VARIANTS,
  DE_CITY_INTROS,
  DE_CITY_CLOSINGS,
} from './delawareData'
import {
  OR_INTRO_VARIANTS,
  OR_CLOSING_VARIANTS,
  OR_CITY_INTROS,
  OR_CITY_CLOSINGS,
} from './oregonData'
import {
  MO_INTRO_VARIANTS,
  MO_CLOSING_VARIANTS,
  MO_CITY_INTROS,
  MO_CITY_CLOSINGS,
} from './missouriData'
import {
  GA_INTRO_VARIANTS,
  GA_CLOSING_VARIANTS,
  GA_CITY_INTROS,
  GA_CITY_CLOSINGS,
} from './georgiaData'
import {
  SC_INTRO_VARIANTS,
  SC_CLOSING_VARIANTS,
  SC_CITY_INTROS,
  SC_CITY_CLOSINGS,
} from './southcarolinaData'
import {
  ON_INTRO_VARIANTS,
  ON_CLOSING_VARIANTS,
  ON_CITY_INTROS,
  ON_CITY_CLOSINGS,
} from './ontarioData'
import {
  VA_INTRO_VARIANTS,
  VA_CLOSING_VARIANTS,
  VA_CITY_INTROS,
  VA_CITY_CLOSINGS,
} from './virginiaData'
import {
  MI_INTRO_VARIANTS,
  MI_CLOSING_VARIANTS,
  MI_CITY_INTROS,
  MI_CITY_CLOSINGS,
} from './michiganData'
import {
  MD_INTRO_VARIANTS,
  MD_CLOSING_VARIANTS,
  MD_CITY_INTROS,
  MD_CITY_CLOSINGS,
} from './marylandData'
import {
  UT_INTRO_VARIANTS,
  UT_CLOSING_VARIANTS,
  UT_CITY_INTROS,
  UT_CITY_CLOSINGS,
} from './utahData'
import {
  TN_INTRO_VARIANTS,
  TN_CLOSING_VARIANTS,
  TN_CITY_INTROS,
  TN_CITY_CLOSINGS,
} from './tennesseeData'
import {
  MN_INTRO_VARIANTS,
  MN_CLOSING_VARIANTS,
  MN_CITY_INTROS,
  MN_CITY_CLOSINGS,
} from './minnesotaData'
import {
  OH_INTRO_VARIANTS,
  OH_CLOSING_VARIANTS,
  OH_CITY_INTROS,
  OH_CITY_CLOSINGS,
} from './ohioData'
import {
  MA_INTRO_VARIANTS,
  MA_CLOSING_VARIANTS,
  MA_CITY_INTROS,
  MA_CITY_CLOSINGS,
} from './massachusettsData'
import {
  PA_INTRO_VARIANTS,
  PA_CLOSING_VARIANTS,
  PA_CITY_INTROS,
  PA_CITY_CLOSINGS,
} from './pennsylvaniaData'
import {
  WI_INTRO_VARIANTS,
  WI_CLOSING_VARIANTS,
  WI_CITY_INTROS,
  WI_CITY_CLOSINGS,
} from './wisconsinData'
import {
  IN_INTRO_VARIANTS,
  IN_CLOSING_VARIANTS,
  IN_CITY_INTROS,
  IN_CITY_CLOSINGS,
} from './indianaData'
import {
  RI_INTRO_VARIANTS,
  RI_CLOSING_VARIANTS,
  RI_CITY_INTROS,
  RI_CITY_CLOSINGS,
} from './rhodeIslandData'
import {
  CO_INTRO_VARIANTS,
  CO_CLOSING_VARIANTS,
  CO_CITY_INTROS,
  CO_CITY_CLOSINGS,
} from './coloradoData'
import {
  AZ_INTRO_VARIANTS,
  AZ_CLOSING_VARIANTS,
  AZ_CITY_INTROS,
  AZ_CITY_CLOSINGS,
} from './arizonaData'
import {
  IL_INTRO_VARIANTS,
  IL_CLOSING_VARIANTS,
  IL_CITY_INTROS,
  IL_CITY_CLOSINGS,
} from './illinoisData'
import {
  CA_INTRO_VARIANTS,
  CA_CLOSING_VARIANTS,
  CA_CITY_INTROS,
  CA_CITY_CLOSINGS,
} from './californiaData'
import {
  AL_INTRO_VARIANTS,
  AL_CLOSING_VARIANTS,
  AL_CITY_INTROS,
  AL_CITY_CLOSINGS,
} from './alabamaData'

// ─── City-specific data for each city page ──────────────────────────────────
// Add a new entry per city. The `variant` field (0–4) rotates intro
// headings, FAQ wording, CTA phrasing, why-us bullets, and hero image automatically.

export const CITY_DATA = {

  // ── TEXAS — removed; all TX cities now served via getTexasCityData() ──────

  // Template for adding new cities:
  // [city-slug]: {
  //   cityName: '',
  //   stateName: '',
  //   stateAbbr: '',
  //   stateSlug: '',
  //   variant: 0 | 1 | 2,
  //   heroImage: '/brand/hero-bg.jpg',
  //   nearbyCities: [],
  //   nearbyMajorCities: [],
  //   localHighlights: [],
  //   featuredOccasions: [],
  //   faqSet: [],
  //   testimonials: [],
  //   uniqueIntroVariant: 0 | 1 | 2,
  //   uniqueWhyUsVariant: 0 | 1 | 2,
  //   uniqueClosingVariant: 0 | 1 | 2,
  // },
}

// ─────────────────────────────────────────────────────────────────────────────
// CONTENT ROTATION ENGINE
// Each table has 5 entries. City variant (0–4) selects the row, giving every
// city a genuinely distinct voice. Add more entries to scale further.
// ─────────────────────────────────────────────────────────────────────────────

// ── 5 Hero subtitles ─────────────────────────────────────────────────────────
export const HERO_SUBTITLES = [
  (city, state) => `Private Chef • Backyard Parties • ${city} Hibachi Experience`,
  (city, state) => `Live Teppanyaki • Any Occasion • Delivered to Your ${city} Home`,
  (city, state) => `Mobile Hibachi Chef • Fire Cooking • Serving All of ${state}`,
  (city, state) => `${city}'s Favorite Private Chef Experience • From $60/Adult`,
  (city, state) => `Book a Teppanyaki Chef in ${city} • Full Setup & Cleanup Included`,
]

// ── Intro variants — global 0–4 + Texas-specific 5–9 ────────────────────────
// 0 = Entertainment-first  1 = Convenience-first  2 = Craft/food-first
// 3 = Social/memory-first  4 = Value-first
// 5–9 = Texas variants (imported from texasData.js — see TEXAS_INTRO_VARIANTS)
// Texas city pages receive uniqueIntroVariant of 5+v, selecting entries 5–9.
const GLOBAL_INTRO_VARIANTS = [
  // ── 0: Entertainment-first ─────────────────────────────────────────────────
  {
    angle:    'entertainment',
    headline: (city) => `The Show Comes to You in ${city}`,
    opening:  (city, state) =>
      `Hibachi dining has always been as much about the performance as the food — and Hibachi Connect brings that whole experience directly to your ${city} backyard. A certified teppanyaki chef arrives at your home with a full propane grill, fresh ingredients, and the kind of fire-trick showmanship that turns an ordinary dinner into the event your guests talk about for years.`,
    middle:   (city, state) =>
      `From the first flying shrimp to the flaming onion volcano, every minute of the cook is pure entertainment. Your chef engages the whole crowd — kids, grandparents, first-timers, hibachi veterans — and personally prepares every plate on the spot. No shared platters. No cold food. Every bite cooked to order, right in front of you.`,
    closing:  (city, state) =>
      `We've built the service around one idea: the hibachi experience should be even better at home than at the restaurant. No waiting for a table, no crowded dining room, no rushed turns. Just your people, your space, and a chef who owns the room. That's hibachi at home in ${city} — and it starts at $60 per adult.`,
  },
  // ── 1: Convenience-first ───────────────────────────────────────────────────
  {
    angle:    'convenience',
    headline: (city) => `Forget the Restaurant. We Come to You, ${city}.`,
    opening:  (city, state) =>
      `Planning a dinner event in ${city} doesn't have to mean hunting for a table big enough for your whole group, splitting the party into separate cars, or spending the evening managing food orders across the room. With Hibachi Connect, you pick the date — we handle everything else. A certified teppanyaki chef shows up to your ${city} home or backyard with a full propane grill, fresh ingredients, and complete setup, arriving 5–10 minutes before the scheduled start time.`,
    middle:   (city, state) =>
      `Once the grill heats up, your job is done. The chef works the crowd from first flame to final plate — individual proteins cooked to order, layered fried rice, grilled vegetables, fire tricks, flying shrimp, the whole show — while keeping a genuine conversation going with everyone around the station. Kids get the front-row excitement. Grandparents get a seat and a performance they won't stop talking about. By the time the last plate goes out, the crowd has connected in a way no restaurant seating arrangement can manufacture.`,
    closing:  (city, state) =>
      `We've run hundreds of events across ${state} — quinceañeras, multi-generational family reunions, graduation parties, corporate team dinners, big backyard birthdays, and ordinary Saturdays that became the night your guests still bring up months later. If you can gather 10 people in ${city}, we can make it the evening nobody forgets. Pricing starts at $60 per adult, $600 event minimum. Setup and cleanup fully included.`,
  },
  // ── 2: Craft/food-first ────────────────────────────────────────────────────
  {
    angle:    'craft',
    headline: (city) => `Real Teppanyaki Craft, Right in Your ${city} Backyard`,
    opening:  (city, state) =>
      `There's a reason teppanyaki has endured for decades as one of the most celebrated cooking styles in the world: it rewards craft. The sear of a steak at the perfect temperature. Fried rice built in layers, grain by grain. Shrimp that hits the hot steel at exactly the right moment. Hibachi Connect's certified chefs bring that technical precision to your ${city} home — with none of the restaurant markup.`,
    middle:   (city, state) =>
      `Every event menu is sourced fresh: hand-selected proteins, seasonal vegetables, and house-made sauces prepared in advance. Your chef arrives with everything prepped for execution — which means from the moment the grill heats up, every second is dedicated to cooking and performance. No shortcuts. No pre-cooked staging. Everything your guests eat is made fresh on the teppan, in front of them.`,
    closing:  (city, state) =>
      `We serve ${city} and surrounding areas with the same standards we'd hold any professional kitchen to — because that's what your guests deserve. Every guest picks 2 proteins at $60 per adult, with premium upgrades like filet mignon and lobster tail available for any event.`,
  },
  // ── 3: Social/memory-first ────────────────────────────────────────────────
  {
    angle:    'social',
    headline: (city) => `The Night Your ${city} Guests Will Still Be Talking About`,
    opening:  (city, state) =>
      `Some dinners are forgettable. This one won't be. When you book a private hibachi chef in ${city}, you're not just feeding people — you're giving them a shared experience. The kind where everyone is facing the same direction, watching the same show, laughing at the same fire tricks, and reacting to the same perfectly timed shrimp toss. That energy is contagious, and it makes for a completely different kind of gathering.`,
    middle:   (city, state) =>
      `Hibachi Connect has hosted everything from 10-person anniversary dinners to 120-person corporate parties across ${state}. What we hear most from hosts afterward isn't about the food (though the food is excellent). It's that the chef made strangers feel like old friends by the time dessert came around. The teppanyaki grill creates a social center — a reason for everyone to look up from their phones and just be present.`,
    closing:  (city, state) =>
      `Whether you're celebrating something huge or just making an ordinary weekend extraordinary, private hibachi in ${city} is the kind of thing people request at the next event. Book a certified chef through Hibachi Connect. Starting at $60 per adult, $600 minimum. Setup and cleanup fully included.`,
  },
  // ── 4: Value-first ────────────────────────────────────────────────────────
  {
    angle:    'value',
    headline: (city) => `More Than a Restaurant Night — and for Less Than You'd Expect`,
    opening:  (city, state) =>
      `A hibachi restaurant in ${city} for a group of 20 guests? You're looking at two-hour waits, split-table seating, fixed menus, and a bill north of $1,500 before tip. Private hibachi at home through Hibachi Connect serves those same 20 guests for $60 per adult — everyone at the same table, with a dedicated chef, customized proteins, and a show built around your crowd.`,
    middle:   (city, state) =>
      `What's included in that price would surprise most people. Your chef arrives 5–10 minutes before start time to set up the teppan grill at your ${city} home. They bring all ingredients: fresh proteins, vegetables, rice, and house-made sauces. They cook every plate to order. They entertain throughout. And when the last course is done, they break down and clean up completely. Zero additional labor cost. Zero tip anxiety. Zero logistics on your end.`,
    closing:  (city, state) =>
      `The $600 event minimum covers 8–10 guests at the standard rate. For larger groups, add-on proteins (lobster tail, filet, scallops) and premium packages are available. Travel fees may apply outside ${city}'s metro area. Get a free, no-obligation quote today — most ${city} bookings are confirmed within a few hours.`,
  },
]

// Combined array:
// 0–4   global
// 5–9   Texas generic
// 10–17 Texas city-specific (Houston=10, Dallas=11, Austin=12, SanAntonio=13, FortWorth=14, Katy=15, SugarLand=16, Woodlands=17)
// 18–22 Florida generic
// 23–32 Florida city-specific (Miami=23, Orlando=24, Tampa=25, Jacksonville=26, FortLauderdale=27, Sarasota=28, Naples=29, WestPalm=30, Destin=31, StPete=32)
// Components use `INTRO_VARIANTS[uniqueIntroVariant % INTRO_VARIANTS.length]`
// 0–4: Global · 5–9: Texas generic · 10–17: Texas city · 18–22: Florida generic · 23–32: Florida city · 33–37: NC generic · 38–47: NC city · 48–52: NJ generic · 53–62: NJ city
export const INTRO_VARIANTS = [...GLOBAL_INTRO_VARIANTS, ...TEXAS_INTRO_VARIANTS, ...TEXAS_CITY_INTROS, ...FLORIDA_INTRO_VARIANTS, ...FLORIDA_CITY_INTROS, ...NC_INTRO_VARIANTS, ...NC_CITY_INTROS, ...NJ_INTRO_VARIANTS, ...NJ_CITY_INTROS, ...NY_INTRO_VARIANTS, ...NY_CITY_INTROS, ...DE_INTRO_VARIANTS, ...DE_CITY_INTROS, ...OR_INTRO_VARIANTS, ...OR_CITY_INTROS, ...MO_INTRO_VARIANTS, ...MO_CITY_INTROS, ...GA_INTRO_VARIANTS, ...GA_CITY_INTROS, ...SC_INTRO_VARIANTS, ...SC_CITY_INTROS, ...ON_INTRO_VARIANTS, ...ON_CITY_INTROS, ...VA_INTRO_VARIANTS, ...VA_CITY_INTROS, ...MI_INTRO_VARIANTS, ...MI_CITY_INTROS, ...MD_INTRO_VARIANTS, ...MD_CITY_INTROS, ...TN_INTRO_VARIANTS, ...TN_CITY_INTROS, ...MN_INTRO_VARIANTS, ...MN_CITY_INTROS, ...UT_INTRO_VARIANTS, ...UT_CITY_INTROS, ...OH_INTRO_VARIANTS, ...OH_CITY_INTROS, ...MA_INTRO_VARIANTS, ...MA_CITY_INTROS, ...PA_INTRO_VARIANTS, ...PA_CITY_INTROS, ...WI_INTRO_VARIANTS, ...WI_CITY_INTROS, ...IN_INTRO_VARIANTS, ...IN_CITY_INTROS, ...RI_INTRO_VARIANTS, ...RI_CITY_INTROS, ...CO_INTRO_VARIANTS, ...CO_CITY_INTROS, ...AZ_INTRO_VARIANTS, ...AZ_CITY_INTROS, ...IL_INTRO_VARIANTS, ...IL_CITY_INTROS, ...CA_INTRO_VARIANTS, ...CA_CITY_INTROS, ...AL_INTRO_VARIANTS, ...AL_CITY_INTROS, ...TX_INTRO_VARIANTS, ...TX_CITY_INTROS]

// ── 5 Why-Us variants ────────────────────────────────────────────────────────
export const WHY_US_VARIANTS = [
  // 0: Performance-led
  {
    pill: 'Why Choose Us',
    headline: (city) => `Why ${city} Keeps Booking Hibachi Connect`,
    items: (city) => [
      { icon: '🔥', title: 'Live Fire Performance',         desc: 'Volcano tricks, mid-air flips, and fire shows — your chef entertains the entire crowd while cooking every plate to order.' },
      { icon: '🍱', title: 'Fresh, Made-to-Order Meals',   desc: 'No pre-staged food. Every protein, every bowl of fried rice, every vegetable is cooked fresh on the teppan in front of your guests.' },
      { icon: '✅', title: 'We Handle Everything',          desc: 'Arrives 5–10 minutes before start, full service throughout, complete cleanup at the end. Your only job is enjoying the night.' },
      { icon: '📍', title: `Serving All of ${city}`,       desc: 'Backyard, covered patio, garage, rooftop, or rented venue — we bring the grill to wherever you are.' },
      { icon: '👥', title: 'Scales to Any Group',          desc: 'Ten guests at a dinner party or 200 at a corporate event — we scale the chef stations to fit your headcount.' },
      { icon: '💯', title: 'Perfect Satisfaction Record',  desc: 'Every event backed by our 100% satisfaction commitment. We don\'t leave until the host is happy.' },
    ],
  },
  // 1: Ease-led
  {
    pill: 'The Difference',
    headline: (city) => `The Easiest Event You'll Ever Host in ${city}`,
    items: (city) => [
      { icon: '👨‍🍳', title: 'Certified Teppanyaki Chefs',  desc: 'Every chef trains in authentic Japanese hibachi technique — knife skills, fire performance, timing, and crowd engagement.' },
      { icon: '🏡', title: 'Fully Mobile Setup',           desc: 'Backyard, patio, driveway, or indoors with ventilation — we adapt to your space and make it work.' },
      { icon: '📋', title: 'No Surprise Pricing',          desc: '$60/adult, $30/child, $600 event minimum. Your quote is locked before the event. No hidden charges, ever.' },
      { icon: '🧹', title: 'Arrive Clean, Leave Clean',   desc: 'We set up early and clean up completely. Many hosts say it\'s the easiest party they\'ve thrown in years.' },
      { icon: '🎯', title: 'Fast, Responsive Booking',     desc: `Submit a request and get a quote within hours. Most ${city} events are confirmed the same day.` },
      { icon: '🍤', title: 'Menu Built Around You',        desc: 'Choose proteins, add premium upgrades, mix and match per guest preference. We customize, you enjoy.' },
    ],
  },
  // 2: Differentiation-led
  {
    pill: 'What Sets Us Apart',
    headline: (city) => `What Separates Our ${city} Hibachi Service`,
    items: (city) => [
      { icon: '🎭', title: 'Dinner + Entertainment in One', desc: 'No restaurant can give your guests a front-row seat to their own meal being cooked live. We can.' },
      { icon: '🥩', title: 'Premium Protein Options',       desc: 'Chicken, steak, shrimp, salmon, scallops, filet mignon, lobster tail — build a custom menu for any occasion.' },
      { icon: '📞', title: 'Same-Day Response',             desc: 'We pick up, respond, and quote fast. No waiting days for a callback on your event inquiry.' },
      { icon: '🌆', title: `All ${city} Areas Covered`,    desc: `From the city center to the outer suburbs — if you're within range of ${city}, we come to you.` },
      { icon: '🚀', title: 'Zero-Effort for Hosts',        desc: 'We set up, cook, serve, and disappear. Guests think you planned something extraordinary. You barely lifted a finger.' },
      { icon: '⭐', title: 'Rated 5 Stars Nationwide',     desc: 'Perfect ratings across 200+ events. The experience speaks for itself — and so do our reviews.' },
    ],
  },
  // 3: Trust-led
  {
    pill: 'Why Families Trust Us',
    headline: (city) => `Why ${city} Families Trust Hibachi Connect`,
    items: (city) => [
      { icon: '🔐', title: 'Fully Insured Service',         desc: 'Every Hibachi Connect event is fully covered. You can host confidently knowing the professionals have it handled.' },
      { icon: '📅', title: 'Reliable, On-Time Chefs',       desc: 'We arrive 5–10 minutes before your scheduled start — every time. Your guests are never left waiting for the food to start.' },
      { icon: '🌟', title: '5.0 Star Rating',               desc: 'Every event is reviewed. Every chef is accountable. We maintain a perfect record because anything less isn\'t acceptable.' },
      { icon: '💬', title: 'Real Communication',            desc: 'You talk to a real person when you book, not a chatbot. We answer questions before, during, and after your event.' },
      { icon: '🔄', title: 'Repeat Hosts Love Us',          desc: 'Over 40% of our events are from returning hosts or referrals. That\'s the best review we could ask for.' },
      { icon: '🤝', title: 'Satisfaction Guaranteed',       desc: 'If something isn\'t right on the night, we make it right. No arguments, no excuses.' },
    ],
  },
  // 4: Local pride-led
  {
    pill: 'Our Track Record',
    headline: (city) => `Built for ${city}'s Backyard Culture`,
    items: (city) => [
      { icon: '🏆', title: `${city}'s Top-Rated Choice`,   desc: `Hundreds of ${city}-area families have hosted their most memorable dinners with Hibachi Connect. We're not new to this.` },
      { icon: '🎉', title: 'Every Occasion Covered',        desc: 'Birthdays, bachelorette parties, graduations, corporate events, holidays, date nights — we\'ve done it all in this area.' },
      { icon: '🔥', title: 'Fire Tricks Included',          desc: 'The onion volcano, flaming shrimp toss, and chef juggling aren\'t extras — they\'re part of every single event.' },
      { icon: '🍽️', title: 'Restaurant Quality at Home',   desc: 'Premium teppanyaki-grade ingredients, freshly cooked to order. Better than most restaurants, without leaving your yard.' },
      { icon: '📦', title: 'Everything Provided',           desc: 'Grill, propane, ingredients, sauces, plates, chopsticks. You bring chairs. We bring everything else.' },
      { icon: '🌿', title: 'Indoor or Outdoor',             desc: 'No backyard? No problem. Covered patios, garages, and ventilated indoor spaces work just as well.' },
    ],
  },
]

// ── Closing CTA variants — global 0–4 + Texas 5–9 ───────────────────────────
const GLOBAL_CLOSING_VARIANTS = [
  {
    headline: (city) => `Ready to Book Hibachi at Home in ${city}?`,
    sub:      (city) => `Weekend dates in ${city} fill up fast — especially for birthdays and summer evenings. Lock in your date before it's gone.`,
    urgency:  'Weekend slots fill 2–3 weeks out. Reserve yours today.',
    btnPrimary: 'Get My Free Quote',
    btnSecondary: 'View Pricing',
  },
  {
    headline: (city) => `Plan Your ${city} Hibachi Party Today`,
    sub:      (city) => `Tell us your date, guest count, and location — we'll build a custom quote for your ${city} event within hours.`,
    urgency:  'Limited weekend availability. Don\'t wait to reserve.',
    btnPrimary: 'Request a Quote',
    btnSecondary: 'See How It Works',
  },
  {
    headline: (city) => `Your ${city} Guests Are Going to Love This`,
    sub:      (city) => `Fire tricks, fresh food, zero cleanup — hibachi at home in ${city} is the event upgrade your crowd has been waiting for.`,
    urgency:  'Weekend slots book 3+ weeks ahead during peak season.',
    btnPrimary: 'Book Now',
    btnSecondary: 'Call Us Instead',
  },
  {
    headline: (city) => `The Best Event You'll Host in ${city} This Year`,
    sub:      (city) => `Don't overthink it. Pick a date, get a quote, and let a certified hibachi chef handle the rest. It's that simple.`,
    urgency:  'Most quotes confirmed same day. Get yours now.',
    btnPrimary: 'Get a Free Quote',
    btnSecondary: 'See Pricing',
  },
  {
    headline: (city) => `Bring the Fire to Your ${city} Backyard`,
    sub:      (city) => `A certified teppanyaki chef. Premium proteins. Full setup and cleanup. Starting at $60 per adult in ${city}.`,
    urgency:  'Availability fills fast on weekend evenings — act early.',
    btnPrimary: 'Check Availability',
    btnSecondary: 'Learn More',
  },
]

// Global 0–4 · Texas generic 5–9 · Texas city 10–17 · Florida generic 18–22 · Florida city 23–32 · NC generic 33–37 · NC city 38–47 · NJ generic 48–52 · NJ city 53–62
export const CLOSING_VARIANTS = [...GLOBAL_CLOSING_VARIANTS, ...TEXAS_CLOSING_VARIANTS, ...TEXAS_CITY_CLOSINGS, ...FLORIDA_CLOSING_VARIANTS, ...FLORIDA_CITY_CLOSINGS, ...NC_CLOSING_VARIANTS, ...NC_CITY_CLOSINGS, ...NJ_CLOSING_VARIANTS, ...NJ_CITY_CLOSINGS, ...NY_CLOSING_VARIANTS, ...NY_CITY_CLOSINGS, ...DE_CLOSING_VARIANTS, ...DE_CITY_CLOSINGS, ...OR_CLOSING_VARIANTS, ...OR_CITY_CLOSINGS, ...MO_CLOSING_VARIANTS, ...MO_CITY_CLOSINGS, ...GA_CLOSING_VARIANTS, ...GA_CITY_CLOSINGS, ...SC_CLOSING_VARIANTS, ...SC_CITY_CLOSINGS, ...ON_CLOSING_VARIANTS, ...ON_CITY_CLOSINGS, ...VA_CLOSING_VARIANTS, ...VA_CITY_CLOSINGS, ...MI_CLOSING_VARIANTS, ...MI_CITY_CLOSINGS, ...MD_CLOSING_VARIANTS, ...MD_CITY_CLOSINGS, ...TN_CLOSING_VARIANTS, ...TN_CITY_CLOSINGS, ...MN_CLOSING_VARIANTS, ...MN_CITY_CLOSINGS, ...UT_CLOSING_VARIANTS, ...UT_CITY_CLOSINGS, ...OH_CLOSING_VARIANTS, ...OH_CITY_CLOSINGS, ...MA_CLOSING_VARIANTS, ...MA_CITY_CLOSINGS, ...PA_CLOSING_VARIANTS, ...PA_CITY_CLOSINGS, ...WI_CLOSING_VARIANTS, ...WI_CITY_CLOSINGS, ...IN_CLOSING_VARIANTS, ...IN_CITY_CLOSINGS, ...RI_CLOSING_VARIANTS, ...RI_CITY_CLOSINGS, ...CO_CLOSING_VARIANTS, ...CO_CITY_CLOSINGS, ...AZ_CLOSING_VARIANTS, ...AZ_CITY_CLOSINGS, ...IL_CLOSING_VARIANTS, ...IL_CITY_CLOSINGS, ...CA_CLOSING_VARIANTS, ...CA_CITY_CLOSINGS, ...AL_CLOSING_VARIANTS, ...AL_CITY_CLOSINGS, ...TX_CLOSING_VARIANTS, ...TX_CITY_CLOSINGS]

// ── Shared FAQ pool — 15 questions, city pages draw from this + city-specific ─
// Each FAQ has a `pool` tag so pages can filter by topic for variety
export const SHARED_FAQ_POOL = [
  {
    pool: 'space',
    q: 'Can hibachi be set up indoors?',
    a: 'Yes — we can set up in any large indoor space with proper ventilation: an open garage, spacious living/dining area, or covered patio. Most of our events are outdoors, but we adapt to your situation. Minimum 10×10 ft clearance required and ventilation is essential for safety.',
  },
  {
    pool: 'space',
    q: 'How much space does the hibachi setup need?',
    a: 'Plan for a minimum 10×10 ft flat area for the grill and chef. Guests typically stand or sit in a horseshoe around the station. For groups of 20+, we recommend 2 ft of perimeter space per person around the cooking area.',
  },
  {
    pool: 'guests',
    q: 'Are kids welcome at hibachi events?',
    a: 'Absolutely — kids are usually the most enthusiastic guests at hibachi events. Children ages 4–12 are $30 each. Ages 3 and under eat free. The fire tricks and shrimp tosses are crowd favorites for younger guests. Just let your chef know the age range so they can adjust the show accordingly.',
  },
  {
    pool: 'logistics',
    q: 'Do you provide tables, chairs, or utensils?',
    a: 'We provide plates, chopsticks, and serving utensils for your guests. Tables and chairs are your responsibility. We bring all cooking equipment, the propane grill, and every ingredient and condiment needed for the meal.',
  },
  {
    pool: 'logistics',
    q: 'What happens if weather forces a cancellation?',
    a: 'We offer a full credit — no penalty — for weather-related cancellations made more than 24 hours before the event start. For outdoor-only spaces, we recommend having a covered backup plan during rainy seasons. We\'ll always work with you to reschedule.',
  },
  {
    pool: 'menu',
    q: 'Can we customize the menu or add premium proteins?',
    a: 'Yes — every menu is fully customizable. Standard includes 2 protein choices per person; Premium includes 3. Premium add-ons are available at any tier: lobster tail (+$15), filet mignon (+$10), scallops (+$5), gyoza (+$10), and more. Just let us know at booking.',
  },
  {
    pool: 'menu',
    q: 'Do you accommodate dietary restrictions or allergies?',
    a: 'We do our best to accommodate dietary needs. Please let us know in advance about any serious allergies. We can prepare vegetarian and gluten-free protein options (tofu, vegetables) and keep allergens separated during cooking.',
  },
  {
    pool: 'logistics',
    q: 'How far in advance should I book?',
    a: 'We recommend 1–2 weeks for weekday events and 2–3 weeks for weekend evenings. Summer, graduation season, and holidays book up quickly — reserve 4+ weeks out during peak periods. Weekday availability is generally easier to arrange on shorter notice.',
  },
  {
    pool: 'logistics',
    q: 'Do you cook at Airbnbs, vacation rentals, or event venues?',
    a: 'Yes — many of our events are at short-term rentals, rented halls, and private event spaces. Always confirm with the property host or venue manager that outdoor cooking and open-flame cooking is permitted before booking. We can advise on space requirements.',
  },
  {
    pool: 'logistics',
    q: 'What time does the chef arrive?',
    a: 'Chefs typically arrive 5–10 minutes before your scheduled event start time. The grill is ready, the station is arranged, and the cooking and show begin at your scheduled time. Cleanup happens immediately after the last course is served.',
  },
  {
    pool: 'pricing',
    q: 'Are there any hidden fees I should know about?',
    a: 'No hidden fees. Your price is $60/adult, $30/child (ages 4–12), $600 event minimum. Children 3 and under eat free. Travel fees may apply for locations more than 30 miles from our nearest chef base. All fees are disclosed and agreed upon before you book — nothing surprises you at the event.',
  },
  {
    pool: 'pricing',
    q: 'What\'s included in the event minimum?',
    a: 'The $600 event minimum covers 8–10 guests at the standard rate and includes the chef, grill, propane, all ingredients, sauces, plates, chopsticks, full setup, and complete cleanup. You simply provide the space and seating.',
  },
  {
    pool: 'experience',
    q: 'What fire tricks and entertainment can we expect?',
    a: 'Every Hibachi Connect chef is trained in classic teppanyaki showmanship: the flaming onion volcano, the flying shrimp toss, knife juggling, and heart/egg-and-butter fried rice. The exact routine varies by chef, but the entertainment is always a highlight.',
  },
  {
    pool: 'experience',
    q: 'How long does a hibachi event typically last?',
    a: 'Most events run 1.5 to 2 hours for a single session of 10–20 guests. Larger groups with multiple chef stations may run slightly longer. Your chef will pace the meal to match your event timeline — just let us know if you have specific timing needs.',
  },
  {
    pool: 'logistics',
    q: 'What if I need to cancel or reschedule my event?',
    a: 'Cancellations made 72+ hours before the event receive a full credit toward a future booking. Cancellations within 72 hours may be subject to a partial fee. We always work with hosts to find a new date rather than enforce penalties where possible.',
  },
]

// ── Related blog post data ───────────────────────────────────────────────────
// Pages pull from this list — tag-filtered by city variant for variety
export const BLOG_POSTS = [
  {
    slug:     'how-much-does-private-hibachi-cost',
    title:    'How Much Does a Private Hibachi Chef Cost?',
    excerpt:  'A complete breakdown of hibachi at home pricing — per-person rates, event minimums, add-ons, and what actually affects your final quote.',
    tag:      'Pricing',
    readTime: '5 min read',
    pool:     [0, 1, 2, 3, 4],
  },
  {
    slug:     'hibachi-at-home-vs-restaurant',
    title:    'Hibachi at Home vs. Hibachi Restaurant: Which Is Worth It?',
    excerpt:  'We break down the real cost, experience quality, and convenience differences between booking a private chef and going to a hibachi restaurant.',
    tag:      'Comparison',
    readTime: '6 min read',
    pool:     [0, 2, 4],
  },
  {
    slug:     'how-to-plan-a-backyard-hibachi-party',
    title:    'How to Plan a Backyard Hibachi Party (Complete Checklist)',
    excerpt:  'Everything you need to prepare before your private hibachi chef arrives — space setup, guest seating, timing, and the questions to ask your chef.',
    tag:      'Planning',
    readTime: '7 min read',
    pool:     [0, 1, 2, 3, 4],
  },
  {
    slug:     'hibachi-birthday-party-ideas',
    title:    '10 Hibachi Birthday Party Ideas Your Guests Will Never Forget',
    excerpt:  'From themed menus to chef performances, here\'s how to make a backyard hibachi birthday party truly unforgettable for any age group.',
    tag:      'Occasions',
    readTime: '5 min read',
    pool:     [0, 3],
  },
  {
    slug:     'hibachi-catering-corporate-events',
    title:    'Why Hibachi Catering Is the Best Choice for Corporate Events',
    excerpt:  'Team dinners, client entertainment, and office parties all benefit from the live-cooking energy of a private hibachi chef. Here\'s why.',
    tag:      'Corporate',
    readTime: '4 min read',
    pool:     [1, 2, 4],
  },
  {
    slug:     'what-to-expect-hibachi-chef-home',
    title:    'What to Expect When You Book a Private Hibachi Chef at Home',
    excerpt:  'A first-timer\'s guide: what happens from booking to cleanup, what the chef brings, what you need to provide, and what guests can look forward to.',
    tag:      'Guide',
    readTime: '6 min read',
    pool:     [0, 1, 3],
  },
  {
    slug:     'hibachi-bachelorette-party',
    title:    'Private Hibachi for Bachelorette Parties: The Ultimate Guide',
    excerpt:  'Why a private hibachi chef is the best pre-party activity for any bachelorette weekend — entertainment, custom drinks pairing, and zero logistics.',
    tag:      'Occasions',
    readTime: '5 min read',
    pool:     [0, 3, 4],
  },
  {
    slug:     'hibachi-menu-proteins-guide',
    title:    'The Complete Hibachi Menu Guide: Proteins, Sauces & Add-Ons',
    excerpt:  'Everything you can order at a private hibachi event — standard proteins, premium upgrades, appetizers, sauces, and how to build the perfect menu.',
    tag:      'Menu',
    readTime: '4 min read',
    pool:     [2, 4],
  },
]

// Get blog posts for a city based on its variant pool
export function getBlogPostsForCity(variant = 0, count = 3) {
  const v = variant % 5
  return BLOG_POSTS.filter(p => p.pool.includes(v)).slice(0, count)
}

// ── Pull N FAQs from the shared pool (excluding topics already in city faqSet) ─
export function getSupplementalFAQs(cityFaqSet = [], count = 4) {
  const usedQuestions = new Set(cityFaqSet.map(f => f.q.toLowerCase()))
  return SHARED_FAQ_POOL
    .filter(f => !usedQuestions.has(f.q.toLowerCase()))
    .slice(0, count)
}

// Helper: get city data by slug
export function getCityData(citySlug) {
  return CITY_DATA[citySlug] || null
}

// Helper: get all registered city slugs for generateStaticParams
export function getAllCitySlugs() {
  return Object.keys(CITY_DATA).map(slug => slug)
}

// ── SEO metadata generator — 5 title + 5 description patterns ───────────────
// Variant is derived from uniqueIntroVariant (0–4) so each city gets a
// distinct title structure that avoids duplicate-title penalties at scale.
const TITLE_TEMPLATES = [
  // 0 — location + brand (most direct)
  (city, state) => `Hibachi at Home in ${city}, ${state} | Hibachi Connect`,
  // 1 — service + city (chef-focused)
  (city, state) => `Private Hibachi Chef in ${city}, ${state} | Hibachi Connect`,
  // 2 — city-first (local SEO emphasis)
  (city, state) => `${city} Hibachi at Home — Private Chef from $60 | Hibachi Connect`,
  // 3 — action-oriented
  (city, state) => `Book a Hibachi Chef in ${city}, ${state} | Hibachi Connect`,
  // 4 — experience-forward
  (city, state) => `${city} Private Hibachi Experience — Backyard Teppanyaki | Hibachi Connect`,
]

const DESC_TEMPLATES = [
  // 0 — service + price + CTA
  (city, state) => `Book a private hibachi chef in ${city}, ${state}. Live teppanyaki at your home from $60/adult. Full setup & cleanup included. Get a free quote from Hibachi Connect today.`,
  // 1 — what's included + conversion
  (city, state) => `Hibachi at home in ${city}, ${state} — our chefs bring the grill, ingredients, and live-fire entertainment to your backyard. From $60/adult, $600 minimum. Get a free quote now.`,
  // 2 — city + comparison angle
  (city, state) => `Skip the restaurant. Hibachi Connect sends a certified teppanyaki chef to your ${city} home — everything provided, full cleanup included. Starting at $60/person in ${state}.`,
  // 3 — social proof + local
  (city, state) => `Rated 5 stars across 200+ events. Private hibachi chef in ${city}, ${state} — live cooking, fire tricks, and fresh teppanyaki at your home. From $60/adult with $600 minimum.`,
  // 4 — occasion + urgency
  (city, state) => `Planning a party in ${city}? A private hibachi chef brings the grill, food, and entertainment to your ${state} home. $60/adult · $600 min · Setup + cleanup included.`,
]

// ── Ontario-specific meta templates — premium private dining tone ─────────────
const ON_TITLE_TEMPLATES = [
  (city, state) => `Private Hibachi Chef in ${city}, ${state} | Hibachi Connect`,
  (city, state) => `Hibachi at Home in ${city} — Private Dining Experience | Hibachi Connect`,
  (city, state) => `${city} Private Hibachi Chef — Live Teppanyaki Dining | Hibachi Connect`,
  (city, state) => `Book a Private Hibachi Chef in ${city}, ${state} | Hibachi Connect`,
  (city, state) => `${city} Private Hibachi Experience — In-Home Teppanyaki | Hibachi Connect`,
]

const ON_DESC_TEMPLATES = [
  (city, state) => `Elevate your ${city} celebration with a certified private hibachi chef. Live teppanyaki dining at your home from $78 CAD/adult — full setup and complete cleanup included. Request your free quote from Hibachi Connect.`,
  (city, state) => `Hibachi at home in ${city}, ${state} — our certified chefs bring the grill, premium proteins, and live-fire entertainment to your property. From $78 CAD/adult. Full setup & cleanup. Request your free quote.`,
  (city, state) => `Transform your ${city} home into a private dining experience. A certified teppanyaki chef arrives with everything — full setup, fresh ingredients, live performance, and complete cleanup. From $78 CAD/adult.`,
  (city, state) => `Book a certified private hibachi chef in ${city}, ${state}. Live teppanyaki at your home, cottage, or event space from $78 CAD/adult. Full setup & cleanup included. Request your Hibachi Connect quote.`,
  (city, state) => `Planning a special occasion in ${city}? A private hibachi chef brings the full dining experience to your property. Premium proteins · Live teppanyaki · $78 CAD/adult · Full setup & cleanup included.`,
]

const ON_OG_DESC_TEMPLATES = [
  (city, state) => `A certified hibachi chef comes to your ${city} property with a full teppan grill, premium proteins, and a live teppanyaki dining experience. From $78 CAD/adult. Request your free Hibachi Connect quote.`,
  (city, state) => `Private teppanyaki at your ${city}, ${state} home — fire artistry, fresh proteins, and an elevated dining experience from $78 CAD/adult. Full setup & cleanup. Hibachi Connect.`,
  (city, state) => `Hibachi Connect brings restaurant-quality teppanyaki to your ${city} home or cottage. Certified chefs, premium ingredients, $78 CAD/adult. Request your free quote.`,
  (city, state) => `Transform your next ${city} gathering into a private dining experience. A certified hibachi chef handles everything — grill, ingredients, entertainment, cleanup. From $78 CAD/adult.`,
  (city, state) => `Live hibachi dining at your ${city} property. Our chefs perform, cook, and clean up — from $78 CAD/adult with a $780 CAD event minimum. Serving all of ${state}.`,
]

// 5 OG description variants (separate rotation for richer social previews)
const OG_DESC_TEMPLATES = [
  (city, state) => `A certified hibachi chef comes to your ${city} home with a full teppan grill, fresh ingredients, and live fire cooking. Starting at $60/adult. Book Hibachi Connect today.`,
  (city, state) => `Private teppanyaki at your ${city}, ${state} home — fire tricks, flying shrimp, and freshly cooked meals from $60/adult. Full setup & cleanup. Book Hibachi Connect.`,
  (city, state) => `Hibachi Connect brings restaurant-quality teppanyaki to your ${city} backyard. Certified chefs, premium ingredients, $60/adult. Get a free quote in minutes.`,
  (city, state) => `Your next ${city} party just got upgraded. A private hibachi chef handles everything — grill, food, entertainment, cleanup. From $60/adult. Book with Hibachi Connect.`,
  (city, state) => `Live hibachi cooking at your ${city} home. Our chefs perform, cook, and clean up — all for $60/adult with a $600 event minimum. Serving all ${state} areas.`,
]

export function generateCityMeta(cityData) {
  const { cityName, stateName, stateAbbr, stateSlug, uniqueIntroVariant = 0, metaTitle, metaDescription } = cityData
  const isOntario = stateSlug === 'ontario'
  const v    = uniqueIntroVariant % 5
  const slug = cityName.toLowerCase().replace(/[^a-z0-9]+/g, '-')

  const title       = metaTitle       ?? (isOntario ? ON_TITLE_TEMPLATES[v](cityName, stateName) : TITLE_TEMPLATES[v](cityName, stateName))
  const description = metaDescription ?? (isOntario ? ON_DESC_TEMPLATES[v](cityName, stateName)  : DESC_TEMPLATES[v](cityName, stateName))
  const ogDescRaw   = isOntario ? ON_OG_DESC_TEMPLATES[v](cityName, stateName) : OG_DESC_TEMPLATES[v](cityName, stateName)

  return {
    title,
    description,
    keywords: isOntario ? [
      `hibachi ${cityName}`,
      `private hibachi chef ${cityName}`,
      `hibachi at home ${cityName}`,
      `private dining ${cityName}`,
      `teppanyaki ${cityName}`,
      `teppanyaki chef ${cityName} ${stateName}`,
      `private chef ${cityName} hibachi`,
      `hibachi catering ${cityName}`,
      `hibachi dinner ${cityName} ${stateAbbr}`,
      `private teppanyaki ${cityName} ${stateName}`,
    ].join(', ') : [
      `hibachi ${cityName}`,
      `private hibachi chef ${cityName}`,
      `hibachi at home ${cityName}`,
      `hibachi at home ${cityName} ${stateAbbr}`,
      `hibachi catering ${cityName}`,
      `backyard hibachi ${cityName}`,
      `teppanyaki ${cityName}`,
      `teppanyaki chef ${cityName} ${stateName}`,
      `private chef ${cityName} hibachi`,
      `hibachi party ${cityName} ${stateAbbr}`,
    ].join(', '),
    canonical: `https://hibachiconnect.com/locations/${stateSlug}/${slug}`,
    og: {
      title:       `Hibachi at Home in ${cityName}, ${stateName} | Hibachi Connect`,
      description: ogDescRaw,
      image:       `https://hibachiconnect.com/og?type=city&city=${encodeURIComponent(cityName)}&state=${encodeURIComponent(stateName)}`,
    },
    twitter: {
      title:       `Private Hibachi Chef in ${cityName}, ${stateAbbr} | Hibachi Connect`,
      description: isOntario
        ? `Book a certified hibachi chef in ${cityName}. $78 CAD/adult · full setup & cleanup · free quote. Hibachi Connect serves all of ${stateName}.`
        : `Book a certified hibachi chef in ${cityName}. $60/adult · full setup & cleanup · free quote. Hibachi Connect serves all ${stateName}.`,
      image:       `https://hibachiconnect.com/og?type=city&city=${encodeURIComponent(cityName)}&state=${encodeURIComponent(stateName)}`,
    },
  }
}

// ── JSON-LD Schema generators ────────────────────────────────────────────────
export function generateLocalBusinessSchema(cityData) {
  const { cityName, stateName, stateSlug } = cityData
  const isOntario = stateSlug === 'ontario'
  const slug    = cityName.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  const pageUrl = `https://hibachiconnect.com/locations/${stateSlug}/${slug}`

  return {
    '@context': 'https://schema.org',
    '@type':    ['ProfessionalService', 'FoodEstablishment'],
    name:       'Hibachi Connect',
    url:        pageUrl,
    telephone:  '+12015653878',
    email:      'info@hibachiconnect.com',
    image:      'https://hibachiconnect.com/brand/logo.png',
    logo:       'https://hibachiconnect.com/brand/logo.png',
    description: isOntario
      ? `Private hibachi chef service in ${cityName}, ${stateName}. We bring a live teppanyaki grill, fresh ingredients, and full entertainment to your home or event venue. Starting at $78 CAD/adult.`
      : `Private hibachi chef service in ${cityName}, ${stateName}. We bring a live teppanyaki grill, fresh ingredients, and full entertainment to your home or event venue. Starting at $60/adult.`,
    areaServed: {
      '@type': 'City',
      name:    cityName,
      containedInPlace: { '@type': 'State', name: stateName },
    },
    address: {
      '@type':           'PostalAddress',
      addressLocality:   cityName,
      addressRegion:     stateName,
      addressCountry:    isOntario ? 'CA' : 'US',
    },
    priceRange:    '$$',
    servesCuisine: ['Japanese', 'Hibachi', 'Teppanyaki'],
    currenciesAccepted: isOntario ? 'CAD' : 'USD',
    paymentAccepted:    isOntario ? 'Cash, Credit Card, Interac e-Transfer' : 'Cash, Credit Card, Venmo, Zelle',
    offers: isOntario ? [
      {
        '@type':       'Offer',
        name:          'Private Hibachi Chef — Adult Rate',
        price:         '78',
        priceCurrency: 'CAD',
        description:   'Per adult — choose your proteins, fried rice, grilled vegetables, miso soup, yum yum and ginger sauce, full setup and cleanup included. $780 CAD event minimum.',
        availability:  'https://schema.org/InStock',
      },
      {
        '@type':       'Offer',
        name:          'Private Hibachi Chef — Child Rate',
        price:         '40',
        priceCurrency: 'CAD',
        description:   'Per child ages 4–12. Children 3 and under eat free.',
        availability:  'https://schema.org/InStock',
      },
    ] : [
      {
        '@type':       'Offer',
        name:          'Private Hibachi Chef — Adult Rate',
        price:         '60',
        priceCurrency: 'USD',
        description:   'Per adult — choose your proteins, fried rice, grilled vegetables, miso soup, yum yum and ginger sauce, full setup and cleanup included. $600 event minimum.',
        availability:  'https://schema.org/InStock',
      },
      {
        '@type':       'Offer',
        name:          'Private Hibachi Chef — Child Rate',
        price:         '30',
        priceCurrency: 'USD',
        description:   'Per child ages 4–12. Children 3 and under eat free.',
        availability:  'https://schema.org/InStock',
      },
    ],
    aggregateRating: {
      '@type':       'AggregateRating',
      ratingValue:   '5.0',
      reviewCount:   '200',
      bestRating:    '5',
      worstRating:   '1',
    },
    sameAs: [
      'https://www.instagram.com/hibachiconnect',
      'https://www.facebook.com/hibachiconnect',
    ],
  }
}

export function generateFAQSchema(faqSet) {
  return {
    '@context': 'https://schema.org',
    '@type':    'FAQPage',
    mainEntity: faqSet.map(faq => ({
      '@type': 'Question',
      name:    faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }
}

export function generateBreadcrumbSchema(cityName, stateName, stateSlug) {
  const citySlug = cityName.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  return {
    '@context': 'https://schema.org',
    '@type':    'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',      item: 'https://hibachiconnect.com' },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://hibachiconnect.com/locations' },
      { '@type': 'ListItem', position: 3, name: stateName,   item: `https://hibachiconnect.com/locations/${stateSlug}` },
      { '@type': 'ListItem', position: 4, name: cityName,    item: `https://hibachiconnect.com/locations/${stateSlug}/${citySlug}` },
    ],
  }
}
