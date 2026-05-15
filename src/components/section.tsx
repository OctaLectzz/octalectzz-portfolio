import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export function Section({ id, className, children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={cn('relative isolate overflow-hidden py-24 md:py-32', className)}>
      {children}
    </section>
  )
}

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn('relative mx-auto w-full max-w-7xl px-6 md:px-8', className)}>{children}</div>
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center'
}: {
  eyebrow?: string
  title: ReactNode
  subtitle?: string
  align?: 'center' | 'left'
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn('mb-14 max-w-3xl', align === 'center' ? 'mx-auto text-center' : '')}
    >
      {eyebrow && (
        <span className="border-border bg-surface/50 text-muted-foreground mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-[0.18em] uppercase backdrop-blur">
          <span className="bg-primary animate-pulse-glow h-1.5 w-1.5 rounded-full" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-foreground text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>
      {subtitle && <p className="text-muted-foreground mt-4 text-base md:text-lg">{subtitle}</p>}
    </motion.div>
  )
}
