import { DotsBackground } from '@/components/common/backgrounds'
import { Container, Section, SectionHeader } from '@/components/common/section'
import { experience } from '@/data'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'

export function TimelineSection() {
  const t = useTranslations('experience.timeline')
  const locale = useLocale()

  return (
    <Section>
      <DotsBackground />
      <Container>
        <SectionHeader eyebrow="Work" icon={Briefcase} title={t('title')} />

        <div className="relative mx-auto max-w-3xl">
          <div
            aria-hidden
            className="from-primary/60 via-secondary/40 absolute top-0 left-4 h-full w-px bg-linear-to-b to-transparent md:left-1/2 md:-translate-x-1/2"
          />

          <ul className="space-y-10">
            {experience.map((experienceItem, index) => (
              <motion.li
                key={experienceItem.role + experienceItem.period}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`relative grid gap-4 md:grid-cols-2 md:gap-12 ${index % 2 === 0 ? '' : 'md:[&>div:first-child]:order-2'}`}
              >
                <span
                  aria-hidden
                  className="bg-gradient-primary glow absolute top-3 left-4 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full md:left-1/2"
                />
                <div className="pl-10 md:pl-0 md:text-right">
                  <p className="text-primary inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase">
                    <Calendar className="h-3 w-3" /> {experienceItem.period}
                  </p>
                  <h3 className="font-display mt-1 text-xl font-semibold">{experienceItem.role}</h3>
                  <p className="text-muted-foreground">{experienceItem.company}</p>
                  <p className="text-muted-foreground mt-1 inline-flex items-center gap-1 text-xs">
                    <MapPin className="h-3 w-3" /> {experienceItem.location}
                  </p>
                </div>
                <div className="pl-10 md:pl-0">
                  <div className="border-border bg-card rounded-2xl border p-5">
                    <p className="text-muted-foreground text-sm">{locale === 'en' ? experienceItem.description.en : experienceItem.description.id}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {experienceItem.stack.map((tech) => (
                        <span key={tech} className="border-border bg-surface/40 text-muted-foreground rounded-md border px-2 py-0.5 text-[11px]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  )
}
