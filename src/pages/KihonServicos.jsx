import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaCode, FaDatabase, FaChartLine, FaCogs } from 'react-icons/fa'
import KihonHeader from '../components/kihon/KihonHeader'
import KihonFooter from '../components/kihon/KihonFooter'

function KihonServicos() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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

  const services = [
    {
      id: 1,
      icon: FaCode,
      title: 'Desenvolvimento Full Stack',
      description: 'Sistemas completos, do backend ao frontend, com arquitetura sólida e código limpo. Desenvolvemos soluções personalizadas que crescem com seu negócio.',
      idealFor: [
        'Empresas que precisam de sistemas personalizados',
        'Startups que buscam escalabilidade desde o início',
        'Organizações que querem integrar processos digitais'
      ],
      howWeDo: [
        'Análise de requisitos e arquitetura',
        'Desenvolvimento ágil e iterativo',
        'Testes e validação contínua',
        'Deploy e monitoramento',
        'Suporte e evolução contínua'
      ],
      deliverables: [
        'Sistema completo funcional',
        'Documentação técnica',
        'Código versionado e documentado',
        'Treinamento da equipe',
        'Plano de manutenção'
      ],
      tag: 'Dev'
    },
    {
      id: 2,
      icon: FaDatabase,
      title: 'Engenharia de Dados',
      description: 'Data Lakes, pipelines ETL, arquiteturas de dados escaláveis e eficientes. Organizamos seus dados para que você tome decisões estratégicas baseadas em informação real.',
      idealFor: [
        'Empresas com grandes volumes de dados',
        'Organizações que precisam de integração de fontes diversas',
        'Negócios que buscam insights de dados históricos'
      ],
      howWeDo: [
        'Mapeamento de fontes de dados',
        'Design da arquitetura (Bronze/Silver/Gold)',
        'Implementação de pipelines ETL',
        'Otimização de performance',
        'Monitoramento e manutenção'
      ],
      deliverables: [
        'Arquitetura de dados implementada',
        'Pipelines ETL funcionais',
        'Documentação da arquitetura',
        'Dashboards de monitoramento',
        'Plano de evolução'
      ],
      tag: 'Dados'
    },
    {
      id: 3,
      icon: FaChartLine,
      title: 'Business Intelligence',
      description: 'Dashboards, relatórios automatizados e visualizações que transformam dados em insights acionáveis. Informação clara e objetiva para sua equipe tomar decisões.',
      idealFor: [
        'Gestores que precisam de visibilidade sobre operações',
        'Equipes que trabalham com múltiplas fontes de dados',
        'Organizações que querem automatizar relatórios'
      ],
      howWeDo: [
        'Levantamento de necessidades de informação',
        'Modelagem de dados para BI',
        'Desenvolvimento de dashboards',
        'Automação de relatórios',
        'Treinamento e suporte'
      ],
      deliverables: [
        'Dashboards interativos',
        'Relatórios automatizados',
        'Documentação de uso',
        'Treinamento da equipe',
        'Acesso e permissões configuradas'
      ],
      tag: 'BI'
    },
    {
      id: 4,
      icon: FaCogs,
      title: 'Automação e Integração',
      description: 'Integração de sistemas, automação de processos e otimização de workflows. Processos mais rápidos, menos erros, mais produtividade.',
      idealFor: [
        'Empresas com processos manuais repetitivos',
        'Organizações que usam múltiplos sistemas',
        'Negócios que buscam eficiência operacional'
      ],
      howWeDo: [
        'Mapeamento de processos atuais',
        'Identificação de oportunidades de automação',
        'Desenvolvimento de integrações',
        'Testes e validação',
        'Deploy e monitoramento'
      ],
      deliverables: [
        'Sistemas integrados',
        'Processos automatizados',
        'Documentação técnica',
        'Monitoramento configurado',
        'Plano de manutenção'
      ],
      tag: 'Automação'
    }
  ]

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
                Serviços
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl text-kihon-gray-medium leading-relaxed"
              >
                Não vendemos pacotes genéricos. Em cada serviço, o básico bem feito vem antes de qualquer modinha.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section className="section-padding bg-kihon-white">
          <div className="container-max">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-16"
            >
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="bg-kihon-gray-light rounded-xl p-8 md:p-10"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-kihon-red">
                      <service.icon size={40} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-kihon-dark">
                          {service.title}
                        </h2>
                        <span className="px-3 py-1 bg-kihon-red text-kihon-white text-xs font-semibold rounded">
                          {service.tag}
                        </span>
                      </div>
                      <p className="text-lg text-kihon-dark leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div>
                      <h3 className="font-semibold text-kihon-dark mb-3">Ideal para quem…</h3>
                      <ul className="space-y-2">
                        {service.idealFor.map((item, index) => (
                          <li key={index} className="text-sm text-kihon-dark/80 flex items-start">
                            <span className="text-kihon-red mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-kihon-dark mb-3">Como fazemos</h3>
                      <ol className="space-y-2">
                        {service.howWeDo.map((item, index) => (
                          <li key={index} className="text-sm text-kihon-dark/80 flex items-start">
                            <span className="text-kihon-red mr-2">{index + 1}.</span>
                            {item}
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div>
                      <h3 className="font-semibold text-kihon-dark mb-3">Entregáveis típicos</h3>
                      <ul className="space-y-2">
                        {service.deliverables.map((item, index) => (
                          <li key={index} className="text-sm text-kihon-dark/80 flex items-start">
                            <span className="text-kihon-red mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-kihon-gray-medium/30">
                    <Link
                      to="/contato"
                      className="bg-kihon-red hover:bg-kihon-red/90 text-kihon-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-block"
                    >
                      Quero conversar sobre esse serviço
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <KihonFooter />
    </div>
  )
}

export default KihonServicos

