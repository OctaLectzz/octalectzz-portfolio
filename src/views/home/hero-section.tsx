'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { GridBackground, MeshBackground } from '@/components/backgrounds/backgrounds'
import { Eyebrow } from '@/components/common/eyebrow'
import { PrimaryButton } from '@/components/common/primary-button'
import { PrimaryText } from '@/components/common/primary-text'
import { Reveal } from '@/components/common/reveal'
import { Container, Section } from '@/components/common/section'
import { HeroPhoto } from '@/components/hero-photo'
import { SocialLinks } from '@/components/social-links'
import { Meteors } from '@/components/ui/meteors'
import { ParticleField } from '@/components/ui/particle-field'

export function HeroSection() {
  const t = useTranslations('home.hero')

  return (
    <Section className="pt-20 md:pt-28">
      <MeshBackground />
      <GridBackground />
      <Meteors number={10} />
      <ParticleField />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <Reveal>
              <Eyebrow label={t('eyebrow')} pulse />
            </Reveal>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="font-display mt-5 text-5xl leading-[1.05] font-bold tracking-tight md:text-7xl"
            >
              <span className="text-foreground block text-3xl md:text-5xl">{t('greeting')}</span>
              <PrimaryText text="Octavyan Putra Ramadhan" />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-muted-foreground mt-6 max-w-xl text-base md:text-lg"
            >
              {t('subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <PrimaryButton asChildHref="/projects" variant="primary">
                {t('ctaPrimary')} <ArrowRight className="h-4 w-4" />
              </PrimaryButton>

              <PrimaryButton variant="outline">
                <Download className="h-4 w-4" /> {t('ctaSecondary')}
              </PrimaryButton>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-10">
              <p className="text-muted-foreground mb-3 text-xs font-semibold tracking-widest uppercase">Find me on</p>
              <SocialLinks size="sm" />
            </motion.div>
          </div>

          <HeroPhoto />
        </div>
      </Container>
    </Section>
  )
}
