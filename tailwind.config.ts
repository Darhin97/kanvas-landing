import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textColor: {
        "new-sky": "#37364F",
        "new-sky-light": "#2E4FFF",
      },
      backgroundColor: {
        "new-sky": "#37364F",
        "new-sky-light": "#2E4FFF",
      },
      screens: {
        xs: "440px",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
