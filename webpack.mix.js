const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss'); /* Add this line at the top */
const { exec } = require('child_process');
// require('laravel-mix-simple-image-processing');

mix
  .sass('./assets/scss/main.scss', './public/main.css')
  .options({
    postCss: [tailwindcss('./tailwind.config.js')],
  })
  .minify('./assets/js/main.js', './public/main.js');
// .imgs({
//   source: 'assets/images',
//   destination: 'assets/images',
//   // ... other optional parameters
//   thumbnailsSizes: [300, 600], // Generate thumbnails with 300px and 600px width.
// });

exec('hugo --watch --minify');
exec('live-server public');
// exec('cp assets/static/* static/');
