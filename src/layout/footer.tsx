import { Logo } from '@/components/logo'
import { SocialLinks } from '@/components/social-links'
import { Heart } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export function Footer() {
  const t = useTranslations()

  return (
    <footer className="border-border bg-background relative isolate overflow-hidden border-t">
      <div aria-hidden className="via-primary/60 absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent to-transparent" />
      <div aria-hidden className="bg-primary/15 absolute -top-40 left-1/2 h-80 w-160 -translate-x-1/2 rounded-full blur-[120px]" />

      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 md:grid-cols-3 md:px-8">
        <div className="space-y-4">
          <Logo />
          <p className="text-muted-foreground max-w-xs text-sm">{t('footer.tagline')}</p>
          <SocialLinks size="sm" />
        </div>

        <div className="grid grid-cols-2 gap-6 md:col-span-2 md:grid-cols-3">
          <div>
            <p className="text-muted-foreground mb-3 text-xs font-semibold tracking-widest uppercase">Navigate</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-foreground hover:text-primary">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-foreground hover:text-primary">
                  {t('nav.experience')}
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-foreground hover:text-primary">
                  {t('nav.skills')}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-foreground hover:text-primary">
                  {t('nav.projects')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground hover:text-primary">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-muted-foreground mb-3 text-xs font-semibold tracking-widest uppercase">Contact</p>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <a href="mailto:hello@octalectzz.dev" className="hover:text-foreground">
                  hello@octalectzz.dev
                </a>
              </li>
              <li>Indonesia · Remote</li>
            </ul>
          </div>
          <div>
            <p className="text-muted-foreground mb-3 text-xs font-semibold tracking-widest uppercase">Stack</p>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>React · TypeScript</li>
              <li>Next.js · TanStack</li>
              <li>Node · Postgres</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-border border-t">
        <div className="text-muted-foreground mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs md:flex-row md:px-8">
          <p>
            © {new Date().getFullYear()} OctaLectzz · Octavyan Putra Ramadhan · {t('footer.rights')}
          </p>
          <p className="inline-flex items-center gap-1.5">
            {t('footer.madeWith')} <Heart className="text-secondary h-3.5 w-3.5" /> in Indonesia
          </p>
        </div>
      </div>
    </footer>
  )
}
