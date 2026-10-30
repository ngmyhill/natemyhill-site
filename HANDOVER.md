# Dr Nate Myhill website: handover

**Last updated:** October 2026
**Live site:** https://drnatemyhill.com.au
**Repo:** https://github.com/ngmyhill/natemyhill-site

The top half of this file is for Nate and needs no technical knowledge. The bottom half is for whoever (or whatever) works on the code next. AI assistants must also follow `AGENTS.md`.

---

> **Temporary single-page site (from 30 Oct 2026).** The site is cut back to one page: photo, name, "Orthopaedic Surgeon", phone, email and fax, plus the privacy policy. Old page addresses redirect to the home page (temporary 307 redirects in `next.config.ts`). The full site is saved on the `full-site-backup` branch and the `full-site-2026-10-30` tag. To bring it back, branch from `full-site-backup`, merge in anything new from `main` that should stay, preview it, and merge on Nate's say-so.

## The five things to know

1. The site is live. Anything merged into the `main` branch goes live on its own, about a minute later.
2. Every change is made on a separate branch first. You get a private preview link, check it on your phone, and only then say "merge it".
3. Claude handles the code. You decide whether the words and the look are right.
4. Wording about treatments, results and credentials is regulated (Ahpra). Claude has a rulebook for this in `AGENTS.md`, and nothing clinical should go live without your own OK.
5. Never touch the email DNS records (see the DNS section). They keep your email working.

---

## Current state

- Live at https://drnatemyhill.com.au since launch. The old address natemyhill.vercel.app redirects to it.
- Launch work done: security update, Ahpra advertising wording pass, a "Risks and complications" section on all 19 procedure pages, correct page titles and canonical links, accessibility fixes (skip link, focus outlines, contrast), the phone-first header with a sticky Call | Book bar on phones, your two headshots, and a share image for links sent in messages.
- Design refresh done: new home page, a first-person About page with a training timeline, an "At a glance" box on eight procedure pages, a compact referral panel for GPs, locations grouped by region.
- Contact: phone (03) 9416 1466, fax (03) 9419 3847, email admin@drnatemyhill.com.au. Booking is by phone or email, because Xestro (the practice software) has no patient self-booking.
- There is no booking form and no analytics on the site. The privacy policy says so. No health information is collected.

### Open items

| Item | Who | Notes |
|------|-----|-------|
| Your feedback on the live site | Nate | Anything that reads wrong, looks wrong or is missing |
| Hospital logos | Nate | Put files at `public/images/locations/<slug>.svg`, `.png` or `.webp`. They appear on the Locations pages by themselves. Only use logos you have permission for. |
| HealthLink ID and Medical Objects ID | Nate | Set `healthlinkId` and `medicalObjectsId` in `src/lib/data.ts`. They show on the referrer pages once real. |
| PDFs: patient information sheets and exercise sheets | Nate | Drop files in `public/downloads/` using the names in `src/lib/downloads.ts`. The sections appear when the files exist. |
| Anatomy illustrations | Waiting | Needs a human medical illustrator. No AI-generated anatomy images. |
| Recovery timelines for each procedure | Nate | Drawn for all 19 procedures as images and sent to you for approval. Not on the site yet. Each uses only timings already on that page. |
| Hip replacement FAQ line "many patients begin walking on the day of surgery" | Nate | Your call: keep, soften or remove. |
| First-person intro on the About page | Nate | Marked `NATE TO APPROVE` in the code. Confirm or change the words. |
| Online booking | Later | If Xestro ever offers it, set `bookingUrl` in `src/lib/data.ts` and a "Book online" link appears. |

---

## How Nate makes a change with Claude

