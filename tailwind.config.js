/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red:      '#C8102E',
          redDark:  '#9E0B22',
          orange:   '#E85D04',
          amber:    '#F48C06',
          cream:    '#F5EFE0',
          charcoal: '#1A1209',
          dark:     '#0E0B04',
          gold:     '#D4A843',
        },
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        body:    ['var(--font-dm-sans)', 'sans-serif'],
      },
      animation: {
        'fade-up':   'fadeUp 0.6s ease forwards',
        'fade-in':   'fadeIn 0.5s ease forwards',
        'pulse-glow':'pulseGlow 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp:    { '0%': { opacity: 0, transform: 'translateY(24px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        fadeIn:    { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        pulseGlow: { '0%,100%': { boxShadow: '0 0 0 0 rgba(200,16,46,0)' }, '50%': { boxShadow: '0 0 0 8px rgba(200,16,46,0.15)' } },
      },
    },
  },
  plugins: [],
}
