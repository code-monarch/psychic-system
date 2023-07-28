"use client";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css"; // Toasts Notification
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Providers } from "../../redux/provider";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Emtech Frontend",
  description: "Emtech Frontend",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      className={`${montserrat.variable}`}
    >
      <body className='font-sans'>
        <Providers>
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
