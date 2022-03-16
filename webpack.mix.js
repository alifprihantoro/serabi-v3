const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss'); /* Add this line at the top */
const { exec } = require('child_process');
// require('laravel-mix-simple-image-processing');
mix
  .sass('./assets/scss/post/main.scss', './public/post.css')
  .options({
    postCss: [tailwindcss('./tailwind.config.js')],
  })
  .babel(['./assets/js/icon.js','./assets/js/popup.js'], './assets/main.js')

exec('hugo server --minify --destination public');
