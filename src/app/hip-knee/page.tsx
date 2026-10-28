import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Hip & Knee Surgery Melbourne — Dr Nate Myhill",
  description: "Specialist hip and knee surgery in Melbourne. Dr Nate Myhill performs total hip and knee replacement, ACL reconstruction, meniscal repair and knee arthroscopy.",
};

const procedures = [
  { label: "Total Hip Replacement", href: "/hip-knee/total-hip-replacement", desc: "Total hip arthroplasty for hip arthritis and selected hip fractures." },
  { label: "Total Knee Replacement", href: "/hip-knee/total-knee-replacement", desc: "Total knee arthroplasty for end-stage knee arthritis." },
  { label: "ACL Reconstruction", href: "/hip-knee/acl-reconstruction", desc: "Anterior cruciate ligament reconstruction to restore knee stability after rupture." },
  { label: "Meniscal Repair", href: "/hip-knee/meniscal-repair", desc: "Arthroscopic repair of meniscal tears to preserve the knee's natural cushioning." },
  { label: "Knee Arthroscopy", href: "/hip-knee/knee-arthroscopy", desc: "Diagnostic and therapeutic keyhole surgery of the knee." },
  { label: "Hip Fracture & Trauma", href: "/hip-knee/hip-trauma", desc: "Surgical management of hip fractures and lower limb trauma." },
];

export default function HipKneePage() {
  return (
    <PageLayout crumbs={[{ label: "Home", href: "/" }, { label: "Hip & Knee" }]}>
      <h1>Hip &amp; knee surgery</h1>
      <p>
        Dr Myhill performs a broad range of hip and knee procedures, including joint replacement for arthritis and knee reconstruction for sporting injuries.
      </p>
      <p>
        Hip work includes total hip arthroplasty and the management of hip fractures in the trauma setting. Knee work spans arthroplasty, arthroscopy including meniscal repair, and ACL reconstruction.
      </p>

      <h2>Hip &amp; knee procedures</h2>
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
