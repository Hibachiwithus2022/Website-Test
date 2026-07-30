// ─── Pennsylvania City Data ──────────────────────────────────────────────────
// 20 cities · 6 themes · index range 416–441
// Generic PA_INTRO_VARIANTS:    416–421  (6 entries)
// City-specific PA_CITY_INTROS: 422–441  (profileIdx 0–19, by batch order)
// Batch 1 (profileIdx 0–4): Philadelphia, Wayne, Bryn Mawr, King of Prussia, Newtown Square

export const PA_CITY_DISPLAY_NAMES = {
  'king-of-prussia': 'King of Prussia',
  'mt-lebanon':      'Mt. Lebanon',
}

// ─── Occasion Sets ───────────────────────────────────────────────────────────
const PA_OCCASIONS_LUXURY = [
  'Backyard Birthday Parties', 'Graduation Celebrations', 'Anniversary Dinners',
  'Corporate Executive Dinners', 'Holiday Gatherings', 'Rehearsal Dinners',
  'Retirement Parties', 'Bar & Bat Mitzvahs', 'Charity Fundraisers', 'Estate Dinner Parties',
]

const PA_OCCASIONS_URBAN = [
  'Birthday Parties', 'Corporate Team Events', 'Graduation Dinners',
  'Rooftop Celebrations', 'Holiday Parties', 'Engagement Celebrations',
  'Team Building Events', 'Client Appreciation Dinners', 'Neighborhood Gatherings', 'Anniversary Celebrations',
]

const PA_OCCASIONS_POCONO = [
  'Cabin Weekend Parties', 'Bachelorette Weekends', 'Bachelor Parties',
  'Family Reunions', 'Birthday Getaways', 'Anniversary Retreats',
  'Graduation Weekends', 'Holiday Gatherings', 'Lakeside Celebrations', 'End-of-Summer Parties',
]

const PA_OCCASIONS_DESTINATION = [
  'Graduation Celebrations', 'Wedding Weekend Dinners', 'Family Reunions',
  'Corporate Retreat Dinners', 'Birthday Celebrations', 'Anniversary Dinners',
  'Holiday Gatherings', 'Medical Community Events', 'Alumni Gatherings', 'Milestone Dinners',
]

// ─── FAQ Sets ────────────────────────────────────────────────────────────────
const PA_FAQ_MAIN_LINE = [
  { q: 'Do you serve all Main Line communities including Wayne, Bryn Mawr, Malvern, and Newtown Square?', a: 'Yes — we serve the full Main Line and Chester and Delaware County corridor, including Wayne, Bryn Mawr, Malvern, Newtown Square, West Chester, Media, Villanova, Haverford, Ardmore, and all surrounding communities. We travel to your home, estate, or property fully equipped.' },
  { q: 'How much space is needed at a Main Line home or estate?', a: 'Our mobile teppan grill needs approximately a 10×10 foot flat area — a patio, driveway, backyard, or garage space all work. We handle all equipment transport, setup, and breakdown. Deck and patio surfaces are fine.' },
  { q: "What's included in the pricing?", a: 'All food, seasonings, house-made sauces, professional chef service, equipment, and complete cleanup. You provide seating and dinnerware for your guests.' },
  { q: 'Can you accommodate dietary restrictions common at Main Line events?', a: 'Absolutely — we routinely handle gluten-free, vegetarian, kosher-style, and allergen-specific menus. Please specify your needs at booking and we prepare every guest\'s plate accordingly.' },
  { q: 'How far in advance should we book for Main Line graduation season?', a: 'We recommend 2–3 weeks for weekday events, 3–4 weeks for weekends, and 4–6 weeks for graduation season (May–June). Main Line graduation Saturdays near Bryn Mawr College, Haverford, Villanova, and local high schools fill very early.' },
]

const PA_FAQ_PHILLY = [
  { q: 'Do you serve all Philadelphia neighborhoods including Rittenhouse Square, Fishtown, Chestnut Hill, and University City?', a: 'Yes — we cover all of Philadelphia including Rittenhouse Square, Society Hill, Old City, Fishtown, Chestnut Hill, University City, Fairmount, Northern Liberties, Manayunk, and all surrounding areas. Urban patios, rooftops, backyards, and courtyards all work.' },
  { q: 'What outdoor space is needed in an urban Philadelphia setting?', a: 'A flat 10×10 foot area is all we need — a rooftop terrace, backyard, patio, or courtyard all work. For indoor setups, good ventilation is required. We assess each venue when you book.' },
  { q: "What's included in the price?", a: 'All food ingredients, house-made sauces, chef labor, equipment, and cleanup. You provide seating and dinnerware for your group.' },
  { q: 'How do you handle large corporate or group events in the Philadelphia area?', a: 'We scale with multiple chefs and stations for larger groups. Share your headcount and event type when you reach out and we\'ll build a package that fits your event.' },
  { q: 'Do you offer vegetarian and vegan menus for Philadelphia events?', a: 'Yes — we offer fully plant-based hibachi menus with tofu, seasonal vegetables, and fried rice. Just specify when booking and we prepare the full menu accordingly.' },
]

const PA_FAQ_PITTSBURGH = [
  { q: 'Do you serve Pittsburgh neighborhoods like Shadyside, Squirrel Hill, Lawrenceville, and Mt. Washington?', a: 'Yes — we cover all of Pittsburgh and the metro area, including Shadyside, Squirrel Hill, Lawrenceville, Mt. Washington, North Shore, Strip District, South Side, Oakland, Fox Chapel, Sewickley, Mt. Lebanon, Wexford, and Cranberry Township.' },
  { q: 'What space is needed for a Pittsburgh backyard or patio hibachi event?', a: 'Approximately 10×10 feet of flat outdoor clearance — a backyard, patio, driveway, or deck all work. For urban row homes with limited yard space, a driveway or alley patio is fine. We assess each venue when you book.' },
  { q: 'What does pricing include for a Pittsburgh event?', a: 'All food, sauces, chef service, equipment, and cleanup. You provide tables, chairs, and dinnerware for your guests.' },
  { q: 'Can you handle large Pittsburgh graduation or corporate parties?', a: 'Absolutely — we bring additional chefs and stations for larger headcounts. Mention your group size when you reach out and we\'ll build a custom plan for your event.' },
  { q: 'How far in advance should we book for Pittsburgh events?', a: 'Standard events: 2–3 weeks. Graduation season (May–June for CMU, Pitt, Duquesne, and local high schools) and summer events: 4–6 weeks. Corporate holiday events book 4–6 weeks ahead.' },
]

const PA_FAQ_POCONO = [
  { q: 'Do you travel to vacation rentals and cabin properties in the Pocono Mountains?', a: "Yes — that's exactly what we specialize in. We travel to vacation rental properties, cabins, lake houses, and private properties throughout the Pocono Mountains including Stroudsburg, East Stroudsburg, Mount Pocono, Lake Harmony, Hawley, Lake Wallenpaupack, Camelback area, and the full Monroe and Wayne County corridor." },
  { q: 'Do you need a gas hookup at the vacation rental or cabin?', a: 'No. Our teppan grill is fully self-contained with its own propane system. We bring our own fuel. Cabins, rental properties, and remote lake houses with no outdoor gas lines are all fine.' },
  { q: "What's included at a Pocono vacation rental event?", a: 'All food, sauces, chef labor, equipment, and cleanup. We pack out completely — your rental property stays in the condition your host expects for checkout.' },
  { q: 'How does booking work for a vacation rental event?', a: 'Provide your rental address when booking — we confirm service radius and factor travel into your quote. Same-day quotes for most Pocono Mountain properties. A deposit locks your date immediately.' },
  { q: 'Can you handle large reunion or bachelorette group gatherings in the Poconos?', a: 'Yes — we bring multiple chefs for groups over 25. Family reunions, bachelorette weekends, and graduation trip groups of 20–60 are all in our range. Mention your count at booking.' },
]

const PA_FAQ_CENTRAL = [
  { q: 'Do you serve Lancaster and Hershey area properties, venues, and vacation rentals?', a: 'Yes — we travel throughout Central Pennsylvania including Lancaster, Hershey, Harrisburg, the Pennsylvania Dutch Country corridor, Kitchen Kettle Village area, and surrounding communities. We serve private homes, farm venues, resort properties, and vacation rentals.' },
  { q: 'What space is needed for a Central PA hibachi event?', a: 'A flat 10×10 foot area — a patio, backyard, barn floor, farm venue outdoor space, or deck all work. We handle all transport, setup, and breakdown for every Central PA location.' },
  { q: "What's included?", a: 'All food, sauces, chef service, equipment, and cleanup. You provide seating and dinnerware for your guests.' },
  { q: 'How many guests can you serve at a Lancaster or Hershey event?', a: 'Groups from 10 to 100+ — we scale with multiple chefs and stations. Wedding weekend rehearsal dinners, family reunions, and corporate retreat groups of all sizes are accommodated.' },
  { q: 'When should we book for Lancaster wedding weekends or Hershey Medical milestone events?', a: 'Wedding season (May–October) and Penn State Hershey Medical graduation season (May–June) both book significantly ahead. We recommend 4–6 weeks for any Lancaster or Hershey weekend event.' },
]

// ─── How It Works ────────────────────────────────────────────────────────────
const PA_HOW_IT_WORKS = {
  headline:   (city) => `How Private Hibachi Works in ${city}`,
  footerNote: (city) => `From booking to final cleanup, we handle every detail — you just enjoy the evening in ${city}.`,
  steps: [
    { num: '01', title: 'Reserve Your Date',   desc: 'Share your date, headcount, protein preferences, and home or venue address. We confirm availability within hours and lock in your Pennsylvania event with a deposit.' },
    { num: '02', title: 'Confirm Your Menu',   desc: 'Premium proteins — Wagyu beef, filet mignon, lobster tail, shrimp, salmon, chicken — plus rice, noodles, vegetables, and house-made sauces. Tell us about any dietary needs at this stage.' },
    { num: '03', title: 'Chef Arrives Ready',  desc: 'Your private hibachi chef arrives 30–45 minutes before showtime with a self-contained propane teppan grill, all ingredients, and everything needed. No prep work required from you.' },
    { num: '04', title: 'The Live Experience', desc: 'The full teppanyaki performance — precision knife work, flame tricks, and live cooking from first flame to final plate. Restaurant-quality food prepared for your table and your guests alone.' },
    { num: '05', title: 'Complete Cleanup',    desc: 'When the last plate is cleared, we break down the grill, pack out all equipment, and leave your space exactly as we found it. Your only job is to enjoy the evening.' },
  ],
}

// ─── City Structural Map ─────────────────────────────────────────────────────
// v = theme index (0–5); profileIdx = build-order index (0–19)
const PA_MAJOR_CITIES = {
  'philadelphia':       { v: 1, profileIdx: 0,  nearby: ['Wayne', 'Bryn Mawr', 'King of Prussia', 'West Chester', 'Media'] },
  'wayne':              { v: 0, profileIdx: 1,  nearby: ['Bryn Mawr', 'Philadelphia', 'King of Prussia', 'Malvern', 'Newtown Square'] },
  'bryn-mawr':          { v: 0, profileIdx: 2,  nearby: ['Wayne', 'Malvern', 'Philadelphia', 'Newtown Square', 'West Chester'] },
  'king-of-prussia':    { v: 1, profileIdx: 3,  nearby: ['Philadelphia', 'Wayne', 'Malvern', 'Blue Bell', 'West Chester'] },
  'newtown-square':     { v: 0, profileIdx: 4,  nearby: ['Wayne', 'Bryn Mawr', 'Media', 'Philadelphia', 'West Chester'] },
  'west-chester':       { v: 2, profileIdx: 5,  nearby: ['Malvern', 'Media', 'Philadelphia', 'Newtown Square', 'Wayne'] },
  'malvern':            { v: 0, profileIdx: 6,  nearby: ['Wayne', 'West Chester', 'King of Prussia', 'Bryn Mawr', 'Blue Bell'] },
  'media':              { v: 2, profileIdx: 7,  nearby: ['Philadelphia', 'West Chester', 'Newtown Square', 'Blue Bell', 'Wayne'] },
  'blue-bell':          { v: 2, profileIdx: 8,  nearby: ['King of Prussia', 'Malvern', 'Media', 'West Chester', 'Philadelphia'] },
  'lancaster':          { v: 5, profileIdx: 9,  nearby: ['Hershey', 'Philadelphia', 'West Chester'] },
  'pittsburgh':         { v: 3, profileIdx: 10, nearby: ['Fox Chapel', 'Sewickley', 'Mt. Lebanon', 'Wexford', 'Cranberry Township'] },
  'mt-lebanon':         { v: 3, profileIdx: 11, nearby: ['Pittsburgh', 'Sewickley', 'Fox Chapel', 'Wexford', 'Cranberry Township'] },
  'wexford':            { v: 3, profileIdx: 12, nearby: ['Cranberry Township', 'Pittsburgh', 'Fox Chapel', 'Mt. Lebanon', 'Sewickley'] },
  'cranberry-township': { v: 3, profileIdx: 13, nearby: ['Wexford', 'Pittsburgh', 'Fox Chapel', 'Mt. Lebanon', 'Sewickley'] },
  'fox-chapel':         { v: 3, profileIdx: 14, nearby: ['Pittsburgh', 'Sewickley', 'Wexford', 'Cranberry Township', 'Mt. Lebanon'] },
  'sewickley':          { v: 3, profileIdx: 15, nearby: ['Pittsburgh', 'Fox Chapel', 'Wexford', 'Mt. Lebanon', 'Cranberry Township'] },
  'stroudsburg':        { v: 4, profileIdx: 16, nearby: ['Mount Pocono', 'Hawley'] },
  'mount-pocono':       { v: 4, profileIdx: 17, nearby: ['Stroudsburg', 'Hawley'] },
  'hawley':             { v: 4, profileIdx: 18, nearby: ['Mount Pocono', 'Stroudsburg'] },
  'hershey':            { v: 5, profileIdx: 19, nearby: ['Lancaster', 'Philadelphia'] },
}

// Theme-level nearby fallback (used when city has no nearby array)
const PA_NEARBY_MAJOR = [
  ['Wayne', 'Bryn Mawr', 'Malvern', 'Newtown Square', 'Philadelphia'],
  ['Philadelphia', 'King of Prussia', 'Wayne', 'West Chester', 'Media'],
  ['West Chester', 'Media', 'Blue Bell', 'Malvern', 'Philadelphia'],
  ['Pittsburgh', 'Fox Chapel', 'Sewickley', 'Mt. Lebanon', 'Wexford'],
  ['Stroudsburg', 'Mount Pocono', 'Hawley'],
  ['Lancaster', 'Hershey'],
]

// ─── H1 Prefixes ─────────────────────────────────────────────────────────────
const PA_PROFILE_H1_PREFIXES = [
  'Private Hibachi Chef in',  // 0  Philadelphia
  'Hibachi at Home in',       // 1  Wayne
  'Hibachi at Home in',       // 2  Bryn Mawr
  'Hibachi Catering in',      // 3  King of Prussia
  'Hibachi at Home in',       // 4  Newtown Square
  'Hibachi at Home in',       // 5  West Chester
  'Hibachi at Home in',       // 6  Malvern
  'Backyard Hibachi in',      // 7  Media
  'Hibachi at Home in',       // 8  Blue Bell
  'Hibachi Catering in',      // 9  Lancaster
  'Private Hibachi Chef in',  // 10 Pittsburgh
  'Hibachi at Home in',       // 11 Mt. Lebanon
  'Hibachi at Home in',       // 12 Wexford
  'Hibachi Catering in',      // 13 Cranberry Township
  'Private Hibachi Chef in',  // 14 Fox Chapel
  'Private Hibachi Chef in',  // 15 Sewickley
  'Mobile Hibachi Chef in',   // 16 Stroudsburg
  'Mobile Hibachi Chef in',   // 17 Mount Pocono
  'Backyard Hibachi in',      // 18 Hawley
  'Mobile Hibachi Chef in',   // 19 Hershey
]

const PA_THEME_H1_PREFIXES = [
  'Hibachi at Home in',       // T0 Main Line Luxury
  'Private Hibachi Chef in',  // T1 Philadelphia Metro
  'Hibachi at Home in',       // T2 Philadelphia Suburbs
  'Private Hibachi Chef in',  // T3 Pittsburgh Metro
  'Mobile Hibachi Chef in',   // T4 Pocono Mountains
  'Mobile Hibachi Chef in',   // T5 Central PA
]

// ─── Hero Images by Theme ────────────────────────────────────────────────────
const PA_IMAGE_THEMES = [
  '/pics/hibachi-private-chef-1.jpg', // T0 Main Line Luxury
  '/pics/hibachi-event.jpg',          // T1 Philadelphia Metro
  '/pics/hibachi-at-home.jpg',        // T2 Philadelphia Suburbs
  '/pics/hibachi-hart.jpg',           // T3 Pittsburgh Metro
  '/pics/hibachi-in-garage.jpg',      // T4 Pocono Mountains
  '/pics/traveling-hibachi.jpg',      // T5 Central PA
]

