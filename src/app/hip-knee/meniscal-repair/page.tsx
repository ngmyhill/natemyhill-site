import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";
import RisksSection from "@/components/RisksSection";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = pageMetadata({
  title: "Meniscal Repair Surgery Melbourne",
  description: "Arthroscopic meniscal repair to preserve the knee's natural cushioning. Specialist knee surgeon Dr Nate Myhill, Melbourne.",
  path: "/hip-knee/meniscal-repair",
});

const faqs = [
  { q: "Can all meniscal tears be repaired?", a: "No. Tear location, pattern, tissue quality and patient factors all determine whether repair is feasible. Tears in the outer (red) zone of the meniscus with a good blood supply have a better chance of healing. Tears in the inner zone with poor blood supply are more commonly treated by trimming (partial meniscectomy)." },
  { q: "What is the recovery after meniscal repair?", a: "Meniscal repair requires a more protective recovery than trimming to allow the repaired tissue to heal. Weight-bearing and return to sport are restricted for several weeks. Full return to sport typically takes 4–6 months following repair, compared to 4–6 weeks after trimming, and recovery varies between people." },
];

export default function MeniscalRepairPage() {
  return (
    <PageLayout crumbs={[{ label: "Home", href: "/" }, { label: "Hip & Knee", href: "/hip-knee" }, { label: "Meniscal Repair" }]}>
      <h1>Meniscal repair</h1>
      <p>
        The menisci are two C-shaped pads of fibrocartilage inside the knee joint that act as shock absorbers, load distributors and joint stabilisers. Meniscal tears are among the most common knee injuries, occurring both in sport (often alongside ACL injury) and as degenerative tears in older patients.
      </p>

      <h2>Symptoms</h2>
      <ul>
        <li>Pain along the inner or outer joint line of the knee</li>
        <li>Swelling following activity</li>
        <li>Catching, clicking or locking of the knee</li>
        <li>Difficulty squatting or kneeling</li>
      </ul>

      <h2>Why preserving the meniscus matters</h2>
      <p>
        The meniscus plays a critical role in protecting the knee's articular cartilage. Removing large amounts of meniscal tissue (total or near-total meniscectomy) significantly increases the risk of developing knee arthritis over time. Where the tear pattern and tissue quality allow, repair is preferred to preserve the meniscus.
      </p>

      <h2>Arthroscopic meniscal repair</h2>
      <p>
        Meniscal repair is performed arthroscopically through small portals. Sutures or implants are used to hold the torn meniscal tissue together while healing occurs. The decision to repair versus trim depends on tear characteristics, tissue quality, blood supply at the tear site and associated injuries.
      </p>

      <h2>Partial meniscectomy</h2>
      <p>
        When a tear cannot be repaired, the unstable torn portion is trimmed back to a stable rim. This is a common, effective procedure for symptomatic tears that cause locking, catching or functional limitation.
      </p>

      <RisksSection
        items={[
          "infection",
          "blood clots in the legs or lungs",
          "knee stiffness",
          "the repair not healing, which may mean further surgery",
          "nerve or blood vessel injury",
          "risks related to the anaesthetic",
        ]}
      />

      <FAQSection faqs={faqs} />
    </PageLayout>
  );
}
