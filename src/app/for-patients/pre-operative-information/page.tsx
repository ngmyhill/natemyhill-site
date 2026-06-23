import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Pre-operative Information — Dr Nate Myhill",
  description: "How to prepare for surgery with Dr Nate Myhill. Fasting guidelines, medications, what to arrange at home.",
};

export default function PreOperativePage() {
  return (
    <PageLayout crumbs={[{ label: "Home", href: "/" }, { label: "For Patients", href: "/for-patients" }, { label: "Pre-operative Information" }]}>
      <h1>Pre-operative information</h1>
      <p>
        This page provides general guidance on preparing for surgery. You will also receive procedure-specific information from Dr Myhill's rooms and the hospital prior to your operation. Always follow any instructions you receive from the hospital or anaesthetist.
      </p>

      <h2>Fasting</h2>
      <p>
        You must not eat or drink (except for small sips of water with any essential medications, as specifically instructed) for at least 6 hours before your surgery. Clear fluids may be permitted up to 2 hours before your procedure — the hospital will provide specific instructions.
      </p>
      <p>
        <strong>Do not eat or drink if you are unsure.</strong> Eating or drinking before anaesthesia is a serious risk. If in doubt, contact the hospital.
      </p>

      <h2>Medications</h2>
      <p>
        Please bring a list of all your current medications to your pre-operative assessment appointment. The following general guidance applies — however, always follow specific instructions given to you:
      </p>
      <ul>
        <li><strong>Blood thinners</strong> (warfarin, rivaroxaban, apixaban, clopidogrel, aspirin) — you will usually be advised to stop these before surgery. Do not stop without specific guidance.</li>
        <li><strong>Diabetes medications</strong> (including insulin) — specific adjustments are needed. The anaesthetist will advise.</li>
        <li><strong>Most regular medications</strong> — such as blood pressure tablets — can usually be taken on the morning of surgery with a small sip of water. Confirm with the hospital.</li>
        <li><strong>Herbal supplements and fish oil</strong> — some may affect bleeding. Discuss with Dr Myhill or the anaesthetist.</li>
      </ul>

      <h2>Preparing your home</h2>
      <p>
        Before your operation, consider:
      </p>
      <ul>
        <li>Arranging for a responsible adult to take you home and stay with you on the night of surgery (if a day procedure)</li>
        <li>Setting up your home for easy access — removing trip hazards, raising a low chair if having hip or knee surgery</li>
        <li>Preparing meals in advance or arranging for assistance</li>
        <li>Ensuring you have a comfortable sleeping arrangement with easy access</li>
        <li>Having a shower or bath the evening before and morning of surgery using the wash they provide (usually chlorhexidine)</li>
      </ul>

      <h2>What to bring to hospital</h2>
      <ul>
        <li>Medicare card and health fund card</li>
        <li>A list of current medications</li>
        <li>Comfortable loose-fitting clothing (for after surgery)</li>
        <li>Any aids (crutches, sling) provided in advance</li>
        <li>Your pre-admission paperwork, completed</li>
      </ul>

      <h2>Smoking and alcohol</h2>
      <p>
        Smoking significantly impairs wound healing and increases anaesthetic risk. Wherever possible, stopping smoking before surgery is strongly recommended. Avoid excessive alcohol in the days before your procedure.
      </p>

      <h2>Questions?</h2>
      <p>
        If you have any concerns before your operation, contact the practice or the hospital directly. Do not hesitate to call — no question is too small.
      </p>
    </PageLayout>
  );
}
