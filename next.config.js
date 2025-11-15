/** @type {import('next').NextConfig} */
const nextConfig = {
  // React / build behavior
  reactStrictMode: true,
  swcMinify: true,

  // Let Vercel build even if there are lint / TS issues
  // (You should still run `npm run lint` locally when you can)
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Remote image domains (for <Image />).
  // This does NOT control iframes, only Next.js Image optimization.
  images: {
    domains: [
      "cdn-icons-png.flaticon.com",
      "www.google.com",
      "www.tiktok.com",
      "p16-sign-va.tiktokcdn.com",
      "p16-va.tiktokcdn.com",
    ],
  },

  // Good default for Vercel / Node deployments
  output: "standalone",

  // Basic security-related headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
