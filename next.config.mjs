/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/janken-plus' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/janken-plus/' : ''
};

export default nextConfig;
