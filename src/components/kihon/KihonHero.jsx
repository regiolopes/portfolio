import React from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import BrushStroke from './BrushStroke'

const KihonHero = () => {
  const reduce = useReducedMotion()

  return (
    <section className="relative isolate overflow-hidden bg-kihon-ink">
      {/* Kanji watermark — atmosfera 基本 (fundamentos) */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 top-1/2 hidden -translate-y-1/2 select-none font-display text-[34rem] font-bold leading-none text-white/[0.03] sm:block"
        style={{ fontFamily: "'Yu Gothic', 'Hiragino Sans', 'Noto Sans JP', serif" }}
      >
        基
      </span>
      {/* Brilho vermelho sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-[38rem] w-[38rem] rounded-full bg-kihon-red/10 blur-[120px]"
      />
      {/* Grade fina */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, #000 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, #000 40%, transparent 100%)',
        }}
      />

      <div className="container-max relative z-10 flex min-h-[calc(100svh-4rem)] flex-col justify-center py-24 md:min-h-[calc(100svh-5rem)]">
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="eyebrow eyebrow-on-ink mb-6">
            基本 · Software · Dados · Automação
          </span>

          <h1 className="text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-kihon-paper sm:text-5xl lg:text-6xl xl:text-7xl">
            O básico bem feito
            <br className="hidden sm:block" />{' '}
            vira{' '}
            <span className="relative inline-block whitespace-nowrap text-kihon-red">
              excelência
              <BrushStroke className="absolute -bottom-1 left-0 h-3 w-full sm:h-4" />
            </span>
            .
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-kihon-chalk sm:text-xl">
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
            <Link to="/servicos" className="btn-kihon-on-ink px-7 py-4 text-base">
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
