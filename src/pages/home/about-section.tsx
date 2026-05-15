'use client'

import { Sparkles } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { DotsBackground } from '@/components/backgrounds'
import { Container, Section, SectionHeader } from '@/components/common/section'
import { Reveal, StaggerContainer, StaggerItem } from '@/components/reveal'

export function AboutSection() {
  const t = useTranslations('home')

  const stats = [
    { value: '40+', label: t('stats.projects') },
    { value: '25+', label: t('stats.clients') },
    { value: '4+', label: t('stats.years') },
    { value: '1.2k', label: t('stats.commits') }
  ]

  return (
    <Section>
      <DotsBackground />

      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeader align="left" eyebrow="About" icon={Sparkles} title={t('about.title')} />
            <p className="text-muted-foreground mt-5 text-lg">{t('about.body')}</p>
          </Reveal>

          <StaggerContainer className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="group border-border bg-card hover:border-primary/60 hover:shadow-glow relative overflow-hidden rounded-2xl border p-6 transition-all hover:-translate-y-1">
                  <p className="font-display text-gradient text-4xl font-bold">{stat.value}</p>
                  <p className="text-muted-foreground mt-1 text-sm">{stat.label}</p>
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
  )
}
