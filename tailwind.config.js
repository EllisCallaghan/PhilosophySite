/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'primary' : '#d6c383'
      },
      fontFamily:{
        'primary':['Roboto Serif', 'serif']
      }
    },
    screens:{
      'xl':{'max':'1440px'},
      'lg':{'max':'1172px'},
      'md':{'max':'988px'},
      'tablet':{'max':'768px'},
      'sm':{'max':'400px'}
    }
  },
  plugins: [],
}
