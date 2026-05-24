import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export function Section({ id, className, children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={cn('relative isolate overflow-x-clip py-16 md:py-24', className)}>
      {children}
    </section>
  )
}

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn('relative mx-auto w-full max-w-7xl px-6 md:px-8', className)}>{children}</div>
}

import type { LucideIcon } from 'lucide-react'
import { Eyebrow } from './eyebrow'
import { PrimaryText } from './primary-text'

export function SectionHeader({
  eyebrow,
  icon,
  title,
  highlight,
  subtitle,
  align = 'center',
  className
}: {
  eyebrow?: string
  icon?: LucideIcon
  title: string
  highlight?: string
  subtitle?: string
  align?: 'center' | 'left'
  className?: string
}) {
  // If highlight is explicitly provided, use it.
  // Otherwise, if title has multiple words, highlight the last word automatically.
  // If title is a single word, just render it as foreground (or highlight it? usually foreground).
  let renderTitle = title
  let renderHighlight = highlight

  if (!highlight && title.includes(' ')) {
    const words = title.split(' ')
    renderHighlight = words.pop()
    renderTitle = words.join(' ')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn('mb-14 max-w-3xl', align === 'center' ? 'mx-auto text-center' : '', className)}
    >
      {eyebrow && <Eyebrow label={eyebrow} icon={icon} pulse={!icon} />}
      <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
        <span className="text-foreground">{renderTitle}</span>
        {renderHighlight && (
          <>
            {renderTitle ? ' ' : ''}
            <PrimaryText text={renderHighlight} />
          </>
        )}
      </h2>
      {subtitle && <p className="text-muted-foreground mt-4 text-base md:text-lg">{subtitle}</p>}
    </motion.div>
  )
}
