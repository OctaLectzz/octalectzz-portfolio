'use client'

import { ArrowRight, Layers, Rocket } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { MeshBackground } from '@/components/backgrounds'
import { PrimaryButton } from '@/components/common/primary-button'
import { Container, Section, SectionHeader } from '@/components/common/section'
import { Reveal } from '@/components/reveal'

export function CtaSection() {
  const t = useTranslations('home.cta')

  return (
    <Section className="pb-32">
      <MeshBackground />

      <Container>
        <Reveal>
          <div className="border-border bg-card relative overflow-hidden rounded-3xl border p-10 text-center md:p-16">
            <div aria-hidden className="bg-gradient-aurora absolute inset-0 opacity-10" />
            <div aria-hidden className="grid-pattern absolute inset-0 opacity-30" />

            <div className="relative">
              <SectionHeader eyebrow={t('eyebrow')} icon={Rocket} title={t('title')} highlight={t('titleHighlight')} subtitle={t('subtitle')} />
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <PrimaryButton asChildHref="/contact" variant="primary">
                  {t('ctaPrimary')} <ArrowRight className="h-4 w-4" />
                </PrimaryButton>

                <PrimaryButton asChildHref="/projects" variant="outline">
                  <Layers className="h-4 w-4" /> {t('ctaSecondary')}
                </PrimaryButton>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
