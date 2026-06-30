import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Findivo — AI Shopping Discovery",
  description:
    "Findivo is an AI-powered shopping discovery platform. Search products across stores, compare prices, find real discounts, and get the best deal.",
  keywords: [
    "shopping",
    "deals",
    "price comparison",
    "AI shopping assistant",
    "discounts",
    "fashion",
  ],
  openGraph: {
    title: "Findivo — AI Shopping Discovery",
    description:
      "Find the best deals across online stores with AI-powered product search.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} min-h-screen bg-cream text-findivo-900 antialiased dark:bg-findivo-900 dark:text-cream`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
