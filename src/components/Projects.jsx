import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaDatabase, FaChartLine, FaCogs, FaCode } from 'react-icons/fa'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const projects = [
    {
      id: 1,
      title: "Sistema de Artes Marciais - Dojo Admin",
      description: "Sistema completo de gerenciamento para academias de artes marciais, desenvolvido para automatizar processos administrativos e melhorar a experiência dos alunos e instrutores.",
      image: "/assets/dojoadmin.png",
      categories: ["software-development"],
      technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript", "PostgreSQL", "Poetry"],
      github: "https://github.com/regiolopes/dojo-admin",
      demo: "",
      features: [
        "Gerenciamento completo de alunos e instrutores",
        "Sistema de exames e graduações",
        "Controle de frequência e presença",
        "Gestão de matrículas e mensalidades",
        "Relatórios e dashboards administrativos"
      ]
    },
    {
      id: 2,
      title: "Data Visualization - OTRS (Solução de Gerenciamento de Serviços) com Metabase",
      description: "Plataforma de visualização de dados implementada com Metabase, para monitorar e analisar o desempenho dos agentes de suporte do OTRS.",
      image: "/assets/meta_otrs.png",
      categories: ["data-visualization", "data-engineering"],
      technologies: ["Metabase", "SQL", "PostgreSQL"],
      github: "https://github.com/regiolopes/azure-data-platform",
      demo: "",
      features: [
        "Visualização de dados dos agentes de suporte do OTRS",
        "Monitoramento de desempenho dos agentes",
        "Análise de tickets e chamados",
        "Relatórios e dashboards personalizáveis",
        "View Materializada no OTRS",
        "Configuração do Metabase em ambiente on-premise"
      ]
    },
    {
      id: 3,
      title: "Fec Calendar",
      description: "Feito para uso pessoal. App que sincroniza os jogos do Fortaleza EC (Meu time do Coração) com meu calendário pessoal do Google Calendar.",
      image: "/assets/image.png",
      categories: ["software-development"],
      technologies: ["Python", "Google Calendar API", "API-Sports"],
      github: "",
      demo: "",
      features: [
        "Sincronização automática de jogos do Fortaleza EC",
        "Integração com Google Calendar API",
        "Consumo de dados da API-Sports",
        "Atualização automática do calendário pessoal"
      ]
    },
    {
      id: 4,
      title: "FornecedoraWEB",
      description: "Sistema interno desenvolvido para o Grupo Fornecedora, projetado para otimizar e controlar processos internos da organização. A solução oferece funcionalidades personalizadas e complementares ao ERP, atendendo necessidades específicas que não são suportadas diretamente pelo sistema principal, garantindo maior eficiência operacional e integração entre departamentos.",
      image: "/assets/fornecedoraweb.png",
      categories: ["software-development"],
      technologies: ["Node.js", "React.js", "PostgreSQL", "SQL Server", "HTML", "CSS", "JSON Web Token"],
      github: "",
      demo: "",
      features: [
        "Controle completo de processos internos",
        "Funcionalidades personalizadas complementares ao ERP",
        "Integração com sistemas existentes",
        "Interface intuitiva para gestão operacional",
        "Relatórios e dashboards personalizados",
        "Automatização de workflows internos"
      ]
    },
    {
      id: 5,
      title: "Data Lake - AWS",
      description: "Solução completa de Data Lake implementada na AWS, projetada para armazenar, processar e analisar grandes volumes de dados de forma eficiente e econômica. A arquitetura utiliza serviços gerenciados da AWS para garantir baixo custo operacional, atualizações rápidas e consultas de alta performance através do formato Parquet, proporcionando uma infraestrutura de dados escalável e otimizada.",
      image: "/assets/datalk_aws.png",
      categories: ["data-engineering", "cloud"],
      technologies: ["AWS Glue", "AWS Athena", "Amazon S3", "Parquet", "Amazon QuickSight", "Python"],
      github: "",
      demo: "",
      features: [
        "Orquestração e processamento de dados com AWS Glue",
        "Consultas SQL rápidas e eficientes com AWS Athena",
        "Armazenamento otimizado em formato Parquet no S3",
        "Visualização de dados com Amazon QuickSight",
        "Baixo custo de infraestrutura na nuvem",
        "Atualizações e processamento de dados em tempo real"
      ]
    },
    {
      id: 6,
      title: "Open Source / On Premises Data Lake",
      description: "Solução completa de Data Lake funcional em qualquer ambiente On-Premises Linux utilizando exclusivamente ferramentas Open Source. A arquitetura implementa uma camada de dados moderna e escalável, seguindo o padrão medallion (Bronze, Silver, Gold), permitindo processamento eficiente de grandes volumes de dados sem dependência de serviços cloud gerenciados.",
      image: "/api/placeholder/600/400",
      categories: ["data-engineering", "data-visualization"],
      technologies: ["Apache Airflow", "Delta Lake", "Parquet", "Apache Spark", "Metabase", "ClickHouse", "Python"],
      github: "",
      demo: "",
      features: [
        "Orquestração de workflows com Apache Airflow",
        "Armazenamento em camadas Bronze e Silver (Delta Lake e Parquet)",
        "ETL e processamento distribuído com Apache Spark",
        "Visualização de dados com Metabase",
        "Armazenamento Gold otimizado com ClickHouse",
        "Solução 100% Open Source e On-Premises"
      ]
    },
    {
      id: 7,
      title: "Manual da TIC + Chat Bot",
      description: "Sistema integrado de documentação técnica e assistente virtual inteligente. O projeto combina um repositório de documentações em Markdown renderizado com Docsify para navegação web intuitiva, com um Chat Bot desenvolvido usando LangChain e Open Router, capaz de responder dúvidas e questionamentos baseando-se no conteúdo dos documentos Markdown, proporcionando uma experiência de suporte técnico automatizada e eficiente.",
      image: "/api/placeholder/600/400",
      categories: ["software-development"],
      technologies: ["Markdown", "Docsify", "LangChain", "Open Router", "Python", "RAG"],
      github: "",
      demo: "",
      features: [
        "Repositório de documentações em Markdown",
        "Renderização web com Docsify",
        "Chat Bot inteligente com LangChain",
        "Integração com Open Router para LLMs",
        "RAG (Retrieval-Augmented Generation) para respostas baseadas em documentos",
        "Suporte técnico automatizado e contextualizado"
      ]
    },
    // {
    //   id: 3,
    //   title: "API Backend com Node.js e NestJS",
    //   description: "Sistema backend robusto desenvolvido com Node.js e NestJS, oferecendo APIs REST eficientes e seguras para aplicações empresariais.",
    //   image: "/api/placeholder/600/400",
    //   category: "software-development",
    //   technologies: ["Node.js", "NestJS", "PostgreSQL", "JavaScript", "Azure"],
    //   github: "https://github.com/regiolopes/backend-api",
    //   demo: "",
    //   features: [
    //     "Arquitetura modular com NestJS",
    //     "APIs REST documentadas",
    //     "Autenticação e autorização robustas",
    //     "Integração com bancos de dados relacionais",
    //     "Deploy automatizado na Azure"
    //   ]
    // },
    // {
    //   id: 4,
    //   title: "Sistema de Monitoramento de Dados",
    //   description: "Solução de monitoramento e qualidade de dados implementada com Apache Airflow, garantindo a integridade e confiabilidade dos dados processados.",
    //   image: "/api/placeholder/600/400",
    //   category: "data-engineering",
    //   technologies: ["Apache Airflow", "Python", "PostgreSQL", "Azure", "SQL"],
    //   github: "https://github.com/regiolopes/data-monitoring",
    //   demo: "",
    //   features: [
    //     "Orquestração de workflows com Airflow",
    //     "Validação automática de qualidade de dados",
    //     "Alertas em tempo real para anomalias",
    //     "Dashboards de métricas de performance",
    //     "Integração com sistemas de notificação"
    //   ]
    // },
    // {
    //   id: 5,
    //   title: "Migração de Dados para Azure",
    //   description: "Projeto de migração completa de infraestrutura de dados on-premise para Azure, otimizando custos e melhorando a performance dos sistemas.",
    //   image: "/api/placeholder/600/400",
    //   category: "cloud",
    //   technologies: ["Azure", "Azure Data Factory", "Databricks", "SQL", "Python"],
    //   github: "https://github.com/regiolopes/azure-migration",
    //   demo: "",
    //   features: [
    //     "Migração de bancos de dados para Azure SQL",
    //     "Modernização de pipelines de dados",
    //     "Implementação de soluções de backup e recovery",
    //     "Otimização de custos na nuvem",
    //     "Monitoramento de performance pós-migração"
    //   ]
    // },
    // {
    //   id: 6,
    //   title: "Sistema de Suporte Técnico",
    //   description: "Plataforma de suporte técnico desenvolvida para otimizar processos de Help Desk e melhorar a experiência dos usuários internos.",
    //   image: "/api/placeholder/600/400",
    //   category: "software-development",
    //   technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    //   github: "https://github.com/regiolopes/support-system",
    //   demo: "",
    //   features: [
    //     "Sistema de tickets de suporte",
    //     "Base de conhecimento integrada",
    //     "Relatórios de performance do suporte",
    //     "Integração com sistemas corporativos",
    //     "Interface responsiva e intuitiva"
    //   ]
    // }
  ]

  const categories = [
    { id: 'all', name: 'Todos', icon: FaCogs },
    { id: 'software-development', name: 'Desenvolvimento de Software', icon: FaCode },
    { id: 'data-engineering', name: 'Engenharia de Dados', icon: FaDatabase },
    { id: 'data-visualization', name: 'Visualização', icon: FaChartLine },
    { id: 'cloud', name: 'Cloud', icon: FaCogs }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeFilter))

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
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
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Projetos Destacados
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto mb-8"
          >
            Soluções que desenvolvi para resolver problemas reais
          </motion.p>

          {/* Filter buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeFilter === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 border border-gray-200 dark:border-gray-600'
                }`}
              >
                <category.icon />
                {category.name}
              </button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          key={activeFilter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="card overflow-hidden group"
              whileHover={{ y: -5 }}
            >
              <div className="h-64 md:h-80 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center overflow-hidden">
                {project.image && (project.image.includes('dojoadmin.png') || project.image.includes('image.png') || project.image.includes('fornecedoraweb.png') || project.image.includes('datalk_aws.png') || project.image.includes('meta_otrs.png')) ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <FaDatabase className="text-6xl text-primary-600" />
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-700 dark:text-gray-200 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Principais Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 2).map((feature, index) => (
                      <li key={index} className="text-sm text-gray-700 dark:text-gray-200 flex items-start">
                        <span className="text-primary-600 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <FaGithub />
                    <span className="text-sm">Código</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <FaExternalLinkAlt />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
