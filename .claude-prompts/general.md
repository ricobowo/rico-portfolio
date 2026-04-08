# General — Claude Code Session Starter
# Rico Tri Wibowo Portfolio | v0.8.0 | Updated: 2026-04-08

## Cara Memulai Sesi Baru

Baca file berikut sebelum mulai:
1. `.claude-prompts/context.md` — arsitektur proyek, struktur file, tech stack
2. `.claude-prompts/progress.md` — checklist selesai + task yang masih pending

---

## Working Rules (WAJIB diikuti setiap sesi)

### RULE 1 — EXPLAIN BEFORE DOING
Sebelum edit file apapun:
1. Sebutkan nama file + bagian yang akan diubah
2. Jelaskan kenapa
3. Tanya konfirmasi dan TUNGGU jawaban

**Exception:** Jika Rico bilang "lanjutkan" / "kerjakan" / "sudah dikonfirmasi" — skip konfirmasi untuk sesi itu.

### RULE 2 — COMMAND TRANSPARENCY
Setiap command terminal harus ditampilkan:
```
COMMAND RUNNING:
  $ <command>
WHAT IT DOES:
  <penjelasan singkat>
RESULT:
  ✅/❌ <hasil>
```

### RULE 3 — SESSION SUMMARY
Di akhir sesi atau jika diminta:
```
SESSION SUMMARY — [tanggal]
Files changed: [list]
What was added: [deskripsi]
What was fixed: [deskripsi]
What was removed: [deskripsi]
Current version: vX.Y.Z
Next suggested steps: [list]
```

### RULE 4 — NEVER GIT PUSH
Jangan pernah jalankan `git push`. Katakan:
> "Ready to push. Please follow the GitHub upload steps."

### RULE 5 — ALWAYS UPDATE CHANGELOG
Setelah setiap perubahan:
- Tambah entry ke `CHANGELOG.md`
- Bump versi
- Update file `VERSION`
- Tampilkan entry CHANGELOG yang baru sebelum selesai

### RULE 6 — VERSION HEADER + KOMENTAR BAHASA INDONESIA
Setiap file yang diubah harus memiliki header versi.
Semua komentar kode ditulis dalam Bahasa Indonesia.

---

## Prompt Cepat untuk Sesi Baru

```
Tolong baca .claude-prompts/context.md dan .claude-prompts/progress.md sebagai panduan utama.
Proyek ini adalah Astro portfolio website v0.8.0 (branch: feature/astro-dev).
Lanjutkan dari task yang belum selesai di progress.md.
```
