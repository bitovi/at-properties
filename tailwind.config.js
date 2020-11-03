module.exports = {
  theme: {
   screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    colors: {
      'transparent': 'transparent',
      'white': '#FFFFFF',
      'light-gray': '#DBDDE1',
      'neutral-gray': '#F2F2F2',
      'medium-gray': '#888F9C',
      'dark-gray': '#1B1D1F',
      'black': '#000000',
      'accent': '#D22630',
      'interactive': '#0083CC'
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
    maxWidth: {
      '3/5': '60%',
    },
    extend: { }
  }
}