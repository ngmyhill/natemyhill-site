# AGENTS.md: rules for any AI session working on this repo

Read this file first. It is the operating contract for Claude and any other AI assistant. Nate Myhill is a surgeon, not a developer. He will ask for changes in plain words. Do the work safely, show him a preview, and only merge when he says so.

## What this is

Dr Nate Myhill's orthopaedic practice website. Next.js 16 (App Router), React 19, Tailwind CSS 4, TypeScript. Live at https://drnatemyhill.com.au.

Next 16 has breaking changes from older versions. Before touching metadata, headers, config, images or layout, read the relevant guide in `node_modules/next/dist/docs/`.

## How deploys work (read this twice)

- Pushing to `main` deploys to PRODUCTION automatically through Vercel. The public site changes within about a minute.
- Any other branch gets a private preview at `https://natemyhill-git-<branch>-ngmyhill-9985s-projects.vercel.app`. Previews are marked noindex.
- Rule: always work on a new branch, push it, give Nate the preview link, and merge to `main` only after he has looked and said so.
- Never push straight to `main`. Never force-push.
- Never merge a change that makes clinical or advertising wording different without Nate's own OK (see the hard rules).

## Commands

```
npm install        # first time only
npm run dev        # local site at http://localhost:3000
npm run build      # must pass before anything is merged
npm run lint       # there are some old lint errors; do not add new ones
```

## Where things live

| What | Where |
|------|-------|
| Contact details, locations, helpers | `src/lib/data.ts` (`DOCTOR`, `LOCATIONS`, `NAV_ITEMS`, `hasRealValue()`, `SITE_URL`) |
| Placeholder convention | Any value written as `"[something]"` counts as "not real yet". `hasRealValue()` returns false for it and the site hides that item automatically. Replace the value with the real one and it appears. |
| Procedure pages | `src/app/<specialty>/<slug>/page.tsx` (`shoulder-upper-limb`, `hip-knee`, `trauma`) |
| Procedure page parts | `src/components/PageLayout.tsx` (takes an optional `glance` list for the "At a glance" box), `RisksSection.tsx`, `FAQSection.tsx`, `CTABox.tsx` |
| Referrer panel | `src/components/ReferrerPanel.tsx` (home page band and `/for-referrers`) |
| Headshots | `public/images/nate-myhill-navy.jpg` (home hero), `nate-myhill-light.jpg` (About and home). Share image: `public/og-image.jpg` |
| Hospital logos | `public/images/locations/<slug>.svg`, `.png` or `.webp`. The logo appears on the Locations pages automatically when the file exists. Slugs are in `LOCATIONS` (`wantirna`, `mitcham`, `heidelberg`, `coburg`, `albury`, `epping`, `footscray`). Only add logos Nate has permission to use. |
| Downloads (PDFs) | `public/downloads/`. File names are listed in `src/lib/downloads.ts`. A section appears on the referral resources and post-operative pages only when a listed file exists. |
| Sitemap, robots | `src/app/sitemap.ts`, `src/app/robots.ts` |
| Redirect and noindex | `next.config.ts` (permanent redirect from `natemyhill.vercel.app` to the domain, and a noindex header on every host except `drnatemyhill.com.au` and `www`) |
| Titles, canonicals, share cards | `SITE_URL` and `metadataBase` in `src/lib/data.ts` and `src/app/layout.tsx`; use `pageMetadata()` from `src/lib/seo.ts` on every page. Titles are short, because the layout adds " \| Dr Nate Myhill". |
| Styles, colours, type scale | `src/app/globals.css` (`@theme` tokens) |

New pages: add the route, use `pageMetadata()`, add the URL to `src/app/sitemap.ts`, and link it from the right hub page.

## HARD RULES (Ahpra advertising and clinical sign-off)

All current clinical wording was signed off by Nate and checked against Ahpra advertising rules. Keep it that way.

