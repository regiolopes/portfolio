import React from 'react'
import { FaRegGem, FaBullseye, FaArrowsRotate } from 'react-icons/fa6'
import Reveal from './Reveal'

const pillars = [
  {
    icon: FaRegGem,
    title: 'Disciplina',
    text: 'Processos claros, prazos definidos e comunicação constante — do primeiro contato à entrega.',
  },
  {
    icon: FaBullseye,
    title: 'Exatidão',
    text: 'Qualidade no detalhe, do código ao relatório final. O que entregamos, entregamos bem.',
  },
  {
    icon: FaArrowsRotate,
    title: 'Constância',
    text: 'Melhoria contínua em iterações pequenas e consistentes. Base sólida que evolui com você.',
  },
]

const WhyKihon = () => (
  <section id="filosofia" className="section-kihon bg-kihon-surface">
    <div className="container-max">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Painel do kanji */}
        <Reveal className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-3xl bg-kihon-ink p-10 shadow-lift sm:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: 'radial-gradient(circle, #E53935 1.2px, transparent 1.2px)',
                backgroundSize: '22px 22px',
              }}
            />
            <div className="relative">
              <p
                className="font-display text-[9rem] font-bold leading-none text-kihon-red sm:text-[11rem]"
                style={{ fontFamily: "'Yu Gothic', 'Hiragino Sans', 'Noto Sans JP', serif" }}
              >
                基本
              </p>
              <p className="mt-4 font-mono text-sm uppercase tracking-eyebrow text-kihon-chalk">
                ki·hon — /基本/
              </p>
              <p className="mt-2 text-lg text-kihon-paper">
                “Fundamentos”. No Karatê, o kihon é a base de tudo: movimentos repetidos até virarem
                natureza.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Texto */}
        <div className="lg:col-span-7">
          <Reveal>
            <span className="eyebrow mb-4">Por que Kihon</span>
            <h2 className="text-balance font-display text-3xl font-bold leading-[1.1] tracking-tight text-kihon-ink sm:text-4xl">
              A disciplina do dojô, aplicada à tecnologia
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-kihon-muted">
              <p>
                Antes de automatizar o complexo, arruma-se a base. Antes da tecnologia de ponta,
                garantem-se os fundamentos. É assim que entregamos soluções que funcionam, se
                sustentam e geram resultado real.
              </p>
              <p className="font-medium text-kihon-ink">
                Não vendemos modinha nem promessa vazia. Vendemos o básico tão bem feito que vira
                excelência.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.16} className="mt-10 grid gap-6 sm:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title}>
                <p.icon className="h-6 w-6 text-kihon-red" aria-hidden="true" />
                <h3 className="mt-3 font-display text-lg font-semibold text-kihon-ink">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-kihon-muted">{p.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </div>
  </section>
)

export default WhyKihon
