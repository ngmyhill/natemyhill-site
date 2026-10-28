import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";
import RisksSection from "@/components/RisksSection";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = pageMetadata({
  title: "UCL Reconstruction (Elbow) Melbourne — Dr Nate Myhill",
  description: "Ulnar collateral ligament (UCL) reconstruction for medial elbow instability. Upper limb surgeon Dr Nate Myhill, Melbourne.",
  path: "/shoulder-upper-limb/ucl-reconstruction",
});

const faqs = [
  { q: "What is UCL reconstruction of the elbow?", a: "UCL reconstruction (sometimes called Tommy John surgery) involves replacing the torn or stretched ulnar collateral ligament on the inner side of the elbow with a graft tendon, typically taken from the forearm or lower limb. It aims to restore medial stability to the elbow." },
  { q: "How long is recovery after UCL reconstruction?", a: "Recovery is gradual. A brace is worn for approximately 6 weeks. Physiotherapy progresses over 4–6 months. Return to overhead throwing activities typically takes 12–18 months." },
];

export default function UCLReconstructionPage() {
  return (
    <PageLayout crumbs={[{ label: "Home", href: "/" }, { label: "Shoulder & Upper Limb", href: "/shoulder-upper-limb" }, { label: "UCL Reconstruction" }]}>
      <h1>UCL reconstruction (elbow)</h1>
      <p>
        The ulnar collateral ligament (UCL) is located on the inner side of the elbow and provides stability against the valgus (outward) forces experienced during throwing. UCL injuries are most common in overhead throwing athletes — including cricketers, baseball pitchers and javelin throwers — but can also result from acute trauma.
      </p>

      <h2>Symptoms of UCL injury</h2>
      <ul>
        <li>Medial (inner) elbow pain during or after throwing</li>
        <li>A pop felt on the inside of the elbow at the time of injury (in acute tears)</li>
        <li>Elbow instability, looseness or a sense of giving way</li>
        <li>Reduced throwing velocity or accuracy</li>
        <li>Numbness or tingling in the ring and little fingers (if the ulnar nerve is involved)</li>
      </ul>

      <h2>Diagnosis</h2>
      <p>
        Clinical examination involves specific stress tests to assess medial elbow stability. MRI or MR arthrogram imaging is used to confirm UCL integrity and identify associated pathology.
      </p>

      <h2>Non-surgical management</h2>
      <p>
        Partial UCL tears in non-throwing individuals or low-demand athletes may be managed with rest, physiotherapy and activity modification. A period of structured non-surgical rehabilitation is usually trialled first in appropriate patients.
      </p>

      <h2>UCL reconstruction</h2>
      <p>
        When surgery is indicated — typically for high-demand throwing athletes with complete tears or failed conservative management — UCL reconstruction involves replacing the damaged ligament with a graft tendon. The graft (commonly the palmaris longus tendon from the forearm, or an allograft) is threaded through tunnels drilled in the medial epicondyle and the ulna, recreating the native ligament.
      </p>

      <h2>Recovery</h2>
      <p>
        A splint or brace is worn for approximately 6 weeks. Physiotherapy progresses from range of motion to strengthening and finally sport-specific rehabilitation. Return to overhead throwing typically takes 12–18 months.
      </p>

      {/* DRAFT: clinical review by Dr Myhill required */}
      <RisksSection
        items={[
          "infection",
          "nerve injury, including the ulnar nerve",
          "stiffness",
          "the graft stretching or failing, with ongoing instability",
          "risks related to the anaesthetic",
          "the need for further surgery",
        ]}
      />

      <FAQSection faqs={faqs} />
    </PageLayout>
  );
}
