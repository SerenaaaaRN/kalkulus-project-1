# 🧮 Kalkulus Solver: 1st Order Linear ODEs

Website interaktif untuk menyelesaikan **Persamaan Diferensial Linear Orde 1** dengan visualisasi grafik dan langkah-langkah penyelesaian (step-by-step solution).

Project ini disusun untuk memenuhi tugas besar mata kuliah **Kalkulus 1** di **Universitas Sriwijaya**.

🔗 **Live Demo:** https://kalkulusproject.vercel.app/

---

## 👥 Anggota Kelompok

Project ini dikembangkan oleh mahasiswa Teknik Informatika (Angkatan 2025):

| Nama | Peran |
| :--- | :--- |
| **Aditiah Okta Romadhon** | Pemateri & Research |
| **Dhea Aurellia** | Pemateri & Research |
| **Duhairillah** | Developer (Fullstack) & Moderator |
| **Shafin Maulana** | Pemateri & Research |

---

## 📖 Tentang Project

Aplikasi ini dirancang untuk menyelesaikan masalah matematika khusus bentuk:
$$\frac{dy}{dx} + P(x)y = Q(x)$$

Dengan menggunakan pendekatan **Faktor Integrasi**, aplikasi ini tidak hanya memberikan jawaban akhir, tetapi juga:
1.  **Langkah Penyelesaian:** Menjabarkan proses integral dan substitusi secara detail.
2.  **Solusi Umum & Khusus:** Menghitung konstanta $C$ berdasarkan nilai awal $(x_0, y_0)$.
3.  **Visualisasi:** Menampilkan grafik kurva solusi menggunakan library plotting modern.
4.  **Tabel Nilai:** Generate titik-titik koordinat $(x, y)$ untuk analisis lebih lanjut.

## 🛠️ Teknologi yang Digunakan

Kami menggabungkan kekuatan **Python** untuk komputasi simbolik matematika dan **React** untuk antarmuka yang responsif.

### **Frontend (User Interface)**
* ⚛️ **React + Vite** - Framework utama.
* 🎨 **Tailwind CSS + Shadcn UI** - Styling dan komponen antarmuka modern.
* ✨ **Framer Motion** - Animasi transisi yang halus.
* 📈 **Plotly.js / Recharts** - Visualisasi grafik matematika.
* 📝 **KaTeX** - Rendering notasi matematika (LaTeX).

### **Backend & Computation**
* 🐍 **Python** - Bahasa pemrograman utama untuk logika.
* 🧮 **SymPy** - Library Python untuk matematika simbolik (Symbolic Mathematics).
* 🔢 **NumPy** - Komputasi numerik.
* ⚡ **FastAPI** - Menghubungkan logika Python dengan Frontend React.

## 🚀 Cara Menjalankan Project (Localhost)

Ikuti langkah berikut untuk menjalankan aplikasi di komputer kamu:

### 1. Clone Repository
```
git clone https://github.com/SerenaaaaRN/kalkulus-project-1.git
```
### 2. Setup Frontend
Install library JavaScript yang dibutuhkan:
```
npm install
# atau
yarn install
```

### 3. Setup Python Backend
Pastikan kamu sudah menginstall Python. Disarankan menggunakan Virtual Environment (venv).
```
# Install dependencies Python
pip install -r requirements.txt
```

### 4. Jalankan Backend (Terminal 1)
Masuk ke folder api dan jalankan server Python.
```
cd api
py index.py
```
Biarkan terminal ini tetap terbuka/berjalan.

### 5. Jalankan Frontend (Terminal 2)
Buka terminal baru di folder utama project, lalu jalankan Vite.
```
npm run dev
```
Buka browser dan akses alamat yang muncul (biasanya http://localhost:5173).

**📂 Struktur Project**
```
kalkulus-project-1/
├── api/                # Logic Backend (Python/FastAPI)
│   └── index.py        # Entry point API
├── python/             # Modul Matematika (SymPy Solver)
│   ├── main.py
│   └── solver.py       # Algoritma penyelesaian ODE
├── src/                # Source Code Frontend (React)
│   ├── components/     # UI Components (Hero, Calculator, Team)
│   ├── ode-linear/     # Komponen khusus Solver & Grafik
│   └── assets/         # Gambar & Aset statis
├── requirements.txt    # Daftar library Python
└── package.json        # Daftar library JavaScript
```
