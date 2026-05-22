'use client'

import { AuroraText } from '@/components/ui/aurora-text'

interface PrimaryTextProps {
  text: string
  className?: string
}

export function PrimaryText({ text, className }: PrimaryTextProps) {
  return (
    <AuroraText colors={['var(--primary)', 'var(--primary)', 'var(--secondary)', 'var(--primary)']} speed={1.5} className={className}>
      {text}
    </AuroraText>
  )
}
