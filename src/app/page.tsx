import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import ReferrerPanel from "@/components/ReferrerPanel";
import { LOCATIONS, LOCATION_COUNT_WORD, locationLabel, regionOf } from "@/lib/data";

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

const regions = ["Melbourne", "Albury"] as const;

const buttonBase = { padding: "0.75rem 1.75rem", borderRadius: "4px", textDecoration: "none", fontSize: "15px" } as const;

export default function Home() {
  const [shoulder, ...others] = specialties;
  return (
    <>
      {/* Hero */}
      <section className="hero on-navy">
        <div className="hero-text">
          <p style={{ color: "#34b889", fontSize: "12px", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "1.25rem", fontWeight: 500 }}>
            General Orthopaedics · Special interest: shoulder &amp; upper limb
          </p>
          <h1 className="display" style={{ color: "#ffffff", fontWeight: 400, marginBottom: "1.5rem" }}>
            The plan that fits<br />your life.
          </h1>
          <p className="lead" style={{ color: "#d3d1c7", maxWidth: "30rem", marginBottom: "2rem" }}>
            Orthopaedic surgery in Melbourne, chosen with you. Special interest in the shoulder, upper limb and sports.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/appointments" style={{ ...buttonBase, background: "#34b889", color: "#1a2744", fontWeight: 500 }}>
              Book an appointment
            </Link>
            <Link href="/for-referrers" style={{ ...buttonBase, border: "1px solid rgba(255,255,255,0.3)", color: "#ffffff", fontWeight: 400 }}>
              Refer a patient →
            </Link>
          </div>
        </div>
        <div className="hero-photo">
          <Image
            src="/images/nate-myhill-navy.jpg"
            alt="Dr Nate Myhill, orthopaedic surgeon"
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
            preload
            style={{ objectFit: "cover", objectPosition: "50% 18%" }}
          />
        </div>
      </section>

      <div style={{ height: "4px", background: "#1d9e75" }} />

      {/* How we work */}
      <section style={{ background: "#ffffff", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ marginTop: 0, marginBottom: "2.5rem" }}>How we work</h2>
          <div className="how-grid">
            <div>
              <h3 className="statement">We decide together</h3>
              <p className="lead" style={{ margin: 0, maxWidth: "34rem" }}>
                You have a say in every choice. Your plan starts from your goals and your daily life, and we go through the options together.
              </p>
            </div>
            <div className="how-portrait">
              <Image
                src="/images/nate-myhill-light.jpg"
                alt="Dr Nate Myhill, orthopaedic surgeon"
                fill
                sizes="(max-width: 800px) 100vw, 400px"
                style={{ objectFit: "cover", objectPosition: "50% 22%" }}
              />
            </div>
          </div>
          <div className="how-pair">
            <div>
              <h3 style={{ marginTop: 0 }}>We get you moving</h3>
              <p style={{ margin: 0 }}>Trained across the whole of orthopaedics, with a special interest in the shoulder, upper limb and sports. Surgery is a way to get you back to what you want to do.</p>
            </div>
            <div>
              <h3 style={{ marginTop: 0 }}>We say it straight</h3>
              <p style={{ margin: 0 }}>We explain things in plain English and define any jargon before we use it. Your GP gets a clear letter, and you get straight answers about your options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Dr Myhill treats */}
      <section style={{ padding: "4.5rem 1.5rem", background: "#f8f8f6", borderTop: "1px solid #d3d1c7" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ marginTop: 0, marginBottom: "2.5rem" }}>What Dr Myhill treats</h2>
          <div className="treat-grid">
            <div className="treat-feature on-navy">
              <h3 style={{ marginTop: 0, marginBottom: "0.75rem" }}>
                <Link href={shoulder.href} style={{ color: "#ffffff", textDecoration: "none" }}>{shoulder.title}</Link>
              </h3>
              <p style={{ color: "#d3d1c7", lineHeight: 1.65, marginBottom: "1.5rem", maxWidth: "36rem" }}>{shoulder.desc}</p>
              <ul className="treat-links">
                {shoulder.links.map((l) => (
                  <li key={l.href}><Link href={l.href} style={{ color: "#34b889" }}>{l.label} →</Link></li>
                ))}
              </ul>
            </div>
            {others.map((s) => (
              <div key={s.href} className="treat-card">
                <h3 style={{ marginTop: 0, marginBottom: "0.5rem" }}>
                  <Link href={s.href} style={{ color: "#1a2744", textDecoration: "none" }}>{s.title}</Link>
                </h3>
                <p style={{ fontSize: "15px", lineHeight: 1.65, marginBottom: "1rem" }}>{s.desc}</p>
                <ul className="treat-links">
                  {s.links.map((l) => (
                    <li key={l.href}><Link href={l.href}>{l.label} →</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shared decision-making, short */}
      <section style={{ background: "#ffffff", borderTop: "1px solid #d3d1c7", borderBottom: "1px solid #d3d1c7", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "46rem", margin: "0 auto" }}>
          <h2 style={{ marginTop: 0, marginBottom: "1rem" }}>Choosing a treatment is a decision we make together</h2>
          <p style={{ lineHeight: 1.75, marginBottom: "1rem" }}>
            Dr Myhill starts by listening to what the problem is and what you want to get back to. He then explains your condition and the realistic options, including non-surgical ones.
          </p>
          <p style={{ lineHeight: 1.75, marginBottom: "1.5rem" }}>
            That might mean surgery, non-surgical treatment or waiting and watching. Whichever it is, you make the choice.
          </p>
          <Link href="/about" style={{ fontWeight: 500 }}>About Dr Myhill →</Link>
        </div>
      </section>

      {/* Locations */}
      <section style={{ padding: "4.5rem 1.5rem", background: "#f8f8f6" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ marginTop: 0, marginBottom: "1.5rem", }}>Consulting locations</h2>
          <p style={{ marginBottom: "1.5rem" }}>Dr Myhill consults at {LOCATION_COUNT_WORD} locations across Melbourne and Albury.</p>
          <div style={{ borderTop: "1px solid #d3d1c7" }}>
            {regions.map((region) => (
              <p key={region} className="region-line">
                <strong>{region}</strong>
                <span>
                  {LOCATIONS.filter((l) => regionOf(l) === region).map((loc, i) => (
                    <span key={loc.slug}>
                      {i > 0 && <span aria-hidden="true"> · </span>}
                      <Link href={`/locations/${loc.slug}`}>{locationLabel(loc)}</Link>
                    </span>
                  ))}
                </span>
              </p>
            ))}
          </div>
          <p style={{ marginTop: "1.5rem" }}>
            <Link href="/locations" style={{ fontWeight: 500 }}>View all locations →</Link>
          </p>
        </div>
      </section>

      {/* Referrers */}
      <section className="on-navy" style={{ background: "#1a2744", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ color: "#ffffff", marginTop: 0, marginBottom: "1.75rem" }}>For GPs and referring practitioners</h2>
          <ReferrerPanel variant="navy" />
        </div>
      </section>
    </>
  );
}
