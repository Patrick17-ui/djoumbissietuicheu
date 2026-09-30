'use client'

import Image from 'next/image'
import { motion, useMotionTemplate, useMotionValue } from 'motion/react'
import { ArrowRight, Calendar, ExternalLink, FlaskConical } from 'lucide-react'
import { GithubIcon } from './brand-icons'
import { Reveal, RevealItem, SectionHeading } from './reveal'

const GITHUB = 'https://github.com/Patrick17-ui'

const projects = [
  {
    title: 'BUY’N’SELLEM',
    period: '',
    stack: [],
    description: 'Application web et mobile de e-commerce, de la conception au développement complet.',
    image: '/images/buynsellem-logo.png',
    hosted: true,
    liveUrl: 'https://buynsellem.com',
  },
  {
    title: 'Groupe Cœurs Braves',
    period: '',
    stack: [],
    description: 'Le site de l’association Cœurs Braves agit chaque jour aux côtés des communautés : nourrir, former, soigner et accompagner celles et ceux qui en ont le plus besoin. Notre moteur, c’est la solidarité.',
    image: '/images/coeurs-braves.png',
    hosted: true,
    liveUrl: 'https://coeursbraves.vercel.app',
  },
  {
    title: 'Overbrand',
    period: '',
    stack: [],
    description: 'Site de l’agence de l’entreprise Overbrand.',
    image: '/images/overbrand.png',
    hosted: true,
    liveUrl: 'https://overbrand.net/fr',
  },
  {
    title: 'Deliver Pro',
    period: '',
    stack: [],
    description: 'Application de gestion de stock et de livraison (pas encore déployée).',
    image: '/images/deliver-pro.jpg',
    hosted: false,
    github: 'https://github.com/Patrick17-ui/DeliverPro',
  },
  {
    title: 'Transport Express',
    period: '',
    stack: [],
    description: 'Une application complète de gestion de transport permettant de suivre les livraisons, d’optimiser les itinéraires et de gérer efficacement les dépenses liées aux trajets des véhicules (application desktop).',
    image: '/images/transport-express.png',
    hosted: false,
    github: 'https://github.com/Patrick17-ui/Truck_Expenss',
  },
  {
    title: 'IA de prédiction de température',
    period: '',
    stack: [],
    description: 'Cours d’implémentation. Le modèle de prédiction est déjà construit.',
    image: '/images/temperature-ai.png',
    hosted: false,
    github: 'https://github.com/Patrick17-ui/IA-prediction-Temperature',
  },
]

type Lang = { name: string; color: string }

const LANG = {
  php: { name: 'PHP · Laravel', color: '#F05340' },
  java: { name: 'Java EE', color: '#F89820' },
  mysql: { name: 'MySQL', color: '#4479A1' },
  ionic: { name: 'Ionic · TypeScript', color: '#3880FF' },
  postgres: { name: 'PostgreSQL · SQL', color: '#336791' },
  python: { name: 'Python', color: '#3776AB' },
} satisfies Record<string, Lang>

const academic = [
  {
    title: 'Système de détection automatique des émotions faciales',
    category: 'Projet académique',
    description: 'Conception d’un système de détection automatique des émotions faciales à l’aide de réseaux de neurones convolutifs.',
    langs: [LANG.python],
    image: '/images/project-ai.png',
    github: 'https://github.com/Patrick17-ui/Syst-me-de-d-tection-automatique-des-motions-faciales',
    span: 'lg:col-span-1',
  },
  {
    title: 'Gestion de structures hôtelières',
    category: 'Application web',
    description: 'Réservations, chambres, clients et facturation centralisés dans une interface d’administration.',
    langs: [LANG.php, LANG.mysql],
    image: '/images/academic-hotel.png',
    github: 'https://github.com/Patrick17-ui/Systeme-complet-de-Gestion-de-Structure-Hoteliere-Laravel',
    span: 'lg:col-span-1',
  },
  {
    title: 'Gestion d’une auto-école',
    category: 'Application d’entreprise',
    description: 'Suivi des élèves, planning des leçons de conduite et gestion des moniteurs.',
    langs: [LANG.java, LANG.mysql],
    image: '/images/academic-driving.png',
    github: 'https://github.com/Patrick17-ui/Gestion-Auto-Ecole-Java-EE',
    span: 'lg:col-span-1',
  },
  {
    title: 'Calculatrice mobile',
    category: 'Application mobile',
    description: 'Calculatrice multiplateforme à l’interface épurée et réactive.',
    langs: [LANG.ionic],
    image: '/images/academic-calculator.png',
    github: 'https://github.com/Patrick17-ui/Calculator',
    span: 'lg:col-span-1',
  },
  {
    title: 'Administration de bases de données',
    category: 'Base de données',
    description: 'Modélisation, requêtes avancées, rôles et optimisation d’une base relationnelle.',
    langs: [LANG.postgres],
    image: '/images/academic-database.png',
    span: 'lg:col-span-1',
  },
]

