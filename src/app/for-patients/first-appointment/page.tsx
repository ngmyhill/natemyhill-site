import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import { DOCTOR } from "@/lib/data";

export const metadata: Metadata = {
  title: "Your First Appointment — Dr Nate Myhill",
  description: "Preparing for your first consultation with Dr Nate Myhill. What to bring, what to expect, and how appointments work.",
};

export default function FirstAppointmentPage() {
  return (
    <PageLayout crumbs={[{ label: "Home", href: "/" }, { label: "For Patients", href: "/for-patients" }, { label: "Your First Appointment" }]}>
      <h1>Your first appointment</h1>
      <p>
        Your consultation with Dr Myhill is an opportunity to discuss your condition in detail, ask questions, and begin working out what the right path forward looks like for you. Consultations typically take 20–40 minutes depending on your situation.
      </p>

      <h2>What to bring</h2>
      <ul>
        <li><strong>Your referral letter</strong> from your GP or specialist</li>
        <li><strong>Imaging</strong> — any X-rays, MRI or CT scans, ideally on CD or via an online portal link. Printed images alone may not be sufficient.</li>
        <li><strong>Medicare card</strong> and <strong>health fund card</strong></li>
        <li><strong>Current medications list</strong> — including dose and frequency</li>
        <li><strong>Previous medical and surgical history</strong> — including any prior orthopaedic procedures</li>
        <li><strong>WorkCover or TAC claim number</strong>, if applicable</li>
        <li>A support person or family member, if you wish — particularly if you think you may find medical information difficult to retain alone</li>
      </ul>

      <h2>What to expect</h2>
      <p>
        Dr Myhill will take a detailed history of your symptoms and their impact on your daily life, activities and goals. He will then perform a physical examination. Based on the history, examination and any imaging available, he will explain your condition and the options available to you.
      </p>
      <p>
        Treatment decisions are made together. Dr Myhill's approach is built on shared decision-making — ensuring you understand your condition and every realistic option, so that the plan you choose reflects your own values and goals.
      </p>
      <p>
        You will rarely be rushed into a decision. For most conditions, there is time to reflect, seek a second opinion, or ask further questions before committing to any course of action.
      </p>

      <h2>Booking</h2>
      <p>
        Appointments can be booked online through the Gentu patient portal or by contacting the practice directly:
      </p>
      <ul>
        <li><strong>Online:</strong> <a href={DOCTOR.gentuUrl} target="_blank" rel="noopener noreferrer">Book via Gentu →</a></li>
        <li><strong>Phone:</strong> <a href={`tel:${DOCTOR.phone}`}>{DOCTOR.phone}</a></li>
        <li><strong>Email:</strong> <a href={`mailto:${DOCTOR.email}`}>{DOCTOR.email}</a></li>
      </ul>
    </PageLayout>
  );
}
