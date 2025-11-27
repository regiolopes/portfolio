# Configuração do EmailJS para Formulário de Contato

O formulário de contato está configurado para usar o EmailJS, um serviço gratuito que permite enviar emails diretamente do frontend sem necessidade de backend.

## Passo a Passo para Configuração

### 1. Criar conta no EmailJS
1. Acesse https://www.emailjs.com/
2. Crie uma conta gratuita (permite até 200 emails/mês)

### 2. Criar um Serviço de Email
1. No dashboard, vá em **Email Services**
2. Clique em **Add New Service**
3. Escolha seu provedor de email (Gmail, Outlook, etc.)
4. Siga as instruções para conectar sua conta
5. **Copie o Service ID** (ex: `service_xxxxx`)

### 3. Criar um Template de Email
1. Vá em **Email Templates**
2. Clique em **Create New Template**
3. Use este template como base:

```
Assunto: Novo contato do site Kihon - {{assunto}}

Olá,

Você recebeu uma nova mensagem através do formulário de contato do site Kihon:

Nome: {{from_name}}
Email: {{from_email}}
Empresa: {{empresa}}
Cargo: {{cargo}}
Telefone: {{telefone}}
Orçamento: {{orcamento}}
Prazo: {{prazo}}
Assunto: {{assunto}}

Mensagem:
{{message}}

Newsletter: {{newsletter}}
```

4. **Copie o Template ID** (ex: `template_xxxxx`)

### 4. Obter a Public Key
1. Vá em **Account** > **General**
2. **Copie a Public Key** (ex: `xxxxxxxxxxxxx`)

### 5. Configurar Variáveis de Ambiente
1. Crie um arquivo `.env` na raiz do projeto
2. Adicione as seguintes variáveis:

```env
VITE_EMAILJS_SERVICE_ID=seu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID=seu_template_id_aqui
VITE_EMAILJS_PUBLIC_KEY=sua_public_key_aqui
```

### 6. Testar
1. Execute `npm run dev`
2. Preencha o formulário de contato
3. Envie uma mensagem de teste
4. Verifique se o email chegou em `regiolofilho@gmail.com`

## Nota de Segurança

⚠️ **Importante**: As variáveis de ambiente começam com `VITE_` porque são expostas no frontend. Isso é seguro para o EmailJS, mas não coloque chaves secretas aqui.

## Alternativas

Se preferir não usar EmailJS, você pode:
- Criar um backend próprio (Node.js, Python, etc.)
- Usar serviços como Formspree, Netlify Forms, ou SendGrid
- Configurar um webhook

## Suporte

Em caso de dúvidas, consulte a documentação oficial: https://www.emailjs.com/docs/