1. No testimonials or patient reviews, and no quotes that read like one.
2. No outcome or success claims. Examples to avoid: "reliably", "predictable", "faster recovery", "pain-free", "most patients will...".
3. No superlatives or comparisons: "leading", "best", "expert", "centre of excellence", "more experienced than".
4. Every procedure page keeps its "Risks and complications" section (`RisksSection`). Never remove risk information.
5. Recovery timings say "typically" and "recovery varies between people".
6. Do not use device or implant brand names in public copy. Say "knotless double-row repair", not a brand.
7. Credentials must match the Ahpra register exactly: MBBS, FRACS (Ortho), MPH, BSc. The Erasmus MC placement is an "IBRA Scholarship at Erasmus MC, Rotterdam". It is a scholarship, never a "fellowship". (FRACS means Fellow of the Royal Australasian College of Surgeons, which is correct.)
8. No speed promises for correspondence or appointments beyond "we reply within one business day".
9. Any new or changed clinical wording needs Nate's own clinical OK before it is merged. Ask him in plain words and wait for a yes.
10. Do not add before and after photos, outcome statistics or star ratings.

## Voice guide

Source: the copy review done for the 2026 refresh.

1. One idea per sentence. Use a full stop or comma, not a dash aside. Aim for very few em dashes on the whole site.
2. Say the shared decision-making idea once, on the About page. Elsewhere, show it with a concrete action such as "we go through the options".
3. Use the plainest heading that tells the patient what is below. "What to bring" works. Slogan headings do not.
4. "We" means the practice (booking, replies, how decisions are made). "Dr Myhill" or "he" is for credentials and clinical work. "You" for the patient everywhere else.
5. Say what happens, not how it feels. Cut "journey", "tailored", "every step", "opportunity to", "not X, but Y" lines and "never" lines. Vary sentence length.

"The plan that fits your life." is the brand tagline. It is the home page hero headline only. Do not repeat it elsewhere.

## Privacy and contact

- There is no booking form, no contact form and no analytics on the site. Do not add any without Nate's agreement and a privacy policy update.
- Collect no health information on the site. Do not ask visitors for medical details.
- Booking is by phone (03) 9416 1466 and email admin@drnatemyhill.com.au. Fax (03) 9419 3847 for referrals.
- Practice software is Xestro. It has no patient self-booking, so the site does not offer online booking. `DOCTOR.bookingUrl` stays a placeholder until that changes.
- The privacy policy (`src/app/privacy-policy/page.tsx`) must stay true. If a change affects what is collected, update it.

## Accessibility and design

Keep all of these:

- The "Skip to main content" link and a single `<main id="main-content">` per page (the layout provides it).
- Visible `:focus-visible` outlines.
- The AA contrast colours: dark teal `#0F7A59` for text and buttons on light surfaces, `#34B889` on navy, `#5F5E5A` for muted text. The original teal `#1D9E75` is for the logo mark and decorative borders only.
- The type scale tokens (`--text-display`, `--text-h1`, `--text-h2`, `--text-h3`, `--text-lead`, `--text-body`) instead of ad hoc font sizes.
- No horizontal overflow at any width from 320 to 1440px. Check after any layout change.
- Headings in order, and alt text on every image.
- The phone-first header (phone number, GP Referral and Book Appointment buttons) and the sticky mobile "Call | Book" bar.
- No text under 12px.

## Don'ts

- Never commit secrets, API keys or `.env` files.
- Never change DNS from code, and never touch email records.
- Do not add AI-generated anatomy images or illustrations. They are waiting for a human medical illustrator.
- Do not download or scrape hospital logos. Nate supplies them.
- Do not add new dependencies without a clear reason.
- Do not make the repository private without reading HANDOVER.md (Vercel Pro blocks deploys from authors who are not on the team).

## Before you say a change is done

1. `npm run build` passes.
2. Check the page on the preview URL at phone width and desktop width.
3. Re-read your wording against the hard rules above.
4. Tell Nate what changed in plain words, give the preview link, and wait for "merge it".
