# AturUang

Aplikasi pengelola keuangan pribadi berbasis HTML, CSS, JavaScript Vanilla, dan Vite.

## Menjalankan di Windows 11

1. Ekstrak ZIP.
2. Buka folder `aturuang` di Visual Studio Code.
3. Buka Terminal > New Terminal.
4. Jalankan `npm install`.
5. Jalankan `npm run dev`.
6. Buka alamat lokal yang ditampilkan Vite (biasanya http://localhost:5173).

## Build untuk produksi

Jalankan `npm run build`. Hasil build ada di folder `dist`.

## Fitur versi awal

- Dashboard ringkasan dan grafik arus kas.
- Catat pemasukan dan pengeluaran.
- Filter dan hapus transaksi.
- Anggaran bulanan per kategori.
- Catatan utang dan cicilan, termasuk penandaan lunas.
- Target tabungan, setoran, dan penarikan.
- Laporan dan ekspor CSV.
- Pengaturan uang saku, backup/restore JSON, dan reset data.
- Data tersimpan di LocalStorage browser.

## Catatan penting

Data contoh utang dan tabungan dimuat hanya saat LocalStorage AturUang belum berisi data. Aplikasi tidak meminta atau menyimpan PIN, password, maupun kredensial layanan keuangan. Data LocalStorage hanya tersedia pada browser dan perangkat tempat aplikasi digunakan. Buat backup JSON secara berkala.

Ini adalah MVP lokal untuk penggunaan pribadi, belum memiliki sinkronisasi cloud, login, enkripsi database, atau notifikasi sistem.
