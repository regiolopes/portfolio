import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaPlus, FaTrash, FaFilePdf, FaEye, FaEdit, FaCheckCircle, FaLock, FaPrint, FaSpinner } from 'react-icons/fa'
import KihonLogo from '../components/kihon/KihonLogo'

// ── Controle de acesso ──
// Senha para acessar o gerador de orçamentos. Para alterar, mude o valor abaixo.
// Obs.: por ser um site estático (sem back-end), a senha fica embutida no código
// enviado ao navegador — funciona como uma barreira simples, não como segurança forte.
const SENHA_ACESSO = 'kihon@2026'
const AUTH_KEY = 'orcamento_auth'

// ── Parceria / Joint Venture (Workenge) ──
const WORKENGE_LOGO = '/assets/workenge-logo.jpg'
const WORKENGE_COVER = '/assets/workenge-cover.jpg'
const WORKENGE_RESPONSAVEL = 'Atilla Andrade'
const DESCRICAO_PARCERIA_PADRAO =
  'Proposta desenvolvida em parceria com a Workenge — Engenharia de Mercado. A Kihon conduz o desenvolvimento de tecnologia e software, enquanto a Workenge agrega expertise em viabilidade, análise e engenharia de mercado, entregando uma solução completa de ponta a ponta.'

const TIPOS_SERVICO = [
  'Desenvolvimento Full Stack',
  'Engenharia de Dados',
  'Business Intelligence',
  'Automação e Integração',
  'Consultoria em TI',
  'Consultoria de Processos',
  'Engenharia de Mercado',
  'Desenvolvimento Mobile',
  'Infraestrutura e DevOps',
  'Análise e Ciência de Dados',
  'Suporte Técnico',
]

const FORMAS_PAGAMENTO = [
  'À vista (Pix / TED)',
  '50% entrada + 50% na entrega',
  '50% entrada + 50% após 30 dias',
  'Parcelado em 2x',
  'Parcelado em 3x',
  'Parcelado em 6x',
  'Mensal (recorrência)',
  'Sob consulta',
]

const VALIDADES = [
  { label: '7 dias', days: 7 },
  { label: '15 dias', days: 15 },
  { label: '30 dias', days: 30 },
  { label: '45 dias', days: 45 },
  { label: '60 dias', days: 60 },
]

const gerarNumero = () => {
  const ano = new Date().getFullYear()
  const seq = String(Math.floor(Math.random() * 900) + 100)
  return `KIH-${ano}-${seq}`
}

