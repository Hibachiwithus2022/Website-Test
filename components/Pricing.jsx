'use client'
import RevealWrapper from './RevealWrapper'

const TIERS = [
  {
    label:    'Standard',
    price:    '$55',
    unit:     '/adult',
    child:    '$30/child',
    tag:      null,
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
    featured: false,
  },
  {
    label:    'Premium',
    price:    '$65',
    unit:     '/adult',
    child:    '$35/child',
    tag:      'Most Popular',
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
    featured: true,
  },
  {
    label:    'Elite',
    price:    'Custom',
    unit:     '',
    child:    'Corporate & large events',
    tag:      'Enterprise',
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
    featured: false,
  },
]

const ADD_ONS = [
  { name: 'Scallops',        price: '+$5/person'  },
  { name: 'Lobster Tail',    price: '+$15/person' },
  { name: 'Filet Mignon',    price: '+$10/person' },
  { name: 'Gyoza (6 pc)',    price: '+$10/person' },
  { name: 'Yakisoba Noodles',price: '+$5/person'  },
  { name: 'Extra Fried Rice', price: '+$5/person' },
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="section"
      style={{ background: 'linear-gradient(180deg,#1E1410 0%,#1A1209 100%)' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <RevealWrapper>
            <div className="red-pill" style={{ display: 'inline-block' }}>Transparent Pricing</div>
          </RevealWrapper>
          <RevealWrapper delay={0.1}>
            <h2 className="section-title">
              How Much Does<br />
              <span style={{ color: '#C8102E' }}>Hibachi at Home Cost?</span>
            </h2>
          </RevealWrapper>
          <RevealWrapper delay={0.2}>
            <p style={{ color: 'rgba(245,239,224,0.58)', maxWidth: '40rem', margin: '1rem auto 0' }}>
              All packages include chef, equipment, setup, and full cleanup. You provide the space — we bring everything else.
            </p>
          </RevealWrapper>
        </div>

        {/* Minimum notice */}
        <RevealWrapper>
          <div
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem',
              flexWrap: 'wrap', marginBottom: '2.5rem',
              background: 'rgba(212,168,67,0.08)', border: '1px solid rgba(212,168,67,0.25)',
              padding: '0.85rem 2rem',
            }}
          >
            <span style={{ fontSize: '0.8rem', color: 'rgba(245,239,224,0.6)', letterSpacing: '0.06em' }}>
              <strong style={{ color: '#D4A843' }}>$550 Minimum</strong> — covers 8–10 guests at standard rate
            </span>
            <span style={{ width: 1, height: 20, background: 'rgba(245,239,224,0.15)' }} />
            <span style={{ fontSize: '0.8rem', color: 'rgba(245,239,224,0.6)' }}>
              Travel fees may apply outside metro areas
            </span>
          </div>
        </RevealWrapper>

        {/* Tier cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {TIERS.map((tier, i) => (
            <RevealWrapper key={i} delay={i * 0.1}>
              <div
                style={{
                  position: 'relative', overflow: 'hidden',
                  background: tier.featured ? 'rgba(200,16,46,0.08)' : 'rgba(245,239,224,0.04)',
                  border: `1px solid ${tier.featured ? 'rgba(200,16,46,0.5)' : 'rgba(245,239,224,0.09)'}`,
                  padding: '2.5rem 2rem',
                  transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1)',
                  height: '100%', display: 'flex', flexDirection: 'column',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                {/* Tag badge */}
                {tier.tag && (
                  <div style={{
                    position: 'absolute', top: -1, left: '50%', transform: 'translateX(-50%)',
                    background: tier.tagColor, color: '#F5EFE0',
                    fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.14em',
                    textTransform: 'uppercase', padding: '0.25rem 1rem',
                    whiteSpace: 'nowrap',
                  }}>
                    {tier.tag}
                  </div>
                )}

                <div style={{ marginTop: tier.tag ? '1rem' : '0' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: tier.featured ? '#C8102E' : 'rgba(245,239,224,0.45)', marginBottom: '1rem' }}>
                    {tier.label}
                  </div>
                  <div className="font-display" style={{ fontSize: '3.5rem', color: '#F5EFE0', lineHeight: 1 }}>
                    {tier.price}
                    {tier.unit && <span style={{ fontSize: '1.2rem', color: 'rgba(245,239,224,0.45)' }}>{tier.unit}</span>}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(245,239,224,0.4)', marginTop: '0.3rem', marginBottom: '1.75rem' }}>
                    {tier.child}
                  </div>
                </div>

                <ul style={{ fontSize: '0.9rem', color: 'rgba(245,239,224,0.72)', lineHeight: 2.1, flex: 1 }}>
                  {tier.features.map((f, j) => (
                    <li key={j}>✓&nbsp;&nbsp;{f}</li>
                  ))}
                </ul>

                <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: `1px solid ${tier.featured ? 'rgba(200,16,46,0.2)' : 'rgba(245,239,224,0.08)'}` }}>
                  <a
                    href="#book"
                    className={tier.featured ? 'btn-primary' : 'btn-ghost'}
                    style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
                  >
                    {tier.cta}
                  </a>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>

        {/* Add-ons */}
        <RevealWrapper delay={0.3}>
          <div style={{
            background: 'rgba(245,239,224,0.03)', border: '1px solid rgba(245,239,224,0.07)',
            padding: '2rem 2.5rem',
          }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(245,239,224,0.45)', marginBottom: '1.25rem' }}>
              Popular Add-Ons
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
              {ADD_ONS.map((a, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.6rem', borderBottom: '1px solid rgba(245,239,224,0.06)' }}>
                  <span style={{ fontSize: '0.9rem', color: 'rgba(245,239,224,0.75)' }}>{a.name}</span>
                  <span style={{ color: '#D4A843', fontWeight: 600, fontSize: '0.9rem' }}>{a.price}</span>
                </div>
              ))}
            </div>
          </div>
        </RevealWrapper>

      </div>
    </section>
  )
}
