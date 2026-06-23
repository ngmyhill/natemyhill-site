import Link from "next/link";
import { DOCTOR } from "@/lib/data";

export default function CTABox({ referrer = false }: { referrer?: boolean }) {
  return (
    <div style={{ background: "#f8f8f6", border: "1px solid #d3d1c7", borderTop: "3px solid #1d9e75", borderRadius: "4px", padding: "2rem", marginTop: "3rem" }}>
      {referrer ? (
        <>
          <h3 style={{ marginTop: 0, marginBottom: "0.75rem" }}>Refer a patient</h3>
          <p style={{ marginBottom: "1rem", fontSize: "15px" }}>
            Dr Myhill accepts referrals from GPs, physiotherapists and emergency departments. Secure eReferral via HealthLink preferred.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/for-referrers/how-to-refer" style={{ background: "#1d9e75", color: "#ffffff", padding: "0.6rem 1.25rem", borderRadius: "4px", fontWeight: 500, fontSize: "14px", textDecoration: "none" }}>
              How to refer →
            </Link>
            <Link href="/for-referrers/referral-resources" style={{ border: "1px solid #1d9e75", color: "#1d9e75", padding: "0.6rem 1.25rem", borderRadius: "4px", fontWeight: 500, fontSize: "14px", textDecoration: "none" }}>
              Referral template →
            </Link>
          </div>
        </>
      ) : (
        <>
          <h3 style={{ marginTop: 0, marginBottom: "0.75rem" }}>Book an appointment</h3>
          <p style={{ marginBottom: "1rem", fontSize: "15px" }}>
            Consult with Dr Nate Myhill at Knox Private (Wantirna), Mitcham Private, Warringal Private (Heidelberg), John Fawkner Private (Coburg) or The Gardens Specialist Centre (Albury).
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/appointments" style={{ background: "#1d9e75", color: "#ffffff", padding: "0.6rem 1.25rem", borderRadius: "4px", fontWeight: 500, fontSize: "14px", textDecoration: "none" }}>
              Book online →
            </Link>
            <a href={`tel:${DOCTOR.phone}`} style={{ border: "1px solid #1a2744", color: "#1a2744", padding: "0.6rem 1.25rem", borderRadius: "4px", fontWeight: 500, fontSize: "14px", textDecoration: "none" }}>
              Call {DOCTOR.phone}
            </a>
          </div>
        </>
      )}
    </div>
  );
}
