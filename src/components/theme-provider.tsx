'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import * as React from 'react'

// Mute the false-positive React 19 script injection warning caused by next-themes in development
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  const origError = console.error
  console.error = (...args: unknown[]) => {
    if (typeof args[0] === 'string' && args[0].includes('Encountered a script tag')) {
      return
    }
    origError.apply(console, args)
  }

  const origWarn = console.warn
  console.warn = (...args: unknown[]) => {
    const hasIgnoredWarning = args.some((arg) => {
      if (typeof arg !== 'string') return false
      return (
        arg.includes('THREE.Clock: This module has been deprecated') ||
        arg.includes('using deprecated parameters for the initialization function') ||
        arg.includes('warning X4122') ||
        arg.includes('THREE.WebGLProgram: Program Info Log')
      )
    })
    if (hasIgnoredWarning) return
    origWarn.apply(console, args)
  }
}

export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
