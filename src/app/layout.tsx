import type { Metadata, Viewport } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
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
    default: "Dr Nate Myhill, Orthopaedic Surgeon Melbourne",
    template: "%s | Dr Nate Myhill",
  },
  description: `Dr Nate Myhill, Orthopaedic Surgeon. Phone ${DOCTOR.phone} or email ${DOCTOR.email}.`,
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    siteName: "Dr Nate Myhill, Orthopaedic Surgeon",
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
  url: SITE_URL,
  telephone: DOCTOR.phoneSchema,
  faxNumber: DOCTOR.faxSchema,
  email: DOCTOR.email,
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
        <main id="main-content" tabIndex={-1} style={{ flex: 1 }}>
          {children}
        </main>
        <footer className="holding-footer">
          <span>&copy; {new Date().getFullYear()} Dr Nate Myhill</span>
          <Link href="/privacy-policy">Privacy policy</Link>
        </footer>
      </body>
    </html>
  );
}
