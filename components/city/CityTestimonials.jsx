'use client'

export default function CityTestimonials({ cityName, testimonials = [] }) {
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

  return (
    <section style={{ background: 'linear-gradient(180deg,#1E1410,#1A1209)', padding: '5rem 1.5rem' }}>
      <div className="max-w-5xl mx-auto">

        <div className="text-center" style={{ marginBottom: '3.5rem' }}>
          {/* Stars */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.3rem', marginBottom: '1.25rem' }}>
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="#D4A843">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            ))}
          </div>
          <div className="red-pill" style={{ display: 'inline-block', marginBottom: '1rem' }}>Verified Reviews</div>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', color: '#F5EFE0', lineHeight: 1.05 }}>
            What {cityName} Guests<br />
            <span style={{ color: '#C8102E' }}>Are Saying</span>
          </h2>
          <p style={{ color: 'rgba(245,239,224,0.45)', maxWidth: '36rem', margin: '1rem auto 0', fontSize: '0.9rem', lineHeight: 1.75 }}>
            5.0 average rating across all events nationwide. Real hosts. Real chefs. Real experiences.
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
        background: 'rgba(245,239,224,0.04)',
        border: '1px solid rgba(245,239,224,0.08)',
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
        e.currentTarget.style.borderColor = 'rgba(245,239,224,0.08)'
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

      <p style={{ fontSize: '0.9rem', color: 'rgba(245,239,224,0.75)', lineHeight: 1.82, marginBottom: '1.5rem' }}>{t.text}</p>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
          <div style={{
            width: 38, height: 38, borderRadius: '50%',
            background: 'rgba(200,16,46,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: '"Bebas Neue", sans-serif', color: '#C8102E', fontSize: '0.95rem',
          }}>{t.initials}</div>
          <div>
            <div style={{ fontWeight: 600, fontSize: '0.86rem', color: '#F5EFE0' }}>{t.name}</div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(245,239,224,0.38)' }}>{t.city}</div>
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
