export const DOCTOR = {
  name: "Dr Nate Myhill",
  credentials: "MBBS · FRACS(Ortho) · MPH · BSc",
  specialty: "Orthopaedic Surgeon",
  phone: "(03) 9416 1466", // display form
  phoneTel: "+61394161466", // for tel: links
  phoneSchema: "+61 3 9416 1466", // for JSON-LD
  fax: "(03) 9419 3847",
  faxSchema: "+61 3 9419 3847", // for JSON-LD
  email: "admin@drnatemyhill.com.au",
  healthlinkId: "[HealthLink Provider ID]",
  medicalObjectsId: "[Medical Objects ID]",
  bookingUrl: "[online booking URL]", // leave as a [placeholder] until online booking exists; the site then shows phone and email only
  domain: "drnatemyhill.com.au",
};

// True when a field holds a real value rather than a "[placeholder]" (anywhere in the text).
export function hasRealValue(value: string): boolean {
  const v = value.trim();
  return v !== "" && !/\[[^\]]*\]/.test(v);
}

// Single source of truth for the public site address. Derived from DOCTOR.domain.
export const SITE_URL = `https://${DOCTOR.domain}`;

export const LOCATIONS = [
  {
    slug: "wantirna",
    name: "Knox Private Hospital",
    suburb: "Wantirna",
    state: "VIC",
    address: "[Address], Wantirna VIC [postcode]",
    phone: "[hospital phone]",
    type: "Private hospital",
    mapUrl: "https://maps.google.com/?q=Knox+Private+Hospital+Wantirna",
    services: ["Shoulder & upper limb surgery", "Hip & knee replacement", "ACL reconstruction & knee arthroscopy", "Trauma surgery"],
  },
  {
    slug: "mitcham",
    name: "Mitcham Private Hospital",
    suburb: "Mitcham",
    state: "VIC",
    address: "[Address], Mitcham VIC [postcode]",
    phone: "[hospital phone]",
    type: "Private hospital",
    mapUrl: "https://maps.google.com/?q=Mitcham+Private+Hospital",
    services: ["Shoulder & upper limb surgery", "Hip & knee replacement", "ACL reconstruction & knee arthroscopy", "Trauma surgery"],
  },
  {
    slug: "heidelberg",
    name: "Warringal Private Hospital",
    suburb: "Heidelberg",
    state: "VIC",
    address: "[Address], Heidelberg VIC [postcode]",
    phone: "[hospital phone]",
    type: "Private hospital",
    mapUrl: "https://maps.google.com/?q=Warringal+Private+Hospital+Heidelberg",
    services: ["Shoulder & upper limb surgery", "Hip & knee replacement", "ACL reconstruction & knee arthroscopy", "Trauma surgery"],
  },
  {
    slug: "coburg",
    name: "John Fawkner Private Hospital",
    suburb: "Coburg",
    state: "VIC",
    address: "[Address] Moreland Road, Coburg VIC [postcode]",
    phone: "[hospital phone]",
    type: "Private hospital",
    mapUrl: "https://maps.google.com/?q=John+Fawkner+Private+Hospital+Coburg",
    services: ["Shoulder & upper limb surgery", "Hip & knee replacement", "Trauma surgery"],
  },
  {
    slug: "albury",
    name: "The Gardens Specialist Centre",
    suburb: "Albury",
    state: "NSW",
    address: "[Address], Albury NSW [postcode]",
    phone: "[centre phone]",
    type: "Consulting rooms",
    mapUrl: "https://maps.google.com/?q=The+Gardens+Specialist+Centre+Albury",
    services: ["Orthopaedic consultations", "Shoulder & upper limb", "Hip & knee"],
  },
  {
    slug: "epping",
    name: "Northern Health",
    suburb: "Epping",
    state: "VIC",
    address: "[Address], Epping VIC [postcode]",
    phone: "[hospital phone]",
    type: "Public hospital",
    mapUrl: "https://maps.google.com/?q=Northern+Health+Epping",
    services: ["Orthopaedic surgery (public patients)", "Trauma surgery", "Hip & knee"],
  },
  {
    slug: "footscray",
    name: "Western Health",
    suburb: "Footscray",
    state: "VIC",
    address: "[Address], Footscray VIC [postcode]",
    phone: "[hospital phone]",
    type: "Public hospital",
    mapUrl: "https://maps.google.com/?q=Western+Health+Footscray",
    services: ["Orthopaedic surgery (public patients)", "Trauma surgery", "Hip & knee"],
  },
];

