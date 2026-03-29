'use client'
import { useState } from 'react'
import RevealWrapper from './RevealWrapper'

const FAQS = [
  {
    q: 'How much does hibachi at home cost?',
    a: 'Our standard rate is $55 per adult and $30 per child (under 12). There\'s a minimum order of $550, which covers approximately 8–10 guests. Premium packages start at $65/adult and include more proteins and extras. Travel fees may apply outside major metro areas. We provide a full, itemized quote before you confirm.',
  },
  {
    q: 'Do you travel to my city? Do you serve my area?',
    a: 'Hibachi Connect serves all 50 U.S. states — from major metros like Houston, Phoenix, and Atlanta to smaller cities and suburbs. We don\'t currently serve Hawaii or Alaska. Search your city above or contact us to confirm availability in your specific area.',
  },
  {
    q: 'What do I need to provide?',
    a: 'Just tables, chairs, and dinnerware for your guests. We bring everything else: the portable teppan grill, cooking equipment, all ingredients, sauces, and the chef. Setup takes about 30 minutes. We also handle full cleanup when we\'re done.',
  },
  {
    q: 'Can hibachi be done indoors?',
    a: 'We generally recommend outdoor or well-ventilated spaces — patios, backyards, driveways, covered decks — due to smoke and open flame. For indoor events, a venue with commercial ventilation (like a banquet hall or event space) can work. Contact us with your setup details and we\'ll let you know if it\'s feasible.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'We recommend booking at least 1–2 weeks ahead to secure your preferred date and chef. For large events (50+ guests) or holiday weekends, 4–6 weeks is ideal. Last-minute bookings are sometimes possible — reach out and we\'ll check availability.',
  },
  {
    q: 'What proteins are included in the menu?',
    a: 'All packages let you choose from chicken, shrimp, salmon, steak, and veggie options. Premium add-ons include filet mignon (+$10), scallops (+$5), and lobster tail (+$15). Every plate includes hibachi fried rice, grilled vegetables, yum yum sauce, ginger sauce, miso soup, and garden salad.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(prev => prev === i ? null : i)

  return (
    <section
      id="faq"
      className="section"
      style={{ background: 'linear-gradient(180deg,#1E1410 0%,#1A1209 100%)' }}
    >
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-14">
          <RevealWrapper>
            <div className="red-pill" style={{ display: 'inline-block' }}>Common Questions</div>
          </RevealWrapper>
          <RevealWrapper delay={0.1}>
            <h2 className="section-title">
              Hibachi at Home — <span style={{ color: '#C8102E' }}>FAQ</span>
            </h2>
          </RevealWrapper>
          <RevealWrapper delay={0.2}>
            <p style={{ color: 'rgba(245,239,224,0.55)', maxWidth: '36rem', margin: '1rem auto 0' }}>
              Everything you need to know about booking a private hibachi chef at home.
            </p>
          </RevealWrapper>
        </div>

        <RevealWrapper delay={0.1}>
          <div>
            {FAQS.map((faq, i) => (
              <div
                key={i}
                style={{ borderBottom: '1px solid rgba(245,239,224,0.08)' }}
              >
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                  style={{
                    width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '1.4rem 0',
                    color: openIndex === i ? '#C8102E' : '#F5EFE0',
                    fontFamily: 'inherit', fontSize: '1rem', fontWeight: 500, textAlign: 'left',
                    transition: 'color 0.2s',
                  }}
                >
                  {/* Question — wrapped in h3 for SEO */}
                  <h3 style={{ margin: 0, fontSize: 'inherit', fontWeight: 'inherit', color: 'inherit' }}>
                    {faq.q}
                  </h3>
                  <div style={{
                    flexShrink: 0, width: 24, height: 24, marginLeft: '1rem',
                    border: `1px solid ${openIndex === i ? '#C8102E' : 'rgba(245,239,224,0.25)'}`,
                    background: openIndex === i ? 'rgba(200,16,46,0.15)' : 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0)',
                    transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), border-color 0.2s, background 0.2s',
                  }}>
                    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 12 12">
                      <line x1="6" y1="1" x2="6" y2="11"/><line x1="1" y1="6" x2="11" y2="6"/>
                    </svg>
                  </div>
                </button>

                {/* Answer */}
                <div
                  style={{
                    maxHeight: openIndex === i ? '400px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.35s ease',
                  }}
                >
                  <p style={{ paddingBottom: '1.4rem', color: 'rgba(245,239,224,0.65)', lineHeight: 1.78, fontSize: '0.95rem' }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </RevealWrapper>

      </div>
    </section>
  )
}
