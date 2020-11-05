const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


// Compile scss into css
function style() {
  // Where is my scss
  return gulp.src('app/scss/*.scss') //gets all files ending with .scss in src/scss
  // Pass that file through sass compiler
  .pipe(sass().on('error',sass.logError))
  // Where do I save the compiled css file
  .pipe(gulp.dest('app/css'))
  // Stream change to all browsers
  .pipe(browserSync.stream());
}

// Watch for changes in html/scss/js files
function watch() {
  browserSync.init({
      server: {
          baseDir: "./app/",
          index: "/index.html"
      }
  });
  gulp.watch('app/scss/main.scss', style);
  gulp.watch('app/index.html').on('change',browserSync.reload);
  gulp.watch('app/js/main.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;