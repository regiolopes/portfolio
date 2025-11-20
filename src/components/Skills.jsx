import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Linguagens de Programação",
      skills: [
        { name: "Python", level: 80 },
        { name: "JavaScript", level: 65 },
        { name: "SQL", level: 85 },
        { name: "PHP", level: 60 }
      ]
    },
    {
      title: "Cloud",
      skills: [
        { name: "Azure", level: 75 },
        { name: "Google Cloud Platform", level: 60 },
        { name: "AWS", level: 70 },
      ]
    },
    {
      title: "Big Data & Analytics",
      skills: [
        { name: "Databricks", level: 75 },
        { name: "PySpark", level: 70 },
        { name: "Apache Airflow", level: 65 },
        { name: "Azure Data Factory", level: 75 },
        { name: "Azure Blob Storage", level: 70 },
        { name: "Azure Data Lake", level: 75 },
        { name: "AWS Glue", level: 70 },
        { name: "AWS Athena", level: 75 },
        { name: "AWS QuickSight", level: 70 }

      ]
    },
    {
      title: "Bancos de Dados",
      skills: [
        { name: "PostgreSQL", level: 75 },
        { name: "MySQL", level: 70 },
        { name: "SQL Azure", level: 80 },
        { name: "DuckDB", level: 70},
        { name: "ClickHouse", level: 65}
      ]
    },
    {
      title: "Desenvolvimento Backend",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "NestJS", level: 65 },
        { name: "API Development", level: 75 },
        { name: "System Integration", level: 70 },
        { name: "Scrum", level: 70 }
      ]
    },
    {
      title: "Ferramentas & Metodologias",
      skills: [
        { name: "Microsoft Office", level: 80 },
        { name: "Microsoft Excel", level: 75 },
        { name: "Problem Solving", level: 80 },
        { name: "IT Support", level: 75 },
        { name: "English (C1)", level: 75 }
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800">
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
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6"
          >
            Habilidades Técnicas
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto px-4"
          >
            Tecnologias e ferramentas que utilizo no dia a dia para desenvolver soluções de dados
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="card p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
