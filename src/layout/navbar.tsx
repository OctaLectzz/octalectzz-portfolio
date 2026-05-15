'use client'

import { Logo } from '@/components/common/logo'
import { PrimaryButton } from '@/components/common/primary-button'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { Languages, Menu, Moon, Sun, X } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const links = [
  { href: '/', key: 'nav.home' },
  { href: '/experience', key: 'nav.experience' },
  { href: '/skills', key: 'nav.skills' },
  { href: '/projects', key: 'nav.projects' },
  { href: '/contact', key: 'nav.contact' }
] as const

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const t = useTranslations()
  const locale = useLocale()
  const pathname = usePathname()

  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const toggleLanguage = () => {
    const nextLocale = locale === 'en' ? 'id' : 'en'
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000`
    window.location.reload()
  }

  if (!mounted) return null

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn('fixed inset-x-0 top-0 z-50 transition-all duration-300', scrolled ? 'py-2' : 'py-4')}
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div
          className={cn(
            'border-border/50 flex items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-300',
            scrolled ? 'glass shadow-glow' : 'border-transparent bg-transparent'
          )}
        >
          <Logo />

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => {
              const isActive = pathname === l.href
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    'group relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors',
                    isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  <span className="relative z-10">{t(l.key)}</span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="bg-surface border-border absolute inset-0 rounded-lg border"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              aria-label="Switch language"
              className="border-border bg-surface/40 text-muted-foreground hover:text-foreground hidden h-9 items-center gap-1.5 rounded-lg border px-2.5 text-xs font-semibold tracking-wider uppercase transition-colors sm:inline-flex"
            >
              <Languages className="h-3.5 w-3.5" />
              {locale}
            </button>

            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
              className="border-border bg-surface/40 text-muted-foreground hover:text-foreground grid h-9 w-9 place-items-center rounded-lg border transition-colors"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <PrimaryButton asChildHref="/contact" variant="primary" size="default" className="hidden md:inline-flex">
              {t('nav.cta')}
            </PrimaryButton>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="border-border bg-surface/40 text-foreground grid h-9 w-9 place-items-center rounded-lg border md:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="border-border glass mt-2 grid gap-1 rounded-2xl border p-3 md:hidden"
            >
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    'rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                    pathname === l.href ? 'bg-surface text-foreground' : 'text-muted-foreground hover:bg-surface hover:text-foreground'
                  )}
                >
                  {t(l.key)}
                </Link>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
