import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Shoulder & Upper Limb Surgery Melbourne — Dr Nate Myhill",
  description: "Dr Nate Myhill specialises in shoulder and upper limb surgery in Melbourne, including rotator cuff repair, shoulder replacement, instability, elbow and wrist surgery.",
};

const procedures = [
  { label: "Rotator Cuff Repair", href: "/shoulder-upper-limb/rotator-cuff-repair", desc: "Arthroscopic and open repair of partial and full-thickness rotator cuff tears." },
  { label: "Shoulder Replacement", href: "/shoulder-upper-limb/shoulder-replacement", desc: "Anatomic total shoulder replacement and reverse total shoulder arthroplasty." },
  { label: "Shoulder Instability", href: "/shoulder-upper-limb/shoulder-instability", desc: "Labral repair (Bankart) and Latarjet procedure for recurrent shoulder dislocation." },
  { label: "AC Joint Surgery", href: "/shoulder-upper-limb/ac-joint-surgery", desc: "Surgical management of acromioclavicular joint pathology including separation and arthritis." },
  { label: "Biceps Tendon Surgery", href: "/shoulder-upper-limb/biceps-tendon-surgery", desc: "Biceps tenodesis and tenotomy for long head of biceps pathology." },
  { label: "Tennis Elbow", href: "/shoulder-upper-limb/tennis-elbow", desc: "Surgical management of lateral epicondylitis when conservative treatment has not provided relief." },
  { label: "OK Procedure (Elbow)", href: "/shoulder-upper-limb/ok-procedure", desc: "The Outerbridge-Kashiwagi procedure for elbow arthritis and loose bodies." },
  { label: "UCL Reconstruction", href: "/shoulder-upper-limb/ucl-reconstruction", desc: "Ulnar collateral ligament reconstruction for medial elbow instability." },
  { label: "Cubital Tunnel Syndrome", href: "/shoulder-upper-limb/cubital-tunnel-syndrome", desc: "Surgical decompression of the ulnar nerve at the elbow." },
  { label: "Carpal Tunnel Syndrome", href: "/shoulder-upper-limb/carpal-tunnel-syndrome", desc: "Carpal tunnel decompression for median nerve compression at the wrist." },
  { label: "Wrist Fractures", href: "/shoulder-upper-limb/wrist-fractures", desc: "Surgical management of distal radius and scaphoid fractures." },
];

export default function ShoulderUpperLimbPage() {
  return (
    <PageLayout crumbs={[{ label: "Home", href: "/" }, { label: "Shoulder & Upper Limb" }]}>
      <h1>Shoulder &amp; upper limb surgery</h1>
      <p>
        Dr Myhill's primary clinical focus is shoulder and upper limb surgery. His practice spans the shoulder, elbow and wrist, with a particular interest in rotator cuff pathology and shoulder replacement.
      </p>
      <p>
        Approximately one-third of his upper limb practice involves sports injuries, one-third degenerative conditions, and one-third trauma. His training included an <strong>IBRA Scholarship at Erasmus MC, Rotterdam</strong> — a dedicated upper limb fellowship encompassing complex elective and trauma procedures.
      </p>

      <h2>Upper limb procedures</h2>
      <div style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
        {procedures.map((p) => (
          <Link key={p.href} href={p.href} style={{ display: "block", background: "#f8f8f6", border: "1px solid #d3d1c7", borderLeft: "3px solid #1d9e75", borderRadius: "4px", padding: "1rem 1.25rem", textDecoration: "none" }}>
            <div style={{ fontFamily: "EB Garamond, Georgia, serif", fontSize: "1.05rem", color: "#1a2744", marginBottom: "0.25rem" }}>{p.label}</div>
            <div style={{ fontSize: "13px", color: "#5f5e5a" }}>{p.desc}</div>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
