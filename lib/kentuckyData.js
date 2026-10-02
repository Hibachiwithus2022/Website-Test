// Kentucky — 10 cities, 3 batches, 6 themes
// Batch 1 (profileIdx 0–2):  Louisville, Lexington, Bowling Green
// Batch 2 (profileIdx 3–6):  Covington, Florence, Frankfort, Georgetown
// Batch 3 (profileIdx 7–9):  Elizabethtown, Owensboro, Paducah
//
// KY_INTRO_VARIANTS indices 753–755 (3 generics)
// KY_CITY_INTROS indices 756–758 (3 city-specific — Batch 1)
// KY_EXPANSION_CITY_INTROS indices 794–800 (7 city-specific — Batches 2+3, appended after CT)
// uniqueIntroVariant:
//   Batch 1: 756 + profileIdx (0–2)
//   Batches 2+3: 794 + expansionIdx (0–6)

// ─── H1 prefixes by profileIdx ────────────────────────────────────────────────
const KY_PROFILE_H1_PREFIXES = [
  'Private Hibachi Chef in',    // 0: Louisville
  'Hibachi at Home in',         // 1: Lexington
  'Hibachi Catering in',        // 2: Bowling Green
  'Private Hibachi Chef in',    // 3: Covington
  'Hibachi at Home in',         // 4: Florence
  'Hibachi at Home in',         // 5: Frankfort
  'Hibachi at Home in',         // 6: Georgetown
  'Hibachi Catering in',        // 7: Elizabethtown
  'Mobile Hibachi in',          // 8: Owensboro
  'Backyard Hibachi Party in',  // 9: Paducah
]

// ─── Theme hero images ────────────────────────────────────────────────────────
const KY_THEME_HEROES = [
  '/pics/hibachi-private-chef-1.jpg', // T0: Lexington Horse Country
  '/pics/hibachi-shot-2.jpg',         // T1: Louisville Metro & Derby Culture
  '/pics/hibachi-photo-2.jpg',        // T2: Bowling Green & WKU
  '/pics/hero-3.jpg',                 // T3: Northern KY / Cincinnati Metro
  '/pics/hibachi-at-home.jpg',        // T4: Bluegrass Capital Corridor
  '/pics/hibachi-event.jpg',          // T5: Western & Regional KY
]

// ─── Hero subtitles by theme ──────────────────────────────────────────────────
const KY_HERO_SUBTITLES = [
  (city) => `${city} horse country estates, Keeneland families, and UK graduation milestones — your private teppanyaki chef, brought to your home`,
  (city) => `${city} Derby city professionals, NuLu executives, and milestone celebrations — private hibachi at your Louisville home`,
  (city) => `${city} WKU graduation families, Corvette Museum corridor professionals, and south Kentucky milestones — your private chef comes to you`,
  (city) => `${city} and Northern Kentucky's Cincinnati corridor — private hibachi at your home, no restaurant required`,
  (city) => `${city} and the Bluegrass Capital Corridor — private teppanyaki between Louisville and Lexington, at your home`,
  (city) => `${city} and Western Kentucky's communities — your private hibachi chef, fully self-contained at your home`,
]

// ─── How It Works ─────────────────────────────────────────────────────────────
const KY_HOW_IT_WORKS = {
  headline:   (city) => `How Private Hibachi Works in ${city}`,
  footerNote: (city) => `Every ${city} event is confirmed with a deposit. Your date is locked the moment you book — no double-bookings, no last-minute uncertainty.`,
  steps: [
    { num: '01', title: 'Submit Your Date & Address',           desc: 'Give us your Kentucky address, event date, and approximate guest count. We respond with a personalized same-day quote — whether you\'re in Louisville, Lexington, Northern Kentucky, or anywhere across the state.' },
    { num: '02', title: 'Confirm Your Menu',                    desc: 'Choose proteins — chicken, steak, shrimp, salmon — and add premium upgrades like filet mignon, lobster tail, Chilean sea bass, or wagyu. Everything else is included: fried rice, grilled vegetables, miso soup, yum yum and ginger sauce, plates, and chopsticks.' },
    { num: '03', title: 'Lock Your Date',                       desc: 'A deposit confirms your event immediately. Your Kentucky date is reserved — no double-bookings, no cancellations.' },
    { num: '04', title: 'Chef Travels to You',                  desc: 'Your chef arrives 20–30 minutes before the event with the full self-contained propane teppan grill, all ingredients, and every piece of equipment. No gas hookup required at any Kentucky property.' },
    { num: '05', title: 'Live Fire Performance & Full Cleanup', desc: '90–120 minutes of live teppanyaki — fire tricks, the volcano, flying shrimp, every dish cooked to order. Full cleanup when dinner ends. Your Kentucky property is left exactly as it was.' },
  ],
}

