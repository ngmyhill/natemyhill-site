import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";
import RisksSection from "@/components/RisksSection";

export const metadata: Metadata = pageMetadata({
  title: "Lower Limb Trauma Surgery Melbourne",
  description: "Surgical management of lower limb trauma including hip, femur, tibia and ankle fractures. Dr Nate Myhill, Melbourne.",
  path: "/trauma/lower-limb",
});

export default function LowerLimbTraumaPage() {
  return (
    <PageLayout crumbs={[{ label: "Home", href: "/" }, { label: "Trauma", href: "/trauma" }, { label: "Lower Limb Trauma" }]} ctaReferrer>
      <h1>Lower limb trauma</h1>
      <p>
        Dr Myhill manages a range of lower limb traumatic injuries including fractures of the hip, femur, tibia and ankle. Referrals are accepted from GPs, physiotherapists and emergency departments, with long-term follow-up provided.
      </p>

      <h2>Hip fractures</h2>
      <p>
        Hip fractures are surgical emergencies requiring prompt treatment. See the <a href="/hip-knee/hip-trauma">hip fracture and trauma page</a> for detailed information on management options.
      </p>

      <h2>Femoral shaft fractures</h2>
      <p>
        Fractures of the femoral shaft (thigh bone) are managed surgically in almost all cases using intramedullary nail fixation — a metal rod passed down the centre of the femur. This aims to restore alignment and allows early mobilisation.
      </p>

      <h2>Tibial fractures</h2>
      <p>
        Tibial shaft fractures may be managed with intramedullary nailing (for displaced or unstable fractures) or in a cast (for undisplaced stable fractures). The appropriate management is determined by fracture pattern, displacement, and associated soft tissue injury.
      </p>

      <h2>Periarticular knee fractures</h2>
      <p>
        Fractures around the knee joint — including distal femoral fractures and proximal tibial fractures (tibial plateau fractures) — often require surgical fixation to restore the joint surface and allow early movement.
      </p>

      <h2>Ankle fractures</h2>
      <p>
        Many ankle fractures can be managed in a boot or cast. Displaced, unstable or bimalleolar (involving both sides of the ankle) fractures typically require surgical fixation with plates and screws.
      </p>

      {/* DRAFT: clinical review by Dr Myhill required */}
      <RisksSection
        items={[
          "infection",
          "blood clots in the legs or lungs",
          "nerve or blood vessel injury",
          "stiffness",
          "the fracture healing slowly or in a different position than intended, or irritation from plates, screws or rods",
          "risks related to the anaesthetic",
        ]}
      />

      <h2>Referring for lower limb trauma</h2>
      <p>
        Urgent trauma referrals may be directed to the practice by phone. See <a href="/for-referrers/how-to-refer">how to refer</a> for contact details.
      </p>
    </PageLayout>
  );
}
