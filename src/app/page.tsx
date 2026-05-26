'use client'

import { AboutSection } from '@/views/home/about-section'
import { CtaSection } from '@/views/home/cta-section'
import { HeroSection } from '@/views/home/hero-section'
import { ProjectsSection } from '@/views/home/projects-section'
import { ServicesSection } from '@/views/home/services-section'
import { SkillsSection } from '@/views/home/skills-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <SkillsSection />

      <AboutSection />

      <ServicesSection />

      <ProjectsSection />

      <CtaSection />
    </>
  )
}
