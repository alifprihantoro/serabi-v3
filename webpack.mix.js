const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss'); /* Add this line at the top */
const { exec } = require('child_process');

// config mix
mix.webpackConfig({
    stats: {
         children: true
    }
});

// style post
mix.sass('./assets/scss/post/main.scss', 'public/post.css', {}, [
    tailwindcss('./tailwind.config.post.js')
]).options({
    processCssUrls: false,
});

// style home
mix.sass('./assets/scss/home/main.scss', 'public/home.css', {}, [
    tailwindcss('./tailwind.config.home.js')
]).options({
    processCssUrls: false,
});

// script
mix
  .babel(['./assets/js/icon.js','./assets/js/popup.js'], './assets/main.js')
  .babel(['./assets/js/link.js'], './assets/home.js')

// hugo
exec('hugo server --minify --destination public');
