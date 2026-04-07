# Progress Tracker — Rico Portfolio

Last updated: 2026-04-07
Current version: v0.7.0
Active branch: feature/astro-dev

---

## ✅ Sudah Selesai

### Branch: main (Vanilla HTML — v0.6.2) — FROZEN, tidak diubah lagi

- [x] Layout sidebar gelap + konten kanan terang (CSS Grid)
- [x] Mobile responsive — hamburger drawer
- [x] Semua section: Hero, About, Experience, Portfolio, Skills, Contact
- [x] Dark mode toggle + scroll animations (AOS)
- [x] Portfolio filter (All / QA / PM)
- [x] Favicon SVG + PNG set (favicon_io/)
- [x] OG image (assets/og.png) — berfungsi untuk preview WhatsApp/LinkedIn
- [x] CV diupload (assets/Rico_Tri_Wibowo_CV.pdf)
- [x] Contact form Formspree (belum ganti ID — masih REPLACE_WITH_YOUR_ID)
- [x] CHANGELOG.md, VERSION, README.md

### Branch: feature/astro-dev (Astro — v0.7.0) — AKTIF

#### Setup & Infrastruktur
- [x] Branch `feature/astro-dev` dibuat dari `main`
- [x] Template astro-developer-portfolio-template di-clone via git
- [x] File vanilla lama dihapus dari branch ini (index.html, styles.css, script.js, server.js)
- [x] npm install berhasil (394 packages)
- [x] .gitignore diupdate: node_modules/, dist/, .astro/, .claude-prompts/

#### Konfigurasi
- [x] tailwind.config.js — warna: primary #2E86C1, navy #0D1B2A, navy-card, muted
- [x] tailwind.config.js — font family: Inter
- [x] astro.config.mjs — site URL: rico-tri-wibowo.vercel.app
- [x] Layout.astro — semua SEO meta (OG, Twitter Card, Dublin Core) dengan data Rico

#### Komponen & Konten
- [x] Profile.astro — data Rico + inisial RTW + stats row (5+, 15+, 300+)
- [x] Contact.astro — terminal widget + tombol Download CV + Socials
- [x] Socials.astro — LinkedIn, Email, Twitter (@ricobowo_), Instagram (@ricobowo_)
- [x] SocialIcon.astro — SVG icon untuk LinkedIn, Email, Twitter/X, Instagram, GitHub
- [x] ContentLink.astro — komponen tab label (label for radio input)
- [x] ContentExperience.astro — 5 posisi kerja dengan badge tipe (QA/PM/Ops/Admin)
- [x] ContentProjects.astro — 6 proyek (4 QA + 2 PM) dengan metrics dan tags
- [x] ContentAbout.astro — skill Rico sebagai TypeScript code block (Shiki highlighting)
- [x] ContentReadme.astro — ringkasan profesional gaya GitHub README
- [x] index.astro — 4 tab: experience.json → projects.md → about.ts → README.md

#### Assets
- [x] public/img/logo.svg — favicon SVG (inisial R, navy + biru)
- [x] public/img/meta.png — OG image (salin dari assets/og.png)
- [x] public/img/favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png
- [x] public/cv/Rico_Tri_Wibowo_CV.pdf — CV terbaru

#### Dokumentasi & Kualitas Kode
- [x] Komentar Bahasa Indonesia di semua file komponen
- [x] CHANGELOG.md diupdate dengan entri v0.7.0
- [x] VERSION diupdate ke 0.7.0
- [x] README.md diupdate (tech stack, struktur, cara custom, cara dev lokal)
- [x] .claude-prompts/context.md diupdate penuh
- [x] .claude-prompts/progress.md diupdate (file ini)
- [x] .claude-prompts/prompts/general.md diupdate
- [x] Security check: tidak ada API key, token, atau credential di source code

#### Deploy
- [x] Build berhasil (npm run build — 1 page, 0 error)
- [x] Push ke GitHub branch feature/astro-dev
- [x] Vercel preview URL aktif dan bisa diakses

---

## 🔲 Belum Selesai / To-Do

### Konten yang masih perlu diisi Rico (manual)

- [ ] **Foto profil** — upload ke `src/assets/profile.jpg`
  - Setelah upload: edit Profile.astro, ganti div inisial RTW dengan komponen `<Picture>`
- [ ] **Twitter handle** — cek apakah `@ricobowo_` benar, update di Socials.astro jika salah
- [ ] **Instagram handle** — cek apakah `@ricobowo_` benar, update di Socials.astro jika salah

### Teknis
- [ ] **URL Vercel live** — setelah domain production ditentukan, update di:
  - `astro.config.mjs` → `site`
  - `src/layouts/Layout.astro` → `domainBaseURL` dan `ogImageUrl`
  - `public/robots.txt` → URL sitemap
- [ ] **Formspree** (di branch main) — masih ada `REPLACE_WITH_YOUR_ID` di index.html lama
- [ ] **Merge ke main** — setelah Astro versi dianggap production-ready

### Peningkatan Opsional (Low Priority)
- [ ] Pertimbangkan apakah perlu halaman `/projects` terpisah (lebih dari 4 proyek?)
- [ ] Google Analytics atau Vercel Analytics
- [ ] Foto profil di panel kiri setelah tersedia

---

## 📝 Catatan untuk Sesi Berikutnya

1. **Branch aktif sekarang:** `feature/astro-dev` — selalu cek dengan `git branch --show-current`
2. **Branch main aman:** vanilla v0.6.2 tidak disentuh, bisa jadi fallback kapan saja
3. **Preview live:** lihat URL Vercel di context.md untuk cek tampilan terbaru
4. **Untuk commit:** Rico yang handle sendiri — Claude hanya siapkan file, tidak git push
5. **Twitter/Instagram handle:** perlu dikonfirmasi Rico apakah `@ricobowo_` sudah benar
6. **Foto profil:** kapan saja siap, upload ke `src/assets/profile.jpg` lalu edit Profile.astro
