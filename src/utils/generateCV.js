import jsPDF from 'jspdf'

// Função auxiliar para carregar imagem
const loadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}

export const generateCV = async () => {
  const doc = new jsPDF('p', 'mm', 'a4')
  
  // Configurações de cores elegantes
  const primaryColor = '#1e40af' // Azul mais escuro e elegante
  const secondaryColor = '#475569' // Cinza elegante
  const accentColor = '#3b82f6' // Azul médio
  const lightGray = '#f8fafc'
  const darkGray = '#1e293b'
  
  // Configurações de fonte
  doc.setFont('helvetica')
  
  // Cabeçalho elegante com gradiente simulado
  doc.setFillColor(primaryColor)
  doc.rect(0, 0, 210, 50, 'F')
  
  // Foto de perfil real
  try {
    // Carrega a imagem real de forma assíncrona
    const img = await loadImage('/assets/profile.png')
    
    // Desenha um círculo branco como fundo
    doc.setFillColor(255, 255, 255)
    doc.circle(25, 25, 12, 'F')
    
    // Adiciona a imagem dentro do círculo (redimensionada)
    doc.addImage(img, 'PNG', 13, 13, 24, 24)
  } catch (error) {
    console.log('Imagem não carregada, usando fallback:', error)
    // Fallback: círculo com texto se a imagem não carregar
    doc.setFillColor(255, 255, 255)
    doc.circle(25, 25, 12, 'F')
    doc.setFillColor(accentColor)
    doc.circle(25, 25, 11, 'F')
    
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(7)
    doc.setFont('helvetica', 'bold')
    doc.text('FOTO', 25, 27, { align: 'center' })
  }
  
  // Nome e título
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(20)
  doc.setFont('helvetica', 'bold')
  doc.text('Régio Lopes', 50, 18)
  
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  doc.text('Supervisor de Dados e Desenvolvimento', 50, 25)
  doc.text('Engenheiro de Dados | Desenvolvedor Back-End', 50, 31)
  
  doc.setTextColor(200, 200, 200)
  doc.setFontSize(8)
  doc.text('Fortaleza, Ceará, Brasil', 50, 38)
  
  // Informações de contato elegantes (sem símbolos problemáticos)
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(8)
  doc.text('Email: regiolofilho@gmail.com', 150, 16)
  doc.text('WhatsApp: +55 (85) 99727-5766', 150, 21)
  doc.text('LinkedIn: linkedin.com/in/regiolopes', 150, 26)
  doc.text('GitHub: github.com/regiolopes', 150, 31)
  
  let yPosition = 55
  
  // Resumo Profissional com design elegante
  doc.setFillColor(lightGray)
  doc.rect(10, yPosition, 190, 8, 'F')
  
  doc.setTextColor(primaryColor)
  doc.setFontSize(12)
  doc.setFont('helvetica', 'bold')
  doc.text('RESUMO PROFISSIONAL', 15, yPosition + 6)
  
  yPosition += 15
  
  doc.setTextColor(darkGray)
  doc.setFontSize(9)
  doc.setFont('helvetica', 'normal')
  
  const summaryText = `Sou um BackEnd Developer e Engenheiro de Dados com uma paixão por desenvolver soluções tecnológicas inovadoras. Com mais de 5 anos de experiência no setor, tenho um histórico comprovado de sucesso na criação de aplicativos robustos e na implementação de arquiteturas escaláveis para gerenciamento e análise de dados.

Minha expertise inclui o desenvolvimento de APIs eficientes e seguras, utilizando linguagens como Python e JavaScript. Trabalho com tecnologias como Azure, Databricks, PySpark, Node.js, PostgreSQL e MySQL para garantir a eficiência e escalabilidade dos aplicativos.`
  
  const summaryLines = doc.splitTextToSize(summaryText, 180)
  doc.text(summaryLines, 15, yPosition)
  yPosition += summaryLines.length * 4 + 10
  
  // Experiência Profissional com design elegante
  doc.setFillColor(lightGray)
  doc.rect(10, yPosition, 190, 8, 'F')
  
  doc.setTextColor(primaryColor)
  doc.setFontSize(12)
  doc.setFont('helvetica', 'bold')
  doc.text('EXPERIÊNCIA PROFISSIONAL', 15, yPosition + 6)
  
  yPosition += 15
  
  const experiences = [
    {
      title: 'Supervisor de Dados e Desenvolvimento',
      company: 'Grupo Fornecedora',
      period: 'Jul 2021 - Presente',
      location: 'Fortaleza, CE',
      description: [
        'Liderança técnica de equipe de desenvolvimento e engenharia de dados',
        'Supervisão de projetos de análise e processamento de dados',
        'Implementação de arquiteturas escaláveis para gerenciamento de dados',
        'Desenvolvimento de APIs eficientes e seguras',
        'Colaboração com equipes multidisciplinares para entregar soluções de alta qualidade'
      ],
      technologies: ['Python', 'JavaScript', 'Azure', 'Databricks', 'PySpark', 'Node.js', 'PostgreSQL']
    },
    {
      title: 'Engenheiro de Dados | DBA',
      company: 'FortBrasil',
      period: 'Jun 2022 - Jan 2024',
      location: 'Fortaleza, CE',
      description: [
        'Desenvolvimento e otimização de bancos de dados',
        'Implementação de soluções de Big Data com Azure Data Factory',
        'Processamento e análise de grandes volumes de dados',
        'Modelagem e estruturação de dados para análises avançadas',
        'Administração e tuning de bancos de dados SQL'
      ],
      technologies: ['Azure Data Factory', 'Databricks', 'PySpark', 'SQL', 'Azure Cosmos DB', 'Transact-SQL']
    },
    {
      title: 'Engenheiro de Dados | Desenvolvedor Backend',
      company: 'Grupo Fornecedora',
      period: 'Aug 2020 - Jun 2022',
      location: 'Fortaleza, CE',
      description: [
        'Desenvolvimento de aplicações backend robustas',
        'Criação de APIs REST eficientes',
        'Integração de sistemas utilizando Azure e Node.js',
        'Implementação de soluções de engenharia de dados',
        'Trabalho com tecnologias de Big Data'
      ],
      technologies: ['Python', 'JavaScript', 'Node.js', 'Azure', 'MySQL', 'PostgreSQL', 'NestJS']
    }
  ]
  
  experiences.forEach((exp, index) => {
    if (yPosition > 250) {
      doc.addPage()
      yPosition = 20
    }
    
    // Título do cargo
    doc.setTextColor(primaryColor)
    doc.setFontSize(11)
    doc.setFont('helvetica', 'bold')
    doc.text(exp.title, 15, yPosition)
    
    // Empresa e período
    doc.setTextColor(secondaryColor)
    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    doc.text(`${exp.company} | ${exp.period} | ${exp.location}`, 15, yPosition + 6)
    
    yPosition += 12
    
    // Descrição com bullets elegantes
    doc.setTextColor(darkGray)
    doc.setFontSize(8)
    exp.description.forEach((item) => {
      doc.setFillColor(accentColor)
      doc.circle(18, yPosition - 1, 0.6, 'F')
      doc.text(item, 22, yPosition)
      yPosition += 4
    })
    
    // Tecnologias com destaque
    doc.setTextColor(secondaryColor)
    doc.setFontSize(7)
    doc.setFont('helvetica', 'italic')
    doc.text(`Tecnologias: ${exp.technologies.join(' • ')}`, 15, yPosition + 2)
    
    yPosition += 10
    
    // Linha decorativa após o conteúdo (não corta o texto)
    if (index < experiences.length - 1) {
      doc.setDrawColor(accentColor)
      doc.setLineWidth(0.2)
      doc.line(15, yPosition - 2, 195, yPosition - 2)
      yPosition += 4
    }
  })
  
  // Nova página para habilidades e certificações
  doc.addPage()
  yPosition = 20
  
  // Habilidades Técnicas com design elegante
  doc.setFillColor(lightGray)
  doc.rect(10, yPosition, 190, 8, 'F')
  
  doc.setTextColor(primaryColor)
  doc.setFontSize(12)
  doc.setFont('helvetica', 'bold')
  doc.text('HABILIDADES TÉCNICAS', 15, yPosition + 6)
  
  yPosition += 15
  
  const skills = [
    { category: 'Linguagens de Programação', skills: ['Python (95%)', 'JavaScript (90%)', 'SQL (95%)', 'Transact-SQL (85%)', 'PHP (80%)'] },
    { category: 'Cloud & Azure', skills: ['Azure (90%)', 'Azure Data Factory (85%)', 'Azure Databricks (90%)', 'Azure Functions (80%)', 'Azure Cosmos DB (85%)'] },
    { category: 'Big Data & Analytics', skills: ['Databricks (90%)', 'PySpark (85%)', 'Apache Airflow (80%)', 'SQL Tuning (85%)', 'Data Modeling (90%)'] },
    { category: 'Bancos de Dados', skills: ['PostgreSQL (90%)', 'MySQL (85%)', 'SQL Azure (85%)', 'CosmosDB (80%)', 'Database Administration (90%)'] },
    { category: 'Desenvolvimento Backend', skills: ['Node.js (85%)', 'NestJS (80%)', 'API Development (90%)', 'System Integration (85%)', 'Scrum (80%)'] }
  ]
  
  skills.forEach((skillGroup, index) => {
    if (yPosition > 250) {
      doc.addPage()
      yPosition = 20
    }
    
    // Categoria
    doc.setTextColor(primaryColor)
    doc.setFontSize(10)
    doc.setFont('helvetica', 'bold')
    doc.text(skillGroup.category, 15, yPosition)
    
    yPosition += 6
    
    // Skills com bullets elegantes
    doc.setTextColor(darkGray)
    doc.setFontSize(8)
    doc.setFont('helvetica', 'normal')
    skillGroup.skills.forEach((skill) => {
      doc.setFillColor(accentColor)
      doc.circle(18, yPosition - 1, 0.5, 'F')
      doc.text(skill, 22, yPosition)
      yPosition += 3.5
    })
    
    yPosition += 6
    
    // Linha decorativa após o conteúdo (não corta o texto)
    if (index < skills.length - 1) {
      doc.setDrawColor(accentColor)
      doc.setLineWidth(0.2)
      doc.line(15, yPosition - 2, 195, yPosition - 2)
      yPosition += 4
    }
  })
  
  // Certificações com design elegante
  doc.setFillColor(lightGray)
  doc.rect(10, yPosition, 190, 8, 'F')
  
  doc.setTextColor(primaryColor)
  doc.setFontSize(12)
  doc.setFont('helvetica', 'bold')
  doc.text('CERTIFICAÇÕES', 15, yPosition + 6)
  
  yPosition += 15
  
  const certifications = [
    {
      name: 'Microsoft Certified: Azure Data Engineer Associate',
      authority: 'Microsoft',
      date: 'Jul 2023',
      expiry: 'Jul 2025'
    },
    {
      name: 'Microsoft Certified: Azure Data Fundamentals',
      authority: 'Microsoft',
      date: 'Jul 2023',
      expiry: ''
    },
    {
      name: 'Certificado oficial EF SET 68/100 (C1 Advanced)',
      authority: 'EF Standard English Test (EF SET)',
      date: 'May 2024',
      expiry: ''
    },
    {
      name: 'Scrum Foundation Professional Certificate',
      authority: 'Scrum Foundation',
      date: 'Jun 2020',
      expiry: ''
    }
  ]
  
  certifications.forEach((cert, index) => {
    if (yPosition > 250) {
      doc.addPage()
      yPosition = 20
    }
    
    // Nome da certificação
    doc.setTextColor(primaryColor)
    doc.setFontSize(10)
    doc.setFont('helvetica', 'bold')
    doc.text(cert.name, 15, yPosition)
    
    yPosition += 6
    
    // Autoridade e data
    doc.setTextColor(secondaryColor)
    doc.setFontSize(8)
    doc.setFont('helvetica', 'normal')
    doc.text(`${cert.authority} | ${cert.date} ${cert.expiry ? `- ${cert.expiry}` : ''}`, 15, yPosition)
    
    yPosition += 8
    
    // Linha decorativa após o conteúdo (não corta o texto)
    if (index < certifications.length - 1) {
      doc.setDrawColor(accentColor)
      doc.setLineWidth(0.2)
      doc.line(15, yPosition - 2, 195, yPosition - 2)
      yPosition += 4
    }
  })
  
  // Educação
  doc.setFillColor(lightGray)
  doc.rect(10, yPosition, 190, 8, 'F')
  
  doc.setTextColor(primaryColor)
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.text('EDUCAÇÃO', 15, yPosition + 6)
  
  yPosition += 15
  
  const education = [
    {
      degree: 'Pós-graduação Lato Sensu - Especialização',
      institution: 'XP Educação',
      period: 'Jan 2024 - Mar 2025'
    },
    {
      degree: 'Tecnólogo',
      institution: 'Wyden Educacional',
      period: '2020 - 2022'
    },
    {
      degree: 'Bacharelado',
      institution: 'Universidade Federal do Ceará',
      period: 'Jan 2019 - presente'
    }
  ]
  
  education.forEach((edu) => {
    if (yPosition > 250) {
      doc.addPage()
      yPosition = 20
    }
    
    doc.setTextColor(primaryColor)
    doc.setFontSize(11)
    doc.setFont('helvetica', 'bold')
    doc.text(edu.degree, 15, yPosition)
    
    yPosition += 6
    
    doc.setTextColor(secondaryColor)
    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    doc.text(`${edu.institution} | ${edu.period}`, 15, yPosition)
    
    yPosition += 10
  })
  
  // Projetos Principais com design elegante
  doc.setFillColor(lightGray)
  doc.rect(10, yPosition, 190, 8, 'F')
  
  doc.setTextColor(primaryColor)
  doc.setFontSize(12)
  doc.setFont('helvetica', 'bold')
  doc.text('PROJETOS PRINCIPAIS', 15, yPosition + 6)
  
  yPosition += 15
  
  const projects = [
    {
      name: 'Sistema de Artes Marciais - Dojo Admin',
      description: 'Sistema completo de gerenciamento para academias de artes marciais, desenvolvido para automatizar processos administrativos e melhorar a experiência dos alunos e instrutores.',
      technologies: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Docker']
    },
    {
      name: 'Sistema de Análise de Dados com Azure',
      description: 'Plataforma de análise de dados implementada na Azure, utilizando Data Factory e Databricks para processamento de grandes volumes de dados empresariais.',
      technologies: ['Azure Data Factory', 'Databricks', 'PySpark', 'SQL', 'Azure Cosmos DB']
    },
    {
      name: 'API Backend com Node.js e NestJS',
      description: 'Sistema backend robusto desenvolvido com Node.js e NestJS, oferecendo APIs REST eficientes e seguras para aplicações empresariais.',
      technologies: ['Node.js', 'NestJS', 'PostgreSQL', 'JavaScript', 'Azure']
    }
  ]
  
  projects.forEach((project, index) => {
    if (yPosition > 250) {
      doc.addPage()
      yPosition = 20
    }
    
    // Nome do projeto
    doc.setTextColor(primaryColor)
    doc.setFontSize(10)
    doc.setFont('helvetica', 'bold')
    doc.text(project.name, 15, yPosition)
    
    yPosition += 6
    
    // Descrição
    doc.setTextColor(darkGray)
    doc.setFontSize(8)
    doc.setFont('helvetica', 'normal')
    const descLines = doc.splitTextToSize(project.description, 180)
    doc.text(descLines, 15, yPosition)
    yPosition += descLines.length * 3.5 + 4
    
    // Tecnologias com destaque
    doc.setTextColor(secondaryColor)
    doc.setFontSize(7)
    doc.setFont('helvetica', 'italic')
    doc.text(`Tecnologias: ${project.technologies.join(' • ')}`, 15, yPosition)
    
    yPosition += 10
    
    // Linha decorativa após o conteúdo (não corta o texto)
    if (index < projects.length - 1) {
      doc.setDrawColor(accentColor)
      doc.setLineWidth(0.2)
      doc.line(15, yPosition - 2, 195, yPosition - 2)
      yPosition += 4
    }
  })
  
  // Rodapé elegante
  const pageCount = doc.internal.getNumberOfPages()
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i)
    
    // Linha decorativa no rodapé
    doc.setDrawColor(accentColor)
    doc.setLineWidth(0.3)
    doc.line(20, 285, 190, 285)
    
    // Informações de contato no rodapé (sem símbolos problemáticos)
    doc.setFontSize(7)
    doc.setTextColor(secondaryColor)
    doc.text('Email: regiolofilho@gmail.com | WhatsApp: +55 (85) 99727-5766 | LinkedIn: linkedin.com/in/regiolopes', 105, 288, { align: 'center' })
    
    // Número da página
    doc.setTextColor(150, 150, 150)
    doc.text(`Página ${i} de ${pageCount}`, 190, 288, { align: 'right' })
  }
  
  // Salvar o PDF
  doc.save('Regio_Lopes_CV.pdf')
}
