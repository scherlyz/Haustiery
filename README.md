# Haustiery 🐾

## Deskripsi Proyek
**Haustiery** adalah prototipe antarmuka pengguna (UI) berbasis web yang dirancang khusus untuk platform *e-commerce* dan layanan hewan peliharaan (*pet shop & care*). Proyek ini dikembangkan sebagai pemenuhan **Project Ujian Akhir Semester (UAS) mata kuliah Workshop UI**.

Fokus utama dari proyek ini adalah menyajikan pengalaman pengguna (UX) yang intuitif dan desain antarmuka yang bersih (*clean design*). Sistem merangkum seluruh alur pengguna secara visual, mulai dari penjelajahan katalog produk, manajemen keranjang belanja, hingga penyediaan *dashboard* khusus yang membedakan hak akses antara pelanggan, penjual, dan administrator.

## Fitur & Simulasi Antarmuka
Proyek ini memetakan berbagai halaman statis yang saling terhubung untuk membentuk satu ekosistem web yang utuh:
* **Autentikasi & Profil:** Halaman `login.html` dan `register.html`, dilengkapi dengan manajemen profil (`user-profile.html` & `admin-profile.html`).
* **Katalog & Transaksi (*E-commerce*):** * Penjelajahan produk hewan peliharaan (`product-catalog.html` & `product-detail.html`).
  * Alur pembelian yang jelas melalui `cart.html` dan `checkout.html`.
  * Pelacakan pesanan (`transaction-history.html`, `transaction-details.html`, `order-confirmation.html`).
* **Multi-Role Dashboard:**
  * **User Dashboard** (`dashboard-user.html`): Antarmuka untuk pelanggan memantau aktivitas mereka.
  * **Seller/Admin Dashboard** (`dashboard-seller.html`): Panel manajemen komprehensif untuk mengatur produk (`manage-products.html`), menulis konten edukasi (`manage-articles.html`), dan mengawasi data pengguna (`user-management.html`).
* **Konten Edukasi/Blog:** Simulasi halaman artikel seputar dunia hewan (`archive-article.html` & `article-detail.html`).

## Teknologi yang Digunakan
* **Frontend:** HTML5, CSS (Terintegrasi untuk tata letak responsif), dan Vanilla JavaScript (`scripts.js` untuk interaktivitas DOM dasar).
* **Aset:** Penggunaan gambar yang relevan (produk, ikon, *carousel*, dan visual hewan peliharaan) untuk memperkuat identitas *brand* Haustiery.

## Panduan Menjalankan Proyek
Proyek ini dibangun menggunakan teknologi *frontend* statis sehingga dapat dijalankan dengan sangat mudah tanpa memerlukan konfigurasi *server* lokal yang rumit.

1. Kloning repositori ini ke dalam mesin lokal Anda:
   ```bash
   git clone [https://github.com/scherlyz/Haustiery.git](https://github.com/scherlyz/Haustiery.git)
