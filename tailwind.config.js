module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Asegúrate de incluir todos los archivos relevantes
  ],
  theme: {
    extend: {
      colors: {
        'fondo': 'var(--color-fondo)',
        'secundario': 'var(--color-secundario)',
        'letra': 'var(--color-letra)',
        'letra-resalt': 'var(--color-letra-resalt)',
        'botones': 'var(--color-botones)',
        'botones-secundarios': 'var(--color-botones-secundarios)',
        'cuadros': 'var(--color-cuadros)',
        'navbar': 'var(--color-navbar)',
      },
    },
  },
  plugins: [],
};