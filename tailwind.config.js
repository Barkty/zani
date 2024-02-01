/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/**/*.{js,jsx,ts,tsx}'],
  important: true,
  theme: {
    extend: {
      screens: {
        "2xl": "1400px",
        "3xl": "1600px",
        'xl': {'max': '1279px'},
        'lg': {'max': '1024px'},
        'md': {'max': '767px'},
        'sm': {'max': '639px'},
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

