import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";
import RisksSection from "@/components/RisksSection";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = pageMetadata({
  title: "Cubital Tunnel Syndrome Melbourne — Dr Nate Myhill",
  description: "Surgical decompression of the ulnar nerve at the elbow for cubital tunnel syndrome. Upper limb surgeon Dr Nate Myhill, Melbourne.",
  path: "/shoulder-upper-limb/cubital-tunnel-syndrome",
});

const faqs = [
  { q: "What causes cubital tunnel syndrome?", a: "The ulnar nerve can be compressed or stretched at the elbow when the elbow is held in a flexed position for prolonged periods, from direct pressure on the inner elbow, or from bony changes or scar tissue within the cubital tunnel. Certain activities — such as resting on the elbow or holding a phone for extended periods — can aggravate symptoms." },
  { q: "Does cubital tunnel syndrome always need surgery?", a: "Mild cases can often be managed with activity modification, night splinting in slight elbow extension, and physiotherapy. Surgery is considered when symptoms are moderate to severe, persistent, or when there is evidence of nerve dysfunction on nerve conduction studies." },
  { q: "What are the surgical options?", a: "The most common procedure is simple decompression — releasing the tight tissue over the cubital tunnel to relieve pressure on the nerve. In some cases, ulnar nerve transposition (moving the nerve to the front of the elbow) is performed. Dr Myhill will discuss the most appropriate approach for your situation." },
];

export default function CubitalTunnelPage() {
  return (
    <PageLayout crumbs={[{ label: "Home", href: "/" }, { label: "Shoulder & Upper Limb", href: "/shoulder-upper-limb" }, { label: "Cubital Tunnel Syndrome" }]}>
      <h1>Cubital tunnel syndrome</h1>
      <p>
        Cubital tunnel syndrome is the second most common peripheral nerve compression in the upper limb, after carpal tunnel syndrome. It occurs when the ulnar nerve — which passes through the cubital tunnel on the inner side of the elbow — becomes compressed or irritated.
      </p>

      <h2>Symptoms</h2>
      <ul>
        <li>Numbness and tingling in the ring and little fingers, particularly when the elbow is bent</li>
        <li>A feeling of the arm "going to sleep"</li>
        <li>Weakness or clumsiness of the hand</li>
        <li>Pain on the inner side of the elbow</li>
        <li>In more severe cases, wasting of the small muscles of the hand</li>
      </ul>

      <h2>Diagnosis</h2>
      <p>
        Diagnosis is based on clinical assessment and is confirmed by nerve conduction studies (NCS) and electromyography (EMG), which measure the speed and quality of electrical signals in the ulnar nerve and identify the level of compression.
      </p>

      <h2>Non-surgical management</h2>
      <p>
        Mild to moderate cubital tunnel syndrome may respond to:
      </p>
      <ul>
        <li>Activity modification — avoiding prolonged elbow flexion</li>
        <li>Night splinting — wearing a splint to keep the elbow in slight extension during sleep</li>
        <li>Padded elbow protection during activities</li>
        <li>Physiotherapy</li>
      </ul>

      <h2>Surgical decompression</h2>
      <p>
        When conservative measures fail or nerve dysfunction is significant, surgical decompression is performed. This involves releasing the tight tissue (flexor carpi ulnaris fascia and the cubital tunnel retinaculum) that overlies the nerve, relieving the compression. In selected cases — such as where the nerve is unstable or previous decompression has failed — ulnar nerve transposition (moving the nerve to the front of the elbow) may be required.
      </p>
      <p>
        Surgery is typically performed as a day procedure under general or regional anaesthesia.
      </p>

      {/* DRAFT: clinical review by Dr Myhill required */}
      <RisksSection
        items={[
          "infection",
          "nerve injury",
          "numbness or tingling that persists or returns",
          "numbness or tenderness around the scar",
          "risks related to the anaesthetic",
          "the need for further surgery",
        ]}
      />

      <FAQSection faqs={faqs} />
    </PageLayout>
  );
}
