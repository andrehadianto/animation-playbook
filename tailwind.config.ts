import type { Config } from "tailwindcss";

const config = {
  content: [
    "./common/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        elevated: "1",
        header: "2",
        modal: "50",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          default: "#2B71E9",
        },
        bg: {
          base: "#010409",
        },
        border: {
          base: "#30363D",
        },
        surface: {
          base: "#0D1117",
          elevated: "#161B22",
        },
        text: {
          "em-high": "#F7F7F8",
          "em-mid": "#A2A2B4",
          "em-low": "#777890",
          "em-placeholder": "#464655",
          "on-primary": "#F7F7F8",
          "on-success": "#29C244",
          "on-error": "#E31E1E",
          "on-warning": "#FB9F05",
        },
        element: {
          primary: "#2B71E9",
          secondary: "#2FBB4F",
          tertiary: "#292E36",
          disabled: "#1E2226",
          success: "#054511",
          warning: "#660707",
          error: "#573B0A",
        },
        link: "#2563EB",
        success: "#29C244",
        error: "#E31E1E",
        warning: "#FB9F05",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
