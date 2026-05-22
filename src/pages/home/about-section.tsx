'use client'

import { Sparkles } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Reveal, StaggerContainer, StaggerItem } from '@/components/common/reveal'
import { Container, Section, SectionHeader } from '@/components/common/section'
import { ShineCard } from '@/components/common/shine-card'
import { Illustration } from '@/components/ui/glowing-stars'
import { NumberTicker } from '@/components/ui/number-ticker'

export function AboutSection() {
  const t = useTranslations('home')

  const stats = [
    { value: 40, suffix: '+', label: t('stats.projects') },
    { value: 25, suffix: '+', label: t('stats.clients') },
    { value: 4, suffix: '+', label: t('stats.years') },
    { value: 1.2, suffix: 'k', decimalPlaces: 1, label: t('stats.commits') }
  ]

  return (
    <Section>
      {/* Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center mask-[radial-gradient(600px_circle_at_center,white,transparent)]">
        <Illustration stars={150} columns={20} glowingCount={40} />
      </div>

      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeader align="left" eyebrow="About" icon={Sparkles} title={t('about.title')} className="mb-0" />
            <p className="text-muted-foreground mt-5 text-justify text-lg">{t('about.body1')}</p>
            <p className="text-muted-foreground mt-5 text-justify text-lg">{t('about.body2')}</p>
          </Reveal>
        </div>

        <StaggerContainer className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <ShineCard className="group border-border bg-card hover:border-primary/60 hover:shadow-glow p-6 transition-all hover:-translate-y-1">
                <div className="font-display text-gradient flex items-center text-4xl font-bold">
                  <NumberTicker value={stat.value} decimalPlaces={stat.decimalPlaces || 0} />
                  <span>{stat.suffix}</span>
                </div>
                <p className="text-muted-foreground mt-1 text-sm">{stat.label}</p>
                <div
                  aria-hidden
                  className="bg-primary/10 absolute -top-6 -right-6 h-24 w-24 rounded-full blur-2xl transition-opacity group-hover:opacity-100"
                />
              </ShineCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}
