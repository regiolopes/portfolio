import React from 'react'
import { motion } from 'framer-motion'
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa'

const Certifications = () => {
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

  const certifications = [
    {
      name: "Microsoft Certified: Azure Data Engineer Associate",
      authority: "Microsoft",
      date: "Jul 2023",
      expiry: "Jul 2025",
      license: "48C4D4D55B914E12",
      url: "https://learn.microsoft.com/api/credentials/share/pt-br/RegioLopes-2937/48C4D4D55B914E12"
    },
    {
      name: "Microsoft Certified: Azure Data Fundamentals",
      authority: "Microsoft",
      date: "Jul 2023",
      expiry: "",
      license: "355BE76624E271F8",
      url: "https://learn.microsoft.com/api/credentials/share/pt-br/RegioLopes-2937/355BE76624E271F8"
    },
    {
      name: "Certificado oficial EF SET 68/100 (C1 Advanced)",
      authority: "EF Standard English Test (EF SET)",
      date: "May 2024",
      expiry: "",
      license: "",
      url: "https://cert.efset.org/DDqoom"
    },
    {
      name: "Scrum Foundation Professional Certificate",
      authority: "Scrum Foundation",
      date: "Jun 2020",
      expiry: "",
      license: "TLSVGGVZHZ-MMPPQWSX-RPFHRLFRSP",
      url: "https://drive.google.com/file/d/1VNRIangPaCRV0tO7K8hbhg_kwj3UTMeQ/view?usp=sharing"
    }
  ]

  return (
    <section id="certifications" className="section-padding bg-white dark:bg-gray-900">
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
            Certificações
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto"
          >
            Certificações profissionais que validam minha expertise técnica
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card p-6 text-center"
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCertificate className="text-2xl text-primary-600" />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {cert.name}
              </h3>
              
              <p className="text-sm text-gray-700 dark:text-gray-200 mb-2">
                {cert.authority}
              </p>
              
              <p className="text-xs text-gray-600 dark:text-gray-300 mb-4">
                {cert.date} {cert.expiry && `- ${cert.expiry}`}
              </p>
              
              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors"
                >
                  <FaExternalLinkAlt />
                  Ver Certificado
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
