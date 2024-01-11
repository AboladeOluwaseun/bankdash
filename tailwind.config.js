/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#2D60FF",
        primaryBlueLight: "#343C6A",
        primaryBlueDark: "#0A06F4",
        primaryGrey: "#B1B1B1",
        mainBackground: "#F5F7FA",
      },
      gridTemplateColumns: {
        headerGrid: "20% 80%",
      },
      screens: {
        xs: "375px",
        ss: "425px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
      backgroundImage:{
        cardBg:'linear-gradient(107deg, #4C49ED 2.61%, #0A06F4 101.2%)',
        cardBg2:'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.00) 100%);',
      }
    },
  },
  plugins: [],
};
