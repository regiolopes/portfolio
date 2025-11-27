import React from 'react'
import { motion } from 'framer-motion'

const WhyKihon = () => {
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

  return (
    <section className="section-padding bg-kihon-white">
      <div className="container-max">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-display font-bold text-kihon-dark mb-6"
          >
            Por que Kihon?
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="bg-kihon-gray-light rounded-xl p-8 md:p-10 mb-8"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="text-6xl md:text-7xl font-display font-bold text-kihon-red mb-4 md:mb-0">
                基本
              </div>
              <div className="text-left md:text-left">
                <p className="text-kihon-dark text-lg leading-relaxed mb-4">
                  <strong>Kihon (基本)</strong> vem do Karatê e significa "básico" ou "fundamentos". 
                  No treino de artes marciais, o kihon é a base de tudo: movimentos repetidos 
                  até a perfeição, disciplina constante, melhoria contínua.
                </p>
                <p className="text-kihon-dark text-lg leading-relaxed">
                  Aplicamos essa filosofia à tecnologia: fazemos o básico tão bem feito que vira 
                  excelência. Serviços sólidos desde a base, sem modinhas, sem promessas vazias. 
                  Só trabalho bem feito.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-kihon-dark text-lg leading-relaxed"
          >
            Fundamentos fortes: organização, qualidade, clareza. Disciplina do Karatê: processos 
            bem definidos, melhoria contínua, respeito ao cliente. Tecnologia acessível: linguagem 
            simples, sem "tecniquês" desnecessário. Foco em resultado: não vendemos "modinha", 
            e sim o que funciona e é sustentável.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyKihon

