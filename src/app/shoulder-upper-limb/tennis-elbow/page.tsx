import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Tennis Elbow Surgery Melbourne — Dr Nate Myhill",
  description: "Surgical treatment of lateral epicondylitis (tennis elbow) in Melbourne when conservative treatment has not helped. Dr Nate Myhill, upper limb surgeon.",
};

const faqs = [
  { q: "How long should I try conservative treatment before considering surgery?", a: "Most clinicians recommend at least 6–12 months of consistent conservative treatment before surgery is considered. This includes physiotherapy, activity modification, bracing, corticosteroid or PRP injection, and rest." },
  { q: "What does the surgery involve?", a: "Surgery for tennis elbow involves releasing or debriding the diseased portion of the common extensor tendon origin at the lateral epicondyle. This can be done arthroscopically or through a small open incision. Recovery takes several months." },
];

export default function TennisElbowPage() {
  return (
    <PageLayout crumbs={[{ label: "Home", href: "/" }, { label: "Shoulder & Upper Limb", href: "/shoulder-upper-limb" }, { label: "Tennis Elbow" }]}>
      <h1>Tennis elbow (lateral epicondylitis)</h1>
      <p>
        Tennis elbow is a condition characterised by pain on the outer side of the elbow, arising from degeneration of the tendons that attach at the lateral epicondyle (the bony bump on the outside of the elbow). Despite the name, it affects far more than just tennis players — it commonly occurs in any activity involving repetitive wrist extension or gripping.
      </p>

      <h2>Symptoms</h2>
      <ul>
        <li>Pain and tenderness at the outer elbow</li>
        <li>Pain radiating down the forearm</li>
        <li>Weakness of grip</li>
        <li>Pain with lifting, gripping or turning the wrist</li>
      </ul>

      <h2>Non-surgical treatment</h2>
      <p>
        The vast majority of tennis elbow cases resolve with non-surgical treatment over 6–18 months. Options include:
      </p>
      <ul>
        <li>Physiotherapy — eccentric strengthening and manual therapy</li>
        <li>Bracing — a counterforce brace during activities</li>
        <li>Activity modification</li>
        <li>Corticosteroid injection</li>
        <li>Platelet-rich plasma (PRP) injection</li>
      </ul>

      <h2>Surgical management</h2>
      <p>
        Surgery is considered when pain has persisted despite at least 6–12 months of consistent conservative treatment. The procedure involves releasing or debriding the degenerate tendon tissue at the lateral epicondyle. This can be performed arthroscopically (keyhole) or through a small open incision, depending on the findings and Dr Myhill's assessment.
      </p>
      <p>
        Recovery after surgery involves a period of rest followed by a progressive physiotherapy programme over several months.
      </p>

      <FAQSection faqs={faqs} />
    </PageLayout>
  );
}
