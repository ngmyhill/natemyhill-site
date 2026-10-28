import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = pageMetadata({
  title: "Fees and Billing Information",
  description: "Fee information, out-of-pocket estimates, health fund and Medicare information for Dr Nate Myhill's orthopaedic practice.",
  path: "/for-patients/fees-and-billing",
});

export default function FeesAndBillingPage() {
  return (
    <PageLayout crumbs={[{ label: "Home", href: "/" }, { label: "For Patients", href: "/for-patients" }, { label: "Fees & Billing" }]}>
      <h1>Fees &amp; billing</h1>
      <p>
        Dr Myhill's practice is committed to transparent fee disclosure. You will always be informed of the estimated out-of-pocket costs before proceeding with any procedure.
      </p>

      <h2>Consultations</h2>
      <p>
        A valid GP or specialist referral is required to claim a Medicare rebate for your consultation. Patients without a referral are treated as private (self-funded) patients.
      </p>
      <p>
        Consultation fees vary. The practice will advise you of the fee and expected Medicare rebate when you book. Please contact us for a fee estimate prior to your appointment.
      </p>

      <h2>Surgical fees</h2>
      <p>
        Before any surgical procedure, you will receive a written estimate of the expected costs, including:
      </p>
      <ul>
        <li>Dr Myhill's surgical fee</li>
        <li>The anaesthetist's fee (billed separately)</li>
        <li>Hospital fees (day or overnight stay)</li>
        <li>Any implant or prosthesis costs</li>
      </ul>
      <p>
        The out-of-pocket amount (the "gap") is the difference between the total fee and what Medicare and your health fund reimburse. Your health fund can provide an estimate of your expected rebate when you have the procedure codes.
      </p>

      <h2>Health fund patients</h2>
      <p>
        Patients with appropriate private health insurance (hospital cover) may be eligible to claim a rebate toward surgical costs. Contact your health fund for information on your specific policy's entitlements.
      </p>

      <h2>WorkCover and TAC patients</h2>
      <p>
        Dr Myhill accepts WorkCover and TAC (Transport Accident Commission) patients. Please advise the practice of your claim details when booking, and bring your claim number to your appointment.
      </p>

      <h2>Public patients</h2>
      <p>
        Dr Myhill holds appointments at Northern Health (Epping) and Western Health (Footscray), where public patients can be seen and treated through the public hospital system. Your GP can refer you through these services.
      </p>

      <h2>Contact us about fees</h2>
      <p>
        If you have any questions about expected costs before your consultation or surgery, please contact the practice and we will be happy to discuss your circumstances.
      </p>
    </PageLayout>
  );
}
