/** @type {import('tailwindcss').Config} */
export default {
  // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px', // Ant Design: <576px
        sm: '576px', // Ant Design: >=576px
        md: '768px', // Ant Design: >=768px
        lg: '992px', // Ant Design: >=992px
        xl: '1200px', // Ant Design: >=1200px
        xxl: '1400px', // Ant Design: >=1400px
      },
      colors: {
        primary: {
          100: '#F9CCD1',
          200: '#EE6676',
          300: '#E69798',
          400: '#DB6D6E',
          500: '#E83348',
          600: '#E2001A',
          700: '#B50015',
          800: '#9E0012',
        },
      },
    },
  },
  plugins: [],
}
