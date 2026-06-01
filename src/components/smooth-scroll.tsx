'use client'

import { ReactLenis } from 'lenis/react'
import { useEffect, useState } from 'react'

import { usePerformance } from '@/providers/performance-provider'

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const { performanceMode } = usePerformance()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || performanceMode) return <>{children}</>

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  )
}
