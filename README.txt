CUSTOM VIDEO PLAYER FIX — DESKTOP + MOBILE CONSISTENT UI

Perubahan utama:
- Seluruh iframe Google Drive /preview untuk video diganti menjadi HTML5 <video>.
- Player memakai kontrol buatan sendiri (play/pause, progress, time, mute), bukan kontrol Google Drive/native.
- Tampilan kontrol dibuat konsisten di desktop dan mobile.
- Video tetap playsinline di HP agar tidak otomatis mengambil alih layar.
- Source memakai direct Google Drive usercontent download URL dari file ID yang sama.
- Poster lokal dipakai dari assets/sleep-raw.webp, sleep-final.webp, neck-pain.webp, affiliate-watch.webp.
- Jika direct stream gagal, player menampilkan tombol Open video sebagai fallback ke Google Drive preview.
- Fix email dan responsive mobile V2 tetap dipertahankan.
- Cache-busting CSS/JS dinaikkan ke custom-video-v1.

Cara pasang:
1. Replace index.html, styles.css, script.js, dan README.txt di root project.
2. Pastikan file poster di folder assets tetap ada.
3. Pastikan seluruh video Google Drive memiliki akses Anyone with the link / Viewer agar direct source dapat dimuat.
4. git add .
5. git commit -m "Use custom video player on desktop and mobile"
6. git push origin main

Catatan:
Google Drive bukan CDN video. Direct streaming dari Drive dapat berubah/terbatas oleh Google. Jika suatu video menampilkan fallback Open video, solusi paling stabil adalah memindahkan MP4 ke hosting/CDN video atau menaruh MP4 langsung di assets/videos lalu mengganti source-nya.
