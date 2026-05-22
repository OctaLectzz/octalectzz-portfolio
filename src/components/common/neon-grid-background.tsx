'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

/**
 * A futuristic background with animated neon glow lines,
 * perspective grid, floating particles, and pulsing orbs.
 */
export function NeonGridBackground({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn('pointer-events-none absolute inset-0 -z-10 overflow-hidden', className)}>
      {/* Perspective grid converging to horizon */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--primary) 1px, transparent 1px),
            linear-gradient(to bottom, var(--primary) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          perspective: '600px',
          transform: 'rotateX(45deg)',
          transformOrigin: 'center top'
        }}
      />

      {/* Horizontal neon glow line - top */}
      <motion.div
        className="absolute left-0 h-px w-full"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--primary), var(--secondary), var(--primary), transparent)',
          boxShadow: '0 0 20px var(--primary), 0 0 60px var(--primary)',
          opacity: 0.4
        }}
        animate={{
          top: ['15%', '35%', '15%'],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Horizontal neon glow line - bottom */}
      <motion.div
        className="absolute left-0 h-px w-full"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--secondary), var(--accent), var(--secondary), transparent)',
          boxShadow: '0 0 20px var(--secondary), 0 0 60px var(--secondary)',
          opacity: 0.3
        }}
        animate={{
          top: ['75%', '55%', '75%'],
          opacity: [0.15, 0.4, 0.15]
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Vertical neon line - left accent */}
      <motion.div
        className="absolute top-0 h-full w-px"
        style={{
          background: 'linear-gradient(180deg, transparent, var(--primary), transparent)',
          boxShadow: '0 0 12px var(--primary)',
          opacity: 0.2
        }}
        animate={{
          left: ['20%', '30%', '20%'],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Vertical neon line - right accent */}
      <motion.div
        className="absolute top-0 h-full w-px"
        style={{
          background: 'linear-gradient(180deg, transparent, var(--secondary), transparent)',
          boxShadow: '0 0 12px var(--secondary)',
          opacity: 0.2
        }}
        animate={{
          left: ['75%', '65%', '75%'],
          opacity: [0.1, 0.25, 0.1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Gradient orb - primary glow top-left */}
      <motion.div
        className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full blur-[100px]"
        style={{
          background: 'radial-gradient(circle, var(--primary), transparent 70%)',
          opacity: 0.1
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Gradient orb - secondary glow bottom-right */}
      <motion.div
        className="absolute -right-24 -bottom-24 h-[380px] w-[380px] rounded-full blur-[100px]"
        style={{
          background: 'radial-gradient(circle, var(--secondary), transparent 70%)',
          opacity: 0.1
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, -20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Neon floating particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: i % 3 === 0 ? 3 : 2,
            height: i % 3 === 0 ? 3 : 2,
            left: `${10 + i * 9}%`,
            top: `${12 + (i % 4) * 22}%`,
            background: i % 2 === 0 ? 'var(--primary)' : 'var(--secondary)',
            boxShadow: `0 0 ${6 + i * 2}px ${i % 2 === 0 ? 'var(--primary)' : 'var(--secondary)'}`
          }}
          animate={{
            y: [0, -(15 + i * 3), 0],
            opacity: [0.15, 0.7, 0.15],
            scale: [1, 1.6, 1]
          }}
          transition={{
            duration: 4 + i * 0.7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5
          }}
        />
      ))}

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--background)_80%)]" />
    </div>
  )
}
