'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface HeroSectionProps {
  cover: string
  title: string
}

/** Full-width cinematic cover image with gradient overlays. */
export function HeroSection({ cover, title }: HeroSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative mb-0 aspect-video w-full overflow-hidden md:aspect-21/8"
    >
      <Image src={cover} alt={title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px" priority className="object-cover" />
      <div className="from-background via-background/80 pointer-events-none absolute inset-0 bg-linear-to-t to-transparent" />
      <div className="from-background/40 pointer-events-none absolute inset-0 bg-linear-to-b to-transparent to-30%" />
    </motion.div>
  )
}
