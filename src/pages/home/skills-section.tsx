'use client'

import { SpotlightBackground } from '@/components/backgrounds'
import { Marquee } from '@/components/common/marquee'
import { skillGroups } from '@/data'

export function SkillsSection() {
  const allSkills = Array.from(new Map(skillGroups.flatMap((g) => g.skills).map((s) => [s.name, s])).values())

  return (
    <section className="border-border bg-surface/30 relative -mt-6 overflow-hidden border-y py-8">
      <SpotlightBackground color="secondary" />

      <Marquee speed={36}>
        {allSkills.map((skill) => {
          const Icon = skill.icon
          return (
            <div key={skill.name} className="text-muted-foreground flex items-center gap-2.5">
              <Icon className="h-6 w-6" style={{ color: skill.color }} />
              <span className="font-display text-lg font-semibold tracking-tight">{skill.name}</span>
              <span className="text-primary">✦</span>
            </div>
          )
        })}
      </Marquee>
    </section>
  )
}
