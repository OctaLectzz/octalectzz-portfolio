import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

/**
 * Each background is absolutely positioned and inert.
 * Wrap any section with `relative overflow-hidden` and drop one of these.
 */

export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn('pointer-events-none absolute inset-0 -z-10 overflow-hidden', className)}>
      <div className="bg-gradient-aurora absolute inset-0 opacity-25 blur-3xl" />
      <div className="[background-image:radial-gradient(ellipse_at_top,theme(colors.background/0)_0%,theme(colors.background)_70%)] absolute inset-0" />
    </div>
  )
}

export function GridBackground({ className, fade = true }: { className?: string; fade?: boolean }) {
  return (
    <div aria-hidden className={cn('pointer-events-none absolute inset-0 -z-10 overflow-hidden', className)}>
      <div className="grid-pattern animate-grid-pan absolute inset-0" />
      {fade && <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--background)_85%)]" />}
    </div>
  )
}

export function DotsBackground({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn('pointer-events-none absolute inset-0 -z-10 overflow-hidden', className)}>
      <div className="dot-pattern absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--background)_90%)]" />
    </div>
  )
}

export function BeamsBackground({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn('pointer-events-none absolute inset-0 -z-10 overflow-hidden', className)}>
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="from-primary/0 via-primary/60 to-primary/0 absolute -top-1/2 left-1/2 h-[200%] w-1 origin-top bg-gradient-to-b blur-[2px]"
          style={{ rotate: -25 + i * 8, x: -200 + i * 100 }}
          animate={{ opacity: [0.1, 0.7, 0.1] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_40%,var(--background)_85%)]" />
    </div>
  )
}

export function SpotlightBackground({ className, color = 'primary' }: { className?: string; color?: 'primary' | 'secondary' | 'accent' }) {
  const map = { primary: 'var(--primary)', secondary: 'var(--secondary)', accent: 'var(--accent)' }
  return (
    <div aria-hidden className={cn('pointer-events-none absolute inset-0 -z-10 overflow-hidden', className)}>
      <motion.div
        className="absolute -top-32 left-1/2 h-[80vh] w-[80vw] -translate-x-1/2 rounded-full blur-[120px]"
        style={{ background: `radial-gradient(circle, ${map[color]} 0%, transparent 60%)`, opacity: 0.25 }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

export function MeshBackground({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn('pointer-events-none absolute inset-0 -z-10 overflow-hidden', className)}>
      <motion.div
        className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--primary), transparent 70%)', opacity: 0.18 }}
        animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-40 -bottom-40 h-[40rem] w-[40rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--secondary), transparent 70%)', opacity: 0.22 }}
        animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 left-1/3 h-[30rem] w-[30rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--accent), transparent 70%)', opacity: 0.12 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
