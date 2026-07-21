import React from 'react'
import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'
import Reveal from './Reveal'
import { WHATSAPP_URL } from './WhatsAppFloat'

const FinalCTA = () => (
  <section className="relative isolate overflow-hidden bg-kihon-red">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.12]"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)',
        backgroundSize: '54px 54px',
        maskImage: 'radial-gradient(ellipse 70% 80% at 50% 50%, #000, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse 70% 80% at 50% 50%, #000, transparent 75%)',
      }}
    />
    <div className="container-max relative z-10 py-20 lg:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance font-display text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
          Vamos começar pelo básico?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl">
          Conte o seu desafio. A gente cuida da base — e constrói dali para cima.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/contato" className="btn-kihon-light group">
            Começar um projeto
            <HiArrowRight
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-kihon-on-ink border-white/40"
          >
            <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
            Falar no WhatsApp
          </a>
        </div>
      </Reveal>
    </div>
  </section>
)

export default FinalCTA
