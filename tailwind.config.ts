/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { main: '#2E1F7A', dark: '#1A162E' },
        secondary: { main: '#FEDE03', dark: '#FECC03' },
        white: '#FFFEFA',
        info: '#46C5EE',
        error: '#EE4646',
        success: '#9AEE46'
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}
