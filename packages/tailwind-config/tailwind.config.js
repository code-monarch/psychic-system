/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "",
  content: ["./**/**/**/**/**/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Taub-sans", "sans-serif", ...defaultTheme.fontFamily.sans],
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
        primaryBlue90: "#0067fc3d",
        semPrimary: "#0067FC",
        semSecondary:
          "linear-gradient(0deg,_rgba(255, 255, 255, 0.95),_rgba(255, 255, 255, 0.95))_ #0067FC;",
        semBlack: "#27272B",
        disabledBtn: "#D9D8E7",
        navLink: "#DBD8FB",
        primaryGradient: "linear-gradient(180deg,_#6F61ED_0%,_#473D9D_100%);",
        secondaryGradient: "linear-gradient(180deg,_#F4E6DE_0%,_#DAC6BC_100%)",
        primaryText: "#433A81",
        secondaryText: "#DBD8FB",
        dashboardBg: "#F9F8FB",
        inputBg: "#F5F5F7",
        inputDisabled: "#E6E6ED",
        inputPlaceholder: "#6B6B86",
      },
      boxShadow: {
        semShadow1: "0px 6px 6px rgba(24, 39, 75, 0.12)",
        semShadow2: "0px 6px 12px rgba(24,39, 75, 0.12)",
        semShadow3: "0px 12px 42px -6px rgba(24, 39, 75, 0.16)",
        semShadow4: "0px 14px 64px -4px rgba(24, 39, 75, 0.18)",
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
      "hero-pattern": "url('/img/hero-bg-img.svg')",
      "use-case-page-hero-bg": "url('/img/use-case-page-hero-bg.svg')",
      "prices-page-bg": "url('/img/prices-page-bg.svg')",
      "skeleton-gradient":
        "linear-gradient(90deg, rgba(#fff, 0) 0, rgba(#fff, 0.2) 20%, rgba(#fff, 0.5) 60%, rgba(#fff, 0)",
    },
  },
  plugins: [
    // Initialize with default values (see options below)
    require("tailwindcss-radix")(),
  ],
};
