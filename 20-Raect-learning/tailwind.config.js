/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#38bdf8", // Light blue
          hover: "#0ea5e9",  // Darker blue for hover
        },
        secondary: {
          DEFAULT: "#22c55e", // Green
          hover: "#16a34a",  // Darker green for hover
        },
        textPrimary: "#000000", // Black for text
        textSecondary: "#4b5563", // Gray for secondary text
        background: "#f9fafb", // Light white shade for background
      },
      fontFamily: {
        sans: ["Inter", "Roboto", "Arial", "sans-serif"], // Custom fonts
      },
      spacing: {
        128: "32rem", // Add a custom spacing value
        144: "36rem",
      },
      borderRadius: {
        button: "0.5rem", // Button border radius
      },
    },
  },
  plugins: [],
};
