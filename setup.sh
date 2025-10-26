#!/bin/bash

echo "🚀 Configurando Portfólio Profissional - Regio"
echo "=============================================="

# Verificar se o Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não encontrado. Por favor, instale o Node.js 18+ primeiro."
    echo "   Acesse: https://nodejs.org/"
    exit 1
fi

# Verificar versão do Node.js
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js versão 18+ é necessária. Versão atual: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detectado"

# Instalar dependências
echo "📦 Instalando dependências..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependências instaladas com sucesso!"
else
    echo "❌ Erro ao instalar dependências"
    exit 1
fi

# Criar arquivo .env de exemplo
if [ ! -f .env ]; then
    echo "📝 Criando arquivo .env de exemplo..."
    cat > .env << EOF
# Configurações do Portfólio - Regio Lopes
VITE_SITE_TITLE="Regio Lopes - Engenheiro de Dados & Programador"
VITE_SITE_DESCRIPTION="Portfólio profissional de Regio Lopes - Engenheiro de Dados e Programador"
VITE_CONTACT_EMAIL="regio@email.com"
VITE_GITHUB_URL="https://github.com/regiolopes"
VITE_LINKEDIN_URL="https://www.linkedin.com/in/regiolopes/"
EOF
    echo "✅ Arquivo .env criado"
fi

echo ""
echo "🎉 Setup concluído com sucesso!"
echo ""
echo "📋 Próximos passos:"
echo "1. Edite os arquivos em src/components/ para personalizar seu portfólio"
echo "2. Execute 'npm run dev' para iniciar o servidor de desenvolvimento"
echo "3. Execute 'npm run build' para gerar a versão de produção"
echo "4. Siga o guia em DEPLOY.md para fazer o deploy gratuito"
echo ""
echo "🔗 Links úteis:"
echo "- Desenvolvimento: npm run dev"
echo "- Build: npm run build"
echo "- Preview: npm run preview"
echo "- Deploy: Vercel (recomendado) ou Netlify"
echo ""
echo "📚 Documentação completa em README.md"
echo "🚀 Guia de deploy em DEPLOY.md"
echo ""
echo "Boa sorte com seu portfólio! 🎯"
