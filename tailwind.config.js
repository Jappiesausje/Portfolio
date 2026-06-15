/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        github: {
          dark: '#0d1117',
          header: '#161b22',
          border: '#30363d',
          text: '#c9d1d9',
          muted: '#8b949e',
          blue: '#58a6ff',
          white: '#f0f6fc'
        }
      }
    },
  },
  plugins: [],
}
