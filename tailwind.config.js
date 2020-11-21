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
      'transparent':   'var(--color-transparent)',
      'white':         'var(--color-white)',
      'black':         'var(--color-black)',
      'sytem-focus':   'var(--color-system-focus)',
      primary: {
        100:           'var(--color-primary-100)',
        200:           'var(--color-primary-200)',
        500:           'var(--color-primary-500)',
        900:           'var(--color-primary-900)'
      },
      secondary: {
        500:           'var(--color-secondary-500)'
      },
      neutral: {
        300:           'var(--color-neutral-300)',
        500:           'var(--color-neutral-500)'
      }
    },
    fontFamily: {
      'primary':   'var(--font-family)',
      'secondary': 'var(--font-family)'
    },
    fontSize: {
      'xs':   'var(--font-size-xs)',
      'sm':   'var(--font-size-sm)',
      'base': 'var(--font-size-base)',
      'lg':   'var(--font-size-lg)',
      'xl':   'var(--font-size-xl)',
      '2xl':  'var(--font-size-2xl)',
      '3xl':  'var(--font-size-3xl)',
      '4xl':  'var(--font-size-4xl)',
      '5xl':  'var(--font-size-5xl)',
      '6xl':  'var(--font-size-6xl)'
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