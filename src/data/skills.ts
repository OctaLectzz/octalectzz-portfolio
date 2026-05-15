import type { SkillGroup } from '@/types'
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
