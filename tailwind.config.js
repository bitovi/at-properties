module.exports = {
  theme: {
   screens: {
      sm: '640px',
      md: '768px',
      lg: '1280px',
      xl: '1920px',
    },
    container: {
      xl: '1280px',
      center: true
    },
    colors: {
      'transparent':   'transparent',
      'white':         '#FFFFFF',
      'black':         '#000000',
      'sytem-focus':   '#0083CC',
      primary: {
        100:           '#E7E9EB',
        200:           '#DBDDE1',
        500:           '#888F9C',
        900:           '#1B1D1F'
      },
      secondary: {
        500:           '#D22630'
      }
    },
    fontFamily: {
      'primary':   '"Gotham A", "Gotham B", Helvetica, Arial, sans-serif',
      'secondary': '"Gotham B", Helvetica, Arial, sans-serif'
    },
    fontSize: {
      'tiny': '10px',
      'xs':   '12px',
      'sm':   '14px',
      'base': '16px',
      'lg':   '20px',
      'xl':   '24px',
      '2xl':  '28px',
      '3xl':  '34px',
      '4xl':  '39px',
      '5xl':  '42px',
      '6xl':  '60px'
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
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      gridColumnStart: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
      }
    }
  }
}