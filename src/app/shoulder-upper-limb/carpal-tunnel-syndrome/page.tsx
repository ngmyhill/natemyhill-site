import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";
import RisksSection from "@/components/RisksSection";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = pageMetadata({
  title: "Carpal Tunnel Surgery Melbourne",
  description: "Carpal tunnel decompression for median nerve compression at the wrist. Upper limb surgeon Dr Nate Myhill, Melbourne.",
  path: "/shoulder-upper-limb/carpal-tunnel-syndrome",
});

const faqs = [
  { q: "What is carpal tunnel release?", a: "Carpal tunnel release is a procedure to cut the transverse carpal ligament, the tight band of tissue forming the roof of the carpal tunnel. This relieves pressure on the median nerve running beneath it. It is a common hand and wrist procedure." },
  { q: "Is the surgery painful?", a: "The procedure is typically well tolerated. It is performed under local anaesthesia (with or without sedation) or general anaesthesia. Post-operative discomfort is usually mild and managed with simple analgesia. People typically resume light hand activities within a few days, though recovery varies between people." },
  { q: "How long until the numbness and tingling resolve?", a: "Symptoms of numbness and tingling often improve quickly after surgery. However, complete nerve recovery, particularly in cases of prolonged or severe compression, can take weeks to months. Weakness and muscle wasting may take longer to recover." },
];

export default function CarpalTunnelPage() {
  return (
    <PageLayout crumbs={[{ label: "Home", href: "/" }, { label: "Shoulder & Upper Limb", href: "/shoulder-upper-limb" }, { label: "Carpal Tunnel Syndrome" }]}>
      <h1>Carpal tunnel syndrome</h1>
      <p>
        Carpal tunnel syndrome is the most common peripheral nerve compression condition. It occurs when the median nerve is compressed as it passes through the carpal tunnel, a narrow channel at the base of the wrist bounded by small wrist bones and a strong band of connective tissue (the transverse carpal ligament).
      </p>

      <h2>Who is affected?</h2>
      <p>
        Carpal tunnel syndrome is more common in women and in those with certain risk factors including diabetes, obesity, thyroid disease, pregnancy, and occupations involving repetitive hand or wrist movements. It can also occur following wrist fractures or other injuries.
      </p>

      <h2>Symptoms</h2>
      <ul>
        <li>Numbness, tingling or burning in the thumb, index, middle and half of the ring finger</li>
        <li>Symptoms that are worst at night or upon waking</li>
        <li>Symptoms aggravated by prolonged gripping or hand use</li>
        <li>Weakness of grip and difficulty with fine motor tasks</li>
        <li>In severe or long-standing cases, wasting of the muscles at the base of the thumb</li>
      </ul>

      <h2>Diagnosis</h2>
      <p>
        Clinical examination may include Tinel's sign (tapping over the carpal tunnel) and Phalen's manoeuvre (holding the wrist in flexion). Nerve conduction studies (NCS) confirm the diagnosis and grade the severity of compression.
      </p>

      <h2>Non-surgical treatment</h2>
      <p>
        Mild to moderate carpal tunnel syndrome may be managed with night splinting (to keep the wrist in a neutral position during sleep), activity modification and corticosteroid injection into the carpal tunnel. These measures are most effective when symptoms are mild.
      </p>

      <h2>Surgical decompression</h2>
      <p>
        When conservative measures fail or nerve dysfunction is moderate to severe, carpal tunnel release is indicated. The procedure divides the transverse carpal ligament to decompress the median nerve. It is performed through a small incision in the palm (open release) or endoscopically and is usually a day procedure under local anaesthesia.
      </p>
      <p>
        People typically return to light activities within a few days, though full hand strength may take several weeks. Recovery varies between people.
      </p>

      <RisksSection
        items={[
          "infection",
          "nerve or blood vessel injury",
          "symptoms that persist or return",
          "scar tenderness",
          "hand stiffness or weakness",
          "risks related to the anaesthetic",
        ]}
      />

      <FAQSection faqs={faqs} />
    </PageLayout>
  );
}
