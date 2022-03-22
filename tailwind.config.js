const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: '#F1F5F9',
        blue: '#2563EB',
        accent: '#2563EB',
        primary: colors.black,
        secondary: '#1E293B',
        sla: '#62859D',
        slacomp: '#9D7A62'
      },
    },
  },
  plugins: [],
}
