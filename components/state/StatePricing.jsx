export default function StatePricing({ state }) {
  const tiers = [
    {
      label: 'Standard',
      price: '$55',
      unit: '/adult',
      child: '$30/child (12 & under)',
      featured: false,
      tag: null,
      tagColor: null,
      features: [
        'Choose 2 proteins per person',
        'Hibachi fried rice',
        'Grilled vegetables',
        'Salad & miso soup',
        'Yum yum & ginger sauce',
        'Full setup & cleanup',
      ],
      cta: 'Get a Quote',
    },
    {
      label: 'Premium',
      price: '$65',
      unit: '/adult',
      child: '$35/child (12 & under)',
      featured: true,
      tag: 'Most Popular',
      tagColor: '#C8102E',
      features: [
        'Choose 3 proteins per person',
        'Hibachi fried rice & noodles',
        'Grilled vegetables',
        'Salad & miso soup',
        'Edamame starter',
        'All sauces included',
        'Full setup & cleanup',
        'Priority booking',
      ],
      cta: 'Book Premium',
    },
    {
      label: 'Elite',
      price: 'Custom',
      unit: '',
      child: 'Corporate & large events',
      featured: false,
      tag: 'Enterprise',
      tagColor: '#D4A843',
      features: [
        'Unlimited protein selection',
        'Filet mignon & lobster tail',
        'Multiple chef stations',
        'Full premium spread',
        'Gyoza & specialty appetizers',
        'Dedicated event coordinator',
        '200+ guest capacity',
        'Flexible scheduling',
      ],
      cta: 'Contact Us',
    },
  ]

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
            All packages include your chef, all equipment, ingredients, setup, and cleanup. No hidden fees. Quoted upfront.
          </p>
        </div>

        {/* Minimum notice */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem',
          flexWrap: 'wrap', marginBottom: '2.5rem',
          background: 'rgba(212,168,67,0.08)', border: '1px solid rgba(212,168,67,0.25)',
          padding: '0.85rem 2rem',
        }}>
          <span style={{ fontSize: '0.8rem', color: 'rgba(26,18,9,0.6)', letterSpacing: '0.06em' }}>
            <strong style={{ color: '#D4A843' }}>$550 Minimum</strong> — covers 8–10 guests at standard rate
          </span>
          <span style={{ width: 1, height: 20, background: 'rgba(26,18,9,0.15)' }} />
          <span style={{ fontSize: '0.8rem', color: 'rgba(26,18,9,0.6)' }}>
            Travel fees may apply outside metro areas in {state}
          </span>
        </div>

        {/* Tier cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.label}
              style={{
                position: 'relative', overflow: 'hidden',
                background: tier.featured ? 'rgba(200,16,46,0.06)' : '#FFFFFF',
                border: `1px solid ${tier.featured ? 'rgba(200,16,46,0.5)' : 'rgba(26,18,9,0.09)'}`,
                padding: '2.5rem 2rem',
                display: 'flex', flexDirection: 'column', height: '100%',
              }}
            >
              {tier.tag && (
                <div style={{
                  position: 'absolute', top: -1, left: '50%', transform: 'translateX(-50%)',
                  background: tier.tagColor, color: '#FFFFFF',
                  fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.14em',
                  textTransform: 'uppercase', padding: '0.25rem 1rem', whiteSpace: 'nowrap',
                }}>
                  {tier.tag}
                </div>
              )}
              <div style={{ marginTop: tier.tag ? '1rem' : '0' }}>
                <div style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: tier.featured ? '#C8102E' : 'rgba(26,18,9,0.45)', marginBottom: '1rem' }}>
                  {tier.label}
                </div>
                <div className="font-display" style={{ fontSize: '3.5rem', color: '#1A1209', lineHeight: 1 }}>
                  {tier.price}
                  {tier.unit && <span style={{ fontSize: '1.2rem', color: 'rgba(26,18,9,0.45)' }}>{tier.unit}</span>}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(26,18,9,0.4)', marginTop: '0.3rem', marginBottom: '1.75rem' }}>
                  {tier.child}
                </div>
              </div>
              <ul style={{ fontSize: '0.9rem', color: 'rgba(26,18,9,0.72)', lineHeight: 2.1, flex: 1 }}>
                {tier.features.map((f) => (
                  <li key={f}>✓&nbsp;&nbsp;{f}</li>
                ))}
              </ul>
              <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: `1px solid ${tier.featured ? 'rgba(200,16,46,0.2)' : 'rgba(26,18,9,0.08)'}` }}>
                <a
                  href="#book"
                  className={tier.featured ? 'btn-primary' : 'btn-ghost'}
                  style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
                >
                  {tier.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
