// ─── Ohio City Data ───────────────────────────────────────────────────────────
// 20 cities · 6 themes · index range 367–392

export const OH_CITY_DISPLAY_NAMES = {
  'new-albany':      'New Albany',
  'upper-arlington': 'Upper Arlington',
  'indian-hill':     'Indian Hill',
  'avon-lake':       'Avon Lake',
  'port-clinton':    'Port Clinton',
}

const OH_OCCASIONS_LUXURY = [
  'Backyard Birthday Parties','Graduation Celebrations','Anniversary Dinners',
  'Corporate Team Events','Holiday Gatherings','Rehearsal Dinners',
  'Retirement Parties','Baby Showers','Bar & Bat Mitzvahs','Charity Fundraisers',
]
const OH_OCCASIONS_URBAN = [
  'Birthday Parties','Graduation Dinners','Corporate Events',
  'Rooftop Celebrations','Holiday Parties','Engagement Celebrations',
  'Housewarming Parties','Block Parties','Team Building Events','Date Night Experiences',
]
const OH_OCCASIONS_LAKE = [
  'Lake House Parties','Cabin Gatherings','Graduation Cookouts',
  'Family Reunions','Birthday Bonfires','Anniversary Dinners',
  'End-of-Summer Celebrations','Holiday Weekends','Retirement Parties','Waterfront Events',
]
const OH_OCCASIONS_UNIVERSITY = [
  'Graduation Parties','Parent Weekend Dinners','Team Celebrations',
  'Greek Life Events','Alumni Gatherings','Birthday Parties',
  'End-of-Semester Events','Housewarming Parties','Tailgate Alternatives','Award Banquets',
]

const OH_FAQ_LUXURY = [
  { q: 'Do you travel to private residences in suburbs like Dublin and New Albany?', a: 'Absolutely. Our private hibachi chef service is built for exactly that — luxury homes, backyard patios, and private estates throughout the Columbus suburbs. We bring the full teppanyaki experience to your property.' },
  { q: 'How much space do we need for the hibachi setup?', a: 'Our mobile hibachi station needs roughly a 10×10 foot area, either outdoors or in a large kitchen or garage space. We handle all equipment setup and breakdown.' },
  { q: "What's included in the pricing?", a: 'All food, seasonings, sauces, professional chef service, equipment, and cleanup. You provide tables, chairs, and plates/utensils for your guests.' },
  { q: 'Can you accommodate dietary restrictions?', a: "Yes — we routinely handle gluten-free, vegetarian, and allergen-specific requests. Just let us know your needs when booking and we'll prepare accordingly." },
  { q: 'How far in advance should we book?', a: "We recommend booking 2–3 weeks ahead for weekdays, 3–4 weeks for weekends, and 4–6 weeks for major holidays like New Year's Eve and graduation season." },
]
const OH_FAQ_URBAN = [
  { q: 'Do you serve Columbus proper in addition to the suburbs?', a: 'Yes — we serve all of Columbus including neighborhoods like Short North, German Village, Arena District, Grandview Heights, and surrounding areas. Urban patios, rooftop spaces, and backyards all work.' },
  { q: 'What outdoor space do I need for a hibachi event?', a: 'A 10×10 foot area — a patio, driveway, or backyard all work. For indoor setups we need good ventilation. We handle all setup and breakdown.' },
  { q: "What's included in the price?", a: 'All food ingredients, sauces, chef labor, cooking equipment, and cleanup. You supply tables, chairs, and dinnerware for your group.' },
  { q: 'How do you handle large events?', a: "We can scale with multiple chefs and stations for larger groups. Share your headcount when you reach out and we'll build a package that fits." },
  { q: 'Do you serve vegetarian and vegan menus?', a: 'Yes — we offer fully plant-based hibachi menus with tofu, seasonal vegetables, and rice. Just specify when booking.' },
]
const OH_FAQ_CLEVELAND = [
  { q: 'Do you serve Cleveland neighborhoods like Ohio City, Tremont, and University Circle?', a: "Yes — we cover all of Cleveland proper and the metro area. Whether it's a rooftop in Ohio City, a backyard in Tremont, or a lawn near University Circle, we bring the full hibachi experience to you." },
  { q: 'What space is needed for a hibachi setup?', a: 'About 10×10 feet — a patio, deck, driveway, or backyard all work perfectly. We handle all setup, cooking, and cleanup at the end of the event.' },
  { q: 'What does pricing include?', a: 'All food, seasonings, sauces, chef labor, equipment, and post-event cleanup. You provide tables, chairs, and serving dishes for your guests.' },
  { q: 'Can you handle larger parties?', a: "Absolutely — we bring additional chefs and stations for larger headcounts. Just mention your group size when inquiring and we'll tailor a package." },
  { q: 'How far in advance should we book?', a: "Book 2–3 weeks out for weekday events, 3–4 weeks for weekends. During Cleveland's popular summer and graduation seasons, earlier is always better." },
]
const OH_FAQ_SOUTHWEST = [
  { q: 'Do you travel to Cincinnati neighborhoods like Hyde Park, Mount Lookout, and Indian Hill?', a: "Yes — we serve all of greater Cincinnati including Hyde Park, Mount Lookout, Mariemont, Over-the-Rhine, and surrounding suburbs. We come to your home, estate, or event venue." },
  { q: 'What setup space is needed?', a: 'A 10×10 area outdoors or a large well-ventilated indoor space works well. We handle all equipment transport, setup, cooking, and cleanup.' },
  { q: "What's included in the service?", a: 'All food, sauces, chef service, cooking equipment, and cleanup. You provide seating and tableware for your guests.' },
  { q: 'How many guests can you serve?', a: 'We can accommodate groups from 10 to 100+ guests. For larger events we deploy multiple chefs and stations simultaneously.' },
  { q: 'When should we book for graduation and holiday events?', a: 'Graduation season (May–June) and holiday periods book very fast in the Cincinnati market. We recommend reaching out 4–6 weeks in advance for those dates.' },
]
const OH_FAQ_LAKE = [
  { q: 'Do you serve Lake Erie destinations like Sandusky, Put-in-Bay, and Cedar Point areas?', a: "Yes — we travel to lake house rentals, cabins, and private properties throughout the Lake Erie corridor including Sandusky, Avon Lake, Port Clinton, Kelleys Island, and surrounding areas." },
  { q: 'Can you cook at a vacation rental or lake house?', a: "That's exactly our specialty. Our private hibachi chef sets up wherever you are — backyard, deck, driveway, or lakeside patio — with zero hassle for the host." },
  { q: "What's included in the cost?", a: 'All food, sauces, chef labor, equipment, and cleanup. You provide tables, chairs, and dinnerware for your group.' },
  { q: 'How does booking work for vacation rental events?', a: "Just provide your rental address when booking. We travel to you. For popular summer weekends near Cedar Point and Put-in-Bay, book 4+ weeks ahead as these dates fill quickly." },
  { q: 'Can you handle large reunion or family gatherings?', a: 'Yes — we can scale with multiple chefs for larger groups. Ideal for family reunions, lake house birthday parties, and end-of-summer celebrations.' },
]

