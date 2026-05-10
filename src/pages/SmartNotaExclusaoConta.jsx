import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import KihonHeader from '../components/kihon/KihonHeader'
import KihonFooter from '../components/kihon/KihonFooter'

const META_DESCRIPTION =
  'Como solicitar exclusão de conta e dados no Smart Nota (desenvolvedor na Google Play: Regio Lopes): etapas, retenções e contato.'

function SmartNotaExclusaoConta() {
  useEffect(() => {
    const prevTitle = document.title
    const meta = document.querySelector('meta[name="description"]')
    const prevDesc = meta?.getAttribute('content') ?? ''
    document.title = 'Exclusão de conta e dados — Smart Nota | Kihon'
    if (meta) meta.setAttribute('content', META_DESCRIPTION)
    return () => {
      document.title = prevTitle
      if (meta) meta.setAttribute('content', prevDesc)
    }
  }, [])

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <div className="min-h-screen bg-kihon-white">
      <KihonHeader />
      <main className="pt-24">
        <section className="section-padding bg-kihon-dark text-kihon-white">
          <div className="container-max">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.08 } },
              }}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.h1
                variants={itemVariants}
                className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4"
              >
                Exclusão de conta e dados — Smart Nota
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-kihon-gray-medium text-sm md:text-base leading-relaxed"
              >
                Aplicativo <strong className="text-kihon-white font-semibold">Smart Nota</strong>. Na{' '}
                <strong className="text-kihon-white font-semibold">Google Play</strong>, o nome do{' '}
                <strong className="text-kihon-white font-semibold">desenvolvedor</strong> exibido na página{' '}
                <strong className="text-kihon-white font-semibold">Detalhes do app</strong> é{' '}
                <strong className="text-kihon-white font-semibold">Regio Lopes</strong>. O tratamento de dados pessoais
                do serviço é de responsabilidade do controlador{' '}
                <strong className="text-kihon-white font-semibold">
                  KIHON SOLUCOES EM TECNOLOGIA DA INFORMACAO LTDA
                </strong>{' '}
                (marca <strong className="text-kihon-white font-semibold">Kihon</strong>), CNPJ 46.208.853/0001-14, Rua
                106 (Conj. Esperança), 196, Fortaleza/CE, Brasil — conforme a Política de Privacidade do app.
              </motion.p>
              <motion.p variants={itemVariants} className="text-kihon-gray-medium text-sm mt-4">
                Última revisão: 10/05/2026
              </motion.p>
            </motion.div>
          </div>
        </section>

        <article className="section-padding bg-kihon-white">
          <div className="container-max max-w-3xl mx-auto text-kihon-dark space-y-10 text-base leading-relaxed">
            <p className="text-kihon-gray-medium text-sm border border-kihon-gray-medium/25 rounded-xl p-4 bg-kihon-gray-light/40">
              Esta página atende ao requisito da Google Play de <strong>URL para exclusão de contas</strong>. Para a
              política completa de privacidade, consulte a{' '}
              <Link
                to="/privacidade/smart-nota"
                className="text-kihon-red hover:underline font-medium"
              >
                Política de Privacidade — Smart Nota
              </Link>
              .
            </p>

            <Section title="Como solicitar a exclusão da conta e dos dados">
              <p>Siga estas etapas na ordem. Responderemos em prazo compatível com a LGPD (em regra até 15 dias, podendo ser prorrogado por mais 15 dias com justificativa, quando aplicável).</p>
              <ol className="list-decimal pl-6 space-y-6 mt-6">
                <li className="pl-2">
                  <strong className="text-kihon-dark">Use o recurso no app, se estiver disponível na sua versão</strong>
                  <p className="mt-2 text-kihon-dark/90">
                    Abra o <strong>Smart Nota</strong>, acesse as configurações da conta ou área de perfil e procure a
                    opção de <strong>excluir conta</strong> ou <strong>encerrar conta</strong>. Confirme quando o app
                    solicitar. Isso inicia o processo diretamente no serviço.
                  </p>
                </li>
                <li className="pl-2">
                  <strong className="text-kihon-dark">Envie um e-mail formal de solicitação</strong>
                  <p className="mt-2 text-kihon-dark/90">
                    Se não houver opção no app ou se preferir o canal por escrito, envie mensagem para{' '}
                    <a
                      href="mailto:contatokihon@gmail.com?subject=Smart%20Nota%20%E2%80%94%20Exclus%C3%A3o%20de%20conta%20e%20dados"
                      className="text-kihon-red hover:underline font-medium"
                    >
                      contatokihon@gmail.com
                    </a>{' '}
                    com o assunto sugerido: <strong>Smart Nota — Exclusão de conta e dados</strong>.
                  </p>
                </li>
                <li className="pl-2">
                  <strong className="text-kihon-dark">Identifique a conta com precisão</strong>
                  <p className="mt-2 text-kihon-dark/90">
                    No corpo do e-mail, informe o <strong>endereço de e-mail cadastrado</strong> na conta (ou a conta
                    Google usada no login, se for o caso) e, se souber, o <strong>número de telefone</strong> vinculado ao
                    WhatsApp no app. Isso evita exclusão da conta errada.
                  </p>
                </li>
                <li className="pl-2">
                  <strong className="text-kihon-dark">Aguarde a confirmação e conclua o que for pedido</strong>
                  <p className="mt-2 text-kihon-dark/90">
                    Podemos responder pedindo <strong>confirmação adicional</strong> de titularidade, por segurança.
                    Após concluir o processo, você receberá confirmação de que a exclusão foi registrada ou executada,
                    salvo retenções legais descritas abaixo.
                  </p>
                </li>
              </ol>
              <p className="mt-6">
                Dúvidas sobre privacidade ou encarregado (DPO):{' '}
                <a
                  href="mailto:regiolofilho@gmail.com"
                  className="text-kihon-red hover:underline font-medium"
                >
                  regiolofilho@gmail.com
                </a>{' '}
                (Regio Lopes).
              </p>
            </Section>

            <Section title="O que é excluído quando a conta é encerrada">
              <p>
                Após o processamento da sua solicitação, buscamos <strong>eliminar ou anonimizar</strong> os dados
                pessoais vinculados à sua conta que não precisem ser mantidos por obrigação legal ou defesa de direitos,
                incluindo de forma enunciativa:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>
                  <strong>Conta e autenticação:</strong> e-mail, nome (quando houver), identificadores internos de
                  usuário e dados de sessão/token associados ao serviço.
                </li>
                <li>
                  <strong>Dados de uso do app:</strong> notas fiscais e compras (chaves, valores, itens, categorias,
                  estabelecimentos, datas, origem dos lançamentos), orçamento, listagens, despesas fixas e demais conteúdos
                  armazenados para prestação do serviço.
                </li>
                <li>
                  <strong>WhatsApp:</strong> vínculo do número ao app e tratamentos associados a mensagens processadas
                  para a sua conta, na medida em que estejam armazenados em nossos sistemas em nome da sua conta.
                </li>
                <li>
                  <strong>Fluxos com IA:</strong> dados tratados exclusivamente para operar recursos de classificação ou
                  interpretação de texto ligados à sua conta, quando aplicável à exclusão.
                </li>
              </ul>
            </Section>

            <Section title="O que pode ser mantido e por quanto tempo">
              <p>
                Conforme a{' '}
                <Link to="/privacidade/smart-nota" className="text-kihon-red hover:underline font-medium">
                  Política de Privacidade
                </Link>{' '}
                (seção sobre retenção e exclusão), após a exclusão da conta podemos <strong>manter determinados dados pelo tempo necessário</strong> para:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>
                  <strong>Cumprimento de obrigação legal ou regulatória</strong> (por exemplo, obrigações relacionadas a
                  documentos fiscais ou registros exigidos por lei, quando couber no caso concreto).
                </li>
                <li>
                  <strong>Resolução de litígios</strong> ou <strong>exercício regular de direitos</strong> em processos
                  administrativos ou judiciais.
                </li>
              </ul>
              <p className="mt-4">
                A <strong>duração exata</strong> dessa retenção adicional depende da <strong>natureza dos dados</strong> e
                da <strong>legislação aplicável</strong>. Quando não houver mais base para manter esses registros, eles
                serão eliminados ou anonimizados, conforme o caso.
              </p>
            </Section>

            <Section title="URL pública desta página">
              <p>
                Você pode informar esta URL nas configurações da Google Play (campo de exclusão de conta), desde que o
                domínio publicado seja o mesmo onde esta página está hospedada, por exemplo:
              </p>
              <p className="mt-4">
                <code className="text-sm bg-kihon-gray-light px-2 py-1.5 rounded block break-all">
                  https://kihon.dev.br/privacidade/smart-nota/exclusao-de-conta
                </code>
              </p>
            </Section>
          </div>
        </article>
      </main>
      <KihonFooter />
    </div>
  )
}

function Section({ title, children }) {
  return (
    <section className="scroll-mt-28">
      <h2 className="font-display text-xl md:text-2xl font-bold text-kihon-dark mb-4 pb-2 border-b border-kihon-gray-medium/20">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  )
}

export default SmartNotaExclusaoConta
