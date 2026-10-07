import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Host Insider Pro — A Private Community for Airbnb Hosts",
  description:
    "You don't have to figure out Airbnb on your own. A private, hosts-only community where real hosting problems get real answers, from someone who spent three years inside Airbnb's Resolutions team.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-text">
        {children}
      </body>
    </html>
  );
}
