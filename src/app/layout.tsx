import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  title: `${COMPANY_INFO.name} | ${COMPANY_INFO.tagline}`,
  description: "Excellence in Diesel Generator solutions since 2009. Dealers for Cummins, Tata, KOEL, Caterpillar, TMTL, and Ashok Leyland, providing reliable backup power for construction, industry, and residential needs.",
  keywords: ["Diesel Generator Dealers", "Industrial Power Solutions", "Cummins Generator Rental", "Tata Power Systems", "Generator Sales and Service"],
  metadataBase: new URL('https://www.advancedpowerinfra.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${COMPANY_INFO.name} | Industrial Power Solutions`,
    description: "Providing high-quality diesel generators and backup power solutions across India since 2009.",
    url: 'https://www.advancedpowerinfra.com',
    siteName: COMPANY_INFO.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_INFO.name} | Industrial Power Solutions`,
    description: "Reliable diesel generator solutions for construction and industry.",
  },
  icons: {
    icon: '/icon.jpeg',
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
