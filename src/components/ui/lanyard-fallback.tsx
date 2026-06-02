'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'

export function LanyardFallback() {
  const t = useTranslations('home.hero')
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className="flex w-full items-center justify-center py-4 select-none">
      {/* Lanyard strap */}
      <div className="flex flex-col items-center">
        {/* Strap line */}
        <div className="bg-primary/40 h-8 w-1 rounded-full" />

        {/* Card with flip animation */}
        <div className="group cursor-pointer" style={{ perspective: '1000px' }} onClick={() => setIsFlipped(!isFlipped)}>
          <div
            className="relative h-[380px] w-[260px] transition-transform duration-700 ease-out"
            style={{
              transformStyle: 'preserve-3d',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
            }}
          >
            {/* Front side */}
            <div className="absolute inset-0 overflow-hidden rounded-xl shadow-2xl" style={{ backfaceVisibility: 'hidden' }}>
              {/* Clip at the top */}
              <div className="absolute top-0 left-1/2 z-10 -translate-x-1/2">
                <div className="flex h-5 w-10 items-center justify-center rounded-b-md bg-zinc-700/90 shadow-md">
                  <div className="h-2 w-5 rounded-full bg-zinc-500/60" />
                </div>
              </div>
              <Image
                src="/assets/lanyard/front.png"
                alt="Octavyan Putra Ramadhan - Front"
                width={520}
                height={760}
                className="h-full w-full object-cover"
                priority
              />
              {/* Subtle shine overlay */}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            {/* Back side */}
            <div
              className="absolute inset-0 overflow-hidden rounded-xl shadow-2xl"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)'
              }}
            >
              {/* Clip at the top */}
              <div className="absolute top-0 left-1/2 z-10 -translate-x-1/2">
                <div className="flex h-5 w-10 items-center justify-center rounded-b-md bg-zinc-700/90 shadow-md">
                  <div className="h-2 w-5 rounded-full bg-zinc-500/60" />
                </div>
              </div>
              <Image
                src="/assets/lanyard/back.png"
                alt="Octavyan Putra Ramadhan - Back"
                width={520}
                height={760}
                className="h-full w-full object-cover"
                priority
              />
              {/* Subtle shine overlay */}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </div>
        </div>

        {/* Tap to flip hint */}
        <p className="text-muted-foreground mt-3 animate-pulse text-xs font-medium">
          {isFlipped ? '← ' : ''}Tap to flip{isFlipped ? '' : ' →'}
        </p>
      </div>
    </div>
  )
}
