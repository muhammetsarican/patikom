/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.html"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },
    extend: {
      colors: {
        primary: "#FFA500",
        accent: "#FFD700",
        background: "#DCDCDC",
        secondary: "#F08080",
        muted: "#C0C0C0",
        tertiary: "#6A5ACD",
        "primary-text": "#333333",
        "accent-text": "#FF8C00",
        "muted-text": "#808080",
        "link-text": "#1E90FF",
        "off-white-text": "#F8F8F8",
        "ivory-text": "#FFFFF0",
      },
      fontFamily: {
        tiny5: ["Tiny5", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
        sora: ["Sora", "sans-serif"]
      }
    },
  },
  plugins: [],
}

