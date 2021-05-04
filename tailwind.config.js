module.exports = {
  purge: ['./src/**/*.{vue,js,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#A9E34B',
          pale: '#B0D07D',
          thick: '#95C051'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
