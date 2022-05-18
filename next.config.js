/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

const nextConfig = {
  reactStrictMode: true,
}

// module.exports = withPWA({
//   pwa: {
//     dest: 'public',
//     register: true,
//     scope: '/',
//     sw: 'service-worker.js',
//     fallbacks: '/_offline'
//   }
// })

module.exports = nextConfig
