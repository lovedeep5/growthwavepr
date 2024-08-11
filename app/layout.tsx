import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Salon24.com - Premier Unisex Beauty and Makeup Services in Patiala",
  description:
    "Experience top-notch unisex beauty and makeup services at Salon24.com, located in Bhadurgarph, Patiala area. Our skilled professionals offer a comprehensive range of services including haircuts, facials, bridal makeup, and more. At Salon24, we prioritize your beauty and well-being, ensuring you leave our salon looking and feeling your best. Visit us today and discover why we're Patiala's favorite beauty destination!",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
