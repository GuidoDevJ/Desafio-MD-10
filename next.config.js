/** @type {import('next').NextConfig} */
const withSvgr = require("next-svgr");

const nextConfig = withSvgr({
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['v5.airtableusercontent.com'],
  },
})

module.exports = nextConfig
