import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/data";

// Temporary single-page site. The full site's sitemap is on the
// `full-site-backup` branch.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: `${SITE_URL}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
