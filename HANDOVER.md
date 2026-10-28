# Dr Nate Myhill — Site Handover Document
**Last updated:** October 2026  
**Project:** drnatemyhill.com.au — orthopaedic surgeon website  
**Status:** Built, deployed to Vercel, brand applied. Awaiting real contact data + domain connection.

---

## Quick summary

A 47-page Next.js website for Dr Nate Myhill, orthopaedic surgeon, Melbourne. Built from scratch across 8 phases. The site is live at **https://natemyhill.vercel.app** — the production alias pending domain connection.

---

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16.2.9 — App Router (`src/app/`) |
| React | 19.2.4 — Server Components by default |
| Language | TypeScript |
| Styling | Tailwind CSS 4 (breaking change from v3 — see below) |
| Fonts | EB Garamond (headings) + Inter (body) via `next/font/google` |
| Deployment | Vercel (free tier) |
| Node | 20.20.2 via nvm |

### Tailwind CSS 4 — critical differences from v3
- Config is **not** in `tailwind.config.ts` — it's in `src/app/globals.css` inside `@theme inline {}`
- Import is `@import "tailwindcss"` — NOT `@tailwind base/components/utilities`
- PostCSS plugin: `@tailwindcss/postcss` in `postcss.config.mjs`

### Always prefix terminal commands with:
```bash
export NVM_DIR="$HOME/.nvm" && \. "$NVM_DIR/nvm.sh" && ...
```

---

## Project root
```
/Users/nate/natemyhill/
```

## Key files

| File | What it does |
|------|-------------|
| `src/lib/data.ts` | Central data — DOCTOR, LOCATIONS, NAV_ITEMS. **All `[placeholder]` values need filling.** |
| `src/app/layout.tsx` | Root layout — fonts, metadata, Navigation, Footer, Physician JSON-LD |
| `src/app/globals.css` | Tailwind 4 import + brand colours in `@theme inline` |
| `src/components/Navigation.tsx` | `"use client"` — two-tier nav with dropdown + mobile hamburger + SVG logo mark |
| `src/components/Footer.tsx` | 4-column footer in navy + SVG logo mark |
| `src/components/PageLayout.tsx` | Shared wrapper — breadcrumbs, prose article, optional aside, CTA |
| `src/components/CTABox.tsx` | Book appointment or Refer a patient CTA block |
| `src/components/FAQSection.tsx` | `"use client"` — accordion FAQ component |
| `src/components/Breadcrumb.tsx` | Breadcrumb nav |
| `src/app/sitemap.ts` | Auto-generated XML sitemap |
| `src/app/robots.ts` | robots.txt |
| `src/app/locations/[slug]/page.tsx` | Dynamic location pages |
| `public/logo-mark.svg` | SVG arc mark (teal arc + navy point) — for light backgrounds |
| `public/logo-mark-reversed.svg` | Same mark with off-white point — for dark backgrounds |
| `public/favicon.svg` | SVG favicon — navy square with arc mark |
| `brand_assets/` | Extracted brand guide HTML from "Melbourne Upper Limb Logo Design.zip" |

---

## Brand identity

**Practice name:** Dr Nate Myhill — Orthopaedic Surgeon  
**Tagline:** "The plan that fits your life."  
**Descriptor:** General Orthopaedics · Special interest: shoulder & upper limb  

### The logo mark
An open arc (teal) with a leading point (navy on light, off-white on dark). SVG:
```svg
<svg viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="34" fill="none" stroke="#1d9e75" stroke-width="8"
    stroke-linecap="round" stroke-dasharray="148.3 65.3" transform="rotate(100 50 50)"/>
  <circle cx="83.5" cy="44.1" r="7" fill="#1a2744"/>
</svg>
```

### Colour palette

| Token | Hex | Use |
|-------|-----|-----|
| Navy | `#1A2744` | Primary, backgrounds, headings |
| Teal | `#1D9E75` | Accent, CTAs, borders |
| Slate | `#5F5E5A` | Body text |
| Warm Grey | `#D3D1C7` | Borders, dividers |
| Off-white | `#F8F8F6` | Page backgrounds |
| Muted | `#888780` | Secondary text |

