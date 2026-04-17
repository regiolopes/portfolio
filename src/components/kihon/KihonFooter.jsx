import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import KihonLogo from './KihonLogo'

const KihonFooter = () => {
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

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Cases', href: '/cases' },
    { name: 'Contato', href: '/contato' },
  ]

  return (
    <footer className="bg-kihon-dark text-kihon-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #E53935 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12"
        >
          {/* Logo + Descrição */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="mb-4">
              <KihonLogo size="default" color="light" className="h-10 w-auto" />
            </div>
            <p className="text-kihon-gray-medium text-sm leading-relaxed mb-6">
              Fazemos o básico tão bem feito que vira excelência. Serviços sólidos desde a base, tecnologia com fundamentos.
            </p>
            
            {/* Informações de Contato */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FaPhone className="text-kihon-red mt-1 flex-shrink-0" size={16} />
                <a 
                  href="https://wa.me/5585997275766" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-kihon-gray-medium hover:text-green-500 transition-colors text-sm"
                >
                  (85) 99727-5766
                </a>
              </div>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-kihon-red mt-1 flex-shrink-0" size={16} />
                <span className="text-kihon-gray-medium text-sm">
                  Fortaleza, CE - Brasil
                </span>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">Siga-nos</h5>
              <div className="flex space-x-4">
                <motion.a
                  href="https://www.linkedin.com/in/regiolopes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-kihon-gray-medium hover:text-kihon-red transition-colors duration-200"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  title="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </motion.a>
                <motion.a
                  href="https://github.com/regiolopes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-kihon-gray-medium hover:text-kihon-red transition-colors duration-200"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  title="GitHub"
                >
                  <FaGithub size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Empresa */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 text-lg">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/sobre"
                  className="text-kihon-gray-medium hover:text-kihon-red transition-colors duration-200 text-sm"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos"
                  className="text-kihon-gray-medium hover:text-kihon-red transition-colors duration-200 text-sm"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  to="/cases"
                  className="text-kihon-gray-medium hover:text-kihon-red transition-colors duration-200 text-sm"
                >
                  Cases de Sucesso
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="text-kihon-gray-medium hover:text-kihon-red transition-colors duration-200 text-sm"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Serviços */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 text-lg">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/servicos"
                  className="text-kihon-gray-medium hover:text-kihon-red transition-colors duration-200 text-sm"
                >
                  Desenvolvimento Full Stack
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos"
                  className="text-kihon-gray-medium hover:text-kihon-red transition-colors duration-200 text-sm"
                >
                  Engenharia de Dados
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos"
                  className="text-kihon-gray-medium hover:text-kihon-red transition-colors duration-200 text-sm"
                >
                  Business Intelligence
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos"
                  className="text-kihon-gray-medium hover:text-kihon-red transition-colors duration-200 text-sm"
                >
                  Automação e Integração
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 text-lg">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacidade/smart-nota"
                  className="text-kihon-gray-medium hover:text-kihon-red transition-colors duration-200 text-sm"
                >
                  Política de Privacidade — Smart Nota
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-kihon-gray-medium hover:text-kihon-red transition-colors duration-200 text-sm"
                >
                  Termos de Uso
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-kihon-gray-medium hover:text-kihon-red transition-colors duration-200 text-sm"
                >
                  LGPD
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="border-t border-kihon-gray-medium/30 pt-6 mt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-kihon-gray-medium text-sm">
              © {currentYear} Kihon. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                to="/privacidade/smart-nota"
                className="text-kihon-gray-medium hover:text-kihon-red transition-colors"
              >
                Política de Privacidade — Smart Nota
              </Link>
              <span className="text-kihon-gray-medium">•</span>
              <a
                href="#"
                className="text-kihon-gray-medium hover:text-kihon-red transition-colors"
              >
                Termos de Uso
              </a>
              <span className="text-kihon-gray-medium">•</span>
              <a
                href="#"
                className="text-kihon-gray-medium hover:text-kihon-red transition-colors"
              >
                Cookies
              </a>
            </div>
            <p className="text-kihon-gray-medium text-sm">
              Feito com <span className="text-kihon-red">❤️</span> no Brasil
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default KihonFooter

