/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.25rem",
      xl: "1.563rem",
      "2xl": "2.18rem",
    },
    fontFamily: {
      sans: ['"Rubik"', "Helvetica", "Arial", "sans-serif"],
      mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
    },
    extend: {
      colors: {
        primary: "#A277FF",
        primaryDark: "#5607FF",
        primaryLight: "#A277FF",
        text: "#7B7599",
        textLight: "#7C7799",
        textHeading: "#FFFFFF",
        bg: "#070512",
        bgLight: "#0E0A22",
        bgLightest: "#151032",
        bgDark: "#000001",
        line: "#1F1942",
      },
    },
  },
  plugins: [],
};
