'use client'

const TESTIMONIAL_H2 = [
  (city) => [`What ${city} Guests`, 'Are Saying'],
  (city) => ['Real Reviews from', `${city} Hosts`],
  (city) => [`${city} Reviews`, '& Testimonials'],
  (city) => ['Straight from', `${city} Hosts & Guests`],
  (city) => ['What Guests Say About', `Hibachi Connect in ${city}`],
]

export default function CityTestimonials({ cityName, testimonials = [], subheading, variant = 0, supportImage = null }) {
  const [h2Line1, h2Line2] = TESTIMONIAL_H2[variant % TESTIMONIAL_H2.length](cityName)
  const displayTestimonials = testimonials.length >= 3 ? testimonials : [
    ...testimonials,
    {
      text: `"Absolutely incredible experience. Our chef set up in 25 minutes and had every single guest in ${cityName} on their feet watching. Best dinner party we've ever thrown — and it was at our own house."`,
      name: 'Michael & Sara T.',
      city: `${cityName}`,
      event: 'Birthday Party',
      initials: 'MT',
    },
    {
      text: '"The food was better than any hibachi restaurant I\'ve been to, and watching the chef cook it live made it 10x more fun. The shrimp toss alone is worth booking for. Will absolutely be doing this again."',
      name: 'Brianna L.',
      city: `${cityName} area`,
      event: 'Bachelorette Party',
      initials: 'BL',
    },
    {
      text: '"Booked for a corporate dinner — 40 people, two chef stations, seamless from start to finish. Our team still talks about it. Way more impactful than a restaurant reservation."',
      name: 'Robert H.',
      city: `${cityName}`,
      event: 'Corporate Event',
      initials: 'RH',
    },
  ].slice(0, 3)

  // ── With support image: mirrors Experience section layout exactly ────────────
  // Desktop: [content left | framed image right]  Mobile: content → image
  if (supportImage) {
    const introText = supportImage.intro ?? subheading ?? '5.0 average rating across all events nationwide. Real hosts. Real chefs. Real experiences.'
    return (
      <section style={{ background: '#FFFFFF', padding: '5rem 1.5rem' }}>
        <div className="max-w-5xl mx-auto">
          <div style={{ display: 'grid', gap: '4rem', alignItems: 'start' }} className="lg:grid-cols-2">

            {/* LEFT: stars + pill + h2 + intro + review cards */}
            <div>
              <div style={{ display: 'flex', gap: '0.3rem', marginBottom: '1.25rem' }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill="#D4A843">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              <div className="red-pill" style={{ marginBottom: '1.25rem' }}>Verified Reviews</div>
              <h2 className="font-display" style={{ fontSize: 'clamp(2rem,4.5vw,3rem)', color: '#1A1209', lineHeight: 1.05, marginBottom: '1.5rem' }}>
                {h2Line1}<br />
                <span style={{ color: '#C8102E' }}>{h2Line2}</span>
              </h2>
              <p style={{ fontSize: '0.86rem', color: 'rgba(26,18,9,0.55)', lineHeight: 1.78, marginBottom: '2rem' }}>
                {introText}
              </p>

              {/* Mobile: image between intro and cards */}
              <div className="lg:hidden" style={{ position: 'relative', marginBottom: '2rem' }}>
                <img
                  src={supportImage.src}
                  alt={supportImage.alt}
                  loading="lazy"
                  style={{ width: '100%', height: 240, objectFit: 'cover', display: 'block', filter: 'saturate(1.06)' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,18,9,0.5) 0%, transparent 50%)' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(200,16,46,0.05)', mixBlendMode: 'multiply' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {displayTestimonials.map((t, i) => <TestimonialCard key={i} t={t} />)}
              </div>
            </div>

            {/* RIGHT: framed image + badge — mirrors Experience section */}
            <div style={{ position: 'relative' }} className="hidden lg:block">
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src={supportImage.src}
                  alt={supportImage.alt}
                  loading="lazy"
                  style={{ width: '100%', display: 'block', objectFit: 'cover', height: 480, filter: 'saturate(1.06)' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,18,9,0.6) 0%, transparent 50%)' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(200,16,46,0.05)', mixBlendMode: 'multiply' }} />
              </div>
              {/* Floating badge — same style as Experience section */}
              <div
                style={{
                  position: 'absolute', bottom: '-1.5rem', right: '-1.5rem',
                  background: '#C8102E', padding: '1.5rem 2rem',
                  boxShadow: '0 4px 8px rgba(200,16,46,0.15), 0 16px 40px rgba(200,16,46,0.1), 0 24px 48px rgba(0,0,0,0.4)',
                }}
              >
                <div className="font-display" style={{ fontSize: '2.2rem', color: '#F5EFE0', lineHeight: 1 }}>5.0★</div>
                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '0.2rem' }}>
                  5-Star Experiences
                </div>
              </div>
              {/* Decorative offset border — same as Experience section */}
              <div
                style={{ position: 'absolute', top: '-1rem', left: '-1rem', width: '100%', height: '100%', border: '1px solid rgba(200,16,46,0.18)', pointerEvents: 'none' }}
              />
            </div>

          </div>
        </div>
      </section>
    )
  }

  // ── Default layout (no image): centered header + 3-column cards ──────────────
  return (
    <section style={{ background: '#F8F5F2', padding: '5rem 1.5rem' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center" style={{ marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.3rem', marginBottom: '1.25rem' }}>
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="#D4A843">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            ))}
          </div>
          <div className="red-pill" style={{ display: 'inline-block', marginBottom: '1rem' }}>Verified Reviews</div>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', color: '#1A1209', lineHeight: 1.05 }}>
            {h2Line1}<br />
            <span style={{ color: '#C8102E' }}>{h2Line2}</span>
          </h2>
          <p style={{ color: 'rgba(26,18,9,0.5)', maxWidth: '36rem', margin: '1rem auto 0', fontSize: '0.9rem', lineHeight: 1.75 }}>
            {subheading ?? '5.0 average rating across all events nationwide. Real hosts. Real chefs. Real experiences.'}
          </p>
        </div>
        <div style={{ display: 'grid', gap: '1.25rem' }} className="md:grid-cols-3">
          {displayTestimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ t }) {
  return (
    <article
      style={{
        background: '#FFFFFF',
        border: '1px solid rgba(26,18,9,0.09)',
        padding: '2.25rem 2rem',
        position: 'relative',
        transition: 'transform 0.28s ease, border-color 0.28s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.borderColor = 'rgba(200,16,46,0.25)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.borderColor = 'rgba(26,18,9,0.09)'
      }}
    >
      {/* Quote mark */}
      <div style={{
        fontFamily: '"Playfair Display", Georgia, serif',
        fontSize: '5rem', color: '#C8102E', opacity: 0.3,
        position: 'absolute', top: '0.2rem', left: '1.25rem', lineHeight: 1,
        userSelect: 'none',
      }}>&#8220;</div>

      {/* Stars */}
      <div style={{ display: 'flex', gap: '0.15rem', marginBottom: '1.25rem', paddingTop: '2.5rem' }}>
        {[...Array(5)].map((_, j) => (
          <svg key={j} width="13" height="13" viewBox="0 0 24 24" fill="#D4A843">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        ))}
      </div>

      <p style={{ fontSize: '0.9rem', color: 'rgba(26,18,9,0.72)', lineHeight: 1.82, marginBottom: '1.5rem' }}>{t.text}</p>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
          <div style={{
            width: 38, height: 38, borderRadius: '50%',
            background: 'rgba(200,16,46,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: '"Bebas Neue", sans-serif', color: '#C8102E', fontSize: '0.95rem',
          }}>{t.initials}</div>
          <div>
            <div style={{ fontWeight: 600, fontSize: '0.86rem', color: '#1A1209' }}>{t.name}</div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(26,18,9,0.4)' }}>{t.city}</div>
          </div>
        </div>
        <span style={{
          fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
          color: '#C8102E', background: 'rgba(200,16,46,0.12)',
          border: '1px solid rgba(200,16,46,0.3)', padding: '0.2rem 0.55rem',
        }}>{t.event}</span>
      </div>
    </article>
  )
}
