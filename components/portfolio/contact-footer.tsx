'use client'

import { motion } from 'motion/react'
import type React from 'react'
import { ArrowUp, CodeXml, Download, Mail, MapPin, Phone, Send } from 'lucide-react'
import { Reveal, RevealItem } from './reveal'

const EMAIL = 'djoumbissiepatrick0@gmail.com'
const WHATSAPP_URL = 'https://wa.me/237696728362'

const contacts = [
  { icon: Mail, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Phone, label: 'Téléphone', value: '(+237) 696 728 362', href: 'tel:+237696728362' },
  { icon: MapPin, label: 'Localisation', value: 'Yaoundé, Cameroun' },
]

const footerLinks = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'apropos', label: 'À propos' },
  { id: 'experience', label: 'Expérience' },
  { id: 'projets', label: 'Projets' },
  { id: 'formation', label: 'Formation' },
  { id: 'contact', label: 'Contact' },
]

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-4 py-20">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-foreground p-8 text-background md:p-14">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-35"
          style={{ backgroundImage: "url('/images/footer-bg-tech.png')" }}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0 bg-foreground/65" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-primary/30 blur-[100px]" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 left-10 size-72 rounded-full bg-accent/30 blur-[100px]" aria-hidden="true" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="text-balance text-4xl font-semibold md:text-6xl">
              Travaillons <span className="text-primary">ensemble.</span>
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-background/70">
              Disponible pour de nouvelles opportunités en développement web, support applicatif ou environnements
              métier exigeants. Parlons de votre projet.
            </p>
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group mt-8 inline-flex items-center gap-3 rounded-2xl bg-primary px-7 py-4 font-medium text-primary-foreground shadow-xl shadow-primary/30"
            >
              Me contacter
              <Send className="size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
            </motion.a>
          </div>

          <ul className="flex flex-col gap-3">
            {contacts.map(({ icon: Icon, label, value, href }, i) => {
              const content = (
                <>
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/20 text-primary transition-transform group-hover:scale-110">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-background/60">{label}</span>
                    <span className="block break-all font-medium">{value}</span>
                  </span>
                </>
              )
              return (
                <RevealItem key={label} delay={0.1 + i * 0.08}>
                  {href ? (
                    <a
                      href={href}
                      className="group flex items-center gap-4 rounded-2xl border border-background/10 bg-background/5 p-4 transition-colors hover:border-primary/60"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="group flex items-center gap-4 rounded-2xl border border-background/10 bg-background/5 p-4">
                      {content}
                    </div>
                  )}
                </RevealItem>
              )
            })}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}

const footerContacts = [
  { icon: MapPin, lines: ['Yaoundé, Cameroun'] },
  { icon: Phone, lines: ['(+237) 696 728 362'], href: 'tel:+237696728362' },
  { icon: Mail, lines: [EMAIL], href: `mailto:${EMAIL}` },
]

function FooterLabel({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-6 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-primary">{children}</h3>
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[oklch(0.18_0.03_255)] text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-90"
        style={{ backgroundImage: "url('/images/footer-bg-tech.png')" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[oklch(0.18_0.03_255)]/60 via-transparent to-[oklch(0.18_0.03_255)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-10 pt-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal className="border-l-2 border-primary pl-5">
            <a href="#accueil" className="flex items-center gap-3">
              <CodeXml className="size-9 text-white" aria-hidden="true" />
              <span className="leading-tight">
                <span className="block font-heading text-lg font-bold uppercase">Patrick Raoul</span>
                <span className="block font-heading text-lg font-bold uppercase text-primary">DJOUMBISSIE</span>
                <span className="mt-2 block max-w-[15rem] text-[10px] uppercase tracking-[0.16em] text-white/60">Concevoir avec intention, créer des solutions.</span>
              </span>
            </a>
            <p className="mt-6 text-pretty leading-relaxed text-white/70">
              Développeur web passionné par la création d&apos;applications modernes, rapides et maintenables.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={`mailto:${EMAIL}`}
                aria-label="Envoyer un email"
                className="grid size-10 place-items-center rounded-full border border-white/20 transition-colors hover:border-primary hover:text-primary"
              >
                <Mail className="size-4" aria-hidden="true" />
              </a>
              <a
                href="tel:+237696728362"
                aria-label="Appeler"
                className="grid size-10 place-items-center rounded-full border border-white/20 transition-colors hover:border-primary hover:text-primary"
              >
                <Phone className="size-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <nav aria-label="Pied de page">
              <FooterLabel>Navigation</FooterLabel>
              <ul className="flex flex-col gap-4">
                {footerLinks.map((l) => (
                  <li key={l.id}>
                    <a
                      href={`#${l.id}`}
                      className={`group inline-flex items-center gap-2 font-medium transition-colors hover:text-primary ${
                        l.id === 'contact' ? 'text-primary' : 'text-white/90'
                      }`}
                    >
                      <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-4" aria-hidden="true" />
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Reveal>

          <Reveal delay={0.2}>
            <FooterLabel>Contact</FooterLabel>
            <ul className="flex flex-col gap-5">
              {footerContacts.map(({ icon: Icon, lines, href }) => (
                <li key={lines[0]} className="flex gap-3">
                  <Icon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {href ? (
                    <a href={href} className="break-all text-white/85 transition-colors hover:text-primary">
                      {lines.join(' ')}
                    </a>
                  ) : (
                    <span className="text-white/85">{lines.join(' ')}</span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.3}>
            <FooterLabel>Mon CV</FooterLabel>
            <p className="leading-relaxed text-white/70">
              Téléchargez mon CV pour plus d&apos;informations sur mon parcours professionnel.
            </p>
            <motion.a
              href="/cv-patrick-djoumbissie.pdf"
              download
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group mt-6 inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3.5 font-semibold text-accent-foreground shadow-lg shadow-accent/30"
            >
              <Download className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
              Télécharger mon CV
            </motion.a>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col items-center gap-6">
          <span className="h-px w-56 bg-gradient-to-r from-transparent via-primary to-transparent" aria-hidden="true" />
          <p className="text-center font-mono text-xs text-white/50">
            {`© ${new Date().getFullYear()} DJOUMBISSIE Patrick Raoul. Tous droits réservés.`}
          </p>
        </div>

        <a
          href="#accueil"
          aria-label="Retour en haut"
          className="group absolute bottom-8 right-6 grid size-12 place-items-center rounded-full border-2 border-primary text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <ArrowUp className="size-4 transition-transform group-hover:-translate-y-1" aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
