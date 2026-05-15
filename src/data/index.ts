import type { IconType } from 'react-icons'
import {
  SiBun,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFramer,
  SiGit,
  SiGithub,
  SiGraphql,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedis,
  SiRust,
  SiSupabase,
  SiTailwindcss,
  SiTrpc,
  SiTypescript,
  SiVercel,
  SiVuedotjs
} from 'react-icons/si'

export interface Skill {
  name: string
  icon: IconType
  color: string
}
export interface SkillGroup {
  id: string
  titleKey: string
  skills: Skill[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    titleKey: 'skills.frontend',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#38BDF8' },
      { name: 'Vue.js', icon: SiVuedotjs, color: '#42B883' },
      { name: 'Framer Motion', icon: SiFramer, color: '#FF4D8B' }
    ]
  },
  {
    id: 'backend',
    titleKey: 'skills.backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
      { name: 'NestJS', icon: SiNestjs, color: '#E0234E' },
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
      { name: 'tRPC', icon: SiTrpc, color: '#398CCB' },
      { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Prisma', icon: SiPrisma, color: '#FFFFFF' },
      { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
      { name: 'Redis', icon: SiRedis, color: '#FF4438' }
    ]
  },
  {
    id: 'tools',
    titleKey: 'skills.tools',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
      { name: 'Bun', icon: SiBun, color: '#FBF0DF' },
      { name: 'Rust', icon: SiRust, color: '#DEA584' }
    ]
  },
  {
    id: 'design',
    titleKey: 'skills.design',
    skills: [
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      { name: 'Framer Motion', icon: SiFramer, color: '#FF4D8B' }
    ]
  }
]

export interface ExperienceItem {
  role: string
  company: string
  period: string
  location: string
  description: { en: string; id: string }
  stack: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'Fullstack Developer',
    company: 'Freelance / Independent',
    period: '2023 — Present',
    location: 'Remote',
    description: {
      en: 'Designing and shipping end-to-end web products for clients across SaaS, e-commerce and creative agencies. Focus on motion-rich UI, performance and accessibility.',
      id: 'Merancang dan merilis produk web end-to-end untuk klien lintas SaaS, e-commerce dan agensi kreatif. Fokus pada UI kaya animasi, performa dan aksesibilitas.'
    },
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'PostgreSQL']
  },
  {
    role: 'Frontend Engineer',
    company: 'Tech Startup',
    period: '2022 — 2023',
    location: 'Jakarta, ID',
    description: {
      en: 'Built a real-time dashboard and component library used across 4 internal products. Led the migration from CRA to Next.js with a 38% perf improvement.',
      id: 'Membangun dasbor real-time dan component library yang digunakan di 4 produk internal. Memimpin migrasi dari CRA ke Next.js dengan peningkatan performa 38%.'
    },
    stack: ['React', 'Vite', 'TanStack Query', 'Recharts']
  },
  {
    role: 'Web Developer Intern',
    company: 'Digital Agency',
    period: '2021 — 2022',
    location: 'Surabaya, ID',
    description: {
      en: 'Delivered 10+ marketing sites and a custom CMS. Introduced motion design as a baseline for hero sections.',
      id: 'Mengerjakan 10+ situs marketing dan CMS kustom. Memperkenalkan motion design sebagai standar untuk hero section.'
    },
    stack: ['Vue', 'Laravel', 'MySQL']
  }
]

export interface EducationItem {
  school: string
  degree: string
  period: string
  description: { en: string; id: string }
}

export const education: EducationItem[] = [
  {
    school: 'Universitas Negeri Surabaya',
    degree: 'B.Sc. Informatics Engineering',
    period: '2019 — 2023',
    description: {
      en: 'Graduated with honours. Thesis on real-time collaborative editors using CRDTs.',
      id: 'Lulus dengan predikat cum laude. Skripsi tentang editor kolaboratif real-time menggunakan CRDT.'
    }
  },
  {
    school: 'SMK Telkom',
    degree: 'Software Engineering',
    period: '2016 — 2019',
    description: {
      en: 'Vocational program focused on full-stack development and IT fundamentals.',
      id: 'Program vokasi fokus pada pengembangan full-stack dan dasar-dasar IT.'
    }
  }
]

