import { GridBackground, MeshBackground } from '@/components/backgrounds'
import { Eyebrow } from '@/components/common/eyebrow'
import { PrimaryText } from '@/components/common/primary-text'
import { Container, Section } from '@/components/common/section'
import { Reveal } from '@/components/reveal'
import { Briefcase } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function HeroSection() {
  const t = useTranslations('experience.hero')

  return (
    <Section className="pt-10 pb-12 md:pt-16">
      <MeshBackground />
      <GridBackground />

      <Container>
        <Reveal>
          <Eyebrow label="Journey" icon={Briefcase} />

          <h1 className="font-display mt-4 text-5xl font-bold tracking-tight md:text-7xl">
            <span className="text-foreground">{t('title').split(' ')[0]} </span>
            <PrimaryText text={t('title').split(' ').slice(1).join(' ')} />
          </h1>

          <p className="text-muted-foreground mt-5 max-w-2xl text-lg">{t('subtitle')}</p>
        </Reveal>
      </Container>
    </Section>
  )
}
