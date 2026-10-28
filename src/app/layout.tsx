import type { Metadata, Viewport } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import { DOCTOR, SITE_URL } from "@/lib/data";
import { OG_IMAGE } from "@/lib/seo";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-garamond",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// viewport-fit=cover lets the sticky mobile bar respect the iOS safe-area inset
export const viewport: Viewport = { viewportFit: "cover" };

export const metadata: Metadata = {
  title: {
    default: "Dr Nate Myhill — Orthopaedic Surgeon Melbourne",
    template: "%s | Dr Nate Myhill",
  },
  description: "Melbourne orthopaedic surgeon with a special interest in shoulder, upper limb and sports surgery, and general orthopaedics.",
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    siteName: "Dr Nate Myhill — Orthopaedic Surgeon",
    locale: "en_AU",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: { card: "summary_large_image", images: [OG_IMAGE.url] },
  robots: { index: true, follow: true },
};

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr Nate Myhill",
  description: "Specialist orthopaedic surgeon practising in Melbourne and Albury, with a focus in shoulder and upper limb surgery, hip and knee reconstruction, and trauma.",
  url: SITE_URL,
  telephone: DOCTOR.phoneSchema,
  faxNumber: DOCTOR.faxSchema,
  medicalSpecialty: "Orthopedic Surgery",
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: "MBBS" },
    { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "FRACS(Ortho)" },
    { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: "MPH" },
    { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: "BSc" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Melbourne",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${ebGaramond.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
        />
      </head>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content" tabIndex={-1} style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
