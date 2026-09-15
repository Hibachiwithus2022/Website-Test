// ─────────────────────────────────────────────────────────────────────────────
// Louisiana City Data — Hibachi Connect
// All 5 cities built in one session.
//
// INTRO_VARIANTS index range:
//   LA_INTRO_VARIANTS (generic): 697–699
//   LA_CITY_INTROS (city-specific): 700–704
//   uniqueIntroVariant = 700 + profileIdx
// ─────────────────────────────────────────────────────────────────────────────

// ─── H1 prefix per profileIdx ─────────────────────────────────────────────────
const LA_PROFILE_H1_PREFIXES = [
  'Private Hibachi Chef in',  // 0: New Orleans
  'Hibachi at Home in',       // 1: Baton Rouge
  'Hibachi Catering in',      // 2: Lafayette
  'Hibachi at Home in',       // 3: Shreveport
  'Mobile Hibachi in',        // 4: Lake Charles
]

// ─── Theme hero images (3 themes) ────────────────────────────────────────────
const LA_THEME_HEROES = [
  '/pics/hibachi-private-chef-1.jpg',  // LA0: New Orleans Destination
  '/pics/hibachi-at-home.jpg',         // LA1: South Louisiana
  '/pics/hibachi-event.jpg',           // LA2: Regional Louisiana
]

// ─── Hero subtitles ────────────────────────────────────────────────────────────
const LA_HERO_SUBTITLES = [
  (city) => `Garden District mansions, Uptown homes, and vacation rentals in ${city} — your private teppanyaki chef, brought to your property`,
  (city) => `LSU and UL graduation families, oil & gas professionals, and ${city} households — your private chef, at your home`,
  (city) => `${city} families, energy sector teams, and milestone celebrations — private hibachi at your home or outdoor venue`,
]

// ─── How It Works ──────────────────────────────────────────────────────────────
const LA_HOW_IT_WORKS = {
  headline:   (city) => `How Private Hibachi Works in ${city}`,
  footerNote: (city) => `Every ${city} event is confirmed with a deposit. Your date is locked as soon as you book — no double-bookings, no last-minute uncertainty.`,
  steps: [
    { num: '01', title: 'Submit Your Date & Address',           desc: 'Give us your Louisiana address, event date, and approximate guest count. We respond with a personalized same-day quote — whether you\'re in New Orleans, Baton Rouge, Lafayette, Shreveport, Lake Charles, or anywhere in between.' },
    { num: '02', title: 'Confirm Your Menu',                    desc: 'Choose proteins — chicken, steak, shrimp, salmon — and add premium upgrades like filet mignon, lobster tail, Chilean sea bass, or wagyu. Everything else is included: fried rice, grilled vegetables, miso soup, yum yum and ginger sauce, plates, and chopsticks.' },
    { num: '03', title: 'Lock Your Date',                       desc: 'A deposit confirms your event immediately. Your Louisiana date is reserved — no double-bookings, no cancellations.' },
    { num: '04', title: 'Chef Travels to You',                  desc: 'Your chef arrives 20–30 minutes before the event with the full self-contained propane teppan grill, all ingredients, and every piece of equipment. No gas hookup required at any Louisiana property.' },
    { num: '05', title: 'Live Fire Performance & Full Cleanup', desc: '90–120 minutes of live teppanyaki — fire tricks, the volcano, flying shrimp, every dish cooked to order. Full cleanup when dinner ends. Your Louisiana property is left exactly as it was.' },
  ],
}

