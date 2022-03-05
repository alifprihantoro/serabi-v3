const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss'); /* Add this line at the top */

mix.sass('./src/assets/scss/main.scss', './main.css')
  .options({
    postCss: [ tailwindcss('./tailwind.config.js') ]
  })
