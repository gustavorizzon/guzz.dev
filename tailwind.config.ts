import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        powershell: {
          bg: "#012456",
          text: "#EEEDF0",
          command: "#EFB571",
          param: "#2472C8",
          accent: "#0078D4",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#012456",
        foreground: "#EEEDF0",
        primary: {
          DEFAULT: "#0078D4",
          foreground: "#EEEDF0",
        },
        secondary: {
          DEFAULT: "#2472C8",
          foreground: "#EEEDF0",
        },
        muted: {
          DEFAULT: "#001233",
          foreground: "#EEEDF0",
        },
        accent: {
          DEFAULT: "#0078D4",
          foreground: "#EEEDF0",
        },
        card: {
          DEFAULT: "#001233",
          foreground: "#EEEDF0",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        mono: ["Cascadia Code", "Consolas", ...fontFamily.mono],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
