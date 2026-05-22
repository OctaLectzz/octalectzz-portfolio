'use client'

import { PrimaryButton } from '@/components/common/primary-button'
import { Languages } from 'lucide-react'
import { useLocale } from 'next-intl'
import { useEffect, useState } from 'react'

export function LanguageToggle() {
  const locale = useLocale()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleLanguage = () => {
    const nextLocale = locale === 'en' ? 'id' : 'en'
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000`
    window.location.reload()
  }

  if (!mounted) {
    return (
      <PrimaryButton
        variant="outline"
        size="sm"
        aria-label="Switch language"
        className="hidden h-9 items-center gap-1.5 rounded-lg px-2.5 sm:inline-flex"
      >
        <Languages className="h-3.5 w-3.5" />
        <span className="w-4" />
      </PrimaryButton>
    )
  }

  return (
    <PrimaryButton
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      aria-label="Switch language"
      className="hidden h-9 items-center gap-1.5 rounded-lg px-2.5 sm:inline-flex"
    >
      <Languages className="h-3.5 w-3.5" />
      <span className="text-xs font-semibold tracking-wider uppercase">{locale}</span>
    </PrimaryButton>
  )
}
