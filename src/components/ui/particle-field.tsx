import { usePerformance } from '@/providers/performance-provider'
import { useEffect, useRef } from 'react'

export function ParticleField() {
  const { performanceMode } = usePerformance()
  const ref = useRef<HTMLCanvasElement>(null)

  if (performanceMode) return null

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    let raf = 0
    const parent = canvas.parentElement!
    const dpr = window.devicePixelRatio || 1
    type P = { x: number; y: number; vx: number; vy: number; r: number; c: 'primary' | 'secondary' }
    let particles: P[] = []

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = parent
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.scale(dpr, dpr)
      particles = Array.from({ length: 60 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.8 + 0.4,
        c: Math.random() > 0.5 ? 'primary' : 'secondary'
      }))
    }
    resize()
    window.addEventListener('resize', resize)

    const tick = () => {
      const { clientWidth: w, clientHeight: h } = parent
      ctx.clearRect(0, 0, w, h)

      const style = getComputedStyle(canvas)
      const primaryColor = style.getPropertyValue('--primary').trim() || '#22d3ee'
      const secondaryColor = style.getPropertyValue('--secondary').trim() || '#a855f7'

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1

        const color = p.c === 'primary' ? primaryColor : secondaryColor

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.globalAlpha = 0.8
        ctx.shadowBlur = 8
        ctx.shadowColor = color
        ctx.fill()
      }

      // connections
      ctx.shadowBlur = 0
      ctx.lineWidth = 0.5
      ctx.strokeStyle = primaryColor

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.globalAlpha = 0.15 * (1 - d / 120)
            ctx.stroke()
          }
        }
      }

      // Reset globalAlpha for canvas context safety
      ctx.globalAlpha = 1.0

      raf = requestAnimationFrame(tick)
    }
    tick()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])
  return (
    <div className="pointer-events-none absolute inset-0">
      <canvas ref={ref} className="absolute inset-0" />
    </div>
  )
}
