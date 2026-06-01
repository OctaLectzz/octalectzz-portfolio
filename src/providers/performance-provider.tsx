'use client'

import { MotionConfig } from 'framer-motion'
import { createContext, useContext, useEffect, useState } from 'react'

const PerformanceContext = createContext<{
  performanceMode: boolean
  setPerformanceMode: (val: boolean) => void
}>({
  performanceMode: false,
  setPerformanceMode: () => {}
})

export function PerformanceProvider({ children }: { children: React.ReactNode }) {
  const [performanceMode, setPerformanceModeState] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('performanceMode')
    if (stored !== null) {
      const enabled = stored === 'true'
      setPerformanceModeState(enabled)
      if (enabled) {
        document.documentElement.classList.add('performance-mode')
      } else {
        document.documentElement.classList.remove('performance-mode')
      }
    } else {
      // Default to true (low-spec mode enabled by default)
      setPerformanceModeState(true)
      document.documentElement.classList.add('performance-mode')
    }
    setMounted(true)
  }, [])

  const setPerformanceMode = (val: boolean) => {
    setPerformanceModeState(val)
    localStorage.setItem('performanceMode', String(val))
    if (val) {
      document.documentElement.classList.add('performance-mode')
    } else {
      document.documentElement.classList.remove('performance-mode')
    }
  }

  return (
    <PerformanceContext.Provider value={{ performanceMode, setPerformanceMode }}>
      <MotionConfig reducedMotion={mounted && performanceMode ? 'always' : 'user'}>{children}</MotionConfig>
    </PerformanceContext.Provider>
  )
}

export const usePerformance = () => useContext(PerformanceContext)
