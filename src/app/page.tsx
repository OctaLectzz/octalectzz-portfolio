'use client'

import profile from '@/assets/profile.jpg'
import { BeamsBackground, DotsBackground, GridBackground, MeshBackground, SpotlightBackground } from '@/components/backgrounds'
import { Marquee } from '@/components/marquee'
import { Reveal, StaggerContainer, StaggerItem } from '@/components/reveal'
import { Container, Section, SectionHeader } from '@/components/section'
import { SocialLinks } from '@/components/social-links'
import { MagneticButton } from '@/components/ui/magnetic-button'
import { projects, services, skillGroups } from '@/data'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Download, Layers, Rocket, Sparkles } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  const t = useTranslations()
  const locale = useLocale()
  const featured = projects.filter((p) => p.featured)
  const allSkills = Array.from(new Map(skillGroups.flatMap((g) => g.skills).map((s) => [s.name, s])).values())

  return (
    <>
      {/* HERO */}
      <Section className="pt-10 md:pt-16">
        <MeshBackground />
        <GridBackground />

        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="border-border bg-surface/50 text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur"
              >
                <span className="relative flex h-2 w-2">
                  <span className="bg-accent absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                  <span className="bg-accent relative inline-flex h-2 w-2 rounded-full" />
                </span>
                {t('hero.eyebrow')}
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.05 }}
                className="font-display mt-5 text-5xl leading-[1.05] font-bold tracking-tight md:text-7xl"
              >
                <span className="text-foreground">Octavyan </span>
                <span className="text-gradient-aurora">Putra</span>
                <br />
                <span className="text-foreground">Ramadhan</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-muted-foreground mt-6 max-w-xl text-base md:text-lg"
              >
                {t('hero.subtitle')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <Link href="/projects">
                  <MagneticButton variant="primary">
                    {t('hero.ctaPrimary')} <ArrowRight className="h-4 w-4" />
                  </MagneticButton>
                </Link>
                <MagneticButton variant="outline">
                  <Download className="h-4 w-4" /> {t('hero.ctaSecondary')}
                </MagneticButton>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-10">
                <p className="text-muted-foreground mb-3 text-xs font-semibold tracking-widest uppercase">Find me on</p>
                <SocialLinks size="sm" />
              </motion.div>
            </div>

            {/* Profile photo with orbits */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto aspect-square w-full max-w-md"
            >
              <div aria-hidden className="bg-gradient-aurora animate-pulse-glow absolute inset-0 rounded-full opacity-30 blur-3xl" />
              <motion.div
                aria-hidden
                className="border-primary/30 absolute inset-4 rounded-full border"
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
              >
                <span className="bg-primary glow absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full" />
              </motion.div>
              <motion.div
                aria-hidden
                className="border-secondary/30 absolute inset-10 rounded-full border"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              >
                <span className="bg-secondary glow-violet absolute -bottom-1.5 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full" />
              </motion.div>

              <motion.div
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative grid place-items-center"
              >
                <div className="border-border glow relative aspect-square w-[78%] overflow-hidden rounded-full border">
                  <Image src={profile} alt="Octavyan Putra Ramadhan" width={896} height={896} className="h-full w-full object-cover" priority />
                  <div aria-hidden className="from-primary/10 to-secondary/20 absolute inset-0 bg-linear-to-tr via-transparent mix-blend-overlay" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: 'spring' }}
                className="border-border glass shadow-glow absolute top-10 -left-2 rounded-2xl border px-4 py-3"
              >
                <p className="text-muted-foreground text-[10px] tracking-widest uppercase">Role</p>
                <p className="text-sm font-semibold">{t('hero.role')}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.75, type: 'spring' }}
                className="border-border glass shadow-violet absolute -right-2 bottom-10 rounded-2xl border px-4 py-3"
              >
                <p className="text-muted-foreground text-[10px] tracking-widest uppercase">Location</p>
                <p className="text-sm font-semibold">{t('hero.location')}</p>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* MARQUEE OF SKILLS */}
      <section className="border-border bg-surface/30 relative -mt-6 overflow-hidden border-y py-8">
        <SpotlightBackground color="secondary" />
        <Marquee speed={36}>
          {allSkills.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.name} className="text-muted-foreground flex items-center gap-2.5">
                <Icon className="h-6 w-6" style={{ color: s.color }} />
                <span className="font-display text-lg font-semibold tracking-tight">{s.name}</span>
                <span className="text-primary">✦</span>
              </div>
            )
          })}
        </Marquee>
      </section>

      {/* ABOUT + STATS */}
      <Section>
        <DotsBackground />
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <span className="border-border bg-surface/50 text-muted-foreground mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-[0.18em] uppercase">
                <Sparkles className="text-primary h-3 w-3" /> About
              </span>
              <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">{t('home.aboutTitle')}</h2>
              <p className="text-muted-foreground mt-5 text-lg">{t('home.aboutBody')}</p>
            </Reveal>

            <StaggerContainer className="grid grid-cols-2 gap-4">
              {[
                { v: '40+', k: t('home.statsProjects') },
                { v: '25+', k: t('home.statsClients') },
                { v: '4+', k: t('home.statsYears') },
                { v: '1.2k', k: t('home.statsCommits') }
              ].map((s) => (
                <StaggerItem key={s.k}>
                  <div className="group border-border bg-card hover:border-primary/60 hover:shadow-glow relative overflow-hidden rounded-2xl border p-6 transition-all hover:-translate-y-1">
                    <p className="font-display text-gradient text-4xl font-bold">{s.v}</p>
                    <p className="text-muted-foreground mt-1 text-sm">{s.k}</p>
                    <div
                      aria-hidden
                      className="bg-primary/10 absolute -top-6 -right-6 h-24 w-24 rounded-full blur-2xl transition-opacity group-hover:opacity-100"
                    />
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </Container>
      </Section>

      {/* SERVICES */}
      <Section>
        <BeamsBackground />
        <Container>
          <SectionHeader eyebrow="Services" title={<>{t('home.servicesTitle')}</>} subtitle={t('home.servicesSubtitle')} />
          <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <StaggerItem key={s.titleEn}>
                <div className="group border-border bg-card hover:border-primary/60 relative h-full overflow-hidden rounded-2xl border p-6 transition-all hover:-translate-y-1">
                  <div
                    aria-hidden
                    className="via-primary/60 absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                  />
                  <div className="bg-gradient-primary text-primary-foreground mb-4 grid h-11 w-11 place-items-center rounded-xl text-xl">
                    {s.icon}
                  </div>
                  <h3 className="font-display text-lg font-semibold">{locale === 'en' ? s.titleEn : s.titleId}</h3>
                  <p className="text-muted-foreground mt-2 text-sm">{locale === 'en' ? s.descEn : s.descId}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* FEATURED PROJECTS */}
      <Section>
        <SpotlightBackground color="primary" />
        <Container>
          <div className="mb-10 flex items-end justify-between gap-4">
            <SectionHeader align="left" eyebrow="Selected work" title={<>{t('home.featuredTitle')}</>} subtitle={t('home.featuredSubtitle')} />
            <Link
              href="/projects"
              className="text-primary hidden items-center gap-1.5 text-sm font-semibold transition-all hover:gap-2.5 sm:inline-flex"
            >
              {t('home.viewAll')} <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <StaggerItem key={p.id}>
                <a
                  href={p.live ?? p.repo ?? '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-border bg-card hover:border-primary/60 hover:shadow-glow relative block overflow-hidden rounded-2xl border transition-all hover:-translate-y-1"
                >
                  <div className="aspect-16/10 overflow-hidden">
                    <img
                      src={p.cover}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                      <ArrowUpRight className="text-muted-foreground group-hover:text-primary h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <p className="text-muted-foreground mt-1 line-clamp-2 text-sm">{locale === 'en' ? p.description.en : p.description.id}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {p.tags.map((tag) => (
                        <span key={tag} className="border-border bg-surface/40 text-muted-foreground rounded-md border px-2 py-0.5 text-[11px]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="pb-32">
        <MeshBackground />
        <Container>
          <Reveal>
            <div className="border-border bg-card relative overflow-hidden rounded-3xl border p-10 text-center md:p-16">
              <div aria-hidden className="bg-gradient-aurora absolute inset-0 opacity-10" />
              <div aria-hidden className="grid-pattern absolute inset-0 opacity-30" />
              <div className="relative">
                <div className="border-border bg-surface/50 text-muted-foreground mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-widest uppercase">
                  <Rocket className="text-accent h-3 w-3" /> Open for work
                </div>
                <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
                  Got an idea? <span className="text-gradient-aurora">Let's build it.</span>
                </h2>
                <p className="text-muted-foreground mx-auto mt-4 max-w-xl">
                  From landing pages to complex platforms — I help startups and creators ship fast and look incredible doing it.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Link href="/contact">
                    <MagneticButton variant="primary">
                      {t('nav.cta')} <ArrowRight className="h-4 w-4" />
                    </MagneticButton>
                  </Link>
                  <Link href="/projects">
                    <MagneticButton variant="outline">
                      <Layers className="h-4 w-4" /> See projects
                    </MagneticButton>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
