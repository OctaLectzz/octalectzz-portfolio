'use client'

import { motion } from 'framer-motion'
import { Images } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { ImageViewer } from '@/components/common/image-viewer'

interface GallerySectionProps {
  images: string[]
  title: string
}

/** Gallery grid with lightbox viewer support. */
export function GallerySection({ images, title }: GallerySectionProps) {
  const t = useTranslations('projects')

  if (images.length === 0) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-16 space-y-6"
    >
      <div className="flex items-center gap-3">
        <div className="bg-primary/10 border-primary/25 text-primary flex h-8 w-8 items-center justify-center rounded-lg border">
          <Images className="h-4 w-4" />
        </div>
        <h2 className="font-display text-foreground text-2xl font-extrabold">{t('galleryTitle')}</h2>
      </div>

      <ImageViewer>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((imagePath, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group border-border/30 relative aspect-video cursor-zoom-in overflow-hidden rounded-xl border shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <Image
                src={imagePath}
                alt={`${title} - screenshot ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="from-background/30 pointer-events-none absolute inset-0 bg-linear-to-t to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </ImageViewer>
    </motion.div>
  )
}
