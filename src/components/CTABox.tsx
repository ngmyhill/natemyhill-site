import Link from "next/link";
import { DOCTOR, LOCATION_COUNT_WORD } from "@/lib/data";

export default function CTABox({ referrer = false }: { referrer?: boolean }) {
  return (
    <div style={{ background: "#f8f8f6", border: "1px solid #d3d1c7", borderTop: "3px solid #1d9e75", borderRadius: "4px", padding: "2rem", marginTop: "3rem" }}>
      {referrer ? (
        <>
          <h3 style={{ marginTop: 0, marginBottom: "0.75rem" }}>Refer a patient</h3>
          <p style={{ marginBottom: "1rem", fontSize: "15px" }}>
            Dr Myhill accepts referrals from GPs, physiotherapists and emergency departments. Secure referral via HealthLink or Medical Objects preferred.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/for-referrers/how-to-refer" style={{ background: "#0f7a59", color: "#ffffff", padding: "0.6rem 1.25rem", borderRadius: "4px", fontWeight: 500, fontSize: "14px", textDecoration: "none" }}>
              How to refer →
            </Link>
          </div>
        </>
      ) : (
        <>
          <h3 style={{ marginTop: 0, marginBottom: "0.75rem" }}>Book an appointment</h3>
          <p style={{ marginBottom: "1rem", fontSize: "15px" }}>
            Dr Myhill consults at {LOCATION_COUNT_WORD} locations across Melbourne and Albury. <Link href="/locations">See all locations →</Link>
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/appointments" style={{ background: "#0f7a59", color: "#ffffff", padding: "0.6rem 1.25rem", borderRadius: "4px", fontWeight: 500, fontSize: "14px", textDecoration: "none" }}>
              How to book →
            </Link>
            <a href={`tel:${DOCTOR.phoneTel}`} style={{ border: "1px solid #1a2744", color: "#1a2744", padding: "0.6rem 1.25rem", borderRadius: "4px", fontWeight: 500, fontSize: "14px", textDecoration: "none" }}>
              Call {DOCTOR.phone}
            </a>
          </div>
        </>
      )}
    </div>
  );
}
