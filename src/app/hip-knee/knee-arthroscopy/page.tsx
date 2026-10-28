import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";
import RisksSection from "@/components/RisksSection";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = pageMetadata({
  title: "Knee Arthroscopy Melbourne — Dr Nate Myhill",
  description: "Diagnostic and therapeutic knee arthroscopy. Specialist knee surgeon Dr Nate Myhill, Melbourne.",
  path: "/hip-knee/knee-arthroscopy",
});

const faqs = [
  { q: "Is knee arthroscopy a major operation?", a: "Knee arthroscopy is a minimally invasive procedure performed through small portals. It is usually a day procedure. Recovery is generally quick, though the timeframe depends on what is found and treated during surgery." },
  { q: "What can be treated during knee arthroscopy?", a: "Common findings and treatments include meniscal tears (repair or trimming), loose bodies (removal), cartilage lesions, inflamed synovial tissue (synovectomy) and assessment and treatment of ligament injuries." },
];

export default function KneeArthroscopyPage() {
  return (
    <PageLayout crumbs={[{ label: "Home", href: "/" }, { label: "Hip & Knee", href: "/hip-knee" }, { label: "Knee Arthroscopy" }]}>
      <h1>Knee arthroscopy</h1>
      <p>
        Knee arthroscopy is a minimally invasive surgical procedure in which a small camera (arthroscope) and instruments are inserted into the knee joint through small incisions. It allows direct visualisation of the structures inside the knee and is used for both diagnostic and therapeutic purposes.
      </p>

      <h2>Conditions addressed by knee arthroscopy</h2>
      <ul>
        <li>Meniscal tears — repair or partial meniscectomy</li>
        <li>Loose bodies — free fragments of bone or cartilage causing catching or locking</li>
        <li>Articular cartilage lesions</li>
        <li>Synovitis — removal of inflamed joint lining</li>
        <li>Ligament assessment and, in some cases, treatment</li>
      </ul>

      <h2>The procedure</h2>
      <p>
        Knee arthroscopy is performed under general or regional anaesthesia, usually as a day procedure. Fluid is used to distend the joint for visualisation. The procedure duration depends on what is found and treated. Portals are typically 5–10mm in size.
      </p>

      <h2>Recovery</h2>
      <p>
        Recovery depends on the specific procedure performed. After diagnostic arthroscopy or minor meniscal trimming, people typically return to light activity within 1–2 weeks, though recovery varies between people. After meniscal repair or cartilage procedures, a more protective rehabilitation programme is required.
      </p>

      {/* DRAFT: clinical review by Dr Myhill required */}
      <RisksSection
        items={[
          "infection",
          "blood clots in the legs or lungs",
          "knee swelling or stiffness",
          "nerve or blood vessel injury",
          "ongoing pain or symptoms",
          "risks related to the anaesthetic",
        ]}
      />

      <FAQSection faqs={faqs} />
    </PageLayout>
  );
}
