import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { LOCATIONS, LOCATION_SENTENCE_LIST } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = pageMetadata({
  title: "About Your Orthopaedic Surgeon",
  description: "Dr Nate Myhill is a specialist orthopaedic surgeon with FRACS(Ortho), an IBRA Scholarship at Erasmus MC Rotterdam, and membership of AOA and IBRA. Based in Melbourne.",
  path: "/about",
});

const credentials = [
  { abbr: "MBBS", full: "Bachelor of Medicine, Bachelor of Surgery" },
  { abbr: "FRACS (Ortho)", full: "Fellow of the Royal Australasian College of Surgeons (Orthopaedic Surgery)" },
  { abbr: "MPH", full: "Master of Public Health" },
  { abbr: "BSc", full: "Bachelor of Science" },
];

const memberships = [
  { abbr: "AOA", full: "Australian Orthopaedic Association" },
  { abbr: "IBRA", full: "International Bone Research Association" },
];

// Training, led by the scholarship. The old page gave no dates, so none are shown.
const training = [
  {
    title: "IBRA Scholarship, Erasmus MC, Rotterdam",
    body: "The scholarship focused on upper limb surgery, both elective and trauma, covering the shoulder, elbow and wrist.",
  },
  {
    title: "FRACS (Ortho)",
    body: "Specialist orthopaedic qualification.",
  },
  { title: "MBBS, MPH and BSc", body: "Degrees in medicine and surgery, public health, and science." },
];

const focus = [
  "Rotator cuff pathology and shoulder replacement (anatomic and reverse total shoulder)",
  "Shoulder instability: labral repair and Latarjet procedure",
  "Elbow conditions, including tennis elbow, the OK (Outerbridge-Kashiwagi) procedure, UCL reconstruction and cubital tunnel syndrome",
  "Wrist pathology: carpal tunnel syndrome and distal radius fractures",
  "Hip and knee reconstruction: total hip and knee replacement, ACL reconstruction and meniscal surgery",
  "Upper and lower limb trauma",
];

export default function AboutPage() {
  return (
    <PageLayout crumbs={[{ label: "Home", href: "/" }, { label: "About Dr Myhill" }]}>
      <div className="about-head">
        <div className="about-portrait">
          <Image
            src="/images/nate-myhill-light.jpg"
            alt="Dr Nate Myhill, orthopaedic surgeon"
            fill
            sizes="(max-width: 800px) 100vw, 300px"
            preload
            style={{ objectFit: "cover", objectPosition: "50% 22%" }}
          />
        </div>
        <div>
          <h1 style={{ marginTop: 0 }}>About Dr Nate Myhill</h1>
          {/* NATE TO APPROVE: first-person intro */}
          <p className="lead">
            I&apos;m a specialist orthopaedic surgeon practising across Melbourne and Albury. My work spans shoulder and upper limb surgery, hip and knee reconstruction, and trauma, with a particular focus on rotator cuff pathology and shoulder replacement. I completed an IBRA Scholarship at Erasmus MC in Rotterdam.
          </p>
          <p>
            I make treatment decisions together with my patients. I take time to explain your condition and go through the realistic options, including non-surgical ones, and together we settle on a plan that suits your goals and the way you live.
          </p>
        </div>
      </div>

      <dl className="cred-strip" aria-label="Qualifications and memberships">
        {credentials.map((c) => (
          <div key={c.abbr}>
            <dt>{c.abbr}</dt>
            <dd>{c.full}</dd>
          </div>
        ))}
        {memberships.map((m) => (
          <div key={m.abbr}>
            <dt>{m.abbr}</dt>
            <dd>{m.full}</dd>
          </div>
        ))}
      </dl>

      <h2>Training</h2>
      <ol className="timeline">
        {training.map((t) => (
          <li key={t.title}>
            <h3>{t.title}</h3>
            <p>{t.body}</p>
          </li>
        ))}
      </ol>

      <h2>Clinical focus</h2>
      <p>While Dr Myhill practises broadly across orthopaedics, his primary clinical interests include:</p>
      <ul>
        {focus.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      <h2>Where Dr Myhill consults</h2>
      <p>
        Dr Myhill consults and operates at {LOCATION_SENTENCE_LIST}. <Link href="/locations">See all {LOCATIONS.length} locations</Link>.
      </p>
    </PageLayout>
  );
}
