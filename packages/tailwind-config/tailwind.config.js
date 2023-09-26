/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/app/*.tsx",
    "./src/app/(appPages)/**/**/**/**/**/*.{ts,tsx}",
    "./src/app/(auth)/**/**/**/**/**/*.{ts,tsx}",
    "./src/app/(onboarding)/**/**/**/**/**/*.{ts,tsx}",
    "./src/pattern/**/**/**/**/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-avenir)",
          "sans-serif",
          ...defaultTheme.fontFamily.sans,
        ],
        serif: ["var(--font-inter)", "sans-serif"],
      },
      // Semantic Colors
      colors: {
        primaryBlue: "#174CFF",
        semanticGreen: "#3FCC6A",
        semanticRed: "#FF5A5C",
        semanticBlack: "#27272B",
        disabledBtn: "#D9D8E7",
        navLink: "#DBD8FB",
        primaryGradient: "linear-gradient(180deg,_#6F61ED_0%,_#473D9D_100%);",
        secondaryGradient: "linear-gradient(180deg,_#F4E6DE_0%,_#DAC6BC_100%)",
        primaryBlack: "#2E3B4A",
        primaryText: "#1E252D",
        secondaryText: "#C0933E",
        grayBackGround: "#F9F8FB",
        darkBackground: "#1E252D",
        inputBorder: "#8499B1",
        surfaceColor: "#F8FAFE",
        inputDisabled: "#E6E6ED",
        inputPlaceholder: "#8499B1",
        borderColor: "#DEE3EB",
      },
      boxShadow: {
        shadow1: "0px 6px 6px rgba(24, 39, 75, 0.12)",
      },
      screens: {
        xsm: "1px",
        // => @media (min-width: 1px) { ... }

        sm: "321px",
        // => @media (min-width: 320px) { ... }

        md: "450px",
        // => @media (min-width: 450px) { ... }

        lg: "560px",
        // => @media (min-width: 560px) { ... }

        BigPhones: "640px",
        // => @media (min-width: 640px) { ... }

        tablets: "768px",
        // => @media (min-width: 768px) { ... }

        smLaptops: "1024px",
        // => @media (min-width: 1024px) { ... }

        laptop: "1280px",
        // => @media (min-width: 1280px) { ... }

        desktop: "1426px",
        // => @media (min-width: 1728px) { ... }

        lgDesktops: "2000px",
        // => @media (min-width: 1728px) { ... }
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        contentShow: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        contentHide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        loading: "shimmer 2s infinite",
        contentShow: "contentShow 0.5s cubic-bezier(0.4, 0.0, 0.2, 1)",
        contentHide: "contentHide 0.5s cubic-bezier(0.4, 0.0, 0.2, 1)",
      },
      backgroundImage: {
        "skeleton-gradient":
          "linear-gradient(90deg, rgba(#fff, 0) 0, rgba(#fff, 0.2) 20%, rgba(#fff, 0.5) 60%, rgba(#fff, 0)",
        onboardingHeaderImage: "url('/public/onboarding-modal-header.png')",
      },
    },
    // backgroundImage: {
    //   "skeleton-gradient":
    //     "linear-gradient(90deg, rgba(#fff, 0) 0, rgba(#fff, 0.2) 20%, rgba(#fff, 0.5) 60%, rgba(#fff, 0)",
    //   onboardingHeaderImage: "url('/public/onboarding-modal-header.png')",
    // },
  },
  plugins: [
    // Initialize with default values (see options below)
    require("tailwindcss-radix")(),
  ],
};
