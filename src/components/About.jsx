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
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const expertise = [
    {
      icon: FaDatabase,
      title: "Engenharia de Dados",
      description: "Data Lakes (AWS, On-Premises), pipelines ETL/ELT com Apache Spark, arquiteturas medallion (Bronze/Silver/Gold) e otimização de custos"
    },
    {
      icon: FaCode,
      title: "Desenvolvimento Full Stack",
      description: "React.js, Node.js, Python, APIs REST, integração de sistemas e soluções end-to-end escaláveis"
    },
    {
      icon: FaChartLine,
      title: "Inteligência Artificial",
      description: "ChatBots com LangChain, RAG (Retrieval-Augmented Generation), integração com LLMs e automação inteligente"
    },
    {
      icon: FaCloud,
      title: "Cloud & Analytics",
      description: "AWS (Glue, Athena, S3), Azure (Data Factory, Databricks), Metabase, QuickSight e visualização de dados"
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
              className="space-y-5 text-gray-700 dark:text-gray-200 leading-relaxed text-base md:text-lg"
            >
              <p>
                Especialista em transformar <strong className="text-primary-600 dark:text-primary-400">dados em decisões estratégicas</strong> e 
                <strong className="text-primary-600 dark:text-primary-400"> ideias em soluções tecnológicas escaláveis</strong>. 
                Com mais de 5 anos de experiência, já desenvolvi sistemas que processam milhões de registros, 
                implementei arquiteturas de Data Lake que reduziram custos em até 60% e criei aplicações Full Stack 
                que automatizam processos críticos para empresas.
              </p>
              <p>
                <strong className="text-primary-600 dark:text-primary-400">💡 O que me diferencia:</strong> Não apenas desenvolvo código, mas 
                <strong> arquiteturas que crescem com o negócio</strong>. Trabalho com tecnologias de ponta como AWS, Azure, 
                Apache Spark, React.js, Node.js e soluções de IA (RAG, ChatBots, LangChain), sempre priorizando 
                <strong> performance, escalabilidade e custo-benefício</strong>.
              </p>
              <p>
                <strong className="text-primary-600 dark:text-primary-400">🚀 Meu compromisso:</strong> Entregar soluções que 
                <strong> geram valor mensurável</strong> - seja reduzindo tempo de processamento, otimizando custos de infraestrutura 
                ou criando experiências que encantam usuários. Cada projeto é uma oportunidade de impactar positivamente 
                o negócio dos meus clientes e parceiros.
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
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
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
