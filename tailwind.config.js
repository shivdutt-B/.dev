/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        header: "var(--theme-color)",
        'theme-color': 'var(--theme-color)',
        'bg': 'var(--bg)',
        'darkTxt': 'var(--dark-txt)',
        'lightTxt': 'var(--light-text)'
      },
      fontSize: {
        'primary': '100px',
        'maxHeading': 'var(--max-heading)',
        'midHeading': 'var(--mid-heading)',
        'minHeading': 'var(--min-heading)'
      },
      fontWeight: {
        'minWeight': 'var(--min-weight)',
        'midWeight': 'var(--mid-weight)',
        'maxWeight': 'var(max-weight)'
      },
      fontFamily: {
        'globalFontFam': 'var(--global-font-family)'
      }
    },
  },
  plugins: [],
}

