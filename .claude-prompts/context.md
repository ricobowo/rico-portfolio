# Project Context — Rico Tri Wibowo Portfolio

## Deskripsi Project
Website portofolio profesional Rico Tri Wibowo sebagai QA Engineer & Project Manager.
Terdapat dua versi yang hidup di branch terpisah.

---

## Branch & Versi

| Branch               | Tech Stack                    | Versi  | Status         |
|----------------------|-------------------------------|--------|----------------|
| `main`               | Vanilla HTML / CSS / JS       | v0.6.2 | Live, stable   |
| `feature/astro-dev`  | Astro 5 + Tailwind CSS v3     | v0.7.0 | Aktif dikerjakan |

---

## Tech Stack — Astro (feature/astro-dev) ← AKTIF

| Layer       | Teknologi                                          |
|-------------|----------------------------------------------------|
| Framework   | Astro 5 — static output (zero JS di browser)       |
| Styling     | Tailwind CSS v3 — custom colors di tailwind.config.js |
| Syntax HL   | Shiki (built-in Astro) — untuk tab about.ts        |
| Font        | Inter — Google Fonts                               |
| Icons       | Inline SVG di SocialIcon.astro                     |
| Hosting     | Vercel — auto-deploy dari GitHub branch            |
| Repo        | github.com/ricobowo/rico-portfolio                 |

---

## Struktur File — Astro

```
/
├── public/
│   ├── img/                    # Favicon PNG set + logo.svg + meta.png (OG)
│   ├── cv/                     # Rico_Tri_Wibowo_CV.pdf
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── profile.png         # Placeholder foto (belum dipakai — pakai RTW inisial)
│   ├── components/
│   │   ├── Profile.astro        # Nama, jabatan, lokasi, bio, stats row
│   │   ├── Contact.astro        # Terminal widget + tombol CV + social icons
│   │   ├── Socials.astro        # Data dan render icon sosial media
│   │   ├── SocialIcon.astro     # SVG icon per platform (switch case)
│   │   ├── ContentLink.astro    # Tombol tab (label HTML untuk radio input)
│   │   ├── ContentExperience.astro  # Tab 1: pengalaman kerja (5 posisi)
│   │   ├── ContentProjects.astro    # Tab 2: portofolio (6 proyek)
│   │   ├── ContentAbout.astro       # Tab 3: skill sebagai TypeScript code block
│   │   └── ContentReadme.astro      # Tab 4: ringkasan profesional gaya README
│   ├── layouts/
│   │   └── Layout.astro         # Shell HTML + semua meta SEO (OG, Twitter, Dublin Core)
│   ├── pages/
│   │   └── index.astro          # Satu-satunya halaman — tab system + layout dua panel
│   └── styles/
│       └── global.scss          # CSS reset saja (margin/padding/box-sizing)
├── astro.config.mjs             # Config Astro: site URL, integrations (Tailwind, sitemap, compress)
├── tailwind.config.js           # Warna tema + font family Inter
├── tsconfig.json                # TypeScript config (extends astro/strict)
├── package.json                 # Dependencies dan npm scripts
├── CHANGELOG.md                 # Riwayat versi
└── VERSION                      # Versi terkini (angka saja)
```

---

## Arsitektur Layout

```
Layout dua panel (CSS Flexbox):
│
├── Panel Kiri (2/5 lebar)  — sticky, tidak scroll
│   ├── Profile.astro        → inisial RTW + nama + jabatan + lokasi + bio + stats
│   └── Contact.astro        → terminal widget + tombol CV + Socials.astro
│
└── Panel Kanan (4/5 lebar) — bisa scroll, tinggi 90vh
    ├── Tab bar (sticky)     → 4 tab label dari ContentLink.astro
    └── Konten tab (scroll)
        ├── Tab 1: experience.json → ContentExperience.astro
        ├── Tab 2: projects.md     → ContentProjects.astro
        ├── Tab 3: about.ts        → ContentAbout.astro (Shiki)
        └── Tab 4: README.md       → ContentReadme.astro
```

**Sistem Tab:** Pure CSS — hidden `<input type="radio">` + CSS `:checked` selector.
Tidak ada JavaScript. Tidak ada framework UI. Zero JS di browser.

---

## Sistem Warna (tailwind.config.js)

```js
colors: {
    primary:     '#2E86C1',  // Biru accent — judul, border aktif, hover
    navy:        '#0D1B2A',  // Background utama (gelap navy)
    'navy-card': '#0F2132',  // Background card (sedikit lebih terang dari navy)
    muted:       '#94A3B8',  // Teks sekunder / caption
}
```

Warna standar Tailwind yang dipakai: `gray-100` (teks utama), `gray-700` (border card), `green-400` (badge PM), `yellow-400` (badge Ops).

---

## Keputusan Teknis yang Sudah Diambil

- **Astro static output** — tidak ada server-side rendering, tidak ada API route
- **Zero JS di browser** — tab system pakai CSS :checked, tidak pakai Alpine/React/Vue
- **Tidak ada foto profil** — pakai inisial "RTW" (display: flex + letter) sampai foto tersedia
- **Semua konten di komponen** — tidak ada CMS, tidak ada MDX untuk konten utama
- **Tab urutan**: experience.json → projects.md → about.ts → README.md
- **Font mono hanya untuk**: terminal widget, tab filename, stats table di README tab
- **Komentar kode**: Bahasa Indonesia, mudah dipahami orang awam

---

## Informasi Konten (Data Real)

- **Nama:** Rico Tri Wibowo
- **Email:** ricobowo10@gmail.com
- **LinkedIn:** linkedin.com/in/rico-tri-wibowo
- **Twitter/X:** @ricobowo_
- **Instagram:** @ricobowo_
- **CV:** /public/cv/Rico_Tri_Wibowo_CV.pdf
- **Lokasi:** Bandung, Indonesia

---

## Vercel Preview URL (branch feature/astro-dev)

```
https://rico-portfolio-git-feature-astro-dev-rickobowo96-4030s-projects.vercel.app
```

---

## File yang TIDAK Masuk GitHub (.gitignore)

```
node_modules/    — dependency npm, di-install ulang via npm install
dist/            — hasil build Astro, di-generate ulang via npm run build
.astro/          — cache internal Astro
.claude/         — config lokal Claude Code (path Mac/Windows)
.claude-prompts/ — file konteks sesi ini (tidak perlu publik)
.env             — variabel environment (belum dipakai)
```
