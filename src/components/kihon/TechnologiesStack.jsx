import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { FaPython, FaReact, FaNode } from 'react-icons/fa'
import {
  SiOpenai, SiPytorch, SiTensorflow, SiScikitlearn, SiAmazon, SiApachespark,
  SiApachekafka, SiApacheairflow, SiSnowflake, SiJavascript, SiTypescript,
  SiFlutter, SiDocker, SiKubernetes, SiTerraform, SiDatabricks, SiMetabase,
  SiPostgresql,
} from 'react-icons/si'
import { TbBrandAzure } from 'react-icons/tb'
import SectionHeading from './SectionHeading'

// Um único carrossel controlável (setas + trackpad/toque/teclado).
const techs = [
  { name: 'OpenAI & LLMs', category: 'IA generativa', icon: SiOpenai, color: 'text-emerald-400' },
  { name: 'PyTorch', category: 'Deep learning', icon: SiPytorch, color: 'text-orange-500' },
  { name: 'TensorFlow', category: 'Deep learning', icon: SiTensorflow, color: 'text-orange-400' },
  { name: 'Scikit-learn', category: 'Machine learning', icon: SiScikitlearn, color: 'text-sky-400' },
  { name: 'AWS', category: 'Cloud', icon: SiAmazon, color: 'text-orange-400' },
  { name: 'Microsoft Azure', category: 'Cloud', icon: TbBrandAzure, color: 'text-sky-400' },
  { name: 'Apache Spark', category: 'Big data', icon: SiApachespark, color: 'text-amber-400' },
  { name: 'Apache Kafka', category: 'Streaming', icon: SiApachekafka, color: 'text-zinc-300' },
  { name: 'Apache Airflow', category: 'Orquestração', icon: SiApacheairflow, color: 'text-red-400' },
  { name: 'Snowflake', category: 'Data warehouse', icon: SiSnowflake, color: 'text-cyan-400' },
  { name: 'Python', category: 'Linguagem', icon: FaPython, color: 'text-blue-400' },
  { name: 'JavaScript', category: 'Linguagem', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'TypeScript', category: 'Linguagem', icon: SiTypescript, color: 'text-blue-500' },
  { name: 'Flutter', category: 'Mobile / UI', icon: SiFlutter, color: 'text-cyan-400' },
  { name: 'React', category: 'Frontend', icon: FaReact, color: 'text-cyan-300' },
  { name: 'Node.js', category: 'Backend', icon: FaNode, color: 'text-green-500' },
  { name: 'Docker', category: 'Containers', icon: SiDocker, color: 'text-blue-500' },
  { name: 'Kubernetes', category: 'Orquestração', icon: SiKubernetes, color: 'text-blue-400' },
  { name: 'Terraform', category: 'IaC', icon: SiTerraform, color: 'text-purple-400' },
  { name: 'Databricks', category: 'Lakehouse', icon: SiDatabricks, color: 'text-orange-400' },
  { name: 'Metabase', category: 'BI', icon: SiMetabase, color: 'text-violet-400' },
  { name: 'PostgreSQL', category: 'Database', icon: SiPostgresql, color: 'text-blue-500' },
]

const TechCard = ({ name, category, icon: Icon, color }) => (
  <li className="w-[10.5rem] shrink-0 snap-start sm:w-[12rem]">
    <div className="group flex h-full flex-col items-center rounded-xl border border-white/10 bg-white/[0.04] p-5 text-center backdrop-blur-sm transition-colors duration-300 hover:border-kihon-red/40">
      <span className={`text-3xl transition-transform duration-300 group-hover:scale-110 ${color}`}>
        <Icon aria-hidden="true" />
      </span>
      <h3 className="mt-3 font-display text-base font-semibold leading-tight text-kihon-paper">
        {name}
      </h3>
      <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-wide text-kihon-faint">
        {category}
      </p>
    </div>
  </li>
)

const ArrowButton = ({ dir, onClick, disabled }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    aria-label={dir === 'prev' ? 'Tecnologias anteriores' : 'Próximas tecnologias'}
    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-kihon-chalk transition-colors hover:border-kihon-red hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-kihon-red/35 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-white/15 disabled:hover:text-kihon-chalk"
  >
    {dir === 'prev' ? (
      <HiChevronLeft className="h-6 w-6" aria-hidden="true" />
    ) : (
      <HiChevronRight className="h-6 w-6" aria-hidden="true" />
    )}
  </button>
)

const TechnologiesStack = () => {
  const scrollerRef = useRef(null)
  const reduce = useReducedMotion()
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const updateEdges = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    setAtStart(el.scrollLeft <= 2)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2)
  }, [])

  useEffect(() => {
    updateEdges()
    const el = scrollerRef.current
    if (!el) return
    el.addEventListener('scroll', updateEdges, { passive: true })
    window.addEventListener('resize', updateEdges)
    return () => {
      el.removeEventListener('scroll', updateEdges)
      window.removeEventListener('resize', updateEdges)
    }
  }, [updateEdges])

  const scrollByPage = (direction) => {
    const el = scrollerRef.current
    if (!el) return
    const amount = Math.max(el.clientWidth * 0.8, 240)
    el.scrollBy({ left: direction * amount, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <section id="tecnologias" className="section-kihon relative overflow-hidden bg-kihon-ink">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle, #E53935 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />
      <div className="container-max relative z-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            onInk
            align="left"
            eyebrow="Stacks tecnológicas"
            title="Ferramentas que o mercado valoriza, aplicadas com critério"
            lead="Da IA ao ecossistema AWS e Azure — passando por Python, JavaScript e Flutter. Arraste ou use as setas para explorar."
          />
          <div className="hidden shrink-0 gap-2 md:flex">
            <ArrowButton dir="prev" onClick={() => scrollByPage(-1)} disabled={atStart} />
            <ArrowButton dir="next" onClick={() => scrollByPage(1)} disabled={atEnd} />
          </div>
        </div>

        <ul
          ref={scrollerRef}
          tabIndex={0}
          aria-label="Carrossel de tecnologias"
          className="scrollbar-none mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kihon-red/50"
          style={{ overscrollBehaviorX: 'contain' }}
        >
          {techs.map((t) => (
            <TechCard key={t.name} {...t} />
          ))}
        </ul>

        {/* Setas no mobile */}
        <div className="mt-6 flex justify-center gap-3 md:hidden">
          <ArrowButton dir="prev" onClick={() => scrollByPage(-1)} disabled={atStart} />
          <ArrowButton dir="next" onClick={() => scrollByPage(1)} disabled={atEnd} />
        </div>
      </div>
    </section>
  )
}

export default TechnologiesStack
