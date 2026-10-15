// Language-neutral data. All translatable text lives in src/i18n/<lang>.js.
export const profile = {
  name: 'Alham Manazil'
}

export const links = {
  github: 'https://github.com/Alhammanazil',
  linkedin: 'https://www.linkedin.com/in/alham-manazil/',
  instagram: 'https://www.instagram.com/alham_manazil/'
}

export const stack = ['PHP', 'Laravel', 'JavaScript', 'MySQL', 'Vue.js', 'Node.js', 'Tailwind CSS', 'Google Cloud', 'AppSheet', 'Git']

export const certifications = [
  'Google Cloud Associate Cloud Engineer',
  'Google IT Support Specialization',
  'Google Data Analytics Specialization',
  'EnglishScore'
]

// Filter groups shown above the projects. Labels live in the language files (ui.projects.tags).
export const projectTags = ['php', 'frontend', '3d', 'mobile', 'nocode', 'design']

// Summaries live in the language files, keyed by slug.
// tags:  which filter groups the project belongs to.
// embed: true only when the demo site allows being shown in an iframe (no X-Frame-Options / frame-ancestors block).
// github / demo can be null; the lightbox hides the matching button.
export const projects = [
  {
    slug: 'cv-ats-generator',
    name: 'CV ATS Generator',
    stack: ['Vue 3', 'Vite', 'TypeScript', 'Pinia'],
    tags: ['frontend'],
    github: 'https://github.com/Alhammanazil/cv-ats-generator',
    demo: 'https://gascv.vercel.app',
    embed: true
  },
  {
    slug: 'khitan-umum',
    name: 'Khitan Umum Menara Kudus',
    stack: ['AppSheet', 'MySQL', 'Google Sheets'],
    tags: ['nocode'],
    github: null,
    demo: null,
    embed: false
  },
  {
    slug: 'bukaluwur',
    name: 'Bukaluwur Menara Kudus',
    stack: ['PHP', 'MySQL', 'Bootstrap'],
    tags: ['php'],
    github: 'https://github.com/Alhammanazil/penerimaan_shodaqoh',
    demo: null,
    embed: false
  },
  {
    slug: 'jejaknesia',
    name: 'Jejaknesia',
    stack: ['Kotlin', 'Node.js', 'TensorFlow', 'Flask'],
    tags: ['mobile'],
    github: 'https://github.com/Jejaknesia',
    demo: null,
    embed: false
  },
  {
    slug: 'garasi-inspeksi',
    name: 'Garasi Inspeksi',
    stack: ['Laravel', 'MySQL', 'Bootstrap'],
    tags: ['php'],
    github: 'https://github.com/Alhammanazil/garasi-inspeksi-mobil',
    demo: 'https://garasi-inspeksi-mobil.vercel.app/',
    embed: true
  },
  {
    slug: 'jobless',
    name: 'Jobless',
    stack: ['Figma', 'HTML', 'CSS'],
    tags: ['frontend', 'design'],
    github: 'https://github.com/Alhammanazil/Jobless',
    demo: 'https://jobless-sigma.vercel.app/',
    embed: true
  },
  {
    slug: 'komponenku',
    name: 'Komponenku',
    stack: ['Three.js', 'Vite', 'JavaScript'],
    tags: ['frontend', '3d'],
    github: 'https://github.com/Alhammanazil/computer-components-3d',
    demo: 'https://komponenku.vercel.app',
    embed: true
  },
  {
    slug: 'karhutla',
    name: 'Karhutla',
    stack: ['HTML', 'CSS', 'JavaScript'],
    tags: ['frontend'],
    github: 'https://github.com/Alhammanazil/karhutla-web',
    demo: 'https://karhutla-ochre.vercel.app/',
    embed: true
  },
  {
    slug: 'lullaby',
    name: 'Lullaby',
    stack: ['HTML', 'CSS', 'JavaScript'],
    tags: ['frontend'],
    github: 'https://github.com/Alhammanazil/lullaby',
    demo: 'https://lullaby-sleep.vercel.app',
    // The Lullaby site sends X-Frame-Options: SAMEORIGIN, so it cannot be embedded until that header is relaxed.
    embed: false
  }
]
