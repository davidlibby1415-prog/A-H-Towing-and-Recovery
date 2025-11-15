/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./pages/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx,mdx}", // safe if you ever add a src/ folder
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // A&H brand palette
        ahChrome: {
          DEFAULT: "#C0C0C0", // Chrome silver base
          light: "#D9D9D9",   // Light reflection tone
          dark: "#A8A8A8",    // Darker edge tone
        },
        ahCharcoal: "#1C1C1C", // Header + footer charcoal
        ahBlue: "#2563EB",     // Dispatch call button
        ahRed: "#DC2626",      // Text/SMS button
        ahText: "#F9FAFB",     // Light text on dark backgrounds
        ahAccent: "#FACC15",   // Highlight yellow
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        cta: "0 4px 12px rgba(0,0,0,0.25)",
        glow: "0 0 12px rgba(250, 204, 21, 0.6)",
      },
      backgroundImage: {
        chrome:
          "linear-gradient(145deg, #E6E6E6, #C0C0C0, #A8A8A8, #E6E6E6)",
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};

module.exports = config;
