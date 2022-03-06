const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss'); /* Add this line at the top */
const { exec } = require('child_process');
// require('laravel-mix-simple-image-processing');

mix
  .sass('./assets/scss/main.scss', './static/main.css')
  .options({
    postCss: [tailwindcss('./tailwind.config.js')],
  })
  .minify('./assets/js/main.js', './static/main.js');
// .imgs({
//   source: 'assets/images',
//   destination: 'assets/images',
//   // ... other optional parameters
//   thumbnailsSizes: [300, 600], // Generate thumbnails with 300px and 600px width.
// });

exec('hugo serve');
exec('cp assets/static/* static/');
