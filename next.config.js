/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  // Nodemailer 8 is ESM-only; tell Next.js to bundle it as an external for server components
  serverExternalPackages: ['nodemailer'],
}

module.exports = nextConfig
