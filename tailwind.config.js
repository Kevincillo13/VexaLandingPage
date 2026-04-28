/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      colors: {
        brand: {
          lavender: '#E6E6FA',
          violet: '#8A2BE2',
          black: '#0A0A0A',
          white: '#FAFAFA'
        }
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(to right, #E6E6FA, #8A2BE2)',
        'gradient-accent-hover': 'linear-gradient(to right, #D8BFD8, #9400D3)'
      },
      boxShadow: {
        'premium': '0 1px 2px 0 rgba(10, 10, 10, 0.1), 0 4px 4px 0 rgba(10, 10, 10, 0.09), 0 9px 6px 0 rgba(10, 10, 10, 0.05), 0 17px 7px 0 rgba(10, 10, 10, 0.01), 0 26px 7px 0 rgba(10, 10, 10, 0), inset 0 2px 8px 0 rgba(255, 255, 255, 0.5)',
        'subtle': '0 0 0 0.5px rgba(0, 0, 0, 0.05), 0 4px 30px rgba(0, 0, 0, 0.08)',
      },
      transitionDelay: {
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
        '700': '700ms',
        '800': '800ms',
        '900': '900ms',
        '1000': '1000ms',
      }
    },
  },
  plugins: [],
}
