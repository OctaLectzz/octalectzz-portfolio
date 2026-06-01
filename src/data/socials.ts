import { contactInfo } from './contact'

export const socials = [
  { name: 'GitHub', url: 'https://github.com/octalectzz', handle: '@octalectzz', iconKey: 'github' as const },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/octalectzz', handle: 'octavyan', iconKey: 'linkedin' as const },
  { name: 'Instagram', url: 'https://instagram.com/octalectzz', handle: '@octalectzz', iconKey: 'instagram' as const },
  { name: 'TikTok', url: 'https://tiktok.com/@octalectzz', handle: '@octalectzz', iconKey: 'tiktok' as const },
  { name: 'Facebook', url: 'https://facebook.com/octalectzz', handle: 'OctaLectzz', iconKey: 'facebook' as const },
  { name: 'Telegram', url: contactInfo.telegram.url, handle: contactInfo.telegram.username, iconKey: 'telegram' as const },
  { name: 'Email', url: `mailto:${contactInfo.email}`, handle: contactInfo.email, iconKey: 'email' as const }
]

