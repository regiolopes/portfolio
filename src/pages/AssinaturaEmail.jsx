import React, { useEffect, useMemo, useRef, useState } from 'react'
import { HiCheck, HiClipboardCopy } from 'react-icons/hi'

import KihonLayout from '../components/kihon/KihonLayout'
import PageHero from '../components/kihon/PageHero'
import Reveal from '../components/kihon/Reveal'
import { DEFAULTS, buildPlainText, buildSignature } from '../brand/emailSignature'

const inputBase =
  'w-full rounded-kihon border border-kihon-line bg-white px-4 py-3 font-sans text-base text-kihon-ink placeholder:text-kihon-faint transition-colors focus:border-transparent focus:outline-none focus:ring-2 focus:ring-kihon-red'

const FIELDS = [
  { id: 'nome', label: 'Nome', placeholder: 'Régio Lopes', autoComplete: 'name' },
  { id: 'cargo', label: 'Cargo', placeholder: 'Engenheiro de Dados · Sócio' },
  { id: 'email', label: 'E-mail', placeholder: 'regio.lopes@kihon.dev.br', type: 'email' },
  { id: 'telefone', label: 'Telefone', placeholder: '+55 85 99727-5766' },
  { id: 'linkedin', label: 'LinkedIn (opcional)', placeholder: 'linkedin.com/in/regiolopes' },
]

const INSTRUCTIONS = [
  {
    client: 'Gmail',
    steps: 'Configurações → Ver todas as configurações → Assinatura → cole no campo de texto.',
  },
  {
    client: 'Outlook (web)',
    steps: 'Configurações → Email → Compor e responder → Assinatura de email → cole.',
  },
  {
    client: 'Apple Mail',
    steps:
      'Mail → Configurações → Assinaturas → desmarque "Sempre usar fontes padrão" antes de colar.',
  },
]

/** Copia HTML formatado; cai para seleção manual onde a Clipboard API é negada. */
async function copyRich(html, text, node) {
  try {
    if (navigator.clipboard && window.ClipboardItem) {
      await navigator.clipboard.write([
        new window.ClipboardItem({
          'text/html': new Blob([html], { type: 'text/html' }),
          'text/plain': new Blob([text], { type: 'text/plain' }),
        }),
      ])
      return true
    }
  } catch {
    /* segue para o método antigo */
  }
  try {
    const selection = window.getSelection()
    const range = document.createRange()
    range.selectNodeContents(node)
    selection.removeAllRanges()
    selection.addRange(range)
    const ok = document.execCommand('copy')
    selection.removeAllRanges()
    return ok
  } catch {
    return false
  }
}

