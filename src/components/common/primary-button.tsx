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
}

export function PrimaryButton({ variant = 'primary', size = 'lg', className, children, asChildHref, ...props }: Props) {
  const isPrimary = variant === 'primary'

  const shadcnVariant = isPrimary ? 'default' : variant

  const content = (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      className={cn(
        buttonVariants({ variant: shadcnVariant as any, size, className }),
        isPrimary && 'bg-gradient-primary text-primary-foreground glow border-transparent transition-all',
        variant === 'outline' && 'border-border bg-surface/40 text-foreground hover:border-primary',
        'relative overflow-hidden'
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
    return (
      <Link href={asChildHref} className="inline-block">
        {content}
      </Link>
    )
  }

  return content
}
