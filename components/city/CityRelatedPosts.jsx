'use client'
import Link from 'next/link'

const TAG_COLORS = {
  Pricing:    { bg: 'rgba(212,168,67,0.12)',  border: 'rgba(212,168,67,0.3)',  text: '#D4A843' },
  Comparison: { bg: 'rgba(200,16,46,0.10)',   border: 'rgba(200,16,46,0.3)',   text: '#C8102E' },
  Planning:   { bg: 'rgba(100,160,100,0.10)', border: 'rgba(100,160,100,0.3)', text: '#80c080' },
  Occasions:  { bg: 'rgba(200,16,46,0.10)',   border: 'rgba(200,16,46,0.3)',   text: '#C8102E' },
  Corporate:  { bg: 'rgba(212,168,67,0.12)',  border: 'rgba(212,168,67,0.3)',  text: '#D4A843' },
  Guide:      { bg: 'rgba(245,239,224,0.06)', border: 'rgba(245,239,224,0.15)',text: 'rgba(245,239,224,0.6)' },
  Menu:       { bg: 'rgba(200,16,46,0.10)',   border: 'rgba(200,16,46,0.3)',   text: '#C8102E' },
}

function tagStyle(tag) {
  return TAG_COLORS[tag] || TAG_COLORS.Guide
}

export default function CityRelatedPosts({ cityName, posts = [] }) {
  if (!posts.length) return null

  return (
    <section
      aria-label="Related articles"
      style={{ background: '#1A1209', padding: '4.5rem 1.5rem', borderTop: '1px solid rgba(245,239,224,0.05)' }}
    >
      <div className="max-w-5xl mx-auto">

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
          <div>
            <div className="red-pill" style={{ marginBottom: '0.75rem' }}>From the Blog</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.7rem,4vw,2.4rem)', color: '#F5EFE0', lineHeight: 1.05 }}>
              Helpful Guides for Your<br />
              <span style={{ color: '#C8102E' }}>{cityName} Hibachi Event</span>
            </h2>
          </div>
          {/* Link to blog index — good for crawlability */}
          <Link
            href="/blog"
            style={{
              fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.08em',
              textTransform: 'uppercase', color: 'rgba(245,239,224,0.45)',
              textDecoration: 'none', display: 'flex', gap: '0.4rem', alignItems: 'center',
              flexShrink: 0,
            }}
          >
            All Articles
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

        <div style={{ display: 'grid', gap: '1.25rem' }} className="md:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} cityName={cityName} />
          ))}
        </div>

        {/* Internal link reinforcement */}
        <p style={{ marginTop: '2rem', fontSize: '0.82rem', color: 'rgba(245,239,224,0.35)', lineHeight: 1.7, textAlign: 'center' }}>
          Looking for pricing details?{' '}
          <a href="#pricing" style={{ color: '#C8102E', textDecoration: 'none' }}>See our {cityName} packages</a>{' '}
          or{' '}
          <a href="#book" style={{ color: '#C8102E', textDecoration: 'none' }}>get a free quote</a> today.
        </p>

      </div>
    </section>
  )
}

function PostCard({ post, cityName }) {
  const colors = tagStyle(post.tag)

  return (
    <article
      style={{
        background: 'rgba(245,239,224,0.04)',
        border: '1px solid rgba(245,239,224,0.08)',
        padding: '2rem',
        display: 'flex', flexDirection: 'column',
        transition: 'border-color 0.22s ease, transform 0.22s ease',
        position: 'relative',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(200,16,46,0.3)'
        e.currentTarget.style.transform = 'translateY(-3px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(245,239,224,0.08)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {/* Gradient bar on hover */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: 'linear-gradient(to right, #C8102E, #D4A843)',
        transform: 'scaleX(0)', transformOrigin: 'left',
        transition: 'transform 0.3s ease',
      }} className="post-card-bar" />

      {/* Tag + read time */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
        <span style={{
          fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em',
          textTransform: 'uppercase', padding: '0.2rem 0.65rem',
          background: colors.bg, border: `1px solid ${colors.border}`, color: colors.text,
        }}>
          {post.tag}
        </span>
        <span style={{ fontSize: '0.72rem', color: 'rgba(245,239,224,0.35)' }}>{post.readTime}</span>
      </div>

      {/* Title */}
      <h3 style={{ fontWeight: 700, color: '#F5EFE0', fontSize: '0.97rem', lineHeight: 1.5, marginBottom: '0.75rem', flex: 1 }}>
        {post.title}
      </h3>

      {/* Excerpt */}
      <p style={{ fontSize: '0.84rem', color: 'rgba(245,239,224,0.52)', lineHeight: 1.72, marginBottom: '1.5rem' }}>
        {post.excerpt}
      </p>

      {/* CTA link */}
      <Link
        href={`/blog/${post.slug}`}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
          fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.06em',
          textTransform: 'uppercase', color: '#C8102E', textDecoration: 'none',
        }}
      >
        Read Article
        <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </Link>
    </article>
  )
}
