import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // ← Change to Outfit
import "./globals.css";

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit', 
  display: 'swap', 
});

export const metadata: Metadata = {
  title: "Artist Commission Manager",
  description: "Manage your art commissions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="antialiased bg-white text-gray-900 font-sans">
        {children}
      </body>
    </html>
  );
}
