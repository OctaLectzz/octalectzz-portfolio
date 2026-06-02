'use client'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { usePerformance } from '@/providers/performance-provider'
import { AnimatePresence, motion } from 'framer-motion'
import { Languages, Moon, Settings2, Sun, Zap, ZapOff } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import { useEffect, useRef, useState } from 'react'

export function SettingsDropdown() {
  const translations = useTranslations('common.settings')
  const locale = useLocale()
  const { theme, setTheme, resolvedTheme } = useTheme()
  const { performanceMode, setPerformanceMode } = usePerformance()

  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Settings"
        className={cn(
          buttonVariants({ variant: 'outline', size: 'icon' }),
          'border-border bg-surface/40 text-muted-foreground/60 h-9 w-9 rounded-lg'
        )}
        disabled
      >
        <Settings2 className="h-4 w-4" />
      </button>
    )
  }

  const toggleLanguage = (targetLocale: 'en' | 'id') => {
    if (locale === targetLocale) return
    document.cookie = `NEXT_LOCALE=${targetLocale}; path=/; max-age=31536000`
    window.location.reload()
  }

  const activeTheme = theme === 'system' ? resolvedTheme : theme

  return (
    <div className="relative" ref={containerRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={translations('title')}
        className={cn(
          buttonVariants({ variant: 'outline', size: 'icon' }),
          'border-border bg-surface/40 text-foreground h-9 w-9 rounded-lg transition-all duration-300',
          'hover:border-primary hover:shadow-[0_0_15px_color-mix(in_oklab,var(--primary)_30%,transparent)]',
          'group relative cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-0.5'
        )}
      >
        <motion.span
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="flex items-center justify-center"
        >
          <Settings2 className="h-4 w-4" />
        </motion.span>
      </button>

      {/* Dropdown Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className={cn(
              'border-border/60 absolute right-0 z-50 mt-2.5 w-64 rounded-2xl border p-4 shadow-2xl backdrop-blur-xl',
              'bg-surface/90 text-foreground'
            )}
          >
            {/* Header */}
            <div className="border-border/40 mb-4 flex items-center justify-between border-b pb-2">
              <h3 className="font-display text-foreground flex items-center gap-1.5 text-sm font-bold tracking-tight">
                <Settings2 className="text-primary h-3.5 w-3.5" />
                {translations('title')}
              </h3>
            </div>

            <div className="flex flex-col gap-4">
              {/* Theme Settings */}
              <div className="flex flex-col gap-2">
                <span className="text-muted-foreground flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase">
                  <Sun className="h-3 w-3" />
                  {translations('theme')}
                </span>
                <div className="grid grid-cols-2 gap-1 rounded-lg bg-black/25 p-1 ring-1 ring-white/5">
                  {/* Light Theme Button */}
                  <button
                    type="button"
                    onClick={() => setTheme('light')}
                    className={cn(
                      'relative flex items-center justify-center gap-1.5 rounded-md py-1.5 text-xs font-semibold transition-colors',
                      activeTheme === 'light' ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {activeTheme === 'light' && (
                      <motion.span
                        layoutId="active-theme"
                        className="bg-gradient-primary absolute inset-0 -z-10 rounded-md shadow-md"
                        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                      />
                    )}
                    <Sun className="h-3.5 w-3.5" />
                    {translations('light')}
                  </button>

                  {/* Dark Theme Button */}
                  <button
                    type="button"
                    onClick={() => setTheme('dark')}
                    className={cn(
                      'relative flex items-center justify-center gap-1.5 rounded-md py-1.5 text-xs font-semibold transition-colors',
                      activeTheme === 'dark' ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {activeTheme === 'dark' && (
                      <motion.span
                        layoutId="active-theme"
                        className="bg-gradient-primary absolute inset-0 -z-10 rounded-md shadow-md"
                        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                      />
                    )}
                    <Moon className="h-3.5 w-3.5" />
                    {translations('dark')}
                  </button>
                </div>
              </div>

              {/* Language Settings */}
              <div className="flex flex-col gap-2">
                <span className="text-muted-foreground flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase">
                  <Languages className="h-3 w-3" />
                  {translations('language')}
                </span>
                <div className="grid grid-cols-2 gap-1 rounded-lg bg-black/25 p-1 ring-1 ring-white/5">
                  {/* EN Button */}
                  <button
                    type="button"
                    onClick={() => toggleLanguage('en')}
                    className={cn(
                      'relative flex items-center justify-center rounded-md py-1.5 text-xs font-semibold transition-colors',
                      locale === 'en' ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {locale === 'en' && (
                      <motion.span
                        layoutId="active-lang"
                        className="bg-gradient-primary absolute inset-0 -z-10 rounded-md shadow-md"
                        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                      />
                    )}
                    English (EN)
                  </button>

                  {/* ID Button */}
                  <button
                    type="button"
                    onClick={() => toggleLanguage('id')}
                    className={cn(
                      'relative flex items-center justify-center rounded-md py-1.5 text-xs font-semibold transition-colors',
                      locale === 'id' ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {locale === 'id' && (
                      <motion.span
                        layoutId="active-lang"
                        className="bg-gradient-primary absolute inset-0 -z-10 rounded-md shadow-md"
                        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                      />
                    )}
                    Indonesia (ID)
                  </button>
                </div>
              </div>

              {/* Performance Mode Settings */}
              <div className="border-border/40 mt-1 flex items-center justify-between border-t pt-4">
                <div className="flex max-w-[70%] flex-col gap-0.5">
                  <span className="text-muted-foreground flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase">
                    {performanceMode ? <ZapOff className="text-secondary h-3 w-3" /> : <Zap className="text-primary h-3 w-3" />}
                    {translations('performance')}
                  </span>
                  <p className="text-muted-foreground/80 text-[10px] leading-tight">{translations('performanceDesc')}</p>
                </div>

                {/* iOS-Style Toggle Switch */}
                <button
                  type="button"
                  onClick={() => setPerformanceMode(!performanceMode)}
                  className={cn(
                    'relative h-6 w-11 rounded-full p-0.5 transition-colors duration-300 focus:outline-hidden',
                    performanceMode ? 'bg-secondary' : 'bg-primary'
                  )}
                >
                  <motion.div
                    layout
                    className="h-5 w-5 rounded-full bg-white shadow-md"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    animate={{ x: performanceMode ? 20 : 0 }}
                  />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
