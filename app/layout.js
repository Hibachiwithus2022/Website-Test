import { Bebas_Neue, DM_Sans } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight:   '400',
  subsets:  ['latin'],
  variable: '--font-bebas',
  display:  'swap',
})

const dmSans = DM_Sans({
  weight:   ['300', '400', '500', '600'],
  subsets:  ['latin'],
  variable: '--font-dm-sans',
  display:  'swap',
})

export const metadata = {
  title:       'Hibachi Connect | Private Hibachi Chef at Home — Nationwide',
  description: 'Book a private hibachi chef for your backyard, event, or venue. Professional teppanyaki chefs travel to your home across all 50 U.S. states. Starting at $60/person.',
  keywords:    'hibachi at home, hibachi near me, private hibachi chef, backyard hibachi party, hibachi catering, teppanyaki at home',
  icons: {
    icon: [
      { url: '/favicon.ico',        sizes: 'any' },
      { url: '/favicon-16x16.png',  sizes: '16x16',  type: 'image/png' },
      { url: '/favicon-32x32.png',  sizes: '32x32',  type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title:       'Hibachi Connect | Private Hibachi Chef at Home',
    description: 'Professional hibachi chefs come to you. Serving all 50 states. From $60/person.',
    type:        'website',
    url:         'https://hibachiconnect.com',
    siteName:    'Hibachi Connect',
    images: [{ url: 'https://hibachiconnect.com/og?type=home', width: 1200, height: 630, alt: 'Hibachi Connect — Private hibachi chef at your home' }],
  },
  twitter: {
    card:  'summary_large_image',
    title: 'Hibachi Connect | Private Hibachi Chef at Home',
    description: 'Book a private hibachi chef for your next event. Nationwide coverage.',
    images: ['https://hibachiconnect.com/og?type=home'],
  },
  robots: {
    index:  true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
