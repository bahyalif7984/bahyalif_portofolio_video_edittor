YOUTUBE AFTER VIDEO UPDATE

Perubahan:
- AFTER / FINAL sekarang memakai YouTube video ID: hjEC0rCkHwo
- Player memakai URL canonical /embed/, bukan /shorts/.
- playsinline=1 dipertahankan untuk mobile.
- script.js ikut diperbarui untuk menjaga URL embed tetap sinkron.
- BEFORE / RAW, Health Explainer, dan Affiliate belum diubah.

Cara test:
1. Replace index.html dan script.js di project.
2. Jalankan lewat Live Server atau deploy ke GitHub Pages/Vercel.
3. Jangan menilai YouTube embed lewat file:// karena referer browser bisa hilang.
