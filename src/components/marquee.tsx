import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

export function Marquee({
  children,
  className,
  reverse = false,
  speed = 30
}: {
  children: ReactNode
  className?: string
  reverse?: boolean
  speed?: number
}) {
  return (
    <div className={cn('group mask-fade-x relative flex overflow-hidden', className)}>
      <div
        className="flex shrink-0 items-center gap-12 pr-12"
        style={{ animation: `marquee ${speed}s linear infinite`, animationDirection: reverse ? 'reverse' : 'normal' }}
      >
        {children}
      </div>
      <div
        aria-hidden
        className="flex shrink-0 items-center gap-12 pr-12"
        style={{ animation: `marquee ${speed}s linear infinite`, animationDirection: reverse ? 'reverse' : 'normal' }}
      >
        {children}
      </div>
    </div>
  )
}
