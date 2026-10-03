import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Host Insider Pro — Grow Your Airbnb Like an Insider",
  description:
    "A private, hosts-only community for Airbnb hosts who want better listings, more bookings, smarter systems, and practical guidance when things go wrong. Built by a former Airbnb Resolutions agent.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-midnight text-white">
        {children}
      </body>
    </html>
  );
}
