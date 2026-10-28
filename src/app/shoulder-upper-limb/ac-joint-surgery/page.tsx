import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";
import RisksSection from "@/components/RisksSection";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = pageMetadata({
  title: "AC Joint Separation Surgery Melbourne",
  description: "Surgical management of acromioclavicular (AC) joint separation and arthritis in Melbourne. Dr Nate Myhill, specialist shoulder surgeon.",
  path: "/shoulder-upper-limb/ac-joint-surgery",
});

const faqs = [
  { q: "Do all AC joint separations need surgery?", a: "No. Lower-grade separations (Grades 1 and 2, and most Grade 3) can be managed non-surgically with a sling, physiotherapy and time. Surgery is generally considered for higher-grade separations causing persistent deformity, pain or functional limitation." },
  { q: "When is surgery needed for AC joint arthritis?", a: "Surgery is considered when pain from AC joint arthritis has not responded to conservative measures such as physiotherapy, activity modification and corticosteroid injections. The procedure involves removing a small amount of bone from the end of the clavicle to eliminate joint-surface contact." },
];

export default function ACJointSurgeryPage() {
  return (
    <PageLayout crumbs={[{ label: "Home", href: "/" }, { label: "Shoulder & Upper Limb", href: "/shoulder-upper-limb" }, { label: "AC Joint Surgery" }]}>
      <h1>Acromioclavicular (AC) joint surgery</h1>
      <p>
        The acromioclavicular (AC) joint is where the collarbone (clavicle) meets the outer tip of the shoulder blade (acromion). It can be injured through trauma — producing AC joint separation — or develop arthritis as part of the normal ageing process.
      </p>

      <h2>AC joint separation</h2>
      <p>
        AC joint separation is a ligamentous injury, typically caused by a fall onto the point of the shoulder or a direct blow. Separations are graded 1–6 according to severity. Most lower-grade injuries settle with non-surgical treatment. Higher-grade injuries with significant displacement or persistent instability may benefit from surgical stabilisation.
      </p>

      <h2>AC joint arthritis</h2>
      <p>
        Degenerative arthritis of the AC joint produces pain at the top of the shoulder, often aggravated by reaching across the body or lifting above shoulder height. When physiotherapy and corticosteroid injections do not provide lasting relief, arthroscopic resection of the distal clavicle (removal of a small amount of bone) can eliminate joint-surface contact and reduce pain.
      </p>

      <h2>Surgical approach</h2>
      <p>
        AC joint stabilisation for higher-grade separations typically involves reconstructing the coracoclavicular ligaments, sometimes with augmentation. Distal clavicle resection for arthritis is performed arthroscopically as a day procedure. Dr Myhill will discuss the most appropriate procedure for your situation.
      </p>

      <RisksSection
        items={[
          "infection",
          "stiffness or ongoing pain",
          "the joint becoming unstable or prominent again",
          "nerve or blood vessel injury",
          "risks related to the anaesthetic",
          "the need for further surgery",
        ]}
      />

      <FAQSection faqs={faqs} />
    </PageLayout>
  );
}