export interface CertificateItem {
  title: string
  issuer: string
  year: string
  image: string
}

const cover = (label: string, gradFrom: string, gradTo: string) =>
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 560'>
      <defs>
        <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0' stop-color='${gradFrom}'/>
          <stop offset='1' stop-color='${gradTo}'/>
        </linearGradient>
        <pattern id='p' width='40' height='40' patternUnits='userSpaceOnUse'>
          <path d='M 40 0 L 0 0 0 40' fill='none' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
        </pattern>
      </defs>
      <rect width='800' height='560' fill='url(#g)'/>
      <rect width='800' height='560' fill='url(#p)'/>
      <text x='50%' y='48%' text-anchor='middle' fill='white' font-family='Inter, sans-serif' font-size='42' font-weight='800'>${label}</text>
      <text x='50%' y='58%' text-anchor='middle' fill='rgba(255,255,255,0.75)' font-family='Inter, sans-serif' font-size='18'>Certificate of Completion</text>
    </svg>`
  )

export const certificates: CertificateItem[] = [
  { title: 'Meta Frontend Developer', issuer: 'Coursera', year: '2024', image: cover('Meta Frontend', '#0ea5e9', '#7c3aed') },
  { title: 'AWS Cloud Practitioner', issuer: 'Amazon', year: '2024', image: cover('AWS Cloud', '#f59e0b', '#ef4444') },
  { title: 'Next.js App Router', issuer: 'Vercel', year: '2024', image: cover('Next.js', '#111827', '#3b82f6') },
  { title: 'TypeScript Mastery', issuer: 'Frontend Masters', year: '2023', image: cover('TypeScript', '#1e40af', '#06b6d4') },
  { title: 'UI Animation with Motion', issuer: 'Awwwards', year: '2023', image: cover('Motion Design', '#ec4899', '#8b5cf6') },
  { title: 'Laravel Pro', issuer: 'Laracasts', year: '2022', image: cover('Laravel', '#dc2626', '#f97316') }
]

export interface Project {
  id: string
  title: string
  description: { en: string; id: string }
  tags: string[]
  category: 'Web' | 'Mobile' | 'UI/UX' | 'Open Source'
  cover: string
  live?: string
  repo?: string
  featured?: boolean
}

const projCover = (label: string, from: string, to: string) =>
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 500'>
      <defs>
        <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0' stop-color='${from}'/>
          <stop offset='1' stop-color='${to}'/>
        </linearGradient>
      </defs>
      <rect width='800' height='500' fill='#020617'/>
      <circle cx='600' cy='120' r='200' fill='url(#g)' opacity='0.55'/>
      <circle cx='180' cy='420' r='220' fill='url(#g)' opacity='0.4'/>
      <text x='50%' y='52%' text-anchor='middle' fill='white' font-family='Inter,sans-serif' font-size='44' font-weight='800'>${label}</text>
    </svg>`
  )

