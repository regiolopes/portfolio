import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <h3 className="text-3xl font-bold mb-8">Regio</h3>
            
            <div className="flex justify-center space-x-6 mb-8">
              <motion.a
                href="https://github.com/regiolopes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/regiolopes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:regiolofilho@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEnvelope size={24} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="border-t border-gray-800 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-center items-center">
              <p className="text-gray-400">
                © {currentYear} Regio. Todos os direitos reservados.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
