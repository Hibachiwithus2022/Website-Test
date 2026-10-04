'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Home',       href: '/' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Menu',       href: '/menu' },
    { label: 'Locations',  href: '/locations' },
    { label: 'Estimation', href: '/estimation' },
    { label: 'Blog',       href: '/blog' },
    { label: 'FAQ',        href: '/faq' },
    { label: 'Contact Us', href: '/contact' },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[200] transition-all duration-400"
      style={scrolled ? {
        background: 'rgba(255,255,255,0.97)',
        backdropFilter: 'blur(16px)',
        boxShadow: '0 1px 0 rgba(26,18,9,0.08), 0 4px 24px rgba(0,0,0,0.08)',
      } : {}}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/brand/logo.png"
            alt="Hibachi Connect"
            width={72}
            height={72}
            className="h-16 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map(l => (
            <a key={l.label} href={l.href} className="nav-link-item">
              {l.label}
            </a>
          ))}
          <a href="/booking" className="btn-primary" style={{ padding: '0.6rem 1.5rem' }}>
            Book Now
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-[22px] h-[2px] transition-transform duration-300 ${mobileOpen ? 'translate-y-[7px] rotate-45' : ''}`} style={{ background: scrolled ? '#1A1209' : '#F5EFE0' }} />
          <span className={`block w-[22px] h-[2px] transition-opacity duration-300 ${mobileOpen ? 'opacity-0' : ''}`} style={{ background: scrolled ? '#1A1209' : '#F5EFE0' }} />
          <span className={`block w-[22px] h-[2px] transition-transform duration-300 ${mobileOpen ? '-translate-y-[7px] -rotate-45' : ''}`} style={{ background: scrolled ? '#1A1209' : '#F5EFE0' }} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-96' : 'max-h-0'}`}
        style={{ background: 'rgba(255,255,255,0.98)', borderTop: '1px solid rgba(26,18,9,0.08)' }}
      >
        <div className="flex flex-col px-6 py-5 gap-5">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="nav-link-item-dark"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="/booking" className="btn-primary justify-center" onClick={() => setMobileOpen(false)}>
            Book Now
          </a>
        </div>
      </div>

      <style jsx>{`
        .nav-link-item {
          color: ${scrolled ? 'rgba(26,18,9,0.75)' : 'rgba(245,239,224,0.85)'};
          text-decoration: none;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.35rem 0;
          position: relative;
          transition: color 0.25s;
        }
        .nav-link-item::after {
          content: '';
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 1px; background: #C8102E;
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }
        .nav-link-item:hover { color: ${scrolled ? '#1A1209' : '#F5EFE0'}; }
        .nav-link-item:hover::after { transform: scaleX(1); }

        .nav-link-item-dark {
          color: rgba(26,18,9,0.75);
          text-decoration: none;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.35rem 0;
          position: relative;
          transition: color 0.25s;
        }
        .nav-link-item-dark:hover { color: #C8102E; }
      `}</style>
    </nav>
  )
}
