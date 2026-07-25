import React from 'react'
import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import { FaCode, FaChartLine } from 'react-icons/fa6'
import Reveal from './Reveal'
import KihonLogo from './KihonLogo'

const WORKENGE_COVER = '/assets/workenge-cover.jpg'

const roles = [
  {
    brand: 'Kihon',
    icon: FaCode,
    text: 'Conduz o desenvolvimento de tecnologia e software — arquitetura, dados e automação, dos fundamentos à entrega.',
  },
  {
    brand: 'Workenge',
    icon: FaChartLine,
    text: 'Agrega engenharia de mercado — viabilidade, análise e estratégia que garantem a solução certa para o negócio.',
  },
]

/**
 * Seção institucional da joint venture Kihon × Workenge.
 * Marca a aliança estratégica: tecnologia (Kihon) + engenharia de mercado (Workenge).
 */
const JointVenture = () => (
  <section id="joint-venture" className="section-kihon bg-kihon-surface">
    <div className="container-max">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Texto */}
        <div className="lg:col-span-6">
          <Reveal>
            <span className="eyebrow mb-4">Aliança estratégica</span>
            <h2 className="text-balance font-display text-3xl font-bold leading-[1.1] tracking-tight text-kihon-ink sm:text-4xl lg:text-[2.75rem]">
              Uma joint venture para entregar de ponta a ponta
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-5 max-w-prose-kihon text-lg leading-relaxed text-kihon-muted">
              A Kihon mantém uma joint venture com a{' '}
              <strong className="font-semibold text-kihon-ink">Workenge — Engenharia de Mercado</strong>.
              Unimos desenvolvimento de tecnologia e visão de mercado numa só frente, para entregar
              soluções completas — da viabilidade ao software em produção.
            </p>
          </Reveal>

          <Reveal delay={0.16} className="mt-8 grid gap-4 sm:grid-cols-2">
            {roles.map((r) => (
              <div
                key={r.brand}
                className="rounded-2xl border border-kihon-line bg-white p-5 shadow-card"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-kihon-red-tint text-kihon-red-ink">
                  <r.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-kihon-ink">
                  {r.brand}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-kihon-muted">{r.text}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.24} className="mt-8">
            <Link
              to="/contato"
              className="group inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-kihon-red-ink"
            >
              Fale com a aliança Kihon × Workenge
              <HiArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </Reveal>
        </div>

        {/* Lockup das marcas */}
        <Reveal delay={0.12} className="lg:col-span-6">
          <div className="relative overflow-hidden rounded-3xl border border-kihon-line bg-white p-8 shadow-lift sm:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: 'radial-gradient(circle, #17130F 1px, transparent 1px)',
                backgroundSize: '22px 22px',
              }}
            />
            <div className="relative flex flex-col items-center gap-6 text-center">
              <span className="font-mono text-[0.7rem] uppercase tracking-eyebrow text-kihon-faint">
                Joint venture
              </span>
              <KihonLogo size="large" />
              <span
                className="font-display text-2xl font-light leading-none text-kihon-faint"
                aria-hidden="true"
              >
                ×
              </span>
              <img
                src={WORKENGE_COVER}
                alt="Workenge — Engenharia de Mercado"
                width={420}
                height={210}
                loading="lazy"
                decoding="async"
                className="w-full max-w-[340px] object-contain"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
)

export default JointVenture
