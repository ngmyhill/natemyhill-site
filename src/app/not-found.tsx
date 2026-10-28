import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <PageLayout showCTA={false}>
      <h1>We can&apos;t find that page</h1>
      <p>
        The page may have moved, or the address may have been typed a little differently. These links should get you back on track.
      </p>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
        <Link href="/" style={{ background: "#0f7a59", color: "#ffffff", padding: "0.6rem 1.25rem", borderRadius: "4px", fontWeight: 500, fontSize: "14px", textDecoration: "none" }}>
          Back to home
        </Link>
        <Link href="/appointments" style={{ border: "1px solid #1a2744", color: "#1a2744", padding: "0.6rem 1.25rem", borderRadius: "4px", fontWeight: 500, fontSize: "14px", textDecoration: "none" }}>
          Book an appointment
        </Link>
      </div>
    </PageLayout>
  );
}
