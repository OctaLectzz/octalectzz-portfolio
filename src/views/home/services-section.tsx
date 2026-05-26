'use client'

import { Layers } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'

import { GlowLinesBackground } from '@/components/backgrounds'
import { Container, Section, SectionHeader } from '@/components/common/section'
import { ServiceCard } from '@/components/common/service-card'
import { services } from '@/data'

export function ServicesSection() {
  const t = useTranslations('home.services')
  const locale = useLocale()

  return (
    <Section className="relative overflow-hidden">
      {/* Custom Lightweight Glow Lines Background */}
      <GlowLinesBackground />

      <Container className="relative z-10">
        <SectionHeader eyebrow="Services" icon={Layers} title={t('title')} subtitle={t('subtitle')} />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div key={service.titleEn} className={i === 0 || i === 3 ? 'md:col-span-2 lg:col-span-2' : 'md:col-span-1 lg:col-span-1'}>
              <ServiceCard
                icon={service.icon}
                title={locale === 'en' ? service.titleEn : service.titleId}
                description={locale === 'en' ? service.descEn : service.descId}
                index={i}
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
