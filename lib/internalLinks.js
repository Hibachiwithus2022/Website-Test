// ─── Internal Linking Data ────────────────────────────────────────────────────
// Source of truth for state → featured cities, city → nearby/related links,
// and contextual SEO sentences used across state and city pages.

// ── State-level data ──────────────────────────────────────────────────────────
export const STATE_LINK_DATA = {

  texas: {
    stateName: 'Texas',
    stateAbbr: 'TX',
    stateSlug: 'texas',
    featuredCities: [
      { city: 'Houston',       slug: 'houston',       desc: 'Greater Houston & Harris County' },
      { city: 'Dallas',        slug: 'dallas',        desc: 'DFW metroplex & surrounding suburbs' },
      { city: 'Austin',        slug: 'austin',        desc: 'Austin metro & Hill Country' },
      { city: 'San Antonio',   slug: 'san-antonio',   desc: 'Alamo City & Bexar County' },
      { city: 'Fort Worth',    slug: 'fort-worth',    desc: 'Tarrant County & West DFW' },
      { city: 'Katy',          slug: 'katy',          desc: 'West Houston & Fort Bend suburbs' },
      { city: 'Sugar Land',    slug: 'sugar-land',    desc: 'Southwest Houston & Fort Bend County' },
      { city: 'The Woodlands', slug: 'the-woodlands', desc: 'North Houston master-planned community' },
      { city: 'Frisco',        slug: 'frisco',        desc: 'North DFW growth corridor' },
    ],
    secondaryCities: [
      { city: 'Plano',          slug: 'plano' },
      { city: 'Arlington',      slug: 'arlington' },
      { city: 'McKinney',       slug: 'mckinney' },
      { city: 'Pearland',       slug: 'pearland' },
      { city: 'League City',    slug: 'league-city' },
      { city: 'New Braunfels',  slug: 'new-braunfels' },
      { city: 'Georgetown',     slug: 'georgetown' },
      { city: 'Corpus Christi', slug: 'corpus-christi' },
    ],
    contextualSentence: 'We serve all of Texas — Houston, Dallas, Austin, San Antonio, Fort Worth, Katy, Sugar Land, The Woodlands, Frisco, and hundreds of cities statewide.',
  },

  arizona: {
    stateName: 'Arizona',
    stateAbbr: 'AZ',
    stateSlug: 'arizona',
    featuredCities: [
      { city: 'Phoenix',    slug: 'phoenix',    desc: 'Greater Phoenix metro area' },
      { city: 'Scottsdale', slug: 'scottsdale', desc: 'Old Town & North Scottsdale' },
      { city: 'Tucson',     slug: 'tucson',     desc: 'Southern Arizona & University area' },
      { city: 'Mesa',       slug: 'mesa',       desc: 'East Valley communities' },
      { city: 'Chandler',   slug: 'chandler',   desc: 'South East Valley' },
      { city: 'Tempe',      slug: 'tempe',      desc: 'Central Valley & ASU corridor' },
    ],
    secondaryCities: [
      { city: 'Gilbert',    slug: 'gilbert' },
      { city: 'Glendale',   slug: 'glendale' },
      { city: 'Peoria',     slug: 'peoria' },
      { city: 'Surprise',   slug: 'surprise' },
      { city: 'Goodyear',   slug: 'goodyear' },
      { city: 'Flagstaff',  slug: 'flagstaff' },
    ],
    contextualSentence: 'We serve all of Arizona, including Phoenix, Scottsdale, Tucson, Mesa, Chandler, Tempe, and all surrounding Valley communities.',
  },

  florida: {
    stateName: 'Florida',
    stateAbbr: 'FL',
    stateSlug: 'florida',
    featuredCities: [
      { city: 'Miami',           slug: 'miami',           desc: 'Miami-Dade metro & Brickell waterfront' },
      { city: 'Orlando',         slug: 'orlando',         desc: 'Central Florida vacation home corridor' },
      { city: 'Tampa',           slug: 'tampa',           desc: 'Tampa Bay & bachelorette weekends' },
      { city: 'Fort Lauderdale', slug: 'fort-lauderdale', desc: 'Canal-front patios & Broward County' },
      { city: 'Sarasota',        slug: 'sarasota',        desc: 'Gulf Coast luxury & snowbird season' },
      { city: 'Destin',          slug: 'destin',          desc: 'Emerald Coast beach houses & vacation rentals' },
      { city: 'Key West',        slug: 'key-west',        desc: 'Tropical vacation rentals & island gatherings' },
      { city: 'Pensacola',       slug: 'pensacola',       desc: 'Gulf Coast beaches & Panhandle events' },
    ],
    secondaryCities: [
      { city: 'St. Petersburg',  slug: 'st-petersburg' },
      { city: 'Naples',          slug: 'naples' },
      { city: 'West Palm Beach', slug: 'west-palm-beach' },
      { city: 'Jacksonville',    slug: 'jacksonville' },
      { city: 'Boca Raton',      slug: 'boca-raton' },
      { city: 'Cape Coral',      slug: 'cape-coral' },
      { city: 'Key West',        slug: 'key-west' },
      { city: 'Panama City Beach', slug: 'panama-city-beach' },
    ],
    contextualSentence: 'We serve all of Florida — vacation rentals, beach houses, and waterfront homes across Miami, Orlando, Tampa, Fort Lauderdale, Sarasota, Destin, and every Florida market.',
  },

  georgia: {
    stateName: 'Georgia',
    stateAbbr: 'GA',
    stateSlug: 'georgia',
    featuredCities: [
      { city: 'Atlanta',      slug: 'atlanta',      desc: 'Metro Atlanta & Buckhead' },
      { city: 'Savannah',     slug: 'savannah',     desc: 'Coastal Georgia & Historic District' },
      { city: 'Augusta',      slug: 'augusta',      desc: 'CSRA & Central Savannah River Area' },
      { city: 'Sandy Springs', slug: 'sandy-springs', desc: 'North Atlanta suburbs' },
      { city: 'Roswell',      slug: 'roswell',      desc: 'North Fulton County' },
      { city: 'Athens',       slug: 'athens',       desc: 'UGA corridor & Northeast Georgia' },
    ],
    secondaryCities: [
      { city: 'Columbus',     slug: 'columbus' },
      { city: 'Macon',        slug: 'macon' },
    ],
    contextualSentence: 'We serve all of Georgia, including Atlanta, Savannah, Augusta, Sandy Springs, Roswell, and surrounding metro communities.',
  },

  'north-carolina': {
    stateName: 'North Carolina',
    stateAbbr: 'NC',
    stateSlug: 'north-carolina',
    featuredCities: [
      { city: 'Charlotte',      slug: 'charlotte',      desc: 'Queen City & South Charlotte' },
      { city: 'Raleigh',        slug: 'raleigh',        desc: 'Research Triangle & backyard events' },
      { city: 'Durham',         slug: 'durham',         desc: 'Bull City & Duke University area' },
      { city: 'Asheville',      slug: 'asheville',      desc: 'Mountain cabins & bachelorette weekends' },
      { city: 'Outer Banks',    slug: 'outer-banks',    desc: 'OBX beach house & family reunions' },
      { city: 'Wilmington',     slug: 'wilmington',     desc: 'Cape Fear Coast & beach rentals' },
    ],
    secondaryCities: [
      { city: 'Greensboro',     slug: 'greensboro' },
      { city: 'Cary',           slug: 'cary' },
      { city: 'Winston-Salem',  slug: 'winston-salem' },
      { city: 'Lake Norman',    slug: 'lake-norman' },
    ],
    contextualSentence: 'We serve all of North Carolina — Charlotte, Raleigh, Durham, Asheville, the Outer Banks, Wilmington, Lake Norman, and every NC market from the mountains to the coast.',
  },

  colorado: {
    stateName: 'Colorado',
    stateAbbr: 'CO',
    stateSlug: 'colorado',
    featuredCities: [
      { city: 'Denver',           slug: 'denver',           desc: 'Mile High City — Cherry Creek, Washington Park, LoDo' },
      { city: 'Boulder',          slug: 'boulder',          desc: 'CU graduation season & tech exec dinners' },
      { city: 'Colorado Springs', slug: 'colorado-springs', desc: 'Military homecomings & USAFA graduation' },
      { city: 'Highlands Ranch',  slug: 'highlands-ranch',  desc: 'Douglas County graduation parties' },
      { city: 'Aspen',            slug: 'aspen',            desc: 'Mountain estate & ski chalet events' },
      { city: 'Fort Collins',     slug: 'fort-collins',     desc: 'CSU graduation & Old Town events' },
    ],
    secondaryCities: [
      { city: 'Cherry Hills Village', slug: 'cherry-hills-village' },
      { city: 'Greenwood Village',    slug: 'greenwood-village' },
      { city: 'Centennial',           slug: 'centennial' },
      { city: 'Broomfield',           slug: 'broomfield' },
      { city: 'Parker',               slug: 'parker' },
      { city: 'Castle Rock',          slug: 'castle-rock' },
      { city: 'Lone Tree',            slug: 'lone-tree' },
      { city: 'Lakewood',             slug: 'lakewood' },
      { city: 'Arvada',               slug: 'arvada' },
      { city: 'Louisville',           slug: 'louisville' },
      { city: 'Vail',                 slug: 'vail' },
      { city: 'Breckenridge',         slug: 'breckenridge' },
      { city: 'Steamboat Springs',    slug: 'steamboat-springs' },
      { city: 'Telluride',            slug: 'telluride' },
    ],
    contextualSentence: 'We serve all of Colorado — Denver, Boulder, Colorado Springs, Fort Collins, and every Front Range and mountain resort community.',
  },

  tennessee: {
    stateName: 'Tennessee',
    stateAbbr: 'TN',
    stateSlug: 'tennessee',
    featuredCities: [
      { city: 'Nashville',    slug: 'nashville',    desc: 'Music City & vacation rental bachelorette hub' },
      { city: 'Knoxville',    slug: 'knoxville',    desc: 'UT Vol Nation — Sequoyah Hills & West Knoxville' },
      { city: 'Memphis',      slug: 'memphis',      desc: 'East Memphis estates & corporate catering hub' },
      { city: 'Chattanooga',  slug: 'chattanooga',  desc: 'Lookout Mountain, Signal Mountain & North Shore' },
    ],
    secondaryCities: [
      { city: 'Brentwood',     slug: 'brentwood' },
      { city: 'Franklin',      slug: 'franklin' },
      { city: 'Germantown',    slug: 'germantown' },
      { city: 'Farragut',      slug: 'farragut' },
      { city: 'Murfreesboro',  slug: 'murfreesboro' },
      { city: 'Nolensville',   slug: 'nolensville' },
      { city: 'Spring Hill',   slug: 'spring-hill' },
      { city: 'Hendersonville',slug: 'hendersonville' },
      { city: 'Mt. Juliet',    slug: 'mt-juliet' },
      { city: 'Cookeville',    slug: 'cookeville' },
      { city: 'Gatlinburg',    slug: 'gatlinburg' },
      { city: 'Pigeon Forge',  slug: 'pigeon-forge' },
      { city: 'Sevierville',   slug: 'sevierville' },
      { city: 'Maryville',     slug: 'maryville' },
      { city: 'Collierville',  slug: 'collierville' },
    ],
    contextualSentence: 'We serve all of Tennessee — Nashville, Knoxville, Memphis, Chattanooga, and communities across Middle, East, and West Tennessee including the Smoky Mountains.',
  },

  minnesota: {
    stateName: 'Minnesota',
    stateAbbr: 'MN',
    stateSlug: 'minnesota',
    featuredCities: [
      { city: 'Minneapolis',  slug: 'minneapolis',  desc: 'North Loop, Uptown & corporate Twin Cities events' },
      { city: 'St. Paul',     slug: 'st-paul',      desc: 'Summit Ave, Grand Ave & Cathedral Hill home dinners' },
      { city: 'Edina',        slug: 'edina',        desc: 'Twin Cities luxury — 50th & France, Country Club estates' },
      { city: 'Rochester',    slug: 'rochester',    desc: 'Mayo Clinic families & southeast MN milestone dinners' },
      { city: 'Duluth',       slug: 'duluth',       desc: 'Canal Park vacation rentals & North Shore cabins' },
      { city: 'Stillwater',   slug: 'stillwater',   desc: 'St. Croix River rentals & historic weekend getaways' },
    ],
    secondaryCities: [
      { city: 'Wayzata',      slug: 'wayzata' },
      { city: 'Minnetonka',   slug: 'minnetonka' },
      { city: 'Eden Prairie', slug: 'eden-prairie' },
      { city: 'Maple Grove',  slug: 'maple-grove' },
      { city: 'Plymouth',     slug: 'plymouth' },
      { city: 'Bloomington',  slug: 'bloomington' },
      { city: 'Woodbury',     slug: 'woodbury' },
      { city: 'Eagan',        slug: 'eagan' },
      { city: 'Burnsville',   slug: 'burnsville' },
      { city: 'Lakeville',    slug: 'lakeville' },
      { city: 'Brainerd',     slug: 'brainerd' },
    ],
    contextualSentence: 'We serve the Twin Cities metro and beyond — Minneapolis, St. Paul, Edina, Maple Grove, Rochester, Duluth, Stillwater, Brainerd, and all surrounding communities.',
  },

  utah: {
    stateName: 'Utah',
    stateAbbr: 'UT',
    stateSlug: 'utah',
    featuredCities: [
      { city: 'Salt Lake City', slug: 'salt-lake-city', desc: 'Sugar House, The Avenues & downtown executive dinners' },
      { city: 'Park City',      slug: 'park-city',       desc: 'Deer Valley, Canyons Village & Sundance season dining' },
      { city: 'Draper',         slug: 'draper',          desc: 'Silicon Slopes corporate events & Corner Canyon estates' },
      { city: 'Provo',          slug: 'provo',           desc: 'BYU graduation parties & Utah Valley family events' },
      { city: 'St. George',     slug: 'st-george',       desc: 'Zion-area family reunions & vacation rental dinners' },
      { city: 'Moab',           slug: 'moab',            desc: 'Arches & Canyonlands vacation rental dinners' },
    ],
    secondaryCities: [
      { city: 'Sandy',          slug: 'sandy' },
      { city: 'Holladay',       slug: 'holladay' },
      { city: 'South Jordan',   slug: 'south-jordan' },
      { city: 'Lehi',           slug: 'lehi' },
      { city: 'Orem',           slug: 'orem' },
      { city: 'American Fork',  slug: 'american-fork' },
      { city: 'Layton',         slug: 'layton' },
      { city: 'Heber City',     slug: 'heber-city' },
      { city: 'Midway',         slug: 'midway' },
      { city: 'Springdale',     slug: 'springdale' },
      { city: 'Cedar City',     slug: 'cedar-city' },
    ],
    contextualSentence: 'We serve all of Utah — Salt Lake Valley executive dinners in Salt Lake City, Sandy, and Draper, Silicon Slopes and BYU graduation events throughout Utah County, ski luxury dining in Park City and the Wasatch Back, and national park vacation dinners in St. George, Moab, and Springdale.',
  },

  nevada: {
    stateName: 'Nevada',
    stateAbbr: 'NV',
    stateSlug: 'nevada',
    featuredCities: [
      { city: 'Las Vegas',      slug: 'las-vegas',      desc: 'The Strip, Summerlin & Henderson' },
      { city: 'Henderson',      slug: 'henderson',      desc: 'Southern Nevada suburbs' },
      { city: 'Reno',           slug: 'reno',           desc: 'Biggest Little City & Washoe County' },
      { city: 'North Las Vegas', slug: 'north-las-vegas', desc: 'North Clark County' },
      { city: 'Sparks',         slug: 'sparks',         desc: 'Truckee Meadows' },
      { city: 'Carson City',    slug: 'carson-city',    desc: 'State capital & Carson Valley' },
    ],
    secondaryCities: [],
    contextualSentence: 'We serve all of Nevada, including Las Vegas, Henderson, Reno, North Las Vegas, Sparks, and surrounding communities.',
  },

  'new-jersey': {
    stateName: 'New Jersey',
    stateAbbr: 'NJ',
    stateSlug: 'new-jersey',
    featuredCities: [
      { city: 'Jersey City',  slug: 'jersey-city',  desc: 'Hudson County & NYC-adjacent skyline views' },
      { city: 'Hoboken',      slug: 'hoboken',      desc: 'Rooftop parties & waterfront events' },
      { city: 'Morristown',   slug: 'morristown',   desc: 'Morris County estate events' },
      { city: 'Asbury Park',  slug: 'asbury-park',  desc: 'Shore house events & weekend rentals' },
      { city: 'Cape May',     slug: 'cape-may',     desc: 'Victorian Shore & summer gatherings' },
      { city: 'Red Bank',     slug: 'red-bank',     desc: 'Monmouth County upscale dining scene' },
    ],
    secondaryCities: [
      { city: 'Princeton',   slug: 'princeton'   },
      { city: 'Cherry Hill', slug: 'cherry-hill' },
      { city: 'Montclair',   slug: 'montclair'   },
      { city: 'Edison',      slug: 'edison'       },
    ],
    contextualSentence: 'We serve all of New Jersey — Jersey City, Hoboken, Morristown, Asbury Park, Cape May, Red Bank, Princeton, Cherry Hill, and every corner of the Garden State.',
  },

  'new-york': {
    stateName: 'New York',
    stateAbbr: 'NY',
    stateSlug: 'new-york',
    featuredCities: [
      { city: 'New York City', slug: 'new-york-city', desc: 'Manhattan rooftops, corporate dinners & NYC events' },
      { city: 'Brooklyn',      slug: 'brooklyn',      desc: 'Brownstone backyards & borough entertaining' },
      { city: 'Southampton',   slug: 'southampton',   desc: 'Hamptons summer house private dining' },
      { city: 'East Hampton',  slug: 'east-hampton',  desc: 'East End luxury & vacation home events' },
      { city: 'White Plains',  slug: 'white-plains',  desc: 'Westchester corporate & private events' },
      { city: 'Lake George',   slug: 'lake-george',   desc: 'Adirondack lake house summer gatherings' },
    ],
    secondaryCities: [
      { city: 'Scarsdale',  slug: 'scarsdale'  },
      { city: 'Rhinebeck',  slug: 'rhinebeck'  },
      { city: 'Buffalo',    slug: 'buffalo'    },
      { city: 'Montauk',    slug: 'montauk'    },
    ],
    contextualSentence: 'We serve all of New York — Manhattan rooftops, Hamptons summer houses, Westchester backyards, Hudson Valley rentals, Adirondack lake houses, and every market from Buffalo to Montauk.',
  },

  delaware: {
    stateName: 'Delaware',
    stateAbbr: 'DE',
    stateSlug: 'delaware',
    featuredCities: [
      { city: 'Wilmington',     slug: 'wilmington',     desc: 'Corporate team dinners & executive private dining' },
      { city: 'Rehoboth Beach', slug: 'rehoboth-beach', desc: 'Beach house hibachi & bachelorette weekends' },
      { city: 'Lewes',          slug: 'lewes',          desc: 'Coastal vacation home private dining' },
      { city: 'Newark',         slug: 'newark',         desc: 'UD graduation celebrations & corporate events' },
      { city: 'Hockessin',      slug: 'hockessin',      desc: 'Brandywine Valley private backyard dining' },
      { city: 'Dover',          slug: 'dover',          desc: 'State capital graduation parties & military family events' },
    ],
    secondaryCities: [
      { city: 'Bethany Beach', slug: 'bethany-beach' },
      { city: 'Greenville',    slug: 'greenville'    },
      { city: 'Dewey Beach',   slug: 'dewey-beach'   },
      { city: 'Bear',          slug: 'bear'          },
    ],
    contextualSentence: 'We serve all of Delaware — Wilmington corporate events, Brandywine Valley backyard dinners, Rehoboth Beach and Dewey Beach vacation rentals, Lewes coastal homes, and every community from Pike Creek to Georgetown.',
  },
  oregon: {
    stateName: 'Oregon',
    stateAbbr: 'OR',
    stateSlug: 'oregon',
    featuredCities: [
      { city: 'Portland',     slug: 'portland',     desc: 'Backyard dinners, rooftop events & urban outdoor spaces' },
      { city: 'Bend',         slug: 'bend',         desc: 'Mountain-town luxury dining & outdoor entertaining' },
      { city: 'Eugene',       slug: 'eugene',       desc: 'University celebrations, backyard dinners & family events' },
      { city: 'Salem',        slug: 'salem',        desc: 'Willamette Valley graduations & family gatherings' },
      { city: 'Lake Oswego',  slug: 'lake-oswego',  desc: 'Affluent lakeside private dining & estate events' },
      { city: 'Cannon Beach', slug: 'cannon-beach', desc: 'Oceanfront vacation rental & coastal group dinners' },
    ],
    secondaryCities: [
      { city: 'Beaverton',    slug: 'beaverton'    },
      { city: 'Hillsboro',    slug: 'hillsboro'    },
      { city: 'McMinnville',  slug: 'mcminnville'  },
      { city: 'Lincoln City', slug: 'lincoln-city' },
    ],
    contextualSentence: 'We serve all of Oregon — Portland rooftop events and brownstone dinners, Lake Oswego and Bend private chef experiences, wine country gatherings in the Willamette Valley, and oceanfront events from Cannon Beach to Lincoln City.',
  },

  missouri: {
    stateName: 'Missouri',
    stateAbbr: 'MO',
    stateSlug: 'missouri',
    featuredCities: [
      { city: 'Kansas City',        slug: 'kansas-city',        desc: 'Backyard hibachi parties & KC metro outdoor entertaining' },
      { city: 'St. Louis',          slug: 'st-louis',           desc: 'Graduation parties, birthday dinners & family celebrations' },
      { city: 'Lake of the Ozarks', slug: 'lake-of-the-ozarks', desc: 'Lake house hibachi & Ozarks vacation rental dinners' },
      { city: 'Chesterfield',       slug: 'chesterfield',       desc: 'Private estate dining & St. Louis County luxury events' },
      { city: 'Columbia',           slug: 'columbia',           desc: 'Mizzou graduation parties & Mid-Missouri celebrations' },
      { city: 'Branson',            slug: 'branson',            desc: 'Vacation rental hibachi & Ozarks group dinners' },
    ],
    secondaryCities: [
      { city: "Lee's Summit",  slug: 'lee-s-summit'       },
      { city: "O'Fallon",      slug: 'o-fallon'           },
      { city: 'St. Charles',   slug: 'st-charles'         },
      { city: 'Blue Springs',  slug: 'blue-springs'       },
      { city: 'Kirkwood',      slug: 'kirkwood'           },
      { city: 'Springfield',   slug: 'springfield'        },
      { city: 'Joplin',        slug: 'joplin'             },
    ],
    contextualSentence: "We serve all of Missouri — Kansas City backyard parties and metro events, St. Louis graduation dinners and estate celebrations, lake house hibachi at the Ozarks, and university town graduation season in Columbia and Springfield.",
  },

  georgia: {
    stateName: 'Georgia',
    stateAbbr: 'GA',
    stateSlug: 'georgia',
    featuredCities: [
      { city: 'Atlanta',         slug: 'atlanta',         desc: 'Corporate events, backyard parties & Greater Atlanta celebrations' },
      { city: 'Savannah',        slug: 'savannah',        desc: 'Coastal rental hibachi & Georgia bachelorette weekends' },
      { city: 'Alpharetta',      slug: 'alpharetta',      desc: 'Private chef events & North Atlanta graduation parties' },
      { city: 'Augusta',         slug: 'augusta',         desc: 'Private estate dining & Masters Week entertaining' },
      { city: 'Athens',          slug: 'athens',          desc: 'UGA graduation parties & northeast Georgia celebrations' },
      { city: 'Marietta',        slug: 'marietta',        desc: 'Cobb County backyard hibachi & graduation season events' },
    ],
    secondaryCities: [
      { city: 'St. Simons Island', slug: 'st-simons-island' },
      { city: 'Decatur',           slug: 'decatur'           },
      { city: 'Sandy Springs',     slug: 'sandy-springs'     },
      { city: 'Roswell',           slug: 'roswell'           },
      { city: 'Dunwoody',          slug: 'dunwoody'          },
      { city: 'Johns Creek',       slug: 'johns-creek'       },
      { city: 'Evans',             slug: 'evans'             },
      { city: 'Duluth',            slug: 'duluth'            },
      { city: 'Woodstock',         slug: 'woodstock'         },
      { city: 'Kennesaw',          slug: 'kennesaw'          },
      { city: 'Peachtree City',    slug: 'peachtree-city'    },
      { city: 'Gainesville',       slug: 'gainesville'       },
      { city: 'Warner Robins',     slug: 'warner-robins'     },
      { city: 'Columbus',          slug: 'columbus'          },
    ],
    contextualSentence: 'We serve all of Georgia — Atlanta backyard parties and corporate events, Savannah coastal rental dinners, North Atlanta graduation celebrations in Alpharetta and Marietta, Augusta estate dining, and UGA graduation season in Athens.',
  },

  'south-carolina': {
    stateName: 'South Carolina',
    stateAbbr: 'SC',
    stateSlug: 'south-carolina',
    featuredCities: [
      { city: 'Charleston',          slug: 'charleston',          desc: 'Historic Peninsula homes, bachelorette weekends & coastal events' },
      { city: 'Myrtle Beach',        slug: 'myrtle-beach',        desc: 'Grand Strand vacation rentals & beach house hibachi' },
      { city: 'Hilton Head Island',  slug: 'hilton-head-island',  desc: 'Golf vacation dining & Lowcountry luxury events' },
      { city: 'Columbia',            slug: 'columbia',            desc: 'USC graduation parties & Midlands family celebrations' },
      { city: 'Greenville',          slug: 'greenville',          desc: 'Upstate corporate events & private backyard dining' },
      { city: 'Bluffton',            slug: 'bluffton',            desc: 'Lowcountry estate dining & plantation community events' },
    ],
    secondaryCities: [
      { city: 'Mount Pleasant',      slug: 'mount-pleasant'      },
      { city: 'Summerville',         slug: 'summerville'         },
      { city: 'North Myrtle Beach',  slug: 'north-myrtle-beach'  },
      { city: 'Spartanburg',         slug: 'spartanburg'         },
      { city: 'Lexington',           slug: 'lexington'           },
      { city: 'Rock Hill',           slug: 'rock-hill'           },
      { city: 'Pawleys Island',      slug: 'pawleys-island'      },
      { city: 'Simpsonville',        slug: 'simpsonville'        },
    ],
    contextualSentence: 'We serve all of South Carolina — Charleston historic home events and bachelorette weekends, Grand Strand vacation rental hibachi in Myrtle Beach, Hilton Head golf vacation dinners, USC graduation parties in Columbia, and Upstate corporate events in Greenville.',
  },

  virginia: {
    stateName: 'Virginia',
    stateAbbr: 'VA',
    stateSlug: 'virginia',
    featuredCities: [
      { city: 'McLean',     slug: 'mclean',     desc: 'Estate entertaining, embassy events & executive private dinners' },
      { city: 'Arlington',  slug: 'arlington',  desc: 'Pentagon corridor, government events & young professional celebrations' },
      { city: 'Alexandria', slug: 'alexandria', desc: 'Old Town waterfront private dining & historic district events' },
      { city: 'Reston',     slug: 'reston',     desc: 'Tech corridor corporate dinners & diverse community celebrations' },
      { city: 'Fairfax',    slug: 'fairfax',    desc: 'George Mason graduation events & multicultural family celebrations' },
    ],
    secondaryCities: [],
    contextualSentence: 'We serve all of Northern Virginia — McLean estate dinners and embassy entertaining, Pentagon corridor events in Arlington, Old Town Alexandria waterfront gatherings, Reston tech corridor corporate dinners, and Fairfax graduation celebrations.',
  },

  maryland: {
    stateName: 'Maryland',
    stateAbbr: 'MD',
    stateSlug: 'maryland',
    featuredCities: [
      { city: 'Bethesda',     slug: 'bethesda',     desc: 'DC corridor estate dinners & government executive events' },
      { city: 'Potomac',      slug: 'potomac',      desc: 'Estate luxury entertaining & premium private dining' },
      { city: 'Annapolis',    slug: 'annapolis',    desc: 'Chesapeake Bay waterfront dinners & USNA graduation events' },
      { city: 'Rockville',    slug: 'rockville',    desc: 'South Asian graduation parties & MCPS milestone events' },
      { city: 'Ocean City',   slug: 'ocean-city',   desc: 'Beach house vacation dinners & bachelorette weekends' },
      { city: 'St. Michaels', slug: 'st-michaels',  desc: 'Chesapeake Bay waterfront cottage & vacation events' },
    ],
    secondaryCities: [
      { city: 'Chevy Chase',   slug: 'chevy-chase'   },
      { city: 'Gaithersburg',  slug: 'gaithersburg'  },
      { city: 'Germantown',    slug: 'germantown'    },
      { city: 'Columbia',      slug: 'columbia'      },
      { city: 'Ellicott City', slug: 'ellicott-city' },
      { city: 'Owings Mills',  slug: 'owings-mills'  },
      { city: 'Towson',        slug: 'towson'        },
      { city: 'Baltimore',     slug: 'baltimore'     },
      { city: 'Bowie',         slug: 'bowie'         },
      { city: 'Frederick',     slug: 'frederick'     },
      { city: 'Waldorf',       slug: 'waldorf'       },
      { city: 'Severna Park',  slug: 'severna-park'  },
    ],
    contextualSentence: 'We serve all of Maryland — DC corridor estate dinners in Bethesda, Potomac, and Chevy Chase, South Asian graduation parties in Rockville and Gaithersburg, Howard County milestone events in Columbia and Ellicott City, Baltimore Metro corporate events, Chesapeake Bay waterfront dinners in Annapolis and Severna Park, and Eastern Shore vacation events in Ocean City and St. Michaels.',
  },

  michigan: {
    stateName: 'Michigan',
    stateAbbr: 'MI',
    stateSlug: 'michigan',
    featuredCities: [
      { city: 'Bloomfield Hills', slug: 'bloomfield-hills', desc: 'Estate entertaining & auto executive private dinners' },
      { city: 'Birmingham',       slug: 'birmingham',       desc: 'Estate private dining & Maple Road corridor events' },
      { city: 'Troy',             slug: 'troy',             desc: 'Automotive corporate team dinners & client events' },
      { city: 'Grand Rapids',     slug: 'grand-rapids',     desc: 'West Michigan corporate & community events' },
      { city: 'Traverse City',    slug: 'traverse-city',    desc: 'Northern Michigan cottage & wine country entertaining' },
    ],
    secondaryCities: [
      { city: 'Royal Oak',        slug: 'royal-oak' },
      { city: 'Novi',             slug: 'novi' },
      { city: 'Ann Arbor',        slug: 'ann-arbor' },
      { city: 'Dearborn',         slug: 'dearborn' },
      { city: 'Canton',           slug: 'canton' },
      { city: 'Sterling Heights', slug: 'sterling-heights' },
      { city: 'Rochester Hills',  slug: 'rochester-hills' },
      { city: 'Kalamazoo',        slug: 'kalamazoo' },
      { city: 'Lansing',          slug: 'lansing' },
      { city: 'Holland',          slug: 'holland' },
      { city: 'Saugatuck',        slug: 'saugatuck' },
      { city: 'South Haven',      slug: 'south-haven' },
      { city: 'Petoskey',         slug: 'petoskey' },
    ],
    contextualSentence: 'We serve all of Michigan — Metro Detroit estate dinners and corporate events, Ann Arbor graduation parties, Grand Rapids West Michigan gatherings, and Northern Michigan cottage and lake house entertaining from Traverse City to Petoskey.',
  },

  ontario: {
    stateName: 'Ontario',
    stateAbbr: 'ON',
    stateSlug: 'ontario',
    featuredCities: [
      { city: 'Toronto',              slug: 'toronto',              desc: 'Condo terraces, King West bachelorette weekends & milestone birthdays' },
      { city: 'Mississauga',          slug: 'mississauga',          desc: 'GTA graduation parties, multicultural family celebrations & backyard events' },
      { city: 'Muskoka',              slug: 'muskoka',              desc: 'Luxury lakefront cottage dining & estate weekend events' },
      { city: 'Ottawa',               slug: 'ottawa',               desc: 'Government & corporate dinners, graduation celebrations & family events' },
      { city: 'Niagara Falls',        slug: 'niagara-falls',        desc: 'Vacation rental hibachi, bachelorette weekends & honeymoon dinners' },
      { city: 'Niagara-on-the-Lake',  slug: 'niagara-on-the-lake',  desc: 'Winery estate dining & vineyard anniversary retreats' },
    ],
    secondaryCities: [
      { city: 'Markham',        slug: 'markham'        },
      { city: 'Vaughan',        slug: 'vaughan'        },
      { city: 'Richmond Hill',  slug: 'richmond-hill'  },
      { city: 'Oakville',       slug: 'oakville'       },
      { city: 'Burlington',     slug: 'burlington'     },
      { city: 'Brampton',       slug: 'brampton'       },
      { city: 'Hamilton',       slug: 'hamilton'       },
      { city: 'Newmarket',      slug: 'newmarket'      },
    ],
    contextualSentence: 'We serve all of Ontario — Toronto condo terrace events and bachelorette weekends, GTA graduation parties in Mississauga and Markham, Muskoka lakefront cottage dining, Niagara vacation rental hibachi, and corporate events in Ottawa.',
  },

  ohio: {
    stateName: 'Ohio',
    stateAbbr: 'OH',
    stateSlug: 'ohio',
    featuredCities: [
      { city: 'Dublin',          slug: 'dublin',          desc: 'Columbus luxury suburb & Muirfield Village estates' },
      { city: 'New Albany',      slug: 'new-albany',      desc: 'Central Ohio premier planned community' },
      { city: 'Columbus',        slug: 'columbus',        desc: 'Columbus metro — Short North, German Village, Grandview' },
      { city: 'Cleveland',       slug: 'cleveland',       desc: 'Cleveland metro — Ohio City, Tremont, University Circle' },
      { city: 'Cincinnati',      slug: 'cincinnati',      desc: 'Cincinnati metro — Hyde Park, Mount Lookout, Indian Hill' },
      { city: 'Beachwood',       slug: 'beachwood',       desc: 'Cleveland East Side luxury corridor' },
      { city: 'Hudson',          slug: 'hudson',          desc: 'Northeast Ohio historic Victorian community' },
      { city: 'Dayton',          slug: 'dayton',          desc: 'Dayton metro — Beavercreek, Oregon District, Wright-Patterson' },
      { city: 'Sandusky',        slug: 'sandusky',        desc: 'Lake Erie gateway — Cedar Point & island corridor' },
    ],
    secondaryCities: [
      { city: 'Upper Arlington', slug: 'upper-arlington' },
      { city: 'Powell',          slug: 'powell' },
      { city: 'Solon',           slug: 'solon' },
      { city: 'Westlake',        slug: 'westlake' },
      { city: 'Mason',           slug: 'mason' },
      { city: 'Indian Hill',     slug: 'indian-hill' },
      { city: 'Centerville',     slug: 'centerville' },
      { city: 'Avon Lake',       slug: 'avon-lake' },
      { city: 'Port Clinton',    slug: 'port-clinton' },
      { city: 'Athens',          slug: 'athens' },
      { city: 'Oxford',          slug: 'oxford' },
    ],
    contextualSentence: 'We serve all of Ohio — Columbus luxury suburbs like Dublin and New Albany, Cleveland East Side estates in Beachwood and Hudson, Cincinnati neighborhoods like Hyde Park and Indian Hill, Lake Erie vacation destinations near Sandusky and Port Clinton, and university markets in Athens and Oxford.',
  },

  massachusetts: {
    stateName: 'Massachusetts',
    stateAbbr: 'MA',
    stateSlug: 'massachusetts',
    featuredCities: [
      { city: 'Boston',      slug: 'boston',      desc: 'Back Bay, Beacon Hill & Seaport executive dinners' },
      { city: 'Cambridge',   slug: 'cambridge',   desc: 'Harvard, MIT & Kendall Square biotech corporate events' },
      { city: 'Newton',      slug: 'newton',      desc: 'Chestnut Hill, Newton Centre & family graduation parties' },
      { city: 'Wellesley',   slug: 'wellesley',   desc: 'Wellesley College estate & anniversary dining' },
      { city: 'Marblehead',  slug: 'marblehead',  desc: 'Waterfront estates & wedding-weekend dining' },
      { city: 'Hyannis',     slug: 'hyannis',     desc: 'Cape Cod vacation rental & family reunion dining' },
    ],
    secondaryCities: [
      { city: 'Brookline',   slug: 'brookline' },
      { city: 'Waltham',     slug: 'waltham' },
      { city: 'Weston',      slug: 'weston' },
      { city: 'Lexington',   slug: 'lexington' },
      { city: 'Needham',     slug: 'needham' },
      { city: 'Newburyport', slug: 'newburyport' },
      { city: 'Hingham',     slug: 'hingham' },
      { city: 'Cohasset',    slug: 'cohasset' },
      { city: 'Chatham',     slug: 'chatham' },
      { city: 'Falmouth',    slug: 'falmouth' },
      { city: 'Northampton', slug: 'northampton' },
      { city: 'Amherst',     slug: 'amherst' },
    ],
    contextualSentence: 'We serve all of Massachusetts — Greater Boston executive dinners in Boston, Cambridge, and Newton, MetroWest corporate and family events in Waltham and Lexington, North Shore waterfront weddings in Marblehead and Newburyport, and Cape Cod vacation dining in Hyannis, Chatham, and Falmouth.',
  },
  pennsylvania: {
    stateName: 'Pennsylvania',
    stateAbbr: 'PA',
    stateSlug: 'pennsylvania',
    featuredCities: [
      { city: 'Philadelphia',    slug: 'philadelphia',    desc: 'Rittenhouse Square rooftops, Society Hill courtyards & Chestnut Hill estate dinners' },
      { city: 'Wayne',           slug: 'wayne',           desc: 'Main Line estate dinners, Devon Horse Show events & Radnor corridor celebrations' },
      { city: 'King of Prussia', slug: 'king-of-prussia', desc: 'Route 202 corporate events, Valley Forge team dinners & holiday parties' },
      { city: 'Bryn Mawr',       slug: 'bryn-mawr',       desc: 'Bryn Mawr College graduation weekends & Lancaster Avenue estate dining' },
      { city: 'Newtown Square',  slug: 'newtown-square',  desc: 'SAP Americas corridor estate dinners & Delaware County celebrations' },
      { city: 'Pittsburgh',      slug: 'pittsburgh',      desc: 'Shadyside, Squirrel Hill, Lawrenceville & Fox Chapel private events' },
    ],
    secondaryCities: [
      { city: 'West Chester',       slug: 'west-chester' },
      { city: 'Malvern',            slug: 'malvern' },
      { city: 'Media',              slug: 'media' },
      { city: 'Blue Bell',          slug: 'blue-bell' },
      { city: 'Lancaster',          slug: 'lancaster' },
      { city: 'Mt. Lebanon',        slug: 'mt-lebanon' },
      { city: 'Wexford',            slug: 'wexford' },
      { city: 'Cranberry Township', slug: 'cranberry-township' },
      { city: 'Fox Chapel',         slug: 'fox-chapel' },
      { city: 'Sewickley',          slug: 'sewickley' },
      { city: 'Stroudsburg',        slug: 'stroudsburg' },
      { city: 'Mount Pocono',       slug: 'mount-pocono' },
      { city: 'Hawley',             slug: 'hawley' },
      { city: 'Hershey',            slug: 'hershey' },
    ],
    contextualSentence: 'We serve all of Pennsylvania — Main Line luxury estate dinners in Wayne, Bryn Mawr, and Newtown Square, Philadelphia metro events in every neighborhood, King of Prussia corporate catering, Pittsburgh metro events from Shadyside to Fox Chapel, Pocono Mountain cabin weekends, and Central PA gatherings in Lancaster and Hershey.',
  },

  wisconsin: {
    stateName: 'Wisconsin',
    stateAbbr: 'WI',
    stateSlug: 'wisconsin',
    featuredCities: [
      { city: 'Milwaukee',     slug: 'milwaukee',     desc: 'Historic Third Ward, Bay View, Fiserv Forum & all Milwaukee neighborhoods' },
      { city: 'Mequon',        slug: 'mequon',        desc: 'Lake Michigan estate dinners, Ozaukee County luxury & Concordia graduation events' },
      { city: 'Brookfield',    slug: 'brookfield',    desc: 'Moorland Road corporate events, Elmbrook graduation parties & holiday team dinners' },
      { city: 'Wauwatosa',     slug: 'wauwatosa',     desc: 'Medical College milestone dinners, Story Hill celebrations & Tosa Village events' },
      { city: 'Whitefish Bay', slug: 'whitefish-bay', desc: 'Silver Spring Drive lakefront estate graduations & North Shore anniversary dinners' },
    ],
    secondaryCities: [],
    contextualSentence: 'We serve all of Wisconsin — Milwaukee metro estate dinners and corporate events, North Shore luxury communities in Mequon and Whitefish Bay, and Brookfield and Wauwatosa professional celebrations.',
  },

  indiana: {
    stateName: 'Indiana',
    stateAbbr: 'IN',
    stateSlug: 'indiana',
    featuredCities: [
      { city: 'Indianapolis', slug: 'indianapolis', desc: 'Corporate team dinners, Mass Ave & Broad Ripple private events, graduation celebrations' },
      { city: 'Carmel',       slug: 'carmel',       desc: 'Arts & Design District estate dinners, Carmel HS graduation parties, Monon Trail events' },
      { city: 'Fishers',      slug: 'fishers',      desc: 'Geist Reservoir waterfront events, Nickel Plate District, HSE graduation season' },
      { city: 'Zionsville',   slug: 'zionsville',   desc: 'Boone County estate dining, Holliday Farms, brick Main Street milestone events' },
      { city: 'Westfield',    slug: 'westfield',    desc: 'Grand Park sports celebrations, Westfield HS graduation parties, Hamilton County backyard events' },
    ],
    secondaryCities: [],
    contextualSentence: 'We serve all of Indiana — Indianapolis corporate and private events, Hamilton County graduation parties in Carmel, Fishers, Westfield, and Zionsville, and communities throughout central Indiana.',
  },

  'rhode-island': {
    stateName: 'Rhode Island',
    stateAbbr: 'RI',
    stateSlug: 'rhode-island',
    featuredCities: [
      { city: 'Providence',    slug: 'providence',    desc: 'Corporate team dinners, Brown & RISD graduation parties, College Hill and Federal Hill events' },
      { city: 'East Greenwich', slug: 'east-greenwich', desc: 'Greenwich Cove estate dinners, East Greenwich Yacht Club-adjacent celebrations, milestone events' },
      { city: 'Cranston',      slug: 'cranston',      desc: 'Graduation parties, Knightsville backyard events, Greater Providence family celebrations' },
      { city: 'Warwick',       slug: 'warwick',       desc: 'Pilgrim & Veterans HS graduation parties, Warwick Neck waterfront events, family milestones' },
      { city: 'Lincoln',       slug: 'lincoln',       desc: 'Chase Farm-adjacent graduation events, Lincoln Woods-area family celebrations, Northern Rhode Island' },
    ],
    secondaryCities: [],
    contextualSentence: 'We serve all of Rhode Island — Providence corporate and graduation events, East Greenwich and Newport luxury occasions, and Greater Providence suburban communities throughout the Ocean State.',
  },
}

