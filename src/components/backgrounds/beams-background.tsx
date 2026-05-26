'use client'

import { cn } from '@/lib/utils'
import { useId } from 'react'

interface BeamsBackgroundProps {
  className?: string
  intensity?: 'low' | 'medium' | 'high'
}

export function BeamsBackground({ className, intensity = 'medium' }: BeamsBackgroundProps) {
  const id = useId()

  // Define beam configurations (angle, offset, speed, delay, color)
  const beams = [
    {
      left: '10%',
      rotate: -15,
      delay: 0,
      duration: 8,
      color: 'var(--primary)',
      width: '2px',
      opacity: 0.25
    },
    {
      left: '30%',
      rotate: -5,
      delay: 1.5,
      duration: 10,
      color: 'var(--secondary)',
      width: '1.5px',
      opacity: 0.2
    },
    {
      left: '50%',
      rotate: 5,
      delay: 3,
      duration: 7,
      color: 'var(--accent)',
      width: '2.5px',
      opacity: 0.3
    },
    {
      left: '70%',
      rotate: 15,
      delay: 0.8,
      duration: 12,
      color: 'var(--primary)',
      width: '1px',
      opacity: 0.15
    },
    {
      left: '90%',
      rotate: 25,
      delay: 2.2,
      duration: 9,
      color: 'var(--secondary)',
      width: '2px',
      opacity: 0.25
    }
  ]

  const intensityMultipliers = {
    low: 0.4,
    medium: 0.85,
    high: 1.3
  }

  const multiplier = intensityMultipliers[intensity]

  return (
    <div
      aria-hidden
      className={cn('pointer-events-none absolute inset-0 -z-10 overflow-hidden', className)}
      style={{
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)'
      }}
    >
      <style>{`
        @keyframes beam-pulse {
          0% {
            transform: translateY(-100%) scaleY(0.1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100%) scaleY(1);
            opacity: 0;
          }
        }
        .animate-beam-pulse {
          animation: beam-pulse var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
          animation-delay: var(--delay);
        }
      `}</style>

      {/* Futuristic ambient grid underlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--primary) 1px, transparent 1px), linear-gradient(to bottom, var(--primary) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      {/* Main beam tracks */}
      {beams.map((beam, index) => {
        const finalOpacity = beam.opacity * multiplier
        return (
          <div
            key={index}
            className="absolute top-[-20%] h-[140%] origin-top"
            style={{
              left: beam.left,
              transform: `rotate(${beam.rotate}deg)`
            }}
          >
            {/* The static tracks (very subtle line) */}
            <div
              className="absolute inset-y-0 w-px bg-linear-to-b"
              style={{
                background: `linear-gradient(to bottom, transparent, ${beam.color}, transparent)`,
                opacity: finalOpacity * 0.35,
                width: beam.width
              }}
            />

            {/* Glowing blur backing for track */}
            <div
              className="absolute inset-y-0 w-[4px] translate-x-[-1.5px] bg-linear-to-b blur-xs"
              style={{
                background: `linear-gradient(to bottom, transparent, ${beam.color}, transparent)`,
                opacity: finalOpacity * 0.15
              }}
            />

            {/* Light streak pulsing down the track */}
            <div
              className="animate-beam-pulse absolute inset-y-0 w-[2px] bg-linear-to-b"
              style={{
                background: `linear-gradient(to bottom, transparent, ${beam.color} 20%, #ffffff 50%, ${beam.color} 80%, transparent)`,
                height: '40%',
                opacity: finalOpacity,
                // Pass variables to CSS Animation
                // @ts-ignore
                '--duration': `${beam.duration}s`,
                '--delay': `${beam.delay}s`
              }}
            />

            {/* Additional outer beam glow bloom */}
            <div
              className="animate-beam-pulse absolute inset-y-0 w-[8px] translate-x-[-3px] bg-linear-to-b blur-sm"
              style={{
                background: `linear-gradient(to bottom, transparent, ${beam.color} 30%, ${beam.color} 70%, transparent)`,
                height: '40%',
                opacity: finalOpacity * 0.4,
                // @ts-ignore
                '--duration': `${beam.duration}s`,
                '--delay': `${beam.delay}s`
              }}
            />
          </div>
        )
      })}

      {/* Global top & bottom lighting vignette to pull them together */}
      <div
        className="absolute top-0 left-1/4 h-[400px] w-1/2 rounded-full blur-[160px]"
        style={{
          background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
          opacity: 0.12 * multiplier
        }}
      />
      <div
        className="absolute right-1/4 bottom-0 h-[300px] w-1/2 rounded-full blur-[140px]"
        style={{
          background: 'radial-gradient(circle, var(--secondary) 0%, transparent 70%)',
          opacity: 0.08 * multiplier
        }}
      />
    </div>
  )
}
