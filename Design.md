# BudJet Landing Page - Design System & Architecture

Dokumen ini menjelaskan struktur desain, token visual, dan arsitektur komponen dari Landing Page BudJet versi terbaru (v2). Landing page ini dirancang untuk memberikan kesan modern, dinamis, dan terpercaya bagi pengguna aplikasi keuangan mahasiswa.

## 1. Design Tokens (Variabel CSS Global)

Semua elemen visual menggunakan token desain terpusat yang didefinisikan pada `:root` di `style.css`. Hal ini memastikan konsistensi warna, tipografi, dan spasi di seluruh komponen.

### 🎨 Palet Warna
- **Warna Utama (Aksen):**
  - `--color-lime`: `#d4e866` (Warna utama untuk tombol CTA, highlight, dan background bagian ulasan)
  - `--color-lime-dark`: `#b8cc44` (Digunakan untuk efek hover tombol)
  - `--color-lime-glow`: `rgba(212, 232, 102, 0.25)` (Digunakan untuk efek cahaya/badge)
- **Warna Gelap (Background & Teks):**
  - `--color-dark`: `#111827` (Warna teks utama dan background navbar/footer)
  - `--color-dark-2`: `#1a2235`
  - `--color-card-dark`: `#1a2030`
- **Warna Terang & Netral:**
  - `--color-white`: `#ffffff` (Background utama body)
  - `--color-light-bg`: `#f8f9fa` (Background kartu About)
  - `--color-slate`: `#64748b` (Warna teks sekunder/deskripsi)

### 🔤 Tipografi
- **Primary Font:** `'Inter', sans-serif` (Digunakan untuk Headline, Body text, dan CTA)
- **Secondary Font:** `'Plus Jakarta Sans', sans-serif` (Digunakan untuk Subtext, Navbar Links, Badge, dan Detail kecil)

### 📐 Dimensi & Spasi
- **Border Radius:** Mulai dari `--radius-sm` (12px) untuk kartu kecil, hingga `--radius-pill` (999px) untuk tombol dan navbar bulat.
- **Shadows:** 
  - `--shadow-card`: `0 0 45px 9px rgba(0, 0, 0, 0.10)`
  - `--shadow-lime`: `0 8px 32px rgba(212, 232, 102, 0.35)` (Efek glow pada tombol CTA utama)

---

## 2. Arsitektur Komponen (Sections)

Halaman utama (`App.jsx`) dirender dengan urutan komponen/seksi sebagai berikut. Setiap komponen dibungkus dengan efek `Reveal` untuk animasi masuk (fade/slide in) saat di-scroll.

### 导航 Navbar
- **Posisi:** Sticky di bagian atas dengan efek *glassmorphism* (blur backdrop) saat di-scroll.
- **Desain:** Berbentuk pill melengkung (rounded full) dengan background `--color-dark`.
- **Elemen Kanan:** Terdapat link navigasi yang memiliki efek garis bawah `--color-lime` saat hover. Terdapat garis pemisah vertikal (`separator`) yang memisahkan link navigasi dengan tombol aksi (Masuk - *Ghost Button* & Daftar - *Lime Pill Button*).

### 1. Hero Section (`#beranda`)
- **Fokus Utama:** Kesan pertama dengan *headline* tebal "Kelola Lebih Cerdas, Hidup Lebih Baik".
- **Visual Kiri:** Menampilkan *mockup* iPhone yang melayang (animasi `heroFloat`) lengkap dengan bayangan lantai interaktif (`shadowFloat`) yang mengecil saat HP bergerak ke atas.
- **Aksi (CTA):** Terdapat 2 tombol utama:
  1. **Unduh Sekarang:** Tombol *Primary* berwarna lime dengan ikon Google Play dan efek *shine* yang berjalan terus menerus.
  2. **Lihat Fitur:** Tombol *Ghost* bergaris luar warna gelap.
- **Elemen Tambahan:** Terdapat "Badge Baru" (Baru di Play Store) dengan titik hijau berkedip (`pulseDot`), dan *Trust Badges* (Rating 4.8, 10.000+ Pengguna, Gratis).

### 2. Stats Section (`stats`)
- **Fokus Utama:** Menampilkan angka atau statistik pencapaian aplikasi (berlatar belakang putih dengan angka konter yang beranimasi).

### 3. About Section (`#tentang`)
- **Desain Layout:** Kartu besar berlatar putih dengan bayangan (`--shadow-card`).
- **Isi Kiri:** Judul "Tentang BudJet" dan teks deskriptif penjelasan aplikasi.
- **Isi Kanan (Value Proposition):** Terdapat beberapa kartu kecil berlatar abu-abu muda (`--color-light-bg`) dengan ikon yang memiliki efek geser horizontal (*translate X*) saat di-hover.

### 4. Features Section (`#fitur`)
- **Tema:** Mode gelap dengan background `--color-dark` untuk memberikan kontras pada halaman.
- **Navigasi Tab:** Menggunakan sistem *Tab* berbentuk pill untuk berpindah-pindah fitur. Tab aktif berwarna lime.
- **Tampilan Fitur:** Kartu presentasi bergaris putih transparan tipis (`border: 2.5px solid rgba(...)`) berisi gambar *mockup* ganda (kiri: mockup belakang, kanan: mockup depan dengan bayangan).

### 5. Review Section (`#ulasan`)
- **Tema Warna:** Menarik perhatian dengan *background* utuh berwarna `--color-lime`.
- **Layout Kartu ulasan:** Memiliki *border* hitam tebal di sekitar bungkus utamanya untuk kesan retro-modern.
- **Animasi Marquee/Infinite Scroll:** Testimoni dibagi menjadi dua kolom vertikal. Kolom kiri bergeser ke bawah (`scrollDown`), kolom kanan bergeser ke atas (`scrollUp`). Animasi ini otomatis berjalan dan akan berhenti (*paused*) saat pengguna mengarahkan kursor/hover di atas kolom.
- **Desain Kartu Ulasan:** Menampilkan avatar warna-warni dinamis (berdasarkan inisial nama), rating bintang 5, teks kutipan, dan label "Terverifikasi".

### 6. Download Section (`#download`)
- **Fokus Utama:** Ajakan bertindak (CTA) terakhir di bagian bawah, menggunakan gradient gelap elegan untuk menonjolkan tombol unduh.

### Footer
- Menampilkan logo BudJet.
- **Kolom Link:** Aplikasi (Beranda, Tentang, Fitur, Ulasan, Unduh) dan Bantuan (GitHub, Laporkan Bug).
- **Elemen Bawah:** Tulisan hak cipta, "Dibuat dengan ❤️ di Indonesia", dan tautan langsung ke Play Store.

---

## 3. Interaksi & Animasi Kunci (UX)
- **Hover Button:** Semua tombol CTA memiliki interaksi geser ke atas (`translateY(-2px)`) dan pendaran bayangan.
- **Hero Image & Shadow:** Animasi `keyframes` yang menyinkronkan posisi HP yang melayang dengan memudarnya bayangan.
- **Review Scroll:** Memberikan nuansa konten yang terus berjalan secara natural.
- **Navbar Blur:** *Backdrop-filter blur* memberikan tampilan *premium* saat menimpa elemen di bawahnya.
