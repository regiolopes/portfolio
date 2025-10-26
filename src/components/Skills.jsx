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
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "SQL", level: 95 },
        { name: "Transact-SQL", level: 85 },
        { name: "PHP", level: 80 }
      ]
    },
    {
      title: "Cloud & Azure",
      skills: [
        { name: "Azure", level: 90 },
        { name: "Azure Data Factory", level: 85 },
        { name: "Azure Databricks", level: 90 },
        { name: "Azure Functions", level: 80 },
        { name: "Azure Cosmos DB", level: 85 }
      ]
    },
    {
      title: "Big Data & Analytics",
      skills: [
        { name: "Databricks", level: 90 },
        { name: "PySpark", level: 85 },
        { name: "Apache Airflow", level: 80 },
        { name: "SQL Tuning", level: 85 },
        { name: "Data Modeling", level: 90 }
      ]
    },
    {
      title: "Bancos de Dados",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MySQL", level: 85 },
        { name: "SQL Azure", level: 85 },
        { name: "CosmosDB", level: 80 },
        { name: "Database Administration", level: 90 }
      ]
    },
    {
      title: "Desenvolvimento Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "NestJS", level: 80 },
        { name: "API Development", level: 90 },
        { name: "System Integration", level: 85 },
        { name: "Scrum", level: 80 }
      ]
    },
    {
      title: "Ferramentas & Metodologias",
      skills: [
        { name: "Microsoft Office", level: 90 },
        { name: "Microsoft Excel", level: 85 },
        { name: "Problem Solving", level: 95 },
        { name: "IT Support", level: 85 },
        { name: "English (C1)", level: 80 }
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-gray-50">
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
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Habilidades Técnicas
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Tecnologias e ferramentas que domino para criar soluções de dados robustas
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="card p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
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
