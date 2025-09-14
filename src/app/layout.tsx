import type { Metadata } from "next";
import localFont from 'next/font/local'

import "./globals.css";


const AnkaCoder = localFont({
  src: './AnkaCoder-r.ttf',
  display: 'swap',
  variable: '--font-anka-coder'
})

export const metadata: Metadata = {
  title: "DRNR",
  description: "yayaya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${AnkaCoder.variable} antialiased bg-[#f5f5f5]`} style={{fontFamily: 'var(--font-anka-coder)'}}>
        {children}
      </body>
    </html>
  );
}