1. **Install the Claude desktop app** (claude.com/download) and sign in. Use the **Code** section.
2. **Get the project onto your computer.** Easiest: install GitHub Desktop, choose File, Clone repository, and pick `ngmyhill/natemyhill-site`. Or tell Claude: "Clone https://github.com/ngmyhill/natemyhill-site into my Documents folder."
3. **Open the `natemyhill-site` folder** in Claude Code. The first time, Claude may need to install a few things and may ask you to sign in to GitHub. Follow its prompts.
4. **Describe the change in plain words.** Say what you want and on which page. You do not need technical terms.
5. **Claude makes the change on a new branch** (not the live site), checks the site still builds, and sends you a **preview link**. It takes about a minute.
6. **Open the preview on your phone**, and on a computer if you can. Look at the page you changed and the pages around it.
7. **Not quite right?** Tell Claude what to change. The same preview link updates.
8. **Happy?** Say **"merge it"**. Claude merges the branch into `main`.
9. **It goes live in about a minute** at https://drnatemyhill.com.au. If it still looks old, see Troubleshooting.
10. **Anything about treatments, results, risks or credentials:** Claude must ask for your OK on the exact words before merging. You are the clinical sign-off.

### Example prompts

- "Change the phone number on the site to ..."
- "Add the Knox Private logo I've put in my Downloads folder."
- "Add a new procedure page for ..."
- "Update the hip replacement recovery section to say ..."
- "Add the HealthLink ID ... and the Medical Objects ID ..."
- "Check the whole site still follows AGENTS.md."
- "Show me everything that changed since last week."
- "Undo the last change I merged."

---

## Troubleshooting

**The build fails.**
Tell Claude: "The build failed. Fix it and explain what was wrong." Do not merge until the build passes. Production only updates when something is merged, so a failed branch never reaches the live site.

**The preview link asks me to log in to Vercel.**
Previews are private. Sign in with the Vercel account on team `ngmyhill-9985`. Someone who is not on the team cannot open them, which is intended.

**The live site looks old after I merged.**
Wait two minutes, then reload hard (Ctrl+Shift+R on a computer, or open it in a private window). Browsers and phones cache pages. Try mobile data instead of Wi-Fi to rule out a local DNS cache. You can also check the Deployments tab in Vercel to see whether the latest one finished.

**Vercel shows a "verifying your browser" or firewall challenge.**
Vercel does this when it sees many automated checks in a short time, for example scripted tests or crawlers. It is not an outage. Complete the check, or wait ten minutes and try again.

**I merged something wrong.**
Tell Claude: "Undo the last change that went live." It makes a branch that reverses it, you check the preview, then say "merge it".

**Email stopped working.**
Do not edit DNS to fix it. Check the Google Workspace admin console and the DNS section below, and ask someone who knows email records.

---

## Accounts and who owns them

| Service | What it is for | Details |
|---------|----------------|---------|
| Vercel | Hosts the site, builds previews | Team `ngmyhill-9985`, **Pro plan** (needed because this is a commercial practice site). Project `natemyhill`. Dashboard: vercel.com/ngmyhill-9985s-projects/natemyhill |
| GitHub | Holds the code | `ngmyhill/natemyhill-site`, **public** repository |
| VentraIP | Domain registrar and DNS | Six domains (see the DNS section) |
| Google Workspace | Email | `nate@drnatemyhill.com.au`, with aliases `admin@drnatemyhill.com.au` and `referrals@drnatemyhill.com.au` |
| Google Search Console | Search visibility | Property `sc-domain:drnatemyhill.com.au` |

**Warning about making the repo private.** On the Vercel Pro plan, if the GitHub repository is ever made private, Vercel refuses to deploy commits whose author is not a member of the Vercel team. Keep the repo public, or add every person who commits to the Vercel team first. Nothing secret should ever be in the repo either way.

---

## DNS map

All DNS is managed at VentraIP. Records below are the intended state.

### drnatemyhill.com.au (primary, live)

| Type | Name | Value | Purpose |
|------|------|-------|---------|
| A | `@` | 216.150.1.1 | Website (Vercel) |
| A | `www` | 216.150.1.1 | Website (Vercel) |
| MX | `@` | `smtp.google.com` (priority 1) | Email |
| TXT | `@` | `v=spf1 include:_spf.google.com ~all` | Email sending |
| TXT | `google._domainkey` | DKIM key from the Workspace admin console | Email signing |
| TXT | `_dmarc` | `v=DMARC1; p=none;` (monitor only; can be tightened later) | Email reporting |
| TXT | `@` | `google-site-verification=...` | Proves ownership to Google (Search Console and Workspace) |

