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
        ink: {
          DEFAULT: "#0A0A0B",
          950: "#050506",
          900: "#0A0A0B",
          800: "#141416",
          700: "#1C1C1F",
          600: "#2A2A2E",
        },
        bone: {
          DEFAULT: "#F5F4EF",
          50: "#FAFAF7",
          100: "#F5F4EF",
          200: "#EAE8E0",
        },
        mist: {
          400: "#8A8A90",
          500: "#6E6E74",
          600: "#4F4F55",
        },
        accent: {
          DEFAULT: "#C6F24E",
          soft: "#E7FBB2",
          deep: "#8FB833",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 7vw + 1rem, 7.5rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 5vw + 0.5rem, 5.25rem)", { lineHeight: "0.98", letterSpacing: "-0.028em" }],
        "display-md": ["clamp(2rem, 3.5vw + 0.5rem, 3.75rem)", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
      },
      maxWidth: {
        "container": "1360px",
      },
      transitionTimingFunction: {
        "premium": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
