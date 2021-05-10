const darkModeBaseColor = 'colors.white'
const lightModeBaseColor = 'colors.brand.black'

module.exports = {
  purge: ['./src/**/*.{vue,js,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme(lightModeBaseColor),
            h1: {
              color: theme(lightModeBaseColor)
            },
            h2: {
              color: theme(lightModeBaseColor)
            },
            h3: {
              color: theme(lightModeBaseColor)
            },
            h4: {
              color: theme(lightModeBaseColor)
            },
            h5: {
              color: theme(lightModeBaseColor)
            },
            h6: {
              color: theme(lightModeBaseColor)
            },
            code: {
              color: theme(lightModeBaseColor)
            },
            strong: {
              color: theme(lightModeBaseColor),
              'font-weight': '800'
            },
            p: {
              color: theme(lightModeBaseColor),
              'margin-top': '0',
              'margin-bottom': '0.5em'
            },
            'ul > li': {
              '&::before': {
                'background-color': theme(lightModeBaseColor) + ' !important'
              },
              '& p': {
                margin: '0 !important'
              }
            },
            'ol > li': {
              '&::before': {
                'background-color': theme(lightModeBaseColor) + ' !important'
              },
              '& p': {
                margin: '0 !important'
              }
            }
          }
        },
        dark: {
          css: {
            color: theme(darkModeBaseColor),
            h1: {
              color: theme(darkModeBaseColor)
            },
            h2: {
              color: theme(darkModeBaseColor)
            },
            h3: {
              color: theme(darkModeBaseColor)
            },
            h4: {
              color: theme(darkModeBaseColor)
            },
            h5: {
              color: theme(darkModeBaseColor)
            },
            h6: {
              color: theme(darkModeBaseColor)
            },
            code: {
              color: theme(darkModeBaseColor)
            },
            strong: {
              color: theme(darkModeBaseColor),
              'font-weight': '800'
            },
            p: {
              color: theme(darkModeBaseColor),
              'margin-top': '0',
              'margin-bottom': '0.5em'
            },
            'ul > li': {
              '&::before': {
                'background-color': theme(darkModeBaseColor) + ' !important'
              },
              '& p': {
                margin: '0 !important'
              }
            },
            'ol > li': {
              '&::before': {
                'background-color': theme(darkModeBaseColor) + ' !important'
              },
              '& p': {
                margin: '0 !important'
              }
            }
          }
        }
      }),
      colors: {
        brand: {
          primary: '#A9E34B',
          pale: '#B0D07D',
          thick: '#95C051',
          black: '#0F0F0F',
          'black-w': '#1F1F1F',
          'black-l': '#2A2A2A'
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
