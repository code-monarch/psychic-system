const withMT = require("@material-tailwind/react/utils/withMT");

// Get Shared tailwind CSS config from tailwind-css repo package
const sharedConfig = require("@emtech/tailwind-config/tailwind.config.js");

module.exports = withMT({
  ...sharedConfig,
  content: [
    "./src/app/*.tsx",
    // Include UI package
    require.resolve("./node_modules/@emtech/ui/dist/cjs/index.mjs"),
    // Include Path to @material-tailwind Component
      "../../node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    // Include Path to @material-tailwind themes
      "../../node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/(appPages)/**/**/**/**/**/*.{ts,tsx}",
    "./src/app/(auth)/**/**/**/**/**/*.{ts,tsx}",
    "./src/app/(onboarding)/**/**/**/**/**/*.{ts,tsx}",
    "./src/pattern/**/**/**/**/**/*.{ts,tsx}",
  ],
});
