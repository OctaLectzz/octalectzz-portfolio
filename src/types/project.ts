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
  category_id: string // references Category.id
  cover: string
  live?: string
  repo?: string
  featured?: boolean

  // New details fields
  client?: string
  completed_at?: Date
  features: LocalizedList
  advantages: LocalizedList
  problem: LocalizedString
  solution: LocalizedString
  impact: LocalizedString
  gallery?: string[]
}
