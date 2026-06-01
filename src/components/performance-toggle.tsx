'use client'

import { buttonVariants } from '@/components/ui/button'
import { Tooltip } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { usePerformance } from '@/providers/performance-provider'
import { Zap, ZapOff } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

export function PerformanceToggle() {
  const t = useTranslations('common.performanceMode')
  const { performanceMode, setPerformanceMode } = usePerformance()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle performance mode"
        className={cn(
          buttonVariants({ variant: 'outline', size: 'icon' }),
          'border-border bg-surface/40 text-muted-foreground/60 h-9 w-9 rounded-lg'
        )}
        disabled
      >
        <Zap className="h-4 w-4" />
      </button>
    )
  }

  const tooltipContent = performanceMode ? t('tooltipOff') : t('tooltipOn')

  const btnClasses = cn(
    buttonVariants({ variant: 'outline', size: 'icon' }),
    'h-9 w-9 rounded-lg border-border bg-surface/40',
    performanceMode
      ? 'text-muted-foreground hover:text-foreground hover:border-secondary hover:shadow-[0_0_15px_color-mix(in_oklab,var(--secondary)_30%,transparent)]'
      : 'text-primary hover:border-primary hover:shadow-[0_0_15px_color-mix(in_oklab,var(--primary)_30%,transparent)]',
    'group relative cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-0.5'
  )

  return (
    <Tooltip content={tooltipContent} side="bottom">
      <button type="button" onClick={() => setPerformanceMode(!performanceMode)} aria-label={t('label')} className={btnClasses}>
        {performanceMode ? (
          <ZapOff className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
        ) : (
          <Zap className="h-4 w-4 animate-pulse transition-transform duration-300 group-hover:scale-110" />
        )}
      </button>
    </Tooltip>
  )
}
