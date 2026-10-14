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
    hero: { seeWork: 'Lihat karya saya', contact: 'Hubungi saya' },
    stage: {
      thinking: 'menulis kode',
      ready: '✓ siap ditinjau',
      prompts: [
        'catat kehadiran staf tanpa mesin sidik jari',
        'tampilkan progres donasi secara real time',
        'laporan kerusakan mana yang masih terbuka?'
      ]
    },
    about: { kicker: 'Tentang saya', title: 'Halo, senang berkenalan.' },
    experience: {
      kicker: 'Tempat saya bekerja',
      title: 'Perjalanan kerja saya sejauh ini.',
      education: 'Pendidikan',
      certifications: 'Sertifikasi'
    },
    projects: {
      kicker: 'Tempat saya berkontribusi',
      title: 'Proyek yang pernah saya kerjakan',
      lead: 'Arahkan kursor untuk melihat warnanya, ketuk untuk melihat lebih dekat.',
      stripLabel: 'Proyek pilihan',
      open: 'Buka',
      preview: 'pratinjau',
      screenshot: 'tangkapan layar',
      details: 'Detail proyek',
      prev: 'Proyek sebelumnya',
      next: 'Proyek berikutnya',
      close: 'Tutup',
      source: 'Kode sumber',
      demo: 'Demo langsung ↗',
      imageUnavailable: 'Gambar tidak tersedia'
    },
    contact: {
      kicker: 'Halo',
      title: 'Punya ide, atau bug yang perlu dibereskan?',
      lead: 'Kirim pesan, nanti kita cari solusinya bersama.',
      linkedin: 'Kirim pesan lewat LinkedIn',
      github: 'Lihat kode saya di GitHub'
    },
    footer: { top: 'Kembali ke atas ↑' },
    noscript: 'Situs ini membutuhkan JavaScript agar dapat berfungsi dengan baik.'
  },
  profile: {
    headline: 'Web developer yang suka mengubah alur kerja yang berantakan menjadi perangkat lunak yang rapi.',
    status: 'Staf IT di PT Primajasa Tunas Mandiri · Jakarta'
  },
  about: {
    paragraphs: [
      'Halo, saya Alham. Saya lulus dari Teknik Informatika Universitas Muria Kudus pada Oktober 2024 dan sejak itu terus membangun untuk web: pertama sebagai Web & App Developer di Pitucorp, sekarang sebagai Staf IT di PT Primajasa Tunas Mandiri.',
      'Saya suka sisi praktis dari perangkat lunak: formulir yang benar-benar diisi orang, dasbor yang benar-benar dibaca, dan otomasi kecil yang mengembalikan waktu sore seseorang.'
    ],
    facts: [
      { label: 'Fokus', value: 'Aplikasi web, alat internal, dukungan IT' },
      { label: 'Pendidikan', value: 'S.T. Teknik Informatika, Universitas Muria Kudus (IPK 3,83)' },
      { label: 'Alumni', value: 'Bangkit Academy 2023, Cloud Computing' },
      { label: 'Di luar kerja', value: 'Membaca novel dan nge-gym' }
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
        'Merawat server, perangkat jaringan, basis data, situs web, antivirus dan pencadangan data berkala.',
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
        'Praktik langsung dengan Google Cloud: Compute Engine, Kubernetes, Cloud Run, Cloud Functions, BigQuery, Cloud SQL dan lainnya.'
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
