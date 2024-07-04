/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        border: '#dedede',
      },
      maxWidth: {
        "820px": "820px"
      },
      gridTemplateColumns: {
        '320px-auto': '320px auto',
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [],
}
