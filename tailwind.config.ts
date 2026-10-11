import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ECE9E2",
        surface: "rgba(255, 255, 255, 0.75)",
        surfaceSolid: "#F4F1EA",
        brandDark: "#111111",
        accentMint: "#4EEDB2",
        accentCyan: "#38BDF8",
      },
    },
  },
  plugins: [],
};

export default config;
