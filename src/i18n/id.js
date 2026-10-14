export default {
  htmlLang: 'id',
  meta: {
    title: 'Alham Manazil | Web Developer',
    description:
      'Alham Manazil adalah web developer dan staf IT di Indonesia, membangun aplikasi web dan alat internal dengan PHP, Laravel, JavaScript dan MySQL.'
  },
  ui: {
    language: 'Bahasa',
    navLabel: 'Utama',
    nav: { about: 'Tentang', experience: 'Pengalaman', projects: 'Proyek', contact: 'Kontak' },
    hero: { seeWork: 'Lihat proyek', contact: 'Hubungi saya' },
    about: { kicker: 'Tentang', title: 'Web developer dan staf IT di Jakarta' },
    experience: {
      kicker: 'Pengalaman',
      title: 'Tempat saya bekerja',
      education: 'Pendidikan',
      certifications: 'Sertifikasi'
    },
    projects: {
      kicker: 'Proyek',
      title: 'Proyek pilihan',
      lead: 'Pilih proyek untuk melihat tangkapan layar, teknologi dan tautannya.',
      stripLabel: 'Proyek pilihan',
      open: 'Buka',
      preview: 'pratinjau',
      screenshot: 'tangkapan layar',
      details: 'Detail proyek',
      prev: 'Proyek sebelumnya',
      next: 'Proyek berikutnya',
      close: 'Tutup',
      source: 'Kode sumber',
      demo: 'Demo langsung',
      imageUnavailable: 'Gambar tidak tersedia'
    },
    contact: {
      kicker: 'Kontak',
      title: 'Kirim pesan kepada saya',
      lead: 'Saya ada di LinkedIn, dan kode saya ada di GitHub.',
      linkedin: 'Kirim pesan lewat LinkedIn',
      github: 'Lihat GitHub saya'
    },
    footer: { top: 'Kembali ke atas' },
    noscript: 'Situs ini membutuhkan JavaScript agar dapat berfungsi dengan baik.'
  },
  profile: {
    headline: 'Saya membangun aplikasi web dan alat internal dengan PHP, Laravel dan JavaScript, dan mengganti rutinitas berbasis kertas dan spreadsheet dengan perangkat lunak yang berfungsi.',
    status: 'Staf IT di PT Primajasa Tunas Mandiri, Jakarta'
  },
  about: {
    paragraphs: [
      'Saya Alham. Saya lulus dari Teknik Informatika Universitas Muria Kudus pada Oktober 2024. Sejak itu saya bekerja sebagai Web & App Developer di Pitucorp, dan sekarang sebagai Staf IT di PT Primajasa Tunas Mandiri.',
      'Saya suka sisi praktis dari perangkat lunak: formulir, dasbor dan otomasi kecil yang menghemat satu sore kerja manual seseorang.'
    ],
    facts: [
      { label: 'Fokus', value: 'Aplikasi web, alat internal, dukungan IT' },
      { label: 'Pendidikan', value: 'S.T. Teknik Informatika, Universitas Muria Kudus (IPK 3,83)' },
      { label: 'Alumni', value: 'Bangkit Academy 2023, Cloud Computing' },
      { label: 'Di luar pekerjaan', value: 'Membaca novel dan nge-gym' }
    ]
  },
  experience: [
    {
      role: 'Staf IT',
      org: 'PT Primajasa Tunas Mandiri',
      period: 'Agu 2026 – Sekarang',
      place: 'Gambir, Jakarta',
      points: [
        'Dukungan IT lini pertama untuk seluruh departemen: permintaan perangkat keras, perangkat lunak, Office, jaringan dan internet.',
        'Memelihara server, perangkat jaringan, basis data, situs web dan antivirus, serta menjalankan pencadangan data berkala.',
        'Membangun dan memelihara aplikasi internal, serta dokumentasi dan pengadaan IT.'
      ]
    },
    {
      role: 'Web & App Developer',
      org: 'Pitucorp',
      period: 'Des 2023 – Sep 2025',
      place: 'Kudus, Jawa Tengah',
      points: [
        'Membangun dan memelihara aplikasi web PHP, JavaScript dan MySQL untuk berbagai klien.',
        'Mengganti rutinitas berbasis kertas dan spreadsheet dengan aplikasi no-code (Google AppSheet): manajemen katering menghemat sekitar 40% waktu, dan pencatatan kehadiran menjadi alternatif murah pengganti mesin sidik jari.',
        'Merilis sistem web untuk platform donasi online (Sedekah Bukaluwur Menara Kudus), acara publik (Khitan Umum Menara Kudus) dan alat pelaporan kerusakan internal.'
      ]
    },
    {
      role: 'Data Analytics Trainee',
      org: 'Kominfo, Digital Talent Scholarship',
      period: 'Apr – Jul 2024',
      place: 'Jarak jauh',
      points: [
        'Menyelesaikan program Fresh Graduate Academy 192 jam: persiapan dan pembersihan data, analisis, visualisasi dan R.',
        'Menyelesaikan proyek akhir berdasarkan studi kasus analitik data Google.'
      ]
    },
    {
      role: 'Cloud Computing Cohort',
      org: 'Bangkit Academy by Google, Tokopedia, Gojek & Traveloka',
      period: 'Feb – Jul 2023',
      place: 'Jarak jauh',
      points: [
        'Backend developer pada capstone Jejaknesia, aplikasi rekomendasi wisata: merancang API dan mengintegrasikan model machine learning (Kotlin, Node.js, TensorFlow, Flask).',
        'Bekerja dengan Google Cloud: Compute Engine, Kubernetes, Cloud Run, Cloud Functions, BigQuery dan Cloud SQL.'
      ]
    }
  ],
  education: [
    { school: 'Universitas Muria Kudus', detail: 'Sarjana, Teknik Informatika', period: 'Sep 2020 – Okt 2024' },
    { school: 'SMA Negeri 2 Kudus', detail: 'Peminatan IPA', period: '2018 – 2020' }
  ],
  projectSummaries: {
    jejaknesia: 'Aplikasi seluler yang merekomendasikan tempat wisata di Indonesia. Capstone Bangkit, backend dan API oleh saya.',
    'garasi-inspeksi': 'Situs web untuk layanan inspeksi dan perawatan kendaraan.',
    jobless: 'Landing page bursa kerja jarak jauh, dipotong dari desain Figma.',
    livewire: 'Proyek belajar: antarmuka dinamis dan real time dengan Laravel Livewire.',
    'nawa-kartika': 'Sistem pengumuman kelulusan SD NU Nawa Kartika, dengan login aman.'
  }
}
