import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'

/**
 * Clientes: `logo` pode ser `/clients/...` (public/) ou URL absoluta do asset.
 */
export const trustedClients = [
  {
    name: 'Grupo Fornecedora',
    logo: 'https://www.grupofornecedora.com.br/wp-content/uploads/2021/07/cropped-Logo_grupo-fornecedora-1.png',
  },
  {
    name: 'Heian Dojo',
    logo: '/clients/heiandojo.png',
  },
  {
    name: 'Pires&Lima Advogados Associados',
    logo: 'https://rppires-lima-production.up.railway.app/_next/image?url=%2Flogo-pires-lima.png&w=256&q=75',
  },
  {
    name: 'Contabilidade DiPonta',
    logo: 'https://contabilidadediponta.com.br/_next/image?url=%2Flogo.png&w=640&q=75',
  },
  {
    name: 'Centro Educacional Professora Rosimar',
    logo: '/clients/cepr.jpg',
  },
]

function ClientLogo({ name, logo }) {
  return (
    <div className="group mx-auto flex w-full max-w-[280px] flex-col items-center lg:max-w-none">
      <div className="flex h-28 w-full items-center justify-center rounded-2xl border border-kihon-gray-light bg-kihon-white/95 p-5 shadow-soft transition-all duration-300 hover:border-kihon-red/40 hover:bg-kihon-white hover:shadow-medium hover:shadow-kihon-red/10 sm:h-32 sm:p-6">
        {logo ? (
          <img
            src={logo}
            alt={`${name} logo`}
            width={200}
            height={100}
            loading="lazy"
            decoding="async"
            className="max-h-[72px] max-w-full object-contain opacity-65 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 sm:max-h-[88px]"
          />
        ) : (
          <span className="select-none text-center text-sm font-medium text-kihon-gray-medium transition-colors group-hover:text-kihon-red">
            Logo
          </span>
        )}
      </div>
      <p className="mt-3 line-clamp-2 min-h-[2.75rem] max-w-[16rem] text-center text-sm font-medium leading-snug text-kihon-dark/75 transition-colors group-hover:text-kihon-red">
        {name}
      </p>
    </div>
  )
}

const TrustedBy = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  }

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const logosGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  }

  const logoCardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section className="section-padding relative overflow-hidden border-t border-kihon-gray-light bg-kihon-gray-light">
      <div className="container-max relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="mb-14 text-center md:mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center rounded-full border border-kihon-red/25 bg-kihon-white px-4 py-2 shadow-sm"
          >
            <span className="text-sm font-semibold tracking-wide text-kihon-red">NOSSOS CLIENTES</span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="mb-6 font-display text-3xl font-bold text-kihon-dark md:text-4xl lg:text-5xl"
          >
            Quem confia na{' '}
            <span className="bg-gradient-to-r from-kihon-red via-kihon-red to-kihon-dark bg-clip-text text-transparent">
              Kihon
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mx-auto max-w-3xl text-lg text-kihon-dark/80 md:text-xl"
          >
            Projetos e parcerias em setores variados — educação, serviços, varejo e mais.
          </motion.p>
        </motion.div>

        <motion.div
          variants={logosGridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mx-auto grid max-w-6xl grid-cols-1 justify-items-center gap-y-10 py-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 md:grid-cols-3 md:gap-x-6 lg:grid-cols-5 lg:gap-x-4 lg:gap-y-8"
        >
          {trustedClients.map((client) => (
            <motion.div key={client.name} variants={logoCardVariants} className="w-full">
              <ClientLogo name={client.name} logo={client.logo} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 flex justify-center"
        >
          <Link
            to="/contato"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-kihon-red px-8 py-4 text-base font-semibold text-kihon-white shadow-lg shadow-kihon-red/25 transition-all duration-200 hover:bg-kihon-red/90 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-kihon-red/35 md:px-10 md:py-4 md:text-lg"
          >
            <span
              className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[120%]"
              aria-hidden
            />
            <span className="relative z-10">
              Seja a próxima empresa a evoluir com a Kihon
            </span>
            <HiArrowRight className="relative z-10 h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default TrustedBy
