# Prompt Siap Pakai — Rico Portfolio

Gunakan prompt di bawah ini saat memulai sesi kerja di device baru
atau setelah jeda panjang agar Claude langsung paham konteks project.

---

## 🚀 Prompt: Mulai Sesi Baru

```
Kita sedang mengerjakan website portofolio saya (Rico Tri Wibowo).

Sebelum mulai, baca dulu file berikut untuk mendapat konteks penuh:
- .claude-prompts/context.md   → arsitektur & keputusan teknis
- .claude-prompts/progress.md  → status terkini & to-do list
- CHANGELOG.md                 → riwayat versi
- VERSION                      → versi terkini

Setelah membaca, konfirmasi versi terkini dan apa yang belum selesai,
lalu tunggu instruksi saya.

Ingat working rules kita:
1. Jelaskan dulu sebelum mengubah file (Rule 1)
2. Tunjukkan command yang dijalankan (Rule 2)
3. Update CHANGELOG.md setiap sesi (Rule 3 + 5)
4. Jangan pernah git push (Rule 4)
5. Tambah version header di setiap file yang diubah (Rule 6)
```

---

## 🔧 Prompt: Lanjutkan Pekerjaan Spesifik

```
Kita sedang mengerjakan website portofolio saya.
Tech stack: HTML, CSS, vanilla JavaScript — tidak pakai framework.
Versi saat ini: lihat file VERSION.

[Tuliskan task spesifik yang ingin dikerjakan di sini]

Ikuti working rules: jelaskan dulu sebelum ubah file, update CHANGELOG,
jangan git push, tambah version header di file yang diubah.
```

---

## 📋 Prompt: Minta Session Summary

```
Tolong buatkan session summary untuk sesi kerja hari ini dalam format:

SESSION SUMMARY — [tanggal]
Files changed: [list]
What was added: [deskripsi]
What was fixed: [deskripsi]
What was removed: [deskripsi]
Current version: vX.Y.Z
Next suggested steps: [list]

Lalu update progress.md dengan status terbaru.
```

---

## 🔍 Prompt: Security Check Sebelum Push

```
Sebelum saya push ke GitHub (repo public), tolong lakukan security audit:
1. Scan semua file .html, .css, .js, .json, .md untuk:
   - API key, token, password, credential
   - Path lokal Windows (C:\Users\...)
   - Email atau data pribadi yang tidak seharusnya publik
   - URL internal atau localhost yang tertinggal
2. Cek .gitignore — pastikan .claude/ sudah masuk daftar ignore
3. Berikan laporan: aman atau tidak, dan apa yang perlu diperbaiki
```

---

## 📦 Prompt: Deploy ke Vercel

```
Tolong pandukan saya untuk deploy website portofolio ini ke Vercel:
1. Pastikan semua file sudah siap (tidak ada placeholder tersisa)
2. Pastikan .gitignore sudah benar
3. Berikan langkah-langkah push ke GitHub
4. Berikan langkah-langkah connect ke Vercel
Ingat: jangan jalankan git push sendiri — saya yang akan menjalankannya.
```
