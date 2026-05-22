'use client'

import { Layers } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'

import { BeamsBackground } from '@/components/common/backgrounds'
import { StaggerContainer, StaggerItem } from '@/components/common/reveal'
import { Container, Section, SectionHeader } from '@/components/common/section'
import { services } from '@/data'

export function ServicesSection() {
  const t = useTranslations('home.services')
  const locale = useLocale()

  return (
    <Section>
      <BeamsBackground />

      <Container>
        <SectionHeader eyebrow="Services" icon={Layers} title={t('title')} subtitle={t('subtitle')} />
        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <StaggerItem key={service.titleEn}>
              <div className="group border-border bg-card hover:border-primary/60 relative h-full overflow-hidden rounded-2xl border p-6 transition-all hover:-translate-y-1">
                <div
                  aria-hidden
                  className="via-primary/60 absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                />

                <div className="bg-gradient-primary text-primary-foreground mb-4 grid h-11 w-11 place-items-center rounded-xl text-xl">
                  {service.icon}
                </div>

                <h3 className="font-display text-lg font-semibold">{locale === 'en' ? service.titleEn : service.titleId}</h3>

                <p className="text-muted-foreground mt-2 text-sm">{locale === 'en' ? service.descEn : service.descId}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}
