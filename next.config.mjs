/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // This ensures assets are correctly handled in a serverless environment
  assetPrefix: process.env.NODE_ENV === 'production' ? '/_next' : '',
};

export default nextConfig;
