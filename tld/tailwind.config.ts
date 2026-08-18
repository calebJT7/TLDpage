import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0B09",
        surface: "#12140D",
        "surface-2": "#181B12",
        line: "rgba(232,233,230,0.08)",
        "line-strong": "rgba(232,233,230,0.16)",
        silver: {
          100: "#F2F3F0",
          300: "#E8E9E6",
          500: "#B7BBB2",
          700: "#9BA098",
        },
        military: {
          950: "#1A2013",
          900: "#242C19",
          800: "#2E3820",
          700: "#3E4A2E",
          600: "#4F5E3A",
          500: "#6B7F4A",
          400: "#8AA05F",
        },
        ink: {
          100: "#ECEDE9",
          400: "#8B8F84",
          600: "#5C5F57",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.35em",
        widest3: "0.5em",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(rgba(232,233,230,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(232,233,230,0.05) 1px, transparent 1px)",
      },
      keyframes: {
        draw: {
          to: { strokeDashoffset: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        draw: "draw 2.4s cubic-bezier(0.65,0,0.35,1) forwards",
        "fade-up": "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in": "fade-in 1.2s ease forwards",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
