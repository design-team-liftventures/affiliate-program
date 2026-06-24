import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Semantic — Interactive
        'interactive-primary': '#006C7A',
        'interactive-hover': '#005863',
        'interactive-primary-bg': '#F0F9FA',
        'interactive-hover-bg': '#CFEBEE',
        'interactive-disabled': '#CFCFCF',

        // Semantic — Text
        'text-primary': '#212121',
        'text-secondary': '#616161',
        'text-disabled': '#909090',
        'text-contrast': '#F8F8F8',
        'text-contrast-secondary': '#CFCFCF',

        // Semantic — Background
        'bg-default': '#FFFFFF',
        'bg-paper': '#F8F8F8',
        'bg-offpaper': '#EDEDED',

        // Semantic — Border
        'border-main': '#BFBFBF',
        'border-light': '#D9D9D9',
        'border-dark': '#797979',

        // Semantic — Brand
        'brand-main': '#1A7B87',

        // System status
        'system-error': '#8B1417',
        'system-error-bg': '#F1D4D4',
        'system-success': '#00631A',
        'system-success-bg': '#CCE5D3',
        'system-warning': '#8D5C1E',
        'system-warning-bg': '#F9E0C2',

        // Support palette (data viz / accent moments only)
        'aqua-1': '#01434B',
        'aqua-2': '#006C7A',
        'aqua-3': '#27929E',
        'aqua-4': '#50B5C0',
        'aqua-5': '#90D0D7',
        'aqua-6': '#CFEBEE',
        'indigo-1': '#1C416C',
        'indigo-2': '#25568E',
        'indigo-3': '#2E6AB0',
        'indigo-4': '#79A0CD',
        'indigo-5': '#B1C8E3',
        'indigo-6': '#D6E3F2',
        'olive-1': '#3D5C2F',
        'olive-2': '#578243',
        'olive-3': '#8BCD6C',
        'olive-4': '#B9E1A7',
        'olive-5': '#D1EBC4',
        'olive-6': '#E8F5E2',
        'orange-1': '#9F6033',
        'orange-6': '#FCEADD',
        'magenta-1': '#8E5159',
        'magenta-6': '#F4E2E4',
      },
      boxShadow: {
        'elevation-1': '0px 2px 8px 0px rgba(0,0,0,0.12)',
        'elevation-2': '0px 6px 16px 0px rgba(0,0,0,0.12)',
        'elevation-3': '0px 20px 20px 0px rgba(0,0,0,0.12)',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '20px',
        full: '9999px',
      },
      fontFamily: {
        sans: ['var(--font-open-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'caption-sm': ['12px', { lineHeight: '1.5', letterSpacing: '0.5px' }],
        caption: ['14px', { lineHeight: '1.5', letterSpacing: '0.5px' }],
        'body-sm': ['14px', { lineHeight: '1.5', letterSpacing: '0.25px' }],
        body: ['16px', { lineHeight: '1.5', letterSpacing: '0.25px' }],
        'body-lg': ['20px', { lineHeight: '1.5', letterSpacing: '0.5px' }],
        subtitle: [
          '20px',
          { lineHeight: '1.3', letterSpacing: '0.25px', fontWeight: '600' },
        ],
        'subtitle-lg': [
          '24px',
          { lineHeight: '1.3', letterSpacing: '0.25px', fontWeight: '600' },
        ],
        h6: ['24px', { lineHeight: '1.2' }],
        h5: ['30px', { lineHeight: '1.2' }],
        h4: ['36px', { lineHeight: '1.2', letterSpacing: '-0.1px' }],
        h3: ['40px', { lineHeight: '1.2', letterSpacing: '-0.25px' }],
        h2: ['48px', { lineHeight: '1.2', letterSpacing: '-0.5px' }],
        h1: ['72px', { lineHeight: '1.1', letterSpacing: '-1px' }],
        'display-h3': [
          '40px',
          { lineHeight: '1.2', letterSpacing: '-0.25px', fontWeight: '500' },
        ],
        'display-h2': [
          '48px',
          { lineHeight: '1.2', letterSpacing: '-0.5px', fontWeight: '500' },
        ],
        'display-h1': [
          '72px',
          { lineHeight: '1.1', letterSpacing: '-1px', fontWeight: '500' },
        ],
      },
    },
  },
  plugins: [],
}

export default config