// ─── Section variants (3 themes) ─────────────────────────────────────────────
const LA_SECTION_VARIANTS = [
  // LA0 — New Orleans Destination
  {
    heroPill:         'New Orleans Private Chef',
    experiencePill:   'Beyond Bourbon Street — The Private Dining Experience',
    experiencePoints: (city) => [
      { icon: '🏡', title: `Your ${city} Property Is the Venue`,     desc: `Garden District mansion, Uptown home, Airbnb rental in the Marigny — your outdoor space becomes an exclusive private dining room for your group without any reservation battle.` },
      { icon: '🎉', title: 'Built for New Orleans Vacation Groups',   desc: `Bachelorette weekends, family reunion trips, and corporate retreats deserve a dinner that goes beyond the restaurant scene. Your private chef travels to wherever your group is staying.` },
      { icon: '🥩', title: 'Full Premium Menu, Fully Self-Contained', desc: 'Chicken, steak, shrimp, salmon, or premium upgrades — filet mignon, lobster tail, Chilean sea bass. No kitchen access needed at your vacation rental or private home.' },
      { icon: '✨', title: 'Full Setup & Complete Cleanup',           desc: `Chef arrives fully equipped, performs the complete teppanyaki experience, and packs out entirely. Your New Orleans property is exactly as it was when the evening began.` },
    ],
    experienceImage:    '/pics/hibachi-pool-party.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} vacation rental or home`,
    areasPill:          'Serving Greater New Orleans',
    areasHeadline:      (city) => `Private Hibachi in ${city} and the Greater New Orleans Area`,
    areasIntro: [
      (city, state) => `We serve ${city} and the full Greater New Orleans area — the Garden District, Uptown, Mid-City, Metairie, Kenner, Slidell, Mandeville, Covington, and every surrounding Jefferson, Orleans, and St. Tammany Parish community. If your outdoor space holds a grill, we come to you.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your New Orleans Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The ${city} Dinner Nobody Forgets`,
    occasionSubtext:       'From bachelorette weekends and family reunion trips to corporate retreats and Garden District dinner parties, private hibachi is New Orleans\'s most memorable private dining experience',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Your Questions Answered`,
    testimonialSubheading: 'What New Orleans Hosts and Vacation Groups Are Saying',
  },
  // LA1 — South Louisiana (Baton Rouge, Lafayette)
  {
    heroPill:         'South Louisiana Private Chef',
    experiencePill:   'The Celebration Format South Louisiana Has Been Waiting For',
    experiencePoints: (city) => [
      { icon: '🏠', title: `Your ${city} Home Is the Venue`,          desc: `Skip the reservation battle — your ${city} backyard, patio, or covered outdoor space becomes an exclusive private dining room for your family.` },
      { icon: '🎓', title: 'The Graduation Season Solution',          desc: `LSU and UL graduation season fills every Baton Rouge and Lafayette restaurant table weeks in advance. When the table isn\'t available, the chef comes to your ${city} home — no wait, no time limit.` },
      { icon: '🔥', title: 'Live Teppanyaki for Louisiana Families',  desc: 'From fire tricks to flying shrimp, 90–120 minutes of live hibachi keeps every generation at the same table — the perfect format for Louisiana\'s large, multi-generational family celebrations.' },
      { icon: '✨', title: 'Full Setup & Zero Cleanup',               desc: `Chef arrives with everything, performs the complete dinner service, and packs out completely. Your ${city} property is spotless when they leave.` },
    ],
    experienceImage:    '/pics/backyard-hibachi-3.jpg',
    experienceImageAlt: (city) => `Hibachi at home event in ${city}, LA`,
    areasPill:          'Serving South Louisiana',
    areasHeadline:      (city) => `Private Hibachi in ${city} and South Louisiana`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of South Louisiana — Baton Rouge, Lafayette, Gonzales, Prairieville, Zachary, Denham Springs, New Iberia, Broussard, Youngsville, and every surrounding East Baton Rouge, Lafayette, and Iberia Parish community.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your South LA Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The ${city} Celebration Worth Planning`,
    occasionSubtext:       'From LSU graduation weekends and oil & gas team events to Cajun family milestones and milestone birthdays, private hibachi is South Louisiana\'s most memorable private dining experience',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Hibachi in ${city}, ${abbr} — Common Questions Answered`,
    testimonialSubheading: 'What South Louisiana Hosts Are Saying',
  },
  // LA2 — Regional Louisiana (Shreveport, Lake Charles)
  {
    heroPill:         'Louisiana Private Chef',
    experiencePill:   'The Private Hibachi Experience Louisiana Needed',
    experiencePoints: (city) => [
      { icon: '🏠', title: `Your ${city} Home Is the Venue`,          desc: `No reservation required — your ${city} backyard, patio, or outdoor space becomes an exclusive private dining room for your family or team.` },
      { icon: '🎉', title: 'Built for Louisiana Celebrations',        desc: `Milestone birthdays, graduation parties, and corporate team events in ${city} all find a better home in your backyard than at a restaurant table.` },
      { icon: '🥩', title: 'Premium Proteins, Live Performance',      desc: 'Every guest orders individually — chicken, steak, shrimp, salmon, filet mignon, lobster tail — all cooked live at the teppan grill.' },
      { icon: '✨', title: 'Full Setup & Complete Cleanup',            desc: `Your chef arrives fully equipped, performs the entire dinner, and packs out completely. Your ${city} property is spotless when they leave.` },
    ],
    experienceImage:    '/pics/hibachi-catering.jpg',
    experienceImageAlt: (city) => `Private hibachi event in ${city}, LA`,
    areasPill:          'Serving Louisiana Regional Markets',
    areasHeadline:      (city) => `Private Hibachi in ${city} and the Surrounding Area`,
    areasIntro: [
      (city, state) => `We serve ${city} and the surrounding regional communities — including Bossier City, Benton, and Northwest Louisiana from Shreveport; and Sulphur, Westlake, and Southwest Louisiana from Lake Charles. Every event is fully self-contained; we come to you.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Louisiana Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The ${city} Event That Delivers`,
    occasionSubtext:       'From energy sector corporate dinners to graduation parties and family milestones, private hibachi is Louisiana\'s most memorable private dining experience in the regional markets',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Common Questions`,
    testimonialSubheading: 'What Louisiana Hosts Are Saying',
  },
]

// ─── Testimonials ──────────────────────────────────────────────────────────────
const LA_TESTIMONIALS = {
  'new-orleans': [
    {
      text:     "We planned a bachelorette trip to New Orleans for nine people — three days, every experience the city has to offer. The private hibachi chef on the last night was unanimously the highlight of the entire trip. We ordered from our vacation rental's back courtyard, the chef was incredible, and it was a two-hour experience that none of us had expected to be that memorable.",
      name:     'Kelsey D.',
      city:     'New Orleans, LA',
      event:    'Bachelorette Dinner Party',
      initials: 'KD',
    },
    {
      text:     "Hosted a client dinner for ten people at my Garden District home and Hibachi Connect delivered exactly what I needed — professional, entertaining, flawless food quality. Three clients specifically said it was the best corporate dinner they'd attended in New Orleans, which is saying something in this city.",
      name:     'Marcus B.',
      city:     'New Orleans, LA',
      event:    'Corporate Client Dinner',
      initials: 'MB',
    },
    {
      text:     "Family reunion in New Orleans — 18 people from five states, ages 8 to 72. Every restaurant option we considered had either a time limit, a noise problem, or couldn't handle the group size. The private hibachi chef set up on the back deck of our Uptown rental and turned dinner into the best two hours of the entire reunion weekend.",
      name:     'Vanessa T.',
      city:     'New Orleans, LA',
      event:    'Family Reunion Dinner',
      initials: 'VT',
    },
  ],
  'baton-rouge': [
    {
      text:     "LSU graduation weekend in Baton Rouge is genuinely impossible for large groups. We have 22 family members — grandparents from Texas, cousins from Mississippi — and every restaurant was fully booked six weeks out. The private hibachi chef at our home was not only the practical solution, it was the best graduation dinner we've ever hosted.",
      name:     'Patricia W.',
      city:     'Baton Rouge, LA',
      event:    'LSU Graduation Celebration',
      initials: 'PW',
    },
    {
      text:     "I used Hibachi Connect for a physician group dinner at my home in the Bocage area — 14 colleagues, outdoor setting, the chef was completely professional and the quality of the food was outstanding. Every person asked for the contact information before the evening was over.",
      name:     'Dr. Andrew C.',
      city:     'Baton Rouge, LA',
      event:    'Physician Group Dinner',
      initials: 'AC',
    },
    {
      text:     "My husband's 50th birthday had 26 guests — our whole neighborhood plus family from out of town. The private hibachi chef handled everything. We spent the evening celebrating rather than managing logistics, and every guest said it was the most fun dinner party they'd attended in years.",
      name:     'Michelle N.',
      city:     'Baton Rouge, LA',
      event:    '50th Birthday Celebration',
      initials: 'MN',
    },
  ],
  'lafayette': [
    {
      text:     "Our oil and gas team of 20 had an end-of-project celebration at a colleague's home in Lafayette and the hibachi chef made the whole evening. The food was genuinely excellent — better than any of our usual corporate dinners — and the performance kept everyone entertained for two straight hours. This is our new team event format.",
      name:     'Ryan F.',
      city:     'Lafayette, LA',
      event:    'Oil & Gas Team Celebration',
      initials: 'RF',
    },
    {
      text:     "We hosted a graduation party for our daughter at our Lafayette home — 30 people, family from across Acadiana. The hibachi chef was exactly right for a large Cajun family gathering: entertaining, generous with the food, and kept the whole table together the entire evening. Will be doing this every graduation season.",
      name:     'Denise M.',
      city:     'Lafayette, LA',
      event:    'Graduation Party',
      initials: 'DM',
    },
    {
      text:     "My wife's 40th birthday dinner had 16 guests on our backyard patio. The chef was professional, the performance was genuinely impressive, and the food — especially the seafood — was excellent. Lafayette has plenty of great restaurants, but nothing compares to a private chef at your own home.",
      name:     'Christopher B.',
      city:     'Lafayette, LA',
      event:    'Birthday Dinner',
      initials: 'CB',
    },
  ],
  'shreveport': [
    {
      text:     "We hosted our son's graduation party at our home near Cross Lake — 25 guests, a mix of family, friends, and his fellow Barksdale officers. The chef was fantastic, the setup was seamless, and the performance kept everyone engaged the entire evening. The best party we've hosted in Shreveport.",
      name:     'Colonel James H.',
      city:     'Shreveport, LA',
      event:    'Graduation Celebration',
      initials: 'JH',
    },
    {
      text:     "Our regional sales team of 18 had a year-end dinner at someone's home in Shreveport and Hibachi Connect exceeded every expectation. Professional chef, excellent food, complete setup and cleanup. Three team members from out of town said it was the best corporate event they'd attended anywhere.",
      name:     'Sandra P.',
      city:     'Shreveport, LA',
      event:    'Corporate Team Dinner',
      initials: 'SP',
    },
    {
      text:     "I celebrated my mother's 70th birthday with 20 family members and the private hibachi experience was absolutely perfect. The chef was patient with the older guests, entertaining for the grandchildren, and the food was exceptional. My mother said it was the best birthday she'd ever had.",
      name:     'Donna R.',
      city:     'Shreveport, LA',
      event:    '70th Birthday Celebration',
      initials: 'DR',
    },
  ],
  'lake-charles': [
    {
      text:     "Our engineering team of 16 finished a major plant commissioning and celebrated at a colleague's home near Lake Charles. The hibachi chef was the right call — professional, entertaining, excellent food. Best team event we've organized in the refinery corridor. Already planning the next one.",
      name:     'Todd S.',
      city:     'Lake Charles, LA',
      event:    'Engineering Team Celebration',
      initials: 'TS',
    },
    {
      text:     "We were staying at a lake house near Lake Charles for a long weekend and booked a private hibachi chef for Saturday night. The whole group of 14 agreed it was the best evening of the trip. Chef was professional, set up on the deck, and the food was better than we expected. Booking again for our next trip.",
      name:     'Ashley K.',
      city:     'Lake Charles, LA',
      event:    'Lake House Weekend Dinner',
      initials: 'AK',
    },
    {
      text:     "My daughter's quinceañera celebration had 28 guests and the private hibachi chef was everything we needed. The entertainment kept everyone — from grandparents to teenagers — at the same table for two full hours. The food was outstanding and the full cleanup meant we could stay in the moment all evening.",
      name:     'Maria G.',
      city:     'Lake Charles, LA',
      event:    'Quinceañera Celebration',
      initials: 'MG',
    },
  ],
}

// ─── City experience images ────────────────────────────────────────────────────
const LA_CITY_IMAGE_MAP = {
  'new-orleans':  { src: '/pics/hibachi-pool-party.jpg',    alt: (city) => `Private hibachi at a ${city} vacation rental or Garden District home` },
  'baton-rouge':  { src: '/pics/backyard-hibachi-3.jpg',    alt: (city) => `Hibachi at home in ${city}, LA` },
  'lafayette':    { src: '/pics/hibachi-catering.jpg',      alt: (city) => `Hibachi catering event in ${city}, LA` },
  'shreveport':   { src: '/pics/private-party-chef-6.jpg',  alt: (city) => `Private hibachi chef at a ${city} home` },
  'lake-charles': { src: '/pics/hibachi-miami.jpg',         alt: (city) => `Mobile hibachi at a ${city} area home or lake house` },
}

// ─── Support images ────────────────────────────────────────────────────────────
const LA_SUPPORT_IMAGES = {
  'new-orleans': {
    testimonial: {
      src:        '/pics/hero-3.jpg',
      alt:        (city) => `Private hibachi chef at a New Orleans vacation rental or estate`,
      caption:    'New Orleans vacation groups and estate entertaining',
      trustBadge: 'The Chef Comes to Your Property',
      intro:      (city) => `New Orleans vacation groups and Garden District hosts share one challenge: the city's restaurant scene is world-famous, but nothing in it handles 16 to 25 people at a single table for a two-hour private experience. Private hibachi does. See what New Orleans hosts have found:`,
    },
    cta: {
      src:     '/pics/hibachi-austin-home.jpg',
      alt:     (city) => `Private hibachi chef ready for a New Orleans event`,
      caption: 'The New Orleans private dining upgrade',
    },
  },
  'baton-rouge': {
    testimonial: {
      src:        '/pics/hibachi-shot-1.jpg',
      alt:        (city) => `Private hibachi dinner at a Baton Rouge, LA home`,
      caption:    'Baton Rouge graduation and professional events',
      trustBadge: 'Trusted by Baton Rouge Families',
      intro:      (city) => `Baton Rouge families — from LSU graduation hosts in the Bocage corridor to healthcare professionals in Prairieville and young families in Central — share a common experience: graduation season exhausts every restaurant option. Private hibachi at your home solves that cleanly. Here's what Baton Rouge hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Private hibachi chef at a Baton Rouge, LA home`,
      caption: 'The Baton Rouge graduation celebration format',
    },
  },
  'lafayette': {
    testimonial: {
      src:        '/pics/hero-1.jpg',
      alt:        (city) => `Hibachi catering event in Lafayette, LA`,
      caption:    'Lafayette oil & gas and Cajun family events',
      trustBadge: 'Trusted by Lafayette Hosts',
      intro:      (city) => `Lafayette's oil and gas professional community and Acadiana's large Cajun family celebrations both find the same answer in private hibachi: a format that works for 15–30 people, keeps every generation engaged at the same table, and delivers food quality that matches any special occasion. Here's what Lafayette hosts have experienced:`,
    },
    cta: {
      src:     '/pics/hero-3.jpg',
      alt:     (city) => `Private hibachi chef at a Lafayette, LA event`,
      caption: 'The Lafayette celebration format',
    },
  },
  'shreveport': {
    testimonial: {
      src:        '/pics/mobile-hibachi.jpg',
      alt:        (city) => `Private hibachi event at a Shreveport, LA home`,
      caption:    'Shreveport and Bossier City events',
      trustBadge: 'Trusted by Shreveport Hosts',
      intro:      (city) => `Shreveport and Bossier City hosts — military families at Barksdale, corporate professionals in the Red River corridor, and North Louisiana families celebrating milestones — have found that private hibachi delivers a dining experience that no local restaurant format can match. See what Shreveport hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-at-home.jpg',
      alt:     (city) => `Private hibachi chef at a Shreveport, LA event`,
      caption: 'The Shreveport private chef format',
    },
  },
  'lake-charles': {
    testimonial: {
      src:        '/pics/hibachi-dallas.jpg',
      alt:        (city) => `Private hibachi at a Lake Charles, LA home or lake property`,
      caption:    'Lake Charles energy sector and lake house events',
      trustBadge: 'Trusted by Lake Charles Hosts',
      intro:      (city) => `Lake Charles energy sector professionals and Southwest Louisiana families have found that private hibachi is the best format for large group dining — whether it's a corporate team celebration, a lake house weekend event, or a milestone family occasion that deserves something more than a restaurant table. See what Lake Charles hosts have experienced:`,
    },
    cta: {
      src:     '/pics/hibachi-pool-party.jpg',
      alt:     (city) => `Private hibachi chef at a Lake Charles, LA property`,
      caption: 'The Lake Charles group dinner upgrade',
    },
  },
}

