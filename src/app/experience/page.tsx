'use client'

import { BeamsBackground, DotsBackground, GridBackground, MeshBackground } from '@/components/backgrounds'
import { Reveal, StaggerContainer, StaggerItem } from '@/components/reveal'
import { Container, Section, SectionHeader } from '@/components/section'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { certificates, education, experience } from '@/data'
import { motion } from 'framer-motion'
import { Award, Briefcase, Calendar, GraduationCap, MapPin } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { useState } from 'react'

export default function ExperiencePage() {
  const t = useTranslations()
  const locale = useLocale()
  const [preview, setPreview] = useState<{ title: string; image: string } | null>(null)

  return (
    <>
      {/* HERO */}
      <Section className="pt-10 pb-12 md:pt-16">
        <MeshBackground />
        <GridBackground />
        <Container>
          <Reveal>
            <span className="border-border bg-surface/50 text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-[0.18em] uppercase">
              <Briefcase className="text-primary h-3 w-3" /> Journey
            </span>
            <h1 className="font-display mt-4 text-5xl font-bold tracking-tight md:text-7xl">
              <span className="text-foreground">{t('exp.heroTitle').split(' ')[0]} </span>
              <span className="text-gradient-aurora">{t('exp.heroTitle').split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-muted-foreground mt-5 max-w-2xl text-lg">{t('exp.heroSubtitle')}</p>
          </Reveal>
        </Container>
      </Section>

      {/* TIMELINE */}
      <Section>
        <DotsBackground />
        <Container>
          <SectionHeader eyebrow="Work" title={<>{t('exp.timeline')}</>} />
          <div className="relative mx-auto max-w-3xl">
            <div
              aria-hidden
              className="from-primary/60 via-secondary/40 absolute top-0 left-4 h-full w-px bg-linear-to-b to-transparent md:left-1/2 md:-translate-x-1/2"
            />
            <ul className="space-y-10">
              {experience.map((e, i) => (
                <motion.li
                  key={e.role + e.period}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className={`relative grid gap-4 md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? '' : 'md:[&>div:first-child]:order-2'}`}
                >
                  <span
                    aria-hidden
                    className="bg-gradient-primary glow absolute top-3 left-4 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full md:left-1/2"
                  />
                  <div className="pl-10 md:pl-0 md:text-right">
                    <p className="text-primary inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase">
                      <Calendar className="h-3 w-3" /> {e.period}
                    </p>
                    <h3 className="font-display mt-1 text-xl font-semibold">{e.role}</h3>
                    <p className="text-muted-foreground">{e.company}</p>
                    <p className="text-muted-foreground mt-1 inline-flex items-center gap-1 text-xs">
                      <MapPin className="h-3 w-3" /> {e.location}
                    </p>
                  </div>
                  <div className="pl-10 md:pl-0">
                    <div className="border-border bg-card rounded-2xl border p-5">
                      <p className="text-muted-foreground text-sm">{locale === 'en' ? e.description.en : e.description.id}</p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {e.stack.map((s) => (
                          <span key={s} className="border-border bg-surface/40 text-muted-foreground rounded-md border px-2 py-0.5 text-[11px]">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* EDUCATION */}
      <Section>
        <BeamsBackground />
        <Container>
          <SectionHeader
            eyebrow="Education"
            title={
              <>
                <GraduationCap className="text-primary mr-2 inline-block h-8 w-8" />
                {t('exp.education')}
              </>
            }
          />
          <StaggerContainer className="grid gap-5 md:grid-cols-2">
            {education.map((e) => (
              <StaggerItem key={e.school}>
                <div className="group border-border bg-card hover:border-primary/60 hover:shadow-glow h-full rounded-2xl border p-6 transition-all hover:-translate-y-1">
                  <p className="text-primary text-xs font-semibold tracking-widest uppercase">{e.period}</p>
                  <h3 className="font-display mt-1 text-xl font-semibold">{e.school}</h3>
                  <p className="text-muted-foreground">{e.degree}</p>
                  <p className="text-muted-foreground mt-3 text-sm">{locale === 'en' ? e.description.en : e.description.id}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* CERTIFICATES */}
      <Section className="pb-32">
        <MeshBackground />
        <Container>
          <SectionHeader
            eyebrow="Awards"
            title={
              <>
                <Award className="text-secondary mr-2 inline-block h-8 w-8" />
                {t('exp.certificates')}
              </>
            }
          />
          <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((c) => (
              <StaggerItem key={c.title}>
                <button
                  onClick={() => setPreview({ title: c.title, image: c.image })}
                  className="group border-border bg-card hover:border-primary/60 hover:shadow-glow block w-full overflow-hidden rounded-2xl border text-left transition-all hover:-translate-y-1"
                  aria-label={`${t('exp.viewCert')} – ${c.title}`}
                >
                  <div className="relative aspect-4/3 overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div aria-hidden className="from-background/90 absolute inset-0 bg-linear-to-t via-transparent to-transparent" />
                    <div className="absolute right-3 bottom-3 left-3">
                      <p className="text-primary text-xs font-medium">
                        {c.issuer} · {c.year}
                      </p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-base font-semibold">{c.title}</h3>
                    <p className="text-muted-foreground mt-0.5 text-xs">{t('exp.viewCert')} →</p>
                  </div>
                </button>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      <Dialog open={!!preview} onOpenChange={(o) => !o && setPreview(null)}>
        <DialogContent className="border-border bg-card max-w-3xl p-2">
          <DialogTitle className="sr-only">{preview?.title ?? 'Certificate'}</DialogTitle>
          {preview && (
            <div className="overflow-hidden rounded-xl">
              <img src={preview.image} alt={preview.title} className="h-auto w-full" />
              <p className="font-display px-2 py-3 text-center text-sm font-semibold">{preview.title}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
