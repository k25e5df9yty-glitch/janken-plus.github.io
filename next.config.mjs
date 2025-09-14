/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Use an empty basePath and assetPrefix when deploying to the
  // user site (janken-plus.github.io). For the project site
  // repository (janken-plus/janken-plus), keep the /janken-plus
  // prefix so that assets resolve correctly when published under the
  // project path. Local development builds (where GITHUB_REPOSITORY is
  // undefined) will also use the empty prefix.
  basePath: process.env.GITHUB_REPOSITORY === 'janken-plus/janken-plus'
    ? '/janken-plus'
    : '',
  assetPrefix: process.env.GITHUB_REPOSITORY === 'janken-plus/janken-plus'
    ? '/janken-plus/'
    : ''
};

export default nextConfig;
