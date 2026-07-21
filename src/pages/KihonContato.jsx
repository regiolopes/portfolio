import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { HiCheckCircle, HiExclamationCircle } from 'react-icons/hi2'
import KihonLayout from '../components/kihon/KihonLayout'
import PageHero from '../components/kihon/PageHero'
import Reveal from '../components/kihon/Reveal'
import { WHATSAPP_URL } from '../components/kihon/WhatsAppFloat'

const CONTACT_EMAIL = 'regio.lopes@kihon.dev.br'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const inputBase =
  'w-full rounded-xl border bg-white px-4 py-3 font-sans text-base text-kihon-ink placeholder:text-kihon-faint transition-colors focus:outline-none focus:ring-2 focus:ring-kihon-red focus:border-transparent'

const nextSteps = [
  'Retorno o seu contato pessoalmente.',
  'Entendemos juntos o desafio e o contexto.',
  'Você recebe uma proposta clara, sem enrolação.',
]

function KihonContato() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    assunto: '',
    mensagem: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // 'success' | 'error' | null
  const [isSubmitting, setIsSubmitting] = useState(false)

  const refs = {
    nome: useRef(null),
    email: useRef(null),
    mensagem: useRef(null),
  }

  const setField = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const validate = () => {
    const e = {}
    if (!form.nome.trim()) e.nome = 'Informe o seu nome.'
    if (!form.email.trim()) e.email = 'Informe o seu e-mail.'
    else if (!EMAIL_RE.test(form.email.trim())) e.email = 'E-mail inválido. Verifique e tente novamente.'
    if (!form.mensagem.trim()) e.mensagem = 'Conte, mesmo que em uma linha, qual é o desafio.'
    return e
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus(null)

    const e = validate()
    if (Object.keys(e).length > 0) {
      setErrors(e)
      const firstInvalid = ['nome', 'email', 'mensagem'].find((k) => e[k])
      refs[firstInvalid]?.current?.focus()
      return
    }

    setIsSubmitting(true)
    try {
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: form.nome,
          from_email: form.email,
          telefone: form.telefone || 'Não informado',
          empresa: form.empresa || 'Não informado',
          assunto: form.assunto || 'Não especificado',
          message: form.mensagem,
          cargo: 'Não informado',
          orcamento: 'Não informado',
          prazo: 'Não informado',
          newsletter: 'Não',
          to_email: CONTACT_EMAIL,
        },
        publicKey
      )
      setStatus('success')
      setForm({ nome: '', email: '', telefone: '', empresa: '', assunto: '', mensagem: '' })
    } catch (err) {
      console.error('Erro ao enviar mensagem:', err)
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const FieldError = ({ id, children }) =>
    children ? (
      <p id={id} className="mt-1.5 flex items-center gap-1.5 text-sm text-kihon-red-ink">
        <HiExclamationCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
        {children}
      </p>
    ) : null

  return (
    <KihonLayout>
      <PageHero
        eyebrow="Contato"
        title="Conte qual é o seu desafio. A gente começa pela base."
        lead="Sem formulário quilométrico: nome, e-mail e uma linha sobre o que você precisa já bastam para começarmos."
      />

      <section className="section-kihon bg-kihon-paper">
        <div className="container-max grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Formulário */}
          <Reveal className="lg:col-span-7">
            <form onSubmit={handleSubmit} noValidate className="rounded-3xl border border-kihon-line bg-white p-6 shadow-card sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="nome" className="mb-2 block text-sm font-semibold text-kihon-ink">
                    Nome <span className="text-kihon-red">*</span>
                  </label>
                  <input
                    ref={refs.nome}
                    id="nome"
                    name="nome"
                    type="text"
                    autoComplete="name"
                    required
                    value={form.nome}
                    onChange={(ev) => setField('nome', ev.target.value)}
                    aria-invalid={!!errors.nome}
                    aria-describedby={errors.nome ? 'erro-nome' : undefined}
                    className={`${inputBase} ${errors.nome ? 'border-kihon-red' : 'border-kihon-line'}`}
                  />
                  <FieldError id="erro-nome">{errors.nome}</FieldError>
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-kihon-ink">
                    E-mail <span className="text-kihon-red">*</span>
                  </label>
                  <input
                    ref={refs.email}
                    id="email"
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    spellCheck={false}
                    required
                    placeholder="voce@empresa.com.br"
                    value={form.email}
                    onChange={(ev) => setField('email', ev.target.value)}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'erro-email' : undefined}
                    className={`${inputBase} ${errors.email ? 'border-kihon-red' : 'border-kihon-line'}`}
                  />
                  <FieldError id="erro-email">{errors.email}</FieldError>
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="telefone" className="mb-2 block text-sm font-semibold text-kihon-ink">
                    WhatsApp <span className="font-normal text-kihon-faint">(opcional)</span>
                  </label>
                  <input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="(85) 99999-9999"
                    value={form.telefone}
                    onChange={(ev) => setField('telefone', ev.target.value)}
                    className={`${inputBase} border-kihon-line`}
                  />
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="empresa" className="mb-2 block text-sm font-semibold text-kihon-ink">
                    Empresa <span className="font-normal text-kihon-faint">(opcional)</span>
                  </label>
                  <input
                    id="empresa"
                    name="empresa"
                    type="text"
                    autoComplete="organization"
                    value={form.empresa}
                    onChange={(ev) => setField('empresa', ev.target.value)}
                    className={`${inputBase} border-kihon-line`}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="assunto" className="mb-2 block text-sm font-semibold text-kihon-ink">
                    Assunto <span className="font-normal text-kihon-faint">(opcional)</span>
                  </label>
                  <select
                    id="assunto"
                    name="assunto"
                    value={form.assunto}
                    onChange={(ev) => setField('assunto', ev.target.value)}
                    className={`${inputBase} appearance-none border-kihon-line bg-[length:1.25rem] bg-[right_0.85rem_center] bg-no-repeat pr-10`}
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236E6459' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
                    }}
                  >
                    <option value="">Selecione (se quiser)</option>
                    <option value="Novo projeto">Novo projeto</option>
                    <option value="Engenharia de dados / BI">Engenharia de dados / BI</option>
                    <option value="Automação / integração">Automação / integração</option>
                    <option value="Consultoria">Consultoria</option>
                    <option value="Parceria">Parceria</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="mensagem" className="mb-2 block text-sm font-semibold text-kihon-ink">
                    Mensagem <span className="text-kihon-red">*</span>
                  </label>
                  <textarea
                    ref={refs.mensagem}
                    id="mensagem"
                    name="mensagem"
                    rows={5}
                    required
                    placeholder="Qual é o desafio? Pode ser em uma linha…"
                    value={form.mensagem}
                    onChange={(ev) => setField('mensagem', ev.target.value)}
                    aria-invalid={!!errors.mensagem}
                    aria-describedby={errors.mensagem ? 'erro-mensagem' : undefined}
                    className={`${inputBase} resize-y ${errors.mensagem ? 'border-kihon-red' : 'border-kihon-line'}`}
                  />
                  <FieldError id="erro-mensagem">{errors.mensagem}</FieldError>
                </div>
              </div>

              <div aria-live="polite">
                {status === 'success' && (
                  <div role="status" className="mt-5 flex items-start gap-2.5 rounded-xl border border-green-600/30 bg-green-50 px-4 py-3 text-sm text-green-800">
                    <HiCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" aria-hidden="true" />
                    Mensagem enviada. Retorno o seu contato em breve — normalmente no mesmo dia útil.
                  </div>
                )}
                {status === 'error' && (
                  <div role="alert" className="mt-5 flex items-start gap-2.5 rounded-xl border border-kihon-red/30 bg-kihon-red-tint px-4 py-3 text-sm text-kihon-red-ink">
                    <HiExclamationCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                    Não consegui enviar agora. Tente novamente ou fale direto pelo WhatsApp.
                  </div>
                )}
              </div>

              <button type="submit" disabled={isSubmitting} className="btn-kihon mt-6 w-full py-4 text-base disabled:cursor-not-allowed disabled:opacity-60">
                {isSubmitting ? 'Enviando…' : 'Enviar mensagem'}
              </button>
            </form>
          </Reveal>

          {/* Sidebar */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="space-y-6">
              <div className="rounded-3xl border border-kihon-line bg-white p-6 shadow-card sm:p-7">
                <h2 className="font-display text-xl font-bold text-kihon-ink">Prefere conversar direto?</h2>
                <p className="mt-2 text-sm leading-relaxed text-kihon-muted">
                  O WhatsApp é o caminho mais rápido — respondo pessoalmente.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-6 py-3.5 font-sans text-sm font-semibold text-white transition-colors hover:bg-[#1ebe5b] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
                >
                  <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
                  (85) 99727-5766
                </a>
                <div className="mt-5 space-y-3 border-t border-kihon-line pt-5 text-sm">
                  <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 break-words text-kihon-muted transition-colors hover:text-kihon-red-ink">
                    <FaEnvelope className="h-4 w-4 shrink-0 text-kihon-red" aria-hidden="true" />
                    {CONTACT_EMAIL}
                  </a>
                  <a href="https://www.linkedin.com/in/regiolopes/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-kihon-muted transition-colors hover:text-kihon-red-ink">
                    <FaLinkedin className="h-4 w-4 shrink-0 text-kihon-red" aria-hidden="true" />
                    LinkedIn
                  </a>
                  <a href="https://github.com/regiolopes" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-kihon-muted transition-colors hover:text-kihon-red-ink">
                    <FaGithub className="h-4 w-4 shrink-0 text-kihon-red" aria-hidden="true" />
                    GitHub
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-kihon-line bg-kihon-surface p-6 sm:p-7">
                <h2 className="font-mono text-xs font-medium uppercase tracking-eyebrow text-kihon-muted">
                  O que acontece depois
                </h2>
                <ol className="mt-4 space-y-3">
                  {nextSteps.map((step, i) => (
                    <li key={step} className="flex items-start gap-3 text-sm text-kihon-ink">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-kihon-red font-mono text-xs font-semibold text-white tabular-nums">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </KihonLayout>
  )
}

export default KihonContato
