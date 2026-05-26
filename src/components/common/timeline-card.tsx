'use client'

import { ShineCard } from '@/components/common/shine-card'
import { cn } from '@/lib/utils'
import type { ExperienceItem } from '@/types'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, ChevronDown, ChevronUp, MapPin } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { useState } from 'react'

const statusConfig: Record<ExperienceItem['status'], { label: string; className: string }> = {
  'Full Time': {
    label: 'Full Time',
    className: 'bg-emerald-500/15 text-emerald-500 border-emerald-500/25 dark:bg-emerald-400/10 dark:text-emerald-400 dark:border-emerald-400/20'
  },
  'Part Time': {
    label: 'Part Time',
    className: 'bg-sky-500/15 text-sky-500 border-sky-500/25 dark:bg-sky-400/10 dark:text-sky-400 dark:border-sky-400/20'
  },
  Internship: {
    label: 'Internship',
    className: 'bg-violet-500/15 text-violet-500 border-violet-500/25 dark:bg-violet-400/10 dark:text-violet-400 dark:border-violet-400/20'
  },
  Freelance: {
    label: 'Freelance',
    className: 'bg-amber-500/15 text-amber-500 border-amber-500/25 dark:bg-amber-400/10 dark:text-amber-400 dark:border-amber-400/20'
  }
}

interface TimelineCardProps {
  item: ExperienceItem
  index: number
  isActive?: boolean
}

export function TimelineCard({ item, index, isActive }: TimelineCardProps) {
  const locale = useLocale()
  const t = useTranslations('experience.timeline')
  const [expanded, setExpanded] = useState(false)
  const status = statusConfig[item.status]
  const descriptionText = locale === 'en' ? item.description.en : item.description.id
  const isLong = descriptionText.length > 150
  const displayText = expanded || !isLong ? descriptionText : descriptionText.slice(0, 150) + '...'

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      className="group relative"
    >
      <ShineCard
        shineColor={['#38bdf8', '#818cf8', '#c084fc']}
        borderWidth={1.5}
        className={cn(
          'border-border/60 bg-card rounded-2xl border p-6 transition-all duration-500 md:p-8',
          'hover:border-primary/30 hover:shadow-[0_8px_40px_-12px_rgba(var(--primary-glow),0.15)]',
          isActive && 'border-primary/40 shadow-[0_4px_30px_-8px_rgba(var(--primary-glow),0.12)]'
        )}
      >
        {/* Ambient corner glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
          style={{ background: 'radial-gradient(circle, var(--primary), transparent 70%)', opacity: 0 }}
        />

        {/* Header row */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex-1 space-y-2">
            {/* Role & Status */}
            <div className="flex flex-wrap items-center gap-2.5">
              <h3 className="font-display text-foreground text-lg font-semibold tracking-tight md:text-xl">{item.role}</h3>
              <span className={cn('rounded-full border px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase', status.className)}>
                {t(`status.${item.status}`)}
              </span>
            </div>

            {/* Company */}
            <div className="flex items-center gap-2">
              <div className="bg-gradient-primary grid h-7 w-7 shrink-0 place-items-center rounded-lg">
                <Briefcase className="text-primary-foreground h-3.5 w-3.5" />
              </div>
              <span className="text-foreground text-sm font-medium">{item.company}</span>
            </div>
          </div>

          {/* Period & Location */}
          <div className="flex flex-wrap items-center gap-3 sm:flex-col sm:items-end sm:gap-1.5">
            <span className="text-primary inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide">
              <Calendar className="h-3 w-3" />
              {item.period}
            </span>
            <span className="text-muted-foreground inline-flex items-center gap-1 text-xs">
              <MapPin className="h-3 w-3" />
              {item.location}
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="mt-4">
          <motion.p className="text-muted-foreground text-sm leading-relaxed" layout>
            {displayText}
          </motion.p>

          {isLong && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-primary hover:text-primary/80 mt-2 inline-flex cursor-pointer items-center gap-1 text-xs font-medium transition-colors"
            >
              {expanded ? (
                <>
                  {t('showLess')} <ChevronUp className="h-3 w-3" />
                </>
              ) : (
                <>
                  {t('readMore')} <ChevronDown className="h-3 w-3" />
                </>
              )}
            </button>
          )}
        </div>
      </ShineCard>
    </motion.div>
  )
}
