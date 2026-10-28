import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";
import { DOCTOR } from "@/lib/data";
import { DOWNLOADS_DIR, available, exerciseSheets, patientSheets, type Resource } from "@/lib/downloads";

export const metadata: Metadata = pageMetadata({
  title: "Referral Resources for Clinicians",
  description: "Ways to refer a patient to Dr Nate Myhill, for referring practitioners.",
  path: "/for-referrers/referral-resources",
});

function ResourceList({ items }: { items: Resource[] }) {
  return (
    <div style={{ display: "grid", gap: "0.75rem", marginTop: "0.75rem" }}>
      {items.map((item) => (
        <div key={item.file} style={{ background: "#f8f8f6", border: "1px solid #d3d1c7", borderRadius: "4px", padding: "0.75rem 1rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
          <span style={{ fontSize: "14px", color: "#1a2744" }}>{item.label}</span>
          <a href={`/${DOWNLOADS_DIR}/${item.file}`} style={{ color: "#0f7a59", fontSize: "13px", fontWeight: 500 }}>Download →</a>
        </div>
      ))}
    </div>
  );
}

export default function ReferralResourcesPage() {
  const patients = available(patientSheets);
  const exercises = available(exerciseSheets);
  return (
    <PageLayout
      crumbs={[{ label: "Home", href: "/" }, { label: "For Referrers", href: "/for-referrers" }, { label: "Referral Resources" }]}
      showCTA={false}
    >
      <h1>Referral resources</h1>
      <p>
        Information to help referring practitioners.
      </p>

      <h2>Making a referral</h2>
      <p>
        GPs can refer by fax to <strong>{DOCTOR.fax}</strong>, by email to <a href={`mailto:${DOCTOR.email}`}>{DOCTOR.email}</a>, or by phone on <a href={`tel:${DOCTOR.phoneTel}`}>{DOCTOR.phone}</a>. Any standard referral letter is accepted.
      </p>

      {patients.length > 0 && (
        <>
          <h2>Patient information sheets</h2>
          <p>
            Procedure-specific information sheets for patients. These can be provided at the time of referral to help patients understand their condition and what to expect before their consultation.
          </p>
          <ResourceList items={patients} />
        </>
      )}

      {exercises.length > 0 && (
        <>
          <h2>Post-operative exercise sheets</h2>
          <p>
            Post-operative exercise sheets on Dr Myhill&apos;s letterhead. These can be provided to patients and their physiotherapists.
          </p>
          <ResourceList items={exercises} />
        </>
      )}
    </PageLayout>
  );
}
