import React from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export const processSteps = [
  {
    n: '01',
    title: 'Entender a base',
    text: 'Levantamento do problema real, dos processos atuais e das necessidades — antes de qualquer código.',
  },
  {
    n: '02',
    title: 'Desenhar o caminho',
    text: 'Uma solução clara e objetiva, dimensionada para o seu contexto. Sem complicação desnecessária.',
  },
  {
    n: '03',
    title: 'Executar com disciplina',
    text: 'Desenvolvimento focado, com processos definidos, entregas frequentes e comunicação constante.',
  },
  {
    n: '04',
    title: 'Acompanhar e ajustar',
    text: 'Melhoria contínua: iterações pequenas e consistentes, guiadas por feedback e por dados.',
  },
]

const Process = () => (
  <section id="processo" className="section-kihon bg-kihon-surface">
    <div className="container-max">
      <SectionHeading
        eyebrow="Como trabalhamos"
        title="Nosso kata: quatro formas, sempre na ordem"
        lead="Um kata é uma sequência praticada até virar natureza. O nosso guia cada projeto, do primeiro contato à evolução."
      />

      <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, i) => (
          <Reveal key={step.n} delay={i * 0.08} as="li" className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-kihon-line bg-white p-6 shadow-card">
              <div className="flex items-center gap-3">
                <span className="font-mono text-2xl font-semibold text-kihon-red tabular-nums">
                  {step.n}
                </span>
                <span className="h-px flex-1 bg-kihon-line" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-kihon-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-kihon-muted">{step.text}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
)

export default Process
