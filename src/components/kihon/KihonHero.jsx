import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const KihonHero = () => {
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
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-kihon-black relative overflow-hidden">
      {/* Background Pattern - sutil */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-max relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-kihon-white mb-6 leading-tight"
          >
            O básico bem feito.
            <br />
            <span className="text-kihon-red">Tecnologia com fundamentos sólidos.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-kihon-gray-medium mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Desenvolvemos soluções digitais com foco em processos, performance e clareza – 
            sem promessas vazias, só trabalho bem feito desde a base.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/contato"
              className="bg-kihon-red hover:bg-kihon-red/90 text-kihon-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-lg transform hover:scale-105"
            >
              Fale com a Kihon
            </Link>
            <Link
              to="/servicos"
              className="bg-transparent hover:bg-kihon-dark/50 text-kihon-gray-light border-2 border-kihon-gray-medium hover:border-kihon-red font-semibold py-4 px-8 rounded-lg transition-all duration-200 text-lg"
            >
              Veja nossos serviços
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default KihonHero

