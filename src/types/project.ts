export interface LocalizedString {
  en: string
  id: string
}

export interface LocalizedList {
  en: string[]
  id: string[]
}

export interface Project {
  id: string
  title: string
  description: LocalizedString
  tags: string[]
  categoryId: string // references Category.id
  cover: string
  live?: string
  repo?: string
  featured?: boolean

  // New details fields
  client?: string
  completedAt?: string // e.g. "2026-04" or "April 2026"
  features: LocalizedList
  advantages: LocalizedList
  problem: LocalizedString
  solution: LocalizedString
  impact: LocalizedString
  gallery?: string[]
}
