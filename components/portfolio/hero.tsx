'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { ArrowRight, GraduationCap, LayoutGrid, Mail, MapPin, Phone } from 'lucide-react'
import { GithubIcon } from './brand-icons'
import { CodeBackground } from './code-background'

const roles = ['Développeur Web Full Stack', 'Analyste-Concepteur SI', 'Junior en IA']

const socials = [
  { label: 'GitHub', icon: GithubIcon, href: 'https://github.com/Patrick17-ui' },
  { label: 'Email', icon: Mail, href: 'mailto:djoumbissiepatrick0@gmail.com' },
  { label: 'Téléphone', icon: Phone, href: 'tel:+237696728362' },
]

const ease = [0.22, 1, 0.36, 1] as const

function RotatingRole() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600)
    return () => clearInterval(id)
  }, [])
  return (
    <span className="relative block h-[1.4em] overflow-hidden">
      <motion.span
        initial={false}
        animate={{ opacity: [0, 1], y: [8, 0] }}
        transition={{ duration: 0.45, ease }}
        className="block whitespace-nowrap text-white"
      >
        {roles[index]}
      </motion.span>
    </span>
  )
}

export function Hero() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 20 })
  const sy = useSpring(my, { stiffness: 60, damping: 20 })
  const imgX = useTransform(sx, (v) => v * 18)
  const imgY = useTransform(sy, (v) => v * 18)
  const cardX = useTransform(sx, (v) => v * -30)
  const cardY = useTransform(sy, (v) => v * -30)

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const name = ['Patrick Raoul', 'DJOUMBISSIE']

  return (
    <section
      id="accueil"
      onMouseMove={onMove}
      className="relative isolate overflow-hidden px-4 pb-24 pt-32 text-white md:pt-40"
    >
      <CodeBackground />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h1 className="text-5xl font-bold leading-[0.95] md:text-6xl lg:text-7xl">
            {name.map((word, i) => (
              <span key={word} className="mr-4 inline-block whitespace-nowrap overflow-hidden pb-2 align-bottom">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease }}
                  className={`inline-block ${i === 0 ? 'text-[60px]' : 'text-[#f3680f]'}`}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease }}
            className="mt-5 font-heading text-2xl font-medium md:text-3xl"
          >
            <RotatingRole />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease }}
            className="mt-6 max-w-md text-pretty leading-relaxed text-white"
          >
            Transformez vos idées en applications fluides et scalables. J&apos;interviens à chaque étape de votre projet
            pour garantir un code propre, robuste et orienté résultats.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65, ease }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-primary px-6 py-3.5 font-medium text-primary-foreground shadow-lg shadow-primary/30 transition-shadow hover:shadow-primary/50"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              Me contacter
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#projets"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-medium backdrop-blur transition-colors hover:border-sky-400/60 hover:text-sky-300"
            >
              Voir les projets
              <LayoutGrid className="size-4 transition-transform group-hover:rotate-90" aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10 flex items-center gap-4"
          >
            <span className="flex items-center gap-1.5 text-sm text-white/70"><MapPin className="size-4 text-primary" aria-hidden="true" />Yaoundé, Cameroun</span>
            <span className="h-px w-8 bg-white/20" aria-hidden="true" />
            <ul className="flex gap-2">
              {socials.map(({ label, icon: Icon, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="grid size-10 place-items-center rounded-full border border-white/20 text-white/70 transition-all hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <div className="absolute inset-1 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,var(--primary),var(--accent),transparent_60%,var(--primary))] p-px opacity-80" aria-hidden="true">
            <div className="size-full rounded-full bg-[oklch(0.18_0.03_255)]" />
          </div>
          <div className="absolute inset-5 rounded-full bg-gradient-to-br from-primary/80 via-primary/40 to-accent/30 blur-sm" aria-hidden="true" />

          <motion.div style={{ x: imgX, y: imgY }} className="absolute -inset-x-8 -top-14 bottom-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT_Image_25_sept._2026__14_20_52-removebg-preview-awtX3RL11V5pOjRSu8JWYhVqWG7PyZ.png"
              alt="Portrait de Patrick Raoul DJOUMBISSIE, développeur web"
              fill
              priority
              sizes="(min-width: 1024px) 32rem, 100vw"
              className="object-contain object-top [clip-path:circle(43%_at_50%_61%)]"
            />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT_Image_25_sept._2026__14_20_52-removebg-preview-awtX3RL11V5pOjRSu8JWYhVqWG7PyZ.png"
              alt=""
              fill
              aria-hidden="true"
              sizes="(min-width: 1024px) 32rem, 100vw"
              className="object-contain object-top [clip-path:ellipse(43%_37%_at_50%_35%)]"
            />
          </motion.div>

          <motion.div
            style={{ x: cardX, y: cardY }}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.7, ease }}
            className="absolute left-0 top-1/3 -translate-x-10"
          >
            <div className="animate-float rounded-2xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
              <p className="font-heading text-3xl font-bold text-primary">4+</p>
              <p className="text-xs text-white/70">Années d&apos;expérience</p>
            </div>
          </motion.div>

          <motion.div
            style={{ x: cardX, y: cardY }}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.05, duration: 0.7, ease }}
            className="absolute bottom-16 right-0 translate-x-10"
          >
            <div className="animate-float rounded-2xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-xl [animation-delay:1.5s]">
              <div className="flex items-center gap-2">
                <p className="font-heading text-3xl font-bold text-sky-400">10+</p>
              </div>
              <p className="text-xs text-white/70">Projets réalisés</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7, ease }}
            className="absolute right-0 top-0 translate-x-6"
          >
            <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs backdrop-blur-xl">
              <GraduationCap className="size-3.5 text-primary" aria-hidden="true" />
              Maîtrise en IA
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
