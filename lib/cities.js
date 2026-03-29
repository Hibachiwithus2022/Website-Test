// ─── Master city/state data ───────────────────────────────────────────────────
// Add any new city here and it will automatically appear in grids + generate
// a dynamic city page at /locations/[state-slug]/[city-slug]

export const FEATURED_CITIES = [
  { city: 'Dallas',       state: 'Texas',          slug: 'dallas',       stateSlug: 'texas',         pop: '1.3M+' },
  { city: 'Houston',      state: 'Texas',          slug: 'houston',      stateSlug: 'texas',         pop: '2.3M+' },
  { city: 'Phoenix',      state: 'Arizona',        slug: 'phoenix',      stateSlug: 'arizona',       pop: '1.6M+' },
  { city: 'Atlanta',      state: 'Georgia',        slug: 'atlanta',      stateSlug: 'georgia',       pop: '500K+' },
  { city: 'Orlando',      state: 'Florida',        slug: 'orlando',      stateSlug: 'florida',       pop: '300K+' },
  { city: 'Charlotte',    state: 'North Carolina', slug: 'charlotte',    stateSlug: 'north-carolina',pop: '900K+' },
  { city: 'Austin',       state: 'Texas',          slug: 'austin',       stateSlug: 'texas',         pop: '960K+' },
  { city: 'Denver',       state: 'Colorado',       slug: 'denver',       stateSlug: 'colorado',      pop: '700K+' },
  { city: 'Nashville',    state: 'Tennessee',      slug: 'nashville',    stateSlug: 'tennessee',     pop: '700K+' },
  { city: 'Las Vegas',    state: 'Nevada',         slug: 'las-vegas',    stateSlug: 'nevada',        pop: '650K+' },
  { city: 'San Antonio',  state: 'Texas',          slug: 'san-antonio',  stateSlug: 'texas',         pop: '1.4M+' },
  { city: 'Jacksonville', state: 'Florida',        slug: 'jacksonville', stateSlug: 'florida',       pop: '950K+' },
  { city: 'Washington',   state: 'Washington, DC', slug: 'washington',   stateSlug: 'washington-dc', pop: '700K+' },
]

export const ALL_STATES = [
  { state: 'Alabama',        slug: 'alabama' },
  { state: 'Arizona',        slug: 'arizona' },
  { state: 'Arkansas',       slug: 'arkansas' },
  { state: 'California',     slug: 'california' },
  { state: 'Colorado',       slug: 'colorado' },
  { state: 'Connecticut',    slug: 'connecticut' },
  { state: 'Delaware',       slug: 'delaware' },
  { state: 'Florida',        slug: 'florida' },
  { state: 'Georgia',        slug: 'georgia' },
  { state: 'Idaho',          slug: 'idaho' },
  { state: 'Illinois',       slug: 'illinois' },
  { state: 'Indiana',        slug: 'indiana' },
  { state: 'Iowa',           slug: 'iowa' },
  { state: 'Kansas',         slug: 'kansas' },
  { state: 'Kentucky',       slug: 'kentucky' },
  { state: 'Louisiana',      slug: 'louisiana' },
  { state: 'Maine',          slug: 'maine' },
  { state: 'Maryland',       slug: 'maryland' },
  { state: 'Massachusetts',  slug: 'massachusetts' },
  { state: 'Michigan',       slug: 'michigan' },
  { state: 'Minnesota',      slug: 'minnesota' },
  { state: 'Mississippi',    slug: 'mississippi' },
  { state: 'Missouri',       slug: 'missouri' },
  { state: 'Montana',        slug: 'montana' },
  { state: 'Nebraska',       slug: 'nebraska' },
  { state: 'Nevada',         slug: 'nevada' },
  { state: 'New Hampshire',  slug: 'new-hampshire' },
  { state: 'New Jersey',     slug: 'new-jersey' },
  { state: 'New Mexico',     slug: 'new-mexico' },
  { state: 'New York',       slug: 'new-york' },
  { state: 'North Carolina', slug: 'north-carolina' },
  { state: 'North Dakota',   slug: 'north-dakota' },
  { state: 'Ohio',           slug: 'ohio' },
  { state: 'Oklahoma',       slug: 'oklahoma' },
  { state: 'Oregon',         slug: 'oregon' },
  { state: 'Pennsylvania',   slug: 'pennsylvania' },
  { state: 'Rhode Island',   slug: 'rhode-island' },
  { state: 'South Carolina', slug: 'south-carolina' },
  { state: 'South Dakota',   slug: 'south-dakota' },
  { state: 'Tennessee',      slug: 'tennessee' },
  { state: 'Texas',          slug: 'texas' },
  { state: 'Utah',           slug: 'utah' },
  { state: 'Vermont',        slug: 'vermont' },
  { state: 'Virginia',       slug: 'virginia' },
  { state: 'Washington',     slug: 'washington' },
  { state: 'West Virginia',  slug: 'west-virginia' },
  { state: 'Wisconsin',      slug: 'wisconsin' },
  { state: 'Wyoming',        slug: 'wyoming' },
  { state: 'Washington, DC', slug: 'washington-dc' },
]

export const CITIES_BY_STATE = {
  texas:          ['Houston','San Antonio','Dallas','Austin','Fort Worth','El Paso','Arlington','Corpus Christi','Plano','Laredo','Lubbock','Garland','Irving','Amarillo','Grand Prairie','McKinney','Frisco','Killeen'],
  arizona:        ['Phoenix','Tucson','Scottsdale','Mesa','Chandler','Tempe','Gilbert','Glendale','Peoria','Surprise','Goodyear','Flagstaff'],
  florida:        ['Miami','Orlando','Tampa','Jacksonville','Fort Lauderdale','St. Petersburg','Tallahassee','Hialeah','Cape Coral','Boca Raton','Naples','Sarasota'],
  georgia:        ['Atlanta','Augusta','Columbus','Macon','Savannah','Athens','Sandy Springs','Roswell'],
  'north-carolina':['Charlotte','Raleigh','Greensboro','Durham','Winston-Salem','Fayetteville','Cary','Wilmington','Asheville'],
  colorado:       ['Denver','Colorado Springs','Aurora','Fort Collins','Lakewood','Thornton','Arvada','Westminster','Boulder'],
  tennessee:      ['Nashville','Memphis','Knoxville','Chattanooga','Clarksville','Murfreesboro','Franklin','Jackson'],
  nevada:         ['Las Vegas','Henderson','Reno','North Las Vegas','Sparks','Carson City'],
  'washington-dc': ['Washington'],
  // Add more states as needed — city pages auto-generate from this data
}

export function cityToSlug(city) {
  return city.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export function slugToCity(slug) {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}
