/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        plum: {
          50: "#f7f1f4",
          100: "#efe1e8",
          200: "#dcc0cf",
          300: "#c194aa",
          400: "#a1667f",
          500: "#7d4360",
          600: "#5f2f49",
          700: "#4a1f38",
          800: "#3a1a2d",
          900: "#2a1121",
        },
        gold: {
          100: "#f6ecd8",
          200: "#ecd7ae",
          300: "#dcb877",
          400: "#c79c53",
          500: "#a9803e",
          600: "#8a6631",
        },
        linen: "#faf6f1",
        ink: "#241a1e",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Manrope'", "sans-serif"],
      },
      boxShadow: {
        card: "0 20px 45px -20px rgba(42, 17, 33, 0.35)",
      },
      keyframes: {
        reveal: {
          "0%": { opacity: "0", transform: "translateY(8px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        reveal: "reveal 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
