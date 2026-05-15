import { SmoothScroll } from '@/components/smooth-scroll'
import { Footer } from '@/layout/footer'
import { Navbar } from '@/layout/navbar'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'OctaLectzz — Fullstack Developer Portfolio',
  description: 'Portfolio of Octavyan Putra Ramadhan — fullstack developer building modern, motion-rich web experiences.'
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale} className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <NextIntlClientProvider messages={messages}>
          <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            <SmoothScroll>
              <Navbar />

              <main className="pt-24">{children}</main>

              <Footer />
            </SmoothScroll>
          </NextThemesProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
