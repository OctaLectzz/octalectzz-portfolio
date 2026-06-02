import { GridBackground } from '@/components/backgrounds'
import { Eyebrow } from '@/components/common/eyebrow'
import { PrimaryText } from '@/components/common/primary-text'
import { Reveal } from '@/components/common/reveal'
import { Container, Section } from '@/components/common/section'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { ParticleField } from '@/components/ui/particle-field'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { Fragment } from 'react'

interface BreadcrumbItemProps {
  label: string
  href?: string
}

interface PageHeroSectionProps {
  title: string
  highlight?: string
  subtitle: string
  breadcrumbs: BreadcrumbItemProps[]
  background?: React.ReactNode // optional custom background
  className?: string
  eyebrow?: string
  eyebrowIcon?: LucideIcon
  children?: React.ReactNode
}

/**
 * Default background composed of Mesh, Grid and ParticleField with subtle motion.
 */
function DefaultBackground() {
  return (
    <>
      <GridBackground className="-z-20" />
      <ParticleField />
    </>
  )
}

export function PageHeroSection({
  title,
  highlight,
  subtitle,
  breadcrumbs,
  background,
  className,
  eyebrow,
  eyebrowIcon,
  children
}: PageHeroSectionProps) {
  return (
    <Section className={cn('relative overflow-hidden pt-28 pb-12', className)}>
      {background ?? <DefaultBackground />}

      {/* Bottom fade overlay to transition seamlessly into subsequent sections */}
      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-t to-transparent" />

      <Container className="relative z-10">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-4">
          <BreadcrumbList>
            {breadcrumbs.map((item, idx) => (
              <Fragment key={idx}>
                <BreadcrumbItem>
                  {item.href ? <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink> : <span className="text-foreground">{item.label}</span>}
                </BreadcrumbItem>
                {idx < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
              </Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>

        {/* Hero content */}
        <Reveal>
          {eyebrow && <Eyebrow label={eyebrow} icon={eyebrowIcon} />}

          <h1 className="font-display text-foreground mt-4 text-5xl font-bold tracking-tight md:text-7xl">
            {highlight ? (
              <>
                {title.split(highlight)[0]}
                <PrimaryText text={highlight} />
                {title.split(highlight)[1]}
              </>
            ) : (
              title
            )}
          </h1>

          <motion.p
            className="text-muted-foreground mt-5 max-w-2xl text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        </Reveal>

        {children}
      </Container>
    </Section>
  )
}

// Export Breadcrumb helpers for convenience
export { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator }
