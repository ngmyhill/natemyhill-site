import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";
import RisksSection from "@/components/RisksSection";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = pageMetadata({
  title: "OK Procedure for Elbow Arthritis",
  description: "The Outerbridge-Kashiwagi (OK) procedure for elbow arthritis and loose bodies. Specialist elbow surgeon Dr Nate Myhill, Melbourne.",
  path: "/shoulder-upper-limb/ok-procedure",
});

const faqs = [
  { q: "What is the OK procedure?", a: "The Outerbridge-Kashiwagi (OK) procedure is a surgical technique for treating elbow arthritis. It involves removing loose bodies (fragments of bone or cartilage) and creating a window in the olecranon fossa to improve elbow extension. It can be performed arthroscopically." },
  { q: "Who is suitable for the OK procedure?", a: "The OK procedure is most appropriate for patients with primary elbow osteoarthritis who have pain at the extremes of movement (particularly full extension) and limited range of motion, and who have not responded to non-surgical treatment." },
];

export default function OKProcedurePage() {
  return (
    <PageLayout crumbs={[{ label: "Home", href: "/" }, { label: "Shoulder & Upper Limb", href: "/shoulder-upper-limb" }, { label: "OK Procedure (Elbow)" }]}>
      <h1>The OK procedure (Outerbridge-Kashiwagi)</h1>
      <p>
        The Outerbridge-Kashiwagi (OK) procedure is a surgical technique used to treat primary osteoarthritis of the elbow. It is designed to remove loose bodies (fragments of bone or cartilage that float freely in the joint) and address the bony impingement that limits elbow extension in arthritis.
      </p>

      <h2>Who does elbow arthritis affect?</h2>
      <p>
        Primary elbow osteoarthritis is less common than hip or knee arthritis but can be significantly disabling. It most frequently affects manual labourers and individuals who have engaged in heavy overhead or throwing activities over many years. Patients typically present in their 40s–60s with progressive loss of extension, pain at the limits of movement and occasional locking caused by loose bodies.
      </p>

      <h2>What does the procedure involve?</h2>
      <p>
        The OK procedure can be performed arthroscopically (keyhole) in most cases. Through small portals around the elbow, loose bodies are identified and removed. A small fenestration (window) is created in the olecranon fossa to allow fuller elbow extension without impingement. Osteophytes (bone spurs) at the tip of the olecranon may also be removed.
      </p>

      <h2>Non-surgical alternatives</h2>
      <p>
        Activity modification, physiotherapy and anti-inflammatory medication may help manage mild symptoms. Corticosteroid injection can provide temporary relief. Surgery is considered when symptoms significantly limit daily activities or quality of life and conservative measures have not provided lasting benefit.
      </p>

      <h2>Recovery</h2>
      <p>
        Recovery following the OK procedure involves a supervised physiotherapy programme to regain elbow range of motion and strength. Many people notice improved extension and less pain with movement, though results vary from person to person and the joint will remain arthritic.
      </p>

      <RisksSection
        items={[
          "infection",
          "nerve injury",
          "elbow stiffness returning over time",
          "ongoing pain, as the joint remains arthritic",
          "risks related to the anaesthetic",
          "the need for further surgery",
        ]}
      />

      <FAQSection faqs={faqs} />
    </PageLayout>
  );
}
