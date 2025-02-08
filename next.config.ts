import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
console.log("NODE_ENV in next.config:", process.env.NODE_ENV);

const nextConfig: NextConfig = {
  basePath: isProd ? '/nextjs-portfolio' : '',
  assetPrefix: isProd ? './' : '',
  output:'export',
  distDir: 'dist',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
