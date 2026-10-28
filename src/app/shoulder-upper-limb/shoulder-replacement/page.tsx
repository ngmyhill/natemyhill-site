import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";
import RisksSection from "@/components/RisksSection";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = pageMetadata({
  title: "Shoulder Replacement Melbourne — Dr Nate Myhill",
  description: "Anatomic and reverse total shoulder replacement with Dr Nate Myhill, specialist orthopaedic surgeon in Melbourne.",
  path: "/shoulder-upper-limb/shoulder-replacement",
});

const faqs = [
  { q: "What is the difference between anatomic and reverse shoulder replacement?", a: "An anatomic total shoulder replacement replicates the natural ball-and-socket anatomy and is used when the rotator cuff is intact. A reverse shoulder replacement switches the positions of the ball and socket, allowing the deltoid muscle to power the arm when the rotator cuff is severely damaged or absent. Dr Myhill will recommend the most appropriate design based on your anatomy and function." },
  { q: "How long do shoulder replacements last?", a: "Modern shoulder implants are designed for long-term use, and some last 15–20 years or longer. This varies from person to person. Outcomes depend on implant design, surgical technique, bone quality and activity level." },
  { q: "What is recovery like after shoulder replacement?", a: "You will typically stay in hospital for 1–2 nights. A sling is worn for 4–6 weeks. Physiotherapy begins soon after surgery. People typically regain comfortable function by around 3–6 months, with ongoing improvement over 12 months. Recovery varies between people." },
];

export default function ShoulderReplacementPage() {
  return (
    <PageLayout crumbs={[{ label: "Home", href: "/" }, { label: "Shoulder & Upper Limb", href: "/shoulder-upper-limb" }, { label: "Shoulder Replacement" }]}>
      <h1>Shoulder replacement</h1>
      <p>
        Shoulder replacement (shoulder arthroplasty) is a surgical procedure in which the arthritic or damaged surfaces of the shoulder joint are replaced with artificial components. It is indicated when significant arthritis or irreparable rotator cuff damage causes persistent pain and functional limitation that has not responded to non-surgical measures.
      </p>

      <h2>Types of shoulder replacement</h2>
      <h3>Anatomic total shoulder replacement</h3>
      <p>
        An anatomic total shoulder replacement replaces the humeral head (ball) with a metal implant and resurfaces the glenoid (socket) with a plastic component. It is used when the rotator cuff is intact and the primary problem is glenohumeral arthritis.
      </p>

      <h3>Reverse total shoulder replacement</h3>
      <p>
        A reverse total shoulder replacement switches the positions of the ball and socket — placing the ball on the glenoid side and the socket on the humeral side. This design allows the deltoid muscle to power arm movement when the rotator cuff is severely torn or non-functional. It is a widely used shoulder replacement design.
      </p>

      <h3>Hemiarthroplasty</h3>
      <p>
        In selected cases — including acute fractures — replacing only the humeral head without resurfacing the glenoid may be appropriate.
      </p>

      <h2>Who may benefit?</h2>
      <ul>
        <li>Severe glenohumeral osteoarthritis</li>
        <li>Rotator cuff arthropathy (arthritis combined with a large, irreparable cuff tear)</li>
        <li>Rheumatoid arthritis of the shoulder</li>
        <li>Complex proximal humeral fractures in selected patients</li>
        <li>Failed previous shoulder surgery</li>
      </ul>

      <h2>The operation</h2>
      <p>
        Shoulder replacement is performed under general anaesthesia (usually with a nerve block for pain control) through a deltopectoral incision. The procedure typically takes 90–120 minutes. Hospital stay is typically 1–2 nights.
      </p>

      <h2>Recovery</h2>
      <p>
        A sling is worn for approximately 4–6 weeks after surgery. Physiotherapy begins early to restore movement before progressing to strengthening. People typically reach comfortable, functional use of the arm by around 3–6 months, with continued improvement over 12 months. Recovery varies between people.
      </p>

      {/* DRAFT: clinical review by Dr Myhill required */}
      <RisksSection
        items={[
          "infection",
          "blood clots in the legs or lungs",
          "nerve or blood vessel injury",
          "implant wear or loosening, which may mean further surgery in future",
          "stiffness or ongoing pain",
          "risks related to the anaesthetic",
        ]}
      />

      <FAQSection faqs={faqs} />
    </PageLayout>
  );
}
