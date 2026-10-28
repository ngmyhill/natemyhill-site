import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = pageMetadata({
  title: "Orthopaedic Trauma Surgery Melbourne",
  description: "Upper and lower limb trauma surgery accepted from GPs, physiotherapists and emergency departments. Specialist orthopaedic surgeon Dr Nate Myhill, Melbourne.",
  path: "/trauma",
});

export default function TraumaPage() {
  return (
    <PageLayout crumbs={[{ label: "Home", href: "/" }, { label: "Trauma" }]} ctaReferrer>
      <h1>Orthopaedic trauma</h1>
      <p>
        Dr Myhill actively manages both upper and lower limb trauma as part of his orthopaedic practice. Referrals are accepted from GPs, physiotherapists and emergency departments, and long-term follow-up is provided.
      </p>
      <p>
        While trauma is not the primary marketing focus of the practice, it is an area Dr Myhill engages with actively and takes seriously — both in the acute phase and in the longer-term management of injuries.
      </p>

      <h2>Upper limb trauma</h2>
      <p>
        Dr Myhill manages a range of upper limb injuries, including:
      </p>
      <ul>
        <li>Shoulder fractures — proximal humeral fractures</li>
        <li>Clavicle fractures</li>
        <li>Distal radius fractures (broken wrist) — see <Link href="/shoulder-upper-limb/wrist-fractures">wrist fractures</Link></li>
        <li>Scaphoid fractures</li>
        <li>Elbow fractures and dislocations</li>
        <li>Soft tissue injuries — rotator cuff tears, ligament injuries</li>
      </ul>
      <p>
        <Link href="/trauma/upper-limb">Upper limb trauma — more detail →</Link>
      </p>

      <h2>Lower limb trauma</h2>
      <p>
        Lower limb trauma managed by Dr Myhill includes:
      </p>
      <ul>
        <li>Hip fractures — see <Link href="/hip-knee/hip-trauma">hip fracture page</Link></li>
        <li>Femoral fractures</li>
        <li>Tibial fractures</li>
        <li>Periarticular knee fractures</li>
        <li>Ankle fractures</li>
      </ul>
      <p>
        <Link href="/trauma/lower-limb">Lower limb trauma — more detail →</Link>
      </p>

      <h2>Referring for trauma</h2>
      <p>
        Urgent trauma referrals may be directed to the practice by phone. Dr Myhill aims to provide prompt assessment and is committed to long-term follow-up for trauma patients.
      </p>
      <p>
        <Link href="/for-referrers/how-to-refer">How to refer a trauma patient →</Link>
      </p>
    </PageLayout>
  );
}
