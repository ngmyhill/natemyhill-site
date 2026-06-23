import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import { DOCTOR } from "@/lib/data";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: "Book an appointment with Dr Nate Myhill, specialist orthopaedic surgeon. Consult at Knox, Mitcham, Warringal, John Fawkner or Albury.",
};

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

      <h2>Online booking</h2>
      <p>
        Appointments can be booked online through the Gentu patient portal. You will need your referral details and health fund information (if applicable) to complete your booking.
      </p>
      <div style={{ margin: "1.5rem 0" }}>
        <a
          href={DOCTOR.gentuUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ background: "#1d9e75", color: "#ffffff", padding: "0.75rem 1.75rem", borderRadius: "4px", fontWeight: 500, textDecoration: "none", fontSize: "15px", display: "inline-block" }}
        >
          Book online via Gentu →
        </a>
      </div>

      <h2>Book by phone</h2>
      <p>
        You can also contact the practice directly by phone or email:
      </p>
      <ul>
        <li><strong>Phone:</strong> <a href={`tel:${DOCTOR.phone}`}>{DOCTOR.phone}</a></li>
        <li><strong>Fax:</strong> {DOCTOR.fax}</li>
        <li><strong>Email:</strong> <a href={`mailto:${DOCTOR.email}`}>{DOCTOR.email}</a></li>
      </ul>

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
