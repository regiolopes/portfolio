import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaCode, FaDatabase, FaChartLine, FaCogs } from 'react-icons/fa'

const ServicesHighlight = () => {
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

  const services = [
    {
      id: 1,
      icon: FaCode,
      title: 'Desenvolvimento Full Stack',
      description: 'Sistemas completos, do backend ao frontend, com arquitetura sólida e código limpo.',
      benefit: 'Soluções personalizadas que crescem com seu negócio.'
    },
    {
      id: 2,
      icon: FaDatabase,
      title: 'Engenharia de Dados',
      description: 'Data Lakes, pipelines ETL, arquiteturas de dados escaláveis e eficientes.',
      benefit: 'Dados organizados e acessíveis para decisões estratégicas.'
    },
    {
      id: 3,
      icon: FaChartLine,
      title: 'Business Intelligence',
      description: 'Dashboards, relatórios automatizados e visualizações que transformam dados em insights.',
      benefit: 'Informação clara e acionável para sua equipe.'
    },
    {
      id: 4,
      icon: FaCogs,
      title: 'Automação e Integração',
      description: 'Integração de sistemas, automação de processos e otimização de workflows.',
      benefit: 'Processos mais rápidos, menos erros, mais produtividade.'
    }
  ]

  return (
    <section className="section-padding bg-kihon-gray-light">
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
            O que fazemos
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-kihon-dark/80 max-w-2xl mx-auto"
          >
            Serviços que começam pelos fundamentos e entregam resultados consistentes
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-kihon-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-kihon-gray-light"
            >
              <div className="text-kihon-red mb-4">
                <service.icon size={32} />
              </div>
              <h3 className="text-xl font-display font-semibold text-kihon-dark mb-3">
                {service.title}
              </h3>
              <p className="text-kihon-dark/70 mb-4 leading-relaxed">
                {service.description}
              </p>
              <p className="text-sm text-kihon-red font-medium mb-4">
                {service.benefit}
              </p>
              <Link
                to="/servicos"
                className="text-kihon-red hover:text-kihon-red/80 font-medium text-sm transition-colors duration-200 inline-flex items-center gap-2"
              >
                Saiba mais →
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesHighlight

