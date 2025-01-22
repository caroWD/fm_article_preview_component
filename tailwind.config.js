/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['"Manrope"', 'ui-sans-serif', 'system-ui'],
    },
    colors: {
      'fiord': 'hsl(217, 19%, 35%)',
      'lynch': 'hsl(214, 17%, 51%)',
      'cadet-blue': 'hsl(212, 23%, 69%)',
      'alice-blue': 'hsl(210, 46%, 95%)',
      'white': 'hsl(0, 0%, 100%)',
    },
    extend: {
      screens: {
        '2xs': '375px',
        'xs': '425px',
      }
    },
  },
  plugins: [],
}