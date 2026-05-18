import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        adish: {
          dark: "#1B4D3E",
          green: "#2D5A45",
          light: "#3d7a5f",
          forest: "#1B4D3E",
          gold: "#C8A854",
          light_gold: "#D4AF57",
          beige: "#F5F1E8",
          cream: "#F3F1ED",
          text: "#1a1a1a",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Garamond", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
