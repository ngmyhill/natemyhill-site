import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";
import RisksSection from "@/components/RisksSection";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = pageMetadata({
  title: "ACL Reconstruction Melbourne",
  description: "Anterior cruciate ligament (ACL) reconstruction for knee instability. Specialist knee surgeon Dr Nate Myhill, Melbourne.",
  path: "/hip-knee/acl-reconstruction",
});

const faqs = [
  { q: "Do I need surgery after ACL rupture?", a: "Not everyone with an ACL rupture requires surgery. Non-surgical management with physiotherapy can be appropriate for less active patients or those with low functional demands. Surgery is generally recommended for patients wishing to return to pivoting and cutting sports, or those with significant instability in daily life." },
  { q: "What graft is used for ACL reconstruction?", a: "The most commonly used graft is the hamstring tendon (taken from the inner knee). Patellar tendon and quadriceps tendon grafts are also used. Allograft (cadaveric) tendon is an option in some patients. Dr Myhill will discuss graft choice with you based on your anatomy, activity level and goals." },
  { q: "When can I return to sport after ACL reconstruction?", a: "Return to sport is guided by objective criteria — not a fixed time period. People are typically cleared for return to unrestricted sport at around 9–12 months, once strength tests and functional assessments confirm readiness. Recovery varies between people." },
];

export default function ACLReconstructionPage() {
  return (
    <PageLayout crumbs={[{ label: "Home", href: "/" }, { label: "Hip & Knee", href: "/hip-knee" }, { label: "ACL Reconstruction" }]}>
      <h1>ACL reconstruction</h1>
      <p>
        The anterior cruciate ligament (ACL) is a central stabilising structure of the knee. ACL rupture is one of the most common serious sporting injuries, typically occurring during pivoting, cutting or landing movements in sports such as football, netball, basketball and skiing. It usually presents with an audible pop, immediate swelling, and a feeling of the knee giving way.
      </p>

      <h2>Diagnosis</h2>
      <p>
        Clinical diagnosis is made on examination with Lachman's and pivot shift tests. MRI confirms ACL rupture and identifies associated injuries to the menisci, cartilage and other ligaments — which are common at the time of ACL injury.
      </p>

      <h2>Non-surgical management</h2>
      <p>
        For some patients — particularly older, less active individuals or those with low functional demands — physiotherapy-based rehabilitation without surgery can achieve good outcomes. The decision is made together with Dr Myhill based on your activity goals, instability symptoms and associated injuries.
      </p>

      <h2>ACL reconstruction surgery</h2>
      <p>
        ACL reconstruction involves replacing the torn ligament with a tendon graft. This is performed arthroscopically through small portals, with the graft passed through precisely positioned bone tunnels in the femur and tibia and secured with fixation devices. The procedure typically takes 60–90 minutes.
      </p>

      <h2>Recovery and return to sport</h2>
      <p>
        Rehabilitation after ACL reconstruction is a graded process taking 9–12 months for return to unrestricted sport. Criteria-based rehabilitation — rather than time alone — guides progression through each phase. Full participation in contact and pivoting sports is not recommended until objective strength and functional testing criteria are met.
      </p>

      <RisksSection
        items={[
          "infection",
          "blood clots in the legs or lungs",
          "knee stiffness",
          "the graft failing or the ligament tearing again",
          "nerve or blood vessel injury",
          "risks related to the anaesthetic",
        ]}
      />

      <FAQSection faqs={faqs} />
    </PageLayout>
  );
}
