'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

/**
 * A cyberpunk-style hex grid background with floating particles
 * and animated gradient orbs. Designed for dark, futuristic sections.
 */
export function CyberGridBackground({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn('pointer-events-none absolute inset-0 -z-10 overflow-hidden', className)}>
      {/* Base grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--primary) 1px, transparent 1px),
            linear-gradient(to bottom, var(--primary) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Animated gradient orb - top left (primary) */}
      <motion.div
        className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full blur-[100px]"
        style={{
          background: 'radial-gradient(circle, var(--primary), transparent 70%)',
          opacity: 0.08
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Animated gradient orb - bottom right (secondary) */}
      <motion.div
        className="absolute -right-32 -bottom-32 h-[500px] w-[500px] rounded-full blur-[100px]"
        style={{
          background: 'radial-gradient(circle, var(--secondary), transparent 70%)',
          opacity: 0.08
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Center accent pulse */}
      <motion.div
        className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        style={{
          background: 'radial-gradient(circle, var(--accent), transparent 70%)',
          opacity: 0.05
        }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="bg-primary/30 absolute h-1 w-1 rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 4 + i * 0.8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.6
          }}
        />
      ))}

      {/* Radial vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--background)_80%)]" />
    </div>
  )
}
