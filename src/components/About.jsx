import React from 'react'
import { motion } from 'framer-motion'
import { FaDatabase, FaCode, FaChartLine, FaCloud } from 'react-icons/fa'

const About = () => {
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

  const expertise = [
    {
      icon: FaDatabase,
      title: "Engenharia de Dados",
      description: "Pipelines ETL/ELT, data lakes, warehouses e arquiteturas de dados escaláveis"
    },
    {
      icon: FaCode,
      title: "Desenvolvimento",
      description: "Python, Javascript, PHP, SQL, APIs REST, microserviços e desenvolvimento full-stack"
    },
    {
      icon: FaChartLine,
      title: "Análise de Dados",
      description: "Machine Learning, estatística, visualização e business intelligence"
    },
    {
      icon: FaCloud,
      title: "Cloud Computing",
      description: "AWS, Azure, GCP, containers e infraestrutura como código"
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
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
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6"
        >
          Sobre Mim
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4"
        >
          Engenheiro de Dados e Desenvolvedor de Software apaixonado por criar soluções inovadoras
        </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-bold text-gray-900 mb-6"
            >
              Minha Jornada
            </motion.h3>
            <motion.div
              variants={itemVariants}
              className="space-y-4 text-gray-600 leading-relaxed"
            >
              <p>
                Sou um BackEnd Developer e Engenheiro de Dados com uma paixão por desenvolver soluções tecnológicas inovadoras. 
                Com mais de 5 anos de experiência no setor, tenho um histórico comprovado de sucesso na criação de aplicativos 
                robustos e na implementação de arquiteturas escaláveis para gerenciamento e análise de dados.
              </p>
              <p>
                Minha expertise inclui o desenvolvimento de APIs eficientes e seguras, utilizando linguagens como Python e JavaScript. 
                Trabalho com tecnologias como Azure, Databricks, PySpark, Node.js, PostgreSQL e MySQL para garantir a eficiência 
                e escalabilidade dos aplicativos.
              </p>
              <p>
                Sou especialista em desenvolvimento e integração de sistemas, utilizando ferramentas como Azure Data Factory, 
                Databricks e PySpark para processamento e análise de grandes volumes de dados. Tenho habilidades sólidas de 
                resolução de problemas, pensamento analítico e capacidade de trabalhar em equipe.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="card p-6 text-center"
                whileHover={{ y: -5 }}
              >
                <item.icon className="text-4xl text-primary-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
