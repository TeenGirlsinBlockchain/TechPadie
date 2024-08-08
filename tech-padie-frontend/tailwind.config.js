/** @type {import('tailwindcss').Config} */

// tailwind.config.js
const lightColors = {
  "pink-200": "#F0E5FF",
  "pink-500": "#F18895",
  "purple-02": "#8338ec06",
  "purple-15": "#8338ec26",
  "purple-30": "#8338ec4d",
  "purple-100": "#ae7cf3",
  "purple-200": "#8338ec",
  "purple-300": "#6113cd",
  "purple-700": "#242050",
  "purple-800": "#181533",
  "purple-900": "#161430",
  "blue-200": "#7290C5",
  "blue-300": "#4F70AB",
  "blue-500": "#3a86ff",
  "blue-100": "#257cff59",
  "green-500": "#006F00",
  "contrast-100": "#8338ec06",
  "contrast-500": "#2f2f2f",
  white: "#ffffff",
  "offwhite-100": "#fffff3",
  "offwhite-200": "#F9F9F9",
  "offwhite-400": "#F4F1F9",
  "offwhite-500": "#F5F5F5",
  "offwhite-700": "#ececec",
  black: "#000000",
  "ash-100": "#F8F9FA",
  "ash-200": "#E9ECEF",
  "ash-300": "#DEE2E6",
  "ash-400": "#CED4DA",
  "ash-500": "#ADB5BD",
  "ash-600": "#6C757D",
  "ash-700": "#495057",
  "ash-800": "#343A40",
  "ash-900": "#212529",
  "ash-900-transparent": "#1212124d",
  ash: "#121212",
  "red-700": "#ef233c",
  "red-900": "#d90429",
  transparent: "#0000",
};

const darkColors = {
  white: "#1D1429",
  "offwhite-100": "#1F184D",
  "offwhite-400": "#1F182A",
  "offwhite-700": "#1F183f",
  "pink-200": "#312A3D",
  "ash-900": "#F8F9FA",
  "ash-800": "#E9ECEF",
  "ash-700": "#DEE2E6",
  "ash-600": "#CED4DA",
  "ash-500": "#ADB5BD",
  "ash-400": "#6C757D",
  "ash-300": "#495057",
  "ash-200": "#343A40",
  "ash-100": "#212529",
  "purple-700": "#ececec",
  "purple-800": "#F5F5F5",
  transparent: "#1F182A",
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: lightColors,
        dark: darkColors,
      },
    },
  },
  darkMode: "class",
  variants: {
    extend: {
      backgroundColor: ["dark"],
      textColor: ["dark"],
    },
  },
  plugins: [],
};
