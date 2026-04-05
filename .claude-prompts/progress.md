# Progress Tracker — Rico Portfolio

Last updated: 2026-04-05
Current version: v0.6.0

---

## ✅ Sudah Selesai

### Struktur & Layout
- [x] HTML single-page dengan sidebar + main content (CSS Grid)
- [x] Sidebar dark (#0D1B2A) — sticky, tidak ikut scroll
- [x] Mobile responsive — hamburger drawer
- [x] CSS variables sistem warna terpusat di :root
- [x] IntersectionObserver untuk active nav link
- [x] Portfolio filter (All / QA Testing / Project Mgmt)
- [x] Version header di setiap file kode (Rule 6)
- [x] CHANGELOG.md + VERSION file

### Konten Real (v0.5.0+)
- [x] Hero: headline, stats (5+, 15+, 300+), CTA buttons
- [x] About: bio 3 paragraf
- [x] Experience: 5 posisi kerja lengkap dengan bullets & tags
- [x] Portfolio: 6 proyek (4 QA + 2 PM) dengan metrics
- [x] Skills: 5 kategori dengan tag pills
- [x] Contact: email ricobowo10@gmail.com + LinkedIn

### Perbaikan UI
- [x] Timeline period column: `min-content` agar tidak terpotong
- [x] Foto profil disembunyikan (display: none)
- [x] Footer version badge disembunyikan dari visitor
- [x] Experience/Portfolio/Skills: `section-inner--wide` agar tidak kosong di kanan

### Bug Fixes (v0.6.0)
- [x] Contact nav bug: klik Contact mengarah ke Skills — fixed dengan setActiveNav() langsung
- [x] Layout kosong di sisi kanan resolusi FHD (1920px+) — fixed dengan media query min-width

### Fitur Baru (v0.6.0)
- [x] Favicon: assets/favicon.svg (SVG, "R" inisial) + tag di <head>
- [x] Open Graph + Twitter Card meta tags
- [x] Dark / Light mode toggle (fixed kanan bawah, localStorage)
- [x] Back to Top button (muncul setelah scroll 300px)
- [x] Portfolio mockup: CSS device frames (phone + browser) per proyek
- [x] Tool icons grid: Simple Icons CDN + styled text fallback
- [x] Contact form: Formspree async submit + validasi + pesan status
- [x] Scroll reveal: AOS library via CDN
- [x] Portfolio filter animation: grid fade-out/in

### Keamanan & Tooling
- [x] Security audit: tidak ada credential/API key di file publik
- [x] .claude/ sudah di .gitignore (berisi path lokal Windows)
- [x] .claude-prompts/ dibuat untuk cross-device sync
- [x] Dev server (server.js) menggunakan Node.js built-in only

---

## 🔲 Belum Selesai / To-Do

### Assets (manual — perlu dilakukan oleh Rico)
- [ ] Upload `Rico_Tri_Wibowo_CV.pdf` ke folder `/assets/`
- [ ] Upload foto profil ke `/assets/photo.jpg`
  - Setelah upload: hapus `display: none` dari `.about-photo` di styles.css
  - Ganti `<div class="photo-box"><span>RTW</span></div>` dengan `<img src="assets/photo.jpg" alt="Rico Tri Wibowo" />`
- [ ] Generate favicon PNG dari favicon.svg (gunakan realfavicongenerator.net)
  - Upload: `assets/favicon-16x16.png`, `assets/favicon-32x32.png`, `assets/apple-touch-icon.png`
- [ ] Buat og-image.jpg (1200×630px) untuk OG/Twitter preview
  - Upload ke `assets/og-image.jpg`

### Contact Form — Setup Formspree
- [ ] Daftar di formspree.io (free tier: 50 pesan/bulan)
- [ ] Buat form baru → copy Form ID (format: `xxxxxyyy`)
- [ ] Ganti `REPLACE_WITH_YOUR_ID` di `index.html` (action URL form) dengan Form ID
- [ ] Test kirim pesan dari halaman live

### GitHub & Deployment
- [ ] Buat repository di github.com/ricobowo/rico-portfolio
- [ ] Push initial commit ke GitHub
- [ ] Connect repo ke Vercel untuk auto-deploy
- [ ] Test live URL hasil deployment Vercel
- [ ] Update og:url dan og:image URL di index.html sesuai URL live Vercel
- [ ] Tambahkan custom domain (opsional)

### Peningkatan Opsional
- [ ] Pertimbangkan apakah server.js perlu di .gitignore (tidak sensitif, tapi tidak dipakai di Vercel)
- [ ] Tambah Google Analytics atau Vercel Analytics (opsional)

---

## 📝 Catatan untuk Sesi Berikutnya

1. **Prioritas utama:** Setup Formspree (ganti REPLACE_WITH_YOUR_ID), upload CV, push ke GitHub
2. **Favicon PNG:** Generate dari favicon.svg di realfavicongenerator.net, upload ke /assets/
3. **OG image:** Buat og-image.jpg (1200×630px), upload ke /assets/ sebelum deploy
4. **Setelah live di Vercel:** Update og:url dan og:image URL di index.html `<head>` ke URL live
5. **Cek .gitignore** sebelum push — pastikan `.claude/` masuk daftar ignore
6. **Workflow sinkronisasi:** Lihat `.claude-prompts/prompts/general.md`
