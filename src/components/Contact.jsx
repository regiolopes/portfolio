import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaCheck } from 'react-icons/fa'

const Contact = () => {

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

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "regio.lopes@kihon.dev.br",
      link: "mailto:regio.lopes@kihon.dev.br"
    },
    {
      icon: FaPhone,
      title: "WhatsApp",
      value: "+55 (85) 99727-5766",
      link: "https://wa.me/+5585997275766"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Localização",
      value: "Fortaleza, CE - Brasil",
      link: null
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/regiolopes",
      link: "https://www.linkedin.com/in/regiolopes/"
    },
    {
      icon: FaGithub,
      title: "GitHub",
      value: "github.com/regiolopes",
      link: "https://github.com/regiolopes"
    }
  ]

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-900">
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
            Vamos Conversar
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto"
          >
            Vamos transformar suas ideias em soluções tecnológicas de alto impacto? Entre em contato e descubra como posso agregar valor ao seu projeto ou empresa.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
            >
              Informações de Contato
            </motion.h3>
            
            <motion.div
              variants={containerVariants}
              className="space-y-6 mb-12"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-4"
                  whileHover={{ x: 5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <info.icon className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-700 dark:text-gray-200">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-6 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl border border-primary-200 dark:border-primary-700"
            >
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Disponibilidade
              </h4>
              <p className="text-gray-700 dark:text-gray-200 mb-4">
                Estou disponível para <strong className="text-primary-600 dark:text-primary-400">projetos desafiadores</strong>, 
                <strong className="text-primary-600 dark:text-primary-400"> oportunidades de colaboração</strong> e 
                <strong className="text-primary-600 dark:text-primary-400"> consultorias técnicas</strong>. 
                Se você precisa de soluções em dados, desenvolvimento Full Stack ou IA, vamos conversar sobre como posso ajudar a transformar sua visão em realidade!
              </p>
              <div className="flex items-center text-green-600 dark:text-green-400">
                <FaCheck className="mr-2" />
                <span className="font-medium">Disponível para novos projetos</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
