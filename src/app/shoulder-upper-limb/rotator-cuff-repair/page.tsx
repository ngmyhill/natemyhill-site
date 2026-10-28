import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";
import RisksSection from "@/components/RisksSection";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = pageMetadata({
  title: "Rotator Cuff Repair Melbourne",
  description: "Specialist rotator cuff repair in Melbourne. Dr Nate Myhill performs arthroscopic and open repair of partial and full-thickness rotator cuff tears.",
  path: "/shoulder-upper-limb/rotator-cuff-repair",
});

const faqs = [
  { q: "How long is recovery after rotator cuff repair?", a: "Recovery depends on tear size and repair complexity. A sling is typically worn for 4–6 weeks, physiotherapy begins early, and light activities usually resume by around 3 months. Full recovery typically takes 6–12 months, and recovery varies between people." },
  { q: "Can a rotator cuff tear heal without surgery?", a: "Some partial-thickness tears and smaller full-thickness tears may settle with physiotherapy, activity modification and injection therapy. Dr Myhill will discuss all options at your consultation so you can make an informed choice." },
  { q: "Will I need a general anaesthetic?", a: "Most rotator cuff repairs are performed under general anaesthesia, often combined with a nerve block (interscalene block) to reduce post-operative pain. Dr Myhill will discuss your anaesthetic options with you." },
  { q: "Is the surgery done arthroscopically?", a: "Most repairs are performed arthroscopically (keyhole surgery). Occasionally, larger or more complex repairs require a mini-open or open approach." },
];

const glance = [
  { label: "Anaesthetic", value: "Most repairs are performed under general anaesthesia" },
  { label: "Sling", value: "Typically 4–6 weeks" },
  { label: "Light activities", value: "Usually by around 3 months" },
  { label: "Full recovery", value: "Typically 6–12 months, depending on tear size and repair complexity" },
];

export default function RotatorCuffRepairPage() {
  return (
    <PageLayout glance={glance} crumbs={[{ label: "Home", href: "/" }, { label: "Shoulder & Upper Limb", href: "/shoulder-upper-limb" }, { label: "Rotator Cuff Repair" }]}>
      <h1>Rotator cuff repair</h1>
      <p>
        The rotator cuff is a group of four muscles and their tendons that surround the shoulder joint, providing stability and enabling arm movement. Tears in the rotator cuff, ranging from partial-thickness to full-thickness, are among the most common shoulder injuries, affecting both active individuals and older adults.
      </p>

      <h2>Who is affected?</h2>
      <p>
        Rotator cuff tears may arise from a single traumatic event (such as a fall or heavy lift) or develop gradually through repetitive overhead activity and age-related degeneration. They are common in both sporting populations and those in physically demanding occupations.
      </p>

      <h2>Symptoms</h2>
      <ul>
        <li>Pain at the top or side of the shoulder, often worse at night</li>
        <li>Difficulty raising the arm or reaching overhead</li>
        <li>Weakness when lifting or rotating the arm</li>
        <li>A clicking or catching sensation in the shoulder</li>
      </ul>

      <h2>Diagnosis</h2>
      <p>
        Diagnosis involves a clinical examination and imaging, typically MRI, which shows the location and extent of the tear. An ultrasound may also be used. X-rays can identify bony changes or calcification.
      </p>

      <h2>Non-surgical treatment</h2>
      <p>
        Not all rotator cuff tears require surgery. For smaller or partial tears, non-surgical options including physiotherapy, activity modification and corticosteroid injections may provide significant relief. Dr Myhill will discuss your individual circumstances and what the evidence suggests for your type and size of tear.
      </p>

      <h2>Surgical repair</h2>
      <p>
        When surgery is indicated, Dr Myhill performs most rotator cuff repairs arthroscopically (keyhole). Under general anaesthesia, small instruments and a camera are introduced through minor portals around the shoulder. The torn tendon is reattached to the bone using anchors and strong sutures.
      </p>
      <p>
        Larger or more complex tears may require a mini-open or open technique. Dr Myhill will discuss the most appropriate approach for your situation.
      </p>

      <h2>Recovery</h2>
      <p>
        Following surgery, your arm will be placed in a sling for approximately 4–6 weeks. Physiotherapy begins early to maintain range of motion before progressing to strengthening exercises. People typically return to light activities by around 3 months; full recovery typically takes 6–12 months depending on tear size and repair complexity. Recovery varies between people.
      </p>

      <RisksSection
        items={[
          "infection",
          "shoulder stiffness",
          "the repaired tendon tearing again (re-tear)",
          "nerve or blood vessel injury",
          "risks related to the anaesthetic",
          "the need for further surgery",
        ]}
      />

      <FAQSection faqs={faqs} />
    </PageLayout>
  );
}
