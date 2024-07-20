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
        primary: {
          850: "#180e22",
          900: "#0f0715",
        },
        accent: {
          200: "#C4B7DF",
          800: "#8750F7",
          900: "#2D1F49",
        },
      },
      fontFamily: {
        dana: ["var(--font-dana)"],
      },
    },
  },
  plugins: [],
};
export default config;
