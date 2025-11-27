import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaDatabase } from 'react-icons/fa'

const CasesHighlight = () => {
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

  // Reutilizando projetos do portfólio como cases
  const cases = [
    {
      id: 1,
      title: "Redução de 70% no tempo de gestão",
      client: "Academia de Artes Marciais",
      challenge: "Processos administrativos manuais e demorados",
      approach: "Sistema completo de gestão com automação de processos",
      results: [
        "70% de redução no tempo de gestão",
        "Dashboards intuitivos para tomada de decisão",
        "Relatórios automatizados"
      ],
      image: "/assets/dojoadmin.png",
      category: "Desenvolvimento de Software"
    },
    {
      id: 2,
      title: "Melhoria de 35% no tempo de resolução",
      client: "Equipe de Suporte Técnico",
      challenge: "Falta de visibilidade sobre desempenho e gargalos",
      approach: "Plataforma de BI integrada ao OTRS",
      results: [
        "35% de melhoria no tempo médio de resolução",
        "Monitoramento em tempo real",
        "Identificação automática de gargalos"
      ],
      image: "/assets/meta_otrs.png",
      category: "Business Intelligence"
    },
    {
      id: 3,
      title: "Redução de 80% no tempo de processamento",
      client: "Grupo Fornecedora",
      challenge: "Processos internos fragmentados e lentos",
      approach: "Sistema Full Stack complementar ao ERP",
      results: [
        "80% de redução no tempo de processamento de relatórios",
        "45% de aumento na produtividade operacional",
        "Integração completa entre departamentos"
      ],
      image: "/assets/fornecedoraweb.png",
      category: "Desenvolvimento Full Stack"
    },
    {
      id: 4,
      title: "Redução de 60% nos custos de infraestrutura",
      client: "Empresa de Tecnologia",
      challenge: "Custos elevados com processamento de dados",
      approach: "Data Lake na AWS com arquitetura otimizada",
      results: [
        "60% de redução nos custos",
        "Consultas SQL em sub-segundo",
        "Processamento de terabytes com eficiência"
      ],
      image: "/assets/datalk_aws.png",
      category: "Engenharia de Dados"
    },
    {
      id: 5,
      title: "Redução de 60% na carga de suporte",
      client: "Equipe de TI",
      challenge: "Alto volume de dúvidas técnicas repetitivas",
      approach: "Chat Bot inteligente com RAG + documentação interativa",
      results: [
        "85% das dúvidas respondidas automaticamente",
        "60% de redução na carga de trabalho do suporte",
        "Tempo de resposta de horas para segundos"
      ],
      image: "/api/placeholder/600/400",
      category: "Automação"
    },
    {
      id: 6,
      title: "Custo zero de licenciamento",
      client: "Empresa On-Premises",
      challenge: "Custos elevados de licenciamento e dependência de cloud",
      approach: "Data Lake 100% Open Source",
      results: [
        "Eliminação de custos de licenciamento",
        "Controle total sobre os dados",
        "Performance equivalente a soluções cloud"
      ],
      image: "/api/placeholder/600/400",
      category: "Engenharia de Dados"
    }
  ]

  return (
    <section className="section-padding bg-kihon-white">
      <div className="container-max">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-display font-bold text-kihon-dark mb-4"
          >
            Cases / Resultados
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-kihon-dark/80 max-w-2xl mx-auto"
          >
            Projetos que provam que a Kihon funciona na prática
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {cases.slice(0, 6).map((caseItem) => (
            <motion.div
              key={caseItem.id}
              variants={itemVariants}
              className="bg-kihon-gray-light rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 border border-kihon-gray-light group"
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
                    {caseItem.category}
                  </span>
                </div>
                <h3 className="text-xl font-display font-semibold text-kihon-dark mb-2 group-hover:text-kihon-red transition-colors">
                  {caseItem.title}
                </h3>
                <p className="text-sm text-kihon-dark/70 mb-4">
                  <strong>Cliente:</strong> {caseItem.client}
                </p>
                <div className="mb-4">
                  <p className="text-sm text-kihon-dark/80 mb-2">
                    <strong>Desafio:</strong> {caseItem.challenge}
                  </p>
                  <p className="text-sm text-kihon-dark/80">
                    <strong>Abordagem:</strong> {caseItem.approach}
                  </p>
                </div>
                <div className="mb-4">
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
                <Link
                  to="/cases"
                  className="text-kihon-red hover:text-kihon-red/80 font-medium text-sm transition-colors duration-200 inline-flex items-center gap-2"
                >
                  Ver case completo →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/cases"
            className="bg-kihon-red hover:bg-kihon-red/90 text-kihon-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-block"
          >
            Ver todos os cases
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default CasesHighlight

