# Changelog — Rico Tri Wibowo Portfolio

All notable changes to this project will be documented here.
Format: `[vX.Y.Z] — YYYY-MM-DD` | Patch = bug fix · Minor = new feature · Major = redesign

---

## [v0.7.2] — 2026-04-07
### Fixed
- **`.claude-prompts` untracked**: Dilepas dari git tracking (`git rm --cached`) — sekarang benar-benar tidak masuk GitHub sesuai `.gitignore`
- **GitHub social icon**: Ditambahkan kembali ke `Socials.astro` setelah tertimpa saat penulisan ulang file
- **Social icon layout**: `justify-between` diganti ke `flex gap-2` agar 5 ikon tersusun rapi tanpa terlalu meregang

### Changed
- **Semua konten tampilan ke English**: Profile bio, ContentExperience bullets, ContentProjects descriptions, ContentAbout code inline labels
- **ContentReadme.astro**: Redesign penuh sesuai referensi — "Let's Build Quality Products Together", What I Do, Why Work With Me?, CTA penutup
- **Komentar kode**: Semua komentar di seluruh komponen menggunakan Bahasa Indonesia

---

## [v0.7.1] — 2026-04-07
### Fixed
- **Urutan tab**: Diurutkan ulang menjadi `experience.json` → `projects.md` → `about.ts` → `README.md`
- **`bg-black` di ContentLink**: Diganti ke `bg-navy` agar konsisten dengan warna panel

### Added
- **ContentReadme.astro**: Tab baru README.md — ringkasan profesional bergaya GitHub README (badge, bio, tabel stats, bullet list, kontak)
- **Komentar Bahasa Indonesia**: Ditambahkan ke seluruh file komponen dan layout

### Changed
- **`.gitignore`**: Tambah `.claude-prompts/` ke daftar ignore
- **CHANGELOG, VERSION, README**: Diupdate ke v0.7.1
- **`.claude-prompts`**: context.md, progress.md, general.md diperbarui penuh

---

## [v0.7.0] — 2026-04-07
### Added — Astro Dev Portfolio migration (branch: feature/astro-dev)
- **Framework**: Migrated from vanilla HTML/CSS/JS to Astro 5 (static output)
- **Styling**: Tailwind CSS v3 — color scheme preserved (navy `#0D1B2A` + accent `#2E86C1`)
- **Font**: Inter via Google Fonts (replaces system-ui default)
- **Tab system**: 4 CSS-only tabs (no JS) — `experience.json` · `projects.md` · `about.ts` · `README.md`
- **ContentExperience**: 5 work positions with type badges (QA / PM / Ops / Admin) and bullet points
- **ContentProjects**: 6 projects (4 QA + 2 PM) with metrics row and tag pills
- **ContentAbout**: Skills displayed as a TypeScript code block via Shiki syntax highlighting
- **ContentReadme**: Professional summary styled as a GitHub README (badges, table, bio, contact)
- **Profile**: Stats row (5+ years, 15+ projects, 300+ test cases) + RTW initials placeholder
- **Contact**: Terminal widget (`$ rico --connect`) + CV download button + social icon grid
- **Socials**: LinkedIn, Email, Twitter/X, Instagram — all with custom inline SVG icons
- **Assets**: Favicon PNG set, OG image (`meta.png`), CV PDF moved to `public/` folder
- **SEO**: Full OG + Twitter Card + Dublin Core meta tags in `Layout.astro`
- **Comments**: Inline JSDoc-style comments added to every component and layout file
- **gitignore**: Added `node_modules/`, `dist/`, `.astro/` to `.gitignore`

### Notes
- Branch `main` still holds the vanilla v0.6.2 version — no changes made there
- Twitter/Instagram handles: `@ricobowo_` — update in `Socials.astro` if handles change
- Profile photo: not yet uploaded — `src/assets/profile.png` is template placeholder

---

## [v0.6.2] — 2026-04-06
### Fixed
- **Favicon**: Penyesuaian favicon yang sebelumnya terbaca `assets/favicon_io/favicon-16x16.png` dan `assets/favicon_io/favicon-32x32.png`
- **Open Graph**: Convert `assets/og-image.jpg` ke `assets/og.png` 
  — OG preview sekarang berfungsi saat link dibagikan di WhatsApp, LinkedIn, dan media sosial lainnya
- **Icon Skill Tools**: Ada beberapa yang tidak terbaca iconnya jadi dibuat menggunakan `tools-icon-text` terlebih dahulu

### Added
- **Asset CV**: Tambahkan file CV terbaru (`assets/Rico_Tri_Wibowo_CV.pdf`) 
  — tombol Download CV sekarang mengarah ke file yang sudah diperbarui

---

