/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['components', 'layout', 'pages', 'hooks', 'lib'], // Only run ESLint on this directories during production builds (next build)
  },
};

module.exports = nextConfig;
