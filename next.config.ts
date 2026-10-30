import type { NextConfig } from "next";
import { DOCTOR } from "./src/lib/data";

// Escape the dots so the domain is matched literally in the host regex.
const liveHost = DOCTOR.domain.replace(/\./g, "\\.");

const nextConfig: NextConfig = {
  // Launch-day redirect: only the old production host. Preview hosts
  // (natemyhill-git-*.vercel.app and deployment URLs) are not matched.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "natemyhill\\.vercel\\.app" }],
        destination: `https://${DOCTOR.domain}/:path*`,
        permanent: true,
      },
      // Temporary single-page site: old page addresses go to the home page.
      // Not permanent, so search engines keep them for when the full site
      // comes back. Remove this block when restoring from `full-site-backup`.
      ...[
        "/about",
        "/appointments",
        "/locations/:path*",
        "/shoulder-upper-limb/:path*",
        "/hip-knee/:path*",
        "/trauma/:path*",
        "/for-patients/:path*",
        "/for-referrers/:path*",
      ].map((source) => ({ source, destination: "/", permanent: false })),
    ];
  },
  async headers() {
    return [
      {
        // Basic browser protections for every page. No full Content Security
        // Policy: the site collects nothing, and a strict CSP needs nonces on
        // Next's inline scripts. frame-ancestors alone stops clickjacking.
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Content-Security-Policy", value: "frame-ancestors 'self'" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
        ],
      },
      {
        // Keep every deployment that is not the live domain (for example the
        // *.vercel.app address) out of search results.
        source: "/:path*",
        // Every missing item must be absent for the header to apply, so this
        // covers the apex domain and its www form.
        missing: [
          { type: "host", value: liveHost },
          { type: "host", value: `www\\.${liveHost}` },
        ],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
