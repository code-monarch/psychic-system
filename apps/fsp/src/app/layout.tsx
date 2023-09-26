"use client";
import React from "react";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css"; // Toast styles
import type { Metadata } from "next";
import { Providers } from "@/redux/provider";
import { avenirFont, inter } from "./fonts";

export const metadata: Metadata = {
  title: "FSP Application",
  description: "Emtech Frontend",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${inter.variable} ${avenirFont.variable} font-sans`}
    >
      <body className={`${avenirFont.variable} bg-grayBackGround`}>
        <Providers>
          <div className='w-full h-full'>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
