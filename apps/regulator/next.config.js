/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,

  distDir: "dist",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  env: getEnvConfig(),
};

function getEnvConfig() {
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  const environment = process.env?.TARGET_ENV || process.env.NODE_ENV;
  try {
    return require(`./env-${environment}.json`);
  } catch (err) {
    return require("./env-development.json");
  }
}