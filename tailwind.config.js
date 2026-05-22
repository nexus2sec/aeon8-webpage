/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#050D1A',
        navy: '#0A192F',
        panel: '#0F2236',
        border: '#1B3A5C',
        orange: '#F97316',
        odim: '#C05A10',
        teal: '#00D4AA',
        text: '#C9D1D9',
        dim: '#7A8A9A',
        white: '#EEF2F7',
      },
      backgroundImage: {
        'gradient-grid': 'linear-gradient(rgba(0,212,170,.025)1px,transparent 1px), linear-gradient(90deg,rgba(0,212,170,.025)1px,transparent 1px)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      animation: {
        pulse: 'pulse 2s infinite',
        tick: 'tick 38s linear infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(1.4)' },
        },
        tick: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
