const sharedConfig = require("@emtech/tailwind-config/tailwind.config.js");

module.exports = {
  ...sharedConfig,
  content: [
    "./src/app/*.{ts,tsx}",
    // Add UI package
    require.resolve("./node_modules/@emtech/ui/dist/cjs/index.mjs"),
    "./src/app/(appPages)/**/**/**/**/**/*.{ts,tsx}",
    "./src/app/(auth)/**/**/**/**/**/*.{ts,tsx}",
    "./src/pattern/**/**/**/**/**/*.{ts,tsx}",
  ],
};
