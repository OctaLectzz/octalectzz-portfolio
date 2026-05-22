'use client'

import { CyberGridBackground } from '@/components/common/cyber-grid-background'
import { Eyebrow } from '@/components/common/eyebrow'
import { NebulaBackground } from '@/components/common/nebula-background'
import { ProjectCard } from '@/components/common/project-card'
import { Reveal } from '@/components/common/reveal'
import { Container, Section } from '@/components/common/section'
import { Input } from '@/components/ui/input'
import { categories, projects } from '@/data'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { Layers, Search } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { useMemo, useState } from 'react'

export default function ProjectsPage() {
  const t = useTranslations()
  const lang = useLocale()
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categoryOptions = useMemo(() => {
    return [
      { id: 'all', label: t('projects.all') },
      ...categories.map((c) => ({
        id: c.id,
        label: lang === 'en' ? c.nameEn : c.nameId
      }))
    ]
  }, [lang, t])

  const filtered = useMemo(() => {
    const term = searchQuery.trim().toLowerCase()
    return projects.filter((project) => {
      if (selectedCategoryId !== 'all' && project.categoryId !== selectedCategoryId) return false
      if (!term) return true
      return (
        project.title.toLowerCase().includes(term) ||
        project.tags.some((tag) => tag.toLowerCase().includes(term)) ||
        project.description.en.toLowerCase().includes(term) ||
        project.description.id.toLowerCase().includes(term)
      )
    })
  }, [selectedCategoryId, searchQuery])

  return (
    <>
      {/* Hero Section */}
      <Section className="relative overflow-hidden pt-10 pb-12 md:pt-16">
        <NebulaBackground />

        <Container>
          <Reveal>
            <Eyebrow label="Portfolio" icon={Layers} />
            <h1 className="font-display mt-4 text-5xl font-bold tracking-tight md:text-7xl">
              <span className="text-foreground">Selected </span>
              <span className="text-gradient-aurora">Projects</span>
            </h1>
            <p className="text-muted-foreground mt-5 max-w-2xl text-lg">{t('projects.heroSubtitle')}</p>
          </Reveal>

          {/* Search + Filters with glassmorphism */}
          <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-md">
              <Search className="text-muted-foreground/75 pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transition-colors" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('projects.searchPlaceholder')}
                className="border-border/60 bg-surface/30 focus:border-primary/50 focus:ring-primary/20 h-12 rounded-xl pl-10 text-base backdrop-blur-md transition-all"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categoryOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedCategoryId(opt.id)}
                  className={cn(
                    'relative rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors duration-300',
                    selectedCategoryId === opt.id
                      ? 'text-primary-foreground border-transparent'
                      : 'border-border/60 text-muted-foreground hover:border-primary/30 hover:text-foreground bg-surface/20 backdrop-blur-sm'
                  )}
                >
                  {selectedCategoryId === opt.id && (
                    <motion.span
                      layoutId="cat-pill"
                      className="bg-gradient-primary glow absolute inset-0 rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{opt.label}</span>
                </button>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Grid Section */}
      <Section className="relative overflow-hidden pt-0 pb-32">
        <CyberGridBackground />

        <Container>
          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="border-border bg-surface/30 mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border shadow-[0_0_15px_rgba(var(--primary-glow),0.1)] backdrop-blur-md">
                  <Search className="text-muted-foreground/60 h-6 w-6" />
                </div>
                <p className="text-muted-foreground max-w-sm">{t('projects.empty')}</p>
              </motion.div>
            ) : (
              <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filtered.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProjectCard project={project} index={idx} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </Section>
    </>
  )
}
