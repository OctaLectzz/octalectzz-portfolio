'use client'

import { cn } from '@/lib/utils'
import { useId } from 'react'

interface GridBackgroundProps {
  className?: string
  fade?: boolean
  gridSize?: number
  accentLines?: boolean
}

export function GridBackground({ className, fade = true, gridSize = 60, accentLines = true }: GridBackgroundProps) {
  const id = useId()

  return (
    <div
      aria-hidden
      className={cn('pointer-events-none absolute inset-0 -z-10 overflow-hidden', className)}
      style={{
        maskImage: fade
          ? 'radial-gradient(circle at center, black 40%, transparent 95%)'
          : 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
        WebkitMaskImage: fade
          ? 'radial-gradient(circle at center, black 40%, transparent 95%)'
          : 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
      }}
    >
      <style>{`
        @keyframes grid-scan-h {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          10%, 90% {
            opacity: 0.15;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }
        @keyframes grid-scan-v {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          10%, 90% {
            opacity: 0.15;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
        .animate-grid-scan-h {
          animation: grid-scan-h 12s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
        }
        .animate-grid-scan-v {
          animation: grid-scan-v 15s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
          animation-delay: 2s;
        }
      `}</style>

      {/* Dual layer grid: Base fine grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--primary) 1px, transparent 1px),
            linear-gradient(to bottom, var(--primary) 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize / 2}px ${gridSize / 2}px`
        }}
      />

      {/* Dual layer grid: Main accented grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--primary) 1.5px, transparent 1.5px),
            linear-gradient(to bottom, var(--primary) 1.5px, transparent 1.5px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`
        }}
      />

      {/* Grid Intersection Glow dots (extremely subtle cyber style) */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle, var(--primary) 1.5px, transparent 1.5px)`,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          backgroundPosition: `-0.75px -0.75px`
        }}
      />

      {/* Accent Scanning Lines */}
      {accentLines && (
        <div className="absolute inset-0 opacity-40">
          {/* Horizontal Scanner */}
          <div
            className="animate-grid-scan-h absolute right-0 left-0 h-[100px] w-full bg-linear-to-b"
            style={{
              background: 'linear-gradient(to bottom, transparent, var(--primary) 50%, transparent)',
              opacity: 0.1
            }}
          />
          {/* Vertical Scanner */}
          <div
            className="animate-grid-scan-v absolute top-0 bottom-0 h-full w-[100px] bg-linear-to-r"
            style={{
              background: 'linear-gradient(to right, transparent, var(--secondary) 50%, transparent)',
              opacity: 0.08
            }}
          />
        </div>
      )}

      {/* Center Spotlight radial color fill */}
      <div
        className="from-primary/5 absolute inset-0 bg-radial via-transparent to-transparent"
        style={{
          background: 'radial-gradient(circle at center, var(--primary-glow) 0%, transparent 70%)',
          opacity: 0.15
        }}
      />
    </div>
  )
}
