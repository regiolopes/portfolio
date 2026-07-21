import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { FaDatabase, FaCode, FaChartLine, FaGears } from 'react-icons/fa6'
import KihonLayout from '../components/kihon/KihonLayout'
import PageHero from '../components/kihon/PageHero'
import Reveal from '../components/kihon/Reveal'
import FinalCTA from '../components/kihon/FinalCTA'

const cases = [
  {
    id: 1,
    metric: '70%',
    title: 'menos tempo na gestão administrativa',
    client: 'Academia de artes marciais',
    challenge: 'Processos manuais e demorados, sem visibilidade sobre alunos e financeiro.',
    approach: 'Sistema completo de gestão com automação de processos, dashboards e relatórios automáticos.',
    results: [
      '70% menos tempo em gestão administrativa',
      'Decisão em tempo real com dashboards intuitivos',
      'Relatórios automáticos de frequência e financeiro',
    ],
    image: '/assets/dojoadmin.png',
    category: 'software-development',
    categoryName: 'Desenvolvimento',
  },
  {
    id: 2,
    metric: '35%',
    title: 'mais agilidade na resolução de chamados',
    client: 'Equipe de suporte técnico',
    challenge: 'Sem visibilidade sobre desempenho dos agentes e gargalos do processo.',
    approach: 'Plataforma de BI integrada ao OTRS com visualizações em tempo real.',
    results: [
      '35% mais rápido para resolver tickets',
      'Monitoramento do desempenho em tempo real',
      'Identificação automática de gargalos',
    ],
    image: '/assets/meta_otrs.png',
    category: 'data-visualization',
    categoryName: 'Business Intelligence',
  },
  {
    id: 3,
    metric: '80%',
    title: 'menos tempo no processamento de relatórios',
    client: 'Grupo Fornecedora',
    challenge: 'Processos internos fragmentados e com baixa integração entre departamentos.',
    approach: 'Sistema full stack complementar ao ERP, com automação de workflows.',
    results: [
      '80% menos tempo no processamento de relatórios',
      '45% mais produtividade operacional',
      'Integração completa entre departamentos',
    ],
    image: '/assets/fornecedoraweb.png',
    category: 'software-development',
    categoryName: 'Desenvolvimento Full Stack',
  },
  {
    id: 4,
    metric: '60%',
    title: 'menos custo de infraestrutura de dados',
    client: 'Empresa de tecnologia',
    challenge: 'Custos elevados de processamento em soluções tradicionais.',
    approach: 'Data lake na AWS com Glue, Athena e S3 em formato Parquet.',
    results: [
      '60% menos custo que soluções tradicionais',
      'Consultas SQL em sub-segundo sobre terabytes',
      'Processamento eficiente de grandes volumes',
    ],
    image: '/assets/datalk_aws.png',
    category: 'data-engineering',
    categoryName: 'Engenharia de Dados',
  },
  {
    id: 5,
    metric: '85%',
    title: 'das dúvidas técnicas respondidas na hora',
    client: 'Equipe de TI',
    challenge: 'Alto volume de dúvidas repetitivas sobrecarregando o suporte.',
    approach: 'Chatbot com RAG integrado à documentação técnica interativa.',
    results: [
      '85% das dúvidas respondidas automaticamente',
      '60% menos carga sobre o suporte',
      'Resposta em segundos, não em horas',
    ],
    image: null,
    category: 'software-development',
    categoryName: 'Automação',
  },
  {
    id: 6,
    metric: 'R$ 0',
    title: 'de custo de licenciamento',
    client: 'Empresa on-premises',
    challenge: 'Custos altos de licença e dependência de soluções cloud.',
    approach: 'Data lake 100% open source (Spark, Airflow, ClickHouse) em arquitetura medallion.',
    results: [
      'Zero custo de licenciamento',
      'Controle total sobre dados e infraestrutura',
      'Performance equivalente à nuvem',
    ],
    image: null,
    category: 'data-engineering',
    categoryName: 'Engenharia de Dados',
  },
]

