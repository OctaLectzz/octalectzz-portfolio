'use client'

import { DotsBackground, GridBackground, MeshBackground } from '@/components/backgrounds'
import { Reveal } from '@/components/reveal'
import { Container, Section } from '@/components/section'
import { Input } from '@/components/ui/input'
import { projects } from '@/data'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Layers, Search } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { useMemo, useState } from 'react'
import { FaGithub } from 'react-icons/fa6'

const categories = ['All', 'Web', 'Mobile', 'UI/UX', 'Open Source'] as const

export default function ProjectsPage() {
  const t = useTranslations()
  const lang = useLocale()
  const [cat, setCat] = useState<(typeof categories)[number]>('All')
  const [q, setQ] = useState('')

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase()
    return projects.filter((p) => {
      if (cat !== 'All' && p.category !== cat) return false
      if (!term) return true
      return (
        p.title.toLowerCase().includes(term) ||
        p.tags.some((tag) => tag.toLowerCase().includes(term)) ||
        p.description.en.toLowerCase().includes(term) ||
        p.description.id.toLowerCase().includes(term)
      )
    })
  }, [cat, q])

  return (
    <>
      <Section className="pt-10 pb-12 md:pt-16">
        <MeshBackground />
        <GridBackground />
        <Container>
          <Reveal>
            <span className="border-border bg-surface/50 text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-[0.18em] uppercase">
              <Layers className="text-primary h-3 w-3" /> Portfolio
            </span>
            <h1 className="font-display mt-4 text-5xl font-bold tracking-tight md:text-7xl">
              <span className="text-foreground">Selected </span>
              <span className="text-gradient-aurora">Projects</span>
            </h1>
            <p className="text-muted-foreground mt-5 max-w-2xl text-lg">{t('projects.heroSubtitle')}</p>
          </Reveal>

          {/* Search + Filters */}
          <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-md">
              <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
              <Input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={t('projects.searchPlaceholder')}
                className="border-border bg-surface/40 h-12 rounded-xl pl-10 text-base"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={cn(
                    'relative rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors',
                    cat === c ? 'text-primary-foreground border-transparent' : 'border-border text-muted-foreground hover:text-foreground'
                  )}
                >
                  {cat === c && (
                    <motion.span
                      layoutId="cat-pill"
                      className="bg-gradient-primary glow absolute inset-0 rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative">{c === 'All' ? t('projects.all') : c}</span>
                </button>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-0 pb-32">
        <DotsBackground />
        <Container>
          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-muted-foreground py-20 text-center"
              >
                {t('projects.empty')}
              </motion.p>
            ) : (
              <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filtered.map((p) => (
                  <motion.article
                    key={p.id}
                    layout
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.45 }}
                    whileHover={{ y: -6 }}
                    className="group border-border bg-card hover:border-primary/60 hover:shadow-glow relative overflow-hidden rounded-2xl border transition-colors"
                  >
                    <div className="relative aspect-16/10 overflow-hidden">
                      <img
                        src={p.cover}
                        alt={p.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div aria-hidden className="from-card via-card/0 absolute inset-0 bg-linear-to-t to-transparent" />
                      <span className="border-border bg-background/70 text-foreground absolute top-3 right-3 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold tracking-widest uppercase backdrop-blur">
                        {p.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                      <p className="text-muted-foreground mt-1 line-clamp-2 text-sm">{lang === 'en' ? p.description.en : p.description.id}</p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {p.tags.map((tag) => (
                          <span key={tag} className="border-border bg-surface/40 text-muted-foreground rounded-md border px-2 py-0.5 text-[11px]">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4 flex items-center gap-3">
                        {p.live && (
                          <a
                            href={p.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary inline-flex items-center gap-1 text-xs font-semibold transition-all hover:gap-2"
                          >
                            {t('projects.live')} <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        )}
                        {p.repo && (
                          <a
                            href={p.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-xs font-semibold"
                          >
                            <FaGithub className="h-3.5 w-3.5" /> {t('projects.code')}
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </Section>
    </>
  )
}
