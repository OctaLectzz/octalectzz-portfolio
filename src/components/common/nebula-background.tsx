'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

/**
 * An animated Nebula Background with floating blurred clouds,
 * micro particles, and a scanning futuristic horizontal line.
 */
export function NebulaBackground({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn('pointer-events-none absolute inset-0 -z-10 overflow-hidden', className)}>
      {/* Nebula clouds - overlapping blur elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 h-[450px] w-[450px] rounded-full mix-blend-screen blur-[130px] dark:mix-blend-normal"
        style={{
          background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
          opacity: 0.12
        }}
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.2, 0.9, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full mix-blend-screen blur-[140px] dark:mix-blend-normal"
        style={{
          background: 'radial-gradient(circle, var(--secondary) 0%, transparent 70%)',
          opacity: 0.1
        }}
        animate={{
          x: [0, -90, 50, 0],
          y: [0, 80, -30, 0],
          scale: [1, 0.85, 1.15, 1]
        }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        style={{
          background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
          opacity: 0.08
        }}
        animate={{
          scale: [1, 1.3, 0.8, 1],
          opacity: [0.05, 0.12, 0.06, 0.05]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Cyber Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--foreground) 1px, transparent 1px),
            linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Star Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="dark:bg-primary/45 absolute h-1 w-1 rounded-full bg-white shadow-[0_0_8px_white]"
          style={{
            left: `${20 + i * 11}%`,
            top: `${15 + (i % 3) * 23}%`
          }}
          animate={{
            scale: [1, 1.8, 0.8, 1],
            opacity: [0.2, 0.9, 0.3, 0.2]
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.4
          }}
        />
      ))}

      {/* Horizontal Scanning Laser Line */}
      <motion.div
        className="via-primary/20 absolute left-0 h-px w-full bg-linear-to-r from-transparent to-transparent shadow-[0_0_12px_var(--primary)]"
        animate={{
          top: ['0%', '100%', '0%'],
          opacity: [0.1, 0.5, 0.1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      {/* Vignette fade */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,var(--background)_90%)]" />
    </div>
  )
}
