import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/** Cabeçalho de página interna: faixa sumi com eyebrow + título + lead. */
const PageHero = ({ eyebrow, title, lead, children }) => {
  const reduce = useReducedMotion()
  return (
    <section className="relative isolate overflow-hidden bg-kihon-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(23,19,15,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(23,19,15,0.055) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 90% 70% at 30% 30%, #000 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 30% 30%, #000 30%, transparent 100%)',
        }}
      />
      <div className="container-max relative z-10 py-16 sm:py-20 lg:py-24">
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {eyebrow && <span className="eyebrow mb-5">{eyebrow}</span>}
          <h1 className="text-balance font-display text-display-md font-bold text-kihon-ink sm:text-display-lg lg:text-display-xl">
            {title}
          </h1>
          {lead && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-kihon-muted sm:text-xl">
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
