'use client'

import { CertificatesSection } from '@/pages/experience/certificates-section'
import { EducationSection } from '@/pages/experience/education-section'
import { HeroSection } from '@/pages/experience/hero-section'
import { TimelineSection } from '@/pages/experience/timeline-section'

export default function ExperiencePage() {
  return (
    <>
      <HeroSection />
      <TimelineSection />
      <EducationSection />
      <CertificatesSection />
    </>
  )
}
