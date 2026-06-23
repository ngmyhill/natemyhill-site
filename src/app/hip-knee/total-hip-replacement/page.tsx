import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Total Hip Replacement Melbourne — Dr Nate Myhill",
  description: "Total hip arthroplasty for hip arthritis in Melbourne. Specialist orthopaedic surgeon Dr Nate Myhill.",
};

const faqs = [
  { q: "How long does a hip replacement last?", a: "Modern hip replacements are very durable. Most contemporary implants are designed to last 20 years or more in appropriate patients. Longevity depends on factors including implant design, surgical technique, activity level and body weight." },
  { q: "When is hip replacement the right option?", a: "Hip replacement is considered when hip arthritis causes persistent pain and functional limitation that significantly impacts quality of life and has not responded adequately to non-surgical measures such as physiotherapy, weight management and analgesic medication." },
  { q: "What is the hospital stay?", a: "Most patients stay in hospital for 2–4 nights following hip replacement. Enhanced recovery programmes now mean many patients begin walking on the day of surgery." },
  { q: "When can I return to driving?", a: "Return to driving is typically around 6 weeks after surgery, provided you can perform an emergency stop safely and are no longer taking opioid medications. Dr Myhill will advise based on your specific recovery." },
];

export default function TotalHipReplacementPage() {
  return (
    <PageLayout crumbs={[{ label: "Home", href: "/" }, { label: "Hip & Knee", href: "/hip-knee" }, { label: "Total Hip Replacement" }]}>
      <h1>Total hip replacement</h1>
      <p>
        Total hip replacement (total hip arthroplasty) is a well-established surgical procedure in which the arthritic surfaces of the hip joint are replaced with prosthetic components. It reliably reduces pain and restores function in patients with end-stage hip arthritis.
      </p>

      <h2>Causes of hip arthritis</h2>
      <ul>
        <li>Primary osteoarthritis — the most common cause, related to wear and degeneration over time</li>
        <li>Rheumatoid and inflammatory arthritis</li>
        <li>Post-traumatic arthritis following fractures or dislocations</li>
        <li>Avascular necrosis — loss of blood supply to the femoral head</li>
        <li>Hip dysplasia — abnormal joint development</li>
      </ul>

      <h2>Symptoms</h2>
      <ul>
        <li>Groin, thigh or buttock pain</li>
        <li>Stiffness — particularly difficulty putting on shoes and socks</li>
        <li>Pain that limits walking distance</li>
        <li>Night pain disturbing sleep</li>
        <li>A limp</li>
      </ul>

      <h2>The procedure</h2>
      <p>
        Under general or spinal anaesthesia, the damaged femoral head (ball) is removed and the acetabulum (socket) is resurfaced with a metal cup and plastic or ceramic liner. A metal stem is placed in the femoral canal, topped with a new femoral head component. Components may be fixed with bone cement or press-fit in place.
      </p>
      <p>
        Dr Myhill will discuss bearing surface options, fixation method and surgical approach with you at your consultation.
      </p>

      <h2>Recovery</h2>
      <p>
        Walking typically begins on the day of or the day after surgery. Most patients go home within 2–4 nights. A physiotherapy programme continues for several months. Most patients return to light activities within 6 weeks and resume most normal activities by 3 months.
      </p>

      <FAQSection faqs={faqs} />
    </PageLayout>
  );
}
