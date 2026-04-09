# Prompt Siap Pakai — Rico Portfolio

Gunakan prompt di bawah ini saat memulai sesi kerja baru
agar Claude langsung paham konteks project tanpa harus dijelaskan dari awal.

---

## Mulai Sesi Baru

```
Kita sedang mengerjakan website portofolio saya (Rico Tri Wibowo).

Sebelum mulai, baca dulu file-file berikut untuk mendapat konteks penuh:
- .claude-prompts/context.md   → arsitektur, tech stack, keputusan teknis
- .claude-prompts/progress.md  → status terkini dan to-do list
- CHANGELOG.md                 → riwayat versi
- VERSION                      → versi terkini

Setelah membaca, konfirmasi:
1. Versi terkini dan branch yang aktif
2. Apa yang sudah selesai
3. Apa yang belum selesai

Lalu tunggu instruksi saya sebelum mulai mengerjakan apapun.
```

---

## Lanjutkan Pekerjaan Spesifik

```
Kita sedang mengerjakan website portofolio saya.
Branch aktif: feature/astro-dev
Tech stack: Astro 5 + Tailwind CSS v3
Versi saat ini: lihat file VERSION

[Tuliskan task spesifik yang ingin dikerjakan di sini]

Hal yang perlu diingat:
- Komentar kode pakai Bahasa Indonesia yang mudah dipahami
- Konten tampilan (teks yang terlihat user) pakai Bahasa Inggris
- Jangan git commit atau git push — saya yang handle sendiri
- Update CHANGELOG.md, VERSION, README.md, context.md, progress.md setiap ada perubahan
```

---

## Setup Device Baru (setelah clone repo)

```bash
# 1. Clone repo dan masuk ke folder
git clone https://github.com/ricobowo/rico-portfolio.git
cd rico-portfolio

# 2. Pindah ke branch Astro
git checkout feature/astro-dev

# 3. Install dependencies
PATH="/usr/local/bin:$PATH" npm install
# atau jika npm tidak ditemukan:
/usr/local/bin/node /usr/local/lib/node_modules/npm/bin/npm-cli.js install

# 4. Jalankan dev server
PATH="/usr/local/bin:$PATH" npm run dev
# Dev server akan jalan di http://localhost:4321

# 5. Copy .claude-prompts/ ke folder project (manual — tidak ada di GitHub)
```

---

## Minta Session Summary

```
Tolong buatkan ringkasan sesi kerja hari ini dalam format:

SESSION SUMMARY — [tanggal]
Branch: [nama branch]
Files changed: [list file yang diubah]
What was added: [deskripsi singkat]
What was fixed: [deskripsi singkat]
Current version: vX.Y.Z
Next suggested steps: [list langkah berikutnya]

Setelah itu, update progress.md dan context.md dengan status terbaru.
```

---

## Security Check Sebelum Push

```
Sebelum saya push ke GitHub (repo public), tolong lakukan security audit:

1. Scan semua file di /src, astro.config.mjs, tailwind.config.js untuk:
   - API key, token, password, credential
   - String REPLACE_WITH atau placeholder yang belum diganti
   - Path lokal (C:\Users\... atau /Users/...)
   - URL localhost yang tertinggal di kode produksi

2. Cek .gitignore — pastikan ini sudah masuk daftar:
   - node_modules/
   - dist/
   - .astro/
   - .claude/
   - .claude-prompts/
   - .env

3. Berikan laporan: AMAN atau PERLU DIPERBAIKI, beserta detailnya.
```

---

## Panduan Switch Branch (untuk Rico)

```bash
# Cek branch aktif sekarang
git branch --show-current

# Pindah ke vanilla (main)
git checkout main

# Pindah ke Astro (feature/astro-dev)
git checkout feature/astro-dev

# Lihat semua branch yang ada
git branch
```

Catatan: setelah switch ke feature/astro-dev, jalankan `npm install`
jika node_modules belum ada (karena node_modules di-gitignore).

---

## Panduan Deploy Manual ke Vercel

```
1. Push ke GitHub branch feature/astro-dev
   → Vercel otomatis build preview deployment

2. Kalau mau jadikan production:
   - Buka Vercel Dashboard → Deployments
   - Klik ··· di deployment terbaru (feature/astro-dev)
   - Pilih "Promote to Production"

3. Production URL: rico-portfolio.vercel.app
   Preview URL: lihat di context.md
```
