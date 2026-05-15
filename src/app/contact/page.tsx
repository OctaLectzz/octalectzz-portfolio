'use client'

import { BeamsBackground, GridBackground, MeshBackground } from '@/components/backgrounds'
import { Reveal } from '@/components/reveal'
import { Container, Section } from '@/components/section'
import { SocialLinks } from '@/components/social-links'
import { Input } from '@/components/ui/input'
import { MagneticButton } from '@/components/ui/magnetic-button'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'
import { Clock, Mail, MapPin, Send } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useState, type FormEvent } from 'react'
import { toast } from 'sonner'

export default function ContactPage() {
  const t = useTranslations()
  const [loading, setLoading] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      toast.success(t('contact.sent'))
      ;(e.target as HTMLFormElement).reset()
    }, 900)
  }

  return (
    <>
      <Section className="pt-10 pb-16 md:pt-16">
        <MeshBackground />
        <GridBackground />
        <Container>
          <Reveal>
            <span className="border-border bg-surface/50 text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-[0.18em] uppercase">
              <Mail className="text-primary h-3 w-3" /> Contact
            </span>
            <h1 className="font-display mt-4 text-5xl font-bold tracking-tight md:text-7xl">
              <span className="text-foreground">Let's build </span>
              <span className="text-gradient-aurora">something great</span>
            </h1>
            <p className="text-muted-foreground mt-5 max-w-2xl text-lg">{t('contact.heroSubtitle')}</p>
          </Reveal>
        </Container>
      </Section>

      <Section className="pt-0 pb-32">
        <BeamsBackground />
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <motion.form
              onSubmit={onSubmit}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border-border bg-card rounded-3xl border p-8 md:p-10"
            >
              <div className="grid gap-5">
                <div>
                  <label className="text-muted-foreground mb-1.5 block text-xs font-semibold tracking-widest uppercase">{t('contact.name')}</label>
                  <Input required name="name" className="bg-surface/40 h-12 rounded-xl" />
                </div>
                <div>
                  <label className="text-muted-foreground mb-1.5 block text-xs font-semibold tracking-widest uppercase">{t('contact.email')}</label>
                  <Input required type="email" name="email" className="bg-surface/40 h-12 rounded-xl" />
                </div>
                <div>
                  <label className="text-muted-foreground mb-1.5 block text-xs font-semibold tracking-widest uppercase">{t('contact.message')}</label>
                  <Textarea required name="message" rows={6} className="bg-surface/40 rounded-xl" />
                </div>
                <MagneticButton variant="primary" disabled={loading}>
                  {loading ? 'Sending…' : t('contact.send')} <Send className="h-4 w-4" />
                </MagneticButton>
              </div>
            </motion.form>

            <div className="space-y-6">
              <div className="border-border bg-card rounded-3xl border p-8">
                <p className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">{t('contact.or')}</p>
                <div className="mt-5 space-y-4">
                  <a href="mailto:hello@octalectzz.dev" className="group flex items-center gap-3">
                    <span className="bg-gradient-primary text-primary-foreground grid h-10 w-10 place-items-center rounded-xl">
                      <Mail className="h-4 w-4" />
                    </span>
                    <span>
                      <p className="text-muted-foreground text-xs">Email</p>
                      <p className="group-hover:text-primary font-semibold">hello@octalectzz.dev</p>
                    </span>
                  </a>
                  <div className="flex items-center gap-3">
                    <span className="bg-surface text-foreground grid h-10 w-10 place-items-center rounded-xl">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <span>
                      <p className="text-muted-foreground text-xs">Location</p>
                      <p className="font-semibold">Indonesia · Remote-friendly</p>
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-surface text-foreground grid h-10 w-10 place-items-center rounded-xl">
                      <Clock className="h-4 w-4" />
                    </span>
                    <span>
                      <p className="text-muted-foreground text-xs">Response time</p>
                      <p className="font-semibold">Within 24 hours</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-border bg-card rounded-3xl border p-8">
                <p className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">Socials</p>
                <div className="mt-4">
                  <SocialLinks size="md" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
