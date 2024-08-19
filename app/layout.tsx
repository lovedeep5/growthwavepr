import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Salon24.com - Unisex Beauty and Makeup Services in Patiala",
  description:
    "Experience top-notch unisex beauty and makeup services at Salon24.com in Bhadurgarh, Patiala. Our skilled professionals offer haircuts, facials, bridal makeup, and more. Visit us today to discover why we're Patiala's favorite beauty destination!",
  keywords:
    "Salon24, unisex beauty services, makeup services, Patiala, haircuts, facials, bridal makeup",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          property="og:title"
          content="Salon24.com - Unisex Beauty and Makeup Services in Patiala"
        />
        <meta
          property="og:description"
          content="Experience top-notch unisex beauty and makeup services at Salon24.com in Bhadurgarh, Patiala. Our skilled professionals offer haircuts, facials, bridal makeup, and more."
        />
        <meta
          property="og:image"
          content="https://salon24.com/seo/og-image.webp"
        />
        <meta property="og:url" content="https://salon24.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Salon24" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
