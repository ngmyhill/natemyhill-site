import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = pageMetadata({
  title: "About Your Orthopaedic Surgeon",
  description: "Dr Nate Myhill is a specialist orthopaedic surgeon with FRACS(Ortho), an IBRA Scholarship at Erasmus MC Rotterdam, and membership of AOA and IBRA. Based in Melbourne.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageLayout crumbs={[{ label: "Home", href: "/" }, { label: "About Dr Myhill" }]}>
      <h1>About Dr Nate Myhill</h1>
      <p style={{ fontFamily: "EB Garamond, Georgia, serif", fontSize: "1.15rem", color: "#1a2744", fontStyle: "italic" }}>
        MBBS · FRACS(Ortho) · MPH · BSc
      </p>
      <p>
        Dr Nate Myhill is a specialist orthopaedic surgeon practising across Melbourne and Albury. His clinical work spans shoulder and upper limb surgery, hip and knee reconstruction, and trauma — with a particular focus in rotator cuff pathology and shoulder replacement.
      </p>
      <p>
        Dr Myhill's approach is grounded in shared decision-making: a process in which patients are treated as active participants in choosing their own care. That means taking the time to explain your condition clearly, discussing every realistic option — including non-surgical pathways — and arriving at a plan that aligns with your individual values, goals and lifestyle.
      </p>

      <h2>Qualifications</h2>
      <ul>
        <li><strong>MBBS</strong> — Bachelor of Medicine, Bachelor of Surgery</li>
        <li><strong>FRACS(Ortho)</strong> — Fellow of the Royal Australasian College of Surgeons (Orthopaedic Surgery)</li>
        <li><strong>MPH</strong> — Master of Public Health</li>
        <li><strong>BSc</strong> — Bachelor of Science</li>
      </ul>

      <h2>Fellowship</h2>
      <p>
        Dr Myhill completed an <strong>IBRA Scholarship</strong> at Erasmus MC, Rotterdam, Netherlands — an academic medical centre in Europe. The scholarship focused on upper limb elective and trauma surgery, encompassing shoulder, elbow and wrist procedures at an international centre of excellence.
      </p>

      <h2>Professional memberships</h2>
      <ul>
        <li><strong>AOA</strong> — Australian Orthopaedic Association</li>
        <li><strong>IBRA</strong> — International Bone Research Association</li>
      </ul>

      <h2>Clinical focus</h2>
      <p>
        While Dr Myhill practises broadly across orthopaedics, his primary clinical interests include:
      </p>
      <ul>
        <li>Rotator cuff pathology and shoulder replacement (anatomic and reverse total shoulder)</li>
        <li>Shoulder instability — labral repair and Latarjet procedure</li>
        <li>Elbow conditions — including tennis elbow, the OK (Outerbridge-Kashiwagi) procedure, UCL reconstruction and cubital tunnel syndrome</li>
        <li>Wrist pathology — carpal tunnel syndrome and distal radius fractures</li>
        <li>Hip and knee reconstruction — total hip and knee replacement, ACL reconstruction and meniscal surgery</li>
        <li>Upper and lower limb trauma</li>
      </ul>

      <h2>Locations</h2>
      <p>
        Dr Myhill consults and operates at Knox Private Hospital (Wantirna), Mitcham Private Hospital, Warringal Private Hospital (Heidelberg), John Fawkner Private Hospital (Coburg), The Gardens Specialist Centre (Albury), Northern Health (Epping) and Western Health (Footscray).
      </p>
    </PageLayout>
  );
}