// ── City-level linking data ───────────────────────────────────────────────────
export const CITY_LINK_DATA = {

  // ── Texas ──────────────────────────────────────────────────────────────────
  dallas: {
    cityName: 'Dallas',
    stateSlug: 'texas',
    stateName: 'Texas',
    stateAbbr: 'TX',
    nearbyMajorCities: [
      { city: 'Fort Worth', slug: 'fort-worth' },
      { city: 'Plano',      slug: 'plano'      },
      { city: 'Frisco',     slug: 'frisco'     },
      { city: 'Arlington',  slug: 'arlington'  },
    ],
    otherStateCities: [
      { city: 'Houston',     slug: 'houston'     },
      { city: 'Austin',      slug: 'austin'      },
      { city: 'San Antonio', slug: 'san-antonio' },
      { city: 'Katy',        slug: 'katy'        },
      { city: 'Sugar Land',  slug: 'sugar-land'  },
    ],
    contextualSentence: 'Not in Dallas? We serve all of Texas — Fort Worth, Plano, Frisco, Arlington, Houston, Katy, Sugar Land, Austin, and San Antonio.',
  },

  houston: {
    cityName: 'Houston',
    stateSlug: 'texas',
    stateName: 'Texas',
    stateAbbr: 'TX',
    nearbyMajorCities: [
      { city: 'Katy',          slug: 'katy'          },
      { city: 'Sugar Land',    slug: 'sugar-land'    },
      { city: 'The Woodlands', slug: 'the-woodlands' },
      { city: 'Pearland',      slug: 'pearland'      },
    ],
    otherStateCities: [
      { city: 'Dallas',      slug: 'dallas'      },
      { city: 'Fort Worth',  slug: 'fort-worth'  },
      { city: 'Austin',      slug: 'austin'      },
      { city: 'San Antonio', slug: 'san-antonio' },
    ],
    contextualSentence: 'Not in Houston? We also serve Katy, Sugar Land, The Woodlands, Pearland, Dallas, Fort Worth, Austin, and San Antonio — all of Greater Texas.',
  },

  austin: {
    cityName: 'Austin',
    stateSlug: 'texas',
    stateName: 'Texas',
    stateAbbr: 'TX',
    nearbyMajorCities: [
      { city: 'Round Rock',  slug: 'round-rock'  },
      { city: 'Cedar Park',  slug: 'cedar-park'  },
      { city: 'Georgetown',  slug: 'georgetown'  },
      { city: 'San Marcos',  slug: 'san-marcos'  },
    ],
    otherStateCities: [
      { city: 'Houston',     slug: 'houston'     },
      { city: 'Dallas',      slug: 'dallas'      },
      { city: 'San Antonio', slug: 'san-antonio' },
      { city: 'Fort Worth',  slug: 'fort-worth'  },
      { city: 'Katy',        slug: 'katy'        },
    ],
    contextualSentence: 'Not in Austin? We serve Houston, Dallas, San Antonio, Fort Worth, Katy, Sugar Land, The Woodlands, Round Rock, Cedar Park, and Georgetown.',
  },

  'san-antonio': {
    cityName: 'San Antonio',
    stateSlug: 'texas',
    stateName: 'Texas',
    stateAbbr: 'TX',
    nearbyMajorCities: [
      { city: 'Austin',        slug: 'austin'        },
      { city: 'New Braunfels', slug: 'new-braunfels' },
      { city: 'Schertz',       slug: 'schertz'       },
      { city: 'Boerne',        slug: 'boerne'        },
    ],
    otherStateCities: [
      { city: 'Houston',     slug: 'houston'     },
      { city: 'Dallas',      slug: 'dallas'      },
      { city: 'Fort Worth',  slug: 'fort-worth'  },
      { city: 'Katy',        slug: 'katy'        },
      { city: 'Sugar Land',  slug: 'sugar-land'  },
    ],
    contextualSentence: 'Not in San Antonio? We serve Austin, Houston, Dallas, Fort Worth, Katy, Sugar Land, The Woodlands, and all surrounding Hill Country and Texas metro communities.',
  },

  'fort-worth': {
    cityName: 'Fort Worth',
    stateSlug: 'texas',
    stateName: 'Texas',
    stateAbbr: 'TX',
    nearbyMajorCities: [
      { city: 'Dallas',     slug: 'dallas'     },
      { city: 'Arlington',  slug: 'arlington'  },
      { city: 'Southlake',  slug: 'southlake'  },
      { city: 'Keller',     slug: 'keller'     },
    ],
    otherStateCities: [
      { city: 'Houston',     slug: 'houston'     },
      { city: 'Austin',      slug: 'austin'      },
      { city: 'San Antonio', slug: 'san-antonio' },
      { city: 'Katy',        slug: 'katy'        },
      { city: 'Sugar Land',  slug: 'sugar-land'  },
    ],
    contextualSentence: 'Not in Fort Worth? We serve Dallas, Arlington, Plano, Frisco, Houston, Katy, Sugar Land, The Woodlands, Austin, and San Antonio.',
  },

  katy: {
    cityName: 'Katy',
    stateSlug: 'texas',
    stateName: 'Texas',
    stateAbbr: 'TX',
    nearbyMajorCities: [
      { city: 'Houston',       slug: 'houston'       },
      { city: 'Sugar Land',    slug: 'sugar-land'    },
      { city: 'The Woodlands', slug: 'the-woodlands' },
      { city: 'Cypress',       slug: 'cypress'       },
    ],
    otherStateCities: [
      { city: 'Dallas',      slug: 'dallas'      },
      { city: 'Fort Worth',  slug: 'fort-worth'  },
      { city: 'Austin',      slug: 'austin'      },
      { city: 'San Antonio', slug: 'san-antonio' },
    ],
    contextualSentence: 'Not in Katy? We serve all Greater Houston — Sugar Land, The Woodlands, Pearland, Cypress, and central Houston, plus Dallas, Fort Worth, Austin, and San Antonio.',
  },

  'sugar-land': {
    cityName: 'Sugar Land',
    stateSlug: 'texas',
    stateName: 'Texas',
    stateAbbr: 'TX',
    nearbyMajorCities: [
      { city: 'Houston',     slug: 'houston'     },
      { city: 'Katy',        slug: 'katy'        },
      { city: 'Pearland',    slug: 'pearland'    },
      { city: 'Missouri City', slug: 'missouri-city' },
    ],
    otherStateCities: [
      { city: 'Dallas',      slug: 'dallas'      },
      { city: 'Fort Worth',  slug: 'fort-worth'  },
      { city: 'Austin',      slug: 'austin'      },
      { city: 'San Antonio', slug: 'san-antonio' },
    ],
    contextualSentence: 'Not in Sugar Land? We serve all of Fort Bend County and Greater Houston — Katy, Pearland, Missouri City, The Woodlands, central Houston, Dallas, Austin, and San Antonio.',
  },

  'the-woodlands': {
    cityName: 'The Woodlands',
    stateSlug: 'texas',
    stateName: 'Texas',
    stateAbbr: 'TX',
    nearbyMajorCities: [
      { city: 'Houston',  slug: 'houston'  },
      { city: 'Spring',   slug: 'spring'   },
      { city: 'Conroe',   slug: 'conroe'   },
      { city: 'Humble',   slug: 'humble'   },
    ],
    otherStateCities: [
      { city: 'Dallas',      slug: 'dallas'      },
      { city: 'Fort Worth',  slug: 'fort-worth'  },
      { city: 'Austin',      slug: 'austin'      },
      { city: 'Katy',        slug: 'katy'        },
      { city: 'Sugar Land',  slug: 'sugar-land'  },
    ],
    contextualSentence: 'Not in The Woodlands? We cover all North Houston — Spring, Conroe, Humble, Kingwood, and central Houston, plus Katy, Sugar Land, Dallas, Fort Worth, and Austin.',
  },

  // ── Arizona ────────────────────────────────────────────────────────────────
  phoenix: {
    cityName: 'Phoenix',
    stateSlug: 'arizona',
    stateName: 'Arizona',
    stateAbbr: 'AZ',
    nearbyMajorCities: [
      { city: 'Scottsdale', slug: 'scottsdale' },
      { city: 'Mesa',       slug: 'mesa'       },
      { city: 'Chandler',   slug: 'chandler'   },
      { city: 'Tempe',      slug: 'tempe'      },
    ],
    otherStateCities: [
      { city: 'Tucson',  slug: 'tucson'  },
      { city: 'Gilbert', slug: 'gilbert' },
    ],
    contextualSentence: 'Not in Phoenix? We serve all of Arizona — including Scottsdale, Mesa, Chandler, Tempe, and Tucson.',
  },

  // ── Florida ────────────────────────────────────────────────────────────────
  miami: {
    cityName: 'Miami',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Fort Lauderdale', slug: 'fort-lauderdale' },
      { city: 'Boca Raton',      slug: 'boca-raton'      },
      { city: 'Hialeah',         slug: 'hialeah'         },
      { city: 'Coral Gables',    slug: 'coral-gables'    },
    ],
    otherStateCities: [
      { city: 'Orlando',     slug: 'orlando'     },
      { city: 'Tampa',       slug: 'tampa'       },
      { city: 'Jacksonville', slug: 'jacksonville' },
    ],
    contextualSentence: 'Not in Miami? We serve all of Florida — including Fort Lauderdale, Boca Raton, Orlando, Tampa, and Jacksonville.',
  },

  orlando: {
    cityName: 'Orlando',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Kissimmee',   slug: 'kissimmee'   },
      { city: 'Sanford',     slug: 'sanford'     },
      { city: 'Lakeland',    slug: 'lakeland'    },
      { city: 'Winter Park',  slug: 'winter-park' },
    ],
    otherStateCities: [
      { city: 'Miami',       slug: 'miami'       },
      { city: 'Tampa',       slug: 'tampa'       },
      { city: 'Jacksonville', slug: 'jacksonville' },
    ],
    contextualSentence: 'Not in Orlando? We serve all of Florida — including Miami, Tampa, Jacksonville, Kissimmee, and Lakeland.',
  },

  tampa: {
    cityName: 'Tampa',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'St. Petersburg', slug: 'st-petersburg' },
      { city: 'Clearwater',     slug: 'clearwater'    },
      { city: 'Brandon',        slug: 'brandon'       },
      { city: 'Wesley Chapel',  slug: 'wesley-chapel' },
    ],
    otherStateCities: [
      { city: 'Miami',           slug: 'miami'           },
      { city: 'Orlando',         slug: 'orlando'         },
      { city: 'Fort Lauderdale', slug: 'fort-lauderdale' },
      { city: 'Sarasota',        slug: 'sarasota'        },
    ],
    contextualSentence: 'Not in Tampa? We serve all of Florida — St. Petersburg, Clearwater, Sarasota, Orlando, Miami, and Fort Lauderdale.',
  },

  jacksonville: {
    cityName: 'Jacksonville',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Ponte Vedra Beach', slug: 'ponte-vedra-beach' },
      { city: 'Atlantic Beach',    slug: 'atlantic-beach'    },
      { city: 'St. Augustine',     slug: 'st-augustine'      },
      { city: 'Palm Coast',        slug: 'palm-coast'        },
    ],
    otherStateCities: [
      { city: 'Miami',     slug: 'miami'     },
      { city: 'Orlando',   slug: 'orlando'   },
      { city: 'Tampa',     slug: 'tampa'     },
      { city: 'Sarasota',  slug: 'sarasota'  },
    ],
    contextualSentence: 'Not in Jacksonville? We serve all of Florida — St. Augustine, Ponte Vedra Beach, Orlando, Miami, Tampa, and Sarasota.',
  },

  'fort-lauderdale': {
    cityName: 'Fort Lauderdale',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Miami',         slug: 'miami'         },
      { city: 'Boca Raton',    slug: 'boca-raton'    },
      { city: 'Hollywood',     slug: 'hollywood'     },
      { city: 'Pompano Beach', slug: 'pompano-beach' },
    ],
    otherStateCities: [
      { city: 'Orlando',   slug: 'orlando'   },
      { city: 'Tampa',     slug: 'tampa'     },
      { city: 'Sarasota',  slug: 'sarasota'  },
      { city: 'Naples',    slug: 'naples'    },
    ],
    contextualSentence: 'Not in Fort Lauderdale? We serve all of Florida — Miami, Boca Raton, Hollywood, Orlando, Tampa, and Naples.',
  },

  sarasota: {
    cityName: 'Sarasota',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Bradenton',    slug: 'bradenton'    },
      { city: 'Venice',       slug: 'venice'       },
      { city: 'Siesta Key',   slug: 'siesta-key'   },
      { city: 'Longboat Key', slug: 'longboat-key' },
    ],
    otherStateCities: [
      { city: 'Tampa',       slug: 'tampa'       },
      { city: 'Naples',      slug: 'naples'      },
      { city: 'Fort Myers',  slug: 'fort-myers'  },
      { city: 'Cape Coral',  slug: 'cape-coral'  },
    ],
    contextualSentence: 'Not in Sarasota? We serve all of Florida\'s Gulf Coast — Bradenton, Venice, Naples, Fort Myers, Tampa, and Cape Coral.',
  },

  naples: {
    cityName: 'Naples',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Bonita Springs', slug: 'bonita-springs' },
      { city: 'Marco Island',   slug: 'marco-island'   },
      { city: 'Fort Myers',     slug: 'fort-myers'     },
      { city: 'Cape Coral',     slug: 'cape-coral'     },
    ],
    otherStateCities: [
      { city: 'Sarasota',  slug: 'sarasota'  },
      { city: 'Tampa',     slug: 'tampa'     },
      { city: 'Miami',     slug: 'miami'     },
    ],
    contextualSentence: 'Not in Naples? We serve all of Southwest Florida — Bonita Springs, Marco Island, Fort Myers, Cape Coral, Sarasota, and Tampa.',
  },

  'west-palm-beach': {
    cityName: 'West Palm Beach',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Boca Raton',     slug: 'boca-raton'     },
      { city: 'Delray Beach',   slug: 'delray-beach'   },
      { city: 'Jupiter',        slug: 'jupiter'        },
      { city: 'Palm Beach Gardens', slug: 'palm-beach-gardens' },
    ],
    otherStateCities: [
      { city: 'Miami',           slug: 'miami'           },
      { city: 'Fort Lauderdale', slug: 'fort-lauderdale' },
      { city: 'Orlando',         slug: 'orlando'         },
    ],
    contextualSentence: 'Not in West Palm Beach? We serve all of Palm Beach County and South Florida — Boca Raton, Delray Beach, Jupiter, Miami, and Fort Lauderdale.',
  },

  destin: {
    cityName: 'Destin',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Miramar Beach',    slug: 'miramar-beach'    },
      { city: 'Fort Walton Beach', slug: 'fort-walton-beach' },
      { city: '30A',              slug: '30a'              },
      { city: 'Panama City Beach', slug: 'panama-city-beach' },
    ],
    otherStateCities: [
      { city: 'Pensacola',     slug: 'pensacola'     },
      { city: 'Jacksonville',  slug: 'jacksonville'  },
      { city: 'Tampa',         slug: 'tampa'         },
      { city: 'Orlando',       slug: 'orlando'       },
    ],
    contextualSentence: 'Not in Destin? We serve the entire Emerald Coast — 30A, Fort Walton Beach, Miramar Beach, Panama City Beach, and all Florida Panhandle vacation communities.',
  },

  'st-petersburg': {
    cityName: 'St. Petersburg',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Tampa',         slug: 'tampa'         },
      { city: 'Clearwater',    slug: 'clearwater'    },
      { city: 'Gulfport',      slug: 'gulfport'      },
      { city: 'St. Pete Beach', slug: 'st-pete-beach' },
    ],
    otherStateCities: [
      { city: 'Sarasota',  slug: 'sarasota'  },
      { city: 'Orlando',   slug: 'orlando'   },
      { city: 'Miami',     slug: 'miami'     },
    ],
    contextualSentence: 'Not in St. Petersburg? We serve all of Tampa Bay — Clearwater, Gulfport, Sarasota, Tampa, Orlando, and Miami.',
  },

  clearwater: {
    cityName: 'Clearwater',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'St. Petersburg', slug: 'st-petersburg' },
      { city: 'Tampa',          slug: 'tampa'          },
      { city: 'Dunedin',        slug: 'dunedin'        },
      { city: 'Tarpon Springs', slug: 'tarpon-springs' },
    ],
    otherStateCities: [
      { city: 'Sarasota',  slug: 'sarasota'  },
      { city: 'Orlando',   slug: 'orlando'   },
      { city: 'Miami',     slug: 'miami'     },
    ],
    contextualSentence: 'Not in Clearwater? We serve all of Pinellas County — St. Petersburg, Dunedin, Tarpon Springs, Sarasota, Tampa, and Orlando.',
  },

  kissimmee: {
    cityName: 'Kissimmee',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Orlando',        slug: 'orlando'        },
      { city: 'Celebration',    slug: 'celebration'    },
      { city: 'Lake Buena Vista', slug: 'lake-buena-vista' },
      { city: 'Davenport',      slug: 'davenport'      },
    ],
    otherStateCities: [
      { city: 'Tampa',       slug: 'tampa'       },
      { city: 'Miami',       slug: 'miami'       },
      { city: 'Sarasota',    slug: 'sarasota'    },
    ],
    contextualSentence: 'Not in Kissimmee? We serve the full Central Florida vacation corridor — Orlando, Celebration, Davenport, Clermont, and Winter Garden.',
  },

  'key-west': {
    cityName: 'Key West',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Marathon',    slug: 'marathon'    },
      { city: 'Islamorada',  slug: 'islamorada'  },
      { city: 'Key Largo',   slug: 'key-largo'   },
      { city: 'Big Pine Key', slug: 'big-pine-key' },
    ],
    otherStateCities: [
      { city: 'Miami',           slug: 'miami'           },
      { city: 'Fort Lauderdale', slug: 'fort-lauderdale' },
      { city: 'Naples',          slug: 'naples'          },
    ],
    contextualSentence: 'Not in Key West? We serve all of Florida — Miami, Fort Lauderdale, Naples, Sarasota, Tampa, and Orlando.',
  },

  'boca-raton': {
    cityName: 'Boca Raton',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Delray Beach',   slug: 'delray-beach'   },
      { city: 'Deerfield Beach', slug: 'deerfield-beach' },
      { city: 'Boynton Beach',  slug: 'boynton-beach'  },
      { city: 'Highland Beach', slug: 'highland-beach'  },
    ],
    otherStateCities: [
      { city: 'West Palm Beach', slug: 'west-palm-beach' },
      { city: 'Fort Lauderdale', slug: 'fort-lauderdale' },
      { city: 'Miami',           slug: 'miami'           },
    ],
    contextualSentence: 'Not in Boca Raton? We serve all of Palm Beach County — West Palm Beach, Delray Beach, Deerfield Beach, Fort Lauderdale, and Miami.',
  },

  'cape-coral': {
    cityName: 'Cape Coral',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Fort Myers',     slug: 'fort-myers'    },
      { city: 'Bonita Springs', slug: 'bonita-springs' },
      { city: 'Sanibel',        slug: 'sanibel'        },
      { city: 'North Fort Myers', slug: 'north-fort-myers' },
    ],
    otherStateCities: [
      { city: 'Sarasota', slug: 'sarasota' },
      { city: 'Tampa',    slug: 'tampa'    },
      { city: 'Naples',   slug: 'naples'   },
    ],
    contextualSentence: 'Not in Cape Coral? We serve all of Southwest Florida — Fort Myers, Bonita Springs, Naples, Sarasota, and Tampa.',
  },

  'panama-city-beach': {
    cityName: 'Panama City Beach',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Destin',            slug: 'destin'            },
      { city: '30A',               slug: '30a'               },
      { city: 'Fort Walton Beach', slug: 'fort-walton-beach' },
      { city: 'Mexico Beach',      slug: 'mexico-beach'      },
    ],
    otherStateCities: [
      { city: 'Pensacola',    slug: 'pensacola'    },
      { city: 'Tallahassee',  slug: 'tallahassee'  },
      { city: 'Jacksonville', slug: 'jacksonville' },
    ],
    contextualSentence: 'Not in Panama City Beach? We serve the full Emerald Coast — Destin, 30A, Fort Walton Beach, Pensacola, and all Panhandle vacation communities.',
  },

  '30a': {
    cityName: '30A',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Destin',            slug: 'destin'            },
      { city: 'Miramar Beach',     slug: 'miramar-beach'     },
      { city: 'Santa Rosa Beach',  slug: 'santa-rosa-beach'  },
      { city: 'Fort Walton Beach', slug: 'fort-walton-beach' },
    ],
    otherStateCities: [
      { city: 'Pensacola',         slug: 'pensacola'         },
      { city: 'Panama City Beach', slug: 'panama-city-beach' },
      { city: 'Jacksonville',      slug: 'jacksonville'      },
    ],
    contextualSentence: 'Not on 30A? We serve the full Emerald Coast — Destin, Miramar Beach, Fort Walton Beach, and Panama City Beach.',
  },

  pensacola: {
    cityName: 'Pensacola',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Gulf Breeze',   slug: 'gulf-breeze'   },
      { city: 'Navarre',       slug: 'navarre'        },
      { city: 'Navarre Beach', slug: 'navarre-beach'  },
      { city: 'Perdido Key',   slug: 'perdido-key'    },
    ],
    otherStateCities: [
      { city: 'Destin',            slug: 'destin'            },
      { city: 'Fort Walton Beach', slug: 'fort-walton-beach' },
      { city: 'Panama City Beach', slug: 'panama-city-beach' },
    ],
    contextualSentence: 'Not in Pensacola? We serve the full Emerald Coast — Destin, Fort Walton Beach, Navarre Beach, 30A, and Panama City Beach.',
  },

  bradenton: {
    cityName: 'Bradenton',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Sarasota',        slug: 'sarasota'        },
      { city: 'Anna Maria Island', slug: 'anna-maria-island' },
      { city: 'Palmetto',        slug: 'palmetto'        },
      { city: 'Lakewood Ranch',  slug: 'lakewood-ranch'  },
    ],
    otherStateCities: [
      { city: 'Tampa',      slug: 'tampa'     },
      { city: 'Naples',     slug: 'naples'    },
      { city: 'Fort Myers', slug: 'fort-myers' },
    ],
    contextualSentence: 'Not in Bradenton? We serve all of the Gulf Coast — Sarasota, Anna Maria Island, Tampa, Naples, and Fort Myers.',
  },

  'fort-myers': {
    cityName: 'Fort Myers',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Cape Coral',     slug: 'cape-coral'    },
      { city: 'Bonita Springs', slug: 'bonita-springs' },
      { city: 'Estero',         slug: 'estero'         },
      { city: 'Sanibel',        slug: 'sanibel'        },
    ],
    otherStateCities: [
      { city: 'Naples',   slug: 'naples'   },
      { city: 'Sarasota', slug: 'sarasota' },
      { city: 'Tampa',    slug: 'tampa'    },
    ],
    contextualSentence: 'Not in Fort Myers? We serve all of Southwest Florida — Cape Coral, Bonita Springs, Naples, Sarasota, and Tampa.',
  },

  // ── Georgia ────────────────────────────────────────────────────────────────
  atlanta: {
    cityName: 'Atlanta',
    stateSlug: 'georgia',
    stateName: 'Georgia',
    stateAbbr: 'GA',
    nearbyMajorCities: [
      { city: 'Sandy Springs', slug: 'sandy-springs' },
      { city: 'Roswell',       slug: 'roswell'       },
      { city: 'Marietta',      slug: 'marietta'      },
      { city: 'Alpharetta',    slug: 'alpharetta'    },
    ],
    otherStateCities: [
      { city: 'Savannah', slug: 'savannah' },
      { city: 'Augusta',  slug: 'augusta'  },
    ],
    contextualSentence: 'Not in Atlanta? We serve all of Georgia — including Sandy Springs, Roswell, Savannah, Augusta, and surrounding metro communities.',
  },

  // ── North Carolina ─────────────────────────────────────────────────────────
  charlotte: {
    cityName: 'Charlotte',
    stateSlug: 'north-carolina',
    stateName: 'North Carolina',
    stateAbbr: 'NC',
    nearbyMajorCities: [
      { city: 'Huntersville', slug: 'huntersville' },
      { city: 'Mooresville',  slug: 'mooresville'  },
      { city: 'Matthews',     slug: 'matthews'     },
      { city: 'Concord',      slug: 'concord'      },
    ],
    otherStateCities: [
      { city: 'Raleigh',      slug: 'raleigh'      },
      { city: 'Durham',       slug: 'durham'       },
      { city: 'Greensboro',   slug: 'greensboro'   },
      { city: 'Cary',         slug: 'cary'         },
      { city: 'Lake Norman',  slug: 'lake-norman'  },
    ],
    contextualSentence: 'Not in Charlotte? We serve all of North Carolina — Raleigh, Durham, Greensboro, Cary, Wilmington, Asheville, and the Outer Banks.',
  },

  raleigh: {
    cityName: 'Raleigh',
    stateSlug: 'north-carolina',
    stateName: 'North Carolina',
    stateAbbr: 'NC',
    nearbyMajorCities: [
      { city: 'Cary',          slug: 'cary'          },
      { city: 'Apex',          slug: 'apex'          },
      { city: 'Holly Springs', slug: 'holly-springs' },
      { city: 'Durham',        slug: 'durham'        },
    ],
    otherStateCities: [
      { city: 'Charlotte',     slug: 'charlotte'     },
      { city: 'Greensboro',    slug: 'greensboro'    },
      { city: 'Wilmington',    slug: 'wilmington'    },
      { city: 'Chapel Hill',   slug: 'chapel-hill'   },
    ],
    contextualSentence: 'Not in Raleigh? We serve the full Research Triangle — Cary, Apex, Durham, Chapel Hill, Holly Springs — and all of North Carolina.',
  },

  durham: {
    cityName: 'Durham',
    stateSlug: 'north-carolina',
    stateName: 'North Carolina',
    stateAbbr: 'NC',
    nearbyMajorCities: [
      { city: 'Raleigh',      slug: 'raleigh'     },
      { city: 'Cary',         slug: 'cary'        },
      { city: 'Chapel Hill',  slug: 'chapel-hill' },
    ],
    otherStateCities: [
      { city: 'Charlotte',    slug: 'charlotte'   },
      { city: 'Greensboro',   slug: 'greensboro'  },
      { city: 'Apex',         slug: 'apex'        },
      { city: 'Wilmington',   slug: 'wilmington'  },
    ],
    contextualSentence: 'Not in Durham? We serve the full Triangle — Raleigh, Cary, Chapel Hill, Apex — and all of North Carolina from Charlotte to the coast.',
  },

  asheville: {
    cityName: 'Asheville',
    stateSlug: 'north-carolina',
    stateName: 'North Carolina',
    stateAbbr: 'NC',
    nearbyMajorCities: [
      { city: 'Hendersonville', slug: 'hendersonville' },
      { city: 'Boone',          slug: 'boone'          },
      { city: 'Blowing Rock',   slug: 'blowing-rock'   },
    ],
    otherStateCities: [
      { city: 'Charlotte',      slug: 'charlotte'      },
      { city: 'Raleigh',        slug: 'raleigh'        },
      { city: 'Wilmington',     slug: 'wilmington'     },
    ],
    contextualSentence: 'Not in Asheville? We serve western NC — Hendersonville, Boone, Blowing Rock — and all of North Carolina from the mountains to the coast.',
  },

  wilmington: {
    cityName: 'Wilmington',
    stateSlug: 'north-carolina',
    stateName: 'North Carolina',
    stateAbbr: 'NC',
    nearbyMajorCities: [
      { city: 'Wrightsville Beach', slug: 'wrightsville-beach' },
      { city: 'Carolina Beach',     slug: 'carolina-beach'     },
      { city: 'Surf City',          slug: 'surf-city'          },
    ],
    otherStateCities: [
      { city: 'Charlotte',          slug: 'charlotte'          },
      { city: 'Raleigh',            slug: 'raleigh'            },
      { city: 'Outer Banks',        slug: 'outer-banks'        },
    ],
    contextualSentence: 'Not in Wilmington? We serve coastal NC — Wrightsville Beach, Carolina Beach, Surf City, the Outer Banks — and all of North Carolina.',
  },

  greensboro: {
    cityName: 'Greensboro',
    stateSlug: 'north-carolina',
    stateName: 'North Carolina',
    stateAbbr: 'NC',
    nearbyMajorCities: [
      { city: 'Winston-Salem', slug: 'winston-salem' },
      { city: 'High Point',    slug: 'high-point'    },
      { city: 'Burlington',    slug: 'burlington'    },
    ],
    otherStateCities: [
      { city: 'Charlotte',     slug: 'charlotte'     },
      { city: 'Raleigh',       slug: 'raleigh'       },
      { city: 'Durham',        slug: 'durham'        },
    ],
    contextualSentence: 'Not in Greensboro? We serve the full Piedmont Triad — Winston-Salem, High Point, Burlington — and all of North Carolina.',
  },

  cary: {
    cityName: 'Cary',
    stateSlug: 'north-carolina',
    stateName: 'North Carolina',
    stateAbbr: 'NC',
    nearbyMajorCities: [
      { city: 'Apex',          slug: 'apex'          },
      { city: 'Holly Springs', slug: 'holly-springs' },
      { city: 'Morrisville',   slug: 'morrisville'   },
    ],
    otherStateCities: [
      { city: 'Raleigh',       slug: 'raleigh'       },
      { city: 'Durham',        slug: 'durham'        },
      { city: 'Chapel Hill',   slug: 'chapel-hill'   },
      { city: 'Charlotte',     slug: 'charlotte'     },
    ],
    contextualSentence: 'Not in Cary? We serve the full Triangle — Raleigh, Durham, Apex, Chapel Hill, Holly Springs — and all of North Carolina.',
  },

  'winston-salem': {
    cityName: 'Winston-Salem',
    stateSlug: 'north-carolina',
    stateName: 'North Carolina',
    stateAbbr: 'NC',
    nearbyMajorCities: [
      { city: 'Greensboro',    slug: 'greensboro'    },
      { city: 'High Point',    slug: 'high-point'    },
      { city: 'Kernersville',  slug: 'kernersville'  },
    ],
    otherStateCities: [
      { city: 'Charlotte',     slug: 'charlotte'     },
      { city: 'Raleigh',       slug: 'raleigh'       },
      { city: 'Durham',        slug: 'durham'        },
    ],
    contextualSentence: 'Not in Winston-Salem? We serve the full Piedmont Triad — Greensboro, High Point — and all of North Carolina.',
  },

  'lake-norman': {
    cityName: 'Lake Norman',
    stateSlug: 'north-carolina',
    stateName: 'North Carolina',
    stateAbbr: 'NC',
    nearbyMajorCities: [
      { city: 'Cornelius',    slug: 'cornelius'    },
      { city: 'Mooresville',  slug: 'mooresville'  },
      { city: 'Huntersville', slug: 'huntersville' },
      { city: 'Davidson',     slug: 'davidson'     },
    ],
    otherStateCities: [
      { city: 'Charlotte',    slug: 'charlotte'    },
      { city: 'Concord',      slug: 'concord'      },
      { city: 'Raleigh',      slug: 'raleigh'      },
    ],
    contextualSentence: 'Not at Lake Norman? We serve all of greater Charlotte — Cornelius, Mooresville, Huntersville, Davidson, Concord — and all of North Carolina.',
  },

  'outer-banks': {
    cityName: 'Outer Banks',
    stateSlug: 'north-carolina',
    stateName: 'North Carolina',
    stateAbbr: 'NC',
    nearbyMajorCities: [
      { city: 'Nags Head',        slug: 'nags-head'        },
      { city: 'Kill Devil Hills', slug: 'kill-devil-hills' },
      { city: 'Duck',             slug: 'duck'             },
    ],
    otherStateCities: [
      { city: 'Wilmington',       slug: 'wilmington'       },
      { city: 'Wrightsville Beach', slug: 'wrightsville-beach' },
      { city: 'Carolina Beach',   slug: 'carolina-beach'   },
    ],
    contextualSentence: 'Not at the Outer Banks? We serve all coastal NC — Nags Head, Kill Devil Hills, Wrightsville Beach, Carolina Beach, Wilmington, and Surf City.',
  },

  // ── Colorado ───────────────────────────────────────────────────────────────
  denver: {
    cityName: 'Denver',
    stateSlug: 'colorado',
    stateName: 'Colorado',
    stateAbbr: 'CO',
    nearbyMajorCities: [
      { city: 'Cherry Hills Village', slug: 'cherry-hills-village' },
      { city: 'Greenwood Village',    slug: 'greenwood-village'    },
      { city: 'Lakewood',             slug: 'lakewood'             },
      { city: 'Arvada',               slug: 'arvada'               },
    ],
    otherStateCities: [
      { city: 'Colorado Springs', slug: 'colorado-springs' },
      { city: 'Boulder',          slug: 'boulder'          },
      { city: 'Fort Collins',     slug: 'fort-collins'     },
    ],
    contextualSentence: 'Not in Denver? We serve all of Colorado — Boulder, Colorado Springs, Fort Collins, Highlands Ranch, Aspen, Vail, and every Front Range and mountain community.',
  },
  'cherry-hills-village': {
    cityName: 'Cherry Hills Village',
    stateSlug: 'colorado',
    stateName: 'Colorado',
    stateAbbr: 'CO',
    nearbyMajorCities: [
      { city: 'Denver',            slug: 'denver'            },
      { city: 'Greenwood Village', slug: 'greenwood-village' },
      { city: 'Centennial',        slug: 'centennial'        },
      { city: 'Lone Tree',         slug: 'lone-tree'         },
    ],
    otherStateCities: [
      { city: 'Boulder',           slug: 'boulder'           },
      { city: 'Colorado Springs',  slug: 'colorado-springs'  },
    ],
    contextualSentence: 'Not in Cherry Hills Village? We serve all of Colorado — Denver, Greenwood Village, Lone Tree, Boulder, and every Front Range community.',
  },
  'greenwood-village': {
    cityName: 'Greenwood Village',
    stateSlug: 'colorado',
    stateName: 'Colorado',
    stateAbbr: 'CO',
    nearbyMajorCities: [
      { city: 'Denver',              slug: 'denver'              },
      { city: 'Cherry Hills Village',slug: 'cherry-hills-village'},
      { city: 'Centennial',          slug: 'centennial'          },
      { city: 'Lone Tree',           slug: 'lone-tree'           },
    ],
    otherStateCities: [
      { city: 'Boulder',           slug: 'boulder'          },
      { city: 'Colorado Springs',  slug: 'colorado-springs' },
    ],
    contextualSentence: 'Not in Greenwood Village? We serve all of Colorado — Denver, Cherry Hills Village, Centennial, Lone Tree, and the full Front Range.',
  },
  centennial: {
    cityName: 'Centennial',
    stateSlug: 'colorado',
    stateName: 'Colorado',
    stateAbbr: 'CO',
    nearbyMajorCities: [
      { city: 'Highlands Ranch', slug: 'highlands-ranch'  },
      { city: 'Greenwood Village',slug: 'greenwood-village'},
      { city: 'Parker',          slug: 'parker'           },
      { city: 'Lone Tree',       slug: 'lone-tree'        },
    ],
    otherStateCities: [
      { city: 'Denver',          slug: 'denver'          },
      { city: 'Boulder',         slug: 'boulder'         },
    ],
    contextualSentence: 'Not in Centennial? We serve all of Colorado — Highlands Ranch, Parker, Lone Tree, Denver, and every Arapahoe County community.',
  },
  'highlands-ranch': {
    cityName: 'Highlands Ranch',
    stateSlug: 'colorado',
    stateName: 'Colorado',
    stateAbbr: 'CO',
    nearbyMajorCities: [
      { city: 'Centennial',  slug: 'centennial'  },
      { city: 'Parker',      slug: 'parker'      },
      { city: 'Castle Rock', slug: 'castle-rock' },
      { city: 'Lone Tree',   slug: 'lone-tree'   },
    ],
    otherStateCities: [
      { city: 'Denver',          slug: 'denver'          },
      { city: 'Colorado Springs', slug: 'colorado-springs'},
    ],
    contextualSentence: 'Not in Highlands Ranch? We serve all of Colorado — Centennial, Parker, Castle Rock, Lone Tree, and every Douglas County community.',
  },
  boulder: {
    cityName: 'Boulder',
    stateSlug: 'colorado',
    stateName: 'Colorado',
    stateAbbr: 'CO',
    nearbyMajorCities: [
      { city: 'Louisville',  slug: 'louisville'  },
      { city: 'Broomfield',  slug: 'broomfield'  },
      { city: 'Arvada',      slug: 'arvada'      },
      { city: 'Fort Collins',slug: 'fort-collins'},
    ],
    otherStateCities: [
      { city: 'Denver',    slug: 'denver'    },
      { city: 'Lakewood',  slug: 'lakewood'  },
    ],
    contextualSentence: 'Not in Boulder? We serve all of Colorado — Louisville, Fort Collins, Broomfield, Denver, and the full Front Range.',
  },
  broomfield: {
    cityName: 'Broomfield',
    stateSlug: 'colorado',
    stateName: 'Colorado',
    stateAbbr: 'CO',
    nearbyMajorCities: [
      { city: 'Boulder',    slug: 'boulder'    },
      { city: 'Louisville', slug: 'louisville' },
      { city: 'Arvada',     slug: 'arvada'     },
      { city: 'Denver',     slug: 'denver'     },
    ],
    otherStateCities: [
      { city: 'Fort Collins',    slug: 'fort-collins'    },
      { city: 'Colorado Springs',slug: 'colorado-springs'},
    ],
    contextualSentence: 'Not in Broomfield? We serve all of Colorado — Boulder, Louisville, Denver, Fort Collins, and every Front Range tech corridor community.',
  },
  louisville: {
    cityName: 'Louisville',
    stateSlug: 'colorado',
    stateName: 'Colorado',
    stateAbbr: 'CO',
    nearbyMajorCities: [
      { city: 'Boulder',    slug: 'boulder'    },
      { city: 'Broomfield', slug: 'broomfield' },
      { city: 'Arvada',     slug: 'arvada'     },
    ],
    otherStateCities: [
      { city: 'Denver',      slug: 'denver'      },
      { city: 'Fort Collins',slug: 'fort-collins'},
    ],
    contextualSentence: 'Not in Louisville? We serve all of Boulder County — Boulder, Broomfield, Denver, Fort Collins, and every northern Front Range community.',
  },
  'fort-collins': {
    cityName: 'Fort Collins',
    stateSlug: 'colorado',
    stateName: 'Colorado',
    stateAbbr: 'CO',
    nearbyMajorCities: [
      { city: 'Boulder',    slug: 'boulder'    },
      { city: 'Broomfield', slug: 'broomfield' },
      { city: 'Arvada',     slug: 'arvada'     },
    ],
    otherStateCities: [
      { city: 'Denver',  slug: 'denver'  },
      { city: 'Boulder', slug: 'boulder' },
    ],
    contextualSentence: 'Not in Fort Collins? We serve all of Colorado — Boulder, Denver, Broomfield, and every northern Front Range community.',
  },
  arvada: {
    cityName: 'Arvada',
    stateSlug: 'colorado',
    stateName: 'Colorado',
    stateAbbr: 'CO',
    nearbyMajorCities: [
      { city: 'Denver',    slug: 'denver'    },
      { city: 'Lakewood',  slug: 'lakewood'  },
      { city: 'Broomfield',slug: 'broomfield'},
      { city: 'Boulder',   slug: 'boulder'   },
    ],
    otherStateCities: [
      { city: 'Fort Collins',    slug: 'fort-collins'    },
      { city: 'Colorado Springs',slug: 'colorado-springs'},
    ],
    contextualSentence: 'Not in Arvada? We serve all of Colorado — Denver, Lakewood, Boulder, Broomfield, and every northwest Denver community.',
  },
  'colorado-springs': {
    cityName: 'Colorado Springs',
    stateSlug: 'colorado',
    stateName: 'Colorado',
    stateAbbr: 'CO',
    nearbyMajorCities: [
      { city: 'Castle Rock', slug: 'castle-rock' },
      { city: 'Lone Tree',   slug: 'lone-tree'   },
      { city: 'Parker',      slug: 'parker'      },
    ],
    otherStateCities: [
      { city: 'Denver',  slug: 'denver'  },
      { city: 'Boulder', slug: 'boulder' },
    ],
    contextualSentence: 'Not in Colorado Springs? We serve all of Colorado — Castle Rock, Denver, Boulder, and every Front Range and mountain community.',
  },
  parker: {
    cityName: 'Parker',
    stateSlug: 'colorado',
    stateName: 'Colorado',
    stateAbbr: 'CO',
    nearbyMajorCities: [
      { city: 'Highlands Ranch', slug: 'highlands-ranch' },
      { city: 'Centennial',      slug: 'centennial'      },
      { city: 'Castle Rock',     slug: 'castle-rock'     },
      { city: 'Lone Tree',       slug: 'lone-tree'       },
    ],
    otherStateCities: [
      { city: 'Denver',          slug: 'denver'          },
      { city: 'Colorado Springs',slug: 'colorado-springs'},
    ],
    contextualSentence: 'Not in Parker? We serve all of Douglas County — Highlands Ranch, Centennial, Castle Rock, Lone Tree, and the full Front Range.',
  },
  'castle-rock': {
    cityName: 'Castle Rock',
    stateSlug: 'colorado',
    stateName: 'Colorado',
    stateAbbr: 'CO',
    nearbyMajorCities: [
      { city: 'Parker',          slug: 'parker'          },
      { city: 'Lone Tree',       slug: 'lone-tree'       },
      { city: 'Highlands Ranch', slug: 'highlands-ranch' },
      { city: 'Colorado Springs',slug: 'colorado-springs'},
    ],
    otherStateCities: [
      { city: 'Denver',  slug: 'denver'  },
      { city: 'Boulder', slug: 'boulder' },
    ],
    contextualSentence: 'Not in Castle Rock? We serve all of Douglas County — Parker, Lone Tree, Highlands Ranch, Colorado Springs, and the full I-25 corridor.',
  },
  'lone-tree': {
    cityName: 'Lone Tree',
    stateSlug: 'colorado',
    stateName: 'Colorado',
    stateAbbr: 'CO',
    nearbyMajorCities: [
      { city: 'Greenwood Village', slug: 'greenwood-village' },
      { city: 'Centennial',        slug: 'centennial'        },
      { city: 'Parker',            slug: 'parker'            },
      { city: 'Highlands Ranch',   slug: 'highlands-ranch'   },
    ],
    otherStateCities: [
      { city: 'Denver',          slug: 'denver'          },
      { city: 'Colorado Springs',slug: 'colorado-springs'},
    ],
    contextualSentence: 'Not in Lone Tree? We serve all of south Denver — Greenwood Village, Centennial, Highlands Ranch, Parker, and the full RidgeGate corridor.',
  },
  lakewood: {
    cityName: 'Lakewood',
    stateSlug: 'colorado',
    stateName: 'Colorado',
    stateAbbr: 'CO',
    nearbyMajorCities: [
      { city: 'Denver',    slug: 'denver'    },
      { city: 'Arvada',    slug: 'arvada'    },
      { city: 'Broomfield',slug: 'broomfield'},
    ],
    otherStateCities: [
      { city: 'Boulder',         slug: 'boulder'         },
      { city: 'Colorado Springs',slug: 'colorado-springs'},
    ],
    contextualSentence: 'Not in Lakewood? We serve all of Colorado — Denver, Arvada, Boulder, and every Jefferson County community.',
  },
  aspen: {
    cityName: 'Aspen',
    stateSlug: 'colorado',
    stateName: 'Colorado',
    stateAbbr: 'CO',
    nearbyMajorCities: [
      { city: 'Vail',              slug: 'vail'              },
      { city: 'Breckenridge',      slug: 'breckenridge'      },
      { city: 'Steamboat Springs', slug: 'steamboat-springs' },
    ],
    otherStateCities: [
      { city: 'Denver',  slug: 'denver'  },
      { city: 'Boulder', slug: 'boulder' },
    ],
    contextualSentence: 'Not in Aspen? We serve all of Colorado\'s mountain destinations — Vail, Breckenridge, Steamboat Springs, Telluride, and the full ski country.',
  },
  vail: {
    cityName: 'Vail',
    stateSlug: 'colorado',
    stateName: 'Colorado',
    stateAbbr: 'CO',
    nearbyMajorCities: [
      { city: 'Aspen',             slug: 'aspen'             },
      { city: 'Breckenridge',      slug: 'breckenridge'      },
      { city: 'Steamboat Springs', slug: 'steamboat-springs' },
    ],
    otherStateCities: [
      { city: 'Denver',  slug: 'denver'  },
      { city: 'Boulder', slug: 'boulder' },
    ],
    contextualSentence: 'Not in Vail? We serve all Colorado mountain destinations — Aspen, Breckenridge, Steamboat Springs, Telluride, and every ski resort community.',
  },
  breckenridge: {
    cityName: 'Breckenridge',
    stateSlug: 'colorado',
    stateName: 'Colorado',
    stateAbbr: 'CO',
    nearbyMajorCities: [
      { city: 'Vail',  slug: 'vail'  },
      { city: 'Aspen', slug: 'aspen' },
      { city: 'Denver',slug: 'denver'},
    ],
    otherStateCities: [
      { city: 'Steamboat Springs', slug: 'steamboat-springs' },
      { city: 'Telluride',         slug: 'telluride'         },
    ],
    contextualSentence: 'Not in Breckenridge? We serve all of Summit County and Colorado\'s mountain destinations — Vail, Aspen, Steamboat Springs, and Telluride.',
  },
  'steamboat-springs': {
    cityName: 'Steamboat Springs',
    stateSlug: 'colorado',
    stateName: 'Colorado',
    stateAbbr: 'CO',
    nearbyMajorCities: [
      { city: 'Vail',          slug: 'vail'          },
      { city: 'Aspen',         slug: 'aspen'         },
      { city: 'Breckenridge',  slug: 'breckenridge'  },
    ],
    otherStateCities: [
      { city: 'Denver',    slug: 'denver'    },
      { city: 'Telluride', slug: 'telluride' },
    ],
    contextualSentence: 'Not in Steamboat Springs? We serve all Colorado ski destinations — Vail, Aspen, Breckenridge, Telluride, and the full Yampa Valley.',
  },
  telluride: {
    cityName: 'Telluride',
    stateSlug: 'colorado',
    stateName: 'Colorado',
    stateAbbr: 'CO',
    nearbyMajorCities: [
      { city: 'Aspen',             slug: 'aspen'             },
      { city: 'Steamboat Springs', slug: 'steamboat-springs' },
      { city: 'Vail',              slug: 'vail'              },
    ],
    otherStateCities: [
      { city: 'Denver',       slug: 'denver'       },
      { city: 'Breckenridge', slug: 'breckenridge' },
    ],
    contextualSentence: 'Not in Telluride? We serve all of Colorado\'s mountain destinations — Aspen, Vail, Breckenridge, Steamboat Springs, and every Colorado resort community.',
  },

  // ── Tennessee ──────────────────────────────────────────────────────────────
  nashville: {
    cityName: 'Nashville',
    stateSlug: 'tennessee',
    stateName: 'Tennessee',
    stateAbbr: 'TN',
    nearbyMajorCities: [
      { city: 'Franklin',     slug: 'franklin'     },
      { city: 'Murfreesboro', slug: 'murfreesboro' },
      { city: 'Brentwood',    slug: 'brentwood'    },
      { city: 'Hendersonville', slug: 'hendersonville' },
    ],
    otherStateCities: [
      { city: 'Memphis',      slug: 'memphis'      },
      { city: 'Knoxville',    slug: 'knoxville'    },
      { city: 'Chattanooga',  slug: 'chattanooga'  },
    ],
    contextualSentence: 'Not in Nashville? We serve all of Tennessee — including Franklin, Memphis, Knoxville, Chattanooga, and surrounding Middle Tennessee.',
  },

  // ── Nevada ─────────────────────────────────────────────────────────────────
  'las-vegas': {
    cityName: 'Las Vegas',
    stateSlug: 'nevada',
    stateName: 'Nevada',
    stateAbbr: 'NV',
    nearbyMajorCities: [
      { city: 'Henderson',      slug: 'henderson'      },
      { city: 'North Las Vegas', slug: 'north-las-vegas' },
      { city: 'Summerlin',      slug: 'summerlin'      },
      { city: 'Boulder City',   slug: 'boulder-city'   },
    ],
    otherStateCities: [
      { city: 'Reno',        slug: 'reno'        },
      { city: 'Sparks',      slug: 'sparks'      },
      { city: 'Carson City', slug: 'carson-city' },
    ],
    contextualSentence: 'Not in Las Vegas? We serve all of Nevada — including Henderson, Reno, North Las Vegas, Sparks, and Carson City.',
  },

  // ── New Jersey ─────────────────────────────────────────────────────────────
  'jersey-city': {
    cityName: 'Jersey City',
    stateSlug: 'new-jersey',
    stateName: 'New Jersey',
    stateAbbr: 'NJ',
    nearbyMajorCities: [
      { city: 'Hoboken',     slug: 'hoboken'     },
      { city: 'Newark',      slug: 'newark'      },
      { city: 'Bayonne',     slug: 'bayonne'     },
      { city: 'Fort Lee',    slug: 'fort-lee'    },
    ],
    otherStateCities: [
      { city: 'Morristown', slug: 'morristown' },
      { city: 'Montclair',  slug: 'montclair'  },
      { city: 'Princeton',  slug: 'princeton'  },
    ],
    contextualSentence: 'Not in Jersey City? We serve all of New Jersey — Hoboken, Montclair, Morristown, Princeton, Cherry Hill, and the entire Garden State.',
  },

  hoboken: {
    cityName: 'Hoboken',
    stateSlug: 'new-jersey',
    stateName: 'New Jersey',
    stateAbbr: 'NJ',
    nearbyMajorCities: [
      { city: 'Jersey City', slug: 'jersey-city' },
      { city: 'Fort Lee',    slug: 'fort-lee'    },
      { city: 'Weehawken',   slug: 'weehawken'   },
      { city: 'Edgewater',   slug: 'edgewater'   },
    ],
    otherStateCities: [
      { city: 'Montclair',  slug: 'montclair'  },
      { city: 'Morristown', slug: 'morristown' },
      { city: 'Red Bank',   slug: 'red-bank'   },
    ],
    contextualSentence: 'Not in Hoboken? We serve all of New Jersey — Jersey City, Montclair, Morristown, Red Bank, Asbury Park, and the entire Garden State.',
  },

  princeton: {
    cityName: 'Princeton',
    stateSlug: 'new-jersey',
    stateName: 'New Jersey',
    stateAbbr: 'NJ',
    nearbyMajorCities: [
      { city: 'New Brunswick', slug: 'new-brunswick' },
      { city: 'Trenton',       slug: 'trenton'       },
      { city: 'Lawrenceville', slug: 'lawrenceville' },
      { city: 'Plainsboro',    slug: 'plainsboro'    },
    ],
    otherStateCities: [
      { city: 'Cherry Hill',  slug: 'cherry-hill'  },
      { city: 'Edison',       slug: 'edison'       },
      { city: 'Morristown',   slug: 'morristown'   },
    ],
    contextualSentence: 'Not in Princeton? We serve all of Central New Jersey — Cherry Hill, Edison, New Brunswick, Morristown, and the full Garden State.',
  },

  'cherry-hill': {
    cityName: 'Cherry Hill',
    stateSlug: 'new-jersey',
    stateName: 'New Jersey',
    stateAbbr: 'NJ',
    nearbyMajorCities: [
      { city: 'Haddonfield',  slug: 'haddonfield'  },
      { city: 'Moorestown',   slug: 'moorestown'   },
      { city: 'Mount Laurel', slug: 'mount-laurel' },
      { city: 'Marlton',      slug: 'marlton'      },
    ],
    otherStateCities: [
      { city: 'Princeton',    slug: 'princeton'    },
      { city: 'Cape May',     slug: 'cape-may'     },
      { city: 'Ocean City',   slug: 'ocean-city'   },
    ],
    contextualSentence: 'Not in Cherry Hill? We serve all of South Jersey — Haddonfield, Moorestown, Cape May, Ocean City, Princeton, and beyond.',
  },

  edison: {
    cityName: 'Edison',
    stateSlug: 'new-jersey',
    stateName: 'New Jersey',
    stateAbbr: 'NJ',
    nearbyMajorCities: [
      { city: 'New Brunswick', slug: 'new-brunswick' },
      { city: 'Woodbridge',    slug: 'woodbridge'    },
      { city: 'Piscataway',    slug: 'piscataway'    },
      { city: 'Metuchen',      slug: 'metuchen'      },
    ],
    otherStateCities: [
      { city: 'Princeton',    slug: 'princeton'    },
      { city: 'Bridgewater',  slug: 'bridgewater'  },
      { city: 'Morristown',   slug: 'morristown'   },
    ],
    contextualSentence: 'Not in Edison? We serve all of Central New Jersey — New Brunswick, Princeton, Bridgewater, Morristown, and the full Garden State.',
  },

  morristown: {
    cityName: 'Morristown',
    stateSlug: 'new-jersey',
    stateName: 'New Jersey',
    stateAbbr: 'NJ',
    nearbyMajorCities: [
      { city: 'Summit',    slug: 'summit'    },
      { city: 'Chatham',   slug: 'chatham'   },
      { city: 'Madison',   slug: 'madison'   },
      { city: 'Parsippany', slug: 'parsippany' },
    ],
    otherStateCities: [
      { city: 'Montclair',   slug: 'montclair'   },
      { city: 'Jersey City', slug: 'jersey-city' },
      { city: 'Red Bank',    slug: 'red-bank'    },
    ],
    contextualSentence: 'Not in Morristown? We serve all of Morris County and greater New Jersey — Summit, Chatham, Montclair, Jersey City, and the full Garden State.',
  },

  montclair: {
    cityName: 'Montclair',
    stateSlug: 'new-jersey',
    stateName: 'New Jersey',
    stateAbbr: 'NJ',
    nearbyMajorCities: [
      { city: 'Bloomfield',   slug: 'bloomfield'   },
      { city: 'Glen Ridge',   slug: 'glen-ridge'   },
      { city: 'Verona',       slug: 'verona'       },
      { city: 'West Orange',  slug: 'west-orange'  },
    ],
    otherStateCities: [
      { city: 'Morristown',  slug: 'morristown'  },
      { city: 'Jersey City', slug: 'jersey-city' },
      { city: 'Hoboken',     slug: 'hoboken'     },
    ],
    contextualSentence: 'Not in Montclair? We serve all of Essex County and greater New Jersey — Morristown, Hoboken, Jersey City, and the full Garden State.',
  },

  'asbury-park': {
    cityName: 'Asbury Park',
    stateSlug: 'new-jersey',
    stateName: 'New Jersey',
    stateAbbr: 'NJ',
    nearbyMajorCities: [
      { city: 'Long Branch',     slug: 'long-branch'     },
      { city: 'Red Bank',        slug: 'red-bank'        },
      { city: 'Belmar',          slug: 'belmar'          },
      { city: 'Ocean Grove',     slug: 'ocean-grove'     },
    ],
    otherStateCities: [
      { city: 'Point Pleasant', slug: 'point-pleasant' },
      { city: 'Cape May',       slug: 'cape-may'       },
      { city: 'Ocean City',     slug: 'ocean-city'     },
    ],
    contextualSentence: 'Not in Asbury Park? We serve the full Jersey Shore — Long Branch, Red Bank, Belmar, Point Pleasant, Cape May, and all Shore communities.',
  },

  'cape-may': {
    cityName: 'Cape May',
    stateSlug: 'new-jersey',
    stateName: 'New Jersey',
    stateAbbr: 'NJ',
    nearbyMajorCities: [
      { city: 'Stone Harbor',   slug: 'stone-harbor'   },
      { city: 'Avalon',         slug: 'avalon'         },
      { city: 'Wildwood',       slug: 'wildwood'       },
      { city: 'Sea Isle City',  slug: 'sea-isle-city'  },
    ],
    otherStateCities: [
      { city: 'Ocean City',   slug: 'ocean-city'   },
      { city: 'Cherry Hill',  slug: 'cherry-hill'  },
      { city: 'Asbury Park',  slug: 'asbury-park'  },
    ],
    contextualSentence: 'Not in Cape May? We serve all of South Jersey Shore — Stone Harbor, Avalon, Wildwood, Sea Isle City, Ocean City, and Cherry Hill.',
  },

  'red-bank': {
    cityName: 'Red Bank',
    stateSlug: 'new-jersey',
    stateName: 'New Jersey',
    stateAbbr: 'NJ',
    nearbyMajorCities: [
      { city: 'Rumson',         slug: 'rumson'         },
      { city: 'Little Silver',  slug: 'little-silver'  },
      { city: 'Middletown',     slug: 'middletown'     },
      { city: 'Fair Haven',     slug: 'fair-haven'     },
    ],
    otherStateCities: [
      { city: 'Asbury Park',  slug: 'asbury-park'  },
      { city: 'Morristown',   slug: 'morristown'   },
      { city: 'Princeton',    slug: 'princeton'    },
    ],
    contextualSentence: 'Not in Red Bank? We serve all of Monmouth County and greater New Jersey — Asbury Park, Long Branch, Middletown, Morristown, and the full Garden State.',
  },

  // ── OHIO ─────────────────────────────────────────────────────────────────────
  'dublin': {
    cityName: 'Dublin', stateSlug: 'ohio', stateName: 'Ohio', stateAbbr: 'OH',
    nearbyMajorCities: [{ city: 'Columbus', slug: 'columbus' }, { city: 'New Albany', slug: 'new-albany' }, { city: 'Upper Arlington', slug: 'upper-arlington' }, { city: 'Powell', slug: 'powell' }],
    otherStateCities: [{ city: 'Cleveland', slug: 'cleveland' }, { city: 'Cincinnati', slug: 'cincinnati' }],
    contextualSentence: 'Not in Dublin? We serve all of the Columbus metro — New Albany, Upper Arlington, Powell, and the full central Ohio region.',
  },
  'new-albany': {
    cityName: 'New Albany', stateSlug: 'ohio', stateName: 'Ohio', stateAbbr: 'OH',
    nearbyMajorCities: [{ city: 'Columbus', slug: 'columbus' }, { city: 'Dublin', slug: 'dublin' }, { city: 'Upper Arlington', slug: 'upper-arlington' }, { city: 'Powell', slug: 'powell' }],
    otherStateCities: [{ city: 'Cleveland', slug: 'cleveland' }, { city: 'Cincinnati', slug: 'cincinnati' }],
    contextualSentence: 'Not in New Albany? We serve all of central Ohio — Dublin, Upper Arlington, Powell, Columbus, and the surrounding communities.',
  },
  'upper-arlington': {
    cityName: 'Upper Arlington', stateSlug: 'ohio', stateName: 'Ohio', stateAbbr: 'OH',
    nearbyMajorCities: [{ city: 'Columbus', slug: 'columbus' }, { city: 'Dublin', slug: 'dublin' }, { city: 'New Albany', slug: 'new-albany' }, { city: 'Powell', slug: 'powell' }],
    otherStateCities: [{ city: 'Cleveland', slug: 'cleveland' }, { city: 'Cincinnati', slug: 'cincinnati' }],
    contextualSentence: 'Not in Upper Arlington? We serve all of the Columbus luxury corridor — Dublin, New Albany, Powell, and the greater Columbus metro.',
  },
  'columbus': {
    cityName: 'Columbus', stateSlug: 'ohio', stateName: 'Ohio', stateAbbr: 'OH',
    nearbyMajorCities: [{ city: 'Dublin', slug: 'dublin' }, { city: 'Upper Arlington', slug: 'upper-arlington' }, { city: 'New Albany', slug: 'new-albany' }, { city: 'Powell', slug: 'powell' }],
    otherStateCities: [{ city: 'Cleveland', slug: 'cleveland' }, { city: 'Cincinnati', slug: 'cincinnati' }, { city: 'Dayton', slug: 'dayton' }],
    contextualSentence: 'Not in Columbus proper? We serve all of the Columbus metro — Dublin, Upper Arlington, New Albany, Powell, and every surrounding neighborhood.',
  },
  'powell': {
    cityName: 'Powell', stateSlug: 'ohio', stateName: 'Ohio', stateAbbr: 'OH',
    nearbyMajorCities: [{ city: 'Dublin', slug: 'dublin' }, { city: 'Columbus', slug: 'columbus' }, { city: 'Upper Arlington', slug: 'upper-arlington' }, { city: 'New Albany', slug: 'new-albany' }],
    otherStateCities: [{ city: 'Cleveland', slug: 'cleveland' }, { city: 'Cincinnati', slug: 'cincinnati' }],
    contextualSentence: 'Not in Powell? We serve all of Delaware County and the Olentangy corridor — Dublin, Columbus, Upper Arlington, and the full central Ohio area.',
  },
  'beachwood': {
    cityName: 'Beachwood', stateSlug: 'ohio', stateName: 'Ohio', stateAbbr: 'OH',
    nearbyMajorCities: [{ city: 'Cleveland', slug: 'cleveland' }, { city: 'Solon', slug: 'solon' }, { city: 'Hudson', slug: 'hudson' }, { city: 'Westlake', slug: 'westlake' }],
    otherStateCities: [{ city: 'Columbus', slug: 'columbus' }, { city: 'Cincinnati', slug: 'cincinnati' }],
    contextualSentence: 'Not in Beachwood? We serve all of the Cleveland East Side — Solon, Hudson, Westlake, and the greater Northeast Ohio luxury market.',
  },
  'hudson': {
    cityName: 'Hudson', stateSlug: 'ohio', stateName: 'Ohio', stateAbbr: 'OH',
    nearbyMajorCities: [{ city: 'Beachwood', slug: 'beachwood' }, { city: 'Solon', slug: 'solon' }, { city: 'Cleveland', slug: 'cleveland' }, { city: 'Westlake', slug: 'westlake' }],
    otherStateCities: [{ city: 'Columbus', slug: 'columbus' }, { city: 'Cincinnati', slug: 'cincinnati' }],
    contextualSentence: 'Not in Hudson? We serve all of Summit and Portage Counties — Beachwood, Solon, and the greater Cleveland East Side.',
  },
  'solon': {
    cityName: 'Solon', stateSlug: 'ohio', stateName: 'Ohio', stateAbbr: 'OH',
    nearbyMajorCities: [{ city: 'Beachwood', slug: 'beachwood' }, { city: 'Hudson', slug: 'hudson' }, { city: 'Cleveland', slug: 'cleveland' }, { city: 'Westlake', slug: 'westlake' }],
    otherStateCities: [{ city: 'Columbus', slug: 'columbus' }, { city: 'Cincinnati', slug: 'cincinnati' }],
    contextualSentence: 'Not in Solon? We serve all of the Cleveland East Side — Beachwood, Hudson, Westlake, and the greater Northeast Ohio region.',
  },
  'cleveland': {
    cityName: 'Cleveland', stateSlug: 'ohio', stateName: 'Ohio', stateAbbr: 'OH',
    nearbyMajorCities: [{ city: 'Beachwood', slug: 'beachwood' }, { city: 'Westlake', slug: 'westlake' }, { city: 'Solon', slug: 'solon' }, { city: 'Avon Lake', slug: 'avon-lake' }],
    otherStateCities: [{ city: 'Columbus', slug: 'columbus' }, { city: 'Cincinnati', slug: 'cincinnati' }, { city: 'Dayton', slug: 'dayton' }],
    contextualSentence: 'Not in Cleveland proper? We serve all of Northeast Ohio — Beachwood, Westlake, Avon Lake, Solon, Hudson, and the full Cleveland metro.',
  },
  'westlake': {
    cityName: 'Westlake', stateSlug: 'ohio', stateName: 'Ohio', stateAbbr: 'OH',
    nearbyMajorCities: [{ city: 'Cleveland', slug: 'cleveland' }, { city: 'Avon Lake', slug: 'avon-lake' }, { city: 'Beachwood', slug: 'beachwood' }, { city: 'Solon', slug: 'solon' }],
    otherStateCities: [{ city: 'Columbus', slug: 'columbus' }, { city: 'Cincinnati', slug: 'cincinnati' }],
    contextualSentence: 'Not in Westlake? We serve all of the Cleveland West Side — Avon Lake, North Olmsted, Rocky River, and the greater Cleveland metro.',
  },
  'cincinnati': {
    cityName: 'Cincinnati', stateSlug: 'ohio', stateName: 'Ohio', stateAbbr: 'OH',
    nearbyMajorCities: [{ city: 'Mason', slug: 'mason' }, { city: 'Indian Hill', slug: 'indian-hill' }, { city: 'Dayton', slug: 'dayton' }, { city: 'Centerville', slug: 'centerville' }],
    otherStateCities: [{ city: 'Columbus', slug: 'columbus' }, { city: 'Cleveland', slug: 'cleveland' }],
    contextualSentence: 'Not in Cincinnati? We serve all of Southwest Ohio — Mason, Indian Hill, Dayton, Centerville, and the full Cincinnati metro.',
  },
  'mason': {
    cityName: 'Mason', stateSlug: 'ohio', stateName: 'Ohio', stateAbbr: 'OH',
    nearbyMajorCities: [{ city: 'Cincinnati', slug: 'cincinnati' }, { city: 'Indian Hill', slug: 'indian-hill' }, { city: 'Centerville', slug: 'centerville' }, { city: 'Dayton', slug: 'dayton' }],
    otherStateCities: [{ city: 'Columbus', slug: 'columbus' }, { city: 'Cleveland', slug: 'cleveland' }],
    contextualSentence: 'Not in Mason? We serve all of Warren County and Southwest Ohio — Cincinnati, Indian Hill, Centerville, Dayton, and surrounding communities.',
  },
  'indian-hill': {
    cityName: 'Indian Hill', stateSlug: 'ohio', stateName: 'Ohio', stateAbbr: 'OH',
    nearbyMajorCities: [{ city: 'Cincinnati', slug: 'cincinnati' }, { city: 'Mason', slug: 'mason' }, { city: 'Centerville', slug: 'centerville' }, { city: 'Dayton', slug: 'dayton' }],
    otherStateCities: [{ city: 'Columbus', slug: 'columbus' }, { city: 'Cleveland', slug: 'cleveland' }],
    contextualSentence: 'Not in Indian Hill? We serve all of greater Cincinnati — Hyde Park, Mount Lookout, Mason, and the full Southwest Ohio region.',
  },
  'dayton': {
    cityName: 'Dayton', stateSlug: 'ohio', stateName: 'Ohio', stateAbbr: 'OH',
    nearbyMajorCities: [{ city: 'Centerville', slug: 'centerville' }, { city: 'Cincinnati', slug: 'cincinnati' }, { city: 'Mason', slug: 'mason' }, { city: 'Indian Hill', slug: 'indian-hill' }],
    otherStateCities: [{ city: 'Columbus', slug: 'columbus' }, { city: 'Cleveland', slug: 'cleveland' }],
    contextualSentence: 'Not in Dayton? We serve all of Southwest Ohio — Centerville, Beavercreek, Cincinnati, Mason, and the full Miami Valley region.',
  },
  'centerville': {
    cityName: 'Centerville', stateSlug: 'ohio', stateName: 'Ohio', stateAbbr: 'OH',
    nearbyMajorCities: [{ city: 'Dayton', slug: 'dayton' }, { city: 'Cincinnati', slug: 'cincinnati' }, { city: 'Mason', slug: 'mason' }, { city: 'Indian Hill', slug: 'indian-hill' }],
    otherStateCities: [{ city: 'Columbus', slug: 'columbus' }, { city: 'Cleveland', slug: 'cleveland' }],
    contextualSentence: 'Not in Centerville? We serve all of the Dayton metro — Beavercreek, Kettering, Miamisburg, Cincinnati, and the full Southwest Ohio corridor.',
  },
  'sandusky': {
    cityName: 'Sandusky', stateSlug: 'ohio', stateName: 'Ohio', stateAbbr: 'OH',
    nearbyMajorCities: [{ city: 'Port Clinton', slug: 'port-clinton' }, { city: 'Avon Lake', slug: 'avon-lake' }, { city: 'Cleveland', slug: 'cleveland' }, { city: 'Westlake', slug: 'westlake' }],
    otherStateCities: [{ city: 'Columbus', slug: 'columbus' }, { city: 'Cincinnati', slug: 'cincinnati' }],
    contextualSentence: 'Not in Sandusky? We serve the full Lake Erie corridor — Port Clinton, Avon Lake, Kelleys Island area, Put-in-Bay, and the Cedar Point region.',
  },
  'avon-lake': {
    cityName: 'Avon Lake', stateSlug: 'ohio', stateName: 'Ohio', stateAbbr: 'OH',
    nearbyMajorCities: [{ city: 'Westlake', slug: 'westlake' }, { city: 'Cleveland', slug: 'cleveland' }, { city: 'Sandusky', slug: 'sandusky' }, { city: 'Port Clinton', slug: 'port-clinton' }],
    otherStateCities: [{ city: 'Columbus', slug: 'columbus' }, { city: 'Cincinnati', slug: 'cincinnati' }],
    contextualSentence: 'Not in Avon Lake? We serve the full Lake Erie shoreline — Westlake, Cleveland, Sandusky, and the North Olmsted corridor.',
  },
  'port-clinton': {
    cityName: 'Port Clinton', stateSlug: 'ohio', stateName: 'Ohio', stateAbbr: 'OH',
    nearbyMajorCities: [{ city: 'Sandusky', slug: 'sandusky' }, { city: 'Avon Lake', slug: 'avon-lake' }, { city: 'Westlake', slug: 'westlake' }, { city: 'Cleveland', slug: 'cleveland' }],
    otherStateCities: [{ city: 'Columbus', slug: 'columbus' }, { city: 'Cincinnati', slug: 'cincinnati' }],
    contextualSentence: 'Not in Port Clinton? We serve the full Lake Erie Islands area — Put-in-Bay, Kelleys Island, Marblehead, Sandusky, and surrounding Ottawa County communities.',
  },
  'athens': {
    cityName: 'Athens', stateSlug: 'ohio', stateName: 'Ohio', stateAbbr: 'OH',
    nearbyMajorCities: [{ city: 'Columbus', slug: 'columbus' }, { city: 'Oxford', slug: 'oxford' }],
    otherStateCities: [{ city: 'Cleveland', slug: 'cleveland' }, { city: 'Cincinnati', slug: 'cincinnati' }],
    contextualSentence: 'Not in Athens? We serve all of Southeast Ohio and the Ohio University corridor — Columbus, Oxford, and the surrounding region.',
  },
  'oxford': {
    cityName: 'Oxford', stateSlug: 'ohio', stateName: 'Ohio', stateAbbr: 'OH',
    nearbyMajorCities: [{ city: 'Cincinnati', slug: 'cincinnati' }, { city: 'Dayton', slug: 'dayton' }, { city: 'Athens', slug: 'athens' }, { city: 'Mason', slug: 'mason' }],
    otherStateCities: [{ city: 'Columbus', slug: 'columbus' }, { city: 'Cleveland', slug: 'cleveland' }],
    contextualSentence: 'Not in Oxford? We serve all of Southwest Ohio — Cincinnati, Dayton, Mason, and the full Miami University corridor.',
  },

  // ── Pennsylvania ─────────────────────────────────────────────────────────────
  'philadelphia': {
    cityName: 'Philadelphia', stateSlug: 'pennsylvania', stateName: 'Pennsylvania', stateAbbr: 'PA',
    nearbyMajorCities: [{ city: 'Wayne', slug: 'wayne' }, { city: 'King of Prussia', slug: 'king-of-prussia' }, { city: 'Bryn Mawr', slug: 'bryn-mawr' }, { city: 'Newtown Square', slug: 'newtown-square' }, { city: 'West Chester', slug: 'west-chester' }],
    otherStateCities: [{ city: 'Pittsburgh', slug: 'pittsburgh' }, { city: 'Lancaster', slug: 'lancaster' }],
    contextualSentence: 'Not in Philadelphia? We serve all of Greater Philadelphia — every neighborhood, all Main Line communities, and surrounding suburbs throughout Chester, Delaware, and Montgomery Counties.',
  },
  'wayne': {
    cityName: 'Wayne', stateSlug: 'pennsylvania', stateName: 'Pennsylvania', stateAbbr: 'PA',
    nearbyMajorCities: [{ city: 'Bryn Mawr', slug: 'bryn-mawr' }, { city: 'Philadelphia', slug: 'philadelphia' }, { city: 'King of Prussia', slug: 'king-of-prussia' }, { city: 'Malvern', slug: 'malvern' }, { city: 'Newtown Square', slug: 'newtown-square' }],
    otherStateCities: [{ city: 'Pittsburgh', slug: 'pittsburgh' }, { city: 'Lancaster', slug: 'lancaster' }],
    contextualSentence: 'Not in Wayne? We serve the full Main Line — Bryn Mawr, Malvern, Newtown Square, and all Chester and Delaware County communities throughout the region.',
  },
  'bryn-mawr': {
    cityName: 'Bryn Mawr', stateSlug: 'pennsylvania', stateName: 'Pennsylvania', stateAbbr: 'PA',
    nearbyMajorCities: [{ city: 'Wayne', slug: 'wayne' }, { city: 'Malvern', slug: 'malvern' }, { city: 'Philadelphia', slug: 'philadelphia' }, { city: 'Newtown Square', slug: 'newtown-square' }, { city: 'West Chester', slug: 'west-chester' }],
    otherStateCities: [{ city: 'Pittsburgh', slug: 'pittsburgh' }, { city: 'Lancaster', slug: 'lancaster' }],
    contextualSentence: 'Not in Bryn Mawr? We serve the full Main Line corridor — Wayne, Malvern, Newtown Square, and all surrounding Chester and Delaware County communities.',
  },
  'king-of-prussia': {
    cityName: 'King of Prussia', stateSlug: 'pennsylvania', stateName: 'Pennsylvania', stateAbbr: 'PA',
    nearbyMajorCities: [{ city: 'Philadelphia', slug: 'philadelphia' }, { city: 'Wayne', slug: 'wayne' }, { city: 'Malvern', slug: 'malvern' }, { city: 'Blue Bell', slug: 'blue-bell' }, { city: 'West Chester', slug: 'west-chester' }],
    otherStateCities: [{ city: 'Pittsburgh', slug: 'pittsburgh' }, { city: 'Lancaster', slug: 'lancaster' }],
    contextualSentence: 'Not in King of Prussia? We serve the full Valley Forge and Route 202 corridor — Philadelphia, Wayne, Blue Bell, and surrounding Montgomery and Chester County communities.',
  },
  'newtown-square': {
    cityName: 'Newtown Square', stateSlug: 'pennsylvania', stateName: 'Pennsylvania', stateAbbr: 'PA',
    nearbyMajorCities: [{ city: 'Wayne', slug: 'wayne' }, { city: 'Bryn Mawr', slug: 'bryn-mawr' }, { city: 'Media', slug: 'media' }, { city: 'Philadelphia', slug: 'philadelphia' }, { city: 'West Chester', slug: 'west-chester' }],
    otherStateCities: [{ city: 'Pittsburgh', slug: 'pittsburgh' }, { city: 'Lancaster', slug: 'lancaster' }],
    contextualSentence: 'Not in Newtown Square? We serve all of Delaware County and the Main Line — Wayne, Bryn Mawr, Media, West Chester, and surrounding Chester and Delaware County communities.',
  },
  'west-chester': {
    cityName: 'West Chester', stateSlug: 'pennsylvania', stateName: 'Pennsylvania', stateAbbr: 'PA',
    nearbyMajorCities: [{ city: 'Malvern', slug: 'malvern' }, { city: 'Media', slug: 'media' }, { city: 'Philadelphia', slug: 'philadelphia' }, { city: 'Newtown Square', slug: 'newtown-square' }, { city: 'Wayne', slug: 'wayne' }],
    otherStateCities: [{ city: 'Pittsburgh', slug: 'pittsburgh' }, { city: 'Lancaster', slug: 'lancaster' }],
    contextualSentence: 'Not in West Chester? We serve all of Chester County — Malvern, Media, Newtown Square, Wayne, and surrounding communities throughout the Philadelphia suburbs.',
  },
  'malvern': {
    cityName: 'Malvern', stateSlug: 'pennsylvania', stateName: 'Pennsylvania', stateAbbr: 'PA',
    nearbyMajorCities: [{ city: 'Wayne', slug: 'wayne' }, { city: 'West Chester', slug: 'west-chester' }, { city: 'King of Prussia', slug: 'king-of-prussia' }, { city: 'Bryn Mawr', slug: 'bryn-mawr' }, { city: 'Blue Bell', slug: 'blue-bell' }],
    otherStateCities: [{ city: 'Pittsburgh', slug: 'pittsburgh' }, { city: 'Lancaster', slug: 'lancaster' }],
    contextualSentence: 'Not in Malvern? We serve the full Great Valley and Main Line corridor — Wayne, Bryn Mawr, King of Prussia, and all Chester County communities.',
  },
  'media': {
    cityName: 'Media', stateSlug: 'pennsylvania', stateName: 'Pennsylvania', stateAbbr: 'PA',
    nearbyMajorCities: [{ city: 'Philadelphia', slug: 'philadelphia' }, { city: 'West Chester', slug: 'west-chester' }, { city: 'Newtown Square', slug: 'newtown-square' }, { city: 'Blue Bell', slug: 'blue-bell' }, { city: 'Wayne', slug: 'wayne' }],
    otherStateCities: [{ city: 'Pittsburgh', slug: 'pittsburgh' }, { city: 'Lancaster', slug: 'lancaster' }],
    contextualSentence: 'Not in Media? We serve all of Delaware County — Philadelphia, West Chester, Newtown Square, and surrounding communities throughout the Philadelphia suburbs.',
  },
  'blue-bell': {
    cityName: 'Blue Bell', stateSlug: 'pennsylvania', stateName: 'Pennsylvania', stateAbbr: 'PA',
    nearbyMajorCities: [{ city: 'King of Prussia', slug: 'king-of-prussia' }, { city: 'Malvern', slug: 'malvern' }, { city: 'Media', slug: 'media' }, { city: 'West Chester', slug: 'west-chester' }, { city: 'Philadelphia', slug: 'philadelphia' }],
    otherStateCities: [{ city: 'Pittsburgh', slug: 'pittsburgh' }, { city: 'Lancaster', slug: 'lancaster' }],
    contextualSentence: 'Not in Blue Bell? We serve all of Montgomery County — King of Prussia, Malvern, Media, and surrounding Chester and Delaware County communities.',
  },
  'lancaster': {
    cityName: 'Lancaster', stateSlug: 'pennsylvania', stateName: 'Pennsylvania', stateAbbr: 'PA',
    nearbyMajorCities: [{ city: 'Hershey', slug: 'hershey' }, { city: 'Philadelphia', slug: 'philadelphia' }, { city: 'West Chester', slug: 'west-chester' }],
    otherStateCities: [{ city: 'Pittsburgh', slug: 'pittsburgh' }, { city: 'Philadelphia', slug: 'philadelphia' }],
    contextualSentence: 'Not in Lancaster? We serve all of Central Pennsylvania — Hershey, the Harrisburg area, and surrounding Lancaster County farm venue and destination communities.',
  },
  'pittsburgh': {
    cityName: 'Pittsburgh', stateSlug: 'pennsylvania', stateName: 'Pennsylvania', stateAbbr: 'PA',
    nearbyMajorCities: [{ city: 'Fox Chapel', slug: 'fox-chapel' }, { city: 'Sewickley', slug: 'sewickley' }, { city: 'Mt. Lebanon', slug: 'mt-lebanon' }, { city: 'Wexford', slug: 'wexford' }, { city: 'Cranberry Township', slug: 'cranberry-township' }],
    otherStateCities: [{ city: 'Philadelphia', slug: 'philadelphia' }, { city: 'Lancaster', slug: 'lancaster' }],
    contextualSentence: 'Not in Pittsburgh? We serve all of the Pittsburgh metro — Fox Chapel, Sewickley, Mt. Lebanon, Wexford, Cranberry Township, and all Allegheny County communities.',
  },
  'mt-lebanon': {
    cityName: 'Mt. Lebanon', stateSlug: 'pennsylvania', stateName: 'Pennsylvania', stateAbbr: 'PA',
    nearbyMajorCities: [{ city: 'Pittsburgh', slug: 'pittsburgh' }, { city: 'Sewickley', slug: 'sewickley' }, { city: 'Fox Chapel', slug: 'fox-chapel' }, { city: 'Wexford', slug: 'wexford' }, { city: 'Cranberry Township', slug: 'cranberry-township' }],
    otherStateCities: [{ city: 'Philadelphia', slug: 'philadelphia' }, { city: 'Lancaster', slug: 'lancaster' }],
    contextualSentence: 'Not in Mt. Lebanon? We serve the full Pittsburgh South Hills and metro area — Pittsburgh, Sewickley, Fox Chapel, and all Allegheny County communities.',
  },
  'wexford': {
    cityName: 'Wexford', stateSlug: 'pennsylvania', stateName: 'Pennsylvania', stateAbbr: 'PA',
    nearbyMajorCities: [{ city: 'Cranberry Township', slug: 'cranberry-township' }, { city: 'Pittsburgh', slug: 'pittsburgh' }, { city: 'Fox Chapel', slug: 'fox-chapel' }, { city: 'Mt. Lebanon', slug: 'mt-lebanon' }, { city: 'Sewickley', slug: 'sewickley' }],
    otherStateCities: [{ city: 'Philadelphia', slug: 'philadelphia' }, { city: 'Lancaster', slug: 'lancaster' }],
    contextualSentence: 'Not in Wexford? We serve all of Pittsburgh North Hills — Cranberry Township, Fox Chapel, Sewickley, Mt. Lebanon, and all Allegheny County communities.',
  },
  'cranberry-township': {
    cityName: 'Cranberry Township', stateSlug: 'pennsylvania', stateName: 'Pennsylvania', stateAbbr: 'PA',
    nearbyMajorCities: [{ city: 'Wexford', slug: 'wexford' }, { city: 'Pittsburgh', slug: 'pittsburgh' }, { city: 'Fox Chapel', slug: 'fox-chapel' }, { city: 'Mt. Lebanon', slug: 'mt-lebanon' }, { city: 'Sewickley', slug: 'sewickley' }],
    otherStateCities: [{ city: 'Philadelphia', slug: 'philadelphia' }, { city: 'Lancaster', slug: 'lancaster' }],
    contextualSentence: 'Not in Cranberry Township? We serve the full Pittsburgh North Hills and Route 228 corridor — Wexford, Fox Chapel, Pittsburgh, and all surrounding communities.',
  },
  'fox-chapel': {
    cityName: 'Fox Chapel', stateSlug: 'pennsylvania', stateName: 'Pennsylvania', stateAbbr: 'PA',
    nearbyMajorCities: [{ city: 'Pittsburgh', slug: 'pittsburgh' }, { city: 'Sewickley', slug: 'sewickley' }, { city: 'Wexford', slug: 'wexford' }, { city: 'Mt. Lebanon', slug: 'mt-lebanon' }, { city: 'Cranberry Township', slug: 'cranberry-township' }],
    otherStateCities: [{ city: 'Philadelphia', slug: 'philadelphia' }, { city: 'Lancaster', slug: 'lancaster' }],
    contextualSentence: 'Not in Fox Chapel? We serve all of the Pittsburgh metro and Allegheny River estate corridor — Pittsburgh, Sewickley, Wexford, and all surrounding communities.',
  },
  'sewickley': {
    cityName: 'Sewickley', stateSlug: 'pennsylvania', stateName: 'Pennsylvania', stateAbbr: 'PA',
    nearbyMajorCities: [{ city: 'Pittsburgh', slug: 'pittsburgh' }, { city: 'Fox Chapel', slug: 'fox-chapel' }, { city: 'Wexford', slug: 'wexford' }, { city: 'Mt. Lebanon', slug: 'mt-lebanon' }, { city: 'Cranberry Township', slug: 'cranberry-township' }],
    otherStateCities: [{ city: 'Philadelphia', slug: 'philadelphia' }, { city: 'Lancaster', slug: 'lancaster' }],
    contextualSentence: 'Not in Sewickley? We serve the full Ohio River waterfront and Pittsburgh metro — Fox Chapel, Wexford, Mt. Lebanon, Pittsburgh, and all Allegheny County communities.',
  },
  'stroudsburg': {
    cityName: 'Stroudsburg', stateSlug: 'pennsylvania', stateName: 'Pennsylvania', stateAbbr: 'PA',
    nearbyMajorCities: [{ city: 'Mount Pocono', slug: 'mount-pocono' }, { city: 'Hawley', slug: 'hawley' }],
    otherStateCities: [{ city: 'Philadelphia', slug: 'philadelphia' }, { city: 'Pittsburgh', slug: 'pittsburgh' }],
    contextualSentence: 'Not in Stroudsburg? We serve the full Pocono Mountains — Mount Pocono, Hawley, Lake Wallenpaupack, Delaware Water Gap, and all Monroe and Wayne County vacation rental properties.',
  },
  'mount-pocono': {
    cityName: 'Mount Pocono', stateSlug: 'pennsylvania', stateName: 'Pennsylvania', stateAbbr: 'PA',
    nearbyMajorCities: [{ city: 'Stroudsburg', slug: 'stroudsburg' }, { city: 'Hawley', slug: 'hawley' }],
    otherStateCities: [{ city: 'Philadelphia', slug: 'philadelphia' }, { city: 'Pittsburgh', slug: 'pittsburgh' }],
    contextualSentence: 'Not in Mount Pocono? We serve all of the Pocono Mountains — Stroudsburg, Hawley, Delaware Water Gap, Camelback area, and all vacation rental properties throughout Monroe and Wayne Counties.',
  },
  'hawley': {
    cityName: 'Hawley', stateSlug: 'pennsylvania', stateName: 'Pennsylvania', stateAbbr: 'PA',
    nearbyMajorCities: [{ city: 'Mount Pocono', slug: 'mount-pocono' }, { city: 'Stroudsburg', slug: 'stroudsburg' }],
    otherStateCities: [{ city: 'Philadelphia', slug: 'philadelphia' }, { city: 'Pittsburgh', slug: 'pittsburgh' }],
    contextualSentence: 'Not in Hawley? We serve all of Lake Wallenpaupack and the Pocono Mountains — Mount Pocono, Stroudsburg, and all Wayne and Monroe County cabin and lakefront properties.',
  },
  'hershey': {
    cityName: 'Hershey', stateSlug: 'pennsylvania', stateName: 'Pennsylvania', stateAbbr: 'PA',
    nearbyMajorCities: [{ city: 'Lancaster', slug: 'lancaster' }, { city: 'Philadelphia', slug: 'philadelphia' }],
    otherStateCities: [{ city: 'Pittsburgh', slug: 'pittsburgh' }, { city: 'Philadelphia', slug: 'philadelphia' }],
    contextualSentence: 'Not in Hershey? We serve all of Central Pennsylvania — Lancaster, the Harrisburg area, and surrounding Dauphin County resort and residential communities.',
  },

  // ── Wisconsin ─────────────────────────────────────────────────────────────
  'milwaukee': {
    cityName: 'Milwaukee', stateSlug: 'wisconsin', stateName: 'Wisconsin', stateAbbr: 'WI',
    nearbyMajorCities: [
      { city: 'Wauwatosa',     slug: 'wauwatosa'     },
      { city: 'Mequon',        slug: 'mequon'        },
      { city: 'Whitefish Bay', slug: 'whitefish-bay' },
      { city: 'Brookfield',    slug: 'brookfield'    },
    ],
    otherStateCities: [
      { city: 'Chicago',      slug: 'chicago'      },
      { city: 'Minneapolis',  slug: 'minneapolis'  },
      { city: 'Detroit',      slug: 'detroit'      },
    ],
    contextualSentence: 'Not in Milwaukee? We serve all of Wisconsin — Mequon, Whitefish Bay, Wauwatosa, Brookfield, and the full Milwaukee metro.',
  },
  'mequon': {
    cityName: 'Mequon', stateSlug: 'wisconsin', stateName: 'Wisconsin', stateAbbr: 'WI',
    nearbyMajorCities: [
      { city: 'Whitefish Bay', slug: 'whitefish-bay' },
      { city: 'Milwaukee',     slug: 'milwaukee'     },
      { city: 'Wauwatosa',     slug: 'wauwatosa'     },
      { city: 'Brookfield',    slug: 'brookfield'    },
    ],
    otherStateCities: [
      { city: 'Chicago',     slug: 'chicago'     },
      { city: 'Milwaukee',   slug: 'milwaukee'   },
      { city: 'Minneapolis', slug: 'minneapolis' },
    ],
    contextualSentence: 'Not in Mequon? We serve all of Ozaukee County and the greater Milwaukee metro — Whitefish Bay, Shorewood, Thiensville, Glendale, and beyond.',
  },
  'brookfield': {
    cityName: 'Brookfield', stateSlug: 'wisconsin', stateName: 'Wisconsin', stateAbbr: 'WI',
    nearbyMajorCities: [
      { city: 'Wauwatosa', slug: 'wauwatosa' },
      { city: 'Milwaukee', slug: 'milwaukee' },
      { city: 'Mequon',    slug: 'mequon'    },
    ],
    otherStateCities: [
      { city: 'Chicago',     slug: 'chicago'     },
      { city: 'Milwaukee',   slug: 'milwaukee'   },
      { city: 'Minneapolis', slug: 'minneapolis' },
    ],
    contextualSentence: 'Not in Brookfield? We serve all of Waukesha County and the Milwaukee metro — Wauwatosa, Elm Grove, Pewaukee, Menomonee Falls, and beyond.',
  },
  'wauwatosa': {
    cityName: 'Wauwatosa', stateSlug: 'wisconsin', stateName: 'Wisconsin', stateAbbr: 'WI',
    nearbyMajorCities: [
      { city: 'Milwaukee',     slug: 'milwaukee'     },
      { city: 'Brookfield',    slug: 'brookfield'    },
      { city: 'Whitefish Bay', slug: 'whitefish-bay' },
      { city: 'Mequon',        slug: 'mequon'        },
    ],
    otherStateCities: [
      { city: 'Chicago',     slug: 'chicago'     },
      { city: 'Milwaukee',   slug: 'milwaukee'   },
      { city: 'Minneapolis', slug: 'minneapolis' },
    ],
    contextualSentence: 'Not in Wauwatosa? We serve all of the Milwaukee metro — Brookfield, Elm Grove, West Allis, Milwaukee, Whitefish Bay, and surrounding communities.',
  },
  'whitefish-bay': {
    cityName: 'Whitefish Bay', stateSlug: 'wisconsin', stateName: 'Wisconsin', stateAbbr: 'WI',
    nearbyMajorCities: [
      { city: 'Mequon',    slug: 'mequon'    },
      { city: 'Milwaukee', slug: 'milwaukee' },
      { city: 'Wauwatosa', slug: 'wauwatosa' },
    ],
    otherStateCities: [
      { city: 'Chicago',     slug: 'chicago'     },
      { city: 'Milwaukee',   slug: 'milwaukee'   },
      { city: 'Minneapolis', slug: 'minneapolis' },
    ],
    contextualSentence: 'Not in Whitefish Bay? We serve all of the Milwaukee North Shore — Mequon, Shorewood, Fox Point, Glendale, and the full Milwaukee metro.',
  },
  'madison': {
    cityName: 'Madison', stateSlug: 'wisconsin', stateName: 'Wisconsin', stateAbbr: 'WI',
    nearbyMajorCities: [
      { city: 'Middleton', slug: 'middleton' },
      { city: 'Verona',    slug: 'verona'    },
      { city: 'Waunakee',  slug: 'waunakee'  },
    ],
    otherStateCities: [
      { city: 'Milwaukee',  slug: 'milwaukee'  },
      { city: 'Chicago',    slug: 'chicago'    },
      { city: 'Minneapolis', slug: 'minneapolis' },
    ],
    contextualSentence: 'Not in Madison? We serve all of Dane County — Middleton, Verona, Waunakee, Sun Prairie, Fitchburg, and surrounding communities.',
  },
  'middleton': {
    cityName: 'Middleton', stateSlug: 'wisconsin', stateName: 'Wisconsin', stateAbbr: 'WI',
    nearbyMajorCities: [
      { city: 'Madison',   slug: 'madison'   },
      { city: 'Waunakee',  slug: 'waunakee'  },
      { city: 'Verona',    slug: 'verona'    },
    ],
    otherStateCities: [
      { city: 'Milwaukee',   slug: 'milwaukee'   },
      { city: 'Chicago',     slug: 'chicago'     },
      { city: 'Minneapolis', slug: 'minneapolis' },
    ],
    contextualSentence: 'Not in Middleton? We serve all of Dane County — Madison, Waunakee, Verona, Fitchburg, and all Madison-area communities.',
  },
  'verona': {
    cityName: 'Verona', stateSlug: 'wisconsin', stateName: 'Wisconsin', stateAbbr: 'WI',
    nearbyMajorCities: [
      { city: 'Madison',   slug: 'madison'   },
      { city: 'Middleton', slug: 'middleton' },
      { city: 'Waunakee',  slug: 'waunakee'  },
    ],
    otherStateCities: [
      { city: 'Milwaukee',   slug: 'milwaukee'   },
      { city: 'Chicago',     slug: 'chicago'     },
      { city: 'Minneapolis', slug: 'minneapolis' },
    ],
    contextualSentence: 'Not in Verona? We serve all of Dane County — Madison, Middleton, Fitchburg, Belleville, and surrounding communities.',
  },
  'waunakee': {
    cityName: 'Waunakee', stateSlug: 'wisconsin', stateName: 'Wisconsin', stateAbbr: 'WI',
    nearbyMajorCities: [
      { city: 'Madison',   slug: 'madison'   },
      { city: 'Middleton', slug: 'middleton' },
    ],
    otherStateCities: [
      { city: 'Milwaukee',   slug: 'milwaukee'   },
      { city: 'Chicago',     slug: 'chicago'     },
      { city: 'Minneapolis', slug: 'minneapolis' },
    ],
    contextualSentence: 'Not in Waunakee? We serve all of Dane County — Madison, Middleton, DeForest, Sun Prairie, and the full Madison north corridor.',
  },
  'delafield': {
    cityName: 'Delafield', stateSlug: 'wisconsin', stateName: 'Wisconsin', stateAbbr: 'WI',
    nearbyMajorCities: [
      { city: 'Oconomowoc', slug: 'oconomowoc' },
      { city: 'Brookfield',  slug: 'brookfield'  },
      { city: 'Milwaukee',   slug: 'milwaukee'   },
    ],
    otherStateCities: [
      { city: 'Chicago',     slug: 'chicago'     },
      { city: 'Milwaukee',   slug: 'milwaukee'   },
      { city: 'Minneapolis', slug: 'minneapolis' },
    ],
    contextualSentence: 'Not in Delafield? We serve all of Waukesha County Lake Country — Oconomowoc, Pewaukee, Hartland, Nashotah, and surrounding communities.',
  },
  'oconomowoc': {
    cityName: 'Oconomowoc', stateSlug: 'wisconsin', stateName: 'Wisconsin', stateAbbr: 'WI',
    nearbyMajorCities: [
      { city: 'Delafield',  slug: 'delafield'  },
      { city: 'Brookfield', slug: 'brookfield' },
      { city: 'Milwaukee',  slug: 'milwaukee'  },
    ],
    otherStateCities: [
      { city: 'Chicago',     slug: 'chicago'     },
      { city: 'Milwaukee',   slug: 'milwaukee'   },
      { city: 'Minneapolis', slug: 'minneapolis' },
    ],
    contextualSentence: 'Not in Oconomowoc? We serve all of Waukesha County Lake Country — Delafield, Pewaukee, Wales, Hartland, and surrounding communities.',
  },
  'lake-geneva': {
    cityName: 'Lake Geneva', stateSlug: 'wisconsin', stateName: 'Wisconsin', stateAbbr: 'WI',
    nearbyMajorCities: [
      { city: 'Milwaukee',  slug: 'milwaukee'  },
      { city: 'Oconomowoc', slug: 'oconomowoc' },
    ],
    otherStateCities: [
      { city: 'Chicago',     slug: 'chicago'     },
      { city: 'Milwaukee',   slug: 'milwaukee'   },
      { city: 'Minneapolis', slug: 'minneapolis' },
    ],
    contextualSentence: 'Not in Lake Geneva? We serve all of Walworth County and Wisconsin destination properties — Williams Bay, Fontana-on-Geneva-Lake, Delavan, Elkhorn, and surrounding vacation communities.',
  },
  'kohler': {
    cityName: 'Kohler', stateSlug: 'wisconsin', stateName: 'Wisconsin', stateAbbr: 'WI',
    nearbyMajorCities: [
      { city: 'Milwaukee',  slug: 'milwaukee'  },
      { city: 'Green Bay',  slug: 'green-bay'  },
    ],
    otherStateCities: [
      { city: 'Chicago',     slug: 'chicago'     },
      { city: 'Milwaukee',   slug: 'milwaukee'   },
      { city: 'Minneapolis', slug: 'minneapolis' },
    ],
    contextualSentence: 'Not in Kohler? We serve all of Sheboygan County resort and estate properties — Sheboygan, Plymouth, Elkhart Lake, and surrounding communities.',
  },
  'green-bay': {
    cityName: 'Green Bay', stateSlug: 'wisconsin', stateName: 'Wisconsin', stateAbbr: 'WI',
    nearbyMajorCities: [
      { city: 'Appleton',    slug: 'appleton'    },
      { city: 'Neenah',      slug: 'neenah'      },
      { city: 'Sturgeon Bay', slug: 'sturgeon-bay' },
    ],
    otherStateCities: [
      { city: 'Milwaukee',   slug: 'milwaukee'   },
      { city: 'Chicago',     slug: 'chicago'     },
      { city: 'Minneapolis', slug: 'minneapolis' },
    ],
    contextualSentence: 'Not in Green Bay? We serve all of Northeast Wisconsin — De Pere, Ashwaubenon, Appleton, Neenah, and the full Brown and Outagamie County area.',
  },
  'appleton': {
    cityName: 'Appleton', stateSlug: 'wisconsin', stateName: 'Wisconsin', stateAbbr: 'WI',
    nearbyMajorCities: [
      { city: 'Neenah',     slug: 'neenah'    },
      { city: 'Green Bay',  slug: 'green-bay' },
    ],
    otherStateCities: [
      { city: 'Milwaukee',   slug: 'milwaukee'   },
      { city: 'Chicago',     slug: 'chicago'     },
      { city: 'Minneapolis', slug: 'minneapolis' },
    ],
    contextualSentence: 'Not in Appleton? We serve all of the Fox Valley — Neenah, Menasha, Grand Chute, Kaukauna, Oshkosh, and surrounding Outagamie County communities.',
  },
  'neenah': {
    cityName: 'Neenah', stateSlug: 'wisconsin', stateName: 'Wisconsin', stateAbbr: 'WI',
    nearbyMajorCities: [
      { city: 'Appleton',  slug: 'appleton'  },
      { city: 'Green Bay', slug: 'green-bay' },
    ],
    otherStateCities: [
      { city: 'Milwaukee',   slug: 'milwaukee'   },
      { city: 'Chicago',     slug: 'chicago'     },
      { city: 'Minneapolis', slug: 'minneapolis' },
    ],
    contextualSentence: 'Not in Neenah? We serve all of the Fox Valley — Appleton, Menasha, Oshkosh, Fond du Lac, and surrounding Winnebago County communities.',
  },
  'sturgeon-bay': {
    cityName: 'Sturgeon Bay', stateSlug: 'wisconsin', stateName: 'Wisconsin', stateAbbr: 'WI',
    nearbyMajorCities: [
      { city: 'Green Bay', slug: 'green-bay' },
      { city: 'Appleton',  slug: 'appleton'  },
    ],
    otherStateCities: [
      { city: 'Chicago',     slug: 'chicago'     },
      { city: 'Milwaukee',   slug: 'milwaukee'   },
      { city: 'Minneapolis', slug: 'minneapolis' },
    ],
    contextualSentence: 'Not in Sturgeon Bay? We serve all of Door County — Fish Creek, Sister Bay, Egg Harbor, Ephraim, Ellison Bay, and all Door County vacation properties.',
  },

  // ── Indiana ────────────────────────────────────────────────────────────────
  'indianapolis': {
    cityName: 'Indianapolis', stateSlug: 'indiana', stateName: 'Indiana', stateAbbr: 'IN',
    nearbyMajorCities: [
      { city: 'Carmel',     slug: 'carmel'     },
      { city: 'Fishers',    slug: 'fishers'    },
      { city: 'Zionsville', slug: 'zionsville' },
      { city: 'Westfield',  slug: 'westfield'  },
    ],
    otherStateCities: [
      { city: 'Chicago',     slug: 'chicago'     },
      { city: 'Cincinnati',  slug: 'cincinnati'  },
      { city: 'Louisville',  slug: 'louisville'  },
    ],
    contextualSentence: 'Not in Indianapolis? We serve all of the greater Indianapolis metro — Carmel, Fishers, Westfield, Zionsville, Noblesville, Greenwood, Avon, Brownsburg, and all of Marion County.',
  },

  'carmel': {
    cityName: 'Carmel', stateSlug: 'indiana', stateName: 'Indiana', stateAbbr: 'IN',
    nearbyMajorCities: [
      { city: 'Indianapolis', slug: 'indianapolis' },
      { city: 'Fishers',      slug: 'fishers'      },
      { city: 'Zionsville',   slug: 'zionsville'   },
      { city: 'Westfield',    slug: 'westfield'    },
    ],
    otherStateCities: [
      { city: 'Chicago',    slug: 'chicago'    },
      { city: 'Columbus',   slug: 'columbus'   },
      { city: 'Louisville', slug: 'louisville' },
    ],
    contextualSentence: 'Not in Carmel? We serve all of Hamilton County — Fishers, Westfield, Noblesville, Zionsville, and all of Indianapolis and surrounding central Indiana communities.',
  },

  'fishers': {
    cityName: 'Fishers', stateSlug: 'indiana', stateName: 'Indiana', stateAbbr: 'IN',
    nearbyMajorCities: [
      { city: 'Carmel',       slug: 'carmel'       },
      { city: 'Indianapolis', slug: 'indianapolis'  },
      { city: 'Westfield',    slug: 'westfield'    },
      { city: 'Zionsville',   slug: 'zionsville'   },
    ],
    otherStateCities: [
      { city: 'Chicago',    slug: 'chicago'    },
      { city: 'Columbus',   slug: 'columbus'   },
      { city: 'Louisville', slug: 'louisville' },
    ],
    contextualSentence: 'Not in Fishers? We serve all of Hamilton County and North Indianapolis — Carmel, Westfield, Noblesville, Zionsville, and all of the greater Indianapolis metro.',
  },

  'zionsville': {
    cityName: 'Zionsville', stateSlug: 'indiana', stateName: 'Indiana', stateAbbr: 'IN',
    nearbyMajorCities: [
      { city: 'Carmel',       slug: 'carmel'       },
      { city: 'Indianapolis', slug: 'indianapolis'  },
      { city: 'Westfield',    slug: 'westfield'    },
      { city: 'Fishers',      slug: 'fishers'      },
    ],
    otherStateCities: [
      { city: 'Chicago',    slug: 'chicago'    },
      { city: 'Columbus',   slug: 'columbus'   },
      { city: 'Louisville', slug: 'louisville' },
    ],
    contextualSentence: 'Not in Zionsville? We serve all of Boone County and Hamilton County — Carmel, Westfield, Indianapolis, Lebanon, Brownsburg, and all surrounding central Indiana communities.',
  },

  'westfield': {
    cityName: 'Westfield', stateSlug: 'indiana', stateName: 'Indiana', stateAbbr: 'IN',
    nearbyMajorCities: [
      { city: 'Carmel',       slug: 'carmel'       },
      { city: 'Indianapolis', slug: 'indianapolis'  },
      { city: 'Fishers',      slug: 'fishers'      },
      { city: 'Zionsville',   slug: 'zionsville'   },
    ],
    otherStateCities: [
      { city: 'Chicago',    slug: 'chicago'    },
      { city: 'Columbus',   slug: 'columbus'   },
      { city: 'Louisville', slug: 'louisville' },
    ],
    contextualSentence: 'Not in Westfield? We serve all of Hamilton County — Carmel, Fishers, Noblesville, Zionsville, Indianapolis, and all of the North Indianapolis corridor.',
  },

  // ── Indiana Batch 2 ────────────────────────────────────────────────────────
  'noblesville': {
    cityName: 'Noblesville', stateSlug: 'indiana', stateName: 'Indiana', stateAbbr: 'IN',
    nearbyMajorCities: [
      { city: 'Carmel',       slug: 'carmel'       },
      { city: 'Fishers',      slug: 'fishers'      },
      { city: 'Westfield',    slug: 'westfield'    },
      { city: 'Indianapolis', slug: 'indianapolis' },
    ],
    otherStateCities: [
      { city: 'Chicago',    slug: 'chicago'    },
      { city: 'Columbus',   slug: 'columbus'   },
      { city: 'Louisville', slug: 'louisville' },
    ],
    contextualSentence: 'Not in Noblesville? We serve all of Hamilton County — Carmel, Fishers, Westfield, Zionsville, Indianapolis, and all of the North Indianapolis corridor.',
  },

  'bloomington': {
    cityName: 'Bloomington', stateSlug: 'indiana', stateName: 'Indiana', stateAbbr: 'IN',
    nearbyMajorCities: [
      { city: 'Indianapolis', slug: 'indianapolis' },
    ],
    otherStateCities: [
      { city: 'Chicago',      slug: 'chicago'      },
      { city: 'Cincinnati',   slug: 'cincinnati'   },
      { city: 'Louisville',   slug: 'louisville'   },
    ],
    contextualSentence: 'Not in Bloomington? We serve all of Monroe County and surrounding South-Central Indiana — Ellettsville, Martinsville, Bedford, Spencer, and Nashville (Brown County).',
  },

  'west-lafayette': {
    cityName: 'West Lafayette', stateSlug: 'indiana', stateName: 'Indiana', stateAbbr: 'IN',
    nearbyMajorCities: [
      { city: 'Lafayette',    slug: 'lafayette'    },
      { city: 'Indianapolis', slug: 'indianapolis' },
    ],
    otherStateCities: [
      { city: 'Chicago',      slug: 'chicago'      },
      { city: 'Columbus',     slug: 'columbus'     },
      { city: 'Louisville',   slug: 'louisville'   },
    ],
    contextualSentence: 'Not in West Lafayette? We serve all of Tippecanoe County — Lafayette, Frankfort, Crawfordsville, Delphi, and surrounding North-Central Indiana communities.',
  },

  'lafayette': {
    cityName: 'Lafayette', stateSlug: 'indiana', stateName: 'Indiana', stateAbbr: 'IN',
    nearbyMajorCities: [
      { city: 'West Lafayette', slug: 'west-lafayette' },
      { city: 'Indianapolis',   slug: 'indianapolis'   },
    ],
    otherStateCities: [
      { city: 'Chicago',      slug: 'chicago'      },
      { city: 'Columbus',     slug: 'columbus'     },
      { city: 'Louisville',   slug: 'louisville'   },
    ],
    contextualSentence: 'Not in Lafayette? We serve all of Tippecanoe County — West Lafayette, Frankfort, Crawfordsville, Delphi, Attica, and surrounding Indiana communities.',
  },

  // ── Indiana Batch 3 ────────────────────────────────────────────────────────
  'south-bend': {
    cityName: 'South Bend', stateSlug: 'indiana', stateName: 'Indiana', stateAbbr: 'IN',
    nearbyMajorCities: [
      { city: 'Mishawaka',    slug: 'mishawaka'    },
      { city: 'Elkhart',      slug: 'elkhart'      },
      { city: 'Fort Wayne',   slug: 'fort-wayne'   },
    ],
    otherStateCities: [
      { city: 'Chicago',      slug: 'chicago'      },
      { city: 'Columbus',     slug: 'columbus'     },
      { city: 'Indianapolis', slug: 'indianapolis' },
    ],
    contextualSentence: 'Not in South Bend? We serve all of St. Joseph County — Mishawaka, Granger, Goshen, Elkhart, and surrounding Northern Indiana communities.',
  },

  'mishawaka': {
    cityName: 'Mishawaka', stateSlug: 'indiana', stateName: 'Indiana', stateAbbr: 'IN',
    nearbyMajorCities: [
      { city: 'South Bend',   slug: 'south-bend'   },
      { city: 'Elkhart',      slug: 'elkhart'      },
      { city: 'Fort Wayne',   slug: 'fort-wayne'   },
    ],
    otherStateCities: [
      { city: 'Chicago',      slug: 'chicago'      },
      { city: 'Indianapolis', slug: 'indianapolis' },
    ],
    contextualSentence: 'Not in Mishawaka? We serve all of St. Joseph County — South Bend, Granger, Elkhart, Osceola, and all of Northern Indiana.',
  },

  'fort-wayne': {
    cityName: 'Fort Wayne', stateSlug: 'indiana', stateName: 'Indiana', stateAbbr: 'IN',
    nearbyMajorCities: [
      { city: 'South Bend',   slug: 'south-bend'   },
      { city: 'Indianapolis', slug: 'indianapolis' },
    ],
    otherStateCities: [
      { city: 'Chicago',      slug: 'chicago'      },
      { city: 'Columbus',     slug: 'columbus'     },
      { city: 'Indianapolis', slug: 'indianapolis' },
    ],
    contextualSentence: 'Not in Fort Wayne? We serve all of Allen County — Auburn, Huntington, Bluffton, Kendallville, Columbia City, and surrounding Northeast Indiana communities.',
  },

  'elkhart': {
    cityName: 'Elkhart', stateSlug: 'indiana', stateName: 'Indiana', stateAbbr: 'IN',
    nearbyMajorCities: [
      { city: 'South Bend',   slug: 'south-bend'   },
      { city: 'Mishawaka',    slug: 'mishawaka'    },
      { city: 'Fort Wayne',   slug: 'fort-wayne'   },
    ],
    otherStateCities: [
      { city: 'Chicago',      slug: 'chicago'      },
      { city: 'Indianapolis', slug: 'indianapolis' },
    ],
    contextualSentence: 'Not in Elkhart? We serve all of Elkhart County — Goshen, Mishawaka, South Bend, Nappanee, Bristol, and surrounding Northern Indiana communities.',
  },

  // ── Indiana Batch 4 ────────────────────────────────────────────────────────
  'warsaw': {
    cityName: 'Warsaw', stateSlug: 'indiana', stateName: 'Indiana', stateAbbr: 'IN',
    nearbyMajorCities: [
      { city: 'Fort Wayne',   slug: 'fort-wayne'   },
      { city: 'South Bend',   slug: 'south-bend'   },
      { city: 'Indianapolis', slug: 'indianapolis' },
    ],
    otherStateCities: [
      { city: 'Chicago',      slug: 'chicago'      },
      { city: 'Columbus',     slug: 'columbus'     },
    ],
    contextualSentence: 'Not in Warsaw? We serve all of Kosciusko County — Winona Lake, Syracuse, North Webster, Plymouth, Rochester, and all Indiana lake communities.',
  },

  'evansville': {
    cityName: 'Evansville', stateSlug: 'indiana', stateName: 'Indiana', stateAbbr: 'IN',
    nearbyMajorCities: [
      { city: 'Indianapolis', slug: 'indianapolis' },
    ],
    otherStateCities: [
      { city: 'Louisville',   slug: 'louisville'   },
      { city: 'Nashville',    slug: 'nashville'    },
      { city: 'Chicago',      slug: 'chicago'      },
    ],
    contextualSentence: 'Not in Evansville? We serve all of Vanderburgh County — Newburgh, Boonville, Mount Vernon, and all of Southwestern Indiana and the Tri-State region.',
  },

  'jeffersonville': {
    cityName: 'Jeffersonville', stateSlug: 'indiana', stateName: 'Indiana', stateAbbr: 'IN',
    nearbyMajorCities: [
      { city: 'New Albany',   slug: 'new-albany'   },
      { city: 'Indianapolis', slug: 'indianapolis' },
      { city: 'Evansville',   slug: 'evansville'   },
    ],
    otherStateCities: [
      { city: 'Louisville',   slug: 'louisville'   },
      { city: 'Nashville',    slug: 'nashville'    },
      { city: 'Cincinnati',   slug: 'cincinnati'   },
    ],
    contextualSentence: 'Not in Jeffersonville? We serve all of Clark County — New Albany, Clarksville, Sellersburg, Charlestown, Georgetown, and all of Southern Indiana.',
  },

  'new-albany': {
    cityName: 'New Albany', stateSlug: 'indiana', stateName: 'Indiana', stateAbbr: 'IN',
    nearbyMajorCities: [
      { city: 'Jeffersonville', slug: 'jeffersonville' },
      { city: 'Indianapolis',   slug: 'indianapolis'   },
      { city: 'Evansville',     slug: 'evansville'     },
    ],
    otherStateCities: [
      { city: 'Louisville',   slug: 'louisville'   },
      { city: 'Nashville',    slug: 'nashville'    },
      { city: 'Cincinnati',   slug: 'cincinnati'   },
    ],
    contextualSentence: 'Not in New Albany? We serve all of Floyd County — Jeffersonville, Clarksville, Georgetown, Floyds Knobs, and all of Southern Indiana.',
  },

  // ── Rhode Island Batch 1 ───────────────────────────────────────────────────
  'providence': {
    cityName: 'Providence', stateSlug: 'rhode-island', stateName: 'Rhode Island', stateAbbr: 'RI',
    nearbyMajorCities: [
      { city: 'Cranston',       slug: 'cranston'       },
      { city: 'East Greenwich', slug: 'east-greenwich' },
      { city: 'Warwick',        slug: 'warwick'        },
      { city: 'Lincoln',        slug: 'lincoln'        },
    ],
    otherStateCities: [
      { city: 'Boston',      slug: 'boston'      },
      { city: 'Newport',     slug: 'newport'     },
      { city: 'New Haven',   slug: 'new-haven'   },
    ],
    contextualSentence: 'Not in Providence? We serve all of Rhode Island — Cranston, Warwick, East Greenwich, Lincoln, Newport, Barrington, and all Greater Providence communities.',
  },

  'cranston': {
    cityName: 'Cranston', stateSlug: 'rhode-island', stateName: 'Rhode Island', stateAbbr: 'RI',
    nearbyMajorCities: [
      { city: 'Providence',    slug: 'providence'    },
      { city: 'Warwick',       slug: 'warwick'       },
      { city: 'East Greenwich', slug: 'east-greenwich' },
      { city: 'Lincoln',       slug: 'lincoln'       },
    ],
    otherStateCities: [
      { city: 'Boston',    slug: 'boston'    },
      { city: 'Newport',   slug: 'newport'   },
      { city: 'New Haven', slug: 'new-haven' },
    ],
    contextualSentence: 'Not in Cranston? We serve all of Greater Providence — Providence, Warwick, East Greenwich, Lincoln, Johnston, North Providence, and all surrounding communities.',
  },

  'warwick': {
    cityName: 'Warwick', stateSlug: 'rhode-island', stateName: 'Rhode Island', stateAbbr: 'RI',
    nearbyMajorCities: [
      { city: 'Providence',    slug: 'providence'    },
      { city: 'Cranston',      slug: 'cranston'      },
      { city: 'East Greenwich', slug: 'east-greenwich' },
      { city: 'Lincoln',       slug: 'lincoln'       },
    ],
    otherStateCities: [
      { city: 'Boston',      slug: 'boston'      },
      { city: 'Newport',     slug: 'newport'     },
      { city: 'New Haven',   slug: 'new-haven'   },
    ],
    contextualSentence: 'Not in Warwick? We serve all of Kent County and Greater Providence — Cranston, East Greenwich, North Kingstown, West Warwick, and all surrounding Rhode Island communities.',
  },

  'east-greenwich': {
    cityName: 'East Greenwich', stateSlug: 'rhode-island', stateName: 'Rhode Island', stateAbbr: 'RI',
    nearbyMajorCities: [
      { city: 'Warwick',    slug: 'warwick'    },
      { city: 'Providence', slug: 'providence' },
      { city: 'Cranston',   slug: 'cranston'   },
      { city: 'Lincoln',    slug: 'lincoln'    },
    ],
    otherStateCities: [
      { city: 'Boston',    slug: 'boston'    },
      { city: 'Newport',   slug: 'newport'   },
      { city: 'New Haven', slug: 'new-haven' },
    ],
    contextualSentence: 'Not in East Greenwich? We serve all of Kent County — Warwick, North Kingstown, Coventry, West Warwick, and all of Greater Providence.',
  },

  'lincoln': {
    cityName: 'Lincoln', stateSlug: 'rhode-island', stateName: 'Rhode Island', stateAbbr: 'RI',
    nearbyMajorCities: [
      { city: 'Providence', slug: 'providence' },
      { city: 'Cranston',   slug: 'cranston'   },
      { city: 'Warwick',    slug: 'warwick'    },
    ],
    otherStateCities: [
      { city: 'Boston',    slug: 'boston'    },
      { city: 'Newport',   slug: 'newport'   },
      { city: 'New Haven', slug: 'new-haven' },
    ],
    contextualSentence: 'Not in Lincoln? We serve all of Northern Rhode Island — Cumberland, North Smithfield, Smithfield, Providence, Pawtucket, and all of Greater Providence.',
  },

  // ── Rhode Island Batch 2 ───────────────────────────────────────────────────
  'barrington': {
    cityName: 'Barrington', stateSlug: 'rhode-island', stateName: 'Rhode Island', stateAbbr: 'RI',
    nearbyMajorCities: [
      { city: 'Bristol',       slug: 'bristol'       },
      { city: 'Providence',    slug: 'providence'    },
      { city: 'East Greenwich', slug: 'east-greenwich' },
    ],
    otherStateCities: [
      { city: 'Boston',    slug: 'boston'    },
      { city: 'Newport',   slug: 'newport'   },
      { city: 'New Haven', slug: 'new-haven' },
    ],
    contextualSentence: 'Not in Barrington? We serve all of the East Bay — Bristol, Warren, East Providence, Providence, and all of Greater Rhode Island.',
  },

  'bristol': {
    cityName: 'Bristol', stateSlug: 'rhode-island', stateName: 'Rhode Island', stateAbbr: 'RI',
    nearbyMajorCities: [
      { city: 'Barrington',  slug: 'barrington'  },
      { city: 'Providence',  slug: 'providence'  },
      { city: 'Newport',     slug: 'newport'     },
    ],
    otherStateCities: [
      { city: 'Boston',    slug: 'boston'    },
      { city: 'Newport',   slug: 'newport'   },
      { city: 'New Haven', slug: 'new-haven' },
    ],
    contextualSentence: 'Not in Bristol? We serve all of the East Bay — Barrington, Warren, East Providence, Providence, and all of Greater Rhode Island.',
  },

  // ── Rhode Island Batch 3 ───────────────────────────────────────────────────
  'newport': {
    cityName: 'Newport', stateSlug: 'rhode-island', stateName: 'Rhode Island', stateAbbr: 'RI',
    nearbyMajorCities: [
      { city: 'Middletown', slug: 'middletown' },
      { city: 'Portsmouth', slug: 'portsmouth' },
      { city: 'Barrington', slug: 'barrington' },
    ],
    otherStateCities: [
      { city: 'Boston',      slug: 'boston'      },
      { city: 'Providence',  slug: 'providence'  },
      { city: 'New Haven',   slug: 'new-haven'   },
    ],
    contextualSentence: "Not in Newport? We serve all of Aquidneck Island — Middletown, Portsmouth, and all of Rhode Island's coastal communities.",
  },

  'middletown': {
    cityName: 'Middletown', stateSlug: 'rhode-island', stateName: 'Rhode Island', stateAbbr: 'RI',
    nearbyMajorCities: [
      { city: 'Newport',    slug: 'newport'    },
      { city: 'Portsmouth', slug: 'portsmouth' },
      { city: 'Bristol',    slug: 'bristol'    },
    ],
    otherStateCities: [
      { city: 'Boston',     slug: 'boston'    },
      { city: 'Providence', slug: 'providence' },
      { city: 'New Haven',  slug: 'new-haven' },
    ],
    contextualSentence: 'Not in Middletown? We serve all of Aquidneck Island — Newport, Portsmouth, Bristol, and all of Rhode Island.',
  },

  'portsmouth': {
    cityName: 'Portsmouth', stateSlug: 'rhode-island', stateName: 'Rhode Island', stateAbbr: 'RI',
    nearbyMajorCities: [
      { city: 'Newport',    slug: 'newport'    },
      { city: 'Middletown', slug: 'middletown' },
      { city: 'Bristol',    slug: 'bristol'    },
      { city: 'Barrington', slug: 'barrington' },
    ],
    otherStateCities: [
      { city: 'Boston',     slug: 'boston'    },
      { city: 'Providence', slug: 'providence' },
      { city: 'New Haven',  slug: 'new-haven' },
    ],
    contextualSentence: 'Not in Portsmouth? We serve all of Aquidneck Island — Newport, Middletown, Bristol, and all of Rhode Island.',
  },

  // ── Rhode Island Batch 4 ───────────────────────────────────────────────────
  'narragansett': {
    cityName: 'Narragansett', stateSlug: 'rhode-island', stateName: 'Rhode Island', stateAbbr: 'RI',
    nearbyMajorCities: [
      { city: 'South Kingstown', slug: 'south-kingstown' },
      { city: 'North Kingstown', slug: 'north-kingstown' },
      { city: 'Westerly',        slug: 'westerly'        },
    ],
    otherStateCities: [
      { city: 'Boston',      slug: 'boston'      },
      { city: 'Providence',  slug: 'providence'  },
      { city: 'New Haven',   slug: 'new-haven'   },
    ],
    contextualSentence: 'Not in Narragansett? We serve all of South County — South Kingstown, North Kingstown, Westerly, Charlestown, and all of coastal Rhode Island.',
  },

  'south-kingstown': {
    cityName: 'South Kingstown', stateSlug: 'rhode-island', stateName: 'Rhode Island', stateAbbr: 'RI',
    nearbyMajorCities: [
      { city: 'Narragansett',    slug: 'narragansett'    },
      { city: 'North Kingstown', slug: 'north-kingstown' },
      { city: 'Westerly',        slug: 'westerly'        },
    ],
    otherStateCities: [
      { city: 'Boston',     slug: 'boston'    },
      { city: 'Providence', slug: 'providence' },
      { city: 'New Haven',  slug: 'new-haven' },
    ],
    contextualSentence: 'Not in South Kingstown? We serve all of South County — Narragansett, North Kingstown, Westerly, and all of coastal Rhode Island.',
  },

  'north-kingstown': {
    cityName: 'North Kingstown', stateSlug: 'rhode-island', stateName: 'Rhode Island', stateAbbr: 'RI',
    nearbyMajorCities: [
      { city: 'South Kingstown', slug: 'south-kingstown' },
      { city: 'Narragansett',    slug: 'narragansett'    },
      { city: 'East Greenwich',  slug: 'east-greenwich'  },
      { city: 'Warwick',         slug: 'warwick'         },
    ],
    otherStateCities: [
      { city: 'Boston',     slug: 'boston'    },
      { city: 'Providence', slug: 'providence' },
      { city: 'New Haven',  slug: 'new-haven' },
    ],
    contextualSentence: 'Not in North Kingstown? We serve all of South County and Greater Providence — South Kingstown, East Greenwich, Warwick, Narragansett, and all of Rhode Island.',
  },

  'westerly': {
    cityName: 'Westerly', stateSlug: 'rhode-island', stateName: 'Rhode Island', stateAbbr: 'RI',
    nearbyMajorCities: [
      { city: 'South Kingstown', slug: 'south-kingstown' },
      { city: 'Narragansett',    slug: 'narragansett'    },
      { city: 'North Kingstown', slug: 'north-kingstown' },
    ],
    otherStateCities: [
      { city: 'Boston',    slug: 'boston'    },
      { city: 'Newport',   slug: 'newport'   },
      { city: 'New Haven', slug: 'new-haven' },
    ],
    contextualSentence: 'Not in Westerly? We serve all of South County — South Kingstown, Narragansett, Charlestown, and all of coastal Rhode Island.',
  },

  // ── Arizona (Batch 1) ──────────────────────────────────────────────────────
  'scottsdale': {
    cityName: 'Scottsdale', stateSlug: 'arizona', stateName: 'Arizona', stateAbbr: 'AZ',
    nearbyMajorCities: [
      { city: 'Paradise Valley', slug: 'paradise-valley' },
      { city: 'Phoenix',         slug: 'phoenix'         },
      { city: 'Tempe',           slug: 'tempe'           },
      { city: 'Fountain Hills',  slug: 'fountain-hills'  },
    ],
    otherStateCities: [
      { city: 'Phoenix',        slug: 'phoenix'        },
      { city: 'Tempe',          slug: 'tempe'          },
      { city: 'Fountain Hills', slug: 'fountain-hills' },
    ],
    contextualSentence: 'Not in Scottsdale? We serve all of Arizona — Phoenix, Tempe, Paradise Valley, Fountain Hills, and all Valley communities.',
  },
  'paradise-valley': {
    cityName: 'Paradise Valley', stateSlug: 'arizona', stateName: 'Arizona', stateAbbr: 'AZ',
    nearbyMajorCities: [
      { city: 'Scottsdale',     slug: 'scottsdale'     },
      { city: 'Phoenix',        slug: 'phoenix'        },
      { city: 'Tempe',          slug: 'tempe'          },
      { city: 'Fountain Hills', slug: 'fountain-hills' },
    ],
    otherStateCities: [
      { city: 'Scottsdale',     slug: 'scottsdale'     },
      { city: 'Phoenix',        slug: 'phoenix'        },
      { city: 'Fountain Hills', slug: 'fountain-hills' },
    ],
    contextualSentence: 'Not in Paradise Valley? We serve all of Greater Scottsdale — Old Town, DC Ranch, Silverleaf, Troon North, and all of the North Scottsdale corridor.',
  },
  'phoenix': {
    cityName: 'Phoenix', stateSlug: 'arizona', stateName: 'Arizona', stateAbbr: 'AZ',
    nearbyMajorCities: [
      { city: 'Scottsdale',      slug: 'scottsdale'      },
      { city: 'Paradise Valley', slug: 'paradise-valley' },
      { city: 'Tempe',           slug: 'tempe'           },
      { city: 'Fountain Hills',  slug: 'fountain-hills'  },
    ],
    otherStateCities: [
      { city: 'Scottsdale',     slug: 'scottsdale'     },
      { city: 'Tempe',          slug: 'tempe'          },
      { city: 'Fountain Hills', slug: 'fountain-hills' },
    ],
    contextualSentence: 'Not in Phoenix proper? We serve all of the Phoenix metro — Scottsdale, Tempe, Paradise Valley, Fountain Hills, and every Maricopa County community.',
  },
  'tempe': {
    cityName: 'Tempe', stateSlug: 'arizona', stateName: 'Arizona', stateAbbr: 'AZ',
    nearbyMajorCities: [
      { city: 'Phoenix',         slug: 'phoenix'         },
      { city: 'Scottsdale',      slug: 'scottsdale'      },
      { city: 'Paradise Valley', slug: 'paradise-valley' },
      { city: 'Fountain Hills',  slug: 'fountain-hills'  },
    ],
    otherStateCities: [
      { city: 'Phoenix',        slug: 'phoenix'        },
      { city: 'Scottsdale',     slug: 'scottsdale'     },
      { city: 'Fountain Hills', slug: 'fountain-hills' },
    ],
    contextualSentence: 'Not in Tempe? We serve all of the East Valley — Phoenix, Scottsdale, Paradise Valley, Fountain Hills, and surrounding Arizona communities.',
  },
  'fountain-hills': {
    cityName: 'Fountain Hills', stateSlug: 'arizona', stateName: 'Arizona', stateAbbr: 'AZ',
    nearbyMajorCities: [
      { city: 'Scottsdale',      slug: 'scottsdale'      },
      { city: 'Paradise Valley', slug: 'paradise-valley' },
      { city: 'Phoenix',         slug: 'phoenix'         },
      { city: 'Tempe',           slug: 'tempe'           },
    ],
    otherStateCities: [
      { city: 'Scottsdale',      slug: 'scottsdale'      },
      { city: 'Phoenix',         slug: 'phoenix'         },
      { city: 'Paradise Valley', slug: 'paradise-valley' },
    ],
    contextualSentence: 'Not in Fountain Hills? We serve all of Greater Scottsdale and the East Valley — Scottsdale, Paradise Valley, Phoenix, Tempe, Chandler, and Mesa.',
  },

  // ── Batch 2: East Valley ──────────────────────────────────────────────────
  'chandler': {
    cityName: 'Chandler', stateSlug: 'arizona', stateName: 'Arizona', stateAbbr: 'AZ',
    nearbyMajorCities: [
      { city: 'Tempe',       slug: 'tempe'       },
      { city: 'Gilbert',     slug: 'gilbert'     },
      { city: 'Mesa',        slug: 'mesa'        },
      { city: 'Phoenix',     slug: 'phoenix'     },
      { city: 'Queen Creek', slug: 'queen-creek' },
    ],
    otherStateCities: [
      { city: 'Scottsdale',     slug: 'scottsdale'     },
      { city: 'Tempe',          slug: 'tempe'          },
      { city: 'Fountain Hills', slug: 'fountain-hills' },
    ],
    contextualSentence: 'Not in Chandler? We serve all of the East Valley — Tempe, Gilbert, Mesa, Queen Creek, and Phoenix.',
  },
  'gilbert': {
    cityName: 'Gilbert', stateSlug: 'arizona', stateName: 'Arizona', stateAbbr: 'AZ',
    nearbyMajorCities: [
      { city: 'Chandler',    slug: 'chandler'    },
      { city: 'Mesa',        slug: 'mesa'        },
      { city: 'Queen Creek', slug: 'queen-creek' },
      { city: 'Tempe',       slug: 'tempe'       },
      { city: 'Phoenix',     slug: 'phoenix'     },
    ],
    otherStateCities: [
      { city: 'Chandler',       slug: 'chandler'       },
      { city: 'Scottsdale',     slug: 'scottsdale'     },
      { city: 'Fountain Hills', slug: 'fountain-hills' },
    ],
    contextualSentence: 'Not in Gilbert? We serve all of the East Valley — Chandler, Mesa, Queen Creek, Tempe, and Phoenix.',
  },
  'mesa': {
    cityName: 'Mesa', stateSlug: 'arizona', stateName: 'Arizona', stateAbbr: 'AZ',
    nearbyMajorCities: [
      { city: 'Tempe',          slug: 'tempe'          },
      { city: 'Chandler',       slug: 'chandler'       },
      { city: 'Gilbert',        slug: 'gilbert'        },
      { city: 'Fountain Hills', slug: 'fountain-hills' },
      { city: 'Phoenix',        slug: 'phoenix'        },
    ],
    otherStateCities: [
      { city: 'Chandler',       slug: 'chandler'       },
      { city: 'Scottsdale',     slug: 'scottsdale'     },
      { city: 'Fountain Hills', slug: 'fountain-hills' },
    ],
    contextualSentence: 'Not in Mesa? We serve all of the East Valley — Tempe, Chandler, Gilbert, Fountain Hills, and Phoenix.',
  },
  'queen-creek': {
    cityName: 'Queen Creek', stateSlug: 'arizona', stateName: 'Arizona', stateAbbr: 'AZ',
    nearbyMajorCities: [
      { city: 'Gilbert',  slug: 'gilbert'  },
      { city: 'Chandler', slug: 'chandler' },
      { city: 'Mesa',     slug: 'mesa'     },
    ],
    otherStateCities: [
      { city: 'Gilbert',  slug: 'gilbert'  },
      { city: 'Chandler', slug: 'chandler' },
      { city: 'Mesa',     slug: 'mesa'     },
    ],
    contextualSentence: 'Not in Queen Creek? We serve all of the Southeast Valley — Gilbert, Chandler, and Mesa.',
  },

  // ── Batch 3: West Valley ──────────────────────────────────────────────────
  'peoria': {
    cityName: 'Peoria', stateSlug: 'arizona', stateName: 'Arizona', stateAbbr: 'AZ',
    nearbyMajorCities: [
      { city: 'Glendale', slug: 'glendale' },
      { city: 'Surprise', slug: 'surprise' },
      { city: 'Phoenix',  slug: 'phoenix'  },
      { city: 'Goodyear', slug: 'goodyear' },
    ],
    otherStateCities: [
      { city: 'Glendale', slug: 'glendale' },
      { city: 'Surprise', slug: 'surprise' },
      { city: 'Phoenix',  slug: 'phoenix'  },
    ],
    contextualSentence: 'Not in Peoria? We serve all of the West Valley — Glendale, Surprise, Goodyear, and Phoenix.',
  },
  'glendale': {
    cityName: 'Glendale', stateSlug: 'arizona', stateName: 'Arizona', stateAbbr: 'AZ',
    nearbyMajorCities: [
      { city: 'Peoria',   slug: 'peoria'   },
      { city: 'Surprise', slug: 'surprise' },
      { city: 'Phoenix',  slug: 'phoenix'  },
      { city: 'Goodyear', slug: 'goodyear' },
    ],
    otherStateCities: [
      { city: 'Peoria',   slug: 'peoria'   },
      { city: 'Surprise', slug: 'surprise' },
      { city: 'Phoenix',  slug: 'phoenix'  },
    ],
    contextualSentence: 'Not in Glendale? We serve all of the West Valley — Peoria, Surprise, Goodyear, and Phoenix.',
  },
  'surprise': {
    cityName: 'Surprise', stateSlug: 'arizona', stateName: 'Arizona', stateAbbr: 'AZ',
    nearbyMajorCities: [
      { city: 'Peoria',   slug: 'peoria'   },
      { city: 'Glendale', slug: 'glendale' },
      { city: 'Goodyear', slug: 'goodyear' },
      { city: 'Phoenix',  slug: 'phoenix'  },
    ],
    otherStateCities: [
      { city: 'Peoria',   slug: 'peoria'   },
      { city: 'Glendale', slug: 'glendale' },
      { city: 'Phoenix',  slug: 'phoenix'  },
    ],
    contextualSentence: 'Not in Surprise? We serve all of the West Valley — Peoria, Glendale, Goodyear, and Phoenix.',
  },
  'goodyear': {
    cityName: 'Goodyear', stateSlug: 'arizona', stateName: 'Arizona', stateAbbr: 'AZ',
    nearbyMajorCities: [
      { city: 'Surprise', slug: 'surprise' },
      { city: 'Glendale', slug: 'glendale' },
      { city: 'Peoria',   slug: 'peoria'   },
      { city: 'Phoenix',  slug: 'phoenix'  },
    ],
    otherStateCities: [
      { city: 'Surprise', slug: 'surprise' },
      { city: 'Glendale', slug: 'glendale' },
      { city: 'Phoenix',  slug: 'phoenix'  },
    ],
    contextualSentence: 'Not in Goodyear? We serve all of the West Valley — Surprise, Glendale, Peoria, and Phoenix.',
  },

  // ── Batch 4: Northern AZ Mountain + Southern AZ ───────────────────────────
  'tucson': {
    cityName: 'Tucson', stateSlug: 'arizona', stateName: 'Arizona', stateAbbr: 'AZ',
    nearbyMajorCities: [
      { city: 'Oro Valley', slug: 'oro-valley' },
    ],
    otherStateCities: [
      { city: 'Oro Valley', slug: 'oro-valley' },
      { city: 'Phoenix',    slug: 'phoenix'    },
      { city: 'Scottsdale', slug: 'scottsdale' },
    ],
    contextualSentence: 'Not in Tucson? We also serve Oro Valley and the greater Southern Arizona area.',
  },
  'oro-valley': {
    cityName: 'Oro Valley', stateSlug: 'arizona', stateName: 'Arizona', stateAbbr: 'AZ',
    nearbyMajorCities: [
      { city: 'Tucson', slug: 'tucson' },
    ],
    otherStateCities: [
      { city: 'Tucson',     slug: 'tucson'     },
      { city: 'Phoenix',    slug: 'phoenix'    },
      { city: 'Scottsdale', slug: 'scottsdale' },
    ],
    contextualSentence: 'Not in Oro Valley? We also serve Tucson and all of Southern Arizona.',
  },
  'sedona': {
    cityName: 'Sedona', stateSlug: 'arizona', stateName: 'Arizona', stateAbbr: 'AZ',
    nearbyMajorCities: [
      { city: 'Flagstaff', slug: 'flagstaff' },
      { city: 'Prescott',  slug: 'prescott'  },
    ],
    otherStateCities: [
      { city: 'Flagstaff', slug: 'flagstaff' },
      { city: 'Prescott',  slug: 'prescott'  },
      { city: 'Phoenix',   slug: 'phoenix'   },
    ],
    contextualSentence: 'Not in Sedona? We serve all of Northern Arizona — Flagstaff, Prescott, and the greater Phoenix metro.',
  },
  'flagstaff': {
    cityName: 'Flagstaff', stateSlug: 'arizona', stateName: 'Arizona', stateAbbr: 'AZ',
    nearbyMajorCities: [
      { city: 'Sedona',   slug: 'sedona'   },
      { city: 'Prescott', slug: 'prescott' },
    ],
    otherStateCities: [
      { city: 'Sedona',   slug: 'sedona'   },
      { city: 'Prescott', slug: 'prescott' },
      { city: 'Phoenix',  slug: 'phoenix'  },
    ],
    contextualSentence: 'Not in Flagstaff? We serve all of Northern Arizona — Sedona, Prescott, and the greater Phoenix metro.',
  },
  'prescott': {
    cityName: 'Prescott', stateSlug: 'arizona', stateName: 'Arizona', stateAbbr: 'AZ',
    nearbyMajorCities: [
      { city: 'Sedona',   slug: 'sedona'   },
      { city: 'Flagstaff', slug: 'flagstaff' },
    ],
    otherStateCities: [
      { city: 'Sedona',    slug: 'sedona'    },
      { city: 'Flagstaff', slug: 'flagstaff' },
      { city: 'Phoenix',   slug: 'phoenix'   },
    ],
    contextualSentence: 'Not in Prescott? We serve all of Northern Arizona — Sedona, Flagstaff, and the greater Phoenix metro.',
  },
}

// ── Helper functions ──────────────────────────────────────────────────────────

/** Returns state linking data, or a minimal fallback for states not yet in the map. */
export function getStateLinkData(stateSlug) {
  return STATE_LINK_DATA[stateSlug] || null
}

/** Returns city linking data, or null if the city isn't mapped yet. */
export function getCityLinkData(citySlug) {
  return CITY_LINK_DATA[citySlug] || null
}

/** Returns featured cities for a state (top 6), used in StateFeaturedCities. */
export function getFeaturedCities(stateSlug) {
  return STATE_LINK_DATA[stateSlug]?.featuredCities || []
}

/** Returns secondary cities for a state, used in expanded city grids. */
export function getSecondaryCities(stateSlug) {
  return STATE_LINK_DATA[stateSlug]?.secondaryCities || []
}

/** Returns all major cities in a state except the current one — for ExploreStateSection. */
export function getOtherMajorCities(stateSlug, excludeCitySlug) {
  const featured = STATE_LINK_DATA[stateSlug]?.featuredCities || []
  return featured.filter(c => c.slug !== excludeCitySlug).slice(0, 5)
}
