module.exports = {
  theme: {
   screens: {
      sm: '640px',
      md: '768px',
      lg: '1280px',
      xl: '1920px',
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      'light-gray': '#DBDDE1',
      'neutral-gray': '#F2F2F2',
      'medium-gray': '#888F9C',
      'dark-gray': '#1B1D1F',
      'accent': '#D22630',
      'interactive': '#0083CC',
      primary: {
        050: '#F3F4F5',
        100: '#E7E9EB',
        200: '#DBDDE1',
        300: '#ACB1BA',
        400: '#A0A5B0',
        500: '#888F9C',
        600: '#6D727D',
        700: '#44484E',
        800: '#36393E',
        900: '#1B1D1F'
      },
      secondary: {
        050: '#FBE9EA',
        100: '#F6D4D6',
        200: '#F2BEC1',
        300: '#E47D83',
        400: '#DB5159',
        500: '#D22630',
        600: '#BD222B',
        700: '#7E171D',
        800: '#540F13',
        900: '#2A080A'
      },
      neutral: {
        050: '#C8FFF4',
        100: '#70EFDE',
        200: '#03DAC5',
        300: '#00C4B4',
        400: '#00B3A6',
        500: '#01A299',
        600: '#019592',
        700: '#018786',
        800: '#017374',
        900: '#005457'
      }
    },
    fontFamily: {
      'gotham-light': '"Gotham Light", Helvetica, Arial, sans-serif',
      'gotham-medium': '"Gotham Medium", Helvetica, Arial, sans-serif'
    },
    fontSize: {
      'tiny': ['10px', { letterSpacing: '1.5px', lineHeight: '1.6' }],
      'xs':   ['12px', { letterSpacing: '1.5px', lineHeight: '1.6' }],
      'sm':   ['14px', { letterSpacing: '1.5px', lineHeight: '1.6' }],
      'base': ['16px', { lineHeight: '1.6' }],
      'lg':   ['20px', { lineHeight: '1.6' }],
      'xl':   ['25px', { letterSpacing: '0.5px', lineHeight: '1.5' }],
      '2xl':  ['31px', { letterSpacing: '1px', lineHeight: '1.5' }],
      '3xl':  ['39px', { letterSpacing: '1px', lineHeight: '1.5' }],
      '4xl':  ['48px', { letterSpacing: '1px', lineHeight: '1.5' }],
      '5xl':  ['61px', { letterSpacing: '1px', lineHeight: '1.5' }],
      '6xl':  ['76px', { letterSpacing: '1px', lineHeight: '1.5' }]
    },
    borderWidth: {
      '0': '0',
      default: '1px',
      '2': '2px',
      '4': '4px',
    },
    maxWidth: {
      '3/5': '60%',
    },
    extend: {
      
    }
  }
}