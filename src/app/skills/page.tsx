'use client'

import { BeamsBackground, DotsBackground, MeshBackground, SpotlightBackground } from '@/components/backgrounds/backgrounds'
import { PageHeroSection } from '@/components/common/page-hero-section'
import { StaggerContainer, StaggerItem } from '@/components/common/reveal'
import { Container, Section, SectionHeader } from '@/components/common/section'
import { skillGroups } from '@/data'
import { motion } from 'framer-motion'
import { Cpu } from 'lucide-react'
import { useTranslations } from 'next-intl'

const bgs = [SpotlightBackground, BeamsBackground, DotsBackground, MeshBackground] as const

export default function SkillsPage() {
  const t = useTranslations()
  const breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'Skills' }]

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
                        whileHover={{ y: -6, rotate: -1 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="group border-border bg-card hover:border-primary/60 relative flex aspect-square flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border p-4 transition-colors"
                      >
                        <div
                          aria-hidden
                          className="absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                          style={{ background: `radial-gradient(circle at center, ${s.color}33, transparent 70%)` }}
                        />
                        <Icon className="relative h-10 w-10 transition-transform duration-500 group-hover:scale-125" style={{ color: s.color }} />
                        <p className="text-foreground relative text-center text-xs font-semibold tracking-wide">{s.name}</p>
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
