import { getAllPosts } from '../../lib/blog';
import { CITIES_BY_STATE, ALL_STATES } from '../../lib/cities';

// High-traffic city slugs that earn a higher sitemap priority
const MAJOR_CITY_SLUGS = new Set([
  // Texas
  'dallas','houston','austin','san-antonio','fort-worth',
  'katy','sugar-land','the-woodlands','frisco',
  // Florida
  'miami','orlando','tampa','jacksonville','fort-lauderdale',
  'sarasota','naples','west-palm-beach','destin','st-petersburg',
  'boca-raton','cape-coral','key-west','clearwater',
  // National
  'new-york','los-angeles','chicago','phoenix','philadelphia',
  'san-diego','san-jose','seattle','denver','las-vegas',
  // North Carolina
  'charlotte','raleigh','durham','asheville','outer-banks',
  'wilmington','greensboro','cary','winston-salem','lake-norman',
  'wrightsville-beach','nags-head','kill-devil-hills',
  // New Jersey
  'jersey-city','hoboken','princeton','cherry-hill','edison',
  'morristown','montclair','asbury-park','cape-may','red-bank',
  'stone-harbor','avalon','spring-lake',
  // New York
  'new-york-city','brooklyn','queens','the-bronx','staten-island',
  'white-plains','scarsdale','bronxville','southampton','east-hampton',
  'montauk','lake-george','lake-placid','saratoga-springs','buffalo',
  'rochester','albany','rhinebeck','woodstock','great-neck',
  // Delaware
  'wilmington','newark','dover','rehoboth-beach','lewes','bethany-beach',
  'hockessin','greenville','middletown','bear','pike-creek','dewey-beach',
  // Oregon
  'portland','bend','eugene','salem','lake-oswego','cannon-beach',
  'beaverton','hillsboro','mcminnville','lincoln-city',
]);

export const dynamic = 'force-dynamic';

const BASE_URL = 'https://hibachiconnect.com';

// Static pages — add new top-level pages here when created
const STATIC_PAGES = [
  { url: '/',            changefreq: 'weekly',  priority: '1.0' },
  { url: '/booking',     changefreq: 'monthly', priority: '0.9' },
  { url: '/menu',        changefreq: 'monthly', priority: '0.8' },
  { url: '/blog',        changefreq: 'weekly',  priority: '0.8' },
  { url: '/faq',         changefreq: 'monthly', priority: '0.7' },
  { url: '/contact',     changefreq: 'monthly', priority: '0.7' },
  { url: '/locations',   changefreq: 'monthly', priority: '0.7' },
  { url: '/estimation',  changefreq: 'monthly', priority: '0.6' },
  { url: '/terms',       changefreq: 'yearly',  priority: '0.3' },
];

function entry(loc, lastmod, changefreq, priority) {
  return `  <url>
    <loc>${BASE_URL}${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export async function GET() {
  const today = new Date().toISOString().split('T')[0];

  // 1. Static pages
  const staticEntries = STATIC_PAGES.map(({ url, changefreq, priority }) =>
    entry(url, today, changefreq, priority)
  );

  // 2. Blog posts — dynamic from content/blog/
  const posts = getAllPosts();
  const blogEntries = posts.map(post =>
    entry(`/blog/${post.slug}`, post.date || today, 'monthly', '0.6')
  );

  // 3. Location pages — dynamic from lib/cities
  const locationEntries = ALL_STATES.flatMap(({ slug: stateSlug }) => {
    const stateEntry = entry(`/locations/${stateSlug}`, today, 'monthly', '0.6');
    const cities = CITIES_BY_STATE[stateSlug] ?? [];
    const cityEntries = cities.map(city => {
      const citySlug = city.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const priority = MAJOR_CITY_SLUGS.has(citySlug) ? '0.7' : '0.6';
      return entry(`/locations/${stateSlug}/${citySlug}`, today, 'monthly', priority);
    });
    return [stateEntry, ...cityEntries];
  });

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...staticEntries,
    ...blogEntries,
    ...locationEntries,
    '</urlset>',
  ].join('\n');

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
