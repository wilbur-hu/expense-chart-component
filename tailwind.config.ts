import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        md: "540px",
      },
      colors: {
        red: "#EC755D",
        cyan: "#76B5BC",
        "dark-brown": "#382314",
        "medium-brown": "#92857A",
        "light-brown": "#F8E9DD",
        cream: "#F8E9DD",
        "card-white": "#FFFBF6",
      },
    },
  },
  plugins: [],
};
export default config;
