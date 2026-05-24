'use client'

import { cn } from '@/lib/utils'

export function GlowLinesBackground({ className }: { className?: string }) {
  // Generate a fixed number of lines
  const lines = Array.from({ length: 15 })

  return (
    <div className={cn('pointer-events-none absolute inset-0 -z-10 overflow-hidden', className)}>
      <style>{`
        @keyframes glow-drop {
          0% {
            transform: translateY(-200px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(1500px);
            opacity: 0;
          }
        }
        .animate-glow-drop {
          animation: glow-drop linear infinite;
        }
      `}</style>

      {/* Subtle background texture (Grid) */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--primary) 1px, transparent 1px),
            linear-gradient(to bottom, var(--primary) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}
      />

      {/* Radial mask to fade out the edges and grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_80%)]" />

      {/* Vertical glowing lines container */}
      <div className="absolute inset-0 flex justify-evenly">
        {lines.map((_, i) => {
          // Generate pseudo-random values purely based on index for stable hydration
          const delay = `${(i * 0.73) % 4}s`
          const duration = `${4 + ((i * 2.1) % 4)}s`
          const opacity = 0.3 + ((i * 0.3) % 0.5)

          return (
            <div key={i} className="bg-primary/5 relative h-full w-px">
              {/* The falling glow drop */}
              <div
                className="animate-glow-drop absolute top-0 ml-[-0.5px] w-[2px]"
                style={{
                  height: '250px',
                  background: 'linear-gradient(to bottom, transparent, hsl(var(--primary)), transparent)',
                  boxShadow: '0 0 20px 2px hsl(var(--primary))',
                  animationDelay: delay,
                  animationDuration: duration,
                  opacity: opacity
                }}
              />
            </div>
          )
        })}
      </div>

      {/* Bottom fade overlay to ensure smooth transition to next section */}
      <div className="from-background absolute inset-x-0 bottom-0 h-40 bg-linear-to-t to-transparent" />
      <div className="from-background absolute inset-x-0 top-0 h-40 bg-linear-to-b to-transparent" />
    </div>
  )
}
