import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import { DOCTOR } from "@/lib/data";

// Temporary single-page site. The full site is kept on the `full-site-backup`
// branch and the `full-site-2026-10-30` tag (see HANDOVER.md).
export const metadata: Metadata = pageMetadata({
  description: `Dr Nate Myhill, Orthopaedic Surgeon. Phone ${DOCTOR.phone} or email ${DOCTOR.email}.`,
  path: "/",
});

export default function HomePage() {
  return (
    <div className="holding">
      <div className="holding-photo">
        <Image
          src="/images/nate-myhill-navy.jpg"
          alt="Dr Nate Myhill"
          width={1068}
          height={1600}
          priority
          sizes="(max-width: 760px) 220px, 340px"
        />
      </div>
      <div className="holding-text">
        <h1>Dr Nate Myhill</h1>
        <p className="holding-role">Orthopaedic Surgeon</p>
        <dl className="holding-contact">
          <div>
            <dt>Phone</dt>
            <dd><a href={`tel:${DOCTOR.phoneTel}`}>{DOCTOR.phone}</a></dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd><a href={`mailto:${DOCTOR.email}`}>{DOCTOR.email}</a></dd>
          </div>
          <div>
            <dt>Fax</dt>
            <dd>{DOCTOR.fax}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
