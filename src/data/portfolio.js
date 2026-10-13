export const profile = {
  name: 'Alham Manazil',
  headline: 'A web developer who likes turning messy workflows into tidy software.',
  status: 'IT Staff at PT Primajasa Tunas Mandiri · Jakarta',
  location: 'Kudus → Jakarta, Indonesia'
}

export const links = {
  github: 'https://github.com/Alhammanazil',
  linkedin: 'https://www.linkedin.com/in/alham-manazil/',
  instagram: 'https://www.instagram.com/alham_manazil/'
}

export const about = {
  paragraphs: [
    "Hi, I'm Alham. I graduated in Informatics Engineering from Universitas Muria Kudus in October 2024, and I've been building for the web ever since: first as a Web & App Developer at Pitucorp, now as IT Staff at PT Primajasa Tunas Mandiri.",
    'I like the practical side of software: forms people actually fill in, dashboards people actually read, and small automations that give someone their afternoon back.'
  ],
  facts: [
    { label: 'Focus', value: 'Web apps, internal tools, IT support' },
    { label: 'Education', value: "B.Eng. Informatics, Universitas Muria Kudus (GPA 3.83)" },
    { label: 'Alumni', value: 'Bangkit Academy 2023, Cloud Computing' },
    { label: 'Off the clock', value: 'Novels and the gym' }
  ],
  stack: ['PHP', 'Laravel', 'JavaScript', 'MySQL', 'Vue.js', 'Node.js', 'Tailwind CSS', 'Google Cloud', 'AppSheet', 'Git']
}

export const experience = [
  {
    role: 'IT Staff',
    org: 'PT Primajasa Tunas Mandiri',
    period: 'Aug 2026 – Present',
    place: 'Gambir, Jakarta',
    points: [
      'First line of IT support across departments: hardware, software, Office, network and internet requests.',
      'Look after servers, network devices, databases, websites, antivirus and regular data backups.',
      'Build and maintain internal applications, plus IT documentation and procurement.'
    ]
  },
  {
    role: 'Web & App Developer',
    org: 'Pitucorp',
    period: 'Dec 2023 – Sep 2025',
    place: 'Kudus, Central Java',
    points: [
      'Built and maintained PHP, JavaScript and MySQL web applications for a range of clients.',
      'Replaced paper and spreadsheet routines with no-code apps (Google AppSheet): catering management saved about 40% of the time, and attendance tracking became a low-cost alternative to fingerprint machines.',
      'Shipped web systems for an online donation platform (Sedekah Bukaluwur Menara Kudus), a public event (Khitan Umum Menara Kudus) and an internal damage-reporting tool.'
    ]
  },
  {
    role: 'Data Analytics Trainee',
    org: 'Kominfo, Digital Talent Scholarship',
    period: 'Apr – Jul 2024',
    place: 'Remote',
    points: [
      'Completed the 192-hour Fresh Graduate Academy programme: data preparation and cleaning, analysis, visualisation and R.',
      'Delivered a final project built around a Google data analytics case study.'
    ]
  },
  {
    role: 'Cloud Computing Cohort',
    org: 'Bangkit Academy by Google, Tokopedia, Gojek & Traveloka',
    period: 'Feb – Jul 2023',
    place: 'Remote',
    points: [
      'Backend developer on the Jejaknesia capstone, a tourism recommendation app: designed the APIs and wired in a machine learning model (Kotlin, Node.js, TensorFlow, Flask).',
      'Hands-on with Google Cloud: Compute Engine, Kubernetes, Cloud Run, Cloud Functions, BigQuery, Cloud SQL and more.'
    ]
  }
]

export const education = [
  { school: 'Universitas Muria Kudus', detail: 'Bachelor, Informatics Engineering', period: 'Sep 2020 – Oct 2024' },
  { school: 'SMA Negeri 2 Kudus', detail: 'Science track', period: '2018 – 2020' }
]

export const certifications = [
  'Google Cloud Associate Cloud Engineer',
  'Google IT Support Specialization',
  'Google Data Analytics Specialization',
  'Belajar Laravel',
  'EnglishScore'
]

export const projects = [
  {
    slug: 'jejaknesia',
    name: 'Jejaknesia',
    summary: 'Mobile app that recommends places to visit in Indonesia. Bangkit capstone, backend and API by me.',
    stack: ['Kotlin', 'Node.js', 'TensorFlow', 'Flask'],
    github: 'https://github.com/Jejaknesia',
    demo: null
  },
  {
    slug: 'garasi-inspeksi',
    name: 'Garasi Inspeksi',
    summary: 'Website for a vehicle inspection and maintenance service.',
    stack: ['Laravel', 'MySQL', 'Bootstrap'],
    github: 'https://github.com/Alhammanazil/garasi-inspeksi-mobil',
    demo: 'https://garasi-inspeksi-mobil.vercel.app/'
  },
  {
    slug: 'jobless',
    name: 'Jobless',
    summary: 'Remote job board landing page, sliced from a Figma design.',
    stack: ['Figma', 'HTML', 'CSS'],
    github: 'https://github.com/Alhammanazil/Jobless',
    demo: 'https://jobless-site.netlify.app/'
  },
  {
    slug: 'livewire',
    name: 'Livewire Playground',
    summary: 'Learning project: dynamic, real-time interfaces with Laravel Livewire.',
    stack: ['Laravel', 'Livewire', 'Tailwind CSS'],
    github: 'https://github.com/Alhammanazil/learn-livewire',
    demo: null
  },
  {
    slug: 'nawa-kartika',
    name: 'Nawa Kartika',
    summary: 'Graduation announcement system for SD NU Nawa Kartika, with secure login.',
    stack: ['Laravel', 'MySQL', 'Bootstrap'],
    github: 'https://github.com/Alhammanazil/cek_kelulusan_nawakartika',
    demo: 'https://cek-kelulusan-nawakartika.vercel.app/'
  }
]
