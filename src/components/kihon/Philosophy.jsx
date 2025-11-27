import React from 'react'
import { motion } from 'framer-motion'
import { FaShieldAlt, FaBullseye, FaSync } from 'react-icons/fa'

const Philosophy = () => {
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

  const principles = [
    {
      icon: FaShieldAlt,
      title: 'Disciplina',
      description: 'Processos claros, prazos definidos, comunicação constante.'
    },
    {
      icon: FaBullseye,
      title: 'Exatidão',
      description: 'Qualidade no detalhe, do código ao relatório final.'
    },
    {
      icon: FaSync,
      title: 'Constância',
      description: 'Melhoria contínua, iterações pequenas e consistentes.'
    }
  ]

  return (
    <section className="section-padding bg-kihon-dark">
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
            className="text-3xl md:text-4xl font-display font-bold text-kihon-white mb-4"
          >
            Nossa forma de treinar o básico
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-kihon-gray-medium max-w-2xl mx-auto"
          >
            Três pilares que guiam cada projeto
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 md:gap-12"
        >
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <div className="text-kihon-red mb-4 flex justify-center">
                <principle.icon size={48} />
              </div>
              <h3 className="text-2xl font-display font-semibold text-kihon-white mb-4">
                {principle.title}
              </h3>
              <p className="text-kihon-gray-medium leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Philosophy

