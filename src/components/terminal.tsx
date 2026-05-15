'use client'

import { useEffect, useState } from 'react'

const lines = ['$ npm run build', '✓ compiled successfully', '$ deploy --production', '✓ shipped to the world']

export function Terminal() {
  const [text, setText] = useState('')
  const [li, setLi] = useState(0)

  useEffect(() => {
    let i = 0
    const cur = lines[li]
    setText('')
    const id = setInterval(() => {
      i++
      setText(cur.slice(0, i))
      if (i >= cur.length) {
        clearInterval(id)
        setTimeout(() => setLi((v) => (v + 1) % lines.length), 1400)
      }
    }, 45)
    return () => clearInterval(id)
  }, [li])

  return (
    <div className="border-border bg-background/70 shadow-glow rounded-xl border p-4 font-mono text-xs backdrop-blur-md">
      <div className="mb-3 flex items-center gap-1.5">
        <span className="bg-destructive/60 h-2.5 w-2.5 rounded-full" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
        <span className="text-muted-foreground ml-2 text-[10px] font-medium opacity-70">octalectzz@dev — zsh</span>
      </div>
      <div className="space-y-1">
        {lines.slice(0, li).map((l, i) => (
          <div key={i} className="text-muted-foreground whitespace-pre">
            {l}
          </div>
        ))}
        <div className="text-primary flex items-center gap-0.5 whitespace-pre">
          {text}
          <span className="bg-primary h-3 w-1.5 animate-pulse" />
        </div>
      </div>
    </div>
  )
}
