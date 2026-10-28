import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import RisksSection from "@/components/RisksSection";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Wrist Fracture Surgery Melbourne — Dr Nate Myhill",
  description: "Surgical management of distal radius and scaphoid fractures. Upper limb trauma surgeon Dr Nate Myhill, Melbourne.",
};

const faqs = [
  { q: "Do all wrist fractures need surgery?", a: "Not all wrist fractures require surgery. Many distal radius fractures — particularly in older patients with lower functional demands — can be managed in a cast or splint. Surgery is considered when the fracture is significantly displaced, unstable or when anatomical alignment is important for return to function." },
  { q: "What is involved in surgery for a distal radius fracture?", a: "Most surgically treated distal radius fractures are fixed with a volar locking plate — a metal plate screwed to the front of the radius through a small incision. This holds the bones in alignment while healing occurs. The plate is usually left in place long term, though it can be removed if it causes symptoms." },
  { q: "Why are scaphoid fractures sometimes missed?", a: "The scaphoid bone has a precarious blood supply, and fractures can appear subtle on initial X-ray. An MRI or CT scan is often required for definitive diagnosis. Missed or untreated scaphoid fractures can progress to non-union and long-term wrist arthritis." },
];

export default function WristFracturesPage() {
  return (
    <PageLayout crumbs={[{ label: "Home", href: "/" }, { label: "Shoulder & Upper Limb", href: "/shoulder-upper-limb" }, { label: "Wrist Fractures" }]}>
      <h1>Wrist fractures</h1>
      <p>
        Wrist fractures are among the most common injuries presenting to emergency departments. Dr Myhill has a specific interest in the surgical management of distal radius fractures (broken wrist) and scaphoid fractures, having trained in upper limb trauma during his IBRA Scholarship at Erasmus MC, Rotterdam.
      </p>

      <h2>Distal radius fractures</h2>
      <p>
        A distal radius fracture is a break at the end of the radius (forearm bone), just above the wrist joint. It is often called a "Colles' fracture" or "broken wrist" and typically occurs from a fall onto an outstretched hand. They are common at all ages — particularly in older women with osteoporosis and in younger individuals sustaining higher-energy trauma.
      </p>

      <h3>Treatment</h3>
      <p>
        Many distal radius fractures are managed non-surgically in a cast. Surgery is considered when the fracture is significantly displaced, unstable, involves the wrist joint surface, or occurs in younger active patients where precise anatomical restoration is important. Surgical fixation typically involves a volar locking plate — a metal plate applied to the front of the wrist through a small incision.
      </p>

      <h2>Scaphoid fractures</h2>
      <p>
        The scaphoid is a small boat-shaped bone on the thumb side of the wrist. Scaphoid fractures commonly occur from falls onto an outstretched hand and can be mistaken for a wrist sprain. They are important to identify and treat promptly because of the scaphoid's precarious blood supply — fractures that go untreated risk non-union (failure to heal) and avascular necrosis (bone death), leading to long-term wrist arthritis.
      </p>

      <h3>Treatment</h3>
      <p>
        Undisplaced scaphoid fractures may be treated in a cast, though surgery with a headless compression screw offers a faster return to function in younger, active patients. Displaced fractures and non-unions generally require surgical intervention. Dr Myhill will discuss the most appropriate approach for your fracture pattern and circumstances.
      </p>

      {/* DRAFT: clinical review by Dr Myhill required */}
      <RisksSection
        items={[
          "infection",
          "nerve or blood vessel injury",
          "stiffness",
          "the fracture healing slowly or in a different position than intended",
          "irritation from the plate or screws, which may need removal",
          "risks related to the anaesthetic",
        ]}
      />

      <FAQSection faqs={faqs} />
    </PageLayout>
  );
}
