'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageSquare } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { PrimaryButton } from '@/components/common/primary-button'

/**
 * A compact CTA block for the project detail sidebar.
 * Encourages visitors to start a conversation about similar projects.
 */
export function SidebarCTA({ className }: { className?: string }) {
  const t = useTranslations('projects')

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={className}
    >
      <div className="border-border/40 bg-card/40 relative overflow-hidden rounded-2xl border p-5 backdrop-blur-xl">
        {/* Decorative glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-8 -bottom-8 h-24 w-24 rounded-full opacity-15 blur-2xl"
          style={{ background: 'var(--gradient-primary)' }}
        />

        <div className="relative space-y-3">
          <div className="flex items-center gap-2">
            <MessageSquare className="text-primary h-4 w-4" />
            <span className="text-foreground text-sm font-bold">{t('sidebarCtaTitle')}</span>
          </div>

          <p className="text-muted-foreground text-xs leading-relaxed">{t('sidebarCtaDescription')}</p>

          <PrimaryButton variant="primary" size="sm" asChildHref="/contact" className="w-full justify-center">
            {t('sidebarCtaButton')} <ArrowRight className="h-3.5 w-3.5" />
          </PrimaryButton>
        </div>
      </div>
    </motion.div>
  )
}
