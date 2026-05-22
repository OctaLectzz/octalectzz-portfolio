'use client'

import { cn } from '@/lib/utils'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import type { MouseEvent, ReactNode } from 'react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  index?: number
  className?: string
}

/**
 * A futuristic service card with mouse-tracking spotlight glow,
 * animated gradient border, and glassmorphism.
 */
export function ServiceCard({ icon, title, description, index = 0, className }: ServiceCardProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  // Mouse-tracking radial glow
  const spotlightBackground = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, color-mix(in oklab, var(--primary) 12%, transparent), transparent 80%)`
  const borderGlow = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, color-mix(in oklab, var(--primary) 30%, transparent), color-mix(in oklab, var(--secondary) 10%, transparent) 50%, transparent 80%)`

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      className={cn('group relative h-full', className)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
    >
      {/* Animated border glow layer */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: borderGlow }}
      />

      {/* Card body */}
      <div className="border-border/50 bg-card/60 group-hover:shadow-primary/20 relative h-full overflow-hidden rounded-2xl border backdrop-blur-xl transition-all duration-500 group-hover:border-transparent group-hover:shadow-[0_0_40px_-8px]">
        {/* Mouse spotlight */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: spotlightBackground }}
        />

        {/* Top edge glow line */}
        <div className="absolute inset-x-0 top-0 h-px">
          <div className="from-primary/0 via-primary/60 to-primary/0 h-full w-full bg-linear-to-r opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        {/* Card inner content */}
        <div className="relative z-10 flex h-full flex-col p-6 md:p-7">
          {/* Icon container with animated glow */}
          <div className="relative mb-5">
            <div className="bg-gradient-primary group-hover:shadow-primary/30 relative grid h-12 w-12 place-items-center rounded-xl text-xl shadow-lg transition-all duration-500 group-hover:shadow-[0_0_25px_-4px]">
              <span className="text-primary-foreground text-lg">{icon}</span>
            </div>
            {/* Icon pulse ring */}
            <div
              className="bg-primary/20 absolute inset-0 h-12 w-12 animate-ping rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-30"
              style={{ animationDuration: '2s' }}
            />
          </div>

          {/* Title */}
          <h3 className="font-display group-hover:text-primary mb-2 text-lg font-semibold tracking-tight transition-colors duration-300">{title}</h3>

          {/* Description */}
          <p className="text-muted-foreground flex-1 text-sm leading-relaxed">{description}</p>

          {/* Bottom decorative line */}
          <div className="bg-border/30 mt-5 h-px w-full overflow-hidden rounded-full">
            <motion.div
              className="bg-gradient-primary h-full w-full origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 + index * 0.1 }}
            />
          </div>
        </div>

        {/* Corner accent orb */}
        <div className="bg-primary/5 group-hover:bg-primary/15 pointer-events-none absolute -right-12 -bottom-12 h-32 w-32 rounded-full blur-2xl transition-all duration-700 group-hover:blur-3xl" />
      </div>
    </motion.div>
  )
}
