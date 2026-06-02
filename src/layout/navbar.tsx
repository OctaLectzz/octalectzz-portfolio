'use client'

import { Logo } from '@/components/common/logo'
import { PrimaryButton } from '@/components/common/primary-button'
import { LanguageToggle } from '@/components/language-toggle'
import { PerformanceToggle } from '@/components/performance-toggle'
import { SettingsDropdown } from '@/components/settings-dropdown'
import { ThemeToggle } from '@/components/theme-toggle'
import { Menu, MenuItem } from '@/components/ui/navbar-menu'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu as MenuIcon, X } from 'lucide-react'
import { useTranslations } from 'next-intl'
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
  const translations = useTranslations()
  const pathname = usePathname()

  const [active, setActive] = useState<string | null>(null)
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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

  if (!mounted) return null

  return (
    <motion.div
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn('fixed inset-x-0 top-0 z-999 px-4 transition-all duration-300 md:px-6', scrolled ? 'py-2' : 'py-4')}
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Aceternity Menu - the main navbar */}
        <Menu setActive={setActive} scrolled={scrolled}>
          {/* Logo */}
          <Logo />

          {/* Desktop nav links */}
          <div className="hidden items-center gap-1 lg:flex">
            {links.map((navLink) => {
              const label = translations(navLink.key)
              const isActive = pathname === navLink.href
              return (
                <Link key={navLink.href} href={navLink.href} className="relative rounded-full px-3.5 py-2">
                  <MenuItem setActive={setActive} active={active} item={label} className={cn(isActive && 'text-foreground')} />
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="border-primary/30 from-primary/20 to-secondary/20 absolute inset-0 -z-10 rounded-full border bg-linear-to-r shadow-[0_0_15px_color-mix(in_oklab,var(--primary)_30%,transparent)]"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Right-side actions */}
          <div className="flex items-center gap-2">
            {/* Desktop / Tablet settings toggles - hidden on xs screens */}
            <div className="xs:flex hidden items-center gap-2">
              <PerformanceToggle />
              <LanguageToggle />
              <ThemeToggle />
            </div>

            {/* Mobile settings dropdown - visible only on xs screens */}
            <div className="xs:hidden flex">
              <SettingsDropdown />
            </div>

            {/* CTA */}
            <PrimaryButton asChildHref="/contact" variant="primary" size="default" className="hidden md:inline-flex">
              {translations('nav.cta')}
            </PrimaryButton>

            {/* Mobile menu toggle */}
            <PrimaryButton
              variant="outline"
              size="icon"
              onClick={() => setOpen((prevOpenState) => !prevOpenState)}
              aria-label="Toggle menu"
              className="h-9 w-9 rounded-lg lg:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? 'close' : 'open'}
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 90 }}
                  transition={{ duration: 0.15 }}
                >
                  {open ? <X className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
                </motion.span>
              </AnimatePresence>
            </PrimaryButton>
          </div>
        </Menu>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, height: 0, y: -8 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="border-border/40 mt-2 grid gap-1 overflow-hidden rounded-2xl border p-3 shadow-lg backdrop-blur-lg lg:hidden"
            >
              {links.map((navLink, index) => (
                <motion.div
                  key={navLink.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                >
                  <Link
                    href={navLink.href}
                    className={cn(
                      'block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                      pathname === navLink.href ? 'bg-surface text-foreground' : 'text-muted-foreground hover:bg-surface hover:text-foreground'
                    )}
                  >
                    {translations(navLink.key)}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
