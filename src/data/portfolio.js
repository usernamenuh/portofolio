import {
  FaBrain,
  FaCode,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaReact,
} from 'react-icons/fa'
import {
  SiExpress,
  SiLaravel,
  SiPython,
  SiPytorch,
  SiTensorflow,
} from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
import belajarDasarAI from '../assets/sertifikat/BelajarDasarAI.jpg'
import belajarDasarAIpdf from '../assets/sertifikat/BelajarDasarAI.pdf'
import belajarFundamentalDeepLearning from '../assets/sertifikat/BelajarFundamentalDeepLearning.jpg'
import belajarFundamentalDeepLearningpdf from '../assets/sertifikat/BelajarFundamentalDeepLearning.pdf'
import belajarDasarCloudAWS from '../assets/sertifikat/BelajarDasarCloudeDanGenAIdiAWS.jpg'
import belajarDasarCloudAWSpdf from '../assets/sertifikat/BelajarDasarCloudeDanGenAIdiAWS.pdf'
import belajarDasarGit from '../assets/sertifikat/BelajarDasarGitDanGithub.jpg'
import belajarDasarGitpdf from '../assets/sertifikat/BelajarDasarGitDanGithub.pdf'
import belajarMachineLearning from '../assets/sertifikat/BelajarMachineLearningUntukPemula.jpg'
import belajarMachineLearningpdf from '../assets/sertifikat/BelajarMachineLearningUntukPemula.pdf'
import financialLiteracy from '../assets/sertifikat/IntroductionToFinancialLiteracy.jpg'
import financialLiteracypdf from '../assets/sertifikat/IntroductionToFinancialLiteracy.pdf'
import membangunDeepLearning from '../assets/sertifikat/MembangunProyekDeepLearningTingkatMahir.jpg'
import membangunDeepLearningpdf from '../assets/sertifikat/MembangunProyekDeepLearningTingkatMahir.pdf'
import pemrogramanSoftware from '../assets/sertifikat/MemulaiDasarPemrogramanUntukMenjadiPengembangSoftware.jpg'
import pemrogramanSoftwarepdf from '../assets/sertifikat/MemulaiDasarPemrogramanUntukMenjadiPengembangSoftware.pdf'
import pemrogramanPython from '../assets/sertifikat/MemulaiPemrogramanDenganPython.jpg'
import pemrogramanPythonpdf from '../assets/sertifikat/MemulaiPemrogramanDenganPython.pdf'
import logikaPemrograman from '../assets/sertifikat/PengenalanKeLogikaPemrograman.jpg'
import logikaPemrogramanpdf from '../assets/sertifikat/PengenalanKeLogikaPemrograman.pdf'
import belajarDasarJavaScript from '../assets/sertifikat/BelajarDasarJavaScript.jpg'
import belajarDasarJavaScriptpdf from '../assets/sertifikat/BelajarDasarJavaScript.pdf'

export const profile = {
  name: 'Muhammad Enuh',
  initials: 'ME',
  title: 'Full Stack Developer | AI, Machine Learning & Deep Learning',
  intro:
    'Software Engineering student with a strong interest in Artificial Intelligence, Machine Learning, Deep Learning, and modern web application development using Laravel, PHP, React, Express.js, MySQL, PostgreSQL, and RESTful APIs.',
  email: 'muhammaden613@gmail.com',
  location: 'Greater Bandung',
  linkedin: 'https://www.linkedin.com/in/muhammadenuh',
  cvUrl: "/images/CVMuhammadEnuh.pdf",
  socials: [
    { label: 'GitHub', href: 'https://github.com/usernamenuh', icon: FaGithub },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammadenuh', icon: FaLinkedin },
    { label: 'Instagram', href: 'https://www.instagram.com/3mnuhh', icon: FaInstagram },
    { label: 'Email', href: 'mailto:muhammadenuh4@gmail.com', icon: MdEmail },
  ],
}

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const skills = [
  { name: 'Deep Learning', icon: FaBrain, detail: 'Membangun dan memahami model deep learning untuk solusi berbasis AI.' },
  { name: 'Machine Learning', icon: FaCode, detail: 'Pengolahan data, training model, evaluasi, dan eksperimen machine learning.' },
  { name: 'Git', icon: FaGitAlt, detail: 'Version control untuk kolaborasi dan pengelolaan perubahan kode.' },
  { name: 'Python', icon: SiPython, detail: 'Pemrograman Python untuk AI, data processing, dan pengembangan model.' },
  { name: 'React', icon: FaReact, detail: 'Membangun antarmuka web interaktif dengan React dan komponen yang reusable.' },
  { name: 'Express.js', icon: SiExpress, detail: 'Membangun backend RESTful API menggunakan Express.js dan Node.js.' },
  { name: 'TensorFlow', icon: SiTensorflow, detail: 'Library deep learning untuk membangun dan melatih model AI.' },
  { name: 'PyTorch', icon: SiPytorch, detail: 'Eksperimen model deep learning dan workflow riset AI.' },
  { name: 'Laravel & PHP', icon: SiLaravel, detail: 'Pengembangan aplikasi web, backend, routing, dan integrasi RESTful API.' },
  { name: 'MySQL & PostgreSQL', icon: FaDatabase, detail: 'Perancangan database relasional untuk aplikasi web.' },
]

