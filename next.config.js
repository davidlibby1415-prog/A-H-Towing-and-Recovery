/** @type {import('next').NextConfig} */
const nextConfig = {
  // don’t let ESLint block the build
  eslint: { ignoreDuringBuilds: true },
};
module.exports = nextConfig;
