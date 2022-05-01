module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        carousel: {
          '0%, 100%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(0%)' },
        }
      }
    },
  },
  plugins: [],
}