const formatarMoeda = (valor) => {
  const num = parseFloat(valor.replace(/\D/g, '')) / 100
  if (isNaN(num)) return ''
  return num.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

const parseMoeda = (valor) => {
  return valor.replace(/\D/g, '')
}

const dataFormatada = (dateStr) => {
  if (!dateStr) return ''
  const [y, m, d] = dateStr.split('-')
  return `${d}/${m}/${y}`
}

const adicionarDias = (dateStr, dias) => {
  const d = new Date(dateStr + 'T00:00:00')
  d.setDate(d.getDate() + dias)
  return d.toISOString().split('T')[0]
}

const hoje = () => new Date().toISOString().split('T')[0]

const inputClass =
  'w-full px-4 py-2.5 rounded-lg border border-kihon-gray-medium/30 bg-white text-kihon-dark text-sm focus:outline-none focus:ring-2 focus:ring-kihon-red focus:border-transparent transition-all'

const labelClass = 'block text-xs font-semibold text-kihon-dark/70 mb-1 uppercase tracking-wide'

export default function Orcamento() {
  const [autenticado, setAutenticado] = useState(
    () => typeof window !== 'undefined' && sessionStorage.getItem(AUTH_KEY) === 'true'
  )

  const previewRef = useRef(null)
  const [view, setView] = useState('both') // 'form' | 'preview' | 'both'

  const [form, setForm] = useState({
    numero: gerarNumero(),
    dataEmissao: hoje(),
    validade: '30',
    nomeCliente: '',
    empresaCliente: '',
    emailCliente: '',
    telefoneCliente: '',
    cnpjCliente: '',
    tiposServico: [],
    tituloProposta: '',
    descricao: '',
    entregaveis: [''],
    valorRaw: '',
    formaPagamento: '',
    prazoExecucao: '',
    inicioEstimado: '',
    observacoes: '',
    nomeContato: 'Regio Lopes',
    cargoContato: 'CEO & Fundador',
    emailContato: 'regio.lopes@kihon.dev.br',
    telefoneContato: '(85) 99727-5766',
    // Parceria / Joint Venture
    propostaConjunta: false,
    exibirBannerWorkenge: false,
    parceiroNome: 'Workenge',
    parceiroSegmento: 'Engenharia de Mercado',
    descricaoParceria: DESCRICAO_PARCERIA_PADRAO,
  })

  const set = (field, value) => setForm((f) => ({ ...f, [field]: value }))

  const [novoServico, setNovoServico] = useState('')

  const toggleServico = (t) =>
    setForm((f) => ({
      ...f,
      tiposServico: f.tiposServico.includes(t)
        ? f.tiposServico.filter((s) => s !== t)
        : [...f.tiposServico, t],
    }))

  const addServicoCustom = () => {
    const v = novoServico.trim()
    if (!v) return
    setForm((f) => ({
      ...f,
      tiposServico: f.tiposServico.includes(v) ? f.tiposServico : [...f.tiposServico, v],
    }))
    setNovoServico('')
  }

  const servicosCustom = form.tiposServico.filter((s) => !TIPOS_SERVICO.includes(s))

  const setEntregavel = (i, value) => {
    const list = [...form.entregaveis]
    list[i] = value
    set('entregaveis', list)
  }

  const addEntregavel = () => set('entregaveis', [...form.entregaveis, ''])
  const removeEntregavel = (i) => {
    if (form.entregaveis.length === 1) return
    set('entregaveis', form.entregaveis.filter((_, idx) => idx !== i))
  }

  const handleValor = (e) => {
    const raw = parseMoeda(e.target.value)
    set('valorRaw', raw)
  }

  const valorDisplay = form.valorRaw
    ? formatarMoeda(form.valorRaw)
    : ''

  const dataValidade = form.validade
    ? adicionarDias(form.dataEmissao, parseInt(form.validade))
    : ''

  const [gerandoPDF, setGerandoPDF] = useState(false)

  const handlePrint = () => {
    window.print()
  }

  const handleExportPDF = async () => {
    const el = previewRef.current
    if (!el || gerandoPDF) return
    if (el.offsetHeight === 0) {
      alert('Abra a pré-visualização (aba "Preview") antes de exportar o PDF.')
      return
    }

    setGerandoPDF(true)
    try {
      const [{ default: jsPDF }, { default: html2canvas }] = await Promise.all([
        import('jspdf'),
        import('html2canvas'),
      ])

      // Pontos de quebra "seguros" = topo de cada seção do documento (medidos no DOM),
      // para que uma página nunca corte uma seção no meio.
      const containerTop = el.getBoundingClientRect().top
      const contentEl = el.querySelector('[data-pdf-content]')
      const footerEl = el.querySelector('[data-pdf-footer]')

      const breaksCss = [0]
      if (contentEl) {
        Array.from(contentEl.children).forEach((child) => {
          breaksCss.push(child.getBoundingClientRect().top - containerTop)
        })
      }
      const footerTopCss = footerEl
        ? footerEl.getBoundingClientRect().top - containerTop
        : el.scrollHeight
      breaksCss.push(footerTopCss)

      const canvas = await html2canvas(el, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
        imageTimeout: 0,
      })

      const Wc = canvas.width
      const Hc = canvas.height
      const s = Hc / el.scrollHeight // px-canvas por px-css

      const pdf = new jsPDF('p', 'mm', 'a4')
      const pageWmm = pdf.internal.pageSize.getWidth()
      const pageHmm = pdf.internal.pageSize.getHeight()

      const cToMm = (c) => (c * pageWmm) / Wc
      const mmToC = (mm) => (mm * Wc) / pageWmm
      const pxPerPage = mmToC(pageHmm)

      // Rodapé (fixado no fim de cada página, estilo papel timbrado)
      const footerTopC = Math.round(footerTopCss * s)
      const footerHc = Hc - footerTopC
      const footerHmm = cToMm(footerHc)
      const gapMm = 7
      const gapC = mmToC(gapMm)
      const availContentC = pxPerPage - footerHc - gapC

      const bps = Array.from(
        new Set(breaksCss.map((y) => Math.round(y * s)).filter((y) => y >= 0 && y <= footerTopC))
      ).sort((a, b) => a - b)

      // Desenha um trecho [startC, endC) do canvas em yMm da página atual
      const drawSlice = (startC, endC, yMm) => {
        const sliceH = Math.round(endC - startC)
        if (sliceH <= 0) return
        const tmp = document.createElement('canvas')
        tmp.width = Wc
        tmp.height = sliceH
        const ctx = tmp.getContext('2d')
        ctx.fillStyle = '#ffffff'
        ctx.fillRect(0, 0, Wc, sliceH)
        ctx.drawImage(canvas, 0, startC, Wc, sliceH, 0, 0, Wc, sliceH)
        pdf.addImage(tmp.toDataURL('image/jpeg', 0.96), 'JPEG', 0, yMm, pageWmm, cToMm(sliceH))
      }

      // Paginação: conteúdo flui do topo; rodapé repetido no fim de cada página
      let startC = 0
      let pageIndex = 0
      while (startC < footerTopC - 1) {
        if (pageIndex > 0) pdf.addPage()

        const naiveEnd = startC + availContentC
        let cut
        if (naiveEnd >= footerTopC) {
          cut = footerTopC // última página: todo o restante cabe
        } else {
          cut = -1
          for (const bp of bps) {
            if (bp > startC && bp <= naiveEnd) cut = bp
          }
          if (cut <= startC) cut = Math.round(naiveEnd) // fallback: seção maior que a página
        }

        drawSlice(startC, cut, 0) // conteúdo no topo
        if (footerHc > 0) drawSlice(footerTopC, Hc, pageHmm - footerHmm) // rodapé embaixo

        startC = cut
        pageIndex++
      }

      // Numeração discreta acima do rodapé (só se houver mais de uma página)
      const totalPaginas = pdf.getNumberOfPages()
      if (totalPaginas > 1) {
        for (let i = 1; i <= totalPaginas; i++) {
          pdf.setPage(i)
          pdf.setFontSize(7)
          pdf.setTextColor(148, 163, 184)
          pdf.text(`Página ${i} de ${totalPaginas}`, pageWmm - 12, pageHmm - footerHmm - 4, {
            align: 'right',
          })
        }
      }

      const nomeArquivo = `Proposta_${(form.numero || 'Kihon').replace(/[^\w-]/g, '_')}.pdf`
      pdf.save(nomeArquivo)
    } catch (err) {
      console.error('Erro ao gerar PDF:', err)
      alert('Não foi possível gerar o PDF. Tente novamente ou use a opção "Imprimir".')
    } finally {
      setGerandoPDF(false)
    }
  }

  const entregaveisValidos = form.entregaveis.filter((e) => e.trim())

  if (!autenticado) {
    return <TelaSenha onSuccess={() => setAutenticado(true)} />
  }

  return (
    <div className="min-h-screen bg-gray-100 font-sans">

      {/* Barra de controle - no-print */}
      <div className="no-print bg-kihon-dark shadow-lg sticky top-0 z-50">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <KihonLogo size="small" color="light" className="h-7 w-auto" />
            <span className="text-kihon-gray-medium text-sm hidden sm:block">/ Gerador de Orçamento</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Toggle view - mobile */}
            <div className="flex bg-kihon-dark/60 rounded-lg p-1 gap-1 sm:hidden">
              <button
                onClick={() => setView('form')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${view === 'form' ? 'bg-kihon-red text-white' : 'text-kihon-gray-medium'}`}
              >
                <FaEdit className="inline mr-1" />Editar
              </button>
              <button
                onClick={() => setView('preview')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${view === 'preview' ? 'bg-kihon-red text-white' : 'text-kihon-gray-medium'}`}
              >
                <FaEye className="inline mr-1" />Preview
              </button>
            </div>

            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-2 bg-white/10 hover:bg-white/20 text-kihon-gray-light font-semibold py-2 px-4 rounded-lg text-sm transition-all"
            >
              <FaPrint size={13} />
              <span>Imprimir</span>
            </button>

            <button
              onClick={handleExportPDF}
              disabled={gerandoPDF}
              className="flex items-center gap-2 bg-kihon-red hover:bg-kihon-red/90 disabled:opacity-60 disabled:cursor-wait text-white font-semibold py-2 px-4 rounded-lg text-sm transition-all shadow hover:shadow-lg"
            >
              {gerandoPDF ? <FaSpinner size={14} className="animate-spin" /> : <FaFilePdf size={14} />}
              <span>{gerandoPDF ? 'Gerando...' : 'Baixar PDF'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Layout principal */}
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* ── FORMULÁRIO ── */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className={`no-print lg:w-[420px] flex-shrink-0 space-y-4 ${view === 'preview' ? 'hidden' : 'block'} ${view === 'form' ? 'w-full' : ''}`}
          >

            {/* Identificação */}
            <Section title="Identificação da Proposta">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelClass}>Nº da Proposta</label>
                  <input className={inputClass} value={form.numero} onChange={(e) => set('numero', e.target.value)} />
                </div>
                <div>
                  <label className={labelClass}>Data de Emissão</label>
                  <input type="date" className={inputClass} value={form.dataEmissao} onChange={(e) => set('dataEmissao', e.target.value)} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Validade da Proposta</label>
                <select className={inputClass} value={form.validade} onChange={(e) => set('validade', e.target.value)}>
                  {VALIDADES.map((v) => (
                    <option key={v.days} value={String(v.days)}>{v.label}</option>
                  ))}
                </select>
                {dataValidade && (
                  <p className="text-xs text-kihon-gray-medium mt-1">
                    Válida até: <span className="font-semibold text-kihon-dark">{dataFormatada(dataValidade)}</span>
                  </p>
                )}
              </div>
            </Section>

            {/* Parceria / Joint Venture */}
            <Section title="Parceria — Joint Venture">
              <label className="flex items-center gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 accent-kihon-red"
                  checked={form.propostaConjunta}
                  onChange={(e) => set('propostaConjunta', e.target.checked)}
                />
                <span className="text-sm font-medium text-kihon-dark">
                  Proposta conjunta com a {form.parceiroNome || 'Workenge'}
                </span>
              </label>

              {form.propostaConjunta && (
                <div className="space-y-3 pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <img
                      src={WORKENGE_LOGO}
                      alt="Workenge"
                      className="h-10 w-10 rounded-md border border-gray-200 object-contain bg-white"
                    />
                    <p className="text-xs text-kihon-gray-medium">
                      A logomarca e a identidade da parceira serão exibidas na proposta.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className={labelClass}>Nome da Parceira</label>
                      <input className={inputClass} value={form.parceiroNome} onChange={(e) => set('parceiroNome', e.target.value)} />
                    </div>
                    <div>
                      <label className={labelClass}>Segmento</label>
                      <input className={inputClass} value={form.parceiroSegmento} onChange={(e) => set('parceiroSegmento', e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Descrição da Parceria</label>
                    <textarea
                      className={`${inputClass} resize-none`}
                      rows={4}
                      value={form.descricaoParceria}
                      onChange={(e) => set('descricaoParceria', e.target.value)}
                    />
                  </div>
                  <label className="flex items-center gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 accent-kihon-red"
                      checked={form.exibirBannerWorkenge}
                      onChange={(e) => set('exibirBannerWorkenge', e.target.checked)}
                    />
                    <span className="text-sm text-kihon-dark">Exibir banner da parceira no topo do documento</span>
                  </label>
                </div>
              )}
            </Section>

            {/* Dados do Cliente */}
            <Section title="Dados do Cliente">
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2">
                  <label className={labelClass}>Nome / Responsável</label>
                  <input className={inputClass} placeholder="Ex.: João Silva" value={form.nomeCliente} onChange={(e) => set('nomeCliente', e.target.value)} />
                </div>
                <div className="col-span-2">
                  <label className={labelClass}>Empresa</label>
                  <input className={inputClass} placeholder="Ex.: Empresa LTDA" value={form.empresaCliente} onChange={(e) => set('empresaCliente', e.target.value)} />
                </div>
                <div>
                  <label className={labelClass}>E-mail</label>
                  <input type="email" className={inputClass} placeholder="email@empresa.com" value={form.emailCliente} onChange={(e) => set('emailCliente', e.target.value)} />
                </div>
                <div>
                  <label className={labelClass}>Telefone</label>
                  <input className={inputClass} placeholder="(00) 00000-0000" value={form.telefoneCliente} onChange={(e) => set('telefoneCliente', e.target.value)} />
                </div>
                <div className="col-span-2">
                  <label className={labelClass}>CNPJ / CPF (opcional)</label>
                  <input className={inputClass} placeholder="00.000.000/0001-00" value={form.cnpjCliente} onChange={(e) => set('cnpjCliente', e.target.value)} />
                </div>
              </div>
            </Section>

            {/* Serviço */}
            <Section title="Serviço e Escopo">
              <div>
                <label className={labelClass}>Tipos de Serviço <span className="text-kihon-gray-medium normal-case font-normal">(selecione um ou mais)</span></label>
                <div className="flex flex-wrap gap-2">
                  {TIPOS_SERVICO.map((t) => {
                    const active = form.tiposServico.includes(t)
                    return (
                      <button
                        key={t}
                        type="button"
                        onClick={() => toggleServico(t)}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                          active
                            ? 'bg-kihon-red text-white border-kihon-red shadow-sm'
                            : 'bg-white text-kihon-dark/70 border-kihon-gray-medium/30 hover:border-kihon-red hover:text-kihon-red'
                        }`}
                      >
                        {t}
                      </button>
                    )
                  })}
                </div>

                {/* Serviços customizados já adicionados */}
                {servicosCustom.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {servicosCustom.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-kihon-dark text-white"
                      >
                        {t}
                        <button
                          type="button"
                          onClick={() => toggleServico(t)}
                          className="text-white/70 hover:text-white"
                          title="Remover"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                )}

                {/* Adicionar serviço personalizado */}
                <div className="flex gap-2 mt-2">
                  <input
                    className={`${inputClass} flex-1`}
                    placeholder="Adicionar outro serviço..."
                    value={novoServico}
                    onChange={(e) => setNovoServico(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault()
                        addServicoCustom()
                      }
                    }}
                  />
                  <button
                    type="button"
                    onClick={addServicoCustom}
                    className="flex items-center gap-1.5 bg-kihon-dark/5 hover:bg-kihon-red hover:text-white text-kihon-dark font-semibold px-3 rounded-lg text-xs transition-all border border-kihon-gray-medium/30"
                  >
                    <FaPlus size={10} /> Adicionar
                  </button>
                </div>
              </div>
              <div>
                <label className={labelClass}>Título da Proposta</label>
                <input className={inputClass} placeholder="Ex.: Sistema de Gestão de Pedidos" value={form.tituloProposta} onChange={(e) => set('tituloProposta', e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Descrição do Projeto</label>
                <textarea
                  className={`${inputClass} resize-none`}
                  rows={4}
                  placeholder="Descreva o que será desenvolvido, o problema a ser resolvido e o contexto do projeto..."
                  value={form.descricao}
                  onChange={(e) => set('descricao', e.target.value)}
                />
              </div>

              {/* Entregáveis */}
              <div>
                <label className={labelClass}>Entregáveis / O que está incluso</label>
                <div className="space-y-2">
                  {form.entregaveis.map((item, i) => (
                    <div key={i} className="flex gap-2 items-center">
                      <input
                        className={`${inputClass} flex-1`}
                        placeholder={`Entregável ${i + 1}...`}
                        value={item}
                        onChange={(e) => setEntregavel(i, e.target.value)}
                      />
                      <button
                        onClick={() => removeEntregavel(i)}
                        className="text-red-400 hover:text-red-600 p-1.5 transition-colors"
                        title="Remover"
                      >
                        <FaTrash size={12} />
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={addEntregavel}
                    className="flex items-center gap-1.5 text-kihon-red hover:text-kihon-red/80 text-xs font-semibold mt-1 transition-colors"
                  >
                    <FaPlus size={10} /> Adicionar entregável
                  </button>
                </div>
              </div>
            </Section>

            {/* Valor e Condições */}
            <Section title="Valor e Condições Comerciais">
              <div>
                <label className={labelClass}>Valor Total</label>
                <input
                  className={`${inputClass} text-lg font-semibold`}
                  placeholder="R$ 0,00"
                  value={valorDisplay}
                  onChange={handleValor}
                  inputMode="numeric"
                />
              </div>
              <div>
                <label className={labelClass}>Forma de Pagamento</label>
                <select className={inputClass} value={form.formaPagamento} onChange={(e) => set('formaPagamento', e.target.value)}>
                  <option value="">Selecione...</option>
                  {FORMAS_PAGAMENTO.map((f) => <option key={f}>{f}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelClass}>Prazo de Execução</label>
                  <input className={inputClass} placeholder="Ex.: 45 dias úteis" value={form.prazoExecucao} onChange={(e) => set('prazoExecucao', e.target.value)} />
                </div>
                <div>
                  <label className={labelClass}>Início Estimado</label>
                  <input type="date" className={inputClass} value={form.inicioEstimado} onChange={(e) => set('inicioEstimado', e.target.value)} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Observações Adicionais</label>
                <textarea
                  className={`${inputClass} resize-none`}
                  rows={3}
                  placeholder="Informações complementares, requisitos especiais, exclusões de escopo..."
                  value={form.observacoes}
                  onChange={(e) => set('observacoes', e.target.value)}
                />
              </div>
            </Section>

            {/* Contato Kihon */}
            <Section title="Contato Responsável (Kihon)">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelClass}>Nome</label>
                  <input className={inputClass} value={form.nomeContato} onChange={(e) => set('nomeContato', e.target.value)} />
                </div>
                <div>
                  <label className={labelClass}>Cargo</label>
                  <input className={inputClass} value={form.cargoContato} onChange={(e) => set('cargoContato', e.target.value)} />
                </div>
                <div>
                  <label className={labelClass}>E-mail</label>
                  <input className={inputClass} value={form.emailContato} onChange={(e) => set('emailContato', e.target.value)} />
                </div>
                <div>
                  <label className={labelClass}>Telefone</label>
                  <input className={inputClass} value={form.telefoneContato} onChange={(e) => set('telefoneContato', e.target.value)} />
                </div>
              </div>
            </Section>

          </motion.aside>

          {/* ── PREVIEW ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className={`flex-1 ${view === 'form' ? 'hidden lg:block' : 'block'}`}
          >
            {/* Indicador de preview - no-print */}
            <div className="no-print flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-kihon-gray-medium uppercase tracking-wider flex items-center gap-1.5">
                <FaEye size={11} /> Pré-visualização
              </span>
              <span className="text-xs text-kihon-gray-medium">Clique em "Baixar PDF" para exportar</span>
            </div>

            {/* Documento */}
            <div
              id="proposta-kihon"
              ref={previewRef}
              className="bg-white shadow-strong rounded-xl overflow-hidden print-area"
              style={{ fontFamily: "'Inter', 'Roboto', system-ui, sans-serif" }}
            >

              {/* Banner da parceira (opcional) */}
              {form.propostaConjunta && form.exibirBannerWorkenge && (
                <img
                  src={WORKENGE_COVER}
                  alt={`${form.parceiroNome} — ${form.parceiroSegmento}`}
                  className="w-full h-40 object-cover"
                />
              )}

              {/* Cabeçalho do documento */}
              <div className="bg-kihon-dark px-8 py-6 relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `radial-gradient(circle, #E53935 1px, transparent 1px)`,
                    backgroundSize: '18px 18px',
                  }}
                />
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <KihonLogo size="default" color="light" className="h-10 w-auto -mr-7" />
                      {form.propostaConjunta && (
                        <>
                          <span className="text-kihon-gray-medium text-2xl font-light leading-none">×</span>
                          <img
                            src={WORKENGE_LOGO}
                            alt={form.parceiroNome}
                            className="h-11 w-11 rounded-md bg-white p-1 object-contain"
                          />
                        </>
                      )}
                    </div>
                    <p className="text-kihon-gray-medium text-xs mt-2">
                      {form.propostaConjunta
                        ? `Kihon & ${form.parceiroNome || 'Workenge'} — Fortaleza, CE`
                        : 'Fortaleza, CE — Brasil'}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-kihon-red font-bold text-lg uppercase tracking-widest">Proposta Comercial</p>
                    <p className="text-kihon-gray-light text-sm font-mono">{form.numero || 'KIH-0000-000'}</p>
                    <p className="text-kihon-gray-medium text-xs mt-1">Emitida em {dataFormatada(form.dataEmissao)}</p>
                  </div>
                </div>
              </div>

              {/* Faixa vermelha */}
              <div className="h-1 bg-kihon-red" />

              <div className="px-8 py-7 space-y-6" data-pdf-content>

                {/* Dados cliente + validade */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <InfoBox label="Destinatário">
                    {form.nomeCliente && <p className="font-semibold text-kihon-dark">{form.nomeCliente}</p>}
                    {form.empresaCliente && <p className="text-kihon-gray-medium">{form.empresaCliente}</p>}
                    {form.emailCliente && <p className="text-kihon-gray-medium text-sm">{form.emailCliente}</p>}
                    {form.telefoneCliente && <p className="text-kihon-gray-medium text-sm">{form.telefoneCliente}</p>}
                    {form.cnpjCliente && <p className="text-kihon-gray-medium text-sm">{form.cnpjCliente}</p>}
                    {!form.nomeCliente && !form.empresaCliente && (
                      <p className="text-gray-300 italic text-sm">Preencha os dados do cliente</p>
                    )}
                  </InfoBox>

                  <InfoBox label="Validade e Prazo">
                    <Row label="Emissão" value={dataFormatada(form.dataEmissao)} />
                    <Row label="Válida até" value={dataValidade ? dataFormatada(dataValidade) : '—'} highlight />
                    {form.inicioEstimado && <Row label="Início estimado" value={dataFormatada(form.inicioEstimado)} />}
                    {form.prazoExecucao && <Row label="Prazo de execução" value={form.prazoExecucao} />}
                  </InfoBox>
                </div>

                {/* Parceria / Joint Venture */}
                {form.propostaConjunta && form.descricaoParceria && (
                  <div className="bg-kihon-red/5 border border-kihon-red/20 rounded-xl p-5 flex flex-col sm:flex-row gap-4 items-start">
                    <img
                      src={WORKENGE_LOGO}
                      alt={form.parceiroNome}
                      className="h-14 w-14 rounded-lg border border-gray-200 flex-shrink-0 object-contain bg-white"
                    />
                    <div>
                      <p className="text-xs font-bold text-kihon-red uppercase tracking-widest mb-1.5">
                        Proposta Conjunta · Kihon × {form.parceiroNome || 'Workenge'}
                      </p>
                      <p className="text-kihon-gray-medium text-sm leading-relaxed whitespace-pre-line">
                        {form.descricaoParceria}
                      </p>
                    </div>
                  </div>
                )}

                {/* Serviço */}
                <div>
                  <SectionTitle>Objeto da Proposta</SectionTitle>
                  {form.tiposServico.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {form.tiposServico.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center bg-kihon-red/10 text-kihon-red text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wide leading-none"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                  {form.tituloProposta && (
                    <h2 className="text-xl font-bold text-kihon-dark mb-2 font-display">{form.tituloProposta}</h2>
                  )}
                  {form.descricao ? (
                    <p className="text-kihon-gray-medium text-sm leading-relaxed whitespace-pre-line">{form.descricao}</p>
                  ) : (
                    <p className="text-gray-300 italic text-sm">Descreva o projeto no formulário ao lado.</p>
                  )}
                </div>

                {/* Entregáveis */}
                {entregaveisValidos.length > 0 && (
                  <div>
                    <SectionTitle>Escopo e Entregáveis</SectionTitle>
                    <ul className="space-y-2">
                      {entregaveisValidos.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <FaCheckCircle className="text-kihon-red mt-0.5 flex-shrink-0" size={14} />
                          <span className="text-kihon-dark text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Investimento */}
                <div className="bg-kihon-dark rounded-xl p-6 relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage: `radial-gradient(circle, #E53935 1px, transparent 1px)`,
                      backgroundSize: '16px 16px',
                    }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-kihon-red rounded-sm flex-shrink-0" />
                      <h3 className="text-xs font-bold text-white uppercase tracking-widest">Investimento</h3>
                      <div className="flex-1 h-px bg-white/15" />
                    </div>

                    {form.formaPagamento || form.prazoExecucao ? (
                      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
                        <div className="space-y-2 flex-1">
                          {form.formaPagamento && (
                            <RowDark label="Forma de pagamento" value={form.formaPagamento} />
                          )}
                          {form.prazoExecucao && (
                            <RowDark label="Prazo de execução" value={form.prazoExecucao} />
                          )}
                        </div>
                        <div className="text-left sm:text-right border-t sm:border-t-0 sm:border-l border-white/15 sm:pl-6 pt-4 sm:pt-0">
                          <p className="text-[10px] font-semibold text-kihon-gray-medium uppercase tracking-widest mb-1">Valor Total</p>
                          <p className="text-4xl font-bold text-white font-display leading-none">
                            {valorDisplay || 'R$ —'}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-[10px] font-semibold text-kihon-gray-medium uppercase tracking-widest">
                          Valor Total do Investimento
                        </p>
                        <p className="text-4xl font-bold text-white font-display leading-none">
                          {valorDisplay || 'R$ —'}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Observações */}
                {form.observacoes && (
                  <div>
                    <SectionTitle>Observações</SectionTitle>
                    <p className="text-kihon-gray-medium text-sm leading-relaxed whitespace-pre-line">{form.observacoes}</p>
                  </div>
                )}

                {/* Assinaturas */}
                <div>
                  <SectionTitle>Aceite e Assinaturas</SectionTitle>
                  <div className={`grid gap-6 ${form.propostaConjunta ? 'sm:grid-cols-3' : 'sm:grid-cols-2 gap-8'}`}>
                    <div>
                      <div className="border-b-2 border-kihon-dark/20 mb-3 h-12" />
                      <p className="text-sm font-semibold text-kihon-dark">{form.nomeContato || 'Kihon'}</p>
                      <p className="text-xs text-kihon-gray-medium">{form.cargoContato} — Kihon</p>
                      {form.emailContato && <p className="text-xs text-kihon-gray-medium">{form.emailContato}</p>}
                    </div>
                    {form.propostaConjunta && (
                      <div>
                        <div className="border-b-2 border-kihon-dark/20 mb-3 h-12" />
                        <p className="text-sm font-semibold text-kihon-dark">{WORKENGE_RESPONSAVEL}</p>
                        <p className="text-xs text-kihon-gray-medium">
                          {form.parceiroSegmento || 'Engenharia de Mercado'} — {form.parceiroNome || 'Workenge'}
                        </p>
                      </div>
                    )}
                    <div>
                      <div className="border-b-2 border-kihon-dark/20 mb-3 h-12" />
                      <p className="text-sm font-semibold text-kihon-dark">{form.nomeCliente || 'Cliente'}</p>
                      {form.empresaCliente && <p className="text-xs text-kihon-gray-medium">{form.empresaCliente}</p>}
                      <p className="text-xs text-kihon-gray-medium">Data: ___/___/______</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Rodapé do documento */}
              <div className="bg-kihon-dark px-8 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2" data-pdf-footer>
                <div className="flex items-center gap-4 text-xs text-kihon-gray-medium">
                  {form.emailContato && <span>{form.emailContato}</span>}
                  {form.telefoneContato && <span>{form.telefoneContato}</span>}
                </div>
                <p className="text-xs text-kihon-gray-medium">
                  {form.propostaConjunta && `Kihon × ${form.parceiroNome || 'Workenge'} · `}
                  Proposta {form.numero} · Emitida em {dataFormatada(form.dataEmissao)}
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

// ── Componentes auxiliares internos ──

function TelaSenha({ onSuccess }) {
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (senha === SENHA_ACESSO) {
      sessionStorage.setItem(AUTH_KEY, 'true')
      onSuccess()
    } else {
      setErro(true)
    }
  }

  return (
    <div className="min-h-screen bg-kihon-dark flex items-center justify-center px-4 relative overflow-hidden font-sans">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, #E53935 1px, transparent 1px)`,
          backgroundSize: '18px 18px',
        }}
      />
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 w-full max-w-sm bg-white rounded-2xl shadow-strong p-8 space-y-5"
      >
        <div className="flex flex-col items-center text-center gap-3">
          <KihonLogo size="default" color="dark" className="h-9 w-auto" />
          <div className="flex items-center gap-2 text-kihon-dark mt-2">
            <FaLock className="text-kihon-red" size={14} />
            <h1 className="text-lg font-bold">Área Restrita</h1>
          </div>
          <p className="text-sm text-kihon-gray-medium">
            Digite a senha para acessar o gerador de orçamentos.
          </p>
        </div>

        <div>
          <input
            type="password"
            autoFocus
            value={senha}
            onChange={(e) => {
              setSenha(e.target.value)
              setErro(false)
            }}
            placeholder="Senha de acesso"
            className={inputClass}
          />
          {erro && (
            <p className="text-red-500 text-xs mt-2">Senha incorreta. Tente novamente.</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-kihon-red hover:bg-kihon-red/90 text-white font-semibold py-2.5 rounded-lg transition-all shadow hover:shadow-lg"
        >
          Entrar
        </button>
      </motion.form>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div className="bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden">
      <div className="bg-kihon-dark/5 border-b border-gray-100 px-4 py-2.5">
        <h3 className="text-xs font-bold text-kihon-dark uppercase tracking-wider">{title}</h3>
      </div>
      <div className="p-4 space-y-3">{children}</div>
    </div>
  )
}

function SectionTitle({ children }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <div className="w-3 h-3 bg-kihon-red rounded-sm flex-shrink-0" />
      <h3 className="text-xs font-bold text-kihon-dark uppercase tracking-widest">{children}</h3>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  )
}

function InfoBox({ label, children }) {
  return (
    <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
      <p className="text-xs font-bold text-kihon-gray-medium uppercase tracking-widest mb-2">{label}</p>
      <div className="space-y-0.5 text-sm">{children}</div>
    </div>
  )
}

function Row({ label, value, highlight }) {
  return (
    <div className="flex justify-between items-center gap-2">
      <span className="text-kihon-gray-medium text-xs">{label}</span>
      <span className={`text-sm font-semibold ${highlight ? 'text-kihon-red' : 'text-kihon-dark'}`}>{value}</span>
    </div>
  )
}

function RowDark({ label, value }) {
  return (
    <div className="flex justify-between items-center gap-3">
      <span className="text-kihon-gray-medium text-xs">{label}</span>
      <span className="text-sm font-semibold text-white text-right">{value}</span>
    </div>
  )
}
