import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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

export const metadata: Metadata = {
  title: {
    default: "Dr Nate Myhill — Orthopaedic Surgeon Melbourne",
    template: "%s | Dr Nate Myhill — Orthopaedic Surgeon",
  },
  description: "Melbourne orthopaedic surgeon specialising in shoulder, hip and knee surgery. Consulting at Knox, Mitcham, Warringal, John Fawkner and Albury. Book today.",
  metadataBase: new URL("https://natemyhill.com.au"),
  openGraph: {
    siteName: "Dr Nate Myhill — Orthopaedic Surgeon",
    locale: "en_AU",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr Nate Myhill",
  description: "Specialist orthopaedic surgeon practising in Melbourne and Albury, with a focus in shoulder and upper limb surgery, hip and knee reconstruction, and trauma.",
  url: "https://natemyhill.com.au",
  telephone: "[phone number]",
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
        <Navigation />
        <div style={{ flex: 1 }}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
