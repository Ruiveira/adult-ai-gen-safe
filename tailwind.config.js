/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // se tiver src
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        gray: {
          950: "#0a0a0f",
          900: "#111111",
          800: "#1f1f1f",
          700: "#2d2d2d",
          600: "#4b4b4b",
          500: "#737373",
          400: "#a1a1aa",
          300: "#d4d4d8",
          200: "#e5e5e5",
          100: "#f5f5f5",
          50: "#fafafa",
        },
        purple: {
          950: "#3b0764",
          900: "#581c87",
          800: "#7e22ce",
          700: "#9333ea",
          600: "#a855f7",
          500: "#c084fc",
          400: "#d8b4fe",
          300: "#e9d5ff",
          200: "#f3e8ff",
          100: "#faf5ff",
        },
      },
    },
  },
  plugins: [],
  safelist: [
    "bg-background",
    "text-foreground",
    "bg-gray-950",
    // Adicione mais se precisar
  ],
};
