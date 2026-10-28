import type { Metadata } from "next";

export const SITE_NAME = "Dr Nate Myhill";

// Static 1200x630 share image in /public. Resolved against metadataBase.
export const OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Dr Nate Myhill, orthopaedic surgeon in Melbourne",
};

interface PageMetadataInput {
  /** Short page title. The root layout template adds " | Dr Nate Myhill". Omit on the home page to use the default title. */
  title?: string;
  description: string;
  /** Route path starting with "/", e.g. "/hip-knee/acl-reconstruction". Resolved against metadataBase. */
  path: string;
}

// Next.js replaces (does not merge) openGraph and twitter objects set in a child
// segment, so each page carries its own canonical, og:url and matching social titles.
export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : undefined;
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      ...(fullTitle ? { title: fullTitle } : {}),
      description,
      url: path,
      siteName: "Dr Nate Myhill — Orthopaedic Surgeon",
      locale: "en_AU",
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      ...(fullTitle ? { title: fullTitle } : {}),
      description,
      images: [OG_IMAGE.url],
    },
  };
}
