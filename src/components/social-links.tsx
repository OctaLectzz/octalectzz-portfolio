'use client'

import { socials } from '@/data'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import { HiOutlineMail } from 'react-icons/hi'

const iconMap: Record<string, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  x: FaXTwitter,
  youtube: FaYoutube,
  email: HiOutlineMail
}

export function SocialLinks({ className, size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) {
  const sizes = { sm: 'h-9 w-9 text-base', md: 'h-11 w-11 text-lg', lg: 'h-14 w-14 text-2xl' }
  return (
    <div className={cn('flex flex-wrap items-center gap-3', className)}>
      {socials.map((s, i) => {
        const Icon = iconMap[s.iconKey]
        return (
          <motion.a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            whileHover={{ y: -4, scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              'group border-border bg-surface/40 hover:border-primary/60 hover:text-primary relative grid place-items-center rounded-xl border backdrop-blur transition-colors',
              sizes[size]
            )}
          >
            <Icon />
            <span className="bg-popover text-popover-foreground pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 rounded-md px-2 py-1 text-xs whitespace-nowrap opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
              {s.handle}
            </span>
          </motion.a>
        )
      })}
    </div>
  )
}
