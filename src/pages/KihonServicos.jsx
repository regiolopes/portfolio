import React from 'react'
import { Link } from 'react-router-dom'
import { FaCode, FaDatabase, FaChartLine, FaGears } from 'react-icons/fa6'
import { HiArrowRight, HiCheck } from 'react-icons/hi'
import KihonLayout from '../components/kihon/KihonLayout'
import PageHero from '../components/kihon/PageHero'
import Reveal from '../components/kihon/Reveal'
import FinalCTA from '../components/kihon/FinalCTA'

const services = [
  {
    id: 'full-stack',
    icon: FaCode,
    tag: 'Dev',
    title: 'Desenvolvimento Full Stack',
    description:
      'Sistemas completos, do backend ao frontend, com arquitetura sólida e código limpo. Soluções sob medida que crescem com o seu negócio.',
    idealFor: [
      'Empresas que precisam de sistemas personalizados',
      'Startups que buscam escalabilidade desde o início',
      'Organizações que querem integrar processos digitais',
    ],
    howWeDo: [
      'Análise de requisitos e arquitetura',
      'Desenvolvimento ágil e iterativo',
      'Testes e validação contínua',
      'Deploy e monitoramento',
    ],
    deliverables: [
      'Sistema completo e funcional',
      'Documentação técnica',
      'Código versionado e documentado',
      'Treinamento e plano de manutenção',
    ],
  },
  {
    id: 'dados',
    icon: FaDatabase,
    tag: 'Dados',
    title: 'Engenharia de Dados',
    description:
      'Data lakes, pipelines ETL e arquiteturas de dados escaláveis e eficientes. Organizamos seus dados para decisões estratégicas baseadas em informação real.',
    idealFor: [
      'Empresas com grandes volumes de dados',
      'Organizações que integram fontes diversas',
      'Negócios que buscam insight de dados históricos',
    ],
    howWeDo: [
      'Mapeamento das fontes de dados',
      'Arquitetura medallion (Bronze / Silver / Gold)',
      'Implementação de pipelines ETL',
      'Otimização de performance e monitoramento',
    ],
    deliverables: [
      'Arquitetura de dados implementada',
      'Pipelines ETL funcionais',
      'Documentação da arquitetura',
      'Dashboards de monitoramento',
    ],
  },
  {
    id: 'bi',
    icon: FaChartLine,
    tag: 'BI',
    title: 'Business Intelligence',
    description:
      'Dashboards, relatórios automatizados e visualizações que transformam dados em insight acionável. Informação clara para a sua equipe decidir.',
    idealFor: [
      'Gestores que precisam de visibilidade sobre a operação',
      'Equipes que lidam com múltiplas fontes de dados',
      'Organizações que querem automatizar relatórios',
    ],
    howWeDo: [
      'Levantamento das necessidades de informação',
      'Modelagem de dados para BI',
      'Desenvolvimento de dashboards',
      'Automação de relatórios e treinamento',
    ],
    deliverables: [
      'Dashboards interativos',
      'Relatórios automatizados',
      'Documentação de uso',
      'Acessos e permissões configurados',
    ],
  },
  {
    id: 'automacao',
    icon: FaGears,
    tag: 'Automação',
    title: 'Automação & Integração',
    description:
      'Integração de sistemas, automação de processos e otimização de workflows. Processos mais rápidos, com menos erro e mais produtividade.',
    idealFor: [
      'Empresas com processos manuais repetitivos',
      'Organizações que usam múltiplos sistemas',
      'Negócios que buscam eficiência operacional',
    ],
    howWeDo: [
      'Mapeamento dos processos atuais',
      'Identificação de oportunidades de automação',
      'Desenvolvimento das integrações',
      'Testes, deploy e monitoramento',
    ],
    deliverables: [
      'Sistemas integrados',
      'Processos automatizados',
      'Documentação técnica',
      'Monitoramento e plano de manutenção',
    ],
  },
]

const Column = ({ title, items, ordered }) => {
  const List = ordered ? 'ol' : 'ul'
  return (
    <div>
      <h3 className="font-mono text-xs font-medium uppercase tracking-eyebrow text-kihon-muted">
        {title}
      </h3>
      <List className="mt-4 space-y-2.5">
        {items.map((item, i) => (
          <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-kihon-muted">
            {ordered ? (
              <span className="mt-0.5 font-mono text-xs font-semibold text-kihon-red tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </span>
            ) : (
              <HiCheck className="mt-0.5 h-4 w-4 shrink-0 text-kihon-red" aria-hidden="true" />
            )}
            <span className="min-w-0">{item}</span>
          </li>
        ))}
      </List>
    </div>
  )
}

function KihonServicos() {
  return (
    <KihonLayout>
      <PageHero
        eyebrow="Serviços"
        title="Nada de pacote genérico. O básico bem feito vem primeiro."
        lead="Em cada frente, os fundamentos vêm antes de qualquer camada nova — é o que faz a solução durar."
      />

      <section className="section-kihon bg-kihon-paper">
        <div className="container-max space-y-8 lg:space-y-10">
          {services.map((service) => (
            <Reveal key={service.id} className="scroll-mt-28" >
              <article
                id={service.id}
                className="overflow-hidden rounded-3xl border border-kihon-line bg-white shadow-card"
              >
                <div className="border-b border-kihon-line p-7 sm:p-9">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-kihon-red-tint text-kihon-red-ink">
                      <service.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-3">
                        <h2 className="font-display text-2xl font-bold text-kihon-ink sm:text-3xl">
                          {service.title}
                        </h2>
                        <span className="rounded-md bg-kihon-ink px-2.5 py-1 font-mono text-[0.7rem] font-medium uppercase tracking-wide text-kihon-paper">
                          {service.tag}
                        </span>
                      </div>
                      <p className="mt-3 max-w-prose-kihon text-base leading-relaxed text-kihon-muted">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-8 p-7 sm:p-9 md:grid-cols-3">
                  <Column title="Ideal para quem…" items={service.idealFor} />
                  <Column title="Como fazemos" items={service.howWeDo} ordered />
                  <Column title="Entregáveis típicos" items={service.deliverables} />
                </div>

                <div className="border-t border-kihon-line bg-kihon-surface px-7 py-5 sm:px-9">
                  <Link to="/contato" className="group inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-kihon-red-ink">
                    Conversar sobre {service.tag === 'Dev' ? 'desenvolvimento' : service.title.toLowerCase()}
                    <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCTA />
    </KihonLayout>
  )
}

export default KihonServicos
