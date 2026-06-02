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
        className="flex h-9 w-9 items-center justify-center gap-1.5 rounded-lg p-0 sm:w-auto sm:px-2.5"
      >
        <Languages className="h-4 w-4 sm:h-3.5 sm:w-3.5" />
        <span className="hidden w-4 sm:inline" />
      </PrimaryButton>
    )
  }

  return (
    <PrimaryButton
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      aria-label="Switch language"
      className="flex h-9 w-9 items-center justify-center gap-1.5 rounded-lg p-0 sm:w-auto sm:px-2.5"
    >
      <Languages className="h-4 w-4 sm:h-3.5 sm:w-3.5" />
      <span className="hidden text-xs font-semibold tracking-wider uppercase sm:inline">{locale}</span>
    </PrimaryButton>
  )
}
