import { CyberGridBackground, GlowLinesBackground } from '@/components/backgrounds'
import { StaggerContainer, StaggerItem } from '@/components/common/reveal'
import { Container, Section, SectionHeader } from '@/components/common/section'
import { ShineCard } from '@/components/common/shine-card'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { certificates } from '@/data'
import { Award, ExternalLink } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

export function CertificatesSection() {
  const t = useTranslations('experience.certificates')
  const [preview, setPreview] = useState<{ title: string; image: string } | null>(null)

  return (
    <Section className="relative overflow-hidden pb-32">
      <CyberGridBackground />
      <GlowLinesBackground />

      <Container className="relative z-10">
        <SectionHeader eyebrow="Awards" icon={Award} title={t('title')} />

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <StaggerItem key={certificate.title}>
              <ShineCard
                onClick={() => setPreview({ title: certificate.title, image: certificate.image })}
                className="group border-border bg-card/60 hover:border-primary/50 hover:shadow-glow block w-full cursor-pointer overflow-hidden rounded-2xl border p-2 text-left backdrop-blur-md transition-all duration-300 hover:-translate-y-2 sm:p-3"
                aria-label={`${t('view')} – ${certificate.title}`}
              >
                <div className="relative aspect-4/3 overflow-hidden rounded-xl">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    aria-hidden
                    className="from-background/95 via-background/20 absolute inset-0 bg-linear-to-t to-transparent transition-opacity duration-300 group-hover:opacity-80"
                  />

                  <div className="absolute right-4 bottom-4 left-4 flex items-end justify-between">
                    <div>
                      <p className="text-primary/90 text-xs font-semibold tracking-wider uppercase">{certificate.issuer}</p>
                      <p className="text-primary-foreground/80 mt-0.5 text-xs font-medium">{certificate.year}</p>
                    </div>
                    <div className="bg-primary/20 text-primary flex h-8 w-8 items-center justify-center rounded-full backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                      <ExternalLink className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                <div className="relative px-2 py-4 sm:px-3 sm:py-5">
                  <div className="via-primary/30 absolute -top-px right-5 left-5 h-px bg-linear-to-r from-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <h3 className="font-display group-hover:text-primary line-clamp-1 text-base font-semibold transition-colors duration-300">
                    {certificate.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground mt-1.5 flex items-center text-xs font-medium transition-colors">
                    {t('view')}
                    <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </p>
                </div>
              </ShineCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>

      <Dialog open={!!preview} onOpenChange={(isOpen) => !isOpen && setPreview(null)}>
        <DialogContent className="border-border/50 bg-card/90 w-[95vw] max-w-[95vw] p-1 backdrop-blur-xl sm:w-[90vw] sm:max-w-[90vw] sm:p-2 md:w-[85vw] md:max-w-[85vw] lg:w-[80vw] lg:max-w-[80vw] xl:w-[75vw] xl:max-w-[75vw]">
          <DialogTitle className="sr-only">{preview?.title ?? 'Certificate'}</DialogTitle>
          {preview && (
            <div className="group relative flex items-center justify-center overflow-hidden rounded-xl bg-black/10">
              <div className="from-background/90 absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <img
                src={preview.image}
                alt={preview.title}
                className="max-h-[85vh] w-auto max-w-full rounded-lg shadow-2xl transition-transform duration-500"
              />
              <div className="absolute right-0 bottom-0 left-0 z-20 translate-y-4 p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-display text-center text-xl font-bold tracking-tight text-white drop-shadow-lg sm:text-2xl lg:text-3xl">
                  {preview.title}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  )
}
