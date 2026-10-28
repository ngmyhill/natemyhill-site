import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";
import RisksSection from "@/components/RisksSection";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = pageMetadata({
  title: "Shoulder Instability Surgery Melbourne",
  description: "Labral repair (Bankart) and Latarjet procedure for shoulder instability and recurrent dislocation. Specialist shoulder surgeon in Melbourne.",
  path: "/shoulder-upper-limb/shoulder-instability",
});

const faqs = [
  { q: "What is the difference between a Bankart repair and a Latarjet procedure?", a: "A Bankart repair reattaches the torn labrum back to the glenoid using anchors and is performed arthroscopically. The Latarjet procedure transfers a piece of bone from the coracoid process to the front of the glenoid socket, providing a bony block against re-dislocation. The Latarjet is preferred when there is significant bone loss from the glenoid or in cases of failed Bankart repair." },
  { q: "How many dislocations are too many before surgery?", a: "There is no fixed number. The decision is based on the degree of bone loss, activity level, age, risk of re-dislocation and the impact on your quality of life. Dr Myhill will review your imaging and discuss whether surgery is appropriate." },
  { q: "What is the recovery time?", a: "A sling is typically worn for 4–6 weeks. Physiotherapy begins early, with return to contact sport usually at 6–9 months for arthroscopic repair, and potentially earlier following Latarjet due to the bony augmentation." },
];

export default function ShoulderInstabilityPage() {
  return (
    <PageLayout crumbs={[{ label: "Home", href: "/" }, { label: "Shoulder & Upper Limb", href: "/shoulder-upper-limb" }, { label: "Shoulder Instability" }]}>
      <h1>Shoulder instability</h1>
      <p>
        Shoulder instability refers to a shoulder joint that dislocates, partially dislocates (subluxes) or feels loose and unreliable. It most commonly results from a traumatic dislocation that tears the labrum (the soft tissue rim of the shoulder socket), but can also arise from ligamentous laxity or repetitive overhead activity.
      </p>

      <h2>Symptoms</h2>
      <ul>
        <li>A history of shoulder dislocation requiring manipulation to relocate</li>
        <li>A sensation of the shoulder slipping or giving way</li>
        <li>Apprehension when raising the arm in certain positions</li>
        <li>Pain and a sense of looseness with overhead or throwing activities</li>
      </ul>

      <h2>Diagnosis</h2>
      <p>
        Clinical examination is central to diagnosis. Imaging with X-ray (to assess bone loss) and MRI (to evaluate the labrum and ligaments) is typically arranged. CT scan may be required if significant bone loss is suspected.
      </p>

      <h2>Non-surgical management</h2>
      <p>
        For first-time dislocations in older, less active patients, or where instability is mild, physiotherapy to strengthen the rotator cuff and periscapular muscles may reduce the risk of re-dislocation.
      </p>

      <h2>Surgical options</h2>
      <h3>Arthroscopic Bankart repair</h3>
      <p>
        This keyhole procedure reattaches the torn labrum back to the glenoid (socket) rim using suture anchors. It aims to restore the normal anatomy of the shoulder with minimal tissue disruption. Results depend on factors including whether the glenoid bone is intact.
      </p>
      <h3>Latarjet procedure</h3>
      <p>
        The Latarjet procedure transfers the coracoid process (a bony projection of the shoulder blade) to the front of the glenoid socket. This creates a bony buttress that prevents the humeral head from dislocating anteriorly. It is particularly indicated when there is significant bone loss from the glenoid or in cases of failed arthroscopic repair.
      </p>

      <h2>Recovery</h2>
      <p>
        Following surgery, a sling is worn for 4–6 weeks. Physiotherapy commences early to restore movement and strength. Return to contact sports typically occurs at 6–9 months for arthroscopic repair, though recovery varies between people.
      </p>

      {/* DRAFT: clinical review by Dr Myhill required */}
      <RisksSection
        items={[
          "infection",
          "shoulder stiffness",
          "the shoulder becoming unstable or dislocating again",
          "nerve or blood vessel injury",
          "risks related to the anaesthetic",
          "the need for further surgery",
        ]}
      />

      <FAQSection faqs={faqs} />
    </PageLayout>
  );
}