const OH_TESTIMONIALS_DUBLIN = [
  { text: "We hired Hibachi With Us for our daughter's graduation party in Dublin — absolutely spectacular. The chef was entertaining, the food was incredible, and our guests are still talking about it weeks later.", name: 'Karen M.', city: 'Dublin, OH', event: 'Graduation Party', initials: 'KM' },
  { text: 'Hosted a corporate team dinner at our home in Dublin. The whole experience — from booking to cleanup — was completely seamless. Every executive at that table was impressed.', name: 'David R.', city: 'Dublin, OH', event: 'Corporate Dinner', initials: 'DR' },
  { text: 'Our anniversary dinner in the backyard was unforgettable. The chef brought everything — we just showed up to our own party. Worth every penny.', name: 'Lisa & Tom H.', city: 'Dublin, OH', event: 'Anniversary Dinner', initials: 'LH' },
]
const OH_TESTIMONIALS_NEW_ALBANY = [
  { text: "Our son's graduation party in New Albany was everything we hoped for. The chef turned our backyard into a real hibachi experience — 40 guests, all completely wowed.", name: 'Jennifer S.', city: 'New Albany, OH', event: 'Graduation Party', initials: 'JS' },
  { text: "Booked for a birthday dinner for my husband. Hands down the best party we've ever hosted. New Albany neighbors are already asking for the contact info.", name: 'Michelle T.', city: 'New Albany, OH', event: 'Birthday Dinner', initials: 'MT' },
  { text: 'Used them for our company holiday party. Professional, punctual, and the food quality was genuinely excellent. Will be booking again next year.', name: 'Andrew K.', city: 'New Albany, OH', event: 'Holiday Party', initials: 'AK' },
]
const OH_TESTIMONIALS_UPPER_ARLINGTON = [
  { text: 'Hibachi With Us transformed our Upper Arlington patio into something out of a restaurant. The chef had incredible energy and the salmon was cooked to perfection.', name: 'Rachel G.', city: 'Upper Arlington, OH', event: 'Birthday Party', initials: 'RG' },
  { text: "We booked for our parents' 40th anniversary. The whole family was there and the chef made it incredibly special. Truly a memorable evening.", name: 'Brian & Sarah C.', city: 'Upper Arlington, OH', event: 'Anniversary Celebration', initials: 'BC' },
  { text: 'Our neighborhood block party became legendary the year we added hibachi. The chef was phenomenal with kids and adults alike. Already rebooked for next summer.', name: 'Patricia W.', city: 'Upper Arlington, OH', event: 'Block Party', initials: 'PW' },
]
const OH_TESTIMONIALS_COLUMBUS = [
  { text: 'Hosted a birthday dinner for 25 in my Grandview Heights backyard. The chef arrived early, set up fast, and put on a real show. Every guest left amazed.', name: 'Marcus J.', city: 'Columbus, OH', event: 'Birthday Party', initials: 'MJ' },
  { text: "We did a team building event in Columbus and this was by far the most memorable option we've ever tried. Everyone was engaged and the food was genuinely incredible.", name: 'Stephanie R.', city: 'Columbus, OH', event: 'Corporate Event', initials: 'SR' },
  { text: "Columbus has great restaurants but nothing beats having your own private hibachi chef. We did it for a graduation dinner and it was perfect.", name: 'Tony & Lauren B.', city: 'Columbus, OH', event: 'Graduation Dinner', initials: 'TB' },
]
const OH_TESTIMONIALS_POWELL = [
  { text: 'Our Powell graduation party was a complete hit. Chef showed up with everything, set up in under 20 minutes, and had the whole group entertained start to finish.', name: 'Amanda F.', city: 'Powell, OH', event: 'Graduation Party', initials: 'AF' },
  { text: "We've done hibachi at restaurants but having the chef come to our home in Powell was on a completely different level. The food, the show, the service — all exceptional.", name: 'Christopher N.', city: 'Powell, OH', event: 'Birthday Dinner', initials: 'CN' },
  { text: 'Booked for our holiday dinner party and it absolutely made the evening. Our guests have been raving about it since. Can\'t recommend enough.', name: 'Susan L.', city: 'Powell, OH', event: 'Holiday Dinner', initials: 'SL' },
]
const OH_TESTIMONIALS_BEACHWOOD = [
  { text: 'We booked Hibachi With Us for a birthday dinner in Beachwood — 30 guests on our patio, absolutely flawless. The chef was professional and the food was phenomenal.', name: 'Deborah A.', city: 'Beachwood, OH', event: 'Birthday Dinner', initials: 'DA' },
  { text: 'Our Hanukkah party was elevated completely by having a private chef come out. Every detail was handled for us. Perfect from start to finish.', name: 'Steven K.', city: 'Beachwood, OH', event: 'Holiday Celebration', initials: 'SK' },
  { text: 'Used them for a corporate client dinner at our home. The impression it made on our clients was worth more than the cost. Already planning to do it again.', name: 'Roberta M.', city: 'Beachwood, OH', event: 'Client Dinner', initials: 'RM' },
]
const OH_TESTIMONIALS_HUDSON = [
  { text: 'Our Hudson backyard graduation party was truly special. The chef was engaging, the food was delicious, and having it at home made it so much more intimate.', name: 'Catherine P.', city: 'Hudson, OH', event: 'Graduation Party', initials: 'CP' },
  { text: 'Hired them for an anniversary dinner and it was the most romantic evening we\'d had at home. Everything was perfectly executed. Highly recommend.', name: 'Paul & Jennifer W.', city: 'Hudson, OH', event: 'Anniversary Dinner', initials: 'PW' },
  { text: 'Did a birthday party for 35 guests in Hudson. Everyone — kids and adults — loved watching the chef perform. An experience nobody expected.', name: 'Nicole S.', city: 'Hudson, OH', event: 'Birthday Party', initials: 'NS' },
]
const OH_TESTIMONIALS_SOLON = [
  { text: 'We booked a private hibachi caterer for our corporate team dinner in Solon. The food quality and presentation were genuinely impressive. Our team is already asking to do it again.', name: 'Daniel C.', city: 'Solon, OH', event: 'Corporate Dinner', initials: 'DC' },
  { text: "Our daughter's graduation party in Solon was everything she wanted. The chef was so entertaining and the steak was cooked exactly right for every guest.", name: 'Barbara H.', city: 'Solon, OH', event: 'Graduation Party', initials: 'BH' },
  { text: 'Used them for a neighborhood party and it was the highlight of the summer. Easy to book, effortless setup, incredible food. Will do this every year.', name: 'Gary M.', city: 'Solon, OH', event: 'Neighborhood Party', initials: 'GM' },
]
const OH_TESTIMONIALS_CLEVELAND = [
  { text: 'Hosted a birthday dinner in our Ohio City backyard — 28 guests, the chef was incredible. He made every guest feel like part of the show. Total five-star experience.', name: 'Anthony D.', city: 'Cleveland, OH', event: 'Birthday Party', initials: 'AD' },
  { text: 'Our company team event in Cleveland was brought to life by the hibachi experience. Watching everyone bond over the cooking show was something else entirely.', name: 'Melissa T.', city: 'Cleveland, OH', event: 'Corporate Team Event', initials: 'MT' },
  { text: 'We did a graduation dinner near University Circle and it was perfect. The food was restaurant quality, the chef was a true professional. Highly recommend.', name: 'Robert & Karen J.', city: 'Cleveland, OH', event: 'Graduation Dinner', initials: 'RJ' },
]
const OH_TESTIMONIALS_WESTLAKE = [
  { text: 'Our Westlake backyard birthday party was completely transformed by the hibachi chef. Guests drove from all over the metro and every single one was blown away.', name: 'Linda B.', city: 'Westlake, OH', event: 'Birthday Party', initials: 'LB' },
  { text: "The mobile hibachi chef came out to our house and honestly made the party. We didn't have to think about food at all — just enjoy the evening.", name: 'Kevin & Sarah O.', city: 'Westlake, OH', event: 'Anniversary Party', initials: 'KO' },
  { text: "Used for a graduation celebration and it was the most stress-free entertaining I've ever done. Chef handled everything from setup to cleanup. Already recommending to neighbors.", name: 'Donna R.', city: 'Westlake, OH', event: 'Graduation Celebration', initials: 'DR' },
]
const OH_TESTIMONIALS_CINCINNATI = [
  { text: 'We hosted a private hibachi dinner in Hyde Park and it was extraordinary. The chef was a complete entertainer — our guests were amazed from start to finish.', name: 'Elizabeth C.', city: 'Cincinnati, OH', event: 'Birthday Dinner', initials: 'EC' },
  { text: 'Booked for our Mount Lookout graduation party and it was the event of the year in our neighborhood. Every parent is asking who did the catering.', name: 'James & Patricia L.', city: 'Cincinnati, OH', event: 'Graduation Party', initials: 'JL' },
  { text: 'Used them for a corporate dinner and impressed everyone present. Cincinnati has great restaurants but a private hibachi chef at home is in a different category.', name: 'Thomas W.', city: 'Cincinnati, OH', event: 'Corporate Dinner', initials: 'TW' },
]
const OH_TESTIMONIALS_MASON = [
  { text: 'Our Mason graduation party was absolutely perfect. Chef was on time, setup was quick, and the kids were entertained the whole night. Exactly what we needed.', name: 'Heather N.', city: 'Mason, OH', event: 'Graduation Party', initials: 'HN' },
  { text: 'Did a birthday dinner for 20 guests in Mason and it was a hit. The chef had so much energy and the food tasted incredible. Already planning our next event.', name: 'Christopher A.', city: 'Mason, OH', event: 'Birthday Dinner', initials: 'CA' },
  { text: "Our neighborhood block party upgraded to hibachi this year and we'll never go back to regular BBQ. Just a completely different experience.", name: 'Sandra K.', city: 'Mason, OH', event: 'Block Party', initials: 'SK' },
]
const OH_TESTIMONIALS_INDIAN_HILL = [
  { text: 'Hosting a private event in Indian Hill requires a certain level of quality and Hibachi With Us delivered at the highest level. Our guests were absolutely delighted.', name: 'Margaret V.', city: 'Indian Hill, OH', event: 'Private Dinner', initials: 'MV' },
  { text: "Our daughter's graduation dinner at home in Indian Hill was perfection. The chef was professional, the food was outstanding, and the memories are priceless.", name: 'Richard & Ann P.', city: 'Indian Hill, OH', event: 'Graduation Dinner', initials: 'RP' },
  { text: 'We used them for a charitable foundation fundraiser dinner and it was an extraordinary success. Many donors asked how we arranged it. Highly recommended.', name: 'Charles E.', city: 'Indian Hill, OH', event: 'Charity Dinner', initials: 'CE' },
]
const OH_TESTIMONIALS_DAYTON = [
  { text: 'We brought in a hibachi caterer for our Wright-Patterson base neighborhood event and it was a massive success. Chefs were professional, food was incredible, crowd was thrilled.', name: 'Colonel Jason M.', city: 'Dayton, OH', event: 'Community Celebration', initials: 'JM' },
  { text: 'Our graduation party in the Beavercreek area was elevated by the private hibachi experience. All 35 guests agreed it was the best graduation party they\'d attended.', name: 'Kathy L.', city: 'Dayton, OH', event: 'Graduation Party', initials: 'KL' },
  { text: 'Did a company appreciation event in Dayton and the hibachi setup was a show-stopper. Real team bonding happened around that grill. Will book again without question.', name: 'Michael R.', city: 'Dayton, OH', event: 'Company Appreciation Event', initials: 'MR' },
]
const OH_TESTIMONIALS_CENTERVILLE = [
  { text: 'Our Centerville backyard graduation party was the talk of the street. Chef arrived ready to go, put on a great show, and the food was absolutely delicious.', name: 'Laura H.', city: 'Centerville, OH', event: 'Graduation Party', initials: 'LH' },
  { text: 'We did a birthday dinner for 30 in the backyard and it was effortless for us as hosts. The chef handled everything. Could not recommend more highly.', name: 'Mark & Julie T.', city: 'Centerville, OH', event: 'Birthday Dinner', initials: 'MT' },
  { text: "Booked for a neighborhood party and now every family on the block wants the chef's info. Truly exceptional — food and entertainment rolled into one.", name: 'Denise C.', city: 'Centerville, OH', event: 'Neighborhood Party', initials: 'DC' },
]
const OH_TESTIMONIALS_SANDUSKY = [
  { text: 'We rented a lake house near Cedar Point and booked Hibachi With Us for the whole group. The chef came out to us, cooked right on the deck — absolutely memorable.', name: 'Todd & Brenda F.', city: 'Sandusky, OH', event: 'Lake House Party', initials: 'TF' },
  { text: 'Our graduation weekend at the lake got a massive upgrade with the private hibachi chef. Kids and adults loved every moment. Will do this every summer now.', name: 'Stephanie A.', city: 'Sandusky, OH', event: 'Graduation Celebration', initials: 'SA' },
  { text: 'Running a family reunion near Sandusky and the hibachi dinner was the highlight of the entire trip. Chef was fantastic with our mixed-age group of 40 people.', name: 'Frank D.', city: 'Sandusky, OH', event: 'Family Reunion', initials: 'FD' },
]
const OH_TESTIMONIALS_AVON_LAKE = [
  { text: 'Our Avon Lake lakefront graduation party was everything. The chef came right out to our backyard on the water — incredible setting, incredible food, incredible service.', name: 'Nancy K.', city: 'Avon Lake, OH', event: 'Graduation Party', initials: 'NK' },
  { text: 'We did a summer birthday party at our Avon Lake home and the hibachi chef made it unforgettable. Guests have been talking about it all summer.', name: 'Ryan & Melissa O.', city: 'Avon Lake, OH', event: 'Birthday Party', initials: 'RO' },
  { text: 'Perfect end-of-summer party experience. Chef handled everything, we just enjoyed time with family. Exactly what you want from a private hibachi service.', name: 'Diane T.', city: 'Avon Lake, OH', event: 'Summer Celebration', initials: 'DT' },
]
const OH_TESTIMONIALS_PORT_CLINTON = [
  { text: "We were staying on Put-in-Bay for a weekend and the mobile hibachi chef made the trip out to us. Absolutely incredible experience — food, fun, and great service.", name: 'Greg & Carol S.', city: 'Port Clinton, OH', event: 'Island Weekend Party', initials: 'GS' },
  { text: 'Our Lake Erie cabin birthday celebration was made by the private chef experience. Everyone flew or drove in and the hibachi dinner was the centerpiece of the whole weekend.', name: 'Monica L.', city: 'Port Clinton, OH', event: 'Birthday Weekend', initials: 'ML' },
  { text: 'Booked for a Lake Erie family reunion and it was a smashing success. The chef was warm, engaging, and the food was restaurant-quality at our cabin.', name: 'Harold B.', city: 'Port Clinton, OH', event: 'Family Reunion', initials: 'HB' },
]
const OH_TESTIMONIALS_ATHENS = [
  { text: 'We did a backyard graduation party in Athens and the hibachi chef was a total hit with the OU crowd. Unique, delicious, and so much better than catering a regular BBQ.', name: 'Jessica M.', city: 'Athens, OH', event: 'Graduation Party', initials: 'JM' },
  { text: 'Our parent weekend dinner became the best meal any of us had all year. The chef came out, cooked everything fresh, and our kids were genuinely impressed.', name: 'Tom & Sandra H.', city: 'Athens, OH', event: 'Parent Weekend Dinner', initials: 'TH' },
  { text: 'Used them for a small team celebration in Athens and the experience was outstanding. A completely unique way to do a dinner event that everyone will remember.', name: 'Kyle R.', city: 'Athens, OH', event: 'Team Celebration', initials: 'KR' },
]
const OH_TESTIMONIALS_OXFORD = [
  { text: 'Our Miami University graduation dinner was spectacular. Chef came to our house, cooked for 20 family members, and made the whole celebration feel genuinely luxurious.', name: 'Ellen & David C.', city: 'Oxford, OH', event: 'Graduation Dinner', initials: 'EC' },
  { text: 'Organized a mobile hibachi event for our Greek chapter and it was the best event we\'d done in four years. Everyone absolutely loved it.', name: 'Brandon A.', city: 'Oxford, OH', event: 'Greek Life Event', initials: 'BA' },
  { text: 'We surprised our student for graduation and the private chef experience was the perfect way to celebrate. So much better than fighting for a restaurant reservation.', name: 'Patricia N.', city: 'Oxford, OH', event: 'Graduation Surprise', initials: 'PN' },
]

export const OH_HOW_IT_WORKS = {
  headline: (city) => `How Private Hibachi Works in ${city}`,
  footerNote: (city) => `From booking to cleanup, we handle every detail — you just enjoy the evening in ${city}.`,
  steps: [
    { num: '01', title: 'Book Your Date', desc: 'Choose your date and share your headcount, menu preferences, and location. We confirm availability and lock in your Ohio event within 24 hours.' },
    { num: '02', title: 'We Plan Your Menu', desc: 'Select from premium proteins — Wagyu beef, lobster, shrimp, chicken, and vegetarian options — along with rice, noodles, and seasonal vegetables. Custom menus available.' },
    { num: '03', title: 'Chef Arrives Ready', desc: 'Your private hibachi chef arrives 30–45 minutes early to set up all equipment. No prep work required on your end — just welcome your guests.' },
    { num: '04', title: 'The Hibachi Experience', desc: 'Your chef performs the full teppanyaki show — knife tricks, flame displays, and interactive cooking — while crafting restaurant-quality dishes for every guest.' },
    { num: '05', title: 'Full Cleanup Included', desc: 'When the last plate is cleared, we break down and clean the cooking area completely. Your only job is to enjoy the evening with your guests.' },
  ],
}

const OH_IMAGE_THEMES = [
  { heroImage: '/pics/hibachi-private-chef-1.jpg' },
  { heroImage: '/pics/hibachi-event.jpg' },
  { heroImage: '/pics/hibachi-hart.jpg' },
  { heroImage: '/pics/hibachi-catering.jpg' },
  { heroImage: '/pics/private-chef-2.jpg' },
  { heroImage: '/pics/mobile-hibachi.jpg' },
]

