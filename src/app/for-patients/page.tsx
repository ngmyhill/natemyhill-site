import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "For Patients — Dr Nate Myhill",
  description: "Patient information from Dr Nate Myhill — your first appointment, fees, pre-operative and post-operative information.",
};

const items = [
  { label: "Your first appointment", href: "/for-patients/first-appointment", desc: "What to bring, what to expect, and how to make the most of your consultation." },
  { label: "Fees & billing", href: "/for-patients/fees-and-billing", desc: "Fee disclosure, health fund billing, out-of-pocket estimates and Medicare information." },
  { label: "Pre-operative information", href: "/for-patients/pre-operative-information", desc: "Preparing for surgery — including fasting, medications, and what to arrange at home." },
  { label: "Post-operative information", href: "/for-patients/post-operative-information", desc: "What to expect after surgery, wound care, and exercise sheets." },
];

export default function ForPatientsPage() {
  return (
    <PageLayout crumbs={[{ label: "Home", href: "/" }, { label: "For Patients" }]}>
      <h1>Patient information</h1>
      <p>
        This section provides information to help you prepare for your consultation and any procedures that may follow. If you have a question that is not answered here, please contact the practice directly.
      </p>
      <div style={{ display: "grid", gap: "1rem", marginTop: "1.5rem" }}>
        {items.map((item) => (
          <Link key={item.href} href={item.href} style={{ display: "block", background: "#f8f8f6", border: "1px solid #d3d1c7", borderLeft: "3px solid #1d9e75", borderRadius: "4px", padding: "1rem 1.25rem", textDecoration: "none" }}>
            <div style={{ fontFamily: "EB Garamond, Georgia, serif", fontSize: "1.05rem", color: "#1a2744", marginBottom: "0.25rem" }}>{item.label}</div>
            <div style={{ fontSize: "13px", color: "#5f5e5a" }}>{item.desc}</div>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
