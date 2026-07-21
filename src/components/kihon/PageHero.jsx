import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/** Cabeçalho de página interna: faixa sumi com eyebrow + título + lead. */
const PageHero = ({ eyebrow, title, lead, children }) => {
  const reduce = useReducedMotion()
  return (
    <section className="relative isolate overflow-hidden bg-kihon-ink">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 90% 70% at 30% 30%, #000 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 30% 30%, #000 30%, transparent 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-24 h-96 w-96 rounded-full bg-kihon-red/10 blur-[110px]"
      />
      <div className="container-max relative z-10 py-16 sm:py-20 lg:py-24">
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {eyebrow && <span className="eyebrow eyebrow-on-ink mb-5">{eyebrow}</span>}
          <h1 className="text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-kihon-paper sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {lead && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-kihon-chalk sm:text-xl">
              {lead}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  )
}

export default PageHero