const OH_SECTION_VARIANTS = [
  {
    heroPill: 'Premium Private Hibachi',
    experiencePill: 'The Columbus Luxury Experience',
    experiencePoints: (city) => [
      `Chef arrives at your ${city} home fully equipped — no venue, no hassle`,
      'Premium proteins including Wagyu beef, lobster, and wild-caught shrimp',
      'Full teppanyaki entertainment with knife skills and flame tricks',
      'Completely flexible menu designed around your dietary needs',
      'From setup to cleanup, we handle every detail',
    ],
    experienceImage: '/pics/hibachi-at-home.jpg',
    experienceImageAlt: (city) => `Private hibachi chef cooking at a home in ${city} Ohio`,
    areasPill: 'Columbus Luxury Metro',
    areasHeadline: (city) => `Serving ${city} and the Columbus Luxury Corridor`,
    areasIntro: [
      (city, state) => `Our private hibachi chef service travels throughout the Columbus executive metro including ${city}, Dublin, New Albany, Upper Arlington, Powell, and surrounding communities. Whether you're hosting a graduation party at a Muirfield Village estate, a corporate dinner in a New Albany custom home, or an anniversary celebration in Upper Arlington, we come fully equipped to you.`,
      (city) => `The Columbus suburb market is a premier destination for luxury private events, and ${city} sits at the heart of it. Our chefs are experienced serving discerning hosts who expect perfection — from premium ingredient sourcing to immaculate presentation and professional service.`,
    ],
    areasButton: 'View All Ohio Locations',
    occasionPill: 'Perfect For',
    occasionHeadline: (city) => `Private Events We Specialize In Around ${city}`,
    occasionSubtext: 'From intimate dinners for eight to backyard celebrations for sixty, our private hibachi chefs create unforgettable experiences for every occasion.',
    faqPill: 'Common Questions',
    faqHeadline: (city, abbr) => `Private Hibachi FAQ for ${city}, ${abbr}`,
    testimonialSubheading: 'What Columbus-Area Hosts Are Saying',
  },
  {
    heroPill: 'Private Hibachi Chef Columbus',
    experiencePill: 'The Columbus Experience',
    experiencePoints: (city) => [
      `Chef travels to your ${city} home, patio, or backyard — fully equipped`,
      'Premium meats, fresh seafood, and plant-based options available',
      'Interactive teppanyaki entertainment the whole group will love',
      'Menu customized around your preferences and dietary needs',
      'We handle setup, cooking, and complete cleanup',
    ],
    experienceImage: '/pics/hibachi-catering.jpg',
    experienceImageAlt: (city) => `Hibachi chef performing at a private event in ${city} Ohio`,
    areasPill: 'Columbus Metro',
    areasHeadline: (city) => `Serving ${city} and Greater Columbus`,
    areasIntro: [
      (city, state) => `Our private hibachi chef service covers all of Columbus and the surrounding metro including ${city}, Short North, German Village, Grandview Heights, Arena District, Dublin, Powell, Upper Arlington, and New Albany. Whether you're hosting a party on your Clintonville patio or a corporate dinner in Downtown Columbus, we come to you.`,
      (city) => `Columbus has developed a thriving private events culture, and ${city} is at the center of it. Our chefs bring restaurant-quality hibachi and teppanyaki entertainment directly to your location — making your event memorable without the restaurant markup or reservation headaches.`,
    ],
    areasButton: 'View All Ohio Locations',
    occasionPill: 'Perfect For',
    occasionHeadline: (city) => `Private Events We Love in ${city}`,
    occasionSubtext: "Whether it's a backyard birthday, rooftop corporate dinner, or graduation celebration, our Columbus hibachi chefs elevate every gathering.",
    faqPill: 'Common Questions',
    faqHeadline: (city, abbr) => `Columbus Hibachi FAQ — ${city}, ${abbr}`,
    testimonialSubheading: 'What Columbus Hosts Are Saying',
  },
  {
    heroPill: 'Private Hibachi Chef Service',
    experiencePill: 'The East Side Experience',
    experiencePoints: (city) => [
      `Your chef arrives at your ${city} home or estate ready to perform`,
      'Premium cuts — Wagyu beef, sea scallops, lobster tail, and more',
      'Full teppanyaki show with knife artistry and interactive engagement',
      'Fully customized menus accommodating all dietary requirements',
      'Setup to cleanup handled entirely by our team',
    ],
    experienceImage: '/pics/hibachi-catering-3.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a home event in ${city} Ohio`,
    areasPill: 'Cleveland East Side',
    areasHeadline: (city) => `Serving ${city} and the Cleveland East Side`,
    areasIntro: [
      (city, state) => `We travel throughout the Cleveland East Side luxury corridor serving ${city}, Beachwood, Hudson, Solon, Gates Mills, Moreland Hills, Orange, and surrounding communities. From a Beachwood estate dinner to a Hudson graduation party to a Solon corporate event, we bring the full hibachi experience directly to your property.`,
      (city) => `The Cleveland East Side market expects a premium private event experience, and ${city} is no exception. Our chefs are seasoned professionals who understand the level of quality and discretion required when hosting at these properties — every detail is executed to perfection.`,
    ],
    areasButton: 'View All Ohio Locations',
    occasionPill: 'Perfect For',
    occasionHeadline: (city) => `Premium Private Events in ${city}`,
    occasionSubtext: 'From birthday celebrations and corporate dinners to graduation parties and holiday events, our Cleveland East Side hibachi chefs deliver an experience your guests will never forget.',
    faqPill: 'Common Questions',
    faqHeadline: (city, abbr) => `Private Hibachi FAQ — ${city}, ${abbr}`,
    testimonialSubheading: 'What Cleveland East Side Hosts Are Saying',
  },
  {
    heroPill: 'Mobile Hibachi Chef Cleveland',
    experiencePill: 'The Cleveland Experience',
    experiencePoints: (city) => [
      `Chef comes to your ${city} location fully equipped and ready to cook`,
      'Premium proteins including steak, chicken, shrimp, salmon, and tofu',
      'Interactive teppanyaki entertainment with flame and knife tricks',
      "Menu tailored to your group's preferences and dietary needs",
      'Complete setup and cleanup — zero stress for the host',
    ],
    experienceImage: '/pics/backyard-hibachi.jpg',
    experienceImageAlt: (city) => `Hibachi chef performing at an outdoor event in ${city} Ohio`,
    areasPill: 'Cleveland Metro',
    areasHeadline: (city) => `Serving ${city} and the Cleveland Metro`,
    areasIntro: [
      (city, state) => `Our mobile hibachi chef service covers all of Cleveland and the greater metro area including ${city}, Ohio City, Tremont, University Circle, Edgewater, the West Side, Beachwood, Solon, Westlake, Avon Lake, and surrounding neighborhoods. Backyard, rooftop, driveway, deck — we come to you.`,
      (city) => `Cleveland's neighborhoods each carry their own energy, and ${city} brings that same spirit to private events. Our chefs are experienced in urban and suburban settings, delivering the full teppanyaki show whether it's an Ohio City row house backyard or a Westlake lakefront deck.`,
    ],
    areasButton: 'View All Ohio Locations',
    occasionPill: 'Perfect For',
    occasionHeadline: (city) => `Hibachi Events We Love in ${city}`,
    occasionSubtext: 'From Cleveland neighborhood birthday parties to corporate team events, our mobile hibachi service brings the restaurant to you.',
    faqPill: 'Common Questions',
    faqHeadline: (city, abbr) => `Cleveland Hibachi FAQ — ${city}, ${abbr}`,
    testimonialSubheading: 'What Cleveland Hosts Are Saying',
  },
  {
    heroPill: 'Private Hibachi Chef Cincinnati',
    experiencePill: 'The Southwest Ohio Experience',
    experiencePoints: (city) => [
      `Chef travels to your ${city} home or property fully prepared`,
      'Premium hibachi proteins — steak, lobster, shrimp, chicken, and vegetarian',
      'Full teppanyaki entertainment with interactive cooking and tricks',
      'Custom menus built around your preferences and dietary needs',
      'Full setup and post-event cleanup included in every booking',
    ],
    experienceImage: '/pics/traveling-hibachi.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at an event in ${city} Ohio`,
    areasPill: 'Southwest Ohio',
    areasHeadline: (city) => `Serving ${city} and Greater Southwest Ohio`,
    areasIntro: [
      (city, state) => `Our private hibachi chef service covers all of Southwest Ohio including ${city}, Hyde Park, Mount Lookout, Indian Hill, Mariemont, Mason, Centerville, Dayton, Beavercreek, and surrounding communities. We travel to your home, estate, or private venue — fully equipped.`,
      (city) => `Southwest Ohio has a rich tradition of entertaining at home, and ${city} is a hub for private events that demand quality. Our chefs deliver the full hibachi and teppanyaki experience with the same level of professionalism you'd expect from a top-tier restaurant — in your own backyard.`,
    ],
    areasButton: 'View All Ohio Locations',
    occasionPill: 'Perfect For',
    occasionHeadline: (city) => `Private Events We Specialize In Around ${city}`,
    occasionSubtext: 'From Cincinnati graduation parties to Dayton corporate dinners, our Southwest Ohio hibachi chefs make every occasion extraordinary.',
    faqPill: 'Common Questions',
    faqHeadline: (city, abbr) => `Southwest Ohio Hibachi FAQ — ${city}, ${abbr}`,
    testimonialSubheading: 'What Southwest Ohio Hosts Are Saying',
  },
  {
    heroPill: 'Mobile Hibachi Chef Lake Erie',
    experiencePill: 'The Lake Experience',
    experiencePoints: (city) => [
      `Chef travels to your ${city} property, lake house, or vacation rental`,
      'Premium proteins — steak, shrimp, salmon, chicken, and plant-based options',
      'Interactive teppanyaki show designed for backyard and lakeside settings',
      'Menu customized for your group and any dietary requirements',
      'Complete equipment, setup, and cleanup — you just enjoy the party',
    ],
    experienceImage: '/pics/hibachi-chef-home.jpg',
    experienceImageAlt: (city) => `Hibachi chef cooking at a lakeside or vacation property near ${city} Ohio`,
    areasPill: 'Lake Erie & University Circuit',
    areasHeadline: (city) => `Serving ${city} and the Lake Erie Region`,
    areasIntro: [
      (city, state) => `Our mobile hibachi chef service travels throughout the Lake Erie corridor and university markets including ${city}, Sandusky, Avon Lake, Port Clinton, Kelleys Island, Put-in-Bay, Marblehead, the Cedar Point area, Athens, Oxford, and surrounding destinations. We specialize in lake house rentals, vacation properties, and campus-area events.`,
      (city) => `Whether you're celebrating at a summer lake house near ${city} or hosting a graduation weekend for your college student, our private hibachi chefs deliver the full experience wherever you are. No venue needed — we come to your property with everything.`,
    ],
    areasButton: 'View All Ohio Locations',
    occasionPill: 'Perfect For',
    occasionHeadline: (city) => `Hibachi Events Perfect for the ${city} Area`,
    occasionSubtext: 'Lake house parties, graduation weekends, family reunions, and university celebrations — our Lake Erie hibachi chefs specialize in unique outdoor experiences.',
    faqPill: 'Common Questions',
    faqHeadline: (city, abbr) => `Lake Erie Hibachi FAQ — ${city}, ${abbr}`,
    testimonialSubheading: 'What Lake Erie & University Hosts Are Saying',
  },
]

const OH_NEARBY_MAJOR = [
  ['Dublin', 'New Albany', 'Upper Arlington', 'Powell', 'Columbus'],
  ['Columbus', 'Dublin', 'Upper Arlington', 'New Albany', 'Powell'],
  ['Beachwood', 'Hudson', 'Solon', 'Cleveland', 'Westlake'],
  ['Cleveland', 'Beachwood', 'Westlake', 'Avon Lake', 'Solon'],
  ['Cincinnati', 'Mason', 'Indian Hill', 'Dayton', 'Centerville'],
  ['Sandusky', 'Avon Lake', 'Port Clinton', 'Athens', 'Oxford'],
]

const OH_MAJOR_CITIES = {
  'dublin':          { v: 0, profileIdx: 0,  nearby: ['Columbus','New Albany','Upper Arlington','Powell'] },
  'new-albany':      { v: 0, profileIdx: 1,  nearby: ['Columbus','Dublin','Upper Arlington','Powell'] },
  'upper-arlington': { v: 0, profileIdx: 2,  nearby: ['Columbus','Dublin','New Albany','Powell'] },
  'columbus':        { v: 1, profileIdx: 3,  nearby: ['Dublin','Upper Arlington','New Albany','Powell'] },
  'powell':          { v: 1, profileIdx: 4,  nearby: ['Dublin','Columbus','Upper Arlington','New Albany'] },
  'beachwood':       { v: 2, profileIdx: 5,  nearby: ['Cleveland','Solon','Hudson','Westlake'] },
  'hudson':          { v: 2, profileIdx: 6,  nearby: ['Beachwood','Solon','Cleveland','Westlake'] },
  'solon':           { v: 2, profileIdx: 7,  nearby: ['Beachwood','Hudson','Cleveland','Westlake'] },
  'cleveland':       { v: 3, profileIdx: 8,  nearby: ['Beachwood','Westlake','Solon','Avon Lake','Hudson'] },
  'westlake':        { v: 3, profileIdx: 9,  nearby: ['Cleveland','Avon Lake','Beachwood','Solon'] },
  'cincinnati':      { v: 4, profileIdx: 10, nearby: ['Mason','Indian Hill','Dayton','Centerville'] },
  'mason':           { v: 4, profileIdx: 11, nearby: ['Cincinnati','Indian Hill','Centerville','Dayton'] },
  'indian-hill':     { v: 4, profileIdx: 12, nearby: ['Cincinnati','Mason','Centerville','Dayton'] },
  'dayton':          { v: 4, profileIdx: 13, nearby: ['Centerville','Cincinnati','Mason','Indian Hill'] },
  'centerville':     { v: 4, profileIdx: 14, nearby: ['Dayton','Cincinnati','Mason','Indian Hill'] },
  'sandusky':        { v: 5, profileIdx: 15, nearby: ['Port Clinton','Avon Lake','Cleveland','Westlake'] },
  'avon-lake':       { v: 5, profileIdx: 16, nearby: ['Westlake','Cleveland','Sandusky','Port Clinton'] },
  'port-clinton':    { v: 5, profileIdx: 17, nearby: ['Sandusky','Avon Lake','Westlake','Cleveland'] },
  'athens':          { v: 5, profileIdx: 18, nearby: ['Columbus','Oxford'] },
  'oxford':          { v: 5, profileIdx: 19, nearby: ['Cincinnati','Dayton','Athens','Mason'] },
}