## [v0.6.1] — 2026-04-05
### Fixed
- **Layout centering**: Tambah `margin: 0 auto; width: 100%` ke `.section-inner` dan `.hero-inner` — konten sekarang ter-center di sisa area kanan (bukan menempel ke kiri) di semua resolusi termasuk FHD dan 2K
- **Contact two-column layout**: Email & LinkedIn cards sekarang berdampingan dengan form kontak di desktop (`grid-template-columns: 1fr 1.5fr`); tablet ≤1024px kembali ke satu kolom
- **Contact section width**: Ubah `section-inner` → `section-inner--wide` agar dua kolom kontak punya cukup ruang

### Added
- `assets/og-image.svg` — template OG image (1200×630). Perlu dikonversi ke JPG/PNG sebelum OG preview berfungsi (gunakan browser "Save as image" atau tools online)

### Notes
- **Favicon**: `assets/favicon.svg` sudah ada dan berfungsi di Chrome/Firefox/Edge modern. PNG variants (`favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`) perlu di-generate manual via realfavicongenerator.net
- **Open Graph**: Meta tags sudah benar di `<head>`. Butuh 2 hal sebelum preview berfungsi: (1) site live di Vercel, (2) `assets/og-image.jpg` — convert dari `og-image.svg`

---

## [v0.6.0] — 2026-04-05
### Fixed
- **Contact nav bug**: Clicking "Contact" in sidebar nav was activating "Skills" instead — fixed by calling `setActiveNav()` immediately on link click, before `IntersectionObserver` can fire
- **Layout empty space at 1920px+**: Added `@media (min-width: 1920px)` and `@media (min-width: 2560px)` breakpoints — sidebar width, section padding, and `section-inner`/`hero-inner` max-width all scale up proportionally
- All nav links now immediately reflect the target section on click (no observer delay)

