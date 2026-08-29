import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep slate/black base — NextGen system
        ink: {
          DEFAULT: "#020617",
          950: "#020617",
          900: "#050B1F",
          800: "#0A1128",
          700: "#0F1A33",
          600: "#182541",
        },
        bone: {
          DEFAULT: "#FFFFFF",
          50: "#FFFFFF",
          100: "#F5F7FB",
          200: "#E6EAF3",
        },
        mist: {
          400: "#9CA3AF", // gray-400
          500: "#6B7280",
          600: "#4B5563",
        },
        // Electric blue accent
        accent: {
          DEFAULT: "#0a6cff",
          soft: "#3388FF",
          deep: "#2563eb",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": [
          "clamp(3rem, 7vw + 1rem, 7.5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.03em" },
        ],
        "display-lg": [
          "clamp(2.5rem, 5vw + 0.5rem, 5.25rem)",
          { lineHeight: "1.05", letterSpacing: "-0.028em" },
        ],
        "display-md": [
          "clamp(2rem, 3.5vw + 0.5rem, 3.75rem)",
          { lineHeight: "1.08", letterSpacing: "-0.025em" },
        ],
      },
      maxWidth: {
        container: "1400px",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      boxShadow: {
        glow: "0 0 20px rgba(10,108,255,0.4)",
        "glow-lg": "0 0 30px rgba(10,108,255,0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
