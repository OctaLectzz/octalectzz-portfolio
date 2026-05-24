'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Calendar } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import * as React from 'react'
import { useMemo } from 'react'

import { NeonGridBackground } from '@/components/backgrounds/neon-grid-background'
import { AppBreadcrumb } from '@/components/common/app-breadcrumb'
import { PrimaryButton } from '@/components/common/primary-button'
import { Container, Section } from '@/components/common/section'
import { categories, projects } from '@/data'

import { ContentSection } from '@/views/projects/show/content-section'
import { GallerySection } from '@/views/projects/show/gallery-section'
import { HeroSection } from '@/views/projects/show/hero-section'
import { NavigationSection } from '@/views/projects/show/navigation-section'
import { RelatedSection } from '@/views/projects/show/related-section'
import { SidebarSection } from '@/views/projects/show/sidebar-section'

interface PageProps {
  params: Promise<{ id: string }>
}

export default function ProjectDetailPage({ params }: PageProps) {
  const { id } = React.use(params)
  const t = useTranslations()
  const locale = useLocale()
  const router = useRouter()

  const currentIndex = projects.findIndex((p) => p.id === id)
  const project = projects[currentIndex]

  const relatedProjects = useMemo(() => {
    if (!project) return []
    const sameCategory = projects.filter((p) => p.categoryId === project.categoryId && p.id !== project.id)
    if (sameCategory.length >= 3) return sameCategory.slice(0, 3)
    const others = projects.filter((p) => p.id !== project.id && p.categoryId !== project.categoryId)
    return [...sameCategory, ...others].slice(0, 3)
  }, [project])

  // Not found state
  if (!project) {
    return (
      <Section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        <NeonGridBackground className="opacity-50" />
        <Container className="text-center">
          <h2 className="font-display mb-4 text-3xl font-bold">{t('projects.projectNotFound')}</h2>
          <PrimaryButton variant="primary" onClick={() => router.push('/projects')}>
            <ArrowLeft className="h-4 w-4" /> {t('projects.backToProjects')}
          </PrimaryButton>
        </Container>
      </Section>
    )
  }

  // Prev / Next
  const prevProject = projects[currentIndex - 1] || projects[projects.length - 1]
  const nextProject = projects[currentIndex + 1] || projects[0]

  // Localized data
  const desc = locale === 'en' ? project.description.en : project.description.id
  const featuresList = locale === 'en' ? project.features.en : project.features.id
  const advantagesList = locale === 'en' ? project.advantages.en : project.advantages.id
  const problemText = locale === 'en' ? project.problem.en : project.problem.id
  const solutionText = locale === 'en' ? project.solution.en : project.solution.id
  const impactText = locale === 'en' ? project.impact.en : project.impact.id

  const categoryObj = categories.find((c) => c.id === project.categoryId)
  const categoryLabel = locale === 'en' ? categoryObj?.nameEn : categoryObj?.nameId

  return (
    <section className="relative isolate overflow-x-clip pt-0 pb-24 md:pt-0">
      <NeonGridBackground />

      {/* Hero Cover */}
      <HeroSection cover={project.cover} title={project.title} />

      <Container>
        {/* Back + Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-6 flex items-center justify-between"
        >
          <Link
            href="/projects"
            className="group text-muted-foreground hover:text-primary inline-flex items-center gap-2 text-sm font-semibold transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {t('projects.backToProjects')}
          </Link>

          <AppBreadcrumb
            homeLabel={t('projects.breadcrumbHome')}
            items={[{ label: t('projects.breadcrumbProjects'), href: '/projects' }, { label: project.title }]}
          />
        </motion.div>

        {/* Title Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="mb-10 space-y-5"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="border-primary/40 bg-primary/10 text-primary-glow rounded-full border px-3 py-0.5 font-mono text-[10px] font-bold tracking-widest uppercase shadow-[0_0_12px_rgba(var(--primary-glow),0.15)]">
              {categoryLabel}
            </span>
            {project.completedAt && (
              <span className="text-muted-foreground flex items-center gap-1.5 font-mono text-xs">
                <Calendar className="h-3.5 w-3.5" />
                {project.completedAt}
              </span>
            )}
          </div>

          <h1 className="font-display text-foreground text-4xl font-extrabold tracking-tight md:text-6xl">{project.title}</h1>

          <p className="text-muted-foreground max-w-4xl text-lg leading-relaxed">{desc}</p>
        </motion.div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-3 lg:gap-12">
          <ContentSection
            problemText={problemText}
            solutionText={solutionText}
            impactText={impactText}
            featuresList={featuresList}
            advantagesList={advantagesList}
          />

          <SidebarSection
            client={project.client}
            completedAt={project.completedAt}
            categoryLabel={categoryLabel}
            tags={project.tags}
            live={project.live}
            repo={project.repo}
          />
        </div>

        {/* Gallery */}
        <GallerySection images={project.gallery || []} title={project.title} />

        {/* Prev / Next */}
        <NavigationSection prevProject={prevProject} nextProject={nextProject} />

        {/* Related Projects */}
        <RelatedSection projects={relatedProjects} />
      </Container>
    </section>
  )
}
