'use client'

import { ShineCard } from '@/components/common/shine-card'
import type { ExtendedEducationItem } from '@/data/education'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Calendar, GraduationCap, Sparkles } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'

interface EducationCardProps {
  item: ExtendedEducationItem
  index: number
}

const statusConfig = {
  Completed: 'bg-emerald-500/15 text-emerald-500 border-emerald-500/25 dark:bg-emerald-400/10 dark:text-emerald-400 dark:border-emerald-400/20',
  'In Progress': 'bg-indigo-500/15 text-indigo-500 border-indigo-500/25 dark:bg-indigo-400/10 dark:text-indigo-400 dark:border-indigo-400/20'
}

export function EducationCard({ item, index }: EducationCardProps) {
  const locale = useLocale()
  const t = useTranslations('experience.education')

  const statusStyle = statusConfig[item.status] || ''
  const descriptionText = locale === 'en' ? item.description.en : item.description.id

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group relative h-full"
    >
      <ShineCard
        shineColor={['#6366f1', '#a855f7', '#ec4899']}
        borderWidth={1.5}
        className={cn(
          'border-border/60 bg-card/60 flex h-full flex-col justify-between rounded-2xl border p-6 backdrop-blur-md transition-all duration-500 md:p-8',
          'hover:border-primary/40 hover:shadow-[0_12px_40px_-12px_rgba(var(--primary-glow),0.2)]'
        )}
      >
        {/* Decorative corner ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
          style={{ background: 'radial-gradient(circle, var(--secondary), transparent 70%)' }}
        />

        <div className="space-y-4">
          {/* Header Row */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-primary grid h-10 w-10 shrink-0 place-items-center rounded-xl shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                <GraduationCap className="text-primary-foreground h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-foreground group-hover:text-primary text-lg font-bold tracking-tight transition-colors md:text-xl">
                  {item.school}
                </h3>
                <span
                  className={cn('mt-1 inline-block rounded-full border px-2.5 py-0.5 text-[9px] font-bold tracking-wider uppercase', statusStyle)}
                >
                  {t(`status.${item.status}`)}
                </span>
              </div>
            </div>

            {/* Date Badge */}
            <span className="text-primary bg-primary/10 border-primary/20 inline-flex items-center gap-1.5 self-start rounded-full border px-3 py-1 text-xs font-semibold tracking-wide">
              <Calendar className="h-3 w-3" />
              {item.period}
            </span>
          </div>

          {/* Major / Degree Info */}
          <div className="border-primary/40 border-l-2 py-1 pl-4">
            <h4 className="text-foreground text-sm font-semibold tracking-wide uppercase">{item.degree}</h4>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-justify text-sm leading-relaxed">{descriptionText}</p>
        </div>

        {/* Skills/Core Focus Section */}
        {item.skills && item.skills.length > 0 && (
          <div className="border-border/40 mt-6 border-t pt-5">
            <h5 className="text-foreground mb-3 flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase">
              <Sparkles className="text-primary h-3.5 w-3.5" />
              {t('focus')}
            </h5>
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill, si) => (
                <span
                  key={si}
                  className="bg-secondary/10 hover:bg-primary/20 text-muted-foreground hover:text-primary border-border/60 hover:border-primary/30 rounded-lg border px-2.5 py-1 text-xs transition-all duration-300 select-none"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </ShineCard>
    </motion.div>
  )
}
