'use client'

import type { Project } from '@/types'
import { ArrowUpRight } from 'lucide-react'
import { useLocale } from 'next-intl'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const locale = useLocale()

  return (
    <a
      href={project.live ?? project.repo ?? '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="group border-border bg-card hover:border-primary/60 hover:shadow-glow relative block overflow-hidden rounded-2xl border transition-all hover:-translate-y-1"
    >
      <div className="aspect-16/10 overflow-hidden">
        <img
          src={project.cover}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-lg font-semibold">{project.title}</h3>
          <ArrowUpRight className="text-muted-foreground group-hover:text-primary h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        <p className="text-muted-foreground mt-1 line-clamp-2 text-sm">{locale === 'en' ? project.description.en : project.description.id}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="border-border bg-surface/40 text-muted-foreground rounded-md border px-2 py-0.5 text-[11px]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}
