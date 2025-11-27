import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import KihonHeader from '../components/kihon/KihonHeader'
import KihonFooter from '../components/kihon/KihonFooter'

function KihonContato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    telefone: '',
    cargo: '',
    orcamento: '',
    prazo: '',
    assunto: '',
    mensagem: '',
    newsletter: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Configuração do EmailJS
      // Você precisará criar uma conta em https://www.emailjs.com/
      // e configurar as variáveis de ambiente ou usar as chaves diretamente
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

      // Template parameters para o EmailJS
      const templateParams = {
        from_name: formData.nome,
        from_email: formData.email,
        empresa: formData.empresa || 'Não informado',
        telefone: formData.telefone || 'Não informado',
        cargo: formData.cargo || 'Não informado',
        orcamento: formData.orcamento || 'Não informado',
        prazo: formData.prazo || 'Não informado',
        assunto: formData.assunto || 'Não especificado',
        message: formData.mensagem,
        newsletter: formData.newsletter ? 'Sim' : 'Não',
        to_email: 'regiolofilho@gmail.com'
      }

      // Enviar email via EmailJS
      await emailjs.send(serviceID, templateID, templateParams, publicKey)

      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        nome: '',
        email: '',
        empresa: '',
        telefone: '',
        cargo: '',
        orcamento: '',
        prazo: '',
        assunto: '',
        mensagem: '',
        newsletter: false
      })
    } catch (error) {
      console.error('Erro ao enviar email:', error)
      setIsSubmitting(false)
      setSubmitStatus('error')
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
                Contato
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl text-kihon-gray-medium leading-relaxed"
              >
                Conte pra gente qual é o seu desafio. A gente começa arrumando a base.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="section-padding bg-kihon-white">
          <div className="container-max">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <motion.div
                variants={itemVariants}
                className="bg-kihon-gray-light rounded-xl p-6 sm:p-8 md:p-10"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-semibold text-kihon-dark mb-2">
                        Nome *
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                        value={formData.nome}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-kihon-gray-medium/30 bg-kihon-white text-kihon-dark focus:outline-none focus:ring-2 focus:ring-kihon-red focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-kihon-dark mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-kihon-gray-medium/30 bg-kihon-white text-kihon-dark focus:outline-none focus:ring-2 focus:ring-kihon-red focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="empresa" className="block text-sm font-semibold text-kihon-dark mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-kihon-gray-medium/30 bg-kihon-white text-kihon-dark focus:outline-none focus:ring-2 focus:ring-kihon-red focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="cargo" className="block text-sm font-semibold text-kihon-dark mb-2">
                        Cargo / Função
                      </label>
                      <input
                        type="text"
                        id="cargo"
                        name="cargo"
                        value={formData.cargo}
                        onChange={handleChange}
                        placeholder="Ex: Gerente de TI, CEO, etc."
                        className="w-full px-4 py-3 rounded-lg border border-kihon-gray-medium/30 bg-kihon-white text-kihon-dark focus:outline-none focus:ring-2 focus:ring-kihon-red focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="telefone" className="block text-sm font-semibold text-kihon-dark mb-2">
                        Telefone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        placeholder="(85) 99999-9999"
                        className="w-full px-4 py-3 rounded-lg border border-kihon-gray-medium/30 bg-kihon-white text-kihon-dark focus:outline-none focus:ring-2 focus:ring-kihon-red focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="orcamento" className="block text-sm font-semibold text-kihon-dark mb-2">
                        Orçamento Estimado
                      </label>
                      <select
                        id="orcamento"
                        name="orcamento"
                        value={formData.orcamento}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-kihon-gray-medium/30 bg-kihon-white text-kihon-dark focus:outline-none focus:ring-2 focus:ring-kihon-red focus:border-transparent"
                      >
                        <option value="">Selecione uma faixa</option>
                        <option value="ate-10k">Até R$ 10.000</option>
                        <option value="10k-50k">R$ 10.000 - R$ 50.000</option>
                        <option value="50k-100k">R$ 50.000 - R$ 100.000</option>
                        <option value="acima-100k">Acima de R$ 100.000</option>
                        <option value="a-definir">A definir</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="prazo" className="block text-sm font-semibold text-kihon-dark mb-2">
                        Prazo Desejado
                      </label>
                      <select
                        id="prazo"
                        name="prazo"
                        value={formData.prazo}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-kihon-gray-medium/30 bg-kihon-white text-kihon-dark focus:outline-none focus:ring-2 focus:ring-kihon-red focus:border-transparent"
                      >
                        <option value="">Selecione um prazo</option>
                        <option value="urgente">Urgente (até 1 mês)</option>
                        <option value="curto">Curto prazo (1-3 meses)</option>
                        <option value="medio">Médio prazo (3-6 meses)</option>
                        <option value="longo">Longo prazo (6+ meses)</option>
                        <option value="flexivel">Flexível</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="assunto" className="block text-sm font-semibold text-kihon-dark mb-2">
                        Assunto
                      </label>
                      <select
                        id="assunto"
                        name="assunto"
                        value={formData.assunto}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-kihon-gray-medium/30 bg-kihon-white text-kihon-dark focus:outline-none focus:ring-2 focus:ring-kihon-red focus:border-transparent"
                      >
                        <option value="">Selecione um assunto</option>
                        <option value="novo-projeto">Novo projeto</option>
                        <option value="consultoria">Consultoria</option>
                        <option value="parceria">Parceria</option>
                        <option value="suporte">Suporte técnico</option>
                        <option value="orcamento">Orçamento</option>
                        <option value="duvida">Dúvida</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                  </div>


                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-semibold text-kihon-dark mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      required
                      rows={6}
                      value={formData.mensagem}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-kihon-gray-medium/30 bg-kihon-white text-kihon-dark focus:outline-none focus:ring-2 focus:ring-kihon-red focus:border-transparent resize-none"
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleChange}
                      className="w-4 h-4 text-kihon-red border-kihon-gray-medium/30 rounded focus:ring-kihon-red"
                    />
                    <label htmlFor="newsletter" className="ml-2 text-sm text-kihon-dark">
                      Quero receber conteúdos da Kihon
                    </label>
                  </div>

                  {submitStatus === 'success' && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                      Mensagem enviada com sucesso! Entraremos em contato em breve.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                      Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato diretamente pelo WhatsApp ou email.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-kihon-red hover:bg-kihon-red/90 text-kihon-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
                  </button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                variants={itemVariants}
                className="mt-12 text-center"
              >
                <h3 className="text-2xl font-display font-bold text-kihon-dark mb-6">
                  Outras formas de contato
                </h3>
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 flex-wrap">
                  <a
                    href="https://wa.me/5585997275766"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl font-semibold"
                  >
                    <FaWhatsapp size={24} />
                    <span>(85) 99727-5766</span>
                  </a>
                  <a
                    href="mailto:regiolofilho@gmail.com"
                    className="flex items-center gap-3 text-kihon-dark hover:text-kihon-red transition-colors"
                  >
                    <FaEnvelope size={24} />
                    <span>regiolofilho@gmail.com</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/regiolopes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-kihon-dark hover:text-kihon-red transition-colors"
                  >
                    <FaLinkedin size={24} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/regiolopes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-kihon-dark hover:text-kihon-red transition-colors"
                  >
                    <FaGithub size={24} />
                    <span>GitHub</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <KihonFooter />
    </div>
  )
}

export default KihonContato

