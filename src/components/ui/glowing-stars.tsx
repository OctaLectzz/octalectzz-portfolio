'use client'

import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'motion/react'
import React, { useEffect, useRef, useState } from 'react'

export const GlowingStarsBackgroundCard = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  const [mouseEnter, setMouseEnter] = useState(false)

  return (
    <div
      onMouseEnter={() => {
        setMouseEnter(true)
      }}
      onMouseLeave={() => {
        setMouseEnter(false)
      }}
      className={cn(
        'h-full max-h-80 w-full max-w-md rounded-xl border border-[#eaeaea] bg-[linear-gradient(110deg,#333_0.6%,#222)] p-4 dark:border-neutral-600',
        className
      )}
    >
      <div className="flex items-center justify-center">
        <Illustration mouseEnter={mouseEnter} />
      </div>
      <div className="px-2 pb-6">{children}</div>
    </div>
  )
}

export const GlowingStarsDescription = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return <p className={cn('max-w-[16rem] text-base text-white', className)}>{children}</p>
}

export const GlowingStarsTitle = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return <h2 className={cn('text-2xl font-bold text-[#eaeaea]', className)}>{children}</h2>
}

export const Illustration = ({
  mouseEnter = false,
  stars = 108,
  columns = 18,
  glowingCount = 5,
  className
}: {
  mouseEnter?: boolean
  stars?: number
  columns?: number
  glowingCount?: number
  className?: string
}) => {
  const [glowingStars, setGlowingStars] = useState<number[]>([])

  const highlightedStars = useRef<number[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      highlightedStars.current = Array.from({ length: glowingCount }, () => Math.floor(Math.random() * stars))
      setGlowingStars([...highlightedStars.current])
    }, 1000)

    return () => clearInterval(interval)
  }, [glowingCount, stars])

  return (
    <div
      className={cn('h-full w-full p-1', className)}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: `1px`
      }}
    >
      {[...Array(stars)].map((_, starIdx) => {
        const isGlowing = glowingStars.includes(starIdx)
        const delay = (starIdx % 10) * 0.1
        const staticDelay = starIdx * 0.01
        const colorType = starIdx % 2 === 0 ? 'primary' : 'secondary'
        return (
          <div key={`matrix-col-${starIdx}}`} className="relative flex items-center justify-center">
            <Star isGlowing={mouseEnter ? true : isGlowing} delay={mouseEnter ? staticDelay : delay} />
            {mouseEnter && <Glow delay={staticDelay} colorType={colorType} />}
            <AnimatePresence mode="wait">{isGlowing && <Glow delay={delay} colorType={colorType} />}</AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

const Star = ({ isGlowing, delay }: { isGlowing: boolean; delay: number }) => {
  return (
    <motion.div
      key={delay}
      initial={{
        scale: 1
      }}
      animate={{
        scale: isGlowing ? [1, 1.2, 2.5, 2.2, 1.5] : 1,
        backgroundColor: isGlowing ? '#ffffff' : 'rgba(163, 163, 163, 0.5)'
      }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
        delay: delay
      }}
      className={cn('relative z-20 h-[2px] w-[2px] rounded-full bg-neutral-400/50')}
    ></motion.div>
  )
}

const Glow = ({ delay, colorType }: { delay: number; colorType: 'primary' | 'secondary' }) => {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
        delay: delay
      }}
      exit={{
        opacity: 0
      }}
      className={cn(
        'absolute left-1/2 z-10 h-[4px] w-[4px] -translate-x-1/2 rounded-full shadow-2xl blur-[1px]',
        colorType === 'primary' ? 'bg-primary shadow-primary/40' : 'bg-secondary shadow-secondary/40'
      )}
    />
  )
}
