import { LocalizedString } from './project'

export interface ContactInfo {
  email: string
  location: string
  locationFull: LocalizedString
  responseTime: LocalizedString
  whatsapp: {
    number: string
    display: string
    url: string
  }
  telegram: {
    username: string
    url: string
  }
}
