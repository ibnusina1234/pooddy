# Pooddy 💖 — Frontend (React + Vite + Tailwind)

Website katalog pudding caramel dengan vibes Gen Z: pink pastel, animasi lembut, dan tombol pesan via WhatsApp.

## 🚀 Jalankan Lokal
```bash
npm install
npm run dev
```

## 🧪 Build
```bash
npm run build
npm run preview
```

## 🔧 Konfigurasi
- Ganti nomor WA di `src/components/Hero.jsx` dan `src/components/ProductCard.jsx` jika perlu.
- Ubah data produk & gambar di `src/data/products.js` (saat ini memakai URL gambar dari Unsplash/Pexels).
- Untuk SEO, edit `index.html` meta tags.

## 📦 Deploy ke Vercel
1. Push folder ini ke GitHub sebagai repository.
2. Di Vercel, "New Project" → import repo → framework: **Vite** (deteksi otomatis).
3. Build Command: `vite build` (default), Output: `dist` (default).
