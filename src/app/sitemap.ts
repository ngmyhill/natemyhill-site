import type { MetadataRoute } from "next";
import { LOCATIONS, NAV_ITEMS, SITE_URL } from "@/lib/data";

const BASE = SITE_URL;

const procedurePages = [
  "/shoulder-upper-limb/rotator-cuff-repair",
  "/shoulder-upper-limb/shoulder-replacement",
  "/shoulder-upper-limb/shoulder-instability",
  "/shoulder-upper-limb/ac-joint-surgery",
  "/shoulder-upper-limb/biceps-tendon-surgery",
  "/shoulder-upper-limb/tennis-elbow",
  "/shoulder-upper-limb/ok-procedure",
  "/shoulder-upper-limb/ucl-reconstruction",
  "/shoulder-upper-limb/cubital-tunnel-syndrome",
  "/shoulder-upper-limb/carpal-tunnel-syndrome",
  "/shoulder-upper-limb/wrist-fractures",
  "/hip-knee/total-hip-replacement",
  "/hip-knee/total-knee-replacement",
  "/hip-knee/acl-reconstruction",
  "/hip-knee/meniscal-repair",
  "/hip-knee/knee-arthroscopy",
  "/hip-knee/hip-trauma",
  "/trauma/upper-limb",
  "/trauma/lower-limb",
];

const staticPages = [
  "/",
  "/about",
  "/appointments",
  "/locations",
  "/shoulder-upper-limb",
  "/hip-knee",
  "/trauma",
  "/for-patients",
  "/for-patients/first-appointment",
  "/for-patients/fees-and-billing",
  "/for-patients/pre-operative-information",
  "/for-patients/post-operative-information",
  "/for-referrers",
  "/for-referrers/how-to-refer",
  "/for-referrers/referral-resources",
  "/privacy-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const locationEntries = LOCATIONS.map((loc) => ({
    url: `${BASE}/locations/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const procedureEntries = procedurePages.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const staticEntries = staticPages.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1.0 : 0.7,
  }));

  return [...staticEntries, ...procedureEntries, ...locationEntries];
}
