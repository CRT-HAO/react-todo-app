import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        foreground: "rgb(var(--foreground-rgb))",
        background: "rgb(var(--background-rgb))",
        background2: "rgb(var(--background2-rgb))",
      },
    },
  },
  plugins: [],
};

export default config;
