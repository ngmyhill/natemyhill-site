import type { Metadata } from "next";
import Link from "next/link";
import { LOCATIONS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Dr Nate Myhill — Orthopaedic Surgeon Melbourne",
  description: "Melbourne orthopaedic surgeon specialising in shoulder, hip and knee surgery. Consulting at Knox, Mitcham, Warringal, John Fawkner and Albury. Book today.",
};

const pillars = [
  {
    title: "Shoulder & Upper Limb",
    href: "/shoulder-upper-limb",
    desc: "Rotator cuff repair, shoulder replacement, instability surgery, elbow and wrist conditions — specialist upper limb care informed by an IBRA Scholarship at Erasmus MC, Rotterdam.",
    links: [
      { label: "Rotator Cuff Repair", href: "/shoulder-upper-limb/rotator-cuff-repair" },
      { label: "Shoulder Replacement", href: "/shoulder-upper-limb/shoulder-replacement" },
      { label: "Shoulder Instability", href: "/shoulder-upper-limb/shoulder-instability" },
      { label: "Carpal Tunnel Syndrome", href: "/shoulder-upper-limb/carpal-tunnel-syndrome" },
    ],
  },
  {
    title: "Hip & Knee",
    href: "/hip-knee",
    desc: "Total hip and knee replacement, ACL reconstruction, meniscal repair and knee arthroscopy — helping patients return to the activities that matter to them.",
    links: [
      { label: "Total Hip Replacement", href: "/hip-knee/total-hip-replacement" },
      { label: "Total Knee Replacement", href: "/hip-knee/total-knee-replacement" },
      { label: "ACL Reconstruction", href: "/hip-knee/acl-reconstruction" },
      { label: "Meniscal Repair", href: "/hip-knee/meniscal-repair" },
    ],
  },
  {
    title: "Trauma",
    href: "/trauma",
    desc: "Upper and lower limb trauma accepted from GPs, physiotherapists and emergency departments. Long-term follow-up provided.",
    links: [
      { label: "Upper Limb Trauma", href: "/trauma/upper-limb" },
      { label: "Lower Limb Trauma", href: "/trauma/lower-limb" },
      { label: "For Referrers", href: "/for-referrers" },
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "#1a2744", color: "#ffffff", padding: "5rem 1.5rem 4rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ color: "#1d9e75", fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem", fontWeight: 500 }}>
            Specialist Orthopaedic Surgery · Melbourne & Albury
          </p>
          <h1 style={{ color: "#ffffff", fontFamily: "EB Garamond, Georgia, serif", fontWeight: 400, lineHeight: 1.15, marginBottom: "1.5rem" }}>
            Orthopaedic care built around your life
          </h1>
          <p style={{ color: "#d3d1c7", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "560px", marginBottom: "2rem" }}>
            Dr Nate Myhill is a specialist orthopaedic surgeon with a focus in shoulder and upper limb surgery, hip and knee reconstruction, and trauma. Every treatment plan is shaped around your goals — not a one-size-fits-all answer.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/appointments" style={{ background: "#1d9e75", color: "#ffffff", padding: "0.75rem 1.75rem", borderRadius: "4px", fontWeight: 500, textDecoration: "none", fontSize: "15px" }}>
              Book an appointment
            </Link>
            <Link href="/for-referrers" style={{ border: "1px solid rgba(255,255,255,0.3)", color: "#ffffff", padding: "0.75rem 1.75rem", borderRadius: "4px", fontWeight: 400, textDecoration: "none", fontSize: "15px" }}>
              For referrers →
            </Link>
          </div>
        </div>
      </section>

      <div style={{ height: "4px", background: "#1d9e75" }} />

      {/* Pillars */}
      <section style={{ padding: "4rem 1.5rem", background: "#ffffff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", marginBottom: "0.5rem" }}>Areas of expertise</h2>
          <p style={{ textAlign: "center", color: "#888780", marginBottom: "3rem", fontSize: "15px" }}>
            Specialist care across three clinical pillars
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {pillars.map((p) => (
              <div key={p.href} style={{ background: "#f8f8f6", border: "1px solid #d3d1c7", borderTop: "3px solid #1d9e75", borderRadius: "4px", padding: "1.75rem" }}>
                <h3 style={{ marginTop: 0, marginBottom: "0.75rem" }}>
                  <Link href={p.href} style={{ color: "#1a2744", textDecoration: "none" }}>{p.title}</Link>
                </h3>
                <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#5f5e5a", marginBottom: "1.25rem" }}>{p.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "14px" }}>
                  {p.links.map((l) => (
                    <li key={l.href} style={{ borderTop: "1px solid #d3d1c7", padding: "0.4rem 0" }}>
                      <Link href={l.href} style={{ color: "#1d9e75" }}>→ {l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About strip */}
      <section style={{ background: "#f8f8f6", borderTop: "1px solid #d3d1c7", borderBottom: "1px solid #d3d1c7", padding: "3.5rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem", alignItems: "center" }}>
          <div>
            <p style={{ color: "#1d9e75", fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "0.75rem", fontWeight: 500 }}>Shared decision-making</p>
            <h2 style={{ marginTop: 0, marginBottom: "1rem" }}>A treatment plan built around your life</h2>
            <p style={{ fontSize: "15px", lineHeight: 1.75, marginBottom: "1rem" }}>
              Every patient arrives with their own goals, values and circumstances. Dr Myhill's approach begins with listening carefully — then making sure you understand your condition and every realistic option available to you.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              From there, decisions are made together. Whether that means surgery, non-surgical management or watchful waiting, the plan is one you have actively chosen.
            </p>
            <Link href="/about" style={{ color: "#1d9e75", fontWeight: 500 }}>About Dr Myhill →</Link>
          </div>
          <div style={{ background: "#ffffff", border: "1px solid #d3d1c7", borderRadius: "4px", padding: "2rem" }}>
            <p style={{ fontFamily: "EB Garamond, Georgia, serif", fontSize: "1.05rem", color: "#1a2744", fontStyle: "italic", lineHeight: 1.65, marginBottom: "1.25rem" }}>
              "Patients are collaborators, not passive recipients. The best plan is the one that fits your life."
            </p>
            <div style={{ fontSize: "13px", color: "#888780" }}>Dr Nate Myhill · FRACS(Ortho)</div>
            <div style={{ marginTop: "1.25rem", fontSize: "13px", lineHeight: 1.9 }}>
              <div><strong style={{ color: "#1a2744" }}>Fellowship:</strong> IBRA Scholarship, Erasmus MC Rotterdam</div>
              <div><strong style={{ color: "#1a2744" }}>Memberships:</strong> AOA · IBRA</div>
              <div><strong style={{ color: "#1a2744" }}>Credentials:</strong> MBBS · FRACS(Ortho) · MPH · BSc</div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section style={{ padding: "4rem 1.5rem", background: "#ffffff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", marginBottom: "0.5rem" }}>Consulting locations</h2>
          <p style={{ textAlign: "center", color: "#888780", marginBottom: "2.5rem", fontSize: "15px" }}>
            Seven locations across Melbourne and Albury
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
            {LOCATIONS.map((loc) => (
              <Link key={loc.slug} href={`/locations/${loc.slug}`} style={{ display: "block", background: "#f8f8f6", border: "1px solid #d3d1c7", borderRadius: "4px", padding: "1.25rem", textDecoration: "none" }}>
                <div style={{ fontSize: "13px", color: "#1d9e75", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>{loc.state}</div>
                <div style={{ fontFamily: "EB Garamond, Georgia, serif", fontSize: "1.05rem", color: "#1a2744", marginBottom: "0.2rem" }}>{loc.name}</div>
                <div style={{ fontSize: "13px", color: "#888780" }}>{loc.suburb} · {loc.type}</div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/locations" style={{ color: "#1d9e75", fontWeight: 500 }}>View all locations →</Link>
          </div>
        </div>
      </section>

      {/* Referrer CTA */}
      <section style={{ background: "#1a2744", padding: "3.5rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ color: "#ffffff", marginTop: 0, marginBottom: "0.5rem" }}>For GPs and referring practitioners</h2>
          <p style={{ color: "#d3d1c7", fontSize: "15px", marginBottom: "1.5rem" }}>
            Fast turnaround on correspondence. Secure eReferral via HealthLink. Consulting at seven locations across Melbourne and Albury.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/for-referrers/how-to-refer" style={{ background: "#1d9e75", color: "#ffffff", padding: "0.65rem 1.25rem", borderRadius: "4px", fontWeight: 500, textDecoration: "none", fontSize: "14px" }}>
              How to refer →
            </Link>
            <Link href="/for-referrers/referral-resources" style={{ border: "1px solid rgba(255,255,255,0.3)", color: "#ffffff", padding: "0.65rem 1.25rem", borderRadius: "4px", fontWeight: 400, textDecoration: "none", fontSize: "14px" }}>
              Referral template →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