const OH_THEME_H1_PREFIXES = [
  'Hibachi at Home in',
  'Private Hibachi Chef in',
  'Hibachi at Home in',
  'Private Hibachi Chef in',
  'Private Hibachi Chef in',
  'Mobile Hibachi Chef in',
]

const OH_PROFILE_H1_PREFIXES = [
  'Hibachi at Home in',
  'Hibachi at Home in',
  'Hibachi at Home in',
  'Private Hibachi Chef in',
  'Hibachi at Home in',
  'Hibachi at Home in',
  'Hibachi at Home in',
  'Hibachi Catering in',
  'Private Hibachi Chef in',
  'Mobile Hibachi Chef in',
  'Private Hibachi Chef in',
  'Private Hibachi Chef in',
  'Hibachi at Home in',
  'Hibachi Catering in',
  'Backyard Hibachi in',
  'Hibachi Catering in',
  'Hibachi at Home in',
  'Mobile Hibachi Chef in',
  'Backyard Hibachi in',
  'Mobile Hibachi Chef in',
]

const OH_CITY_IMAGE_MAP = {
  'dublin':          { src: '/pics/hibachi-at-home.jpg',        alt: (city) => `Private hibachi chef at a home in ${city} Ohio` },
  'new-albany':      { src: '/pics/private-party-chef-6.jpg',   alt: (city) => `Private hibachi chef at an event in ${city} Ohio` },
  'upper-arlington': { src: '/pics/hibachi-hart.jpg',           alt: (city) => `Hibachi chef performing in ${city} Ohio` },
  'columbus':        { src: '/pics/hibachi-catering.jpg',       alt: (city) => `Hibachi catering event in ${city} Ohio` },
  'powell':          { src: '/pics/traveling-hibachi.jpg',      alt: (city) => `Traveling hibachi chef at an event in ${city} Ohio` },
  'beachwood':       { src: '/pics/hibachi-event.jpg',          alt: (city) => `Hibachi event at a home in ${city} Ohio` },
  'hudson':          { src: '/pics/hibachi-at-home.jpg',        alt: (city) => `Hibachi at home event in ${city} Ohio` },
  'solon':           { src: '/pics/private-chef-2.jpg',         alt: (city) => `Private hibachi chef at a ${city} Ohio event` },
  'cleveland':       { src: '/pics/hibachi-private-chef-1.jpg', alt: (city) => `Private hibachi chef cooking in ${city} Ohio` },
  'westlake':        { src: '/pics/mobile-hibachi.jpg',         alt: (city) => `Mobile hibachi chef serving guests in ${city} Ohio` },
  'cincinnati':      { src: '/pics/hibachi-hart.jpg',           alt: (city) => `Private hibachi chef at a ${city} Ohio event` },
  'mason':           { src: '/pics/backyard-hibachi.jpg',       alt: (city) => `Backyard hibachi party in ${city} Ohio` },
  'indian-hill':     { src: '/pics/hibachi-private-chef-1.jpg', alt: (city) => `Private hibachi chef at an estate in ${city} Ohio` },
  'dayton':          { src: '/pics/hibachi-event.jpg',          alt: (city) => `Hibachi catering event in ${city} Ohio` },
  'centerville':     { src: '/pics/hibachi-to-you-2.jpg',       alt: (city) => `Backyard hibachi chef in ${city} Ohio` },
  'sandusky':        { src: '/pics/hibachi-in-garage.jpg',      alt: (city) => `Hibachi chef setup at a ${city} Ohio event` },
  'avon-lake':       { src: '/pics/hibachi-catering.jpg',       alt: (city) => `Hibachi at a lakefront home in ${city} Ohio` },
  'port-clinton':    { src: '/pics/traveling-hibachi.jpg',      alt: (city) => `Mobile hibachi chef near ${city} Ohio` },
  'athens':          { src: '/pics/hibachi-shot-2.jpg',         alt: (city) => `Backyard hibachi party in ${city} Ohio` },
  'oxford':          { src: '/pics/private-event-4.jpg',        alt: (city) => `Private hibachi event in ${city} Ohio` },
}

const OH_SUPPORT_FALLBACKS = [
  { testimonial: { src: '/pics/hibachi-pool-party.jpg', alt: (city) => `Guests enjoying private hibachi in ${city} Ohio`,        caption: 'Columbus Area Private Events' },      cta: { src: '/pics/private-event-4.jpg',    alt: (city) => `Book a private hibachi chef in ${city} Ohio`,   caption: 'Book Your Ohio Hibachi Event' } },
  { testimonial: { src: '/pics/hibachi-in-garage.jpg',  alt: (city) => `Private hibachi gathering in ${city} Ohio`,             caption: 'Columbus Hibachi Events' },           cta: { src: '/pics/hibachi-pool-party.jpg', alt: (city) => `Hire a hibachi chef in ${city} Ohio`,          caption: 'Book in Columbus' } },
  { testimonial: { src: '/pics/hibachi-catering-3.jpg', alt: (city) => `Premium hibachi event in ${city} Ohio`,                 caption: 'Cleveland East Side Events' },        cta: { src: '/pics/mobile-hibachi-2.jpg',   alt: (city) => `Book private hibachi in ${city} Ohio`,         caption: 'Book in Cleveland' } },
  { testimonial: { src: '/pics/backyard-hibachi.jpg',   alt: (city) => `Backyard hibachi party in ${city} Ohio`,                caption: 'Cleveland Area Events' },             cta: { src: '/pics/hibachi-shot-2.jpg',     alt: (city) => `Hire a hibachi chef in ${city} Ohio`,          caption: 'Book in Cleveland' } },
  { testimonial: { src: '/pics/traveling-hibachi.jpg',  alt: (city) => `Private hibachi chef traveling to ${city}`,             caption: 'Southwest Ohio Events' },             cta: { src: '/pics/hibachi-at-home.jpg',    alt: (city) => `Hibachi at home in ${city} Ohio`,              caption: 'Book in Southwest Ohio' } },
  { testimonial: { src: '/pics/hibachi-chef-home.jpg',  alt: (city) => `Chef cooking at a lake property near ${city}`,          caption: 'Lake Erie & University Events' },     cta: { src: '/pics/mobile-hibachi-2.jpg',   alt: (city) => `Mobile hibachi near ${city} Ohio`,             caption: 'Book in Northern Ohio' } },
]

const OH_CITY_SUPPORT_IMAGES = {
  'dublin':          { testimonial: { src: '/pics/hibachi-pool-party.jpg',  alt: (city) => `Guests enjoying hibachi at a Dublin Ohio party`,           caption: 'Dublin Private Events',           intro: (city) => `From Muirfield Village estates to Bridge Park condos, ${city} homeowners love bringing the hibachi experience home.` },           cta: { src: '/pics/private-event-4.jpg',      alt: (city) => `Book a private hibachi chef in ${city}`,   caption: 'Book Your Dublin Event' } },
  'new-albany':      { testimonial: { src: '/pics/hibachi-in-garage.jpg',   alt: (city) => `Private hibachi party in New Albany Ohio`,                 caption: 'New Albany Private Events',       intro: (city) => `${city}'s custom homes and upscale neighborhoods set the stage for exceptional hibachi gatherings.` },                          cta: { src: '/pics/mobile-hibachi-2.jpg',     alt: (city) => `Hire a hibachi chef in ${city}`,           caption: 'Book in New Albany' } },
  'upper-arlington': { testimonial: { src: '/pics/private-event-4.jpg',     alt: (city) => `Backyard hibachi in Upper Arlington Ohio`,                 caption: 'Upper Arlington Events',          intro: (city) => `${city}'s mature trees and classic homes make the perfect backdrop for an outdoor hibachi event.` },                            cta: { src: '/pics/hibachi-pool-party.jpg',   alt: (city) => `Private hibachi chef in ${city}`,          caption: 'Book in Upper Arlington' } },
  'columbus':        { testimonial: { src: '/pics/hibachi-catering-3.jpg',  alt: (city) => `Private hibachi catering in Columbus Ohio`,                caption: 'Columbus Events',                 intro: (city) => `From Short North patios to Grandview backyards, ${city} has no shortage of great spaces for a private hibachi dinner.` },        cta: { src: '/pics/mobile-hibachi-2.jpg',     alt: (city) => `Book a hibachi chef in ${city}`,           caption: 'Book in Columbus' } },
  'powell':          { testimonial: { src: '/pics/hibachi-at-home.jpg',     alt: (city) => `Hibachi at home party in Powell Ohio`,                    caption: 'Powell Private Events',           intro: (city) => `${city}'s luxury residential communities and newer builds make ideal venues for backyard hibachi events.` },                     cta: { src: '/pics/hibachi-in-garage.jpg',    alt: (city) => `Private hibachi chef in ${city}`,          caption: 'Book in Powell' } },
  'beachwood':       { testimonial: { src: '/pics/hibachi-pool-party.jpg',  alt: (city) => `Private hibachi party in Beachwood Ohio`,                 caption: 'Beachwood Private Events',        intro: (city) => `${city} is home to some of Northeast Ohio's finest estates — the perfect setting for a premium hibachi experience.` },           cta: { src: '/pics/private-event-4.jpg',      alt: (city) => `Book a hibachi chef in ${city}`,           caption: 'Book in Beachwood' } },
  'hudson':          { testimonial: { src: '/pics/hibachi-catering-3.jpg',  alt: (city) => `Hibachi event at a Hudson Ohio home`,                     caption: 'Hudson Private Events',           intro: (city) => `${city}'s classic New England-style homes and spacious lots make it a favorite destination for private hibachi events.` },         cta: { src: '/pics/mobile-hibachi-2.jpg',     alt: (city) => `Hire a hibachi chef in ${city}`,           caption: 'Book in Hudson' } },
  'solon':           { testimonial: { src: '/pics/traveling-hibachi.jpg',   alt: (city) => `Hibachi catering event in Solon Ohio`,                    caption: 'Solon Hibachi Events',            intro: (city) => `${city}'s corporate community and strong neighborhoods generate some of the most memorable private hibachi bookings in Northeast Ohio.` }, cta: { src: '/pics/hibachi-at-home.jpg', alt: (city) => `Book hibachi catering in ${city}`,         caption: 'Book in Solon' } },
  'cleveland':       { testimonial: { src: '/pics/hibachi-catering-3.jpg',  alt: (city) => `Private hibachi party in Cleveland Ohio`,                 caption: 'Cleveland Hibachi Events',        intro: (city) => `From Ohio City backyards to Edgewater patios, ${city} is full of incredible spaces for a private hibachi experience.` },          cta: { src: '/pics/mobile-hibachi-2.jpg',     alt: (city) => `Hire a private hibachi chef in ${city}`,   caption: 'Book in Cleveland' } },
  'westlake':        { testimonial: { src: '/pics/backyard-hibachi.jpg',    alt: (city) => `Mobile hibachi chef event in Westlake Ohio`,              caption: 'Westlake Hibachi Events',         intro: (city) => `${city}'s lakefront homes and suburban charm make it an ideal location for a backyard or patio hibachi dinner.` },               cta: { src: '/pics/hibachi-shot-2.jpg',       alt: (city) => `Mobile hibachi chef in ${city}`,           caption: 'Book in Westlake' } },
  'cincinnati':      { testimonial: { src: '/pics/hibachi-pool-party.jpg',  alt: (city) => `Private hibachi party in Cincinnati Ohio`,                caption: 'Cincinnati Hibachi Events',       intro: (city) => `From Hyde Park Tudor-style homes to Over-the-Rhine rooftops, ${city} offers extraordinary settings for private hibachi dinners.` }, cta: { src: '/pics/private-event-4.jpg',      alt: (city) => `Book a private hibachi chef in ${city}`,   caption: 'Book in Cincinnati' } },
  'mason':           { testimonial: { src: '/pics/hibachi-in-garage.jpg',   alt: (city) => `Hibachi party at a Mason Ohio home`,                      caption: 'Mason Hibachi Events',            intro: (city) => `${city}'s growing communities and family-friendly neighborhoods make it a popular destination for private hibachi celebrations.` }, cta: { src: '/pics/hibachi-pool-party.jpg',   alt: (city) => `Hire a hibachi chef in ${city}`,           caption: 'Book in Mason' } },
  'indian-hill':     { testimonial: { src: '/pics/private-event-4.jpg',     alt: (city) => `Private hibachi estate dinner in Indian Hill Ohio`,        caption: 'Indian Hill Private Events',      intro: (city) => `${city} is home to some of Ohio's most prestigious estates — a natural home for the most refined private hibachi experiences.` },  cta: { src: '/pics/hibachi-pool-party.jpg',   alt: (city) => `Private hibachi chef in ${city}`,          caption: 'Book in Indian Hill' } },
  'dayton':          { testimonial: { src: '/pics/traveling-hibachi.jpg',   alt: (city) => `Hibachi catering in Dayton Ohio`,                         caption: 'Dayton Hibachi Events',           intro: (city) => `From Wright-Patterson neighborhoods to the Oregon District, ${city} hosts some of the most spirited private hibachi events in Southwest Ohio.` }, cta: { src: '/pics/hibachi-at-home.jpg', alt: (city) => `Book hibachi catering in ${city}`,         caption: 'Book in Dayton' } },
  'centerville':     { testimonial: { src: '/pics/backyard-hibachi.jpg',    alt: (city) => `Backyard hibachi party in Centerville Ohio`,              caption: 'Centerville Hibachi Events',      intro: (city) => `${city}'s established neighborhoods and active community scene make it a go-to for backyard hibachi celebrations.` },              cta: { src: '/pics/hibachi-at-home.jpg',      alt: (city) => `Backyard hibachi chef in ${city}`,         caption: 'Book in Centerville' } },
  'sandusky':        { testimonial: { src: '/pics/hibachi-pool-party.jpg',  alt: (city) => `Lake house hibachi party near Sandusky Ohio`,             caption: 'Sandusky Area Events',            intro: (city) => `Whether you're near Cedar Point, at a lake house rental, or staying locally in ${city}, we bring the full hibachi experience to you.` }, cta: { src: '/pics/mobile-hibachi-2.jpg',     alt: (city) => `Hire a hibachi chef near ${city}`,         caption: 'Book Near Sandusky' } },
  'avon-lake':       { testimonial: { src: '/pics/hibachi-catering-3.jpg',  alt: (city) => `Hibachi at a lakefront home in Avon Lake Ohio`,           caption: 'Avon Lake Hibachi Events',        intro: (city) => `${city}'s lakefront properties and comfortable neighborhoods are a natural fit for backyard hibachi events on the water.` },          cta: { src: '/pics/private-event-4.jpg',      alt: (city) => `Book a hibachi chef in ${city}`,           caption: 'Book in Avon Lake' } },
  'port-clinton':    { testimonial: { src: '/pics/hibachi-in-garage.jpg',   alt: (city) => `Mobile hibachi near Port Clinton Ohio`,                   caption: 'Port Clinton & Lake Erie Events', intro: (city) => `From Put-in-Bay island weekends to Kelleys Island cabin getaways, our mobile hibachi chef travels throughout the ${city} and Lake Erie Islands area.` }, cta: { src: '/pics/hibachi-shot-2.jpg', alt: (city) => `Mobile hibachi chef near ${city}`,         caption: 'Book Near Port Clinton' } },
  'athens':          { testimonial: { src: '/pics/hibachi-in-garage.jpg',   alt: (city) => `Backyard hibachi party in Athens Ohio`,                   caption: 'Athens Hibachi Events',           intro: (city) => `${city} and Ohio University create the perfect setting for graduation dinners, parent weekend meals, and team celebrations around the grill.` }, cta: { src: '/pics/private-event-4.jpg', alt: (city) => `Backyard hibachi chef in ${city}`,         caption: 'Book in Athens' } },
  'oxford':          { testimonial: { src: '/pics/backyard-hibachi.jpg',    alt: (city) => `Mobile hibachi event in Oxford Ohio`,                     caption: 'Oxford Hibachi Events',           intro: (city) => `Near Miami University, ${city} is a hub for graduation dinners, alumni events, and Greek life celebrations — all perfect occasions for a private hibachi experience.` }, cta: { src: '/pics/hibachi-shot-2.jpg', alt: (city) => `Mobile hibachi chef in ${city}`,           caption: 'Book in Oxford' } },
}

