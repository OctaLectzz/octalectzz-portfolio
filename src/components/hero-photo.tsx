'use client'

import profile from '@/assets/profile.jpg'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Float } from './common/float'
import { Terminal } from './terminal'

export function HeroPhoto() {
  const t = useTranslations('home.hero')

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto aspect-square w-full max-w-lg lg:mr-0"
    >
      {/* Glow Background */}
      <div aria-hidden className="bg-gradient-aurora animate-pulse-glow absolute inset-0 rounded-full opacity-30 blur-3xl" />

      {/* Orbits */}
      <motion.div
        aria-hidden
        className="border-primary/30 absolute inset-0 rounded-full border"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        <span className="bg-primary glow absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full" />
      </motion.div>
      <motion.div
        aria-hidden
        className="border-secondary/30 absolute inset-6 rounded-full border"
        animate={{ rotate: -360 }}
        transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
      >
        <span className="bg-secondary glow-violet absolute -bottom-1.5 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full" />
      </motion.div>

      {/* Photo Container */}
      <Float duration={6} distance={15} className="relative flex h-full place-items-center items-center justify-center">
        <div className="border-border glow relative aspect-square w-[86%] overflow-hidden rounded-full border">
          <Image src={profile} alt="Octavyan Putra Ramadhan" width={896} height={896} className="h-full w-full object-cover" priority />
          <div aria-hidden className="from-primary/10 to-secondary/20 absolute inset-0 bg-linear-to-tr via-transparent mix-blend-overlay" />
        </div>
      </Float>

      {/* Role Badge - Top Left */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
        className="absolute top-4 -left-8 z-20 lg:top-8 lg:-left-12"
      >
        <Float duration={7} distance={10} x={5}>
          <div className="border-border glass shadow-glow rounded-2xl border px-5 py-3.5">
            <p className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase opacity-70">Role</p>
            <p className="text-sm font-bold tracking-tight">{t('role')}</p>
          </div>
        </Float>
      </motion.div>

      {/* Location Badge - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.8, type: 'spring', stiffness: 100 }}
        className="absolute right-0 bottom-4 z-20 lg:-right-8 lg:bottom-12"
      >
        <Float duration={8} distance={10} x={-5} delay={1}>
          <div className="border-border glass shadow-violet rounded-2xl border px-5 py-3.5">
            <p className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase opacity-70">Location</p>
            <p className="text-sm font-bold tracking-tight">{t('location')}</p>
          </div>
        </Float>
      </motion.div>

      {/* Terminal - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, y: 40, x: -40, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
        transition={{ delay: 1.1, type: 'spring', damping: 15 }}
        className="absolute -bottom-10 -left-10 z-30 w-full max-w-[210px] sm:max-w-[240px] lg:-bottom-6 lg:-left-24"
      >
        <Float duration={9} rotate={-1} distance={8} delay={0.5}>
          <Terminal />
        </Float>
      </motion.div>
    </motion.div>
  )
}
