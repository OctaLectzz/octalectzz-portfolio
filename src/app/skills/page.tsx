'use client'

import { DotsBackground, GlowLinesBackground } from '@/components/backgrounds'
import { PageHeroSection } from '@/components/common/page-hero-section'
import { StaggerContainer, StaggerItem } from '@/components/common/reveal'
import { Container, Section, SectionHeader } from '@/components/common/section'
import { skillGroups } from '@/data'
import { motion } from 'framer-motion'
import { Cpu } from 'lucide-react'
import { useTranslations } from 'next-intl'

const bgs = [GlowLinesBackground, DotsBackground] as const

export default function SkillsPage() {
  const t = useTranslations()
  const breadcrumbs = [{ label: t('nav.home'), href: '/' }, { label: t('nav.skills') }]

  return (
    <>
      <PageHeroSection
        title={t('skills.heroTitle')}
        highlight={t('skills.heroTitle').split(' ').slice(1).join(' ')}
        subtitle={t('skills.heroSubtitle')}
        breadcrumbs={breadcrumbs}
        eyebrow="Toolbox"
        eyebrowIcon={Cpu}
      />

      {skillGroups.map((group, gi) => {
        const Bg = bgs[gi % bgs.length]
        return (
          <Section key={group.id} className={gi === skillGroups.length - 1 ? 'pb-32' : ''}>
            <Bg />
            <Container>
              <SectionHeader eyebrow={`Stack · ${gi + 1}`} icon={Cpu} title={t(group.titleKey)} />

              <StaggerContainer className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {group.skills.map((s) => {
                  const Icon = s.icon
                  return (
                    <StaggerItem key={s.name}>
                      <motion.div
                        whileHover={{ y: -8, scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                        className="group hover:border-primary/50 relative flex aspect-square flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md transition-all hover:bg-white/10"
                      >
                        {/* Cyber grid background on hover */}
                        <div
                          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-20"
                          style={{
                            backgroundImage: 'radial-gradient(circle at center, var(--primary) 1.2px, transparent 1.2px)',
                            backgroundSize: '16px 16px'
                          }}
                        />

                        {/* Glow effect */}
                        <div
                          aria-hidden
                          className="absolute inset-0 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20"
                          style={{ background: `radial-gradient(circle at center, ${s.color}, transparent 70%)` }}
                        />

                        <div className="group-hover:ring-primary/50 relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-black/40 ring-1 ring-white/10 transition-all duration-500 group-hover:bg-black/60 group-hover:shadow-[0_0_20px_rgba(var(--primary),0.4)]">
                          <Icon
                            className="h-7 w-7 drop-shadow-[0_0_8px_currentColor] transition-transform duration-500 group-hover:scale-110"
                            style={{ color: s.color }}
                          />
                        </div>

                        <p className="text-foreground relative z-10 text-center text-[11px] font-bold tracking-widest uppercase">{s.name}</p>

                        {/* Cyber corner accents */}
                        <div className="border-primary/0 group-hover:border-primary/80 absolute top-0 left-0 h-3 w-3 rounded-tl-xl border-t-2 border-l-2 transition-colors duration-500" />
                        <div className="border-primary/0 group-hover:border-primary/80 absolute top-0 right-0 h-3 w-3 rounded-tr-xl border-t-2 border-r-2 transition-colors duration-500" />
                        <div className="border-primary/0 group-hover:border-primary/80 absolute bottom-0 left-0 h-3 w-3 rounded-bl-xl border-b-2 border-l-2 transition-colors duration-500" />
                        <div className="border-primary/0 group-hover:border-primary/80 absolute right-0 bottom-0 h-3 w-3 rounded-br-xl border-r-2 border-b-2 transition-colors duration-500" />
                      </motion.div>
                    </StaggerItem>
                  )
                })}
              </StaggerContainer>
            </Container>
          </Section>
        )
      })}
    </>
  )
}