export const OH_CITY_INTROS = [
  {
    headline: () => `Dublin's Premier Private Hibachi Experience`,
    opening: () => `Dublin, Ohio is one of the Columbus metro's most sought-after addresses — home to Muirfield Village, Bridge Park's vibrant riverfront, and some of central Ohio's most stunning residential estates. When you want to celebrate here, a standard restaurant reservation simply doesn't match the occasion.`,
    middle: () => `Our private hibachi chef service brings the full teppanyaki experience directly to your Dublin home or estate. Whether you're hosting a graduation party for 40 on your Muirfield backyard, a corporate client dinner in your Bridge Park residence, or an intimate anniversary celebration on a private patio, our chef arrives fully equipped and handles everything from setup to cleanup.`,
    closing: () => `Dublin hosts expect a premium experience, and that's exactly what we deliver. With Wagyu beef, fresh seafood, and seasonal vegetables combined with the theater of live teppanyaki cooking, your Dublin event becomes the evening your guests talk about for years.`,
  },
  {
    headline: () => `New Albany's Premier Private Hibachi Service`,
    opening: () => `New Albany, Ohio has earned a reputation as one of central Ohio's most prestigious addresses — home to Les Wexner's planned community, championship golf courses, and some of the most architecturally significant residential estates in the state. When you're hosting here, the event experience needs to match the setting.`,
    middle: () => `Our private hibachi chef service brings the full restaurant-quality hibachi experience to your New Albany home. Graduation parties on sprawling backyard estates, corporate dinners in custom-built homes, holiday celebrations that turn your kitchen into a performance stage — our chef arrives with everything needed and manages every detail from arrival to cleanup.`,
    closing: () => `New Albany's discerning hosts have discovered that private hibachi isn't just dining — it's entertainment. The combination of premium ingredients, live cooking theater, and an intimate home setting creates an evening that no restaurant can replicate.`,
  },
  {
    headline: () => `Upper Arlington's Private Hibachi Chef Experience`,
    opening: () => `Upper Arlington, Ohio is one of Columbus's most established and beloved communities — tree-lined streets, classic Tudor and colonial homes, excellent schools, and a close-knit neighborhood identity that has endured for generations. When Upper Arlington hosts entertain, they do it with intention and style.`,
    middle: () => `Our private hibachi chef service was made for exactly the Upper Arlington hosting experience. Whether it's a graduation party on your stone patio, an anniversary dinner in your expansive backyard, or a birthday celebration that brings neighbors together, our chef arrives with premium proteins, all equipment, and the energy to make your gathering unforgettable.`,
    closing: () => `From Upper Arlington's civic events to its private residences, there's a culture of excellent entertaining here. Our hibachi experience adds a layer of drama and delight that elevates any occasion — and our chefs are experienced serving guests who know the difference between good and exceptional.`,
  },
  {
    headline: () => `Columbus Private Hibachi Chef — Brought to You`,
    opening: () => `Columbus, Ohio is one of the fastest-growing and most dynamic cities in the Midwest — home to Short North's arts district, German Village's cobblestone streets, the Arena District's energy, Grandview Heights' neighborhood pride, and a thriving Ohio State University community that keeps the city young and vibrant year-round.`,
    middle: () => `A private hibachi chef in Columbus means bringing all of that energy to your home, patio, or backyard event. Whether you're in a Clintonville ranch with a newly renovated deck, a Short North townhome with a rooftop space, or a Grandview colonial with a spacious backyard, our chef arrives with everything and turns your gathering into a real experience.`,
    closing: () => `Columbus has developed into one of Ohio's top cities for food culture and private entertaining, and a private hibachi experience puts your event at the top of that conversation. From birthday dinners to graduation parties to corporate team events, we bring the full teppanyaki show to you.`,
  },
  {
    headline: () => `Powell's Private Hibachi Experience — At Your Home`,
    opening: () => `Powell, Ohio has become one of Delaware County's most desirable addresses — high household incomes, newer custom construction, excellent schools in the Olentangy Local School District, and a strong community identity that makes it a natural hub for family celebrations and milestone events.`,
    middle: () => `Our private hibachi chef service is a perfect fit for Powell's entertaining culture. Graduation parties, birthday dinners for executives with discriminating tastes, holiday celebrations where the cooking becomes the entertainment — our chef handles every detail from setup to cleanup so you can focus on your guests.`,
    closing: () => `Powell residents who book our hibachi experience consistently tell us it's the most effortless entertaining they've ever done. You provide the backyard, we bring the rest — premium proteins, equipment, the full teppanyaki show, and a chef who makes everyone at the table feel like the guest of honor.`,
  },
  {
    headline: () => `Beachwood's Premium Private Hibachi Service`,
    opening: () => `Beachwood, Ohio sits at the heart of Cleveland's East Side luxury corridor — a community defined by executive-level households, top-rated school districts, and some of Northeast Ohio's finest residential properties. Entertaining in Beachwood means setting a high standard, and your chef selection should reflect that.`,
    middle: () => `Our private hibachi chef service delivers a premium experience befitting Beachwood's character. From elaborate graduation celebrations and Hanukkah dinners to corporate client evenings and birthday parties, our chef arrives at your Beachwood home fully equipped — premium Wagyu, fresh seafood, all cooking equipment — and manages every aspect of the experience.`,
    closing: () => `Beachwood's community has embraced private hibachi as the entertainment option that combines culinary excellence with genuine theater. When you want an event that impresses executives, long-time clients, or close family, a private hibachi dinner in your own home is the experience that no restaurant evening can replicate.`,
  },
  {
    headline: () => `Hudson's Premier Private Hibachi Chef Experience`,
    opening: () => `Hudson, Ohio is one of Northeast Ohio's most treasured communities — a preserved Victorian-era downtown, New England character, top-tier schools, and residential neighborhoods that span from classic colonials to sprawling estates. When Hudson families celebrate, they celebrate with substance.`,
    middle: () => `Our private hibachi chef service brings an experience that honors Hudson's spirit of thoughtful, quality entertaining. Whether you're hosting a graduation dinner for your Western Reserve Academy student, an anniversary evening for longtime friends and family, or a birthday party that becomes a neighborhood legend, our chef delivers the full teppanyaki experience with care and professionalism.`,
    closing: () => `Hudson is a community that values authenticity and quality — and that's exactly what our hibachi chefs bring. From premium proteins to the live cooking performance that turns dinner into an event, every detail is handled so your Hudson celebration is exactly what you envisioned.`,
  },
  {
    headline: () => `Solon Hibachi Catering — Private Chef at Your Home`,
    opening: () => `Solon, Ohio has built a strong identity as one of Cleveland's most dynamic suburban markets — a blend of corporate energy, top-performing schools, and a diverse residential community that knows how to come together for meaningful events. From corporate team dinners to graduation celebrations, Solon events have a distinct character.`,
    middle: () => `Our private hibachi catering service brings that same energy to your Solon home or backyard. Whether you're hosting an end-of-year corporate team dinner, a graduation party for your Solon High School graduate, or a neighborhood gathering that becomes the summer's most talked-about event, our chef arrives with everything and manages start to finish.`,
    closing: () => `Solon's business community and residential neighborhoods have found that private hibachi catering transforms any event from a nice gathering to a genuine experience. Our chefs are experienced at adapting to different group sizes, energy levels, and dietary needs — making every Solon event feel tailored and special.`,
  },
  {
    headline: () => `Cleveland Private Hibachi Chef — The City Comes to You`,
    opening: () => `Cleveland, Ohio is a city of neighborhoods with a pride and identity unlike anywhere else in Ohio — Ohio City's craft food scene, Tremont's artistic energy, University Circle's cultural institutions, Edgewater's lakefront vitality, and the Cleveland Clinic's world-class community. Entertaining in Cleveland means honoring that neighborhood character.`,
    middle: () => `Our private hibachi chef service covers all of Cleveland and brings the full teppanyaki experience to your location — a backyard in Tremont, a rooftop in Ohio City, a lawn near University Circle, or a large patio anywhere in the metro. Our chef arrives with everything needed and handles setup, the complete cooking performance, and all cleanup.`,
    closing: () => `Cleveland has a deep food culture, and our private hibachi experience sits at the top of that culture — a dinner and a show, in your own space, without the noise or wait of a restaurant. Whether it's a birthday party, corporate team event, graduation dinner, or anniversary celebration, we make it unforgettable.`,
  },
  {
    headline: () => `Westlake Mobile Hibachi Chef — Brought to Your Door`,
    opening: () => `Westlake, Ohio combines the energy of a growing western suburb with the proximity to Lake Erie that defines Northeast Ohio living at its best. From Rocky River connections to Crocker Park's retail energy, Westlake residents live well — and they celebrate accordingly.`,
    middle: () => `Our mobile hibachi chef service travels to your Westlake home, deck, or backyard with everything needed for a full teppanyaki experience. Birthday parties, graduation celebrations, neighborhood block parties, and anniversary dinners all benefit from a private chef who handles the cooking, the entertainment, and the cleanup — leaving you free to enjoy your own event.`,
    closing: () => `Westlake homeowners have discovered that a mobile hibachi chef is one of the most effortless and memorable ways to host. Our chefs bring the excitement of a live teppanyaki kitchen to your space — and then leave it spotless when the last guest has gone.`,
  },
  {
    headline: () => `Cincinnati Private Hibachi Chef — Your Home, Your Event`,
    opening: () => `Cincinnati, Ohio is a city with extraordinary character — Hyde Park's grand estates and village feel, Mount Lookout's hillside charm, Mariemont's planned community beauty, Over-the-Rhine's brick-street renaissance, and The Banks' riverfront vibrancy. Entertaining in Cincinnati means honoring that sense of place and tradition.`,
    middle: () => `Our private hibachi chef service brings the full teppanyaki experience directly to Cincinnati homes, estates, and private venues across the metro. From graduation parties in Hyde Park to corporate client dinners in Indian Hill to holiday celebrations in Mason, our chef arrives with premium ingredients, all equipment, and the showmanship to make your evening extraordinary.`,
    closing: () => `Cincinnati's culture of home entertaining is strong, and our private hibachi experience adds a dimension that restaurants simply can't match — an interactive, personalized dinner where the chef is focused entirely on your table. It's the kind of evening guests talk about for months afterward.`,
  },
  {
    headline: () => `Mason Private Hibachi Chef — Celebrations at Home`,
    opening: () => `Mason, Ohio has grown into one of Southwest Ohio's most popular family destinations — Kings Island nearby, strong schools, an active community identity, and neighborhoods full of families who know how to celebrate milestones in style. From graduation parties to birthday dinners, Mason events are well-organized and well-attended.`,
    middle: () => `Our private hibachi chef service is a natural fit for Mason's vibrant entertaining culture. Graduation season in Mason means dozens of backyard celebrations across the area — and our chef brings the experience that makes yours stand out. Setup, cooking, the full teppanyaki performance, and complete cleanup, all while you focus on your guests.`,
    closing: () => `Mason families who've discovered private hibachi consistently book again. The combination of restaurant-quality food, live entertainment, and the comfort of your own backyard makes it the gold standard for milestone celebrations in this community.`,
  },
  {
    headline: () => `Indian Hill's Premium Private Hibachi Experience`,
    opening: () => `Indian Hill, Ohio is one of the most prestigious addresses in the entire state — extensive horse-country estates, some of Cincinnati's most architecturally significant homes, and a community where privacy and quality are the baseline expectations for any event. Entertaining in Indian Hill is an art form.`,
    middle: () => `Our private hibachi chef service is calibrated for exactly that standard. From intimate estate dinners for eight to larger graduation and fundraising events for sixty or more, our chefs arrive with premium Wagyu, fresh seafood, all professional cooking equipment, and the discretion that Indian Hill hosts require.`,
    closing: () => `Indian Hill has embraced private hibachi as one of the few dining experiences that actually rises to match the setting. There's no restaurant in Cincinnati that can replicate what happens when a private chef performs for your guests at your own table — and nowhere does that contrast matter more than in Indian Hill.`,
  },
  {
    headline: () => `Dayton Hibachi Catering — Premium Private Chef Service`,
    opening: () => `Dayton, Ohio has a unique personality — shaped by Wright-Patterson Air Force Base's proud military community, Beavercreek's growing suburban energy, the Oregon District's eclectic arts scene, and the University of Dayton's passionate fan culture. Dayton knows how to celebrate, and it does so with genuine enthusiasm.`,
    middle: () => `Our hibachi catering service brings the full private chef experience to Dayton-area homes and venues. Military community graduations in Beavercreek, corporate team events near Wright-Patt, birthday parties in Centerville, family reunions across the metro — our chef arrives with everything and turns any gathering into a genuine celebration.`,
    closing: () => `Dayton's community spirit finds a natural expression in a shared hibachi experience. Whether it's 15 people around a backyard grill or 80 at a larger event, our chefs adapt to your space and make every guest feel part of something special.`,
  },
  {
    headline: () => `Centerville Backyard Hibachi — Private Chef at Your Home`,
    opening: () => `Centerville, Ohio is one of Dayton's most beloved suburbs — established neighborhoods, excellent schools in the Centerville City School District, and a strong community identity built around family milestones and neighborhood connections. When Centerville families celebrate, they celebrate together.`,
    middle: () => `Our backyard hibachi chef service is perfectly suited to Centerville's entertaining culture. Graduation parties for Centerville High seniors, birthday dinners for parents who've earned a special evening, neighborhood block parties that become summer legends — our chef handles everything from setup to cleanup and brings the full teppanyaki experience to your property.`,
    closing: () => `Centerville homeowners have found that a private hibachi chef transforms the ordinary backyard party into something genuinely extraordinary. The food is restaurant quality. The show is genuinely entertaining. And when it's over, the chef leaves your space as clean as when they arrived.`,
  },
  {
    headline: () => `Sandusky Hibachi Catering — Lake House & Private Events`,
    opening: () => `Sandusky, Ohio sits at the heart of one of the Midwest's premier leisure destinations — gateway to Cedar Point's world-famous roller coasters, the Lake Erie Islands of Put-in-Bay and Kelleys Island, and dozens of lakefront vacation rental properties that fill with families and friend groups every summer weekend.`,
    middle: () => `Our private hibachi catering service travels to lake houses, vacation rentals, and private properties throughout the Sandusky and Erie County area. Whether you're renting a house near Cedar Point for a graduation weekend, hosting a family reunion on Kelleys Island, or celebrating a birthday at a lake house in Marblehead, our chef comes to you fully equipped.`,
    closing: () => `Sandusky-area vacation events are made for private hibachi — the outdoor setting, the casual energy, the large mixed-age groups all create the perfect context for a live teppanyaki dinner. Let us take care of the food and entertainment while you enjoy the lake.`,
  },
  {
    headline: () => `Avon Lake Hibachi at Home — Lakefront Private Chef`,
    opening: () => `Avon Lake, Ohio is one of Northeast Ohio's most prized residential addresses — miles of Lake Erie frontage, established neighborhoods with generous lot sizes, and a community character defined by outdoor living, summer entertaining, and a strong sense of place. Hosting here means taking full advantage of the setting.`,
    middle: () => `Our private hibachi chef service is a natural complement to Avon Lake's outdoor entertaining culture. Graduation parties on lakefront decks, summer birthday celebrations in expansive backyards, anniversary dinners on patios overlooking the water — our chef arrives with everything and brings a level of culinary theater that matches the backdrop.`,
    closing: () => `Avon Lake homeowners who've tried private hibachi have universally embraced it as the best way to entertain at home. The combination of premium food, live performance, and the comfort of your own lakefront property creates a memory that no restaurant evening can replicate.`,
  },
  {
    headline: () => `Port Clinton Mobile Hibachi — Lake Erie Islands & Beyond`,
    opening: () => `Port Clinton, Ohio is the gateway to Lake Erie's island chain — Put-in-Bay's storied party island, Kelleys Island's natural beauty, Marblehead's lighthouse charm, and the broader Lake Erie Islands community that attracts visitors from across the Midwest for weekends of sun, water, and celebration.`,
    middle: () => `Our mobile hibachi chef service travels throughout the Port Clinton area and Lake Erie Island corridor — to vacation properties in Marblehead, island rentals on Kelleys Island, lake house weekends near the Cedar Point corridor, and private homes throughout Ottawa County. The chef comes to you with everything needed for a full teppanyaki experience.`,
    closing: () => `Island weekends and lake destination events are a perfect setting for private hibachi. Large mixed-age groups, outdoor venues, vacation-mode energy — it all comes together when a private chef brings the cooking to you and handles everything from the first dish to final cleanup.`,
  },
  {
    headline: () => `Athens Backyard Hibachi — Private Chef for Ohio University Events`,
    opening: () => `Athens, Ohio is defined by Ohio University's presence — a college town with deep Appalachian roots, a vibrant arts and food scene on Court Street, and a community that swells with energy during graduation weekends, parent visits, and the academic calendar's milestone moments. Athens celebrates with genuine passion.`,
    middle: () => `Our backyard hibachi chef service brings a unique and memorable dining experience to Athens homes, rental properties, and outdoor spaces near Ohio University. Graduation dinners for proud OU families, parent weekend meals that beat any restaurant reservation, team celebrations and Greek life events — our chef arrives fully equipped and turns your gathering into a real event.`,
    closing: () => `In Athens, where the food culture is genuine and community matters, a private hibachi dinner stands apart. It's not just a meal — it's shared entertainment, a performance that brings people together around the grill and creates an experience that lasts long after the last bowl of fried rice is served.`,
  },
  {
    headline: () => `Oxford Mobile Hibachi Chef — Miami University Private Events`,
    opening: () => `Oxford, Ohio is Miami University's home — a college town with a strong tradition, a beautiful campus, and an alumni network that returns year after year for graduation weekends and parent visits. The Oxford area community knows how to mark milestones, and it does so with a warmth and hospitality that feels distinctly Midwestern.`,
    middle: () => `Our mobile hibachi chef service travels to Oxford-area homes, rental houses, and private properties for graduation dinners, parent weekend celebrations, Greek life events, and team gatherings. Whether you're a Miami family hosting 15 people for your student's graduation or an alumni group marking a reunion, our chef brings the full teppanyaki experience to your location.`,
    closing: () => `Oxford graduation season is one of the most meaningful times of year in this community, and a private hibachi dinner is one of the most memorable ways to mark the occasion. Our chefs travel to you, handle every detail, and leave your space spotless — making graduation weekend a genuine celebration.`,
  },
]

