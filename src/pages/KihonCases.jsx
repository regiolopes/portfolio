import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaDatabase, FaCode, FaChartLine, FaCogs } from 'react-icons/fa'
import KihonHeader from '../components/kihon/KihonHeader'
import KihonFooter from '../components/kihon/KihonFooter'

function KihonCases() {
  const [activeFilter, setActiveFilter] = useState('all')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const cases = [
    {
      id: 1,
      title: "Redução de 70% no tempo de gestão",
      client: "Academia de Artes Marciais",
      challenge: "Processos administrativos manuais e demorados, falta de visibilidade sobre alunos e financeiro",
      approach: "Desenvolvimento de sistema completo de gestão com automação de processos, dashboards intuitivos e relatórios automatizados",
      results: [
        "70% de redução no tempo de gestão administrativa",
        "Dashboards intuitivos para tomada de decisão em tempo real",
        "Relatórios automatizados de frequência e financeiro",
        "Melhoria significativa na experiência de alunos e instrutores"
      ],
      image: "/assets/dojoadmin.png",
      category: "software-development",
      categoryName: "Desenvolvimento de Software"
    },
    {
      id: 2,
      title: "Melhoria de 35% no tempo de resolução",
      client: "Equipe de Suporte Técnico",
      challenge: "Falta de visibilidade sobre desempenho de agentes, identificação de gargalos e otimização de processos",
      approach: "Implementação de plataforma de Business Intelligence integrada ao OTRS com visualizações em tempo real",
      results: [
        "35% de melhoria no tempo médio de resolução de tickets",
        "Monitoramento em tempo real do desempenho dos agentes",
        "Identificação automática de gargalos nos processos",
        "Dashboards personalizáveis para diferentes níveis hierárquicos"
      ],
      image: "/assets/meta_otrs.png",
      category: "data-visualization",
      categoryName: "Business Intelligence"
    },
    {
      id: 3,
      title: "Redução de 80% no tempo de processamento",
      client: "Grupo Fornecedora",
      challenge: "Processos internos fragmentados, lentos e com baixa integração entre departamentos",
      approach: "Desenvolvimento de sistema Full Stack complementar ao ERP com funcionalidades personalizadas e automação de workflows",
      results: [
        "80% de redução no tempo de processamento de relatórios",
        "45% de aumento na produtividade operacional",
        "Integração completa entre departamentos",
        "Melhoria na comunicação entre equipes"
      ],
      image: "/assets/fornecedoraweb.png",
      category: "software-development",
      categoryName: "Desenvolvimento Full Stack"
    },
    {
      id: 4,
      title: "Redução de 60% nos custos de infraestrutura",
      client: "Empresa de Tecnologia",
      challenge: "Custos elevados com processamento de dados em soluções tradicionais",
      approach: "Implementação de Data Lake na AWS com arquitetura otimizada usando AWS Glue, Athena e S3 com formato Parquet",
      results: [
        "60% de redução nos custos comparado a soluções tradicionais",
        "Consultas SQL em sub-segundo para terabytes de dados",
        "Processamento eficiente de grandes volumes",
        "Atualizações e processamento de dados em tempo real"
      ],
      image: "/assets/datalk_aws.png",
      category: "data-engineering",
      categoryName: "Engenharia de Dados"
    },
    {
      id: 5,
      title: "Redução de 60% na carga de suporte",
      client: "Equipe de TI",
      challenge: "Alto volume de dúvidas técnicas repetitivas, sobrecarga da equipe de suporte",
      approach: "Desenvolvimento de Chat Bot inteligente com RAG (Retrieval-Augmented Generation) integrado a documentação técnica interativa",
      results: [
        "85% das dúvidas respondidas automaticamente",
        "60% de redução na carga de trabalho do suporte",
        "Tempo de resposta reduzido de horas para segundos",
        "Documentação técnica sempre atualizada e acessível"
      ],
      image: "/api/placeholder/600/400",
      category: "software-development",
      categoryName: "Automação"
    },
    {
      id: 6,
      title: "Custo zero de licenciamento",
      client: "Empresa On-Premises",
      challenge: "Custos elevados de licenciamento e dependência de soluções cloud",
      approach: "Implementação de Data Lake 100% Open Source com arquitetura medallion (Bronze/Silver/Gold) usando Apache Spark, Airflow e ClickHouse",
      results: [
        "Eliminação completa de custos de licenciamento",
        "Controle total sobre os dados e infraestrutura",
        "Performance equivalente a soluções cloud",
        "Processamento de petabytes de dados com eficiência"
      ],
      image: "/api/placeholder/600/400",
      category: "data-engineering",
      categoryName: "Engenharia de Dados"
    }
  ]

  const categories = [
    { id: 'all', name: 'Todos', icon: FaCogs },
    { id: 'software-development', name: 'Desenvolvimento', icon: FaCode },
    { id: 'data-engineering', name: 'Engenharia de Dados', icon: FaDatabase },
    { id: 'data-visualization', name: 'Business Intelligence', icon: FaChartLine }
  ]

  const filteredCases = activeFilter === 'all' 
    ? cases 
    : cases.filter(caseItem => caseItem.category === activeFilter)

  return (
    <div className="min-h-screen bg-kihon-white">
      <KihonHeader />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-kihon-dark text-kihon-white">
          <div className="container-max">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl mx-auto text-center"
            >
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl font-display font-bold mb-6"
              >
                Cases / Portfólio
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl text-kihon-gray-medium leading-relaxed"
              >
                Projetos que provam que a Kihon funciona na prática
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="section-padding bg-kihon-white">
          <div className="container-max">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                      activeFilter === category.id
                        ? 'bg-kihon-red text-kihon-white shadow-lg'
                        : 'bg-kihon-gray-light text-kihon-dark hover:bg-kihon-gray-medium/20 border border-kihon-gray-medium/30'
                    }`}
                  >
                    <category.icon />
                    {category.name}
                  </button>
                ))}
              </div>

              <motion.div
                key={activeFilter}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredCases.map((caseItem) => (
                  <motion.div
                    key={caseItem.id}
                    variants={itemVariants}
                    className="bg-kihon-gray-light rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 border border-kihon-gray-light"
                  >
                    <div className="h-48 bg-gradient-to-br from-kihon-dark to-kihon-black flex items-center justify-center overflow-hidden">
                      {caseItem.image && (caseItem.image.includes('dojoadmin.png') || caseItem.image.includes('fornecedoraweb.png') || caseItem.image.includes('datalk_aws.png') || caseItem.image.includes('meta_otrs.png')) ? (
                        <img 
                          src={caseItem.image} 
                          alt={caseItem.title}
                          className="w-full h-full object-contain p-4"
                        />
                      ) : (
                        <FaDatabase className="text-6xl text-kihon-red" />
                      )}
                    </div>
                    
                    <div className="p-6">
                      <div className="mb-2">
                        <span className="text-xs font-semibold text-kihon-red uppercase tracking-wide">
                          {caseItem.categoryName}
                        </span>
                      </div>
                      <h3 className="text-xl font-display font-semibold text-kihon-dark mb-2">
                        {caseItem.title}
                      </h3>
                      <p className="text-sm text-kihon-dark/70 mb-4">
                        <strong>Cliente:</strong> {caseItem.client}
                      </p>
                      <div className="mb-4">
                        <p className="text-sm text-kihon-dark/80 mb-2">
                          <strong>Desafio:</strong> {caseItem.challenge}
                        </p>
                        <p className="text-sm text-kihon-dark/80 mb-3">
                          <strong>Abordagem:</strong> {caseItem.approach}
                        </p>
                        <div>
                          <p className="text-sm font-semibold text-kihon-dark mb-2">Resultados:</p>
                          <ul className="space-y-1">
                            {caseItem.results.map((result, index) => (
                              <li key={index} className="text-sm text-kihon-dark/70 flex items-start">
                                <span className="text-kihon-red mr-2">•</span>
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <KihonFooter />
    </div>
  )
}

export default KihonCases

