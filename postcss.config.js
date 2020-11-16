// postcss.config.js
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    tailwindcss('./tailwind.ansly.js'),
    tailwindcss('./tailwind.config.js'),
    autoprefixer,
  ],
};