export const OH_CITY_CLOSINGS = [
  { headline: (city) => `Ready to Book Your ${city} Private Hibachi Experience?`,  sub: (city) => `Serving Dublin, New Albany, Upper Arlington, Powell, Columbus, and all surrounding Ohio communities.`,                              urgency: `Dublin's graduation and holiday seasons book up fast — secure your date early.` },
  { headline: (city) => `Reserve Your ${city} Private Hibachi Chef Today`,          sub: (city) => `Serving New Albany, Dublin, Upper Arlington, Powell, Columbus, and the greater Ohio metro.`,                                          urgency: `New Albany dates fill quickly for graduation season and the holidays — book ahead.` },
  { headline: (city) => `Book Your ${city} Private Hibachi Event`,                  sub: (city) => `Serving Upper Arlington, Dublin, New Albany, Powell, Columbus, and surrounding communities.`,                                         urgency: `Upper Arlington graduation and spring events book up weeks in advance — reserve your date now.` },
  { headline: (city) => `Book Your Columbus Private Hibachi Chef Today`,            sub: (city) => `Serving Columbus, Dublin, Upper Arlington, New Albany, Powell, and the greater Ohio metro.`,                                          urgency: `Columbus weekends fill fast — especially during graduation season and holidays. Book early.` },
  { headline: (city) => `Reserve Your ${city} Hibachi at Home Experience`,          sub: (city) => `Serving Powell, Dublin, Columbus, Upper Arlington, New Albany, and surrounding Ohio communities.`,                                    urgency: `Powell graduation season books up months in advance — don't wait for your date.` },
  { headline: (city) => `Book Your ${city} Private Hibachi Chef`,                   sub: (city) => `Serving Beachwood, Solon, Hudson, Cleveland, and the greater Northeast Ohio luxury market.`,                                         urgency: `Beachwood dates — especially holidays and graduation season — fill quickly. Reserve yours now.` },
  { headline: (city) => `Reserve Your ${city} Private Hibachi Dinner`,             sub: (city) => `Serving Hudson, Beachwood, Solon, Cleveland, Westlake, and surrounding Northeast Ohio communities.`,                                 urgency: `Hudson graduation and holiday events book weeks out — secure your date early.` },
  { headline: (city) => `Book Hibachi Catering for Your ${city} Event`,            sub: (city) => `Serving Solon, Beachwood, Hudson, Cleveland, and the greater Northeast Ohio market.`,                                                urgency: `Solon corporate and graduation season dates are in high demand — book ahead.` },
  { headline: (city) => `Book Your Cleveland Private Hibachi Chef Today`,           sub: (city) => `Serving Cleveland, Beachwood, Westlake, Solon, Avon Lake, Hudson, and the full Northeast Ohio metro.`,                              urgency: `Cleveland summer and graduation season dates fill fast — don't wait.` },
  { headline: (city) => `Reserve Your ${city} Mobile Hibachi Experience`,           sub: (city) => `Serving Westlake, Cleveland, Avon Lake, Beachwood, Solon, and the greater Cleveland metro.`,                                        urgency: `Westlake summer and graduation dates go quickly — book your date now.` },
  { headline: (city) => `Book Your Cincinnati Private Hibachi Chef Today`,          sub: (city) => `Serving Cincinnati, Hyde Park, Mason, Indian Hill, Centerville, Dayton, and all of Southwest Ohio.`,                                urgency: `Cincinnati graduation season and holidays book far in advance — reserve your date now.` },
  { headline: (city) => `Reserve Your ${city} Private Hibachi Experience`,          sub: (city) => `Serving Mason, Cincinnati, Indian Hill, Centerville, Dayton, and the greater Southwest Ohio area.`,                                 urgency: `Mason graduation season fills up quickly every year — book early to secure your date.` },
  { headline: (city) => `Reserve Your ${city} Private Hibachi Experience`,          sub: (city) => `Serving Indian Hill, Cincinnati, Mason, Centerville, Dayton, and surrounding Southwest Ohio communities.`,                           urgency: `Indian Hill graduation and private dinner dates are limited — reserve yours early.` },
  { headline: (city) => `Book Hibachi Catering for Your ${city} Event`,            sub: (city) => `Serving Dayton, Centerville, Beavercreek, Cincinnati, Mason, and the greater Southwest Ohio region.`,                               urgency: `Dayton graduation and summer events book weeks in advance — don't wait to reserve.` },
  { headline: (city) => `Book Your ${city} Backyard Hibachi Chef`,                 sub: (city) => `Serving Centerville, Dayton, Cincinnati, Mason, Indian Hill, and the greater Southwest Ohio area.`,                                 urgency: `Centerville graduation season is one of our busiest — book your backyard event early.` },
  { headline: (city) => `Book Hibachi Catering for Your ${city} Area Event`,       sub: (city) => `Serving Sandusky, Cedar Point area, Port Clinton, Avon Lake, Kelleys Island, and the Lake Erie Islands.`,                           urgency: `Summer Lake Erie dates fill months in advance — secure your lake house event now.` },
  { headline: (city) => `Reserve Your ${city} Hibachi at Home Experience`,         sub: (city) => `Serving Avon Lake, Westlake, Cleveland, Sandusky, Port Clinton, and the Lake Erie shoreline.`,                                      urgency: `Avon Lake summer and graduation dates fill fast — book your lakefront event early.` },
  { headline: (city) => `Book Your ${city} Area Mobile Hibachi Chef`,              sub: (city) => `Serving Port Clinton, Put-in-Bay, Kelleys Island, Marblehead, Sandusky, and the Lake Erie Islands corridor.`,                       urgency: `Lake Erie summer weekends are our busiest — reserve your island or lakefront event now.` },
  { headline: (city) => `Book Your ${city} Backyard Hibachi Chef Today`,           sub: (city) => `Serving Athens, Ohio University area, Columbus, Oxford, and surrounding Southeast Ohio communities.`,                               urgency: `OU graduation season books very fast — reserve your Athens hibachi event weeks ahead.` },
  { headline: (city) => `Reserve Your ${city} Mobile Hibachi Experience`,          sub: (city) => `Serving Oxford, Miami University area, Cincinnati, Dayton, and the surrounding Southwest Ohio region.`,                             urgency: `Miami University graduation dates are extremely limited — book your Oxford event now.` },
]

