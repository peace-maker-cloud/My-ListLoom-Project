/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        others: "360px",
        miNote: "390px",
        iphoneSE: "375px",
        oneSamPixel: "412px",
        iphoneXR: "414px",
      },
      fontFamily: {
        poppins: "Poppins,sans-serif",
      },
    },
  },
  plugins: [],
};