export const projects = [
  {
    title: 'StressGuard',
    description:
      'Aplikasi deteksi tingkat stres berbasis pola tidur menggunakan AI. Menggabungkan React, Express, dan FastAPI AI service.',
    role: 'AI Engineer',
    stack: [
      'FastAPI',
      'Python',
      'TensorFlow',
      'Keras',
      'Scikit-Learn',
      'Pandas',
      'React',
      'Express.js'
    ],
    github: 'https://github.com/usernamenuh/StressGuard',
    demo: 'https://renewed-mercy-production-9f6c.up.railway.app/',
    images: 'stressguard',
    longDescription:
      'StressGuard adalah aplikasi deteksi tingkat stres berbasis analisis pola tidur yang dikembangkan sebagai proyek Capstone di Coding Camp oleh DBS Foundation & Dicoding. Aplikasi ini memprediksi tingkat stres berdasarkan input data aktivitas tidur harian pengguna (durasi tidur, kualitas, screen time, penggunaan HP sebelum tidur).',
    details: [
      'Bertanggung jawab penuh sebagai AI Engineer untuk merancang, melatih, dan menguji model machine learning dan deep learning.',
      'Mengembangkan arsitektur model menggunakan TensorFlow Functional API dengan Custom Layer dan kustomisasi alur pelatihan (Custom Training Loop menggunakan tf.GradientTape).',
      'Menggunakan TensorBoard untuk memantau performa model selama training untuk menghindari overfitting dan mengoptimalkan performa.',
      'Membangun layanan backend AI menggunakan FastAPI (Python) untuk menyajikan model prediksi secara real-time yang dikonsumsi oleh frontend React dan backend Express.js.',
      'Menyajikan hasil analisis secara visual di dashboard interaktif lengkap dengan riwayat prediksi serta rekomendasi kesehatan preventif.'
    ]
  },
  {
    title: 'Kampung Digital',
    description:
      'Aplikasi manajemen desa berbasis Laravel 12 untuk mengelola data desa, RT/RW, penduduk, kas, pembayaran, dan proposal bantuan.',
    role: 'Full Stack Developer',
    stack: ['Laravel 12', 'PHP', 'MySQL', 'Bootstrap'],
    github: 'https://github.com/usernamenuh/KampungDigital',
    demo: 'https://kampungdigital-production.up.railway.app/',
    images: 'kampungdigital',
    longDescription:
      'Kampung Digital adalah platform sistem informasi manajemen desa yang dirancang untuk mendigitalisasi layanan administrasi kelurahan/desa. Sistem ini mendukung multi-role user (Kades, Ketua RW, Ketua RT, Admin, dan Masyarakat) untuk alur kerja administrasi terpadu.',
    details: [
      'Mengembangkan sistem manajemen penduduk yang rapi termasuk data Kartu Keluarga (KK) dan riwayat mutasi penduduk.',
      'Mengintegrasikan fitur pengelolaan kas desa/RT/RW yang transparan untuk mencatat pemasukan dan pengeluaran kas secara realtime.',
      'Membangun sistem pengajuan proposal bantuan sosial secara online dari warga langsung ke RT, RW, dan Kepala Desa.',
      'Menyediakan landing page profil desa, dashboard kustom untuk setiap level kepengurusan (Kades, RW, RT), dan portal aspirasi masyarakat.'
    ]
  },
  {
    title: 'FinSight',
    description:
      'Aplikasi web untuk membantu pelaku usaha kecil dan UMKM mengelola keuangan usaha: menghitung modal, memantau pengeluaran dan pemasukan, serta memperkirakan waktu balik modal (BEP).',
    role: 'Full Stack Developer',
    stack: ['Laravel 12', 'React', 'Inertia.js', 'MySQL', 'Tailwind CSS'],
    github: 'https://github.com/usernamenuh/UMKMBoost-AI',
    demo: 'https://umkmboost-ai-production.up.railway.app/',
    images: 'finsight',
    longDescription:
      'FinSight (sebelumnya UMKMBoost-AI) adalah aplikasi web akuntansi sederhana yang dirancang khusus untuk pelaku usaha mikro, kecil, dan menengah (UMKM) agar dapat memantau kesehatan finansial bisnis mereka tanpa kesulitan teknis akuntansi yang rumit.',
    details: [
      'Menggunakan arsitektur monolitik modern berbasis Laravel 12 dan React dengan perantara Inertia.js untuk performa SPA yang optimal.',
      'Membangun fitur pencatatan pengeluaran harian, pemasukan, dan manajemen daftar bisnis/cabang UMKM.',
      'Mengimplementasikan modul kalkulator BEP (Break Even Point) otomatis untuk membantu pelaku usaha memperkirakan waktu balik modal.',
      'Merancang antarmuka pengguna yang bersih, responsif, dan mudah dipahami oleh pengguna non-teknis.'
    ]
  }
]

