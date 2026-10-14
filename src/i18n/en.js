export default {
  htmlLang: 'en',
  meta: {
    title: 'Alham Manazil | Web Developer',
    description:
      'Alham Manazil is a web developer and IT staff in Indonesia, building web apps and internal tools with PHP, Laravel, JavaScript and MySQL.'
  },
  ui: {
    language: 'Language',
    navLabel: 'Main',
    nav: { about: 'About', experience: 'Experience', projects: 'Projects', contact: 'Contact' },
    hero: { seeWork: 'View projects', contact: 'Contact me' },
    about: { kicker: 'About', title: 'Web developer and IT staff in Jakarta' },
    experience: {
      kicker: 'Experience',
      title: 'Where I have worked',
      education: 'Education',
      certifications: 'Certifications'
    },
    projects: {
      kicker: 'Projects',
      title: 'Selected projects',
      lead: 'Select a project for a screenshot, its stack and links.',
      stripLabel: 'Selected projects',
      open: 'Open',
      preview: 'preview',
      screenshot: 'screenshot',
      details: 'Project details',
      prev: 'Previous project',
      next: 'Next project',
      close: 'Close',
      source: 'Source code',
      demo: 'Live demo',
      imageUnavailable: 'Image unavailable'
    },
    contact: {
      kicker: 'Contact',
      title: 'Send me a message',
      lead: 'I am on LinkedIn, and my code is on GitHub.',
      linkedin: 'Message me on LinkedIn',
      github: 'View my GitHub'
    },
    footer: { top: 'Back to top' },
    noscript: 'This site needs JavaScript enabled to work properly.'
  },
  profile: {
    headline: 'I build web apps and internal tools in PHP, Laravel and JavaScript, and I replace paper and spreadsheet routines with working software.',
    status: 'IT Staff at PT Primajasa Tunas Mandiri, Jakarta'
  },
  about: {
    paragraphs: [
      "I'm Alham. I graduated in Informatics Engineering from Universitas Muria Kudus in October 2024. Since then I have worked as a Web & App Developer at Pitucorp, and now as IT Staff at PT Primajasa Tunas Mandiri.",
      'I like the practical side of software: forms, dashboards and small automations that save someone an afternoon of manual work.'
    ],
    facts: [
      { label: 'Focus', value: 'Web apps, internal tools, IT support' },
      { label: 'Education', value: 'B.Eng. Informatics, Universitas Muria Kudus (GPA 3.83)' },
      { label: 'Alumni', value: 'Bangkit Academy 2023, Cloud Computing' },
      { label: 'Outside work', value: 'Novels and the gym' }
    ]
  },
  experience: [
    {
      role: 'IT Staff',
      org: 'PT Primajasa Tunas Mandiri',
      period: 'Aug 2026 – Present',
      place: 'Gambir, Jakarta',
      points: [
        'First line of IT support across departments: hardware, software, Office, network and internet requests.',
        'Maintain servers, network devices, databases, websites and antivirus, and run regular data backups.',
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
        'Worked with Google Cloud: Compute Engine, Kubernetes, Cloud Run, Cloud Functions, BigQuery and Cloud SQL.'
      ]
    }
  ],
  education: [
    { school: 'Universitas Muria Kudus', detail: 'Bachelor, Informatics Engineering', period: 'Sep 2020 – Oct 2024' },
    { school: 'SMA Negeri 2 Kudus', detail: 'Science track', period: '2018 – 2020' }
  ],
  projectSummaries: {
    jejaknesia: 'Mobile app that recommends places to visit in Indonesia. Bangkit capstone, backend and API by me.',
    'garasi-inspeksi': 'Website for a vehicle inspection and maintenance service.',
    jobless: 'Remote job board landing page, sliced from a Figma design.',
    livewire: 'Learning project: dynamic, real-time interfaces with Laravel Livewire.',
    'nawa-kartika': 'Graduation announcement system for SD NU Nawa Kartika, with secure login.'
  }
}
