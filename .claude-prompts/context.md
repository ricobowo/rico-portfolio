# Context — Project Architecture
# Rico Tri Wibowo Portfolio | v0.8.0 | Updated: 2026-04-08

---

## Project Overview

**URL (Vercel):** https://rico-tri-wibowo.vercel.app
**Repo:** https://github.com/ricobowo/rico-portfolio
**Active branch:** `feature/astro-dev`
**Main branch:** `main` (masih berisi vanilla HTML/CSS/JS v0.6.2 — jangan diubah)
**Framework:** Astro 5 (static output) + Tailwind CSS v3

---

## Tech Stack

| Layer     | Tech                          | Catatan                                  |
|-----------|-------------------------------|------------------------------------------|
| Framework | Astro 5                       | File-based routing, `.astro` components  |
| Styling   | Tailwind CSS v3               | Custom color tokens di `tailwind.config` |
| Font      | Inter (Google Fonts)          | `preconnect` di Layout.astro             |
| Icons     | Inline SVG                    | Di `SocialIcon.astro` — stroke style     |
| Syntax HL | Shiki (built-in Astro)        | Dipakai di `ContentAbout.astro`          |
| Deploy    | Vercel                        | Auto-deploy dari branch main             |
| CV        | `/public/Rico_Tri_Wibowo.pdf` | Tombol Download CV di Contact.astro      |

---

## Color Tokens (tailwind.config.js)

| Token        | Warna       | Dipakai untuk                        |
|--------------|-------------|--------------------------------------|
| `navy`       | `#0D1B2A`   | Background utama halaman             |
| `navy-card`  | `#112233`   | Background kartu/panel               |
| `primary`    | `#2E86C1`   | Accent biru — border, teks, badge QA |
| `muted`      | `#8899AA`   | Teks sekunder / label                |

---

## File Structure

```
src/
├── components/
│   ├── Profile.astro        — Panel kiri: nama, jabatan, bio, stats
│   ├── Contact.astro        — Panel kiri: terminal widget, CV button, socials
│   ├── Socials.astro        — Grid 5 ikon sosial (email/linkedin/ig/x/github)
│   ├── SocialIcon.astro     — SVG switcher per platform
│   ├── ContentLink.astro    — Label tombol tab (HTML <label for="tabN">)
│   ├── ContentExperience.astro — Tab 1: 5 posisi kerja dengan badge + bullets
│   ├── ContentProjects.astro   — Tab 2: 11 proyek + filter CSS (QA/PM/Ops)
│   ├── ContentAbout.astro      — Tab 3: Skill sebagai kode TypeScript (Shiki)
│   └── ContentReadme.astro     — Tab 4: Professional summary gaya GitHub README
├── layouts/
│   └── Layout.astro         — Shell HTML: meta SEO, OG, Twitter Card, Dublin Core
├── pages/
│   └── index.astro          — Halaman utama: 2-panel layout + sistem tab CSS
└── styles/
    └── global.scss          — Global styles + Tailwind base

public/
├── img/                     — Favicon, OG image (meta.png), logo SVG
└── Rico_Tri_Wibowo.pdf      — CV untuk tombol Download

assets/                      — Favicon PNG set (untracked, perlu git add manual)
CHANGELOG.md
VERSION
```

---

## Tab System (CSS-only, tanpa JavaScript)

Di `index.astro`:
- 4 `<input type="radio" class="tab-radio">` tersembunyi
- 4 `<label>` di `ContentLink.astro` — satu per tab
- CSS `:checked` selector menampilkan konten yang sesuai:
  ```css
  #tab1:checked ~ * #content1 { @apply block opacity-100; }
  ```
- Tab aktif ditandai dengan border bawah biru (`border-b-primary`)

**Urutan tab:** experience.json (default) → projects.md → about.ts → README.md

---

## Filter System di ContentProjects (CSS-only)

Sama persis dengan sistem tab tapi untuk filter proyek:
- 4 radio input: `proj-all` (default) | `proj-qa` | `proj-pm` | `proj-ops`
- Kartu mendapat class: `card-qa` | `card-pm` | `card-ops`
- CSS menyembunyikan semua, lalu menampilkan sesuai filter yang aktif
- Filter `All` = tidak ada CSS hiding (semua kartu tampil default)

---

## Data Proyek (ContentProjects.astro)

11 proyek total:
| # | Nama | Kategori | Metrics |
|---|------|----------|---------|
| 1 | B7 Supersales | QA | 12 modules · 206 test cases · 6 user roles |
| 2 | Bebeclub | QA | 29 features · 2 manual versions · 2 platforms |
| 3 | Treasury | QA | 33 features · 8 transaction types · 2 platforms |
| 4 | TADA Spin Wheel | QA | ~99 test cases · 12 features · 2 clients |
| 5 | Astra Digital | PM | 2 FSD versions · 1 admin manual · Full lifecycle |
| 6 | RS Mitra Keluarga | PM | 4 branches · 8 content categories · 6-month plan |
| 7 | Morinaga Platinum | PM | 60+ content pieces · 11 articles · 42 meetings |
| 8 | Kalbe Nutrisional | PM | 9 product lines · Multiple revision cycles |
| 9 | Mulia Display | PM | 3 sub-brands · 3 UI review cycles · 40 meetings |
| 10 | Cerebrofort | PM | iOS & Android · UXPin tested · OTD completed |
| 11 | PSI Indonesia | Ops | 5 events · 100+ certified · 2 Speech Camps |

---

## Data Experience (ContentExperience.astro)

5 posisi, urutan terbaru ke terlama:
1. QA Engineer @ Rolling Glory — Nov 2024–Present (type: QA)
2. Administration Staff – Communication Studies @ Telkom Univ — Oct 2024–Present (type: Admin)
3. Chief Operating Officer @ PSI Indonesia — Jul 2023–Present (type: Ops)
4. Administration Staff – Research & Community Service @ Telkom Univ — Feb 2021–Nov 2024 (type: Admin)
5. Junior Project Manager @ Rolling Glory — Sep 2019–Nov 2020 (type: PM)

---

## Socials (Socials.astro)

Urutan: Email → LinkedIn → Instagram → X/Twitter → GitHub
Layout: `grid grid-cols-5 gap-2` — selalu 5 kolom rata, tidak wrapping
Icons: Inline SVG di `SocialIcon.astro`

---

## SEO (Layout.astro)

- OG image: `https://rico-tri-wibowo.vercel.app/img/meta.png`
- Twitter handle: `@ricobowo_`
- Canonical URL: `Astro.url`
- Language: `en`

---

## Branch Strategy

| Branch | Isi | Status |
|--------|-----|--------|
| `main` | Vanilla HTML/CSS/JS v0.6.2 | JANGAN diubah |
| `feature/astro-dev` | Astro portfolio (aktif) | Branch kerja saat ini |

**Rencana:** Setelah Astro siap deploy → merge `feature/astro-dev` → `main` → set `main` sebagai default di GitHub.
