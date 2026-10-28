import Link from "next/link";
import { DOCTOR, LOCATIONS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="on-navy" style={{ background: "#1a2744", color: "#d3d1c7", marginTop: "auto" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 1.5rem 2rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
            <svg viewBox="0 0 100 100" width="36" height="36" aria-hidden="true">
              <circle cx="50" cy="50" r="34" fill="none" stroke="#1d9e75" strokeWidth="8" strokeLinecap="round" strokeDasharray="148.3 65.3" transform="rotate(100 50 50)"/>
              <circle cx="83.5" cy="44.1" r="7" fill="#f8f8f6"/>
            </svg>
            <div>
              <div style={{ fontFamily: "EB Garamond, Georgia, serif", fontSize: "1.15rem", color: "#ffffff", lineHeight: 1.1 }}>
                Dr Nate Myhill
              </div>
              <div style={{ fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#34b889" }}>
                Orthopaedic Surgeon
              </div>
            </div>
          </div>
          <div style={{ fontSize: "13px", lineHeight: 1.7 }}>
            <div>{DOCTOR.credentials}</div>
            <div style={{ marginTop: "0.5rem" }}>
              <a href={`tel:${DOCTOR.phoneTel}`} style={{ color: "#d3d1c7" }}>{DOCTOR.phone}</a>
            </div>
            <div>
              <a href={`mailto:${DOCTOR.email}`} style={{ color: "#d3d1c7" }}>{DOCTOR.email}</a>
            </div>
          </div>
        </div>

        {/* Specialties */}
        <div>
          <h3 style={{ color: "#ffffff", fontSize: "13px", fontFamily: "Inter, sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem", fontWeight: 500 }}>
            Specialties
          </h3>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "13px", lineHeight: 2 }}>
            <li><Link href="/shoulder-upper-limb" style={{ color: "#d3d1c7" }}>Shoulder & Upper Limb</Link></li>
            <li><Link href="/hip-knee" style={{ color: "#d3d1c7" }}>Hip & Knee</Link></li>
            <li><Link href="/trauma" style={{ color: "#d3d1c7" }}>Trauma</Link></li>
            <li><Link href="/shoulder-upper-limb/rotator-cuff-repair" style={{ color: "#d3d1c7" }}>Rotator Cuff Repair</Link></li>
            <li><Link href="/shoulder-upper-limb/shoulder-replacement" style={{ color: "#d3d1c7" }}>Shoulder Replacement</Link></li>
            <li><Link href="/hip-knee/total-hip-replacement" style={{ color: "#d3d1c7" }}>Hip Replacement</Link></li>
            <li><Link href="/hip-knee/acl-reconstruction" style={{ color: "#d3d1c7" }}>ACL Reconstruction</Link></li>
          </ul>
        </div>

        {/* Locations */}
        <div>
          <h3 style={{ color: "#ffffff", fontSize: "13px", fontFamily: "Inter, sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem", fontWeight: 500 }}>
            Locations
          </h3>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "13px", lineHeight: 2 }}>
            {LOCATIONS.map((loc) => (
              <li key={loc.slug}>
                <Link href={`/locations/${loc.slug}`} style={{ color: "#d3d1c7" }}>
                  {loc.name}, {loc.suburb}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Info */}
        <div>
          <h3 style={{ color: "#ffffff", fontSize: "13px", fontFamily: "Inter, sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem", fontWeight: 500 }}>
            Information
          </h3>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "13px", lineHeight: 2 }}>
            <li><Link href="/for-patients" style={{ color: "#d3d1c7" }}>For Patients</Link></li>
            <li><Link href="/for-referrers" style={{ color: "#d3d1c7" }}>For Referrers</Link></li>
            <li><Link href="/for-referrers/how-to-refer" style={{ color: "#d3d1c7" }}>How to Refer</Link></li>
            <li><Link href="/for-patients/fees-and-billing" style={{ color: "#d3d1c7" }}>Fees & Billing</Link></li>
            <li><Link href="/appointments" style={{ color: "#d3d1c7" }}>Book an Appointment</Link></li>
            <li><Link href="/privacy-policy" style={{ color: "#d3d1c7" }}>Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", padding: "1.25rem 1.5rem", maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", fontSize: "12px", color: "#a9a7a0" }}>
        <span>© {new Date().getFullYear()} Dr Nate Myhill. All rights reserved.</span>
        <span>
          <Link href="/privacy-policy" style={{ color: "#a9a7a0" }}>Privacy Policy</Link>
          {" · "}
          <span>drnatemyhill.com.au</span>
        </span>
      </div>
    </footer>
  );
}
