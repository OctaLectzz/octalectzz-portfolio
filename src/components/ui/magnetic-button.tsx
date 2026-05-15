import { cn } from '@/lib/utils'
import { motion, useMotionValue, useSpring, useTransform, type HTMLMotionProps } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'ghost'

type Props = Omit<HTMLMotionProps<'button'>, 'ref' | 'children'> & {
  variant?: Variant
  children: ReactNode
  asChildHref?: string
}

export function MagneticButton({ variant = 'primary', className, children, asChildHref, ...props }: Props) {
  const ref = useRef<HTMLButtonElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const x = useSpring(mx, { stiffness: 200, damping: 18 })
  const y = useSpring(my, { stiffness: 200, damping: 18 })
  const rx = useTransform(y, [-30, 30], [8, -8])
  const ry = useTransform(x, [-30, 30], [-8, 8])

  const onMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    mx.set(e.clientX - (r.left + r.width / 2))
    my.set(e.clientY - (r.top + r.height / 2))
  }
  const onLeave = () => {
    mx.set(0)
    my.set(0)
  }

  const styles = cn(
    'group relative inline-flex select-none items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-colors',
    variant === 'primary' && 'bg-gradient-primary text-primary-foreground glow',
    variant === 'outline' && 'border border-border bg-surface/40 text-foreground hover:border-primary',
    variant === 'ghost' && 'text-foreground hover:bg-surface',
    className
  )

  const content = (
    <motion.button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x, y, rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
      whileTap={{ scale: 0.96 }}
      className={styles}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      {variant === 'primary' && (
        <span aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-xl">
          <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        </span>
      )}
    </motion.button>
  )

  if (asChildHref)
    return (
      <a href={asChildHref} className="inline-block">
        {content}
      </a>
    )
  return content
}
