/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066cc',
        secondary: '#0097a7',
        accent: '#fdd835',
        'ht228-blue': '#0066cc',
        'ht228-yellow': '#fdd835',
        'ht228-bg': '#ffffff',
        'ht228-dark': '#0a0a0a'
      },
      borderRadius: {
        xl: '2rem',
        '2xl': '2.5rem'
      },
      fontFamily: {
        'geist-sans': ['var(--font-geist-sans)', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: [],
};

