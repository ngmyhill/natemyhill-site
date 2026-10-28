import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";
import { DOCTOR, LOCATIONS, LOCATION_SENTENCE_LIST, hasRealValue, joinList } from "@/lib/data";

export const metadata: Metadata = pageMetadata({
  title: "Book an Orthopaedic Appointment",
  description: "Book an appointment with Dr Nate Myhill, specialist orthopaedic surgeon. Consult in " + joinList(LOCATIONS.map((l) => l.suburb)) + ".",
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

      <h2>How to make an appointment</h2>
      <p>
        The easiest way is to call the practice. Please have your referral details and health fund information (if applicable) ready.
      </p>
      <p>
        <a
          href={`tel:${DOCTOR.phoneTel}`}
          style={{ background: "#0f7a59", color: "#ffffff", padding: "0.75rem 1.75rem", borderRadius: "4px", fontWeight: 500, textDecoration: "none", fontSize: "16px", display: "inline-block" }}
        >
          Call {DOCTOR.phone}
        </a>
      </p>
      <p>
        Or email <a href={`mailto:${DOCTOR.email}?subject=Appointment%20request`}>{DOCTOR.email}</a> and include:
      </p>
      <ul>
        <li>Your name</li>
        <li>Your date of birth</li>
        <li>Your phone number</li>
        <li>Your preferred location</li>
        <li>Whether you have a GP or specialist referral</li>
      </ul>
      <p>Please don&apos;t send detailed medical information by email.</p>
      <p>
        We&apos;ll reply within one business day. For anything urgent, call or go to your nearest emergency department.
      </p>
      {hasRealValue(DOCTOR.fax) && <p><strong>Fax:</strong> {DOCTOR.fax}</p>}

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
        <li>Any relevant imaging (X-rays, MRI or CT scans), on CD or via an online link</li>
        <li>Your Medicare card and health fund card</li>
        <li>A list of your current medications</li>
        <li>Your WorkCover or TAC claim number, if applicable</li>
      </ul>

      <h2>Consulting locations</h2>
      <p>
        Dr Myhill consults at {LOCATION_SENTENCE_LIST}.
      </p>
      <p>
        <a href="/locations">View all locations with maps →</a>
      </p>

      <h2>Urgent or trauma referrals</h2>
      <p>
        GPs and emergency departments requiring urgent orthopaedic review may contact the practice directly by phone. Please see the <a href="/for-referrers/how-to-refer">referrer information page</a> for details.
      </p>
    </PageLayout>
  );
}
