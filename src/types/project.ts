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
