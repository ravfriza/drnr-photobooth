import type { Metadata } from "next";
import { Geist, Geist_Mono, Patrick_Hand } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const patrickHand = Patrick_Hand({
  variable: "--font-patrick-hand",
  weight: "400",
  subsets: ["latin"],
});

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
      <body className={`${geistSans.variable} ${geistMono.variable} ${patrickHand.variable} font-sans antialiased bg-[#f5f5f5]`}>
        {children}
      </body>
    </html>
  );
}
