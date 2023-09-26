const sharedConfig = require("@emtech/tailwind-config/tailwind.config.js");

module.exports = {
  ...sharedConfig,
  content: [
    "./src/components/**/**/*.{ts,tsx}",
    "./src/styles/**/**/*.{ts,tsx}",
  ],
};
