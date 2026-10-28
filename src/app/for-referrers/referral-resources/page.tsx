import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";
import { DOCTOR } from "@/lib/data";

export const metadata: Metadata = pageMetadata({
  title: "Referral Resources for Clinicians",
  description: "Ways to refer, plus patient information sheets for referring practitioners.",
  path: "/for-referrers/referral-resources",
});

export default function ReferralResourcesPage() {
  return (
    <PageLayout
      crumbs={[{ label: "Home", href: "/" }, { label: "For Referrers", href: "/for-referrers" }, { label: "Referral Resources" }]}
      showCTA={false}
    >
      <h1>Referral resources</h1>
      <p>
        The following resources are available to assist referring practitioners. All documents are provided in PDF format and can be printed or forwarded to patients.
      </p>

      <h2>Making a referral</h2>
      <p>
        GPs can refer by fax to <strong>{DOCTOR.fax}</strong>, by email to <a href={`mailto:${DOCTOR.email}`}>{DOCTOR.email}</a>, or by phone on <a href={`tel:${DOCTOR.phoneTel}`}>{DOCTOR.phone}</a>. Any standard referral letter is accepted.
      </p>

      <h2>Patient information sheets</h2>
      <p>
        Procedure-specific information sheets for patients. These can be provided at the time of referral to help patients understand their condition and what to expect before their consultation.
      </p>
      <div style={{ display: "grid", gap: "0.75rem" }}>
        {[
          { label: "Rotator Cuff Repair — Patient Information", file: "patient-info-rotator-cuff.pdf" },
          { label: "Shoulder Replacement — Patient Information", file: "patient-info-shoulder-replacement.pdf" },
          { label: "Shoulder Instability — Patient Information", file: "patient-info-shoulder-instability.pdf" },
          { label: "Total Hip Replacement — Patient Information", file: "patient-info-hip-replacement.pdf" },
          { label: "Total Knee Replacement — Patient Information", file: "patient-info-knee-replacement.pdf" },
          { label: "ACL Reconstruction — Patient Information", file: "patient-info-acl.pdf" },
          { label: "Carpal Tunnel Syndrome — Patient Information", file: "patient-info-carpal-tunnel.pdf" },
          { label: "Wrist Fractures — Patient Information", file: "patient-info-wrist-fractures.pdf" },
        ].map((item) => (
          <div key={item.file} style={{ background: "#f8f8f6", border: "1px solid #d3d1c7", borderRadius: "4px", padding: "0.75rem 1rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
            <span style={{ fontSize: "14px", color: "#1a2744" }}>{item.label}</span>
            <a href={`/downloads/${item.file}`} style={{ color: "#0f7a59", fontSize: "13px", fontWeight: 500 }}>Download →</a>
          </div>
        ))}
      </div>

      <h2>Post-operative exercise sheets</h2>
      <p>
        Post-operative exercise sheets on Dr Myhill's letterhead. These can be provided to patients and their physiotherapists.
      </p>
      <div style={{ display: "grid", gap: "0.75rem", marginTop: "0.75rem" }}>
        {[
          { label: "Rotator Cuff Repair — Post-operative Exercises", file: "exercises-rotator-cuff.pdf" },
          { label: "Shoulder Replacement — Post-operative Exercises", file: "exercises-shoulder-replacement.pdf" },
          { label: "Total Hip Replacement — Post-operative Exercises", file: "exercises-hip-replacement.pdf" },
          { label: "Total Knee Replacement — Post-operative Exercises", file: "exercises-knee-replacement.pdf" },
          { label: "ACL Reconstruction — Post-operative Exercises", file: "exercises-acl.pdf" },
        ].map((item) => (
          <div key={item.file} style={{ background: "#f8f8f6", border: "1px solid #d3d1c7", borderRadius: "4px", padding: "0.75rem 1rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
            <span style={{ fontSize: "14px", color: "#1a2744" }}>{item.label}</span>
            <a href={`/downloads/${item.file}`} style={{ color: "#0f7a59", fontSize: "13px", fontWeight: 500 }}>Download →</a>
          </div>
        ))}
      </div>

      <p style={{ marginTop: "1.5rem", fontSize: "14px", color: "#5f5e5a" }}>
        <em>PDF documents will be available at site launch. If you require a resource urgently, please contact the practice directly.</em>
      </p>
    </PageLayout>
  );
}
