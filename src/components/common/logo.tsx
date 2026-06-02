import Link from 'next/link'

export function Logo({ size }: { size?: number }) {
  const customStyle = size ? { width: size, height: size } : undefined
  const customSvgSize = size ? size * 0.65 : undefined

  return (
    <Link href="/" className="group inline-flex items-center gap-2 sm:gap-2.5">
      <span
        aria-hidden
        className="bg-gradient-primary glow relative grid h-8 w-8 place-items-center rounded-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 sm:h-9 sm:w-9 sm:rounded-xl"
        style={customStyle}
      >
        <svg
          viewBox="0 0 32 32"
          width={customSvgSize}
          height={customSvgSize}
          className="text-primary-foreground h-[65%] w-[65%]"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="16" cy="16" r="11" strokeWidth="2.5" />
          <path d="M22 22 L27 27" strokeWidth="2.8" strokeLinecap="round" />
          <path d="M11 16 L15 20 L21 12" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>

      <span className="font-display text-base font-bold tracking-tight sm:text-lg">
        <span className="text-foreground">Octa</span>
        <span className="text-gradient">Lectzz</span>
      </span>
    </Link>
  )
}
