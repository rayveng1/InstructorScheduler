import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        utdgreen: "#154734",
        utdorange: "#e87500",
      },
      gridTemplateRows: {
        "57": "repeat(57, 40px)",
      },
      gridTemplateColumns: {
        week: "100px repeat(5, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
export default config;
