/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    // themes: ["light", "dark", "cupcake"],
    // themes: ["nord", "dracula", "dim"],
    themes: ["nord", "dracula", "nord"],
  },
}

