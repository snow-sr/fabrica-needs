/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.vue", "./node_modules/tw-elements/dist/js/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin"), require("flowbite/plugin")],
};
