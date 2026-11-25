/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ── Kihon — paleta "dojo engineering" (sumi + washi + hinomaru) ──
        kihon: {
          // Vermelho hinomaru (marca) — preenchimentos, botões
          red: '#E53935',
          'red-ink': '#A81018',   // vermelho profundo — texto sobre claro (AA)
          'red-tint': '#FBEAE8',  // fundo suave / realce
          // Tinta sumi (superfícies escuras + texto sobre claro)
          ink: '#17130F',
          'ink-soft': '#26201A',  // superfície escura secundária / cards no escuro
          black: '#0B0907',       // preto quente mais profundo
          // Washi (papel — fundo claro)
          paper: '#FAF7F1',
          surface: '#F3ECE1',     // cards / seções sobre claro
          line: '#E7DFD3',        // hairlines / bordas sobre claro
          // Textos
          muted: '#6E6459',       // secundário sobre claro (AA)
          faint: '#9A9082',       // terciário sobre claro
          chalk: '#CFC7BA',       // secundário sobre escuro (AA sobre ink)
          // ── Legado (mantido p/ páginas não reconstruídas) ──
          dark: '#17130F',        // era #0F172A → ink quente (compat.)
          white: '#FFFFFF',
          gray: {
            medium: '#64748B',    // mantido: texto secundário em páginas legadas
            light: '#E5E7EB',     // mantido: cards/divisórias legadas
          },
        },
        // ── Escalas legadas (portfólio /regiolopes e utilitários) — NÃO alterar ──
        primary: {
          50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd',
          400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8',
          800: '#1e40af', 900: '#1e3a8a', 950: '#172554',
        },
        secondary: {
          50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1',
          400: '#94a3b8', 500: '#64748b', 600: '#475569', 700: '#334155',
          800: '#1e293b', 900: '#0f172a', 950: '#020617',
        },
        dark: {
          50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1',
          400: '#94a3b8', 500: '#64748b', 600: '#475569', 700: '#334155',
          800: '#1e293b', 900: '#0f172a', 950: '#020617',
        },
      },
      fontFamily: {
        // Corpo/UI — engenharia, precisão, legibilidade
        'sans': ['"IBM Plex Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        // Display — geométrica, mesma construção da marca (bojo circular,
        // terminação reta). Jost é um revival de Futura.
        'display': ['"Jost"', '"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        // Utilitário — eyebrows, numerais, rótulos técnicos (contagem do kihon)
        'mono': ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        'eyebrow': '0.18em',
      },
      fontSize: {
        // Escala de display, calibrada para a Jost.
        //
        // A Jost tem ascendente e descendente longos (1,02 e 0,25 do corpo,
        // medidos no navegador). Os tamanhos grandes do Tailwind vêm com
        // line-height 1, o que encavala as linhas — e, por virem de uma
        // utilitária com prefixo de breakpoint, venciam qualquer `leading-`
        // sem prefixo. Aqui entrelinha e entreletra viajam junto com o
        // tamanho, então não há como esquecer uma delas.
        'display-xs':  ['1.5rem',   { lineHeight: '1.3',  letterSpacing: '-0.01em' }],
        'display-sm':  ['1.875rem', { lineHeight: '1.25', letterSpacing: '-0.015em' }],
        'display-md':  ['2.25rem',  { lineHeight: '1.22', letterSpacing: '-0.02em' }],
        'display-ml':  ['2.75rem',  { lineHeight: '1.2',  letterSpacing: '-0.02em' }],
        'display-lg':  ['3rem',     { lineHeight: '1.2',  letterSpacing: '-0.022em' }],
        'display-xl':  ['3.75rem',  { lineHeight: '1.2',  letterSpacing: '-0.025em' }],
        'display-2xl': ['4.5rem',   { lineHeight: '1.2',  letterSpacing: '-0.028em' }],
      },
      borderRadius: {
        // A marca só conhece duas formas: retângulo e círculo. Tudo que é
        // retangular no site Kihon usa este raio único; `rounded-full` fica
        // reservado ao que é genuinamente circular (pontos, avatares, orbes).
        // O portfólio legado /regiolopes mantém a escala padrão do Tailwind.
        'kihon': '3px',
      },
      maxWidth: {
        'prose-kihon': '68ch',
      },
      boxShadow: {
        // sombras quentes e discretas
        'soft': '0 2px 15px -3px rgba(23,19,15,0.07), 0 10px 20px -2px rgba(23,19,15,0.04)',
        'medium': '0 4px 25px -5px rgba(23,19,15,0.10), 0 10px 10px -5px rgba(23,19,15,0.04)',
        'strong': '0 10px 40px -10px rgba(23,19,15,0.15), 0 2px 10px -2px rgba(23,19,15,0.05)',
        'card': '0 1px 2px rgba(23,19,15,0.04), 0 8px 24px -12px rgba(23,19,15,0.12)',
        'lift': '0 20px 50px -20px rgba(23,19,15,0.28)',
        '3xl': '0 35px 60px -12px rgba(23,19,15,0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both',
        'rule': 'ruleDraw 0.9s cubic-bezier(0.65,0,0.35,1) 0.25s both',
        'bounce-slow': 'bounce 2s infinite',
        'marquee': 'marquee 50s linear infinite',
        'marquee-rev': 'marquee 50s linear infinite reverse',
        'marquee-slow': 'marquee 65s linear infinite',
        'marquee-slow-rev': 'marquee 65s linear infinite reverse',
      },
      scale: { '102': '1.02', '105': '1.05', '110': '1.10' },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeUp: {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        ruleDraw: {
          '0%': { 'stroke-dashoffset': '1' },
          '100%': { 'stroke-dashoffset': '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
