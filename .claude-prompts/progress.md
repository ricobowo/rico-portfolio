# Progress — Task Checklist
# Rico Tri Wibowo Portfolio | v0.8.0 | Updated: 2026-04-08

---

## ✅ Selesai

### v0.7.0 — Migrasi ke Astro
- [x] Setup Astro 5 + Tailwind CSS v3
- [x] Layout 2-panel (kiri profil, kanan tab)
- [x] Sistem tab CSS-only (4 tab: experience / projects / about / readme)
- [x] ContentExperience — 5 posisi kerja
- [x] ContentProjects — 6 proyek awal
- [x] ContentAbout — TypeScript code block (Shiki)
- [x] ContentReadme — professional summary gaya GitHub README
- [x] Profile, Contact, Socials, SocialIcon components
- [x] Layout.astro dengan full SEO (OG, Twitter Card, Dublin Core)
- [x] Favicon set (SVG + PNG di public/img)
- [x] CV di public/

### v0.7.1 — Perbaikan tab
- [x] Urutan tab: experience → projects → about → readme
- [x] ContentReadme redesign
- [x] Komentar Bahasa Indonesia di semua komponen

### v0.7.2 — Konten & tracking
- [x] Semua konten tampilan ke English
- [x] GitHub icon ditambahkan ke Socials
- [x] .claude-prompts dilepas dari git tracking

### v0.8.0 — Portfolio redesign + expand
- [x] ContentProjects redesign: 11 proyek, format kartu baru
- [x] Filter CSS-only: All | QA Testing | Project Management | Operations
- [x] Metrics ditampilkan sebagai pills individual
- [x] Tambah kategori Operations (PSI Indonesia)
- [x] 5 proyek PM baru (Astra Digital, Kalbe Nutrisional, Mulia Display, Cerebrofort)
- [x] Socials reorder: Email → LinkedIn → Instagram → X → GitHub
- [x] Socials layout: grid grid-cols-5 (selalu 5 kolom rata)

---

## 🔲 Pending / Belum Dikerjakan

### Konten
- [ ] Profile photo — upload `src/assets/profile.jpg` (sekarang pakai placeholder RTW)
- [ ] Update stats Profile.astro jika jumlah proyek/pengalaman bertambah (sekarang: 5+ yrs, 15+ projects, 300+ test cases)

### SEO & Meta
- [ ] Verifikasi OG image `meta.png` di `public/img/` — pastikan terbaca oleh WhatsApp/LinkedIn
- [ ] Cek semua favicon PNG di `public/img/` terbaca dengan benar

### Deploy
- [ ] Set `feature/astro-dev` sebagai default branch di GitHub Settings → Branches
- [ ] Setelah siap: merge `feature/astro-dev` → `main` → update default branch kembali ke `main`
- [ ] Push branch `feature/astro-dev` ke GitHub (Rico handle sendiri)

### Nice to have (belum dikonfirmasi)
- [ ] Animasi transisi filter proyek (CSS atau JS minimal)
- [ ] Dark/light mode toggle (saat ini always dark)
- [ ] Mobile: cek tab bar overflow-x di layar kecil

---

## 📋 Catatan Penting

- **Jangan push ke GitHub** — Rico handle sendiri semua git push
- **Branch `main`** — jangan diubah, masih berisi vanilla HTML v0.6.2
- **`.claude-prompts/`** — gitignored, hanya ada di lokal
- **File tidak perlu di-commit**: `node_modules/`, `dist/`, `.astro/`, `.claude/`, `.claude-prompts/`
- **Filter system** — menggunakan CSS sibling selector, harus ditest di browser untuk konfirmasi

---

## 🗂 File yang Perlu Di-push ke `feature/astro-dev`

```
src/
astro.config.mjs
tailwind.config.js
tsconfig.json
package.json
package-lock.json
public/
CHANGELOG.md
VERSION
.gitignore
```

**Jangan push:**
```
node_modules/
dist/
.astro/
.claude/
.claude-prompts/
rico-portfolio/   ← folder lama HTML/CSS/JS (tidak relevan di branch Astro)
assets/           ← favicon PNG mentah (sudah dipindah ke public/img/)
```
