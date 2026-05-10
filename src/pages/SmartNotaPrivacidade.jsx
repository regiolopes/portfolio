import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import KihonHeader from '../components/kihon/KihonHeader'
import KihonFooter from '../components/kihon/KihonFooter'

const META_DESCRIPTION =
  'Política de Privacidade do Smart Nota (Kihon): dados, LGPD, WhatsApp, IA, compartilhamentos, direitos do titular e contato no Brasil.'

function SmartNotaPrivacidade() {
  useEffect(() => {
    const prevTitle = document.title
    const meta = document.querySelector('meta[name="description"]')
    const prevDesc = meta?.getAttribute('content') ?? ''
    document.title = 'Política de Privacidade — Smart Nota | Kihon'
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
                Política de Privacidade — Smart Nota
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-kihon-gray-medium text-sm md:text-base leading-relaxed"
              >
                Serviço operado por{' '}
                <strong className="text-kihon-white font-semibold">
                  KIHON SOLUCOES EM TECNOLOGIA DA INFORMACAO LTDA
                </strong>
                , CNPJ 46.208.853/0001-14, Rua 106 (Conj. Esperança), 196, Fortaleza/CE, Brasil.
              </motion.p>
              <motion.p variants={itemVariants} className="text-kihon-gray-medium text-sm mt-4">
                Última revisão: 17/04/2026
              </motion.p>
            </motion.div>
          </div>
        </section>

        <article className="section-padding bg-kihon-white">
          <div className="container-max max-w-3xl mx-auto text-kihon-dark space-y-10 text-base leading-relaxed">
            <Section title="1. Introdução">
              <p>
                Esta Política de Privacidade descreve como tratamos dados pessoais no{' '}
                <strong>Smart Nota</strong>, aplicativo móvel para iOS e Android que ajuda a organizar
                compras e notas fiscais eletrônicas (NFC-e), orçamento, categorias, despesas fixas e
                integração com o WhatsApp para registrar gastos e receitas por mensagem. O serviço pode
                utilizar inteligência artificial em servidores da Kihon para classificar itens e
                interpretar mensagens enviadas por esse canal.
              </p>
              <p>
                Ao utilizar o app, você declara ter lido e compreendido esta política. Se não concordar
                com o que aqui está descrito, recomendamos não utilizar o serviço ou não ativar
                funcionalidades opcionais que dependam de tratamentos específicos.
              </p>
            </Section>

            <Section title="2. Quem somos">
              <p>
                Somos o <strong>controlador</strong> dos dados pessoais tratados em relação ao Smart
                Nota, nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — “LGPD”).
              </p>
              <p>
                <strong>Encarregado de Proteção de Dados (DPO):</strong> Regio Lopes —{' '}
                <a
                  href="mailto:regiolofilho@gmail.com"
                  className="text-kihon-red hover:underline font-medium"
                >
                  regiolofilho@gmail.com
                </a>
              </p>
            </Section>

            <Section title="3. Quais dados coletamos">
              <p>Reunimos apenas o necessário para operar o serviço, conforme as funcionalidades que você utilizar.</p>

              <h3 className="font-display font-bold text-lg text-kihon-dark mt-6 mb-2">3.1 Conta e autenticação</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Cadastro com e-mail e senha</strong> e/ou <strong>Login com Google (OAuth)</strong>. O Google é
                  usado <strong>somente para autenticação</strong>; a conta fica vinculada ao nosso backend.
                </li>
                <li>
                  Dados típicos: <strong>e-mail</strong>, <strong>nome</strong> (quando informado no cadastro ou
                  disponibilizado pelo Google), <strong>identificador interno de usuário</strong> e{' '}
                  <strong>credenciais de sessão</strong> (por exemplo, token JWT) armazenadas de forma segura no
                  dispositivo.
                </li>
              </ul>

              <h3 className="font-display font-bold text-lg text-kihon-dark mt-6 mb-2">3.2 Dados de uso do app (núcleo do serviço)</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Notas fiscais e compras:</strong> por exemplo, <strong>chave de acesso da NFC-e</strong> quando
                  informada, <strong>valores</strong>, <strong>itens</strong>, <strong>categorias</strong>,{' '}
                  <strong>estabelecimentos</strong>, <strong>datas</strong> e <strong>origem</strong> do lançamento (como
                  importação de NFC-e ou registro via WhatsApp).
                </li>
                <li>
                  <strong>Orçamento</strong>, <strong>listagens de compras</strong> e <strong>despesas fixas</strong>,
                  conforme você configurar no app.
                </li>
              </ul>

              <h3 className="font-display font-bold text-lg text-kihon-dark mt-6 mb-2">3.3 WhatsApp</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Número de telefone</strong> quando você vincula o WhatsApp ao app, para reconhecer mensagens e
                  associá-las à sua conta.
                </li>
                <li>
                  <strong>Conteúdo das mensagens</strong> enviadas ao número integrado: recebidas por um{' '}
                  <strong>provedor de API de WhatsApp</strong> (por exemplo, Z-API), processadas pelo nosso backend para
                  criar lançamentos e, quando aplicável, gerar respostas automáticas com IA.
                </li>
              </ul>

              <h3 className="font-display font-bold text-lg text-kihon-dark mt-6 mb-2">3.4 Inteligência artificial</h3>
              <p>
                Para <strong>classificação de produtos/itens</strong> e <strong>interpretação de texto</strong>, podemos
                utilizar <strong>provedores de IA</strong> (por exemplo, OpenRouter e modelos de linguagem). Os dados
                necessários são tratados em servidores da Kihon e <strong>podem ser repassados ao provedor de IA</strong>{' '}
                na medida necessária para essa finalidade.
              </p>

              <h3 className="font-display font-bold text-lg text-kihon-dark mt-6 mb-2">3.5 Câmera, arquivos e notificações</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Câmera:</strong> usada <strong>apenas para leitura de QR Code da NFC-e</strong>. Não utilizamos a
                  câmera para armazenar fotos na galeria para esse fim, além do comportamento padrão do sistema
                  operacional.
                </li>
                <li>
                  <strong>Notificações locais</strong> no aparelho (por exemplo, status de importação de nota).{' '}
                  <strong>Notificações push remotas</strong> (por exemplo, via Firebase Cloud Messaging){' '}
                  <strong>não estão em uso nesta versão do app</strong>, salvo eventual atualização futura comunicada por
                  esta política ou pelo app.
                </li>
              </ul>

              <h3 className="font-display font-bold text-lg text-kihon-dark mt-6 mb-2">
                3.6 Dados que não coletamos de forma ativa para o funcionamento (transparência)
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Não vendemos</strong> dados pessoais.
                </li>
                <li>
                  <strong>Não utilizamos</strong> o identificador de publicidade do dispositivo (IDFA, no iOS, e
                  equivalente no Android) <strong>para publicidade comportamental ou rastreamento entre apps de terceiros</strong>.
                </li>
                <li>
                  <strong>Não incorporamos</strong> ferramentas de <strong>analytics de terceiros invasivas</strong> para
                  fins não essenciais ao funcionamento do serviço.
                </li>
              </ul>
              <p className="mt-4">
                Se algum desses pontos mudar, atualizaremos esta política e, quando exigido, solicitaremos consentimento ou
                informaremos as bases legais aplicáveis.
              </p>
            </Section>

            <Section title="4. Finalidades do tratamento">
              <p>Tratamos dados pessoais para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Prestar o Smart Nota:</strong> cadastro, login, sincronização com o backend, armazenamento e
                  exibição de notas, orçamento, categorias e despesas fixas.
                </li>
                <li>
                  <strong>Operar a integração com WhatsApp:</strong> receber e processar mensagens, associar à conta e
                  gerar lançamentos e respostas quando previsto.
                </li>
                <li>
                  <strong>Utilizar IA</strong> para classificar itens e interpretar texto, quando você utilizar fluxos que
                  dependam disso (por exemplo, mensagens no WhatsApp).
                </li>
                <li>
                  <strong>Segurança e prevenção a fraudes:</strong> proteger contas, detectar abusos e manter a integridade
                  do serviço.
                </li>
                <li>
                  <strong>Cumprir obrigações legais</strong> e responder a solicitações legítimas de autoridades, quando
                  aplicável.
                </li>
                <li>
                  <strong>Comunicações relacionadas ao serviço</strong> (por exemplo, suporte e avisos importantes sobre o
                  app).
                </li>
              </ul>
              <p className="mt-4">
                <strong>Marketing:</strong> Não enviamos newsletters ou comunicações promocionais sem seu opt-in explícito.
              </p>
            </Section>

            <Section title="5. Bases legais (LGPD)">
              <p>Dependendo do caso, fundamentamos o tratamento em:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Execução de contrato</strong> ou de procedimentos preliminares: para fornecer o app e as
                  funcionalidades contratadas de forma tácita ao aceitar os termos de uso e esta política.
                </li>
                <li>
                  <strong>Legítimo interesse</strong>, quando aplicável: por exemplo, melhorias compatíveis com sua
                  expectativa, segurança, prevenção de fraude e continuidade do serviço, observando seus direitos e
                  expectativas.
                </li>
                <li>
                  <strong>Consentimento</strong>, quando necessário: por exemplo, para certas comunicações opcionais ou
                  funcionalidades que dependam de consentimento específico, conforme o caso.
                </li>
                <li>
                  <strong>Cumprimento de obrigação legal ou regulatória</strong>, quando aplicável.
                </li>
              </ul>
              <p className="mt-4">
                O conteúdo das mensagens do WhatsApp é tratado para <strong>prestação do serviço</strong> que você escolheu
                utilizar. <strong>Não utilizamos</strong> esse conteúdo para fins não relacionados ao serviço{' '}
                <strong>sem base legal adequada e transparência</strong>. Você pode <strong>evitar certos fluxos</strong>{' '}
                (por exemplo, <strong>não vincular ou não usar o WhatsApp</strong>) se não quiser esse tipo de processamento
                para aquele canal.
              </p>
            </Section>

            <Section title="6. Com quem compartilhamos dados">
              <p>Podemos compartilhar dados com:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Provedores de infraestrutura e hospedagem</strong> necessários para operar o backend e o app.
                </li>
                <li>
                  <strong>Provedor de API de WhatsApp</strong> (por exemplo, Z-API), para receber e encaminhar mensagens ao
                  nosso sistema.
                </li>
                <li>
                  <strong>Provedores de autenticação</strong> (por exemplo, Google), <strong>somente no escopo do login</strong>{' '}
                  que você autorizar.
                </li>
                <li>
                  <strong>Provedores de inteligência artificial</strong> (por exemplo, OpenRouter / modelos de linguagem),
                  na medida necessária para classificação e interpretação de texto.
                </li>
                <li>
                  <strong>Autoridades públicas</strong>, quando houver base legal ou ordem competente.
                </li>
              </ul>
              <p className="mt-4">
                Não compartilhamos dados para <strong>venda</strong> de listas de usuários. Exigimos contratualmente que
                prestadores utilizem os dados <strong>apenas</strong> para as finalidades acordadas e com medidas
                compatíveis de segurança.
              </p>
            </Section>

            <Section title="7. Transferência internacional de dados">
              <p>
                Alguns <strong>serviços de terceiros ou servidores</strong> (incluindo provedores de IA ou nuvem) podem
                estar <strong>localizados fora do Brasil</strong>, inclusive em países com legislação diferente da
                brasileira.
              </p>
              <p>
                Quando houver transferência internacional, adotamos <strong>medidas compatíveis</strong> com a LGPD, como
                cláusulas contratuais e avaliação da necessidade e da segurança do tratamento, conforme aplicável.
              </p>
            </Section>

            <Section title="8. Cookies e site estático">
              <p>
                Esta página de política de privacidade pode ser publicada em site estático (por exemplo, em{' '}
                <code className="text-sm bg-kihon-gray-light px-1.5 py-0.5 rounded">
                  https://kihon.dev.br/privacidade/smart-nota
                </code>
                ). <strong>Esta página pode utilizar cookies técnicos</strong> estritamente necessários ao funcionamento do
                site ou do provedor de hospedagem. Se forem adicionados cookies não essenciais ou ferramentas de medição,
                atualizaremos esta seção e, quando exigido, solicitaremos consentimento.
              </p>
            </Section>

            <Section title="9. Direitos do titular">
              <p>Nos termos da LGPD, você pode solicitar, conforme o caso:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Confirmação de que tratamos seus dados e acesso aos dados;</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade;</li>
                <li>
                  Portabilidade dos dados a outro fornecedor de serviço, observadas regulamentações da Autoridade Nacional
                  de Proteção de Dados (ANPD);
                </li>
                <li>Informação sobre compartilhamentos;</li>
                <li>Revogação do consentimento, quando o tratamento se basear em consentimento;</li>
                <li>Oposição a tratamento fundado em hipótese legal que admita oposição.</li>
              </ul>
              <p className="mt-4">
                Para exercer seus direitos ou esclarecer dúvidas sobre privacidade, utilize o e-mail{' '}
                <a
                  href="mailto:contatokihon@gmail.com"
                  className="text-kihon-red hover:underline font-medium"
                >
                  contatokihon@gmail.com
                </a>
                . Responderemos em <strong>prazo razoável</strong>, em regra <strong>até 15 (quinze) dias</strong>, podendo
                ser prorrogado por mais <strong>15 (quinze) dias</strong>, com justificativa, nos termos da LGPD, quando
                aplicável.
              </p>
            </Section>

            <Section title="10. Segurança">
              <p>
                Adotamos medidas técnicas e organizacionais adequadas ao risco, como uso de <strong>HTTPS</strong>,{' '}
                <strong>controles de acesso</strong>, segregação de ambientes e boas práticas de desenvolvimento e operação.{' '}
                <strong>Nenhum sistema é 100% seguro</strong>; por isso, também recomendamos que você mantenha seu
                dispositivo atualizado e utilize senha forte.
              </p>
            </Section>

            <Section title="11. Retenção e exclusão">
              <p>
                Mantemos os dados <strong>enquanto sua conta estiver ativa</strong> e forem necessários para as finalidades
                descritas.
              </p>
              <p>
                Você pode solicitar <strong>exclusão da conta</strong> pelos meios disponíveis no app ou pelo contato
                indicado nesta política. Para etapas detalhadas, prazos de resposta e lista do que é excluído ou mantido,
                use a página dedicada:{' '}
                <Link
                  to="/privacidade/smart-nota/exclusao-de-conta"
                  className="text-kihon-red hover:underline font-medium"
                >
                  Exclusão de conta e dados — Smart Nota
                </Link>
                .
              </p>
              <p>
                Após a exclusão, poderemos <strong>manter determinados dados pelo tempo necessário</strong>{' '}
                para <strong>cumprimento de obrigação legal</strong>, <strong>resolução de litígios</strong> ou{' '}
                <strong>exercício regular de direitos</strong> (por exemplo, registros relacionados a notas fiscais e
                obrigações aplicáveis). A extensão exata da retenção pode depender da natureza dos dados e da legislação
                vigente.
              </p>
            </Section>

            <Section title="12. Público e menores de idade">
              <p>
                O Smart Nota <strong>pode ser utilizado por pessoas de todas as idades</strong>. Quando o tratamento de
                dados de <strong>crianças</strong> (em geral, menores de 12 anos, conforme a LGPD) estiver envolvido, pode ser
                necessário o <strong>consentimento específico e em destaque</strong> do responsável legal, conforme a lei e
                regulamentação da ANPD. Se você é responsável legal e tem dúvidas sobre o uso do app por menor, entre em
                contato conosco pelos canais indicados nesta política.
              </p>
            </Section>

            <Section title="13. Alterações desta política">
              <p>
                Podemos <strong>atualizar</strong> esta Política de Privacidade para refletir mudanças no app, na legislação
                ou em nossas práticas. A <strong>data da última revisão</strong> constará no topo ou rodapé desta página. O{' '}
                <strong>uso continuado</strong> do app após a publicação da versão atualizada constitui <strong>ciência</strong>{' '}
                das mudanças, salvo quando a lei exigir consentimento ou outra forma de manifestação.
              </p>
            </Section>

            <Section title="14. Contato">
              <ul className="list-none space-y-2 pl-0">
                <li>
                  <strong>E-mail para privacidade e direitos do titular:</strong>{' '}
                  <a
                    href="mailto:contatokihon@gmail.com"
                    className="text-kihon-red hover:underline font-medium"
                  >
                    contatokihon@gmail.com
                  </a>
                </li>
                <li>
                  <strong>Encarregado (DPO):</strong> Regio Lopes —{' '}
                  <a
                    href="mailto:regiolofilho@gmail.com"
                    className="text-kihon-red hover:underline font-medium"
                  >
                    regiolofilho@gmail.com
                  </a>
                </li>
                <li>
                  <strong>Controlador:</strong> KIHON SOLUCOES EM TECNOLOGIA DA INFORMACAO LTDA, CNPJ 46.208.853/0001-14, Rua
                  106 (Conj. Esperança), 196, Fortaleza/CE, Brasil.
                </li>
              </ul>
            </Section>

            <Section title="15. Legislação aplicável e foro">
              <p>
                Esta política é regida pelas leis da <strong>República Federativa do Brasil</strong>, em especial a LGPD.
                Fica eleito o foro da comarca de <strong>Fortaleza/CE</strong>, salvo disposição legal em contrário em
                relação a consumidores.
              </p>
            </Section>

            <div className="rounded-xl border border-kihon-gray-medium/25 bg-kihon-gray-light/50 p-6 text-sm text-kihon-dark">
              <h2 className="font-display font-bold text-base mb-2">Observação para lojas de aplicativo (Google Play / Apple)</h2>
              <p>
                Este documento serve como <strong>URL pública</strong> de referência sobre práticas de privacidade. As
                categorias e respostas nos formulários da Google (Data safety) e da Apple (Privacy Nutrition) devem ser{' '}
                <strong>coerentes</strong> com o que aqui está descrito e com o comportamento real do app; atualize os
                formulários sempre que o tratamento de dados mudar.
              </p>
              <p className="mt-3">
                <strong>Google Play — URL para exclusão de contas:</strong>{' '}
                <Link
                  to="/privacidade/smart-nota/exclusao-de-conta"
                  className="text-kihon-red hover:underline font-medium"
                >
                  /privacidade/smart-nota/exclusao-de-conta
                </Link>{' '}
                (na ficha da Play, o desenvolvedor é <strong>Regio Lopes</strong>; a página inclui identificação do app,
                etapas para solicitar exclusão e descrição do que é apagado ou retido).
              </p>
            </div>
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

export default SmartNotaPrivacidade
