'use client'

import { cn } from '@/lib/utils'

export function CyberFrameBackground({ className }: { className?: string }) {
  // Symmetrical drifting particle sparks (12 total particles)
  const particles = Array.from({ length: 12 })

  // Mirror-symmetric paths for the left and right cyber borders
  // Left: slant down-right, vertical down with a micro-notch, slant down-left
  const leftPath = 'M 0 0 L 140 140 L 140 470 L 125 485 L 125 515 L 140 530 L 140 860 L 0 1000'

  // Right: slant down-left, vertical down with a micro-notch, slant down-right
  const rightPath = 'M 200 0 L 60 140 L 60 470 L 75 485 L 75 515 L 60 530 L 60 860 L 200 1000'

  return (
    <div
      aria-hidden
      className={cn('pointer-events-none absolute inset-0 -z-10 overflow-hidden', className)}
      style={{
        // Smooth gradient mask to fade out elements beautifully at top and bottom boundaries
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
      }}
    >
      <style>{`
        @keyframes floating-spark {
          0% {
            transform: translate3d(0, 0, 0) scale(0.8);
            opacity: 0.15;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            transform: translate3d(15px, -70px, 0) scale(1.25);
            opacity: 0.15;
          }
        }
        .animate-floating-spark {
          animation: floating-spark linear infinite;
        }
      `}</style>

      {/* Modern Circular Dot Pattern Background */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--primary) 1.2px, transparent 1.2px)',
          backgroundSize: '32px 32px'
        }}
      />

      {/* Symmetrical Neon side spotlight glows (Matching screenshot lighting) */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Left Side Glow */}
        <div
          className="pointer-events-none absolute top-1/2 left-0 h-[80%] w-[350px] -translate-y-1/2 rounded-full blur-[130px]"
          style={{
            background: 'radial-gradient(ellipse at left, var(--primary) 0%, transparent 70%)',
            opacity: 0.22
          }}
        />
        {/* Right Side Glow */}
        <div
          className="pointer-events-none absolute top-1/2 right-0 h-[80%] w-[350px] -translate-y-1/2 rounded-full blur-[130px]"
          style={{
            background: 'radial-gradient(ellipse at right, var(--primary) 0%, transparent 70%)',
            opacity: 0.22
          }}
        />
      </div>

      {/* Left Glowing Cyber Frame SVG (Angled Neon Border) */}
      <svg
        className="pointer-events-none absolute top-0 left-0 h-full w-[14vw] max-w-[260px] min-w-[140px] overflow-visible opacity-70"
        viewBox="0 0 200 1000"
        preserveAspectRatio="none"
      >
        {/* Tier 1: Wide blur outer glow */}
        <path
          d={leftPath}
          fill="none"
          stroke="var(--primary)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: 'blur(8px)', opacity: 0.2 }}
        />
        {/* Tier 2: Medium blur inner glow */}
        <path
          d={leftPath}
          fill="none"
          stroke="var(--primary)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: 'blur(2px)', opacity: 0.55 }}
        />
        {/* Tier 3: Sharp core high-intensity glow */}
        <path d={leftPath} fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.95 }} />
      </svg>

      {/* Right Glowing Cyber Frame SVG (Angled Neon Border) */}
      <svg
        className="pointer-events-none absolute top-0 right-0 h-full w-[14vw] max-w-[260px] min-w-[140px] overflow-visible opacity-70"
        viewBox="0 0 200 1000"
        preserveAspectRatio="none"
      >
        {/* Tier 1: Wide blur outer glow */}
        <path
          d={rightPath}
          fill="none"
          stroke="var(--primary)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: 'blur(8px)', opacity: 0.2 }}
        />
        {/* Tier 2: Medium blur inner glow */}
        <path
          d={rightPath}
          fill="none"
          stroke="var(--primary)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: 'blur(2px)', opacity: 0.55 }}
        />
        {/* Tier 3: Sharp core high-intensity glow */}
        <path d={rightPath} fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.95 }} />
      </svg>

      {/* Dynamic Floating Sparks (Keeping Particle Effects) */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((_, i) => {
          const delay = `${(i * 0.77) % 4.5}s`
          const duration = `${7 + ((i * 2.1) % 6)}s`
          const left = `${15 + ((i * 8.7) % 70)}%`
          const top = `${12 + ((i * 9.3) % 76)}%`

          return (
            <div
              key={i}
              className="animate-floating-spark bg-primary absolute h-1.5 w-1.5 rounded-full"
              style={{
                left,
                top,
                animationDelay: delay,
                animationDuration: duration,
                boxShadow: '0 0 10px 2px var(--primary-glow)'
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
