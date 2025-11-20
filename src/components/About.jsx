import React from 'react'
import { motion } from 'framer-motion'
import { FaDatabase, FaCode, FaChartLine, FaCloud } from 'react-icons/fa'

const About = () => {
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

  const expertise = [
    {
      icon: FaDatabase,
      title: "Engenharia de Dados",
      description: "Pipelines ETL/ELT, data lakes, warehouses e arquiteturas de dados escaláveis"
    },
    {
      icon: FaCode,
      title: "Desenvolvimento",
      description: "Python, Javascript, PHP, SQL, APIs REST, microserviços e desenvolvimento full-stack"
    },
    {
      icon: FaChartLine,
      title: "Análise de Dados",
      description: "Machine Learning, estatística, visualização e business intelligence"
    },
    {
      icon: FaCloud,
      title: "Cloud Computing",
      description: "AWS, Azure, GCP, containers e infraestrutura como código"
    }
  ]

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
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
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6"
        >
          Sobre Mim
        </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Minha Jornada
            </motion.h3>
            <motion.div
              variants={itemVariants}
              className="space-y-4 text-gray-700 dark:text-gray-200 leading-relaxed"
            >
              <p>
                Desde criança, sempre fui curioso sobre como as coisas funcionam. Hoje, canalizo essa curiosidade para o mundo digital como Back-End Developer e Engenheiro de Dados, transformando desafios complexos em soluções que fazem sentido.
              </p>
              <p>
                <strong>💡 O que me move:</strong> Acredito que a tecnologia é uma ponte que conecta pessoas, ideias e oportunidades. Não busco apenas criar sistemas que funcionem, mas soluções com propósito que melhorem processos e contem histórias através dos dados.
              </p>
              <p>
                <strong>🚀 Minha visão:</strong> Para mim, o bom código resolve problemas reais. Gosto de mergulhar fundo nos desafios, buscar padrões e desenhar soluções que unem lógica, clareza e impacto. Busco projetos que desafiem meu pensamento e me permitam transformar dados e tecnologia em valor real.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          >
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="card p-6 text-center"
                whileHover={{ y: -5 }}
              >
                <item.icon className="text-4xl text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
