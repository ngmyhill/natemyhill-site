import fs from "node:fs";
import path from "node:path";

export const DOWNLOADS_DIR = "downloads";

export interface Resource { label: string; file?: string }

// Add a PDF to public/downloads and set its file name here: the item, and its section, then appear.
export const patientSheets: Resource[] = [
  { label: "Rotator Cuff Repair: Patient Information", file: "patient-info-rotator-cuff.pdf" },
  { label: "Shoulder Replacement: Patient Information", file: "patient-info-shoulder-replacement.pdf" },
  { label: "Shoulder Instability: Patient Information", file: "patient-info-shoulder-instability.pdf" },
  { label: "Total Hip Replacement: Patient Information", file: "patient-info-hip-replacement.pdf" },
  { label: "Total Knee Replacement: Patient Information", file: "patient-info-knee-replacement.pdf" },
  { label: "ACL Reconstruction: Patient Information", file: "patient-info-acl.pdf" },
  { label: "Carpal Tunnel Syndrome: Patient Information", file: "patient-info-carpal-tunnel.pdf" },
  { label: "Wrist Fractures: Patient Information", file: "patient-info-wrist-fractures.pdf" },
];

export const exerciseSheets: Resource[] = [
  { label: "Rotator Cuff Repair: Post-operative Exercises", file: "exercises-rotator-cuff.pdf" },
  { label: "Shoulder Replacement: Post-operative Exercises", file: "exercises-shoulder-replacement.pdf" },
  { label: "Total Hip Replacement: Post-operative Exercises", file: "exercises-hip-replacement.pdf" },
  { label: "Total Knee Replacement: Post-operative Exercises", file: "exercises-knee-replacement.pdf" },
  { label: "ACL Reconstruction: Post-operative Exercises", file: "exercises-acl.pdf" },
];

// Only items whose PDF really exists in public/downloads
export function available(items: Resource[]) {
  return items.filter((i) => i.file && fs.existsSync(path.join(process.cwd(), "public", DOWNLOADS_DIR, i.file)));
}

