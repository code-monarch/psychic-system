/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
module.exports = {
  distDir: "dist",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
