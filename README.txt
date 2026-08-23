GOOGLE DRIVE VIDEO MOCKUP FIX

Perubahan utama:
- Video Google Drive tetap menggunakan iframe /preview yang sama.
- Mockup HP hanya membungkus player 9:16, tidak lagi memaksa rasio 9:18.6.
- Decorative notch/layer lama dihapus agar tidak mengganggu player Google Drive.
- Mobile: lebar mockup mengikuti sekitar 82% viewport, max 320px.
- BEFORE / AFTER otomatis menjadi satu kolom di layar <= 640px.
- Desktop tetap side-by-side.

Cara pakai:
1. Paling aman: cukup replace styles.css lama dengan styles.css di folder ini.
2. Jangan ubah link Google Drive di index.html.
3. Setelah upload, hard refresh Ctrl+F5 atau clear cache browser.

MOBILE LAYOUT FIX
- Responsive layout dipaksa aktif pada HP/tablet kecil, termasuk bila browser meminta desktop-sized viewport.
- Overflow horizontal diperketat agar teks/konten tidak terpotong ke kiri/kanan.
- Navbar mobile memakai hamburger, grid menjadi satu kolom, dan tombol Contact menjadi full-width.
- styles.css dan script.js diberi version query di index.html agar cache HP tidak memakai file lama.

UPLOAD
Replace index.html, styles.css, script.js, dan README.txt lalu git add . / commit / push.


MOBILE LAYOUT FIX V2
- Mempertahankan fix Email Me desktop/mobile.
- Memaksa layout mobile pada perangkat sentuh walau Chrome meminta Desktop site.
- Menormalkan desktop-sized viewport di HP supaya halaman tidak mengecil seperti desktop.
- Cache busting styles.css dan script.js dinaikkan ke versi V2.

Setelah replace file di root project:
  git add .
  git commit -m "Fix mobile viewport rendering v2"
  git push origin main

Sesudah deploy, buka ulang website di tab baru.
