import Image from "next/image";
import { locationLogo } from "@/lib/locations";

// Renders nothing until a logo file exists for the location.
export default function LocationLogo({ slug, name }: { slug: string; name: string }) {
  const logo = locationLogo(slug);
  if (!logo) return null;
  return (
    <Image
      src={logo.src}
      alt={`${name} logo`}
      width={200}
      height={64}
      unoptimized={logo.svg}
      style={{ height: "48px", width: "auto", maxWidth: "200px", objectFit: "contain", marginBottom: "0.75rem", display: "block" }}
    />
  );
}
