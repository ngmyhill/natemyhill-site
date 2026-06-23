import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "For Referrers — Dr Nate Myhill",
  description: "Referral information for GPs, physiotherapists and emergency departments. How to refer to Dr Nate Myhill, specialist orthopaedic surgeon.",
};

export default function ForReferrersPage() {
  return (
    <PageLayout crumbs={[{ label: "Home", href: "/" }, { label: "For Referrers" }]} showCTA={false}>
      <h1>For referrers</h1>
      <p>
        Dr Myhill welcomes referrals from GPs, physiotherapists, allied health practitioners and emergency departments. He has a particular interest in shoulder and upper limb pathology, hip and knee surgery, and both upper and lower limb trauma.
      </p>

      <h2>What Dr Myhill sees</h2>
      <ul>
        <li><strong>Shoulder & upper limb</strong> — rotator cuff tears, shoulder arthritis (for replacement), shoulder instability, AC joint pathology, biceps pathology, tennis elbow, the OK (Outerbridge-Kashiwagi) elbow procedure, UCL reconstruction, cubital tunnel syndrome, carpal tunnel syndrome, wrist fractures</li>
        <li><strong>Hip & knee</strong> — hip and knee arthritis (for replacement), ACL reconstruction, meniscal injuries, knee arthroscopy, hip fractures</li>
        <li><strong>Trauma</strong> — upper and lower limb fractures and dislocations, including proximal humerus, clavicle, distal radius, scaphoid, elbow, hip, femur, tibia and ankle injuries</li>
      </ul>

      <h2>Referral information</h2>
      <div style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
        <Link href="/for-referrers/how-to-refer" style={{ display: "block", background: "#f8f8f6", border: "1px solid #d3d1c7", borderLeft: "3px solid #1d9e75", borderRadius: "4px", padding: "1rem 1.25rem", textDecoration: "none" }}>
          <div style={{ fontFamily: "EB Garamond, Georgia, serif", fontSize: "1.05rem", color: "#1a2744", marginBottom: "0.25rem" }}>How to refer</div>
          <div style={{ fontSize: "13px", color: "#5f5e5a" }}>Contact details, HealthLink ID, urgent referral process and what to include in a referral.</div>
        </Link>
        <Link href="/for-referrers/referral-resources" style={{ display: "block", background: "#f8f8f6", border: "1px solid #d3d1c7", borderLeft: "3px solid #1d9e75", borderRadius: "4px", padding: "1rem 1.25rem", textDecoration: "none" }}>
          <div style={{ fontFamily: "EB Garamond, Georgia, serif", fontSize: "1.05rem", color: "#1a2744", marginBottom: "0.25rem" }}>Referral resources</div>
          <div style={{ fontSize: "13px", color: "#5f5e5a" }}>Downloadable referral template and patient information sheets.</div>
        </Link>
      </div>

      <h2>Correspondence</h2>
      <p>
        Dr Myhill aims to provide prompt correspondence following consultations and procedures. If you have not received a letter and require clinical information urgently, please contact the practice directly.
      </p>
    </PageLayout>
  );
}