export const OH_INTRO_VARIANTS = [
  {
    headline: (city) => `Private Hibachi Chef Service in ${city}, Ohio`,
    opening: (city, state) => `The Columbus luxury corridor is home to some of Ohio's most spectacular private residences, and ${city} sits right at the heart of it. When you're ready to host an event that matches your setting, our private hibachi chef service delivers a restaurant-quality teppanyaki experience directly to your home.`,
    middle: (city, state) => `Our chef arrives at your ${city} property with all equipment, premium proteins, and the showmanship to turn your backyard, patio, or estate into a private dining stage. From graduation parties and corporate dinners to anniversary celebrations and holiday gatherings, we handle every detail from setup to cleanup.`,
    closing: (city, state) => `Hosting in the Columbus metro means setting a high bar. Our private hibachi chefs are experienced serving discerning guests in premium settings — bringing culinary excellence and live entertainment to every event we take on in ${city} and surrounding communities.`,
  },
  {
    headline: (city) => `Private Hibachi Chef in ${city} — We Come to You`,
    opening: (city, state) => `Columbus is one of the Midwest's most vibrant cities, and ${city} brings that same energy to private entertaining. Our private hibachi chef service brings the full teppanyaki experience directly to your Columbus-area home, patio, or backyard — no venue required.`,
    middle: (city, state) => `Whether you're hosting a birthday party in Grandview, a corporate dinner in Clintonville, a graduation celebration in Italian Village, or an anniversary evening anywhere in the metro, our chef arrives with everything and handles setup, cooking, and cleanup while you focus on your guests.`,
    closing: (city, state) => `Columbus has become one of Ohio's most exciting food cities, and a private hibachi experience takes that to the next level — restaurant-quality teppanyaki in your own space, with a chef whose only focus is your table and your guests.`,
  },
  {
    headline: (city) => `Private Hibachi Chef Service in ${city}, Ohio`,
    opening: (city, state) => `The Cleveland East Side is known for its exceptional residential communities, and ${city} is one of its finest. Our private hibachi chef service delivers a premium teppanyaki experience to your home, estate, or private property — bringing the restaurant to you.`,
    middle: (city, state) => `From graduation parties and corporate client dinners to anniversary celebrations and holiday gatherings, our chef arrives at your ${city} property with all equipment, premium proteins, and the professionalism that East Side hosts expect. We manage every detail from arrival to cleanup.`,
    closing: (city, state) => `The Cleveland East Side market has embraced private hibachi as the gold standard for home entertaining — a combination of culinary excellence and live performance that no restaurant can replicate in your own space. Our chefs are experienced serving exactly this kind of occasion.`,
  },
  {
    headline: (city) => `Mobile Hibachi Chef in ${city} — Private Events`,
    opening: (city, state) => `Cleveland's neighborhoods each have a distinct energy, and ${city} brings its own character to private events. Our mobile hibachi chef service travels to your location with everything needed for a full teppanyaki experience — backyard, patio, rooftop, or driveway.`,
    middle: (city, state) => `Whether you're in Ohio City, Tremont, Westlake, or anywhere across the Cleveland metro, our chef arrives ready to set up, perform, and cook premium hibachi for your group. Birthday parties, graduation dinners, corporate events, and anniversary celebrations all become memorable with a private chef who handles every detail.`,
    closing: (city, state) => `Cleveland's food culture is one of the best in the Midwest, and a private hibachi chef brings that standard home. No reservations, no noise, no wait — just your chef, your guests, and an evening your group won't forget.`,
  },
  {
    headline: (city) => `Private Hibachi Chef in ${city} — Brought to Your Home`,
    opening: (city, state) => `Southwest Ohio's residential communities have a strong tradition of home entertaining, and ${city} is a vibrant part of that culture. Our private hibachi chef service travels to your home with everything needed for a complete teppanyaki experience.`,
    middle: (city, state) => `Whether you're planning a graduation party, a corporate team dinner, a birthday celebration, or a holiday gathering in ${city} or the greater Southwest Ohio area, our chef arrives fully equipped and manages every detail — setup, cooking, the full interactive show, and complete cleanup.`,
    closing: (city, state) => `Southwest Ohio hosts have embraced private hibachi as the most distinctive and memorable way to entertain at home. Premium ingredients, live teppanyaki performance, and none of the logistics headaches of a restaurant event — just an exceptional evening in your own space.`,
  },
  {
    headline: (city) => `Mobile Hibachi Chef in ${city} — Lake Erie & University Events`,
    opening: (city, state) => `The Lake Erie region and Ohio's university towns share a common spirit — people who gather in groups, celebrate milestones with enthusiasm, and know how to make a weekend memorable. Our mobile hibachi chef service is built exactly for these occasions.`,
    middle: (city, state) => `Whether you're hosting a lake house party near ${city}, a graduation weekend dinner near a university campus, or a family reunion at a vacation rental anywhere in the corridor, our chef travels to your location with everything needed for a full teppanyaki experience.`,
    closing: (city, state) => `The best moments from a lake weekend or graduation celebration are the ones that happen together — and a private hibachi dinner is the centerpiece that brings everyone to the table. Our chefs travel to you, handle everything, and leave the space clean so you can keep the party going.`,
  },
]

export const OH_CLOSING_VARIANTS = [
  { headline: (city) => `Book Your ${city} Private Hibachi Chef Today`,    sub: (city) => `Serving ${city} and the Columbus luxury corridor — Dublin, New Albany, Upper Arlington, Powell, and beyond.`,                        urgency: `Columbus luxury market dates fill fast. Graduation season and holidays book weeks in advance.` },
  { headline: (city) => `Book Your Columbus Private Hibachi Chef`,         sub: (city) => `Serving ${city} and all of the Columbus metro — Short North, German Village, Grandview Heights, Dublin, Powell, and beyond.`,      urgency: `Columbus weekends go fast. Book early for graduation season and holiday events.` },
  { headline: (city) => `Reserve Your ${city} Private Hibachi Date`,       sub: (city) => `Serving ${city} and the Cleveland East Side — Beachwood, Hudson, Solon, Westlake, and the greater Northeast Ohio area.`,          urgency: `Cleveland East Side graduation and holiday dates are limited. Reserve yours ahead of time.` },
  { headline: (city) => `Book Your ${city} Mobile Hibachi Chef`,           sub: (city) => `Serving ${city} and all of greater Cleveland — Ohio City, Tremont, Beachwood, Westlake, Avon Lake, and beyond.`,                  urgency: `Cleveland summer and graduation dates fill up quickly — don't wait to book.` },
  { headline: (city) => `Reserve Your ${city} Private Hibachi Experience`, sub: (city) => `Serving ${city} and all of Southwest Ohio — Cincinnati, Dayton, Mason, Indian Hill, Centerville, and surrounding communities.`,   urgency: `Southwest Ohio graduation season fills up fast. Secure your date as early as possible.` },
  { headline: (city) => `Book Your ${city} Mobile Hibachi Experience`,     sub: (city) => `Serving ${city} and the Lake Erie corridor — Sandusky, Avon Lake, Port Clinton, Put-in-Bay, Athens, Oxford, and beyond.`,        urgency: `Lake Erie summer weekends and graduation season dates are extremely limited — book early.` },
]

const OH_LOCAL_HIGHLIGHTS = {
  'dublin':          ['Bridge Park', 'Muirfield Village', 'Historic Dublin', 'Metro Parks', 'Riverside Crossing Park'],
  'new-albany':      ['New Albany Country Club', 'The Barn at Rocky Fork Creek', 'National Road Heritage Corridor', 'Licking County Estates', 'New Albany Classic Invitational'],
  'upper-arlington': ['Upper Arlington Arts Festival', 'Sunny 95 Park', 'Lane Avenue Shopping', 'OSU proximity', 'Tremont neighborhood character'],
  'columbus':        ['Short North', 'German Village', 'Arena District', 'Grandview Heights', 'Ohio State University', 'Clintonville', 'Italian Village', 'Victorian Village'],
  'powell':          ['Olentangy Indian Mounds', 'Powell Farmers Market', 'Delaware County Fairgrounds', 'Alum Creek State Park', 'historic downtown Powell'],
  'beachwood':       ['Beachwood Place Mall', 'Legacy Village', 'Beachwood Community Center', 'South Euclid corridors', 'Mandel Jewish Community Center area'],
  'hudson':          ['Hudson Clocktower', 'Western Reserve Academy', 'Hudson Springs Park', 'Hudson Library', 'Main Street dining district'],
  'solon':           ['Solon Center for the Arts', 'Aurora Road corridor', 'Geauga Lake area', 'Nature areas along Chagrin Valley', 'Solon High School community'],
  'cleveland':       ['Ohio City', 'Tremont', 'University Circle', 'Edgewater Park', 'Cleveland Clinic', 'The Flats', 'West Side Market', 'Gordon Square Arts District'],
  'westlake':        ['Crocker Park', 'Lake Erie shoreline', 'Westlake Recreation Center', 'Rocky River Reservation', 'Clague Park'],
  'cincinnati':      ['Hyde Park', 'Mount Lookout', 'Mariemont', 'Over-the-Rhine', 'The Banks', 'Eden Park', 'Anderson Township', 'Cincinnati Observatory'],
  'mason':           ['Kings Island', 'Great Wolf Lodge', 'Mason Community Center', 'Deerfield Township', 'Warren County fairgrounds'],
  'indian-hill':     ['Indian Hill Riding Club', 'Little Miami Scenic Trail', 'Indian Hill Village', 'historic estate communities', 'Cincinnati country club proximity'],
  'dayton':          ['Wright-Patterson Air Force Base', 'Beavercreek', 'Oregon District', 'University of Dayton', 'Dayton Art Institute', 'Carillon Historical Park', 'Riverscape MetroPark'],
  'centerville':     ['Centerville Recreation Center', 'Washington Township', 'downtown Centerville', 'Sycamore State Park', 'Austin Landing area'],
  'sandusky':        ['Cedar Point', 'Lake Erie waterfront', 'Sandusky Bay', 'Marblehead Peninsula', 'Kelleys Island ferry terminal', 'Put-in-Bay ferry'],
  'avon-lake':       ['Lake Erie frontage', 'Miller Road Park', 'Avon Lake Municipal Utilities area', 'Lorain County Metro Parks', 'Rocky River watershed'],
  'port-clinton':    ['Put-in-Bay', 'Kelleys Island', 'Lake Erie Islands', 'Marblehead Lighthouse', 'East Harbor State Park', 'Jet Express ferry terminal'],
  'athens':          ['Ohio University', 'Court Street', 'Hocking Hills proximity', 'The Plains area', 'Strouds Run State Park', "Stuart's Opera House"],
  'oxford':          ['Miami University', 'Uptown Oxford', 'Hueston Woods State Park', 'Hamilton Avenue arts district', 'Miami University campus'],
}

const OH_FEATURED_OCCASIONS = {
  'dublin': OH_OCCASIONS_LUXURY, 'new-albany': OH_OCCASIONS_LUXURY, 'upper-arlington': OH_OCCASIONS_LUXURY,
  'columbus': OH_OCCASIONS_URBAN, 'powell': OH_OCCASIONS_LUXURY, 'beachwood': OH_OCCASIONS_LUXURY,
  'hudson': OH_OCCASIONS_LUXURY, 'solon': OH_OCCASIONS_LUXURY, 'cleveland': OH_OCCASIONS_URBAN,
  'westlake': OH_OCCASIONS_URBAN, 'cincinnati': OH_OCCASIONS_LUXURY, 'mason': OH_OCCASIONS_LUXURY,
  'indian-hill': OH_OCCASIONS_LUXURY, 'dayton': OH_OCCASIONS_URBAN, 'centerville': OH_OCCASIONS_LUXURY,
  'sandusky': OH_OCCASIONS_LAKE, 'avon-lake': OH_OCCASIONS_LAKE, 'port-clinton': OH_OCCASIONS_LAKE,
  'athens': OH_OCCASIONS_UNIVERSITY, 'oxford': OH_OCCASIONS_UNIVERSITY,
}

