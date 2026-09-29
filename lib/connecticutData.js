// Connecticut — 13 cities, 3 batches
// Batch 1 (profileIdx 0–4):  Greenwich, Darien, New Canaan, Westport, Stamford
// Batch 2 (profileIdx 5–9):  Norwalk, Fairfield, Trumbull, West Hartford, Hartford
// Batch 3 (profileIdx 10–12): Glastonbury, New Haven, Madison
//
// CT_INTRO_VARIANTS indices 775–780 (6 generics, one per theme)
// CT_CITY_INTROS indices 781–793 (13 city-specific)
// uniqueIntroVariant = 781 + profileIdx

// ─── H1 prefixes by profileIdx ────────────────────────────────────────────────
const CT_PROFILE_H1_PREFIXES = [
  'Hibachi at Home in',        // 0: Greenwich
  'Hibachi at Home in',        // 1: Darien
  'Hibachi at Home in',        // 2: New Canaan
  'Private Hibachi Chef in',   // 3: Westport
  'Private Hibachi Chef in',   // 4: Stamford
  'Hibachi Catering in',       // 5: Norwalk
  'Hibachi at Home in',        // 6: Fairfield
  'Mobile Hibachi in',         // 7: Trumbull
  'Hibachi at Home in',        // 8: West Hartford
  'Backyard Hibachi Party in', // 9: Hartford
  'Mobile Hibachi in',         // 10: Glastonbury
  'Hibachi Catering in',       // 11: New Haven
  'Private Hibachi Chef in',   // 12: Madison
]

// ─── Theme hero images ────────────────────────────────────────────────────────
const CT_THEME_HEROES = [
  '/pics/hibachi-private-chef-1.jpg', // T0: Gold Coast Luxury
  '/pics/hero-1.jpg',                 // T1: Fairfield County Corporate
  '/pics/hibachi-at-home.jpg',        // T2: Fairfield County Suburban
  '/pics/hibachi-photo-2.jpg',        // T3: Hartford Metro
  '/pics/hibachi-event.jpg',          // T4: Greater New Haven
  '/pics/hero-3.jpg',                 // T5: Connecticut Shoreline
]

// ─── Hero subtitles ───────────────────────────────────────────────────────────
const CT_HERO_SUBTITLES = [
  (city) => `Private teppanyaki chef · ${city}, CT`,
  (city) => `Private hibachi at home · ${city}, CT`,
  (city) => `Hibachi chef to your door · ${city}, CT`,
  (city) => `Private hibachi event · ${city}, CT`,
  (city) => `Teppanyaki at home · ${city}, CT`,
  (city) => `Shoreline hibachi dining · ${city}, CT`,
]

