'use client'

import { ArrowUpRight, Rocket } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

import { CyberFrameBackground } from '@/components/backgrounds'
import { ProjectCard } from '@/components/common/project-card'
import { Container, Section, SectionHeader } from '@/components/common/section'
import { ParticleField } from '@/components/ui/particle-field'
import { projects } from '@/data'

export function ProjectsSection() {
  const t = useTranslations('home.projects')
  const featuredProjects = projects.filter((projectItem) => projectItem.featured).slice(0, 3)

  return (
    <Section>
      <CyberFrameBackground />
      <ParticleField />

      <Container>
        <div className="mb-10 flex items-end justify-between gap-4">
          <SectionHeader align="left" eyebrow="Selected work" icon={Rocket} title={t('title')} subtitle={t('subtitle')} className="mb-0" />
          <Link
            href="/projects"
            className="text-primary hover:text-primary-glow border-border/50 bg-surface/30 hover:border-primary/40 group hidden items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-semibold backdrop-blur-md transition-all hover:shadow-[0_0_15px_rgba(var(--primary-glow),0.15)] sm:inline-flex"
          >
            <span className="relative z-10 flex items-center gap-1">
              {t('viewAll')}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Mobile only View All Button */}
        <div className="mt-8 flex justify-center sm:hidden">
          <Link
            href="/projects"
            className="text-primary border-border/50 bg-surface/30 hover:border-primary/40 flex w-full items-center justify-center gap-1.5 rounded-full border px-5 py-2.5 text-sm font-semibold backdrop-blur-md transition-all"
          >
            {t('viewAll')} <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </Section>
  )
}
