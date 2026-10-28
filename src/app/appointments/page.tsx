import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";
import { DOCTOR, hasRealValue } from "@/lib/data";

export const metadata: Metadata = pageMetadata({
  title: "Book an Orthopaedic Appointment",
  description: "Book an appointment with Dr Nate Myhill, specialist orthopaedic surgeon. Consult at Knox, Mitcham, Warringal, John Fawkner or Albury.",
  path: "/appointments",
});

export default function AppointmentsPage() {
  return (
    <PageLayout
      crumbs={[{ label: "Home", href: "/" }, { label: "Appointments" }]}
      showCTA={false}
    >
      <h1>Book an appointment</h1>
      <p>
        Dr Myhill accepts both privately referred and self-referred patients. A GP or specialist referral is required to claim Medicare rebates; patients without a referral are seen as private (self-funded) patients.
      </p>

      <h2>Call the practice</h2>
      <p>
        The easiest way to make an appointment is to call the practice or send an email. Please have your referral details and health fund information (if applicable) ready.
      </p>
      <ul>
        <li><strong>Phone:</strong> <a href={`tel:${DOCTOR.phoneTel}`}>{DOCTOR.phone}</a></li>
        <li><strong>Email:</strong> <a href={`mailto:${DOCTOR.email}`}>{DOCTOR.email}</a></li>
        {hasRealValue(DOCTOR.fax) && <li><strong>Fax:</strong> {DOCTOR.fax}</li>}
      </ul>

      {hasRealValue(DOCTOR.bookingUrl) && (
        <>
          <h2>Book online</h2>
          <p>
            If you prefer, you can request an appointment online.
          </p>
          <div style={{ margin: "1.5rem 0" }}>
            <a
              href={DOCTOR.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "#0f7a59", color: "#ffffff", padding: "0.75rem 1.75rem", borderRadius: "4px", fontWeight: 500, textDecoration: "none", fontSize: "15px", display: "inline-block" }}
            >
              Book online →
            </a>
          </div>
        </>
      )}

      <h2>What to bring</h2>
      <ul>
        <li>Your GP or specialist referral letter</li>
        <li>Any relevant imaging (X-rays, MRI or CT scans) — on CD or via an online link</li>
        <li>Your Medicare card and health fund card</li>
        <li>A list of your current medications</li>
        <li>Your WorkCover or TAC claim number, if applicable</li>
      </ul>

      <h2>Consulting locations</h2>
      <p>
        Dr Myhill consults at Knox Private Hospital (Wantirna), Mitcham Private Hospital, Warringal Private Hospital (Heidelberg), John Fawkner Private Hospital (Coburg) and The Gardens Specialist Centre (Albury).
      </p>
      <p>
        <a href="/locations">View all locations with maps and addresses →</a>
      </p>

      <h2>Urgent or trauma referrals</h2>
      <p>
        GPs and emergency departments requiring urgent orthopaedic review may contact the practice directly by phone. Please see the <a href="/for-referrers/how-to-refer">referrer information page</a> for details.
      </p>
    </PageLayout>
  );
}
