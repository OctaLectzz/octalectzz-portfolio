import type { CertificateItem } from '@/types'

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
