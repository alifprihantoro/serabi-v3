const mix = require("laravel-mix");
const tailwindcss = require("tailwindcss"); /* Add this line at the top */
const { exec } = require("child_process");

mix.sass("./src/assets/scss/main.scss", "./src/static/main.css")
  .options({
  postCss: [tailwindcss("./tailwind.config.js")],
});


exec("hugo server -s src", (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});

