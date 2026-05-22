'use client'

import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle2, Lightbulb, TrendingUp } from 'lucide-react'
import { useTranslations } from 'next-intl'

interface ContentSectionProps {
  problemText: string
  solutionText: string
  impactText: string
  featuresList: string[]
  advantagesList: string[]
}

/** Left column content: Challenge, Solution, Impact, Features, Advantages. */
export function ContentSection({ problemText, solutionText, impactText, featuresList, advantagesList }: ContentSectionProps) {
  const t = useTranslations('projects')

  return (
    <div className="space-y-12 lg:col-span-2">
      {/* Challenge & Solution side by side */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* Challenge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          <div className="flex items-center gap-2.5">
            <div className="bg-primary/10 border-primary/25 text-primary flex h-8 w-8 items-center justify-center rounded-lg border shadow-[0_0_10px_rgba(var(--primary-glow),0.1)]">
              <AlertCircle className="h-4 w-4" />
            </div>
            <h3 className="font-display text-foreground text-lg font-bold">{t('problemTitle')}</h3>
          </div>
          <div className="border-primary/20 border-l-2 pl-4">
            <p className="text-muted-foreground text-sm leading-relaxed">{problemText}</p>
          </div>
        </motion.div>

        {/* Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-3"
        >
          <div className="flex items-center gap-2.5">
            <div className="bg-secondary/10 border-secondary/25 text-secondary flex h-8 w-8 items-center justify-center rounded-lg border shadow-[0_0_10px_rgba(var(--secondary-glow),0.1)]">
              <Lightbulb className="h-4 w-4" />
            </div>
            <h3 className="font-display text-foreground text-lg font-bold">{t('solutionTitle')}</h3>
          </div>
          <div className="border-secondary/20 border-l-2 pl-4">
            <p className="text-muted-foreground text-sm leading-relaxed">{solutionText}</p>
          </div>
        </motion.div>
      </div>

      {/* Business Impact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border-border/30 bg-card/30 relative overflow-hidden rounded-2xl border p-6 backdrop-blur-sm md:p-8"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-12 -bottom-12 h-32 w-32 rounded-full opacity-20 blur-3xl"
          style={{ background: 'var(--gradient-primary)' }}
        />
        <div className="relative flex items-start gap-4">
          <div className="bg-primary/15 border-primary/30 text-primary-glow flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border shadow-[0_0_15px_rgba(var(--primary-glow),0.15)]">
            <TrendingUp className="h-5 w-5" />
          </div>
          <div className="space-y-2">
            <h3 className="font-display text-foreground text-lg font-extrabold">{t('impactTitle')}</h3>
            <p className="text-foreground/85 text-sm leading-relaxed md:text-base">{impactText}</p>
          </div>
        </div>
      </motion.div>

      {/* Key Features */}
      <div className="space-y-4">
        <h3 className="font-display text-foreground flex items-center gap-2 text-lg font-extrabold">
          <span className="bg-primary h-1.5 w-1.5 rounded-full shadow-[0_0_8px_var(--primary)]" />
          {t('featuresTitle')}
        </h3>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {featuresList.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="flex items-start gap-2.5 py-1"
            >
              <CheckCircle2 className="text-primary mt-0.5 h-4 w-4 shrink-0" />
              <span className="text-muted-foreground text-sm leading-snug">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* System Strengths */}
      <div className="space-y-4">
        <h3 className="font-display text-foreground flex items-center gap-2 text-lg font-extrabold">
          <span className="bg-secondary h-1.5 w-1.5 rounded-full shadow-[0_0_8px_var(--secondary)]" />
          {t('advantagesTitle')}
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          {advantagesList.map((adv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="border-border/30 bg-surface/20 hover:border-primary/20 relative overflow-hidden rounded-xl border p-4 backdrop-blur-sm transition-all duration-300"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-4 -bottom-4 h-12 w-12 rounded-full opacity-10 blur-xl"
                style={{ background: 'var(--gradient-primary)' }}
              />
              <span className="text-primary-glow mb-1.5 block font-mono text-[10px] font-bold tracking-widest uppercase">
                {t('strength')} {idx + 1}
              </span>
              <p className="text-muted-foreground text-sm leading-relaxed">{adv}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
