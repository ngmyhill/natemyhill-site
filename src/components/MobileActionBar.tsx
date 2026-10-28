import Link from "next/link";
import { DOCTOR } from "@/lib/data";
import PhoneIcon from "./PhoneIcon";

// Sticky Call | Book bar. Shown only at the hamburger breakpoint and below (see globals.css).
export default function MobileActionBar() {
  return (
    <nav className="mobile-bar" aria-label="Quick contact">
      <a href={`tel:${DOCTOR.phoneTel}`} className="mobile-bar-call" aria-label={`Call the practice on ${DOCTOR.phone}`}>
        <PhoneIcon size={18} /> Call
      </a>
      <Link href="/appointments" className="mobile-bar-book">
        Book
      </Link>
    </nav>
  );
}
