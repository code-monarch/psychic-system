/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "",
  content: [
    "./**/**/**/**/**/**/**/**/*.{ts,tsx}",
    "./src/(appPages)/**/**/**/**/**/*.{ts,tsx}",
    "./src/(auth)/**/**/**/**/**/*.{ts,tsx}",
    "./src/pattern/**/**/**/**/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "sans-serif",
          ...defaultTheme.fontFamily.sans,
        ],
        serif: ["Montserrat", "sans-serif"],
        ttfirs: ["TTFirs-regular", "sans-serif"],
      },
      // Semantic Colors
      colors: {
        primary: {
          100: "#F2F7FF",
          150: "#D9E8FF",
          900: "#D9E8FF",
          700: "#0067FC",
          600: "#1F79FC",
          500: "#0067fc3d",
        },
        gray: {
          40: "#F5F4F8",
          50: "#F5F4F8",
          60: "#8E8DA1",
          100: "#6C6B7A",
          200: "#E6E6F0",
        },
        success: {
          50: "#E0EFE7",
          100: "#32965D",
        },
        primaryBlue: "#174CFF",
        semanticBlack: "#27272B",
        disabledBtn: "#D9D8E7",
        navLink: "#DBD8FB",
        primaryGradient: "linear-gradient(180deg,_#6F61ED_0%,_#473D9D_100%);",
        secondaryGradient: "linear-gradient(180deg,_#F4E6DE_0%,_#DAC6BC_100%)",
        primaryText: "#1E252D",
        secondaryText: "#C0933E",
        grayBackGround: "#F9F8FB",
        darkBackground: "#1E252D",
        inputBorder: "#8499B1",
        surfaceColor: "#F8FAFE",
        inputDisabled: "#E6E6ED",
        inputPlaceholder: "#8499B1",
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
      },
      animation: {
        loading: "shimmer 2s infinite",
      },
    },
    backgroundImage: {
      "skeleton-gradient":
        "linear-gradient(90deg, rgba(#fff, 0) 0, rgba(#fff, 0.2) 20%, rgba(#fff, 0.5) 60%, rgba(#fff, 0)",
    },
  },
  plugins: [
    // Initialize with default values (see options below)
    require("tailwindcss-radix")(),
  ],
};
