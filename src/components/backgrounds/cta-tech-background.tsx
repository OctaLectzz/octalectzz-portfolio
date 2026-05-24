'use client'

import { cn } from '@/lib/utils'

export function CtaTechBackground({ className }: { className?: string }) {
  // Drifting dynamic micro-particles (12 total sparks)
  const particles = Array.from({ length: 12 })

  return (
    <div
      aria-hidden
      className={cn('pointer-events-none absolute inset-0 -z-10 overflow-hidden', className)}
      style={{
        // Seamless transition mask at the top boundary where it joins the Projects Section
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 100%)'
      }}
    >
      <style>{`
        @keyframes tech-ray-flow {
          0% {
            transform: translate3d(0, -100px, 0);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translate3d(0, 450px, 0);
            opacity: 0;
          }
        }
        @keyframes cta-sparkle {
          0%, 100% {
            transform: scale(0.8);
            opacity: 0.15;
          }
          50% {
            transform: scale(1.25);
            opacity: 0.75;
          }
        }
        .animate-tech-ray {
          animation: tech-ray-flow linear infinite;
        }
        .animate-cta-sparkle {
          animation: cta-sparkle ease-in-out infinite;
        }
      `}</style>

      {/* Cyber Grid Pattern (Crisp structured backing) */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--primary) 1px, transparent 1px),
            linear-gradient(to bottom, var(--primary) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Circular Dot Matrix Overlay */}
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--primary) 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Symmetrical Thin Vertical Tech Rays (Crisp moving laser coordinates, very light) */}
      <div className="absolute inset-0 flex justify-evenly opacity-25">
        {[...Array(6)].map((_, i) => {
          const delay = `${(i * 1.3) % 4}s`
          const duration = `${5 + ((i * 1.7) % 4)}s`
          const left = `${15 + i * 14}%`

          return (
            <div key={i} className="bg-primary/10 absolute top-0 bottom-0 w-px" style={{ left }}>
              {/* Drifting thin laser cursor */}
              <div
                className="animate-tech-ray via-primary absolute top-0 left-[-0.5px] h-12 w-[2px] bg-linear-to-b from-transparent to-transparent"
                style={{
                  animationDelay: delay,
                  animationDuration: duration
                }}
              />
            </div>
          )
        })}
      </div>

      {/* Twinkling Circular Spark Particles (Pure white twinkling sparks - no heavy colored blur) */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((_, i) => {
          const delay = `${(i * 0.77) % 4}s`
          const duration = `${3 + ((i * 1.2) % 4)}s`
          const left = `${10 + ((i * 7.9) % 80)}%`
          const top = `${15 + ((i * 8.3) % 70)}%`

          return (
            <div
              key={i}
              className="animate-cta-sparkle absolute h-1 w-1 rounded-full bg-white shadow-[0_0_6px_2px_rgba(255,255,255,0.75)]"
              style={{
                left,
                top,
                animationDelay: delay,
                animationDuration: duration
              }}
            />
          )
        })}
      </div>

      {/* Concentric Circle Orbit Behind Card (Structured rounded shapes) */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center opacity-20 select-none">
        <div className="border-primary/10 absolute h-[520px] w-[520px] animate-[spin_80s_linear_infinite] rounded-full border border-dashed shadow-[0_0_20px_rgba(var(--primary-glow),0.02)]" />
        <div className="border-border/10 absolute h-[760px] w-[760px] animate-[spin_105s_linear_infinite_reverse] rounded-full border" />
      </div>
    </div>
  )
}
