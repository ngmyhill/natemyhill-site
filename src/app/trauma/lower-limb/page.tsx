import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Lower Limb Trauma Melbourne — Dr Nate Myhill",
  description: "Surgical management of lower limb trauma including hip, femur, tibia and ankle fractures. Dr Nate Myhill, Melbourne.",
};

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
        Fractures of the femoral shaft (thigh bone) are managed surgically in almost all cases using intramedullary nail fixation — a metal rod passed down the centre of the femur. This restores alignment, allows early mobilisation and has excellent healing rates.
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

      <h2>Referring for lower limb trauma</h2>
      <p>
        Urgent trauma referrals may be directed to the practice by phone. See <a href="/for-referrers/how-to-refer">how to refer</a> for contact details.
      </p>
    </PageLayout>
  );
}
