import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Total Knee Replacement Melbourne — Dr Nate Myhill",
  description: "Total knee arthroplasty for end-stage knee arthritis in Melbourne. Specialist orthopaedic surgeon Dr Nate Myhill.",
};

const faqs = [
  { q: "Am I too young for a knee replacement?", a: "Age alone does not determine suitability. Dr Myhill considers the severity of arthritis, symptom burden, functional limitation and activity goals. Younger patients do have a higher lifetime risk of requiring a revision (repeat) procedure." },
  { q: "What is the recovery like?", a: "Most patients stay in hospital for 2–4 nights. Walking begins on the day of surgery with a physiotherapist. Knee bends improve progressively with physiotherapy. Most patients return to everyday activities within 6–12 weeks, with continued improvement over 12 months." },
  { q: "Can I kneel after a knee replacement?", a: "Many patients can kneel after knee replacement, though it may feel uncomfortable. There is no clinical evidence that kneeling harms the implant. Discuss your specific goals with Dr Myhill." },
];

export default function TotalKneeReplacementPage() {
  return (
    <PageLayout crumbs={[{ label: "Home", href: "/" }, { label: "Hip & Knee", href: "/hip-knee" }, { label: "Total Knee Replacement" }]}>
      <h1>Total knee replacement</h1>
      <p>
        Total knee replacement (total knee arthroplasty) is one of the most commonly performed orthopaedic procedures. It involves replacing the worn articular surfaces of the knee joint — the femur (thigh bone), tibia (shin bone) and sometimes the undersurface of the patella (kneecap) — with prosthetic components.
      </p>

      <h2>Why knee replacement?</h2>
      <p>
        End-stage knee arthritis causes persistent pain, stiffness and functional limitation that can significantly impact quality of life. When conservative measures — including physiotherapy, weight management, bracing and injections — no longer provide adequate relief, total knee replacement offers a predictable and durable solution.
      </p>

      <h2>The procedure</h2>
      <p>
        Under general or spinal anaesthesia, the knee is opened through an incision over the front of the joint. Diseased cartilage and bone from the ends of the femur and tibia are removed and precisely shaped to accept the prosthetic components. A metal femoral component, a metal tibial baseplate with a polyethylene (plastic) insert, and optionally a patellar button are implanted and fixed with bone cement or press-fit.
      </p>

      <h2>Recovery</h2>
      <p>
        An enhanced recovery pathway begins on the day of surgery, with physiotherapy-assisted walking within hours of the operation. Hospital stay is typically 2–4 nights. Physiotherapy at home or in a rehabilitation facility continues for 6–12 weeks. Most patients reach a plateau of recovery by 12 months.
      </p>

      <FAQSection faqs={faqs} />
    </PageLayout>
  );
}
