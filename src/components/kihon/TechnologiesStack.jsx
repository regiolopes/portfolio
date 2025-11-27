import React from 'react'
import { motion } from 'framer-motion'
import { FaPython, FaJs, FaReact, FaNode, FaAws, FaDatabase, FaCloud } from 'react-icons/fa'
import { SiPostgresql, SiApacheairflow, SiMetabase, SiFlask, SiAmazonaws } from 'react-icons/si'

const TechnologiesStack = () => {
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
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const technologies = [
    {
      name: 'Python',
      category: 'LINGUAGEM',
      icon: FaPython,
      color: 'text-blue-500'
    },
    {
      name: 'JavaScript',
      category: 'LINGUAGEM',
      icon: FaJs,
      color: 'text-yellow-400'
    },
    {
      name: 'React.js',
      category: 'FRONTEND',
      icon: FaReact,
      color: 'text-cyan-400'
    },
    {
      name: 'Node.js',
      category: 'BACKEND',
      icon: FaNode,
      color: 'text-green-500'
    },
    {
      name: 'PostgreSQL',
      category: 'DATABASE',
      icon: SiPostgresql,
      color: 'text-blue-600'
    },
    {
      name: 'AWS',
      category: 'CLOUD',
      icon: SiAmazonaws,
      color: 'text-orange-500'
    },
    {
      name: 'Apache Airflow',
      category: 'ORQUESTRAÇÃO',
      icon: SiApacheairflow,
      color: 'text-red-500'
    },
    {
      name: 'Metabase',
      category: 'BI',
      icon: SiMetabase,
      color: 'text-purple-500'
    },
    {
      name: 'Flask',
      category: 'FRAMEWORK',
      icon: SiFlask,
      color: 'text-gray-400'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-kihon-dark via-kihon-black to-kihon-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #E53935 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container-max relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block px-4 py-2 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-semibold">
              TECNOLOGIAS
            </span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4"
          >
            <span className="text-green-400">Stack</span>{' '}
            <span className="text-kihon-white">Tecnológica</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-kihon-gray-medium max-w-3xl mx-auto"
          >
            Utilizamos as tecnologias mais modernas e confiáveis do mercado para criar soluções robustas e escaláveis.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-kihon-dark/50 backdrop-blur-sm rounded-xl p-6 border border-kihon-gray-medium/20 hover:border-kihon-red/50 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`mb-4 ${tech.color} text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon />
                </div>
                <h3 className="text-lg md:text-xl font-display font-bold text-kihon-white mb-2">
                  {tech.name}
                </h3>
                <p className="text-xs md:text-sm text-kihon-gray-medium uppercase tracking-wider">
                  {tech.category}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TechnologiesStack

