import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-color": "var(--primary-color)",
        "txt-pri-color": "var(--txt-pri-color)",
        "btn-color": "var(--btn-color)",
        "btn-color-hover": "var(--btn-color-hover)",
      },
      height: {
        "10%": "10%",
        90: "90vh",
        95: "95vh",
      },
      width: {
        550: "550px",
      },
      maxWidth: {
        550: "550px",
      },
    },
  },
  plugins: [],
};
export default config;
