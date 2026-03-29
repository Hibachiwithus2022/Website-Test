'use client'
import RevealWrapper from './RevealWrapper'

const TESTIMONIALS = [
  {
    text:   '"Booked Hibachi Connect for my wife\'s 40th birthday in Dallas — 30 guests and the chef had everyone on their feet. The shrimp toss alone was worth every penny. 10/10, already booked again."',
    name:   'James M.',
    city:   'Dallas, TX',
    initials:'JM',
    event:  'Birthday Party',
  },
  {
    text:   '"Used them for a corporate retreat in Atlanta. 60 people, flawless setup, insane food. Our team still talks about it two months later. The coordinator made everything seamless."',
    name:   'Sarah L.',
    city:   'Atlanta, GA',
    initials:'SL',
    event:  'Corporate Event',
  },
  {
    text:   '"Had them at our backyard in Phoenix for a graduation party. Setup took 25 minutes and they cleaned up completely. The fire tricks were incredible — kids and adults were both obsessed."',
    name:   'Ryan & Maria T.',
    city:   'Phoenix, AZ',
    initials:'RT',
    event:  'Graduation Party',
  },
]

export default function SocialProof() {
  return (
    <section
      className="section"
      style={{ background: 'linear-gradient(180deg,#1E1410 0%,#1A1209 100%)' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Star rating hero */}
        <RevealWrapper>
          <div className="text-center mb-14">
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.3rem', marginBottom: '1rem' }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="28" height="28" viewBox="0 0 24 24" fill="#D4A843">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              ))}
            </div>
            <div className="red-pill" style={{ display: 'inline-block' }}>Verified Reviews</div>
            <h2 className="section-title">
              Thousands of Backyard<br />
              <span style={{ color: '#C8102E' }}>Hibachi Parties Hosted</span>
            </h2>
            <p className="mt-4" style={{ color: 'rgba(245,239,224,0.55)', maxWidth: '36rem', margin: '1rem auto 0' }}>
              5.0 average across 200+ events nationwide. Real guests. Real hibachi. Real memories.
            </p>
          </div>
        </RevealWrapper>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <RevealWrapper key={i} delay={i * 0.12}>
              <article
                style={{
                  background: 'rgba(245,239,224,0.04)',
                  border: '1px solid rgba(245,239,224,0.08)',
                  padding: '2.25rem 2rem',
                  position: 'relative',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                {/* Quote mark */}
                <div style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: '5rem', color: '#C8102E', opacity: 0.35,
                  position: 'absolute', top: '0.25rem', left: '1.25rem', lineHeight: 1,
                }}>
                  &#8220;
                </div>

                {/* Stars */}
                <div style={{ display: 'flex', gap: '0.15rem', marginBottom: '1.25rem', paddingTop: '2.5rem' }}>
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#D4A843">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>

                <p style={{ fontSize: '0.93rem', color: 'rgba(245,239,224,0.78)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                  {t.text}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: '50%',
                      background: 'rgba(200,16,46,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: '"Bebas Neue", sans-serif', color: '#C8102E', fontSize: '1rem',
                    }}>
                      {t.initials}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.88rem', color: '#F5EFE0' }}>{t.name}</div>
                      <div style={{ fontSize: '0.72rem', color: 'rgba(245,239,224,0.4)' }}>{t.city}</div>
                    </div>
                  </div>
                  <span style={{
                    fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: '#C8102E', background: 'rgba(200,16,46,0.12)',
                    border: '1px solid rgba(200,16,46,0.3)', padding: '0.2rem 0.6rem',
                  }}>
                    {t.event}
                  </span>
                </div>
              </article>
            </RevealWrapper>
          ))}
        </div>

      </div>
    </section>
  )
}
