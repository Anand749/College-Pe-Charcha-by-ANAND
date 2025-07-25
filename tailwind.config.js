module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6a3d',
        secondary: '#ffb86b',
        accent: {
          500: '#ff6a3d',
          400: '#ffb86b',
          300: '#ffd6a5',
        },
        surface: '#18181b',
        dark: {
          900: '#0f0f0f',
          800: '#18181b',
          700: '#23232a',
          600: '#2d2d36',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