// ─── City Experience Images (slot 2) ─────────────────────────────────────────
// All must differ from PA_IMAGE_THEMES[v] for their city
const PA_CITY_IMAGE_MAP = {
  'philadelphia':       { src: '/pics/hibachi-catering.jpg',    alt: (city) => `Private hibachi chef at a ${city} Pennsylvania event` },
  'wayne':              { src: '/pics/private-party-chef-6.jpg', alt: (city) => `Private hibachi chef at a Main Line estate in ${city} PA` },
  'bryn-mawr':          { src: '/pics/hibachi-shot-2.jpg',      alt: (city) => `Private hibachi chef at a ${city} Pennsylvania home` },
  'king-of-prussia':    { src: '/pics/hibachi-catering-3.jpg',  alt: (city) => `Hibachi catering at a ${city} PA corporate event` },
  'newtown-square':     { src: '/pics/private-event-4.jpg',     alt: (city) => `Private hibachi chef at a ${city} PA estate dinner` },
  'west-chester':       { src: '/pics/backyard-hibachi.jpg',    alt: (city) => `Backyard hibachi chef at a ${city} PA event` },
  'malvern':            { src: '/pics/hibachi-hart.jpg',        alt: (city) => `Private hibachi chef at a ${city} PA estate dinner` },
  'media':              { src: '/pics/hibachi-to-you-2.jpg',    alt: (city) => `Hibachi chef at a ${city} Pennsylvania backyard event` },
  'blue-bell':          { src: '/pics/private-chef-2.jpg',      alt: (city) => `Private hibachi chef at a ${city} PA home dinner` },
  'lancaster':          { src: '/pics/hibachi-catering.jpg',    alt: (city) => `Hibachi catering at a ${city} PA farm venue event` },
  'pittsburgh':         { src: '/pics/hibachi-event.jpg',       alt: (city) => `Private hibachi chef at a ${city} Pennsylvania event` },
  'mt-lebanon':         { src: '/pics/hibachi-at-home.jpg',     alt: (city) => `Hibachi at home in ${city} Pittsburgh PA` },
  'wexford':            { src: '/pics/private-party-chef-6.jpg', alt: (city) => `Private hibachi chef at a ${city} PA estate dinner` },
  'cranberry-township': { src: '/pics/hibachi-catering.jpg',    alt: (city) => `Hibachi catering in ${city} PA` },
  'fox-chapel':         { src: '/pics/hibachi-private-chef-1.jpg', alt: (city) => `Private hibachi chef at a ${city} PA estate dinner` },
  'sewickley':          { src: '/pics/private-chef-2.jpg',      alt: (city) => `Private hibachi chef at a ${city} PA estate dinner` },
  'stroudsburg':        { src: '/pics/hibachi-to-you-2.jpg',    alt: (city) => `Mobile hibachi chef at a ${city} PA Pocono vacation rental` },
  'mount-pocono':       { src: '/pics/mobile-hibachi.jpg',      alt: (city) => `Mobile hibachi chef near ${city} PA cabin weekend` },
  'hawley':             { src: '/pics/hibachi-at-home.jpg',     alt: (city) => `Backyard hibachi near ${city} PA Lake Wallenpaupack` },
  'hershey':            { src: '/pics/mobile-hibachi.jpg',      alt: (city) => `Mobile hibachi chef in ${city} PA` },
}

// ─── Support Image Fallbacks by Theme ────────────────────────────────────────
const PA_SUPPORT_FALLBACKS = [
  { testimonial: { src: '/pics/hibachi-at-home.jpg',     alt: (city) => `Guests enjoying private hibachi at a ${city} PA estate`,       caption: 'Main Line Private Events'          }, cta: { src: '/pics/backyard-hibachi.jpg',   alt: (city) => `Book a private hibachi chef in ${city} PA`,    caption: 'Book Your Main Line Event'       } },
  { testimonial: { src: '/pics/hibachi-pool-party.jpg',  alt: (city) => `Private hibachi gathering in ${city} PA`,                      caption: 'Philadelphia Area Events'          }, cta: { src: '/pics/mobile-hibachi-2.jpg',   alt: (city) => `Hire a hibachi chef in ${city} PA`,            caption: 'Book in Philadelphia Area'       } },
  { testimonial: { src: '/pics/hibachi-shot-2.jpg',      alt: (city) => `Backyard hibachi event in ${city} PA`,                         caption: 'Philadelphia Suburb Events'        }, cta: { src: '/pics/private-event-4.jpg',    alt: (city) => `Book a hibachi chef in ${city} PA`,            caption: 'Book Your Event'                 } },
  { testimonial: { src: '/pics/hibachi-catering-3.jpg',  alt: (city) => `Private hibachi event in ${city} Pittsburgh PA`,               caption: 'Pittsburgh Area Events'            }, cta: { src: '/pics/mobile-hibachi-2.jpg',   alt: (city) => `Book a hibachi chef in ${city} PA`,            caption: 'Book in Pittsburgh Area'         } },
  { testimonial: { src: '/pics/backyard-hibachi.jpg',    alt: (city) => `Mobile hibachi at a Pocono cabin near ${city} PA`,             caption: 'Pocono Mountains Events'           }, cta: { src: '/pics/hibachi-pool-party.jpg', alt: (city) => `Book a mobile hibachi chef near ${city} PA`,   caption: 'Book Your Pocono Event'          } },
  { testimonial: { src: '/pics/traveling-hibachi.jpg',   alt: (city) => `Mobile hibachi chef at a ${city} PA event`,                    caption: 'Central PA Events'                 }, cta: { src: '/pics/backyard-hibachi.jpg',   alt: (city) => `Book a hibachi chef in ${city} PA`,            caption: 'Book Your Central PA Event'      } },
]

// ─── City Support Images (slot 3: testimonial · slot 4: cta) ─────────────────
const PA_CITY_SUPPORT_IMAGES = {
  'philadelphia':       { testimonial: { src: '/pics/hibachi-pool-party.jpg',  alt: (city) => `Guests at a private hibachi event in ${city} PA`,              caption: 'Philadelphia Private Events',    intro: (city) => `From Rittenhouse Square rooftops to Chestnut Hill estates, ${city} hosts some of the most spirited private hibachi dinners in the region.` }, cta: { src: '/pics/mobile-hibachi-2.jpg',    alt: (city) => `Book a private hibachi chef in ${city} PA`,             caption: 'Book Your Philadelphia Event'  } },
  'wayne':              { testimonial: { src: '/pics/hibachi-at-home.jpg',     alt: (city) => `Private hibachi event at a ${city} PA Main Line estate`,       caption: 'Wayne Main Line Events',         intro: (city) => `${city}'s iconic estates, Devon Horse Show properties, and Radnor Township homes make it one of the Main Line's finest settings for private hibachi.`     }, cta: { src: '/pics/backyard-hibachi.jpg',    alt: (city) => `Book a private hibachi chef in ${city} PA`,             caption: 'Book Your Wayne Event'         } },
  'bryn-mawr':          { testimonial: { src: '/pics/private-event-4.jpg',    alt: (city) => `Private hibachi event at a ${city} PA estate`,                 caption: 'Bryn Mawr Private Events',       intro: (city) => `${city}'s classic stone homes, Bryn Mawr College graduation tradition, and Lancaster Avenue estate corridor make it a destination for premier private hibachi dining.` }, cta: { src: '/pics/hibachi-pool-party.jpg',  alt: (city) => `Book a private hibachi chef in ${city} PA`,             caption: 'Book Your Bryn Mawr Event'     } },
  'king-of-prussia':    { testimonial: { src: '/pics/mobile-hibachi-2.jpg',   alt: (city) => `Hibachi catering event in ${city} PA`,                         caption: 'King of Prussia Corporate Events', intro: (city) => `${city}'s Route 202 corporate corridor and Valley Forge-area venues create year-round demand for premium private hibachi catering that impresses every guest.` }, cta: { src: '/pics/traveling-hibachi.jpg',   alt: (city) => `Book hibachi catering in ${city} PA`,                   caption: 'Book Your KOP Event'           } },
  'newtown-square':     { testimonial: { src: '/pics/hibachi-in-garage.jpg',  alt: (city) => `Private hibachi event at a ${city} PA estate`,                 caption: 'Newtown Square Private Events',  intro: (city) => `${city}'s SAP Americas corridor, Darby Creek estates, and Delaware County luxury residential community make it an ideal setting for private hibachi dining.` }, cta: { src: '/pics/hibachi-hart.jpg',        alt: (city) => `Book a private hibachi chef in ${city} PA`,             caption: 'Book Your Newtown Square Event'} },
  'west-chester':       { testimonial: { src: '/pics/hibachi-shot-2.jpg',     alt: (city) => `Private hibachi event in ${city} PA`,                          caption: 'West Chester Events',            intro: (city) => `${city}'s university graduation tradition, Chester County estate character, and Longwood Gardens proximity make it a hub for exceptional private hibachi events.` }, cta: { src: '/pics/mobile-hibachi-2.jpg',    alt: (city) => `Book a hibachi chef in ${city} PA`,                     caption: 'Book Your West Chester Event'  } },
  'malvern':            { testimonial: { src: '/pics/hibachi-pool-party.jpg', alt: (city) => `Private hibachi event in ${city} PA`,                          caption: 'Malvern Private Events',         intro: (city) => `${city}'s Great Valley Corporate Center, Chester Valley Trail, and estate corridor make it one of Chester County's most active private hibachi markets.`      }, cta: { src: '/pics/private-event-4.jpg',     alt: (city) => `Book a hibachi chef in ${city} PA`,                     caption: 'Book Your Malvern Event'       } },
  'media':              { testimonial: { src: '/pics/hibachi-in-garage.jpg',  alt: (city) => `Backyard hibachi event in ${city} PA`,                         caption: 'Media Delaware County Events',   intro: (city) => `${city}'s State Street neighborhood character and Ridley Creek State Park proximity make it a beloved setting for backyard hibachi celebrations.`             }, cta: { src: '/pics/hibachi-shot-2.jpg',      alt: (city) => `Book a backyard hibachi chef in ${city} PA`,            caption: 'Book Your Media Event'         } },
  'blue-bell':          { testimonial: { src: '/pics/private-event-4.jpg',    alt: (city) => `Private hibachi event in ${city} PA`,                          caption: 'Blue Bell Private Events',       intro: (city) => `${city}'s Whitpain Township estates, Montgomery County affluent communities, and Welsh Road corridor produce some of the most elegant backyard hibachi events.`  }, cta: { src: '/pics/hibachi-pool-party.jpg',  alt: (city) => `Book a hibachi chef in ${city} PA`,                     caption: 'Book Your Blue Bell Event'     } },
  'lancaster':          { testimonial: { src: '/pics/backyard-hibachi.jpg',   alt: (city) => `Hibachi catering at a ${city} PA farm venue`,                  caption: 'Lancaster PA Events',            intro: (city) => `${city}'s Amish Country farm venues, Kitchen Kettle Village community, and Central Market heritage make it a destination for one-of-a-kind private hibachi dining.` }, cta: { src: '/pics/mobile-hibachi-2.jpg',    alt: (city) => `Book hibachi catering in ${city} PA`,                   caption: 'Book Your Lancaster Event'     } },
  'pittsburgh':         { testimonial: { src: '/pics/hibachi-catering-3.jpg', alt: (city) => `Private hibachi event in ${city} PA`,                          caption: 'Pittsburgh Events',              intro: (city) => `From Shadyside and Squirrel Hill to Lawrenceville and Mt. Washington, ${city} hosts some of the most vibrant private hibachi events in Pennsylvania.`          }, cta: { src: '/pics/mobile-hibachi-2.jpg',    alt: (city) => `Book a private hibachi chef in ${city} PA`,             caption: 'Book Your Pittsburgh Event'    } },
  'mt-lebanon':         { testimonial: { src: '/pics/hibachi-pool-party.jpg', alt: (city) => `Private hibachi event in ${city} PA`,                          caption: 'Mt. Lebanon South Hills Events', intro: (city) => `${city}'s South Hills character, Beverly Road community energy, and residential pride make it one of Pittsburgh's most active private hibachi markets.`        }, cta: { src: '/pics/backyard-hibachi.jpg',    alt: (city) => `Book a hibachi chef in ${city} PA`,                     caption: 'Book Your Mt. Lebanon Event'   } },
  'wexford':            { testimonial: { src: '/pics/hibachi-shot-2.jpg',     alt: (city) => `Private hibachi event in ${city} PA`,                          caption: 'Wexford North Hills Events',     intro: (city) => `${city}'s North Allegheny School District community, Route 19 corridor executives, and upscale residential character drive a thriving private hibachi market.`    }, cta: { src: '/pics/private-event-4.jpg',     alt: (city) => `Book a hibachi chef in ${city} PA`,                     caption: 'Book Your Wexford Event'       } },
  'cranberry-township': { testimonial: { src: '/pics/traveling-hibachi.jpg',  alt: (city) => `Hibachi catering in ${city} PA`,                               caption: 'Cranberry Township Events',      intro: (city) => `${city}'s Route 228 corporate corridor and North Pittsburgh executive community make it a growing destination for private hibachi catering events.`             }, cta: { src: '/pics/hibachi-in-garage.jpg',   alt: (city) => `Book hibachi catering in ${city} PA`,                   caption: 'Book Your Cranberry Event'     } },
  'fox-chapel':         { testimonial: { src: '/pics/private-event-4.jpg',    alt: (city) => `Private hibachi estate dinner in ${city} PA`,                  caption: 'Fox Chapel Estate Events',       intro: (city) => `${city}'s Allegheny River estates, Fox Chapel Golf Club, and Dorseyville Road properties make it one of Pittsburgh's premier private hibachi destinations.`   }, cta: { src: '/pics/hibachi-pool-party.jpg',  alt: (city) => `Book a private hibachi chef in ${city} PA`,             caption: 'Book Your Fox Chapel Event'   } },
  'sewickley':          { testimonial: { src: '/pics/hibachi-at-home.jpg',    alt: (city) => `Private hibachi event in ${city} PA`,                          caption: 'Sewickley Village Events',       intro: (city) => `${city}'s Ohio River waterfront estates, village boutique character, and Sewickley Heights Golf Club community make it a jewel of Pittsburgh private dining.`   }, cta: { src: '/pics/mobile-hibachi-2.jpg',    alt: (city) => `Book a private hibachi chef in ${city} PA`,             caption: 'Book Your Sewickley Event'     } },
  'stroudsburg':        { testimonial: { src: '/pics/backyard-hibachi.jpg',   alt: (city) => `Mobile hibachi at a Pocono vacation rental near ${city} PA`,   caption: 'Stroudsburg Pocono Events',      intro: (city) => `${city} is the gateway to the Pocono Mountains — and our mobile hibachi chef service is built for exactly the vacation rental and cabin weekend market here.`   }, cta: { src: '/pics/hibachi-pool-party.jpg',  alt: (city) => `Book a mobile hibachi chef in ${city} PA`,              caption: 'Book Your Stroudsburg Event'  } },
  'mount-pocono':       { testimonial: { src: '/pics/hibachi-shot-2.jpg',     alt: (city) => `Mobile hibachi at a cabin near ${city} PA`,                    caption: 'Mount Pocono Cabin Events',      intro: (city) => `Near Camelback, Kalahari, Great Wolf Lodge, and Pocono Raceway, ${city} is at the center of the Pocono Mountains' most active vacation rental market.`         }, cta: { src: '/pics/hibachi-catering-3.jpg',  alt: (city) => `Book a mobile hibachi chef near ${city} PA`,            caption: 'Book Your Mount Pocono Event' } },
  'hawley':             { testimonial: { src: '/pics/hibachi-pool-party.jpg', alt: (city) => `Backyard hibachi at a Lake Wallenpaupack property near ${city}`, caption: 'Hawley Lake Events',            intro: (city) => `${city}'s Lake Wallenpaupack waterfront and Wayne County cabin community make it one of the Pocono region's most beloved private hibachi destinations.`        }, cta: { src: '/pics/private-event-4.jpg',     alt: (city) => `Book a hibachi chef near ${city} PA`,                   caption: 'Book Your Hawley Event'        } },
  'hershey':            { testimonial: { src: '/pics/hibachi-catering-3.jpg', alt: (city) => `Mobile hibachi event in ${city} PA`,                           caption: 'Hershey PA Events',              intro: (city) => `${city}'s resort destination appeal, Penn State Health medical community, and Hersheypark-area vacation rental market create year-round demand for private hibachi.` }, cta: { src: '/pics/backyard-hibachi.jpg',    alt: (city) => `Book a hibachi chef in ${city} PA`,                     caption: 'Book Your Hershey Event'       } },
}

