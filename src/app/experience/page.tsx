'use client'

import { CertificatesSection } from '@/views/experience/certificates-section'
import { EducationSection } from '@/views/experience/education-section'
import { HeroSection } from '@/views/experience/hero-section'
import { TimelineSection } from '@/views/experience/timeline-section'

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
