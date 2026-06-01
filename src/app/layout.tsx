import { SmoothScroll } from '@/components/smooth-scroll'
import { Footer } from '@/layout/footer'
import { Navbar } from '@/layout/navbar'
import { PerformanceProvider } from '@/providers/performance-provider'
import { ThemeProvider } from '@/providers/theme-provider'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import { JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  variable: '--font-sans',
  subsets: ['latin']
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'OctaLectzz - Fullstack Developer Portfolio',
  description: 'Portfolio of Octavyan Putra Ramadhan - fullstack developer building modern, motion-rich web experiences.'
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale} className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <NextIntlClientProvider messages={messages}>
          <PerformanceProvider>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
              <SmoothScroll>
                <Navbar />

                <main>{children}</main>

                <Footer />
              </SmoothScroll>
            </ThemeProvider>
          </PerformanceProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
