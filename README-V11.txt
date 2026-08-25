PORTFOLIO V11 - CLEAN GOOGLE DRIVE PLAYER

Tujuan:
- Mockup HP hanya menampilkan poster video + 1 tombol Play.
- Tidak ada iframe Google Drive di dalam mockup, sehingga kontrol Play tidak dobel.
- Saat Play ditekan, Google Drive /preview dibuka di modal 9:16 yang lebih besar.
- Video tetap berasal dari Google Drive. Tidak ada file MP4 lokal di paket ini.
- File lokal baru hanya 4 poster WebP kecil di assets/video-posters/.

Cara pasang:
1. Replace index.html, styles.css, script.js.
2. Copy folder assets/video-posters/ ke folder assets project Anda. Jangan hapus asset lama.
3. Hard refresh Ctrl+F5.
4. Git: git add . && git commit -m "Clean mobile video player" && git push