// ─── Custom meta overrides ─────────────────────────────────────────────────────
const LA_CUSTOM_META = {
  'new-orleans': {
    title: 'Private Hibachi Chef in New Orleans, LA | Hibachi Connect',
    desc:  'Private hibachi chef at your New Orleans vacation rental, Garden District home, or Uptown property. The premium group dining upgrade for bachelorette weekends, family reunions, and corporate retreats.',
  },
  'baton-rouge': {
    title: 'Hibachi at Home in Baton Rouge, LA | Hibachi Connect',
    desc:  'Hibachi at home in Baton Rouge for LSU graduation weekends, professional dinner parties, and family milestone celebrations. Your private chef comes directly to your home.',
  },
  'lafayette': {
    title: 'Hibachi Catering in Lafayette, LA | Hibachi Connect',
    desc:  'Hibachi catering in Lafayette for oil & gas team events, Acadiana graduation parties, and large family celebrations. A private chef arrives at your home — no restaurants required.',
  },
  'shreveport': {
    title: 'Hibachi at Home in Shreveport, LA | Hibachi Connect',
    desc:  'Hibachi at home in Shreveport for graduation celebrations, Barksdale military family events, and North Louisiana milestones. Your private chef arrives fully equipped.',
  },
  'lake-charles': {
    title: 'Mobile Hibachi in Lake Charles, LA | Hibachi Connect',
    desc:  'Mobile hibachi in Lake Charles for energy sector team events, lake house group dinners, and Southwest Louisiana family celebrations. Your private chef comes to you.',
  },
}

