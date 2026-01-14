import "./globals.css";

import type { Metadata } from "next";
import { Playfair_Display, Playfair_Display_SC, Space_Grotesk } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

const playfairSmallCaps = Playfair_Display_SC({
  subsets: ["latin"],
  variable: "--font-serif-caps",
  weight: ["400"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AANGVI — Wedding & Luxury Event Design",
  description:
    "AANGVI crafts couture celebrations, fusing hospitality, design, and technology for unforgettable experiences across India and beyond.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${playfair.variable} ${playfairSmallCaps.variable}`}>
        {children}
      </body>
    </html>
  );
}