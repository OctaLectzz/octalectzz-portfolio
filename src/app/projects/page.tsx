'use client'

import { CyberFrameBackground } from '@/components/backgrounds'
import { AppPagination } from '@/components/common/app-pagination'
import { PageHeroSection } from '@/components/common/page-hero-section'
import { ProjectCard } from '@/components/common/project-card'
import { Container, Section } from '@/components/common/section'
import { Input } from '@/components/ui/input'
import { categories, projects } from '@/data'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { Layers, Search } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { useMemo, useRef, useState } from 'react'

const ITEMS_PER_PAGE = 6

export default function ProjectsPage() {
  const t = useTranslations()
  const lang = useLocale()
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const projectsStartRef = useRef<HTMLDivElement>(null)

  const breadcrumbs = [{ label: t('nav.home'), href: '/' }, { label: t('nav.projects') }]

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

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)

  // Ensure active page is within bounds
  const activePage = Math.min(currentPage, Math.max(1, totalPages))

  const paginated = useMemo(() => {
    const start = (activePage - 1) * ITEMS_PER_PAGE
    return filtered.slice(start, start + ITEMS_PER_PAGE)
  }, [filtered, activePage])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    projectsStartRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleCategoryChange = (id: string) => {
    setSelectedCategoryId(id)
    setCurrentPage(1)
  }

  const handleSearchChange = (val: string) => {
    setSearchQuery(val)
    setCurrentPage(1)
  }

  return (
    <>
      {/* Hero Section */}
      <PageHeroSection
        title={t('projects.heroTitle')}
        highlight={t('projects.heroTitle').split(' ').slice(1).join(' ')}
        subtitle={t('projects.heroSubtitle')}
        breadcrumbs={breadcrumbs}
        eyebrow={t('projects.heroEyebrow')}
        eyebrowIcon={Layers}
      >
        {/* Search + Filters with glassmorphism */}
        <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-md">
            <Search className="text-muted-foreground/75 pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transition-colors" />
            <Input
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder={t('projects.searchPlaceholder')}
              className="border-border/60 bg-surface/30 focus:border-primary/50 focus:ring-primary/20 h-12 rounded-xl pl-10 text-base backdrop-blur-md transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categoryOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => handleCategoryChange(opt.id)}
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
      </PageHeroSection>

      {/* Target for scrolling to top of projects grid */}
      <div ref={projectsStartRef} className="scroll-mt-24" />

      {/* Grid Section */}
      <Section className="relative overflow-hidden pt-0 pb-32">
        <CyberFrameBackground />

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
              <div className="flex flex-col gap-10">
                <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {paginated.map((project, idx) => (
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

                <AppPagination currentPage={activePage} totalPages={totalPages} onPageChange={handlePageChange} />
              </div>
            )}
          </AnimatePresence>
        </Container>
      </Section>
    </>
  )
}
