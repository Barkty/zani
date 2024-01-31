/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/**/*.{js,jsx,ts,tsx}'],
  important: true,
  theme: {
    extend: {
      screens: {
        xs: '320px',
      }
    },
    fontFamily: {
      'open': ['Open\\Sans', 'sans-serif'],
      'pop': ['Poppins', 'sans-serif']
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#284F8A',
          'primary-content': '#FFFFFF',
          'primary-focus': '#6E83A480',
          secondary: '#6E83A480',
          'secondary-content': '#ffffff',
          'secondary-focus': '#6E83A480'
        }
      }
    ]
  }
}