// ─── Section Variants (6 themes) ─────────────────────────────────────────────
const PA_SECTION_VARIANTS = [
  // T0 — Main Line Luxury
  {
    heroPill:           'Premium Private Hibachi',
    experiencePill:     'The Main Line Experience',
    experiencePoints:   (city) => [
      `Chef arrives at your ${city} estate or home fully equipped — no venue required`,
      'Premium proteins: Wagyu beef, filet mignon, lobster tail, and hand-selected seafood',
      'Full teppanyaki entertainment with knife artistry and flame performance',
      'Custom menu built entirely around your preferences and dietary needs',
      'From setup to cleanup, every detail is handled for you',
    ],
    experienceImage:    '/pics/private-party-chef-6.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a Main Line estate in ${city} Pennsylvania`,
    areasPill:          'Main Line Service Area',
    areasHeadline:      (city) => `Serving ${city} and the Main Line Corridor`,
    areasIntro: [
      (city) => `Our private hibachi chef service travels throughout the Main Line luxury corridor including ${city}, Wayne, Bryn Mawr, Malvern, Newtown Square, and surrounding Chester County and Delaware County communities. We travel to your estate, classic stone home, or backyard property with everything needed for a full teppanyaki experience.`,
      (city) => `The Main Line is one of the most prestigious private entertaining markets in America, and ${city} homeowners expect an experience that matches the setting. Our chefs bring premium ingredient sourcing, professional service, and the live teppanyaki performance that turns any dinner gathering into an evening your guests remember for months.`,
    ],
    areasButton:          'View All Pennsylvania Locations',
    occasionPill:         'Perfect For',
    occasionHeadline:     (city) => `Private Events We Specialize In Around ${city}`,
    occasionSubtext:      'From intimate anniversary dinners to large graduation celebrations, our Main Line hibachi chefs deliver an experience your guests have never encountered anywhere else.',
    faqPill:              'Common Questions',
    faqHeadline:          (city, abbr) => `Private Hibachi FAQ for ${city}, ${abbr}`,
    testimonialSubheading: 'What Main Line Hosts Are Saying',
  },
  // T1 — Philadelphia Metro
  {
    heroPill:           'Private Hibachi Chef Philadelphia',
    experiencePill:     'The Philadelphia Experience',
    experiencePoints:   (city) => [
      `Chef travels to your ${city} location — rooftop, backyard, courtyard, or event space`,
      'Premium proteins including steak, lobster, shrimp, salmon, and plant-based options',
      'Interactive teppanyaki show that works perfectly in urban and suburban settings',
      'Menu tailored to your group size, preferences, and dietary requirements',
      'Complete setup and cleanup — zero logistics for the host',
    ],
    experienceImage:    '/pics/hibachi-catering-3.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} Pennsylvania event`,
    areasPill:          'Philadelphia Metro',
    areasHeadline:      (city) => `Serving ${city} and Greater Philadelphia`,
    areasIntro: [
      (city) => `Our private hibachi chef service covers all of Philadelphia and the greater metro area including ${city}, Rittenhouse Square, Society Hill, Fishtown, Chestnut Hill, Old City, University City, Fairmount, Northern Liberties, King of Prussia, Wayne, and all Philadelphia neighborhoods and suburbs. Urban patios, rooftops, backyards, and courtyards all work.`,
      (city) => `Philadelphia has a sophisticated event culture, and ${city} brings that same energy to private entertaining. Our chefs bring restaurant-quality teppanyaki directly to your location — no reservation required, no shared dining room, and a chef whose only focus is your table.`,
    ],
    areasButton:          'View All Pennsylvania Locations',
    occasionPill:         'Perfect For',
    occasionHeadline:     (city) => `Private Hibachi Events We Love in ${city}`,
    occasionSubtext:      'From Rittenhouse Square rooftop birthday dinners to corporate team events, our Philadelphia-area hibachi chefs elevate every gathering.',
    faqPill:              'Common Questions',
    faqHeadline:          (city, abbr) => `Philadelphia Hibachi FAQ — ${city}, ${abbr}`,
    testimonialSubheading: 'What Philadelphia-Area Hosts Are Saying',
  },
  // T2 — Philadelphia Suburbs
  {
    heroPill:           'Private Hibachi at Home',
    experiencePill:     'The Chester County Experience',
    experiencePoints:   (city) => [
      `Chef comes to your ${city} home or property with everything included`,
      'Premium proteins, fresh seafood, and vegetarian options all available',
      'Interactive teppanyaki show your guests will talk about for months',
      'Menu fully customizable for any dietary needs or preferences',
      'Setup, cooking, and complete cleanup — nothing left for you to manage',
    ],
    experienceImage:    '/pics/hibachi-at-home.jpg',
    experienceImageAlt: (city) => `Hibachi chef at a backyard party in ${city} Pennsylvania`,
    areasPill:          'Greater Philadelphia Suburbs',
    areasHeadline:      (city) => `Serving ${city} and the Philadelphia Suburbs`,
    areasIntro: [
      (city) => `Our private hibachi chef service covers the Philadelphia suburban corridor including ${city}, West Chester, Media, Blue Bell, Malvern, Newtown Square, and surrounding Chester, Delaware, and Montgomery County communities. Whether you're hosting a graduation party, a birthday dinner, or a neighborhood celebration, we travel to your property with everything needed.`,
      (city) => `The Philadelphia suburbs have a rich tradition of backyard and home entertaining, and ${city} is a vibrant part of that culture. Our chefs deliver the full teppanyaki experience — premium proteins, live cooking performance, and zero cleanup responsibility for the host.`,
    ],
    areasButton:          'View All Pennsylvania Locations',
    occasionPill:         'Perfect For',
    occasionHeadline:     (city) => `Private Events We Specialize In Around ${city}`,
    occasionSubtext:      'From Chester County graduation parties to neighborhood celebrations, our Philadelphia suburban hibachi chefs make every occasion extraordinary.',
    faqPill:              'Common Questions',
    faqHeadline:          (city, abbr) => `Philadelphia Suburb Hibachi FAQ — ${city}, ${abbr}`,
    testimonialSubheading: 'What Chester County Hosts Are Saying',
  },
  // T3 — Pittsburgh Metro
  {
    heroPill:           'Private Hibachi Chef Pittsburgh',
    experiencePill:     'The Pittsburgh Experience',
    experiencePoints:   (city) => [
      `Chef travels to your ${city} home, deck, or outdoor event space fully equipped`,
      'Premium proteins — steak, chicken, shrimp, salmon, lobster tail, and more',
      'Interactive teppanyaki entertainment with flame tricks and knife skills',
      'Menu customized around your preferences and dietary requirements',
      'Setup to cleanup — completely handled by your chef',
    ],
    experienceImage:    '/pics/private-chef-2.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at an event in ${city} Pennsylvania`,
    areasPill:          'Pittsburgh Metro',
    areasHeadline:      (city) => `Serving ${city} and the Pittsburgh Metro`,
    areasIntro: [
      (city) => `Our private hibachi chef service covers all of the Pittsburgh metro area including ${city}, Shadyside, Squirrel Hill, Lawrenceville, Mt. Washington, North Shore, Strip District, Fox Chapel, Sewickley, Mt. Lebanon, Wexford, Cranberry Township, and surrounding communities. From a Squirrel Hill backyard to a Fox Chapel estate to a Lawrenceville rooftop, we come to you.`,
      (city) => `Pittsburgh is a city undergoing a remarkable renaissance — and ${city} is part of that story. Our private hibachi chefs bring the full teppanyaki experience to your location, delivering restaurant-quality food and live entertainment that elevates every gathering from a nice dinner to a night nobody forgets.`,
    ],
    areasButton:          'View All Pennsylvania Locations',
    occasionPill:         'Perfect For',
    occasionHeadline:     (city) => `Hibachi Events We Love in ${city}`,
    occasionSubtext:      'From Pittsburgh neighborhood birthday parties to Fox Chapel estate dinners, our Pittsburgh-area hibachi chefs bring the experience to you.',
    faqPill:              'Common Questions',
    faqHeadline:          (city, abbr) => `Pittsburgh Hibachi FAQ — ${city}, ${abbr}`,
    testimonialSubheading: 'What Pittsburgh-Area Hosts Are Saying',
  },
  // T4 — Pocono Mountains
  {
    heroPill:           'Mobile Hibachi Chef Poconos',
    experiencePill:     'The Pocono Experience',
    experiencePoints:   (city) => [
      `Chef travels to your ${city} cabin, vacation rental, or lakefront property`,
      'Fully self-contained propane setup — no gas hookup needed at any rental property',
      'Premium proteins, full teppanyaki show, and complete cleanup included',
      'Menu customized for your group and any dietary requirements',
      'Everyone eats together — no restaurant reservations or separate tables',
    ],
    experienceImage:    '/pics/hibachi-to-you-2.jpg',
    experienceImageAlt: (city) => `Mobile hibachi chef at a Pocono cabin or vacation rental near ${city} PA`,
    areasPill:          'Pocono Mountains Service Area',
    areasHeadline:      (city) => `Serving ${city} and the Pocono Mountains Region`,
    areasIntro: [
      (city) => `Our mobile hibachi chef service travels throughout the Pocono Mountains including ${city}, Stroudsburg, East Stroudsburg, Mount Pocono, Lake Harmony, Hawley, Lake Wallenpaupack, Camelback Mountain, and the greater Monroe and Wayne County vacation rental corridor. We specialize in cabin weekends, bachelorette groups, family reunions, and vacation rental private dinners.`,
      (city) => `The Pocono vacation rental weekend is exactly the kind of occasion private hibachi was designed for — a large group in one place, outdoor space available, and people who came to celebrate. Our chef travels to your ${city} property with a fully self-contained setup, handles everything, and leaves your rental spotless.`,
    ],
    areasButton:          'View All Pennsylvania Locations',
    occasionPill:         'Perfect For',
    occasionHeadline:     (city) => `Pocono Hibachi Events Near ${city}`,
    occasionSubtext:      'Cabin weekends, bachelorette getaways, family reunions, graduation trips — our Pocono mobile hibachi chefs specialize in making vacation rental dinners the highlight of the trip.',
    faqPill:              'Common Questions',
    faqHeadline:          (city, abbr) => `Pocono Hibachi FAQ — ${city}, ${abbr}`,
    testimonialSubheading: 'What Pocono Vacation Groups Are Saying',
  },
  // T5 — Central PA
  {
    heroPill:           'Mobile Hibachi Chef Central PA',
    experiencePill:     'The Central Pennsylvania Experience',
    experiencePoints:   (city) => [
      `Chef travels to your ${city} property, venue, or vacation rental`,
      'Self-contained propane setup — no gas hookup needed',
      'Premium proteins including filet mignon, lobster tail, Wagyu beef, and shrimp',
      'Menu built around your group size and dietary needs',
      'Full setup and cleanup — nothing left for the host to manage',
    ],
    experienceImage:    '/pics/mobile-hibachi.jpg',
    experienceImageAlt: (city) => `Mobile hibachi chef at a ${city} Pennsylvania event`,
    areasPill:          'Central Pennsylvania',
    areasHeadline:      (city) => `Serving ${city} and Central Pennsylvania`,
    areasIntro: [
      (city) => `Our mobile hibachi chef service travels throughout Central Pennsylvania including ${city}, Lancaster, Hershey, Harrisburg area, the Pennsylvania Dutch Country corridor, and surrounding communities. We specialize in destination events — wedding weekend dinners, medical community milestones, family reunions, and resort-area group celebrations.`,
      (city) => `Central Pennsylvania draws visitors for reasons as distinct as Amish Country farm stays, Hersheypark resort weekends, and Penn State Health milestones — and our private hibachi chef travels to your ${city} location with everything needed for a full teppanyaki experience, regardless of property type.`,
    ],
    areasButton:          'View All Pennsylvania Locations',
    occasionPill:         'Perfect For',
    occasionHeadline:     (city) => `Private Events We Love Near ${city}`,
    occasionSubtext:      'From Lancaster wedding weekends to Hershey resort celebrations, our Central PA hibachi chefs make every occasion extraordinary.',
    faqPill:              'Common Questions',
    faqHeadline:          (city, abbr) => `Central PA Hibachi FAQ — ${city}, ${abbr}`,
    testimonialSubheading: 'What Central PA Hosts Are Saying',
  },
]

// ─── Local Highlights ─────────────────────────────────────────────────────────
const PA_LOCAL_HIGHLIGHTS = {
  'philadelphia':       ['Rittenhouse Square rooftop entertaining', 'Society Hill historic courtyard dinners', 'Fishtown creative neighborhood gatherings', 'Chestnut Hill estate celebrations', 'University City milestone dinners', 'Fairmount Park-adjacent backyard events', 'Northern Liberties community gatherings', 'Old City heritage neighborhood celebrations'],
  'wayne':              ['Devon Horse Show community entertaining', 'Radnor Trail corridor estate dinners', 'Wayne Hotel-area celebrations', 'Chanticleer Garden proximity events', 'Waynesborough historic estate gatherings'],
  'bryn-mawr':          ['Bryn Mawr College graduation weekend dinners', 'Haverford College proximity celebrations', 'Lancaster Avenue estate corridor entertaining', 'Roberts Road classic stone home gatherings', 'Ludington Library-area neighborhood events'],
  'king-of-prussia':    ['King of Prussia Mall-corridor corporate entertaining', 'Valley Forge National Historical Park proximity', 'Route 202 Corporate Corridor team events', 'Valley Forge Casino Resort-area gatherings', 'Great Valley Corporate Center executive dinners'],
  'newtown-square':     ['SAP Americas headquarters corridor dining', 'Ridley Creek State Park-area estate gatherings', 'Newtown Square Country Club-adjacent entertaining', 'Darby Creek Township backyard celebrations', 'Delaware County luxury residential community events'],
  'west-chester':       ['West Chester University graduation weekend parties', 'Gay Street historic district celebrations', 'Chester County Courthouse corridor entertaining', 'Longwood Gardens proximity events', 'West Chester Pike estate corridor gatherings'],
  'malvern':            ['Great Valley Corporate Center executive dinners', 'Paoli Train Station corridor estate events', 'East Whiteland Township luxury home gatherings', 'Malvern Preparatory School celebration events', 'Chester Valley Trail-area community entertaining'],
  'media':              ['State Street neighborhood block parties', 'Media Theatre-area district celebrations', 'Ridley Creek State Park proximity events', 'Delaware County community gatherings', 'Veterans Memorial area neighborhood entertaining'],
  'blue-bell':          ['Blue Bell Country Club-adjacent estate entertaining', 'Whitpain Township luxury home gatherings', 'Welsh Road corporate corridor events', 'Gwynedd-Mercy area community celebrations', 'Montgomery County affluent suburb entertaining'],
  'lancaster':          ['Amish Country farm venue weddings and reunions', 'Kitchen Kettle Village-area celebration dinners', 'Rock Lititz entertainment industry events', 'Longwood Gardens proximity celebrations', 'Central Market Lancaster community gatherings'],
  'pittsburgh':         ['Shadyside and Squirrel Hill neighborhood estate dinners', 'Lawrenceville rooftop and backyard celebrations', 'Mt. Washington overlook-area gatherings', 'North Shore-area corporate entertaining', 'Strip District community event dinners'],
  'mt-lebanon':         ['Mt. Lebanon Country Club-adjacent estate entertaining', 'Beverly Road shopping district neighborhood gatherings', 'South Hills graduation party traditions', 'Bird Park-area residential celebrations', 'Library area community event dinners'],
  'wexford':            ['North Allegheny School District graduation parties', 'Route 19 corridor executive home dinners', 'Wexford Health and Wellness community events', 'North Hills luxury suburb entertaining', 'Cranberry Township border community gatherings'],
  'cranberry-township': ['CONSOL Energy-area corporate team events', 'Route 228 Corporate Corridor holiday parties', 'Cranberry Crossroads district community entertaining', 'Pittsburgh North Trail-area neighborhood gatherings', 'North Pittsburgh executive community events'],
  'fox-chapel':         ['Fox Chapel Golf Club-adjacent estate entertaining', 'Allegheny River waterfront property celebrations', 'Fox Chapel Polo Club-area luxury gatherings', 'Dorseyville Road estate corridor dinners', "O'Hara Township prestigious residential events"],
  'sewickley':          ['Village of Sewickley boutique district celebrations', 'Sewickley Heights Golf Club-area estate entertaining', 'Ohio River waterfront property gatherings', 'Edgeworth-area luxury residential events', 'Boundary Street neighborhood community dinners'],
  'stroudsburg':        ['East Stroudsburg University graduation weekends', 'Delaware Water Gap adventure group celebrations', 'Camelback Mountain proximity vacation rental parties', 'Main Street Stroudsburg community gatherings', 'Monroe County vacation corridor events'],
  'mount-pocono':       ['Camelback Resort cabin-weekend celebrations', 'Kalahari Resort-area group gatherings', 'Great Wolf Lodge family reunion dinners', 'Pocono Raceway experience weekend parties', 'Big Boulder and Jack Frost ski season celebrations'],
  'hawley':             ['Lake Wallenpaupack waterfront cabin celebrations', 'Roebling Bridge area lakefront property gatherings', 'Hawley Silk Mill historic district events', 'Paupack Hills Golf Club-area estate entertaining', 'Wayne County lake community reunion dinners'],
  'hershey':            ['Hersheypark-area vacation rental celebration dinners', 'Hotel Hershey-adjacent estate entertaining', 'Penn State Health Milton S. Hershey Medical Center milestone events', 'The Giant Center-area community gatherings', 'Hershey Country Club-adjacent luxury home entertaining'],
}

