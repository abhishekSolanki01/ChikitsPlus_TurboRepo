/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui", "db", "zod", "response-handler","stores"],
}

module.exports = nextConfig
