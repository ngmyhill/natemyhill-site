import Link from "next/link";
import { DOCTOR, REFERRAL_INCLUDES, hasRealValue } from "@/lib/data";

// Compact referral details. "navy" is for the home page band, "light" for the referrers page.
export default function ReferrerPanel({ variant = "light" }: { variant?: "navy" | "light" }) {
  const navy = variant === "navy";
  const link = navy ? "#ffffff" : "#0f7a59";
  const muted = navy ? "#d3d1c7" : "#5f5e5a";
  const heading = navy ? "#ffffff" : "#1a2744";
  return (
    <div className={`referrer-panel${navy ? " on-navy" : ""}`}>
      <div>
        <dl className="referrer-contacts" style={{ color: muted }}>
          {hasRealValue(DOCTOR.fax) && (
            <div>
              <dt>Fax</dt>
              <dd style={{ color: heading }}>{DOCTOR.fax}</dd>
            </div>
          )}
          <div>
            <dt>Email</dt>
            <dd><a href={`mailto:${DOCTOR.email}`} style={{ color: link }}>{DOCTOR.email}</a></dd>
          </div>
          <div>
            <dt>Phone</dt>
            <dd><a href={`tel:${DOCTOR.phoneTel}`} style={{ color: link }}>{DOCTOR.phone}</a></dd>
          </div>
          {hasRealValue(DOCTOR.healthlinkId) && (
            <div>
              <dt>HealthLink ID</dt>
              <dd style={{ color: heading }}>{DOCTOR.healthlinkId}</dd>
            </div>
          )}
          {hasRealValue(DOCTOR.medicalObjectsId) && (
            <div>
              <dt>Medical Objects ID</dt>
              <dd style={{ color: heading }}>{DOCTOR.medicalObjectsId}</dd>
            </div>
          )}
        </dl>
        <p style={{ color: muted, fontSize: "15px", lineHeight: 1.65, margin: "1.25rem 0 0.75rem" }}>
          Referrals can also be sent securely by HealthLink or Medical Objects. For urgent or semi-urgent referrals, including trauma, acute fractures or time-sensitive orthopaedic presentations, please phone the practice directly on{" "}
          <a href={`tel:${DOCTOR.phoneTel}`} style={{ color: link, fontWeight: 500 }}>{DOCTOR.phone}</a>.
        </p>
        <Link href="/for-referrers/how-to-refer" style={{ color: link, fontWeight: 500 }}>How to refer →</Link>
      </div>
      <div>
        <h3 style={{ color: heading, marginTop: 0, marginBottom: "0.75rem" }}>What to include in a referral</h3>
        <ul className="referrer-includes" style={{ color: muted }}>
          {REFERRAL_INCLUDES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
