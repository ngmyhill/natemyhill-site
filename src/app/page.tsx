import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { LOCATIONS } from "@/lib/data";

export const metadata: Metadata = pageMetadata({
  description: "Melbourne orthopaedic surgeon with a special interest in shoulder, upper limb and sports surgery, and general orthopaedics.",
  path: "/",
});

const specialties = [
  {
    title: "Shoulder & Upper Limb",
    href: "/shoulder-upper-limb",
    desc: "Rotator cuff repair, shoulder replacement, instability surgery, elbow and wrist conditions, with specialist upper limb care including an IBRA Scholarship at Erasmus MC, Rotterdam.",
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
    desc: "Total hip and knee replacement, ACL reconstruction, meniscal repair and knee arthroscopy, helping patients return to the activities that matter to them.",
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
    desc: "Upper and lower limb trauma accepted from GPs, physiotherapists and emergency departments. Prompt appointments and long-term follow-up.",
    links: [
      { label: "Upper Limb Trauma", href: "/trauma/upper-limb" },
      { label: "Lower Limb Trauma", href: "/trauma/lower-limb" },
      { label: "For Referrers", href: "/for-referrers" },
    ],
  },
];

const brandPillars = [
  {
    number: "01",
    title: "We decide together",
    body: "You have a say in every choice. Your plan starts from your goals and your daily life, and we go through the options together.",
  },
  {
    number: "02",
    title: "We get you moving",
    body: "Trained across the whole of orthopaedics, with a special interest in the shoulder, upper limb and sports. Surgery is a way to get you back to what you want to do.",
  },
  {
    number: "03",
    title: "We say it straight",
    body: "We explain things in plain English and define any jargon before we use it. Your GP gets a clear letter, and you get straight answers about your options.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="on-navy" style={{ background: "#1a2744", color: "#ffffff", padding: "5rem 1.5rem 4.5rem" }}>
        <div className="hero-grid" style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "3rem", alignItems: "center" }}>
          <div>
            <p style={{ color: "#34b889", fontSize: "12px", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "1.25rem", fontWeight: 500 }}>
              General Orthopaedics · Special interest: shoulder &amp; upper limb
            </p>
            <h1 style={{ color: "#ffffff", fontFamily: "EB Garamond, Georgia, serif", fontWeight: 400, lineHeight: 1.1, marginBottom: "1.5rem", fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}>
              The plan that fits<br />your life.
            </h1>
            <p style={{ color: "#d3d1c7", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "520px", marginBottom: "2rem" }}>
              Orthopaedic surgery in Melbourne, chosen with you. Special interest in the shoulder, upper limb and sports.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/appointments" style={{ background: "#34b889", color: "#1a2744", padding: "0.75rem 1.75rem", borderRadius: "4px", fontWeight: 500, textDecoration: "none", fontSize: "15px" }}>
                Book an appointment
              </Link>
              <Link href="/for-referrers" style={{ border: "1px solid rgba(255,255,255,0.3)", color: "#ffffff", padding: "0.75rem 1.75rem", borderRadius: "4px", fontWeight: 400, textDecoration: "none", fontSize: "15px" }}>
                Refer a patient →
              </Link>
            </div>
          </div>
          {/* Portrait: sits beside the text on wide screens, under it on phones */}
          <div className="hero-photo">
            <Image
              src="/images/nate-myhill-navy.jpg"
              alt="Dr Nate Myhill, orthopaedic surgeon"
              width={1068}
              height={1600}
              sizes="(max-width: 800px) 280px, 380px"
              preload
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 15%", display: "block" }}
            />
          </div>
        </div>
      </section>

      <div style={{ height: "4px", background: "#1d9e75" }} />

      {/* Brand pillars */}
      <section style={{ background: "#ffffff", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ textAlign: "center", color: "#5f5e5a", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            How Dr Myhill works
          </p>
          <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>Three promises, every consultation</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {brandPillars.map((p) => (
              <div key={p.number} style={{ borderTop: "3px solid #1d9e75", paddingTop: "1.5rem" }}>
                <div style={{ fontSize: "12px", letterSpacing: "0.2em", color: "#0f7a59", marginBottom: "0.75rem", fontWeight: 500 }}>{p.number}</div>
                <h3 style={{ fontFamily: "EB Garamond, Georgia, serif", fontSize: "1.4rem", fontWeight: 400, color: "#1a2744", marginTop: 0, marginBottom: "0.75rem" }}>{p.title}</h3>
                <p style={{ fontSize: "14px", lineHeight: 1.75, color: "#5f5e5a", margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section style={{ padding: "4rem 1.5rem", background: "#f8f8f6", borderTop: "1px solid #d3d1c7" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ textAlign: "center", color: "#5f5e5a", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            Areas of focus
          </p>
          <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>One surgeon for the whole limb</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {specialties.map((s) => (
              <div key={s.href} style={{ background: "#ffffff", border: "1px solid #d3d1c7", borderTop: "3px solid #1d9e75", borderRadius: "4px", padding: "1.75rem" }}>
                <h3 style={{ marginTop: 0, marginBottom: "0.75rem" }}>
                  <Link href={s.href} style={{ color: "#1a2744", textDecoration: "none" }}>{s.title}</Link>
                </h3>
                <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#5f5e5a", marginBottom: "1.25rem" }}>{s.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "14px" }}>
                  {s.links.map((l) => (
                    <li key={l.href} style={{ borderTop: "1px solid #d3d1c7", padding: "0.4rem 0" }}>
                      <Link href={l.href} style={{ color: "#0f7a59" }}>→ {l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About strip */}
      <section style={{ background: "#ffffff", borderTop: "1px solid #d3d1c7", borderBottom: "1px solid #d3d1c7", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem", alignItems: "center" }}>
          <div>
            <p style={{ color: "#0f7a59", fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "0.75rem", fontWeight: 500 }}>Shared decision-making</p>
            <h2 style={{ marginTop: 0, marginBottom: "1rem" }}>Choosing a treatment is a decision we make together</h2>
            <p style={{ fontSize: "15px", lineHeight: 1.75, marginBottom: "1rem" }}>
              Dr Myhill starts by listening to what the problem is and what you want to get back to. He then explains your condition and the realistic options, including non-surgical ones.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              That might mean surgery, non-surgical treatment or waiting and watching. Whichever it is, you make the choice.
            </p>
            <Link href="/about" style={{ color: "#0f7a59", fontWeight: 500 }}>About Dr Myhill →</Link>
          </div>
          <div style={{ background: "#f8f8f6", border: "1px solid #d3d1c7", borderRadius: "4px", padding: "2rem" }}>
            <div style={{ fontSize: "13px", lineHeight: 1.9 }}>
              <div><strong style={{ color: "#1a2744" }}>Scholarship:</strong> IBRA Scholarship, Erasmus MC Rotterdam</div>
              <div><strong style={{ color: "#1a2744" }}>Memberships:</strong> AOA · IBRA</div>
              <div><strong style={{ color: "#1a2744" }}>Credentials:</strong> MBBS · FRACS(Ortho) · MPH · BSc</div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section style={{ padding: "4rem 1.5rem", background: "#f8f8f6" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ textAlign: "center", color: "#5f5e5a", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            Consulting locations
          </p>
          <h2 style={{ textAlign: "center", marginBottom: "2.5rem" }}>Seven locations across Melbourne &amp; Albury</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            {LOCATIONS.map((loc) => (
              <Link key={loc.slug} href={`/locations/${loc.slug}`} style={{ display: "block", background: "#ffffff", border: "1px solid #d3d1c7", borderRadius: "4px", padding: "1.25rem", textDecoration: "none" }}>
                <div style={{ fontSize: "12px", color: "#0f7a59", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>{loc.state}</div>
                <div style={{ fontFamily: "EB Garamond, Georgia, serif", fontSize: "1.05rem", color: "#1a2744", marginBottom: "0.2rem" }}>{loc.name}</div>
                <div style={{ fontSize: "13px", color: "#5f5e5a" }}>{loc.suburb} · {loc.type}</div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/locations" style={{ color: "#0f7a59", fontWeight: 500 }}>View all locations →</Link>
          </div>
        </div>
      </section>

      {/* Referrer CTA */}
      <section className="on-navy" style={{ background: "#1a2744", padding: "3.5rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ color: "#ffffff", marginTop: 0, marginBottom: "0.5rem" }}>For GPs and referring practitioners</h2>
          <p style={{ color: "#d3d1c7", fontSize: "15px", maxWidth: "540px", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            Secure referral via HealthLink or Medical Objects. Consulting at seven locations across Melbourne and Albury. Referring is straightforward.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/for-referrers/how-to-refer" style={{ background: "#34b889", color: "#1a2744", padding: "0.65rem 1.25rem", borderRadius: "4px", fontWeight: 500, textDecoration: "none", fontSize: "14px" }}>
              How to refer →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
