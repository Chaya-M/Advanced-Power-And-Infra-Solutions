import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { COMPANY_INFO } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `Diesel Generator Sales & Service | ${COMPANY_INFO.name}`,
    template: `%s | ${COMPANY_INFO.name}`
  },
  description: "Premier Diesel Generator dealers in Bangalore. Sales, Rental, and Maintenance for Cummins, Tata, KOEL, Caterpillar, and more. Reliable power backup solutions since 2009.",
  keywords: [
    "Diesel Generator", 
    "Diesel Generator Dealers in Bangalore", 
    "Cummins Generator Rental", 
    "Tata Diesel Generators", 
    "KOEL Generator Service", 
    "Industrial Power Backup", 
    "Generator AMC Bangalore", 
    "Used Generator Buyback", 
    "Generator Installation Services",
    "Power Infrastructure Solutions"
  ],
  metadataBase: new URL('https://www.advancedpowerinfra.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Industrial Equipment',
  classification: 'Diesel Generator Sales and Service',
  verification: {
    google: 'B0VKJwGCgsIAN0NaG7tlvK89aBa_nHLJnnQrQTNlOoo',
  },
  openGraph: {
    title: `Diesel Generator Sales & Service | ${COMPANY_INFO.name}`,
    description: "Reliable diesel generator solutions for construction and industry. Authorized dealers for major brands across India.",
    url: 'https://www.advancedpowerinfra.com',
    siteName: COMPANY_INFO.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Diesel Generator Sales & Service | ${COMPANY_INFO.name}`,
    description: "Expert diesel generator solutions, sales, and rental for all your power needs.",
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <JsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
