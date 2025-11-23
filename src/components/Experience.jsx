import React from 'react'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaMapMarkerAlt, FaBuilding } from 'react-icons/fa'

const Experience = () => {
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
    hidden: { x: -50, opacity: 0, scale: 0.95 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const experiences = [
    {
      title: "Supervisor de Dados e Desenvolvimento",
      company: "Grupo Fornecedora",
      location: "Fortaleza, CE",
      period: "Jul 2021 - Presente",
      description: [
        "Liderança técnica de equipe multidisciplinar, entregando projetos que processam milhões de registros diariamente",
        "Arquitetura e implementação de Data Lakes que reduziram custos de infraestrutura em até 60%",
        "Desenvolvimento de sistemas Full Stack que automatizam processos críticos, aumentando produtividade em 40%",
        "Criação de APIs REST escaláveis que atendem mais de 10.000 requisições/dia com alta disponibilidade",
        "Mentoria técnica e implementação de boas práticas que melhoraram a qualidade do código em 50%"
      ],
      technologies: ["Python", "JavaScript", "Azure", "Databricks", "PySpark", "Node.js", "PostgreSQL"]
    },
    {
      title: "Engenheiro de Dados | DBA",
      company: "FortBrasil",
      location: "Fortaleza, CE",
      period: "Jun 2022 - Jan 2024",
      description: [
        "Otimização de pipelines ETL que reduziram tempo de processamento de 8h para 2h (75% de melhoria)",
        "Implementação de soluções Big Data processando mais de 50GB de dados diariamente com Azure Data Factory",
        "Desenvolvimento de modelos de dados que melhoraram a performance de consultas em até 80%",
        "Criação de dashboards em tempo real que aumentaram a visibilidade de métricas críticas para o negócio",
        "Administração e tuning de bancos SQL que resultaram em economia de 30% em custos de infraestrutura"
      ],
      technologies: ["Azure Data Factory", "Databricks", "PySpark", "SQL", "Azure Cosmos DB", "Transact-SQL"]
    },
    {
      title: "Engenheiro de Dados | Desenvolvedor Full Stack",
      company: "Grupo Fornecedora",
      location: "Fortaleza, CE",
      period: "Aug 2020 - Jun 2022",
      description: [
        "Desenvolvimento de aplicações Full Stack que atendem mais de 500 usuários simultâneos com alta performance",
        "Criação de APIs REST que integram múltiplos sistemas, reduzindo tempo de sincronização em 70%",
        "Implementação de soluções de engenharia de dados que processam terabytes de informações mensalmente",
        "Desenvolvimento de sistemas internos que automatizaram processos manuais, economizando 20h/semana",
        "Arquitetura de soluções escaláveis usando Azure e Node.js que suportam crescimento de 300% no volume de dados"
      ],
      technologies: ["Python", "JavaScript", "Node.js", "Azure", "MySQL", "PostgreSQL", "NestJS"]
    },
    {
      title: "Técnico de Suporte em TI",
      company: "Grupo Fornecedora",
      location: "Fortaleza, CE",
      period: "Aug 2019 - Aug 2020",
      description: [
        "Suporte técnico para usuários internos",
        "Manutenção de sistemas e infraestrutura",
        "Resolução de problemas de hardware e software",
        "Administração de sistemas Windows",
        "Suporte para Help Desk"
      ],
      technologies: ["Microsoft Windows", "Microsoft Office", "Hardware", "Sistemas Operacionais"]
    }
  ]

  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-900">
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
            Experiência Profissional
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto"
          >
            Trajetória de crescimento liderando equipes e entregando soluções de alto impacto
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-700 hidden md:block"></div>

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex items-start md:items-center"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>

                <div className="ml-0 md:ml-16 w-full">
                  <div className="card p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-primary-600 font-semibold mb-2">
                          <FaBuilding className="mr-2" />
                          {exp.company}
                        </div>
                        <div className="flex items-center text-gray-500 text-sm mb-2">
                          <FaMapMarkerAlt className="mr-2" />
                          {exp.location}
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <FaCalendarAlt className="mr-2" />
                          {exp.period}
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Principais Realizações:
                      </h4>
                      <ul className="space-y-2">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <span className="text-primary-600 mr-2">•</span>
                            <span className="text-gray-700 dark:text-gray-200">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Tecnologias Utilizadas:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