const OH_FAQ_SETS = {
  'dublin': OH_FAQ_LUXURY, 'new-albany': OH_FAQ_LUXURY, 'upper-arlington': OH_FAQ_LUXURY,
  'columbus': OH_FAQ_URBAN, 'powell': OH_FAQ_LUXURY, 'beachwood': OH_FAQ_LUXURY,
  'hudson': OH_FAQ_LUXURY, 'solon': OH_FAQ_LUXURY, 'cleveland': OH_FAQ_CLEVELAND,
  'westlake': OH_FAQ_CLEVELAND, 'cincinnati': OH_FAQ_SOUTHWEST, 'mason': OH_FAQ_SOUTHWEST,
  'indian-hill': OH_FAQ_SOUTHWEST, 'dayton': OH_FAQ_SOUTHWEST, 'centerville': OH_FAQ_SOUTHWEST,
  'sandusky': OH_FAQ_LAKE, 'avon-lake': OH_FAQ_LAKE, 'port-clinton': OH_FAQ_LAKE,
  'athens': OH_FAQ_URBAN, 'oxford': OH_FAQ_URBAN,
}

const OH_HERO_SUBTITLES = {
  'dublin':          'Private hibachi chef service for Dublin estates, Muirfield Village homes, and Bridge Park residences.',
  'new-albany':      "Luxury hibachi at home for New Albany's custom estates and upscale residential communities.",
  'upper-arlington': "Private hibachi chef service for Upper Arlington's classic homes, spacious backyards, and neighborhood events.",
  'columbus':        'Private hibachi chef in Columbus — we travel to your Short North, German Village, Grandview Heights, or anywhere in the metro.',
  'powell':          "Hibachi at home in Powell — private chef service for the Olentangy corridor's most celebrated events.",
  'beachwood':       "Premium private hibachi service for Beachwood's executive homes and East Side estates.",
  'hudson':          'Private hibachi chef in Hudson — brought to your Victorian home, estate, or backyard.',
  'solon':           'Private hibachi catering for Solon corporate events, graduation parties, and neighborhood celebrations.',
  'cleveland':       'Private hibachi chef in Cleveland — serving Ohio City, Tremont, University Circle, Edgewater, and beyond.',
  'westlake':        'Mobile hibachi chef in Westlake — private teppanyaki service for your lakefront home or backyard.',
  'cincinnati':      'Private hibachi chef in Cincinnati — Hyde Park, Mount Lookout, Mariemont, and the full metro.',
  'mason':           'Private hibachi chef in Mason — brought to your home for graduation parties, birthdays, and celebrations.',
  'indian-hill':     "Premium private hibachi chef for Indian Hill's most prestigious estate events and private dinners.",
  'dayton':          'Private hibachi catering in Dayton — serving Beavercreek, Wright-Patt communities, Oregon District, and the full metro.',
  'centerville':     "Backyard hibachi chef in Centerville — private teppanyaki service for the Dayton suburb's best gatherings.",
  'sandusky':        'Private hibachi catering near Sandusky — lake houses, Cedar Point area, and Lake Erie vacation rentals.',
  'avon-lake':       'Hibachi at home in Avon Lake — private chef service for lakefront homes and waterfront events.',
  'port-clinton':    'Mobile hibachi near Port Clinton — serving Put-in-Bay, Kelleys Island, Marblehead, and the Lake Erie Islands.',
  'athens':          'Backyard hibachi chef in Athens — private teppanyaki for Ohio University graduations, parent weekends, and celebrations.',
  'oxford':          'Mobile hibachi chef in Oxford — private events for Miami University graduations, alumni gatherings, and family dinners.',
}

const OH_META_OVERRIDES = {
  'dublin':          { metaTitle: 'Hibachi at Home in Dublin OH | Private Hibachi Chef Dublin Ohio',         metaDescription: 'Hire a private hibachi chef in Dublin, Ohio for graduation parties, corporate dinners, and backyard events. We travel to Muirfield Village, Bridge Park, and all Dublin residences.' },
  'new-albany':      { metaTitle: 'Hibachi at Home in New Albany OH | Private Chef New Albany Ohio',         metaDescription: 'Private hibachi chef service in New Albany, Ohio. Luxury hibachi at home for estates, graduation parties, and special events. We travel to you fully equipped.' },
  'upper-arlington': { metaTitle: 'Hibachi at Home in Upper Arlington OH | Private Hibachi Chef Upper Arlington', metaDescription: 'Private hibachi chef in Upper Arlington, Ohio. We bring the full teppanyaki experience to your home for graduation parties, birthdays, and family celebrations.' },
  'columbus':        { metaTitle: 'Private Hibachi Chef Columbus OH | Hibachi Chef Columbus Ohio',           metaDescription: 'Hire a private hibachi chef in Columbus, Ohio. We travel to Short North, German Village, Grandview Heights, Dublin, and anywhere in the metro.' },
  'powell':          { metaTitle: 'Hibachi at Home in Powell OH | Private Hibachi Chef Powell Ohio',         metaDescription: 'Private hibachi chef in Powell, Ohio for graduation parties, birthday dinners, and backyard events. Serving the Olentangy corridor and surrounding Delaware County communities.' },
  'beachwood':       { metaTitle: 'Hibachi at Home in Beachwood OH | Private Hibachi Chef Beachwood',       metaDescription: 'Luxury private hibachi chef service in Beachwood, Ohio. We travel to East Side estates, executive homes, and private events throughout the Beachwood area.' },
  'hudson':          { metaTitle: 'Hibachi at Home in Hudson OH | Private Hibachi Chef Hudson Ohio',         metaDescription: 'Private hibachi chef in Hudson, Ohio for graduation parties, anniversary dinners, and backyard events. Serving Western Reserve Academy families and all Hudson residences.' },
  'solon':           { metaTitle: 'Hibachi Catering Solon OH | Private Hibachi Chef Solon Ohio',             metaDescription: 'Private hibachi catering in Solon, Ohio for corporate events, graduation parties, and neighborhood celebrations. We travel to your home or venue fully equipped.' },
  'cleveland':       { metaTitle: 'Private Hibachi Chef Cleveland OH | Hibachi Chef Cleveland Ohio',         metaDescription: 'Hire a private hibachi chef in Cleveland, Ohio. Serving Ohio City, Tremont, University Circle, Edgewater, and all Cleveland neighborhoods.' },
  'westlake':        { metaTitle: 'Mobile Hibachi Chef Westlake OH | Private Hibachi Westlake Ohio',        metaDescription: 'Mobile hibachi chef in Westlake, Ohio for backyard parties, graduation celebrations, and lakefront home events. We travel fully equipped to your Westlake property.' },
  'cincinnati':      { metaTitle: 'Private Hibachi Chef Cincinnati OH | Hibachi Chef Cincinnati Ohio',       metaDescription: 'Hire a private hibachi chef in Cincinnati, Ohio. Serving Hyde Park, Mount Lookout, Mariemont, Indian Hill, and the full Cincinnati metro.' },
  'mason':           { metaTitle: 'Private Hibachi Chef Mason OH | Hibachi at Home Mason Ohio',              metaDescription: 'Private hibachi chef service in Mason, Ohio for graduation parties, birthday dinners, and family celebrations near Kings Island and the Warren County area.' },
  'indian-hill':     { metaTitle: 'Hibachi at Home Indian Hill OH | Private Chef Indian Hill Ohio',          metaDescription: 'Premium private hibachi chef service in Indian Hill, Ohio. We travel to estates and private residences for graduation dinners, charity events, and luxury gatherings.' },
  'dayton':          { metaTitle: 'Hibachi Catering Dayton OH | Private Hibachi Chef Dayton Ohio',           metaDescription: 'Private hibachi catering in Dayton, Ohio. Serving Beavercreek, Wright-Patterson communities, Oregon District, University of Dayton area, and the full Dayton metro.' },
  'centerville':     { metaTitle: 'Backyard Hibachi Centerville OH | Private Hibachi Chef Centerville',      metaDescription: 'Backyard hibachi chef service in Centerville, Ohio. Private teppanyaki for graduation parties, birthday dinners, and neighborhood celebrations in the Dayton suburb.' },
  'sandusky':        { metaTitle: 'Hibachi Catering Sandusky OH | Private Chef Lake Erie Events',            metaDescription: 'Private hibachi catering near Sandusky, Ohio. Serving lake houses, Cedar Point area vacation rentals, Put-in-Bay, Kelleys Island, and Lake Erie event venues.' },
  'avon-lake':       { metaTitle: 'Hibachi at Home Avon Lake OH | Private Hibachi Chef Avon Lake',          metaDescription: 'Private hibachi chef in Avon Lake, Ohio for lakefront home parties, graduation celebrations, and summer events along the Lake Erie shoreline.' },
  'port-clinton':    { metaTitle: 'Mobile Hibachi Port Clinton OH | Private Chef Lake Erie Islands',         metaDescription: 'Mobile hibachi chef service near Port Clinton, Ohio. Serving Put-in-Bay, Kelleys Island, Marblehead, and vacation properties throughout the Lake Erie Islands area.' },
  'athens':          { metaTitle: 'Backyard Hibachi Athens OH | Private Chef Ohio University Events',        metaDescription: 'Backyard hibachi chef in Athens, Ohio. Private teppanyaki for Ohio University graduation parties, parent weekends, and team celebrations near Court Street and campus.' },
  'oxford':          { metaTitle: 'Mobile Hibachi Chef Oxford OH | Private Hibachi Miami University',        metaDescription: 'Mobile hibachi chef in Oxford, Ohio for Miami University graduation dinners, parent weekend meals, Greek life events, and family celebrations near campus.' },
}

export function getOhCityData(citySlug, cityName) {
  const major = OH_MAJOR_CITIES[citySlug]
  const v = major?.v ?? 0
  const profileIdx = major?.profileIdx

  const heroH1Prefix = profileIdx != null
    ? OH_PROFILE_H1_PREFIXES[profileIdx]
    : OH_THEME_H1_PREFIXES[v]

  const uniqueIntroVariant = profileIdx != null ? 373 + profileIdx : 367 + v
  const uniqueClosingVariant = profileIdx != null ? 373 + profileIdx : 367 + v

  const displayName = OH_CITY_DISPLAY_NAMES[citySlug] ?? cityName
  const localHighlights = OH_LOCAL_HIGHLIGHTS[citySlug] ?? OH_LOCAL_HIGHLIGHTS['columbus']
  const featuredOccasions = OH_FEATURED_OCCASIONS[citySlug] ?? OH_OCCASIONS_LUXURY
  const faqSet = OH_FAQ_SETS[citySlug] ?? OH_FAQ_LUXURY
  const nearbyCities = major?.nearby ?? OH_NEARBY_MAJOR[v]
  const heroSubtitle = OH_HERO_SUBTITLES[citySlug] ?? `Private hibachi chef service in ${displayName}, Ohio — we travel to your home fully equipped.`
  const metaOverrides = OH_META_OVERRIDES[citySlug] ?? {}

  return {
    cityName: displayName,
    stateName: 'Ohio',
    stateAbbr: 'OH',
    stateSlug: 'ohio',
    variant: v % 3,
    heroImage: OH_IMAGE_THEMES[v].heroImage,
    heroSubtitle,
    nearbyCities,
    nearbyMajorCities: OH_NEARBY_MAJOR[v],
    localHighlights,
    featuredOccasions,
    faqSet,
    testimonials: _getOhTestimonials(citySlug),
    uniqueIntroVariant,
    uniqueWhyUsVariant: 367 + v,
    uniqueClosingVariant,
    heroH1Prefix,
    ...metaOverrides,
  }
}

function _getOhTestimonials(citySlug) {
  const map = {
    'dublin': OH_TESTIMONIALS_DUBLIN, 'new-albany': OH_TESTIMONIALS_NEW_ALBANY,
    'upper-arlington': OH_TESTIMONIALS_UPPER_ARLINGTON, 'columbus': OH_TESTIMONIALS_COLUMBUS,
    'powell': OH_TESTIMONIALS_POWELL, 'beachwood': OH_TESTIMONIALS_BEACHWOOD,
    'hudson': OH_TESTIMONIALS_HUDSON, 'solon': OH_TESTIMONIALS_SOLON,
    'cleveland': OH_TESTIMONIALS_CLEVELAND, 'westlake': OH_TESTIMONIALS_WESTLAKE,
    'cincinnati': OH_TESTIMONIALS_CINCINNATI, 'mason': OH_TESTIMONIALS_MASON,
    'indian-hill': OH_TESTIMONIALS_INDIAN_HILL, 'dayton': OH_TESTIMONIALS_DAYTON,
    'centerville': OH_TESTIMONIALS_CENTERVILLE, 'sandusky': OH_TESTIMONIALS_SANDUSKY,
    'avon-lake': OH_TESTIMONIALS_AVON_LAKE, 'port-clinton': OH_TESTIMONIALS_PORT_CLINTON,
    'athens': OH_TESTIMONIALS_ATHENS, 'oxford': OH_TESTIMONIALS_OXFORD,
  }
  return map[citySlug] ?? OH_TESTIMONIALS_COLUMBUS
}

export function getOhBlogPosts() { return [] }
export function getOhHowItWorks() { return OH_HOW_IT_WORKS }
export function getOhSectionVariant(citySlug) {
  const v = OH_MAJOR_CITIES[citySlug]?.v ?? 0
  return OH_SECTION_VARIANTS[v]
}
export function getOhCityImage(citySlug) {
  return OH_CITY_IMAGE_MAP[citySlug] ?? null
}
export function getOhSupportImages(citySlug) {
  if (OH_CITY_SUPPORT_IMAGES[citySlug]) return OH_CITY_SUPPORT_IMAGES[citySlug]
  const v = OH_MAJOR_CITIES[citySlug]?.v ?? 0
  return OH_SUPPORT_FALLBACKS[v]
}
