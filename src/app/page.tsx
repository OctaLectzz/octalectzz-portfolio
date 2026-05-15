'use client'

import { AboutSection } from '@/pages/home/about-section'
import { CtaSection } from '@/pages/home/cta-section'
import { HeroSection } from '@/pages/home/hero-section'
import { ProjectsSection } from '@/pages/home/projects-section'
import { ServicesSection } from '@/pages/home/services-section'
import { SkillsSection } from '@/pages/home/skills-section'

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
