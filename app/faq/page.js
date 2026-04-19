'use client'
import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const FAQS = [
  {
    q: 'How much does hibachi at home cost?',
    a: '$60 per adult · $30 per child (ages 4–12) · Free for ages 3 and under. A $600 event minimum applies to all bookings. Travel fees may apply for locations more than 30 miles from our nearest chef. Use our Estimation page for an instant quote.',
  },
  {
    q: 'Do you bring tables and chairs?',
    a: 'No — you provide tables and chairs for your guests. We bring everything else: the portable teppanyaki grill, propane, all ingredients, sauces, cooking utensils, serving trays, chopsticks, and cleanup supplies.',
  },
  {
    q: 'What is included in the price?',
    a: 'Every event includes a professional chef, portable teppan grill, propane, all proteins (your choice of 2 per guest), hibachi fried rice, grilled vegetables, house salad with ginger dressing, yum yum sauce, ginger sauce, teriyaki glaze, soy sauce, full setup, and complete post-event cleanup.',
  },
  {
    q: 'Can you cook indoors?',
    a: 'Yes, with the right setup. We recommend outdoor or covered spaces (patios, backyards, driveways). For indoor events, you need at least 10×10 ft of space with good ventilation — a covered patio, open garage, or commercial banquet space all work well. Contact us with your setup details and we\'ll confirm.',
  },
  {
    q: 'How long does the experience last?',
    a: 'The chef arrives 30–45 minutes before guests eat to set up. The hibachi show and dinner itself runs 90 minutes to 2 hours. Cleanup takes another 20–30 minutes after the last guest is served.',
  },
  {
    q: 'Do you require a deposit?',
    a: 'No deposit is required to request a booking. Payment is due the day of the event, before service begins. We accept Cash or Zelle only — no credit cards.',
  },
  {
    q: 'How far do you travel?',
    a: 'We serve all 50 U.S. states (excluding Hawaii and Alaska). Travel fees may apply for locations more than 30 miles from our nearest chef base. All travel fees are disclosed upfront before you confirm your booking.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'We recommend 1–2 weeks ahead for weekday events and 3–4 weeks for weekend or holiday dates. Summer and holiday weekends book fast. Last-minute bookings are sometimes possible — contact us and we\'ll check availability.',
  },
  {
    q: 'What proteins can guests choose from?',
    a: 'Every guest picks 2 proteins from the standard menu: chicken, steak (sirloin), shrimp, scallops, salmon, or tofu. Premium upgrades are also available: Filet Mignon (+$5/person) and Lobster Tail (+$10/person).',
  },
  {
    q: 'Can you accommodate dietary restrictions or allergies?',
    a: 'Yes — let us know when booking. Hibachi cooking uses soy sauce, sesame oil, and shared cooking surfaces, so cross-contamination is possible. If anyone in your group has a severe allergy (shellfish, soy, gluten, sesame), inform us in advance so your chef can take appropriate precautions.',
  },
  {
    q: 'What if it rains?',
    a: 'A covered outdoor space (patio, gazebo, pavilion) works perfectly. If severe weather is a concern on your event day, reach out and we\'ll work with you on rescheduling at no penalty.',
  },
  {
    q: 'Is gratuity included?',
    a: 'Gratuity is not included and goes entirely to your chef. It is fully at your discretion. Our chefs work hard to put on a great show — tips are always appreciated.',
  },
]

export default function FAQPage() {
  const [open, setOpen] = useState(null)

  return (
    <>
      <Navbar />
      <main style={{ background: '#F5EFE0', minHeight: '100vh' }}>

        {/* Header */}
        <section style={{ background: '#1A1209', padding: '80px 24px 60px', textAlign: 'center' }}>
          <p style={{ color: '#D4A843', fontSize: '13px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Got Questions?
          </p>
          <h1 style={{ color: '#fff', fontSize: 'clamp(30px, 5vw, 48px)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15, margin: '0 0 16px' }}>
            Frequently Asked Questions
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '17px', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
            Everything you need to know before booking your private hibachi experience.
          </p>
        </section>

        {/* FAQ List */}
        <section style={{ maxWidth: '760px', margin: '0 auto', padding: '56px 24px 80px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {FAQS.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: '#fff',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(26,18,9,0.06)',
                }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '20px 24px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    gap: '16px',
                  }}
                >
                  <span style={{ color: '#1A1209', fontSize: '16px', fontWeight: 600, lineHeight: 1.4 }}>
                    {faq.q}
                  </span>
                  <span style={{
                    flexShrink: 0,
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: open === i ? '#C8102E' : '#F5EFE0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background 0.2s',
                  }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d={open === i ? 'M2 6h8' : 'M6 2v8M2 6h8'}
                        stroke={open === i ? '#fff' : '#C8102E'}
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>
                {open === i && (
                  <div style={{ padding: '0 24px 20px', color: '#555', fontSize: '15px', lineHeight: 1.75, borderTop: '1px solid #F0EAD8' }}>
                    <p style={{ margin: '16px 0 0' }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ background: '#1A1209', borderRadius: '16px', padding: '40px 32px', textAlign: 'center', marginTop: '56px' }}>
            <h3 style={{ color: '#fff', fontSize: '22px', fontWeight: 800, margin: '0 0 10px' }}>
              Still have questions?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', margin: '0 0 24px' }}>
              Call us or book online — we respond within 1 business day.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:+16027672965" style={{ background: '#D4A843', color: '#1A1209', padding: '12px 24px', borderRadius: '8px', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}>
                (602) 767-2965
              </a>
              <a href="/booking" style={{ background: '#C8102E', color: '#fff', padding: '12px 24px', borderRadius: '8px', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}>
                Book Now
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