function AssinaturaEmail() {
  const [form, setForm] = useState(DEFAULTS)
  const [copied, setCopied] = useState(null) // 'assinatura' | 'html' | 'erro'
  const previewRef = useRef(null)

  // O que vai para a área de transferência aponta sempre para kihon.dev.br.
  const html = useMemo(() => buildSignature(form), [form])
  const text = useMemo(() => buildPlainText(form), [form])

  // A prévia carrega a marca do próprio servidor, para funcionar em dev e em
  // pré-visualização antes do deploy.
  const previewHtml = useMemo(
    () =>
      buildSignature(form, {
        origin: typeof window === 'undefined' ? undefined : window.location.origin,
      }),
    [form],
  )

  // Ferramenta interna: fora do índice de busca.
  useEffect(() => {
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    document.head.appendChild(meta)
    return () => document.head.removeChild(meta)
  }, [])

  useEffect(() => {
    if (!copied) return undefined
    const id = setTimeout(() => setCopied(null), 2600)
    return () => clearTimeout(id)
  }, [copied])

  const update = (id) => (event) => setForm((prev) => ({ ...prev, [id]: event.target.value }))

  const handleCopySignature = async () => {
    const ok = await copyRich(html, text, previewRef.current)
    setCopied(ok ? 'assinatura' : 'erro')
  }

  const handleCopyHtml = async () => {
    try {
      await navigator.clipboard.writeText(html)
      setCopied('html')
    } catch {
      setCopied('erro')
    }
  }

  const dark = form.tema === 'escuro'

  return (
    <KihonLayout>
      <PageHero
        eyebrow="Marca · Uso interno"
        title="Gerador de assinatura de e-mail"
        lead="Preencha os dados, copie e cole no seu gerenciador de e-mail. A assinatura sai com a marca oficial e as cores da Kihon, igual para todo mundo do time."
      />

      <section className="section-kihon">
        <div className="container-max">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-14">
            {/* ── Formulário ── */}
            <Reveal>
              <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                {FIELDS.map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={`assinatura-${field.id}`}
                      className="mb-2 block font-sans text-sm font-medium text-kihon-ink"
                    >
                      {field.label}
                    </label>
                    <input
                      id={`assinatura-${field.id}`}
                      type={field.type || 'text'}
                      value={form[field.id]}
                      onChange={update(field.id)}
                      placeholder={field.placeholder}
                      autoComplete={field.autoComplete}
                      className={inputBase}
                    />
                  </div>
                ))}

                <fieldset className="mt-1">
                  <legend className="mb-2 font-sans text-sm font-medium text-kihon-ink">
                    Fundo do cliente de e-mail
                  </legend>
                  <div className="flex gap-2">
                    {[
                      { value: 'claro', label: 'Claro' },
                      { value: 'escuro', label: 'Escuro' },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className={`cursor-pointer rounded-kihon border px-4 py-2.5 font-sans text-sm transition-colors ${
                          form.tema === option.value
                            ? 'border-kihon-ink bg-kihon-ink text-kihon-paper'
                            : 'border-kihon-line bg-white text-kihon-muted hover:border-kihon-ink/40'
                        }`}
                      >
                        <input
                          type="radio"
                          name="tema"
                          value={option.value}
                          checked={form.tema === option.value}
                          onChange={update('tema')}
                          className="sr-only"
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <label className="flex items-center gap-3 font-sans text-sm text-kihon-muted">
                  <input
                    id="assinatura-tagline"
                    type="checkbox"
                    checked={form.mostrarTagline}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, mostrarTagline: e.target.checked }))
                    }
                    className="h-4 w-4 rounded border-kihon-line text-kihon-red focus:ring-kihon-red"
                  />
                  Incluir “O básico bem feito”
                </label>
              </form>
            </Reveal>

            {/* ── Prévia + ações ── */}
            <Reveal delay={0.1}>
              <div className="flex flex-col gap-5">
                <div>
                  <p className="mb-3 font-mono text-xs uppercase tracking-eyebrow text-kihon-faint">
                    Prévia
                  </p>
                  <div
                    className={`overflow-x-auto rounded-kihon border p-6 sm:p-8 ${
                      dark ? 'border-kihon-ink bg-kihon-ink' : 'border-kihon-line bg-white'
                    }`}
                  >
                    {/* O HTML é gerado aqui mesmo, sem entrada externa: nada de terceiros entra nesta árvore. */}
                    <div dangerouslySetInnerHTML={{ __html: previewHtml }} />
                  </div>
                </div>

                {/*
                  Cópia de reserva, fora da tela: quando o navegador nega a
                  Clipboard API, o fallback seleciona este nó. Ele usa a URL de
                  produção, para o que é copiado nunca apontar para localhost.
                */}
                <div
                  ref={previewRef}
                  aria-hidden="true"
                  className="pointer-events-none fixed -left-[9999px] top-0"
                  dangerouslySetInnerHTML={{ __html: html }}
                />

                <div className="flex flex-wrap items-center gap-3">
                  <button type="button" onClick={handleCopySignature} className="btn-kihon px-6 py-3">
                    {copied === 'assinatura' ? (
                      <HiCheck className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <HiClipboardCopy className="h-5 w-5" aria-hidden="true" />
                    )}
                    {copied === 'assinatura' ? 'Copiado' : 'Copiar assinatura'}
                  </button>
                  <button
                    type="button"
                    onClick={handleCopyHtml}
                    className="rounded-kihon border border-kihon-line bg-white px-6 py-3 font-sans text-sm font-medium text-kihon-ink transition-colors hover:border-kihon-ink/40"
                  >
                    {copied === 'html' ? 'HTML copiado' : 'Copiar código HTML'}
                  </button>
                </div>

                <p aria-live="polite" className="min-h-[1.25rem] font-sans text-sm">
                  {copied === 'assinatura' && (
                    <span className="text-kihon-muted">
                      Cole direto no campo de assinatura — a formatação vai junto.
                    </span>
                  )}
                  {copied === 'html' && (
                    <span className="text-kihon-muted">
                      Use onde o cliente pedir o código-fonte da assinatura.
                    </span>
                  )}
                  {copied === 'erro' && (
                    <span className="text-kihon-red-ink">
                      O navegador bloqueou a cópia. Selecione a prévia acima e copie com Ctrl+C.
                    </span>
                  )}
                </p>

                <div className="rounded-kihon border border-kihon-line bg-kihon-surface p-6">
                  <p className="font-display text-base font-bold text-kihon-ink">Onde colar</p>
                  <dl className="mt-4 flex flex-col gap-3">
                    {INSTRUCTIONS.map((item) => (
                      <div key={item.client}>
                        <dt className="font-sans text-sm font-semibold text-kihon-ink">
                          {item.client}
                        </dt>
                        <dd className="font-sans text-sm text-kihon-muted">{item.steps}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-5 border-t border-kihon-line pt-4 font-sans text-sm text-kihon-muted">
                    A marca é carregada de <code className="font-mono text-xs">kihon.dev.br</code>,
                    então o site precisa estar no ar para a imagem aparecer no e-mail de quem recebe.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </KihonLayout>
  )
}

export default AssinaturaEmail
