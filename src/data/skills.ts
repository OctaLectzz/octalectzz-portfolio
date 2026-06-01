import type { SkillGroup } from '@/types'
import {
  SiBlender,
  SiBun,
  SiCanva,
  SiDocker,
  SiDrizzle,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFramer,
  SiGit,
  SiGithub,
  SiGo,
  SiGooglegemini,
  SiGraphql,
  SiHuggingface,
  SiJavascript,
  SiKubernetes,
  SiLaravel,
  SiMariadb,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPenpot,
  SiPhp,
  SiPnpm,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiPytorch,
  SiQuasar,
  SiReact,
  SiRedis,
  SiRedux,
  SiRust,
  SiShadcnui,
  SiSketch,
  SiSqlite,
  SiSupabase,
  SiSurrealdb,
  SiSvelte,
  SiTailwindcss,
  SiTensorflow,
  SiTrpc,
  SiTurborepo,
  SiTypeorm,
  SiTypescript,
  SiVercel,
  SiVite,
  SiVuedotjs,
  SiYarn
} from 'react-icons/si'

import { Bot, BrainCircuit, Code2, Network, Sparkles, TerminalSquare } from 'lucide-react'
import { FaAws } from 'react-icons/fa'

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    titleKey: 'skills.frontend',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'Vue.js', icon: SiVuedotjs, color: '#42B883' },
      { name: 'Svelte', icon: SiSvelte, color: '#FF3E00' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#38BDF8' },
      { name: 'Shadcn UI', icon: SiShadcnui, color: '#FFFFFF' },
      { name: 'Quasar', icon: SiQuasar, color: '#1976D2' },
      { name: 'Redux', icon: SiRedux, color: '#764ABC' },
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
      { name: 'Go', icon: SiGo, color: '#00ADD8' },
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
      { name: 'tRPC', icon: SiTrpc, color: '#398CCB' },
      { name: 'GraphQL', icon: SiGraphql, color: '#E10098' }
    ]
  },
  {
    id: 'database',
    titleKey: 'skills.database',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'MariaDB', icon: SiMariadb, color: '#003545' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'SQLite', icon: SiSqlite, color: '#003B57' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      { name: 'Drizzle ORM', icon: SiDrizzle, color: '#C5F74F' },
      { name: 'Prisma', icon: SiPrisma, color: '#FFFFFF' },
      { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
      { name: 'SurrealDB', icon: SiSurrealdb, color: '#FF00A0' },
      { name: 'TypeORM', icon: SiTypeorm, color: '#FC3A11' },
      { name: 'Redis', icon: SiRedis, color: '#FF4438' }
    ]
  },
  {
    id: 'ai',
    titleKey: 'skills.ai',
    skills: [
      { name: 'OpenAI', icon: SiOpenai, color: '#412991' },
      { name: 'Hugging Face', icon: SiHuggingface, color: '#FFD21E' },
      { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
      { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'ChatGPT', icon: Bot, color: '#10A37F' },
      { name: 'Claude Code', icon: BrainCircuit, color: '#D97757' },
      { name: 'Codex', icon: Code2, color: '#0058A3' },
      { name: 'Kimi', icon: Sparkles, color: '#FF5C5C' },
      { name: 'Kiro', icon: Network, color: '#8854D0' },
      { name: 'Antigravity', icon: TerminalSquare, color: '#20BF6B' }
    ]
  },
  {
    id: 'tools',
    titleKey: 'skills.tools',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
      { name: 'AWS', icon: FaAws, color: '#232F3E' },
      { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
      { name: 'Vite', icon: SiVite, color: '#646CFF' },
      { name: 'Turborepo', icon: SiTurborepo, color: '#EF4444' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'Bun', icon: SiBun, color: '#FBF0DF' },
      { name: 'pnpm', icon: SiPnpm, color: '#F7DF1E' },
      { name: 'Yarn', icon: SiYarn, color: '#2C8EBB' },
      { name: 'Rust', icon: SiRust, color: '#DEA584' }
    ]
  },
  {
    id: 'design',
    titleKey: 'skills.design',
    skills: [
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      { name: 'Framer Motion', icon: SiFramer, color: '#FF4D8B' },
      { name: 'Google Stitch', icon: SiGooglegemini, color: '#357AE8' },
      { name: 'Sketch', icon: SiSketch, color: '#F7B500' },
      { name: 'Canva', icon: SiCanva, color: '#00C4CC' },
      { name: 'Penpot', icon: SiPenpot, color: '#FFF1E5' },
      { name: 'Blender', icon: SiBlender, color: '#EA7600' }
    ]
  }
]