// ─── Intro / closing placeholders ─────────────────────────────────────────────
const _EMPTY_INTRO = { headline: () => '', opening: () => '', middle: () => '', closing: () => '' }
const _EMPTY_CLOSE = { headline: () => '', sub: () => '', urgency: '', btnPrimary: '', btnSecondary: '' }

// ─── LA_INTRO_VARIANTS — 3 generic (indices 697–699) ──────────────────────────
export const LA_INTRO_VARIANTS = [
  // LA0 (697) — New Orleans Destination
  {
    headline: () => 'New Orleans Is the Most Famous Food City in the Country — and Private Hibachi Is Still Something Else Entirely',
    opening:  () => 'In a city built on exceptional restaurants, a private hibachi chef delivers something the entire French Quarter can\'t: your own chef, your own group, your own outdoor space, with nobody else at the table. Vacation rental groups, Garden District hosts, and corporate retreat planners have discovered that the hibachi format creates a two-hour shared experience that every New Orleans restaurant — no matter how celebrated — simply cannot replicate.',
    middle:   () => 'The logistics alone make the case. New Orleans restaurants at peak season require weeks of advance planning for large groups, often split tables, and always have a time limit. A private chef at your Uptown home or Garden District property has none of those constraints — your group stays together, the performance continues for 90–120 minutes, and the experience becomes the evening rather than just dinner.',
    closing:  () => 'We serve New Orleans, Metairie, Kenner, the North Shore, and all of Greater New Orleans. Weekend dates and peak season book quickly — confirm your New Orleans event early.',
  },
  // LA1 (698) — South Louisiana
  {
    headline: () => 'South Louisiana Families Celebrate at Scale — and Private Hibachi Is Made for That',
    opening:  () => 'Baton Rouge and Lafayette share a celebration culture rooted in large family gatherings, university milestones, and professional community events. LSU graduation season in Baton Rouge and UL Lafayette\'s commencement week both push every nearby restaurant to capacity for weeks at a time. And Louisiana\'s multi-generational Cajun family celebrations routinely involve 20, 25, or 30 people — a size that any restaurant struggles to accommodate at a single table.',
    middle:   () => 'Private hibachi solves both problems simultaneously. Your chef comes to your South Louisiana home, sets up the complete self-contained grill on your patio or backyard, and performs 90–120 minutes of live teppanyaki for every guest at once. Grandparents and grandchildren at the same table. No time limit. No split tables. The oil and gas professional communities in both cities find the format equally useful for corporate team events that warrant quality.',
    closing:  () => 'We serve Baton Rouge, Lafayette, Gonzales, Prairieville, Broussard, Youngsville, and all of South Louisiana. Graduation season dates fill weeks in advance — confirm your May event early.',
  },
  // LA2 (699) — Regional Louisiana
  {
    headline: () => 'Shreveport and Lake Charles Have Found Their Private Hibachi Format',
    opening:  () => 'Northwest and Southwest Louisiana have the same event culture as any major Louisiana city — milestone birthdays, graduation parties, corporate team celebrations, and family reunions that deserve more than a crowded restaurant table. What these markets have historically lacked is access to a private hibachi service that comes directly to your home rather than requiring you to drive to a larger city.',
    middle:   () => 'We serve the Shreveport-Bossier City corridor and the Lake Charles energy sector market with the same fully self-contained private hibachi experience available in New Orleans and Baton Rouge. Your chef comes to your property, performs the complete teppanyaki dinner, and handles everything from setup to cleanup.',
    closing:  () => 'We serve Shreveport, Bossier City, and Northwest Louisiana; Lake Charles, Sulphur, Westlake, and Southwest Louisiana. Regional dates are available with reasonable advance notice.',
  },
]

