'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

import type { Project } from '@/types'

interface NavigationSectionProps {
  prevProject: Project
  nextProject: Project
}

/** Previous / Next project navigation footer. */
export function NavigationSection({ prevProject, nextProject }: NavigationSectionProps) {
  const t = useTranslations('projects')

  return (
    <div className="border-border/20 mt-16 flex items-center justify-between border-t pt-8">
      <Link
        href={`/projects/${prevProject.id}`}
        className="group border-border/40 bg-surface/15 hover:border-primary/30 flex items-center gap-3 rounded-2xl border px-4 py-3 text-left backdrop-blur-sm transition-all"
      >
        <ChevronLeft className="text-muted-foreground group-hover:text-primary h-5 w-5 transition-transform group-hover:-translate-x-1" />
        <div>
          <span className="text-muted-foreground block text-[10px] font-bold tracking-wider uppercase">{t('prevProject')}</span>
          <span className="text-foreground group-hover:text-primary block text-sm font-semibold transition-colors">{prevProject.title}</span>
        </div>
      </Link>

      <Link
        href={`/projects/${nextProject.id}`}
        className="group border-border/40 bg-surface/15 hover:border-primary/30 flex items-center gap-3 rounded-2xl border px-4 py-3 text-right backdrop-blur-sm transition-all"
      >
        <div>
          <span className="text-muted-foreground block text-[10px] font-bold tracking-wider uppercase">{t('nextProject')}</span>
          <span className="text-foreground group-hover:text-primary block text-sm font-semibold transition-colors">{nextProject.title}</span>
        </div>
        <ChevronRight className="text-muted-foreground group-hover:text-primary h-5 w-5 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  )
}
