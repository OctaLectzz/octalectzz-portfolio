'use client'

import { categories } from '@/data'
import type { Project } from '@/types'
import { getLocalizedValue } from '@/utils/locale'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import type { MouseEvent } from 'react'

interface ProjectCardProps {
  project: Project
  index?: number
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const locale = useLocale()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const categoryObject = categories.find((category) => category.id === project.category_id)
  const categoryName = locale === 'en' ? categoryObject?.nameEn : categoryObject?.nameId

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  // Mouse spotlight gradients
  const spotlightBackground = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, color-mix(in oklab, var(--primary) 15%, transparent), transparent 80%)`
  const borderGlow = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, color-mix(in oklab, var(--primary) 40%, transparent), color-mix(in oklab, var(--secondary) 15%, transparent) 50%, transparent 80%)`

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      className="group relative h-full cursor-pointer"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
    >
      {/* Animated glowing border */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: borderGlow }}
      />

      {/* Main card box with glassmorphism */}
      <div className="border-border/50 bg-card/70 group-hover:shadow-primary/30 relative flex h-full flex-col overflow-hidden rounded-2xl border backdrop-blur-xl transition-all duration-500 group-hover:border-transparent group-hover:shadow-[0_0_50px_-12px]">
        {/* Mouse spotlight effect */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: spotlightBackground }}
        />

        {/* Cover image container */}
        <div className="relative aspect-16/10 overflow-hidden">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Futuristic bottom overlay gradient */}
          <div aria-hidden className="from-card via-card/20 absolute inset-0 bg-linear-to-t to-transparent" />

          {/* Glowing neon top-right accent badge */}
          <span className="border-primary/30 bg-background/80 text-primary-glow absolute top-3 right-3 rounded-full border px-2.5 py-0.5 font-mono text-[9px] font-bold tracking-widest uppercase shadow-[0_0_12px_rgba(var(--primary-glow),0.25)] backdrop-blur-md">
            {categoryName}
          </span>
        </div>

        {/* Inner Content */}
        <div className="flex flex-1 flex-col p-5 md:p-6">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-display text-foreground group-hover:text-primary text-lg font-bold tracking-tight transition-colors duration-300">
              {project.title}
            </h3>

            {/* Animated link indicator */}
            <div className="border-border/60 group-hover:border-primary/45 bg-surface/30 group-hover:bg-primary/10 flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="text-muted-foreground group-hover:text-primary h-3.5 w-3.5 transition-colors" />
            </div>
          </div>

          <p className="text-muted-foreground mt-2 line-clamp-2 flex-1 text-sm leading-relaxed">{getLocalizedValue(project.description, locale)}</p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border-border/40 bg-surface/40 hover:border-primary/30 hover:bg-primary/5 text-muted-foreground hover:text-primary rounded-md border px-2 py-0.5 font-mono text-[10px] transition-all"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Bottom decorative animated laser line */}
          <div className="bg-border/20 mt-5 h-px w-full overflow-hidden rounded-full">
            <motion.div
              className="bg-gradient-primary h-full w-full origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 + index * 0.08 }}
            />
          </div>
        </div>

        {/* Link overlay covering the entire card except any action buttons if we add them later */}
        <Link href={`/projects/${project.id}`} className="absolute inset-0 z-20" />
      </div>
    </motion.div>
  )
}
