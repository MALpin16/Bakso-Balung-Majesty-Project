# Bakso-Balung-Majesty-Project

[![Open in Bolt](https://bolt.new/static/open-in-bolt.svg)](https://bolt.new/~/sb1-9h7bdxvf)

## Integrasi Analytics & WhatsApp tracking

- Tambahkan variable lingkungan untuk Google Analytics 4 di file `.env` (root proyek):

```bash
# ID GA4 contoh: G-XXXXXXXXXX
VITE_GA_ID=G-XXXXXXXXXX
# (opsional) nomor WA internasional tanpa tanda +, contoh untuk Indonesia: 6287760216223
VITE_WA_NUMBER=6287760216223
```

Setelah menambahkan, jalankan ulang dev server `npm run dev`.

Kode akan memuat script GA4 jika `VITE_GA_ID` tersedia dan akan mengirim event `whatsapp_click` setiap kali pengguna menekan tombol WhatsApp di halaman.
