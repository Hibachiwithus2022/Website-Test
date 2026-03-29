'use client'

const OCCASION_ICONS = {
  'Birthday Parties': '🎂',
  'Bachelorette Parties': '👰',
  'Bachelor Parties': '🥂',
  'Anniversary Dinners': '💑',
  'Corporate Events': '💼',
  'Corporate Retreats': '💼',
  'Graduation Parties': '🎓',
  'Family Reunions': '👨‍👩‍👧‍👦',
  'Date Nights': '🕯️',
  'Holiday Gatherings': '🎄',
  'Neighborhood Cookouts': '🏡',
  'Neighborhood Parties': '🏡',
  'Vacation House Dinners': '🌴',
  'Backyard Dinner Parties': '🌿',
  'Tech Team Events': '💻',
  'Corporate Lunches': '🍱',
  'Holiday Events': '🎉',
  'Holiday Cookouts': '🔥',
  'Neighborhood Gatherings': '🏘️',
}

function getIcon(occasion) {
  for (const [key, icon] of Object.entries(OCCASION_ICONS)) {
    if (occasion.toLowerCase().includes(key.toLowerCase().split(' ')[0].toLowerCase())) return icon
  }
  return '🍽️'
}

export default function CityOccasions({ cityName, featuredOccasions = [] }) {
  const occasions = featuredOccasions.length > 0 ? featuredOccasions : [
    'Birthday Parties','Bachelorette Parties','Anniversary Dinners',
    'Corporate Events','Graduation Parties','Family Reunions',
    'Date Nights','Holiday Gatherings','Neighborhood Cookouts','Bachelor Parties',
  ]

  return (
    <section style={{ background: '#1A1209', padding: '5rem 1.5rem' }}>
      <div className="max-w-5xl mx-auto">

        <div className="text-center" style={{ marginBottom: '3.5rem' }}>
          <div className="red-pill" style={{ display: 'inline-block', marginBottom: '1rem' }}>Perfect For Any Occasion</div>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', color: '#F5EFE0', lineHeight: 1.05 }}>
            Every Celebration in {cityName}<br />
            <span style={{ color: '#C8102E' }}>Deserves Hibachi</span>
          </h2>
          <p style={{ color: 'rgba(245,239,224,0.5)', maxWidth: '36rem', margin: '1rem auto 0', fontSize: '0.93rem', lineHeight: 1.75 }}>
            From intimate dinners to 200-person parties — our chefs adapt to the occasion, every time.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '1rem' }} className="grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {occasions.map((occasion) => (
            <OccasionCard key={occasion} occasion={occasion} />
          ))}
        </div>

      </div>
    </section>
  )
}

function OccasionCard({ occasion }) {
  return (
    <div
      style={{
        padding: '1.5rem 1rem',
        background: 'rgba(245,239,224,0.04)',
        border: '1px solid rgba(245,239,224,0.08)',
        textAlign: 'center',
        cursor: 'default',
        transition: 'all 0.25s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'rgba(200,16,46,0.08)'
        e.currentTarget.style.borderColor = 'rgba(200,16,46,0.35)'
        e.currentTarget.style.transform = 'translateY(-3px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'rgba(245,239,224,0.04)'
        e.currentTarget.style.borderColor = 'rgba(245,239,224,0.08)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <div style={{ fontSize: '2rem', marginBottom: '0.6rem' }}>{getIcon(occasion)}</div>
      <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#F5EFE0', lineHeight: 1.4 }}>{occasion}</div>
    </div>
  )
}
