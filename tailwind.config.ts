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
        primary: "#4a30fe",
        secondary: "#ff0e85",
      },
      backgroundImage: {
        primary: "#4a30fe",
        secondary: "#ff0e85",
      },
      maxWidth: {
        layout: "1024px",
        wider: "1220px",
        widerInner: "1120px",
      },
      width: {
        layout: "1024px",
        wider: "1220px",
        widerInner: "1120px",
      },
    },
  },
  plugins: [],
};
export default config;
