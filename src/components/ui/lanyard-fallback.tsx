'use client'

import profile from '@/assets/profile.jpg'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function LanyardFallback() {
  const t = useTranslations('home.hero')

  return (
    <div className="flex w-full items-center justify-center py-4 select-none">
      <div className="glass border-primary/20 shadow-glow hover:border-primary/40 relative flex h-[380px] w-[260px] flex-col items-center rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:rotate-1">
        {/* Lanyard clip placeholder at the top */}
        <div className="bg-border/85 absolute -top-3 left-1/2 h-6 w-10 -translate-x-1/2 rounded-md shadow-inner">
          <div className="bg-background mx-auto mt-1.5 h-2 w-4 rounded-full" />
        </div>

        {/* Branding */}
        <div className="mt-2 text-center">
          <p className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase">OCTALECTZZ</p>
          <div className="bg-primary/20 mx-auto mt-1.5 h-0.5 w-8 rounded-full" />
        </div>

        {/* Avatar */}
        <div className="border-border shadow-violet relative mt-6 h-28 w-28 overflow-hidden rounded-full border-2">
          <Image src={profile} alt="Octavyan Putra Ramadhan" className="h-full w-full object-cover" width={112} height={112} priority />
          <div className="from-primary/10 to-secondary/20 absolute inset-0 bg-linear-to-tr via-transparent mix-blend-overlay" />
        </div>

        {/* Info */}
        <div className="mt-5 text-center">
          <h3 className="font-display text-foreground text-base font-bold tracking-tight">Octavyan Putra R.</h3>
          <p className="text-muted-foreground mt-1 text-xs font-medium">{t('role')}</p>
        </div>

        {/* Barcode / Footer */}
        <div className="mt-auto flex w-full flex-col items-center gap-2">
          <div
            className="h-7 w-full opacity-60"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, var(--color-foreground) 0px, var(--color-foreground) 2px, transparent 2px, transparent 6px, var(--color-foreground) 6px, var(--color-foreground) 7px, transparent 7px, transparent 9px)',
              backgroundSize: '100% 100%'
            }}
          />
          <div className="text-muted-foreground flex w-full justify-between font-mono text-[8px] opacity-60">
            <span>DEPT: DEV</span>
            <span>ID: 010626</span>
          </div>
        </div>
      </div>
    </div>
  )
}
