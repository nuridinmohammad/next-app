const withPWA = require("@ducanh2912/next-pwa").default({
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable:false,
  dest: "public",
  fallbacks: {
    //image: "/static/images/fallback.png",
    document: "/offline", // if you want to fallback to a custom page rather than /_offline
    // font: '/static/font/fallback.woff2',
    // audio: ...,
    // video: ...,
  },
  workboxOptions: {
    disableDevLogs: true,
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.dummyjson.com',
          port: '',
          pathname: '/product-images/**',
        },
      ],
    },
  }

module.exports = withPWA(nextConfig)