### Added — Visual & UX Features
- **Favicon**: `assets/favicon.svg` — "R" initial in accent blue (#2E86C1) on dark navy background; linked in `<head>` with all standard format tags (PNG variants need manual generation via realfavicongenerator.net)
- **Open Graph meta tags**: og:title, og:description, og:image, og:url, og:type — preview link di LinkedIn/WhatsApp
- **Twitter Card meta tags**: twitter:card, twitter:title, twitter:description, twitter:image
- **Dark / Light mode toggle**: Fixed button (kanan bawah), saves preference to `localStorage`, moon/sun SVG icons
- **Back to Top button**: Appears after scrolling 300px, smooth scroll to top, fade-in animation
- **Portfolio mockups**: CSS device frame mockups (phone frame for mobile apps, browser frame for web projects) di atas setiap kartu portfolio dengan warna brand masing-masing klien
- **Tool icons grid**: Kategori Tools di Skills section sekarang menampilkan ikon dari Simple Icons CDN (Postman, VS Code, Adobe CC, OBS, MS Office) + styled text fallback (vMix, Hopscotch)
- **Contact form**: Form Nama/Email/Pesan menggunakan Formspree (gratis 50 msg/bulan), async submit tanpa reload, pesan sukses/error, disabled state saat mengirim. Perlu setup: ganti `REPLACE_WITH_YOUR_ID` di form action
- **Scroll reveal animations**: AOS (Animate On Scroll) via CDN — experience cards fade-up, project cards stagger, skill rows stagger, stat cards stagger, section headings fade-up
- **Portfolio filter animation**: Grid fade-out/fade-in (200ms) saat filter berubah, menggantikan toggle display:none yang langsung

### Technical
- AOS library: `cdnjs.cloudflare.com/ajax/libs/aos/2.3.4` — respects `prefers-reduced-motion`
- Simple Icons CDN: `cdn.simpleicons.org/{slug}/{hex}` — gratis & open source
- `project-grid` transition: `opacity` + `translateY` untuk filter animation
- `project-card` transition: tambah `opacity` untuk konsistensi

---

## [v0.5.2] — 2026-04-05
### Fixed
- Experience, Portfolio, Skills sections: added `.section-inner--wide` class to use full content width — eliminates empty whitespace on right side at desktop resolutions
- CSS: added `.section-inner--wide { max-width: 100% }` override while keeping narrow (680px) default for About and Contact sections

### Added
- `.claude-prompts/` folder for cross-device Claude Code context sync:
  - `context.md` — full project architecture, tech stack, CSS variables, file structure
  - `progress.md` — completed checklist + remaining to-do list
  - `prompts/general.md` — ready-to-use prompts for starting new sessions

### Security
- Full audit completed: no API keys, tokens, passwords, or credentials found in any public file
- `.claude/` folder (contains local Windows paths) confirmed in `.gitignore` — will NOT be pushed to GitHub
- Repo confirmed SAFE for public visibility on GitHub

---

## [v0.5.1] — 2026-04-05
### Fixed
- Timeline period column: changed fixed `90px` to `min-content` so dates never hide behind cards at any resolution
- About section: hidden photo placeholder (`display: none`) and collapsed to single-column layout
- Footer version badge: hidden from visitors (`display: none`) — version remains in sidebar, file headers, and CHANGELOG

---

## [v0.5.0] — 2026-04-05
### Added — First real content release
- **About**: Full professional bio (5+ yrs, 300+ test cases, 15+ projects, Bandung)
- **Stats**: Real numbers — 5+ Years, 15+ Projects Delivered, 300+ Test Cases Written
- **Experience**: 5 real positions added:
  - QA Engineer (Part-time) @ Rolling Glory — Nov 2024–Present
  - Administration Staff — Communication Studies @ Telkom University — Oct 2024–Present
  - Chief Operating Officer @ PSI Indonesia — Jul 2023–Present
  - Administration Staff — Research & Community Service @ Telkom University — Feb 2021–Nov 2024
  - Junior Project Manager @ Rolling Glory — Sep 2019–Nov 2020
- **Portfolio**: 6 real projects added (4 QA + 2 PM):
  - B7 Supersales, Bebeclub, Treasury, TADA Spin Wheel, RS Mitra Keluarga, Morinaga Platinum
- **Skills**: 5 real categories — QA, Project Management, Design & Multimedia, Web & Digital, Tools
- **Contact**: Real email (ricobowo10@gmail.com) and LinkedIn (rico-tri-wibowo)
- **CV link**: All Download CV buttons point to `/assets/Rico_Tri_Wibowo_CV.pdf`
- **Social icons**: Added portfolio (Wix) globe icon alongside email and LinkedIn
- **Meta description**: Updated with real professional summary

---

## [v0.4.0] — 2026-04-05
### Added — Rule 6: Version header in all code files
- Version header comment added to top of `index.html`, `styles.css`, `script.js`, `server.js`
- Table of Contents comment block added to `styles.css` and `script.js`

### Changed — Full redesign (Brittany Chiang + Jesse Showalter)
- **Layout**: Switched to CSS Grid (`260px 1fr`) — dark sidebar left, light content right
- **Sidebar**: Dark background (`#0D1B2A`), white text, accent blue nav active state
- **CSS Variables**: All hardcoded colors replaced with 18 CSS custom properties in `:root`
- **Nav active detection**: Replaced scroll event with `IntersectionObserver` (more performant)
- **Nav indicator**: Border-left `3px solid var(--accent)` animates on active section
- **Hero**: Retained headline + badge; added stats row (3 cards) below CTA buttons
- **Experience cards**: Removed box-shadow; hover uses border-left accent + background shift
- **Portfolio cards**: `border-radius: 12px`, `padding: 20px`, hover `translateY(-4px)` + border-left
- **Portfolio cards**: Added metrics row (small accent pills for key numbers)
- **Portfolio badges**: Color-coded per category (blue=QA, green=PM)
- **Skills section**: Rearranged to label-left + pills-right layout per row
- **Contact cards**: Hover uses border-left accent + `translateX(4px)` instead of shadow
- **Tags**: Unified pill style across all sections (`border-radius: 999px`, `12px font-size`)
- **Sidebar footer**: Added social icons, Download CV link, version badge `v0.4.0`
- **Mobile nav**: Dark navbar matching sidebar color scheme, updated drawer styling
- **Footer**: Light gray centered text with inline version badge

---

## [v0.3.1] — 2026-04-05
### Added
- Version header comment (Rule 6) added to `index.html`, `styles.css`, `script.js`
- `CHANGELOG.md`, `VERSION` file created
- Version badge in footer: `v0.3.0`

---

## [v0.3.0] — 2026-04-05
### Added
- Dynamic color theme switcher (Navy, Slate, Minimal)
- CSS custom properties for all colors
- localStorage theme persistence

---

## [v0.2.0] — 2026-04-05
### Added
- Color customization attempt (dynamic colors)

---

## [v0.1.0] — 2026-04-05
### Added
- Initial portfolio structure (HTML/CSS/JS, no frameworks)
- Sidebar navigation (About, Experience, Portfolio, Skills, Contact)
- Fixed sidebar layout — sticky left panel, scrollable right content
- Hero section with bold headline and CTA buttons
- About section with photo placeholder and stat cards
- Experience section with two-column timeline and hover effects
- Portfolio section with filter buttons (All / QA / PM) and project cards
- Skills section with four categorized tag groups
- Contact section with Email and LinkedIn cards
- Footer with copyright 2026
- Mobile-responsive layout with hamburger drawer
- IntersectionObserver-based active nav link highlighting
- `server.js` — zero-dependency Node.js static file server
- `.claude/launch.json` — dev server configuration
- Version badge in footer
