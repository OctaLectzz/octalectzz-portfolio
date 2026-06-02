/**
 * Helper function to retrieve the value corresponding to the current locale
 * from a localized object structure (containing both English and Indonesian versions).
 */
export function getLocalizedValue<ValueType>(localizedObject: { en: ValueType; id: ValueType } | undefined, locale: string): ValueType | undefined {
  if (!localizedObject) {
    return undefined
  }
  return locale === 'id' ? localizedObject.id : localizedObject.en
}
