# Project Context — Rico Tri Wibowo Portfolio

## Deskripsi Project
Website portofolio profesional Rico Tri Wibowo sebagai QA Engineer & Project Manager.
Dibangun dengan HTML, CSS, dan vanilla JavaScript — tanpa framework apapun.

---

## Tech Stack
| Layer      | Teknologi                              |
|------------|----------------------------------------|
| Markup     | HTML5 (semantic: section, main, aside) |
| Styling    | CSS3 — custom properties, CSS Grid, Flexbox |
| Scripting  | Vanilla JavaScript (ES6+)              |
| Font       | Inter — Google Fonts                   |
| Dev Server | Node.js (server.js) — zero dependency  |
| Hosting    | Vercel (static deployment)             |
| Repo       | github.com/ricobowo/rico-portfolio     |
| Branch     | main                                   |

---

## Struktur File
```
/
├── index.html          # Satu-satunya halaman HTML (single-page)
├── styles.css          # Semua styling — CSS variables di :root
├── script.js           # JS: IntersectionObserver, filter, hamburger
├── server.js           # Dev server lokal (Node.js built-in only)
├── CHANGELOG.md        # Riwayat versi project
├── VERSION             # Versi terkini (angka saja, mis. 0.5.2)
├── .gitignore          # Mengecualikan: .claude/, node_modules/, .env
├── .claude/            # ⚠️ Di-gitignore — tidak masuk GitHub
│   ├── launch.json     # Config dev server (berisi path lokal Windows)
│   └── settings.local.json
└── .claude-prompts/    # ✅ Masuk GitHub — untuk cross-device sync
    ├── context.md      # ← File ini
    ├── progress.md     # Status & checklist
    └── prompts/
        └── general.md  # Prompt siap pakai
```

---

## Layout Arsitektur
```
CSS Grid: sidebar (260px) | main content (1fr)
│
├── sidebar (dark: #0D1B2A) — sticky, tidak ikut scroll
│   ├── Nama + Jabatan + Tagline
│   ├── Nav links (IntersectionObserver → active state)
│   └── Social icons + Download CV + version badge
│
└── main-content (light: #F8F9FA) — scrollable
    ├── #hero     → badge + headline + CTA + stats (3 cards)
    ├── #about    → bio teks (foto disembunyikan)
    ├── #experience → timeline 2-kolom (5 jobs)
    ├── #portfolio  → filter + grid 2-kolom (6 projects)
    ├── #skills     → label kiri + tag pills kanan (5 kategori)
    ├── #contact    → 2 kartu (email + LinkedIn)
    └── footer
```

---

## CSS Variable System (ubah di sini → semua ikut)
```css
:root {
  --sidebar-bg:         #0D1B2A;
  --sidebar-text:       #FFFFFF;
  --sidebar-muted:      #94A3B8;
  --sidebar-nav-active: #2E86C1;
  --content-bg:         #F8F9FA;
  --content-text:       #1B2631;
  --content-muted:      #5D6D7E;
  --accent:             #2E86C1;
  --accent-light:       #EBF5FB;
  --accent-dark:        #1A5276;
  --card-bg:            #FFFFFF;
  --card-border:        #E8EDF2;
  --tag-bg:             #EBF5FB;
  --tag-text:           #1A5276;
}
```

---

## Keputusan Teknis yang Sudah Diambil
- **Tidak pakai framework** — pure HTML/CSS/JS agar ringan dan mudah di-host di Vercel
- **Satu file HTML** — single-page, smooth scroll ke anchor sections
- **CSS Grid untuk layout** — `260px 1fr`, sidebar sticky
- **IntersectionObserver** — deteksi section aktif tanpa scroll event (lebih efisien)
- **server.js** — hanya untuk dev lokal, tidak dibutuhkan di Vercel
- **Foto profil disembunyikan** — `display: none` di `.about-photo`
- **Footer version badge disembunyikan** — hanya sidebar yang menampilkan versi
- **section-inner--wide** — dipakai di Experience, Portfolio, Skills untuk menghindari ruang kosong kanan

---

## Informasi Konten (Real Data)
- **Email:** ricobowo10@gmail.com
- **LinkedIn:** linkedin.com/in/rico-tri-wibowo
- **CV:** /assets/Rico_Tri_Wibowo_CV.pdf (perlu di-upload manual)
- **Foto:** /assets/photo.jpg (belum di-upload)

---

## Dev Server Lokal
Node.js path: `C:\Users\Rico Jr\AppData\Local\atom\app-1.60.0\resources\app\apm\bin\node.exe`
Command: jalankan via Claude Code preview, atau manual:
```
node server.js
```
Buka: http://localhost:3000

---

## Fitur Aktif (v0.6.0+)
- **Favicon:** `assets/favicon.svg` — SVG "R" inisial. PNG variants perlu di-generate manual.
- **OG/Twitter meta:** URL placeholder `rico-tri-wibowo.vercel.app` — update setelah live deploy
- **Dark mode:** Toggle fixed kanan bawah, `data-theme="dark"` di `<html>`, localStorage
- **Back to Top:** Fixed button, muncul setelah scroll 300px
- **AOS:** CDN `cdnjs.cloudflare.com/ajax/libs/aos/2.3.4`, init di script.js via `initScrollAnimations()`
- **Tool icons:** Simple Icons CDN `cdn.simpleicons.org/{slug}/{hex}` + text fallback
- **Portfolio mockups:** CSS device frames (`.mockup-phone` / `.mockup-browser`) di atas setiap kartu
- **Contact form:** Formspree — ganti `REPLACE_WITH_YOUR_ID` di `index.html` dengan Form ID

## Versi Terkini
Lihat file `VERSION` dan `CHANGELOG.md` untuk versi terbaru.
