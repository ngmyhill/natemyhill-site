import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";
import ReferrerPanel from "@/components/ReferrerPanel";

export const metadata: Metadata = pageMetadata({
  title: "Referral Information for Clinicians",
  description: "Referral information for GPs, physiotherapists and emergency departments. How to refer to Dr Nate Myhill, specialist orthopaedic surgeon.",
  path: "/for-referrers",
});

export default function ForReferrersPage() {
  return (
    <PageLayout crumbs={[{ label: "Home", href: "/" }, { label: "For Referrers" }]} showCTA={false}>
      <h1>For referrers</h1>
      <p>
        Dr Myhill welcomes referrals from GPs, physiotherapists, allied health practitioners and emergency departments. He has a particular interest in shoulder and upper limb pathology, hip and knee surgery, and both upper and lower limb trauma.
      </p>

      <h2>What Dr Myhill sees</h2>
      <ul>
        <li><strong>Shoulder & upper limb</strong>: rotator cuff tears, shoulder arthritis (for replacement), shoulder instability, AC joint pathology, biceps pathology, tennis elbow, the OK (Outerbridge-Kashiwagi) elbow procedure, UCL reconstruction, cubital tunnel syndrome, carpal tunnel syndrome, wrist fractures</li>
        <li><strong>Hip & knee</strong>: hip and knee arthritis (for replacement), ACL reconstruction, meniscal injuries, knee arthroscopy, hip fractures</li>
        <li><strong>Trauma</strong>: upper and lower limb fractures and dislocations, including proximal humerus, clavicle, distal radius, scaphoid, elbow, hip, femur, tibia and ankle injuries</li>
      </ul>

      <h2>Referral information</h2>
      <div style={{ background: "#f8f8f6", border: "1px solid #d3d1c7", borderTop: "3px solid #1d9e75", borderRadius: "4px", padding: "1.75rem" }}>
        <ReferrerPanel variant="light" />
      </div>

      <h2>Correspondence</h2>
      <p>
        If you have not received a letter and require clinical information urgently, please contact the practice directly.
      </p>
    </PageLayout>
  );
}