// ─── Section variants (6 themes) ─────────────────────────────────────────────
const KY_SECTION_VARIANTS = [
  // T0 — Lexington Horse Country
  {
    heroPill:         'Lexington Private Chef',
    experiencePill:   'Beyond Any Lexington Restaurant',
    experiencePoints: (city) => [
      { icon: '🏡', title: `Your ${city} Home Is the Venue`,        desc: `No reservation required — your ${city} estate, farm property, or suburban home becomes an exclusive private teppanyaki dining room for your family or guests.` },
      { icon: '🐎', title: `${city} Horse Country Entertaining`,    desc: `${city}'s thoroughbred estate community sets a distinctive standard for private entertaining. Our certified chefs deliver a premium teppanyaki experience that matches the occasion — whether it's a Keeneland season dinner or a UK graduation celebration.` },
      { icon: '🥩', title: 'Premium Proteins, Live Teppanyaki',     desc: 'Choose from chicken, steak, shrimp, salmon — or upgrade to filet mignon, lobster tail, Chilean sea bass, or wagyu. Every guest orders individually, cooked live at the teppan grill.' },
      { icon: '✨', title: 'Full Setup & Complete Cleanup',          desc: `Your chef arrives with the full self-contained setup, performs the complete teppanyaki experience, and leaves your ${city} property exactly as they found it.` },
    ],
    experienceImage:    '/pics/private-party-chef-6.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city}, Kentucky estate`,
    areasPill:          'Serving Greater Lexington',
    areasHeadline:      (city) => `Private Hibachi in ${city} and Central Kentucky`,
    areasIntro: [
      (city, state) => `We serve ${city} and the surrounding central Kentucky corridor — Hamburg, Beaumont, Georgetown, Richmond, Versailles, Paris, and every Bluegrass region community. If your outdoor space holds a grill, we come to you.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Lexington Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Private Dining Experience ${city} Hosts Have Been Waiting For`,
    occasionSubtext:       'From UK graduation celebrations and Keeneland season entertaining to milestone anniversary dinners on horse country estates, private hibachi is Kentucky\'s most memorable private dining experience',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Your Questions Answered`,
    testimonialSubheading: 'What Lexington Hosts Are Saying',
  },
  // T1 — Louisville Metro & Derby Culture
  {
    heroPill:         'Louisville Hibachi',
    experiencePill:   'Private Dining for Louisville',
    experiencePoints: (city) => [
      { icon: '🏡', title: `Your ${city} Home Is the Venue`,        desc: `No reservation required — your ${city} backyard, covered patio, or outdoor space becomes a private dining room for every guest at once.` },
      { icon: '🏇', title: 'Derby City Private Entertaining',       desc: `${city}'s Derby city culture understands premium private events. From Prospect estate dinners to NuLu professional team celebrations, private hibachi at your Louisville home delivers the kind of live-performance dining that no Churchill Downs restaurant can replicate for a private group.` },
      { icon: '🥩', title: 'Premium Proteins, Live Teppanyaki',     desc: 'Choose from chicken, steak, shrimp, salmon — or upgrade to filet mignon, lobster tail, Chilean sea bass, or wagyu. Every guest orders individually, cooked live at the teppan grill.' },
      { icon: '✨', title: 'Full Setup & Complete Cleanup',          desc: `Your chef arrives with the full self-contained setup, performs the complete teppanyaki experience, and leaves your ${city} property exactly as they found it.` },
    ],
    experienceImage:    '/pics/hibachi-chef-home.jpg',
    experienceImageAlt: (city) => `Private hibachi at a ${city}, Kentucky home`,
    areasPill:          'Serving Greater Louisville',
    areasHeadline:      (city) => `Private Hibachi in ${city} and the Greater Louisville Metro`,
    areasIntro: [
      (city, state) => `We serve ${city} and the greater Louisville metro — Prospect, St. Matthews, The Highlands, Jeffersontown, Anchorage, Crestwood, Shelbyville, and every surrounding community across Jefferson County and beyond.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Louisville Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Private Hibachi Experience ${city} Has Been Looking For`,
    occasionSubtext:       'Corporate team dinners, U of L and Bellarmine graduation parties, Derby season entertaining, and milestone family celebrations — private hibachi is Louisville\'s most memorable private group dining format',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Your Questions Answered`,
    testimonialSubheading: 'What Louisville Hosts Are Saying',
  },
  // T2 — Bowling Green & WKU
  {
    heroPill:         'Bowling Green Hibachi',
    experiencePill:   'Private Dining for South Kentucky',
    experiencePoints: (city) => [
      { icon: '🏡', title: `Your ${city} Home Is the Venue`,        desc: `No restaurant reservation required — your ${city} backyard, covered patio, or outdoor space becomes a private teppanyaki dining room for your group.` },
      { icon: '🎓', title: 'WKU Graduation Weekend Solution',       desc: `${city}'s WKU commencement fills every restaurant in the area for weeks. Private hibachi catering at your home means your family doesn't compete for the last available table — your chef comes to you.` },
      { icon: '🥩', title: 'Premium Proteins, Live Teppanyaki',     desc: 'Choose from chicken, steak, shrimp, salmon — or upgrade to filet mignon, lobster tail, Chilean sea bass, or wagyu. Every guest orders individually, cooked live at the teppan grill.' },
      { icon: '✨', title: 'Full Setup & Complete Cleanup',          desc: `Your chef arrives with the full self-contained setup, performs the complete teppanyaki experience, and leaves your ${city} property exactly as they found it.` },
    ],
    experienceImage:    '/pics/hibachi-chef-2.jpg',
    experienceImageAlt: (city) => `Private hibachi catering in ${city}, Kentucky`,
    areasPill:          'Serving South Kentucky',
    areasHeadline:      (city) => `Private Hibachi in ${city} and South Kentucky`,
    areasIntro: [
      (city, state) => `We serve ${city} and the surrounding south Kentucky corridor — Elizabethtown, Glasgow, Franklin, Scottsville, Cave City, and every Warren County and southern Kentucky community.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Bowling Green Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Private Hibachi Experience ${city} Has Been Looking For`,
    occasionSubtext:       'WKU graduation parties, Corvette Museum corridor corporate events, and south Kentucky family milestones — private hibachi catering is the group dinner format Bowling Green has been missing',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Your Questions Answered`,
    testimonialSubheading: 'What Bowling Green Hosts Are Saying',
  },
  // T3 — Northern KY / Cincinnati Metro
  {
    heroPill:         'Northern Kentucky Hibachi',
    experiencePill:   'Private Dining for Northern Kentucky',
    experiencePoints: (city) => [
      { icon: '🏡', title: `Your ${city} Home Is the Venue`,        desc: `No reservation required — your ${city} home, patio, or outdoor space becomes a private teppanyaki dining room for your group. A short drive from Cincinnati, an entirely different experience.` },
      { icon: '🌉', title: 'NKY Private Entertaining',              desc: `Northern Kentucky's Cincinnati-metro professionals and families have the outdoor entertaining infrastructure — covered decks, pool patios, backyard spaces — for a private hibachi event. When 18 people arrive for a party, a private chef handles all of them at once.` },
      { icon: '🥩', title: 'Premium Proteins, Live Teppanyaki',     desc: 'Choose from chicken, steak, shrimp, salmon — or upgrade to filet mignon, lobster tail, Chilean sea bass, or wagyu. Every guest orders individually, cooked live at the teppan grill.' },
      { icon: '✨', title: 'Full Setup & Complete Cleanup',          desc: `Your chef arrives with the full self-contained setup, performs the complete teppanyaki experience, and leaves your ${city} property exactly as they found it.` },
    ],
    experienceImage:    '/pics/private-event-4.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city}, Kentucky home`,
    areasPill:          'Serving Northern Kentucky',
    areasHeadline:      (city) => `Private Hibachi in ${city} and the Northern Kentucky Metro`,
    areasIntro: [
      (city, state) => `We serve ${city} and the greater Northern Kentucky corridor — Florence, Erlanger, Edgewood, Crescent Springs, Independence, Union, Newport, Alexandria, and every Kenton and Campbell County community.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your NKY Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Private Chef Experience Northern Kentucky Has Been Looking For`,
    occasionSubtext:       'Corporate team dinners, graduation parties, milestone birthday celebrations, and family events — private hibachi is Northern Kentucky\'s most memorable at-home group dining format',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Your Questions Answered`,
    testimonialSubheading: 'What Northern Kentucky Hosts Are Saying',
  },
  // T4 — Bluegrass Capital Corridor (Frankfort, Georgetown)
  {
    heroPill:         'Bluegrass Capital Hibachi',
    experiencePill:   'Private Dining Between Louisville and Lexington',
    experiencePoints: (city) => [
      { icon: '🏡', title: `Your ${city} Home Is the Venue`,        desc: `No reservation required — your ${city} home or outdoor space becomes a private teppanyaki dining room. Midway between Louisville and Lexington, and a destination for hibachi in its own right.` },
      { icon: '🏛️', title: `${city} Private Entertaining`,          desc: `${city}'s professional community — government workers in the capital corridor, Toyota manufacturing families in Scott County, and the growing residential base between Kentucky's two largest cities — has found a private group dining format that no local restaurant provides.` },
      { icon: '🥩', title: 'Premium Proteins, Live Teppanyaki',     desc: 'Choose from chicken, steak, shrimp, salmon — or upgrade to filet mignon, lobster tail, Chilean sea bass, or wagyu. Every guest orders individually, cooked live at the teppan grill.' },
      { icon: '✨', title: 'Full Setup & Complete Cleanup',          desc: `Your chef arrives with the full self-contained setup, performs the complete teppanyaki experience, and leaves your ${city} property exactly as they found it.` },
    ],
    experienceImage:    '/pics/hibachi-pic-2.jpg',
    experienceImageAlt: (city) => `Private hibachi at a ${city}, Kentucky home`,
    areasPill:          'Serving the Capital Corridor',
    areasHeadline:      (city) => `Private Hibachi in ${city} and the Bluegrass Capital Corridor`,
    areasIntro: [
      (city, state) => `We serve ${city} and the surrounding Bluegrass corridor — Frankfort, Georgetown, Versailles, Midway, Shelbyville, Lawrenceburg, and every community between Louisville and Lexington.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Private Hibachi Experience ${city} Has Been Looking For`,
    occasionSubtext:       'Graduation parties, milestone birthdays, corporate team dinners, and family milestone celebrations — private hibachi at home serves the Bluegrass Capital Corridor',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Your Questions Answered`,
    testimonialSubheading: 'What Bluegrass Corridor Hosts Are Saying',
  },
  // T5 — Western & Regional KY (Elizabethtown, Owensboro, Paducah)
  {
    heroPill:         'Western Kentucky Hibachi',
    experiencePill:   'Private Dining for Western Kentucky',
    experiencePoints: (city) => [
      { icon: '🏡', title: `Your ${city} Home Is the Venue`,        desc: `No reservation required — your ${city} home, covered patio, or backyard becomes a private teppanyaki dining room for your group. Your chef arrives fully equipped.` },
      { icon: '🌊', title: 'Western Kentucky Private Entertaining', desc: `${city}'s communities have always had the appetite for a premium group dining experience — what they've lacked is a format that works for 20 guests without a long drive east. Private hibachi at your ${city} home fills that gap.` },
      { icon: '🥩', title: 'Premium Proteins, Live Teppanyaki',     desc: 'Choose from chicken, steak, shrimp, salmon — or upgrade to filet mignon, lobster tail, Chilean sea bass, or wagyu. Every guest orders individually, cooked live at the teppan grill.' },
      { icon: '✨', title: 'Full Setup & Complete Cleanup',          desc: `Your chef arrives with the full self-contained setup, performs the complete teppanyaki experience, and leaves your ${city} property exactly as they found it.` },
    ],
    experienceImage:    '/pics/mobile-hibachi.jpg',
    experienceImageAlt: (city) => `Private hibachi at a ${city}, Kentucky home`,
    areasPill:          'Serving Western Kentucky',
    areasHeadline:      (city) => `Private Hibachi in ${city} and Western Kentucky`,
    areasIntro: [
      (city, state) => `We serve ${city} and the surrounding western Kentucky region — Elizabethtown, Owensboro, Paducah, Hopkinsville, Madisonville, Henderson, and every community across the western corridor.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Western KY Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Private Hibachi Experience ${city} Has Been Looking For`,
    occasionSubtext:       'Graduation parties, family milestone events, corporate team dinners, and anniversary celebrations — private hibachi brings the full teppanyaki experience to Western Kentucky homes',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Your Questions Answered`,
    testimonialSubheading: 'What Western Kentucky Hosts Are Saying',
  },
]

// ─── Testimonials ─────────────────────────────────────────────────────────────
const KY_TESTIMONIALS = {
  'louisville': [
    {
      text:     'We hosted an executive client dinner for 16 at our home in Prospect overlooking the river. Louisville has plenty of excellent restaurants — Jeff Ruby\'s, Proof on Main, Decca — but none of them work for a private group that size with the format I wanted. The private hibachi chef on our back patio was the answer. Two hours of live performance, premium proteins, every client at the same table. Everyone asked us how we arranged it.',
      name:     'William H.',
      city:     'Louisville, KY',
      event:    'Executive Client Dinner',
      initials: 'WH',
    },
    {
      text:     'My daughter graduated from U of L and we had 20 family members coming in from Ohio, Tennessee, and Indiana. Louisville graduation weekend means every restaurant on Bardstown Road and in NuLu is either fully booked or inadequate for a group that size. The private hibachi chef came to our St. Matthews home and performed for the whole family at once. The best graduation celebration we\'ve ever hosted.',
      name:     'Sandra K.',
      city:     'Louisville, KY',
      event:    'U of L Graduation Party',
      initials: 'SK',
    },
    {
      text:     'My husband\'s 55th birthday party. 22 guests at our home in The Highlands. I\'d looked at every Louisville option and nothing had the energy or the private feel I wanted for his milestone. The private hibachi chef on our back deck performed for two hours — fire tricks, individually cooked orders, everyone at the same table. My husband said it was the best birthday dinner he\'d ever had.',
      name:     'Carol T.',
      city:     'Louisville, KY',
      event:    '55th Birthday Celebration',
      initials: 'CT',
    },
  ],
  'lexington': [
    {
      text:     'We hosted a Keeneland fall meet dinner at our farm outside Lexington — 18 guests from the thoroughbred industry. I\'d considered every Lexington option and nothing worked for that group size in a private setting. The private hibachi chef set up in our barn pavilion, performed the full teppanyaki dinner for the whole group, and it was the single best hosted dinner of the season. We\'ve already booked for Keeneland spring.',
      name:     'James F.',
      city:     'Lexington, KY',
      event:    'Keeneland Season Dinner',
      initials: 'JF',
    },
    {
      text:     'My daughter graduated from UK and we had 24 family members flying in from four states. Lexington restaurant options for that group size on a May Saturday are essentially nonexistent in a private format. The private hibachi chef came to our Hamburg home, set up in the backyard, and performed for the whole family at once. Our daughter said it was the best celebration she could have imagined.',
      name:     'Linda B.',
      city:     'Lexington, KY',
      event:    'UK Graduation Party',
      initials: 'LB',
    },
    {
      text:     'Our 30th anniversary dinner. 16 of our closest family and friends at our home in Beaumont. We\'ve tried Lockbox, A La Lucie, and every Lexington restaurant that\'s supposed to be special — nothing for a group our size works the way I wanted for 30 years. The private hibachi chef on our patio, performing for everyone at once, was exactly right. My wife said it was the best dinner of our marriage.',
      name:     'Robert M.',
      city:     'Lexington, KY',
      event:    '30th Anniversary Dinner',
      initials: 'RM',
    },
  ],
  'bowling-green': [
    {
      text:     'My son graduated from WKU and we had 22 family members coming in from Nashville, Louisville, and Lexington. Every Bowling Green restaurant was booked by January for commencement weekend. The private hibachi chef came to our home near Sunnyside, set up in the backyard, and performed for the whole family at once. Our son said it was the best graduation celebration he could have had.',
      name:     'Donna R.',
      city:     'Bowling Green, KY',
      event:    'WKU Graduation Party',
      initials: 'DR',
    },
    {
      text:     'Our manufacturing team had an end-of-year celebration — 20 people at a colleague\'s home in Bowling Green. We\'d done team dinners at Mariah\'s and other local options before. The private hibachi catering was a completely different experience. Live performance in the backyard, individually cooked orders, everyone at the same table. The best team event we\'ve done in five years.',
      name:     'Jason P.',
      city:     'Bowling Green, KY',
      event:    'Corporate Team Celebration',
      initials: 'JP',
    },
    {
      text:     'A milestone birthday for my mother — 18 family members at our home in Bowling Green. I\'d looked at every south Kentucky option and nothing was going to match what I wanted for her 70th. The private hibachi catering chef came to us, set up on the covered patio, and performed the full teppanyaki dinner for the whole family. My mother said it was the most memorable dinner of her life.',
      name:     'Michelle C.',
      city:     'Bowling Green, KY',
      event:    '70th Birthday Celebration',
      initials: 'MC',
    },
  ],
  'covington': [
    {
      text:     'We hosted a corporate team dinner for 18 at my home in Covington — our company has offices in Cincinnati and NKY and I wanted an event that felt genuinely different from a restaurant reservation across the river. The private hibachi chef set up on our deck with the Cincinnati skyline in the background. Every guest said it was the most memorable work dinner they\'d attended. We\'ve already scheduled the next one.',
      name:     'Brian S.',
      city:     'Covington, KY',
      event:    'Corporate Team Dinner',
      initials: 'BS',
    },
    {
      text:     'My daughter\'s graduation from NKU. We had 20 family members at our Covington home and I didn\'t want to fight Cincinnati restaurant logistics for a group that size. The private hibachi chef came to us, set up on the back patio, and performed for the whole family. Our daughter said the live fire tricks were the highlight of the entire weekend.',
      name:     'Patricia M.',
      city:     'Covington, KY',
      event:    'NKU Graduation Party',
      initials: 'PM',
    },
    {
      text:     'My husband\'s 50th birthday. 24 friends and family at our Covington home in the Licking River area. I\'d looked at every Cincinnati and NKY option and private hibachi was the only format that gave everyone a shared experience at the same time. The chef performed for two hours, the food was outstanding, and my husband called it the best birthday dinner of his life.',
      name:     'Jennifer L.',
      city:     'Covington, KY',
      event:    '50th Birthday Celebration',
      initials: 'JL',
    },
  ],
  'florence': [
    {
      text:     'We used private hibachi for our family reunion in Florence — 28 family members at my parents\' home in Boone County. Getting everyone to a restaurant that size is a logistical nightmare and never feels quite right. The private hibachi chef set up in the backyard, performed for the whole group, and had everyone at the same table at the same time. My parents said it was the best family gathering they\'d hosted in twenty years.',
      name:     'Kevin W.',
      city:     'Florence, KY',
      event:    'Family Reunion Dinner',
      initials: 'KW',
    },
    {
      text:     'Our company held an end-of-year team celebration at one of our managers\' homes in Florence. We\'ve done the usual team dinners around the Cincinnati metro and nothing has come close to this. The private hibachi chef performed for the full team of 22, everyone ordered individually, and the whole evening had a shared energy that no restaurant private room ever creates.',
      name:     'Angela D.',
      city:     'Florence, KY',
      event:    'Year-End Team Celebration',
      initials: 'AD',
    },
    {
      text:     'My son\'s graduation party. He graduated from Thomas More University and we wanted something special at home in Florence rather than fighting for a restaurant on a busy May Saturday. The private hibachi chef came to us — 26 guests in the backyard — and performed the complete teppanyaki dinner. Our son called it the best graduation celebration his friends had seen.',
      name:     'Theresa B.',
      city:     'Florence, KY',
      event:    'Thomas More University Graduation Party',
      initials: 'TB',
    },
  ],
  'frankfort': [
    {
      text:     'I work in state government in Frankfort and we hosted a team appreciation dinner at my home for 20 colleagues. Finding a Frankfort restaurant that works for a private group that size is nearly impossible — the options are limited and the private formats don\'t really exist. The private hibachi chef came to our home on the Kentucky River, set up on the covered patio, and performed for the whole team. Everyone agreed it was the best work event we\'d done.',
      name:     'Thomas G.',
      city:     'Frankfort, KY',
      event:    'State Government Team Dinner',
      initials: 'TG',
    },
    {
      text:     'Our 25th anniversary dinner in Frankfort. 16 guests at our home near Capitol Avenue. I\'d wanted something different from the usual Frankfort restaurant options and private hibachi was exactly that. The chef performed for the whole group, my husband and I sat at the center of the table, and it became the most special anniversary evening we\'ve had. Our guests were still talking about it weeks later.',
      name:     'Rebecca A.',
      city:     'Frankfort, KY',
      event:    '25th Anniversary Dinner',
      initials: 'RA',
    },
    {
      text:     'My father\'s retirement party in Frankfort — 24 family members and colleagues from his 30-year career in state government. I wanted something genuinely memorable and private hibachi was the right call. The chef set up in our backyard, performed the full show, and my father said it was the best celebration he could have imagined after three decades of public service.',
      name:     'Laura N.',
      city:     'Frankfort, KY',
      event:    'State Government Retirement Party',
      initials: 'LN',
    },
  ],
  'georgetown': [
    {
      text:     'Toyota hosted a team event and we used private hibachi catering at a team lead\'s home in Georgetown. Getting 22 manufacturing professionals to a Georgetown restaurant that can handle a private group is a challenge. The private hibachi chef came to us — set up in the backyard — and performed for the whole team. It was the most memorable team dinner we\'ve done at the plant, and we\'re already planning the next one.',
      name:     'Mark R.',
      city:     'Georgetown, KY',
      event:    'Toyota Team Event',
      initials: 'MR',
    },
    {
      text:     'My daughter graduated from Georgetown College and we had 20 family members coming from Louisville, Lexington, and out of state. Private hibachi at our Georgetown home was the obvious choice — no restaurant scramble, no logistics for a large family group, just the chef performing in our backyard. Our daughter said it was the celebration she\'d always wanted.',
      name:     'Susan C.',
      city:     'Georgetown, KY',
      event:    'Georgetown College Graduation Party',
      initials: 'SC',
    },
    {
      text:     'My husband\'s 45th birthday party in Georgetown. 18 family members and close friends at our home in Scott County. I wanted something that felt genuinely special — not a restaurant where everyone splits into different conversations, but an event where everyone is part of the same experience at the same time. The private hibachi chef delivered exactly that. My husband talked about it for months.',
      name:     'Diane K.',
      city:     'Georgetown, KY',
      event:    '45th Birthday Celebration',
      initials: 'DK',
    },
  ],
  'elizabethtown': [
    {
      text:     'Fort Knox military community — we used private hibachi for a homecoming celebration in Elizabethtown. 22 family members and friends at our home on the north side of town. Elizabethtown restaurant options for a group that size and that occasion are limited, and I wanted something that matched the significance of the event. The private hibachi chef performed for the whole group and it was the best welcome-home dinner we could have had.',
      name:     'Amanda F.',
      city:     'Elizabethtown, KY',
      event:    'Military Homecoming Celebration',
      initials: 'AF',
    },
    {
      text:     'My son graduated from Elizabethtown Community and Technical College and we had 24 family members at our home in Hardin County. I wanted a catering format that could handle that size group in a private backyard setting without the restaurant logistics. The private hibachi catering was exactly right — the chef set up in the backyard, performed for everyone, and my son said it was the best celebration he\'d ever had.',
      name:     'Richard T.',
      city:     'Elizabethtown, KY',
      event:    'College Graduation Party',
      initials: 'RT',
    },
    {
      text:     'Our neighborhood association end-of-year dinner in Elizabethtown — 26 neighbors at a block event. We\'ve done cookouts before but nothing with the energy and shared experience of the hibachi performance. The catering chef came to the host\'s home, set up on the back patio, and performed for the whole neighborhood group. Everyone said we needed to make it an annual tradition.',
      name:     'Catherine S.',
      city:     'Elizabethtown, KY',
      event:    'Neighborhood Gathering',
      initials: 'CS',
    },
  ],
  'owensboro': [
    {
      text:     'We used mobile hibachi for my father\'s 70th birthday celebration in Owensboro — 20 family members at our family home on the west side. I\'d tried to find a private dining experience in Owensboro that could match the occasion and nothing came close. The mobile hibachi chef came to us fully equipped, performed the complete teppanyaki show in the backyard, and my father said it was the most special birthday dinner he\'d ever had.',
      name:     'Steven H.',
      city:     'Owensboro, KY',
      event:    '70th Birthday Celebration',
      initials: 'SH',
    },
    {
      text:     'My daughter\'s graduation from Kentucky Wesleyan College. 22 family members at our Owensboro home. Getting a large family group into a restaurant on graduation weekend in Owensboro is difficult — everything fills fast. The mobile hibachi came to us, set up in the backyard, and performed for the whole family. Our daughter called it the best graduation party of any of her friends.',
      name:     'Patricia W.',
      city:     'Owensboro, KY',
      event:    'Kentucky Wesleyan Graduation Party',
      initials: 'PW',
    },
    {
      text:     'Our healthcare team had a year-end celebration — 18 colleagues at a manager\'s home in Owensboro. We\'ve done team dinners at The Colby before, but private hibachi was something none of us had experienced at someone\'s home. The mobile chef performed for the full team, everyone ordered individually, and it was the most talked-about work event of the year.',
      name:     'Melissa D.',
      city:     'Owensboro, KY',
      event:    'Healthcare Team Year-End Celebration',
      initials: 'MD',
    },
  ],
  'paducah': [
    {
      text:     'We hosted a backyard hibachi party in Paducah for my wife\'s 50th birthday — 24 guests at our home in the Lone Oak area. I\'d been trying to find a private dining experience in Paducah that matched a milestone 50th and there simply wasn\'t one. The private hibachi chef came to us fully equipped, set up on the back patio, and performed for the entire group. My wife called it the most memorable evening of her birthday year.',
      name:     'Gregory M.',
      city:     'Paducah, KY',
      event:    '50th Birthday Celebration',
      initials: 'GM',
    },
    {
      text:     'My son\'s graduation from West Kentucky Community and Technical College — 20 family members at our Paducah home. Restaurant options for a private group that size in Paducah are limited, and I wanted something that could match the scale and energy of the occasion. The backyard hibachi party was exactly right. The chef performed for the whole family, and my son said it was the best graduation celebration he could have imagined.',
      name:     'Linda R.',
      city:     'Paducah, KY',
      event:    'Community College Graduation Party',
      initials: 'LR',
    },
    {
      text:     'Paducah Arts District visitors — we rented a home near downtown for a group trip and used private hibachi for the Saturday night dinner. 18 guests who all came for the quilts and stayed for the art scene. Private hibachi at the rental house was the right call for our last night together. The chef came fully equipped, performed the whole show on the back deck, and it became the highlight of the entire trip.',
      name:     'Carolyn J.',
      city:     'Paducah, KY',
      event:    'Group Trip Dinner',
      initials: 'CJ',
    },
  ],
}

// ─── City experience images ────────────────────────────────────────────────────
const KY_CITY_IMAGE_MAP = {
  'louisville':      { src: '/pics/hibachi-photo-1.jpg',    alt: (city) => `Private hibachi chef at a Louisville, Kentucky home` },
  'lexington':       { src: '/pics/hero-1.jpg',              alt: (city) => `Hibachi at home in Lexington, Kentucky` },
  'bowling-green':   { src: '/pics/hibachi-dallas.jpg',      alt: (city) => `Hibachi catering in Bowling Green, Kentucky` },
  'covington':       { src: '/pics/hibachi-catering.jpg',    alt: (city) => `Private hibachi chef at a Covington, Kentucky home` },
  'florence':        { src: '/pics/hero-2.jpg',              alt: (city) => `Hibachi at home in Florence, Kentucky` },
  'frankfort':       { src: '/pics/hibachi-pic-3.jpg',       alt: (city) => `Hibachi at home in Frankfort, Kentucky` },
  'georgetown':      { src: '/pics/hibachi-catering-2.jpg',  alt: (city) => `Hibachi at home in Georgetown, Kentucky` },
  'elizabethtown':   { src: '/pics/hibachi-shot-1.jpg',      alt: (city) => `Hibachi catering in Elizabethtown, Kentucky` },
  'owensboro':       { src: '/pics/hibachi-pic-4.jpg',       alt: (city) => `Mobile hibachi in Owensboro, Kentucky` },
  'paducah':         { src: '/pics/backyard-hibachi-3.jpg',  alt: (city) => `Backyard hibachi party in Paducah, Kentucky` },
}

// ─── Support images ────────────────────────────────────────────────────────────
const KY_SUPPORT_IMAGES = {
  'louisville': {
    testimonial: {
      src:        '/pics/backyard-hibachi-2.jpg',
      alt:        (city) => `Private hibachi at a Louisville, Kentucky home`,
      caption:    'Louisville Derby city executive and milestone events',
      trustBadge: 'Trusted by Louisville Hosts',
      intro:      (city) => `Louisville hosts — Prospect executives, The Highlands professionals, and families across the metro — have found that private hibachi delivers the live-performance group dining experience no Derby city restaurant can replicate for a private group of 20. Here's what Louisville hosts are saying:`,
    },
    cta: { src: null, alt: (city) => `Private hibachi chef at a Louisville, Kentucky home`, caption: 'The Louisville private dining format' },
  },
  'lexington': {
    testimonial: {
      src:        '/pics/hibachi-catering-3.jpg',
      alt:        (city) => `Hibachi at home in Lexington, Kentucky`,
      caption:    'Lexington horse country estate and milestone events',
      trustBadge: 'Trusted by Lexington Hosts',
      intro:      (city) => `Lexington hosts — thoroughbred estate families, Hamburg and Beaumont suburban households, and the UK graduation community — have found that private hibachi at home delivers the premium private dining experience that matches the Bluegrass region's standard for private entertaining. Here's what Lexington hosts are saying:`,
    },
    cta: { src: null, alt: (city) => `Private hibachi chef at a Lexington, Kentucky estate`, caption: 'The Lexington horse country private dining format' },
  },
  'bowling-green': {
    testimonial: {
      src:        '/pics/hibachi-raleigh.jpg',
      alt:        (city) => `Hibachi catering in Bowling Green, Kentucky`,
      caption:    'Bowling Green WKU graduation and corporate events',
      trustBadge: 'Trusted by Bowling Green Hosts',
      intro:      (city) => `Bowling Green hosts — WKU graduation families, Corvette corridor corporate teams, and south Kentucky households — have found that private hibachi catering delivers a group dining experience no local restaurant can provide for a private group of 20. Here's what Bowling Green hosts are saying:`,
    },
    cta: { src: null, alt: (city) => `Hibachi catering in Bowling Green, Kentucky`, caption: 'The Bowling Green south Kentucky catering format' },
  },
  'covington': {
    testimonial: {
      src:        '/pics/mobile-hibachi-2.jpg',
      alt:        (city) => `Private hibachi chef at a Covington, Kentucky home`,
      caption:    'Covington NKY corporate and milestone events',
      trustBadge: 'Trusted by Northern Kentucky Hosts',
      intro:      (city) => `Covington and Northern Kentucky hosts — Cincinnati-corridor professionals, NKU families, and Kenton County communities — have found that private hibachi delivers the live-performance group dining experience no Cincinnati or NKY restaurant provides for a private group. Here's what hosts are saying:`,
    },
    cta: { src: null, alt: (city) => `Private hibachi chef at a Covington, Kentucky home`, caption: 'The Northern Kentucky private hibachi format' },
  },
  'florence': {
    testimonial: {
      src:        '/pics/hibachi-pic-3.jpg',
      alt:        (city) => `Hibachi at home in Florence, Kentucky`,
      caption:    'Florence NKY family and corporate events',
      trustBadge: 'Trusted by Florence Hosts',
      intro:      (city) => `Florence and Boone County hosts — NKY families, corporate groups, and graduation communities — have found that hibachi at home delivers a shared group dining experience that no Northern Kentucky restaurant can replicate for a private group of 20. Here's what hosts are saying:`,
    },
    cta: { src: null, alt: (city) => `Hibachi at home in Florence, Kentucky`, caption: 'The Florence Northern Kentucky hibachi format' },
  },
  'frankfort': {
    testimonial: {
      src:        '/pics/hibachi-chef-at-home.jpg',
      alt:        (city) => `Hibachi at home in Frankfort, Kentucky`,
      caption:    'Frankfort state capital and Bluegrass corridor events',
      trustBadge: 'Trusted by Frankfort Hosts',
      intro:      (city) => `Frankfort hosts — state government professionals, capital corridor families, and Kentucky River community residents — have found that hibachi at home delivers a private group dining experience that Frankfort's limited restaurant landscape cannot provide. Here's what hosts are saying:`,
    },
    cta: { src: null, alt: (city) => `Hibachi at home in Frankfort, Kentucky`, caption: 'The Frankfort capital corridor hibachi format' },
  },
  'georgetown': {
    testimonial: {
      src:        '/pics/hibachi-colorado-home.jpg',
      alt:        (city) => `Hibachi at home in Georgetown, Kentucky`,
      caption:    'Georgetown Toyota corridor and Scott County events',
      trustBadge: 'Trusted by Georgetown Hosts',
      intro:      (city) => `Georgetown hosts — Toyota manufacturing families, Georgetown College graduation communities, and Scott County households — have found that hibachi at home delivers a group dining experience no local restaurant can provide at scale. Here's what Georgetown hosts are saying:`,
    },
    cta: { src: null, alt: (city) => `Hibachi at home in Georgetown, Kentucky`, caption: 'The Georgetown Scott County hibachi format' },
  },
  'elizabethtown': {
    testimonial: {
      src:        '/pics/private-chef-2.jpg',
      alt:        (city) => `Hibachi catering in Elizabethtown, Kentucky`,
      caption:    'Elizabethtown Fort Knox corridor and Hardin County events',
      trustBadge: 'Trusted by Elizabethtown Hosts',
      intro:      (city) => `Elizabethtown hosts — Fort Knox military families, Hardin County community residents, and I-65 corridor professionals — have found that hibachi catering at home delivers a private group dining experience that matches the significance of milestone occasions. Here's what hosts are saying:`,
    },
    cta: { src: null, alt: (city) => `Hibachi catering in Elizabethtown, Kentucky`, caption: 'The Elizabethtown Fort Knox corridor hibachi format' },
  },
  'owensboro': {
    testimonial: {
      src:        '/pics/backyard-hibachi.jpg',
      alt:        (city) => `Mobile hibachi in Owensboro, Kentucky`,
      caption:    'Owensboro western Kentucky milestone and corporate events',
      trustBadge: 'Trusted by Owensboro Hosts',
      intro:      (city) => `Owensboro hosts — western Kentucky families, Kentucky Wesleyan and Brescia University graduation communities, and Daviess County professionals — have found that mobile hibachi brings the live teppanyaki experience to their home when no local restaurant can match the occasion. Here's what hosts are saying:`,
    },
    cta: { src: null, alt: (city) => `Mobile hibachi in Owensboro, Kentucky`, caption: 'The Owensboro western Kentucky mobile hibachi format' },
  },
  'paducah': {
    testimonial: {
      src:        '/pics/hibachi-pic-32.jpg',
      alt:        (city) => `Backyard hibachi party in Paducah, Kentucky`,
      caption:    'Paducah western Kentucky backyard milestone events',
      trustBadge: 'Trusted by Paducah Hosts',
      intro:      (city) => `Paducah hosts — western Kentucky families, McCracken County communities, and Ohio River corridor residents — have found that a backyard hibachi party delivers a live-performance group dining experience that the Paducah restaurant landscape simply cannot replicate for a private group of 20. Here's what hosts are saying:`,
    },
    cta: { src: null, alt: (city) => `Backyard hibachi party in Paducah, Kentucky`, caption: 'The Paducah western Kentucky backyard hibachi format' },
  },
}

// ─── Custom meta ───────────────────────────────────────────────────────────────
const KY_CUSTOM_META = {
  'louisville': {
    title: 'Private Hibachi Chef in Louisville, KY | Hibachi Connect',
    desc:  'Private hibachi chef in Louisville, Kentucky for Derby season entertaining, U of L graduation parties, and milestone celebrations. Your chef comes to your Louisville home.',
  },
  'lexington': {
    title: 'Hibachi at Home in Lexington, KY | Hibachi Connect',
    desc:  'Hibachi at home in Lexington, Kentucky for UK graduation weekends, Keeneland season entertaining, and horse country milestone celebrations. Your private chef arrives fully equipped.',
  },
  'bowling-green': {
    title: 'Hibachi Catering in Bowling Green, KY | Hibachi Connect',
    desc:  'Hibachi catering in Bowling Green, Kentucky for WKU graduation parties, corporate team events, and south Kentucky family milestones. Your private chef comes to your home.',
  },
  'covington': {
    title: 'Private Hibachi Chef in Covington, KY | Hibachi Connect',
    desc:  'Private hibachi chef in Covington, Kentucky for NKU graduation parties, corporate team dinners, and Northern Kentucky milestone celebrations. Fully self-contained — no hookups required.',
  },
  'florence': {
    title: 'Hibachi at Home in Florence, KY | Hibachi Connect',
    desc:  'Hibachi at home in Florence, Kentucky for family reunions, graduation parties, and Boone County milestone celebrations. Your private chef arrives fully equipped for your Northern Kentucky event.',
  },
  'frankfort': {
    title: 'Hibachi at Home in Frankfort, KY | Hibachi Connect',
    desc:  'Hibachi at home in Frankfort, Kentucky for state capital professional entertaining, graduation parties, and family milestone events. Your private chef comes to your Frankfort home.',
  },
  'georgetown': {
    title: 'Hibachi at Home in Georgetown, KY | Hibachi Connect',
    desc:  'Hibachi at home in Georgetown, Kentucky for Toyota team events, Georgetown College graduation parties, and Scott County family milestones. Your private chef arrives fully equipped.',
  },
  'elizabethtown': {
    title: 'Hibachi Catering in Elizabethtown, KY | Hibachi Connect',
    desc:  'Hibachi catering in Elizabethtown, Kentucky for Fort Knox military homecomings, graduation parties, and Hardin County family events. Your private chef comes to your home fully equipped.',
  },
  'owensboro': {
    title: 'Mobile Hibachi in Owensboro, KY | Hibachi Connect',
    desc:  'Mobile hibachi in Owensboro, Kentucky for milestone birthday parties, Kentucky Wesleyan graduation events, and western Kentucky family celebrations. Your chef arrives fully self-contained.',
  },
  'paducah': {
    title: 'Backyard Hibachi Party in Paducah, KY | Hibachi Connect',
    desc:  'Backyard hibachi party in Paducah, Kentucky for milestone birthday celebrations, graduation parties, and western Kentucky family events. Your private hibachi chef comes to your Paducah home.',
  },
}

// ─── KY_INTRO_VARIANTS — 3 generic entries (indices 753–755) ──────────────────
export const KY_INTRO_VARIANTS = [
  // T0 (753) — Lexington Horse Country
  {
    headline: () => 'Lexington\'s Bluegrass Estates and Keeneland Community Have Found a New Private Dining Format',
    opening:  () => 'Lexington\'s horse country community — the thoroughbred farm estates, the Keeneland racing families, and the Hamburg and Beaumont suburban households that represent some of the fastest-growing residential corridors in central Kentucky — has always set a high standard for private entertaining. When your guest list includes industry colleagues, family from four states, or the team that just completed a record year, a Lexington restaurant reservation no longer rises to the occasion. A private chef at your own home does.',
    middle:   () => 'Private hibachi brings the full teppanyaki experience to your outdoor space — live fire, premium proteins cooked to order, and 90 minutes of shared entertainment that no central Kentucky restaurant can replicate for a private group.',
    closing:  () => 'Lexington and Bluegrass region hosts have found that private hibachi is the format that matches their outdoor entertaining infrastructure — from horse country estate pavilions to suburban backyard decks. UK graduation season and Keeneland meet weekends fill quickly — secure your event today.',
  },
  // T1 (754) — Louisville Metro & Derby Culture
  {
    headline: () => 'Louisville\'s Derby City Has Found a Private Dining Format That Matches the Occasion',
    opening:  () => 'Louisville has one of the most sophisticated private entertaining cultures in the south — shaped by Derby season, bourbon culture, and the executive professional community that has built its career and its home in Prospect, St. Matthews, The Highlands, and the greater Jefferson County corridor. When the occasion demands something more memorable than a reservation at Jeff Ruby\'s or Proof on Main, private hibachi at your Louisville home is the answer.',
    middle:   () => 'The chef arrives at your Louisville property fully self-contained — the complete propane teppan grill, all proteins, rice, vegetables, sauces, and every piece of equipment required. No gas hookup. No venue minimum. Just the full live teppanyaki performance for every guest at once.',
    closing:  () => 'Louisville hosts have found that private hibachi delivers the kind of Derby city private entertaining their outdoor spaces were designed for. U of L and Bellarmine graduation season and spring peak dates fill quickly — confirm your event today.',
  },
  // T2 (755) — Bowling Green & WKU
  {
    headline: () => 'Bowling Green and South Kentucky Have Found a Private Catering Format That Finally Works for Groups of 20',
    opening:  () => 'Bowling Green\'s growing corridor — the WKU campus community, the Corvette Museum and GM manufacturing corridor, the Nashville-suburb professionals who have relocated north along I-65, and the established Warren County families who have anchored south Kentucky\'s social calendar for generations — has always had the appetite for premium private group dining. What it has lacked is a format that works for 20 or 25 guests without a 90-minute drive to Nashville or Louisville. Private hibachi catering solves it.',
    middle:   () => 'The chef arrives at your Bowling Green home fully self-contained and performs the complete teppanyaki dinner for your group. WKU graduation parties, corporate year-end celebrations for the GM manufacturing corridor, and milestone family events all fit the same format in your own backyard.',
    closing:  () => 'Bowling Green and south Kentucky hosts have found that private hibachi catering is worth the same call as Louisville or Nashville — without the drive. WKU commencement weekend and spring peak dates fill quickly — book your event early.',
  },
]

// ─── KY_CLOSING_VARIANTS — 3 generic (indices 753–755) ────────────────────────
export const KY_CLOSING_VARIANTS = [
  // T0 (753) — Lexington Horse Country
  {
    headline:     (city) => `Book Your ${city} Private Hibachi Event`,
    sub:          (city) => `UK graduation celebrations, Keeneland season entertaining, and Bluegrass milestone events — your private chef arrives fully equipped`,
    urgency:      'Lexington UK graduation season and Keeneland meet weekends fill quickly — secure your event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // T1 (754) — Louisville Metro & Derby Culture
  {
    headline:     (city) => `Book Your ${city} Private Hibachi Event`,
    sub:          (city) => `Derby city executive dinners, U of L and Bellarmine graduation parties, and ${city} milestone celebrations — your private chef comes to your home`,
    urgency:      'Louisville graduation season and spring peak dates fill quickly — confirm your event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // T2 (755) — Bowling Green & WKU
  {
    headline:     (city) => `Book Your ${city} Hibachi Catering Event`,
    sub:          (city) => `WKU graduation parties, corporate team dinners, and south Kentucky family milestones — your private chef arrives fully equipped`,
    urgency:      'WKU commencement weekend dates fill quickly — book your Bowling Green event early.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
]

// ─── KY_CITY_INTROS — Batch 1 city-specific (indices 756–758) ─────────────────
export const KY_CITY_INTROS = [
  // 756 — Louisville
  {
    headline: () => 'Louisville\'s Derby City Private Entertaining Has a New Format',
    opening:  () => 'Louisville is Kentucky\'s largest city and one of the most private-entertaining-forward cities in the south — shaped by Derby season, the bourbon trail, and the executive professional community that has built its home in Prospect, St. Matthews, The Highlands, and Anchorage. When a corporate client dinner for 18 requires something more than a table at Jeff Ruby\'s, or a U of L graduation party brings 22 family members from four states on a May weekend when every reservation is taken, private hibachi at your Louisville home is the format that delivers.',
    middle:   () => 'The chef arrives at your Louisville property fully self-contained — the complete self-contained propane teppan grill, all proteins, rice, vegetables, sauces, and every piece of equipment. No gas hookup. No venue fee. No minimum-spend guarantee. Just the full teppanyaki performance for every guest at once on your back patio or deck.',
    closing:  () => 'We serve Louisville, Prospect, St. Matthews, The Highlands, Jeffersontown, Anchorage, Crestwood, Shelbyville, and all of Jefferson County and the greater Louisville metro. Graduation season and spring peak dates fill 4–5 weeks ahead — secure your event today.',
  },
  // 757 — Lexington
  {
    headline: () => 'Lexington\'s Horse Country Community Has Found the Private Chef Format Their Estates Were Built For',
    opening:  () => 'Lexington sits at the center of Kentucky\'s thoroughbred country — and the Bluegrass region\'s estate and suburban communities have the outdoor entertaining infrastructure that private hibachi was designed for. Farm pavilions facing the paddocks. Back decks on Hamburg Pavilion-area homes that seat 25. Covered patios in Beaumont and Tates Creek Road neighborhoods that have never had a private chef format that matched them. Private hibachi at your Lexington property fills exactly that gap.',
    middle:   () => 'UK commencement is one of the strongest graduation party markets in Kentucky — families fly in from across the southeast for their Wildcat\'s weekend, and every Lexington restaurant fills by March. Keeneland fall and spring meet seasons draw industry dinners and estate entertaining throughout October and April. And the milestone birthday and anniversary celebrations for the Lexington professional and thoroughbred community all share the same preference: private, premium, and at home.',
    closing:  () => 'We serve Lexington, Hamburg, Beaumont, Georgetown, Richmond, Versailles, Paris, Winchester, and all of central Kentucky\'s Bluegrass region. UK graduation season and Keeneland meet windows fill 4–5 weeks ahead — secure your Lexington event today.',
  },
  // 758 — Bowling Green
  {
    headline: () => 'WKU Graduation Weekend in Bowling Green Deserves More Than a Full Restaurant',
    opening:  () => 'Western Kentucky University commencement is one of the most compressed graduation-weekend restaurant events in south Kentucky. WKU draws families from across Tennessee, Indiana, and the greater Mid-South for commencement weekend, and Bowling Green\'s restaurant capacity fills months ahead for May and December graduation dates. Families who drive up from Nashville or down from Louisville for their Hilltopper\'s big weekend have historically had two options: a very long waitlist or a very long drive. Private hibachi catering comes to your Bowling Green home before the scramble starts.',
    middle:   () => 'WKU graduation parties that bring extended families from Nashville, Louisville, and across the south. Corporate team celebrations for the GM Corvette plant professionals and the growing Bowling Green manufacturing corridor. Milestone family events for the Warren County residents who have anchored south Kentucky\'s social calendar for generations. All of it fits the same format at your Bowling Green home.',
    closing:  () => 'We serve Bowling Green, Elizabethtown, Glasgow, Franklin, Scottsville, Cave City, Auburn, and all of south Kentucky. WKU commencement weekend and spring peak dates fill months ahead — book your Bowling Green catering event early.',
  },
]

// ─── KY_CITY_CLOSINGS — Batch 1 city-specific (indices 756–758) ───────────────
export const KY_CITY_CLOSINGS = [
  // 756 — Louisville
  {
    headline:     (city) => `Book Your Louisville Private Hibachi Event`,
    sub:          (city) => `Derby city executive dinners, U of L graduation parties, and Louisville metro milestones — your private chef comes to your home`,
    urgency:      'Louisville graduation season and spring peak dates fill 4–5 weeks ahead — secure your event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 757 — Lexington
  {
    headline:     (city) => `Book Your Lexington Private Hibachi Event`,
    sub:          (city) => `UK graduation celebrations, Keeneland season entertaining, and Lexington milestone events — your private chef arrives fully equipped`,
    urgency:      'Lexington UK graduation season and Keeneland meet weekends fill 4–5 weeks ahead — secure your event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 758 — Bowling Green
  {
    headline:     (city) => `Book Your Bowling Green Hibachi Catering Event`,
    sub:          (city) => `WKU graduation parties, corporate team celebrations, and south Kentucky milestones — your private chef arrives at your home fully set up`,
    urgency:      'WKU commencement weekend and spring peak dates fill months ahead — book your Bowling Green event early.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
]

// ─── KY_EXPANSION_CITY_INTROS — Batches 2+3 (indices 794–800) ─────────────────
export const KY_EXPANSION_CITY_INTROS = [
  // 794 — Covington
  {
    headline: () => 'Northern Kentucky\'s Cincinnati Corridor Has Found the Private Dining Format It\'s Been Missing',
    opening:  () => 'Covington sits directly across the Ohio River from Cincinnati — and Northern Kentucky\'s professional and family communities have long had the homes, the outdoor spaces, and the appetite for a private group dining experience that matches what the greater metro offers. What they\'ve often lacked is a format that works in their own backyard rather than requiring a bridge crossing to a Cincinnati restaurant. Private hibachi at your Covington home solves that directly.',
    middle:   () => 'NKU graduation families. Kenton County professionals with covered decks that seat 20. Corporate teams from the Cincinnati-NKY corridor who want an event that happens at a colleague\'s home rather than a restaurant private room. Fort Mitchell, Edgewood, Crescent Springs, and the greater Northern Kentucky communities that form one of Kentucky\'s most dynamic residential markets. All of it fits the same format.',
    closing:  () => 'We serve Covington, Newport, Florence, Erlanger, Edgewood, Fort Mitchell, Crescent Springs, Independence, Union, and all of Northern Kentucky\'s Kenton and Campbell County communities. NKU graduation season and peak spring dates fill quickly — secure your event today.',
  },
  // 795 — Florence
  {
    headline: () => 'Florence and Boone County Have Found a Group Dining Format That Finally Works for 20',
    opening:  () => 'Florence is Northern Kentucky\'s largest city by population and one of the region\'s most active residential communities — Boone County\'s combination of strong family demographics, growing professional households, and a location that puts it equidistant between the best of Cincinnati and Louisville has made it one of Kentucky\'s most sought-after addresses. What Florence has always had is the outdoor space. What it has lacked is a group dining format that uses it the right way. Private hibachi at your Florence home fills that gap.',
    middle:   () => 'Florence family reunions that bring extended family from Ohio, Indiana, and Tennessee together at a Boone County home. Thomas More University graduation parties where 24 family members arrive for the weekend and need a dinner format that works at the house. Corporate teams from the I-75 and I-71 corridor that want an end-of-year event at a colleague\'s home. All of it fits.',
    closing:  () => 'We serve Florence, Erlanger, Edgewood, Hebron, Burlington, Walton, Union, and all of Boone County and Northern Kentucky\'s southern corridor. Spring graduation season and summer peak dates fill quickly — book your Florence event today.',
  },
  // 796 — Frankfort
  {
    headline: () => 'Frankfort\'s State Capital Community Has Found a Private Dining Format That Matches the Occasion',
    opening:  () => 'Frankfort is Kentucky\'s state capital — home to the government workforce, the Kentucky bourbon corridor, and a professional community that sits midway between Louisville and Lexington on a stretch of the Kentucky River that has some of the most beautiful residential settings in the state. Frankfort\'s restaurant landscape is limited relative to its professional population. When a government team needs a private dinner for 20 colleagues, or a capital corridor family celebrates a milestone anniversary, private hibachi at your Frankfort home is the format that finally matches the setting.',
    middle:   () => 'Government team appreciation events for departments across state agencies. Family reunions for the Bluegrass families who have anchored the Frankfort social calendar for generations. Retirement celebrations for 30-year public servants. Georgetown corridor professionals who treat Frankfort as their de facto community. All of it works at your Frankfort home.',
    closing:  () => 'We serve Frankfort, Versailles, Midway, Lawrenceburg, Shelbyville, and the full corridor between Louisville and Lexington. Spring events and graduation season book quickly — secure your Frankfort event today.',
  },
  // 797 — Georgetown
  {
    headline: () => 'Georgetown\'s Toyota Corridor and Georgetown College Community Have Found a Private Chef Format',
    opening:  () => 'Georgetown, Kentucky sits at the intersection of two powerful markets: the Toyota Motor Manufacturing plant — one of the most important manufacturing facilities in North America, employing thousands of Scott County residents and managers — and Georgetown College, a liberal arts university that draws graduation families from across Kentucky and the Southeast every May. Both markets share the same challenge when planning a private group dinner for 20: Georgetown\'s restaurant landscape was never built for it. Private hibachi at your Georgetown home was.',
    middle:   () => 'Toyota team events at a plant manager\'s home in Scott County. Georgetown College graduation parties where families come from Louisville, Lexington, Nashville, and beyond for the May weekend. Milestone anniversary dinners for the Georgetown professional community that has grown alongside the Toyota plant for three decades. All of it fits the same format at your home between Louisville and Lexington.',
    closing:  () => 'We serve Georgetown, Scott County, Stamping Ground, Sadieville, and the full corridor between Lexington and Frankfort. Georgetown College graduation season and Toyota team event season book quickly — secure your Georgetown event today.',
  },
  // 798 — Elizabethtown
  {
    headline: () => 'Elizabethtown and Fort Knox Have Found the Private Catering Format Their Communities Deserve',
    opening:  () => 'Elizabethtown sits at the center of one of Kentucky\'s most distinctive communities — the Fort Knox military corridor, with its combination of active duty families, veterans, and the civilian professional population that has built the Hardin County economy alongside the installation. When a military homecoming brings 20 family members to Elizabethtown, or a Fort Knox unit celebrates a deployment completion, or a graduating senior from ECTC brings extended family from across the state for their weekend, Elizabethtown\'s restaurant options rarely rise to the occasion. Private hibachi catering at your home does.',
    middle:   () => 'Military homecomings and welcome-home celebrations that require a private, meaningful group dinner format. ECTC and Elizabethtown Community and Technical College graduation parties for families driving up from Tennessee and across the south. Corporate catering events for the growing manufacturing and healthcare sector along the I-65 corridor. Milestone family celebrations for the Hardin County families who have lived here for generations.',
    closing:  () => 'We serve Elizabethtown, Radcliff, Vine Grove, Hardinsburg, Leitchfield, and the full Hardin and surrounding county corridor. Military family events, graduation season, and spring peak dates fill quickly — book your Elizabethtown catering event early.',
  },
  // 799 — Owensboro
  {
    headline: () => 'Owensboro and Western Kentucky Have Found a Mobile Hibachi Format That Comes to Them',
    opening:  () => 'Owensboro is western Kentucky\'s largest city — home to Kentucky Wesleyan College, Brescia University, a growing healthcare sector anchored by Owensboro Health, and the Ohio River community that has defined western Kentucky\'s character for two centuries. It is also, historically, a city where premium group dining has required a significant drive east. Mobile hibachi changes that equation. The chef comes to your Owensboro home fully self-contained — the complete teppan grill, all ingredients, all equipment — and performs the full teppanyaki dinner in your own backyard.',
    middle:   () => 'Kentucky Wesleyan and Brescia graduation parties where families arrive from Louisville, Nashville, and across the region for the commencement weekend. Milestone birthday and anniversary celebrations for the Owensboro families who have built their lives here. Owensboro Health and other corporate sector team dinners where a colleague\'s home becomes the venue. All of it works with mobile hibachi.',
    closing:  () => 'We serve Owensboro, Henderson, Madisonville, Hopkinsville, Greenville, and all of western Kentucky\'s Daviess County corridor. Graduation season and spring peak dates fill quickly — book your Owensboro mobile hibachi event early.',
  },
  // 800 — Paducah
  {
    headline: () => 'Paducah\'s Western Kentucky Community Deserves a Backyard Hibachi Party Format',
    opening:  () => 'Paducah sits at the convergence of the Tennessee and Ohio Rivers and has built a distinctive identity over the past two decades — the National Quilt Museum, the Lower Town Arts District, a growing culinary scene, and a community that takes genuine pride in its place in western Kentucky. What Paducah has also built is a residential base with the covered patios, backyard decks, and outdoor entertaining spaces that a backyard hibachi party was designed for. The chef arrives fully equipped — no gas hookup, no kitchen infrastructure needed — and performs the full teppanyaki dinner at your Paducah home.',
    middle:   () => 'Milestone birthday celebrations for the Paducah families who\'ve established roots in McCracken County. West Kentucky Community and Technical College graduation parties where families drive up from the Tennessee state line and across the region. Arts community gatherings in the Lower Town neighborhood. Ohio River corridor destination visitors who rent a Paducah home for a weekend trip and need a Saturday dinner format that stays at the house.',
    closing:  () => 'We serve Paducah, McCracken County, Mayfield, Murray, Hopkinsville, Benton, and all of the western Kentucky Purchase Area. Spring events and graduation season book quickly — secure your Paducah backyard hibachi party today.',
  },
]

// ─── KY_EXPANSION_CITY_CLOSINGS — Batches 2+3 (indices 794–800) ───────────────
export const KY_EXPANSION_CITY_CLOSINGS = [
  // 794 — Covington
  {
    headline:     (city) => `Book Your Covington Private Hibachi Event`,
    sub:          (city) => `NKY corporate team dinners, NKU graduation parties, and Northern Kentucky milestone celebrations — your private chef comes to your home`,
    urgency:      'Northern Kentucky graduation season and spring peak dates fill quickly — secure your Covington event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 795 — Florence
  {
    headline:     (city) => `Book Your Florence Hibachi at Home Event`,
    sub:          (city) => `Boone County family reunions, graduation parties, and Northern Kentucky milestone celebrations — your private chef arrives fully equipped`,
    urgency:      'Florence spring graduation season and summer peak dates fill quickly — book your event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 796 — Frankfort
  {
    headline:     (city) => `Book Your Frankfort Hibachi Event`,
    sub:          (city) => `State capital team dinners, retirement celebrations, and Bluegrass Capital Corridor milestones — your private chef comes to your Frankfort home`,
    urgency:      'Frankfort spring events and graduation season book quickly — secure your event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 797 — Georgetown
  {
    headline:     (city) => `Book Your Georgetown Hibachi Event`,
    sub:          (city) => `Toyota team events, Georgetown College graduation parties, and Scott County milestone celebrations — your private chef arrives fully equipped`,
    urgency:      'Georgetown College graduation season and spring peak dates fill quickly — book your event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 798 — Elizabethtown
  {
    headline:     (city) => `Book Your Elizabethtown Hibachi Catering Event`,
    sub:          (city) => `Fort Knox military homecomings, ECTC graduation parties, and Hardin County family milestones — your private chef arrives at your home fully set up`,
    urgency:      'Elizabethtown military family events and graduation season book quickly — secure your event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 799 — Owensboro
  {
    headline:     (city) => `Book Your Owensboro Mobile Hibachi Event`,
    sub:          (city) => `Kentucky Wesleyan graduation parties, milestone birthday celebrations, and western Kentucky family events — your mobile hibachi chef comes to you`,
    urgency:      'Owensboro graduation season and spring peak dates fill quickly — book your mobile hibachi event early.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 800 — Paducah
  {
    headline:     (city) => `Book Your Paducah Backyard Hibachi Party`,
    sub:          (city) => `Western Kentucky milestone celebrations, WKTCommunity graduation parties, and McCracken County family events — your private hibachi chef comes to your Paducah home`,
    urgency:      'Paducah spring events and graduation season book quickly — secure your backyard hibachi party today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
]

// ─── Major cities map ──────────────────────────────────────────────────────────
const KY_MAJOR_CITIES = {
  'louisville':    { v: 1, profileIdx: 0, nearby: ['Lexington', 'Elizabethtown', 'Shelbyville'] },
  'lexington':     { v: 0, profileIdx: 1, nearby: ['Louisville', 'Georgetown', 'Richmond'] },
  'bowling-green': { v: 2, profileIdx: 2, nearby: ['Nashville', 'Elizabethtown', 'Glasgow'] },
  'covington':     { v: 3, profileIdx: 3, expansionIdx: 0, nearby: ['Louisville', 'Florence', 'Newport'] },
  'florence':      { v: 3, profileIdx: 4, expansionIdx: 1, nearby: ['Covington', 'Louisville', 'Lexington'] },
  'frankfort':     { v: 4, profileIdx: 5, expansionIdx: 2, nearby: ['Louisville', 'Lexington', 'Georgetown'] },
  'georgetown':    { v: 4, profileIdx: 6, expansionIdx: 3, nearby: ['Lexington', 'Frankfort', 'Louisville'] },
  'elizabethtown': { v: 5, profileIdx: 7, expansionIdx: 4, nearby: ['Louisville', 'Bowling Green', 'Frankfort'] },
  'owensboro':     { v: 5, profileIdx: 8, expansionIdx: 5, nearby: ['Louisville', 'Bowling Green', 'Elizabethtown'] },
  'paducah':       { v: 5, profileIdx: 9, expansionIdx: 6, nearby: ['Louisville', 'Bowling Green', 'Owensboro'] },
}

// ─── Display name overrides ────────────────────────────────────────────────────
const KY_CITY_DISPLAY_NAMES = {
  'bowling-green':  'Bowling Green',
  'elizabethtown':  'Elizabethtown',
}

// ─── Blog posts ───────────────────────────────────────────────────────────────
// v%3=0 → Lexington(v=0), Covington(v=3), Florence(v=3)
// v%3=1 → Louisville(v=1), Frankfort(v=4), Georgetown(v=4)
// v%3=2 → Bowling Green(v=2), Elizabethtown(v=5), Owensboro(v=5), Paducah(v=5)
export const KY_BLOG_POSTS = [
  // Slot 0 — Lexington, Covington, Florence
  [
    { slug: 'hibachi-at-home-kentucky-guide',                    title: 'Hibachi at Home in Kentucky: Louisville, Lexington, and Bowling Green Guide',                                  date: '2025-03-15', excerpt: 'Everything Kentucky hosts need to know — Derby city executive entertaining, horse country estate events, and WKU graduation parties.' },
    { slug: 'private-hibachi-louisville-derby-season',           title: 'Private Hibachi in Louisville: Derby Season, U of L Graduation, and Executive Entertaining',                 date: '2025-04-05', excerpt: 'How Louisville hosts use private hibachi for Derby season, U of L graduation parties, and milestone celebrations.' },
    { slug: 'private-hibachi-northern-kentucky-covington-florence', title: 'Private Hibachi in Northern Kentucky: Covington, Florence, and the Cincinnati Corridor',                  date: '2026-10-01', excerpt: 'How Northern Kentucky\'s Covington and Florence communities use private hibachi for graduation parties, corporate team dinners, and milestone celebrations.' },
  ],
  // Slot 1 — Louisville, Frankfort, Georgetown
  [
    { slug: 'private-hibachi-louisville-derby-season',           title: 'Private Hibachi in Louisville: Derby Season, U of L Graduation, and Executive Entertaining',                 date: '2025-04-05', excerpt: 'How Louisville hosts use private hibachi for Derby season, U of L graduation parties, and milestone celebrations.' },
    { slug: 'private-hibachi-frankfort-georgetown-kentucky',     title: 'Private Hibachi in Frankfort and Georgetown, Kentucky: Capital Corridor Entertaining',                       date: '2026-10-01', excerpt: 'How Frankfort state capital professionals and Georgetown Toyota corridor families use private hibachi for team events, graduation parties, and milestone celebrations.' },
    { slug: 'hibachi-at-home-kentucky-guide',                    title: 'Hibachi at Home in Kentucky: Louisville, Lexington, and Bowling Green Guide',                                  date: '2025-03-15', excerpt: 'Everything Kentucky hosts need to know — Derby city executive entertaining, horse country estate events, and WKU graduation parties.' },
  ],
  // Slot 2 — Bowling Green, Elizabethtown, Owensboro, Paducah
  [
    { slug: 'private-hibachi-wku-bowling-green-graduation',      title: 'Private Hibachi for WKU Graduation in Bowling Green, Kentucky',                                              date: '2025-04-20', excerpt: 'How to book a private hibachi chef for WKU commencement weekend and the Bowling Green corporate catering market.' },
    { slug: 'private-hibachi-western-kentucky-owensboro-paducah', title: 'Private Hibachi in Western Kentucky: Owensboro, Paducah, and Elizabethtown',                               date: '2026-10-01', excerpt: 'How western Kentucky\'s Owensboro, Paducah, and Elizabethtown communities use private hibachi for graduation parties, milestone celebrations, and family events.' },
    { slug: 'hibachi-at-home-kentucky-guide',                    title: 'Hibachi at Home in Kentucky: Louisville, Lexington, and Bowling Green Guide',                                  date: '2025-03-15', excerpt: 'Everything Kentucky hosts need to know — Derby city executive entertaining, horse country estate events, and WKU graduation parties.' },
  ],
]

// =============================================================================
// EXPORTED FUNCTIONS
// =============================================================================

export function getKyCityData(citySlug, cityName) {
  const entry = KY_MAJOR_CITIES[citySlug]
  if (!entry) return null
  const { v, profileIdx, expansionIdx, nearby } = entry
  const customMeta  = KY_CUSTOM_META[citySlug] || null
  const displayName = KY_CITY_DISPLAY_NAMES[citySlug] ?? cityName

  const uniqueIdx = profileIdx < 3
    ? 756 + profileIdx
    : 794 + expansionIdx

  return {
    cityName:             displayName,
    stateAbbr:            'KY',
    stateName:            'Kentucky',
    stateSlug:            'kentucky',
    variant:              v % 3,
    heroImage:            KY_THEME_HEROES[v],
    heroSubtitle:         KY_HERO_SUBTITLES[v](displayName),
    heroH1Prefix:         KY_PROFILE_H1_PREFIXES[profileIdx],
    uniqueIntroVariant:   uniqueIdx,
    uniqueWhyUsVariant:   v % 3,
    uniqueClosingVariant: uniqueIdx,
    ...(customMeta ? { metaTitle: customMeta.title, metaDescription: customMeta.desc } : {}),
    testimonials:         KY_TESTIMONIALS[citySlug] || [],
    nearbyCities:         nearby,
    nearbyMajorCities:    ['Louisville', 'Lexington', 'Bowling Green'],
  }
}

export function getKyBlogPosts(variant, count) {
  return KY_BLOG_POSTS[variant % 3] || []
}

export function getKyHowItWorks(citySlug) {
  return KY_HOW_IT_WORKS
}

export function getKySectionVariant(citySlug) {
  const entry = KY_MAJOR_CITIES[citySlug]
  if (!entry) return null
  return KY_SECTION_VARIANTS[entry.v]
}

export function getKyCityImage(citySlug) {
  return KY_CITY_IMAGE_MAP[citySlug] || null
}

export function getKySupportImages(citySlug) {
  return KY_SUPPORT_IMAGES[citySlug] || null
}
