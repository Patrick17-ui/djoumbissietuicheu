'use client'

import { GraduationCap, Languages } from 'lucide-react'
import { Reveal, RevealItem, SectionHeading } from './reveal'

const degrees = [
  {
    title: 'Maîtrise en informatique',
    option: 'Option Intelligence Artificielle',
    school: 'Université de Dschang, Cameroun',
    period: '2022 — 2023',
  },
  {
    title: 'Licence en informatique',
    option: 'Développement logiciel et systèmes',
    school: 'Université de Dschang, Cameroun',
    period: '2018 — 2022',
  },
  {
    title: 'Baccalauréat',
    option: 'Technologie de l’information',
    school: 'Lycée Bilingue de Bafoussam',
    period: '2013 — 2017',
  },
]

const languages = [
  { name: 'Français', level: 'Courant', value: 95 },
  { name: 'Anglais', level: 'Débutant / Intermédiaire', value: 50 },
]

export function Education() {
  return (
    <section id="formation" className="scroll-mt-24 px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Formation" title="Diplômes & formations" />

        <ul className="grid gap-6 md:grid-cols-3">
          {degrees.map((d, i) => (
            <RevealItem key={d.title} delay={i * 0.08}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10">
                <span
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary to-accent transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-accent/10 text-accent transition-transform group-hover:-rotate-6 group-hover:scale-110">
                    <GraduationCap className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{d.period}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold">{d.title}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{d.option}</p>
                <p className="mt-4 text-sm text-muted-foreground">{d.school}</p>
              </article>
            </RevealItem>
          ))}
        </ul>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <Languages className="size-5 text-accent" aria-hidden="true" />
              Langues
            </h3>
            <ul className="mt-5 flex flex-col gap-5">
              {languages.map((l) => (
                <li key={l.name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium">{l.name}</span>
                    <span className="text-muted-foreground">{l.level}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                    <div className="h-full rounded-full bg-gradient-to-r from-accent to-primary" style={{ width: `${l.value}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>


        </div>
      </div>
    </section>
  )
}
