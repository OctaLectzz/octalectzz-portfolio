import { BeamsBackground } from '@/components/backgrounds/backgrounds'
import { StaggerContainer, StaggerItem } from '@/components/common/reveal'
import { Container, Section, SectionHeader } from '@/components/common/section'
import { education } from '@/data'
import { GraduationCap } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'

export function EducationSection() {
  const t = useTranslations('experience.education')
  const locale = useLocale()

  return (
    <Section>
      <BeamsBackground />
      <Container>
        <SectionHeader eyebrow="Education" icon={GraduationCap} title={t('title')} />

        <StaggerContainer className="grid gap-5 md:grid-cols-2">
          {education.map((educationItem) => (
            <StaggerItem key={educationItem.school}>
              <div className="group border-border bg-card hover:border-primary/60 hover:shadow-glow h-full rounded-2xl border p-6 transition-all hover:-translate-y-1">
                <p className="text-primary text-xs font-semibold tracking-widest uppercase">{educationItem.period}</p>
                <h3 className="font-display mt-1 text-xl font-semibold">{educationItem.school}</h3>
                <p className="text-muted-foreground">{educationItem.degree}</p>
                <p className="text-muted-foreground mt-3 text-sm">{locale === 'en' ? educationItem.description.en : educationItem.description.id}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}
