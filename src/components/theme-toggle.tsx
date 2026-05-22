'use client'

import { PrimaryButton } from '@/components/common/primary-button'
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const btnClasses = cn(
    buttonVariants({ variant: 'outline', size: 'icon' }),
    'h-9 w-9 rounded-lg border-border bg-surface/40 text-foreground',
    'hover:border-primary hover:shadow-[0_0_15px_color-mix(in_oklab,var(--primary)_30%,transparent)]',
    'group relative cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-0.5'
  )

  if (!mounted) {
    return (
      <PrimaryButton variant="outline" size="icon" aria-label="Toggle theme" className="h-9 w-9 rounded-lg">
        <span className="h-4 w-4" />
      </PrimaryButton>
    )
  }

  return <AnimatedThemeToggler variant="circle" aria-label="Toggle theme" className={btnClasses} />
}