export const projects: Project[] = [
  {
    id: 'nexspace',
    title: 'Nexspace Studio',
    description: {
      en: 'Marketing site for a futuristic creative agency with rich scroll animations.',
      id: 'Situs marketing untuk agensi kreatif futuristik dengan animasi scroll yang kaya.'
    },
    tags: ['Next.js', 'Framer Motion', 'Tailwind'],
    category: 'Web',
    featured: true,
    cover: projCover('Nexspace', '#22d3ee', '#a855f7'),
    live: 'https://example.com',
    repo: 'https://github.com'
  },
  {
    id: 'auralink',
    title: 'Auralink Dashboard',
    description: {
      en: 'Real-time analytics dashboard for IoT devices with live charts and theming.',
      id: 'Dasbor analitik real-time untuk perangkat IoT dengan grafik langsung dan theming.'
    },
    tags: ['React', 'TanStack Query', 'Recharts'],
    category: 'Web',
    featured: true,
    cover: projCover('Auralink', '#10b981', '#06b6d4'),
    live: 'https://example.com'
  },
  {
    id: 'lumen-shop',
    title: 'Lumen Commerce',
    description: {
      en: 'Headless e-commerce storefront with cinematic product pages.',
      id: 'Storefront e-commerce headless dengan halaman produk sinematik.'
    },
    tags: ['Next.js', 'Stripe', 'Sanity'],
    category: 'Web',
    cover: projCover('Lumen', '#f59e0b', '#ef4444'),
    live: 'https://example.com'
  },
  {
    id: 'pulse-ui',
    title: 'Pulse UI Kit',
    description: { en: 'Open-source motion-first UI kit with 60+ components.', id: 'UI kit open-source berbasis motion dengan 60+ komponen.' },
    tags: ['React', 'Motion', 'Storybook'],
    category: 'Open Source',
    featured: true,
    cover: projCover('Pulse UI', '#a855f7', '#ec4899'),
    repo: 'https://github.com'
  },
  {
    id: 'mindmap-ai',
    title: 'MindMap AI',
    description: { en: 'AI-powered mindmap canvas with collaborative editing.', id: 'Kanvas mindmap bertenaga AI dengan editing kolaboratif.' },
    tags: ['React', 'Canvas', 'OpenAI'],
    category: 'Web',
    cover: projCover('MindMap AI', '#0ea5e9', '#1e40af'),
    live: 'https://example.com'
  },
  {
    id: 'trekly',
    title: 'Trekly Mobile',
    description: {
      en: 'Travel companion app with offline maps and trip journaling.',
      id: 'Aplikasi pendamping perjalanan dengan peta offline dan jurnal trip.'
    },
    tags: ['React Native', 'Expo', 'MapBox'],
    category: 'Mobile',
    cover: projCover('Trekly', '#16a34a', '#0ea5e9')
  },
  {
    id: 'studio-os',
    title: 'Studio OS',
    description: {
      en: 'Internal tool replacing 5 SaaS subscriptions for a design agency.',
      id: 'Tool internal yang menggantikan 5 langganan SaaS untuk agensi desain.'
    },
    tags: ['Next.js', 'Prisma', 'tRPC'],
    category: 'Web',
    cover: projCover('Studio OS', '#64748b', '#0f172a')
  },
  {
    id: 'fluxe',
    title: 'Fluxe Branding',
    description: { en: 'Brand identity & design system for a fintech startup.', id: 'Identitas brand & design system untuk startup fintech.' },
    tags: ['Figma', 'Design System'],
    category: 'UI/UX',
    cover: projCover('Fluxe', '#ec4899', '#8b5cf6')
  }
]

export interface Service {
  titleEn: string
  titleId: string
  descEn: string
  descId: string
  icon: string
}
export const services: Service[] = [
  {
    icon: '✦',
    titleEn: 'Web Development',
    titleId: 'Pengembangan Web',
    descEn: 'Production-ready web apps built with modern stacks and best practices.',
    descId: 'Aplikasi web siap produksi dengan stack modern dan praktik terbaik.'
  },
  {
    icon: '◈',
    titleEn: 'UI/UX Engineering',
    titleId: 'Rekayasa UI/UX',
    descEn: 'Pixel-perfect interfaces, motion design and design systems.',
    descId: 'Antarmuka rapi, motion design dan design system.'
  },
  {
    icon: '✺',
    titleEn: 'API & Backend',
    titleId: 'API & Backend',
    descEn: 'Robust APIs, databases and integrations that scale.',
    descId: 'API andal, database dan integrasi yang skalabel.'
  },
  {
    icon: '❉',
    titleEn: 'Performance Audit',
    titleId: 'Audit Performa',
    descEn: 'Lighthouse, Core Web Vitals and SEO optimization.',
    descId: 'Optimasi Lighthouse, Core Web Vitals dan SEO.'
  }
]

export const socials = [
  { name: 'GitHub', url: 'https://github.com/octalectzz', handle: '@octalectzz', iconKey: 'github' as const },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/octalectzz', handle: 'octavyan', iconKey: 'linkedin' as const },
  { name: 'Instagram', url: 'https://instagram.com/octalectzz', handle: '@octalectzz', iconKey: 'instagram' as const },
  { name: 'X', url: 'https://x.com/octalectzz', handle: '@octalectzz', iconKey: 'x' as const },
  { name: 'YouTube', url: 'https://youtube.com/@octalectzz', handle: 'OctaLectzz', iconKey: 'youtube' as const },
  { name: 'Email', url: 'mailto:hello@octalectzz.dev', handle: 'hello@octalectzz.dev', iconKey: 'email' as const }
]
