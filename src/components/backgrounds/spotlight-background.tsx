'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface SpotlightBackgroundProps {
  className?: string
  color?: 'primary' | 'secondary' | 'accent' | 'multi'
}

export function SpotlightBackground({ className, color = 'primary' }: SpotlightBackgroundProps) {
  const map = {
    primary: 'var(--primary)',
    secondary: 'var(--secondary)',
    accent: 'var(--accent)',
    multi: 'var(--primary)' // Handled customly below
  }

  // Define spotlight components
  const spotlightConfig =
    color === 'multi'
      ? [
          {
            color: 'var(--primary)',
            initialX: '-25%',
            initialY: '-15%',
            animateX: ['-25%', '-15%', '-25%'],
            animateY: ['-15%', '-20%', '-15%'],
            scale: [1, 1.1, 1],
            duration: 9,
            opacity: 0.18,
            blur: '140px'
          },
          {
            color: 'var(--secondary)',
            initialX: '25%',
            initialY: '-25%',
            animateX: ['25%', '15%', '25%'],
            animateY: ['-25%', '-20%', '-25%'],
            scale: [1, 1.15, 1],
            duration: 12,
            opacity: 0.15,
            blur: '160px'
          }
        ]
      : [
          {
            color: map[color],
            initialX: '-10%',
            initialY: '-20%',
            animateX: ['-10%', '10%', '-10%'],
            animateY: ['-20%', '-10%', '-20%'],
            scale: [1, 1.12, 1],
            duration: 10,
            opacity: 0.22,
            blur: '130px'
          }
        ]

  return (
    <div
      aria-hidden
      className={cn('pointer-events-none absolute inset-0 -z-10 overflow-hidden', className)}
      style={{
        maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
      }}
    >
      {spotlightConfig.map((spot, index) => (
        <motion.div
          key={index}
          className="absolute top-0 left-1/2 h-[85vh] w-[90vw] -translate-x-1/2 rounded-full"
          style={{
            background: `radial-gradient(circle at center, ${spot.color} 0%, transparent 65%)`,
            filter: `blur(${spot.blur})`,
            opacity: spot.opacity,
            x: spot.initialX,
            y: spot.initialY
          }}
          animate={{
            x: spot.animateX,
            y: spot.animateY,
            scale: spot.scale
          }}
          transition={{
            duration: spot.duration,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}

      {/* Futuristic horizon line or beam flare */}
      <div
        className="absolute top-0 right-0 left-0 h-px bg-linear-to-r"
        style={{
          background: 'linear-gradient(to right, transparent, var(--primary) 50%, transparent)',
          opacity: 0.15
        }}
      />
    </div>
  )
}
