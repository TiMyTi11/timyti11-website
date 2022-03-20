const removeImports = require("next-remove-imports")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['discord.com', 'avatars.githubusercontent.com']
  }
}

module.exports = removeImports(nextConfig)