// ─── Per-City Occasion / FAQ / Subtitle / Meta Assignments ──────────────────
const PA_FEATURED_OCCASIONS = {
  'philadelphia': PA_OCCASIONS_URBAN,   'wayne': PA_OCCASIONS_LUXURY,        'bryn-mawr': PA_OCCASIONS_LUXURY,
  'king-of-prussia': PA_OCCASIONS_URBAN,'newtown-square': PA_OCCASIONS_LUXURY,'west-chester': PA_OCCASIONS_LUXURY,
  'malvern': PA_OCCASIONS_LUXURY,       'media': PA_OCCASIONS_LUXURY,         'blue-bell': PA_OCCASIONS_LUXURY,
  'lancaster': PA_OCCASIONS_DESTINATION,'pittsburgh': PA_OCCASIONS_URBAN,     'mt-lebanon': PA_OCCASIONS_LUXURY,
  'wexford': PA_OCCASIONS_LUXURY,       'cranberry-township': PA_OCCASIONS_URBAN,'fox-chapel': PA_OCCASIONS_LUXURY,
  'sewickley': PA_OCCASIONS_LUXURY,     'stroudsburg': PA_OCCASIONS_POCONO,   'mount-pocono': PA_OCCASIONS_POCONO,
  'hawley': PA_OCCASIONS_POCONO,        'hershey': PA_OCCASIONS_DESTINATION,
}

const PA_FAQ_SETS = {
  'philadelphia': PA_FAQ_PHILLY,      'wayne': PA_FAQ_MAIN_LINE,        'bryn-mawr': PA_FAQ_MAIN_LINE,
  'king-of-prussia': PA_FAQ_PHILLY,   'newtown-square': PA_FAQ_MAIN_LINE,'west-chester': PA_FAQ_MAIN_LINE,
  'malvern': PA_FAQ_MAIN_LINE,        'media': PA_FAQ_MAIN_LINE,         'blue-bell': PA_FAQ_MAIN_LINE,
  'lancaster': PA_FAQ_CENTRAL,        'pittsburgh': PA_FAQ_PITTSBURGH,   'mt-lebanon': PA_FAQ_PITTSBURGH,
  'wexford': PA_FAQ_PITTSBURGH,       'cranberry-township': PA_FAQ_PITTSBURGH,'fox-chapel': PA_FAQ_PITTSBURGH,
  'sewickley': PA_FAQ_PITTSBURGH,     'stroudsburg': PA_FAQ_POCONO,      'mount-pocono': PA_FAQ_POCONO,
  'hawley': PA_FAQ_POCONO,            'hershey': PA_FAQ_CENTRAL,
}

const PA_HERO_SUBTITLES = {
  'philadelphia':       'Private hibachi chef in Philadelphia — Rittenhouse Square rooftops, Society Hill courtyards, Fishtown backyards, and Chestnut Hill estates.',
  'wayne':              'Hibachi at home in Wayne, PA — private chef service for Main Line estates, Devon Horse Show properties, and Radnor corridor homes.',
  'bryn-mawr':          'Hibachi at home in Bryn Mawr, PA — private hibachi for Bryn Mawr College graduation weekends, Lancaster Avenue estates, and Main Line celebrations.',
  'king-of-prussia':    'Hibachi catering in King of Prussia, PA — private chef service for Route 202 corporate events, Valley Forge team dinners, and holiday parties.',
  'newtown-square':     'Hibachi at home in Newtown Square, PA — private hibachi chef for Delaware County estate dinners, graduation parties, and backyard celebrations.',
  'west-chester':       'Hibachi at home in West Chester, PA — private chef for Chester County estate dinners, West Chester University graduation weekends, and Longwood Gardens-area celebrations.',
  'malvern':            'Hibachi at home in Malvern, PA — private hibachi for Great Valley corporate events, Chester County estate dinners, and Paoli corridor celebrations.',
  'media':              'Backyard hibachi in Media, PA — private chef for State Street neighborhood parties, Delaware County backyard celebrations, and community events.',
  'blue-bell':          'Hibachi at home in Blue Bell, PA — private hibachi chef for Whitpain Township estates, Montgomery County luxury homes, and corporate corridor entertaining.',
  'lancaster':          'Hibachi catering in Lancaster, PA — private chef for Amish Country wedding weekends, Lancaster farm venue events, and Central PA family gatherings.',
  'pittsburgh':         'Private hibachi chef in Pittsburgh, PA — we travel to Shadyside, Squirrel Hill, Lawrenceville, Mt. Washington, North Shore, and all Pittsburgh neighborhoods.',
  'mt-lebanon':         'Hibachi at home in Mt. Lebanon, PA — private chef for South Hills estates, graduation parties, and Beverly Road-area celebrations.',
  'wexford':            'Hibachi at home in Wexford, PA — private hibachi chef for North Hills executive homes, graduation parties, and Cranberry Township corridor events.',
  'cranberry-township': 'Hibachi catering in Cranberry Township, PA — private chef for Route 228 corporate events, team dinners, and Pittsburgh North holiday parties.',
  'fox-chapel':         'Private hibachi chef in Fox Chapel, PA — premium estate dining for Allegheny River homes, Fox Chapel Golf Club events, and Dorseyville Road properties.',
  'sewickley':          'Private hibachi chef in Sewickley, PA — private teppanyaki for Ohio River estates, Sewickley Heights Golf Club events, and village celebrations.',
  'stroudsburg':        'Mobile hibachi chef in Stroudsburg, PA — private teppanyaki for Pocono vacation rentals, cabin weekends, and Delaware Water Gap celebration getaways.',
  'mount-pocono':       'Mobile hibachi chef near Mount Pocono, PA — private chef for Camelback cabin weekends, Kalahari resort events, Great Wolf Lodge gatherings, and Pocono Raceway group celebrations.',
  'hawley':             'Backyard hibachi near Hawley, PA — private hibachi for Lake Wallenpaupack cabin weekends, lakefront homes, and waterfront family celebrations.',
  'hershey':            'Mobile hibachi chef in Hershey, PA — private chef for Hotel Hershey events, Penn State Health milestone dinners, and Hersheypark-area vacation rental celebrations.',
}

const PA_META_OVERRIDES = {
  'philadelphia':       { metaTitle: 'Private Hibachi Chef in Philadelphia PA | Hibachi Chef Philadelphia Pennsylvania',          metaDescription: 'Hire a private hibachi chef in Philadelphia, PA. We travel to Rittenhouse Square, Society Hill, Fishtown, Chestnut Hill, and all Philadelphia neighborhoods.' },
  'wayne':              { metaTitle: 'Hibachi at Home in Wayne PA | Private Hibachi Chef Wayne Pennsylvania',                     metaDescription: 'Private hibachi chef in Wayne, PA for Main Line estate dinners, graduation parties, and celebrations. Serving the Devon Horse Show corridor and all Radnor Township communities.' },
  'bryn-mawr':          { metaTitle: 'Hibachi at Home in Bryn Mawr PA | Private Hibachi Chef Main Line',                         metaDescription: 'Private hibachi chef in Bryn Mawr, PA for graduation weekends, anniversary dinners, and estate celebrations. Serving the Bryn Mawr College corridor and all Main Line communities.' },
  'king-of-prussia':    { metaTitle: 'Hibachi Catering King of Prussia PA | Private Hibachi Chef KOP',                           metaDescription: 'Private hibachi catering in King of Prussia, PA for corporate events, team dinners, and holiday parties. Serving Valley Forge, Route 202 corridor, and the KOP area.' },
  'newtown-square':     { metaTitle: 'Hibachi at Home in Newtown Square PA | Private Hibachi Chef',                              metaDescription: 'Private hibachi chef in Newtown Square, PA for estate dinners, graduation parties, and Delaware County celebrations. Serving the SAP Americas corridor and Newtown Square communities.' },
  'west-chester':       { metaTitle: 'Hibachi at Home in West Chester PA | Private Hibachi Chef',                                metaDescription: 'Private hibachi chef in West Chester, PA for graduation parties, estate dinners, and Chester County celebrations. Serving West Chester University area and all local communities.' },
  'malvern':            { metaTitle: 'Hibachi at Home in Malvern PA | Private Hibachi Chef Paoli Malvern',                       metaDescription: 'Private hibachi chef in Malvern, PA for corporate dinners, estate celebrations, and Great Valley-area events. Serving Chester County communities throughout the Paoli and Malvern corridor.' },
  'media':              { metaTitle: 'Backyard Hibachi in Media PA | Private Hibachi Chef Delaware County',                       metaDescription: 'Backyard hibachi chef in Media, PA for neighborhood parties, birthday celebrations, and Delaware County events. Serving State Street, Ridley Creek area, and surrounding communities.' },
  'blue-bell':          { metaTitle: 'Hibachi at Home in Blue Bell PA | Private Hibachi Chef Blue Bell',                         metaDescription: 'Private hibachi chef in Blue Bell, PA for estate dinners, graduation parties, and Montgomery County celebrations. Serving Whitpain Township and surrounding Blue Bell communities.' },
  'lancaster':          { metaTitle: 'Hibachi Catering Lancaster PA | Private Chef Lancaster Pennsylvania',                       metaDescription: 'Private hibachi catering in Lancaster, PA for wedding weekend dinners, family reunions, and Amish Country celebrations. Serving Kitchen Kettle Village area and all Lancaster County communities.' },
  'pittsburgh':         { metaTitle: 'Private Hibachi Chef in Pittsburgh PA | Hibachi Chef Pittsburgh Pennsylvania',              metaDescription: 'Hire a private hibachi chef in Pittsburgh, PA. We travel to Shadyside, Squirrel Hill, Lawrenceville, Mt. Washington, North Shore, and all Pittsburgh neighborhoods.' },
  'mt-lebanon':         { metaTitle: 'Hibachi at Home in Mt. Lebanon PA | Private Hibachi Chef South Hills',                     metaDescription: 'Private hibachi chef in Mt. Lebanon, PA for South Hills graduation parties, estate dinners, and Beverly Road-area celebrations.' },
  'wexford':            { metaTitle: 'Hibachi at Home in Wexford PA | Private Hibachi Chef North Hills Pittsburgh',               metaDescription: 'Private hibachi chef in Wexford, PA for North Hills graduation parties, executive home dinners, and Cranberry Township-area celebrations.' },
  'cranberry-township': { metaTitle: 'Hibachi Catering Cranberry Township PA | Private Hibachi Pittsburgh North',                 metaDescription: 'Private hibachi catering in Cranberry Township, PA for corporate team dinners, holiday parties, and Route 228 corridor events.' },
  'fox-chapel':         { metaTitle: 'Private Hibachi Chef in Fox Chapel PA | Estate Hibachi Fox Chapel Pennsylvania',           metaDescription: "Premium private hibachi chef in Fox Chapel, PA for Allegheny River estate dinners, graduation celebrations, and private events at the region's finest properties." },
  'sewickley':          { metaTitle: 'Private Hibachi Chef in Sewickley PA | Hibachi at Home Sewickley Pennsylvania',            metaDescription: 'Private hibachi chef in Sewickley, PA for Ohio River estate dinners, Sewickley Heights gatherings, and village celebrations.' },
  'stroudsburg':        { metaTitle: 'Mobile Hibachi Chef Stroudsburg PA | Private Hibachi Poconos',                             metaDescription: 'Mobile hibachi chef in Stroudsburg, PA for Pocono Mountain vacation rentals, cabin weekends, and Delaware Water Gap celebrations.' },
  'mount-pocono':       { metaTitle: 'Mobile Hibachi Chef Mount Pocono PA | Private Hibachi Poconos',                            metaDescription: 'Mobile hibachi chef near Mount Pocono, PA for Camelback cabin weekends, Kalahari resort events, Great Wolf Lodge gatherings, and Pocono vacation rental parties.' },
  'hawley':             { metaTitle: 'Backyard Hibachi in Hawley PA | Private Chef Lake Wallenpaupack',                          metaDescription: 'Backyard hibachi chef near Hawley, PA for Lake Wallenpaupack vacation rentals, lakefront cabin weekends, and Wayne County family celebrations.' },
  'hershey':            { metaTitle: 'Mobile Hibachi Chef Hershey PA | Private Hibachi Chef Hershey Pennsylvania',               metaDescription: 'Mobile hibachi chef in Hershey, PA for Hotel Hershey events, Penn State Health milestone dinners, and Hersheypark-area vacation rental celebrations.' },
}

// ─── Testimonials (Batch 1: 5 cities) ────────────────────────────────────────
const PA_TESTIMONIALS_PHILADELPHIA = [
  { text: "We had a private hibachi chef set up on our Rittenhouse Square rooftop for my 40th birthday and the experience was unforgettable. Fifteen guests, perfect evening, and the chef's performance had everyone completely engaged. Already planning next year's event.", name: 'Sarah L.', city: 'Philadelphia', event: 'Birthday Celebration', initials: 'SL' },
  { text: "Our Fishtown backyard graduation dinner for twenty family members who flew in from six states was everything we hoped for. The chef made the space work perfectly, the food was exceptional, and cleanup was complete. We didn't lift a finger.", name: 'Mike & Jen K.', city: 'Philadelphia', event: 'Graduation Dinner', initials: 'MK' },
  { text: "Chestnut Hill estate dinner for a corporate team of eighteen after a major product launch. The chef was professional, the food was exceptional, and the teppanyaki performance broke the ice in a way that a restaurant dinner never could. Already booked again for our holiday event.", name: 'Diana P.', city: 'Philadelphia', event: 'Corporate Team Dinner', initials: 'DP' },
]

const PA_TESTIMONIALS_WAYNE = [
  { text: "Wayne estate dinner for my husband's retirement — forty years in the corporate world, and he deserved something special. The chef arrived early, set up on our stone patio, and created an evening that matched the occasion completely. Our guests still reference it.", name: 'Carol B.', city: 'Wayne', event: 'Retirement Celebration', initials: 'CB' },
  { text: "We host a Radnor dinner party every August and this year added a private hibachi chef for the first time. Twenty-two guests on the back lawn, Wagyu beef and lobster tail all around. It was the best version of that gathering in twelve years.", name: 'Thomas H.', city: 'Wayne', event: 'Annual Dinner Party', initials: 'TH' },
  { text: "Wayne graduation party for our daughter who just completed her residency. Thirty-five family members came from across the country and the chef's performance gave the evening exactly the celebratory energy we wanted. Premium proteins, zero cleanup. Perfect.", name: 'Susan & David M.', city: 'Wayne', event: 'Graduation Celebration', initials: 'SM' },
]

const PA_TESTIMONIALS_BRYN_MAWR = [
  { text: "My daughter graduated from Bryn Mawr College and we hosted a family dinner for twenty-eight who had traveled from across the country. The private hibachi chef set up on our Lancaster Avenue patio and the evening was everything the occasion deserved. Exceptional food, exceptional service.", name: 'Patricia A.', city: 'Bryn Mawr', event: 'College Graduation Celebration', initials: 'PA' },
  { text: "Thirty-fifth anniversary dinner at our Bryn Mawr home. We've celebrated at some of the best restaurants in the region, and this private hibachi experience was the most memorable evening we've had. The intimacy and the quality of the performance were both extraordinary.", name: 'Robert & Jane W.', city: 'Bryn Mawr', event: 'Anniversary Dinner', initials: 'RW' },
  { text: "Birthday party for thirty guests on our Roberts Road property. The chef arrived on time, needed minimal setup space, and created an evening that our guests couldn't stop talking about for weeks. Main Line friends are already asking for the contact information.", name: 'Christine K.', city: 'Bryn Mawr', event: 'Birthday Celebration', initials: 'CK' },
]

const PA_TESTIMONIALS_KING_OF_PRUSSIA = [
  { text: "We used the private hibachi chef service for a corporate team dinner of forty after a major product launch. The Route 202 event space worked perfectly. The performance was professional, the food was exceptional, and the evening built team cohesion in a way no restaurant dinner ever has.", name: 'Jennifer M.', city: 'King of Prussia', event: 'Corporate Team Event', initials: 'JM' },
  { text: "Holiday party for thirty-two colleagues at a Valley Forge-area venue. The chef handled everything from setup to cleanup and the teppanyaki performance was the most popular element of the evening by far. We're already planning the same format for next year.", name: 'Steven D.', city: 'King of Prussia', event: 'Holiday Party', initials: 'SD' },
  { text: "Client appreciation dinner for eighteen senior clients at our King of Prussia campus. The private hibachi format elevated the event from a standard corporate dinner to something that genuinely impressed people who attend top-tier events regularly.", name: 'Nancy R.', city: 'King of Prussia', event: 'Client Appreciation Dinner', initials: 'NR' },
]

