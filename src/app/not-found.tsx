import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="holding holding-single">
      <div className="holding-text">
        <h1>We can&apos;t find that page</h1>
        <p>
          <Link href="/">Go to the home page</Link> for contact details.
        </p>
      </div>
    </div>
  );
}
