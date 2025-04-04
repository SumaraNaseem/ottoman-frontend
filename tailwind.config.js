/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-lightblue': '2px -3px 4px 2px #00ACBB',
      },
      colors:{
      'primary':'#00acbb',
      animation: {
        'fade-in-out': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },

      },
    },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
        spacing: {
        '11': '2.75rem',
      }
     
      

    },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '12rem',
        },
      },
  },
  plugins: [require('daisyui')],
};
