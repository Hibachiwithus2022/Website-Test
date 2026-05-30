export default function CitySupportImage({ src, alt, caption }) {
  if (!src) return null
  return (
    <figure
      style={{ margin: 0, position: 'relative', overflow: 'hidden', lineHeight: 0 }}
      aria-label={alt}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full object-cover"
        style={{ height: 'clamp(200px, 28vw, 320px)', objectPosition: 'center', display: 'block', filter: 'saturate(1.06)' }}
      />
      {/* Dark-to-clear gradient for depth */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,18,9,0.65) 0%, rgba(26,18,9,0.08) 50%, transparent 100%)' }} />
      {/* Subtle brand tint */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(200,16,46,0.05)', mixBlendMode: 'multiply' }} />
      {caption && (
        <figcaption style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          padding: '1.25rem 2rem',
          color: 'rgba(245,239,224,0.8)',
          fontSize: '0.78rem',
          fontStyle: 'italic',
          letterSpacing: '0.02em',
          lineHeight: 1.65,
        }}>
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
