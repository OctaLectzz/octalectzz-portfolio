'use client'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { motion, type HTMLMotionProps } from 'framer-motion'
import Link from 'next/link'
import { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'secondary' | 'destructive' | 'link'
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon' | 'xs'

type Props = HTMLMotionProps<'button'> & {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  asChildHref?: string
  download?: string | boolean
}

export function PrimaryButton({ variant = 'primary', size = 'lg', className, children, asChildHref, download, ...props }: Props) {
  const isPrimary = variant === 'primary'

  const shadcnVariant = isPrimary ? 'default' : variant

  const content = (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      className={cn(
        buttonVariants({ variant: shadcnVariant as any, size, className }),
        isPrimary &&
          'animate-aurora text-primary-foreground glow border-transparent bg-[linear-gradient(120deg,var(--primary),var(--primary),var(--secondary),var(--primary))] bg-size-[200%_200%] transition-all hover:shadow-[0_0_25px_color-mix(in_oklab,var(--primary)_50%,transparent)]',
        variant === 'outline' &&
          'border-border bg-surface/40 text-foreground hover:border-primary hover:shadow-[0_0_15px_color-mix(in_oklab,var(--primary)_30%,transparent)]',
        'group relative cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-0.5'
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {isPrimary && (
        <span aria-hidden className="pointer-events-none absolute inset-0 z-0">
          <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        </span>
      )}
    </motion.button>
  )

  if (asChildHref) {
    if (download) {
      return (
        <a href={asChildHref} download={typeof download === 'string' ? download : ''} className="inline-block">
          {content}
        </a>
      )
    }

    return (
      <Link href={asChildHref} className="inline-block">
        {content}
      </Link>
    )
  }

  return content
}