export const experiences = [
  {
    role: 'Operator Gudang',
    company: 'J&T Express Sukabumi 777',
    period: 'August 2024 - November 2024',
    description:
      'Menangani sortir paket, loading barang, pemindaian, dan pengecekan paket untuk mendukung proses logistik tim.',
  },
  {
    role: 'Production Operator',
    company: 'CV Alam Printing Sejahtera',
    period: 'May 2023 - July 2023',
    description:
      'Membuat name tag, ID card, piagam, mendali, serta stempel manual dan otomatis dengan ketelitian pada hasil produksi.',
  },
]

export const education = [
  {
    degree: 'Teknik Informatika',
    school: 'STMIK Mardira Indonesia',
    period: 'Present',
    description: 'Mahasiswa aktif dengan fokus pada software engineering, web development, dan artificial intelligence.',
  },
  {
    degree: 'Rekayasa Perangkat Lunak',
    school: 'SMK Muhammadiyah 1 Sukabumi',
    period: '2021 - 2024',
    description: 'Mempelajari dasar pengembangan software, pemrograman web, database, dan praktik rekayasa perangkat lunak.',
  },
]

export const certifications = [
  {
    title: 'Belajar Dasar AI',
    issuer: 'Dicoding Indonesia',
    image: belajarDasarAI,
    pdf: belajarDasarAIpdf,
  },
  {
    title: 'Belajar Machine Learning untuk Pemula',
    issuer: 'Dicoding Indonesia',
    image: belajarMachineLearning,
    pdf: belajarMachineLearningpdf,
  },
  {
    title: 'Membangun Proyek Deep Learning Tingkat Mahir',
    issuer: 'Dicoding Indonesia',
    image: membangunDeepLearning,
    pdf: membangunDeepLearningpdf,
  },
  {
    title: 'Belajar Fundamental Deep Learning',
    issuer: 'Dicoding Indonesia',
    image: belajarFundamentalDeepLearning,
    pdf: belajarFundamentalDeepLearningpdf,
  },
  {
    title: 'Memulai Pemrograman dengan Python',
    issuer: 'Dicoding Indonesia',
    image: pemrogramanPython,
    pdf: pemrogramanPythonpdf,
  },
  {
    title: 'Belajar Dasar Git dengan GitHub',
    issuer: 'Dicoding Indonesia',
    image: belajarDasarGit,
    pdf: belajarDasarGitpdf,
  },
  {
    title: 'Belajar Dasar Cloud dan Gen AI di AWS',
    issuer: 'Dicoding Indonesia',
    image: belajarDasarCloudAWS,
    pdf: belajarDasarCloudAWSpdf,
  },
  {
    title: 'Memulai Dasar Pemrograman untuk Menjadi Pengembang Software',
    issuer: 'Dicoding Indonesia',
    image: pemrogramanSoftware,
    pdf: pemrogramanSoftwarepdf,
  },
  {
    title: 'Pengenalan ke Logika Pemrograman',
    issuer: 'Dicoding Indonesia',
    image: logikaPemrograman,
    pdf: logikaPemrogramanpdf,
  },
  {
    title: 'Introduction to Financial Literacy',
    issuer: 'Dicoding Indonesia',
    image: financialLiteracy,
    pdf: financialLiteracypdf,
  },
  {
    title: 'Belajar Dasar Pemrograman JavaScript',
    issuer: 'Dicoding Indonesia',
    image: belajarDasarJavaScript,
    pdf: belajarDasarJavaScriptpdf,
  },
]
