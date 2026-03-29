import Link from 'next/link'

/**
 * Reusable breadcrumb component.
 * Props:
 *   items: Array<{ label: string, href?: string }>
 *   The last item (current page) should omit href.
 *
 * Usage:
 *   <Breadcrumbs items={[
 *     { label: 'Home', href: '/' },
 *     { label: 'Locations', href: '/locations' },
 *     { label: 'Texas', href: '/locations/texas' },
 *     { label: 'Dallas' },
 *   ]} />
 */
export default function Breadcrumbs({ items = [], style = {} }) {
  if (!items.length) return null

  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        fontSize: '0.75rem',
        color: 'rgba(245,239,224,0.4)',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '0.15rem',
        ...style,
      }}
    >
      {items.map((item, i) => {
        const isLast = i === items.length - 1
        return (
          <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.15rem' }}>
            {i > 0 && (
              <span style={{ margin: '0 0.25rem', opacity: 0.4 }} aria-hidden="true">/</span>
            )}
            {item.href && !isLast ? (
              <Link
                href={item.href}
                style={{ color: 'inherit', textDecoration: 'none' }}
                aria-label={`Go to ${item.label}`}
              >
                {item.label}
              </Link>
            ) : (
              <span
                style={{ color: isLast ? 'rgba(245,239,224,0.65)' : 'inherit' }}
                aria-current={isLast ? 'page' : undefined}
              >
                {item.label}
              </span>
            )}
          </span>
        )
      })}
    </nav>
  )
}
