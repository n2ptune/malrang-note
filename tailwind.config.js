module.exports = {
  purge: ['./src/**/*.{vue,js,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {}
        },
        dark: {
          css: {
            color: theme('colors.white')
          }
        }
      }),
      colors: {
        brand: {
          primary: '#A9E34B',
          pale: '#B0D07D',
          thick: '#95C051',
          black: '#181818',
          'black-w': '#2B2B2B'
        }
      }
    }
  },
  variants: {
    extend: {
      typography: ['dark']
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
