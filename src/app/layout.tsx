import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { LoadingProgress } from "@/components/layout/LoadingProgress";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drmuskansingh.com"),
  title: "Dr. Muskan Singh | Premium Orthodontics & Dentofacial Orthopedics",
  description: "Crafting confident smiles with precision orthodontics. Specialized care by Dr. Muskan Singh, MDS. Fixed braces, clear aligners, and more in Khandwa.",
  keywords: ["Orthodontist Khandwa", "Dr. Muskan Singh", "Clear Aligners Khandwa", "Braces Khandwa", "Dentofacial Orthopedics", "Smile Design"],
  authors: [{ name: "Dr. Muskan Singh" }],
  openGraph: {
    title: "Dr. Muskan Singh | Premium Orthodontics",
    description: "Expert orthodontic care in Khandwa. Specialized in aligners and braces.",
    url: "https://drmuskansingh.com",
    siteName: "Dr. Muskan Singh Orthodontics",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Dr. Muskan Singh Orthodontics",
  "image": "https://drmuskansingh.com/doctor.png",
  "telephone": "+917028714568",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ward No. 35, Lal Chowki, Nagchun Road",
    "addressLocality": "Khandwa",
    "postalCode": "450001",
    "addressCountry": "IN"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-premium-navy text-white selection:bg-premium-gold/30 selection:text-white min-h-screen antialiased overflow-x-hidden">
        <LoadingProgress />
        <SmoothScroll>
          <Navbar />
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
