'use client'

import { cn } from '@/lib/utils'

interface MeshBackgroundProps {
  className?: string
  opacity?: number
}

export function MeshBackground({ className, opacity = 1 }: MeshBackgroundProps) {
  return (
    <div
      aria-hidden
      className={cn('pointer-events-none absolute inset-0 -z-10 overflow-hidden', className)}
      style={{
        opacity,
        maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
      }}
    >
      <style>{`
        @keyframes mesh-drift-1 {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          33% {
            transform: translate3d(80px, 60px, 0) scale(1.15);
          }
          66% {
            transform: translate3d(-50px, 100px, 0) scale(0.9);
          }
        }
        @keyframes mesh-drift-2 {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          40% {
            transform: translate3d(-100px, -40px, 0) scale(1.2);
          }
          70% {
            transform: translate3d(60px, -90px, 0) scale(0.85);
          }
        }
        @keyframes mesh-drift-3 {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(50px, -60px, 0) scale(0.9);
          }
          80% {
            transform: translate3d(-70px, 50px, 0) scale(1.1);
          }
        }
        .animate-mesh-drift-1 {
          animation: mesh-drift-1 18s ease-in-out infinite;
        }
        .animate-mesh-drift-2 {
          animation: mesh-drift-2 22s ease-in-out infinite;
        }
        .animate-mesh-drift-3 {
          animation: mesh-drift-3 20s ease-in-out infinite;
        }
      `}</style>

      {/* Blob 1: Primary color */}
      <div
        className="animate-mesh-drift-1 absolute top-[-20%] left-[-10%] h-220 w-220 rounded-full blur-[140px]"
        style={{
          background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
          opacity: 0.18
        }}
      />

      {/* Blob 2: Secondary color */}
      <div
        className="animate-mesh-drift-2 h-w-240 w-w-240 absolute right-[-15%] bottom-[-15%] rounded-full blur-[150px]"
        style={{
          background: 'radial-gradient(circle, var(--secondary) 0%, transparent 70%)',
          opacity: 0.22
        }}
      />

      {/* Blob 3: Accent color */}
      <div
        className="animate-mesh-drift-3 absolute top-[25%] left-[20%] h-180 w-180 rounded-full blur-[130px]"
        style={{
          background: 'radial-gradient(circle, var(--accent) 0%, transparent 75%)',
          opacity: 0.15
        }}
      />

      {/* Subtle modern noise grain layer */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.7'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  )
}
