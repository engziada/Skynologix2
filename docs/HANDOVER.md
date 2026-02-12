# Skynologix Website — Handover Guide

## Overview
Bilingual (Arabic/English) corporate website for Skynologix, built with Next.js App Router, TypeScript, TailwindCSS, and Sanity CMS.

---

## Tech Stack
- **Framework**: Next.js 16 (App Router) + TypeScript
- **Styling**: TailwindCSS v4
- **CMS**: Sanity (Headless CMS)
- **i18n**: next-intl (Arabic RTL + English LTR)
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

---

## Project Structure
```
src/
├── app/
│   ├── [locale]/          # Locale-based routing (ar/en)
│   │   ├── layout.tsx     # Root layout with SEO, fonts, Schema.org
│   │   ├── page.tsx       # Homepage
│   │   ├── about/         # About page
│   │   ├── services/      # Services page
│   │   ├── how-it-works/  # Process page
│   │   ├── contact/       # Contact page with form
│   │   └── portfolio/     # Portfolio stub (Coming Soon)
│   ├── api/contact/       # Contact form API route
│   ├── globals.css        # Global styles + design tokens
│   ├── robots.ts          # robots.txt generation
│   └── sitemap.ts         # XML sitemap generation
├── components/
│   ├── layout/            # Navbar, Footer
│   ├── sections/          # Homepage sections (Hero, Why, Services, etc.)
│   ├── forms/             # ContactForm
│   └── ui/                # Reusable UI (SectionHeading, WhatsAppButton)
├── i18n/                  # Internationalization config
├── lib/
│   ├── fonts.ts           # Google Fonts (Inter + Noto Sans Arabic)
│   └── sanity/            # Sanity client + queries
├── messages/              # Translation files (ar.json, en.json)
└── middleware.ts           # Locale detection + routing
sanity/
├── sanity.config.ts       # Sanity Studio config
└── schemas/               # CMS schemas (globalSettings, homepage, about, services)
```

---

## How to Edit Content

### Via Sanity Studio
1. Go to your Sanity Studio URL (e.g., `https://your-project.sanity.studio`)
2. Navigate to the document type you want to edit
3. Each field has Arabic (ar) and English (en) versions
4. Save and publish changes — they'll appear on the site automatically

### Editable Content Types
- **Global Settings**: Email, phone, WhatsApp number, social links
- **Homepage**: Hero text, Why items, Services preview, Process steps, Final CTA
- **About Page**: About text, Mission, Vision, Values
- **Services Page**: Service details with features

---

## How to Change WhatsApp / Email

### Option 1: Via Sanity Studio
Edit the **Global Settings** document → update WhatsApp or Email fields.

### Option 2: Via Code (fallback)
Search for `+966XXXXXXXX` and `info@skynologix.com` in the codebase and replace with actual values.

---

## How to Deploy Updates

### Vercel (Recommended)
1. Push changes to the `main` branch
2. Vercel auto-deploys on push
3. Preview deployments are created for pull requests

### Manual Deploy
```bash
npm run build
npm run start
```

---

## Environment Variables
Copy `.env.example` to `.env.local` and fill in:
- `NEXT_PUBLIC_SANITY_PROJECT_ID` — Your Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET` — Usually `production`

---

## SEO Checklist
- [x] Proper H1/H2 heading structure per page
- [x] Meta title + description per page per locale
- [x] OpenGraph + Twitter card meta tags
- [x] Canonical URLs with hreflang (ar/en)
- [x] XML Sitemap at `/sitemap.xml`
- [x] robots.txt at `/robots.txt`
- [x] Schema.org JSON-LD (Organization + LocalBusiness)
- [x] Clean URL structure (`/ar/services`, `/en/services`)

---

## QA Checklist
- [ ] Mobile responsive (all breakpoints)
- [ ] RTL layout correct for Arabic
- [ ] LTR layout correct for English
- [ ] Language toggle works
- [ ] All navigation links correct
- [ ] Contact form submits successfully
- [ ] WhatsApp buttons open correct wa.me link
- [ ] Lighthouse Performance ≥ 90
- [ ] Lighthouse SEO ≥ 90
- [ ] Lighthouse Accessibility ≥ 90
