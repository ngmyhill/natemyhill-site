import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";
import { DOCTOR } from "@/lib/data";

export const metadata: Metadata = pageMetadata({
  title: "How to Refer a Patient for Surgery",
  description: "How to refer a patient to Dr Nate Myhill. Contact details, HealthLink ID, urgent referral process and what to include.",
  path: "/for-referrers/how-to-refer",
});

export default function HowToReferPage() {
  return (
    <PageLayout crumbs={[{ label: "Home", href: "/" }, { label: "For Referrers", href: "/for-referrers" }, { label: "How to Refer" }]} showCTA={false}>
      <h1>How to refer</h1>
      <p>
        Dr Myhill accepts referrals from GPs, physiotherapists, allied health practitioners and emergency departments across Melbourne and Albury.
      </p>

      <h2>Contact details</h2>
      <ul>
        <li><strong>Phone:</strong> <a href={`tel:${DOCTOR.phone}`}>{DOCTOR.phone}</a></li>
        <li><strong>Fax:</strong> {DOCTOR.fax}</li>
        <li><strong>Email:</strong> <a href={`mailto:${DOCTOR.email}`}>{DOCTOR.email}</a></li>
        <li><strong>HealthLink Provider ID:</strong> {DOCTOR.healthlinkId}</li>
      </ul>

      <h2>eReferral (preferred)</h2>
      <p>
        Secure eReferral via <strong>HealthLink</strong> is the preferred method. Search for Dr Nate Myhill using HealthLink Provider ID: <strong>{DOCTOR.healthlinkId}</strong>.
      </p>

      <h2>Fax referrals</h2>
      <p>
        Referrals may also be faxed to <strong>{DOCTOR.fax}</strong>. A downloadable referral template is available on the <a href="/for-referrers/referral-resources">resources page</a>.
      </p>

      <h2>Urgent referrals</h2>
      <p>
        For urgent or semi-urgent referrals — including trauma, acute fractures or time-sensitive orthopaedic presentations — please phone the practice directly: <a href={`tel:${DOCTOR.phone}`}>{DOCTOR.phone}</a>.
      </p>
      <p>
        Emergency departments may also contact Dr Myhill's rooms directly for advice on acute orthopaedic presentations.
      </p>

      <h2>What to include in a referral</h2>
      <ul>
        <li>Patient's full name, date of birth and contact details</li>
        <li>Presenting complaint and history</li>
        <li>Relevant examination findings</li>
        <li>Imaging results and reports (X-ray, MRI, CT)</li>
        <li>Current medications and relevant past medical and surgical history</li>
        <li>Relevant allied health reports</li>
        <li>Urgency — routine, semi-urgent or urgent</li>
        <li>WorkCover or TAC details, if applicable</li>
        <li>Health fund details (if known)</li>
      </ul>

      <h2>Consulting locations</h2>
      <p>
        Dr Myhill consults at Knox Private Hospital (Wantirna), Mitcham Private Hospital, Warringal Private Hospital (Heidelberg), John Fawkner Private Hospital (Coburg) and The Gardens Specialist Centre (Albury). Please indicate if you have a preferred location.
      </p>
    </PageLayout>
  );
}
