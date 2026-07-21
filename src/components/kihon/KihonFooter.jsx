import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import KihonLogo from './KihonLogo'
import Reveal from './Reveal'
import { WHATSAPP_URL } from './WhatsAppFloat'

const CONTACT_EMAIL = 'regio.lopes@kihon.dev.br'

const columns = [
  {
    title: 'Navegação',
    links: [
      { name: 'Início', to: '/' },
      { name: 'Sobre', to: '/sobre' },
      { name: 'Serviços', to: '/servicos' },
      { name: 'Cases', to: '/cases' },
      { name: 'Contato', to: '/contato' },
    ],
  },
  {
    title: 'Serviços',
    links: [
      { name: 'Desenvolvimento Full Stack', to: '/servicos' },
      { name: 'Engenharia de Dados', to: '/servicos' },
      { name: 'Business Intelligence', to: '/servicos' },
      { name: 'Automação & Integração', to: '/servicos' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacidade — Smart Nota', to: '/privacidade/smart-nota' },
      { name: 'Exclusão de conta — Smart Nota', to: '/privacidade/smart-nota/exclusao-de-conta' },
    ],
  },
]

const KihonFooter = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-kihon-ink text-kihon-paper">
      <div className="container-max py-16 lg:py-20">
        <Reveal className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Marca + contato */}
          <div className="lg:col-span-5">
            <KihonLogo size="default" color="light" className="h-9 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-kihon-chalk">
              Fazemos o básico tão bem feito que vira excelência. Software sob medida, dados e
              automação com fundamentos sólidos.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-kihon-chalk transition-colors hover:text-white"
              >
                <FaWhatsapp className="h-4 w-4 shrink-0 text-kihon-red" aria-hidden="true" />
                (85)&nbsp;99727-5766
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-3 break-words text-kihon-chalk transition-colors hover:text-white"
              >
                <FaEnvelope className="h-4 w-4 shrink-0 text-kihon-red" aria-hidden="true" />
                {CONTACT_EMAIL}
              </a>
              <p className="flex items-center gap-3 text-kihon-chalk">
                <FaMapMarkerAlt className="h-4 w-4 shrink-0 text-kihon-red" aria-hidden="true" />
                Fortaleza, CE — atendimento em todo o Brasil
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/regiolopes/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da Kihon"
                className="rounded-lg border border-white/10 p-2.5 text-kihon-chalk transition-colors hover:border-kihon-red hover:text-white"
              >
                <FaLinkedin className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/regiolopes"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub da Kihon"
                className="rounded-lg border border-white/10 p-2.5 text-kihon-chalk transition-colors hover:border-kihon-red hover:text-white"
              >
                <FaGithub className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Colunas de links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="font-mono text-xs font-medium uppercase tracking-eyebrow text-kihon-faint">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.to}
                        className="text-sm text-kihon-chalk transition-colors hover:text-white"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-kihon-faint sm:flex-row">
          <p>© {currentYear} Kihon. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5">
            基本 — o básico bem feito, no Brasil.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default KihonFooter
