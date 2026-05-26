import { BeamsBackground, NeonGridBackground } from '@/components/backgrounds'
import { EducationCard } from '@/components/common/education-card'
import { StaggerContainer } from '@/components/common/reveal'
import { Container, Section, SectionHeader } from '@/components/common/section'
import { education } from '@/data'
import { GraduationCap } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function EducationSection() {
  const t = useTranslations('experience.education')

  return (
    <Section>
      <NeonGridBackground />
      <BeamsBackground intensity="low" />

      <Container className="relative z-10">
        <SectionHeader eyebrow="Education" icon={GraduationCap} title={t('title')} />

        <StaggerContainer className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:gap-8">
          {education.map((educationItem, idx) => (
            <EducationCard key={educationItem.school} item={educationItem} index={idx} />
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}
