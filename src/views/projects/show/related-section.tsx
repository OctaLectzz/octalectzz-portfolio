'use client'

import { useTranslations } from 'next-intl'

import { ProjectCard } from '@/components/common/project-card'
import type { Project } from '@/types'

interface RelatedSectionProps {
  projects: Project[]
}

/** Related projects grid section. */
export function RelatedSection({ projects }: RelatedSectionProps) {
  const t = useTranslations('projects')

  if (projects.length === 0) return null

  return (
    <div className="mt-20 space-y-6">
      <div className="flex flex-col gap-2">
        <span className="text-primary-glow font-mono text-xs font-bold tracking-widest uppercase">{t('relatedTitle')}</span>
        <h2 className="font-display text-foreground text-3xl font-extrabold">{t('exploreMore')}</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((p, idx) => (
          <ProjectCard key={p.id} project={p} index={idx} />
        ))}
      </div>
    </div>
  )
}
