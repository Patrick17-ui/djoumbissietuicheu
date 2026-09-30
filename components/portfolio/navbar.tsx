'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react'
import { Brackets, Download, Menu, X } from 'lucide-react'

const links = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'apropos', label: 'À propos' },
  { id: 'experience', label: 'Expérience' },
  { id: 'projets', label: 'Projets' },
  { id: 'formation', label: 'Formation' },
  { id: 'contact', label: 'Contact' },
]

export function Navbar() {
  const [active, setActive] = useState('accueil')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-primary to-accent"
        aria-hidden="true"
      />
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Navigation principale"
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-500 md:px-6 ${
          scrolled
            ? 'border-border/80 bg-background/90 text-foreground shadow-xl shadow-black/10 backdrop-blur-xl'
            : 'border-white/20 bg-slate-950/55 text-white shadow-lg shadow-black/10 backdrop-blur-md'
        }`}
      >
        <a href="#accueil" className="flex items-center gap-2 font-heading font-semibold leading-tight">
          <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
            <Brackets className="size-4" aria-hidden="true" />
          </span>
          <span className="flex flex-col text-sm md:text-base">
            <span>DJOUMBISSIE TUICHEU</span>
            <span className="text-primary">Patrick Raoul</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                  scrolled
                    ? active === link.id
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                    : active === link.id
                      ? 'text-white'
                      : 'text-white/65 hover:text-white'
                }`}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className={`absolute inset-0 -z-10 rounded-full ring-1 ${
                      scrolled ? 'bg-secondary ring-border' : 'bg-white/10 ring-white/15'
                    }`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="/cv-patrick-djoumbissie.pdf"
            download
            className="group hidden items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-md shadow-primary/30 transition-shadow hover:shadow-primary/50 sm:flex"
          >
            Télécharger CV
            <Download className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`grid size-10 place-items-center rounded-xl border lg:hidden ${scrolled ? 'border-border' : 'border-white/20'}`}
            aria-expanded={open}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            className="mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-2xl border border-border bg-background/90 p-3 backdrop-blur-xl lg:hidden"
          >
            {links.map((link, i) => (
              <motion.li
                key={link.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-sm ${
                    active === link.id ? 'bg-secondary text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
