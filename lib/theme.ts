export const colors = {
  primary: '#4A90E2', // azul vibrante
  secondary: '#FFD93D', // amarelo dourado
  accent: '#FF6B6B', // coral vibrante
  background: '#FFF8E7', // fundo creme quente
  foreground: '#2D3748', // texto escuro suave
  success: '#48BB78', // verde sucesso
  warning: '#ED8936', // laranja alerta
  info: '#4299E1', // azul informação
};

export const theme = {
  colors: {
    primary: {
      DEFAULT: colors.primary,
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: colors.primary,
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
    secondary: {
      DEFAULT: colors.secondary,
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: colors.secondary,
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
    },
    accent: {
      DEFAULT: colors.accent,
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: colors.accent,
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
    },
    background: colors.background,
    foreground: colors.foreground,
  },
  animations: {
    'fade-in': 'fadeIn 0.5s ease-in-out',
    'slide-up': 'slideUp 0.5s ease-out',
    'bounce-gentle': 'bounceGentle 2s infinite',
  },
  transitions: {
    'smooth': 'transition-all duration-300 ease-in-out',
    'hover': 'hover:-translate-y-1 hover:shadow-xl',
  },
};