### Typography
- **EB Garamond** — display, names, pull quotes. Humanist serif, warmth + authority.
- **Inter** — body, labels, UI. Clear at small sizes.

### Three brand pillars
1. **We decide together** — Shared decision-making is the practice, not a slogan.
2. **We get you moving** — One surgeon for the whole limb; surgery serves getting back to life.
3. **We say it straight** — Plain English, every time. AHPRA-compliant by design.

### Voice
Warm, but never chummy. Plain, but never dumbed-down. Certain, but never superior.  
No hype, no superlatives, no comparative claims (AHPRA rules).

---

## All 47 pages

### Static pages
| URL | Purpose |
|-----|---------|
| `/` | Homepage — hero, brand pillars, specialties, about strip, locations, referrer CTA |
| `/about` | Dr Myhill bio, credentials, fellowship, approach |
| `/appointments` | How to book, Gentu portal link, what to bring |
| `/locations` | All 7 locations overview |
| `/locations/[slug]` | Individual location pages (7 dynamic pages) |
| `/privacy-policy` | Privacy Act 1988 compliant policy |

### Shoulder & Upper Limb (`/shoulder-upper-limb`)
- `/shoulder-upper-limb` — Hub page
- `/shoulder-upper-limb/rotator-cuff-repair`
- `/shoulder-upper-limb/shoulder-replacement`
- `/shoulder-upper-limb/shoulder-instability`
- `/shoulder-upper-limb/ac-joint-surgery`
- `/shoulder-upper-limb/biceps-tendon-surgery`
- `/shoulder-upper-limb/tennis-elbow`
- `/shoulder-upper-limb/ok-procedure` (OK Procedure — WALANT tenolysis)
- `/shoulder-upper-limb/ucl-reconstruction`
- `/shoulder-upper-limb/cubital-tunnel-syndrome`
- `/shoulder-upper-limb/carpal-tunnel-syndrome`
- `/shoulder-upper-limb/wrist-fractures`

### Hip & Knee (`/hip-knee`)
- `/hip-knee` — Hub page
- `/hip-knee/total-hip-replacement`
- `/hip-knee/total-knee-replacement`
- `/hip-knee/acl-reconstruction`
- `/hip-knee/meniscal-repair`
- `/hip-knee/knee-arthroscopy`
- `/hip-knee/hip-trauma`

### Trauma (`/trauma`)
- `/trauma` — Hub page
- `/trauma/upper-limb`
- `/trauma/lower-limb`

### For Patients (`/for-patients`)
- `/for-patients` — Hub page
- `/for-patients/first-appointment`
- `/for-patients/fees-and-billing`
- `/for-patients/pre-operative-information`
- `/for-patients/post-operative-information`

### For Referrers (`/for-referrers`)
- `/for-referrers` — Hub page
- `/for-referrers/how-to-refer`
- `/for-referrers/referral-resources`

### Technical
- `/sitemap.xml` — Auto-generated
- `/robots.txt` — Auto-generated

### Location slugs
`wantirna` · `mitcham` · `heidelberg` · `warringal` · `john-fawkner` · `albury` · one more (check `src/lib/data.ts`)

---

## Placeholders still to fill in `src/lib/data.ts`

Open `/Users/nate/natemyhill/src/lib/data.ts` and replace every `[…]` value:

```ts
export const DOCTOR = {
  phone: "[phone number]",          // e.g. "(03) 1234 5678"
  fax: "[fax number]",
  email: "[practice email]",        // e.g. "admin@drnatemyhill.com.au"
  healthlinkId: "[HealthLink Provider ID]",
  gentuUrl: "[Gentu portal URL]",   // the patient booking portal URL
  domain: "drnatemyhill.com.au",    // already set
};
```

For each location in `LOCATIONS`, fill:
- `address` — street address
- `postcode`
- Any missing fields

---

## Assets still needed

