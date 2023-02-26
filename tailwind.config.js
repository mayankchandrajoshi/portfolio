/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        bounceIN :{
          "0%" : {
            transform: 'translateX(-100%)',
          },
          "70%" : {
            transform: 'translateX(-5px)',
          },
          "100%" : {
            transform: 'translateX(-10px)',
          }
        },
      bounceOUT :{
          "0%" : {
            transform: 'translateX(-10px)',
          },
          "70%" : {
            transform: 'translateX(-5px)',
          },
          "100%" : {
            transform: 'translateX(-100%)',
          }
        }
      }
    },
  },
  plugins: [],
}
