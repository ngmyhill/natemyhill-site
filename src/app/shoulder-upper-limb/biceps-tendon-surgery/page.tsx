import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";
import RisksSection from "@/components/RisksSection";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = pageMetadata({
  title: "Biceps Tendon Surgery Melbourne",
  description: "Biceps tenodesis and tenotomy for long head of biceps tendon pathology. Specialist shoulder and upper limb surgeon in Melbourne.",
  path: "/shoulder-upper-limb/biceps-tendon-surgery",
});

const faqs = [
  { q: "What is the difference between tenodesis and tenotomy?", a: "A tenotomy simply releases the biceps tendon from its attachment, relieving pain quickly but sometimes leaving a visible 'Popeye' deformity (a bulge in the lower arm). A tenodesis releases the tendon and reattaches it lower down the arm, preserving normal appearance and reducing the chance of deformity. Tenodesis is generally preferred in younger, more active patients." },
  { q: "Can biceps tendon problems be treated without surgery?", a: "Many biceps tendon conditions settle with physiotherapy and activity modification. Corticosteroid injection into the biceps groove can provide temporary relief. Surgery is considered when symptoms persist despite adequate conservative treatment." },
];

export default function BiceptsTendonSurgeryPage() {
  return (
    <PageLayout crumbs={[{ label: "Home", href: "/" }, { label: "Shoulder & Upper Limb", href: "/shoulder-upper-limb" }, { label: "Biceps Tendon Surgery" }]}>
      <h1>Biceps tendon surgery</h1>
      <p>
        The long head of the biceps tendon runs from the shoulder joint down to the forearm. It can become inflamed, partially torn, or unstable within the bicipital groove of the humerus, causing anterior shoulder pain that may be mistaken for other shoulder conditions.
      </p>

      <h2>Conditions treated</h2>
      <ul>
        <li>Long head of biceps tendinopathy (inflammation and degeneration)</li>
        <li>Biceps instability — subluxation from the bicipital groove</li>
        <li>Partial or full-thickness tears of the long head of biceps</li>
        <li>Biceps pathology coexisting with rotator cuff tears</li>
      </ul>

      <h2>Surgical options</h2>
      <h3>Biceps tenotomy</h3>
      <p>
        Tenotomy involves simply releasing the biceps tendon from its upper attachment within the shoulder joint. It is a quick, effective procedure for relieving pain, particularly suitable for older or less active patients who are not concerned about a cosmetic bulge (Popeye sign) in the arm.
      </p>
      <h3>Biceps tenodesis</h3>
      <p>
        Tenodesis involves releasing the tendon from its shoulder attachment and re-securing it to the humerus at a lower point. This prevents the Popeye deformity and is preferred in younger, active patients or those for whom cosmesis is a priority.
      </p>
      <p>
        Both procedures are typically performed arthroscopically and are often carried out alongside treatment of coexisting rotator cuff or shoulder conditions.
      </p>

      <RisksSection
        items={[
          "infection",
          "shoulder or elbow stiffness",
          "a change in the shape of the upper arm, or cramping in the biceps muscle",
          "nerve or blood vessel injury",
          "risks related to the anaesthetic",
          "the need for further surgery",
        ]}
      />

      <FAQSection faqs={faqs} />
    </PageLayout>
  );
}
