/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#3666FF",
          "primary-focus": "#1939B7",
          "primary-content": "#ffffff",

          secondary: "#919EAB",
          "secondary-focus": "#637381",
          "secondary-content": "#ffffff",

          accent: "#36B37E",
          "accent-focus": "#1B806A",
          "accent-content": "#ffffff",

          neutral: "#1e293b",
          "neutral-focus": "#020617",
          "neutral-content": "#cbd5e1",

          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#ced3d9",
          "base-content": "#475569",

          info: "#00B8D9",
          success: "#00ab55",
          warning: "#FFAB00",
          error: "#FF5630",

          "--rounded-box": "1rem",
          "--rounded-btn": ".5rem",
          "--rounded-badge": "1.9rem",

          "--animation-btn": ".25s",
          "--animation-input": ".2s",

          "--btn-text-case": "uppercase",
          "--navbar-padding": ".5rem",
          "--border-btn": "1px",
        },
        dark: {
          primary: "#0ea5e9",
          "primary-focus": "#0284c7",
          "primary-content": "#ffffff",

          secondary: "#64748b",
          "secondary-focus": "#4b5563",
          "secondary-content": "#ffffff",

          accent: "#36B37E",
          "accent-focus": "#1B806A",
          "accent-content": "#ffffff",

          neutral: "#0f172a",
          "neutral-focus": "#020617",
          "neutral-content": "#cbd5e1",

          "base-100": "#0f172a",
          "base-200": "#1e293b",
          "base-300": "#020617",
          "base-content": "#cbd5e1",
        },
      },
    ],
  },
};
