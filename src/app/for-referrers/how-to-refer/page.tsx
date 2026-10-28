import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";
import { DOCTOR, LOCATION_SENTENCE_LIST, REFERRAL_INCLUDES, hasRealValue } from "@/lib/data";

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
        For urgent or semi-urgent referrals, including trauma, acute fractures or time-sensitive orthopaedic presentations, please phone the practice directly: <a href={`tel:${DOCTOR.phoneTel}`}>{DOCTOR.phone}</a>.
      </p>
      <p>
        Emergency departments may also contact Dr Myhill's rooms directly for advice on acute orthopaedic presentations.
      </p>

      <h2>What to include in a referral</h2>
      <ul>
        {REFERRAL_INCLUDES.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>Consulting locations</h2>
      <p>
        Dr Myhill consults at {LOCATION_SENTENCE_LIST}.
      </p>
    </PageLayout>
  );
}
