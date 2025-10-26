import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'
import CVGenerator from './CVGenerator'

const Hero = () => {
  const [isCVGeneratorOpen, setIsCVGeneratorOpen] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center section-padding pt-16 md:pt-20 px-4 md:px-6">
      <div className="container-max">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 md:mb-6 rounded-full overflow-hidden border-3 md:border-4 border-white shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <img 
                src="/assets/profile.png" 
                alt="Regio Lopes" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className="w-full h-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center hidden">
                <span className="text-4xl font-bold text-white">R</span>
              </div>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 md:mb-6"
          >
            Olá, eu sou{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
              Regio Lopes
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-6 md:mb-8 font-medium px-4"
          >
            Supervisor de Dados e Desenvolvimento | Engenheiro de Dados | Desenvolvedor Back-End
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg lg:text-xl text-gray-500 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Supervisor de Dados e Desenvolvimento com mais de 5 anos de experiência em desenvolvimento BackEnd e Engenharia de Dados. 
            Especialista em criar soluções tecnológicas inovadoras e implementar arquiteturas escaláveis para gerenciamento e análise de dados.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4"
          >
            <motion.a
              href="#projects"
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Projetos
            </motion.a>
            
            <motion.a
              href="#contact"
              className="btn-secondary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Entrar em Contato
            </motion.a>

            <motion.button
              onClick={() => setIsCVGeneratorOpen(true)}
              className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-2 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload />
              Download CV
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 mt-12"
          >
            <motion.a
              href="https://github.com/regiolopes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-600 transition-colors duration-200"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/regiolopes/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-600 transition-colors duration-200"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:regiolofilho@gmail.com"
              className="text-gray-400 hover:text-primary-600 transition-colors duration-200"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      <CVGenerator 
        isOpen={isCVGeneratorOpen} 
        onClose={() => setIsCVGeneratorOpen(false)} 
      />
    </section>
  )
}

export default Hero
