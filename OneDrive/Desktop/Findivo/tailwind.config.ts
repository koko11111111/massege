import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        findivo: {
          // slate (primary brand) — replaces old teal
          50: "#F4F5F6",
          100: "#E4E6E9",
          200: "#C7CCD2",
          300: "#A2A9B3",
          400: "#7A828F",
          500: "#566070",
          600: "#3E4858",
          700: "#2B3440",
          800: "#1F2630",
          900: "#1C232C",
        },
        amber: {
          50: "#FDF6E9",
          100: "#FAEAC8",
          200: "#F4D292",
          300: "#EDB962",
          400: "#E0A23A",
          500: "#C98A2A",
          600: "#A66E1E",
          700: "#7D5316",
          800: "#553A0F",
          900: "#33230A",
        },
        cream: {
          DEFAULT: "#FAF8F4",
          card: "#FFFFFB",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        serif: ["var(--font-source-serif)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
