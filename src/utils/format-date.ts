/**
 * Formats a Date object or ISO date string into a localized string: "Month Year".
 * E.g., Date of 2024-03-01 -> "March 2024" (en) or "Maret 2024" (id)
 */
export function formatDate(date: Date | string | undefined, locale: string): string {
  if (!date) return ''
  const parsedDate = typeof date === 'string' ? new Date(date) : date
  if (isNaN(parsedDate.getTime())) return ''

  // Format to Month Year
  return new Intl.DateTimeFormat(locale === 'id' ? 'id-ID' : 'en-US', {
    month: 'long',
    year: 'numeric'
  }).format(parsedDate)
}
