const PRICING_VARIANTS = [
  { pill: 'Transparent Pricing',  h2a: 'How Much Does Hibachi',       h2b: (city) => `at Home Cost in ${city}?` },
  { pill: 'Simple Flat Rate',     h2a: 'Private Hibachi Chef in',     h2b: (city) => `${city} — Starting at $60` },
  { pill: 'No Hidden Fees',       h2a: 'What Does a Hibachi Chef',    h2b: (city) => `Cost in ${city}?` },
  { pill: 'Event Pricing',        h2a: 'Your Hibachi Party in',       h2b: (city) => `${city} Starts at $60/Person` },
  { pill: 'Chef Pricing',         h2a: 'Teppanyaki at Home in',       h2b: (city) => `${city} — One Clear Rate` },
]

const ONTARIO_PRICING_VARIANTS = [
  { pill: 'Transparent Pricing',  h2a: 'How Much Does Hibachi',       h2b: (city) => `at Home Cost in ${city}?` },
  { pill: 'Simple Flat Rate',     h2a: 'Private Hibachi Chef in',     h2b: (city) => `${city} — Starting at $78 CAD` },
  { pill: 'No Hidden Fees',       h2a: 'What Does a Hibachi Chef',    h2b: (city) => `Cost in ${city}?` },
  { pill: 'Event Pricing',        h2a: 'Your Hibachi Party in',       h2b: (city) => `${city} Starts at $78 CAD/Person` },
  { pill: 'Chef Pricing',         h2a: 'Teppanyaki at Home in',       h2b: (city) => `${city} — One Clear Rate` },
]

const ONTARIO_PROTEINS = [
  'Chicken', 'Beef Striploin', 'Shrimp', 'Salmon', 'Tofu',
  'Filet Mignon (+$8 CAD)', 'Lobster Tail (+$15 CAD)',
]

const ONTARIO_ADD_ONS = [
  { name: 'Extra Protein (any)',  price: '$20 CAD/order' },
  { name: 'Filet Mignon',        price: '+$8 CAD/person'  },
  { name: 'Lobster Tail',        price: '+$15 CAD/person'  },
  { name: 'Yakisoba Noodles',    price: '$8 CAD/order'   },
]

const ONTARIO_APPETIZERS = [
  { name: 'Gyoza (8 pc)',   price: '$15 CAD' },
  { name: 'Edamame',        price: '$8 CAD'  },
]

const PRICING_SUBTEXT = [
  'One simple rate. Everything included — chef, grill, ingredients, full setup and cleanup. No surprises.',
  'A single per-person rate covers your chef, grill, all ingredients, setup, and full cleanup.',
  'Flat rate pricing with nothing hidden — your quote is locked before the event, no add-ons required.',
  'All-inclusive pricing from arrival to cleanup. Your chef brings everything; you just enjoy the night.',
  'One rate. Full service. Your teppanyaki chef arrives with everything — and leaves the space spotless.',
]

const PROTEINS = [
  'Chicken', 'Steak', 'Shrimp', 'Scallops', 'Salmon', 'Tofu',
  'Filet Mignon (+$10)', 'Lobster Tail (+$15)',
]

const ADD_ONS = [
  { name: 'Extra Protein (any)',  price: '$15/order' },
  { name: 'Filet Mignon',        price: '$20/order'  },
  { name: 'Lobster Tail',        price: '$25/order'  },
  { name: 'Yakisoba Noodles',    price: '$5/order'   },
]

const APPETIZERS = [
  { name: 'Gyoza (8 pc)',   price: '$10' },
  { name: 'Edamame',        price: '$6'  },
]

