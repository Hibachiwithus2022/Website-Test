import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export const metadata = {
  title: 'Blog | Hibachi Connect',
  description: 'Tips, guides, and inspiration for private hibachi events — from backyard parties to corporate dinners.',
};

const CATEGORY_COLORS = {
  Pricing: '#C8102E',
  Comparison: '#D4A843',
  Planning: '#2E7D32',
  Occasions: '#7B1FA2',
  Corporate: '#1565C0',
  Guide: '#E65100',
  Menu: '#C8102E',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main style={{ background: '#F5EFE0', minHeight: '100vh' }}>
      {/* Header */}
      <section style={{
        background: '#1A1209',
        padding: '80px 24px 60px',
        textAlign: 'center',
      }}>
        <p style={{ color: '#D4A843', fontSize: '13px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
          Hibachi Connect Blog
        </p>
        <h1 style={{ color: '#fff', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15, margin: '0 0 16px' }}>
          Tips, Guides & Inspiration
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '18px', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
          Everything you need to plan the perfect private hibachi experience.
        </p>
      </section>

      {/* Grid */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '28px',
        }}>
          {posts.map((post) => {
            const catColor = CATEGORY_COLORS[post.category] || '#C8102E';
            return (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                <article style={{
                  background: '#fff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 12px rgba(26,18,9,0.08)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 28px rgba(26,18,9,0.14)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 12px rgba(26,18,9,0.08)';
                  }}
                >
                  {/* Color band */}
                  <div style={{ height: '6px', background: catColor }} />

                  <div style={{ padding: '24px 24px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                      <span style={{
                        background: catColor + '18',
                        color: catColor,
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        padding: '4px 10px',
                        borderRadius: '20px',
                      }}>
                        {post.category}
                      </span>
                      <span style={{ color: '#999', fontSize: '12px' }}>{post.readTime}</span>
                    </div>

                    <h2 style={{
                      color: '#1A1209',
                      fontSize: '18px',
                      fontWeight: 700,
                      lineHeight: 1.35,
                      margin: '0 0 10px',
                      letterSpacing: '-0.01em',
                    }}>
                      {post.title}
                    </h2>

                    <p style={{ color: '#6B6B6B', fontSize: '14px', lineHeight: 1.65, margin: '0 0 20px', flex: 1 }}>
                      {post.description}
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ color: '#999', fontSize: '12px' }}>
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span style={{ color: catColor, fontSize: '13px', fontWeight: 600 }}>
                        Read →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#1A1209', padding: '60px 24px', textAlign: 'center' }}>
        <h2 style={{ color: '#fff', fontSize: '28px', fontWeight: 800, margin: '0 0 12px' }}>
          Ready to Book Your Event?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', margin: '0 0 28px' }}>
          Get an instant price estimate or reserve your date today.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/estimation" style={{
            background: '#D4A843',
            color: '#1A1209',
            padding: '14px 28px',
            borderRadius: '8px',
            fontWeight: 700,
            fontSize: '15px',
            textDecoration: 'none',
          }}>
            Get Instant Estimate
          </Link>
          <Link href="/booking" style={{
            background: '#C8102E',
            color: '#fff',
            padding: '14px 28px',
            borderRadius: '8px',
            fontWeight: 700,
            fontSize: '15px',
            textDecoration: 'none',
          }}>
            Book Now
          </Link>
        </div>
      </section>
    </main>
  );
}