const PA_TESTIMONIALS_NEWTOWN_SQUARE = [
  { text: "Executive dinner for a visiting leadership team at our Newtown Square property. The private hibachi chef was professional from first contact to cleanup. Our international guests had never experienced teppanyaki in a private setting and the evening was a complete success.", name: 'Eric T.', city: 'Newtown Square', event: 'Executive Dinner', initials: 'ET' },
  { text: "Graduation party for our son at our Darby Creek estate. Forty family and friends, filet mignon and lobster tail all around, and a chef performance that had everyone at the table simultaneously. The most effortless celebration we've ever hosted.", name: 'Linda & Charles P.', city: 'Newtown Square', event: 'Graduation Celebration', initials: 'LP' },
  { text: "Birthday dinner for twenty-four on our Newtown Square patio. The chef's professionalism was matched only by the quality of the food. Delaware County hosts who want a truly elevated private dining experience — this is the right choice.", name: 'Sharon F.', city: 'Newtown Square', event: 'Birthday Dinner', initials: 'SF' },
]

// ─── Batch 2 Testimonials ─────────────────────────────────────────────────────
const PA_TESTIMONIALS_WEST_CHESTER = [
  { text: "West Chester University graduation dinner for thirty-two guests at our Chester County estate. The private hibachi chef handled everything — setup, the full teppanyaki performance, and complete cleanup. Our daughter's graduation weekend couldn't have had a better centerpiece event.", name: 'Karen & Bill S.', city: 'West Chester', event: 'Graduation Celebration', initials: 'KS' },
  { text: "Anniversary dinner for twenty-four on our West Chester property with Chester County farmland views behind us. The chef's performance matched the setting beautifully. Our guests were thoroughly impressed — and we didn't have to make a single reservation or arrange any logistics.", name: 'James & Patricia H.', city: 'West Chester', event: 'Anniversary Dinner', initials: 'JH' },
  { text: "Birthday party for thirty on our Gay Street-adjacent West Chester property. Excellent proteins, incredible knife work, and a chef who kept twenty children and ten adults equally engaged. Already referring everyone I know.", name: 'Megan C.', city: 'West Chester', event: 'Birthday Celebration', initials: 'MC' },
]

const PA_TESTIMONIALS_MALVERN = [
  { text: "Great Valley Corporate Center team dinner at our Malvern estate for twenty-two executives after a major Q4 close. The private hibachi chef was professional from first contact to cleanup. Every person at the table said it was the best corporate event they'd attended in years.", name: 'Gregory R.', city: 'Malvern', event: 'Corporate Team Dinner', initials: 'GR' },
  { text: "Malvern estate dinner for our son's college graduation — thirty guests, filet mignon and lobster tail all around, and a chef performance that had everyone at the table engaged from first flame to last plate. Effortless to host, extraordinary to experience.", name: 'Susan & David O.', city: 'Malvern', event: 'Graduation Celebration', initials: 'SO' },
  { text: "Chester Valley Trail-area birthday dinner for twenty-eight. The chef arrived perfectly on time, the proteins were premium, and the cleanup was complete. Malvern guests have high standards — and this private hibachi experience met every one of them.", name: 'Linda F.', city: 'Malvern', event: 'Birthday Celebration', initials: 'LF' },
]

const PA_TESTIMONIALS_MEDIA = [
  { text: "State Street-area birthday party for twenty-five in our Media backyard. The chef set up quickly, ran the full show, and left the yard spotless. My guests have been talking about it for two months. Delaware County backyard hibachi is a revelation.", name: 'Amy W.', city: 'Media', event: 'Birthday Party', initials: 'AW' },
  { text: "Twentieth anniversary dinner at our Media property — eighteen guests who all travel and dine well. The private hibachi chef set an entirely new bar for what a home dinner party can be. The intimacy of our backyard combined with the quality of the performance was something no restaurant experience could replicate.", name: 'Tom & Carol B.', city: 'Media', event: 'Anniversary Dinner', initials: 'TB' },
  { text: "Media graduation party for our daughter — thirty guests, all ages. The chef navigated every preference and dietary need without a single miss. The performance aspect brought the whole celebration together in a way that a catered spread simply can't. Already planning next summer's event.", name: 'Jennifer A.', city: 'Media', event: 'Graduation Party', initials: 'JA' },
]

const PA_TESTIMONIALS_BLUE_BELL = [
  { text: "Whitpain Township estate dinner for twenty-six after our son's college graduation. The chef's setup was flawless, the Wagyu beef was exceptional, and the entertainment genuinely surprised guests who expected a standard dinner party. Blue Bell hosts — if you haven't tried this, you're missing the best format in private entertaining.", name: 'Richard & Nancy P.', city: 'Blue Bell', event: 'Graduation Celebration', initials: 'RP' },
  { text: "Montgomery County corporate holiday event for thirty-two colleagues at our Blue Bell property. The private hibachi chef turned what could have been a routine company dinner into a night everyone referenced for months. Clean, professional, and a genuinely impressive format for client and team entertaining.", name: 'Christine M.', city: 'Blue Bell', event: 'Corporate Holiday Event', initials: 'CM' },
  { text: "Blue Bell birthday dinner for twenty — the intimate setting of our patio, the interactive performance, and the premium proteins together created an experience that none of our guests had encountered before. The chef was exceptional and the cleanup was complete.", name: 'Steven L.', city: 'Blue Bell', event: 'Birthday Dinner', initials: 'SL' },
]

const PA_TESTIMONIALS_LANCASTER = [
  { text: "Wedding weekend rehearsal dinner at our Lancaster farm property for forty-two guests who had traveled from eleven states. The private hibachi chef setup worked beautifully in our barn's outdoor entertaining space. Our international guests had never seen teppanyaki performed live — the evening became the weekend's most memorable moment.", name: 'Katherine & James N.', city: 'Lancaster', event: 'Wedding Rehearsal Dinner', initials: 'KN' },
  { text: "Family reunion at our Lancaster County farm for sixty-five family members ranging from eight to eighty-two. Two chefs, staggered servings, and a performance that had every generation at the table simultaneously. Lancaster farm venues and private hibachi are a natural combination we'll use every reunion from now on.", name: 'Robert H.', city: 'Lancaster', event: 'Family Reunion', initials: 'RH' },
  { text: "Corporate retreat dinner at a Lancaster County property for twenty-eight out-of-town visitors. The chef arrived fully equipped, required no venue prep, and delivered the kind of wow-factor experience that gave our retreat an unforgettable final-evening dinner. Already planning the same format for next year.", name: 'Diana C.', city: 'Lancaster', event: 'Corporate Retreat Dinner', initials: 'DC' },
]

// ─── Batch 3 Testimonials ─────────────────────────────────────────────────────
const PA_TESTIMONIALS_PITTSBURGH = [
  { text: "Shadyside backyard birthday dinner for thirty-two — the chef set up on our brick patio and turned what I was planning as a standard dinner party into a full interactive event. Pittsburgh guests have high expectations and every one of them was exceeded. Incredible performance, exceptional food.", name: 'Sarah K.', city: 'Pittsburgh', event: 'Birthday Celebration', initials: 'SK' },
  { text: "Squirrel Hill graduation dinner for twenty-eight guests after my son's Carnegie Mellon commencement. The chef's professionalism was matched by the quality of the proteins — Wagyu and lobster tail all around. CMU graduation weekend is competitive for restaurant reservations; private hibachi solved that problem completely.", name: 'Rachel & David G.', city: 'Pittsburgh', event: 'CMU Graduation Dinner', initials: 'RG' },
  { text: "Lawrenceville rooftop anniversary dinner for twenty guests. The chef navigated our urban outdoor space with complete ease. Pittsburgh's creative neighborhoods are some of the best private entertaining settings in the country and the hibachi format elevated that setting even further.", name: 'Mark T.', city: 'Pittsburgh', event: 'Anniversary Celebration', initials: 'MT' },
]

const PA_TESTIMONIALS_MT_LEBANON = [
  { text: "South Hills graduation party for thirty-five at our Mt. Lebanon home. The chef arrived with everything — no coordination required on my part — and delivered a performance that had guests of every age equally engaged. Beverly Road friends are already asking for the contact information.", name: 'Donna & Charles S.', city: 'Mt. Lebanon', event: 'Graduation Party', initials: 'DS' },
  { text: "Anniversary dinner for twenty-two at our Mt. Lebanon estate. We've celebrated at Pittsburgh's best restaurants over the years, and this private hibachi experience was the most memorable evening of them all. The intimacy, the food quality, and the performance were all exceptional.", name: 'Bill & Laura H.', city: 'Mt. Lebanon', event: 'Anniversary Dinner', initials: 'BH' },
  { text: "Birthday party for twenty-eight in our Mt. Lebanon backyard. The chef needed minimal space, handled everything from setup to cleanup, and delivered an evening that immediately became the standard against which all our other parties are measured.", name: 'Patricia M.', city: 'Mt. Lebanon', event: 'Birthday Celebration', initials: 'PM' },
]

const PA_TESTIMONIALS_WEXFORD = [
  { text: "North Allegheny graduation dinner at our Wexford home for thirty — a class our family has been hosting annually for four years, and this was the best version by far. The private hibachi chef format works perfectly for large groups who know each other well. Premium food, interactive entertainment, complete cleanup.", name: 'Jennifer & Scott B.', city: 'Wexford', event: 'Graduation Dinner', initials: 'JB' },
  { text: "Executive team dinner at our Wexford property for twenty-two. The Route 19 corridor has no shortage of corporate event options, and none of them created the team connection that this private hibachi dinner did. Already planning the holiday party in the same format.", name: 'Michael A.', city: 'Wexford', event: 'Executive Team Dinner', initials: 'MA' },
  { text: "Summer anniversary dinner for twenty-four at our Wexford estate. North Hills neighbors had been recommending private hibachi for two years — we finally tried it and instantly understood why. The chef was extraordinary and the evening was effortless.", name: 'Karen & Tom L.', city: 'Wexford', event: 'Anniversary Celebration', initials: 'KL' },
]

const PA_TESTIMONIALS_CRANBERRY_TWP = [
  { text: "Route 228 corporate team appreciation dinner for thirty-eight at our Cranberry Township event space. The private hibachi chef format transformed what was planned as a standard company dinner into a team-building experience nobody expected. Every colleague said it was the best company event they'd attended.", name: 'Ryan D.', city: 'Cranberry Township', event: 'Corporate Team Dinner', initials: 'RD' },
  { text: "Holiday party for thirty-two colleagues at our Cranberry Township property. The hibachi format solved the event-planning problem we always have — everyone at the same table, engaged at the same time, with food being made fresh in front of them. Perfect format for a team of our size.", name: 'Amanda C.', city: 'Cranberry Township', event: 'Holiday Party', initials: 'AC' },
  { text: "Graduation party at our Cranberry Township home for twenty-eight family members. North Pittsburgh graduation Saturday in May — restaurant reservations impossible, hibachi impossible to beat. The chef was professional and the evening matched the occasion perfectly.", name: 'Sandra & Doug F.', city: 'Cranberry Township', event: 'Graduation Party', initials: 'SF' },
]

const PA_TESTIMONIALS_FOX_CHAPEL = [
  { text: "Fox Chapel estate graduation dinner for forty guests on our Allegheny River property. The chef's presence on our stone terrace, the flame performance against the river backdrop, and the quality of the proteins were all extraordinary. Fox Chapel has high standards — this met every one of them.", name: 'Elizabeth & William C.', city: 'Fox Chapel', event: 'Estate Graduation Dinner', initials: 'EC' },
  { text: "Anniversary dinner for twenty-six at our Fox Chapel property. We've hosted elaborate dinner events for decades and this was genuinely the most impressive evening format we've found. The private hibachi chef created a night our guests referenced for months.", name: 'Margaret & Robert A.', city: 'Fox Chapel', event: 'Anniversary Estate Dinner', initials: 'MA' },
  { text: "Fox Chapel Golf Club-area birthday dinner for thirty. The chef required minimal setup space on our patio, handled everything, and delivered an interactive performance that elevated the entire evening. Premium proteins, exceptional service, spotless cleanup.", name: 'Thomas N.', city: 'Fox Chapel', event: 'Birthday Celebration', initials: 'TN' },
]

const PA_TESTIMONIALS_SEWICKLEY = [
  { text: "Ohio River estate dinner party for twenty-eight at our Sewickley property. The private hibachi chef worked beautifully in our waterfront garden terrace — the setting and the performance together created an evening that exceeded anything we could have found at any Pittsburgh restaurant. Absolutely exceptional.", name: 'Catherine & James R.', city: 'Sewickley', event: 'Estate Dinner Party', initials: 'CR' },
  { text: "Sewickley Heights anniversary celebration for twenty-four. Village neighbors had mentioned private hibachi for years — we finally booked it for our thirty-fifth anniversary and wish we'd done it sooner. The chef's professionalism and the quality of the food both exceeded our expectations.", name: 'Edward & Susan W.', city: 'Sewickley', event: '35th Anniversary Dinner', initials: 'EW' },
  { text: "Graduation dinner for thirty at our Sewickley home. Duquesne graduation weekend reservation windows were impossible — private hibachi solved that completely. Our graduating son and his guests had a genuinely extraordinary evening without anyone having to drive downtown.", name: 'Barbara M.', city: 'Sewickley', event: 'Graduation Dinner', initials: 'BM' },
]

// ─── Batch 4 Testimonials ─────────────────────────────────────────────────────
const PA_TESTIMONIALS_STROUDSBURG = [
  { text: "Bachelorette weekend at a Delaware Water Gap vacation rental — fourteen of us for the whole weekend, and the Saturday hibachi dinner was the highlight of the trip. The mobile chef drove to our cabin, set up on the deck, and handled everything. Every person in the group said it was the best bachelorette weekend element they'd ever experienced.", name: 'Olivia M.', city: 'Stroudsburg', event: 'Bachelorette Weekend Dinner', initials: 'OM' },
  { text: "Family reunion at a Stroudsburg-area vacation rental for thirty-five. We've done reunion dinners at local restaurants for years — private hibachi at the rental house was a completely different experience. The chef came to us, everyone ate together, and the evening created memories that a restaurant crowd can't replicate.", name: 'Paul & Linda K.', city: 'Stroudsburg', event: 'Family Reunion Dinner', initials: 'PK' },
  { text: "Graduation trip group of twenty-two at a East Stroudsburg area cabin. The mobile hibachi chef was exactly what our group needed — no driving, no restaurant logistics, and a dinner that became the trip's best memory. The Pocono cabin weekend plus private hibachi combination is something we'll repeat every year.", name: 'Alex T.', city: 'Stroudsburg', event: 'Graduation Group Dinner', initials: 'AT' },
]

const PA_TESTIMONIALS_MOUNT_POCONO = [
  { text: "Camelback-area cabin weekend for eighteen — the private hibachi chef was the Saturday night dinner and it was the highlight of the entire weekend. Self-contained propane setup, premium proteins, full show, and complete cleanup. The rental property looked exactly the same at checkout. Perfect format for any Pocono group weekend.", name: 'Jessica R.', city: 'Mount Pocono', event: 'Cabin Weekend Dinner', initials: 'JR' },
  { text: "Family group of twenty-six at a Pocono Raceway-area vacation rental. The mobile hibachi chef handled a group of adults and teenagers with equal skill. Great Wolf Lodge was nearby but the private dinner at the rental was the trip memory that everyone actually kept talking about.", name: 'Kevin & Sarah D.', city: 'Mount Pocono', event: 'Family Vacation Dinner', initials: 'KD' },
  { text: "Summer bachelorette weekend at a Mount Pocono cabin for sixteen. Every other element of the weekend was fun — the hibachi dinner Saturday night was extraordinary. The chef's performance in our outdoor deck space matched what we'd expect at a premium restaurant. Already planning next year's group trip around the same format.", name: 'Natalie W.', city: 'Mount Pocono', event: 'Bachelorette Dinner', initials: 'NW' },
]

