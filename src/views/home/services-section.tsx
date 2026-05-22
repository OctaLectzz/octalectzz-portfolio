'use client'

import { Layers } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'

import { CyberGridBackground } from '@/components/common/cyber-grid-background'
import { Container, Section, SectionHeader } from '@/components/common/section'
import { ServiceCard } from '@/components/common/service-card'
import { services } from '@/data'

export function ServicesSection() {
  const t = useTranslations('home.services')
  const locale = useLocale()

  return (
    <Section>
      <CyberGridBackground />

      <Container>
        <SectionHeader eyebrow="Services" icon={Layers} title={t('title')} subtitle={t('subtitle')} />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <ServiceCard
              key={service.titleEn}
              icon={service.icon}
              title={locale === 'en' ? service.titleEn : service.titleId}
              description={locale === 'en' ? service.descEn : service.descId}
              index={i}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
