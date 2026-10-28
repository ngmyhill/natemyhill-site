import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";
import { DOCTOR } from "@/lib/data";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy and Your Information",
  description: "Privacy policy for drnatemyhill.com.au — how we collect, use and protect your personal information in accordance with the Privacy Act 1988 (Cth).",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <PageLayout
      crumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      showCTA={false}
    >
      <h1>Privacy Policy</h1>
      <p style={{ color: "#5f5e5a", fontSize: "14px" }}>Last updated: August 2026</p>

      <p>
        Dr Nate Myhill ("<strong>we</strong>", "<strong>us</strong>", "<strong>our</strong>") is committed to protecting the privacy of individuals who interact with this website and our practice. This policy explains how we collect, use, disclose and protect personal information in accordance with the <em>Privacy Act 1988</em> (Cth) and the Australian Privacy Principles (APPs).
      </p>

      <h2>1. What personal information we collect</h2>
      <p>
        When you contact the practice or use this website, we may collect:
      </p>
      <ul>
        <li>Contact information — name, phone number, email address, postal address</li>
        <li>Referral information — referring practitioner details</li>
        <li>Health information — where you have provided it directly to us as part of booking or clinical communication (this is treated as sensitive information under the Privacy Act)</li>
        <li>Website usage data — IP address, browser type, pages visited (collected via analytics tools)</li>
      </ul>

      <h2>2. How we collect personal information</h2>
      <p>We collect personal information directly from you when you:</p>
      <ul>
        <li>Contact us by phone, email or online form</li>
        <li>Contact the practice to make an appointment</li>
        <li>Download resources from this website</li>
        <li>Are referred to us by a GP, specialist or other health practitioner</li>
      </ul>

      <h2>3. Why we collect personal information</h2>
      <p>We collect and use personal information to:</p>
      <ul>
        <li>Provide orthopaedic surgical and medical services</li>
        <li>Schedule and manage appointments</li>
        <li>Communicate with you and your referring practitioner about your care</li>
        <li>Process billing and Medicare/health fund claims</li>
        <li>Comply with legal and professional obligations</li>
        <li>Improve this website and our services</li>
      </ul>

      <h2>4. Disclosure of personal information</h2>
      <p>We may disclose your personal information to:</p>
      <ul>
        <li>Your referring GP or treating practitioners involved in your care</li>
        <li>Hospitals and anaesthetists involved in your procedure</li>
        <li>Medicare Australia and your health fund for billing purposes</li>
        <li>WorkCover or TAC, where applicable</li>
        {/* DRAFT: confirm Xestro's overseas technology partners with Xestro before launch (APP 8) */}
        <li>Our practice management software provider (Xestro), which stores clinical and appointment records in Australia</li>
        <li>IT service providers who assist in operating our systems, under confidentiality obligations</li>
      </ul>
      <p>
        We will not sell, rent or otherwise disclose your personal information to third parties for marketing purposes without your consent.
      </p>

      <h2>5. Health information</h2>
      <p>
        Health information is sensitive information under the Privacy Act and is handled with additional care. We collect health information only where necessary for providing care, and we take reasonable steps to protect it from misuse, interference, loss, and unauthorised access or disclosure.
      </p>
      <p>
        <strong>This website does not collect detailed clinical health information.</strong> Clinical communication is handled through secure channels — by phone, fax or secure email, or through secure messaging services such as HealthLink and Medical Objects.
      </p>

      <h2>6. Storage and security</h2>
      <p>
        Personal information is stored securely. Electronic records are held in systems with appropriate access controls and encryption. We take reasonable steps to protect personal information from misuse, interference, loss, and unauthorised access, modification or disclosure.
      </p>
      <p>
        We retain information for as long as required by law or professional obligations, and destroy or de-identify it when it is no longer needed.
      </p>

      <h2>7. Access and correction</h2>
      <p>
        You have the right to access personal information we hold about you and to request correction of inaccurate information. To make a request, contact us using the details below. We will respond within a reasonable time (generally within 30 days).
      </p>

      <h2>8. Complaints</h2>
      <p>
        If you have a concern about how we have handled your personal information, please contact us in the first instance. If you remain dissatisfied, you may lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer">oaic.gov.au</a>.
      </p>

      <h2>9. Website analytics</h2>
      <p>
        This website may use analytics tools (such as Google Analytics) that collect anonymised usage data to help us understand how the site is used. This data does not identify you personally. You can opt out of analytics tracking by adjusting your browser settings or using a browser extension.
      </p>

      <h2>10. Contact</h2>
      <p>
        For privacy-related enquiries, please contact the practice:
      </p>
      <ul>
        <li><strong>Phone:</strong> <a href={`tel:${DOCTOR.phone}`}>{DOCTOR.phone}</a></li>
        <li><strong>Email:</strong> <a href={`mailto:${DOCTOR.email}`}>{DOCTOR.email}</a></li>
        <li><strong>Fax:</strong> {DOCTOR.fax}</li>
      </ul>
    </PageLayout>
  );
}
