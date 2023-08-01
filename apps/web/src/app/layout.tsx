"use client";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css"; // Toast styles
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/redux/provider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Emtech Frontend",
  description: "Emtech Frontend",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={`${inter.variable}`}>
      <body className='bg-grayBackGround min-h-screen font-sans'>
        <Providers>
          <div className='w-full h-full'>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
