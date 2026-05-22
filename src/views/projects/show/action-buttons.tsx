'use client'

import { ArrowUpRight, Globe, Lock } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { FaGithub } from 'react-icons/fa6'

import { PrimaryButton } from '@/components/common/primary-button'
import { Tooltip } from '@/components/ui/tooltip'

interface ProjectActionButtonsProps {
  live?: string
  repo?: string
  className?: string
}

/**
 * Reusable CTA buttons for project actions (Live Site + Source Code).
 * Automatically disables and shows tooltip when URLs are absent.
 */
export function ProjectActionButtons({ live, repo, className }: ProjectActionButtonsProps) {
  const t = useTranslations('projects')

  return (
    <div className={className}>
      <div className="flex flex-col gap-3">
        {/* Live Site Button */}
        {live ? (
          <PrimaryButton variant="primary" size="lg" asChildHref={live} className="w-full justify-center">
            <Globe className="h-4 w-4" /> {t('visitSite')} <ArrowUpRight className="h-3.5 w-3.5" />
          </PrimaryButton>
        ) : (
          <Tooltip content={t('siteUnavailable')}>
            <button
              disabled
              className="border-border/40 bg-surface/20 text-muted-foreground/45 flex h-11 w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl border px-5 text-sm font-semibold opacity-55"
            >
              <Globe className="text-muted-foreground/30 h-4 w-4" />
              {t('visitSite')}
              <Lock className="text-muted-foreground/30 h-3.5 w-3.5" />
            </button>
          </Tooltip>
        )}

        {/* Source Code Button */}
        {repo ? (
          <PrimaryButton variant="outline" size="lg" asChildHref={repo} className="w-full justify-center">
            <FaGithub className="h-4 w-4" /> {t('viewSource')}
          </PrimaryButton>
        ) : (
          <Tooltip content={t('codeUnavailable')}>
            <button
              disabled
              className="border-border/40 bg-surface/20 text-muted-foreground/45 flex h-11 w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl border px-5 text-sm font-semibold opacity-55"
            >
              <FaGithub className="text-muted-foreground/30 h-4 w-4" />
              {t('viewSource')}
              <Lock className="text-muted-foreground/30 h-3.5 w-3.5" />
            </button>
          </Tooltip>
        )}
      </div>
    </div>
  )
}
