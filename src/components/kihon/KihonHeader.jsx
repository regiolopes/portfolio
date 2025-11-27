import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useScroll } from '../../hooks/useScroll'
import KihonLogo from './KihonLogo'

const KihonHeader = () => {
  const isScrolled = useScroll(50)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Cases', href: '/cases' },
    { name: 'Contato', href: '/contato' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-kihon-dark/95 backdrop-blur-md shadow-lg' 
          : 'bg-kihon-dark'
      }`}
    >
      <nav className="container-max py-4 md:py-5 px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
            <KihonLogo size="default" color="light" className="h-8 md:h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to={item.href}
                  className={`font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-kihon-red'
                      : 'text-kihon-gray-light hover:text-kihon-red'
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.1 }}
            >
              <Link
                to="/contato"
                className="bg-kihon-red hover:bg-kihon-red/90 text-kihon-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Fale com a gente
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-kihon-gray-light"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden mt-4 pb-4 border-t border-kihon-gray-medium/30"
          >
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-medium text-left transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-kihon-red'
                      : 'text-kihon-gray-light hover:text-kihon-red'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contato"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-kihon-red hover:bg-kihon-red/90 text-kihon-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 text-center mt-2"
              >
                Fale com a gente
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

export default KihonHeader

