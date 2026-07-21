import React from 'react'
import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const metrics = [
  { value: '80%', label: 'menos tempo no processamento de relatórios', context: 'Grupo Fornecedora' },
  { value: '70%', label: 'menos tempo em gestão administrativa', context: 'Gestão de academia' },
  { value: '60%', label: 'menos custo de infraestrutura de dados', context: 'Data lake na AWS' },
  { value: '35%', label: 'mais agilidade na resolução de chamados', context: 'BI sobre OTRS' },
]

const ResultsStrip = () => (
  <section className="section-kihon bg-kihon-ink">
    <div className="container-max">
      <SectionHeading
        onInk
        eyebrow="Resultados"
        title="O básico bem feito, medido em resultado"
        lead="Projetos reais, com ganhos que aparecem no dia a dia de quem usa."
      />

      <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 lg:grid-cols-4">
        {metrics.map((m, i) => (
          <Reveal key={m.label} delay={i * 0.08} className="bg-kihon-ink">
            <div className="flex h-full flex-col p-6 sm:p-8">
              <span className="font-display text-5xl font-bold tracking-tight text-kihon-red tabular-nums sm:text-6xl">
                {m.value}
              </span>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-kihon-chalk sm:text-base">
                {m.label}
              </p>
              <p className="mt-4 font-mono text-[0.7rem] uppercase tracking-eyebrow text-kihon-faint">
                {m.context}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-10 flex justify-center">
        <Link to="/cases" className="btn-kihon-on-ink group">
          Ver todos os cases
          <HiArrowRight
            className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </Reveal>
    </div>
  </section>
)

export default ResultsStrip
