'use client'

import { Sparkles } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Reveal, StaggerContainer, StaggerItem } from '@/components/common/reveal'
import { Container, Section, SectionHeader } from '@/components/common/section'
import { ShineCard } from '@/components/common/shine-card'
import Lanyard from '@/components/ui/lanyard'
import { NumberTicker } from '@/components/ui/number-ticker'
import { Particles } from '@/components/ui/particles'

export function AboutSection() {
  const t = useTranslations('home.about')

  const stats = [
    { value: 40, suffix: '+', label: t('stats.projects') },
    { value: 25, suffix: '+', label: t('stats.clients') },
    { value: 4, suffix: '+', label: t('stats.years') },
    { value: 1.2, suffix: 'k', decimalPlaces: 1, label: t('stats.commits') }
  ]

  return (
    <Section className="pt-0!">
      {/* Dynamic Particle Background spanning the entire section */}
      <Particles
        className="absolute inset-0 -z-10 h-full w-full opacity-40 transition-opacity duration-1000 ease-in-out"
        quantity={150}
        ease={80}
        color="#ffffff"
        refresh
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeader align="left" eyebrow="About" icon={Sparkles} title={t('title')} className="mb-0" />
            <p className="text-muted-foreground mt-5 text-justify text-lg">{t('body1')}</p>
            <p className="text-muted-foreground mt-5 text-justify text-lg">{t('body2')}</p>
          </Reveal>

          {/* Premium 3D Lanyard Interactive Display Column - Hanging Floating above Section */}
          <div className="flex items-center justify-center lg:justify-end">
            <Reveal delay={0.2} className="flex w-full justify-center lg:justify-end">
              <div className="relative w-full">
                {/* Glowing Sci-Fi Orbital Lines & Animated Shining Stars */}
                <div className="pointer-events-none absolute -inset-24 z-0 flex items-center justify-center select-none">
                  {/* Concentric slowly-rotating dashed orbital lines with Glow */}
                  <div className="border-primary/50 absolute h-[300px] w-[300px] animate-[spin_40s_linear_infinite] rounded-full border border-dashed shadow-[0_0_30px_hsl(var(--primary)/0.25)]" />
                  <div className="border-secondary/40 absolute h-[420px] w-[420px] animate-[spin_60s_linear_infinite_reverse] rounded-full border border-dashed shadow-[0_0_30px_hsl(var(--secondary)/0.25)]" />
                  <div className="border-border/30 absolute h-[540px] w-[540px] animate-[spin_80s_linear_infinite] rounded-full border border-dashed shadow-[0_0_30px_hsl(var(--border)/0.25)]" />

                  {/* Outer solid faint orbit line */}
                  <div className="border-border/20 absolute h-[660px] w-[660px] rounded-full border" />

                  {/* Animated Shining Stars scattered beautifully around the lanyard */}
                  <Sparkles className="text-primary absolute top-[8%] left-[12%] h-6 w-6 animate-pulse fill-current drop-shadow-[0_0_12px_currentColor] duration-3000" />
                  <Sparkles className="text-secondary absolute top-[20%] right-[8%] h-5 w-5 animate-pulse fill-current drop-shadow-[0_0_10px_currentColor] delay-1000 duration-4200" />
                  <Sparkles className="text-primary absolute bottom-[22%] left-[3%] h-5 w-5 animate-pulse fill-current drop-shadow-[0_0_10px_currentColor] delay-2000 duration-5000" />
                  <Sparkles className="text-secondary absolute right-[15%] bottom-[8%] h-6 w-6 animate-pulse fill-current drop-shadow-[0_0_12px_currentColor] delay-500 duration-3600" />
                  <Sparkles className="text-primary absolute top-[48%] left-[82%] h-4 w-4 animate-pulse fill-current drop-shadow-[0_0_8px_currentColor] delay-1500 duration-4800" />
                  <Sparkles className="text-secondary absolute bottom-[48%] left-[12%] h-4 w-4 animate-pulse fill-current drop-shadow-[0_0_8px_currentColor] delay-2500 duration-5500" />
                </div>
                <Lanyard />
              </div>
            </Reveal>
          </div>
        </div>

        <StaggerContainer className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
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
