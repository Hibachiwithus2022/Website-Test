const PROTEINS = [
  'Chicken', 'Steak', 'Shrimp', 'Scallops', 'Salmon', 'Tofu',
  'Filet Mignon (+$5)', 'Lobster Tail (+$10)',
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

export default function StatePricing({ state }) {
  return (
    <section id="pricing" style={{ background: '#F8F5F2', padding: '4.5rem 1.5rem' }}>
      <div className="max-w-5xl mx-auto">

        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <div className="red-pill" style={{ display: 'inline-block', marginBottom: '1rem' }}>Transparent Pricing</div>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', color: '#1A1209', lineHeight: 1.05 }}>
            Hibachi at Home in {state}<br />
            <span style={{ color: '#C8102E' }}>— What Does It Cost?</span>
          </h2>
          <p style={{ color: 'rgba(26,18,9,0.55)', maxWidth: '40rem', margin: '1rem auto 0', fontSize: '0.95rem', lineHeight: 1.75 }}>
            One simple rate. Everything included — chef, grill, ingredients, full setup and cleanup. No hidden fees.
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

            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <div>
                <div className="font-display" style={{ fontSize: '3.8rem', color: '#1A1209', lineHeight: 1 }}>
                  $60<span style={{ fontSize: '1.2rem', color: 'rgba(26,18,9,0.4)' }}>/person</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(26,18,9,0.5)', marginTop: '0.2rem' }}>Adults</div>
              </div>
              <div style={{ width: 1, background: 'rgba(26,18,9,0.08)', alignSelf: 'stretch', flexShrink: 0 }} />
              <div>
                <div className="font-display" style={{ fontSize: '3.8rem', color: '#1A1209', lineHeight: 1 }}>
                  $30<span style={{ fontSize: '1.2rem', color: 'rgba(26,18,9,0.4)' }}>/child</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(26,18,9,0.5)', marginTop: '0.2rem' }}>12 &amp; under</div>
              </div>
            </div>

            <div style={{
              background: 'rgba(212,168,67,0.08)', border: '1px solid rgba(212,168,67,0.28)',
              padding: '0.85rem 1.25rem', marginBottom: '2rem',
              display: 'flex', alignItems: 'center', gap: '0.6rem',
            }}>
              <span style={{ color: '#D4A843' }}>★</span>
              <span style={{ fontSize: '0.85rem', color: 'rgba(26,18,9,0.7)' }}>
                <strong style={{ color: '#1A1209' }}>$600 minimum</strong> for all parties
              </span>
            </div>

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

            <div style={{ borderTop: '1px solid rgba(26,18,9,0.08)', paddingTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '2rem' }}>
              {[
                'Gratuity is not included',
                `Travel fees depend on location in ${state}`,
              ].map((note, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'rgba(26,18,9,0.5)' }}>
                  <span style={{ color: 'rgba(26,18,9,0.3)', fontSize: '0.7rem' }}>ⓘ</span>
                  {note}
                </div>
              ))}
            </div>

            <a href="/booking" className="btn-primary" style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
              Book Your Chef in {state}
            </a>
          </div>

          {/* ── Right column ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

            <div style={{ background: '#FFFFFF', border: '1px solid rgba(26,18,9,0.09)', padding: '2rem' }}>
              <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(26,18,9,0.4)', marginBottom: '1rem' }}>
                Protein Choices — Pick 2
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {PROTEINS.map((p, i) => (
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

            <div style={{ background: '#FFFFFF', border: '1px solid rgba(26,18,9,0.09)', padding: '2rem' }}>
              <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(26,18,9,0.4)', marginBottom: '1rem' }}>
                Add-Ons (per order)
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {ADD_ONS.map((a, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.6rem', borderBottom: i < ADD_ONS.length - 1 ? '1px solid rgba(26,18,9,0.07)' : 'none' }}>
                    <span style={{ fontSize: '0.88rem', color: 'rgba(26,18,9,0.72)' }}>{a.name}</span>
                    <span style={{ color: '#D4A843', fontWeight: 700, fontSize: '0.88rem' }}>{a.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid rgba(26,18,9,0.09)', padding: '2rem' }}>
              <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(26,18,9,0.4)', marginBottom: '1rem' }}>
                Appetizers
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {APPETIZERS.map((a, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.6rem', borderBottom: i < APPETIZERS.length - 1 ? '1px solid rgba(26,18,9,0.07)' : 'none' }}>
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
