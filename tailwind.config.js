/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        purple: '#8b5cf6',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px'
      },
      fontFamily: {
        'Alkatra': ['Alkatra', 'sans-serif'],
        'Lilita-One': ['Lilita One', 'cursive'],
        'Righteous': ['Righteous', 'cursive']
      }
    },
  },
  plugins: [],
}
