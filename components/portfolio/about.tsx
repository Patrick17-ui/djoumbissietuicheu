'use client'

import { motion } from 'motion/react'
import { Download } from 'lucide-react'
import { Reveal, RevealItem } from './reveal'
import {
  AngularIcon,
  CSharpIcon,
  CssIcon,
  LaravelIcon,
  DatabaseIcon,
  PythonIcon,
  ReactIcon,
  TypeScriptIcon,
} from './brand-icons'

const skills = [
  { name: 'Angular', level: 90, Icon: AngularIcon, color: '#dd0031' },
  { name: 'TypeScript', level: 85, Icon: TypeScriptIcon, color: '#3178c6' },
  { name: 'React', level: 80, Icon: ReactIcon, color: '#61dafb' },
  { name: 'C# / ASP.NET', level: 75, Icon: CSharpIcon, color: '#512bd4' },
  { name: 'MySQL / PostgreSQL', level: 80, Icon: DatabaseIcon, color: '#336791' },
  { name: 'Laravel / PHP', level: 70, Icon: LaravelIcon, color: '#ff2d20' },
  { name: 'Python', level: 70, Icon: PythonIcon, color: '#3776ab' },
  { name: 'Tailwind / Bootstrap', level: 85, Icon: CssIcon, color: '#06b6d4' },
]

const soft = ['Analyse & résolution de problèmes', 'Travail en équipe', 'Rigueur', 'Agile / Scrum', 'Support IT', 'Git / GitHub']

export function About() {
  return (
    <section id="apropos" className="scroll-mt-24 px-4 py-28">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <p className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />À propos
          </p>
          <h2 className="text-balance text-3xl font-semibold md:text-5xl">
            Rigoureux, fiable et <span className="text-primary">orienté solutions.</span>
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Titulaire d&apos;une Maîtrise en Intelligence Artificielle, je conçois des applications web et métier
            performantes, de l&apos;analyse initiale du besoin jusqu&apos;à la mise en production.
            <br />
            <br />
            Grâce à un parcours polyvalent combinant développement web, gestion de bases de données, administration
            système (Windows & Linux) et support technique, j&apos;apporte une vision globale et transversale aux
            projets informatiques. Mon objectif : délivrer un code propre, garantir la stabilité des environnements
            et offrir des solutions concrètes et adaptées aux utilisateurs.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {soft.map((s) => (
              <li key={s} className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                {s}
              </li>
            ))}
          </ul>
          <a
            href="/cv-patrick-djoumbissie.pdf"
            download
            className="group mt-8 inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-medium transition-colors hover:border-primary/60 hover:bg-primary/5"
          >
            Télécharger mon CV
            <Download className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
          </a>
        </Reveal>

        <div>
          <Reveal>
            <h3 className="mb-8 text-xl font-semibold">Mes compétences</h3>
          </Reveal>
          <ul className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
            {skills.map((skill, i) => (
              <RevealItem key={skill.name} delay={i * 0.06}>
                <div className="mb-3 flex items-center gap-3">
                  <span
                    className="grid size-9 shrink-0 place-items-center rounded-lg border border-border bg-secondary"
                    style={{ color: skill.color }}
                    aria-hidden="true"
                  >
                    <skill.Icon className="size-5" {...(skill.iconLabel ? { label: skill.iconLabel } : {})} />
                  </span>
                  <span className="font-medium">{skill.name}</span>
                  <span className="ml-auto font-mono text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div
                  className="h-1.5 overflow-hidden rounded-full bg-secondary"
                  role="progressbar"
                  aria-valuenow={skill.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`Niveau ${skill.name}`}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full bg-gradient-to-r from-accent to-primary"
                  />
                </div>
              </RevealItem>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
