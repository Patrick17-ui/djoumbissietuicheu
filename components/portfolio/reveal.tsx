'use client'

import { motion, type HTMLMotionProps } from 'motion/react'

type RevealProps = HTMLMotionProps<'div'> & {
  delay?: number
  y?: number
}

export function Reveal({ delay = 0, y = 32, children, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({ delay = 0, y = 16, children, ...props }: HTMLMotionProps<'li'> & { delay?: number; y?: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.li>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  action,
}: {
  eyebrow: string
  title: string
  action?: React.ReactNode
}) {
  return (
    <Reveal className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          {eyebrow}
        </p>
        <h2 className="text-balance text-3xl font-semibold md:text-5xl">{title}</h2>
      </div>
      {action}
    </Reveal>
  )
}
