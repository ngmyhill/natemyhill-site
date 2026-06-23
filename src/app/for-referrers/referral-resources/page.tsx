import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Referral Resources — Dr Nate Myhill",
  description: "Downloadable referral template and patient information sheets for referring practitioners.",
};

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

      <h2>Referral template</h2>
      <p>
        A structured referral template for orthopaedic referrals to Dr Myhill. Using this template ensures that all clinically relevant information is included and helps to avoid delays in triage.
      </p>
      <div style={{ background: "#f8f8f6", border: "1px solid #d3d1c7", borderLeft: "3px solid #1d9e75", borderRadius: "4px", padding: "1rem 1.25rem", marginBottom: "1rem" }}>
        <div style={{ fontFamily: "EB Garamond, Georgia, serif", fontSize: "1.05rem", color: "#1a2744", marginBottom: "0.5rem" }}>Orthopaedic Referral Template</div>
        <a href="/downloads/referral-template.pdf" style={{ background: "#1d9e75", color: "#ffffff", padding: "0.5rem 1rem", borderRadius: "4px", fontWeight: 500, fontSize: "13px", textDecoration: "none", display: "inline-block" }}>
          Download PDF →
        </a>
      </div>

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
            <a href={`/downloads/${item.file}`} style={{ color: "#1d9e75", fontSize: "13px", fontWeight: 500 }}>Download →</a>
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
            <a href={`/downloads/${item.file}`} style={{ color: "#1d9e75", fontSize: "13px", fontWeight: 500 }}>Download →</a>
          </div>
        ))}
      </div>

      <p style={{ marginTop: "1.5rem", fontSize: "14px", color: "#888780" }}>
        <em>PDF documents will be available at site launch. If you require a resource urgently, please contact the practice directly.</em>
      </p>
    </PageLayout>
  );
}