### The five spare domains

Registered at VentraIP so nobody else can use the name. Each has:

- A `@` and A `www` pointing to 216.150.1.1
- an SPF record of `-all` (no email may be sent from it)
- a DMARC record with `p=reject`

The spare domains are `drnatemyhill.au`, `drnatemyhill.com`, `drnatemyhill.co`, `drnatemyhill.net` and `drnatemyhill.site`. Each one, with and without `www`, permanently redirects to https://drnatemyhill.com.au (set in Vercel, Project, Settings, Domains). Auto-renew is on for all six domains at VentraIP. `.au` and `.com.au` renew separately.

**NEVER TOUCH THE EMAIL RECORDS** (MX, SPF, DKIM, DMARC, google-site-verification). A wrong edit stops email, or lets other people send as Nate. DNS is never changed from code.

---

## Technical reference

### Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 App Router (`src/app`). Next 16 has breaking changes. Read `node_modules/next/dist/docs/` before changing metadata, headers, config, images or layout. |
| UI | React 19, Server Components by default |
| Styling | Tailwind CSS 4. Config is in `src/app/globals.css` (`@theme`), not a config file. Most layout uses inline styles and a few CSS classes. |
| Fonts | EB Garamond (headings), Inter (body), through `next/font/google` |
| Language | TypeScript |
| Hosting | Vercel Pro. `main` is production, other branches are previews. |
| Node | 20 or newer |

### Commands

```
npm install
npm run dev       # http://localhost:3000
npm run build     # must pass before merging
npm run lint      # some old lint errors exist; do not add new ones
```

### Key files

See the "Where things live" table in `AGENTS.md`. In short:

- `src/lib/data.ts`: phone, email, fax, IDs, locations, navigation, `hasRealValue()`. A value written as `"[like this]"` is hidden until replaced with a real one.
- `src/app/<specialty>/<slug>/page.tsx`: the 19 procedure pages. Each has a `RisksSection`, and eight have an "At a glance" list built only from facts on the page.
- `src/components/`: `PageLayout`, `RisksSection`, `FAQSection`, `CTABox`, `ReferrerPanel`, `Navigation`, `Footer`, `MobileActionBar`, `LocationLogo`.
- `src/lib/seo.ts`: `pageMetadata()` for titles, canonical links and share cards.
- `next.config.ts`: the redirect from natemyhill.vercel.app and the noindex header for every host that is not the live domain.
- `public/images`, `public/images/locations`, `public/downloads`: images, logos and PDFs.

### Site map

Home, About, Appointments, Locations (and 7 location pages), Privacy policy; Shoulder and upper limb hub with 11 procedure pages; Hip and knee hub with 6; Trauma hub with 2; For patients hub with 4 pages; For referrers hub with how-to-refer and referral resources. 47 pages in total, all listed in `src/app/sitemap.ts`.

### Brand

| Token | Hex | Use |
|-------|-----|-----|
| Navy | `#1A2744` | Primary, backgrounds, headings |
| Teal (original) | `#1D9E75` | Logo mark and decorative borders only |
| Dark teal | `#0F7A59` | Text and buttons on light surfaces (AA contrast) |
| Light teal | `#34B889` | Text and buttons on navy |
| Slate | `#5F5E5A` | Body and muted text |
| Warm grey | `#D3D1C7` | Borders |
| Off-white | `#F8F8F6` | Section backgrounds |

Tagline: "The plan that fits your life." Home page hero only. Voice: warm, plain, no hype, no superlatives.

### Safety checks the site already has

- `X-Robots-Tag: noindex` on every host except the live domain, so previews never appear in search.
- One `<main>`, a skip link, focus outlines, AA colour contrast, no horizontal scroll from 320 to 1440px.
- Placeholders in `data.ts` cannot appear on the site, because every use goes through `hasRealValue()`.

### Placeholders still in `data.ts` (hidden on purpose)

`healthlinkId`, `medicalObjectsId`, `bookingUrl`, and each location's `address` and `phone`. The site shows no street addresses for now, only hospital names and suburbs.
