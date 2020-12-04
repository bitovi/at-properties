module.exports = {
  theme: {
   screens: {
      sm: '640px',
      md: '768px',
      lg: '1280px',
      xl: '1920px',
    },
    container: {
      xl: '1440px',
      center: true
    },
    colors: {
      'transparent':   'transparent',
      'white':         '#FFFFFF',
      'black':         '#000000',
      primary: {
        100:           '#E7E9EB',
        200:           '#DBDDE1',
        500:           '#888F9C',
        900:           '#1B1D1F'
      },
      secondary: {
        500:           '#D22630',
        900:           '#2A080A'
      },
      neutral: {
        300:           '#B2B2B2',
        500:           '#808080'
      },
      system: {
        focus:          '#0083CC'
      }
    },
    fontFamily: {
      'default':   '"Gotham A", "Gotham B", Helvetica, Arial, sans-serif'
    },
    fontSize: {
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
    extend: {
      gridColumn: {
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
      },
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
  }, 
  /* This is necessary for @apply space-y-5 and divide-y to work. Or upgrade TW to 2.0 */
  experimental: {
    applyComplexClasses: true,
  }
}