import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '../../../lib/blog';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  try {
    const post = await getPostBySlug(params.slug);
    return {
      title: `${post.title} | Hibachi Connect Blog`,
      description: post.description,
    };
  } catch {
    return { title: 'Blog | Hibachi Connect' };
  }
}

const CATEGORY_COLORS = {
  Pricing: '#C8102E',
  Comparison: '#D4A843',
  Planning: '#2E7D32',
  Occasions: '#7B1FA2',
  Corporate: '#1565C0',
  Guide: '#E65100',
  Menu: '#C8102E',
};

export default async function BlogPostPage({ params }) {
  let post;
  try {
    post = await getPostBySlug(params.slug);
  } catch {
    notFound();
  }

  const catColor = CATEGORY_COLORS[post.category] || '#C8102E';

  return (
    <main style={{ background: '#F5EFE0', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{
        background: '#1A1209',
        padding: '80px 24px 60px',
      }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <Link href="/blog" style={{
            color: '#D4A843',
            fontSize: '13px',
            fontWeight: 600,
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '24px',
          }}>
            ← All Articles
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <span style={{
              background: catColor + '28',
              color: catColor,
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '4px 12px',
              borderRadius: '20px',
            }}>
              {post.category}
            </span>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>{post.readTime}</span>
          </div>

          <h1 style={{
            color: '#fff',
            fontSize: 'clamp(26px, 4vw, 42px)',
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            margin: '0 0 16px',
          }}>
            {post.title}
          </h1>

          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', lineHeight: 1.65 }}>
            {post.description}
          </p>

          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '13px', marginTop: '16px' }}>
            {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ maxWidth: '760px', margin: '0 auto', padding: '56px 24px 80px' }}>
        <article>
          <style>{`
            .blog-content { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
            .blog-content h2 {
              color: #1A1209;
              font-size: 24px;
              font-weight: 800;
              margin: 40px 0 14px;
              letter-spacing: -0.02em;
              line-height: 1.3;
            }
            .blog-content h3 {
              color: #1A1209;
              font-size: 18px;
              font-weight: 700;
              margin: 28px 0 10px;
            }
            .blog-content p {
              color: #3D3D3D;
              font-size: 16px;
              line-height: 1.75;
              margin: 0 0 18px;
            }
            .blog-content ul, .blog-content ol {
              color: #3D3D3D;
              font-size: 16px;
              line-height: 1.75;
              margin: 0 0 18px;
              padding-left: 24px;
            }
            .blog-content li { margin-bottom: 6px; }
            .blog-content strong { color: #1A1209; font-weight: 700; }
            .blog-content a { color: #C8102E; text-decoration: underline; }
            .blog-content table {
              width: 100%;
              border-collapse: collapse;
              margin: 24px 0;
              background: #fff;
              border-radius: 10px;
              overflow: hidden;
              box-shadow: 0 2px 10px rgba(26,18,9,0.07);
              font-size: 15px;
            }
            .blog-content th {
              background: #1A1209;
              color: #fff;
              padding: 12px 16px;
              text-align: left;
              font-weight: 700;
              font-size: 13px;
              letter-spacing: 0.04em;
            }
            .blog-content td {
              padding: 12px 16px;
              border-bottom: 1px solid #F0EAD8;
              color: #3D3D3D;
            }
            .blog-content tr:last-child td { border-bottom: none; }
            .blog-content tr:nth-child(even) td { background: #FDFAF4; }
            .blog-content hr {
              border: none;
              border-top: 2px solid #E8DFC8;
              margin: 40px 0;
            }
            .blog-content blockquote {
              border-left: 4px solid #C8102E;
              margin: 24px 0;
              padding: 16px 20px;
              background: #fff;
              border-radius: 0 8px 8px 0;
              color: #555;
              font-style: italic;
            }
          `}</style>
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </article>

        {/* CTA */}
        <div style={{
          background: '#1A1209',
          borderRadius: '16px',
          padding: '40px 32px',
          textAlign: 'center',
          marginTop: '56px',
        }}>
          <h3 style={{ color: '#fff', fontSize: '22px', fontWeight: 800, margin: '0 0 10px' }}>
            Ready to book your event?
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', margin: '0 0 24px' }}>
            Get a price estimate or reserve your date now.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/estimation" style={{
              background: '#D4A843',
              color: '#1A1209',
              padding: '12px 24px',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '14px',
              textDecoration: 'none',
            }}>
              Get Instant Estimate
            </Link>
            <Link href="/booking" style={{
              background: '#C8102E',
              color: '#fff',
              padding: '12px 24px',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '14px',
              textDecoration: 'none',
            }}>
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
