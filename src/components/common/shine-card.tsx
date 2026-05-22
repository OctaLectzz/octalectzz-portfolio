'use client'

import { Card } from '@/components/ui/card'
import { ShineBorder } from '@/components/ui/shine-border'
import { cn } from '@/lib/utils'
import { ComponentPropsWithoutRef } from 'react'

interface ShineCardProps extends ComponentPropsWithoutRef<typeof Card> {
  shineColor?: string | string[]
  borderWidth?: number
  duration?: number
}

export function ShineCard({
  children,
  className,
  shineColor = ['oklch(0.78 0.17 210)', 'oklch(0.62 0.24 305)', 'oklch(0.78 0.17 210)'], // matching primary and secondary colors
  borderWidth = 1,
  duration = 14,
  ...props
}: ShineCardProps) {
  return (
    <Card className={cn('relative overflow-hidden', className)} {...props}>
      <ShineBorder shineColor={shineColor} borderWidth={borderWidth} duration={duration} />
      {/* Ensure children are above the shine border by placing them in a relative z-10 container */}
      <div className="relative z-10 size-full">{children}</div>
    </Card>
  )
}
