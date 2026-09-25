// Kansas — 10 cities, 2 batches
// Batch 1 (profileIdx 0–4): Leawood, Overland Park, Olathe, Lenexa, Shawnee
// Batch 2 (profileIdx 5–9): Kansas City, Wichita, Topeka, Lawrence, Manhattan
//
// KS_INTRO_VARIANTS indices 759–764 (6 generics, one per theme)
// KS_CITY_INTROS indices 765–774 (10 city-specific)
// uniqueIntroVariant = 765 + profileIdx

// ─── H1 prefixes by profileIdx ────────────────────────────────────────────────
const KS_PROFILE_H1_PREFIXES = [
  'Hibachi at Home in',        // 0: Leawood
  'Hibachi at Home in',        // 1: Overland Park
  'Hibachi at Home in',        // 2: Olathe
  'Hibachi Catering in',       // 3: Lenexa
  'Mobile Hibachi in',         // 4: Shawnee
  'Private Hibachi Chef in',   // 5: Kansas City
  'Private Hibachi Chef in',   // 6: Wichita
  'Backyard Hibachi Party in', // 7: Topeka
  'Hibachi at Home in',        // 8: Lawrence
  'Hibachi Catering in',       // 9: Manhattan
]

// ─── Theme hero images ────────────────────────────────────────────────────────
const KS_THEME_HEROES = [
  '/pics/hibachi-private-chef-1.jpg', // T0: Johnson County Luxury
  '/pics/hibachi-shot-2.jpg',         // T1: KC Metro Family & Corporate
  '/pics/hibachi-photo-2.jpg',        // T2: Kansas City KS Urban
  '/pics/hibachi-at-home.jpg',        // T3: Wichita Metro
  '/pics/hibachi-event.jpg',          // T4: State Capital (Topeka)
  '/pics/hero-3.jpg',                 // T5: Kansas University Markets
]

// ─── Hero subtitles by theme ──────────────────────────────────────────────────
const KS_HERO_SUBTITLES = [
  (city) => `${city} estate dinners, Johnson County graduation parties, and executive KC events — your private teppanyaki chef arrives fully equipped`,
  (city) => `${city} graduation parties, family celebrations, and KC metro backyard entertaining — private hibachi at your home`,
  (city) => `${city} private chef for milestone celebrations, graduation parties, and corporate events — fully self-contained teppanyaki`,
  (city) => `${city} private hibachi chef for graduation parties, corporate events, and backyard celebrations — your chef comes to you`,
  (city) => `${city} backyard hibachi parties, graduation celebrations, and family events — your private chef arrives fully equipped`,
  (city) => `${city} graduation parties, campus celebrations, and family milestones — private hibachi at your home`,
]

// ─── How It Works (shared) ────────────────────────────────────────────────────
const KS_HOW_IT_WORKS = {
  headline:   (city) => `How Private Hibachi Works in ${city}`,
  footerNote: (city) => `Every ${city} event is confirmed with a deposit. Your date is locked the moment you book — no double-bookings, no last-minute uncertainty.`,
  steps: [
    { num: '01', title: 'Request a Quote',                desc: 'Call or text with your Kansas address, event date, and guest count. We respond with same-day pricing — whether you\'re in Leawood, Overland Park, Wichita, Lawrence, or anywhere in Kansas.' },
    { num: '02', title: 'Confirm Your Menu',              desc: 'Choose proteins — chicken, steak, shrimp, salmon — and add premium upgrades like filet mignon, lobster tail, Chilean sea bass, or wagyu. Fried rice, grilled vegetables, miso soup, yum yum sauce, ginger sauce, plates, and chopsticks are all included.' },
    { num: '03', title: 'Lock Your Date',                 desc: 'A deposit confirms your event immediately. Your Kansas date is reserved — no double-bookings, no cancellations.' },
    { num: '04', title: 'Chef Travels to You',            desc: 'Your chef arrives 20–30 minutes before the event with a fully self-contained propane teppan grill, all ingredients, and every piece of equipment. No gas hookup required at any Kansas property.' },
    { num: '05', title: 'Live Teppanyaki & Full Cleanup', desc: '90–120 minutes of live hibachi — fire tricks, the onion volcano, flying shrimp, every dish cooked to order. Full cleanup when dinner ends. Your Kansas property is left exactly as it was.' },
  ],
}

