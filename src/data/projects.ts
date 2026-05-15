import type { Project } from '@/types'

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
