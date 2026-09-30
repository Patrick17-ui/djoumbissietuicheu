'use client'

import { useEffect, useRef } from 'react'
import { animate, useInView } from 'motion/react'
import { Building2, CircleCheck, CodeXml, Layers } from 'lucide-react'
import { Reveal } from './reveal'

const stats = [
  { value: 4, label: 'Années d’expérience', icon: CodeXml, tone: 'text-primary bg-primary/10' },
  { value: 10, label: 'Projets réalisés', icon: CircleCheck, tone: 'text-accent bg-accent/10' },
  { value: 3, label: 'Entreprises', icon: Building2, tone: 'text-primary bg-primary/10' },
  { value: 15, label: 'Technologies', icon: Layers, tone: 'text-accent bg-accent/10' },
]

const tech = ['Angular', 'React', 'TypeScript', 'Next.js', 'C#', 'ASP.NET', 'Laravel', 'PHP', 'Python', 'MySQL', 'PostgreSQL', 'Ionic', 'Electron', 'Tailwind CSS', 'Bootstrap', 'Git']

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView || !ref.current) return
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = String(Math.round(v))
      },
    })
    return () => controls.stop()
  }, [inView, to])
  return <span ref={ref}>0</span>
}

export function Stats() {
  return (
    <section aria-label="Chiffres clés" className="border-t border-border/70 px-4 pt-8">
      <Reveal className="mx-auto grid max-w-6xl grid-cols-2 overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-black/5 md:grid-cols-4">
        {stats.map(({ value, label, icon: Icon, tone }, index) => (
          <div
            key={label}
            className={`group flex items-center gap-4 border-border bg-card p-6 transition-colors hover:bg-secondary md:p-8 ${
              index % 2 === 0 ? 'border-r' : ''
            } ${index < 2 ? 'border-b md:border-b-0' : ''} ${index < 3 ? 'md:border-r' : ''}`}
          >
            <span className={`grid size-12 shrink-0 place-items-center rounded-2xl transition-transform group-hover:rotate-6 group-hover:scale-110 ${tone}`}>
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-heading text-3xl font-bold md:text-4xl">
                <Counter to={value} />+
              </p>
              <p className="text-sm text-muted-foreground">{label}</p>
            </div>
          </div>
        ))}
      </Reveal>

      <div className="relative mx-auto mt-16 max-w-6xl overflow-hidden border-y border-border/60 py-4">
        <div className="flex w-max animate-marquee gap-12 hover:[animation-play-state:paused]">
          {[...tech, ...tech].map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="font-heading text-2xl font-semibold text-muted-foreground/40 transition-colors hover:text-primary"
              aria-hidden={i >= tech.length}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
