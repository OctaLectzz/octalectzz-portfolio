'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface FloatProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  distance?: number
  rotate?: number
  x?: number
}

export function Float({ children, className, delay = 0, duration = 5, distance = 10, rotate = 0, x = 0 }: FloatProps) {
  return (
    <motion.div
      animate={{
        y: [0, -distance, 0],
        x: [0, x, 0],
        rotate: [0, rotate, 0]
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
