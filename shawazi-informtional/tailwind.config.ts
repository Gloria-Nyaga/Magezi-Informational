import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
theme: {
  extend: {
    colors: {
      background: "var(--background)",
      primary: "#3E1C00",
      secondary: "#E4960E",
      hover: "#508408",
      white: "#FFFFFF",
      tertiary: '#3E1C00',
      foreground: "#508408",
      'secondary-light': '#FFEDD5',
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    theme: {
      extend: {
        fontFamily: {
          jost: ['Jost', 'sans-serif'],
        },
      },
    },
  },
},
  plugins: [],
};
export default config;