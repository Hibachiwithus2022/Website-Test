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

  // ── With support image: 2-column layout ──────────────────────────────────────
  if (supportImage) {
    return (
      <section style={{ background: '#F8F5F2', padding: '5rem 1.5rem' }}>
        <div className="max-w-5xl mx-auto">

          {/* Mobile: compact image strip above heading */}
          <div
            className="lg:hidden"
            style={{ position: 'relative', overflow: 'hidden', marginBottom: '2rem' }}
          >
            <img
              src={supportImage.src}
              alt={supportImage.alt}
              loading="lazy"
              style={{ width: '100%', height: 180, objectFit: 'cover', display: 'block', filter: 'saturate(1.06)' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,18,9,0.45) 0%, transparent 55%)' }} />
          </div>

          {/* 2-column grid: image left, content right */}
          <div style={{ display: 'grid', gap: '3.5rem', alignItems: 'start' }} className="lg:grid-cols-[290px_1fr]">

            {/* Left: framed image — desktop only */}
            <div className="hidden lg:block" style={{ position: 'relative' }}>
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src={supportImage.src}
                  alt={supportImage.alt}
                  loading="lazy"
                  style={{ width: '100%', height: 460, objectFit: 'cover', display: 'block', filter: 'saturate(1.06)' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(200,16,46,0.04)', mixBlendMode: 'multiply' }} />
              </div>
              {/* Offset border frame */}
              <div style={{
                position: 'absolute', top: -10, left: -10, right: 10, bottom: 10,
                border: '1px solid rgba(200,16,46,0.22)', pointerEvents: 'none',
              }} />
              {/* Red accent bar */}
              <div style={{ position: 'absolute', bottom: 10, left: -10, width: 52, height: 3, background: '#C8102E' }} />
              {supportImage.caption && (
                <p style={{
                  marginTop: '1.5rem', paddingLeft: '0.25rem',
                  fontSize: '0.76rem', color: 'rgba(26,18,9,0.43)',
                  fontStyle: 'italic', lineHeight: 1.65,
                }}>
                  {supportImage.caption}
                </p>
              )}
            </div>

            {/* Right: heading + stacked cards */}
            <div>
              {/* Stars */}
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#D4A843">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              <div className="red-pill" style={{ display: 'inline-block', marginBottom: '0.85rem' }}>Verified Reviews</div>
              <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: '#1A1209', lineHeight: 1.05, marginBottom: '0.75rem' }}>
                {h2Line1}<br />
                <span style={{ color: '#C8102E' }}>{h2Line2}</span>
              </h2>
              <p style={{ color: 'rgba(26,18,9,0.5)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '38rem' }}>
                {subheading ?? '5.0 average rating across all events nationwide. Real hosts. Real chefs. Real experiences.'}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {displayTestimonials.map((t, i) => <TestimonialCard key={i} t={t} />)}
              </div>
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
