import { ImageResponse } from 'next/og'

// Node.js runtime — avoids edge sandbox eval() restriction with satori/WASM
export const runtime = 'nodejs'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const type  = searchParams.get('type')  || 'home'
  const city  = searchParams.get('city')  || ''
  const state = searchParams.get('state') || ''

  // ── Text content ─────────────────────────────────────────────────────────────
  let headline = 'Private Hibachi Chef at Home'
  let subline  = 'Professional Teppanyaki · Nationwide Coverage'
  let eyebrow  = 'HIBACHI CONNECT'

  if (type === 'city' && city) {
    headline = city
    subline  = state
      ? `Private Hibachi Chef · ${state}`
      : 'Private Hibachi Chef at Home'
    eyebrow  = 'HIBACHI CONNECT · PRIVATE CHEF'
  } else if (type === 'state' && state) {
    headline = state
    subline  = `Private Hibachi Chef Serving All of ${state}`
    eyebrow  = 'HIBACHI CONNECT · SERVING ALL CITIES'
  }

  // Font size scales with headline length
  const len  = headline.length
  const size = len > 22 ? 68 : len > 15 ? 80 : 96

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#1A1209',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Red glow — top right quadrant (solid semi-transparent square, satori-compatible) */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -120,
            width: 500,
            height: 500,
            borderRadius: 250,
            background: 'rgba(200,16,46,0.22)',
            display: 'flex',
          }}
        />

        {/* Gold glow — bottom left (subtle) */}
        <div
          style={{
            position: 'absolute',
            bottom: -100,
            left: 60,
            width: 360,
            height: 360,
            borderRadius: 180,
            background: 'rgba(212,168,67,0.10)',
            display: 'flex',
          }}
        />

        {/* Left accent bar — gradient (satori supports simple 2-stop linear gradients) */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 8,
            background: 'linear-gradient(to bottom, #C8102E, #D4A843)',
            display: 'flex',
          }}
        />

        {/* Bottom accent bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: 'linear-gradient(to right, #C8102E, #D4A843)',
            display: 'flex',
          }}
        />

        {/* Horizontal rule — mid-left decorative */}
        <div
          style={{
            position: 'absolute',
            left: 96,
            top: 56,
            width: 48,
            height: 2,
            background: '#C8102E',
            display: 'flex',
          }}
        />

        {/* Main content column */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
            padding: '60px 100px 60px 96px',
            position: 'relative',
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              marginBottom: 30,
            }}
          >
            <div
              style={{
                width: 24,
                height: 3,
                background: '#C8102E',
                display: 'flex',
                flexShrink: 0,
              }}
            />
            <div
              style={{
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: 3,
                color: '#D4A843',
                display: 'flex',
                textTransform: 'uppercase',
              }}
            >
              {eyebrow}
            </div>
          </div>

          {/* Headline */}
          <div
            style={{
              fontSize: size,
              fontWeight: 900,
              color: '#FFFFFF',
              lineHeight: 1.0,
              marginBottom: 22,
              display: 'flex',
              letterSpacing: -2,
              maxWidth: 820,
            }}
          >
            {headline}
          </div>

          {/* Subline */}
          <div
            style={{
              fontSize: 27,
              color: 'rgba(245,239,224,0.58)',
              lineHeight: 1.35,
              marginBottom: 52,
              display: 'flex',
              maxWidth: 640,
            }}
          >
            {subline}
          </div>

          {/* CTA row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 30,
            }}
          >
            <div
              style={{
                background: '#C8102E',
                color: '#FFFFFF',
                fontSize: 18,
                fontWeight: 700,
                padding: '13px 28px',
                display: 'flex',
                letterSpacing: 0.5,
              }}
            >
              Book a Chef →
            </div>
            <div
              style={{
                fontSize: 18,
                color: '#D4A843',
                fontWeight: 600,
                display: 'flex',
              }}
            >
              From $60/adult · $600 minimum
            </div>
          </div>
        </div>

        {/* Right side decorative vertical line + domain */}
        <div
          style={{
            position: 'absolute',
            right: 64,
            top: 0,
            bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 0,
          }}
        >
          <div style={{ width: 1, height: 90, background: 'rgba(200,16,46,0.35)', display: 'flex' }} />
          <div
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: 3,
              color: 'rgba(255,255,255,0.18)',
              display: 'flex',
              marginTop: 16,
              marginBottom: 16,
              textTransform: 'uppercase',
            }}
          >
            hibachiconnect.com
          </div>
          <div style={{ width: 1, height: 90, background: 'rgba(212,168,67,0.35)', display: 'flex' }} />
        </div>
      </div>
    ),
    {
      width:  1200,
      height: 630,
    }
  )
}
