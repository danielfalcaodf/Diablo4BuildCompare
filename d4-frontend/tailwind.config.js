/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#1c1c1c',
          DEFAULT: '1c1c1c',
          light: '#e0e0e0',
        },
        secondary: {
          dark: '#2a2a2a',
          DEFAULT: '2a2a2a',
          light: '#ffffff',
        },
        accent: '#a61d24',
        text: {
          dark: '#e0e0e0',
          DEFAULT: '#e0e0e0',
          light: '#1c1c1c',
        },
      },
      fontFamily: {
        serif: ['PT Serif', 'serif'],
  
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
  ],

}

