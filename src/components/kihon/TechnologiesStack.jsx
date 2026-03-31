import React from 'react'
import { motion } from 'framer-motion'
import { FaPython, FaReact, FaNode } from 'react-icons/fa'
import {
  SiOpenai,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiAmazonaws,
  SiMicrosoft,
  SiMicrosoftazure,
  SiApachespark,
  SiApachekafka,
  SiApacheairflow,
  SiSnowflake,
  SiJavascript,
  SiTypescript,
  SiFlutter,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiDatabricks,
  SiMetabase,
  SiPostgresql,
} from 'react-icons/si'

const TechCard = ({ name, category, icon: Icon, color }) => (
  <div className="group w-[min(11.5rem,42vw)] shrink-0 sm:w-[12.5rem] md:w-[13rem]">
    <div className="bg-kihon-dark/50 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-kihon-gray-medium/20 hover:border-kihon-red/50 transition-all duration-300 h-full">
      <div className="flex flex-col items-center text-center">
        <div
          className={`mb-2 md:mb-3 ${color} text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon />
        </div>
        <h3 className="text-sm md:text-base font-display font-bold text-kihon-white mb-1 leading-tight">
          {name}
        </h3>
        <p className="text-[9px] md:text-[10px] text-kihon-gray-medium uppercase tracking-wider leading-snug">
          {category}
        </p>
      </div>
    </div>
  </div>
)

/** Classes em index.css (@keyframes kihon-stack-marquee) — evita purge Tailwind + conflito com Framer no pai */
const ROW_TRACK_CLASSES = [
  'kihon-stack-marquee',
  'kihon-stack-marquee-rev',
  'kihon-stack-marquee-slow',
  'kihon-stack-marquee-slow-rev',
]

function StackMarqueeRow({ items, rowIndex }) {
  const loop = [...items, ...items]
  const trackClass = ROW_TRACK_CLASSES[rowIndex % ROW_TRACK_CLASSES.length]
  return (
    <div className="relative overflow-hidden py-1 motion-reduce:overflow-x-auto motion-reduce:pb-2">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-kihon-black to-transparent sm:w-14 md:w-20" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-kihon-black to-transparent sm:w-14 md:w-20" />
      <div className={`flex w-max gap-4 md:gap-6 py-2 ${trackClass}`}>
        {loop.map((tech, i) => (
          <TechCard key={`${tech.name}-${i}`} {...tech} />
        ))}
      </div>
    </div>
  )
}

const stackGroups = [
  {
    id: 'ia',
    title: 'Inteligência artificial',
    subtitle: 'LLMs, modelos e pipelines de ML que viram produto.',
    items: [
      { name: 'OpenAI & LLMs', category: 'IA GENERATIVA', icon: SiOpenai, color: 'text-emerald-400' },
      { name: 'PyTorch', category: 'DEEP LEARNING', icon: SiPytorch, color: 'text-orange-500' },
      { name: 'TensorFlow', category: 'DEEP LEARNING', icon: SiTensorflow, color: 'text-orange-400' },
      { name: 'Scikit-learn', category: 'MACHINE LEARNING', icon: SiScikitlearn, color: 'text-sky-400' },
    ],
  },
  {
    id: 'bigdata',
    title: 'Big Data & cloud',
    subtitle: 'AWS, Azure e stack de dados em escala.',
    items: [
      { name: 'AWS', category: 'CLOUD', icon: SiAmazonaws, color: 'text-orange-400' },
      { name: 'Microsoft Azure', category: 'CLOUD', icon: SiMicrosoftazure, color: 'text-sky-400' },
      { name: 'Apache Spark', category: 'BIG DATA', icon: SiApachespark, color: 'text-amber-400' },
      { name: 'Apache Kafka', category: 'STREAMING', icon: SiApachekafka, color: 'text-zinc-300' },
      { name: 'Apache Airflow', category: 'ORQUESTRAÇÃO', icon: SiApacheairflow, color: 'text-red-400' },
      { name: 'Snowflake', category: 'DATA WAREHOUSE', icon: SiSnowflake, color: 'text-cyan-400' },
      {
        name: 'Microsoft Fabric',
        category: 'ANALYTICS UNIFICADO',
        icon: SiMicrosoft,
        color: 'text-violet-400',
      },
      { name: 'AWS Glue', category: 'ETL / DATA CATALOG', icon: SiAmazonaws, color: 'text-orange-300' },
    ],
  },
  {
    id: 'langs',
    title: 'Linguagens & ecossistemas',
    subtitle: 'Python, JavaScript, Flutter e bases sólidas de engenharia.',
    items: [
      { name: 'Python', category: 'LINGUAGEM', icon: FaPython, color: 'text-blue-400' },
      { name: 'JavaScript', category: 'LINGUAGEM', icon: SiJavascript, color: 'text-yellow-400' },
      { name: 'TypeScript', category: 'LINGUAGEM', icon: SiTypescript, color: 'text-blue-500' },
      { name: 'Flutter', category: 'MOBILE / UI', icon: SiFlutter, color: 'text-cyan-400' },
      { name: 'React', category: 'FRONTEND', icon: FaReact, color: 'text-cyan-300' },
      { name: 'Node.js', category: 'BACKEND', icon: FaNode, color: 'text-green-500' },
    ],
  },
  {
    id: 'ops',
    title: 'DevOps, dados & BI',
    subtitle: 'O que empresas costumam buscar em projetos sérios.',
    items: [
      { name: 'Docker', category: 'CONTAINERS', icon: SiDocker, color: 'text-blue-500' },
      { name: 'Kubernetes', category: 'ORQUESTRAÇÃO', icon: SiKubernetes, color: 'text-blue-400' },
      { name: 'Terraform', category: 'IaC', icon: SiTerraform, color: 'text-purple-400' },
      { name: 'Databricks', category: 'LAKEHOUSE', icon: SiDatabricks, color: 'text-orange-400' },
      { name: 'Metabase', category: 'BI', icon: SiMetabase, color: 'text-violet-400' },
      { name: 'PostgreSQL', category: 'DATABASE', icon: SiPostgresql, color: 'text-blue-500' },
    ],
  },
]

const TechnologiesStack = () => {
  const headerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const headerItemVariants = {
    hidden: { y: 36, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section className="section-padding bg-gradient-to-br from-kihon-dark via-kihon-black to-kihon-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, #E53935 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="container-max relative z-10">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-14"
        >
          <motion.div variants={headerItemVariants} className="mb-4">
            <span className="inline-block px-4 py-2 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-semibold">
              STACKS TECNOLÓGICAS
            </span>
          </motion.div>
          <motion.h2
            variants={headerItemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4"
          >
            <span className="text-green-400">IA</span>
            <span className="text-kihon-white">, Big Data, cloud e linguagens </span>
            <span className="text-kihon-red">que o mercado valoriza</span>
          </motion.h2>
          <motion.p
            variants={headerItemVariants}
            className="text-lg md:text-xl text-kihon-gray-medium max-w-3xl mx-auto leading-relaxed"
          >
            Da inteligência artificial ao ecossistema AWS e Azure — passando por Python, JavaScript e
            Flutter — mostramos um recorte da stack que costuma{' '}
            <span className="text-kihon-white/90 font-medium">chamar atenção em empresas</span> que
            buscam inovação com entrega sólida.
          </motion.p>
        </motion.div>

        <div className="space-y-12 md:space-y-14">
          {stackGroups.map((group, index) => (
            <div key={group.id}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="mb-5 md:mb-6 text-center md:text-left max-w-3xl md:mx-0 mx-auto"
              >
                <h3 className="text-xl md:text-2xl font-display font-bold text-kihon-white mb-2">
                  {group.title}
                </h3>
                <p className="text-kihon-gray-medium text-sm md:text-base">{group.subtitle}</p>
              </motion.div>
              {/* Fora do motion.div: transform do Framer pode impedir animação CSS no filho */}
              <StackMarqueeRow items={group.items} rowIndex={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnologiesStack
