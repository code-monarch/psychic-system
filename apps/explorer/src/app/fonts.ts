import localFont from "next/font/local";
import { Inter } from "next/font/google";

const avenirFont = localFont({
  display: "swap",
  variable: "--font-avenir",
  src: [
    {
      path: "./fonts/Avenir-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Avenir-LightOblique.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/Avenir-Heavy.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Avenir-HeavyOblique.ttf",
      weight: "900",
      style: "italic",
    },
    {
      path: "./fonts/Avenir-Book.ttf",
      weight: "normal",
      style: "normal",
    },
    {
      path: "./fonts/Avenir-BookOblique.ttf",
      weight: "normal",
      style: "italic",
    },
    {
      path: "./fonts/Avenir-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Avenir-MediumOblique.ttf",
      weight: "500",
      style: "italic",
    },
  ],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export { avenirFont, inter };