| Asset | Where to put it | Notes |
|-------|----------------|-------|
| Headshot | `public/headshot.jpg` | Used on About page and homepage hero |
| Referral template PDF | `public/downloads/referral-template.pdf` | Linked from For Referrers pages |
| Exercise sheets (PDF) | `public/downloads/` | Post-op patient resources |

---

## Domain setup

**Target domain:** `drnatemyhill.com.au`  
Also register `natemyhill.com.au` and redirect it here.

To connect the domain after registering it:
1. Go to [vercel.com/ngmyhill-9985s-projects/natemyhill](https://vercel.com/ngmyhill-9985s-projects/natemyhill)
2. Settings → Domains → Add `drnatemyhill.com.au`
3. Vercel provides DNS records → add them at your registrar (VentraIP / CrazyDomains / Netfleet — `.com.au` needs ABN)

---

## Vercel deployment

**Account:** `ngmyhill-9985` (logged in via `vercel whoami`)  
**Project:** `ngmyhill-9985s-projects/natemyhill`  
**Production URL:** https://natemyhill.vercel.app  
**Dashboard:** https://vercel.com/ngmyhill-9985s-projects/natemyhill

To redeploy after any changes:
```bash
export NVM_DIR="$HOME/.nvm" && \. "$NVM_DIR/nvm.sh"
cd /Users/nate/natemyhill
vercel --yes --prod
```

---

## Git history

```
3e21dfb  Apply Melbourne Upper Limb brand guide to site
c8aa578  Update domain to drnatemyhill.com.au across all files
f7e2181  Initial site build — 47 pages, Phase 6
d4a9d25  Initial commit from Create Next App
```

---

## SEO & structured data

- **Physician JSON-LD** in root layout (no Review/AggregateRating — AHPRA compliance)
- Each page has unique `title` and `description` via `export const metadata`
- Title template: `"%s | Dr Nate Myhill — Orthopaedic Surgeon"`
- `metadataBase`: `https://drnatemyhill.com.au`
- Sitemap covers all 47 pages + location slugs
- No comparative claims anywhere (AHPRA advertising rules)

---

## AHPRA advertising rules (critical)

The site is designed to be compliant. Keep these in mind for any new content:
- ❌ No testimonials or patient reviews
- ❌ No "leading", "best", "world-class", "excellent outcomes" or similar superlatives
- ❌ No before/after photos without strict conditions
- ❌ No comparative claims ("more experienced than…")
- ✅ Factual credentials, fellowship details, scope of practice
- ✅ Plain descriptions of procedures and what to expect
- ✅ Shared decision-making language

**Have the finished site reviewed by your indemnity insurer or a health law adviser before publicising.**

---

## Phase status

| Phase | Name | Status |
|-------|------|--------|
| 0 | Discovery & Goals | ✅ Complete |
| 1 | Brand Identity | ✅ Complete |
| 2 | Visual Identity | ✅ Complete |
| 3 | Site Architecture (42 pages) | ✅ Complete |
| 4 | Content Strategy | ✅ Complete |
| 5 | SEO & Technical Strategy | ✅ Complete |
| 6 | Build & Deploy to Vercel | ✅ Complete |
| 7 | Handover & Launch Checklist | ⏳ Pending |

---

## Immediate to-do before launch

1. **Fill placeholders** in `src/lib/data.ts` — phone, fax, email, HealthLink ID, Gentu URL, all location addresses
2. **Add headshot** — `public/headshot.jpg` and wire into About page + homepage
3. **Register domain** — `drnatemyhill.com.au` (and `natemyhill.com.au` as redirect)
4. **Connect domain** in Vercel Dashboard
5. **Add PDF downloads** — referral template + exercise sheets → `public/downloads/`
6. **Legal review** — indemnity insurer or health law adviser before publicising
7. **Phase 7** — Formal handover doc and launch checklist

---

## How to continue in a new Claude session

Start the session from the project directory:
```
/Users/nate/natemyhill
```

Say: *"Continue building the Dr Nate Myhill website. Read HANDOVER.md for full context."*

Claude will have everything it needs to continue without re-explaining the project.
