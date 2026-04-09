const PROTEINS = ['Chicken', 'Steak', 'Shrimp', 'Salmon', 'Tofu']
const ADD_ONS = [
  { name: 'Lobster Tail',   price: '+$15/person' },
  { name: 'Filet Mignon',   price: '+$10/person' },
  { name: 'Scallops',       price: '+$5/person'  },
  { name: 'Extra Protein',  price: '+$15/person' },
  { name: 'Gyoza (6 pc)',   price: '+$10/person' },
  { name: 'Edamame',        price: '+$6/person'  },
  { name: 'Yakisoba Noodles',price: '+$5/person' },
  { name: 'Extra Fried Rice',price: '+$5/person' },
]

export default function CityPricing({ cityName, stateName }) {
  return (
    <section id="pricing" style={{ background: '#F8F5F2', padding: '5rem 1.5rem' }}>
      <div className="max-w-5xl mx-auto">

        <div className="text-center" style={{ marginBottom: '3.5rem' }}>
          <div className="red-pill" style={{ display: 'inline-block', marginBottom: '1rem' }}>Transparent Pricing</div>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', color: '#1A1209', lineHeight: 1.05 }}>
            How Much Does Hibachi<br />
            <span style={{ color: '#C8102E' }}>at Home Cost in {cityName}?</span>
          </h2>
          <p style={{ color: 'rgba(26,18,9,0.55)', maxWidth: '38rem', margin: '1rem auto 0', fontSize: '0.95rem', lineHeight: 1.75 }}>
            All packages include your chef, full propane grill, ingredients, sauces, plates, and cleanup. No surprises.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '1.5rem' }} className="md:grid-cols-3">

          {/* Standard */}
          <PricingCard
            label="Standard"
            price="$55"
            unit="/adult"
            sub="$30 per child (12 & under)"
            featured={false}
            tag={null}
            features={[
              'Choose 2 proteins per person',
              'Hibachi fried rice',
              'Grilled vegetables',
              'Salad & miso soup',
              'Yum yum & ginger sauce',
              'Full setup & cleanup',
            ]}
            cta="Get a Quote"
          />

          {/* Premium */}
          <PricingCard
            label="Premium"
            price="$65"
            unit="/adult"
            sub="$35 per child (12 & under)"
            featured={true}
            tag="Most Popular"
            tagColor="#C8102E"
            features={[
              'Choose 3 proteins per person',
              'Hibachi fried rice & noodles',
              'Grilled vegetables',
              'Salad & miso soup',
              'Edamame starter',
              'All sauces included',
              'Full setup & cleanup',
              'Priority booking',
            ]}
            cta="Book Premium"
          />

          {/* Elite */}
          <PricingCard
            label="Elite"
            price="Custom"
            unit=""
            sub="Corporate & large events"
            featured={false}
            tag="Enterprise"
            tagColor="#D4A843"
            features={[
              'Unlimited protein selection',
              'Filet mignon & lobster tail',
              'Multiple chef stations',
              'Full premium spread',
              'Gyoza & specialty appetizers',
              'Dedicated event coordinator',
              '200+ guest capacity',
              'Flexible scheduling',
            ]}
            cta="Contact Us"
          />

        </div>

        {/* Important notes */}
        <div style={{
          marginTop: '2rem',
          padding: '1.5rem 2rem',
          background: 'rgba(212,168,67,0.07)',
          border: '1px solid rgba(212,168,67,0.22)',
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.82rem', color: 'rgba(26,18,9,0.65)' }}>
              <strong style={{ color: '#D4A843' }}>$550 minimum</strong> — covers 8–10 guests at standard rate
            </span>
            <span style={{ width: 1, height: 18, background: 'rgba(26,18,9,0.12)', flexShrink: 0 }} />
            <span style={{ fontSize: '0.82rem', color: 'rgba(26,18,9,0.55)' }}>
              Children ages 0–3 eat free
            </span>
            <span style={{ width: 1, height: 18, background: 'rgba(26,18,9,0.12)', flexShrink: 0 }} />
            <span style={{ fontSize: '0.82rem', color: 'rgba(26,18,9,0.55)' }}>
              Travel fees may apply depending on location within {stateName}
            </span>
          </div>
        </div>

        {/* What's NOT included */}
        <div style={{
          marginTop: '1rem',
          padding: '1.25rem 2rem',
          background: '#FFFFFF',
          border: '1px solid rgba(26,18,9,0.08)',
          fontSize: '0.82rem', color: 'rgba(26,18,9,0.45)',
          textAlign: 'center', lineHeight: 1.8,
        }}>
          <strong style={{ color: 'rgba(26,18,9,0.65)' }}>Not included:</strong> Tables, chairs, drinks, and additional tableware. Chef arrives 5–10 minutes before event start to begin setup.
        </div>

        {/* Add-ons */}
        <div style={{ marginTop: '2.5rem', padding: '2rem 2.5rem', background: '#FFFFFF', border: '1px solid rgba(26,18,9,0.09)' }}>
          <div style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(26,18,9,0.45)', marginBottom: '1.25rem' }}>
            Popular Add-Ons
          </div>
          <div style={{ display: 'grid', gap: '0.6rem' }} className="sm:grid-cols-2 lg:grid-cols-4">
            {ADD_ONS.map((a) => (
              <div key={a.name} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(26,18,9,0.08)' }}>
                <span style={{ fontSize: '0.88rem', color: 'rgba(26,18,9,0.72)' }}>{a.name}</span>
                <span style={{ color: '#D4A843', fontWeight: 600, fontSize: '0.88rem' }}>{a.price}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

function PricingCard({ label, price, unit, sub, featured, tag, tagColor, features, cta }) {
  return (
    <div
      style={{
        position: 'relative', overflow: 'hidden',
        background: featured ? 'rgba(200,16,46,0.05)' : '#FFFFFF',
        border: `1px solid ${featured ? 'rgba(200,16,46,0.5)' : 'rgba(26,18,9,0.09)'}`,
        padding: '2.5rem 2rem',
        display: 'flex', flexDirection: 'column', height: '100%',
      }}
    >
      {tag && (
        <div style={{
          position: 'absolute', top: -1, left: '50%', transform: 'translateX(-50%)',
          background: tagColor, color: '#FFFFFF',
          fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.14em',
          textTransform: 'uppercase', padding: '0.25rem 1rem', whiteSpace: 'nowrap',
        }}>
          {tag}
        </div>
      )}
      <div style={{ marginTop: tag ? '1rem' : 0 }}>
        <div style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: featured ? '#C8102E' : 'rgba(26,18,9,0.45)', marginBottom: '1rem' }}>
          {label}
        </div>
        <div className="font-display" style={{ fontSize: '3.5rem', color: '#1A1209', lineHeight: 1 }}>
          {price}
          {unit && <span style={{ fontSize: '1.1rem', color: 'rgba(26,18,9,0.45)' }}>{unit}</span>}
        </div>
        <div style={{ fontSize: '0.78rem', color: 'rgba(26,18,9,0.38)', marginTop: '0.3rem', marginBottom: '1.75rem' }}>{sub}</div>
      </div>
      <ul style={{ fontSize: '0.9rem', color: 'rgba(26,18,9,0.7)', lineHeight: 2.1, flex: 1 }}>
        {features.map((f) => <li key={f}>✓&nbsp;&nbsp;{f}</li>)}
      </ul>
      <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: `1px solid ${featured ? 'rgba(200,16,46,0.2)' : 'rgba(26,18,9,0.09)'}` }}>
        <a href="#book" className={featured ? 'btn-primary' : 'btn-ghost'} style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
          {cta}
        </a>
      </div>
    </div>
  )
}
