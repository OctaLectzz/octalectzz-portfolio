'use client'

import { PageHeroSection } from '@/components/common/page-hero-section'
import { CertificatesSection } from '@/views/experience/certificates-section'
import { EducationSection } from '@/views/experience/education-section'
import { TimelineSection } from '@/views/experience/timeline-section'
import { Briefcase } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function ExperiencePage() {
  const t = useTranslations('experience.hero')
  const breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'Experience' }]

  return (
    <>
      <PageHeroSection
        title={t('title')}
        highlight={t('title').split(' ').slice(1).join(' ')}
        subtitle={t('subtitle')}
        breadcrumbs={breadcrumbs}
        eyebrow="Journey"
        eyebrowIcon={Briefcase}
      />

      <TimelineSection />
      <EducationSection />
      <CertificatesSection />
    </>
  )
}
