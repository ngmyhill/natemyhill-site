import fs from "node:fs";
import path from "node:path";

const EXTENSIONS = ["svg", "png", "webp"] as const;

// A hospital logo is shown only if a file exists at public/images/locations/<slug>.(svg|png|webp).
// Nate supplies the files, so there is nothing to download or add in code.
export function locationLogo(slug: string): { src: string; svg: boolean } | null {
  for (const ext of EXTENSIONS) {
    if (fs.existsSync(path.join(process.cwd(), "public", "images", "locations", `${slug}.${ext}`))) {
      return { src: `/images/locations/${slug}.${ext}`, svg: ext === "svg" };
    }
  }
  return null;
}
