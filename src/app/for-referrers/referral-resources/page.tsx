import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";
import fs from "node:fs";
import path from "node:path";
import { DOCTOR } from "@/lib/data";

export const metadata: Metadata = pageMetadata({
  title: "Referral Resources for Clinicians",
  description: "Ways to refer a patient to Dr Nate Myhill, for referring practitioners.",
  path: "/for-referrers/referral-resources",
});

const DOWNLOADS_DIR = "downloads";

interface Resource { label: string; file?: string }

// Add a PDF to public/downloads and set its file name here: the item, and its section, then appear.
const patientSheets: Resource[] = [
  { label: "Rotator Cuff Repair — Patient Information", file: "patient-info-rotator-cuff.pdf" },
  { label: "Shoulder Replacement — Patient Information", file: "patient-info-shoulder-replacement.pdf" },
  { label: "Shoulder Instability — Patient Information", file: "patient-info-shoulder-instability.pdf" },
  { label: "Total Hip Replacement — Patient Information", file: "patient-info-hip-replacement.pdf" },
  { label: "Total Knee Replacement — Patient Information", file: "patient-info-knee-replacement.pdf" },
  { label: "ACL Reconstruction — Patient Information", file: "patient-info-acl.pdf" },
  { label: "Carpal Tunnel Syndrome — Patient Information", file: "patient-info-carpal-tunnel.pdf" },
  { label: "Wrist Fractures — Patient Information", file: "patient-info-wrist-fractures.pdf" },
];

const exerciseSheets: Resource[] = [
  { label: "Rotator Cuff Repair — Post-operative Exercises", file: "exercises-rotator-cuff.pdf" },
  { label: "Shoulder Replacement — Post-operative Exercises", file: "exercises-shoulder-replacement.pdf" },
  { label: "Total Hip Replacement — Post-operative Exercises", file: "exercises-hip-replacement.pdf" },
  { label: "Total Knee Replacement — Post-operative Exercises", file: "exercises-knee-replacement.pdf" },
  { label: "ACL Reconstruction — Post-operative Exercises", file: "exercises-acl.pdf" },
];

// Only items whose PDF really exists in public/downloads
function available(items: Resource[]) {
  return items.filter((i) => i.file && fs.existsSync(path.join(process.cwd(), "public", DOWNLOADS_DIR, i.file)));
}

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
