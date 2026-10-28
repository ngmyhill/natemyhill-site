import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import PageLayout from "@/components/PageLayout";
import LocationLogo from "@/components/LocationLogo";
import { DOCTOR, LOCATIONS, hasRealValue } from "@/lib/data";

export function generateStaticParams() {
  return LOCATIONS.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) return {};
  return pageMetadata({
    title: `${loc.name} in ${loc.suburb}`,
    description: `Dr Nate Myhill consults at ${loc.name} in ${loc.suburb}, ${loc.state}. ${loc.type}. ${loc.services.join(", ")}.`,
    path: `/locations/${loc.slug}`,
  });
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) notFound();

  return (
    <PageLayout crumbs={[{ label: "Home", href: "/" }, { label: "Locations", href: "/locations" }, { label: loc.name }]}>
      <LocationLogo slug={loc.slug} name={loc.name} />
      <h1>{loc.name}</h1>
      <p style={{ color: "#5f5e5a", marginTop: "0.25rem" }}>{loc.type}, {loc.suburb}</p>

      {hasRealValue(loc.address) && (
        <>
          <h2>Address</h2>
          <p>{loc.address}</p>
        </>
      )}
      <p>
        <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer">View on Google Maps →</a>
      </p>

      <h2>Services at this location</h2>
      <ul>
        {loc.services.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      <h2>Appointments</h2>
      <p>
        To book a consultation at {loc.name}, please contact the practice.
      </p>
      <p>
        <strong>Phone:</strong> <a href={`tel:${DOCTOR.phoneTel}`}>{DOCTOR.phone}</a>
        {hasRealValue(DOCTOR.fax) && (
          <>
            <br />
            <strong>Fax:</strong> {DOCTOR.fax}
          </>
        )}
      </p>
    </PageLayout>
  );
}
