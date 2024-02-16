/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/containers/**/*.{js,jsx,ts,tsx}`,
    `./src/templates/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "70%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        },
        moving: {
          "0%": {
            backgroundPosition: "left top",
          },
          "100%": {
            backgroundPosition: "right bottom",
          }
        },
      },
      animation: {
        typing: "typing 3s steps(22) 1 alternate, blink 2s infinite",
        "bg-moving": "moving 30s linear infinite"
      }
    },
  },
  plugins: [],
}
