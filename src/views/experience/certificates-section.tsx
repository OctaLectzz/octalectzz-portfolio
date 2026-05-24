import { MeshBackground } from '@/components/backgrounds/backgrounds'
import { StaggerContainer, StaggerItem } from '@/components/common/reveal'
import { Container, Section, SectionHeader } from '@/components/common/section'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { certificates } from '@/data'
import { Award } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

export function CertificatesSection() {
  const t = useTranslations('experience.certificates')
  const [preview, setPreview] = useState<{ title: string; image: string } | null>(null)

  return (
    <Section className="pb-32">
      <MeshBackground />

      <Container>
        <SectionHeader eyebrow="Awards" icon={Award} title={t('title')} />

        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <StaggerItem key={certificate.title}>
              <button
                onClick={() => setPreview({ title: certificate.title, image: certificate.image })}
                className="group border-border bg-card hover:border-primary/60 hover:shadow-glow block w-full overflow-hidden rounded-2xl border text-left transition-all hover:-translate-y-1"
                aria-label={`${t('view')} – ${certificate.title}`}
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div aria-hidden className="from-background/90 absolute inset-0 bg-linear-to-t via-transparent to-transparent" />
                  <div className="absolute right-3 bottom-3 left-3">
                    <p className="text-primary text-xs font-medium">
                      {certificate.issuer} · {certificate.year}
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-display text-base font-semibold">{certificate.title}</h3>
                  <p className="text-muted-foreground mt-0.5 text-xs">{t('view')} →</p>
                </div>
              </button>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>

      <Dialog open={!!preview} onOpenChange={(isOpen) => !isOpen && setPreview(null)}>
        <DialogContent className="border-border bg-card max-w-3xl p-2">
          <DialogTitle className="sr-only">{preview?.title ?? 'Certificate'}</DialogTitle>
          {preview && (
            <div className="overflow-hidden rounded-xl">
              <img src={preview.image} alt={preview.title} className="h-auto w-full" />
              <p className="font-display px-2 py-3 text-center text-sm font-semibold">{preview.title}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  )
}