// ─── Section variants (6 themes) ─────────────────────────────────────────────
const KS_SECTION_VARIANTS = [
  // T0 — Johnson County Luxury
  {
    heroPill:         'Johnson County Private Chef',
    experiencePill:   'Beyond Any JoCo Restaurant',
    experiencePoints: (city) => [
      { icon: '🏡', title: `Your ${city} Home Is the Venue`,      desc: `No reservation required — your ${city} estate, covered pavilion, or backyard becomes an exclusive private teppanyaki dining room for your guests.` },
      { icon: '🌾', title: 'Johnson County Entertaining Standard', desc: `${city} and the Johnson County corridor set a distinctive standard for private entertaining. Our certified chefs deliver a premium live-fire teppanyaki experience that matches the occasion — from graduation estate dinners to Derby Day executive events.` },
      { icon: '🥩', title: 'Premium Proteins, Live Teppanyaki',   desc: 'Choose from chicken, steak, shrimp, salmon — or upgrade to filet mignon, lobster tail, Chilean sea bass, or wagyu. Every guest orders individually, cooked live at the teppan grill.' },
      { icon: '✨', title: 'Full Setup & Complete Cleanup',        desc: `Your chef arrives with the full self-contained setup, performs the complete teppanyaki experience, and leaves your ${city} property exactly as they found it.` },
    ],
    experienceImage:    '/pics/private-party-chef-6.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city}, Kansas home`,
    areasPill:          'Serving Greater Johnson County',
    areasHeadline:      (city) => `Private Hibachi in ${city} and Johnson County`,
    areasIntro: [
      (city) => `We serve ${city} and all of Johnson County — Overland Park, Olathe, Lenexa, Shawnee, Prairie Village, Mission Hills, and every surrounding community. If your outdoor space holds a grill, we come to you.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Johnson County Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Private Dining Experience ${city} Hosts Have Been Waiting For`,
    occasionSubtext:       'From Johnson County graduation parties and executive client dinners to Derby Day entertaining and milestone anniversaries, private hibachi is the KC metro\'s most memorable private dining experience',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Your Questions Answered`,
    testimonialSubheading: 'What Johnson County Hosts Are Saying',
  },
  // T1 — KC Metro Family & Corporate
  {
    heroPill:         'KC Metro Hibachi',
    experiencePill:   'Private Dining for the KC Suburbs',
    experiencePoints: (city) => [
      { icon: '🏡', title: `Your ${city} Home Is the Venue`,    desc: `No reservation required — your ${city} backyard, covered patio, or pool deck becomes a private teppanyaki dining room for your entire group at once.` },
      { icon: '🌻', title: 'KC Metro Suburban Entertaining',     desc: `${city} has the backyard infrastructure and the outdoor entertaining culture to make private hibachi the obvious choice over a restaurant. Covered patios, pool decks, and spacious suburban lots come standard across the KC metro suburbs.` },
      { icon: '🥩', title: 'Premium Proteins, Live Teppanyaki', desc: 'Choose from chicken, steak, shrimp, salmon — or upgrade to filet mignon, lobster tail, Chilean sea bass, or wagyu. Every guest orders individually, cooked live at the teppan grill.' },
      { icon: '✨', title: 'Full Setup & Complete Cleanup',      desc: `Your chef arrives with the full self-contained setup, performs the complete teppanyaki experience, and leaves your ${city} property exactly as they found it.` },
    ],
    experienceImage:    '/pics/hibachi-chef-home.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city}, Kansas home`,
    areasPill:          'Serving the KC Metro',
    areasHeadline:      (city) => `Private Hibachi in ${city} and the KC Metro`,
    areasIntro: [
      (city) => `We serve ${city} and the full KC metro — Overland Park, Leawood, Olathe, Lenexa, Shawnee, Merriam, Prairie Village, and every surrounding Johnson County community.`,
      (city) => `Same-day quotes available. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your KC Metro Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `Private Hibachi in ${city} — Your Home, Your Event`,
    occasionSubtext:       'From high school graduation parties and corporate team events to backyard birthdays and family reunions, private hibachi delivers the private dining experience no KC metro restaurant can provide for a group of 20',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Your Questions Answered`,
    testimonialSubheading: 'What KC Metro Hosts Are Saying',
  },
  // T2 — Kansas City KS Urban
  {
    heroPill:         'Kansas City Private Chef',
    experiencePill:   'Private Dining for Kansas City',
    experiencePoints: (city) => [
      { icon: '🏡', title: `Your ${city} Home Is the Venue`,  desc: `No reservation required — your ${city} backyard or outdoor space becomes a private teppanyaki dining room for your group.` },
      { icon: '🌆', title: `${city} Metro Entertaining`,      desc: `Kansas City KS sits at the center of the KC metro — Wyandotte County's urban core with equal access to Johnson County suburbs, downtown KC, and the broader metro entertainment corridor. Our private chef comes to you, fully self-contained.` },
      { icon: '🥩', title: 'Premium Proteins, Live Teppanyaki', desc: 'Choose from chicken, steak, shrimp, salmon — or upgrade to filet mignon, lobster tail, Chilean sea bass, or wagyu. Every guest orders individually, cooked live at the teppan grill.' },
      { icon: '✨', title: 'Full Setup & Complete Cleanup',    desc: `Your chef arrives with the full self-contained setup, performs the complete teppanyaki experience, and leaves your ${city} property exactly as they found it.` },
    ],
    experienceImage:    '/pics/hibachi-catering.jpg',
    experienceImageAlt: (city) => `Private hibachi chef event in ${city}, Kansas`,
    areasPill:          'Serving Kansas City & the KC Metro',
    areasHeadline:      (city) => `Private Hibachi in ${city} and the KC Metro`,
    areasIntro: [
      (city) => `We serve Kansas City KS and all of the KC metro — Johnson County, Wyandotte County, Shawnee, Lenexa, Overland Park, and every surrounding community.`,
      (city) => `Same-day quotes available. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Kansas City Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `Private Hibachi in ${city} — The Format That Works for Your Group`,
    occasionSubtext:       'From graduation parties and corporate team events to milestone celebrations and neighborhood gatherings, private hibachi delivers the group dining experience no Kansas City restaurant can provide in a private setting',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Your Questions Answered`,
    testimonialSubheading: 'What Kansas City Hosts Are Saying',
  },
  // T3 — Wichita Metro
  {
    heroPill:         'Wichita Private Chef',
    experiencePill:   'Private Dining for Wichita',
    experiencePoints: (city) => [
      { icon: '🏡', title: `Your ${city} Home Is the Venue`,       desc: `No reservation required — your ${city} backyard, covered patio, or pool deck becomes a private teppanyaki dining room for your guests.` },
      { icon: '✈️', title: 'Wichita Aviation & Corporate Culture', desc: `${city}'s aerospace and aviation industry — Boeing, Spirit AeroSystems, Cessna, Textron — has a year-round corporate entertaining calendar. Private hibachi at a Wichita home delivers the live-performance group dinner that no local restaurant can replicate in a private setting for 20.` },
      { icon: '🥩', title: 'Premium Proteins, Live Teppanyaki',    desc: 'Choose from chicken, steak, shrimp, salmon — or upgrade to filet mignon, lobster tail, Chilean sea bass, or wagyu. Every guest orders individually, cooked live at the teppan grill.' },
      { icon: '✨', title: 'Full Setup & Complete Cleanup',         desc: `Your chef arrives with the full self-contained setup, performs the complete teppanyaki experience, and leaves your ${city} property exactly as they found it.` },
    ],
    experienceImage:    '/pics/hibachi-chef-2.jpg',
    experienceImageAlt: (city) => `Private hibachi chef in ${city}, Kansas`,
    areasPill:          'Serving Wichita & South-Central Kansas',
    areasHeadline:      (city) => `Private Hibachi in ${city} and South-Central Kansas`,
    areasIntro: [
      (city) => `We serve ${city} and the greater Wichita metro — Derby, Andover, Goddard, Haysville, Park City, Newton, El Dorado, and every surrounding south-central Kansas community.`,
      (city) => `Same-day quotes available. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Wichita Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Private Hibachi Experience ${city} Has Been Looking For`,
    occasionSubtext:       'From WSU graduation parties and aerospace corporate team events to milestone birthday dinners and family reunions, private hibachi delivers the group dining experience no Wichita restaurant can provide in a private setting',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Your Questions Answered`,
    testimonialSubheading: 'What Wichita Hosts Are Saying',
  },
  // T4 — State Capital (Topeka)
  {
    heroPill:         'Topeka Hibachi',
    experiencePill:   'Private Hibachi in Topeka',
    experiencePoints: (city) => [
      { icon: '🏡', title: `Your ${city} Home Is the Venue`,      desc: `No reservation required — your ${city} backyard, covered patio, or pool deck becomes a private teppanyaki dining room for your guests.` },
      { icon: '🏛️', title: `${city} Capital City Entertaining`,  desc: `Topeka's established residential corridors — Westboro, Indian Hills, and the Shawnee County suburban neighborhoods — have the outdoor entertaining infrastructure and the milestone-occasion mindset that makes private hibachi the natural choice when a restaurant reservation won't do.` },
      { icon: '🥩', title: 'Premium Proteins, Live Teppanyaki',   desc: 'Choose from chicken, steak, shrimp, salmon — or upgrade to filet mignon, lobster tail, Chilean sea bass, or wagyu. Every guest orders individually, cooked live at the teppan grill.' },
      { icon: '✨', title: 'Full Setup & Complete Cleanup',        desc: `Your chef arrives with the full self-contained setup, performs the complete teppanyaki experience, and leaves your ${city} property exactly as they found it.` },
    ],
    experienceImage:    '/pics/hibachi-pool-party.jpg',
    experienceImageAlt: (city) => `Backyard hibachi party in ${city}, Kansas`,
    areasPill:          'Serving Topeka & Northeast Kansas',
    areasHeadline:      (city) => `Private Hibachi in ${city} and Northeast Kansas`,
    areasIntro: [
      (city) => `We serve ${city} and the surrounding northeast Kansas region — Lawrence (30 miles east), Manhattan (60 miles north), Auburn, Silver Lake, Oskaloosa, and every Shawnee County community.`,
      (city) => `Same-day quotes available. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Topeka Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `Backyard Hibachi in ${city} — The Celebration Your Guests Will Remember`,
    occasionSubtext:       'From Washburn University graduation parties and state government team events to milestone birthday backyard parties and family reunions, private hibachi brings the teppanyaki experience to your Topeka home',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Your Questions Answered`,
    testimonialSubheading: 'What Topeka Hosts Are Saying',
  },
  // T5 — Kansas University Markets
  {
    heroPill:         'Kansas University Hibachi',
    experiencePill:   'Beyond Any Lawrence or Manhattan Restaurant',
    experiencePoints: (city) => [
      { icon: '🏡', title: `Your ${city} Home Is the Venue`,       desc: `No reservation required — your ${city} backyard or covered patio becomes a private teppanyaki dining room for your graduation family.` },
      { icon: '🎓', title: `${city} University Graduation Market`, desc: `KU and K-State commencement weekends bring thousands of out-of-state families into Lawrence and Manhattan simultaneously. Restaurants can't absorb that demand in a private setting. Private hibachi at home solves the problem entirely.` },
      { icon: '🥩', title: 'Premium Proteins, Live Teppanyaki',    desc: 'Choose from chicken, steak, shrimp, salmon — or upgrade to filet mignon, lobster tail, Chilean sea bass, or wagyu. Every guest orders individually, cooked live at the teppan grill.' },
      { icon: '✨', title: 'Full Setup & Complete Cleanup',         desc: `Your chef arrives with the full self-contained setup, performs the complete teppanyaki experience, and leaves your ${city} property exactly as they found it.` },
    ],
    experienceImage:    '/pics/hibachi-to-you.jpg',
    experienceImageAlt: (city) => `Private hibachi for ${city}, Kansas graduation party`,
    areasPill:          'Serving Lawrence, Manhattan & Northeast Kansas',
    areasHeadline:      (city) => `Private Hibachi in ${city} and Northeast Kansas`,
    areasIntro: [
      (city) => `We serve ${city} and all of northeast and north-central Kansas — Lawrence, Manhattan, Topeka, Salina, Junction City, and every surrounding community along the I-70 corridor.`,
      (city) => `Same-day quotes available for most events. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Kansas Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `Private Hibachi for ${city} Graduation Parties and Kansas Milestones`,
    occasionSubtext:       'From KU and K-State graduation parties to alumni group dinners, milestone anniversaries, and family celebrations, private hibachi delivers the group dining experience no Lawrence or Manhattan restaurant can provide in a private setting',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Your Questions Answered`,
    testimonialSubheading: 'What Kansas University Community Hosts Are Saying',
  },
]

// ─── Major cities (Batch 1) ───────────────────────────────────────────────────
const KS_MAJOR_CITIES = {
  'leawood':       { v: 0, profileIdx: 0, nearby: ['Overland Park', 'Olathe', 'Prairie Village'] },
  'overland-park': { v: 0, profileIdx: 1, nearby: ['Leawood', 'Lenexa', 'Shawnee'] },
  'olathe':        { v: 1, profileIdx: 2, nearby: ['Overland Park', 'Shawnee', 'Lenexa'] },
  'lenexa':        { v: 1, profileIdx: 3, nearby: ['Overland Park', 'Shawnee', 'Olathe'] },
  'shawnee':       { v: 1, profileIdx: 4, nearby: ['Lenexa', 'Overland Park', 'Merriam'] },
}

// ─── Display name overrides ────────────────────────────────────────────────────
const KS_CITY_DISPLAY_NAMES = {}

// ─── Testimonials ─────────────────────────────────────────────────────────────
const KS_TESTIMONIALS = {
  'leawood': [
    {
      text:     'We hosted our daughter\'s high school graduation party at our Leawood home — 24 family members from Chicago, Dallas, and St. Louis. Every Johnson County restaurant with a private room was booked by March for May. The private hibachi chef set up on our covered pavilion, performed the full teppanyaki dinner for the whole family, and it was the most memorable graduation celebration in our family. We\'ve already booked for our son\'s graduation next year.',
      name:     'Sarah M.',
      city:     'Leawood, KS',
      event:    'Graduation Party',
      initials: 'SM',
    },
    {
      text:     'Our executive team had a client appreciation dinner at my Hallbrook home — 16 guests. We\'d done the Johnson County restaurant circuit. Private hibachi at your own home is a completely different format. Live performance at the table, every guest\'s order cooked individually, no minimum-spend guarantee — just a per-person cost. Our clients talked about it for weeks.',
      name:     'David K.',
      city:     'Leawood, KS',
      event:    'Executive Client Dinner',
      initials: 'DK',
    },
    {
      text:     'My husband\'s 50th birthday at our home in Mission Farms — 20 of our closest friends. We\'ve tried Sullivan\'s and every Johnson County restaurant that claims to do private dining. Nothing for a group of 20 in a truly private setting. The chef set up on our back pavilion, performed for the whole group, and my husband said it was the best birthday dinner of his life.',
      name:     'Patricia L.',
      city:     'Leawood, KS',
      event:    '50th Birthday Party',
      initials: 'PL',
    },
  ],
  'overland-park': [
    {
      text:     'Our son graduated from Blue Valley and we had 22 family members from Denver, Kansas City, and Texas. I started calling restaurants in February and every private room in Overland Park and Leawood was gone for May. The private hibachi chef at our home in the Tomahawk Creek area set up on the back deck and performed for everyone at once. A better event than anything I could have booked at a restaurant.',
      name:     'Karen T.',
      city:     'Overland Park, KS',
      event:    'Blue Valley Graduation Party',
      initials: 'KT',
    },
    {
      text:     'My wife\'s 40th at our Overland Park home — 18 guests. We didn\'t want a restaurant on a Saturday night competing with every other table. The private hibachi chef arrived, set up on our patio, and the fire tricks and live performance made it a completely different kind of birthday. Our guests said it was unlike any dinner party they\'d ever attended.',
      name:     'Michael H.',
      city:     'Overland Park, KS',
      event:    '40th Birthday Celebration',
      initials: 'MH',
    },
    {
      text:     'Our tech team had a year-end celebration at a colleague\'s home in Overland Park — 20 of us. We\'d done team dinners at every Overland Park spot. Nothing creates the shared experience that private hibachi does. Everyone at the same outdoor table, the chef performing live, individual protein choices — the best team event we\'ve done.',
      name:     'Jennifer A.',
      city:     'Overland Park, KS',
      event:    'Corporate Team Event',
      initials: 'JA',
    },
  ],
  'olathe': [
    {
      text:     'My daughter graduated from Olathe North and we had 20 family members coming in for the weekend. Restaurants for groups that size on graduation weekend in Olathe book out fast. The private hibachi chef set up in our backyard off 119th Street and performed for the whole family. Best graduation celebration we\'ve hosted.',
      name:     'Rebecca J.',
      city:     'Olathe, KS',
      event:    'Olathe North Graduation Party',
      initials: 'RJ',
    },
    {
      text:     'My son\'s 16th birthday — 18 kids and a few parents at our Olathe home in Blackwood Creek. Nobody had experienced private hibachi before. The chef performed the full show — volcano, fire tricks, flying shrimp — for the whole group. My son said it was the coolest birthday party he\'d ever attended.',
      name:     'Tom W.',
      city:     'Olathe, KS',
      event:    '16th Birthday Party',
      initials: 'TW',
    },
    {
      text:     'We had a Johnson County family reunion at my parents\' home in Olathe — 26 family members, multiple generations. Getting a group that size into a private dining room in the KC metro is a real challenge. The private hibachi chef came to us. Everyone from the youngest kids to the grandparents was entertained and fed at the same time. We\'ll never do a family reunion at a restaurant again.',
      name:     'Lisa B.',
      city:     'Olathe, KS',
      event:    'Family Reunion',
      initials: 'LB',
    },
  ],
  'lenexa': [
    {
      text:     'Our K-10 corridor tech team had a quarterly milestone celebration at a colleague\'s home in Lenexa — 18 people. We looked at event spaces and restaurants. None of them gave us the private setting, the entertainment format, or the individual ordering that private hibachi catering provides. Our team said it was the best company event they\'d attended.',
      name:     'Andrew C.',
      city:     'Lenexa, KS',
      event:    'Corporate Team Event',
      initials: 'AC',
    },
    {
      text:     'Our daughter graduated and we had 20 family members from Missouri, Iowa, and Colorado for the weekend. Every private dining option in Johnson County was booked for May. The private hibachi catering chef came to our home in the Southlake area and performed for the whole family at once. Better than any restaurant could have done.',
      name:     'Susan F.',
      city:     'Lenexa, KS',
      event:    'Graduation Party',
      initials: 'SF',
    },
    {
      text:     'My husband\'s milestone birthday — 22 guests at our Lenexa home. The chef set up in the backyard, performed the full teppanyaki show, and everyone ordered exactly what they wanted. My husband said it was the most fun dinner party we\'d ever hosted. We\'re already planning a holiday party the same way.',
      name:     'Michelle R.',
      city:     'Lenexa, KS',
      event:    'Milestone Birthday',
      initials: 'MR',
    },
  ],
  'shawnee': [
    {
      text:     'My daughter\'s 18th birthday at our Shawnee home — 20 friends and family. The mobile hibachi chef set up on our patio off Shawnee Mission Parkway, performed the full teppanyaki show, and my daughter said it was the best birthday of her life. The fire tricks and flying shrimp alone were worth it.',
      name:     'Christine D.',
      city:     'Shawnee, KS',
      event:    '18th Birthday',
      initials: 'CD',
    },
    {
      text:     'Our son graduated from Mill Valley and we had 18 family members for the weekend. The private hibachi chef came to our Shawnee home, set up on the covered porch, and performed for everyone at once. Our guests from Iowa and Colorado said they\'d never seen anything like it. We\'ve already recommended it to three other Shawnee families.',
      name:     'Greg T.',
      city:     'Shawnee, KS',
      event:    'Mill Valley Graduation Party',
      initials: 'GT',
    },
    {
      text:     'Family Christmas dinner at our Shawnee home — 24 family members. We needed something that could seat and entertain everyone at once. The mobile hibachi chef set up in our attached garage with the door open, performed the full teppanyaki dinner, and it became the new Christmas tradition. Our family already asked if we can do it again next year.',
      name:     'Diane M.',
      city:     'Shawnee, KS',
      event:    'Family Holiday Dinner',
      initials: 'DM',
    },
  ],
}

// ─── City experience images ────────────────────────────────────────────────────
const KS_CITY_IMAGE_MAP = {
  'leawood':       { src: '/pics/hibachi-photo-1.jpg',  alt: () => `Private hibachi chef at a Leawood, Kansas home` },
  'overland-park': { src: '/pics/hero-1.jpg',           alt: () => `Hibachi at home in Overland Park, Kansas` },
  'olathe':        { src: '/pics/hero-2.jpg',           alt: () => `Hibachi at home in Olathe, Kansas` },
  'lenexa':        { src: '/pics/hibachi-dallas.jpg',   alt: () => `Hibachi catering in Lenexa, Kansas` },
  'shawnee':       { src: '/pics/mobile-hibachi.jpg',   alt: () => `Mobile hibachi chef in Shawnee, Kansas` },
  // Batch 2
  'kansas-city':   { src: '/pics/hibachi-pic-2.jpg',    alt: () => `Private hibachi chef in Kansas City, Kansas` },
  'wichita':       { src: '/pics/hibachi-colorado.jpg', alt: () => `Private hibachi chef in Wichita, Kansas` },
  'topeka':        { src: '/pics/hibachi-pic-3.jpg',    alt: () => `Backyard hibachi party in Topeka, Kansas` },
  'lawrence':      { src: '/pics/hero-4.jpg',           alt: () => `Hibachi at home in Lawrence, Kansas` },
  'manhattan':     { src: '/pics/hibachi-miami.jpg',    alt: () => `Hibachi catering in Manhattan, Kansas` },
}

// ─── Support images ────────────────────────────────────────────────────────────
const KS_SUPPORT_IMAGES = {
  'leawood': {
    testimonial: {
      src:        '/pics/backyard-hibachi-2.jpg',
      alt:        () => `Private hibachi at a Leawood, Kansas estate`,
      caption:    'Leawood Johnson County estate and graduation events',
      trustBadge: 'Trusted by Leawood Hosts',
      intro:      (city) => `Leawood hosts — Mission Farms estate families, Hallbrook executives, and Johnson County households — have found that private hibachi delivers the premium live-performance group dining experience no JoCo restaurant can replicate in a private setting. Here's what Leawood hosts are saying:`,
    },
    cta: { src: null, alt: () => `Private hibachi chef at a Leawood, Kansas home`, caption: 'The Leawood private dining format' },
  },
  'overland-park': {
    testimonial: {
      src:        '/pics/hibachi-catering-3.jpg',
      alt:        () => `Hibachi at home in Overland Park, Kansas`,
      caption:    'Overland Park Blue Valley graduation and milestone events',
      trustBadge: 'Trusted by Overland Park Hosts',
      intro:      (city) => `Overland Park hosts — Blue Valley families, Tomahawk Creek corridor households, and OP professionals — have found that private hibachi at home delivers the private group dining experience that no Overland Park restaurant can provide for 20. Here's what Overland Park hosts are saying:`,
    },
    cta: { src: null, alt: () => `Hibachi at home in Overland Park, Kansas`, caption: 'The Overland Park private dining format' },
  },
  'olathe': {
    testimonial: {
      src:        '/pics/private-hibachi.jpg',
      alt:        () => `Hibachi at home in Olathe, Kansas`,
      caption:    'Olathe graduation and family events',
      trustBadge: 'Trusted by Olathe Hosts',
      intro:      (city) => `Olathe hosts — Cedar Creek families, Blackwood Creek households, and south Johnson County communities — have found that private hibachi delivers the group dining experience that no Olathe restaurant can provide for 20 in a private setting. Here's what Olathe hosts are saying:`,
    },
    cta: { src: null, alt: () => `Hibachi at home in Olathe, Kansas`, caption: 'The Olathe private dining format' },
  },
  'lenexa': {
    testimonial: {
      src:        '/pics/hibachi-raleigh.jpg',
      alt:        () => `Hibachi catering in Lenexa, Kansas`,
      caption:    'Lenexa corporate and graduation catering events',
      trustBadge: 'Trusted by Lenexa Hosts',
      intro:      (city) => `Lenexa hosts — K-10 corridor tech teams, Southlake area households, and Lenexa City Center professionals — have found that private hibachi catering delivers the live-performance group dining experience no Lenexa restaurant can provide in a private setting. Here's what Lenexa hosts are saying:`,
    },
    cta: { src: null, alt: () => `Hibachi catering in Lenexa, Kansas`, caption: 'The Lenexa catering format' },
  },
  'shawnee': {
    testimonial: {
      src:        '/pics/traveling-hibachi.jpg',
      alt:        () => `Mobile hibachi chef in Shawnee, Kansas`,
      caption:    'Shawnee mobile hibachi events and milestone parties',
      trustBadge: 'Trusted by Shawnee Hosts',
      intro:      (city) => `Shawnee hosts — Mill Creek families, Shawnee Mission Parkway communities, and west Johnson County households — have found that mobile hibachi delivers the group dining experience that no Shawnee restaurant can provide for a private group of 20. Here's what Shawnee hosts are saying:`,
    },
    cta: { src: null, alt: () => `Mobile hibachi chef in Shawnee, Kansas`, caption: 'The Shawnee mobile hibachi format' },
  },
}

// ─── Custom meta ───────────────────────────────────────────────────────────────
const KS_CUSTOM_META = {
  'leawood': {
    title: 'Hibachi at Home in Leawood, KS | Private Chef for Johnson County Events',
    desc:  'Hibachi at home in Leawood, Kansas for graduation parties, executive dinners, and milestone celebrations. Your private teppanyaki chef arrives fully equipped to your Johnson County estate.',
  },
  'overland-park': {
    title: 'Hibachi at Home in Overland Park, KS | Private Chef for Johnson County Celebrations',
    desc:  'Hibachi at home in Overland Park, Kansas for Blue Valley graduation parties, birthday milestones, and corporate events. Your private chef comes to your Overland Park home.',
  },
  'olathe': {
    title: 'Hibachi at Home in Olathe, KS | Private Chef for Johnson County Parties',
    desc:  'Hibachi at home in Olathe, Kansas for high school graduation parties, family reunions, and backyard birthdays. Your private teppanyaki chef comes to your Olathe home.',
  },
  'lenexa': {
    title: 'Hibachi Catering in Lenexa, KS | Private Chef for K-10 Corridor Events',
    desc:  'Hibachi catering in Lenexa, Kansas for corporate team events, graduation parties, and holiday celebrations. Your private chef arrives fully equipped to your Lenexa home.',
  },
  'shawnee': {
    title: 'Mobile Hibachi in Shawnee, KS | Private Chef for KC Metro Events',
    desc:  'Mobile hibachi in Shawnee, Kansas for birthday parties, graduation celebrations, and family gatherings. Your private teppanyaki chef comes to you fully self-contained.',
  },
}

// =============================================================================
// INTRO VARIANTS (exported — appended to global INTRO_VARIANTS array)
// =============================================================================

// ─── KS_INTRO_VARIANTS — 6 generic entries (indices 759–764) ─────────────────
export const KS_INTRO_VARIANTS = [
  // T0 (759) — Johnson County Luxury
  {
    headline: () => 'Johnson County Has Found a Private Dining Format That Matches Its Outdoor Entertaining Infrastructure',
    opening:  () => 'Johnson County is home to some of the most thoughtfully designed outdoor entertaining spaces in the Midwest. Estate properties in Leawood and Overland Park come with covered pavilions, pool decks, and backyard entertaining areas that were built for exactly the kind of event that private hibachi delivers. The gap has always been the format — a private chef who comes to you, fully self-contained, with no restaurant minimum and no shared dining room.',
    middle:   () => 'Our private hibachi chef arrives with everything required for a complete teppanyaki dinner: a propane-powered teppan grill, all proteins, fried rice, grilled vegetables, miso soup, yum yum sauce, ginger sauce, plates, and chopsticks. Setup takes 20 minutes. Dinner runs 90–120 minutes. Full cleanup before we leave.',
    closing:  () => 'Johnson County hosts have found that private hibachi is the format their outdoor spaces were built for. Blue Valley and SM graduation season and spring peak dates fill quickly — secure your event today.',
  },
  // T1 (760) — KC Metro Family & Corporate
  {
    headline: () => 'The KC Metro Suburbs Have the Backyard Infrastructure. Now They Have the Private Chef Format to Match.',
    opening:  () => 'Olathe, Lenexa, and Shawnee have the backyard infrastructure that makes private hibachi the obvious choice over a restaurant. Covered patios, pool decks, and spacious suburban lots are standard across the KC metro suburbs — and they\'ve been waiting for a private dining format that uses them. High school graduation parties for groups of 18, corporate team events that deserve more than a restaurant banquet room, and backyard birthdays that no Kansas City restaurant can replicate in a private setting all fit the same format.',
    middle:   () => 'One chef. One self-contained propane grill. Your choice of proteins cooked to order. Fried rice, grilled vegetables, miso soup, and sauces for the full group. Setup in 20 minutes, dinner in 90, cleanup before we leave.',
    closing:  () => 'We serve all of the KC metro — Johnson County, Wyandotte County, and every surrounding community. High school graduation season (May–June) books 3–5 weeks ahead.',
  },
  // T2 (761) — Kansas City KS Urban
  {
    headline: () => 'Kansas City KS Has Found a Private Group Dining Format That Works on Both Sides of State Line Road',
    opening:  () => 'Kansas City, Kansas sits at the crossroads of the KC metro — Wyandotte County\'s urban core with equal access to Johnson County suburbs, downtown KC, and the broader metro entertainment corridor. Private hibachi at a Kansas City KS home brings the full teppanyaki experience to your side of the metro without requiring a reservation, a private room, or a minimum spend guarantee.',
    middle:   () => 'We bring everything: a self-contained propane teppan grill, all proteins, fried rice, vegetables, miso soup, sauces, plates, and chopsticks. No venue fee. No gas hookup required. Groups of 10–28 served at your home, patio, or outdoor space.',
    closing:  () => 'We serve Kansas City KS and all of the KC metro. Same-day quotes available; most dates book 2–4 weeks out.',
  },
  // T3 (762) — Wichita Metro
  {
    headline: () => 'Wichita\'s Aviation and Corporate Community Has Found a Private Dining Format That Works for Groups of 20',
    opening:  () => 'Wichita is Kansas\'s largest city and its most diverse private event market — aerospace and aviation corporate entertaining, WSU and Friends University graduation parties, and a year-round outdoor entertaining culture shaped by the Kansas plains climate and the established residential corridors in east Wichita, Derby, and Andover. When a Boeing team milestone celebration for 20 or a WSU graduation party for 24 family members demands more than a Wichita restaurant can deliver in a private setting, private hibachi at your home solves the problem.',
    middle:   () => 'Our chef arrives fully equipped to your Wichita property: a propane teppan grill, all proteins, fried rice, vegetables, miso soup, and sauces. No gas hookup required. Groups of 10–28 seated at your outdoor space for a complete live teppanyaki experience.',
    closing:  () => 'We serve Wichita and all of the greater Wichita metro — Derby, Andover, Park City, Goddard, Haysville, and surrounding communities. WSU graduation season books 4–5 weeks ahead.',
  },
  // T4 (763) — State Capital (Topeka)
  {
    headline: () => 'Topeka\'s Backyard Entertaining Culture Has Found a Private Dining Format That Matches the Occasion',
    opening:  () => 'Topeka\'s residential culture — the Westboro and Indian Hills neighborhoods, the Shawnee County suburban corridors, and the Washburn University community — has the backyard infrastructure and the milestone-occasion mindset that makes private hibachi the natural choice when a restaurant reservation won\'t do. A Washburn graduation party that brings 22 family members from across the state. A state government team event for 18 that needs more than a banquet room. A 70th birthday backyard party that deserves a live performance instead of a shared dining room.',
    middle:   () => 'We bring everything to your Topeka property: a self-contained propane grill, all proteins, fried rice, vegetables, miso soup, yum yum and ginger sauces, plates, and chopsticks. Groups of 10–28 served outdoors, weather permitting.',
    closing:  () => 'We serve Topeka and the surrounding Shawnee County area. Lawrence is 30 miles east — we serve both communities regularly. Spring and summer events book 3–4 weeks out.',
  },
  // T5 (764) — Kansas University Markets
  {
    headline: () => 'Lawrence and Manhattan Have Found the Answer to the KU and K-State Graduation Restaurant Problem',
    opening:  () => 'KU commencement in Lawrence and K-State commencement in Manhattan are Kansas\'s two most concentrated graduation restaurant events. Both universities draw families from across the Midwest and the country for commencement weekend — and both cities have restaurant capacity that was designed for a normal Saturday night, not for thousands of extra guests arriving simultaneously. Private hibachi at your Lawrence or Manhattan home solves the problem before it starts.',
    middle:   () => 'One chef. One self-contained grill. Your choice of proteins served fresh to your group on your patio or in your backyard — no reservation, no minimum, no shared dining room. Families flying in from Chicago, Dallas, and Denver for their graduate\'s weekend get the private celebration they came for.',
    closing:  () => 'We serve Lawrence, Manhattan, Topeka, and all of northeast and north-central Kansas. KU spring commencement and K-State graduation dates book 4–6 weeks ahead — secure your event early.',
  },
]

// ─── KS_CLOSING_VARIANTS — 6 generic (indices 759–764) ────────────────────────
export const KS_CLOSING_VARIANTS = [
  // T0 (759) — Johnson County Luxury
  {
    headline:     (city) => `Book Your ${city} Private Hibachi Event`,
    sub:          (city) => `Johnson County graduation parties, executive dinners, and ${city} milestone celebrations — your private chef arrives fully equipped`,
    urgency:      'Johnson County graduation season and spring peak dates fill 4–6 weeks ahead — secure your event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // T1 (760) — KC Metro Family & Corporate
  {
    headline:     (city) => `Book Your ${city} Hibachi Event`,
    sub:          (city) => `KC metro graduation parties, backyard birthdays, and ${city} family celebrations — your private chef comes to your home`,
    urgency:      'KC metro high school graduation season (May–June) books 3–5 weeks ahead — reserve your date early.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // T2 (761) — Kansas City KS Urban
  {
    headline:     (city) => `Book Your ${city} Private Hibachi Event`,
    sub:          (city) => `Kansas City graduation parties, corporate team events, and ${city} milestone celebrations — your private chef arrives fully equipped`,
    urgency:      'KC metro spring and summer events book 3–4 weeks ahead — contact us early for the best availability.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // T3 (762) — Wichita Metro
  {
    headline:     (city) => `Book Your ${city} Hibachi Event`,
    sub:          (city) => `Wichita graduation parties, corporate events, and ${city} backyard celebrations — your private chef comes to you`,
    urgency:      'WSU graduation weekend and spring peak season book 4–5 weeks out — reserve your date early.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // T4 (763) — State Capital
  {
    headline:     (city) => `Book Your ${city} Hibachi Event`,
    sub:          (city) => `Topeka graduation celebrations, backyard parties, and ${city} family events — your private chef arrives fully equipped`,
    urgency:      'Spring and summer events in Topeka book 3–4 weeks ahead — contact us to lock in your date.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // T5 (764) — University Markets
  {
    headline:     (city) => `Book Your ${city} Hibachi Event`,
    sub:          (city) => `KU and K-State graduation parties, alumni dinners, and ${city} milestone events — your private chef arrives fully equipped`,
    urgency:      'KU and K-State commencement dates book 4–6 weeks ahead — secure your graduation weekend date now.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
]

// ─── KS_CITY_INTROS — city-specific (Batch 1: indices 765–769) ────────────────
export const KS_CITY_INTROS = [
  // 765 — Leawood
  {
    headline: () => 'Leawood\'s Johnson County Estates Have Found the Private Chef Format They Were Built For',
    opening:  () => 'Leawood sits at the southern edge of Johnson County — one of the wealthiest counties in the Midwest — and has the outdoor entertaining infrastructure to match. Homes in the Town Center corridor, Hallbrook, and the Mission Farms neighborhood come with covered pavilions, pool decks, and backyard spaces designed for exactly the kind of private event that private hibachi delivers. The only thing missing was a chef who comes to you.',
    middle:   () => 'Private hibachi graduation parties that bring 24 family members from Chicago and Dallas when every Johnson County restaurant is booked by March. Executive client dinners for 16 at your Hallbrook estate when you want something more memorable than the usual JoCo restaurant circuit. Milestone birthday celebrations for the guest who has seen every Johnson County menu. All of it fits the same format on your own patio.',
    closing:  () => 'We serve Leawood, Overland Park, Olathe, Prairie Village, Mission Hills, and all of Johnson County. Blue Valley and SM school graduation season books 4–6 weeks ahead — secure your Leawood event today.',
  },
  // 766 — Overland Park
  {
    headline: () => 'Overland Park Has the Backyard Space. Now It Has the Private Chef Format to Match.',
    opening:  () => 'Overland Park is Johnson County\'s largest city and the Kansas side\'s answer to every "where do we take 20 people for a private dinner?" question. The answer used to involve driving to Kansas City, MO or finding a restaurant with a private room that costs more and delivers less. Private hibachi at your Overland Park home changes that equation entirely. Your Blue Valley backyard deck, your Tomahawk Creek covered patio, or your Lionsgate area pavilion becomes the private dining room — and the chef comes to you.',
    middle:   () => 'One chef arrives at your property with a self-contained propane teppan grill, all proteins, fried rice, vegetables, miso soup, and sauces. No gas hookup required. Groups of 10–28 served outdoors while the chef performs live teppanyaki for every guest at once.',
    closing:  () => 'Overland Park is one of our most active Kansas City metro suburbs. Blue Valley graduation season (May–June), corporate year-end events (November–December), and spring milestone celebrations book 3–5 weeks ahead. We serve all of Overland Park and surrounding Johnson County communities.',
  },
  // 767 — Olathe
  {
    headline: () => 'Olathe\'s Growing Residential Corridors Have Found a Private Dining Format That Works for Groups of 20',
    opening:  () => 'Olathe is one of the fastest-growing cities in Kansas — and the fastest-growing city in Johnson County. Its residential neighborhoods south of 119th Street have the backyard infrastructure for private hibachi: covered patios, pool decks, and large suburban lots that are standard in the Cedar Creek, Blackwood Creek, and Lakeshore communities. Olathe North, Olathe South, Olathe East, and Olathe West collectively graduate thousands of seniors each May — and every local restaurant with a private room fills up by March.',
    middle:   () => 'We bring the full hibachi experience directly to your Olathe property. One chef. One self-contained grill. Chicken, steak, shrimp, salmon, and premium upgrades ordered individually at the grill. Fried rice, vegetables, miso soup, and sauces for the full group. Setup in 20 minutes, dinner in 90, cleanup before we leave.',
    closing:  () => 'We serve Olathe and all of south Johnson County — De Soto, Gardner, Edgerton, and every surrounding community. Olathe high school graduation season is one of the largest in the KC metro — book 3–5 weeks ahead for May dates.',
  },
  // 768 — Lenexa
  {
    headline: () => 'Lenexa\'s K-10 Corridor Has Found a Private Group Dining Format That Fits the Occasion',
    opening:  () => 'Lenexa\'s position along the K-10 corridor — between Overland Park and Shawnee — makes it one of the KC metro\'s most active corporate and family private event markets. The combination of technology and logistics employers along the corridor, the Lenexa City Center development, and a residential community with strong private entertaining culture creates consistent demand for a catering format that no restaurant can match. Private hibachi catering at your Lenexa home is that format.',
    middle:   () => 'Private hibachi catering in Lenexa means one chef arrives at your home fully self-contained — no venue kitchen required, no gas hookup, no minimum spend guarantee. Groups of 10–30 served teppanyaki-style with individual protein orders, fried rice, vegetables, miso soup, and sauces.',
    closing:  () => 'We serve Lenexa and the full K-10 corridor — Shawnee, Overland Park, and every surrounding Johnson County community. Corporate team events, neighborhood celebrations, and Lenexa high school graduation parties book 3–5 weeks ahead.',
  },
  // 769 — Shawnee
  {
    headline: () => 'Shawnee Has the Patio Space. Our Mobile Hibachi Chef Brings the Rest.',
    opening:  () => 'Shawnee\'s residential neighborhoods — from the Mill Creek area near 75th Street to the newer developments west of Shawnee Mission Parkway — have the backyard space and the outdoor entertaining culture that makes private hibachi work. Mill Valley graduation parties for 20 family members when every nearby restaurant is already booked. Birthday celebrations for the guest who\'s had every KC metro dining experience except this one. Holiday dinners that actually seat the whole family together at once.',
    middle:   () => 'Our mobile hibachi chef comes to you in Shawnee with a fully self-contained propane teppan grill, all proteins, fried rice, vegetables, miso soup, and sauces. No venue required. No restaurant minimum. Guests order their own proteins at the grill — chicken, steak, shrimp, salmon, or premium upgrades — and the chef performs the full teppanyaki experience from your patio or backyard.',
    closing:  () => 'Shawnee is centrally located for KC metro serving — we cover Shawnee, De Soto, Merriam, Roeland Park, Mission, and every surrounding community. Most events book 2–4 weeks out; spring graduation season books faster.',
  },
]

// ─── KS_CITY_CLOSINGS — city-specific (Batch 1: indices 765–769) ──────────────
export const KS_CITY_CLOSINGS = [
  // 765 — Leawood
  {
    headline:     () => 'Ready to Host Your Leawood Event?',
    sub:          () => 'Call or text us — same-day quotes, flexible menu options, and full cleanup included.',
    urgency:      'Leawood spring graduation and Memorial Day events book 4–6 weeks ahead — reserve your date now.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 766 — Overland Park
  {
    headline:     () => 'Book Your Overland Park Event',
    sub:          () => 'Call or text us for same-day pricing — we serve all of Overland Park and Blue Valley.',
    urgency:      'Blue Valley and SM school graduation season books out fast — plan 4–5 weeks ahead for May dates.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 767 — Olathe
  {
    headline:     () => 'Book Your Olathe Hibachi Event',
    sub:          () => 'Call or text for same-day pricing on your Olathe or south Johnson County event.',
    urgency:      'Olathe high school graduation season is one of the largest in the metro — book 4–5 weeks ahead for May.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 768 — Lenexa
  {
    headline:     () => 'Book Your Lenexa Hibachi Event',
    sub:          () => 'Call or text for a same-day quote — we serve Lenexa and the full K-10 corridor.',
    urgency:      'Lenexa corporate and graduation season events book 3–5 weeks ahead — contact us early for peak dates.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 769 — Shawnee
  {
    headline:     () => 'Book Your Shawnee Event',
    sub:          () => 'Call or text for same-day pricing — we cover Shawnee, Merriam, Roeland Park, and surrounding communities.',
    urgency:      'Spring and summer events in Shawnee book 3–4 weeks out — secure your date early for peak season.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
]

// ─── Blog posts (populated after blogs are written) ───────────────────────────
// Slot 0 (v%3=0): Leawood, Overland Park, Wichita
// Slot 1 (v%3=1): Olathe, Lenexa, Shawnee, Topeka
// Slot 2 (v%3=2): Kansas City, Lawrence, Manhattan
export const KS_BLOG_POSTS = [[], [], []]

// =============================================================================
// EXPORTED FUNCTIONS
// =============================================================================

export function getKsCityData(citySlug, cityName) {
  const entry = KS_MAJOR_CITIES[citySlug]
  if (!entry) return null
  const { v, profileIdx, nearby } = entry
  const customMeta  = KS_CUSTOM_META[citySlug] || null
  const displayName = KS_CITY_DISPLAY_NAMES[citySlug] ?? cityName

  return {
    cityName:             displayName,
    stateAbbr:            'KS',
    stateName:            'Kansas',
    stateSlug:            'kansas',
    variant:              v % 3,
    heroImage:            KS_THEME_HEROES[v],
    heroSubtitle:         KS_HERO_SUBTITLES[v](displayName),
    heroH1Prefix:         KS_PROFILE_H1_PREFIXES[profileIdx],
    uniqueIntroVariant:   765 + profileIdx,
    uniqueWhyUsVariant:   v % 3,
    uniqueClosingVariant: 765 + profileIdx,
    ...(customMeta ? { metaTitle: customMeta.title, metaDescription: customMeta.desc } : {}),
    testimonials:         KS_TESTIMONIALS[citySlug] || [],
    nearbyCities:         nearby,
    nearbyMajorCities:    ['Overland Park', 'Kansas City', 'Wichita'],
  }
}

export function getKsBlogPosts(variant) {
  return KS_BLOG_POSTS[variant % 3] || []
}

export function getKsHowItWorks() {
  return KS_HOW_IT_WORKS
}

export function getKsSectionVariant(citySlug) {
  const entry = KS_MAJOR_CITIES[citySlug]
  if (!entry) return null
  return KS_SECTION_VARIANTS[entry.v]
}

export function getKsCityImage(citySlug) {
  return KS_CITY_IMAGE_MAP[citySlug] || null
}

export function getKsSupportImages(citySlug) {
  return KS_SUPPORT_IMAGES[citySlug] || null
}
