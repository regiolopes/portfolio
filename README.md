# 🚀 Portfólio Profissional - Régio Lopes

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/regiolopes/rp_meuportifolio)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0.8-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.0-teal.svg)](https://tailwindcss.com/)

> **Portfólio profissional moderno e responsivo para Engenheiro de Dados e Desenvolvedor Back-End**

## 📋 Sobre o Projeto

Este é um portfólio profissional desenvolvido com tecnologias modernas para destacar as habilidades e projetos de **Régio Lopes**, Supervisor de Dados e Desenvolvimento com mais de 5 anos de experiência em desenvolvimento BackEnd e Engenharia de Dados.

### ✨ Características Principais

- 🎨 **Design Moderno**: Interface limpa e profissional
- 📱 **Totalmente Responsivo**: Funciona perfeitamente em todos os dispositivos
- ⚡ **Performance Otimizada**: Carregamento rápido com Vite
- 🎭 **Animações Fluidas**: Transições suaves com Framer Motion
- 📄 **Gerador de CV**: Download de PDF profissional
- 🖼️ **Foto Personalizada**: Imagem de perfil integrada
- 🎯 **SEO Otimizado**: Meta tags e estrutura semântica

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18.2.0** - Biblioteca principal
- **Vite 5.0.8** - Build tool e dev server
- **Tailwind CSS 3.4.0** - Framework CSS
- **Framer Motion 10.16.16** - Animações
- **React Icons 4.12.0** - Ícones

### PDF Generation
- **jsPDF 2.5.1** - Geração de PDF
- **jspdf-autotable 3.8.2** - Tabelas no PDF

### Deploy
- **Vercel** - Hospedagem gratuita
- **GitHub** - Controle de versão

## 🚀 Instalação e Execução

### Pré-requisitos
- Node.js 18.0.0 ou superior
- npm 8.0.0 ou superior

### 1. Clone o repositório
```bash
git clone https://github.com/regiolopes/rp_meuportifolio.git
cd rp_meuportifolio
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Execute o projeto
```bash
npm run dev
```

### 4. Acesse no navegador
```
http://localhost:3000
```

## 📁 Estrutura do Projeto

```
rp_meuportifolio/
├── public/
│   ├── assets/
│   │   ├── profile.png          # Foto de perfil
│   │   └── dojoadmin.png        # Imagem do projeto Dojo Admin
│   ├── favicon.ico              # Favicon ICO
│   ├── favicon.svg              # Favicon SVG
│   └── favicon-32x32.png        # Favicon PNG
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Cabeçalho com navegação
│   │   ├── Hero.jsx             # Seção principal
│   │   ├── About.jsx            # Sobre mim
│   │   ├── Skills.jsx           # Habilidades técnicas
│   │   ├── Experience.jsx       # Experiência profissional
│   │   ├── Certifications.jsx   # Certificações
│   │   ├── Projects.jsx         # Projetos
│   │   ├── Contact.jsx          # Informações de contato
│   │   ├── Footer.jsx           # Rodapé
│   │   └── CVGenerator.jsx      # Gerador de CV
│   ├── utils/
│   │   └── generateCV.js        # Lógica de geração de PDF
│   ├── App.jsx                  # Componente principal
│   ├── main.jsx                 # Ponto de entrada
│   └── index.css                # Estilos globais
├── package.json                 # Dependências e scripts
├── vite.config.js              # Configuração do Vite
├── tailwind.config.js          # Configuração do Tailwind
└── README.md                   # Este arquivo
```

## 🎯 Funcionalidades

### 📄 Seções do Portfólio

1. **Hero** - Apresentação principal com foto e botões de ação
2. **Sobre** - Descrição profissional e jornada
3. **Habilidades** - Competências técnicas organizadas por categoria
4. **Experiência** - Histórico profissional detalhado
5. **Certificações** - Qualificações e reconhecimentos
6. **Projetos** - Portfolio de projetos com filtros por categoria
7. **Contato** - Informações de contato com links diretos

### 🎨 Recursos Especiais

- **Gerador de CV**: Download de PDF profissional com todas as informações
- **Filtros de Projetos**: Categorização por tipo (Software, Dados, Cloud, etc.)
- **Animações**: Transições suaves e efeitos visuais
- **Responsividade**: Adaptação perfeita para mobile, tablet e desktop
- **SEO**: Otimizado para motores de busca

## 📊 Dados do Portfólio

### 👨‍💼 Informações Pessoais
- **Nome**: Régio Lopes
- **Cargo**: Supervisor de Dados e Desenvolvimento
- **Especialização**: Engenheiro de Dados | Desenvolvedor Back-End
- **Localização**: Fortaleza, Ceará, Brasil
- **Experiência**: 5+ anos

### 🛠️ Principais Tecnologias
- **Linguagens**: Python, JavaScript, SQL, Transact-SQL, PHP
- **Cloud**: Azure, Azure Data Factory, Azure Databricks, Azure Functions
- **Big Data**: Databricks, PySpark, Apache Airflow, SQL Tuning
- **Bancos**: PostgreSQL, MySQL, SQL Azure, CosmosDB
- **Backend**: Node.js, NestJS, API Development, System Integration

### 🏆 Certificações
- Microsoft Certified: Azure Data Engineer Associate
- Microsoft Certified: Azure Data Fundamentals
- EF SET 68/100 (C1 Advanced)
- Scrum Foundation Professional Certificate

## 🚀 Deploy no Vercel

### Opção 1: Deploy Automático (Recomendado)
1. Acesse [Vercel](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em "New Project"
4. Selecione o repositório `rp_meuportifolio`
5. Clique em "Deploy"
6. Aguarde o deploy automático

### Opção 2: Deploy Manual
```bash
# Instale o Vercel CLI
npm i -g vercel

# Faça login
vercel login

# Deploy
vercel --prod
```

## 📝 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Cria build de produção
npm run preview      # Preview do build

# Deploy
npm run deploy:vercel    # Deploy no Vercel
npm run deploy:netlify   # Deploy no Netlify

# Qualidade
npm run lint         # Executa ESLint
```

## 🎨 Personalização

### Alterando Informações Pessoais
1. Edite os componentes em `src/components/`
2. Atualize as informações em cada seção
3. Modifique as cores em `tailwind.config.js`

### Adicionando Novos Projetos
1. Edite `src/components/Projects.jsx`
2. Adicione o novo projeto no array `projects`
3. Inclua imagem em `public/assets/`

### Modificando o CV
1. Edite `src/utils/generateCV.js`
2. Ajuste as informações e layout
3. Teste o gerador de PDF

## 📱 Compatibilidade

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Dispositivos móveis (iOS/Android)

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

**Régio Lopes**
- 📧 Email: [regiolofilho@gmail.com](mailto:regiolofilho@gmail.com)
- 📱 WhatsApp: [+55 (85) 99727-5766](https://wa.me/+5585997275766)
- 💼 LinkedIn: [linkedin.com/in/regiolopes](https://www.linkedin.com/in/regiolopes/)
- 💻 GitHub: [github.com/regiolopes](https://github.com/regiolopes)

---

⭐ **Se este projeto foi útil para você, considere dar uma estrela!**

Made with ❤️ by [Régio Lopes](https://github.com/regiolopes)