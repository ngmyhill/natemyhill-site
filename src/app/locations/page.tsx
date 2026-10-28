import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import LocationLogo from "@/components/LocationLogo";
import { LOCATIONS, LOCATION_COUNT_WORD, hasRealValue, joinList, regionOf } from "@/lib/data";

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

      {(["Melbourne", "Albury"] as const).map((region) => (
        <section key={region}>
          <h2>{region}</h2>
          <div className="location-grid">
            {LOCATIONS.filter((l) => regionOf(l) === region).map((loc) => (
              <div key={loc.slug} className="location-card">
                <LocationLogo slug={loc.slug} name={loc.name} />
                <h3 style={{ margin: "0 0 0.25rem" }}>
                  <Link href={`/locations/${loc.slug}`}>{loc.name}</Link>
                </h3>
                <p style={{ fontSize: "15px", margin: 0 }}>
                  {loc.suburb}
                  {hasRealValue(loc.address) && ` · ${loc.address}`}
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </PageLayout>
  );
}
