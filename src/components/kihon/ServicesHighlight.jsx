import React from 'react'
import { Link } from 'react-router-dom'
import { FaCode, FaDatabase, FaChartLine, FaGears } from 'react-icons/fa6'
import { HiArrowRight } from 'react-icons/hi'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export const services = [
  {
    icon: FaCode,
    title: 'Desenvolvimento Full Stack',
    description: 'Sistemas completos, do backend ao frontend, com arquitetura sólida e código limpo.',
    benefit: 'Soluções sob medida que crescem com o negócio.',
  },
  {
    icon: FaDatabase,
    title: 'Engenharia de Dados',
    description: 'Data lakes, pipelines ETL e arquiteturas de dados escaláveis e eficientes.',
    benefit: 'Dados organizados e acessíveis para decidir com confiança.',
  },
  {
    icon: FaChartLine,
    title: 'Business Intelligence',
    description: 'Dashboards, relatórios automatizados e visualizações que viram insight.',
    benefit: 'Informação clara e acionável para a sua equipe.',
  },
  {
    icon: FaGears,
    title: 'Automação & Integração',
    description: 'Integração de sistemas, automação de processos e otimização de workflows.',
    benefit: 'Mais velocidade, menos erro, mais produtividade.',
  },
]

const ServicesHighlight = () => (
  <section id="servicos" className="section-kihon bg-kihon-paper">
    <div className="container-max">
      <SectionHeading
        eyebrow="O que fazemos"
        title="Serviços que começam pelos fundamentos"
        lead="Quatro frentes, uma filosofia: base sólida antes de qualquer camada nova."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={i * 0.08} className="h-full">
            <article className="card-kihon flex h-full flex-col p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-kihon-red-tint text-kihon-red-ink">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-kihon-ink">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-kihon-muted">
                {service.description}
              </p>
              <p className="mt-4 text-sm font-medium text-kihon-ink">{service.benefit}</p>
              <Link
                to="/servicos"
                className="group mt-5 inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-kihon-red-ink"
              >
                Saiba mais
                <HiArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

export default ServicesHighlight
