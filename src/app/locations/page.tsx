import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import { LOCATIONS, LOCATION_COUNT_WORD, hasRealValue, joinList } from "@/lib/data";

export const metadata: Metadata = pageMetadata({
  title: "Locations in Melbourne and Albury",
  description: `Dr Nate Myhill consults and operates at ${LOCATION_COUNT_WORD} locations across Melbourne and Albury, including ${joinList(LOCATIONS.map((l) => l.suburb))}.`,
  path: "/locations",
});

export default function LocationsPage() {
  return (
    <PageLayout crumbs={[{ label: "Home", href: "/" }, { label: "Locations" }]}>
      <h1>Consulting &amp; operating locations</h1>
      <p>
        Dr Myhill is available across {LOCATION_COUNT_WORD} locations in metropolitan Melbourne and Albury (NSW). Consulting schedules vary. Contact the practice for current availability at each location.
      </p>

      <div style={{ display: "grid", gap: "1.5rem", marginTop: "2rem" }}>
        {LOCATIONS.map((loc) => (
          <div key={loc.slug} style={{ background: "#f8f8f6", border: "1px solid #d3d1c7", borderLeft: "3px solid #1d9e75", borderRadius: "4px", padding: "1.5rem" }}>
            <div style={{ fontSize: "12px", color: "#0f7a59", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.3rem" }}>{loc.type}</div>
            <h3 style={{ marginTop: 0, marginBottom: "0.25rem" }}>
              <Link href={`/locations/${loc.slug}`}>{loc.name}</Link>
            </h3>
            <p style={{ fontSize: "14px", color: "#5f5e5a", margin: "0 0 0.75rem" }}>{loc.suburb}, {loc.state}{hasRealValue(loc.address) && ` · ${loc.address}`}</p>
            <div style={{ fontSize: "13px", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {loc.services.map((s) => (
                <span key={s} style={{ background: "#ffffff", border: "1px solid #d3d1c7", borderRadius: "2px", padding: "0.2rem 0.5rem" }}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
