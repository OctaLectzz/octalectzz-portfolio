'use client'

import { ArrowUpRight, Rocket } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

import { SpotlightBackground } from '@/components/common/backgrounds'
import { ProjectCard } from '@/components/common/project-card'
import { StaggerContainer, StaggerItem } from '@/components/common/reveal'
import { Container, Section, SectionHeader } from '@/components/common/section'
import { projects } from '@/data'

export function ProjectsSection() {
  const t = useTranslations('home.projects')
  const featured = projects.filter((p) => p.featured)

  return (
    <Section>
      <SpotlightBackground color="primary" />

      <Container>
        <div className="mb-10 flex items-end justify-between gap-4">
          <SectionHeader align="left" eyebrow="Selected work" icon={Rocket} title={t('title')} subtitle={t('subtitle')} />
          <Link
            href="/projects"
            className="text-primary hidden items-center gap-1.5 text-sm font-semibold transition-all hover:gap-2.5 sm:inline-flex"
          >
            {t('viewAll')} <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}
