import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'
import KihonLayout from '../components/kihon/KihonLayout'
import PageHero from '../components/kihon/PageHero'
import SectionHeading from '../components/kihon/SectionHeading'
import Reveal from '../components/kihon/Reveal'
import Process from '../components/kihon/Process'
import JointVenture from '../components/kihon/JointVenture'
import FinalCTA from '../components/kihon/FinalCTA'

const valores = [
  'Transparência',
  'Disciplina',
  'Simplicidade',
  'Melhoria contínua',
  'Respeito ao cliente',
]

function KihonSobre() {
  return (
    <KihonLayout>
      <PageHero
        eyebrow="Sobre a Kihon"
        title="A disciplina dos fundamentos, aplicada à tecnologia"
        lead="Fazemos o básico tão bem feito que vira excelência — serviços sólidos, desde a base."
      />

      {/* História */}
      <section className="section-kihon bg-kihon-paper">
        <div className="container-max grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="eyebrow mb-4">Nossa história</span>
              <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-kihon-ink sm:text-4xl">
                Tecnologia não precisa ser complicada para ser poderosa
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.08} className="lg:col-span-8">
            <div className="max-w-prose-kihon space-y-5 text-lg leading-relaxed text-kihon-muted">
              <p>
                A Kihon nasceu da ideia de que a melhor tecnologia é a que resolve. Inspirados pelo
                Karatê — onde o <strong className="font-semibold text-kihon-ink">kihon (基本)</strong>,
                os fundamentos, é praticado até a perfeição — aplicamos essa disciplina ao
                desenvolvimento de soluções digitais.
              </p>
              <p>
                Antes de automatizar processos complexos, arrumamos a base. Antes de implementar
                tecnologia de ponta, garantimos que os fundamentos estejam sólidos. Assim entregamos
                soluções que funcionam, se sustentam e geram resultado real.
              </p>
              <p className="font-medium text-kihon-ink">
                Não vendemos modinha nem promessa vazia. Vendemos trabalho bem feito, desde a base.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="section-kihon bg-kihon-surface">
        <div className="container-max grid gap-6 md:grid-cols-3">
          {[
            {
              t: 'Missão',
              d: 'Aplicar a disciplina dos fundamentos à tecnologia para gerar resultados consistentes e sustentáveis.',
            },
            {
              t: 'Visão',
              d: 'Ser reconhecida como a empresa que faz o básico tão bem feito que vira referência em excelência.',
            },
            { t: 'Valores', list: valores },
          ].map((card, i) => (
            <Reveal key={card.t} delay={i * 0.08} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-kihon-line bg-white p-7 shadow-card">
                <h3 className="font-display text-xl font-bold text-kihon-ink">{card.t}</h3>
                {card.d && (
                  <p className="mt-3 text-base leading-relaxed text-kihon-muted">{card.d}</p>
                )}
                {card.list && (
                  <ul className="mt-3 space-y-2">
                    {card.list.map((v) => (
                      <li key={v} className="flex items-start gap-2.5 text-base text-kihon-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-kihon-red" aria-hidden="true" />
                        {v}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Como trabalhamos (kata) */}
      <Process />

      {/* Quem faz */}
      <section className="section-kihon bg-kihon-paper">
        <div className="container-max">
          <SectionHeading
            eyebrow="Quem faz"
            title="Gente que assina o que entrega"
            lead="A Kihon é conduzida por quem coloca a mão no código e responde pelo resultado."
          />
          <Reveal delay={0.08} className="mx-auto mt-10 max-w-2xl">
            <div className="rounded-2xl border border-kihon-line bg-white p-7 shadow-card sm:p-9">
              <p className="font-display text-xl font-semibold text-kihon-ink">Regio Lopes</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-eyebrow text-kihon-muted">
                Engenheiro de dados & desenvolvedor
              </p>
              <p className="mt-4 text-base leading-relaxed text-kihon-muted">
                Experiência em desenvolvimento full stack, engenharia de dados, BI e automação para
                empresas de educação, jurídico, contabilidade e varejo. Cada projeto passa por
                fundamentos sólidos antes de qualquer camada nova.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/regiolopes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-kihon-ghost"
                >
                  <FaLinkedin className="h-5 w-5" aria-hidden="true" />
                  LinkedIn
                </a>
                <Link to="/regiolopes" className="group inline-flex items-center gap-1.5 self-center font-sans text-sm font-semibold text-kihon-red-ink">
                  Ver portfólio pessoal
                  <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Joint venture Kihon × Workenge */}
      <JointVenture />

      <FinalCTA />
    </KihonLayout>
  )
}

export default KihonSobre
