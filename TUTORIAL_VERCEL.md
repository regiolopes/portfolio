# 🚀 Tutorial Completo: Deploy no Vercel

## 📋 Pré-requisitos

- ✅ Conta no [GitHub](https://github.com)
- ✅ Conta no [Vercel](https://vercel.com)
- ✅ Projeto commitado no Git
- ✅ Node.js instalado (para testes locais)

## 🎯 Método 1: Deploy Automático (Recomendado)

### Passo 1: Criar Repositório no GitHub

1. **Acesse**: [GitHub](https://github.com)
2. **Clique**: "New repository" (botão verde)
3. **Configure**:
   - Repository name: `rp_meuportifolio`
   - Description: `Portfólio profissional - Régio Lopes`
   - ✅ Public (para deploy gratuito)
   - ❌ Não marque "Add README" (já temos)
4. **Clique**: "Create repository"

### Passo 2: Conectar Repositório Local

```bash
# Adicionar remote origin
git remote add origin https://github.com/SEU_USUARIO/rp_meuportifolio.git

# Push para GitHub
git push -u origin main
```

### Passo 3: Deploy no Vercel

1. **Acesse**: [Vercel](https://vercel.com)
2. **Faça login** com sua conta GitHub
3. **Clique**: "New Project"
4. **Selecione**: `rp_meuportifolio` da lista
5. **Configure**:
   - Framework Preset: **Vite**
   - Root Directory: `./` (padrão)
   - Build Command: `npm run build` (padrão)
   - Output Directory: `dist` (padrão)
6. **Clique**: "Deploy"
7. **Aguarde**: Deploy automático (2-3 minutos)

### Passo 4: Configurações Avançadas (Opcional)

1. **No painel do Vercel**, vá em "Settings"
2. **Domains**: Adicione domínio personalizado se desejar
3. **Environment Variables**: Configure se necessário
4. **Analytics**: Ative para métricas

## 🛠️ Método 2: Deploy Manual com CLI

### Passo 1: Instalar Vercel CLI

```bash
# Instalar globalmente
npm install -g vercel

# Ou usar npx (sem instalar)
npx vercel
```

### Passo 2: Login e Deploy

```bash
# Fazer login
vercel login

# Deploy (primeira vez)
vercel

# Deploy de produção
vercel --prod
```

### Passo 3: Configurar Deploy Automático

```bash
# Linkar projeto
vercel link

# Configurar para produção
vercel --prod
```

## ⚙️ Configurações Específicas do Projeto

### Arquivo `vercel.json` (Já incluído)

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Scripts no `package.json` (Já incluídos)

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy:vercel": "vercel --prod"
  }
}
```

## 🔧 Solução de Problemas

### Problema 1: Build Falha
```bash
# Verificar logs
vercel logs

# Solução comum
npm install
npm run build
```

### Problema 1.1: Invalid vercel.json
```bash
# Erro: Invalid vercel.json file provided
# Solução: Arquivo já corrigido no projeto
# Se ocorrer novamente, verificar se não há comentários no JSON
```

### Problema 2: Imagens Não Carregam
- ✅ Verificar se arquivos estão em `public/assets/`
- ✅ Usar caminhos relativos: `/assets/imagem.png`
- ✅ Verificar permissões dos arquivos

### Problema 3: Roteamento SPA
- ✅ Arquivo `vercel.json` já configurado
- ✅ Rewrites para `index.html`

### Problema 4: Variáveis de Ambiente
```bash
# Adicionar no Vercel Dashboard
# Settings > Environment Variables
VITE_API_URL=https://api.exemplo.com
```

## 📊 Monitoramento e Analytics

### Vercel Analytics
1. **Ativar**: Dashboard > Settings > Analytics
2. **Código**: Já incluído automaticamente
3. **Métricas**: Visualizações, performance, etc.

### Google Analytics (Opcional)
```html
<!-- Adicionar no index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🚀 Comandos Úteis

### Desenvolvimento Local
```bash
# Instalar dependências
npm install

# Executar localmente
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

### Deploy e Manutenção
```bash
# Deploy rápido
vercel --prod

# Ver logs
vercel logs

# Listar projetos
vercel list

# Remover projeto
vercel remove
```

## 📱 Testes Pós-Deploy

### Checklist de Verificação
- ✅ Site carrega corretamente
- ✅ Todas as seções funcionam
- ✅ Imagens carregam
- ✅ Links funcionam
- ✅ Gerador de CV funciona
- ✅ Responsivo em mobile
- ✅ Performance boa

### Ferramentas de Teste
- **PageSpeed Insights**: [Google](https://pagespeed.web.dev/)
- **GTmetrix**: [GTmetrix](https://gtmetrix.com/)
- **Mobile-Friendly Test**: [Google](https://search.google.com/test/mobile-friendly)

## 🔄 Atualizações Futuras

### Deploy Automático
- ✅ Push para `main` = Deploy automático
- ✅ Pull Requests = Preview deployments

### Deploy Manual
```bash
# Fazer mudanças
git add .
git commit -m "✨ Nova feature"
git push origin main

# Deploy manual (se necessário)
vercel --prod
```

## 💡 Dicas Importantes

### Performance
- ✅ Imagens otimizadas
- ✅ Lazy loading implementado
- ✅ Bundle size otimizado

### SEO
- ✅ Meta tags configuradas
- ✅ Sitemap (opcional)
- ✅ Robots.txt (opcional)

### Segurança
- ✅ HTTPS automático
- ✅ Headers de segurança
- ✅ CSP configurado

## 📞 Suporte

### Documentação Oficial
- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Vite Docs**: [vitejs.dev](https://vitejs.dev/)
- **React Docs**: [react.dev](https://react.dev/)

### Comunidade
- **Vercel Discord**: [vercel.com/discord](https://vercel.com/discord)
- **GitHub Issues**: [github.com/vercel/vercel](https://github.com/vercel/vercel)

---

## 🎉 Resultado Final

Após seguir este tutorial, você terá:

- ✅ **Site online**: `https://seu-projeto.vercel.app`
- ✅ **Deploy automático**: Push = Deploy
- ✅ **Performance otimizada**: CDN global
- ✅ **HTTPS**: Certificado SSL automático
- ✅ **Analytics**: Métricas de uso
- ✅ **Custom domain**: Opcional

**🚀 Seu portfólio estará online e profissional!**