// ─── LA_CITY_INTROS — 5 city-specific (indices 700–704) ───────────────────────
export const LA_CITY_INTROS = [
  // 700 — New Orleans
  {
    headline: () => `The City That Invented Food Culture Has Found an Experience Its Restaurants Can't Offer`,
    opening:  () => `New Orleans has more celebrated restaurants per square mile than almost anywhere in the country — Commander's Palace, Brennan's, Dooky Chase's, and hundreds of other institutions that define Louisiana's culinary reputation. And yet, when a group of 16 to 22 people gathers for a bachelorette weekend, a family reunion trip, or a corporate retreat in the city, private hibachi delivers something every single one of those restaurants cannot: one chef, one grill, the entire group at the same table for two uninterrupted hours.`,
    middle:   () => `The format works particularly well in New Orleans because of the city's vacation rental infrastructure. Garden District mansions, Uptown doubles with rear courtyards, Marigny shotguns with back patios, and Airbnb properties across every neighborhood already have outdoor space designed for entertaining. A private hibachi chef arrives with the complete self-contained setup — no kitchen access needed, no gas hookup required — and transforms any outdoor space into the evening's venue.`,
    closing:  () => `We serve New Orleans, Metairie, Kenner, the Northshore (Mandeville, Covington, Slidell), and all of Greater New Orleans. Bachelorette weekends, Jazz Fest weekends, and holiday season dates book early — confirm your New Orleans event well in advance.`,
  },
  // 701 — Baton Rouge
  {
    headline: () => `LSU Graduation Weekend Has a Reservation Problem — and a Private Chef Solution`,
    opening:  () => `Baton Rouge is home to LSU's flagship campus and the associated graduation-weekend phenomenon that every Baton Rouge resident recognizes: in the three weeks surrounding commencement, every table at every restaurant worth booking is unavailable, families from Texas, Mississippi, and across Louisiana are searching for options that can seat their full group, and the inevitable result is a celebration that doesn't feel like the moment deserves. Private hibachi at your Baton Rouge home solves the problem entirely.`,
    middle:   () => `Beyond graduation season, Baton Rouge's healthcare and professional community — Our Lady of the Lake, Baton Rouge General, and the legal and corporate corridor in the Perkins Road area — hosts regular events where quality matters and a restaurant setting doesn't fit. Physician group dinners, law firm milestones, and corporate client entertainment all work better in a Bocage or Prairieville backyard than at a restaurant that seats someone else next to your guests.`,
    closing:  () => `We serve Baton Rouge, Gonzales, Prairieville, Zachary, Denham Springs, Central, Baker, and all of East Baton Rouge and Livingston Parish. LSU graduation season — May weekends specifically — books out early. Confirm your date before the window closes.`,
  },
  // 702 — Lafayette
  {
    headline: () => `Acadiana's Oil & Gas Professionals and Cajun Families Have Found the Same Answer`,
    opening:  () => `Lafayette sits at the intersection of two completely different event markets that both need the same format. The oil and gas professional community — engineers, project managers, operations leads, and their teams — regularly hosts events where the expectation is quality and the preference is not a crowded restaurant. And the Cajun family celebration culture in Acadiana routinely involves guest lists of 25, 30, or more people gathered for graduations, quinceañeras, milestone birthdays, and reunion dinners that no restaurant handles gracefully at that scale.`,
    middle:   () => `Private hibachi solves both. The self-contained setup works equally well in a corporate professional's Youngsville backyard for a team celebration as it does in a traditional Acadiana family home for a large multi-generational gathering. The format keeps every guest at the same table for 90–120 minutes, which is the one thing every large celebration needs and most restaurants can't provide.`,
    closing:  () => `We serve Lafayette, Youngsville, Broussard, Carencro, Scott, New Iberia, Breaux Bridge, and all of Lafayette and Iberia Parish. UL graduation season and Mardi Gras season dates fill quickly — confirm your Lafayette event early.`,
  },
  // 703 — Shreveport
  {
    headline: () => `Shreveport and Bossier City's Celebration Culture Has a Private Dining Format Now`,
    opening:  () => `Shreveport and Bossier City share a combined metro with strong military, healthcare, and energy sector communities — Barksdale Air Force Base officer families, Willis-Knighton and Ochsner LSU Health professionals, and the established business community along the Red River corridor. These communities celebrate milestones the way any growing metro does: graduation parties, retirement celebrations, corporate team events, and family reunion weekends. The difference in Shreveport is that the premium private dining format hasn't historically been available here.`,
    middle:   () => `Private hibachi changes that. Your chef travels to your Shreveport or Bossier City home — Cross Lake area, the Highland neighborhood, South Shreveport, or Bossier City's Barksdale-adjacent communities — sets up completely on your patio or in your backyard, and performs the full teppanyaki dinner for your group. The experience is identical to what New Orleans and Baton Rouge hosts have been using for their events, now available in Northwest Louisiana.`,
    closing:  () => `We serve Shreveport, Bossier City, Benton, Haughton, Minden, and all of Northwest Louisiana. Summer and graduation season dates book ahead — confirm your Shreveport event early.`,
  },
  // 704 — Lake Charles
  {
    headline: () => `Lake Charles Energy Professionals and Lake House Groups Have Found Their Private Chef Format`,
    opening:  () => `Lake Charles hosts one of the densest concentrations of petrochemical and energy sector professionals in the South — LNG plant workers, refinery engineers, project managers, and operations teams who earn well and celebrate together when a project closes or a team milestone arrives. Corporate team events in Lake Charles traditionally went to a restaurant. Private hibachi changes that calculus entirely: the chef comes to your home or your colleague's backyard, and the evening becomes something worth remembering.`,
    middle:   () => `The lake house and vacation rental market along Lake Charles and the Calcasieu River adds a second booking profile. Group weekends at lake houses on the Calcasieu, girls' trips to Southwest Louisiana, and family reunion weekends all benefit from the same format: a private chef who arrives at your property with the complete self-contained setup, performs 90–120 minutes of live teppanyaki on the deck, and packs out entirely when dinner ends.`,
    closing:  () => `We serve Lake Charles, Sulphur, Westlake, Moss Bluff, DeQuincy, and all of Calcasieu Parish. Summer lake season and holiday weekend dates book ahead — confirm your Lake Charles event early.`,
  },
]