type Location = (typeof LOCATIONS)[number];

// Albury is in NSW. Every other location is in metropolitan Melbourne.
export function regionOf(loc: Location): "Melbourne" | "Albury" {
  return loc.state === "NSW" ? "Albury" : "Melbourne";
}

export function joinList(items: string[]): string {
  if (items.length <= 1) return items.join("");
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}

// "Knox Private Hospital (Wantirna)"; the suburb is dropped when the name already contains it.
export function locationLabel(loc: Location): string {
  return loc.name.includes(loc.suburb) ? loc.name : `${loc.name} (${loc.suburb})`;
}

// Single place the location list comes from, so every page agrees.
export const LOCATION_SENTENCE_LIST = joinList(LOCATIONS.map(locationLabel));
export const LOCATION_COUNT_WORD = ["no", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"][LOCATIONS.length];

// What a referral should include. Used on the referrer pages and the home page panel.
export const REFERRAL_INCLUDES = [
  "Patient's full name, date of birth and contact details",
  "Presenting complaint and history",
  "Relevant examination findings",
  "Imaging results and reports (X-ray, MRI, CT)",
  "Current medications and relevant past medical and surgical history",
  "Relevant allied health reports",
  "Urgency: routine, semi-urgent or urgent",
  "WorkCover or TAC details, if applicable",
  "Health fund details (if known)",
];

export const NAV_ITEMS = [
  { label: "About", href: "/about" },
  {
    label: "Shoulder & Upper Limb",
    href: "/shoulder-upper-limb",
    children: [
      { label: "Rotator Cuff Repair", href: "/shoulder-upper-limb/rotator-cuff-repair" },
      { label: "Shoulder Replacement", href: "/shoulder-upper-limb/shoulder-replacement" },
      { label: "Shoulder Instability", href: "/shoulder-upper-limb/shoulder-instability" },
      { label: "AC Joint Surgery", href: "/shoulder-upper-limb/ac-joint-surgery" },
      { label: "Biceps Tendon Surgery", href: "/shoulder-upper-limb/biceps-tendon-surgery" },
      { label: "Tennis Elbow", href: "/shoulder-upper-limb/tennis-elbow" },
      { label: "OK Procedure (Elbow)", href: "/shoulder-upper-limb/ok-procedure" },
      { label: "UCL Reconstruction", href: "/shoulder-upper-limb/ucl-reconstruction" },
      { label: "Cubital Tunnel Syndrome", href: "/shoulder-upper-limb/cubital-tunnel-syndrome" },
      { label: "Carpal Tunnel Syndrome", href: "/shoulder-upper-limb/carpal-tunnel-syndrome" },
      { label: "Wrist Fractures", href: "/shoulder-upper-limb/wrist-fractures" },
    ],
  },
  {
    label: "Hip & Knee",
    href: "/hip-knee",
    children: [
      { label: "Total Hip Replacement", href: "/hip-knee/total-hip-replacement" },
      { label: "Total Knee Replacement", href: "/hip-knee/total-knee-replacement" },
      { label: "ACL Reconstruction", href: "/hip-knee/acl-reconstruction" },
      { label: "Meniscal Repair", href: "/hip-knee/meniscal-repair" },
      { label: "Knee Arthroscopy", href: "/hip-knee/knee-arthroscopy" },
      { label: "Hip Fracture & Trauma", href: "/hip-knee/hip-trauma" },
    ],
  },
  { label: "Trauma", href: "/trauma" },
  {
    label: "For Patients",
    href: "/for-patients",
    children: [
      { label: "Your First Appointment", href: "/for-patients/first-appointment" },
      { label: "Fees & Billing", href: "/for-patients/fees-and-billing" },
      { label: "Pre-operative Information", href: "/for-patients/pre-operative-information" },
      { label: "Post-operative Information", href: "/for-patients/post-operative-information" },
    ],
  },
  {
    label: "For Referrers",
    href: "/for-referrers",
    children: [
      { label: "How to Refer", href: "/for-referrers/how-to-refer" },
      { label: "Referral Resources", href: "/for-referrers/referral-resources" },
    ],
  },
  { label: "Locations", href: "/locations" },
  { label: "Appointments", href: "/appointments" },
];
