'use client'

import { cn } from '@/lib/utils'
import { useId } from 'react'

interface DotsBackgroundProps {
  className?: string
  dotSize?: number
  gap?: number
  opacity?: number
}

export function DotsBackground({ className, dotSize = 1.5, gap = 24, opacity = 0.45 }: DotsBackgroundProps) {
  const id = useId()

  // Generate 8 random coordinates for blinking "active/cyber" nodes on the grid
  const blinkingNodes = [
    { x: 20, y: 15, delay: 0, color: 'var(--primary)' },
    { x: 45, y: 35, delay: 1.2, color: 'var(--secondary)' },
    { x: 80, y: 20, delay: 2.4, color: 'var(--accent)' },
    { x: 15, y: 65, delay: 0.8, color: 'var(--primary)' },
    { x: 60, y: 75, delay: 3.1, color: 'var(--accent)' },
    { x: 85, y: 60, delay: 1.7, color: 'var(--secondary)' },
    { x: 30, y: 85, delay: 2.2, color: 'var(--primary)' },
    { x: 70, y: 40, delay: 0.5, color: 'var(--accent)' }
  ]

  return (
    <div
      aria-hidden
      className={cn('pointer-events-none absolute inset-0 -z-10 overflow-hidden', className)}
      style={{
        maskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)'
      }}
    >
      <style>{`
        @keyframes cyber-dot-blink {
          0%, 100% {
            opacity: 0.1;
            transform: scale(0.8);
          }
          50% {
            opacity: 0.95;
            transform: scale(1.4);
            filter: drop-shadow(0 0 4px var(--blink-color));
          }
        }
        .animate-cyber-dot-blink {
          animation: cyber-dot-blink var(--duration) ease-in-out infinite;
          animation-delay: var(--delay);
        }
      `}</style>

      {/* SVG Grid Pattern of standard nodes */}
      <svg className="absolute inset-0 h-full w-full" style={{ opacity }}>
        <defs>
          <pattern id={id} width={gap} height={gap} patternUnits="userSpaceOnUse" patternTransform="translate(0, 0)">
            <circle cx={gap / 2} cy={gap / 2} r={dotSize} fill="currentColor" className="text-muted-foreground/20" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>

      {/* Animated Glowing cyber nodes overlay */}
      <div className="absolute inset-0">
        {blinkingNodes.map((node, i) => (
          <div
            key={i}
            className="animate-cyber-dot-blink absolute rounded-full"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              width: `${dotSize * 3}px`,
              height: `${dotSize * 3}px`, // fallback to dotSize if nodeSize isn't defined, let's fix nodeSize variable below
              backgroundColor: node.color,
              // Pass custom properties to animation
              // @ts-ignore
              '--delay': `${node.delay}s`,
              '--duration': '4s',
              '--blink-color': node.color
            }}
          />
        ))}
      </div>

      {/* Ambient background glow layers */}
      <div
        className="absolute top-1/2 left-1/2 h-[70%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
        style={{
          background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
          opacity: 0.05
        }}
      />
    </div>
  )
}
