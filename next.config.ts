import type { NextConfig } from "next";
import { DOCTOR } from "./src/lib/data";

// Escape the dots so the domain is matched literally in the host regex.
const liveHost = DOCTOR.domain.replace(/\./g, "\\.");

const nextConfig: NextConfig = {
  async headers() {
    return [
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
