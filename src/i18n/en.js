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
    menu: 'Open menu',
    closeMenu: 'Close menu',
    switchTo: 'Switch language',
    nav: { about: 'About', experience: 'Experience', projects: 'Projects', contact: 'Contact' },
    hero: { seeWork: "See what I've built", contact: 'Get in touch' },
    stage: {
      thinking: 'writing code',
      ready: '✓ ready to review',
      prompts: [
        'track staff attendance without fingerprint hardware',
        'show donation progress in real time',
        'which damage reports are still open?'
      ]
    },
    about: { kicker: 'Who I am', title: 'Hello, nice to meet you.' },
    experience: {
      kicker: "Where I've worked",
      title: 'A short tour of my work so far.',
      education: 'Education',
      certifications: 'Certifications'
    },
    projects: {
      kicker: 'Where I contributed',
      title: "Projects I've worked on",
      lead: 'Hover to bring them to life, tap one for a closer look.',
      stripLabel: 'Selected projects',
      open: 'Open',
      preview: 'preview',
      screenshot: 'screenshot',
      details: 'Project details',
      prev: 'Previous project',
      next: 'Next project',
      close: 'Close',
      source: 'Source code',
      demo: 'Live demo ↗',
      imageUnavailable: 'Image unavailable'
    },
    contact: {
      kicker: 'Say hi',
      title: 'Got an idea, or a bug that needs squashing?',
      lead: "Send me a message and we'll see what we can sort out together.",
      linkedin: 'Message me on LinkedIn',
      github: 'Browse my code on GitHub'
    },
    footer: { top: 'Back to top ↑' },
    noscript: 'This site needs JavaScript enabled to work properly.'
  },
  profile: {
    headline: 'A web developer who likes turning messy workflows into tidy software.',
    status: 'IT Staff at PT Primajasa Tunas Mandiri · Jakarta'
  },
  about: {
    paragraphs: [
      "Hi, I'm Alham. I graduated in Informatics Engineering from Muria Kudus University in October 2024, and I've been building for the web ever since: first as a Web & App Developer at Pitucorp, now as IT Staff at PT Primajasa Tunas Mandiri.",
      'I like the practical side of software: forms people actually fill in, dashboards people actually read, and small automations that give someone their afternoon back.'
    ],
    facts: [
      { label: 'Focus', value: 'Web apps, internal tools, IT support' },
      { label: 'Education', value: 'B.Eng. Informatics, Muria Kudus University (GPA 3.83)' },
      { label: 'Alumni', value: 'Bangkit Academy 2023, Cloud Computing' },
      { label: 'Off the clock', value: 'Cinephile and reading enthusiast' }
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
  ],
  education: [
    { school: 'Muria Kudus University', detail: 'Bachelor, Informatics Engineering', period: 'Sep 2020 – Oct 2024' },
    { school: 'State Senior High School 2 Kudus', detail: 'Science track', period: '2018 – 2020' }
  ],
  projectSummaries: {
    jejaknesia: 'Mobile app that recommends places to visit in Indonesia. Bangkit capstone, backend and API by me.',
    'garasi-inspeksi': 'Website for a vehicle inspection and maintenance service.',
    jobless: 'Remote job board landing page, sliced from a Figma design.',
    komponenku: 'Learn computer parts through interactive 3D models (360° rotate, zoom) and a guess-the-part quiz.',
    karhutla: 'Bilingual interactive page on the root causes of forest and land fires in Indonesia.',
    lullaby: 'Unofficial interactive companion to The Power of Sleep: sleep calculators, breathing guides and bedroom checklists.'
  }
}
