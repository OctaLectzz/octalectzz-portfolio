'use client'

import { CyberParticlesBackground } from '@/components/backgrounds'
import { PageHeroSection } from '@/components/common/page-hero-section'
import { PrimaryButton } from '@/components/common/primary-button'
import { Container, Section } from '@/components/common/section'
import { SocialLinks } from '@/components/social-links'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { contactInfo } from '@/data'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle2, Clock, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { useState, type FormEvent } from 'react'

export default function ContactPage() {
  const t = useTranslations()
  const locale = useLocale()
  const [loading, setLoading] = useState(false)

  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogState, setDialogState] = useState<'success' | 'error'>('success')

  const breadcrumbs = [{ label: t('nav.home'), href: '/' }, { label: t('nav.contact') }]

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      whatsapp: formData.get('whatsapp'),
      message: formData.get('message')
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (!res.ok) throw new Error('Failed to send')

      setDialogState('success')
      setDialogOpen(true)
      ;(e.target as HTMLFormElement).reset()
    } catch (error) {
      setDialogState('error')
      setDialogOpen(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <PageHeroSection
        title={t('contact.heroTitle')}
        highlight={t('contact.heroTitle').split(' ').slice(1).join(' ')}
        subtitle={t('contact.heroSubtitle')}
        breadcrumbs={breadcrumbs}
        eyebrow="Contact"
        eyebrowIcon={Mail}
      />

      <Section className="relative overflow-hidden pt-0 pb-32">
        <CyberParticlesBackground />

        <Container className="relative z-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <motion.form
              onSubmit={onSubmit}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border-border/50 bg-surface/30 shadow-primary/5 relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border p-8 shadow-2xl backdrop-blur-xl md:p-10"
            >
              {/* Glass reflection effect */}
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
              <div className="bg-primary/10 absolute -top-40 -right-40 h-80 w-80 rounded-full blur-[100px]" />

              <div className="relative flex flex-1 flex-col gap-6">
                <div>
                  <label className="text-muted-foreground mb-1.5 block text-xs font-semibold tracking-widest uppercase">
                    {t('contact.name')} <span className="text-primary">*</span>
                  </label>
                  <Input
                    required
                    name="name"
                    className="border-border/60 bg-background/50 focus:border-primary/50 focus:ring-primary/20 h-12 rounded-xl backdrop-blur-sm transition-all"
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="text-muted-foreground mb-1.5 block text-xs font-semibold tracking-widest uppercase">
                      {t('contact.email')} <span className="text-primary">*</span>
                    </label>
                    <Input
                      required
                      type="email"
                      name="email"
                      className="border-border/60 bg-background/50 focus:border-primary/50 focus:ring-primary/20 h-12 rounded-xl backdrop-blur-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-muted-foreground mb-1.5 block text-xs font-semibold tracking-widest uppercase">
                      {t('contact.whatsapp')} <span className="opacity-60">{t('contact.optional')}</span>
                    </label>
                    <Input
                      type="tel"
                      name="whatsapp"
                      className="border-border/60 bg-background/50 focus:border-primary/50 focus:ring-primary/20 h-12 rounded-xl backdrop-blur-sm transition-all"
                    />
                  </div>
                </div>

                <div className="flex min-h-[150px] flex-1 flex-col">
                  <label className="text-muted-foreground mb-1.5 block text-xs font-semibold tracking-widest uppercase">
                    {t('contact.message')} <span className="text-primary">*</span>
                  </label>
                  <Textarea
                    required
                    name="message"
                    className="border-border/60 bg-background/50 focus:border-primary/50 focus:ring-primary/20 min-h-[120px] flex-1 resize-y rounded-xl backdrop-blur-sm transition-all"
                  />
                </div>

                <PrimaryButton variant="primary" disabled={loading} className="mt-2 w-full shadow-[0_0_20px_rgba(var(--primary-glow),0.3)]">
                  {loading ? t('contact.sending') : t('contact.send')} <Send className="ml-2 h-4 w-4" />
                </PrimaryButton>
              </div>
            </motion.form>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="border-border/50 bg-surface/30 shadow-primary/5 relative overflow-hidden rounded-3xl border p-8 shadow-xl backdrop-blur-xl"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
                <p className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">{t('contact.or')}</p>
                <div className="mt-6 space-y-5">
                  <a href={`mailto:${contactInfo.email}`} className="group flex items-center gap-4">
                    <span className="bg-gradient-primary text-primary-foreground grid h-12 w-12 shrink-0 place-items-center rounded-2xl shadow-lg transition-transform group-hover:scale-110">
                      <Mail className="h-5 w-5" />
                    </span>
                    <span>
                      <p className="text-muted-foreground text-xs tracking-wider uppercase">Email</p>
                      <p className="group-hover:text-primary text-base font-semibold transition-colors">{contactInfo.email}</p>
                    </span>
                  </a>

                  <a href={contactInfo.whatsapp.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
                    <span className="bg-gradient-primary text-primary-foreground grid h-12 w-12 shrink-0 place-items-center rounded-2xl shadow-lg transition-transform group-hover:scale-110">
                      <Phone className="h-5 w-5" />
                    </span>
                    <span>
                      <p className="text-muted-foreground text-xs tracking-wider uppercase">WhatsApp</p>
                      <p className="group-hover:text-primary text-base font-semibold transition-colors">{contactInfo.whatsapp.display}</p>
                    </span>
                  </a>

                  <div className="flex items-center gap-4">
                    <span className="border-border/60 bg-background/50 text-foreground grid h-12 w-12 shrink-0 place-items-center rounded-2xl border">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <span>
                      <p className="text-muted-foreground text-xs tracking-wider uppercase">Location</p>
                      <p className="text-base font-semibold">{contactInfo.locationFull[locale as 'en' | 'id'] || contactInfo.locationFull.en}</p>
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="border-border/60 bg-background/50 text-foreground grid h-12 w-12 shrink-0 place-items-center rounded-2xl border">
                      <Clock className="h-5 w-5" />
                    </span>
                    <span>
                      <p className="text-muted-foreground text-xs tracking-wider uppercase">Response time</p>
                      <p className="text-base font-semibold">{contactInfo.responseTime[locale as 'en' | 'id'] || contactInfo.responseTime.en}</p>
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="border-border/50 bg-surface/30 shadow-primary/5 relative rounded-3xl border p-8 shadow-xl backdrop-blur-xl"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
                <p className="text-muted-foreground mb-5 text-xs font-semibold tracking-widest uppercase">Socials</p>
                <SocialLinks size="lg" className="gap-4" />
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="border-border/50 bg-background/80 backdrop-blur-xl sm:max-w-md">
          <DialogHeader className="flex flex-col items-center text-center">
            <div
              className={cn(
                'mb-4 flex h-16 w-16 items-center justify-center rounded-full',
                dialogState === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
              )}
            >
              {dialogState === 'success' ? <CheckCircle2 className="h-8 w-8" /> : <AlertCircle className="h-8 w-8" />}
            </div>
            <DialogTitle className="text-2xl font-bold">
              {dialogState === 'success' ? t('contact.dialogSuccessTitle') : t('contact.dialogErrorTitle')}
            </DialogTitle>
            <DialogDescription className="mt-2 text-base">
              {dialogState === 'success' ? t('contact.dialogSuccessDesc') : t('contact.dialogErrorDesc', { email: contactInfo.email })}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6 flex justify-center">
            <PrimaryButton variant={dialogState === 'success' ? 'primary' : 'outline'} onClick={() => setDialogOpen(false)}>
              Close
            </PrimaryButton>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
