const darkModeBaseColor = 'colors.white'
const lightModeBaseColor = 'colors.brand.black'

/** @type {import('@types/tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  purge: ['./src/**/*.{vue,js,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      gridColumn: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16'
      },
      gridColumnStart: {
        14: '14',
        15: '15',
        16: '16',
        17: '17'
      },
      gridColumnEnd: {
        14: '14',
        15: '15',
        16: '16',
        17: '17'
      },
      gridTemplateColumns: {
        13: 'repeat(13, minmax(0, 1fr))',
        14: 'repeat(14, minmax(0, 1fr))',
        15: 'repeat(15, minmax(0, 1fr))',
        16: 'repeat(16, minmax(0, 1fr))'
      },
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
          pale: '#93CD34',
          thick: '#7AA436',
          black: '#0F0F0F',
          'black-w': '#1F1F1F',
          'black-l': '#2A2A2A',
          'black-tippy': '#0A0A0A',
          'black-tippy-l': '#161616'
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
