/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./pages/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ahBlue: "#0ea5e9",   // CTA blue (matches buttons/links)
        ahGreen: "#16a34a",  // SMS button green
        ahDark: "#111827",   // Primary text
        ahLight: "#f9fafb"   // Page background
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem"
      },
      boxShadow: {
        cta: "0 4px 12px rgba(0,0,0,0.15)"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      container: {
        center: true,
        padding: "1rem"
      }
    }
  },
  plugins: []
};
