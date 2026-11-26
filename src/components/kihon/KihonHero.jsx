import React from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import KihonKanji from '../../brand/KihonKanji'
import KihonRule from '../../brand/KihonRule'

const KihonHero = () => {
  const reduce = useReducedMotion()

  return (
    <section className="relative isolate overflow-hidden bg-kihon-paper">
      {/* Marca d'água 基 — mesmo contorno da marca, em vetor */}
      <KihonKanji
        chars="基"
        className="pointer-events-none absolute -right-16 top-1/2 hidden h-[34rem] w-auto -translate-y-1/2 select-none text-kihon-ink/[0.038] sm:block"
      />
      {/* Grade fina */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(23,19,15,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(23,19,15,0.055) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, #000 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, #000 40%, transparent 100%)',
        }}
      />

      <div className="container-max relative z-10 flex min-h-[32rem] flex-col justify-center py-24 lg:min-h-[38rem] lg:py-28">
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="eyebrow mb-6">
            基本 · Software · Dados · Automação
          </span>

          <h1 className="text-balance font-display text-display-md font-bold text-kihon-ink sm:text-display-lg lg:text-display-xl xl:text-display-2xl">
            O básico bem feito
            <br className="hidden sm:block" />{' '}
            vira{' '}
            <span className="relative inline-block whitespace-nowrap text-kihon-red">
              excelência
              <KihonRule className="absolute bottom-[0.03em] left-0 h-[0.085em] w-full" />
            </span>
            .
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-kihon-muted sm:text-xl">
            Desenvolvemos software sob medida, engenharia de dados, BI e automação com processos
            claros e performance real — sem modinha, sem promessa vazia. Só trabalho sólido, desde a
            base.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link to="/contato" className="btn-kihon group px-7 py-4 text-base">
              Começar um projeto
              <HiArrowRight
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <Link to="/servicos" className="btn-kihon-ghost px-7 py-4 text-base">
              Ver serviços
            </Link>
          </div>

          <p className="mt-10 font-mono text-xs uppercase tracking-eyebrow text-kihon-faint">
            Clientes em educação · jurídico · contabilidade · varejo — Fortaleza-CE, todo o Brasil
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default KihonHero
