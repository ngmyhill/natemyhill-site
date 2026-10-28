import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";
import { DOCTOR, hasRealValue } from "@/lib/data";

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
        <li><strong>Phone:</strong> <a href={`tel:${DOCTOR.phoneTel}`}>{DOCTOR.phone}</a></li>
        {hasRealValue(DOCTOR.fax) && <li><strong>Fax:</strong> {DOCTOR.fax}</li>}
        <li><strong>Email:</strong> <a href={`mailto:${DOCTOR.email}`}>{DOCTOR.email}</a></li>
        {hasRealValue(DOCTOR.healthlinkId) && <li><strong>HealthLink Provider ID:</strong> {DOCTOR.healthlinkId}</li>}
        {hasRealValue(DOCTOR.medicalObjectsId) && <li><strong>Medical Objects ID:</strong> {DOCTOR.medicalObjectsId}</li>}
      </ul>

      <h2>eReferral (preferred)</h2>
      <p>
        Referrals can be sent securely by <strong>HealthLink</strong> or <strong>Medical Objects</strong>, which is the preferred method.
        {hasRealValue(DOCTOR.healthlinkId) && <> Search for Dr Nate Myhill using HealthLink Provider ID <strong>{DOCTOR.healthlinkId}</strong>.</>}
        {hasRealValue(DOCTOR.medicalObjectsId) && <> Medical Objects ID: <strong>{DOCTOR.medicalObjectsId}</strong>.</>}
        {!hasRealValue(DOCTOR.healthlinkId) && !hasRealValue(DOCTOR.medicalObjectsId) && <> Please contact the practice for the details you need to send a referral.</>}
      </p>

      <h2>Other ways to refer</h2>
      <p>
        Referrals can be sent {hasRealValue(DOCTOR.fax) && <>by fax to <strong>{DOCTOR.fax}</strong>, </>}by email to <a href={`mailto:${DOCTOR.email}`}>{DOCTOR.email}</a>, or by phone on <a href={`tel:${DOCTOR.phoneTel}`}>{DOCTOR.phone}</a>. Any standard referral letter is accepted.
      </p>

      <h2>Urgent referrals</h2>
      <p>
        For urgent or semi-urgent referrals — including trauma, acute fractures or time-sensitive orthopaedic presentations — please phone the practice directly: <a href={`tel:${DOCTOR.phoneTel}`}>{DOCTOR.phone}</a>.
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
