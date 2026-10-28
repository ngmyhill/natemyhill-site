import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import RisksSection from "@/components/RisksSection";

export const metadata: Metadata = {
  title: "Upper Limb Trauma Melbourne — Dr Nate Myhill",
  description: "Surgical management of upper limb trauma including shoulder, elbow and wrist fractures. Dr Nate Myhill, Melbourne.",
};

export default function UpperLimbTraumaPage() {
  return (
    <PageLayout crumbs={[{ label: "Home", href: "/" }, { label: "Trauma", href: "/trauma" }, { label: "Upper Limb Trauma" }]} ctaReferrer>
      <h1>Upper limb trauma</h1>
      <p>
        Dr Myhill manages a broad range of upper limb traumatic injuries, encompassing fractures, dislocations and soft tissue injuries of the shoulder, arm, elbow and wrist. His training in upper limb trauma was deepened during an IBRA Scholarship at Erasmus MC, Rotterdam — a trauma centre in Europe.
      </p>

      <h2>Shoulder injuries</h2>
      <ul>
        <li><strong>Proximal humeral fractures</strong> — fractures at the top of the arm bone near the shoulder joint. Management depends on fracture pattern, displacement and patient age and activity level. Options include non-surgical management, fixation with a plate and screws, or shoulder replacement.</li>
        <li><strong>Clavicle fractures</strong> — broken collarbone. Many heal non-surgically; displaced or shortened fractures in active patients may benefit from plate fixation.</li>
        <li><strong>Shoulder dislocations</strong> — often managed acutely with closed reduction. Recurrent instability following dislocation is managed as a separate elective problem — see <a href="/shoulder-upper-limb/shoulder-instability">shoulder instability</a>.</li>
      </ul>

      <h2>Elbow injuries</h2>
      <ul>
        <li>Radial head fractures</li>
        <li>Olecranon fractures</li>
        <li>Elbow dislocations and fracture-dislocations</li>
        <li>Distal humeral fractures</li>
      </ul>

      <h2>Wrist injuries</h2>
      <ul>
        <li>Distal radius fractures</li>
        <li>Scaphoid fractures</li>
        <li>Other carpal fractures</li>
      </ul>
      <p>
        See the <a href="/shoulder-upper-limb/wrist-fractures">wrist fractures page</a> for more detail on the management of distal radius and scaphoid fractures.
      </p>

      {/* DRAFT: clinical review by Dr Myhill required */}
      <RisksSection
        items={[
          "infection",
          "nerve or blood vessel injury",
          "stiffness",
          "the fracture healing slowly or in a different position than intended",
          "irritation from plates or screws, which may need removal",
          "risks related to the anaesthetic",
        ]}
      />

      <h2>Referring for upper limb trauma</h2>
      <p>
        Dr Myhill accepts urgent and semi-urgent trauma referrals from GPs, physiotherapists and emergency departments. See <a href="/for-referrers/how-to-refer">how to refer</a> for contact details.
      </p>
    </PageLayout>
  );
}
