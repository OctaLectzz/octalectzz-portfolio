'use client'

import { ArrowRight, Layers, Rocket } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { CtaTechBackground } from '@/components/backgrounds/cta-tech-background'
import { PrimaryButton } from '@/components/common/primary-button'
import { Reveal } from '@/components/common/reveal'
import { Container, Section, SectionHeader } from '@/components/common/section'
import { BorderBeam } from '@/components/ui/border-beam'
import { ParticleField } from '@/components/ui/particle-field'

export function CtaSection() {
  const t = useTranslations('home.cta')

  return (
    <Section className="pb-32">
      <style>{`
        @keyframes cta-float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-16px) rotate(0.4deg);
          }
        }
        .animate-cta-float {
          animation: cta-float 7s ease-in-out infinite;
        }
      `}</style>
      {/* Optimized Cyber Tech Coordinate & Particle Background */}
      <CtaTechBackground />

      <Container>
        <Reveal>
          {/* Glassmorphic Bento Card with Glowing Border Beam & 3D Floating Motion */}
          <div className="animate-cta-float glass glow relative overflow-hidden rounded-3xl p-10 text-center transition-all duration-300 md:p-16">
            {/* Border Beam gliding slowly around rounded corners */}
            <BorderBeam size={350} duration={8} borderWidth={1.5} colorFrom="var(--primary)" colorTo="var(--secondary)" />
            <ParticleField />

            {/* Subtle inner spotlight gradient for premium depth */}
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,color-mix(in_oklab,var(--primary)_12%,transparent),transparent_60%)]"
            />

            {/* Fine internal tech pattern */}
            <div aria-hidden className="dot-pattern absolute inset-0 opacity-[0.12] dark:opacity-[0.18]" />

            <div className="relative z-10">
              <SectionHeader eyebrow={t('eyebrow')} icon={Rocket} title={t('title')} highlight={t('titleHighlight')} subtitle={t('subtitle')} />

              {/* Premium Button Actions */}
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
