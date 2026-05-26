export interface ExperienceItem {
  role: string
  company: string
  period: string
  location: string
  status: 'Internship' | 'Part Time' | 'Full Time' | 'Freelance'
  description: { en: string; id: string }
  stack: string[]
}
