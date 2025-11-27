import React from 'react'
import { motion } from 'framer-motion'
import KihonHeader from '../components/kihon/KihonHeader'
import KihonFooter from '../components/kihon/KihonFooter'

function KihonSobre() {
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
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <div className="min-h-screen bg-kihon-white">
      <KihonHeader />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-kihon-dark text-kihon-white">
          <div className="container-max">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl mx-auto text-center"
            >
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl font-display font-bold mb-6"
              >
                Sobre a Kihon
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl text-kihon-gray-medium leading-relaxed"
              >
                Fazemos o básico tão bem feito que vira excelência. Serviços sólidos desde a base.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* História */}
        <section className="section-padding bg-kihon-white">
          <div className="container-max">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl font-display font-bold text-kihon-dark mb-8"
              >
                Nossa História
              </motion.h2>
              <motion.div
                variants={itemVariants}
                className="space-y-6 text-kihon-dark leading-relaxed"
              >
                <p className="text-lg">
                  A Kihon nasceu da ideia de que tecnologia não precisa ser complicada para ser poderosa. 
                  Inspirados pela filosofia do Karatê, onde o <strong>kihon (基本)</strong> – os fundamentos – 
                  são praticados repetidamente até a perfeição, aplicamos essa disciplina ao desenvolvimento 
                  de soluções digitais.
                </p>
                <p className="text-lg">
                  Acreditamos que antes de automatizar processos complexos, é preciso arrumar a base. 
                  Antes de implementar tecnologias de ponta, é preciso garantir que os fundamentos 
                  estejam sólidos. Essa abordagem nos permite entregar soluções que funcionam, são 
                  sustentáveis e geram resultados reais.
                </p>
                <p className="text-lg">
                  Não vendemos modinhas ou promessas vazias. Vendemos trabalho bem feito, desde a base.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Missão, Visão, Valores */}
        <section className="section-padding bg-kihon-gray-light">
          <div className="container-max">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8 md:gap-12"
            >
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-display font-bold text-kihon-dark mb-4">Missão</h3>
                <p className="text-kihon-dark leading-relaxed">
                  Aplicar a disciplina dos fundamentos à tecnologia para gerar resultados consistentes 
                  e sustentáveis para nossos clientes.
                </p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-display font-bold text-kihon-dark mb-4">Visão</h3>
                <p className="text-kihon-dark leading-relaxed">
                  Ser reconhecida como a empresa que faz o básico tão bem feito que vira referência 
                  em excelência tecnológica.
                </p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-display font-bold text-kihon-dark mb-4">Valores</h3>
                <ul className="space-y-2 text-kihon-dark">
                  <li>• Transparência</li>
                  <li>• Disciplina</li>
                  <li>• Simplicidade</li>
                  <li>• Melhoria contínua</li>
                  <li>• Respeito ao cliente</li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Como Trabalhamos */}
        <section className="section-padding bg-kihon-white">
          <div className="container-max">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl font-display font-bold text-kihon-dark mb-12 text-center"
              >
                Como Trabalhamos
              </motion.h2>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-8"
              >
                {[
                  {
                    step: '1',
                    title: 'Entender a base',
                    description: 'Levantamento detalhado do problema, processos atuais e necessidades reais.'
                  },
                  {
                    step: '2',
                    title: 'Desenhar o caminho',
                    description: 'Solução clara e objetiva, sem complicações desnecessárias.'
                  },
                  {
                    step: '3',
                    title: 'Executar com disciplina',
                    description: 'Desenvolvimento focado, com processos bem definidos e comunicação constante.'
                  },
                  {
                    step: '4',
                    title: 'Acompanhar e ajustar',
                    description: 'Melhoria contínua, iterações pequenas e consistentes baseadas em feedback.'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-kihon-gray-light rounded-xl p-6"
                  >
                    <div className="text-4xl font-display font-bold text-kihon-red mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-display font-semibold text-kihon-dark mb-3">
                      {item.title}
                    </h3>
                    <p className="text-kihon-dark/80 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <KihonFooter />
    </div>
  )
}

export default KihonSobre