// ─── Cities registry ─────────────────────────────────────────────────────────
const CT_MAJOR_CITIES = {
  // Batch 1
  'greenwich':   { v: 0, profileIdx: 0,  nearby: ['Darien', 'Stamford', 'New Canaan'] },
  'darien':      { v: 0, profileIdx: 1,  nearby: ['Greenwich', 'Stamford', 'Norwalk'] },
  'new-canaan':  { v: 0, profileIdx: 2,  nearby: ['Darien', 'Stamford', 'Westport'] },
  'westport':    { v: 1, profileIdx: 3,  nearby: ['Norwalk', 'Fairfield', 'New Canaan'] },
  'stamford':    { v: 1, profileIdx: 4,  nearby: ['Greenwich', 'Darien', 'Norwalk'] },
  // Batch 2
  'norwalk':     { v: 2, profileIdx: 5,  nearby: ['Stamford', 'Westport', 'Fairfield'] },
  'fairfield':   { v: 2, profileIdx: 6,  nearby: ['Westport', 'Trumbull', 'Norwalk'] },
  'trumbull':    { v: 2, profileIdx: 7,  nearby: ['Fairfield', 'Norwalk', 'Shelton'] },
  'west-hartford': { v: 3, profileIdx: 8, nearby: ['Hartford', 'Glastonbury', 'Simsbury'] },
  'hartford':    { v: 3, profileIdx: 9,  nearby: ['West Hartford', 'Glastonbury', 'Newington'] },
  // Batch 3
  'glastonbury': { v: 3, profileIdx: 10, nearby: ['Hartford', 'West Hartford', 'South Windsor'] },
  'new-haven':   { v: 4, profileIdx: 11, nearby: ['Milford', 'West Haven', 'Orange'] },
  'madison':     { v: 5, profileIdx: 12, nearby: ['Guilford', 'Clinton', 'Old Saybrook'] },
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
const CT_TESTIMONIALS = {
  'greenwich': [
    {
      text:     'We hosted my wife\'s milestone birthday at our Greenwich estate — 26 guests from New York, Boston, and London. The private hibachi chef set up on the back terrace overlooking the garden and performed the full teppanyaki show. Every guest said it was the finest private dining experience they\'d had outside a Michelin restaurant. We\'ve already booked a second event.',
      name:     'Thomas W.',
      city:     'Greenwich, CT',
      event:    'Milestone Birthday Dinner',
      initials: 'TW',
    },
    {
      text:     'Corporate client dinner at our Greenwich home — 18 guests, half of them international. The private hibachi chef brought everything, set up on the flagstone patio, and delivered a performance that impressed people who\'ve dined at the best restaurants in Tokyo and New York. It became the most talked-about client event we\'ve hosted in years.',
      name:     'Caroline S.',
      city:     'Greenwich, CT',
      event:    'Corporate Client Dinner',
      initials: 'CS',
    },
    {
      text:     'My daughter graduated from Greenwich Academy and we had 22 family members from three countries. Instead of fighting for a reservation in the city, we brought the experience home. The private hibachi chef performed on the pool deck, everyone was together, and my daughter said it was exactly what she\'d imagined. Extraordinary evening.',
      name:     'Richard L.',
      city:     'Greenwich, CT',
      event:    'Graduation Celebration',
      initials: 'RL',
    },
  ],
  'darien': [
    {
      text:     'Anniversary dinner at our Darien home — 20 of our closest friends. We wanted something more personal than a restaurant and more polished than a typical backyard party. The private hibachi chef set up on the covered patio, performed for the whole group, and left our backyard exactly as they found it. Our guests still talk about it months later.',
      name:     'Alexandra M.',
      city:     'Darien, CT',
      event:    'Anniversary Dinner Party',
      initials: 'AM',
    },
    {
      text:     'My son graduated from Darien High and we had 24 family members visiting from Chicago, Atlanta, and the UK. Finding a private room anywhere near Darien on graduation weekend is nearly impossible. Having the hibachi chef come to us solved everything — better food, better setting, no driving after dinner.',
      name:     'Jonathan F.',
      city:     'Darien, CT',
      event:    'High School Graduation',
      initials: 'JF',
    },
    {
      text:     'Neighborhood dinner party — 16 couples from our street. We\'d done the usual caterer and restaurant options. Private hibachi was something completely different. The chef performed for everyone at once, every guest ordered exactly what they wanted, and the evening had an energy no dinner party we\'ve hosted has matched.',
      name:     'Helen B.',
      city:     'Darien, CT',
      event:    'Neighborhood Dinner Party',
      initials: 'HB',
    },
  ],
  'new-canaan': [
    {
      text:     'We hosted a fundraiser dinner at our New Canaan home — 30 guests for a charity we support. The private hibachi format was a complete departure from the standard benefit dinner. The chef performed for the whole group, the evening had genuine entertainment value, and our donors said it was the most memorable fundraiser they\'d attended.',
      name:     'Elizabeth K.',
      city:     'New Canaan, CT',
      event:    'Charity Dinner Event',
      initials: 'EK',
    },
    {
      text:     'My daughter\'s Sweet 16 at our New Canaan home — 22 guests. She wanted something unique that her friends hadn\'t experienced before. The private hibachi chef was perfect — live performance, everyone seated together, personalized orders. Her friends are still talking about it. Best party decision we\'ve made.',
      name:     'David P.',
      city:     'New Canaan, CT',
      event:    'Sweet 16 Party',
      initials: 'DP',
    },
    {
      text:     'Holiday client dinner at our New Canaan home — 16 clients, mostly finance and hedge fund people who\'ve attended every kind of corporate event. Private hibachi gave them something they\'d genuinely never experienced in a private setting. The chef\'s performance was immaculate. Several clients asked for the contact information on the spot.',
      name:     'Michael C.',
      city:     'New Canaan, CT',
      event:    'Client Holiday Dinner',
      initials: 'MC',
    },
  ],
  'westport': [
    {
      text:     'Film premiere after-party at our Westport home — 24 guests from the production and film community. We needed a dinner format that matched the creative energy of the evening. Private hibachi was exactly right — theatrical, interactive, high quality. The chef performed with the same professionalism as the evening deserved.',
      name:     'Sarah V.',
      city:     'Westport, CT',
      event:    'Creative Industry Gathering',
      initials: 'SV',
    },
    {
      text:     'My husband\'s 50th birthday at our Westport home — 28 guests from New York, Boston, and LA. He\'d been to every kind of restaurant and catered event. Private hibachi was genuinely new to him — the performance, the intimacy, the fact that it was in our own backyard. He said it was the best birthday dinner of his life.',
      name:     'Jennifer R.',
      city:     'Westport, CT',
      event:    '50th Birthday Party',
      initials: 'JR',
    },
    {
      text:     'End-of-year team dinner at my Westport home — 18 people from our media company. We\'d done every Manhattan restaurant option. Having the chef come to us changed the dynamic entirely — everyone was relaxed, the performance was a genuine shared experience, and we ate better than we would have at any restaurant. This is our team dinner format going forward.',
      name:     'Marcus T.',
      city:     'Westport, CT',
      event:    'Team Year-End Dinner',
      initials: 'MT',
    },
  ],
  'stamford': [
    {
      text:     'Corporate team dinner at a colleague\'s Stamford home — 22 people from our hedge fund. We\'d exhausted every private dining room in Stamford and the city. Private hibachi at home was a completely different class of event — the performance, the personalized orders, the fact that nobody had to commute home afterward. Our firm uses this format now.',
      name:     'Andrew H.',
      city:     'Stamford, CT',
      event:    'Hedge Fund Team Dinner',
      initials: 'AH',
    },
    {
      text:     'My daughter graduated from King School and we had 20 family members from New York, New Jersey, and Connecticut. Every restaurant in Stamford that could handle a private group was fully booked. Having the chef come to our home was better in every way — private, no time pressure, and the performance was something my family will never forget.',
      name:     'Patricia G.',
      city:     'Stamford, CT',
      event:    'Graduation Dinner',
      initials: 'PG',
    },
    {
      text:     'Client appreciation dinner at my Stamford penthouse — 14 guests from our tech company\'s major accounts. We needed to deliver something memorable. Private hibachi was perfect: the chef performed in our dining room with the grill station set up near the window overlooking downtown. Every client said it was unlike anything they\'d experienced.',
      name:     'Robert N.',
      city:     'Stamford, CT',
      event:    'Client Appreciation Dinner',
      initials: 'RN',
    },
  ],
  'norwalk': [
    {
      text:     'We hosted my daughter\'s graduation party at our East Norwalk home — 22 family members from New York, New Jersey, and upstate. Brien McMahon graduation weekend is impossible for restaurant reservations. Having the chef come to us solved everything — better food, no driving, and my daughter said it was the best night of her life.',
      name:     'Karen M.',
      city:     'Norwalk, CT',
      event:    'High School Graduation Party',
      initials: 'KM',
    },
    {
      text:     'Neighborhood dinner party in SoNo — 18 friends from the arts community. We wanted something more original than a restaurant and more polished than a cookout. The private hibachi chef set up in the shared backyard and performed for the whole group. Our neighbors are still talking about it two months later.',
      name:     'Daniel F.',
      city:     'Norwalk, CT',
      event:    'Neighborhood Dinner Party',
      initials: 'DF',
    },
    {
      text:     'My husband\'s 50th birthday at our Rowayton home — 20 guests. We wanted something genuinely different from any dinner we\'d hosted before. The private hibachi chef was exactly that — the performance had everyone engaged from the first minute, and the food was outstanding. Best birthday party we\'ve thrown.',
      name:     'Lisa T.',
      city:     'Norwalk, CT',
      event:    '50th Birthday Party',
      initials: 'LT',
    },
  ],
  'fairfield': [
    {
      text:     'My son graduated from Fairfield Warde and we had 26 family members visiting from four states. Getting a private room anywhere in Fairfield County for graduation weekend is a real challenge. The hibachi chef came to our home, set up on the back deck, and performed for everyone at once. My son said it was the best graduation dinner he could have imagined.',
      name:     'Susan B.',
      city:     'Fairfield, CT',
      event:    'Graduation Party',
      initials: 'SB',
    },
    {
      text:     'Anniversary dinner at our Greenfield Hill home — 16 of our closest friends. We\'d done every restaurant option over the years. Private hibachi was something completely different — a performance, a meal, and an experience all in one. Our friends are already asking if we\'ll do it again for the next milestone.',
      name:     'James R.',
      city:     'Fairfield, CT',
      event:    'Anniversary Dinner Party',
      initials: 'JR',
    },
    {
      text:     'End-of-season team dinner for my daughter\'s travel soccer team — 18 players and parents at our Fairfield home. We needed something the kids and parents would both enjoy. The hibachi performance kept everyone at the table and engaged the whole time. The kids especially loved the fire and the chef\'s tricks.',
      name:     'Christine L.',
      city:     'Fairfield, CT',
      event:    'Team End-of-Season Dinner',
      initials: 'CL',
    },
  ],
  'trumbull': [
    {
      text:     'My daughter graduated from Trumbull High and we had 24 family members from across the northeast. We\'d looked at every restaurant option and nothing could handle the group privately. The hibachi chef came to our backyard, set up on the patio, and performed for everyone at once. Our family is already planning a holiday version.',
      name:     'Michael P.',
      city:     'Trumbull, CT',
      event:    'Graduation Party',
      initials: 'MP',
    },
    {
      text:     'Family reunion at our Trumbull home — 28 people from multiple states. We needed a format that could seat and entertain everyone at once. The mobile hibachi chef set up on the back lawn, performed the full show, and cooked individual orders for every guest. Best family reunion we\'ve hosted in years.',
      name:     'Nancy W.',
      city:     'Trumbull, CT',
      event:    'Family Reunion Dinner',
      initials: 'NW',
    },
    {
      text:     'Backyard birthday party for my husband — 20 guests. We wanted something beyond the typical cookout. Private hibachi was exactly right: the performance drew everyone together, the food was excellent, and cleanup was handled by the chef. Our guests had never experienced teppanyaki in a private setting before.',
      name:     'Angela S.',
      city:     'Trumbull, CT',
      event:    'Birthday Party',
      initials: 'AS',
    },
  ],
  'west-hartford': [
    {
      text:     'My daughter graduated from Conard and we had 22 family members from Boston, New York, and Ohio. Finding a private dinner option in West Hartford for a group that size on graduation weekend is nearly impossible. The hibachi chef came to our home on Outlook Avenue, set up on the back patio, and performed for the whole family. She said it was the best night of her senior year.',
      name:     'Patricia C.',
      city:     'West Hartford, CT',
      event:    'Graduation Dinner Party',
      initials: 'PC',
    },
    {
      text:     'My husband\'s 50th birthday — 18 close friends at our West Hartford home. We\'d done dinners at every good restaurant in the area. Private hibachi was genuinely new to everyone. The chef performed on our covered patio, the food was excellent, and the evening had an energy that no restaurant dinner has matched.',
      name:     'Rachel H.',
      city:     'West Hartford, CT',
      event:    '50th Birthday Celebration',
      initials: 'RH',
    },
    {
      text:     'Insurance company team dinner at a colleague\'s home in West Hartford — 16 people. We wanted something different from our standard team dinners. Private hibachi gave us a live performance and an excellent meal in a genuinely private setting. Our team voted it the best work event we\'d organized. We\'re doing it again this year.',
      name:     'Thomas K.',
      city:     'West Hartford, CT',
      event:    'Corporate Team Dinner',
      initials: 'TK',
    },
  ],
  'hartford': [
    {
      text:     'Backyard party for my son\'s graduation from Trinity — 20 family members at our Asylum Hill home. We wanted to celebrate in our own space without the restaurant stress. The hibachi chef came to us, set up in the backyard, and performed the full show. My son said it was exactly the celebration he\'d hoped for.',
      name:     'Gloria M.',
      city:     'Hartford, CT',
      event:    'Graduation Celebration',
      initials: 'GM',
    },
    {
      text:     'State agency team celebration at a colleague\'s Hartford home — 18 people. Budget constraints meant we couldn\'t do a restaurant private room. Private hibachi at home was actually better than any restaurant we could have booked — everyone was together, the performance was engaging, and individual orders meant no dietary complaints.',
      name:     'Robert A.',
      city:     'Hartford, CT',
      event:    'Government Team Celebration',
      initials: 'RA',
    },
    {
      text:     'My mother\'s 70th birthday backyard party — 24 family members at our Blue Hills neighborhood home. We wanted something festive and memorable without driving everyone to a restaurant. The hibachi chef set up in the backyard and performed for the whole family at once. My mother said it was the most special birthday she\'d ever had.',
      name:     'Carmen V.',
      city:     'Hartford, CT',
      event:    '70th Birthday Party',
      initials: 'CV',
    },
  ],
  'glastonbury': [
    {
      text:     'My daughter graduated from Glastonbury High and we had 24 family members from Boston, New York, Philadelphia, and Maine. We wanted to celebrate at home rather than fight for a restaurant reservation. The mobile hibachi chef came to us, set up on the back patio, and performed for the whole family. Our guests said it was unlike anything they\'d experienced.',
      name:     'Elizabeth N.',
      city:     'Glastonbury, CT',
      event:    'Graduation Party',
      initials: 'EN',
    },
    {
      text:     'Milestone anniversary dinner at our Glastonbury home — 20 of our closest friends. We\'d been to every restaurant in the Hartford area over 25 years. Private hibachi gave us something completely new — a performance in our own backyard, excellent food, and an evening that felt like a genuine occasion. Our friends still talk about it.',
      name:     'David O.',
      city:     'Glastonbury, CT',
      event:    'Anniversary Dinner',
      initials: 'DO',
    },
    {
      text:     'Healthcare team celebration at a colleague\'s Glastonbury home — 16 people from our practice. We needed something that worked for a mixed group of doctors, nurses, and admin staff. Private hibachi was perfect — everyone watched the same performance, ordered individually, and the evening had a warmth that no restaurant team dinner has matched.',
      name:     'Stephanie L.',
      city:     'Glastonbury, CT',
      event:    'Healthcare Team Dinner',
      initials: 'SL',
    },
  ],
  'new-haven': [
    {
      text:     'My son graduated from Yale Law and we had 26 family members flying in from Chicago, Seattle, and London. Every New Haven restaurant with a private room was booked solid for commencement weekend. We rented a house near East Rock, the hibachi chef came to us, and performed for the whole family. My son said it was the best meal of his Yale years.',
      name:     'Margaret W.',
      city:     'New Haven, CT',
      event:    'Yale Law School Graduation',
      initials: 'MW',
    },
    {
      text:     'Yale School of Medicine graduation party at a rental property near campus — 22 family members from four countries. We couldn\'t secure a single restaurant reservation for a group that size in May. The hibachi format at the rental house worked perfectly. The chef brought everything, performed for the whole group, and left the property immaculate.',
      name:     'Dr. Alan K.',
      city:     'New Haven, CT',
      event:    'Medical School Graduation',
      initials: 'AK',
    },
    {
      text:     'Yale Alumni Association chapter dinner at a New Haven home — 18 graduates from the class of \'99 reunion. We wanted something more memorable than a restaurant. Private hibachi gave us a shared experience — the performance, the meal, the conversation — that made the reunion dinner genuinely special. Already planning a repeat for the next milestone year.',
      name:     'Jennifer C.',
      city:     'New Haven, CT',
      event:    'Yale Alumni Reunion Dinner',
      initials: 'JC',
    },
  ],
  'madison': [
    {
      text:     'Fourth of July at our Madison beach house — 24 family members from four states. We wanted something better than a cookout for the holiday. The private hibachi chef set up on the deck overlooking the yard, performed the full show, and cooked individual orders for every guest while the kids watched with their mouths open. Best Fourth of July we\'ve hosted.',
      name:     'William H.',
      city:     'Madison, CT',
      event:    'Fourth of July Celebration',
      initials: 'WH',
    },
    {
      text:     'End-of-summer family reunion at our Madison shoreline home — 28 family members, ages 8 to 78. We needed a format that worked for every age. Private hibachi was perfect — the performance engaged the kids, the food satisfied the adults, and the chef\'s energy carried the whole evening. Our family asked us to do it again next summer immediately.',
      name:     'Barbara T.',
      city:     'Madison, CT',
      event:    'Family Reunion Dinner',
      initials: 'BT',
    },
    {
      text:     'My wife\'s milestone birthday at our Madison summer home — 20 of her closest friends from New York and Connecticut. She wanted something special that took full advantage of the shoreline setting. The private hibachi chef set up on the patio facing the yard, performed beautifully, and my wife said it was the most memorable birthday dinner of her life.',
      name:     'Charles R.',
      city:     'Madison, CT',
      event:    'Milestone Birthday Dinner',
      initials: 'CR',
    },
  ],
}

// ─── City image map ────────────────────────────────────────────────────────────
const CT_CITY_IMAGE_MAP = {
  // hero T0 = /pics/hibachi-private-chef-1.jpg
  'greenwich':   { src: '/pics/hibachi-shot-2.jpg',     alt: () => `Private hibachi chef at a Greenwich, Connecticut estate` },
  'darien':      { src: '/pics/hibachi-photo-1.jpg',    alt: () => `Hibachi at home in Darien, Connecticut` },
  'new-canaan':  { src: '/pics/hibachi-pic-2.jpg',      alt: () => `Hibachi at home in New Canaan, Connecticut` },
  // hero T1 = /pics/hero-1.jpg
  'westport':    { src: '/pics/hibachi-dallas.jpg',     alt: () => `Private hibachi chef in Westport, Connecticut` },
  'stamford':    { src: '/pics/hibachi-colorado.jpg',   alt: () => `Private hibachi chef in Stamford, Connecticut` },
  // Batch 2
  // hero T2 = /pics/hibachi-at-home.jpg
  'norwalk':     { src: '/pics/hibachi-shot-1.jpg',     alt: () => `Hibachi catering in Norwalk, Connecticut` },
  'fairfield':   { src: '/pics/hibachi-raleigh.jpg',    alt: () => `Hibachi at home in Fairfield, Connecticut` },
  'trumbull':    { src: '/pics/mobile-hibachi.jpg',     alt: () => `Mobile hibachi chef in Trumbull, Connecticut` },
  // hero T3 = /pics/hibachi-photo-2.jpg
  'west-hartford': { src: '/pics/hero-2.jpg',           alt: () => `Hibachi at home in West Hartford, Connecticut` },
  'hartford':    { src: '/pics/hibachi-pic-3.jpg',      alt: () => `Backyard hibachi party in Hartford, Connecticut` },
  // Batch 3
  'glastonbury': { src: '/pics/traveling-hibachi.jpg',  alt: () => `Mobile hibachi chef in Glastonbury, Connecticut` },
  // hero T4 = /pics/hibachi-event.jpg
  'new-haven':   { src: '/pics/hibachi-miami.jpg',      alt: () => `Hibachi catering in New Haven, Connecticut` },
  // hero T5 = /pics/hero-3.jpg
  'madison':     { src: '/pics/hibachi-pic-4.jpg',      alt: () => `Private hibachi chef in Madison, Connecticut` },
}

// ─── Support images ───────────────────────────────────────────────────────────
export const CT_SUPPORT_IMAGES = {
  'greenwich': {
    testimonial: {
      src:     '/pics/backyard-hibachi-2.jpg',
      alt:     () => `Private hibachi chef entertaining guests at a Greenwich home`,
      caption: 'Greenwich Gold Coast Events',
      intro:   (city) => `Serving ${city} estates and luxury residences across Fairfield County.`,
    },
    cta: { src: null, alt: () => `Book a private hibachi chef in Greenwich CT`, caption: 'Greenwich CT' },
  },
  'darien': {
    testimonial: {
      src:     '/pics/hibachi-catering-3.jpg',
      alt:     () => `Private hibachi at home in Darien, Connecticut`,
      caption: 'Darien Home Events',
      intro:   (city) => `Serving ${city} and the Fairfield County Gold Coast.`,
    },
    cta: { src: null, alt: () => `Book a private hibachi chef in Darien CT`, caption: 'Darien CT' },
  },
  'new-canaan': {
    testimonial: {
      src:     '/pics/private-hibachi.jpg',
      alt:     () => `Private hibachi event at a New Canaan home`,
      caption: 'New Canaan Private Events',
      intro:   (city) => `Serving ${city} and every Fairfield County community.`,
    },
    cta: { src: null, alt: () => `Book a private hibachi chef in New Canaan CT`, caption: 'New Canaan CT' },
  },
  'westport': {
    testimonial: {
      src:     '/pics/hibachi-pic-3.jpg',
      alt:     () => `Private hibachi chef at a Westport, Connecticut home`,
      caption: 'Westport Home Events',
      intro:   (city) => `Serving ${city} and the Fairfield County arts corridor.`,
    },
    cta: { src: null, alt: () => `Book a private hibachi chef in Westport CT`, caption: 'Westport CT' },
  },
  'stamford': {
    testimonial: {
      src:     '/pics/hibachi-pic-4.jpg',
      alt:     () => `Private hibachi chef in Stamford, Connecticut`,
      caption: 'Stamford Corporate & Home Events',
      intro:   (city) => `Serving ${city} and the greater lower Fairfield County business corridor.`,
    },
    cta: { src: null, alt: () => `Book a private hibachi chef in Stamford CT`, caption: 'Stamford CT' },
  },
  'norwalk': {
    testimonial: {
      src:     '/pics/hibachi-dallas-home.jpg',
      alt:     () => `Hibachi catering in Norwalk, Connecticut`,
      caption: 'Norwalk Catering Events',
      intro:   (city) => `Serving ${city} and the SoNo corridor across Fairfield County.`,
    },
    cta: { src: null, alt: () => `Book hibachi catering in Norwalk CT`, caption: 'Norwalk CT' },
  },
  'fairfield': {
    testimonial: {
      src:     '/pics/backyard-hibachi.jpg',
      alt:     () => `Hibachi at home in Fairfield, Connecticut`,
      caption: 'Fairfield Home Events',
      intro:   (city) => `Serving ${city} and surrounding Fairfield County communities.`,
    },
    cta: { src: null, alt: () => `Book a private hibachi chef in Fairfield CT`, caption: 'Fairfield CT' },
  },
  'trumbull': {
    testimonial: {
      src:     '/pics/mobile-hibachi-2.jpg',
      alt:     () => `Mobile hibachi chef in Trumbull, Connecticut`,
      caption: 'Trumbull Mobile Events',
      intro:   (city) => `Serving ${city} and the greater Bridgeport corridor.`,
    },
    cta: { src: null, alt: () => `Book a mobile hibachi chef in Trumbull CT`, caption: 'Trumbull CT' },
  },
  'west-hartford': {
    testimonial: {
      src:     '/pics/hibachi-chef-home.jpg',
      alt:     () => `Hibachi at home in West Hartford, Connecticut`,
      caption: 'West Hartford Home Events',
      intro:   (city) => `Serving ${city} and the Hartford metro communities.`,
    },
    cta: { src: null, alt: () => `Book a private hibachi chef in West Hartford CT`, caption: 'West Hartford CT' },
  },
  'hartford': {
    testimonial: {
      src:     '/pics/hibachi-pool-party.jpg',
      alt:     () => `Backyard hibachi party in Hartford, Connecticut`,
      caption: 'Hartford Backyard Events',
      intro:   (city) => `Serving ${city} and the greater Capitol region.`,
    },
    cta: { src: null, alt: () => `Book a backyard hibachi party in Hartford CT`, caption: 'Hartford CT' },
  },
  'glastonbury': {
    testimonial: {
      src:     '/pics/hibachi-to-you.jpg',
      alt:     () => `Mobile hibachi chef in Glastonbury, Connecticut`,
      caption: 'Glastonbury Mobile Events',
      intro:   (city) => `Serving ${city} and the greater Hartford corridor.`,
    },
    cta: { src: null, alt: () => `Book a mobile hibachi chef in Glastonbury CT`, caption: 'Glastonbury CT' },
  },
  'new-haven': {
    testimonial: {
      src:     '/pics/private-party-chef-6.jpg',
      alt:     () => `Hibachi catering in New Haven, Connecticut`,
      caption: 'New Haven Catering Events',
      intro:   (city) => `Serving ${city} and the Greater New Haven region.`,
    },
    cta: { src: null, alt: () => `Book hibachi catering in New Haven CT`, caption: 'New Haven CT' },
  },
  'madison': {
    testimonial: {
      src:     '/pics/hibachi-catering.jpg',
      alt:     () => `Private hibachi chef at a Madison, CT shoreline home`,
      caption: 'Madison Shoreline Events',
      intro:   (city) => `Serving ${city} and the Connecticut shoreline communities.`,
    },
    cta: { src: null, alt: () => `Book a private hibachi chef in Madison CT`, caption: 'Madison CT' },
  },
}

// ─── Custom meta overrides ────────────────────────────────────────────────────
const CT_CUSTOM_META = {
  'greenwich':    { metaTitle: 'Private Hibachi Chef at Home in Greenwich CT | Gold Coast Estate Dining', metaDescription: 'Private hibachi chef comes to your Greenwich, CT estate. Teppanyaki at home for 10–40 guests — Gold Coast luxury events, client dinners, milestone celebrations. Book today.' },
  'darien':       { metaTitle: 'Hibachi at Home in Darien CT | Private Teppanyaki Chef', metaDescription: 'Private hibachi chef comes to your Darien, CT home. Teppanyaki at home for graduation parties, anniversary dinners, and neighborhood gatherings. Book today.' },
  'new-canaan':   { metaTitle: 'Hibachi at Home in New Canaan CT | Private Teppanyaki Chef', metaDescription: 'Private hibachi chef comes to your New Canaan, CT home. Teppanyaki for milestone birthdays, client dinners, and estate events across Fairfield County. Book today.' },
  'westport':     { metaTitle: 'Private Hibachi Chef in Westport CT | At-Home Teppanyaki', metaDescription: 'Private hibachi chef for your Westport, CT home. Teppanyaki performance dinners for creative industry gatherings, milestone birthdays, and team events. Book today.' },
  'stamford':     { metaTitle: 'Private Hibachi Chef in Stamford CT | Corporate & Home Events', metaDescription: 'Private hibachi chef comes to your Stamford, CT home or corporate event. Teppanyaki at home for hedge fund teams, client dinners, and graduation celebrations. Book today.' },
  'norwalk':      { metaTitle: 'Hibachi Catering in Norwalk CT | Private Teppanyaki Event', metaDescription: 'Private hibachi chef comes to your Norwalk, CT home. Hibachi catering for graduation parties, neighborhood gatherings, and backyard events along the SoNo corridor. Book today.' },
  'fairfield':    { metaTitle: 'Hibachi at Home in Fairfield CT | Private Teppanyaki Chef', metaDescription: 'Private hibachi chef comes to your Fairfield, CT home. Teppanyaki for graduation parties, milestone dinners, and family celebrations in Fairfield County. Book today.' },
  'trumbull':     { metaTitle: 'Mobile Hibachi in Trumbull CT | Private Teppanyaki Chef', metaDescription: 'Mobile hibachi chef comes to your Trumbull, CT home. Private teppanyaki for graduation parties, family reunions, and backyard celebrations. Book today.' },
  'west-hartford': { metaTitle: 'Hibachi at Home in West Hartford CT | Private Teppanyaki Chef', metaDescription: 'Private hibachi chef comes to your West Hartford, CT home. Teppanyaki for milestone birthdays, graduation parties, and family celebrations in the Hartford metro. Book today.' },
  'hartford':     { metaTitle: 'Backyard Hibachi Party in Hartford CT | Private Teppanyaki Chef', metaDescription: 'Private hibachi chef for backyard parties in Hartford, CT. Teppanyaki at home for team celebrations, graduation dinners, and milestone events in the Capital City. Book today.' },
  'glastonbury':  { metaTitle: 'Mobile Hibachi in Glastonbury CT | Private Teppanyaki Chef', metaDescription: 'Mobile hibachi chef comes to your Glastonbury, CT home. Private teppanyaki for graduation parties, milestone dinners, and family events in the Hartford corridor. Book today.' },
  'new-haven':    { metaTitle: 'Hibachi Catering in New Haven CT | Yale Graduation & Private Events', metaDescription: 'Private hibachi chef for New Haven, CT events. Teppanyaki catering for Yale graduation parties, alumni dinners, and milestone celebrations in Greater New Haven. Book today.' },
  'madison':      { metaTitle: 'Private Hibachi Chef in Madison CT | Connecticut Shoreline Events', metaDescription: 'Private hibachi chef comes to your Madison, CT shoreline home. Teppanyaki for beach house gatherings, summer celebrations, and family events on the CT coastline. Book today.' },
}

// ─── Generic intro variants (one per theme, indices 775–780) ──────────────────
export const CT_INTRO_VARIANTS = [
  // 775 — T0: Gold Coast Luxury
  {
    headline: () => 'Gold Coast Estate Hibachi: Private Teppanyaki at Your Connecticut Home',
    opening:  () => 'The Gold Coast of Fairfield County — Greenwich, Darien, New Canaan — has long set the standard for private entertaining in New England. The estates, the outdoor living spaces, the expectation of excellence at every event: it\'s a culture built around doing things properly.',
    middle:   () => 'A private hibachi chef brings that same standard to the dining experience. The chef arrives at your estate, sets up a professional teppanyaki station on your terrace or patio, and performs the full show — knife skills, fire, live cooking — for your guests. Every protein is prepared to order: filet mignon, lobster tail, shrimp, scallops, chicken. Your guests eat together, at the same table, watching the same performance.',
    closing:  () => 'No restaurant logistics. No shared space with strangers. The event is entirely yours — your guest list, your setting, your timeline. For Gold Coast hosts who expect the finest, private hibachi delivers it at home.',
  },
  // 776 — T1: Fairfield County Corporate
  {
    headline: () => 'Private Hibachi for Fairfield County Corporate Entertaining',
    opening:  () => 'Fairfield County\'s corporate community — hedge funds in Greenwich and Stamford, media companies in Westport, financial services throughout the county — entertains at a high standard. Client dinners, team events, and executive gatherings require something genuinely differentiated.',
    middle:   () => 'Private hibachi at home delivers that differentiation. The chef comes to your Fairfield County residence, sets up a professional teppanyaki station on your patio or in your dining space, and performs for your guests as both chef and entertainer. Your clients experience something interactive, personal, and memorable — not another restaurant private room.',
    closing:  () => 'The format works for groups of 10–35. Every guest orders individually, the performance brings everyone together, and the evening has an energy that no caterer or restaurant event can replicate. Fairfield County professionals have made it their preferred corporate entertaining format.',
  },
  // 777 — T2: Fairfield County Suburban
  {
    headline: () => 'Private Hibachi at Home in Fairfield County',
    opening:  () => 'Fairfield County\'s suburban communities — Norwalk, Fairfield, Trumbull — have a deep outdoor entertaining culture. Graduation parties, neighborhood gatherings, and family milestone dinners are natural outdoor events here from May through October.',
    middle:   () => 'A private hibachi chef adds a live performance to what would otherwise be a standard backyard event. The chef arrives at your home, sets up on your patio or deck, and performs the full teppanyaki show for your guests. Everyone watches together, orders individually, and eats together when the performance is complete.',
    closing:  () => 'For Fairfield County hosts looking to elevate a graduation party, neighborhood dinner, or family celebration without the complexity of a restaurant reservation, private hibachi delivers the full experience — in your own space.',
  },
  // 778 — T3: Hartford Metro
  {
    headline: () => 'Private Hibachi Chef for Hartford Area Home Events',
    opening:  () => 'The Hartford metro — West Hartford, Hartford, Glastonbury, Simsbury — is Connecticut\'s government, insurance, and healthcare hub. It\'s also a region with a strong home entertaining culture, where milestone events and team celebrations frequently happen in private residences.',
    middle:   () => 'A private hibachi chef brings a teppanyaki performance directly to your Hartford area home. The chef sets up on your patio, deck, or covered outdoor space and performs the full hibachi show — cooking individual orders for each guest while delivering the knife tricks, fire, and interactive performance that makes teppanyaki distinctive.',
    closing:  () => 'For Hartford metro hosts — whether you\'re celebrating a graduation, a milestone birthday, or a team achievement — private hibachi delivers a genuine performance dinner at home. No restaurant required.',
  },
  // 779 — T4: Greater New Haven
  {
    headline: () => 'Private Hibachi Chef in Greater New Haven',
    opening:  () => 'New Haven is Connecticut\'s second-largest city and home to Yale University — a combination that generates significant demand for private group dining. Graduation weekends, alumni reunions, and professional team events all call for something more memorable than a standard restaurant experience.',
    middle:   () => 'Private hibachi at home answers that need. A licensed teppanyaki chef comes to your New Haven area home or venue, sets up a portable grill station in your outdoor space, and performs the full show for your guests. Each guest orders their own protein — filet, shrimp, chicken, lobster — while the performance brings everyone together.',
    closing:  () => 'For Yale families, Greater New Haven professionals, and anyone planning a group event in the area, private hibachi delivers a dining experience that no restaurant reservation can match — in the comfort of your own space.',
  },
  // 780 — T5: Connecticut Shoreline
  {
    headline: () => 'Private Hibachi Chef on the Connecticut Shoreline',
    opening:  () => 'Connecticut\'s shoreline communities — Madison, Guilford, Old Saybrook, Clinton — have some of the state\'s most desirable outdoor entertaining environments. Beach houses, waterfront lots, and covered patios steps from the Sound are built for exactly this kind of event.',
    middle:   () => 'A private hibachi chef comes to your shoreline home, sets up a professional teppanyaki station on your deck or patio, and performs for your guests against the backdrop of the Connecticut coast. The format pairs naturally with summer entertaining — the chef handles dinner while you focus on your guests.',
    closing:  () => 'For shoreline hosts planning a summer gathering, a beach house celebration, or a family reunion by the water, private hibachi delivers a dinner performance that becomes the centerpiece of the event.',
  },
]

// ─── City-specific intros (indices 781–793) ───────────────────────────────────
export const CT_CITY_INTROS = [
  // 781 — Greenwich
  {
    headline: () => 'Private Hibachi Chef at Your Greenwich Estate',
    opening:  () => 'Greenwich is one of the most affluent communities in the United States — and one of the most demanding when it comes to private entertaining. Estate dinners, client events, and milestone celebrations here are held to a high standard. A private hibachi chef meets that standard, on your terms, at your property.',
    middle:   () => 'The chef arrives at your Greenwich estate, sets up on your terrace, pool deck, or covered patio, and delivers a full teppanyaki performance for your guests. Every protein is prepared to order: filet mignon, lobster tail, shrimp, scallops, Chilean sea bass. Your guests — whether they\'re longtime friends, business clients, or family from abroad — watch the performance together and eat together when it concludes.',
    closing:  () => 'Greenwich hosts use private hibachi for corporate client dinners, milestone birthdays and anniversaries, graduation celebrations, and year-end team events. The format is flexible, the quality is uncompromising, and the experience is entirely private.',
  },
  // 782 — Darien
  {
    headline: () => 'Hibachi at Home in Darien: Private Teppanyaki for Fairfield County Families',
    opening:  () => 'Darien is one of the most desirable residential communities on the Gold Coast — and one of the most active for private home entertaining. Graduation parties, anniversary dinners, and neighborhood gatherings are regular events in Darien\'s established neighborhoods.',
    middle:   () => 'A private hibachi chef brings the full teppanyaki experience to your Darien home. The chef sets up on your covered patio or open deck, performs the complete show — knife skills, fire, egg tricks — and prepares individual orders for each guest. You control the guest list, the timeline, and the setting.',
    closing:  () => 'For Darien families who want to elevate a graduation party, a milestone dinner, or a neighborhood gathering beyond the usual format, private hibachi delivers a genuine performance at home — without the restaurant reservation battle.',
  },
  // 783 — New Canaan
  {
    headline: () => 'Private Hibachi Chef at Your New Canaan Home',
    opening:  () => 'New Canaan has some of the finest residential properties in Connecticut — and a home entertaining culture to match. Its families host milestone celebrations, client dinners, and neighborhood events that reflect the town\'s reputation for excellence.',
    middle:   () => 'A private hibachi chef brings the full teppanyaki performance to your New Canaan property. The setup is straightforward: the chef arrives 30 minutes before guests, arranges the grill station on your patio or terrace, and delivers the complete hibachi show. Every guest orders exactly what they want — filet mignon, lobster tail, shrimp, chicken, salmon.',
    closing:  () => 'New Canaan hosts use private hibachi for client holiday dinners, Sweet 16 parties, milestone anniversaries, and charity dinner events. The format is appropriate for groups of 10–35, and the experience is entirely private to your property.',
  },
  // 784 — Westport
  {
    headline: () => 'Private Hibachi Chef in Westport: Creative Entertaining at Home',
    opening:  () => 'Westport has a distinctive character in Fairfield County — it\'s where the arts and business communities overlap, where creative industry professionals and finance executives share the same social calendar. Private entertaining here is expected to be original.',
    middle:   () => 'A private hibachi chef brings that originality to your Westport home. The chef arrives at your property, sets up on your patio, pool deck, or covered terrace, and performs the full teppanyaki show for your guests. It\'s a dinner and a live performance simultaneously — something genuinely different from any catered event or restaurant reservation.',
    closing:  () => 'Westport hosts use private hibachi for team dinners, milestone birthday parties, creative industry gatherings, and holiday entertaining. The format scales from intimate groups of 10 to full estate events of 35 or more.',
  },
  // 785 — Stamford
  {
    headline: () => 'Private Hibachi Chef in Stamford: Corporate and Home Events',
    opening:  () => 'Stamford is Connecticut\'s financial capital — home to hedge funds, major corporations, and a professional community that entertains at a sophisticated level. Client dinners, team events, and executive gatherings here require something that stands apart from the standard restaurant reservation.',
    middle:   () => 'A private hibachi chef delivers that distinction. The chef comes to your Stamford home or residence, sets up a professional teppanyaki station on your outdoor space or in a suitable indoor area, and performs for your guests. Every client orders individually, the performance brings the whole group together, and the dinner has the energy of a live event.',
    closing:  () => 'Stamford professionals use private hibachi for hedge fund team dinners, client appreciation events, graduation celebrations, and holiday entertaining. The format is appropriate for 10–30 guests and works in residential homes, condominiums with outdoor access, and private event spaces.',
  },
  // 786 — Norwalk (Batch 2)
  {
    headline: () => 'Hibachi Catering in Norwalk: Private Teppanyaki for Fairfield County Events',
    opening:  () => 'Norwalk sits at the center of Fairfield County\'s coastal corridor — SoNo, East Norwalk, Rowayton — with a mix of established neighborhoods and waterfront properties that are built for outdoor entertaining. Private hibachi catering brings the teppanyaki experience directly to your Norwalk home.',
    middle:   () => 'The chef arrives at your property, sets up on your patio or deck, and performs the full hibachi show for your guests. Norwalk\'s mix of family celebrations, professional entertaining, and waterfront gatherings all fit the format well — the chef handles the cooking and performance while you focus on your guests.',
    closing:  () => 'For Norwalk hosts planning graduation parties, milestone dinners, or summer backyard events, hibachi catering at home delivers a complete dinner experience without the restaurant reservation pressure.',
  },
  // 787 — Fairfield (Batch 2)
  {
    headline: () => 'Hibachi at Home in Fairfield, CT: Private Teppanyaki for Family and Community Events',
    opening:  () => 'Fairfield is one of the most family-oriented communities in Fairfield County — strong school systems, active neighborhood associations, and a deep outdoor entertaining culture that runs from May commencement through Labor Day. Private hibachi at home fits naturally into that culture.',
    middle:   () => 'The chef comes to your Fairfield home, sets up on your covered patio or open backyard, and delivers the full teppanyaki performance. Graduation parties, milestone birthdays, and neighborhood gatherings are all natural occasions for the format — the chef brings everything, the experience is entirely at your property.',
    closing:  () => 'Fairfield families use private hibachi for high school graduation parties, anniversary dinners, neighborhood summer gatherings, and family milestone celebrations. For groups of 10–30, it\'s the format that elevates the ordinary backyard event into something genuinely memorable.',
  },
  // 788 — Trumbull (Batch 2)
  {
    headline: () => 'Mobile Hibachi in Trumbull: Private Teppanyaki Chef to Your Door',
    opening:  () => 'Trumbull is a residential community at the crossroads of Fairfield County — close to Bridgeport, Shelton, and the Naugatuck Valley, with neighborhoods built around outdoor living and family entertaining. A mobile hibachi chef brings the full teppanyaki experience directly to your backyard.',
    middle:   () => 'The chef arrives at your Trumbull home, sets up the portable grill on your patio or deck, and performs the full hibachi show for your guests. No restaurant logistics, no transportation coordination — the performance comes to you. Graduation parties, family reunions, and milestone celebrations all work well in Trumbull\'s residential settings.',
    closing:  () => 'For Trumbull families who want something beyond the standard backyard party, mobile hibachi delivers a live performance dinner at home — the chef handles everything from setup to cleanup.',
  },
  // 789 — West Hartford (Batch 2)
  {
    headline: () => 'Hibachi at Home in West Hartford: Private Teppanyaki for Hartford Metro Families',
    opening:  () => 'West Hartford is one of the most sought-after communities in Connecticut — excellent schools, walkable neighborhoods, strong community events, and a home entertaining culture that reflects its status as Hartford County\'s premier suburb. Private hibachi at home fits perfectly into West Hartford\'s event calendar.',
    middle:   () => 'The chef comes to your West Hartford home, sets up on your backyard patio or covered deck, and delivers the full teppanyaki show. West Hartford families use the format for high school graduation parties, milestone birthdays and anniversaries, and neighborhood dinner events. The UConn and Hartford area graduation season makes May and June particularly active booking months.',
    closing:  () => 'For West Hartford hosts who want to elevate a celebration beyond the usual format, private hibachi delivers a genuine performance dinner in your own space — no restaurant required.',
  },
  // 790 — Hartford (Batch 2)
  {
    headline: () => 'Backyard Hibachi Party in Hartford: Private Teppanyaki for Capital City Events',
    opening:  () => 'Hartford is Connecticut\'s capital city — the center of state government, the insurance industry, and a growing healthcare sector. It\'s also a city where backyard entertaining and neighborhood events are a strong part of community culture, particularly in the surrounding suburbs and residential neighborhoods.',
    middle:   () => 'A private hibachi chef brings the teppanyaki performance to your Hartford area home or backyard. The chef arrives, sets up the grill station on your outdoor space, and performs for your guests. Government agency team celebrations, insurance industry events, and family milestone dinners all work well in the Hartford format.',
    closing:  () => 'For Hartford hosts planning a team celebration, a graduation dinner, or a milestone birthday backyard party, private hibachi delivers a dinner performance that stands apart from every restaurant option in the Capital region.',
  },
  // 791 — Glastonbury (Batch 3)
  {
    headline: () => 'Mobile Hibachi in Glastonbury: Private Teppanyaki Chef to Your Home',
    opening:  () => 'Glastonbury is one of the most desirable communities east of the Connecticut River — excellent schools, large residential lots, and a quiet suburban character that makes it ideal for private home events. A mobile hibachi chef brings the full teppanyaki experience to your Glastonbury backyard.',
    middle:   () => 'The chef arrives at your home, sets up the portable grill station on your patio or open lawn, and delivers the complete hibachi show for your guests. Glastonbury families use the format for high school graduation parties, milestone birthdays, and family reunion dinners — occasions where the outdoor space and the private setting make the teppanyaki format work especially well.',
    closing:  () => 'For Glastonbury hosts who want a live performance dinner at home, mobile hibachi brings the experience to your property — the chef handles setup, performance, and cleanup.',
  },
  // 792 — New Haven (Batch 3)
  {
    headline: () => 'Hibachi Catering in New Haven: Private Teppanyaki for Yale Graduations and Beyond',
    opening:  () => 'New Haven hosts two distinct private dining markets: the Yale University graduation calendar, which brings thousands of families to the city every May, and the year-round professional and residential community that needs private group dining options beyond the Elm City restaurant scene.',
    middle:   () => 'Private hibachi catering addresses both markets. The chef comes to your New Haven area home or rental property, sets up a portable teppanyaki station in your outdoor space, and performs for your group. For Yale graduation families who can\'t secure private dining at any restaurant, hosting the dinner at your rental home is a practical — and genuinely better — solution.',
    closing:  () => 'For New Haven area hosts planning graduation parties, alumni dinners, or team celebrations, hibachi catering at home delivers a memorable experience that no restaurant private room can replicate.',
  },
  // 793 — Madison (Batch 3)
  {
    headline: () => 'Private Hibachi Chef in Madison, CT: Shoreline Teppanyaki Entertaining',
    opening:  () => 'Madison sits on Long Island Sound midway along the Connecticut shoreline — a community known for its beaches, its historic town green, and its summer-driven outdoor entertaining culture. Beach houses, waterfront lots, and large residential yards along the shore are built for exactly this kind of event.',
    middle:   () => 'A private hibachi chef comes to your Madison shoreline home, sets up on your deck or patio, and performs the full teppanyaki show for your guests. The coastal setting and the summer schedule — from Memorial Day through Labor Day — make Madison one of the state\'s most natural markets for outdoor hibachi dining.',
    closing:  () => 'Madison hosts use private hibachi for beach house gatherings, summer family reunions, milestone birthday dinners, and end-of-summer celebrations. The chef arrives, performs, and cleans up — you and your guests enjoy the evening against the backdrop of the Connecticut coast.',
  },
]

// ─── Generic closing variants (one per theme) ─────────────────────────────────
export const CT_CLOSING_VARIANTS = [
  // T0: Gold Coast Luxury
  {
    headline: (city) => `Book Your Private Hibachi Chef in ${city}`,
    sub:      (city) => `Estate teppanyaki dining · ${city}, CT · Private events for 10–40 guests`,
    urgency:  'Gold Coast dates book quickly — especially for May graduation season and December holiday entertaining.',
  },
  // T1: Fairfield County Corporate
  {
    headline: (city) => `Reserve Your ${city} Private Hibachi Event`,
    sub:      (city) => `Corporate & home teppanyaki · ${city}, CT · Chef comes to you`,
    urgency:  'Fairfield County corporate event dates fill early — reserve your preferred date as soon as you have it.',
  },
  // T2: Fairfield County Suburban
  {
    headline: (city) => `Book a Private Hibachi Chef in ${city}`,
    sub:      (city) => `Teppanyaki at home · ${city}, CT · Graduation season and year-round events`,
    urgency:  'Fairfield County graduation season dates (May–June) fill up fast — book early to secure your weekend.',
  },
  // T3: Hartford Metro
  {
    headline: (city) => `Reserve Your ${city} Hibachi Event`,
    sub:      (city) => `Private teppanyaki chef · ${city}, CT · Hartford metro events year-round`,
    urgency:  'Hartford metro events book ahead — especially for May and June graduation season.',
  },
  // T4: Greater New Haven
  {
    headline: (city) => `Book Your ${city} Private Hibachi Dinner`,
    sub:      (city) => `Teppanyaki catering · ${city}, CT · Yale graduation season & year-round events`,
    urgency:  'Yale commencement weekend books months in advance — secure your date early.',
  },
  // T5: Connecticut Shoreline
  {
    headline: (city) => `Reserve Your Shoreline Hibachi Event in ${city}`,
    sub:      (city) => `Private teppanyaki chef · ${city}, CT · Summer shoreline events`,
    urgency:  'Summer shoreline dates in Madison and the CT coast book quickly — reserve your preferred weekend early.',
  },
]

// ─── City-specific closings (indices 781–793) ────────────────────────────────
export const CT_CITY_CLOSINGS = [
  // 781 — Greenwich
  {
    headline: (city) => `Book Your Private Hibachi Chef in ${city}`,
    sub:      (city) => `Gold Coast estate teppanyaki · ${city}, CT · Events for 10–40 guests`,
    urgency:  'Greenwich estate event dates — especially May graduation season and December client dinners — book well in advance.',
  },
  // 782 — Darien
  {
    headline: (city) => `Reserve Your ${city} Private Hibachi Event`,
    sub:      (city) => `Teppanyaki at home · ${city}, CT · Gold Coast family and corporate events`,
    urgency:  'Darien graduation weekend dates (May) fill quickly — reserve your date 4–6 weeks in advance.',
  },
  // 783 — New Canaan
  {
    headline: (city) => `Book a Private Hibachi Chef in ${city}`,
    sub:      (city) => `Estate teppanyaki dining · ${city}, CT · Private events for 10–35 guests`,
    urgency:  'New Canaan graduation season and holiday entertaining dates fill fast — early booking is recommended.',
  },
  // 784 — Westport
  {
    headline: (city) => `Reserve Your ${city} Private Hibachi Event`,
    sub:      (city) => `Private teppanyaki chef · ${city}, CT · Creative and corporate entertaining`,
    urgency:  'Westport events book quickly in spring and December — reserve your preferred date as soon as you have it.',
  },
  // 785 — Stamford
  {
    headline: (city) => `Book Your Private Hibachi Chef in ${city}`,
    sub:      (city) => `Corporate & home teppanyaki · ${city}, CT · Hedge fund teams and private events`,
    urgency:  'Stamford corporate event and graduation season dates fill quickly — early booking ensures your preferred date.',
  },
  // 786 — Norwalk
  {
    headline: (city) => `Reserve Your ${city} Hibachi Catering Event`,
    sub:      (city) => `Teppanyaki catering · ${city}, CT · Fairfield County events year-round`,
    urgency:  'Norwalk graduation and summer event dates fill in spring — reserve your preferred weekend early.',
  },
  // 787 — Fairfield
  {
    headline: (city) => `Book a Private Hibachi Chef in ${city}`,
    sub:      (city) => `Teppanyaki at home · ${city}, CT · Graduation, anniversaries, and backyard events`,
    urgency:  'Fairfield graduation season weekends (May–June) are in high demand — early booking is recommended.',
  },
  // 788 — Trumbull
  {
    headline: (city) => `Reserve Your ${city} Mobile Hibachi Event`,
    sub:      (city) => `Mobile teppanyaki chef · ${city}, CT · Chef comes to your backyard`,
    urgency:  'Trumbull spring and summer event dates book ahead — secure your preferred weekend early.',
  },
  // 789 — West Hartford
  {
    headline: (city) => `Book Your ${city} Private Hibachi Event`,
    sub:      (city) => `Teppanyaki at home · ${city}, CT · Hartford metro events year-round`,
    urgency:  'West Hartford graduation season dates (May–June) fill quickly — reserve 4–6 weeks in advance.',
  },
  // 790 — Hartford
  {
    headline: (city) => `Reserve Your ${city} Backyard Hibachi Party`,
    sub:      (city) => `Backyard teppanyaki · ${city}, CT · Capital City events year-round`,
    urgency:  'Hartford area spring and graduation season dates fill ahead — book early to secure your event.',
  },
  // 791 — Glastonbury
  {
    headline: (city) => `Book a Mobile Hibachi Chef in ${city}`,
    sub:      (city) => `Mobile teppanyaki chef · ${city}, CT · Chef comes to your home`,
    urgency:  'Glastonbury spring and summer event dates fill quickly — reserve your preferred date in advance.',
  },
  // 792 — New Haven
  {
    headline: (city) => `Reserve Your ${city} Hibachi Catering Event`,
    sub:      (city) => `Teppanyaki catering · ${city}, CT · Yale graduation and year-round events`,
    urgency:  'Yale commencement weekend dates book months in advance — reserve as early as possible for May events.',
  },
  // 793 — Madison
  {
    headline: (city) => `Book Your ${city} Shoreline Hibachi Event`,
    sub:      (city) => `Private teppanyaki chef · ${city}, CT · Shoreline home events`,
    urgency:  'Madison shoreline summer dates fill quickly — Memorial Day through Labor Day weekends book early.',
  },
]

// ─── How It Works ─────────────────────────────────────────────────────────────
const CT_HOW_IT_WORKS = {
  default: {
    headline:   (city) => `How Private Hibachi Works in ${city}`,
    footerNote: (city) => `We serve ${city} and all of Connecticut — from the Gold Coast to the shoreline.`,
    steps: [
      { number: '01', title: 'Request Your Date',     description: 'Tell us your event date, location in Connecticut, and group size. We confirm availability and send a quote.' },
      { number: '02', title: 'Confirm Your Menu',     description: 'Choose proteins for each guest — filet mignon, lobster, shrimp, chicken, salmon. We accommodate dietary restrictions.' },
      { number: '03', title: 'Chef Arrives & Sets Up', description: 'Your chef arrives 30 minutes early, sets up the teppanyaki station on your patio or outdoor space, and prepares for the performance.' },
      { number: '04', title: 'Live Teppanyaki Show',  description: 'Your chef performs the full hibachi show — knife skills, fire, egg tricks — while cooking personalized orders for every guest.' },
      { number: '05', title: 'Enjoy & We Clean Up',   description: 'Guests enjoy a complete teppanyaki dinner together. The chef packs up all equipment and leaves your space clean.' },
    ],
  },
}

// ─── Section variants ─────────────────────────────────────────────────────────
const CT_SECTION_VARIANTS = {
  // T0: Gold Coast Luxury
  t0: {
    heroPill:         'Gold Coast Private Dining',
    experiencePill:   'Estate Teppanyaki',
    experiencePoints: (city) => [
      { icon: '🏡', title: 'At Your Estate',      desc: `Chef sets up at your ${city} property — no restaurant required` },
      { icon: '🔪', title: 'Full Performance',    desc: 'Knife skills, fire, tableside cooking for every guest' },
      { icon: '🥩', title: 'Premium Proteins',    desc: 'Filet mignon, lobster tail, shrimp, scallops — to order' },
      { icon: '✨', title: 'Truly Private',        desc: 'Your guest list, your timeline, your Gold Coast setting' },
    ],
    experienceImage:    '/pics/private-party-chef-6.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city}, CT estate`,
    areasPill:          'Connecticut Service Area',
    areasHeadline:      (city) => `Serving ${city} and the Fairfield County Gold Coast`,
    areasIntro:         [
      (city, state) => `We serve ${city} and every Fairfield County community — Greenwich, Darien, New Canaan, Westport, Stamford, Norwalk, and beyond.`,
      (city) => `Every ${city} event includes full setup and cleanup at your property.`,
    ],
    areasButton:          'See All Connecticut Locations',
    occasionPill:         'Gold Coast Events',
    occasionHeadline:     (city) => `Private Hibachi Occasions in ${city}`,
    occasionSubtext:      'Estate client dinners · Milestone anniversaries · Graduation celebrations · Holiday entertaining · Corporate gatherings',
    faqPill:              'Connecticut FAQ',
    faqHeadline:          (city, abbr) => `Private Hibachi Chef in ${city}, ${abbr} — Common Questions`,
    testimonialSubheading: 'What Gold Coast Hosts Say',
  },
  // T1: Fairfield County Corporate
  t1: {
    heroPill:         'Fairfield County Private Dining',
    experiencePill:   'Corporate Teppanyaki',
    experiencePoints: (city) => [
      { icon: '🍽️', title: 'Chef Comes to You',   desc: `Full teppanyaki setup at your ${city} home or office event space` },
      { icon: '🔥', title: 'Live Performance',     desc: 'Professional hibachi show — knife skills, fire, tableside cooking' },
      { icon: '🥩', title: 'Individual Orders',    desc: 'Every guest orders their own protein — filet, lobster, shrimp, chicken' },
      { icon: '📋', title: 'Full Service',         desc: 'Chef brings all equipment, ingredients, and handles cleanup' },
    ],
    experienceImage:    '/pics/hibachi-chef-home.jpg',
    experienceImageAlt: (city) => `Private hibachi chef entertaining corporate guests in ${city}, CT`,
    areasPill:          'Connecticut Service Area',
    areasHeadline:      (city) => `Serving ${city} and Fairfield County`,
    areasIntro:         [
      (city, state) => `We serve ${city} and the full Fairfield County corridor — Greenwich, Stamford, Westport, Norwalk, and every surrounding community.`,
      (city) => `Every ${city} event is fully serviced — setup, performance, and cleanup at your location.`,
    ],
    areasButton:          'See All Connecticut Locations',
    occasionPill:         'Fairfield County Events',
    occasionHeadline:     (city) => `Private Hibachi Events in ${city}`,
    occasionSubtext:      'Hedge fund team dinners · Client appreciation events · Graduation celebrations · Milestone entertaining · Holiday parties',
    faqPill:              'Connecticut FAQ',
    faqHeadline:          (city, abbr) => `Private Hibachi Chef in ${city}, ${abbr} — Common Questions`,
    testimonialSubheading: 'What Fairfield County Hosts Say',
  },
  // T2: Fairfield County Suburban
  t2: {
    heroPill:         'Fairfield County Backyard Events',
    experiencePill:   'Teppanyaki at Home',
    experiencePoints: (city) => [
      { icon: '🏠', title: 'Your Backyard',        desc: `Chef sets up on your ${city} patio or deck` },
      { icon: '🔥', title: 'Full Hibachi Show',    desc: 'Complete performance — fire, knife tricks, live cooking' },
      { icon: '👨‍👩‍👧‍👦', title: 'Perfect for Families', desc: 'Graduation parties, milestone birthdays, neighborhood events' },
      { icon: '🧹', title: 'Full Cleanup',         desc: 'Chef packs up all equipment — your space stays pristine' },
    ],
    experienceImage:    '/pics/hibachi-catering.jpg',
    experienceImageAlt: (city) => `Hibachi at home in ${city}, Connecticut`,
    areasPill:          'Connecticut Service Area',
    areasHeadline:      (city) => `Serving ${city} and Fairfield County`,
    areasIntro:         [
      (city, state) => `We serve ${city} and the surrounding Fairfield County communities — Westport, Norwalk, Stamford, Bridgeport, and beyond.`,
      (city) => `Every ${city} event is fully serviced from setup through cleanup.`,
    ],
    areasButton:          'See All Connecticut Locations',
    occasionPill:         'Fairfield County Family Events',
    occasionHeadline:     (city) => `Private Hibachi Occasions in ${city}`,
    occasionSubtext:      'Graduation parties · Milestone birthdays · Neighborhood gatherings · Anniversary dinners · Summer backyard events',
    faqPill:              'Connecticut FAQ',
    faqHeadline:          (city, abbr) => `Private Hibachi Chef in ${city}, ${abbr} — Common Questions`,
    testimonialSubheading: 'What Fairfield County Families Say',
  },
  // T3: Hartford Metro
  t3: {
    heroPill:         'Hartford Metro Private Dining',
    experiencePill:   'Teppanyaki at Home',
    experiencePoints: (city) => [
      { icon: '🍽️', title: 'Chef Comes to You',   desc: `Full hibachi setup at your ${city} home` },
      { icon: '🔪', title: 'Live Performance',     desc: 'Knife skills, fire, and tableside cooking for your group' },
      { icon: '🥩', title: 'Custom Menu',          desc: 'Individual protein orders — filet, shrimp, chicken, salmon' },
      { icon: '🧹', title: 'Full Service',         desc: 'Chef handles setup and cleanup — nothing for you to do' },
    ],
    experienceImage:    '/pics/hibachi-chef-2.jpg',
    experienceImageAlt: (city) => `Private hibachi chef in ${city}, Connecticut`,
    areasPill:          'Connecticut Service Area',
    areasHeadline:      (city) => `Serving ${city} and the Hartford Metro`,
    areasIntro:         [
      (city, state) => `We serve ${city} and the full Hartford metro — West Hartford, Hartford, Glastonbury, Simsbury, Newington, and every surrounding community.`,
      (city) => `Every ${city} event is fully serviced — setup, performance, and cleanup at your location.`,
    ],
    areasButton:          'See All Connecticut Locations',
    occasionPill:         'Hartford Metro Events',
    occasionHeadline:     (city) => `Private Hibachi Events in ${city}`,
    occasionSubtext:      'Graduation parties · Milestone birthdays · Government team celebrations · Insurance industry events · Family reunions',
    faqPill:              'Connecticut FAQ',
    faqHeadline:          (city, abbr) => `Private Hibachi Chef in ${city}, ${abbr} — Common Questions`,
    testimonialSubheading: 'What Hartford Metro Hosts Say',
  },
  // T4: Greater New Haven
  t4: {
    heroPill:         'New Haven Private Dining',
    experiencePill:   'Teppanyaki Catering',
    experiencePoints: (city) => [
      { icon: '🎓', title: 'Yale Graduation Events', desc: `Private hibachi for graduation parties in ${city}` },
      { icon: '🔥', title: 'Full Performance',       desc: 'Complete hibachi show — fire, knife tricks, live cooking' },
      { icon: '🥩', title: 'Individual Orders',      desc: 'Every guest orders their own protein — filet, lobster, shrimp' },
      { icon: '🏠', title: 'At Your Home',           desc: 'Chef comes to your New Haven area home or rental property' },
    ],
    experienceImage:    '/pics/hibachi-pool-party.jpg',
    experienceImageAlt: (city) => `Private hibachi catering in ${city}, Connecticut`,
    areasPill:          'Connecticut Service Area',
    areasHeadline:      (city) => `Serving ${city} and Greater New Haven`,
    areasIntro:         [
      (city, state) => `We serve ${city} and the Greater New Haven region — Milford, West Haven, Orange, Hamden, Branford, and every surrounding community.`,
      (city) => `Every ${city} event is fully serviced — setup, performance, and cleanup at your location.`,
    ],
    areasButton:          'See All Connecticut Locations',
    occasionPill:         'New Haven Events',
    occasionHeadline:     (city) => `Private Hibachi Events in ${city}`,
    occasionSubtext:      'Yale graduation parties · Alumni dinners · Professional team events · Milestone birthdays · Family celebrations',
    faqPill:              'Connecticut FAQ',
    faqHeadline:          (city, abbr) => `Private Hibachi Chef in ${city}, ${abbr} — Common Questions`,
    testimonialSubheading: 'What Greater New Haven Hosts Say',
  },
  // T5: Connecticut Shoreline
  t5: {
    heroPill:         'CT Shoreline Private Dining',
    experiencePill:   'Shoreline Teppanyaki',
    experiencePoints: (city) => [
      { icon: '🌊', title: 'Shoreline Setting',      desc: `Chef sets up at your ${city} beach house or waterfront home` },
      { icon: '🔥', title: 'Full Hibachi Show',      desc: 'Complete teppanyaki performance for your guests' },
      { icon: '🥩', title: 'Premium Proteins',       desc: 'Individual orders — filet mignon, lobster tail, shrimp, scallops' },
      { icon: '☀️', title: 'Summer Entertaining',    desc: 'Perfect for beach house gatherings, Memorial Day through Labor Day' },
    ],
    experienceImage:    '/pics/hibachi-to-you.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city}, CT shoreline home`,
    areasPill:          'Connecticut Service Area',
    areasHeadline:      (city) => `Serving ${city} and the Connecticut Shoreline`,
    areasIntro:         [
      (city, state) => `We serve ${city} and the full Connecticut shoreline — Guilford, Clinton, Old Saybrook, Westbrook, and every coastal community.`,
      (city) => `Every ${city} event is fully serviced — setup, performance, and cleanup at your shoreline property.`,
    ],
    areasButton:          'See All Connecticut Locations',
    occasionPill:         'Shoreline Events',
    occasionHeadline:     (city) => `Private Hibachi Events in ${city}`,
    occasionSubtext:      'Beach house gatherings · Summer family reunions · Milestone birthday dinners · Waterfront celebrations · End-of-summer parties',
    faqPill:              'Connecticut FAQ',
    faqHeadline:          (city, abbr) => `Private Hibachi Chef in ${city}, ${abbr} — Common Questions`,
    testimonialSubheading: 'What Connecticut Shoreline Hosts Say',
  },
}

const CT_THEME_KEYS = ['t0', 't0', 't0', 't1', 't1', 't2', 't2', 't2', 't3', 't3', 't3', 't4', 't5']

// ─── Blog posts ───────────────────────────────────────────────────────────────
export const CT_BLOG_POSTS = [
  // Slot 0 — variant % 3 === 0 (Greenwich, Darien, New Canaan, West Hartford, Hartford, Glastonbury)
  [
    {
      slug:    'hibachi-at-home-connecticut-guide',
      title:   'Hibachi at Home in Connecticut: Greenwich, Darien, Hartford, and Beyond',
      date:    '2026-05-01',
      excerpt: 'Private hibachi at home has taken hold across Connecticut — from Gold Coast estates in Greenwich and Darien to covered patios in West Hartford and Glastonbury. This guide covers what the experience looks like in CT\'s key markets.',
    },
    {
      slug:    'private-hibachi-fairfield-county-stamford-westport',
      title:   'Private Hibachi in Fairfield County: Stamford, Westport, and the New Haven Connection',
      date:    '2026-05-08',
      excerpt: 'Stamford\'s hedge fund community and Westport\'s creative professionals have made private hibachi at home the preferred format for team dinners and milestone entertaining.',
    },
    {
      slug:    'private-hibachi-connecticut-shoreline-outdoor-entertaining',
      title:   'Private Hibachi on the Connecticut Shoreline: Norwalk, Fairfield, Trumbull, and Madison',
      date:    '2026-05-15',
      excerpt: 'Connecticut\'s shoreline and Fairfield County\'s suburban communities have an outdoor entertaining culture that\'s a natural match for private hibachi.',
    },
  ],
  // Slot 1 — variant % 3 === 1 (Westport, Stamford, New Haven)
  [
    {
      slug:    'private-hibachi-fairfield-county-stamford-westport',
      title:   'Private Hibachi in Fairfield County: Stamford, Westport, and the New Haven Connection',
      date:    '2026-05-08',
      excerpt: 'Stamford\'s hedge fund community and Westport\'s creative professionals have made private hibachi at home the preferred format for team dinners and milestone entertaining.',
    },
    {
      slug:    'hibachi-at-home-connecticut-guide',
      title:   'Hibachi at Home in Connecticut: Greenwich, Darien, Hartford, and Beyond',
      date:    '2026-05-01',
      excerpt: 'Private hibachi at home has taken hold across Connecticut — from Gold Coast estates in Greenwich and Darien to covered patios in West Hartford and Glastonbury.',
    },
    {
      slug:    'private-hibachi-connecticut-shoreline-outdoor-entertaining',
      title:   'Private Hibachi on the Connecticut Shoreline: Norwalk, Fairfield, Trumbull, and Madison',
      date:    '2026-05-15',
      excerpt: 'Connecticut\'s shoreline and Fairfield County\'s suburban communities have an outdoor entertaining culture that\'s a natural match for private hibachi.',
    },
  ],
  // Slot 2 — variant % 3 === 2 (Norwalk, Fairfield, Trumbull, Madison)
  [
    {
      slug:    'private-hibachi-connecticut-shoreline-outdoor-entertaining',
      title:   'Private Hibachi on the Connecticut Shoreline: Norwalk, Fairfield, Trumbull, and Madison',
      date:    '2026-05-15',
      excerpt: 'Connecticut\'s shoreline and Fairfield County\'s suburban communities have an outdoor entertaining culture that\'s a natural match for private hibachi.',
    },
    {
      slug:    'hibachi-at-home-connecticut-guide',
      title:   'Hibachi at Home in Connecticut: Greenwich, Darien, Hartford, and Beyond',
      date:    '2026-05-01',
      excerpt: 'Private hibachi at home has taken hold across Connecticut — from Gold Coast estates in Greenwich and Darien to covered patios in West Hartford and Glastonbury.',
    },
    {
      slug:    'private-hibachi-fairfield-county-stamford-westport',
      title:   'Private Hibachi in Fairfield County: Stamford, Westport, and the New Haven Connection',
      date:    '2026-05-08',
      excerpt: 'Stamford\'s hedge fund community and Westport\'s creative professionals have made private hibachi at home the preferred format for team dinners and milestone entertaining.',
    },
  ],
]

// ─── Exported functions ───────────────────────────────────────────────────────
export function getCtCityData(citySlug, displayName) {
  const city = CT_MAJOR_CITIES[citySlug]
  if (!city) return null
  const { v, profileIdx, nearby } = city
  const customMeta = CT_CUSTOM_META[citySlug]
  return {
    cityName:             displayName,
    stateAbbr:            'CT',
    stateName:            'Connecticut',
    stateSlug:            'connecticut',
    variant:              v % 3,
    heroImage:            CT_THEME_HEROES[v],
    heroSubtitle:         CT_HERO_SUBTITLES[v](displayName),
    heroH1Prefix:         CT_PROFILE_H1_PREFIXES[profileIdx],
    uniqueIntroVariant:   781 + profileIdx,
    uniqueWhyUsVariant:   v % 3,
    uniqueClosingVariant: 781 + profileIdx,
    ...(customMeta ? { metaTitle: customMeta.metaTitle, metaDescription: customMeta.metaDescription } : {}),
    testimonials:         CT_TESTIMONIALS[citySlug] || [],
    nearbyCities:         nearby,
    nearbyMajorCities:    ['Greenwich', 'Stamford', 'New Haven'],
  }
}

export function getCtBlogPosts(variant, count = 3) {
  return (CT_BLOG_POSTS[variant % 3] || []).slice(0, count)
}

export function getCtHowItWorks(citySlug) {
  return CT_HOW_IT_WORKS['default']
}

export function getCtSectionVariant(citySlug) {
  const city = CT_MAJOR_CITIES[citySlug]
  if (!city) return null
  const key = CT_THEME_KEYS[city.profileIdx]
  return CT_SECTION_VARIANTS[key] || CT_SECTION_VARIANTS['t0']
}

export function getCtCityImage(citySlug) {
  return CT_CITY_IMAGE_MAP[citySlug] || null
}

export function getCtSupportImages(citySlug) {
  return CT_SUPPORT_IMAGES[citySlug] || null
}