const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'software-development', name: 'Desenvolvimento' },
  { id: 'data-engineering', name: 'Engenharia de Dados' },
  { id: 'data-visualization', name: 'Business Intelligence' },
]

const categoryIcon = {
  'software-development': FaCode,
  'data-engineering': FaDatabase,
  'data-visualization': FaChartLine,
}

function CaseCard({ item }) {
  const Icon = categoryIcon[item.category] || FaGears
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-kihon-line bg-white shadow-card transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-medium">
      <div className="relative flex h-44 items-center justify-center overflow-hidden bg-kihon-ink">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, #E53935 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
        {item.image ? (
          <img
            src={item.image}
            alt={`${item.client} — ${item.metric} ${item.title}`}
            width={600}
            height={400}
            loading="lazy"
            decoding="async"
            className="relative h-full w-full object-contain p-5"
          />
        ) : (
          <Icon className="relative h-14 w-14 text-kihon-red" aria-hidden="true" />
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="font-mono text-[0.7rem] uppercase tracking-eyebrow text-kihon-red-ink">
          {item.categoryName}
        </span>
        <p className="mt-3 flex items-baseline gap-2">
          <span className="font-display text-3xl font-bold tracking-tight text-kihon-ink tabular-nums">
            {item.metric}
          </span>
          <span className="text-sm font-medium leading-snug text-kihon-ink">{item.title}</span>
        </p>
        <p className="mt-3 text-sm text-kihon-muted">
          <span className="font-semibold text-kihon-ink">Cliente:</span> {item.client}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-kihon-muted">
          <span className="font-semibold text-kihon-ink">Desafio:</span> {item.challenge}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-kihon-muted">
          <span className="font-semibold text-kihon-ink">Abordagem:</span> {item.approach}
        </p>
        <ul className="mt-4 space-y-1.5 border-t border-kihon-line pt-4">
          {item.results.map((r) => (
            <li key={r} className="flex items-start gap-2 text-sm text-kihon-muted">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-kihon-red" aria-hidden="true" />
              {r}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

const validCategories = categories.map((c) => c.id)

function KihonCases() {
  const [searchParams, setSearchParams] = useSearchParams()
  const reduce = useReducedMotion()

  const param = searchParams.get('categoria')
  const activeFilter = validCategories.includes(param) ? param : 'all'

  const setActiveFilter = (id) => {
    const next = new URLSearchParams(searchParams)
    if (id === 'all') next.delete('categoria')
    else next.set('categoria', id)
    setSearchParams(next, { replace: true })
  }

  const filtered =
    activeFilter === 'all' ? cases : cases.filter((c) => c.category === activeFilter)

  return (
    <KihonLayout>
      <PageHero
        eyebrow="Cases"
        title="Projetos que provam que a base sólida entrega"
        lead="Resultados reais, com ganhos que aparecem no dia a dia de quem usa."
      />

      <section className="section-kihon bg-kihon-paper">
        <div className="container-max">
          <div
            role="group"
            aria-label="Filtrar cases por categoria"
            className="mb-10 flex flex-wrap justify-center gap-2.5"
          >
            {categories.map((cat) => {
              const active = activeFilter === cat.id
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveFilter(cat.id)}
                  aria-pressed={active}
                  className={`rounded-full px-5 py-2.5 font-sans text-sm font-semibold transition-colors duration-200 ${
                    active
                      ? 'bg-kihon-red text-white shadow-red'
                      : 'border border-kihon-line bg-white text-kihon-ink hover:border-kihon-red/40 hover:text-kihon-red-ink'
                  }`}
                >
                  {cat.name}
                </button>
              )
            })}
          </div>

          <p className="sr-only" aria-live="polite">
            {filtered.length} cases exibidos
          </p>

          <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <CaseCard item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <FinalCTA />
    </KihonLayout>
  )
}

export default KihonCases
