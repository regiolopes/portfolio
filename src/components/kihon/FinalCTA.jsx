import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const FinalCTA = () => {
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
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <section className="section-padding bg-kihon-red">
      <div className="container-max">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-kihon-white mb-6"
          >
            Vamos começar pelo básico?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-kihon-white/90 mb-10 leading-relaxed"
          >
            Conte o seu desafio, a Kihon cuida da base.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              to="/contato"
              className="bg-kihon-white hover:bg-kihon-gray-light text-kihon-red font-semibold py-4 px-10 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-lg inline-block transform hover:scale-105"
            >
              Enviar mensagem
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalCTA

