import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";
import RisksSection from "@/components/RisksSection";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = pageMetadata({
  title: "Hip Fracture & Trauma Surgery Melbourne — Dr Nate Myhill",
  description: "Surgical management of hip fractures and lower limb trauma. Dr Nate Myhill, specialist orthopaedic surgeon in Melbourne.",
  path: "/hip-knee/hip-trauma",
});

const faqs = [
  { q: "Do hip fractures always require surgery?", a: "The vast majority of hip fractures in adults require surgical treatment — either fixation with screws or a nail, or hip replacement (hemiarthroplasty or total hip replacement). Non-surgical management carries significant risks in most patients and is reserved for exceptional circumstances." },
  { q: "How soon after a hip fracture is surgery performed?", a: "Current evidence strongly supports early surgery — ideally within 24–48 hours of injury. Delays increase the risk of complications. Dr Myhill and the hospital trauma team work to facilitate prompt surgical management." },
];

export default function HipTraumaPage() {
  return (
    <PageLayout crumbs={[{ label: "Home", href: "/" }, { label: "Hip & Knee", href: "/hip-knee" }, { label: "Hip Fracture & Trauma" }]}>
      <h1>Hip fracture &amp; lower limb trauma</h1>
      <p>
        Dr Myhill manages hip fractures and lower limb trauma as part of his broad orthopaedic trauma practice. Trauma referrals are accepted from GPs, physiotherapists and emergency departments, with long-term follow-up provided.
      </p>

      <h2>Hip fractures</h2>
      <p>
        Hip fractures are most common in older adults following low-energy falls and are associated with osteoporosis. They require prompt surgical treatment to restore mobility, reduce complication risk and support recovery. Surgical options include:
      </p>
      <ul>
        <li><strong>Dynamic hip screw (DHS) or intramedullary nail</strong> — for femoral neck or intertrochanteric fractures amenable to fixation</li>
        <li><strong>Hemiarthroplasty</strong> — partial hip replacement, replacing the femoral head, used for displaced intracapsular fractures in older patients</li>
        <li><strong>Total hip replacement</strong> — in selected patients with displaced intracapsular fractures and pre-existing hip arthritis</li>
      </ul>

      <h2>Lower limb trauma</h2>
      <p>
        Dr Myhill also manages other lower limb injuries including femoral shaft fractures, tibial fractures and periarticular fractures around the knee. Management is tailored to the injury pattern, patient age and functional demands.
      </p>

      <h2>For referrers</h2>
      <p>
        Urgent trauma referrals may be directed to the practice by phone. Dr Myhill has an interest in trauma and is committed to long-term follow-up for injured patients. See the <a href="/for-referrers/how-to-refer">referrer information page</a> for contact details.
      </p>

      {/* DRAFT: clinical review by Dr Myhill required */}
      <RisksSection
        items={[
          "infection",
          "blood clots in the legs or lungs",
          "nerve or blood vessel injury",
          "the fracture healing slowly or the implant failing, which may mean further surgery",
          "medical complications after injury and surgery, such as chest infections or confusion, particularly in older people",
          "risks related to the anaesthetic",
        ]}
      />

      <FAQSection faqs={faqs} />
    </PageLayout>
  );
}
