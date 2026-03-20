import type { Metadata } from "next";
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Francisco Baralle — Software Engineer",
  description:
    "Software Engineer (Full Stack / Blockchain) with 6+ years of experience building data-intensive web platforms, backend systems, and blockchain infrastructure.",
  keywords: [
    "Francisco Baralle",
    "Software Engineer",
    "Full Stack",
    "Blockchain",
    "React",
    "Node.js",
    "TypeScript",
    "Web3",
  ],
  authors: [{ name: "Francisco Baralle" }],
  openGraph: {
    title: "Francisco Baralle — Software Engineer",
    description:
      "Full Stack & Blockchain Engineer with 6+ years of experience. Currently at Webflow.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Francisco Baralle — Software Engineer",
    description:
      "Full Stack & Blockchain Engineer with 6+ years of experience. Currently at Webflow.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
