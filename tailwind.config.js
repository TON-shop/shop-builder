/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        foreground: "rgb(var(--color-foreground) / <alpha-value>)",
        background: "rgb(var(--color-background) / <alpha-value>)",
        front: "rgb(var(--color-front) / <alpha-value>)",
        back: "rgb(var(--color-back) / <alpha-value>)",
      },
      borderRadius: {
        sm: "calc(var(--radius) - 4px)",
        md: `calc(var(--radius) - 2px)`,
        lg: `var(--radius)`,
        xl: `calc(var(--radius) + 4px)`,
        inherit: "inherit",
      },
      transitionDuration: {
        inherit: "inherit",
      },
      fontFamily: {
        poppins: '"Poppins", sans-serif',
        raleway: '"Raleway", sans-serif',
        geistSans: '"Geist Sans", sans-serif',
        default: "var(--font-default), sans-serif",
      },
      zIndex: {
        1: 1,
      },
      keyframes: {},
      animation: {},
    },
  },
  plugins: [],
};
