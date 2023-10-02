/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui", "db", "zod", "response-handler"],
}

module.exports = nextConfig
