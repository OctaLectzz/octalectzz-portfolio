'use client'

import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'

interface TooltipProps {
  content: string
  children: React.ReactNode
  className?: string
  disabled?: boolean
  side?: 'top' | 'bottom'
}

/**
 * A futuristic custom animated Tooltip component using Framer Motion.
 */
export function Tooltip({ content, children, className, disabled = false, side = 'top' }: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false)

  if (disabled) {
    return <>{children}</>
  }

  return (
    <div
      className="relative inline-block w-full"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={() => setIsOpen(false)}
    >
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: side === 'top' ? 8 : -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: side === 'top' ? 8 : -8, scale: 0.95 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className={cn(
              'border-border/80 bg-popover text-popover-foreground absolute left-1/2 z-50 w-max max-w-xs -translate-x-1/2 rounded-lg border px-3 py-1.5 font-mono text-[11px] font-semibold shadow-[0_0_15px_rgba(var(--primary-glow),0.15)] backdrop-blur-md',
              side === 'top' ? 'bottom-full mb-2' : 'top-full mt-2',
              className
            )}
          >
            {content}
            {/* Tooltip arrow pointer */}
            <div
              className={cn(
                'border-border/80 bg-popover absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rotate-45',
                side === 'top' ? 'top-full -translate-y-0.5 border-r border-b' : 'bottom-full translate-y-0.5 border-t border-l'
              )}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