const PA_TESTIMONIALS_HAWLEY = [
  { text: "Lake Wallenpaupack waterfront cabin birthday weekend for twenty-two. The hibachi chef drove directly to our rental property, set up on the dock-side deck, and delivered a dinner with the lake as the backdrop. The combination of that setting and the live cooking performance was something none of our guests had ever experienced. Already the most-referenced event of the year.", name: 'Christine & Mark H.', city: 'Hawley', event: 'Lakefront Birthday Weekend', initials: 'CH' },
  { text: "Wayne County family reunion at our Hawley lake property for thirty-eight — the group ranged from six to seventy-eight years old and the chef kept every generation at the table engaged. The lakefront setting and the hibachi performance together created exactly the reunion memory we'd hoped for.", name: 'George & Margaret L.', city: 'Hawley', event: 'Family Reunion Dinner', initials: 'GL' },
  { text: "Bachelorette weekend at a Lake Wallenpaupack vacation rental for fourteen. We booked the hibachi chef for Saturday night dinner after seeing photos from a friend's Pocono trip — it was even better than described. The chef brought everything, the deck setup was perfect, and cleanup was complete. Zero effort for the host.", name: 'Emma S.', city: 'Hawley', event: 'Bachelorette Weekend Dinner', initials: 'ES' },
]

const PA_TESTIMONIALS_HERSHEY = [
  { text: "Penn State Health residency completion dinner at our Hershey estate for twenty-eight colleagues and families. The private hibachi chef handled a sophisticated group with complete professionalism. Hershey's medical community gathers for milestone events regularly — none of them have matched this evening for pure enjoyment.", name: 'Dr. Rebecca A.', city: 'Hershey', event: 'Medical Milestone Dinner', initials: 'RA' },
  { text: "Hershey-area vacation rental birthday weekend for twenty. The chef drove to our property, set up on the patio, and delivered a premium teppanyaki experience with Hersheypark's lights visible in the distance. A Hershey weekend plus private hibachi is genuinely the best combination for a milestone birthday trip.", name: 'Marcus & Julie T.', city: 'Hershey', event: 'Birthday Weekend Dinner', initials: 'MT' },
  { text: "Corporate retreat final-evening dinner at a Hershey resort property for thirty-two. The mobile hibachi chef required no venue prep, handled every dietary need in our group, and delivered a performance that made the event's closing dinner genuinely memorable. We've already scheduled the same format for next year's retreat.", name: 'Patricia N.', city: 'Hershey', event: 'Corporate Retreat Dinner', initials: 'PN' },
]

function _getPaTestimonials(citySlug) {
  const map = {
    'philadelphia':       PA_TESTIMONIALS_PHILADELPHIA,
    'wayne':              PA_TESTIMONIALS_WAYNE,
    'bryn-mawr':          PA_TESTIMONIALS_BRYN_MAWR,
    'king-of-prussia':    PA_TESTIMONIALS_KING_OF_PRUSSIA,
    'newtown-square':     PA_TESTIMONIALS_NEWTOWN_SQUARE,
    'west-chester':       PA_TESTIMONIALS_WEST_CHESTER,
    'malvern':            PA_TESTIMONIALS_MALVERN,
    'media':              PA_TESTIMONIALS_MEDIA,
    'blue-bell':          PA_TESTIMONIALS_BLUE_BELL,
    'lancaster':          PA_TESTIMONIALS_LANCASTER,
    'pittsburgh':         PA_TESTIMONIALS_PITTSBURGH,
    'mt-lebanon':         PA_TESTIMONIALS_MT_LEBANON,
    'wexford':            PA_TESTIMONIALS_WEXFORD,
    'cranberry-township': PA_TESTIMONIALS_CRANBERRY_TWP,
    'fox-chapel':         PA_TESTIMONIALS_FOX_CHAPEL,
    'sewickley':          PA_TESTIMONIALS_SEWICKLEY,
    'stroudsburg':        PA_TESTIMONIALS_STROUDSBURG,
    'mount-pocono':       PA_TESTIMONIALS_MOUNT_POCONO,
    'hawley':             PA_TESTIMONIALS_HAWLEY,
    'hershey':            PA_TESTIMONIALS_HERSHEY,
  }
  return map[citySlug] ?? PA_TESTIMONIALS_WAYNE
}

// ─── Batch 1 City-Specific Intros (indices 422–426) ───────────────────────────
export const PA_CITY_INTROS = [
  // 0 — Philadelphia (index 422)
  {
    headline: () => `Philadelphia's Private Hibachi Chef Experience`,
    opening:  () => `Philadelphia is a city of neighborhoods — each with its own identity, pride, and social calendar. Rittenhouse Square's sophisticated townhome gatherings. Society Hill's historic courtyard dinners. Fishtown's creative rooftop celebrations. Chestnut Hill's classic estate entertaining. University City's academic milestone dinners. Northern Liberties' community block parties. Philadelphia knows how to celebrate, and it does so on its own terms.`,
    middle:   () => `Our private hibachi chef service brings the full teppanyaki experience to your Philadelphia location — wherever that is. A Rittenhouse Square rooftop. A Society Hill courtyard. A Fishtown backyard. A Chestnut Hill estate lawn. Our chef arrives with everything needed: a self-contained propane grill, hand-selected proteins, all ingredients, and the showmanship to turn your gathering into a genuine event. Setup, cooking, and complete cleanup — all handled.`,
    closing:  () => `Philadelphia has one of the most sophisticated food cultures in America. A private hibachi chef brings the performance element that no restaurant dinner can match — an interactive, personalized experience where the chef is there for your table and your guests alone. Whether it's a birthday dinner in Old City, a corporate team event in University City, or a graduation party in Chestnut Hill, we make it unforgettable.`,
  },
  // 1 — Wayne (index 423)
  {
    headline: () => `Wayne's Premier Private Hibachi Experience — At Home on the Main Line`,
    opening:  () => `Wayne, Pennsylvania is the Main Line's most recognizable address — home to the Devon Horse Show, the Radnor Hunt country estates, the Wayne Hotel's celebrated grounds, and some of the most architecturally significant private properties in the Northeast. Chanticleer Garden's rolling landscape and the Chester Valley Trail's quiet lanes set the character of a community that has always entertained with intention.`,
    middle:   () => `Our private hibachi chef service was designed for exactly the Wayne hosting experience. Whether you're hosting a graduation party on your estate lawn, a corporate dinner for executives from the Route 202 corridor, or an anniversary celebration on a stone patio that has hosted generations of family gatherings, our chef arrives fully equipped and handles every detail from arrival to cleanup.`,
    closing:  () => `Wayne hosts understand the difference between a gathering and an event. Our private hibachi chef turns the backyard, the patio, or the estate lawn into a performance stage — premium proteins, the live teppanyaki show, and a chef whose singular focus is making your evening exceptional. From the Devon Horse Show community to the Radnor Township estates, we serve the Main Line at the level it deserves.`,
  },
  // 2 — Bryn Mawr (index 424)
  {
    headline: () => `Bryn Mawr Private Hibachi Chef — Main Line Elegance at Home`,
    opening:  () => `Bryn Mawr, Pennsylvania carries the weight of one of the Main Line's most distinguished histories — home to Bryn Mawr College's Gothic revival campus, Haverford College's bucolic grounds nearby, the classic stone homes lining the Lancaster Avenue corridor, and a neighborhood identity built on academic excellence and quiet, confident sophistication. When Bryn Mawr hosts celebrate, they do it with care and quality.`,
    middle:   () => `Our private hibachi chef service brings a celebration experience that honors Bryn Mawr's character. Whether it's a Bryn Mawr College graduation weekend dinner for twenty-five family members who've traveled from across the country, an anniversary celebration for a couple whose Lancaster Avenue home has been the gathering place for decades, or a milestone birthday party where the guest list expects quality that matches the setting, our chef delivers the full teppanyaki experience with professionalism and precision.`,
    closing:  () => `Bryn Mawr's community is defined by high standards — in academics, in architecture, in the way it gathers to celebrate. Our private hibachi chefs are experienced serving exactly this kind of occasion, bringing premium ingredients, live entertainment, and the level of service that leaves every Bryn Mawr host confident they made the right choice.`,
  },
  // 3 — King of Prussia (index 425)
  {
    headline: () => `King of Prussia Hibachi Catering — Corporate Events and Private Dinners`,
    opening:  () => `King of Prussia sits at the intersection of three of Pennsylvania's most powerful economic forces: the Route 202 technology and pharmaceutical corridor with dozens of Fortune 500 regional offices, Valley Forge National Historical Park's commanding presence that shapes the entire region's character, and King of Prussia Mall's gravitational pull that makes this one of the most trafficked commercial intersections on the East Coast. Valley Forge Casino Resort adds a convention and hospitality layer that drives year-round corporate event demand.`,
    middle:   () => `Our private hibachi catering service is built for the King of Prussia corporate calendar. Team appreciation dinners after a major project delivery. Holiday parties where forty colleagues need an experience that isn't a banquet hall. Client entertainment evenings where the impression you make on your guests is the point. Our chef arrives at your property or venue — corporate campus, private home, rented outdoor space — with everything needed and manages start to finish.`,
    closing:  () => `King of Prussia's corporate community has discovered that private hibachi catering transforms the company event from an obligation into an experience. The interactive cooking performance, the shared table, the premium food — these create team cohesion and client impressions that outlast any restaurant private dining room. Whether it's twenty people or eighty, we build the event around your group.`,
  },
  // 4 — Newtown Square (index 426)
  {
    headline: () => `Newtown Square Private Hibachi Chef — Delaware County Luxury at Home`,
    opening:  () => `Newtown Square, Pennsylvania has become one of Delaware County's most coveted residential addresses — home to SAP Americas' North American headquarters, the rolling Darby Creek Township estates, Ridley Creek State Park's pristine natural corridor, and a residential community defined by the professionals and executives who chose Newtown Square for its combination of suburban tranquility, community quality, and easy Philadelphia access.`,
    middle:   () => `Our private hibachi chef service is a natural fit for Newtown Square's private entertaining culture. Whether it's an executive dinner for a visiting leadership team at your Newtown Square property, a graduation party on your Darby Creek estate, or a milestone birthday celebration where the guest list expects quality that matches the setting, our chef arrives fully equipped and manages every detail from setup to cleanup.`,
    closing:  () => `Newtown Square's residents who've discovered private hibachi consistently tell us it's the most effortless and impressive entertaining they've ever done. You provide the backyard or patio — we bring the chef, the premium proteins, the full teppanyaki performance, and complete cleanup. The result is an evening your guests reference for months afterward.`,
  },
  // 5 — West Chester (index 427)
  {
    headline: () => `West Chester Private Hibachi at Home — Chester County's Celebration Chef`,
    opening:  () => `West Chester, Pennsylvania is Chester County's social and institutional heart — home to West Chester University's thriving campus, the classic Gay Street district with its restaurants and boutiques, the Chester County Courthouse corridor that anchors the region's civic identity, and Longwood Gardens' world-class horticultural grounds just a few miles south. When West Chester hosts celebrate, they do it with Chester County character and quality.`,
    middle:   () => `Our private hibachi chef service delivers that same quality directly to your West Chester home or property. Whether it's a graduation dinner for a West Chester University grad with thirty family members who've traveled from across the country, an anniversary celebration on your Chester County estate, or a neighborhood birthday party for guests who expect a premium experience, our chef arrives with everything and handles every detail.`,
    closing:  () => `West Chester hosts who've tried private hibachi consistently say it's the most memorable entertaining format they've found — and the most effortless to host. We bring the chef, the premium proteins, the live teppanyaki performance, and complete cleanup. Your backyard or patio becomes the setting; we create the event.`,
  },
  // 6 — Malvern (index 428)
  {
    headline: () => `Malvern Private Hibachi at Home — Great Valley's Premium Dinner Experience`,
    opening:  () => `Malvern, Pennsylvania sits at one of Chester County's most dynamic intersections — the Great Valley Corporate Center with dozens of regional headquarters along Routes 29 and 202, the Chester Valley Trail corridor that defines the community's residential character, and a Paoli Main Line heritage that has shaped Malvern's identity as a place that blends corporate energy with Chester County quiet elegance. The community hosts corporate executives, biotech professionals, and established families who all entertain with intention.`,
    middle:   () => `Our private hibachi chef service is built for the Malvern entertaining occasion — the corporate team dinner after a major project close, the executive dinner for visiting leadership, the graduation party for a child whose college achievement deserves a celebration that matches the setting, or the milestone anniversary where the guest list expects quality. Our chef arrives at your Malvern property with all equipment, premium proteins, and the performance skill to make your evening extraordinary.`,
    closing:  () => `Malvern executives and homeowners who've booked private hibachi tell us it consistently outperforms any restaurant event they've planned — at a fraction of the coordination effort. We handle setup, cooking, and complete cleanup. You host; we create the experience.`,
  },
  // 7 — Media (index 429)
  {
    headline: () => `Backyard Hibachi in Media, PA — Delaware County's Best Private Chef Experience`,
    opening:  () => `Media, Pennsylvania has earned its reputation as one of Delaware County's most beloved communities — anchored by State Street's walkable boutique district, the Media Theatre's historic arts presence, Ridley Creek State Park's natural beauty just minutes away, and a neighborhood identity built on community pride, independent spirit, and the kind of local engagement that makes Media feel like a small town inside a major metro. When Media hosts celebrate, they do it in the backyard.`,
    middle:   () => `Our backyard hibachi chef service was designed for exactly the Media experience. You provide the backyard — we bring a private chef, a self-contained propane teppan grill, hand-selected proteins, all ingredients, and the live teppanyaki performance that turns your outdoor space into a private dining stage. Birthday parties, anniversary dinners, neighborhood gatherings, graduation celebrations — we serve every occasion for every Media neighborhood.`,
    closing:  () => `Media hosts have discovered that private hibachi is the perfect format for a community that loves to gather. Everyone eats together, the performance creates a shared experience that guests talk about for months, and the host doesn't spend the evening cooking. State Street brunch the morning after, backyard hibachi the night before — that's a Media weekend.`,
  },
  // 8 — Blue Bell (index 430)
  {
    headline: () => `Blue Bell Private Hibachi at Home — Montgomery County's Premier Chef Experience`,
    opening:  () => `Blue Bell, Pennsylvania is one of Montgomery County's most established residential communities — home to Whitpain Township's large-lot luxury estates, the Welsh Road corporate corridor with regional headquarters for major firms, the Gwynedd-Mercy University community, and a residential character defined by Montgomery County's most accomplished professional families. Blue Bell hosts entertain with the quiet confidence of a community that has always set the standard.`,
    middle:   () => `Our private hibachi chef service delivers to that standard. Whether you're hosting a graduation party for a child whose achievement deserves something extraordinary, a corporate dinner for executives who have attended every format of premium event, or a milestone anniversary on your Whitpain Township property, our chef arrives with a self-contained setup, premium proteins, and the teppanyaki expertise to create an evening that matches your property's character.`,
    closing:  () => `Blue Bell homeowners who've tried private hibachi are consistently struck by how effortless it is to host and how long the evening stays in conversation. We bring the chef, the food, and the performance — you provide the patio and the people. The result exceeds what any restaurant private room or catered event can deliver.`,
  },
  // 9 — Lancaster (index 431)
  {
    headline: () => `Lancaster Hibachi Catering — Private Chef for Farm Venues, Estates & Reunions`,
    opening:  () => `Lancaster, Pennsylvania is unlike anywhere else in the country — a city where Amish Country tradition meets a thriving farm-to-table food culture, where Kitchen Kettle Village's artisan market energy meets Rock Lititz's world-class entertainment production industry, and where Central Market's 300-year heritage meets a growing destination appeal that draws visitors and event planners from across the region. Lancaster hosts events with a character that no other Pennsylvania city can match.`,
    middle:   () => `Our private hibachi catering service was built for the Lancaster event landscape. Wedding weekend rehearsal dinners at farm venues where fifty guests have traveled from across the country. Family reunion gatherings at Lancaster County rural properties. Corporate retreat closing dinners at agritourism venues where the setting is half the experience. Our mobile chef arrives at your property or venue with a fully self-contained setup and handles everything from first flame to final cleanup.`,
    closing:  () => `Lancaster's event community has discovered that private hibachi catering is the ideal complement to the region's farm venue and destination property landscape. We bring the live-cooking experience to your location — no restaurant reservation required, no driving needed, and a chef whose sole focus is your table and your guests. Whatever brings people to Lancaster, our hibachi chef makes the evening the memory they bring home.`,
  },
  // 10 — Pittsburgh (index 432)
  {
    headline: () => `Pittsburgh Private Hibachi Chef — Private Teppanyaki for Every Neighborhood`,
    opening:  () => `Pittsburgh is a city of neighborhoods — each with its own identity, pride, and history. Shadyside's tree-lined streets and Walnut Street dining corridor. Squirrel Hill's multigenerational community vitality. Lawrenceville's creative district energy. Mt. Washington's dramatic hillside views. The North Shore's stadium-adjacent development. Sewickley's Ohio River waterfront elegance. Fox Chapel's Allegheny River estate character. Pittsburgh hosts don't see neighborhoods as interchangeable — and neither do we.`,
    middle:   () => `Our private hibachi chef service covers every Pittsburgh neighborhood and suburb — bringing the full teppanyaki experience to your backyard, deck, rooftop, or outdoor event space with everything included. A self-contained propane grill, premium proteins sourced for each event, all ingredients, and a chef who has trained for exactly this kind of intimate private performance. Carnegie Mellon graduation dinners. Duquesne University milestone celebrations. Pittsburgh corporate team events. Steel City family reunions.`,
    closing:  () => `Pittsburgh has undergone one of the most remarkable urban transformations in American city history, and that energy shows up in how the city entertains. Hosts here want experiences that match the city's ambition — and private hibachi delivers exactly that. Restaurant-quality food, live performance, and an evening that your Pittsburgh guests reference for months.`,
  },
  // 11 — Mt. Lebanon (index 433)
  {
    headline: () => `Mt. Lebanon Hibachi at Home — South Hills Private Chef Experience`,
    opening:  () => `Mt. Lebanon, Pennsylvania is the South Hills' flagship community — home to Beverly Road's celebrated shopping district, Bird Park's community greenspace, Mt. Lebanon High School's strong academic tradition, and a residential character built by generations of South Hills families who chose Mt. Lebanon as the place they wanted to raise their children and build their lives. When Mt. Lebanon hosts celebrate, they do it at home with pride.`,
    middle:   () => `Our private hibachi chef service is a natural fit for Mt. Lebanon's home-entertaining culture. Whether it's a graduation party for a Mt. Lebanon High grad with thirty family members on the backyard patio, an anniversary dinner for a couple whose home has hosted dozens of these gatherings, or a birthday celebration where the guest list expects a premium experience, our chef arrives fully equipped and manages every detail.`,
    closing:  () => `Mt. Lebanon homeowners who've discovered private hibachi consistently say it's the best format they've found for large-group home entertaining. The chef does the work, the food is exceptional, and every guest leaves having experienced something they've never encountered at a home dinner party before. South Hills entertaining doesn't get better than this.`,
  },
  // 12 — Wexford (index 434)
  {
    headline: () => `Wexford Private Hibachi at Home — North Hills Premium Dinner Experience`,
    opening:  () => `Wexford, Pennsylvania has emerged as one of Pittsburgh's most sought-after North Hills addresses — home to the North Allegheny School District's acclaimed academic community, the Route 19 corridor lined with executive homes and corporate campuses, the Cranberry Township border community that has grown into one of Allegheny County's most dynamic residential markets, and a professional community that includes some of Pittsburgh's most accomplished executives, physicians, and entrepreneurs.`,
    middle:   () => `Our private hibachi chef service delivers directly to Wexford's high standards. North Hills executive team dinners for visiting leadership. North Allegheny graduation parties for families whose children have achieved something worth celebrating with thirty guests and premium proteins. Anniversary dinners on Route 19 estates where the setting already sets a high bar and the evening needs to match it. Our chef arrives with everything and handles every detail from setup to cleanup.`,
    closing:  () => `Wexford hosts who've tried private hibachi consistently report the same experience: effortless to arrange, extraordinary to live through, and immediately the standard against which all future dinner events are measured. We bring the chef, the food, and the performance — you bring the guest list.`,
  },
  // 13 — Cranberry Township (index 435)
  {
    headline: () => `Cranberry Township Hibachi Catering — North Pittsburgh Corporate & Private Events`,
    opening:  () => `Cranberry Township, Pennsylvania is Pittsburgh's most dynamic North Hills growth corridor — home to the Route 228 corporate business park that has attracted regional headquarters for dozens of major firms, the CONSOL Energy-adjacent commercial district, the North Pittsburgh Trail network, and a rapidly growing executive residential community that has made Cranberry one of Butler County's most prestigious addresses over the past decade.`,
    middle:   () => `Our private hibachi catering service was designed for the Cranberry Township corporate calendar. Team appreciation dinners after a major contract win or product delivery. Holiday parties for thirty or forty colleagues who want something genuinely different from the standard banquet hall format. Client entertainment evenings at a corporate campus or private property where the impression you make on visitors matters. Our chef arrives at your property or venue with everything needed and manages start to finish.`,
    closing:  () => `Cranberry Township's corporate community has found that private hibachi catering is uniquely effective at creating team connection and client impression. The live cooking performance, the shared table, the premium food — these elements work together to make the evening memorable in a way that a restaurant private room simply cannot replicate. We scale to any group size from twenty to eighty.`,
  },
  // 14 — Fox Chapel (index 436)
  {
    headline: () => `Fox Chapel Private Hibachi Chef — Allegheny River Estate Dining`,
    opening:  () => `Fox Chapel, Pennsylvania is one of Pittsburgh's most prestigious addresses — characterized by the Allegheny River's wooded shoreline, the Fox Chapel Golf Club's historic grounds, the O'Hara Township community's architectural traditions, the Dorseyville Road estate corridor, and a residential identity built by generations of Pittsburgh's most accomplished families. Fox Chapel hosts entertain with the understated confidence of a community that has never needed to announce its standards.`,
    middle:   () => `Our private hibachi chef service is the right format for Fox Chapel's private entertaining tradition. Whether it's a graduation dinner for forty guests on a stone terrace above the Allegheny River, an anniversary celebration where the guest list includes Pittsburgh's most discerning hosts, or a milestone birthday party where the setting demands an experience that matches it, our chef arrives fully equipped and manages every detail from arrival to cleanup.`,
    closing:  () => `Fox Chapel hosts who've experienced private hibachi tell us it's the only entertaining format they've found that lives up to the character of their properties. The chef's performance, the premium proteins, and the intimacy of a private table together create an evening that no Pittsburgh restaurant can replicate. Your Fox Chapel estate is the setting — we create the event.`,
  },
  // 15 — Sewickley (index 437)
  {
    headline: () => `Sewickley Private Hibachi Chef — Ohio River Village Estate Dining`,
    opening:  () => `Sewickley, Pennsylvania is one of Pittsburgh's most beloved villages — characterized by the Ohio River's waterfront estate properties, Sewickley Heights Golf Club's historic grounds, the village's celebrated boutique district along Beaver Street, the Edgeworth-area residential estates, and a community identity built by some of Pittsburgh's most distinguished families. Sewickley entertains with the warmth and confidence of a village that knows exactly who it is.`,
    middle:   () => `Our private hibachi chef service is a natural fit for Sewickley's estate entertaining tradition. Whether it's a dinner party for twenty-eight on an Ohio River waterfront property, a milestone anniversary celebration for a couple whose Sewickley estate has hosted generations of family gatherings, or a graduation dinner where the guest list spans three generations and expects an experience that honors the occasion, our chef handles every detail.`,
    closing:  () => `Sewickley hosts who've discovered private hibachi consistently describe it as the format they've been looking for — premium food, live entertainment, intimate setting, and complete cleanup by a professional chef. The Ohio River as your backdrop, our teppanyaki performance as your evening's centerpiece. That's a Sewickley dinner party done right.`,
  },
  // 16 — Stroudsburg (index 438)
  {
    headline: () => `Stroudsburg Mobile Hibachi Chef — Private Teppanyaki for Your Pocono Vacation Rental`,
    opening:  () => `Stroudsburg, Pennsylvania is the Pocono Mountains' gateway city — the primary access point for the vacation rental and cabin weekend market that stretches from Delaware Water Gap National Recreation Area through the Monroe County lake communities and up into the broader Pocono Mountain corridor. The East Stroudsburg University community adds a local hosting market alongside the massive weekend visitor population that makes the Stroudsburg area one of Pennsylvania's most active private event destinations.`,
    middle:   () => `Our mobile hibachi chef service was designed specifically for the Stroudsburg vacation rental occasion. Bachelorette weekends where fifteen guests want a Saturday dinner that becomes the trip's highlight. Family reunion groups where forty relatives are all staying at the same rental and need a dinner that keeps everyone at the same table. Graduation trip groups where twenty-five friends want a celebration that feels genuinely special. Our chef drives to your rental property, brings a fully self-contained propane setup, and handles everything from cooking to cleanup.`,
    closing:  () => `Stroudsburg-area vacation rental groups who've booked a private hibachi chef consistently say the same thing: it was the best decision of the trip. No restaurant reservations to coordinate, no driving after the show, no splitting up the group — just a private chef at your property and an evening that everyone travels home talking about.`,
  },
  // 17 — Mount Pocono (index 439)
  {
    headline: () => `Mount Pocono Mobile Hibachi Chef — Private Teppanyaki for Cabin Weekends`,
    opening:  () => `Mount Pocono, Pennsylvania sits at the center of the Pocono Mountains' most concentrated vacation attraction corridor — Camelback Mountain Resort, Kalahari Resort, Great Wolf Lodge, Pocono Raceway, Big Boulder, and Jack Frost are all within the immediate drive radius that makes Mount Pocono the logical base for Pocono Mountain vacation weekends. The result is one of Pennsylvania's most active vacation rental markets — and one of the best settings in the northeast for a private hibachi cabin dinner.`,
    middle:   () => `Our mobile hibachi chef travels to your Mount Pocono vacation rental or cabin property with a fully self-contained propane teppan grill — no gas hookup required at any rental property. We bring all ingredients, sauces, and the full teppanyaki performance for your group. Cabin weekend bachelorette parties, Kalahari resort-adjacent family gatherings, Camelback Mountain ski weekend closing dinners, summer lake weekend celebrations — we serve every Pocono occasion.`,
    closing:  () => `Pocono vacation groups who've experienced private hibachi at a Mount Pocono cabin know that it transforms the trip from a good getaway into an unforgettable one. The dinner becomes the trip memory that defines the weekend — not the resort, not the outdoor activities, but the evening when everyone sat together at the same table and a chef cooked an extraordinary meal in front of them.`,
  },
  // 18 — Hawley (index 440)
  {
    headline: () => `Hawley Backyard Hibachi — Private Chef for Lake Wallenpaupack Cabin Weekends`,
    opening:  () => `Hawley, Pennsylvania is Wayne County's lake country anchor — home to Lake Wallenpaupack's stunning 5,700-acre shoreline, the Roebling Bridge's historic character, the Hawley Silk Mill district's growing arts community, and Paupack Hills Golf Club's residential estate corridor. Lake Wallenpaupack's cabin and vacation rental community draws groups from the New York, New Jersey, and Philadelphia metro areas who come specifically for the combination of natural beauty and property-based entertaining that only a lake-country rental can provide.`,
    middle:   () => `Our private hibachi chef service was built for the Lake Wallenpaupack occasion. Family reunion weekends where forty relatives share a lakefront property for three days and need a centerpiece dinner. Bachelorette weekends where the dock and the deck and the private chef all work together to create the getaway's best memory. Birthday celebrations where the waterfront setting deserves an experience that lives up to it. Our chef drives to your Hawley-area property, brings a fully self-contained setup, and leaves the rental exactly as found.`,
    closing:  () => `Lake Wallenpaupack cabin groups who've booked a private hibachi chef consistently say it was the dinner they'd been missing — the one that brought everybody to the same table and made the whole weekend feel like a real celebration. The lake is the setting; the hibachi chef makes it an event.`,
  },
  // 19 — Hershey (index 441)
  {
    headline: () => `Hershey Mobile Hibachi Chef — Private Events Near Hersheypark & Penn State Health`,
    opening:  () => `Hershey, Pennsylvania occupies a unique position in the state's event landscape — simultaneously a world-class resort destination anchored by Hersheypark and Hotel Hershey, a medical education hub centered on Penn State Health Milton S. Hershey Medical Center, and a Central Pennsylvania community with its own residential base of medical professionals, resort industry employees, and established Dauphin County families. These three markets create year-round demand for private events that only a mobile hibachi chef can serve across all three.`,
    middle:   () => `Our mobile hibachi chef service travels to your Hershey-area property, vacation rental, or venue with a fully self-contained propane setup — no gas hookup required. Penn State Health graduation milestone dinners for residency completions and fellowship achievements. Hersheypark-adjacent vacation rental birthday weekend dinners for groups who want the resort experience plus a private chef. Corporate retreat closing events at resort-area properties. Our chef handles everything from arrival to cleanup.`,
    closing:  () => `Hershey hosts across all three of the community's market segments — resort visitors, medical community, and local residents — consistently tell us that private hibachi is the format that brings their event together. We bring the chef, the premium proteins, the live performance, and complete cleanup. Whatever brings your group to Hershey, we make the dinner the evening's best moment.`,
  },
]

