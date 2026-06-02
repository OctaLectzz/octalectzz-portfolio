'use client'

import { motion } from 'framer-motion'
import { Calendar, Layers, User } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { SidebarCTA } from '@/components/common/sidebar-cta'
import { ProjectActionButtons } from '@/views/projects/show/action-buttons'

interface SidebarSectionProps {
  client?: string
  completed_at?: string
  categoryLabel?: string
  tags: string[]
  live?: string
  repo?: string
}

/** Right column sticky sidebar: metadata card, action buttons, and sidebar CTA. */
export function SidebarSection({ client, completed_at, categoryLabel, tags, live, repo }: SidebarSectionProps) {
  const t = useTranslations('projects')

  return (
    <div className="space-y-6 self-start lg:sticky lg:top-24 lg:col-span-1">
      {/* Metadata card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="border-border/40 bg-card/50 space-y-5 rounded-2xl border p-6 shadow-xl backdrop-blur-xl"
      >
        <h3 className="font-display text-foreground border-border/30 border-b pb-3 text-base font-extrabold">{t('detail')}</h3>

        <div className="space-y-3.5">
          {client && (
            <div className="border-border/15 flex items-center justify-between gap-3 border-b pb-3">
              <span className="text-muted-foreground flex items-center gap-1.5 text-xs">
                <User className="text-primary h-3.5 w-3.5" />
                {t('client')}
              </span>
              <span className="text-foreground text-right text-sm font-semibold">{client}</span>
            </div>
          )}

          {completed_at && (
            <div className="border-border/15 flex items-center justify-between gap-3 border-b pb-3">
              <span className="text-muted-foreground flex items-center gap-1.5 text-xs">
                <Calendar className="text-primary h-3.5 w-3.5" />
                {t('date')}
              </span>
              <span className="text-foreground font-mono text-sm font-semibold">{completed_at}</span>
            </div>
          )}

          <div className="border-border/15 flex items-center justify-between gap-3 border-b pb-3">
            <span className="text-muted-foreground flex items-center gap-1.5 text-xs">
              <Layers className="text-primary h-3.5 w-3.5" />
              {t('category')}
            </span>
            <span className="text-foreground text-sm font-semibold">{categoryLabel}</span>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="space-y-2">
          <span className="text-muted-foreground block text-xs font-bold tracking-wider uppercase">{t('techStack')}</span>
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="border-border/40 bg-surface/30 text-muted-foreground hover:border-primary/30 hover:text-primary rounded-md border px-2 py-0.5 font-mono text-[10px] transition-all"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <ProjectActionButtons live={live} repo={repo} className="w-full" />

      {/* Sidebar CTA */}
      <SidebarCTA />
    </div>
  )
}
