'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import React from 'react'

const transition = {
  type: 'spring' as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001
}

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  className
}: {
  setActive: (item: string) => void
  active: string | null
  item: string
  children?: React.ReactNode
  className?: string
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className={cn(
          'text-muted-foreground hover:text-foreground cursor-pointer text-sm font-medium transition-colors',
          active === item && 'text-foreground',
          className
        )}
      >
        {item}
      </motion.p>
      {active !== null && children && (
        <motion.div initial={{ opacity: 0, scale: 0.85, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={transition}>
          {active === item && (
            <div className="absolute top-[calc(100%+1.7rem)] left-1/2 -translate-x-1/2 transform pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-background/50 border-border/40 overflow-hidden rounded-2xl border shadow-xl backdrop-blur-lg"
              >
                <motion.div layout className="h-full w-max p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  )
}

export const Menu = ({
  setActive,
  children,
  scrolled = true,
  className
}: {
  setActive: (item: string | null) => void
  children: React.ReactNode
  scrolled?: boolean
  className?: string
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className={cn(
        'relative flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500',
        scrolled
          ? 'bg-background/50 border border-white/10 shadow-[0_0_30px_color-mix(in_oklab,var(--primary)_15%,transparent)] backdrop-blur-lg'
          : 'border border-transparent bg-transparent shadow-none',
        className
      )}
    >
      {scrolled && (
        <div
          className="from-primary/30 via-secondary/30 to-primary animate-aurora pointer-events-none absolute inset-0 rounded-full bg-linear-to-r bg-size-[200%_auto] p-px"
          style={{
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude'
          }}
        />
      )}
      {children}
    </nav>
  )
}

export const ProductItem = ({ title, description, href, src }: { title: string; description: string; href: string; src: string }) => {
  return (
    <a href={href} className="flex space-x-2">
      <img src={src} width={140} height={70} alt={title} className="shrink-0 rounded-md shadow-2xl" />
      <div>
        <h4 className="text-foreground mb-1 text-xl font-bold">{title}</h4>
        <p className="text-muted-foreground max-w-40 text-sm">{description}</p>
      </div>
    </a>
  )
}

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <a {...rest} className="text-muted-foreground hover:text-foreground">
      {children}
    </a>
  )
}