// ─── Batch 1 City-Specific Closings (indices 422–426) ────────────────────────
export const PA_CITY_CLOSINGS = [
  // 0 — Philadelphia
  { headline: () => 'Book Your Philadelphia Private Hibachi Chef Today', sub: () => 'Serving Philadelphia, Rittenhouse Square, Chestnut Hill, Fishtown, Society Hill, and all Philadelphia neighborhoods.', urgency: 'Philadelphia summer and graduation season dates fill fast — reserve early.' },
  // 1 — Wayne
  { headline: () => 'Reserve Your Wayne Private Hibachi Experience', sub: () => 'Serving Wayne, Bryn Mawr, Malvern, Newtown Square, and the full Main Line corridor.', urgency: 'Main Line graduation season and holiday dates book weeks ahead — secure your date now.' },
  // 2 — Bryn Mawr
  { headline: () => 'Book Your Bryn Mawr Private Hibachi Chef', sub: () => 'Serving Bryn Mawr, Wayne, Malvern, Newtown Square, and the full Main Line corridor.', urgency: 'Bryn Mawr College graduation weekend dates are our most limited of the year — book early.' },
  // 3 — King of Prussia
  { headline: () => 'Book Hibachi Catering for Your King of Prussia Event', sub: () => 'Serving King of Prussia, Valley Forge area, Wayne, Blue Bell, and the Route 202 corporate corridor.', urgency: 'KOP corporate holiday events and graduation season book weeks ahead — reserve now.' },
  // 4 — Newtown Square
  { headline: () => 'Reserve Your Newtown Square Private Hibachi Experience', sub: () => 'Serving Newtown Square, Wayne, Bryn Mawr, Media, Philadelphia, and all Delaware County communities.', urgency: 'Newtown Square graduation and holiday events book quickly — reserve your date early.' },
  // 5 — West Chester
  { headline: () => 'Book Your West Chester Private Hibachi Event', sub: () => 'Serving West Chester, Malvern, Media, Newtown Square, and all Chester County communities.', urgency: 'West Chester University graduation season and holiday dates book weeks ahead — reserve now.' },
  // 6 — Malvern
  { headline: () => 'Reserve Your Malvern Private Hibachi Experience', sub: () => 'Serving Malvern, Wayne, Newtown Square, West Chester, and the Great Valley corporate corridor.', urgency: 'Malvern graduation season and corporate holiday events fill fast — secure your date now.' },
  // 7 — Media
  { headline: () => 'Book Your Media Backyard Hibachi Chef', sub: () => 'Serving Media, West Chester, Newtown Square, Philadelphia, and all Delaware County communities.', urgency: 'Media graduation season and summer events book fast — reserve your date early.' },
  // 8 — Blue Bell
  { headline: () => 'Reserve Your Blue Bell Private Hibachi Event', sub: () => 'Serving Blue Bell, King of Prussia, Malvern, West Chester, and all Montgomery County communities.', urgency: 'Blue Bell graduation and holiday dates book weeks ahead — secure your date now.' },
  // 9 — Lancaster
  { headline: () => 'Book Hibachi Catering for Your Lancaster Event', sub: () => 'Serving Lancaster, Hershey, Philadelphia area, and all Lancaster County and Central PA communities.', urgency: 'Lancaster wedding season and farm venue events book 4–6 weeks ahead — reserve early.' },
  // 10 — Pittsburgh
  { headline: () => 'Book Your Pittsburgh Private Hibachi Chef Today', sub: () => 'Serving all Pittsburgh neighborhoods — Shadyside, Squirrel Hill, Lawrenceville, Fox Chapel, Sewickley, Mt. Lebanon, Wexford, Cranberry Township, and all surrounding communities.', urgency: 'Pittsburgh graduation season and holiday dates book weeks ahead — reserve early.' },
  // 11 — Mt. Lebanon
  { headline: () => 'Reserve Your Mt. Lebanon Private Hibachi Experience', sub: () => 'Serving Mt. Lebanon, Pittsburgh, Sewickley, Fox Chapel, Wexford, and all South Hills communities.', urgency: 'Mt. Lebanon graduation season and holiday events fill fast — secure your date now.' },
  // 12 — Wexford
  { headline: () => 'Book Your Wexford Private Hibachi Chef', sub: () => 'Serving Wexford, Cranberry Township, Pittsburgh, Fox Chapel, Mt. Lebanon, and all North Hills communities.', urgency: 'North Hills graduation season and corporate holiday events book weeks ahead — reserve now.' },
  // 13 — Cranberry Township
  { headline: () => 'Book Hibachi Catering for Your Cranberry Township Event', sub: () => 'Serving Cranberry Township, Wexford, Pittsburgh North, Fox Chapel, Mt. Lebanon, and surrounding communities.', urgency: 'Cranberry Township corporate holiday events and graduation season book fast — reserve early.' },
  // 14 — Fox Chapel
  { headline: () => 'Reserve Your Fox Chapel Private Hibachi Experience', sub: () => 'Serving Fox Chapel, Sewickley, Pittsburgh, Mt. Lebanon, Wexford, and all Allegheny County estate communities.', urgency: 'Fox Chapel graduation season and holiday estate events fill weeks ahead — secure your date now.' },
  // 15 — Sewickley
  { headline: () => 'Book Your Sewickley Private Hibachi Chef', sub: () => 'Serving Sewickley, Fox Chapel, Pittsburgh, Mt. Lebanon, Wexford, and the Ohio River waterfront community.', urgency: 'Sewickley graduation season and holiday estate dinners book fast — reserve your date early.' },
  // 16 — Stroudsburg
  { headline: () => 'Book Your Stroudsburg-Area Mobile Hibachi Chef', sub: () => 'Serving Stroudsburg, East Stroudsburg, Delaware Water Gap, Monroe County vacation rentals, and the full Pocono Mountain cabin corridor.', urgency: 'Pocono summer bachelorette and cabin weekend dates fill fast — reserve your date now.' },
  // 17 — Mount Pocono
  { headline: () => 'Reserve Your Mount Pocono Mobile Hibachi Chef', sub: () => 'Serving Mount Pocono, Camelback area, Stroudsburg, Hawley, and all Pocono Mountain vacation rental properties.', urgency: 'Pocono summer and fall cabin weekend dates book weeks ahead — secure your date now.' },
  // 18 — Hawley
  { headline: () => 'Book Your Hawley Lake Hibachi Chef', sub: () => 'Serving Hawley, Lake Wallenpaupack, Wayne County, Mount Pocono, and all Pocono lake and cabin communities.', urgency: 'Lake Wallenpaupack summer cabin weekend dates are our most limited — reserve early.' },
  // 19 — Hershey
  { headline: () => 'Book Your Hershey Mobile Hibachi Chef', sub: () => 'Serving Hershey, Lancaster, Harrisburg area, and all Central Pennsylvania communities.', urgency: 'Hershey resort and Penn State Health graduation events book fast — reserve your date now.' },
]

