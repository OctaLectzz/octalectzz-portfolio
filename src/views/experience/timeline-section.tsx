'use client'

import { CyberFrameBackground, DotsBackground } from '@/components/backgrounds'
import { Container, Section, SectionHeader } from '@/components/common/section'
import { TimelineCard } from '@/components/common/timeline-card'
import { experience } from '@/data'
import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function TimelineSection() {
  const t = useTranslations('experience.timeline')

  return (
    <Section>
      <DotsBackground />
      <CyberFrameBackground />

      <Container>
        <SectionHeader eyebrow="Work" icon={Briefcase} title={t('title')} />

        {/* Timeline spine */}
        <div className="relative mx-auto">
          {/* Animated vertical line */}
          <motion.div
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="from-primary/60 via-secondary/40 absolute top-0 left-5 h-full w-px origin-top bg-linear-to-b to-transparent md:left-1/2 md:-translate-x-1/2"
          />

          <ul className="space-y-8 md:space-y-12">
            {experience.map((item, index) => {
              const isLeft = index % 2 === 0
              const isActive = index === 0

              return (
                <li key={item.role + item.company + item.period} className="relative grid gap-4 md:grid-cols-2 md:gap-10">
                  {/* Timeline node */}
                  <motion.span
                    aria-hidden
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4, delay: index * 0.08, type: 'spring', stiffness: 300 }}
                    className={`absolute top-8 left-5 z-10 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full md:left-1/2 ${
                      isActive ? 'bg-gradient-primary glow animate-pulse-glow' : 'border-primary/50 bg-card border-2'
                    }`}
                  />

                  {/* Ring pulse for active (first) item */}
                  {isActive && (
                    <motion.span
                      aria-hidden
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="border-primary/30 absolute top-8 left-5 z-9 h-5 w-5 -translate-x-1/2 translate-y-[-4px] rounded-full border md:left-1/2"
                    />
                  )}

                  {/* Desktop alternating layout */}
                  {isLeft ? (
                    <>
                      {/* Card on left */}
                      <div className="pl-12 md:pr-8 md:pl-0">
                        <TimelineCard item={item} index={index} isActive={isActive} />
                      </div>
                      {/* Empty right spacer */}
                      <div className="hidden md:block" />
                    </>
                  ) : (
                    <>
                      {/* Empty left spacer */}
                      <div className="hidden md:block" />
                      {/* Card on right */}
                      <div className="pl-12 md:pl-8">
                        <TimelineCard item={item} index={index} isActive={isActive} />
                      </div>
                    </>
                  )}
                </li>
              )
            })}
          </ul>

          {/* Bottom fade terminal */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center pt-8 md:pt-12"
          >
            <div className="border-border/60 bg-card flex items-center gap-2 rounded-full border px-4 py-2 text-xs">
              <span className="bg-gradient-primary h-2 w-2 rounded-full" />
              <span className="text-muted-foreground font-medium">{t('journeyContinues')}</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
