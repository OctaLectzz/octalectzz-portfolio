'use client'

import { Particles } from '@/components/ui/particles'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function CyberParticlesBackground({ className }: { className?: string }) {
  const { resolvedTheme } = useTheme()
  const [color, setColor] = useState('#ffffff')

  useEffect(() => {
    setColor(resolvedTheme === 'dark' ? '#ffffff' : '#000000')
  }, [resolvedTheme])

  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      <div className="from-background via-background/90 to-background absolute inset-0 bg-linear-to-b" />

      <Particles className="absolute inset-0 z-0" quantity={150} ease={80} color={color} refresh />

      <div className="via-primary/30 absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent to-transparent" />
      <div className="bg-primary/5 absolute inset-x-0 top-1/4 h-[300px] blur-[120px]" />
    </div>
  )
}
