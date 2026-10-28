import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = pageMetadata({
  title: "Post-operative Information — Dr Nate Myhill",
  description: "Post-operative care information from Dr Nate Myhill. Wound care, pain management, exercises and follow-up.",
  path: "/for-patients/post-operative-information",
});

export default function PostOperativePage() {
  return (
    <PageLayout crumbs={[{ label: "Home", href: "/" }, { label: "For Patients", href: "/for-patients" }, { label: "Post-operative Information" }]}>
      <h1>Post-operative information</h1>
      <p>
        This page provides general guidance on what to expect after surgery. You will also receive written information specific to your procedure from Dr Myhill's rooms. Always follow the instructions provided to you.
      </p>

      <h2>Pain management</h2>
      <p>
        Some pain and discomfort after surgery is expected and normal. Dr Myhill will prescribe a pain management plan appropriate for your procedure. General advice:
      </p>
      <ul>
        <li>Take prescribed medications as directed — do not wait until pain is severe before taking them</li>
        <li>Elevate the operated limb to reduce swelling</li>
        <li>Apply ice (wrapped in a cloth — not directly on skin) to the area for 15–20 minutes several times a day</li>
        <li>If pain is worsening significantly after the first 48–72 hours rather than improving, contact the practice or hospital</li>
      </ul>

      <h2>Wound care</h2>
      <ul>
        <li>Keep the wound clean and dry until instructed otherwise</li>
        <li>Do not submerge wounds in water (no baths, swimming or spa) until cleared by Dr Myhill</li>
        <li>Showering with a waterproof dressing over the wound is usually permitted — the hospital or practice will advise</li>
        <li>Watch for signs of infection: increased redness, warmth, swelling, discharge or fever. Contact the practice promptly if these occur.</li>
        <li>Sutures or clips are typically removed at your first post-operative appointment</li>
      </ul>

      <h2>Mobility and precautions</h2>
      <p>
        Specific mobility guidelines depend on your procedure. Procedure-specific instruction sheets are available from the practice — see below.
      </p>
      <ul>
        <li>Use any prescribed aids (crutches, sling, brace) as directed</li>
        <li>Do not drive until you have been cleared by Dr Myhill and are not taking opioid medications</li>
        <li>Avoid long-haul air travel until your risk of deep vein thrombosis (DVT) has been discussed with Dr Myhill</li>
      </ul>

      <h2>Exercise sheets</h2>
      <p>
        Procedure-specific post-operative exercise sheets on Dr Myhill's letterhead are available to download. These are provided for guidance only and should be used in conjunction with your physiotherapist's advice.
      </p>
      <p>
        <strong>[Downloadable exercise sheets will be linked here — available at launch]</strong>
      </p>

      <h2>Follow-up appointments</h2>
      <p>
        A post-operative appointment will be arranged before or shortly after your surgery. If you have not received follow-up details, please contact the practice.
      </p>

      <h2>When to seek urgent help</h2>
      <p>
        Go to the nearest emergency department or call 000 if you experience:
      </p>
      <ul>
        <li>Chest pain or difficulty breathing</li>
        <li>A calf that becomes suddenly painful, swollen or hot (possible DVT)</li>
        <li>Numbness or weakness below the operation site that was not present before surgery</li>
        <li>Signs of wound infection with fever</li>
        <li>A wound that opens or begins bleeding heavily</li>
      </ul>
    </PageLayout>
  );
}
