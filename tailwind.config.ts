import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customOrange: "#f0b37e",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#008080",
        secondary: "#EAB308",
        third: "#2E4747",
        textColor: "#9CA3AF",
        borderColor: "#4B5563",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
export default config;