// ─── LA_CLOSING_VARIANTS — 3 generic (indices 697–699) ────────────────────────
export const LA_CLOSING_VARIANTS = [
  // LA0 (697) — New Orleans
  {
    headline:     (city) => `Book Your New Orleans Private Chef Event`,
    sub:          (city) => `Garden District estate dinners, bachelorette weekends, and family reunion trips — your private hibachi chef comes to your New Orleans property`,
    urgency:      'Weekend and peak season dates fill fast — confirm your New Orleans event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // LA1 (698) — South Louisiana
  {
    headline:     (city) => `Book Your ${city} Private Hibachi Event`,
    sub:          (city) => `LSU and UL graduation weekends, oil & gas team events, and South Louisiana family milestones — your private chef arrives fully equipped`,
    urgency:      'Graduation season and summer dates fill weeks in advance — confirm your event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // LA2 (699) — Regional Louisiana
  {
    headline:     (city) => `Book Your ${city} Private Hibachi Event`,
    sub:          (city) => `Corporate team dinners, graduation celebrations, and family milestones in ${city} — your private chef comes to you`,
    urgency:      'Summer and graduation season dates fill quickly — confirm your Louisiana event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
]

// ─── LA_CITY_CLOSINGS — 5 city-specific (indices 700–704) ─────────────────────
export const LA_CITY_CLOSINGS = [
  // 700 — New Orleans
  {
    headline:     (city) => `Book Your New Orleans Private Hibachi Experience`,
    sub:          (city) => `Vacation rentals, Garden District homes, and corporate retreats in New Orleans — your private hibachi chef arrives at your property`,
    urgency:      'Bachelorette weekends, Jazz Fest, and holiday season dates book fast — confirm your New Orleans date today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 701 — Baton Rouge
  {
    headline:     (city) => `Book Your Baton Rouge Hibachi Event`,
    sub:          (city) => `LSU graduation weekends, professional dinner parties, and milestone family events — your private chef comes to you across the Baton Rouge area`,
    urgency:      'LSU graduation season books out early — confirm your Baton Rouge May date today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 702 — Lafayette
  {
    headline:     (city) => `Book Your Lafayette Hibachi Event`,
    sub:          (city) => `Oil & gas team celebrations, Acadiana family milestones, and large Lafayette gatherings — your private chef arrives fully equipped`,
    urgency:      'UL graduation season and summer dates fill quickly — secure your Lafayette event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 703 — Shreveport
  {
    headline:     (city) => `Book Your Shreveport Private Hibachi Event`,
    sub:          (city) => `Barksdale military families, corporate team dinners, and North Louisiana milestone celebrations — your private chef comes to you`,
    urgency:      'Summer and graduation season dates in Shreveport book ahead — confirm your event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 704 — Lake Charles
  {
    headline:     (city) => `Book Your Lake Charles Private Hibachi Event`,
    sub:          (city) => `Energy sector team events, lake house weekend dinners, and Southwest Louisiana celebrations — your private chef arrives fully set up`,
    urgency:      'Lake season and holiday weekend dates fill fast — confirm your Lake Charles event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
]

// ─── Major cities map ──────────────────────────────────────────────────────────
const LA_MAJOR_CITIES = {
  'new-orleans':  { v: 0, profileIdx: 0, nearby: ['Baton Rouge'] },
  'baton-rouge':  { v: 1, profileIdx: 1, nearby: ['New Orleans', 'Lafayette'] },
  'lafayette':    { v: 1, profileIdx: 2, nearby: ['Baton Rouge', 'Lake Charles'] },
  'shreveport':   { v: 2, profileIdx: 3, nearby: ['Baton Rouge'] },
  'lake-charles': { v: 2, profileIdx: 4, nearby: ['Lafayette', 'Baton Rouge'] },
}

// ─── Display name overrides ────────────────────────────────────────────────────
const LA_CITY_DISPLAY_NAMES = {
  'new-orleans':  'New Orleans',
  'baton-rouge':  'Baton Rouge',
  'lake-charles': 'Lake Charles',
}

// ─── Blog posts (planned — built in a separate session) ───────────────────────
export const LA_BLOG_POSTS = [[], [], []]

// =============================================================================
// EXPORTED FUNCTIONS
// =============================================================================

export function getLaCityData(citySlug, cityName) {
  const entry = LA_MAJOR_CITIES[citySlug]
  if (!entry) return null
  const { v, profileIdx, nearby } = entry
  const customMeta  = LA_CUSTOM_META[citySlug] || null
  const displayName = LA_CITY_DISPLAY_NAMES[citySlug] ?? cityName
  return {
    cityName:     displayName,
    stateAbbr:    'LA',
    stateName:    'Louisiana',
    stateSlug:    'louisiana',
    variant:      v % 3,
    heroImage:    LA_THEME_HEROES[v],
    heroSubtitle: LA_HERO_SUBTITLES[v](displayName),
    heroH1Prefix: LA_PROFILE_H1_PREFIXES[profileIdx],
    uniqueIntroVariant:   700 + profileIdx,
    uniqueWhyUsVariant:   v % 3,
    uniqueClosingVariant: 700 + profileIdx,
    ...(customMeta ? { metaTitle: customMeta.title, metaDescription: customMeta.desc } : {}),
    testimonials:      LA_TESTIMONIALS[citySlug] || [],
    nearbyCities:      nearby,
    nearbyMajorCities: ['New Orleans', 'Baton Rouge', 'Lafayette', 'Shreveport', 'Lake Charles'],
  }
}

export function getLaBlogPosts(variant, count) {
  return LA_BLOG_POSTS[variant % 3] || []
}

export function getLaHowItWorks(citySlug) {
  return LA_HOW_IT_WORKS
}

export function getLaSectionVariant(citySlug) {
  const entry = LA_MAJOR_CITIES[citySlug]
  if (!entry) return null
  return LA_SECTION_VARIANTS[entry.v]
}

export function getLaCityImage(citySlug) {
  return LA_CITY_IMAGE_MAP[citySlug] || null
}

export function getLaSupportImages(citySlug) {
  return LA_SUPPORT_IMAGES[citySlug] || null
}
