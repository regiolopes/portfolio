# 🔄 Workflow de Desenvolvimento

## 📋 **Branch Strategy**

### **main** (Produção)
- ✅ Código estável e funcionando
- ✅ Deploy automático no Vercel
- ✅ Apenas merges de develop ou hotfixes

### **develop** (Desenvolvimento)
- 🌟 Branch principal para ajustes finos
- 🔧 Melhorias e otimizações
- 📱 Testes e refinamentos

### **feature/*** (Funcionalidades)
- ✨ Novas funcionalidades
- 🎨 Melhorias específicas
- 🔧 Ajustes pontuais

### **hotfix/*** (Correções)
- 🚨 Correções urgentes
- 🐛 Bugs críticos
- ⚡ Problemas de produção

## 🚀 **Comandos de Workflow**

### **Criar Nova Feature**
```bash
git checkout develop
git pull origin develop
git checkout -b feature/nome-da-feature
# Fazer mudanças
git add .
git commit -m "✨ Feature: descrição"
git push origin feature/nome-da-feature
```

### **Ajustes Finos**
```bash
git checkout develop
git pull origin develop
# Fazer ajustes
git add .
git commit -m "🔧 Ajuste fino: descrição"
git push origin develop
```

### **Merge para Produção**
```bash
git checkout main
git pull origin main
git merge develop
git push origin main
```

### **Hotfix Urgente**
```bash
git checkout main
git checkout -b hotfix/correcao-urgente
# Fazer correção
git add .
git commit -m "🚨 Hotfix: correção urgente"
git checkout main
git merge hotfix/correcao-urgente
git push origin main
git checkout develop
git merge hotfix/correcao-urgente
git push origin develop
```

## 📝 **Convenções de Commit**

### **Tipos de Commit**
- `✨ Feature`: Nova funcionalidade
- `🔧 Fix`: Correção de bug
- `📱 Responsive`: Ajustes de responsividade
- `⚡ Performance`: Otimizações
- `🎨 Style`: Melhorias visuais
- `📚 Docs`: Documentação
- `🚀 Deploy`: Deploy e configurações

### **Exemplos**
```bash
git commit -m "✨ Feature: adicionar modo escuro"
git commit -m "🔧 Fix: corrigir layout mobile"
git commit -m "📱 Responsive: ajustar breakpoints"
git commit -m "⚡ Performance: otimizar imagens"
git commit -m "🎨 Style: melhorar cores"
```

## 🎯 **Checklist de Deploy**

### **Antes do Merge para Main**
- [ ] Testes locais funcionando
- [ ] Build sem erros
- [ ] Responsividade testada
- [ ] Performance verificada
- [ ] SEO otimizado

### **Após Deploy**
- [ ] Site funcionando
- [ ] Todas as seções carregando
- [ ] Imagens carregando
- [ ] Links funcionando
- [ ] Mobile testado

## 📊 **Métricas de Qualidade**

### **Performance**
- [ ] Lighthouse Score > 90
- [ ] First Contentful Paint < 2s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1

### **Acessibilidade**
- [ ] WCAG 2.1 AA compliance
- [ ] Contraste adequado
- [ ] Navegação por teclado
- [ ] Screen reader friendly

### **SEO**
- [ ] Meta tags completas
- [ ] Structured data
- [ ] Sitemap atualizado
- [ ] Robots.txt configurado

---

**🔄 Workflow configurado para desenvolvimento contínuo e qualidade!**
