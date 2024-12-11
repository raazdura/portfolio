/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeup: {
          '0%': { opacity: '0.01', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
        fadedown: {
          '0%': { opacity: '0.01', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
        fade: {
          '0%': { opacity: '0.01' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeup: 'fadeup 300ms cubic-bezier(0.645, 0.045, 0.355, 1)',
        fadedown: 'fadedown 300ms cubic-bezier(0.645, 0.045, 0.355, 1)',
        fade: 'fade 1000ms cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
      fontFamily: {
        robotoMono: ['Roboto Mono', 'monospace'],
      },
      writingMode: {
        'vertical-rl': 'vertical-rl',
      },
      colors: {
        yellowish: '#e8d900',
        greenish: '#1abab7',
        dark: 'black',
        light: 'white'
      },
    },
  },
  plugins: [],
  darkMode: "class"
}