// ─── Generic Intro Variants (indices 416–421) ─────────────────────────────────
export const PA_INTRO_VARIANTS = [
  // 416 — T0 Main Line Luxury
  {
    headline: (city) => `Private Hibachi Chef Service in ${city}, Pennsylvania`,
    opening:  (city) => `The Main Line is one of the most storied residential addresses in America, and ${city} sits at the heart of its luxury corridor. When you're ready to host an event that matches your setting, our private hibachi chef service delivers a restaurant-quality teppanyaki experience directly to your home.`,
    middle:   (city) => `Our chef arrives at your ${city} property with all equipment, premium proteins, and the showmanship to turn your backyard, patio, or estate into a private dining stage. From graduation parties and corporate dinners to anniversary celebrations and holiday gatherings, we handle every detail from setup to cleanup.`,
    closing:  (city) => `Hosting on the Main Line means setting a high bar. Our private hibachi chefs are experienced serving discerning guests in premium settings — bringing culinary excellence and live entertainment to every event we take on in ${city} and surrounding communities.`,
  },
  // 417 — T1 Philadelphia Metro
  {
    headline: (city) => `Private Hibachi Chef in ${city} — We Come to You`,
    opening:  (city) => `Philadelphia and its surrounding communities have one of the most diverse and sophisticated private entertaining cultures in the country. In ${city}, that means hosts who expect a premium experience — and our private hibachi chef service was built to deliver one. We come to your location, fully equipped, and handle every detail.`,
    middle:   (city) => `Whether you're hosting in an urban neighborhood, a suburban backyard, or a corporate event space, our chef brings the full teppanyaki performance to your table. Premium proteins, interactive cooking, knife skills, and flame tricks — the complete experience, designed specifically for your group in ${city}.`,
    closing:  (city) => `Philadelphia-area hosts who've experienced private hibachi consistently say it's the best format they've found for entertaining any size group. The chef does the work, the food is exceptional, and the evening creates memories that outlast any restaurant experience. Book your ${city} event today.`,
  },
  // 418 — T2 Philadelphia Suburbs
  {
    headline: (city) => `Private Hibachi at Home in ${city}, Pennsylvania`,
    opening:  (city) => `The Philadelphia suburban corridor has some of the most vibrant and intentional hosting communities in the Mid-Atlantic — and ${city} is a perfect example. When a restaurant reservation simply isn't the right format for your occasion, our private hibachi chef service brings the entire dining experience to your backyard.`,
    middle:   (city) => `Our chef arrives at your ${city} home with a self-contained propane teppan grill, hand-selected proteins, all ingredients, and the performance skills to create a memorable live-cooking experience for your guests. Graduation parties, birthday dinners, anniversary celebrations, neighborhood gatherings — we serve every occasion.`,
    closing:  (city) => `${city} hosts who've tried private hibachi tell us the same thing: it's the most effortless entertaining format they've found. We handle the food, the cooking, the performance, and the cleanup. You just gather your guests and enjoy the evening.`,
  },
  // 419 — T3 Pittsburgh Metro
  {
    headline: (city) => `Private Hibachi Chef in ${city} — Pittsburgh's Private Dining Experience`,
    opening:  (city) => `Pittsburgh has undergone one of the most remarkable urban transformations of any American city, and ${city} reflects that energy — whether through Pittsburgh's world-class institutions, the neighborhood communities built across decades of steel-city tradition, or the executive suburbs that have grown around the metro's corporate renaissance. A private hibachi chef is the right format for an occasion worth celebrating.`,
    middle:   (city) => `Our chef travels to your ${city} location — backyard, deck, rooftop, or outdoor event space — with a full teppanyaki setup including propane grill, premium proteins, all ingredients, and complete cleanup. The interactive performance is the centerpiece, and the food is restaurant-quality from first flame to final plate.`,
    closing:  (city) => `Pittsburgh-area hosts who've tried private hibachi consistently say it's the most memorable dinner format they've hosted. The chef's performance creates a shared experience that a catered event or restaurant reservation can't replicate — and we manage every detail so the host can be a guest at their own event.`,
  },
  // 420 — T4 Pocono Mountains
  {
    headline: (city) => `Mobile Hibachi Chef in ${city} — The Pocono Experience`,
    opening:  (city) => `The Pocono Mountains vacation rental weekend has become one of Pennsylvania's most beloved group travel traditions — cabin weekends, lakefront house parties, bachelorette getaways, family reunion trips, and graduation celebrations that pull large groups into one beautiful location for a few days. In ${city} and the surrounding Pocono corridor, our mobile hibachi chef service turns the vacation rental dinner into the highlight of the trip.`,
    middle:   (city) => `Our chef travels to your ${city} vacation rental or cabin property with a fully self-contained propane teppan grill — no gas hookup needed. We handle setup, cook the full teppanyaki menu for your group, and pack out completely when dinner is done, leaving your rental property exactly as we found it.`,
    closing:  (city) => `Pocono vacation groups who've booked a private hibachi chef consistently rate the dinner as the best memory of the trip. The performance, the shared table, and the premium food create the kind of experience that becomes a group reference point for years. Book your ${city} event before your dates fill.`,
  },
  // 421 — T5 Central PA
  {
    headline: (city) => `Private Hibachi Chef Service in ${city}, Pennsylvania`,
    opening:  (city) => `Central Pennsylvania draws visitors and residents alike for distinctly different reasons — Amish Country's farm stay tradition, Hersheypark's world-class resort energy, Penn State Health's medical community, and Lancaster's thriving farm-to-table dining culture. In ${city}, our private hibachi chef service brings the full teppanyaki experience to your property, venue, or vacation rental, regardless of property type.`,
    middle:   (city) => `Our chef arrives at your ${city} location with a self-contained propane setup, premium proteins, all ingredients, and the performance skills to create a restaurant-quality teppanyaki experience for your group. Wedding weekend dinners, family reunions, milestone celebrations, and corporate retreats are all within our range.`,
    closing:  (city) => `Central PA hosts who've experienced private hibachi tell us the format works perfectly for the destination and milestone occasions that bring people together in ${city}. We handle everything — you focus on the people and the evening.`,
  },
]

// ─── Generic Closing Variants (indices 416–421) ───────────────────────────────
export const PA_CLOSING_VARIANTS = [
  // 416 — T0 Main Line Luxury
  { headline: (city) => `Book Your ${city} Private Hibachi Experience Today`, sub: (city) => `Serving ${city} and the full Main Line corridor — Wayne, Bryn Mawr, Malvern, Newtown Square, and all Chester and Delaware County communities.`, urgency: 'Main Line graduation season and holiday dates fill weeks ahead. Reserve your date now.' },
  // 417 — T1 Philadelphia Metro
  { headline: (city) => `Reserve Your Philadelphia-Area Hibachi Event`,         sub: (city) => `Serving ${city} and all of Greater Philadelphia — every neighborhood, every suburb, and every occasion.`,                                                            urgency: 'Philadelphia graduation season and summer event dates book quickly. Reserve early.' },
  // 418 — T2 Philadelphia Suburbs
  { headline: (city) => `Book Your ${city} Private Hibachi Event`,              sub: (city) => `Serving ${city} and all Philadelphia suburbs — West Chester, Media, Blue Bell, Malvern, Newtown Square, and surrounding communities.`,                                   urgency: 'Chester County graduation season dates fill fast. Secure your date now.' },
  // 419 — T3 Pittsburgh Metro
  { headline: (city) => `Reserve Your Pittsburgh-Area Hibachi Event`,           sub: (city) => `Serving ${city} and all of the Pittsburgh metro — Shadyside, Squirrel Hill, Fox Chapel, Sewickley, Mt. Lebanon, Wexford, Cranberry Township, and all surrounding communities.`, urgency: 'Pittsburgh graduation season and holiday dates book weeks ahead. Reserve early.' },
  // 420 — T4 Pocono Mountains
  { headline: (city) => `Book Your Pocono Mobile Hibachi Chef`,                 sub: (city) => `Serving ${city} and the full Pocono Mountains — Stroudsburg, Mount Pocono, Hawley, Lake Wallenpaupack, Camelback area, and all Monroe and Wayne County vacation rental properties.`, urgency: 'Pocono summer cabin weekends and bachelorette dates book weeks ahead. Reserve early.' },
  // 421 — T5 Central PA
  { headline: (city) => `Reserve Your ${city} Area Hibachi Event`,              sub: (city) => `Serving ${city} and all of Central Pennsylvania — Lancaster, Hershey, Harrisburg area, Pennsylvania Dutch Country, and surrounding communities.`,                           urgency: 'Lancaster wedding season and Hershey resort dates fill fast. Reserve your date now.' },
]

// ─── Exported Functions ───────────────────────────────────────────────────────
export function getPaCityData(citySlug, cityName) {
  const major = PA_MAJOR_CITIES[citySlug]
  if (!major) return null

  const { v, profileIdx, nearby } = major
  const displayName = PA_CITY_DISPLAY_NAMES[citySlug] ?? cityName
  const heroH1Prefix = profileIdx != null ? PA_PROFILE_H1_PREFIXES[profileIdx] : PA_THEME_H1_PREFIXES[v]

  const uniqueIntroVariant   = profileIdx != null ? 422 + profileIdx : 416 + v
  const uniqueClosingVariant = profileIdx != null ? 422 + profileIdx : 416 + v
  const uniqueWhyUsVariant   = 416 + v

  const heroSubtitle     = PA_HERO_SUBTITLES[citySlug] ?? `${heroH1Prefix} ${displayName}, PA — private hibachi chef for all occasions.`
  const localHighlights  = PA_LOCAL_HIGHLIGHTS[citySlug] ?? []
  const featuredOccasions = PA_FEATURED_OCCASIONS[citySlug] ?? PA_OCCASIONS_LUXURY
  const faqSet           = PA_FAQ_SETS[citySlug] ?? PA_FAQ_MAIN_LINE
  const testimonials     = _getPaTestimonials(citySlug)
  const nearbyCities     = nearby ?? PA_NEARBY_MAJOR[v]
  const metaOverride     = PA_META_OVERRIDES[citySlug] ?? {}

  return {
    cityName: displayName,
    stateName: 'Pennsylvania',
    stateAbbr: 'PA',
    stateSlug: 'pennsylvania',
    variant: v % 3,
    heroImage: PA_IMAGE_THEMES[v],
    heroSubtitle,
    nearbyCities,
    nearbyMajorCities: PA_NEARBY_MAJOR[v],
    localHighlights,
    featuredOccasions,
    faqSet,
    testimonials,
    uniqueIntroVariant,
    uniqueWhyUsVariant,
    uniqueClosingVariant,
    heroH1Prefix,
    ...metaOverride,
  }
}

// ── Blog posts (3 theme slots, v%3 dispatch) ─────────────────────────────────
// Slot 0: Main Line T0 + Pittsburgh T3
// Slot 1: Philadelphia Metro T1 + Pocono T4
// Slot 2: Philadelphia Suburbs T2 + Central PA T5
const PA_BLOG_POSTS = [
  [
    { slug: 'hibachi-at-home-pennsylvania-guide',     title: 'Private Hibachi Chef in Pennsylvania: The Complete Guide to All Six Markets',        excerpt: 'From Main Line estate dinners to Pocono cabin weekends and Lancaster farm venues — how private hibachi works across all six Pennsylvania markets.',     date: '2026-07-26' },
    { slug: 'private-hibachi-lancaster-wedding-weekend', title: 'Private Hibachi Chef for a Lancaster County Wedding Weekend',                      excerpt: "Lancaster's farm venues, Amish Country estates, and destination wedding properties make it Pennsylvania's top market for private hibachi rehearsal dinners.", date: '2026-07-26' },
    { slug: 'hibachi-catering-corporate-events',      title: 'Why Hibachi Catering Is the Best Choice for Corporate Events',                        excerpt: 'Main Line and Pittsburgh corporate teams — why a private hibachi chef beats every company dinner format.',                                             date: '2025-03-15' },
  ],
  [
    { slug: 'hibachi-at-home-pennsylvania-guide',     title: 'Private Hibachi Chef in Pennsylvania: The Complete Guide to All Six Markets',        excerpt: 'From Philadelphia rooftops to Pocono cabin weekends and Lancaster farm venues — how private hibachi works across Pennsylvania.',                     date: '2026-07-26' },
    { slug: 'private-hibachi-pocono-mountains-cabin', title: 'Private Hibachi at a Pocono Mountain Cabin: Your Vacation Rental Weekend Guide',     excerpt: 'Bachelorette weekends, family reunions, and graduation cabin trips in the Pocono Mountains — how a mobile hibachi chef works at any vacation rental.', date: '2026-07-26' },
    { slug: 'hibachi-bachelorette-party',             title: 'Private Hibachi for Bachelorette Parties: The Ultimate Guide',                        excerpt: 'Why Pocono cabin weekends are choosing private hibachi as the Saturday night dinner — and how to book for any rental property.',                   date: '2025-02-10' },
  ],
  [
    { slug: 'hibachi-at-home-pennsylvania-guide',     title: 'Private Hibachi Chef in Pennsylvania: The Complete Guide to All Six Markets',        excerpt: 'From West Chester graduations to Lancaster farm venues and Pocono cabin weekends — how private hibachi works across Pennsylvania.',                   date: '2026-07-26' },
    { slug: 'private-hibachi-lancaster-wedding-weekend', title: 'Private Hibachi Chef for a Lancaster County Wedding Weekend',                      excerpt: "Lancaster's farm venues and Amish Country estates make it Pennsylvania's top market for private hibachi rehearsal dinners and wedding weekend events.",  date: '2026-07-26' },
    { slug: 'private-hibachi-pocono-mountains-cabin', title: 'Private Hibachi at a Pocono Mountain Cabin: Your Vacation Rental Weekend Guide',     excerpt: 'Pocono cabin weekends, Lake Wallenpaupack family reunions, and graduation trips — how a mobile hibachi chef works at any vacation rental property.',  date: '2026-07-26' },
  ],
]

export function getPaBlogPosts(variant, count) {
  return PA_BLOG_POSTS[variant % PA_BLOG_POSTS.length].slice(0, count)
}
export function getPaHowItWorks()             { return PA_HOW_IT_WORKS }
export function getPaSectionVariant(citySlug) {
  const v = PA_MAJOR_CITIES[citySlug]?.v ?? 0
  return PA_SECTION_VARIANTS[v]
}
export function getPaCityImage(citySlug)      { return PA_CITY_IMAGE_MAP[citySlug] ?? null }
export function getPaSupportImages(citySlug)  {
  if (PA_CITY_SUPPORT_IMAGES[citySlug]) return PA_CITY_SUPPORT_IMAGES[citySlug]
  const v = PA_MAJOR_CITIES[citySlug]?.v ?? 0
  return PA_SUPPORT_FALLBACKS[v]
}
