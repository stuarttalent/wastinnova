import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#006430',
          50: '#E9F7EF',
          100: '#CFEFDD',
          200: '#9FDFBB',
          300: '#6FCE9A',
          400: '#3FBE78',
          500: '#129F58',
          600: '#006430',
          700: '#005427',
          800: '#00411F',
          900: '#002E16',
        },
        safety: {
          DEFAULT: '#D68910',
          50: '#FEF5E7',
          100: '#FCE6C3',
          200: '#F8CE87',
          300: '#F4B64B',
          400: '#F0A01F',
          500: '#D68910',
          600: '#B06F0D',
          700: '#87560A',
          800: '#5F3D07',
          900: '#3B2604',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      boxShadow: {
        soft: '0 12px 40px rgba(2, 6, 23, 0.10)',
      },
    },
  },
  plugins: [],
} satisfies Config

