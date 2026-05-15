import Link from 'next/link'

export function Logo({ size = 36 }: { size?: number }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-2.5">
      <span
        aria-hidden
        className="bg-gradient-primary glow relative grid place-items-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
        style={{ width: size, height: size }}
      >
        <svg viewBox="0 0 32 32" width={size * 0.65} height={size * 0.65} fill="none" stroke="currentColor" className="text-primary-foreground">
          <circle cx="16" cy="16" r="11" strokeWidth="2.5" />
          <path d="M22 22 L27 27" strokeWidth="2.8" strokeLinecap="round" />
          <path d="M11 16 L15 20 L21 12" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>

      <span className="font-display text-lg font-bold tracking-tight">
        <span className="text-foreground">Octa</span>
        <span className="text-gradient">Lectzz</span>
      </span>
    </Link>
  )
}