function AcademicCard({ project, index }: { project: (typeof academic)[number]; index: number }) {
  return (
    <RevealItem delay={index * 0.08} className={`${project.span} list-none`}>
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        className="group relative isolate flex h-80 flex-col justify-between overflow-hidden rounded-3xl border border-border p-6 shadow-sm transition-shadow hover:shadow-2xl hover:shadow-primary/20"
      >
        <Image
          src={project.image || '/placeholder.svg'}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="-z-20 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-t from-[oklch(0.18_0.04_255)] via-[oklch(0.18_0.04_255/70%)] to-[oklch(0.18_0.04_255/15%)] transition-opacity duration-500 group-hover:opacity-90"
          aria-hidden="true"
        />

        <div className="flex items-start justify-between gap-3">
          <ul className="flex flex-wrap gap-2" aria-label="Technologies utilisées">
            {project.langs.map((lang) => (
              <li
                key={lang.name}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-1.5 font-mono text-xs font-semibold text-white backdrop-blur-md"
              >
                <span className="size-2.5 rounded-full shadow-[0_0_10px_currentColor]" style={{ backgroundColor: lang.color, color: lang.color }} aria-hidden="true" />
                {lang.name}
              </li>
            ))}
          </ul>
          <span className="font-mono text-sm font-medium text-white/60">0{index + 1}</span>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">{project.category}</p>
          <h4 className="mt-2 text-balance text-2xl font-semibold leading-tight text-white">{project.title}</h4>
          <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-white/80 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100 group-focus-within:max-h-24 group-focus-within:opacity-100 max-lg:max-h-24 max-lg:opacity-100">
            {project.description}
          </p>
          <div className="mt-4 flex items-center justify-between gap-4">
            <span className="block h-1 w-12 rounded-full bg-primary transition-all duration-500 group-hover:w-24" aria-hidden="true" />
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Voir le projet ${project.title} sur GitHub`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md transition-colors hover:border-white/50 hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <GithubIcon className="size-4" />
                  GitHub
                </a>
              ) : null}
          </div>
        </div>
      </motion.article>
    </RevealItem>
  )
}

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${x}px ${y}px, oklch(0.68 0.19 45 / 12%), transparent 70%)`

  return (
    <Reveal delay={index * 0.08}>
      <motion.article
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          x.set(e.clientX - rect.left)
          y.set(e.clientY - rect.top)
        }}
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-2xl hover:shadow-primary/10"
      >
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: spotlight }}
          aria-hidden="true"
        />
        <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
          <Image
            src={project.image || '/placeholder.svg'}
            alt={`Illustration du projet ${project.title}`}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 font-mono text-xs font-medium text-primary-foreground shadow-lg">
            0{index + 1}
          </span>
        </div>
          <div className="relative z-20 flex flex-1 flex-col p-4">
          {project.period ? (
            <p className="flex items-center gap-1.5 font-mono text-xs text-accent">
              <Calendar className="size-3.5" aria-hidden="true" />
              {project.period}
            </p>
          ) : null}
          <h3 className="mt-2 text-xl font-semibold leading-tight">{project.title}</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <li key={s} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                {s}
              </li>
            ))}
          </ul>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
          <div className="mt-5 flex items-center justify-between gap-3">
            {project.hosted && project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-primary"
              >
                Voir le projet
                <ExternalLink className="size-4 transition-transform group-hover/link:translate-x-1" aria-hidden="true" />
              </a>
            ) : project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-primary"
              >
                Voir sur GitHub
                <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" aria-hidden="true" />
              </a>
            ) : (
              <span className="text-sm text-muted-foreground">Lien à ajouter</span>
            )}
            <span className="grid size-8 place-items-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-accent group-hover:text-accent">
              {project.hosted ? <ExternalLink className="size-4" /> : <GithubIcon className="size-4" />}
            </span>
          </div>
        </div>
      </motion.article>
    </Reveal>
  )
}

export function Projects() {
  return (
    <section id="projets" className="relative scroll-mt-24 overflow-hidden px-4 py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-90"
        style={{ backgroundImage: "url('/images/footer-bg-tech.png')" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-background/85"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Réalisations"
          title="Projets & initiatives"
          action={
            <a href={GITHUB} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 text-sm font-medium text-primary">
              Mon GitHub
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          }
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <Reveal className="mt-14">
          <h3 className="flex items-center gap-2 text-xl font-semibold">
            <FlaskConical className="size-5 text-accent" aria-hidden="true" />
            Projets académiques
          </h3>
        </Reveal>
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {academic.map((a, i) => (
            <AcademicCard key={a.title} project={a} index={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}
