'use client'

import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'

interface EyebrowProps {
  label: string
  icon?: LucideIcon
  pulse?: boolean
  className?: string
}

export function Eyebrow({ label, icon: Icon, pulse, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        'border-border bg-surface/50 text-muted-foreground mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-[0.18em] uppercase backdrop-blur',
        className
      )}
    >
      {Icon && <Icon className="text-primary h-3 w-3" />}
      {pulse && <span className="bg-primary animate-pulse-glow h-1.5 w-1.5 rounded-full" />}
      {label}
    </span>
  )
}