export default function CityPricing({ cityName, stateName, variant = 0, isOntario = false }) {
  const pvArr  = isOntario ? ONTARIO_PRICING_VARIANTS : PRICING_VARIANTS
  const pv     = pvArr[variant % pvArr.length]
  const proteins    = isOntario ? ONTARIO_PROTEINS    : PROTEINS
  const addOns      = isOntario ? ONTARIO_ADD_ONS     : ADD_ONS
  const appetizers  = isOntario ? ONTARIO_APPETIZERS  : APPETIZERS

  return (
    <section id="pricing" style={{ background: '#F8F5F2', padding: '5rem 1.5rem' }}>
      <div className="max-w-5xl mx-auto">

        <div className="text-center" style={{ marginBottom: '3.5rem' }}>
          <div className="red-pill" style={{ display: 'inline-block', marginBottom: '1rem' }}>{pv.pill}</div>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', color: '#1A1209', lineHeight: 1.05 }}>
            {pv.h2a}<br />
            <span style={{ color: '#C8102E' }}>{pv.h2b(cityName)}</span>
          </h2>
          <p style={{ color: 'rgba(26,18,9,0.55)', maxWidth: '38rem', margin: '1rem auto 0', fontSize: '0.95rem', lineHeight: 1.75 }}>
            {PRICING_SUBTEXT[variant % PRICING_SUBTEXT.length]}
          </p>
        </div>

        <div style={{ display: 'grid', gap: '1.5rem', alignItems: 'start' }} className="lg:grid-cols-2">

          {/* ── Main pricing card ── */}
          <div style={{
            background: '#FFFFFF',
            border: '2px solid rgba(200,16,46,0.2)',
            padding: '2.5rem',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 4px 32px rgba(200,16,46,0.08), 0 1px 4px rgba(26,18,9,0.06)',
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(to right, #C8102E, #D4A843)' }} />

            <div className="red-pill" style={{ display: 'inline-block', marginBottom: '1.5rem' }}>Per Person Rate</div>

            {/* Prices */}
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <div>
                <div className="font-display" style={{ fontSize: '3.8rem', color: '#1A1209', lineHeight: 1 }}>
                  {isOntario ? '$78' : '$60'}<span style={{ fontSize: '1.2rem', color: 'rgba(26,18,9,0.4)' }}>/person</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(26,18,9,0.5)', marginTop: '0.2rem' }}>{isOntario ? 'Adults (CAD)' : 'Adults'}</div>
              </div>
              <div style={{ width: 1, background: 'rgba(26,18,9,0.08)', alignSelf: 'stretch', flexShrink: 0 }} />
              <div>
                <div className="font-display" style={{ fontSize: '3.8rem', color: '#1A1209', lineHeight: 1 }}>
                  {isOntario ? '$40' : '$30'}<span style={{ fontSize: '1.2rem', color: 'rgba(26,18,9,0.4)' }}>/child</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(26,18,9,0.5)', marginTop: '0.2rem' }}>{isOntario ? 'Ages 4–12 (CAD)' : '12 & under'}</div>
              </div>
            </div>

            {/* Minimum */}
            <div style={{
              background: 'rgba(212,168,67,0.08)', border: '1px solid rgba(212,168,67,0.28)',
              padding: '0.85rem 1.25rem', marginBottom: '2rem',
              display: 'flex', alignItems: 'center', gap: '0.6rem',
            }}>
              <span style={{ color: '#D4A843' }}>★</span>
              <span style={{ fontSize: '0.85rem', color: 'rgba(26,18,9,0.7)' }}>
                <strong style={{ color: '#1A1209' }}>{isOntario ? '$780 CAD minimum' : '$600 minimum'}</strong> for all parties
                {isOntario && <span style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(26,18,9,0.5)', marginTop: '0.2rem' }}>Children under 3 eat free</span>}
              </span>
            </div>

            {/* Includes */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(26,18,9,0.4)', marginBottom: '0.85rem' }}>
                What's Included
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  'Choose 2 proteins per person',
                  'Salad, fried rice & grilled vegetables',
                  'All sauces & condiments',
                  'Full setup & cleanup',
                  'Professional chef with live show',
                ].map((f, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem', color: 'rgba(26,18,9,0.75)' }}>
                    <span style={{ color: '#C8102E', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Notes */}
            <div style={{ borderTop: '1px solid rgba(26,18,9,0.08)', paddingTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '2rem' }}>
              {[
                isOntario ? 'All prices in Canadian dollars (CAD)' : 'Gratuity is not included',
                `Travel fees depend on location in ${stateName}`,
              ].map((note, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'rgba(26,18,9,0.5)' }}>
                  <span style={{ color: 'rgba(26,18,9,0.3)', fontSize: '0.7rem' }}>ⓘ</span>
                  {note}
                </div>
              ))}
            </div>

            <a href="/booking" className="btn-primary" style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
              Book Your Chef in {cityName}
            </a>
            <p style={{ textAlign: 'center', marginTop: '0.85rem', fontSize: '0.8rem', color: 'rgba(26,18,9,0.45)' }}>
              Not sure how much your event costs?{' '}
              <a href="/estimation" style={{ color: '#C8102E', fontWeight: 600, textDecoration: 'none' }}>Get an instant estimate →</a>
            </p>
          </div>

          {/* ── Right column: proteins + add-ons + appetizers ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

            {/* Proteins */}
            <div style={{ background: '#FFFFFF', border: '1px solid rgba(26,18,9,0.09)', padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1rem' }}>
                <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(26,18,9,0.4)' }}>
                  Protein Choices — Pick 2
                </div>
                <a href="/menu" style={{ fontSize: '0.78rem', color: '#C8102E', fontWeight: 600, textDecoration: 'none' }}>Full menu →</a>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {proteins.map((p, i) => (
                  <span key={i} style={{
                    display: 'inline-block', padding: '0.35rem 0.9rem',
                    fontSize: '0.82rem', fontWeight: 500,
                    background: p.includes('+$') ? 'rgba(212,168,67,0.08)' : 'rgba(200,16,46,0.06)',
                    border: `1px solid ${p.includes('+$') ? 'rgba(212,168,67,0.25)' : 'rgba(200,16,46,0.18)'}`,
                    color: p.includes('+$') ? '#9A7B2B' : 'rgba(26,18,9,0.75)',
                  }}>
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* Add-ons */}
            <div style={{ background: '#FFFFFF', border: '1px solid rgba(26,18,9,0.09)', padding: '2rem' }}>
              <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(26,18,9,0.4)', marginBottom: '1rem' }}>
                Add-Ons (per order)
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {addOns.map((a, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.6rem', borderBottom: i < addOns.length - 1 ? '1px solid rgba(26,18,9,0.07)' : 'none' }}>
                    <span style={{ fontSize: '0.88rem', color: 'rgba(26,18,9,0.72)' }}>{a.name}</span>
                    <span style={{ color: '#D4A843', fontWeight: 700, fontSize: '0.88rem' }}>{a.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Appetizers */}
            <div style={{ background: '#FFFFFF', border: '1px solid rgba(26,18,9,0.09)', padding: '2rem' }}>
              <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(26,18,9,0.4)', marginBottom: '1rem' }}>
                Appetizers
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {appetizers.map((a, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.6rem', borderBottom: i < appetizers.length - 1 ? '1px solid rgba(26,18,9,0.07)' : 'none' }}>
                    <span style={{ fontSize: '0.88rem', color: 'rgba(26,18,9,0.72)' }}>{a.name}</span>
                    <span style={{ color: '#D4A843', fontWeight: 700, fontSize: '0.88rem' }}>{a.price}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
