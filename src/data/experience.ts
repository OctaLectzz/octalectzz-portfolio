import type { ExperienceItem } from '@/types'

export const experience: ExperienceItem[] = [
  {
    role: 'Fullstack Developer',
    company: 'Freelance / Independent',
    period: '2023 - Present',
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
    period: '2022 - 2023',
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
    period: '2021 - 2022',
    location: 'Surabaya, ID',
    description: {
      en: 'Delivered 10+ marketing sites and a custom CMS. Introduced motion design as a baseline for hero sections.',
      id: 'Mengerjakan 10+ situs marketing dan CMS kustom. Memperkenalkan motion design sebagai standar untuk hero section.'
    },
    stack: ['Vue', 'Laravel', 'MySQL']
  }
]
