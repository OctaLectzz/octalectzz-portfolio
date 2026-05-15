import type { IconType } from 'react-icons'

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
